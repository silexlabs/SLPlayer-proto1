 /*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package slPlayer.core.publication;

import cocktail.domElement.DOMElement;
import cocktail.nativeClass.NativeInstance;
import cocktail.nativeReference.NativeReference;
import haxe.Log;
import slPlayer.core.block.Block;
import slPlayer.core.config.Config;
import cocktail.domElement.ContainerDOMElement;

/**
 * The Publication class is the entry point of a Silex application. 
 * The boot loader, in AS, js or php will load the library and then 
 * start the publication loading process by calling the Publication::start method. 
 * This is the placeholder for the root Block object and the Config object
 * 
 * @author lexa
 * @date 2011/08
 */
class Publication
{
	/**
	 * array of the publications created in this runtime
	 */
	private static var _instancesArray:Array<Publication>;
	/**
	 * A reference to the DOMElement at the top of 
	 * the DOM
	 */
	public var rootDOMElement:DOMElement;
	
	public var rootBlock:Block;

	/**
	 * A reference to the Config for this publication
	 */
	public var config:Config;
	
	
	/////////////////////////////////////////////////////////////////////////////////////////////
	// class methods
	/////////////////////////////////////////////////////////////////////////////////////////////
	/**
	 * creates the publication with the given config/settings
	 * do not create a publication with new
	 * use deletePublication to get rid of a publication
	 */
	public static function createPublication(config:Config):Publication
	{
		// new publication object
		var publication:Publication = new Publication();
		
		// store the configuration
		publication.config = config;
		
		// init the instance array
		if (_instancesArray == null) _instancesArray = new Array();

		// store the instance
		_instancesArray.push(publication);
		
		// return the new publication
		return publication;
	}
	/**
	 * retrieve the publicaiton which contains a given native dom object or native class
	 */
	public static function getPublication(blockOrNativeElementOrDOMElementOrNativeInstance:Dynamic):Publication
	{
		var publicationIdx:Int = _instancesArray.length;
			for (i in 0...publicationIdx)
			{
				var block:Block = doGetBlock(_instancesArray[publicationIdx].rootBlock, blockOrNativeElementOrDOMElementOrNativeInstance);
				if (block != null)
				{
					return _instancesArray[publicationIdx] ;
				}
			}
			
		return null;	
	}
	

	/////////////////////////////////////////////////////////////////////////////////////////////
	// instance methods
	/////////////////////////////////////////////////////////////////////////////////////////////
	/**
	 * creates the publication with the given config/settings
	 * use createPublication instead of new
	 */
	private function new(){}
	
	/**
	 * reder the publication, create and open the first block
	 * 
	 * @param	A reference to the native DOM object. Varies for each
	 * runtime : in JS it is an HTML element, in Flash a Sprite,
	 * in PHP a resource
	 */
	public function render(nativeDOM:Dynamic, xmlFileName:String = null, xmlString:String = null)
	{
		// create the root DOMElement and attach it to the js dom
		var domElement = new ContainerDOMElement();
	
		// create the root Block, which data are in test.xml
		var block = new slPlayer.core.block.Block(xmlFileName);
		
		rootBlock = block;
		
		block.setDOMElement(domElement);
		
		// initialize the block with its data
		if (xmlString != null)
		{
			// buid the block with the XML data
			//BlockBuilder.deserializeBlockData(block, xmlString);
			//onLoadBlockDataSuccess();
		}
		else
		{
			// start loading the first block
			//var blockBuilder = new slPlayer.core.block.BlockBuilder(block);
			//blockBuilder.loadBlockData(onLoadBlockDataSuccess, onLoadBlockDataError);
		}
	}
	
	public function getBlock(nativeInstanceOrDOM:Dynamic):Block
	{
		return doGetBlock(this.rootBlock, nativeInstanceOrDOM);
	}
	
	private static function doGetBlock(block:Block, nativeInstanceOrDOM:Dynamic, compareMethod:Block -> dynamic -> Bool):Block
	{
		if (compareMethod(block, nativeInstanceOrDOM) == true)
		{
			return block;
		}
		else
		{
			for (i in 0...block.children.length)
			{
				return doGetBlock(block.children[i], nativeInstanceOrDOM);
			}
		}
		
		return null;
	}
	
	private static function isNativeReferenceInBlock(block:Block, nativeReference:NativeReference):Bool
	{
		
	}
	
	private static function isDOMElementInBlock(block:Block, domElement:DOMElement):Bool
	{
		
	}
	
	private static function find(block:Block, value:Dynamic):Bool
	{
		var ret:Bool = false;
		
		if (Std.is(value, NativeInstance))
		{
			ret =  block.nativeClassInstance == value;
		}
		else if (Std.is(value, cocktail.nativeReference.NativeReference))
		{
			ret =  block.domElement.nativeReference == value;
		}
		else if (Std.is(value, DOMElement))
		{
			ret =  block.domElement == value;
		}
		else if (Std.is(value, Block))
		{
			ret =  block == value;
		}
		else
		{
			ret =  false;
		}
		
		return ret;
	}
}