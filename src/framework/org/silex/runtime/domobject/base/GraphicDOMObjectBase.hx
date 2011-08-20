/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.domobject.base;

import org.silex.runtime.domobject.DOMObject;
import org.silex.runtime.domobject.DOMObjectData;

/**
 * The graphic DOMObject is used as a canvas to draw bitmap graphics programmatically. 
 * 
 * It is an abstraction of Flash and JavaScript respective drawing APIs. 
 * It was at first considered to only have a drawing API in the runtime
 * package which could have been leveraged by each of the DOMObjects,
 * but unlike Flash where every Sprite can be used to draw graphics,
 * in HTML graphics can only be drawn on a canvas element. As a result, 
 * drawing is only available on the graphics DOMObject as in HTML
 * we need to make sure that the native DOM element is a canvas.
 * 
 * @author Yannick DOMINGUEZ
 */
class GraphicDOMObjectBase extends DOMObject
{

	/**
	 * class constructor
	 */
	public function new(referenceToNativeDOMObject:Dynamic) 
	{
		super(referenceToNativeDOMObject);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden hierarchy methods
	// The addChild and removeChild method are not implemented for this 
	// DOMObject, as it is a leaf DOMObject (can't have children)
	//////////////////////////////////////////////////////////////////////////////////////////
	
	override public function addChild(domObject:DOMObjectBase):Void
	{
		
	}
	
	override public function removeChild(domObject:DOMObjectBase):Void
	{
		
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Public drawing API
	//////////////////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Controls the fill
	// methods to init/end/clear the fill
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Starts a  fill used when drawing a shape with subsequent calls to lineTo,
	 * moveTo or curveTo. The fill remain in effect until endFill  
	 * is called. Clears the current fill.
	 * @param	fillStyle the data used to draw the fill
	 * @param	lineStyle the data used to draw the fill stroke/line
	 */
	public function beginFill(fillStyle:FillStyleValue, lineStyle:LineStyleValue):Void
	{
		clear();
	}
	
	/**
	 * Ends a fill started with beginFill and draw the shape and line defined by the path formed by the 
	 * linetTo, moveTo and curveTo methods onto the graphical container.
	 */
	public function endFill():Void
	{
		//abstract
	}
	
	/**
	 * Clears the current shape and line of the graphic DOMObject.
	 */
	public function clear():Void
	{
		//abstract
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// High level drawing methods
	// Leverage the native low level drawing APIs
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * High level method to draw a rectangle which may have rounded corners. 
	 * Needs to be called after beginFill or beginGradientFill was called.
	 * @param	x the left point of the rectangle
	 * @param	y the top point of the rectangle
	 * @param	width the width of the rectangle
	 * @param	height the height of the rectangle
	 * @param	cornerRadiuses the corner radiuses values of the rectangle
	 */
	public function drawRect(x:Int, y:Int, width:Int, height:Int, cornerRadiuses:CornerRadiusData):Void
	{
		moveTo(cornerRadiuses.tlCornerRadius, 0);
		lineTo(width - cornerRadiuses.trCornerRadius , 0);
	
	
		curveTo(width, 0, width , cornerRadiuses.trCornerRadius  );
		
		lineTo(width , cornerRadiuses.trCornerRadius );
		lineTo(width , height - cornerRadiuses.brCornerRadius);
		curveTo(width , height , width - cornerRadiuses.brCornerRadius , height );
		lineTo(width - cornerRadiuses.brCornerRadius , height );
		lineTo(cornerRadiuses.blCornerRadius , height );
		curveTo(0, height , 0, height - cornerRadiuses.blCornerRadius );
		lineTo(0, height - cornerRadiuses.blCornerRadius );
		lineTo(0, cornerRadiuses.tlCornerRadius );
		curveTo(0,0, cornerRadiuses.tlCornerRadius , 0);
		lineTo(cornerRadiuses.tlCornerRadius , 0);
	}
	
	/**
	 * High level method to draw an ellipse or circle. 
	 * Needs to be called after beginFill or beginGradientFill was called.
	 * width and height must be equal to draw a circle.
	 * @param	x the left point of the ellipse
	 * @param	y the top point of the ellipse
	 * @param	width the width of the ellipse
	 * @param	height the height of ellipse
	 */
	public function drawEllipse(x:Int, y:Int, width:Int, height:Int):Void
	{
		var xRadius:Float = width / 2;
		var yRadius:Float = height / 2;
		
		var xCenter:Float = (width / 2) + x  ;
		var yCenter:Float = (height /2) + y ;
		
		var angleDelta:Float = Math.PI / 4;
		var xCtrlDist:Float = xRadius/Math.cos(angleDelta/2);
		var yCtrlDist:Float = yRadius/Math.cos(angleDelta/2);
		
		
		moveTo(xCenter + xRadius, yCenter);
		var angle:Float = 0;
		
		var rx, ry, ax, ay;
		
		for (i in 0...8) {
		angle += angleDelta;
		rx = xCenter + Math.cos(angle-(angleDelta/2))*(xCtrlDist);
		ry = yCenter + Math.sin(angle-(angleDelta/2))*(yCtrlDist);
		ax = xCenter + Math.cos(angle)*xRadius;
		ay = yCenter + Math.sin(angle)*yRadius;
		curveTo(rx, ry, ax, ay);
		}
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Low level drawing methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Draws a line from current drawing point to point to point x,y. 
	 * If a linestyle is defined for this Graphic DOMObject, draw a line with the current 
	 * linestyle from current point to point x,y. The current position becomes point x,y.
	 * @param	x target point x
	 * @param	y target point y
	 */
	public function lineTo(x:Float, y:Float):Void
	{
		//abstract
	}
	
	/**
	 * Moves the current drawing point to position x,y without drawing a line.
	 * @param	x target point x
	 * @param	y target point y
	 */
	public function moveTo(x:Float, y:Float):Void
	{
		//abstract
	}
	
	/**
	 * Draws a curve from current drawing point to point x,y using the 
	 * controlX,controlY as control point. The curve drawn is a quadratic
	 * bezier curve
	 * @param	controlX
	 * @param	controlY
	 * @param	x
	 * @param	y
	 */
	public function curveTo(controlX:Float, controlY:Float, x:Float, y:Float):Void
	{
		//abstract
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Utils conversion methods
	// used to convert generic graphic data to specific runtime
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Converts the generic alpha value to a runtime 
	 * specific one
	 * @return returns a dynamic as it may be a float
	 */
	private function toNativeAlpha(genericAlpa:Int):Dynamic
	{
		//abstract
	}
	
	/**
	 * Converts the generic color value to a runtime specifc
	 * one
	 * @return return a dynamic as color can be represented as a String
	 */
	private function toNativeColor(genericColor:Int):Dynamic
	{
		//abstract
	}
	
	/**
	 * Converts the generic gradient ratio value to a runtime 
	 * specific one
	 * @return a dynamic, as it may be a float
	 */
	private function toNativeRatio(genericRatio:Int):Dynamic
	{
		//abstract
	}
	
	/**
	 * Converts the generic cap style value to a runtime
	 * specific one
	 * @return a dynamic, as it may be an enum or string
	 */
	private function toNativeCapStyle(genericCapStyle:CapsStyleValue):Dynamic
	{
		//abstract
	}
	
	/**
	 * Converts a generic joint style value to a runtime 
	 * specific one
	 * @return a dynamic, as it may be an enum or string
	 */
	private function toNativeJointStyle(genericJointStyle:JointStyleValue):Dynamic
	{
		//abstract
	}
	
	
}