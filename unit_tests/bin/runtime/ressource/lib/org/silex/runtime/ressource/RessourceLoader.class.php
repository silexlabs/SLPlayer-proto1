<?php

class org_silex_runtime_ressource_RessourceLoader {
	public function __construct() {
		;
		;
		;
	}
	public $_onLoadCompleteCallback;
	public $_onLoadErrorCallback;
	public function load($url, $onLoadComplete, $onLoadError, $allowCache) {
		$this->_onLoadCompleteCallback = $onLoadComplete;
		$this->_onLoadErrorCallback = $onLoadError;
		if($allowCache === false) {
			$url = $this->disableUrlCaching($url);
			;
		}
		$this->doLoad($url);
		;
	}
	public function doLoad($url) {
		$fileRequest = new haxe_Http($url);
		$fileRequest->onData = (isset($this->onLoadComplete) ? $this->onLoadComplete: array($this, "onLoadComplete"));
		$fileRequest->onError = (isset($this->onLoadError) ? $this->onLoadError: array($this, "onLoadError"));
		$fileRequest->request(false);
		unset($fileRequest);
	}
	public function onLoadComplete($data) {
		$this->_onLoadCompleteCallback($data);
		;
	}
	public function onLoadError($msg) {
		$this->_onLoadErrorCallback($msg);
		;
	}
	public function disableUrlCaching($url) {
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
		return $url;
		unset($getId);
	}
	public function __call($m, $a) {
		if(isset($this->$m) && is_callable($this->$m))
			return call_user_func_array($this->$m, $a);
		else if(isset($this->»dynamics[$m]) && is_callable($this->»dynamics[$m]))
			return call_user_func_array($this->»dynamics[$m], $a);
		else if('toString' == $m)
			return $this->__toString();
		else
			throw new HException('Unable to call «'.$m.'»');
	}
	function __toString() { return 'org.silex.runtime.ressource.RessourceLoader'; }
}
