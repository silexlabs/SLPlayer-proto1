<?php

class org_silex_runtime_nativeClass_php_NativeInstance extends org_silex_runtime_nativeClass_NativeInstanceBase {
	public function __construct($nativeInstanceClassName) { if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.nativeClass.php.NativeInstance::new");
		$»spos = $GLOBALS['%s']->length;
		parent::__construct($nativeInstanceClassName);
		if(Type::resolveClass($nativeInstanceClassName) !== null) {
			$this->_refToNativeClassInstance = Type::createInstance(Type::resolveClass($nativeInstanceClassName), new _hx_array(array()));
			;
		}
		else {
			$instanciationString = ("new " . $nativeInstanceClassName) . "();";
			$this->_refToNativeClassInstance = eval("return " . $instanciationString);
			unset($instanciationString);
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}}
	function __toString() { return 'org.silex.runtime.nativeClass.php.NativeInstance'; }
}
