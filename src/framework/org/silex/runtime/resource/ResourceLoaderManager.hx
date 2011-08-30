/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.ressource;

import haxe.Log;
import org.silex.runtime.domobject.ContainerDOMObject;
import org.silex.runtime.domobject.DOMObject;
import org.silex.runtime.domobject.ImageDOMObject;
import org.silex.runtime.domobject.js.AnimationDOMObject;
import org.silex.runtime.domobject.TextDOMObject;
import org.silex.runtime.ressource.RessourceData;

#if flash9
import org.silex.runtime.ressource.as3.StringLoader;
import org.silex.runtime.ressource.as3.ImageLoader;
import org.silex.runtime.ressource.as3.TextLoader;
import org.silex.runtime.ressource.as3.ContainerLoader;
import org.silex.runtime.ressource.as3.AnimationLoader;
import org.silex.runtime.ressource.as3.LibraryLoader;

#elseif js
import org.silex.runtime.ressource.js.StringLoader;
import org.silex.runtime.ressource.js.ImageLoader;
import org.silex.runtime.ressource.js.TextLoader;
import org.silex.runtime.ressource.js.ContainerLoader;
import org.silex.runtime.ressource.js.AnimationLoader;
import org.silex.runtime.ressource.js.LibraryLoader;

#elseif php
import org.silex.runtime.ressource.php.StringLoader;
import org.silex.runtime.ressource.php.ImageLoader;
import org.silex.runtime.ressource.php.TextLoader;
import org.silex.runtime.ressource.php.ContainerLoader;
import org.silex.runtime.ressource.php.AnimationLoader;
import org.silex.runtime.ressource.php.LibraryLoader;

#end	

/**
 * Manages the queue of files to load, and exposes method to load ressources of diferrent types. 
 * @author Yannick DOMINGUEZ
 */
class RessourceLoaderManager 
{	
	/**
	 * Queue of files to load, stored in the order where they must be loaded
	 */
	private static var _ressourceDataArray:Array<RessourceData>;
	
	/**
	 * Wheter a file is currently loading
	 */
	private static var _isLoading:Bool = false;
	
	/**
	 * The constructor is private as this class is meant to be accessed through static public method.
	 */
	private function new() 
	{
		
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Public methods, starting the files loading
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Create a RessourceData object and add to the list of files to load by calling addRessourceData
	 * @param	url the url of the file to load
	 * @param	successCallback the callback which must be called once the file is successfully done loading
	 * @param	errorCallback the callback which must be called if there was an error during loading
	 * @param	allowCache wheter to allow the browser to cache the loaded file
	 */
	public static function loadImage(url:String, successCallback:ImageDOMObject->Void, errorCallback:String->Void , allowCache:Bool = true):Void
	{
		var ressourceDataToAdd:RessourceData = {
			url:url,
			onLoadComplete:successCallback,
			onLoadError:errorCallback,
			allowCache:allowCache,
			loadingType:image
		};
		
		addRessourceData(ressourceDataToAdd);
	}
	
	/**
	 * Create a RessourceData object and add to the list of files to load by calling addRessourceData
	 * @param	url the url of the file to load
	 * @param	successCallback the callback which must be called once the file is successfully done loading
	 * @param	errorCallback the callback which must be called if there was an error during loading
	 * @param	allowCache wheter to allow the browser to cache the loaded file
	 */
	public static function loadText(url:String, successCallback:TextDOMObject->Void, errorCallback:String->Void , allowCache:Bool = true):Void
	{
		var ressourceDataToAdd:RessourceData = {
			url:url,
			onLoadComplete:successCallback,
			onLoadError:errorCallback,
			allowCache:allowCache,
			loadingType:text
		};
		
		addRessourceData(ressourceDataToAdd);
	}
	
	/**
	 * Create a RessourceData object and add to the list of files to load by calling addRessourceData
	 * @param	url the url of the file to load
	 * @param	successCallback the callback which must be called once the file is successfully done loading
	 * @param	errorCallback the callback which must be called if there was an error during loading
	 * @param	allowCache wheter to allow the browser to cache the loaded file
	 */
	public static function loadAnimation(url:String, successCallback:AnimationDOMObject->Void, errorCallback:String->Void , allowCache:Bool = true):Void
	{
		var ressourceDataToAdd:RessourceData = {
			url:url,
			onLoadComplete:successCallback,
			onLoadError:errorCallback,
			allowCache:allowCache,
			loadingType:animation
		};
		
		addRessourceData(ressourceDataToAdd);
	}
	
	/**
	 * Create a RessourceData object and add to the list of files to load by calling addRessourceData
	 * @param	url the url of the file to load
	 * @param	successCallback the callback which must be called once the file is successfully done loading
	 * @param	errorCallback the callback which must be called if there was an error during loading
	 * @param	allowCache wheter to allow the browser to cache the loaded file
	 */
	public static function loadContainer(url:String, successCallback:ContainerDOMObject->Void, errorCallback:String->Void , allowCache:Bool = true):Void
	{
		var ressourceDataToAdd:RessourceData = {
			url:url,
			onLoadComplete:successCallback,
			onLoadError:errorCallback,
			allowCache:allowCache,
			loadingType:container
		};
		
		addRessourceData(ressourceDataToAdd);
	}
	
	/**
	 * Create a RessourceData object and add to the list of files to load by calling addRessourceData
	 * @param	url the url of the file to load
	 * @param	successCallback the callback which must be called once the file is successfully done loading
	 * @param	errorCallback the callback which must be called if there was an error during loading
	 * @param	allowCache wheter to allow the browser to cache the loaded file
	 */
	public static function loadString(url:String, successCallback:String->Void, errorCallback:String->Void , allowCache:Bool = true):Void
	{
		var ressourceDataToAdd:RessourceData = {
			url:url,
			onLoadComplete:successCallback,
			onLoadError:errorCallback,
			allowCache:allowCache,
			loadingType:data
		};
		
		addRessourceData(ressourceDataToAdd);
	}
	
	/**
	 * Create a RessourceData object and add to the list of files to load by calling addRessourceData
	 * @param	url the url of the file to load
	 * @param	successCallback the callback which must be called once the file is successfully done loading
	 * @param	errorCallback the callback which must be called if there was an error during loading
	 * @param	allowCache wheter to allow the browser to cache the loaded file
	 */
	public static function loadLibrary(url:String, successCallback:Dynamic->Void, errorCallback:String->Void , allowCache:Bool = true):Void
	{
		var ressourceDataToAdd:RessourceData = {
			url:url,
			onLoadComplete:successCallback,
			onLoadError:errorCallback,
			allowCache:allowCache,
			loadingType:library
		};
		
		addRessourceData(ressourceDataToAdd);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Private methods, managing the loading queue
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * stores the RessourceData in ressourceDataArray. Call loadNextRessource if isLoading is false. 
	 * @param ressourceData the new ressourceData to add
	 */
	private static function addRessourceData(ressourceData:RessourceData):Void
	{
		//instantiate the array if first use
		if (_ressourceDataArray == null)
		{
			_ressourceDataArray = new Array<RessourceData>();
		}
		
		_ressourceDataArray.push(ressourceData);
		
		if (_isLoading == false)
		{
			loadNextRessource();
		}
	}
	
	/**
	 *  Set isLoading to true or false depending on the content of filesArray.
	 *	Retrieve the next RessourceData object.
	 *	Create the corresponding RessourceLoader
	 *	Actually start loading the ressource.
	 */
	private static function loadNextRessource():Void
	{
		//if there are no more elements to load in the ressourceData array,
		//do nothing
		if (_ressourceDataArray.length == 0)
		{
			_isLoading = false;
		}
		//else load the next file in the array
		else
		{
			_isLoading = true;
			
			var ressourceDataToLoad:RessourceData = _ressourceDataArray[0];
			
			var ressourceLoader:RessourceLoader;
			switch (ressourceDataToLoad.loadingType)
			{
				case data:
				ressourceLoader = new StringLoader();
				
				case image: 
				ressourceLoader = new ImageLoader();
				
				case text:
				ressourceLoader = new TextLoader();
				
				case animation:
				ressourceLoader = new AnimationLoader();
				
				case container:
				ressourceLoader = new ContainerLoader();
				
				case library:
				ressourceLoader = new LibraryLoader();
			}
			
			ressourceLoader.load(ressourceDataToLoad.url, onLoadComplete, onLoadError, ressourceDataToLoad.allowCache);
		}
	}
	
	/**
	 * Remove the 1st RessourceData from ressourceDataArray and call the success callback.
	 * Then call loadNextRessource.
	 * @param	data the loaded file data
	 */
	private static function onLoadComplete(data:Dynamic):Void
	{
		var loadedRessourceData:RessourceData = _ressourceDataArray.shift();
		
		loadedRessourceData.onLoadComplete(data); 
		
		loadNextRessource();
	}
	
	/**
	 * Remove the 1st RessourceData from ressourceDataArray and call the error callback.
	 * Then call loadNextRessource.
	 * @param	data the loading error data
	 */
	private static function onLoadError(data:Dynamic):Void
	{
		var errorRessourceData:RessourceData = _ressourceDataArray.shift();
		
		errorRessourceData.onLoadError(data);
		
		loadNextRessource();
	}
	
}