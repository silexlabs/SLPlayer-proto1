<?php

class org_silex_unit_tests_runtime_nativeClass_NativeClassTests {
	public function __construct() { if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex_unit_tests.runtime.nativeClass.NativeClassTests::new");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}}
	public function testNativeClassInstance() {
		$GLOBALS['%s']->push("org.silex_unit_tests.runtime.nativeClass.NativeClassTests::testNativeClassInstance");
		$製pos = $GLOBALS['%s']->length;
		$nativeClass = org_silex_runtime_nativeClass_NativeClass::getNativeInstanceByClassName("org.silex_unit_tests.runtime.nativeClass.TestClass");
		utest_Assert::equals($nativeClass->getField("_testAttribute"), "bim", null, _hx_anonymous(array("fileName" => "NativeClassTests.hx", "lineNumber" => 45, "className" => "org.silex_unit_tests.runtime.nativeClass.NativeClassTests", "methodName" => "testNativeClassInstance")));
		utest_Assert::equals($nativeClass->callMethod("testMethod", new _hx_array(array())), "test OK", null, _hx_anonymous(array("fileName" => "NativeClassTests.hx", "lineNumber" => 47, "className" => "org.silex_unit_tests.runtime.nativeClass.NativeClassTests", "methodName" => "testNativeClassInstance")));
		$nativeClass->setField("_testAttribute", "new value");
		utest_Assert::equals($nativeClass->getField("_testAttribute"), "new value", null, _hx_anonymous(array("fileName" => "NativeClassTests.hx", "lineNumber" => 50, "className" => "org.silex_unit_tests.runtime.nativeClass.NativeClassTests", "methodName" => "testNativeClassInstance")));
		utest_Assert::isNull($nativeClass->getField("fakeField"), null, _hx_anonymous(array("fileName" => "NativeClassTests.hx", "lineNumber" => 53, "className" => "org.silex_unit_tests.runtime.nativeClass.NativeClassTests", "methodName" => "testNativeClassInstance")));
		$nativeClass->setField("fakeField", "fakeValue");
		utest_Assert::isNull($nativeClass->callMethod("fakeMethod", new _hx_array(array())), null, _hx_anonymous(array("fileName" => "NativeClassTests.hx", "lineNumber" => 57, "className" => "org.silex_unit_tests.runtime.nativeClass.NativeClassTests", "methodName" => "testNativeClassInstance")));
		$GLOBALS['%s']->pop();
		unset($製pos,$nativeClass);
	}
	static function main() {
		$GLOBALS['%s']->push("org.silex_unit_tests.runtime.nativeClass.NativeClassTests::main");
		$製pos = $GLOBALS['%s']->length;
		$runner = new utest_Runner();
		$runner->addCase(new org_silex_unit_tests_runtime_nativeClass_NativeClassTests(), null, null, null, null);
		utest_ui_Report::create($runner, null, null);
		$runner->run();
		$GLOBALS['%s']->pop();
		unset($製pos,$runner);
	}
	function __toString() { return 'org.silex_unit_tests.runtime.nativeClass.NativeClassTests'; }
}
