<?php

class org_silex_unit_tests_runtime_nativeClass_TestClass {
	public function __construct() {
		if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex_unit_tests.runtime.nativeClass.TestClass::new");
		$»spos = $GLOBALS['%s']->length;
		$this->_testAttribute = "bim";
		$GLOBALS['%s']->pop();
		unset($»spos);
	}}
	public $_testAttribute;
	public function testMethod() {
		$GLOBALS['%s']->push("org.silex_unit_tests.runtime.nativeClass.TestClass::testMethod");
		$»spos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return "test OK";
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
	function __toString() { return 'org.silex_unit_tests.runtime.nativeClass.TestClass'; }
}
