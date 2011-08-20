/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex_unit_tests.core.config;

import org.silex.core.config.Config;
import org.silex.core.config.ConfigData;

import utest.Assert;
import utest.Runner;
import utest.ui.Report;

class ConfigTests 
{
	public static function main() 
	{
		var runner = new Runner();
		runner.addCase(new ConfigTests());
		Report.create(runner);
		runner.run();
	}
	
	public function new();
	
	/**
	 * test config classes
	 */
	public function testConfig() 
	{
		// the ConfigData for tests
		var configDataTest : ConfigData = Config.getConfigData();
		var configObjectTest : Dynamic;

		// **
		// test data
		configObjectTest = {
		};
		// run test
		Config.addConfigValues(configObjectTest);
		// check result
		Assert.same(Config.getConfigData(), configDataTest);
		
		// **
		// test data
		configObjectTest = {
			publicationId : "testPublicationId",
			scaleMode : "showAll"
		};
		// run test
		Config.addConfigValues(configObjectTest);
		// check result
		Assert.is(Config.getConfigData().scaleMode, ScaleModeValue);
		
		// **
		// merge config data
		// test data
		configObjectTest = {
			scaleMode : "showAll"
		};
		configDataTest = Config.duplicateConfigData(Config.getConfigData());
		configDataTest.scaleMode = showAll;
		// run test
		Config.addConfigValues(configObjectTest);
		// check result
		Assert.same(Config.getConfigData(), configDataTest);
		// **
		// add data which is not in the ConfigData structure
		// test data
		configObjectTest = {
			scaleMode : "showAll",
			unknownPropertyName : "unknownPropertyValue"
		};
		configDataTest = Config.getConfigData();
		configDataTest.scaleMode = showAll;
		// run test
		Config.addConfigValues(configObjectTest);
		// check result
		Assert.same(Config.getConfigData(), configDataTest);
	}
}
