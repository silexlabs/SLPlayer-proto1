/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/

package runtime.keyboard;

/**
 * Units tests for keyboard events
 * @author Yannick DOMINGUEZ
 */

import haxe.Log;
import org.silex.runtime.domObject.base.DOMObjectBase;
import org.silex.runtime.domObject.DOMObject;
import org.silex.runtime.domObject.ImageDOMObject;
import org.silex.runtime.resource.ResourceLoaderManager;
import utest.Assert;
import utest.Runner;
import utest.ui.Report;
import utest.ui.common.HeaderDisplayMode;
import org.silex.runtime.keyboard.KeyboardData;
import org.silex.runtime.domObject.DOMObjectData;
import org.silex.runtime.domObject.GraphicDOMObject;


class KeyboardTests 
{
	
	public static function main()
	{
		#if flash9
		DOMObjectBase.rootDOMObject = new DOMObject(flash.Lib.current);
		#elseif js
		var rootDiv:Dynamic = js.Lib.document.createElement("div");
		js.Lib.document.body.appendChild(rootDiv);
		DOMObjectBase.rootDOMObject = new DOMObject(rootDiv);
		#end
		
		new KeyboardTests();
		
	}
	
	public function new() 
	{
		testKeyboard();
	}
	
	public function testKeyboard()
	{
		var graphicDOMObject:GraphicDOMObject = new GraphicDOMObject();
		
		graphicDOMObject.width  = 100;
		graphicDOMObject.height = 100;
		graphicDOMObject.x = 0;
		graphicDOMObject.y = 0;
		
		graphicDOMObject.beginFill(monochrome( { color:0xFF0000, alpha:100 } ));
		
		graphicDOMObject.drawRect(0, 0, 100, 100);
		graphicDOMObject.endFill();
		
		
		DOMObjectBase.rootDOMObject.addChild(graphicDOMObject);
		
		graphicDOMObject.onKeyDown = onKeyDown;
		graphicDOMObject.onKeyUp = onKeyUp;
		
		
	}

	
	private function onKeyDown(key:Key):Void
	{
		Log.trace(key);
	}
	
	private function onKeyUp(key:Key):Void
	{
		Log.trace(key);
	}
	
}