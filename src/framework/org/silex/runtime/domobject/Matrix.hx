/*This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.domobject;

import haxe.Log;
import org.silex.runtime.domobject.DOMObjectData;

/**
 * This class is an implementation of a 3x3 matrix. It is meant to be
 * cross-platform and as such doesn't rely on any runtime specific API.
 * 
 * It exposes method to create and manipulate a matrix which can then be 
 * used to apply 2d transformations to a display object.
 * 
 * @author Yannick DOMINGUEZ
 */
class Matrix 
{
	
	/**
	 * Stores each value of this 3x3 matrix
	 */
	private var _matrixData:MatrixData;
	
	/**
	 * Class constructor. Creates a 3x3 matrix with the given parameters.
	 * It defaults to an identity matrix (no transformations), if the given
	 * matrix data are null.
	 */
	public function new(matrixData:MatrixData = null) 
	{
		setMatrixData(matrixData);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Low level matrix manipulation methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Reset the matrix to an identity matrix (no transformations)
	 */
	public function identity():Void
	{
		_matrixData = {
			a : 1.0,
			b : 0.0, 
			c : 0.0,
			d : 1.0,
			e : 0.0,
			f : 0.0
		};
	}
	
	/**
	 * Set the values of this 3x3 matrix, fall back to an
	 * identity matrix if null
	 * 
	 * @param contains 6 values
	 */
	public function setMatrixData(matrixData:MatrixData):Void
	{
		_matrixData = matrixData;
		
		//init the null matrix as an identity matrix
		if (_matrixData == null)
		{
			identity();
		}
	}
	
	/**
	 * Return this matrix data
	 * @return the 6 values of this 3x3 matrix
	 */
	public function getMatrixData():MatrixData
	{
		return _matrixData;
	}
	
	/**
	 * Concatenate the matrix values by multiplying them.
	 * 
	 * @example If matrix1 rotate an object by 45
	 * degrees and matrix2 scale an object by a factor of 2,
	 * then the resulting concatenated matrix
	 * will both rotate and scale the object with the same values.
	 * 
	 * @param	matrix the matrix to concatenate with the current
	 * matrix
	 */
	public function concatenate(matrix:Matrix):Void
	{
		//get a ref to current and target matrix data
		var currentMatrixData:MatrixData = _matrixData;
		var targetMatrixData:MatrixData = matrix.getMatrixData();
		
		//multiply the two matrix data values
		var a:Float = currentMatrixData.a * targetMatrixData.a + currentMatrixData.c * targetMatrixData.b;
		var b:Float = currentMatrixData.b * targetMatrixData.a + currentMatrixData.d * targetMatrixData.b;
		var c:Float = currentMatrixData.a * targetMatrixData.c + currentMatrixData.c * targetMatrixData.d;
		var d:Float = currentMatrixData.b * targetMatrixData.c + currentMatrixData.d * targetMatrixData.d;
		var e:Float = currentMatrixData.a * targetMatrixData.e + currentMatrixData.c * targetMatrixData.f + currentMatrixData.e;
		var f:Float = currentMatrixData.b * targetMatrixData.e + currentMatrixData.d * targetMatrixData.f + currentMatrixData.f;
		
		//concatenate the result
		var concatenatedMatrixData:MatrixData = {
			a : a,
			b : b,
			c : c,
			d : d,
			e : e,
			f : f
		};
		
		//then set it as this matrix data
		setMatrixData(concatenatedMatrixData);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// High level matrix manipulation methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Apply a transformation translating the matrix with the given x and y offsets.
	 * 
	 * @param	x the translation along the x axis
	 * @param	y the translation along the y axis
	 */
	public function translate(x:Float, y:Float):Void
	{
		//create the matrix data corresponding to an identity matrix
		//translated by x and y
		var translationMatrixData:MatrixData = {
			a:1.0,
			b:0.0,
			c:0.0,
			d:1.0,
			e:x,
			f:y
		}
		
		//create the corresponding matrix
		var translationMatrix:Matrix = new Matrix(translationMatrixData);
		
		//concatenate the translation to the current matrix to prevent
		//losing any previous translation
		concatenate(translationMatrix);
	}
	
	/**
	 * Apply a transformation rotating the matrix of the angle number of degree (clockwise), using 
	 * "transformationOrigin" as rotation center.
	 * 
	 * @param angle the rotation angle in degree
	 * @param transformationOrigin the pivot point
	 */
	public function rotate(angle:Int, transformationOrigin:Point):Void
	{
		//convert degree to radian
		var angleInRad:Float = angle / 180 * Math.PI;
		
		//the matrix that will be rotated along transformation origin point. It will be
		//concatenated with the current matrix. Default to an identity matrix
		var rotatedMatrix:Matrix = new Matrix();
		
		//translate the matrix to set the transformation origin as it's pivot point
		rotatedMatrix.translate(transformationOrigin.x, transformationOrigin.y);
		
		//create the matrix data corresponding to an identity matrix
		//rotated by the angle
		var rotationMatrixData:MatrixData = {
			a:Math.cos(angleInRad),
			b:Math.sin(angleInRad),
			c:Math.sin(angleInRad) * -1,
			d:Math.cos(angleInRad),
			e:0.0,
			f:0.0
		};
		
		//and set it to a matrix
		var rotationMatrix:Matrix = new Matrix(rotationMatrixData);
		
		//concatenate the 2 matrices to obtain a matrix rotated around
		//the transform origin point
		rotatedMatrix.concatenate(rotationMatrix);
		
		//translate the matrix back to its original transformation origin
		rotatedMatrix.translate(transformationOrigin.x * -1, transformationOrigin.y * -1);
		
		//concatenate the rotated matrix to the current matrix to
		//prevent losing any previous transformation
		concatenate(rotatedMatrix);
	}
	
	/**
	 * Apply a transformation scaling the matrix by the "scaleX" and "scaleY" factor, using 
	 * "transformationOrigin" as scaling center.
	 * 
	 * @param scaleX horizontal scale factor
	 * @param scaleY vertical scale factor
	 * @param transformOrigin the scale center
	 */
	public function scale(scaleX:Float, scaleY:Float, transformationOrigin:Point):Void
	{	
		//the matrix that will be scaled along transformation origin point. It will be
		//concatenated with the current matrix. Default to an identity matrix
		var scaledMatrix:Matrix = new Matrix();
		
		//translate the matrix to set the transformation origin as it's scaling center
		scaledMatrix.translate(transformationOrigin.x, transformationOrigin.y);
		
		//create the matrix data corresponding to an identity matrix
		//scaled by the scaleX and scaleY factors
		var scalingMatrixData:MatrixData = {
			a:scaleX,
			b:0.0,
			c:0.0,
			d:scaleY,
			e:0.0,
			f:0.0
		};
		
		//and set it to a matrix
		var scalingMatrix:Matrix = new Matrix(scalingMatrixData);
		
		//concatenate the 2 matrices to obtain a matrix scaled around
		//the transform origin point
		scaledMatrix.concatenate(scalingMatrix);
		
		//translate the matrix back to its original transformation origin
		scaledMatrix.translate(transformationOrigin.x * -1, transformationOrigin.y * -1);
		
		//concatenate the scaled matrix to the current matrix to
		//prevent losing any previous transformation
		concatenate(scaledMatrix);
	}
	
	/**
	 * Apply a transformation skewing the matrix by the "skewX" and "skewY"
	 * factor, using "transformationOrigin" as skewing center.
	 * 
	 * @param skewX the horizontal skew factor
	 * @param skewY the vertical skew factor
	 * @param transformOrigin the skew center
	 */
	public function skew(skewX:Float, skewY:Float, transformationOrigin:Point ):Void
	{
		//the matrix that will be skewed along transformation origin point. It will be
		//concatenated with the current matrix. Default to an identity matrix
		var skewedMatrix:Matrix = new Matrix();
		
		//translate the matrix to set the transformation origin as it's skewing center
		skewedMatrix.translate(transformationOrigin.x, transformationOrigin.y);
		
		//create the matrix data corresponding to an identity matrix
		//skewed by the skewX and skewY factors
		var skewingMatrixData:MatrixData = {
			a:1.0,
			b:Math.tan(skewY),
			c:Math.tan(skewX),
			d:1.0,
			e:0.0,
			f:0.0
		};
		
		//and set it to a matrix
		var skewingMatrix:Matrix = new Matrix(skewingMatrixData);
		
		//concatenate the 2 matrices to obtain a matrix skewed around
		//the transform origin point
		skewedMatrix.concatenate(skewingMatrix);
		
		//translate the matrix back to its original transformation origin
		skewedMatrix.translate(transformationOrigin.x * -1, transformationOrigin.y * -1);
		
		//concatenate the skewed matrix to the current matrix to
		//prevent losing any previous transformation
		concatenate(skewedMatrix);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Helper methods to set and get transform values from the matrix
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Set the rotation of the matrix to an absolut value instead of adding a rotation
	 * to an existing rotation. Preserve the existing transformations
	 * @param	angle the angle that must be applied
	 * @param	transformationOrigin the rotation center
	 */
	public function setRotation(angle:Int, transformationOrigin:Point):Void 
	{
		//get the current angle
		var currentRotation:Int = getRotation();
		
		//find the complementary angle to reset the rotation to 0
		var resetAngle:Int = 360 - currentRotation;
		
		//reset the rotation while preserving other transformations
		this.rotate(resetAngle, transformationOrigin );
		
		//set the new rotation value
		this.rotate(angle, transformationOrigin);
	}
	
	/**
	 * return the current matrix rotation in degree
	 */
	public function getRotation():Int
	{
		//it's copy/pasted, I don't get it
		
		var rotation:Float = Math.atan( (_matrixData.c * -1) / _matrixData.a);
		var scaleX:Float = Math.sqrt((_matrixData.a * _matrixData.a) + (_matrixData.c * _matrixData.c));
		var sign:Float = Math.atan( (_matrixData.c * -1) / _matrixData.a);
		
		var radian:Float = Math.acos(_matrixData.a / scaleX);
		
		var rotationInDegree:Int = Math.round((radian * 180) / Math.PI);
		
		if (rotationInDegree > 90 && sign > 0 )
		{
			rotation = (360 - rotationInDegree) / 180 * Math.PI ;
		}
		else if (rotationInDegree < 90 && sign < 0)
		{
			rotation = (360 - rotationInDegree) / 180 * Math.PI ;
		}
		else
		{
			rotation = radian;
		}
		
		return Math.round((rotation / Math.PI) * 180);
	}
	
	/**
	 * Return the current X scale of the matrix
	 */
	public function getScaleX():Float
	{
		//scale sign (positive or negative) depends, on the sign of
		//the "a" matrix value
		var scaleSign:Int = 0;
		if (_matrixData.a > 0)
		{
			scaleSign = 1;
		}
		else
		{
			scaleSign = -1;
		}
		
		return scaleSign *  Math.sqrt((_matrixData.a * _matrixData.a) + (_matrixData.c * _matrixData.c));
	}
	
	/**
	 * Return the current Y scale of the matrix
	 */
	public function getScaleY():Float
	{
		//scale sign (positive or negative) depends, on the sign of
		//the "d" matrix value
		var scaleSign:Int = 0;
		if (_matrixData.d > 0)
		{
			scaleSign = 1;
		}
		else
		{
			scaleSign = -1;
		}
		
		return scaleSign *  Math.sqrt((_matrixData.b * _matrixData.b) + (_matrixData.d * _matrixData.d));
	}
	
	/**
	 * Return the current X translation of the matrix
	 */
	public function getTranslationX():Float
	{
		return _matrixData.e;
	}
	
	/**
	 * Return the current Y translation of the matrix
	 */
	public function getTranslationY():Float
	{
		return _matrixData.f;
	}
	
	
}