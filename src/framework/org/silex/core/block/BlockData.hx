/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.core.block;

/**
 * Structure which holds the data of a block.
 */
typedef BlockData =
{
	/**
	 * TO BE STORED IN THE XML AS ROOT NODE NAME (class name) & AND AS AN ATTRIBUTE VALUE OF THE ROOT NODE (package)
	 */
	
	/**
	 * The name of the class which will be instanciated and referenced by Block::nativeClassInstance.
	 * May be set to null if there is no controller class.
	 * example: If BlockData root node name is HGroup, className should be org.silex.blocks.HGroup
	 */
	var className:String;
	
	/**
	 * TO BE STORED IN THE XML AS CHILDREN NODES OF THE BLOCKDATA NODE
	 */

	 /**
	 * The UID of the descriptor which describes the block.
	 * It is useful to add the block and to edit the block.
	 */
	var descriptorUID : String;
	
	/**
	 * URLs of the skin, depending on the target.
	 * May be set to null if there is no skin.
	 */
	var jsSkinURL:String;
	var as3SkinURL:String;
	var phpSkinURL:String;
	
	/**
	 * The properties of the block, which are pushed to the controller class or to the skin.
	 */
	var properties:Hash<Dynamic>;
	
	/**
	 * The meta data of the block, which are available for the controller class and for the skin,
	 * through a call to Block.getBlock(this);
	 */
	var metaData:Hash<Dynamic>;
}

/**
 * An enum reflecting the current state of the block.
 */
enum BlockStateValue 
{
	opened;
	closed;
	loading;
}
