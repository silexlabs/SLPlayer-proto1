<?php

class org_silex_runtime_ressource_RessourceLoaderManager {
	public function __construct() { if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoaderManager::new");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}}
	static $_ressourceDataArray;
	static $_isLoading = false;
	static function loadImage($url, $successCallback, $errorCallback, $allowCache) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoaderManager::loadImage");
		$製pos = $GLOBALS['%s']->length;
		if($allowCache === null) {
			$allowCache = true;
			;
		}
		$ressourceDataToAdd = _hx_anonymous(array("url" => $url, "onLoadComplete" => $successCallback, "onLoadError" => $errorCallback, "allowCache" => $allowCache, "loadingType" => org_silex_runtime_ressource_LoadingTypeValue::$image));
		org_silex_runtime_ressource_RessourceLoaderManager::addRessourceData($ressourceDataToAdd);
		$GLOBALS['%s']->pop();
		unset($製pos,$ressourceDataToAdd);
	}
	static function loadText($url, $successCallback, $errorCallback, $allowCache) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoaderManager::loadText");
		$製pos = $GLOBALS['%s']->length;
		if($allowCache === null) {
			$allowCache = true;
			;
		}
		$ressourceDataToAdd = _hx_anonymous(array("url" => $url, "onLoadComplete" => $successCallback, "onLoadError" => $errorCallback, "allowCache" => $allowCache, "loadingType" => org_silex_runtime_ressource_LoadingTypeValue::$text));
		org_silex_runtime_ressource_RessourceLoaderManager::addRessourceData($ressourceDataToAdd);
		$GLOBALS['%s']->pop();
		unset($製pos,$ressourceDataToAdd);
	}
	static function loadAnimation($url, $successCallback, $errorCallback, $allowCache) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoaderManager::loadAnimation");
		$製pos = $GLOBALS['%s']->length;
		if($allowCache === null) {
			$allowCache = true;
			;
		}
		$ressourceDataToAdd = _hx_anonymous(array("url" => $url, "onLoadComplete" => $successCallback, "onLoadError" => $errorCallback, "allowCache" => $allowCache, "loadingType" => org_silex_runtime_ressource_LoadingTypeValue::$animation));
		org_silex_runtime_ressource_RessourceLoaderManager::addRessourceData($ressourceDataToAdd);
		$GLOBALS['%s']->pop();
		unset($製pos,$ressourceDataToAdd);
	}
	static function loadContainer($url, $successCallback, $errorCallback, $allowCache) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoaderManager::loadContainer");
		$製pos = $GLOBALS['%s']->length;
		if($allowCache === null) {
			$allowCache = true;
			;
		}
		$ressourceDataToAdd = _hx_anonymous(array("url" => $url, "onLoadComplete" => $successCallback, "onLoadError" => $errorCallback, "allowCache" => $allowCache, "loadingType" => org_silex_runtime_ressource_LoadingTypeValue::$container));
		org_silex_runtime_ressource_RessourceLoaderManager::addRessourceData($ressourceDataToAdd);
		$GLOBALS['%s']->pop();
		unset($製pos,$ressourceDataToAdd);
	}
	static function loadString($url, $successCallback, $errorCallback, $allowCache) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoaderManager::loadString");
		$製pos = $GLOBALS['%s']->length;
		if($allowCache === null) {
			$allowCache = true;
			;
		}
		$ressourceDataToAdd = _hx_anonymous(array("url" => $url, "onLoadComplete" => $successCallback, "onLoadError" => $errorCallback, "allowCache" => $allowCache, "loadingType" => org_silex_runtime_ressource_LoadingTypeValue::$data));
		org_silex_runtime_ressource_RessourceLoaderManager::addRessourceData($ressourceDataToAdd);
		$GLOBALS['%s']->pop();
		unset($製pos,$ressourceDataToAdd);
	}
	static function loadLibrary($url, $successCallback, $errorCallback, $allowCache) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoaderManager::loadLibrary");
		$製pos = $GLOBALS['%s']->length;
		if($allowCache === null) {
			$allowCache = true;
			;
		}
		$ressourceDataToAdd = _hx_anonymous(array("url" => $url, "onLoadComplete" => $successCallback, "onLoadError" => $errorCallback, "allowCache" => $allowCache, "loadingType" => org_silex_runtime_ressource_LoadingTypeValue::$library));
		org_silex_runtime_ressource_RessourceLoaderManager::addRessourceData($ressourceDataToAdd);
		$GLOBALS['%s']->pop();
		unset($製pos,$ressourceDataToAdd);
	}
	static function addRessourceData($ressourceData) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoaderManager::addRessourceData");
		$製pos = $GLOBALS['%s']->length;
		if(org_silex_runtime_ressource_RessourceLoaderManager::$_ressourceDataArray === null) {
			org_silex_runtime_ressource_RessourceLoaderManager::$_ressourceDataArray = new _hx_array(array());
			;
		}
		org_silex_runtime_ressource_RessourceLoaderManager::$_ressourceDataArray->push($ressourceData);
		if(org_silex_runtime_ressource_RessourceLoaderManager::$_isLoading === false) {
			org_silex_runtime_ressource_RessourceLoaderManager::loadNextRessource();
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function loadNextRessource() {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoaderManager::loadNextRessource");
		$製pos = $GLOBALS['%s']->length;
		if(org_silex_runtime_ressource_RessourceLoaderManager::$_ressourceDataArray->length === 0) {
			org_silex_runtime_ressource_RessourceLoaderManager::$_isLoading = false;
			;
		}
		else {
			org_silex_runtime_ressource_RessourceLoaderManager::$_isLoading = true;
			$ressourceDataToLoad = org_silex_runtime_ressource_RessourceLoaderManager::$_ressourceDataArray[0];
			$ressourceLoader = null;
			$裨 = ($ressourceDataToLoad->loadingType);
			switch($裨->index) {
			case 0:
			{
				$ressourceLoader = new org_silex_runtime_ressource_php_StringLoader();
				;
			}break;
			case 1:
			{
				$ressourceLoader = new org_silex_runtime_ressource_php_ImageLoader();
				;
			}break;
			case 2:
			{
				$ressourceLoader = new org_silex_runtime_ressource_php_TextLoader();
				;
			}break;
			case 3:
			{
				$ressourceLoader = new org_silex_runtime_ressource_php_AnimationLoader();
				;
			}break;
			case 4:
			{
				$ressourceLoader = new org_silex_runtime_ressource_php_ContainerLoader();
				;
			}break;
			case 5:
			{
				$ressourceLoader = new org_silex_runtime_ressource_php_LibraryLoader();
				;
			}break;
			}
			$ressourceLoader->load($ressourceDataToLoad->url, (isset(org_silex_runtime_ressource_RessourceLoaderManager::$onLoadComplete) ? org_silex_runtime_ressource_RessourceLoaderManager::$onLoadComplete: array("org_silex_runtime_ressource_RessourceLoaderManager", "onLoadComplete")), (isset(org_silex_runtime_ressource_RessourceLoaderManager::$onLoadError) ? org_silex_runtime_ressource_RessourceLoaderManager::$onLoadError: array("org_silex_runtime_ressource_RessourceLoaderManager", "onLoadError")), $ressourceDataToLoad->allowCache);
			unset($ressourceLoader,$ressourceDataToLoad);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function onLoadComplete($data) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoaderManager::onLoadComplete");
		$製pos = $GLOBALS['%s']->length;
		$loadedRessourceData = org_silex_runtime_ressource_RessourceLoaderManager::$_ressourceDataArray->shift();
		$loadedRessourceData->onLoadComplete($data);
		org_silex_runtime_ressource_RessourceLoaderManager::loadNextRessource();
		$GLOBALS['%s']->pop();
		unset($製pos,$loadedRessourceData);
	}
	static function onLoadError($data) {
		$GLOBALS['%s']->push("org.silex.runtime.ressource.RessourceLoaderManager::onLoadError");
		$製pos = $GLOBALS['%s']->length;
		$errorRessourceData = org_silex_runtime_ressource_RessourceLoaderManager::$_ressourceDataArray->shift();
		$errorRessourceData->onLoadError($data);
		org_silex_runtime_ressource_RessourceLoaderManager::loadNextRessource();
		$GLOBALS['%s']->pop();
		unset($製pos,$errorRessourceData);
	}
	function __toString() { return 'org.silex.runtime.ressource.RessourceLoaderManager'; }
}
