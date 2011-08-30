<?php

class org_silex_runtime_domobject_FillStyleValue extends Enum {
	public static function bitmap($imageDOMObject, $repeat) { return new org_silex_runtime_domobject_FillStyleValue("bitmap", 3, array($imageDOMObject, $repeat)); }
	public static function gradient($gradientStyle) { return new org_silex_runtime_domobject_FillStyleValue("gradient", 2, array($gradientStyle)); }
	public static function monochrome($colorStop) { return new org_silex_runtime_domobject_FillStyleValue("monochrome", 1, array($colorStop)); }
	public static $none;
	public static $__constructors = array(3 => 'bitmap', 2 => 'gradient', 1 => 'monochrome', 0 => 'none');
	}
org_silex_runtime_domobject_FillStyleValue::$none = new org_silex_runtime_domobject_FillStyleValue("none", 0);
