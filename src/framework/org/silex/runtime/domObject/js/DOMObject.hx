/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.domObject.js;

import haxe.Log;
import js.Dom;
import org.silex.runtime.domObject.base.DOMObjectBase;
import org.silex.runtime.domObject.DOMObjectData;
import org.silex.runtime.geom.Matrix;
import org.silex.runtime.geom.GeomData;

/**
 * This is the DOMObject implementation for JavaScript. 
 * It manipulates the native HTML DOM
 * @author Yannick DOMINGUEZ
 */
class DOMObject extends DOMObjectBase
{
	/////////////////////////////////
	// CONSTRUTOR & INIT
	/////////////////////////////////
	
	/**
	 * Class constructor
	 */
	public function new(referenceToNativeDOM:HtmlDom = null) 
	{
		super(referenceToNativeDOM);
	}
	
	/**
	 * Set the domObject properties which can be retrieved
	 * from the native HTML DOM element
	 */
	override private function init():Void
	{
		//all DOMObjects are positioned as absolute to prevent most
		//of browsers inconsistencies regarding margin/padding. 
		//Margin, padding , floating... concepts will be abstracted
		_referenceToNativeDOM.style.position = "absolute";
		
		if (_referenceToNativeDOM.style.width != null)
		{
			this._width = Std.parseInt(_referenceToNativeDOM.style.width);
		}
		else
		{
			this._width = _referenceToNativeDOM.offsetWidth;
		}
		
		if (_referenceToNativeDOM.style.height != null)
		{
			this._height = Std.parseInt(_referenceToNativeDOM.style.height);
		}
		else
		{
			this._height = _referenceToNativeDOM.offsetHeight;
		}
		
		
		this._height = _referenceToNativeDOM.offsetHeight;
		this._x = Std.parseInt(_referenceToNativeDOM.style.left);
		this._y = Std.parseInt(_referenceToNativeDOM.style.top);
		
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden methods to manipulate the HTML DOM
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Adds a native HTML DOMObject (an html element) to this DOMObject native DOMObject
	 * @param	domObject the html element to add to this
	 */
	override public function addChild(domObject:DOMObjectBase):Void
	{
		super.addChild(domObject);
		this._referenceToNativeDOM.appendChild(domObject.getReferenceToNativeDOM());
		
		//intialise z-order on the DOMObject, as it is null by default in JavaScript
		domObject.getReferenceToNativeDOM().style.zIndex = _children.length - 1;
	}
	
	/**
	 * Removes a native HTML DOMObject (an html element) from this DOMObject native DOMObject
	 * @param	domObject the html element to remove from this
	 */
	override public function removeChild(domObject:DOMObjectBase):Void
	{
		super.removeChild(domObject);
		this._referenceToNativeDOM.removeChild(domObject.getReferenceToNativeDOM());
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden public and private methods to manage the visibility and opacity of the dom object
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Show or hide the native HTML element. 
	 * @param	value true if the element must be visible
	 */
	override public function setIsVisible(value:Bool):Bool
	{
		//set the right visibility CSS property value
		if (value == true)
		{
			this._referenceToNativeDOM.style.visibility = "visible";
		}
		else
		{
			this._referenceToNativeDOM.style.visibility = "hidden";
		}
		
		return value;
	}
	
	/**
	 * Return wether the native HTML element is visible.
	 */
	override public function getIsVisible():Bool
	{
		if (this._referenceToNativeDOM.style.visibility == "visible")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	/**
	 * Set the opacity of the HTML element
	 * @param	value from 0 (transparent) to 1 (opaque)
	 */
	override public function setAlpha(value:Float):Float
	{
		super.setAlpha(value);
		untyped this._referenceToNativeDOM.style.opacity = value;
		return value;
	}
	
	/**
	 * return the opacity of the HTML element, 
	 * from 0 to 1
	 */ 
	override public function getAlpha():Float
	{
		return untyped Std.parseFloat(this._referenceToNativeDOM.style.opacity);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden methods to transform the dom object and manipulate it's matrix
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * when the matrix is set, update also
	 * the value of the transform CSS property of this
	 * HTML DOM native element
	 * @param	matrix
	 */
	override public function setMatrix(matrix:Matrix):Matrix
	{
		super.setMatrix(matrix);
		
		//type the native dom object
		var nativeSprite:HtmlDom = this._referenceToNativeDOM;
		
		//get the data of the cross-platform matrix
		var matrixData:MatrixData = matrix.getMatrixData();
		
		var cssMatrixProperty:String = "matrix(" + matrixData.a + "," + matrixData.b + "," + matrixData.c + "," + matrixData.d + "," + matrixData.e + "," + matrixData.f + ")";
		
		//first test if the transform property is set for the current browser,
		//else test vendor specific properties
		if (untyped this._referenceToNativeDOM.style.transform != null)
		{
			untyped this._referenceToNativeDOM.style.transform = cssMatrixProperty;
			untyped this._referenceToNativeDOM.style.transformOrigin = "0 0";
		}
		if (untyped this._referenceToNativeDOM.style.MozTransform != null)
		{
			untyped this._referenceToNativeDOM.style.MozTransform = cssMatrixProperty;
			untyped this._referenceToNativeDOM.style.MozTransformOrigin = "0 0";
		}
		else if (untyped this._referenceToNativeDOM.style.WebkitTransform != null)
		{
			untyped this._referenceToNativeDOM.style.WebkitTransform = cssMatrixProperty;
			untyped this._referenceToNativeDOM.style.WebkitTransformOrigin = "0 0";
		}
		else if (untyped this._referenceToNativeDOM.style.OTransform != null)
		{
			untyped this._referenceToNativeDOM.style.OTransform = cssMatrixProperty;
			untyped this._referenceToNativeDOM.style.OTransform = "0 0";
		}
		
		return this._matrix;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden event handler methods, to transmit JavaScript specific events
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Add event listeners for events on the native flash Sprite
	 */
	override private function setNativeListeners():Void
	{
		this._referenceToNativeDOM.onmousedown = onNativePress;
		this._referenceToNativeDOM.onmouseup = onNativeRelease;
		this._referenceToNativeDOM.onmouseover = onNativeRollOver;
		this._referenceToNativeDOM.onmouseout = onNativeRollOut;
		this._referenceToNativeDOM.onmousemove = onNativeMouseMove;
		this._referenceToNativeDOM.ondblclick = onNativeDoubleClick;
	}
	
	/**
	 * Removes the event listeners on the native flash Sprite
	 */
	override private function unsetNativeListeners():Void
	{
		this._referenceToNativeDOM.onmousedown = null;
		this._referenceToNativeDOM.onmouseup = null;
		this._referenceToNativeDOM.onmouseover = null;
		this._referenceToNativeDOM.onmouseout = null;
		this._referenceToNativeDOM.onmousemove = null;
		this._referenceToNativeDOM.ondblclick = null;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden Setters to manipulate the JavaScript DOMObject
	// set the following attributes : x,y,width,height
	//////////////////////////////////////////////////////////////////////////////////////////
	
	override public function setX(value:Int):Int 
	{
		super.setX(value);
		this._referenceToNativeDOM.style.left = value + "px";
		return this._x;
	}
	
	override public function setY(value:Int):Int 
	{
		super.setY(value);
		this._referenceToNativeDOM.style.top = value + "px";
		return this._y;
	}
	
	override public function setWidth(value:Int):Int
	{
		super.setWidth(value);
		this._referenceToNativeDOM.style.width = value +"px";
		return this._width;
	}
	
	override public function setHeight(value:Int):Int 
	{
		super.setHeight(value);
		this._referenceToNativeDOM.style.height = value + "px";
		return this._height;
	}

	//////////////////////////////////////////////////////////////////////////////////////////
	// Z-INDEX SETTER/GETTER
	// Setter/Getter to manipulate a native DOMObject z order in the publication
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * When setting the z-order on an HTML element,
	 * all the siblings z-indexes must be updated. If they
	 * are superior or equal to the z-index set on the current element,
	 * they are incremented
	 * @param	value the z index to set
	 */
	override public function setZOrder(value:Int):Int 
	{
		//if the z-index is outside of the children range, 
		//set it as the last z-index of the range
		if (value > _parent.getChildren().length - 1)
		{
			value = _parent.getChildren().length - 1;
		}
		
		var nativeParent:HtmlDom = this._referenceToNativeDOM.parentNode;
		var numChildren:Int = nativeParent.childNodes.length;
		
		var oldIndex:Int = getZOrder();
		var newIndex:Int = value;
		
		//check all the siblings of the current native DOM element,
		//and increment their z index as needed in two loops
		
		//the first loop "removes" the moved item from the z-index position
		//so every z-index superior to the removed z-index is decremented as their is
		//one less z-index value
		for (i in 0...numChildren)
		{
			var currentChildren:HtmlDom = nativeParent.childNodes[i];
			
			//check if there is a style attribute to prevent manipulating text node
			if (currentChildren.style != null)
			{
				var currentChildrenZIndex:Int = currentChildren.style.zIndex;
				if (currentChildrenZIndex > oldIndex)
				{
					currentChildrenZIndex--;
					currentChildren.style.zIndex = currentChildrenZIndex;
				}
			}
		}
		
		//the second loop "insert" the moved item into the z-indexes
		//so every z-index superior or equal to the inserted item is 
		//incremented
		for (i in 0...numChildren)
		{
			var currentChildren:HtmlDom = nativeParent.childNodes[i];
			if (currentChildren.style != null)
			{
				var currentChildrenZIndex:Int = currentChildren.style.zIndex;
				if (currentChildrenZIndex >= newIndex)
				{
					currentChildrenZIndex++;
					currentChildren.style.zIndex = currentChildrenZIndex;
				}
			}
		}
		
		//set the z-index of the current element
		this._referenceToNativeDOM.style.zIndex = value;
		
		return value;
	}
	
	override public function getZOrder():Int 
	{
		return this._referenceToNativeDOM.style.zIndex;
	}
	
}