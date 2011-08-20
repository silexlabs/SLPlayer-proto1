<?php

class Math {
	public function __construct(){}
	static $PI;
	static $NaN;
	static $POSITIVE_INFINITY;
	static $NEGATIVE_INFINITY;
	static function abs($v) {
		$GLOBALS['%s']->push("Math::abs");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = abs($v);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function min($a, $b) {
		$GLOBALS['%s']->push("Math::min");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = min($a, $b);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function max($a, $b) {
		$GLOBALS['%s']->push("Math::max");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = max($a, $b);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function sin($v) {
		$GLOBALS['%s']->push("Math::sin");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = sin($v);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function cos($v) {
		$GLOBALS['%s']->push("Math::cos");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = cos($v);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function atan2($y, $x) {
		$GLOBALS['%s']->push("Math::atan2");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = atan2($y, $x);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function tan($v) {
		$GLOBALS['%s']->push("Math::tan");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = tan($v);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function exp($v) {
		$GLOBALS['%s']->push("Math::exp");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = exp($v);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function log($v) {
		$GLOBALS['%s']->push("Math::log");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = log($v);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function sqrt($v) {
		$GLOBALS['%s']->push("Math::sqrt");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = sqrt($v);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function round($v) {
		$GLOBALS['%s']->push("Math::round");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = (int) floor($v + 0.5);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function floor($v) {
		$GLOBALS['%s']->push("Math::floor");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = (int) floor($v);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function ceil($v) {
		$GLOBALS['%s']->push("Math::ceil");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = (int) ceil($v);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function atan($v) {
		$GLOBALS['%s']->push("Math::atan");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = atan($v);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function asin($v) {
		$GLOBALS['%s']->push("Math::asin");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = asin($v);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function acos($v) {
		$GLOBALS['%s']->push("Math::acos");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = acos($v);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function pow($v, $exp) {
		$GLOBALS['%s']->push("Math::pow");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = pow($v, $exp);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function random() {
		$GLOBALS['%s']->push("Math::random");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = mt_rand() / mt_getrandmax();
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function isNaN($f) {
		$GLOBALS['%s']->push("Math::isNaN");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = is_nan($f);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function isFinite($f) {
		$GLOBALS['%s']->push("Math::isFinite");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = is_finite($f);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	function __toString() { return 'Math'; }
}
{
	Math::$PI = M_PI;
	Math::$NaN = acos(1.01);
	Math::$NEGATIVE_INFINITY = log(0);
	Math::$POSITIVE_INFINITY = -Math::$NEGATIVE_INFINITY;
	;
}
