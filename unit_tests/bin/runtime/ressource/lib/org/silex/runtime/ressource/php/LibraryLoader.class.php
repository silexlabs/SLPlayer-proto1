<?php

class org_silex_runtime_ressource_php_LibraryLoader extends org_silex_runtime_ressource_RessourceLoader {
	public function __construct() { if( !php_Boot::$skip_constructor ) {
		parent::__construct();
		;
	}}
	public function doLoad($relativeUrl) {
		require_once($relativeUrl);
		$this->onLoadComplete(null);
		;
	}
	public function onLoadComplete($data) {
		$this->_onLoadCompleteCallback(null);
		;
	}
	function __toString() { return 'org.silex.runtime.ressource.php.LibraryLoader'; }
}
