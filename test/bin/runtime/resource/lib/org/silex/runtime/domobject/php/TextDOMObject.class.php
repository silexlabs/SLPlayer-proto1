<?php

class org_silex_runtime_domobject_php_TextDOMObject extends org_silex_runtime_domobject_base_TextDOMObjectBase {
	public function __construct($referenceToNativeDOMObject) { if( !php_Boot::$skip_constructor ) {
		parent::__construct($referenceToNativeDOMObject);
		;
	}}
	public function setText($text) {
		parent::setText($text);
		$this->_referenceToNativeDOM->addChild(Xml::createPCData($text));
		;
	}
	function __toString() { return 'org.silex.runtime.domobject.php.TextDOMObject'; }
}
