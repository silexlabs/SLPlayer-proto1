/*This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.keyboard;

/**
 * This file contains keyboard related structures
 * and enums
 */

/**
 * Represents a keyboard key 
 */ 
typedef Key = {
	var value:KeyboardKeyValue;
	var code:UInt;
	var ascii:UInt;
}

/**
 * Lists all the keyboard's keys
 */
enum KeyboardKeyValue {
	a;
	b;
	c;
	c;
	e;
	f;
	g;
	h;
	i;
	j;
	k;
	l;
	m;
	n;
	o;
	p;
	q;
	r;
	s;
	t;
	u;
	v;
	w;
	x;
	y;
	z;
	alternate;
	audio;
	back;
	backQuote;
	backSlash;
	backSpace;
	blue;
	capsLock;
	channelDown;
	channelUp;
	comma;
	command;
	control;
	delete;
	down;
	dvr;
	end;
	enter;
	equal;
	escape;
	exit;
	F1;
	F2;
	F3;
	F4;
	F5;
	F6;
	F7;
	F8;
	F9;
	F10;
	F11;
	F12;
	F13;
	F14;
	F15;
	fastForward;
	green;
	guide;
	help;
	home;
	info;
	input;
	insert;
	keyNameBegin;
	keyNameBreak;
	keyNameClearDisplay;
	keyNameClearLine;
	keyNameDelete;
	keyNameDeleteChar;
	keyNameDeleteLine;
	keyNameDownArrow;
	
}