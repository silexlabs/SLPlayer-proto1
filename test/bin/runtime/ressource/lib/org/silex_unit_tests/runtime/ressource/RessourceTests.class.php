<?php

class org_silex_unit_tests_runtime_ressource_RessourceTests {
	public function __construct() { ;
		;
		;
	}
	public function testStringLoad() {
		$successCallback = utest_Assert::createEvent((isset($this->onStringLoaded) ? $this->onStringLoaded: array($this, "onStringLoaded")), null);
		org_silex_runtime_ressource_RessourceLoaderManager::loadString("testString.txt", $successCallback, (isset($this->onStringLoadError) ? $this->onStringLoadError: array($this, "onStringLoadError")), null);
		unset($successCallback);
	}
	public function onStringLoaded($data) {
		utest_Assert::same("Hello loaded String !", $data, null, null, _hx_anonymous(array("fileName" => "RessourceTests.hx", "lineNumber" => 80, "className" => "org.silex_unit_tests.runtime.ressource.RessourceTests", "methodName" => "onStringLoaded")));
		;
	}
	public function onStringLoadError($msg) {
		;
		;
	}
	public function testContainerLoad() {
		$successCallback = utest_Assert::createEvent((isset($this->onContainerLoaded) ? $this->onContainerLoaded: array($this, "onContainerLoaded")), null);
		$containerUrl = "domObject.html";
		org_silex_runtime_ressource_RessourceLoaderManager::loadContainer($containerUrl, $successCallback, (isset($this->onContainerLoadError) ? $this->onContainerLoadError: array($this, "onContainerLoadError")), null);
		unset($successCallback,$containerUrl);
	}
	public function onContainerLoaded($domObject) {
		org_silex_runtime_domobject_base_DOMObjectBase::$rootDOMObject->addChild($domObject);
		utest_Assert::equals($domObject->getReferenceToNativeDOM()->firstChild()->get("id"), "loadedDOMObject", null, _hx_anonymous(array("fileName" => "RessourceTests.hx", "lineNumber" => 122, "className" => "org.silex_unit_tests.runtime.ressource.RessourceTests", "methodName" => "onContainerLoaded")));
		utest_Assert::equals(_hx_string_call($domObject->getReferenceToNativeDOM()->firstChild()->firstChild(), "toString", array()), "container loaded", null, _hx_anonymous(array("fileName" => "RessourceTests.hx", "lineNumber" => 123, "className" => "org.silex_unit_tests.runtime.ressource.RessourceTests", "methodName" => "onContainerLoaded")));
		;
	}
	public function onContainerLoadError($msg) {
		haxe_Log::trace($msg, _hx_anonymous(array("fileName" => "RessourceTests.hx", "lineNumber" => 133, "className" => "org.silex_unit_tests.runtime.ressource.RessourceTests", "methodName" => "onContainerLoadError")));
		;
	}
	public function testLibraryLoad() {
		$successCallback = utest_Assert::createEvent((isset($this->onLibraryLoaded) ? $this->onLibraryLoaded: array($this, "onLibraryLoaded")), null);
		org_silex_runtime_ressource_RessourceLoaderManager::loadLibrary("testLibrary.php", $successCallback, (isset($this->onLibraryError) ? $this->onLibraryError: array($this, "onLibraryError")), null);
		unset($successCallback);
	}
	public function onLibraryLoaded($data) {
		$nativeInstance = org_silex_runtime_nativeClass_NativeClass::getNativeInstanceByClassName("LibrarySymbol");
		utest_Assert::same($nativeInstance->callMethod("testMethod", new _hx_array(array())), "library loaded ok !", null, null, _hx_anonymous(array("fileName" => "RessourceTests.hx", "lineNumber" => 165, "className" => "org.silex_unit_tests.runtime.ressource.RessourceTests", "methodName" => "onLibraryLoaded")));
		unset($nativeInstance);
	}
	public function onLibraryError($msg) {
		;
		;
	}
	public function testLoadPicture() {
		$successCallback = utest_Assert::createEvent((isset($this->onPictureLoaded) ? $this->onPictureLoaded: array($this, "onPictureLoaded")), null);
		org_silex_runtime_ressource_RessourceLoaderManager::loadImage("testPicture.jpg", $successCallback, (isset($this->onPictureLoadError) ? $this->onPictureLoadError: array($this, "onPictureLoadError")), null);
		unset($successCallback);
	}
	public function onPictureLoaded($domObject) {
		org_silex_runtime_domobject_base_DOMObjectBase::$rootDOMObject->addChild($domObject);
		utest_Assert::same($domObject->getReferenceToNativeDOM()->_nodeName, "img", null, null, _hx_anonymous(array("fileName" => "RessourceTests.hx", "lineNumber" => 196, "className" => "org.silex_unit_tests.runtime.ressource.RessourceTests", "methodName" => "onPictureLoaded")));
		utest_Assert::same($domObject->getReferenceToNativeDOM()->get("src"), "testPicture.jpg", null, null, _hx_anonymous(array("fileName" => "RessourceTests.hx", "lineNumber" => 197, "className" => "org.silex_unit_tests.runtime.ressource.RessourceTests", "methodName" => "onPictureLoaded")));
		;
	}
	public function onPictureLoadError($error) {
		;
		;
	}
	public function testLoadNoCache() {
		$successCallback = utest_Assert::createEvent((isset($this->onPictureNoCacheLoaded) ? $this->onPictureNoCacheLoaded: array($this, "onPictureNoCacheLoaded")), null);
		org_silex_runtime_ressource_RessourceLoaderManager::loadImage("testPicture.jpg", $successCallback, (isset($this->onPictureLoadError) ? $this->onPictureLoadError: array($this, "onPictureLoadError")), false);
		unset($successCallback);
	}
	public function onPictureNoCacheLoaded($domObject) {
		org_silex_runtime_domobject_base_DOMObjectBase::$rootDOMObject->addChild($domObject);
		utest_Assert::same($domObject->getReferenceToNativeDOM()->_nodeName, "img", null, null, _hx_anonymous(array("fileName" => "RessourceTests.hx", "lineNumber" => 229, "className" => "org.silex_unit_tests.runtime.ressource.RessourceTests", "methodName" => "onPictureNoCacheLoaded")));
		$croppedSrc = $domObject->getReferenceToNativeDOM()->get("src");
		$croppedSrc = _hx_substr($croppedSrc, 0, _hx_index_of($croppedSrc, "?", null));
		utest_Assert::same($croppedSrc, "testPicture.jpg", null, null, _hx_anonymous(array("fileName" => "RessourceTests.hx", "lineNumber" => 232, "className" => "org.silex_unit_tests.runtime.ressource.RessourceTests", "methodName" => "onPictureNoCacheLoaded")));
		unset($croppedSrc);
	}
	public function testLoadText() {
		$successCallback = utest_Assert::createEvent((isset($this->onTextLoaded) ? $this->onTextLoaded: array($this, "onTextLoaded")), null);
		org_silex_runtime_ressource_RessourceLoaderManager::loadText("htmlText.html", $successCallback, (isset($this->onTextLoadError) ? $this->onTextLoadError: array($this, "onTextLoadError")), null);
		unset($successCallback);
	}
	public function onTextLoaded($domObject) {
		org_silex_runtime_domobject_base_DOMObjectBase::$rootDOMObject->addChild($domObject);
		utest_Assert::equals($domObject->getText(), "<h1>This is an HTML text test</h1><p>paragraph</p><h2><b>second header</b></h2>", null, _hx_anonymous(array("fileName" => "RessourceTests.hx", "lineNumber" => 252, "className" => "org.silex_unit_tests.runtime.ressource.RessourceTests", "methodName" => "onTextLoaded")));
		;
	}
	public function onTextLoadError($error) {
		haxe_Log::trace("Error while loading htmlText.html", _hx_anonymous(array("fileName" => "RessourceTests.hx", "lineNumber" => 264, "className" => "org.silex_unit_tests.runtime.ressource.RessourceTests", "methodName" => "onTextLoadError")));
		;
	}
	static function main() {
		org_silex_runtime_domobject_base_DOMObjectBase::$rootDOMObject = new org_silex_runtime_domobject_php_DOMObject(Xml::createElement("body"));
		$runner = new utest_Runner();
		$runner->addCase(new org_silex_unit_tests_runtime_ressource_RessourceTests(), null, null, null, null);
		utest_ui_Report::create($runner, null, null);
		$runner->run();
		print_r(("<html>" . org_silex_runtime_domobject_base_DOMObjectBase::$rootDOMObject->getReferenceToNativeDOM()) . "</html>");
		unset($runner);
	}
	function __toString() { return 'org.silex_unit_tests.runtime.ressource.RessourceTests'; }
}
