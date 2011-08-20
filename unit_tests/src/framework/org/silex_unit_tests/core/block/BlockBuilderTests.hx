/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex_unit_tests.core.block;

import org.silex.core.block.Block;
import org.silex.core.block.BlockData;
import org.silex.core.block.BlockBuilder;
import utest.Assert;
import utest.Runner;
import utest.ui.Report;

class BlockBuilderTests 
{
	public static function main()
	{
		var runner = new Runner();
		runner.addCase(new BlockBuilderTests());
		Report.create(runner);
		runner.run();
	}
	
	public function new()
	{
		
	}
	
    /**
     * Sorts BlockData Arrays by className, which is needed as each target can order arrays differently
	 * To be used by array.sort()
	 * 
     * @param	a
     * @param	b
     * @return
     */
	private function blockDataSort(a:BlockData, b:BlockData):Int
    {
		var aString:String = a.className.toLowerCase();
		var bString:String = b.className.toLowerCase();

		if (aString < bString) return -1;
		if (aString > bString) return 1;
		return 0;
    }

	/**
	 * test deserializeBlockData
	 */
	public function test_deserializeBlockData_1() 
	{
		// INPUT

		var xmlString:String = '<HGroup>
			<!-- these properties will be set on the controller class -->
			<properties>
				<x type="Float">606.6</x>
				<y type="Float">199.95</y>
				<width type="Integer">76</width>
				<height type="Integer">26</height>
			</properties>
			<!-- the meta data are not set on any object -->
			<!-- the meta data are available for the controller class, the skin or the plugins -->
			<metaData>
			</metaData>
			<children>
				<!-- this is a block with the controller class set to org.silex.blocks.Image -->
				<Image>
					<!-- these properties will be set on the controller class -->
					<properties>
						<url>media/test1/im1.jpg</url>
						<x type="Float">606.6</x>
						<y type="Float">199.95</y>
						<width type="Integer">76</width>
						<height type="Integer">26</height>
						<rotation type="Integer">0</rotation>
						<alpha type="Integer">1</alpha>
						<textFormat type="Array">
							<item><![CDATA[font=Arial]]></item>
							<item><![CDATA[color=4D4D4D]]></item>
							<item><![CDATA[size=17]]></item>
						</textFormat>
					</properties>
					<!-- the meta data are not set on any object -->
					<!-- the meta data are available for the controller class, the skin or the plugins -->
					<metaData>
					</metaData>
				</Image>
				<!-- this is a block with a custom controller class, loaded as part of a library at startup -->
				<CustomControllerClass nameSpace="com.mycompany.silexcomponents" isAutoOpen="false">
					<properties>
					</properties>
					<metaData>
					</metaData>
				</CustomControllerClass>
				<!-- this block data is in a separate XML file -->
				<Group isAutoOpen="true" hasSeparateFile="true" fileUrl="contents/mysite1/layer023.xml" />
				<!-- here is a skinnable block, for which a domObject containing assets is loaded before the controller class is instanciated -->
				<SkinableBlock nameSpace="com.mycompany.silexcomponents" isAutoOpen="false">
					<!-- URLs of the skin, depending on the target runtime -->
					<domRoot>maindiv.containerdiv</domRoot>
					<jsSkin>
						<url>plugins/mycompanyComponents/js/SkinableBlock.js</url>
					</jsSkin>
					<phpSkin>
						<url>plugins/mycompanyComponents/php/SkinableBlock.php</url>
					</phpSkin>
					<as3Skin>
						<url>plugins/mycompanyComponents/as2/SkinableBlock.swf</url>
					</as3Skin>
					<properties>
					</properties>
					<metaData>
					</metaData>
				</SkinableBlock>
			</children>
		</HGroup>';
	
		
		// TESTED PROCESS
		
		var block:Block = new Block('');
		BlockBuilder.deserializeBlockData(block, xmlString);

		
		// VERIFICATION
		
		var childrenBlock:Array<Block> = block.getChildren();
		var childrenBlockData:Array<BlockData> = new Array<BlockData>();
		for (childBlock in childrenBlock)
		{
			childrenBlockData.push(childBlock.getBlockData());
		}
		childrenBlockData.sort(blockDataSort);
		

		// parent HGroup
		Assert.equals('org.silex.blocks.HGroup', block.getBlockData().className);
		Assert.equals(606.6, block.getBlockData().properties.get('x'));
		Assert.equals(76, block.getBlockData().properties.get('width'));
		
		var child:BlockData;
		child = childrenBlockData.pop();
		// child Image
		Assert.equals('org.silex.blocks.Image', child.className);
		Assert.equals(606.6, child.properties.get('x'));
		Assert.equals(76, child.properties.get('width'));
		Assert.equals(0, child.properties.get('rotation'));
		Assert.equals(1, child.properties.get('alpha'));

		child = childrenBlockData.pop();
		// child Group
		Assert.equals('org.silex.blocks.Group', child.className);
		Assert.equals(true, child.isAutoOpen);
		Assert.equals(true, child.hasSeparateFile);
		Assert.equals('contents/mysite1/layer023.xml', child.fileUrl);
		
		child = childrenBlockData.pop();
		// child SkinableBlock
		Assert.equals('com.mycompany.silexcomponents.SkinableBlock', child.className);
		Assert.equals(false, child.isAutoOpen);
		Assert.equals('maindiv.containerdiv', child.domRoot);
		Assert.equals('plugins/mycompanyComponents/js/SkinableBlock.js', child.jsURL);
		Assert.equals('plugins/mycompanyComponents/php/SkinableBlock.php', child.phpURL);
		Assert.equals('plugins/mycompanyComponents/as2/SkinableBlock.swf', child.as3URL);

		child = childrenBlockData.pop();
		// child CustomControllerClass
		Assert.equals('com.mycompany.silexcomponents.CustomControllerClass', child.className);
		Assert.equals(false, child.isAutoOpen);
	}

	/**
	 * COMMENTED AS TESTS DONE ON A PRIVATE FUNCTION.
	 * TO BE KEPT.
	 */
	
	/**
	 * test createBlockData
	 */
	/*public function test_createBlockData_1() 
	{
		// INPUT
		
		var xmlString:String = '<HGroup>
			<!-- these properties will be set on the controller class -->
			<properties>
			   <x type="Float">606.6</x>
			   <y type="Float">199.95</y>
			   <width type="Integer">76</width>
			   <height type="Integer">26</height>
			   <bool1 type="Boolean">true</bool1>
			   <bool2 type="Boolean">false</bool2>
			   <string1 type="String">coucou</string1>
			   <string2 type="String">hello</string2>
			</properties>
			<!-- the meta data are not set on any object -->
			<!-- the meta data are available for the controller class, the skin or the plugins -->
			<metaData>
			</metaData>
		</HGroup>';
		
		var xml:Xml = Xml.parse(xmlString);

		
		// TESTED PROCESS
		
		var blockData:BlockData = BlockBuilder.createBlockData(xml.firstElement());

		
		// VERIFICATION
		
		Assert.equals('org.silex.blocks.HGroup', blockData.className);
		Assert.equals(606.6, blockData.properties.get('x'));
		Assert.equals(76, blockData.properties.get('width'));
		Assert.equals(true, blockData.properties.get('bool1'));
		Assert.equals(false, blockData.properties.get('bool2'));
		Assert.equals('coucou', blockData.properties.get('string1'));
		Assert.equals('hello', blockData.properties.get('string2'));
	}
	
	/**
	 * test createBlockData
	 */
	/*public function test_createBlockData_2() 
	{
		// INPUT

		var xmlString:String = '<Image>
				<!-- these properties will be set on the controller class -->
				<properties>
					<url>media/test1/im1.jpg</url>
					<x type="Float">606.6</x>
					<y type="Float">199.95</y>
					<width type="Integer">76</width>
					<height type="Integer">26</height>
					<rotation type="Integer">0</rotation>
					<alpha type="Integer">1</alpha>
					<textFormat type="Array">
						<item><![CDATA[font=Arial]]></item>
						<item><![CDATA[color=4D4D4D]]></item>
						<item><![CDATA[size=17]]></item>
					</textFormat>
				</properties>
				<!-- the meta data are not set on any object -->
				<!-- the meta data are available for the controller class, the skin or the plugins -->
				<metaData>
				</metaData>
			</Image>';
		
		var xml:Xml = Xml.parse(xmlString);

		
		// TESTED PROCESS
		
		var blockData:BlockData = BlockBuilder.createBlockData(xml.firstElement());
		

		// VERIFICATION
		
		Assert.equals('org.silex.blocks.Image', blockData.className);
		Assert.equals(606.6, blockData.properties.get('x'));
		Assert.equals(76, blockData.properties.get('width'));
		Assert.equals(0, blockData.properties.get('rotation'));
		Assert.equals(1, blockData.properties.get('alpha'));
	}
	
	/**
	 * test createBlockData
	 */
	/*public function test_createBlockData_3() 
	{
		// INPUT

		var xmlString:String = '<CustomControllerClass nameSpace="com.mycompany.silexcomponents" isAutoOpen="false">
				<properties>
				</properties>
				<metaData>
				</metaData>
			</CustomControllerClass>';
		
		var xml:Xml = Xml.parse(xmlString);

		
		// TESTED PROCESS
		
		var blockData:BlockData = BlockBuilder.createBlockData(xml.firstElement());
		

		// VERIFICATION
		
		Assert.equals('com.mycompany.silexcomponents.CustomControllerClass', blockData.className);
		Assert.equals(false, blockData.isAutoOpen);
	}
	
	/**
	 * test createBlockData
	 */
	/*public function test_createBlockData_4() 
	{
		// INPUT

		var xmlString:String = '<Group isAutoOpen="true" hasSeparateFile="true" fileUrl="contents/mysite1/layer023.xml" />';
		var xml:Xml = Xml.parse(xmlString);
		
		
		// TESTED PROCESS
		
		var blockData:BlockData = BlockBuilder.createBlockData(xml.firstElement());
		

		// VERIFICATION
		
		Assert.equals('org.silex.blocks.Group', blockData.className);
		Assert.equals(true, blockData.isAutoOpen);
		Assert.equals(true, blockData.hasSeparateFile);
		Assert.equals('contents/mysite1/layer023.xml', blockData.fileUrl);
	}
	
	/**
	 * test createBlockData
	 */
	/*public function test_createBlockData_5() 
	{
		// INPUT

		var xmlString:String = '<SkinableBlock nameSpace="com.mycompany.silexcomponents" isAutoOpen="false">
				<!-- URLs of the skin, depending on the target runtime -->
				<domRoot>maindiv.containerdiv</domRoot>
				<jsSkin>
					<url>plugins/mycompanyComponents/js/SkinableBlock.js</url>
				</jsSkin>
				<phpSkin>
					<url>plugins/mycompanyComponents/php/SkinableBlock.php</url>
				</phpSkin>
				<as3Skin>
					<url>plugins/mycompanyComponents/as2/SkinableBlock.swf</url>
				</as3Skin>
				<properties>
				</properties>
				<metaData>
				</metaData>
			</SkinableBlock>';
		
		var xml:Xml = Xml.parse(xmlString);
		

		// TESTED PROCESS
		
		var blockData:BlockData = BlockBuilder.createBlockData(xml.firstElement());
		

		// VERIFICATION
		
		Assert.equals('com.mycompany.silexcomponents.SkinableBlock', blockData.className);
		Assert.equals(false, blockData.isAutoOpen);
		Assert.equals('maindiv.containerdiv', blockData.domRoot);
		Assert.equals('plugins/mycompanyComponents/js/SkinableBlock.js', blockData.jsURL);
		Assert.equals('plugins/mycompanyComponents/php/SkinableBlock.php', blockData.phpURL);
		Assert.equals('plugins/mycompanyComponents/as2/SkinableBlock.swf', blockData.as3URL);
	}
	
	/**
	 * test createBlockData
	 */
	/*public function test_createBlockData_6() 
	{
		// INPUT

		var xmlString:String = '<HGroup>
			<!-- these properties will be set on the controller class -->
			<properties>
				<x type="Float">606.6</x>
				<y type="Float">199.95</y>
				<width type="Integer">76</width>
				<height type="Integer">26</height>
			</properties>
			<!-- the meta data are not set on any object -->
			<!-- the meta data are available for the controller class, the skin or the plugins -->
			<metaData>
			</metaData>
			<children>
				<!-- this is a block with the controller class set to org.silex.blocks.Image -->
				<Image>
					<!-- these properties will be set on the controller class -->
					<properties>
						<url>media/test1/im1.jpg</url>
						<x type="Float">606.6</x>
						<y type="Float">199.95</y>
						<width type="Integer">76</width>
						<height type="Integer">26</height>
						<rotation type="Integer">0</rotation>
						<alpha type="Integer">1</alpha>
						<textFormat type="Array">
							<item><![CDATA[font=Arial]]></item>
							<item><![CDATA[color=4D4D4D]]></item>
							<item><![CDATA[size=17]]></item>
						</textFormat>
					</properties>
					<!-- the meta data are not set on any object -->
					<!-- the meta data are available for the controller class, the skin or the plugins -->
					<metaData>
					</metaData>
				</Image>
				<!-- this is a block with a custom controller class, loaded as part of a library at startup -->
				<CustomControllerClass nameSpace="com.mycompany.silexcomponents" isAutoOpen="false">
					<properties>
					</properties>
					<metaData>
					</metaData>
				</CustomControllerClass>
				<!-- this block data is in a separate XML file -->
				<Group isAutoOpen="true" hasSeparateFile="true" fileUrl="contents/mysite1/layer023.xml" />
				<!-- here is a skinnable block, for which a domObject containing assets is loaded before the controller class is instanciated -->
				<SkinableBlock nameSpace="com.mycompany.silexcomponents" isAutoOpen="false">
					<!-- URLs of the skin, depending on the target runtime -->
					<domRoot>maindiv.containerdiv</domRoot>
					<jsSkin>
						<url>plugins/mycompanyComponents/js/SkinableBlock.js</url>
					</jsSkin>
					<phpSkin>
						<url>plugins/mycompanyComponents/php/SkinableBlock.php</url>
					</phpSkin>
					<as3Skin>
						<url>plugins/mycompanyComponents/as2/SkinableBlock.swf</url>
					</as3Skin>
					<properties>
					</properties>
					<metaData>
					</metaData>
				</SkinableBlock>
			</children>
		</HGroup>';
	
		var xml:Xml = Xml.parse(xmlString);
		
		
		// TESTED PROCESS
		
		var blockData:BlockData = BlockBuilder.createBlockData(xml.firstElement());
		

		// VERIFICATION
		
		Assert.equals('org.silex.blocks.HGroup', blockData.className);
		Assert.equals(606.6, blockData.properties.get('x'));
		Assert.equals(76, blockData.properties.get('width'));
	}*/
	
	/**
	 * test setting properties value on a block's native class attributes
	 */
	public function testSetBlockAttribute()
	{
		//create a block
		var parentBlock:Block = new Block("");
		
		//set up the block's properties
		var properties:Hash<Dynamic> = new Hash<Dynamic>();
		
		properties.set("testStringProperty", "testStringValue");
		
		properties.set("testIntProperty", 1);
		
		properties.set("testFloatProperty", 1.2);
		
		properties.set("testBoolProperty", true);
		
		properties.set("testArrayProperty", [1,"value"]);
		
		//set up the block data
		var parentBlockBlockData:BlockData = {
			className:"org.silex_unit_tests.core.block.TestNativeClass",
			descriptorUID:null,
			isAutoOpen:false,
			isTransversal:false,
			hasSeparateFile:false,
			fileUrl:null,
			domRoot:null,
			jsURL:null,
			as3URL:null,
			phpURL:null,
			properties:properties,
			metaData:new Hash<Dynamic>()
		};
		
		parentBlock.setBlockData(parentBlockBlockData);
		
		var blockBuilder:BlockBuilder = new BlockBuilder(parentBlock);
		
		//build the block class and attributes
		blockBuilder.createNativeClassInstance();
		
		blockBuilder.setBlockAttributes();
		
		//test that attributes matches
		Assert.equals(parentBlock.getNativeClassInstance().getField("testStringProperty"), "testStringValue");
		
		Assert.equals(parentBlock.getNativeClassInstance().getField("testBoolProperty"), true);
		
		Assert.equals(parentBlock.getNativeClassInstance().getField("testIntProperty"), 1);
		
		Assert.equals(parentBlock.getNativeClassInstance().getField("testFloatProperty"), 1.2);
		
		Assert.equals(parentBlock.getNativeClassInstance().getField("testArrayProperty")[0], 1);
		Assert.equals(parentBlock.getNativeClassInstance().getField("testArrayProperty")[1], "value");
	}
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
