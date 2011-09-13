/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package block;


import haxe.Log;
import slPlayer.core.block.Block;
import slPlayer.core.block.BlockData;
import cocktail.domElement.DOMElement;
import utest.Assert;
import utest.Runner;
import utest.ui.Report;

/**
 * Unit test for all public methods of the Block
 * class
 */
class BlockTests 
{
	public static function main() 
	{
		var runner = new Runner();
		runner.addCase(new BlockTests());
		Report.create(runner);
		runner.run();
	}
	
	public function new()
	{
		
	}
	
	/**
	 * Test adding and removing one block to another
	 */
	public function testAddRemoveChild()
	{
		//create two blocks
		var parentBlock:Block = new Block("");
		var childBlock:Block = new Block("");
		
		//add one to another
		parentBlock.addChild(childBlock);
		
		//check that it has a become a child of the first block
		Assert.equals(parentBlock.getChildren()[0], childBlock);
		
		//remove it
		parentBlock.removeChild(childBlock);
		
		//check that the parent no longer have children
		Assert.equals(parentBlock.getChildren().length, 0);
	}
	
	/**
	 * Test adding/removing a block's display to another block's display
	 */
	public function testAddRemoveFromDisplayList()
	{
		
		#if flash9
		var refToDOM:Dynamic = flash.Lib.current;		
		#elseif js
		var refToDOM:Dynamic = js.Lib.document.body;	
		#end
		
		//create parent block and set it's domElement
		var parentBlock:Block = new Block("");
		var parentBlockDOMElement:DOMElement = new DOMElement(refToDOM);
		parentBlock.setDOMElement(parentBlockDOMElement);
		
		#if flash9
		var childRefToDOM:Dynamic = new flash.display.Sprite();		
		#elseif js
		var childRefToDOM:Dynamic = js.Lib.document.createElement("div");	
		#end
		
		//create child block and set it's domElement
		var childBlock:Block = new Block("");
		var childBlockDOMElement:DOMElement = new DOMElement(childRefToDOM);
		childBlock.setDOMElement(childBlockDOMElement);
		
		//add child to parent's display list
		parentBlock.addToDisplayList(childBlock.getDOMElement());
		
		//test it has indeed been added
		Assert.equals(parentBlock.getDOMElement().getChildren()[0], childBlock.getDOMElement());
		
		//remove it
		parentBlock.removeFromDisplayList(childBlock.getDOMElement());
		
		//test it was removed
		Assert.equals(parentBlock.getDOMElement().getChildren().length, 0);
		
		//test the case where a DOMElement is added to the display list
		//of a non visual block. The DOMElement is supposed to be attached to
		//the non visual block's parent display list
		
		//create the non-visual block and add it as a child of
		//the parent block, so that it has a parent
		var nonVisualBlock:Block = new Block("");
		parentBlock.addChild(nonVisualBlock);
		
		//add a DOMElement to the non-visual block
		nonVisualBlock.addToDisplayList(childBlock.getDOMElement());
		
		//check that it was added to the parent's display list
		Assert.equals(parentBlock.getDOMElement().getChildren()[0], childBlock.getDOMElement());
		
		//removes the DOMElement from the non-visual block
		nonVisualBlock.removeFromDisplayList(childBlock.getDOMElement());
		
		//check that it was removed from the parent's display list
		Assert.equals(parentBlock.getDOMElement().getChildren().length, 0);
	}
	
	/////////////////////////////////////////////////////////////////////
	
	/**
	 * Test the opening/closing of a block. Simple test, the block
	 * as no parent and children, all the data are provided for the opening
	 * to be synchronous
	 */
	public function testOpenCloseBlock()
	{
		//create new block
		var parentBlock:Block = new Block("");
		
		//set up it's block data so that it doesn't need
		//to load anymore data
		var parentBlockBlockData:BlockData = {
			className:"slPlayer_unit_tests.core.block.TestNativeClass",
			descriptorUID:null,
			jsSkinURL:null,
			as3SkinURL:null,
			phpSkinURL:null,
			properties:new Hash<Dynamic>(),
			metaData:new Hash<Dynamic>()
		};
		
		parentBlock.setBlockData(parentBlockBlockData);
		
		var successCallback:Block->Void = Assert.createEvent(onBlockOpenSuccess);
		
		Assert.same(parentBlock.getState(), closed);
		
		parentBlock.open(successCallback, onBlockOpenError);
		
		
	}
	
	/**
	 * call when block was loaded
	 */
	public function onBlockOpenSuccess(openedBlock:Block):Void
	{
		Assert.same(openedBlock.getState(), opened);
		
		openedBlock.close();
		
		Assert.same(openedBlock.getState(), closed);
	}
	
	public function onBlockOpenError(error:String):Void
	{
		
	}
	
	/////////////////////////////////////////////////////////////////////
	
	/**
	 * Same as first one but added test setting of properties on the native class. More
	 * of an integration test as it test both opening and attribute setting.
	 */
	public function testOpenCloseBlock2()
	{
		var parentBlock:Block = new Block("");
		
		var properties:Hash<Dynamic> = new Hash<Dynamic>();
		
		properties.set("testStringProperty", "testStringValue");
		
		properties.set("testIntProperty", 1);
		
		properties.set("testFloatProperty", 1.2);
		
		properties.set("testBoolProperty", true);
		
		properties.set("testArrayProperty", [1,"value"]);
		
		var parentBlockBlockData:BlockData = {
			className:"slPlayer_unit_tests.core.block.TestNativeClass",
			descriptorUID:null,
			jsSkinURL:null,
			as3SkinURL:null,
			phpSkinURL:null,
			properties:properties,
			metaData:new Hash<Dynamic>()
		};
		
		parentBlock.setBlockData(parentBlockBlockData);
		
		var successCallback:Block->Void = Assert.createEvent(onBlockOpenSuccess2);
		
		
		parentBlock.open(successCallback, onBlockOpenError2);
		
		
	}
	
	/**
	 * test that each property was set
	 */
	public function onBlockOpenSuccess2(openedBlock:Block):Void
	{
		
		Assert.equals(openedBlock.getNativeClassInstance().getField("testStringProperty"), "testStringValue");
		
		Assert.equals(openedBlock.getNativeClassInstance().getField("testBoolProperty"), true);
		
		Assert.equals(openedBlock.getNativeClassInstance().getField("testIntProperty"), 1);
		
		Assert.equals(openedBlock.getNativeClassInstance().getField("testFloatProperty"), 1.2);
		
		Assert.equals(openedBlock.getNativeClassInstance().getField("testArrayProperty")[0], 1);
		Assert.equals(openedBlock.getNativeClassInstance().getField("testArrayProperty")[1], "value");
		
	}
	
	public function onBlockOpenError2(error:String):Void
	{
		
	}
	
	/////////////////////////////////////////////////////////////////////
	
	/**
	 * Same as first one but added test opening of children
	 */
	public function testOpenCloseBlock3()
	{
		var parentBlock:Block = new Block("");
		
		
		var parentBlockBlockData:BlockData = {
			className:"slPlayer_unit_tests.core.block.TestNativeClass",
			descriptorUID:null,
			jsSkinURL:null,
			as3SkinURL:null,
			phpSkinURL:null,
			properties:new Hash<Dynamic>(),
			metaData:new Hash<Dynamic>()
		};
		
		parentBlock.setBlockData(parentBlockBlockData);
		
		#if flash9
		var refToDOM:Dynamic = flash.Lib.current;		
		#elseif js
		var refToDOM:Dynamic = js.Lib.document.body;	
		#end
		
		var parentDOMElement:DOMElement = new DOMElement(refToDOM);
		
		var childBlock:Block = new Block("");
		
		var childBlockData:BlockData = {
			className:"slPlayer_unit_tests.core.block.TestNativeClass",
			descriptorUID:null,
			jsSkinURL:null,
			as3SkinURL:null,
			phpSkinURL:null,
			properties:new Hash<Dynamic>(),
			metaData:new Hash<Dynamic>()
		};
		
		childBlock.setBlockData(childBlockData);
		childBlock.setIsAutoOpen(true);
		
		
		var successCallback:Block->Void = Assert.createEvent(onBlockOpenSuccess3);
		
		parentBlock.addChild(childBlock);
		
		parentBlock.open(successCallback, onBlockOpenError3);
		
		
	}
	
	/**
	 * test that chiod block is opened and closed with the parent block
	 */
	public function onBlockOpenSuccess3(openedBlock:Block):Void
	{
		//test children was opened
		Assert.equals(openedBlock.getChildren()[0].getState(), opened);
		
		openedBlock.close();
		
		//test children was closed
		Assert.equals(openedBlock.getChildren()[0].getState(), closed);
		
	}
	
	public function onBlockOpenError3(error:String):Void
	{
		
	}
	
	/////////////////////////////////////////////////////////////////////
	
}

/**
 * Use as the native class instantiated by blocks
 */
class TestNativeClass
{
	
	public var testStringProperty:String;
	
	public var testIntProperty:Int;
	
	public var testFloatProperty:Float;
	
	public var testBoolProperty:Bool;
	
	public var testArrayProperty:Array<Dynamic>;
	
	public function new()
	{
		
	}
}