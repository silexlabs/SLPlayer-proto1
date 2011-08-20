<?php

class org_silex_runtime_domobject_base_DOMObjectBase {
	public function __construct($referenceToNativeDOMObject) {
		if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::new");
		$»spos = $GLOBALS['%s']->length;
		$this->_referenceToNativeDOM = $referenceToNativeDOMObject;
		$this->_children = new _hx_array(array());
		$this->setNativeListeners();
		$GLOBALS['%s']->pop();
		unset($»spos);
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
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::addChild");
		$»spos = $GLOBALS['%s']->length;
		$domObject->setParent($this);
		$this->_children->push($domObject);
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function removeChild($domObject) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::removeChild");
		$»spos = $GLOBALS['%s']->length;
		$domObject->setParent(null);
		$this->_children->remove($domObject);
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getParent() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::getParent");
		$»spos = $GLOBALS['%s']->length;
		{
			$»tmp = $this->_parent;
			$GLOBALS['%s']->pop();
			return $»tmp;
			unset($»tmp);
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function setParent($domObject) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::setParent");
		$»spos = $GLOBALS['%s']->length;
		$this->_parent = $domObject;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getChildren() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::getChildren");
		$»spos = $GLOBALS['%s']->length;
		{
			$»tmp = $this->_children;
			$GLOBALS['%s']->pop();
			return $»tmp;
			unset($»tmp);
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getReferenceToNativeDOM() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::getReferenceToNativeDOM");
		$»spos = $GLOBALS['%s']->length;
		{
			$»tmp = $this->_referenceToNativeDOM;
			$GLOBALS['%s']->pop();
			return $»tmp;
			unset($»tmp);
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function setAttribute($propertyName, $propertyValue) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::setAttribute");
		$»spos = $GLOBALS['%s']->length;
		$this->_referenceToNativeDOM->{$propertyName} = $propertyValue;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getAttribute($propertyName) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::getAttribute");
		$»spos = $GLOBALS['%s']->length;
		{
			$»tmp = Reflect::field($this->_referenceToNativeDOM, $propertyName);
			$GLOBALS['%s']->pop();
			return $»tmp;
			unset($»tmp);
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function setNativeListeners() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::setNativeListeners");
		$»spos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function unsetNativeListeners() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::unsetNativeListeners");
		$»spos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function onNativePress($event) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::onNativePress");
		$»spos = $GLOBALS['%s']->length;
		if($this->onPress !== null) {
			$this->onPress();
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function onNativeDoubleClick($event) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::onNativeDoubleClick");
		$»spos = $GLOBALS['%s']->length;
		if($this->onDoubleClick !== null) {
			$this->onDoubleClick();
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function onNativeRelease($event) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::onNativeRelease");
		$»spos = $GLOBALS['%s']->length;
		if($this->onRelease !== null) {
			$this->onRelease();
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function onNativeRollOver($event) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::onNativeRollOver");
		$»spos = $GLOBALS['%s']->length;
		if($this->onRollOver !== null) {
			$this->onRollOver();
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function onNativeRollOut($event) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::onNativeRollOut");
		$»spos = $GLOBALS['%s']->length;
		if($this->onRollOut !== null) {
			$this->onRollOut();
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function onNativeMouseMove($event) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::onNativeMouseMove");
		$»spos = $GLOBALS['%s']->length;
		if($this->onMouseMove !== null) {
			$this->onMouseMove();
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function setX($value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::setX");
		$»spos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getX() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::getX");
		$»spos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return 0;
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function setY($value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::setY");
		$»spos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getY() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::getY");
		$»spos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return 0;
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function setWidth($value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::setWidth");
		$»spos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getWidth() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::getWidth");
		$»spos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return 0;
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function setHeight($value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::setHeight");
		$»spos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getHeight() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::getHeight");
		$»spos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return 0;
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function setRotation($value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::setRotation");
		$»spos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getRotation() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::getRotation");
		$»spos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return 0;
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function setZOrder($value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::setZOrder");
		$»spos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getZOrder() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.DOMObjectBase::getZOrder");
		$»spos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return 0;
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
	static $rootDOMObject;
	function __toString() { return 'org.silex.runtime.domobject.base.DOMObjectBase'; }
}
