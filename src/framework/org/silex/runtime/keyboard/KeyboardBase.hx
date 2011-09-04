/*This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.keyboard;

import org.silex.runtime.KeyboardData;

/**
 * This package is made to offer a simple API for keyboard interactions.
 *
 * We choose not to use a singleton pattern or static class and found
 * a simple way for exposing the keyboard state and for calling a custom callback function:
 * 
 * The class is to be instantiated, and then you can set the instance attributes 
 * onKeyDown and onKeyUp to your callbacks. These callbacks will receive a Key
 * object with the key code as a parameter, and it is supposed to use the instance
 * you have created in order to retrieve the keyboard state.
 * 
 * This is a base abstract class, implemented for each runtime
 * 
 * @author a.hoyau [at] silexlabs.org
 * @author Yannick DOMINGUEZ
 */
class KeyboardBase 
{
	/**
	 * The callback to call when
	 * a key is pressed
	 */
	public var onKeyDown:Key->Void;
	
	/**
	 * The callback to call when 
	 * a key is released
	 */
	public var onKeyUp:Key->Void;
	
	/**
	 * class constructor. Set the native
	 * keyboard listeners
	 */
	public function new() 
	{
		setNativeKeyboardListeners();
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// EVENTS
	// Private native keyboard event handler method
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Set the listener for native keyboard event
	 */
	private function setNativeKeyboardListeners():Void
	{
		//abstract
	}
	
	/**
	 * Set the listener for native keyboard event
	 */
	private function unsetNativeKeyboardListeners():Void
	{
		//abstract
	}
	
	/**
	 * Calls the onKeyDown callback with the pressed key data
	 * @param	event the native key down event
	 */
	private function onNativeKeyDown(event:Dynamic):Void
	{
		if (onKeyDown != null)
		{
			onKeyDown(getKeyData());
		}
	}
	
	/**
	 * Calls the onKeyUp callback with the released
	 * key data
	 * @param	event the native key up event
	 */
	private function onNativeKeyUp(event:Dynamic):Void
	{
		if (onKeyUp != null)
		{
			onKeyUp(getKeyData(event));
		}
	}
	
	/**
	 * Returns the key that triggered the keyboard event
	 * @param	event the native key up or down event
	 * @return a sruct containing the key code and ascii value
	 */
	private function getKeyData(event:Dynamic):Key
	{
		//abstract
	}
	
	/////////////////////////////////
	// KEYBOARD STATE METHOD
	// Retrieve the keyboard key states
	// implemented by ihheriting class
	/////////////////////////////////
	
	public function isMAJDown():Bool
	{
		//abstract
	}
	
	public function isCTRLDown():Bool
	{
		//abstract
	}
	
	public function isALTDown():Bool
	{
		//abstract
	}
	
	public function isCMDDown():Bool
	{
		//abstract
	}
	
	public function isCapsLockDown():Bool
	{
		//abstract
	}
	
	public function isNumLockDown():Bool
	{
		//abstract
	}
}