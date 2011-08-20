<?php

class haxe_io_Eof {
	public function __construct() { if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("haxe.io.Eof::new");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}}
	public function toString() {
		$GLOBALS['%s']->push("haxe.io.Eof::toString");
		$製pos = $GLOBALS['%s']->length;
		{
			$GLOBALS['%s']->pop();
			return "Eof";
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	function __toString() { return $this->toString(); }
}
