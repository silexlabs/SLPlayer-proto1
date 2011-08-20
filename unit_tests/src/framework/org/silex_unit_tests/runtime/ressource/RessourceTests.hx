/*This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex_unit_tests.runtime.ressource;


 #if flash9
import flash.display.Loader;
import flash.Lib;
import flash.system.ApplicationDomain;

#end
import org.silex.runtime.domobject.TextDOMObject;
import org.silex.runtime.nativeClass.NativeClass;
import haxe.Log;
import org.silex.runtime.domobject.DOMObject;
import org.silex.runtime.domobject.base.DOMObjectBase;
import utest.Assert;
import utest.Runner;
import utest.ui.Report;


import org.silex.runtime.ressource.RessourceLoaderManager;

/**
 * Test the cross-platform ressource loading
 *@author Yannick DOMINGUEZ & Raphael HARMEL
 */
class RessourceTests 
{
	public static function main()
	{
		
		
		#if flash9
		DOMObjectBase.rootDOMObject = new DOMObject(flash.Lib.current);
		#elseif js
		DOMObjectBase.rootDOMObject = new DOMObject(js.Lib.document.body);
		#elseif php
		DOMObjectBase.rootDOMObject = new DOMObject(Xml.createElement('body'));
		#end
		
		var runner = new Runner();
		runner.addCase(new RessourceTests());
		Report.create(runner);
		runner.run();
		
		#if php
		// display rootDOMObject filled with all tested elements
		untyped __call__('print_r', '<html>' + DOMObjectBase.rootDOMObject.getReferenceToNativeDOM() + '</html>');
		#end
	}
	
	public function new() 
	{
		
	}
	
	/**
	 * Test loading a string (might be plain text, XML JSON...)
	 */
	public function testStringLoad()
	{
		var successCallback:String->Void = Assert.createEvent(onStringLoaded);
		RessourceLoaderManager.loadString("testString.txt", successCallback, onStringLoadError);
	}
	
	/**
	 * Called when the string has been loaded
	 * @param	data the loaded string
	 */
	private function onStringLoaded(data:String):Void
	{
		Assert.same("Hello loaded String !",data);
	}
	
	/**
	 * Called when there is an error while loading string
	 * @param	msg
	 */
	private function onStringLoadError(msg:String):Void
	{
		
	}
	
	/**
	 * Test the loading of a container DOMObject
	 */
	public function testContainerLoad()
	{
		var successCallback:Dynamic->Void = Assert.createEvent(onContainerLoaded);
		
		#if flash9
		var containerUrl:String = "domObjectAs3.swf";
		#elseif js
		var containerUrl:String = "domObject.html";
		#elseif php
		var containerUrl:String = "domObject.html";
		#end
		
		RessourceLoaderManager.loadContainer(containerUrl, successCallback, onContainerLoadError);
	}
	
	/**
	 * When the DOMObject has been loaded, attach it to the root DOMObject
	 * @param	domObject the loaded DOMObject
	 */
	private function onContainerLoaded(domObject:Dynamic):Void
	{
		DOMObjectBase.rootDOMObject.addChild(domObject);
		#if flash9
		Assert.is(domObject.getReferenceToNativeDOM(), Loader);
		#elseif js
		Assert.same(domObject.getReferenceToNativeDOM().firstChild.getAttribute("id"), "loadedDOMObject");
		#elseif php
		Assert.equals(domObject.getReferenceToNativeDOM().firstChild().get("id"), "loadedDOMObject");
		Assert.equals(domObject.getReferenceToNativeDOM().firstChild().firstChild().toString(), "container loaded");
		#end
	}
	
	/**
	 * Called when there is an error while loading the container DOMObject
	 * @param	msg
	 */
	private function onContainerLoadError(msg:String):Void
	{
		Log.trace(msg);
	}
	
	/**
	 * load a class library (.swf in flash, .js in JavaScript, .php in php)
	 */
	public function testLibraryLoad()
	{
		var successCallback:Dynamic->Void = Assert.createEvent(onLibraryLoaded);
		#if flash9
		RessourceLoaderManager.loadLibrary("testLibrary.swf", successCallback, onLibraryError);
		#elseif js
		RessourceLoaderManager.loadLibrary("testLibrary.js", successCallback, onLibraryError);
		#elseif php
		RessourceLoaderManager.loadLibrary("testLibrary.php", successCallback, onLibraryError);
		#end
	}
	
	/**
	 * when the library has been loaded, instantiate one of the loaded classes
	 * @param	data null for a library
	 */
	private function onLibraryLoaded(data:Dynamic):Void
	{
		var nativeInstance:NativeInstance = NativeClass.getNativeInstanceByClassName("LibrarySymbol");
		
		#if flash9
		flash.Lib.current.addChild(nativeInstance.getReferenceToNativeClassInstance());
		Assert.same(nativeInstance.getField("x"), 0);
		#elseif js
		Assert.same(nativeInstance.callMethod("testMethod", []), "library loaded ok !");
		#elseif php
		Assert.same(nativeInstance.callMethod("testMethod", []), "library loaded ok !");
		#end
	}

	/**
	 * Called when there is an error while loading the library
	 * @param	msg
	 */
	private function onLibraryError(msg:String):Void
	{
		
	}
	
	/**
	 * Test loading a picture for both flash and JS
	 */
	public function testLoadPicture()
	{
		var successCallback:Dynamic->Void = Assert.createEvent(onPictureLoaded);
		RessourceLoaderManager.loadImage("testPicture.jpg", successCallback, onPictureLoadError);
	}
	
	public function onPictureLoaded(domObject:Dynamic):Void
	{
		DOMObjectBase.rootDOMObject.addChild(domObject);
		#if flash9
		domObject.setX(200);
		Assert.is(domObject.getReferenceToNativeDOM(), Loader);
		#elseif js
		Assert.same(domObject.getReferenceToNativeDOM().getAttribute("src"), "testPicture.jpg");
		#elseif php
		Assert.same(domObject.getReferenceToNativeDOM()._nodeName, "img");
		Assert.same(domObject.getReferenceToNativeDOM().get("src"), "testPicture.jpg");
		#end
	}
	
	/**
	 * Called when there is an error while loading picture
	 * @param	error
	 */
	public function onPictureLoadError(error:String)
	{
		
	}
	
	/**
	 * Test loading a picture without caching it
	 */
	public function testLoadNoCache()
	{
		var successCallback:Dynamic->Void = Assert.createEvent(onPictureNoCacheLoaded);
		RessourceLoaderManager.loadImage("testPicture.jpg", successCallback, onPictureLoadError, false);
	}
	
	private function onPictureNoCacheLoaded(domObject:Dynamic):Void
	{
		DOMObjectBase.rootDOMObject.addChild(domObject);
		#if flash9
		Assert.is(domObject.getReferenceToNativeDOM(), Loader);
		#elseif js
		var croppedSrc:String = domObject.getReferenceToNativeDOM().getAttribute("src");
		croppedSrc = croppedSrc.substr(0, croppedSrc.indexOf("?"));
		Assert.same(croppedSrc, "testPicture.jpg");
		#elseif php
		Assert.same(domObject.getReferenceToNativeDOM()._nodeName, "img");
		var croppedSrc:String = domObject.getReferenceToNativeDOM().get("src");
		croppedSrc = croppedSrc.substr(0, croppedSrc.indexOf("?"));
		Assert.same(croppedSrc, "testPicture.jpg");
		#end
	}
	
	/**
	 * tests the loading of an HTML text
	 */ 
	public function testLoadText()
	{
		var successCallback:Dynamic->Void = Assert.createEvent(onTextLoaded);
		RessourceLoaderManager.loadText("htmlText.html", successCallback, onTextLoadError);
	}
	
	/**
	 * Called when the text domObject is created, tests if the loaded
	 * data matches the html text that loaded
	 */
	private function onTextLoaded(domObject:TextDOMObject)
	{
		DOMObjectBase.rootDOMObject.addChild(domObject);
		Assert.equals(domObject.getText(), "<h1>This is an HTML text test</h1><p>paragraph</p><h2><b>second header</b></h2>");
		#if flash9
		domObject.setY(200);
		#end
	}
	
	/**
	 * Called when there is an error while loading text
	 * @param	error the error message
	 */
	private function onTextLoadError(error:String)
	{
		trace('Error while loading htmlText.html');
	}
}