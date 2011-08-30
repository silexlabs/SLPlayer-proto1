<?php

class utest_ui_common_ResultStats {
	public function __construct() {
		if( !php_Boot::$skip_constructor ) {
		$this->assertations = 0;
		$this->successes = 0;
		$this->failures = 0;
		$this->errors = 0;
		$this->warnings = 0;
		$this->isOk = true;
		$this->hasFailures = false;
		$this->hasErrors = false;
		$this->hasWarnings = false;
		$this->onAddSuccesses = new utest_Dispatcher();
		$this->onAddFailures = new utest_Dispatcher();
		$this->onAddErrors = new utest_Dispatcher();
		$this->onAddWarnings = new utest_Dispatcher();
		;
	}}
	public $assertations;
	public $successes;
	public $failures;
	public $errors;
	public $warnings;
	public $onAddSuccesses;
	public $onAddFailures;
	public $onAddErrors;
	public $onAddWarnings;
	public $isOk;
	public $hasFailures;
	public $hasErrors;
	public $hasWarnings;
	public function addSuccesses($v) {
		if($v === 0) {
			return;
			;
		}
		$this->assertations += $v;
		$this->successes += $v;
		$this->onAddSuccesses->dispatch($v);
		;
	}
	public function addFailures($v) {
		if($v === 0) {
			return;
			;
		}
		$this->assertations += $v;
		$this->failures += $v;
		$this->hasFailures = $this->failures > 0;
		$this->isOk = !($this->hasFailures || $this->hasErrors || $this->hasWarnings);
		$this->onAddFailures->dispatch($v);
		;
	}
	public function addErrors($v) {
		if($v === 0) {
			return;
			;
		}
		$this->assertations += $v;
		$this->errors += $v;
		$this->hasErrors = $this->errors > 0;
		$this->isOk = !($this->hasFailures || $this->hasErrors || $this->hasWarnings);
		$this->onAddErrors->dispatch($v);
		;
	}
	public function addWarnings($v) {
		if($v === 0) {
			return;
			;
		}
		$this->assertations += $v;
		$this->warnings += $v;
		$this->hasWarnings = $this->warnings > 0;
		$this->isOk = !($this->hasFailures || $this->hasErrors || $this->hasWarnings);
		$this->onAddWarnings->dispatch($v);
		;
	}
	public function sum($other) {
		$this->addSuccesses($other->successes);
		$this->addFailures($other->failures);
		$this->addErrors($other->errors);
		$this->addWarnings($other->warnings);
		;
	}
	public function subtract($other) {
		$this->addSuccesses(-$other->successes);
		$this->addFailures(-$other->failures);
		$this->addErrors(-$other->errors);
		$this->addWarnings(-$other->warnings);
		;
	}
	public function wire($dependant) {
		$dependant->onAddSuccesses->add((isset($this->addSuccesses) ? $this->addSuccesses: array($this, "addSuccesses")));
		$dependant->onAddFailures->add((isset($this->addFailures) ? $this->addFailures: array($this, "addFailures")));
		$dependant->onAddErrors->add((isset($this->addErrors) ? $this->addErrors: array($this, "addErrors")));
		$dependant->onAddWarnings->add((isset($this->addWarnings) ? $this->addWarnings: array($this, "addWarnings")));
		$this->sum($dependant);
		;
	}
	public function unwire($dependant) {
		$dependant->onAddSuccesses->remove((isset($this->addSuccesses) ? $this->addSuccesses: array($this, "addSuccesses")));
		$dependant->onAddFailures->remove((isset($this->addFailures) ? $this->addFailures: array($this, "addFailures")));
		$dependant->onAddErrors->remove((isset($this->addErrors) ? $this->addErrors: array($this, "addErrors")));
		$dependant->onAddWarnings->remove((isset($this->addWarnings) ? $this->addWarnings: array($this, "addWarnings")));
		$this->subtract($dependant);
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
	function __toString() { return 'utest.ui.common.ResultStats'; }
}
