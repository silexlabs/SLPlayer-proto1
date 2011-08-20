<?php

class org_silex_runtime_nativeClass_NativeClass {
	public function __construct() { if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.nativeClass.NativeClass::new");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}}
	static function getNativeInstanceByClassName($className) {
		$GLOBALS['%s']->push("org.silex.runtime.nativeClass.NativeClass::getNativeInstanceByClassName");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = new org_silex_runtime_nativeClass_php_NativeInstance($className);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function createInstanceOf($classReference) {
		$GLOBALS['%s']->push("org.silex.runtime.nativeClass.NativeClass::createInstanceOf");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = org_silex_runtime_nativeClass_NativeClass::getNativeInstanceByClassName(Type::getClassName($classReference));
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	function __toString() { return 'org.silex.runtime.nativeClass.NativeClass'; }
}
