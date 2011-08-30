<?php

class utest_ui_common_FixtureResult {
	public function __construct($methodName) {
		if(!php_Boot::$skip_constructor) {
		$this->methodName = $methodName;
		$this->hlist = new HList();
		$this->hasTestError = false;
		$this->hasSetupError = false;
		$this->hasTeardownError = false;
		$this->hasTimeoutError = false;
		$this->hasAsyncError = false;
		$this->stats = new utest_ui_common_ResultStats();
	}}
	public $methodName;
	public $hasTestError;
	public $hasSetupError;
	public $hasTeardownError;
	public $hasTimeoutError;
	public $hasAsyncError;
	public $stats;
	public $hlist;
	public function iterator() {
		return $this->hlist->iterator();
	}
	public function add($assertation) {
		$this->hlist->add($assertation);
		$�t = ($assertation);
		switch($�t->index) {
		case 0:
		{
			$this->stats->addSuccesses(1);
		}break;
		case 1:
		{
			$this->stats->addFailures(1);
		}break;
		case 2:
		{
			$this->stats->addErrors(1);
		}break;
		case 3:
		{
			$this->stats->addErrors(1);
			$this->hasSetupError = true;
		}break;
		case 4:
		{
			$this->stats->addErrors(1);
			$this->hasTeardownError = true;
		}break;
		case 5:
		{
			$this->stats->addErrors(1);
			$this->hasTimeoutError = true;
		}break;
		case 6:
		{
			$this->stats->addErrors(1);
			$this->hasAsyncError = true;
		}break;
		case 7:
		{
			$this->stats->addWarnings(1);
		}break;
		}
	}
	public function __call($m, $a) {
		if(isset($this->$m) && is_callable($this->$m))
			return call_user_func_array($this->$m, $a);
		else if(isset($this->�dynamics[$m]) && is_callable($this->�dynamics[$m]))
			return call_user_func_array($this->�dynamics[$m], $a);
		else if('toString' == $m)
			return $this->__toString();
		else
			throw new HException('Unable to call �'.$m.'�');
	}
	function __toString() { return 'utest.ui.common.FixtureResult'; }
}
