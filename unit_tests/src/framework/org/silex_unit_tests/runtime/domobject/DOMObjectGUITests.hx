/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/

package org.silex_unit_tests.runtime.domObject;

/**
 * Units tests for DOMObjects
 * @author Yannick DOMINUGEZ
 */
import haxe.Log;

import org.silex.runtime.domObject.DOMObject;
import org.silex.runtime.domObject.base.DOMObjectBase;

import org.silex.runtime.resource.ResourceLoaderManager;

#if flash9
import flash.display.Sprite;
import flash.Lib;

#elseif js
import js.Dom;
import js.Lib;
#end

/**
 * Test GUI interaction for DOMObject that can't be tested with unit tests
 */
class DOMObjectGUITests 
{
	
	public static function main()
	{
		var domObjectGuiTests:DOMObjectGUITests = new DOMObjectGUITests();
	}
	
	/**
	 * Instatiate a DOMObject, add it to the DOM, then set listeners on it
	 */
	public function new() 
	{
		#if flash9
		var spriteParentDOMObject:Sprite = new Sprite();
		spriteParentDOMObject.graphics.beginFill(0x00FF00, 1);
		spriteParentDOMObject.graphics.drawRect(0, 0, 200, 200);
		spriteParentDOMObject.graphics.endFill();
		
		//create a new DOMObject
		var parentDOMObject:DOMObject = new DOMObject(spriteParentDOMObject);
		
		//add the native Sprite to the Flash Stage
		Lib.current.addChild(parentDOMObject.getReferenceToNativeDOM());
		
		
		
		#elseif js
		//create a new div
		var divParentDOMObject:HtmlDom = js.Lib.document.createElement("div");
		divParentDOMObject.setAttribute("id", "parentDiv");
		divParentDOMObject.style.backgroundColor = "#00FF00";
		
		//create a new DOM object
		var parentDOMObject:DOMObject = new DOMObject(divParentDOMObject);
		
		parentDOMObject.setWidth(200);
		parentDOMObject.setHeight(200);
		
		//attach the div to the document body
		Lib.document.body.appendChild(divParentDOMObject);
		
		#end
		
		var onPressDelegate:DOMObject->Void = onDOMObjectPress;
		parentDOMObject.onPress = function() { onPressDelegate(parentDOMObject); };
		
		var onReleaseDelegate:DOMObject->Void = onDOMObjectRelease;
		parentDOMObject.onRelease = function() { onReleaseDelegate(parentDOMObject); };
		
		var onRollOverDelegate:DOMObject->Void = onDOMObjectRollOver;
		parentDOMObject.onRollOver = function() { onRollOverDelegate(parentDOMObject); };
		
		var onRollOutDelegate:DOMObject->Void = onDOMObjectRollOut;
		parentDOMObject.onRollOut = function() { onRollOutDelegate(parentDOMObject); };

		var onMouseMoveDelegate:DOMObject->Void = onDOMObjectMouseMove;
		parentDOMObject.onMouseMove = function() { onMouseMoveDelegate(parentDOMObject); };
		
		var onDoubleClickDelegate:DOMObject->Void = onDOMObjectDoubleClick;
		parentDOMObject.onDoubleClick = function() { onDoubleClickDelegate(parentDOMObject); };
	}
	
	/////////////////////////////////////////////////////////////////////////////////////
	// DOMObject mouse events callbacks
	////////////////////////////////////////////////////////////////////////////////////
	
	private function onDOMObjectPress(domObject:DOMObject):Void
	{
		domObject.setRotation(domObject.getRotation() + 10);
		Log.trace(domObject.getRotation());
		Log.trace("dom object press");
	}
	
	private function onDOMObjectDoubleClick(domObject:DOMObject):Void
	{
		Log.trace("dom object double click");
	}
	
	private function onDOMObjectRelease(domObject:DOMObject):Void
	{
		Log.trace("dom object release");
	}
	
	private function onDOMObjectRollOver(domObject:DOMObject):Void
	{
		Log.trace("dom object roll over");
	}
	
	private function onDOMObjectRollOut(domObject:DOMObject):Void
	{
		Log.trace("dom object roll out");
	}
	
	private function onDOMObjectMouseMove(domObject:DOMObject):Void
	{
		Log.trace("dom object mouse move");
	}
	
}