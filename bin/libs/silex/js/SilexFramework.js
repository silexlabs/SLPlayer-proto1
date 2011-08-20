$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof org=='undefined') org = {}
if(!org.silex) org.silex = {}
if(!org.silex.runtime) org.silex.runtime = {}
if(!org.silex.runtime.domobject) org.silex.runtime.domobject = {}
if(!org.silex.runtime.domobject.base) org.silex.runtime.domobject.base = {}
org.silex.runtime.domobject.base.DOMObjectBase = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	this._referenceToNativeDOM = referenceToNativeDOMObject;
	this._children = new Array();
	this._matrix = new org.silex.runtime.domobject.Matrix();
	this.setNativeListeners();
}}
org.silex.runtime.domobject.base.DOMObjectBase.__name__ = ["org","silex","runtime","domobject","base","DOMObjectBase"];
org.silex.runtime.domobject.base.DOMObjectBase.rootDOMObject = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onPress = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onDoubleClick = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onRelease = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onRollOver = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onRollOut = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onMouseMove = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onMouseWheel = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onFocusIn = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onFocusOut = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype._referenceToNativeDOM = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype._parent = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype._children = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype._matrix = null;
org.silex.runtime.domobject.base.DOMObjectBase.prototype.addChild = function(domObject) {
	domObject.setParent(this);
	this._children.push(domObject);
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.removeChild = function(domObject) {
	domObject.setParent(null);
	this._children.remove(domObject);
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getParent = function() {
	return this._parent;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setParent = function(domObject) {
	this._parent = domObject;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getChildren = function() {
	return this._children;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getReferenceToNativeDOM = function() {
	return this._referenceToNativeDOM;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.translate = function(x,y) {
	this._matrix.translate(x,y);
	this.setMatrix(this._matrix);
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.rotate = function(angle,transformationOrigin) {
	this._matrix.rotate(angle,this.getTransformationOriginPoint(transformationOrigin));
	this.setMatrix(this._matrix);
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.scale = function(scaleX,scaleY,transformationOrigin) {
	this._matrix.scale(scaleX,scaleY,this.getTransformationOriginPoint(transformationOrigin));
	this.setMatrix(this._matrix);
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.skew = function(skewX,skewY,transformationOrigin) {
	this._matrix.skew(skewX,skewY,this.getTransformationOriginPoint(transformationOrigin));
	this.setMatrix(this._matrix);
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setMatrix = function(matrix) {
	this._matrix = matrix;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getMatrix = function() {
	return this._matrix;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.resetTransformations = function() {
	this._matrix.identity();
	this.setMatrix(this._matrix);
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getTransformationOriginPoint = function(transformationOrigin) {
	var transformationOriginPoint = { x : 0.0, y : 0.0};
	var $e = transformationOrigin;
	switch( $e[1] ) {
	case 1:
	var point = $e[2];
	{
		transformationOriginPoint = point;
	}break;
	case 0:
	var transformationOriginY = $e[3], transformationOriginX = $e[2];
	{
		var $e = transformationOriginX;
		switch( $e[1] ) {
		case 0:
		{
			transformationOriginPoint.x = 0;
		}break;
		case 1:
		{
			transformationOriginPoint.x = this.getWidth() / 2;
		}break;
		case 2:
		{
			transformationOriginPoint.x = this.getWidth();
		}break;
		}
		var $e = transformationOriginY;
		switch( $e[1] ) {
		case 0:
		{
			transformationOriginPoint.y = 0;
		}break;
		case 1:
		{
			transformationOriginPoint.y = this.getHeight() / 2;
		}break;
		case 2:
		{
			transformationOriginPoint.y = this.getHeight();
		}break;
		}
	}break;
	}
	return transformationOriginPoint;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setAttribute = function(propertyName,propertyValue) {
	this._referenceToNativeDOM[propertyName] = propertyValue;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getAttribute = function(propertyName) {
	return Reflect.field(this._referenceToNativeDOM,propertyName);
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setNativeListeners = function() {
	null;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.unsetNativeListeners = function() {
	null;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onNativePress = function(event) {
	if(this.onPress != null) {
		this.onPress();
	}
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onNativeDoubleClick = function(event) {
	if(this.onDoubleClick != null) {
		this.onDoubleClick();
	}
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onNativeRelease = function(event) {
	if(this.onRelease != null) {
		this.onRelease();
	}
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onNativeRollOver = function(event) {
	if(this.onRollOver != null) {
		this.onRollOver();
	}
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onNativeRollOut = function(event) {
	if(this.onRollOut != null) {
		this.onRollOut();
	}
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onNativeMouseMove = function(event) {
	if(this.onMouseMove != null) {
		this.onMouseMove();
	}
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setX = function(value) {
	null;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getX = function() {
	return 0;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setY = function(value) {
	null;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getY = function() {
	return 0;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setWidth = function(value) {
	null;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getWidth = function() {
	return 0;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setHeight = function(value) {
	null;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getHeight = function() {
	return 0;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setRotation = function(value) {
	null;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getRotation = function() {
	return 0;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setZOrder = function(value) {
	null;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getZOrder = function() {
	return 0;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.__class__ = org.silex.runtime.domobject.base.DOMObjectBase;
if(!org.silex.runtime.domobject.js) org.silex.runtime.domobject.js = {}
org.silex.runtime.domobject.js.DOMObject = function(referenceToNativeDOM) { if( referenceToNativeDOM === $_ ) return; {
	org.silex.runtime.domobject.base.DOMObjectBase.call(this,referenceToNativeDOM);
	referenceToNativeDOM.style.position = "absolute";
}}
org.silex.runtime.domobject.js.DOMObject.__name__ = ["org","silex","runtime","domobject","js","DOMObject"];
org.silex.runtime.domobject.js.DOMObject.__super__ = org.silex.runtime.domobject.base.DOMObjectBase;
for(var k in org.silex.runtime.domobject.base.DOMObjectBase.prototype ) org.silex.runtime.domobject.js.DOMObject.prototype[k] = org.silex.runtime.domobject.base.DOMObjectBase.prototype[k];
org.silex.runtime.domobject.js.DOMObject.prototype.addChild = function(domObject) {
	org.silex.runtime.domobject.base.DOMObjectBase.prototype.addChild.call(this,domObject);
	this._referenceToNativeDOM.appendChild(domObject.getReferenceToNativeDOM());
	domObject.getReferenceToNativeDOM().style.zIndex = this._children.length - 1;
}
org.silex.runtime.domobject.js.DOMObject.prototype.removeChild = function(domObject) {
	org.silex.runtime.domobject.base.DOMObjectBase.prototype.removeChild.call(this,domObject);
	this._referenceToNativeDOM.removeChild(domObject.getReferenceToNativeDOM());
}
org.silex.runtime.domobject.js.DOMObject.prototype.setMatrix = function(matrix) {
	org.silex.runtime.domobject.base.DOMObjectBase.prototype.setMatrix.call(this,matrix);
	var nativeSprite = this._referenceToNativeDOM;
	var matrixData = matrix.getMatrixData();
	var cssMatrixProperty = "matrix(" + matrixData.a + "," + matrixData.b + "," + matrixData.c + "," + matrixData.d + "," + matrixData.e + "," + matrixData.f + ")";
	if(this._referenceToNativeDOM.style.transform != null) {
		this._referenceToNativeDOM.style.transform = cssMatrixProperty;
		this._referenceToNativeDOM.style.transformOrigin = "0 0";
	}
	if(this._referenceToNativeDOM.style.MozTransform != null) {
		this._referenceToNativeDOM.style.MozTransform = cssMatrixProperty;
		this._referenceToNativeDOM.style.MozTransformOrigin = "0 0";
	}
	else if(this._referenceToNativeDOM.style.WebkitTransform != null) {
		this._referenceToNativeDOM.style.WebkitTransform = cssMatrixProperty;
		this._referenceToNativeDOM.style.WebkitTransformOrigin = "0 0";
	}
	else if(this._referenceToNativeDOM.style.OTransform != null) {
		this._referenceToNativeDOM.style.OTransform = cssMatrixProperty;
		this._referenceToNativeDOM.style.OTransform = "0 0";
	}
}
org.silex.runtime.domobject.js.DOMObject.prototype.setNativeListeners = function() {
	this._referenceToNativeDOM.onmousedown = $closure(this,"onNativePress");
	this._referenceToNativeDOM.onmouseup = $closure(this,"onNativeRelease");
	this._referenceToNativeDOM.onmouseover = $closure(this,"onNativeRollOver");
	this._referenceToNativeDOM.onmouseout = $closure(this,"onNativeRollOut");
	this._referenceToNativeDOM.onmousemove = $closure(this,"onNativeMouseMove");
	this._referenceToNativeDOM.ondblclick = $closure(this,"onNativeDoubleClick");
}
org.silex.runtime.domobject.js.DOMObject.prototype.unsetNativeListeners = function() {
	this._referenceToNativeDOM.onmousedown = null;
	this._referenceToNativeDOM.onmouseup = null;
	this._referenceToNativeDOM.onmouseover = null;
	this._referenceToNativeDOM.onmouseout = null;
	this._referenceToNativeDOM.onmousemove = null;
	this._referenceToNativeDOM.ondblclick = null;
}
org.silex.runtime.domobject.js.DOMObject.prototype.setX = function(value) {
	this._referenceToNativeDOM.style.left = value + "px";
}
org.silex.runtime.domobject.js.DOMObject.prototype.getX = function() {
	return Std.parseInt(this._referenceToNativeDOM.style.left);
}
org.silex.runtime.domobject.js.DOMObject.prototype.setY = function(value) {
	this._referenceToNativeDOM.style.top = value + "px";
}
org.silex.runtime.domobject.js.DOMObject.prototype.getY = function() {
	return Std.parseInt(this._referenceToNativeDOM.style.top);
}
org.silex.runtime.domobject.js.DOMObject.prototype.setWidth = function(value) {
	this._referenceToNativeDOM.style.width = value + "px";
}
org.silex.runtime.domobject.js.DOMObject.prototype.getWidth = function() {
	return Std.parseInt(this._referenceToNativeDOM.style.width);
}
org.silex.runtime.domobject.js.DOMObject.prototype.setHeight = function(value) {
	this._referenceToNativeDOM.style.height = value + "px";
}
org.silex.runtime.domobject.js.DOMObject.prototype.getHeight = function() {
	return Std.parseInt(this._referenceToNativeDOM.style.height);
}
org.silex.runtime.domobject.js.DOMObject.prototype.setRotation = function(value) {
	var rotationValue = "rotate(" + value + "deg)";
	if(this._referenceToNativeDOM.style.MozTransform != null) {
		this._referenceToNativeDOM.style.MozTransform = rotationValue;
		this._referenceToNativeDOM.style.MozTransformOrigin = "0 0";
	}
	else if(this._referenceToNativeDOM.style.WebkitTransform != null) {
		this._referenceToNativeDOM.style.WebkitTransform = rotationValue;
		this._referenceToNativeDOM.style.WebkitTransformOrigin = "0 0";
	}
	else if(this._referenceToNativeDOM.style.OTransform != null) {
		this._referenceToNativeDOM.style.OTransform = rotationValue;
		this._referenceToNativeDOM.style.OTransform = "0 0";
	}
}
org.silex.runtime.domobject.js.DOMObject.prototype.getRotation = function() {
	var nativeRotation = "";
	if(this._referenceToNativeDOM.style.MozTransform != null) {
		nativeRotation = this._referenceToNativeDOM.style.MozTransform;
	}
	else if(this._referenceToNativeDOM.style.WebkitTransform != null) {
		nativeRotation = this._referenceToNativeDOM.style.WebkitTransform;
	}
	else if(this._referenceToNativeDOM.style.OTransform != null) {
		nativeRotation = this._referenceToNativeDOM.style.OTransform;
	}
	nativeRotation = StringTools.replace(nativeRotation,"rotate(","");
	nativeRotation = StringTools.replace(nativeRotation,"deg)","");
	return Std.parseInt(nativeRotation);
}
org.silex.runtime.domobject.js.DOMObject.prototype.setZOrder = function(value) {
	if(value > this._parent.getChildren().length - 1) {
		value = this._parent.getChildren().length - 1;
	}
	var nativeParent = this._referenceToNativeDOM.parentNode;
	var numChildren = nativeParent.childNodes.length;
	var oldIndex = this.getZOrder();
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
	this._referenceToNativeDOM.style.zIndex = value;
}
org.silex.runtime.domobject.js.DOMObject.prototype.getZOrder = function() {
	return Std.parseInt(this._referenceToNativeDOM.style.zIndex);
}
org.silex.runtime.domobject.js.DOMObject.prototype.__class__ = org.silex.runtime.domobject.js.DOMObject;
org.silex.runtime.domobject.base.TextDOMObjectBase = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domobject.js.DOMObject.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domobject.base.TextDOMObjectBase.__name__ = ["org","silex","runtime","domobject","base","TextDOMObjectBase"];
org.silex.runtime.domobject.base.TextDOMObjectBase.__super__ = org.silex.runtime.domobject.js.DOMObject;
for(var k in org.silex.runtime.domobject.js.DOMObject.prototype ) org.silex.runtime.domobject.base.TextDOMObjectBase.prototype[k] = org.silex.runtime.domobject.js.DOMObject.prototype[k];
org.silex.runtime.domobject.base.TextDOMObjectBase.prototype._text = null;
org.silex.runtime.domobject.base.TextDOMObjectBase.prototype.setText = function(text) {
	this._text = text;
}
org.silex.runtime.domobject.base.TextDOMObjectBase.prototype.getText = function() {
	return this._text;
}
org.silex.runtime.domobject.base.TextDOMObjectBase.prototype.__class__ = org.silex.runtime.domobject.base.TextDOMObjectBase;
if(typeof haxe=='undefined') haxe = {}
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
if(!org.silex.core) org.silex.core = {}
if(!org.silex.core.block) org.silex.core.block = {}
org.silex.core.block.Block = function(fileUrl) { if( fileUrl === $_ ) return; {
	this._fileUrl = fileUrl;
	this._state = org.silex.core.block.BlockStateValue.closed;
	this._children = new Array();
}}
org.silex.core.block.Block.__name__ = ["org","silex","core","block","Block"];
org.silex.core.block.Block.prototype._blockData = null;
org.silex.core.block.Block.prototype._domObject = null;
org.silex.core.block.Block.prototype._nativeClassInstance = null;
org.silex.core.block.Block.prototype._fileUrl = null;
org.silex.core.block.Block.prototype._state = null;
org.silex.core.block.Block.prototype._children = null;
org.silex.core.block.Block.prototype._parent = null;
org.silex.core.block.Block.prototype._isTransversal = null;
org.silex.core.block.Block.prototype._isAutoOpen = null;
org.silex.core.block.Block.prototype._openChildrenIndex = null;
org.silex.core.block.Block.prototype._openBlockSuccessCallback = null;
org.silex.core.block.Block.prototype._openBlockErrorCallback = null;
org.silex.core.block.Block.prototype.open = function(successCallback,errorCallback) {
	this._openBlockSuccessCallback = successCallback;
	this._openBlockErrorCallback = errorCallback;
	this._state = org.silex.core.block.BlockStateValue.loading;
	var blockBuilder = new org.silex.core.block.BlockBuilder(this);
	this.doOpen(blockBuilder);
}
org.silex.core.block.Block.prototype.close = function() {
	if(this._domObject != null) {
		this._parent.removeFromDisplayList(this._domObject);
	}
	this._nativeClassInstance = null;
	{
		var _g1 = 0, _g = this._children.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._children[i].close();
		}
	}
	this._state = org.silex.core.block.BlockStateValue.closed;
}
org.silex.core.block.Block.prototype.addChild = function(block) {
	this._children.push(block);
	block.setParent(this);
}
org.silex.core.block.Block.prototype.removeChild = function(block) {
	this._children.remove(block);
	block.setParent(null);
}
org.silex.core.block.Block.prototype.addToDisplayList = function(blockDOMObject) {
	if(this._domObject != null) {
		this._domObject.addChild(blockDOMObject);
	}
	else {
		this._parent.addToDisplayList(blockDOMObject);
	}
}
org.silex.core.block.Block.prototype.removeFromDisplayList = function(blockDOMObject) {
	if(this._domObject != null) {
		this._domObject.removeChild(blockDOMObject);
	}
	else {
		this._parent.removeFromDisplayList(blockDOMObject);
	}
}
org.silex.core.block.Block.prototype.doOpen = function(blockBuilder) {
	if(this._blockData.properties == null) {
		blockBuilder.loadBlockData($closure(this,"onBlockDataLoaded"),$closure(this,"onBlockDataLoadError"));
	}
	else if(this._domObject == null && this.getSkinUrl() != null) {
		blockBuilder.loadDOMObject(this.getSkinUrl(),$closure(this,"onDOMObjectLoaded"),$closure(this,"onDOMObjectLoadError"));
	}
	else if(this._nativeClassInstance == null && this._blockData.className != null) {
		blockBuilder.createNativeClassInstance();
		this.doOpen(blockBuilder);
	}
	else {
		blockBuilder.setBlockAttributes();
		if(this._parent != null) {
			if(this._domObject != null) {
				this._parent.addToDisplayList(this._domObject);
			}
		}
		this._openChildrenIndex = 0;
		this.openChildren();
	}
}
org.silex.core.block.Block.prototype.openChildren = function() {
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
org.silex.core.block.Block.prototype.onChildOpened = function(openedChild) {
	this._openChildrenIndex++;
	if(this._openChildrenIndex < this._children.length) {
		this.openChildren();
	}
	else {
		this.onAllChildOpened();
	}
}
org.silex.core.block.Block.prototype.onAllChildOpened = function() {
	this._state = org.silex.core.block.BlockStateValue.opened;
	this._openBlockSuccessCallback(this);
}
org.silex.core.block.Block.prototype.onBlockDataLoaded = function(blockBuilder) {
	this.doOpen(blockBuilder);
}
org.silex.core.block.Block.prototype.onDOMObjectLoaded = function(blockBuilder) {
	this.doOpen(blockBuilder);
}
org.silex.core.block.Block.prototype.onBlockDataLoadError = function(errorMessage) {
	this._openBlockErrorCallback(errorMessage);
}
org.silex.core.block.Block.prototype.onDOMObjectLoadError = function(errorMessage) {
	this._openBlockErrorCallback(errorMessage);
}
org.silex.core.block.Block.prototype.onChildOpenError = function(errorMessage) {
	this._openBlockErrorCallback(errorMessage);
}
org.silex.core.block.Block.prototype.getSkinUrl = function() {
	var skinUrl = "";
	var $e = org.silex.core.config.Config.getConfigData().runtime;
	switch( $e[1] ) {
	case 1:
	{
		skinUrl = this._blockData.jsURL;
	}break;
	case 0:
	{
		skinUrl = this._blockData.as3URL;
	}break;
	case 2:
	{
		skinUrl = this._blockData.phpURL;
	}break;
	}
	return skinUrl;
}
org.silex.core.block.Block.prototype.getFileUrl = function() {
	return this._fileUrl;
}
org.silex.core.block.Block.prototype.getChildren = function() {
	return this._children;
}
org.silex.core.block.Block.prototype.getParent = function() {
	return this._parent;
}
org.silex.core.block.Block.prototype.getState = function() {
	return this._state;
}
org.silex.core.block.Block.prototype.setParent = function(value) {
	this._parent = value;
}
org.silex.core.block.Block.prototype.setIsAutoOpen = function(value) {
	this._isAutoOpen = value;
}
org.silex.core.block.Block.prototype.getIsAutoOpen = function() {
	return this._isAutoOpen;
}
org.silex.core.block.Block.prototype.setBlockData = function(value) {
	this._blockData = value;
}
org.silex.core.block.Block.prototype.getBlockData = function() {
	return this._blockData;
}
org.silex.core.block.Block.prototype.setDOMObject = function(value) {
	this._domObject = value;
}
org.silex.core.block.Block.prototype.getDOMObject = function() {
	return this._domObject;
}
org.silex.core.block.Block.prototype.setNativeClassInstance = function(nativeClassInstance) {
	this._nativeClassInstance = nativeClassInstance;
}
org.silex.core.block.Block.prototype.getNativeClassInstance = function() {
	return this._nativeClassInstance;
}
org.silex.core.block.Block.prototype.__class__ = org.silex.core.block.Block;
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
org.silex.runtime.domobject.Matrix = function(matrixData) { if( matrixData === $_ ) return; {
	this.setMatrixData(matrixData);
}}
org.silex.runtime.domobject.Matrix.__name__ = ["org","silex","runtime","domobject","Matrix"];
org.silex.runtime.domobject.Matrix.prototype._matrixData = null;
org.silex.runtime.domobject.Matrix.prototype.identity = function() {
	this._matrixData = { a : 1.0, b : 0.0, c : 0.0, d : 1.0, e : 0.0, f : 0.0};
}
org.silex.runtime.domobject.Matrix.prototype.setMatrixData = function(matrixData) {
	this._matrixData = matrixData;
	if(this._matrixData == null) {
		this.identity();
	}
}
org.silex.runtime.domobject.Matrix.prototype.getMatrixData = function() {
	return this._matrixData;
}
org.silex.runtime.domobject.Matrix.prototype.concatenate = function(matrix) {
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
org.silex.runtime.domobject.Matrix.prototype.translate = function(x,y) {
	var translationMatrixData = { a : 1.0, b : 0.0, c : 0.0, d : 1.0, e : x, f : y};
	var translationMatrix = new org.silex.runtime.domobject.Matrix(translationMatrixData);
	this.concatenate(translationMatrix);
}
org.silex.runtime.domobject.Matrix.prototype.rotate = function(angle,transformationOrigin) {
	var angleInRad = angle / 180 * Math.PI;
	haxe.Log.trace(angleInRad,{ fileName : "Matrix.hx", lineNumber : 169, className : "org.silex.runtime.domobject.Matrix", methodName : "rotate"});
	var rotatedMatrix = new org.silex.runtime.domobject.Matrix();
	rotatedMatrix.translate(transformationOrigin.x,transformationOrigin.y);
	var rotationMatrixData = { a : Math.cos(angleInRad), b : Math.sin(angleInRad), c : Math.sin(angleInRad) * -1, d : Math.cos(angleInRad), e : 0.0, f : 0.0};
	var rotationMatrix = new org.silex.runtime.domobject.Matrix(rotationMatrixData);
	rotatedMatrix.concatenate(rotationMatrix);
	rotatedMatrix.translate(transformationOrigin.x * -1,transformationOrigin.y * -1);
	this.concatenate(rotatedMatrix);
}
org.silex.runtime.domobject.Matrix.prototype.scale = function(scaleX,scaleY,transformationOrigin) {
	var scaledMatrix = new org.silex.runtime.domobject.Matrix();
	scaledMatrix.translate(transformationOrigin.x,transformationOrigin.y);
	var scalingMatrixData = { a : scaleX, b : 0.0, c : 0.0, d : scaleY, e : 0.0, f : 0.0};
	var scalingMatrix = new org.silex.runtime.domobject.Matrix(scalingMatrixData);
	scaledMatrix.concatenate(scalingMatrix);
	scaledMatrix.translate(transformationOrigin.x * -1,transformationOrigin.y * -1);
	this.concatenate(scaledMatrix);
}
org.silex.runtime.domobject.Matrix.prototype.skew = function(skewX,skewY,transformationOrigin) {
	var skewedMatrix = new org.silex.runtime.domobject.Matrix();
	skewedMatrix.translate(transformationOrigin.x,transformationOrigin.y);
	var skewingMatrixData = { a : 1.0, b : Math.tan(skewY), c : Math.tan(skewX), d : 1.0, e : 0.0, f : 0.0};
	var skewingMatrix = new org.silex.runtime.domobject.Matrix(skewingMatrixData);
	skewedMatrix.concatenate(skewingMatrix);
	skewedMatrix.translate(transformationOrigin.x * -1,transformationOrigin.y * -1);
	this.concatenate(skewedMatrix);
}
org.silex.runtime.domobject.Matrix.prototype.getRotation = function() {
	var rotation = Math.atan(this._matrixData.c * -1 / this._matrixData.a);
	var scaleX = Math.sqrt(this._matrixData.a * this._matrixData.a + this._matrixData.c * this._matrixData.c);
	var sign = Math.atan(this._matrixData.c * -1 / this._matrixData.a);
	var radian = Math.acos(this._matrixData.a / scaleX);
	var rotationInDegree = Math.round(radian * 180 / Math.PI);
	if(rotationInDegree > 90 && sign > 0) {
		rotation = (360 - rotationInDegree) / 180 * Math.PI;
	}
	else if(rotationInDegree < 90 && sign < 0) {
		rotation = (360 - rotationInDegree) / 180 * Math.PI;
	}
	else {
		rotation = radian;
	}
	return Math.round(rotation / Math.PI * 180);
}
org.silex.runtime.domobject.Matrix.prototype.getScaleX = function() {
	var scaleSign = 0;
	if(this._matrixData.a > 0) {
		scaleSign = 1;
	}
	else {
		scaleSign = -1;
	}
	return scaleSign * Math.sqrt(this._matrixData.a * this._matrixData.a + this._matrixData.c * this._matrixData.c);
}
org.silex.runtime.domobject.Matrix.prototype.getScaleY = function() {
	var scaleSign = 0;
	if(this._matrixData.d > 0) {
		scaleSign = 1;
	}
	else {
		scaleSign = -1;
	}
	return scaleSign * Math.sqrt(this._matrixData.b * this._matrixData.b + this._matrixData.d * this._matrixData.d);
}
org.silex.runtime.domobject.Matrix.prototype.getTranslationX = function() {
	return this._matrixData.e;
}
org.silex.runtime.domobject.Matrix.prototype.getTranslationY = function() {
	return this._matrixData.f;
}
org.silex.runtime.domobject.Matrix.prototype.__class__ = org.silex.runtime.domobject.Matrix;
org.silex.runtime.domobject.base.GraphicDOMObjectBase = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domobject.js.DOMObject.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.__name__ = ["org","silex","runtime","domobject","base","GraphicDOMObjectBase"];
org.silex.runtime.domobject.base.GraphicDOMObjectBase.__super__ = org.silex.runtime.domobject.js.DOMObject;
for(var k in org.silex.runtime.domobject.js.DOMObject.prototype ) org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype[k] = org.silex.runtime.domobject.js.DOMObject.prototype[k];
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.addChild = function(domObject) {
	null;
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.removeChild = function(domObject) {
	null;
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.beginFill = function(fillStyle,lineStyle) {
	this.clear();
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.endFill = function() {
	null;
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.clear = function() {
	null;
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.drawRect = function(x,y,width,height,cornerRadiuses) {
	this.moveTo(cornerRadiuses.tlCornerRadius,0);
	this.lineTo(width - cornerRadiuses.trCornerRadius,0);
	this.curveTo(width,0,width,cornerRadiuses.trCornerRadius);
	this.lineTo(width,cornerRadiuses.trCornerRadius);
	this.lineTo(width,height - cornerRadiuses.brCornerRadius);
	this.curveTo(width,height,width - cornerRadiuses.brCornerRadius,height);
	this.lineTo(width - cornerRadiuses.brCornerRadius,height);
	this.lineTo(cornerRadiuses.blCornerRadius,height);
	this.curveTo(0,height,0,height - cornerRadiuses.blCornerRadius);
	this.lineTo(0,height - cornerRadiuses.blCornerRadius);
	this.lineTo(0,cornerRadiuses.tlCornerRadius);
	this.curveTo(0,0,cornerRadiuses.tlCornerRadius,0);
	this.lineTo(cornerRadiuses.tlCornerRadius,0);
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.drawEllipse = function(x,y,width,height) {
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
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.lineTo = function(x,y) {
	null;
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.moveTo = function(x,y) {
	null;
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.curveTo = function(controlX,controlY,x,y) {
	null;
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.toNativeAlpha = function(genericAlpa) {
	null;
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.toNativeColor = function(genericColor) {
	null;
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.toNativeRatio = function(genericRatio) {
	null;
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.toNativeCapStyle = function(genericCapStyle) {
	null;
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.toNativeJointStyle = function(genericJointStyle) {
	null;
}
org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.__class__ = org.silex.runtime.domobject.base.GraphicDOMObjectBase;
org.silex.core.block.BlockBuilder = function(block) { if( block === $_ ) return; {
	this._block = block;
}}
org.silex.core.block.BlockBuilder.__name__ = ["org","silex","core","block","BlockBuilder"];
org.silex.core.block.BlockBuilder.deserializeBlockData = function(block,serializedBlockData) {
	var XMLBlockData = Xml.parse(serializedBlockData).firstElement();
	var cleanXMLBlockData = org.silex.core.XmlUtils.cleanUp(XMLBlockData);
	org.silex.core.block.BlockBuilder.doCreateBlock(cleanXMLBlockData,block);
}
org.silex.core.block.BlockBuilder.doCreateBlock = function(xml,parentBlock) {
	var parentBlockData = org.silex.core.block.BlockBuilder.createBlockData(xml);
	parentBlock.setBlockData(parentBlockData);
	{ var $it0 = xml.elementsNamed("children");
	while( $it0.hasNext() ) { var children = $it0.next();
	{
		{ var $it1 = children.elements();
		while( $it1.hasNext() ) { var child = $it1.next();
		{
			var block = new org.silex.core.block.Block(child.get("fileUrl"));
			parentBlock.addChild(block);
			org.silex.core.block.BlockBuilder.doCreateBlock(child,block);
		}
		}}
	}
	}}
}
org.silex.core.block.BlockBuilder.createBlockData = function(xml) {
	var blockData = { className : null, descriptorUID : null, isAutoOpen : false, isTransversal : false, hasSeparateFile : false, fileUrl : null, domRoot : null, as3URL : null, jsURL : null, phpURL : null, properties : new Hash(), metaData : new Hash()};
	var blockXml = xml;
	if(blockXml.exists("nameSpace")) {
		blockData.className = blockXml.get("nameSpace") + "." + blockXml.getNodeName();
	}
	else {
		blockData.className = "org.silex.blocks." + blockXml.getNodeName();
	}
	blockData.descriptorUID = blockXml.get("descriptorUID");
	blockData.isAutoOpen = blockXml.get("isAutoOpen") == "true";
	blockData.isTransversal = blockXml.get("isTransversal") == "true";
	blockData.hasSeparateFile = blockXml.get("hasSeparateFile") == "true";
	blockData.fileUrl = blockXml.get("fileUrl");
	{ var $it0 = blockXml.iterator();
	while( $it0.hasNext() ) { var childXml = $it0.next();
	{
		switch(childXml.getNodeName()) {
		case "domRoot":{
			blockData.domRoot = childXml.firstChild().toString();
		}break;
		case "as3Skin":{
			blockData.as3URL = childXml.firstChild().firstChild().toString();
		}break;
		case "jsSkin":{
			blockData.jsURL = childXml.firstChild().firstChild().toString();
		}break;
		case "phpSkin":{
			blockData.phpURL = childXml.firstChild().firstChild().toString();
		}break;
		case "properties":{
			{ var $it1 = childXml.elements();
			while( $it1.hasNext() ) { var property = $it1.next();
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
					{ var $it2 = property.elements();
					while( $it2.hasNext() ) { var item = $it2.next();
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
			{ var $it3 = childXml.elements();
			while( $it3.hasNext() ) { var metaData = $it3.next();
			{
				blockData.metaData.set(metaData.getNodeName(),Std.parseInt(metaData.firstChild().toString()));
			}
			}}
		}break;
		}
	}
	}}
	return blockData;
}
org.silex.core.block.BlockBuilder.prototype._block = null;
org.silex.core.block.BlockBuilder.prototype._loadBlockDataSuccess = null;
org.silex.core.block.BlockBuilder.prototype._loadBlockDataError = null;
org.silex.core.block.BlockBuilder.prototype._loadDOMObjectSuccess = null;
org.silex.core.block.BlockBuilder.prototype._loadDOMObjectError = null;
org.silex.core.block.BlockBuilder.prototype.loadBlockData = function(successCallback,errorCallback) {
	this._loadBlockDataSuccess = successCallback;
	this._loadBlockDataError = errorCallback;
	org.silex.runtime.ressource.RessourceLoaderManager.loadString(this._block.getFileUrl(),$closure(this,"onBlockDataLoaded"),$closure(this,"onBlockDataLoadError"));
}
org.silex.core.block.BlockBuilder.prototype.onBlockDataLoaded = function(data) {
	org.silex.core.block.BlockBuilder.deserializeBlockData(this._block,data);
	this._loadBlockDataSuccess(this);
}
org.silex.core.block.BlockBuilder.prototype.onBlockDataLoadError = function(errorMessage) {
	this._loadBlockDataError(errorMessage);
}
org.silex.core.block.BlockBuilder.prototype.loadDOMObject = function(skinUrl,successCallback,errorCallback) {
	this._loadDOMObjectSuccess = successCallback;
	this._loadDOMObjectError = errorCallback;
	org.silex.runtime.ressource.RessourceLoaderManager.loadContainer(skinUrl,$closure(this,"onDOMObjectLoaded"),$closure(this,"onDOMObjectLoadError"));
}
org.silex.core.block.BlockBuilder.prototype.onDOMObjectLoaded = function(domObject) {
	this._block.setDOMObject(domObject);
	this._loadDOMObjectSuccess(this);
}
org.silex.core.block.BlockBuilder.prototype.onDOMObjectLoadError = function(errorMessage) {
	this._loadDOMObjectError(errorMessage);
}
org.silex.core.block.BlockBuilder.prototype.createNativeClassInstance = function() {
	this._block.setNativeClassInstance(org.silex.runtime.nativeClass.NativeClass.getNativeInstanceByClassName(this._block.getBlockData().className));
}
org.silex.core.block.BlockBuilder.prototype.setBlockAttributes = function() {
	if(this._block.getNativeClassInstance() != null) {
		{ var $it0 = this._block.getBlockData().properties.keys();
		while( $it0.hasNext() ) { var propertyName = $it0.next();
		{
			this._block.getNativeClassInstance().setField(propertyName,this._block.getBlockData().properties.get(propertyName));
		}
		}}
	}
	else if(this._block.getDOMObject() != null) {
		{ var $it1 = this._block.getBlockData().properties.keys();
		while( $it1.hasNext() ) { var propertyName = $it1.next();
		{
			this._block.getDOMObject().setAttribute(propertyName,this._block.getBlockData().properties.get(propertyName));
		}
		}}
	}
}
org.silex.core.block.BlockBuilder.prototype.__class__ = org.silex.core.block.BlockBuilder;
if(!org.silex.core.config) org.silex.core.config = {}
org.silex.core.config.ScaleModeValue = { __ename__ : ["org","silex","core","config","ScaleModeValue"], __constructs__ : ["showAll","noScale","pixel","scroll"] }
org.silex.core.config.ScaleModeValue.showAll = ["showAll",0];
org.silex.core.config.ScaleModeValue.showAll.toString = $estr;
org.silex.core.config.ScaleModeValue.showAll.__enum__ = org.silex.core.config.ScaleModeValue;
org.silex.core.config.ScaleModeValue.noScale = ["noScale",1];
org.silex.core.config.ScaleModeValue.noScale.toString = $estr;
org.silex.core.config.ScaleModeValue.noScale.__enum__ = org.silex.core.config.ScaleModeValue;
org.silex.core.config.ScaleModeValue.pixel = ["pixel",2];
org.silex.core.config.ScaleModeValue.pixel.toString = $estr;
org.silex.core.config.ScaleModeValue.pixel.__enum__ = org.silex.core.config.ScaleModeValue;
org.silex.core.config.ScaleModeValue.scroll = ["scroll",3];
org.silex.core.config.ScaleModeValue.scroll.toString = $estr;
org.silex.core.config.ScaleModeValue.scroll.__enum__ = org.silex.core.config.ScaleModeValue;
org.silex.core.config.RuntimeValue = { __ename__ : ["org","silex","core","config","RuntimeValue"], __constructs__ : ["as3","js","php"] }
org.silex.core.config.RuntimeValue.as3 = ["as3",0];
org.silex.core.config.RuntimeValue.as3.toString = $estr;
org.silex.core.config.RuntimeValue.as3.__enum__ = org.silex.core.config.RuntimeValue;
org.silex.core.config.RuntimeValue.js = ["js",1];
org.silex.core.config.RuntimeValue.js.toString = $estr;
org.silex.core.config.RuntimeValue.js.__enum__ = org.silex.core.config.RuntimeValue;
org.silex.core.config.RuntimeValue.php = ["php",2];
org.silex.core.config.RuntimeValue.php.toString = $estr;
org.silex.core.config.RuntimeValue.php.__enum__ = org.silex.core.config.RuntimeValue;
org.silex.core.config.Config = function(p) { if( p === $_ ) return; {
	null;
}}
org.silex.core.config.Config.__name__ = ["org","silex","core","config","Config"];
org.silex.core.config.Config.getConfigData = function() {
	return org.silex.core.config.Config.duplicateConfigData(org.silex.core.config.Config.configData);
}
org.silex.core.config.Config.setConfigData = function(newConfigData) {
	org.silex.core.config.Config.configData = org.silex.core.config.Config.duplicateConfigData(newConfigData);
}
org.silex.core.config.Config.addConfigValues = function(stringObject) {
	if(stringObject.publicationId != null) org.silex.core.config.Config.configData.publicationId = stringObject.publicationId;
	if(stringObject.scaleMode != null) org.silex.core.config.Config.configData.scaleMode = Type.createEnum(org.silex.core.config.ScaleModeValue,stringObject.scaleMode);
}
org.silex.core.config.Config.getConfigDataAsUntyped = function() {
	var stringObject = { publicationId : org.silex.core.config.Config.configData.publicationId, scaleMode : Std.string(org.silex.core.config.Config.configData.scaleMode)};
	return stringObject;
}
org.silex.core.config.Config.duplicateConfigData = function(configData) {
	var duplicatedConfigData = { publicationId : configData.publicationId, scaleMode : configData.scaleMode, runtime : configData.runtime};
	return duplicatedConfigData;
}
org.silex.core.config.Config.prototype.__class__ = org.silex.core.config.Config;
org.silex.runtime.domobject.base.ImageDOMObjectBase = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domobject.js.DOMObject.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domobject.base.ImageDOMObjectBase.__name__ = ["org","silex","runtime","domobject","base","ImageDOMObjectBase"];
org.silex.runtime.domobject.base.ImageDOMObjectBase.__super__ = org.silex.runtime.domobject.js.DOMObject;
for(var k in org.silex.runtime.domobject.js.DOMObject.prototype ) org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype[k] = org.silex.runtime.domobject.js.DOMObject.prototype[k];
org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype.addChild = function(domObject) {
	null;
}
org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype.removeChild = function(domObject) {
	null;
}
org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype.__class__ = org.silex.runtime.domobject.base.ImageDOMObjectBase;
org.silex.runtime.domobject.js.ImageDOMObject = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domobject.base.ImageDOMObjectBase.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domobject.js.ImageDOMObject.__name__ = ["org","silex","runtime","domobject","js","ImageDOMObject"];
org.silex.runtime.domobject.js.ImageDOMObject.__super__ = org.silex.runtime.domobject.base.ImageDOMObjectBase;
for(var k in org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype ) org.silex.runtime.domobject.js.ImageDOMObject.prototype[k] = org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype[k];
org.silex.runtime.domobject.js.ImageDOMObject.prototype.__class__ = org.silex.runtime.domobject.js.ImageDOMObject;
if(!org.silex.runtime.ressource) org.silex.runtime.ressource = {}
org.silex.runtime.ressource.RessourceLoader = function(p) { if( p === $_ ) return; {
	null;
}}
org.silex.runtime.ressource.RessourceLoader.__name__ = ["org","silex","runtime","ressource","RessourceLoader"];
org.silex.runtime.ressource.RessourceLoader.prototype._onLoadCompleteCallback = null;
org.silex.runtime.ressource.RessourceLoader.prototype._onLoadErrorCallback = null;
org.silex.runtime.ressource.RessourceLoader.prototype.load = function(url,onLoadComplete,onLoadError,allowCache) {
	this._onLoadCompleteCallback = onLoadComplete;
	this._onLoadErrorCallback = onLoadError;
	if(allowCache == false) {
		url = this.disableUrlCaching(url);
	}
	this.doLoad(url);
}
org.silex.runtime.ressource.RessourceLoader.prototype.doLoad = function(url) {
	var fileRequest = new haxe.Http(url);
	fileRequest.onData = $closure(this,"onLoadComplete");
	fileRequest.onError = $closure(this,"onLoadError");
	fileRequest.request(false);
}
org.silex.runtime.ressource.RessourceLoader.prototype.onLoadComplete = function(data) {
	this._onLoadCompleteCallback(data);
}
org.silex.runtime.ressource.RessourceLoader.prototype.onLoadError = function(msg) {
	this._onLoadErrorCallback(msg);
}
org.silex.runtime.ressource.RessourceLoader.prototype.disableUrlCaching = function(url) {
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
org.silex.runtime.ressource.RessourceLoader.prototype.__class__ = org.silex.runtime.ressource.RessourceLoader;
if(!org.silex.runtime.ressource.js) org.silex.runtime.ressource.js = {}
org.silex.runtime.ressource.js.StringLoader = function(p) { if( p === $_ ) return; {
	org.silex.runtime.ressource.RessourceLoader.call(this);
}}
org.silex.runtime.ressource.js.StringLoader.__name__ = ["org","silex","runtime","ressource","js","StringLoader"];
org.silex.runtime.ressource.js.StringLoader.__super__ = org.silex.runtime.ressource.RessourceLoader;
for(var k in org.silex.runtime.ressource.RessourceLoader.prototype ) org.silex.runtime.ressource.js.StringLoader.prototype[k] = org.silex.runtime.ressource.RessourceLoader.prototype[k];
org.silex.runtime.ressource.js.StringLoader.prototype.__class__ = org.silex.runtime.ressource.js.StringLoader;
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
SilexFramework = function() { }
SilexFramework.__name__ = ["SilexFramework"];
SilexFramework.main = function() {
	null;
}
SilexFramework.prototype.__class__ = SilexFramework;
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
org.silex.runtime.ressource.js.ImageLoader = function(p) { if( p === $_ ) return; {
	org.silex.runtime.ressource.RessourceLoader.call(this);
}}
org.silex.runtime.ressource.js.ImageLoader.__name__ = ["org","silex","runtime","ressource","js","ImageLoader"];
org.silex.runtime.ressource.js.ImageLoader.__super__ = org.silex.runtime.ressource.RessourceLoader;
for(var k in org.silex.runtime.ressource.RessourceLoader.prototype ) org.silex.runtime.ressource.js.ImageLoader.prototype[k] = org.silex.runtime.ressource.RessourceLoader.prototype[k];
org.silex.runtime.ressource.js.ImageLoader.prototype.doLoad = function(url) {
	var domObject = new org.silex.runtime.domobject.js.ImageDOMObject(js.Lib.document.createElement("img"));
	var onLoadCompleteDelegate = $closure(this,"onLoadComplete");
	domObject.getReferenceToNativeDOM().onload = function() {
		onLoadCompleteDelegate(domObject);
	}
	domObject.getReferenceToNativeDOM().setAttribute("src",url);
}
org.silex.runtime.ressource.js.ImageLoader.prototype.__class__ = org.silex.runtime.ressource.js.ImageLoader;
org.silex.runtime.ressource.RessourceLoaderManager = function(p) { if( p === $_ ) return; {
	null;
}}
org.silex.runtime.ressource.RessourceLoaderManager.__name__ = ["org","silex","runtime","ressource","RessourceLoaderManager"];
org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray = null;
org.silex.runtime.ressource.RessourceLoaderManager.loadImage = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var ressourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, loadingType : org.silex.runtime.ressource.LoadingTypeValue.image};
	org.silex.runtime.ressource.RessourceLoaderManager.addRessourceData(ressourceDataToAdd);
}
org.silex.runtime.ressource.RessourceLoaderManager.loadText = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var ressourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, loadingType : org.silex.runtime.ressource.LoadingTypeValue.text};
	org.silex.runtime.ressource.RessourceLoaderManager.addRessourceData(ressourceDataToAdd);
}
org.silex.runtime.ressource.RessourceLoaderManager.loadAnimation = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var ressourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, loadingType : org.silex.runtime.ressource.LoadingTypeValue.animation};
	org.silex.runtime.ressource.RessourceLoaderManager.addRessourceData(ressourceDataToAdd);
}
org.silex.runtime.ressource.RessourceLoaderManager.loadContainer = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var ressourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, loadingType : org.silex.runtime.ressource.LoadingTypeValue.container};
	org.silex.runtime.ressource.RessourceLoaderManager.addRessourceData(ressourceDataToAdd);
}
org.silex.runtime.ressource.RessourceLoaderManager.loadString = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var ressourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, loadingType : org.silex.runtime.ressource.LoadingTypeValue.data};
	org.silex.runtime.ressource.RessourceLoaderManager.addRessourceData(ressourceDataToAdd);
}
org.silex.runtime.ressource.RessourceLoaderManager.loadLibrary = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var ressourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, loadingType : org.silex.runtime.ressource.LoadingTypeValue.library};
	org.silex.runtime.ressource.RessourceLoaderManager.addRessourceData(ressourceDataToAdd);
}
org.silex.runtime.ressource.RessourceLoaderManager.addRessourceData = function(ressourceData) {
	if(org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray == null) {
		org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray = new Array();
	}
	org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray.push(ressourceData);
	if(org.silex.runtime.ressource.RessourceLoaderManager._isLoading == false) {
		org.silex.runtime.ressource.RessourceLoaderManager.loadNextRessource();
	}
}
org.silex.runtime.ressource.RessourceLoaderManager.loadNextRessource = function() {
	if(org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray.length == 0) {
		org.silex.runtime.ressource.RessourceLoaderManager._isLoading = false;
	}
	else {
		org.silex.runtime.ressource.RessourceLoaderManager._isLoading = true;
		var ressourceDataToLoad = org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray[0];
		var ressourceLoader;
		var $e = ressourceDataToLoad.loadingType;
		switch( $e[1] ) {
		case 0:
		{
			ressourceLoader = new org.silex.runtime.ressource.js.StringLoader();
		}break;
		case 1:
		{
			ressourceLoader = new org.silex.runtime.ressource.js.ImageLoader();
		}break;
		case 2:
		{
			ressourceLoader = new org.silex.runtime.ressource.js.TextLoader();
		}break;
		case 3:
		{
			ressourceLoader = new org.silex.runtime.ressource.js.AnimationLoader();
		}break;
		case 4:
		{
			ressourceLoader = new org.silex.runtime.ressource.js.ContainerLoader();
		}break;
		case 5:
		{
			ressourceLoader = new org.silex.runtime.ressource.js.LibraryLoader();
		}break;
		}
		ressourceLoader.load(ressourceDataToLoad.url,$closure(org.silex.runtime.ressource.RessourceLoaderManager,"onLoadComplete"),$closure(org.silex.runtime.ressource.RessourceLoaderManager,"onLoadError"),ressourceDataToLoad.allowCache);
	}
}
org.silex.runtime.ressource.RessourceLoaderManager.onLoadComplete = function(data) {
	var loadedRessourceData = org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray.shift();
	loadedRessourceData.onLoadComplete(data);
	org.silex.runtime.ressource.RessourceLoaderManager.loadNextRessource();
}
org.silex.runtime.ressource.RessourceLoaderManager.onLoadError = function(data) {
	var errorRessourceData = org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray.shift();
	errorRessourceData.onLoadError(data);
	org.silex.runtime.ressource.RessourceLoaderManager.loadNextRessource();
}
org.silex.runtime.ressource.RessourceLoaderManager.prototype.__class__ = org.silex.runtime.ressource.RessourceLoaderManager;
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
if(!org.silex.runtime.nativeClass) org.silex.runtime.nativeClass = {}
org.silex.runtime.nativeClass.NativeClass = function(p) { if( p === $_ ) return; {
	null;
}}
org.silex.runtime.nativeClass.NativeClass.__name__ = ["org","silex","runtime","nativeClass","NativeClass"];
org.silex.runtime.nativeClass.NativeClass.getNativeInstanceByClassName = function(className) {
	return new org.silex.runtime.nativeClass.js.NativeInstance(className);
}
org.silex.runtime.nativeClass.NativeClass.createInstanceOf = function(classReference) {
	return org.silex.runtime.nativeClass.NativeClass.getNativeInstanceByClassName(Type.getClassName(classReference));
}
org.silex.runtime.nativeClass.NativeClass.prototype.__class__ = org.silex.runtime.nativeClass.NativeClass;
org.silex.core.XmlUtils = function() { }
org.silex.core.XmlUtils.__name__ = ["org","silex","core","XmlUtils"];
org.silex.core.XmlUtils.cleanUp = function(xml) {
	var xmlCopy = Xml.parse(xml.toString()).firstElement();
	if(xmlCopy != null) {
		return org.silex.core.XmlUtils.cleanUpRecursive(xmlCopy);
	}
	else {
		return xml;
	}
}
org.silex.core.XmlUtils.cleanUpRecursive = function(xml) {
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
			childData = org.silex.core.XmlUtils.cleanUpRecursive(child1);
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
org.silex.core.XmlUtils.stringIndent2Xml = function(xmlString) {
	var xml = Xml.parse(xmlString);
	return org.silex.core.XmlUtils.cleanUp(xml);
}
org.silex.core.XmlUtils.xml2StringIndent = function(xml) {
	var firstElement = xml.firstElement();
	return org.silex.core.XmlUtils.xml2StringIndentRecursive(firstElement,"");
}
org.silex.core.XmlUtils.xml2StringIndentRecursive = function(xml,indentationLevel) {
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
				toReturn += org.silex.core.XmlUtils.xml2StringIndentRecursive(element1,indentationLevel + "\t");
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
org.silex.core.XmlUtils.prototype.__class__ = org.silex.core.XmlUtils;
org.silex.runtime.ressource.js.ContainerLoader = function(p) { if( p === $_ ) return; {
	org.silex.runtime.ressource.RessourceLoader.call(this);
}}
org.silex.runtime.ressource.js.ContainerLoader.__name__ = ["org","silex","runtime","ressource","js","ContainerLoader"];
org.silex.runtime.ressource.js.ContainerLoader.__super__ = org.silex.runtime.ressource.RessourceLoader;
for(var k in org.silex.runtime.ressource.RessourceLoader.prototype ) org.silex.runtime.ressource.js.ContainerLoader.prototype[k] = org.silex.runtime.ressource.RessourceLoader.prototype[k];
org.silex.runtime.ressource.js.ContainerLoader.prototype.onLoadComplete = function(data) {
	var domObject = new org.silex.runtime.domobject.js.ContainerDOMObject(js.Lib.document.createElement("div"));
	domObject.getReferenceToNativeDOM().innerHTML = data;
	this._onLoadCompleteCallback(domObject);
}
org.silex.runtime.ressource.js.ContainerLoader.prototype.__class__ = org.silex.runtime.ressource.js.ContainerLoader;
org.silex.runtime.domobject.js.TextDOMObject = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domobject.base.TextDOMObjectBase.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domobject.js.TextDOMObject.__name__ = ["org","silex","runtime","domobject","js","TextDOMObject"];
org.silex.runtime.domobject.js.TextDOMObject.__super__ = org.silex.runtime.domobject.base.TextDOMObjectBase;
for(var k in org.silex.runtime.domobject.base.TextDOMObjectBase.prototype ) org.silex.runtime.domobject.js.TextDOMObject.prototype[k] = org.silex.runtime.domobject.base.TextDOMObjectBase.prototype[k];
org.silex.runtime.domobject.js.TextDOMObject.prototype.setText = function(text) {
	org.silex.runtime.domobject.base.TextDOMObjectBase.prototype.setText.call(this,text);
	this._referenceToNativeDOM.innerHTML = text;
}
org.silex.runtime.domobject.js.TextDOMObject.prototype.__class__ = org.silex.runtime.domobject.js.TextDOMObject;
org.silex.runtime.nativeClass.NativeInstanceBase = function(nativeInstanceClassName) { if( nativeInstanceClassName === $_ ) return; {
	null;
}}
org.silex.runtime.nativeClass.NativeInstanceBase.__name__ = ["org","silex","runtime","nativeClass","NativeInstanceBase"];
org.silex.runtime.nativeClass.NativeInstanceBase.prototype._refToNativeClassInstance = null;
org.silex.runtime.nativeClass.NativeInstanceBase.prototype.callMethod = function(methodName,args) {
	if(Reflect.isFunction(Reflect.field(this._refToNativeClassInstance,methodName))) {
		var method = Reflect.field(this._refToNativeClassInstance,methodName);
		return method.apply(this._refToNativeClassInstance,args);
	}
	return null;
}
org.silex.runtime.nativeClass.NativeInstanceBase.prototype.getField = function(fieldName) {
	if(Reflect.hasField(this._refToNativeClassInstance,fieldName)) {
		return Reflect.field(this._refToNativeClassInstance,fieldName);
	}
	else {
		return null;
	}
}
org.silex.runtime.nativeClass.NativeInstanceBase.prototype.setField = function(fieldName,fieldValue) {
	this._refToNativeClassInstance[fieldName] = fieldValue;
}
org.silex.runtime.nativeClass.NativeInstanceBase.prototype.getReferenceToNativeClassInstance = function() {
	return this._refToNativeClassInstance;
}
org.silex.runtime.nativeClass.NativeInstanceBase.prototype.__class__ = org.silex.runtime.nativeClass.NativeInstanceBase;
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
org.silex.runtime.domobject.base.ContainerDOMObjectBase = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domobject.js.DOMObject.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domobject.base.ContainerDOMObjectBase.__name__ = ["org","silex","runtime","domobject","base","ContainerDOMObjectBase"];
org.silex.runtime.domobject.base.ContainerDOMObjectBase.__super__ = org.silex.runtime.domobject.js.DOMObject;
for(var k in org.silex.runtime.domobject.js.DOMObject.prototype ) org.silex.runtime.domobject.base.ContainerDOMObjectBase.prototype[k] = org.silex.runtime.domobject.js.DOMObject.prototype[k];
org.silex.runtime.domobject.base.ContainerDOMObjectBase.prototype._semantic = null;
org.silex.runtime.domobject.base.ContainerDOMObjectBase.prototype.setSemantic = function(semantic) {
	this._semantic = semantic;
}
org.silex.runtime.domobject.base.ContainerDOMObjectBase.prototype.getSemantic = function() {
	return this._semantic;
}
org.silex.runtime.domobject.base.ContainerDOMObjectBase.prototype.__class__ = org.silex.runtime.domobject.base.ContainerDOMObjectBase;
org.silex.runtime.domobject.js.GraphicDOMObject = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domobject.base.GraphicDOMObjectBase.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domobject.js.GraphicDOMObject.__name__ = ["org","silex","runtime","domobject","js","GraphicDOMObject"];
org.silex.runtime.domobject.js.GraphicDOMObject.__super__ = org.silex.runtime.domobject.base.GraphicDOMObjectBase;
for(var k in org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype ) org.silex.runtime.domobject.js.GraphicDOMObject.prototype[k] = org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype[k];
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.setWidth = function(value) {
	this._referenceToNativeDOM.width = value;
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.getWidth = function() {
	return Std.parseInt(this._referenceToNativeDOM.width);
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.setHeight = function(value) {
	this._referenceToNativeDOM.height = value;
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.getHeight = function() {
	return Std.parseInt(this._referenceToNativeDOM.height);
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.beginFill = function(fillStyle,lineStyle) {
	org.silex.runtime.domobject.base.GraphicDOMObjectBase.prototype.beginFill.call(this,fillStyle,lineStyle);
	this.setFillStyle(fillStyle);
	this.setLineStyle(lineStyle);
	var canvasContext = this.getContext();
	canvasContext.beginPath();
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.endFill = function() {
	var canvasContext = this.getContext();
	canvasContext.closePath();
	canvasContext.fill();
	canvasContext.stroke();
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.clear = function() {
	var canvasContext = this.getContext();
	canvasContext.clearRect(0,0,this.getWidth(),this.getHeight());
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.setFillStyle = function(fillStyle) {
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
	var repeat = $e[3], imageDOMObject = $e[2];
	{
		canvasContext.fillStyle = this.getCanvasPattern(imageDOMObject,repeat);
	}break;
	}
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.setLineStyle = function(lineStyle) {
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
	var repeat = $e[4], lineStyleData = $e[3], imageDOMObject = $e[2];
	{
		this.initLineStyle(lineStyleData);
		canvasContext.strokeStyle = this.getCanvasPattern(imageDOMObject,repeat);
	}break;
	}
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.lineTo = function(x,y) {
	var canvasContext = this.getContext();
	canvasContext.lineTo(x,y);
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.moveTo = function(x,y) {
	var canvasContext = this.getContext();
	canvasContext.moveTo(x,y);
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.curveTo = function(controlX,controlY,x,y) {
	var canvasContext = this.getContext();
	canvasContext.quadraticCurveTo(controlX,controlY,x,y);
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.toNativeAlpha = function(genericAlpha) {
	return genericAlpha * 0.01;
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.toNativeRatio = function(genericRatio) {
	return genericRatio * 0.01;
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.toNativeCapStyle = function(genericCapStyle) {
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
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.toNativeJointStyle = function(genericJointStyle) {
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
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.colorStopToRGBA = function(colorStop) {
	var rgb = this.hexToRGB(this.getHexColor(colorStop.color));
	return "rgba(" + rgb.red + "," + rgb.green + "," + rgb.blue + "," + this.toNativeAlpha(colorStop.alpha) + ");";
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.getHexColor = function(color) {
	var hexColor = StringTools.hex(color);
	while(hexColor.length < 6) {
		hexColor = "0" + hexColor;
	}
	return "#" + hexColor;
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.hexToRGB = function(hex) {
	var hexCopy = hex;
	var hexCopy1 = hexCopy.substr(1);
	var rgb = { red : Std.parseInt("0x" + hexCopy1.substr(0,2)), green : Std.parseInt("0x" + hexCopy1.substr(2,2)), blue : Std.parseInt("0x" + hexCopy1.substr(4,2))};
	return rgb;
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.initLineStyle = function(lineStyleData) {
	var canvasContext = this.getContext();
	canvasContext.lineWidth = lineStyleData.thickness;
	canvasContext.lineCap = this.toNativeCapStyle(lineStyleData.capStyle);
	canvasContext.lineJoin = this.toNativeJointStyle(lineStyleData.jointStyle);
	canvasContext.miterLimit = lineStyleData.miterLimit;
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.getContext = function() {
	return this._referenceToNativeDOM.getContext("2d");
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.getCanvasPattern = function(imageDOMObject,repeat) {
	var canvasContext = this.getContext();
	var repeatValue = "";
	if(repeat == true) {
		repeatValue = "repeat";
	}
	else {
		repeatValue = "no-repeat";
	}
	return canvasContext.createPattern(imageDOMObject.getReferenceToNativeDOM(),repeatValue);
}
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.getGradient = function(gradientStyle) {
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
org.silex.runtime.domobject.js.GraphicDOMObject.prototype.__class__ = org.silex.runtime.domobject.js.GraphicDOMObject;
if(!org.silex.runtime.nativeClass.js) org.silex.runtime.nativeClass.js = {}
org.silex.runtime.nativeClass.js.NativeInstance = function(nativeInstanceClassName) { if( nativeInstanceClassName === $_ ) return; {
	org.silex.runtime.nativeClass.NativeInstanceBase.call(this,nativeInstanceClassName);
	if(Type.resolveClass(nativeInstanceClassName) != null) {
		this._refToNativeClassInstance = Type.createInstance(Type.resolveClass(nativeInstanceClassName),[]);
	}
	else {
		this._refToNativeClassInstance = js.Lib.eval("new " + nativeInstanceClassName + "()");
	}
}}
org.silex.runtime.nativeClass.js.NativeInstance.__name__ = ["org","silex","runtime","nativeClass","js","NativeInstance"];
org.silex.runtime.nativeClass.js.NativeInstance.__super__ = org.silex.runtime.nativeClass.NativeInstanceBase;
for(var k in org.silex.runtime.nativeClass.NativeInstanceBase.prototype ) org.silex.runtime.nativeClass.js.NativeInstance.prototype[k] = org.silex.runtime.nativeClass.NativeInstanceBase.prototype[k];
org.silex.runtime.nativeClass.js.NativeInstance.prototype.__class__ = org.silex.runtime.nativeClass.js.NativeInstance;
org.silex.runtime.ressource.js.LibraryLoader = function(p) { if( p === $_ ) return; {
	org.silex.runtime.ressource.RessourceLoader.call(this);
}}
org.silex.runtime.ressource.js.LibraryLoader.__name__ = ["org","silex","runtime","ressource","js","LibraryLoader"];
org.silex.runtime.ressource.js.LibraryLoader.__super__ = org.silex.runtime.ressource.RessourceLoader;
for(var k in org.silex.runtime.ressource.RessourceLoader.prototype ) org.silex.runtime.ressource.js.LibraryLoader.prototype[k] = org.silex.runtime.ressource.RessourceLoader.prototype[k];
org.silex.runtime.ressource.js.LibraryLoader.prototype.doLoad = function(url) {
	var scrptE = js.Lib.document.createElement("script");
	scrptE.setAttribute("type","text/javascript");
	scrptE.setAttribute("language","JavaScript");
	scrptE.setAttribute("src",url);
	scrptE.onload = $closure(this,"onLoadComplete");
	scrptE.onreadystatechange = function() {
		if(this.readyState == "loaded" || this.readyState == "complete") onLoadCallback();
	}
	js.Lib.document.getElementsByTagName("head")[0].appendChild(scrptE);
}
org.silex.runtime.ressource.js.LibraryLoader.prototype.onLoadComplete = function(data) {
	this._onLoadCompleteCallback(null);
}
org.silex.runtime.ressource.js.LibraryLoader.prototype.__class__ = org.silex.runtime.ressource.js.LibraryLoader;
org.silex.runtime.ressource.js.TextLoader = function(p) { if( p === $_ ) return; {
	org.silex.runtime.ressource.RessourceLoader.call(this);
}}
org.silex.runtime.ressource.js.TextLoader.__name__ = ["org","silex","runtime","ressource","js","TextLoader"];
org.silex.runtime.ressource.js.TextLoader.__super__ = org.silex.runtime.ressource.RessourceLoader;
for(var k in org.silex.runtime.ressource.RessourceLoader.prototype ) org.silex.runtime.ressource.js.TextLoader.prototype[k] = org.silex.runtime.ressource.RessourceLoader.prototype[k];
org.silex.runtime.ressource.js.TextLoader.prototype.onLoadComplete = function(data) {
	var domObject = new org.silex.runtime.domobject.js.TextDOMObject(js.Lib.document.createElement("div"));
	domObject.setText(data);
	this._onLoadCompleteCallback(domObject);
}
org.silex.runtime.ressource.js.TextLoader.prototype.__class__ = org.silex.runtime.ressource.js.TextLoader;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
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
org.silex.runtime.ressource.LoadingTypeValue = { __ename__ : ["org","silex","runtime","ressource","LoadingTypeValue"], __constructs__ : ["data","image","text","animation","container","library"] }
org.silex.runtime.ressource.LoadingTypeValue.data = ["data",0];
org.silex.runtime.ressource.LoadingTypeValue.data.toString = $estr;
org.silex.runtime.ressource.LoadingTypeValue.data.__enum__ = org.silex.runtime.ressource.LoadingTypeValue;
org.silex.runtime.ressource.LoadingTypeValue.image = ["image",1];
org.silex.runtime.ressource.LoadingTypeValue.image.toString = $estr;
org.silex.runtime.ressource.LoadingTypeValue.image.__enum__ = org.silex.runtime.ressource.LoadingTypeValue;
org.silex.runtime.ressource.LoadingTypeValue.text = ["text",2];
org.silex.runtime.ressource.LoadingTypeValue.text.toString = $estr;
org.silex.runtime.ressource.LoadingTypeValue.text.__enum__ = org.silex.runtime.ressource.LoadingTypeValue;
org.silex.runtime.ressource.LoadingTypeValue.animation = ["animation",3];
org.silex.runtime.ressource.LoadingTypeValue.animation.toString = $estr;
org.silex.runtime.ressource.LoadingTypeValue.animation.__enum__ = org.silex.runtime.ressource.LoadingTypeValue;
org.silex.runtime.ressource.LoadingTypeValue.container = ["container",4];
org.silex.runtime.ressource.LoadingTypeValue.container.toString = $estr;
org.silex.runtime.ressource.LoadingTypeValue.container.__enum__ = org.silex.runtime.ressource.LoadingTypeValue;
org.silex.runtime.ressource.LoadingTypeValue.library = ["library",5];
org.silex.runtime.ressource.LoadingTypeValue.library.toString = $estr;
org.silex.runtime.ressource.LoadingTypeValue.library.__enum__ = org.silex.runtime.ressource.LoadingTypeValue;
org.silex.runtime.ressource.js.AnimationLoader = function(p) { if( p === $_ ) return; {
	org.silex.runtime.ressource.RessourceLoader.call(this);
}}
org.silex.runtime.ressource.js.AnimationLoader.__name__ = ["org","silex","runtime","ressource","js","AnimationLoader"];
org.silex.runtime.ressource.js.AnimationLoader.__super__ = org.silex.runtime.ressource.RessourceLoader;
for(var k in org.silex.runtime.ressource.RessourceLoader.prototype ) org.silex.runtime.ressource.js.AnimationLoader.prototype[k] = org.silex.runtime.ressource.RessourceLoader.prototype[k];
org.silex.runtime.ressource.js.AnimationLoader.prototype.__class__ = org.silex.runtime.ressource.js.AnimationLoader;
org.silex.core.block.BlockStateValue = { __ename__ : ["org","silex","core","block","BlockStateValue"], __constructs__ : ["opened","closed","loading"] }
org.silex.core.block.BlockStateValue.opened = ["opened",0];
org.silex.core.block.BlockStateValue.opened.toString = $estr;
org.silex.core.block.BlockStateValue.opened.__enum__ = org.silex.core.block.BlockStateValue;
org.silex.core.block.BlockStateValue.closed = ["closed",1];
org.silex.core.block.BlockStateValue.closed.toString = $estr;
org.silex.core.block.BlockStateValue.closed.__enum__ = org.silex.core.block.BlockStateValue;
org.silex.core.block.BlockStateValue.loading = ["loading",2];
org.silex.core.block.BlockStateValue.loading.toString = $estr;
org.silex.core.block.BlockStateValue.loading.__enum__ = org.silex.core.block.BlockStateValue;
if(!org.silex.blocks) org.silex.blocks = {}
org.silex.blocks.Image = function(p) { if( p === $_ ) return; {
	haxe.Timer.delay($closure(this,"initDone"),10);
}}
org.silex.blocks.Image.__name__ = ["org","silex","blocks","Image"];
org.silex.blocks.Image.prototype.initDone = function() {
	haxe.Log.trace("initDone - YES " + this.url + " - " + this.x,{ fileName : "Image.hx", lineNumber : 40, className : "org.silex.blocks.Image", methodName : "initDone"});
	if(this.url != "" && this.url != null) {
		haxe.Log.trace("initDone - start loading asset",{ fileName : "Image.hx", lineNumber : 43, className : "org.silex.blocks.Image", methodName : "initDone"});
		org.silex.runtime.ressource.RessourceLoaderManager.loadImage(this.url,$closure(this,"_imageLoadedSuccess"),$closure(this,"_imageLoadedError"));
	}
}
org.silex.blocks.Image.prototype.x = null;
org.silex.blocks.Image.prototype.url = null;
org.silex.blocks.Image.prototype._domObject = null;
org.silex.blocks.Image.prototype._imageLoadedSuccess = function(imageDOMObject) {
	haxe.Log.trace("_imageLoadedSuccess " + imageDOMObject,{ fileName : "Image.hx", lineNumber : 64, className : "org.silex.blocks.Image", methodName : "_imageLoadedSuccess"});
}
org.silex.blocks.Image.prototype._imageLoadedError = function(str) {
	haxe.Log.trace("_imageLoadedError " + str,{ fileName : "Image.hx", lineNumber : 71, className : "org.silex.blocks.Image", methodName : "_imageLoadedError"});
}
org.silex.blocks.Image.prototype.__class__ = org.silex.blocks.Image;
org.silex.runtime.domobject.base.AnimationDOMObjectBase = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domobject.js.DOMObject.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domobject.base.AnimationDOMObjectBase.__name__ = ["org","silex","runtime","domobject","base","AnimationDOMObjectBase"];
org.silex.runtime.domobject.base.AnimationDOMObjectBase.__super__ = org.silex.runtime.domobject.js.DOMObject;
for(var k in org.silex.runtime.domobject.js.DOMObject.prototype ) org.silex.runtime.domobject.base.AnimationDOMObjectBase.prototype[k] = org.silex.runtime.domobject.js.DOMObject.prototype[k];
org.silex.runtime.domobject.base.AnimationDOMObjectBase.prototype.__class__ = org.silex.runtime.domobject.base.AnimationDOMObjectBase;
org.silex.runtime.domobject.js.AnimationDOMObject = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domobject.base.AnimationDOMObjectBase.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domobject.js.AnimationDOMObject.__name__ = ["org","silex","runtime","domobject","js","AnimationDOMObject"];
org.silex.runtime.domobject.js.AnimationDOMObject.__super__ = org.silex.runtime.domobject.base.AnimationDOMObjectBase;
for(var k in org.silex.runtime.domobject.base.AnimationDOMObjectBase.prototype ) org.silex.runtime.domobject.js.AnimationDOMObject.prototype[k] = org.silex.runtime.domobject.base.AnimationDOMObjectBase.prototype[k];
org.silex.runtime.domobject.js.AnimationDOMObject.prototype.__class__ = org.silex.runtime.domobject.js.AnimationDOMObject;
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
org.silex.runtime.domobject.FillStyleValue = { __ename__ : ["org","silex","runtime","domobject","FillStyleValue"], __constructs__ : ["none","monochrome","gradient","bitmap"] }
org.silex.runtime.domobject.FillStyleValue.none = ["none",0];
org.silex.runtime.domobject.FillStyleValue.none.toString = $estr;
org.silex.runtime.domobject.FillStyleValue.none.__enum__ = org.silex.runtime.domobject.FillStyleValue;
org.silex.runtime.domobject.FillStyleValue.monochrome = function(colorStop) { var $x = ["monochrome",1,colorStop]; $x.__enum__ = org.silex.runtime.domobject.FillStyleValue; $x.toString = $estr; return $x; }
org.silex.runtime.domobject.FillStyleValue.gradient = function(gradientStyle) { var $x = ["gradient",2,gradientStyle]; $x.__enum__ = org.silex.runtime.domobject.FillStyleValue; $x.toString = $estr; return $x; }
org.silex.runtime.domobject.FillStyleValue.bitmap = function(imageDOMObject,repeat) { var $x = ["bitmap",3,imageDOMObject,repeat]; $x.__enum__ = org.silex.runtime.domobject.FillStyleValue; $x.toString = $estr; return $x; }
org.silex.runtime.domobject.LineStyleValue = { __ename__ : ["org","silex","runtime","domobject","LineStyleValue"], __constructs__ : ["none","monochrome","gradient","bitmap"] }
org.silex.runtime.domobject.LineStyleValue.none = ["none",0];
org.silex.runtime.domobject.LineStyleValue.none.toString = $estr;
org.silex.runtime.domobject.LineStyleValue.none.__enum__ = org.silex.runtime.domobject.LineStyleValue;
org.silex.runtime.domobject.LineStyleValue.monochrome = function(colorStop,lineStyle) { var $x = ["monochrome",1,colorStop,lineStyle]; $x.__enum__ = org.silex.runtime.domobject.LineStyleValue; $x.toString = $estr; return $x; }
org.silex.runtime.domobject.LineStyleValue.gradient = function(gradientStyle,lineStyle) { var $x = ["gradient",2,gradientStyle,lineStyle]; $x.__enum__ = org.silex.runtime.domobject.LineStyleValue; $x.toString = $estr; return $x; }
org.silex.runtime.domobject.LineStyleValue.bitmap = function(imageDOMObject,lineStyle,repeat) { var $x = ["bitmap",3,imageDOMObject,lineStyle,repeat]; $x.__enum__ = org.silex.runtime.domobject.LineStyleValue; $x.toString = $estr; return $x; }
org.silex.runtime.domobject.GradientTypeValue = { __ename__ : ["org","silex","runtime","domobject","GradientTypeValue"], __constructs__ : ["linear","radial"] }
org.silex.runtime.domobject.GradientTypeValue.linear = ["linear",0];
org.silex.runtime.domobject.GradientTypeValue.linear.toString = $estr;
org.silex.runtime.domobject.GradientTypeValue.linear.__enum__ = org.silex.runtime.domobject.GradientTypeValue;
org.silex.runtime.domobject.GradientTypeValue.radial = ["radial",1];
org.silex.runtime.domobject.GradientTypeValue.radial.toString = $estr;
org.silex.runtime.domobject.GradientTypeValue.radial.__enum__ = org.silex.runtime.domobject.GradientTypeValue;
org.silex.runtime.domobject.CapsStyleValue = { __ename__ : ["org","silex","runtime","domobject","CapsStyleValue"], __constructs__ : ["none","square","round"] }
org.silex.runtime.domobject.CapsStyleValue.none = ["none",0];
org.silex.runtime.domobject.CapsStyleValue.none.toString = $estr;
org.silex.runtime.domobject.CapsStyleValue.none.__enum__ = org.silex.runtime.domobject.CapsStyleValue;
org.silex.runtime.domobject.CapsStyleValue.square = ["square",1];
org.silex.runtime.domobject.CapsStyleValue.square.toString = $estr;
org.silex.runtime.domobject.CapsStyleValue.square.__enum__ = org.silex.runtime.domobject.CapsStyleValue;
org.silex.runtime.domobject.CapsStyleValue.round = ["round",2];
org.silex.runtime.domobject.CapsStyleValue.round.toString = $estr;
org.silex.runtime.domobject.CapsStyleValue.round.__enum__ = org.silex.runtime.domobject.CapsStyleValue;
org.silex.runtime.domobject.JointStyleValue = { __ename__ : ["org","silex","runtime","domobject","JointStyleValue"], __constructs__ : ["miter","round","bevel"] }
org.silex.runtime.domobject.JointStyleValue.miter = ["miter",0];
org.silex.runtime.domobject.JointStyleValue.miter.toString = $estr;
org.silex.runtime.domobject.JointStyleValue.miter.__enum__ = org.silex.runtime.domobject.JointStyleValue;
org.silex.runtime.domobject.JointStyleValue.round = ["round",1];
org.silex.runtime.domobject.JointStyleValue.round.toString = $estr;
org.silex.runtime.domobject.JointStyleValue.round.__enum__ = org.silex.runtime.domobject.JointStyleValue;
org.silex.runtime.domobject.JointStyleValue.bevel = ["bevel",2];
org.silex.runtime.domobject.JointStyleValue.bevel.toString = $estr;
org.silex.runtime.domobject.JointStyleValue.bevel.__enum__ = org.silex.runtime.domobject.JointStyleValue;
org.silex.runtime.domobject.TransformationOriginValue = { __ename__ : ["org","silex","runtime","domobject","TransformationOriginValue"], __constructs__ : ["constant","point"] }
org.silex.runtime.domobject.TransformationOriginValue.constant = function(transformationOriginX,transformationOriginY) { var $x = ["constant",0,transformationOriginX,transformationOriginY]; $x.__enum__ = org.silex.runtime.domobject.TransformationOriginValue; $x.toString = $estr; return $x; }
org.silex.runtime.domobject.TransformationOriginValue.point = function(point) { var $x = ["point",1,point]; $x.__enum__ = org.silex.runtime.domobject.TransformationOriginValue; $x.toString = $estr; return $x; }
org.silex.runtime.domobject.TransformationOriginXValue = { __ename__ : ["org","silex","runtime","domobject","TransformationOriginXValue"], __constructs__ : ["left","center","right"] }
org.silex.runtime.domobject.TransformationOriginXValue.left = ["left",0];
org.silex.runtime.domobject.TransformationOriginXValue.left.toString = $estr;
org.silex.runtime.domobject.TransformationOriginXValue.left.__enum__ = org.silex.runtime.domobject.TransformationOriginXValue;
org.silex.runtime.domobject.TransformationOriginXValue.center = ["center",1];
org.silex.runtime.domobject.TransformationOriginXValue.center.toString = $estr;
org.silex.runtime.domobject.TransformationOriginXValue.center.__enum__ = org.silex.runtime.domobject.TransformationOriginXValue;
org.silex.runtime.domobject.TransformationOriginXValue.right = ["right",2];
org.silex.runtime.domobject.TransformationOriginXValue.right.toString = $estr;
org.silex.runtime.domobject.TransformationOriginXValue.right.__enum__ = org.silex.runtime.domobject.TransformationOriginXValue;
org.silex.runtime.domobject.TransformationOriginYValue = { __ename__ : ["org","silex","runtime","domobject","TransformationOriginYValue"], __constructs__ : ["top","middle","bottom"] }
org.silex.runtime.domobject.TransformationOriginYValue.top = ["top",0];
org.silex.runtime.domobject.TransformationOriginYValue.top.toString = $estr;
org.silex.runtime.domobject.TransformationOriginYValue.top.__enum__ = org.silex.runtime.domobject.TransformationOriginYValue;
org.silex.runtime.domobject.TransformationOriginYValue.middle = ["middle",1];
org.silex.runtime.domobject.TransformationOriginYValue.middle.toString = $estr;
org.silex.runtime.domobject.TransformationOriginYValue.middle.__enum__ = org.silex.runtime.domobject.TransformationOriginYValue;
org.silex.runtime.domobject.TransformationOriginYValue.bottom = ["bottom",2];
org.silex.runtime.domobject.TransformationOriginYValue.bottom.toString = $estr;
org.silex.runtime.domobject.TransformationOriginYValue.bottom.__enum__ = org.silex.runtime.domobject.TransformationOriginYValue;
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
org.silex.runtime.domobject.js.ContainerDOMObject = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domobject.base.ContainerDOMObjectBase.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domobject.js.ContainerDOMObject.__name__ = ["org","silex","runtime","domobject","js","ContainerDOMObject"];
org.silex.runtime.domobject.js.ContainerDOMObject.__super__ = org.silex.runtime.domobject.base.ContainerDOMObjectBase;
for(var k in org.silex.runtime.domobject.base.ContainerDOMObjectBase.prototype ) org.silex.runtime.domobject.js.ContainerDOMObject.prototype[k] = org.silex.runtime.domobject.base.ContainerDOMObjectBase.prototype[k];
org.silex.runtime.domobject.js.ContainerDOMObject.prototype.setSemantic = function(semantic) {
	org.silex.runtime.domobject.base.ContainerDOMObjectBase.prototype.setSemantic.call(this,semantic);
	var currentNativeDOMContent = this._referenceToNativeDOM.innerHTML;
	var currentNativeDOMAttributes = this._referenceToNativeDOM.attributes;
	var newReferenceToNativeDOM = js.Lib.document.createElement(semantic);
	newReferenceToNativeDOM.innerHTML = currentNativeDOMContent;
	{
		var _g1 = 0, _g = currentNativeDOMAttributes.length;
		while(_g1 < _g) {
			var i = _g1++;
			newReferenceToNativeDOM.setAttribute(currentNativeDOMAttributes[i].nodeName,currentNativeDOMAttributes[i].nodeValue);
		}
	}
	this._referenceToNativeDOM.parentNode.replaceChild(newReferenceToNativeDOM,this._referenceToNativeDOM);
	this._referenceToNativeDOM = newReferenceToNativeDOM;
}
org.silex.runtime.domobject.js.ContainerDOMObject.prototype.__class__ = org.silex.runtime.domobject.js.ContainerDOMObject;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
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
	Xml.Element = "element";
	Xml.PCData = "pcdata";
	Xml.CData = "cdata";
	Xml.Comment = "comment";
	Xml.DocType = "doctype";
	Xml.Prolog = "prolog";
	Xml.Document = "document";
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
org.silex.core.config.Config.configData = { publicationId : "manager", scaleMode : org.silex.core.config.ScaleModeValue.noScale, runtime : org.silex.core.config.RuntimeValue.as3};
org.silex.runtime.ressource.RessourceLoaderManager._isLoading = false;
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
haxe.Timer.arr = new Array();
org.silex.core.XmlUtils.INDENT_STRING = "\t";
org.silex.runtime.domobject.js.GraphicDOMObject.CAPS_STYLE_VALUE_NONE = "butt";
org.silex.runtime.domobject.js.GraphicDOMObject.CAPS_STYLE_VALUE_ROUND = "round";
org.silex.runtime.domobject.js.GraphicDOMObject.CAPS_STYLE_VALUE_SQUARE = "square";
org.silex.runtime.domobject.js.GraphicDOMObject.JOINT_STYLE_VALUE_ROUND = "round";
org.silex.runtime.domobject.js.GraphicDOMObject.JOINT_STYLE_VALUE_MITER = "miter";
org.silex.runtime.domobject.js.GraphicDOMObject.JOINT_STYLE_VALUE_BEVEL = "bevel";
org.silex.runtime.domobject.js.GraphicDOMObject.CANVAS_PATTERN_REPEAT = "repeat";
org.silex.runtime.domobject.js.GraphicDOMObject.CANVAS_PATTERN_NO_REPEAT = "no-repeat";
js.Lib.onerror = null;
SilexFramework.main()