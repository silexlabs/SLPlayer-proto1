/*This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.nativeClass;

/**
 * This class is used to manipulate a native class instance, 
 * call its methods, retrieve attributes values etc. 
 * It is necessary to use this "proxy" since the native methods 
 * and attributes may need processing before being used in haXe. 
 * And also haXe values may need processing before being passed to the native class.
 * 
 * For example, in php, when we have a reference to a class, 
 * we can call its methods directly, 
 * but the hashes and haxe array need to be converted into associative arrays and 
 * native arrays, see http://haxe.org/api/php/lib?lang=fr for details about this.
 * 
 * @author Yannick DOMINGUEZ
 */
class NativeInstanceBase 
{
	/**
	 * a reference to a native class instance, specific to a given runtime
	 */
	private var _refToNativeClassInstance:Dynamic;
	
	/**
	 * Instantiate the native class with the provided class name. Instantiation
	 * is specific to each runtime and so it is done in inheriting classes
	 * @param	nativeInstanceClassName the name of the native class
	 * to wrap in this NativeInstance
	 */
	public function new(nativeInstanceClassName:String) 
	{
		
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Public proxy method to access the native class instance. Mostly wraps
	// access to Haxe reflexion API
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Call a method on the native class and may return the method return value
	 * @param	methodName the name of the method to call
	 * @param	args the arguments of the called methods
	 * @return  null or the return value of the method call
	 */
	public function callMethod(methodName:String, args:Array<Dynamic>):Dynamic
	{
		//check if the method exists before calling it
		if (Reflect.isFunction(Reflect.field(_refToNativeClassInstance, methodName)))
		{
			var method:Dynamic = Reflect.field(_refToNativeClassInstance, methodName);
			return Reflect.callMethod(_refToNativeClassInstance, method, args);
		}

		return null;
	}
	
	/**
	 * Returns the value of a field of the object
	 * @param	fieldName the name of the field to return
	 * @return the field's value
	 */
	public function getField(fieldName:String):Dynamic
	{
		//check if the field exists before returning it, else return null
		if (Reflect.hasField(_refToNativeClassInstance, fieldName))
		{
			return Reflect.field(_refToNativeClassInstance, fieldName);
		}
		else
		{
			return null;
		}
	}
	
	/**
	 * Set the value of a field on the native class instance
	 * 
	 * warning : in as3, throws an error if the field doesn't exist,
	 * in js, create the field
	 * 
	 * @param	fieldName the name of the field to set
	 * @param	fieldValue the value to set on the field
	 */
	public function setField(fieldName:String, fieldValue:Dynamic):Void
	{
		Reflect.setField(_refToNativeClassInstance, fieldName, fieldValue);
	}
	
	/**
	 * Returns the reference to the native class instance
	 */
	public function getReferenceToNativeClassInstance():Dynamic
	{
		return _refToNativeClassInstance;
	}
	
}