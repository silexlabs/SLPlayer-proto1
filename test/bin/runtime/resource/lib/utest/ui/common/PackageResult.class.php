<?php

class utest_ui_common_PackageResult {
	public function __construct($packageName) {
		if( !php_Boot::$skip_constructor ) {
		$this->packageName = $packageName;
		$this->classes = new Hash();
		$this->packages = new Hash();
		$this->stats = new utest_ui_common_ResultStats();
		;
	}}
	public $packageName;
	public $classes;
	public $packages;
	public $stats;
	public function addResult($result, $flattenPackage) {
		$pack = $this->getOrCreatePackage($result->pack, $flattenPackage, $this);
		$cls = $this->getOrCreateClass($pack, $result->cls, $result->setup, $result->teardown);
		$fix = $this->createFixture($result->method, $result->assertations);
		$cls->add($fix);
		unset($pack,$fix,$cls);
	}
	public function addClass($result) {
		$this->classes->set($result->className, $result);
		$this->stats->wire($result->stats);
		;
	}
	public function addPackage($result) {
		$this->packages->set($result->packageName, $result);
		$this->stats->wire($result->stats);
		;
	}
	public function existsPackage($name) {
		return $this->packages->exists($name);
		;
	}
	public function existsClass($name) {
		return $this->classes->exists($name);
		;
	}
	public function getPackage($name) {
		if($this->packageName === null && $name === "") {
			return $this;
			;
		}
		return $this->packages->get($name);
		;
	}
	public function getClass($name) {
		return $this->classes->get($name);
		;
	}
	public function classNames($errorsHavePriority) {
		if($errorsHavePriority === null) {
			$errorsHavePriority = true;
			;
		}
		$names = new _hx_array(array());
		if(null == $this->classes) throw new HException('null iterable');
		$»it = $this->classes->keys();
		while($»it->hasNext()) {
		$name = $»it->next();
		$names->push($name);
		}
		if($errorsHavePriority) {
			$me = $this;
			$names->sort(array(new _hx_lambda(array(&$errorsHavePriority, &$me, &$names), "utest_ui_common_PackageResult_0"), 'execute'));
			unset($me);
		}
		else {
			$names->sort(array(new _hx_lambda(array(&$errorsHavePriority, &$names), "utest_ui_common_PackageResult_1"), 'execute'));
			;
		}
		return $names;
		unset($names);
	}
	public function packageNames($errorsHavePriority) {
		if($errorsHavePriority === null) {
			$errorsHavePriority = true;
			;
		}
		$names = new _hx_array(array());
		if($this->packageName === null) {
			$names->push("");
			;
		}
		if(null == $this->packages) throw new HException('null iterable');
		$»it = $this->packages->keys();
		while($»it->hasNext()) {
		$name = $»it->next();
		$names->push($name);
		}
		if($errorsHavePriority) {
			$me = $this;
			$names->sort(array(new _hx_lambda(array(&$errorsHavePriority, &$me, &$names), "utest_ui_common_PackageResult_2"), 'execute'));
			unset($me);
		}
		else {
			$names->sort(array(new _hx_lambda(array(&$errorsHavePriority, &$names), "utest_ui_common_PackageResult_3"), 'execute'));
			;
		}
		return $names;
		unset($names);
	}
	public function createFixture($method, $assertations) {
		$f = new utest_ui_common_FixtureResult($method);
		if(null == $assertations) throw new HException('null iterable');
		$»it = $assertations->iterator();
		while($»it->hasNext()) {
		$assertation = $»it->next();
		$f->add($assertation);
		}
		return $f;
		unset($f);
	}
	public function getOrCreateClass($pack, $cls, $setup, $teardown) {
		if($pack->existsClass($cls)) {
			return $pack->getClass($cls);
			;
		}
		$c = new utest_ui_common_ClassResult($cls, $setup, $teardown);
		$pack->addClass($c);
		return $c;
		unset($c);
	}
	public function getOrCreatePackage($pack, $flat, $ref) {
		if($pack === null || $pack === "") {
			return $ref;
			;
		}
		if($flat) {
			if($ref->existsPackage($pack)) {
				return $ref->getPackage($pack);
				;
			}
			$p = new utest_ui_common_PackageResult($pack);
			$ref->addPackage($p);
			return $p;
			unset($p);
		}
		else {
			$parts = _hx_explode(".", $pack);
			{
				$_g = 0;
				while($_g < $parts->length) {
					$part = $parts[$_g];
					++$_g;
					$ref = $this->getOrCreatePackage($part, true, $ref);
					unset($part);
				}
				unset($_g);
			}
			return $ref;
			unset($parts);
		}
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
	function __toString() { return 'utest.ui.common.PackageResult'; }
}
;
function utest_ui_common_PackageResult_0(&$errorsHavePriority, &$me, &$names, $a, $b) {
{
	$as = $me->getClass($a)->stats;
	$bs = $me->getClass($b)->stats;
	if($as->hasErrors) {
		return utest_ui_common_PackageResult_4($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
		;
	}
	else {
		if($bs->hasErrors) {
			return 1;
			;
		}
		else {
			if($as->hasFailures) {
				return utest_ui_common_PackageResult_5($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
				;
			}
			else {
				if($bs->hasFailures) {
					return 1;
					;
				}
				else {
					if($as->hasWarnings) {
						return utest_ui_common_PackageResult_6($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
						;
					}
					else {
						if($bs->hasWarnings) {
							return 1;
							;
						}
						else {
							return Reflect::compare($a, $b);
							;
						}
						;
					}
					;
				}
				;
			}
			;
		}
		;
	}
	unset($bs,$as);
}
}
function utest_ui_common_PackageResult_1(&$errorsHavePriority, &$names, $a, $b) {
{
	return Reflect::compare($a, $b);
	;
}
}
function utest_ui_common_PackageResult_2(&$errorsHavePriority, &$me, &$names, $a, $b) {
{
	$as = $me->getPackage($a)->stats;
	$bs = $me->getPackage($b)->stats;
	if($as->hasErrors) {
		return utest_ui_common_PackageResult_7($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
		;
	}
	else {
		if($bs->hasErrors) {
			return 1;
			;
		}
		else {
			if($as->hasFailures) {
				return utest_ui_common_PackageResult_8($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
				;
			}
			else {
				if($bs->hasFailures) {
					return 1;
					;
				}
				else {
					if($as->hasWarnings) {
						return utest_ui_common_PackageResult_9($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
						;
					}
					else {
						if($bs->hasWarnings) {
							return 1;
							;
						}
						else {
							return Reflect::compare($a, $b);
							;
						}
						;
					}
					;
				}
				;
			}
			;
		}
		;
	}
	unset($bs,$as);
}
}
function utest_ui_common_PackageResult_3(&$errorsHavePriority, &$names, $a, $b) {
{
	return Reflect::compare($a, $b);
	;
}
}
function utest_ui_common_PackageResult_4(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
if(!$bs->hasErrors) {
	return -1;
	;
}
else {
	return (utest_ui_common_PackageResult_10($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names));
	;
}
}
function utest_ui_common_PackageResult_5(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
if(!$bs->hasFailures) {
	return -1;
	;
}
else {
	return (utest_ui_common_PackageResult_11($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names));
	;
}
}
function utest_ui_common_PackageResult_6(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
if(!$bs->hasWarnings) {
	return -1;
	;
}
else {
	return (utest_ui_common_PackageResult_12($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names));
	;
}
}
function utest_ui_common_PackageResult_7(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
if(!$bs->hasErrors) {
	return -1;
	;
}
else {
	return (utest_ui_common_PackageResult_13($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names));
	;
}
}
function utest_ui_common_PackageResult_8(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
if(!$bs->hasFailures) {
	return -1;
	;
}
else {
	return (utest_ui_common_PackageResult_14($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names));
	;
}
}
function utest_ui_common_PackageResult_9(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
if(!$bs->hasWarnings) {
	return -1;
	;
}
else {
	return (utest_ui_common_PackageResult_15($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names));
	;
}
}
function utest_ui_common_PackageResult_10(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
if($as->errors === $bs->errors) {
	return Reflect::compare($a, $b);
	;
}
else {
	return Reflect::compare($as->errors, $bs->errors);
	;
}
}
function utest_ui_common_PackageResult_11(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
if($as->failures === $bs->failures) {
	return Reflect::compare($a, $b);
	;
}
else {
	return Reflect::compare($as->failures, $bs->failures);
	;
}
}
function utest_ui_common_PackageResult_12(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
if($as->warnings === $bs->warnings) {
	return Reflect::compare($a, $b);
	;
}
else {
	return Reflect::compare($as->warnings, $bs->warnings);
	;
}
}
function utest_ui_common_PackageResult_13(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
if($as->errors === $bs->errors) {
	return Reflect::compare($a, $b);
	;
}
else {
	return Reflect::compare($as->errors, $bs->errors);
	;
}
}
function utest_ui_common_PackageResult_14(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
if($as->failures === $bs->failures) {
	return Reflect::compare($a, $b);
	;
}
else {
	return Reflect::compare($as->failures, $bs->failures);
	;
}
}
function utest_ui_common_PackageResult_15(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
if($as->warnings === $bs->warnings) {
	return Reflect::compare($a, $b);
	;
}
else {
	return Reflect::compare($as->warnings, $bs->warnings);
	;
}
}