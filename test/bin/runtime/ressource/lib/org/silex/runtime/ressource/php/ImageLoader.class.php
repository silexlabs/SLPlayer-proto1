<?php

class org_silex_runtime_ressource_php_ImageLoader extends org_silex_runtime_ressource_RessourceLoader {
	public function __construct() { if( !php_Boot::$skip_constructor ) {
		parent::__construct();
		;
	}}
	public function doLoad($relativeUrl) {
		$port = $_SERVER["SERVER_PORT"];
		$absoluteUrl = (((("http://" . $_SERVER['SERVER_NAME']) . ":") . $port) . php_Web::getURI()) . $relativeUrl;
		$domObject = new org_silex_runtime_domobject_php_ImageDOMObject(Xml::createElement("img"));
		$domObject->getReferenceToNativeDOM()->set("src", $relativeUrl);
		$this->onLoadComplete($domObject);
		unset($port,$domObject,$absoluteUrl);
	}
	function __toString() { return 'org.silex.runtime.ressource.php.ImageLoader'; }
}
