<?php

class org_silex_runtime_ressource_php_AnimationLoader extends org_silex_runtime_ressource_RessourceLoader {
	public function __construct() { if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.php.AnimationLoader::new");
		$»spos = $GLOBALS['%s']->length;
		parent::__construct();
		$GLOBALS['%s']->pop();
		unset($»spos);
	}}
	function __toString() { return 'org.silex.runtime.ressource.php.AnimationLoader'; }
}
