<?php

class haxe_io_Input {
	public function __construct(){}
	public $bigEndian;
	public function readByte() {
		$GLOBALS['%s']->push("haxe.io.Input::readByte");
		$製pos = $GLOBALS['%s']->length;
		{
			$裨mp = haxe_io_Input_0($this);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function readBytes($s, $pos, $len) {
		$GLOBALS['%s']->push("haxe.io.Input::readBytes");
		$製pos = $GLOBALS['%s']->length;
		$k = $len;
		$b = $s->b;
		if($pos < 0 || $len < 0 || $pos + $len > $s->length) {
			throw new HException(haxe_io_Error::$OutsideBounds);
			;
		}
		while($k > 0) {
			$b[$pos] = chr($this->readByte());
			$pos++;
			$k--;
			;
		}
		{
			$GLOBALS['%s']->pop();
			return $len;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$k,$b);
	}
	public function close() {
		$GLOBALS['%s']->push("haxe.io.Input::close");
		$製pos = $GLOBALS['%s']->length;
		;
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function setEndian($b) {
		$GLOBALS['%s']->push("haxe.io.Input::setEndian");
		$製pos = $GLOBALS['%s']->length;
		$this->bigEndian = $b;
		{
			$GLOBALS['%s']->pop();
			return $b;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function readAll($bufsize) {
		$GLOBALS['%s']->push("haxe.io.Input::readAll");
		$製pos = $GLOBALS['%s']->length;
		if($bufsize === null) {
			$bufsize = 8192;
			;
		}
		$buf = haxe_io_Bytes::alloc($bufsize);
		$total = new haxe_io_BytesBuffer();
		try {
			while(true) {
				$len = $this->readBytes($buf, 0, $bufsize);
				if($len === 0) {
					throw new HException(haxe_io_Error::$Blocked);
					;
				}
				{
					if($len < 0 || $len > $buf->length) {
						throw new HException(haxe_io_Error::$OutsideBounds);
						;
					}
					$total->b .= substr($buf->b, 0, $len);
					;
				}
				unset($len);
			}
			;
		}catch(Exception $蜜) {
		$_ex_ = ($蜜 instanceof HException) ? $蜜->e : $蜜;
		;
		if(($e = $_ex_) instanceof haxe_io_Eof){
			$GLOBALS['%e'] = new _hx_array(array());
			while($GLOBALS['%s']->length >= $製pos) $GLOBALS['%e']->unshift($GLOBALS['%s']->pop());
			$GLOBALS['%s']->push($GLOBALS['%e'][0]);
			;
			;
		} else throw $蜜; }
		{
			$裨mp = $total->getBytes();
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$total,$e,$buf);
	}
	public function readFullBytes($s, $pos, $len) {
		$GLOBALS['%s']->push("haxe.io.Input::readFullBytes");
		$製pos = $GLOBALS['%s']->length;
		while($len > 0) {
			$k = $this->readBytes($s, $pos, $len);
			$pos += $k;
			$len -= $k;
			unset($k);
		}
		$GLOBALS['%s']->pop();
		unset($製pos);
	}
	public function read($nbytes) {
		$GLOBALS['%s']->push("haxe.io.Input::read");
		$製pos = $GLOBALS['%s']->length;
		$s = haxe_io_Bytes::alloc($nbytes);
		$p = 0;
		while($nbytes > 0) {
			$k = $this->readBytes($s, $p, $nbytes);
			if($k === 0) {
				throw new HException(haxe_io_Error::$Blocked);
				;
			}
			$p += $k;
			$nbytes -= $k;
			unset($k);
		}
		{
			$GLOBALS['%s']->pop();
			return $s;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$s,$p);
	}
	public function readUntil($end) {
		$GLOBALS['%s']->push("haxe.io.Input::readUntil");
		$製pos = $GLOBALS['%s']->length;
		$buf = new StringBuf();
		$last = null;
		while(($last = $this->readByte()) !== $end) $buf->b .= chr($last);
		{
			$裨mp = $buf->b;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$last,$buf);
	}
	public function readLine() {
		$GLOBALS['%s']->push("haxe.io.Input::readLine");
		$製pos = $GLOBALS['%s']->length;
		$buf = new StringBuf();
		$last = null;
		$s = null;
		try {
			while(($last = $this->readByte()) !== 10) $buf->b .= chr($last);
			$s = $buf->b;
			if(_hx_char_code_at($s, strlen($s) - 1) === 13) {
				$s = _hx_substr($s, 0, -1);
				;
			}
			;
		}catch(Exception $蜜) {
		$_ex_ = ($蜜 instanceof HException) ? $蜜->e : $蜜;
		;
		if(($e = $_ex_) instanceof haxe_io_Eof){
			$GLOBALS['%e'] = new _hx_array(array());
			while($GLOBALS['%s']->length >= $製pos) $GLOBALS['%e']->unshift($GLOBALS['%s']->pop());
			$GLOBALS['%s']->push($GLOBALS['%e'][0]);
			$s = $buf->b;
			if(strlen($s) === 0) {
				throw new HException(($e));
				;
			}
			;
		} else throw $蜜; }
		{
			$GLOBALS['%s']->pop();
			return $s;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$s,$last,$e,$buf);
	}
	public function readFloat() {
		$GLOBALS['%s']->push("haxe.io.Input::readFloat");
		$製pos = $GLOBALS['%s']->length;
		$a = unpack("f", $this->readString(4));
		{
			$裨mp = $a[1];
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$a);
	}
	public function readDouble() {
		$GLOBALS['%s']->push("haxe.io.Input::readDouble");
		$製pos = $GLOBALS['%s']->length;
		$a = unpack("d", $this->readString(8));
		{
			$裨mp = $a[1];
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$a);
	}
	public function readInt8() {
		$GLOBALS['%s']->push("haxe.io.Input::readInt8");
		$製pos = $GLOBALS['%s']->length;
		$n = $this->readByte();
		if($n >= 128) {
			$裨mp = $n - 256;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		{
			$GLOBALS['%s']->pop();
			return $n;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$n);
	}
	public function readInt16() {
		$GLOBALS['%s']->push("haxe.io.Input::readInt16");
		$製pos = $GLOBALS['%s']->length;
		$ch1 = $this->readByte();
		$ch2 = $this->readByte();
		$n = haxe_io_Input_1($this, $ch1, $ch2);
		if($n & 32768 !== 0) {
			$裨mp = $n - 65536;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		{
			$GLOBALS['%s']->pop();
			return $n;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$n,$ch2,$ch1);
	}
	public function readUInt16() {
		$GLOBALS['%s']->push("haxe.io.Input::readUInt16");
		$製pos = $GLOBALS['%s']->length;
		$ch1 = $this->readByte();
		$ch2 = $this->readByte();
		{
			$裨mp = haxe_io_Input_2($this, $ch1, $ch2);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$ch2,$ch1);
	}
	public function readInt24() {
		$GLOBALS['%s']->push("haxe.io.Input::readInt24");
		$製pos = $GLOBALS['%s']->length;
		$ch1 = $this->readByte();
		$ch2 = $this->readByte();
		$ch3 = $this->readByte();
		$n = haxe_io_Input_3($this, $ch1, $ch2, $ch3);
		if($n & 8388608 !== 0) {
			$裨mp = $n - 16777216;
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		{
			$GLOBALS['%s']->pop();
			return $n;
			;
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$n,$ch3,$ch2,$ch1);
	}
	public function readUInt24() {
		$GLOBALS['%s']->push("haxe.io.Input::readUInt24");
		$製pos = $GLOBALS['%s']->length;
		$ch1 = $this->readByte();
		$ch2 = $this->readByte();
		$ch3 = $this->readByte();
		{
			$裨mp = haxe_io_Input_4($this, $ch1, $ch2, $ch3);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$ch3,$ch2,$ch1);
	}
	public function readInt31() {
		$GLOBALS['%s']->push("haxe.io.Input::readInt31");
		$製pos = $GLOBALS['%s']->length;
		$ch1 = null; $ch2 = null; $ch3 = null; $ch4 = null;
		if($this->bigEndian) {
			$ch4 = $this->readByte();
			$ch3 = $this->readByte();
			$ch2 = $this->readByte();
			$ch1 = $this->readByte();
			;
		}
		else {
			$ch1 = $this->readByte();
			$ch2 = $this->readByte();
			$ch3 = $this->readByte();
			$ch4 = $this->readByte();
			;
		}
		if((($ch4 & 128) === 0) != (($ch4 & 64) === 0)) {
			throw new HException(haxe_io_Error::$Overflow);
			;
		}
		{
			$裨mp = (($ch1 | ($ch2 << 8)) | ($ch3 << 16)) | ($ch4 << 24);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$ch4,$ch3,$ch2,$ch1);
	}
	public function readUInt30() {
		$GLOBALS['%s']->push("haxe.io.Input::readUInt30");
		$製pos = $GLOBALS['%s']->length;
		$ch1 = $this->readByte();
		$ch2 = $this->readByte();
		$ch3 = $this->readByte();
		$ch4 = $this->readByte();
		if((haxe_io_Input_5($this, $ch1, $ch2, $ch3, $ch4)) >= 64) {
			throw new HException(haxe_io_Error::$Overflow);
			;
		}
		{
			$裨mp = haxe_io_Input_6($this, $ch1, $ch2, $ch3, $ch4);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$ch4,$ch3,$ch2,$ch1);
	}
	public function readInt32() {
		$GLOBALS['%s']->push("haxe.io.Input::readInt32");
		$製pos = $GLOBALS['%s']->length;
		$ch1 = $this->readByte();
		$ch2 = $this->readByte();
		$ch3 = $this->readByte();
		$ch4 = $this->readByte();
		{
			$裨mp = haxe_io_Input_7($this, $ch1, $ch2, $ch3, $ch4);
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$ch4,$ch3,$ch2,$ch1);
	}
	public function readString($len) {
		$GLOBALS['%s']->push("haxe.io.Input::readString");
		$製pos = $GLOBALS['%s']->length;
		$b = haxe_io_Bytes::alloc($len);
		$this->readFullBytes($b, 0, $len);
		{
			$裨mp = $b->toString();
			$GLOBALS['%s']->pop();
			return $裨mp;
			unset($裨mp);
		}
		$GLOBALS['%s']->pop();
		unset($製pos,$b);
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
	function __toString() { return 'haxe.io.Input'; }
}
;
function haxe_io_Input_0(&$裨his) {
	$GLOBALS['%s']->push('haxe.io.Input:lambda_0');
	$製pos = $GLOBALS['%s']->length;
throw new HException("Not implemented");
}
function haxe_io_Input_1(&$裨his, &$ch1, &$ch2) {
	$GLOBALS['%s']->push('haxe.io.Input:lambda_1');
	$製pos = $GLOBALS['%s']->length;
if($裨his->bigEndian) {
	return $ch2 | ($ch1 << 8);
	;
}
else {
	return $ch1 | ($ch2 << 8);
	;
}
}
function haxe_io_Input_2(&$裨his, &$ch1, &$ch2) {
	$GLOBALS['%s']->push('haxe.io.Input:lambda_2');
	$製pos = $GLOBALS['%s']->length;
if($裨his->bigEndian) {
	return $ch2 | ($ch1 << 8);
	;
}
else {
	return $ch1 | ($ch2 << 8);
	;
}
}
function haxe_io_Input_3(&$裨his, &$ch1, &$ch2, &$ch3) {
	$GLOBALS['%s']->push('haxe.io.Input:lambda_3');
	$製pos = $GLOBALS['%s']->length;
if($裨his->bigEndian) {
	return ($ch3 | ($ch2 << 8)) | ($ch1 << 16);
	;
}
else {
	return ($ch1 | ($ch2 << 8)) | ($ch3 << 16);
	;
}
}
function haxe_io_Input_4(&$裨his, &$ch1, &$ch2, &$ch3) {
	$GLOBALS['%s']->push('haxe.io.Input:lambda_4');
	$製pos = $GLOBALS['%s']->length;
if($裨his->bigEndian) {
	return ($ch3 | ($ch2 << 8)) | ($ch1 << 16);
	;
}
else {
	return ($ch1 | ($ch2 << 8)) | ($ch3 << 16);
	;
}
}
function haxe_io_Input_5(&$裨his, &$ch1, &$ch2, &$ch3, &$ch4) {
	$GLOBALS['%s']->push('haxe.io.Input:lambda_5');
	$製pos = $GLOBALS['%s']->length;
if($裨his->bigEndian) {
	return $ch1;
	;
}
else {
	return $ch4;
	;
}
}
function haxe_io_Input_6(&$裨his, &$ch1, &$ch2, &$ch3, &$ch4) {
	$GLOBALS['%s']->push('haxe.io.Input:lambda_6');
	$製pos = $GLOBALS['%s']->length;
if($裨his->bigEndian) {
	return (($ch4 | ($ch3 << 8)) | ($ch2 << 16)) | ($ch1 << 24);
	;
}
else {
	return (($ch1 | ($ch2 << 8)) | ($ch3 << 16)) | ($ch4 << 24);
	;
}
}
function haxe_io_Input_7(&$裨his, &$ch1, &$ch2, &$ch3, &$ch4) {
	$GLOBALS['%s']->push('haxe.io.Input:lambda_7');
	$製pos = $GLOBALS['%s']->length;
if($裨his->bigEndian) {
	return ((($ch1 << 8) | $ch2) << 16) | (($ch3 << 8) | $ch4);
	;
}
else {
	return ((($ch4 << 8) | $ch3) << 16) | (($ch2 << 8) | $ch1);
	;
}
}