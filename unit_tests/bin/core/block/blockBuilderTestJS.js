$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof org=='undefined') org = {}
if(!org.silex) org.silex = {}
if(!org.silex.runtime) org.silex.runtime = {}
if(!org.silex.runtime.domobject) org.silex.runtime.domobject = {}
if(!org.silex.runtime.domobject.base) org.silex.runtime.domobject.base = {}
org.silex.runtime.domobject.base.DOMObjectBase = function(referenceToNativeDOMObject) {
	if( referenceToNativeDOMObject === $_ ) return;
	this._referenceToNativeDOM = referenceToNativeDOMObject;
	this._children = new Array();
	this._matrix = new org.silex.runtime.domobject.Matrix();
	this.setNativeListeners();
}
org.silex.runtime.domobject.base.DOMObjectBase.__name__ = ["org","silex","runtime","domobject","base","DOMObjectBase"];
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
	var $e = (transformationOrigin);
	switch( $e[1] ) {
	case 1:
		var point = $e[2];
		transformationOriginPoint = point;
		break;
	case 0:
		var transformationOriginY = $e[3], transformationOriginX = $e[2];
		switch( (transformationOriginX)[1] ) {
		case 0:
			transformationOriginPoint.x = 0;
			break;
		case 1:
			transformationOriginPoint.x = this.getWidth() / 2;
			break;
		case 2:
			transformationOriginPoint.x = this.getWidth();
			break;
		}
		switch( (transformationOriginY)[1] ) {
		case 0:
			transformationOriginPoint.y = 0;
			break;
		case 1:
			transformationOriginPoint.y = this.getHeight() / 2;
			break;
		case 2:
			transformationOriginPoint.y = this.getHeight();
			break;
		}
		break;
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
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.unsetNativeListeners = function() {
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onNativePress = function(event) {
	if(this.onPress != null) this.onPress();
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onNativeDoubleClick = function(event) {
	if(this.onDoubleClick != null) this.onDoubleClick();
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onNativeRelease = function(event) {
	if(this.onRelease != null) this.onRelease();
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onNativeRollOver = function(event) {
	if(this.onRollOver != null) this.onRollOver();
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onNativeRollOut = function(event) {
	if(this.onRollOut != null) this.onRollOut();
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.onNativeMouseMove = function(event) {
	if(this.onMouseMove != null) this.onMouseMove();
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setX = function(value) {
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getX = function() {
	return 0;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setY = function(value) {
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getY = function() {
	return 0;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setWidth = function(value) {
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getWidth = function() {
	return 0;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setHeight = function(value) {
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getHeight = function() {
	return 0;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setRotation = function(value) {
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getRotation = function() {
	return 0;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.setZOrder = function(value) {
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.getZOrder = function() {
	return 0;
}
org.silex.runtime.domobject.base.DOMObjectBase.prototype.__class__ = org.silex.runtime.domobject.base.DOMObjectBase;
if(!org.silex.runtime.domobject.js) org.silex.runtime.domobject.js = {}
org.silex.runtime.domobject.js.DOMObject = function(referenceToNativeDOM) {
	if( referenceToNativeDOM === $_ ) return;
	org.silex.runtime.domobject.base.DOMObjectBase.call(this,referenceToNativeDOM);
	referenceToNativeDOM.style.position = "absolute";
}
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
	} else if(this._referenceToNativeDOM.style.WebkitTransform != null) {
		this._referenceToNativeDOM.style.WebkitTransform = cssMatrixProperty;
		this._referenceToNativeDOM.style.WebkitTransformOrigin = "0 0";
	} else if(this._referenceToNativeDOM.style.OTransform != null) {
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
	} else if(this._referenceToNativeDOM.style.WebkitTransform != null) {
		this._referenceToNativeDOM.style.WebkitTransform = rotationValue;
		this._referenceToNativeDOM.style.WebkitTransformOrigin = "0 0";
	} else if(this._referenceToNativeDOM.style.OTransform != null) {
		this._referenceToNativeDOM.style.OTransform = rotationValue;
		this._referenceToNativeDOM.style.OTransform = "0 0";
	}
}
org.silex.runtime.domobject.js.DOMObject.prototype.getRotation = function() {
	var nativeRotation = "";
	if(this._referenceToNativeDOM.style.MozTransform != null) nativeRotation = this._referenceToNativeDOM.style.MozTransform; else if(this._referenceToNativeDOM.style.WebkitTransform != null) nativeRotation = this._referenceToNativeDOM.style.WebkitTransform; else if(this._referenceToNativeDOM.style.OTransform != null) nativeRotation = this._referenceToNativeDOM.style.OTransform;
	nativeRotation = StringTools.replace(nativeRotation,"rotate(","");
	nativeRotation = StringTools.replace(nativeRotation,"deg)","");
	return Std.parseInt(nativeRotation);
}
org.silex.runtime.domobject.js.DOMObject.prototype.setZOrder = function(value) {
	if(value > this._parent.getChildren().length - 1) value = this._parent.getChildren().length - 1;
	var nativeParent = this._referenceToNativeDOM.parentNode;
	var numChildren = nativeParent.childNodes.length;
	var oldIndex = this.getZOrder();
	var newIndex = value;
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
	this._referenceToNativeDOM.style.zIndex = value;
}
org.silex.runtime.domobject.js.DOMObject.prototype.getZOrder = function() {
	return Std.parseInt(this._referenceToNativeDOM.style.zIndex);
}
org.silex.runtime.domobject.js.DOMObject.prototype.__class__ = org.silex.runtime.domobject.js.DOMObject;
org.silex.runtime.domobject.base.TextDOMObjectBase = function(referenceToNativeDOMObject) {
	if( referenceToNativeDOMObject === $_ ) return;
	org.silex.runtime.domobject.js.DOMObject.call(this,referenceToNativeDOMObject);
}
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
if(typeof utest=='undefined') utest = {}
if(!utest.ui) utest.ui = {}
if(!utest.ui.common) utest.ui.common = {}
utest.ui.common.IReport = function() { }
utest.ui.common.IReport.__name__ = ["utest","ui","common","IReport"];
utest.ui.common.IReport.prototype.displaySuccessResults = null;
utest.ui.common.IReport.prototype.displayHeader = null;
utest.ui.common.IReport.prototype.setHandler = null;
utest.ui.common.IReport.prototype.__class__ = utest.ui.common.IReport;
if(typeof haxe=='undefined') haxe = {}
haxe.Http = function(url) {
	if( url === $_ ) return;
	this.url = url;
	this.headers = new Hash();
	this.params = new Hash();
	this.async = true;
}
haxe.Http.__name__ = ["haxe","Http"];
haxe.Http.requestUrl = function(url) {
	var h = new haxe.Http(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		r = d;
	};
	h.onError = function(e) {
		throw e;
	};
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
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(s == undefined) s = null;
		if(s != null) me.onStatus(s);
		if(s != null && s >= 200 && s < 400) me.onData(r.responseText); else switch(s) {
		case null: case undefined:
			me.onError("Failed to connect or resolve host");
			break;
		case 12029:
			me.onError("Failed to connect to host");
			break;
		case 12007:
			me.onError("Unknown host");
			break;
		default:
			me.onError("Http Error #" + r.status);
		}
	};
	if(this.async) r.onreadystatechange = onreadystatechange;
	var uri = this.postData;
	if(uri != null) post = true; else {
		var $it0 = this.params.keys();
		while( $it0.hasNext() ) {
			var p = $it0.next();
			if(uri == null) uri = ""; else uri += "&";
			uri += StringTools.urlDecode(p) + "=" + StringTools.urlEncode(this.params.get(p));
		}
	}
	try {
		if(post) r.open("POST",this.url,this.async); else if(uri != null) {
			var question = this.url.split("?").length <= 1;
			r.open("GET",this.url + (question?"?":"&") + uri,this.async);
			uri = null;
		} else r.open("GET",this.url,this.async);
	} catch( e ) {
		this.onError(e.toString());
		return;
	}
	if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var $it1 = this.headers.keys();
	while( $it1.hasNext() ) {
		var h = $it1.next();
		r.setRequestHeader(h,this.headers.get(h));
	}
	r.send(uri);
	if(!this.async) onreadystatechange();
}
haxe.Http.prototype.onData = function(data) {
}
haxe.Http.prototype.onError = function(msg) {
}
haxe.Http.prototype.onStatus = function(status) {
}
haxe.Http.prototype.__class__ = haxe.Http;
if(!org.silex.core) org.silex.core = {}
if(!org.silex.core.block) org.silex.core.block = {}
org.silex.core.block.Block = function(fileUrl) {
	if( fileUrl === $_ ) return;
	this._fileUrl = fileUrl;
	this._state = org.silex.core.block.BlockStateValue.closed;
	this._children = new Array();
}
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
	if(this._domObject != null) this._parent.removeFromDisplayList(this._domObject);
	this._nativeClassInstance = null;
	var _g1 = 0, _g = this._children.length;
	while(_g1 < _g) {
		var i = _g1++;
		this._children[i].close();
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
	if(this._domObject != null) this._domObject.addChild(blockDOMObject); else this._parent.addToDisplayList(blockDOMObject);
}
org.silex.core.block.Block.prototype.removeFromDisplayList = function(blockDOMObject) {
	if(this._domObject != null) this._domObject.removeChild(blockDOMObject); else this._parent.removeFromDisplayList(blockDOMObject);
}
org.silex.core.block.Block.prototype.doOpen = function(blockBuilder) {
	if(this._blockData.properties == null) blockBuilder.loadBlockData($closure(this,"onBlockDataLoaded"),$closure(this,"onBlockDataLoadError")); else if(this._domObject == null && this.getSkinUrl() != null) blockBuilder.loadDOMObject(this.getSkinUrl(),$closure(this,"onDOMObjectLoaded"),$closure(this,"onDOMObjectLoadError")); else if(this._nativeClassInstance == null && this._blockData.className != null) {
		blockBuilder.createNativeClassInstance();
		this.doOpen(blockBuilder);
	} else {
		blockBuilder.setBlockAttributes();
		if(this._parent != null) {
			if(this._domObject != null) this._parent.addToDisplayList(this._domObject);
		}
		this._openChildrenIndex = 0;
		this.openChildren();
	}
}
org.silex.core.block.Block.prototype.openChildren = function() {
	if(this._children.length > 0) {
		if(this._children[this._openChildrenIndex].getIsAutoOpen() == true) this._children[this._openChildrenIndex].open($closure(this,"onChildOpened"),$closure(this,"onChildOpenError")); else this.onChildOpened(this._children[this._openChildrenIndex]);
	} else this.onAllChildOpened();
}
org.silex.core.block.Block.prototype.onChildOpened = function(openedChild) {
	this._openChildrenIndex++;
	if(this._openChildrenIndex < this._children.length) this.openChildren(); else this.onAllChildOpened();
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
	switch( (org.silex.core.config.Config.getConfigData().runtime)[1] ) {
	case 1:
		skinUrl = this._blockData.jsSkinURL;
		break;
	case 0:
		skinUrl = this._blockData.as3SkinURL;
		break;
	case 2:
		skinUrl = this._blockData.phpSkinURL;
		break;
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
org.silex.core.block.Block.prototype.setIsTransversal = function(value) {
	this._isTransversal = value;
}
org.silex.core.block.Block.prototype.getIsTransversal = function() {
	return this._isTransversal;
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
List = function(p) {
	if( p === $_ ) return;
	this.length = 0;
}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x; else this.q[1] = x;
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
			if(prev == null) this.h = l[1]; else prev[1] = l[1];
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
		if(first) first = false; else s.b[s.b.length] = ", ";
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
		if(first) first = false; else s.b[s.b.length] = sep;
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
org.silex.runtime.domobject.Matrix = function(matrixData) {
	if( matrixData === $_ ) return;
	this.setMatrixData(matrixData);
}
org.silex.runtime.domobject.Matrix.__name__ = ["org","silex","runtime","domobject","Matrix"];
org.silex.runtime.domobject.Matrix.prototype._matrixData = null;
org.silex.runtime.domobject.Matrix.prototype.identity = function() {
	this._matrixData = { a : 1.0, b : 0.0, c : 0.0, d : 1.0, e : 0.0, f : 0.0};
}
org.silex.runtime.domobject.Matrix.prototype.setMatrixData = function(matrixData) {
	this._matrixData = matrixData;
	if(this._matrixData == null) this.identity();
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
	if(rotationInDegree > 90 && sign > 0) rotation = (360 - rotationInDegree) / 180 * Math.PI; else if(rotationInDegree < 90 && sign < 0) rotation = (360 - rotationInDegree) / 180 * Math.PI; else rotation = radian;
	return Math.round(rotation / Math.PI * 180);
}
org.silex.runtime.domobject.Matrix.prototype.getScaleX = function() {
	var scaleSign = 0;
	if(this._matrixData.a > 0) scaleSign = 1; else scaleSign = -1;
	return scaleSign * Math.sqrt(this._matrixData.a * this._matrixData.a + this._matrixData.c * this._matrixData.c);
}
org.silex.runtime.domobject.Matrix.prototype.getScaleY = function() {
	var scaleSign = 0;
	if(this._matrixData.d > 0) scaleSign = 1; else scaleSign = -1;
	return scaleSign * Math.sqrt(this._matrixData.b * this._matrixData.b + this._matrixData.d * this._matrixData.d);
}
org.silex.runtime.domobject.Matrix.prototype.getTranslationX = function() {
	return this._matrixData.e;
}
org.silex.runtime.domobject.Matrix.prototype.getTranslationY = function() {
	return this._matrixData.f;
}
org.silex.runtime.domobject.Matrix.prototype.__class__ = org.silex.runtime.domobject.Matrix;
utest.Runner = function(p) {
	if( p === $_ ) return;
	this.fixtures = new Array();
	this.onProgress = new utest.Dispatcher();
	this.onStart = new utest.Dispatcher();
	this.onComplete = new utest.Dispatcher();
	this.length = 0;
}
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
		var _g = 0;
		while(_g < fields.length) {
			var field = fields[_g];
			++_g;
			if(!StringTools.startsWith(field,prefix)) continue;
			if(!this.isMethod(test,field)) continue;
			this.addFixture(new utest.TestFixture(test,field,setup,teardown));
		}
	} else {
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
	} catch( e ) {
		return false;
	}
}
utest.Runner.prototype.pos = null;
utest.Runner.prototype.run = function() {
	this.pos = 0;
	this.onStart.dispatch(this);
	this.runNext();
}
utest.Runner.prototype.runNext = function() {
	if(this.fixtures.length > this.pos) this.runFixture(this.fixtures[this.pos++]); else this.onComplete.dispatch(this);
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
org.silex.core.block.BlockBuilder = function(block) {
	if( block === $_ ) return;
	this._block = block;
}
org.silex.core.block.BlockBuilder.__name__ = ["org","silex","core","block","BlockBuilder"];
org.silex.core.block.BlockBuilder.deserializeBlockData = function(block,serializedBlockData) {
	var XMLBlockData = Xml.parse(serializedBlockData).firstElement();
	var cleanXMLBlockData = org.silex.core.XmlUtils.cleanUp(XMLBlockData);
	org.silex.core.block.BlockBuilder.doCreateBlock(cleanXMLBlockData,block);
}
org.silex.core.block.BlockBuilder.doCreateBlock = function(xml,parentBlock) {
	var parentBlockData = org.silex.core.block.BlockBuilder.createBlockData(xml);
	parentBlock.setBlockData(parentBlockData);
	var $it0 = xml.elementsNamed("children");
	while( $it0.hasNext() ) {
		var children = $it0.next();
		var $it1 = children.elements();
		while( $it1.hasNext() ) {
			var child = $it1.next();
			var block = new org.silex.core.block.Block(child.get("fileUrl"));
			block.setIsAutoOpen(child.get("isAutoOpen") == "true");
			block.setIsTransversal(child.get("isTransversal") == "true");
			parentBlock.addChild(block);
			org.silex.core.block.BlockBuilder.doCreateBlock(child,block);
		}
	}
}
org.silex.core.block.BlockBuilder.createBlockData = function(xml) {
	var blockData = { className : null, descriptorUID : null, as3SkinURL : null, jsSkinURL : null, phpSkinURL : null, properties : new Hash(), metaData : new Hash()};
	var blockXml = xml;
	if(blockXml.exists("nameSpace")) blockData.className = blockXml.get("nameSpace") + "." + blockXml.getNodeName(); else blockData.className = "org.silex.blocks." + blockXml.getNodeName();
	var blockDataXML = Xml.parse("");
	var $it0 = blockXml.iterator();
	while( $it0.hasNext() ) {
		var children = $it0.next();
		if(children.getNodeName() == "blockData") blockDataXML = children;
	}
	var $it1 = blockDataXML.iterator();
	while( $it1.hasNext() ) {
		var childXml = $it1.next();
		switch(childXml.getNodeName()) {
		case "as3SkinURL":
			blockData.as3SkinURL = childXml.firstChild().firstChild().toString();
			break;
		case "jsSkinURL":
			blockData.jsSkinURL = childXml.firstChild().firstChild().toString();
			break;
		case "phpSkinURL":
			blockData.phpSkinURL = childXml.firstChild().firstChild().toString();
			break;
		case "descriptorUID":
			blockData.descriptorUID = childXml.firstChild().toString();
			break;
		case "properties":
			var $it2 = childXml.elements();
			while( $it2.hasNext() ) {
				var property = $it2.next();
				switch(property.get("type")) {
				case "Integer":
					blockData.properties.set(property.getNodeName(),Std.parseInt(property.firstChild().toString()));
					break;
				case "Float":
					blockData.properties.set(property.getNodeName(),Std.parseFloat(property.firstChild().toString()));
					break;
				case "Boolean":
					blockData.properties.set(property.getNodeName(),property.firstChild().toString() == "true");
					break;
				case "Array":
					var items = new Array();
					var $it3 = property.elements();
					while( $it3.hasNext() ) {
						var item = $it3.next();
						items.push(item.firstChild().getNodeValue());
					}
					blockData.properties.set(property.getNodeName(),items);
					break;
				default:
					blockData.properties.set(property.getNodeName(),property.firstChild().toString());
				}
			}
			break;
		case "metaData":
			var $it4 = childXml.elements();
			while( $it4.hasNext() ) {
				var metaData = $it4.next();
				blockData.metaData.set(metaData.getNodeName(),Std.parseInt(metaData.firstChild().toString()));
			}
			break;
		}
	}
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
		var $it0 = this._block.getBlockData().properties.keys();
		while( $it0.hasNext() ) {
			var propertyName = $it0.next();
			this._block.getNativeClassInstance().setField(propertyName,this._block.getBlockData().properties.get(propertyName));
		}
	} else if(this._block.getDOMObject() != null) {
		var $it1 = this._block.getBlockData().properties.keys();
		while( $it1.hasNext() ) {
			var propertyName = $it1.next();
			this._block.getDOMObject().setAttribute(propertyName,this._block.getBlockData().properties.get(propertyName));
		}
	}
}
org.silex.core.block.BlockBuilder.prototype.__class__ = org.silex.core.block.BlockBuilder;
utest.Assertation = { __ename__ : ["utest","Assertation"], __constructs__ : ["Success","Failure","Error","SetupError","TeardownError","TimeoutError","AsyncError","Warning"] }
utest.Assertation.Success = function(pos) { var $x = ["Success",0,pos]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.Failure = function(msg,pos) { var $x = ["Failure",1,msg,pos]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.Error = function(e,stack) { var $x = ["Error",2,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.SetupError = function(e,stack) { var $x = ["SetupError",3,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.TeardownError = function(e,stack) { var $x = ["TeardownError",4,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.TimeoutError = function(missedAsyncs,stack) { var $x = ["TimeoutError",5,missedAsyncs,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.AsyncError = function(e,stack) { var $x = ["AsyncError",6,e,stack]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
utest.Assertation.Warning = function(msg) { var $x = ["Warning",7,msg]; $x.__enum__ = utest.Assertation; $x.toString = $estr; return $x; }
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
org.silex.core.config.Config = function(p) {
}
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
utest.TestResult = function(p) {
}
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
		var $it0 = this.assertations.iterator();
		while( $it0.hasNext() ) {
			var l = $it0.next();
			var $e = (l);
			switch( $e[1] ) {
			case 0:
				var pos = $e[2];
				throw "__break__";
				break;
			default:
				return false;
			}
		}
	} catch( e ) { if( e != "__break__" ) throw e; }
	return true;
}
utest.TestResult.prototype.__class__ = utest.TestResult;
org.silex.runtime.domobject.base.ImageDOMObjectBase = function(referenceToNativeDOMObject) {
	if( referenceToNativeDOMObject === $_ ) return;
	org.silex.runtime.domobject.js.DOMObject.call(this,referenceToNativeDOMObject);
}
org.silex.runtime.domobject.base.ImageDOMObjectBase.__name__ = ["org","silex","runtime","domobject","base","ImageDOMObjectBase"];
org.silex.runtime.domobject.base.ImageDOMObjectBase.__super__ = org.silex.runtime.domobject.js.DOMObject;
for(var k in org.silex.runtime.domobject.js.DOMObject.prototype ) org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype[k] = org.silex.runtime.domobject.js.DOMObject.prototype[k];
org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype.addChild = function(domObject) {
}
org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype.removeChild = function(domObject) {
}
org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype.__class__ = org.silex.runtime.domobject.base.ImageDOMObjectBase;
org.silex.runtime.domobject.js.ImageDOMObject = function(referenceToNativeDOMObject) {
	if( referenceToNativeDOMObject === $_ ) return;
	org.silex.runtime.domobject.base.ImageDOMObjectBase.call(this,referenceToNativeDOMObject);
}
org.silex.runtime.domobject.js.ImageDOMObject.__name__ = ["org","silex","runtime","domobject","js","ImageDOMObject"];
org.silex.runtime.domobject.js.ImageDOMObject.__super__ = org.silex.runtime.domobject.base.ImageDOMObjectBase;
for(var k in org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype ) org.silex.runtime.domobject.js.ImageDOMObject.prototype[k] = org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype[k];
org.silex.runtime.domobject.js.ImageDOMObject.prototype.__class__ = org.silex.runtime.domobject.js.ImageDOMObject;
utest.ui.common.FixtureResult = function(methodName) {
	if( methodName === $_ ) return;
	this.methodName = methodName;
	this.list = new List();
	this.hasTestError = false;
	this.hasSetupError = false;
	this.hasTeardownError = false;
	this.hasTimeoutError = false;
	this.hasAsyncError = false;
	this.stats = new utest.ui.common.ResultStats();
}
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
	switch( (assertation)[1] ) {
	case 0:
		this.stats.addSuccesses(1);
		break;
	case 1:
		this.stats.addFailures(1);
		break;
	case 2:
		this.stats.addErrors(1);
		break;
	case 3:
		this.stats.addErrors(1);
		this.hasSetupError = true;
		break;
	case 4:
		this.stats.addErrors(1);
		this.hasTeardownError = true;
		break;
	case 5:
		this.stats.addErrors(1);
		this.hasTimeoutError = true;
		break;
	case 6:
		this.stats.addErrors(1);
		this.hasAsyncError = true;
		break;
	case 7:
		this.stats.addWarnings(1);
		break;
	}
}
utest.ui.common.FixtureResult.prototype.__class__ = utest.ui.common.FixtureResult;
if(!org.silex.runtime.ressource) org.silex.runtime.ressource = {}
org.silex.runtime.ressource.RessourceLoader = function(p) {
}
org.silex.runtime.ressource.RessourceLoader.__name__ = ["org","silex","runtime","ressource","RessourceLoader"];
org.silex.runtime.ressource.RessourceLoader.prototype._onLoadCompleteCallback = null;
org.silex.runtime.ressource.RessourceLoader.prototype._onLoadErrorCallback = null;
org.silex.runtime.ressource.RessourceLoader.prototype.load = function(url,onLoadComplete,onLoadError,allowCache) {
	this._onLoadCompleteCallback = onLoadComplete;
	this._onLoadErrorCallback = onLoadError;
	if(allowCache == false) url = this.disableUrlCaching(url);
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
	if(url.indexOf("?") == -1) getId = "?"; else getId = "&";
	url += getId + "rand=" + Math.round(Math.random() * 10000);
	return url;
}
org.silex.runtime.ressource.RessourceLoader.prototype.__class__ = org.silex.runtime.ressource.RessourceLoader;
if(!org.silex.runtime.ressource.js) org.silex.runtime.ressource.js = {}
org.silex.runtime.ressource.js.StringLoader = function(p) {
	if( p === $_ ) return;
	org.silex.runtime.ressource.RessourceLoader.call(this);
}
org.silex.runtime.ressource.js.StringLoader.__name__ = ["org","silex","runtime","ressource","js","StringLoader"];
org.silex.runtime.ressource.js.StringLoader.__super__ = org.silex.runtime.ressource.RessourceLoader;
for(var k in org.silex.runtime.ressource.RessourceLoader.prototype ) org.silex.runtime.ressource.js.StringLoader.prototype[k] = org.silex.runtime.ressource.RessourceLoader.prototype[k];
org.silex.runtime.ressource.js.StringLoader.prototype.__class__ = org.silex.runtime.ressource.js.StringLoader;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	var $it0 = arr.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		if(t == field) return true;
	}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
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
		for(var i in o) if( o.hasOwnProperty(i) ) a.push(i);
	} else {
		var t;
		try {
			t = o.__proto__;
		} catch( e ) {
			t = null;
		}
		if(t != null) o.__proto__ = null;
		for(var i in o) if( i != "__proto__" ) a.push(i);
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
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		var _g1 = 0, _g = arguments.length;
		while(_g1 < _g) {
			var i = _g1++;
			a.push(arguments[i]);
		}
		return f(a);
	};
}
Reflect.prototype.__class__ = Reflect;
utest.ui.common.ResultStats = function(p) {
	if( p === $_ ) return;
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
}
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
utest.Assert = function() { }
utest.Assert.__name__ = ["utest","Assert"];
utest.Assert.results = null;
utest.Assert.isTrue = function(cond,msg,pos) {
	if(utest.Assert.results == null) throw "Assert.results is not currently bound to any assert context";
	if(null == msg) msg = "expected true";
	if(cond) utest.Assert.results.add(utest.Assertation.Success(pos)); else utest.Assert.results.add(utest.Assertation.Failure(msg,pos));
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
	if(Math.isNaN(expected)) return Math.isNaN(value); else if(Math.isNaN(value)) return false; else if(!Math.isFinite(expected) && !Math.isFinite(value)) return expected > 0 == value > 0;
	if(null == approx) approx = 1e-5;
	return Math.abs(value - expected) < approx;
}
utest.Assert.getTypeName = function(v) {
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
		return "[null]";
	case 1:
		return "Int";
	case 2:
		return "Float";
	case 3:
		return "Bool";
	case 5:
		return "function";
	case 6:
		var c = $e[2];
		return Type.getClassName(c);
	case 7:
		var e = $e[2];
		return Type.getEnumName(e);
	case 4:
		return "Object";
	case 8:
		return "Unknown";
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
	var $e = (Type["typeof"](expected));
	switch( $e[1] ) {
	case 2:
		return utest.Assert._floatEquals(expected,value);
	case 0:
	case 1:
	case 3:
		if(expected != value) {
			status.error = "expected " + utest.Assert.q(expected) + " but it is " + utest.Assert.q(value) + (status.path == ""?"":" for field " + status.path);
			return false;
		}
		return true;
	case 5:
		if(!Reflect.compareMethods(expected,value)) {
			status.error = "expected same function reference" + (status.path == ""?"":" for field " + status.path);
			return false;
		}
		return true;
	case 6:
		var c = $e[2];
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
				var _g1 = 0, _g = ebytes.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(ebytes.b[i] != vbytes.b[i]) {
						status.error = "expected byte " + ebytes.b[i] + " but wss " + ebytes.b[i] + (status.path == ""?"":" for field " + status.path);
						return false;
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
				var _g1 = 0, _g = evalues.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"iterable[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) return false;
				}
			}
			return true;
		}
		if(status.recursive || status.path == "") {
			var fields = Type.getInstanceFields(Type.getClass(expected));
			var path = status.path;
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
		return true;
	case 7:
		var e = $e[2];
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
		return true;
	case 4:
		if(status.recursive || status.path == "") {
			var tfields = Reflect.fields(value);
			var fields = Reflect.fields(expected);
			var path = status.path;
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
				var _g1 = 0, _g = evalues.length;
				while(_g1 < _g) {
					var i = _g1++;
					status.path = path == ""?"iterable[" + i + "]":path + "[" + i + "]";
					if(!utest.Assert.sameAs(evalues[i],vvalues[i],status)) return false;
				}
			}
			return true;
		}
		return true;
	case 8:
		return (function($this) {
			var $r;
			throw "Unable to compare two unknown types";
			return $r;
		}(this));
	}
	return (function($this) {
		var $r;
		throw "Unable to compare values: " + utest.Assert.q(expected) + " and " + utest.Assert.q(value);
		return $r;
	}(this));
}
utest.Assert.q = function(v) {
	if(Std["is"](v,String)) return "\"" + StringTools.replace(v,"\"","\\\"") + "\""; else return Std.string(v);
}
utest.Assert.same = function(expected,value,recursive,msg,pos) {
	if(null == recursive) recursive = true;
	var status = { recursive : recursive, path : "", error : null};
	if(utest.Assert.sameAs(expected,value,status)) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?status.error:msg,pos);
}
utest.Assert.raises = function(method,type,msgNotThrown,msgWrongType,pos) {
	if(type == null) type = String;
	try {
		method();
		var name = Type.getClassName(type);
		if(name == null) name = "" + type;
		if(null == msgNotThrown) msgNotThrown = "exception of type " + name + " not raised";
		utest.Assert.fail(msgNotThrown,pos);
	} catch( ex ) {
		var name = Type.getClassName(type);
		if(name == null) name = "" + type;
		if(null == msgWrongType) msgWrongType = "expected throw of type " + name + " but was " + ex;
		utest.Assert.isTrue(Std["is"](ex,type),msgWrongType,pos);
	}
}
utest.Assert.allows = function(possibilities,value,msg,pos) {
	if(Lambda.has(possibilities,value)) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?"value " + utest.Assert.q(value) + " not found in the expected possibilities " + possibilities:msg,pos);
}
utest.Assert.contains = function(match,values,msg,pos) {
	if(Lambda.has(values,match)) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?"values " + utest.Assert.q(values) + " do not contain " + match:msg,pos);
}
utest.Assert.notContains = function(match,values,msg,pos) {
	if(!Lambda.has(values,match)) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?"values " + utest.Assert.q(values) + " do contain " + match:msg,pos);
}
utest.Assert.stringContains = function(match,value,msg,pos) {
	if(value != null && value.indexOf(match) >= 0) utest.Assert.isTrue(true,msg,pos); else utest.Assert.fail(msg == null?"value " + utest.Assert.q(value) + " does not contain " + utest.Assert.q(match):msg,pos);
}
utest.Assert.stringSequence = function(sequence,value,msg,pos) {
	if(null == value) {
		utest.Assert.fail(msg == null?"null argument value":msg,pos);
		return;
	}
	var p = 0;
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
				} else msg += " begin";
			}
			utest.Assert.fail(msg,pos);
			return;
		}
		p = p2 + s.length;
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
	};
}
utest.Assert.createEvent = function(f,timeout) {
	return function(e) {
	};
}
utest.Assert.typeToString = function(t) {
	try {
		var _t = Type.getClass(t);
		if(_t != null) t = _t;
	} catch( e ) {
	}
	try {
		return Type.getClassName(t);
	} catch( e ) {
	}
	try {
		var _t = Type.getEnum(t);
		if(_t != null) t = _t;
	} catch( e ) {
	}
	try {
		return Type.getEnumName(t);
	} catch( e ) {
	}
	try {
		return Std.string(Type["typeof"](t));
	} catch( e ) {
	}
	try {
		return Std.string(t);
	} catch( e ) {
	}
	return "<unable to retrieve type name>";
}
utest.Assert.prototype.__class__ = utest.Assert;
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
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b[b.b.length] = "\nCalled from ";
		haxe.Stack.itemToString(b,s);
	}
	return b.b.join("");
}
haxe.Stack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b[b.b.length] = "a C function";
		break;
	case 1:
		var m = $e[2];
		b.b[b.b.length] = "module ";
		b.b[b.b.length] = m;
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b[b.b.length] = " (";
		}
		b.b[b.b.length] = file;
		b.b[b.b.length] = " line ";
		b.b[b.b.length] = line;
		if(s1 != null) b.b[b.b.length] = ")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b[b.b.length] = cname;
		b.b[b.b.length] = ".";
		b.b[b.b.length] = meth;
		break;
	case 4:
		var n = $e[2];
		b.b[b.b.length] = "local function #";
		b.b[b.b.length] = n;
		break;
	}
}
haxe.Stack.makeStack = function(s) {
	var a = (function($this) {
		var $r;
		try {
			$r = eval(s);
		} catch( e ) {
			$r = [];
		}
		return $r;
	}(this));
	var m = new Array();
	var _g1 = 0, _g = a.length - (s == "$s"?2:0);
	while(_g1 < _g) {
		var i = _g1++;
		var d = a[i].split("::");
		m.unshift(haxe.StackItem.Method(d[0],d[1]));
	}
	return m;
}
haxe.Stack.prototype.__class__ = haxe.Stack;
IntIter = function(min,max) {
	if( min === $_ ) return;
	this.min = min;
	this.max = max;
}
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
org.silex.runtime.ressource.js.ImageLoader = function(p) {
	if( p === $_ ) return;
	org.silex.runtime.ressource.RessourceLoader.call(this);
}
org.silex.runtime.ressource.js.ImageLoader.__name__ = ["org","silex","runtime","ressource","js","ImageLoader"];
org.silex.runtime.ressource.js.ImageLoader.__super__ = org.silex.runtime.ressource.RessourceLoader;
for(var k in org.silex.runtime.ressource.RessourceLoader.prototype ) org.silex.runtime.ressource.js.ImageLoader.prototype[k] = org.silex.runtime.ressource.RessourceLoader.prototype[k];
org.silex.runtime.ressource.js.ImageLoader.prototype.doLoad = function(url) {
	var domObject = new org.silex.runtime.domobject.js.ImageDOMObject(js.Lib.document.createElement("img"));
	var onLoadCompleteDelegate = $closure(this,"onLoadComplete");
	domObject.getReferenceToNativeDOM().onload = function() {
		onLoadCompleteDelegate(domObject);
	};
	domObject.getReferenceToNativeDOM().setAttribute("src",url);
}
org.silex.runtime.ressource.js.ImageLoader.prototype.__class__ = org.silex.runtime.ressource.js.ImageLoader;
org.silex.runtime.ressource.RessourceLoaderManager = function(p) {
}
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
	if(org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray == null) org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray = new Array();
	org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray.push(ressourceData);
	if(org.silex.runtime.ressource.RessourceLoaderManager._isLoading == false) org.silex.runtime.ressource.RessourceLoaderManager.loadNextRessource();
}
org.silex.runtime.ressource.RessourceLoaderManager.loadNextRessource = function() {
	if(org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray.length == 0) org.silex.runtime.ressource.RessourceLoaderManager._isLoading = false; else {
		org.silex.runtime.ressource.RessourceLoaderManager._isLoading = true;
		var ressourceDataToLoad = org.silex.runtime.ressource.RessourceLoaderManager._ressourceDataArray[0];
		var ressourceLoader;
		switch( (ressourceDataToLoad.loadingType)[1] ) {
		case 0:
			ressourceLoader = new org.silex.runtime.ressource.js.StringLoader();
			break;
		case 1:
			ressourceLoader = new org.silex.runtime.ressource.js.ImageLoader();
			break;
		case 2:
			ressourceLoader = new org.silex.runtime.ressource.js.TextLoader();
			break;
		case 3:
			ressourceLoader = new org.silex.runtime.ressource.js.AnimationLoader();
			break;
		case 4:
			ressourceLoader = new org.silex.runtime.ressource.js.ContainerLoader();
			break;
		case 5:
			ressourceLoader = new org.silex.runtime.ressource.js.LibraryLoader();
			break;
		}
		ressourceLoader.load(ressourceDataToLoad.url,org.silex.runtime.ressource.RessourceLoaderManager.onLoadComplete,org.silex.runtime.ressource.RessourceLoaderManager.onLoadError,ressourceDataToLoad.allowCache);
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
	} catch( e ) {
		cl = null;
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	} catch( err ) {
		e = null;
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
	var c = e.__constructs__[index];
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
	var a = e.__constructs__;
	return a.copy();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
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
	if(d == null) alert("No haxe:trace element defined\n" + msg); else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	};
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
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
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
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
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
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
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
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
EReg = function(r,opt) {
	if( r === $_ ) return;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}
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
Xml = function(p) {
}
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
					case 0:
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
						break;
					case 1:
						var x = Xml.createPCData(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
						break;
					case 2:
						if(current._children != null && current._children.length == 0) {
							var e = Xml.createPCData("");
							current.addChild(e);
						}
						if(r.matched(1) != current._nodeName || stack.isEmpty()) {
							i = nrules;
							throw "__break__";
						}
						current = stack.pop();
						str = r.matchedRight();
						break;
					case 3:
						str = r.matchedRight();
						if(!Xml.ecdata_end.match(str)) throw "End of CDATA section not found";
						var x = Xml.createCData(Xml.ecdata_end.matchedLeft());
						current.addChild(x);
						str = Xml.ecdata_end.matchedRight();
						break;
					case 4:
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
								case "[":
									count++;
									break;
								case "]":
									count--;
									if(count < 0) throw "Invalid ] found in DOCTYPE declaration";
									break;
								default:
									if(count == 0) throw "__break__";
								}
							}
						} catch( e ) { if( e != "__break__" ) throw e; }
						var x = Xml.createDocType(old.substr(10,pos - 11));
						current.addChild(x);
						break;
					case 5:
						if(!Xml.ecomment_end.match(str)) throw "Unclosed Comment";
						var p = Xml.ecomment_end.matchedPos();
						var x = Xml.createComment(str.substr(4,p.pos + p.len - 7));
						current.addChild(x);
						str = Xml.ecomment_end.matchedRight();
						break;
					case 6:
						var prolog = r.matched(0);
						var x = Xml.createProlog(prolog.substr(2,prolog.length - 4));
						current.addChild(x);
						str = r.matchedRight();
						break;
					}
					throw "__break__";
				}
				i += 1;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		if(i == nrules) {
			if(str.length > 10) throw "Xml parse error : Unexpected " + str.substr(0,10) + "..."; else throw "Xml parse error : Unexpected " + str;
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
		var $it0 = this._attributes.keys();
		while( $it0.hasNext() ) {
			var k = $it0.next();
			s.b[s.b.length] = " ";
			s.b[s.b.length] = k;
			s.b[s.b.length] = "=\"";
			s.b[s.b.length] = this._attributes.get(k);
			s.b[s.b.length] = "\"";
		}
		if(this._children.length == 0) {
			s.b[s.b.length] = "/>";
			return s.b.join("");
		}
		s.b[s.b.length] = ">";
	}
	var $it1 = this.iterator();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		s.b[s.b.length] = x.toString();
	}
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "</";
		s.b[s.b.length] = this._nodeName;
		s.b[s.b.length] = ">";
	}
	return s.b.join("");
}
Xml.prototype.__class__ = Xml;
haxe.Timer = function(time_ms) {
	if( time_ms === $_ ) return;
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("haxe.Timer.arr[" + this.id + "].run();",time_ms);
}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
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
}
haxe.Timer.prototype.__class__ = haxe.Timer;
if(!org.silex.runtime.nativeClass) org.silex.runtime.nativeClass = {}
org.silex.runtime.nativeClass.NativeClass = function(p) {
}
org.silex.runtime.nativeClass.NativeClass.__name__ = ["org","silex","runtime","nativeClass","NativeClass"];
org.silex.runtime.nativeClass.NativeClass.getNativeInstanceByClassName = function(className) {
	return new org.silex.runtime.nativeClass.js.NativeInstance(className);
}
org.silex.runtime.nativeClass.NativeClass.createInstanceOf = function(classReference) {
	return org.silex.runtime.nativeClass.NativeClass.getNativeInstanceByClassName(Type.getClassName(classReference));
}
org.silex.runtime.nativeClass.NativeClass.prototype.__class__ = org.silex.runtime.nativeClass.NativeClass;
IntHash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
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
	for( x in this.h ) a.push(x);
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
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
IntHash.prototype.__class__ = IntHash;
utest.ui.common.PackageResult = function(packageName) {
	if( packageName === $_ ) return;
	this.packageName = packageName;
	this.classes = new Hash();
	this.packages = new Hash();
	this.stats = new utest.ui.common.ResultStats();
}
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
	var $it0 = this.classes.keys();
	while( $it0.hasNext() ) {
		var name = $it0.next();
		names.push(name);
	}
	if(errorsHavePriority) {
		var me = this;
		names.sort(function(a,b) {
			var $as = me.getClass(a).stats;
			var bs = me.getClass(b).stats;
			if($as.hasErrors) return !bs.hasErrors?-1:$as.errors == bs.errors?Reflect.compare(a,b):Reflect.compare($as.errors,bs.errors); else if(bs.hasErrors) return 1; else if($as.hasFailures) return !bs.hasFailures?-1:$as.failures == bs.failures?Reflect.compare(a,b):Reflect.compare($as.failures,bs.failures); else if(bs.hasFailures) return 1; else if($as.hasWarnings) return !bs.hasWarnings?-1:$as.warnings == bs.warnings?Reflect.compare(a,b):Reflect.compare($as.warnings,bs.warnings); else if(bs.hasWarnings) return 1; else return Reflect.compare(a,b);
		});
	} else names.sort(function(a,b) {
		return Reflect.compare(a,b);
	});
	return names;
}
utest.ui.common.PackageResult.prototype.packageNames = function(errorsHavePriority) {
	if(errorsHavePriority == null) errorsHavePriority = true;
	var names = [];
	if(this.packageName == null) names.push("");
	var $it0 = this.packages.keys();
	while( $it0.hasNext() ) {
		var name = $it0.next();
		names.push(name);
	}
	if(errorsHavePriority) {
		var me = this;
		names.sort(function(a,b) {
			var $as = me.getPackage(a).stats;
			var bs = me.getPackage(b).stats;
			if($as.hasErrors) return !bs.hasErrors?-1:$as.errors == bs.errors?Reflect.compare(a,b):Reflect.compare($as.errors,bs.errors); else if(bs.hasErrors) return 1; else if($as.hasFailures) return !bs.hasFailures?-1:$as.failures == bs.failures?Reflect.compare(a,b):Reflect.compare($as.failures,bs.failures); else if(bs.hasFailures) return 1; else if($as.hasWarnings) return !bs.hasWarnings?-1:$as.warnings == bs.warnings?Reflect.compare(a,b):Reflect.compare($as.warnings,bs.warnings); else if(bs.hasWarnings) return 1; else return Reflect.compare(a,b);
		});
	} else names.sort(function(a,b) {
		return Reflect.compare(a,b);
	});
	return names;
}
utest.ui.common.PackageResult.prototype.createFixture = function(method,assertations) {
	var f = new utest.ui.common.FixtureResult(method);
	var $it0 = assertations.iterator();
	while( $it0.hasNext() ) {
		var assertation = $it0.next();
		f.add(assertation);
	}
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
	} else {
		var parts = pack.split(".");
		var _g = 0;
		while(_g < parts.length) {
			var part = parts[_g];
			++_g;
			ref = this.getOrCreatePackage(part,true,ref);
		}
		return ref;
	}
}
utest.ui.common.PackageResult.prototype.__class__ = utest.ui.common.PackageResult;
utest.ui.common.ResultAggregator = function(runner,flattenPackage) {
	if( runner === $_ ) return;
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
}
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
	} else {
		var parts = pack.split(".");
		var _g = 0;
		while(_g < parts.length) {
			var part = parts[_g];
			++_g;
			ref = this.getOrCreatePackage(part,true,ref);
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
	var $it0 = result.assertations.iterator();
	while( $it0.hasNext() ) {
		var assertation = $it0.next();
		f.add(assertation);
	}
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
if(!utest.ui.text) utest.ui.text = {}
utest.ui.text.HtmlReport = function(runner,outputHandler,traceRedirected) {
	if( runner === $_ ) return;
	if(traceRedirected == null) traceRedirected = true;
	this.aggregator = new utest.ui.common.ResultAggregator(runner,true);
	runner.onStart.add($closure(this,"start"));
	this.aggregator.onComplete.add($closure(this,"complete"));
	if(null == outputHandler) this.setHandler($closure(this,"_handler")); else this.setHandler(outputHandler);
	if(traceRedirected) this.redirectTrace();
	this.displaySuccessResults = utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults;
	this.displayHeader = utest.ui.common.HeaderDisplayMode.AlwaysShowHeader;
}
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
	this.oldTrace = haxe.Log.trace;
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
	if(stats.hasErrors) return "error"; else if(stats.hasFailures) return "failure"; else if(stats.hasWarnings) return "warn"; else return "ok";
}
utest.ui.text.HtmlReport.prototype.resultNumbers = function(buf,stats) {
	var numbers = [];
	if(stats.assertations == 1) numbers.push("<strong>1</strong> test"); else numbers.push("<strong>" + stats.assertations + "</strong> tests");
	if(stats.successes != stats.assertations) {
		if(stats.successes == 1) numbers.push("<strong>1</strong> pass"); else if(stats.successes > 0) numbers.push("<strong>" + stats.successes + "</strong> passes");
	}
	if(stats.errors == 1) numbers.push("<strong>1</strong> error"); else if(stats.errors > 0) numbers.push("<strong>" + stats.errors + "</strong> errors");
	if(stats.failures == 1) numbers.push("<strong>1</strong> failure"); else if(stats.failures > 0) numbers.push("<strong>" + stats.failures + "</strong> failures");
	if(stats.warnings == 1) numbers.push("<strong>1</strong> warning"); else if(stats.warnings > 0) numbers.push("<strong>" + stats.warnings + "</strong> warnings");
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
	var _g = 0, _g1 = haxe.Stack.toString(stack).split("\n");
	while(_g < _g1.length) {
		var part = _g1[_g];
		++_g;
		if(StringTools.trim(part) == "") continue;
		if(-1 < part.indexOf("Called from utest.")) continue;
		if(part == last) parts[parts.length - 1] = part + " (#" + ++count + ")"; else {
			count = 1;
			parts.push(last = part);
		}
	}
	var s = "<ul><li>" + parts.join("</li>" + nl + "<li>") + "</li></ul>" + nl;
	return "<div>" + s + "</div>" + nl;
}
utest.ui.text.HtmlReport.prototype.addFixture = function(buf,result,name,isOk) {
	if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) return;
	buf.b[buf.b.length] = "<li class=\"fixture\"><div class=\"li\">";
	buf.b[buf.b.length] = "<span class=\"" + this.cls(result.stats) + "bg fixtureresult\">";
	if(result.stats.isOk) buf.b[buf.b.length] = "OK "; else if(result.stats.hasErrors) buf.b[buf.b.length] = "ERROR "; else if(result.stats.hasFailures) buf.b[buf.b.length] = "FAILURE "; else if(result.stats.hasWarnings) buf.b[buf.b.length] = "WARNING ";
	buf.b[buf.b.length] = "</span>";
	buf.b[buf.b.length] = "<div class=\"fixturedetails\">";
	buf.b[buf.b.length] = "<strong>" + name + "</strong>";
	buf.b[buf.b.length] = ": ";
	this.resultNumbers(buf,result.stats);
	var messages = [];
	var $it0 = result.iterator();
	while( $it0.hasNext() ) {
		var assertation = $it0.next();
		var $e = (assertation);
		switch( $e[1] ) {
		case 0:
			var pos = $e[2];
			break;
		case 1:
			var pos = $e[3], msg = $e[2];
			messages.push("<strong>line " + pos.lineNumber + "</strong>: <em>" + StringTools.htmlEscape(msg) + "</em>");
			break;
		case 2:
			var s = $e[3], e = $e[2];
			messages.push("<strong>error</strong>: <em>" + this.getErrorDescription(e) + "</em>\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
			break;
		case 3:
			var s = $e[3], e = $e[2];
			messages.push("<strong>setup error</strong>: " + this.getErrorDescription(e) + "\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
			break;
		case 4:
			var s = $e[3], e = $e[2];
			messages.push("<strong>tear-down error</strong>: " + this.getErrorDescription(e) + "\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
			break;
		case 5:
			var s = $e[3], missedAsyncs = $e[2];
			messages.push("<strong>missed async call(s)</strong>: " + missedAsyncs);
			break;
		case 6:
			var s = $e[3], e = $e[2];
			messages.push("<strong>async error</strong>: " + this.getErrorDescription(e) + "\n<br/><strong>stack</strong>:" + this.getErrorStack(s,e));
			break;
		case 7:
			var msg = $e[2];
			messages.push(StringTools.htmlEscape(msg));
			break;
		}
	}
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
	var _g = 0, _g1 = result.methodNames();
	while(_g < _g1.length) {
		var mname = _g1[_g];
		++_g;
		this.addFixture(buf,result.get(mname),mname,isOk);
	}
	buf.b[buf.b.length] = "</ul>\n";
	buf.b[buf.b.length] = "</li>\n";
}
utest.ui.text.HtmlReport.prototype.addPackages = function(buf,result,isOk) {
	if(utest.ui.common.ReportTools.skipResult(this,result.stats,isOk)) return;
	buf.b[buf.b.length] = "<ul id=\"utest-results-packages\">\n";
	var _g = 0, _g1 = result.packageNames(false);
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		this.addPackage(buf,result.getPackage(name),name,isOk);
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
	var _g = 0, _g1 = result.classNames();
	while(_g < _g1.length) {
		var cname = _g1[_g];
		++_g;
		this.addClass(buf,result.getClass(cname),cname,isOk);
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
	if(this.result.stats.hasErrors) msg = "TEST ERRORS"; else if(this.result.stats.hasFailures) msg = "TEST FAILED"; else if(this.result.stats.hasWarnings) msg = "WARNING REPORTED";
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
	buf.b[buf.b.length] = "</ol></div>";
	return buf.b.join("");
}
utest.ui.text.HtmlReport.prototype.getResults = function() {
	var buf = new StringBuf();
	this.addPackages(buf,this.result,this.result.stats.isOk);
	return buf.b.join("");
}
utest.ui.text.HtmlReport.prototype.getAll = function() {
	if(!utest.ui.common.ReportTools.hasOutput(this,this.result.stats)) return ""; else return this.getHeader() + this.getTrace() + this.getResults();
}
utest.ui.text.HtmlReport.prototype.getHtml = function(title) {
	if(null == title) title = "utest: " + utest.ui.text.HtmlReport.platform;
	var s = this.getAll();
	if("" == s) return ""; else return this.wrapHtml(title,s);
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
	};
	var head = js.Lib.document.getElementsByTagName("head")[0];
	var script = js.Lib.document.createElement("script");
	script.type = "text/javascript";
	var sjs = report.jsScript();
	if(isDef(script.text)) script.text = sjs; else script.innerHTML = sjs;
	head.appendChild(script);
	var style = js.Lib.document.createElement("style");
	style.type = "text/css";
	var scss = report.cssStyle();
	if(isDef(style.styleSheet)) style.styleSheet.cssText = scss; else if(isDef(style.cssText)) style.cssText = scss; else if(isDef(style.innerText)) style.innerText = scss; else style.innerHTML = scss;
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
org.silex.core.XmlUtils = function() { }
org.silex.core.XmlUtils.__name__ = ["org","silex","core","XmlUtils"];
org.silex.core.XmlUtils.cleanUp = function(xml) {
	var xmlCopy = Xml.parse(xml.toString()).firstElement();
	if(xmlCopy != null) return org.silex.core.XmlUtils.cleanUpRecursive(xmlCopy); else return xml;
}
org.silex.core.XmlUtils.cleanUpRecursive = function(xml) {
	var whiteSpaceValues = ["\n","\r","\t"];
	var childData = null;
	var child = null;
	var cleanedXml = null;
	switch(xml.nodeType) {
	case Xml.Document:
		cleanedXml = Xml.createDocument();
		break;
	case Xml.Element:
		cleanedXml = Xml.createElement(xml.getNodeName());
		var $it0 = xml.attributes();
		while( $it0.hasNext() ) {
			var attrib = $it0.next();
			cleanedXml.set(attrib,xml.get(attrib));
		}
		break;
	default:
	}
	var $it1 = xml.iterator();
	while( $it1.hasNext() ) {
		var child1 = $it1.next();
		switch(child1.nodeType) {
		case Xml.Element:
			childData = org.silex.core.XmlUtils.cleanUpRecursive(child1);
			cleanedXml.addChild(childData);
			break;
		case Xml.Comment:
			break;
		default:
			var nodeValue = child1.getNodeValue();
			if(nodeValue.substr(0,4) == "<!--" && nodeValue.substr(-3) == "-->") nodeValue = "";
			var _g = 0;
			while(_g < whiteSpaceValues.length) {
				var whiteSpace = whiteSpaceValues[_g];
				++_g;
				nodeValue = StringTools.replace(nodeValue,whiteSpace,"");
			}
			while(nodeValue.substr(0,1) == " ") nodeValue = nodeValue.substr(1);
			if(nodeValue != "") cleanedXml.addChild(child1);
		}
	}
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
	var $it0 = xml.attributes();
	while( $it0.hasNext() ) {
		var attrib = $it0.next();
		toReturn += " " + attrib + "=\"" + xml.get(attrib) + "\"";
	}
	toReturn += ">";
	var firstChild = xml.firstChild();
	if(firstChild != null) switch(firstChild.nodeType) {
	case Xml.CData:
		toReturn += "<![CDATA[" + firstChild.getNodeValue() + "]]>";
		break;
	case Xml.PCData:
		toReturn += firstChild;
		break;
	case Xml.Element:
		toReturn += "\n";
		var element;
		var $it1 = xml.iterator();
		while( $it1.hasNext() ) {
			var element1 = $it1.next();
			toReturn += org.silex.core.XmlUtils.xml2StringIndentRecursive(element1,indentationLevel + "\t");
		}
		toReturn += indentationLevel;
		break;
	default:
	}
	toReturn += "</" + xml.getNodeName() + ">\n";
	return toReturn;
}
org.silex.core.XmlUtils.prototype.__class__ = org.silex.core.XmlUtils;
org.silex.runtime.ressource.js.ContainerLoader = function(p) {
	if( p === $_ ) return;
	org.silex.runtime.ressource.RessourceLoader.call(this);
}
org.silex.runtime.ressource.js.ContainerLoader.__name__ = ["org","silex","runtime","ressource","js","ContainerLoader"];
org.silex.runtime.ressource.js.ContainerLoader.__super__ = org.silex.runtime.ressource.RessourceLoader;
for(var k in org.silex.runtime.ressource.RessourceLoader.prototype ) org.silex.runtime.ressource.js.ContainerLoader.prototype[k] = org.silex.runtime.ressource.RessourceLoader.prototype[k];
org.silex.runtime.ressource.js.ContainerLoader.prototype.onLoadComplete = function(data) {
	var domObject = new org.silex.runtime.domobject.js.ContainerDOMObject(js.Lib.document.createElement("div"));
	domObject.getReferenceToNativeDOM().innerHTML = data;
	this._onLoadCompleteCallback(domObject);
}
org.silex.runtime.ressource.js.ContainerLoader.prototype.__class__ = org.silex.runtime.ressource.js.ContainerLoader;
utest.TestHandler = function(fixture) {
	if( fixture === $_ ) return;
	if(fixture == null) throw "fixture argument is null";
	this.fixture = fixture;
	this.results = new List();
	this.asyncStack = new List();
	this.onTested = new utest.Dispatcher();
	this.onTimeout = new utest.Dispatcher();
	this.onComplete = new utest.Dispatcher();
}
utest.TestHandler.__name__ = ["utest","TestHandler"];
utest.TestHandler.exceptionStack = function(pops) {
	if(pops == null) pops = 2;
	var stack = haxe.Stack.exceptionStack();
	while(pops-- > 0) stack.pop();
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
		} catch( e ) {
			this.results.add(utest.Assertation.Error(e,utest.TestHandler.exceptionStack()));
		}
	} catch( e ) {
		this.results.add(utest.Assertation.SetupError(e,utest.TestHandler.exceptionStack()));
	}
	this.checkTested();
}
utest.TestHandler.prototype.checkTested = function() {
	if(this.expireson == null || this.asyncStack.length == 0) this.tested(); else if(haxe.Timer.stamp() > this.expireson) this.timeout(); else haxe.Timer.delay($closure(this,"checkTested"),10);
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
		};
	};
	utest.Assert.createEvent = function(f,t) {
		return function(e) {
		};
	};
}
utest.TestHandler.prototype.addAsync = function(f,timeout) {
	if(timeout == null) timeout = 250;
	if(null == f) f = function() {
	};
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
		} catch( e ) {
			handler.results.add(utest.Assertation.AsyncError(e,utest.TestHandler.exceptionStack(0)));
		}
	};
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
		} catch( e1 ) {
			handler.results.add(utest.Assertation.AsyncError(e1,utest.TestHandler.exceptionStack(0)));
		}
	};
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
	} catch( e ) {
		this.results.add(utest.Assertation.TeardownError(e,utest.TestHandler.exceptionStack(2)));
	}
	this.unbindHandler();
	this.onComplete.dispatch(this);
}
utest.TestHandler.prototype.__class__ = utest.TestHandler;
org.silex.runtime.domobject.js.TextDOMObject = function(referenceToNativeDOMObject) {
	if( referenceToNativeDOMObject === $_ ) return;
	org.silex.runtime.domobject.base.TextDOMObjectBase.call(this,referenceToNativeDOMObject);
}
org.silex.runtime.domobject.js.TextDOMObject.__name__ = ["org","silex","runtime","domobject","js","TextDOMObject"];
org.silex.runtime.domobject.js.TextDOMObject.__super__ = org.silex.runtime.domobject.base.TextDOMObjectBase;
for(var k in org.silex.runtime.domobject.base.TextDOMObjectBase.prototype ) org.silex.runtime.domobject.js.TextDOMObject.prototype[k] = org.silex.runtime.domobject.base.TextDOMObjectBase.prototype[k];
org.silex.runtime.domobject.js.TextDOMObject.prototype.setText = function(text) {
	org.silex.runtime.domobject.base.TextDOMObjectBase.prototype.setText.call(this,text);
	this._referenceToNativeDOM.innerHTML = text;
}
org.silex.runtime.domobject.js.TextDOMObject.prototype.__class__ = org.silex.runtime.domobject.js.TextDOMObject;
org.silex.runtime.nativeClass.NativeInstanceBase = function(nativeInstanceClassName) {
}
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
	if(Reflect.hasField(this._refToNativeClassInstance,fieldName)) return Reflect.field(this._refToNativeClassInstance,fieldName); else return null;
}
org.silex.runtime.nativeClass.NativeInstanceBase.prototype.setField = function(fieldName,fieldValue) {
	this._refToNativeClassInstance[fieldName] = fieldValue;
}
org.silex.runtime.nativeClass.NativeInstanceBase.prototype.getReferenceToNativeClassInstance = function() {
	return this._refToNativeClassInstance;
}
org.silex.runtime.nativeClass.NativeInstanceBase.prototype.__class__ = org.silex.runtime.nativeClass.NativeInstanceBase;
StringBuf = function(p) {
	if( p === $_ ) return;
	this.b = new Array();
}
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
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var x = $it0.next();
			if(x == elt) return true;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(cmp(x,elt)) return true;
		}
	}
	return false;
}
Lambda.exists = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
}
Lambda.foreach = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
}
Lambda.iter = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
}
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
}
Lambda.fold = function(it,f,first) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	var $it0 = a.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(x);
	}
	var $it1 = b.iterator();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		l.add(x);
	}
	return l;
}
Lambda.prototype.__class__ = Lambda;
org.silex.runtime.domobject.base.ContainerDOMObjectBase = function(referenceToNativeDOMObject) {
	if( referenceToNativeDOMObject === $_ ) return;
	org.silex.runtime.domobject.js.DOMObject.call(this,referenceToNativeDOMObject);
}
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
utest.ui.common.ClassResult = function(className,setupName,teardownName) {
	if( className === $_ ) return;
	this.fixtures = new Hash();
	this.className = className;
	this.setupName = setupName;
	this.hasSetup = setupName != null;
	this.teardownName = teardownName;
	this.hasTeardown = teardownName != null;
	this.methods = 0;
	this.stats = new utest.ui.common.ResultStats();
}
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
	var $it0 = this.fixtures.keys();
	while( $it0.hasNext() ) {
		var name = $it0.next();
		names.push(name);
	}
	if(errorsHavePriority) {
		var me = this;
		names.sort(function(a,b) {
			var $as = me.get(a).stats;
			var bs = me.get(b).stats;
			if($as.hasErrors) return !bs.hasErrors?-1:$as.errors == bs.errors?Reflect.compare(a,b):Reflect.compare($as.errors,bs.errors); else if(bs.hasErrors) return 1; else if($as.hasFailures) return !bs.hasFailures?-1:$as.failures == bs.failures?Reflect.compare(a,b):Reflect.compare($as.failures,bs.failures); else if(bs.hasFailures) return 1; else if($as.hasWarnings) return !bs.hasWarnings?-1:$as.warnings == bs.warnings?Reflect.compare(a,b):Reflect.compare($as.warnings,bs.warnings); else if(bs.hasWarnings) return 1; else return Reflect.compare(a,b);
		});
	} else names.sort(function(a,b) {
		return Reflect.compare(a,b);
	});
	return names;
}
utest.ui.common.ClassResult.prototype.__class__ = utest.ui.common.ClassResult;
if(!org.silex.runtime.nativeClass.js) org.silex.runtime.nativeClass.js = {}
org.silex.runtime.nativeClass.js.NativeInstance = function(nativeInstanceClassName) {
	if( nativeInstanceClassName === $_ ) return;
	org.silex.runtime.nativeClass.NativeInstanceBase.call(this,nativeInstanceClassName);
	if(Type.resolveClass(nativeInstanceClassName) != null) this._refToNativeClassInstance = Type.createInstance(Type.resolveClass(nativeInstanceClassName),[]); else this._refToNativeClassInstance = js.Lib.eval("new " + nativeInstanceClassName + "()");
}
org.silex.runtime.nativeClass.js.NativeInstance.__name__ = ["org","silex","runtime","nativeClass","js","NativeInstance"];
org.silex.runtime.nativeClass.js.NativeInstance.__super__ = org.silex.runtime.nativeClass.NativeInstanceBase;
for(var k in org.silex.runtime.nativeClass.NativeInstanceBase.prototype ) org.silex.runtime.nativeClass.js.NativeInstance.prototype[k] = org.silex.runtime.nativeClass.NativeInstanceBase.prototype[k];
org.silex.runtime.nativeClass.js.NativeInstance.prototype.__class__ = org.silex.runtime.nativeClass.js.NativeInstance;
org.silex.runtime.ressource.js.LibraryLoader = function(p) {
	if( p === $_ ) return;
	org.silex.runtime.ressource.RessourceLoader.call(this);
}
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
	};
	js.Lib.document.getElementsByTagName("head")[0].appendChild(scrptE);
}
org.silex.runtime.ressource.js.LibraryLoader.prototype.onLoadComplete = function(data) {
	this._onLoadCompleteCallback(null);
}
org.silex.runtime.ressource.js.LibraryLoader.prototype.__class__ = org.silex.runtime.ressource.js.LibraryLoader;
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
utest.ui.Report = function() { }
utest.ui.Report.__name__ = ["utest","ui","Report"];
utest.ui.Report.create = function(runner,displaySuccessResults,headerDisplayMode) {
	var report;
	report = new utest.ui.text.HtmlReport(runner,null,true);
	if(null == displaySuccessResults) report.displaySuccessResults = utest.ui.common.SuccessResultsDisplayMode.ShowSuccessResultsWithNoErrors; else report.displaySuccessResults = displaySuccessResults;
	if(null == headerDisplayMode) report.displayHeader = utest.ui.common.HeaderDisplayMode.ShowHeaderWithResults; else report.displayHeader = headerDisplayMode;
	return report;
}
utest.ui.Report.prototype.__class__ = utest.ui.Report;
org.silex.runtime.ressource.js.TextLoader = function(p) {
	if( p === $_ ) return;
	org.silex.runtime.ressource.RessourceLoader.call(this);
}
org.silex.runtime.ressource.js.TextLoader.__name__ = ["org","silex","runtime","ressource","js","TextLoader"];
org.silex.runtime.ressource.js.TextLoader.__super__ = org.silex.runtime.ressource.RessourceLoader;
for(var k in org.silex.runtime.ressource.RessourceLoader.prototype ) org.silex.runtime.ressource.js.TextLoader.prototype[k] = org.silex.runtime.ressource.RessourceLoader.prototype[k];
org.silex.runtime.ressource.js.TextLoader.prototype.onLoadComplete = function(data) {
	var domObject = new org.silex.runtime.domobject.js.TextDOMObject(js.Lib.document.createElement("div"));
	domObject.setText(data);
	this._onLoadCompleteCallback(domObject);
}
org.silex.runtime.ressource.js.TextLoader.prototype.__class__ = org.silex.runtime.ressource.js.TextLoader;
utest.ui.common.ReportTools = function() { }
utest.ui.common.ReportTools.__name__ = ["utest","ui","common","ReportTools"];
utest.ui.common.ReportTools.hasHeader = function(report,stats) {
	switch( (report.displayHeader)[1] ) {
	case 1:
		return false;
	case 2:
		if(!stats.isOk) return true;
		switch( (report.displaySuccessResults)[1] ) {
		case 1:
			return false;
		case 0:
		case 2:
			return true;
		}
		break;
	case 0:
		return true;
	}
}
utest.ui.common.ReportTools.skipResult = function(report,stats,isOk) {
	if(!stats.isOk) return false;
	return (function($this) {
		var $r;
		switch( (report.displaySuccessResults)[1] ) {
		case 1:
			$r = true;
			break;
		case 0:
			$r = false;
			break;
		case 2:
			$r = !isOk;
			break;
		}
		return $r;
	}(this));
}
utest.ui.common.ReportTools.hasOutput = function(report,stats) {
	if(!stats.isOk) return true;
	return utest.ui.common.ReportTools.hasHeader(report,stats);
}
utest.ui.common.ReportTools.prototype.__class__ = utest.ui.common.ReportTools;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
Hash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
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
	} catch( e ) {
		for(var i in this.h) if( i == key ) return true;
		return false;
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	for(var i in this.h) a.push(i.substr(1));
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
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
if(!utest._Dispatcher) utest._Dispatcher = {}
utest._Dispatcher.EventException = { __ename__ : ["utest","_Dispatcher","EventException"], __constructs__ : ["StopPropagation"] }
utest._Dispatcher.EventException.StopPropagation = ["StopPropagation",0];
utest._Dispatcher.EventException.StopPropagation.toString = $estr;
utest._Dispatcher.EventException.StopPropagation.__enum__ = utest._Dispatcher.EventException;
utest.Dispatcher = function(p) {
	if( p === $_ ) return;
	this.handlers = new Array();
}
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
	var _g1 = 0, _g = this.handlers.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
	}
	return null;
}
utest.Dispatcher.prototype.clear = function() {
	this.handlers = new Array();
}
utest.Dispatcher.prototype.dispatch = function(e) {
	try {
		var list = this.handlers.copy();
		var _g = 0;
		while(_g < list.length) {
			var l = list[_g];
			++_g;
			l(e);
		}
		return true;
	} catch( exc ) {
		if( js.Boot.__instanceof(exc,utest._Dispatcher.EventException) ) {
			return false;
		} else throw(exc);
	}
}
utest.Dispatcher.prototype.has = function() {
	return this.handlers.length > 0;
}
utest.Dispatcher.prototype.__class__ = utest.Dispatcher;
utest.Notifier = function(p) {
	if( p === $_ ) return;
	this.handlers = new Array();
}
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
	var _g1 = 0, _g = this.handlers.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
	}
	return null;
}
utest.Notifier.prototype.clear = function() {
	this.handlers = new Array();
}
utest.Notifier.prototype.dispatch = function() {
	try {
		var list = this.handlers.copy();
		var _g = 0;
		while(_g < list.length) {
			var l = list[_g];
			++_g;
			l();
		}
		return true;
	} catch( exc ) {
		if( js.Boot.__instanceof(exc,utest._Dispatcher.EventException) ) {
			return false;
		} else throw(exc);
	}
}
utest.Notifier.prototype.has = function() {
	return this.handlers.length > 0;
}
utest.Notifier.prototype.__class__ = utest.Notifier;
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
if(!org.silex_unit_tests) org.silex_unit_tests = {}
if(!org.silex_unit_tests.core) org.silex_unit_tests.core = {}
if(!org.silex_unit_tests.core.block) org.silex_unit_tests.core.block = {}
org.silex_unit_tests.core.block.BlockBuilderTests = function(p) {
}
org.silex_unit_tests.core.block.BlockBuilderTests.__name__ = ["org","silex_unit_tests","core","block","BlockBuilderTests"];
org.silex_unit_tests.core.block.BlockBuilderTests.main = function() {
	var runner = new utest.Runner();
	runner.addCase(new org.silex_unit_tests.core.block.BlockBuilderTests());
	utest.ui.Report.create(runner);
	runner.run();
}
org.silex_unit_tests.core.block.BlockBuilderTests.prototype.blockSort = function(a,b) {
	var aString = a.getBlockData().className.toLowerCase();
	var bString = b.getBlockData().className.toLowerCase();
	if(aString < bString) return -1;
	if(aString > bString) return 1;
	return 0;
}
org.silex_unit_tests.core.block.BlockBuilderTests.prototype.test_deserializeBlockData_1 = function() {
	var xmlString = "<HGroup>\r\n\t\t\t<blockData>\r\n\t\t\t\t<!-- these properties will be set on the controller class -->\r\n\t\t\t\t<properties>\r\n\t\t\t\t\t<x type=\"Float\">606.6</x>\r\n\t\t\t\t\t<y type=\"Float\">199.95</y>\r\n\t\t\t\t\t<width type=\"Integer\">76</width>\r\n\t\t\t\t\t<height type=\"Integer\">26</height>\r\n\t\t\t\t</properties>\r\n\t\t\t\t<!-- the meta data are not set on any object -->\r\n\t\t\t\t<!-- the meta data are available for the controller class, the skin or the plugins -->\r\n\t\t\t\t<metaData>\r\n\t\t\t\t</metaData>\r\n\t\t\t</blockData>\r\n\t\t\t<children>\r\n\t\t\t\t<!-- this is a block with the controller class set to org.silex.blocks.Image -->\r\n\t\t\t\t<Image>\r\n\t\t\t\t\t<blockData>\r\n\t\t\t\t\t\t<!-- these properties will be set on the controller class -->\r\n\t\t\t\t\t\t<properties>\r\n\t\t\t\t\t\t\t<url>media/test1/im1.jpg</url>\r\n\t\t\t\t\t\t\t<x type=\"Float\">606.6</x>\r\n\t\t\t\t\t\t\t<y type=\"Float\">199.95</y>\r\n\t\t\t\t\t\t\t<width type=\"Integer\">76</width>\r\n\t\t\t\t\t\t\t<height type=\"Integer\">26</height>\r\n\t\t\t\t\t\t\t<rotation type=\"Integer\">0</rotation>\r\n\t\t\t\t\t\t\t<alpha type=\"Integer\">1</alpha>\r\n\t\t\t\t\t\t\t<textFormat type=\"Array\">\r\n\t\t\t\t\t\t\t\t<item><![CDATA[font=Arial]]></item>\r\n\t\t\t\t\t\t\t\t<item><![CDATA[color=4D4D4D]]></item>\r\n\t\t\t\t\t\t\t\t<item><![CDATA[size=17]]></item>\r\n\t\t\t\t\t\t\t</textFormat>\r\n\t\t\t\t\t\t</properties>\r\n\t\t\t\t\t\t<!-- the meta data are not set on any object -->\r\n\t\t\t\t\t\t<!-- the meta data are available for the controller class, the skin or the plugins -->\r\n\t\t\t\t\t\t<metaData>\r\n\t\t\t\t\t\t</metaData>\r\n\t\t\t\t\t</blockData>\r\n\t\t\t\t</Image>\r\n\t\t\t\t<!-- this is a block with a custom controller class, loaded as part of a library at startup -->\r\n\t\t\t\t<CustomControllerClass nameSpace=\"com.mycompany.silexcomponents\" isAutoOpen=\"false\">\r\n\t\t\t\t\t<blockData>\r\n\t\t\t\t\t\t<properties>\r\n\t\t\t\t\t\t</properties>\r\n\t\t\t\t\t\t<metaData>\r\n\t\t\t\t\t\t</metaData>\r\n\t\t\t\t\t</blockData>\r\n\t\t\t\t</CustomControllerClass>\r\n\t\t\t\t<!-- this block data is in a separate XML file -->\r\n\t\t\t\t<Group isAutoOpen=\"true\" fileUrl=\"contents/mysite1/layer023.xml\" />\r\n\t\t\t\t<!-- here is a skinnable block, for which a domObject containing assets is loaded before the controller class is instanciated -->\r\n\t\t\t\t<SkinnableBlock nameSpace=\"com.mycompany.silexcomponents\" isAutoOpen=\"false\">\r\n\t\t\t\t\t<blockData>\r\n\t\t\t\t\t\t<descriptorUID>SkinnableBlockDescriptor</descriptorUID>\r\n\t\t\t\t\t\t<!-- URLs of the skin, depending on the target runtime -->\r\n\t\t\t\t\t\t<domRoot>maindiv.containerdiv</domRoot>\r\n\t\t\t\t\t\t<jsSkinURL>\r\n\t\t\t\t\t\t\t<url>plugins/mycompanyComponents/js/SkinnableBlock.js</url>\r\n\t\t\t\t\t\t</jsSkinURL>\r\n\t\t\t\t\t\t<phpSkinURL>\r\n\t\t\t\t\t\t\t<url>plugins/mycompanyComponents/php/SkinnableBlock.php</url>\r\n\t\t\t\t\t\t</phpSkinURL>\r\n\t\t\t\t\t\t<as3SkinURL>\r\n\t\t\t\t\t\t\t<url>plugins/mycompanyComponents/as2/SkinnableBlock.swf</url>\r\n\t\t\t\t\t\t</as3SkinURL>\r\n\t\t\t\t\t\t<properties>\r\n\t\t\t\t\t\t</properties>\r\n\t\t\t\t\t\t<metaData>\r\n\t\t\t\t\t\t</metaData>\r\n\t\t\t\t\t</blockData>\r\n\t\t\t\t</SkinnableBlock>\r\n\t\t\t</children>\r\n\t\t</HGroup>";
	var block = new org.silex.core.block.Block("");
	org.silex.core.block.BlockBuilder.deserializeBlockData(block,xmlString);
	var childrenBlock = block.getChildren();
	childrenBlock.sort($closure(this,"blockSort"));
	utest.Assert.equals("org.silex.blocks.HGroup",block.getBlockData().className,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 149, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals(606.6,block.getBlockData().properties.get("x"),null,{ fileName : "BlockBuilderTests.hx", lineNumber : 150, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals(76,block.getBlockData().properties.get("width"),null,{ fileName : "BlockBuilderTests.hx", lineNumber : 151, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	var child;
	child = childrenBlock.pop();
	utest.Assert.equals("org.silex.blocks.Image",child.getBlockData().className,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 156, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals(606.6,child.getBlockData().properties.get("x"),null,{ fileName : "BlockBuilderTests.hx", lineNumber : 157, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals(76,child.getBlockData().properties.get("width"),null,{ fileName : "BlockBuilderTests.hx", lineNumber : 158, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals(0,child.getBlockData().properties.get("rotation"),null,{ fileName : "BlockBuilderTests.hx", lineNumber : 159, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals(1,child.getBlockData().properties.get("alpha"),null,{ fileName : "BlockBuilderTests.hx", lineNumber : 160, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	child = childrenBlock.pop();
	utest.Assert.equals("org.silex.blocks.Group",child.getBlockData().className,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 164, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals(true,child.getIsAutoOpen(),null,{ fileName : "BlockBuilderTests.hx", lineNumber : 165, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals("contents/mysite1/layer023.xml",child.getFileUrl(),null,{ fileName : "BlockBuilderTests.hx", lineNumber : 166, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	child = childrenBlock.pop();
	utest.Assert.equals("com.mycompany.silexcomponents.SkinnableBlock",child.getBlockData().className,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 170, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals(false,child.getIsAutoOpen(),null,{ fileName : "BlockBuilderTests.hx", lineNumber : 171, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals("SkinnableBlockDescriptor",child.getBlockData().descriptorUID,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 172, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals("plugins/mycompanyComponents/js/SkinnableBlock.js",child.getBlockData().jsSkinURL,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 173, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals("plugins/mycompanyComponents/php/SkinnableBlock.php",child.getBlockData().phpSkinURL,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 174, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals("plugins/mycompanyComponents/as2/SkinnableBlock.swf",child.getBlockData().as3SkinURL,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 175, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	child = childrenBlock.pop();
	utest.Assert.equals("com.mycompany.silexcomponents.CustomControllerClass",child.getBlockData().className,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 179, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
	utest.Assert.equals(false,child.getIsAutoOpen(),null,{ fileName : "BlockBuilderTests.hx", lineNumber : 180, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "test_deserializeBlockData_1"});
}
org.silex_unit_tests.core.block.BlockBuilderTests.prototype.testSetBlockAttribute = function() {
	var parentBlock = new org.silex.core.block.Block("");
	var properties = new Hash();
	properties.set("testStringProperty","testStringValue");
	properties.set("testIntProperty",1);
	properties.set("testFloatProperty",1.2);
	properties.set("testBoolProperty",true);
	properties.set("testArrayProperty",[1,"value"]);
	var parentBlockBlockData = { className : "org.silex_unit_tests.core.block.TestNativeClass", descriptorUID : null, jsSkinURL : null, as3SkinURL : null, phpSkinURL : null, properties : properties, metaData : new Hash()};
	parentBlock.setBlockData(parentBlockBlockData);
	var blockBuilder = new org.silex.core.block.BlockBuilder(parentBlock);
	blockBuilder.createNativeClassInstance();
	blockBuilder.setBlockAttributes();
	utest.Assert.equals(parentBlock.getNativeClassInstance().getField("testStringProperty"),"testStringValue",null,{ fileName : "BlockBuilderTests.hx", lineNumber : 502, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "testSetBlockAttribute"});
	utest.Assert.equals(parentBlock.getNativeClassInstance().getField("testBoolProperty"),true,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 504, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "testSetBlockAttribute"});
	utest.Assert.equals(parentBlock.getNativeClassInstance().getField("testIntProperty"),1,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 506, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "testSetBlockAttribute"});
	utest.Assert.equals(parentBlock.getNativeClassInstance().getField("testFloatProperty"),1.2,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 508, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "testSetBlockAttribute"});
	utest.Assert.equals(parentBlock.getNativeClassInstance().getField("testArrayProperty")[0],1,null,{ fileName : "BlockBuilderTests.hx", lineNumber : 510, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "testSetBlockAttribute"});
	utest.Assert.equals(parentBlock.getNativeClassInstance().getField("testArrayProperty")[1],"value",null,{ fileName : "BlockBuilderTests.hx", lineNumber : 511, className : "org.silex_unit_tests.core.block.BlockBuilderTests", methodName : "testSetBlockAttribute"});
}
org.silex_unit_tests.core.block.BlockBuilderTests.prototype.__class__ = org.silex_unit_tests.core.block.BlockBuilderTests;
org.silex_unit_tests.core.block.TestNativeClass = function(p) {
}
org.silex_unit_tests.core.block.TestNativeClass.__name__ = ["org","silex_unit_tests","core","block","TestNativeClass"];
org.silex_unit_tests.core.block.TestNativeClass.prototype.testStringProperty = null;
org.silex_unit_tests.core.block.TestNativeClass.prototype.testIntProperty = null;
org.silex_unit_tests.core.block.TestNativeClass.prototype.testFloatProperty = null;
org.silex_unit_tests.core.block.TestNativeClass.prototype.testBoolProperty = null;
org.silex_unit_tests.core.block.TestNativeClass.prototype.testArrayProperty = null;
org.silex_unit_tests.core.block.TestNativeClass.prototype.__class__ = org.silex_unit_tests.core.block.TestNativeClass;
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
utest.ui.text.PlainTextReport = function(runner,outputHandler) {
	if( runner === $_ ) return;
	this.aggregator = new utest.ui.common.ResultAggregator(runner,true);
	runner.onStart.add($closure(this,"start"));
	this.aggregator.onComplete.add($closure(this,"complete"));
	if(null != outputHandler) this.setHandler(outputHandler);
	this.displaySuccessResults = utest.ui.common.SuccessResultsDisplayMode.AlwaysShowSuccessResults;
	this.displayHeader = utest.ui.common.HeaderDisplayMode.AlwaysShowHeader;
}
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
	var _g = 0;
	while(_g < c) {
		var _ = _g++;
		s += this.indent;
	}
	return s;
}
utest.ui.text.PlainTextReport.prototype.dumpStack = function(stack) {
	if(stack.length == 0) return "";
	var parts = haxe.Stack.toString(stack).split("\n");
	var r = [];
	var _g = 0;
	while(_g < parts.length) {
		var part = parts[_g];
		++_g;
		if(part.indexOf(" utest.") >= 0) continue;
		r.push(part);
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
	var _g = 0, _g1 = this.result.packageNames();
	while(_g < _g1.length) {
		var pname = _g1[_g];
		++_g;
		var pack = this.result.getPackage(pname);
		if(utest.ui.common.ReportTools.skipResult(this,pack.stats,this.result.stats.isOk)) continue;
		var _g2 = 0, _g3 = pack.classNames();
		while(_g2 < _g3.length) {
			var cname = _g3[_g2];
			++_g2;
			var cls = pack.getClass(cname);
			if(utest.ui.common.ReportTools.skipResult(this,cls.stats,this.result.stats.isOk)) continue;
			buf.b[buf.b.length] = (pname == ""?"":pname + ".") + cname + this.newline;
			var _g4 = 0, _g5 = cls.methodNames();
			while(_g4 < _g5.length) {
				var mname = _g5[_g4];
				++_g4;
				var fix = cls.get(mname);
				if(utest.ui.common.ReportTools.skipResult(this,fix.stats,this.result.stats.isOk)) continue;
				buf.b[buf.b.length] = this.indents(1) + mname + ": ";
				if(fix.stats.isOk) buf.b[buf.b.length] = "OK "; else if(fix.stats.hasErrors) buf.b[buf.b.length] = "ERROR "; else if(fix.stats.hasFailures) buf.b[buf.b.length] = "FAILURE "; else if(fix.stats.hasWarnings) buf.b[buf.b.length] = "WARNING ";
				var messages = "";
				var $it0 = fix.iterator();
				while( $it0.hasNext() ) {
					var assertation = $it0.next();
					var $e = (assertation);
					switch( $e[1] ) {
					case 0:
						var pos = $e[2];
						buf.b[buf.b.length] = ".";
						break;
					case 1:
						var pos = $e[3], msg = $e[2];
						buf.b[buf.b.length] = "F";
						messages += this.indents(2) + "line: " + pos.lineNumber + ", " + msg + this.newline;
						break;
					case 2:
						var s = $e[3], e = $e[2];
						buf.b[buf.b.length] = "E";
						messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
						break;
					case 3:
						var s = $e[3], e = $e[2];
						buf.b[buf.b.length] = "S";
						messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
						break;
					case 4:
						var s = $e[3], e = $e[2];
						buf.b[buf.b.length] = "T";
						messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
						break;
					case 5:
						var s = $e[3], missedAsyncs = $e[2];
						buf.b[buf.b.length] = "O";
						messages += this.indents(2) + "missed async calls: " + missedAsyncs + this.dumpStack(s) + this.newline;
						break;
					case 6:
						var s = $e[3], e = $e[2];
						buf.b[buf.b.length] = "A";
						messages += this.indents(2) + Std.string(e) + this.dumpStack(s) + this.newline;
						break;
					case 7:
						var msg = $e[2];
						buf.b[buf.b.length] = "W";
						messages += this.indents(2) + msg + this.newline;
						break;
					}
				}
				buf.b[buf.b.length] = this.newline;
				buf.b[buf.b.length] = messages;
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
org.silex.runtime.ressource.js.AnimationLoader = function(p) {
	if( p === $_ ) return;
	org.silex.runtime.ressource.RessourceLoader.call(this);
}
org.silex.runtime.ressource.js.AnimationLoader.__name__ = ["org","silex","runtime","ressource","js","AnimationLoader"];
org.silex.runtime.ressource.js.AnimationLoader.__super__ = org.silex.runtime.ressource.RessourceLoader;
for(var k in org.silex.runtime.ressource.RessourceLoader.prototype ) org.silex.runtime.ressource.js.AnimationLoader.prototype[k] = org.silex.runtime.ressource.RessourceLoader.prototype[k];
org.silex.runtime.ressource.js.AnimationLoader.prototype.__class__ = org.silex.runtime.ressource.js.AnimationLoader;
utest.TestFixture = function(target,method,setup,teardown) {
	if( target === $_ ) return;
	this.target = target;
	this.method = method;
	this.setup = setup;
	this.teardown = teardown;
}
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
utest.ui.text.PrintReport = function(runner) {
	if( runner === $_ ) return;
	utest.ui.text.PlainTextReport.call(this,runner,$closure(this,"_handler"));
	this.newline = "\n";
	this.indent = "  ";
}
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
if(!haxe.io) haxe.io = {}
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
haxe.io.Bytes = function(length,b) {
	if( length === $_ ) return;
	this.length = length;
	this.b = b;
}
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.cca(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
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
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		b1[i + pos] = b2[i + srcpos];
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
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		if(b1[i] != b2[i]) return b1[i] - b2[i];
	}
	return this.length - other.length;
}
haxe.io.Bytes.prototype.readString = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	var s = "";
	var b = this.b;
	var fcc = String.fromCharCode;
	var i = pos;
	var max = pos + len;
	while(i < max) {
		var c = b[i++];
		if(c < 128) {
			if(c == 0) break;
			s += fcc(c);
		} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
			var c2 = b[i++];
			s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
		} else {
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
haxe.io.Bytes.prototype.toHex = function() {
	var s = new StringBuf();
	var chars = [];
	var str = "0123456789abcdef";
	var _g1 = 0, _g = str.length;
	while(_g1 < _g) {
		var i = _g1++;
		chars.push(str.charCodeAt(i));
	}
	var _g1 = 0, _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = this.b[i];
		s.b[s.b.length] = String.fromCharCode(chars[c >> 4]);
		s.b[s.b.length] = String.fromCharCode(chars[c & 15]);
	}
	return s.b.join("");
}
haxe.io.Bytes.prototype.getData = function() {
	return this.b;
}
haxe.io.Bytes.prototype.__class__ = haxe.io.Bytes;
org.silex.runtime.domobject.base.AnimationDOMObjectBase = function(referenceToNativeDOMObject) {
	if( referenceToNativeDOMObject === $_ ) return;
	org.silex.runtime.domobject.js.DOMObject.call(this,referenceToNativeDOMObject);
}
org.silex.runtime.domobject.base.AnimationDOMObjectBase.__name__ = ["org","silex","runtime","domobject","base","AnimationDOMObjectBase"];
org.silex.runtime.domobject.base.AnimationDOMObjectBase.__super__ = org.silex.runtime.domobject.js.DOMObject;
for(var k in org.silex.runtime.domobject.js.DOMObject.prototype ) org.silex.runtime.domobject.base.AnimationDOMObjectBase.prototype[k] = org.silex.runtime.domobject.js.DOMObject.prototype[k];
org.silex.runtime.domobject.base.AnimationDOMObjectBase.prototype.__class__ = org.silex.runtime.domobject.base.AnimationDOMObjectBase;
org.silex.runtime.domobject.js.AnimationDOMObject = function(referenceToNativeDOMObject) {
	if( referenceToNativeDOMObject === $_ ) return;
	org.silex.runtime.domobject.base.AnimationDOMObjectBase.call(this,referenceToNativeDOMObject);
}
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
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return s.substr(r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return s.substr(0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += c.substr(0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
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
org.silex.runtime.domobject.js.ContainerDOMObject = function(referenceToNativeDOMObject) {
	if( referenceToNativeDOMObject === $_ ) return;
	org.silex.runtime.domobject.base.ContainerDOMObjectBase.call(this,referenceToNativeDOMObject);
}
org.silex.runtime.domobject.js.ContainerDOMObject.__name__ = ["org","silex","runtime","domobject","js","ContainerDOMObject"];
org.silex.runtime.domobject.js.ContainerDOMObject.__super__ = org.silex.runtime.domobject.base.ContainerDOMObjectBase;
for(var k in org.silex.runtime.domobject.base.ContainerDOMObjectBase.prototype ) org.silex.runtime.domobject.js.ContainerDOMObject.prototype[k] = org.silex.runtime.domobject.base.ContainerDOMObjectBase.prototype[k];
org.silex.runtime.domobject.js.ContainerDOMObject.prototype.setSemantic = function(semantic) {
	org.silex.runtime.domobject.base.ContainerDOMObjectBase.prototype.setSemantic.call(this,semantic);
	var currentNativeDOMContent = this._referenceToNativeDOM.innerHTML;
	var currentNativeDOMAttributes = this._referenceToNativeDOM.attributes;
	var newReferenceToNativeDOM = js.Lib.document.createElement(semantic);
	newReferenceToNativeDOM.innerHTML = currentNativeDOMContent;
	var _g1 = 0, _g = currentNativeDOMAttributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		newReferenceToNativeDOM.setAttribute(currentNativeDOMAttributes[i].nodeName,currentNativeDOMAttributes[i].nodeValue);
	}
	this._referenceToNativeDOM.parentNode.replaceChild(newReferenceToNativeDOM,this._referenceToNativeDOM);
	this._referenceToNativeDOM = newReferenceToNativeDOM;
}
org.silex.runtime.domobject.js.ContainerDOMObject.prototype.__class__ = org.silex.runtime.domobject.js.ContainerDOMObject;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
	try {
		return new ActiveXObject("Msxml2.XMLHTTP");
	} catch( e ) {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} catch( e1 ) {
			throw "Unable to create XMLHttpRequest object.";
		}
	}
}:(function($this) {
	var $r;
	throw "Unable to create XMLHttpRequest object.";
	return $r;
}(this));
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
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
	var d = Date;
	d.now = function() {
		return new Date();
	};
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	};
	d.fromString = function(s) {
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		case 10:
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		case 19:
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		default:
			throw "Invalid date format : " + s;
		}
	};
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	};
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
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
utest.ui.text.HtmlReport.platform = "javascript";
org.silex.core.XmlUtils.INDENT_STRING = "\t";
utest.TestHandler.POLLING_TIME = 10;
js.Lib.onerror = null;
org.silex_unit_tests.core.block.BlockBuilderTests.main()