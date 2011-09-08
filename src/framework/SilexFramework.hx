/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
import org.silex.core.config.Config;
import org.silex.core.block.Block;
import org.silex.core.block.BlockBuilder;
import org.silex.blocks.Image;
import org.cocktail.domObject.DOMObject;
import org.cocktail.domObject.ContainerDOMObject;
import org.cocktail.domObject.AnimationDOMObject;
import org.cocktail.domObject.GraphicDOMObject;
import org.cocktail.domObject.ImageDOMObject;
import org.cocktail.geom.Matrix;
import org.cocktail.domObject.TextDOMObject;
import org.cocktail.resource.ResourceLoader;
import org.cocktail.resource.ResourceLoaderManager;
import org.cocktail.nativeClass.NativeClass;
import org.cocktail.nativeReference.NativeReference;
import org.cocktail.nativeReference.NativeReferenceManager;
import org.cocktail.mouse.Mouse;
import org.cocktail.keyboard.Keyboard;

/**
 * this class is used to compile all the framework classes
 * it is not a real starting point for any application
 */
class SilexFramework
{
	/**
	 * main entry point, do nothing
	 */
	public static function main(): Void
	{
	}
}