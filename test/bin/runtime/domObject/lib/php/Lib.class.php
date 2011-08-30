<?php

class php_Lib {
	public function __construct(){}
	static function hprint($v) {
		$GLOBALS['%s']->push("php.Lib::print");
		$�spos = $GLOBALS['%s']->length;
		echo(Std::string($v));
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function println($v) {
		$GLOBALS['%s']->push("php.Lib::println");
		$�spos = $GLOBALS['%s']->length;
		php_Lib::hprint($v);
		php_Lib::hprint("\x0A");
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function dump($v) {
		$GLOBALS['%s']->push("php.Lib::dump");
		$�spos = $GLOBALS['%s']->length;
		var_dump($v);
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function serialize($v) {
		$GLOBALS['%s']->push("php.Lib::serialize");
		$�spos = $GLOBALS['%s']->length;
		{
			$�tmp = serialize($v);
			$GLOBALS['%s']->pop();
			return $�tmp;
			unset($�tmp);
		}
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function unserialize($s) {
		$GLOBALS['%s']->push("php.Lib::unserialize");
		$�spos = $GLOBALS['%s']->length;
		{
			$�tmp = unserialize($s);
			$GLOBALS['%s']->pop();
			return $�tmp;
			unset($�tmp);
		}
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function extensionLoaded($name) {
		$GLOBALS['%s']->push("php.Lib::extensionLoaded");
		$�spos = $GLOBALS['%s']->length;
		{
			$�tmp = extension_loaded($name);
			$GLOBALS['%s']->pop();
			return $�tmp;
			unset($�tmp);
		}
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function isCli() {
		$GLOBALS['%s']->push("php.Lib::isCli");
		$�spos = $GLOBALS['%s']->length;
		{
			$�tmp = (0 == strncasecmp(PHP_SAPI, 'cli', 3));
			$GLOBALS['%s']->pop();
			return $�tmp;
			unset($�tmp);
		}
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function printFile($file) {
		$GLOBALS['%s']->push("php.Lib::printFile");
		$�spos = $GLOBALS['%s']->length;
		{
			$�tmp = fpassthru(fopen($file, "r"));
			$GLOBALS['%s']->pop();
			return $�tmp;
			unset($�tmp);
		}
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function toPhpArray($a) {
		$GLOBALS['%s']->push("php.Lib::toPhpArray");
		$�spos = $GLOBALS['%s']->length;
		{
			$�tmp = $a->�a;
			$GLOBALS['%s']->pop();
			return $�tmp;
			unset($�tmp);
		}
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function toHaxeArray($a) {
		$GLOBALS['%s']->push("php.Lib::toHaxeArray");
		$�spos = $GLOBALS['%s']->length;
		{
			$�tmp = new _hx_array($a);
			$GLOBALS['%s']->pop();
			return $�tmp;
			unset($�tmp);
		}
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function hashOfAssociativeArray($arr) {
		$GLOBALS['%s']->push("php.Lib::hashOfAssociativeArray");
		$�spos = $GLOBALS['%s']->length;
		$h = new Hash();
		reset($arr); while(list($k, $v) = each($arr)) $h->set($k, $v);
		{
			$GLOBALS['%s']->pop();
			return $h;
			;
		}
		$GLOBALS['%s']->pop();
		unset($�spos,$h);
	}
	static function associativeArrayOfHash($hash) {
		$GLOBALS['%s']->push("php.Lib::associativeArrayOfHash");
		$�spos = $GLOBALS['%s']->length;
		{
			$�tmp = $hash->h;
			$GLOBALS['%s']->pop();
			return $�tmp;
			unset($�tmp);
		}
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function rethrow($e) {
		$GLOBALS['%s']->push("php.Lib::rethrow");
		$�spos = $GLOBALS['%s']->length;
		if(Std::is($e, _hx_qtype("php.Exception"))) {
			$__rtex__ = $e;
			throw $__rtex__;
			unset($__rtex__);
		}
		else {
			throw new HException($e);
			;
		}
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function appendType($o, $path, $t) {
		$GLOBALS['%s']->push("php.Lib::appendType");
		$�spos = $GLOBALS['%s']->length;
		$name = $path->shift();
		if($path->length === 0) {
			$o->$name = $t;
			;
		}
		else {
			$so = php_Lib_0($name, $o, $path, $t);
			php_Lib::appendType($so, $path, $t);
			$o->$name = $so;
			unset($so);
		}
		$GLOBALS['%s']->pop();
		unset($�spos,$name);
	}
	static function getClasses() {
		$GLOBALS['%s']->push("php.Lib::getClasses");
		$�spos = $GLOBALS['%s']->length;
		$path = null;
		$o = _hx_anonymous(array());
		reset(php_Boot::$qtypes);
		while(($path = key(php_Boot::$qtypes)) !== null) {
			php_Lib::appendType($o, _hx_explode(".", $path), php_Boot::$qtypes[$path]);
			next(php_Boot::$qtypes);
			;
		}
		{
			$GLOBALS['%s']->pop();
			return $o;
			;
		}
		$GLOBALS['%s']->pop();
		unset($�spos,$path,$o);
	}
	static function loadLib($pathToLib) {
		$GLOBALS['%s']->push("php.Lib::loadLib");
		$�spos = $GLOBALS['%s']->length;
		$_hx_types_array = array();
 		$_hx_cache_content = '';
 		//Calling this function will put all types present in the specified types in the $_hx_types_array
 		_hx_build_paths($pathToLib, $_hx_types_array, array());
 
 		for($i=0;$i<count($_hx_types_array);$i++) {
 			//For every type that has been found, create its description
 			$t = null;
 			if($_hx_types_array[$i]['type'] == 0) {
 				$t = new _hx_class($_hx_types_array[$i]['phpname'], $_hx_types_array[$i]['qname'], $_hx_types_array[$i]['path']);
 			} else if($_hx_types_array[$i]['type'] == 1) {
 				$t = new _hx_enum($_hx_types_array[$i]['phpname'], $_hx_types_array[$i]['qname'], $_hx_types_array[$i]['path']);
 			} else if($_hx_types_array[$i]['type'] == 2) {
 				$t = new _hx_interface($_hx_types_array[$i]['phpname'], $_hx_types_array[$i]['qname'], $_hx_types_array[$i]['path']);
 			} else if($_hx_types_array[$i]['type'] == 3) {
 				$t = new _hx_class($_hx_types_array[$i]['name'], $_hx_types_array[$i]['qname'], $_hx_types_array[$i]['path']);
 			}
 			//Register the type
 			if(!array_key_exists($t->__qname__, php_Boot::$qtypes)) {
 				_hx_register_type($t);
 			}
 		}
 ;
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	function __toString() { return 'php.Lib'; }
}
;
function php_Lib_0(&$name, &$o, &$path, &$t) {
	$GLOBALS['%s']->push('php.Lib:lambda_0');
	$�spos = $GLOBALS['%s']->length;
if(isset($o->$name)) {
	return $o->$name;
	;
}
else {
	return _hx_anonymous(array());
	;
}
}