<?php

class StringTools {
	public function __construct(){}
	static function urlEncode($s) {
		$GLOBALS['%s']->push("StringTools::urlEncode");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = rawurlencode($s);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function urlDecode($s) {
		$GLOBALS['%s']->push("StringTools::urlDecode");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = urldecode($s);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function htmlEscape($s) {
		$GLOBALS['%s']->push("StringTools::htmlEscape");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = _hx_explode(">", _hx_explode("<", _hx_explode("&", $s)->join("&amp;"))->join("&lt;"))->join("&gt;");
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function htmlUnescape($s) {
		$GLOBALS['%s']->push("StringTools::htmlUnescape");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = htmlspecialchars_decode($s);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function startsWith($s, $start) {
		$GLOBALS['%s']->push("StringTools::startsWith");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = (strlen($s) >= strlen($start) && _hx_substr($s, 0, strlen($start)) === $start);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function endsWith($s, $end) {
		$GLOBALS['%s']->push("StringTools::endsWith");
		$製pos = $GLOBALS['%s']->length;
		$elen = strlen($end);
		$slen = strlen($s);
		{
			$裨mp = ($slen >= $elen && _hx_substr($s, $slen - $elen, $elen) === $end);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$slen,$elen);
	}
	static function isSpace($s, $pos) {
		$GLOBALS['%s']->push("StringTools::isSpace");
		$製pos = $GLOBALS['%s']->length;
		$c = _hx_char_code_at($s, $pos);
		{
			$裨mp = ($c >= 9 && $c <= 13) || $c === 32;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$c);
	}
	static function ltrim($s) {
		$GLOBALS['%s']->push("StringTools::ltrim");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = ltrim($s);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function rtrim($s) {
		$GLOBALS['%s']->push("StringTools::rtrim");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = rtrim($s);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function trim($s) {
		$GLOBALS['%s']->push("StringTools::trim");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = trim($s);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function rpad($s, $c, $l) {
		$GLOBALS['%s']->push("StringTools::rpad");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = str_pad($s, $l, $c, STR_PAD_RIGHT);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function lpad($s, $c, $l) {
		$GLOBALS['%s']->push("StringTools::lpad");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = str_pad($s, $l, $c, STR_PAD_LEFT);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function replace($s, $sub, $by) {
		$GLOBALS['%s']->push("StringTools::replace");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = str_replace($sub, $by, $s);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function hex($n, $digits) {
		$GLOBALS['%s']->push("StringTools::hex");
		$製pos = $GLOBALS['%s']->length;
		$s = dechex($n);
		if($digits !== null) {
			$s = str_pad($s, $digits, "0", STR_PAD_LEFT);
			;
		}
		{
			$裨mp = strtoupper($s);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$s);
	}
	static function fastCodeAt($s, $index) {
		$GLOBALS['%s']->push("StringTools::fastCodeAt");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = _hx_char_code_at($s, $index);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function isEOF($c) {
		$GLOBALS['%s']->push("StringTools::isEOF");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = $c === null;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	function __toString() { return 'StringTools'; }
}
