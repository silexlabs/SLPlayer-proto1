$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof org=='undefined') org = {}
if(!org.silex) org.silex = {}
if(!org.silex.runtime) org.silex.runtime = {}
if(!org.silex.runtime.ressource) org.silex.runtime.ressource = {}
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
org.silex.runtime.domobject.base.AnimationDOMObjectBase = function(referenceToNativeDOMObject) {
	if( referenceToNativeDOMObject === $_ ) return;
	org.silex.runtime.domobject.js.DOMObject.call(this,referenceToNativeDOMObject);
}
org.silex.runtime.domobject.base.AnimationDOMObjectBase.__name__ = ["org","silex","runtime","domobject","base","AnimationDOMObjectBase"];
org.silex.runtime.domobject.base.AnimationDOMObjectBase.__super__ = org.silex.runtime.domobject.js.DOMObject;
for(var k in org.silex.runtime.domobject.js.DOMObject.prototype ) org.silex.runtime.domobject.base.AnimationDOMObjectBase.prototype[k] = org.silex.runtime.domobject.js.DOMObject.prototype[k];
org.silex.runtime.domobject.base.AnimationDOMObjectBase.prototype.__class__ = org.silex.runtime.domobject.base.AnimationDOMObjectBase;
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
if(typeof haxe=='undefined') haxe = {}
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
org.silex.runtime.domobject.js.ImageDOMObject = function(referenceToNativeDOMObject) {
	if( referenceToNativeDOMObject === $_ ) return;
	org.silex.runtime.domobject.base.ImageDOMObjectBase.call(this,referenceToNativeDOMObject);
}
org.silex.runtime.domobject.js.ImageDOMObject.__name__ = ["org","silex","runtime","domobject","js","ImageDOMObject"];
org.silex.runtime.domobject.js.ImageDOMObject.__super__ = org.silex.runtime.domobject.base.ImageDOMObjectBase;
for(var k in org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype ) org.silex.runtime.domobject.js.ImageDOMObject.prototype[k] = org.silex.runtime.domobject.base.ImageDOMObjectBase.prototype[k];
org.silex.runtime.domobject.js.ImageDOMObject.prototype.__class__ = org.silex.runtime.domobject.js.ImageDOMObject;
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
if(typeof js=='undefined') js = {}
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
if(!org.silex_unit_tests) org.silex_unit_tests = {}
if(!org.silex_unit_tests.runtime) org.silex_unit_tests.runtime = {}
if(!org.silex_unit_tests.runtime.domobject) org.silex_unit_tests.runtime.domobject = {}
org.silex_unit_tests.runtime.domobject.DOMObjectGUITests = function(p) {
	if( p === $_ ) return;
	var divParentDOMObject = js.Lib.document.createElement("div");
	divParentDOMObject.setAttribute("id","parentDiv");
	divParentDOMObject.style.backgroundColor = "#00FF00";
	var parentDOMObject = new org.silex.runtime.domobject.js.DOMObject(divParentDOMObject);
	parentDOMObject.setWidth(200);
	parentDOMObject.setHeight(200);
	js.Lib.document.body.appendChild(divParentDOMObject);
	var onPressDelegate = $closure(this,"onDOMObjectPress");
	parentDOMObject.onPress = function() {
		onPressDelegate(parentDOMObject);
	};
	var onReleaseDelegate = $closure(this,"onDOMObjectRelease");
	parentDOMObject.onRelease = function() {
		onReleaseDelegate(parentDOMObject);
	};
	var onRollOverDelegate = $closure(this,"onDOMObjectRollOver");
	parentDOMObject.onRollOver = function() {
		onRollOverDelegate(parentDOMObject);
	};
	var onRollOutDelegate = $closure(this,"onDOMObjectRollOut");
	parentDOMObject.onRollOut = function() {
		onRollOutDelegate(parentDOMObject);
	};
	var onMouseMoveDelegate = $closure(this,"onDOMObjectMouseMove");
	parentDOMObject.onMouseMove = function() {
		onMouseMoveDelegate(parentDOMObject);
	};
	var onDoubleClickDelegate = $closure(this,"onDOMObjectDoubleClick");
	parentDOMObject.onDoubleClick = function() {
		onDoubleClickDelegate(parentDOMObject);
	};
}
org.silex_unit_tests.runtime.domobject.DOMObjectGUITests.__name__ = ["org","silex_unit_tests","runtime","domobject","DOMObjectGUITests"];
org.silex_unit_tests.runtime.domobject.DOMObjectGUITests.main = function() {
	var domObjectGuiTests = new org.silex_unit_tests.runtime.domobject.DOMObjectGUITests();
}
org.silex_unit_tests.runtime.domobject.DOMObjectGUITests.prototype.onDOMObjectPress = function(domObject) {
	domObject.setRotation(domObject.getRotation() + 10);
	haxe.Log.trace(domObject.getRotation(),{ fileName : "DOMObjectGUITests.hx", lineNumber : 108, className : "org.silex_unit_tests.runtime.domobject.DOMObjectGUITests", methodName : "onDOMObjectPress"});
	haxe.Log.trace("dom object press",{ fileName : "DOMObjectGUITests.hx", lineNumber : 109, className : "org.silex_unit_tests.runtime.domobject.DOMObjectGUITests", methodName : "onDOMObjectPress"});
}
org.silex_unit_tests.runtime.domobject.DOMObjectGUITests.prototype.onDOMObjectDoubleClick = function(domObject) {
	haxe.Log.trace("dom object double click",{ fileName : "DOMObjectGUITests.hx", lineNumber : 114, className : "org.silex_unit_tests.runtime.domobject.DOMObjectGUITests", methodName : "onDOMObjectDoubleClick"});
}
org.silex_unit_tests.runtime.domobject.DOMObjectGUITests.prototype.onDOMObjectRelease = function(domObject) {
	haxe.Log.trace("dom object release",{ fileName : "DOMObjectGUITests.hx", lineNumber : 119, className : "org.silex_unit_tests.runtime.domobject.DOMObjectGUITests", methodName : "onDOMObjectRelease"});
}
org.silex_unit_tests.runtime.domobject.DOMObjectGUITests.prototype.onDOMObjectRollOver = function(domObject) {
	haxe.Log.trace("dom object roll over",{ fileName : "DOMObjectGUITests.hx", lineNumber : 124, className : "org.silex_unit_tests.runtime.domobject.DOMObjectGUITests", methodName : "onDOMObjectRollOver"});
}
org.silex_unit_tests.runtime.domobject.DOMObjectGUITests.prototype.onDOMObjectRollOut = function(domObject) {
	haxe.Log.trace("dom object roll out",{ fileName : "DOMObjectGUITests.hx", lineNumber : 129, className : "org.silex_unit_tests.runtime.domobject.DOMObjectGUITests", methodName : "onDOMObjectRollOut"});
}
org.silex_unit_tests.runtime.domobject.DOMObjectGUITests.prototype.onDOMObjectMouseMove = function(domObject) {
	haxe.Log.trace("dom object mouse move",{ fileName : "DOMObjectGUITests.hx", lineNumber : 134, className : "org.silex_unit_tests.runtime.domobject.DOMObjectGUITests", methodName : "onDOMObjectMouseMove"});
}
org.silex_unit_tests.runtime.domobject.DOMObjectGUITests.prototype.__class__ = org.silex_unit_tests.runtime.domobject.DOMObjectGUITests;
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
org.silex.runtime.domobject.js.AnimationDOMObject = function(referenceToNativeDOMObject) {
	if( referenceToNativeDOMObject === $_ ) return;
	org.silex.runtime.domobject.base.AnimationDOMObjectBase.call(this,referenceToNativeDOMObject);
}
org.silex.runtime.domobject.js.AnimationDOMObject.__name__ = ["org","silex","runtime","domobject","js","AnimationDOMObject"];
org.silex.runtime.domobject.js.AnimationDOMObject.__super__ = org.silex.runtime.domobject.base.AnimationDOMObjectBase;
for(var k in org.silex.runtime.domobject.base.AnimationDOMObjectBase.prototype ) org.silex.runtime.domobject.js.AnimationDOMObject.prototype[k] = org.silex.runtime.domobject.base.AnimationDOMObjectBase.prototype[k];
org.silex.runtime.domobject.js.AnimationDOMObject.prototype.__class__ = org.silex.runtime.domobject.js.AnimationDOMObject;
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
org.silex.runtime.ressource.js.AnimationLoader = function(p) {
	if( p === $_ ) return;
	org.silex.runtime.ressource.RessourceLoader.call(this);
}
org.silex.runtime.ressource.js.AnimationLoader.__name__ = ["org","silex","runtime","ressource","js","AnimationLoader"];
org.silex.runtime.ressource.js.AnimationLoader.__super__ = org.silex.runtime.ressource.RessourceLoader;
for(var k in org.silex.runtime.ressource.RessourceLoader.prototype ) org.silex.runtime.ressource.js.AnimationLoader.prototype[k] = org.silex.runtime.ressource.RessourceLoader.prototype[k];
org.silex.runtime.ressource.js.AnimationLoader.prototype.__class__ = org.silex.runtime.ressource.js.AnimationLoader;
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
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
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
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
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
org.silex.runtime.ressource.RessourceLoaderManager._isLoading = false;
js.Lib.onerror = null;
org.silex_unit_tests.runtime.domobject.DOMObjectGUITests.main()