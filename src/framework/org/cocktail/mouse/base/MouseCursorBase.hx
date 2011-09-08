/*This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.cocktail.mouse.base;

import org.cocktail.domObject.ImageDOMObject;
import org.cocktail.geom.GeomData;
import org.cocktail.mouse.MouseData;

/**
 * This is the base class for mouse cursor abstration.
 * 
 * It exposes method to set and get the mouse cursor
 * 
 * @author Yannick DOMINGUEZ
 */
class MouseCursorBase 
{
	/**
	 * Stores the current state of the mouse cursor
	 */
	private var _nativeMouseCursor:MouseCursorValue;
	public var nativeMouseCursor(getNativeMouseCursor, setNativeMouseCursor):MouseCursorValue;
	
	/**
	 * class constructor. Set the default
	 * mouse cursor value
	 */
	public function new() 
	{
		_nativeMouseCursor = auto;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Mouse cursor SETTER/GETTER
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Set the mouse cursor display. Actual implementation is in the subclasses
	 */
	public function setNativeMouseCursor(value:MouseCursorValue):MouseCursorValue
	{
		_nativeMouseCursor = value;
		
		switch (value)
		{
			//if the cursor is a bitmap, calls
			//a dedicated method with the imageDOMObject
			//to be used as cursor
			case custom(imageDOMObject, hotSpot):
				var typedImageDOMObject:ImageDOMObject = cast(imageDOMObject);
				setBitmapCursor(typedImageDOMObject, hotSpot);
			
			//let the browser manage the cursor	
			case auto:
				setDefaultCursor();
			
			//hide the cursor
			case none:
				hideCursor();
				
			//set a native OS mouse cursor	
			case native(nativeOSMouseCursor):
				setNativeOSCursor(nativeOSMouseCursor);
		}
		
		return _nativeMouseCursor;
	}
	
	/**
	 * get the current mouse display
	 */
	public function getNativeMouseCursor():MouseCursorValue
	{
		return _nativeMouseCursor;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Private mouse cursor methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Set a bitmap as mouse cursor using native API. The hotSpot is the registration
	 * point of the mouse cursor
	 */
	private function setBitmapCursor(imageDOMObject:ImageDOMObject, hotSpot:Point):Void
	{
		//abstract
	}
	
	/**
	 * Hides the mouse cursor using native API
	 */
	private function hideCursor():Void
	{
		//abstract
	}
	
	/**
	 * Set the default cursor using native API
	 */
	private function setDefaultCursor():Void
	{
		//abstract
	}
	
	/**
	 * Set an OS native cursor
	 */ 
	private function setNativeOSCursor(value:NativeOSMouseCursorValue):Void 
	{
		//abstract
	}
	
}