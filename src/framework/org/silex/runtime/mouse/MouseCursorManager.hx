package org.silex.runtime.mouse;


//import the right runtime implementations
#if flash9
import org.silex.runtime.mouse.as3.MouseCursor;

#elseif js
import org.silex.runtime.mouse.js.MouseCursor;
#end

import org.silex.runtime.mouse.MouseData;

/**
 * ...
 * @author Yannick DOMINGUEZ
 */

class MouseCursorManager 
{

	private static var _mouseCursor:MouseCursor;
	
	public function new() 
	{
		
	}
	
	public static function setMouseCursor(mouseCursorValue:MouseCursorValue):Void
	{
		if (_mouseCursor == null)
		{
			_mouseCursor = new MouseCursor();
		}
		_mouseCursor.nativeMouseCursor = mouseCursorValue;
	}
	
	public static function getMousecursor():MouseCursorValue
	{
		if (_mouseCursor == null)
		{
			_mouseCursor = new MouseCursor();
		}
		
		return _mouseCursor.nativeMouseCursor;
	}
	
}