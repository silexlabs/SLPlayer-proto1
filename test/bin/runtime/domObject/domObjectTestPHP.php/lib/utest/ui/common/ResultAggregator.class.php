<?php

class utest_ui_common_ResultAggregator {
	public function __construct($runner, $flattenPackage) {
		if(!php_Boot::$skip_constructor) {
		if($flattenPackage === null) {
			$flattenPackage = false;
		}
		if($runner === null) {
			throw new HException("runner argument is null");
		}
		$this->flattenPackage = $flattenPackage;
		$this->runner = $runner;
		$runner->onStart->add((isset($this->start) ? $this->start: array($this, "start")));
		$runner->onProgress->add((isset($this->progress) ? $this->progress: array($this, "progress")));
		$runner->onComplete->add((isset($this->complete) ? $this->complete: array($this, "complete")));
		$this->onStart = new utest_Notifier();
		$this->onComplete = new utest_Dispatcher();
		$this->onProgress = new utest_Dispatcher();
	}}
	public $runner;
	public $flattenPackage;
	public $root;
	public $onStart;
	public $onComplete;
	public $onProgress;
	public function start($runner) {
		$this->root = new utest_ui_common_PackageResult(null);
		$this->onStart->dispatch();
	}
	public function getOrCreatePackage($pack, $flat, $ref) {
		if($ref === null) {
			$ref = $this->root;
		}
		if($pack === null || $pack === "") {
			return $ref;
		}
		if($flat) {
			if($ref->existsPackage($pack)) {
				return $ref->getPackage($pack);
			}
			$p = new utest_ui_common_PackageResult($pack);
			$ref->addPackage($p);
			return $p;
		} else {
			$parts = _hx_explode(".", $pack);
			{
				$_g = 0;
				while($_g < $parts->length) {
					$part = $parts[$_g];
					++$_g;
					$ref = $this->getOrCreatePackage($part, true, $ref);
					unset($part);
				}
			}
			return $ref;
		}
	}
	public function getOrCreateClass($pack, $cls, $setup, $teardown) {
		if($pack->existsClass($cls)) {
			return $pack->getClass($cls);
		}
		$c = new utest_ui_common_ClassResult($cls, $setup, $teardown);
		$pack->addClass($c);
		return $c;
	}
	public function createFixture($result) {
		$f = new utest_ui_common_FixtureResult($result->method);
		if(null == $result->assertations) throw new HException('null iterable');
		$»it = $result->assertations->iterator();
		while($»it->hasNext()) {
			$assertation = $»it->next();
			$f->add($assertation);
		}
		return $f;
	}
	public function progress($e) {
		$this->root->addResult($e->result, $this->flattenPackage);
		$this->onProgress->dispatch($e);
	}
	public function complete($runner) {
		$this->onComplete->dispatch($this->root);
	}
	public function __call($m, $a) {
		if(isset($this->$m) && is_callable($this->$m))
			return call_user_func_array($this->$m, $a);
		else if(isset($this->»dynamics[$m]) && is_callable($this->»dynamics[$m]))
			return call_user_func_array($this->»dynamics[$m], $a);
		else if('toString' == $m)
			return $this->__toString();
		else
			throw new HException('Unable to call «'.$m.'»');
	}
	function __toString() { return 'utest.ui.common.ResultAggregator'; }
}
