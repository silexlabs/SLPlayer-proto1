/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.domobject.as3;

import flash.display.Sprite;
import flash.events.MouseEvent;
import org.silex.runtime.domobject.base.DOMObjectBase;
import org.silex.runtime.domobject.Matrix;
import org.silex.runtime.domobject.DOMObjectData;

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
	public function new(referenceToNativeDOM:Dynamic) 
	{
		super(referenceToNativeDOM);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden methods to manipulate the Flash DOM
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Adds a native Flash DOMObject (Sprite) to this DOMObject native DOMObject
	 * @param	domObject the Sprite to add to this
	 */
	override public function addChild(domObject:DOMObjectBase):Void
	{
		super.addChild(domObject);
		this._referenceToNativeDOM.addChild(domObject.getReferenceToNativeDOM());
	}
	
	/**
	 * Removes a native Flash DOMObject (Sprite) from this DOMObject native DOMObject
	 * @param	domObject the Sprite to remove from this
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
	 * Show or hide the native Sprite. 
	 * @param	value true if the Sprite must be visible
	 */
	override public function setIsVisible(value:Bool):Void
	{
		this._referenceToNativeDOM.visible = value;
	}
	
	/**
	 * Return wether the native Sprite is visible.
	 */
	override public function getIsVisible():Bool
	{
		return this._referenceToNativeDOM.visible;
	}
	
	/**
	 * Set the opacity of the Sprite
	 * @param	value from 0 (transparent) to 1 (opaque)
	 */
	override public function setAlpha(value:Float):Void
	{
		this._referenceToNativeDOM.alpha = value;
	}
	
	/**
	 * return the opacity of the Sprite, 
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
	 * native Sprite
	 * @param	matrix
	 */
	override public function setMatrix(matrix:Matrix):Void
	{
		super.setMatrix(matrix);
		
		//type the native dom object
		var nativeSprite:Sprite = this._referenceToNativeDOM;
		
		//get the data of the cross-platform matrix
		var matrixData:MatrixData = matrix.getMatrixData();
		
		//create a native matrix with the cross-platform matrix data
		var nativeTransformMatrix:flash.geom.Matrix  = new flash.geom.Matrix(matrixData.a, matrixData.b, matrixData.c, matrixData.d, matrixData.e, matrixData.f);
		
		//set the native matrix on the native sprite to refresh its display
		nativeSprite.transform.matrix = nativeTransformMatrix;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden event handler methods, to transmit Flash specific events
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Add event listeners for events on the native flash Sprite
	 */
	override private function setNativeListeners():Void
	{
		this._referenceToNativeDOM.addEventListener(MouseEvent.MOUSE_DOWN, onNativePress);
		this._referenceToNativeDOM.addEventListener(MouseEvent.MOUSE_UP, onNativeRelease);
		this._referenceToNativeDOM.addEventListener(MouseEvent.ROLL_OVER, onNativeRollOver);
		this._referenceToNativeDOM.addEventListener(MouseEvent.ROLL_OUT, onNativeRollOut);
		this._referenceToNativeDOM.addEventListener(MouseEvent.MOUSE_MOVE, onNativeMouseMove);
		
		//In As3, a Sprite must be double click enabled to dispatch double click event
		this._referenceToNativeDOM.doubleClickEnabled = true;
		this._referenceToNativeDOM.addEventListener(MouseEvent.DOUBLE_CLICK, onNativeDoubleClick);
	}
	
	/**
	 * Removes the event listeners on the native flash Sprite
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
	// Overriden Setters/Getters to manipulate the Flash DOMObject
	// set/get the following attributes : x,y,width,height,z-order,rotation
	//////////////////////////////////////////////////////////////////////////////////////////
	
	
	override public function setX(value:Int):Void 
	{
		this._referenceToNativeDOM.x = value;
	}
	
	override public function getX():Int 
	{
		return this._referenceToNativeDOM.x;
	}
	
	override public function setY(value:Int):Void 
	{
		this._referenceToNativeDOM.y = value;
	}
	
	override public function getY():Int 
	{
		return this._referenceToNativeDOM.y;
	}
	
	override public function setWidth(value:Int):Void
	{
		this._referenceToNativeDOM.width = value;
	}
	
	override public function getWidth():Int 
	{
		return this._referenceToNativeDOM.width;
	}
	
	override public function setHeight(value:Int):Void 
	{
		this._referenceToNativeDOM.height = value;
	}

	override public function getHeight():Int 
	{
		return this._referenceToNativeDOM.height;
	}
	

	
	override public function setZOrder(value:Int)
	{
		//if the value is outside of the children range, set it to the 
		//last children range
		if (value > _parent.getChildren().length - 1)
		{
			value = _parent.getChildren().length - 1;
		}
		
		//retrieve the parent Sprite, and use it to set
		//the new index on the current Sprite
		var parent:Sprite = this._referenceToNativeDOM.parent;
		parent.setChildIndex(this._referenceToNativeDOM, value);
	}
	
	override public function getZOrder():Int 
	{
		//retrieve the parent Sprite, and use it to retrieve the current
		//child index
		var parent:Sprite = this._referenceToNativeDOM.parent;
		return parent.getChildIndex(this._referenceToNativeDOM);
	}
	
}