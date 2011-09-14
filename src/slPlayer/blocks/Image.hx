/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package slPlayer.blocks;

import cocktail.nativeElement.NativeElementManager;
import cocktail.nativeElement.NativeElementData;
import haxe.Log;
import cocktail.domElement.DOMElement;
import haxe.Timer;
import cocktail.resource.ResourceLoaderManager;
import cocktail.domElement.ImageDOMElement;
import slPlayer.core.block.Block;
import slPlayer.core.publication.Publication;

/**
 * This class is instanciated by the BlockBuilder class, when the corresponding tag is found in the block's BlockData::className attribute
 * It is in charge of loading an image into an ImageDOMElement and set it as the Block::domElement property
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
		if (url != "" && url != null)
		{
			var imageDOMElement:ImageDOMElement = new ImageDOMElement(NativeElementManager.createNativeElement(image));
			var publication:Publication = Publication.getPublicationByNativeInstance(this);
			var block:Block = publication.getBlockByNativeInstance(this);
			block.domElement = imageDOMElement;
			
			ResourceLoaderManager.loadImage(url, _imageLoadedSuccess, _imageLoadedError, imageDOMElement);
		}
	}
	
	/**
	 * URL for the image
	 */
	public var url:String;
	
	/**
	 * callback for the image loading
	 */ 
	private function _imageLoadedSuccess(imageDOMElement:ImageDOMElement):Void
	{
		var publication:Publication = Publication.getPublicationByNativeInstance(this);
		var block:Block = publication.getBlockByNativeInstance(this);
		block.parent.addToDisplayList(imageDOMElement);
		Log.trace("_imageLoadedSuccess "+imageDOMElement);
	}
	/**
	 * callback for the image loading
	 */ 
	private function _imageLoadedError(str:String):Void
	{
		Log.trace("_imageLoadedError "+str);
	}
}