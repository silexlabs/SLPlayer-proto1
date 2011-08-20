<?php

class org_silex_runtime_nativeClass_NativeInstanceBase {
	public function __construct($nativeInstanceClassName) {
		;
		;
		;
	}
	public $_refToNativeClassInstance;
	public function callMethod($methodName, $args) {
		if(Reflect::isFunction(Reflect::field($this->_refToNativeClassInstance, $methodName))) {
			$method = Reflect::field($this->_refToNativeClassInstance, $methodName);
			return Reflect::callMethod($this->_refToNativeClassInstance, $method, $args);
			unset($method);
		}
		return null;
		;
	}
	public function getField($fieldName) {
		if(_hx_has_field($this->_refToNativeClassInstance, $fieldName)) {
			return Reflect::field($this->_refToNativeClassInstance, $fieldName);
			;
		}
		else {
			return null;
			;
		}
		;
	}
	public function setField($fieldName, $fieldValue) {
		$this->_refToNativeClassInstance->{$fieldName} = $fieldValue;
		;
	}
	public function getReferenceToNativeClassInstance() {
		return $this->_refToNativeClassInstance;
		;
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
