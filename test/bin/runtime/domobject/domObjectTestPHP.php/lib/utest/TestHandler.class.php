<?php

class utest_TestHandler {
	public function __construct($fixture) {
		if(!php_Boot::$skip_constructor) {
		if($fixture === null) {
			throw new HException("fixture argument is null");
		}
		$this->fixture = $fixture;
		$this->results = new HList();
		$this->asyncStack = new HList();
		$this->onTested = new utest_Dispatcher();
		$this->onTimeout = new utest_Dispatcher();
		$this->onComplete = new utest_Dispatcher();
	}}
	public $results;
	public $fixture;
	public $asyncStack;
	public $onTested;
	public $onTimeout;
	public $onComplete;
	public function execute() {
		try {
			$this->executeMethod($this->fixture->setup);
			try {
				$this->executeMethod($this->fixture->method);
			}catch(Exception $»e) {
				$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
				$e = $_ex_;
				{
					$this->results->add(utest_Assertation::Error($e, utest_TestHandler::exceptionStack(null)));
				}
			}
		}catch(Exception $»e) {
			$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
			$e = $_ex_;
			{
				$this->results->add(utest_Assertation::SetupError($e, utest_TestHandler::exceptionStack(null)));
			}
		}
		$this->checkTested();
	}
	public function checkTested() {
		if($this->asyncStack->length === 0) {
			$this->tested();
		} else {
			$this->timeout();
		}
	}
	public $expireson;
	public function setTimeout($timeout) {
		$newexpire = haxe_Timer::stamp() + $timeout / 1000;
		$this->expireson = utest_TestHandler_0($this, $newexpire, $timeout);
	}
	public function bindHandler() {
		utest_Assert::$results = $this->results;
		utest_Assert::$createAsync = (isset($this->addAsync) ? $this->addAsync: array($this, "addAsync"));
		utest_Assert::$createEvent = (isset($this->addEvent) ? $this->addEvent: array($this, "addEvent"));
	}
	public function unbindHandler() {
		utest_Assert::$results = null;
		utest_Assert::$createAsync = array(new _hx_lambda(array(), "utest_TestHandler_1"), 'execute');
		utest_Assert::$createEvent = array(new _hx_lambda(array(), "utest_TestHandler_2"), 'execute');
	}
	public function addAsync($f, $timeout) {
		if($timeout === null) {
			$timeout = 250;
		}
		if(null === $f) {
			$f = array(new _hx_lambda(array(&$f, &$timeout), "utest_TestHandler_3"), 'execute');
		}
		$this->asyncStack->add($f);
		$handler = $this;
		$this->setTimeout($timeout);
		return array(new _hx_lambda(array(&$f, &$handler, &$timeout), "utest_TestHandler_4"), 'execute');
	}
	public function addEvent($f, $timeout) {
		if($timeout === null) {
			$timeout = 250;
		}
		$this->asyncStack->add($f);
		$handler = $this;
		$this->setTimeout($timeout);
		return array(new _hx_lambda(array(&$f, &$handler, &$timeout), "utest_TestHandler_5"), 'execute');
	}
	public function executeMethod($name) {
		if($name === null) {
			return;
		}
		$this->bindHandler();
		Reflect::callMethod($this->fixture->target, Reflect::field($this->fixture->target, $name), new _hx_array(array()));
	}
	public function tested() {
		if($this->results->length === 0) {
			$this->results->add(utest_Assertation::Warning("no assertions"));
		}
		$this->onTested->dispatch($this);
		$this->completed();
	}
	public function timeout() {
		$this->results->add(utest_Assertation::TimeoutError($this->asyncStack->length, new _hx_array(array())));
		$this->onTimeout->dispatch($this);
		$this->completed();
	}
	public function completed() {
		try {
			$this->executeMethod($this->fixture->teardown);
		}catch(Exception $»e) {
			$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
			$e = $_ex_;
			{
				$this->results->add(utest_Assertation::TeardownError($e, utest_TestHandler::exceptionStack(2)));
			}
		}
		$this->unbindHandler();
		$this->onComplete->dispatch($this);
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
	static $POLLING_TIME = 10;
	static function exceptionStack($pops) {
		if($pops === null) {
			$pops = 2;
		}
		$stack = haxe_Stack::exceptionStack();
		while($pops-- > 0) {
			$stack->pop();
		}
		return $stack;
	}
	function __toString() { return 'utest.TestHandler'; }
}
function utest_TestHandler_0(&$»this, &$newexpire, &$timeout) {
	if($»this->expireson === null) {
		return $newexpire;
	} else {
		if($newexpire > $»this->expireson) {
			return $newexpire;
		} else {
			return $»this->expireson;
		}
	}
}
function utest_TestHandler_1($f, $t) {
	{
		return array(new _hx_lambda(array(&$f, &$t), "utest_TestHandler_6"), 'execute');
	}
}
function utest_TestHandler_2($f, $t) {
	{
		return array(new _hx_lambda(array(&$f, &$t), "utest_TestHandler_7"), 'execute');
	}
}
function utest_TestHandler_3(&$f, &$timeout) {
	{
	}
}
function utest_TestHandler_4(&$f, &$handler, &$timeout) {
	{
		if(!$handler->asyncStack->remove($f)) {
			$handler->results->add(utest_Assertation::AsyncError("method already executed", new _hx_array(array())));
			return;
		}
		try {
			$handler->bindHandler();
			call_user_func($f);
		}catch(Exception $»e) {
			$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
			$e = $_ex_;
			{
				$handler->results->add(utest_Assertation::AsyncError($e, utest_TestHandler::exceptionStack(0)));
			}
		}
	}
}
function utest_TestHandler_5(&$f, &$handler, &$timeout, $e) {
	{
		if(!$handler->asyncStack->remove($f)) {
			$handler->results->add(utest_Assertation::AsyncError("event already executed", new _hx_array(array())));
			return;
		}
		try {
			$handler->bindHandler();
			call_user_func_array($f, array($e));
		}catch(Exception $»e) {
			$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
			$e1 = $_ex_;
			{
				$handler->results->add(utest_Assertation::AsyncError($e1, utest_TestHandler::exceptionStack(0)));
			}
		}
	}
}
function utest_TestHandler_6(&$f, &$t) {
	{
	}
}
function utest_TestHandler_7(&$f, &$t, $e) {
	{
	}
}
