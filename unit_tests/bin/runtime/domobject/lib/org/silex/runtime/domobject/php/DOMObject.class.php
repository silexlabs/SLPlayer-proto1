<?php

class org_silex_runtime_domobject_php_DOMObject extends org_silex_runtime_domobject_base_DOMObjectBase {
	public function __construct($referenceToNativeDOM) { if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::new");
		$製pos = $GLOBALS['%s']->length;
		parent::__construct($referenceToNativeDOM);
		$GLOBALS['%s']->pop();
		unset($製pos);
	}}
	public function addChild($domObject) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::addChild");
		$製pos = $GLOBALS['%s']->length;
		parent::addChild($domObject);
		$this->_referenceToNativeDOM->addChild($domObject->getReferenceToNativeDOM());
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function getAttribute($propertyName) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::getAttribute");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = $this->_referenceToNativeDOM->get($propertyName);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function setX($value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::setX");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function getX() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::getX");
		$製pos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return 0;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function setY($value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::setY");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function getY() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::getY");
		$製pos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return 0;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function setWidth($value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::setWidth");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function getWidth() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::getWidth");
		$製pos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return 0;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function setHeight($value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::setHeight");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function getHeight() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::getHeight");
		$製pos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return 0;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function setRotation($value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::setRotation");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function getRotation() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::getRotation");
		$製pos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return 0;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function setZOrder($value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::setZOrder");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function getZOrder() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::getZOrder");
		$製pos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return 0;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function setStyle($property, $value) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::setStyle");
		$製pos = $GLOBALS['%s']->length;
		$styleHash = new Hash();
		$GLOBALS['%s']->pop();
		unset($製pos,$styleHash);
	}
	public function getStyle($property) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.DOMObject::getStyle");
		$製pos = $GLOBALS['%s']->length;
		$styleHash = new Hash();
		{
			$GLOBALS['%s']->pop();
			return "";
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$styleHash);
	}
	function __toString() { return 'org.silex.runtime.domobject.php.DOMObject'; }
}
