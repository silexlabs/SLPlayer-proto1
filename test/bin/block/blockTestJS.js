$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof cocktail=='undefined') cocktail = {}
if(!cocktail.style) cocktail.style = {}
if(!cocktail.style["abstract"]) cocktail.style["abstract"] = {}
cocktail.style.abstract.AbstractStyle = function(domElement) { if( domElement === $_ ) return; {
	this._domElement = domElement;
	this._computedStyle = { width : 0, height : 0, minHeight : 0, maxHeight : 0, minWidth : 0, maxWidth : 0, marginLeft : 0, marginRight : 0, marginTop : 0, marginBottom : 0, paddingLeft : 0, paddingRight : 0, paddingTop : 0, paddingBottom : 0, left : 0, right : 0, top : 0, bottom : 0, clear : cocktail.style.ClearStyleValue.none, 'float' : cocktail.style.FloatStyleValue.none, display : cocktail.style.DisplayStyleValue.block, position : cocktail.style.PositionStyleValue._static, verticalAlign : 0, fontSize : 15.0, lineHeight : 14.0};
}}
cocktail.style.abstract.AbstractStyle.__name__ = ["cocktail","style","abstract","AbstractStyle"];
cocktail.style.abstract.AbstractStyle.prototype._marginLeft = null;
cocktail.style.abstract.AbstractStyle.prototype.marginLeft = null;
cocktail.style.abstract.AbstractStyle.prototype._marginRight = null;
cocktail.style.abstract.AbstractStyle.prototype.marginRight = null;
cocktail.style.abstract.AbstractStyle.prototype._marginTop = null;
cocktail.style.abstract.AbstractStyle.prototype.marginTop = null;
cocktail.style.abstract.AbstractStyle.prototype._marginBottom = null;
cocktail.style.abstract.AbstractStyle.prototype.marginBottom = null;
cocktail.style.abstract.AbstractStyle.prototype._paddingLeft = null;
cocktail.style.abstract.AbstractStyle.prototype.paddingLeft = null;
cocktail.style.abstract.AbstractStyle.prototype._paddingRight = null;
cocktail.style.abstract.AbstractStyle.prototype.paddingRight = null;
cocktail.style.abstract.AbstractStyle.prototype._paddingTop = null;
cocktail.style.abstract.AbstractStyle.prototype.paddingTop = null;
cocktail.style.abstract.AbstractStyle.prototype._paddingBottom = null;
cocktail.style.abstract.AbstractStyle.prototype.paddingBottom = null;
cocktail.style.abstract.AbstractStyle.prototype._display = null;
cocktail.style.abstract.AbstractStyle.prototype.display = null;
cocktail.style.abstract.AbstractStyle.prototype._position = null;
cocktail.style.abstract.AbstractStyle.prototype.position = null;
cocktail.style.abstract.AbstractStyle.prototype._width = null;
cocktail.style.abstract.AbstractStyle.prototype.width = null;
cocktail.style.abstract.AbstractStyle.prototype._height = null;
cocktail.style.abstract.AbstractStyle.prototype.height = null;
cocktail.style.abstract.AbstractStyle.prototype._minHeight = null;
cocktail.style.abstract.AbstractStyle.prototype.minHeight = null;
cocktail.style.abstract.AbstractStyle.prototype._maxHeight = null;
cocktail.style.abstract.AbstractStyle.prototype.maxHeight = null;
cocktail.style.abstract.AbstractStyle.prototype._minWidth = null;
cocktail.style.abstract.AbstractStyle.prototype.minWidth = null;
cocktail.style.abstract.AbstractStyle.prototype._maxWidth = null;
cocktail.style.abstract.AbstractStyle.prototype.maxWidth = null;
cocktail.style.abstract.AbstractStyle.prototype._top = null;
cocktail.style.abstract.AbstractStyle.prototype.top = null;
cocktail.style.abstract.AbstractStyle.prototype._left = null;
cocktail.style.abstract.AbstractStyle.prototype.left = null;
cocktail.style.abstract.AbstractStyle.prototype._bottom = null;
cocktail.style.abstract.AbstractStyle.prototype.bottom = null;
cocktail.style.abstract.AbstractStyle.prototype._right = null;
cocktail.style.abstract.AbstractStyle.prototype.right = null;
cocktail.style.abstract.AbstractStyle.prototype._float = null;
cocktail.style.abstract.AbstractStyle.prototype["float"] = null;
cocktail.style.abstract.AbstractStyle.prototype._clear = null;
cocktail.style.abstract.AbstractStyle.prototype.clear = null;
cocktail.style.abstract.AbstractStyle.prototype._fontSize = null;
cocktail.style.abstract.AbstractStyle.prototype.fontSize = null;
cocktail.style.abstract.AbstractStyle.prototype._lineHeight = null;
cocktail.style.abstract.AbstractStyle.prototype.lineHeight = null;
cocktail.style.abstract.AbstractStyle.prototype._computedStyle = null;
cocktail.style.abstract.AbstractStyle.prototype.computedStyle = null;
cocktail.style.abstract.AbstractStyle.prototype._domElement = null;
cocktail.style.abstract.AbstractStyle.prototype.domElement = null;
cocktail.style.abstract.AbstractStyle.prototype.layout = function(containingDOMElementDimensions,lastPositionedDOMElementDimensions,rootDOMElementDimensions) {
	null;
}
cocktail.style.abstract.AbstractStyle.prototype.flow = function(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions,formatingContext) {
	if(this.isNotDisplayed() == true) {
		this._domElement.setIsVisible(false);
		return;
	}
	this.computeDOMElement(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions);
	this.flowChildren(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions,formatingContext);
	this.applyComputedDimensions();
}
cocktail.style.abstract.AbstractStyle.prototype.applyComputedDimensions = function() {
	this._domElement.setWidth(this._computedStyle.width);
	this._domElement.setHeight(this._computedStyle.height);
}
cocktail.style.abstract.AbstractStyle.prototype.flowChildren = function(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions,formatingContext) {
	this.insertDOMElement(formatingContext,lastPositionedDOMElementDimensions,rootDOMElementDimensions);
}
cocktail.style.abstract.AbstractStyle.prototype.positionElement = function(lastPositionedDOMElementDimensions,rootDOMElementDimensions) {
	var positioner;
	if(this.isRelativePositioned() == true) {
		positioner = new cocktail.style.positioner.RelativePositioner();
		positioner.position(this._domElement,lastPositionedDOMElementDimensions);
	}
	else {
		var $e = this._domElement.getStyle().getComputedStyle().position;
		switch( $e[1] ) {
		case 3:
		{
			positioner = new cocktail.style.positioner.FixedPositioner();
			var scrolledRootDOMElementDimensions = rootDOMElementDimensions;
			positioner.position(this._domElement,scrolledRootDOMElementDimensions);
		}break;
		case 2:
		{
			positioner = new cocktail.style.positioner.AbsolutePositioner();
			positioner.position(this._domElement,lastPositionedDOMElementDimensions);
		}break;
		default:{
			positioner = new cocktail.style.positioner.AbsolutePositioner();
		}break;
		}
	}
}
cocktail.style.abstract.AbstractStyle.prototype.insertDOMElement = function(formatingContext,lastPositionedDOMElementDimensions,rootDOMElementDimensions) {
	if(this.isClear() == true) {
		formatingContext.clearFloat(this._computedStyle.clear);
	}
	if(this.isFloat() == true) {
		formatingContext.insertFloat(this._domElement);
	}
	else if(this.isPositioned() == false) {
		formatingContext.insert(this._domElement);
	}
	else if(this.isRelativePositioned() == true) {
		formatingContext.insert(this._domElement);
		this.positionElement(lastPositionedDOMElementDimensions,rootDOMElementDimensions);
	}
	else {
		this.positionElement(lastPositionedDOMElementDimensions,rootDOMElementDimensions);
	}
}
cocktail.style.abstract.AbstractStyle.prototype.computeDOMElement = function(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions) {
	this.computePositionStyle();
	this.computeFontStyle();
	this.computeBoxModelStyle(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions);
}
cocktail.style.abstract.AbstractStyle.prototype.computePositionStyle = function() {
	cocktail.style.computer.PositionComputer.compute(this);
}
cocktail.style.abstract.AbstractStyle.prototype.computeFontStyle = function() {
	cocktail.style.computer.FontComputer.compute(this);
}
cocktail.style.abstract.AbstractStyle.prototype.computeBoxModelStyle = function(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions) {
	var boxComputer;
	var containingBlockDimensions = this.getContainingDOMElementDimensions(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions);
	if(this.isFloat() == true) {
		boxComputer = new cocktail.style.computer.FloatBoxComputer();
	}
	else if(this.isPositioned() == true && this.isRelativePositioned() == false) {
		boxComputer = new cocktail.style.computer.PositionedBoxComputer();
	}
	else {
		var $e = this._computedStyle.display;
		switch( $e[1] ) {
		case 0:
		{
			boxComputer = new cocktail.style.computer.BlockBoxComputer();
		}break;
		case 1:
		{
			boxComputer = new cocktail.style.computer.InlineBlockBoxComputer();
		}break;
		case 3:
		{
			boxComputer = new cocktail.style.computer.NoneBoxComputer();
		}break;
		case 2:
		{
			boxComputer = new cocktail.style.computer.InLineBoxComputer();
		}break;
		}
	}
	boxComputer.measure(this,containingBlockDimensions);
}
cocktail.style.abstract.AbstractStyle.prototype.getContainingDOMElementDimensions = function(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions) {
	var containingBlockDimensions = containingDOMElementDimensions;
	if(this.isPositioned() == true) {
		if(this._computedStyle.position == cocktail.style.PositionStyleValue.fixed) {
			containingBlockDimensions = { width : rootDOMElementDimensions.width, height : rootDOMElementDimensions.height};
		}
		else if(this._computedStyle.position == cocktail.style.PositionStyleValue.absolute) {
			containingBlockDimensions = { width : lastPositionedDOMElementDimensions.width, height : lastPositionedDOMElementDimensions.height};
		}
		else {
			containingBlockDimensions = containingDOMElementDimensions;
		}
	}
	return containingBlockDimensions;
}
cocktail.style.abstract.AbstractStyle.prototype.isEmbedded = function() {
	return false;
}
cocktail.style.abstract.AbstractStyle.prototype.isClear = function() {
	var ret = false;
	var $e = this._computedStyle.clear;
	switch( $e[1] ) {
	case 1:
	case 2:
	case 3:
	{
		ret = true;
	}break;
	case 0:
	{
		ret = false;
	}break;
	}
	return ret;
}
cocktail.style.abstract.AbstractStyle.prototype.isNotDisplayed = function() {
	return this._computedStyle.display == cocktail.style.DisplayStyleValue.none;
}
cocktail.style.abstract.AbstractStyle.prototype.isFloat = function() {
	var ret = false;
	var $e = this._computedStyle["float"];
	switch( $e[1] ) {
	case 0:
	case 1:
	{
		ret = true;
	}break;
	case 2:
	{
		ret = false;
	}break;
	}
	return ret;
}
cocktail.style.abstract.AbstractStyle.prototype.isInline = function() {
	var ret = false;
	var $e = this._computedStyle.display;
	switch( $e[1] ) {
	case 2:
	case 1:
	{
		ret = true;
	}break;
	default:{
		ret = false;
	}break;
	}
	return ret;
}
cocktail.style.abstract.AbstractStyle.prototype.isPositioned = function() {
	var ret = false;
	var $e = this._computedStyle.position;
	switch( $e[1] ) {
	case 1:
	case 2:
	case 3:
	{
		ret = true;
	}break;
	case 0:
	{
		ret = false;
	}break;
	}
	return ret;
}
cocktail.style.abstract.AbstractStyle.prototype.isRelativePositioned = function() {
	return this._computedStyle.position == cocktail.style.PositionStyleValue.relative;
}
cocktail.style.abstract.AbstractStyle.prototype.getComputedStyle = function() {
	return this._computedStyle;
}
cocktail.style.abstract.AbstractStyle.prototype.getDOMElement = function() {
	return this._domElement;
}
cocktail.style.abstract.AbstractStyle.prototype.getMarginLeft = function() {
	return this._marginLeft;
}
cocktail.style.abstract.AbstractStyle.prototype.setMarginLeft = function(value) {
	return this._marginLeft = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getMarginRight = function() {
	return this._marginRight;
}
cocktail.style.abstract.AbstractStyle.prototype.setMarginRight = function(value) {
	return this._marginRight = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getMarginTop = function() {
	return this._marginTop;
}
cocktail.style.abstract.AbstractStyle.prototype.setMarginTop = function(value) {
	return this._marginTop = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getMarginBottom = function() {
	return this._marginBottom;
}
cocktail.style.abstract.AbstractStyle.prototype.setMarginBottom = function(value) {
	return this._marginBottom = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getPaddingLeft = function() {
	return this._paddingLeft;
}
cocktail.style.abstract.AbstractStyle.prototype.setPaddingLeft = function(value) {
	return this._paddingLeft = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getPaddingRight = function() {
	return this._paddingRight;
}
cocktail.style.abstract.AbstractStyle.prototype.setPaddingRight = function(value) {
	return this._paddingRight = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getPaddingTop = function() {
	return this._paddingTop;
}
cocktail.style.abstract.AbstractStyle.prototype.setPaddingTop = function(value) {
	return this._paddingTop = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getPaddingBottom = function() {
	return this._paddingBottom;
}
cocktail.style.abstract.AbstractStyle.prototype.setPaddingBottom = function(value) {
	return this._paddingBottom = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getDisplay = function() {
	return this._display;
}
cocktail.style.abstract.AbstractStyle.prototype.setDisplay = function(value) {
	return this._display = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getPosition = function() {
	return this._position;
}
cocktail.style.abstract.AbstractStyle.prototype.setPosition = function(value) {
	return this._position = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getWidth = function() {
	return this._width;
}
cocktail.style.abstract.AbstractStyle.prototype.setWidth = function(value) {
	return this._width = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getHeight = function() {
	return this._height;
}
cocktail.style.abstract.AbstractStyle.prototype.setHeight = function(value) {
	return this._height = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getMinHeight = function() {
	return this._minHeight;
}
cocktail.style.abstract.AbstractStyle.prototype.setMinHeight = function(value) {
	return this._minHeight = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getMaxHeight = function() {
	return this._maxHeight;
}
cocktail.style.abstract.AbstractStyle.prototype.setMaxHeight = function(value) {
	return this._maxHeight = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getMinWidth = function() {
	return this._minWidth;
}
cocktail.style.abstract.AbstractStyle.prototype.setMinWidth = function(value) {
	return this._minWidth = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getMaxWidth = function() {
	return this._maxWidth;
}
cocktail.style.abstract.AbstractStyle.prototype.setMaxWidth = function(value) {
	return this._maxWidth = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getTop = function() {
	return this._top;
}
cocktail.style.abstract.AbstractStyle.prototype.setTop = function(value) {
	return this._top = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getLeft = function() {
	return this._left;
}
cocktail.style.abstract.AbstractStyle.prototype.setLeft = function(value) {
	return this._left = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getBottom = function() {
	return this._bottom;
}
cocktail.style.abstract.AbstractStyle.prototype.setBottom = function(value) {
	return this._bottom = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getRight = function() {
	return this._right;
}
cocktail.style.abstract.AbstractStyle.prototype.setRight = function(value) {
	return this._right = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getFloat = function() {
	return this._float;
}
cocktail.style.abstract.AbstractStyle.prototype.setFloat = function(value) {
	return this._float = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getClear = function() {
	return this._clear;
}
cocktail.style.abstract.AbstractStyle.prototype.setClear = function(value) {
	return this._clear = value;
}
cocktail.style.abstract.AbstractStyle.prototype.setFontSize = function(value) {
	return this._fontSize = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getFontSize = function() {
	return this._fontSize;
}
cocktail.style.abstract.AbstractStyle.prototype.setLineHeight = function(value) {
	return this._lineHeight = value;
}
cocktail.style.abstract.AbstractStyle.prototype.getLineHeight = function() {
	return this._lineHeight;
}
cocktail.style.abstract.AbstractStyle.prototype.__class__ = cocktail.style.abstract.AbstractStyle;
if(!cocktail.style.js) cocktail.style.js = {}
cocktail.style.js.Style = function(domElement) { if( domElement === $_ ) return; {
	cocktail.style.abstract.AbstractStyle.call(this,domElement);
}}
cocktail.style.js.Style.__name__ = ["cocktail","style","js","Style"];
cocktail.style.js.Style.__super__ = cocktail.style.abstract.AbstractStyle;
for(var k in cocktail.style.abstract.AbstractStyle.prototype ) cocktail.style.js.Style.prototype[k] = cocktail.style.abstract.AbstractStyle.prototype[k];
cocktail.style.js.Style.prototype.getConvertedValue = function(lengthValue) {
	var ret;
	var $e = lengthValue;
	switch( $e[1] ) {
	case 0:
	var pixelValue = $e[2];
	{
		ret = Std.string(pixelValue) + "px";
	}break;
	case 3:
	var pointValue = $e[2];
	{
		ret = Std.string(pointValue) + "pt";
	}break;
	case 2:
	var milimetersValue = $e[2];
	{
		ret = Std.string(milimetersValue) + "mm";
	}break;
	case 4:
	var picasValue = $e[2];
	{
		ret = Std.string(picasValue) + "pc";
	}break;
	case 1:
	var centimetersValue = $e[2];
	{
		ret = Std.string(centimetersValue) + "cm";
	}break;
	case 5:
	var inchesValue = $e[2];
	{
		ret = Std.string(inchesValue) + "in";
	}break;
	}
	return ret;
}
cocktail.style.js.Style.prototype.getFontSizeValue = function(value) {
	var fontValue;
	var $e = value;
	switch( $e[1] ) {
	case 0:
	var unit = $e[2];
	{
		fontValue = this.getConvertedValue(unit);
	}break;
	}
	return fontValue;
}
cocktail.style.js.Style.prototype.getLineHeightValue = function(value) {
	var lineHeightValue;
	var $e = value;
	switch( $e[1] ) {
	case 0:
	var unit = $e[2];
	{
		lineHeightValue = this.getConvertedValue(unit);
	}break;
	}
	return lineHeightValue;
}
cocktail.style.js.Style.prototype.getMarginValue = function(value) {
	var marginValue;
	var $e = value;
	switch( $e[1] ) {
	case 0:
	var unit = $e[2];
	{
		marginValue = this.getConvertedValue(unit);
	}break;
	case 1:
	var percentValue = $e[2];
	{
		marginValue = Std.string(percentValue) + "%";
	}break;
	case 2:
	{
		marginValue = "auto";
	}break;
	}
	return marginValue;
}
cocktail.style.js.Style.prototype.getPaddingValue = function(value) {
	var paddingValue;
	var $e = value;
	switch( $e[1] ) {
	case 0:
	var unit = $e[2];
	{
		paddingValue = this.getConvertedValue(unit);
	}break;
	case 1:
	var percentValue = $e[2];
	{
		paddingValue = Std.string(percentValue) + "%";
	}break;
	}
	return paddingValue;
}
cocktail.style.js.Style.prototype.getDimensionValue = function(value) {
	var dimensionValue;
	var $e = value;
	switch( $e[1] ) {
	case 0:
	var unit = $e[2];
	{
		dimensionValue = this.getConvertedValue(unit);
	}break;
	case 1:
	var percentValue = $e[2];
	{
		dimensionValue = Std.string(percentValue) + "%";
	}break;
	case 2:
	{
		dimensionValue = "auto";
	}break;
	}
	return dimensionValue;
}
cocktail.style.js.Style.prototype.getPositionOffsetStyleValue = function(value) {
	var positionOffsetValue;
	var $e = value;
	switch( $e[1] ) {
	case 0:
	var unit = $e[2];
	{
		positionOffsetValue = this.getConvertedValue(unit);
	}break;
	case 1:
	var percentValue = $e[2];
	{
		positionOffsetValue = Std.string(percentValue) + "%";
	}break;
	case 2:
	{
		positionOffsetValue = "auto";
	}break;
	}
	return positionOffsetValue;
}
cocktail.style.js.Style.prototype.getConstrainedDimensionValue = function(value) {
	var constrainedValue;
	var $e = value;
	switch( $e[1] ) {
	case 0:
	var unit = $e[2];
	{
		constrainedValue = this.getConvertedValue(unit);
	}break;
	case 1:
	var percentValue = $e[2];
	{
		constrainedValue = Std.string(percentValue) + "%";
	}break;
	case 2:
	{
		constrainedValue = "none";
	}break;
	}
	return constrainedValue;
}
cocktail.style.js.Style.prototype.setFontSize = function(value) {
	this._domElement.getNativeElement().style.fontSize = this.getFontSizeValue(value);
	return this._fontSize = value;
}
cocktail.style.js.Style.prototype.setLineHeight = function(value) {
	this._domElement.getNativeElement().style.lineHeight = this.getLineHeightValue(value);
	return this._lineHeight = value;
}
cocktail.style.js.Style.prototype.setMarginLeft = function(value) {
	this._domElement.getNativeElement().style.marginLeft = this.getMarginValue(value);
	return this._marginLeft = value;
}
cocktail.style.js.Style.prototype.setMarginRight = function(value) {
	this._domElement.getNativeElement().style.marginRight = this.getMarginValue(value);
	return this._marginRight = value;
}
cocktail.style.js.Style.prototype.setMarginTop = function(value) {
	this._domElement.getNativeElement().style.marginTop = this.getMarginValue(value);
	return this._marginTop = value;
}
cocktail.style.js.Style.prototype.setMarginBottom = function(value) {
	this._domElement.getNativeElement().style.marginBottom = this.getMarginValue(value);
	return this._marginBottom = value;
}
cocktail.style.js.Style.prototype.setPaddingLeft = function(value) {
	this._domElement.getNativeElement().style.paddingLeft = this.getPaddingValue(value);
	return this._paddingLeft = value;
}
cocktail.style.js.Style.prototype.setPaddingRight = function(value) {
	this._domElement.getNativeElement().style.paddingRight = this.getPaddingValue(value);
	return this._paddingRight = value;
}
cocktail.style.js.Style.prototype.setPaddingTop = function(value) {
	this._domElement.getNativeElement().style.paddingTop = this.getPaddingValue(value);
	return this._paddingTop = value;
}
cocktail.style.js.Style.prototype.setPaddingBottom = function(value) {
	this._domElement.getNativeElement().style.paddingBottom = this.getPaddingValue(value);
	return this._paddingBottom = value;
}
cocktail.style.js.Style.prototype.setDisplay = function(value) {
	var displayValue;
	var $e = value;
	switch( $e[1] ) {
	case 0:
	{
		displayValue = "block";
	}break;
	case 2:
	{
		displayValue = "inline";
	}break;
	case 1:
	{
		displayValue = "inline-block";
	}break;
	case 3:
	{
		displayValue = "none";
	}break;
	}
	this._domElement.getNativeElement().style.display = displayValue;
	return this._display = value;
}
cocktail.style.js.Style.prototype.setPosition = function(value) {
	var positionValue;
	var $e = value;
	switch( $e[1] ) {
	case 0:
	{
		positionValue = "static";
	}break;
	case 1:
	{
		positionValue = "relative";
	}break;
	case 2:
	{
		positionValue = "absolute";
	}break;
	case 3:
	{
		positionValue = "fixed";
	}break;
	}
	this._domElement.getNativeElement().style.position = positionValue;
	return this._position = value;
}
cocktail.style.js.Style.prototype.setWidth = function(value) {
	this._domElement.getNativeElement().style.width = this.getDimensionValue(value);
	return this._width = value;
}
cocktail.style.js.Style.prototype.setHeight = function(value) {
	this._domElement.getNativeElement().style.height = this.getDimensionValue(value);
	return this._height = value;
}
cocktail.style.js.Style.prototype.setMinHeight = function(value) {
	this._domElement.getNativeElement().style.minHeight = this.getConstrainedDimensionValue(value);
	return this._minHeight = value;
}
cocktail.style.js.Style.prototype.setMaxHeight = function(value) {
	this._domElement.getNativeElement().style.maxHeight = this.getConstrainedDimensionValue(value);
	return this._maxHeight = value;
}
cocktail.style.js.Style.prototype.setMinWidth = function(value) {
	this._domElement.getNativeElement().style.minWidth = this.getConstrainedDimensionValue(value);
	return this._minWidth = value;
}
cocktail.style.js.Style.prototype.setMaxWidth = function(value) {
	this._domElement.getNativeElement().style.maxWidth = this.getConstrainedDimensionValue(value);
	return this._maxWidth = value;
}
cocktail.style.js.Style.prototype.setTop = function(value) {
	this._domElement.getNativeElement().style.top = this.getPositionOffsetStyleValue(value);
	return this._top = value;
}
cocktail.style.js.Style.prototype.setLeft = function(value) {
	this._domElement.getNativeElement().style.left = this.getPositionOffsetStyleValue(value);
	return this._left = value;
}
cocktail.style.js.Style.prototype.setBottom = function(value) {
	this._domElement.getNativeElement().style.bottom = this.getPositionOffsetStyleValue(value);
	return this._bottom = value;
}
cocktail.style.js.Style.prototype.setRight = function(value) {
	this._domElement.getNativeElement().style.right = this.getPositionOffsetStyleValue(value);
	return this._right = value;
}
cocktail.style.js.Style.prototype.setFloat = function(value) {
	var floatValue;
	var $e = value;
	switch( $e[1] ) {
	case 0:
	{
		floatValue = "left";
	}break;
	case 1:
	{
		floatValue = "right";
	}break;
	case 2:
	{
		floatValue = "none";
	}break;
	}
	this._domElement.getNativeElement().style.cssFloat = floatValue;
	return this._float = value;
}
cocktail.style.js.Style.prototype.setClear = function(value) {
	var clearValue;
	var $e = value;
	switch( $e[1] ) {
	case 1:
	{
		clearValue = "left";
	}break;
	case 2:
	{
		clearValue = "right";
	}break;
	case 3:
	{
		clearValue = "both";
	}break;
	case 0:
	{
		clearValue = "none";
	}break;
	}
	this._domElement.getNativeElement().style.clear = clearValue;
	return this._clear = value;
}
cocktail.style.js.Style.prototype.__class__ = cocktail.style.js.Style;
cocktail.style.abstract.AbstractEmbeddedStyle = function(domElement) { if( domElement === $_ ) return; {
	cocktail.style.js.Style.call(this,domElement);
}}
cocktail.style.abstract.AbstractEmbeddedStyle.__name__ = ["cocktail","style","abstract","AbstractEmbeddedStyle"];
cocktail.style.abstract.AbstractEmbeddedStyle.__super__ = cocktail.style.js.Style;
for(var k in cocktail.style.js.Style.prototype ) cocktail.style.abstract.AbstractEmbeddedStyle.prototype[k] = cocktail.style.js.Style.prototype[k];
cocktail.style.abstract.AbstractEmbeddedStyle.prototype.applyComputedDimensions = function() {
	cocktail.style.js.Style.prototype.applyComputedDimensions.call(this);
	{
		var _g = this._domElement;
		_g.setX(_g.getX() + this._computedStyle.paddingLeft);
	}
	{
		var _g = this._domElement;
		_g.setY(_g.getY() + this._computedStyle.paddingTop);
	}
}
cocktail.style.abstract.AbstractEmbeddedStyle.prototype.computeBoxModelStyle = function(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions) {
	var boxComputer;
	var containingBlockDimensions = this.getContainingDOMElementDimensions(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions);
	if(this.isFloat() == true) {
		boxComputer = new cocktail.style.computer.FloatEmbeddedBoxComputer();
	}
	else if(this.isPositioned() == true && this.isRelativePositioned() == false) {
		boxComputer = new cocktail.style.computer.PositionedEmbeddedBoxComputer();
	}
	var $e = this._computedStyle.display;
	switch( $e[1] ) {
	case 0:
	{
		boxComputer = new cocktail.style.computer.BlockEmbeddedBoxComputer();
	}break;
	case 1:
	{
		boxComputer = new cocktail.style.computer.InlineBlockEmbeddedBoxComputer();
	}break;
	case 3:
	{
		boxComputer = new cocktail.style.computer.NoneBoxComputer();
	}break;
	case 2:
	{
		boxComputer = new cocktail.style.computer.InlineEmbeddedBoxComputer();
	}break;
	}
	boxComputer.measure(this,containingBlockDimensions);
}
cocktail.style.abstract.AbstractEmbeddedStyle.prototype.isEmbedded = function() {
	return true;
}
cocktail.style.abstract.AbstractEmbeddedStyle.prototype.__class__ = cocktail.style.abstract.AbstractEmbeddedStyle;
cocktail.style.js.EmbeddedStyle = function(domElement) { if( domElement === $_ ) return; {
	cocktail.style.abstract.AbstractEmbeddedStyle.call(this,domElement);
}}
cocktail.style.js.EmbeddedStyle.__name__ = ["cocktail","style","js","EmbeddedStyle"];
cocktail.style.js.EmbeddedStyle.__super__ = cocktail.style.abstract.AbstractEmbeddedStyle;
for(var k in cocktail.style.abstract.AbstractEmbeddedStyle.prototype ) cocktail.style.js.EmbeddedStyle.prototype[k] = cocktail.style.abstract.AbstractEmbeddedStyle.prototype[k];
cocktail.style.js.EmbeddedStyle.prototype.__class__ = cocktail.style.js.EmbeddedStyle;
if(typeof utest=='undefined') utest = {}
if(!utest.ui) utest.ui = {}
if(!utest.ui.common) utest.ui.common = {}
utest.ui.common.ResultAggregator = function(runner,flattenPackage) { if( runner === $_ ) return; {
	if(flattenPackage == null) flattenPackage = false;
	if(runner == null) throw "runner argument is null";
	this.flattenPackage = flattenPackage;
	this.runner = runner;
	runner.onStart.add($closure(this,"start"));
	runner.onProgress.add($closure(this,"progress"));
	runner.onComplete.add($closure(this,"complete"));
	this.onStart = new utest.Notifier();
	this.onComplete = new utest.Dispatcher();
	this.onProgress = new utest.Dispatcher();
}}
utest.ui.common.ResultAggregator.__name__ = ["utest","ui","common","ResultAggregator"];
utest.ui.common.ResultAggregator.prototype.runner = null;
utest.ui.common.ResultAggregator.prototype.flattenPackage = null;
utest.ui.common.ResultAggregator.prototype.root = null;
utest.ui.common.ResultAggregator.prototype.onStart = null;
utest.ui.common.ResultAggregator.prototype.onComplete = null;
utest.ui.common.ResultAggregator.prototype.onProgress = null;
utest.ui.common.ResultAggregator.prototype.start = function(runner) {
	this.root = new utest.ui.common.PackageResult(null);
	this.onStart.dispatch();
}
utest.ui.common.ResultAggregator.prototype.getOrCreatePackage = function(pack,flat,ref) {
	if(ref == null) ref = this.root;
	if(pack == null || pack == "") return ref;
	if(flat) {
		if(ref.existsPackage(pack)) return ref.getPackage(pack);
		var p = new utest.ui.common.PackageResult(pack);
		ref.addPackage(p);
		return p;
	}
	else {
		var parts = pack.split(".");
		{
			var _g = 0;
			while(_g < parts.length) {
				var part = parts[_g];
				++_g;
				ref = this.getOrCreatePackage(part,true,ref);
			}
		}
		return ref;
	}
}
utest.ui.common.ResultAggregator.prototype.getOrCreateClass = function(pack,cls,setup,teardown) {
	if(pack.existsClass(cls)) return pack.getClass(cls);
	var c = new utest.ui.common.ClassResult(cls,setup,teardown);
	pack.addClass(c);
	return c;
}
utest.ui.common.ResultAggregator.prototype.createFixture = function(result) {
	var f = new utest.ui.common.FixtureResult(result.method);
	{ var $it0 = result.assertations.iterator();
	while( $it0.hasNext() ) { var assertation = $it0.next();
	f.add(assertation);
	}}
	return f;
}
utest.ui.common.ResultAggregator.prototype.progress = function(e) {
	this.root.addResult(e.result,this.flattenPackage);
	this.onProgress.dispatch(e);
}
utest.ui.common.ResultAggregator.prototype.complete = function(runner) {
	this.onComplete.dispatch(this.root);
}
utest.ui.common.ResultAggregator.prototype.__class__ = utest.ui.common.ResultAggregator;
if(!cocktail.classInstance) cocktail.classInstance = {}
if(!cocktail.classInstance["abstract"]) cocktail.classInstance["abstract"] = {}
cocktail.classInstance.abstract.AbstractClassInstance = function(nativeInstanceClassName) { if( nativeInstanceClassName === $_ ) return; {
	null;
}}
cocktail.classInstance.abstract.AbstractClassInstance.__name__ = ["cocktail","classInstance","abstract","AbstractClassInstance"];
cocktail.classInstance.abstract.AbstractClassInstance.prototype._nativeInstance = null;
cocktail.classInstance.abstract.AbstractClassInstance.prototype.nativeInstance = null;
cocktail.classInstance.abstract.AbstractClassInstance.prototype.callMethod = function(methodName,args) {
	if(this.isFunction(methodName)) {
		var method = Reflect.field(this._nativeInstance,methodName);
		return method.apply(this._nativeInstance,args);
	}
	return null;
}
cocktail.classInstance.abstract.AbstractClassInstance.prototype.getField = function(fieldName) {
	var fieldGetterName = "get" + fieldName.substr(0,1).toUpperCase() + fieldName.substr(1);
	if(this.isFunction(fieldGetterName)) {
		return Reflect.field(this._nativeInstance,fieldGetterName).apply(this._nativeInstance,[]);
	}
	else {
		return Reflect.field(this._nativeInstance,fieldName);
	}
}
cocktail.classInstance.abstract.AbstractClassInstance.prototype.setField = function(fieldName,fieldValue) {
	var fieldSetterName = "set" + fieldName.substr(0,1).toUpperCase() + fieldName.substr(1);
	if(this.isFunction(fieldSetterName)) {
		Reflect.field(this._nativeInstance,fieldSetterName).apply(this._nativeInstance,[fieldValue]);
	}
	else {
		this._nativeInstance[fieldName] = fieldValue;
	}
}
cocktail.classInstance.abstract.AbstractClassInstance.prototype.isFunction = function(functionName) {
	return Reflect.isFunction(Reflect.field(this._nativeInstance,functionName));
}
cocktail.classInstance.abstract.AbstractClassInstance.prototype.getNativeInstance = function() {
	return this._nativeInstance;
}
cocktail.classInstance.abstract.AbstractClassInstance.prototype.__class__ = cocktail.classInstance.abstract.AbstractClassInstance;
if(!cocktail.classInstance.js) cocktail.classInstance.js = {}
cocktail.classInstance.js.ClassInstance = function(nativeInstanceClassName) { if( nativeInstanceClassName === $_ ) return; {
	cocktail.classInstance.abstract.AbstractClassInstance.call(this,nativeInstanceClassName);
	if(Type.resolveClass(nativeInstanceClassName) != null) {
		this._nativeInstance = Type.createInstance(Type.resolveClass(nativeInstanceClassName),[]);
	}
	else {
		this._nativeInstance = js.Lib.eval("new " + nativeInstanceClassName + "()");
	}
}}
cocktail.classInstance.js.ClassInstance.__name__ = ["cocktail","classInstance","js","ClassInstance"];
cocktail.classInstance.js.ClassInstance.__super__ = cocktail.classInstance.abstract.AbstractClassInstance;
for(var k in cocktail.classInstance.abstract.AbstractClassInstance.prototype ) cocktail.classInstance.js.ClassInstance.prototype[k] = cocktail.classInstance.abstract.AbstractClassInstance.prototype[k];
cocktail.classInstance.js.ClassInstance.prototype.__class__ = cocktail.classInstance.js.ClassInstance;
if(!cocktail.style.computer) cocktail.style.computer = {}
cocktail.style.computer.BoxComputer = function(p) { if( p === $_ ) return; {
	null;
}}
cocktail.style.computer.BoxComputer.__name__ = ["cocktail","style","computer","BoxComputer"];
cocktail.style.computer.BoxComputer.prototype.measure = function(style,containingDOMElementDimensions) {
	this.measureHorizontalPaddings(style,containingDOMElementDimensions);
	this.measureVerticalPaddings(style,containingDOMElementDimensions);
	this.measureWidthAndHorizontalMargins(style,containingDOMElementDimensions);
	this.measureHeightAndVerticalMargins(style,containingDOMElementDimensions);
	this.measurePositionOffsets(style,containingDOMElementDimensions);
	this.measureDimensionsConstraints(style,containingDOMElementDimensions);
	this.constrainDimensions(style.getComputedStyle());
}
cocktail.style.computer.BoxComputer.prototype.measureDimensionsConstraints = function(style,containingDOMElementDimensions) {
	style.getComputedStyle().maxHeight = this.getComputedConstrainedDimension(style.getMaxHeight(),containingDOMElementDimensions.height);
	style.getComputedStyle().minHeight = this.getComputedConstrainedDimension(style.getMinHeight(),containingDOMElementDimensions.height,true);
	style.getComputedStyle().maxWidth = this.getComputedConstrainedDimension(style.getMaxWidth(),containingDOMElementDimensions.width);
	style.getComputedStyle().minWidth = this.getComputedConstrainedDimension(style.getMinWidth(),containingDOMElementDimensions.width,true);
}
cocktail.style.computer.BoxComputer.prototype.measurePositionOffsets = function(style,containingDOMElementDimensions) {
	style.getComputedStyle().left = this.getComputedPositionOffset(style.getLeft(),containingDOMElementDimensions.width);
	style.getComputedStyle().right = this.getComputedPositionOffset(style.getRight(),containingDOMElementDimensions.width);
	style.getComputedStyle().top = this.getComputedPositionOffset(style.getTop(),containingDOMElementDimensions.height);
	style.getComputedStyle().bottom = this.getComputedPositionOffset(style.getBottom(),containingDOMElementDimensions.height);
}
cocktail.style.computer.BoxComputer.prototype.measureVerticalPaddings = function(style,containingDOMElementDimensions) {
	style.getComputedStyle().paddingTop = this.getComputedPadding(style.getPaddingTop(),containingDOMElementDimensions.height);
	style.getComputedStyle().paddingBottom = this.getComputedPadding(style.getPaddingBottom(),containingDOMElementDimensions.height);
}
cocktail.style.computer.BoxComputer.prototype.measureHorizontalPaddings = function(style,containingDOMElementDimensions) {
	style.getComputedStyle().paddingLeft = this.getComputedPadding(style.getPaddingLeft(),containingDOMElementDimensions.width);
	style.getComputedStyle().paddingRight = this.getComputedPadding(style.getPaddingRight(),containingDOMElementDimensions.width);
}
cocktail.style.computer.BoxComputer.prototype.measureWidthAndHorizontalMargins = function(style,containingDOMElementDimensions) {
	if(style.getWidth() == cocktail.style.DimensionStyleValue.auto) {
		this.measureAutoWidth(style,containingDOMElementDimensions);
	}
	else {
		this.measureWidth(style,containingDOMElementDimensions);
	}
}
cocktail.style.computer.BoxComputer.prototype.measureAutoWidth = function(style,containingDOMElementDimensions) {
	style.getComputedStyle().width = cocktail.style.computer.BoxComputer.NULL;
	style.getComputedStyle().marginLeft = this.getComputedMarginLeft(style,containingDOMElementDimensions);
	style.getComputedStyle().marginRight = this.getComputedMarginRight(style,containingDOMElementDimensions);
	style.getComputedStyle().width = this.getComputedAutoWidth(style,containingDOMElementDimensions);
}
cocktail.style.computer.BoxComputer.prototype.measureWidth = function(style,containingDOMElementDimensions) {
	style.getComputedStyle().width = this.getComputedWidth(style,containingDOMElementDimensions);
	style.getComputedStyle().marginLeft = this.getComputedMarginLeft(style,containingDOMElementDimensions);
	style.getComputedStyle().marginRight = this.getComputedMarginRight(style,containingDOMElementDimensions);
}
cocktail.style.computer.BoxComputer.prototype.measureHeightAndVerticalMargins = function(style,containingDOMElementDimensions) {
	if(style.getHeight() == cocktail.style.DimensionStyleValue.auto) {
		this.measureAutoHeight(style,containingDOMElementDimensions);
	}
	else {
		this.measureHeight(style,containingDOMElementDimensions);
	}
}
cocktail.style.computer.BoxComputer.prototype.measureAutoHeight = function(style,containingDOMElementDimensions) {
	style.getComputedStyle().height = this.getComputedAutoHeight(style,containingDOMElementDimensions);
	style.getComputedStyle().marginTop = this.getComputedMarginTop(style,containingDOMElementDimensions);
	style.getComputedStyle().marginBottom = this.getComputedMarginBottom(style,containingDOMElementDimensions);
}
cocktail.style.computer.BoxComputer.prototype.measureHeight = function(style,containingDOMElementDimensions) {
	style.getComputedStyle().height = this.getComputedHeight(style,containingDOMElementDimensions);
	style.getComputedStyle().marginTop = this.getComputedMarginTop(style,containingDOMElementDimensions);
	style.getComputedStyle().marginBottom = this.getComputedMarginBottom(style,containingDOMElementDimensions);
}
cocktail.style.computer.BoxComputer.prototype.constrainDimensions = function(computedStyle) {
	if(computedStyle.maxWidth != cocktail.style.computer.BoxComputer.NULL) {
		if(computedStyle.width > computedStyle.maxWidth) {
			computedStyle.width = computedStyle.maxWidth;
		}
	}
	if(computedStyle.width < computedStyle.minWidth) {
		computedStyle.width = computedStyle.minWidth;
	}
	if(computedStyle.height != cocktail.style.computer.BoxComputer.NULL) {
		if(computedStyle.maxHeight != cocktail.style.computer.BoxComputer.NULL) {
			if(computedStyle.height > computedStyle.maxHeight) {
				computedStyle.height = computedStyle.maxHeight;
			}
		}
		if(computedStyle.height < computedStyle.minHeight) {
			computedStyle.height = computedStyle.minHeight;
		}
	}
}
cocktail.style.computer.BoxComputer.prototype.getComputedWidth = function(style,containingDOMElementDimensions) {
	return this.getComputedDimension(style.getWidth(),containingDOMElementDimensions.width);
}
cocktail.style.computer.BoxComputer.prototype.getComputedAutoWidth = function(style,containingDOMElementDimensions) {
	return containingDOMElementDimensions.width - style.getComputedStyle().paddingLeft - style.getComputedStyle().paddingRight - style.getComputedStyle().marginLeft - style.getComputedStyle().marginRight;
}
cocktail.style.computer.BoxComputer.prototype.getComputedHeight = function(style,containingDOMElementDimensions) {
	return this.getComputedDimension(style.getHeight(),containingDOMElementDimensions.height);
}
cocktail.style.computer.BoxComputer.prototype.getComputedAutoHeight = function(style,containingDOMElementDimensions) {
	return cocktail.style.computer.BoxComputer.NULL;
}
cocktail.style.computer.BoxComputer.prototype.getComputedMarginLeft = function(style,containingDOMElementDimensions) {
	return this.getComputedMargin(style.getMarginLeft(),style.getMarginRight(),containingDOMElementDimensions.width,style.getComputedStyle().width,style.getWidth() == cocktail.style.DimensionStyleValue.auto,style.getComputedStyle().paddingRight + style.getComputedStyle().paddingLeft);
}
cocktail.style.computer.BoxComputer.prototype.getComputedMarginRight = function(style,containingDOMElementDimensions) {
	return this.getComputedMargin(style.getMarginRight(),style.getMarginLeft(),containingDOMElementDimensions.width,style.getComputedStyle().width,style.getWidth() == cocktail.style.DimensionStyleValue.auto,style.getComputedStyle().paddingRight + style.getComputedStyle().paddingLeft);
}
cocktail.style.computer.BoxComputer.prototype.getComputedMarginTop = function(style,containingDOMElementDimensions) {
	return this.getComputedMargin(style.getMarginTop(),style.getMarginBottom(),containingDOMElementDimensions.height,style.getComputedStyle().height,style.getHeight() == cocktail.style.DimensionStyleValue.auto,style.getComputedStyle().paddingTop + style.getComputedStyle().paddingBottom);
}
cocktail.style.computer.BoxComputer.prototype.getComputedMarginBottom = function(style,containingDOMElementDimensions) {
	return this.getComputedMargin(style.getMarginBottom(),style.getMarginTop(),containingDOMElementDimensions.height,style.getComputedStyle().height,style.getHeight() == cocktail.style.DimensionStyleValue.auto,style.getComputedStyle().paddingTop + style.getComputedStyle().paddingBottom);
}
cocktail.style.computer.BoxComputer.prototype.getComputedMargin = function(marginStyleValue,opositeMarginStyleValue,containingDOMElementDimension,computedDimension,isDimensionAuto,computedPaddingsDimension,isHorizontalMargin) {
	if(isHorizontalMargin == null) isHorizontalMargin = false;
	var computedMargin;
	var $e = marginStyleValue;
	switch( $e[1] ) {
	case 0:
	var value = $e[2];
	{
		computedMargin = this.getValueFromLength(value);
	}break;
	case 1:
	var value = $e[2];
	{
		if(containingDOMElementDimension == cocktail.style.computer.BoxComputer.NULL) {
			computedMargin = 0;
		}
		else {
			computedMargin = this.getValueFromPercent(value,containingDOMElementDimension);
		}
	}break;
	case 2:
	{
		if(containingDOMElementDimension == cocktail.style.computer.BoxComputer.NULL || isHorizontalMargin == true || isDimensionAuto == true) {
			computedMargin = 0;
		}
		else {
			var $e = opositeMarginStyleValue;
			switch( $e[1] ) {
			case 2:
			{
				computedMargin = Math.round((containingDOMElementDimension - computedDimension - computedPaddingsDimension) / 2);
			}break;
			default:{
				var opositeComputedMargin = this.getComputedMargin(opositeMarginStyleValue,marginStyleValue,containingDOMElementDimension,computedDimension,isDimensionAuto,computedPaddingsDimension);
				computedMargin = containingDOMElementDimension - computedDimension - computedPaddingsDimension - opositeComputedMargin;
			}break;
			}
		}
	}break;
	}
	return computedMargin;
}
cocktail.style.computer.BoxComputer.prototype.getComputedConstrainedDimension = function(constrainedDimensionStyleValue,containingDOMElementDimension,isMinConstraint) {
	if(isMinConstraint == null) isMinConstraint = false;
	var computedConstraintDimension;
	var $e = constrainedDimensionStyleValue;
	switch( $e[1] ) {
	case 0:
	var value = $e[2];
	{
		computedConstraintDimension = this.getValueFromLength(value);
	}break;
	case 1:
	var value = $e[2];
	{
		if(containingDOMElementDimension == cocktail.style.computer.BoxComputer.NULL) {
			if(isMinConstraint == true) {
				computedConstraintDimension = 0;
			}
			else {
				computedConstraintDimension = cocktail.style.computer.BoxComputer.NULL;
			}
		}
		else {
			computedConstraintDimension = this.getValueFromPercent(value,containingDOMElementDimension);
		}
	}break;
	case 2:
	{
		if(isMinConstraint == true) {
			computedConstraintDimension = 0;
		}
		else {
			computedConstraintDimension = cocktail.style.computer.BoxComputer.NULL;
		}
	}break;
	}
	return computedConstraintDimension;
}
cocktail.style.computer.BoxComputer.prototype.getComputedPositionOffset = function(positionOffsetStyleValue,containingDOMElementDimension) {
	var computedPositionOffset;
	var $e = positionOffsetStyleValue;
	switch( $e[1] ) {
	case 0:
	var value = $e[2];
	{
		computedPositionOffset = this.getValueFromLength(value);
	}break;
	case 1:
	var value = $e[2];
	{
		computedPositionOffset = this.getValueFromPercent(value,containingDOMElementDimension);
	}break;
	case 2:
	{
		computedPositionOffset = 0;
	}break;
	}
	return computedPositionOffset;
}
cocktail.style.computer.BoxComputer.prototype.getComputedDimension = function(dimensionStyleValue,containingDOMElementDimension) {
	var computedDimensions;
	var $e = dimensionStyleValue;
	switch( $e[1] ) {
	case 0:
	var value = $e[2];
	{
		computedDimensions = this.getValueFromLength(value);
	}break;
	case 1:
	var value = $e[2];
	{
		if(containingDOMElementDimension == cocktail.style.computer.BoxComputer.NULL) {
			computedDimensions = 0;
		}
		else {
			computedDimensions = this.getValueFromPercent(value,containingDOMElementDimension);
		}
	}break;
	case 2:
	{
		computedDimensions = cocktail.style.computer.BoxComputer.NULL;
	}break;
	}
	return computedDimensions;
}
cocktail.style.computer.BoxComputer.prototype.getComputedPadding = function(paddingStyleValue,containingDOMElementDimension) {
	var computedPaddingValue;
	var $e = paddingStyleValue;
	switch( $e[1] ) {
	case 0:
	var value = $e[2];
	{
		computedPaddingValue = this.getValueFromLength(value);
	}break;
	case 1:
	var value = $e[2];
	{
		if(containingDOMElementDimension == cocktail.style.computer.BoxComputer.NULL) {
			computedPaddingValue = 0;
		}
		else {
			computedPaddingValue = this.getValueFromPercent(value,containingDOMElementDimension);
		}
	}break;
	}
	return computedPaddingValue;
}
cocktail.style.computer.BoxComputer.prototype.getValueFromLength = function(length) {
	var lengthValue;
	var $e = length;
	switch( $e[1] ) {
	case 0:
	var value = $e[2];
	{
		lengthValue = value;
	}break;
	case 2:
	var value = $e[2];
	{
		lengthValue = value * (72 * (1 / 0.75) / 2.54) / 10;
	}break;
	case 1:
	var value = $e[2];
	{
		lengthValue = value * (72 * (1 / 0.75) / 2.54);
	}break;
	case 3:
	var value = $e[2];
	{
		lengthValue = value / 0.75;
	}break;
	case 5:
	var value = $e[2];
	{
		lengthValue = value * (72 * (1 / 0.75));
	}break;
	case 4:
	var value = $e[2];
	{
		lengthValue = value * (12 * (1 / 0.75));
	}break;
	}
	return Math.round(lengthValue);
}
cocktail.style.computer.BoxComputer.prototype.getValueFromPercent = function(percent,reference) {
	return Math.round(reference * (percent * 0.01));
}
cocktail.style.computer.BoxComputer.prototype.__class__ = cocktail.style.computer.BoxComputer;
cocktail.style.computer.PositionedEmbeddedBoxComputer = function(p) { if( p === $_ ) return; {
	cocktail.style.computer.BoxComputer.call(this);
}}
cocktail.style.computer.PositionedEmbeddedBoxComputer.__name__ = ["cocktail","style","computer","PositionedEmbeddedBoxComputer"];
cocktail.style.computer.PositionedEmbeddedBoxComputer.__super__ = cocktail.style.computer.BoxComputer;
for(var k in cocktail.style.computer.BoxComputer.prototype ) cocktail.style.computer.PositionedEmbeddedBoxComputer.prototype[k] = cocktail.style.computer.BoxComputer.prototype[k];
cocktail.style.computer.PositionedEmbeddedBoxComputer.prototype.__class__ = cocktail.style.computer.PositionedEmbeddedBoxComputer;
if(!cocktail.nativeElement) cocktail.nativeElement = {}
if(!cocktail.nativeElement["abstract"]) cocktail.nativeElement["abstract"] = {}
cocktail.nativeElement.abstract.AbstractNativeElementPathManager = function(p) { if( p === $_ ) return; {
	null;
}}
cocktail.nativeElement.abstract.AbstractNativeElementPathManager.__name__ = ["cocktail","nativeElement","abstract","AbstractNativeElementPathManager"];
cocktail.nativeElement.abstract.AbstractNativeElementPathManager.prototype.getRoot = function() {
	return null;
}
cocktail.nativeElement.abstract.AbstractNativeElementPathManager.prototype.__class__ = cocktail.nativeElement.abstract.AbstractNativeElementPathManager;
if(!cocktail.style.floats) cocktail.style.floats = {}
cocktail.style.floats.FloatsManager = function(p) { if( p === $_ ) return; {
	var floatsLeft = new Array();
	var floatsRight = new Array();
	this._floats = { left : floatsLeft, right : floatsRight};
}}
cocktail.style.floats.FloatsManager.__name__ = ["cocktail","style","floats","FloatsManager"];
cocktail.style.floats.FloatsManager.prototype._floats = null;
cocktail.style.floats.FloatsManager.prototype.floats = null;
cocktail.style.floats.FloatsManager.prototype.addFloats = function(parentFormattingContext) {
	{
		var _g1 = 0, _g = parentFormattingContext.getFloatsManager().getFloats().left.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._floats.left.push(this.globalTolocal(parentFormattingContext.getFloatsManager().getFloats().left[i],parentFormattingContext.getFlowData()));
		}
	}
	{
		var _g1 = 0, _g = parentFormattingContext.getFloatsManager().getFloats().right.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._floats.right.push(this.globalTolocal(parentFormattingContext.getFloatsManager().getFloats().right[i],parentFormattingContext.getFlowData()));
		}
	}
}
cocktail.style.floats.FloatsManager.prototype.retrieveFloats = function(childrenFormattingContext) {
	if(childrenFormattingContext != null) {
		{
			var _g1 = 0, _g = childrenFormattingContext.getFloatsManager().getFloats().left.length;
			while(_g1 < _g) {
				var i = _g1++;
				this._floats.left.push(childrenFormattingContext.getFloatsManager().getFloats().left[i]);
			}
		}
		{
			var _g1 = 0, _g = childrenFormattingContext.getFloatsManager().getFloats().right.length;
			while(_g1 < _g) {
				var i = _g1++;
				this._floats.right.push(childrenFormattingContext.getFloatsManager().getFloats().right[i]);
			}
		}
	}
}
cocktail.style.floats.FloatsManager.prototype.globalTolocal = function(floatData,flowData) {
	var floatY = floatData.y - flowData.y;
	var convertedFloatData = { x : floatData.x, y : floatY, width : floatData.width, height : floatData.height};
	return convertedFloatData;
}
cocktail.style.floats.FloatsManager.prototype.clearFloat = function(clear,flowData) {
	var ret;
	var $e = clear;
	switch( $e[1] ) {
	case 1:
	{
		ret = this.clearLeft(flowData);
		this._floats.left = new Array();
	}break;
	case 2:
	{
		ret = this.clearRight(flowData);
		this._floats.right = new Array();
	}break;
	case 3:
	{
		ret = this.clearBoth(flowData);
		this._floats.right = new Array();
		this._floats.left = new Array();
	}break;
	case 0:
	{
		ret = flowData.y;
	}break;
	}
	return ret;
}
cocktail.style.floats.FloatsManager.prototype.clearLeft = function(flowData) {
	return this.doClearFloat(flowData,this._floats.left);
}
cocktail.style.floats.FloatsManager.prototype.clearRight = function(flowData) {
	return this.doClearFloat(flowData,this._floats.right);
}
cocktail.style.floats.FloatsManager.prototype.clearBoth = function(flowData) {
	var leftY = this.doClearFloat(flowData,this._floats.left);
	var rightY = this.doClearFloat(flowData,this._floats.right);
	if(leftY > rightY) {
		return leftY;
	}
	else {
		return rightY;
	}
}
cocktail.style.floats.FloatsManager.prototype.doClearFloat = function(flowData,floats) {
	if(floats.length > 0) {
		var highestFloat = floats[0];
		{
			var _g1 = 0, _g = floats.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(floats[i].y + floats[i].height > highestFloat.y + highestFloat.height) {
					highestFloat = floats[i];
				}
			}
		}
		return highestFloat.y + highestFloat.height;
	}
	else {
		return flowData.y;
	}
}
cocktail.style.floats.FloatsManager.prototype.computeFloatData = function(domElement,flowData) {
	var ret;
	var $e = domElement.getStyle().getComputedStyle()["float"];
	switch( $e[1] ) {
	case 0:
	{
		ret = this.getLeftFloatData(domElement,flowData);
		this._floats.left.push(ret);
	}break;
	case 1:
	{
		ret = this.getRightFloatData(domElement,flowData);
		this._floats.right.push(ret);
	}break;
	default:{
		ret = null;
	}break;
	}
	return ret;
}
cocktail.style.floats.FloatsManager.prototype.getLeftFloatData = function(domElement,flowData) {
	var floatData = this.getFloatData(domElement,flowData);
	floatData.x = flowData.firstLineX + this.getLeftFloatOffset(floatData.y);
	return floatData;
}
cocktail.style.floats.FloatsManager.prototype.getRightFloatData = function(domElement,flowData) {
	var floatData = this.getFloatData(domElement,flowData);
	floatData.x = flowData.containingBlockWidth - floatData.width - this.getRightFloatOffset(floatData.y,flowData.containingBlockWidth) + flowData.firstLineX;
	return floatData;
}
cocktail.style.floats.FloatsManager.prototype.getFloatData = function(domElement,flowData) {
	var floatWidth = domElement.getOffsetWidth();
	var floatHeight = domElement.getOffsetHeight();
	var floatY = this.getFirstAvailableY(flowData,floatWidth);
	var floatX = 0;
	return { x : floatX, y : floatY, width : floatWidth, height : floatHeight};
}
cocktail.style.floats.FloatsManager.prototype.getFirstAvailableY = function(flowData,elementWidth) {
	var retY = flowData.y;
	while(this.getLeftFloatOffset(retY) + this.getRightFloatOffset(retY,flowData.containingBlockWidth) + elementWidth > flowData.containingBlockWidth) {
		var afterFloats = new Array();
		{
			var _g1 = 0, _g = this._floats.left.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(this._floats.left[i].y <= retY && this._floats.left[i].height + this._floats.left[i].y > retY) {
					afterFloats.push(this._floats.left[i]);
				}
			}
		}
		{
			var _g1 = 0, _g = this._floats.right.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(this._floats.right[i].y <= retY && this._floats.right[i].height + this._floats.right[i].y > retY) {
					afterFloats.push(this._floats.right[i]);
				}
			}
		}
		if(afterFloats.length == 0) {
			break;
		}
		else {
			var nextY = 1000000;
			{
				var _g1 = 0, _g = afterFloats.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(afterFloats[i].y + afterFloats[i].height - retY < nextY) {
						nextY = afterFloats[i].y + afterFloats[i].height - retY;
					}
				}
			}
			retY += nextY;
		}
	}
	return retY;
}
cocktail.style.floats.FloatsManager.prototype.removeFloats = function(flowY) {
	this._floats.left = this.doRemoveFloat(this._floats.left,flowY);
	this._floats.right = this.doRemoveFloat(this._floats.right,flowY);
}
cocktail.style.floats.FloatsManager.prototype.doRemoveFloat = function(floats,flowY) {
	var newFloats = new Array();
	{
		var _g1 = 0, _g = floats.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(floats[i].y + floats[i].height > flowY) {
				newFloats.push(floats[i]);
			}
		}
	}
	return newFloats;
}
cocktail.style.floats.FloatsManager.prototype.getRightFloatOffset = function(y,containingWidth) {
	var rightFloatOffset = 0;
	{
		var _g1 = 0, _g = this._floats.right.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._floats.right[i].y + this._floats.right[i].height > y && this._floats.right[i].y <= y) {
				if(containingWidth - this._floats.right[i].x > rightFloatOffset) {
					rightFloatOffset = containingWidth - this._floats.right[i].x;
				}
			}
		}
	}
	return rightFloatOffset;
}
cocktail.style.floats.FloatsManager.prototype.getLeftFloatOffset = function(y) {
	var leftFloatOffset = 0;
	{
		var _g1 = 0, _g = this._floats.left.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._floats.left[i].y + this._floats.left[i].height > y && this._floats.left[i].y <= y) {
				if(this._floats.left[i].x + this._floats.left[i].width > leftFloatOffset) {
					leftFloatOffset = this._floats.left[i].x + this._floats.left[i].width;
				}
			}
		}
	}
	return leftFloatOffset;
}
cocktail.style.floats.FloatsManager.prototype.getFloats = function() {
	return this._floats;
}
cocktail.style.floats.FloatsManager.prototype.__class__ = cocktail.style.floats.FloatsManager;
List = function(p) { if( p === $_ ) return; {
	this.length = 0;
}}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.first = function() {
	return this.h == null?null:this.h[0];
}
List.prototype.last = function() {
	return this.q == null?null:this.q[0];
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.isEmpty = function() {
	return this.h == null;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return this.h != null;
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}};
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{";
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = ", ";
		s.b[s.b.length] = Std.string(l[0]);
		l = l[1];
	}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.__class__ = List;
if(!utest._Dispatcher) utest._Dispatcher = {}
utest._Dispatcher.EventException = { __ename__ : ["utest","_Dispatcher","EventException"], __constructs__ : ["StopPropagation"] }
utest._Dispatcher.EventException.StopPropagation = ["StopPropagation",0];
utest._Dispatcher.EventException.StopPropagation.toString = $estr;
utest._Dispatcher.EventException.StopPropagation.__enum__ = utest._Dispatcher.EventException;
utest.Dispatcher = function(p) { if( p === $_ ) return; {
	this.handlers = new Array();
}}
utest.Dispatcher.__name__ = ["utest","Dispatcher"];
utest.Dispatcher.stop = function() {
	throw utest._Dispatcher.EventException.StopPropagation;
}
utest.Dispatcher.prototype.handlers = null;
utest.Dispatcher.prototype.add = function(h) {
	this.handlers.push(h);
	return h;
}
utest.Dispatcher.prototype.remove = function(h) {
	{
		var _g1 = 0, _g = this.handlers.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
		}
	}
	return null;
}
utest.Dispatcher.prototype.clear = function() {
	this.handlers = new Array();
}
utest.Dispatcher.prototype.dispatch = function(e) {
	try {
		var list = this.handlers.copy();
		{
			var _g = 0;
			while(_g < list.length) {
				var l = list[_g];
				++_g;
				l(e);
			}
		}
		return true;
	}
	catch( $e0 ) {
		if( js.Boot.__instanceof($e0,utest._Dispatcher.EventException) ) {
			var exc = $e0;
			{
				return false;
			}
		} else throw($e0);
	}
}
utest.Dispatcher.prototype.has = function() {
	return this.handlers.length > 0;
}
utest.Dispatcher.prototype.__class__ = utest.Dispatcher;
utest.Notifier = function(p) { if( p === $_ ) return; {
	this.handlers = new Array();
}}
utest.Notifier.__name__ = ["utest","Notifier"];
utest.Notifier.stop = function() {
	throw utest._Dispatcher.EventException.StopPropagation;
}
utest.Notifier.prototype.handlers = null;
utest.Notifier.prototype.add = function(h) {
	this.handlers.push(h);
	return h;
}
utest.Notifier.prototype.remove = function(h) {
	{
		var _g1 = 0, _g = this.handlers.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
		}
	}
	return null;
}
utest.Notifier.prototype.clear = function() {
	this.handlers = new Array();
}
utest.Notifier.prototype.dispatch = function() {
	try {
		var list = this.handlers.copy();
		{
			var _g = 0;
			while(_g < list.length) {
				var l = list[_g];
				++_g;
				l();
			}
		}
		return true;
	}
	catch( $e0 ) {
		if( js.Boot.__instanceof($e0,utest._Dispatcher.EventException) ) {
			var exc = $e0;
			{
				return false;
			}
		} else throw($e0);
	}
}
utest.Notifier.prototype.has = function() {
	return this.handlers.length > 0;
}
utest.Notifier.prototype.__class__ = utest.Notifier;
if(typeof slPlayer=='undefined') slPlayer = {}
if(!slPlayer.core) slPlayer.core = {}
if(!slPlayer.core.publication) slPlayer.core.publication = {}
slPlayer.core.publication.Publication = function(p) { if( p === $_ ) return; {
	null;
}}
slPlayer.core.publication.Publication.__name__ = ["slPlayer","core","publication","Publication"];
slPlayer.core.publication.Publication._publications = null;
slPlayer.core.publication.Publication.createPublication = function(config) {
	var publication = new slPlayer.core.publication.Publication();
	publication.config = config;
	if(slPlayer.core.publication.Publication._publications == null) slPlayer.core.publication.Publication._publications = new Array();
	slPlayer.core.publication.Publication._publications.push(publication);
	return publication;
}
slPlayer.core.publication.Publication.getPublicationByClassInstance = function(classInstance) {
	return slPlayer.core.publication.Publication.doGetPublication(classInstance,$closure(slPlayer.core.publication.Publication,"isClassInstanceOfBlock"));
}
slPlayer.core.publication.Publication.getPublicationByBlock = function(block) {
	return slPlayer.core.publication.Publication.doGetPublication(block,$closure(slPlayer.core.publication.Publication,"isSameBlock"));
}
slPlayer.core.publication.Publication.getPublicationByNativeInstance = function(nativeInstance) {
	return slPlayer.core.publication.Publication.doGetPublication(nativeInstance,$closure(slPlayer.core.publication.Publication,"isNativeInstanceOfBlock"));
}
slPlayer.core.publication.Publication.getPublicationByDOMElement = function(domElement) {
	return slPlayer.core.publication.Publication.doGetPublication(domElement,$closure(slPlayer.core.publication.Publication,"isDOMElementOfBlock"));
}
slPlayer.core.publication.Publication.getPublicationByNativeElement = function(nativeElement) {
	return slPlayer.core.publication.Publication.doGetPublication(nativeElement,$closure(slPlayer.core.publication.Publication,"isNativeElementOfBlock"));
}
slPlayer.core.publication.Publication.getPublicationByStyleManager = function(styleManager) {
	return slPlayer.core.publication.Publication.doGetPublication(styleManager,$closure(slPlayer.core.publication.Publication,"isStyleManagerOfBlock"));
}
slPlayer.core.publication.Publication.doGetPublication = function(element,isOwnerMethod) {
	{
		var _g1 = 0, _g = slPlayer.core.publication.Publication._publications.length;
		while(_g1 < _g) {
			var i = _g1++;
			var block = slPlayer.core.publication.Publication.doGetBlock(slPlayer.core.publication.Publication._publications[i].rootBlock,element,isOwnerMethod);
			if(block != null) {
				return slPlayer.core.publication.Publication._publications[i];
			}
		}
	}
	return null;
}
slPlayer.core.publication.Publication.doGetBlock = function(block,element,isOwnerMethod) {
	if(isOwnerMethod(block,element) == true) {
		return block;
	}
	else {
		{
			var _g1 = 0, _g = block.getChildren().length;
			while(_g1 < _g) {
				var i = _g1++;
				return slPlayer.core.publication.Publication.doGetBlock(block.getChildren()[i],element,isOwnerMethod);
			}
		}
	}
	return null;
}
slPlayer.core.publication.Publication.isSameBlock = function(block,testedBlock) {
	return block == testedBlock;
}
slPlayer.core.publication.Publication.isClassInstanceOfBlock = function(block,classInstance) {
	return block.getClassInstance() == classInstance;
}
slPlayer.core.publication.Publication.isDOMElementOfBlock = function(block,domElement) {
	return block.getDOMElement() == domElement;
}
slPlayer.core.publication.Publication.isNativeInstanceOfBlock = function(block,nativeInstance) {
	return block.getClassInstance().getNativeInstance() == nativeInstance;
}
slPlayer.core.publication.Publication.isNativeElementOfBlock = function(block,nativeElement) {
	return block.getDOMElement().getNativeElement() == nativeElement;
}
slPlayer.core.publication.Publication.isStyleManagerOfBlock = function(block,styleManager) {
	return block.getStyleManager() == styleManager;
}
slPlayer.core.publication.Publication.prototype.rootBlock = null;
slPlayer.core.publication.Publication.prototype.config = null;
slPlayer.core.publication.Publication.prototype.render = function(nativeElement,xmlFileName,xmlString) {
	if(nativeElement == null) {
		nativeElement = cocktail.nativeElement.NativeElementManager.getRoot();
	}
	var domElement = new cocktail.domElement.js.ContainerDOMElement(nativeElement);
	var block = new slPlayer.core.block.Block(xmlFileName);
	this.rootBlock = block;
	block.setDOMElement(domElement);
	if(xmlString != null) {
		slPlayer.core.block.BlockBuilder.deserializeBlockData(block,xmlString);
		block.open(function(block1) {
			null;
		},function(error) {
			null;
		});
	}
	else {
		block.open(function(block1) {
			null;
		},function(error) {
			null;
		});
	}
}
slPlayer.core.publication.Publication.prototype.getBlockByClassInstance = function(classInstance) {
	return slPlayer.core.publication.Publication.doGetBlock(this.rootBlock,classInstance,$closure(slPlayer.core.publication.Publication,"isClassInstanceOfBlock"));
}
slPlayer.core.publication.Publication.prototype.getBlockByNativeInstance = function(nativeInstance) {
	return slPlayer.core.publication.Publication.doGetBlock(this.rootBlock,nativeInstance,$closure(slPlayer.core.publication.Publication,"isNativeInstanceOfBlock"));
}
slPlayer.core.publication.Publication.prototype.getBlockByDOMElement = function(domElement) {
	return slPlayer.core.publication.Publication.doGetBlock(this.rootBlock,domElement,$closure(slPlayer.core.publication.Publication,"isDOMElementOfBlock"));
}
slPlayer.core.publication.Publication.prototype.getBlockByNativeElement = function(nativeElement) {
	return slPlayer.core.publication.Publication.doGetBlock(this.rootBlock,nativeElement,$closure(slPlayer.core.publication.Publication,"isNativeElementOfBlock"));
}
slPlayer.core.publication.Publication.prototype.getBlockByStyleManager = function(styleManager) {
	return slPlayer.core.publication.Publication.doGetBlock(this.rootBlock,styleManager,$closure(slPlayer.core.publication.Publication,"isStyleManagerOfBlock"));
}
slPlayer.core.publication.Publication.prototype.__class__ = slPlayer.core.publication.Publication;
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
cocktail.style.computer.BlockBoxComputer = function(p) { if( p === $_ ) return; {
	cocktail.style.computer.BoxComputer.call(this);
}}
cocktail.style.computer.BlockBoxComputer.__name__ = ["cocktail","style","computer","BlockBoxComputer"];
cocktail.style.computer.BlockBoxComputer.__super__ = cocktail.style.computer.BoxComputer;
for(var k in cocktail.style.computer.BoxComputer.prototype ) cocktail.style.computer.BlockBoxComputer.prototype[k] = cocktail.style.computer.BoxComputer.prototype[k];
cocktail.style.computer.BlockBoxComputer.prototype.__class__ = cocktail.style.computer.BlockBoxComputer;
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
cocktail.style.computer.BlockEmbeddedBoxComputer = function(p) { if( p === $_ ) return; {
	cocktail.style.computer.BoxComputer.call(this);
}}
cocktail.style.computer.BlockEmbeddedBoxComputer.__name__ = ["cocktail","style","computer","BlockEmbeddedBoxComputer"];
cocktail.style.computer.BlockEmbeddedBoxComputer.__super__ = cocktail.style.computer.BoxComputer;
for(var k in cocktail.style.computer.BoxComputer.prototype ) cocktail.style.computer.BlockEmbeddedBoxComputer.prototype[k] = cocktail.style.computer.BoxComputer.prototype[k];
cocktail.style.computer.BlockEmbeddedBoxComputer.prototype.getComputedAutoWidth = function(style,containingDOMElementDimensions) {
	var ret = 0;
	var embeddedDOMElement = style.getDOMElement();
	if(style.getHeight() == cocktail.style.DimensionStyleValue.auto) {
		if(embeddedDOMElement.getIntrinsicWidth() != null) {
			ret = embeddedDOMElement.getIntrinsicWidth();
		}
		else if(embeddedDOMElement.getIntrinsicHeight() != null && embeddedDOMElement.getIntrinsicRatio() != null) {
			ret = Math.round(embeddedDOMElement.getIntrinsicHeight() * embeddedDOMElement.getIntrinsicRatio());
		}
		else if(embeddedDOMElement.getIntrinsicRatio() != null) {
			ret = 0;
		}
	}
	else {
		var computedHeight = this.getComputedDimension(style.getHeight(),containingDOMElementDimensions.height);
		if(embeddedDOMElement.getIntrinsicRatio() != null) {
			ret = Math.round(computedHeight * embeddedDOMElement.getIntrinsicRatio());
		}
		else if(embeddedDOMElement.getIntrinsicWidth() != null) {
			ret = embeddedDOMElement.getIntrinsicWidth();
		}
		else {
			ret = 0;
		}
	}
	return ret;
}
cocktail.style.computer.BlockEmbeddedBoxComputer.prototype.getComputedAutoHeight = function(style,containingDOMElementDimensions) {
	var embeddedDOMElement = style.getDOMElement();
	var ret = 0;
	if(style.getWidth() == cocktail.style.DimensionStyleValue.auto) {
		if(embeddedDOMElement.getIntrinsicHeight() != null) {
			ret = embeddedDOMElement.getIntrinsicHeight();
		}
	}
	else {
		var computedWidth = this.getComputedDimension(style.getWidth(),containingDOMElementDimensions.height);
		if(embeddedDOMElement.getIntrinsicRatio() != null) {
			ret = Math.round(computedWidth * embeddedDOMElement.getIntrinsicRatio());
		}
		else null;
	}
	return ret;
}
cocktail.style.computer.BlockEmbeddedBoxComputer.prototype.__class__ = cocktail.style.computer.BlockEmbeddedBoxComputer;
cocktail.style.computer.InlineEmbeddedBoxComputer = function(p) { if( p === $_ ) return; {
	cocktail.style.computer.BlockEmbeddedBoxComputer.call(this);
}}
cocktail.style.computer.InlineEmbeddedBoxComputer.__name__ = ["cocktail","style","computer","InlineEmbeddedBoxComputer"];
cocktail.style.computer.InlineEmbeddedBoxComputer.__super__ = cocktail.style.computer.BlockEmbeddedBoxComputer;
for(var k in cocktail.style.computer.BlockEmbeddedBoxComputer.prototype ) cocktail.style.computer.InlineEmbeddedBoxComputer.prototype[k] = cocktail.style.computer.BlockEmbeddedBoxComputer.prototype[k];
cocktail.style.computer.InlineEmbeddedBoxComputer.prototype.getComputedMargin = function(marginStyleValue,opositeMarginStyleValue,containingDOMElementDimension,computedDimension,isDimensionAuto,computedPaddingsDimension,isHorizontalMargin) {
	if(isHorizontalMargin == null) isHorizontalMargin = false;
	var computedMargin;
	var $e = marginStyleValue;
	switch( $e[1] ) {
	case 0:
	var value = $e[2];
	{
		computedMargin = this.getValueFromLength(value);
	}break;
	case 1:
	var value = $e[2];
	{
		if(containingDOMElementDimension == cocktail.style.computer.InlineEmbeddedBoxComputer.NULL) {
			computedMargin = 0;
		}
		else {
			computedMargin = this.getValueFromPercent(value,containingDOMElementDimension);
		}
	}break;
	case 2:
	{
		computedMargin = 0;
	}break;
	}
	return computedMargin;
}
cocktail.style.computer.InlineEmbeddedBoxComputer.prototype.__class__ = cocktail.style.computer.InlineEmbeddedBoxComputer;
if(!cocktail.nativeElement.js) cocktail.nativeElement.js = {}
cocktail.nativeElement.js.NativeElementPathManager = function(p) { if( p === $_ ) return; {
	cocktail.nativeElement.abstract.AbstractNativeElementPathManager.call(this);
}}
cocktail.nativeElement.js.NativeElementPathManager.__name__ = ["cocktail","nativeElement","js","NativeElementPathManager"];
cocktail.nativeElement.js.NativeElementPathManager.__super__ = cocktail.nativeElement.abstract.AbstractNativeElementPathManager;
for(var k in cocktail.nativeElement.abstract.AbstractNativeElementPathManager.prototype ) cocktail.nativeElement.js.NativeElementPathManager.prototype[k] = cocktail.nativeElement.abstract.AbstractNativeElementPathManager.prototype[k];
cocktail.nativeElement.js.NativeElementPathManager.prototype.getRoot = function() {
	return js.Lib.document.body;
}
cocktail.nativeElement.js.NativeElementPathManager.prototype.__class__ = cocktail.nativeElement.js.NativeElementPathManager;
IntHash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.h = null;
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.keys = function() {
	var a = new Array();
	
			for( x in this.h )
				a.push(x);
		;
	return a.iterator();
}
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}};
}
IntHash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
IntHash.prototype.__class__ = IntHash;
cocktail.nativeElement.abstract.AbstractNativeElementCreator = function(p) { if( p === $_ ) return; {
	null;
}}
cocktail.nativeElement.abstract.AbstractNativeElementCreator.__name__ = ["cocktail","nativeElement","abstract","AbstractNativeElementCreator"];
cocktail.nativeElement.abstract.AbstractNativeElementCreator.prototype.createNativeElement = function(nativeElementType) {
	return null;
}
cocktail.nativeElement.abstract.AbstractNativeElementCreator.prototype.createNativeTextNode = function(text) {
	return null;
}
cocktail.nativeElement.abstract.AbstractNativeElementCreator.prototype.__class__ = cocktail.nativeElement.abstract.AbstractNativeElementCreator;
if(!slPlayer.core.block) slPlayer.core.block = {}
slPlayer.core.block.Block = function(fileUrl) { if( fileUrl === $_ ) return; {
	this._fileUrl = fileUrl;
	this._state = slPlayer.core.block.BlockStateValue.closed;
	this._blockData = { className : null, descriptorUID : null, jsSkinURL : null, as3SkinURL : null, phpSkinURL : null, properties : null, metaData : null, styles : null};
	this._children = new Array();
}}
slPlayer.core.block.Block.__name__ = ["slPlayer","core","block","Block"];
slPlayer.core.block.Block.prototype._blockData = null;
slPlayer.core.block.Block.prototype.blockData = null;
slPlayer.core.block.Block.prototype._domElement = null;
slPlayer.core.block.Block.prototype.domElement = null;
slPlayer.core.block.Block.prototype._classInstance = null;
slPlayer.core.block.Block.prototype.classInstance = null;
slPlayer.core.block.Block.prototype._styleManager = null;
slPlayer.core.block.Block.prototype.styleManager = null;
slPlayer.core.block.Block.prototype._fileUrl = null;
slPlayer.core.block.Block.prototype.fileUrl = null;
slPlayer.core.block.Block.prototype._state = null;
slPlayer.core.block.Block.prototype.state = null;
slPlayer.core.block.Block.prototype._children = null;
slPlayer.core.block.Block.prototype.children = null;
slPlayer.core.block.Block.prototype._parent = null;
slPlayer.core.block.Block.prototype.parent = null;
slPlayer.core.block.Block.prototype._isTransversal = null;
slPlayer.core.block.Block.prototype.isTransversal = null;
slPlayer.core.block.Block.prototype._isAutoOpen = null;
slPlayer.core.block.Block.prototype.isAutoOpen = null;
slPlayer.core.block.Block.prototype._openChildrenIndex = null;
slPlayer.core.block.Block.prototype._openBlockSuccessCallback = null;
slPlayer.core.block.Block.prototype._openBlockErrorCallback = null;
slPlayer.core.block.Block.prototype.open = function(successCallback,errorCallback) {
	this._openBlockSuccessCallback = successCallback;
	this._openBlockErrorCallback = errorCallback;
	this._state = slPlayer.core.block.BlockStateValue.loading;
	var blockBuilder = new slPlayer.core.block.BlockBuilder(this);
	this.doOpen(blockBuilder);
}
slPlayer.core.block.Block.prototype.close = function() {
	if(this._domElement != null) {
		this._parent.removeFromDisplayList(this._domElement);
	}
	this._classInstance = null;
	{
		var _g1 = 0, _g = this._children.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._children[i].close();
		}
	}
	this._state = slPlayer.core.block.BlockStateValue.closed;
}
slPlayer.core.block.Block.prototype.addChild = function(block) {
	this._children.push(block);
	block.setParent(this);
}
slPlayer.core.block.Block.prototype.removeChild = function(block) {
	this._children.remove(block);
	block.setParent(null);
}
slPlayer.core.block.Block.prototype.addToDisplayList = function(blockDOMElement) {
	if(this._domElement != null && Std["is"](this._domElement,cocktail.domElement.js.ContainerDOMElement)) {
		haxe.Log.trace("add child to display list",{ fileName : "Block.hx", lineNumber : 276, className : "slPlayer.core.block.Block", methodName : "addToDisplayList"});
		((function($this) {
			var $r;
			var $t = $this._domElement;
			if(Std["is"]($t,cocktail.domElement.js.ContainerDOMElement)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).addChild(blockDOMElement);
	}
	else {
		if(this._parent != null) {
			this._parent.addToDisplayList(blockDOMElement);
		}
		else {
			throw "SLPlayer Error: there is no parent and no dom element to which I can attach the given child dom element";
		}
	}
}
slPlayer.core.block.Block.prototype.removeFromDisplayList = function(blockDOMElement) {
	if(this._domElement != null && Std["is"](this._domElement,cocktail.domElement.js.ContainerDOMElement)) {
		((function($this) {
			var $r;
			var $t = $this._domElement;
			if(Std["is"]($t,cocktail.domElement.js.ContainerDOMElement)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).removeChild(blockDOMElement);
	}
	else {
		if(this._parent != null) {
			this._parent.removeFromDisplayList(blockDOMElement);
		}
		else {
			throw "SLPlayer Error: there is no parent and no dom element from which I can remove the given child dom element";
		}
	}
}
slPlayer.core.block.Block.prototype.doOpen = function(blockBuilder) {
	if(this._blockData.properties == null) {
		blockBuilder.loadBlockData($closure(this,"onBlockDataLoaded"),$closure(this,"onBlockDataLoadError"));
	}
	else if(this._domElement == null && this.getSkinUrl() != null) {
		blockBuilder.loadDOMElement(this.getSkinUrl(),$closure(this,"onDOMElementLoaded"),$closure(this,"onDOMElementLoadError"));
	}
	else if(this._classInstance == null && this._blockData.className != null) {
		blockBuilder.createClassInstance();
		this.doOpen(blockBuilder);
	}
	else if(this._styleManager == null && this._blockData.styles != null) {
		blockBuilder.createStyleManager();
		this.doOpen(blockBuilder);
	}
	else {
		blockBuilder.setBlockAttributes();
		blockBuilder.setBlockStyles();
		if(this._parent != null) {
			if(this._domElement != null) {
				this._parent.addToDisplayList(this._domElement);
			}
		}
		this._openChildrenIndex = 0;
		this.openChildren();
	}
}
slPlayer.core.block.Block.prototype.openChildren = function() {
	if(this._children.length > 0) {
		if(this._children[this._openChildrenIndex].getIsAutoOpen() == true) {
			this._children[this._openChildrenIndex].open($closure(this,"onChildOpened"),$closure(this,"onChildOpenError"));
		}
		else {
			this.onChildOpened(this._children[this._openChildrenIndex]);
		}
	}
	else {
		this.onAllChildOpened();
	}
}
slPlayer.core.block.Block.prototype.onChildOpened = function(openedChild) {
	this._openChildrenIndex++;
	if(this._openChildrenIndex < this._children.length) {
		this.openChildren();
	}
	else {
		this.onAllChildOpened();
	}
}
slPlayer.core.block.Block.prototype.onAllChildOpened = function() {
	this._state = slPlayer.core.block.BlockStateValue.opened;
	this._openBlockSuccessCallback(this);
}
slPlayer.core.block.Block.prototype.onBlockDataLoaded = function(blockBuilder) {
	this.doOpen(blockBuilder);
}
slPlayer.core.block.Block.prototype.onDOMElementLoaded = function(blockBuilder) {
	this.doOpen(blockBuilder);
}
slPlayer.core.block.Block.prototype.onBlockDataLoadError = function(errorMessage) {
	this._openBlockErrorCallback(errorMessage);
}
slPlayer.core.block.Block.prototype.onDOMElementLoadError = function(errorMessage) {
	this._openBlockErrorCallback(errorMessage);
}
slPlayer.core.block.Block.prototype.onChildOpenError = function(errorMessage) {
	this._openBlockErrorCallback(errorMessage);
}
slPlayer.core.block.Block.prototype.getSkinUrl = function() {
	var skinUrl = "";
	var $e = slPlayer.core.config.Config.getConfigData().runtime;
	switch( $e[1] ) {
	case 1:
	{
		skinUrl = this._blockData.jsSkinURL;
	}break;
	case 0:
	{
		skinUrl = this._blockData.as3SkinURL;
	}break;
	case 2:
	{
		skinUrl = this._blockData.phpSkinURL;
	}break;
	}
	return skinUrl;
}
slPlayer.core.block.Block.prototype.getFileUrl = function() {
	return this._fileUrl;
}
slPlayer.core.block.Block.prototype.setFileUrl = function(value) {
	this._fileUrl = value;
	return this._fileUrl;
}
slPlayer.core.block.Block.prototype.getChildren = function() {
	return this._children;
}
slPlayer.core.block.Block.prototype.getParent = function() {
	return this._parent;
}
slPlayer.core.block.Block.prototype.getState = function() {
	return this._state;
}
slPlayer.core.block.Block.prototype.setParent = function(value) {
	this._parent = value;
	return this._parent;
}
slPlayer.core.block.Block.prototype.setIsAutoOpen = function(value) {
	this._isAutoOpen = value;
	return this._isAutoOpen;
}
slPlayer.core.block.Block.prototype.getIsAutoOpen = function() {
	return this._isAutoOpen;
}
slPlayer.core.block.Block.prototype.setIsTransversal = function(value) {
	this._isTransversal = value;
	return this._isTransversal;
}
slPlayer.core.block.Block.prototype.getIsTransversal = function() {
	return this._isTransversal;
}
slPlayer.core.block.Block.prototype.setBlockData = function(value) {
	this._blockData = value;
	return this._blockData;
}
slPlayer.core.block.Block.prototype.getBlockData = function() {
	return this._blockData;
}
slPlayer.core.block.Block.prototype.setDOMElement = function(value) {
	this._domElement = value;
	return this._domElement;
}
slPlayer.core.block.Block.prototype.getDOMElement = function() {
	return this._domElement;
}
slPlayer.core.block.Block.prototype.setClassInstance = function(value) {
	this._classInstance = value;
	return this._classInstance;
}
slPlayer.core.block.Block.prototype.getClassInstance = function() {
	return this._classInstance;
}
slPlayer.core.block.Block.prototype.setStyleManager = function(value) {
	this._styleManager = value;
	return value;
}
slPlayer.core.block.Block.prototype.getStyleManager = function() {
	return this._styleManager;
}
slPlayer.core.block.Block.prototype.__class__ = slPlayer.core.block.Block;
if(!cocktail.domElement) cocktail.domElement = {}
if(!cocktail.domElement["abstract"]) cocktail.domElement["abstract"] = {}
cocktail.domElement.abstract.AbstractDOMElement = function(nativeElement) { if( nativeElement === $_ ) return; {
	if(nativeElement != null) {
		this.setNativeElement(nativeElement);
	}
}}
cocktail.domElement.abstract.AbstractDOMElement.__name__ = ["cocktail","domElement","abstract","AbstractDOMElement"];
cocktail.domElement.abstract.AbstractDOMElement.prototype._mouse = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.onMouseDown = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.onMouseUp = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.onMouseOver = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.onMouseOut = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.onMouseMove = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.onMouseDoubleClick = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype._keyboard = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.onKeyDown = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.onKeyUp = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype._nativeElement = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.nativeElement = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype._parent = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.parent = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype._x = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.x = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.globalX = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype._y = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.y = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.globalY = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype._width = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.width = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype._height = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.height = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.offsetWidth = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.offsetHeight = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype._style = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.style = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype._registrationPoint = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.registrationPoint = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype._matrix = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.matrix = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.scaleX = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.scaleY = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.translationX = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.translationY = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.rotation = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.alpha = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.isVisible = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.zIndex = null;
cocktail.domElement.abstract.AbstractDOMElement.prototype.init = function() {
	this._matrix = new cocktail.geom.Matrix();
	this._keyboard = new cocktail.keyboard.js.Keyboard();
	this._mouse = new cocktail.mouse.js.Mouse(this._nativeElement);
	this._registrationPoint = cocktail.geom.RegistrationPointValue.constant(cocktail.geom.RegistrationPointXValue.left,cocktail.geom.RegistrationPointYValue.top);
	this._x = 0;
	this._y = 0;
	this.initStyle();
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.initStyle = function() {
	null;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getParent = function() {
	return this._parent;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setParent = function(domElement) {
	this._parent = domElement;
	return this._parent;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setNativeElement = function(value) {
	this._nativeElement = value;
	this.init();
	return value;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getNativeElement = function() {
	return this._nativeElement;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setIsVisible = function(value) {
	return value;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getIsVisible = function() {
	return false;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setAlpha = function(value) {
	return value;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getAlpha = function() {
	return 0;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setMatrix = function(matrix) {
	this._matrix = matrix;
	return this._matrix;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getMatrix = function() {
	return this._matrix;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.resetTransformations = function() {
	this._matrix.identity();
	this.setMatrix(this._matrix);
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getRegistrationPointPoint = function(registrationPoint) {
	var registrationPointPoint = { x : 0.0, y : 0.0};
	var $e = registrationPoint;
	switch( $e[1] ) {
	case 1:
	var point = $e[2];
	{
		registrationPointPoint = point;
	}break;
	case 0:
	var registrationPointY = $e[3], registrationPointX = $e[2];
	{
		var $e = registrationPointX;
		switch( $e[1] ) {
		case 0:
		{
			registrationPointPoint.x = 0;
		}break;
		case 1:
		{
			registrationPointPoint.x = this.getWidth() / 2;
		}break;
		case 2:
		{
			registrationPointPoint.x = this.getWidth();
		}break;
		}
		var $e = registrationPointY;
		switch( $e[1] ) {
		case 0:
		{
			registrationPointPoint.y = 0;
		}break;
		case 1:
		{
			registrationPointPoint.y = this.getHeight() / 2;
		}break;
		case 2:
		{
			registrationPointPoint.y = this.getHeight();
		}break;
		}
	}break;
	}
	return registrationPointPoint;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.translate = function(x,y) {
	this._matrix.translate(x,y);
	this.setMatrix(this._matrix);
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.rotate = function(angle,registrationPoint) {
	if(registrationPoint == null) {
		registrationPoint = this.getRegistrationPoint();
	}
	this._matrix.rotate(angle,this.getRegistrationPointPoint(registrationPoint));
	this.setMatrix(this._matrix);
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.scale = function(scaleX,scaleY,registrationPoint) {
	if(registrationPoint == null) {
		registrationPoint = this.getRegistrationPoint();
	}
	this._matrix.scale(scaleX,scaleY,this.getRegistrationPointPoint(registrationPoint));
	this.setMatrix(this._matrix);
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.skew = function(skewX,skewY,registrationPoint) {
	if(registrationPoint == null) {
		registrationPoint = this.getRegistrationPoint();
	}
	this._matrix.skew(skewX,skewY,this.getRegistrationPointPoint(registrationPoint));
	this.setMatrix(this._matrix);
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setTranslationX = function(translationX) {
	this._matrix.setTranslationX(translationX);
	this.setMatrix(this._matrix);
	return translationX;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getTranslationX = function() {
	return this._matrix.getTranslationX();
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setTranslationY = function(translationY) {
	this._matrix.setTranslationY(translationY);
	this.setMatrix(this._matrix);
	return translationY;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getTranslationY = function() {
	return this._matrix.getTranslationY();
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setScaleX = function(scaleX) {
	this._matrix.setScaleX(scaleX,this.getRegistrationPointPoint(this.getRegistrationPoint()));
	this.setMatrix(this._matrix);
	return scaleX;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getScaleX = function() {
	return this._matrix.getScaleX();
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setScaleY = function(scaleY) {
	if(this.getRegistrationPoint() == null) {
		this.setRegistrationPoint(cocktail.geom.RegistrationPointValue.constant(cocktail.geom.RegistrationPointXValue.left,cocktail.geom.RegistrationPointYValue.top));
	}
	this._matrix.setScaleY(scaleY,this.getRegistrationPointPoint(this.getRegistrationPoint()));
	this.setMatrix(this._matrix);
	return scaleY;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getScaleY = function() {
	return this._matrix.getScaleY();
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setRotation = function(angle) {
	if(this.getRegistrationPoint() == null) {
		this.setRegistrationPoint(cocktail.geom.RegistrationPointValue.constant(cocktail.geom.RegistrationPointXValue.left,cocktail.geom.RegistrationPointYValue.top));
	}
	this._matrix.setRotation(angle,this.getRegistrationPointPoint(this.getRegistrationPoint()));
	this.setMatrix(this._matrix);
	return angle;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getRotation = function() {
	return this._matrix.getRotation();
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setRegistrationPoint = function(registrationPoint) {
	this._registrationPoint = registrationPoint;
	return this._registrationPoint;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getRegistrationPoint = function() {
	return this._registrationPoint;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setOnMouseDown = function(value) {
	this._mouse.onMouseDown = value;
	return value;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getOnMouseDown = function() {
	return this._mouse.onMouseDown;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setOnMouseUp = function(value) {
	this._mouse.onMouseUp = value;
	return value;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getOnMouseUp = function() {
	return this._mouse.onMouseUp;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setOnMouseOver = function(value) {
	this._mouse.onMouseOver = value;
	return value;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getOnMouseOver = function() {
	return this._mouse.onMouseOver;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setOnMouseOut = function(value) {
	this._mouse.onMouseOut = value;
	return value;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getOnMouseOut = function() {
	return this._mouse.onMouseOut;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setOnMouseMove = function(value) {
	this._mouse.onMouseMove = value;
	return value;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getOnMouseMove = function() {
	return this._mouse.onMouseMove;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setOnMouseDoubleClick = function(value) {
	this._mouse.onMouseDoubleClick = value;
	return value;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getOnMouseDoubleClick = function() {
	return this._mouse.onMouseDoubleClick;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setOnKeyDown = function(value) {
	this._keyboard.onKeyDown = value;
	return value;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getOnKeyDown = function() {
	return this._keyboard.onKeyDown;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setOnKeyUp = function(value) {
	this._keyboard.onKeyUp = value;
	return value;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getOnKeyUp = function() {
	return this._keyboard.onKeyUp;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setField = function(propertyName,propertyValue) {
	this._nativeElement[propertyName] = propertyValue;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getField = function(propertyName) {
	return Reflect.field(this._nativeElement,propertyName);
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setX = function(value) {
	this._x = value;
	return this._x;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getX = function() {
	return this._x;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setY = function(value) {
	this._y = value;
	return this._y;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getY = function() {
	return this._y;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setWidth = function(value) {
	this._width = value;
	return this._width;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getWidth = function() {
	return this._width;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setHeight = function(value) {
	this._height = value;
	return this._height;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getHeight = function() {
	return this._height;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getOffsetWidth = function() {
	var computedStyle = this._style.getComputedStyle();
	return computedStyle.width + computedStyle.marginLeft + computedStyle.marginRight + computedStyle.paddingLeft + computedStyle.paddingRight;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getOffsetHeight = function() {
	var computedStyle = this._style.getComputedStyle();
	return computedStyle.height + computedStyle.marginTop + computedStyle.marginBottom + computedStyle.paddingTop + computedStyle.paddingBottom;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setGlobalX = function(value) {
	var localX = value;
	if(this._parent != null) {
		var parentGlobalX = this._parent.getGlobalX();
		localX -= parentGlobalX;
	}
	else {
		localX = 0;
	}
	this.setX(localX);
	return this._x;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getGlobalX = function() {
	var newGlobalX = this.getX();
	if(this._parent != null) {
		var parentDOMElement = this._parent;
		while(parentDOMElement != null) {
			newGlobalX += parentDOMElement.getX();
			parentDOMElement = parentDOMElement.getParent();
		}
	}
	else {
		newGlobalX = 0;
	}
	return newGlobalX;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setGlobalY = function(value) {
	var localY = value;
	if(this._parent != null) {
		var parentGlobalY = this._parent.getGlobalY();
		localY -= parentGlobalY;
	}
	else {
		localY = 0;
	}
	this.setY(localY);
	return this._y;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getGlobalY = function() {
	var newGlobalY = this.getY();
	if(this._parent != null) {
		var parentDOMElement = this._parent;
		while(parentDOMElement != null) {
			newGlobalY += parentDOMElement.getY();
			parentDOMElement = parentDOMElement.getParent();
		}
	}
	else {
		newGlobalY = 0;
	}
	return newGlobalY;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.setZIndex = function(value) {
	return value;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getZIndex = function() {
	return 0;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.getStyle = function() {
	return this._style;
}
cocktail.domElement.abstract.AbstractDOMElement.prototype.__class__ = cocktail.domElement.abstract.AbstractDOMElement;
if(!cocktail.domElement.js) cocktail.domElement.js = {}
cocktail.domElement.js.DOMElement = function(nativeElement) { if( nativeElement === $_ ) return; {
	cocktail.domElement.abstract.AbstractDOMElement.call(this,nativeElement);
}}
cocktail.domElement.js.DOMElement.__name__ = ["cocktail","domElement","js","DOMElement"];
cocktail.domElement.js.DOMElement.__super__ = cocktail.domElement.abstract.AbstractDOMElement;
for(var k in cocktail.domElement.abstract.AbstractDOMElement.prototype ) cocktail.domElement.js.DOMElement.prototype[k] = cocktail.domElement.abstract.AbstractDOMElement.prototype[k];
cocktail.domElement.js.DOMElement.prototype.init = function() {
	cocktail.domElement.abstract.AbstractDOMElement.prototype.init.call(this);
	this._nativeElement.style.position = "absolute";
	if(this._nativeElement.style.width != null) {
		this._width = Std.parseInt(this._nativeElement.style.width);
	}
	else {
		this._width = this._nativeElement.offsetWidth;
	}
	if(this._nativeElement.style.height != null) {
		this._height = Std.parseInt(this._nativeElement.style.height);
	}
	else {
		this._height = this._nativeElement.offsetHeight;
	}
	this._x = Std.parseInt(this._nativeElement.style.left);
	this._y = Std.parseInt(this._nativeElement.style.top);
}
cocktail.domElement.js.DOMElement.prototype.setIsVisible = function(value) {
	if(value == true) {
		this._nativeElement.style.visibility = "visible";
	}
	else {
		this._nativeElement.style.visibility = "hidden";
	}
	return value;
}
cocktail.domElement.js.DOMElement.prototype.getIsVisible = function() {
	if(this._nativeElement.style.visibility == "visible") {
		return true;
	}
	else {
		return false;
	}
}
cocktail.domElement.js.DOMElement.prototype.setAlpha = function(value) {
	cocktail.domElement.abstract.AbstractDOMElement.prototype.setAlpha.call(this,value);
	this._nativeElement.style.opacity = value;
	return value;
}
cocktail.domElement.js.DOMElement.prototype.getAlpha = function() {
	return Std.parseFloat(this._nativeElement.style.opacity);
}
cocktail.domElement.js.DOMElement.prototype.setMatrix = function(matrix) {
	cocktail.domElement.abstract.AbstractDOMElement.prototype.setMatrix.call(this,matrix);
	var matrixData = matrix.getMatrixData();
	var a = matrixData.a;
	a = a.toFixed(2);
	var b = matrixData.b;
	b = b.toFixed(2);
	var c = matrixData.c;
	c = c.toFixed(2);
	var d = matrixData.d;
	d = d.toFixed(2);
	var e = matrixData.e;
	e = e.toFixed(2);
	var f = matrixData.f;
	f = f.toFixed(2);
	var cssMatrixProperty = "matrix(" + a + "," + b + "," + c + "," + d + "," + e + "," + f + ")";
	if(this._nativeElement.style.transform != null) {
		this._nativeElement.style.transform = cssMatrixProperty;
		this._nativeElement.style.transformOrigin = "0 0";
	}
	if(this._nativeElement.style.MozTransform != null) {
		this._nativeElement.style.MozTransform = cssMatrixProperty;
		this._nativeElement.style.MozTransformOrigin = "0 0";
	}
	else if(this._nativeElement.style.WebkitTransform != null) {
		this._nativeElement.style.WebkitTransform = cssMatrixProperty;
		this._nativeElement.style.WebkitTransformOrigin = "0 0";
	}
	else if(this._nativeElement.style.OTransform != null) {
		this._nativeElement.style.OTransform = cssMatrixProperty;
		this._nativeElement.style.OTransform = "0 0";
	}
	return this._matrix;
}
cocktail.domElement.js.DOMElement.prototype.setX = function(value) {
	cocktail.domElement.abstract.AbstractDOMElement.prototype.setX.call(this,value);
	this._nativeElement.style.left = value + "px";
	return this._x;
}
cocktail.domElement.js.DOMElement.prototype.setY = function(value) {
	cocktail.domElement.abstract.AbstractDOMElement.prototype.setY.call(this,value);
	this._nativeElement.style.top = value + "px";
	return this._y;
}
cocktail.domElement.js.DOMElement.prototype.setWidth = function(value) {
	cocktail.domElement.abstract.AbstractDOMElement.prototype.setWidth.call(this,value);
	this._nativeElement.style.width = value + "px";
	return this._width;
}
cocktail.domElement.js.DOMElement.prototype.setHeight = function(value) {
	cocktail.domElement.abstract.AbstractDOMElement.prototype.setHeight.call(this,value);
	this._nativeElement.style.height = value + "px";
	return this._height;
}
cocktail.domElement.js.DOMElement.prototype.setZIndex = function(value) {
	if(value > this._parent.getChildren().length - 1) {
		value = this._parent.getChildren().length - 1;
	}
	var nativeParent = this._nativeElement.parentNode;
	var numChildren = nativeParent.childNodes.length;
	var oldIndex = this.getZIndex();
	var newIndex = value;
	{
		var _g = 0;
		while(_g < numChildren) {
			var i = _g++;
			var currentChildren = nativeParent.childNodes[i];
			if(currentChildren.style != null) {
				var currentChildrenZIndex = currentChildren.style.zIndex;
				if(currentChildrenZIndex > oldIndex) {
					currentChildrenZIndex--;
					currentChildren.style.zIndex = currentChildrenZIndex;
				}
			}
		}
	}
	{
		var _g = 0;
		while(_g < numChildren) {
			var i = _g++;
			var currentChildren = nativeParent.childNodes[i];
			if(currentChildren.style != null) {
				var currentChildrenZIndex = currentChildren.style.zIndex;
				if(currentChildrenZIndex >= newIndex) {
					currentChildrenZIndex++;
					currentChildren.style.zIndex = currentChildrenZIndex;
				}
			}
		}
	}
	this._nativeElement.style.zIndex = value;
	return value;
}
cocktail.domElement.js.DOMElement.prototype.getZIndex = function() {
	return this._nativeElement.style.zIndex;
}
cocktail.domElement.js.DOMElement.prototype.__class__ = cocktail.domElement.js.DOMElement;
cocktail.domElement.abstract.AbstractTextLineDOMElement = function(nativeElement,style,isLastLineOfTextBlock) { if( nativeElement === $_ ) return; {
	cocktail.domElement.js.DOMElement.call(this,nativeElement);
	this._isLastLineOfTextBlock = isLastLineOfTextBlock;
	this._style = style;
}}
cocktail.domElement.abstract.AbstractTextLineDOMElement.__name__ = ["cocktail","domElement","abstract","AbstractTextLineDOMElement"];
cocktail.domElement.abstract.AbstractTextLineDOMElement.__super__ = cocktail.domElement.js.DOMElement;
for(var k in cocktail.domElement.js.DOMElement.prototype ) cocktail.domElement.abstract.AbstractTextLineDOMElement.prototype[k] = cocktail.domElement.js.DOMElement.prototype[k];
cocktail.domElement.abstract.AbstractTextLineDOMElement.prototype.actualWidth = null;
cocktail.domElement.abstract.AbstractTextLineDOMElement.prototype._isLastLineOfTextBlock = null;
cocktail.domElement.abstract.AbstractTextLineDOMElement.prototype.isLastLineOfTextBlock = null;
cocktail.domElement.abstract.AbstractTextLineDOMElement.prototype.initStyle = function() {
	null;
}
cocktail.domElement.abstract.AbstractTextLineDOMElement.prototype.getIsLastLineOfTextBlock = function() {
	return this.isLastLineOfTextBlock;
}
cocktail.domElement.abstract.AbstractTextLineDOMElement.prototype.getActualWidth = function() {
	return 0;
}
cocktail.domElement.abstract.AbstractTextLineDOMElement.prototype.__class__ = cocktail.domElement.abstract.AbstractTextLineDOMElement;
cocktail.domElement.js.TextLineDOMElement = function(nativeElement,style,isLastLineOfTextBlock) { if( nativeElement === $_ ) return; {
	cocktail.domElement.abstract.AbstractTextLineDOMElement.call(this,nativeElement,style,isLastLineOfTextBlock);
}}
cocktail.domElement.js.TextLineDOMElement.__name__ = ["cocktail","domElement","js","TextLineDOMElement"];
cocktail.domElement.js.TextLineDOMElement.__super__ = cocktail.domElement.abstract.AbstractTextLineDOMElement;
for(var k in cocktail.domElement.abstract.AbstractTextLineDOMElement.prototype ) cocktail.domElement.js.TextLineDOMElement.prototype[k] = cocktail.domElement.abstract.AbstractTextLineDOMElement.prototype[k];
cocktail.domElement.js.TextLineDOMElement.prototype.__class__ = cocktail.domElement.js.TextLineDOMElement;
cocktail.domElement.abstract.AbstractEmbeddedDOMElement = function(nativeElement) { if( nativeElement === $_ ) return; {
	cocktail.domElement.js.DOMElement.call(this,nativeElement);
	this.initDimensions();
	this.initInstrinsicDimensions();
}}
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.__name__ = ["cocktail","domElement","abstract","AbstractEmbeddedDOMElement"];
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.__super__ = cocktail.domElement.js.DOMElement;
for(var k in cocktail.domElement.js.DOMElement.prototype ) cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype[k] = cocktail.domElement.js.DOMElement.prototype[k];
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype._intrinsicWidth = null;
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.intrinsicWidth = null;
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype._intrinsicHeight = null;
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.intrinsicHeight = null;
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype._intrinsicRatio = null;
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.intrinsicRatio = null;
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.initStyle = function() {
	this._style = new cocktail.style.js.EmbeddedStyle(this);
}
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.initDimensions = function() {
	null;
}
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.initInstrinsicDimensions = function() {
	null;
}
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.setIntrinsicWidth = function(value) {
	this._intrinsicWidth = value;
	return value;
}
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.getIntrinsicWidth = function() {
	return this._intrinsicWidth;
}
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.setIntrinsicHeight = function(value) {
	this._intrinsicHeight = value;
	return value;
}
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.getIntrinsicHeight = function() {
	return this._intrinsicHeight;
}
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.getIntrinsicRatio = function() {
	return this._intrinsicRatio;
}
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.setIntrinsicRatio = function(value) {
	this._intrinsicRatio = value;
	return value;
}
cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype.__class__ = cocktail.domElement.abstract.AbstractEmbeddedDOMElement;
cocktail.domElement.js.EmbeddedDOMElement = function(nativeElement) { if( nativeElement === $_ ) return; {
	cocktail.domElement.abstract.AbstractEmbeddedDOMElement.call(this,nativeElement);
}}
cocktail.domElement.js.EmbeddedDOMElement.__name__ = ["cocktail","domElement","js","EmbeddedDOMElement"];
cocktail.domElement.js.EmbeddedDOMElement.__super__ = cocktail.domElement.abstract.AbstractEmbeddedDOMElement;
for(var k in cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype ) cocktail.domElement.js.EmbeddedDOMElement.prototype[k] = cocktail.domElement.abstract.AbstractEmbeddedDOMElement.prototype[k];
cocktail.domElement.js.EmbeddedDOMElement.prototype.__class__ = cocktail.domElement.js.EmbeddedDOMElement;
cocktail.domElement.abstract.AbstractImageDOMElement = function(nativeElement) { if( nativeElement === $_ ) return; {
	cocktail.domElement.js.EmbeddedDOMElement.call(this,nativeElement);
}}
cocktail.domElement.abstract.AbstractImageDOMElement.__name__ = ["cocktail","domElement","abstract","AbstractImageDOMElement"];
cocktail.domElement.abstract.AbstractImageDOMElement.__super__ = cocktail.domElement.js.EmbeddedDOMElement;
for(var k in cocktail.domElement.js.EmbeddedDOMElement.prototype ) cocktail.domElement.abstract.AbstractImageDOMElement.prototype[k] = cocktail.domElement.js.EmbeddedDOMElement.prototype[k];
cocktail.domElement.abstract.AbstractImageDOMElement.prototype._src = null;
cocktail.domElement.abstract.AbstractImageDOMElement.prototype.src = null;
cocktail.domElement.abstract.AbstractImageDOMElement.prototype._smooth = null;
cocktail.domElement.abstract.AbstractImageDOMElement.prototype.smooth = null;
cocktail.domElement.abstract.AbstractImageDOMElement.prototype.init = function() {
	cocktail.domElement.js.EmbeddedDOMElement.prototype.init.call(this);
	this.setSmooth(true);
}
cocktail.domElement.abstract.AbstractImageDOMElement.prototype.initDimensions = function() {
	this._height = 0;
	this._width = 0;
}
cocktail.domElement.abstract.AbstractImageDOMElement.prototype.initInstrinsicDimensions = function() {
	this._intrinsicHeight = 0;
	this._intrinsicWidth = 0;
	this._intrinsicRatio = 0;
}
cocktail.domElement.abstract.AbstractImageDOMElement.prototype.getSrc = function() {
	return this._src;
}
cocktail.domElement.abstract.AbstractImageDOMElement.prototype.setSrc = function(value) {
	this._src = value;
	return value;
}
cocktail.domElement.abstract.AbstractImageDOMElement.prototype.setSmooth = function(value) {
	this._smooth = value;
	return value;
}
cocktail.domElement.abstract.AbstractImageDOMElement.prototype.getSmooth = function() {
	return this._smooth;
}
cocktail.domElement.abstract.AbstractImageDOMElement.prototype.__class__ = cocktail.domElement.abstract.AbstractImageDOMElement;
cocktail.domElement.js.ImageDOMElement = function(nativeElement) { if( nativeElement === $_ ) return; {
	cocktail.domElement.abstract.AbstractImageDOMElement.call(this,nativeElement);
}}
cocktail.domElement.js.ImageDOMElement.__name__ = ["cocktail","domElement","js","ImageDOMElement"];
cocktail.domElement.js.ImageDOMElement.__super__ = cocktail.domElement.abstract.AbstractImageDOMElement;
for(var k in cocktail.domElement.abstract.AbstractImageDOMElement.prototype ) cocktail.domElement.js.ImageDOMElement.prototype[k] = cocktail.domElement.abstract.AbstractImageDOMElement.prototype[k];
cocktail.domElement.js.ImageDOMElement.prototype.setSmooth = function(value) {
	cocktail.domElement.abstract.AbstractImageDOMElement.prototype.setSmooth.call(this,value);
	if(value == true) {
		this._nativeElement.style.imageRendering = "optimizeQuality";
	}
	else {
		this._nativeElement.style.imageRendering = "optimizeSpeed";
	}
	return value;
}
cocktail.domElement.js.ImageDOMElement.prototype.__class__ = cocktail.domElement.js.ImageDOMElement;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) return s.substr(r,l - r);
	else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) {
		r++;
	}
	if(r > 0) {
		return s.substr(0,l - r);
	}
	else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype.__class__ = StringTools;
utest.ui.common.ReportTools = function() { }
utest.ui.common.ReportTools.__name__ = ["utest","ui","common","ReportTools"];
utest.ui.common.ReportTools.hasHeader = function(report,stats) {
	var $e = report.displayHeader;
	switch( $e[1] ) {
	case 1:
	{
		return false;
	}break;
	case 2:
	{
		if(!stats.isOk) return true;
		var $e = report.displaySuccessResults;
		switch( $e[1] ) {
		case 1:
		{
			return false;
		}break;
		case 0:
		case 2:
		{
			return true;
		}break;
		}
	}break;
	case 0:
	{
		return true;
	}break;
	}
}
utest.ui.common.ReportTools.skipResult = function(report,stats,isOk) {
	if(!stats.isOk) return false;
	return (function($this) {
		var $r;
		var $e = report.displaySuccessResults;
		switch( $e[1] ) {
		case 1:
		{
			$r = true;
		}break;
		case 0:
		{
			$r = false;
		}break;
		case 2:
		{
			$r = !isOk;
		}break;
		}
		return $r;
	}(this));
}
utest.ui.common.ReportTools.hasOutput = function(report,stats) {
	if(!stats.isOk) return true;
	return utest.ui.common.ReportTools.hasHeader(report,stats);
}
utest.ui.common.ReportTools.prototype.__class__ = utest.ui.common.ReportTools;
if(typeof haxe=='undefined') haxe = {}
if(!haxe.io) haxe.io = {}
haxe.io.Bytes = function(length,b) { if( length === $_ ) return; {
	this.length = length;
	this.b = b;
}}
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	{
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			a.push(0);
		}
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	{
		var _g1 = 0, _g = s.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = s.cca(i);
			if(c <= 127) a.push(c);
			else if(c <= 2047) {
				a.push(192 | c >> 6);
				a.push(128 | c & 63);
			}
			else if(c <= 65535) {
				a.push(224 | c >> 12);
				a.push(128 | c >> 6 & 63);
				a.push(128 | c & 63);
			}
			else {
				a.push(240 | c >> 18);
				a.push(128 | c >> 12 & 63);
				a.push(128 | c >> 6 & 63);
				a.push(128 | c & 63);
			}
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
}
haxe.io.Bytes.prototype.length = null;
haxe.io.Bytes.prototype.b = null;
haxe.io.Bytes.prototype.get = function(pos) {
	return this.b[pos];
}
haxe.io.Bytes.prototype.set = function(pos,v) {
	this.b[pos] = v & 255;
}
haxe.io.Bytes.prototype.blit = function(pos,src,srcpos,len) {
	if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	if(b1 == b2 && pos > srcpos) {
		var i = len;
		while(i > 0) {
			i--;
			b1[i + pos] = b2[i + srcpos];
		}
		return;
	}
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b1[i + pos] = b2[i + srcpos];
		}
	}
}
haxe.io.Bytes.prototype.sub = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	return new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
}
haxe.io.Bytes.prototype.compare = function(other) {
	var b1 = this.b;
	var b2 = other.b;
	var len = this.length < other.length?this.length:other.length;
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(b1[i] != b2[i]) return b1[i] - b2[i];
		}
	}
	return this.length - other.length;
}
haxe.io.Bytes.prototype.readString = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	var s = "";
	var b = this.b;
	var fcc = $closure(String,"fromCharCode");
	var i = pos;
	var max = pos + len;
	while(i < max) {
		var c = b[i++];
		if(c < 128) {
			if(c == 0) break;
			s += fcc(c);
		}
		else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127);
		else if(c < 240) {
			var c2 = b[i++];
			s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
		}
		else {
			var c2 = b[i++];
			var c3 = b[i++];
			s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
		}
	}
	return s;
}
haxe.io.Bytes.prototype.toString = function() {
	return this.readString(0,this.length);
}
haxe.io.Bytes.prototype.getData = function() {
	return this.b;
}
haxe.io.Bytes.prototype.__class__ = haxe.io.Bytes;
if(!slPlayer.core.style) slPlayer.core.style = {}
slPlayer.core.style.StyleManager = function(p) { if( p === $_ ) return; {
	haxe.Timer.delay($closure(this,"initDone"),30);
}}
slPlayer.core.style.StyleManager.__name__ = ["slPlayer","core","style","StyleManager"];
slPlayer.core.style.StyleManager.prototype.top = null;
slPlayer.core.style.StyleManager.prototype.left = null;
slPlayer.core.style.StyleManager.prototype.width = null;
slPlayer.core.style.StyleManager.prototype.height = null;
slPlayer.core.style.StyleManager.prototype.initDone = function() {
	var publication = slPlayer.core.publication.Publication.getPublicationByStyleManager(this);
	var block = publication.getBlockByStyleManager(this);
	var domElement = block.getDOMElement();
	haxe.Log.trace(domElement,{ fileName : "StyleManager.hx", lineNumber : 36, className : "slPlayer.core.style.StyleManager", methodName : "initDone"});
	haxe.Log.trace(this.left,{ fileName : "StyleManager.hx", lineNumber : 37, className : "slPlayer.core.style.StyleManager", methodName : "initDone"});
	if(this.left != null) {
		domElement.setX(Std.parseInt(this.left));
	}
	if(this.top != null) {
		domElement.setY(Std.parseInt(this.top));
	}
	if(this.width != null) {
		domElement.setWidth(Std.parseInt(this.width));
	}
	if(this.height != null) {
		domElement.setHeight(Std.parseInt(this.height));
	}
}
slPlayer.core.style.StyleManager.prototype.__class__ = slPlayer.core.style.StyleManager;
utest.ui.common.IReport = function() { }
utest.ui.common.IReport.__name__ = ["utest","ui","common","IReport"];
utest.ui.common.IReport.prototype.displaySuccessResults = null;
utest.ui.common.IReport.prototype.displayHeader = null;
utest.ui.common.IReport.prototype.setHandler = null;
utest.ui.common.IReport.prototype.__class__ = utest.ui.common.IReport;
cocktail.domElement.abstract.AbstractContainerDOMElement = function(nativeElement) { if( nativeElement === $_ ) return; {
	if(nativeElement == null) {
		nativeElement = cocktail.nativeElement.NativeElementManager.createNativeElement(cocktail.nativeElement.NativeElementTypeValue.neutral);
	}
	this._children = new Array();
	this._textLineDOMElements = new Array();
	cocktail.domElement.js.DOMElement.call(this,nativeElement);
}}
cocktail.domElement.abstract.AbstractContainerDOMElement.__name__ = ["cocktail","domElement","abstract","AbstractContainerDOMElement"];
cocktail.domElement.abstract.AbstractContainerDOMElement.__super__ = cocktail.domElement.js.DOMElement;
for(var k in cocktail.domElement.js.DOMElement.prototype ) cocktail.domElement.abstract.AbstractContainerDOMElement.prototype[k] = cocktail.domElement.js.DOMElement.prototype[k];
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype._semantic = null;
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.semantic = null;
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype._children = null;
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.children = null;
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype._textLineDOMElements = null;
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.initStyle = function() {
	this._style = new cocktail.style.js.ContainerStyle(this);
}
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.addChild = function(domElement) {
	domElement.setParent(this);
	this._children.push({ children : domElement, type : cocktail.domElement.ContainerDOMElementChildrenValue.DOMElement});
}
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.removeChild = function(domElement) {
	domElement.setParent(null);
	var newChildrenArray = new Array();
	{
		var _g1 = 0, _g = this._children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._children[i].children != domElement) {
				newChildrenArray.push(this._children[i]);
			}
		}
	}
	this._children = newChildrenArray;
}
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.addText = function(text) {
	this._children.push({ children : text, type : cocktail.domElement.ContainerDOMElementChildrenValue.TextNode});
}
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.removeText = function(text) {
	var newChildrenArray = new Array();
	{
		var _g1 = 0, _g = this._children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._children[i].children != text) {
				newChildrenArray.push(this._children[i]);
			}
		}
	}
	this._children = newChildrenArray;
}
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.getChildren = function() {
	return this._children;
}
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.createTextLine = function(width,textNode) {
	var textLineDOMElement = this.doCreateTextLine(width,textNode);
	if(textLineDOMElement != null) {
		this._textLineDOMElements.push(textLineDOMElement);
		this.addChild(textLineDOMElement);
	}
	return textLineDOMElement;
}
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.resetTextLines = function() {
	{
		var _g1 = 0, _g = this._textLineDOMElements.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.removeChild(this._textLineDOMElements[i]);
		}
	}
	this._textLineDOMElements = new Array();
}
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.doCreateTextLine = function(width,textNode) {
	return null;
}
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.setSemantic = function(semantic) {
	this._semantic = semantic;
	return this._semantic;
}
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.getSemantic = function() {
	return this._semantic;
}
cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.__class__ = cocktail.domElement.abstract.AbstractContainerDOMElement;
utest.ui.Report = function() { }
utest.ui.Report.__name__ = ["utest","ui","Report"];
utest.ui.Report.create = function(runner,displaySuccessResults,headerDisplayMode) {
	var report;
	report = new utest.ui.text.HtmlReport(runner,null,true);
	if(null == displaySuccessResults) report.displaySuccessResults = utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors;
	else report.displaySuccessResults = displaySuccessResults;
	if(null == headerDisplayMode) report.displayHeader = utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults;
	else report.displayHeader = headerDisplayMode;
	return report;
}
utest.ui.Report.prototype.__class__ = utest.ui.Report;
if(!cocktail.keyboard) cocktail.keyboard = {}
if(!cocktail.keyboard["abstract"]) cocktail.keyboard["abstract"] = {}
cocktail.keyboard.abstract.AbstractKeyboard = function(p) { if( p === $_ ) return; {
	this.setNativeKeyboardListeners();
}}
cocktail.keyboard.abstract.AbstractKeyboard.__name__ = ["cocktail","keyboard","abstract","AbstractKeyboard"];
cocktail.keyboard.abstract.AbstractKeyboard.prototype.onKeyDown = null;
cocktail.keyboard.abstract.AbstractKeyboard.prototype.onKeyUp = null;
cocktail.keyboard.abstract.AbstractKeyboard.prototype.setNativeKeyboardListeners = function() {
	null;
}
cocktail.keyboard.abstract.AbstractKeyboard.prototype.unsetNativeKeyboardListeners = function() {
	null;
}
cocktail.keyboard.abstract.AbstractKeyboard.prototype.onNativeKeyDown = function(event) {
	if(this.onKeyDown != null) {
		this.onKeyDown(this.getKeyData(event));
	}
}
cocktail.keyboard.abstract.AbstractKeyboard.prototype.onNativeKeyUp = function(event) {
	if(this.onKeyUp != null) {
		this.onKeyUp(this.getKeyData(event));
	}
}
cocktail.keyboard.abstract.AbstractKeyboard.prototype.getKeyData = function(event) {
	return null;
}
cocktail.keyboard.abstract.AbstractKeyboard.prototype.getKeyValue = function(keyCode) {
	var keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.unknown;
	switch(keyCode) {
	case 65:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.a;
	}break;
	case 66:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.b;
	}break;
	case 67:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.c;
	}break;
	case 68:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.d;
	}break;
	case 69:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.e;
	}break;
	case 70:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.f;
	}break;
	case 71:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.g;
	}break;
	case 72:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.h;
	}break;
	case 73:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.i;
	}break;
	case 74:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.j;
	}break;
	case 75:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.k;
	}break;
	case 76:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.l;
	}break;
	case 77:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.m;
	}break;
	case 78:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.n;
	}break;
	case 79:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.o;
	}break;
	case 80:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.p;
	}break;
	case 81:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.q;
	}break;
	case 82:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.r;
	}break;
	case 83:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.s;
	}break;
	case 84:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.t;
	}break;
	case 85:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.u;
	}break;
	case 86:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.v;
	}break;
	case 87:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.w;
	}break;
	case 88:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.x;
	}break;
	case 89:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.y;
	}break;
	case 90:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.z;
	}break;
	case 8:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.backSpace;
	}break;
	case 20:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.capsLock;
	}break;
	case 17:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.control;
	}break;
	case 46:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue["delete"];
	}break;
	case 40:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.down;
	}break;
	case 35:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.end;
	}break;
	case 13:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.enter;
	}break;
	case 27:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.escape;
	}break;
	case 112:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F1;
	}break;
	case 121:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F10;
	}break;
	case 122:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F11;
	}break;
	case 123:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F12;
	}break;
	case 124:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F13;
	}break;
	case 125:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F14;
	}break;
	case 126:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F15;
	}break;
	case 113:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F2;
	}break;
	case 114:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F3;
	}break;
	case 115:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F4;
	}break;
	case 116:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F5;
	}break;
	case 117:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F6;
	}break;
	case 118:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F7;
	}break;
	case 119:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F8;
	}break;
	case 120:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.F9;
	}break;
	case 36:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.home;
	}break;
	case 45:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.insert;
	}break;
	case 37:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.left;
	}break;
	case 96:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpad0;
	}break;
	case 97:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpad1;
	}break;
	case 98:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpad2;
	}break;
	case 99:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpad3;
	}break;
	case 100:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpad4;
	}break;
	case 101:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpad5;
	}break;
	case 102:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpad6;
	}break;
	case 103:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpad7;
	}break;
	case 104:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpad8;
	}break;
	case 105:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpad9;
	}break;
	case 107:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpadAdd;
	}break;
	case 108:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpadEnter;
	}break;
	case 110:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpadDecimal;
	}break;
	case 111:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpadDivide;
	}break;
	case 106:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpadMultiply;
	}break;
	case 109:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.numpadSubstract;
	}break;
	case 34:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.pageDown;
	}break;
	case 33:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.pageUp;
	}break;
	case 39:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.right;
	}break;
	case 16:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.shift;
	}break;
	case 32:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.space;
	}break;
	case 9:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.tab;
	}break;
	case 38:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.up;
	}break;
	default:{
		keyboardKeyValue = cocktail.keyboard.KeyboardKeyValue.unknown;
	}break;
	}
	return keyboardKeyValue;
}
cocktail.keyboard.abstract.AbstractKeyboard.prototype.__class__ = cocktail.keyboard.abstract.AbstractKeyboard;
if(!cocktail.style.formatter) cocktail.style.formatter = {}
cocktail.style.formatter.FormattingContext = function(domElement,previousFormatingContext) { if( domElement === $_ ) return; {
	this._containingDOMElement = domElement;
	this._formatedElements = new Array();
	this._floatsManager = new cocktail.style.floats.FloatsManager();
	if(previousFormatingContext != null) {
		if(domElement.getStyle().isFloat() == false) {
			this._floatsManager.addFloats(previousFormatingContext);
		}
	}
	this._flowData = this.initFlowData(this._containingDOMElement);
}}
cocktail.style.formatter.FormattingContext.__name__ = ["cocktail","style","formatter","FormattingContext"];
cocktail.style.formatter.FormattingContext.prototype._containingDOMElement = null;
cocktail.style.formatter.FormattingContext.prototype.containingDOMElement = null;
cocktail.style.formatter.FormattingContext.prototype._formatedElements = null;
cocktail.style.formatter.FormattingContext.prototype._floatsManager = null;
cocktail.style.formatter.FormattingContext.prototype.floatsManager = null;
cocktail.style.formatter.FormattingContext.prototype._flowData = null;
cocktail.style.formatter.FormattingContext.prototype.flowData = null;
cocktail.style.formatter.FormattingContext.prototype.initFlowData = function(domElement) {
	var flowY = domElement.getStyle().getComputedStyle().paddingTop;
	var flowX;
	if(domElement.getStyle().getComputedStyle().paddingLeft > this._floatsManager.getLeftFloatOffset(flowY)) {
		flowX = domElement.getStyle().getComputedStyle().paddingLeft;
	}
	else {
		flowX = this._floatsManager.getLeftFloatOffset(flowY);
	}
	return { x : flowX, y : flowY, firstLineX : domElement.getStyle().getComputedStyle().paddingLeft, firstLineY : domElement.getStyle().getComputedStyle().paddingTop, maxLineWidth : domElement.getStyle().getComputedStyle().width, containingBlockWidth : domElement.getStyle().getComputedStyle().width, containingBlockHeight : domElement.getStyle().getComputedStyle().height, totalHeight : 0, maxLineHeight : 0};
}
cocktail.style.formatter.FormattingContext.prototype.insert = function(domElement) {
	this._formatedElements.push(domElement);
	this.place(domElement);
	this.removeFloats();
}
cocktail.style.formatter.FormattingContext.prototype.insertFloat = function(domElement) {
	var floatData = this._floatsManager.computeFloatData(domElement,this._flowData);
	this.placeFloat(domElement,floatData);
}
cocktail.style.formatter.FormattingContext.prototype.clearFloat = function(clear) {
	null;
}
cocktail.style.formatter.FormattingContext.prototype.retrieveFloats = function(formattingContext) {
	this._floatsManager.retrieveFloats(formattingContext);
}
cocktail.style.formatter.FormattingContext.prototype.getRemainingLineWidth = function() {
	return this._flowData.containingBlockWidth - this._flowData.x - this._floatsManager.getRightFloatOffset(this._flowData.y,this._flowData.containingBlockWidth);
}
cocktail.style.formatter.FormattingContext.prototype.startNewLine = function() {
	null;
}
cocktail.style.formatter.FormattingContext.prototype.place = function(domElement) {
	null;
}
cocktail.style.formatter.FormattingContext.prototype.placeFloat = function(domElement,floatData) {
	null;
}
cocktail.style.formatter.FormattingContext.prototype.removeFloats = function() {
	this._floatsManager.removeFloats(this._flowData.y);
}
cocktail.style.formatter.FormattingContext.prototype.getFloatsManager = function() {
	return this._floatsManager;
}
cocktail.style.formatter.FormattingContext.prototype.getFlowData = function() {
	return this._flowData;
}
cocktail.style.formatter.FormattingContext.prototype.getContainingDOMElement = function() {
	return this._containingDOMElement;
}
cocktail.style.formatter.FormattingContext.prototype.__class__ = cocktail.style.formatter.FormattingContext;
slPlayer.core.block.BlockBuilder = function(block) { if( block === $_ ) return; {
	this._block = block;
}}
slPlayer.core.block.BlockBuilder.__name__ = ["slPlayer","core","block","BlockBuilder"];
slPlayer.core.block.BlockBuilder.deserializeBlockData = function(block,serializedBlockData) {
	var XMLBlockData = Xml.parse(serializedBlockData).firstElement();
	var cleanXMLBlockData = slPlayer.core.XmlUtils.cleanUp(XMLBlockData);
	slPlayer.core.block.BlockBuilder.doCreateBlock(cleanXMLBlockData,block);
}
slPlayer.core.block.BlockBuilder.doCreateBlock = function(xml,parentBlock) {
	var parentBlockData = slPlayer.core.block.BlockBuilder.createBlockData(xml);
	parentBlock.setBlockData(parentBlockData);
	{ var $it0 = xml.elementsNamed("children");
	while( $it0.hasNext() ) { var children = $it0.next();
	{
		{ var $it1 = children.elements();
		while( $it1.hasNext() ) { var child = $it1.next();
		{
			var block = new slPlayer.core.block.Block(child.get("fileUrl"));
			block.setIsAutoOpen(child.get("isAutoOpen") == "true");
			block.setIsTransversal(child.get("isTransversal") == "true");
			parentBlock.addChild(block);
			slPlayer.core.block.BlockBuilder.doCreateBlock(child,block);
		}
		}}
	}
	}}
}
slPlayer.core.block.BlockBuilder.createBlockData = function(xml) {
	var blockData = { className : null, descriptorUID : null, as3SkinURL : null, jsSkinURL : null, phpSkinURL : null, properties : new Hash(), metaData : new Hash(), styles : new Hash()};
	var blockXml = xml;
	if(blockXml.exists("nameSpace")) {
		blockData.className = blockXml.get("nameSpace") + "." + blockXml.getNodeName();
	}
	else {
		blockData.className = "slPlayer.blocks." + blockXml.getNodeName();
	}
	var blockDataXML = Xml.parse("");
	{ var $it0 = blockXml.iterator();
	while( $it0.hasNext() ) { var children = $it0.next();
	{
		if(children.getNodeName() == "blockData") {
			blockDataXML = children;
		}
	}
	}}
	{ var $it1 = blockDataXML.iterator();
	while( $it1.hasNext() ) { var childXml = $it1.next();
	{
		switch(childXml.getNodeName()) {
		case "as3SkinURL":{
			blockData.as3SkinURL = childXml.firstChild().firstChild().toString();
		}break;
		case "jsSkinURL":{
			blockData.jsSkinURL = childXml.firstChild().firstChild().toString();
		}break;
		case "phpSkinURL":{
			blockData.phpSkinURL = childXml.firstChild().firstChild().toString();
		}break;
		case "descriptorUID":{
			blockData.descriptorUID = childXml.firstChild().toString();
		}break;
		case "properties":{
			{ var $it2 = childXml.elements();
			while( $it2.hasNext() ) { var property = $it2.next();
			{
				switch(property.get("type")) {
				case "Integer":{
					blockData.properties.set(property.getNodeName(),Std.parseInt(property.firstChild().toString()));
				}break;
				case "Float":{
					blockData.properties.set(property.getNodeName(),Std.parseFloat(property.firstChild().toString()));
				}break;
				case "Boolean":{
					blockData.properties.set(property.getNodeName(),property.firstChild().toString() == "true");
				}break;
				case "Array":{
					var items = new Array();
					{ var $it3 = property.elements();
					while( $it3.hasNext() ) { var item = $it3.next();
					{
						items.push(item.firstChild().getNodeValue());
					}
					}}
					blockData.properties.set(property.getNodeName(),items);
				}break;
				default:{
					blockData.properties.set(property.getNodeName(),property.firstChild().toString());
				}break;
				}
			}
			}}
		}break;
		case "metaData":{
			{ var $it4 = childXml.elements();
			while( $it4.hasNext() ) { var metaData = $it4.next();
			{
				blockData.metaData.set(metaData.getNodeName(),metaData.firstChild().toString());
			}
			}}
		}break;
		case "styles":{
			{ var $it5 = childXml.elements();
			while( $it5.hasNext() ) { var style = $it5.next();
			{
				blockData.styles.set(style.getNodeName(),style.firstChild().toString());
			}
			}}
		}break;
		}
	}
	}}
	return blockData;
}
slPlayer.core.block.BlockBuilder.prototype._block = null;
slPlayer.core.block.BlockBuilder.prototype._loadBlockDataSuccess = null;
slPlayer.core.block.BlockBuilder.prototype._loadBlockDataError = null;
slPlayer.core.block.BlockBuilder.prototype._loadDOMElementSuccess = null;
slPlayer.core.block.BlockBuilder.prototype._loadDOMElementError = null;
slPlayer.core.block.BlockBuilder.prototype.loadBlockData = function(successCallback,errorCallback) {
	this._loadBlockDataSuccess = successCallback;
	this._loadBlockDataError = errorCallback;
	cocktail.resource.ResourceLoaderManager.loadString(this._block.getFileUrl(),$closure(this,"onBlockDataLoaded"),$closure(this,"onBlockDataLoadError"));
}
slPlayer.core.block.BlockBuilder.prototype.onBlockDataLoaded = function(data) {
	slPlayer.core.block.BlockBuilder.deserializeBlockData(this._block,data);
	this._loadBlockDataSuccess(this);
}
slPlayer.core.block.BlockBuilder.prototype.onBlockDataLoadError = function(errorMessage) {
	this._loadBlockDataError(errorMessage);
}
slPlayer.core.block.BlockBuilder.prototype.loadDOMElement = function(skinUrl,successCallback,errorCallback) {
	this._loadDOMElementSuccess = successCallback;
	this._loadDOMElementError = errorCallback;
	cocktail.resource.ResourceLoaderManager.loadContainer(skinUrl,$closure(this,"onDOMElementLoaded"),$closure(this,"onDOMElementLoadError"));
}
slPlayer.core.block.BlockBuilder.prototype.onDOMElementLoaded = function(domElement) {
	this._block.setDOMElement(domElement);
	this._loadDOMElementSuccess(this);
}
slPlayer.core.block.BlockBuilder.prototype.onDOMElementLoadError = function(errorMessage) {
	this._loadDOMElementError(errorMessage);
}
slPlayer.core.block.BlockBuilder.prototype.createClassInstance = function() {
	this._block.setClassInstance(cocktail.nativeInstance.NativeInstanceManager.getClassInstanceByClassName(this._block.getBlockData().className));
}
slPlayer.core.block.BlockBuilder.prototype.createStyleManager = function() {
	this._block.setStyleManager(new slPlayer.core.style.StyleManager());
}
slPlayer.core.block.BlockBuilder.prototype.setBlockAttributes = function() {
	if(this._block.getClassInstance() != null) {
		{ var $it0 = this._block.getBlockData().properties.keys();
		while( $it0.hasNext() ) { var propertyName = $it0.next();
		{
			this._block.getClassInstance().setField(propertyName,this._block.getBlockData().properties.get(propertyName));
		}
		}}
	}
	else if(this._block.getDOMElement() != null) {
		{ var $it1 = this._block.getBlockData().properties.keys();
		while( $it1.hasNext() ) { var propertyName = $it1.next();
		{
			this._block.getDOMElement().setField(propertyName,this._block.getBlockData().properties.get(propertyName));
		}
		}}
	}
}
slPlayer.core.block.BlockBuilder.prototype.setBlockStyles = function() {
	{ var $it0 = this._block.getBlockData().styles.keys();
	while( $it0.hasNext() ) { var styleName = $it0.next();
	{
		this._block.getStyleManager()[styleName] = this._block.getBlockData().styles.get(styleName);
	}
	}}
}
slPlayer.core.block.BlockBuilder.prototype.__class__ = slPlayer.core.block.BlockBuilder;
if(!utest.ui.text) utest.ui.text = {}
utest.ui.text.HtmlReport = function(runner,outputHandler,traceRedirected) { if( runner === $_ ) return; {
	if(traceRedirected == null) traceRedirected = true;
	this.aggregator = new utest.ui.common.ResultAggregator(runner,true);
	runner.onStart.add($closure(this,"start"));
	this.aggregator.onComplete.add($closure(this,"complete"));
	if(null == outputHandler) this.setHandler($closure(this,"_handler"));
	else this.setHandler(outputHandler);
	if(traceRedirected) this.redirectTrace();
	this.displaySuccessResults = utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults;
	this.displayHeader = utest.ui.common.HeaderDisplayMode.AlwaysShowHeader;
}}
utest.ui.text.HtmlReport.__name__ = ["utest","ui","text","HtmlReport"];
utest.ui.text.HtmlReport.prototype.traceRedirected = null;
utest.ui.text.HtmlReport.prototype.displaySuccessResults = null;
utest.ui.text.HtmlReport.prototype.displayHeader = null;
utest.ui.text.HtmlReport.prototype.handler = null;
utest.ui.text.HtmlReport.prototype.aggregator = null;
utest.ui.text.HtmlReport.prototype.oldTrace = null;
utest.ui.text.HtmlReport.prototype._traces = null;
utest.ui.text.HtmlReport.prototype.setHandler = function(handler) {
	this.handler = handler;
}
utest.ui.text.HtmlReport.prototype.redirectTrace = function() {
	if(this.traceRedirected) return;
	this._traces = [];
	this.oldTrace = $closure(haxe.Log,"trace");
	haxe.Log.trace = $closure(this,"_trace");
}
utest.ui.text.HtmlReport.prototype.restoreTrace = function() {
	if(!this.traceRedirected) return;
	haxe.Log.trace = this.oldTrace;
}
utest.ui.text.HtmlReport.prototype._traceTime = null;
utest.ui.text.HtmlReport.prototype._trace = function(v,infos) {
	var time = haxe.Timer.stamp();
	var delta = this._traceTime == null?0:time - this._traceTime;
	this._traces.push({ msg : StringTools.htmlEscape(Std.string(v)), infos : infos, time : time - this.startTime, delta : delta, stack : haxe.Stack.callStack()});
	this._traceTime = haxe.Timer.stamp();
}
utest.ui.text.HtmlReport.prototype.startTime = null;
utest.ui.text.HtmlReport.prototype.start = function(e) {
	this.startTime = haxe.Timer.stamp();
}
utest.ui.text.HtmlReport.prototype.cls = function(stats) {
	if(stats.hasErrors) return "error";
	else if(stats.hasFailures) return "failure";
	else if(stats.hasWarnings) return "warn";
	else return "ok";
}
utest.ui.text.HtmlReport.prototype.resultNumbers = function(buf,stats) {
	var numbers = [];
	if(stats.assertations == 1) numbers.push("<strong>1</strong> test");
	else numbers.push("<strong>" + stats.assertations + "</strong> tests");
	if(stats.successes != stats.assertations) {
		if(stats.successes == 1) numbers.push("<strong>1</strong> pass");
		else if(stats.successes > 0) numbers.push("<strong>" + stats.successes + "</strong> passes");
	}
	if(stats.errors == 1) numbers.push("<strong>1</strong> error");
	else if(stats.errors > 0) numbers.push("<strong>" + stats.errors + "</strong> errors");
	if(stats.failures == 1) numbers.push("<strong>1</strong> failure");
	else if(stats.failures > 0) numbers.push("<strong>" + stats.failures + "</strong> failures");
	if(stats.warnings == 1) numbers.push("<strong>1</strong> warning");
	else if(stats.warnings > 0) numbers.push("<strong>" + stats.warnings + "</strong> warnings");
	buf.b[buf.b.length] = numbers.join(", ");
}
utest.ui.text.HtmlReport.prototype.blockNumbers = function(buf,stats) {
	buf.b[buf.b.length] = "<div class=\"" + this.cls(stats) + "bg statnumbers\">";
	this.resultNumbers(buf,stats);
	buf.b[buf.b.length] = "</div>";
}
utest.ui.text.HtmlReport.prototype.formatStack = function(stack,addNL) {
	if(addNL == null) addNL = true;
	var parts = [];
	var nl = addNL?"\n":"";
	var last = null;
	var count = 1;
	{
		var _g = 0, _g1 = haxe.Stack.toString(stack).split("\n");
		while(_g < _g1.length) {
			var part = _g1[_g];
			++_g;
			if(StringTools.trim(part) == "") continue;
			if(-1 < part.indexOf("Called from utest.")) continue;
			if(part == last) {
				parts[parts.length - 1] = part + " (#" + ++count + ")";
			}
			else {
				count = 1;
				parts.push(last = part);
			}
		}
	}
	var s = "<ul><li>" + parts.join("</li>" + nl + "<li>") + "</li></ul>" + nl;
	return "<div>" + s + "</div>" + nl;
}
utest.ui.text.HtmlReport.prototype.addFixture = function(buf,result,name,isOk) {
	if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) return;
	buf.b[buf.b.length] = "<li class=\"fixture\"><div class=\"li\">";
	buf.b[buf.b.length] = "<span class=\"" + this.cls(result.stats) + "bg fixtureresult\">";
	if(result.stats.isOk) {
		buf.b[buf.b.length] = "OK ";
	}
	else if(result.stats.hasErrors) {
		buf.b[buf.b.length] = "ERROR ";
	}
	else if(result.stats.hasFailures) {
		buf.b[buf.b.length] = "FAILURE ";
	}
	else if(result.stats.hasWarnings) {
		buf.b[buf.b.length] = "WARNING ";
	}
	buf.b[buf.b.length] = "</span>";
	buf.b[buf.b.length] = "<div class=\"fixturedetails\">";
	buf.b[buf.b.length] = "<strong>" + name + "</strong>";
	buf.b[buf.b.length] = ": ";
	this.resultNumbers(buf,result.stats);
	var messages = [];
	{ var $it0 = result.iterator();
	while( $it0.hasNext() ) { var assertation = $it0.next();
	{
		var $e = assertation;
		switch( $e[1] ) {
		case 0:
		var pos = $e[2];
		{
			null;
		}break;
		case 1:
		var pos = $e[3], msg = $e[2];
		{
			messages.push("<strong>line " + pos.lineNumber + "</strong>: <em>" + StringTools.htmlEscape(msg) + "</em>");
		}break;
		case 2:
		var s = $e[3], e = $e[2];
		{
			messages.push("<strong>error</strong>: <em>" + this.getErrorDescription(e) + "</em>\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
		}break;
		case 3:
		var s = $e[3], e = $e[2];
		{
			messages.push("<strong>setup error</strong>: " + this.getErrorDescription(e) + "\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
		}break;
		case 4:
		var s = $e[3], e = $e[2];
		{
			messages.push("<strong>tear-down error</strong>: " + this.getErrorDescription(e) + "\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
		}break;
		case 5:
		var s = $e[3], missedAsyncs = $e[2];
		{
			messages.push("<strong>missed async call(s)</strong>: " + missedAsyncs);
		}break;
		case 6:
		var s = $e[3], e = $e[2];
		{
			messages.push("<strong>async error</strong>: " + this.getErrorDescription(e) + "\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
		}break;
		case 7:
		var msg = $e[2];
		{
			messages.push(StringTools.htmlEscape(msg));
		}break;
		}
	}
	}}
	if(messages.length > 0) {
		buf.b[buf.b.length] = "<div class=\"testoutput\">";
		buf.b[buf.b.length] = messages.join("<br/>");
		buf.b[buf.b.length] = "</div>\n";
	}
	buf.b[buf.b.length] = "</div>\n";
	buf.b[buf.b.length] = "</div></li>\n";
}
utest.ui.text.HtmlReport.prototype.getErrorDescription = function(e) {
	return Std.string(e);
}
utest.ui.text.HtmlReport.prototype.getErrorStack = function(s,e) {
	return this.formatStack(s);
}
utest.ui.text.HtmlReport.prototype.addClass = function(buf,result,name,isOk) {
	if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) return;
	buf.b[buf.b.length] = "<li>";
	buf.b[buf.b.length] = "<h2 class=\"classname\">" + name + "</h2>";
	this.blockNumbers(buf,result.stats);
	buf.b[buf.b.length] = "<ul>\n";
	{
		var _g = 0, _g1 = result.methodNames();
		while(_g < _g1.length) {
			var mname = _g1[_g];
			++_g;
			this.addFixture(buf,result.get(mname),mname,isOk);
		}
	}
	buf.b[buf.b.length] = "</ul>\n";
	buf.b[buf.b.length] = "</li>\n";
}
utest.ui.text.HtmlReport.prototype.addPackages = function(buf,result,isOk) {
	if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) return;
	buf.b[buf.b.length] = "<ul id=\"utest-results-packages\">\n";
	{
		var _g = 0, _g1 = result.packageNames(false);
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			this.addPackage(buf,result.getPackage(name),name,isOk);
		}
	}
	buf.b[buf.b.length] = "</ul>\n";
}
utest.ui.text.HtmlReport.prototype.addPackage = function(buf,result,name,isOk) {
	if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) return;
	if(name == "" && result.classNames().length == 0) return;
	buf.b[buf.b.length] = "<li>";
	buf.b[buf.b.length] = "<h2>" + name + "</h2>";
	this.blockNumbers(buf,result.stats);
	buf.b[buf.b.length] = "<ul>\n";
	{
		var _g = 0, _g1 = result.classNames();
		while(_g < _g1.length) {
			var cname = _g1[_g];
			++_g;
			this.addClass(buf,result.getClass(cname),cname,isOk);
		}
	}
	buf.b[buf.b.length] = "</ul>\n";
	buf.b[buf.b.length] = "</li>\n";
}
utest.ui.text.HtmlReport.prototype.getHeader = function() {
	var buf = new StringBuf();
	if(!utest.ui.common.ReportTools.hasHeader(this,this.result.stats)) return "";
	var end = haxe.Timer.stamp();
	var time = Std["int"]((end - this.startTime) * 1000) / 1000;
	var msg = "TEST OK";
	if(this.result.stats.hasErrors) msg = "TEST ERRORS";
	else if(this.result.stats.hasFailures) msg = "TEST FAILED";
	else if(this.result.stats.hasWarnings) msg = "WARNING REPORTED";
	buf.b[buf.b.length] = "<h1 class=\"" + this.cls(this.result.stats) + "bg header\">" + msg + "</h1>\n";
	buf.b[buf.b.length] = "<div class=\"headerinfo\">";
	this.resultNumbers(buf,this.result.stats);
	buf.b[buf.b.length] = " performed on <strong>" + utest.ui.text.HtmlReport.platform + "</strong>, executed in <strong> " + time + " sec. </strong></div >\n ";
	return buf.b.join("");
}
utest.ui.text.HtmlReport.prototype.getTrace = function() {
	var buf = new StringBuf();
	if(this._traces == null || this._traces.length == 0) return "";
	buf.b[buf.b.length] = "<div class=\"trace\"><h2>traces</h2><ol>";
	{
		var _g = 0, _g1 = this._traces;
		while(_g < _g1.length) {
			var t = _g1[_g];
			++_g;
			buf.b[buf.b.length] = "<li><div class=\"li\">";
			var stack = StringTools.replace(this.formatStack(t.stack,false),"'","\\'");
			var method = "<span class=\"tracepackage\">" + t.infos.className + "</span><br/>" + t.infos.methodName + "(" + t.infos.lineNumber + ")";
			buf.b[buf.b.length] = "<span class=\"tracepos\" onmouseover=\"utestTooltip(this.parentNode, '" + stack + "')\" onmouseout=\"utestRemoveTooltip()\">";
			buf.b[buf.b.length] = method;
			buf.b[buf.b.length] = "</span><span class=\"tracetime\">";
			buf.b[buf.b.length] = "@ " + this.formatTime(t.time);
			if(Math.round(t.delta * 1000) > 0) buf.b[buf.b.length] = ", ~" + this.formatTime(t.delta);
			buf.b[buf.b.length] = "</span><span class=\"tracemsg\">";
			buf.b[buf.b.length] = StringTools.replace(StringTools.trim(t.msg),"\n","<br/>\n");
			buf.b[buf.b.length] = "</span><div class=\"clr\"></div></div></li>";
		}
	}
	buf.b[buf.b.length] = "</ol></div>";
	return buf.b.join("");
}
utest.ui.text.HtmlReport.prototype.getResults = function() {
	var buf = new StringBuf();
	this.addPackages(buf,this.result,this.result.stats.isOk);
	return buf.b.join("");
}
utest.ui.text.HtmlReport.prototype.getAll = function() {
	if(!utest.ui.common.ReportTools.hasOutput(this,this.result.stats)) return "";
	else return this.getHeader() + this.getTrace() + this.getResults();
}
utest.ui.text.HtmlReport.prototype.getHtml = function(title) {
	if(null == title) title = "utest: " + utest.ui.text.HtmlReport.platform;
	var s = this.getAll();
	if("" == s) return "";
	else return this.wrapHtml(title,s);
}
utest.ui.text.HtmlReport.prototype.result = null;
utest.ui.text.HtmlReport.prototype.complete = function(result) {
	this.result = result;
	this.handler(this);
	this.restoreTrace();
}
utest.ui.text.HtmlReport.prototype.formatTime = function(t) {
	return Math.round(t * 1000) + " ms";
}
utest.ui.text.HtmlReport.prototype.cssStyle = function() {
	return "body, dd, dt {\r\n\tfont-family: Verdana, Arial, Sans-serif;\r\n\tfont-size: 12px;\r\n}\r\ndl {\r\n\twidth: 180px;\r\n}\r\ndd, dt {\r\n\tmargin : 0;\r\n\tpadding : 2px 5px;\r\n\tborder-top: 1px solid #f0f0f0;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n}\r\ndd.value {\r\n\ttext-align: center;\r\n\tbackground-color: #eeeeee;\r\n}\r\ndt {\r\n\ttext-align: left;\r\n\tbackground-color: #e6e6e6;\r\n\tfloat: left;\r\n\twidth: 100px;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nh1 {\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tpadding: 5px 0 4px 0;\r\n\tfont-family: Arial, Sans-serif;\r\n\tfont-size: 18px;\r\n\tborder-top: 1px solid #f0f0f0;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n\tmargin: 0 2px 0px 2px;\r\n}\r\n\r\nh2 {\r\n\tfont-weight: bold;\r\n\tpadding: 2px 0 2px 8px;\r\n\tfont-family: Arial, Sans-serif;\r\n\tfont-size: 13px;\r\n\tborder-top: 1px solid #f0f0f0;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n\tmargin: 0 0 0px 0;\r\n\tbackground-color: #FFFFFF;\r\n\tcolor: #777777;\r\n}\r\n\r\nh2.classname {\r\n\tcolor: #000000;\r\n}\r\n\r\n.okbg {\r\n\tbackground-color: #66FF55;\r\n}\r\n.errorbg {\r\n\tbackground-color: #CC1100;\r\n}\r\n.failurebg {\r\n\tbackground-color: #EE3322;\r\n}\r\n.warnbg {\r\n\tbackground-color: #FFCC99;\r\n}\r\n.headerinfo {\r\n\ttext-align: right;\r\n\tfont-size: 11px;\r\n\tfont - color: 0xCCCCCC;\r\n\tmargin: 0 2px 5px 2px;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n\tpadding: 2px;\r\n}\r\n\r\nli {\r\n\tpadding: 4px;\r\n\tmargin: 2px;\r\n\tborder-top: 1px solid #f0f0f0;\r\n\tborder-left: 1px solid #f0f0f0;\r\n\tborder-right: 1px solid #CCCCCC;\r\n\tborder-bottom: 1px solid #CCCCCC;\r\n\tbackground-color: #e6e6e6;\r\n}\r\n\r\nli.fixture {\r\n\tbackground-color: #f6f6f6;\r\n\tpadding-bottom: 6px;\r\n}\r\n\r\ndiv.fixturedetails {\r\n\tpadding-left: 108px;\r\n}\r\n\r\nul {\r\n\tpadding: 0;\r\n\tmargin: 6px 0 0 0;\r\n\tlist-style-type: none;\r\n}\r\n\r\nol {\r\n\tpadding: 0 0 0 28px;\r\n\tmargin: 0px 0 0 0;\r\n}\r\n\r\n.statnumbers {\r\n\tpadding: 2px 8px;\r\n}\r\n\r\n.fixtureresult {\r\n\twidth: 100px;\r\n\ttext-align: center;\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\tfont-weight: bold;\r\n\tpadding: 1px;\r\n\tmargin: 0 0 0 0;\r\n}\r\n\r\n.testoutput {\r\n\tborder: 1px dashed #CCCCCC;\r\n\tmargin: 4px 0 0 0;\r\n\tpadding: 4px 8px;\r\n\tbackground-color: #eeeeee;\r\n}\r\n\r\nspan.tracepos, span.traceposempty {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\tfont-weight: bold;\r\n\tfont-size: 9px;\r\n\twidth: 170px;\r\n\tmargin: 2px 0 0 2px;\r\n}\r\n\r\nspan.tracepos:hover {\r\n\tcursor : pointer;\r\n\tbackground-color: #ffff99;\r\n}\r\n\r\nspan.tracemsg {\r\n\tdisplay: block;\r\n\tmargin-left: 180px;\r\n\tbackground-color: #eeeeee;\r\n\tpadding: 7px;\r\n}\r\n\r\nspan.tracetime {\r\n\tdisplay: block;\r\n\tfloat: right;\r\n\tmargin: 2px;\r\n\tfont-size: 9px;\r\n\tcolor: #777777;\r\n}\r\n\r\n\r\ndiv.trace ol {\r\n\tpadding: 0 0 0 40px;\r\n\tcolor: #777777;\r\n}\r\n\r\ndiv.trace li {\r\n\tpadding: 0;\r\n}\r\n\r\ndiv.trace li div.li {\r\n\tcolor: #000000;\r\n}\r\n\r\ndiv.trace h2 {\r\n\tmargin: 0 2px 0px 2px;\r\n\tpadding-left: 4px;\r\n}\r\n\r\n.tracepackage {\r\n\tcolor: #777777;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.clr {\r\n\tclear: both;\r\n}\r\n\r\n#utesttip {\r\n\tmargin-top: -3px;\r\n\tmargin-left: 170px;\r\n\tfont-size: 9px;\r\n}\r\n\r\n#utesttip li {\r\n\tmargin: 0;\r\n\tbackground-color: #ffff99;\r\n\tpadding: 2px 4px;\r\n\tborder: 0;\r\n\tborder-bottom: 1px dashed #ffff33;\r\n}";
}
utest.ui.text.HtmlReport.prototype.jsScript = function() {
	return "function utestTooltip(ref, text) {\r\n\tvar el = document.getElementById(\"utesttip\");\r\n\tif(!el) {\r\n\t\tvar el = document.createElement(\"div\")\r\n\t\tel.id = \"utesttip\";\r\n\t\tel.style.position = \"absolute\";\r\n\t\tdocument.body.appendChild(el)\r\n\t}\r\n\tvar p = utestFindPos(ref);\r\n\tel.style.left = (4 + p[0]) + \"px\";\r\n\tel.style.top = (p[1] - 1) + \"px\";\r\n\tel.innerHTML =  text;\r\n}\r\n\r\nfunction utestFindPos(el) {\r\n\tvar left = 0;\r\n\tvar top = 0;\r\n\tdo {\r\n\t\tleft += el.offsetLeft;\r\n\t\ttop += el.offsetTop;\r\n\t} while(el = el.offsetParent)\r\n\treturn [left, top];\r\n}\r\n\r\nfunction utestRemoveTooltip() {\r\n\tvar el = document.getElementById(\"utesttip\")\r\n\tif(el)\r\n\t\tdocument.body.removeChild(el)\r\n}";
}
utest.ui.text.HtmlReport.prototype.wrapHtml = function(title,s) {
	return "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" />\n<title>" + title + "</title>\r\n\t\t\t<style type=\"text/css\">" + this.cssStyle() + "</style>\r\n\t\t\t<script type=\"text/javascript\">\n" + this.jsScript() + "\n</script>\n</head>\r\n\t\t\t<body>\n" + s + "\n</body>\n</html>";
}
utest.ui.text.HtmlReport.prototype._handler = function(report) {
	var isDef = function(v) {
		return typeof v != 'undefined';
	}
	var head = js.Lib.document.getElementsByTagName("head")[0];
	var script = js.Lib.document.createElement("script");
	script.type = "text/javascript";
	var sjs = report.jsScript();
	if(isDef(script.text)) {
		script.text = sjs;
	}
	else {
		script.innerHTML = sjs;
	}
	head.appendChild(script);
	var style = js.Lib.document.createElement("style");
	style.type = "text/css";
	var scss = report.cssStyle();
	if(isDef(style.styleSheet)) {
		style.styleSheet.cssText = scss;
	}
	else if(isDef(style.cssText)) {
		style.cssText = scss;
	}
	else if(isDef(style.innerText)) {
		style.innerText = scss;
	}
	else {
		style.innerHTML = scss;
	}
	head.appendChild(style);
	var el = js.Lib.document.getElementById("utest-results");
	if(null == el) {
		el = js.Lib.document.createElement("div");
		el.id = "utest-results";
		js.Lib.document.body.appendChild(el);
	}
	el.innerHTML = report.getAll();
}
utest.ui.text.HtmlReport.prototype.__class__ = utest.ui.text.HtmlReport;
utest.ui.text.HtmlReport.__interfaces__ = [utest.ui.common.IReport];
cocktail.style.abstract.AbstractContainerStyle = function(domElement) { if( domElement === $_ ) return; {
	cocktail.style.js.Style.call(this,domElement);
}}
cocktail.style.abstract.AbstractContainerStyle.__name__ = ["cocktail","style","abstract","AbstractContainerStyle"];
cocktail.style.abstract.AbstractContainerStyle.__super__ = cocktail.style.js.Style;
for(var k in cocktail.style.js.Style.prototype ) cocktail.style.abstract.AbstractContainerStyle.prototype[k] = cocktail.style.js.Style.prototype[k];
cocktail.style.abstract.AbstractContainerStyle.prototype.layout = function(containingDOMElementDimensions,lastPositionedDOMElement,rootDOMElement) {
	this.flow(containingDOMElementDimensions,rootDOMElement,lastPositionedDOMElement,null);
}
cocktail.style.abstract.AbstractContainerStyle.prototype.flowChildren = function(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions,formatingContext) {
	var containerDOMElement = this._domElement;
	containerDOMElement.resetTextLines();
	{
		var _g1 = 0, _g = containerDOMElement.getChildren().length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.isDOMElement(containerDOMElement.getChildren()[i]) == true) {
				var childrenDOMElement = containerDOMElement.getChildren()[i].children;
				childrenDOMElement.getStyle().computePositionStyle();
			}
		}
	}
	var childrenFormattingContext;
	if(formatingContext == null) {
		formatingContext = this.getFormatingContext();
		childrenFormattingContext = this.getFormatingContext();
	}
	else {
		childrenFormattingContext = this.getFormatingContext(formatingContext);
	}
	containingDOMElementDimensions = { width : this._computedStyle.width, height : this._computedStyle.height};
	var childLastPositionedDOMElementDimensions = lastPositionedDOMElementDimensions;
	if(this.isPositioned() == true) {
		childLastPositionedDOMElementDimensions = { width : this._computedStyle.width, height : this._computedStyle.height, globalX : this._domElement.getGlobalX(), globalY : this._domElement.getGlobalY()};
	}
	{
		var _g1 = 0, _g = containerDOMElement.getChildren().length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.isDOMElement(containerDOMElement.getChildren()[i]) == true) {
				var childrenDOMElement = containerDOMElement.getChildren()[i].children;
				childrenDOMElement.getStyle().flow(containingDOMElementDimensions,rootDOMElementDimensions,childLastPositionedDOMElementDimensions,childrenFormattingContext);
			}
			else {
				var childrenTextNode = containerDOMElement.getChildren()[i].children;
				this.insertTextNode(childrenTextNode,childrenFormattingContext,containingDOMElementDimensions,rootDOMElementDimensions,childLastPositionedDOMElementDimensions);
			}
		}
	}
	if(this._height == cocktail.style.DimensionStyleValue.auto) {
		this._computedStyle.height = childrenFormattingContext.getFlowData().totalHeight;
	}
	this.insertDOMElement(formatingContext,lastPositionedDOMElementDimensions,rootDOMElementDimensions);
	formatingContext.retrieveFloats(childrenFormattingContext);
}
cocktail.style.abstract.AbstractContainerStyle.prototype.insertTextNode = function(textNode,formattingContext,containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions) {
	var containerDOMElement = this._domElement;
	var textLineDOMElement = containerDOMElement.createTextLine(formattingContext.getRemainingLineWidth(),textNode);
	var startNewLine = false;
	while(textLineDOMElement != null) {
		textLineDOMElement.getStyle().computeDOMElement(containingDOMElementDimensions,rootDOMElementDimensions,lastPositionedDOMElementDimensions);
		formattingContext.insert(textLineDOMElement);
		if(textLineDOMElement.getIsLastLineOfTextBlock() == false) {
			startNewLine = true;
		}
		else {
			startNewLine = false;
		}
		if(startNewLine == true) {
			formattingContext.startNewLine();
		}
		textLineDOMElement = containerDOMElement.createTextLine(formattingContext.getRemainingLineWidth(),textNode);
	}
}
cocktail.style.abstract.AbstractContainerStyle.prototype.getFormatingContext = function(previousFormatingContext) {
	var containerDOMElement = this._domElement;
	var ret;
	if(this.childrenInline() == true) {
		ret = new cocktail.style.formatter.InlineFormattingContext(containerDOMElement,previousFormatingContext);
	}
	else {
		ret = new cocktail.style.formatter.BlockFormattingContext(containerDOMElement,previousFormatingContext);
	}
	return ret;
}
cocktail.style.abstract.AbstractContainerStyle.prototype.childrenInline = function() {
	var ret = false;
	var containerDOMElement = this._domElement;
	{
		var _g1 = 0, _g = containerDOMElement.getChildren().length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.isDOMElement(containerDOMElement.getChildren()[i])) {
				var childrenDOMElement = containerDOMElement.getChildren()[i].children;
				if(childrenDOMElement.getStyle().getComputedStyle().display == cocktail.style.DisplayStyleValue._inline || childrenDOMElement.getStyle().getComputedStyle().display == cocktail.style.DisplayStyleValue.inlineBlock) {
					ret = true;
				}
			}
		}
	}
	return ret;
}
cocktail.style.abstract.AbstractContainerStyle.prototype.isDOMElement = function(containerDOMElementChildrenData) {
	var ret = false;
	var $e = containerDOMElementChildrenData.type;
	switch( $e[1] ) {
	case 0:
	{
		ret = true;
	}break;
	case 1:
	{
		ret = false;
	}break;
	}
	return ret;
}
cocktail.style.abstract.AbstractContainerStyle.prototype.__class__ = cocktail.style.abstract.AbstractContainerStyle;
if(!cocktail.resource) cocktail.resource = {}
if(!cocktail.resource["abstract"]) cocktail.resource["abstract"] = {}
cocktail.resource.abstract.AbstractResourceLoader = function(p) { if( p === $_ ) return; {
	null;
}}
cocktail.resource.abstract.AbstractResourceLoader.__name__ = ["cocktail","resource","abstract","AbstractResourceLoader"];
cocktail.resource.abstract.AbstractResourceLoader.prototype._onLoadCompleteCallback = null;
cocktail.resource.abstract.AbstractResourceLoader.prototype._onLoadErrorCallback = null;
cocktail.resource.abstract.AbstractResourceLoader.prototype._domElement = null;
cocktail.resource.abstract.AbstractResourceLoader.prototype.load = function(url,onLoadComplete,onLoadError,domElement,allowCache) {
	if(allowCache == null) allowCache = true;
	this._onLoadCompleteCallback = onLoadComplete;
	this._onLoadErrorCallback = onLoadError;
	this._domElement = domElement;
	if(allowCache == false) {
		url = this.disableUrlCaching(url);
	}
	this.doLoad(url);
}
cocktail.resource.abstract.AbstractResourceLoader.prototype.doLoad = function(url) {
	var fileRequest = new haxe.Http(url);
	fileRequest.onData = $closure(this,"onLoadComplete");
	fileRequest.onError = $closure(this,"onLoadError");
	fileRequest.request(false);
}
cocktail.resource.abstract.AbstractResourceLoader.prototype.onLoadComplete = function(data) {
	this._onLoadCompleteCallback(data);
}
cocktail.resource.abstract.AbstractResourceLoader.prototype.onLoadError = function(msg) {
	this._onLoadErrorCallback(msg);
}
cocktail.resource.abstract.AbstractResourceLoader.prototype.disableUrlCaching = function(url) {
	var getId = "";
	if(url.indexOf("?") == -1) {
		getId = "?";
	}
	else {
		getId = "&";
	}
	url += getId + "rand=" + Math.round(Math.random() * 10000);
	return url;
}
cocktail.resource.abstract.AbstractResourceLoader.prototype.__class__ = cocktail.resource.abstract.AbstractResourceLoader;
if(!cocktail.resource.js) cocktail.resource.js = {}
cocktail.resource.js.LibraryLoader = function(p) { if( p === $_ ) return; {
	cocktail.resource.abstract.AbstractResourceLoader.call(this);
}}
cocktail.resource.js.LibraryLoader.__name__ = ["cocktail","resource","js","LibraryLoader"];
cocktail.resource.js.LibraryLoader.__super__ = cocktail.resource.abstract.AbstractResourceLoader;
for(var k in cocktail.resource.abstract.AbstractResourceLoader.prototype ) cocktail.resource.js.LibraryLoader.prototype[k] = cocktail.resource.abstract.AbstractResourceLoader.prototype[k];
cocktail.resource.js.LibraryLoader.prototype.doLoad = function(url) {
	var scrptE = js.Lib.document.createElement("script");
	scrptE.setAttribute("type","text/javascript");
	scrptE.setAttribute("language","JavaScript");
	scrptE.setAttribute("src",url);
	scrptE.onload = $closure(this,"onLoadComplete");
	scrptE.onerror = $closure(this,"onLoadError");
	js.Lib.document.getElementsByTagName("head")[0].appendChild(scrptE);
}
cocktail.resource.js.LibraryLoader.prototype.onLoadComplete = function(data) {
	this._onLoadCompleteCallback(null);
}
cocktail.resource.js.LibraryLoader.prototype.__class__ = cocktail.resource.js.LibraryLoader;
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o%2147483648.0) === o;
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	}
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	}
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
cocktail.style.computer.InlineBlockEmbeddedBoxComputer = function(p) { if( p === $_ ) return; {
	cocktail.style.computer.BoxComputer.call(this);
}}
cocktail.style.computer.InlineBlockEmbeddedBoxComputer.__name__ = ["cocktail","style","computer","InlineBlockEmbeddedBoxComputer"];
cocktail.style.computer.InlineBlockEmbeddedBoxComputer.__super__ = cocktail.style.computer.BoxComputer;
for(var k in cocktail.style.computer.BoxComputer.prototype ) cocktail.style.computer.InlineBlockEmbeddedBoxComputer.prototype[k] = cocktail.style.computer.BoxComputer.prototype[k];
cocktail.style.computer.InlineBlockEmbeddedBoxComputer.prototype.__class__ = cocktail.style.computer.InlineBlockEmbeddedBoxComputer;
utest.ui.common.ResultStats = function(p) { if( p === $_ ) return; {
	this.assertations = 0;
	this.successes = 0;
	this.failures = 0;
	this.errors = 0;
	this.warnings = 0;
	this.isOk = true;
	this.hasFailures = false;
	this.hasErrors = false;
	this.hasWarnings = false;
	this.onAddSuccesses = new utest.Dispatcher();
	this.onAddFailures = new utest.Dispatcher();
	this.onAddErrors = new utest.Dispatcher();
	this.onAddWarnings = new utest.Dispatcher();
}}
utest.ui.common.ResultStats.__name__ = ["utest","ui","common","ResultStats"];
utest.ui.common.ResultStats.prototype.assertations = null;
utest.ui.common.ResultStats.prototype.successes = null;
utest.ui.common.ResultStats.prototype.failures = null;
utest.ui.common.ResultStats.prototype.errors = null;
utest.ui.common.ResultStats.prototype.warnings = null;
utest.ui.common.ResultStats.prototype.onAddSuccesses = null;
utest.ui.common.ResultStats.prototype.onAddFailures = null;
utest.ui.common.ResultStats.prototype.onAddErrors = null;
utest.ui.common.ResultStats.prototype.onAddWarnings = null;
utest.ui.common.ResultStats.prototype.isOk = null;
utest.ui.common.ResultStats.prototype.hasFailures = null;
utest.ui.common.ResultStats.prototype.hasErrors = null;
utest.ui.common.ResultStats.prototype.hasWarnings = null;
utest.ui.common.ResultStats.prototype.addSuccesses = function(v) {
	if(v == 0) return;
	this.assertations += v;
	this.successes += v;
	this.onAddSuccesses.dispatch(v);
}
utest.ui.common.ResultStats.prototype.addFailures = function(v) {
	if(v == 0) return;
	this.assertations += v;
	this.failures += v;
	this.hasFailures = this.failures > 0;
	this.isOk = !(this.hasFailures || this.hasErrors || this.hasWarnings);
	this.onAddFailures.dispatch(v);
}
utest.ui.common.ResultStats.prototype.addErrors = function(v) {
	if(v == 0) return;
	this.assertations += v;
	this.errors += v;
	this.hasErrors = this.errors > 0;
	this.isOk = !(this.hasFailures || this.hasErrors || this.hasWarnings);
	this.onAddErrors.dispatch(v);
}
utest.ui.common.ResultStats.prototype.addWarnings = function(v) {
	if(v == 0) return;
	this.assertations += v;
	this.warnings += v;
	this.hasWarnings = this.warnings > 0;
	this.isOk = !(this.hasFailures || this.hasErrors || this.hasWarnings);
	this.onAddWarnings.dispatch(v);
}
utest.ui.common.ResultStats.prototype.sum = function(other) {
	this.addSuccesses(other.successes);
	this.addFailures(other.failures);
	this.addErrors(other.errors);
	this.addWarnings(other.warnings);
}
utest.ui.common.ResultStats.prototype.subtract = function(other) {
	this.addSuccesses(-other.successes);
	this.addFailures(-other.failures);
	this.addErrors(-other.errors);
	this.addWarnings(-other.warnings);
}
utest.ui.common.ResultStats.prototype.wire = function(dependant) {
	dependant.onAddSuccesses.add($closure(this,"addSuccesses"));
	dependant.onAddFailures.add($closure(this,"addFailures"));
	dependant.onAddErrors.add($closure(this,"addErrors"));
	dependant.onAddWarnings.add($closure(this,"addWarnings"));
	this.sum(dependant);
}
utest.ui.common.ResultStats.prototype.unwire = function(dependant) {
	dependant.onAddSuccesses.remove($closure(this,"addSuccesses"));
	dependant.onAddFailures.remove($closure(this,"addFailures"));
	dependant.onAddErrors.remove($closure(this,"addErrors"));
	dependant.onAddWarnings.remove($closure(this,"addWarnings"));
	this.subtract(dependant);
}
utest.ui.common.ResultStats.prototype.__class__ = utest.ui.common.ResultStats;
cocktail.domElement.abstract.AbstractAnimationDOMElement = function(nativeElement) { if( nativeElement === $_ ) return; {
	cocktail.domElement.js.EmbeddedDOMElement.call(this,nativeElement);
}}
cocktail.domElement.abstract.AbstractAnimationDOMElement.__name__ = ["cocktail","domElement","abstract","AbstractAnimationDOMElement"];
cocktail.domElement.abstract.AbstractAnimationDOMElement.__super__ = cocktail.domElement.js.EmbeddedDOMElement;
for(var k in cocktail.domElement.js.EmbeddedDOMElement.prototype ) cocktail.domElement.abstract.AbstractAnimationDOMElement.prototype[k] = cocktail.domElement.js.EmbeddedDOMElement.prototype[k];
cocktail.domElement.abstract.AbstractAnimationDOMElement.prototype.__class__ = cocktail.domElement.abstract.AbstractAnimationDOMElement;
cocktail.domElement.abstract.AbstractGraphicDOMElement = function(nativeElement) { if( nativeElement === $_ ) return; {
	if(nativeElement == null) {
		nativeElement = cocktail.nativeElement.NativeElementManager.createNativeElement(cocktail.nativeElement.NativeElementTypeValue.graphic);
	}
	cocktail.domElement.js.EmbeddedDOMElement.call(this,nativeElement);
}}
cocktail.domElement.abstract.AbstractGraphicDOMElement.__name__ = ["cocktail","domElement","abstract","AbstractGraphicDOMElement"];
cocktail.domElement.abstract.AbstractGraphicDOMElement.__super__ = cocktail.domElement.js.EmbeddedDOMElement;
for(var k in cocktail.domElement.js.EmbeddedDOMElement.prototype ) cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype[k] = cocktail.domElement.js.EmbeddedDOMElement.prototype[k];
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.initDimensions = function() {
	this._height = 150;
	this._width = 300;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.initInstrinsicDimensions = function() {
	this._intrinsicHeight = this._height;
	this._intrinsicWidth = this._width;
	this._intrinsicRatio = this._width / this._height;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.beginFill = function(fillStyle,lineStyle) {
	null;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.endFill = function() {
	null;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.clear = function() {
	null;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.drawRect = function(x,y,width,height,cornerRadiuses) {
	if(cornerRadiuses == null) {
		cornerRadiuses = { tlCornerRadius : 0, trCornerRadius : 0, blCornerRadius : 0, brCornerRadius : 0};
	}
	this.moveTo(cornerRadiuses.tlCornerRadius + x,y);
	this.lineTo(width - cornerRadiuses.trCornerRadius + x,y);
	this.curveTo(width + x,y,width + x,cornerRadiuses.trCornerRadius + y);
	this.lineTo(width + x,cornerRadiuses.trCornerRadius + y);
	this.lineTo(width + x,height - cornerRadiuses.brCornerRadius + y);
	this.curveTo(width + x,height + y,width - cornerRadiuses.brCornerRadius + x,height + y);
	this.lineTo(width - cornerRadiuses.brCornerRadius + x,height + y);
	this.lineTo(cornerRadiuses.blCornerRadius + x,height + y);
	this.curveTo(x,height + y,x,height - cornerRadiuses.blCornerRadius + y);
	this.lineTo(x,height - cornerRadiuses.blCornerRadius + y);
	this.lineTo(x,cornerRadiuses.tlCornerRadius + y);
	this.curveTo(x,y,cornerRadiuses.tlCornerRadius + x,y);
	this.lineTo(cornerRadiuses.tlCornerRadius + x,y);
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.drawEllipse = function(x,y,width,height) {
	var xRadius = width / 2;
	var yRadius = height / 2;
	var xCenter = width / 2 + x;
	var yCenter = height / 2 + y;
	var angleDelta = Math.PI / 4;
	var xCtrlDist = xRadius / Math.cos(angleDelta / 2);
	var yCtrlDist = yRadius / Math.cos(angleDelta / 2);
	this.moveTo(xCenter + xRadius,yCenter);
	var angle = 0;
	var rx, ry, ax, ay;
	{
		var _g = 0;
		while(_g < 8) {
			var i = _g++;
			angle += angleDelta;
			rx = xCenter + Math.cos(angle - angleDelta / 2) * xCtrlDist;
			ry = yCenter + Math.sin(angle - angleDelta / 2) * yCtrlDist;
			ax = xCenter + Math.cos(angle) * xRadius;
			ay = yCenter + Math.sin(angle) * yRadius;
			this.curveTo(rx,ry,ax,ay);
		}
	}
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.drawStar = function(x,y,outerRadius,innerRadius,branches) {
	var angle = 360 / branches;
	var angleDecal = angle * 0.5;
	this.moveTo(Math.cos(0) * outerRadius + outerRadius,Math.sin(0) * outerRadius + outerRadius);
	{
		var _g = 0;
		while(_g < branches) {
			var i = _g++;
			this.lineTo(Math.cos(this.conversion(i * angle)) * outerRadius + outerRadius,Math.sin(this.conversion(i * angle)) * outerRadius + outerRadius);
			this.lineTo(Math.cos(this.conversion(i * angle + angleDecal)) * innerRadius + outerRadius,Math.sin(this.conversion(i * angle + angleDecal)) * innerRadius + outerRadius);
		}
	}
	this.lineTo(Math.cos(0) * outerRadius + outerRadius,Math.sin(0) * outerRadius + outerRadius);
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.drawPolygon = function(x,y,radius,sides) {
	var angle = 360 / sides;
	this.moveTo(Math.cos(0) * radius + radius,Math.sin(0) * radius + radius);
	{
		var _g = 0;
		while(_g < sides) {
			var i = _g++;
			this.lineTo(Math.cos(this.conversion(i * angle)) * radius + radius,Math.sin(this.conversion(i * angle)) * radius + radius);
			this.lineTo(Math.cos(this.conversion(i * angle + angle)) * radius + radius,Math.sin(this.conversion(i * angle + angle)) * radius + radius);
		}
	}
	this.lineTo(Math.cos(0) * radius + radius,Math.sin(0) * radius + radius);
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.conversion = function(val) {
	return val / 180 * Math.PI;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.drawImage = function(source,destinationPoint,sourceRect) {
	null;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.lineTo = function(x,y) {
	null;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.moveTo = function(x,y) {
	null;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.curveTo = function(controlX,controlY,x,y) {
	null;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.toNativeAlpha = function(genericAlpa) {
	return null;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.toNativeColor = function(genericColor) {
	return null;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.toNativeRatio = function(genericRatio) {
	return null;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.toNativeCapStyle = function(genericCapStyle) {
	return null;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.toNativeJointStyle = function(genericJointStyle) {
	return null;
}
cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.__class__ = cocktail.domElement.abstract.AbstractGraphicDOMElement;
cocktail.domElement.js.GraphicDOMElement = function(nativeElement) { if( nativeElement === $_ ) return; {
	cocktail.domElement.abstract.AbstractGraphicDOMElement.call(this,nativeElement);
}}
cocktail.domElement.js.GraphicDOMElement.__name__ = ["cocktail","domElement","js","GraphicDOMElement"];
cocktail.domElement.js.GraphicDOMElement.__super__ = cocktail.domElement.abstract.AbstractGraphicDOMElement;
for(var k in cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype ) cocktail.domElement.js.GraphicDOMElement.prototype[k] = cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype[k];
cocktail.domElement.js.GraphicDOMElement.prototype.setWidth = function(value) {
	var canvasContext = this.getContext();
	var imageData = canvasContext.getImageData(0,0,this.getWidth(),this.getHeight());
	this._nativeElement.width = value;
	canvasContext.putImageData(imageData,0,0);
	return value;
}
cocktail.domElement.js.GraphicDOMElement.prototype.getWidth = function() {
	return Std.parseInt(this._nativeElement.width);
}
cocktail.domElement.js.GraphicDOMElement.prototype.setHeight = function(value) {
	var canvasContext = this.getContext();
	var imageData = canvasContext.getImageData(0,0,this.getWidth(),this.getHeight());
	this._nativeElement.height = value;
	canvasContext.putImageData(imageData,0,0);
	return value;
}
cocktail.domElement.js.GraphicDOMElement.prototype.getHeight = function() {
	return Std.parseInt(this._nativeElement.height);
}
cocktail.domElement.js.GraphicDOMElement.prototype.beginFill = function(fillStyle,lineStyle) {
	cocktail.domElement.abstract.AbstractGraphicDOMElement.prototype.beginFill.call(this,fillStyle,lineStyle);
	if(fillStyle == null) {
		fillStyle = cocktail.domElement.FillStyleValue.none;
	}
	if(lineStyle == null) {
		lineStyle = cocktail.domElement.LineStyleValue.none;
	}
	this.setFillStyle(fillStyle);
	this.setLineStyle(lineStyle);
	var canvasContext = this.getContext();
	canvasContext.beginPath();
}
cocktail.domElement.js.GraphicDOMElement.prototype.endFill = function() {
	var canvasContext = this.getContext();
	canvasContext.closePath();
	canvasContext.fill();
	canvasContext.stroke();
}
cocktail.domElement.js.GraphicDOMElement.prototype.clear = function() {
	var canvasContext = this.getContext();
	canvasContext.clearRect(0,0,this.getWidth(),this.getHeight());
}
cocktail.domElement.js.GraphicDOMElement.prototype.setFillStyle = function(fillStyle) {
	var canvasContext = this.getContext();
	var $e = fillStyle;
	switch( $e[1] ) {
	case 0:
	{
		canvasContext.fillStyle = "rgba(0,0,0,0)";
	}break;
	case 1:
	var colorStop = $e[2];
	{
		canvasContext.fillStyle = this.colorStopToRGBA(colorStop);
	}break;
	case 2:
	var gradientStyle = $e[2];
	{
		canvasContext.fillStyle = this.getGradient(gradientStyle);
	}break;
	case 3:
	var repeat = $e[3], imageDOMElement = $e[2];
	{
		canvasContext.fillStyle = this.getCanvasPattern(imageDOMElement,repeat);
	}break;
	}
}
cocktail.domElement.js.GraphicDOMElement.prototype.setLineStyle = function(lineStyle) {
	var canvasContext = this.getContext();
	var $e = lineStyle;
	switch( $e[1] ) {
	case 0:
	{
		canvasContext.strokeStyle = "rgba(0,0,0,0)";
	}break;
	case 1:
	var lineStyleData = $e[3], colorStop = $e[2];
	{
		this.initLineStyle(lineStyleData);
		canvasContext.strokeStyle = this.colorStopToRGBA(colorStop);
	}break;
	case 2:
	var lineStyleData = $e[3], gradientStyle = $e[2];
	{
		this.initLineStyle(lineStyleData);
		canvasContext.strokeStyle = this.getGradient(gradientStyle);
	}break;
	case 3:
	var repeat = $e[4], lineStyleData = $e[3], imageDOMElement = $e[2];
	{
		this.initLineStyle(lineStyleData);
		canvasContext.strokeStyle = this.getCanvasPattern(imageDOMElement,repeat);
	}break;
	}
}
cocktail.domElement.js.GraphicDOMElement.prototype.drawImage = function(source,destinationPoint,sourceRect) {
	if(destinationPoint == null) {
		destinationPoint = { x : 0.0, y : 0.0};
	}
	if(sourceRect == null) {
		var width = source.getWidth();
		var height = source.getHeight();
		sourceRect = { x : 0.0, y : 0.0, width : width, height : height};
	}
	var canvasContext = this.getContext();
	canvasContext.drawImage(source.getNativeElement(),sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destinationPoint.x,destinationPoint.y,sourceRect.width,sourceRect.height);
}
cocktail.domElement.js.GraphicDOMElement.prototype.lineTo = function(x,y) {
	var canvasContext = this.getContext();
	canvasContext.lineTo(x,y);
}
cocktail.domElement.js.GraphicDOMElement.prototype.moveTo = function(x,y) {
	var canvasContext = this.getContext();
	canvasContext.moveTo(x,y);
}
cocktail.domElement.js.GraphicDOMElement.prototype.curveTo = function(controlX,controlY,x,y) {
	var canvasContext = this.getContext();
	canvasContext.quadraticCurveTo(controlX,controlY,x,y);
}
cocktail.domElement.js.GraphicDOMElement.prototype.toNativeAlpha = function(genericAlpha) {
	return genericAlpha * 0.01;
}
cocktail.domElement.js.GraphicDOMElement.prototype.toNativeRatio = function(genericRatio) {
	return genericRatio * 0.01;
}
cocktail.domElement.js.GraphicDOMElement.prototype.toNativeCapStyle = function(genericCapStyle) {
	var capStyle = "";
	var $e = genericCapStyle;
	switch( $e[1] ) {
	case 2:
	{
		capStyle = "round";
	}break;
	case 1:
	{
		capStyle = "square";
	}break;
	case 0:
	{
		capStyle = "butt";
	}break;
	}
	return capStyle;
}
cocktail.domElement.js.GraphicDOMElement.prototype.toNativeJointStyle = function(genericJointStyle) {
	var jointStyle = "";
	var $e = genericJointStyle;
	switch( $e[1] ) {
	case 0:
	{
		jointStyle = "miter";
	}break;
	case 1:
	{
		jointStyle = "round";
	}break;
	case 2:
	{
		jointStyle = "bevel";
	}break;
	}
	return jointStyle;
}
cocktail.domElement.js.GraphicDOMElement.prototype.colorStopToRGBA = function(colorStop) {
	var rgb = this.hexToRGB(this.getHexColor(colorStop.color));
	return "rgba(" + rgb.red + "," + rgb.green + "," + rgb.blue + "," + this.toNativeAlpha(colorStop.alpha) + ")";
}
cocktail.domElement.js.GraphicDOMElement.prototype.getHexColor = function(color) {
	var hexColor = StringTools.hex(color);
	while(hexColor.length < 6) {
		hexColor = "0" + hexColor;
	}
	return "#" + hexColor;
}
cocktail.domElement.js.GraphicDOMElement.prototype.hexToRGB = function(hex) {
	var hexCopy = hex;
	var hexCopy1 = hexCopy.substr(1);
	var rgb = { red : Std.parseInt("0x" + hexCopy1.substr(0,2)), green : Std.parseInt("0x" + hexCopy1.substr(2,2)), blue : Std.parseInt("0x" + hexCopy1.substr(4,2))};
	return rgb;
}
cocktail.domElement.js.GraphicDOMElement.prototype.initLineStyle = function(lineStyleData) {
	var canvasContext = this.getContext();
	canvasContext.lineWidth = lineStyleData.thickness;
	canvasContext.lineCap = this.toNativeCapStyle(lineStyleData.capStyle);
	canvasContext.lineJoin = this.toNativeJointStyle(lineStyleData.jointStyle);
	canvasContext.miterLimit = lineStyleData.miterLimit;
}
cocktail.domElement.js.GraphicDOMElement.prototype.getContext = function() {
	return this._nativeElement.getContext("2d");
}
cocktail.domElement.js.GraphicDOMElement.prototype.getCanvasPattern = function(imageDOMElement,repeat) {
	var canvasContext = this.getContext();
	var repeatValue = "";
	if(repeat == true) {
		repeatValue = "repeat";
	}
	else {
		repeatValue = "no-repeat";
	}
	return canvasContext.createPattern(imageDOMElement.getNativeElement(),repeatValue);
}
cocktail.domElement.js.GraphicDOMElement.prototype.getGradient = function(gradientStyle) {
	var gradient = { };
	var canvasContext = this.getContext();
	var $e = gradientStyle.gradientType;
	switch( $e[1] ) {
	case 0:
	{
		var gradientRadRotation = gradientStyle.rotation / 180 * Math.PI;
		var xStart = 0;
		var yStart = this.getHeight() / 2;
		var xEnd = this.getWidth();
		var yEnd = this.getHeight() / 2;
		xStart -= this.getWidth() / 2;
		yStart -= this.getHeight() / 2;
		var rotatedStartX = xStart * Math.cos(gradientRadRotation) - yStart * Math.sin(gradientRadRotation);
		var rotatedStartY = xStart * Math.sin(gradientRadRotation) + yStart * Math.cos(gradientRadRotation);
		rotatedStartX += this.getWidth() / 2;
		rotatedStartY += this.getHeight() / 2;
		xEnd -= this.getWidth() / 2;
		yEnd -= this.getHeight() / 2;
		var rotatedEndX = xEnd * Math.cos(gradientRadRotation) - yEnd * Math.sin(gradientRadRotation);
		var rotatedEndY = xEnd * Math.sin(gradientRadRotation) + yEnd * Math.cos(gradientRadRotation);
		rotatedEndX += this.getWidth() / 2;
		rotatedEndY += this.getHeight() / 2;
		gradient = canvasContext.createLinearGradient(rotatedStartX,rotatedStartY,rotatedEndX,rotatedEndY);
	}break;
	case 1:
	{
		gradient = canvasContext.createRadialGradient(this.getWidth() / 2,this.getHeight() / 2,this.getWidth() / 4,this.getWidth() / 2,this.getHeight() / 2,this.getHeight() / 2);
	}break;
	}
	var gradientStops = gradientStyle.gradientStops;
	{
		var _g1 = 0, _g = gradientStops.length;
		while(_g1 < _g) {
			var i = _g1++;
			gradient.addColorStop(this.toNativeRatio(gradientStops[i].ratio),this.colorStopToRGBA(gradientStops[i].colorStop));
		}
	}
	return gradient;
}
cocktail.domElement.js.GraphicDOMElement.prototype.__class__ = cocktail.domElement.js.GraphicDOMElement;
cocktail.domElement.js.ContainerDOMElement = function(nativeElement) { if( nativeElement === $_ ) return; {
	cocktail.domElement.abstract.AbstractContainerDOMElement.call(this,nativeElement);
}}
cocktail.domElement.js.ContainerDOMElement.__name__ = ["cocktail","domElement","js","ContainerDOMElement"];
cocktail.domElement.js.ContainerDOMElement.__super__ = cocktail.domElement.abstract.AbstractContainerDOMElement;
for(var k in cocktail.domElement.abstract.AbstractContainerDOMElement.prototype ) cocktail.domElement.js.ContainerDOMElement.prototype[k] = cocktail.domElement.abstract.AbstractContainerDOMElement.prototype[k];
cocktail.domElement.js.ContainerDOMElement.prototype.addChild = function(domElement) {
	cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.addChild.call(this,domElement);
	this._nativeElement.appendChild(domElement.getNativeElement());
	domElement.getNativeElement().style.zIndex = this._children.length - 1;
}
cocktail.domElement.js.ContainerDOMElement.prototype.removeChild = function(domElement) {
	cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.removeChild.call(this,domElement);
	this._nativeElement.removeChild(domElement.getNativeElement());
}
cocktail.domElement.js.ContainerDOMElement.prototype.addText = function(text) {
	cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.addText.call(this,text);
	this.getNativeElement().appendChild(text);
}
cocktail.domElement.js.ContainerDOMElement.prototype.removeText = function(text) {
	cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.removeText.call(this,text);
	this._nativeElement.removeChild(text);
}
cocktail.domElement.js.ContainerDOMElement.prototype.setSemantic = function(semantic) {
	cocktail.domElement.abstract.AbstractContainerDOMElement.prototype.setSemantic.call(this,semantic);
	var currentNativeElementContent = this._nativeElement.innerHTML;
	var currentNativeElementAttributes = this._nativeElement.attributes;
	var newNativeElement = cocktail.nativeElement.NativeElementManager.createNativeElement(cocktail.nativeElement.NativeElementTypeValue.custom(semantic));
	newNativeElement.innerHTML = currentNativeElementContent;
	{
		var _g1 = 0, _g = currentNativeElementAttributes.length;
		while(_g1 < _g) {
			var i = _g1++;
			newNativeElement.setAttribute(currentNativeElementAttributes[i].nodeName,currentNativeElementAttributes[i].nodeValue);
		}
	}
	this._nativeElement.parentNode.replaceChild(newNativeElement,this._nativeElement);
	this._nativeElement = newNativeElement;
	return semantic;
}
cocktail.domElement.js.ContainerDOMElement.prototype.__class__ = cocktail.domElement.js.ContainerDOMElement;
utest.ui.common.ClassResult = function(className,setupName,teardownName) { if( className === $_ ) return; {
	this.fixtures = new Hash();
	this.className = className;
	this.setupName = setupName;
	this.hasSetup = setupName != null;
	this.teardownName = teardownName;
	this.hasTeardown = teardownName != null;
	this.methods = 0;
	this.stats = new utest.ui.common.ResultStats();
}}
utest.ui.common.ClassResult.__name__ = ["utest","ui","common","ClassResult"];
utest.ui.common.ClassResult.prototype.fixtures = null;
utest.ui.common.ClassResult.prototype.className = null;
utest.ui.common.ClassResult.prototype.setupName = null;
utest.ui.common.ClassResult.prototype.teardownName = null;
utest.ui.common.ClassResult.prototype.hasSetup = null;
utest.ui.common.ClassResult.prototype.hasTeardown = null;
utest.ui.common.ClassResult.prototype.methods = null;
utest.ui.common.ClassResult.prototype.stats = null;
utest.ui.common.ClassResult.prototype.add = function(result) {
	if(this.fixtures.exists(result.methodName)) throw "invalid duplicated fixture result";
	this.stats.wire(result.stats);
	this.methods++;
	this.fixtures.set(result.methodName,result);
}
utest.ui.common.ClassResult.prototype.get = function(method) {
	return this.fixtures.get(method);
}
utest.ui.common.ClassResult.prototype.exists = function(method) {
	return this.fixtures.exists(method);
}
utest.ui.common.ClassResult.prototype.methodNames = function(errorsHavePriority) {
	if(errorsHavePriority == null) errorsHavePriority = true;
	var names = [];
	{ var $it0 = this.fixtures.keys();
	while( $it0.hasNext() ) { var name = $it0.next();
	names.push(name);
	}}
	if(errorsHavePriority) {
		var me = this;
		names.sort(function(a,b) {
			var $as = me.get(a).stats;
			var bs = me.get(b).stats;
			if($as.hasErrors) {
				return !bs.hasErrors?-1:$as.errors == bs.errors?Reflect.compare(a,b):Reflect.compare($as.errors,bs.errors);
			}
			else if(bs.hasErrors) {
				return 1;
			}
			else if($as.hasFailures) {
				return !bs.hasFailures?-1:$as.failures == bs.failures?Reflect.compare(a,b):Reflect.compare($as.failures,bs.failures);
			}
			else if(bs.hasFailures) {
				return 1;
			}
			else if($as.hasWarnings) {
				return !bs.hasWarnings?-1:$as.warnings == bs.warnings?Reflect.compare(a,b):Reflect.compare($as.warnings,bs.warnings);
			}
			else if(bs.hasWarnings) {
				return 1;
			}
			else {
				return Reflect.compare(a,b);
			}
		});
	}
	else {
		names.sort(function(a,b) {
			return Reflect.compare(a,b);
		});
	}
	return names;
}
utest.ui.common.ClassResult.prototype.__class__ = utest.ui.common.ClassResult;
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	return haxe.Stack.makeStack("$s");
}
haxe.Stack.exceptionStack = function() {
	return haxe.Stack.makeStack("$e");
}
haxe.Stack.toString = function(stack) {
	var b = new StringBuf();
	{
		var _g = 0;
		while(_g < stack.length) {
			var s = stack[_g];
			++_g;
			b.b[b.b.length] = "\nCalled from ";
			haxe.Stack.itemToString(b,s);
		}
	}
	return b.b.join("");
}
haxe.Stack.itemToString = function(b,s) {
	var $e = s;
	switch( $e[1] ) {
	case 0:
	{
		b.b[b.b.length] = "a C function";
	}break;
	case 1:
	var m = $e[2];
	{
		b.b[b.b.length] = "module ";
		b.b[b.b.length] = m;
	}break;
	case 2:
	var line = $e[4], file = $e[3], s1 = $e[2];
	{
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b[b.b.length] = " (";
		}
		b.b[b.b.length] = file;
		b.b[b.b.length] = " line ";
		b.b[b.b.length] = line;
		if(s1 != null) b.b[b.b.length] = ")";
	}break;
	case 3:
	var meth = $e[3], cname = $e[2];
	{
		b.b[b.b.length] = cname;
		b.b[b.b.length] = ".";
		b.b[b.b.length] = meth;
	}break;
	case 4:
	var n = $e[2];
	{
		b.b[b.b.length] = "local function #";
		b.b[b.b.length] = n;
	}break;
	}
}
haxe.Stack.makeStack = function(s) {
	var a = (function($this) {
		var $r;
		try {
			$r = eval(s);
		}
		catch( $e0 ) {
			{
				var e = $e0;
				$r = [];
			}
		}
		return $r;
	}(this));
	var m = new Array();
	{
		var _g1 = 0, _g = a.length - (s == "$s"?2:0);
		while(_g1 < _g) {
			var i = _g1++;
			var d = a[i].split("::");
			m.unshift(haxe.StackItem.Method(d[0],d[1]));
		}
	}
	return m;
}
haxe.Stack.prototype.__class__ = haxe.Stack;
if(!cocktail.style.positioner) cocktail.style.positioner = {}
cocktail.style.positioner.BoxPositioner = function(p) { if( p === $_ ) return; {
	null;
}}
cocktail.style.positioner.BoxPositioner.__name__ = ["cocktail","style","positioner","BoxPositioner"];
cocktail.style.positioner.BoxPositioner.prototype.position = function(domElement,containingDOMElementDimensions) {
	domElement.setGlobalX(containingDOMElementDimensions.globalX);
	domElement.setGlobalY(containingDOMElementDimensions.globalY);
	this.applyOffset(domElement,containingDOMElementDimensions);
}
cocktail.style.positioner.BoxPositioner.prototype.applyOffset = function(domElement,containingDOMElementDimensions) {
	if(domElement.getStyle().getLeft() != cocktail.style.PositionOffsetStyleValue.auto) {
		{
			var _g = domElement;
			_g.setX(_g.getX() + domElement.getStyle().getComputedStyle().left);
		}
	}
	else if(domElement.getStyle().getRight() != cocktail.style.PositionOffsetStyleValue.auto) {
		domElement.setX(containingDOMElementDimensions.width - domElement.getStyle().getComputedStyle().width);
		{
			var _g = domElement;
			_g.setX(_g.getX() - domElement.getStyle().getComputedStyle().right);
		}
	}
	if(domElement.getStyle().getTop() != cocktail.style.PositionOffsetStyleValue.auto) {
		{
			var _g = domElement;
			_g.setY(_g.getY() + domElement.getStyle().getComputedStyle().top);
		}
	}
	else if(domElement.getStyle().getBottom() != cocktail.style.PositionOffsetStyleValue.auto) {
		domElement.setY(containingDOMElementDimensions.height - domElement.getStyle().getComputedStyle().height);
		{
			var _g = domElement;
			_g.setY(_g.getY() - domElement.getStyle().getComputedStyle().bottom);
		}
	}
}
cocktail.style.positioner.BoxPositioner.prototype.__class__ = cocktail.style.positioner.BoxPositioner;
cocktail.style.positioner.FixedPositioner = function(p) { if( p === $_ ) return; {
	cocktail.style.positioner.BoxPositioner.call(this);
}}
cocktail.style.positioner.FixedPositioner.__name__ = ["cocktail","style","positioner","FixedPositioner"];
cocktail.style.positioner.FixedPositioner.__super__ = cocktail.style.positioner.BoxPositioner;
for(var k in cocktail.style.positioner.BoxPositioner.prototype ) cocktail.style.positioner.FixedPositioner.prototype[k] = cocktail.style.positioner.BoxPositioner.prototype[k];
cocktail.style.positioner.FixedPositioner.prototype.__class__ = cocktail.style.positioner.FixedPositioner;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	}
	catch( $e0 ) {
		{
			var err = $e0;
			{
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = Type.getEnumConstructs(e)[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	return e.__constructs__;
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":{
		return ValueType.TBool;
	}break;
	case "string":{
		return ValueType.TClass(String);
	}break;
	case "number":{
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	}break;
	case "object":{
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	}break;
	case "function":{
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	}break;
	case "undefined":{
		return ValueType.TNull;
	}break;
	default:{
		return ValueType.TUnknown;
	}break;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		{
			var _g1 = 2, _g = a.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Type.enumEq(a[i],b[i])) return false;
			}
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				return false;
			}
		}
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
cocktail.style.computer.PositionComputer = function(p) { if( p === $_ ) return; {
	null;
}}
cocktail.style.computer.PositionComputer.__name__ = ["cocktail","style","computer","PositionComputer"];
cocktail.style.computer.PositionComputer.compute = function(style) {
	var computedStyle = style.getComputedStyle();
	computedStyle.position = cocktail.style.computer.PositionComputer.getComputedPosition(style);
	computedStyle["float"] = cocktail.style.computer.PositionComputer.getComputedFloat(style,computedStyle.position);
	computedStyle.display = cocktail.style.computer.PositionComputer.getComputedDisplay(style,computedStyle["float"]);
	computedStyle.clear = cocktail.style.computer.PositionComputer.getComputedClear(style,computedStyle.position,computedStyle.display);
}
cocktail.style.computer.PositionComputer.getComputedPosition = function(style) {
	return style.getPosition();
}
cocktail.style.computer.PositionComputer.getComputedDisplay = function(style,computedFloat) {
	var ret;
	if(computedFloat != cocktail.style.FloatStyleValue.none) {
		var $e = style.getDisplay();
		switch( $e[1] ) {
		case 2:
		case 1:
		{
			ret = cocktail.style.DisplayStyleValue.block;
		}break;
		default:{
			ret = style.getDisplay();
		}break;
		}
	}
	else {
		ret = style.getDisplay();
	}
	return ret;
}
cocktail.style.computer.PositionComputer.getComputedFloat = function(style,computedPosition) {
	var ret;
	if(computedPosition == cocktail.style.PositionStyleValue.absolute || computedPosition == cocktail.style.PositionStyleValue.fixed) {
		ret = cocktail.style.FloatStyleValue.none;
	}
	else {
		ret = style.getFloat();
	}
	return ret;
}
cocktail.style.computer.PositionComputer.getComputedClear = function(style,computedPosition,computedDisplay) {
	var ret;
	if(computedDisplay == cocktail.style.DisplayStyleValue._inline || computedDisplay == cocktail.style.DisplayStyleValue.inlineBlock) {
		ret = cocktail.style.ClearStyleValue.none;
	}
	else if(computedPosition == cocktail.style.PositionStyleValue.absolute || computedPosition == cocktail.style.PositionStyleValue.fixed) {
		ret = cocktail.style.ClearStyleValue.none;
	}
	else {
		ret = style.getClear();
	}
	return ret;
}
cocktail.style.computer.PositionComputer.prototype.__class__ = cocktail.style.computer.PositionComputer;
cocktail.style.computer.InLineBoxComputer = function(p) { if( p === $_ ) return; {
	cocktail.style.computer.BoxComputer.call(this);
}}
cocktail.style.computer.InLineBoxComputer.__name__ = ["cocktail","style","computer","InLineBoxComputer"];
cocktail.style.computer.InLineBoxComputer.__super__ = cocktail.style.computer.BoxComputer;
for(var k in cocktail.style.computer.BoxComputer.prototype ) cocktail.style.computer.InLineBoxComputer.prototype[k] = cocktail.style.computer.BoxComputer.prototype[k];
cocktail.style.computer.InLineBoxComputer.prototype.getComputedMargin = function(marginStyleValue,opositeMarginStyleValue,containingDOMElementDimension,computedDimension,isDimensionAuto,computedPaddingsDimension,isHorizontalMargin) {
	if(isHorizontalMargin == null) isHorizontalMargin = false;
	var computedMargin;
	var $e = marginStyleValue;
	switch( $e[1] ) {
	case 0:
	var value = $e[2];
	{
		computedMargin = this.getValueFromLength(value);
	}break;
	case 1:
	var value = $e[2];
	{
		if(containingDOMElementDimension == cocktail.style.computer.InLineBoxComputer.NULL) {
			computedMargin = 0;
		}
		else {
			computedMargin = this.getValueFromPercent(value,containingDOMElementDimension);
		}
	}break;
	case 2:
	{
		computedMargin = 0;
	}break;
	}
	return computedMargin;
}
cocktail.style.computer.InLineBoxComputer.prototype.getComputedWidth = function(style,containingDOMElementDimensions) {
	return 0;
}
cocktail.style.computer.InLineBoxComputer.prototype.getComputedHeight = function(style,containingDOMElementDimensions) {
	return 0;
}
cocktail.style.computer.InLineBoxComputer.prototype.__class__ = cocktail.style.computer.InLineBoxComputer;
cocktail.style.js.ContainerStyle = function(domElement) { if( domElement === $_ ) return; {
	cocktail.style.abstract.AbstractContainerStyle.call(this,domElement);
}}
cocktail.style.js.ContainerStyle.__name__ = ["cocktail","style","js","ContainerStyle"];
cocktail.style.js.ContainerStyle.__super__ = cocktail.style.abstract.AbstractContainerStyle;
for(var k in cocktail.style.abstract.AbstractContainerStyle.prototype ) cocktail.style.js.ContainerStyle.prototype[k] = cocktail.style.abstract.AbstractContainerStyle.prototype[k];
cocktail.style.js.ContainerStyle.prototype.layout = function(containingDOMElementDimensions,lastPositionedDOMElement,rootDOMElement) {
	null;
}
cocktail.style.js.ContainerStyle.prototype.__class__ = cocktail.style.js.ContainerStyle;
cocktail.style.formatter.BlockFormattingContext = function(domElement,previousFormattingContext) { if( domElement === $_ ) return; {
	cocktail.style.formatter.FormattingContext.call(this,domElement,previousFormattingContext);
}}
cocktail.style.formatter.BlockFormattingContext.__name__ = ["cocktail","style","formatter","BlockFormattingContext"];
cocktail.style.formatter.BlockFormattingContext.__super__ = cocktail.style.formatter.FormattingContext;
for(var k in cocktail.style.formatter.FormattingContext.prototype ) cocktail.style.formatter.BlockFormattingContext.prototype[k] = cocktail.style.formatter.FormattingContext.prototype[k];
cocktail.style.formatter.BlockFormattingContext.prototype.place = function(domElement) {
	cocktail.style.formatter.FormattingContext.prototype.place.call(this,domElement);
	var leftFloatOffset = 0;
	if(domElement.getStyle().isEmbedded() == true) {
		this._flowData.y = this._floatsManager.getFirstAvailableY(this.getFlowData(),domElement.getOffsetWidth());
		leftFloatOffset = this._floatsManager.getLeftFloatOffset(this._flowData.y + domElement.getStyle().getComputedStyle().marginTop);
	}
	this._flowData.x = this._flowData.firstLineX + leftFloatOffset;
	domElement.setX(this._flowData.x + domElement.getStyle().getComputedStyle().marginLeft);
	domElement.setY(this._flowData.y + this._flowData.maxLineHeight + domElement.getStyle().getComputedStyle().marginTop);
	this._flowData.y += domElement.getOffsetHeight();
	this._flowData.totalHeight = this._flowData.y + this._flowData.maxLineHeight;
	this._flowData.maxLineHeight = 0;
}
cocktail.style.formatter.BlockFormattingContext.prototype.placeFloat = function(domElement,floatData) {
	domElement.setX(floatData.x + domElement.getStyle().getComputedStyle().marginLeft);
	domElement.setY(floatData.y + domElement.getStyle().getComputedStyle().marginTop);
	this._flowData.y = floatData.y;
}
cocktail.style.formatter.BlockFormattingContext.prototype.clearFloat = function(clear) {
	this._flowData.y = this._floatsManager.clearFloat(clear,this._flowData);
}
cocktail.style.formatter.BlockFormattingContext.prototype.__class__ = cocktail.style.formatter.BlockFormattingContext;
cocktail.keyboard.KeyboardKeyValue = { __ename__ : ["cocktail","keyboard","KeyboardKeyValue"], __constructs__ : ["unknown","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","backSpace","capsLock","control","delete","down","end","escape","enter","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15","home","insert","left","numpad0","numpad1","numpad2","numpad3","numpad4","numpad5","numpad6","numpad7","numpad8","numpad9","numpadAdd","numpadSpecial","numpadDecimal","numpadDivide","numpadEnter","numpadMultiply","numpadSubstract","pageDown","pageUp","right","shift","space","tab","up"] }
cocktail.keyboard.KeyboardKeyValue.unknown = ["unknown",0];
cocktail.keyboard.KeyboardKeyValue.unknown.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.unknown.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.a = ["a",1];
cocktail.keyboard.KeyboardKeyValue.a.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.a.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.b = ["b",2];
cocktail.keyboard.KeyboardKeyValue.b.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.b.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.c = ["c",3];
cocktail.keyboard.KeyboardKeyValue.c.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.c.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.d = ["d",4];
cocktail.keyboard.KeyboardKeyValue.d.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.d.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.e = ["e",5];
cocktail.keyboard.KeyboardKeyValue.e.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.e.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.f = ["f",6];
cocktail.keyboard.KeyboardKeyValue.f.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.f.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.g = ["g",7];
cocktail.keyboard.KeyboardKeyValue.g.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.g.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.h = ["h",8];
cocktail.keyboard.KeyboardKeyValue.h.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.h.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.i = ["i",9];
cocktail.keyboard.KeyboardKeyValue.i.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.i.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.j = ["j",10];
cocktail.keyboard.KeyboardKeyValue.j.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.j.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.k = ["k",11];
cocktail.keyboard.KeyboardKeyValue.k.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.k.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.l = ["l",12];
cocktail.keyboard.KeyboardKeyValue.l.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.l.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.m = ["m",13];
cocktail.keyboard.KeyboardKeyValue.m.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.m.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.n = ["n",14];
cocktail.keyboard.KeyboardKeyValue.n.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.n.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.o = ["o",15];
cocktail.keyboard.KeyboardKeyValue.o.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.o.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.p = ["p",16];
cocktail.keyboard.KeyboardKeyValue.p.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.p.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.q = ["q",17];
cocktail.keyboard.KeyboardKeyValue.q.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.q.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.r = ["r",18];
cocktail.keyboard.KeyboardKeyValue.r.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.r.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.s = ["s",19];
cocktail.keyboard.KeyboardKeyValue.s.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.s.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.t = ["t",20];
cocktail.keyboard.KeyboardKeyValue.t.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.t.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.u = ["u",21];
cocktail.keyboard.KeyboardKeyValue.u.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.u.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.v = ["v",22];
cocktail.keyboard.KeyboardKeyValue.v.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.v.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.w = ["w",23];
cocktail.keyboard.KeyboardKeyValue.w.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.w.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.x = ["x",24];
cocktail.keyboard.KeyboardKeyValue.x.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.x.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.y = ["y",25];
cocktail.keyboard.KeyboardKeyValue.y.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.y.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.z = ["z",26];
cocktail.keyboard.KeyboardKeyValue.z.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.z.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.backSpace = ["backSpace",27];
cocktail.keyboard.KeyboardKeyValue.backSpace.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.backSpace.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.capsLock = ["capsLock",28];
cocktail.keyboard.KeyboardKeyValue.capsLock.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.capsLock.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.control = ["control",29];
cocktail.keyboard.KeyboardKeyValue.control.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.control.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue["delete"] = ["delete",30];
cocktail.keyboard.KeyboardKeyValue["delete"].toString = $estr;
cocktail.keyboard.KeyboardKeyValue["delete"].__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.down = ["down",31];
cocktail.keyboard.KeyboardKeyValue.down.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.down.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.end = ["end",32];
cocktail.keyboard.KeyboardKeyValue.end.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.end.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.escape = ["escape",33];
cocktail.keyboard.KeyboardKeyValue.escape.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.escape.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.enter = ["enter",34];
cocktail.keyboard.KeyboardKeyValue.enter.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.enter.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F1 = ["F1",35];
cocktail.keyboard.KeyboardKeyValue.F1.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F1.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F2 = ["F2",36];
cocktail.keyboard.KeyboardKeyValue.F2.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F2.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F3 = ["F3",37];
cocktail.keyboard.KeyboardKeyValue.F3.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F3.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F4 = ["F4",38];
cocktail.keyboard.KeyboardKeyValue.F4.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F4.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F5 = ["F5",39];
cocktail.keyboard.KeyboardKeyValue.F5.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F5.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F6 = ["F6",40];
cocktail.keyboard.KeyboardKeyValue.F6.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F6.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F7 = ["F7",41];
cocktail.keyboard.KeyboardKeyValue.F7.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F7.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F8 = ["F8",42];
cocktail.keyboard.KeyboardKeyValue.F8.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F8.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F9 = ["F9",43];
cocktail.keyboard.KeyboardKeyValue.F9.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F9.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F10 = ["F10",44];
cocktail.keyboard.KeyboardKeyValue.F10.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F10.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F11 = ["F11",45];
cocktail.keyboard.KeyboardKeyValue.F11.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F11.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F12 = ["F12",46];
cocktail.keyboard.KeyboardKeyValue.F12.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F12.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F13 = ["F13",47];
cocktail.keyboard.KeyboardKeyValue.F13.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F13.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F14 = ["F14",48];
cocktail.keyboard.KeyboardKeyValue.F14.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F14.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.F15 = ["F15",49];
cocktail.keyboard.KeyboardKeyValue.F15.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.F15.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.home = ["home",50];
cocktail.keyboard.KeyboardKeyValue.home.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.home.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.insert = ["insert",51];
cocktail.keyboard.KeyboardKeyValue.insert.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.insert.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.left = ["left",52];
cocktail.keyboard.KeyboardKeyValue.left.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.left.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpad0 = ["numpad0",53];
cocktail.keyboard.KeyboardKeyValue.numpad0.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpad0.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpad1 = ["numpad1",54];
cocktail.keyboard.KeyboardKeyValue.numpad1.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpad1.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpad2 = ["numpad2",55];
cocktail.keyboard.KeyboardKeyValue.numpad2.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpad2.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpad3 = ["numpad3",56];
cocktail.keyboard.KeyboardKeyValue.numpad3.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpad3.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpad4 = ["numpad4",57];
cocktail.keyboard.KeyboardKeyValue.numpad4.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpad4.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpad5 = ["numpad5",58];
cocktail.keyboard.KeyboardKeyValue.numpad5.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpad5.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpad6 = ["numpad6",59];
cocktail.keyboard.KeyboardKeyValue.numpad6.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpad6.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpad7 = ["numpad7",60];
cocktail.keyboard.KeyboardKeyValue.numpad7.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpad7.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpad8 = ["numpad8",61];
cocktail.keyboard.KeyboardKeyValue.numpad8.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpad8.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpad9 = ["numpad9",62];
cocktail.keyboard.KeyboardKeyValue.numpad9.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpad9.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpadAdd = ["numpadAdd",63];
cocktail.keyboard.KeyboardKeyValue.numpadAdd.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpadAdd.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpadSpecial = ["numpadSpecial",64];
cocktail.keyboard.KeyboardKeyValue.numpadSpecial.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpadSpecial.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpadDecimal = ["numpadDecimal",65];
cocktail.keyboard.KeyboardKeyValue.numpadDecimal.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpadDecimal.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpadDivide = ["numpadDivide",66];
cocktail.keyboard.KeyboardKeyValue.numpadDivide.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpadDivide.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpadEnter = ["numpadEnter",67];
cocktail.keyboard.KeyboardKeyValue.numpadEnter.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpadEnter.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpadMultiply = ["numpadMultiply",68];
cocktail.keyboard.KeyboardKeyValue.numpadMultiply.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpadMultiply.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.numpadSubstract = ["numpadSubstract",69];
cocktail.keyboard.KeyboardKeyValue.numpadSubstract.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.numpadSubstract.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.pageDown = ["pageDown",70];
cocktail.keyboard.KeyboardKeyValue.pageDown.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.pageDown.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.pageUp = ["pageUp",71];
cocktail.keyboard.KeyboardKeyValue.pageUp.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.pageUp.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.right = ["right",72];
cocktail.keyboard.KeyboardKeyValue.right.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.right.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.shift = ["shift",73];
cocktail.keyboard.KeyboardKeyValue.shift.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.shift.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.space = ["space",74];
cocktail.keyboard.KeyboardKeyValue.space.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.space.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.tab = ["tab",75];
cocktail.keyboard.KeyboardKeyValue.tab.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.tab.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.keyboard.KeyboardKeyValue.up = ["up",76];
cocktail.keyboard.KeyboardKeyValue.up.toString = $estr;
cocktail.keyboard.KeyboardKeyValue.up.__enum__ = cocktail.keyboard.KeyboardKeyValue;
cocktail.style.positioner.AbsolutePositioner = function(p) { if( p === $_ ) return; {
	cocktail.style.positioner.BoxPositioner.call(this);
}}
cocktail.style.positioner.AbsolutePositioner.__name__ = ["cocktail","style","positioner","AbsolutePositioner"];
cocktail.style.positioner.AbsolutePositioner.__super__ = cocktail.style.positioner.BoxPositioner;
for(var k in cocktail.style.positioner.BoxPositioner.prototype ) cocktail.style.positioner.AbsolutePositioner.prototype[k] = cocktail.style.positioner.BoxPositioner.prototype[k];
cocktail.style.positioner.AbsolutePositioner.prototype.__class__ = cocktail.style.positioner.AbsolutePositioner;
utest.Runner = function(p) { if( p === $_ ) return; {
	this.fixtures = new Array();
	this.onProgress = new utest.Dispatcher();
	this.onStart = new utest.Dispatcher();
	this.onComplete = new utest.Dispatcher();
	this.length = 0;
}}
utest.Runner.__name__ = ["utest","Runner"];
utest.Runner.prototype.fixtures = null;
utest.Runner.prototype.onProgress = null;
utest.Runner.prototype.onStart = null;
utest.Runner.prototype.onComplete = null;
utest.Runner.prototype.length = null;
utest.Runner.prototype.addCase = function(test,setup,teardown,prefix,pattern) {
	if(prefix == null) prefix = "test";
	if(teardown == null) teardown = "teardown";
	if(setup == null) setup = "setup";
	if(!Reflect.isObject(test)) throw "can't add a null object as a test case";
	if(!this.isMethod(test,setup)) setup = null;
	if(!this.isMethod(test,teardown)) teardown = null;
	var fields = Type.getInstanceFields(Type.getClass(test));
	if(pattern == null) {
		{
			var _g = 0;
			while(_g < fields.length) {
				var field = fields[_g];
				++_g;
				if(!StringTools.startsWith(field,prefix)) continue;
				if(!this.isMethod(test,field)) continue;
				this.addFixture(new utest.TestFixture(test,field,setup,teardown));
			}
		}
	}
	else {
		{
			var _g = 0;
			while(_g < fields.length) {
				var field = fields[_g];
				++_g;
				if(!pattern.match(field)) continue;
				if(!this.isMethod(test,field)) continue;
				this.addFixture(new utest.TestFixture(test,field,setup,teardown));
			}
		}
	}
}
utest.Runner.prototype.addFixture = function(fixture) {
	this.fixtures.push(fixture);
	this.length++;
}
utest.Runner.prototype.getFixture = function(index) {
	return this.fixtures[index];
}
utest.Runner.prototype.isMethod = function(test,name) {
	try {
		return Reflect.isFunction(Reflect.field(test,name));
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				return false;
			}
		}
	}
}
utest.Runner.prototype.pos = null;
utest.Runner.prototype.run = function() {
	this.pos = 0;
	this.onStart.dispatch(this);
	this.runNext();
}
utest.Runner.prototype.runNext = function() {
	if(this.fixtures.length > this.pos) this.runFixture(this.fixtures[this.pos++]);
	else this.onComplete.dispatch(this);
}
utest.Runner.prototype.runFixture = function(fixture) {
	var handler = new utest.TestHandler(fixture);
	handler.onComplete.add($closure(this,"testComplete"));
	handler.execute();
}
utest.Runner.prototype.testComplete = function(h) {
	this.onProgress.dispatch({ result : utest.TestResult.ofHandler(h), done : this.pos, totals : this.length});
	this.runNext();
}
utest.Runner.prototype.__class__ = utest.Runner;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e0 ) {
		{
			var e = $e0;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
				for(var i in o)
					if( o.hasOwnProperty(i) )
						a.push(i);
			;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
				for(var i in o)
					if( i != "__proto__" )
						a.push(i);
			;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
if(!cocktail.mouse) cocktail.mouse = {}
if(!cocktail.mouse["abstract"]) cocktail.mouse["abstract"] = {}
cocktail.mouse.abstract.AbstractMouse = function(nativeElement) { if( nativeElement === $_ ) return; {
	this.setNativeMouseListeners(nativeElement);
}}
cocktail.mouse.abstract.AbstractMouse.__name__ = ["cocktail","mouse","abstract","AbstractMouse"];
cocktail.mouse.abstract.AbstractMouse.prototype.onMouseDown = null;
cocktail.mouse.abstract.AbstractMouse.prototype.onMouseUp = null;
cocktail.mouse.abstract.AbstractMouse.prototype.onMouseOver = null;
cocktail.mouse.abstract.AbstractMouse.prototype.onMouseOut = null;
cocktail.mouse.abstract.AbstractMouse.prototype.onMouseMove = null;
cocktail.mouse.abstract.AbstractMouse.prototype.onMouseDoubleClick = null;
cocktail.mouse.abstract.AbstractMouse.prototype.setNativeMouseListeners = function(nativeElement) {
	null;
}
cocktail.mouse.abstract.AbstractMouse.prototype.unsetNativeMouseListeners = function(nativeElement) {
	null;
}
cocktail.mouse.abstract.AbstractMouse.prototype.onNativeMouseDown = function(event) {
	if(this.onMouseDown != null) {
		this.onMouseDown(this.getMouseData(event));
	}
}
cocktail.mouse.abstract.AbstractMouse.prototype.onNativeMouseUp = function(event) {
	if(this.onMouseUp != null) {
		this.onMouseUp(this.getMouseData(event));
	}
}
cocktail.mouse.abstract.AbstractMouse.prototype.onNativeMouseOver = function(event) {
	if(this.onMouseOver != null) {
		this.onMouseOver(this.getMouseData(event));
	}
}
cocktail.mouse.abstract.AbstractMouse.prototype.onNativeMouseOut = function(event) {
	if(this.onMouseOut != null) {
		this.onMouseOut(this.getMouseData(event));
	}
}
cocktail.mouse.abstract.AbstractMouse.prototype.onNativeMouseMove = function(event) {
	if(this.onMouseMove != null) {
		this.onMouseMove(this.getMouseData(event));
	}
}
cocktail.mouse.abstract.AbstractMouse.prototype.onNativeMouseDoubleClick = function(event) {
	if(this.onMouseDoubleClick != null) {
		this.onMouseDoubleClick(this.getMouseData(event));
	}
}
cocktail.mouse.abstract.AbstractMouse.prototype.getMouseData = function(event) {
	return null;
}
cocktail.mouse.abstract.AbstractMouse.prototype.__class__ = cocktail.mouse.abstract.AbstractMouse;
if(!cocktail.mouse.js) cocktail.mouse.js = {}
cocktail.mouse.js.Mouse = function(nativeElement) { if( nativeElement === $_ ) return; {
	cocktail.mouse.abstract.AbstractMouse.call(this,nativeElement);
}}
cocktail.mouse.js.Mouse.__name__ = ["cocktail","mouse","js","Mouse"];
cocktail.mouse.js.Mouse.__super__ = cocktail.mouse.abstract.AbstractMouse;
for(var k in cocktail.mouse.abstract.AbstractMouse.prototype ) cocktail.mouse.js.Mouse.prototype[k] = cocktail.mouse.abstract.AbstractMouse.prototype[k];
cocktail.mouse.js.Mouse.prototype.setNativeMouseListeners = function(nativeElement) {
	nativeElement.onmousedown = $closure(this,"onNativeMouseDown");
	nativeElement.onmouseup = $closure(this,"onNativeMouseUp");
	nativeElement.onmouseover = $closure(this,"onNativeMouseOver");
	nativeElement.onmouseout = $closure(this,"onNativeMouseOut");
	nativeElement.onmousemove = $closure(this,"onNativeMouseMove");
	nativeElement.ondblclick = $closure(this,"onNativeMouseDoubleClick");
}
cocktail.mouse.js.Mouse.prototype.unsetNativeMouseListeners = function(nativeElement) {
	nativeElement.onmousedown = null;
	nativeElement.onmouseup = null;
	nativeElement.onmouseover = null;
	nativeElement.onmouseout = null;
	nativeElement.onmousemove = null;
	nativeElement.ondblclick = null;
}
cocktail.mouse.js.Mouse.prototype.getMouseData = function(event) {
	var mousePosition = { localX : event.clientX, localY : event.clientY, globalX : event.screenX, globalY : event.screenY};
	var mouseEventData = { mousePosition : mousePosition, altKey : event.altKey, ctrlKey : event.ctrlKey, shiftKey : event.shiftKey};
	return mouseEventData;
}
cocktail.mouse.js.Mouse.prototype.__class__ = cocktail.mouse.js.Mouse;
cocktail.style.computer.FloatBoxComputer = function(p) { if( p === $_ ) return; {
	cocktail.style.computer.BoxComputer.call(this);
}}
cocktail.style.computer.FloatBoxComputer.__name__ = ["cocktail","style","computer","FloatBoxComputer"];
cocktail.style.computer.FloatBoxComputer.__super__ = cocktail.style.computer.BoxComputer;
for(var k in cocktail.style.computer.BoxComputer.prototype ) cocktail.style.computer.FloatBoxComputer.prototype[k] = cocktail.style.computer.BoxComputer.prototype[k];
cocktail.style.computer.FloatBoxComputer.prototype.getComputedMargin = function(marginStyleValue,opositeMarginStyleValue,containingDOMElementDimension,computedDimension,isDimensionAuto,computedPaddingsDimension,isHorizontalMargin) {
	if(isHorizontalMargin == null) isHorizontalMargin = false;
	var computedMargin;
	var $e = marginStyleValue;
	switch( $e[1] ) {
	case 0:
	var value = $e[2];
	{
		computedMargin = this.getValueFromLength(value);
	}break;
	case 1:
	var value = $e[2];
	{
		if(containingDOMElementDimension == cocktail.style.computer.FloatBoxComputer.NULL) {
			computedMargin = 0;
		}
		else {
			computedMargin = this.getValueFromPercent(value,containingDOMElementDimension);
		}
	}break;
	case 2:
	{
		computedMargin = 0;
	}break;
	}
	return computedMargin;
}
cocktail.style.computer.FloatBoxComputer.prototype.getComputedAutoHeight = function(style,containingDOMElementDimensions) {
	return 0;
}
cocktail.style.computer.FloatBoxComputer.prototype.getComputedAutoWidth = function(style,containingDOMElementDimensions) {
	return 0;
}
cocktail.style.computer.FloatBoxComputer.prototype.__class__ = cocktail.style.computer.FloatBoxComputer;
cocktail.style.computer.NoneBoxComputer = function(p) { if( p === $_ ) return; {
	cocktail.style.computer.BoxComputer.call(this);
}}
cocktail.style.computer.NoneBoxComputer.__name__ = ["cocktail","style","computer","NoneBoxComputer"];
cocktail.style.computer.NoneBoxComputer.__super__ = cocktail.style.computer.BoxComputer;
for(var k in cocktail.style.computer.BoxComputer.prototype ) cocktail.style.computer.NoneBoxComputer.prototype[k] = cocktail.style.computer.BoxComputer.prototype[k];
cocktail.style.computer.NoneBoxComputer.prototype.__class__ = cocktail.style.computer.NoneBoxComputer;
if(!slPlayer.core.config) slPlayer.core.config = {}
slPlayer.core.config.ScaleModeValue = { __ename__ : ["slPlayer","core","config","ScaleModeValue"], __constructs__ : ["showAll","noScale","pixel","scroll"] }
slPlayer.core.config.ScaleModeValue.showAll = ["showAll",0];
slPlayer.core.config.ScaleModeValue.showAll.toString = $estr;
slPlayer.core.config.ScaleModeValue.showAll.__enum__ = slPlayer.core.config.ScaleModeValue;
slPlayer.core.config.ScaleModeValue.noScale = ["noScale",1];
slPlayer.core.config.ScaleModeValue.noScale.toString = $estr;
slPlayer.core.config.ScaleModeValue.noScale.__enum__ = slPlayer.core.config.ScaleModeValue;
slPlayer.core.config.ScaleModeValue.pixel = ["pixel",2];
slPlayer.core.config.ScaleModeValue.pixel.toString = $estr;
slPlayer.core.config.ScaleModeValue.pixel.__enum__ = slPlayer.core.config.ScaleModeValue;
slPlayer.core.config.ScaleModeValue.scroll = ["scroll",3];
slPlayer.core.config.ScaleModeValue.scroll.toString = $estr;
slPlayer.core.config.ScaleModeValue.scroll.__enum__ = slPlayer.core.config.ScaleModeValue;
slPlayer.core.config.RuntimeValue = { __ename__ : ["slPlayer","core","config","RuntimeValue"], __constructs__ : ["as3","js","php"] }
slPlayer.core.config.RuntimeValue.as3 = ["as3",0];
slPlayer.core.config.RuntimeValue.as3.toString = $estr;
slPlayer.core.config.RuntimeValue.as3.__enum__ = slPlayer.core.config.RuntimeValue;
slPlayer.core.config.RuntimeValue.js = ["js",1];
slPlayer.core.config.RuntimeValue.js.toString = $estr;
slPlayer.core.config.RuntimeValue.js.__enum__ = slPlayer.core.config.RuntimeValue;
slPlayer.core.config.RuntimeValue.php = ["php",2];
slPlayer.core.config.RuntimeValue.php.toString = $estr;
slPlayer.core.config.RuntimeValue.php.__enum__ = slPlayer.core.config.RuntimeValue;
cocktail.mouse.MouseCursorValue = { __ename__ : ["cocktail","mouse","MouseCursorValue"], __constructs__ : ["custom","auto","none","native"] }
cocktail.mouse.MouseCursorValue.custom = function(imageDOMElement,hotSpot) { var $x = ["custom",0,imageDOMElement,hotSpot]; $x.__enum__ = cocktail.mouse.MouseCursorValue; $x.toString = $estr; return $x; }
cocktail.mouse.MouseCursorValue.auto = ["auto",1];
cocktail.mouse.MouseCursorValue.auto.toString = $estr;
cocktail.mouse.MouseCursorValue.auto.__enum__ = cocktail.mouse.MouseCursorValue;
cocktail.mouse.MouseCursorValue.none = ["none",2];
cocktail.mouse.MouseCursorValue.none.toString = $estr;
cocktail.mouse.MouseCursorValue.none.__enum__ = cocktail.mouse.MouseCursorValue;
cocktail.mouse.MouseCursorValue["native"] = function(nativeOSMouseCursorValue) { var $x = ["native",3,nativeOSMouseCursorValue]; $x.__enum__ = cocktail.mouse.MouseCursorValue; $x.toString = $estr; return $x; }
cocktail.mouse.NativeOSMouseCursorValue = { __ename__ : ["cocktail","mouse","NativeOSMouseCursorValue"], __constructs__ : ["pointer","text"] }
cocktail.mouse.NativeOSMouseCursorValue.pointer = ["pointer",0];
cocktail.mouse.NativeOSMouseCursorValue.pointer.toString = $estr;
cocktail.mouse.NativeOSMouseCursorValue.pointer.__enum__ = cocktail.mouse.NativeOSMouseCursorValue;
cocktail.mouse.NativeOSMouseCursorValue.text = ["text",1];
cocktail.mouse.NativeOSMouseCursorValue.text.toString = $estr;
cocktail.mouse.NativeOSMouseCursorValue.text.__enum__ = cocktail.mouse.NativeOSMouseCursorValue;
if(!cocktail.geom) cocktail.geom = {}
cocktail.geom.Matrix = function(matrixData) { if( matrixData === $_ ) return; {
	this.setMatrixData(matrixData);
}}
cocktail.geom.Matrix.__name__ = ["cocktail","geom","Matrix"];
cocktail.geom.Matrix.prototype._matrixData = null;
cocktail.geom.Matrix.prototype.matrixData = null;
cocktail.geom.Matrix.prototype.identity = function() {
	this._matrixData = { a : 1.0, b : 0.0, c : 0.0, d : 1.0, e : 0.0, f : 0.0};
}
cocktail.geom.Matrix.prototype.setMatrixData = function(matrixData) {
	this._matrixData = matrixData;
	if(this._matrixData == null) {
		this.identity();
	}
	return this._matrixData;
}
cocktail.geom.Matrix.prototype.getMatrixData = function() {
	return this._matrixData;
}
cocktail.geom.Matrix.prototype.concatenate = function(matrix) {
	var currentMatrixData = this._matrixData;
	var targetMatrixData = matrix.getMatrixData();
	var a = currentMatrixData.a * targetMatrixData.a + currentMatrixData.c * targetMatrixData.b;
	var b = currentMatrixData.b * targetMatrixData.a + currentMatrixData.d * targetMatrixData.b;
	var c = currentMatrixData.a * targetMatrixData.c + currentMatrixData.c * targetMatrixData.d;
	var d = currentMatrixData.b * targetMatrixData.c + currentMatrixData.d * targetMatrixData.d;
	var e = currentMatrixData.a * targetMatrixData.e + currentMatrixData.c * targetMatrixData.f + currentMatrixData.e;
	var f = currentMatrixData.b * targetMatrixData.e + currentMatrixData.d * targetMatrixData.f + currentMatrixData.f;
	var concatenatedMatrixData = { a : a, b : b, c : c, d : d, e : e, f : f};
	this.setMatrixData(concatenatedMatrixData);
}
cocktail.geom.Matrix.prototype.translate = function(x,y) {
	var translationMatrixData = { a : 1.0, b : 0.0, c : 0.0, d : 1.0, e : x, f : y};
	var translationMatrix = new cocktail.geom.Matrix(translationMatrixData);
	this.concatenate(translationMatrix);
}
cocktail.geom.Matrix.prototype.rotate = function(angle,registrationPoint) {
	var angleInRad = angle / 180 * Math.PI;
	var rotatedMatrix = new cocktail.geom.Matrix();
	rotatedMatrix.translate(registrationPoint.x,registrationPoint.y);
	var a = 0.0;
	var b = 0.0;
	var c = 0.0;
	var d = 0.0;
	if(angle == 90) {
		a = d = 0.0;
		c = b = 1.0;
	}
	else if(angle == 180) {
		a = d = -1.0;
		c = b = 0.0;
	}
	else if(angle == 270) {
		a = d = 0.0;
		c = b = -1.0;
	}
	else {
		a = d = Math.cos(angleInRad);
		c = b = Math.sin(angleInRad);
	}
	var rotationMatrixData = { a : a, b : b, c : c * -1.0, d : d, e : 0.0, f : 0.0};
	var rotationMatrix = new cocktail.geom.Matrix(rotationMatrixData);
	rotatedMatrix.concatenate(rotationMatrix);
	rotatedMatrix.translate(registrationPoint.x * -1,registrationPoint.y * -1);
	this.concatenate(rotatedMatrix);
}
cocktail.geom.Matrix.prototype.scale = function(scaleX,scaleY,registrationPoint) {
	var scaledMatrix = new cocktail.geom.Matrix();
	scaledMatrix.translate(registrationPoint.x,registrationPoint.y);
	var scalingMatrixData = { a : scaleX, b : 0.0, c : 0.0, d : scaleY, e : 0.0, f : 0.0};
	var scalingMatrix = new cocktail.geom.Matrix(scalingMatrixData);
	scaledMatrix.concatenate(scalingMatrix);
	scaledMatrix.translate(registrationPoint.x * -1,registrationPoint.y * -1);
	this.concatenate(scaledMatrix);
}
cocktail.geom.Matrix.prototype.skew = function(skewX,skewY,registrationPoint) {
	var skewedMatrix = new cocktail.geom.Matrix();
	skewedMatrix.translate(registrationPoint.x,registrationPoint.y);
	var skewingMatrixData = { a : 1.0, b : Math.tan(skewY), c : Math.tan(skewX), d : 1.0, e : 0.0, f : 0.0};
	var skewingMatrix = new cocktail.geom.Matrix(skewingMatrixData);
	skewedMatrix.concatenate(skewingMatrix);
	skewedMatrix.translate(registrationPoint.x * -1,registrationPoint.y * -1);
	this.concatenate(skewedMatrix);
}
cocktail.geom.Matrix.prototype.setRotation = function(angle,registrationPoint) {
	var currentRotation = this.getRotation();
	var resetAngle = 360 - currentRotation;
	this.rotate(resetAngle,registrationPoint);
	this.rotate(angle,registrationPoint);
}
cocktail.geom.Matrix.prototype.getRotation = function() {
	var flip = this.getFlip();
	var scaleX = this.getScaleX();
	var skewX = this.getSkewX();
	var actualScaleX = Math.sqrt(scaleX * scaleX + skewX * skewX);
	var scaleY = this.getScaleY();
	var skewY = this.getSkewY() * flip;
	var actualScaleY = Math.sqrt(scaleY * scaleY + skewY * skewY);
	var rotationInRad = Math.atan2(skewY / actualScaleY - skewX / actualScaleX,scaleY / actualScaleY + scaleX / actualScaleX);
	var rotationInDeg = Math.round(rotationInRad * 180 / Math.PI);
	if(rotationInDeg < 0) {
		rotationInDeg = 360 + rotationInDeg;
	}
	return rotationInDeg;
}
cocktail.geom.Matrix.prototype.getFlip = function() {
	var scaleX = this.getScaleX();
	var scaleXSign = 0;
	if(scaleX >= 0) {
		scaleXSign = 1;
	}
	else {
		scaleXSign = -1;
	}
	var scaleY = this.getScaleY();
	var scaleYSign = scaleY >= 0?1:-1;
	var skewX = this.getSkewX();
	var skewXSign = skewX >= 0?1:-1;
	var skewY = this.getSkewY();
	var skewYSign = skewY >= 0?1:-1;
	if(scaleXSign == scaleYSign && skewXSign == skewYSign * -1) {
		return 1;
	}
	if(scaleXSign == scaleYSign * -1 && skewXSign == skewYSign) {
		return -1;
	}
	return 1;
}
cocktail.geom.Matrix.prototype.setScaleX = function(scaleXFactor,registrationPoint) {
	var currentScaleX = this.getScaleX();
	var resetScaleX = 1 / currentScaleX;
	this.scale(resetScaleX,1,registrationPoint);
	this.scale(scaleXFactor,1,registrationPoint);
}
cocktail.geom.Matrix.prototype.getScaleX = function() {
	return this._matrixData.a;
}
cocktail.geom.Matrix.prototype.setScaleY = function(scaleYFactor,registrationPoint) {
	var currentScaleY = this.getScaleY();
	var resetScaleY = 1 / currentScaleY;
	this.scale(1,resetScaleY,registrationPoint);
	this.scale(1,scaleYFactor,registrationPoint);
}
cocktail.geom.Matrix.prototype.getScaleY = function() {
	return this._matrixData.d;
}
cocktail.geom.Matrix.prototype.setTranslationX = function(translationX) {
	var currentTranslationX = this.getTranslationX();
	var resetTranslationX = currentTranslationX * -1;
	this.translate(resetTranslationX,0);
	this.translate(translationX,0);
}
cocktail.geom.Matrix.prototype.getTranslationX = function() {
	return this._matrixData.e;
}
cocktail.geom.Matrix.prototype.setTranslationY = function(translationY) {
	var currentTranslationY = this.getTranslationY();
	var resetTranslationY = currentTranslationY * -1;
	this.translate(0,resetTranslationY);
	this.translate(0,translationY);
}
cocktail.geom.Matrix.prototype.getTranslationY = function() {
	return this._matrixData.f;
}
cocktail.geom.Matrix.prototype.getSkewX = function() {
	return this._matrixData.c;
}
cocktail.geom.Matrix.prototype.getSkewY = function() {
	return this._matrixData.b;
}
cocktail.geom.Matrix.prototype.__class__ = cocktail.geom.Matrix;
utest.ui.text.PlainTextReport = function(runner,outputHandler) { if( runner === $_ ) return; {
	this.aggregator = new utest.ui.common.ResultAggregator(runner,true);
	runner.onStart.add($closure(this,"start"));
	this.aggregator.onComplete.add($closure(this,"complete"));
	if(null != outputHandler) this.setHandler(outputHandler);
	this.displaySuccessResults = utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults;
	this.displayHeader = utest.ui.common.HeaderDisplayMode.AlwaysShowHeader;
}}
utest.ui.text.PlainTextReport.__name__ = ["utest","ui","text","PlainTextReport"];
utest.ui.text.PlainTextReport.prototype.displaySuccessResults = null;
utest.ui.text.PlainTextReport.prototype.displayHeader = null;
utest.ui.text.PlainTextReport.prototype.handler = null;
utest.ui.text.PlainTextReport.prototype.aggregator = null;
utest.ui.text.PlainTextReport.prototype.newline = null;
utest.ui.text.PlainTextReport.prototype.indent = null;
utest.ui.text.PlainTextReport.prototype.setHandler = function(handler) {
	this.handler = handler;
}
utest.ui.text.PlainTextReport.prototype.startTime = null;
utest.ui.text.PlainTextReport.prototype.start = function(e) {
	this.startTime = haxe.Timer.stamp();
}
utest.ui.text.PlainTextReport.prototype.indents = function(c) {
	var s = "";
	{
		var _g = 0;
		while(_g < c) {
			var _ = _g++;
			s += this.indent;
		}
	}
	return s;
}
utest.ui.text.PlainTextReport.prototype.dumpStack = function(stack) {
	if(stack.length == 0) return "";
	var parts = haxe.Stack.toString(stack).split("\n");
	var r = [];
	{
		var _g = 0;
		while(_g < parts.length) {
			var part = parts[_g];
			++_g;
			if(part.indexOf(" utest.") >= 0) continue;
			r.push(part);
		}
	}
	return r.join(this.newline);
}
utest.ui.text.PlainTextReport.prototype.addHeader = function(buf,result) {
	if(!utest.ui.common.ReportTools.hasHeader(this,result.stats)) return;
	var end = haxe.Timer.stamp();
	var time = Std["int"]((end - this.startTime) * 1000) / 1000;
	buf.b[buf.b.length] = "results: " + (result.stats.isOk?"ALL TESTS OK":"SOME TESTS FAILURES") + this.newline + " " + this.newline;
	buf.b[buf.b.length] = "assertations: " + result.stats.assertations + this.newline;
	buf.b[buf.b.length] = "successes: " + result.stats.successes + this.newline;
	buf.b[buf.b.length] = "errors: " + result.stats.errors + this.newline;
	buf.b[buf.b.length] = "failures: " + result.stats.failures + this.newline;
	buf.b[buf.b.length] = "warnings: " + result.stats.warnings + this.newline;
	buf.b[buf.b.length] = "execution time: " + time + this.newline;
	buf.b[buf.b.length] = this.newline;
}
utest.ui.text.PlainTextReport.prototype.result = null;
utest.ui.text.PlainTextReport.prototype.getResults = function() {
	var buf = new StringBuf();
	this.addHeader(buf,this.result);
	{
		var _g = 0, _g1 = this.result.packageNames();
		while(_g < _g1.length) {
			var pname = _g1[_g];
			++_g;
			var pack = this.result.getPackage(pname);
			if(utest.ui.common.ReportTools.skipResult(this,pack.stats,this.result.stats.isOk)) continue;
			{
				var _g2 = 0, _g3 = pack.classNames();
				while(_g2 < _g3.length) {
					var cname = _g3[_g2];
					++_g2;
					var cls = pack.getClass(cname);
					if(utest.ui.common.ReportTools.skipResult(this,cls.stats,this.result.stats.isOk)) continue;
					buf.b[buf.b.length] = (pname == ""?"":pname + ".") + cname + this.newline;
					{
						var _g4 = 0, _g5 = cls.methodNames();
						while(_g4 < _g5.length) {
							var mname = _g5[_g4];
							++_g4;
							var fix = cls.get(mname);
							if(utest.ui.common.ReportTools.skipResult(this,fix.stats,this.result.stats.isOk)) continue;
							buf.b[buf.b.length] = this.indents(1) + mname + ": ";
							if(fix.stats.isOk) {
								buf.b[buf.b.length] = "OK ";
							}
							else if(fix.stats.hasErrors) {
								buf.b[buf.b.length] = "ERROR ";
							}
							else if(fix.stats.hasFailures) {
								buf.b[buf.b.length] = "FAILURE ";
							}
							else if(fix.stats.hasWarnings) {
								buf.b[buf.b.length] = "WARNING ";
							}
							var messages = "";
							{ var $it0 = fix.iterator();
							while( $it0.hasNext() ) { var assertation = $it0.next();
							{
								var $e = assertation;
								switch( $e[1] ) {
								case 0:
								var pos = $e[2];
								{
									buf.b[buf.b.length] = ".";
								}break;
								case 1:
								var pos = $e[3], msg = $e[2];
								{
									buf.b[buf.b.length] = "F";
									messages += this.indents(2) + "line: " + pos.lineNumber + ", " + msg + this.newline;
								}break;
								case 2:
								var s = $e[3], e = $e[2];
								{
									buf.b[buf.b.length] = "E";
									messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
								}break;
								case 3:
								var s = $e[3], e = $e[2];
								{
									buf.b[buf.b.length] = "S";
									messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
								}break;
								case 4:
								var s = $e[3], e = $e[2];
								{
									buf.b[buf.b.length] = "T";
									messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
								}break;
								case 5:
								var s = $e[3], missedAsyncs = $e[2];
								{
									buf.b[buf.b.length] = "O";
									messages += this.indents(2) + "missed async calls: " + missedAsyncs + this.dumpStack(s) + this.newline;
								}break;
								case 6:
								var s = $e[3], e = $e[2];
								{
									buf.b[buf.b.length] = "A";
									messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
								}break;
								case 7:
								var msg = $e[2];
								{
									buf.b[buf.b.length] = "W";
									messages += this.indents(2) + msg + this.newline;
								}break;
								}
							}
							}}
							buf.b[buf.b.length] = this.newline;
							buf.b[buf.b.length] = messages;
						}
					}
				}
			}
		}
	}
	return buf.b.join("");
}
utest.ui.text.PlainTextReport.prototype.complete = function(result) {
	this.result = result;
	this.handler(this);
}
utest.ui.text.PlainTextReport.prototype.__class__ = utest.ui.text.PlainTextReport;
utest.ui.text.PlainTextReport.__interfaces__ = [utest.ui.common.IReport];
utest.ui.text.PrintReport = function(runner) { if( runner === $_ ) return; {
	utest.ui.text.PlainTextReport.call(this,runner,$closure(this,"_handler"));
	this.newline = "\n";
	this.indent = "  ";
}}
utest.ui.text.PrintReport.__name__ = ["utest","ui","text","PrintReport"];
utest.ui.text.PrintReport.__super__ = utest.ui.text.PlainTextReport;
for(var k in utest.ui.text.PlainTextReport.prototype ) utest.ui.text.PrintReport.prototype[k] = utest.ui.text.PlainTextReport.prototype[k];
utest.ui.text.PrintReport.prototype.useTrace = null;
utest.ui.text.PrintReport.prototype._handler = function(report) {
	this._trace(report.getResults());
}
utest.ui.text.PrintReport.prototype._trace = function(s) {
	s = StringTools.replace(s,"  ",this.indent);
	s = StringTools.replace(s,"\n",this.newline);
	haxe.Log.trace(s,{ fileName : "PrintReport.hx", lineNumber : 66, className : "utest.ui.text.PrintReport", methodName : "_trace"});
}
utest.ui.text.PrintReport.prototype.__class__ = utest.ui.text.PrintReport;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	a.push(i);
	}}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	l.add(i);
	}}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(f(x));
	}}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(f(i++,x));
	}}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		{ var $it0 = it.iterator();
		while( $it0.hasNext() ) { var x = $it0.next();
		if(x == elt) return true;
		}}
	}
	else {
		{ var $it1 = it.iterator();
		while( $it1.hasNext() ) { var x = $it1.next();
		if(cmp(x,elt)) return true;
		}}
	}
	return false;
}
Lambda.exists = function(it,f) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(f(x)) return true;
	}}
	return false;
}
Lambda.foreach = function(it,f) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(!f(x)) return false;
	}}
	return true;
}
Lambda.iter = function(it,f) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	f(x);
	}}
}
Lambda.filter = function(it,f) {
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(f(x)) l.add(x);
	}}
	return l;
}
Lambda.fold = function(it,f,first) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	first = f(x,first);
	}}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) { var $it0 = it.iterator();
	while( $it0.hasNext() ) { var _ = $it0.next();
	n++;
	}}
	else { var $it1 = it.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	if(pred(x)) n++;
	}}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var v2 = $it0.next();
	{
		if(v == v2) return i;
		i++;
	}
	}}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	{ var $it0 = a.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(x);
	}}
	{ var $it1 = b.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	l.add(x);
	}}
	return l;
}
Lambda.prototype.__class__ = Lambda;
cocktail.nativeElement.js.NativeElementCreator = function(p) { if( p === $_ ) return; {
	cocktail.nativeElement.abstract.AbstractNativeElementCreator.call(this);
}}
cocktail.nativeElement.js.NativeElementCreator.__name__ = ["cocktail","nativeElement","js","NativeElementCreator"];
cocktail.nativeElement.js.NativeElementCreator.__super__ = cocktail.nativeElement.abstract.AbstractNativeElementCreator;
for(var k in cocktail.nativeElement.abstract.AbstractNativeElementCreator.prototype ) cocktail.nativeElement.js.NativeElementCreator.prototype[k] = cocktail.nativeElement.abstract.AbstractNativeElementCreator.prototype[k];
cocktail.nativeElement.js.NativeElementCreator.prototype.createNativeElement = function(nativeElementType) {
	var nativeElement;
	var $e = nativeElementType;
	switch( $e[1] ) {
	case 3:
	{
		nativeElement = js.Lib.document.createElement("img");
	}break;
	case 2:
	{
		nativeElement = js.Lib.document.createElement("div");
	}break;
	case 0:
	{
		nativeElement = js.Lib.document.createElement("div");
	}break;
	case 1:
	{
		nativeElement = js.Lib.document.createElement("canvas");
	}break;
	case 4:
	var name = $e[2];
	{
		nativeElement = js.Lib.document.createElement(name);
	}break;
	}
	return nativeElement;
}
cocktail.nativeElement.js.NativeElementCreator.prototype.createNativeTextNode = function(text) {
	return js.Lib.document.createTextNode(text);
}
cocktail.nativeElement.js.NativeElementCreator.prototype.__class__ = cocktail.nativeElement.js.NativeElementCreator;
cocktail.resource.js.ImageLoader = function(p) { if( p === $_ ) return; {
	cocktail.resource.abstract.AbstractResourceLoader.call(this);
}}
cocktail.resource.js.ImageLoader.__name__ = ["cocktail","resource","js","ImageLoader"];
cocktail.resource.js.ImageLoader.__super__ = cocktail.resource.abstract.AbstractResourceLoader;
for(var k in cocktail.resource.abstract.AbstractResourceLoader.prototype ) cocktail.resource.js.ImageLoader.prototype[k] = cocktail.resource.abstract.AbstractResourceLoader.prototype[k];
cocktail.resource.js.ImageLoader.prototype.doLoad = function(url) {
	var domElement;
	if(this._domElement != null) {
		domElement = this._domElement;
		domElement.setNativeElement(cocktail.nativeElement.NativeElementManager.createNativeElement(cocktail.nativeElement.NativeElementTypeValue.image));
	}
	else {
		domElement = new cocktail.domElement.js.ImageDOMElement(cocktail.nativeElement.NativeElementManager.createNativeElement(cocktail.nativeElement.NativeElementTypeValue.image));
	}
	var onLoadCompleteDelegate = $closure(this,"onLoadComplete");
	var onLoadErrorDelegate = $closure(this,"onLoadError");
	domElement.getNativeElement().onload = function() {
		domElement.setWidth(this.width);
		domElement.setHeight(this.height);
		domElement.setSrc(this.src);
		onLoadCompleteDelegate(domElement);
	}
	domElement.getNativeElement().onerror = function() {
		onLoadErrorDelegate("couldn't load picture");
	}
	domElement.getNativeElement().setAttribute("src",url);
}
cocktail.resource.js.ImageLoader.prototype.__class__ = cocktail.resource.js.ImageLoader;
utest.TestResult = function(p) { if( p === $_ ) return; {
	null;
}}
utest.TestResult.__name__ = ["utest","TestResult"];
utest.TestResult.ofHandler = function(handler) {
	var r = new utest.TestResult();
	var path = Type.getClassName(Type.getClass(handler.fixture.target)).split(".");
	r.cls = path.pop();
	r.pack = path.join(".");
	r.method = handler.fixture.method;
	r.setup = handler.fixture.setup;
	r.teardown = handler.fixture.teardown;
	r.assertations = handler.results;
	return r;
}
utest.TestResult.prototype.pack = null;
utest.TestResult.prototype.cls = null;
utest.TestResult.prototype.method = null;
utest.TestResult.prototype.setup = null;
utest.TestResult.prototype.teardown = null;
utest.TestResult.prototype.assertations = null;
utest.TestResult.prototype.allOk = function() {
	try {
		{ var $it0 = this.assertations.iterator();
		while( $it0.hasNext() ) { var l = $it0.next();
		{
			var $e = l;
			switch( $e[1] ) {
			case 0:
			var pos = $e[2];
			{
				throw "__break__";
			}break;
			default:{
				return false;
			}break;
			}
		}
		}}
	} catch( e ) { if( e != "__break__" ) throw e; }
	return true;
}
utest.TestResult.prototype.__class__ = utest.TestResult;
cocktail.nativeElement.NativeElementTypeValue = { __ename__ : ["cocktail","nativeElement","NativeElementTypeValue"], __constructs__ : ["neutral","graphic","text","image","custom"] }
cocktail.nativeElement.NativeElementTypeValue.neutral = ["neutral",0];
cocktail.nativeElement.NativeElementTypeValue.neutral.toString = $estr;
cocktail.nativeElement.NativeElementTypeValue.neutral.__enum__ = cocktail.nativeElement.NativeElementTypeValue;
cocktail.nativeElement.NativeElementTypeValue.graphic = ["graphic",1];
cocktail.nativeElement.NativeElementTypeValue.graphic.toString = $estr;
cocktail.nativeElement.NativeElementTypeValue.graphic.__enum__ = cocktail.nativeElement.NativeElementTypeValue;
cocktail.nativeElement.NativeElementTypeValue.text = ["text",2];
cocktail.nativeElement.NativeElementTypeValue.text.toString = $estr;
cocktail.nativeElement.NativeElementTypeValue.text.__enum__ = cocktail.nativeElement.NativeElementTypeValue;
cocktail.nativeElement.NativeElementTypeValue.image = ["image",3];
cocktail.nativeElement.NativeElementTypeValue.image.toString = $estr;
cocktail.nativeElement.NativeElementTypeValue.image.__enum__ = cocktail.nativeElement.NativeElementTypeValue;
cocktail.nativeElement.NativeElementTypeValue.custom = function(name) { var $x = ["custom",4,name]; $x.__enum__ = cocktail.nativeElement.NativeElementTypeValue; $x.toString = $estr; return $x; }
if(typeof block=='undefined') block = {}
block.BlockTests = function(p) { if( p === $_ ) return; {
	null;
}}
block.BlockTests.__name__ = ["block","BlockTests"];
block.BlockTests.main = function() {
	var runner = new utest.Runner();
	runner.addCase(new block.BlockTests());
	utest.ui.Report.create(runner);
	runner.run();
}
block.BlockTests.prototype.testAddRemoveChild = function() {
	var parentBlock = new slPlayer.core.block.Block("");
	var childBlock = new slPlayer.core.block.Block("");
	parentBlock.addChild(childBlock);
	utest.Assert.equals(parentBlock.getChildren()[0],childBlock,null,{ fileName : "BlockTests.hx", lineNumber : 56, className : "block.BlockTests", methodName : "testAddRemoveChild"});
	parentBlock.removeChild(childBlock);
	utest.Assert.equals(parentBlock.getChildren().length,0,null,{ fileName : "BlockTests.hx", lineNumber : 62, className : "block.BlockTests", methodName : "testAddRemoveChild"});
}
block.BlockTests.prototype.testAddRemoveFromDisplayList = function() {
	var refToDOM = js.Lib.document.body;
	var parentBlock = new slPlayer.core.block.Block("");
	var parentBlockDOMElement = new cocktail.domElement.js.ContainerDOMElement(refToDOM);
	parentBlock.setDOMElement(parentBlockDOMElement);
	var childRefToDOM = js.Lib.document.createElement("div");
	var childBlock = new slPlayer.core.block.Block("");
	var childBlockDOMElement = new cocktail.domElement.js.ContainerDOMElement(childRefToDOM);
	childBlock.setDOMElement(childBlockDOMElement);
	utest.Assert.equals(childBlockDOMElement,childBlock.getDOMElement(),null,{ fileName : "BlockTests.hx", lineNumber : 94, className : "block.BlockTests", methodName : "testAddRemoveFromDisplayList"});
	parentBlock.addToDisplayList(childBlock.getDOMElement());
	utest.Assert.equals(((function($this) {
		var $r;
		var $t = parentBlock.getDOMElement();
		if(Std["is"]($t,cocktail.domElement.js.ContainerDOMElement)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).getChildren()[0].children,childBlock.getDOMElement(),null,{ fileName : "BlockTests.hx", lineNumber : 100, className : "block.BlockTests", methodName : "testAddRemoveFromDisplayList"});
	parentBlock.removeFromDisplayList(childBlock.getDOMElement());
	utest.Assert.equals(((function($this) {
		var $r;
		var $t = parentBlock.getDOMElement();
		if(Std["is"]($t,cocktail.domElement.js.ContainerDOMElement)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).getChildren().length,0,null,{ fileName : "BlockTests.hx", lineNumber : 106, className : "block.BlockTests", methodName : "testAddRemoveFromDisplayList"});
	var nonVisualBlock = new slPlayer.core.block.Block("");
	parentBlock.addChild(nonVisualBlock);
	nonVisualBlock.addToDisplayList(childBlock.getDOMElement());
	utest.Assert.equals(((function($this) {
		var $r;
		var $t = parentBlock.getDOMElement();
		if(Std["is"]($t,cocktail.domElement.js.ContainerDOMElement)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).getChildren()[0].children,childBlock.getDOMElement(),null,{ fileName : "BlockTests.hx", lineNumber : 121, className : "block.BlockTests", methodName : "testAddRemoveFromDisplayList"});
	nonVisualBlock.removeFromDisplayList(childBlock.getDOMElement());
	utest.Assert.equals(((function($this) {
		var $r;
		var $t = parentBlock.getDOMElement();
		if(Std["is"]($t,cocktail.domElement.js.ContainerDOMElement)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).getChildren().length,0,null,{ fileName : "BlockTests.hx", lineNumber : 127, className : "block.BlockTests", methodName : "testAddRemoveFromDisplayList"});
}
block.BlockTests.prototype.testOpenCloseBlock = function() {
	var parentBlock = new slPlayer.core.block.Block("");
	var parentBlockBlockData = { className : "block.TestNativeClass", descriptorUID : null, jsSkinURL : null, as3SkinURL : null, phpSkinURL : null, properties : new Hash(), metaData : new Hash(), styles : new Hash()};
	parentBlock.setBlockData(parentBlockBlockData);
	var successCallback = utest.Assert.createEvent($closure(this,"onBlockOpenSuccess"));
	utest.Assert.same(parentBlock.getState(),slPlayer.core.block.BlockStateValue.closed,null,null,{ fileName : "BlockTests.hx", lineNumber : 159, className : "block.BlockTests", methodName : "testOpenCloseBlock"});
	parentBlock.open(successCallback,$closure(this,"onBlockOpenError"));
}
block.BlockTests.prototype.onBlockOpenSuccess = function(openedBlock) {
	utest.Assert.same(openedBlock.getState(),slPlayer.core.block.BlockStateValue.opened,null,null,{ fileName : "BlockTests.hx", lineNumber : 171, className : "block.BlockTests", methodName : "onBlockOpenSuccess"});
	openedBlock.close();
	utest.Assert.same(openedBlock.getState(),slPlayer.core.block.BlockStateValue.closed,null,null,{ fileName : "BlockTests.hx", lineNumber : 175, className : "block.BlockTests", methodName : "onBlockOpenSuccess"});
}
block.BlockTests.prototype.onBlockOpenError = function(error) {
	null;
}
block.BlockTests.prototype.testOpenCloseBlock2 = function() {
	var parentBlock = new slPlayer.core.block.Block("");
	var properties = new Hash();
	properties.set("testStringProperty","testStringValue");
	properties.set("testIntProperty",1);
	properties.set("testFloatProperty",1.2);
	properties.set("testBoolProperty",true);
	properties.set("testArrayProperty",[1,"value"]);
	var parentBlockBlockData = { className : "block.TestNativeClass", descriptorUID : null, jsSkinURL : null, as3SkinURL : null, phpSkinURL : null, properties : properties, metaData : new Hash(), styles : new Hash()};
	parentBlock.setBlockData(parentBlockBlockData);
	var successCallback = utest.Assert.createEvent($closure(this,"onBlockOpenSuccess2"));
	parentBlock.open(successCallback,$closure(this,"onBlockOpenError2"));
}
block.BlockTests.prototype.onBlockOpenSuccess2 = function(openedBlock) {
	utest.Assert.equals(openedBlock.getClassInstance().getField("testStringProperty"),"testStringValue",null,{ fileName : "BlockTests.hx", lineNumber : 232, className : "block.BlockTests", methodName : "onBlockOpenSuccess2"});
	utest.Assert.equals(openedBlock.getClassInstance().getField("testBoolProperty"),true,null,{ fileName : "BlockTests.hx", lineNumber : 234, className : "block.BlockTests", methodName : "onBlockOpenSuccess2"});
	utest.Assert.equals(openedBlock.getClassInstance().getField("testIntProperty"),1,null,{ fileName : "BlockTests.hx", lineNumber : 236, className : "block.BlockTests", methodName : "onBlockOpenSuccess2"});
	utest.Assert.equals(openedBlock.getClassInstance().getField("testFloatProperty"),1.2,null,{ fileName : "BlockTests.hx", lineNumber : 238, className : "block.BlockTests", methodName : "onBlockOpenSuccess2"});
	utest.Assert.equals(openedBlock.getClassInstance().getField("testArrayProperty")[0],1,null,{ fileName : "BlockTests.hx", lineNumber : 240, className : "block.BlockTests", methodName : "onBlockOpenSuccess2"});
	utest.Assert.equals(openedBlock.getClassInstance().getField("testArrayProperty")[1],"value",null,{ fileName : "BlockTests.hx", lineNumber : 241, className : "block.BlockTests", methodName : "onBlockOpenSuccess2"});
}
block.BlockTests.prototype.onBlockOpenError2 = function(error) {
	null;
}
block.BlockTests.prototype.testOpenCloseBlock3 = function() {
	var parentBlock = new slPlayer.core.block.Block("");
	var parentBlockBlockData = { className : "block.TestNativeClass", descriptorUID : null, jsSkinURL : null, as3SkinURL : null, phpSkinURL : null, properties : new Hash(), metaData : new Hash(), styles : new Hash()};
	parentBlock.setBlockData(parentBlockBlockData);
	var refToDOM = js.Lib.document.body;
	var parentDOMElement = new cocktail.domElement.js.DOMElement(refToDOM);
	var childBlock = new slPlayer.core.block.Block("");
	var childBlockData = { className : "block.TestNativeClass", descriptorUID : null, jsSkinURL : null, as3SkinURL : null, phpSkinURL : null, properties : new Hash(), metaData : new Hash(), styles : new Hash()};
	childBlock.setBlockData(childBlockData);
	childBlock.setIsAutoOpen(true);
	var successCallback = utest.Assert.createEvent($closure(this,"onBlockOpenSuccess3"));
	parentBlock.addChild(childBlock);
	parentBlock.open(successCallback,$closure(this,"onBlockOpenError3"));
}
block.BlockTests.prototype.onBlockOpenSuccess3 = function(openedBlock) {
	utest.Assert.equals(openedBlock.getChildren()[0].getState(),slPlayer.core.block.BlockStateValue.opened,null,{ fileName : "BlockTests.hx", lineNumber : 313, className : "block.BlockTests", methodName : "onBlockOpenSuccess3"});
	openedBlock.close();
	utest.Assert.equals(openedBlock.getChildren()[0].getState(),slPlayer.core.block.BlockStateValue.closed,null,{ fileName : "BlockTests.hx", lineNumber : 318, className : "block.BlockTests", methodName : "onBlockOpenSuccess3"});
}
block.BlockTests.prototype.onBlockOpenError3 = function(error) {
	null;
}
block.BlockTests.prototype.__class__ = block.BlockTests;
block.TestNativeClass = function(p) { if( p === $_ ) return; {
	null;
}}
block.TestNativeClass.__name__ = ["block","TestNativeClass"];
block.TestNativeClass.prototype.testStringProperty = null;
block.TestNativeClass.prototype.testIntProperty = null;
block.TestNativeClass.prototype.testFloatProperty = null;
block.TestNativeClass.prototype.testBoolProperty = null;
block.TestNativeClass.prototype.testArrayProperty = null;
block.TestNativeClass.prototype.__class__ = block.TestNativeClass;
cocktail.style.computer.InlineBlockBoxComputer = function(p) { if( p === $_ ) return; {
	cocktail.style.computer.BoxComputer.call(this);
}}
cocktail.style.computer.InlineBlockBoxComputer.__name__ = ["cocktail","style","computer","InlineBlockBoxComputer"];
cocktail.style.computer.InlineBlockBoxComputer.__super__ = cocktail.style.computer.BoxComputer;
for(var k in cocktail.style.computer.BoxComputer.prototype ) cocktail.style.computer.InlineBlockBoxComputer.prototype[k] = cocktail.style.computer.BoxComputer.prototype[k];
cocktail.style.computer.InlineBlockBoxComputer.prototype.__class__ = cocktail.style.computer.InlineBlockBoxComputer;
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
cocktail.resource.LoadingTypeValue = { __ename__ : ["cocktail","resource","LoadingTypeValue"], __constructs__ : ["data","image","animation","container","library"] }
cocktail.resource.LoadingTypeValue.data = ["data",0];
cocktail.resource.LoadingTypeValue.data.toString = $estr;
cocktail.resource.LoadingTypeValue.data.__enum__ = cocktail.resource.LoadingTypeValue;
cocktail.resource.LoadingTypeValue.image = ["image",1];
cocktail.resource.LoadingTypeValue.image.toString = $estr;
cocktail.resource.LoadingTypeValue.image.__enum__ = cocktail.resource.LoadingTypeValue;
cocktail.resource.LoadingTypeValue.animation = ["animation",2];
cocktail.resource.LoadingTypeValue.animation.toString = $estr;
cocktail.resource.LoadingTypeValue.animation.__enum__ = cocktail.resource.LoadingTypeValue;
cocktail.resource.LoadingTypeValue.container = ["container",3];
cocktail.resource.LoadingTypeValue.container.toString = $estr;
cocktail.resource.LoadingTypeValue.container.__enum__ = cocktail.resource.LoadingTypeValue;
cocktail.resource.LoadingTypeValue.library = ["library",4];
cocktail.resource.LoadingTypeValue.library.toString = $estr;
cocktail.resource.LoadingTypeValue.library.__enum__ = cocktail.resource.LoadingTypeValue;
cocktail.resource.ResourceLoaderManager = function(p) { if( p === $_ ) return; {
	null;
}}
cocktail.resource.ResourceLoaderManager.__name__ = ["cocktail","resource","ResourceLoaderManager"];
cocktail.resource.ResourceLoaderManager._resourceDataArray = null;
cocktail.resource.ResourceLoaderManager.loadImage = function(url,successCallback,errorCallback,imageDOMElement,allowCache) {
	if(allowCache == null) allowCache = true;
	var resourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, domElement : imageDOMElement, allowCache : allowCache, loadingType : cocktail.resource.LoadingTypeValue.image};
	cocktail.resource.ResourceLoaderManager.addResourceData(resourceDataToAdd);
}
cocktail.resource.ResourceLoaderManager.loadAnimation = function(url,successCallback,errorCallback,animationDOMElement,allowCache) {
	if(allowCache == null) allowCache = true;
	var resourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, domElement : animationDOMElement, loadingType : cocktail.resource.LoadingTypeValue.animation};
	cocktail.resource.ResourceLoaderManager.addResourceData(resourceDataToAdd);
}
cocktail.resource.ResourceLoaderManager.loadContainer = function(url,successCallback,errorCallback,containerDOMElement,allowCache) {
	if(allowCache == null) allowCache = true;
	var resourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, domElement : containerDOMElement, loadingType : cocktail.resource.LoadingTypeValue.container};
	cocktail.resource.ResourceLoaderManager.addResourceData(resourceDataToAdd);
}
cocktail.resource.ResourceLoaderManager.loadString = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var resourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, domElement : null, loadingType : cocktail.resource.LoadingTypeValue.data};
	cocktail.resource.ResourceLoaderManager.addResourceData(resourceDataToAdd);
}
cocktail.resource.ResourceLoaderManager.loadLibrary = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var resourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, domElement : null, loadingType : cocktail.resource.LoadingTypeValue.library};
	cocktail.resource.ResourceLoaderManager.addResourceData(resourceDataToAdd);
}
cocktail.resource.ResourceLoaderManager.addResourceData = function(resourceData) {
	if(cocktail.resource.ResourceLoaderManager._resourceDataArray == null) {
		cocktail.resource.ResourceLoaderManager._resourceDataArray = new Array();
	}
	cocktail.resource.ResourceLoaderManager._resourceDataArray.push(resourceData);
	if(cocktail.resource.ResourceLoaderManager._isLoading == false) {
		cocktail.resource.ResourceLoaderManager.loadNextResource();
	}
}
cocktail.resource.ResourceLoaderManager.loadNextResource = function() {
	if(cocktail.resource.ResourceLoaderManager._resourceDataArray.length == 0) {
		cocktail.resource.ResourceLoaderManager._isLoading = false;
	}
	else {
		cocktail.resource.ResourceLoaderManager._isLoading = true;
		var resourceDataToLoad = cocktail.resource.ResourceLoaderManager._resourceDataArray[0];
		var resourceLoader;
		var $e = resourceDataToLoad.loadingType;
		switch( $e[1] ) {
		case 0:
		{
			resourceLoader = new cocktail.resource.js.StringLoader();
		}break;
		case 1:
		{
			resourceLoader = new cocktail.resource.js.ImageLoader();
		}break;
		case 2:
		{
			resourceLoader = new cocktail.resource.js.AnimationLoader();
		}break;
		case 3:
		{
			resourceLoader = new cocktail.resource.js.ContainerLoader();
		}break;
		case 4:
		{
			resourceLoader = new cocktail.resource.js.LibraryLoader();
		}break;
		}
		resourceLoader.load(resourceDataToLoad.url,$closure(cocktail.resource.ResourceLoaderManager,"onLoadComplete"),$closure(cocktail.resource.ResourceLoaderManager,"onLoadError"),resourceDataToLoad.domElement,resourceDataToLoad.allowCache);
	}
}
cocktail.resource.ResourceLoaderManager.onLoadComplete = function(data) {
	var loadedResourceData = cocktail.resource.ResourceLoaderManager._resourceDataArray.shift();
	loadedResourceData.onLoadComplete(data);
	cocktail.resource.ResourceLoaderManager.loadNextResource();
}
cocktail.resource.ResourceLoaderManager.onLoadError = function(data) {
	var errorResourceData = cocktail.resource.ResourceLoaderManager._resourceDataArray.shift();
	errorResourceData.onLoadError(data);
	cocktail.resource.ResourceLoaderManager.loadNextResource();
}
cocktail.resource.ResourceLoaderManager.prototype.__class__ = cocktail.resource.ResourceLoaderManager;
cocktail.style.computer.FloatEmbeddedBoxComputer = function(p) { if( p === $_ ) return; {
	cocktail.style.computer.InlineEmbeddedBoxComputer.call(this);
}}
cocktail.style.computer.FloatEmbeddedBoxComputer.__name__ = ["cocktail","style","computer","FloatEmbeddedBoxComputer"];
cocktail.style.computer.FloatEmbeddedBoxComputer.__super__ = cocktail.style.computer.InlineEmbeddedBoxComputer;
for(var k in cocktail.style.computer.InlineEmbeddedBoxComputer.prototype ) cocktail.style.computer.FloatEmbeddedBoxComputer.prototype[k] = cocktail.style.computer.InlineEmbeddedBoxComputer.prototype[k];
cocktail.style.computer.FloatEmbeddedBoxComputer.prototype.__class__ = cocktail.style.computer.FloatEmbeddedBoxComputer;
utest.ui.common.HeaderDisplayMode = { __ename__ : ["utest","ui","common","HeaderDisplayMode"], __constructs__ : ["AlwaysShowHeader","NeverShowHeader","ShowHeaderWithResults"] }
utest.ui.common.HeaderDisplayMode.AlwaysShowHeader = ["AlwaysShowHeader",0];
utest.ui.common.HeaderDisplayMode.AlwaysShowHeader.toString = $estr;
utest.ui.common.HeaderDisplayMode.AlwaysShowHeader.__enum__ = utest.ui.common.HeaderDisplayMode;
utest.ui.common.HeaderDisplayMode.NeverShowHeader = ["NeverShowHeader",1];
utest.ui.common.HeaderDisplayMode.NeverShowHeader.toString = $estr;
utest.ui.common.HeaderDisplayMode.NeverShowHeader.__enum__ = utest.ui.common.HeaderDisplayMode;
utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults = ["ShowHeaderWithResults",2];
utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults.toString = $estr;
utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults.__enum__ = utest.ui.common.HeaderDisplayMode;
utest.ui.common.SuccessResultsDisplayMode = { __ename__ : ["utest","ui","common","SuccessResultsDisplayMode"], __constructs__ : ["AlwaysShowSuccessResults","NeverShowSuccessResults","ShowSuccessResultsWithNoErrors"] }
utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults = ["AlwaysShowSuccessResults",0];
utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults.toString = $estr;
utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults.__enum__ = utest.ui.common.SuccessResultsDisplayMode;
utest.ui.common.SuccessResultsDisplayMode.NeverShowSuccessResults = ["NeverShowSuccessResults",1];
utest.ui.common.SuccessResultsDisplayMode.NeverShowSuccessResults.toString = $estr;
utest.ui.common.SuccessResultsDisplayMode.NeverShowSuccessResults.__enum__ = utest.ui.common.SuccessResultsDisplayMode;
utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors = ["ShowSuccessResultsWithNoErrors",2];
utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors.toString = $estr;
utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors.__enum__ = utest.ui.common.SuccessResultsDisplayMode;
cocktail.domElement.ContainerDOMElementChildrenValue = { __ename__ : ["cocktail","domElement","ContainerDOMElementChildrenValue"], __constructs__ : ["DOMElement","TextNode"] }
cocktail.domElement.ContainerDOMElementChildrenValue.DOMElement = ["DOMElement",0];
cocktail.domElement.ContainerDOMElementChildrenValue.DOMElement.toString = $estr;
cocktail.domElement.ContainerDOMElementChildrenValue.DOMElement.__enum__ = cocktail.domElement.ContainerDOMElementChildrenValue;
cocktail.domElement.ContainerDOMElementChildrenValue.TextNode = ["TextNode",1];
cocktail.domElement.ContainerDOMElementChildrenValue.TextNode.toString = $estr;
cocktail.domElement.ContainerDOMElementChildrenValue.TextNode.__enum__ = cocktail.domElement.ContainerDOMElementChildrenValue;
cocktail.domElement.FillStyleValue = { __ename__ : ["cocktail","domElement","FillStyleValue"], __constructs__ : ["none","monochrome","gradient","bitmap"] }
cocktail.domElement.FillStyleValue.none = ["none",0];
cocktail.domElement.FillStyleValue.none.toString = $estr;
cocktail.domElement.FillStyleValue.none.__enum__ = cocktail.domElement.FillStyleValue;
cocktail.domElement.FillStyleValue.monochrome = function(colorStop) { var $x = ["monochrome",1,colorStop]; $x.__enum__ = cocktail.domElement.FillStyleValue; $x.toString = $estr; return $x; }
cocktail.domElement.FillStyleValue.gradient = function(gradientStyle) { var $x = ["gradient",2,gradientStyle]; $x.__enum__ = cocktail.domElement.FillStyleValue; $x.toString = $estr; return $x; }
cocktail.domElement.FillStyleValue.bitmap = function(imageDOMElement,repeat) { var $x = ["bitmap",3,imageDOMElement,repeat]; $x.__enum__ = cocktail.domElement.FillStyleValue; $x.toString = $estr; return $x; }
cocktail.domElement.LineStyleValue = { __ename__ : ["cocktail","domElement","LineStyleValue"], __constructs__ : ["none","monochrome","gradient","bitmap"] }
cocktail.domElement.LineStyleValue.none = ["none",0];
cocktail.domElement.LineStyleValue.none.toString = $estr;
cocktail.domElement.LineStyleValue.none.__enum__ = cocktail.domElement.LineStyleValue;
cocktail.domElement.LineStyleValue.monochrome = function(colorStop,lineStyle) { var $x = ["monochrome",1,colorStop,lineStyle]; $x.__enum__ = cocktail.domElement.LineStyleValue; $x.toString = $estr; return $x; }
cocktail.domElement.LineStyleValue.gradient = function(gradientStyle,lineStyle) { var $x = ["gradient",2,gradientStyle,lineStyle]; $x.__enum__ = cocktail.domElement.LineStyleValue; $x.toString = $estr; return $x; }
cocktail.domElement.LineStyleValue.bitmap = function(imageDOMElement,lineStyle,repeat) { var $x = ["bitmap",3,imageDOMElement,lineStyle,repeat]; $x.__enum__ = cocktail.domElement.LineStyleValue; $x.toString = $estr; return $x; }
cocktail.domElement.GradientTypeValue = { __ename__ : ["cocktail","domElement","GradientTypeValue"], __constructs__ : ["linear","radial"] }
cocktail.domElement.GradientTypeValue.linear = ["linear",0];
cocktail.domElement.GradientTypeValue.linear.toString = $estr;
cocktail.domElement.GradientTypeValue.linear.__enum__ = cocktail.domElement.GradientTypeValue;
cocktail.domElement.GradientTypeValue.radial = ["radial",1];
cocktail.domElement.GradientTypeValue.radial.toString = $estr;
cocktail.domElement.GradientTypeValue.radial.__enum__ = cocktail.domElement.GradientTypeValue;
cocktail.domElement.CapsStyleValue = { __ename__ : ["cocktail","domElement","CapsStyleValue"], __constructs__ : ["none","square","round"] }
cocktail.domElement.CapsStyleValue.none = ["none",0];
cocktail.domElement.CapsStyleValue.none.toString = $estr;
cocktail.domElement.CapsStyleValue.none.__enum__ = cocktail.domElement.CapsStyleValue;
cocktail.domElement.CapsStyleValue.square = ["square",1];
cocktail.domElement.CapsStyleValue.square.toString = $estr;
cocktail.domElement.CapsStyleValue.square.__enum__ = cocktail.domElement.CapsStyleValue;
cocktail.domElement.CapsStyleValue.round = ["round",2];
cocktail.domElement.CapsStyleValue.round.toString = $estr;
cocktail.domElement.CapsStyleValue.round.__enum__ = cocktail.domElement.CapsStyleValue;
cocktail.domElement.JointStyleValue = { __ename__ : ["cocktail","domElement","JointStyleValue"], __constructs__ : ["miter","round","bevel"] }
cocktail.domElement.JointStyleValue.miter = ["miter",0];
cocktail.domElement.JointStyleValue.miter.toString = $estr;
cocktail.domElement.JointStyleValue.miter.__enum__ = cocktail.domElement.JointStyleValue;
cocktail.domElement.JointStyleValue.round = ["round",1];
cocktail.domElement.JointStyleValue.round.toString = $estr;
cocktail.domElement.JointStyleValue.round.__enum__ = cocktail.domElement.JointStyleValue;
cocktail.domElement.JointStyleValue.bevel = ["bevel",2];
cocktail.domElement.JointStyleValue.bevel.toString = $estr;
cocktail.domElement.JointStyleValue.bevel.__enum__ = cocktail.domElement.JointStyleValue;
utest.ui.common.PackageResult = function(packageName) { if( packageName === $_ ) return; {
	this.packageName = packageName;
	this.classes = new Hash();
	this.packages = new Hash();
	this.stats = new utest.ui.common.ResultStats();
}}
utest.ui.common.PackageResult.__name__ = ["utest","ui","common","PackageResult"];
utest.ui.common.PackageResult.prototype.packageName = null;
utest.ui.common.PackageResult.prototype.classes = null;
utest.ui.common.PackageResult.prototype.packages = null;
utest.ui.common.PackageResult.prototype.stats = null;
utest.ui.common.PackageResult.prototype.addResult = function(result,flattenPackage) {
	var pack = this.getOrCreatePackage(result.pack,flattenPackage,this);
	var cls = this.getOrCreateClass(pack,result.cls,result.setup,result.teardown);
	var fix = this.createFixture(result.method,result.assertations);
	cls.add(fix);
}
utest.ui.common.PackageResult.prototype.addClass = function(result) {
	this.classes.set(result.className,result);
	this.stats.wire(result.stats);
}
utest.ui.common.PackageResult.prototype.addPackage = function(result) {
	this.packages.set(result.packageName,result);
	this.stats.wire(result.stats);
}
utest.ui.common.PackageResult.prototype.existsPackage = function(name) {
	return this.packages.exists(name);
}
utest.ui.common.PackageResult.prototype.existsClass = function(name) {
	return this.classes.exists(name);
}
utest.ui.common.PackageResult.prototype.getPackage = function(name) {
	if(this.packageName == null && name == "") return this;
	return this.packages.get(name);
}
utest.ui.common.PackageResult.prototype.getClass = function(name) {
	return this.classes.get(name);
}
utest.ui.common.PackageResult.prototype.classNames = function(errorsHavePriority) {
	if(errorsHavePriority == null) errorsHavePriority = true;
	var names = [];
	{ var $it0 = this.classes.keys();
	while( $it0.hasNext() ) { var name = $it0.next();
	names.push(name);
	}}
	if(errorsHavePriority) {
		var me = this;
		names.sort(function(a,b) {
			var $as = me.getClass(a).stats;
			var bs = me.getClass(b).stats;
			if($as.hasErrors) {
				return !bs.hasErrors?-1:$as.errors == bs.errors?Reflect.compare(a,b):Reflect.compare($as.errors,bs.errors);
			}
			else if(bs.hasErrors) {
				return 1;
			}
			else if($as.hasFailures) {
				return !bs.hasFailures?-1:$as.failures == bs.failures?Reflect.compare(a,b):Reflect.compare($as.failures,bs.failures);
			}
			else if(bs.hasFailures) {
				return 1;
			}
			else if($as.hasWarnings) {
				return !bs.hasWarnings?-1:$as.warnings == bs.warnings?Reflect.compare(a,b):Reflect.compare($as.warnings,bs.warnings);
			}
			else if(bs.hasWarnings) {
				return 1;
			}
			else {
				return Reflect.compare(a,b);
			}
		});
	}
	else {
		names.sort(function(a,b) {
			return Reflect.compare(a,b);
		});
	}
	return names;
}
utest.ui.common.PackageResult.prototype.packageNames = function(errorsHavePriority) {
	if(errorsHavePriority == null) errorsHavePriority = true;
	var names = [];
	if(this.packageName == null) names.push("");
	{ var $it0 = this.packages.keys();
	while( $it0.hasNext() ) { var name = $it0.next();
	names.push(name);
	}}
	if(errorsHavePriority) {
		var me = this;
		names.sort(function(a,b) {
			var $as = me.getPackage(a).stats;
			var bs = me.getPackage(b).stats;
			if($as.hasErrors) {
				return !bs.hasErrors?-1:$as.errors == bs.errors?Reflect.compare(a,b):Reflect.compare($as.errors,bs.errors);
			}
			else if(bs.hasErrors) {
				return 1;
			}
			else if($as.hasFailures) {
				return !bs.hasFailures?-1:$as.failures == bs.failures?Reflect.compare(a,b):Reflect.compare($as.failures,bs.failures);
			}
			else if(bs.hasFailures) {
				return 1;
			}
			else if($as.hasWarnings) {
				return !bs.hasWarnings?-1:$as.warnings == bs.warnings?Reflect.compare(a,b):Reflect.compare($as.warnings,bs.warnings);
			}
			else if(bs.hasWarnings) {
				return 1;
			}
			else {
				return Reflect.compare(a,b);
			}
		});
	}
	else {
		names.sort(function(a,b) {
			return Reflect.compare(a,b);
		});
	}
	return names;
}
utest.ui.common.PackageResult.prototype.createFixture = function(method,assertations) {
	var f = new utest.ui.common.FixtureResult(method);
	{ var $it0 = assertations.iterator();
	while( $it0.hasNext() ) { var assertation = $it0.next();
	f.add(assertation);
	}}
	return f;
}
utest.ui.common.PackageResult.prototype.getOrCreateClass = function(pack,cls,setup,teardown) {
	if(pack.existsClass(cls)) return pack.getClass(cls);
	var c = new utest.ui.common.ClassResult(cls,setup,teardown);
	pack.addClass(c);
	return c;
}
utest.ui.common.PackageResult.prototype.getOrCreatePackage = function(pack,flat,ref) {
	if(pack == null || pack == "") return ref;
	if(flat) {
		if(ref.existsPackage(pack)) return ref.getPackage(pack);
		var p = new utest.ui.common.PackageResult(pack);
		ref.addPackage(p);
		return p;
	}
	else {
		var parts = pack.split(".");
		{
			var _g = 0;
			while(_g < parts.length) {
				var part = parts[_g];
				++_g;
				ref = this.getOrCreatePackage(part,true,ref);
			}
		}
		return ref;
	}
}
utest.ui.common.PackageResult.prototype.__class__ = utest.ui.common.PackageResult;
utest.TestHandler = function(fixture) { if( fixture === $_ ) return; {
	if(fixture == null) throw "fixture argument is null";
	this.fixture = fixture;
	this.results = new List();
	this.asyncStack = new List();
	this.onTested = new utest.Dispatcher();
	this.onTimeout = new utest.Dispatcher();
	this.onComplete = new utest.Dispatcher();
}}
utest.TestHandler.__name__ = ["utest","TestHandler"];
utest.TestHandler.exceptionStack = function(pops) {
	if(pops == null) pops = 2;
	var stack = haxe.Stack.exceptionStack();
	while(pops-- > 0) {
		stack.pop();
	}
	return stack;
}
utest.TestHandler.prototype.results = null;
utest.TestHandler.prototype.fixture = null;
utest.TestHandler.prototype.asyncStack = null;
utest.TestHandler.prototype.onTested = null;
utest.TestHandler.prototype.onTimeout = null;
utest.TestHandler.prototype.onComplete = null;
utest.TestHandler.prototype.execute = function() {
	try {
		this.executeMethod(this.fixture.setup);
		try {
			this.executeMethod(this.fixture.method);
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					this.results.add(utest.Assertation.Error(e,utest.TestHandler.exceptionStack()));
				}
			}
		}
	}
	catch( $e1 ) {
		{
			var e = $e1;
			{
				this.results.add(utest.Assertation.SetupError(e,utest.TestHandler.exceptionStack()));
			}
		}
	}
	this.checkTested();
}
utest.TestHandler.prototype.checkTested = function() {
	if(this.expireson == null || this.asyncStack.length == 0) {
		this.tested();
	}
	else if(haxe.Timer.stamp() > this.expireson) {
		this.timeout();
	}
	else {
		haxe.Timer.delay($closure(this,"checkTested"),10);
	}
}
utest.TestHandler.prototype.expireson = null;
utest.TestHandler.prototype.setTimeout = function(timeout) {
	var newexpire = haxe.Timer.stamp() + timeout / 1000;
	this.expireson = this.expireson == null?newexpire:newexpire > this.expireson?newexpire:this.expireson;
}
utest.TestHandler.prototype.bindHandler = function() {
	utest.Assert.results = this.results;
	utest.Assert.createAsync = $closure(this,"addAsync");
	utest.Assert.createEvent = $closure(this,"addEvent");
}
utest.TestHandler.prototype.unbindHandler = function() {
	utest.Assert.results = null;
	utest.Assert.createAsync = function(f,t) {
		return function() {
			null;
		}
	}
	utest.Assert.createEvent = function(f,t) {
		return function(e) {
			null;
		}
	}
}
utest.TestHandler.prototype.addAsync = function(f,timeout) {
	if(timeout == null) timeout = 250;
	if(null == f) f = function() {
		null;
	}
	this.asyncStack.add(f);
	var handler = this;
	this.setTimeout(timeout);
	return function() {
		if(!handler.asyncStack.remove(f)) {
			handler.results.add(utest.Assertation.AsyncError("method already executed",[]));
			return;
		}
		try {
			handler.bindHandler();
			f();
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					handler.results.add(utest.Assertation.AsyncError(e,utest.TestHandler.exceptionStack(0)));
				}
			}
		}
	}
}
utest.TestHandler.prototype.addEvent = function(f,timeout) {
	if(timeout == null) timeout = 250;
	this.asyncStack.add(f);
	var handler = this;
	this.setTimeout(timeout);
	return function(e) {
		if(!handler.asyncStack.remove(f)) {
			handler.results.add(utest.Assertation.AsyncError("event already executed",[]));
			return;
		}
		try {
			handler.bindHandler();
			f(e);
		}
		catch( $e0 ) {
			{
				var e1 = $e0;
				{
					handler.results.add(utest.Assertation.AsyncError(e1,utest.TestHandler.exceptionStack(0)));
				}
			}
		}
	}
}
utest.TestHandler.prototype.executeMethod = function(name) {
	if(name == null) return;
	this.bindHandler();
	Reflect.field(this.fixture.target,name).apply(this.fixture.target,[]);
}
utest.TestHandler.prototype.tested = function() {
	if(this.results.length == 0) this.results.add(utest.Assertation.Warning("no assertions"));
	this.onTested.dispatch(this);
	this.completed();
}
utest.TestHandler.prototype.timeout = function() {
	this.results.add(utest.Assertation.TimeoutError(this.asyncStack.length,[]));
	this.onTimeout.dispatch(this);
	this.completed();
}
utest.TestHandler.prototype.completed = function() {
	try {
		this.executeMethod(this.fixture.teardown);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				this.results.add(utest.Assertation.TeardownError(e,utest.TestHandler.exceptionStack(2)));
			}
		}
	}
	this.unbindHandler();
	this.onComplete.dispatch(this);
}
utest.TestHandler.prototype.__class__ = utest.TestHandler;
cocktail.geom.RegistrationPointValue = { __ename__ : ["cocktail","geom","RegistrationPointValue"], __constructs__ : ["constant","point"] }
cocktail.geom.RegistrationPointValue.constant = function(registrationPointX,registrationPointY) { var $x = ["constant",0,registrationPointX,registrationPointY]; $x.__enum__ = cocktail.geom.RegistrationPointValue; $x.toString = $estr; return $x; }
cocktail.geom.RegistrationPointValue.point = function(point) { var $x = ["point",1,point]; $x.__enum__ = cocktail.geom.RegistrationPointValue; $x.toString = $estr; return $x; }
cocktail.geom.RegistrationPointXValue = { __ename__ : ["cocktail","geom","RegistrationPointXValue"], __constructs__ : ["left","center","right"] }
cocktail.geom.RegistrationPointXValue.left = ["left",0];
cocktail.geom.RegistrationPointXValue.left.toString = $estr;
cocktail.geom.RegistrationPointXValue.left.__enum__ = cocktail.geom.RegistrationPointXValue;
cocktail.geom.RegistrationPointXValue.center = ["center",1];
cocktail.geom.RegistrationPointXValue.center.toString = $estr;
cocktail.geom.RegistrationPointXValue.center.__enum__ = cocktail.geom.RegistrationPointXValue;
cocktail.geom.RegistrationPointXValue.right = ["right",2];
cocktail.geom.RegistrationPointXValue.right.toString = $estr;
cocktail.geom.RegistrationPointXValue.right.__enum__ = cocktail.geom.RegistrationPointXValue;
cocktail.geom.RegistrationPointYValue = { __ename__ : ["cocktail","geom","RegistrationPointYValue"], __constructs__ : ["top","middle","bottom"] }
cocktail.geom.RegistrationPointYValue.top = ["top",0];
cocktail.geom.RegistrationPointYValue.top.toString = $estr;
cocktail.geom.RegistrationPointYValue.top.__enum__ = cocktail.geom.RegistrationPointYValue;
cocktail.geom.RegistrationPointYValue.middle = ["middle",1];
cocktail.geom.RegistrationPointYValue.middle.toString = $estr;
cocktail.geom.RegistrationPointYValue.middle.__enum__ = cocktail.geom.RegistrationPointYValue;
cocktail.geom.RegistrationPointYValue.bottom = ["bottom",2];
cocktail.geom.RegistrationPointYValue.bottom.toString = $estr;
cocktail.geom.RegistrationPointYValue.bottom.__enum__ = cocktail.geom.RegistrationPointYValue;
utest.TestFixture = function(target,method,setup,teardown) { if( target === $_ ) return; {
	this.target = target;
	this.method = method;
	this.setup = setup;
	this.teardown = teardown;
}}
utest.TestFixture.__name__ = ["utest","TestFixture"];
utest.TestFixture.prototype.target = null;
utest.TestFixture.prototype.method = null;
utest.TestFixture.prototype.setup = null;
utest.TestFixture.prototype.teardown = null;
utest.TestFixture.prototype.checkMethod = function(name,arg) {
	var field = Reflect.field(this.target,name);
	if(field == null) throw arg + " function " + name + " is not a field of target";
	if(!Reflect.isFunction(field)) throw arg + " function " + name + " is not a function";
}
utest.TestFixture.prototype.__class__ = utest.TestFixture;
cocktail.style.FontSizeStyleValue = { __ename__ : ["cocktail","style","FontSizeStyleValue"], __constructs__ : ["length"] }
cocktail.style.FontSizeStyleValue.length = function(value) { var $x = ["length",0,value]; $x.__enum__ = cocktail.style.FontSizeStyleValue; $x.toString = $estr; return $x; }
cocktail.style.LineHeightStyleValue = { __ename__ : ["cocktail","style","LineHeightStyleValue"], __constructs__ : ["length"] }
cocktail.style.LineHeightStyleValue.length = function(value) { var $x = ["length",0,value]; $x.__enum__ = cocktail.style.LineHeightStyleValue; $x.toString = $estr; return $x; }
cocktail.style.VerticalAlignStyleValue = { __ename__ : ["cocktail","style","VerticalAlignStyleValue"], __constructs__ : ["baseline","sub","_super","top","textTop","middle","bottom","textBottom","percent","length"] }
cocktail.style.VerticalAlignStyleValue.baseline = ["baseline",0];
cocktail.style.VerticalAlignStyleValue.baseline.toString = $estr;
cocktail.style.VerticalAlignStyleValue.baseline.__enum__ = cocktail.style.VerticalAlignStyleValue;
cocktail.style.VerticalAlignStyleValue.sub = ["sub",1];
cocktail.style.VerticalAlignStyleValue.sub.toString = $estr;
cocktail.style.VerticalAlignStyleValue.sub.__enum__ = cocktail.style.VerticalAlignStyleValue;
cocktail.style.VerticalAlignStyleValue._super = ["_super",2];
cocktail.style.VerticalAlignStyleValue._super.toString = $estr;
cocktail.style.VerticalAlignStyleValue._super.__enum__ = cocktail.style.VerticalAlignStyleValue;
cocktail.style.VerticalAlignStyleValue.top = ["top",3];
cocktail.style.VerticalAlignStyleValue.top.toString = $estr;
cocktail.style.VerticalAlignStyleValue.top.__enum__ = cocktail.style.VerticalAlignStyleValue;
cocktail.style.VerticalAlignStyleValue.textTop = ["textTop",4];
cocktail.style.VerticalAlignStyleValue.textTop.toString = $estr;
cocktail.style.VerticalAlignStyleValue.textTop.__enum__ = cocktail.style.VerticalAlignStyleValue;
cocktail.style.VerticalAlignStyleValue.middle = ["middle",5];
cocktail.style.VerticalAlignStyleValue.middle.toString = $estr;
cocktail.style.VerticalAlignStyleValue.middle.__enum__ = cocktail.style.VerticalAlignStyleValue;
cocktail.style.VerticalAlignStyleValue.bottom = ["bottom",6];
cocktail.style.VerticalAlignStyleValue.bottom.toString = $estr;
cocktail.style.VerticalAlignStyleValue.bottom.__enum__ = cocktail.style.VerticalAlignStyleValue;
cocktail.style.VerticalAlignStyleValue.textBottom = ["textBottom",7];
cocktail.style.VerticalAlignStyleValue.textBottom.toString = $estr;
cocktail.style.VerticalAlignStyleValue.textBottom.__enum__ = cocktail.style.VerticalAlignStyleValue;
cocktail.style.VerticalAlignStyleValue.percent = function(value) { var $x = ["percent",8,value]; $x.__enum__ = cocktail.style.VerticalAlignStyleValue; $x.toString = $estr; return $x; }
cocktail.style.VerticalAlignStyleValue.length = function(value) { var $x = ["length",9,value]; $x.__enum__ = cocktail.style.VerticalAlignStyleValue; $x.toString = $estr; return $x; }
cocktail.style.MarginStyleValue = { __ename__ : ["cocktail","style","MarginStyleValue"], __constructs__ : ["length","percent","auto"] }
cocktail.style.MarginStyleValue.length = function(value) { var $x = ["length",0,value]; $x.__enum__ = cocktail.style.MarginStyleValue; $x.toString = $estr; return $x; }
cocktail.style.MarginStyleValue.percent = function(value) { var $x = ["percent",1,value]; $x.__enum__ = cocktail.style.MarginStyleValue; $x.toString = $estr; return $x; }
cocktail.style.MarginStyleValue.auto = ["auto",2];
cocktail.style.MarginStyleValue.auto.toString = $estr;
cocktail.style.MarginStyleValue.auto.__enum__ = cocktail.style.MarginStyleValue;
cocktail.style.PaddingStyleValue = { __ename__ : ["cocktail","style","PaddingStyleValue"], __constructs__ : ["length","percent"] }
cocktail.style.PaddingStyleValue.length = function(value) { var $x = ["length",0,value]; $x.__enum__ = cocktail.style.PaddingStyleValue; $x.toString = $estr; return $x; }
cocktail.style.PaddingStyleValue.percent = function(value) { var $x = ["percent",1,value]; $x.__enum__ = cocktail.style.PaddingStyleValue; $x.toString = $estr; return $x; }
cocktail.style.DimensionStyleValue = { __ename__ : ["cocktail","style","DimensionStyleValue"], __constructs__ : ["length","percent","auto"] }
cocktail.style.DimensionStyleValue.length = function(value) { var $x = ["length",0,value]; $x.__enum__ = cocktail.style.DimensionStyleValue; $x.toString = $estr; return $x; }
cocktail.style.DimensionStyleValue.percent = function(value) { var $x = ["percent",1,value]; $x.__enum__ = cocktail.style.DimensionStyleValue; $x.toString = $estr; return $x; }
cocktail.style.DimensionStyleValue.auto = ["auto",2];
cocktail.style.DimensionStyleValue.auto.toString = $estr;
cocktail.style.DimensionStyleValue.auto.__enum__ = cocktail.style.DimensionStyleValue;
cocktail.style.DisplayStyleValue = { __ename__ : ["cocktail","style","DisplayStyleValue"], __constructs__ : ["block","inlineBlock","_inline","none"] }
cocktail.style.DisplayStyleValue.block = ["block",0];
cocktail.style.DisplayStyleValue.block.toString = $estr;
cocktail.style.DisplayStyleValue.block.__enum__ = cocktail.style.DisplayStyleValue;
cocktail.style.DisplayStyleValue.inlineBlock = ["inlineBlock",1];
cocktail.style.DisplayStyleValue.inlineBlock.toString = $estr;
cocktail.style.DisplayStyleValue.inlineBlock.__enum__ = cocktail.style.DisplayStyleValue;
cocktail.style.DisplayStyleValue._inline = ["_inline",2];
cocktail.style.DisplayStyleValue._inline.toString = $estr;
cocktail.style.DisplayStyleValue._inline.__enum__ = cocktail.style.DisplayStyleValue;
cocktail.style.DisplayStyleValue.none = ["none",3];
cocktail.style.DisplayStyleValue.none.toString = $estr;
cocktail.style.DisplayStyleValue.none.__enum__ = cocktail.style.DisplayStyleValue;
cocktail.style.FloatStyleValue = { __ename__ : ["cocktail","style","FloatStyleValue"], __constructs__ : ["left","right","none"] }
cocktail.style.FloatStyleValue.left = ["left",0];
cocktail.style.FloatStyleValue.left.toString = $estr;
cocktail.style.FloatStyleValue.left.__enum__ = cocktail.style.FloatStyleValue;
cocktail.style.FloatStyleValue.right = ["right",1];
cocktail.style.FloatStyleValue.right.toString = $estr;
cocktail.style.FloatStyleValue.right.__enum__ = cocktail.style.FloatStyleValue;
cocktail.style.FloatStyleValue.none = ["none",2];
cocktail.style.FloatStyleValue.none.toString = $estr;
cocktail.style.FloatStyleValue.none.__enum__ = cocktail.style.FloatStyleValue;
cocktail.style.ClearStyleValue = { __ename__ : ["cocktail","style","ClearStyleValue"], __constructs__ : ["none","left","right","both"] }
cocktail.style.ClearStyleValue.none = ["none",0];
cocktail.style.ClearStyleValue.none.toString = $estr;
cocktail.style.ClearStyleValue.none.__enum__ = cocktail.style.ClearStyleValue;
cocktail.style.ClearStyleValue.left = ["left",1];
cocktail.style.ClearStyleValue.left.toString = $estr;
cocktail.style.ClearStyleValue.left.__enum__ = cocktail.style.ClearStyleValue;
cocktail.style.ClearStyleValue.right = ["right",2];
cocktail.style.ClearStyleValue.right.toString = $estr;
cocktail.style.ClearStyleValue.right.__enum__ = cocktail.style.ClearStyleValue;
cocktail.style.ClearStyleValue.both = ["both",3];
cocktail.style.ClearStyleValue.both.toString = $estr;
cocktail.style.ClearStyleValue.both.__enum__ = cocktail.style.ClearStyleValue;
cocktail.style.PositionStyleValue = { __ename__ : ["cocktail","style","PositionStyleValue"], __constructs__ : ["_static","relative","absolute","fixed"] }
cocktail.style.PositionStyleValue._static = ["_static",0];
cocktail.style.PositionStyleValue._static.toString = $estr;
cocktail.style.PositionStyleValue._static.__enum__ = cocktail.style.PositionStyleValue;
cocktail.style.PositionStyleValue.relative = ["relative",1];
cocktail.style.PositionStyleValue.relative.toString = $estr;
cocktail.style.PositionStyleValue.relative.__enum__ = cocktail.style.PositionStyleValue;
cocktail.style.PositionStyleValue.absolute = ["absolute",2];
cocktail.style.PositionStyleValue.absolute.toString = $estr;
cocktail.style.PositionStyleValue.absolute.__enum__ = cocktail.style.PositionStyleValue;
cocktail.style.PositionStyleValue.fixed = ["fixed",3];
cocktail.style.PositionStyleValue.fixed.toString = $estr;
cocktail.style.PositionStyleValue.fixed.__enum__ = cocktail.style.PositionStyleValue;
cocktail.style.PositionOffsetStyleValue = { __ename__ : ["cocktail","style","PositionOffsetStyleValue"], __constructs__ : ["length","percent","auto"] }
cocktail.style.PositionOffsetStyleValue.length = function(value) { var $x = ["length",0,value]; $x.__enum__ = cocktail.style.PositionOffsetStyleValue; $x.toString = $estr; return $x; }
cocktail.style.PositionOffsetStyleValue.percent = function(value) { var $x = ["percent",1,value]; $x.__enum__ = cocktail.style.PositionOffsetStyleValue; $x.toString = $estr; return $x; }
cocktail.style.PositionOffsetStyleValue.auto = ["auto",2];
cocktail.style.PositionOffsetStyleValue.auto.toString = $estr;
cocktail.style.PositionOffsetStyleValue.auto.__enum__ = cocktail.style.PositionOffsetStyleValue;
cocktail.style.ConstrainedDimensionStyleValue = { __ename__ : ["cocktail","style","ConstrainedDimensionStyleValue"], __constructs__ : ["length","percent","none"] }
cocktail.style.ConstrainedDimensionStyleValue.length = function(value) { var $x = ["length",0,value]; $x.__enum__ = cocktail.style.ConstrainedDimensionStyleValue; $x.toString = $estr; return $x; }
cocktail.style.ConstrainedDimensionStyleValue.percent = function(value) { var $x = ["percent",1,value]; $x.__enum__ = cocktail.style.ConstrainedDimensionStyleValue; $x.toString = $estr; return $x; }
cocktail.style.ConstrainedDimensionStyleValue.none = ["none",2];
cocktail.style.ConstrainedDimensionStyleValue.none.toString = $estr;
cocktail.style.ConstrainedDimensionStyleValue.none.__enum__ = cocktail.style.ConstrainedDimensionStyleValue;
cocktail.style.LengthValue = { __ename__ : ["cocktail","style","LengthValue"], __constructs__ : ["px","cm","mm","pt","pc","_in"] }
cocktail.style.LengthValue.px = function(value) { var $x = ["px",0,value]; $x.__enum__ = cocktail.style.LengthValue; $x.toString = $estr; return $x; }
cocktail.style.LengthValue.cm = function(value) { var $x = ["cm",1,value]; $x.__enum__ = cocktail.style.LengthValue; $x.toString = $estr; return $x; }
cocktail.style.LengthValue.mm = function(value) { var $x = ["mm",2,value]; $x.__enum__ = cocktail.style.LengthValue; $x.toString = $estr; return $x; }
cocktail.style.LengthValue.pt = function(value) { var $x = ["pt",3,value]; $x.__enum__ = cocktail.style.LengthValue; $x.toString = $estr; return $x; }
cocktail.style.LengthValue.pc = function(value) { var $x = ["pc",4,value]; $x.__enum__ = cocktail.style.LengthValue; $x.toString = $estr; return $x; }
cocktail.style.LengthValue._in = function(value) { var $x = ["_in",5,value]; $x.__enum__ = cocktail.style.LengthValue; $x.toString = $estr; return $x; }
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
cocktail.style.positioner.RelativePositioner = function(p) { if( p === $_ ) return; {
	cocktail.style.positioner.BoxPositioner.call(this);
}}
cocktail.style.positioner.RelativePositioner.__name__ = ["cocktail","style","positioner","RelativePositioner"];
cocktail.style.positioner.RelativePositioner.__super__ = cocktail.style.positioner.BoxPositioner;
for(var k in cocktail.style.positioner.BoxPositioner.prototype ) cocktail.style.positioner.RelativePositioner.prototype[k] = cocktail.style.positioner.BoxPositioner.prototype[k];
cocktail.style.positioner.RelativePositioner.prototype.position = function(domElement,containingDOMElementDimensions) {
	this.applyOffset(domElement,containingDOMElementDimensions);
}
cocktail.style.positioner.RelativePositioner.prototype.__class__ = cocktail.style.positioner.RelativePositioner;
haxe.Timer = function(time_ms) { if( time_ms === $_ ) return; {
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("haxe.Timer.arr[" + this.id + "].run();",time_ms);
}}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	}
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
}
haxe.Timer.prototype.run = function() {
	null;
}
haxe.Timer.prototype.__class__ = haxe.Timer;
if(!cocktail.keyboard.js) cocktail.keyboard.js = {}
cocktail.keyboard.js.Keyboard = function(p) { if( p === $_ ) return; {
	cocktail.keyboard.abstract.AbstractKeyboard.call(this);
}}
cocktail.keyboard.js.Keyboard.__name__ = ["cocktail","keyboard","js","Keyboard"];
cocktail.keyboard.js.Keyboard.__super__ = cocktail.keyboard.abstract.AbstractKeyboard;
for(var k in cocktail.keyboard.abstract.AbstractKeyboard.prototype ) cocktail.keyboard.js.Keyboard.prototype[k] = cocktail.keyboard.abstract.AbstractKeyboard.prototype[k];
cocktail.keyboard.js.Keyboard.prototype.setNativeKeyboardListeners = function() {
	js.Lib.document.addEventListener("keydown",$closure(this,"onNativeKeyDown"));
	js.Lib.document.addEventListener("keyup",$closure(this,"onNativeKeyUp"));
}
cocktail.keyboard.js.Keyboard.prototype.unsetNativeKeyboardListeners = function() {
	js.Lib.document.removeEventListener("keydown",$closure(this,"onNativeKeyDown"));
	js.Lib.document.removeEventListener("keyup",$closure(this,"onNativeKeyUp"));
}
cocktail.keyboard.js.Keyboard.prototype.getKeyData = function(event) {
	var key = { value : this.getKeyValue(event.keyCode), code : event.keyCode, ascii : event.charCode, altKey : event.altKey, controlKey : event.ctrlKey, shiftKey : event.shiftKey};
	return key;
}
cocktail.keyboard.js.Keyboard.prototype.__class__ = cocktail.keyboard.js.Keyboard;
cocktail.style.formatter.InlineFormattingContext = function(domElement,previousFormattingContext) { if( domElement === $_ ) return; {
	cocktail.style.formatter.FormattingContext.call(this,domElement,previousFormattingContext);
}}
cocktail.style.formatter.InlineFormattingContext.__name__ = ["cocktail","style","formatter","InlineFormattingContext"];
cocktail.style.formatter.InlineFormattingContext.__super__ = cocktail.style.formatter.FormattingContext;
for(var k in cocktail.style.formatter.FormattingContext.prototype ) cocktail.style.formatter.InlineFormattingContext.prototype[k] = cocktail.style.formatter.FormattingContext.prototype[k];
cocktail.style.formatter.InlineFormattingContext.prototype.place = function(domElement) {
	cocktail.style.formatter.FormattingContext.prototype.place.call(this,domElement);
	if(this.getRemainingLineWidth() - domElement.getOffsetWidth() < 0) {
		this.startNewLine();
	}
	domElement.setX(this._flowData.x + domElement.getStyle().getComputedStyle().marginLeft);
	domElement.setY(this._flowData.y + domElement.getStyle().getComputedStyle().marginTop);
	this._flowData.x += domElement.getOffsetWidth();
	if(domElement.getOffsetHeight() > this._flowData.maxLineHeight) {
		var oldMaxLineHeight = this._flowData.maxLineHeight;
		this._flowData.maxLineHeight = domElement.getOffsetHeight();
	}
}
cocktail.style.formatter.InlineFormattingContext.prototype.startNewLine = function() {
	this._flowData.y += this._flowData.maxLineHeight;
	this._flowData.totalHeight += this._flowData.maxLineHeight;
	this._flowData.maxLineHeight = 0;
	if(this._floatsManager.getLeftFloatOffset(this._flowData.y) > this._flowData.firstLineX) {
		this.getFlowData().x = this._floatsManager.getLeftFloatOffset(this._flowData.y);
	}
	else {
		this._flowData.x = this._flowData.firstLineX;
	}
}
cocktail.style.formatter.InlineFormattingContext.prototype.__class__ = cocktail.style.formatter.InlineFormattingContext;
utest.Assertation = { __ename__ : ["utest","Assertation"], __constructs__ : ["Success","Failure","Error","SetupError","TeardownError","TimeoutError","AsyncError","Warning"] }
utest.Assertation.Success = function(pos) { var $x = ["Success",0,pos]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.Failure = function(msg,pos) { var $x = ["Failure",1,msg,pos]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.Error = function(e,stack) { var $x = ["Error",2,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.SetupError = function(e,stack) { var $x = ["SetupError",3,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.TeardownError = function(e,stack) { var $x = ["TeardownError",4,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.TimeoutError = function(missedAsyncs,stack) { var $x = ["TimeoutError",5,missedAsyncs,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.AsyncError = function(e,stack) { var $x = ["AsyncError",6,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.Warning = function(msg) { var $x = ["Warning",7,msg]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
cocktail.style.computer.PositionedBoxComputer = function(p) { if( p === $_ ) return; {
	cocktail.style.computer.BoxComputer.call(this);
}}
cocktail.style.computer.PositionedBoxComputer.__name__ = ["cocktail","style","computer","PositionedBoxComputer"];
cocktail.style.computer.PositionedBoxComputer.__super__ = cocktail.style.computer.BoxComputer;
for(var k in cocktail.style.computer.BoxComputer.prototype ) cocktail.style.computer.PositionedBoxComputer.prototype[k] = cocktail.style.computer.BoxComputer.prototype[k];
cocktail.style.computer.PositionedBoxComputer.prototype.measurePositionOffsets = function(style,containingDOMElementDimensions) {
	cocktail.style.computer.BoxComputer.prototype.measurePositionOffsets.call(this,style,containingDOMElementDimensions);
	if(style.getWidth() == cocktail.style.DimensionStyleValue.auto) {
		if(style.getLeft() != cocktail.style.PositionOffsetStyleValue.auto && style.getRight() != cocktail.style.PositionOffsetStyleValue.auto) {
			var computedStyle = style.getComputedStyle();
			style.getComputedStyle().width = containingDOMElementDimensions.width - computedStyle.left - computedStyle.right - computedStyle.paddingLeft - computedStyle.paddingRight - computedStyle.marginLeft - computedStyle.marginRight;
		}
	}
	if(style.getHeight() == cocktail.style.DimensionStyleValue.auto) {
		if(style.getTop() != cocktail.style.PositionOffsetStyleValue.auto && style.getBottom() != cocktail.style.PositionOffsetStyleValue.auto) {
			var computedStyle = style.getComputedStyle();
			style.getComputedStyle().height = containingDOMElementDimensions.height - computedStyle.top - computedStyle.bottom - computedStyle.paddingTop - computedStyle.paddingBottom - computedStyle.marginTop - computedStyle.marginBottom;
		}
	}
}
cocktail.style.computer.PositionedBoxComputer.prototype.__class__ = cocktail.style.computer.PositionedBoxComputer;
cocktail.resource.js.AnimationLoader = function(p) { if( p === $_ ) return; {
	cocktail.resource.abstract.AbstractResourceLoader.call(this);
}}
cocktail.resource.js.AnimationLoader.__name__ = ["cocktail","resource","js","AnimationLoader"];
cocktail.resource.js.AnimationLoader.__super__ = cocktail.resource.abstract.AbstractResourceLoader;
for(var k in cocktail.resource.abstract.AbstractResourceLoader.prototype ) cocktail.resource.js.AnimationLoader.prototype[k] = cocktail.resource.abstract.AbstractResourceLoader.prototype[k];
cocktail.resource.js.AnimationLoader.prototype.__class__ = cocktail.resource.js.AnimationLoader;
haxe.io.Error = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
cocktail.nativeElement.NativeElementManager = function(p) { if( p === $_ ) return; {
	null;
}}
cocktail.nativeElement.NativeElementManager.__name__ = ["cocktail","nativeElement","NativeElementManager"];
cocktail.nativeElement.NativeElementManager._nativeElementCreator = null;
cocktail.nativeElement.NativeElementManager._nativeElementPathManager = null;
cocktail.nativeElement.NativeElementManager.getRoot = function() {
	if(cocktail.nativeElement.NativeElementManager._nativeElementPathManager == null) {
		cocktail.nativeElement.NativeElementManager._nativeElementPathManager = new cocktail.nativeElement.js.NativeElementPathManager();
	}
	return cocktail.nativeElement.NativeElementManager._nativeElementPathManager.getRoot();
}
cocktail.nativeElement.NativeElementManager.createNativeElement = function(nativeElementType) {
	if(cocktail.nativeElement.NativeElementManager._nativeElementCreator == null) {
		cocktail.nativeElement.NativeElementManager._nativeElementCreator = new cocktail.nativeElement.js.NativeElementCreator();
	}
	return cocktail.nativeElement.NativeElementManager._nativeElementCreator.createNativeElement(nativeElementType);
}
cocktail.nativeElement.NativeElementManager.createNativeTextNode = function(text) {
	if(cocktail.nativeElement.NativeElementManager._nativeElementCreator == null) {
		cocktail.nativeElement.NativeElementManager._nativeElementCreator = new cocktail.nativeElement.js.NativeElementCreator();
	}
	return cocktail.nativeElement.NativeElementManager._nativeElementCreator.createNativeTextNode(text);
}
cocktail.nativeElement.NativeElementManager.prototype.__class__ = cocktail.nativeElement.NativeElementManager;
slPlayer.core.block.BlockStateValue = { __ename__ : ["slPlayer","core","block","BlockStateValue"], __constructs__ : ["opened","closed","loading"] }
slPlayer.core.block.BlockStateValue.opened = ["opened",0];
slPlayer.core.block.BlockStateValue.opened.toString = $estr;
slPlayer.core.block.BlockStateValue.opened.__enum__ = slPlayer.core.block.BlockStateValue;
slPlayer.core.block.BlockStateValue.closed = ["closed",1];
slPlayer.core.block.BlockStateValue.closed.toString = $estr;
slPlayer.core.block.BlockStateValue.closed.__enum__ = slPlayer.core.block.BlockStateValue;
slPlayer.core.block.BlockStateValue.loading = ["loading",2];
slPlayer.core.block.BlockStateValue.loading.toString = $estr;
slPlayer.core.block.BlockStateValue.loading.__enum__ = slPlayer.core.block.BlockStateValue;
haxe.Http = function(url) { if( url === $_ ) return; {
	this.url = url;
	this.headers = new Hash();
	this.params = new Hash();
	this.async = true;
}}
haxe.Http.__name__ = ["haxe","Http"];
haxe.Http.requestUrl = function(url) {
	var h = new haxe.Http(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		r = d;
	}
	h.onError = function(e) {
		throw e;
	}
	h.request(false);
	return r;
}
haxe.Http.prototype.url = null;
haxe.Http.prototype.async = null;
haxe.Http.prototype.postData = null;
haxe.Http.prototype.headers = null;
haxe.Http.prototype.params = null;
haxe.Http.prototype.setHeader = function(header,value) {
	this.headers.set(header,value);
}
haxe.Http.prototype.setParameter = function(param,value) {
	this.params.set(param,value);
}
haxe.Http.prototype.setPostData = function(data) {
	this.postData = data;
}
haxe.Http.prototype.request = function(post) {
	var me = this;
	var r = new js.XMLHttpRequest();
	var onreadystatechange = function() {
		if(r.readyState != 4) return;
		var s = (function($this) {
			var $r;
			try {
				$r = r.status;
			}
			catch( $e0 ) {
				{
					var e = $e0;
					$r = null;
				}
			}
			return $r;
		}(this));
		if(s == undefined) s = null;
		if(s != null) me.onStatus(s);
		if(s != null && s >= 200 && s < 400) me.onData(r.responseText);
		else switch(s) {
		case null: case undefined:{
			me.onError("Failed to connect or resolve host");
		}break;
		case 12029:{
			me.onError("Failed to connect to host");
		}break;
		case 12007:{
			me.onError("Unknown host");
		}break;
		default:{
			me.onError("Http Error #" + r.status);
		}break;
		}
	}
	if(this.async) r.onreadystatechange = onreadystatechange;
	var uri = this.postData;
	if(uri != null) post = true;
	else { var $it1 = this.params.keys();
	while( $it1.hasNext() ) { var p = $it1.next();
	{
		if(uri == null) uri = "";
		else uri += "&";
		uri += StringTools.urlDecode(p) + "=" + StringTools.urlEncode(this.params.get(p));
	}
	}}
	try {
		if(post) r.open("POST",this.url,this.async);
		else if(uri != null) {
			var question = this.url.split("?").length <= 1;
			r.open("GET",this.url + (question?"?":"&") + uri,this.async);
			uri = null;
		}
		else r.open("GET",this.url,this.async);
	}
	catch( $e2 ) {
		{
			var e = $e2;
			{
				this.onError(e.toString());
				return;
			}
		}
	}
	if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	{ var $it3 = this.headers.keys();
	while( $it3.hasNext() ) { var h = $it3.next();
	r.setRequestHeader(h,this.headers.get(h));
	}}
	r.send(uri);
	if(!this.async) onreadystatechange();
}
haxe.Http.prototype.onData = function(data) {
	null;
}
haxe.Http.prototype.onError = function(msg) {
	null;
}
haxe.Http.prototype.onStatus = function(status) {
	null;
}
haxe.Http.prototype.__class__ = haxe.Http;
utest.Assert = function() { }
utest.Assert.__name__ = ["utest","Assert"];
utest.Assert.results = null;
utest.Assert.isTrue = function(cond,msg,pos) {
	if(utest.Assert.results == null) throw "Assert.results is not currently bound to any assert context";
	if(null == msg) msg = "expected true";
	if(cond) utest.Assert.results.add(utest.Assertation.Success(pos));
	else utest.Assert.results.add(utest.Assertation.Failure(msg,pos));
}
utest.Assert.isFalse = function(value,msg,pos) {
	if(null == msg) msg = "expected false";
	utest.Assert.isTrue(value == false,msg,pos);
}
utest.Assert.isNull = function(value,msg,pos) {
	if(msg == null) msg = "expected null but was " + utest.Assert.q(value);
	utest.Assert.isTrue(value == null,msg,pos);
}
utest.Assert.notNull = function(value,msg,pos) {
	if(null == msg) msg = "expected false";
	utest.Assert.isTrue(value != null,msg,pos);
}
utest.Assert["is"] = function(value,type,msg,pos) {
	if(msg == null) msg = "expected type " + utest.Assert.typeToString(type) + " but was " + utest.Assert.typeToString(value);
	utest.Assert.isTrue(Std["is"](value,type),msg,pos);
}
utest.Assert.notEquals = function(expected,value,msg,pos) {
	if(msg == null) msg = "expected " + utest.Assert.q(expected) + " and testa value " + utest.Assert.q(value) + " should be different";
	utest.Assert.isFalse(expected == value,msg,pos);
}
utest.Assert.equals = function(expected,value,msg,pos) {
	if(msg == null) msg = "expected " + utest.Assert.q(expected) + " but was " + utest.Assert.q(value);
	utest.Assert.isTrue(expected == value,msg,pos);
}
utest.Assert.match = function(pattern,value,msg,pos) {
	if(msg == null) msg = "the value " + utest.Assert.q(value) + "does not match the provided pattern";
	utest.Assert.isTrue(pattern.match(value),msg,pos);
}
utest.Assert.floatEquals = function(expected,value,approx,msg,pos) {
	if(msg == null) msg = "expected " + utest.Assert.q(expected) + " but was " + utest.Assert.q(value);
	return utest.Assert.isTrue(utest.Assert._floatEquals(expected,value,approx),msg,pos);
}
utest.Assert._floatEquals = function(expected,value,approx) {
	if(Math.isNaN(expected)) return Math.isNaN(value);
	else if(Math.isNaN(value)) return false;
	else if(!Math.isFinite(expected) && !Math.isFinite(value)) return expected > 0 == value > 0;
	if(null == approx) approx = 1e-5;
	return Math.abs(value - expected) < approx;
}
utest.Assert.getTypeName = function(v) {
	var $e = Type["typeof"](v);
	switch( $e[1] ) {
	case 0:
	{
		return "[null]";
	}break;
	case 1:
	{
		return "Int";
	}break;
	case 2:
	{
		return "Float";
	}break;
	case 3:
	{
		return "Bool";
	}break;
	case 5:
	{
		return "function";
	}break;
	case 6:
	var c = $e[2];
	{
		return Type.getClassName(c);
	}break;
	case 7:
	var e = $e[2];
	{
		return Type.getEnumName(e);
	}break;
	case 4:
	{
		return "Object";
	}break;
	case 8:
	{
		return "Unknown";
	}break;
	}
}
utest.Assert.isIterable = function(v,isAnonym) {
	var fields = isAnonym?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"iterator")) return false;
	return Reflect.isFunction(Reflect.field(v,"iterator"));
}
utest.Assert.isIterator = function(v,isAnonym) {
	var fields = isAnonym?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"next") || !Lambda.has(fields,"hasNext")) return false;
	return Reflect.isFunction(Reflect.field(v,"next")) && Reflect.isFunction(Reflect.field(v,"hasNext"));
}
utest.Assert.sameAs = function(expected,value,status) {
	var texpected = utest.Assert.getTypeName(expected);
	var tvalue = utest.Assert.getTypeName(value);
	var isanonym = texpected == "Object";
	if(texpected != tvalue) {
		status.error = "expected type " + texpected + " but it is " + tvalue + (status.path == ""?"":" for field " + status.path);
		return false;
	}
	var $e = Type["typeof"](expected);
	switch( $e[1] ) {
	case 2:
	{
		return utest.Assert._floatEquals(expected,value);
	}break;
	case 0:
	case 1:
	case 3:
	{
		if(expected != value) {
			status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
			return false;
		}
		return true;
	}break;
	case 5:
	{
		if(!Reflect.compareMethods(expected,value)) {
			status.error = "expected same function reference" + (status.path == ""?"":" for field " + status.path);
			return false;
		}
		return true;
	}break;
	case 6:
	var c = $e[2];
	{
		var cexpected = Type.getClassName(c);
		var cvalue = Type.getClassName(Type.getClass(value));
		if(cexpected != cvalue) {
			status.error = "expected instance of " + utest.Assert.q(cexpected) + " but it is " + utest.Assert.q(cvalue) + (status.path == ""?"":" for field " + status.path);
			return false;
		}
		if(Std["is"](expected,String) && expected != value) {
			status.error = "expected '" + expected + "' but it is '" + value + "'";
			return false;
		}
		if(Std["is"](expected,Array)) {
			if(status.recursive || status.path == "") {
				if(expected.length != value.length) {
					status.error = "expected " + expected.length + " elements but they were " + value.length + (status.path == ""?"":" for field " + status.path);
					return false;
				}
				var path = status.path;
				{
					var _g1 = 0, _g = expected.length;
					while(_g1 < _g) {
						var i = _g1++;
						status.path = path == ""?"array[" + i + "]":path + "[" + i + "]";
						if(!utest.Assert.sameAs(expected[i],value[i],status)) {
							status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
							return false;
						}
					}
				}
			}
			return true;
		}
		if(Std["is"](expected,Date)) {
			if(expected.getTime() != value.getTime()) {
				status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
				return false;
			}
			return true;
		}
		if(Std["is"](expected,haxe.io.Bytes)) {
			if(status.recursive || status.path == "") {
				var ebytes = expected;
				var vbytes = value;
				if(ebytes.length != vbytes.length) return false;
				{
					var _g1 = 0, _g = ebytes.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(ebytes.b[i] != vbytes.b[i]) {
							status.error = "expected byte " + ebytes.b[i] + " but wss " + ebytes.b[i] + (status.path == ""?"":" for field " + status.path);
							return false;
						}
					}
				}
			}
			return true;
		}
		if(Std["is"](expected,Hash) || Std["is"](expected,IntHash)) {
			if(status.recursive || status.path == "") {
				var keys = Lambda.array({ iterator : function() {
					return expected.keys();
				}});
				var vkeys = Lambda.array({ iterator : function() {
					return value.keys();
				}});
				if(keys.length != vkeys.length) {
					status.error = "expected " + keys.length + " keys but they were " + vkeys.length + (status.path == ""?"":" for field " + status.path);
					return false;
				}
				var path = status.path;
				{
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						status.path = path == ""?"hash[" + key + "]":path + "[" + key + "]";
						if(!utest.Assert.sameAs(expected.get(key),value.get(key),status)) {
							status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
							return false;
						}
					}
				}
			}
			return true;
		}
		if(utest.Assert.isIterator(expected,false)) {
			if(status.recursive || status.path == "") {
				var evalues = Lambda.array({ iterator : function() {
					return expected;
				}});
				var vvalues = Lambda.array({ iterator : function() {
					return value;
				}});
				if(evalues.length != vvalues.length) {
					status.error = "expected " + evalues.length + " values in Iterator but they were " + vvalues.length + (status.path == ""?"":" for field " + status.path);
					return false;
				}
				var path = status.path;
				{
					var _g1 = 0, _g = evalues.length;
					while(_g1 < _g) {
						var i = _g1++;
						status.path = path == ""?"iterator[" + i + "]":path + "[" + i + "]";
						if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) {
							status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
							return false;
						}
					}
				}
			}
			return true;
		}
		if(utest.Assert.isIterable(expected,false)) {
			if(status.recursive || status.path == "") {
				var evalues = Lambda.array(expected);
				var vvalues = Lambda.array(value);
				if(evalues.length != vvalues.length) {
					status.error = "expected " + evalues.length + " values in Iterable but they were " + vvalues.length + (status.path == ""?"":" for field " + status.path);
					return false;
				}
				var path = status.path;
				{
					var _g1 = 0, _g = evalues.length;
					while(_g1 < _g) {
						var i = _g1++;
						status.path = path == ""?"iterable[" + i + "]":path + "[" + i + "]";
						if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) return false;
					}
				}
			}
			return true;
		}
		if(status.recursive || status.path == "") {
			var fields = Type.getInstanceFields(Type.getClass(expected));
			var path = status.path;
			{
				var _g = 0;
				while(_g < fields.length) {
					var field = fields[_g];
					++_g;
					status.path = path == ""?field:path + "." + field;
					var e = Reflect.field(expected,field);
					if(Reflect.isFunction(e)) continue;
					var v = Reflect.field(value,field);
					if(!utest.Assert.sameAs(e,v,status)) return false;
				}
			}
		}
		return true;
	}break;
	case 7:
	var e = $e[2];
	{
		var eexpected = Type.getEnumName(e);
		var evalue = Type.getEnumName(Type.getEnum(value));
		if(eexpected != evalue) {
			status.error = "expected enumeration of " + utest.Assert.q(eexpected) + " but it is " + utest.Assert.q(evalue) + (status.path == ""?"":" for field " + status.path);
			return false;
		}
		if(status.recursive || status.path == "") {
			if(expected[1] != value[1]) {
				status.error = "expected " + utest.Assert.q(expected[0]) + " but is " + utest.Assert.q(value[0]) + (status.path == ""?"":" for field " + status.path);
				return false;
			}
			var eparams = expected.slice(2);
			var vparams = value.slice(2);
			var path = status.path;
			{
				var _g1 = 0, _g = eparams.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"enum[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(eparams[i],vparams[i],status)) {
						status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
						return false;
					}
				}
			}
		}
		return true;
	}break;
	case 4:
	{
		if(status.recursive || status.path == "") {
			var tfields = Reflect.fields(value);
			var fields = Reflect.fields(expected);
			var path = status.path;
			{
				var _g = 0;
				while(_g < fields.length) {
					var field = fields[_g];
					++_g;
					tfields.remove(field);
					status.path = path == ""?field:path + "." + field;
					if(!Reflect.hasField(value,field)) {
						status.error = "expected field " + status.path + " does not exist in " + utest.Assert.q(value);
						return false;
					}
					var e = Reflect.field(expected,field);
					if(Reflect.isFunction(e)) continue;
					var v = Reflect.field(value,field);
					if(!utest.Assert.sameAs(e,v,status)) return false;
				}
			}
			if(tfields.length > 0) {
				status.error = "the tested object has extra field(s) (" + tfields.join(", ") + ") not included in the expected ones";
				return false;
			}
		}
		if(utest.Assert.isIterator(expected,true)) {
			if(!utest.Assert.isIterator(value,true)) {
				status.error = "expected Iterable but it is not " + (status.path == ""?"":" for field " + status.path);
				return false;
			}
			if(status.recursive || status.path == "") {
				var evalues = Lambda.array({ iterator : function() {
					return expected;
				}});
				var vvalues = Lambda.array({ iterator : function() {
					return value;
				}});
				if(evalues.length != vvalues.length) {
					status.error = "expected " + evalues.length + " values in Iterator but they were " + vvalues.length + (status.path == ""?"":" for field " + status.path);
					return false;
				}
				var path = status.path;
				{
					var _g1 = 0, _g = evalues.length;
					while(_g1 < _g) {
						var i = _g1++;
						status.path = path == ""?"iterator[" + i + "]":path + "[" + i + "]";
						if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) {
							status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
							return false;
						}
					}
				}
			}
			return true;
		}
		if(utest.Assert.isIterable(expected,true)) {
			if(!utest.Assert.isIterable(value,true)) {
				status.error = "expected Iterator but it is not " + (status.path == ""?"":" for field " + status.path);
				return false;
			}
			if(status.recursive || status.path == "") {
				var evalues = Lambda.array(expected);
				var vvalues = Lambda.array(value);
				if(evalues.length != vvalues.length) {
					status.error = "expected " + evalues.length + " values in Iterable but they were " + vvalues.length + (status.path == ""?"":" for field " + status.path);
					return false;
				}
				var path = status.path;
				{
					var _g1 = 0, _g = evalues.length;
					while(_g1 < _g) {
						var i = _g1++;
						status.path = path == ""?"iterable[" + i + "]":path + "[" + i + "]";
						if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) return false;
					}
				}
			}
			return true;
		}
		return true;
	}break;
	case 8:
	{
		return (function($this) {
			var $r;
			throw "Unable to compare two unknown types";
			return $r;
		}(this));
	}break;
	}
	return (function($this) {
		var $r;
		throw "Unable to compare values: " + utest.Assert.q(expected) + " and " + utest.Assert.q(value);
		return $r;
	}(this));
}
utest.Assert.q = function(v) {
	if(Std["is"](v,String)) return "\"" + StringTools.replace(v,"\"","\\\"") + "\"";
	else return Std.string(v);
}
utest.Assert.same = function(expected,value,recursive,msg,pos) {
	if(null == recursive) recursive = true;
	var status = { recursive : recursive, path : "", error : null};
	if(utest.Assert.sameAs(expected,value,status)) {
		utest.Assert.isTrue(true,msg,pos);
	}
	else {
		utest.Assert.fail(msg == null?status.error:msg,pos);
	}
}
utest.Assert.raises = function(method,type,msgNotThrown,msgWrongType,pos) {
	if(type == null) type = String;
	try {
		method();
		var name = Type.getClassName(type);
		if(name == null) name = "" + type;
		if(null == msgNotThrown) msgNotThrown = "exception of type " + name + " not raised";
		utest.Assert.fail(msgNotThrown,pos);
	}
	catch( $e0 ) {
		{
			var ex = $e0;
			{
				var name = Type.getClassName(type);
				if(name == null) name = "" + type;
				if(null == msgWrongType) msgWrongType = "expected throw of type " + name + " but was " + ex;
				utest.Assert.isTrue(Std["is"](ex,type),msgWrongType,pos);
			}
		}
	}
}
utest.Assert.allows = function(possibilities,value,msg,pos) {
	if(Lambda.has(possibilities,value)) {
		utest.Assert.isTrue(true,msg,pos);
	}
	else {
		utest.Assert.fail(msg == null?"value " + utest.Assert.q(value) + " not found in the expected possibilities " + possibilities:msg,pos);
	}
}
utest.Assert.contains = function(match,values,msg,pos) {
	if(Lambda.has(values,match)) {
		utest.Assert.isTrue(true,msg,pos);
	}
	else {
		utest.Assert.fail(msg == null?"values " + utest.Assert.q(values) + " do not contain " + match:msg,pos);
	}
}
utest.Assert.notContains = function(match,values,msg,pos) {
	if(!Lambda.has(values,match)) {
		utest.Assert.isTrue(true,msg,pos);
	}
	else {
		utest.Assert.fail(msg == null?"values " + utest.Assert.q(values) + " do contain " + match:msg,pos);
	}
}
utest.Assert.stringContains = function(match,value,msg,pos) {
	if(value != null && value.indexOf(match) >= 0) {
		utest.Assert.isTrue(true,msg,pos);
	}
	else {
		utest.Assert.fail(msg == null?"value " + utest.Assert.q(value) + " does not contain " + utest.Assert.q(match):msg,pos);
	}
}
utest.Assert.stringSequence = function(sequence,value,msg,pos) {
	if(null == value) {
		utest.Assert.fail(msg == null?"null argument value":msg,pos);
		return;
	}
	var p = 0;
	{
		var _g = 0;
		while(_g < sequence.length) {
			var s = sequence[_g];
			++_g;
			var p2 = value.indexOf(s,p);
			if(p2 < 0) {
				if(msg == null) {
					msg = "expected '" + s + "' after ";
					if(p > 0) {
						var cut = value.substr(0,p);
						if(cut.length > 30) cut = "..." + cut.substr(-27);
						msg += " '" + cut + "'";
					}
					else msg += " begin";
				}
				utest.Assert.fail(msg,pos);
				return;
			}
			p = p2 + s.length;
		}
	}
	utest.Assert.isTrue(true,msg,pos);
}
utest.Assert.fail = function(msg,pos) {
	if(msg == null) msg = "failure expected";
	utest.Assert.isTrue(false,msg,pos);
}
utest.Assert.warn = function(msg) {
	utest.Assert.results.add(utest.Assertation.Warning(msg));
}
utest.Assert.createAsync = function(f,timeout) {
	return function() {
		null;
	}
}
utest.Assert.createEvent = function(f,timeout) {
	return function(e) {
		null;
	}
}
utest.Assert.typeToString = function(t) {
	try {
		var _t = Type.getClass(t);
		if(_t != null) t = _t;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			null;
		}
	}
	try {
		return Type.getClassName(t);
	}
	catch( $e1 ) {
		{
			var e = $e1;
			null;
		}
	}
	try {
		var _t = Type.getEnum(t);
		if(_t != null) t = _t;
	}
	catch( $e2 ) {
		{
			var e = $e2;
			null;
		}
	}
	try {
		return Type.getEnumName(t);
	}
	catch( $e3 ) {
		{
			var e = $e3;
			null;
		}
	}
	try {
		return Std.string(Type["typeof"](t));
	}
	catch( $e4 ) {
		{
			var e = $e4;
			null;
		}
	}
	try {
		return Std.string(t);
	}
	catch( $e5 ) {
		{
			var e = $e5;
			null;
		}
	}
	return "<unable to retrieve type name>";
}
utest.Assert.prototype.__class__ = utest.Assert;
slPlayer.core.config.Config = function(p) { if( p === $_ ) return; {
	null;
}}
slPlayer.core.config.Config.__name__ = ["slPlayer","core","config","Config"];
slPlayer.core.config.Config.getConfigData = function() {
	return slPlayer.core.config.Config.duplicateConfigData(slPlayer.core.config.Config.configData);
}
slPlayer.core.config.Config.setConfigData = function(newConfigData) {
	slPlayer.core.config.Config.configData = slPlayer.core.config.Config.duplicateConfigData(newConfigData);
}
slPlayer.core.config.Config.addConfigValues = function(stringObject) {
	if(stringObject.publicationId != null) slPlayer.core.config.Config.configData.publicationId = stringObject.publicationId;
	if(stringObject.scaleMode != null) slPlayer.core.config.Config.configData.scaleMode = Type.createEnum(slPlayer.core.config.ScaleModeValue,stringObject.scaleMode);
}
slPlayer.core.config.Config.getConfigDataAsUntyped = function() {
	var stringObject = { publicationId : slPlayer.core.config.Config.configData.publicationId, scaleMode : Std.string(slPlayer.core.config.Config.configData.scaleMode)};
	return stringObject;
}
slPlayer.core.config.Config.duplicateConfigData = function(configData) {
	var duplicatedConfigData = { publicationId : configData.publicationId, scaleMode : configData.scaleMode, runtime : configData.runtime};
	return duplicatedConfigData;
}
slPlayer.core.config.Config.prototype.__class__ = slPlayer.core.config.Config;
slPlayer.core.XmlUtils = function() { }
slPlayer.core.XmlUtils.__name__ = ["slPlayer","core","XmlUtils"];
slPlayer.core.XmlUtils.cleanUp = function(xml) {
	var xmlCopy = Xml.parse(xml.toString()).firstElement();
	if(xmlCopy != null) {
		return slPlayer.core.XmlUtils.cleanUpRecursive(xmlCopy);
	}
	else {
		return xml;
	}
}
slPlayer.core.XmlUtils.cleanUpRecursive = function(xml) {
	var whiteSpaceValues = ["\n","\r","\t"];
	var childData = null;
	var child = null;
	var cleanedXml = null;
	switch(xml.nodeType) {
	case Xml.Document:{
		cleanedXml = Xml.createDocument();
	}break;
	case Xml.Element:{
		cleanedXml = Xml.createElement(xml.getNodeName());
		{ var $it0 = xml.attributes();
		while( $it0.hasNext() ) { var attrib = $it0.next();
		{
			cleanedXml.set(attrib,xml.get(attrib));
		}
		}}
	}break;
	default:{
		null;
	}break;
	}
	{ var $it1 = xml.iterator();
	while( $it1.hasNext() ) { var child1 = $it1.next();
	{
		switch(child1.nodeType) {
		case Xml.Element:{
			childData = slPlayer.core.XmlUtils.cleanUpRecursive(child1);
			cleanedXml.addChild(childData);
		}break;
		case Xml.Comment:{
			null;
		}break;
		default:{
			var nodeValue = child1.getNodeValue();
			if(nodeValue.substr(0,4) == "<!--" && nodeValue.substr(-3) == "-->") {
				nodeValue = "";
			}
			{
				var _g = 0;
				while(_g < whiteSpaceValues.length) {
					var whiteSpace = whiteSpaceValues[_g];
					++_g;
					nodeValue = StringTools.replace(nodeValue,whiteSpace,"");
				}
			}
			while(nodeValue.substr(0,1) == " ") {
				nodeValue = nodeValue.substr(1);
			}
			if(nodeValue != "") {
				cleanedXml.addChild(child1);
			}
		}break;
		}
	}
	}}
	return cleanedXml;
}
slPlayer.core.XmlUtils.stringIndent2Xml = function(xmlString) {
	var xml = Xml.parse(xmlString);
	return slPlayer.core.XmlUtils.cleanUp(xml);
}
slPlayer.core.XmlUtils.xml2StringIndent = function(xml) {
	var firstElement = xml.firstElement();
	return slPlayer.core.XmlUtils.xml2StringIndentRecursive(firstElement,"");
}
slPlayer.core.XmlUtils.xml2StringIndentRecursive = function(xml,indentationLevel) {
	if(indentationLevel == null) indentationLevel = "";
	var toReturn = "";
	toReturn += indentationLevel + "<" + xml.getNodeName();
	{ var $it0 = xml.attributes();
	while( $it0.hasNext() ) { var attrib = $it0.next();
	{
		toReturn += " " + attrib + "=\"" + xml.get(attrib) + "\"";
	}
	}}
	toReturn += ">";
	var firstChild = xml.firstChild();
	if(firstChild != null) {
		switch(firstChild.nodeType) {
		case Xml.CData:{
			toReturn += "<![CDATA[" + firstChild.getNodeValue() + "]]>";
		}break;
		case Xml.PCData:{
			toReturn += firstChild;
		}break;
		case Xml.Element:{
			toReturn += "\n";
			var element;
			{ var $it1 = xml.iterator();
			while( $it1.hasNext() ) { var element1 = $it1.next();
			{
				toReturn += slPlayer.core.XmlUtils.xml2StringIndentRecursive(element1,indentationLevel + "\t");
			}
			}}
			toReturn += indentationLevel;
		}break;
		default:{
			null;
		}break;
		}
	}
	toReturn += "</" + xml.getNodeName() + ">\n";
	return toReturn;
}
slPlayer.core.XmlUtils.prototype.__class__ = slPlayer.core.XmlUtils;
cocktail.domElement.js.AnimationDOMElement = function(nativeElement) { if( nativeElement === $_ ) return; {
	cocktail.domElement.abstract.AbstractAnimationDOMElement.call(this,nativeElement);
}}
cocktail.domElement.js.AnimationDOMElement.__name__ = ["cocktail","domElement","js","AnimationDOMElement"];
cocktail.domElement.js.AnimationDOMElement.__super__ = cocktail.domElement.abstract.AbstractAnimationDOMElement;
for(var k in cocktail.domElement.abstract.AbstractAnimationDOMElement.prototype ) cocktail.domElement.js.AnimationDOMElement.prototype[k] = cocktail.domElement.abstract.AbstractAnimationDOMElement.prototype[k];
cocktail.domElement.js.AnimationDOMElement.prototype.__class__ = cocktail.domElement.js.AnimationDOMElement;
if(!cocktail.nativeInstance) cocktail.nativeInstance = {}
cocktail.nativeInstance.NativeInstanceManager = function(p) { if( p === $_ ) return; {
	null;
}}
cocktail.nativeInstance.NativeInstanceManager.__name__ = ["cocktail","nativeInstance","NativeInstanceManager"];
cocktail.nativeInstance.NativeInstanceManager.getClassInstanceByClassName = function(className) {
	return new cocktail.classInstance.js.ClassInstance(className);
}
cocktail.nativeInstance.NativeInstanceManager.createInstanceOf = function(classReference) {
	return cocktail.nativeInstance.NativeInstanceManager.getClassInstanceByClassName(Type.getClassName(classReference));
}
cocktail.nativeInstance.NativeInstanceManager.prototype.__class__ = cocktail.nativeInstance.NativeInstanceManager;
cocktail.resource.js.ContainerLoader = function(p) { if( p === $_ ) return; {
	cocktail.resource.abstract.AbstractResourceLoader.call(this);
}}
cocktail.resource.js.ContainerLoader.__name__ = ["cocktail","resource","js","ContainerLoader"];
cocktail.resource.js.ContainerLoader.__super__ = cocktail.resource.abstract.AbstractResourceLoader;
for(var k in cocktail.resource.abstract.AbstractResourceLoader.prototype ) cocktail.resource.js.ContainerLoader.prototype[k] = cocktail.resource.abstract.AbstractResourceLoader.prototype[k];
cocktail.resource.js.ContainerLoader.prototype.onLoadComplete = function(data) {
	var domElement = new cocktail.domElement.js.ContainerDOMElement(cocktail.nativeElement.NativeElementManager.createNativeElement(cocktail.nativeElement.NativeElementTypeValue.neutral));
	domElement.getNativeElement().innerHTML = data;
	this._onLoadCompleteCallback(domElement);
}
cocktail.resource.js.ContainerLoader.prototype.__class__ = cocktail.resource.js.ContainerLoader;
cocktail.style.computer.FontComputer = function(p) { if( p === $_ ) return; {
	null;
}}
cocktail.style.computer.FontComputer.__name__ = ["cocktail","style","computer","FontComputer"];
cocktail.style.computer.FontComputer.compute = function(style) {
	var computedStyle = style.getComputedStyle();
	computedStyle.fontSize = cocktail.style.computer.FontComputer.getComputedFontSize(style);
	computedStyle.lineHeight = cocktail.style.computer.FontComputer.getComputedLineHeight(style);
}
cocktail.style.computer.FontComputer.getComputedLineHeight = function(style) {
	var lineHeight;
	var $e = style.getLineHeight();
	switch( $e[1] ) {
	case 0:
	var unit = $e[2];
	{
		lineHeight = cocktail.style.computer.FontComputer.getValueFromLength(unit);
	}break;
	}
	return lineHeight;
}
cocktail.style.computer.FontComputer.getComputedFontSize = function(style) {
	var fontSize;
	var $e = style.getFontSize();
	switch( $e[1] ) {
	case 0:
	var unit = $e[2];
	{
		fontSize = cocktail.style.computer.FontComputer.getValueFromLength(unit);
	}break;
	}
	return fontSize;
}
cocktail.style.computer.FontComputer.getValueFromLength = function(length) {
	var lengthValue;
	var $e = length;
	switch( $e[1] ) {
	case 0:
	var value = $e[2];
	{
		lengthValue = value;
	}break;
	case 2:
	var value = $e[2];
	{
		lengthValue = value * (72 * (1 / 0.75) / 2.54) / 10;
	}break;
	case 1:
	var value = $e[2];
	{
		lengthValue = value * (72 * (1 / 0.75) / 2.54);
	}break;
	case 3:
	var value = $e[2];
	{
		lengthValue = value / 0.75;
	}break;
	case 5:
	var value = $e[2];
	{
		lengthValue = value * (72 * (1 / 0.75));
	}break;
	case 4:
	var value = $e[2];
	{
		lengthValue = value * (12 * (1 / 0.75));
	}break;
	}
	return lengthValue;
}
cocktail.style.computer.FontComputer.prototype.__class__ = cocktail.style.computer.FontComputer;
EReg = function(r,opt) { if( r === $_ ) return; {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return this.r.m != null;
}
EReg.prototype.matched = function(n) {
	return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length};
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b[buf.b.length] = this.matchedLeft();
		buf.b[buf.b.length] = f(this);
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s;
	return buf.b.join("");
}
EReg.prototype.__class__ = EReg;
Xml = function(p) { if( p === $_ ) return; {
	null;
}}
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.Prolog = null;
Xml.Document = null;
Xml.parse = function(str) {
	var rules = [Xml.enode,Xml.epcdata,Xml.eend,Xml.ecdata,Xml.edoctype,Xml.ecomment,Xml.eprolog];
	var nrules = rules.length;
	var current = Xml.createDocument();
	var stack = new List();
	while(str.length > 0) {
		var i = 0;
		try {
			while(i < nrules) {
				var r = rules[i];
				if(r.match(str)) {
					switch(i) {
					case 0:{
						var x = Xml.createElement(r.matched(1));
						current.addChild(x);
						str = r.matchedRight();
						while(Xml.eattribute.match(str)) {
							x.set(Xml.eattribute.matched(1),Xml.eattribute.matched(3));
							str = Xml.eattribute.matchedRight();
						}
						if(!Xml.eclose.match(str)) {
							i = nrules;
							throw "__break__";
						}
						if(Xml.eclose.matched(1) == ">") {
							stack.push(current);
							current = x;
						}
						str = Xml.eclose.matchedRight();
					}break;
					case 1:{
						var x = Xml.createPCData(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					case 2:{
						if(current._children != null && current._children.length == 0) {
							var e = Xml.createPCData("");
							current.addChild(e);
						}
						else null;
						if(r.matched(1) != current._nodeName || stack.isEmpty()) {
							i = nrules;
							throw "__break__";
						}
						else null;
						current = stack.pop();
						str = r.matchedRight();
					}break;
					case 3:{
						str = r.matchedRight();
						if(!Xml.ecdata_end.match(str)) throw "End of CDATA section not found";
						var x = Xml.createCData(Xml.ecdata_end.matchedLeft());
						current.addChild(x);
						str = Xml.ecdata_end.matchedRight();
					}break;
					case 4:{
						var pos = 0;
						var count = 0;
						var old = str;
						try {
							while(true) {
								if(!Xml.edoctype_elt.match(str)) throw "End of DOCTYPE section not found";
								var p = Xml.edoctype_elt.matchedPos();
								pos += p.pos + p.len;
								str = Xml.edoctype_elt.matchedRight();
								switch(Xml.edoctype_elt.matched(0)) {
								case "[":{
									count++;
								}break;
								case "]":{
									count--;
									if(count < 0) throw "Invalid ] found in DOCTYPE declaration";
								}break;
								default:{
									if(count == 0) throw "__break__";
								}break;
								}
							}
						} catch( e ) { if( e != "__break__" ) throw e; }
						var x = Xml.createDocType(old.substr(10,pos - 11));
						current.addChild(x);
					}break;
					case 5:{
						if(!Xml.ecomment_end.match(str)) throw "Unclosed Comment";
						var p = Xml.ecomment_end.matchedPos();
						var x = Xml.createComment(str.substr(4,p.pos + p.len - 7));
						current.addChild(x);
						str = Xml.ecomment_end.matchedRight();
					}break;
					case 6:{
						var prolog = r.matched(0);
						var x = Xml.createProlog(prolog.substr(2,prolog.length - 4));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					}
					throw "__break__";
				}
				i += 1;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		if(i == nrules) {
			if(str.length > 10) throw "Xml parse error : Unexpected " + str.substr(0,10) + "...";
			else throw "Xml parse error : Unexpected " + str;
		}
	}
	if(!stack.isEmpty()) throw "Xml parse error : Unclosed " + stack.last().getNodeName();
	return current;
}
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	return r;
}
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	return r;
}
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	return r;
}
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	return r;
}
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	return r;
}
Xml.createProlog = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
	return r;
}
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
}
Xml.prototype.nodeType = null;
Xml.prototype.nodeName = null;
Xml.prototype.nodeValue = null;
Xml.prototype.parent = null;
Xml.prototype._nodeName = null;
Xml.prototype._nodeValue = null;
Xml.prototype._attributes = null;
Xml.prototype._children = null;
Xml.prototype._parent = null;
Xml.prototype.getNodeName = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName;
}
Xml.prototype.setNodeName = function(n) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName = n;
}
Xml.prototype.getNodeValue = function() {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue;
}
Xml.prototype.setNodeValue = function(v) {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue = v;
}
Xml.prototype.getParent = function() {
	return this._parent;
}
Xml.prototype.get = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.get(att);
}
Xml.prototype.set = function(att,value) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.set(att,value);
}
Xml.prototype.remove = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.remove(att);
}
Xml.prototype.exists = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.exists(att);
}
Xml.prototype.attributes = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.keys();
}
Xml.prototype.iterator = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		return this.cur < this.x.length;
	}, next : function() {
		return this.x[this.cur++];
	}};
}
Xml.prototype.elements = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			if(this.x[k].nodeType == Xml.Element) break;
			k += 1;
		}
		this.cur = k;
		return k < l;
	}, next : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k += 1;
			if(n.nodeType == Xml.Element) {
				this.cur = k;
				return n;
			}
		}
		return null;
	}};
}
Xml.prototype.elementsNamed = function(name) {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			if(n.nodeType == Xml.Element && n._nodeName == name) break;
			k++;
		}
		this.cur = k;
		return k < l;
	}, next : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k++;
			if(n.nodeType == Xml.Element && n._nodeName == name) {
				this.cur = k;
				return n;
			}
		}
		return null;
	}};
}
Xml.prototype.firstChild = function() {
	if(this._children == null) throw "bad nodetype";
	return this._children[0];
}
Xml.prototype.firstElement = function() {
	if(this._children == null) throw "bad nodetype";
	var cur = 0;
	var l = this._children.length;
	while(cur < l) {
		var n = this._children[cur];
		if(n.nodeType == Xml.Element) return n;
		cur++;
	}
	return null;
}
Xml.prototype.addChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.push(x);
}
Xml.prototype.removeChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	var b = this._children.remove(x);
	if(b) x._parent = null;
	return b;
}
Xml.prototype.insertChild = function(x,pos) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.insert(pos,x);
}
Xml.prototype.toString = function() {
	if(this.nodeType == Xml.PCData) return this._nodeValue;
	if(this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
	if(this.nodeType == Xml.Comment) return "<!--" + this._nodeValue + "-->";
	if(this.nodeType == Xml.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
	if(this.nodeType == Xml.Prolog) return "<?" + this._nodeValue + "?>";
	var s = new StringBuf();
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "<";
		s.b[s.b.length] = this._nodeName;
		{ var $it0 = this._attributes.keys();
		while( $it0.hasNext() ) { var k = $it0.next();
		{
			s.b[s.b.length] = " ";
			s.b[s.b.length] = k;
			s.b[s.b.length] = "=\"";
			s.b[s.b.length] = this._attributes.get(k);
			s.b[s.b.length] = "\"";
		}
		}}
		if(this._children.length == 0) {
			s.b[s.b.length] = "/>";
			return s.b.join("");
		}
		s.b[s.b.length] = ">";
	}
	{ var $it1 = this.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	s.b[s.b.length] = x.toString();
	}}
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "</";
		s.b[s.b.length] = this._nodeName;
		s.b[s.b.length] = ">";
	}
	return s.b.join("");
}
Xml.prototype.__class__ = Xml;
cocktail.resource.js.StringLoader = function(p) { if( p === $_ ) return; {
	cocktail.resource.abstract.AbstractResourceLoader.call(this);
}}
cocktail.resource.js.StringLoader.__name__ = ["cocktail","resource","js","StringLoader"];
cocktail.resource.js.StringLoader.__super__ = cocktail.resource.abstract.AbstractResourceLoader;
for(var k in cocktail.resource.abstract.AbstractResourceLoader.prototype ) cocktail.resource.js.StringLoader.prototype[k] = cocktail.resource.abstract.AbstractResourceLoader.prototype[k];
cocktail.resource.js.StringLoader.prototype.__class__ = cocktail.resource.js.StringLoader;
utest.ui.common.FixtureResult = function(methodName) { if( methodName === $_ ) return; {
	this.methodName = methodName;
	this.list = new List();
	this.hasTestError = false;
	this.hasSetupError = false;
	this.hasTeardownError = false;
	this.hasTimeoutError = false;
	this.hasAsyncError = false;
	this.stats = new utest.ui.common.ResultStats();
}}
utest.ui.common.FixtureResult.__name__ = ["utest","ui","common","FixtureResult"];
utest.ui.common.FixtureResult.prototype.methodName = null;
utest.ui.common.FixtureResult.prototype.hasTestError = null;
utest.ui.common.FixtureResult.prototype.hasSetupError = null;
utest.ui.common.FixtureResult.prototype.hasTeardownError = null;
utest.ui.common.FixtureResult.prototype.hasTimeoutError = null;
utest.ui.common.FixtureResult.prototype.hasAsyncError = null;
utest.ui.common.FixtureResult.prototype.stats = null;
utest.ui.common.FixtureResult.prototype.list = null;
utest.ui.common.FixtureResult.prototype.iterator = function() {
	return this.list.iterator();
}
utest.ui.common.FixtureResult.prototype.add = function(assertation) {
	this.list.add(assertation);
	var $e = assertation;
	switch( $e[1] ) {
	case 0:
	{
		this.stats.addSuccesses(1);
	}break;
	case 1:
	{
		this.stats.addFailures(1);
	}break;
	case 2:
	{
		this.stats.addErrors(1);
	}break;
	case 3:
	{
		this.stats.addErrors(1);
		this.hasSetupError = true;
	}break;
	case 4:
	{
		this.stats.addErrors(1);
		this.hasTeardownError = true;
	}break;
	case 5:
	{
		this.stats.addErrors(1);
		this.hasTimeoutError = true;
	}break;
	case 6:
	{
		this.stats.addErrors(1);
		this.hasAsyncError = true;
	}break;
	case 7:
	{
		this.stats.addWarnings(1);
	}break;
	}
}
utest.ui.common.FixtureResult.prototype.__class__ = utest.ui.common.FixtureResult;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	}
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	}
	d.fromString = function(s) {
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		}break;
		case 10:{
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
	}
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	}
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
}
{
	js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					try {
						return new ActiveXObject("Microsoft.XMLHTTP");
					}
					catch( $e1 ) {
						{
							var e1 = $e1;
							{
								throw "Unable to create XMLHttpRequest object.";
							}
						}
					}
				}
			}
		}
	}:(function($this) {
		var $r;
		throw "Unable to create XMLHttpRequest object.";
		return $r;
	}(this));
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
{
	Xml.Element = "element";
	Xml.PCData = "pcdata";
	Xml.CData = "cdata";
	Xml.Comment = "comment";
	Xml.DocType = "doctype";
	Xml.Prolog = "prolog";
	Xml.Document = "document";
}
cocktail.classInstance.abstract.AbstractClassInstance.SETTER_PREFIX = "set";
cocktail.classInstance.abstract.AbstractClassInstance.GETTER_PREFIX = "get";
cocktail.style.computer.BoxComputer.NULL = -1;
cocktail.style.computer.InlineEmbeddedBoxComputer.NULL = -1;
cocktail.domElement.js.ImageDOMElement.IMAGE_RENDERING_OPTIMIZE_QUALITY = "optimizeQuality";
cocktail.domElement.js.ImageDOMElement.IMAGE_RENDERING_OPTIMIZE_SPEED = "optimizeSpeed";
utest.ui.text.HtmlReport.platform = "javascript";
cocktail.domElement.js.GraphicDOMElement.CAPS_STYLE_VALUE_NONE = "butt";
cocktail.domElement.js.GraphicDOMElement.CAPS_STYLE_VALUE_ROUND = "round";
cocktail.domElement.js.GraphicDOMElement.CAPS_STYLE_VALUE_SQUARE = "square";
cocktail.domElement.js.GraphicDOMElement.JOINT_STYLE_VALUE_ROUND = "round";
cocktail.domElement.js.GraphicDOMElement.JOINT_STYLE_VALUE_MITER = "miter";
cocktail.domElement.js.GraphicDOMElement.JOINT_STYLE_VALUE_BEVEL = "bevel";
cocktail.domElement.js.GraphicDOMElement.CANVAS_PATTERN_REPEAT = "repeat";
cocktail.domElement.js.GraphicDOMElement.CANVAS_PATTERN_NO_REPEAT = "no-repeat";
js.Lib.onerror = null;
cocktail.style.computer.InLineBoxComputer.NULL = -1;
cocktail.style.computer.FloatBoxComputer.NULL = -1;
cocktail.resource.ResourceLoaderManager._isLoading = false;
utest.TestHandler.POLLING_TIME = 10;
haxe.Timer.arr = new Array();
slPlayer.core.config.Config.configData = { publicationId : "manager", scaleMode : slPlayer.core.config.ScaleModeValue.noScale, runtime : slPlayer.core.config.RuntimeValue.as3};
slPlayer.core.XmlUtils.INDENT_STRING = "\t";
Xml.enode = new EReg("^<([a-zA-Z0-9:_-]+)","");
Xml.ecdata = new EReg("^<!\\[CDATA\\[","i");
Xml.edoctype = new EReg("^<!DOCTYPE ","i");
Xml.eend = new EReg("^</([a-zA-Z0-9:_-]+)>","");
Xml.epcdata = new EReg("^[^<]+","");
Xml.ecomment = new EReg("^<!--","");
Xml.eprolog = new EReg("^<\\?[^\\?]+\\?>","");
Xml.eattribute = new EReg("^\\s*([a-zA-Z0-9:_-]+)\\s*=\\s*([\"'])([^\\2]*?)\\2","");
Xml.eclose = new EReg("^[ \r\n\t]*(>|(/>))","");
Xml.ecdata_end = new EReg("\\]\\]>","");
Xml.edoctype_elt = new EReg("[\\[|\\]>]","");
Xml.ecomment_end = new EReg("-->","");
block.BlockTests.main()