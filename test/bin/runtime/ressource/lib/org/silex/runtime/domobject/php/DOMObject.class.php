<?php

class org_silex_runtime_domobject_php_DOMObject extends org_silex_runtime_domobject_base_DOMObjectBase {
	public function __construct($referenceToNativeDOM) { if( !php_Boot::$skip_constructor ) {
		parent::__construct($referenceToNativeDOM);
		;
	}}
	public function addChild($domObject) {
		parent::addChild($domObject);
		$this->_referenceToNativeDOM->addChild($domObject->getReferenceToNativeDOM());
		;
	}
	public function getAttribute($propertyName) {
		return $this->_referenceToNativeDOM->get($propertyName);
		;
	}
	public function setX($value) {
		$this->_referenceToNativeDOM->style->left = $value . "px";
		;
	}
	public function getX() {
		return Std::parseInt($this->_referenceToNativeDOM->style->left);
		;
	}
	public function setY($value) {
		$this->_referenceToNativeDOM->style->top = $value . "px";
		;
	}
	public function getY() {
		return Std::parseInt($this->_referenceToNativeDOM->style->top);
		;
	}
	public function setWidth($value) {
		$this->_referenceToNativeDOM->style->width = $value . "px";
		;
	}
	public function getWidth() {
		return Std::parseInt($this->_referenceToNativeDOM->style->width);
		;
	}
	public function setHeight($value) {
		$this->_referenceToNativeDOM->style->height = $value . "px";
		;
	}
	public function getHeight() {
		return Std::parseInt($this->_referenceToNativeDOM->style->height);
		;
	}
	public function setRotation($value) {
		$rotationValue = ("rotate(" . $value) . "deg)";
		if(_hx_field($this->_referenceToNativeDOM->style, "MozTransform") !== null) {
			$this->_referenceToNativeDOM->style->MozTransform = $rotationValue;
			$this->_referenceToNativeDOM->style->MozTransformOrigin = "0 0";
			;
		}
		else {
			if(_hx_field($this->_referenceToNativeDOM->style, "WebkitTransform") !== null) {
				$this->_referenceToNativeDOM->style->WebkitTransform = $rotationValue;
				$this->_referenceToNativeDOM->style->WebkitTransformOrigin = "0 0";
				;
			}
			else {
				if(_hx_field($this->_referenceToNativeDOM->style, "OTransform") !== null) {
					$this->_referenceToNativeDOM->style->OTransform = $rotationValue;
					$this->_referenceToNativeDOM->style->OTransform = "0 0";
					;
				}
				;
			}
			;
		}
		unset($rotationValue);
	}
	public function getRotation() {
		$nativeRotation = "";
		if(_hx_field($this->_referenceToNativeDOM->style, "MozTransform") !== null) {
			$nativeRotation = $this->_referenceToNativeDOM->style->MozTransform;
			;
		}
		else {
			if(_hx_field($this->_referenceToNativeDOM->style, "WebkitTransform") !== null) {
				$nativeRotation = $this->_referenceToNativeDOM->style->WebkitTransform;
				;
			}
			else {
				if(_hx_field($this->_referenceToNativeDOM->style, "OTransform") !== null) {
					$nativeRotation = $this->_referenceToNativeDOM->style->OTransform;
					;
				}
				;
			}
			;
		}
		$nativeRotation = str_replace("rotate(", "", $nativeRotation);
		$nativeRotation = str_replace("deg)", "", $nativeRotation);
		return Std::parseInt($nativeRotation);
		unset($nativeRotation);
	}
	public function setZOrder($value) {
		;
		;
	}
	public function getZOrder() {
		return Std::parseInt($this->_referenceToNativeDOM->style->zIndex);
		;
	}
	function __toString() { return 'org.silex.runtime.domobject.php.DOMObject'; }
}
