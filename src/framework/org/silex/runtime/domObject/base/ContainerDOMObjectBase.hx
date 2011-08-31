/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.domObject.base;

import org.silex.runtime.domObject.DOMObject;

/**
 * This is a "neutral" DOMObject used for instance when a skin (.swf in Flash, .html in HTML)
 * is loaded. It allows for setting semantic of the root node of the DOMObject (not implemented for
 * Flash)
 * 
 * @author Yannick DOMINGUEZ
 */
class ContainerDOMObjectBase extends DOMObject
{
	/**
	 * Store the node name (div, nav, header...) of the
	 * first node of the reference to the native DOM.
	 * This doesn't apply to Flash
	 */
	private var _semantic:String;
	
	/**
	 * class constructor
	 */
	public function new(referenceToNativeDOMObject:Dynamic) 
	{
		super(referenceToNativeDOMObject);
	}
	
	/**
	 * Set the semantic name of the first native node
	 * @param	semantic an HTML tag name (div, nav, header...)
	 */
	public function setSemantic(semantic:String):Void
	{
		this._semantic = semantic;
	}
	
	/**
	 * Return the semantic name of the first native node
	 * @return	semantic an HTML tag name (div, nav, header...)
	 */
	public function getSemantic():String
	{
		return this._semantic;
	}
	
}