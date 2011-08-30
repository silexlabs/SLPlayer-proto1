<?php

class utest_Notifier {
	public function __construct() {
		if( !php_Boot::$skip_constructor ) {
		$this->handlers = new _hx_array(array());
		;
	}}
	public $handlers;
	public function add($h) {
		$this->handlers->push($h);
		return $h;
		;
	}
	public function remove($h) {
		{
			$_g1 = 0; $_g = $this->handlers->length;
			while($_g1 < $_g) {
				$i = $_g1++;
				if(Reflect::compareMethods($this->handlers[$i], $h)) {
					return _hx_array_get($this->handlers->splice($i, 1), 0);
					;
				}
				unset($i);
			}
			unset($_g1,$_g);
		}
		return null;
		;
	}
	public function clear() {
		$this->handlers = new _hx_array(array());
		;
	}
	public function dispatch() {
		try {
			$list = $this->handlers->copy();
			{
				$_g = 0;
				while($_g < $list->length) {
					$l = $list[$_g];
					++$_g;
					call_user_func_array($l, array());
					unset($l);
				}
				unset($_g);
			}
			return true;
			unset($list);
		}catch(Exception $»e) {
		$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
		;
		if(($exc = $_ex_) instanceof utest__Dispatcher_EventException){
			return false;
			;
		} else throw $»e; }
		unset($exc);
	}
	public function has() {
		return $this->handlers->length > 0;
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
	static function stop() {
		throw new HException(utest__Dispatcher_EventException::$StopPropagation);
		;
	}
	function __toString() { return 'utest.Notifier'; }
}
