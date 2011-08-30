/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.core.block;

import haxe.Log;
import org.silex.runtime.domObject.DOMObject;
import org.silex.runtime.nativeClass.NativeClass;
import org.silex.runtime.resource.ResourceLoaderManager;
import org.silex.core.XmlUtils;

/**
 * This class exposes method used to build/init
 * a block. It is in charge of : 
 * - loading the data of a block from an external file
 * - deserialising this data to set the block's data and instantiate/init
 *   it's children
 * - load a block's DOMObject
 * - instantiate a block's native class instance
 * - push the block's properties into it's class instance
 *   or DOMObject
 * 
 * @author Yannick DOMINGUEZ
 * @author Raphael HARMEL
 */
class BlockBuilder 
{
	/**
	 * The Block object that will be 
	 * built
	 */
	private var _block:Block;
	
	/**
	 * Called when the block data was successfully loaded
	 */
	private var _loadBlockDataSuccess:BlockBuilder->Void;
	
	/**
	 * Called when there was an error while loading the
	 * block's data
	 */
	private var _loadBlockDataError:String->Void;

	/**
	 * Called when the DOMObject was successfully loaded
	 */
	private var _loadDOMObjectSuccess:BlockBuilder->Void;
	
	/**
	 * Called when there was an error while loading
	 * the DOMObject
	 */
	private var _loadDOMObjectError:String->Void;
	
	/**
	 * class constructor. Store the block that will
	 * be built
	 */
	public function new(block:Block) 
	{
		this._block = block;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// building the BlockData and the block's children
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * The block's BlockData structure is created right after it's serialised data has been loaded
	 * (as an XML, JSON...). The default serialised format is XML. While building the BlockData, all of
	 * the children of the block are created recursively and initialised with the data available in the
	 * parent's loaded data. The children are all initialised with at least enough data to load/instantiate
	 * their own data (separate data file if they have, domObject (skin) if they have one, controller class name)
	 */
	
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Fills a block 
	 * 
	 * @param	block
	 * @param	serializedBlockData
	 */
	public static function deserializeBlockData(block:Block, serializedBlockData:String):Void
	{
		// parse serializedBlockData and store it in XMLBlockData 
		var XMLBlockData:Xml = Xml.parse(serializedBlockData).firstElement();
		
		// cleans the xml BlockData to remove white spaces
		var cleanXMLBlockData:Xml = XmlUtils.cleanUp(XMLBlockData);
		
		// create block with BlockData
		doCreateBlock(cleanXMLBlockData, block);
	}
	/**
	 * set the root block's BlockData and create block's children with children data
	 */
	private static function doCreateBlock(xml:Xml, parentBlock:Block):Void
	{
		// set the parentBlock's BlockData
		var parentBlockData:BlockData = createBlockData(xml);
		parentBlock.setBlockData(parentBlockData);
		
		for (children in xml.elementsNamed("children"))
		{
			for (child in children.elements())
			{
				//instantiate the block and set it's class attributes
				//retrieved from the XML
				var block:Block = new Block(child.get("fileUrl"));
				block.setIsAutoOpen(child.get('isAutoOpen') == 'true');
				block.setIsTransversal(child.get('isTransversal') == 'true');
				
				parentBlock.addChild(block);
				doCreateBlock(child, block);
			}
		}
	}
	
	/**
	 * Takes a Block's xml and returns the equivalent BlockData
	 * 
	 * @param	xml
	 * @return
	 */
	private static function createBlockData(xml:Xml):BlockData
	{
		// define and init the returned BlockData
		var blockData:BlockData =
		{
			className : null,
			descriptorUID : null,
			as3SkinURL : null,
			jsSkinURL : null,
			phpSkinURL : null,
			properties : new Hash<Dynamic>(),
			metaData : new Hash<Dynamic>(),
		};
		
		var blockXml:Xml = xml;
		
		// set className to nameSpace attribute (package = nameSpace) + '.' + first node name (class name)
		if (blockXml.exists('nameSpace'))
		{
			blockData.className = blockXml.get('nameSpace') + '.' + blockXml.nodeName;
		}
		else
		{
			blockData.className = 'org.silex.blocks.' + blockXml.nodeName;
		}
		
		//init the Xml object that will contain
		//the blockData node
		var blockDataXML:Xml = Xml.parse('');
		
		//retrieve the blockData node
		for (children in blockXml)
		{
			if (children.nodeName == 'blockData')
			{
				blockDataXML = children;
			}
		}
		
		//parse the blockData node
		for (childXml in blockDataXML)
		{
			switch (childXml.nodeName)
			{
				// SKIN VALUES
				
				// get as3 skin value
				case 'as3SkinURL':
				blockData.as3SkinURL = childXml.firstChild().firstChild().toString();
				
				// get js skin value
				case 'jsSkinURL':
				blockData.jsSkinURL = childXml.firstChild().firstChild().toString();

				// get php skin value
				case 'phpSkinURL':
				blockData.phpSkinURL = childXml.firstChild().firstChild().toString();
				
				//get descriptor UID value
				case 'descriptorUID':
				blockData.descriptorUID = childXml.firstChild().toString();
				
				// get properties
				case 'properties':
				for (property in childXml.elements())
				{
					// existing properties type in silex v1 layer files: Integer, Float, Boolean, Array, 
					// for Strings, there is no property type, but value is converted to CData
					switch (property.get('type'))
					{
						// If Integer type, convert to Integer
						case 'Integer':
						blockData.properties.set(property.nodeName, Std.parseInt(property.firstChild().toString()));
						
						// If Float type, convert to Float
						case 'Float':
						blockData.properties.set(property.nodeName, Std.parseFloat(property.firstChild().toString()));
						
						// If Boolean type, convert to Boolean
						case 'Boolean':
						blockData.properties.set(property.nodeName, property.firstChild().toString() == 'true' );
						
						// If Array type, convert to Array
						case 'Array':
						var items:Array<Dynamic> = new Array<Dynamic>();
						for (item in property.elements())
						{
							items.push(item.firstChild().nodeValue);
						}
						blockData.properties.set(property.nodeName, items);
						
						// default case: String, convert to string
						default:
						blockData.properties.set(property.nodeName, property.firstChild().toString());
					}
				}
				
				// get metaData
				case 'metaData':
				for (metaData in childXml.elements())
				{
					blockData.metaData.set(metaData.nodeName, Std.parseInt(metaData.firstChild().toString()));
				}
			}
		}
		
		return blockData;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Initialising the block
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * The initialisation of the block is done in 4 steps. Some of them might be skipped,
	 * for instance if the current block's data string was loaded with the parent's block
	 * data string (they share the same XML, JSON... file), then the first step : "loading
	 * the block data" is skipped. A step can also be skipped if unneccessary. for instance
	 * the step 2, loading the DOMObject (skin), is skipped for a block with no skin.
	 * When all steps have been successfuly accomplished, the block is ready to be opened.
	 */
	 
	//////////////////////////////////////////////////////////////////////////////////////////
	// step 1 - loading the block's data
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Starts the loading of the block's data with the block's fileUrl attribute, containing the 
	 * URL of the file to load. store the success and error callback for later use
	 * @param successCallback called when the data is loaded
	 * @param errorCallback called when there is a loading error
	 */
	public function loadBlockData(successCallback:BlockBuilder->Void, errorCallback:String->Void):Void
	{
		_loadBlockDataSuccess = successCallback;
		_loadBlockDataError = errorCallback;
		
		ResourceLoaderManager.loadString(_block.getFileUrl(), onBlockDataLoaded, onBlockDataLoadError);
	}
	
	/**
	 * when the block's data has been loaded, deserialise it and
	 * set it on the block, thus setting it's data and creating it's
	 * children, then call the success callback
	 * @param	data the block's data string, might be XML, JSON...
	 */
	private function onBlockDataLoaded(data:String):Void
	{
		deserializeBlockData(_block, data);
		_loadBlockDataSuccess(this);
	}
	
	/**
	 * When there is an error while loading, call the error callback
	 * with the error message
	 * @param	errorMessage the returned error message
	 */
	private function onBlockDataLoadError(errorMessage:String):Void
	{
		_loadBlockDataError(errorMessage);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// step 2 - loading the DOMObject
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Starts the loading of the block's DOMObject (skin) with the provided skinUrl containing the 
	 * URL of the file to load
	 * @param skinUrl the url of the skin to load (might be a .swf, .jpg, .html... depending on the runtime)
	 * @param successCallback
	 * @param errorCallback
	 */
	public function loadDOMObject(skinUrl:String, successCallback:BlockBuilder->Void, errorCallback:String->Void):Void
	{
		_loadDOMObjectSuccess = successCallback;
		_loadDOMObjectError = errorCallback;
		
		ResourceLoaderManager.loadContainer(skinUrl, onDOMObjectLoaded, onDOMObjectLoadError);
	}
	
	/**
	 * When the domObject has been loaded, set it on the block
	 * then call the success callback
	 * @param	domObject the loaded DOMObject
	 */
	private function onDOMObjectLoaded(domObject:DOMObject):Void
	{
		_block.setDOMObject(domObject);
		_loadDOMObjectSuccess(this);
	}
	
	/**
	 * When there is an error while loading, call the error callback
	 * with the error message
	 * @param	errorMessage the returned error message
	 */
	private function onDOMObjectLoadError(errorMessage:String):Void
	{
		_loadDOMObjectError(errorMessage);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// step 3 - Instantiating the controller class
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Instantiate the native class for this block with the block's class name, coming
	 * from the BlockData structure,
	 */
	public function createNativeClassInstance():Void
	{
		_block.setNativeClassInstance(NativeClass.getNativeInstanceByClassName(_block.getBlockData().className));
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// step 4 - Pushing the properties
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Set the BlockData properties either on the controller class or directly on the skin
	 * if no controller class was defined for this block
	 */
	public function setBlockAttributes():Void
	{
		//set the properties on the controller class
		if (_block.getNativeClassInstance() != null)
		{
			for (propertyName in _block.getBlockData().properties.keys())
			{
				_block.getNativeClassInstance().setField(propertyName, _block.getBlockData().properties.get(propertyName));
			}
		}
		
		//if it doesn't exist, set it on the domObject (skin)
		else if (_block.getDOMObject() != null)
		{
			for (propertyName in _block.getBlockData().properties.keys())
			{
				_block.getDOMObject().setAttribute(propertyName, _block.getBlockData().properties.get(propertyName));
			}
		}
	}
}