package slPlayer.core.style;
import cocktail.domElement.DOMElement;
import cocktail.domElement.DOMElement;
import haxe.Log;
import haxe.Timer;
import slPlayer.core.block.Block;
import slPlayer.core.publication.Publication;

/**
 * ...
 * @author Yannick DOMINGUEZ
 */

class StyleManager 
{

	public var top:String;
	
	public var left:String;
	
	public var width:String;
	
	public var height:String;
	
	public function new() 
	{
		Timer.delay(initDone, 30);
	}
	
	public function initDone():Void
	{
		var publication:Publication = Publication.getPublicationByStyleManager(this);
		var block:Block = publication.getBlockByStyleManager(this);
		var domElement:DOMElement = block.domElement;
		
//		Log.trace(domElement);
//		Log.trace(this.left);
		
		if (this.left != null)
		{
			domElement.x = Std.parseInt(this.left);
		}
		
		if (this.top != null)
		{
			domElement.y = Std.parseInt(top);
		}
		
		if (this.width != null)
		{
			domElement.width = Std.parseInt(width);
		}
		
		if (this.height != null)
		{
			domElement.height = Std.parseInt(height);
		}
		
	}
	
	
}