<?php

class org_silex_runtime_nativeClass_NativeClass {
	public function __construct() { ;
		;
		;
	}
	static function getNativeInstanceByClassName($className) {
		return new org_silex_runtime_nativeClass_php_NativeInstance($className);
		;
	}
	static function createInstanceOf($classReference) {
		return org_silex_runtime_nativeClass_NativeClass::getNativeInstanceByClassName(Type::getClassName($classReference));
		;
	}
	function __toString() { return 'org.silex.runtime.nativeClass.NativeClass'; }
}
