<?php

class org_silex_runtime_domobject_base_ImageDOMObjectBase extends org_silex_runtime_domobject_php_DOMObject {
	public function __construct($referenceToNativeDOMObject) { if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.ImageDOMObjectBase::new");
		$製pos = $GLOBALS['%s']->length;
		parent::__construct($referenceToNativeDOMObject);
		$GLOBALS['%s']->pop();
		unset($製pos);
	}}
	public function addChild($domObject) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.ImageDOMObjectBase::addChild");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function removeChild($domObject) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.ImageDOMObjectBase::removeChild");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	function __toString() { return 'org.silex.runtime.domobject.base.ImageDOMObjectBase'; }
}
