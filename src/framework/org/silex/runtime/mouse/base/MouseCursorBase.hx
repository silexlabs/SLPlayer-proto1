package org.silex.runtime.mouse.base;

import org.silex.runtime.mouse.MouseData;

/**
 * ...
 * @author Yannick DOMINGUEZ
 */

class MouseCursorBase 
{
	public var nativeMouseCursor(getNativeMouseCursor, setNativeMouseCursor):MouseCursorValue;
	
	private var _nativeMouseCursor:MouseCursorValue;
	
	public function new() 
	{
		_nativeMouseCursor = auto;
	}
	
	public function setNativeMouseCursor(value:MouseCursorValue):MouseCursorValue
	{
		_nativeMouseCursor = value;
		return _nativeMouseCursor;
	}
	
	public function getNativeMouseCursor():MouseCursorValue
	{
		return _nativeMouseCursor;
	}
	
}