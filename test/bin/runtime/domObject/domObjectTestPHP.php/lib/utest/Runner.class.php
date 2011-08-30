<?php

class utest_Runner {
	public function __construct() {
		if(!php_Boot::$skip_constructor) {
		$this->fixtures = new _hx_array(array());
		$this->onProgress = new utest_Dispatcher();
		$this->onStart = new utest_Dispatcher();
		$this->onComplete = new utest_Dispatcher();
		$this->length = 0;
	}}
	public $fixtures;
	public $onProgress;
	public $onStart;
	public $onComplete;
	public $length;
	public function addCase($test, $setup, $teardown, $prefix, $pattern) {
		if($prefix === null) {
			$prefix = "test";
		}
		if($teardown === null) {
			$teardown = "teardown";
		}
		if($setup === null) {
			$setup = "setup";
		}
		if(!Reflect::isObject($test)) {
			throw new HException("can't add a null object as a test case");
		}
		if(!$this->isMethod($test, $setup)) {
			$setup = null;
		}
		if(!$this->isMethod($test, $teardown)) {
			$teardown = null;
		}
		$fields = Type::getInstanceFields(Type::getClass($test));
		if($pattern === null) {
			$_g = 0;
			while($_g < $fields->length) {
				$field = $fields[$_g];
				++$_g;
				if(!StringTools::startsWith($field, $prefix)) {
					continue;
				}
				if(!$this->isMethod($test, $field)) {
					continue;
				}
				$this->addFixture(new utest_TestFixture($test, $field, $setup, $teardown));
				unset($field);
			}
		} else {
			$_g = 0;
			while($_g < $fields->length) {
				$field = $fields[$_g];
				++$_g;
				if(!$pattern->match($field)) {
					continue;
				}
				if(!$this->isMethod($test, $field)) {
					continue;
				}
				$this->addFixture(new utest_TestFixture($test, $field, $setup, $teardown));
				unset($field);
			}
		}
	}
	public function addFixture($fixture) {
		$this->fixtures->push($fixture);
		$this->length++;
	}
	public function getFixture($index) {
		return $this->fixtures[$index];
	}
	public function isMethod($test, $name) {
		try {
			return Reflect::isFunction(Reflect::field($test, $name));
		}catch(Exception $»e) {
			$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
			$e = $_ex_;
			{
				return false;
			}
		}
	}
	public function run() {
		$this->onStart->dispatch($this);
		{
			$_g1 = 0; $_g = $this->fixtures->length;
			while($_g1 < $_g) {
				$i = $_g1++;
				$h = $this->runFixture($this->fixtures[$i]);
				$this->onProgress->dispatch(_hx_anonymous(array("result" => utest_TestResult::ofHandler($h), "done" => $i + 1, "totals" => $this->length)));
				unset($i,$h);
			}
		}
		$this->onComplete->dispatch($this);
	}
	public function runFixture($fixture) {
		$handler = new utest_TestHandler($fixture);
		$handler->execute();
		return $handler;
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
	function __toString() { return 'utest.Runner'; }
}
