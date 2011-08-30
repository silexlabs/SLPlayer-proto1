<?php

class utest_TestResult {
	public function __construct() {
		;
	}
	public $pack;
	public $cls;
	public $method;
	public $setup;
	public $teardown;
	public $assertations;
	public function allOk() {
		if(null == $this->assertations) throw new HException('null iterable');
		$»it = $this->assertations->iterator();
		while($»it->hasNext()) {
			$l = $»it->next();
			$»t = ($l);
			switch($»t->index) {
			case 0:
			$pos = $»t->params[0];
			{
				break 2;
			}break;
			default:{
				return false;
			}break;
			}
		}
		return true;
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
	static function ofHandler($handler) {
		$r = new utest_TestResult();
		$path = _hx_explode(".", Type::getClassName(Type::getClass($handler->fixture->target)));
		$r->cls = $path->pop();
		$r->pack = $path->join(".");
		$r->method = $handler->fixture->method;
		$r->setup = $handler->fixture->setup;
		$r->teardown = $handler->fixture->teardown;
		$r->assertations = $handler->results;
		return $r;
	}
	function __toString() { return 'utest.TestResult'; }
}
