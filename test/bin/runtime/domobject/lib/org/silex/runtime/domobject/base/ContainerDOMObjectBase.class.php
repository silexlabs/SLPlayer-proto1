<?php

class org_silex_runtime_domobject_base_ContainerDOMObjectBase extends org_silex_runtime_domobject_php_DOMObject {
	public function __construct($referenceToNativeDOMObject) {
		if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.ContainerDOMObjectBase::new");
		$製pos = $GLOBALS['%s']->length;
		parent::__construct($referenceToNativeDOMObject);
		$GLOBALS['%s']->pop();
		unset($製pos);
	}}
	public $_semantic;
	public function setSemantic($semantic) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.ContainerDOMObjectBase::setSemantic");
		$製pos = $GLOBALS['%s']->length;
		$this->_semantic = $semantic;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function getSemantic() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.ContainerDOMObjectBase::getSemantic");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = $this->_semantic;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
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
	function __toString() { return 'org.silex.runtime.domobject.base.ContainerDOMObjectBase'; }
}
