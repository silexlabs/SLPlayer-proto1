<?php

class org_silex_runtime_domobject_php_DOMObject extends org_silex_runtime_domobject_base_DOMObjectBase {
	public function __construct($referenceToNativeDOM) { if(!php_Boot::$skip_constructor) {
		parent::__construct($referenceToNativeDOM);
	}}
	public function addChild($domObject) {
		parent::addChild($domObject);
		$this->_referenceToNativeDOM->addChild($domObject->getReferenceToNativeDOM());
	}
	public function getAttribute($propertyName) {
		return $this->_referenceToNativeDOM->get($propertyName);
	}
	public function setX($value) {
	}
	public function getX() {
		return 0;
	}
	public function setY($value) {
	}
	public function getY() {
		return 0;
	}
	public function setWidth($value) {
	}
	public function getWidth() {
		return 0;
	}
	public function setHeight($value) {
	}
	public function getHeight() {
		return 0;
	}
	public function setRotation($value) {
	}
	public function getRotation() {
		return 0;
	}
	public function setZOrder($value) {
	}
	public function getZOrder() {
		return 0;
	}
	public function setStyle($property, $value) {
		$styleHash = new Hash();
	}
	public function getStyle($property) {
		$styleHash = new Hash();
		return "";
	}
	function __toString() { return 'org.silex.runtime.domobject.php.DOMObject'; }
}
