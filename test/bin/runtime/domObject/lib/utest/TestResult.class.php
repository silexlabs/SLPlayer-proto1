<?php

class utest_TestResult {
	public function __construct() {
		if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("utest.TestResult::new");
		$»spos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}}
	public $pack;
	public $cls;
	public $method;
	public $setup;
	public $teardown;
	public $assertations;
	public function allOk() {
		$GLOBALS['%s']->push("utest.TestResult::allOk");
		$»spos = $GLOBALS['%s']->length;
		try {
			if(null == $this->assertations) throw new HException('null iterable');
			$»it = $this->assertations->iterator();
			while($»it->hasNext()) {
			$l = $»it->next();
			{
				$»t = ($l);
				switch($»t->index) {
				case 0:
				$pos = $»t->params[0];
				{
					throw new _hx_break_exception();
					;
				}break;
				default:{
					{
						$GLOBALS['%s']->pop();
						return false;
						;
					}
					;
				}break;
				}
				;
			}
			}
		} catch(_hx_break_exception $»e){}
		{
			$GLOBALS['%s']->pop();
			return true;
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
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
		$GLOBALS['%s']->push("utest.TestResult::ofHandler");
		$»spos = $GLOBALS['%s']->length;
		$r = new utest_TestResult();
		$path = _hx_explode(".", Type::getClassName(Type::getClass($handler->fixture->target)));
		$r->cls = $path->pop();
		$r->pack = $path->join(".");
		$r->method = $handler->fixture->method;
		$r->setup = $handler->fixture->setup;
		$r->teardown = $handler->fixture->teardown;
		$r->assertations = $handler->results;
		{
			$GLOBALS['%s']->pop();
			return $r;
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos,$r,$path);
	}
	function __toString() { return 'utest.TestResult'; }
}
