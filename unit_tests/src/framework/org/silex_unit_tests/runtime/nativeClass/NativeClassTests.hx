/*This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex_unit_tests.runtime.nativeClass;


import haxe.Log;
import org.silex.runtime.nativeClass.NativeClass;
import utest.Assert;
import utest.Runner;
import utest.ui.Report;


/**
 * Test the cross-platform native class instance proxy 
 *@author Yannick DOMINGUEZ
 */
class NativeClassTests 
{
	public static function main()
	{
		var runner = new Runner();
		runner.addCase(new NativeClassTests());
		Report.create(runner);
		runner.run();
	}
	
	public function new() 
	{
		
	}
	
	public function testNativeClassInstance()
	{
		var nativeClass:NativeInstance = NativeClass.getNativeInstanceByClassName("org.silex_unit_tests.runtime.nativeClass.TestClass");
		
		//test native instance methods
		Assert.equals(nativeClass.getField("_testAttribute"), "bim");
		
		Assert.equals(nativeClass.callMethod("testMethod", []), "test OK");
		
		nativeClass.setField("_testAttribute", "new value");
		Assert.equals(nativeClass.getField("_testAttribute"), "new value");
		
		//test native instance method with wrong values
		Assert.isNull(nativeClass.getField("fakeField"));
		
		nativeClass.setField("fakeField", "fakeValue");
		
		Assert.isNull(nativeClass.callMethod("fakeMethod", []));
		
	}
	
}

/**
 * This is a test class, used as a native class
 * wrapped in a NativeInstance
 */
class TestClass
{
	private var _testAttribute:String;
	
	public function new()
	{
		_testAttribute = "bim";
	}
	
	public function testMethod():String
	{
		return "test OK";
	}
}