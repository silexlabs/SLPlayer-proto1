/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.blocks;

import haxe.Log;
import org.silex.runtime.domObject.DOMObject;
import haxe.Timer;
import org.silex.runtime.resource.ResourceLoaderManager;
import org.silex.runtime.domObject.ImageDOMObject;

/**
 * This class is instanciated by the BlockBuilder class, when the corresponding tag is found in the block's BlockData::className attribute
 * It is in charge of loading an image into an ImageDOMObject and set it as the Block::domObject property
 * @author a.hoyau [at] silexlabs.org
 */
class Image
{
	/**
	 * Class constructor
	 */
	public function new() 
	{
		// to do this way: Sequencer.doLater(initDone);
		Timer.delay(initDone, 10);
	}
	/**
	 * After all properties are set by BlockBuilder, we can load the Image resource
	 */
	public function initDone():Void
	{
		Log.trace("initDone - YES "+url+" - "+x);
		if (url != "" && url != null)
		{
			Log.trace("initDone - start loading asset");
			ResourceLoaderManager.loadImage(url, _imageLoadedSuccess, _imageLoadedError);
		}
	}
	/**
	 * desired position for the DOMObject
	 */
	public var x:Float;
	/**
	 * URL for the image
	 */
	public var url:String;
	/**
	 * DOMObject instance which contains the loaded asset
	 */
	private var _domObject:DOMObject;
	/**
	 * callback for the image loading
	 */ 
	private function _imageLoadedSuccess(imageDOMObject:ImageDOMObject):Void
	{
		Log.trace("_imageLoadedSuccess "+imageDOMObject);
		
	}
	/**
	 * callback for the image loading
	 */ 
	private function _imageLoadedError(str:String):Void
	{
		Log.trace("_imageLoadedError "+str);
	}
}