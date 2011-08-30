<?php

class utest_ui_common_ClassResult {
	public function __construct($className, $setupName, $teardownName) {
		if(!php_Boot::$skip_constructor) {
		$this->fixtures = new Hash();
		$this->className = $className;
		$this->setupName = $setupName;
		$this->hasSetup = $setupName !== null;
		$this->teardownName = $teardownName;
		$this->hasTeardown = $teardownName !== null;
		$this->methods = 0;
		$this->stats = new utest_ui_common_ResultStats();
	}}
	public $fixtures;
	public $className;
	public $setupName;
	public $teardownName;
	public $hasSetup;
	public $hasTeardown;
	public $methods;
	public $stats;
	public function add($result) {
		if($this->fixtures->exists($result->methodName)) {
			throw new HException("invalid duplicated fixture result");
		}
		$this->stats->wire($result->stats);
		$this->methods++;
		$this->fixtures->set($result->methodName, $result);
	}
	public function get($method) {
		return $this->fixtures->get($method);
	}
	public function exists($method) {
		return $this->fixtures->exists($method);
	}
	public function methodNames($errorsHavePriority) {
		if($errorsHavePriority === null) {
			$errorsHavePriority = true;
		}
		$names = new _hx_array(array());
		if(null == $this->fixtures) throw new HException('null iterable');
		$»it = $this->fixtures->keys();
		while($»it->hasNext()) {
			$name = $»it->next();
			$names->push($name);
		}
		if($errorsHavePriority) {
			$me = $this;
			$names->sort(array(new _hx_lambda(array(&$errorsHavePriority, &$me, &$names), "utest_ui_common_ClassResult_0"), 'execute'));
		} else {
			$names->sort(array(new _hx_lambda(array(&$errorsHavePriority, &$names), "utest_ui_common_ClassResult_1"), 'execute'));
		}
		return $names;
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
	function __toString() { return 'utest.ui.common.ClassResult'; }
}
function utest_ui_common_ClassResult_0(&$errorsHavePriority, &$me, &$names, $a, $b) {
	{
		$as = $me->get($a)->stats;
		$bs = $me->get($b)->stats;
		if($as->hasErrors) {
			return utest_ui_common_ClassResult_2($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
		} else {
			if($bs->hasErrors) {
				return 1;
			} else {
				if($as->hasFailures) {
					return utest_ui_common_ClassResult_3($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
				} else {
					if($bs->hasFailures) {
						return 1;
					} else {
						if($as->hasWarnings) {
							return utest_ui_common_ClassResult_4($»this, $a, $as, $b, $bs, $errorsHavePriority, $me, $names);
						} else {
							if($bs->hasWarnings) {
								return 1;
							} else {
								return Reflect::compare($a, $b);
							}
						}
					}
				}
			}
		}
	}
}
function utest_ui_common_ClassResult_1(&$errorsHavePriority, &$names, $a, $b) {
	{
		return Reflect::compare($a, $b);
	}
}
function utest_ui_common_ClassResult_2(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	if(!$bs->hasErrors) {
		return -1;
	} else {
		if($as->errors === $bs->errors) {
			return Reflect::compare($a, $b);
		} else {
			return Reflect::compare($as->errors, $bs->errors);
		}
	}
}
function utest_ui_common_ClassResult_3(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	if(!$bs->hasFailures) {
		return -1;
	} else {
		if($as->failures === $bs->failures) {
			return Reflect::compare($a, $b);
		} else {
			return Reflect::compare($as->failures, $bs->failures);
		}
	}
}
function utest_ui_common_ClassResult_4(&$»this, &$a, &$as, &$b, &$bs, &$errorsHavePriority, &$me, &$names) {
	if(!$bs->hasWarnings) {
		return -1;
	} else {
		if($as->warnings === $bs->warnings) {
			return Reflect::compare($a, $b);
		} else {
			return Reflect::compare($as->warnings, $bs->warnings);
		}
	}
}
