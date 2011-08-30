<?php

class org_silex_runtime_domobject_base_ContainerDOMObjectBase extends org_silex_runtime_domobject_php_DOMObject {
	public function __construct($referenceToNativeDOMObject) {
		if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.ContainerDOMObjectBase::new");
		$»spos = $GLOBALS['%s']->length;
		parent::__construct($referenceToNativeDOMObject);
		$GLOBALS['%s']->pop();
		unset($»spos);
	}}
	public $_semantic;
	public function setSemantic($semantic) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.ContainerDOMObjectBase::setSemantic");
		$»spos = $GLOBALS['%s']->length;
		$this->_semantic = $semantic;
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function getSemantic() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.ContainerDOMObjectBase::getSemantic");
		$»spos = $GLOBALS['%s']->length;
		{
			$»tmp = $this->_semantic;
			$GLOBALS['%s']->pop();
			return $»tmp;
			unset($»tmp);
		}
		$GLOBALS['%s']->pop();
		unset($»spos);
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
	function __toString() { return 'org.silex.runtime.domobject.base.ContainerDOMObjectBase'; }
}
