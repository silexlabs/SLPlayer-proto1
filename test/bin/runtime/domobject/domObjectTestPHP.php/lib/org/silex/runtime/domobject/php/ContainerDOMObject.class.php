<?php

class org_silex_runtime_domobject_php_ContainerDOMObject extends org_silex_runtime_domobject_base_ContainerDOMObjectBase {
	public function __construct($referenceToNativeDOMObject) { if(!php_Boot::$skip_constructor) {
		parent::__construct($referenceToNativeDOMObject);
	}}
	public function setSemantic($semantic) {
		parent::setSemantic($semantic);
	}
	function __toString() { return 'org.silex.runtime.domobject.php.ContainerDOMObject'; }
}
