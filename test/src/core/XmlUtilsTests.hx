/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package core;

import org.silex.core.XmlUtils;
import utest.Assert;
import utest.Runner;
import utest.ui.Report;

class XmlUtilsTests 
{
	public static function main()
	{
		var runner = new Runner();
		runner.addCase(new XmlUtilsTests());
		Report.create(runner);
		runner.run();
	}
	
	public function new()
	{
		
	}
	
	/**
	 * cleanUp xml test 1
	 */ 
    public function test_cleanUpXml_1()
	{
        // Input & output setting
		var inputString:String = '<rss a="b">
    <channel>
        <title>Mon site</title>
        <description>Ceci est un exemple de flux RSS 2.0</description>
        <lastBuildDate>Sat, 07 Sep 2002 00:00:01 GMT</lastBuildDate>
        <link>http://www.example.org</link>
        <item>
			<title><![CDATA[Actualité N°1]]></title>
            <description><![CDATA[Ceci est ma première actualité]]></description>
            <pubDate>Sat, 07 Sep 2002 00:00:01 GMT</pubDate>
            <link>http://www.example.org/actu1</link>
        </item>
        <item>
            <title><![CDATA[Actualité N°2]]></title>
            <description><![CDATA[Ceci est ma deuxième actualité]]></description>
            <pubDate>Sat, 07 Sep 2002 00:00:01 GMT</pubDate>
            <link>http://www.example.org/actu2</link>
        </item>
    </channel>
</rss>
';
		var inputXml:Xml = Xml.parse(inputString);
		
		// Tested process
		var cleanedXml:Xml = XmlUtils.cleanUp(inputXml);

		// Verification
		Assert.equals( inputXml.firstElement().nodeName, cleanedXml.nodeName );
		Assert.equals( inputXml.firstElement().get('a'), cleanedXml.get('a') );
		Assert.equals( inputXml.firstElement().firstElement().nodeName, cleanedXml.firstElement().nodeName );

		Assert.equals( 'rss', cleanedXml.nodeName );
		Assert.equals( 'b', cleanedXml.get('a') );
		Assert.equals( 'channel', cleanedXml.firstElement().nodeName );
		
	}

	/**
	 * cleanUp xml test 2
	 */ 
    public function test_cleanUpXml_2()
	{
        // Input & output setting
		var inputString:String = '';
		var inputXml:Xml = Xml.parse(inputString);
		
		// Tested process
		// empty xml
		var cleanedXml:Xml = XmlUtils.cleanUp(inputXml);
		Assert.same( inputXml, cleanedXml );
		
		// null xml
		Assert.equals( null, null );
		
	}
}
