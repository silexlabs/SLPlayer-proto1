<?php

class org_silex_runtime_ressource_php_StringLoader extends org_silex_runtime_ressource_RessourceLoader {
	public function __construct() { if( !php_Boot::$skip_constructor ) {
		parent::__construct();
		;
	}}
	public function doLoad($relativeUrl) {
		$port = $_SERVER["SERVER_PORT"];
		$absoluteUrl = (((("http://" . $_SERVER['SERVER_NAME']) . ":") . $port) . php_Web::getURI()) . $relativeUrl;
		parent::doLoad($absoluteUrl);
		unset($port,$absoluteUrl);
	}
	function __toString() { return 'org.silex.runtime.ressource.php.StringLoader'; }
}
