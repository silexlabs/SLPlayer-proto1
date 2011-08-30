<?php

class org_silex_runtime_nativeClass_NativeInstanceBase {
	public function __construct($nativeInstanceClassName) {
		if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.nativeClass.NativeInstanceBase::new");
		$»spos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}}
	public $_refToNativeClassInstance;
	public function callMethod($methodName, $args) {
		$GLOBALS['%s']->push("org.silex.runtime.nativeClass.NativeInstanceBase::callMethod");
		$»spos = $GLOBALS['%s']->length;
		if(Reflect::isFunction(Reflect::field($this->_refToNativeClassInstance, $methodName))) {
			$method = Reflect::field($this->_refToNativeClassInstance, $methodName);
			{
				$»tmp = Reflect::callMethod($this->_refToNativeClassInstance, $method, $args);
				$GLOBALS['%s']->pop();
				return $»tmp;
				unset($»tmp);
			}
			unset($method);
		}
		{
			$GLOBALS['%s']->pop();
			return null;
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getField($fieldName) {
		$GLOBALS['%s']->push("org.silex.runtime.nativeClass.NativeInstanceBase::getField");
		$»spos = $GLOBALS['%s']->length;
		if(_hx_has_field($this->_refToNativeClassInstance, $fieldName)) {
			{
				$»tmp = Reflect::field($this->_refToNativeClassInstance, $fieldName);
				$GLOBALS['%s']->pop();
				return $»tmp;
				unset($»tmp);
			}
			;
		}
		else {
			{
				$GLOBALS['%s']->pop();
				return null;
				;
			}
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function setField($fieldName, $fieldValue) {
		$GLOBALS['%s']->push("org.silex.runtime.nativeClass.NativeInstanceBase::setField");
		$»spos = $GLOBALS['%s']->length;
		$this->_refToNativeClassInstance->{$fieldName} = $fieldValue;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getReferenceToNativeClassInstance() {
		$GLOBALS['%s']->push("org.silex.runtime.nativeClass.NativeInstanceBase::getReferenceToNativeClassInstance");
		$»spos = $GLOBALS['%s']->length;
		{
			$»tmp = $this->_refToNativeClassInstance;
			$GLOBALS['%s']->pop();
			return $»tmp;
			unset($»tmp);
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
	function __toString() { return 'org.silex.runtime.nativeClass.NativeInstanceBase'; }
}
