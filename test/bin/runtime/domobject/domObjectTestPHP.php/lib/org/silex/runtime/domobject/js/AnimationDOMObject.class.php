<?php

class org_silex_runtime_domobject_js_AnimationDOMObject extends org_silex_runtime_domobject_base_AnimationDOMObjectBase {
	public function __construct($referenceToNativeDOMObject) { if(!php_Boot::$skip_constructor) {
		parent::__construct($referenceToNativeDOMObject);
	}}
	function __toString() { return 'org.silex.runtime.domobject.js.AnimationDOMObject'; }
}
