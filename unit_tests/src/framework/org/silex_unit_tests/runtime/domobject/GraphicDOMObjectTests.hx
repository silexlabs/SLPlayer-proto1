/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/

package org.silex_unit_tests.runtime.domobject;

/**
 * Units tests for Graphic DOMObjects
 * @author Yannick DOMINGUEZ
 */

import haxe.Log;
import org.silex.runtime.domobject.base.DOMObjectBase;
import org.silex.runtime.domobject.DOMObject;
import org.silex.runtime.domobject.ImageDOMObject;
import org.silex.runtime.resource.ResourceLoaderManager;
import utest.Assert;
import utest.Runner;
import utest.ui.Report;
import utest.ui.common.HeaderDisplayMode;

import org.silex.runtime.domobject.GraphicDOMObject;
import org.silex.runtime.domobject.DOMObjectData;

class GraphicDOMObjectTests 
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
		
		var runner = new Runner();
		runner.addCase(new GraphicDOMObjectTests());
		Report.create(runner, NeverShowSuccessResults, NeverShowHeader);
		runner.run();
	}
	
	public function new() 
	{
	}
	
	/**
	 * drawn a one color rectangle
	 */
	public function testDrawRectangle()
	{
		#if flash9
		var nativeDOMObject = new flash.display.Sprite();
		#elseif js
		var nativeDOMObject = js.Lib.document.createElement("canvas");
		#end
		
		var graphicDOMObject:GraphicDOMObject = new GraphicDOMObject(nativeDOMObject);
		
		graphicDOMObject.setWidth(200);
		graphicDOMObject.setHeight(200);
		graphicDOMObject.setX(0);
		graphicDOMObject.setY(0);
		
		var colorStop:ColorStopData = { color:Std.parseInt("0xFF0000") , alpha:100 };
		var fillStyle:FillStyleValue = monochrome(colorStop);
		
		var lineStyle:LineStyleValue = LineStyleValue.none;
		
		graphicDOMObject.beginFill(fillStyle, lineStyle);
		
		var cornerRadiuses:CornerRadiusData = {
			tlCornerRadius:10,
			trCornerRadius:0,
			blCornerRadius:20,
			brCornerRadius:0
		}
		
		
		graphicDOMObject.drawRect(0, 0, 100, 100, cornerRadiuses);
		graphicDOMObject.endFill();
		
		DOMObjectBase.rootDOMObject.addChild(graphicDOMObject);
		
		Assert.equals(1, 1);
	}
	
	/**
	 * draw a linear gradient rectangle
	 */
	public function testDrawLinearGradientRectangle()
	{
		#if flash9
		var nativeDOMObject = new flash.display.Sprite();
		#elseif js
		var nativeDOMObject = js.Lib.document.createElement("canvas");
		#end
		
		var graphicDOMObject:GraphicDOMObject = new GraphicDOMObject(nativeDOMObject);
		
		graphicDOMObject.setWidth(100);
		graphicDOMObject.setHeight(100);
		graphicDOMObject.setX(200);
		graphicDOMObject.setY(0);
		
		var cornerRadiuses:CornerRadiusData = {
			tlCornerRadius:0,
			trCornerRadius:0,
			blCornerRadius:0,
			brCornerRadius:0
		}
		
		var colorStop:ColorStopData = { color:Std.parseInt("0xFF0000") , alpha:100 };
		
		var gradientStops:Array<GradientStopData> = [];
		gradientStops.push( { colorStop: { color:Std.parseInt("0xFF0000"), alpha:100 }, ratio:0 } );
		gradientStops.push( { colorStop: { color:Std.parseInt("0x00FF00"), alpha:100 }, ratio:100 } );
		
		var gradientStyle:GradientStyleData = {
			gradientType:linear,
			gradientStops:gradientStops,
			rotation:85		}
	
		var lineStyle:LineStyleValue = LineStyleValue.none;
		
		var fillStyle:FillStyleValue = gradient(gradientStyle);
		
		
		
		graphicDOMObject.beginFill(fillStyle, lineStyle);
		
		graphicDOMObject.drawRect(0, 0, 100, 100, cornerRadiuses);
		graphicDOMObject.endFill();
		
		DOMObjectBase.rootDOMObject.addChild(graphicDOMObject);
		
		Assert.equals(1, 1);
	}
	
	/**
	 * draw a bitmap rectangle
	 */
	public function testDrawBitmapRectangle()
	{
		ResourceLoaderManager.loadImage("../resource/testPicture.jpg", onImageLoaded, function(msg:String) { } ); 
		
		Assert.equals(1, 1);
	}
	
	private function onImageLoaded(imageDOMObject:ImageDOMObject)
	{
		#if flash9
		var nativeDOMObject = new flash.display.Sprite();
		#elseif js
		var nativeDOMObject = js.Lib.document.createElement("canvas");
		#end
		
		var graphicDOMObject:GraphicDOMObject = new GraphicDOMObject(nativeDOMObject);
		
		graphicDOMObject.setWidth(100);
		graphicDOMObject.setHeight(100);
		graphicDOMObject.setX(400);
		graphicDOMObject.setY(0);
		
		var cornerRadiuses:CornerRadiusData = {
			tlCornerRadius:0,
			trCornerRadius:0,
			blCornerRadius:0,
			brCornerRadius:0
		}
		
		var fillStyle:FillStyleValue = bitmap(imageDOMObject, true);
		
		var lineStyle:LineStyleValue = LineStyleValue.none;
		
		graphicDOMObject.beginFill(fillStyle, lineStyle);
		
		graphicDOMObject.drawRect(0, 0, 100, 100, cornerRadiuses);
		graphicDOMObject.endFill();
		
		DOMObjectBase.rootDOMObject.addChild(graphicDOMObject);
		
		
	}
	
	/**
	 * draw a rectangular stroke
	 */
	public function testDrawRectangleStroke()
	{
		#if flash9
		var nativeDOMObject = new flash.display.Sprite();
		#elseif js
		var nativeDOMObject = js.Lib.document.createElement("canvas");
		#end
		
		var graphicDOMObject:GraphicDOMObject = new GraphicDOMObject(nativeDOMObject);
		
		graphicDOMObject.setWidth(100);
		graphicDOMObject.setHeight(100);
		graphicDOMObject.setX(600);
		graphicDOMObject.setY(0);
		
		var cornerRadiuses:CornerRadiusData = {
			tlCornerRadius:0,
			trCornerRadius:0,
			blCornerRadius:0,
			brCornerRadius:0
		}
		
		

		var colorStop:ColorStopData = { color:Std.parseInt("0xFF0000"), alpha:100 };
		
		var lineStyleData:LineStyleData = {
			thickness:20,
			capStyle:round,
			jointStyle:JointStyleValue.round,
			miterLimit:10
		}
		var lineStyle:LineStyleValue = LineStyleValue.monochrome(colorStop, lineStyleData);
		
		var fillStyle:FillStyleValue = none;
		
		
		
		graphicDOMObject.beginFill(fillStyle, lineStyle);
		
		graphicDOMObject.drawRect(0, 0, 100, 100, cornerRadiuses);
		graphicDOMObject.endFill();
		
		DOMObjectBase.rootDOMObject.addChild(graphicDOMObject);
		
		Assert.equals(1, 1);
	}
	
	/**
	 * draw a rectangular gradient stroke
	 */
	public function testDrawRectangleGradientStroke()
	{
		#if flash9
		var nativeDOMObject = new flash.display.Sprite();
		#elseif js
		var nativeDOMObject = js.Lib.document.createElement("canvas");
		#end
		
		var graphicDOMObject:GraphicDOMObject = new GraphicDOMObject(nativeDOMObject);
		
		graphicDOMObject.setWidth(100);
		graphicDOMObject.setHeight(100);
		graphicDOMObject.setX(0);
		graphicDOMObject.setY(100);
		
		var cornerRadiuses:CornerRadiusData = {
			tlCornerRadius:0,
			trCornerRadius:0,
			blCornerRadius:0,
			brCornerRadius:0
		}
		
		
		var gradientStops:Array<GradientStopData> = [];
		gradientStops.push( { colorStop: { color:Std.parseInt("0xFF0000"), alpha:100 }, ratio:0 } );
		gradientStops.push( { colorStop: { color:Std.parseInt("0x00FF00"), alpha:100 }, ratio:100 } );
		
		var gradientStyle:GradientStyleData = {
			gradientType:linear,
			gradientStops:gradientStops,
			rotation:0
		}
		
		var lineStyleData:LineStyleData = {
			thickness:20,
			capStyle:round,
			jointStyle:JointStyleValue.round,
			miterLimit:10
		}
		var lineStyle:LineStyleValue = LineStyleValue.gradient(gradientStyle, lineStyleData);
		
		var fillStyle:FillStyleValue = none;
		
		
		
		graphicDOMObject.beginFill(fillStyle, lineStyle);
		
		graphicDOMObject.drawRect(0, 0, 100, 100, cornerRadiuses);
		graphicDOMObject.endFill();
		
		DOMObjectBase.rootDOMObject.addChild(graphicDOMObject);
		
		Assert.equals(1, 1);
	}
	
	/**
	 * draw a bitmap rectangular stroke
	 */
	public function testDrawBitmapRectangleStroke()
	{
		ResourceLoaderManager.loadImage("../resource/testPicture.jpg", onStrokeImageLoaded, function(msg:String) { } ); 
		Assert.equals(1, 1);
	}
	
	private function onStrokeImageLoaded(imageDOMObject:ImageDOMObject)
	{
		#if flash9
		var nativeDOMObject = new flash.display.Sprite();
		#elseif js
		var nativeDOMObject = js.Lib.document.createElement("canvas");
		#end
		
		var graphicDOMObject:GraphicDOMObject = new GraphicDOMObject(nativeDOMObject);
		
		graphicDOMObject.setWidth(100);
		graphicDOMObject.setHeight(100);
		graphicDOMObject.setX(400);
		graphicDOMObject.setY(100);
		
		var cornerRadiuses:CornerRadiusData = {
			tlCornerRadius:0,
			trCornerRadius:0,
			blCornerRadius:0,
			brCornerRadius:0
		}
		
		var fillStyle:FillStyleValue = none;
		
		var lineStyleData:LineStyleData = {
			thickness:20,
			capStyle:round,
			jointStyle:JointStyleValue.round,
			miterLimit:10
		}
		
		var lineStyle:LineStyleValue = LineStyleValue.bitmap(imageDOMObject, lineStyleData, true) ;
		
		graphicDOMObject.beginFill(fillStyle, lineStyle);
		
		graphicDOMObject.drawRect(0, 0, 100, 100, cornerRadiuses);
		graphicDOMObject.endFill();
		
		DOMObjectBase.rootDOMObject.addChild(graphicDOMObject);
	}
	
	/**
	 * draw a complex shape
	 */ 
	public function testDrawShape()
	{
		#if flash9
		var nativeDOMObject = new flash.display.Sprite();
		#elseif js
		var nativeDOMObject = js.Lib.document.createElement("canvas");
		#end
		
		var graphicDOMObject:GraphicDOMObject = new GraphicDOMObject(nativeDOMObject);
		
		graphicDOMObject.setWidth(100);
		graphicDOMObject.setHeight(100);
		graphicDOMObject.setX(300);
		graphicDOMObject.setY(100);
		
		var cornerRadiuses:CornerRadiusData = {
			tlCornerRadius:0,
			trCornerRadius:0,
			blCornerRadius:0,
			brCornerRadius:0
		}
		
		
		var gradientStops:Array<GradientStopData> = [];
		gradientStops.push( { colorStop: { color:Std.parseInt("0xFF0000"), alpha:100 }, ratio:0 } );
		gradientStops.push( { colorStop: { color:Std.parseInt("0x00FF00"), alpha:100 }, ratio:100 } );
		
		var gradientStyle:GradientStyleData = {
			gradientType:linear,
			gradientStops:gradientStops,
			rotation:0
		}
		
		var lineStyleData:LineStyleData = {
			thickness:2,
			capStyle:round,
			jointStyle:JointStyleValue.round,
			miterLimit:10
		}
		var lineStyle:LineStyleValue = LineStyleValue.gradient(gradientStyle, lineStyleData);
		
		var fillStyle:FillStyleValue = FillStyleValue.monochrome({ color:Std.parseInt("0xDDDDDD"), alpha:100 }) ;
		
		
		
		graphicDOMObject.beginFill(fillStyle, lineStyle);
		
		graphicDOMObject.moveTo(10, 10);
		graphicDOMObject.lineTo(20, 10);
		graphicDOMObject.curveTo(40, 20, 60, 10);
		graphicDOMObject.lineTo(0, 0);
		graphicDOMObject.endFill();
		
		DOMObjectBase.rootDOMObject.addChild(graphicDOMObject);
		
		Assert.equals(1, 1);
	}
	
	/**
	 * draw an ellipse
	 */
	public function testDrawEllipse()
	{
		#if flash9
		var nativeDOMObject = new flash.display.Sprite();
		#elseif js
		var nativeDOMObject = js.Lib.document.createElement("canvas");
		#end
		
		var graphicDOMObject:GraphicDOMObject = new GraphicDOMObject(nativeDOMObject);
		
		graphicDOMObject.setWidth(100);
		graphicDOMObject.setHeight(100);
		graphicDOMObject.setX(150);
		graphicDOMObject.setY(100);
		
		var cornerRadiuses:CornerRadiusData = {
			tlCornerRadius:0,
			trCornerRadius:0,
			blCornerRadius:0,
			brCornerRadius:0
		}
		
		
		var gradientStops:Array<GradientStopData> = [];
		gradientStops.push( { colorStop: { color:Std.parseInt("0xFF0000"), alpha:100 }, ratio:0 } );
		gradientStops.push( { colorStop: { color:Std.parseInt("0x00FF00"), alpha:100 }, ratio:100 } );
		
		var gradientStyle:GradientStyleData = {
			gradientType:linear,
			gradientStops:gradientStops,
			rotation:0
		}
		
		var lineStyleData:LineStyleData = {
			thickness:2,
			capStyle:round,
			jointStyle:JointStyleValue.round,
			miterLimit:10
		}
		var lineStyle:LineStyleValue = LineStyleValue.gradient(gradientStyle, lineStyleData);
		
		var fillStyle:FillStyleValue = FillStyleValue.monochrome({ color:Std.parseInt("0xDDDDDD"), alpha:100 }) ;
		
		
		
		graphicDOMObject.beginFill(fillStyle, lineStyle);
		
		graphicDOMObject.drawEllipse(0, 0, 100, 100);
		graphicDOMObject.endFill();
		
		DOMObjectBase.rootDOMObject.addChild(graphicDOMObject);
		
		Assert.equals(1, 1);
	}
	
	/**
	 * draw a linear gradient rectangle
	 */
	public function testDrawRadialGradientRectangle()
	{
		#if flash9
		var nativeDOMObject = new flash.display.Sprite();
		#elseif js
		var nativeDOMObject = js.Lib.document.createElement("canvas");
		#end
		
		var graphicDOMObject:GraphicDOMObject = new GraphicDOMObject(nativeDOMObject);
		
		graphicDOMObject.setWidth(100);
		graphicDOMObject.setHeight(100);
		graphicDOMObject.setX(200);
		graphicDOMObject.setY(200);
		
		var cornerRadiuses:CornerRadiusData = {
			tlCornerRadius:0,
			trCornerRadius:0,
			blCornerRadius:0,
			brCornerRadius:0
		}
		
		var colorStop:ColorStopData = { color:Std.parseInt("0xFF0000") , alpha:100 };
		
		var gradientStops:Array<GradientStopData> = [];
		gradientStops.push( { colorStop: { color:Std.parseInt("0xFF0000"), alpha:100 }, ratio:0 } );
		gradientStops.push( { colorStop: { color:Std.parseInt("0x00FF00"), alpha:100 }, ratio:100 } );
		
		var gradientStyle:GradientStyleData = {
			gradientType:radial,
			gradientStops:gradientStops,
			rotation:0
		}
	
		var lineStyle:LineStyleValue = LineStyleValue.none;
		
		var fillStyle:FillStyleValue = gradient(gradientStyle);
		
		
		
		graphicDOMObject.beginFill(fillStyle, lineStyle);
		
		graphicDOMObject.drawRect(0, 0, 100, 100, cornerRadiuses);
		graphicDOMObject.endFill();
		
		DOMObjectBase.rootDOMObject.addChild(graphicDOMObject);
		
		Assert.equals(1, 1);
	}
	
	/**
	 * draw a transparent lineat gradient
	 */
	public function testDrawTransparentLinearGradientRectangle()
	{
		#if flash9
		var nativeDOMObject = new flash.display.Sprite();
		#elseif js
		var nativeDOMObject = js.Lib.document.createElement("canvas");
		#end
		
		var graphicDOMObject:GraphicDOMObject = new GraphicDOMObject(nativeDOMObject);
		
		graphicDOMObject.setWidth(100);
		graphicDOMObject.setHeight(100);
		graphicDOMObject.setX(0);
		graphicDOMObject.setY(200);
		
		var cornerRadiuses:CornerRadiusData = {
			tlCornerRadius:0,
			trCornerRadius:0,
			blCornerRadius:0,
			brCornerRadius:0
		}
		
		var colorStop:ColorStopData = { color:Std.parseInt("0xFF0000") , alpha:100 };
		
		var gradientStops:Array<GradientStopData> = [];
		gradientStops.push( { colorStop: { color:Std.parseInt("0xFF0000"), alpha:20 }, ratio:0 } );
		gradientStops.push( { colorStop: { color:Std.parseInt("0x00FF00"), alpha:60 }, ratio:100 } );
		
		var gradientStyle:GradientStyleData = {
			gradientType:linear,
			gradientStops:gradientStops,
			rotation:20		}
	
		var lineStyle:LineStyleValue = LineStyleValue.none;
		
		var fillStyle:FillStyleValue = gradient(gradientStyle);
		
		
		
		graphicDOMObject.beginFill(fillStyle, lineStyle);
		
		graphicDOMObject.drawRect(0, 0, 150, 100, cornerRadiuses);
		graphicDOMObject.endFill();
		
		DOMObjectBase.rootDOMObject.addChild(graphicDOMObject);
		
		Assert.equals(1, 1);
	}
	
}