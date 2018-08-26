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
b6.$isa=b5
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isj)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var d=supportsDirectProtoAccess&&b2!="a"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="q"){processStatics(init.statics[b2]=b3.q,b4)
delete b3.q}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cw(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cx=function(){}
var dart=[["","",,H,{"^":"",kA:{"^":"a;a"}}],["","",,J,{"^":"",
B:function(a){return void 0},
cC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bV:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cA==null){H.jn()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.dH("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c5()]
if(v!=null)return v
v=H.js(a)
if(v!=null)return v
if(typeof a=="function")return C.y
y=Object.getPrototypeOf(a)
if(y==null)return C.l
if(y===Object.prototype)return C.l
if(typeof w=="function"){Object.defineProperty(w,$.$get$c5(),{value:C.h,enumerable:false,writable:true,configurable:true})
return C.h}return C.h},
j:{"^":"a;",
p:function(a,b){return a===b},
gF:function(a){return H.b2(a)},
i:["bQ",function(a){return"Instance of '"+H.au(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
f3:{"^":"j;",
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$isao:1},
f5:{"^":"j;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0},
$isx:1},
c6:{"^":"j;",
gF:function(a){return 0},
i:["bR",function(a){return String(a)}]},
fz:{"^":"c6;"},
bO:{"^":"c6;"},
bt:{"^":"c6;",
i:function(a){var z=a[$.$get$cW()]
if(z==null)return this.bR(a)
return"JavaScript function for "+H.d(J.a2(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc2:1},
br:{"^":"j;$ti",
h:function(a,b){H.v(b,H.t(a,0))
if(!!a.fixed$length)H.Y(P.a6("add"))
a.push(b)},
H:function(a,b){var z
if(!!a.fixed$length)H.Y(P.a6("remove"))
for(z=0;z<a.length;++z)if(J.K(a[z],b)){a.splice(z,1)
return!0}return!1},
C:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aO(a))}},
M:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.N(z,y,H.d(a[y]))
return z.join(b)},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
gaH:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.f1())},
i:function(a){return P.c3(a,"[","]")},
gJ:function(a){return new J.ac(a,a.length,0,[H.t(a,0)])},
gF:function(a){return H.b2(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.Y(P.a6("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.bE(b,"newLength",null))
if(b<0)throw H.e(P.b3(b,0,null,"newLength",null))
a.length=b},
N:function(a,b,c){H.P(b)
H.v(c,H.t(a,0))
if(!!a.immutable$list)H.Y(P.a6("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.by(a,b))
if(b>=a.length||b<0)throw H.e(H.by(a,b))
a[b]=c},
$isf:1,
$isb:1,
q:{
f2:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.bE(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.b3(a,0,4294967295,"length",null))
return J.d6(new Array(a),b)},
d6:function(a,b){return J.aX(H.h(a,[b]))},
aX:function(a){H.bm(a)
a.fixed$length=Array
return a}}},
kz:{"^":"br;$ti"},
ac:{"^":"a;a,b,c,0d,$ti",
gD:function(a){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bs:{"^":"j;",
gd8:function(a){return a===0?1/a<0:a<0},
bo:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.a6(""+a+".floor()"))},
R:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.a6(""+a+".round()"))},
bE:function(a,b){var z
if(b>20)throw H.e(P.b3(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gd8(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.e(H.bS(b))
return a*b},
bL:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
bS:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bc(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.bc(a,b)},
bc:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.a6("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
ba:function(a,b){var z
if(a>0)z=this.cO(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cO:function(a,b){return b>31?0:a>>>b},
a0:function(a,b){if(typeof b!=="number")throw H.e(H.bS(b))
return a<b},
$isq:1,
$isG:1},
d7:{"^":"bs;",$isI:1},
f4:{"^":"bs;"},
bL:{"^":"j;",
c4:function(a,b){if(b>=a.length)throw H.e(H.by(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.H(b)
if(typeof b!=="string")throw H.e(P.bE(b,null,null))
return a+b},
aR:function(a,b,c){H.P(c)
if(c==null)c=a.length
if(b>c)throw H.e(P.cc(b,null,null))
if(c>a.length)throw H.e(P.cc(c,null,null))
return a.substring(b,c)},
bO:function(a,b){return this.aR(a,b,null)},
n:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.o)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
dm:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.n(c,z)+a},
a_:function(a,b){return this.dm(a,b," ")},
cX:function(a,b,c){if(c>a.length)throw H.e(P.b3(c,0,a.length,null,null))
return H.jE(a,b,c)},
i:function(a){return a},
gF:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$isfx:1,
$isk:1}}],["","",,H,{"^":"",
f1:function(){return new P.fY("No element")},
eP:{"^":"f;"},
ff:{"^":"a;a,b,c,0d,$ti",
gD:function(a){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.bA(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.e(P.aO(z))
w=this.c
if(typeof x!=="number")return H.A(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
fl:{"^":"f;a,b,$ti",
gJ:function(a){return new H.fm(J.bD(this.a),this.b,this.$ti)},
gj:function(a){return J.aM(this.a)},
w:function(a,b){return this.b.$1(J.cG(this.a,b))},
$asf:function(a,b){return[b]}},
fm:{"^":"c4;0a,b,c,$ti",
A:function(){var z=this.b
if(z.A()){this.a=this.c.$1(z.gD(z))
return!0}this.a=null
return!1},
gD:function(a){return this.a},
$asc4:function(a,b){return[b]}},
hF:{"^":"f;a,b,$ti",
gJ:function(a){return new H.hG(J.bD(this.a),this.b,this.$ti)}},
hG:{"^":"c4;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gD(z)))return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bJ:{"^":"a;$ti"}}],["","",,H,{"^":"",
ji:function(a){return init.types[H.P(a)]},
jq:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isu},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a2(a)
if(typeof z!=="string")throw H.e(H.bS(a))
return z},
b2:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
au:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.q||!!J.B(a).$isbO){v=C.k(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.e.c4(w,0)===36)w=C.e.bO(w,1)
r=H.cB(H.bm(H.ap(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
U:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fH:function(a){return a.b?H.U(a).getUTCFullYear()+0:H.U(a).getFullYear()+0},
fF:function(a){return a.b?H.U(a).getUTCMonth()+1:H.U(a).getMonth()+1},
fB:function(a){return a.b?H.U(a).getUTCDate()+0:H.U(a).getDate()+0},
fC:function(a){return a.b?H.U(a).getUTCHours()+0:H.U(a).getHours()+0},
fE:function(a){return a.b?H.U(a).getUTCMinutes()+0:H.U(a).getMinutes()+0},
fG:function(a){return a.b?H.U(a).getUTCSeconds()+0:H.U(a).getSeconds()+0},
fD:function(a){return a.b?H.U(a).getUTCMilliseconds()+0:H.U(a).getMilliseconds()+0},
A:function(a){throw H.e(H.bS(a))},
i:function(a,b){if(a==null)J.aM(a)
throw H.e(H.by(a,b))},
by:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.as(!0,b,"index",null)
z=H.P(J.aM(a))
if(!(b<0)){if(typeof z!=="number")return H.A(z)
y=b>=z}else y=!0
if(y)return P.C(b,a,"index",null,z)
return P.cc(b,"index",null)},
bS:function(a){return new P.as(!0,a,null,null)},
e:function(a){var z
if(a==null)a=new P.de()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ek})
z.name=""}else z.toString=H.ek
return z},
ek:function(){return J.a2(this.dartException)},
Y:function(a){throw H.e(a)},
D:function(a){throw H.e(P.aO(a))},
ar:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.ba(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c8(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dd(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dw()
u=$.$get$dx()
t=$.$get$dy()
s=$.$get$dz()
r=$.$get$dD()
q=$.$get$dE()
p=$.$get$dB()
$.$get$dA()
o=$.$get$dG()
n=$.$get$dF()
m=v.P(y)
if(m!=null)return z.$1(H.c8(H.H(y),m))
else{m=u.P(y)
if(m!=null){m.method="call"
return z.$1(H.c8(H.H(y),m))}else{m=t.P(y)
if(m==null){m=s.P(y)
if(m==null){m=r.P(y)
if(m==null){m=q.P(y)
if(m==null){m=p.P(y)
if(m==null){m=s.P(y)
if(m==null){m=o.P(y)
if(m==null){m=n.P(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dd(H.H(y),m))}}return z.$1(new H.hr(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dp()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.as(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dp()
return a},
aJ:function(a){var z
if(a==null)return new H.dZ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dZ(a)},
jf:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.N(0,a[y],a[x])}return b},
jp:function(a,b,c,d,e,f){H.l(a,"$isc2")
switch(H.P(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.a4("Unsupported number of arguments for wrapped closure"))},
aH:function(a,b){var z
H.P(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jp)
a.$identity=z
return z},
ez:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.B(d).$isb){z.$reflectionInfo=d
x=H.fJ(z).r}else x=d
w=e?Object.create(new H.fZ().constructor.prototype):Object.create(new H.bZ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.a7
if(typeof u!=="number")return u.E()
$.a7=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.cR(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.ji,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cL:H.c_
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.e("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cR(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
ew:function(a,b,c,d){var z=H.c_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cR:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ey(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ew(y,!w,z,b)
if(y===0){w=$.a7
if(typeof w!=="number")return w.E()
$.a7=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aN
if(v==null){v=H.bF("self")
$.aN=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a7
if(typeof w!=="number")return w.E()
$.a7=w+1
t+=w
w="return function("+t+"){return this."
v=$.aN
if(v==null){v=H.bF("self")
$.aN=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
ex:function(a,b,c,d){var z,y
z=H.c_
y=H.cL
switch(b?-1:a){case 0:throw H.e(H.fR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ey:function(a,b){var z,y,x,w,v,u,t,s
z=$.aN
if(z==null){z=H.bF("self")
$.aN=z}y=$.cK
if(y==null){y=H.bF("receiver")
$.cK=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ex(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.a7
if(typeof y!=="number")return y.E()
$.a7=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.a7
if(typeof y!=="number")return y.E()
$.a7=y+1
return new Function(z+y+"}")()},
cw:function(a,b,c,d,e,f,g){var z,y
z=J.aX(H.bm(b))
H.P(c)
y=!!J.B(d).$isb?J.aX(d):d
return H.ez(a,z,c,y,!!e,f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ab(a,"String"))},
jv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ab(a,"num"))},
ea:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ab(a,"bool"))},
P:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ab(a,"int"))},
ei:function(a,b){throw H.e(H.ab(a,H.H(b).substring(3)))},
jx:function(a,b){var z=J.bA(b)
throw H.e(H.eu(a,z.aR(b,3,z.gj(b))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.ei(a,b)},
aK:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.jx(a,b)},
bm:function(a){if(a==null)return a
if(!!J.B(a).$isb)return a
throw H.e(H.ab(a,"List"))},
jr:function(a,b){if(a==null)return a
if(!!J.B(a).$isb)return a
if(J.B(a)[b])return a
H.ei(a,b)},
eb:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.P(z)]
else return a.$S()}return},
bz:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eb(J.B(a))
if(z==null)return!1
y=H.ee(z,null,b,null)
return y},
c:function(a,b){var z,y
if(a==null)return a
if($.cs)return a
$.cs=!0
try{if(H.bz(a,b))return a
z=H.bC(b)
y=H.ab(a,z)
throw H.e(y)}finally{$.cs=!1}},
cy:function(a,b){if(a!=null&&!H.cv(a,b))H.Y(H.ab(a,H.bC(b)))
return a},
e5:function(a){var z
if(a instanceof H.o){z=H.eb(J.B(a))
if(z!=null)return H.bC(z)
return"Closure"}return H.au(a)},
jG:function(a){throw H.e(new P.eD(H.H(a)))},
ec:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
ap:function(a){if(a==null)return
return a.$ti},
lx:function(a,b,c){return H.aL(a["$as"+H.d(c)],H.ap(b))},
bl:function(a,b,c,d){var z
H.H(c)
H.P(d)
z=H.aL(a["$as"+H.d(c)],H.ap(b))
return z==null?null:z[d]},
aI:function(a,b,c){var z
H.H(b)
H.P(c)
z=H.aL(a["$as"+H.d(b)],H.ap(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.P(b)
z=H.ap(a)
return z==null?null:z[b]},
bC:function(a){var z=H.aq(a,null)
return z},
aq:function(a,b){var z,y
H.w(b,"$isb",[P.k],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cB(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.P(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.d(b[y])}if('func' in a)return H.j0(a,b)
if('futureOr' in a)return"FutureOr<"+H.aq("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
j0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.k]
H.w(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.e.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aq(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aq(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aq(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aq(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.je(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.aq(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cB:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isb",[P.k],"$asb")
if(a==null)return""
z=new P.cf("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aq(u,c)}v="<"+z.i(0)+">"
return v},
aL:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aG:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ap(a)
y=J.B(a)
if(y[b]==null)return!1
return H.e8(H.aL(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.H(b)
H.bm(c)
H.H(d)
if(a==null)return a
z=H.aG(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cB(c,0,null)
throw H.e(H.ab(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
e8:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
lv:function(a,b,c){return a.apply(b,H.aL(J.B(b)["$as"+H.d(c)],H.ap(b)))},
ef:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="x"||a===-1||a===-2||H.ef(z)}return!1},
cv:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="x"||b===-1||b===-2||H.ef(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cv(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bz(a,b)}y=J.B(a).constructor
x=H.ap(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.a1(y,null,b,null)
return z},
v:function(a,b){if(a!=null&&!H.cv(a,b))throw H.e(H.ab(a,H.bC(b)))
return a},
a1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a1(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="x")return!0
if('func' in c)return H.ee(a,b,c,d)
if('func' in a)return c.builtin$cls==="c2"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a1("type" in a?a.type:null,b,x,d)
else if(H.a1(a,b,x,d))return!0
else{if(!('$is'+"aT" in y.prototype))return!1
w=y.prototype["$as"+"aT"]
v=H.aL(w,z?a.slice(1):null)
return H.a1(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bC(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e8(H.aL(r,z),b,u,d)},
ee:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a1(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a1(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a1(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a1(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.ju(m,b,l,d)},
ju:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
lw:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
js:function(a){var z,y,x,w,v,u
z=H.H($.ed.$1(a))
y=$.bT[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bW[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.e7.$2(a,z))
if(z!=null){y=$.bT[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bW[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bX(x)
$.bT[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bW[z]=x
return x}if(v==="-"){u=H.bX(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eh(a,x)
if(v==="*")throw H.e(P.dH(z))
if(init.leafTags[z]===true){u=H.bX(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eh(a,x)},
eh:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cC(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bX:function(a){return J.cC(a,!1,null,!!a.$isu)},
jt:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bX(z)
else return J.cC(z,c,null,null)},
jn:function(){if(!0===$.cA)return
$.cA=!0
H.jo()},
jo:function(){var z,y,x,w,v,u,t,s
$.bT=Object.create(null)
$.bW=Object.create(null)
H.jj()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ej.$1(v)
if(u!=null){t=H.jt(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jj:function(){var z,y,x,w,v,u,t
z=C.v()
z=H.aF(C.r,H.aF(C.x,H.aF(C.j,H.aF(C.j,H.aF(C.w,H.aF(C.t,H.aF(C.u(C.k),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ed=new H.jk(v)
$.e7=new H.jl(u)
$.ej=new H.jm(t)},
aF:function(a,b){return a(b)||b},
jE:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fI:{"^":"a;a,b,c,d,e,f,r,0x",q:{
fJ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aX(z)
y=z[0]
x=z[1]
return new H.fI(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ha:{"^":"a;a,b,c,d,e,f",
P:function(a){var z,y,x
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
q:{
aa:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ha(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dC:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fv:{"^":"M;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
dd:function(a,b){return new H.fv(a,b==null?null:b.method)}}},
f6:{"^":"M;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
q:{
c8:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.f6(a,y,z?null:b.receiver)}}},
hr:{"^":"M;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jJ:{"^":"o:16;a",
$1:function(a){if(!!J.B(a).$isM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dZ:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa5:1},
o:{"^":"a;",
i:function(a){return"Closure '"+H.au(this).trim()+"'"},
gbI:function(){return this},
$isc2:1,
gbI:function(){return this}},
dt:{"^":"o;"},
fZ:{"^":"dt;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bZ:{"^":"dt;a,b,c,d",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bZ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gF:function(a){var z,y
z=this.c
if(z==null)y=H.b2(this.a)
else y=typeof z!=="object"?J.ak(z):H.b2(z)
return(y^H.b2(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.au(z)+"'")},
q:{
c_:function(a){return a.a},
cL:function(a){return a.c},
bF:function(a){var z,y,x,w,v
z=new H.bZ("self","target","receiver","name")
y=J.aX(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hb:{"^":"M;a",
i:function(a){return this.a},
q:{
ab:function(a,b){return new H.hb("TypeError: "+H.d(P.bH(a))+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
et:{"^":"M;a",
i:function(a){return this.a},
q:{
eu:function(a,b){return new H.et("CastError: "+H.d(P.bH(a))+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
fQ:{"^":"M;a",
i:function(a){return"RuntimeError: "+H.d(this.a)},
q:{
fR:function(a){return new H.fQ(a)}}},
c7:{"^":"fj;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gZ:function(a){return new H.fa(this,[H.t(this,0)])},
cY:function(a,b){var z=this.b
if(z==null)return!1
return this.c6(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.al(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.al(w,b)
x=y==null?null:y.b
return x}else return this.d7(b)},
d7:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.b5(z,J.ak(a)&0x3ffffff)
x=this.bq(y,a)
if(x<0)return
return y[x].b},
N:function(a,b,c){var z,y,x,w,v,u
H.v(b,H.t(this,0))
H.v(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ax()
this.b=z}this.aV(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ax()
this.c=y}this.aV(y,b,c)}else{x=this.d
if(x==null){x=this.ax()
this.d=x}w=J.ak(b)&0x3ffffff
v=this.b5(x,w)
if(v==null)this.aB(x,w,[this.ay(b,c)])
else{u=this.bq(v,b)
if(u>=0)v[u].b=c
else v.push(this.ay(b,c))}}},
C:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aO(this))
z=z.c}},
aV:function(a,b,c){var z
H.v(b,H.t(this,0))
H.v(c,H.t(this,1))
z=this.al(a,b)
if(z==null)this.aB(a,b,this.ay(b,c))
else z.b=c},
cd:function(){this.r=this.r+1&67108863},
ay:function(a,b){var z,y
z=new H.f9(H.v(a,H.t(this,0)),H.v(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.cd()
return z},
bq:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].a,b))return y
return-1},
i:function(a){return P.db(this)},
al:function(a,b){return a[b]},
b5:function(a,b){return a[b]},
aB:function(a,b,c){a[b]=c},
c9:function(a,b){delete a[b]},
c6:function(a,b){return this.al(a,b)!=null},
ax:function(){var z=Object.create(null)
this.aB(z,"<non-identifier-key>",z)
this.c9(z,"<non-identifier-key>")
return z},
$isda:1},
f9:{"^":"a;a,b,0c,0d"},
fa:{"^":"eP;a,$ti",
gj:function(a){return this.a.a},
gJ:function(a){var z,y
z=this.a
y=new H.fb(z,z.r,this.$ti)
y.c=z.e
return y}},
fb:{"^":"a;a,b,0c,0d,$ti",
gD:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aO(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jk:{"^":"o:16;a",
$1:function(a){return this.a(a)}},
jl:{"^":"o:33;a",
$2:function(a,b){return this.a(a,b)}},
jm:{"^":"o:30;a",
$1:function(a){return this.a(H.H(a))}}}],["","",,H,{"^":"",
je:function(a){return J.d6(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
jw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cr:function(a){return a},
an:function(a,b,c){H.bm(b)
if(a>>>0!==a||a>=c)throw H.e(H.by(b,a))},
fs:{"^":"j;","%":"DataView;ArrayBufferView;cb|dT|dU|fr|dV|dW|al"},
cb:{"^":"fs;",
gj:function(a){return a.length},
$isu:1,
$asu:I.cx},
fr:{"^":"dU;",
k:function(a,b){H.an(b,a,a.length)
return a[b]},
$asbJ:function(){return[P.q]},
$asn:function(){return[P.q]},
$isf:1,
$asf:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
al:{"^":"dW;",
$asbJ:function(){return[P.I]},
$asn:function(){return[P.I]},
$isf:1,
$asf:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}},
kK:{"^":"al;",
k:function(a,b){H.an(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kL:{"^":"al;",
k:function(a,b){H.an(b,a,a.length)
return a[b]},
"%":"Int32Array"},
kM:{"^":"al;",
k:function(a,b){H.an(b,a,a.length)
return a[b]},
"%":"Int8Array"},
kN:{"^":"al;",
k:function(a,b){H.an(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
kO:{"^":"al;",
k:function(a,b){H.an(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kP:{"^":"al;",
gj:function(a){return a.length},
k:function(a,b){H.an(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
kQ:{"^":"al;",
gj:function(a){return a.length},
k:function(a,b){H.an(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dT:{"^":"cb+n;"},
dU:{"^":"dT+bJ;"},
dV:{"^":"cb+n;"},
dW:{"^":"dV+bJ;"}}],["","",,P,{"^":"",
hI:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.j7()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aH(new P.hK(z),1)).observe(y,{childList:true})
return new P.hJ(z,y,x)}else if(self.setImmediate!=null)return P.j8()
return P.j9()},
lk:[function(a){self.scheduleImmediate(H.aH(new P.hL(H.c(a,{func:1,ret:-1})),0))},"$1","j7",4,0,8],
ll:[function(a){self.setImmediate(H.aH(new P.hM(H.c(a,{func:1,ret:-1})),0))},"$1","j8",4,0,8],
lm:[function(a){H.c(a,{func:1,ret:-1})
P.iI(0,a)},"$1","j9",4,0,8],
dv:function(a,b){var z
H.c(b,{func:1,ret:-1,args:[P.av]})
z=C.b.ab(a.a,1000)
return P.iJ(z<0?0:z,b)},
j3:function(a,b){if(H.bz(a,{func:1,args:[P.a,P.a5]}))return b.dw(a,null,P.a,P.a5)
if(H.bz(a,{func:1,args:[P.a]}))return H.c(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.bE(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
j2:function(){var z,y
for(;z=$.aE,z!=null;){$.bj=null
y=z.b
$.aE=y
if(y==null)$.bi=null
z.a.$0()}},
lu:[function(){$.ct=!0
try{P.j2()}finally{$.bj=null
$.ct=!1
if($.aE!=null)$.$get$co().$1(P.e9())}},"$0","e9",0,0,2],
e4:function(a){var z=new P.dN(H.c(a,{func:1,ret:-1}))
if($.aE==null){$.bi=z
$.aE=z
if(!$.ct)$.$get$co().$1(P.e9())}else{$.bi.b=z
$.bi=z}},
j6:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
z=$.aE
if(z==null){P.e4(a)
$.bj=$.bi
return}y=new P.dN(a)
x=$.bj
if(x==null){y.b=z
$.bj=y
$.aE=y}else{y.b=x.b
x.b=y
$.bj=y
if(y.b==null)$.bi=y}},
jy:function(a){var z,y
z={func:1,ret:-1}
H.c(a,z)
y=$.E
if(C.c===y){P.bR(null,null,C.c,a)
return}y.toString
P.bR(null,null,y,H.c(y.bf(a),z))},
h7:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.av]}
H.c(b,z)
y=$.E
if(y===C.c){y.toString
return P.dv(a,b)}x=y.bg(b,P.av)
$.E.toString
return P.dv(a,H.c(x,z))},
bQ:function(a,b,c,d,e){var z={}
z.a=d
P.j6(new P.j4(z,e))},
e2:function(a,b,c,d,e){var z,y
H.c(d,{func:1,ret:e})
y=$.E
if(y===c)return d.$0()
$.E=c
z=y
try{y=d.$0()
return y}finally{$.E=z}},
e3:function(a,b,c,d,e,f,g){var z,y
H.c(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.E
if(y===c)return d.$1(e)
$.E=c
z=y
try{y=d.$1(e)
return y}finally{$.E=z}},
j5:function(a,b,c,d,e,f,g,h,i){var z,y
H.c(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.E
if(y===c)return d.$2(e,f)
$.E=c
z=y
try{y=d.$2(e,f)
return y}finally{$.E=z}},
bR:function(a,b,c,d){var z
H.c(d,{func:1,ret:-1})
z=C.c!==c
if(z)d=!(!z||!1)?c.bf(d):c.cT(d,-1)
P.e4(d)},
hK:{"^":"o:11;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hJ:{"^":"o:27;a,b,c",
$1:function(a){var z,y
this.a.a=H.c(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hL:{"^":"o:0;a",
$0:function(){this.a.$0()}},
hM:{"^":"o:0;a",
$0:function(){this.a.$0()}},
e1:{"^":"a;a,0b,c",
bZ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aH(new P.iL(this,b),0),a)
else throw H.e(P.a6("`setTimeout()` not found."))},
c_:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aH(new P.iK(this,a,Date.now(),b),0),a)
else throw H.e(P.a6("Periodic timer."))},
$isav:1,
q:{
iI:function(a,b){var z=new P.e1(!0,0)
z.bZ(a,b)
return z},
iJ:function(a,b){var z=new P.e1(!1,0)
z.c_(a,b)
return z}}},
iL:{"^":"o:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iK:{"^":"o:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.b.bS(w,x)}z.c=y
this.d.$1(z)}},
aD:{"^":"a;0a,b,c,d,e,$ti",
de:function(a){if(this.c!==6)return!0
return this.b.b.aN(H.c(this.d,{func:1,ret:P.ao,args:[P.a]}),a.a,P.ao,P.a)},
d6:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.bz(z,{func:1,args:[P.a,P.a5]}))return H.cy(w.dD(z,a.a,a.b,null,y,P.a5),x)
else return H.cy(w.aN(H.c(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
ai:{"^":"a;bb:a<,b,0cH:c<,$ti",
bC:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.E
if(y!==C.c){y.toString
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.j3(b,y)}H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ai(0,$.E,[c])
w=b==null?1:3
this.aW(new P.aD(x,w,a,b,[z,c]))
return x},
dG:function(a,b){return this.bC(a,null,b)},
aW:function(a){var z,y
z=this.a
if(z<=1){a.a=H.l(this.c,"$isaD")
this.c=a}else{if(z===2){y=H.l(this.c,"$isai")
z=y.a
if(z<4){y.aW(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bR(null,null,z,H.c(new P.i_(this,a),{func:1,ret:-1}))}},
b7:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.l(this.c,"$isaD")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.l(this.c,"$isai")
y=u.a
if(y<4){u.b7(a)
return}this.a=y
this.c=u.c}z.a=this.am(a)
y=this.b
y.toString
P.bR(null,null,y,H.c(new P.i4(z,this),{func:1,ret:-1}))}},
aA:function(){var z=H.l(this.c,"$isaD")
this.c=null
return this.am(z)},
am:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
b_:function(a){var z,y,x,w
z=H.t(this,0)
H.cy(a,{futureOr:1,type:z})
y=this.$ti
x=H.aG(a,"$isaT",y,"$asaT")
if(x){z=H.aG(a,"$isai",y,null)
if(z)P.dP(a,this)
else P.i0(a,this)}else{w=this.aA()
H.v(a,z)
this.a=4
this.c=a
P.bg(this,w)}},
at:[function(a,b){var z
H.l(b,"$isa5")
z=this.aA()
this.a=8
this.c=new P.Z(a,b)
P.bg(this,z)},function(a){return this.at(a,null)},"dM","$2","$1","gc5",4,2,26],
$isaT:1,
q:{
i0:function(a,b){var z,y,x
b.a=1
try{a.bC(new P.i1(b),new P.i2(b),null)}catch(x){z=H.ar(x)
y=H.aJ(x)
P.jy(new P.i3(b,z,y))}},
dP:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.l(a.c,"$isai")
if(z>=4){y=b.aA()
b.a=a.a
b.c=a.c
P.bg(b,y)}else{y=H.l(b.c,"$isaD")
b.a=2
b.c=a
a.b7(y)}},
bg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.l(y.c,"$isZ")
y=y.b
u=v.a
t=v.b
y.toString
P.bQ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bg(z.a,b)}y=z.a
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
if(p){H.l(r,"$isZ")
y=y.b
u=r.a
t=r.b
y.toString
P.bQ(null,null,y,u,t)
return}o=$.E
if(o==null?q!=null:o!==q)$.E=q
else o=null
y=b.c
if(y===8)new P.i7(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.i6(x,b,r).$0()}else if((y&2)!==0)new P.i5(z,x,b).$0()
if(o!=null)$.E=o
y=x.b
if(!!J.B(y).$isaT){if(y.a>=4){n=H.l(t.c,"$isaD")
t.c=null
b=t.am(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dP(y,t)
return}}m=b.b
n=H.l(m.c,"$isaD")
m.c=null
b=m.am(n)
y=x.a
u=x.b
if(!y){H.v(u,H.t(m,0))
m.a=4
m.c=u}else{H.l(u,"$isZ")
m.a=8
m.c=u}z.a=m
y=m}}}},
i_:{"^":"o:0;a,b",
$0:function(){P.bg(this.a,this.b)}},
i4:{"^":"o:0;a,b",
$0:function(){P.bg(this.b,this.a.a)}},
i1:{"^":"o:11;a",
$1:function(a){var z=this.a
z.a=0
z.b_(a)}},
i2:{"^":"o:25;a",
$2:function(a,b){this.a.at(a,H.l(b,"$isa5"))},
$1:function(a){return this.$2(a,null)}},
i3:{"^":"o:0;a,b,c",
$0:function(){this.a.at(this.b,this.c)}},
i7:{"^":"o:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bA(H.c(w.d,{func:1}),null)}catch(v){y=H.ar(v)
x=H.aJ(v)
if(this.d){w=H.l(this.a.a.c,"$isZ").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.l(this.a.a.c,"$isZ")
else u.b=new P.Z(y,x)
u.a=!0
return}if(!!J.B(z).$isaT){if(z instanceof P.ai&&z.gbb()>=4){if(z.gbb()===8){w=this.b
w.b=H.l(z.gcH(),"$isZ")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.dG(new P.i8(t),null)
w.a=!1}}},
i8:{"^":"o:23;a",
$1:function(a){return this.a}},
i6:{"^":"o:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.v(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.aN(H.c(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ar(t)
y=H.aJ(t)
x=this.a
x.b=new P.Z(z,y)
x.a=!0}}},
i5:{"^":"o:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.l(this.a.a.c,"$isZ")
w=this.c
if(w.de(z)&&w.e!=null){v=this.b
v.b=w.d6(z)
v.a=!1}}catch(u){y=H.ar(u)
x=H.aJ(u)
w=H.l(this.a.a.c,"$isZ")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Z(y,x)
s.a=!0}}},
dN:{"^":"a;a,0b"},
ce:{"^":"a;$ti",
gj:function(a){var z,y
z={}
y=new P.ai(0,$.E,[P.I])
z.a=0
this.dd(new P.h0(z,this),!0,new P.h1(z,y),y.gc5())
return y}},
h0:{"^":"o;a,b",
$1:function(a){H.v(a,H.aI(this.b,"ce",0));++this.a.a},
$S:function(){return{func:1,ret:P.x,args:[H.aI(this.b,"ce",0)]}}},
h1:{"^":"o:0;a,b",
$0:function(){this.b.b_(this.a.a)}},
dq:{"^":"a;$ti"},
av:{"^":"a;"},
Z:{"^":"a;a,b",
i:function(a){return H.d(this.a)},
$isM:1},
iQ:{"^":"a;",$islj:1},
j4:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.de()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
iu:{"^":"iQ;",
dE:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
try{if(C.c===$.E){a.$0()
return}P.e2(null,null,this,a,-1)}catch(x){z=H.ar(x)
y=H.aJ(x)
P.bQ(null,null,this,z,H.l(y,"$isa5"))}},
dF:function(a,b,c){var z,y,x
H.c(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.c===$.E){a.$1(b)
return}P.e3(null,null,this,a,b,-1,c)}catch(x){z=H.ar(x)
y=H.aJ(x)
P.bQ(null,null,this,z,H.l(y,"$isa5"))}},
cT:function(a,b){return new P.iw(this,H.c(a,{func:1,ret:b}),b)},
bf:function(a){return new P.iv(this,H.c(a,{func:1,ret:-1}))},
bg:function(a,b){return new P.ix(this,H.c(a,{func:1,ret:-1,args:[b]}),b)},
bA:function(a,b){H.c(a,{func:1,ret:b})
if($.E===C.c)return a.$0()
return P.e2(null,null,this,a,b)},
aN:function(a,b,c,d){H.c(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.E===C.c)return a.$1(b)
return P.e3(null,null,this,a,b,c,d)},
dD:function(a,b,c,d,e,f){H.c(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.E===C.c)return a.$2(b,c)
return P.j5(null,null,this,a,b,c,d,e,f)},
dw:function(a,b,c,d){return H.c(a,{func:1,ret:b,args:[c,d]})}},
iw:{"^":"o;a,b,c",
$0:function(){return this.a.bA(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
iv:{"^":"o:2;a,b",
$0:function(){return this.a.dE(this.b)}},
ix:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dF(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fd:function(a,b,c){H.bm(a)
return H.w(H.jf(a,new H.c7(0,0,[b,c])),"$isda",[b,c],"$asda")},
fc:function(a,b){return new H.c7(0,0,[a,b])},
fe:function(a,b,c,d){return new P.ie(0,0,[d])},
f0:function(a,b,c){var z,y
if(P.cu(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bk()
C.a.h(y,a)
try{P.j1(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dr(b,H.jr(z,"$isf"),", ")+c
return y.charCodeAt(0)==0?y:y},
c3:function(a,b,c){var z,y,x
if(P.cu(a))return b+"..."+c
z=new P.cf(b)
y=$.$get$bk()
C.a.h(y,a)
try{x=z
x.a=P.dr(x.ga4(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.ga4()+c
y=z.ga4()
return y.charCodeAt(0)==0?y:y},
cu:function(a){var z,y
for(z=0;y=$.$get$bk(),z<y.length;++z)if(a===y[z])return!0
return!1},
j1:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gJ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.d(z.gD(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.A()){if(x<=4){C.a.h(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.A();t=s,s=r){r=z.gD(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
db:function(a){var z,y,x
z={}
if(P.cu(a))return"{...}"
y=new P.cf("")
try{C.a.h($.$get$bk(),a)
x=y
x.a=x.ga4()+"{"
z.a=!0
J.eo(a,new P.fk(z,y))
z=y
z.a=z.ga4()+"}"}finally{z=$.$get$bk()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.ga4()
return z.charCodeAt(0)==0?z:z},
ie:{"^":"i9;a,0b,0c,0d,0e,0f,r,$ti",
gJ:function(a){return P.dS(this,this.r,H.t(this,0))},
gj:function(a){return this.a},
h:function(a,b){var z,y
H.v(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cq()
this.b=z}return this.aY(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cq()
this.c=y}return this.aY(y,b)}else return this.c0(0,b)},
c0:function(a,b){var z,y,x
H.v(b,H.t(this,0))
z=this.d
if(z==null){z=P.cq()
this.d=z}y=this.b0(b)
x=z[y]
if(x==null)z[y]=[this.as(b)]
else{if(this.b3(x,b)>=0)return!1
x.push(this.as(b))}return!0},
H:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b8(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b8(this.c,b)
else return this.cC(0,b)},
cC:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.cc(z,b)
x=this.b3(y,b)
if(x<0)return!1
this.bd(y.splice(x,1)[0])
return!0},
aY:function(a,b){H.v(b,H.t(this,0))
if(H.l(a[b],"$iscp")!=null)return!1
a[b]=this.as(b)
return!0},
b8:function(a,b){var z
if(a==null)return!1
z=H.l(a[b],"$iscp")
if(z==null)return!1
this.bd(z)
delete a[b]
return!0},
aZ:function(){this.r=this.r+1&67108863},
as:function(a){var z,y
z=new P.cp(H.v(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aZ()
return z},
bd:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aZ()},
b0:function(a){return J.ak(a)&0x3ffffff},
cc:function(a,b){return a[this.b0(b)]},
b3:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].a,b))return y
return-1},
q:{
cq:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cp:{"^":"a;a,0b,0c"},
ig:{"^":"a;a,b,0c,0d,$ti",
gD:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aO(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.v(z.a,H.t(this,0))
this.c=z.b
return!0}}},
q:{
dS:function(a,b,c){var z=new P.ig(a,b,[c])
z.c=a.e
return z}}},
i9:{"^":"fS;"},
c9:{"^":"ih;",$isf:1,$isb:1},
n:{"^":"a;$ti",
gJ:function(a){return new H.ff(a,this.gj(a),0,[H.bl(this,a,"n",0)])},
w:function(a,b){return this.k(a,b)},
dI:function(a,b){var z,y,x
z=H.h([],[H.bl(this,a,"n",0)])
C.a.sj(z,this.gj(a))
y=0
while(!0){x=this.gj(a)
if(typeof x!=="number")return H.A(x)
if(!(y<x))break
C.a.N(z,y,this.k(a,y));++y}return z},
dH:function(a){return this.dI(a,!0)},
i:function(a){return P.c3(a,"[","]")}},
fj:{"^":"X;"},
fk:{"^":"o:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
X:{"^":"a;$ti",
C:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.bl(this,a,"X",0),H.bl(this,a,"X",1)]})
for(z=J.bD(this.gZ(a));z.A();){y=z.gD(z)
b.$2(y,this.k(a,y))}},
gj:function(a){return J.aM(this.gZ(a))},
i:function(a){return P.db(a)},
$isS:1},
fT:{"^":"a;$ti",
i:function(a){return P.c3(this,"{","}")},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.cH("index"))
if(b<0)H.Y(P.b3(b,0,null,"index",null))
for(z=P.dS(this,this.r,H.t(this,0)),y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.e(P.C(b,this,"index",null,y))},
$isf:1},
fS:{"^":"fT;"},
ih:{"^":"a+n;"}}],["","",,P,{"^":"",
eS:function(a){var z=J.B(a)
if(!!z.$iso)return z.i(a)
return"Instance of '"+H.au(a)+"'"},
fg:function(a,b,c,d){var z,y
H.v(b,d)
z=J.f2(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.N(z,y,b)
return H.w(z,"$isb",[d],"$asb")},
fh:function(a,b,c){var z,y,x
z=[c]
y=H.h([],z)
for(x=a.gJ(a);x.A();)C.a.h(y,H.v(x.gD(x),c))
if(b)return y
return H.w(J.aX(y),"$isb",z,"$asb")},
bH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a2(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eS(a)},
a4:function(a){return new P.dO(a)},
cD:function(a){H.jw(a)},
ao:{"^":"a;"},
"+bool":0,
aQ:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.aQ))return!1
return this.a===b.a&&this.b===b.b},
gF:function(a){var z=this.a
return(z^C.b.ba(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.eE(H.fH(this))
y=P.bp(H.fF(this))
x=P.bp(H.fB(this))
w=P.bp(H.fC(this))
v=P.bp(H.fE(this))
u=P.bp(H.fG(this))
t=P.eF(H.fD(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
eE:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bp:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"G;"},
"+double":0,
aR:{"^":"a;a",
n:function(a,b){return new P.aR(C.b.R(this.a*b))},
a0:function(a,b){return C.b.a0(this.a,H.l(b,"$isaR").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.aR))return!1
return this.a===b.a},
gF:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.eO()
y=this.a
if(y<0)return"-"+new P.aR(0-y).i(0)
x=z.$1(C.b.ab(y,6e7)%60)
w=z.$1(C.b.ab(y,1e6)%60)
v=new P.eN().$1(y%1e6)
return""+C.b.ab(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
q:{
d1:function(a,b,c,d,e,f){return new P.aR(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eN:{"^":"o:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
eO:{"^":"o:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
M:{"^":"a;"},
de:{"^":"M;",
i:function(a){return"Throw of null."}},
as:{"^":"M;a,b,c,d",
gav:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gau:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gav()+y+x
if(!this.a)return w
v=this.gau()
u=P.bH(this.b)
return w+v+": "+H.d(u)},
q:{
bE:function(a,b,c){return new P.as(!0,a,b,c)},
cH:function(a){return new P.as(!1,null,a,"Must not be null")}}},
dh:{"^":"as;e,f,a,b,c,d",
gav:function(){return"RangeError"},
gau:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
q:{
cc:function(a,b,c){return new P.dh(null,null,!0,a,b,"Value not in range")},
b3:function(a,b,c,d,e){return new P.dh(b,c,!0,a,d,"Invalid value")}}},
f_:{"^":"as;e,j:f>,a,b,c,d",
gav:function(){return"RangeError"},
gau:function(){if(J.el(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.d(z)},
q:{
C:function(a,b,c,d,e){var z=H.P(e!=null?e:J.aM(b))
return new P.f_(b,z,!0,a,c,"Index out of range")}}},
hs:{"^":"M;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
a6:function(a){return new P.hs(a)}}},
hq:{"^":"M;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
dH:function(a){return new P.hq(a)}}},
fY:{"^":"M;a",
i:function(a){return"Bad state: "+this.a}},
eA:{"^":"M;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.bH(z))+"."},
q:{
aO:function(a){return new P.eA(a)}}},
fw:{"^":"a;",
i:function(a){return"Out of Memory"},
$isM:1},
dp:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isM:1},
eD:{"^":"M;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
dO:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
I:{"^":"G;"},
"+int":0,
f:{"^":"a;$ti",
gj:function(a){var z,y
z=this.gJ(this)
for(y=0;z.A();)++y
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.cH("index"))
if(b<0)H.Y(P.b3(b,0,null,"index",null))
for(z=this.gJ(this),y=0;z.A();){x=z.gD(z)
if(b===y)return x;++y}throw H.e(P.C(b,this,"index",null,y))},
i:function(a){return P.f0(this,"(",")")}},
c4:{"^":"a;$ti"},
b:{"^":"a;$ti",$isf:1},
"+List":0,
S:{"^":"a;$ti"},
x:{"^":"a;",
gF:function(a){return P.a.prototype.gF.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
G:{"^":"a;"},
"+num":0,
a:{"^":";",
p:function(a,b){return this===b},
gF:function(a){return H.b2(this)},
i:function(a){return"Instance of '"+H.au(this)+"'"},
toString:function(){return this.i(this)}},
a5:{"^":"a;"},
k:{"^":"a;",$isfx:1},
"+String":0,
cf:{"^":"a;a4:a<",
gj:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
dr:function(a,b,c){var z=J.bD(b)
if(!z.A())return a
if(c.length===0){do a+=H.d(z.gD(z))
while(z.A())}else{a+=H.d(z.gD(z))
for(;z.A();)a=a+c+H.d(z.gD(z))}return a}}}}],["","",,W,{"^":"",
cQ:function(a,b){var z=document.createElement("canvas")
return z},
eQ:function(a){H.l(a,"$isR")
return"wheel"},
bP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dR:function(a,b,c,d){var z,y
z=W.bP(W.bP(W.bP(W.bP(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e6:function(a,b){var z
H.c(a,{func:1,ret:-1,args:[b]})
z=$.E
if(z===C.c)return a
return z.bg(a,b)},
aW:{"^":"Q;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
jK:{"^":"cd;0l:x=,0m:y=","%":"Accelerometer|LinearAccelerationSensor"},
jL:{"^":"j;0j:length=","%":"AccessibleNodeList"},
jM:{"^":"aW;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jN:{"^":"aW;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
es:{"^":"j;","%":";Blob"},
c0:{"^":"aW;",
aO:function(a,b,c){var z=a.getContext(b,P.ja(c,null))
return z},
$isc0:1,
"%":"HTMLCanvasElement"},
jT:{"^":"z;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
jV:{"^":"bG;0j:length=","%":"CSSPerspective"},
jW:{"^":"c1;0l:x=,0m:y=","%":"CSSPositionValue"},
jX:{"^":"bG;0l:x=,0m:y=","%":"CSSRotation"},
aP:{"^":"j;",$isaP:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
jY:{"^":"bG;0l:x=,0m:y=","%":"CSSScale"},
eB:{"^":"hQ;0j:length=",
bK:function(a,b){var z=a.getPropertyValue(this.aX(a,b))
return z==null?"":z},
aX:function(a,b){var z,y
z=$.$get$cV()
y=z[b]
if(typeof y==="string")return y
y=this.cP(a,b)
z[b]=y
return y},
cP:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eK()+b
if(z in a)return z
return b},
cI:function(a,b,c,d){a.setProperty(b,c,d)},
gaE:function(a){return a.bottom},
gV:function(a){return a.height},
ga7:function(a){return a.left},
gaM:function(a){return a.right},
gaj:function(a){return a.top},
gW:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eC:{"^":"a;",
ga7:function(a){return this.bK(a,"left")}},
c1:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bG:{"^":"j;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
jZ:{"^":"c1;0j:length=","%":"CSSTransformValue"},
k_:{"^":"bG;0l:x=,0m:y=","%":"CSSTranslation"},
k0:{"^":"c1;0j:length=","%":"CSSUnparsedValue"},
k1:{"^":"j;0j:length=","%":"DataTransferItemList"},
k2:{"^":"j;0l:x=,0m:y=","%":"DeviceAcceleration"},
k3:{"^":"j;",
i:function(a){return String(a)},
"%":"DOMException"},
k4:{"^":"eL;",
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"DOMPoint"},
eL:{"^":"j;",
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":";DOMPointReadOnly"},
k5:{"^":"hS;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.V,P.G]]},
$asn:function(){return[[P.V,P.G]]},
$isf:1,
$asf:function(){return[[P.V,P.G]]},
$isb:1,
$asb:function(){return[[P.V,P.G]]},
$asp:function(){return[[P.V,P.G]]},
"%":"ClientRectList|DOMRectList"},
eM:{"^":"j;",
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gW(a))+" x "+H.d(this.gV(a))},
p:function(a,b){var z
if(b==null)return!1
z=H.aG(b,"$isV",[P.G],"$asV")
if(!z)return!1
z=J.bB(b)
return a.left===z.ga7(b)&&a.top===z.gaj(b)&&this.gW(a)===z.gW(b)&&this.gV(a)===z.gV(b)},
gF:function(a){return W.dR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gW(a)&0x1FFFFFFF,this.gV(a)&0x1FFFFFFF)},
gaE:function(a){return a.bottom},
gV:function(a){return a.height},
ga7:function(a){return a.left},
gaM:function(a){return a.right},
gaj:function(a){return a.top},
gW:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isV:1,
$asV:function(){return[P.G]},
"%":";DOMRectReadOnly"},
k6:{"^":"hU;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.k]},
$asn:function(){return[P.k]},
$isf:1,
$asf:function(){return[P.k]},
$isb:1,
$asb:function(){return[P.k]},
$asp:function(){return[P.k]},
"%":"DOMStringList"},
k7:{"^":"j;0j:length=","%":"DOMTokenList"},
hP:{"^":"c9;a,b",
gj:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.l(z[b],"$isQ")},
h:function(a,b){this.a.appendChild(b)
return b},
gJ:function(a){var z=this.dH(this)
return new J.ac(z,z.length,0,[H.t(z,0)])},
$asn:function(){return[W.Q]},
$asf:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
Q:{"^":"z;",
gbh:function(a){return new W.hP(a,a.children)},
gao:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.a0()
if(x<0)x=-x*0
if(typeof w!=="number")return w.a0()
if(w<0)w=-w*0
return new P.V(z,y,x,w,[P.G])},
i:function(a){return a.localName},
$isQ:1,
"%":";Element"},
W:{"^":"j;",$isW:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
R:{"^":"j;",
be:["bP",function(a,b,c,d){H.c(c,{func:1,args:[W.W]})
if(c!=null)this.c1(a,b,c,!1)}],
c1:function(a,b,c,d){return a.addEventListener(b,H.aH(H.c(c,{func:1,args:[W.W]}),1),!1)},
$isR:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dX|dY|e_|e0"},
aS:{"^":"es;",$isaS:1,"%":"File"},
kq:{"^":"hZ;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aS]},
$asn:function(){return[W.aS]},
$isf:1,
$asf:function(){return[W.aS]},
$isb:1,
$asb:function(){return[W.aS]},
$asp:function(){return[W.aS]},
"%":"FileList"},
kr:{"^":"R;0j:length=","%":"FileWriter"},
ku:{"^":"aW;0j:length=","%":"HTMLFormElement"},
aU:{"^":"j;",$isaU:1,"%":"Gamepad"},
kv:{"^":"cd;0l:x=,0m:y=","%":"Gyroscope"},
kw:{"^":"j;0j:length=","%":"History"},
kx:{"^":"ib;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.z]},
$asn:function(){return[W.z]},
$isf:1,
$asf:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]},
$asp:function(){return[W.z]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
aY:{"^":"ch;",$isaY:1,"%":"KeyboardEvent"},
kC:{"^":"j;",
i:function(a){return String(a)},
"%":"Location"},
kD:{"^":"cd;0l:x=,0m:y=","%":"Magnetometer"},
kF:{"^":"j;0j:length=","%":"MediaList"},
kG:{"^":"R;",
be:function(a,b,c,d){H.c(c,{func:1,args:[W.W]})
if(b==="message")a.start()
this.bP(a,b,c,!1)},
"%":"MessagePort"},
kH:{"^":"ii;",
k:function(a,b){return P.aj(a.get(H.H(b)))},
C:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aj(y.value[1]))}},
gZ:function(a){var z=H.h([],[P.k])
this.C(a,new W.fo(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.k,null]},
$isS:1,
$asS:function(){return[P.k,null]},
"%":"MIDIInputMap"},
fo:{"^":"o:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
kI:{"^":"ij;",
k:function(a,b){return P.aj(a.get(H.H(b)))},
C:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aj(y.value[1]))}},
gZ:function(a){var z=H.h([],[P.k])
this.C(a,new W.fp(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.k,null]},
$isS:1,
$asS:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
fp:{"^":"o:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
aZ:{"^":"j;",$isaZ:1,"%":"MimeType"},
kJ:{"^":"il;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aZ]},
$asn:function(){return[W.aZ]},
$isf:1,
$asf:function(){return[W.aZ]},
$isb:1,
$asb:function(){return[W.aZ]},
$asp:function(){return[W.aZ]},
"%":"MimeTypeArray"},
a9:{"^":"ch;",$isa9:1,"%":"PointerEvent;DragEvent|MouseEvent"},
hO:{"^":"c9;a",
gJ:function(a){var z=this.a.childNodes
return new W.d2(z,z.length,-1,[H.bl(C.z,z,"p",0)])},
gj:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asn:function(){return[W.z]},
$asf:function(){return[W.z]},
$asb:function(){return[W.z]}},
z:{"^":"R;",
i:function(a){var z=a.nodeValue
return z==null?this.bQ(a):z},
$isz:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
ft:{"^":"io;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.z]},
$asn:function(){return[W.z]},
$isf:1,
$asf:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]},
$asp:function(){return[W.z]},
"%":"NodeList|RadioNodeList"},
b0:{"^":"j;0j:length=",$isb0:1,"%":"Plugin"},
kU:{"^":"is;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b0]},
$asn:function(){return[W.b0]},
$isf:1,
$asf:function(){return[W.b0]},
$isb:1,
$asb:function(){return[W.b0]},
$asp:function(){return[W.b0]},
"%":"PluginArray"},
kZ:{"^":"iy;",
k:function(a,b){return P.aj(a.get(H.H(b)))},
C:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aj(y.value[1]))}},
gZ:function(a){var z=H.h([],[P.k])
this.C(a,new W.fP(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.k,null]},
$isS:1,
$asS:function(){return[P.k,null]},
"%":"RTCStatsReport"},
fP:{"^":"o:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
l0:{"^":"aW;0j:length=","%":"HTMLSelectElement"},
cd:{"^":"R;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
b4:{"^":"R;",$isb4:1,"%":"SourceBuffer"},
l1:{"^":"dY;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b4]},
$asn:function(){return[W.b4]},
$isf:1,
$asf:function(){return[W.b4]},
$isb:1,
$asb:function(){return[W.b4]},
$asp:function(){return[W.b4]},
"%":"SourceBufferList"},
b5:{"^":"j;",$isb5:1,"%":"SpeechGrammar"},
l2:{"^":"iA;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b5]},
$asn:function(){return[W.b5]},
$isf:1,
$asf:function(){return[W.b5]},
$isb:1,
$asb:function(){return[W.b5]},
$asp:function(){return[W.b5]},
"%":"SpeechGrammarList"},
b6:{"^":"j;0j:length=",$isb6:1,"%":"SpeechRecognitionResult"},
l4:{"^":"iD;",
k:function(a,b){return a.getItem(H.H(b))},
C:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gZ:function(a){var z=H.h([],[P.k])
this.C(a,new W.h_(z))
return z},
gj:function(a){return a.length},
$asX:function(){return[P.k,P.k]},
$isS:1,
$asS:function(){return[P.k,P.k]},
"%":"Storage"},
h_:{"^":"o:19;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b7:{"^":"j;",$isb7:1,"%":"CSSStyleSheet|StyleSheet"},
b8:{"^":"aW;",$isb8:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
b9:{"^":"R;",$isb9:1,"%":"TextTrack"},
ba:{"^":"R;",$isba:1,"%":"TextTrackCue|VTTCue"},
l9:{"^":"iH;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ba]},
$asn:function(){return[W.ba]},
$isf:1,
$asf:function(){return[W.ba]},
$isb:1,
$asb:function(){return[W.ba]},
$asp:function(){return[W.ba]},
"%":"TextTrackCueList"},
la:{"^":"e0;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b9]},
$asn:function(){return[W.b9]},
$isf:1,
$asf:function(){return[W.b9]},
$isb:1,
$asb:function(){return[W.b9]},
$asp:function(){return[W.b9]},
"%":"TextTrackList"},
lb:{"^":"j;0j:length=","%":"TimeRanges"},
bb:{"^":"j;",$isbb:1,"%":"Touch"},
aw:{"^":"ch;",$isaw:1,"%":"TouchEvent"},
lc:{"^":"iN;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.bb]},
$asn:function(){return[W.bb]},
$isf:1,
$asf:function(){return[W.bb]},
$isb:1,
$asb:function(){return[W.bb]},
$asp:function(){return[W.bb]},
"%":"TouchList"},
ld:{"^":"j;0j:length=","%":"TrackDefaultList"},
ch:{"^":"W;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lf:{"^":"j;",
i:function(a){return String(a)},
"%":"URL"},
lh:{"^":"j;0l:x=","%":"VRStageBoundsPoint"},
li:{"^":"R;0j:length=","%":"VideoTrackList"},
bf:{"^":"a9;",
gd0:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.a6("deltaY is not supported"))},
gd_:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.a6("deltaX is not supported"))},
$isbf:1,
"%":"WheelEvent"},
hH:{"^":"R;",
cG:function(a,b){return a.requestAnimationFrame(H.aH(H.c(b,{func:1,ret:-1,args:[P.G]}),1))},
ca:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ln:{"^":"iS;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aP]},
$asn:function(){return[W.aP]},
$isf:1,
$asf:function(){return[W.aP]},
$isb:1,
$asb:function(){return[W.aP]},
$asp:function(){return[W.aP]},
"%":"CSSRuleList"},
lo:{"^":"eM;",
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
p:function(a,b){var z
if(b==null)return!1
z=H.aG(b,"$isV",[P.G],"$asV")
if(!z)return!1
z=J.bB(b)
return a.left===z.ga7(b)&&a.top===z.gaj(b)&&a.width===z.gW(b)&&a.height===z.gV(b)},
gF:function(a){return W.dR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gV:function(a){return a.height},
gW:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
lq:{"^":"iU;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aU]},
$asn:function(){return[W.aU]},
$isf:1,
$asf:function(){return[W.aU]},
$isb:1,
$asb:function(){return[W.aU]},
$asp:function(){return[W.aU]},
"%":"GamepadList"},
lr:{"^":"iW;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.z]},
$asn:function(){return[W.z]},
$isf:1,
$asf:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]},
$asp:function(){return[W.z]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ls:{"^":"iY;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b6]},
$asn:function(){return[W.b6]},
$isf:1,
$asf:function(){return[W.b6]},
$isb:1,
$asb:function(){return[W.b6]},
$asp:function(){return[W.b6]},
"%":"SpeechRecognitionResultList"},
lt:{"^":"j_;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b7]},
$asn:function(){return[W.b7]},
$isf:1,
$asf:function(){return[W.b7]},
$isb:1,
$asb:function(){return[W.b7]},
$asp:function(){return[W.b7]},
"%":"StyleSheetList"},
hV:{"^":"ce;a,b,c,$ti",
dd:function(a,b,c,d){var z=H.t(this,0)
H.c(a,{func:1,ret:-1,args:[z]})
H.c(c,{func:1,ret:-1})
return W.O(this.a,this.b,a,!1,z)}},
lp:{"^":"hV;a,b,c,$ti"},
hW:{"^":"dq;a,b,c,d,e,$ti",
cQ:function(){var z=this.d
if(z!=null&&this.a<=0)J.en(this.b,this.c,z,!1)},
q:{
O:function(a,b,c,d,e){var z=c==null?null:W.e6(new W.hX(c),W.W)
z=new W.hW(0,a,b,z,!1,[e])
z.cQ()
return z}}},
hX:{"^":"o:4;a",
$1:function(a){return this.a.$1(H.l(a,"$isW"))}},
p:{"^":"a;$ti",
gJ:function(a){return new W.d2(a,this.gj(a),-1,[H.bl(this,a,"p",0)])}},
d2:{"^":"a;a,b,c,0d,$ti",
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.em(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
hQ:{"^":"j+eC;"},
hR:{"^":"j+n;"},
hS:{"^":"hR+p;"},
hT:{"^":"j+n;"},
hU:{"^":"hT+p;"},
hY:{"^":"j+n;"},
hZ:{"^":"hY+p;"},
ia:{"^":"j+n;"},
ib:{"^":"ia+p;"},
ii:{"^":"j+X;"},
ij:{"^":"j+X;"},
ik:{"^":"j+n;"},
il:{"^":"ik+p;"},
im:{"^":"j+n;"},
io:{"^":"im+p;"},
ir:{"^":"j+n;"},
is:{"^":"ir+p;"},
iy:{"^":"j+X;"},
dX:{"^":"R+n;"},
dY:{"^":"dX+p;"},
iz:{"^":"j+n;"},
iA:{"^":"iz+p;"},
iD:{"^":"j+X;"},
iG:{"^":"j+n;"},
iH:{"^":"iG+p;"},
e_:{"^":"R+n;"},
e0:{"^":"e_+p;"},
iM:{"^":"j+n;"},
iN:{"^":"iM+p;"},
iR:{"^":"j+n;"},
iS:{"^":"iR+p;"},
iT:{"^":"j+n;"},
iU:{"^":"iT+p;"},
iV:{"^":"j+n;"},
iW:{"^":"iV+p;"},
iX:{"^":"j+n;"},
iY:{"^":"iX+p;"},
iZ:{"^":"j+n;"},
j_:{"^":"iZ+p;"}}],["","",,P,{"^":"",
aj:function(a){var z,y,x,w,v
if(a==null)return
z=P.fc(P.k,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.H(y[w])
z.N(0,v,a[v])}return z},
ja:function(a,b){var z={}
a.C(0,new P.jb(z))
return z},
d0:function(){var z=$.d_
if(z==null){z=J.bY(window.navigator.userAgent,"Opera",0)
$.d_=z}return z},
eK:function(){var z,y
z=$.cX
if(z!=null)return z
y=$.cY
if(y==null){y=J.bY(window.navigator.userAgent,"Firefox",0)
$.cY=y}if(y)z="-moz-"
else{y=$.cZ
if(y==null){y=!P.d0()&&J.bY(window.navigator.userAgent,"Trident/",0)
$.cZ=y}if(y)z="-ms-"
else z=P.d0()?"-o-":"-webkit-"}$.cX=z
return z},
jb:{"^":"o:14;a",
$2:function(a,b){this.a[a]=b}},
eV:{"^":"c9;a,b",
gaw:function(){var z,y,x
z=this.b
y=H.aI(z,"n",0)
x=W.Q
return new H.fl(new H.hF(z,H.c(new P.eW(),{func:1,ret:P.ao,args:[y]}),[y]),H.c(new P.eX(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.aM(this.gaw().a)},
k:function(a,b){var z=this.gaw()
return z.b.$1(J.cG(z.a,b))},
gJ:function(a){var z=P.fh(this.gaw(),!1,W.Q)
return new J.ac(z,z.length,0,[H.t(z,0)])},
$asn:function(){return[W.Q]},
$asf:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
eW:{"^":"o:18;",
$1:function(a){return!!J.B(H.l(a,"$isz")).$isQ}},
eX:{"^":"o:34;",
$1:function(a){return H.aK(H.l(a,"$isz"),"$isQ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dQ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
b1:{"^":"a;l:a>,m:b>,$ti",
i:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
p:function(a,b){var z,y,x
if(b==null)return!1
z=H.aG(b,"$isb1",[P.G],null)
if(!z)return!1
z=this.a
y=J.bB(b)
x=y.gl(b)
if(z==null?x==null:z===x){z=this.b
y=y.gm(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gF:function(a){var z,y
z=J.ak(this.a)
y=J.ak(this.b)
return P.dQ(P.bh(P.bh(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.n()
y=H.t(this,0)
z=H.v(z*b,y)
x=this.b
if(typeof x!=="number")return x.n()
return new P.b1(z,H.v(x*b,y),this.$ti)}},
it:{"^":"a;$ti",
gaM:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.v(z+this.c,H.t(this,0))},
gaE:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.v(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.d(this.a)+", "+H.d(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.aG(b,"$isV",[P.G],"$asV")
if(!z)return!1
z=this.a
y=J.bB(b)
x=y.ga7(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaj(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.t(this,0)
if(H.v(z+this.c,w)===y.gaM(b)){if(typeof x!=="number")return x.E()
z=H.v(x+this.d,w)===y.gaE(b)}else z=!1}else z=!1}else z=!1
return z},
gF:function(a){var z,y,x,w,v
z=this.a
y=J.ak(z)
x=this.b
w=J.ak(x)
if(typeof z!=="number")return z.E()
v=H.t(this,0)
z=H.v(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.v(x+this.d,v)
return P.dQ(P.bh(P.bh(P.bh(P.bh(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
bi:function(a,b){var z,y
H.w(b,"$isb1",[P.G],"$asb1")
z=b.a
y=this.a
if(typeof z!=="number")return z.bJ()
if(typeof y!=="number")return H.A(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.bJ()
if(typeof y!=="number")return H.A(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
V:{"^":"it;a7:a>,aj:b>,W:c>,V:d>,$ti"}}],["","",,P,{"^":"",k8:{"^":"F;0l:x=,0m:y=","%":"SVGFEBlendElement"},k9:{"^":"F;0l:x=,0m:y=","%":"SVGFEColorMatrixElement"},ka:{"^":"F;0l:x=,0m:y=","%":"SVGFEComponentTransferElement"},kb:{"^":"F;0l:x=,0m:y=","%":"SVGFECompositeElement"},kc:{"^":"F;0l:x=,0m:y=","%":"SVGFEConvolveMatrixElement"},kd:{"^":"F;0l:x=,0m:y=","%":"SVGFEDiffuseLightingElement"},ke:{"^":"F;0l:x=,0m:y=","%":"SVGFEDisplacementMapElement"},kf:{"^":"F;0l:x=,0m:y=","%":"SVGFEFloodElement"},kg:{"^":"F;0l:x=,0m:y=","%":"SVGFEGaussianBlurElement"},kh:{"^":"F;0l:x=,0m:y=","%":"SVGFEImageElement"},ki:{"^":"F;0l:x=,0m:y=","%":"SVGFEMergeElement"},kj:{"^":"F;0l:x=,0m:y=","%":"SVGFEMorphologyElement"},kk:{"^":"F;0l:x=,0m:y=","%":"SVGFEOffsetElement"},kl:{"^":"F;0l:x=,0m:y=","%":"SVGFEPointLightElement"},km:{"^":"F;0l:x=,0m:y=","%":"SVGFESpecularLightingElement"},kn:{"^":"F;0l:x=,0m:y=","%":"SVGFESpotLightElement"},ko:{"^":"F;0l:x=,0m:y=","%":"SVGFETileElement"},kp:{"^":"F;0l:x=,0m:y=","%":"SVGFETurbulenceElement"},ks:{"^":"F;0l:x=,0m:y=","%":"SVGFilterElement"},kt:{"^":"aV;0l:x=,0m:y=","%":"SVGForeignObjectElement"},eZ:{"^":"aV;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aV:{"^":"F;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ky:{"^":"aV;0l:x=,0m:y=","%":"SVGImageElement"},bu:{"^":"j;",$isbu:1,"%":"SVGLength"},kB:{"^":"id;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.k(a,b)},
$asn:function(){return[P.bu]},
$isf:1,
$asf:function(){return[P.bu]},
$isb:1,
$asb:function(){return[P.bu]},
$asp:function(){return[P.bu]},
"%":"SVGLengthList"},kE:{"^":"F;0l:x=,0m:y=","%":"SVGMaskElement"},bw:{"^":"j;",$isbw:1,"%":"SVGNumber"},kR:{"^":"iq;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.k(a,b)},
$asn:function(){return[P.bw]},
$isf:1,
$asf:function(){return[P.bw]},
$isb:1,
$asb:function(){return[P.bw]},
$asp:function(){return[P.bw]},
"%":"SVGNumberList"},kT:{"^":"F;0l:x=,0m:y=","%":"SVGPatternElement"},kV:{"^":"j;0l:x=,0m:y=","%":"SVGPoint"},kW:{"^":"j;0j:length=","%":"SVGPointList"},kX:{"^":"j;0l:x=,0m:y=","%":"SVGRect"},kY:{"^":"eZ;0l:x=,0m:y=","%":"SVGRectElement"},l5:{"^":"iF;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.k(a,b)},
$asn:function(){return[P.k]},
$isf:1,
$asf:function(){return[P.k]},
$isb:1,
$asb:function(){return[P.k]},
$asp:function(){return[P.k]},
"%":"SVGStringList"},F:{"^":"Q;",
gbh:function(a){return new P.eV(a,new W.hO(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},l6:{"^":"aV;0l:x=,0m:y=","%":"SVGSVGElement"},h2:{"^":"aV;","%":"SVGTextPathElement;SVGTextContentElement"},l8:{"^":"h2;0l:x=,0m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bx:{"^":"j;",$isbx:1,"%":"SVGTransform"},le:{"^":"iP;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.k(a,b)},
$asn:function(){return[P.bx]},
$isf:1,
$asf:function(){return[P.bx]},
$isb:1,
$asb:function(){return[P.bx]},
$asp:function(){return[P.bx]},
"%":"SVGTransformList"},lg:{"^":"aV;0l:x=,0m:y=","%":"SVGUseElement"},ic:{"^":"j+n;"},id:{"^":"ic+p;"},ip:{"^":"j+n;"},iq:{"^":"ip+p;"},iE:{"^":"j+n;"},iF:{"^":"iE+p;"},iO:{"^":"j+n;"},iP:{"^":"iO+p;"}}],["","",,P,{"^":"",jO:{"^":"j;0j:length=","%":"AudioBuffer"},jP:{"^":"hN;",
k:function(a,b){return P.aj(a.get(H.H(b)))},
C:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aj(y.value[1]))}},
gZ:function(a){var z=H.h([],[P.k])
this.C(a,new P.eq(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.k,null]},
$isS:1,
$asS:function(){return[P.k,null]},
"%":"AudioParamMap"},eq:{"^":"o:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},jQ:{"^":"R;0j:length=","%":"AudioTrackList"},er:{"^":"R;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kS:{"^":"er;0j:length=","%":"OfflineAudioContext"},hN:{"^":"j+X;"}}],["","",,P,{"^":"",dk:{"^":"j;",$isdk:1,"%":"WebGLRenderingContext"},hl:{"^":"j;",$ishl:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",l3:{"^":"iC;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.aj(a.item(b))},
w:function(a,b){return this.k(a,b)},
$asn:function(){return[[P.S,,,]]},
$isf:1,
$asf:function(){return[[P.S,,,]]},
$isb:1,
$asb:function(){return[[P.S,,,]]},
$asp:function(){return[[P.S,,,]]},
"%":"SQLResultSetRowList"},iB:{"^":"j+n;"},iC:{"^":"iB+p;"}}],["","",,O,{"^":"",at:{"^":"a;0a,0b,0c,0d,$ti",
aS:function(a){this.a=H.h([],[a])
this.b=null
this.c=null
this.d=null},
bN:function(a,b,c){var z={func:1,ret:-1,args:[P.I,[P.f,H.aI(this,"at",0)]]}
H.c(a,z)
H.c(c,z)
this.b=b
this.c=a
this.d=c},
ar:function(a,b){return this.bN(a,null,b)},
cv:function(a){H.w(a,"$isf",[H.aI(this,"at",0)],"$asf")
return!0},
bV:function(a,b){var z
H.w(b,"$isf",[H.aI(this,"at",0)],"$asf")
z=this.c
if(z!=null)z.$2(a,b)},
gj:function(a){return this.a.length},
gJ:function(a){var z=this.a
return new J.ac(z,z.length,0,[H.t(z,0)])},
w:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aI(this,"at",0)
H.v(b,z)
z=[z]
if(this.cv(H.h([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.bV(x,H.h([b],z))}},
$isf:1,
q:{
cS:function(a){var z=new O.at([a])
z.aS(a)
return z}}},ca:{"^":"a;0a,0b",
gj:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.a3()
this.b=z}return z},
bW:function(a){var z=this.b
if(!(z==null))z.L(a)},
a2:function(){return this.bW(null)},
gaf:function(a){var z=this.a
if(z.length>0)return C.a.gaH(z)
else return V.bM()},
bx:function(a){var z=this.a
if(a==null)C.a.h(z,V.bM())
else C.a.h(z,a)
this.a2()},
aJ:function(){var z=this.a
if(z.length>0){z.pop()
this.a2()}}}}],["","",,E,{"^":"",cJ:{"^":"a;"},ad:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0K:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
bF:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.ap(0,b,this):null
if(!J.K(y,this.x)){x=this.x
this.x=y
w=new D.J("matrix",x,y,this,[V.bv])
w.b=!0
this.T(w)}for(z=this.y.a,z=new J.ac(z,z.length,0,[H.t(z,0)]);z.A();)z.d.bF(0,b)},
a8:function(a){var z,y,x,w,v,u,t,s
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaf(z))
else C.a.h(z.a,y.n(0,z.gaf(z)))
z.a2()
a.by(this.f)
z=a.dy
x=(z&&C.a).gaH(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.k(0,"Depth")
if(w==null){z=a.a
w=new A.eH(z,"Depth")
w.bU(z,"Depth")
y=$.eJ
v=$.eI
w.c=w.b2(y,35633)
w.d=w.b2(v,35632)
v=z.createProgram()
w.e=v
z.attachShader(v,w.c)
z.attachShader(w.e,w.d)
z.linkProgram(w.e)
if(!H.ea(z.getProgramParameter(w.e,35714))){u=z.getProgramInfoLog(w.e)
z.deleteProgram(w.e)
H.Y(P.a4("Failed to link shader: "+H.d(u)))}w.cM()
w.cN()
w.x=w.f.k(0,"posAttr")
w.y=H.aK(w.r.k(0,"objClr"),"$isck")
w.z=H.aK(w.r.k(0,"fogClr"),"$isck")
w.Q=H.aK(w.r.k(0,"fogStart"),"$isci")
w.ch=H.aK(w.r.k(0,"fogStop"),"$isci")
w.cx=H.aK(w.r.k(0,"viewObjMat"),"$iscl")
w.cy=H.aK(w.r.k(0,"projMat"),"$iscl")
if(a.fr.cY(0,"Depth"))H.Y(P.a4('Shader cache already contains a shader by the name "Depth".'))
a.fr.N(0,"Depth",w)}x.a=w
z=w}y=this.e
if(!(y instanceof Z.cN)){this.e=null
y=null}if(y==null){z=this.d.cU(new Z.hE(a.a),$.$get$ah())
y=z.d3($.$get$ah())
v=x.a
y.e=v.x.c
this.e=z
z=v}a.a.useProgram(z.e)
z.f.d2()
y=x.b
v=z.y
v.toString
t=y.a
s=y.b
y=y.c
v.a.uniform3f(v.d,t,s,y)
y=x.c
s=z.z
s.toString
t=y.a
v=y.b
y=y.c
s.a.uniform3f(s.d,t,v,y)
y=x.d
v=z.Q
v.a.uniform1f(v.d,y)
y=x.e
v=z.ch
v.a.uniform1f(v.d,y)
y=a.cy
y=y.gaf(y)
v=z.cy
v.toString
v.aP(y.bD(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gaf(y)
v=a.dx
v=y.n(0,v.gaf(v))
a.cx=v
y=v}z=z.cx
z.toString
z.aP(y.bD(0,!0))
y=this.e
y.aD(a)
y.a8(a)
y.dJ(a)
y=x.a
y.toString
a.a.useProgram(null)
y.f.d1()}for(z=this.y.a,z=new J.ac(z,z.length,0,[H.t(z,0)]);z.A();)z.d.a8(a)
a.bw()
a.dx.aJ()},
gv:function(){var z=this.z
if(z==null){z=D.a3()
this.z=z}return z},
T:function(a){var z=this.z
if(!(z==null))z.L(a)},
S:function(){return this.T(null)},
dl:[function(a){H.l(a,"$isr")
this.e=null
this.T(a)},function(){return this.dl(null)},"ea","$1","$0","gbu",0,2,1],
dk:[function(a){this.T(H.l(a,"$isr"))},function(){return this.dk(null)},"e9","$1","$0","gbt",0,2,1],
di:[function(a){this.T(H.l(a,"$isr"))},function(){return this.di(null)},"e7","$1","$0","gbs",0,2,1],
e6:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isf",[E.ad],"$asf")
for(z=b.length,y=this.gbs(),x={func:1,ret:-1,args:[D.r]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.gK()==null){t=new D.bq()
t.a=H.h([],w)
t.c=0
u.sK(t)}t=u.gK()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.S()},"$2","gdh",8,0,5],
e8:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isf",[E.ad],"$asf")
for(z=b.length,y=this.gbs(),x={func:1,ret:-1,args:[D.r]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.gK()==null){t=new D.bq()
t.a=H.h([],w)
t.c=0
u.sK(t)}t=u.gK()
t.toString
H.c(y,x)
C.a.H(t.a,y)}}this.S()},"$2","gdj",8,0,5],
$isdc:1,
q:{
ae:function(a,b,c,d,e,f){var z,y,x,w,v,u
z=new E.ad()
z.a=d
z.b=!0
y=O.cS(E.ad)
z.y=y
y.ar(z.gdh(),z.gdj())
z.z=null
z.Q=null
z.ch=null
z.cx=null
z.cy=null
z.db=null
z.dx=null
z.dy=null
z.fr=null
z.fx=null
y=z.c
if(y==null?e!=null:y!==e){z.c=e
z.d=e
z.e=null
if(y!=null){x=y.gv()
x.toString
w=H.c(z.gbu(),{func:1,ret:-1,args:[D.r]})
C.a.H(x.a,w)}x=z.c
if(x!=null){x=x.gv()
x.toString
w=H.c(z.gbu(),{func:1,ret:-1,args:[D.r]})
C.a.h(x.a,w)}v=new D.J("shape",y,z.c,z,[F.dn])
v.b=!0
z.T(v)}if(!J.K(z.r,c)){u=z.r
if(u!=null){y=u.gv()
y.toString
x=H.c(z.gbt(),{func:1,ret:-1,args:[D.r]})
C.a.H(y.a,x)}y=c.gv()
y.toString
x=H.c(z.gbt(),{func:1,ret:-1,args:[D.r]})
C.a.h(y.a,x)
z.r=c
v=new D.J("mover",u,c,z,[U.a_])
v.b=!0
z.T(v)}return z}}},fK:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
bT:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aQ(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.ca()
y=[V.bv]
z.a=H.h([],y)
x=z.gv()
x.toString
w={func:1,ret:-1,args:[D.r]}
v=H.c(new E.fM(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.ca()
z.a=H.h([],y)
v=z.gv()
v.toString
x=H.c(new E.fN(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.ca()
z.a=H.h([],y)
y=z.gv()
y.toString
w=H.c(new E.fO(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.h([],[O.cg])
this.dy=z
C.a.h(z,null)
this.fr=new H.c7(0,0,[P.k,A.dm])},
by:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaH(z):a;(z&&C.a).h(z,y)},
bw:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
fL:function(a,b){var z=new E.fK(a,b)
z.bT(a,b)
return z}}},fM:{"^":"o:10;a",
$1:function(a){var z
H.l(a,"$isr")
z=this.a
z.z=null
z.ch=null}},fN:{"^":"o:10;a",
$1:function(a){var z
H.l(a,"$isr")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},fO:{"^":"o:10;a",
$1:function(a){var z
H.l(a,"$isr")
z=this.a
z.ch=null
z.cx=null}},h4:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0K:x@,0y,0z,0Q,0ch",
gv:function(){var z=this.x
if(z==null){z=D.a3()
this.x=z}return z},
bY:[function(a){var z
H.l(a,"$isr")
z=this.x
if(!(z==null))z.L(a)
this.dB()},function(){return this.bY(null)},"bX","$1","$0","gaT",0,2,1],
gd5:function(){var z,y,x
z=Date.now()
y=C.b.ab(P.d1(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aQ(z,!1)
return x/y},
b9:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.A(z)
x=C.d.bo(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.n()
w=C.d.bo(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
dB:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.c(new E.h6(this),{func:1,ret:-1,args:[P.G]})
C.n.ca(z)
C.n.cG(z,W.e6(y,P.G))}},
dA:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.b9()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aQ(w,!1)
x.y=P.d1(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sj(w.a,0)
w.a2()
w=x.db
C.a.sj(w.a,0)
w.a2()
w=x.dx
C.a.sj(w.a,0)
w.a2()
w=x.dy;(w&&C.a).sj(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a8(this.e)}}catch(v){z=H.ar(v)
y=H.aJ(v)
P.cD("Error: "+H.d(z))
P.cD("Stack: "+H.d(y))
throw H.e(z)}},
q:{
h5:function(a,b,c,d,e){var z,y,x,w
z=J.B(a)
if(!!z.$isc0)return E.du(a,!0,!0,!0,!1)
y=W.cQ(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbh(a).h(0,y)
w=E.du(y,!0,!0,!0,!1)
w.a=a
return w},
du:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.h4()
y=P.fd(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
x=C.f.aO(a,"webgl",y)
x=H.l(x==null?C.f.aO(a,"experimental-webgl",y):x,"$isdk")
if(x==null)H.Y(P.a4("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.fL(x,a)
w=new T.h3(x)
w.b=H.P(x.getParameter(3379))
w.c=H.P(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ht(a)
v=new X.f7()
v.c=new X.b_(!1,!1,!1)
v.d=P.fe(null,null,null,P.I)
w.b=v
v=new X.fq(w)
v.f=0
v.r=new V.N(0,0)
v.x=new V.N(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fi(w)
v.r=0
v.x=new V.N(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.h9(w)
v.e=0
v.f=new V.N(0,0)
v.r=new V.N(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.h([],[[P.dq,P.a]])
w.z=v
u=document
t=W.a9
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.O(u,"contextmenu",H.c(w.gcj(),s),!1,t))
v=w.z
r=W.W
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.O(a,"focus",H.c(w.gcm(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.O(a,"blur",H.c(w.gcf(),q),!1,r))
v=w.z
p=W.aY
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.O(u,"keyup",H.c(w.gco(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.O(u,"keydown",H.c(w.gcn(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.O(a,"mousedown",H.c(w.gcq(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.O(a,"mouseup",H.c(w.gcs(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.O(a,"mousemove",H.c(w.gcr(),s),!1,t))
p=w.z
o=W.bf;(p&&C.a).h(p,W.O(a,H.H(W.eQ(a)),H.c(w.gct(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.O(u,"mousemove",H.c(w.gck(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.O(u,"mouseup",H.c(w.gcl(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.O(u,"pointerlockchange",H.c(w.gcu(),q),!1,r))
r=w.z
q=W.aw
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.O(a,"touchstart",H.c(w.gcB(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.O(a,"touchend",H.c(w.gcz(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.O(a,"touchmove",H.c(w.gcA(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aQ(Date.now(),!1)
z.ch=0
z.b9()
return z}}},h6:{"^":"o:20;a",
$1:function(a){var z
H.jv(a)
z=this.a
if(z.z){z.z=!1
z.dA()}}}}],["","",,Z,{"^":"",dM:{"^":"a;a,b",q:{
cn:function(a,b,c){var z
H.w(c,"$isb",[P.I],"$asb")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cr(c)),35044)
a.bindBuffer(b,null)
return new Z.dM(b,z)}}},cM:{"^":"cJ;a,b,c,d,e",
aD:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ar(y)
x=P.a4('Failed to bind buffer attribute "'+J.a2(this.a)+'": '+H.d(z))
throw H.e(x)}},
i:function(a){return"["+J.a2(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.d(this.e)+"]"}},hE:{"^":"a;a",$isjR:1},cN:{"^":"a;a,0b,c,d",
d3:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aD:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aD(a)},
dJ:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a8:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.k]
y=H.h([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].i(0))
u=H.h([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a2(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.M(y,", ")+"\nAttrs:   "+C.a.M(u,", ")},
$isl7:1},bK:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.au(this.c)+"'")+"]"}},dI:{"^":"a;a",
gaQ:function(a){var z,y
z=this.a
y=(z&$.$get$ah().a)!==0?3:0
if((z&$.$get$az().a)!==0)y+=3
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$aA().a)!==0)y+=2
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$bd().a)!==0)y+=3
if((z&$.$get$be().a)!==0)y+=4
if((z&$.$get$aC().a)!==0)++y
return(z&$.$get$ax().a)!==0?y+4:y},
cS:function(a){var z,y,x
z=$.$get$ah()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bd()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$be()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ax()
if((y&z.a)!==0)if(x===a)return z
return $.$get$dL()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.dI))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.h([],[P.k])
y=this.a
if((y&$.$get$ah().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$az().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$ay().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aB().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bd().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$be().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.M(z,"|")},
q:{
a0:function(a){return new Z.dI(a)}}}}],["","",,D,{"^":"",ev:{"^":"a;"},bq:{"^":"a;0a,0b,0c",
L:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.r(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.C(y,new D.eT(z))
return x!==0},
dC:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.L(y)}}},
ai:function(a){return this.dC(a,!0,!1)},
q:{
a3:function(){var z=new D.bq()
z.a=H.h([],[{func:1,ret:-1,args:[D.r]}])
z.c=0
return z}}},eT:{"^":"o:21;a",
$1:function(a){var z
H.c(a,{func:1,ret:-1,args:[D.r]})
z=this.a.a
z.b
a.$1(z)}},r:{"^":"a;a,0b"},d4:{"^":"r;c,d,a,0b,$ti"},d5:{"^":"r;c,d,a,0b,$ti"},J:{"^":"r;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}}],["","",,X,{"^":"",cO:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cO))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)},
q:{"^":"jS<"}},d8:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}},f7:{"^":"a;0a,0b,0c,0d",
dt:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
dn:function(a){this.c=a.b
this.d.H(0,a.a)
return!1}},fi:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aI:function(a,b){this.r=a.a
return!1},
ah:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.bM()
if(typeof z!=="number")return z.bH()
this.r=(z&~y)>>>0
return!1},
ag:function(a,b){return!1},
du:function(a){return!1},
cp:function(a,b,c){return}},b_:{"^":"a;a,b,c",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b_))return!1
if(this.a!==b.a)return!1
z=this.b
y=b.b
if(z==null?y!=null:z!==y)return!1
z=this.c
y=b.c
if(z==null?y!=null:z!==y)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},fq:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
aI:function(a,b){this.f=a.a
return!1},
ah:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.bM()
if(typeof z!=="number")return z.bH()
this.f=(z&~y)>>>0
return!1},
ag:function(a,b){return!1},
dv:function(a,b){return!1}},fA:{"^":"r;"},h8:{"^":"fA;x,y,z,Q,ch,c,d,e,a,0b"},h9:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
b4:function(a,b){var z,y,x,w
H.w(a,"$isb",[V.N],"$asb")
z=new P.aQ(Date.now(),!1)
y=a.length>0?a[0]:new V.N(0,0)
x=this.a.gcV()
w=new X.h8(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ds:function(a){var z
H.w(a,"$isb",[V.N],"$asb")
z=this.b
if(z==null)return!1
z.L(this.b4(a,!0))
return!0},
dq:function(a){var z
H.w(a,"$isb",[V.N],"$asb")
z=this.c
if(z==null)return!1
z.L(this.b4(a,!0))
return!0},
dr:function(a){H.w(a,"$isb",[V.N],"$asb")
return!1}},ht:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gcV:function(){var z=this.a
return V.dj(0,0,(z&&C.f).gao(z).c,C.f.gao(z).d)},
b1:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.d8(z,new X.b_(y,a.altKey,a.shiftKey))},
a6:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b_(y,a.altKey,a.shiftKey)},
aC:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b_(y,a.altKey,a.shiftKey)},
Y:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.a1()
v=z.top
if(typeof x!=="number")return x.a1()
return new V.N(y-w,x-v)},
aa:function(a){return new V.bc(a.movementX,a.movementY)},
az:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.h([],[V.N])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.d.R(u.pageX)
C.d.R(u.pageY)
s=z.left
C.d.R(u.pageX)
C.a.h(y,new V.N(t-s,C.d.R(u.pageY)-z.top))}return y},
X:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.cO(z,new X.b_(y,a.altKey,a.shiftKey))},
dV:[function(a){this.f=!0},"$1","gcm",4,0,4],
dO:[function(a){this.f=!1},"$1","gcf",4,0,4],
dS:[function(a){if(this.f)a.preventDefault()},"$1","gcj",4,0,4],
dX:[function(a){var z
H.l(a,"$isaY")
if(!this.f)return
z=this.b1(a)
this.b.dt(z)},"$1","gco",4,0,17],
dW:[function(a){var z
H.l(a,"$isaY")
if(!this.f)return
z=this.b1(a)
this.b.dn(z)},"$1","gcn",4,0,17],
dY:[function(a){var z,y,x,w
H.l(a,"$isa9")
z=this.a
z.focus()
this.f=!0
this.a6(a)
if(this.x){y=this.X(a)
x=this.aa(a)
if(this.d.aI(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.X(a)
w=this.Y(a)
if(this.c.aI(y,w))a.preventDefault()},"$1","gcq",4,0,3],
e_:[function(a){var z,y,x
H.l(a,"$isa9")
this.a6(a)
z=this.X(a)
if(this.x){y=this.aa(a)
if(this.d.ah(z,y))a.preventDefault()
return}if(this.r)return
x=this.Y(a)
if(this.c.ah(z,x))a.preventDefault()},"$1","gcs",4,0,3],
dU:[function(a){var z,y,x,w
H.l(a,"$isa9")
z=this.a
if(!(z&&C.f).gao(z).bi(0,new P.b1(a.clientX,a.clientY,[P.G]))){this.a6(a)
y=this.X(a)
if(this.x){x=this.aa(a)
if(this.d.ah(y,x))a.preventDefault()
return}if(this.r)return
w=this.Y(a)
if(this.c.ah(y,w))a.preventDefault()}},"$1","gcl",4,0,3],
dZ:[function(a){var z,y,x
H.l(a,"$isa9")
this.a6(a)
z=this.X(a)
if(this.x){y=this.aa(a)
if(this.d.ag(z,y))a.preventDefault()
return}if(this.r)return
x=this.Y(a)
if(this.c.ag(z,x))a.preventDefault()},"$1","gcr",4,0,3],
dT:[function(a){var z,y,x,w
H.l(a,"$isa9")
z=this.a
if(!(z&&C.f).gao(z).bi(0,new P.b1(a.clientX,a.clientY,[P.G]))){this.a6(a)
y=this.X(a)
if(this.x){x=this.aa(a)
if(this.d.ag(y,x))a.preventDefault()
return}if(this.r)return
w=this.Y(a)
if(this.c.ag(y,w))a.preventDefault()}},"$1","gck",4,0,3],
e0:[function(a){var z,y
H.l(a,"$isbf")
this.a6(a)
z=new V.bc((a&&C.m).gd_(a),C.m.gd0(a)).G(0,180)
if(this.x){if(this.d.du(z))a.preventDefault()
return}if(this.r)return
y=this.Y(a)
if(this.c.dv(z,y))a.preventDefault()},"$1","gct",4,0,24],
e1:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.X(this.y)
v=this.Y(this.y)
this.d.cp(w,v,x)}},"$1","gcu",4,0,4],
e5:[function(a){var z
H.l(a,"$isaw")
this.a.focus()
this.f=!0
this.aC(a)
z=this.az(a)
if(this.e.ds(z))a.preventDefault()},"$1","gcB",4,0,9],
e3:[function(a){var z
H.l(a,"$isaw")
this.aC(a)
z=this.az(a)
if(this.e.dq(z))a.preventDefault()},"$1","gcz",4,0,9],
e4:[function(a){var z
H.l(a,"$isaw")
this.aC(a)
z=this.az(a)
if(this.e.dr(z))a.preventDefault()},"$1","gcA",4,0,9]}}],["","",,V,{"^":"",
jU:[function(a,b){if(typeof b!=="number")return b.a1()
if(typeof a!=="number")return H.A(a)
return Math.abs(b-a)<=1e-9},"$2","fn",8,0,22],
cE:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bL(a-b,z)
return(a<0?a+z:a)+b},
y:function(a,b,c){if(a==null)return C.e.a_("null",c)
return C.e.a_(C.d.bE($.m.$2(a,0)?0:a,b),c+b+1)},
bU:function(a,b,c){var z,y,x,w,v
H.w(a,"$isb",[P.q],"$asb")
z=H.h([],[P.k])
for(y=0,x=0;x<4;++x){w=V.y(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.i(z,v)
C.a.N(z,v,C.e.a_(z[v],y))}return z},
bn:{"^":"a;a,b,c",
n:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.bn(z,y,x)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bn))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}},
bo:{"^":"a;a,b,c,d",
n:function(a,b){var z,y,x,w
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
return new V.bo(z,y,x,w)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bo))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+", "+V.y(this.d,3,0)+"]"}},
bv:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
bD:function(a,b){var z=H.h([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
n:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.l(a7,"$isbv")
z=this.a
y=a7.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.A(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.A(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.A(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.n()
if(typeof s!=="number")return H.A(s)
r=a7.b
if(typeof r!=="number")return H.A(r)
q=a7.f
if(typeof q!=="number")return H.A(q)
p=a7.z
if(typeof p!=="number")return H.A(p)
o=a7.cy
if(typeof o!=="number")return H.A(o)
n=a7.c
if(typeof n!=="number")return H.A(n)
m=a7.r
if(typeof m!=="number")return H.A(m)
l=a7.Q
if(typeof l!=="number")return H.A(l)
k=a7.db
if(typeof k!=="number")return H.A(k)
j=a7.d
if(typeof j!=="number")return H.A(j)
i=a7.x
if(typeof i!=="number")return H.A(i)
h=a7.ch
if(typeof h!=="number")return H.A(h)
g=a7.dx
if(typeof g!=="number")return H.A(g)
f=this.e
if(typeof f!=="number")return f.n()
e=this.f
if(typeof e!=="number")return e.n()
d=this.r
if(typeof d!=="number")return d.n()
c=this.x
if(typeof c!=="number")return c.n()
b=this.y
if(typeof b!=="number")return b.n()
a=this.z
if(typeof a!=="number")return a.n()
a0=this.Q
if(typeof a0!=="number")return a0.n()
a1=this.ch
if(typeof a1!=="number")return a1.n()
a2=this.cx
if(typeof a2!=="number")return a2.n()
a3=this.cy
if(typeof a3!=="number")return a3.n()
a4=this.db
if(typeof a4!=="number")return a4.n()
a5=this.dx
if(typeof a5!=="number")return a5.n()
return V.af(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bv))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
z=b.e
if(!$.m.$2(z,this.e))return!1
z=b.f
if(!$.m.$2(z,this.f))return!1
z=b.r
if(!$.m.$2(z,this.r))return!1
z=b.x
if(!$.m.$2(z,this.x))return!1
z=b.y
if(!$.m.$2(z,this.y))return!1
z=b.z
if(!$.m.$2(z,this.z))return!1
z=b.Q
if(!$.m.$2(z,this.Q))return!1
z=b.ch
if(!$.m.$2(z,this.ch))return!1
z=b.cx
if(!$.m.$2(z,this.cx))return!1
z=b.cy
if(!$.m.$2(z,this.cy))return!1
z=b.db
if(!$.m.$2(z,this.db))return!1
z=b.dx
if(!$.m.$2(z,this.dx))return!1
return!0},
i:function(a){return this.B()},
bp:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.bU(H.h([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bU(H.h([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bU(H.h([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bU(H.h([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.i(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.i(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.i(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.i(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.i(y,1)
q=q+y[1]+", "
if(1>=t)return H.i(x,1)
q=q+x[1]+", "
if(1>=s)return H.i(w,1)
q=q+w[1]+", "
if(1>=r)return H.i(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.i(y,2)
u=u+y[2]+", "
if(2>=t)return H.i(x,2)
u=u+x[2]+", "
if(2>=s)return H.i(w,2)
u=u+w[2]+", "
if(2>=r)return H.i(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.i(y,3)
q=q+y[3]+", "
if(3>=t)return H.i(x,3)
q=q+x[3]+", "
if(3>=s)return H.i(w,3)
q=q+w[3]+", "
if(3>=r)return H.i(v,3)
return u+(q+v[3]+"]")},
u:function(a){return this.bp(a,3,0)},
B:function(){return this.bp("",3,0)},
q:{
af:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bM:function(){return V.af(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
N:{"^":"a;l:a>,m:b>",
n:function(a,b){return new V.N(this.a*b,this.b*b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}},
am:{"^":"a;l:a>,m:b>,c",
a1:function(a,b){return new V.am(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){return new V.am(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}},
di:{"^":"a;l:a>,m:b>,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.di))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+", "+V.y(this.d,3,0)+"]"},
q:{
dj:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.di(a,b,c,d)}}},
bc:{"^":"a;a,b",
da:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.n()
y=this.b
if(typeof y!=="number")return y.n()
return Math.sqrt(z*z+y*y)},"$0","gj",1,0,13],
n:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.n()
y=this.b
if(typeof y!=="number")return y.n()
return new V.bc(z*b,y*b)},
G:function(a,b){var z,y
if($.m.$2(b,0))return new V.bc(0,0)
z=this.a
if(typeof z!=="number")return z.G()
y=this.b
if(typeof y!=="number")return y.G()
return new V.bc(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bc))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}},
L:{"^":"a;a,b,c",
da:[function(a){return Math.sqrt(this.I(this))},"$0","gj",1,0,13],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ac:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.L(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
aq:function(a){return new V.L(-this.a,-this.b,-this.c)},
n:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
G:function(a,b){if($.m.$2(b,0))return new V.L(0,0,0)
return new V.L(this.a/b,this.b/b,this.c/b)},
d9:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}}],["","",,U,{"^":"",cT:{"^":"a_;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.a3()
this.b=z}return z},
ap:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cT))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")},
q:{
cU:function(a){var z=new U.cT()
z.a=a
return z}}},d3:{"^":"at;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.a3()
this.e=z}return z},
O:[function(a){var z
H.l(a,"$isr")
z=this.e
if(!(z==null))z.L(a)},function(){return this.O(null)},"dK","$1","$0","gaU",0,2,1],
dN:[function(a,b){var z,y,x,w,v,u,t
z=U.a_
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gaU(),w={func:1,ret:-1,args:[D.r]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gv()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.d4(a,b,this,[z])
z.b=!0
this.O(z)},"$2","gce",8,0,12],
e2:[function(a,b){var z,y,x,w,v,u,t
z=U.a_
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gaU(),w={func:1,ret:-1,args:[D.r]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gv()
t.toString
H.c(x,w)
C.a.H(t.a,x)}}z=new D.d5(a,b,this,[z])
z.b=!0
this.O(z)},"$2","gcw",8,0,12],
ap:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a0()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ac(z,z.length,0,[H.t(z,0)]),x=null;z.A();){y=z.d
if(y!=null){w=y.ap(0,b,c)
if(w!=null)x=x==null?w:w.n(0,x)}}this.f=x==null?V.bM():x
z=this.e
if(!(z==null))z.ai(0)}return this.f},
p:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d3))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.K(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asf:function(){return[U.a_]},
$asat:function(){return[U.a_]},
$isa_:1},a_:{"^":"ev;"},dl:{"^":"a_;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gv:function(){var z=this.y
if(z==null){z=D.a3()
this.y=z}return z},
O:function(a){var z=this.y
if(!(z==null))z.L(a)},
sbG:function(a){var z,y
a=V.cE(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.J("yaw",y,a,this,[P.q])
z.b=!0
this.O(z)}},
sbv:function(a,b){var z,y
b=V.cE(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.J("pitch",y,b,this,[P.q])
z.b=!0
this.O(z)}},
sbz:function(a){var z,y
a=V.cE(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.J("roll",y,a,this,[P.q])
z.b=!0
this.O(z)}},
sbm:function(a){var z,y
z=this.d
if(!$.m.$2(z,a)){y=this.d
this.d=a
z=new D.J("deltaYaw",y,a,this,[P.q])
z.b=!0
this.O(z)}},
sbk:function(a){var z,y
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=new D.J("deltaPitch",y,a,this,[P.q])
z.b=!0
this.O(z)}},
sbl:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.J("deltaRoll",y,a,this,[P.q])
z.b=!0
this.O(z)}},
ap:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sbG(this.a+this.d*b.y)
this.sbv(0,this.b+this.e*b.y)
this.sbz(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
z=V.af(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1)
y=this.b
x=Math.cos(y)
w=Math.sin(y)
z=z.n(0,V.af(x,0,-w,0,0,1,0,0,w,0,x,0,0,0,0,1))
y=this.a
x=Math.cos(y)
w=Math.sin(y)
this.x=z.n(0,V.af(1,0,0,0,0,x,-w,0,0,w,x,0,0,0,0,1))
z=this.y
if(!(z==null))z.ai(0)}return this.x},
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dl))return!1
z=this.a
y=b.a
if(!$.m.$2(z,y))return!1
z=this.b
y=b.b
if(!$.m.$2(z,y))return!1
z=this.c
y=b.c
if(!$.m.$2(z,y))return!1
z=this.d
y=b.d
if(!$.m.$2(z,y))return!1
z=this.e
y=b.e
if(!$.m.$2(z,y))return!1
z=this.f
y=b.f
if(!$.m.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"], ["+V.y(this.d,3,0)+", "+V.y(this.e,3,0)+", "+V.y(this.f,3,0)+"]"}}}],["","",,M,{"^":"",eR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
a3:[function(a){var z
H.l(a,"$isr")
z=this.x
if(!(z==null))z.L(a)},function(){return this.a3(null)},"dL","$1","$0","gU",0,2,1],
dQ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ad
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.gK()==null){s=new D.bq()
s.a=H.h([],v)
s.c=0
t.sK(s)}s=t.gK()
s.toString
H.c(x,w)
C.a.h(s.a,x)}}z=new D.d4(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gcg",8,0,5],
dR:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ad
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.gK()==null){s=new D.bq()
s.a=H.h([],v)
s.c=0
t.sK(s)}s=t.gK()
s.toString
H.c(x,w)
C.a.H(s.a,x)}}z=new D.d5(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gci",8,0,5],
sbB:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gv()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.r]})
C.a.H(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gv()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,y)}z=new D.J("technique",x,this.c,this,[O.cg])
z.b=!0
this.a3(z)}},
gv:function(){var z=this.x
if(z==null){z=D.a3()
this.x=z}return z},
a8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.by(this.c)
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
if(typeof x!=="number")return H.A(x)
u=C.b.R(v.a*x)
if(typeof w!=="number")return H.A(w)
t=C.b.R(v.b*w)
s=C.b.R(v.c*x)
a.c=s
v=C.b.R(v.d*w)
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
s=a.cy
r=z.b
q=z.c
p=z.d
o=p-q
n=1/Math.tan(r*0.5)
s.bx(V.af(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.df
if(y==null){y=new V.L(0,0,-1)
m=y.G(0,Math.sqrt(y.I(y)))
y=new V.L(0,1,0).ac(m)
l=y.G(0,Math.sqrt(y.I(y)))
k=m.ac(l)
j=new V.L(0,0,0)
y=V.af(l.a,k.a,m.a,l.aq(0).I(j),l.b,k.b,m.b,k.aq(0).I(j),l.c,k.c,m.c,m.aq(0).I(j),0,0,0,1)
$.df=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.n(0,i)}a.db.bx(i)
for(z=this.d.a,z=new J.ac(z,z.length,0,[H.t(z,0)]);z.A();)z.d.bF(0,a)
for(z=this.d.a,z=new J.ac(z,z.length,0,[H.t(z,0)]);z.A();)z.d.a8(a)
this.a.toString
a.cy.aJ()
a.db.aJ()
this.b.toString
a.bw()},
$isl_:1}}],["","",,A,{"^":"",cI:{"^":"a;a,b,c"},ep:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
d2:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d1:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eH:{"^":"dm;0x,0y,0z,0Q,0ch,0cx,0cy,a,b,0c,0d,0e,0f,0r"},dm:{"^":"cJ;",
bU:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
b2:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.ea(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.e(P.a4("Error compiling shader '"+H.d(y)+"': "+H.d(x)))}return y},
cM:function(){var z,y,x,w,v,u
z=H.h([],[A.cI])
y=this.a
x=H.P(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.cI(y,v.name,u))}this.f=new A.ep(z)},
cN:function(){var z,y,x,w,v,u
z=H.h([],[A.T])
y=this.a
x=H.P(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.cZ(v.type,v.size,v.name,u))}this.r=new A.hk(z)},
a5:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.hd(z,y,b,c)
else return A.cj(z,y,b,a,c)},
c7:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ho(z,y,b,c)
else return A.cj(z,y,b,a,c)},
c8:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.hp(z,y,b,c)
else return A.cj(z,y,b,a,c)},
an:function(a,b){return new P.dO(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
cZ:function(a,b,c,d){switch(a){case 5120:return this.a5(b,c,d)
case 5121:return this.a5(b,c,d)
case 5122:return this.a5(b,c,d)
case 5123:return this.a5(b,c,d)
case 5124:return this.a5(b,c,d)
case 5125:return this.a5(b,c,d)
case 5126:return new A.ci(this.a,this.e,c,d)
case 35664:return new A.hf(this.a,this.e,c,d)
case 35665:return new A.ck(this.a,this.e,c,d)
case 35666:return new A.hi(this.a,this.e,c,d)
case 35667:return new A.hg(this.a,this.e,c,d)
case 35668:return new A.hh(this.a,this.e,c,d)
case 35669:return new A.hj(this.a,this.e,c,d)
case 35674:return new A.hm(this.a,this.e,c,d)
case 35675:return new A.hn(this.a,this.e,c,d)
case 35676:return new A.cl(this.a,this.e,c,d)
case 35678:return this.c7(b,c,d)
case 35680:return this.c8(b,c,d)
case 35670:throw H.e(this.an("BOOL",c))
case 35671:throw H.e(this.an("BOOL_VEC2",c))
case 35672:throw H.e(this.an("BOOL_VEC3",c))
case 35673:throw H.e(this.an("BOOL_VEC4",c))
default:throw H.e(P.a4("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}},T:{"^":"a;"},hk:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.B()},
d4:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].i(0)+a
return x},
B:function(){return this.d4("\n")}},hd:{"^":"T;a,b,c,d",
i:function(a){return"Uniform1i: "+H.d(this.c)}},hg:{"^":"T;a,b,c,d",
i:function(a){return"Uniform2i: "+H.d(this.c)}},hh:{"^":"T;a,b,c,d",
i:function(a){return"Uniform3i: "+H.d(this.c)}},hj:{"^":"T;a,b,c,d",
i:function(a){return"Uniform4i: "+H.d(this.c)}},he:{"^":"T;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.d(this.c)},
q:{
cj:function(a,b,c,d,e){var z=new A.he(a,b,c,e)
z.f=d
z.e=P.fg(d,0,!1,P.I)
return z}}},ci:{"^":"T;a,b,c,d",
i:function(a){return"Uniform1f: "+H.d(this.c)}},hf:{"^":"T;a,b,c,d",
i:function(a){return"Uniform2f: "+H.d(this.c)}},ck:{"^":"T;a,b,c,d",
i:function(a){return"Uniform3f: "+H.d(this.c)}},hi:{"^":"T;a,b,c,d",
i:function(a){return"Uniform4f: "+H.d(this.c)}},hm:{"^":"T;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}},hn:{"^":"T;a,b,c,d",
i:function(a){return"UniformMat3: "+H.d(this.c)}},cl:{"^":"T;a,b,c,d",
aP:function(a){var z=new Float32Array(H.cr(H.w(a,"$isb",[P.q],"$asb")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.d(this.c)}},ho:{"^":"T;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.d(this.c)}},hp:{"^":"T;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}}],["","",,F,{"^":"",
jH:function(a,b,c,d){return F.jc(c,a,d,b,new F.jI())},
jc:function(a,b,c,d,e){var z,y
z=F.jF(a,b,new F.jd(H.c(e,{func:1,ret:V.am,args:[P.q]}),d,b,c),null)
if(z==null)return
y=z.e
if(!(y==null))++y.c
z.d.aG()
z.a.aG()
y=z.e
if(!(y==null))y.ai(0)
z.dg(new F.hz(),new F.fu())
return z},
jF:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.c(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
if(a<1)return
if(b<1)return
z=new F.dn()
y=new F.hu(z)
y.b=!1
x=[F.ag]
y.c=H.h([],x)
z.a=y
y=new F.fW(z)
y.b=H.h([],[F.dg])
z.b=y
y=new F.fV(z)
y.b=H.h([],[F.d9])
z.c=y
y=new F.fU(z)
y.b=H.h([],[F.a8])
z.d=y
z.e=null
w=H.h([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cm(null,null,new V.bo(x,0,0,1),null,null,new V.N(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.bj(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cm(null,null,new V.bo(o,n,m,1),null,null,new V.N(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.bj(d))}}z.d.cR(a+1,b+1,w)
return z},
jI:{"^":"o:28;",
$1:function(a){return new V.am(Math.cos(a),Math.sin(a),0)}},
jd:{"^":"o:29;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.cF(y.$1(z),x)
x=J.cF(y.$1(z+3.141592653589793/this.c),x).a1(0,w)
x=new V.L(x.a,x.b,x.c)
v=x.G(0,Math.sqrt(x.I(x)))
u=new V.L(1,0,0)
y=v.ac(!v.p(0,u)?new V.L(0,0,1):u)
t=y.G(0,Math.sqrt(y.I(y)))
y=t.ac(v)
u=y.G(0,Math.sqrt(y.I(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.n(0,y*x)
x=t.n(0,r*x)
x=new V.am(w.a+(y.a-x.a),w.b+(y.b-x.b),w.c+(y.c-x.c))
if(!J.K(a.f,x)){a.f=x
y=a.a
if(y!=null)y.S()}}},
a8:{"^":"a;0a,0b,0c,0d,0e",
ad:function(){if(!this.gbn()){C.a.H(this.a.a.d.b,this)
this.a.a.S()}this.cD()
this.cE()
this.cF()},
cJ:function(a){this.a=a
C.a.h(a.d.b,this)},
cK:function(a){this.b=a
C.a.h(a.d.c,this)},
cL:function(a){this.c=a
C.a.h(a.d.d,this)},
cD:function(){var z=this.a
if(z!=null){C.a.H(z.d.b,this)
this.a=null}},
cE:function(){var z=this.b
if(z!=null){C.a.H(z.d.c,this)
this.b=null}},
cF:function(){var z=this.c
if(z!=null){C.a.H(z.d.d,this)
this.c=null}},
gbn:function(){return this.a==null||this.b==null||this.c==null},
c2:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.L(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.d9())return
return v.G(0,Math.sqrt(v.I(v)))},
c3:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.a1(0,y)
z=new V.L(z.a,z.b,z.c)
v=z.G(0,Math.sqrt(z.I(z)))
z=w.a1(0,y)
z=new V.L(z.a,z.b,z.c)
z=v.ac(z.G(0,Math.sqrt(z.I(z))))
return z.G(0,Math.sqrt(z.I(z)))},
aF:function(){if(this.d!=null)return!0
var z=this.c2()
if(z==null){z=this.c3()
if(z==null)return!1}this.d=z
this.a.a.S()
return!0},
gcW:function(a){if(J.K(this.a,this.b))return!0
if(J.K(this.b,this.c))return!0
if(J.K(this.c,this.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
u:function(a){var z,y
if(this.gbn())return a+"disposed"
z=a+C.e.a_(J.a2(this.a.e),0)+", "+C.e.a_(J.a2(this.b.e),0)+", "+C.e.a_(J.a2(this.c.e),0)+" {"
y=this.d
z=(y!=null?z+(y.i(0)+", "):z+"-, ")+"-}"
return z},
B:function(){return this.u("")},
q:{
bI:function(a,b,c){var z,y,x
z=new F.a8()
y=a.a
if(y==null)H.Y(P.a4("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.Y(P.a4("May not create a face with vertices attached to different shapes."))
z.cJ(a)
z.cK(b)
z.cL(c)
C.a.h(z.a.a.d.b,z)
z.a.a.S()
return z}}},
eU:{"^":"a;"},
fX:{"^":"eU;",
ae:function(a,b,c){var z,y
z=b.a
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.t()
z=z.e
y=c.c
y.a.a.t()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.c
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.t()
z=z.e
y=c.c
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
d9:{"^":"a;"},
f8:{"^":"a;"},
hc:{"^":"f8;",
ae:function(a,b,c){var z,y
z=b.a
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dg:{"^":"a;"},
dn:{"^":"a;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.a3()
this.e=z}return z},
cb:function(a,b,c,d,e){var z,y,x
H.w(d,"$isb",[F.ag],"$asb")
H.w(e,"$isb",[P.I],"$asb")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.ae(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
dg:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ag],x=[P.I];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.h([],z)
t=H.h([],x)
if(this.cb(a,v,y,u,t))b.df(u)}this.a.t()
this.c.aK()
this.d.aK()
this.b.dz()
this.c.aL(new F.hc())
this.d.aL(new F.fX())
z=this.e
if(!(z==null))z.ai(0)},
cU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ah()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$bd().a)!==0)++w
if((x&$.$get$be().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$ax().a)!==0)++w
v=b.gaQ(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.h(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.h(y,[Z.cM])
for(r=0,q=0;q<w;++q){p=b.cS(q)
o=p.gaQ(p)
C.a.N(s,q,new Z.cM(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].dc(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.N(t,l,m[k]);++l}}r+=o}H.w(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cr(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cN(new Z.dM(34962,j),s,b)
i.b=H.h([],[Z.bK])
if(this.b.b.length!==0){x=P.I
h=H.h([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)}f=Z.cn(y,34963,H.w(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bK(0,h.length,f))}if(this.c.b.length!==0){x=P.I
h=H.h([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)}f=Z.cn(y,34963,H.w(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bK(1,h.length,f))}if(this.d.b.length!==0){x=P.I
h=H.h([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.t()
C.a.h(h,g.e)}f=Z.cn(y,34963,H.w(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bK(4,h.length,f))}return i},
i:function(a){var z=H.h([],[P.k])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.u("   "))}return C.a.M(z,"\n")},
T:function(a){var z=this.e
if(!(z==null))z.L(a)},
S:function(){return this.T(null)}},
fU:{"^":"a;a,0b",
cR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isb",[F.ag],"$asb")
z=H.h([],[F.a8])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.i(c,x)
r=c[x];++x
if(x>=s)return H.i(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.i(c,p)
o=c[p]
if(y<0||y>=s)return H.i(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bI(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bI(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bI(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bI(q,n,r))}u=!u}w=!w}return z},
gj:function(a){return this.b.length},
aL:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.ae(0,v,t)){v.ad()
break}}}}},
aK:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gcW(x)
if(y)x.ad()}},
aG:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].aF())x=!1
return x},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].u(a))
return C.a.M(z,"\n")},
B:function(){return this.u("")}},
fV:{"^":"a;a,0b",
gj:function(a){return this.b.length},
aL:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.ae(0,v,t)){v.ad()
break}}}}},
aK:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.K(x.a,x.b)
if(y)x.ad()}},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
z=H.h([],[P.k])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].u(a+(""+x+". ")))}return C.a.M(z,"\n")},
B:function(){return this.u("")}},
fW:{"^":"a;a,0b",
gj:function(a){return this.b.length},
dz:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ad()}},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].u(a))
return C.a.M(z,"\n")},
B:function(){return this.u("")}},
ag:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bj:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cm(this.cx,x,u,z,y,w,v,a,t)},
dc:function(a){var z,y
z=J.B(a)
if(z.p(a,$.$get$ah())){z=this.f
y=[P.q]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$az())){z=this.r
y=[P.q]
if(z==null)return H.h([0,1,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$ay())){z=H.h([0,0,1],[P.q])
return z}else if(z.p(a,$.$get$aA())){z=this.y
y=[P.q]
if(z==null)return H.h([0,0],y)
else return H.h([z.a,z.b],y)}else if(z.p(a,$.$get$aB())){z=H.h([0,0,0],[P.q])
return z}else if(z.p(a,$.$get$bd())){z=this.Q
y=[P.q]
if(z==null)return H.h([1,1,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$be())){z=this.Q
y=[P.q]
if(z==null)return H.h([1,1,1,1],y)
else return H.h([z.a,z.b,z.c,z.d],y)}else if(z.p(a,$.$get$aC()))return H.h([this.ch],[P.q])
else if(z.p(a,$.$get$ax())){z=H.h([-1,-1,-1,-1],[P.q])
return z}else return H.h([],[P.q])},
aF:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.L(0,0,0)
this.d.C(0,new F.hD(z))
z=z.a
this.r=z.G(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.ai(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
u:function(a){var z,y,x
z=H.h([],[P.k])
C.a.h(z,C.e.a_(J.a2(this.e),0))
y=this.f
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
y=this.r
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,"-")
y=this.y
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,V.y(this.ch,3,0))
C.a.h(z,"-")
x=C.a.M(z,", ")
return a+"{"+x+"}"},
B:function(){return this.u("")},
q:{
cm:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ag()
y=new F.hC(z)
y.b=H.h([],[F.dg])
z.b=y
y=new F.hy(z)
x=[F.d9]
y.b=H.h([],x)
y.c=H.h([],x)
z.c=y
y=new F.hv(z)
x=[F.a8]
y.b=H.h([],x)
y.c=H.h([],x)
y.d=H.h([],x)
z.d=y
h=$.$get$dJ()
z.e=0
y=$.$get$ah()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$az().a)!==0?e:null
z.x=(x&$.$get$ay().a)!==0?b:null
z.y=(x&$.$get$aA().a)!==0?f:null
z.z=(x&$.$get$aB().a)!==0?g:null
z.Q=(x&$.$get$dK().a)!==0?c:null
z.ch=(x&$.$get$aC().a)!==0?i:0
z.cx=(x&$.$get$ax().a)!==0?a:null
return z}}},
hD:{"^":"o:7;a",
$1:function(a){var z,y
H.l(a,"$isa8")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
hu:{"^":"a;a,0b,0c",
t:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.a4("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.S()
return!0},
gj:function(a){return this.c.length},
aG:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].aF()
return!0},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
this.t()
z=H.h([],[P.k])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].u(a))
return C.a.M(z,"\n")},
B:function(){return this.u("")}},
hv:{"^":"a;a,0b,0c,0d",
gj:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.i(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.i(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
C:function(a,b){H.c(b,{func:1,ret:-1,args:[F.a8]})
C.a.C(this.b,b)
C.a.C(this.c,new F.hw(this,b))
C.a.C(this.d,new F.hx(this,b))},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].u(a))
return C.a.M(z,"\n")},
B:function(){return this.u("")}},
hw:{"^":"o:7;a,b",
$1:function(a){H.l(a,"$isa8")
if(!J.K(a.a,this.a))this.b.$1(a)}},
hx:{"^":"o:7;a,b",
$1:function(a){var z
H.l(a,"$isa8")
z=this.a
if(!J.K(a.a,z)&&!J.K(a.b,z))this.b.$1(a)}},
hy:{"^":"a;a,0b,0c",
gj:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].u(a))
return C.a.M(z,"\n")},
B:function(){return this.u("")}},
hA:{"^":"a;"},
hz:{"^":"hA;",
ae:function(a,b,c){return J.K(b.f,c.f)}},
hB:{"^":"a;"},
fu:{"^":"hB;",
df:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isb",[F.ag],"$asb")
z=new V.L(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.L(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.G(0,Math.sqrt(z.I(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){t=a[x]
s=z.G(0,Math.sqrt(u))
if(!J.K(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.L(null)}}}return}},
hC:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].u(a))
return C.a.M(z,"\n")},
B:function(){return this.u("")}}}],["","",,O,{"^":"",eG:{"^":"cg;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.a3()
this.f=z}return z},
ak:function(a){var z=this.f
if(!(z==null))z.L(a)}},cg:{"^":"a;"}}],["","",,T,{"^":"",h3:{"^":"a;a,0b,0c,0d,0e"}}],["","",,X,{"^":"",cP:{"^":"a;",$isdc:1},eY:{"^":"ds;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.a3()
this.x=z}return z}},fy:{"^":"a;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.a3()
this.e=z}return z},
a9:[function(a){var z
H.l(a,"$isr")
z=this.e
if(!(z==null))z.L(a)},function(){return this.a9(null)},"dP","$1","$0","gb6",0,2,1],
sbr:function(a){var z,y,x
if(!J.K(this.a,a)){z=this.a
if(z!=null){z=z.gv()
z.toString
y=H.c(this.gb6(),{func:1,ret:-1,args:[D.r]})
C.a.H(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gv()
z.toString
y=H.c(this.gb6(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,y)}z=new D.J("mover",x,this.a,this,[U.a_])
z.b=!0
this.a9(z)}},
$isdc:1,
$iscP:1},ds:{"^":"a;"}}],["","",,B,{"^":"",
jz:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=document
y=z.body
x=y.style
x.backgroundColor="#FFFFFF"
x.margin="40px"
x.padding="0"
w=z.createElement("div")
x=w.style
x.position="fixed"
x.width="100%"
x.height="100%"
x.left="0px"
x.top="0px"
x.zIndex="-1"
v="url('"+d+"')"
x.backgroundImage=v
x.backgroundRepeat="no-repeat"
y.appendChild(w)
u=z.createElement("div")
x=u.style
x.position="relative"
x.textAlign="center"
y.appendChild(u)
t=z.createElement("div")
x=t.style
x.textAlign="center"
x.marginLeft="auto"
x.marginRight="auto"
x.marginTop="40px"
x.marginBottom="40px"
x.padding="40px"
x.background="rgba(255,255,255,0.8)"
C.i.cI(x,(x&&C.i).aX(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
u.appendChild(t)
if(a.length!==0)z.title=a
s=z.createElement("div")
t.appendChild(s)
s.appendChild(b)
r=z.createElement("div")
x=r.style
x.display="block"
x.clear="both"
s.appendChild(r)
x=W.W
W.O(z,"scroll",H.c(new B.jA(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
jB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isb",[P.k],"$asb")
z=document
y=z.createElement("div")
x=y.style
x.textAlign="center"
x.marginLeft="auto"
x.marginRight="auto"
w=z.createElement("table")
w.id="shellTable"
x=w.style
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
y.appendChild(w)
v=w.insertRow(-1)
u=W.cQ(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.l(v.insertCell(-1),"$isb8")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.l(q.insertCell(-1),"$isb8").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;!1;++p){o=z.createElement("div")
if(p>=0)return H.i(b,p)
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.l(q.insertCell(-1),"$isb8")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.l(q.insertCell(-1),"$isb8")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.l(q.insertCell(-1),"$isb8").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.jz(a,y,!1,"../resources/SnowTop.png")},
jC:function(a){P.h7(C.p,new B.jD(a))},
jA:{"^":"o:31;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.d(-0.05*C.d.R(this.b.scrollTop))+"px"
z.top=y}},
jD:{"^":"o:32;a",
$1:function(a){H.l(a,"$isav")
P.cD(C.d.bE(this.a.gd5(),2)+" fps")}}}],["","",,R,{"^":"",
eg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
B.jB("Test 004",H.h([],[P.k]),"Test of repeat use of a single mover and shape. There are 9 rings moving at the same speed, however the second one is attached to the first, the third to the second, and so on.")
z=new U.dl()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.sbG(0)
z.sbv(0,0)
z.sbz(0)
z.sbm(0.1)
z.sbk(0.21)
z.sbl(0.32)
z.sbm(0.51)
z.sbk(0.71)
z.sbl(0.92)
y=new U.d3()
y.aS(U.a_)
y.ar(y.gce(),y.gcw())
y.e=null
y.f=V.bM()
y.r=0
y.h(0,U.cU(V.af(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
y.h(0,z)
x=F.jH(30,2,15,0.2)
w=E.ae(null,!0,y,"",x,null)
v=E.ae(null,!0,y,"",x,null)
v.y.h(0,w)
u=E.ae(null,!0,y,"",x,null)
u.y.h(0,v)
t=E.ae(null,!0,y,"",x,null)
t.y.h(0,u)
s=E.ae(null,!0,y,"",x,null)
s.y.h(0,t)
r=E.ae(null,!0,y,"",x,null)
r.y.h(0,s)
q=E.ae(null,!0,y,"",x,null)
q.y.h(0,r)
p=E.ae(null,!0,y,"",x,null)
p.y.h(0,q)
o=E.ae(null,!0,y,"",x,null)
o.y.h(0,p)
n=new M.eR()
m=O.cS(E.ad)
n.d=m
m.ar(n.gcg(),n.gci())
n.e=null
n.f=null
n.r=null
n.x=null
l=new X.fy()
l.b=1.0471975511965976
l.c=0.1
l.d=2000
l.sbr(null)
m=l.b
if(!$.m.$2(m,1.0471975511965976)){k=l.b
l.b=1.0471975511965976
m=new D.J("fov",k,1.0471975511965976,l,[P.q])
m.b=!0
l.a9(m)}m=l.c
if(!$.m.$2(m,0.1)){k=l.c
l.c=0.1
m=new D.J("near",k,0.1,l,[P.q])
m.b=!0
l.a9(m)}m=l.d
if(!$.m.$2(m,2000)){k=l.d
l.d=2000
m=new D.J("far",k,2000,l,[P.q])
m.b=!0
l.a9(m)}m=n.a
if(m!==l){if(m!=null){m=m.gv()
m.toString
j=H.c(n.gU(),{func:1,ret:-1,args:[D.r]})
C.a.H(m.a,j)}k=n.a
n.a=l
m=l.gv()
m.toString
j=H.c(n.gU(),{func:1,ret:-1,args:[D.r]})
C.a.h(m.a,j)
m=new D.J("camera",k,n.a,n,[X.cP])
m.b=!0
n.a3(m)}i=new X.eY()
m=new V.bo(0,0,0,1)
i.a=m
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
m=V.dj(0,0,1,1)
i.r=m
m=n.b
if(m!==i){if(m!=null){m=m.gv()
m.toString
j=H.c(n.gU(),{func:1,ret:-1,args:[D.r]})
C.a.H(m.a,j)}k=n.b
n.b=i
m=i.gv()
m.toString
j=H.c(n.gU(),{func:1,ret:-1,args:[D.r]})
C.a.h(m.a,j)
m=new D.J("target",k,n.b,n,[X.ds])
m.b=!0
n.a3(m)}n.sbB(null)
m=new O.eG()
m.d=1
m.e=10
h=new V.bn(1,1,1)
m.b=h
j=[V.bn]
g=new D.J("objectColor",null,h,m,j)
g.b=!0
m.ak(g)
h=new V.bn(0,0,0)
if(!J.K(m.c,h)){k=m.c
m.c=h
j=new D.J("fogColor",k,h,m,j)
j.b=!0
m.ak(j)}j=m.d
if(!$.m.$2(j,3)){k=m.d
m.d=3
j=new D.J("fogStart",k,3,m,[P.q])
j.b=!0
m.ak(j)}j=m.e
if(!$.m.$2(j,6)){k=m.e
m.e=6
j=new D.J("fogStop",k,6,m,[P.q])
j.b=!0
m.ak(j)}n.sbB(m)
n.d.h(0,o)
n.a.sbr(U.cU(V.af(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
f=document.getElementById("threeDart")
if(f==null)H.Y(P.a4("Failed to find an element with the identifier, threeDart."))
e=E.h5(f,!0,!0,!0,!1)
m=e.d
if(m!==n){if(m!=null){m=m.gv()
m.toString
j=H.c(e.gaT(),{func:1,ret:-1,args:[D.r]})
C.a.H(m.a,j)}e.d=n
m=n.gv()
m.toString
j=H.c(e.gaT(),{func:1,ret:-1,args:[D.r]})
C.a.h(m.a,j)
e.bX()}B.jC(e)}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d7.prototype
return J.f4.prototype}if(typeof a=="string")return J.bL.prototype
if(a==null)return J.f5.prototype
if(typeof a=="boolean")return J.f3.prototype
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.a)return a
return J.bV(a)}
J.bA=function(a){if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.a)return a
return J.bV(a)}
J.cz=function(a){if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.a)return a
return J.bV(a)}
J.jg=function(a){if(typeof a=="number")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bO.prototype
return a}
J.jh=function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bO.prototype
return a}
J.bB=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.a)return a
return J.bV(a)}
J.K=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).p(a,b)}
J.el=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jg(a).a0(a,b)}
J.cF=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jh(a).n(a,b)}
J.em=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jq(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bA(a).k(a,b)}
J.en=function(a,b,c,d){return J.bB(a).be(a,b,c,d)}
J.bY=function(a,b,c){return J.bA(a).cX(a,b,c)}
J.cG=function(a,b){return J.cz(a).w(a,b)}
J.eo=function(a,b){return J.cz(a).C(a,b)}
J.ak=function(a){return J.B(a).gF(a)}
J.bD=function(a){return J.cz(a).gJ(a)}
J.aM=function(a){return J.bA(a).gj(a)}
J.a2=function(a){return J.B(a).i(a)}
var $=I.p
C.f=W.c0.prototype
C.i=W.eB.prototype
C.q=J.j.prototype
C.a=J.br.prototype
C.b=J.d7.prototype
C.d=J.bs.prototype
C.e=J.bL.prototype
C.y=J.bt.prototype
C.z=W.ft.prototype
C.l=J.fz.prototype
C.h=J.bO.prototype
C.m=W.bf.prototype
C.n=W.hH.prototype
C.o=new P.fw()
C.c=new P.iu()
C.p=new P.aR(5e6)
C.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.t=function(hooks) {
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
C.j=function(hooks) { return hooks; }

C.u=function(getTagFallback) {
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
C.v=function() {
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
C.w=function(hooks) {
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
C.x=function(hooks) {
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
C.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
$.a7=0
$.aN=null
$.cK=null
$.cs=!1
$.ed=null
$.e7=null
$.ej=null
$.bT=null
$.bW=null
$.cA=null
$.aE=null
$.bi=null
$.bj=null
$.ct=!1
$.E=C.c
$.d_=null
$.cZ=null
$.cY=null
$.cX=null
$.m=V.fn()
$.eJ="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.eI="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.df=null
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
I.$lazy(y,x,w)}})(["cW","$get$cW",function(){return H.ec("_$dart_dartClosure")},"c5","$get$c5",function(){return H.ec("_$dart_js")},"dw","$get$dw",function(){return H.aa(H.bN({
toString:function(){return"$receiver$"}}))},"dx","$get$dx",function(){return H.aa(H.bN({$method$:null,
toString:function(){return"$receiver$"}}))},"dy","$get$dy",function(){return H.aa(H.bN(null))},"dz","$get$dz",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dD","$get$dD",function(){return H.aa(H.bN(void 0))},"dE","$get$dE",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dB","$get$dB",function(){return H.aa(H.dC(null))},"dA","$get$dA",function(){return H.aa(function(){try{null.$method$}catch(z){return z.message}}())},"dG","$get$dG",function(){return H.aa(H.dC(void 0))},"dF","$get$dF",function(){return H.aa(function(){try{(void 0).$method$}catch(z){return z.message}}())},"co","$get$co",function(){return P.hI()},"bk","$get$bk",function(){return[]},"cV","$get$cV",function(){return{}},"dL","$get$dL",function(){return Z.a0(0)},"dJ","$get$dJ",function(){return Z.a0(511)},"ah","$get$ah",function(){return Z.a0(1)},"az","$get$az",function(){return Z.a0(2)},"ay","$get$ay",function(){return Z.a0(4)},"aA","$get$aA",function(){return Z.a0(8)},"aB","$get$aB",function(){return Z.a0(16)},"bd","$get$bd",function(){return Z.a0(32)},"be","$get$be",function(){return Z.a0(64)},"dK","$get$dK",function(){return Z.a0(96)},"aC","$get$aC",function(){return Z.a0(128)},"ax","$get$ax",function(){return Z.a0(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.x},{func:1,ret:-1,opt:[D.r]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a9]},{func:1,ret:-1,args:[W.W]},{func:1,ret:-1,args:[P.I,[P.f,E.ad]]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:P.x,args:[F.a8]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.x,args:[D.r]},{func:1,ret:P.x,args:[,]},{func:1,ret:-1,args:[P.I,[P.f,U.a_]]},{func:1,ret:P.q},{func:1,ret:P.x,args:[,,]},{func:1,ret:P.k,args:[P.I]},{func:1,args:[,]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:P.ao,args:[W.z]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.x,args:[P.G]},{func:1,ret:P.x,args:[{func:1,ret:-1,args:[D.r]}]},{func:1,ret:P.ao,args:[P.q,P.q]},{func:1,ret:[P.ai,,],args:[,]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:P.x,args:[,],opt:[,]},{func:1,ret:-1,args:[P.a],opt:[P.a5]},{func:1,ret:P.x,args:[{func:1,ret:-1}]},{func:1,ret:V.am,args:[P.q]},{func:1,ret:P.x,args:[F.ag,P.q,P.q]},{func:1,args:[P.k]},{func:1,ret:P.x,args:[W.W]},{func:1,ret:P.x,args:[P.av]},{func:1,args:[,P.k]},{func:1,ret:W.Q,args:[W.z]}]
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
if(x==y)H.jG(d||a)
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
Isolate.cx=a.cx
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
if(typeof dartMainRunner==="function")dartMainRunner(R.eg,[])
else R.eg([])})})()
//# sourceMappingURL=test.dart.js.map
