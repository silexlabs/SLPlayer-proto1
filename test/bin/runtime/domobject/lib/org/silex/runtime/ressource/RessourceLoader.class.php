<?php

class org_silex_runtime_ressource_RessourceLoader {
	public function __construct() {
		if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoader::new");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}}
	public $_onLoadCompleteCallback;
	public $_onLoadErrorCallback;
	public function load($url, $onLoadComplete, $onLoadError, $allowCache) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoader::load");
		$製pos = $GLOBALS['%s']->length;
		$this->_onLoadCompleteCallback = $onLoadComplete;
		$this->_onLoadErrorCallback = $onLoadError;
		if($allowCache === false) {
			$url = $this->disableUrlCaching($url);
			;
		}
		$this->doLoad($url);
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function doLoad($url) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoader::doLoad");
		$製pos = $GLOBALS['%s']->length;
		$fileRequest = new haxe_Http($url);
		$fileRequest->onData = (isset($this->onLoadComplete) ? $this->onLoadComplete: array($this, "onLoadComplete"));
		$fileRequest->onError = (isset($this->onLoadError) ? $this->onLoadError: array($this, "onLoadError"));
		$fileRequest->request(false);
		$GLOBALS['%s']->pop();
		unset($製pos,$fileRequest);
	}
	public function onLoadComplete($data) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoader::onLoadComplete");
		$製pos = $GLOBALS['%s']->length;
		$this->_onLoadCompleteCallback($data);
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function onLoadError($msg) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoader::onLoadError");
		$製pos = $GLOBALS['%s']->length;
		$this->_onLoadErrorCallback($msg);
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function disableUrlCaching($url) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoader::disableUrlCaching");
		$製pos = $GLOBALS['%s']->length;
		$getId = "";
		if(_hx_index_of($url, "?", null) === -1) {
			$getId = "?";
			;
		}
		else {
			$getId = "&";
			;
		}
		$url .= ($getId . "rand=") . Math::round(Math::random() * 10000);
		{
			$GLOBALS['%s']->pop();
			return $url;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$getId);
	}
	public function __call($m, $a) {
		if(isset($this->$m) && is_callable($this->$m))
			return call_user_func_array($this->$m, $a);
		else if(isset($this->蜿ynamics[$m]) && is_callable($this->蜿ynamics[$m]))
			return call_user_func_array($this->蜿ynamics[$m], $a);
		else if('toString' == $m)
			return $this->__toString();
		else
			throw new HException('Unable to call �'.$m.'�');
	}
	function __toString() { return 'org.silex.runtime.ressource.RessourceLoader'; }
}
