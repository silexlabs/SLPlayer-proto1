/*This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/

/**
 * This class gathers XML utilities
 * Taken from silex v1, except 2 methods: Xml2Dynamic & xml2DynamicRecursive
 * 
 * @author Raphael Harmel
 * @version 1.0
 * @date   2011-01-19
 * 
 */

package org.silex.core;

class XmlUtils
{
	// indent default value: used at each new indent
	static inline var INDENT_STRING:String = "\t";

	/**
	*  This method takes an XML, removes white spaces, indent & comments, and then return the XML.
	*  For now it just calling the equivalent recursive method.
	*  It is better to have two methods for recursive algorithms, one to initialise recursion, the other for recursion
	*/
	public static function cleanUp(xml:Xml) : Xml
	{
		// duplicate input xml to avoid changing input xml data
		var xmlCopy:Xml = Xml.parse(xml.toString()).firstElement();
		
		// return value
		// if xml is not null, call cleanUpRecursive
		if (xmlCopy != null)
		{
			return cleanUpRecursive(xmlCopy);
		}
		// else return input xml (returning null creates type conflicts
		else
		{
			return xml;
		}
	}
	
	/**
	*  This method takes an XML, removes white spaces, indent & comments, and then return the XML. To be called by cleanUp(xml) and not directly.
	*/
	private static function cleanUpRecursive(xml:Xml) : Xml
	{
		var whiteSpaceValues:Array<String> = ["\n","\r","\t"];
		var childData:Xml = null;
		var child:Xml = null;
		// create root element
		var cleanedXml:Xml = null;

		// depending on the xml root node type, create cleanedXml with the corresponding type 
		switch (xml.nodeType)
		{
			case Xml.Document:
			cleanedXml = Xml.createDocument();
			
			case Xml.Element:
			cleanedXml = Xml.createElement(xml.nodeName);
			for (attrib in xml.attributes())
			{
				cleanedXml.set(attrib, xml.get(attrib));
			}
			
			default:	
		}

		// iterate on all children
		for ( child in xml ) {
			// case child node is element ie. a child node but not data
			switch (child.nodeType)
			{
				// case child node is element: recursive loop on elements
				case Xml.Element:
				childData = cleanUpRecursive(child);
				cleanedXml.addChild(childData);
					
				// case child node is Comment, do not add it to the cleanedXml
				//   => not working for PHP target, issue sent to Haxe mailing list, cf. workaround below
				case Xml.Comment:

				// case child node is CData or PCData
				default:
				// set noValue to child's nodeValue
				var nodeValue:String = child.nodeValue;
				//  if value is Comment, do not add it to the cleanedXml => workaround as issue with Haxe getting Xml.Comment type
				if ( (nodeValue.substr(0,4) == '<!--') && (nodeValue.substr(-3) == '-->') )
				{
					nodeValue = '';
				}
				// value is cleaned in case it is not "real" value but indenting (\n and \t)
				// remove white spaces, ie. text formatting (indent and carrier return)
				for (whiteSpace in whiteSpaceValues)
				{
					nodeValue = StringTools.replace(nodeValue, whiteSpace, "");
				}
				// removes ramaning white spaces, ie. text formatting (uneeded spaces)
				while (nodeValue.substr(0, 1) == " ")
				{
					nodeValue = nodeValue.substr(1);
				}
				// if cleaned value is not empty, add it to the cleanedXml
				if (nodeValue != "")
				{
					cleanedXml.addChild(child);
				}
			}
		}

		return cleanedXml;
	}
	
	/**
	*  This method takes an XML String (indented or not), and returns the cleaned XML.
	*/
	public static function stringIndent2Xml(xmlString:String) : Xml
	{
		var xml:Xml = Xml.parse(xmlString);
		return cleanUp(xml);
	}
	
	/**
	*  This method takes an XML object and returns the indented string equivalent.
	*/
	public static function xml2StringIndent(xml:Xml) : String
	{
		var firstElement:Xml = xml.firstElement();
		// return value
		return xml2StringIndentRecursive(firstElement, "");
	}
	
	/**
	*  This method takes an XML object and returns the indented string equivalent. to be called by xml2StringIndent(xml) and not directly.
	*/
	private static function xml2StringIndentRecursive(xml:Xml,indentationLevel:String='') : String
	{
		// return value
		var toReturn = "";

		// indent and create node
		toReturn += indentationLevel + "<" + xml.nodeName;

		// add attributes
		for (attrib in xml.attributes())
		{
			toReturn += " " + attrib + "=\"" + xml.get(attrib) + "\"";
		}
		toReturn += ">";
		
		var firstChild:Xml = xml.firstChild();
		if (firstChild != null)
		{
			//trace(firstChild.nodeType);
			switch (firstChild.nodeType)
			{
				// case child node is CData: format value to CData
				case Xml.CData:
					toReturn += "<![CDATA[" + firstChild.nodeValue + "]]>";
				// case child node is PCData: add value
				case Xml.PCData:
					//toReturn += firstChild.nodeValue; => not used as converts html entities to unwanted characters
					toReturn += firstChild;
				// case child node is element: recursive loop on elements
				case Xml.Element:
					toReturn += "\n";
					// recursive loop
					var element:Xml;
					for (element in xml)
					{
						// recursive call
						toReturn += xml2StringIndentRecursive(element,indentationLevel+INDENT_STRING);
					}
					toReturn += indentationLevel;
				// impossible case
				default:
			}
		}
		// close node
		toReturn += "</" + xml.nodeName + ">\n";

		return toReturn;
	}
}
