<?php

class utest_ui_common_PackageResult {
	public function __construct($packageName) {
		if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::new");
		$製pos = $GLOBALS['%s']->length;
		$this->packageName = $packageName;
		$this->classes = new Hash();
		$this->packages = new Hash();
		$this->stats = new utest_ui_common_ResultStats();
		$GLOBALS['%s']->pop();
		unset($製pos);
	}}
	public $packageName;
	public $classes;
	public $packages;
	public $stats;
	public function addResult($result, $flattenPackage) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::addResult");
		$製pos = $GLOBALS['%s']->length;
		$pack = $this->getOrCreatePackage($result->pack, $flattenPackage, $this);
		$cls = $this->getOrCreateClass($pack, $result->cls, $result->setup, $result->teardown);
		$fix = $this->createFixture($result->method, $result->assertations);
		$cls->add($fix);
		$GLOBALS['%s']->pop();
		unset($製pos,$pack,$fix,$cls);
	}
	public function addClass($result) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::addClass");
		$製pos = $GLOBALS['%s']->length;
		$this->classes->set($result->className, $result);
		$this->stats->wire($result->stats);
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function addPackage($result) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::addPackage");
		$製pos = $GLOBALS['%s']->length;
		$this->packages->set($result->packageName, $result);
		$this->stats->wire($result->stats);
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function existsPackage($name) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::existsPackage");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = $this->packages->exists($name);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function existsClass($name) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::existsClass");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = $this->classes->exists($name);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function getPackage($name) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::getPackage");
		$製pos = $GLOBALS['%s']->length;
		if($this->packageName === null && $name === "") {
			$GLOBALS['%s']->pop();
			return $this;
			;
		}
		{
			$裨mp = $this->packages->get($name);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function getClass($name) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::getClass");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = $this->classes->get($name);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function classNames($errorsHavePriority) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::classNames");
		$製pos = $GLOBALS['%s']->length;
		if($errorsHavePriority === null) {
			$errorsHavePriority = true;
			;
		}
		$names = new _hx_array(array());
		if(null == $this->classes) throw new HException('null iterable');
		$蜴t = $this->classes->keys();
		while($蜴t->hasNext()) {
		$name = $蜴t->next();
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
		{
			$GLOBALS['%s']->pop();
			return $names;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$names);
	}
	public function packageNames($errorsHavePriority) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::packageNames");
		$製pos = $GLOBALS['%s']->length;
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
		$蜴t = $this->packages->keys();
		while($蜴t->hasNext()) {
		$name = $蜴t->next();
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
		{
			$GLOBALS['%s']->pop();
			return $names;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$names);
	}
	public function createFixture($method, $assertations) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::createFixture");
		$製pos = $GLOBALS['%s']->length;
		$f = new utest_ui_common_FixtureResult($method);
		if(null == $assertations) throw new HException('null iterable');
		$蜴t = $assertations->iterator();
		while($蜴t->hasNext()) {
		$assertation = $蜴t->next();
		$f->add($assertation);
		}
		{
			$GLOBALS['%s']->pop();
			return $f;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$f);
	}
	public function getOrCreateClass($pack, $cls, $setup, $teardown) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::getOrCreateClass");
		$製pos = $GLOBALS['%s']->length;
		if($pack->existsClass($cls)) {
			$裨mp = $pack->getClass($cls);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$c = new utest_ui_common_ClassResult($cls, $setup, $teardown);
		$pack->addClass($c);
		{
			$GLOBALS['%s']->pop();
			return $c;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$c);
	}
	public function getOrCreatePackage($pack, $flat, $ref) {
		$GLOBALS['%s']->push("utest.ui.common.PackageResult::getOrCreatePackage");
		$製pos = $GLOBALS['%s']->length;
		if($pack === null || $pack === "") {
			$GLOBALS['%s']->pop();
			return $ref;
			;
		}
		if($flat) {
			if($ref->existsPackage($pack)) {
				$裨mp = $ref->getPackage($pack);
				$GLOBALS['%s']->pop();
				return $裨mp;
				unset($裨mp);
			}
			$p = new utest_ui_common_PackageResult($pack);
			$ref->addPackage($p);
			{
				$GLOBALS['%s']->pop();
				return $p;
				;
			}
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
			{
				$GLOBALS['%s']->pop();
				return $ref;
				;
			}
			unset($parts);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function __call($m, $a) {
		if(isset($this->$m) && is_callable($this->$m))
			return call_user_func_array($this->$m, $a);
		else if(isset($this->蜿ynamics[$m]) && is_callable($this->蜿ynamics[$m]))
			return call_user_func_array($this->蜿ynamics[$m], $a);
		else if('toString' == $m)
			return $this->__toString();
		else
			throw new HException('Unable to call �'.$m.'�');
	}
	function __toString() { return 'utest.ui.common.PackageResult'; }
}
;
function utest_ui_common_PackageResult_0(&$errorsHavePriority, &$me, &$names, $a, $b) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_0');
	$製pos = $GLOBALS['%s']->length;
{
	$GLOBALS['%s']->push("utest.ui.common.PackageResult::classNames@64");
	$製pos2 = $GLOBALS['%s']->length;
	$as = $me->getClass($a)->stats;
	$bs = $me->getClass($b)->stats;
	if($as->hasErrors) {
		{
			$裨mp = utest_ui_common_PackageResult_4($裨his, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		;
	}
	else {
		if($bs->hasErrors) {
			{
				$GLOBALS['%s']->pop();
				return 1;
				;
			}
			;
		}
		else {
			if($as->hasFailures) {
				{
					$裨mp = utest_ui_common_PackageResult_5($裨his, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
					$GLOBALS['%s']->pop();
					return $裨mp;
					unset($裨mp);
				}
				;
			}
			else {
				if($bs->hasFailures) {
					{
						$GLOBALS['%s']->pop();
						return 1;
						;
					}
					;
				}
				else {
					if($as->hasWarnings) {
						{
							$裨mp = utest_ui_common_PackageResult_6($裨his, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
							$GLOBALS['%s']->pop();
							return $裨mp;
							unset($裨mp);
						}
						;
					}
					else {
						if($bs->hasWarnings) {
							{
								$GLOBALS['%s']->pop();
								return 1;
								;
							}
							;
						}
						else {
							{
								$裨mp = Reflect::compare($a, $b);
								$GLOBALS['%s']->pop();
								return $裨mp;
								unset($裨mp);
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
		;
	}
	$GLOBALS['%s']->pop();
	unset($製pos2,$bs,$as);
}
}
function utest_ui_common_PackageResult_1(&$errorsHavePriority, &$names, $a, $b) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_1');
	$製pos = $GLOBALS['%s']->length;
{
	$GLOBALS['%s']->push("utest.ui.common.PackageResult::classNames@84");
	$製pos2 = $GLOBALS['%s']->length;
	{
		$裨mp = Reflect::compare($a, $b);
		$GLOBALS['%s']->pop();
		return $裨mp;
		unset($裨mp);
	}
	$GLOBALS['%s']->pop();
	unset($製pos2);
}
}
function utest_ui_common_PackageResult_2(&$errorsHavePriority, &$me, &$names, $a, $b) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_2');
	$製pos = $GLOBALS['%s']->length;
{
	$GLOBALS['%s']->push("utest.ui.common.PackageResult::packageNames@98");
	$製pos2 = $GLOBALS['%s']->length;
	$as = $me->getPackage($a)->stats;
	$bs = $me->getPackage($b)->stats;
	if($as->hasErrors) {
		{
			$裨mp = utest_ui_common_PackageResult_7($裨his, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		;
	}
	else {
		if($bs->hasErrors) {
			{
				$GLOBALS['%s']->pop();
				return 1;
				;
			}
			;
		}
		else {
			if($as->hasFailures) {
				{
					$裨mp = utest_ui_common_PackageResult_8($裨his, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
					$GLOBALS['%s']->pop();
					return $裨mp;
					unset($裨mp);
				}
				;
			}
			else {
				if($bs->hasFailures) {
					{
						$GLOBALS['%s']->pop();
						return 1;
						;
					}
					;
				}
				else {
					if($as->hasWarnings) {
						{
							$裨mp = utest_ui_common_PackageResult_9($裨his, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
							$GLOBALS['%s']->pop();
							return $裨mp;
							unset($裨mp);
						}
						;
					}
					else {
						if($bs->hasWarnings) {
							{
								$GLOBALS['%s']->pop();
								return 1;
								;
							}
							;
						}
						else {
							{
								$裨mp = Reflect::compare($a, $b);
								$GLOBALS['%s']->pop();
								return $裨mp;
								unset($裨mp);
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
		;
	}
	$GLOBALS['%s']->pop();
	unset($製pos2,$bs,$as);
}
}
function utest_ui_common_PackageResult_3(&$errorsHavePriority, &$names, $a, $b) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_3');
	$製pos = $GLOBALS['%s']->length;
{
	$GLOBALS['%s']->push("utest.ui.common.PackageResult::packageNames@118");
	$製pos2 = $GLOBALS['%s']->length;
	{
		$裨mp = Reflect::compare($a, $b);
		$GLOBALS['%s']->pop();
		return $裨mp;
		unset($裨mp);
	}
	$GLOBALS['%s']->pop();
	unset($製pos2);
}
}
function utest_ui_common_PackageResult_4(&$裨his, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_4');
	$製pos = $GLOBALS['%s']->length;
if(!$bs->hasErrors) {
	return -1;
	;
}
else {
	return (utest_ui_common_PackageResult_10($裨his, $a, $as, $b, $bs, $errorsHavePriority, $me, $names));
	;
}
}
function utest_ui_common_PackageResult_5(&$裨his, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_5');
	$製pos = $GLOBALS['%s']->length;
if(!$bs->hasFailures) {
	return -1;
	;
}
else {
	return (utest_ui_common_PackageResult_11($裨his, $a, $as, $b, $bs, $errorsHavePriority, $me, $names));
	;
}
}
function utest_ui_common_PackageResult_6(&$裨his, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_6');
	$製pos = $GLOBALS['%s']->length;
if(!$bs->hasWarnings) {
	return -1;
	;
}
else {
	return (utest_ui_common_PackageResult_12($裨his, $a, $as, $b, $bs, $errorsHavePriority, $me, $names));
	;
}
}
function utest_ui_common_PackageResult_7(&$裨his, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_7');
	$製pos = $GLOBALS['%s']->length;
if(!$bs->hasErrors) {
	return -1;
	;
}
else {
	return (utest_ui_common_PackageResult_13($裨his, $a, $as, $b, $bs, $errorsHavePriority, $me, $names));
	;
}
}
function utest_ui_common_PackageResult_8(&$裨his, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_8');
	$製pos = $GLOBALS['%s']->length;
if(!$bs->hasFailures) {
	return -1;
	;
}
else {
	return (utest_ui_common_PackageResult_14($裨his, $a, $as, $b, $bs, $errorsHavePriority, $me, $names));
	;
}
}
function utest_ui_common_PackageResult_9(&$裨his, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_9');
	$製pos = $GLOBALS['%s']->length;
if(!$bs->hasWarnings) {
	return -1;
	;
}
else {
	return (utest_ui_common_PackageResult_15($裨his, $a, $as, $b, $bs, $errorsHavePriority, $me, $names));
	;
}
}
function utest_ui_common_PackageResult_10(&$裨his, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_10');
	$製pos = $GLOBALS['%s']->length;
if($as->errors === $bs->errors) {
	return Reflect::compare($a, $b);
	;
}
else {
	return Reflect::compare($as->errors, $bs->errors);
	;
}
}
function utest_ui_common_PackageResult_11(&$裨his, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_11');
	$製pos = $GLOBALS['%s']->length;
if($as->failures === $bs->failures) {
	return Reflect::compare($a, $b);
	;
}
else {
	return Reflect::compare($as->failures, $bs->failures);
	;
}
}
function utest_ui_common_PackageResult_12(&$裨his, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_12');
	$製pos = $GLOBALS['%s']->length;
if($as->warnings === $bs->warnings) {
	return Reflect::compare($a, $b);
	;
}
else {
	return Reflect::compare($as->warnings, $bs->warnings);
	;
}
}
function utest_ui_common_PackageResult_13(&$裨his, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_13');
	$製pos = $GLOBALS['%s']->length;
if($as->errors === $bs->errors) {
	return Reflect::compare($a, $b);
	;
}
else {
	return Reflect::compare($as->errors, $bs->errors);
	;
}
}
function utest_ui_common_PackageResult_14(&$裨his, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_14');
	$製pos = $GLOBALS['%s']->length;
if($as->failures === $bs->failures) {
	return Reflect::compare($a, $b);
	;
}
else {
	return Reflect::compare($as->failures, $bs->failures);
	;
}
}
function utest_ui_common_PackageResult_15(&$裨his, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	$GLOBALS['%s']->push('utest.ui.common.PackageResult:lambda_15');
	$製pos = $GLOBALS['%s']->length;
if($as->warnings === $bs->warnings) {
	return Reflect::compare($a, $b);
	;
}
else {
	return Reflect::compare($as->warnings, $bs->warnings);
	;
}
}