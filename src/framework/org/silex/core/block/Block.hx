 /*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.core.block;

import haxe.Log;
import org.silex.core.config.Config;
import org.silex.runtime.domObject.DOMObject;
import org.silex.core.block.BlockData;
import org.silex.runtime.nativeClass.NativeClass;
import org.silex.runtime.nativeClass.NativeInstanceBase;

/**
 * A publication in Silex is constituted of blocks.
 * The blocks represent the publication structure, 
 * each block can have children and his aware of it's
 * parent. All publications contain at least one block
 * which is called the root block, all the other block
 * being children to variying degree of this
 * root block.
 * 
 * A block is linked to the native DOM (might be Flash DOM, HTML DOM...)
 * through it's DOMObject (an abstraction of a native DOMObject,
 * might be a MovieClip/Sprite or a Div for instance). The DOMObject
 * is the skin of the Block. A block can have no DOMObject in which
 * case it is non-visual.
 * 
 * A block has a nativeClassInstance. This is the controller class
 * of the block. It is an abstraction wrapping a class instantiated
 * in a specific runtime (ActionScript, JavaScript...).
 * This class is loaded at runtime either in a library, loaded at
 * publication startup, or it can be contained in a loaded DOMObject (skin).
 * 
 * A block can have a DOMObject and no nativeClassInstance (the controller class 
 * is then assumed to be in the DOMObject), it can have only
 * a nativeClassInstance or it can have both but it can't have neither.
 * 
 * A block's 'model' is represented by it's properties and metadata, stored
 * in the BlockData structure. They are loaded at runtime from an external
 * file representing the block (might be XML, JSON...). The loaded properties
 * are pushed into the nativeClassInstance or into the DOMObject (skin) when
 * the block is initialised.
 * 
 * A block is initialised with an instance of BlockBuilder, in charge of 
 * loading/instantiating it's data file, DOMObject (skin) and native class.
 * 
 * A block is initialised when it is opened in most case, it will be displayed
 * (attach to the native display list) once loaded. It may also be preloaded,
 * for instance a block whose data file is shared with it's parent won't need
 * to load an external text file. When a block opens, it also
 * opens all of it's children whose "isAutoOpen" attribute is true. If a block
 * is transversal (if it's isTransversal attribute is true), if a block deeper
 * in the hierarchy than this block is opened, this block opens or remains open
 * even if the opened block is not one of it's direct children or in it's children "lineage"
 * (it's children of children of children...).
 * 
 * @author Yannick DOMINGUEZ
 */
class Block
{
	
	/**
	 * When the block's data has been loaded,
	 * it is set to the BlockData object which contains
	 * the data of the block (skinUrls, properties, metadata...)
	 */
	private var _blockData:BlockData;
	
	/**
	 * A reference to the visual object of the DOM where 
	 * the children blocks are displayed. 
	 * When the block data contains an URL for the skin, 
	 * the domObject is initialized with the skin asset 
	 * before it is filled with children.
	 * This is the skin of the component.
	 * It is loaded and automatically added to the
	 * domObject of the parent block.
	 * The skin URL is provided in the block's descriptor,
	 * and may be different based on the target.
	 */
	private var _domObject:DOMObject;
	public var domObject(getDOMObject, setDOMObject):DOMObject;
	
	/**
	 * This attribute is set to an instance of the class whose name is in the block's descriptor.
	 * The class is supposed to be loaded with the plugins at application start, but it can also be contained in the skin.
	 * This is the controller of the block, the block's properties and metadata will be pushed into it.
	 */
	private var _nativeClassInstance:NativeInstance;
	public var nativeClassInstance(getNativeClassInstance, setNativeClassInstance):NativeInstance;
	
	/**
	 * The url of the file containing the data of the block (XML, JSON...).
	 * It can be absolute or relative to the publication content folder.
	 */ 
	private var _fileUrl : String;
	public var fileUrl(getFileUrl, setFileUrl):String;
	
	/**
	 * A BlockStateValue enum (opened, closed, loading).
	 */
	private var _state:BlockStateValue;
	public var state(getState, never):BlockStateValue;
	
	/**
	 * The children blocks of the block.
	 */
	private var _children:Array<Block>;
	public var children(getChildren, never):Array<Block>;
	
	/**
	 * A reference to the parent of the block.
	 */
	private var _parent:Block;
	public var parent(getParent, setParent):Block;
	
	/**
	 * If true, when a block deeper in the hierarchy is
	 * opened, this one stays opened
	 */
	private var _isTransversal:Bool;
	public var isTransversal(getIsTransversal, setIsTransversal):Bool;
	
	/**
	 * If true, when the block's parent opens, the block also opens.
	 */
	private var _isAutoOpen:Bool;
	public var isAutoOpen(getIsAutoOpen, setIsAutoOpen):Bool;
	
	/**
	 * an index used when opening child block. As the opening is 
	 * asynchronous, this index is used to keep track of what child 
	 * block to open next
	 */
	private var _openChildrenIndex:Int;
	
	/**
	 * Called when this block and all of it's children which
	 * must be opened are opened. Return the opened block
	 */
	private var _openBlockSuccessCallback:Block->Void;
	
	/**
	 * Called when there was an error during one of the block's
	 * opening
	 */
	private var _openBlockErrorCallback:String->Void;
	
	/**
	 * class constructor. Set the fileUrl attribute, which
	 * is the URL of the file containing the block's data.
	 * Init the children array
	 */ 
	public function new(fileUrl:String) 
	{
		this._fileUrl = fileUrl;
		this._state = closed;
		_children = new Array<Block>();
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// public method to control a block state
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Starts a block opening. To be opened a block must first be initialised
	 * (all of it's data must have been loaded already). Stores the success and error
	 * callback.
	 * @param	successCallback
	 * @param	errorCallback
	 */
	public function open(successCallback:Block->Void, errorCallback:String->Void):Void
	{
		_openBlockSuccessCallback = successCallback;
		
		_openBlockErrorCallback = errorCallback;
		
		//while it's data are not ready, the block is loading
		this._state = loading;
		
		//start opening the block with a blockBuilder instance
		//which will instantiate/load the data of the block as needed
		var blockBuilder:BlockBuilder = new BlockBuilder(this);
		doOpen(blockBuilder);
	}
	
	/**
	 * The block removes himself from the display list of it's parent, destroy the
	 * native class instance, then close all of it's children
	 */
	public function close():Void
	{
		if (this._domObject != null)
		{
			this._parent.removeFromDisplayList(this._domObject);
		}
		
		this._nativeClassInstance = null;
		
		for (i in 0..._children.length)
		{
			_children[i].close();
		}
		
		//set the closed state
		this._state = closed;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// public method to control a block' hierarchy
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Add the block in this block children array and set
	 * this block as the parent of the added block
	 * @param	block the block to add as a children
	 */
	public function addChild(block:Block):Void
	{
		_children.push(block);
		block.setParent(this);
	}
	
	/**
	 * Remove the block from the children array and
	 * from the display list. Reset it's parent
	 * @param	block the block to remove from the children
	 */
	public function removeChild(block:Block):Void
	{
		_children.remove(block);
		block.setParent(null);
	}

	/**
	 * Add the block's DOMObject to this block DOMObjects. If
	 * this block has no DOMObject, add it to it's parent DOMObject
	 * @param	blockDOMObject the domObject to add
	 */
	public function addToDisplayList(blockDOMObject:DOMObject):Void
	{
		if (this._domObject != null)
		{
			this._domObject.addChild(blockDOMObject);
		}
		else
		{
			this._parent.addToDisplayList(blockDOMObject);
		}
	}
	
	/**
	 * Remove the block's DOMObject from this block DOMObjects. If
	 * this block has no DOMObject, remove it from it's parent DOMObject
	 * @param	blockDOMObject the domObject to remove
	 */
	public function removeFromDisplayList(blockDOMObject:DOMObject):Void
	{
		if (this._domObject != null)
		{
			this._domObject.removeChild(blockDOMObject);
		}
		else
		{
			this._parent.removeFromDisplayList(blockDOMObject);
		}
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// private methods to open a block and it's children
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Called first when the block must be opened and then each time an
	 * initialisation step is successfuly complete if the block wasn't already
	 * ready. Once each condition of this method are met, the block is open
	 * and the opening of it's children start
	 * @param blockBuilder the blockBuilder instance used to
	 * build this block
	 */
	private function doOpen(blockBuilder:BlockBuilder):Void
	{
		//if the block data has no properties yet, it
		//means that it's data have not been loaded yet
		if (this._blockData.properties == null)
		{
			blockBuilder.loadBlockData(onBlockDataLoaded, onBlockDataLoadError);
		}
		
		//if the domObject (skin) is null although a skin url is defined
		//for this block, then it's not loaded yet
		else if (this._domObject == null && getSkinUrl() != null)
		{
			blockBuilder.loadDOMObject(getSkinUrl(), onDOMObjectLoaded, onDOMObjectLoadError);
		}
		
		//if the class instance is null although a class name is defined for this block,
		//then it has not yet been instantiated
		else if (this._nativeClassInstance == null && this._blockData.className != null)
		{
			blockBuilder.createNativeClassInstance();
			doOpen(blockBuilder);
		}
		
		//at this point, the block is loaded and ready, push the properties
		//in the block, then open the block's children
		else
		{
			blockBuilder.setBlockAttributes();
			
			//if this block has a parent (only the root block doesn't have one)
			//this block add himself to it's parent display list once opened
			if (this._parent != null)
			{
				//only add to display list if this block has
				//a DOMObject (skin)
				if (this._domObject != null)
				{
					this._parent.addToDisplayList(this._domObject);
				}
			}
		
			//reset the children index. Will be used to keep track
			//of which children must be opened next
			_openChildrenIndex = 0;
			
			openChildren();
			
		}
	}

	/**
	 * Loop in all the children to find which one must be opened and
	 * open them
	 */
	private function openChildren():Void
	{
		
		//check that there is at least one child on this block
		if (this._children.length > 0)
		{
			
			//if the current children is "auto open", open it
			if (_children[_openChildrenIndex].getIsAutoOpen() == true)
			{
				_children[_openChildrenIndex].open(onChildOpened, onChildOpenError);
			}
			//else just call the callback which will increment
			//the children index until all the children array was checked
			else
			{
				onChildOpened(_children[_openChildrenIndex]);
			}
		}
		
		//if there is no child, immediately call the end
		//method
		else
		{
			onAllChildOpened();
		}
		
	}
	
	/**
	 * Called when one child was open (or called directly
	 * if the current child was not to be opened)
	 * @param openedChild a reference to the block that was just 
	 * opened
	 */
	private function onChildOpened(openedChild:Block):Void
	{
		//increment to check the next index in the children 
		//array
		_openChildrenIndex++;
		
		//if not all of the children have been check for isAutoOpen
		//tries the next children
		if (_openChildrenIndex < _children.length)
		{
			openChildren();
		}
		
		//else when all the child have been checked for isAutoOpen and opened
		//as needed, call the all child opened method
		else
		{
			onAllChildOpened();
		}
	}
	
	/**
	 * Called when all child have been opened, set the current
	 * block state to open then call the success callback.
	 */
	private function onAllChildOpened():Void
	{
		this._state = opened;
		_openBlockSuccessCallback(this);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// block loading callbacks
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * When the block's data has been loaded, resume the opening of the block
	 * @param	blockBuilder the blockBuilder which loaded this block's data
	 */
	private function onBlockDataLoaded(blockBuilder:BlockBuilder):Void
	{
		//call this method to go to the next
		//insitialisation step
		doOpen(blockBuilder);
	}
	
	/**
	 * When the block's DOMObject has been loaded, resume the opening of the block
	 * @param	blockBuilder the blockBuilder which loaded this block's DOMObject
	 */
	private function onDOMObjectLoaded(blockBuilder:BlockBuilder):Void
	{
		//call this method to go to the next
		//initialisation step
		doOpen(blockBuilder);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// block load error callbacks
	//////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * When there was an error while loading the block, call the error
	 * callback with the errorMessage
	 * @param	errorMessage
	 */
	private function onBlockDataLoadError(errorMessage:String):Void
	{
		_openBlockErrorCallback(errorMessage);
	}
	
	/**
	 * When there was an error while loading the block, call the error
	 * callback with the errorMessage
	 * @param	errorMessage
	 */
	private function onDOMObjectLoadError(errorMessage:String):Void
	{
		_openBlockErrorCallback(errorMessage);
	}
	
	/**
	 * Called when there is an error while loading
	 * a children
	 * @param	errorMessage
	 */ 
	private function onChildOpenError(errorMessage:String):Void
	{
		_openBlockErrorCallback(errorMessage);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// utils methods
	//////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * Return the url of the skin of this block
	 * or an empty string if this block has no skin
	 * @return an url or null
	 */
	private function getSkinUrl():String
	{
		//the skin url that will be returned
		var skinUrl:String = "";
		
		switch (Config.getConfigData().runtime)
		{
			case js:
			skinUrl =  this._blockData.jsSkinURL;
			
			case as3:
			skinUrl =  this._blockData.as3SkinURL;
			
			case php:
			skinUrl = this._blockData.phpSkinURL;
		}
		
		return skinUrl;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Getters/Setters
	//////////////////////////////////////////////////////////////////////////////////////////
	
	public function getFileUrl():String
	{
		return this._fileUrl;
	}
	
	public function setFileUrl(value:String):String
	{
		this._fileUrl = value;
		return this._fileUrl;
	}
	
	public function getChildren():Array<Block>
	{
		return this._children;
	}
	
	public function getParent():Block
	{
		return this._parent;
	}
	
	public function getState():BlockStateValue
	{
		return this._state;
	}
	
	public function setParent(value:Block):Block
	{
		this._parent = value;
		return this._parent;
	}
	
	public function setIsAutoOpen(value:Bool):Bool
	{
		this._isAutoOpen = value;
		return this._isAutoOpen;
	}
	
	public function getIsAutoOpen():Bool
	{
		return this._isAutoOpen;
	}
	
	public function setIsTransversal(value:Bool):Bool
	{
		this._isTransversal = value;
		return this._isTransversal;
	}
	
	public function getIsTransversal():Bool
	{
		return this._isTransversal;
	}
	
	public function setBlockData(value:BlockData):BlockData
	{
		_blockData = value;
		return this._blockData;
	}
	
	public function getBlockData():BlockData
	{
		return this._blockData;
	}
	
	public function setDOMObject(value:DOMObject):DOMObject
	{
		_domObject = value;
		return this._domObject;
	}
	
	public function getDOMObject():DOMObject
	{
		return this._domObject;
	}
	
	public function setNativeClassInstance(nativeClassInstance:NativeInstance):NativeInstance
	{
		this._nativeClassInstance = nativeClassInstance;
		return this._nativeClassInstance;
	}
	
	public function getNativeClassInstance():NativeInstance
	{
		return this._nativeClassInstance;
	}
}