/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.core.config;

import org.silex.core.config.ConfigData;

/**
 * this structure is used to store config data for Silex
 * it is a static class, so you can access it with Config without creating a new instance.
 * @example if (Config.getConfigData().scaleMode == showAll)
 * @example Config.addConfigValues(flash.Lib._root); // load the FlashVars into config
 */
class Config
{
	/**
	 * current configuration object
	 */
	public static var configData : ConfigData = {
			publicationId : "manager",
			scaleMode : noScale,
			runtime:as3
		};
	/**
	 * class constructor
	 */
	private function new()
	{
	}
	//////////////////////////////////////////////////////////////////////////////////////////
	// methods used to get / load / save config
	//////////////////////////////////////////////////////////////////////////////////////////
	/**
	 * retrieve the configData object
	 */
	public static function getConfigData() : ConfigData
	{
		return duplicateConfigData(configData);
	}
	/**
	 * replace the configData object
	 */
	public static function setConfigData(newConfigData : ConfigData) : Void
	{
		configData = duplicateConfigData(newConfigData);
	}
	/**
	 * load a String object 
	 * convert the String object with key/values pairs to typed config values
	 * merge the config data into configData
	 * @param	stringObject	the object with config data as key/values pairs 
	 * @example Config.getInstance().addConfigValues({publicationId:"manager", scaleMode="noScale" ... 
	 */
	public static function addConfigValues(stringObject : Dynamic<String>) : Void
	{
		// publicationId
		if (stringObject.publicationId != null)
			configData.publicationId = stringObject.publicationId;
		// scaleMode
		if (stringObject.scaleMode != null)
			configData.scaleMode = Type.createEnum(ScaleModeValue,stringObject.scaleMode);
	}
	/**
	 * returns the config data as an object of String, useful to store the config
	 */
	public static function getConfigDataAsUntyped() : Dynamic<String>
	{
		// result object which will be converted in ConfigData
		var stringObject : Dynamic<String> = {
			publicationId : configData.publicationId,
			scaleMode : Std.string(configData.scaleMode)
		};
		
		return stringObject;
	}
	/**
	 * returns a duplicated instance of the config data
	 */
	public static function duplicateConfigData(configData) : ConfigData
	{
		// result object which will be converted in ConfigData
		var duplicatedConfigData : ConfigData = {
			publicationId : configData.publicationId,
			scaleMode : configData.scaleMode,
			runtime : configData.runtime
		};
		
		return duplicatedConfigData;
	}
}