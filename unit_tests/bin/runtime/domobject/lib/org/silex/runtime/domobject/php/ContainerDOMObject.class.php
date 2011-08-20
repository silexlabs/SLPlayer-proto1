<?php

class org_silex_runtime_domobject_php_ContainerDOMObject extends org_silex_runtime_domobject_base_ContainerDOMObjectBase {
	public function __construct($referenceToNativeDOMObject) { if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.ContainerDOMObject::new");
		$製pos = $GLOBALS['%s']->length;
		parent::__construct($referenceToNativeDOMObject);
		$GLOBALS['%s']->pop();
		unset($製pos);
	}}
	public function setSemantic($semantic) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.php.ContainerDOMObject::setSemantic");
		$製pos = $GLOBALS['%s']->length;
		parent::setSemantic($semantic);
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	function __toString() { return 'org.silex.runtime.domobject.php.ContainerDOMObject'; }
}
