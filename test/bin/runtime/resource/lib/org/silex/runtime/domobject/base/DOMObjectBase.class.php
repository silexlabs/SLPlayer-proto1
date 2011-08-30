<?php

class org_silex_runtime_domobject_base_DOMObjectBase {
	public function __construct($referenceToNativeDOMObject) {
		if( !php_Boot::$skip_constructor ) {
		$this->_referenceToNativeDOM = $referenceToNativeDOMObject;
		$this->_children = new _hx_array(array());
		$this->setNativeListeners();
		;
	}}
	public $onPress;
	public $onDoubleClick;
	public $onRelease;
	public $onRollOver;
	public $onRollOut;
	public $onMouseMove;
	public $onMouseWheel;
	public $onFocusIn;
	public $onFocusOut;
	public $_referenceToNativeDOM;
	public $_parent;
	public $_children;
	public function addChild($domObject) {
		$domObject->setParent($this);
		$this->_children->push($domObject);
		;
	}
	public function removeChild($domObject) {
		$domObject->setParent(null);
		$this->_children->remove($domObject);
		;
	}
	public function getParent() {
		return $this->_parent;
		;
	}
	public function setParent($domObject) {
		$this->_parent = $domObject;
		;
	}
	public function getChildren() {
		return $this->_children;
		;
	}
	public function getReferenceToNativeDOM() {
		return $this->_referenceToNativeDOM;
		;
	}
	public function setAttribute($propertyName, $propertyValue) {
		$this->_referenceToNativeDOM->{$propertyName} = $propertyValue;
		;
	}
	public function getAttribute($propertyName) {
		return Reflect::field($this->_referenceToNativeDOM, $propertyName);
		;
	}
	public function setNativeListeners() {
		;
		;
	}
	public function unsetNativeListeners() {
		;
		;
	}
	public function onNativePress($event) {
		if($this->onPress !== null) {
			$this->onPress();
			;
		}
		;
	}
	public function onNativeDoubleClick($event) {
		if($this->onDoubleClick !== null) {
			$this->onDoubleClick();
			;
		}
		;
	}
	public function onNativeRelease($event) {
		if($this->onRelease !== null) {
			$this->onRelease();
			;
		}
		;
	}
	public function onNativeRollOver($event) {
		if($this->onRollOver !== null) {
			$this->onRollOver();
			;
		}
		;
	}
	public function onNativeRollOut($event) {
		if($this->onRollOut !== null) {
			$this->onRollOut();
			;
		}
		;
	}
	public function onNativeMouseMove($event) {
		if($this->onMouseMove !== null) {
			$this->onMouseMove();
			;
		}
		;
	}
	public function setX($value) {
		;
		;
	}
	public function getX() {
		return 0;
		;
	}
	public function setY($value) {
		;
		;
	}
	public function getY() {
		return 0;
		;
	}
	public function setWidth($value) {
		;
		;
	}
	public function getWidth() {
		return 0;
		;
	}
	public function setHeight($value) {
		;
		;
	}
	public function getHeight() {
		return 0;
		;
	}
	public function setRotation($value) {
		;
		;
	}
	public function getRotation() {
		return 0;
		;
	}
	public function setZOrder($value) {
		;
		;
	}
	public function getZOrder() {
		return 0;
		;
	}
	public function __call($m, $a) {
		if(isset($this->$m) && is_callable($this->$m))
			return call_user_func_array($this->$m, $a);
		else if(isset($this->�dynamics[$m]) && is_callable($this->�dynamics[$m]))
			return call_user_func_array($this->�dynamics[$m], $a);
		else if('toString' == $m)
			return $this->__toString();
		else
			throw new HException('Unable to call �'.$m.'�');
	}
	static $rootDOMObject;
	function __toString() { return 'org.silex.runtime.domobject.base.DOMObjectBase'; }
}