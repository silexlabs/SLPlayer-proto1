/*This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.keyboard.js;

import org.silex.runtime.domObject.NativeDOMObject;
import org.silex.runtime.keyboard.KeyboardBase;
import org.silex.runtime.keyboard.KeyboardData;

/**
 * This is the JavaScript implementation of the keyboard abstraction.
 * Set listeners on native javascript keyboard event on the provided native
 * element and call their stored callbacks.
 * 
 * @author Yannick DOMINGUEZ
 */
class Keyboard extends KeyboardBase
{
	/**
	 * class constructor. Set keyboard listener on the native
	 * element
	 */
	public function new(nativeElement:NativeDOMObject) 
	{
		super(nativeElement);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// EVENTS
	// overriden private native keyboard event handler method
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Set the listeners for JavaScript keyboard event
	 */
	override private function setNativeKeyboardListeners(nativeElement:NativeDOMObject):Void
	{
		nativeElement.onkeydown = onNativeKeyDown;
		nativeElement.onkeyup = onNativeKeyUp;
	}
	
	/**
	 * removes the listeners for JavaScript keyboard event
	 */
	override private function unsetNativeKeyboardListeners(nativeElement:NativeDOMObject):Void
	{
		nativeElement.onkeydown = null;
		nativeElement.onkeyup = null;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden private key utils methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Returns the key that triggered the keyboard event
	 * @param	event the native key up or down event
	 * @return a sruct containing the key code and ascii value
	 */
	override private function getKeyData(event:Dynamic):Key
	{
		var key:Key = {
			value : getKeyValue(event.keycode),
			code : event.keycode,
			ascii : event.charCode,
			altKey : event.altKey ,
			controlKey : event.ctrlKey,
			shiftKey : event.shiftKey
		}
		
		return key;
	}
	
}