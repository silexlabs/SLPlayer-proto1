/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.domobject.as3;
import flash.text.TextField;
import org.silex.runtime.domobject.base.TextDOMObjectBase;

/**
 * This is the Text DOMObject implementation for Flash.
 * 
 * It displays an htmlText in a native flash text field.
 * It needs to convert the HTML text to Flash pseudo-HTML
 * format before displaying it
 * 
 * @author Yannick DOMINGUEZ
 */
class TextDOMObject extends TextDOMObjectBase
{
	/**
	 * The native Flash text field that will be used to display
	 * the html text
	 */
	private var _nativeTextField:TextField;
	
	/**
	 * class constructor. Instantiate the native text field
	 * and add it as a child of the native Sprite.
	 */
	public function new(referenceToNativeDOMObject:Dynamic) 
	{
		super(referenceToNativeDOMObject);
		
		_nativeTextField = new TextField();
		_nativeTextField.wordWrap = true;
		referenceToNativeDOMObject.addChild(_nativeTextField);
	}
	
	/**
	 * This method is overriden to set the Flash pseudo-html
	 * string on the native text field
	 * @param text the HTML text before conversion
	 */
	override public function setText(text:String):Void
	{
		super.setText(text);
		_nativeTextField.htmlText = fromHTMLtoFLASHTML(text);
	}
	
	/**
	 * Convert an HTML string into a Flash pseudo-html string.
	 * Flash supports only a limited subset of the HTML format
	 * @param	html the HTML string
	 * @return the pseudo-html string
	 */
	private static function fromHTMLtoFLASHTML(html:String):String
	{
		return html;
	}
	
	/**
	 * override to set also the width of the native text
	 * field to match the size of the DOMObject
	 */ 
	override public function setWidth(value:Int):Void
	{
		super.setWidth(value);
		_nativeTextField.width = value;
	}
	
	/**
	 * override to set also the height of the native text
	 * field to match the size of the DOMObject
	 */ 
	override public function setHeight(value:Int):Void
	{
		super.setHeight(value);
		_nativeTextField.height = value;
	}
	
}