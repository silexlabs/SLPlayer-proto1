<?php

class haxe_Timer {
	public function __construct(){}
	static function measure($f, $pos) {
		$GLOBALS['%s']->push("haxe.Timer::measure");
		$製pos = $GLOBALS['%s']->length;
		$t0 = haxe_Timer::stamp();
		$r = call_user_func_array($f, array());
		haxe_Log::trace((haxe_Timer::stamp() - $t0) . "s", $pos);
		{
			$GLOBALS['%s']->pop();
			return $r;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$t0,$r);
	}
	static function stamp() {
		$GLOBALS['%s']->push("haxe.Timer::stamp");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = php_Sys::time();
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	function __toString() { return 'haxe.Timer'; }
}
