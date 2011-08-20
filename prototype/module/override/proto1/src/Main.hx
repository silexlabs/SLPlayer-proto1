package ;

import flash.Lib;
import haxe.Log;

/**
 * The goal of this prototype is to show
 * how blocks of code can be added to 
 * method at compile-time using macro.
 * 
 * Using a macro, we will add a block of code
 * outputing a trace in a method with an
 * "overridable" metadata.
 * 
 * The main class uses the "@:build" metadata, used
 * to allow macro to create and alter this class fields
 * at compile-time by calling the Macro.build() static
 * method
 * 
 * @author Yannick DOMINGUEZ
 */
@:build(Macro.build()) class Main 
{
	/**
	 * entry point, instantiate the main
	 * class and call the test method
	 * to check that the code of block was
	 * added at compile-time
	 */
	static function main() 
	{
		var mainInstance:Main = new Main();
		mainInstance.test();
	}
	
	/**
	 * class constructor
	 */
	public function new()
	{
		
	}
	
	/**
	 * This test method has an "overridable" metadata
	 * used by the macro to find it. By default, it
	 * calls a block of code, represented by a trace
	 * output. We will add another block of code, also
	 * represented by a trace output before this one.
	 * see Macro.build() method.
	 */
	@overridable
	public function test():Void
	{
		Log.trace("original code block");
	}
	
}