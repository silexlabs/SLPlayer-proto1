/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.core.config;

/**
 * this structure is used to store config data for Silex
 * when you add config attributes here, you should change also ConfigManager::defaultConfigData, ConfigManager::addConfigValues, ConfigManager::getConfigDataAsObject
 */
typedef ConfigData =
{
	/**
	 * current publication id
	 */
	var publicationId : String;
	/**
	 * scalemode of the publication
	 */
	var scaleMode : ScaleModeValue;
	
	/**
	 * current publication runtime
	 */
	var runtime : RuntimeValue;
}
/**
 * this enum is for the scale modes of Silex
 * 
 */
enum ScaleModeValue
{
	showAll;
	noScale;
	pixel;
	scroll;
}

/**
 * this enum is for the different runtime
 * supported by Silex
 */
enum RuntimeValue
{
	as3;
	js;
	php;
}

