<?php

class haxe_Http {
	public function __construct($url) {
		if(!isset($this->onData)) $this->onData = array(new _hx_lambda(array(&$this, &$url), "haxe_Http_0"), 'execute');
		if(!isset($this->onError)) $this->onError = array(new _hx_lambda(array(&$this, &$url), "haxe_Http_1"), 'execute');
		if(!isset($this->onStatus)) $this->onStatus = array(new _hx_lambda(array(&$this, &$url), "haxe_Http_2"), 'execute');
		if( !php_Boot::$skip_constructor ) {
		$GLOBALS['%s']->push("haxe.Http::new");
		$»spos = $GLOBALS['%s']->length;
		$this->url = $url;
		$this->headers = new Hash();
		$this->params = new Hash();
		$this->cnxTimeout = 10;
		$this->noShutdown = !function_exists("stream_socket_shutdown");
		$GLOBALS['%s']->pop();
		unset($»spos);
	}}
	public $url;
	public $noShutdown;
	public $cnxTimeout;
	public $responseHeaders;
	public $postData;
	public $chunk_size;
	public $chunk_buf;
	public $file;
	public $headers;
	public $params;
	public function setHeader($header, $value) {
		$GLOBALS['%s']->push("haxe.Http::setHeader");
		$»spos = $GLOBALS['%s']->length;
		$this->headers->set($header, $value);
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function setParameter($param, $value) {
		$GLOBALS['%s']->push("haxe.Http::setParameter");
		$»spos = $GLOBALS['%s']->length;
		$this->params->set($param, $value);
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function request($post) {
		$GLOBALS['%s']->push("haxe.Http::request");
		$»spos = $GLOBALS['%s']->length;
		$me = $this;
		$me1 = $this;
		$output = new haxe_io_BytesOutput();
		$old = (isset($this->onError) ? $this->onError: array($this, "onError"));
		$err = false;
		$this->onError = array(new _hx_lambda(array(&$err, &$me, &$me1, &$old, &$output, &$post), "haxe_Http_3"), 'execute');
		$this->customRequest($post, $output, null, null);
		if(!$err) {
			$me1->onData($output->getBytes()->toString());
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos,$output,$old,$me1,$me,$err);
	}
	public function fileTransfert($argname, $filename, $file, $size) {
		$GLOBALS['%s']->push("haxe.Http::fileTransfert");
		$»spos = $GLOBALS['%s']->length;
		$this->file = _hx_anonymous(array("param" => $argname, "filename" => $filename, "io" => $file, "size" => $size));
		$GLOBALS['%s']->pop();
		unset($»spos);
	}
	public function customRequest($post, $api, $sock, $method) {
		$GLOBALS['%s']->push("haxe.Http::customRequest");
		$»spos = $GLOBALS['%s']->length;
		$url_regexp = new EReg("^(https?://)?([a-zA-Z\\.0-9-]+)(:[0-9]+)?(.*)\$", "");
		if(!$url_regexp->match($this->url)) {
			$this->onError("Invalid URL");
			{
				$GLOBALS['%s']->pop();
				return;
				;
			}
			;
		}
		$secure = ($url_regexp->matched(1) === "https://");
		if($sock === null) {
			$sock = haxe_Http_4($this, $api, $method, $post, $secure, $sock, $url_regexp);
			;
		}
		$host = $url_regexp->matched(2);
		$portString = $url_regexp->matched(3);
		$request = $url_regexp->matched(4);
		if($request === "") {
			$request = "/";
			;
		}
		$port = haxe_Http_5($this, $api, $host, $method, $portString, $post, $request, $secure, $sock, $url_regexp);
		$data = null;
		$multipart = (_hx_field($this, "file") !== null);
		$boundary = null;
		$uri = null;
		if($multipart) {
			$post = true;
			$boundary = ((Std::string(Std::random(1000)) . Std::string(Std::random(1000))) . Std::string(Std::random(1000))) . Std::string(Std::random(1000));
			while(strlen($boundary) < 38) $boundary = "-" . $boundary;
			$b = new StringBuf();
			if(null == $this->params) throw new HException('null iterable');
			$»it = $this->params->keys();
			while($»it->hasNext()) {
			$p = $»it->next();
			{
				$b->b .= "--";
				$b->b .= $boundary;
				$b->b .= "\x0D\x0A";
				$b->b .= "Content-Disposition: form-data; name=\"";
				$b->b .= $p;
				$b->b .= "\"";
				$b->b .= "\x0D\x0A";
				$b->b .= "\x0D\x0A";
				$b->b .= $this->params->get($p);
				$b->b .= "\x0D\x0A";
				;
			}
			}
			$b->b .= "--";
			$b->b .= $boundary;
			$b->b .= "\x0D\x0A";
			$b->b .= "Content-Disposition: form-data; name=\"";
			$b->b .= $this->file->param;
			$b->b .= "\"; filename=\"";
			$b->b .= $this->file->filename;
			$b->b .= "\"";
			$b->b .= "\x0D\x0A";
			$b->b .= (("Content-Type: " . "application/octet-stream") . "\x0D\x0A") . "\x0D\x0A";
			$uri = $b->b;
			unset($b);
		}
		else {
			if(null == $this->params) throw new HException('null iterable');
			$»it = $this->params->keys();
			while($»it->hasNext()) {
			$p = $»it->next();
			{
				if($uri === null) {
					$uri = "";
					;
				}
				else {
					$uri .= "&";
					;
				}
				$uri .= (rawurlencode($p) . "=") . rawurlencode($this->params->get($p));
				;
			}
			}
			;
		}
		$b = new StringBuf();
		if($method !== null) {
			$b->b .= $method;
			$b->b .= " ";
			;
		}
		else {
			if($post) {
				$b->b .= "POST ";
				;
			}
			else {
				$b->b .= "GET ";
				;
			}
			;
		}
		if(_hx_field(_hx_qtype("haxe.Http"), "PROXY") !== null) {
			$b->b .= "http://";
			$b->b .= $host;
			if($port !== 80) {
				$b->b .= ":";
				$b->b .= $port;
				;
			}
			;
		}
		$b->b .= $request;
		if(!$post && $uri !== null) {
			if(_hx_index_of($request, "?", 0) >= 0) {
				$b->b .= "&";
				;
			}
			else {
				$b->b .= "?";
				;
			}
			$b->b .= $uri;
			;
		}
		$b->b .= (" HTTP/1.1\x0D\x0AHost: " . $host) . "\x0D\x0A";
		if($this->postData === null && $post && $uri !== null) {
			if($multipart || $this->headers->get("Content-Type") === null) {
				$b->b .= "Content-Type: ";
				if($multipart) {
					$b->b .= "multipart/form-data";
					$b->b .= "; boundary=";
					$b->b .= $boundary;
					;
				}
				else {
					$b->b .= "application/x-www-form-urlencoded";
					;
				}
				$b->b .= "\x0D\x0A";
				;
			}
			if($multipart) {
				$b->b .= ("Content-Length: " . (((strlen($uri) + $this->file->size) + strlen($boundary)) + 6)) . "\x0D\x0A";
				;
			}
			else {
				$b->b .= ("Content-Length: " . strlen($uri)) . "\x0D\x0A";
				;
			}
			;
		}
		if(null == $this->headers) throw new HException('null iterable');
		$»it = $this->headers->keys();
		while($»it->hasNext()) {
		$h = $»it->next();
		{
			$b->b .= $h;
			$b->b .= ": ";
			$b->b .= $this->headers->get($h);
			$b->b .= "\x0D\x0A";
			;
		}
		}
		if($this->postData !== null) {
			$b->b .= $this->postData;
			;
		}
		else {
			$b->b .= "\x0D\x0A";
			if($post && $uri !== null) {
				$b->b .= $uri;
				;
			}
			;
		}
		try {
			if(_hx_field(_hx_qtype("haxe.Http"), "PROXY") !== null) {
				$sock->connect(new php_net_Host(haxe_Http::$PROXY->host), haxe_Http::$PROXY->port);
				;
			}
			else {
				$sock->connect(new php_net_Host($host), $port);
				;
			}
			$sock->write($b->b);
			if($multipart) {
				$bufsize = 4096;
				$buf = haxe_io_Bytes::alloc($bufsize);
				while($this->file->size > 0) {
					$size = haxe_Http_6($this, $api, $b, $boundary, $buf, $bufsize, $data, $host, $method, $multipart, $port, $portString, $post, $request, $secure, $sock, $uri, $url_regexp);
					$len = 0;
					try {
						$len = $this->file->io->readBytes($buf, 0, $size);
						;
					}catch(Exception $»e) {
					$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
					;
					if(($e = $_ex_) instanceof haxe_io_Eof){
						$GLOBALS['%e'] = new _hx_array(array());
						while($GLOBALS['%s']->length >= $»spos) $GLOBALS['%e']->unshift($GLOBALS['%s']->pop());
						$GLOBALS['%s']->push($GLOBALS['%e'][0]);
						break;
						;
					} else throw $»e; }
					$sock->output->writeFullBytes($buf, 0, $len);
					$this->file->size -= $len;
					unset($size,$len,$e);
				}
				$sock->write("\x0D\x0A");
				$sock->write("--");
				$sock->write($boundary);
				$sock->write("--");
				unset($bufsize,$buf);
			}
			$this->readHttpResponse($api, $sock);
			$sock->close();
			;
		}catch(Exception $»e) {
		$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
		;
		{ $e = $_ex_;
		{
			$GLOBALS['%e'] = new _hx_array(array());
			while($GLOBALS['%s']->length >= $»spos) $GLOBALS['%e']->unshift($GLOBALS['%s']->pop());
			$GLOBALS['%s']->push($GLOBALS['%e'][0]);
			try {
				$sock->close();
				;
			}catch(Exception $»e) {
			$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
			;
			{ $e1 = $_ex_;
			{
				$GLOBALS['%e'] = new _hx_array(array());
				while($GLOBALS['%s']->length >= $»spos) $GLOBALS['%e']->unshift($GLOBALS['%s']->pop());
				$GLOBALS['%s']->push($GLOBALS['%e'][0]);
				;
				;
			}}}
			$this->onError(Std::string($e));
			unset($e1);
		}}}
		$GLOBALS['%s']->pop();
		unset($»spos,$url_regexp,$uri,$secure,$request,$portString,$port,$multipart,$host,$e,$data,$boundary,$b);
	}
	public function readHttpResponse($api, $sock) {
		$GLOBALS['%s']->push("haxe.Http::readHttpResponse");
		$»spos = $GLOBALS['%s']->length;
		$b = new haxe_io_BytesBuffer();
		$k = 4;
		$s = haxe_io_Bytes::alloc(4);
		$sock->setTimeout($this->cnxTimeout);
		try {
			while(true) {
				$p = $sock->input->readBytes($s, 0, $k);
				while($p !== $k) $p += $sock->input->readBytes($s, $p, $k - $p);
				{
					if($k < 0 || $k > $s->length) {
						throw new HException(haxe_io_Error::$OutsideBounds);
						;
					}
					$b->b .= substr($s->b, 0, $k);
					;
				}
				switch($k) {
				case 1:{
					$c = ord($s->b[0]);
					if($c === 10) {
						throw new _hx_break_exception();
						;
					}
					if($c === 13) {
						$k = 3;
						;
					}
					else {
						$k = 4;
						;
					}
					unset($c);
				}break;
				case 2:{
					$c = ord($s->b[1]);
					if($c === 10) {
						if(ord($s->b[0]) === 13) {
							throw new _hx_break_exception();
							;
						}
						$k = 4;
						;
					}
					else {
						if($c === 13) {
							$k = 3;
							;
						}
						else {
							$k = 4;
							;
						}
						;
					}
					unset($c);
				}break;
				case 3:{
					$c = ord($s->b[2]);
					if($c === 10) {
						if(ord($s->b[1]) !== 13) {
							$k = 4;
							;
						}
						else {
							if(ord($s->b[0]) !== 10) {
								$k = 2;
								;
							}
							else {
								throw new _hx_break_exception();
								;
							}
							;
						}
						;
					}
					else {
						if($c === 13) {
							if(ord($s->b[1]) !== 10 || ord($s->b[0]) !== 13) {
								$k = 1;
								;
							}
							else {
								$k = 3;
								;
							}
							;
						}
						else {
							$k = 4;
							;
						}
						;
					}
					unset($c);
				}break;
				case 4:{
					$c = ord($s->b[3]);
					if($c === 10) {
						if(ord($s->b[2]) !== 13) {
							continue;
							;
						}
						else {
							if(ord($s->b[1]) !== 10 || ord($s->b[0]) !== 13) {
								$k = 2;
								;
							}
							else {
								throw new _hx_break_exception();
								;
							}
							;
						}
						;
					}
					else {
						if($c === 13) {
							if(ord($s->b[2]) !== 10 || ord($s->b[1]) !== 13) {
								$k = 3;
								;
							}
							else {
								$k = 1;
								;
							}
							;
						}
						;
					}
					unset($c);
				}break;
				}
				unset($p);
			}
		} catch(_hx_break_exception $»e){}
		$headers = _hx_explode("\x0D\x0A", $b->getBytes()->toString());
		$response = $headers->shift();
		$rp = _hx_explode(" ", $response);
		$status = Std::parseInt($rp[1]);
		if($status === 0 || $status === null) {
			throw new HException("Response status error");
			;
		}
		$headers->pop();
		$headers->pop();
		$this->responseHeaders = new Hash();
		$size = null;
		{
			$_g = 0;
			while($_g < $headers->length) {
				$hline = $headers[$_g];
				++$_g;
				$a = _hx_explode(": ", $hline);
				$hname = $a->shift();
				$hval = haxe_Http_7($this, $_g, $a, $api, $b, $headers, $hline, $hname, $k, $response, $rp, $s, $size, $sock, $status);
				$this->responseHeaders->set($hname, $hval);
				if(strtolower($hname) === "content-length") {
					$size = Std::parseInt($hval);
					;
				}
				unset($hval,$hname,$hline,$a);
			}
			unset($_g);
		}
		$this->onStatus($status);
		$chunked = $this->responseHeaders->get("Transfer-Encoding") === "chunked";
		$chunk_re = new EReg("^([0-9A-Fa-f]+)[ ]*\x0D\x0A", "m");
		$this->chunk_size = null;
		$this->chunk_buf = null;
		$bufsize = 1024;
		$buf = haxe_io_Bytes::alloc($bufsize);
		if($size === null) {
			if(!$this->noShutdown) {
				$sock->shutdown(false, true);
				;
			}
			try {
				while(true) {
					$len = $sock->input->readBytes($buf, 0, $bufsize);
					if($chunked) {
						if(!$this->readChunk($chunk_re, $api, $buf, $len)) {
							break;
							;
						}
						;
					}
					else {
						$api->writeBytes($buf, 0, $len);
						;
					}
					unset($len);
				}
				;
			}catch(Exception $»e) {
			$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
			;
			if(($e = $_ex_) instanceof haxe_io_Eof){
				$GLOBALS['%e'] = new _hx_array(array());
				while($GLOBALS['%s']->length >= $»spos) $GLOBALS['%e']->unshift($GLOBALS['%s']->pop());
				$GLOBALS['%s']->push($GLOBALS['%e'][0]);
				;
				;
			} else throw $»e; }
			unset($e);
		}
		else {
			$api->prepare($size);
			try {
				while($size > 0) {
					$len = $sock->input->readBytes($buf, 0, haxe_Http_8($this, $api, $b, $buf, $bufsize, $chunk_re, $chunked, $headers, $k, $response, $rp, $s, $size, $sock, $status));
					if($chunked) {
						if(!$this->readChunk($chunk_re, $api, $buf, $len)) {
							break;
							;
						}
						;
					}
					else {
						$api->writeBytes($buf, 0, $len);
						;
					}
					$size -= $len;
					unset($len);
				}
				;
			}catch(Exception $»e) {
			$_ex_ = ($»e instanceof HException) ? $»e->e : $»e;
			;
			if(($e = $_ex_) instanceof haxe_io_Eof){
				$GLOBALS['%e'] = new _hx_array(array());
				while($GLOBALS['%s']->length >= $»spos) $GLOBALS['%e']->unshift($GLOBALS['%s']->pop());
				$GLOBALS['%s']->push($GLOBALS['%e'][0]);
				throw new HException("Transfert aborted");
				;
			} else throw $»e; }
			unset($e);
		}
		if($chunked && ($this->chunk_size !== null || $this->chunk_buf !== null)) {
			throw new HException("Invalid chunk");
			;
		}
		if($status < 200 || $status >= 400) {
			throw new HException("Http Error #" . $status);
			;
		}
		$api->close();
		$GLOBALS['%s']->pop();
		unset($»spos,$status,$size,$s,$rp,$response,$k,$headers,$chunked,$chunk_re,$bufsize,$buf,$b);
	}
	public function readChunk($chunk_re, $api, $buf, $len) {
		$GLOBALS['%s']->push("haxe.Http::readChunk");
		$»spos = $GLOBALS['%s']->length;
		if($this->chunk_size === null) {
			if($this->chunk_buf !== null) {
				$b = new haxe_io_BytesBuffer();
				$b->b .= $this->chunk_buf->b;
				{
					if($len < 0 || $len > $buf->length) {
						throw new HException(haxe_io_Error::$OutsideBounds);
						;
					}
					$b->b .= substr($buf->b, 0, $len);
					;
				}
				$buf = $b->getBytes();
				$len += $this->chunk_buf->length;
				$this->chunk_buf = null;
				unset($b);
			}
			if($chunk_re->match($buf->toString())) {
				$p = $chunk_re->matchedPos();
				if($p->len <= $len) {
					$cstr = $chunk_re->matched(1);
					$this->chunk_size = Std::parseInt("0x" . $cstr);
					if($cstr === "0") {
						$this->chunk_size = null;
						$this->chunk_buf = null;
						{
							$GLOBALS['%s']->pop();
							return false;
							;
						}
						;
					}
					$len -= $p->len;
					{
						$»tmp = $this->readChunk($chunk_re, $api, $buf->sub($p->len, $len), $len);
						$GLOBALS['%s']->pop();
						return $»tmp;
						unset($»tmp);
					}
					unset($cstr);
				}
				unset($p);
			}
			if($len > 10) {
				$this->onError("Invalid chunk");
				{
					$GLOBALS['%s']->pop();
					return false;
					;
				}
				;
			}
			$this->chunk_buf = $buf->sub(0, $len);
			{
				$GLOBALS['%s']->pop();
				return true;
				;
			}
			;
		}
		if($this->chunk_size > $len) {
			$this->chunk_size -= $len;
			$api->writeBytes($buf, 0, $len);
			{
				$GLOBALS['%s']->pop();
				return true;
				;
			}
			;
		}
		$end = $this->chunk_size + 2;
		if($len >= $end) {
			if($this->chunk_size > 0) {
				$api->writeBytes($buf, 0, $this->chunk_size);
				;
			}
			$len -= $end;
			$this->chunk_size = null;
			if($len === 0) {
				$GLOBALS['%s']->pop();
				return true;
				;
			}
			{
				$»tmp = $this->readChunk($chunk_re, $api, $buf->sub($end, $len), $len);
				$GLOBALS['%s']->pop();
				return $»tmp;
				unset($»tmp);
			}
			;
		}
		if($this->chunk_size > 0) {
			$api->writeBytes($buf, 0, $this->chunk_size);
			;
		}
		$this->chunk_size -= $len;
		{
			$GLOBALS['%s']->pop();
			return true;
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos,$end);
	}
	public function onData($data) { return call_user_func_array($this->onData, array($data)); }
	public $onData = null;
	public function onError($msg) { return call_user_func_array($this->onError, array($msg)); }
	public $onError = null;
	public function onStatus($status) { return call_user_func_array($this->onStatus, array($status)); }
	public $onStatus = null;
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
	static $PROXY = null;
	static function requestUrl($url) {
		$GLOBALS['%s']->push("haxe.Http::requestUrl");
		$»spos = $GLOBALS['%s']->length;
		$h = new haxe_Http($url);
		$r = null;
		$h->onData = array(new _hx_lambda(array(&$h, &$r, &$url), "haxe_Http_9"), 'execute');
		$h->onError = array(new _hx_lambda(array(&$h, &$r, &$url), "haxe_Http_10"), 'execute');
		$h->request(false);
		{
			$GLOBALS['%s']->pop();
			return $r;
			;
		}
		$GLOBALS['%s']->pop();
		unset($»spos,$r,$h);
	}
	function __toString() { return 'haxe.Http'; }
}
;
function haxe_Http_0(&$»this, &$url, $data) {
	$GLOBALS['%s']->push('haxe.Http:lambda_0');
	$»spos = $GLOBALS['%s']->length;
{
	$GLOBALS['%s']->push("haxe.Http::new");
	$»spos = $GLOBALS['%s']->length;
	;
	$GLOBALS['%s']->pop();
	unset($»spos);
}
}
function haxe_Http_1(&$»this, &$url, $msg) {
	$GLOBALS['%s']->push('haxe.Http:lambda_1');
	$»spos = $GLOBALS['%s']->length;
{
	$GLOBALS['%s']->push("haxe.Http::new");
	$»spos = $GLOBALS['%s']->length;
	;
	$GLOBALS['%s']->pop();
	unset($»spos);
}
}
function haxe_Http_2(&$»this, &$url, $status) {
	$GLOBALS['%s']->push('haxe.Http:lambda_2');
	$»spos = $GLOBALS['%s']->length;
{
	$GLOBALS['%s']->push("haxe.Http::new");
	$»spos = $GLOBALS['%s']->length;
	;
	$GLOBALS['%s']->pop();
	unset($»spos);
}
}
function haxe_Http_3(&$err, &$me, &$me1, &$old, &$output, &$post, $e) {
	$GLOBALS['%s']->push('haxe.Http:lambda_3');
	$»spos = $GLOBALS['%s']->length;
{
	$GLOBALS['%s']->push("haxe.Http::request@251");
	$»spos2 = $GLOBALS['%s']->length;
	$err = true;
	call_user_func_array($old, array($e));
	$GLOBALS['%s']->pop();
	unset($»spos2);
}
}
function haxe_Http_4(&$»this, &$api, &$method, &$post, &$secure, &$sock, &$url_regexp) {
	$GLOBALS['%s']->push('haxe.Http:lambda_4');
	$»spos = $GLOBALS['%s']->length;
if($secure) {
	return php_net_Socket::newSslSocket();
	;
}
else {
	return new php_net_Socket(null);
	;
}
}
function haxe_Http_5(&$»this, &$api, &$host, &$method, &$portString, &$post, &$request, &$secure, &$sock, &$url_regexp) {
	$GLOBALS['%s']->push('haxe.Http:lambda_5');
	$»spos = $GLOBALS['%s']->length;
if($portString === null || $portString === "") {
	return (haxe_Http_11($api, $host, $method, $portString, $post, $request, $secure, $sock, $url_regexp));
	;
}
else {
	return Std::parseInt(_hx_substr($portString, 1, strlen($portString) - 1));
	;
}
}
function haxe_Http_6(&$»this, &$api, &$b, &$boundary, &$buf, &$bufsize, &$data, &$host, &$method, &$multipart, &$port, &$portString, &$post, &$request, &$secure, &$sock, &$uri, &$url_regexp) {
	$GLOBALS['%s']->push('haxe.Http:lambda_6');
	$»spos = $GLOBALS['%s']->length;
if($»this->file->size > $bufsize) {
	return $bufsize;
	;
}
else {
	return $»this->file->size;
	;
}
}
function haxe_Http_7(&$»this, &$_g, &$a, &$api, &$b, &$headers, &$hline, &$hname, &$k, &$response, &$rp, &$s, &$size, &$sock, &$status) {
	$GLOBALS['%s']->push('haxe.Http:lambda_7');
	$»spos = $GLOBALS['%s']->length;
if($a->length === 1) {
	return $a[0];
	;
}
else {
	return $a->join(": ");
	;
}
}
function haxe_Http_8(&$»this, &$api, &$b, &$buf, &$bufsize, &$chunk_re, &$chunked, &$headers, &$k, &$response, &$rp, &$s, &$size, &$sock, &$status) {
	$GLOBALS['%s']->push('haxe.Http:lambda_8');
	$»spos = $GLOBALS['%s']->length;
if($size > $bufsize) {
	return $bufsize;
	;
}
else {
	return $size;
	;
}
}
function haxe_Http_9(&$h, &$r, &$url, $d) {
	$GLOBALS['%s']->push('haxe.Http:lambda_9');
	$»spos = $GLOBALS['%s']->length;
{
	$GLOBALS['%s']->push("haxe.Http::requestUrl@640");
	$»spos2 = $GLOBALS['%s']->length;
	$r = $d;
	$GLOBALS['%s']->pop();
	unset($»spos2);
}
}
function haxe_Http_10(&$h, &$r, &$url, $e) {
	$GLOBALS['%s']->push('haxe.Http:lambda_10');
	$»spos = $GLOBALS['%s']->length;
{
	$GLOBALS['%s']->push("haxe.Http::requestUrl@643");
	$»spos2 = $GLOBALS['%s']->length;
	throw new HException($e);
	$GLOBALS['%s']->pop();
	unset($»spos2);
}
}
function haxe_Http_11(&$api, &$host, &$method, &$portString, &$post, &$request, &$secure, &$sock, &$url_regexp) {
	$GLOBALS['%s']->push('haxe.Http:lambda_11');
	$»spos = $GLOBALS['%s']->length;
if(!$secure) {
	return 80;
	;
}
else {
	return 443;
	;
}
}