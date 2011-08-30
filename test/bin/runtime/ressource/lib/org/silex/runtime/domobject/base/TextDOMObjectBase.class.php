<?php

class org_silex_runtime_domobject_base_TextDOMObjectBase extends org_silex_runtime_domobject_php_DOMObject {
	public function __construct($referenceToNativeDOMObject) {
		if( !php_Boot::$skip_constructor ) {
		parent::__construct($referenceToNativeDOMObject);
		;
	}}
	public $_text;
	public function setText($text) {
		$this->_text = $text;
		;
	}
	public function getText() {
		return $this->_text;
		;
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
	function __toString() { return 'org.silex.runtime.domobject.base.TextDOMObjectBase'; }
}
