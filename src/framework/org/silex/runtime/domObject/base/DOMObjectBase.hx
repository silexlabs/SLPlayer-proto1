/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.domObject.base;

import haxe.Log;
import org.silex.runtime.geom.Matrix;
import org.silex.runtime.domObject.DOMObjectData;
import org.silex.runtime.domObject.NativeDOMObject;

/**
 * This is a base class for runtime specific DOMObject. A DOMObject is an abstraction of the visual base element of a runtime.
 * For instance in JS, a DOMObject is an HTML element, like a <div> or <img> element. In Flash AS3, a domObject is a Sprite.
 * A Domobject can contain other DOMObjects. This class abstracts manipulating DOM elements, each runtime is implemented in an
 * inheriting class
 * @author Yannick DOMINGUEZ
 */
class DOMObjectBase 
{
	
	/**
	 * root dom object of the publication
	 * TO DO : remove it, it belongs to Publication and
	 * must not be static as multiple publication may run 
	 * at the same time. Only left for now to allow compilation
	 */
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
	 * in PHP a resource
	 */
	private var _referenceToNativeDOM:NativeDOMObject;
	
	/**
	 * a reference to the parent of this DOMObject
	 */ 
	private var _parent:DOMObjectBase;
	public var parent(getParent, setParent):DOMObjectBase;
	
	/**
	 *  a reference to each of the DOMObject childs, stored by
	 *  z-index
	 */
	private var _children:Array<DOMObjectBase>;
	public var children(getChildren, never):Array<DOMObjectBase>;
	
	/**
	 * a reference to this domObject transformation matrix
	 */
	private var _matrix:Matrix;
	public var matrix(getMatrix, setMatrix):Matrix;
	
	/////////////////////////////////
	// COORDS Attributes
	// Stores the coords of the DOM Object
	// as they are set. This abstraction is used
	// to prevent runtime inconsistencies happening
	// when retrieving coords from a native dom object
	////////////////////////////////
	
	/**
	 * Stores the x position of this dom object
	 */
	private var _x:Int;
	public var x(getX, setX):Int;
	
	/**
	 * Stores the y position of this dom object
	 */
	private var _y:Int;
	public var y(getY, setY):Int;
	
	/**
	 * Stores the width position of this dom object
	 */
	private var _width:Int;
	public var width(getWidth, setWidth):Int;
	
	/**
	 * Stores the height position of this dom object
	 */
	private var _height:Int;
	public var height(getHeight, setHeight):Int;
	
	/////////////////////////////////
	// VISIBILITY/OPACITY attributes
	////////////////////////////////
	
	/**
	 * The opacity of the DOM Object, from 0 to 1
	 */
	public var alpha(getAlpha, setAlpha):Float;
	
	/**
	 * Wheter the DOMObject is visible
	 */
	public var isVisible(getIsVisible, setIsVisible):Bool;
	
	/////////////////////////////////
	// Z-ORDER attribute
	/////////////////////////////////
	
	/**
	 * The z-order / z-index of this DOM Object, relative to
	 * its parent (the first child of a DOMObject always has
	 * a 0 z-order)
	 */
	public var zOrder(getZOrder, setZOrder):Int;
	
	/////////////////////////////////
	// CONSTRUTOR & INIT
	/////////////////////////////////
	
	/**
	 * class constructor. Set the reference to the native DOMObject
	 * and initialise it
	 */
	public function new(referenceToNativeDOMObject:Dynamic = null) 
	{
		//store and init the dom object properties
		//with the native dom object if it isn't null
		if (referenceToNativeDOMObject != null)
		{
			this._referenceToNativeDOM = referenceToNativeDOMObject;
			init();
		}
		
		_children = new Array<DOMObjectBase>();
		
		_matrix = new Matrix();
		
		setNativeListeners();
	}
	
	/**
	 * Set the domObject properties which can be retrieved
	 * from the referenceToNativeDom. Called each time
	 * the native dom object is set
	 */
	private function init():Void
	{
		//abstract
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// DOM
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
	public function setParent(domObject:DOMObjectBase):DOMObjectBase
	{
		this._parent = domObject;
		return this._parent;
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
	 * set the reference to this DOMObject native DOM element
	 * @return a DisplayObject in AS, an HTML element in JS, a resource in PHP
	 */
	public function setReferenceToNativeDOM(value:NativeDOMObject):Dynamic
	{
		this._referenceToNativeDOM = value;
		init();
	}
	
	/**
	 * Returns the reference to this DOMObject native DOM element
	 * @return a DisplayObject in AS, an HTML element in JS, a resource in PHP
	 */
	public function getReferenceToNativeDOM():Dynamic
	{
		return _referenceToNativeDOM;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// VISIBILITY/OPACITY
	// Public and private methods to manage the visibility and opacity of the dom object
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Show or hide the native DOM Object. Implemented
	 * by runtime specific sub class
	 * @param	value true if the DOM object must be visible
	 */
	public function setIsVisible(value:Bool):Bool
	{
		return value;
	}
	
	/**
	 * Return wether the DOM object is visible. Implemented
	 * by runtime specific sub class
	 */
	public function getIsVisible():Bool
	{
		return false;
	}
	
	/**
	 * Set the opacity of the DOM object
	 * @param	value from 0 (transparent) to 1 (opaque)
	 */
	public function setAlpha(value:Float):Float
	{
		return value;
	}
	
	/**
	 * return the opacity of the DOM Object, 
	 * from 0 to 1
	 */ 
	public function getAlpha():Float
	{
		return 0;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// TRANSFORMATIONS
	// Public and private methods to transform the dom object and manipulate it's matrix
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Set the transformation matrix of this domObject. Used
	 * by the inheriting runtime specific class to update
	 * their native matrix transformations
	 */
	public function setMatrix(matrix:Matrix):Matrix
	{
		this._matrix = matrix;
		return this._matrix;
	}
	
	/**
	 * Return this domObject matrix
	 */
	public function getMatrix():Matrix
	{
		return this._matrix;
	}
	
	/**
	 * Reset the matrix to an identity matrix (no transformations)
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
	
	/////////////////
	// TRANSLATION
	/////////////////
	
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
	 * Set the absolut x translation instead of adding it to 
	 * the current x translation
	 * @param	translationX the target x translation
	 */
	public function setTranslationX(translationX:Float):Void
	{
		_matrix.setTranslationX(translationX);
		setMatrix(this._matrix);
	}
	
	/**
	 * Return the current x translation
	 * @return
	 */
	public function getTranslationX():Float
	{
		return this._matrix.getTranslationX();
	}
	
	/**
	 * Set the absolut y translation instead of adding it to 
	 * the current y translation
	 * @param	translationX the target y translation
	 */
	public function setTranslationY(translationY:Float):Void
	{
		_matrix.setTranslationY(translationY);
		setMatrix(this._matrix);
	}
	
	/**
	 * Return the current y translation
	 * @return
	 */
	public function getTranslationY():Float
	{
		return this._matrix.getTranslationY();
	}
	
	/////////////////
	// ROTATION
	/////////////////
	
	/**
	 * Rotate the domObject with the given angle using the transformationOrigin as pivot point
	 * @param	angle the rotation angle, in degree
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
		
		_matrix.setRotation(angle, getTransformationOriginPoint(transformationOrigin));
		setMatrix(this._matrix);
	}
	
	/**
	 * Return the current rotation angle in deg
	 * @return an Int from 0 to 360
	 */
	public function getRotation():Int { 
		return _matrix.getRotation();
	}
	
	/////////////////
	// SCALING
	/////////////////
	
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
	 * set the absolut x scale of the domObject instead of adding it to the current scale
	 * @param	scaleX the target x scale
	 * @param	transformationOrigin the scale center
	 */
	public function setScaleX(scaleX:Float, transformationOrigin:TransformationOriginValue):Void
	{
		_matrix.setScaleX(scaleX, getTransformationOriginPoint(transformationOrigin));
		setMatrix(this._matrix);
	}
	
	/**
	 * Return the current x scale
	 * @return a float, 1 corresponds to no x scale
	 */
	public function getScaleX():Float { 
		return _matrix.getScaleX();
	}
	
	/**
	 * set the absolut y scale of the domObject instead of adding it to the current scale
	 * @param	scaleX the target y scale
	 * @param	transformationOrigin the scale center
	 */
	public function setScaleY(scaleY:Float, transformationOrigin:TransformationOriginValue):Void
	{
		_matrix.setScaleY(scaleY, getTransformationOriginPoint(transformationOrigin));
		setMatrix(this._matrix);
	}
	
	/**
	 * Return the current y scale
	 * @return a float, 1 corresponds to no y scale
	 */
	public function getScaleY():Float { 
		return _matrix.getScaleY();
	}
	
	/////////////////
	// SKEWING
	/////////////////
	
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
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// DOM SETTER/GETTER
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
	// EVENTS
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
	// POSITIONING SETTERS/GETTERS
	// Setters/Getters to manipulate a native DOMObject positioning in the publication
	//////////////////////////////////////////////////////////////////////////////////////////
	
	public function setX(value:Int):Int 
	{
		this._x = value;
		return this._x;
	}
	
	public function getX():Int 
	{ 
		return this._x; 
	}
	
	public function setY(value:Int):Int
	{
		this._y = value;
		return this._y;
	}
	
	public function getY():Int 
	{ 
		return this._y; 
	}
	
	public function setWidth(value:Int):Int
	{
		this._width = value;
		return this._width;
	}
	
	public function getWidth():Int 
	{ 
		return this._width; 
	}
	
	public function setHeight(value:Int):Int
	{
		this._height = value;
		return this._height;
	}
	
	public function getHeight():Int 
	{ 
		return this._height;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Z-INDEX SETTER/GETTER
	// Setter/Getter to manipulate a native DOMObject z order in the publication
	//////////////////////////////////////////////////////////////////////////////////////////
	
	public function setZOrder(value:Int):Int 
	{
		return value;
	}
	
	public function getZOrder():Int 
	{
		return 0;
	}
}