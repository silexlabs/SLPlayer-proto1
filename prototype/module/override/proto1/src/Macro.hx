package ;
import haxe.Log;
import haxe.macro.Context;
import haxe.macro.Expr;
import haxe.macro.Type;

/**
 * This class has a macro function used to add
 * a block of code to all the methods with an "overridable"
 * metadata (only one in this prototype)
 * 
 * @author Yannick DOMINGUEZ
 */
class Macro 
{

	private function new() 
	{
		
	}
	
	/**
	 * A macro function used to build a class. When it is
	 * called all the class's fields are accessible and editable,
	 * new field can also be created
	 * 
	 * @return an array containing each of the target class fields
	 */
	@:macro public static function build(): Array<Field> {
		
		//retrieve all the fields from the calling class
		var fields:Array<Field> = Context.getBuildFields();
		
		//loop in all the fields, looking for methods with
		//the "overridable" metadata
		for (i in 0...fields.length)
		{
			//get the metadata of one field, as an array of anonymous objects.
			//each metadata can have parameters, might be useful to add condition to an 
			//overridable method
			var metadata:Array<{ name : String, params : Array<Expr>, pos : Position }> = fields[i].meta;
			
			//loop in all the metadata, searching for the one
			//with the "overridable" name
			for (j in 0...metadata.length)
			{
				if (metadata[j].name == "overridable")
				{
					//check that the field is a function
					switch (fields[i].kind)
					{
						//if it is a function, 
						//call a method adding a block
						//of code to the current function
						//expression
						case FFun(func):	
						func.expr = addCodeBlock(func.expr);
						
						default:
					}
				}
			}
			
			
		}
			
		
		//return all the modified class fields
		return fields;
	}
	
	/**
	 * Add a block of code to a given expression.
	 * @param functionExpression the expression to modify
	 * @return the updated expression
	 */
	private static function addCodeBlock(functionExpression:Expr):Expr
	{
		//create a new expression (code block) from a string, whose role is to output a string
		var logMsg:Expr = Context.parse("haxe.Log.trace('added code block')", Context.currentPos());
		
		//this array will store multiple expression :
		//the  newly created expression, then the original
		//expression, it will replace the current function
		//expression
		var block:Array<Expr> = new Array<Expr>();
		block.push(logMsg);
		block.push(functionExpression);
		
		//return the new block of expression at the same position
		//in the code than the original expression (it replace it)
		return {expr:EBlock(block), pos:functionExpression.pos};
	}
	
}