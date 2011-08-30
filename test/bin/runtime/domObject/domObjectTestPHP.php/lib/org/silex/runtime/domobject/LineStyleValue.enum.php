<?php

class org_silex_runtime_domobject_LineStyleValue extends Enum {
	public static function bitmap($imageDOMObject, $lineStyle, $repeat) { return new org_silex_runtime_domobject_LineStyleValue("bitmap", 3, array($imageDOMObject, $lineStyle, $repeat)); }
	public static function gradient($gradientStyle, $lineStyle) { return new org_silex_runtime_domobject_LineStyleValue("gradient", 2, array($gradientStyle, $lineStyle)); }
	public static function monochrome($colorStop, $lineStyle) { return new org_silex_runtime_domobject_LineStyleValue("monochrome", 1, array($colorStop, $lineStyle)); }
	public static $none;
	public static $__constructors = array(3 => 'bitmap', 2 => 'gradient', 1 => 'monochrome', 0 => 'none');
	}
org_silex_runtime_domobject_LineStyleValue::$none = new org_silex_runtime_domobject_LineStyleValue("none", 0);
