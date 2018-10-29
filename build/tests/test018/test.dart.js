(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
if(!(y.__proto__&&y.__proto__.p===z.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var x=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(x))return true}}catch(w){}return false}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b,c){"use strict"
function generateAccessor(b0,b1,b2){var g=b0.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var a0
if(g.length>1)a0=true
else a0=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a1=d&3
var a2=d>>2
var a3=f=f.substring(0,e-1)
var a4=f.indexOf(":")
if(a4>0){a3=f.substring(0,a4)
f=f.substring(a4+1)}if(a1){var a5=a1&2?"r":""
var a6=a1&1?"this":"r"
var a7="return "+a6+"."+f
var a8=b2+".prototype.g"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}if(a2){var a5=a2&2?"r,v":"v"
var a6=a2&1?"this":"r"
var a7=a6+"."+f+"=v"
var a8=b2+".prototype.s"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}}return f}function defineClass(a4,a5){var g=[]
var f="function "+a4+"("
var e="",d=""
for(var a0=0;a0<a5.length;a0++){var a1=a5[a0]
if(a1.charCodeAt(0)==48){a1=a1.substring(1)
var a2=generateAccessor(a1,g,a4)
d+="this."+a2+" = null;\n"}else{var a2=generateAccessor(a1,g,a4)
var a3="p_"+a2
f+=e
e=", "
f+=a3
d+="this."+a2+" = "+a3+";\n"}}if(supportsDirectProtoAccess)d+="this."+"$deferredAction"+"();"
f+=") {\n"+d+"}\n"
f+=a4+".builtin$cls=\""+a4+"\";\n"
f+="$desc=$collectedClasses."+a4+"[1];\n"
f+=a4+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a4+".name=\""+a4+"\";\n"
f+=g.join("")
return f}var z=supportsDirectProtoAccess?function(d,e){var g=d.prototype
g.__proto__=e.prototype
g.constructor=d
g["$is"+d.name]=d
return convertToFastObject(g)}:function(){function tmp(){}return function(a1,a2){tmp.prototype=a2.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a1.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var a0=e[d]
g[a0]=f[a0]}g["$is"+a1.name]=a1
g.constructor=a1
a1.prototype=g
return g}}()
function finishClasses(a5){var g=init.allClasses
a5.combinedConstructorFunction+="return [\n"+a5.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a5.combinedConstructorFunction)(a5.collected)
a5.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.name
var a1=a5.collected[a0]
var a2=a1[0]
a1=a1[1]
g[a0]=d
a2[a0]=d}f=null
var a3=init.finishedClasses
function finishClass(c2){if(a3[c2])return
a3[c2]=true
var a6=a5.pending[c2]
if(a6&&a6.indexOf("+")>0){var a7=a6.split("+")
a6=a7[0]
var a8=a7[1]
finishClass(a8)
var a9=g[a8]
var b0=a9.prototype
var b1=g[c2].prototype
var b2=Object.keys(b0)
for(var b3=0;b3<b2.length;b3++){var b4=b2[b3]
if(!u.call(b1,b4))b1[b4]=b0[b4]}}if(!a6||typeof a6!="string"){var b5=g[c2]
var b6=b5.prototype
b6.constructor=b5
b6.$isb=b5
b6.$deferredAction=function(){}
return}finishClass(a6)
var b7=g[a6]
if(!b7)b7=existingIsolateProperties[a6]
var b5=g[c2]
var b6=z(b5,b7)
if(b0)b6.$deferredAction=mixinDeferredActionHelper(b0,b6)
if(Object.prototype.hasOwnProperty.call(b6,"%")){var b8=b6["%"].split(";")
if(b8[0]){var b9=b8[0].split("|")
for(var b3=0;b3<b9.length;b3++){init.interceptorsByTag[b9[b3]]=b5
init.leafTags[b9[b3]]=true}}if(b8[1]){b9=b8[1].split("|")
if(b8[2]){var c0=b8[2].split("|")
for(var b3=0;b3<c0.length;b3++){var c1=g[c0[b3]]
c1.$nativeSuperclassTag=b9[0]}}for(b3=0;b3<b9.length;b3++){init.interceptorsByTag[b9[b3]]=b5
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isv)b6.$deferredAction()}var a4=Object.keys(a5.pending)
for(var e=0;e<a4.length;e++)finishClass(a4[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.charCodeAt(0)
var a1
if(d!=="^"&&d!=="$reflectable"&&a0!==43&&a0!==42&&(a1=g[d])!=null&&a1.constructor===Array&&d!=="<>")addStubs(g,a1,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function mixinDeferredActionHelper(d,e){var g
if(e.hasOwnProperty("$deferredAction"))g=e.$deferredAction
return function foo(){if(!supportsDirectProtoAccess)return
var f=this
while(!f.hasOwnProperty("$deferredAction"))f=f.__proto__
if(g)f.$deferredAction=g
else{delete f.$deferredAction
convertToFastObject(f)}d.$deferredAction()
f.$deferredAction()}}function processClassData(b2,b3,b4){b3=convertToSlowObject(b3)
var g
var f=Object.keys(b3)
var e=false
var d=supportsDirectProtoAccess&&b2!="b"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="t"){processStatics(init.statics[b2]=b3.t,b4)
delete b3.t}else if(a2===43){w[g]=a1.substring(1)
var a3=b3[a1]
if(a3>0)b3[g].$reflectable=a3}else if(a2===42){b3[g].$D=b3[a1]
var a4=b3.$methodsWithOptionalArguments
if(!a4)b3.$methodsWithOptionalArguments=a4={}
a4[a1]=g}else{var a5=b3[a1]
if(a1!=="^"&&a5!=null&&a5.constructor===Array&&a1!=="<>")if(d)e=true
else addStubs(b3,a5,a1,false,[])
else g=a1}}if(e)b3.$deferredAction=finishAddStubsHelper
var a6=b3["^"],a7,a8,a9=a6
var b0=a9.split(";")
a9=b0[1]?b0[1].split(","):[]
a8=b0[0]
a7=a8.split(":")
if(a7.length==2){a8=a7[0]
var b1=a7[1]
if(b1)b3.$S=function(b5){return function(){return init.types[b5]}}(b1)}if(a8)b4.pending[b2]=a8
b4.combinedConstructorFunction+=defineClass(b2,a9)
b4.constructorsList.push(b2)
b4.collected[b2]=[m,b3]
i.push(b2)}function processStatics(a4,a5){var g=Object.keys(a4)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a4[e]
var a0=e.charCodeAt(0)
var a1
if(a0===43){v[a1]=e.substring(1)
var a2=a4[e]
if(a2>0)a4[a1].$reflectable=a2
if(d&&d.length)init.typeInformation[a1]=d}else if(a0===42){m[a1].$D=d
var a3=a4.$methodsWithOptionalArguments
if(!a3)a4.$methodsWithOptionalArguments=a3={}
a3[e]=a1}else if(typeof d==="function"){m[a1=e]=d
h.push(e)}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a1=e
processClassData(e,d,a5)}}}function addStubs(b6,b7,b8,b9,c0){var g=0,f=g,e=b7[g],d
if(typeof e=="string")d=b7[++g]
else{d=e
e=b8}if(typeof d=="number"){f=d
d=b7[++g]}b6[b8]=b6[e]=d
var a0=[d]
d.$stubName=b8
c0.push(b8)
for(g++;g<b7.length;g++){d=b7[g]
if(typeof d!="function")break
if(!b9)d.$stubName=b7[++g]
a0.push(d)
if(d.$stubName){b6[d.$stubName]=d
c0.push(d.$stubName)}}for(var a1=0;a1<a0.length;g++,a1++)a0[a1].$callName=b7[g]
var a2=b7[g]
b7=b7.slice(++g)
var a3=b7[0]
var a4=(a3&1)===1
a3=a3>>1
var a5=a3>>1
var a6=(a3&1)===1
var a7=a3===3
var a8=a3===1
var a9=b7[1]
var b0=a9>>1
var b1=(a9&1)===1
var b2=a5+b0
var b3=b7[2]
if(typeof b3=="number")b7[2]=b3+c
if(b>0){var b4=3
for(var a1=0;a1<b0;a1++){if(typeof b7[b4]=="number")b7[b4]=b7[b4]+b
b4++}for(var a1=0;a1<b2;a1++){b7[b4]=b7[b4]+b
b4++}}var b5=2*b0+a5+3
if(a2){d=tearOff(a0,f,b7,b9,b8,a4)
b6[b8].$getter=d
d.$getterStub=true
if(b9)c0.push(a2)
b6[a2]=d
a0.push(d)
d.$stubName=a2
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dW(this,d,e,f,true,[],a1).prototype
return g}:tearOffGetter(d,e,f,a1,a2)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dY=function(){}
var dart=[["","",,H,{"^":"",oN:{"^":"b;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
e1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d_:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e_==null){H.nQ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cq("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$di()]
if(v!=null)return v
v=H.nX(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$di(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
v:{"^":"b;",
w:function(a,b){return a===b},
gX:function(a){return H.bV(a)},
j:["eY",function(a){return"Instance of '"+H.bq(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iP:{"^":"v;",
j:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isV:1},
eM:{"^":"v;",
w:function(a,b){return null==b},
j:function(a){return"null"},
gX:function(a){return 0},
$isN:1},
dj:{"^":"v;",
gX:function(a){return 0},
j:["f_",function(a){return String(a)}]},
jx:{"^":"dj;"},
cr:{"^":"dj;"},
ck:{"^":"dj;",
j:function(a){var z=a[$.$get$eu()]
if(z==null)return this.f_(a)
return"JavaScript function for "+H.j(J.ad(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscg:1},
bm:{"^":"v;$ti",
h:function(a,b){H.B(b,H.y(a,0))
if(!!a.fixed$length)H.q(P.E("add"))
a.push(b)},
j_:function(a,b){if(!!a.fixed$length)H.q(P.E("removeAt"))
if(b<0||b>=a.length)throw H.a(P.cn(b,null,null))
return a.splice(b,1)[0]},
I:function(a,b){var z
if(!!a.fixed$length)H.q(P.E("remove"))
for(z=0;z<a.length;++z)if(J.J(a[z],b)){a.splice(z,1)
return!0}return!1},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aU(a))}},
p:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.j(a[y]))
return z.join(b)},
iC:function(a){return this.p(a,"")},
iu:function(a,b,c,d){var z,y,x
H.B(b,d)
H.l(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aU(a))}return y},
is:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.V,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aU(a))}throw H.a(H.dg())},
ir:function(a,b){return this.is(a,b,null)},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
c0:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a6(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a6(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gaw:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.dg())},
aH:function(a,b,c,d){var z
H.B(d,H.y(a,0))
if(!!a.immutable$list)H.q(P.E("fill range"))
P.aY(b,c,a.length,null,null,null)
for(z=b;z.K(0,c);z=z.B(0,1))a[z]=d},
dQ:function(a,b){var z,y
H.l(b,{func:1,ret:P.V,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aU(a))}return!1},
W:function(a,b){var z
for(z=0;z<a.length;++z)if(J.J(a[z],b))return!0
return!1},
j:function(a){return P.df(a,"[","]")},
ga0:function(a){return new J.aJ(a,a.length,0,[H.y(a,0)])},
gX:function(a){return H.bV(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.q(P.E("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cy(b,"newLength",null))
if(b<0)throw H.a(P.a6(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aR(a,b))
if(b>=a.length||b<0)throw H.a(H.aR(a,b))
return a[b]},
l:function(a,b,c){H.G(b)
H.B(c,H.y(a,0))
if(!!a.immutable$list)H.q(P.E("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aR(a,b))
if(b>=a.length||b<0)throw H.a(H.aR(a,b))
a[b]=c},
$isi:1,
$isd:1,
t:{
iO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cy(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a6(a,0,4294967295,"length",null))
return J.eJ(new Array(a),b)},
eJ:function(a,b){return J.bP(H.c(a,[b]))},
bP:function(a){H.cb(a)
a.fixed$length=Array
return a},
oL:[function(a,b){return J.hR(H.hG(a,"$isar"),H.hG(b,"$isar"))},"$2","nk",8,0,55]}},
oM:{"^":"bm;$ti"},
aJ:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ci:{"^":"v;",
aV:function(a,b){var z
H.hF(b)
if(typeof b!=="number")throw H.a(H.a9(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbR(b)
if(this.gbR(a)===z)return 0
if(this.gbR(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbR:function(a){return a===0?1/a<0:a<0},
je:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.E(""+a+".toInt()"))},
cM:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.E(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.E(""+a+".round()"))},
eJ:function(a,b){var z
if(b>20)throw H.a(P.a6(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbR(a))return"-"+z
return z},
bk:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a6(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a_(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.E("Unexpected toString result: "+z))
x=J.az(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.k("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.a9(b))
return a*b},
bo:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f2:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dJ(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dJ(a,b)},
dJ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.E("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aS:function(a,b){var z
if(a>0)z=this.dH(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hw:function(a,b){if(b<0)throw H.a(H.a9(b))
return this.dH(a,b)},
dH:function(a,b){return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.a(H.a9(b))
return a<b},
ag:function(a,b){if(typeof b!=="number")throw H.a(H.a9(b))
return a>b},
$isar:1,
$asar:function(){return[P.a4]},
$isu:1,
$isa4:1},
eL:{"^":"ci;",$isn:1},
eK:{"^":"ci;"},
cj:{"^":"v;",
a_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aR(a,b))
if(b<0)throw H.a(H.aR(a,b))
if(b>=a.length)H.q(H.aR(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aR(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.I(b)
if(typeof b!=="string")throw H.a(P.cy(b,null,null))
return a+b},
b4:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.a9(b))
c=P.aY(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.a9(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
aa:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.a9(c))
if(typeof c!=="number")return c.K()
if(c<0||c>a.length)throw H.a(P.a6(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a4:function(a,b){return this.aa(a,b,0)},
v:function(a,b,c){H.G(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.a9(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.a(P.cn(b,null,null))
if(b>c)throw H.a(P.cn(b,null,null))
if(c>a.length)throw H.a(P.cn(c,null,null))
return a.substring(b,c)},
ao:function(a,b){return this.v(a,b,null)},
jg:function(a){return a.toLowerCase()},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iO:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ad:function(a,b){return this.iO(a,b," ")},
ep:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a6(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eo:function(a,b){return this.ep(a,b,0)},
ia:function(a,b,c){if(c>a.length)throw H.a(P.a6(c,0,a.length,null,null))
return H.hK(a,b,c)},
aV:function(a,b){var z
H.I(b)
if(typeof b!=="string")throw H.a(H.a9(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$isar:1,
$asar:function(){return[P.h]},
$iseZ:1,
$ish:1}}],["","",,H,{"^":"",
d0:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
dg:function(){return new P.dy("No element")},
iN:function(){return new P.dy("Too many elements")},
ke:function(a,b,c){var z
H.t(a,"$isd",[c],"$asd")
H.l(b,{func:1,ret:P.n,args:[c,c]})
z=J.aq(a)
if(typeof z!=="number")return z.L()
H.co(a,0,z-1,b,c)},
co:function(a,b,c,d,e){H.t(a,"$isd",[e],"$asd")
H.l(d,{func:1,ret:P.n,args:[e,e]})
if(c-b<=32)H.kd(a,b,c,d,e)
else H.kc(a,b,c,d,e)},
kd:function(a,b,c,d,e){var z,y,x,w,v
H.t(a,"$isd",[e],"$asd")
H.l(d,{func:1,ret:P.n,args:[e,e]})
for(z=b+1,y=J.az(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.aH(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.l(a,w,y.i(a,v))
w=v}y.l(a,w,x)}},
kc:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.t(a,"$isd",[a2],"$asd")
H.l(a1,{func:1,ret:P.n,args:[a2,a2]})
z=C.d.a2(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.a2(b+a0,2)
v=w-z
u=w+z
t=J.az(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.aH(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aH(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aH(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aH(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aH(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aH(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aH(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aH(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aH(a1.$2(p,o),0)){n=o
o=p
p=n}t.l(a,y,s)
t.l(a,w,q)
t.l(a,x,o)
t.l(a,v,t.i(a,b))
t.l(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.J(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.K()
if(i<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ag()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
l=h
m=g
break}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.i(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.K()
if(e<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.ag()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.ag()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.K()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.l(a,b,t.i(a,c))
t.l(a,c,r)
c=l+1
t.l(a,a0,t.i(a,c))
t.l(a,c,p)
H.co(a,b,m-2,a1,a2)
H.co(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.J(a1.$2(t.i(a,m),r),0);)++m
for(;J.J(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.K()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}H.co(a,m,l,a1,a2)}else H.co(a,m,l,a1,a2)},
w:{"^":"kO;a",
gn:function(a){return this.a.length},
i:function(a,b){return C.b.a_(this.a,b)},
$ascR:function(){return[P.n]},
$asz:function(){return[P.n]},
$asi:function(){return[P.n]},
$asd:function(){return[P.n]}},
eB:{"^":"i;"},
cJ:{"^":"eB;$ti",
ga0:function(a){return new H.dn(this,this.gn(this),0,[H.ap(this,"cJ",0)])},
d6:function(a,b){return this.eZ(0,H.l(b,{func:1,ret:P.V,args:[H.ap(this,"cJ",0)]}))}},
dn:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.az(z)
x=y.gn(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aU(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
j9:{"^":"i;a,b,$ti",
ga0:function(a){return new H.ja(J.b7(this.a),this.b,this.$ti)},
gn:function(a){return J.aq(this.a)},
J:function(a,b){return this.b.$1(J.cx(this.a,b))},
$asi:function(a,b){return[b]}},
ja:{"^":"dh;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$asdh:function(a,b){return[b]}},
jb:{"^":"cJ;a,b,$ti",
gn:function(a){return J.aq(this.a)},
J:function(a,b){return this.b.$1(J.cx(this.a,b))},
$ascJ:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dL:{"^":"i;a,b,$ti",
ga0:function(a){return new H.lj(J.b7(this.a),this.b,this.$ti)}},
lj:{"^":"dh;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
cE:{"^":"b;$ti"},
cR:{"^":"b;$ti",
l:function(a,b,c){H.G(b)
H.B(c,H.ap(this,"cR",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))},
aH:function(a,b,c,d){H.B(d,H.ap(this,"cR",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))}},
kO:{"^":"cI+cR;"}}],["","",,H,{"^":"",
ie:function(){throw H.a(P.E("Cannot modify unmodifiable Map"))},
nJ:function(a){return init.types[H.G(a)]},
hB:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isK},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ad(a)
if(typeof z!=="string")throw H.a(H.a9(a))
return z},
bV:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jI:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.I(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a6(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bq:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.P||!!J.L(a).$iscr){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.ao(w,1)
r=H.e0(H.cb(H.bf(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jA:function(){if(!!self.location)return self.location.href
return},
f0:function(a){var z,y,x,w,v
H.cb(a)
z=J.aq(a)
if(typeof z!=="number")return z.eS()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jJ:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a9(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aS(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a9(w))}return H.f0(z)},
f1:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a9(x))
if(x<0)throw H.a(H.a9(x))
if(x>65535)return H.jJ(a)}return H.f0(a)},
jK:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eS()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bW:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aS(z,10))>>>0,56320|z&1023)}}throw H.a(P.a6(a,0,1114111,null,null))},
ao:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jH:function(a){return a.b?H.ao(a).getUTCFullYear()+0:H.ao(a).getFullYear()+0},
jF:function(a){return a.b?H.ao(a).getUTCMonth()+1:H.ao(a).getMonth()+1},
jB:function(a){return a.b?H.ao(a).getUTCDate()+0:H.ao(a).getDate()+0},
jC:function(a){return a.b?H.ao(a).getUTCHours()+0:H.ao(a).getHours()+0},
jE:function(a){return a.b?H.ao(a).getUTCMinutes()+0:H.ao(a).getMinutes()+0},
jG:function(a){return a.b?H.ao(a).getUTCSeconds()+0:H.ao(a).getSeconds()+0},
jD:function(a){return a.b?H.ao(a).getUTCMilliseconds()+0:H.ao(a).getMilliseconds()+0},
o:function(a){throw H.a(H.a9(a))},
f:function(a,b){if(a==null)J.aq(a)
throw H.a(H.aR(a,b))},
aR:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.G(J.aq(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.X(b,a,"index",null,z)
return P.cn(b,"index",null)},
nF:function(a,b,c){if(a>c)return new P.cM(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cM(a,c,!0,b,"end","Invalid value")
return new P.aI(!0,b,"end",null)},
a9:function(a){return new P.aI(!0,a,null,null)},
nu:function(a){if(typeof a!=="number")throw H.a(H.a9(a))
return a},
a:function(a){var z
if(a==null)a=new P.eY()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hL})
z.name=""}else z.toString=H.hL
return z},
hL:function(){return J.ad(this.dartException)},
q:function(a){throw H.a(a)},
D:function(a){throw H.a(P.aU(a))},
ac:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.oj(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aS(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dk(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eX(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fn()
u=$.$get$fo()
t=$.$get$fp()
s=$.$get$fq()
r=$.$get$fu()
q=$.$get$fv()
p=$.$get$fs()
$.$get$fr()
o=$.$get$fx()
n=$.$get$fw()
m=v.ac(y)
if(m!=null)return z.$1(H.dk(H.I(y),m))
else{m=u.ac(y)
if(m!=null){m.method="call"
return z.$1(H.dk(H.I(y),m))}else{m=t.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=r.ac(y)
if(m==null){m=q.ac(y)
if(m==null){m=p.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=o.ac(y)
if(m==null){m=n.ac(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eX(H.I(y),m))}}return z.$1(new H.kN(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f7()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f7()
return a},
bJ:function(a){var z
if(a==null)return new H.h3(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h3(a)},
nI:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
nS:function(a,b,c,d,e,f){H.e(a,"$iscg")
switch(H.G(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.r("Unsupported number of arguments for wrapped closure"))},
bH:function(a,b){var z
H.G(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nS)
a.$identity=z
return z},
ia:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$isd){z.$reflectionInfo=d
x=H.jQ(z).r}else x=d
w=e?Object.create(new H.kg().constructor.prototype):Object.create(new H.d8(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aK
if(typeof u!=="number")return u.B()
$.aK=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ep(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nJ,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ei:H.d9
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ep(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
i7:function(a,b,c,d){var z=H.d9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ep:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i9(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i7(y,!w,z,b)
if(y===0){w=$.aK
if(typeof w!=="number")return w.B()
$.aK=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bM
if(v==null){v=H.cA("self")
$.bM=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aK
if(typeof w!=="number")return w.B()
$.aK=w+1
t+=w
w="return function("+t+"){return this."
v=$.bM
if(v==null){v=H.cA("self")
$.bM=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
i8:function(a,b,c,d){var z,y
z=H.d9
y=H.ei
switch(b?-1:a){case 0:throw H.a(H.k_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
i9:function(a,b){var z,y,x,w,v,u,t,s
z=$.bM
if(z==null){z=H.cA("self")
$.bM=z}y=$.eh
if(y==null){y=H.cA("receiver")
$.eh=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i8(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aK
if(typeof y!=="number")return y.B()
$.aK=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aK
if(typeof y!=="number")return y.B()
$.aK=y+1
return new Function(z+y+"}")()},
dW:function(a,b,c,d,e,f,g){var z,y
z=J.bP(H.cb(b))
H.G(c)
y=!!J.L(d).$isd?J.bP(d):d
return H.ia(a,z,c,y,!!e,f,g)},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aF(a,"String"))},
nG:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aF(a,"double"))},
hF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aF(a,"num"))},
dU:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aF(a,"bool"))},
G:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aF(a,"int"))},
e4:function(a,b){throw H.a(H.aF(a,H.I(b).substring(3)))},
oa:function(a,b){var z=J.az(b)
throw H.a(H.i6(a,z.v(b,3,z.gn(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.e4(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.oa(a,b)},
hG:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.L(a)[b])return a
H.e4(a,b)},
cb:function(a){if(a==null)return a
if(!!J.L(a).$isd)return a
throw H.a(H.aF(a,"List"))},
hD:function(a,b){if(a==null)return a
if(!!J.L(a).$isd)return a
if(J.L(a)[b])return a
H.e4(a,b)},
hv:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.G(z)]
else return a.$S()}return},
cu:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hv(J.L(a))
if(z==null)return!1
y=H.hA(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dR)return a
$.dR=!0
try{if(H.cu(a,b))return a
z=H.cw(b)
y=H.aF(a,z)
throw H.a(y)}finally{$.dR=!1}},
dZ:function(a,b){if(a!=null&&!H.dV(a,b))H.q(H.aF(a,H.cw(b)))
return a},
hn:function(a){var z
if(a instanceof H.m){z=H.hv(J.L(a))
if(z!=null)return H.cw(z)
return"Closure"}return H.bq(a)},
og:function(a){throw H.a(new P.ij(H.I(a)))},
hy:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bf:function(a){if(a==null)return
return a.$ti},
pR:function(a,b,c){return H.bK(a["$as"+H.j(c)],H.bf(b))},
be:function(a,b,c,d){var z
H.I(c)
H.G(d)
z=H.bK(a["$as"+H.j(c)],H.bf(b))
return z==null?null:z[d]},
ap:function(a,b,c){var z
H.I(b)
H.G(c)
z=H.bK(a["$as"+H.j(b)],H.bf(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.G(b)
z=H.bf(a)
return z==null?null:z[b]},
cw:function(a){var z=H.bg(a,null)
return z},
bg:function(a,b){var z,y
H.t(b,"$isd",[P.h],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.e0(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.G(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.nj(a,b)
if('futureOr' in a)return"FutureOr<"+H.bg("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nj:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.t(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.b.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.bg(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bg(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bg(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bg(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nH(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.I(z[l])
n=n+m+H.bg(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
e0:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$isd",[P.h],"$asd")
if(a==null)return""
z=new P.as("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bg(u,c)}v="<"+z.j(0)+">"
return v},
bK:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c8:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bf(a)
y=J.L(a)
if(y[b]==null)return!1
return H.hq(H.bK(y[d],z),null,c,null)},
t:function(a,b,c,d){var z,y
H.I(b)
H.cb(c)
H.I(d)
if(a==null)return a
z=H.c8(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.e0(c,0,null)
throw H.a(H.aF(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hq:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aA(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aA(a[y],b,c[y],d))return!1
return!0},
pP:function(a,b,c){return a.apply(b,H.bK(J.L(b)["$as"+H.j(c)],H.bf(b)))},
hC:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="N"||a===-1||a===-2||H.hC(z)}return!1},
dV:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="N"||b===-1||b===-2||H.hC(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dV(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cu(a,b)}y=J.L(a).constructor
x=H.bf(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aA(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.dV(a,b))throw H.a(H.aF(a,H.cw(b)))
return a},
aA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="N")return!0
if('func' in c)return H.hA(a,b,c,d)
if('func' in a)return c.builtin$cls==="cg"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aA("type" in a?a.type:null,b,x,d)
else if(H.aA(a,b,x,d))return!0
else{if(!('$is'+"bO" in y.prototype))return!1
w=y.prototype["$as"+"bO"]
v=H.bK(w,z?a.slice(1):null)
return H.aA(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cw(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hq(H.bK(r,z),b,u,d)},
hA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aA(a.ret,b,c.ret,d))return!1
x=a.args
w=c.args
v=a.opt
u=c.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
for(p=0;p<t;++p)if(!H.aA(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aA(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aA(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.o8(m,b,l,d)},
o8:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aA(c[w],d,a[w],b))return!1}return!0},
pQ:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
nX:function(a){var z,y,x,w,v,u
z=H.I($.hz.$1(a))
y=$.cZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d1[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.I($.hp.$2(a,z))
if(z!=null){y=$.cZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d1[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d2(x)
$.cZ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.d1[z]=x
return x}if(v==="-"){u=H.d2(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hH(a,x)
if(v==="*")throw H.a(P.cq(z))
if(init.leafTags[z]===true){u=H.d2(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hH(a,x)},
hH:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e1(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d2:function(a){return J.e1(a,!1,null,!!a.$isK)},
o7:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d2(z)
else return J.e1(z,c,null,null)},
nQ:function(){if(!0===$.e_)return
$.e_=!0
H.nR()},
nR:function(){var z,y,x,w,v,u,t,s
$.cZ=Object.create(null)
$.d1=Object.create(null)
H.nM()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hI.$1(v)
if(u!=null){t=H.o7(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nM:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.bG(C.R,H.bG(C.W,H.bG(C.x,H.bG(C.x,H.bG(C.V,H.bG(C.S,H.bG(C.T(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hz=new H.nN(v)
$.hp=new H.nO(u)
$.hI=new H.nP(t)},
bG:function(a,b){return a(b)||b},
hK:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e5:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
id:{"^":"b;$ti",
j:function(a){return P.dp(this)},
l:function(a,b,c){H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
return H.ie()},
$isM:1},
ig:{"^":"id;a,b,c,$ti",
gn:function(a){return this.a},
bA:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bA(0,b))return
return this.dz(b)},
dz:function(a){return this.b[H.I(a)]},
M:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.l(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.B(this.dz(v),z))}}},
jP:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jQ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bP(z)
y=z[0]
x=z[1]
return new H.jP(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kz:{"^":"b;a,b,c,d,e,f",
ac:function(a){var z,y,x
z=new RegExp(this.a).exec(a)
if(z==null)return
y=Object.create(null)
x=this.b
if(x!==-1)y.arguments=z[x+1]
x=this.c
if(x!==-1)y.argumentsExpr=z[x+1]
x=this.d
if(x!==-1)y.expr=z[x+1]
x=this.e
if(x!==-1)y.method=z[x+1]
x=this.f
if(x!==-1)y.receiver=z[x+1]
return y},
t:{
aP:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kz(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ft:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ju:{"^":"aa;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eX:function(a,b){return new H.ju(a,b==null?null:b.method)}}},
iS:{"^":"aa;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
t:{
dk:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iS(a,y,z?null:b.receiver)}}},
kN:{"^":"aa;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
oj:{"^":"m:20;a",
$1:function(a){if(!!J.L(a).$isaa)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h3:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaE:1},
m:{"^":"b;",
j:function(a){return"Closure '"+H.bq(this).trim()+"'"},
geO:function(){return this},
$iscg:1,
geO:function(){return this}},
fd:{"^":"m;"},
kg:{"^":"fd;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d8:{"^":"fd;a,b,c,d",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d8))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bV(this.a)
else y=typeof z!=="object"?J.cc(z):H.bV(z)
return(y^H.bV(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bq(z)+"'")},
t:{
d9:function(a){return a.a},
ei:function(a){return a.c},
cA:function(a){var z,y,x,w,v
z=new H.d8("self","target","receiver","name")
y=J.bP(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kA:{"^":"aa;a",
j:function(a){return this.a},
t:{
aF:function(a,b){return new H.kA("TypeError: "+H.j(P.cD(a))+": type '"+H.hn(a)+"' is not a subtype of type '"+b+"'")}}},
i5:{"^":"aa;a",
j:function(a){return this.a},
t:{
i6:function(a,b){return new H.i5("CastError: "+H.j(P.cD(a))+": type '"+H.hn(a)+"' is not a subtype of type '"+b+"'")}}},
jZ:{"^":"aa;a",
j:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
k_:function(a){return new H.jZ(a)}}},
bc:{"^":"eS;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
giB:function(a){return this.a===0},
ga7:function(a){return new H.iY(this,[H.y(this,0)])},
bA:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dt(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dt(y,b)}else return this.iy(b)},
iy:function(a){var z=this.d
if(z==null)return!1
return this.cP(this.ca(z,this.cO(a)),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bs(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bs(w,b)
x=y==null?null:y.b
return x}else return this.iz(b)},
iz:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ca(z,this.cO(a))
x=this.cP(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cf()
this.b=z}this.dk(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cf()
this.c=y}this.dk(y,b,c)}else this.iA(b,c)},
iA:function(a,b){var z,y,x,w
H.B(a,H.y(this,0))
H.B(b,H.y(this,1))
z=this.d
if(z==null){z=this.cf()
this.d=z}y=this.cO(a)
x=this.ca(z,y)
if(x==null)this.cm(z,y,[this.cg(a,b)])
else{w=this.cP(x,a)
if(w>=0)x[w].b=b
else x.push(this.cg(a,b))}},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aU(this))
z=z.c}},
dk:function(a,b,c){var z
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
z=this.bs(a,b)
if(z==null)this.cm(a,b,this.cg(b,c))
else z.b=c},
fF:function(){this.r=this.r+1&67108863},
cg:function(a,b){var z,y
z=new H.iX(H.B(a,H.y(this,0)),H.B(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fF()
return z},
cO:function(a){return J.cc(a)&0x3ffffff},
cP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
j:function(a){return P.dp(this)},
bs:function(a,b){return a[b]},
ca:function(a,b){return a[b]},
cm:function(a,b,c){a[b]=c},
fw:function(a,b){delete a[b]},
dt:function(a,b){return this.bs(a,b)!=null},
cf:function(){var z=Object.create(null)
this.cm(z,"<non-identifier-key>",z)
this.fw(z,"<non-identifier-key>")
return z},
$iseP:1},
iX:{"^":"b;a,b,0c,0d"},
iY:{"^":"eB;a,$ti",
gn:function(a){return this.a.a},
ga0:function(a){var z,y
z=this.a
y=new H.iZ(z,z.r,this.$ti)
y.c=z.e
return y}},
iZ:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aU(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nN:{"^":"m:20;a",
$1:function(a){return this.a(a)}},
nO:{"^":"m:57;a",
$2:function(a,b){return this.a(a,b)}},
nP:{"^":"m:56;a",
$1:function(a){return this.a(H.I(a))}},
iQ:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$iseZ:1,
$isjR:1,
t:{
iR:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a3("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nH:function(a){return J.eJ(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
o9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bE:function(a){return a},
jo:function(a){return new Int8Array(a)},
aQ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aR(b,a))},
nd:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nF(a,b,c))
return b},
eV:{"^":"v;",$iseV:1,"%":"ArrayBuffer"},
du:{"^":"v;",$isdu:1,$iskB:1,"%":"DataView;ArrayBufferView;dt|fY|fZ|jp|h_|h0|bd"},
dt:{"^":"du;",
gn:function(a){return a.length},
$isK:1,
$asK:I.dY},
jp:{"^":"fZ;",
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
l:function(a,b,c){H.G(b)
H.nG(c)
H.aQ(b,a,a.length)
a[b]=c},
$ascE:function(){return[P.u]},
$asz:function(){return[P.u]},
$isi:1,
$asi:function(){return[P.u]},
$isd:1,
$asd:function(){return[P.u]},
"%":"Float32Array|Float64Array"},
bd:{"^":"h0;",
l:function(a,b,c){H.G(b)
H.G(c)
H.aQ(b,a,a.length)
a[b]=c},
$ascE:function(){return[P.n]},
$asz:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]}},
oW:{"^":"bd;",
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oX:{"^":"bd;",
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oY:{"^":"bd;",
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oZ:{"^":"bd;",
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
p_:{"^":"bd;",
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
p0:{"^":"bd;",
gn:function(a){return a.length},
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dv:{"^":"bd;",
gn:function(a){return a.length},
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
c0:function(a,b,c){return new Uint8Array(a.subarray(b,H.nd(b,c,a.length)))},
$isdv:1,
$isU:1,
"%":";Uint8Array"},
fY:{"^":"dt+z;"},
fZ:{"^":"fY+cE;"},
h_:{"^":"dt+z;"},
h0:{"^":"h_+cE;"}}],["","",,P,{"^":"",
ll:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nr()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bH(new P.ln(z),1)).observe(y,{childList:true})
return new P.lm(z,y,x)}else if(self.setImmediate!=null)return P.ns()
return P.nt()},
pC:[function(a){self.scheduleImmediate(H.bH(new P.lo(H.l(a,{func:1,ret:-1})),0))},"$1","nr",4,0,12],
pD:[function(a){self.setImmediate(H.bH(new P.lp(H.l(a,{func:1,ret:-1})),0))},"$1","ns",4,0,12],
pE:[function(a){P.dD(C.q,H.l(a,{func:1,ret:-1}))},"$1","nt",4,0,12],
dD:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.d.a2(a.a,1000)
return P.mw(z<0?0:z,b)},
fi:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bx]})
z=C.d.a2(a.a,1000)
return P.mx(z<0?0:z,b)},
nn:function(a,b){if(H.cu(a,{func:1,args:[P.b,P.aE]}))return b.iY(a,null,P.b,P.aE)
if(H.cu(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cy(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nm:function(){var z,y
for(;z=$.bF,z!=null;){$.c6=null
y=z.b
$.bF=y
if(y==null)$.c5=null
z.a.$0()}},
pO:[function(){$.dS=!0
try{P.nm()}finally{$.c6=null
$.dS=!1
if($.bF!=null)$.$get$dM().$1(P.hr())}},"$0","hr",0,0,3],
hm:function(a){var z=new P.fP(H.l(a,{func:1,ret:-1}))
if($.bF==null){$.c5=z
$.bF=z
if(!$.dS)$.$get$dM().$1(P.hr())}else{$.c5.b=z
$.c5=z}},
nq:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bF
if(z==null){P.hm(a)
$.c6=$.c5
return}y=new P.fP(a)
x=$.c6
if(x==null){y.b=z
$.c6=y
$.bF=y}else{y.b=x.b
x.b=y
$.c6=y
if(y.b==null)$.c5=y}},
ob:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.a_
if(C.j===y){P.cY(null,null,C.j,a)
return}y.toString
P.cY(null,null,y,H.l(y.cu(a),z))},
fh:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.a_
if(y===C.j){y.toString
return P.dD(a,b)}return P.dD(a,H.l(y.cu(b),z))},
kw:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bx]}
H.l(b,z)
y=$.a_
if(y===C.j){y.toString
return P.fi(a,b)}x=y.dS(b,P.bx)
$.a_.toString
return P.fi(a,H.l(x,z))},
cX:function(a,b,c,d,e){var z={}
z.a=d
P.nq(new P.no(z,e))},
hi:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.a_
if(y===c)return d.$0()
$.a_=c
z=y
try{y=d.$0()
return y}finally{$.a_=z}},
hj:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.a_
if(y===c)return d.$1(e)
$.a_=c
z=y
try{y=d.$1(e)
return y}finally{$.a_=z}},
np:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.a_
if(y===c)return d.$2(e,f)
$.a_=c
z=y
try{y=d.$2(e,f)
return y}finally{$.a_=z}},
cY:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cu(d):c.i6(d,-1)
P.hm(d)},
ln:{"^":"m:31;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lm:{"^":"m:52;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lo:{"^":"m:0;a",
$0:function(){this.a.$0()}},
lp:{"^":"m:0;a",
$0:function(){this.a.$0()}},
h7:{"^":"b;a,0b,c",
fh:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bH(new P.mz(this,b),0),a)
else throw H.a(P.E("`setTimeout()` not found."))},
fi:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bH(new P.my(this,a,Date.now(),b),0),a)
else throw H.a(P.E("Periodic timer."))},
$isbx:1,
t:{
mw:function(a,b){var z=new P.h7(!0,0)
z.fh(a,b)
return z},
mx:function(a,b){var z=new P.h7(!1,0)
z.fi(a,b)
return z}}},
mz:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
my:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.f2(w,x)}z.c=y
this.d.$1(z)}},
bD:{"^":"b;0a,b,c,d,e,$ti",
iG:function(a){if(this.c!==6)return!0
return this.b.b.d2(H.l(this.d,{func:1,ret:P.V,args:[P.b]}),a.a,P.V,P.b)},
ix:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cu(z,{func:1,args:[P.b,P.aE]}))return H.dZ(w.j7(z,a.a,a.b,null,y,P.aE),x)
else return H.dZ(w.d2(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b5:{"^":"b;dI:a<,b,0hj:c<,$ti",
eI:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.a_
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.nn(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b5(0,$.a_,[c])
w=b==null?1:3
this.dl(new P.bD(x,w,a,b,[z,c]))
return x},
jd:function(a,b){return this.eI(a,null,b)},
dl:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbD")
this.c=a}else{if(z===2){y=H.e(this.c,"$isb5")
z=y.a
if(z<4){y.dl(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cY(null,null,z,H.l(new P.lF(this,a),{func:1,ret:-1}))}},
dE:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbD")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isb5")
y=u.a
if(y<4){u.dE(a)
return}this.a=y
this.c=u.c}z.a=this.bv(a)
y=this.b
y.toString
P.cY(null,null,y,H.l(new P.lK(z,this),{func:1,ret:-1}))}},
cj:function(){var z=H.e(this.c,"$isbD")
this.c=null
return this.bv(z)},
bv:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dq:function(a){var z,y,x,w
z=H.y(this,0)
H.dZ(a,{futureOr:1,type:z})
y=this.$ti
x=H.c8(a,"$isbO",y,"$asbO")
if(x){z=H.c8(a,"$isb5",y,null)
if(z)P.fT(a,this)
else P.lG(a,this)}else{w=this.cj()
H.B(a,z)
this.a=4
this.c=a
P.c1(this,w)}},
c5:[function(a,b){var z
H.e(b,"$isaE")
z=this.cj()
this.a=8
this.c=new P.at(a,b)
P.c1(this,z)},function(a){return this.c5(a,null)},"jm","$2","$1","gfq",4,2,51],
$isbO:1,
t:{
lG:function(a,b){var z,y,x
b.a=1
try{a.eI(new P.lH(b),new P.lI(b),null)}catch(x){z=H.ac(x)
y=H.bJ(x)
P.ob(new P.lJ(b,z,y))}},
fT:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isb5")
if(z>=4){y=b.cj()
b.a=a.a
b.c=a.c
P.c1(b,y)}else{y=H.e(b.c,"$isbD")
b.a=2
b.c=a
a.dE(y)}},
c1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isat")
y=y.b
u=v.a
t=v.b
y.toString
P.cX(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.c1(z.a,b)}y=z.a
r=y.c
x.a=w
x.b=r
u=!w
if(u){t=b.c
t=(t&1)!==0||t===8}else t=!0
if(t){t=b.b
q=t.b
if(w){p=y.b
p.toString
p=p==null?q==null:p===q
if(!p)q.toString
else p=!0
p=!p}else p=!1
if(p){H.e(r,"$isat")
y=y.b
u=r.a
t=r.b
y.toString
P.cX(null,null,y,u,t)
return}o=$.a_
if(o==null?q!=null:o!==q)$.a_=q
else o=null
y=b.c
if(y===8)new P.lN(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lM(x,b,r).$0()}else if((y&2)!==0)new P.lL(z,x,b).$0()
if(o!=null)$.a_=o
y=x.b
if(!!J.L(y).$isbO){if(y.a>=4){n=H.e(t.c,"$isbD")
t.c=null
b=t.bv(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fT(y,t)
return}}m=b.b
n=H.e(m.c,"$isbD")
m.c=null
b=m.bv(n)
y=x.a
u=x.b
if(!y){H.B(u,H.y(m,0))
m.a=4
m.c=u}else{H.e(u,"$isat")
m.a=8
m.c=u}z.a=m
y=m}}}},
lF:{"^":"m:0;a,b",
$0:function(){P.c1(this.a,this.b)}},
lK:{"^":"m:0;a,b",
$0:function(){P.c1(this.b,this.a.a)}},
lH:{"^":"m:31;a",
$1:function(a){var z=this.a
z.a=0
z.dq(a)}},
lI:{"^":"m:50;a",
$2:function(a,b){this.a.c5(a,H.e(b,"$isaE"))},
$1:function(a){return this.$2(a,null)}},
lJ:{"^":"m:0;a,b,c",
$0:function(){this.a.c5(this.b,this.c)}},
lN:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eG(H.l(w.d,{func:1}),null)}catch(v){y=H.ac(v)
x=H.bJ(v)
if(this.d){w=H.e(this.a.a.c,"$isat").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isat")
else u.b=new P.at(y,x)
u.a=!0
return}if(!!J.L(z).$isbO){if(z instanceof P.b5&&z.gdI()>=4){if(z.gdI()===8){w=this.b
w.b=H.e(z.ghj(),"$isat")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jd(new P.lO(t),null)
w.a=!1}}},
lO:{"^":"m:49;a",
$1:function(a){return this.a}},
lM:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.B(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.d2(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ac(t)
y=H.bJ(t)
x=this.a
x.b=new P.at(z,y)
x.a=!0}}},
lL:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isat")
w=this.c
if(w.iG(z)&&w.e!=null){v=this.b
v.b=w.ix(z)
v.a=!1}}catch(u){y=H.ac(u)
x=H.bJ(u)
w=H.e(this.a.a.c,"$isat")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.at(y,x)
s.a=!0}}},
fP:{"^":"b;a,0b"},
dz:{"^":"b;$ti",
gn:function(a){var z,y
z={}
y=new P.b5(0,$.a_,[P.n])
z.a=0
this.iE(new P.kj(z,this),!0,new P.kk(z,y),y.gfq())
return y}},
kj:{"^":"m;a,b",
$1:function(a){H.B(a,H.ap(this.b,"dz",0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.ap(this.b,"dz",0)]}}},
kk:{"^":"m:0;a,b",
$0:function(){this.b.dq(this.a.a)}},
fa:{"^":"b;$ti"},
ki:{"^":"b;"},
bx:{"^":"b;"},
at:{"^":"b;a,b",
j:function(a){return H.j(this.a)},
$isaa:1},
n1:{"^":"b;",$ispB:1},
no:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eY()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
m7:{"^":"n1;",
j8:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.a_){a.$0()
return}P.hi(null,null,this,a,-1)}catch(x){z=H.ac(x)
y=H.bJ(x)
P.cX(null,null,this,z,H.e(y,"$isaE"))}},
j9:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.j===$.a_){a.$1(b)
return}P.hj(null,null,this,a,b,-1,c)}catch(x){z=H.ac(x)
y=H.bJ(x)
P.cX(null,null,this,z,H.e(y,"$isaE"))}},
i6:function(a,b){return new P.m9(this,H.l(a,{func:1,ret:b}),b)},
cu:function(a){return new P.m8(this,H.l(a,{func:1,ret:-1}))},
dS:function(a,b){return new P.ma(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eG:function(a,b){H.l(a,{func:1,ret:b})
if($.a_===C.j)return a.$0()
return P.hi(null,null,this,a,b)},
d2:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a_===C.j)return a.$1(b)
return P.hj(null,null,this,a,b,c,d)},
j7:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a_===C.j)return a.$2(b,c)
return P.np(null,null,this,a,b,c,d,e,f)},
iY:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
m9:{"^":"m;a,b,c",
$0:function(){return this.a.eG(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
m8:{"^":"m:3;a,b",
$0:function(){return this.a.j8(this.b)}},
ma:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.j9(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
j_:function(a,b,c,d,e){return new H.bc(0,0,[d,e])},
j0:function(a,b,c){H.cb(a)
return H.t(H.nI(a,new H.bc(0,0,[b,c])),"$iseP",[b,c],"$aseP")},
dm:function(a,b){return new H.bc(0,0,[a,b])},
cl:function(a,b,c,d){return new P.lV(0,0,[d])},
iM:function(a,b,c){var z,y
if(P.dT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c7()
C.a.h(y,a)
try{P.nl(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fb(b,H.hD(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
df:function(a,b,c){var z,y,x
if(P.dT(a))return b+"..."+c
z=new P.as(b)
y=$.$get$c7()
C.a.h(y,a)
try{x=z
x.a=P.fb(x.gaO(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaO()+c
y=z.gaO()
return y.charCodeAt(0)==0?y:y},
dT:function(a){var z,y
for(z=0;y=$.$get$c7(),z<y.length;++z)if(a===y[z])return!0
return!1},
nl:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga0(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.j(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.G();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
j1:function(a,b,c){var z=P.j_(null,null,null,b,c)
a.M(0,new P.j2(z,b,c))
return z},
eQ:function(a,b){var z,y
z=P.cl(null,null,null,b)
for(y=J.b7(a);y.G();)z.h(0,H.B(y.gO(y),b))
return z},
dp:function(a){var z,y,x
z={}
if(P.dT(a))return"{...}"
y=new P.as("")
try{C.a.h($.$get$c7(),a)
x=y
x.a=x.gaO()+"{"
z.a=!0
J.e8(a,new P.j7(z,y))
z=y
z.a=z.gaO()+"}"}finally{z=$.$get$c7()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaO()
return z.charCodeAt(0)==0?z:z},
lV:{"^":"lP;a,0b,0c,0d,0e,0f,r,$ti",
ga0:function(a){var z=new P.fX(this,this.r,this.$ti)
z.c=this.e
return z},
gn:function(a){return this.a},
W:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscU")!=null}else{y=this.fs(b)
return y}},
fs:function(a){var z=this.d
if(z==null)return!1
return this.c8(this.dA(z,a),a)>=0},
h:function(a,b){var z,y
H.B(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dO()
this.b=z}return this.dm(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dO()
this.c=y}return this.dm(y,b)}else return this.fj(0,b)},
fj:function(a,b){var z,y,x
H.B(b,H.y(this,0))
z=this.d
if(z==null){z=P.dO()
this.d=z}y=this.dr(b)
x=z[y]
if(x==null)z[y]=[this.c4(b)]
else{if(this.c8(x,b)>=0)return!1
x.push(this.c4(b))}return!0},
I:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dF(this.c,b)
else return this.ha(0,b)},
ha:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dA(z,b)
x=this.c8(y,b)
if(x<0)return!1
this.dK(y.splice(x,1)[0])
return!0},
dm:function(a,b){H.B(b,H.y(this,0))
if(H.e(a[b],"$iscU")!=null)return!1
a[b]=this.c4(b)
return!0},
dF:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscU")
if(z==null)return!1
this.dK(z)
delete a[b]
return!0},
dn:function(){this.r=this.r+1&67108863},
c4:function(a){var z,y
z=new P.cU(H.B(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dn()
return z},
dK:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dn()},
dr:function(a){return J.cc(a)&0x3ffffff},
dA:function(a,b){return a[this.dr(b)]},
c8:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
t:{
dO:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cU:{"^":"b;a,0b,0c"},
fX:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aU(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.y(this,0))
this.c=z.b
return!0}}}},
lP:{"^":"k0;"},
j2:{"^":"m:7;a,b,c",
$2:function(a,b){this.a.l(0,H.B(a,this.b),H.B(b,this.c))}},
cI:{"^":"lW;",$isi:1,$isd:1},
z:{"^":"b;$ti",
ga0:function(a){return new H.dn(a,this.gn(a),0,[H.be(this,a,"z",0)])},
J:function(a,b){return this.i(a,b)},
jf:function(a,b){var z,y,x
z=H.c([],[H.be(this,a,"z",0)])
C.a.sn(z,this.gn(a))
y=0
while(!0){x=this.gn(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.l(z,y,this.i(a,y));++y}return z},
d3:function(a){return this.jf(a,!0)},
aH:function(a,b,c,d){var z
H.B(d,H.be(this,a,"z",0))
P.aY(b,c,this.gn(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
j:function(a){return P.df(a,"[","]")}},
eS:{"^":"am;"},
j7:{"^":"m:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
am:{"^":"b;$ti",
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.be(this,a,"am",0),H.be(this,a,"am",1)]})
for(z=J.b7(this.ga7(a));z.G();){y=z.gO(z)
b.$2(y,this.i(a,y))}},
gn:function(a){return J.aq(this.ga7(a))},
j:function(a){return P.dp(a)},
$isM:1},
mE:{"^":"b;$ti",
l:function(a,b,c){H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
throw H.a(P.E("Cannot modify unmodifiable map"))}},
j8:{"^":"b;$ti",
i:function(a,b){return J.e7(this.a,b)},
l:function(a,b,c){J.d4(this.a,H.B(b,H.y(this,0)),H.B(c,H.y(this,1)))},
M:function(a,b){J.e8(this.a,H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gn:function(a){return J.aq(this.a)},
j:function(a){return J.ad(this.a)},
$isM:1},
fE:{"^":"mF;a,$ti"},
k2:{"^":"b;$ti",
as:function(a,b){var z
for(z=J.b7(H.t(b,"$isi",this.$ti,"$asi"));z.G();)this.h(0,z.gO(z))},
j:function(a){return P.df(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ec("index"))
if(b<0)H.q(P.a6(b,0,null,"index",null))
for(z=new P.fX(this,this.r,this.$ti),z.c=this.e,y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.X(b,this,"index",null,y))},
$isi:1},
k0:{"^":"k2;"},
lW:{"^":"b+z;"},
mF:{"^":"j8+mE;$ti"}}],["","",,P,{"^":"",i2:{"^":"ce;a",
iI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aY(c,d,b.length,null,null,null)
z=$.$get$fR()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.d0(C.b.H(b,s))
o=H.d0(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.b.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.as("")
w.a+=C.b.v(b,x,y)
w.a+=H.bW(r)
x=s
continue}}throw H.a(P.a3("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.ef(b,u,d,v,t,k)
else{j=C.d.bo(k-1,4)+1
if(j===1)throw H.a(P.a3("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b4(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.ef(b,u,d,v,t,i)
else{j=C.d.bo(i,4)
if(j===1)throw H.a(P.a3("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b4(b,d,d,j===2?"==":"=")}return b},
$asce:function(){return[[P.d,P.n],P.h]},
t:{
ef:function(a,b,c,d,e,f){if(C.d.bo(f,4)!==0)throw H.a(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a3("Invalid base64 padding, more than two '=' characters",a,b))}}},i3:{"^":"b9;a",
$asb9:function(){return[[P.d,P.n],P.h]}},ce:{"^":"b;$ti"},b9:{"^":"ki;$ti"},iv:{"^":"ce;",
$asce:function(){return[P.h,[P.d,P.n]]}},iJ:{"^":"b;a,b,c,d,e",
j:function(a){return this.a}},iI:{"^":"b9;a",
ft:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.f(a,w)
switch(a[w]){case"&":u="&amp;"
break
case'"':u=z?"&quot;":null
break
case"'":u=x?"&#39;":null
break
case"<":u="&lt;"
break
case">":u="&gt;"
break
case"/":u=y?"&#47;":null
break
default:u=null}if(u!=null){if(v==null)v=new P.as("")
if(w>b)v.a+=C.b.v(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hY(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb9:function(){return[P.h,P.h]}},l0:{"^":"iv;a",
gim:function(){return C.L}},l7:{"^":"b9;",
bc:function(a,b,c){var z,y,x,w
z=a.length
P.aY(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.n_(0,0,x)
if(w.fA(a,b,z)!==z)w.dM(J.hQ(a,z-1),0)
return C.a2.c0(x,0,w.b)},
cC:function(a){return this.bc(a,0,null)},
$asb9:function(){return[P.h,[P.d,P.n]]}},n_:{"^":"b;a,b,c",
dM:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.f(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.f(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.f(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.f(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.f(z,y)
z[y]=128|a&63
return!1}},
fA:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dM(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.f(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.f(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.f(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.f(z,v)
z[v]=128|w&63}}return x}},l1:{"^":"b9;a",
bc:function(a,b,c){var z,y,x,w,v
H.t(a,"$isd",[P.n],"$asd")
z=P.l2(!1,a,b,c)
if(z!=null)return z
y=J.aq(a)
P.aY(b,c,y,null,null,null)
x=new P.as("")
w=new P.mX(!1,x,!0,0,0,0)
w.bc(a,b,y)
w.it(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cC:function(a){return this.bc(a,0,null)},
$asb9:function(){return[[P.d,P.n],P.h]},
t:{
l2:function(a,b,c,d){H.t(b,"$isd",[P.n],"$asd")
if(b instanceof Uint8Array)return P.l3(!1,b,c,d)
return},
l3:function(a,b,c,d){var z,y,x
z=$.$get$fJ()
if(z==null)return
y=0===c
if(y&&!0)return P.dI(z,b)
x=b.length
d=P.aY(c,d,x,null,null,null)
if(y&&d===x)return P.dI(z,b)
return P.dI(z,b.subarray(c,d))},
dI:function(a,b){if(P.l5(b))return
return P.l6(a,b)},
l6:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ac(y)}return},
l5:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
l4:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ac(y)}return}}},mX:{"^":"b;a,b,c,d,e,f",
it:function(a,b,c){var z
H.t(b,"$isd",[P.n],"$asd")
if(this.e>0){z=P.a3("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
bc:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.t(a,"$isd",[P.n],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mZ(c)
v=new P.mY(this,b,c,a)
$label0$0:for(u=J.az(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.bY()
if((r&192)!==128){q=P.a3("Bad UTF-8 encoding 0x"+C.d.bk(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.z,q)
if(z<=C.z[q]){q=P.a3("Overlong encoding of 0x"+C.d.bk(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a3("Character outside valid Unicode range: 0x"+C.d.bk(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bW(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.ag()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.K()
if(r<0){m=P.a3("Negative UTF-8 code unit: -0x"+C.d.bk(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a3("Bad UTF-8 encoding 0x"+C.d.bk(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mZ:{"^":"m:48;a",
$2:function(a,b){var z,y,x,w
H.t(a,"$isd",[P.n],"$asd")
z=this.a
for(y=J.az(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.bY()
if((w&127)!==w)return x-b}return z-b}},mY:{"^":"m:47;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cp(this.d,a,b)}}}],["","",,P,{"^":"",
cv:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jI(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a3(a,null,null))},
ix:function(a){var z=J.L(a)
if(!!z.$ism)return z.j(a)
return"Instance of '"+H.bq(a)+"'"},
j3:function(a,b,c,d){var z,y
H.B(b,d)
z=J.iO(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.t(z,"$isd",[d],"$asd")},
j4:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga0(a);x.G();)C.a.h(y,H.B(x.gO(x),c))
if(b)return y
return H.t(J.bP(y),"$isd",z,"$asd")},
cp:function(a,b,c){var z,y
z=P.n
H.t(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.t(a,"$isbm",[z],"$asbm")
y=a.length
c=P.aY(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.K()
z=c<y}else z=!0
return H.f1(z?C.a.c0(a,b,c):a)}if(!!J.L(a).$isdv)return H.jK(a,b,P.aY(b,c,a.length,null,null,null))
return P.kl(a,b,c)},
kl:function(a,b,c){var z,y,x,w
H.t(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a6(b,0,J.aq(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a6(c,b,J.aq(a),null,null))
y=J.b7(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a6(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gO(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a6(c,b,x,null,null))
w.push(y.gO(y))}return H.f1(w)},
jS:function(a,b,c){return new H.iQ(a,H.iR(a,!1,!0,!1))},
fG:function(){var z=H.jA()
if(z!=null)return P.kT(z,0,null)
throw H.a(P.E("'Uri.base' is not supported"))},
cD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ad(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ix(a)},
r:function(a){return new P.fS(a)},
j5:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sn(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
e3:function(a){H.o9(a)},
kT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.fF(b>0||c<c?C.b.v(a,b,c):a,5,null).geL()
else if(y===32)return P.fF(C.b.v(a,z,c),0,null).geL()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.l(w,0,0)
x=b-1
C.a.l(w,1,x)
C.a.l(w,2,x)
C.a.l(w,7,x)
C.a.l(w,3,b)
C.a.l(w,4,b)
C.a.l(w,5,c)
C.a.l(w,6,c)
if(P.hk(a,b,c,0,w)>=14)C.a.l(w,7,c)
v=w[1]
if(typeof v!=="number")return v.ji()
if(v>=b)if(P.hk(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.K()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.K()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.K()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.K()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.aa(a,"..",s)))n=r>s+2&&C.b.aa(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.aa(a,"file",b)){if(u<=b){if(!C.b.aa(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.v(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.b4(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.aa(a,"http",b)){if(x&&t+3===s&&C.b.aa(a,"80",t+1))if(b===0&&!0){a=C.b.b4(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.v(a,b,t)+C.b.v(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.aa(a,"https",b)){if(x&&t+4===s&&C.b.aa(a,"443",t+1))if(b===0&&!0){a=C.b.b4(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.v(a,b,t)+C.b.v(a,s,c)
v-=b
u-=b
t-=b
z=4+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="https"}else o=null
p=!0}}}else o=null
if(p){if(b>0||c<a.length){a=C.b.v(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.mg(a,v,u,t,s,r,q,o)}return P.mG(a,b,c,v,u,t,s,r,q,o)},
fI:function(a,b){var z=P.h
return C.a.iu(H.c(a.split("&"),[z]),P.dm(z,z),new P.kW(b),[P.M,P.h,P.h])},
kR:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kS(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a_(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cv(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.ag()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cv(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.ag()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kU(a)
y=new P.kV(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a_(a,w)
if(s===58){if(w===b){++w
if(C.b.a_(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaw(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kR(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.d.aS(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
ne:function(){var z,y,x,w,v
z=P.j5(22,new P.ng(),!0,P.U)
y=new P.nf(z)
x=new P.nh()
w=new P.ni()
v=H.e(y.$2(0,225),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isU")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isU")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isU"),"]",5)
v=H.e(y.$2(9,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isU"),"az",21)
v=H.e(y.$2(21,245),"$isU")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hk:function(a,b,c,d,e){var z,y,x,w,v
H.t(e,"$isd",[P.n],"$asd")
z=$.$get$hl()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
V:{"^":"b;"},
"+bool":0,
al:{"^":"b;a,b",
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&this.b===b.b},
aV:function(a,b){return C.d.aV(this.a,H.e(b,"$isal").a)},
gX:function(a){var z=this.a
return(z^C.d.aS(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.il(H.jH(this))
y=P.cf(H.jF(this))
x=P.cf(H.jB(this))
w=P.cf(H.jC(this))
v=P.cf(H.jE(this))
u=P.cf(H.jG(this))
t=P.im(H.jD(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isar:1,
$asar:function(){return[P.al]},
t:{
il:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
im:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cf:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"a4;"},
"+double":0,
aL:{"^":"b;a",
k:function(a,b){return new P.aL(C.d.ae(this.a*b))},
K:function(a,b){return C.d.K(this.a,H.e(b,"$isaL").a)},
ag:function(a,b){return C.d.ag(this.a,H.e(b,"$isaL").a)},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aL))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
aV:function(a,b){return C.d.aV(this.a,H.e(b,"$isaL").a)},
j:function(a){var z,y,x,w,v
z=new P.ir()
y=this.a
if(y<0)return"-"+new P.aL(0-y).j(0)
x=z.$1(C.d.a2(y,6e7)%60)
w=z.$1(C.d.a2(y,1e6)%60)
v=new P.iq().$1(y%1e6)
return""+C.d.a2(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
$isar:1,
$asar:function(){return[P.aL]},
t:{
eA:function(a,b,c,d,e,f){return new P.aL(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
iq:{"^":"m:27;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ir:{"^":"m:27;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
aa:{"^":"b;"},
eY:{"^":"aa;",
j:function(a){return"Throw of null."}},
aI:{"^":"aa;a,b,c,d",
gc7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc6:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gc7()+y+x
if(!this.a)return w
v=this.gc6()
u=P.cD(this.b)
return w+v+": "+H.j(u)},
t:{
cd:function(a){return new P.aI(!1,null,null,a)},
cy:function(a,b,c){return new P.aI(!0,a,b,c)},
ec:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
cM:{"^":"aI;e,f,a,b,c,d",
gc7:function(){return"RangeError"},
gc6:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
cn:function(a,b,c){return new P.cM(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.cM(b,c,!0,a,d,"Invalid value")},
aY:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a6(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a6(b,a,c,"end",f))
return b}return c}}},
iK:{"^":"aI;e,n:f>,a,b,c,d",
gc7:function(){return"RangeError"},
gc6:function(){if(J.hM(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
X:function(a,b,c,d,e){var z=H.G(e!=null?e:J.aq(b))
return new P.iK(b,z,!0,a,c,"Index out of range")}}},
kP:{"^":"aa;a",
j:function(a){return"Unsupported operation: "+this.a},
t:{
E:function(a){return new P.kP(a)}}},
kM:{"^":"aa;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
cq:function(a){return new P.kM(a)}}},
dy:{"^":"aa;a",
j:function(a){return"Bad state: "+this.a},
t:{
f9:function(a){return new P.dy(a)}}},
ic:{"^":"aa;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cD(z))+"."},
t:{
aU:function(a){return new P.ic(a)}}},
jv:{"^":"b;",
j:function(a){return"Out of Memory"},
$isaa:1},
f7:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isaa:1},
ij:{"^":"aa;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fS:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
iE:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.v(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.H(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.a_(w,s)
if(r===10||r===13){q=s
break}}if(q-u>78)if(x-u<75){p=u+75
o=u
n=""
m="..."}else{if(q-x<75){o=q-75
p=q
m=""}else{o=x-36
p=x+36
m="..."}n="..."}else{p=q
o=u
n=""
m=""}l=C.b.v(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
t:{
a3:function(a,b,c){return new P.iE(a,b,c)}}},
cg:{"^":"b;"},
n:{"^":"a4;"},
"+int":0,
i:{"^":"b;$ti",
d6:["eZ",function(a,b){var z=H.ap(this,"i",0)
return new H.dL(this,H.l(b,{func:1,ret:P.V,args:[z]}),[z])}],
gn:function(a){var z,y
z=this.ga0(this)
for(y=0;z.G();)++y
return y},
gaJ:function(a){var z,y
z=this.ga0(this)
if(!z.G())throw H.a(H.dg())
y=z.gO(z)
if(z.G())throw H.a(H.iN())
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ec("index"))
if(b<0)H.q(P.a6(b,0,null,"index",null))
for(z=this.ga0(this),y=0;z.G();){x=z.gO(z)
if(b===y)return x;++y}throw H.a(P.X(b,this,"index",null,y))},
j:function(a){return P.iM(this,"(",")")}},
dh:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
M:{"^":"b;$ti"},
N:{"^":"b;",
gX:function(a){return P.b.prototype.gX.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
a4:{"^":"b;",$isar:1,
$asar:function(){return[P.a4]}},
"+num":0,
b:{"^":";",
w:function(a,b){return this===b},
gX:function(a){return H.bV(this)},
j:function(a){return"Instance of '"+H.bq(this)+"'"},
toString:function(){return this.j(this)}},
aE:{"^":"b;"},
h:{"^":"b;",$isar:1,
$asar:function(){return[P.h]},
$iseZ:1},
"+String":0,
as:{"^":"b;aO:a<",
gn:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispl:1,
t:{
fb:function(a,b,c){var z=J.b7(b)
if(!z.G())return a
if(c.length===0){do a+=H.j(z.gO(z))
while(z.G())}else{a+=H.j(z.gO(z))
for(;z.G();)a=a+c+H.j(z.gO(z))}return a}}},
kW:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.t(a,"$isM",[z,z],"$asM")
H.I(b)
y=J.az(b).eo(b,"=")
if(y===-1){if(b!=="")J.d4(a,P.dQ(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.ao(b,y+1)
z=this.a
J.d4(a,P.dQ(x,0,x.length,z,!0),P.dQ(w,0,w.length,z,!0))}return a}},
kS:{"^":"m:45;a",
$2:function(a,b){throw H.a(P.a3("Illegal IPv4 address, "+a,this.a,b))}},
kU:{"^":"m:44;a",
$2:function(a,b){throw H.a(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kV:{"^":"m:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cv(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.K()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cV:{"^":"b;c_:a<,b,c,d,eB:e>,f,r,0x,0y,0z,0Q,0ch",
geM:function(){return this.b},
gcN:function(a){var z=this.c
if(z==null)return""
if(C.b.a4(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbS:function(a){var z=this.d
if(z==null)return P.h9(this.a)
return z},
gcZ:function(a){var z=this.f
return z==null?"":z},
gej:function(){var z=this.r
return z==null?"":z},
d1:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.t(h,"$isM",[P.h,null],"$asM")
i=this.a
z=i==="file"
j=this.b
f=this.d
y=this.c
if(y!=null)c=y
else if(j.length!==0||f!=null||z)c=""
d=this.e
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.dP(g,0,0,h)
return new P.cV(i,j,c,f,d,g,this.r)},
eF:function(a,b){return this.d1(a,null,null,null,null,null,null,b,null,null)},
gd_:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.fE(P.fI(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gek:function(){return this.c!=null},
gen:function(){return this.f!=null},
gel:function(){return this.r!=null},
j:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.j(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.j(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.j(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
w:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdH){y=this.a
x=b.gc_()
if(y==null?x==null:y===x)if(this.c!=null===b.gek()){y=this.b
x=b.geM()
if(y==null?x==null:y===x){y=this.gcN(this)
x=z.gcN(b)
if(y==null?x==null:y===x){y=this.gbS(this)
x=z.gbS(b)
if(y==null?x==null:y===x)if(this.e===z.geB(b)){y=this.f
x=y==null
if(!x===b.gen()){if(x)y=""
if(y===z.gcZ(b)){z=this.r
y=z==null
if(!y===b.gel()){if(y)z=""
z=z===b.gej()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gX:function(a){var z=this.z
if(z==null){z=C.b.gX(this.j(0))
this.z=z}return z},
$isdH:1,
t:{
ct:function(a,b,c,d){var z,y,x,w,v,u
H.t(a,"$isd",[P.n],"$asd")
if(c===C.k){z=$.$get$he().b
if(typeof b!=="string")H.q(H.a9(b))
z=z.test(b)}else z=!1
if(z)return b
H.B(b,H.ap(c,"ce",0))
y=c.gim().cC(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bW(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mG:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mR(a,b,d)
else{if(d===b)P.c2(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mS(a,z,e-1):""
x=P.mL(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.mO(P.cv(C.b.v(a,w,g),new P.mH(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mM(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.K()
t=h<i?P.dP(a,h+1,i,null):null
return new P.cV(j,y,x,v,u,t,i<c?P.mK(a,i+1,c):null)},
h9:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c2:function(a,b,c){throw H.a(P.a3(c,a,b))},
mO:function(a,b){if(a!=null&&a===P.h9(b))return
return a},
mL:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.b.a_(a,z)!==93)P.c2(a,b,"Missing end `]` to match `[` in host")
P.fH(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.a_(a,y)===58){P.fH(a,b,c)
return"["+a+"]"}return P.mU(a,b,c)},
mU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a_(a,z)
if(v===37){u=P.hg(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.as("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.C,t)
t=(C.C[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.as("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.c2(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a_(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.as("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.ha(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mR:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hc(C.b.H(a,b)))P.c2(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.c2(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.mI(y?a.toLowerCase():a)},
mI:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mS:function(a,b,c){return P.c3(a,b,c,C.a_)},
mM:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c3(a,b,c,C.D):C.w.jX(d,new P.mN(),P.h).p(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a4(w,"/"))w="/"+w
return P.mT(w,e,f)},
mT:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a4(a,"/"))return P.mV(a,!z||c)
return P.mW(a)},
dP:function(a,b,c,d){var z,y
z={}
H.t(d,"$isM",[P.h,null],"$asM")
if(a!=null){if(d!=null)throw H.a(P.cd("Both query and queryParameters specified"))
return P.c3(a,b,c,C.n)}if(d==null)return
y=new P.as("")
z.a=""
d.M(0,new P.mP(new P.mQ(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mK:function(a,b,c){return P.c3(a,b,c,C.n)},
hg:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a_(a,b+1)
x=C.b.a_(a,z)
w=H.d0(y)
v=H.d0(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aS(u,4)
if(z>=8)return H.f(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bW(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
ha:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.l(y,0,37)
C.a.l(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.d.hw(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.cp(y,0,null)},
c3:function(a,b,c,d){var z=P.hf(a,b,c,H.t(d,"$isd",[P.n],"$asd"),!1)
return z==null?C.b.v(a,b,c):z},
hf:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.t(d,"$isd",[P.n],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.K()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.a_(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hg(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.c2(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a_(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.ha(v)}}if(w==null)w=new P.as("")
w.a+=C.b.v(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.K()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hd:function(a){if(C.b.a4(a,"."))return!0
return C.b.eo(a,"/.")!==-1},
mW:function(a){var z,y,x,w,v,u,t
if(!P.hd(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.J(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.p(z,"/")},
mV:function(a,b){var z,y,x,w,v,u
if(!P.hd(a))return!b?P.hb(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaw(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaw(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.l(z,0,P.hb(z[0]))}return C.a.p(z,"/")},
hb:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hc(J.hN(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.ao(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mJ:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cd("Invalid URL encoding"))}}return z},
dQ:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.ca(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.w(y.v(a,b,c))}else{u=H.c([],[P.n])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.cd("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cd("Truncated URI"))
C.a.h(u,P.mJ(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.t(u,"$isd",[P.n],"$asd")
return new P.l1(!1).cC(u)},
hc:function(a){var z=a|32
return 97<=z&&z<=122}}},
mH:{"^":"m:42;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.a3("Invalid port",this.a,z+1))}},
mN:{"^":"m:19;",
$1:function(a){return P.ct(C.a0,a,C.k,!1)}},
mQ:{"^":"m:17;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.ct(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.ct(C.p,b,C.k,!0))}}},
mP:{"^":"m:40;a",
$2:function(a,b){var z,y
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(z=J.b7(H.hD(b,"$isi")),y=this.a;z.G();)y.$2(a,H.I(z.gO(z)))}},
kQ:{"^":"b;a,b,c",
geL:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.ep(y,"?",z)
w=y.length
if(x>=0){v=P.c3(y,x+1,w,C.n)
w=x}else v=null
z=new P.lu(this,"data",null,null,null,P.c3(y,z,w,C.D),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fF:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a3("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a3("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaw(z)
if(v!==44||x!==t+7||!C.b.aa(a,"base64",t+1))throw H.a(P.a3("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.iI(0,a,s,y)
else{r=P.hf(a,s,y,C.n,!0)
if(r!=null)a=C.b.b4(a,s,y,r)}return new P.kQ(a,z,c)}}},
ng:{"^":"m:37;",
$1:function(a){return new Uint8Array(96)}},
nf:{"^":"m:36;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hS(z,0,96,b)
return z}},
nh:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
ni:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mg:{"^":"b;a,b,c,d,e,f,r,x,0y",
gek:function(){return this.c>0},
gem:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gen:function(){var z=this.f
if(typeof z!=="number")return z.K()
return z<this.r},
gel:function(){return this.r<this.a.length},
gdB:function(){return this.b===4&&C.b.a4(this.a,"http")},
gdC:function(){return this.b===5&&C.b.a4(this.a,"https")},
gc_:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdB()){this.x="http"
z="http"}else if(this.gdC()){this.x="https"
z="https"}else if(z===4&&C.b.a4(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a4(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
geM:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcN:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbS:function(a){var z
if(this.gem()){z=this.d
if(typeof z!=="number")return z.B()
return P.cv(C.b.v(this.a,z+1,this.e),null,null)}if(this.gdB())return 80
if(this.gdC())return 443
return 0},
geB:function(a){return C.b.v(this.a,this.e,this.f)},
gcZ:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.K()
return z<y?C.b.v(this.a,z+1,y):""},
gej:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ao(y,z+1):""},
gd_:function(){var z=this.f
if(typeof z!=="number")return z.K()
if(z>=this.r)return C.a1
z=P.h
return new P.fE(P.fI(this.gcZ(this),C.k),[z,z])},
d1:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.t(h,"$isM",[P.h,null],"$asM")
i=this.gc_()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gem()?this.gbS(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.dP(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ao(y,x+1)
return new P.cV(i,j,c,f,d,g,b)},
eF:function(a,b){return this.d1(a,null,null,null,null,null,null,b,null,null)},
gX:function(a){var z=this.y
if(z==null){z=C.b.gX(this.a)
this.y=z}return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdH)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isdH:1},
lu:{"^":"cV;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
eb:function(a){var z=document.createElement("a")
return z},
db:function(a,b){var z=document.createElement("canvas")
return z},
is:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).ak(z,a,b,c)
y.toString
z=W.H
z=new H.dL(new W.ay(y),H.l(new W.it(),{func:1,ret:P.V,args:[z]}),[z])
return H.e(z.gaJ(z),"$isW")},
iu:function(a){H.e(a,"$isag")
return"wheel"},
bN:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hV(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ac(x)}return z},
iL:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$iseI")
try{J.hX(z,a)}catch(x){H.ac(x)}return z},
cS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fW:function(a,b,c,d){var z,y
z=W.cS(W.cS(W.cS(W.cS(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ho:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.a_
if(z===C.j)return a
return z.dS(a,b)},
a1:{"^":"W;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ol:{"^":"v;0n:length=","%":"AccessibleNodeList"},
om:{"^":"a1;0a3:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
on:{"^":"a1;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
eg:{"^":"a1;",$iseg:1,"%":"HTMLBaseElement"},
d7:{"^":"v;",$isd7:1,"%":";Blob"},
cz:{"^":"a1;",$iscz:1,"%":"HTMLBodyElement"},
ot:{"^":"a1;0a3:type}","%":"HTMLButtonElement"},
da:{"^":"a1;",
bZ:function(a,b,c){if(c!=null)return a.getContext(b,P.nv(c,null))
return a.getContext(b)},
eQ:function(a,b){return this.bZ(a,b,null)},
$isda:1,
"%":"HTMLCanvasElement"},
en:{"^":"v;",$isen:1,"%":"CanvasRenderingContext2D"},
ov:{"^":"H;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ox:{"^":"ii;0n:length=","%":"CSSPerspective"},
bh:{"^":"v;",$isbh:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oy:{"^":"lt;0n:length=",
eR:function(a,b){var z=a.getPropertyValue(this.fn(a,b))
return z==null?"":z},
fn:function(a,b){var z,y
z=$.$get$es()
y=z[b]
if(typeof y==="string")return y
y=this.hx(a,b)
z[b]=y
return y},
hx:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.io()+b
if(z in a)return z
return b},
gcv:function(a){return a.bottom},
gav:function(a){return a.height},
gb_:function(a){return a.left},
gbi:function(a){return a.right},
gbl:function(a){return a.top},
gaz:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ih:{"^":"b;",
gb_:function(a){return this.eR(a,"left")}},
et:{"^":"v;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ii:{"^":"v;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
oz:{"^":"et;0n:length=","%":"CSSTransformValue"},
oA:{"^":"et;0n:length=","%":"CSSUnparsedValue"},
oB:{"^":"v;0n:length=","%":"DataTransferItemList"},
bi:{"^":"a1;",$isbi:1,"%":"HTMLDivElement"},
oC:{"^":"v;",
j:function(a){return String(a)},
"%":"DOMException"},
oD:{"^":"lw;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.t(c,"$isae",[P.a4],"$asae")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[[P.ae,P.a4]]},
$asz:function(){return[[P.ae,P.a4]]},
$isi:1,
$asi:function(){return[[P.ae,P.a4]]},
$isd:1,
$asd:function(){return[[P.ae,P.a4]]},
$asF:function(){return[[P.ae,P.a4]]},
"%":"ClientRectList|DOMRectList"},
ip:{"^":"v;",
j:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaz(a))+" x "+H.j(this.gav(a))},
w:function(a,b){var z
if(b==null)return!1
z=H.c8(b,"$isae",[P.a4],"$asae")
if(!z)return!1
z=J.aG(b)
return a.left===z.gb_(b)&&a.top===z.gbl(b)&&this.gaz(a)===z.gaz(b)&&this.gav(a)===z.gav(b)},
gX:function(a){return W.fW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaz(a)&0x1FFFFFFF,this.gav(a)&0x1FFFFFFF)},
gcv:function(a){return a.bottom},
gav:function(a){return a.height},
gb_:function(a){return a.left},
gbi:function(a){return a.right},
gbl:function(a){return a.top},
gaz:function(a){return a.width},
$isae:1,
$asae:function(){return[P.a4]},
"%":";DOMRectReadOnly"},
oE:{"^":"ly;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.I(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[P.h]},
$asz:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asF:function(){return[P.h]},
"%":"DOMStringList"},
oF:{"^":"v;0n:length=","%":"DOMTokenList"},
ls:{"^":"cI;dw:a<,b",
gn:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isW")},
l:function(a,b,c){var z
H.G(b)
H.e(c,"$isW")
z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga0:function(a){var z=this.d3(this)
return new J.aJ(z,z.length,0,[H.y(z,0)])},
aH:function(a,b,c,d){throw H.a(P.cq(null))},
$asz:function(){return[W.W]},
$asi:function(){return[W.W]},
$asd:function(){return[W.W]}},
W:{"^":"H;0ja:tagName=",
gi5:function(a){return new W.lz(a)},
gcB:function(a){return new W.ls(a,a.children)},
gdU:function(a){return P.jO(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a4)},
j:function(a){return a.localName},
ak:["c1",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eD
if(z==null){z=H.c([],[W.aO])
y=new W.eW(z)
C.a.h(z,W.fU(null))
C.a.h(z,W.h4())
$.eD=y
d=y}else d=z
z=$.eC
if(z==null){z=new W.hh(d)
$.eC=z
c=z}else{z.a=d
c=z}}if($.aV==null){z=document
y=z.implementation.createHTMLDocument("")
$.aV=y
$.de=y.createRange()
y=$.aV
y.toString
y=y.createElement("base")
H.e(y,"$iseg")
y.href=z.baseURI
$.aV.head.appendChild(y)}z=$.aV
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$iscz")}z=$.aV
if(!!this.$iscz)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aV.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.Z,a.tagName)){$.de.selectNodeContents(x)
w=$.de.createContextualFragment(b)}else{x.innerHTML=b
w=$.aV.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aV.body
if(x==null?z!=null:x!==z)J.ea(x)
c.dc(w)
document.adoptNode(w)
return w},function(a,b,c){return this.ak(a,b,c,null)},"ie",null,null,"gjU",5,5,null],
eV:function(a,b,c,d){a.textContent=null
a.appendChild(this.ak(a,b,c,d))},
eU:function(a,b){return this.eV(a,b,null,null)},
$isW:1,
"%":";Element"},
it:{"^":"m:24;",
$1:function(a){return!!J.L(H.e(a,"$isH")).$isW}},
oG:{"^":"a1;0a3:type}","%":"HTMLEmbedElement"},
af:{"^":"v;",$isaf:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ag:{"^":"v;",
dO:["eX",function(a,b,c,d){H.l(c,{func:1,args:[W.af]})
if(c!=null)this.fk(a,b,c,!1)}],
fk:function(a,b,c,d){return a.addEventListener(b,H.bH(H.l(c,{func:1,args:[W.af]}),1),!1)},
$isag:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;h1|h2|h5|h6"},
bb:{"^":"d7;",$isbb:1,"%":"File"},
eE:{"^":"lE;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbb")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bb]},
$asz:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$iseE:1,
$asF:function(){return[W.bb]},
"%":"FileList"},
oH:{"^":"ag;0n:length=","%":"FileWriter"},
oI:{"^":"a1;0n:length=","%":"HTMLFormElement"},
bl:{"^":"v;",$isbl:1,"%":"Gamepad"},
oJ:{"^":"v;0n:length=","%":"History"},
oK:{"^":"lR;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.H]},
$asz:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$isd:1,
$asd:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ch:{"^":"v;0dV:data=",$isch:1,"%":"ImageData"},
eH:{"^":"a1;",$iseH:1,"%":"HTMLImageElement"},
eI:{"^":"a1;0a3:type}",$iseI:1,"%":"HTMLInputElement"},
bQ:{"^":"dE;",$isbQ:1,"%":"KeyboardEvent"},
oP:{"^":"a1;0a3:type}","%":"HTMLLinkElement"},
oQ:{"^":"v;",
j:function(a){return String(a)},
"%":"Location"},
oR:{"^":"v;0n:length=","%":"MediaList"},
oS:{"^":"ag;",
dO:function(a,b,c,d){H.l(c,{func:1,args:[W.af]})
if(b==="message")a.start()
this.eX(a,b,c,!1)},
"%":"MessagePort"},
oT:{"^":"lX;",
i:function(a,b){return P.b6(a.get(H.I(b)))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b6(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.M(a,new W.jl(z))
return z},
gn:function(a){return a.size},
l:function(a,b,c){throw H.a(P.E("Not supported"))},
$asam:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"MIDIInputMap"},
jl:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oU:{"^":"lY;",
i:function(a,b){return P.b6(a.get(H.I(b)))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b6(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.M(a,new W.jm(z))
return z},
gn:function(a){return a.size},
l:function(a,b,c){throw H.a(P.E("Not supported"))},
$asam:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
jm:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bo:{"^":"v;",$isbo:1,"%":"MimeType"},
oV:{"^":"m_;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbo")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bo]},
$asz:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asF:function(){return[W.bo]},
"%":"MimeTypeArray"},
aC:{"^":"dE;",$isaC:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ay:{"^":"cI;a",
gaJ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.f9("No elements"))
if(y>1)throw H.a(P.f9("More than one element"))
return z.firstChild},
as:function(a,b){var z,y,x,w
H.t(b,"$isi",[W.H],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
l:function(a,b,c){var z,y
H.G(b)
H.e(c,"$isH")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.f(y,b)
z.replaceChild(c,y[b])},
ga0:function(a){var z=this.a.childNodes
return new W.eF(z,z.length,-1,[H.be(C.a3,z,"F",0)])},
aH:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on Node list"))},
gn:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asz:function(){return[W.H]},
$asi:function(){return[W.H]},
$asd:function(){return[W.H]}},
H:{"^":"ag;0cY:previousSibling=",
iZ:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
j3:function(a,b){var z,y
try{z=a.parentNode
J.hO(z,b,a)}catch(y){H.ac(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.eY(a):z},
hd:function(a,b,c){return a.replaceChild(b,c)},
$isH:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
p1:{"^":"v;",
iW:[function(a){return a.previousNode()},"$0","gcY",1,0,26],
"%":"NodeIterator"},
jq:{"^":"m1;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.H]},
$asz:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$isd:1,
$asd:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"NodeList|RadioNodeList"},
p4:{"^":"a1;0a3:type}","%":"HTMLOListElement"},
p5:{"^":"a1;0a3:type}","%":"HTMLObjectElement"},
bp:{"^":"v;0n:length=",$isbp:1,"%":"Plugin"},
p8:{"^":"m5;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbp")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bp]},
$asz:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asF:function(){return[W.bp]},
"%":"PluginArray"},
pa:{"^":"v;0a3:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
pb:{"^":"mb;",
i:function(a,b){return P.b6(a.get(H.I(b)))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b6(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.M(a,new W.jY(z))
return z},
gn:function(a){return a.size},
l:function(a,b,c){throw H.a(P.E("Not supported"))},
$asam:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"RTCStatsReport"},
jY:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pd:{"^":"a1;0a3:type}","%":"HTMLScriptElement"},
pe:{"^":"a1;0n:length=","%":"HTMLSelectElement"},
br:{"^":"ag;",$isbr:1,"%":"SourceBuffer"},
pf:{"^":"h2;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbr")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.br]},
$asz:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asF:function(){return[W.br]},
"%":"SourceBufferList"},
pg:{"^":"a1;0a3:type}","%":"HTMLSourceElement"},
bs:{"^":"v;",$isbs:1,"%":"SpeechGrammar"},
ph:{"^":"mi;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbs")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bs]},
$asz:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asF:function(){return[W.bs]},
"%":"SpeechGrammarList"},
bt:{"^":"v;0n:length=",$isbt:1,"%":"SpeechRecognitionResult"},
pj:{"^":"ml;",
i:function(a,b){return a.getItem(H.I(b))},
l:function(a,b,c){a.setItem(b,H.I(c))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga7:function(a){var z=H.c([],[P.h])
this.M(a,new W.kh(z))
return z},
gn:function(a){return a.length},
$asam:function(){return[P.h,P.h]},
$isM:1,
$asM:function(){return[P.h,P.h]},
"%":"Storage"},
kh:{"^":"m:17;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pm:{"^":"a1;0a3:type}","%":"HTMLStyleElement"},
bu:{"^":"v;",$isbu:1,"%":"CSSStyleSheet|StyleSheet"},
dA:{"^":"a1;",$isdA:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
km:{"^":"a1;",
ak:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
z=W.is("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ay(y).as(0,new W.ay(z))
return y},
"%":"HTMLTableElement"},
po:{"^":"a1;",
ak:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.ak(z.createElement("table"),b,c,d)
z.toString
z=new W.ay(z)
x=z.gaJ(z)
x.toString
z=new W.ay(x)
w=z.gaJ(z)
y.toString
w.toString
new W.ay(y).as(0,new W.ay(w))
return y},
"%":"HTMLTableRowElement"},
pp:{"^":"a1;",
ak:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.ak(z.createElement("table"),b,c,d)
z.toString
z=new W.ay(z)
x=z.gaJ(z)
y.toString
x.toString
new W.ay(y).as(0,new W.ay(x))
return y},
"%":"HTMLTableSectionElement"},
fe:{"^":"a1;",$isfe:1,"%":"HTMLTemplateElement"},
bv:{"^":"ag;",$isbv:1,"%":"TextTrack"},
bw:{"^":"ag;",$isbw:1,"%":"TextTrackCue|VTTCue"},
pr:{"^":"mv;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbw")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bw]},
$asz:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asF:function(){return[W.bw]},
"%":"TextTrackCueList"},
ps:{"^":"h6;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbv")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bv]},
$asz:function(){return[W.bv]},
$isi:1,
$asi:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$asF:function(){return[W.bv]},
"%":"TextTrackList"},
pt:{"^":"v;0n:length=","%":"TimeRanges"},
by:{"^":"v;",$isby:1,"%":"Touch"},
bz:{"^":"dE;",$isbz:1,"%":"TouchEvent"},
pu:{"^":"mB;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isby")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.by]},
$asz:function(){return[W.by]},
$isi:1,
$asi:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$asF:function(){return[W.by]},
"%":"TouchList"},
pv:{"^":"v;0n:length=","%":"TrackDefaultList"},
px:{"^":"v;",
iW:[function(a){return a.previousNode()},"$0","gcY",1,0,26],
"%":"TreeWalker"},
dE:{"^":"af;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pz:{"^":"v;",
j:function(a){return String(a)},
"%":"URL"},
pA:{"^":"ag;0n:length=","%":"VideoTrackList"},
c0:{"^":"aC;",
gii:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.E("deltaY is not supported"))},
gih:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.E("deltaX is not supported"))},
$isc0:1,
"%":"WheelEvent"},
lk:{"^":"ag;",
hf:function(a,b){return a.requestAnimationFrame(H.bH(H.l(b,{func:1,ret:-1,args:[P.a4]}),1))},
fz:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fQ:{"^":"H;",$isfQ:1,"%":"Attr"},
pF:{"^":"n3;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbh")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bh]},
$asz:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asF:function(){return[W.bh]},
"%":"CSSRuleList"},
pG:{"^":"ip;",
j:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
w:function(a,b){var z
if(b==null)return!1
z=H.c8(b,"$isae",[P.a4],"$asae")
if(!z)return!1
z=J.aG(b)
return a.left===z.gb_(b)&&a.top===z.gbl(b)&&a.width===z.gaz(b)&&a.height===z.gav(b)},
gX:function(a){return W.fW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gav:function(a){return a.height},
gaz:function(a){return a.width},
"%":"ClientRect|DOMRect"},
pI:{"^":"n5;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbl")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bl]},
$asz:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$isd:1,
$asd:function(){return[W.bl]},
$asF:function(){return[W.bl]},
"%":"GamepadList"},
pL:{"^":"n7;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.H]},
$asz:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$isd:1,
$asd:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pM:{"^":"n9;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbt")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bt]},
$asz:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asF:function(){return[W.bt]},
"%":"SpeechRecognitionResultList"},
pN:{"^":"nb;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbu")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bu]},
$asz:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asF:function(){return[W.bu]},
"%":"StyleSheetList"},
lq:{"^":"eS;dw:a<",
M:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.ga7(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga7:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfQ")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asam:function(){return[P.h,P.h]},
$asM:function(){return[P.h,P.h]}},
lz:{"^":"lq;a",
i:function(a,b){return this.a.getAttribute(H.I(b))},
l:function(a,b,c){this.a.setAttribute(b,H.I(c))},
gn:function(a){return this.ga7(this).length}},
lA:{"^":"dz;a,b,c,$ti",
iE:function(a,b,c,d){var z=H.y(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a7(this.a,this.b,a,!1,z)}},
pH:{"^":"lA;a,b,c,$ti"},
lB:{"^":"fa;a,b,c,d,e,$ti",
hB:function(){var z=this.d
if(z!=null&&this.a<=0)J.hP(this.b,this.c,z,!1)},
t:{
a7:function(a,b,c,d,e){var z=c==null?null:W.ho(new W.lC(c),W.af)
z=new W.lB(0,a,b,z,!1,[e])
z.hB()
return z}}},
lC:{"^":"m:9;a",
$1:function(a){return this.a.$1(H.e(a,"$isaf"))}},
cs:{"^":"b;a",
fc:function(a){var z,y
z=$.$get$dN()
if(z.giB(z)){for(y=0;y<262;++y)z.l(0,C.Y[y],W.nK())
for(y=0;y<12;++y)z.l(0,C.t[y],W.nL())}},
aT:function(a){return $.$get$fV().W(0,W.bN(a))},
aE:function(a,b,c){var z,y,x
z=W.bN(a)
y=$.$get$dN()
x=y.i(0,H.j(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.dU(x.$4(a,b,c,this))},
$isaO:1,
t:{
fU:function(a){var z,y
z=W.eb(null)
y=window.location
z=new W.cs(new W.mc(z,y))
z.fc(a)
return z},
pJ:[function(a,b,c,d){H.e(a,"$isW")
H.I(b)
H.I(c)
H.e(d,"$iscs")
return!0},"$4","nK",16,0,21],
pK:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isW")
H.I(b)
H.I(c)
z=H.e(d,"$iscs").a
y=z.a
y.href=c
x=y.hostname
z=z.b
w=z.hostname
if(x==null?w==null:x===w){w=y.port
v=z.port
if(w==null?v==null:w===v){w=y.protocol
z=z.protocol
z=w==null?z==null:w===z}else z=!1}else z=!1
if(!z)if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","nL",16,0,21]}},
F:{"^":"b;$ti",
ga0:function(a){return new W.eF(a,this.gn(a),-1,[H.be(this,a,"F",0)])},
aH:function(a,b,c,d){H.B(d,H.be(this,a,"F",0))
throw H.a(P.E("Cannot modify an immutable List."))}},
eW:{"^":"b;a",
aT:function(a){return C.a.dQ(this.a,new W.js(a))},
aE:function(a,b,c){return C.a.dQ(this.a,new W.jr(a,b,c))},
$isaO:1},
js:{"^":"m:28;a",
$1:function(a){return H.e(a,"$isaO").aT(this.a)}},
jr:{"^":"m:28;a,b,c",
$1:function(a){return H.e(a,"$isaO").aE(this.a,this.b,this.c)}},
md:{"^":"b;",
ff:function(a,b,c,d){var z,y,x
this.a.as(0,c)
z=b.d6(0,new W.me())
y=b.d6(0,new W.mf())
this.b.as(0,z)
x=this.c
x.as(0,C.A)
x.as(0,y)},
aT:function(a){return this.a.W(0,W.bN(a))},
aE:["f1",function(a,b,c){var z,y
z=W.bN(a)
y=this.c
if(y.W(0,H.j(z)+"::"+b))return this.d.i3(c)
else if(y.W(0,"*::"+b))return this.d.i3(c)
else{y=this.b
if(y.W(0,H.j(z)+"::"+b))return!0
else if(y.W(0,"*::"+b))return!0
else if(y.W(0,H.j(z)+"::*"))return!0
else if(y.W(0,"*::*"))return!0}return!1}],
$isaO:1},
me:{"^":"m:16;",
$1:function(a){return!C.a.W(C.t,H.I(a))}},
mf:{"^":"m:16;",
$1:function(a){return C.a.W(C.t,H.I(a))}},
ms:{"^":"md;e,a,b,c,d",
aE:function(a,b,c){if(this.f1(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1},
t:{
h4:function(){var z,y,x,w,v
z=P.h
y=P.eQ(C.r,z)
x=H.y(C.r,0)
w=H.l(new W.mt(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.ms(y,P.cl(null,null,null,z),P.cl(null,null,null,z),P.cl(null,null,null,z),null)
y.ff(null,new H.jb(C.r,w,[x,z]),v,null)
return y}}},
mt:{"^":"m:19;",
$1:function(a){return"TEMPLATE::"+H.j(H.I(a))}},
mr:{"^":"b;",
aT:function(a){var z=J.L(a)
if(!!z.$isf4)return!1
z=!!z.$iscO
if(z&&W.bN(a)==="foreignObject")return!1
if(z)return!0
return!1},
aE:function(a,b,c){if(b==="is"||C.b.a4(b,"on"))return!1
return this.aT(a)},
$isaO:1},
eF:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e7(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
aO:{"^":"b;"},
mc:{"^":"b;a,b",$ispy:1},
hh:{"^":"b;a",
dc:function(a){new W.n0(this).$2(a,null)},
ba:function(a,b){if(b==null)J.ea(a)
else b.removeChild(a)},
hl:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hT(a)
x=y.gdw().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ac(t)}v="element unprintable"
try{v=J.ad(a)}catch(t){H.ac(t)}try{u=W.bN(a)
this.hk(H.e(a,"$isW"),b,z,v,u,H.e(y,"$isM"),H.I(x))}catch(t){if(H.ac(t) instanceof P.aI)throw t
else{this.ba(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hk:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ba(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aT(a)){this.ba(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aE(a,"is",g)){this.ba(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga7(f)
y=H.c(z.slice(0),[H.y(z,0)])
for(x=f.ga7(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.aE(a,J.hZ(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.j(e)+" "+w+'="'+H.j(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$isfe)this.dc(a.content)},
$isp2:1},
n0:{"^":"m:34;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hl(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ba(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hU(z)}catch(w){H.ac(w)
v=H.e(z,"$isH")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isH")}}},
lt:{"^":"v+ih;"},
lv:{"^":"v+z;"},
lw:{"^":"lv+F;"},
lx:{"^":"v+z;"},
ly:{"^":"lx+F;"},
lD:{"^":"v+z;"},
lE:{"^":"lD+F;"},
lQ:{"^":"v+z;"},
lR:{"^":"lQ+F;"},
lX:{"^":"v+am;"},
lY:{"^":"v+am;"},
lZ:{"^":"v+z;"},
m_:{"^":"lZ+F;"},
m0:{"^":"v+z;"},
m1:{"^":"m0+F;"},
m4:{"^":"v+z;"},
m5:{"^":"m4+F;"},
mb:{"^":"v+am;"},
h1:{"^":"ag+z;"},
h2:{"^":"h1+F;"},
mh:{"^":"v+z;"},
mi:{"^":"mh+F;"},
ml:{"^":"v+am;"},
mu:{"^":"v+z;"},
mv:{"^":"mu+F;"},
h5:{"^":"ag+z;"},
h6:{"^":"h5+F;"},
mA:{"^":"v+z;"},
mB:{"^":"mA+F;"},
n2:{"^":"v+z;"},
n3:{"^":"n2+F;"},
n4:{"^":"v+z;"},
n5:{"^":"n4+F;"},
n6:{"^":"v+z;"},
n7:{"^":"n6+F;"},
n8:{"^":"v+z;"},
n9:{"^":"n8+F;"},
na:{"^":"v+z;"},
nb:{"^":"na+F;"}}],["","",,P,{"^":"",
ny:function(a){var z,y
z=J.L(a)
if(!!z.$isch){y=z.gdV(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h8(a.data,a.height,a.width)},
nx:function(a){if(a instanceof P.h8)return{data:a.a,height:a.b,width:a.c}
return a},
b6:function(a){var z,y,x,w,v
if(a==null)return
z=P.dm(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.I(y[w])
z.l(0,v,a[v])}return z},
nv:function(a,b){var z={}
a.M(0,new P.nw(z))
return z},
ez:function(){var z=$.ey
if(z==null){z=J.d5(window.navigator.userAgent,"Opera",0)
$.ey=z}return z},
io:function(){var z,y
z=$.ev
if(z!=null)return z
y=$.ew
if(y==null){y=J.d5(window.navigator.userAgent,"Firefox",0)
$.ew=y}if(y)z="-moz-"
else{y=$.ex
if(y==null){y=!P.ez()&&J.d5(window.navigator.userAgent,"Trident/",0)
$.ex=y}if(y)z="-ms-"
else z=P.ez()?"-o-":"-webkit-"}$.ev=z
return z},
mo:{"^":"b;",
eh:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d5:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.L(a)
if(!!y.$isal)return new Date(a.a)
if(!!y.$isjR)throw H.a(P.cq("structured clone of RegExp"))
if(!!y.$isbb)return a
if(!!y.$isd7)return a
if(!!y.$iseE)return a
if(!!y.$isch)return a
if(!!y.$iseV||!!y.$isdu)return a
if(!!y.$isM){x=this.eh(a)
w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.l(w,x,v)
y.M(a,new P.mq(z,this))
return z.a}if(!!y.$isd){x=this.eh(a)
z=this.b
if(x>=z.length)return H.f(z,x)
v=z[x]
if(v!=null)return v
return this.ic(a,x)}throw H.a(P.cq("structured clone of other type"))},
ic:function(a,b){var z,y,x,w
z=J.az(a)
y=z.gn(a)
x=new Array(y)
C.a.l(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.l(x,w,this.d5(z.i(a,w)))
return x}},
mq:{"^":"m:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.d5(b)}},
h8:{"^":"b;dV:a>,b,c",$isch:1},
nw:{"^":"m:7;a",
$2:function(a,b){this.a[a]=b}},
mp:{"^":"mo;a,b"},
iB:{"^":"cI;a,b",
gbu:function(){var z,y,x
z=this.b
y=H.ap(z,"z",0)
x=W.W
return new H.j9(new H.dL(z,H.l(new P.iC(),{func:1,ret:P.V,args:[y]}),[y]),H.l(new P.iD(),{func:1,ret:x,args:[y]}),[y,x])},
l:function(a,b,c){var z
H.G(b)
H.e(c,"$isW")
z=this.gbu()
J.hW(z.b.$1(J.cx(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aH:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on filtered list"))},
gn:function(a){return J.aq(this.gbu().a)},
i:function(a,b){var z=this.gbu()
return z.b.$1(J.cx(z.a,b))},
ga0:function(a){var z=P.j4(this.gbu(),!1,W.W)
return new J.aJ(z,z.length,0,[H.y(z,0)])},
$asz:function(){return[W.W]},
$asi:function(){return[W.W]},
$asd:function(){return[W.W]}},
iC:{"^":"m:24;",
$1:function(a){return!!J.L(H.e(a,"$isH")).$isW}},
iD:{"^":"m:58;",
$1:function(a){return H.k(H.e(a,"$isH"),"$isW")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
m6:{"^":"b;$ti",
gbi:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.B(z+this.c,H.y(this,0))},
gcv:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.B(z+this.d,H.y(this,0))},
j:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c8(b,"$isae",[P.a4],"$asae")
if(!z)return!1
z=this.a
y=J.aG(b)
x=y.gb_(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbl(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.B(z+this.c,w)===y.gbi(b)){if(typeof x!=="number")return x.B()
z=H.B(x+this.d,w)===y.gcv(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.cc(z)
x=this.b
w=J.cc(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.B(x+this.d,v)
return P.lS(P.cT(P.cT(P.cT(P.cT(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ae:{"^":"m6;b_:a>,bl:b>,az:c>,av:d>,$ti",t:{
jO:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.K()
if(c<0)z=-c*0
else z=c
H.B(z,e)
if(typeof d!=="number")return d.K()
if(d<0)y=-d*0
else y=d
return new P.ae(a,b,z,H.B(y,e),[e])}}}}],["","",,P,{"^":"",bR:{"^":"v;",$isbR:1,"%":"SVGLength"},oO:{"^":"lU;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.G(b)
H.e(c,"$isbR")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asz:function(){return[P.bR]},
$isi:1,
$asi:function(){return[P.bR]},
$isd:1,
$asd:function(){return[P.bR]},
$asF:function(){return[P.bR]},
"%":"SVGLengthList"},bT:{"^":"v;",$isbT:1,"%":"SVGNumber"},p3:{"^":"m3;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.G(b)
H.e(c,"$isbT")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asz:function(){return[P.bT]},
$isi:1,
$asi:function(){return[P.bT]},
$isd:1,
$asd:function(){return[P.bT]},
$asF:function(){return[P.bT]},
"%":"SVGNumberList"},p9:{"^":"v;0n:length=","%":"SVGPointList"},f4:{"^":"cO;0a3:type}",$isf4:1,"%":"SVGScriptElement"},pk:{"^":"mn;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.G(b)
H.I(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asz:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asF:function(){return[P.h]},
"%":"SVGStringList"},pn:{"^":"cO;0a3:type}","%":"SVGStyleElement"},cO:{"^":"W;",
gcB:function(a){return new P.iB(a,new W.ay(a))},
ak:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aO])
C.a.h(z,W.fU(null))
C.a.h(z,W.h4())
C.a.h(z,new W.mr())
c=new W.hh(new W.eW(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).ie(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ay(w)
u=z.gaJ(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscO:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bX:{"^":"v;",$isbX:1,"%":"SVGTransform"},pw:{"^":"mD;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.G(b)
H.e(c,"$isbX")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asz:function(){return[P.bX]},
$isi:1,
$asi:function(){return[P.bX]},
$isd:1,
$asd:function(){return[P.bX]},
$asF:function(){return[P.bX]},
"%":"SVGTransformList"},lT:{"^":"v+z;"},lU:{"^":"lT+F;"},m2:{"^":"v+z;"},m3:{"^":"m2+F;"},mm:{"^":"v+z;"},mn:{"^":"mm+F;"},mC:{"^":"v+z;"},mD:{"^":"mC+F;"}}],["","",,P,{"^":"",U:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$iskB:1}}],["","",,P,{"^":"",oo:{"^":"v;0n:length=","%":"AudioBuffer"},ee:{"^":"ag;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},op:{"^":"lr;",
i:function(a,b){return P.b6(a.get(H.I(b)))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b6(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.M(a,new P.i0(z))
return z},
gn:function(a){return a.size},
l:function(a,b,c){throw H.a(P.E("Not supported"))},
$asam:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"AudioParamMap"},i0:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},i1:{"^":"ee;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},oq:{"^":"ag;0n:length=","%":"AudioTrackList"},i4:{"^":"ag;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},or:{"^":"ee;0a3:type}","%":"BiquadFilterNode"},p6:{"^":"i4;0n:length=","%":"OfflineAudioContext"},p7:{"^":"i1;0a3:type}","%":"Oscillator|OscillatorNode"},lr:{"^":"v+am;"}}],["","",,P,{"^":"",dx:{"^":"v;",
jc:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$isch)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.nx(g))
return}if(!!z.$iseH)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cd("Incorrect number or type of arguments"))},
jb:function(a,b,c,d,e,f,g){return this.jc(a,b,c,d,e,f,g,null,null,null)},
$isdx:1,
"%":"WebGLRenderingContext"},kK:{"^":"v;",$iskK:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",pi:{"^":"mk;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return P.b6(a.item(b))},
l:function(a,b,c){H.G(b)
H.e(c,"$isM")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asz:function(){return[[P.M,,,]]},
$isi:1,
$asi:function(){return[[P.M,,,]]},
$isd:1,
$asd:function(){return[[P.M,,,]]},
$asF:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},mj:{"^":"v+z;"},mk:{"^":"mj+F;"}}],["","",,O,{"^":"",aS:{"^":"b;0a,0b,0c,0d,$ti",
c2:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
dd:function(a,b,c){var z=H.ap(this,"aS",0)
H.l(b,{func:1,ret:P.V,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
bp:function(a,b){return this.dd(a,null,b)},
h3:function(a){var z
H.t(a,"$isi",[H.ap(this,"aS",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
f8:function(a,b){var z
H.t(b,"$isi",[H.ap(this,"aS",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
ga0:function(a){var z=this.a
return new J.aJ(z,z.length,0,[H.y(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ap(this,"aS",0)
H.B(b,z)
z=[z]
if(this.h3(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.f8(x,H.c([b],z))}},
$isi:1,
t:{
dc:function(a){var z=new O.aS([a])
z.c2(a)
return z}}},dr:{"^":"b;0a,0b",
gn:function(a){return this.a.length},
gC:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
f9:function(a){var z=this.b
if(!(z==null))z.E(a)},
aK:function(){return this.f9(null)},
ga1:function(a){var z=this.a
if(z.length>0)return C.a.gaw(z)
else return V.cm()},
eD:function(a){var z=this.a
if(a==null)C.a.h(z,V.cm())
else C.a.h(z,a)
this.aK()},
cX:function(){var z=this.a
if(z.length>0){z.pop()
this.aK()}}}}],["","",,E,{"^":"",d6:{"^":"b;"},ba:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a6:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sa8:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gC().I(0,this.gez())
y=this.c
if(y!=null)y.gC().h(0,this.gez())
x=new D.S("shape",z,this.c,this,[F.f6])
x.b=!0
this.am(x)}},
sbe:function(a){var z,y
if(!J.J(this.r,a)){z=this.r
if(z!=null)z.gC().I(0,this.gey())
if(a!=null)a.gC().h(0,this.gey())
this.r=a
y=new D.S("mover",z,a,this,[U.an])
y.b=!0
this.am(y)}},
ay:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.b6(0,b,this):null
if(!J.J(y,this.x)){x=this.x
this.x=y
w=new D.S("matrix",x,y,this,[V.aB])
w.b=!0
this.am(w)}for(z=this.y.a,z=new J.aJ(z,z.length,0,[H.y(z,0)]);z.G();)z.d.ay(0,b)},
b3:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga1(z))
else C.a.h(z.a,y.k(0,z.ga1(z)))
z.aK()
a.eE(this.f)
z=a.dy
x=(z&&C.a).gaw(z)
if(x!=null&&this.d!=null)x.j2(a,this)
for(z=this.y.a,z=new J.aJ(z,z.length,0,[H.y(z,0)]);z.G();)z.d.b3(a)
a.eC()
a.dx.cX()},
gC:function(){var z=this.z
if(z==null){z=D.Q()
this.z=z}return z},
am:function(a){var z=this.z
if(!(z==null))z.E(a)},
U:function(){return this.am(null)},
iN:[function(a){H.e(a,"$isC")
this.e=null
this.am(a)},function(){return this.iN(null)},"k6","$1","$0","gez",0,2,1],
iM:[function(a){this.am(H.e(a,"$isC"))},function(){return this.iM(null)},"k5","$1","$0","gey",0,2,1],
iK:[function(a){this.am(H.e(a,"$isC"))},function(){return this.iK(null)},"k_","$1","$0","gex",0,2,1],
jZ:[function(a,b){var z,y,x,w,v,u,t,s
H.t(b,"$isi",[E.ba],"$asi")
for(z=b.length,y=this.gex(),x={func:1,ret:-1,args:[D.C]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga6()==null){t=new D.bj()
t.d=0
u.sa6(t)}t=u.ga6()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.U()},"$2","giJ",8,0,11],
k0:[function(a,b){var z,y,x,w,v
H.t(b,"$isi",[E.ba],"$asi")
for(z=b.length,y=this.gex(),x=0;x<b.length;b.length===z||(0,H.D)(b),++x){w=b[x]
if(w!=null){if(w.ga6()==null){v=new D.bj()
v.d=0
w.sa6(v)}w.ga6().I(0,y)}}this.U()},"$2","giL",8,0,11],
$isaX:1},jT:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
f4:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.al(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dr()
y=[V.aB]
z.a=H.c([],y)
z.gC().h(0,new E.jV(this))
this.cy=z
z=new O.dr()
z.a=H.c([],y)
z.gC().h(0,new E.jW(this))
this.db=z
z=new O.dr()
z.a=H.c([],y)
z.gC().h(0,new E.jX(this))
this.dx=z
z=H.c([],[O.dB])
this.dy=z
C.a.h(z,null)
this.fr=new H.bc(0,0,[P.h,A.f5])},
giX:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga1(z)
y=this.db
y=z.k(0,y.ga1(y))
this.z=y
z=y}return z},
eE:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaw(z):a;(z&&C.a).h(z,y)},
eC:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
jU:function(a,b){var z=new E.jT(a,b)
z.f4(a,b)
return z}}},jV:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.z=null
z.ch=null}},jW:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jX:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.ch=null
z.cx=null}},kt:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a6:x@,0y,0z,0Q,0ch,0cx,0cy",
gC:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
fb:[function(a){var z
H.e(a,"$isC")
z=this.x
if(!(z==null))z.E(a)
this.j5()},function(){return this.fb(null)},"fa","$1","$0","gdi",0,2,1],
giw:function(){var z,y,x
z=Date.now()
y=C.d.a2(P.eA(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.al(z,!1)
return x/y},
dG:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.e.cM(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.e.cM(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.fh(C.q,this.gj4())},
j5:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kv(this),{func:1,ret:-1,args:[P.a4]})
C.H.fz(z)
C.H.hf(z,W.ho(y,P.a4))}},"$0","gj4",0,0,3],
j1:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dG()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.eA(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.aK()
w=x.db
C.a.sn(w.a,0)
w.aK()
w=x.dx
C.a.sn(w.a,0)
w.aK()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b3(this.e)}x=this.z
if(!(x==null))x.E(null)}catch(v){z=H.ac(v)
y=H.bJ(v)
P.e3("Error: "+H.j(z))
P.e3("Stack: "+H.j(y))
throw H.a(z)}},
t:{
ku:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$isda)return E.fg(a,!0,!0,!0,!1)
y=W.db(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcB(a).h(0,y)
w=E.fg(y,!0,!0,!0,!1)
w.a=a
return w},
fg:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kt()
y=P.j0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.l.bZ(a,"webgl",y)
x=H.e(x==null?C.l.bZ(a,"experimental-webgl",y):x,"$isdx")
if(x==null)H.q(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jU(x,a)
w=new T.ko(x)
w.b=H.G(x.getParameter(3379))
w.c=H.G(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kX(a)
v=new X.iT()
v.c=new X.aN(!1,!1,!1)
v.d=P.cl(null,null,null,P.n)
w.b=v
v=new X.jn(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.j6(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ky(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.fa,P.b]])
w.z=v
u=document
t=W.aC
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a7(u,"contextmenu",H.l(w.gfR(),s),!1,t))
v=w.z
r=W.af
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a7(a,"focus",H.l(w.gfU(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a7(a,"blur",H.l(w.gfO(),q),!1,r))
v=w.z
p=W.bQ
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a7(u,"keyup",H.l(w.gfW(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a7(u,"keydown",H.l(w.gfV(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a7(a,"mousedown",H.l(w.gfZ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a7(a,"mouseup",H.l(w.gh0(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a7(a,"mousemove",H.l(w.gh_(),s),!1,t))
p=w.z
o=W.c0;(p&&C.a).h(p,W.a7(a,H.I(W.iu(a)),H.l(w.gh1(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a7(u,"mousemove",H.l(w.gfS(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a7(u,"mouseup",H.l(w.gfT(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a7(u,"pointerlockchange",H.l(w.gh2(),q),!1,r))
r=w.z
q=W.bz
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a7(a,"touchstart",H.l(w.gh9(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a7(a,"touchend",H.l(w.gh7(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a7(a,"touchmove",H.l(w.gh8(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.al(Date.now(),!1)
z.cy=0
z.dG()
return z}}},kv:{"^":"m:35;a",
$1:function(a){var z
H.hF(a)
z=this.a
if(z.ch){z.ch=!1
z.j1()}}}}],["","",,Z,{"^":"",fO:{"^":"b;a,b",t:{
dK:function(a,b,c){var z
H.t(c,"$isd",[P.n],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bE(c)),35044)
a.bindBuffer(b,null)
return new Z.fO(b,z)}}},ej:{"^":"d6;a,b,c,d,e",
ct:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ac(y)
x=P.r('Failed to bind buffer attribute "'+J.ad(this.a)+'": '+H.j(z))
throw H.a(x)}},
j:function(a){return"["+J.ad(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},li:{"^":"b;a",$isos:1},ek:{"^":"b;a,0b,c,d",
aZ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
ct:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].ct(a)},
jh:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
b3:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.f(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].j(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ad(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.p(y,", ")+"\nAttrs:   "+C.a.p(u,", ")},
$ispq:1},cF:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bq(this.c)+"'")+"]"}},bB:{"^":"b;a",
gde:function(a){var z,y
z=this.a
y=(z&$.$get$b2().a)!==0?3:0
if((z&$.$get$b1().a)!==0)y+=3
if((z&$.$get$b0().a)!==0)y+=3
if((z&$.$get$b3().a)!==0)y+=2
if((z&$.$get$b4().a)!==0)y+=3
if((z&$.$get$bZ().a)!==0)y+=3
if((z&$.$get$c_().a)!==0)y+=4
if((z&$.$get$bC().a)!==0)++y
return(z&$.$get$b_().a)!==0?y+4:y},
i4:function(a){var z,y,x
z=$.$get$b2()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b3()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b4()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$c_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fN()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bB))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$b2().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$b1().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$b3().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b4().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bZ().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$c_().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bC().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$b_().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.p(z,"|")},
t:{
ax:function(a){return new Z.bB(a)}}}}],["","",,D,{"^":"",eo:{"^":"b;"},bj:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.C]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
I:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.C]})
z=this.a
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).I(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).I(z,b)||y}return y},
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.C(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.M(y,new D.iy(z))
y=this.b
if(!(y==null))C.a.M(y,new D.iz(z))
z=this.b
if(!(z==null))C.a.sn(z,0)
return!0},
ik:function(){return this.E(null)},
j6:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.E(y)}}},
ax:function(a){return this.j6(a,!0,!1)},
t:{
Q:function(){var z=new D.bj()
z.d=0
return z}}},iy:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},iz:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},C:{"^":"b;a,0b"},cG:{"^":"C;c,d,a,0b,$ti"},cH:{"^":"C;c,d,a,0b,$ti"},S:{"^":"C;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",el:{"^":"b;a,b",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.el))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.w(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.j(this.a)},
t:{"^":"ou<"}},eN:{"^":"b;a,b",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eN))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.w(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.j(this.a)}},eO:{"^":"C;c,a,0b"},iT:{"^":"b;0a,0b,0c,0d",
iT:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eO(a,this)
y.b=!0
return z.E(y)},
iP:function(a){var z,y
this.c=a.b
this.d.I(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eO(a,this)
y.b=!0
return z.E(y)}},eR:{"^":"cL;x,y,c,d,e,a,0b"},j6:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aC:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.B(0,new V.T(x*w,v*u))
u=this.a.gaU()
s=new X.bS(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cW:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.aC(a,b))
return!0},
bg:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eT()
if(typeof z!=="number")return z.bY()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.aC(a,b))
return!0},
bf:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.aC(a,b))
return!0},
iU:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaU()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.ds(new V.a2(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.E(w)
return!0},
fY:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.eR(c,a,this.a.gaU(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.T(0,0)}},aN:{"^":"b;a,b,c",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aN))return!1
if(this.a!==b.a)return!1
z=this.b
y=b.b
if(z==null?y!=null:z!==y)return!1
z=this.c
y=b.c
if(z==null?y!=null:z!==y)return!1
return!0},
j:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bS:{"^":"cL;x,y,z,Q,ch,c,d,e,a,0b"},jn:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c9:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gaU()
x=new X.bS(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cW:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.c9(a,b,!0))
return!0},
bg:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eT()
if(typeof z!=="number")return z.bY()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.c9(a,b,!0))
return!0},
bf:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.c9(a,b,!1))
return!0},
iV:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaU()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.ds(new V.a2(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdW:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
gbX:function(){var z=this.c
if(z==null){z=D.Q()
this.c=z}return z},
gew:function(){var z=this.d
if(z==null){z=D.Q()
this.d=z}return z}},ds:{"^":"cL;x,c,d,e,a,0b"},cL:{"^":"C;"},fl:{"^":"cL;x,y,z,Q,ch,c,d,e,a,0b"},ky:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aC:function(a,b){var z,y,x,w
H.t(a,"$isd",[V.T],"$asd")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gaU()
w=new X.fl(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iS:function(a){var z
H.t(a,"$isd",[V.T],"$asd")
z=this.b
if(z==null)return!1
z.E(this.aC(a,!0))
return!0},
iQ:function(a){var z
H.t(a,"$isd",[V.T],"$asd")
z=this.c
if(z==null)return!1
z.E(this.aC(a,!0))
return!0},
iR:function(a){var z
H.t(a,"$isd",[V.T],"$asd")
z=this.d
if(z==null)return!1
z.E(this.aC(a,!1))
return!0}},kX:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaU:function(){var z=this.a
return V.f3(0,0,(z&&C.l).gdU(z).c,C.l.gdU(z).d)},
du:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eN(z,new X.aN(y,a.altKey,a.shiftKey))},
aR:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aN(y,a.altKey,a.shiftKey)},
cn:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aN(y,a.altKey,a.shiftKey)},
aD:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.T(y-w,x-v)},
b9:function(a){return new V.a2(a.movementX,a.movementY)},
ci:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.e.ae(u.pageX)
C.e.ae(u.pageY)
s=z.left
C.e.ae(u.pageX)
C.a.h(y,new V.T(t-s,C.e.ae(u.pageY)-z.top))}return y},
aA:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.el(z,new X.aN(y,a.altKey,a.shiftKey))},
cb:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.L()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jA:[function(a){this.f=!0},"$1","gfU",4,0,9],
ju:[function(a){this.f=!1},"$1","gfO",4,0,9],
jx:[function(a){H.e(a,"$isaC")
if(this.f&&this.cb(a))a.preventDefault()},"$1","gfR",4,0,4],
jC:[function(a){var z
H.e(a,"$isbQ")
if(!this.f)return
z=this.du(a)
if(this.b.iT(z))a.preventDefault()},"$1","gfW",4,0,29],
jB:[function(a){var z
H.e(a,"$isbQ")
if(!this.f)return
z=this.du(a)
if(this.b.iP(z))a.preventDefault()},"$1","gfV",4,0,29],
jE:[function(a){var z,y,x,w
H.e(a,"$isaC")
z=this.a
z.focus()
this.f=!0
this.aR(a)
if(this.x){y=this.aA(a)
x=this.b9(a)
if(this.d.cW(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aA(a)
w=this.aD(a)
if(this.c.cW(y,w))a.preventDefault()},"$1","gfZ",4,0,4],
jG:[function(a){var z,y,x
H.e(a,"$isaC")
this.aR(a)
z=this.aA(a)
if(this.x){y=this.b9(a)
if(this.d.bg(z,y))a.preventDefault()
return}if(this.r)return
x=this.aD(a)
if(this.c.bg(z,x))a.preventDefault()},"$1","gh0",4,0,4],
jz:[function(a){var z,y,x
H.e(a,"$isaC")
if(!this.cb(a)){this.aR(a)
z=this.aA(a)
if(this.x){y=this.b9(a)
if(this.d.bg(z,y))a.preventDefault()
return}if(this.r)return
x=this.aD(a)
if(this.c.bg(z,x))a.preventDefault()}},"$1","gfT",4,0,4],
jF:[function(a){var z,y,x
H.e(a,"$isaC")
this.aR(a)
z=this.aA(a)
if(this.x){y=this.b9(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aD(a)
if(this.c.bf(z,x))a.preventDefault()},"$1","gh_",4,0,4],
jy:[function(a){var z,y,x
H.e(a,"$isaC")
if(!this.cb(a)){this.aR(a)
z=this.aA(a)
if(this.x){y=this.b9(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aD(a)
if(this.c.bf(z,x))a.preventDefault()}},"$1","gfS",4,0,4],
jH:[function(a){var z,y
H.e(a,"$isc0")
this.aR(a)
z=new V.a2((a&&C.G).gih(a),C.G.gii(a)).u(0,180)
if(this.x){if(this.d.iU(z))a.preventDefault()
return}if(this.r)return
y=this.aD(a)
if(this.c.iV(z,y))a.preventDefault()},"$1","gh1",4,0,39],
jI:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aA(this.y)
v=this.aD(this.y)
this.d.fY(w,v,x)}},"$1","gh2",4,0,9],
jO:[function(a){var z
H.e(a,"$isbz")
this.a.focus()
this.f=!0
this.cn(a)
z=this.ci(a)
if(this.e.iS(z))a.preventDefault()},"$1","gh9",4,0,15],
jM:[function(a){var z
H.e(a,"$isbz")
this.cn(a)
z=this.ci(a)
if(this.e.iQ(z))a.preventDefault()},"$1","gh7",4,0,15],
jN:[function(a){var z
H.e(a,"$isbz")
this.cn(a)
z=this.ci(a)
if(this.e.iR(z))a.preventDefault()},"$1","gh8",4,0,15]}}],["","",,D,{"^":"",cC:{"^":"b;0a,0b,0c,0d",
gC:function(){var z=this.d
if(z==null){z=D.Q()
this.d=z}return z},
aL:[function(a){var z
H.e(a,"$isC")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aL(null)},"jj","$1","$0","gfe",0,2,1],
$isa8:1,
$isaX:1},a8:{"^":"b;",$isaX:1},iU:{"^":"aS;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gC:function(){var z=this.Q
if(z==null){z=D.Q()
this.Q=z}return z},
aL:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fX:[function(a){var z
H.e(a,"$isC")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fX(null)},"jD","$1","$0","gdD",0,2,1],
jJ:[function(a){var z,y,x
H.t(a,"$isi",[D.a8],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.fd(x))return!1}return!0},"$1","gh4",4,0,41],
jr:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a8
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdD(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa8")
if(t instanceof D.cC)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bj()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cG(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","gfL",8,0,18],
jL:[function(a,b){var z,y,x,w,v,u
z=D.a8
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdD(),w=0;w<b.length;b.length===y||(0,H.D)(b),++w){v=H.e(b[w],"$isa8")
if(v instanceof D.cC)C.a.I(this.e,v)
u=v.d
if(u==null){u=new D.bj()
u.d=0
v.d=u}u.I(0,x)}z=new D.cH(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","gh6",8,0,18],
fd:function(a){var z=C.a.W(this.e,a)
return z},
$asi:function(){return[D.a8]},
$asaS:function(){return[D.a8]}},jz:{"^":"b;",$isa8:1,$isaX:1},kf:{"^":"b;",$isa8:1,$isaX:1},kq:{"^":"b;",$isa8:1,$isaX:1},kr:{"^":"b;",$isa8:1,$isaX:1},ks:{"^":"b;",$isa8:1,$isaX:1}}],["","",,V,{"^":"",
ow:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","jk",8,0,38],
ok:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.bo(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.e.eJ($.p.$2(a,0)?0:a,b),c+b+1)},
bI:function(a,b,c){var z,y,x,w,v,u
H.t(a,"$isd",[P.u],"$asd")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.l(z,u,C.b.ad(z[u],x))}return z},
e2:function(a,b){return C.e.je(Math.pow(b,C.Q.cM(Math.log(H.nu(a))/Math.log(b))))},
ak:{"^":"b;a,b,c",
k:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.ak(z,y,x)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
aT:{"^":"b;a,b,c,d",
d3:function(a){return H.c([this.a,this.b,this.c,this.d],[P.u])},
k:function(a,b){var z,y,x,w
z=b*this.a
y=b*this.b
x=b*this.c
w=b*this.d
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
if(w<0)w=0
else if(w>1)w=1
return new V.aT(z,y,x,w)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aT))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
cK:{"^":"b;a,b,c,d,e,f,r,x,y",
af:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$iscK")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.e.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.e.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.e.k(t,s)
q=a5.b
p=C.e.k(z,q)
o=a5.e
n=C.e.k(w,o)
m=a5.x
l=C.e.k(t,m)
k=a5.c
z=C.e.k(z,k)
j=a5.f
w=C.e.k(w,j)
i=a5.y
t=C.e.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.e.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.e.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.e.k(d,s)
b=C.e.k(h,q)
a=C.e.k(f,o)
a0=C.e.k(d,m)
h=C.e.k(h,k)
f=C.e.k(f,j)
d=C.e.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.e.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.e.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cK(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.k(a3,s),C.e.k(a1,q)+C.e.k(a2,o)+C.e.k(a3,m),C.e.k(a1,k)+C.e.k(a2,j)+C.e.k(a3,i))},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cK))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
z=b.e
if(!$.p.$2(z,this.e))return!1
z=b.f
if(!$.p.$2(z,this.f))return!1
z=b.r
if(!$.p.$2(z,this.r))return!1
z=b.x
if(!$.p.$2(z,this.x))return!1
z=b.y
if(!$.p.$2(z,this.y))return!1
return!0},
j:function(a){var z,y,x,w,v,u,t,s
z=[P.u]
y=V.bI(H.c([this.a,this.d,this.r],z),3,0)
x=V.bI(H.c([this.b,this.e,this.x],z),3,0)
w=V.bI(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.f(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.f(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.f(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.f(y,1)
s=" "+y[1]+", "
if(1>=u)return H.f(x,1)
s=s+x[1]+", "
if(1>=t)return H.f(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.f(y,2)
z=" "+y[2]+", "
if(2>=u)return H.f(x,2)
z=z+x[2]+", "
if(2>=t)return H.f(w,2)
return s+(z+w[2]+"]")}},
aB:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
af:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
eq:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.p.$2(a2,0))return V.cm()
a3=1/a2
a4=-w
a5=-i
return V.aM((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isaB")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.o(s)
r=a7.b
if(typeof r!=="number")return H.o(r)
q=a7.f
if(typeof q!=="number")return H.o(q)
p=a7.z
if(typeof p!=="number")return H.o(p)
o=a7.cy
if(typeof o!=="number")return H.o(o)
n=a7.c
if(typeof n!=="number")return H.o(n)
m=a7.r
if(typeof m!=="number")return H.o(m)
l=a7.Q
if(typeof l!=="number")return H.o(l)
k=a7.db
if(typeof k!=="number")return H.o(k)
j=a7.d
if(typeof j!=="number")return H.o(j)
i=a7.x
if(typeof i!=="number")return H.o(i)
h=a7.ch
if(typeof h!=="number")return H.o(h)
g=a7.dx
if(typeof g!=="number")return H.o(g)
f=this.e
if(typeof f!=="number")return f.k()
e=this.f
if(typeof e!=="number")return e.k()
d=this.r
if(typeof d!=="number")return d.k()
c=this.x
if(typeof c!=="number")return c.k()
b=this.y
if(typeof b!=="number")return b.k()
a=this.z
if(typeof a!=="number")return a.k()
a0=this.Q
if(typeof a0!=="number")return a0.k()
a1=this.ch
if(typeof a1!=="number")return a1.k()
a2=this.cx
if(typeof a2!=="number")return a2.k()
a3=this.cy
if(typeof a3!=="number")return a3.k()
a4=this.db
if(typeof a4!=="number")return a4.k()
a5=this.dx
if(typeof a5!=="number")return a5.k()
return V.aM(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
d4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
t=this.e
if(typeof t!=="number")return t.k()
s=this.f
if(typeof s!=="number")return s.k()
r=this.r
if(typeof r!=="number")return r.k()
q=this.y
if(typeof q!=="number")return q.k()
p=this.z
if(typeof p!=="number")return p.k()
o=this.Q
if(typeof o!=="number")return o.k()
return new V.A(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
t=this.d
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.Y(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aB))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
z=b.e
if(!$.p.$2(z,this.e))return!1
z=b.f
if(!$.p.$2(z,this.f))return!1
z=b.r
if(!$.p.$2(z,this.r))return!1
z=b.x
if(!$.p.$2(z,this.x))return!1
z=b.y
if(!$.p.$2(z,this.y))return!1
z=b.z
if(!$.p.$2(z,this.z))return!1
z=b.Q
if(!$.p.$2(z,this.Q))return!1
z=b.ch
if(!$.p.$2(z,this.ch))return!1
z=b.cx
if(!$.p.$2(z,this.cx))return!1
z=b.cy
if(!$.p.$2(z,this.cy))return!1
z=b.db
if(!$.p.$2(z,this.db))return!1
z=b.dx
if(!$.p.$2(z,this.dx))return!1
return!0},
j:function(a){return this.P()},
ei:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.bI(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bI(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bI(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bI(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.f(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.f(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.f(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.f(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.f(y,1)
q=q+y[1]+", "
if(1>=t)return H.f(x,1)
q=q+x[1]+", "
if(1>=s)return H.f(w,1)
q=q+w[1]+", "
if(1>=r)return H.f(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.f(y,2)
u=u+y[2]+", "
if(2>=t)return H.f(x,2)
u=u+x[2]+", "
if(2>=s)return H.f(w,2)
u=u+w[2]+", "
if(2>=r)return H.f(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.f(y,3)
q=q+y[3]+", "
if(3>=t)return H.f(x,3)
q=q+x[3]+", "
if(3>=s)return H.f(w,3)
q=q+w[3]+", "
if(3>=r)return H.f(v,3)
return u+(q+v[3]+"]")},
F:function(a){return this.ei(a,3,0)},
P:function(){return this.ei("",3,0)},
t:{
aM:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cm:function(){return V.aM(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eU:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.D(c)))
y=b.aF(z)
x=y.u(0,Math.sqrt(y.D(y)))
w=z.aF(x)
v=new V.A(a.a,a.b,a.c)
return V.aM(x.a,w.a,z.a,x.S(0).D(v),x.b,w.b,z.b,w.S(0).D(v),x.c,w.c,z.c,z.S(0).D(v),0,0,0,1)}}},
T:{"^":"b;a,b",
B:function(a,b){return new V.T(this.a+b.a,this.b+b.b)},
L:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.T(this.a*b,this.b*b)},
u:function(a,b){if($.p.$2(b,0))return new V.T(0,0)
return new V.T(this.a/b,this.b/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
Y:{"^":"b;a,b,c",
B:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.Y(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.p.$2(b,0))return new V.Y(0,0,0)
return new V.Y(this.a/b,this.b/b,this.c/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
bU:{"^":"b;a,b,c,d",
k:function(a,b){return new V.bU(this.a*b,this.b*b,this.c*b,this.d*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bU))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
f2:{"^":"b;a,b,c,d",
ga9:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f2))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
t:{
f3:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f2(a,b,c,d)}}},
a2:{"^":"b;a,b",
es:[function(a){return Math.sqrt(this.D(this))},"$0","gn",1,0,14],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.a2(z*b,y*b)},
u:function(a,b){var z,y
if($.p.$2(b,0))return new V.a2(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.a2(z/b,y/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
A:{"^":"b;a,b,c",
es:[function(a){return Math.sqrt(this.D(this))},"$0","gn",1,0,14],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cQ:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.A(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aF:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.A(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.A(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.p.$2(b,0))return new V.A(0,0,0)
return new V.A(this.a/b,this.b/b,this.c/b)},
er:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.A))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
bY:{"^":"b;a,b,c,d",
es:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gn",1,0,14],
k:function(a,b){return new V.bY(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){if($.p.$2(b,0))return new V.bY(0,0,0,0)
return new V.bY(this.a/b,this.b/b,this.c/b,this.d/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bY))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}}}],["","",,U,{"^":"",ib:{"^":"eo;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c3:function(a){var z=V.ok(a,this.c,this.b)
return z},
gC:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.E(a)},
sd7:function(a,b){},
scS:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c3(z)}z=new D.S("maximumLocation",y,this.b,this,[P.u])
z.b=!0
this.T(z)}},
scU:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c3(z)}z=new D.S("minimumLocation",y,this.c,this,[P.u])
z.b=!0
this.T(z)}},
sZ:function(a,b){var z,y
b=this.c3(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.S("location",y,b,this,[P.u])
z.b=!0
this.T(z)}},
scT:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.S("maximumVelocity",y,a,this,[P.u])
z.b=!0
this.T(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.S("velocity",x,a,this,[P.u])
z.b=!0
this.T(z)}},
scE:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.S("dampening",y,a,this,[P.u])
z.b=!0
this.T(z)}},
ay:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sZ(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
t:{
dd:function(){var z=new U.ib()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},eq:{"^":"an;0a,0b",
gC:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
b6:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eq))return!1
return J.J(this.a,b.a)},
j:function(a){return"Constant: "+this.a.F("          ")},
t:{
er:function(a){var z=new U.eq()
z.a=a
return z}}},eG:{"^":"aS;0e,0f,0r,0a,0b,0c,0d",
gC:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
T:[function(a){var z
H.e(a,"$isC")
z=this.e
if(!(z==null))z.E(a)},function(){return this.T(null)},"ah","$1","$0","gaQ",0,2,1],
jq:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.an
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaQ(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){s=t.gC()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cG(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfK",8,0,32],
jK:[function(a,b){var z,y,x,w,v
z=U.an
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaQ(),w=0;w<b.length;b.length===y||(0,H.D)(b),++w){v=b[w]
if(v!=null)v.gC().I(0,x)}z=new D.cH(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gh5",8,0,32],
b6:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aJ(z,z.length,0,[H.y(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.b6(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.cm():x
z=this.e
if(!(z==null))z.ax(0)}return this.f},
w:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eG))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.J(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asi:function(){return[U.an]},
$asaS:function(){return[U.an]},
$isan:1},an:{"^":"eo;"},kY:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gC:function(){var z=this.cy
if(z==null){z=D.Q()
this.cy=z}return z},
T:[function(a){var z
H.e(a,"$isC")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.T(null)},"ah","$1","$0","gaQ",0,2,1],
bb:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdW().h(0,this.gcc())
this.a.c.gew().h(0,this.gcd())
this.a.c.gbX().h(0,this.gce())
return!0},
fG:[function(a){H.e(a,"$isC")
if(!J.J(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcc",4,0,2],
fH:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$isbS")
if(!this.y)return
if(this.x){z=a.d.L(0,a.y)
z=new V.a2(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.L(0,a.y)
z=new V.a2(y.a,y.b).k(0,2).u(0,z.ga9())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=new V.a2(x.a,x.b).k(0,2).u(0,z.ga9())
x=this.b
v=w.a
if(typeof v!=="number")return v.S()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sZ(0,-v*u+t)
this.b.sV(0)
y=y.L(0,a.z)
this.Q=new V.a2(y.a,y.b).k(0,2).u(0,z.ga9())}this.ah()},"$1","gcd",4,0,2],
fI:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sV(y*10*x)
this.ah()}},"$1","gce",4,0,2],
b6:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.ch=y
x=b.y
this.b.ay(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aM(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isan:1},kZ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gC:function(){var z=this.fx
if(z==null){z=D.Q()
this.fx=z}return z},
T:[function(a){var z
H.e(a,"$isC")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.T(null)},"ah","$1","$0","gaQ",0,2,1],
bb:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdW().h(0,this.gcc())
this.a.c.gew().h(0,this.gcd())
this.a.c.gbX().h(0,this.gce())
z=this.a.d
y=z.f
if(y==null){y=D.Q()
z.f=y
z=y}else z=y
z.h(0,this.gfD())
z=this.a.d
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.gfE())
z=this.a.e
y=z.b
if(y==null){y=D.Q()
z.b=y
z=y}else z=y
z.h(0,this.ghA())
z=this.a.e
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.ghz())
z=this.a.e
y=z.c
if(y==null){y=D.Q()
z.c=y
z=y}else z=y
z.h(0,this.ghy())
return!0},
aq:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.S()
z=-z}if(this.r){if(typeof y!=="number")return y.S()
y=-y}return new V.a2(z,y)},
fG:[function(a){a=H.k(H.e(a,"$isC"),"$isbS")
if(!J.J(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcc",4,0,2],
fH:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$isbS")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a2(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.aq(new V.a2(y.a,y.b).k(0,2).u(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aq(new V.a2(x.a,x.b).k(0,2).u(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sZ(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.L(0,a.z)
this.dx=this.aq(new V.a2(y.a,y.b).k(0,2).u(0,z.ga9()))}this.ah()},"$1","gcd",4,0,2],
fI:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.ah()}},"$1","gce",4,0,2],
jn:[function(a){if(H.k(H.e(a,"$isC"),"$iseR").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfD",4,0,2],
jo:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$isbS")
if(!J.J(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aq(new V.a2(x.a,x.b).k(0,2).u(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sZ(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.L(0,a.z)
this.dx=this.aq(new V.a2(y.a,y.b).k(0,2).u(0,z.ga9()))
this.ah()},"$1","gfE",4,0,2],
jS:[function(a){H.e(a,"$isC")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghA",4,0,2],
jR:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$isfl")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a2(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.aq(new V.a2(y.a,y.b).k(0,2).u(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aq(new V.a2(x.a,x.b).k(0,2).u(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sZ(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.L(0,a.z)
this.dx=this.aq(new V.a2(y.a,y.b).k(0,2).u(0,z.ga9()))}this.ah()},"$1","ghz",4,0,2],
jQ:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.ah()}},"$1","ghy",4,0,2],
b6:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.dy=y
x=b.y
this.c.ay(0,x)
this.b.ay(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aM(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aM(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isan:1},l_:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gC:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.E(a)},
bb:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.Q()
z.e=y
z=y}else z=y
y=this.gfJ()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.Q()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jp:[function(a){var z,y,x,w
H.e(a,"$isC")
if(!J.J(this.b,this.a.b.c))return
H.k(a,"$isds")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.S("zoom",z,w,this,[P.u])
z.b=!0
this.T(z)}},"$1","gfJ",4,0,2],
b6:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aM(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isan:1}}],["","",,M,{"^":"",iw:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aM:[function(a){var z
H.e(a,"$isC")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aM(null)},"jk","$1","$0","gap",0,2,1],
jv:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.ba
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gap(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga6()==null){s=new D.bj()
s.d=0
t.sa6(s)}s=t.ga6()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cG(a,b,this,[z])
z.b=!0
this.aM(z)},"$2","gfP",8,0,11],
jw:[function(a,b){var z,y,x,w,v,u
z=E.ba
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gap(),w=0;w<b.length;b.length===y||(0,H.D)(b),++w){v=b[w]
if(v!=null){if(v.ga6()==null){u=new D.bj()
u.d=0
v.sa6(u)}v.ga6().I(0,x)}}z=new D.cH(a,b,this,[z])
z.b=!0
this.aM(z)},"$2","gfQ",8,0,11],
seH:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gC().I(0,this.gap())
y=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gap())
z=new D.S("technique",y,this.c,this,[O.dB])
z.b=!0
this.aM(z)}},
gC:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
b3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.eE(this.c)
z=this.b
z.toString
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
y=a.a
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
if(typeof x!=="number")return H.o(x)
u=C.e.ae(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.e.ae(v.b*w)
s=C.e.ae(v.c*x)
a.c=s
v=C.e.ae(v.d*w)
a.d=v
y.viewport(u,t,s,v)
a.a.clearDepth(z.c)
y=a.a
z=z.a
y.clearColor(z.a,z.b,z.c,z.d)
a.a.clear(16640)
z=this.a
y=a.c
v=a.d
s=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aM(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.eD(n)
y=$.f_
if(y==null){y=V.eU(new V.Y(0,0,0),new V.A(0,1,0),new V.A(0,0,-1))
$.f_=y
m=y}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.k(0,m)}a.db.eD(m)
z=this.c
if(z!=null)z.ay(0,a)
for(z=this.d.a,z=new J.aJ(z,z.length,0,[H.y(z,0)]);z.G();)z.d.ay(0,a)
for(z=this.d.a,z=new J.aJ(z,z.length,0,[H.y(z,0)]);z.G();)z.d.b3(a)
this.a.toString
a.cy.cX()
a.db.cX()
this.b.toString
a.eC()},
$ispc:1}}],["","",,A,{"^":"",ed:{"^":"b;a,b,c"},i_:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
il:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ij:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},je:{"^":"f5;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0au,0al,0bC,0dX,0bD,0bE,0dY,0dZ,0bF,0bG,0e_,0e0,0bH,0bI,0e1,0e2,0bJ,0e3,0e4,0bK,0e5,0e6,0bL,0bM,0bN,0e7,0e8,0bO,0bP,0e9,0ea,0bQ,0eb,0cG,0ec,0cH,0ed,0cI,0ee,0cJ,0ef,0cK,0eg,0cL,a,b,0c,0d,0e,0f,0r,0x,0y",
f3:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.as("")
y=a2.fx
if(y){z.a="uniform mat4 objMat;\n"
x="uniform mat4 objMat;\n"}else x=""
w=a2.fy
if(w){x+="uniform mat4 viewObjMat;\n"
z.a=x}x+="uniform mat4 projViewObjMat;\n"
z.a=x
x+="\n"
z.a=x
x+="attribute vec3 posAttr;\n"
z.a=x
v=a2.r1
if(v){x+="attribute vec3 normAttr;\n"
z.a=x}u=a2.r2
if(u){x+="attribute vec3 binmAttr;\n"
z.a=x}z.a=x+"\n"
a2.hD(z)
a2.hK(z)
a2.hE(z)
a2.hS(z)
a2.hT(z)
a2.hM(z)
a2.hX(z)
x=z.a+="vec4 getPos()\n"
x+="{\n"
z.a=x
t=a2.x1
x+="   return projViewObjMat*vec4("+(t?"bendPos":"posAttr")+", 1.0);\n"
z.a=x
x+="}\n"
z.a=x
x+="\n"
z.a=x
x+="void main()\n"
z.a=x
x+="{\n"
z.a=x
if(t){x+="   setupBendData();\n"
z.a=x}if(v){x+="   normalVec = getNorm();\n"
z.a=x}if(u){x+="   binormalVec = getBinm();\n"
z.a=x}if(a2.rx){x+="   txt2D = getTxt2D();\n"
z.a=x}if(a2.ry){x+="   txtCube = getTxtCube();\n"
z.a=x}if(a2.k3){x+="   objPos = getObjPos();\n"
z.a=x}if(a2.k4){x+="   viewPos = getViewPos();\n"
z.a=x}x+="   gl_Position = getPos();\n"
z.a=x
x+="}\n"
z.a=x
x+="\n"
z.a=x
s=x.charCodeAt(0)==0?x:x
x=this.z
z=new P.as("")
z.a="precision mediump float;\n"
z.a="precision mediump float;\n\n"
v=x.r1
if(v){z.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
u="precision mediump float;\n\nvarying vec3 normalVec;\n"}else u="precision mediump float;\n\n"
if(x.r2){u+="varying vec3 binormalVec;\n"
z.a=u}if(x.rx){u+="varying vec2 txt2D;\n"
z.a=u}if(x.ry){u+="varying vec3 txtCube;\n"
z.a=u}if(x.k3){u+="varying vec3 objPos;\n"
z.a=u}if(x.k4){u+="varying vec3 viewPos;\n"
z.a=u}u+="\n"
z.a=u
t=x.y2
if(t){u+="uniform mat4 colorMat;\n"
z.a=u}if(x.fr){u+="uniform mat4 invViewMat;\n"
z.a=u}z.a=u+"\n"
x.hH(z)
x.hC(z)
x.hF(z)
x.hI(z)
x.hQ(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.hO(z)
x.hP(z)}x.hL(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.f){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.h){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.c:r+="   return 1.0;\n"
z.a=r
break
case C.i:r+="   return alpha;\n"
z.a=r
break
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.h:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break}r+="}\n"
z.a=r
r+="\n"
z.a=r
q=x.k2
if(q){r+="// === Lighting ===\n"
z.a=r
r+="\n"
z.a=r
r+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
z.a=r
r+="{\n"
z.a=r
z.a=r+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
p=H.c([],[P.h])
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.p(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.hG(z)
x.hN(z)
x.hR(z)
x.hU(z)
x.hV(z)
x.hW(z)
x.hJ(z)}r=z.a+="// === Main ===\n"
r+="\n"
z.a=r
r+="void main()\n"
z.a=r
r+="{\n"
z.a=r
r+="   float alpha = alphaValue();\n"
z.a=r
if(v){v=r+"   vec3 norm = normal();\n"
z.a=v}else v=r
if(u)z.a=v+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
o=H.c([],[P.h])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.c)z.a+="   setDiffuseColor();\n"
if(x.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.c)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.c)C.a.h(o,"emission()")
if(x.r!==C.c)C.a.h(o,"reflect(refl)")
if(x.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.p(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.dv(s,35633)
this.f=this.dv(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.dU(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.q(P.r("Failed to link shader: "+H.j(m)))}this.ht()
this.hv()
this.Q=this.x.i(0,"posAttr")
this.cx=this.x.i(0,"normAttr")
this.ch=this.x.i(0,"binmAttr")
this.cy=this.x.i(0,"txt2DAttr")
this.db=this.x.i(0,"txtCubeAttr")
this.dx=this.x.i(0,"bendAttr")
if(a2.fr)this.id=H.k(this.y.q(0,"invViewMat"),"$isaZ")
if(y)this.dy=H.k(this.y.q(0,"objMat"),"$isaZ")
if(w)this.fr=H.k(this.y.q(0,"viewObjMat"),"$isaZ")
this.fy=H.k(this.y.q(0,"projViewObjMat"),"$isaZ")
if(a2.x2)this.k1=H.k(this.y.q(0,"txt2DMat"),"$isdG")
if(a2.y1)this.k2=H.k(this.y.q(0,"txtCubeMat"),"$isaZ")
if(a2.y2)this.k3=H.k(this.y.q(0,"colorMat"),"$isaZ")
this.r1=H.c([],[A.aZ])
y=a2.au
if(y>0){this.k4=H.e(this.y.q(0,"bendMatCount"),"$isR")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.i(0,v)
if(k==null)H.q(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaZ"))}}y=a2.a
if(y!==C.c){this.r2=H.k(this.y.q(0,"emissionClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.rx=H.k(this.y.q(0,"emissionTxt"),"$isav")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isR")
break
case C.h:this.ry=H.k(this.y.q(0,"emissionTxt"),"$isaw")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isR")
break}}y=a2.b
if(y!==C.c){this.x2=H.k(this.y.q(0,"ambientClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.y1=H.k(this.y.q(0,"ambientTxt"),"$isav")
this.au=H.k(this.y.q(0,"nullAmbientTxt"),"$isR")
break
case C.h:this.y2=H.k(this.y.q(0,"ambientTxt"),"$isaw")
this.au=H.k(this.y.q(0,"nullAmbientTxt"),"$isR")
break}}y=a2.c
if(y!==C.c){this.al=H.k(this.y.q(0,"diffuseClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.bC=H.k(this.y.q(0,"diffuseTxt"),"$isav")
this.bD=H.k(this.y.q(0,"nullDiffuseTxt"),"$isR")
break
case C.h:this.dX=H.k(this.y.q(0,"diffuseTxt"),"$isaw")
this.bD=H.k(this.y.q(0,"nullDiffuseTxt"),"$isR")
break}}y=a2.d
if(y!==C.c){this.bE=H.k(this.y.q(0,"invDiffuseClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.dY=H.k(this.y.q(0,"invDiffuseTxt"),"$isav")
this.bF=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break
case C.h:this.dZ=H.k(this.y.q(0,"invDiffuseTxt"),"$isaw")
this.bF=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break}}y=a2.e
if(y!==C.c){this.bI=H.k(this.y.q(0,"shininess"),"$isa5")
this.bG=H.k(this.y.q(0,"specularClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.e_=H.k(this.y.q(0,"specularTxt"),"$isav")
this.bH=H.k(this.y.q(0,"nullSpecularTxt"),"$isR")
break
case C.h:this.e0=H.k(this.y.q(0,"specularTxt"),"$isaw")
this.bH=H.k(this.y.q(0,"nullSpecularTxt"),"$isR")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.e1=H.k(this.y.q(0,"bumpTxt"),"$isav")
this.bJ=H.k(this.y.q(0,"nullBumpTxt"),"$isR")
break
case C.h:this.e2=H.k(this.y.q(0,"bumpTxt"),"$isaw")
this.bJ=H.k(this.y.q(0,"nullBumpTxt"),"$isR")
break}if(a2.dy){this.e3=H.k(this.y.q(0,"envSampler"),"$isaw")
this.e4=H.k(this.y.q(0,"nullEnvTxt"),"$isR")
y=a2.r
if(y!==C.c){this.bK=H.k(this.y.q(0,"reflectClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.e5=H.k(this.y.q(0,"reflectTxt"),"$isav")
this.bL=H.k(this.y.q(0,"nullReflectTxt"),"$isR")
break
case C.h:this.e6=H.k(this.y.q(0,"reflectTxt"),"$isaw")
this.bL=H.k(this.y.q(0,"nullReflectTxt"),"$isR")
break}}y=a2.x
if(y!==C.c){this.bM=H.k(this.y.q(0,"refraction"),"$isa5")
this.bN=H.k(this.y.q(0,"refractClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.f:this.e7=H.k(this.y.q(0,"refractTxt"),"$isav")
this.bO=H.k(this.y.q(0,"nullRefractTxt"),"$isR")
break
case C.h:this.e8=H.k(this.y.q(0,"refractTxt"),"$isaw")
this.bO=H.k(this.y.q(0,"nullRefractTxt"),"$isR")
break}}}y=a2.y
if(y!==C.c){this.bP=H.k(this.y.q(0,"alpha"),"$isa5")
switch(y){case C.c:break
case C.i:break
case C.f:this.e9=H.k(this.y.q(0,"alphaTxt"),"$isav")
this.bQ=H.k(this.y.q(0,"nullAlphaTxt"),"$isR")
break
case C.h:this.ea=H.k(this.y.q(0,"alphaTxt"),"$isaw")
this.bQ=H.k(this.y.q(0,"nullAlphaTxt"),"$isR")
break}}this.cG=H.c([],[A.fy])
this.cH=H.c([],[A.fz])
this.cI=H.c([],[A.fA])
this.cJ=H.c([],[A.fB])
this.cK=H.c([],[A.fC])
this.cL=H.c([],[A.fD])
if(a2.k2){y=a2.z
if(y>0){this.eb=H.e(this.y.q(0,"dirLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.i(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="dirLights["+l+"].color"
j=x.i(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.cG;(x&&C.a).h(x,new A.fy(l,k,j))}}y=a2.Q
if(y>0){this.ec=H.e(this.y.q(0,"pntLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.i(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.i(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="pntLights["+l+"].color"
i=x.i(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isO")
x=this.y
w="pntLights["+l+"].att0"
h=x.i(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa5")
x=this.y
w="pntLights["+l+"].att1"
g=x.i(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa5")
x=this.y
w="pntLights["+l+"].att2"
f=x.i(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa5")
x=this.cH;(x&&C.a).h(x,new A.fz(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.ed=H.e(this.y.q(0,"spotLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.i(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="spotLights["+l+"].objDir"
j=x.i(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.i(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isO")
x=this.y
w="spotLights["+l+"].color"
h=x.i(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isO")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.i(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa5")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.i(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa5")
x=this.y
w="spotLights["+l+"].att0"
e=x.i(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa5")
x=this.y
w="spotLights["+l+"].att1"
d=x.i(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa5")
x=this.y
w="spotLights["+l+"].att2"
c=x.i(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa5")
x=this.cI;(x&&C.a).h(x,new A.fA(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.ee=H.e(this.y.q(0,"txtDirLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.i(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.i(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.i(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isO")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.i(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isO")
x=this.y
w="txtDirLights["+l+"].color"
g=x.i(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isO")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.i(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isR")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.i(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isav")
x=this.cJ;(x&&C.a).h(x,new A.fB(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.ef=H.e(this.y.q(0,"txtPntLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.i(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.i(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.i(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdG")
x=this.y
w="txtPntLights["+l+"].color"
h=x.i(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isO")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.i(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isR")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.i(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa5")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.i(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa5")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.i(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa5")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.i(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isaw")
x=this.cK;(x&&C.a).h(x,new A.fC(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.eg=H.e(this.y.q(0,"txtSpotLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.i(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.i(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.i(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isO")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.i(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isO")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.i(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isO")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.i(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isR")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.i(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isO")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.i(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa5")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.i(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa5")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.i(0,w)
if(b==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa5")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.i(0,w)
if(a==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa5")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.i(0,w)
if(a0==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isa5")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.i(0,w)
if(a1==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isav")
x=this.cL;(x&&C.a).h(x,new A.fD(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ai:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.eW(c)
b.a.uniform1i(b.d,0)}},
ab:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
jd:function(a,b){var z,y
z=a.al
y=new A.je(b,z)
y.f6(b,z)
y.f3(a,b)
return y}}},jh:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,au,al,bC",
hD:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.au+"];\n"
z+="attribute vec4 bendAttr;\n"
a.a=z
z+="\n"
a.a=z
z+="float weightSum;\n"
a.a=z
z+="vec3 bendPos;\n"
a.a=z
y=this.r1
if(y){z+="vec3 bendNorm;\n"
a.a=z}x=this.r2
if(x){z+="vec3 bendBinm;\n"
a.a=z}z+="\n"
a.a=z
z+="void adjustBend(float bendVal)\n"
a.a=z
z+="{\n"
a.a=z
z+="   if(bendVal >= 0.0)\n"
a.a=z
z+="   {\n"
a.a=z
z+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
a.a=z
z+="      if(index < bendMatCount)\n"
a.a=z
z+="      {\n"
a.a=z
z+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
a.a=z
z+="         mat4 m = bendValues[index].mat;\n"
a.a=z
z+="         weightSum += weight;\n"
a.a=z
z+="         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
a.a=z
if(y){z+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
a.a=z}if(x){z+="         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n"
a.a=z}z+="      }\n"
a.a=z
z+="   }\n"
a.a=z
z+="}\n"
a.a=z
z+="\n"
a.a=z
z+="void setupBendData()\n"
a.a=z
z+="{\n"
a.a=z
z+="   bendPos = vec3(0.0, 0.0, 0.0);\n"
a.a=z
if(y){z+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
a.a=z}if(x){z+="   bendBinm = vec3(0.0, 0.0, 0.0);\n"
a.a=z}z+="   weightSum = 0.0;\n"
a.a=z
z+="   adjustBend(bendAttr.x);\n"
a.a=z
z+="   adjustBend(bendAttr.y);\n"
a.a=z
z+="   adjustBend(bendAttr.z);\n"
a.a=z
z+="   adjustBend(bendAttr.w);\n"
a.a=z
z+="   if(weightSum < 1.0)\n"
a.a=z
z+="   {\n"
a.a=z
z+="      float weight = 1.0 - weightSum;\n"
a.a=z
z+="      bendPos += posAttr*weight;\n"
a.a=z
if(y){z+="      bendNorm += normAttr*weight;\n"
a.a=z}if(x){z+="      bendBinm += binmAttr*weight;\n"
a.a=z}z+="   }\n"
a.a=z
z+="   else\n"
a.a=z
z+="   {\n"
a.a=z
z+="      bendPos = bendPos/weightSum;\n"
a.a=z
z+="   }\n"
a.a=z
if(y){z+="   bendNorm = normalize(bendNorm);\n"
a.a=z}if(x){z+="   bendBinm = normalize(bendBinm);\n"
a.a=z}z+="}\n"
a.a=z
a.a=z+"\n"},
hK:function(a){var z
if(!this.r1)return
z=a.a+="varying vec3 normalVec;\n"
z+="\n"
a.a=z
z+="vec3 getNorm()\n"
a.a=z
z+="{\n"
a.a=z
z+="   return normalize((viewObjMat*vec4("+(this.x1?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hE:function(a){var z
if(!this.r2)return
z=a.a+="varying vec3 binormalVec;\n"
z+="\n"
a.a=z
z+="vec3 getBinm()\n"
a.a=z
z+="{\n"
a.a=z
z+="   return normalize((viewObjMat*vec4("+(this.x1?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hS:function(a){var z,y
if(!this.rx)return
z=this.x2
if(z)a.a+="uniform mat3 txt2DMat;\n"
y=a.a+="attribute vec2 txt2DAttr;\n"
y+="varying vec2 txt2D;\n"
a.a=y
y+="\n"
a.a=y
y+="vec2 getTxt2D()\n"
a.a=y
y+="{\n"
a.a=y
if(z){z=y+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
a.a=z}else{z=y+"   return vec3(txt2DAttr, 1.0).xy;\n"
a.a=z}z+="}\n"
a.a=z
a.a=z+"\n"},
hT:function(a){var z,y
if(!this.ry)return
z=this.y1
if(z)a.a+="uniform mat4 txtCubeMat;\n"
y=a.a+="attribute vec3 txtCubeAttr;\n"
y+="varying vec3 txtCube;\n"
a.a=y
y+="\n"
a.a=y
y+="vec3 getTxtCube()\n"
a.a=y
y+="{\n"
a.a=y
if(z){z=y+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n"
a.a=z}else{z=y+"   return vec4(txtCubeAttr, 1.0).xyz;\n"
a.a=z}z+="}\n"
a.a=z
a.a=z+"\n"},
hM:function(a){var z
if(!this.k3)return
z=a.a+="varying vec3 objPos;\n"
z+="\n"
a.a=z
z+="vec3 getObjPos()\n"
a.a=z
z+="{\n"
a.a=z
z+="   return (objMat*vec4("+(this.x1?"bendPos":"posAttr")+", 1.0)).xyz;\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hX:function(a){var z
if(!this.k4)return
z=a.a+="varying vec3 viewPos;\n"
z+="\n"
a.a=z
z+="vec3 getViewPos()\n"
a.a=z
z+="{\n"
a.a=z
z+="   return (viewObjMat*vec4("+(this.x1?"bendPos":"posAttr")+", 1.0)).xyz;\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
aB:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.ao(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hH:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aB(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   return emissionClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hC:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aB(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   return ambientClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hF:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aB(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
z+="\n"
a.a=z
z+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
a.a=z
z+="{\n"
a.a=z
z+="   float scalar = dot(norm, -litVec);\n"
a.a=z
z+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   return diffuseColor*scalar;\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hI:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aB(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
z+="\n"
a.a=z
z+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
a.a=z
z+="{\n"
a.a=z
z+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
a.a=z
z+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   return invDiffuseColor*scalar;\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hQ:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aB(a,z,"specular")
y=a.a+="uniform float shininess;\n"
y+="vec3 specularColor;\n"
a.a=y
y+="\n"
a.a=y
y+="void setSpecularColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
z+="\n"
a.a=z
z+="vec3 specular(vec3 norm, vec3 litVec)\n"
a.a=z
z+="{\n"
a.a=z
z+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
a.a=z
z+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
a.a=z
z+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   return specularColor*pow(scalar, shininess);\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hL:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.i:break
case C.f:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.h:z+="uniform samplerCube bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break}z+="vec3 normal()\n"
a.a=z
z+="{\n"
a.a=z
switch(y){case C.c:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.i:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.f:z+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=z
z+="   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n"
a.a=z
z+="   vec3 n = normalize(normalVec);\n"
a.a=z
z+="   vec3 b = normalize(binormalVec);\n"
a.a=z
z+="   vec3 c = normalize(cross(b, n));\n"
a.a=z
z+="   b = cross(n, c);\n"
a.a=z
z+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=z
z+="                   -c.x, -c.y, -c.z,\n"
a.a=z
z+="                    n.x,  n.y,  n.z);\n"
a.a=z
z+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=z
break
case C.h:z+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=z
z+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
a.a=z
z+="   vec3 n = normalize(normalVec);\n"
a.a=z
z+="   vec3 b = normalize(binormalVec);\n"
a.a=z
z+="   vec3 c = cross(b, n);\n"
a.a=z
z+="   b = cross(n, c);\n"
a.a=z
z+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=z
z+="                   -c.x, -c.y, -c.z,\n"
a.a=z
z+="                    n.x,  n.y,  n.z);\n"
a.a=z
z+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=z
break}z+="}\n"
a.a=z
a.a=z+"\n"},
hO:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aB(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
a.a=z
z+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hP:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aB(a,z,"refract")
y=a.a+="uniform float refraction;\n"
y+="\n"
a.a=y
y+="vec3 refract(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
a.a=z
z+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
a.a=z
z+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hG:function(a){var z,y
z=this.z
if(z<=0)return
y=a.a+="// === Directional Light ===\n"
y+="\n"
a.a=y
y+="struct DirLight\n"
a.a=y
y+="{\n"
a.a=y
y+="   vec3 viewDir;\n"
a.a=y
y+="   vec3 color;\n"
a.a=y
y+="};\n"
a.a=y
y+="\n"
a.a=y
a.a=y+"uniform int dirLightCount;\n"
y=a.a+="uniform DirLight dirLights["+z+"];\n"
y+="\n"
a.a=y
y+="vec3 allDirLightValues(vec3 norm)\n"
a.a=y
y+="{\n"
a.a=y
a.a=y+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
z=a.a+="   for(int i = 0; i < "+z+"; ++i)\n"
z+="   {\n"
a.a=z
z+="      if(i >= dirLightCount) break;\n"
a.a=z
z+="      DirLight lit = dirLights[i];\n"
a.a=z
z+="      lightAccum += lightValue(norm, lit.color, lit.viewDir);\n"
a.a=z
z+="   }\n"
a.a=z
z+="   return lightAccum;\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hN:function(a){var z,y
z=this.Q
if(z<=0)return
y=a.a+="// === Point Light ===\n"
y+="\n"
a.a=y
y+="struct PointLight\n"
a.a=y
y+="{\n"
a.a=y
y+="   vec3 point;\n"
a.a=y
y+="   vec3 viewPnt;\n"
a.a=y
y+="   vec3 color;\n"
a.a=y
y+="   float att0;\n"
a.a=y
y+="   float att1;\n"
a.a=y
y+="   float att2;\n"
a.a=y
y+="};\n"
a.a=y
y+="\n"
a.a=y
a.a=y+"uniform int pntLightCount;\n"
y=a.a+="uniform PointLight pntLights["+z+"];\n"
y+="\n"
a.a=y
y+="vec3 pointLightValue(vec3 norm, PointLight lit)\n"
a.a=y
y+="{\n"
a.a=y
y+="   float dist = length(objPos - lit.point);\n"
a.a=y
y+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=y
y+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
y+="   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=y
y+="}\n"
a.a=y
y+="\n"
a.a=y
y+="vec3 allPointLightValues(vec3 norm)\n"
a.a=y
y+="{\n"
a.a=y
a.a=y+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
z=a.a+="   for(int i = 0; i < "+z+"; ++i)\n"
z+="   {\n"
a.a=z
z+="      if(i >= pntLightCount) break;\n"
a.a=z
z+="      lightAccum += pointLightValue(norm, pntLights[i]);\n"
a.a=z
z+="   }\n"
a.a=z
z+="   return lightAccum;\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hR:function(a){var z,y
z=this.ch
if(z<=0)return
y=a.a+="// === Spot Light ===\n"
y+="\n"
a.a=y
y+="struct SpotLight\n"
a.a=y
y+="{\n"
a.a=y
y+="   vec3 objPnt;\n"
a.a=y
y+="   vec3 objDir;\n"
a.a=y
y+="   vec3 viewPnt;\n"
a.a=y
y+="   vec3 color;\n"
a.a=y
y+="   float cutoff;\n"
a.a=y
y+="   float coneAngle;\n"
a.a=y
y+="   float att0;\n"
a.a=y
y+="   float att1;\n"
a.a=y
y+="   float att2;\n"
a.a=y
y+="};\n"
a.a=y
y+="\n"
a.a=y
a.a=y+"uniform int spotLightCount;\n"
y=a.a+="uniform SpotLight spotLights["+z+"];\n"
y+="\n"
a.a=y
y+="vec3 spotLightValue(vec3 norm, SpotLight lit)\n"
a.a=y
y+="{\n"
a.a=y
y+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=y
y+="   float dist = length(dir);\n"
a.a=y
y+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=y
y+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
y+="   float angle = acos(dot(normalize(dir), lit.objDir));\n"
a.a=y
y+="   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);\n"
a.a=y
y+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
y+="   if(scale > 1.0) scale = 1.0;\n"
a.a=y
y+="   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));\n"
a.a=y
y+="}\n"
a.a=y
y+="\n"
a.a=y
y+="vec3 allSpotLightValues(vec3 norm)\n"
a.a=y
y+="{\n"
a.a=y
a.a=y+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
z=a.a+="   for(int i = 0; i < "+z+"; ++i)\n"
z+="   {\n"
a.a=z
z+="      if(i >= spotLightCount) break;\n"
a.a=z
z+="      lightAccum += spotLightValue(norm, spotLights[i]);\n"
a.a=z
z+="   }\n"
a.a=z
z+="   return lightAccum;\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hU:function(a){var z,y,x
z=this.cx
if(z<=0)return
y=a.a+="// === Texture Directional Light ===\n"
y+="\n"
a.a=y
y+="struct TexturedDirLight\n"
a.a=y
y+="{\n"
a.a=y
y+="   vec3 objUp;\n"
a.a=y
y+="   vec3 objRight;\n"
a.a=y
y+="   vec3 objDir;\n"
a.a=y
y+="   vec3 viewDir;\n"
a.a=y
y+="   vec3 color;\n"
a.a=y
y+="   int nullTxt;\n"
a.a=y
y+="};\n"
a.a=y
y+="\n"
a.a=y
a.a=y+"uniform int txtDirLightCount;\n"
y=a.a+="uniform TexturedDirLight txtDirLights["+z+"];\n"
for(x=0;x<z;++x)y=a.a+="uniform sampler2D txtDirLightsTxt2D"+x+";\n"
y+="\n"
a.a=y
y+="vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)\n"
a.a=y
y+="{\n"
a.a=y
y+="   vec3 color;\n"
a.a=y
y+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=y
y+="   else\n"
a.a=y
y+="   {\n"
a.a=y
y+="      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
a.a=y
y+="      float tu = dot(offset, lit.objUp);\n"
a.a=y
y+="      float tv = dot(offset, lit.objRight);\n"
a.a=y
y+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=y
y+="   }\n"
a.a=y
y+="   return lightValue(norm, color, lit.viewDir);\n"
a.a=y
y+="}\n"
a.a=y
y+="\n"
a.a=y
y+="vec3 allTxtDirLightValues(vec3 norm)\n"
a.a=y
y+="{\n"
a.a=y
y+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=y
for(x=0;x<z;++x){a.a+="   if(txtDirLightCount <= "+x+") return lightAccum;\n"
y=a.a+="   lightAccum += txtDirLightValue(norm, txtDirLights["+x+"], txtDirLightsTxt2D"+x+");\n"}z=y+"   return lightAccum;\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hV:function(a){var z,y,x
z=this.cy
if(z<=0)return
y=a.a+="// === Texture Point Light ===\n"
y+="\n"
a.a=y
y+="struct TexturedPointLight\n"
a.a=y
y+="{\n"
a.a=y
y+="   vec3 point;\n"
a.a=y
y+="   vec3 viewPnt;\n"
a.a=y
y+="   mat3 invViewRotMat;\n"
a.a=y
y+="   vec3 color;\n"
a.a=y
y+="   int nullTxt;\n"
a.a=y
y+="   float att0;\n"
a.a=y
y+="   float att1;\n"
a.a=y
y+="   float att2;\n"
a.a=y
y+="};\n"
a.a=y
y+="\n"
a.a=y
a.a=y+"uniform int txtPntLightCount;\n"
y=a.a+="uniform TexturedPointLight txtPntLights["+z+"];\n"
for(x=0;x<z;++x)y=a.a+="uniform samplerCube txtPntLightsTxtCube"+x+";\n"
y+="\n"
a.a=y
y+="vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)\n"
a.a=y
y+="{\n"
a.a=y
y+="   float dist = length(objPos - lit.point);\n"
a.a=y
y+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=y
y+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
y+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
a.a=y
y+="   vec3 color;\n"
a.a=y
y+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=y
y+="   else\n"
a.a=y
y+="   {\n"
a.a=y
y+="      vec3 invNormDir = lit.invViewRotMat*normDir;\n"
a.a=y
y+="      color = lit.color*textureCube(txtCube, invNormDir).xyz;\n"
a.a=y
y+="   }\n"
a.a=y
y+="   return lightValue(norm, attenuation*color, normDir);\n"
a.a=y
y+="}\n"
a.a=y
y+="\n"
a.a=y
y+="vec3 allTxtPointLightValues(vec3 norm)\n"
a.a=y
y+="{\n"
a.a=y
y+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=y
for(x=0;x<z;++x){a.a+="   if(txtPntLightCount <= "+x+") return lightAccum;\n"
y=a.a+="   lightAccum += txtPointLightValue(norm, txtPntLights["+x+"], txtPntLightsTxtCube"+x+");\n"}z=y+"   return lightAccum;\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hW:function(a){var z,y,x
z=this.db
if(z<=0)return
y=a.a+="// === Texture Spot Light ===\n"
y+="\n"
a.a=y
y+="struct TexturedSpotLight\n"
a.a=y
y+="{\n"
a.a=y
y+="   vec3 objPnt;\n"
a.a=y
y+="   vec3 objDir;\n"
a.a=y
y+="   vec3 objUp;\n"
a.a=y
y+="   vec3 objRight;\n"
a.a=y
y+="   vec3 viewPnt;\n"
a.a=y
y+="   int nullTxt;\n"
a.a=y
y+="   vec3 color;\n"
a.a=y
y+="   float tuScalar;\n"
a.a=y
y+="   float tvScalar;\n"
a.a=y
y+="   float att0;\n"
a.a=y
y+="   float att1;\n"
a.a=y
y+="   float att2;\n"
a.a=y
y+="};\n"
a.a=y
y+="\n"
a.a=y
a.a=y+"uniform int txtSpotLightCount;\n"
y=a.a+="uniform TexturedSpotLight txtSpotLights["+z+"];\n"
for(x=0;x<z;++x)y=a.a+="uniform sampler2D txtSpotLightsTxt2D"+x+";\n"
y+="\n"
a.a=y
y+="vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)\n"
a.a=y
y+="{\n"
a.a=y
y+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=y
y+="   float dist = length(dir);\n"
a.a=y
y+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=y
y+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
y+="   vec3 normDir = normalize(dir);\n"
a.a=y
y+="   float zScale = dot(normDir, lit.objDir);\n"
a.a=y
y+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
y+="   normDir = normDir/zScale;\n"
a.a=y
y+="   vec3 color;\n"
a.a=y
y+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=y
y+="   else\n"
a.a=y
y+="   {\n"
a.a=y
y+="      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;\n"
a.a=y
y+="      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
y+="      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;\n"
a.a=y
y+="      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
y+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=y
y+="   }\n"
a.a=y
y+="   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=y
y+="}\n"
a.a=y
y+="\n"
a.a=y
y+="vec3 allTxtSpotLightValues(vec3 norm)\n"
a.a=y
y+="{\n"
a.a=y
y+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=y
for(x=0;x<z;++x){a.a+="   if(txtSpotLightCount <= "+x+") return lightAccum;\n"
y=a.a+="   lightAccum += txtSpotLightValue(norm, txtSpotLights["+x+"], txtSpotLightsTxt2D"+x+");\n"}z=y+"   return lightAccum;\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
hJ:function(a){var z
if(this.dx>0)return
z=a.a+="// === No Lights ===\n"
z+="\n"
a.a=z
z+="vec3 nonLightValues(vec3 norm)\n"
a.a=z
z+="{\n"
a.a=z
z+="   return lightValue(norm, vec3(1.0, 1.0, 1.0), vec3(0.0, 0.0, 1.0));\n"
a.a=z
z+="}\n"
a.a=z
a.a=z+"\n"},
j:function(a){return this.al}},fy:{"^":"b;a,b,c"},fB:{"^":"b;a,b,c,d,e,f,r,x"},fz:{"^":"b;a,b,c,d,e,f,r"},fC:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fA:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fD:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},f5:{"^":"d6;",
f6:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dv:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dU(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.r("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
ht:function(){var z,y,x,w,v,u
z=H.c([],[A.ed])
y=this.a
x=H.G(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.ed(y,v.name,u))}this.x=new A.i_(z)},
hv:function(){var z,y,x,w,v,u
z=H.c([],[A.ah])
y=this.a
x=H.G(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.ig(v.type,v.size,v.name,u))}this.y=new A.kJ(z)},
aP:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.R(z,y,b,c)
else return A.dF(z,y,b,a,c)},
fu:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.av(z,y,b,c)
else return A.dF(z,y,b,a,c)},
fv:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aw(z,y,b,c)
else return A.dF(z,y,b,a,c)},
bw:function(a,b){return new P.fS(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
ig:function(a,b,c,d){switch(a){case 5120:return this.aP(b,c,d)
case 5121:return this.aP(b,c,d)
case 5122:return this.aP(b,c,d)
case 5123:return this.aP(b,c,d)
case 5124:return this.aP(b,c,d)
case 5125:return this.aP(b,c,d)
case 5126:return new A.a5(this.a,this.r,c,d)
case 35664:return new A.kE(this.a,this.r,c,d)
case 35665:return new A.O(this.a,this.r,c,d)
case 35666:return new A.kH(this.a,this.r,c,d)
case 35667:return new A.kF(this.a,this.r,c,d)
case 35668:return new A.kG(this.a,this.r,c,d)
case 35669:return new A.kI(this.a,this.r,c,d)
case 35674:return new A.kL(this.a,this.r,c,d)
case 35675:return new A.dG(this.a,this.r,c,d)
case 35676:return new A.aZ(this.a,this.r,c,d)
case 35678:return this.fu(b,c,d)
case 35680:return this.fv(b,c,d)
case 35670:throw H.a(this.bw("BOOL",c))
case 35671:throw H.a(this.bw("BOOL_VEC2",c))
case 35672:throw H.a(this.bw("BOOL_VEC3",c))
case 35673:throw H.a(this.bw("BOOL_VEC4",c))
default:throw H.a(P.r("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cB:{"^":"b;a,b",
j:function(a){return this.b}},ah:{"^":"b;"},kJ:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.i(0,b)
if(z==null)throw H.a(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.P()},
iv:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].j(0)+a
return x},
P:function(){return this.iv("\n")}},R:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform1i: "+H.j(this.c)}},kF:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform2i: "+H.j(this.c)}},kG:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform3i: "+H.j(this.c)}},kI:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform4i: "+H.j(this.c)}},kD:{"^":"ah;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
dF:function(a,b,c,d,e){var z=new A.kD(a,b,c,e)
z.f=d
z.e=P.j3(d,0,!1,P.n)
return z}}},a5:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform1f: "+H.j(this.c)}},kE:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform2f: "+H.j(this.c)}},O:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform3f: "+H.j(this.c)}},kH:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform4f: "+H.j(this.c)}},kL:{"^":"ah;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dG:{"^":"ah;a,b,c,d",
an:function(a){var z=new Float32Array(H.bE(H.t(a,"$isd",[P.u],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.j(this.c)}},aZ:{"^":"ah;a,b,c,d",
an:function(a){var z=new Float32Array(H.bE(H.t(a,"$isd",[P.u],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.j(this.c)}},av:{"^":"ah;a,b,c,d",
eW:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.j(this.c)}},aw:{"^":"ah;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
dX:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.ai,P.u,P.u]})
z=F.cN()
F.c4(z,b,c,d,a,1,0,0,1)
F.c4(z,b,c,d,a,0,1,0,3)
F.c4(z,b,c,d,a,0,0,1,2)
F.c4(z,b,c,d,a,-1,0,0,0)
F.c4(z,b,c,d,a,0,-1,0,0)
F.c4(z,b,c,d,a,0,0,-1,3)
z.aj()
return z},
cW:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
c4:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ai,P.u,P.u]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.A(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.A(t+h,s+f,r+g)
z.b=q
p=new V.A(t-h,s-f,r-g)
z.c=p
o=new V.A(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cW(y)
k=F.cW(z.b)
j=F.d3(d,e,new F.nc(z,F.cW(z.c),F.cW(z.d),k,l,c),b)
if(j!=null)a.b2(j)},
hu:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.u,args:[P.u]})
if(f<3)return
z=F.cN()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.ai])
v=z.a
u=new V.A(0,0,y)
u=u.u(0,Math.sqrt(u.D(u)))
C.a.h(w,v.i0(new V.bU(a,-1,-1,-1),new V.aT(1,1,1,1),new V.Y(0,0,d),new V.A(0,0,y),new V.T(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.A(r,q,y).u(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.bA(new V.bU(a,-1,-1,-1),null,new V.aT(n,l,m,1),new V.Y(r*p,q*p,d),new V.A(0,0,y),new V.T(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hZ(w)
return z},
hs:function(a,b,c,d,e,f){return F.nA(!0,c,d,new F.nz(a,f),e)},
nA:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.u,args:[P.u,P.u]})
if(e<3)return
if(c<1)return
z=F.d3(c,e,new F.nC(d),null)
if(z==null)return
z.aj()
z.by()
if(b)z.b2(F.hu(3,!1,!1,1,new F.nD(d),e))
z.b2(F.hu(1,!0,!1,-1,new F.nE(d),e))
return z},
nV:function(a,b){var z=F.d3(a,b,new F.nW(),null)
z.d.bV()
z.aj()
z.by()
return z},
aj:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.u(0,Math.sqrt(b.D(b)))
z=b.a
y=b.b
x=b.c
w=F.bA(null,null,null,new V.Y(z,y,x),b,null,null,null,0)
v=a.io(w,new F.dJ())
if(v!=null)return v
u=z*0.5+0.5
t=y*0.5+0.5
s=x*0.5+0.5
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
w.sat(0,new V.aT(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.sb5(new V.T(q,p<0?-p:p))
a.a.h(0,w)
return w},
a0:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.bx(0,b,d,c)
else{z=F.aj(a,b.r.B(0,c.r).k(0,0.5))
y=F.aj(a,c.r.B(0,d.r).k(0,0.5))
x=F.aj(a,d.r.B(0,b.r).k(0,0.5))
w=e-1
F.a0(a,b,z,x,w)
F.a0(a,z,c,y,w)
F.a0(a,y,x,z,w)
F.a0(a,x,y,d,w)}},
hJ:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.oe()
y=F.dX(a,null,new F.of(z,c),d)
y.by()
return y},
oh:function(a,b,c,d){return F.ht(c,a,d,b,new F.oi())},
nT:function(a,b,c,d,e,f){return F.ht(d,a,e,b,new F.nU(f,c))},
ht:function(a,b,c,d,e){var z=F.d3(a,b,new F.nB(H.l(e,{func:1,ret:V.Y,args:[P.u]}),d,b,c),null)
if(z==null)return
z.aj()
z.by()
return z},
d3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ai,P.u,P.u]})
if(a<1)return
if(b<1)return
z=F.cN()
y=H.c([],[F.ai])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bA(null,null,new V.aT(u,0,0,1),null,null,new V.T(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cD(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.bA(null,null,new V.aT(o,n,m,1),null,null,new V.T(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cD(d))}}z.d.i_(a+1,b+1,y)
return z},
nc:{"^":"m:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cQ(z.b,b).cQ(z.d.cQ(z.c,b),c)
a.sZ(0,new V.Y(y.a,y.b,y.c))
a.sbW(y.u(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.sdR(new V.bU(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
nz:{"^":"m:25;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
nC:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sZ(0,new V.Y(y,u,w))
u=new V.A(y,u,w)
a.sbW(u.u(0,Math.sqrt(u.D(u))))
a.sdR(new V.bU(1-c,2+c,-1,-1))}},
nD:{"^":"m:22;a",
$1:function(a){return this.a.$2(a,1)}},
nE:{"^":"m:22;a",
$1:function(a){return this.a.$2(1-a,0)}},
nW:{"^":"m:5;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.A(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.u(0,Math.sqrt(w.D(w)))
a.sZ(0,new V.Y(x.a,x.b,x.c))}},
oe:{"^":"m:25;",
$2:function(a,b){return 0}},
of:{"^":"m:5;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.A(y.a,y.b,y.c)
z=x.u(0,Math.sqrt(x.D(x))).k(0,this.b+z)
a.sZ(0,new V.Y(z.a,z.b,z.c))}},
oi:{"^":"m:33;",
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)}},
nU:{"^":"m:33;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Y(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
nB:{"^":"m:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e6(y.$1(z),x)
x=J.e6(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.A(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.D(x)))
u=new V.A(1,0,0)
y=v.aF(!v.w(0,u)?new V.A(0,0,1):u)
t=y.u(0,Math.sqrt(y.D(y)))
y=t.aF(v)
u=y.u(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sZ(0,w.B(0,new V.Y(y.a-x.a,y.b-x.b,y.c-x.c)))}},
au:{"^":"b;0a,0b,0c,0d,0e",
aG:function(){if(!this.gbd()){C.a.I(this.a.a.d.b,this)
this.a.a.U()}this.ck()
this.cl()
this.hc()},
co:function(a){this.a=a
C.a.h(a.d.b,this)},
cp:function(a){this.b=a
C.a.h(a.d.c,this)},
hs:function(a){this.c=a
C.a.h(a.d.d,this)},
ck:function(){var z=this.a
if(z!=null){C.a.I(z.d.b,this)
this.a=null}},
cl:function(){var z=this.b
if(z!=null){C.a.I(z.d.c,this)
this.b=null}},
hc:function(){var z=this.c
if(z!=null){C.a.I(z.d.d,this)
this.c=null}},
gbd:function(){return this.a==null||this.b==null||this.c==null},
fm:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.A(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.er())return
return v.u(0,Math.sqrt(v.D(v)))},
fp:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.A(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.D(z)))
z=w.L(0,y)
z=new V.A(z.a,z.b,z.c)
z=v.aF(z.u(0,Math.sqrt(z.D(z))))
return z.u(0,Math.sqrt(z.D(z)))},
cA:function(){if(this.d!=null)return!0
var z=this.fm()
if(z==null){z=this.fp()
if(z==null)return!1}this.d=z
this.a.a.U()
return!0},
fl:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.A(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.er())return
return v.u(0,Math.sqrt(v.D(v)))},
fo:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=this.a
y=z==null
x=y?null:z.f
w=this.b
v=w==null
u=v?null:w.f
t=this.c
s=t==null
r=s?null:t.f
if(x==null||u==null||r==null)return
q=y?null:z.y
p=v?null:w.y
o=s?null:t.y
if(q==null||p==null||o==null)return
z=p.b
n=z-o.b
if($.p.$2(n,0)){z=r.L(0,u)
z=new V.A(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.S(0)}else{l=(z-q.b)/n
z=r.L(0,u).k(0,l).B(0,u).L(0,x)
z=new V.A(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.S(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.D(z)))
z=k.aF(m)
z=z.u(0,Math.sqrt(z.D(z))).aF(k)
m=z.u(0,Math.sqrt(z.D(z)))}return m},
cw:function(){if(this.e!=null)return!0
var z=this.fl()
if(z==null){z=this.fo()
if(z==null)return!1}this.e=z
this.a.a.U()
return!0},
aN:function(a,b){var z=b.a
if(z==null)throw H.a(P.r("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.r("May not replace a face's vertex with a vertex attached to a different shape."))},
gi9:function(a){if(J.J(this.a,this.b))return!0
if(J.J(this.b,this.c))return!0
if(J.J(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.P()},
F:function(a){var z,y
if(this.gbd())return a+"disposed"
z=a+C.b.ad(J.ad(this.a.e),0)+", "+C.b.ad(J.ad(this.b.e),0)+", "+C.b.ad(J.ad(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
P:function(){return this.F("")},
t:{
bk:function(a,b,c){var z,y,x
z=new F.au()
y=a.a
if(y==null)H.q(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.r("May not create a face with vertices attached to different shapes."))
z.co(a)
z.cp(b)
z.hs(c)
C.a.h(z.a.a.d.b,z)
z.a.a.U()
return z}}},
iA:{"^":"b;"},
kb:{"^":"iA;",
b1:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
dl:{"^":"b;0a,0b",
aG:function(){if(!this.gbd()){C.a.I(this.a.a.c.b,this)
this.a.a.U()}this.ck()
this.cl()},
co:function(a){this.a=a
C.a.h(a.c.b,this)},
cp:function(a){this.b=a
C.a.h(a.c.c,this)},
ck:function(){var z=this.a
if(z!=null){C.a.I(z.c.b,this)
this.a=null}},
cl:function(){var z=this.b
if(z!=null){C.a.I(z.c.c,this)
this.b=null}},
gbd:function(){return this.a==null||this.b==null},
aN:function(a,b){var z=b.a
if(z==null)throw H.a(P.r("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.r("May not replace a line's vertex with a vertex attached to a different shape."))},
w:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.P()},
F:function(a){if(this.gbd())return a+"disposed"
return a+C.b.ad(J.ad(this.a.e),0)+", "+C.b.ad(J.ad(this.b.e),0)},
P:function(){return this.F("")},
t:{
iV:function(a,b){var z,y,x
z=new F.dl()
y=a.a
if(y==null)H.q(P.r("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.q(P.r("May not create a line with vertices attached to different shapes."))
z.co(a)
z.cp(b)
C.a.h(z.a.a.c.b,z)
z.a.a.U()
return z}}},
iW:{"^":"b;"},
kC:{"^":"iW;",
b1:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dw:{"^":"b;0a",
aG:function(){var z=this.a
if(z!=null){C.a.I(z.a.b.b,this)
this.a.a.U()}this.hb()},
hb:function(){var z=this.a
if(z!=null){C.a.I(z.b.b,this)
this.a=null}},
w:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.P()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ad(J.ad(z.e),0)},
P:function(){return this.F("")}},
f6:{"^":"b;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.ib())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dw()
if(r.a==null)H.q(P.r("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.iV(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bk(p,o,m)}z=this.e
if(!(z==null))z.ax(0)},
aj:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aj()||!1
if(!this.a.aj())y=!1
z=this.e
if(!(z==null))z.ax(0)
return y},
ip:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
if(b.b1(0,a,w))return w}return},
io:function(a,b){return this.ip(a,b,0)},
fB:function(a,b,c,d,e){var z,y,x
H.t(d,"$isd",[F.ai],"$asd")
H.t(e,"$isd",[P.n],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
if(a.b1(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
he:function(a,b){var z,y,x,w,v,u,t,s
H.t(b,"$isd",[P.n],"$asd")
H.ke(b,J.nk(),H.y(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.f(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.f(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.q(P.r("May not replace a face's vertex when the point has been disposed."))
if(J.J(v,w)){x.aN(w,a)
v=x.a
if(v!=null){C.a.I(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.J(x.b,w)){x.aN(w,a)
v=x.b
if(v!=null){C.a.I(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.J(x.c,w)){x.aN(w,a)
v=x.c
if(v!=null){C.a.I(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.E(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null)H.q(P.r("May not replace a line's vertex when the point has been disposed."))
if(J.J(v,w)){x.aN(w,a)
v=x.a
if(v!=null){C.a.I(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.J(x.b,w)){x.aN(w,a)
v=x.b
if(v!=null){C.a.I(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.E(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.q(P.r("May not replace a point's vertex when the point has been disposed."))
if(J.J(v,w)){if(a.a==null)H.q(P.r("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.I(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.E(null)}}x=this.a
v=x.c
if(y>=v.length)return H.f(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.q(P.r("May not remove a vertex without first making it empty."))
t.a=null
C.a.j_(v,y)
v=x.a.e
if(!(v==null))v.E(null)
x.b=!0}},
ev:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.ai],x=[P.n];y>=0;--y){w=this.a.c
if(y>=w.length)return H.f(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.fB(a,v,y,u,t)){s=b.b2(u)
if(s!=null){this.he(s,t)
y-=t.length}}}this.a.A()
this.c.bV()
this.d.bV()
this.b.j0()
this.c.d0(new F.kC())
this.d.d0(new F.kb())
z=this.e
if(!(z==null))z.ax(0)},
i2:function(a){this.ev(new F.dJ(),new F.jt())},
by:function(){return this.i2(null)},
i7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$b2()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$b0().a)!==0)++w
if((x&$.$get$b3().a)!==0)++w
if((x&$.$get$b4().a)!==0)++w
if((x&$.$get$bZ().a)!==0)++w
if((x&$.$get$c_().a)!==0)++w
if((x&$.$get$bC().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
v=b.gde(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ej])
for(r=0,q=0;q<w;++q){p=b.i4(q)
o=p.gde(p)
C.a.l(s,q,new Z.ej(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].iD(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.l(t,l,m[k]);++l}}r+=o}H.t(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bE(t)),35044)
y.bindBuffer(34962,null)
i=new Z.ek(new Z.fO(34962,j),s,b)
i.b=H.c([],[Z.cF])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dK(y,34963,H.t(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cF(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dK(y,34963,H.t(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cF(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.dK(y,34963,H.t(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cF(4,h.length,f))}return i},
j:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.p(z,"\n")},
am:function(a){var z=this.e
if(!(z==null))z.E(a)},
U:function(){return this.am(null)},
t:{
cN:function(){var z,y
z=new F.f6()
y=new F.l8(z)
y.b=!1
y.c=H.c([],[F.ai])
z.a=y
y=new F.k5(z)
y.b=H.c([],[F.dw])
z.b=y
y=new F.k4(z)
y.b=H.c([],[F.dl])
z.c=y
y=new F.k3(z)
y.b=H.c([],[F.au])
z.d=y
z.e=null
return z}}},
k3:{"^":"b;a,0b",
bx:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.bk(b,c,d)},
hZ:function(a){var z,y,x,w,v,u
H.t(a,"$isd",[F.ai],"$asd")
z=H.c([],[F.au])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.f(a,v)
v=a[v]
if(w>=u)return H.f(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.bk(x,v,u))}}return z},
i_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.t(c,"$isd",[F.ai],"$asd")
z=H.c([],[F.au])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.f(c,x)
r=c[x];++x
if(x>=s)return H.f(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.f(c,p)
o=c[p]
if(y<0||y>=s)return H.f(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bk(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bk(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bk(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bk(q,n,r))}u=!u}w=!w}return z},
gn:function(a){return this.b.length},
d0:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.i(0,w)
for(u=w-1;u>=0;--u){t=x.d.i(0,u)
if(a.b1(0,v,t)){v.aG()
break}}}}},
bV:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gi9(x)
if(y)x.aG()}},
aj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].cA())x=!1
return x},
cz:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].cw())x=!1
return x},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.p(z,"\n")},
P:function(){return this.F("")}},
k4:{"^":"b;a,0b",
gn:function(a){return this.b.length},
d0:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.i(0,w)
for(u=w-1;u>=0;--u){t=x.c.i(0,u)
if(a.b1(0,v,t)){v.aG()
break}}}}},
bV:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.J(x.a,x.b)
if(y)x.aG()}},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.p(z,"\n")},
P:function(){return this.F("")}},
k5:{"^":"b;a,0b",
gn:function(a){return this.b.length},
j0:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aG()}},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.p(z,"\n")},
P:function(){return this.F("")}},
ai:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cD:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bA(this.cx,x,u,z,y,w,v,a,t)},
ib:function(){return this.cD(null)},
sZ:function(a,b){var z
if(!J.J(this.f,b)){this.f=b
z=this.a
if(z!=null)z.U()}},
scV:function(a){var z
a=a==null?null:a.u(0,Math.sqrt(a.D(a)))
if(!J.J(this.r,a)){this.r=a
z=this.a
if(z!=null)z.U()}},
sdT:function(a){var z
a=a==null?null:a.u(0,Math.sqrt(a.D(a)))
if(!J.J(this.x,a)){this.x=a
z=this.a
if(z!=null)z.U()}},
sb5:function(a){var z
if(!J.J(this.y,a)){this.y=a
z=this.a
if(z!=null)z.U()}},
sbW:function(a){var z
if(!J.J(this.z,a)){this.z=a
z=this.a
if(z!=null)z.U()}},
sat:function(a,b){var z
if(!J.J(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.U()}},
seN:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.U()}},
sdR:function(a){var z
if(!J.J(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.U()}},
iD:function(a){var z,y
z=J.L(a)
if(z.w(a,$.$get$b2())){z=this.f
y=[P.u]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$b1())){z=this.r
y=[P.u]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$b0())){z=this.x
y=[P.u]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$b3())){z=this.y
y=[P.u]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.w(a,$.$get$b4())){z=this.z
y=[P.u]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$bZ())){z=this.Q
y=[P.u]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$c_())){z=this.Q
if(z==null)return H.c([1,1,1,1],[P.u])
else return z.d3(0)}else if(z.w(a,$.$get$bC()))return H.c([this.ch],[P.u])
else if(z.w(a,$.$get$b_())){z=this.cx
y=[P.u]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.u])},
cA:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.A(0,0,0)
this.d.M(0,new F.lh(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ax(0)}return!0},
cw:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.A(0,0,0)
this.d.M(0,new F.lg(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ax(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.P()},
F:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.b.ad(J.ad(this.e),0))
y=this.f
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.r
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.x
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.y
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.z
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
C.a.h(z,V.P(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.p(z,", ")
return a+"{"+x+"}"},
P:function(){return this.F("")},
t:{
bA:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ai()
y=new F.lf(z)
y.b=H.c([],[F.dw])
z.b=y
y=new F.ld(z)
x=[F.dl]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.l9(z)
x=[F.au]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fL()
z.e=0
y=$.$get$b2()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$b1().a)!==0?e:null
z.x=(x&$.$get$b0().a)!==0?b:null
z.y=(x&$.$get$b3().a)!==0?f:null
z.z=(x&$.$get$b4().a)!==0?g:null
z.Q=(x&$.$get$fM().a)!==0?c:null
z.ch=(x&$.$get$bC().a)!==0?i:0
z.cx=(x&$.$get$b_().a)!==0?a:null
return z}}},
lh:{"^":"m:6;a",
$1:function(a){var z,y
H.e(a,"$isau")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
lg:{"^":"m:6;a",
$1:function(a){var z,y
H.e(a,"$isau")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
l8:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.U()
return!0},
i1:function(a,b,c,d,e,f,g,h,i){var z=F.bA(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
i0:function(a,b,c,d,e,f){return this.i1(a,null,b,c,d,e,f,null,0)},
gn:function(a){return this.c.length},
aj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].cA()
return!0},
cz:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].cw()
return!0},
i8:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.J(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
this.A()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.p(z,"\n")},
P:function(){return this.F("")}},
l9:{"^":"b;a,0b,0c,0d",
gn:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.f(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.f(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
M:function(a,b){H.l(b,{func:1,ret:-1,args:[F.au]})
C.a.M(this.b,b)
C.a.M(this.c,new F.la(this,b))
C.a.M(this.d,new F.lb(this,b))},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.p(z,"\n")},
P:function(){return this.F("")}},
la:{"^":"m:6;a,b",
$1:function(a){H.e(a,"$isau")
if(!J.J(a.a,this.a))this.b.$1(a)}},
lb:{"^":"m:6;a,b",
$1:function(a){var z
H.e(a,"$isau")
z=this.a
if(!J.J(a.a,z)&&!J.J(a.b,z))this.b.$1(a)}},
ld:{"^":"b;a,0b,0c",
gn:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.p(z,"\n")},
P:function(){return this.F("")}},
le:{"^":"b;"},
dJ:{"^":"le;",
b1:function(a,b,c){return J.J(b.f,c.f)}},
fK:{"^":"b;"},
lc:{"^":"fK;",
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.t(a,"$isd",[F.ai],"$asd")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.Y(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.A(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.A(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.T(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.A(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.bY(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.bY(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.o(f)
n+=f;++o}b=F.bA(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sZ(0,null)
else b.sZ(0,x.u(0,y))
if(w==null)b.scV(null)
else b.scV(w.u(0,Math.sqrt(w.D(w))))
if(v==null)b.sdT(null)
else b.sdT(v.u(0,Math.sqrt(v.D(v))))
if(s<=0||r==null)b.sb5(null)
else b.sb5(r.u(0,s))
if(q<=0||p==null)b.sbW(null)
else b.sbW(p.u(0,q))
if(u<=0||t==null)b.sat(0,null)
else{z=t.u(0,u)
z=[z.a,z.b,z.c,z.d]
f=z[0]
e=z[1]
d=z[2]
z=z[3]
if(f<0)f=0
else if(f>1)f=1
if(e<0)e=0
else if(e>1)e=1
if(d<0)d=0
else if(d>1)d=1
if(z<0)z=0
else if(z>1)z=1
b.sat(0,new V.aT(f,e,d,z))}if(o<=0)b.seN(0,0)
else b.seN(0,n/o)
return b}},
jt:{"^":"fK;",
b2:function(a){var z,y,x,w
H.t(a,"$isd",[F.ai],"$asd")
z=new V.A(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.A(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.u(0,Math.sqrt(z.D(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x)a[x].scV(z)
return}},
lf:{"^":"b;a,0b",
gn:function(a){return this.b.length},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.p(z,"\n")},
P:function(){return this.F("")}}}],["","",,O,{"^":"",jc:{"^":"dB;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gC:function(){var z=this.dy
if(z==null){z=D.Q()
this.dy=z}return z},
a5:[function(a){var z
H.e(a,"$isC")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.a5(null)},"fg","$1","$0","gbr",0,2,1],
hh:[function(a){H.e(a,"$isC")
this.a=null
this.a5(a)},function(){return this.hh(null)},"jP","$1","$0","ghg",0,2,1],
js:[function(a,b){var z=V.aB
z=new D.cG(a,H.t(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a5(z)},"$2","gfM",8,0,30],
jt:[function(a,b){var z=V.aB
z=new D.cH(a,H.t(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a5(z)},"$2","gfN",8,0,30],
ds:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a2(z.e.length+3,4)*4
x=C.d.a2(z.f.length+3,4)*4
w=C.d.a2(z.r.length+3,4)*4
v=C.d.a2(z.x.length+3,4)*4
u=C.d.a2(z.y.length+3,4)*4
t=C.d.a2(z.z.length+3,4)*4
s=C.d.a2(this.e.a.length+3,4)*4
z=this.b!=null
r=this.c!=null
q=this.f.c
p=this.r.c
o=this.x.c
n=this.y.c
m=this.z.c
l=this.Q.c
k=this.cx.c
j=this.cy.c
i=this.db.c
h="MaterialLight_"+C.d.j(q.a)+C.d.j(p.a)+C.d.j(o.a)+C.d.j(n.a)+C.d.j(m.a)+C.d.j(l.a)+C.d.j(k.a)+C.d.j(j.a)+C.d.j(i.a)+"_"
h+=z?"1":"0"
h+=r?"1":"0"
h+"0"
h=h+"0_"+s+"_"+y+"_"+x+"_"+w+"_"+v+"_"+u+"_"+t
g=k!==C.c||j!==C.c
f=p!==C.c||o!==C.c||n!==C.c||m!==C.c
e=m===C.c
d=!e||g
c=o!==C.c||n!==C.c||!e||l!==C.c||g
e=l===C.c
b=!e
a=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a0=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$b2()
if(c){z=$.$get$b1()
a6=new Z.bB(a6.a|z.a)}if(b){z=$.$get$b0()
a6=new Z.bB(a6.a|z.a)}if(a){z=$.$get$b3()
a6=new Z.bB(a6.a|z.a)}if(a0){z=$.$get$b4()
a6=new Z.bB(a6.a|z.a)}if(a2){z=$.$get$b_()
a6=new Z.bB(a6.a|z.a)}return new A.jh(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
Y:function(a,b){H.t(a,"$isd",[T.dC],"$asd")
if(b!=null)if(!C.a.W(a,b)){b.a=a.length
C.a.h(a,b)}},
ay:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aJ(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
x=new V.A(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d4(x)}}},
j2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.ds()
y=a.fr.i(0,z.al)
if(y==null){y=A.jd(z,a.a)
x=y.b
if(x.length===0)H.q(P.r("May not cache a shader with no name."))
if(a.fr.bA(0,x))H.q(P.r('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.l(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.bC
z=b.e
if(!(z instanceof Z.ek)){b.e=null
z=null}if(z==null||!z.d.w(0,v)){z=w.r1
if(z)b.d.aj()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.cz()
t.a.cz()
t=t.e
if(!(t==null))t.ax(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.i8()
s=s.e
if(!(s==null))s.ax(0)}q=b.d.i7(new Z.li(a.a),v)
q.aZ($.$get$b2()).e=this.a.Q.c
if(z)q.aZ($.$get$b1()).e=this.a.cx.c
if(u)q.aZ($.$get$b0()).e=this.a.ch.c
if(w.rx)q.aZ($.$get$b3()).e=this.a.cy.c
if(t)q.aZ($.$get$b4()).e=this.a.db.c
if(w.x1)q.aZ($.$get$b_()).e=this.a.dx.c
b.e=q}z=T.dC
p=H.c([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.il()
if(w.fx){u=this.a
t=a.dx
t=t.ga1(t)
u=u.dy
u.toString
u.an(t.af(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.ga1(t)
s=a.dx
s=t.k(0,s.ga1(s))
a.cx=s
t=s}u=u.fr
u.toString
u.an(t.af(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giX()
s=a.dx
s=t.k(0,s.ga1(s))
a.ch=s
t=s}u=u.fy
u.toString
u.an(t.af(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.an(t.af(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.an(t.af(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.an(C.w.af(t,!0))}if(w.au>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.u],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.f(s,n)
s=s[n]
t.toString
H.e(s,"$isaB")
t=t.r1
if(n>=t.length)return H.f(t,n)
t=t[n]
m=new Float32Array(H.bE(H.t(s.af(0,!0),"$isd",u,"$asd")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.c:break
case C.i:u=this.a
t=this.f.f
u=u.r2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.Y(p,this.f.d)
u=this.a
t=this.f.d
u.ai(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.Y(p,this.f.e)
u=this.a
t=this.f.e
u.ab(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.i:u=this.a
t=this.r.f
u=u.x2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.Y(p,this.r.d)
u=this.a
t=this.r.d
u.ai(u.y1,u.au,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.Y(p,this.r.e)
u=this.a
t=this.r.e
u.ab(u.y2,u.au,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.c:break
case C.i:u=this.a
t=this.x.f
u=u.al
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.Y(p,this.x.d)
u=this.a
t=this.x.d
u.ai(u.bC,u.bD,t)
t=this.a
u=this.x.f
t=t.al
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.Y(p,this.x.e)
u=this.a
t=this.x.e
u.ab(u.dX,u.bD,t)
t=this.a
u=this.x.f
t=t.al
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bE
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.Y(p,this.y.d)
u=this.a
t=this.y.d
u.ai(u.dY,u.bF,t)
t=this.a
u=this.y.f
t=t.bE
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.Y(p,this.y.e)
u=this.a
t=this.y.e
u.ab(u.dZ,u.bF,t)
t=this.a
u=this.y.f
t=t.bE
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bG
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bI
t.a.uniform1f(t.d,r)
break
case C.f:this.Y(p,this.z.d)
u=this.a
t=this.z.d
u.ai(u.e_,u.bH,t)
t=this.a
u=this.z.f
t=t.bG
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bI
u.a.uniform1f(u.d,r)
break
case C.h:this.Y(p,this.z.e)
u=this.a
t=this.z.e
u.ab(u.e0,u.bH,t)
t=this.a
u=this.z.f
t=t.bG
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bI
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.eb
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cG
if(k>=s.length)return H.f(s,k)
h=s[k]
s=l.d4(i.a)
r=s.a
g=s.b
f=s.c
f=s.u(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.ec
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cH
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbh(i)
r=h.b
g=s.gd8(s)
f=s.gd9(s)
s=s.gda(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bm(i.gbh(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gat(i)
f=h.d
g=s.gbU()
r=s.gbn()
s=s.gbz()
f.a.uniform3f(f.d,g,r,s)
s=i.gcq()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gcr()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gcs()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.ed
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cI
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbh(i)
r=h.b
g=s.gd8(s)
f=s.gd9(s)
s=s.gda(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcF(i).jY()
f=h.c
g=s.gaW(s)
r=s.gaX(s)
s=s.gaY()
f.a.uniform3f(f.d,g,r,s)
s=l.bm(i.gbh(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gat(i)
r=h.e
g=s.gbU()
f=s.gbn()
s=s.gbz()
r.a.uniform3f(r.d,g,f,s)
s=i.gjV()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gjT()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gcq()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gcr()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gcs()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.ee
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
r=this.a.cJ
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gbj()
H.t(p,"$isd",s,"$asd")
if(!C.a.W(p,r)){r.sbt(p.length)
C.a.h(p,r)}r=i.gcF(i)
g=h.d
f=r.gaW(r)
e=r.gaX(r)
r=r.gaY()
g.a.uniform3f(g.d,f,e,r)
r=i.gbX()
e=h.b
f=r.gaW(r)
g=r.gaX(r)
r=r.gaY()
e.a.uniform3f(e.d,f,g,r)
r=i.gbi(i)
g=h.c
f=r.gaW(r)
e=r.gaX(r)
r=r.gaY()
g.a.uniform3f(g.d,f,e,r)
r=l.d4(i.gcF(i))
e=r.a
f=r.b
g=r.c
g=r.u(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gat(i)
f=h.f
e=g.gbU()
r=g.gbn()
g=g.gbz()
f.a.uniform3f(f.d,e,r,g)
g=i.gbj()
r=g.gcR(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gfC()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gbt())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.ef
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.y,t=u.length,s=[P.u],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
g=this.a.cK
if(k>=g.length)return H.f(g,k)
h=g[k]
g=i.gbj()
H.t(p,"$isd",r,"$asd")
if(!C.a.W(p,g)){g.sbt(p.length)
C.a.h(p,g)}d=l.k(0,i.ga1(i))
g=i.ga1(i).bm(new V.Y(0,0,0))
f=h.b
e=g.gd8(g)
c=g.gd9(g)
g=g.gda(g)
f.a.uniform3f(f.d,e,c,g)
g=d.bm(new V.Y(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.eq(0)
c=h.d
m=new Float32Array(H.bE(H.t(new V.cK(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).af(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gat(i)
g=h.e
e=c.gbU()
f=c.gbn()
c=c.gbz()
g.a.uniform3f(g.d,e,f,c)
c=i.gbj()
g=c.gcR(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gcR(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gjW(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gcq()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gcr()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gcs()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.eg
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cL
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbj()
H.t(p,"$isd",z,"$asd")
if(!C.a.W(p,s)){s.sbt(p.length)
C.a.h(p,s)}s=i.gbh(i)
r=h.b
g=s.gd8(s)
f=s.gd9(s)
s=s.gda(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcF(i)
f=h.c
g=s.gaW(s)
r=s.gaX(s)
s=s.gaY()
f.a.uniform3f(f.d,g,r,s)
s=i.gbX()
r=h.d
g=s.gaW(s)
f=s.gaX(s)
s=s.gaY()
r.a.uniform3f(r.d,g,f,s)
s=i.gbi(i)
f=h.e
g=s.gaW(s)
r=s.gaX(s)
s=s.gaY()
f.a.uniform3f(f.d,g,r,s)
s=l.bm(i.gbh(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gbj()
r=s.gcR(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gfC()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gbt())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gat(i)
r=h.y
g=s.gbU()
f=s.gbn()
s=s.gbz()
r.a.uniform3f(r.d,g,f,s)
s=i.gk7()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gk8()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gcq()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gcr()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gcs()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.Y(p,this.Q.d)
z=this.a
u=this.Q.d
z.ai(z.e1,z.bJ,u)
break
case C.h:this.Y(p,this.Q.e)
z=this.a
u=this.Q.e
z.ab(z.e2,z.bJ,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.ga1(u).eq(0)
a.Q=u}z=z.id
z.toString
z.an(u.af(0,!0))}if(w.dy){this.Y(p,this.ch)
z=this.a
u=this.ch
z.ab(z.e3,z.e4,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bK
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.Y(p,this.cx.d)
z=this.a
u=this.cx.d
z.ai(z.e5,z.bL,u)
u=this.a
z=this.cx.f
u=u.bK
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.Y(p,this.cx.e)
z=this.a
u=this.cx.e
z.ab(z.e6,z.bL,u)
u=this.a
z=this.cx.f
u=u.bK
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bN
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bM
u.a.uniform1f(u.d,s)
break
case C.f:this.Y(p,this.cy.d)
z=this.a
u=this.cy.d
z.ai(z.e7,z.bO,u)
u=this.a
z=this.cy.f
u=u.bN
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bM
z.a.uniform1f(z.d,s)
break
case C.h:this.Y(p,this.cy.e)
z=this.a
u=this.cy.e
z.ab(z.e8,z.bO,u)
u=this.a
z=this.cy.f
u=u.bN
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bM
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bP
z.a.uniform1f(z.d,t)
break
case C.f:this.Y(p,this.db.d)
z=this.a
t=this.db.d
z.ai(z.e9,z.bQ,t)
t=this.a
z=this.db.f
t=t.bP
t.a.uniform1f(t.d,z)
break
case C.h:this.Y(p,this.db.e)
z=this.a
t=this.db.e
z.ab(z.ea,z.bQ,t)
t=this.a
z=this.db.f
t=t.bP
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.ct(a)
z.b3(a)
z.jh(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.ij()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.ds().al}},jf:{"^":"dq;0f,a,b,0c,0d,0e",
hm:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.S(this.b,y,a,this,[P.u])
z.b=!0
this.a.a5(z)}},
b8:function(){this.dg()
this.hm(1)}},dq:{"^":"b;",
a5:[function(a){this.a.a5(H.e(a,"$isC"))},function(){return this.a5(null)},"fg","$1","$0","gbr",0,2,1],
b8:["dg",function(){}],
hq:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gC().I(0,this.gbr())
y=this.d
this.d=a
if(a!=null)a.gC().h(0,this.gbr())
z=new D.S(this.b+".texture2D",y,this.d,this,[T.ff])
z.b=!0
this.a.a5(z)}},
hr:function(a){},
sb5:function(a){var z=this.c
if(z!==C.f){if(z===C.c)this.b8()
this.c=C.f
this.hr(null)
z=this.a
z.a=null
z.a5(null)}this.hq(a)}},jg:{"^":"dq;a,b,0c,0d,0e"},bn:{"^":"dq;0f,a,b,0c,0d,0e",
hn:function(a){var z,y
if(!J.J(this.f,a)){z=this.f
this.f=a
y=new D.S(this.b+".color",z,a,this,[V.ak])
y.b=!0
this.a.a5(y)}},
b8:["dh",function(){this.dg()
this.hn(new V.ak(1,1,1))}]},ji:{"^":"bn;0ch,0f,a,b,0c,0d,0e",
ho:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.S(this.b+".refraction",y,a,this,[P.u])
z.b=!0
this.a.a5(z)}},
b8:function(){this.dh()
this.ho(1)}},jj:{"^":"bn;0ch,0f,a,b,0c,0d,0e",
hp:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.S(this.b+".shininess",y,a,this,[P.u])
z.b=!0
this.a.a5(z)}},
b8:function(){this.dh()
this.hp(100)}},dB:{"^":"b;"}}],["","",,T,{"^":"",dC:{"^":"d6;"},ff:{"^":"dC;"},kn:{"^":"ff;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gC:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z}},ko:{"^":"b;a,0b,0c,0d,0e",
iF:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.kn()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.af
W.a7(x,"load",H.l(new T.kp(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
eu:function(a){return this.iF(a,!1,!1,!1,!1)},
hi:function(a,b,c){var z,y,x,w
b=V.e2(b,2)
z=V.e2(a.width,2)
y=V.e2(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.db(null,null)
x.width=z
x.height=y
w=H.e(C.l.eQ(x,"2d"),"$isen")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.ny(w.getImageData(0,0,x.width,x.height))}}},kp:{"^":"m:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.hi(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.a4.jb(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.ik()}++x.e}}}],["","",,V,{"^":"",bL:{"^":"b;",
b0:function(a,b){return!0},
j:function(a){return"all"},
$isaW:1},aW:{"^":"b;"},eT:{"^":"b;",
b0:["f0",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)if(z[x].b0(0,b))return!0
return!1}],
j:["df",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$isaW:1},aD:{"^":"eT;0a",
b0:function(a,b){return!this.f0(0,b)},
j:function(a){return"!["+this.df(0)+"]"}},jN:{"^":"b;0a,0b",
b0:function(a,b){return this.a<=b&&this.b>=b},
j:function(a){var z,y
z=H.bW(this.a)
y=H.bW(this.b)
return z+".."+y},
$isaW:1,
t:{
Z:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.H(a,0)
y=C.b.H(b,0)
x=new V.jN()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},k1:{"^":"b;0a",
f5:function(a){var z,y
if(a.a.length<=0)throw H.a(P.r("May not create a SetMatcher with zero characters."))
z=new H.bc(0,0,[P.n,P.V])
for(y=new H.dn(a,a.gn(a),0,[H.ap(a,"z",0)]);y.G();)z.l(0,y.d,!0)
this.a=z},
b0:function(a,b){return this.a.bA(0,b)},
j:function(a){var z=this.a
return P.cp(z.ga7(z),0,null)},
$isaW:1,
t:{
x:function(a){var z=new V.k1()
z.f5(a)
return z}}},f8:{"^":"b;a,b,0c,0d",
giH:function(a){return this.b},
p:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fm(this.a.m(0,b))
w.a=H.c([],[V.aW])
w.c=!1
C.a.h(this.c,w)
return w},
iq:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.b0(0,a))return w}return},
j:function(a){return this.b}},fj:{"^":"b;a,b,c",
j:function(a){var z,y
z=H.e5(this.b,"\n","\\n")
y=H.e5(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fk:{"^":"b;a,b,0c",
aI:function(a,b,c){var z,y,x
H.t(c,"$isd",[P.h],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.D)(c),++y){x=c[y]
this.c.l(0,x,b)}},
j:function(a){return this.b}},kx:{"^":"b;0a,0b,0c",
m:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.f8(this,b)
z.c=H.c([],[V.fm])
this.a.l(0,b,z)}return z},
R:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.fk(this,a)
y=P.h
z.c=new H.bc(0,0,[y,y])
this.b.l(0,a,z)}return z},
eK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fj])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.iq(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cp(w,0,null)
throw H.a(P.r("Untokenizable string [state: "+y.giH(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cp(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.fj(o==null?p.b:o,q,t)}++t}}},
t:{
cP:function(){var z,y
z=new V.kx()
y=P.h
z.a=new H.bc(0,0,[y,V.f8])
z.b=new H.bc(0,0,[y,V.fk])
return z}}},fm:{"^":"eT;b,0c,0a",
j:function(a){return this.b.b+": "+this.df(0)}}}],["","",,X,{"^":"",em:{"^":"b;",$isaX:1},iF:{"^":"fc;0a,0b,0c,0d,0e,0f,0r,0x",
gC:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z}},jw:{"^":"b;0a,0b,0c,0d,0e,0f",
gC:function(){var z=this.f
if(z==null){z=D.Q()
this.f=z}return z},
b7:[function(a){var z
H.e(a,"$isC")
z=this.f
if(!(z==null))z.E(a)},function(){return this.b7(null)},"jl","$1","$0","gdj",0,2,1],
sbe:function(a){var z,y
if(!J.J(this.b,a)){z=this.b
if(z!=null)z.gC().I(0,this.gdj())
y=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gdj())
z=new D.S("mover",y,this.b,this,[U.an])
z.b=!0
this.b7(z)}},
$isaX:1,
$isem:1},fc:{"^":"b;"}}],["","",,V,{"^":"",
oc:function(a){P.kw(C.N,new V.od(a))},
b8:{"^":"b;",
bq:function(a){this.b=new P.iI(C.O)
this.c=null
this.d=H.c([],[[P.d,W.bi]])},
N:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.bi]))
y=a.split("\n")
for(z=y.length,x=[W.bi],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.I(u)
s=this.b.ft(u,0,u.length)
r=s==null?u:s
C.M.eU(t,H.e5(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaw(this.d),t)}},
eA:function(a,b){var z,y,x,w
H.t(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bi]])
z=C.a.p(b,"\n")
y=this.c
if(y==null){y=this.bB()
this.c=y}for(y=y.eK(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)this.bT(y[w])}},
od:{"^":"m:53;a",
$1:function(a){H.e(a,"$isbx")
P.e3(C.e.eJ(this.a.giw(),2)+" fps")}},
ik:{"^":"b8;a,0b,0c,0d",
bT:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break
case"Type":this.N(a.b,"#B11")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bB:function(){var z,y,x,w
z=V.cP()
z.c=z.m(0,"Start")
y=z.m(0,"Start").p(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.m(0,"Id").p(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.m(0,"Start").p(0,"Int")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.m(0,"Int").p(0,"Int")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.m(0,"Int").p(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.m(0,"FloatDot").p(0,"Float")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.m(0,"Float").p(0,"Float")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.m(0,"Start").p(0,"Sym")
y=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.m(0,"Sym").p(0,"Sym")
x=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.m(0,"Start").p(0,"OpenDoubleStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.m(0,"OpenDoubleStr").p(0,"CloseDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.m(0,"OpenDoubleStr").p(0,"EscDoubleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.m(0,"EscDoubleStr").p(0,"OpenDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
C.a.h(z.m(0,"OpenDoubleStr").p(0,"OpenDoubleStr").a,new V.bL())
x=z.m(0,"Start").p(0,"OpenSingleStr")
y=V.x(new H.w("'"))
C.a.h(x.a,y)
y=z.m(0,"OpenSingleStr").p(0,"CloseSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
x=z.m(0,"OpenSingleStr").p(0,"EscSingleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.m(0,"EscSingleStr").p(0,"OpenSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
C.a.h(z.m(0,"OpenSingleStr").p(0,"OpenSingleStr").a,new V.bL())
x=z.m(0,"Start").p(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.m(0,"Slash").p(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.m(0,"Comment").p(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.m(0,"Comment").p(0,"Comment")
x=new V.aD()
w=[V.aW]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.m(0,"Slash").p(0,"MLComment")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
x=z.m(0,"MLComment").p(0,"MLCStar")
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.m(0,"MLCStar").p(0,"MLComment")
x=new V.aD()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.m(0,"MLCStar").p(0,"EndComment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.m(0,"Start").p(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.m(0,"Whitespace").p(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.m(0,"Int")
x.d=x.a.R("Num")
x=z.m(0,"Float")
x.d=x.a.R("Num")
x=z.m(0,"Sym")
x.d=x.a.R("Symbol")
x=z.m(0,"CloseDoubleStr")
x.d=x.a.R("String")
x=z.m(0,"CloseSingleStr")
x.d=x.a.R("String")
x=z.m(0,"EndComment")
x.d=x.a.R("Comment")
x=z.m(0,"Whitespace")
x.d=x.a.R("Whitespace")
x=z.m(0,"Id")
y=x.a.R("Id")
x.d=y
x=[P.h]
y.aI(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aI(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aI(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iG:{"^":"b8;a,0b,0c,0d",
bT:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Preprocess":this.N(a.b,"#737")
break
case"Reserved":this.N(a.b,"#119")
break
case"Symbol":this.N(a.b,"#611")
break
case"Type":this.N(a.b,"#171")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bB:function(){var z,y,x,w
z=V.cP()
z.c=z.m(0,"Start")
y=z.m(0,"Start").p(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.m(0,"Id").p(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.m(0,"Start").p(0,"Int")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.m(0,"Int").p(0,"Int")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.m(0,"Int").p(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.m(0,"FloatDot").p(0,"Float")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.m(0,"Float").p(0,"Float")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.m(0,"Start").p(0,"Sym")
y=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.m(0,"Sym").p(0,"Sym")
x=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.m(0,"Start").p(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.m(0,"Slash").p(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
C.a.h(z.m(0,"Slash").p(0,"Sym").a,new V.bL())
x=z.m(0,"Comment").p(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.m(0,"Comment").p(0,"Comment")
x=new V.aD()
w=[V.aW]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.m(0,"Start").p(0,"Preprocess")
x=V.x(new H.w("#"))
C.a.h(y.a,x)
x=z.m(0,"Preprocess").p(0,"Preprocess")
y=new V.aD()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("\n"))
C.a.h(y.a,x)
x=z.m(0,"Preprocess").p(0,"EndPreprocess")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.m(0,"Start").p(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.m(0,"Whitespace").p(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.m(0,"Int")
y.d=y.a.R("Num")
y=z.m(0,"Float")
y.d=y.a.R("Num")
y=z.m(0,"Sym")
y.d=y.a.R("Symbol")
y=z.m(0,"EndComment")
y.d=y.a.R("Comment")
y=z.m(0,"EndPreprocess")
y.d=y.a.R("Preprocess")
y=z.m(0,"Whitespace")
y.d=y.a.R("Whitespace")
y=z.m(0,"Id")
x=y.a.R("Id")
y.d=x
y=[P.h]
x.aI(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aI(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aI(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iH:{"^":"b8;a,0b,0c,0d",
bT:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
this.N("=","#111")
break
case"Id":this.N(a.b,"#111")
break
case"Other":this.N(a.b,"#111")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break}},
bB:function(){var z,y,x
z=V.cP()
z.c=z.m(0,"Start")
y=z.m(0,"Start").p(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.m(0,"Id").p(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.m(0,"Id").p(0,"Attr")
x=V.x(new H.w("="))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Start").p(0,"Sym")
x=V.x(new H.w("</\\-!>="))
C.a.h(y.a,x)
x=z.m(0,"Sym").p(0,"Sym")
y=V.x(new H.w("</\\-!>="))
C.a.h(x.a,y)
y=z.m(0,"Start").p(0,"OpenStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.m(0,"OpenStr").p(0,"CloseStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.m(0,"OpenStr").p(0,"EscStr")
x=V.x(new H.w("\\"))
C.a.h(y.a,x)
x=z.m(0,"EscStr").p(0,"OpenStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
C.a.h(z.m(0,"OpenStr").p(0,"OpenStr").a,new V.bL())
C.a.h(z.m(0,"Start").p(0,"Other").a,new V.bL())
y=z.m(0,"Other").p(0,"Other")
x=new V.aD()
x.a=H.c([],[V.aW])
C.a.h(y.a,x)
y=V.x(new H.w('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.m(0,"Sym")
y.d=y.a.R("Symbol")
y=z.m(0,"CloseStr")
y.d=y.a.R("String")
y=z.m(0,"Id")
x=y.a.R("Id")
y.d=x
x.aI(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.m(0,"Attr")
x.d=x.a.R("Attr")
x=z.m(0,"Other")
x.d=x.a.R("Other")
return z}},
jy:{"^":"b8;a,0b,0c,0d",
eA:function(a,b){H.t(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bi]])
this.N(C.a.p(b,"\n"),"#111")},
bT:function(a){},
bB:function(){return}},
jL:{"^":"b;a,b,0c",
bx:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fG().gd_().i(0,H.j(z))
if(y==null)if(d){c.$0()
this.dL(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e9(this.c).h(0,v)
t=W.iL("radio")
t.checked=x
t.name=z
z=W.af
W.a7(t,"change",H.l(new V.jM(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.e9(this.c).h(0,w.createElement("br"))},
ar:function(a,b,c){return this.bx(a,b,c,!1)},
dL:function(a){var z,y,x,w,v
z=P.fG()
y=P.h
x=P.j1(z.gd_(),y,y)
x.l(0,this.a,a)
w=z.eF(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.mp([],[]).d5(""),"",v)}},
jM:{"^":"m:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dL(this.d)}}},
k6:{"^":"b;0a,0b",
f7:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop"
y.appendChild(x)
w=z.createElement("div")
w.className="scrollPage"
y.appendChild(w)
v=z.createElement("div")
v.className="pageCenter"
w.appendChild(v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
v.appendChild(u)}t=z.createElement("div")
this.a=t
v.appendChild(t)
this.b=null
t=W.af
W.a7(z,"scroll",H.l(new V.k9(x),{func:1,ret:-1,args:[t]}),!1,t)},
dP:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.t(a,"$isd",[P.h],"$asd")
this.hu()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eK(C.a.iC(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
y.appendChild(t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
y.appendChild(t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
y.appendChild(t)
break
case"Link":s=u.b
if(H.hK(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.ct(C.B,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
eP:function(a){var z,y,x,w
z=new V.ik("dart")
z.bq("dart")
y=new V.iG("glsl")
y.bq("glsl")
x=new V.iH("html")
x.bq("html")
w=C.a.ir(H.c([z,y,x],[V.b8]),new V.ka(a))
if(w!=null)return w
z=new V.jy("plain")
z.bq("plain")
return z},
dN:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.t(a2,"$isd",[P.h],"$asd")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.ca(w).a4(w,"+")){C.a.l(a2,x,C.b.ao(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a4(w,"-")){C.a.l(a2,x,C.b.ao(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eP(a0)
v.eA(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.ct(C.B,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.eb(null)
n.href="#"+H.j(r)
n.textContent=a
o.appendChild(n)
p.appendChild(o)
q.appendChild(p)
s.appendChild(q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.f(z,x)
g=z[x]
if(g===0){++l;++m
i.textContent=""+l
h.textContent=""+m}else if(g>0){j.className="codeTableRow codeLineLightGreen"
i.className="codeLineNums codeLineGreen codeLineCenter"
h.className="codeLineNums codeLineGreen";++m
i.textContent="+"
h.textContent=""+m}else if(g<0){j.className="codeTableRow codeLineLightRed"
i.className="codeLineNums codeLineRed"
h.className="codeLineNums codeLineRed codeLineCenter";++l
i.textContent=""+l
h.textContent="-"}f=u.createElement("td")
f.className="codeLineText"
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.D)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.D)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.ga0(w);b.G();)h.appendChild(b.gO(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
hY:function(a){var z,y,x,w,v,u,t
H.t(a,"$isd",[P.h],"$asd")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
this.a.appendChild(y)
w=y.insertRow(-1)
x=H.e(w.insertCell(-1),"$isdA").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<1;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.e(w.insertCell(-1),"$isdA")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hu:function(){var z,y,x,w
if(this.b!=null)return
z=V.cP()
z.c=z.m(0,"Start")
y=z.m(0,"Start").p(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Bold").p(0,"Bold")
x=new V.aD()
w=[V.aW]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.m(0,"Bold").p(0,"BoldEnd")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Start").p(0,"Italic")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Italic").p(0,"Italic")
x=new V.aD()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=z.m(0,"Italic").p(0,"ItalicEnd")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Start").p(0,"Code")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Code").p(0,"Code")
x=new V.aD()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("`"))
C.a.h(x.a,y)
y=z.m(0,"Code").p(0,"CodeEnd")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Start").p(0,"LinkHead")
x=V.x(new H.w("["))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"LinkHead").p(0,"LinkTail")
x=V.x(new H.w("|"))
C.a.h(y.a,x)
x=z.m(0,"LinkHead").p(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.m(0,"LinkHead").p(0,"LinkHead")
y=new V.aD()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
x=z.m(0,"LinkTail").p(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.m(0,"LinkTail").p(0,"LinkTail")
y=new V.aD()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
C.a.h(z.m(0,"Start").p(0,"Other").a,new V.bL())
x=z.m(0,"Other").p(0,"Other")
y=new V.aD()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("*_`["))
C.a.h(y.a,x)
x=z.m(0,"BoldEnd")
x.d=x.a.R("Bold")
x=z.m(0,"ItalicEnd")
x.d=x.a.R("Italic")
x=z.m(0,"CodeEnd")
x.d=x.a.R("Code")
x=z.m(0,"LinkEnd")
x.d=x.a.R("Link")
x=z.m(0,"Other")
x.d=x.a.R("Other")
this.b=z},
t:{
k7:function(a,b){var z=new V.k6()
z.f7(a,!0)
return z}}},
k9:{"^":"m:13;a",
$1:function(a){P.fh(C.q,new V.k8(this.a))}},
k8:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.e.ae(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
ka:{"^":"m:54;a",
$1:function(a){return H.e(a,"$isb8").a===this.a}}}],["","",,M,{"^":"",
hE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=V.k7("Test 018",!0)
y=W.db(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.dP(H.c(["A test of the Material Lighting shader where a diffuse textue and ","inverse diffuse texture are used. Grass is only shown in the dark. ","Dirt is shown where the directional light is shining."],x))
z.hY(H.c(["shapes"],x))
z.dP(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.q(P.r("Failed to find an element with the identifier, testCanvas."))
v=E.ku(w,!0,!0,!0,!1)
u=new E.ba()
u.a=""
u.b=!0
t=E.ba
s=O.dc(t)
u.y=s
s.bp(u.giJ(),u.giL())
u.z=null
u.Q=null
u.ch=null
u.cx=null
u.cy=null
u.db=null
u.dx=null
u.dy=null
u.fr=null
u.fx=null
u.sa8(0,null)
u.sbe(null)
u.sa8(0,F.hJ(8,null,1,8))
s=new U.eG()
r=U.an
s.c2(r)
s.bp(s.gfK(),s.gh5())
s.e=null
s.f=V.cm()
s.r=0
q=v.r
p=new U.kZ()
o=U.dd()
o.sd7(0,!0)
o.scS(6.283185307179586)
o.scU(0)
o.sZ(0,0)
o.scT(100)
o.sV(0)
o.scE(0.5)
p.b=o
n=p.gaQ()
o.gC().h(0,n)
o=U.dd()
o.sd7(0,!0)
o.scS(6.283185307179586)
o.scU(0)
o.sZ(0,0)
o.scT(100)
o.sV(0)
o.scE(0.5)
p.c=o
o.gC().h(0,n)
p.d=null
p.e=!1
p.f=!1
p.r=!1
p.x=2.5
p.y=2.5
p.z=2
p.Q=4
p.cx=!1
p.ch=!1
p.cy=0
p.db=0
p.dx=null
p.dy=0
p.fr=null
p.fx=null
m=new X.aN(!1,!1,!1)
l=p.d
p.d=m
o=[X.aN]
n=new D.S("modifiers",l,m,p,o)
n.b=!0
p.T(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.S("invertX",n,!1,p,[P.V])
n.b=!0
p.T(n)}n=p.r
if(n!==!1){p.r=!1
n=new D.S("invertY",n,!1,p,[P.V])
n.b=!0
p.T(n)}p.bb(q)
s.h(0,p)
q=v.r
p=new U.kY()
n=U.dd()
n.sd7(0,!0)
n.scS(6.283185307179586)
n.scU(0)
n.sZ(0,0)
n.scT(100)
n.sV(0)
n.scE(0.2)
p.b=n
n.gC().h(0,p.gaQ())
p.c=null
p.d=!1
p.e=2.5
p.f=2
p.r=4
p.y=!1
p.x=!1
p.z=0
p.Q=null
p.ch=0
p.cx=null
p.cy=null
m=new X.aN(!0,!1,!1)
l=p.c
p.c=m
n=new D.S("modifiers",l,m,p,o)
n.b=!0
p.T(n)
p.bb(q)
s.h(0,p)
q=v.r
p=new U.l_()
p.c=0.01
p.d=0
p.e=0
m=new X.aN(!1,!1,!1)
p.b=m
o=new D.S("modifiers",null,m,p,o)
o.b=!0
p.T(o)
p.bb(q)
s.h(0,p)
u.sbe(s)
k=v.f.eu("../resources/Dirt.png")
j=v.f.eu("../resources/Grass.png")
i=new O.jc()
s=O.dc(V.aB)
i.e=s
s.bp(i.gfM(),i.gfN())
s=new O.bn(i,"emission")
s.c=C.c
s.f=new V.ak(0,0,0)
i.f=s
s=new O.bn(i,"ambient")
s.c=C.c
s.f=new V.ak(0,0,0)
i.r=s
s=new O.bn(i,"diffuse")
s.c=C.c
s.f=new V.ak(0,0,0)
i.x=s
s=new O.bn(i,"invDiffuse")
s.c=C.c
s.f=new V.ak(0,0,0)
i.y=s
s=new O.jj(i,"specular")
s.c=C.c
s.f=new V.ak(0,0,0)
s.ch=100
i.z=s
s=new O.jg(i,"bump")
s.c=C.c
i.Q=s
i.ch=null
s=new O.bn(i,"reflect")
s.c=C.c
s.f=new V.ak(0,0,0)
i.cx=s
s=new O.ji(i,"refract")
s.c=C.c
s.f=new V.ak(0,0,0)
s.ch=1
i.cy=s
s=new O.jf(i,"alpha")
s.c=C.c
s.f=1
i.db=s
s=new D.iU()
s.c2(D.a8)
s.e=H.c([],[D.cC])
s.f=H.c([],[D.jz])
s.r=H.c([],[D.kf])
s.x=H.c([],[D.kq])
s.y=H.c([],[D.kr])
s.z=H.c([],[D.ks])
s.Q=null
s.ch=null
s.dd(s.gfL(),s.gh4(),s.gh6())
i.dx=s
q=s.Q
if(q==null){q=D.Q()
s.Q=q
s=q}else s=q
s.h(0,i.ghg())
s=i.dx
q=s.ch
if(q==null){q=D.Q()
s.ch=q
s=q}else s=q
s.h(0,i.gbr())
i.dy=null
s=i.dx
q=U.er(V.eU(new V.Y(0,0,0),new V.A(0,1,0),new V.A(-1,-1,-1)))
h=new V.ak(1,1,1)
p=new D.cC()
p.c=new V.ak(1,1,1)
p.a=new V.A(0,0,1)
l=p.b
p.b=q
q.gC().h(0,p.gfe())
r=new D.S("mover",l,p.b,p,[r])
r.b=!0
p.aL(r)
if(!p.c.w(0,h)){l=p.c
p.c=h
r=new D.S("color",l,h,p,[V.ak])
r.b=!0
p.aL(r)}s.h(0,p)
i.x.sb5(k)
i.y.sb5(j)
s=new M.iw()
t=O.dc(t)
s.d=t
t.bp(s.gfP(),s.gfQ())
s.e=null
s.f=null
s.r=null
s.x=null
g=new X.jw()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.sbe(null)
t=g.c
if(!$.p.$2(t,1.0471975511965976)){l=g.c
g.c=1.0471975511965976
t=new D.S("fov",l,1.0471975511965976,g,[P.u])
t.b=!0
g.b7(t)}t=g.d
if(!$.p.$2(t,0.1)){l=g.d
g.d=0.1
t=new D.S("near",l,0.1,g,[P.u])
t.b=!0
g.b7(t)}t=g.e
if(!$.p.$2(t,2000)){l=g.e
g.e=2000
t=new D.S("far",l,2000,g,[P.u])
t.b=!0
g.b7(t)}t=s.a
if(t!==g){if(t!=null)t.gC().I(0,s.gap())
l=s.a
s.a=g
g.gC().h(0,s.gap())
t=new D.S("camera",l,s.a,s,[X.em])
t.b=!0
s.aM(t)}f=new X.iF()
t=new V.aT(0,0,0,1)
f.a=t
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
t=V.f3(0,0,1,1)
f.r=t
t=s.b
if(t!==f){if(t!=null)t.gC().I(0,s.gap())
l=s.b
s.b=f
f.gC().h(0,s.gap())
t=new D.S("target",l,s.b,s,[X.fc])
t.b=!0
s.aM(t)}s.seH(null)
s.seH(i)
s.d.h(0,u)
s.a.sbe(U.er(V.aM(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
t=v.d
if(t!==s){if(t!=null)t.gC().I(0,v.gdi())
v.d=s
s.gC().h(0,v.gdi())
v.fa()}t=new V.jL("shapes",!0)
x=x.getElementById("shapes")
t.c=x
if(x==null)H.q("Failed to find shapes for RadioGroup")
t.ar(0,"Cube",new M.nY(u))
t.ar(0,"Cuboid",new M.nZ(u))
t.ar(0,"Cylinder",new M.o_(u))
t.ar(0,"Cone",new M.o0(u))
t.ar(0,"LatLonSphere",new M.o1(u))
t.ar(0,"IsoSphere",new M.o2(u))
t.bx(0,"Sphere",new M.o3(u),!0)
t.ar(0,"Toroid",new M.o4(u))
t.ar(0,"Knot",new M.o5(u))
x=v.z
if(x==null){x=D.Q()
v.z=x}t={func:1,ret:-1,args:[D.C]}
s=H.l(new M.o6(z,i),t)
r=x.b
if(r==null){t=H.c([],[t])
x.b=t
x=t}else x=r
C.a.h(x,s)
V.oc(v)},
nY:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.dX(1,null,null,1))}},
nZ:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.dX(8,null,null,8))}},
o_:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.hs(1,!0,!0,1,40,1))}},
o0:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.hs(1,!0,!1,1,40,0))}},
o1:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.nV(10,20))}},
o2:{"^":"m:0;a",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.cN()
y=Math.sqrt(5)/2+0.5
x=F.aj(z,new V.A(-1,y,0))
w=F.aj(z,new V.A(1,y,0))
v=-y
u=F.aj(z,new V.A(-1,v,0))
t=F.aj(z,new V.A(1,v,0))
s=F.aj(z,new V.A(0,-1,v))
r=F.aj(z,new V.A(0,1,v))
q=F.aj(z,new V.A(0,-1,y))
p=F.aj(z,new V.A(0,1,y))
o=F.aj(z,new V.A(y,0,1))
n=F.aj(z,new V.A(y,0,-1))
m=F.aj(z,new V.A(v,0,1))
l=F.aj(z,new V.A(v,0,-1))
F.a0(z,x,l,r,2)
F.a0(z,x,r,w,2)
F.a0(z,x,w,p,2)
F.a0(z,x,p,m,2)
F.a0(z,x,m,l,2)
F.a0(z,w,r,n,2)
F.a0(z,r,l,s,2)
F.a0(z,l,m,u,2)
F.a0(z,m,p,q,2)
F.a0(z,p,w,o,2)
F.a0(z,t,n,s,2)
F.a0(z,t,s,u,2)
F.a0(z,t,u,q,2)
F.a0(z,t,q,o,2)
F.a0(z,t,o,n,2)
F.a0(z,s,n,r,2)
F.a0(z,u,s,l,2)
F.a0(z,q,u,m,2)
F.a0(z,o,q,p,2)
F.a0(z,n,o,w,2)
z.ev(new F.dJ(),new F.lc())
this.a.sa8(0,z)}},
o3:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.hJ(6,null,1,6))}},
o4:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.oh(30,1,15,0.5))}},
o5:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.nT(120,1,2,12,0.3,3))}},
o6:{"^":"m:10;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isC")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dN("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dN("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eL.prototype
return J.eK.prototype}if(typeof a=="string")return J.cj.prototype
if(a==null)return J.eM.prototype
if(typeof a=="boolean")return J.iP.prototype
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ck.prototype
return a}if(a instanceof P.b)return a
return J.d_(a)}
J.az=function(a){if(typeof a=="string")return J.cj.prototype
if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ck.prototype
return a}if(a instanceof P.b)return a
return J.d_(a)}
J.c9=function(a){if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ck.prototype
return a}if(a instanceof P.b)return a
return J.d_(a)}
J.hw=function(a){if(typeof a=="number")return J.ci.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cr.prototype
return a}
J.hx=function(a){if(typeof a=="number")return J.ci.prototype
if(typeof a=="string")return J.cj.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cr.prototype
return a}
J.ca=function(a){if(typeof a=="string")return J.cj.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cr.prototype
return a}
J.aG=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ck.prototype
return a}if(a instanceof P.b)return a
return J.d_(a)}
J.J=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).w(a,b)}
J.aH=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.hw(a).ag(a,b)}
J.hM=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.hw(a).K(a,b)}
J.e6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.hx(a).k(a,b)}
J.e7=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hB(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.az(a).i(a,b)}
J.d4=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hB(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c9(a).l(a,b,c)}
J.hN=function(a,b){return J.ca(a).H(a,b)}
J.hO=function(a,b,c){return J.aG(a).hd(a,b,c)}
J.hP=function(a,b,c,d){return J.aG(a).dO(a,b,c,d)}
J.hQ=function(a,b){return J.ca(a).a_(a,b)}
J.hR=function(a,b){return J.hx(a).aV(a,b)}
J.d5=function(a,b,c){return J.az(a).ia(a,b,c)}
J.cx=function(a,b){return J.c9(a).J(a,b)}
J.hS=function(a,b,c,d){return J.c9(a).aH(a,b,c,d)}
J.e8=function(a,b){return J.c9(a).M(a,b)}
J.hT=function(a){return J.aG(a).gi5(a)}
J.e9=function(a){return J.aG(a).gcB(a)}
J.cc=function(a){return J.L(a).gX(a)}
J.b7=function(a){return J.c9(a).ga0(a)}
J.aq=function(a){return J.az(a).gn(a)}
J.hU=function(a){return J.aG(a).gcY(a)}
J.hV=function(a){return J.aG(a).gja(a)}
J.ea=function(a){return J.c9(a).iZ(a)}
J.hW=function(a,b){return J.aG(a).j3(a,b)}
J.hX=function(a,b){return J.aG(a).sa3(a,b)}
J.hY=function(a,b,c){return J.ca(a).v(a,b,c)}
J.hZ=function(a){return J.ca(a).jg(a)}
J.ad=function(a){return J.L(a).j(a)}
I.ab=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cz.prototype
C.l=W.da.prototype
C.M=W.bi.prototype
C.P=J.v.prototype
C.a=J.bm.prototype
C.Q=J.eK.prototype
C.d=J.eL.prototype
C.w=J.eM.prototype
C.e=J.ci.prototype
C.b=J.cj.prototype
C.X=J.ck.prototype
C.a2=H.dv.prototype
C.a3=W.jq.prototype
C.E=J.jx.prototype
C.a4=P.dx.prototype
C.F=W.km.prototype
C.u=J.cr.prototype
C.G=W.c0.prototype
C.H=W.lk.prototype
C.J=new P.i3(!1)
C.I=new P.i2(C.J)
C.K=new P.jv()
C.L=new P.l7()
C.j=new P.m7()
C.c=new A.cB(0,"ColorSourceType.None")
C.i=new A.cB(1,"ColorSourceType.Solid")
C.f=new A.cB(2,"ColorSourceType.Texture2D")
C.h=new A.cB(3,"ColorSourceType.TextureCube")
C.q=new P.aL(0)
C.N=new P.aL(5e6)
C.O=new P.iJ("element",!0,!1,!1,!1)
C.R=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.S=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.x=function(hooks) { return hooks; }

C.T=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.U=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.V=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.W=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=H.c(I.ab([127,2047,65535,1114111]),[P.n])
C.m=H.c(I.ab([0,0,32776,33792,1,10240,0,0]),[P.n])
C.Y=H.c(I.ab(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.n=H.c(I.ab([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.c(I.ab([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.Z=H.c(I.ab(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.A=H.c(I.ab([]),[P.h])
C.a_=H.c(I.ab([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.B=H.c(I.ab([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.c(I.ab([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.C=H.c(I.ab([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a0=H.c(I.ab([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.D=H.c(I.ab([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.r=H.c(I.ab(["bind","if","ref","repeat","syntax"]),[P.h])
C.t=H.c(I.ab(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a1=new H.ig(0,{},C.A,[P.h,P.h])
C.k=new P.l0(!1)
$.aK=0
$.bM=null
$.eh=null
$.dR=!1
$.hz=null
$.hp=null
$.hI=null
$.cZ=null
$.d1=null
$.e_=null
$.bF=null
$.c5=null
$.c6=null
$.dS=!1
$.a_=C.j
$.aV=null
$.de=null
$.eD=null
$.eC=null
$.ey=null
$.ex=null
$.ew=null
$.ev=null
$.p=V.jk()
$.f_=null
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){var z=$dart_deferred_initializers$[a]
if(z==null)throw"DeferredLoading state error: code with hash '"+a+"' was not loaded"
z($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryParts={}
init.deferredPartUris=[]
init.deferredPartHashes=[];(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["eu","$get$eu",function(){return H.hy("_$dart_dartClosure")},"di","$get$di",function(){return H.hy("_$dart_js")},"fn","$get$fn",function(){return H.aP(H.cQ({
toString:function(){return"$receiver$"}}))},"fo","$get$fo",function(){return H.aP(H.cQ({$method$:null,
toString:function(){return"$receiver$"}}))},"fp","$get$fp",function(){return H.aP(H.cQ(null))},"fq","$get$fq",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fu","$get$fu",function(){return H.aP(H.cQ(void 0))},"fv","$get$fv",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fs","$get$fs",function(){return H.aP(H.ft(null))},"fr","$get$fr",function(){return H.aP(function(){try{null.$method$}catch(z){return z.message}}())},"fx","$get$fx",function(){return H.aP(H.ft(void 0))},"fw","$get$fw",function(){return H.aP(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dM","$get$dM",function(){return P.ll()},"c7","$get$c7",function(){return[]},"fJ","$get$fJ",function(){return P.l4()},"fR","$get$fR",function(){return H.jo(H.bE(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"he","$get$he",function(){return P.jS("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hl","$get$hl",function(){return P.ne()},"es","$get$es",function(){return{}},"fV","$get$fV",function(){return P.eQ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dN","$get$dN",function(){return P.dm(P.h,P.cg)},"fN","$get$fN",function(){return Z.ax(0)},"fL","$get$fL",function(){return Z.ax(511)},"b2","$get$b2",function(){return Z.ax(1)},"b1","$get$b1",function(){return Z.ax(2)},"b0","$get$b0",function(){return Z.ax(4)},"b3","$get$b3",function(){return Z.ax(8)},"b4","$get$b4",function(){return Z.ax(16)},"bZ","$get$bZ",function(){return Z.ax(32)},"c_","$get$c_",function(){return Z.ax(64)},"fM","$get$fM",function(){return Z.ax(96)},"bC","$get$bC",function(){return Z.ax(128)},"b_","$get$b_",function(){return Z.ax(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.N,args:[F.ai,P.u,P.u]},{func:1,ret:P.N,args:[F.au]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.N,args:[D.C]},{func:1,ret:-1,args:[P.n,[P.i,E.ba]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[W.af]},{func:1,ret:P.u},{func:1,ret:-1,args:[W.bz]},{func:1,ret:P.V,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.n,[P.i,D.a8]]},{func:1,ret:P.h,args:[P.h]},{func:1,args:[,]},{func:1,ret:P.V,args:[W.W,P.h,P.h,W.cs]},{func:1,ret:P.u,args:[P.u]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:P.V,args:[W.H]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:W.H},{func:1,ret:P.h,args:[P.n]},{func:1,ret:P.V,args:[W.aO]},{func:1,ret:-1,args:[W.bQ]},{func:1,ret:-1,args:[P.n,[P.i,V.aB]]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[P.n,[P.i,U.an]]},{func:1,ret:V.Y,args:[P.u]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,ret:P.N,args:[P.a4]},{func:1,ret:P.U,args:[,,]},{func:1,ret:P.U,args:[P.n]},{func:1,ret:P.V,args:[P.u,P.u]},{func:1,ret:-1,args:[W.c0]},{func:1,ret:P.N,args:[P.h,,]},{func:1,ret:P.V,args:[[P.i,D.a8]]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:[P.M,P.h,P.h],args:[[P.M,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.n,args:[[P.d,P.n],P.n]},{func:1,ret:[P.b5,,],args:[,]},{func:1,ret:P.N,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aE]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.bx]},{func:1,ret:P.V,args:[V.b8]},{func:1,ret:P.n,args:[,,]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.W,args:[W.H]}]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
if(x==y)H.og(d||a)
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.ab=a.ab
Isolate.dY=a.dY
return Isolate}}!function(){var z=function(a){var t={}
t[a]=1
return Object.keys(convertToFastObject(t))[0]}
init.getIsolateTag=function(a){return z("___dart_"+a+init.isolateTag)}
var y="___dart_isolate_tags_"
var x=Object[y]||(Object[y]=Object.create(null))
var w="_ZxYxX"
for(var v=0;;v++){var u=z(w+"_"+v+"_")
if(!(u in x)){x[u]=1
init.isolateTag=u
break}}init.dispatchPropertyName=init.getIsolateTag("dispatch_record")}();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.hE,[])
else M.hE([])})})()
//# sourceMappingURL=test.dart.js.map
