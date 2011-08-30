<?php

class Lambda {
	public function __construct(){}
	static function harray($it) {
		$GLOBALS['%s']->push("Lambda::array");
		$製pos = $GLOBALS['%s']->length;
		$a = new _hx_array(array());
		if(null == $it) throw new HException('null iterable');
		$蜴t = $it->iterator();
		while($蜴t->hasNext()) {
		$i = $蜴t->next();
		$a->push($i);
		}
		{
			$GLOBALS['%s']->pop();
			return $a;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$a);
	}
	static function hlist($it) {
		$GLOBALS['%s']->push("Lambda::list");
		$製pos = $GLOBALS['%s']->length;
		$l = new HList();
		if(null == $it) throw new HException('null iterable');
		$蜴t = $it->iterator();
		while($蜴t->hasNext()) {
		$i = $蜴t->next();
		$l->add($i);
		}
		{
			$GLOBALS['%s']->pop();
			return $l;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$l);
	}
	static function map($it, $f) {
		$GLOBALS['%s']->push("Lambda::map");
		$製pos = $GLOBALS['%s']->length;
		$l = new HList();
		if(null == $it) throw new HException('null iterable');
		$蜴t = $it->iterator();
		while($蜴t->hasNext()) {
		$x = $蜴t->next();
		$l->add(call_user_func_array($f, array($x)));
		}
		{
			$GLOBALS['%s']->pop();
			return $l;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$l);
	}
	static function mapi($it, $f) {
		$GLOBALS['%s']->push("Lambda::mapi");
		$製pos = $GLOBALS['%s']->length;
		$l = new HList();
		$i = 0;
		if(null == $it) throw new HException('null iterable');
		$蜴t = $it->iterator();
		while($蜴t->hasNext()) {
		$x = $蜴t->next();
		$l->add(call_user_func_array($f, array($i++, $x)));
		}
		{
			$GLOBALS['%s']->pop();
			return $l;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$l,$i);
	}
	static function has($it, $elt, $cmp) {
		$GLOBALS['%s']->push("Lambda::has");
		$製pos = $GLOBALS['%s']->length;
		if($cmp === null) {
			if(null == $it) throw new HException('null iterable');
			$蜴t = $it->iterator();
			while($蜴t->hasNext()) {
			$x = $蜴t->next();
			if($x === $elt) {
				$GLOBALS['%s']->pop();
				return true;
				;
			}
			}
			;
		}
		else {
			if(null == $it) throw new HException('null iterable');
			$蜴t = $it->iterator();
			while($蜴t->hasNext()) {
			$x = $蜴t->next();
			if(call_user_func_array($cmp, array($x, $elt))) {
				$GLOBALS['%s']->pop();
				return true;
				;
			}
			}
			;
		}
		{
			$GLOBALS['%s']->pop();
			return false;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function exists($it, $f) {
		$GLOBALS['%s']->push("Lambda::exists");
		$製pos = $GLOBALS['%s']->length;
		if(null == $it) throw new HException('null iterable');
		$蜴t = $it->iterator();
		while($蜴t->hasNext()) {
		$x = $蜴t->next();
		if(call_user_func_array($f, array($x))) {
			$GLOBALS['%s']->pop();
			return true;
			;
		}
		}
		{
			$GLOBALS['%s']->pop();
			return false;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function hforeach($it, $f) {
		$GLOBALS['%s']->push("Lambda::foreach");
		$製pos = $GLOBALS['%s']->length;
		if(null == $it) throw new HException('null iterable');
		$蜴t = $it->iterator();
		while($蜴t->hasNext()) {
		$x = $蜴t->next();
		if(!call_user_func_array($f, array($x))) {
			$GLOBALS['%s']->pop();
			return false;
			;
		}
		}
		{
			$GLOBALS['%s']->pop();
			return true;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function iter($it, $f) {
		$GLOBALS['%s']->push("Lambda::iter");
		$製pos = $GLOBALS['%s']->length;
		if(null == $it) throw new HException('null iterable');
		$蜴t = $it->iterator();
		while($蜴t->hasNext()) {
		$x = $蜴t->next();
		call_user_func_array($f, array($x));
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function filter($it, $f) {
		$GLOBALS['%s']->push("Lambda::filter");
		$製pos = $GLOBALS['%s']->length;
		$l = new HList();
		if(null == $it) throw new HException('null iterable');
		$蜴t = $it->iterator();
		while($蜴t->hasNext()) {
		$x = $蜴t->next();
		if(call_user_func_array($f, array($x))) {
			$l->add($x);
			;
		}
		}
		{
			$GLOBALS['%s']->pop();
			return $l;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$l);
	}
	static function fold($it, $f, $first) {
		$GLOBALS['%s']->push("Lambda::fold");
		$製pos = $GLOBALS['%s']->length;
		if(null == $it) throw new HException('null iterable');
		$蜴t = $it->iterator();
		while($蜴t->hasNext()) {
		$x = $蜴t->next();
		$first = call_user_func_array($f, array($x, $first));
		}
		{
			$GLOBALS['%s']->pop();
			return $first;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function count($it, $pred) {
		$GLOBALS['%s']->push("Lambda::count");
		$製pos = $GLOBALS['%s']->length;
		$n = 0;
		if($pred === null) {
			if(null == $it) throw new HException('null iterable');
			$蜴t = $it->iterator();
			while($蜴t->hasNext()) {
			$_ = $蜴t->next();
			$n++;
			}
			;
		}
		else {
			if(null == $it) throw new HException('null iterable');
			$蜴t = $it->iterator();
			while($蜴t->hasNext()) {
			$x = $蜴t->next();
			if(call_user_func_array($pred, array($x))) {
				$n++;
				;
			}
			}
			;
		}
		{
			$GLOBALS['%s']->pop();
			return $n;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$n);
	}
	static function hempty($it) {
		$GLOBALS['%s']->push("Lambda::empty");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = !$it->iterator()->hasNext();
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	static function indexOf($it, $v) {
		$GLOBALS['%s']->push("Lambda::indexOf");
		$製pos = $GLOBALS['%s']->length;
		$i = 0;
		if(null == $it) throw new HException('null iterable');
		$蜴t = $it->iterator();
		while($蜴t->hasNext()) {
		$v2 = $蜴t->next();
		{
			if($v === $v2) {
				$GLOBALS['%s']->pop();
				return $i;
				;
			}
			$i++;
			;
		}
		}
		{
			$GLOBALS['%s']->pop();
			return -1;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$i);
	}
	static function concat($a, $b) {
		$GLOBALS['%s']->push("Lambda::concat");
		$製pos = $GLOBALS['%s']->length;
		$l = new HList();
		if(null == $a) throw new HException('null iterable');
		$蜴t = $a->iterator();
		while($蜴t->hasNext()) {
		$x = $蜴t->next();
		$l->add($x);
		}
		if(null == $b) throw new HException('null iterable');
		$蜴t = $b->iterator();
		while($蜴t->hasNext()) {
		$x = $蜴t->next();
		$l->add($x);
		}
		{
			$GLOBALS['%s']->pop();
			return $l;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$l);
	}
	function __toString() { return 'Lambda'; }
}
