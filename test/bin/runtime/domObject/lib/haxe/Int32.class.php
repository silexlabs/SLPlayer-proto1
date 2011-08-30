<?php

class haxe_Int32 {
	public function __construct(){}
	static function make($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::make");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = ($a << 16) | $b;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function ofInt($x) {
		$GLOBALS['%s']->push("haxe.Int32::ofInt");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = $x;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function toInt($x) {
		$GLOBALS['%s']->push("haxe.Int32::toInt");
		$製pos = $GLOBALS['%s']->length;
		if(((($x) >> 30) & 1) !== (_hx_shift_right(($x), 31))) {
			throw new HException("Overflow " . $x);
			;
		}
		{
			$裨mp = ($x) & -1;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function toNativeInt($x) {
		$GLOBALS['%s']->push("haxe.Int32::toNativeInt");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = $x;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function add($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::add");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = ($a) + ($b);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function sub($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::sub");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = ($a) - ($b);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function mul($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::mul");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = ($a) * ($b);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function div($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::div");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = intval(($a) / ($b));
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function mod($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::mod");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = ($a) % ($b);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function shl($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::shl");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = ($a) << $b;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function shr($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::shr");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = ($a) >> $b;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function ushr($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::ushr");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = _hx_shift_right(($a), $b);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function hand($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::and");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = ($a) & ($b);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function hor($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::or");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = ($a) | ($b);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function hxor($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::xor");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = ($a) ^ ($b);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function neg($a) {
		$GLOBALS['%s']->push("haxe.Int32::neg");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = -($a);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function complement($a) {
		$GLOBALS['%s']->push("haxe.Int32::complement");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = ~($a);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function compare($a, $b) {
		$GLOBALS['%s']->push("haxe.Int32::compare");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = $a - $b;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	function __toString() { return 'haxe.Int32'; }
}
