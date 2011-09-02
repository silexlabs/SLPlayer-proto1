/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.domObject.as3;

import flash.display.BitmapData;
import flash.display.CapsStyle;
import flash.display.DisplayObjectContainer;
import flash.display.GradientType;
import flash.display.JointStyle;
import flash.display.LineScaleMode;
import flash.display.Sprite;
import flash.geom.Matrix;
import haxe.Log;
import org.silex.runtime.domObject.base.GraphicDOMObjectBase;
import org.silex.runtime.domObject.DOMObjectData;

/**
 * This is the Flash AVM2 implementation of the graphic DOMObject.
 * It draws shape programatically onto a native Sprite object
 * @author Yannick DOMINGUEZ
 */
class GraphicDOMObject extends GraphicDOMObjectBase
{
	/**
	 * A transparent clip used to give a width and height
	 * to the DOMObject. 
	 */
	private var _backGroundSprite:Sprite;
	
	/**
	 * Cast the native DOM as a sprite to access the 
	 * graphics object
	 */
	private var _typedReferenceToNativeDOM:Sprite;
	
	/**
	 * class constructor. Init the background Sprite with
	 * a default width and height
	 */
	public function new(referenceToNativeDOMObject:DisplayObjectContainer = null) 
	{
		//add a canvas Sprite if none is provided
		if (referenceToNativeDOMObject == null)
		{
			referenceToNativeDOMObject = new Sprite();
		}
		
		super(referenceToNativeDOMObject);
		
		
		_typedReferenceToNativeDOM = cast(referenceToNativeDOMObject);
		
		_backGroundSprite = new Sprite();
		referenceToNativeDOMObject.addChild(_backGroundSprite);
		setUpBackgroundSprite(_backGroundSprite, 100, 100);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden getter/setter
	// The width and height setter/getter are overriden. In Flash, the with and height
	// will depend on a transparent backgrounfd Sprite, it will allow to draw graphics
	// smaller than the whole graphic DOMObject. The background Sprite will also
	// acts as a mask, to clip the graphics
	//////////////////////////////////////////////////////////////////////////////////////////
	
	override public function setWidth(value:Int):Int
	{
		setUpBackgroundSprite(this._backGroundSprite, value, getHeight());
		return value;
	}
	
	override public function getWidth():Int 
	{
		return Math.round(_backGroundSprite.width);
	}
	
	override public function setHeight(value:Int):Int 
	{
		setUpBackgroundSprite(this._backGroundSprite, getWidth(), value);
		return value;
	}
	
	override public function getHeight():Int 
	{
		return Math.round(this._backGroundSprite.height);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden fill control methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Set the native Sprite fill style and line style
	 * @param	fillStyle
	 * @param	lineStyle
	 */
	override public function beginFill(fillStyle:FillStyleValue, lineStyle:LineStyleValue):Void
	{
		super.beginFill(fillStyle, lineStyle);
		
		//set fill style
		setFillStyle(fillStyle);
		
		//set line style
		setLineStyle(lineStyle);
	}
	
	/**
	 * Ends a fill on the native Sprite's graphic object
	 */
	override public function endFill():Void
	{
		_typedReferenceToNativeDOM.graphics.endFill();
	}
	
	/**
	 * Clears the native sprite fill and stroke and reset the
	 * fill style and line style
	 */
	override public function clear():Void
	{
		_typedReferenceToNativeDOM.graphics.clear();
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Private fill control methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Do set the fill style on the Sprite
	 * @param	fillStyle
	 */
	private function setFillStyle(fillStyle:FillStyleValue):Void
	{
		switch(fillStyle)
		{
			//if there must be no fill style (probably only a stroke style)
			//start a transparent fill
			case none:
				_typedReferenceToNativeDOM.graphics.beginFill(0,0);
			
			//for a fill style with one color, use the native beginFill method
			case monochrome(colorStop):
				_typedReferenceToNativeDOM.graphics.beginFill(colorStop.color, toNativeAlpha(colorStop.alpha));
			
			//for a gradient fill, use the beginGradientFill native method
			case gradient(gradientStyle):
				
				_typedReferenceToNativeDOM.graphics.beginGradientFill(
					getGradientType(gradientStyle.gradientType),
					getGradientColors(gradientStyle.gradientStops),
					getGradientAlphas(gradientStyle.gradientStops),
					getGradientRatios(gradientStyle.gradientStops),
					getGradientBox(gradientStyle)
				);
		
			//for a bitmap fill, use the natvie beginBitmapFill method, using
			//an ImageDOMObject as source for the bitmap data
			case bitmap(imageDOMObject, repeat):
				_typedReferenceToNativeDOM.graphics.beginBitmapFill(getBitmapData(imageDOMObject), new Matrix(), repeat);
		}	
	}
	
	/**
	 * Do set the lineStyle on the Sprite
	 * @param	lineStyle
	 */
	private function setLineStyle(lineStyle:LineStyleValue):Void
	{
		switch(lineStyle)
		{
			//if there must be no line (probably just a fill instead), do nothing
			case none:
				
			
			//if there must be a one-color line, use the native lineStyle method
			case monochrome(colorStop, lineStyleData):
				//set the line style
				_typedReferenceToNativeDOM.graphics.lineStyle(
					lineStyleData.thickness,
					colorStop.color,
					toNativeAlpha(colorStop.alpha),
					true,
					LineScaleMode.NORMAL,
					toNativeCapStyle(lineStyleData.capStyle),
					toNativeJointStyle(lineStyleData.jointStyle),
					lineStyleData.miterLimit);			
			
			//for a gradient line, 	use the native lineGradientStyle method	
			case gradient(gradientStyle, lineStyleData):
				
				//set first the line style so that the line is visible	
				_typedReferenceToNativeDOM.graphics.lineStyle(
					lineStyleData.thickness,
					0,
					1,
					true,
					LineScaleMode.NONE,
					toNativeCapStyle(lineStyleData.capStyle),
					toNativeJointStyle(lineStyleData.jointStyle),
					lineStyleData.miterLimit);
					
				

				_typedReferenceToNativeDOM.graphics.lineGradientStyle(
					getGradientType(gradientStyle.gradientType),
					getGradientColors(gradientStyle.gradientStops),
					getGradientAlphas(gradientStyle.gradientStops), 
					getGradientRatios(gradientStyle.gradientStops),
					getGradientBox(gradientStyle)
				);
			
			//for a bitmap line style, use a ImageDOMObject as the source
			//for the BitmapData. The line style must also be set before
			//setting the bitmap data on the line
			case bitmap(imageDOMObject, lineStyleData, repeat):
				//set first the line style so that the line is visible	
				_typedReferenceToNativeDOM.graphics.lineStyle(
					lineStyleData.thickness,
					0,
					1,
					true,
					LineScaleMode.NONE,
					toNativeCapStyle(lineStyleData.capStyle),
					toNativeJointStyle(lineStyleData.jointStyle),
					lineStyleData.miterLimit);
				
				//then set the bitmap data on it
				_typedReferenceToNativeDOM.graphics.lineBitmapStyle(getBitmapData(imageDOMObject), new Matrix(), repeat);
		}
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden low level drawing methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Use the native Flash lineTo method
	 */
	override public function lineTo(x:Float, y:Float):Void
	{
		_typedReferenceToNativeDOM.graphics.lineTo(x, y);
	}
	
	/**
	 * Use the native Flash moveTo method
	 */
	override public function moveTo(x:Float, y:Float):Void
	{
		_typedReferenceToNativeDOM.graphics.moveTo(x, y);
	}
	
	/**
	 * Use the native Flash curveTo method
	 */
	override public function curveTo(controlX:Float, controlY:Float, x:Float, y:Float):Void
	{
		_typedReferenceToNativeDOM.graphics.curveTo(controlX, controlY, x, y);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden utils conversion methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * In Flash AVM2, alpha values range from 0 to 1
	 */
	override private function toNativeAlpha(genericAlpha:Int):Dynamic
	{
		return genericAlpha * 0.01;
	}
	
	/**
	 * In Flash AVM2, ratio values range from 0 to 255
	 */
	override private function toNativeRatio(genericRatio:Int):Dynamic
	{
		if (genericRatio == 0)
		{
			return 0;
		}
		return Math.round((255 / genericRatio) * 100);
	}
	
	/**
	 * In Flash AVM2, the caps styles values are wrapped as a fake enum
	 * @return a fake enum value (converted to string at compile time)
	 */
	override private function toNativeCapStyle(genericCapStyle:CapsStyleValue):Dynamic
	{
		var capStyle:CapsStyle = CapsStyle.ROUND;
				
		switch(genericCapStyle)
		{
			case round:
				capStyle = CapsStyle.ROUND;
			
			case square:
				capStyle = CapsStyle.SQUARE;
			
			case none:
				capStyle = CapsStyle.NONE;
		}
		
		return capStyle;
	}
	
	/**
	 * In Flash AVM2, the joint styles values are wrapped as a fake enum
	 * @return a fake enum value (converted to string at compile time)
	 */
	override private function toNativeJointStyle(genericJointStyle:JointStyleValue):Dynamic
	{
		var jointStyle:JointStyle = JointStyle.BEVEL;
				
		switch(genericJointStyle)
		{
			case miter:
				jointStyle = JointStyle.MITER;
			
			case round:
				jointStyle = JointStyle.ROUND;
				
			case bevel:
				jointStyle = JointStyle.BEVEL;
		}
		
		return jointStyle;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Utils methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Converts the generic type of Gradient (linear, radial) to a Flash
	 * specific one
	 * @return a strongly typed Flash gradient value
	 */
	private function getGradientType(genericGradientType:GradientTypeValue):GradientType
	{
		var gradientType:GradientType = LINEAR;
				
			switch(genericGradientType)
			{
				case linear:
					gradientType =  GradientType.LINEAR;
					
				case radial:
					gradientType = GradientType.RADIAL;
			}
				
		return gradientType;	
	}
	
	/**
	 * Get the bitmap data from an ImageDOMObject
	 * @param	imageDOMObject contains a Sprite containing a bitmap
	 * @return a bitmap data using the DOMObject sprite as it's source
	 */
	private function getBitmapData(imageDOMObject:DOMObject):BitmapData
	{
		var bitmapData:BitmapData = new BitmapData(imageDOMObject.width, imageDOMObject.height, true);
		bitmapData.draw(imageDOMObject.getReferenceToNativeDOM());
		
		return bitmapData;
	}
	
	/**
	 * Get the colors from the gradient stops data
	 * @param	gradientStops contains all the gradient data
	 * @return an array of color
	 */
	private function getGradientColors(gradientStops:Array<GradientStopData>):Array<Int>
	{
		var ret:Array<Int> = new Array<Int>();
		
		for (i in 0...gradientStops.length)
		{
			ret[i] = gradientStops[i].colorStop.color;
		}
		
		return ret;
	}
	
	/**
	 * Get all the alphas of the color of gradient stops
	 * @param	gradientStops contains all the gradient data
	 * @return an array of alpha (from 0 to 1)
	 */
	private function getGradientAlphas(gradientStops:Array<GradientStopData>):Array<Float>
	{
		var ret:Array<Float> = new Array<Float>();
		
		for (i in 0...gradientStops.length)
		{
			ret[i] = toNativeAlpha(gradientStops[i].colorStop.alpha);
		}
		
		return ret;
	}
	
	/**
	 * Get all the ratio of the colors of the gradient stop
	 * @param	gradientStops contains all the gradient data
	 * @return an array of ratio (from 0 to 255)
	 */
	private function getGradientRatios(gradientStops:Array<GradientStopData>):Array<Int>
	{
		var ret:Array<Int> = new Array<Int>();
		
		for (i in 0...gradientStops.length)
		{
			ret[i] = toNativeRatio(gradientStops[i].ratio);
		}
		return ret;
	}
	
	/**
	 * fill the background flash sprite with a transparent fill, this sprite becomes
	 * the actual with and height of this DOMObject. Set it as the mask of the native
	 * DOMObject used to draw the graphics, to clip the graphics
	 */
	private function setUpBackgroundSprite(sprite:Sprite, width:Int, height:Int):Void
	{
		sprite.graphics.clear();
		sprite.graphics.beginFill(0, 0);
		sprite.graphics.drawRect(0, 0, width, height);
		sprite.graphics.endFill();
		
		this._referenceToNativeDOM.mask = _backGroundSprite;
	}
	
	/**
	 * create and return a gradient box corresponding to the size of the
	 * whole DOMObject
	 */
	private function getGradientBox(gradientStyle:GradientStyleData):Matrix
	{
		var gradientBox:Matrix = new Matrix();
		gradientBox.createGradientBox(this.getWidth(), this.getHeight(), gradientStyle.rotation / 180 * Math.PI);
		return gradientBox;
	}
}