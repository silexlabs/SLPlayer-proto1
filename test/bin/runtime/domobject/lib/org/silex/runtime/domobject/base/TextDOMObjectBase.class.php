<?php

class org_silex_runtime_domobject_base_TextDOMObjectBase extends org_silex_runtime_domobject_php_DOMObject {
	public function __construct($referenceToNativeDOMObject) {
		if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.TextDOMObjectBase::new");
		$製pos = $GLOBALS['%s']->length;
		parent::__construct($referenceToNativeDOMObject);
		$GLOBALS['%s']->pop();
		unset($製pos);
	}}
	public $_text;
	public function setText($text) {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.TextDOMObjectBase::setText");
		$製pos = $GLOBALS['%s']->length;
		$this->_text = $text;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function getText() {
		$GLOBALS['%s']->push("org.silex.runtime.domobject.base.TextDOMObjectBase::getText");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = $this->_text;
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
	function __toString() { return 'org.silex.runtime.domobject.base.TextDOMObjectBase'; }
}
