package cocktail.domElement.js;

import cocktail.domElement.abstract.AbstractTextLineDOMElement;
import cocktail.domElement.DOMElement;
import cocktail.nativeElement.NativeElement;
import cocktail.style.Style;

/**
 * ...
 * @author Yannick DOMINGUEZ
 */

class TextLineDOMElement extends AbstractTextLineDOMElement
{

	public function new(nativeElement:NativeElement, style:Style, isLastLineOfTextBlock:Bool) 
	{
		super(nativeElement, style, isLastLineOfTextBlock);
	}
	
}