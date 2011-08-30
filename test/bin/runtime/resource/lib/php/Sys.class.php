<?php

class php_Sys {
	public function __construct(){}
	static function args() {
		return php_Sys_0();
		;
	}
	static function getEnv($s) {
		return getenv($s);
		;
	}
	static function putEnv($s, $v) {
		putenv(($s . "=") . $v);
		return;
		;
	}
	static function sleep($seconds) {
		return usleep($seconds * 1000000);
		;
	}
	static function setTimeLocale($loc) {
		return setlocale(LC_TIME, $loc) !== false;
		;
	}
	static function getCwd() {
		$cwd = getcwd();
		$l = _hx_substr($cwd, -1, null);
		return $cwd . (php_Sys_1($cwd, $l));
		unset($l,$cwd);
	}
	static function setCwd($s) {
		return chdir($s);
		;
	}
	static function systemName() {
		$s = php_uname("s");
		$p = null;
		if(($p = _hx_index_of($s, " ", null)) >= 0) {
			return _hx_substr($s, 0, $p);
			;
		}
		else {
			return $s;
			;
		}
		unset($s,$p);
	}
	static function escapeArgument($arg) {
		$ok = true;
		{
			$_g1 = 0; $_g = strlen($arg);
			while($_g1 < $_g) {
				$i = $_g1++;
				switch(_hx_char_code_at($arg, $i)) {
				case 32:case 34:{
					$ok = false;
					;
				}break;
				case 0:case 13:case 10:{
					$arg = _hx_substr($arg, 0, $i);
					;
				}break;
				}
				unset($i);
			}
			unset($_g1,$_g);
		}
		if($ok) {
			return $arg;
			;
		}
		return ("\"" . _hx_explode("\"", $arg)->join("\\\"")) . "\"";
		unset($ok);
	}
	static function command($cmd, $args) {
		if($args !== null) {
			$cmd = php_Sys::escapeArgument($cmd);
			{
				$_g = 0;
				while($_g < $args->length) {
					$a = $args[$_g];
					++$_g;
					$cmd .= " " . php_Sys::escapeArgument($a);
					unset($a);
				}
				unset($_g);
			}
			;
		}
		$result = 0;
		$output = "";
		system($cmd, $result);
		return $result;
		unset($result,$output);
	}
	static function hexit($code) {
		return exit($code);
		;
	}
	static function time() {
		return microtime(true);
		;
	}
	static function cpuTime() {
		return microtime(true) - $_SERVER['REQUEST_TIME'];
		;
	}
	static function executablePath() {
		return $_SERVER['SCRIPT_FILENAME'];
		;
	}
	static function environment() {
		return php_Lib::hashOfAssociativeArray($_SERVER);
		;
	}
	function __toString() { return 'php.Sys'; }
}
;
function php_Sys_0() {
if(array_key_exists("argv", $_SERVER)) {
	return new _hx_array(array_slice($_SERVER["argv"], 1));
	;
}
else {
	return new _hx_array(array());
	;
}
}
function php_Sys_1(&$cwd, &$l) {
if($l === "/" || $l === "\\") {
	return "";
	;
}
else {
	return "/";
	;
}
}