/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.domobject.base;

import haxe.Log;
import org.silex.runtime.domobject.Matrix;
import org.silex.runtime.domobject.DOMObjectData;

/**
 * This is a base class for runtime specific DOMObject. A DOMObject is an abstraction of the visual base element of a runtime.
 * For instance in JS, a DOMObject is an HTML element, like a <div> or <img> element. In Flash AS3, a domObject is a Sprite.
 * A Domobject can contain other DOMObjects. This class abstracts manipulating DOM elements, each runtime is implemented in an
 * inheriting class
 * @author Yannick DOMINGUEZ
 */
class DOMObjectBase 
{
	public static var rootDOMObject:DOMObjectBase;
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Event callbacks, cross-platform callbacks for runtime specific events
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * The callback called on press of the DOMObject
	 */
	public var onPress:Void->Void;
	
	/**
	 * The callback called when the DOMObject is double-clicked
	 */
	public var onDoubleClick:Void->Void;
	
	/**
	 * The callback called on release of the DOMObject
	 */
	public var onRelease:Void->Void;
	
	/**
	 * The callback called on rollover of the DOMObject
	 */
	public var onRollOver:Void->Void;
	
	/**
	 * The callback called on rollout of the DOMObject
	 */
	public var onRollOut:Void->Void;
	
	/**
	 * The callback called when the mouse moves over the DOMObject
	 */
	public var onMouseMove:Void->Void;
	
	/**
	 * The callback called when there is a mouse wheel event over the DOMObject
	 * TO DO
	 */
	public var onMouseWheel:Void->Void;
	
	/**
	 * The callback called when the DOMObject gains focus
	 * TO DO
	 */
	public var onFocusIn:Void->Void;
	
	/**
	 * The callback called when the DOMObject loses focus
	 * TO DO
	 */
	public var onFocusOut:Void->Void;
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Private attributes
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * A reference to the native DOM object. Varies for each
	 * runtime : in JS it is an HTML element, in Flash a Sprite,
	 * in PHP a ressource
	 */
	private var _referenceToNativeDOM:Dynamic;
	
	/**
	 * a reference to the parent of this DOMObject
	 */ 
	private var _parent:DOMObjectBase;
	
	/**
	 *  a reference to each of the DOMObject childs, stored by
	 *  z-index
	 */
	private var _children:Array<DOMObjectBase>;
	
	/**
	 * a reference to this domObject transformation matrix
	 */
	private var _matrix:Matrix;
	
	/**
	 * class constructor. Set the reference to the native DOMObject
	 * and initialise it
	 */
	public function new(referenceToNativeDOMObject:Dynamic) 
	{
		this._referenceToNativeDOM = referenceToNativeDOMObject;
		
		_children = new Array<DOMObjectBase>();
		
		_matrix = new Matrix();
		
		setNativeListeners();
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Public method to manipulate the DOM
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Set the current DOMObject as the parent of the added domObject, and 
	 * store it in the children array. Overriden by each runtime, to add the
	 * child to native DOM.
	 * @param	domObject the DOMObject to attach to this DOMObject
	 */
	public function addChild(domObject:DOMObjectBase):Void
	{
		domObject.setParent(this);
		_children.push(domObject);
	}
	
	/**
	 * Reset the parent of the remove child object as it no longer is attached
	 * to the DOM, remove it also from the children array. Overrident by each
	 * runtime to remove also from the native DOM
	 * @param	domObject the DOMObject to remove from this DOMObject
	 */
	public function removeChild(domObject:DOMObjectBase):Void
	{
		domObject.setParent(null);
		_children.remove(domObject);
	}
	
	/**
	 * Returns the DOMObject parent of this DOMObject
	 */
	public function getParent():DOMObjectBase
	{
		return this._parent;
	}
	
	/**
	 * set the parent of this DOMObject
	 */
	public function setParent(domObject:DOMObjectBase):Void
	{
		this._parent = domObject;
	}
	
	/**
	 * returns the children of this DOMObject
	 * @return an array of DOMObject
	 */
	public function getChildren():Array<DOMObjectBase>
	{
		return _children;
	}
	
	/**
	 * Returns the reference to this DOMObject native DOM element
	 * @return a Sprite in AS, an HTML element in JS, a ressource in PHP
	 */
	public function getReferenceToNativeDOM():Dynamic
	{
		return _referenceToNativeDOM;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Public and private methods to transform the dom object and manipulate it's matrix
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Translate the domObject along the x and y axis, using x and y as offset
	 * @param	x the x offset
	 * @param	y the y offset
	 */
	public function translate(x:Float, y:Float):Void
	{
		//use the matrix API
		_matrix.translate(x, y);
		
		//refresh the matrix to refresh the domObject display
		setMatrix(this._matrix);
	}
	
	/**
	 * Rotate the domObject with the given angle using the transformationOrigin as pivot point
	 * @param	angle the ortation angle, in degree
	 * @param	transformationOrigin the pivot point, represented as an enum value or as a point
	 */
	public function rotate(angle:Int, transformationOrigin:TransformationOriginValue):Void
	{
		//use the matrix API, retrieve the pivot point
		_matrix.rotate(angle, getTransformationOriginPoint(transformationOrigin));
		//refresh the matrix to refresh the domObject display
		setMatrix(this._matrix);
	}
	
	/**
	 * Set the rotation to an absolute angle instead of adding a rotation to the existing 
	 * rotation
	 * @param	angle the target angle
	 * @param	transformationOrigin the rotation center
	 */
	public function setRotation(angle:Int, transformationOrigin:TransformationOriginValue):Void {
		
		//use the matrix API
		_matrix.setRotation(angle, getTransformationOriginPoint(transformationOrigin));
		//refresh the matrix to refresh the domObject display
		setMatrix(this._matrix);
	}
	
	/**
	 * Return the current rotation angle in deg
	 * @return an Int from 0 to 360
	 */
	public function getRotation():Int { 
		
		//use the Matrix API
		return _matrix.getRotation();
	}
	
	/**
	 * Scale the domObject with the scaleX and scaleY factor, using the transformationOrigin as scaling
	 * center
	 * @param	scaleX the horizontal scale factor
	 * @param	scaleY the vertical scale factor
	 * @param	transformationOrigin the scale center, represented as an enum value or as a point
	 */
	public function scale(scaleX:Float, scaleY:Float, transformationOrigin:TransformationOriginValue):Void
	{
		//use the matrix API, retrieve the scale center
		_matrix.scale(scaleX, scaleY, getTransformationOriginPoint(transformationOrigin));
		
		//refresh the matrix to refresh the domObject display
		setMatrix(this._matrix);
	}
	
	
	/**
	 * skew the domObject with the skewX and skewY factor, using the transformationOrigin as skewing
	 * center
	 * @param	skewX the horizontal skew factor
	 * @param	skewY the vertical skew factor
	 * @param	transformationOrigin the skew center, represented as an enum value or as a point
	 */
	public function skew(skewX:Float, skewY:Float, transformationOrigin:TransformationOriginValue):Void
	{
		//use the matrix API, retrieve the skew center
		_matrix.skew(skewX, skewY, getTransformationOriginPoint(transformationOrigin));
		
		//refresh the matrix to refresh the domObject display
		setMatrix(this._matrix);
	}
	
	/**
	 * Set the transformation matrix of this domObject. Used
	 * by the inheriting runtime specific class to update
	 * their native matrix transformations
	 */
	public function setMatrix(matrix:Matrix):Void
	{
		this._matrix = matrix;
	}
	
	/**
	 * Return this domObject matrix
	 */
	public function getMatrix():Matrix
	{
		return this._matrix;
	}
	
	/**
	 * Reset the matrix to an identity matrix (no trnasformation)
	 */
	public function resetTransformations():Void
	{
		_matrix.identity();
		setMatrix(this._matrix);
	}
	
	/**
	 * Return the transformation origin as a Point, from a
	 * TransformationOriginValue
	 */
	private function getTransformationOriginPoint(transformationOrigin:TransformationOriginValue):Point
	{
		//set the returned point
		var transformationOriginPoint:Point = { x:0.0, y:0.0 };
		
		//switch the origin point value
		switch (transformationOrigin)
		{
			//if it is given as point (in pixels), set it
			//on the transformationOriginPoint that will be returned
			case point(point):
				transformationOriginPoint = point;
			
			//else if it is given as constants, deduce the point coordinate
			//from the constant value
			case constant(transformationOriginX, transformationOriginY):
			
			//for x point coordinate	
			switch transformationOriginX
			{
				case left : 
					transformationOriginPoint.x = 0;
				
				case center :
					transformationOriginPoint.x = getWidth() / 2;
					
				case right :
					transformationOriginPoint.x = getWidth();
			}
			
			//for y point coordinate	
			switch transformationOriginY
			{
				case top : 
					transformationOriginPoint.y = 0;
				
				case middle :
					transformationOriginPoint.y = getHeight() / 2;
					
				case bottom :
					transformationOriginPoint.y = getHeight();
			}
		}
		
		return transformationOriginPoint;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Generic Setters/Getters to manipulate any attribute of the DOMObject
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Set a field value on the native DOM object
	 * @param	propertyName the name of the field
	 * @param	propertyValue the new value of the field
	 */
	public function setAttribute(propertyName:String, propertyValue:Dynamic):Void
	{
		Reflect.setField(this._referenceToNativeDOM, propertyName, propertyValue);
	}
	
	/**
	 * Return the value of a field of the native object
	 * @param	propertyName the name of the field value to return
	 * @return might be any type
	 */
	public function getAttribute(propertyName:String):Dynamic
	{
		return Reflect.field(this._referenceToNativeDOM, propertyName);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Private native event handler method
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Listens for events on the native referenceToDOMObject
	 */
	private function setNativeListeners():Void
	{
		//abstract
	}
	
	/**
	 * Removes the native listeners on referenceToDOMObject
	 */
	private function unsetNativeListeners():Void
	{
		//abstract
	}
	
	/**
	 * Calls the onPress callback
	 * @param	event the native press event
	 */
	private function onNativePress(event:Dynamic):Void
	{
		if (onPress != null)
		{
			onPress();
		}
	}
	
	/**
	 * Calls the onDoubleClick callback
	 * @param	event the native double click event
	 */
	private function onNativeDoubleClick(event:Dynamic):Void
	{
		if (onDoubleClick != null)
		{
			onDoubleClick();
		}
	}
	
	/**
	 * Calls the onRelease callback
	 * @param	event the native release event
	 */
	private function onNativeRelease(event:Dynamic):Void
	{
		if (onRelease != null)
		{
			onRelease();
		}
	}
	
	/**
	 * Calls the onRollover callback
	 * @param	event the native rollover event
	 */
	private function onNativeRollOver(event:Dynamic):Void
	{
		if (onRollOver != null)
		{
			onRollOver();
		}
	}
	
	/**
	 * Calls the onRollout callback
	 * @param	event the native rollout event
	 */
	private function onNativeRollOut(event:Dynamic):Void
	{
		if (onRollOut != null)
		{
			onRollOut();
		}
	}
	
	/**
	 * Calls the onMouseMove callback
	 * @param	event the native mousemove event
	 */
	private function onNativeMouseMove(event:Dynamic):Void
	{
		if (onMouseMove != null)
		{
			onMouseMove();
		}
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Setters/Getters to manipulate a native DOMObject
	//////////////////////////////////////////////////////////////////////////////////////////
	
	public function setX(value:Int):Void {}
	
	public function getX():Int { return 0; }
	
	public function setY(value:Int):Void {}
	
	public function getY():Int { return 0; }
	
	public function setWidth(value:Int):Void {}
	
	public function getWidth():Int { return 0; }
	
	public function setHeight(value:Int):Void {}
	
	public function getHeight():Int { return 0; }
	
	public function setZOrder(value:Int) {}
	
	public function getZOrder():Int { return 0; }
}