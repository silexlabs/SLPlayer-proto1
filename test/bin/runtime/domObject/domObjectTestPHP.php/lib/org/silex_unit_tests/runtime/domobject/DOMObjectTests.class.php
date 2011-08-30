<?php

class org_silex_unit_tests_runtime_domobject_DOMObjectTests {
	public function __construct() { 
	}
	public function testAddRemoveChild() {
		$divParentDOMObject = Xml::createElement("div");
		$divParentDOMObject->set("id", "parentDiv");
		$divParentDOMObject->addChild(Xml::createPCData("parent div"));
		$parentDOMObject = new org_silex_runtime_domobject_php_DOMObject($divParentDOMObject);
		org_silex_runtime_domobject_base_DOMObjectBase::$rootDOMObject->addChild($parentDOMObject);
		$divChildDOMObject = Xml::createElement("div");
		$divChildDOMObject->set("id", "childDiv");
		$divChildDOMObject->addChild(Xml::createPCData("child div"));
		$childDOMObject = new org_silex_runtime_domobject_php_DOMObject($divChildDOMObject);
		$childDOMObject->setWidth(300);
		$childDOMObject->setHeight(200);
		$childDOMObject->setX(100);
		$childDOMObject->setY(50);
		$parentDOMObject->addChild($childDOMObject);
		utest_Assert::equals($childDOMObject->getWidth(), 300, null, _hx_anonymous(array("fileName" => "DOMObjectTests.hx", "lineNumber" => 214, "className" => "org.silex_unit_tests.runtime.domobject.DOMObjectTests", "methodName" => "testAddRemoveChild")));
		utest_Assert::equals($childDOMObject->getHeight(), 200, null, _hx_anonymous(array("fileName" => "DOMObjectTests.hx", "lineNumber" => 215, "className" => "org.silex_unit_tests.runtime.domobject.DOMObjectTests", "methodName" => "testAddRemoveChild")));
		utest_Assert::equals($childDOMObject->getX(), 100, null, _hx_anonymous(array("fileName" => "DOMObjectTests.hx", "lineNumber" => 216, "className" => "org.silex_unit_tests.runtime.domobject.DOMObjectTests", "methodName" => "testAddRemoveChild")));
		utest_Assert::equals($childDOMObject->getY(), 50, null, _hx_anonymous(array("fileName" => "DOMObjectTests.hx", "lineNumber" => 217, "className" => "org.silex_unit_tests.runtime.domobject.DOMObjectTests", "methodName" => "testAddRemoveChild")));
		utest_Assert::equals($childDOMObject->getZOrder(), 0, null, _hx_anonymous(array("fileName" => "DOMObjectTests.hx", "lineNumber" => 218, "className" => "org.silex_unit_tests.runtime.domobject.DOMObjectTests", "methodName" => "testAddRemoveChild")));
		$parentDOMObject->removeChild($childDOMObject);
		utest_Assert::same($childDOMObject->getParent(), null, null, null, _hx_anonymous(array("fileName" => "DOMObjectTests.hx", "lineNumber" => 227, "className" => "org.silex_unit_tests.runtime.domobject.DOMObjectTests", "methodName" => "testAddRemoveChild")));
	}
	public function testZIndex() {
		$divParentDOMObject = Xml::createElement("div");
		$divParentDOMObject->set("id", "parentDiv");
		$parentDOMObject = new org_silex_runtime_domobject_php_DOMObject($divParentDOMObject);
		org_silex_runtime_domobject_base_DOMObjectBase::$rootDOMObject->addChild($parentDOMObject);
		$divChildDOMObject1 = Xml::createElement("div");
		$divChildDOMObject1->set("id", "childDiv1");
		$childDOMObject1 = new org_silex_runtime_domobject_php_DOMObject($divChildDOMObject1);
		$divChildDOMObject2 = Xml::createElement("div");
		$divChildDOMObject2->set("id", "childDiv2");
		$childDOMObject2 = new org_silex_runtime_domobject_php_DOMObject($divChildDOMObject2);
		$divChildDOMObject3 = Xml::createElement("div");
		$divChildDOMObject3->set("id", "childDiv3");
		$childDOMObject3 = new org_silex_runtime_domobject_php_DOMObject($divChildDOMObject3);
		$childDOMObject1->setWidth(100);
		$childDOMObject1->setHeight(100);
		$childDOMObject2->setWidth(100);
		$childDOMObject2->setHeight(100);
		$childDOMObject3->setWidth(100);
		$childDOMObject3->setHeight(100);
		$childDOMObject2->setX(50);
		$childDOMObject3->setX(80);
		$parentDOMObject->addChild($childDOMObject1);
		$parentDOMObject->addChild($childDOMObject2);
		$parentDOMObject->addChild($childDOMObject3);
		utest_Assert::equals(1, $childDOMObject2->getZOrder(), null, _hx_anonymous(array("fileName" => "DOMObjectTests.hx", "lineNumber" => 366, "className" => "org.silex_unit_tests.runtime.domobject.DOMObjectTests", "methodName" => "testZIndex")));
		$childDOMObject2->setZOrder(0);
		utest_Assert::equals(1, $childDOMObject1->getZOrder(), null, _hx_anonymous(array("fileName" => "DOMObjectTests.hx", "lineNumber" => 371, "className" => "org.silex_unit_tests.runtime.domobject.DOMObjectTests", "methodName" => "testZIndex")));
		$childDOMObject1->setZOrder(999);
		utest_Assert::equals(2, $childDOMObject1->getZOrder(), null, _hx_anonymous(array("fileName" => "DOMObjectTests.hx", "lineNumber" => 375, "className" => "org.silex_unit_tests.runtime.domobject.DOMObjectTests", "methodName" => "testZIndex")));
	}
	public function testContainerDOMObject() {
		$domObject = new org_silex_runtime_domobject_php_ContainerDOMObject(Xml::createElement("div"));
		org_silex_runtime_domobject_base_DOMObjectBase::$rootDOMObject->addChild($domObject);
		$domObject->setSemantic("nav");
		utest_Assert::same($domObject->getSemantic(), "nav", null, null, _hx_anonymous(array("fileName" => "DOMObjectTests.hx", "lineNumber" => 396, "className" => "org.silex_unit_tests.runtime.domobject.DOMObjectTests", "methodName" => "testContainerDOMObject")));
	}
	public function testTextDOMObject() {
		$domObject = new org_silex_runtime_domobject_php_TextDOMObject(Xml::createElement("div"));
		org_silex_runtime_domobject_base_DOMObjectBase::$rootDOMObject->addChild($domObject);
		$domObject->setText("<h1>test html text</h1>");
		$domObject->setWidth(500);
		utest_Assert::same($domObject->getText(), "<h1>test html text</h1>", null, null, _hx_anonymous(array("fileName" => "DOMObjectTests.hx", "lineNumber" => 418, "className" => "org.silex_unit_tests.runtime.domobject.DOMObjectTests", "methodName" => "testTextDOMObject")));
	}
	static function main() {
		org_silex_runtime_domobject_base_DOMObjectBase::$rootDOMObject = new org_silex_runtime_domobject_php_DOMObject(Xml::createElement("body"));
		$runner = new utest_Runner();
		$runner->addCase(new org_silex_unit_tests_runtime_domobject_DOMObjectTests(), null, null, null, null);
		utest_ui_Report::create($runner, null, null);
		$runner->run();
	}
	function __toString() { return 'org.silex_unit_tests.runtime.domobject.DOMObjectTests'; }
}