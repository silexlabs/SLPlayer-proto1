/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.domObject.as3;

import flash.display.DisplayObjectContainer;
import flash.events.MouseEvent;
import haxe.Log;
import org.silex.runtime.domObject.base.DOMObjectBase;
import org.silex.runtime.geom.Matrix;
import org.silex.runtime.domObject.DOMObjectData;
import org.silex.runtime.geom.GeomData;

/**
 * This is the DOMObject implementation for FLASH AVM2. 
 * It manipulates the native Flash DOM
 * @author Yannick DOMINGUEZ
 */
class DOMObject extends DOMObjectBase
{

	/**
	 * Class constructor
	 */
	public function new(referenceToNativeDOM:DisplayObjectContainer = null) 
	{
		super(referenceToNativeDOM);
	}
	
	/**
	 * Set the domObject properties which can be retrieved
	 * from the native Display Object
	 */
	override private function init():Void
	{	
		this._width = Math.round(_referenceToNativeDOM.width);
		this._height = Math.round(_referenceToNativeDOM.height);
		this._x = Math.round(_referenceToNativeDOM.x);
		this._y = Math.round(_referenceToNativeDOM.y);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden methods to manipulate the Flash DOM
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Adds a native Flash DOMObject (DisplayObject) to this DOMObject native DOMObject
	 * @param	domObject the DisplayObject to add to this
	 */
	override public function addChild(domObject:DOMObjectBase):Void
	{
		super.addChild(domObject);
		this._referenceToNativeDOM.addChild(domObject.getReferenceToNativeDOM());
	}
	
	/**
	 * Removes a native Flash DOMObject (DisplayObject) from this DOMObject native DOMObject
	 * @param	domObject the DisplayObject to remove from this
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
	 * Show or hide the native DisplayObject. 
	 * @param	value true if the DisplayObject must be visible
	 */
	override public function setIsVisible(value:Bool):Bool
	{
		this._referenceToNativeDOM.visible = value;
		return value;
	}
	
	/**
	 * Return wether the native DisplayObject is visible.
	 */
	override public function getIsVisible():Bool
	{
		return this._referenceToNativeDOM.visible;
	}
	
	/**
	 * Set the opacity of the DisplayObject
	 * @param	value from 0 (transparent) to 1 (opaque)
	 */
	override public function setAlpha(value:Float):Float
	{
		this._referenceToNativeDOM.alpha = value;
		return value;
	}
	
	/**
	 * return the opacity of the DisplayObject, 
	 * from 0 to 1
	 */ 
	override public function getAlpha():Float
	{
		return this._referenceToNativeDOM.alpha;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden methods to transform the dom object and manipulate it's matrix
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * when the matrix is set, update also
	 * the values of the native flash matrix of the
	 * native DisplayObject
	 * @param	matrix
	 */
	override public function setMatrix(matrix:Matrix):Matrix
	{
		super.setMatrix(matrix);
		
		//get the data of the cross-platform matrix
		var matrixData:MatrixData = matrix.getMatrixData();
		
		//create a native matrix with the cross-platform matrix data
		var nativeTransformMatrix:flash.geom.Matrix  = new flash.geom.Matrix(matrixData.a, matrixData.b, matrixData.c, matrixData.d, matrixData.e, matrixData.f);
		
		//set the native matrix on the native DisplayObject to refresh its display
		this._referenceToNativeDOM.transform.matrix = nativeTransformMatrix;
		
		return this._matrix;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden event handler methods, to transmit Flash specific events
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Add event listeners for events on the native flash DisplayObject
	 */
	override private function setNativeListeners():Void
	{
		this._referenceToNativeDOM.addEventListener(MouseEvent.MOUSE_DOWN, onNativePress);
		this._referenceToNativeDOM.addEventListener(MouseEvent.MOUSE_UP, onNativeRelease);
		this._referenceToNativeDOM.addEventListener(MouseEvent.ROLL_OVER, onNativeRollOver);
		this._referenceToNativeDOM.addEventListener(MouseEvent.ROLL_OUT, onNativeRollOut);
		this._referenceToNativeDOM.addEventListener(MouseEvent.MOUSE_MOVE, onNativeMouseMove);
		
		//In As3, a DisplayObject must be double click enabled to dispatch double click event
		this._referenceToNativeDOM.doubleClickEnabled = true;
		this._referenceToNativeDOM.addEventListener(MouseEvent.DOUBLE_CLICK, onNativeDoubleClick);
	}
	
	/**
	 * Removes the event listeners on the native flash DisplayObject
	 */
	override private function unsetNativeListeners():Void
	{
		this._referenceToNativeDOM.removeEventListener(MouseEvent.MOUSE_DOWN, onNativePress);
		this._referenceToNativeDOM.removeEventListener(MouseEvent.MOUSE_UP, onNativeRelease);
		this._referenceToNativeDOM.removeEventListener(MouseEvent.ROLL_OVER, onNativeRollOver);
		this._referenceToNativeDOM.removeEventListener(MouseEvent.ROLL_OUT, onNativeRollOut);
		this._referenceToNativeDOM.removeEventListener(MouseEvent.MOUSE_MOVE, onNativeMouseMove);
		this._referenceToNativeDOM.removeEventListener(MouseEvent.DOUBLE_CLICK, onNativeDoubleClick);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden Setters to manipulate the Flash DOMObject
	// set the following attributes : x,y,width,height
	//////////////////////////////////////////////////////////////////////////////////////////
	
	override public function setX(value:Int):Int 
	{
		super.setX(value);
		this._referenceToNativeDOM.x = value;
		return this._x;
	}
	
	override public function setY(value:Int):Int 
	{
		super.setY(value);
		this._referenceToNativeDOM.y = value;
		return this._y;
	}
	
	override public function setWidth(value:Int):Int
	{
		super.setWidth(value);
		this._referenceToNativeDOM.width = value;
		return this._width;
	}
	
	override public function setHeight(value:Int):Int 
	{
		super.setHeight(value);
		this._referenceToNativeDOM.height = value;
		return this._height;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Z-INDEX SETTER/GETTER
	// Setter/Getter to manipulate a native DOMObject z order in the publication
	//////////////////////////////////////////////////////////////////////////////////////////

	override public function setZOrder(value:Int):Int
	{
		//if the value is outside of the children range, set it to the 
		//last children range
		if (value > _parent.getChildren().length - 1)
		{
			value = _parent.getChildren().length - 1;
		}
		
		//retrieve the parent Display Object, and use it to set
		//the new index on the current DisplayObject
		var parent:DisplayObjectContainer = this._referenceToNativeDOM.parent;
		parent.setChildIndex(this._referenceToNativeDOM, value);
		
		return value;
	}
	
	override public function getZOrder():Int 
	{
		//retrieve the parent Display object, and use it to retrieve the current
		//child index
		var parent:DisplayObjectContainer = this._referenceToNativeDOM.parent;
		return parent.getChildIndex(this._referenceToNativeDOM);
	}
	
}