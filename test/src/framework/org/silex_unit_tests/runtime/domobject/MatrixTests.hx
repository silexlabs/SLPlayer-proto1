/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/

package org.silex_unit_tests.runtime.domObject;

/**
 * Units tests for DOMObjects transformation matrix
 * @author Yannick DOMINGUEZ
 */
import haxe.Log;
import org.silex.runtime.domObject.base.DOMObjectBase;
import org.silex.runtime.domObject.DOMObject;
import org.silex.runtime.domObject.GraphicDOMObject;
import org.silex.runtime.domObject.DOMObjectData;
import utest.Assert;
import utest.Runner;
import utest.ui.Report;

class MatrixTests 
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
		runner.addCase(new MatrixTests());
		Report.create(runner);
		runner.run();
	}
	
	public function new() 
	{
	}
	
	/**
	 * test all of the transformations
	 */
	public function testMatrixTransformations():Void
	{
		#if flash9
		var domObject:GraphicDOMObject = new GraphicDOMObject(new flash.display.Sprite());
		#elseif js
		var domObject:GraphicDOMObject = new GraphicDOMObject(js.Lib.document.createElement("canvas") );
		#end
		
		//init the test dom object
		
		domObject.setWidth(200);
		domObject.setHeight(100);
		domObject.setX(0);
		domObject.setY(0);
		
		var gradientStops:Array<GradientStopData> = [];
		gradientStops.push( { colorStop: { color:Std.parseInt("0xFF0000"), alpha:100 }, ratio:0 } );
		gradientStops.push( { colorStop: { color:Std.parseInt("0x00FF00"), alpha:100 }, ratio:100 } );
		
		var gradientStyle:GradientStyleData = {
			gradientType:linear,
			gradientStops:gradientStops,
			rotation:0		}
		
		domObject.beginFill(gradient( gradientStyle), LineStyleValue.none);
		domObject.drawRect(0, 0, 200, 100, { tlCornerRadius:0, trCornerRadius:0, blCornerRadius:0, brCornerRadius:0 } );
		domObject.endFill();
		
		DOMObjectBase.rootDOMObject.addChild(domObject);
		
		//test rotations at angles of each of a circle quarter
		
		domObject.rotate(45, constant(center, middle));
		
		Assert.equals(domObject.getMatrix().getRotation(), 45);
		
		domObject.resetTransformations();
		
		domObject.rotate(90, constant(center, middle));
		
		Assert.equals(domObject.getMatrix().getRotation(), 90);
		
		domObject.resetTransformations();
		
		domObject.rotate(180, constant(center, middle));
		
		Assert.equals(domObject.getMatrix().getRotation(), 180);
		
		domObject.resetTransformations();
		
		domObject.rotate(270, constant(center, middle));
		
		Assert.equals(domObject.getMatrix().getRotation(), 270);
		
		
		//test x scale
		
		domObject.resetTransformations();
		
		domObject.scale(2, 1, constant(center, middle));
		
		Assert.equals(domObject.getMatrix().getScaleX(), 2);
		
		domObject.resetTransformations();
		
		domObject.scale(-2, 1, constant(center, middle));
		
		Assert.equals(domObject.getMatrix().getScaleX(), -2);
		
		//test y scale
		
		domObject.resetTransformations();
		
		domObject.scale(1, 2, constant(center, middle));
		
		Assert.equals(domObject.getMatrix().getScaleY(), 2);
		
		domObject.resetTransformations();
		
		domObject.scale(1, -2, constant(center, middle));
		
		Assert.equals(domObject.getMatrix().getScaleY(), -2);
		
		//test translation
		
		domObject.resetTransformations();
		
		domObject.translate(20, 30);
		
		Assert.equals(domObject.getMatrix().getTranslationX(), 20);
		Assert.equals(domObject.getMatrix().getTranslationY(), 30);
		
		
		//test skew
		
		domObject.resetTransformations();
		
		domObject.skew(0.5, 0.2, constant(center, middle));
		
		Assert.equals(Std.string(domObject.getMatrix().getSkewX()).substr(0,3), "0.5");
		Assert.equals(Std.string(domObject.getMatrix().getSkewY()).substr(0,3), "0.2");
		
		//test absolut rotation setting
		
		domObject.resetTransformations();
		
		domObject.setRotation(45, constant(center, middle));
		domObject.setRotation(45, constant(center, middle));
		domObject.setRotation(20, constant(center, middle));
		
		Assert.equals(domObject.getRotation(), 20);
		
		domObject.resetTransformations();
		
		//test absolut scale setting
		
		domObject.setScaleX(2, constant(center, middle));
		domObject.setScaleX(2, constant(center, middle));
		domObject.setScaleX(2, constant(center, middle));
		
		domObject.setScaleY(3, constant(center, middle));
		domObject.setScaleY(3, constant(center, middle));
		domObject.setScaleY(3, constant(center, middle));
		
		
		Assert.equals(domObject.getScaleX(), 2);
		Assert.equals(domObject.getScaleY(), 3);
		
		domObject.resetTransformations();
		
		//test absolut translation setting
		
		domObject.setTranslationX(500);
		domObject.setTranslationX(500);
		domObject.setTranslationX(500);
		
		domObject.setTranslationY(20);
		domObject.setTranslationY(20);
		domObject.setTranslationY(20);
		
		Assert.equals(domObject.getTranslationX(), 500);
		Assert.equals(domObject.getTranslationY(), 20);
		
		
	}
	
	
}