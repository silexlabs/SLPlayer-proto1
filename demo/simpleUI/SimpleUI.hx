package ;

import haxe.Log;
import slPlayer.core.block.BlockBuilder;
import slPlayer.core.block.Block;
import slPlayer.core.block.BlockData;
import slPlayer.blocks.Image;
import slPlayer.blocks.StandardBlock;
import slPlayer.core.config.Config;
import slPlayer.core.publication.Publication;

/**
 * ...
 * @author Yannick DOMINGUEZ
 */

class SimpleUI 
{

	public static function main()
	{
		new SimpleUI();
	}
	
	public function new() 
	{
		var publication:Publication = Publication.createPublication(new Config());
		publication.render(null, "index.xml");
	}
	
	private function onBlockOpened(block:Block):Void
	{
		Log.trace("opened");
	}
	
	private function onBlockOpenError(error:String):Void
	{
		Log.trace(error);
	}
	
}