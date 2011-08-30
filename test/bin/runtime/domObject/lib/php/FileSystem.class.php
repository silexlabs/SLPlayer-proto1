<?php

class php_FileSystem {
	public function __construct(){}
	static function exists($path) {
		$GLOBALS['%s']->push("php.FileSystem::exists");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = file_exists($path);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function rename($path, $newpath) {
		$GLOBALS['%s']->push("php.FileSystem::rename");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = rename($path, $newpath);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function stat($path) {
		$GLOBALS['%s']->push("php.FileSystem::stat");
		$製pos = $GLOBALS['%s']->length;
		$fp = fopen($path, "r");
		$fstat = fstat($fp);
		fclose($fp);;
		{
			$裨mp = _hx_anonymous(array("gid" => $fstat['gid'], "uid" => $fstat['uid'], "atime" => Date::fromTime($fstat['atime'] * 1000), "mtime" => Date::fromTime($fstat['mtime'] * 1000), "ctime" => Date::fromTime($fstat['ctime'] * 1000), "dev" => $fstat['dev'], "ino" => $fstat['ino'], "nlink" => $fstat['nlink'], "rdev" => $fstat['rdev'], "size" => $fstat['size'], "mode" => $fstat['mode']));
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function fullPath($relpath) {
		$GLOBALS['%s']->push("php.FileSystem::fullPath");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = realpath($relpath);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function kind($path) {
		$GLOBALS['%s']->push("php.FileSystem::kind");
		$製pos = $GLOBALS['%s']->length;
		$k = filetype($path);
		switch($k) {
		case "file":{
			{
				$裨mp = php_FileKind::$kfile;
				$GLOBALS['%s']->pop();
				return $裨mp;
				unset($裨mp);
			}
			;
		}break;
		case "dir":{
			{
				$裨mp = php_FileKind::$kdir;
				$GLOBALS['%s']->pop();
				return $裨mp;
				unset($裨mp);
			}
			;
		}break;
		default:{
			{
				$裨mp = php_FileKind::kother($k);
				$GLOBALS['%s']->pop();
				return $裨mp;
				unset($裨mp);
			}
			;
		}break;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$k);
	}
	static function isDirectory($path) {
		$GLOBALS['%s']->push("php.FileSystem::isDirectory");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = is_dir($path);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function createDirectory($path) {
		$GLOBALS['%s']->push("php.FileSystem::createDirectory");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = @mkdir($path, 493);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function deleteFile($path) {
		$GLOBALS['%s']->push("php.FileSystem::deleteFile");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = @unlink($path);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function deleteDirectory($path) {
		$GLOBALS['%s']->push("php.FileSystem::deleteDirectory");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = @rmdir($path);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function readDirectory($path) {
		$GLOBALS['%s']->push("php.FileSystem::readDirectory");
		$製pos = $GLOBALS['%s']->length;
		$l = array();
		$dh = opendir($path);
        while (($file = readdir($dh)) !== false) if("." != $file && ".." != $file) $l[] = $file;
        closedir($dh);;
		{
			$裨mp = new _hx_array($l);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$l);
	}
	function __toString() { return 'php.FileSystem'; }
}
