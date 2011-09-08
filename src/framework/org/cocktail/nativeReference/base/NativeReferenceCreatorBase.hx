/*This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.cocktail.nativeReference.base;

import org.cocktail.nativeReference.NativeReferenceData;
import org.cocktail.nativeReference.NativeReference;

/**
 * This is a base class for the native reference
 * creator implementation. It creates a native element
 * and returns a reference to it
 * 
 * @author Yannick DOMINGUEZ
 */
class NativeReferenceCreatorBase
{

	/**
	 * class constructor
	 */
	public function new() 
	{
		
	}
	
	/**
	 * Instantiate a native element and returns a reference to it. Implemented in inheriting classes
	 * @param	nativeReferenceType the type of element to create (graphic, text...)
	 */
	public function createNativeReference(nativeReferenceType:NativeReferenceTypeValue):NativeReference
	{
		return null;
	}
	
}