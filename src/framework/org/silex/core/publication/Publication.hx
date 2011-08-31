 /*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.core.publication;

import haxe.Log;
import org.silex.core.config.Config;
import org.silex.core.block.Block;
import org.silex.core.block.BlockData;
import org.silex.runtime.nativeClass.NativeClass;
import org.silex.runtime.nativeClass.NativeInstanceBase;
import org.silex.runtime.domObject.DOMObject;
import org.silex.runtime.domObject.ContainerDOMObject;

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
	private var _instancesArray:Array<Publication>;
	/**
	 * A reference to the DOMObject at the top of 
	 * the DOM
	 */
	public var rootDOMObject:DOMObjectBase;

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
	public static function getPublication(nativeClassOrDOM:Dynamic):Publication
	{
		// result publication object
		var publication:Publication;
		
		// path of the given native dom
		var pathOfNativeDOM:String = DOMObject.getPath(nativeClassOrDOM);
		
		// loop on the publications to check which one the native dom is in
		var idx:Int;
		for (idx in _instancesArray.length)
		{
			// path of the root native dom for this publication
			var pathOfRootNativeDom:String = DOMObject.getPath(_instancesArray[idx].rootDOMObject._referenceToNativeDOM);
			// is it the one?
			if(pathOfNativeDOM.indexOf(pathOfRootNativeDom))
			{
				// yes it is
				return _instancesArray[idx];
			}
		}
		
		// return the new publication
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
		// create the root DOMObject and attach it to the js dom
		var domObject = new ContainerDOMObject();
	
		// create the root Block, which data are in test.xml
		var block = new org.silex.core.block.Block(xmlFileName);
		block.setDOMObject(domObject);
		
		// initialize the block with its data
		if (xmlString != null)
		{
			// buid the block with the XML data
			deserializeBlockData(block, xmlString);
			onLoadBlockDataSuccess();
		}
		else
		{
			// start loading the first block
			var blockBuilder = new org.silex.core.block.BlockBuilder(block);
			blockBuilder.loadBlockData(onLoadBlockDataSuccess, onLoadBlockDataError);
		}
	}
}