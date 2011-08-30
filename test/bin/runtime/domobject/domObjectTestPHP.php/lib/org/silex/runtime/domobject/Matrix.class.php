<?php

class org_silex_runtime_domobject_Matrix {
	public function __construct($matrixData) {
		if(!php_Boot::$skip_constructor) {
		$this->setMatrixData($matrixData);
	}}
	public $_matrixData;
	public function identity() {
		$this->_matrixData = _hx_anonymous(array("a" => 1.0, "b" => 0.0, "c" => 0.0, "d" => 1.0, "e" => 0.0, "f" => 0.0));
	}
	public function setMatrixData($matrixData) {
		$this->_matrixData = $matrixData;
		if(_hx_field($this, "_matrixData") === null) {
			$this->identity();
		}
	}
	public function getMatrixData() {
		return $this->_matrixData;
	}
	public function concatenate($matrix) {
		$currentMatrixData = $this->_matrixData;
		$targetMatrixData = $matrix->getMatrixData();
		$a = $currentMatrixData->a * $targetMatrixData->a + $currentMatrixData->c * $targetMatrixData->b;
		$b = $currentMatrixData->b * $targetMatrixData->a + $currentMatrixData->d * $targetMatrixData->b;
		$c = $currentMatrixData->a * $targetMatrixData->c + $currentMatrixData->c * $targetMatrixData->d;
		$d = $currentMatrixData->b * $targetMatrixData->c + $currentMatrixData->d * $targetMatrixData->d;
		$e = $currentMatrixData->a * $targetMatrixData->e + $currentMatrixData->c * $targetMatrixData->f + $currentMatrixData->e;
		$f = $currentMatrixData->b * $targetMatrixData->e + $currentMatrixData->d * $targetMatrixData->f + $currentMatrixData->f;
		$concatenatedMatrixData = _hx_anonymous(array("a" => $a, "b" => $b, "c" => $c, "d" => $d, "e" => $e, "f" => $f));
		$this->setMatrixData($concatenatedMatrixData);
	}
	public function translate($x, $y) {
		$translationMatrixData = _hx_anonymous(array("a" => 1.0, "b" => 0.0, "c" => 0.0, "d" => 1.0, "e" => $x, "f" => $y));
		$translationMatrix = new org_silex_runtime_domobject_Matrix($translationMatrixData);
		$this->concatenate($translationMatrix);
	}
	public function rotate($angle, $transformationOrigin) {
		$angleInRad = $angle / 180 * Math::$PI;
		haxe_Log::trace($angleInRad, _hx_anonymous(array("fileName" => "Matrix.hx", "lineNumber" => 169, "className" => "org.silex.runtime.domobject.Matrix", "methodName" => "rotate")));
		$rotatedMatrix = new org_silex_runtime_domobject_Matrix(null);
		$rotatedMatrix->translate($transformationOrigin->x, $transformationOrigin->y);
		$rotationMatrixData = _hx_anonymous(array("a" => Math::cos($angleInRad), "b" => Math::sin($angleInRad), "c" => Math::sin($angleInRad) * -1, "d" => Math::cos($angleInRad), "e" => 0.0, "f" => 0.0));
		$rotationMatrix = new org_silex_runtime_domobject_Matrix($rotationMatrixData);
		$rotatedMatrix->concatenate($rotationMatrix);
		$rotatedMatrix->translate($transformationOrigin->x * -1, $transformationOrigin->y * -1);
		$this->concatenate($rotatedMatrix);
	}
	public function scale($scaleX, $scaleY, $transformationOrigin) {
		$scaledMatrix = new org_silex_runtime_domobject_Matrix(null);
		$scaledMatrix->translate($transformationOrigin->x, $transformationOrigin->y);
		$scalingMatrixData = _hx_anonymous(array("a" => $scaleX, "b" => 0.0, "c" => 0.0, "d" => $scaleY, "e" => 0.0, "f" => 0.0));
		$scalingMatrix = new org_silex_runtime_domobject_Matrix($scalingMatrixData);
		$scaledMatrix->concatenate($scalingMatrix);
		$scaledMatrix->translate($transformationOrigin->x * -1, $transformationOrigin->y * -1);
		$this->concatenate($scaledMatrix);
	}
	public function skew($skewX, $skewY, $transformationOrigin) {
		$skewedMatrix = new org_silex_runtime_domobject_Matrix(null);
		$skewedMatrix->translate($transformationOrigin->x, $transformationOrigin->y);
		$skewingMatrixData = _hx_anonymous(array("a" => 1.0, "b" => Math::tan($skewY), "c" => Math::tan($skewX), "d" => 1.0, "e" => 0.0, "f" => 0.0));
		$skewingMatrix = new org_silex_runtime_domobject_Matrix($skewingMatrixData);
		$skewedMatrix->concatenate($skewingMatrix);
		$skewedMatrix->translate($transformationOrigin->x * -1, $transformationOrigin->y * -1);
		$this->concatenate($skewedMatrix);
	}
	public function getRotation() {
		$rotation = Math::atan($this->_matrixData->c * -1 / $this->_matrixData->a);
		$scaleX = Math::sqrt($this->_matrixData->a * $this->_matrixData->a + $this->_matrixData->c * $this->_matrixData->c);
		$sign = Math::atan($this->_matrixData->c * -1 / $this->_matrixData->a);
		$radian = Math::acos($this->_matrixData->a / $scaleX);
		$rotationInDegree = Math::round($radian * 180 / Math::$PI);
		if($rotationInDegree > 90 && $sign > 0) {
			$rotation = (360 - $rotationInDegree) / 180 * Math::$PI;
		} else {
			if($rotationInDegree < 90 && $sign < 0) {
				$rotation = (360 - $rotationInDegree) / 180 * Math::$PI;
			} else {
				$rotation = $radian;
			}
		}
		return Math::round($rotation / Math::$PI * 180);
	}
	public function getScaleX() {
		$scaleSign = 0;
		if($this->_matrixData->a > 0) {
			$scaleSign = 1;
		} else {
			$scaleSign = -1;
		}
		return $scaleSign * Math::sqrt($this->_matrixData->a * $this->_matrixData->a + $this->_matrixData->c * $this->_matrixData->c);
	}
	public function getScaleY() {
		$scaleSign = 0;
		if($this->_matrixData->d > 0) {
			$scaleSign = 1;
		} else {
			$scaleSign = -1;
		}
		return $scaleSign * Math::sqrt($this->_matrixData->b * $this->_matrixData->b + $this->_matrixData->d * $this->_matrixData->d);
	}
	public function getTranslationX() {
		return $this->_matrixData->e;
	}
	public function getTranslationY() {
		return $this->_matrixData->f;
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
	function __toString() { return 'org.silex.runtime.domobject.Matrix'; }
}
