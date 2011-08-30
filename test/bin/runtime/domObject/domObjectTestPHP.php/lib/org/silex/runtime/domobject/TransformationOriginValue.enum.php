<?php

class org_silex_runtime_domobject_TransformationOriginValue extends Enum {
	public static function constant($transformationOriginX, $transformationOriginY) { return new org_silex_runtime_domobject_TransformationOriginValue("constant", 0, array($transformationOriginX, $transformationOriginY)); }
	public static function point($point) { return new org_silex_runtime_domobject_TransformationOriginValue("point", 1, array($point)); }
	public static $__constructors = array(0 => 'constant', 1 => 'point');
	}
