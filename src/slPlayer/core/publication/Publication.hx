 /*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package slPlayer.core.publication;

import cocktail.domElement.DOMElement;
import cocktail.classInstance.ClassInstance;
import cocktail.nativeElement.NativeElement;
import cocktail.nativeElement.NativeElementManager;
import cocktail.nativeElement.NativeElementData;
import cocktail.nativeInstance.NativeInstance;
import haxe.Log;
import slPlayer.core.block.Block;
import slPlayer.core.config.Config;
import cocktail.domElement.ContainerDOMElement;
import slPlayer.core.block.BlockBuilder;
import slPlayer.core.style.StyleManager;

/**
 * The Publication class is the entry point of an SLPlayer. 
 * The boot loader, in AS, js or php will load the library and then 
 * start the publication loading process by calling the Publication::render method. 
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
	private static var _publications:Array<Publication>;
	
	/**
	 * A reference to the root block, on top of the
	 * publication hierarchy
	 */
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
		
		// init the publications array
		if (_publications == null) _publications = new Array();

		// store the instance
		_publications.push(publication);
		
		// return the new publication
		return publication;
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////
	// Publication retrival methods.
	// Used to retrieve a publication with a publication element
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Retrieve a publication using a ClassInstance belonging to the publication
	 */
	public static function getPublicationByClassInstance(classInstance:ClassInstance):Publication
	{
		//call the method atually retrieving the publiation with the method checking
		//for each block if it owns the provided classInstance
		return doGetPublication(classInstance, isClassInstanceOfBlock);
	}
	
	/**
	 * Retrieve a publication using a Block belonging to the publication
	 */
	public static function getPublicationByBlock(block:Block):Publication
	{
		return doGetPublication(block, isSameBlock);
	}
	
	/**
	 * Retrieve a publication using a NativeInstance belonging to the publication
	 */
	public static function getPublicationByNativeInstance(nativeInstance:NativeInstance):Publication
	{
		return doGetPublication(nativeInstance, isNativeInstanceOfBlock);
	}
	
	/**
	 * Retrieve a publication using a DOMElement belonging to the publication
	 */
	public static function getPublicationByDOMElement(domElement:DOMElement):Publication
	{
		return doGetPublication(domElement, isDOMElementOfBlock);
	}
	
	/**
	 * Retrieve a publication using a NativeElement belonging to the publication
	 */
	public static function getPublicationByNativeElement(nativeElement:NativeElement):Publication
	{
		return doGetPublication(nativeElement, isNativeElementOfBlock);
	}
	
	/**
	 * Retrieve a publication using a StyleManager belonging to the publication
	 */
	public static function getPublicationByStyleManager(styleManager:StyleManager):Publication
	{
		return doGetPublication(styleManager, isStyleManagerOfBlock);
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////
	// Private retrival methods.
	// Retrieve a publication or block using the given element
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Takes an element (block, nativeInstance...) and a isOwnerMethod used to check if the given element
	 * belongs to a block. For each publication, check if the given element belongs to one of its block
	 * and if it does, then return the publication
	 * @param	element might be a NativeInstance, a ClassInstance, a Block, a DOMElement or a NativeElement 
	 * @param	isOwnerMethod takes a block and an element as argument and returns wether the element belong to
	 * the block or is the same block if the given element is a block
	 * @return the publication which contains the provided element
	 */
	private static function doGetPublication(element:Dynamic, isOwnerMethod:Block -> Dynamic -> Bool):Publication
	{
		//for each publiation
		for (i in 0..._publications.length)
		{
			//check if a block of this publication owns the given element
			//starts looking in all of the publication's block by providing the root block
			var block:Block = doGetBlock(_publications[i].rootBlock, element, isOwnerMethod);
			
			//if it does (meaning a block is returned)
			//then return the current publication
			if (block != null)
			{
				return _publications[i];
			}
		}
		
		//at this point, the given element
		//does not belong to any publication
		return null;	
	}
	
	/**
	 * Returns the block containing the provided element. Parse all of the provided block
	 * children recursively until it finds a matching block. Check if the contains the provided
	 * argument with the provided isOwnerMethod
	 * @param	block check if the element beloongs to this block and if not, call this method with
	 * this block children until a match is found
	 * @param	element might be a NativeInstance, a ClassInstance, a Block, a DOMElement or a NativeElement 
	 * @param	isOwnerMethod takes a block and an element as argument and returns wether the element belong to
	 * the block or is the same block if the given element is a block
	 * @return the block owning the provided element
	 */
	private static function doGetBlock(block:Block, element:Dynamic, isOwnerMethod:Block -> Dynamic -> Bool):Block
	{
		//first check if the provided block contains
		//the element
		if (isOwnerMethod(block, element) == true)
		{
			return block;
		}
		//if it doesn't check its children by calling this 
		//method recursively until a match is found
		else
		{
			for (i in 0...block.children.length)
			{
				return doGetBlock(block.children[i], element, isOwnerMethod);
			}
		}
		
		//at this point no children from the first provided
		//block contains the element
		return null;
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////
	// Private isOwner methods
	// For each type of element, returns wether a block owns it
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * check if the tested block is the same as the given block
	 */
	private static function isSameBlock(block:Block, testedBlock:Block):Bool
	{
		return block == testedBlock;
	}
	
	/**
	 * check if the class instance belongs to the given block
	 */
	private static function isClassInstanceOfBlock(block:Block, classInstance:ClassInstance):Bool
	{
		return block.classInstance == classInstance;
	}
	
	/**
	 * check if the DOMElement belongs to the given block
	 */
	private static function isDOMElementOfBlock(block:Block, domElement:DOMElement):Bool
	{
		return block.domElement == domElement;
	}
	
	/**
	 * check if the NativeInstance belongs to the given block
	 */
	private static function isNativeInstanceOfBlock(block:Block, nativeInstance:NativeInstance):Bool
	{
		return block.classInstance.nativeInstance == nativeInstance;
	}
	
	/**
	 * check if the NativeElement belongs to the given block
	 */
	private static function isNativeElementOfBlock(block:Block, nativeElement:NativeElement):Bool
	{
		return block.domElement.nativeElement == nativeElement;
	}
	
	/**
	 * check if the StyleManager belongs to the given block
	 */
	private static function isStyleManagerOfBlock(block:Block, styleManager:StyleManager):Bool
	{
		return block.styleManager == styleManager;
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
	 * render the publication, create and open the first block
	 * 
	 * @param	A reference to the native DOM object. Varies for each
	 * runtime : in JS it is an HTML element, in Flash a Sprite,
	 * in PHP a resource
	 */
	public function render(nativeElement:NativeElement = null, xmlFileName:String = null, xmlString:String = null)
	{
		if (nativeElement == null)
		{
			nativeElement = NativeElementManager.getRoot();
		}
		
		// create the root DOMElement and attach it to the js dom
		var domElement = new ContainerDOMElement(nativeElement);
	
		// create the root Block, which data are in test.xml
		var block = new Block(xmlFileName);
		
		this.rootBlock = block;
		
		block.domElement = domElement;
		
		// initialize the block with its data
		if (xmlString != null)
		{
			// buid the block with the XML data
			BlockBuilder.deserializeBlockData(block, xmlString);
			block.open(function(block) { }, function(error) { } );
		}
		else
		{
			// start loading the first block
			block.open(function(block) { }, function(error) { } );
		}
	}
	
	/////////////////////////////////////////////////////////////////////////////////////////////
	// Block retrival methods.
	// Used to retrieve a block with a block element
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Retrieve a block using the ClassInstance belonging to the block
	 */
	public function getBlockByClassInstance(classInstance:ClassInstance):Block
	{
		//call the method atually retrieving the block with the method checking
		//for each block, starting from the root block of this publication
		//if it owns the provided classInstance
		return doGetBlock(this.rootBlock, classInstance, isClassInstanceOfBlock);
	}
	
	/**
	 * Retrieve a block using the NativeInstance belonging to the block
	 */
	public function getBlockByNativeInstance(nativeInstance:NativeInstance):Block
	{
		return doGetBlock(this.rootBlock, nativeInstance, isNativeInstanceOfBlock);
	}
	
	/**
	 * Retrieve a block using the DOMElement belonging to the block
	 */
	public function getBlockByDOMElement(domElement:DOMElement):Block
	{
		return doGetBlock(this.rootBlock, domElement, isDOMElementOfBlock);
	}
	
	/**
	 * Retrieve a block using the NativeElement belonging to the block
	 */
	public function getBlockByNativeElement(nativeElement:NativeElement):Block
	{
		return doGetBlock(this.rootBlock, nativeElement, isNativeElementOfBlock);
	}
	
	/**
	 * Retrieve a block using the StyleManager belonging to the block
	 */
	public function getBlockByStyleManager(styleManager:StyleManager):Block
	{
		return doGetBlock(this.rootBlock, styleManager, isStyleManagerOfBlock);
	}
	
}