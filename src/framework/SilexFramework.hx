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
import org.silex.runtime.domObject.DOMObject;
import org.silex.runtime.domObject.ContainerDOMObject;
import org.silex.runtime.domObject.AnimationDOMObject;
import org.silex.runtime.domObject.GraphicDOMObject;
import org.silex.runtime.domObject.ImageDOMObject;
import org.silex.runtime.geom.Matrix;
import org.silex.runtime.domObject.TextDOMObject;
import org.silex.runtime.resource.ResourceLoader;
import org.silex.runtime.resource.ResourceLoaderManager;
import org.silex.runtime.nativeClass.NativeClass;
import org.silex.runtime.nativeReference.NativeReference;
import org.silex.runtime.nativeReference.NativeReferenceManager;
import org.silex.runtime.mouse.Mouse;
import org.silex.runtime.keyboard.Keyboard;

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