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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cs"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cs"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cs(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ct=function(){}
var dart=[["","",,H,{"^":"",kx:{"^":"a;a"}}],["","",,J,{"^":"",
B:function(a){return void 0},
cz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bR:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cx==null){H.jk()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.dB("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c1()]
if(v!=null)return v
v=H.jp(a)
if(v!=null)return v
if(typeof a=="function")return C.y
y=Object.getPrototypeOf(a)
if(y==null)return C.l
if(y===Object.prototype)return C.l
if(typeof w=="function"){Object.defineProperty(w,$.$get$c1(),{value:C.h,enumerable:false,writable:true,configurable:true})
return C.h}return C.h},
j:{"^":"a;",
p:function(a,b){return a===b},
gF:function(a){return H.aZ(a)},
i:["bL",function(a){return"Instance of '"+H.ar(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
f0:{"^":"j;",
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$isam:1},
f2:{"^":"j;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0},
$isw:1},
c2:{"^":"j;",
gF:function(a){return 0},
i:["bM",function(a){return String(a)}]},
fw:{"^":"c2;"},
bK:{"^":"c2;"},
bp:{"^":"c2;",
i:function(a){var z=a[$.$get$cS()]
if(z==null)return this.bM(a)
return"JavaScript function for "+H.c(J.a1(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbZ:1},
bn:{"^":"j;$ti",
h:function(a,b){H.v(b,H.t(a,0))
if(!!a.fixed$length)H.Y(P.a4("add"))
a.push(b)},
J:function(a,b){var z
if(!!a.fixed$length)H.Y(P.a4("remove"))
for(z=0;z<a.length;++z)if(J.L(a[z],b)){a.splice(z,1)
return!0}return!1},
C:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aK(a))}},
M:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.N(z,y,H.c(a[y]))
return z.join(b)},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
gaG:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.eZ())},
i:function(a){return P.c_(a,"[","]")},
gI:function(a){return new J.af(a,a.length,0,[H.t(a,0)])},
gF:function(a){return H.aZ(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.Y(P.a4("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.bA(b,"newLength",null))
if(b<0)throw H.e(P.b_(b,0,null,"newLength",null))
a.length=b},
N:function(a,b,c){H.P(b)
H.v(c,H.t(a,0))
if(!!a.immutable$list)H.Y(P.a4("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.bu(a,b))
if(b>=a.length||b<0)throw H.e(H.bu(a,b))
a[b]=c},
$ish:1,
$isb:1,
q:{
f_:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.bA(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.b_(a,0,4294967295,"length",null))
return J.d_(new Array(a),b)},
d_:function(a,b){return J.aT(H.f(a,[b]))},
aT:function(a){H.bi(a)
a.fixed$length=Array
return a}}},
kw:{"^":"bn;$ti"},
af:{"^":"a;a,b,c,0d,$ti",
gD:function(a){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bo:{"^":"j;",
gd1:function(a){return a===0?1/a<0:a<0},
bk:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.a4(""+a+".floor()"))},
P:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.a4(""+a+".round()"))},
bz:function(a,b){var z
if(b>20)throw H.e(P.b_(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gd1(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.e(H.bO(b))
return a*b},
bG:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
bN:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bb(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.bb(a,b)},
bb:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.a4("Result of truncating division is "+H.c(z)+": "+H.c(a)+" ~/ "+b))},
b9:function(a,b){var z
if(a>0)z=this.cH(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cH:function(a,b){return b>31?0:a>>>b},
a8:function(a,b){if(typeof b!=="number")throw H.e(H.bO(b))
return a<b},
$isq:1,
$isG:1},
d0:{"^":"bo;",$isK:1},
f1:{"^":"bo;"},
bH:{"^":"j;",
bZ:function(a,b){if(b>=a.length)throw H.e(H.bu(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.H(b)
if(typeof b!=="string")throw H.e(P.bA(b,null,null))
return a+b},
aS:function(a,b,c){H.P(c)
if(c==null)c=a.length
if(b>c)throw H.e(P.c8(b,null,null))
if(c>a.length)throw H.e(P.c8(c,null,null))
return a.substring(b,c)},
bJ:function(a,b){return this.aS(a,b,null)},
n:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.o)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
df:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.n(c,z)+a},
Z:function(a,b){return this.df(a,b," ")},
cQ:function(a,b,c){if(c>a.length)throw H.e(P.b_(c,0,a.length,null,null))
return H.jB(a,b,c)},
i:function(a){return a},
gF:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$isfu:1,
$isk:1}}],["","",,H,{"^":"",
eZ:function(){return new P.fV("No element")},
eK:{"^":"h;"},
fc:{"^":"a;a,b,c,0d,$ti",
gD:function(a){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.bw(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.e(P.aK(z))
w=this.c
if(typeof x!=="number")return H.A(x)
if(w>=x){this.d=null
return!1}this.d=y.v(z,w);++this.c
return!0}},
fi:{"^":"h;a,b,$ti",
gI:function(a){return new H.fj(J.bz(this.a),this.b,this.$ti)},
gj:function(a){return J.aI(this.a)},
v:function(a,b){return this.b.$1(J.cD(this.a,b))},
$ash:function(a,b){return[b]}},
fj:{"^":"c0;0a,b,c,$ti",
A:function(){var z=this.b
if(z.A()){this.a=this.c.$1(z.gD(z))
return!0}this.a=null
return!1},
gD:function(a){return this.a},
$asc0:function(a,b){return[b]}},
hC:{"^":"h;a,b,$ti",
gI:function(a){return new H.hD(J.bz(this.a),this.b,this.$ti)}},
hD:{"^":"c0;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gD(z)))return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bF:{"^":"a;$ti"}}],["","",,H,{"^":"",
jf:function(a){return init.types[H.P(a)]},
jn:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isu},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a1(a)
if(typeof z!=="string")throw H.e(H.bO(a))
return z},
aZ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
ar:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.q||!!J.B(a).$isbK){v=C.k(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.e.bZ(w,0)===36)w=C.e.bJ(w,1)
r=H.cy(H.bi(H.an(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
U:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fE:function(a){return a.b?H.U(a).getUTCFullYear()+0:H.U(a).getFullYear()+0},
fC:function(a){return a.b?H.U(a).getUTCMonth()+1:H.U(a).getMonth()+1},
fy:function(a){return a.b?H.U(a).getUTCDate()+0:H.U(a).getDate()+0},
fz:function(a){return a.b?H.U(a).getUTCHours()+0:H.U(a).getHours()+0},
fB:function(a){return a.b?H.U(a).getUTCMinutes()+0:H.U(a).getMinutes()+0},
fD:function(a){return a.b?H.U(a).getUTCSeconds()+0:H.U(a).getSeconds()+0},
fA:function(a){return a.b?H.U(a).getUTCMilliseconds()+0:H.U(a).getMilliseconds()+0},
A:function(a){throw H.e(H.bO(a))},
i:function(a,b){if(a==null)J.aI(a)
throw H.e(H.bu(a,b))},
bu:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aq(!0,b,"index",null)
z=H.P(J.aI(a))
if(!(b<0)){if(typeof z!=="number")return H.A(z)
y=b>=z}else y=!0
if(y)return P.C(b,a,"index",null,z)
return P.c8(b,"index",null)},
bO:function(a){return new P.aq(!0,a,null,null)},
e:function(a){var z
if(a==null)a=new P.d8()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ee})
z.name=""}else z.toString=H.ee
return z},
ee:function(){return J.a1(this.dartException)},
Y:function(a){throw H.e(a)},
E:function(a){throw H.e(P.aK(a))},
ap:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jG(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.b9(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c4(H.c(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.d7(H.c(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dq()
u=$.$get$dr()
t=$.$get$ds()
s=$.$get$dt()
r=$.$get$dx()
q=$.$get$dy()
p=$.$get$dv()
$.$get$du()
o=$.$get$dA()
n=$.$get$dz()
m=v.O(y)
if(m!=null)return z.$1(H.c4(H.H(y),m))
else{m=u.O(y)
if(m!=null){m.method="call"
return z.$1(H.c4(H.H(y),m))}else{m=t.O(y)
if(m==null){m=s.O(y)
if(m==null){m=r.O(y)
if(m==null){m=q.O(y)
if(m==null){m=p.O(y)
if(m==null){m=s.O(y)
if(m==null){m=o.O(y)
if(m==null){m=n.O(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.d7(H.H(y),m))}}return z.$1(new H.ho(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.di()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aq(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.di()
return a},
aF:function(a){var z
if(a==null)return new H.dT(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dT(a)},
jc:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.N(0,a[y],a[x])}return b},
jm:function(a,b,c,d,e,f){H.l(a,"$isbZ")
switch(H.P(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.a2("Unsupported number of arguments for wrapped closure"))},
aE:function(a,b){var z
H.P(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jm)
a.$identity=z
return z},
et:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.B(d).$isb){z.$reflectionInfo=d
x=H.fG(z).r}else x=d
w=e?Object.create(new H.fW().constructor.prototype):Object.create(new H.bV(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.a5
if(typeof u!=="number")return u.E()
$.a5=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.cO(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.jf,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cI:H.bW
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.e("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cO(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
eq:function(a,b,c,d){var z=H.bW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cO:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.es(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eq(y,!w,z,b)
if(y===0){w=$.a5
if(typeof w!=="number")return w.E()
$.a5=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aJ
if(v==null){v=H.bB("self")
$.aJ=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a5
if(typeof w!=="number")return w.E()
$.a5=w+1
t+=w
w="return function("+t+"){return this."
v=$.aJ
if(v==null){v=H.bB("self")
$.aJ=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
er:function(a,b,c,d){var z,y
z=H.bW
y=H.cI
switch(b?-1:a){case 0:throw H.e(H.fO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
es:function(a,b){var z,y,x,w,v,u,t,s
z=$.aJ
if(z==null){z=H.bB("self")
$.aJ=z}y=$.cH
if(y==null){y=H.bB("receiver")
$.cH=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.er(w,!u,x,b)
if(w===1){z="return function(){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+");"
y=$.a5
if(typeof y!=="number")return y.E()
$.a5=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+", "+s+");"
y=$.a5
if(typeof y!=="number")return y.E()
$.a5=y+1
return new Function(z+y+"}")()},
cs:function(a,b,c,d,e,f,g){var z,y
z=J.aT(H.bi(b))
H.P(c)
y=!!J.B(d).$isb?J.aT(d):d
return H.et(a,z,c,y,!!e,f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.a9(a,"String"))},
js:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.a9(a,"num"))},
e4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.a9(a,"bool"))},
P:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.a9(a,"int"))},
ec:function(a,b){throw H.e(H.a9(a,H.H(b).substring(3)))},
ju:function(a,b){var z=J.bw(b)
throw H.e(H.eo(a,z.aS(b,3,z.gj(b))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.ec(a,b)},
aG:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.ju(a,b)},
bi:function(a){if(a==null)return a
if(!!J.B(a).$isb)return a
throw H.e(H.a9(a,"List"))},
jo:function(a,b){if(a==null)return a
if(!!J.B(a).$isb)return a
if(J.B(a)[b])return a
H.ec(a,b)},
e5:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.P(z)]
else return a.$S()}return},
bv:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.e5(J.B(a))
if(z==null)return!1
y=H.e8(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.co)return a
$.co=!0
try{if(H.bv(a,b))return a
z=H.by(b)
y=H.a9(a,z)
throw H.e(y)}finally{$.co=!1}},
cu:function(a,b){if(a!=null&&!H.cr(a,b))H.Y(H.a9(a,H.by(b)))
return a},
e_:function(a){var z
if(a instanceof H.o){z=H.e5(J.B(a))
if(z!=null)return H.by(z)
return"Closure"}return H.ar(a)},
jD:function(a){throw H.e(new P.ey(H.H(a)))},
e6:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
an:function(a){if(a==null)return
return a.$ti},
lu:function(a,b,c){return H.aH(a["$as"+H.c(c)],H.an(b))},
bh:function(a,b,c,d){var z
H.H(c)
H.P(d)
z=H.aH(a["$as"+H.c(c)],H.an(b))
return z==null?null:z[d]},
cw:function(a,b,c){var z
H.H(b)
H.P(c)
z=H.aH(a["$as"+H.c(b)],H.an(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.P(b)
z=H.an(a)
return z==null?null:z[b]},
by:function(a){var z=H.ao(a,null)
return z},
ao:function(a,b){var z,y
H.x(b,"$isb",[P.k],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cy(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.P(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.c(b[y])}if('func' in a)return H.iY(a,b)
if('futureOr' in a)return"FutureOr<"+H.ao("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
iY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.k]
H.x(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.e.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.ao(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ao(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ao(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ao(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jb(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.ao(i[h],b)+(" "+H.c(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cy:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isb",[P.k],"$asb")
if(a==null)return""
z=new P.cb("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ao(u,c)}v="<"+z.i(0)+">"
return v},
aH:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aD:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.an(a)
y=J.B(a)
if(y[b]==null)return!1
return H.e2(H.aH(y[d],z),null,c,null)},
x:function(a,b,c,d){var z,y
H.H(b)
H.bi(c)
H.H(d)
if(a==null)return a
z=H.aD(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cy(c,0,null)
throw H.e(H.a9(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
e2:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a0(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a0(a[y],b,c[y],d))return!1
return!0},
ls:function(a,b,c){return a.apply(b,H.aH(J.B(b)["$as"+H.c(c)],H.an(b)))},
e9:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="w"||a===-1||a===-2||H.e9(z)}return!1},
cr:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="w"||b===-1||b===-2||H.e9(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cr(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bv(a,b)}y=J.B(a).constructor
x=H.an(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.a0(y,null,b,null)
return z},
v:function(a,b){if(a!=null&&!H.cr(a,b))throw H.e(H.a9(a,H.by(b)))
return a},
a0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a0(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="w")return!0
if('func' in c)return H.e8(a,b,c,d)
if('func' in a)return c.builtin$cls==="bZ"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a0("type" in a?a.type:null,b,x,d)
else if(H.a0(a,b,x,d))return!0
else{if(!('$is'+"aP" in y.prototype))return!1
w=y.prototype["$as"+"aP"]
v=H.aH(w,z?a.slice(1):null)
return H.a0(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.by(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e2(H.aH(r,z),b,u,d)},
e8:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a0(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a0(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a0(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a0(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.jr(m,b,l,d)},
jr:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a0(c[w],d,a[w],b))return!1}return!0},
lt:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
jp:function(a){var z,y,x,w,v,u
z=H.H($.e7.$1(a))
y=$.bP[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bS[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.e1.$2(a,z))
if(z!=null){y=$.bP[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bS[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bT(x)
$.bP[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bS[z]=x
return x}if(v==="-"){u=H.bT(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eb(a,x)
if(v==="*")throw H.e(P.dB(z))
if(init.leafTags[z]===true){u=H.bT(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eb(a,x)},
eb:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cz(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bT:function(a){return J.cz(a,!1,null,!!a.$isu)},
jq:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bT(z)
else return J.cz(z,c,null,null)},
jk:function(){if(!0===$.cx)return
$.cx=!0
H.jl()},
jl:function(){var z,y,x,w,v,u,t,s
$.bP=Object.create(null)
$.bS=Object.create(null)
H.jg()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ed.$1(v)
if(u!=null){t=H.jq(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jg:function(){var z,y,x,w,v,u,t
z=C.v()
z=H.aC(C.r,H.aC(C.x,H.aC(C.j,H.aC(C.j,H.aC(C.w,H.aC(C.t,H.aC(C.u(C.k),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.e7=new H.jh(v)
$.e1=new H.ji(u)
$.ed=new H.jj(t)},
aC:function(a,b){return a(b)||b},
jB:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fF:{"^":"a;a,b,c,d,e,f,r,0x",q:{
fG:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aT(z)
y=z[0]
x=z[1]
return new H.fF(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
h7:{"^":"a;a,b,c,d,e,f",
O:function(a){var z,y,x
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
a8:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.h7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bJ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dw:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fs:{"^":"M;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.c(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
d7:function(a,b){return new H.fs(a,b==null?null:b.method)}}},
f3:{"^":"M;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.c(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.c(this.a)+")"},
q:{
c4:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.f3(a,y,z?null:b.receiver)}}},
ho:{"^":"M;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jG:{"^":"o:16;a",
$1:function(a){if(!!J.B(a).$isM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dT:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa3:1},
o:{"^":"a;",
i:function(a){return"Closure '"+H.ar(this).trim()+"'"},
gbD:function(){return this},
$isbZ:1,
gbD:function(){return this}},
dm:{"^":"o;"},
fW:{"^":"dm;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bV:{"^":"dm;a,b,c,d",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bV))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gF:function(a){var z,y
z=this.c
if(z==null)y=H.aZ(this.a)
else y=typeof z!=="object"?J.ae(z):H.aZ(z)
return(y^H.aZ(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.ar(z)+"'")},
q:{
bW:function(a){return a.a},
cI:function(a){return a.c},
bB:function(a){var z,y,x,w,v
z=new H.bV("self","target","receiver","name")
y=J.aT(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
h8:{"^":"M;a",
i:function(a){return this.a},
q:{
a9:function(a,b){return new H.h8("TypeError: "+H.c(P.bD(a))+": type '"+H.e_(a)+"' is not a subtype of type '"+b+"'")}}},
en:{"^":"M;a",
i:function(a){return this.a},
q:{
eo:function(a,b){return new H.en("CastError: "+H.c(P.bD(a))+": type '"+H.e_(a)+"' is not a subtype of type '"+b+"'")}}},
fN:{"^":"M;a",
i:function(a){return"RuntimeError: "+H.c(this.a)},
q:{
fO:function(a){return new H.fN(a)}}},
c3:{"^":"fg;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gY:function(a){return new H.f7(this,[H.t(this,0)])},
cR:function(a,b){var z=this.b
if(z==null)return!1
return this.c0(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.al(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.al(w,b)
x=y==null?null:y.b
return x}else return this.d0(b)},
d0:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.b5(z,J.ae(a)&0x3ffffff)
x=this.bm(y,a)
if(x<0)return
return y[x].b},
N:function(a,b,c){var z,y,x,w,v,u
H.v(b,H.t(this,0))
H.v(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aw()
this.b=z}this.aV(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aw()
this.c=y}this.aV(y,b,c)}else{x=this.d
if(x==null){x=this.aw()
this.d=x}w=J.ae(b)&0x3ffffff
v=this.b5(x,w)
if(v==null)this.aA(x,w,[this.ax(b,c)])
else{u=this.bm(v,b)
if(u>=0)v[u].b=c
else v.push(this.ax(b,c))}}},
C:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aK(this))
z=z.c}},
aV:function(a,b,c){var z
H.v(b,H.t(this,0))
H.v(c,H.t(this,1))
z=this.al(a,b)
if(z==null)this.aA(a,b,this.ax(b,c))
else z.b=c},
c7:function(){this.r=this.r+1&67108863},
ax:function(a,b){var z,y
z=new H.f6(H.v(a,H.t(this,0)),H.v(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.c7()
return z},
bm:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].a,b))return y
return-1},
i:function(a){return P.d4(this)},
al:function(a,b){return a[b]},
b5:function(a,b){return a[b]},
aA:function(a,b,c){a[b]=c},
c3:function(a,b){delete a[b]},
c0:function(a,b){return this.al(a,b)!=null},
aw:function(){var z=Object.create(null)
this.aA(z,"<non-identifier-key>",z)
this.c3(z,"<non-identifier-key>")
return z},
$isd3:1},
f6:{"^":"a;a,b,0c,0d"},
f7:{"^":"eK;a,$ti",
gj:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.f8(z,z.r,this.$ti)
y.c=z.e
return y}},
f8:{"^":"a;a,b,0c,0d,$ti",
gD:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aK(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jh:{"^":"o:16;a",
$1:function(a){return this.a(a)}},
ji:{"^":"o:21;a",
$2:function(a,b){return this.a(a,b)}},
jj:{"^":"o:22;a",
$1:function(a){return this.a(H.H(a))}}}],["","",,H,{"^":"",
jb:function(a){return J.d_(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
jt:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cn:function(a){return a},
al:function(a,b,c){H.bi(b)
if(a>>>0!==a||a>=c)throw H.e(H.bu(b,a))},
fp:{"^":"j;","%":"DataView;ArrayBufferView;c7|dN|dO|fo|dP|dQ|aj"},
c7:{"^":"fp;",
gj:function(a){return a.length},
$isu:1,
$asu:I.ct},
fo:{"^":"dO;",
k:function(a,b){H.al(b,a,a.length)
return a[b]},
$asbF:function(){return[P.q]},
$asn:function(){return[P.q]},
$ish:1,
$ash:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
aj:{"^":"dQ;",
$asbF:function(){return[P.K]},
$asn:function(){return[P.K]},
$ish:1,
$ash:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}},
kH:{"^":"aj;",
k:function(a,b){H.al(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kI:{"^":"aj;",
k:function(a,b){H.al(b,a,a.length)
return a[b]},
"%":"Int32Array"},
kJ:{"^":"aj;",
k:function(a,b){H.al(b,a,a.length)
return a[b]},
"%":"Int8Array"},
kK:{"^":"aj;",
k:function(a,b){H.al(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
kL:{"^":"aj;",
k:function(a,b){H.al(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kM:{"^":"aj;",
gj:function(a){return a.length},
k:function(a,b){H.al(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
kN:{"^":"aj;",
gj:function(a){return a.length},
k:function(a,b){H.al(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dN:{"^":"c7+n;"},
dO:{"^":"dN+bF;"},
dP:{"^":"c7+n;"},
dQ:{"^":"dP+bF;"}}],["","",,P,{"^":"",
hF:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.j4()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aE(new P.hH(z),1)).observe(y,{childList:true})
return new P.hG(z,y,x)}else if(self.setImmediate!=null)return P.j5()
return P.j6()},
lh:[function(a){self.scheduleImmediate(H.aE(new P.hI(H.d(a,{func:1,ret:-1})),0))},"$1","j4",4,0,7],
li:[function(a){self.setImmediate(H.aE(new P.hJ(H.d(a,{func:1,ret:-1})),0))},"$1","j5",4,0,7],
lj:[function(a){H.d(a,{func:1,ret:-1})
P.iF(0,a)},"$1","j6",4,0,7],
dp:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.as]})
z=C.b.ab(a.a,1000)
return P.iG(z<0?0:z,b)},
j0:function(a,b){if(H.bv(a,{func:1,args:[P.a,P.a3]}))return b.dn(a,null,P.a,P.a3)
if(H.bv(a,{func:1,args:[P.a]}))return H.d(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.bA(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
j_:function(){var z,y
for(;z=$.aB,z!=null;){$.bf=null
y=z.b
$.aB=y
if(y==null)$.be=null
z.a.$0()}},
lr:[function(){$.cp=!0
try{P.j_()}finally{$.bf=null
$.cp=!1
if($.aB!=null)$.$get$ck().$1(P.e3())}},"$0","e3",0,0,1],
dZ:function(a){var z=new P.dH(H.d(a,{func:1,ret:-1}))
if($.aB==null){$.be=z
$.aB=z
if(!$.cp)$.$get$ck().$1(P.e3())}else{$.be.b=z
$.be=z}},
j3:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.aB
if(z==null){P.dZ(a)
$.bf=$.be
return}y=new P.dH(a)
x=$.bf
if(x==null){y.b=z
$.bf=y
$.aB=y}else{y.b=x.b
x.b=y
$.bf=y
if(y.b==null)$.be=y}},
jv:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.D
if(C.c===y){P.bN(null,null,C.c,a)
return}y.toString
P.bN(null,null,y,H.d(y.be(a),z))},
h4:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.as]}
H.d(b,z)
y=$.D
if(y===C.c){y.toString
return P.dp(a,b)}x=y.bf(b,P.as)
$.D.toString
return P.dp(a,H.d(x,z))},
bM:function(a,b,c,d,e){var z={}
z.a=d
P.j3(new P.j1(z,e))},
dX:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
dY:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
j2:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
bN:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.c!==c
if(z)d=!(!z||!1)?c.be(d):c.cM(d,-1)
P.dZ(d)},
hH:{"^":"o:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hG:{"^":"o:18;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hI:{"^":"o:0;a",
$0:function(){this.a.$0()}},
hJ:{"^":"o:0;a",
$0:function(){this.a.$0()}},
dW:{"^":"a;a,0b,c",
bT:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aE(new P.iI(this,b),0),a)
else throw H.e(P.a4("`setTimeout()` not found."))},
bU:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aE(new P.iH(this,a,Date.now(),b),0),a)
else throw H.e(P.a4("Periodic timer."))},
$isas:1,
q:{
iF:function(a,b){var z=new P.dW(!0,0)
z.bT(a,b)
return z},
iG:function(a,b){var z=new P.dW(!1,0)
z.bU(a,b)
return z}}},
iI:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iH:{"^":"o:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.b.bN(w,x)}z.c=y
this.d.$1(z)}},
aA:{"^":"a;0a,b,c,d,e,$ti",
d6:function(a){if(this.c!==6)return!0
return this.b.b.aM(H.d(this.d,{func:1,ret:P.am,args:[P.a]}),a.a,P.am,P.a)},
d_:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.bv(z,{func:1,args:[P.a,P.a3]}))return H.cu(w.du(z,a.a,a.b,null,y,P.a3),x)
else return H.cu(w.aM(H.d(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
ac:{"^":"a;ba:a<,b,0cA:c<,$ti",
bx:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.c){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.j0(b,y)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ac(0,$.D,[c])
w=b==null?1:3
this.aW(new P.aA(x,w,a,b,[z,c]))
return x},
dz:function(a,b){return this.bx(a,null,b)},
aW:function(a){var z,y
z=this.a
if(z<=1){a.a=H.l(this.c,"$isaA")
this.c=a}else{if(z===2){y=H.l(this.c,"$isac")
z=y.a
if(z<4){y.aW(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bN(null,null,z,H.d(new P.hX(this,a),{func:1,ret:-1}))}},
b6:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.l(this.c,"$isaA")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.l(this.c,"$isac")
y=u.a
if(y<4){u.b6(a)
return}this.a=y
this.c=u.c}z.a=this.am(a)
y=this.b
y.toString
P.bN(null,null,y,H.d(new P.i1(z,this),{func:1,ret:-1}))}},
az:function(){var z=H.l(this.c,"$isaA")
this.c=null
return this.am(z)},
am:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
b_:function(a){var z,y,x,w
z=H.t(this,0)
H.cu(a,{futureOr:1,type:z})
y=this.$ti
x=H.aD(a,"$isaP",y,"$asaP")
if(x){z=H.aD(a,"$isac",y,null)
if(z)P.dJ(a,this)
else P.hY(a,this)}else{w=this.az()
H.v(a,z)
this.a=4
this.c=a
P.bc(this,w)}},
as:[function(a,b){var z
H.l(b,"$isa3")
z=this.az()
this.a=8
this.c=new P.Z(a,b)
P.bc(this,z)},function(a){return this.as(a,null)},"dF","$2","$1","gc_",4,2,23],
$isaP:1,
q:{
hY:function(a,b){var z,y,x
b.a=1
try{a.bx(new P.hZ(b),new P.i_(b),null)}catch(x){z=H.ap(x)
y=H.aF(x)
P.jv(new P.i0(b,z,y))}},
dJ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.l(a.c,"$isac")
if(z>=4){y=b.az()
b.a=a.a
b.c=a.c
P.bc(b,y)}else{y=H.l(b.c,"$isaA")
b.a=2
b.c=a
a.b6(y)}},
bc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.l(y.c,"$isZ")
y=y.b
u=v.a
t=v.b
y.toString
P.bM(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bc(z.a,b)}y=z.a
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
P.bM(null,null,y,u,t)
return}o=$.D
if(o==null?q!=null:o!==q)$.D=q
else o=null
y=b.c
if(y===8)new P.i4(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.i3(x,b,r).$0()}else if((y&2)!==0)new P.i2(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.B(y).$isaP){if(y.a>=4){n=H.l(t.c,"$isaA")
t.c=null
b=t.am(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dJ(y,t)
return}}m=b.b
n=H.l(m.c,"$isaA")
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
hX:{"^":"o:0;a,b",
$0:function(){P.bc(this.a,this.b)}},
i1:{"^":"o:0;a,b",
$0:function(){P.bc(this.b,this.a.a)}},
hZ:{"^":"o:12;a",
$1:function(a){var z=this.a
z.a=0
z.b_(a)}},
i_:{"^":"o:26;a",
$2:function(a,b){this.a.as(a,H.l(b,"$isa3"))},
$1:function(a){return this.$2(a,null)}},
i0:{"^":"o:0;a,b,c",
$0:function(){this.a.as(this.b,this.c)}},
i4:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bv(H.d(w.d,{func:1}),null)}catch(v){y=H.ap(v)
x=H.aF(v)
if(this.d){w=H.l(this.a.a.c,"$isZ").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.l(this.a.a.c,"$isZ")
else u.b=new P.Z(y,x)
u.a=!0
return}if(!!J.B(z).$isaP){if(z instanceof P.ac&&z.gba()>=4){if(z.gba()===8){w=this.b
w.b=H.l(z.gcA(),"$isZ")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.dz(new P.i5(t),null)
w.a=!1}}},
i5:{"^":"o:28;a",
$1:function(a){return this.a}},
i3:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.v(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.aM(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ap(t)
y=H.aF(t)
x=this.a
x.b=new P.Z(z,y)
x.a=!0}}},
i2:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.l(this.a.a.c,"$isZ")
w=this.c
if(w.d6(z)&&w.e!=null){v=this.b
v.b=w.d_(z)
v.a=!1}}catch(u){y=H.ap(u)
x=H.aF(u)
w=H.l(this.a.a.c,"$isZ")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Z(y,x)
s.a=!0}}},
dH:{"^":"a;a,0b"},
ca:{"^":"a;$ti",
gj:function(a){var z,y
z={}
y=new P.ac(0,$.D,[P.K])
z.a=0
this.d5(new P.fY(z,this),!0,new P.fZ(z,y),y.gc_())
return y}},
fY:{"^":"o;a,b",
$1:function(a){H.v(a,H.cw(this.b,"ca",0));++this.a.a},
$S:function(){return{func:1,ret:P.w,args:[H.cw(this.b,"ca",0)]}}},
fZ:{"^":"o:0;a,b",
$0:function(){this.b.b_(this.a.a)}},
dj:{"^":"a;$ti"},
as:{"^":"a;"},
Z:{"^":"a;a,b",
i:function(a){return H.c(this.a)},
$isM:1},
iN:{"^":"a;",$islg:1},
j1:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.d8()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
ir:{"^":"iN;",
dv:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.c===$.D){a.$0()
return}P.dX(null,null,this,a,-1)}catch(x){z=H.ap(x)
y=H.aF(x)
P.bM(null,null,this,z,H.l(y,"$isa3"))}},
dw:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.c===$.D){a.$1(b)
return}P.dY(null,null,this,a,b,-1,c)}catch(x){z=H.ap(x)
y=H.aF(x)
P.bM(null,null,this,z,H.l(y,"$isa3"))}},
cM:function(a,b){return new P.it(this,H.d(a,{func:1,ret:b}),b)},
be:function(a){return new P.is(this,H.d(a,{func:1,ret:-1}))},
bf:function(a,b){return new P.iu(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
bv:function(a,b){H.d(a,{func:1,ret:b})
if($.D===C.c)return a.$0()
return P.dX(null,null,this,a,b)},
aM:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.D===C.c)return a.$1(b)
return P.dY(null,null,this,a,b,c,d)},
du:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.D===C.c)return a.$2(b,c)
return P.j2(null,null,this,a,b,c,d,e,f)},
dn:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
it:{"^":"o;a,b,c",
$0:function(){return this.a.bv(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
is:{"^":"o:1;a,b",
$0:function(){return this.a.dv(this.b)}},
iu:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dw(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fa:function(a,b,c){H.bi(a)
return H.x(H.jc(a,new H.c3(0,0,[b,c])),"$isd3",[b,c],"$asd3")},
f9:function(a,b){return new H.c3(0,0,[a,b])},
fb:function(a,b,c,d){return new P.ib(0,0,[d])},
eY:function(a,b,c){var z,y
if(P.cq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bg()
C.a.h(y,a)
try{P.iZ(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dk(b,H.jo(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
c_:function(a,b,c){var z,y,x
if(P.cq(a))return b+"..."+c
z=new P.cb(b)
y=$.$get$bg()
C.a.h(y,a)
try{x=z
x.a=P.dk(x.ga2(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.ga2()+c
y=z.ga2()
return y.charCodeAt(0)==0?y:y},
cq:function(a){var z,y
for(z=0;y=$.$get$bg(),z<y.length;++z)if(a===y[z])return!0
return!1},
iZ:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.c(z.gD(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.A()){if(x<=4){C.a.h(b,H.c(t))
return}v=H.c(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.A();t=s,s=r){r=z.gD(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.c(t)
v=H.c(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
d4:function(a){var z,y,x
z={}
if(P.cq(a))return"{...}"
y=new P.cb("")
try{C.a.h($.$get$bg(),a)
x=y
x.a=x.ga2()+"{"
z.a=!0
J.ei(a,new P.fh(z,y))
z=y
z.a=z.ga2()+"}"}finally{z=$.$get$bg()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.ga2()
return z.charCodeAt(0)==0?z:z},
ib:{"^":"i6;a,0b,0c,0d,0e,0f,r,$ti",
gI:function(a){return P.dM(this,this.r,H.t(this,0))},
gj:function(a){return this.a},
h:function(a,b){var z,y
H.v(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cm()
this.b=z}return this.aY(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cm()
this.c=y}return this.aY(y,b)}else return this.bV(0,b)},
bV:function(a,b){var z,y,x
H.v(b,H.t(this,0))
z=this.d
if(z==null){z=P.cm()
this.d=z}y=this.b0(b)
x=z[y]
if(x==null)z[y]=[this.ar(b)]
else{if(this.b3(x,b)>=0)return!1
x.push(this.ar(b))}return!0},
J:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b7(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b7(this.c,b)
else return this.ct(0,b)},
ct:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.c6(z,b)
x=this.b3(y,b)
if(x<0)return!1
this.bc(y.splice(x,1)[0])
return!0},
aY:function(a,b){H.v(b,H.t(this,0))
if(H.l(a[b],"$iscl")!=null)return!1
a[b]=this.ar(b)
return!0},
b7:function(a,b){var z
if(a==null)return!1
z=H.l(a[b],"$iscl")
if(z==null)return!1
this.bc(z)
delete a[b]
return!0},
aZ:function(){this.r=this.r+1&67108863},
ar:function(a){var z,y
z=new P.cl(H.v(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aZ()
return z},
bc:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aZ()},
b0:function(a){return J.ae(a)&0x3ffffff},
c6:function(a,b){return a[this.b0(b)]},
b3:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].a,b))return y
return-1},
q:{
cm:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cl:{"^":"a;a,0b,0c"},
ic:{"^":"a;a,b,0c,0d,$ti",
gD:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aK(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.v(z.a,H.t(this,0))
this.c=z.b
return!0}}},
q:{
dM:function(a,b,c){var z=new P.ic(a,b,[c])
z.c=a.e
return z}}},
i6:{"^":"fP;"},
c5:{"^":"id;",$ish:1,$isb:1},
n:{"^":"a;$ti",
gI:function(a){return new H.fc(a,this.gj(a),0,[H.bh(this,a,"n",0)])},
v:function(a,b){return this.k(a,b)},
dB:function(a,b){var z,y,x
z=H.f([],[H.bh(this,a,"n",0)])
C.a.sj(z,this.gj(a))
y=0
while(!0){x=this.gj(a)
if(typeof x!=="number")return H.A(x)
if(!(y<x))break
C.a.N(z,y,this.k(a,y));++y}return z},
dA:function(a){return this.dB(a,!0)},
i:function(a){return P.c_(a,"[","]")}},
fg:{"^":"X;"},
fh:{"^":"o:15;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.c(a)
z.a=y+": "
z.a+=H.c(b)}},
X:{"^":"a;$ti",
C:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.bh(this,a,"X",0),H.bh(this,a,"X",1)]})
for(z=J.bz(this.gY(a));z.A();){y=z.gD(z)
b.$2(y,this.k(a,y))}},
gj:function(a){return J.aI(this.gY(a))},
i:function(a){return P.d4(a)},
$isS:1},
fQ:{"^":"a;$ti",
i:function(a){return P.c_(this,"{","}")},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.cE("index"))
if(b<0)H.Y(P.b_(b,0,null,"index",null))
for(z=P.dM(this,this.r,H.t(this,0)),y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.e(P.C(b,this,"index",null,y))},
$ish:1},
fP:{"^":"fQ;"},
id:{"^":"a+n;"}}],["","",,P,{"^":"",
eN:function(a){var z=J.B(a)
if(!!z.$iso)return z.i(a)
return"Instance of '"+H.ar(a)+"'"},
fd:function(a,b,c,d){var z,y
H.v(b,d)
z=J.f_(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.N(z,y,b)
return H.x(z,"$isb",[d],"$asb")},
fe:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.gI(a);x.A();)C.a.h(y,H.v(x.gD(x),c))
if(b)return y
return H.x(J.aT(y),"$isb",z,"$asb")},
bD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eN(a)},
a2:function(a){return new P.dI(a)},
cA:function(a){H.jt(a)},
am:{"^":"a;"},
"+bool":0,
aM:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.aM))return!1
return this.a===b.a&&this.b===b.b},
gF:function(a){var z=this.a
return(z^C.b.b9(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ez(H.fE(this))
y=P.bl(H.fC(this))
x=P.bl(H.fy(this))
w=P.bl(H.fz(this))
v=P.bl(H.fB(this))
u=P.bl(H.fD(this))
t=P.eA(H.fA(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
ez:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bl:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"G;"},
"+double":0,
aN:{"^":"a;a",
n:function(a,b){return new P.aN(C.b.P(this.a*b))},
a8:function(a,b){return C.b.a8(this.a,H.l(b,"$isaN").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.aN))return!1
return this.a===b.a},
gF:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.eJ()
y=this.a
if(y<0)return"-"+new P.aN(0-y).i(0)
x=z.$1(C.b.ab(y,6e7)%60)
w=z.$1(C.b.ab(y,1e6)%60)
v=new P.eI().$1(y%1e6)
return""+C.b.ab(y,36e8)+":"+H.c(x)+":"+H.c(w)+"."+H.c(v)},
q:{
cY:function(a,b,c,d,e,f){return new P.aN(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eI:{"^":"o:11;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
eJ:{"^":"o:11;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
M:{"^":"a;"},
d8:{"^":"M;",
i:function(a){return"Throw of null."}},
aq:{"^":"M;a,b,c,d",
gau:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gat:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.c(z)
w=this.gau()+y+x
if(!this.a)return w
v=this.gat()
u=P.bD(this.b)
return w+v+": "+H.c(u)},
q:{
bA:function(a,b,c){return new P.aq(!0,a,b,c)},
cE:function(a){return new P.aq(!1,null,a,"Must not be null")}}},
db:{"^":"aq;e,f,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
q:{
c8:function(a,b,c){return new P.db(null,null,!0,a,b,"Value not in range")},
b_:function(a,b,c,d,e){return new P.db(b,c,!0,a,d,"Invalid value")}}},
eV:{"^":"aq;e,j:f>,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){if(J.ef(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.c(z)},
q:{
C:function(a,b,c,d,e){var z=H.P(e!=null?e:J.aI(b))
return new P.eV(b,z,!0,a,c,"Index out of range")}}},
hp:{"^":"M;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
a4:function(a){return new P.hp(a)}}},
hn:{"^":"M;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
dB:function(a){return new P.hn(a)}}},
fV:{"^":"M;a",
i:function(a){return"Bad state: "+this.a}},
ev:{"^":"M;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.c(P.bD(z))+"."},
q:{
aK:function(a){return new P.ev(a)}}},
ft:{"^":"a;",
i:function(a){return"Out of Memory"},
$isM:1},
di:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isM:1},
ey:{"^":"M;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
dI:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
K:{"^":"G;"},
"+int":0,
h:{"^":"a;$ti",
gj:function(a){var z,y
z=this.gI(this)
for(y=0;z.A();)++y
return y},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.cE("index"))
if(b<0)H.Y(P.b_(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.A();){x=z.gD(z)
if(b===y)return x;++y}throw H.e(P.C(b,this,"index",null,y))},
i:function(a){return P.eY(this,"(",")")}},
c0:{"^":"a;$ti"},
b:{"^":"a;$ti",$ish:1},
"+List":0,
S:{"^":"a;$ti"},
w:{"^":"a;",
gF:function(a){return P.a.prototype.gF.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
G:{"^":"a;"},
"+num":0,
a:{"^":";",
p:function(a,b){return this===b},
gF:function(a){return H.aZ(this)},
i:function(a){return"Instance of '"+H.ar(this)+"'"},
toString:function(){return this.i(this)}},
a3:{"^":"a;"},
k:{"^":"a;",$isfu:1},
"+String":0,
cb:{"^":"a;a2:a<",
gj:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
dk:function(a,b,c){var z=J.bz(b)
if(!z.A())return a
if(c.length===0){do a+=H.c(z.gD(z))
while(z.A())}else{a+=H.c(z.gD(z))
for(;z.A();)a=a+c+H.c(z.gD(z))}return a}}}}],["","",,W,{"^":"",
cN:function(a,b){var z=document.createElement("canvas")
return z},
eL:function(a){H.l(a,"$isR")
return"wheel"},
bL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dL:function(a,b,c,d){var z,y
z=W.bL(W.bL(W.bL(W.bL(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e0:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.c)return a
return z.bf(a,b)},
aS:{"^":"Q;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
jH:{"^":"c9;0l:x=,0m:y=","%":"Accelerometer|LinearAccelerationSensor"},
jI:{"^":"j;0j:length=","%":"AccessibleNodeList"},
jJ:{"^":"aS;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jK:{"^":"aS;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
em:{"^":"j;","%":";Blob"},
bX:{"^":"aS;",
aN:function(a,b,c){var z=a.getContext(b,P.j7(c,null))
return z},
$isbX:1,
"%":"HTMLCanvasElement"},
jQ:{"^":"z;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
jS:{"^":"bC;0j:length=","%":"CSSPerspective"},
jT:{"^":"bY;0l:x=,0m:y=","%":"CSSPositionValue"},
jU:{"^":"bC;0l:x=,0m:y=","%":"CSSRotation"},
aL:{"^":"j;",$isaL:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
jV:{"^":"bC;0l:x=,0m:y=","%":"CSSScale"},
ew:{"^":"hN;0j:length=",
bF:function(a,b){var z=a.getPropertyValue(this.aX(a,b))
return z==null?"":z},
aX:function(a,b){var z,y
z=$.$get$cR()
y=z[b]
if(typeof y==="string")return y
y=this.cI(a,b)
z[b]=y
return y},
cI:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eF()+b
if(z in a)return z
return b},
cB:function(a,b,c,d){a.setProperty(b,c,d)},
gaD:function(a){return a.bottom},
gU:function(a){return a.height},
ga6:function(a){return a.left},
gaL:function(a){return a.right},
gaj:function(a){return a.top},
gV:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ex:{"^":"a;",
ga6:function(a){return this.bF(a,"left")}},
bY:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bC:{"^":"j;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
jW:{"^":"bY;0j:length=","%":"CSSTransformValue"},
jX:{"^":"bC;0l:x=,0m:y=","%":"CSSTranslation"},
jY:{"^":"bY;0j:length=","%":"CSSUnparsedValue"},
jZ:{"^":"j;0j:length=","%":"DataTransferItemList"},
k_:{"^":"j;0l:x=,0m:y=","%":"DeviceAcceleration"},
k0:{"^":"j;",
i:function(a){return String(a)},
"%":"DOMException"},
k1:{"^":"eG;",
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"DOMPoint"},
eG:{"^":"j;",
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":";DOMPointReadOnly"},
k2:{"^":"hP;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.V,P.G]]},
$asn:function(){return[[P.V,P.G]]},
$ish:1,
$ash:function(){return[[P.V,P.G]]},
$isb:1,
$asb:function(){return[[P.V,P.G]]},
$asp:function(){return[[P.V,P.G]]},
"%":"ClientRectList|DOMRectList"},
eH:{"^":"j;",
i:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gV(a))+" x "+H.c(this.gU(a))},
p:function(a,b){var z
if(b==null)return!1
z=H.aD(b,"$isV",[P.G],"$asV")
if(!z)return!1
z=J.bx(b)
return a.left===z.ga6(b)&&a.top===z.gaj(b)&&this.gV(a)===z.gV(b)&&this.gU(a)===z.gU(b)},
gF:function(a){return W.dL(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gV(a)&0x1FFFFFFF,this.gU(a)&0x1FFFFFFF)},
gaD:function(a){return a.bottom},
gU:function(a){return a.height},
ga6:function(a){return a.left},
gaL:function(a){return a.right},
gaj:function(a){return a.top},
gV:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isV:1,
$asV:function(){return[P.G]},
"%":";DOMRectReadOnly"},
k3:{"^":"hR;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.k]},
$asn:function(){return[P.k]},
$ish:1,
$ash:function(){return[P.k]},
$isb:1,
$asb:function(){return[P.k]},
$asp:function(){return[P.k]},
"%":"DOMStringList"},
k4:{"^":"j;0j:length=","%":"DOMTokenList"},
hM:{"^":"c5;a,b",
gj:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.l(z[b],"$isQ")},
h:function(a,b){this.a.appendChild(b)
return b},
gI:function(a){var z=this.dA(this)
return new J.af(z,z.length,0,[H.t(z,0)])},
$asn:function(){return[W.Q]},
$ash:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
Q:{"^":"z;",
gbg:function(a){return new W.hM(a,a.children)},
gao:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.a8()
if(x<0)x=-x*0
if(typeof w!=="number")return w.a8()
if(w<0)w=-w*0
return new P.V(z,y,x,w,[P.G])},
i:function(a){return a.localName},
$isQ:1,
"%":";Element"},
W:{"^":"j;",$isW:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
R:{"^":"j;",
bd:["bK",function(a,b,c,d){H.d(c,{func:1,args:[W.W]})
if(c!=null)this.bW(a,b,c,!1)}],
bW:function(a,b,c,d){return a.addEventListener(b,H.aE(H.d(c,{func:1,args:[W.W]}),1),!1)},
$isR:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dR|dS|dU|dV"},
aO:{"^":"em;",$isaO:1,"%":"File"},
kn:{"^":"hW;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aO]},
$asn:function(){return[W.aO]},
$ish:1,
$ash:function(){return[W.aO]},
$isb:1,
$asb:function(){return[W.aO]},
$asp:function(){return[W.aO]},
"%":"FileList"},
ko:{"^":"R;0j:length=","%":"FileWriter"},
kr:{"^":"aS;0j:length=","%":"HTMLFormElement"},
aQ:{"^":"j;",$isaQ:1,"%":"Gamepad"},
ks:{"^":"c9;0l:x=,0m:y=","%":"Gyroscope"},
kt:{"^":"j;0j:length=","%":"History"},
ku:{"^":"i8;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.z]},
$asn:function(){return[W.z]},
$ish:1,
$ash:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]},
$asp:function(){return[W.z]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
aU:{"^":"cd;",$isaU:1,"%":"KeyboardEvent"},
kz:{"^":"j;",
i:function(a){return String(a)},
"%":"Location"},
kA:{"^":"c9;0l:x=,0m:y=","%":"Magnetometer"},
kC:{"^":"j;0j:length=","%":"MediaList"},
kD:{"^":"R;",
bd:function(a,b,c,d){H.d(c,{func:1,args:[W.W]})
if(b==="message")a.start()
this.bK(a,b,c,!1)},
"%":"MessagePort"},
kE:{"^":"ie;",
k:function(a,b){return P.ad(a.get(H.H(b)))},
C:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ad(y.value[1]))}},
gY:function(a){var z=H.f([],[P.k])
this.C(a,new W.fl(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.k,null]},
$isS:1,
$asS:function(){return[P.k,null]},
"%":"MIDIInputMap"},
fl:{"^":"o:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
kF:{"^":"ig;",
k:function(a,b){return P.ad(a.get(H.H(b)))},
C:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ad(y.value[1]))}},
gY:function(a){var z=H.f([],[P.k])
this.C(a,new W.fm(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.k,null]},
$isS:1,
$asS:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
fm:{"^":"o:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
aV:{"^":"j;",$isaV:1,"%":"MimeType"},
kG:{"^":"ii;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aV]},
$asn:function(){return[W.aV]},
$ish:1,
$ash:function(){return[W.aV]},
$isb:1,
$asb:function(){return[W.aV]},
$asp:function(){return[W.aV]},
"%":"MimeTypeArray"},
a7:{"^":"cd;",$isa7:1,"%":"PointerEvent;DragEvent|MouseEvent"},
hL:{"^":"c5;a",
gI:function(a){var z=this.a.childNodes
return new W.cZ(z,z.length,-1,[H.bh(C.z,z,"p",0)])},
gj:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asn:function(){return[W.z]},
$ash:function(){return[W.z]},
$asb:function(){return[W.z]}},
z:{"^":"R;",
i:function(a){var z=a.nodeValue
return z==null?this.bL(a):z},
$isz:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
fq:{"^":"ik;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.z]},
$asn:function(){return[W.z]},
$ish:1,
$ash:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]},
$asp:function(){return[W.z]},
"%":"NodeList|RadioNodeList"},
aX:{"^":"j;0j:length=",$isaX:1,"%":"Plugin"},
kR:{"^":"ip;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aX]},
$asn:function(){return[W.aX]},
$ish:1,
$ash:function(){return[W.aX]},
$isb:1,
$asb:function(){return[W.aX]},
$asp:function(){return[W.aX]},
"%":"PluginArray"},
kW:{"^":"iv;",
k:function(a,b){return P.ad(a.get(H.H(b)))},
C:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ad(y.value[1]))}},
gY:function(a){var z=H.f([],[P.k])
this.C(a,new W.fM(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.k,null]},
$isS:1,
$asS:function(){return[P.k,null]},
"%":"RTCStatsReport"},
fM:{"^":"o:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
kY:{"^":"aS;0j:length=","%":"HTMLSelectElement"},
c9:{"^":"R;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
b0:{"^":"R;",$isb0:1,"%":"SourceBuffer"},
kZ:{"^":"dS;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b0]},
$asn:function(){return[W.b0]},
$ish:1,
$ash:function(){return[W.b0]},
$isb:1,
$asb:function(){return[W.b0]},
$asp:function(){return[W.b0]},
"%":"SourceBufferList"},
b1:{"^":"j;",$isb1:1,"%":"SpeechGrammar"},
l_:{"^":"ix;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b1]},
$asn:function(){return[W.b1]},
$ish:1,
$ash:function(){return[W.b1]},
$isb:1,
$asb:function(){return[W.b1]},
$asp:function(){return[W.b1]},
"%":"SpeechGrammarList"},
b2:{"^":"j;0j:length=",$isb2:1,"%":"SpeechRecognitionResult"},
l1:{"^":"iA;",
k:function(a,b){return a.getItem(H.H(b))},
C:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gY:function(a){var z=H.f([],[P.k])
this.C(a,new W.fX(z))
return z},
gj:function(a){return a.length},
$asX:function(){return[P.k,P.k]},
$isS:1,
$asS:function(){return[P.k,P.k]},
"%":"Storage"},
fX:{"^":"o:17;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b3:{"^":"j;",$isb3:1,"%":"CSSStyleSheet|StyleSheet"},
b4:{"^":"aS;",$isb4:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
b5:{"^":"R;",$isb5:1,"%":"TextTrack"},
b6:{"^":"R;",$isb6:1,"%":"TextTrackCue|VTTCue"},
l6:{"^":"iE;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b6]},
$asn:function(){return[W.b6]},
$ish:1,
$ash:function(){return[W.b6]},
$isb:1,
$asb:function(){return[W.b6]},
$asp:function(){return[W.b6]},
"%":"TextTrackCueList"},
l7:{"^":"dV;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b5]},
$asn:function(){return[W.b5]},
$ish:1,
$ash:function(){return[W.b5]},
$isb:1,
$asb:function(){return[W.b5]},
$asp:function(){return[W.b5]},
"%":"TextTrackList"},
l8:{"^":"j;0j:length=","%":"TimeRanges"},
b7:{"^":"j;",$isb7:1,"%":"Touch"},
at:{"^":"cd;",$isat:1,"%":"TouchEvent"},
l9:{"^":"iK;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b7]},
$asn:function(){return[W.b7]},
$ish:1,
$ash:function(){return[W.b7]},
$isb:1,
$asb:function(){return[W.b7]},
$asp:function(){return[W.b7]},
"%":"TouchList"},
la:{"^":"j;0j:length=","%":"TrackDefaultList"},
cd:{"^":"W;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lc:{"^":"j;",
i:function(a){return String(a)},
"%":"URL"},
le:{"^":"j;0l:x=","%":"VRStageBoundsPoint"},
lf:{"^":"R;0j:length=","%":"VideoTrackList"},
bb:{"^":"a7;",
gcU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.a4("deltaY is not supported"))},
gcT:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.a4("deltaX is not supported"))},
$isbb:1,
"%":"WheelEvent"},
hE:{"^":"R;",
cz:function(a,b){return a.requestAnimationFrame(H.aE(H.d(b,{func:1,ret:-1,args:[P.G]}),1))},
c4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lk:{"^":"iP;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aL]},
$asn:function(){return[W.aL]},
$ish:1,
$ash:function(){return[W.aL]},
$isb:1,
$asb:function(){return[W.aL]},
$asp:function(){return[W.aL]},
"%":"CSSRuleList"},
ll:{"^":"eH;",
i:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
p:function(a,b){var z
if(b==null)return!1
z=H.aD(b,"$isV",[P.G],"$asV")
if(!z)return!1
z=J.bx(b)
return a.left===z.ga6(b)&&a.top===z.gaj(b)&&a.width===z.gV(b)&&a.height===z.gU(b)},
gF:function(a){return W.dL(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gU:function(a){return a.height},
gV:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
ln:{"^":"iR;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aQ]},
$asn:function(){return[W.aQ]},
$ish:1,
$ash:function(){return[W.aQ]},
$isb:1,
$asb:function(){return[W.aQ]},
$asp:function(){return[W.aQ]},
"%":"GamepadList"},
lo:{"^":"iT;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.z]},
$asn:function(){return[W.z]},
$ish:1,
$ash:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]},
$asp:function(){return[W.z]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lp:{"^":"iV;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b2]},
$asn:function(){return[W.b2]},
$ish:1,
$ash:function(){return[W.b2]},
$isb:1,
$asb:function(){return[W.b2]},
$asp:function(){return[W.b2]},
"%":"SpeechRecognitionResultList"},
lq:{"^":"iX;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b3]},
$asn:function(){return[W.b3]},
$ish:1,
$ash:function(){return[W.b3]},
$isb:1,
$asb:function(){return[W.b3]},
$asp:function(){return[W.b3]},
"%":"StyleSheetList"},
hS:{"^":"ca;a,b,c,$ti",
d5:function(a,b,c,d){var z=H.t(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.O(this.a,this.b,a,!1,z)}},
lm:{"^":"hS;a,b,c,$ti"},
hT:{"^":"dj;a,b,c,d,e,$ti",
cJ:function(){var z=this.d
if(z!=null&&this.a<=0)J.eh(this.b,this.c,z,!1)},
q:{
O:function(a,b,c,d,e){var z=c==null?null:W.e0(new W.hU(c),W.W)
z=new W.hT(0,a,b,z,!1,[e])
z.cJ()
return z}}},
hU:{"^":"o:3;a",
$1:function(a){return this.a.$1(H.l(a,"$isW"))}},
p:{"^":"a;$ti",
gI:function(a){return new W.cZ(a,this.gj(a),-1,[H.bh(this,a,"p",0)])}},
cZ:{"^":"a;a,b,c,0d,$ti",
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.eg(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
hN:{"^":"j+ex;"},
hO:{"^":"j+n;"},
hP:{"^":"hO+p;"},
hQ:{"^":"j+n;"},
hR:{"^":"hQ+p;"},
hV:{"^":"j+n;"},
hW:{"^":"hV+p;"},
i7:{"^":"j+n;"},
i8:{"^":"i7+p;"},
ie:{"^":"j+X;"},
ig:{"^":"j+X;"},
ih:{"^":"j+n;"},
ii:{"^":"ih+p;"},
ij:{"^":"j+n;"},
ik:{"^":"ij+p;"},
io:{"^":"j+n;"},
ip:{"^":"io+p;"},
iv:{"^":"j+X;"},
dR:{"^":"R+n;"},
dS:{"^":"dR+p;"},
iw:{"^":"j+n;"},
ix:{"^":"iw+p;"},
iA:{"^":"j+X;"},
iD:{"^":"j+n;"},
iE:{"^":"iD+p;"},
dU:{"^":"R+n;"},
dV:{"^":"dU+p;"},
iJ:{"^":"j+n;"},
iK:{"^":"iJ+p;"},
iO:{"^":"j+n;"},
iP:{"^":"iO+p;"},
iQ:{"^":"j+n;"},
iR:{"^":"iQ+p;"},
iS:{"^":"j+n;"},
iT:{"^":"iS+p;"},
iU:{"^":"j+n;"},
iV:{"^":"iU+p;"},
iW:{"^":"j+n;"},
iX:{"^":"iW+p;"}}],["","",,P,{"^":"",
ad:function(a){var z,y,x,w,v
if(a==null)return
z=P.f9(P.k,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=H.H(y[w])
z.N(0,v,a[v])}return z},
j7:function(a,b){var z={}
a.C(0,new P.j8(z))
return z},
cX:function(){var z=$.cW
if(z==null){z=J.bU(window.navigator.userAgent,"Opera",0)
$.cW=z}return z},
eF:function(){var z,y
z=$.cT
if(z!=null)return z
y=$.cU
if(y==null){y=J.bU(window.navigator.userAgent,"Firefox",0)
$.cU=y}if(y)z="-moz-"
else{y=$.cV
if(y==null){y=!P.cX()&&J.bU(window.navigator.userAgent,"Trident/",0)
$.cV=y}if(y)z="-ms-"
else z=P.cX()?"-o-":"-webkit-"}$.cT=z
return z},
j8:{"^":"o:15;a",
$2:function(a,b){this.a[a]=b}},
eQ:{"^":"c5;a,b",
gav:function(){var z,y,x
z=this.b
y=H.cw(z,"n",0)
x=W.Q
return new H.fi(new H.hC(z,H.d(new P.eR(),{func:1,ret:P.am,args:[y]}),[y]),H.d(new P.eS(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.aI(this.gav().a)},
k:function(a,b){var z=this.gav()
return z.b.$1(J.cD(z.a,b))},
gI:function(a){var z=P.fe(this.gav(),!1,W.Q)
return new J.af(z,z.length,0,[H.t(z,0)])},
$asn:function(){return[W.Q]},
$ash:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
eR:{"^":"o:19;",
$1:function(a){return!!J.B(H.l(a,"$isz")).$isQ}},
eS:{"^":"o:20;",
$1:function(a){return H.aG(H.l(a,"$isz"),"$isQ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bd:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dK:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
aY:{"^":"a;l:a>,m:b>,$ti",
i:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
p:function(a,b){var z,y,x
if(b==null)return!1
z=H.aD(b,"$isaY",[P.G],null)
if(!z)return!1
z=this.a
y=J.bx(b)
x=y.gl(b)
if(z==null?x==null:z===x){z=this.b
y=y.gm(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gF:function(a){var z,y
z=J.ae(this.a)
y=J.ae(this.b)
return P.dK(P.bd(P.bd(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.n()
y=H.t(this,0)
z=H.v(z*b,y)
x=this.b
if(typeof x!=="number")return x.n()
return new P.aY(z,H.v(x*b,y),this.$ti)}},
iq:{"^":"a;$ti",
gaL:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.v(z+this.c,H.t(this,0))},
gaD:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.v(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.c(this.a)+", "+H.c(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.aD(b,"$isV",[P.G],"$asV")
if(!z)return!1
z=this.a
y=J.bx(b)
x=y.ga6(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaj(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.t(this,0)
if(H.v(z+this.c,w)===y.gaL(b)){if(typeof x!=="number")return x.E()
z=H.v(x+this.d,w)===y.gaD(b)}else z=!1}else z=!1}else z=!1
return z},
gF:function(a){var z,y,x,w,v
z=this.a
y=J.ae(z)
x=this.b
w=J.ae(x)
if(typeof z!=="number")return z.E()
v=H.t(this,0)
z=H.v(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.v(x+this.d,v)
return P.dK(P.bd(P.bd(P.bd(P.bd(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
bh:function(a,b){var z,y
H.x(b,"$isaY",[P.G],"$asaY")
z=b.a
y=this.a
if(typeof z!=="number")return z.bE()
if(typeof y!=="number")return H.A(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.bE()
if(typeof y!=="number")return H.A(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
V:{"^":"iq;a6:a>,aj:b>,V:c>,U:d>,$ti"}}],["","",,P,{"^":"",k5:{"^":"F;0l:x=,0m:y=","%":"SVGFEBlendElement"},k6:{"^":"F;0l:x=,0m:y=","%":"SVGFEColorMatrixElement"},k7:{"^":"F;0l:x=,0m:y=","%":"SVGFEComponentTransferElement"},k8:{"^":"F;0l:x=,0m:y=","%":"SVGFECompositeElement"},k9:{"^":"F;0l:x=,0m:y=","%":"SVGFEConvolveMatrixElement"},ka:{"^":"F;0l:x=,0m:y=","%":"SVGFEDiffuseLightingElement"},kb:{"^":"F;0l:x=,0m:y=","%":"SVGFEDisplacementMapElement"},kc:{"^":"F;0l:x=,0m:y=","%":"SVGFEFloodElement"},kd:{"^":"F;0l:x=,0m:y=","%":"SVGFEGaussianBlurElement"},ke:{"^":"F;0l:x=,0m:y=","%":"SVGFEImageElement"},kf:{"^":"F;0l:x=,0m:y=","%":"SVGFEMergeElement"},kg:{"^":"F;0l:x=,0m:y=","%":"SVGFEMorphologyElement"},kh:{"^":"F;0l:x=,0m:y=","%":"SVGFEOffsetElement"},ki:{"^":"F;0l:x=,0m:y=","%":"SVGFEPointLightElement"},kj:{"^":"F;0l:x=,0m:y=","%":"SVGFESpecularLightingElement"},kk:{"^":"F;0l:x=,0m:y=","%":"SVGFESpotLightElement"},kl:{"^":"F;0l:x=,0m:y=","%":"SVGFETileElement"},km:{"^":"F;0l:x=,0m:y=","%":"SVGFETurbulenceElement"},kp:{"^":"F;0l:x=,0m:y=","%":"SVGFilterElement"},kq:{"^":"aR;0l:x=,0m:y=","%":"SVGForeignObjectElement"},eU:{"^":"aR;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aR:{"^":"F;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},kv:{"^":"aR;0l:x=,0m:y=","%":"SVGImageElement"},bq:{"^":"j;",$isbq:1,"%":"SVGLength"},ky:{"^":"ia;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.k(a,b)},
$asn:function(){return[P.bq]},
$ish:1,
$ash:function(){return[P.bq]},
$isb:1,
$asb:function(){return[P.bq]},
$asp:function(){return[P.bq]},
"%":"SVGLengthList"},kB:{"^":"F;0l:x=,0m:y=","%":"SVGMaskElement"},bs:{"^":"j;",$isbs:1,"%":"SVGNumber"},kO:{"^":"im;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.k(a,b)},
$asn:function(){return[P.bs]},
$ish:1,
$ash:function(){return[P.bs]},
$isb:1,
$asb:function(){return[P.bs]},
$asp:function(){return[P.bs]},
"%":"SVGNumberList"},kQ:{"^":"F;0l:x=,0m:y=","%":"SVGPatternElement"},kS:{"^":"j;0l:x=,0m:y=","%":"SVGPoint"},kT:{"^":"j;0j:length=","%":"SVGPointList"},kU:{"^":"j;0l:x=,0m:y=","%":"SVGRect"},kV:{"^":"eU;0l:x=,0m:y=","%":"SVGRectElement"},l2:{"^":"iC;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.k(a,b)},
$asn:function(){return[P.k]},
$ish:1,
$ash:function(){return[P.k]},
$isb:1,
$asb:function(){return[P.k]},
$asp:function(){return[P.k]},
"%":"SVGStringList"},F:{"^":"Q;",
gbg:function(a){return new P.eQ(a,new W.hL(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},l3:{"^":"aR;0l:x=,0m:y=","%":"SVGSVGElement"},h_:{"^":"aR;","%":"SVGTextPathElement;SVGTextContentElement"},l5:{"^":"h_;0l:x=,0m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bt:{"^":"j;",$isbt:1,"%":"SVGTransform"},lb:{"^":"iM;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.k(a,b)},
$asn:function(){return[P.bt]},
$ish:1,
$ash:function(){return[P.bt]},
$isb:1,
$asb:function(){return[P.bt]},
$asp:function(){return[P.bt]},
"%":"SVGTransformList"},ld:{"^":"aR;0l:x=,0m:y=","%":"SVGUseElement"},i9:{"^":"j+n;"},ia:{"^":"i9+p;"},il:{"^":"j+n;"},im:{"^":"il+p;"},iB:{"^":"j+n;"},iC:{"^":"iB+p;"},iL:{"^":"j+n;"},iM:{"^":"iL+p;"}}],["","",,P,{"^":"",jL:{"^":"j;0j:length=","%":"AudioBuffer"},jM:{"^":"hK;",
k:function(a,b){return P.ad(a.get(H.H(b)))},
C:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ad(y.value[1]))}},
gY:function(a){var z=H.f([],[P.k])
this.C(a,new P.ek(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.k,null]},
$isS:1,
$asS:function(){return[P.k,null]},
"%":"AudioParamMap"},ek:{"^":"o:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},jN:{"^":"R;0j:length=","%":"AudioTrackList"},el:{"^":"R;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kP:{"^":"el;0j:length=","%":"OfflineAudioContext"},hK:{"^":"j+X;"}}],["","",,P,{"^":"",de:{"^":"j;",$isde:1,"%":"WebGLRenderingContext"},hi:{"^":"j;",$ishi:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",l0:{"^":"iz;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.ad(a.item(b))},
v:function(a,b){return this.k(a,b)},
$asn:function(){return[[P.S,,,]]},
$ish:1,
$ash:function(){return[[P.S,,,]]},
$isb:1,
$asb:function(){return[[P.S,,,]]},
$asp:function(){return[[P.S,,,]]},
"%":"SQLResultSetRowList"},iy:{"^":"j+n;"},iz:{"^":"iy+p;"}}],["","",,O,{"^":"",eu:{"^":"a;0a,0b,0c,0d,$ti",
bI:function(a,b,c){var z={func:1,ret:-1,args:[P.K,[P.h,H.t(this,0)]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
aO:function(a,b){return this.bI(a,null,b)},
cp:function(a){H.x(a,"$ish",this.$ti,"$ash")
return!0},
c8:function(a,b){var z
H.x(b,"$ish",this.$ti,"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gj:function(a){return this.a.length},
gI:function(a){var z=this.a
return new J.af(z,z.length,0,[H.t(z,0)])},
v:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ish:1,
q:{
cP:function(a){var z=new O.eu([a])
z.a=H.f([],[a])
return z}}},c6:{"^":"a;0a,0b",
gj:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.ah()
this.b=z}return z},
bQ:function(a){var z=this.b
if(!(z==null))z.L(a)},
a0:function(){return this.bQ(null)},
gaf:function(a){var z=this.a
if(z.length>0)return C.a.gaG(z)
else return V.d5()},
bs:function(a){var z=this.a
if(a==null)C.a.h(z,V.d5())
else C.a.h(z,a)
this.a0()},
aI:function(){var z=this.a
if(z.length>0){z.pop()
this.a0()}}}}],["","",,E,{"^":"",cG:{"^":"a;"},ag:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0K:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
saQ:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gw()
y.toString
x=H.d(this.gbp(),{func:1,ret:-1,args:[D.r]})
C.a.J(y.a,x)}y=this.c
if(y!=null){y=y.gw()
y.toString
x=H.d(this.gbp(),{func:1,ret:-1,args:[D.r]})
C.a.h(y.a,x)}w=new D.I("shape",z,this.c,this,[F.dh])
w.b=!0
this.S(w)}},
sag:function(a){var z,y,x,w
if(!J.L(this.r,a)){z=this.r
if(z!=null){y=z.gw()
y.toString
x=H.d(this.gbo(),{func:1,ret:-1,args:[D.r]})
C.a.J(y.a,x)}if(a!=null){y=a.gw()
y.toString
x=H.d(this.gbo(),{func:1,ret:-1,args:[D.r]})
C.a.h(y.a,x)}this.r=a
w=new D.I("mover",z,a,this,[U.bI])
w.b=!0
this.S(w)}},
bA:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.c
z.sbB(z.a+z.d*b.y)
z.sbq(0,z.b+z.e*b.y)
z.sbu(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.ai(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.n(0,V.ai(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.n(0,V.ai(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.ap(0)}u=z.x}else u=null
if(!J.L(u,this.x)){t=this.x
this.x=u
s=new D.I("matrix",t,u,this,[V.br])
s.b=!0
this.S(s)}for(z=this.y.a,z=new J.af(z,z.length,0,[H.t(z,0)]);z.A();)z.d.bA(0,b)},
a7:function(a){var z,y,x,w,v,u,t,s
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaf(z))
else C.a.h(z.a,y.n(0,z.gaf(z)))
z.a0()
a.bt(this.f)
z=a.dy
x=(z&&C.a).gaG(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.k(0,"Depth")
if(w==null){z=a.a
w=new A.eC(z,"Depth")
w.bP(z,"Depth")
y=$.eE
v=$.eD
w.c=w.b2(y,35633)
w.d=w.b2(v,35632)
v=z.createProgram()
w.e=v
z.attachShader(v,w.c)
z.attachShader(w.e,w.d)
z.linkProgram(w.e)
if(!H.e4(z.getProgramParameter(w.e,35714))){u=z.getProgramInfoLog(w.e)
z.deleteProgram(w.e)
H.Y(P.a2("Failed to link shader: "+H.c(u)))}w.cF()
w.cG()
w.x=w.f.k(0,"posAttr")
w.y=H.aG(w.r.k(0,"objClr"),"$iscg")
w.z=H.aG(w.r.k(0,"fogClr"),"$iscg")
w.Q=H.aG(w.r.k(0,"fogStart"),"$isce")
w.ch=H.aG(w.r.k(0,"fogStop"),"$isce")
w.cx=H.aG(w.r.k(0,"viewObjMat"),"$isch")
w.cy=H.aG(w.r.k(0,"projMat"),"$isch")
if(a.fr.cR(0,"Depth"))H.Y(P.a2('Shader cache already contains a shader by the name "Depth".'))
a.fr.N(0,"Depth",w)}x.a=w
z=w}y=this.e
if(!(y instanceof Z.cK)){this.e=null
y=null}if(y==null){z=this.d.cN(new Z.hB(a.a),$.$get$ab())
y=z.cX($.$get$ab())
v=x.a
y.e=v.x.c
this.e=z
z=v}a.a.useProgram(z.e)
z.f.cW()
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
v.aP(y.by(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gaf(y)
v=a.dx
v=y.n(0,v.gaf(v))
a.cx=v
y=v}z=z.cx
z.toString
z.aP(y.by(0,!0))
y=this.e
y.aC(a)
y.a7(a)
y.dC(a)
y=x.a
y.toString
a.a.useProgram(null)
y.f.cV()}for(z=this.y.a,z=new J.af(z,z.length,0,[H.t(z,0)]);z.A();)z.d.a7(a)
a.br()
a.dx.aI()},
S:function(a){var z=this.z
if(!(z==null))z.L(a)},
R:function(){return this.S(null)},
de:[function(a){H.l(a,"$isr")
this.e=null
this.S(a)},function(){return this.de(null)},"e0","$1","$0","gbp",0,2,2],
dd:[function(a){this.S(H.l(a,"$isr"))},function(){return this.dd(null)},"e_","$1","$0","gbo",0,2,2],
da:[function(a){this.S(H.l(a,"$isr"))},function(){return this.da(null)},"dY","$1","$0","gbn",0,2,2],
dX:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$ish",[E.ag],"$ash")
for(z=b.length,y=this.gbn(),x={func:1,ret:-1,args:[D.r]},w=[x],v=0;v<b.length;b.length===z||(0,H.E)(b),++v){u=b[v]
if(u!=null){if(u.gK()==null){t=new D.bm()
t.a=H.f([],w)
t.c=0
u.sK(t)}t=u.gK()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.R()},"$2","gd9",8,0,6],
dZ:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$ish",[E.ag],"$ash")
for(z=b.length,y=this.gbn(),x={func:1,ret:-1,args:[D.r]},w=[x],v=0;v<b.length;b.length===z||(0,H.E)(b),++v){u=b[v]
if(u!=null){if(u.gK()==null){t=new D.bm()
t.a=H.f([],w)
t.c=0
u.sK(t)}t=u.gK()
t.toString
H.d(y,x)
C.a.J(t.a,y)}}this.R()},"$2","gdc",8,0,6],
$isd6:1},fH:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
bO:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aM(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.c6()
y=[V.br]
z.a=H.f([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.r]}
v=H.d(new E.fJ(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.c6()
z.a=H.f([],y)
v=z.gw()
v.toString
x=H.d(new E.fK(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.c6()
z.a=H.f([],y)
y=z.gw()
y.toString
w=H.d(new E.fL(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.cc])
this.dy=z
C.a.h(z,null)
this.fr=new H.c3(0,0,[P.k,A.dg])},
bt:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaG(z):a;(z&&C.a).h(z,y)},
br:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
fI:function(a,b){var z=new E.fH(a,b)
z.bO(a,b)
return z}}},fJ:{"^":"o:8;a",
$1:function(a){var z
H.l(a,"$isr")
z=this.a
z.z=null
z.ch=null}},fK:{"^":"o:8;a",
$1:function(a){var z
H.l(a,"$isr")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},fL:{"^":"o:8;a",
$1:function(a){var z
H.l(a,"$isr")
z=this.a
z.ch=null
z.cx=null}},h1:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0K:x@,0y,0z,0Q,0ch",
bS:[function(a){var z
H.l(a,"$isr")
z=this.x
if(!(z==null))z.L(a)
this.ds()},function(){return this.bS(null)},"bR","$1","$0","gaT",0,2,2],
gcZ:function(){var z,y,x
z=Date.now()
y=C.b.ab(P.cY(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aM(z,!1)
return x/y},
b8:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.A(z)
x=C.d.bk(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.n()
w=C.d.bk(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
ds:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.h3(this),{func:1,ret:-1,args:[P.G]})
C.n.c4(z)
C.n.cz(z,W.e0(y,P.G))}},
dr:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.b8()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aM(w,!1)
x.y=P.cY(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sj(w.a,0)
w.a0()
w=x.db
C.a.sj(w.a,0)
w.a0()
w=x.dx
C.a.sj(w.a,0)
w.a0()
w=x.dy;(w&&C.a).sj(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a7(this.e)}}catch(v){z=H.ap(v)
y=H.aF(v)
P.cA("Error: "+H.c(z))
P.cA("Stack: "+H.c(y))
throw H.e(z)}},
q:{
h2:function(a,b,c,d,e){var z,y,x,w
z=J.B(a)
if(!!z.$isbX)return E.dn(a,!0,!0,!0,!1)
y=W.cN(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbg(a).h(0,y)
w=E.dn(y,!0,!0,!0,!1)
w.a=a
return w},
dn:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.h1()
y=P.fa(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
x=C.f.aN(a,"webgl",y)
x=H.l(x==null?C.f.aN(a,"experimental-webgl",y):x,"$isde")
if(x==null)H.Y(P.a2("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.fI(x,a)
w=new T.h0(x)
w.b=H.P(x.getParameter(3379))
w.c=H.P(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.hq(a)
v=new X.f4()
v.c=new X.aW(!1,!1,!1)
v.d=P.fb(null,null,null,P.K)
w.b=v
v=new X.fn(w)
v.f=0
v.r=new V.N(0,0)
v.x=new V.N(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ff(w)
v.r=0
v.x=new V.N(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.h6(w)
v.e=0
v.f=new V.N(0,0)
v.r=new V.N(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.dj,P.a]])
w.z=v
u=document
t=W.a7
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.O(u,"contextmenu",H.d(w.gcc(),s),!1,t))
v=w.z
r=W.W
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.O(a,"focus",H.d(w.gcf(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.O(a,"blur",H.d(w.gc9(),q),!1,r))
v=w.z
p=W.aU
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.O(u,"keyup",H.d(w.gci(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.O(u,"keydown",H.d(w.gcg(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.O(a,"mousedown",H.d(w.gck(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.O(a,"mouseup",H.d(w.gcm(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.O(a,"mousemove",H.d(w.gcl(),s),!1,t))
p=w.z
o=W.bb;(p&&C.a).h(p,W.O(a,H.H(W.eL(a)),H.d(w.gcn(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.O(u,"mousemove",H.d(w.gcd(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.O(u,"mouseup",H.d(w.gce(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.O(u,"pointerlockchange",H.d(w.gco(),q),!1,r))
r=w.z
q=W.at
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.O(a,"touchstart",H.d(w.gcs(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.O(a,"touchend",H.d(w.gcq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.O(a,"touchmove",H.d(w.gcr(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aM(Date.now(),!1)
z.ch=0
z.b8()
return z}}},h3:{"^":"o:24;a",
$1:function(a){var z
H.js(a)
z=this.a
if(z.z){z.z=!1
z.dr()}}}}],["","",,Z,{"^":"",dG:{"^":"a;a,b",q:{
cj:function(a,b,c){var z
H.x(c,"$isb",[P.K],"$asb")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cn(c)),35044)
a.bindBuffer(b,null)
return new Z.dG(b,z)}}},cJ:{"^":"cG;a,b,c,d,e",
aC:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ap(y)
x=P.a2('Failed to bind buffer attribute "'+J.a1(this.a)+'": '+H.c(z))
throw H.e(x)}},
i:function(a){return"["+J.a1(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.c(this.e)+"]"}},hB:{"^":"a;a",$isjO:1},cK:{"^":"a;a,0b,c,d",
cX:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aC:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aC(a)},
dC:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a7:function(a){var z,y,x,w,v
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
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v)C.a.h(y,x[v].i(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a1(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.M(y,", ")+"\nAttrs:   "+C.a.M(u,", ")},
$isl4:1},bG:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ar(this.c)+"'")+"]"}},dC:{"^":"a;a",
gaR:function(a){var z,y
z=this.a
y=(z&$.$get$ab().a)!==0?3:0
if((z&$.$get$aw().a)!==0)y+=3
if((z&$.$get$av().a)!==0)y+=3
if((z&$.$get$ax().a)!==0)y+=2
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$b9().a)!==0)y+=3
if((z&$.$get$ba().a)!==0)y+=4
if((z&$.$get$az().a)!==0)++y
return(z&$.$get$au().a)!==0?y+4:y},
cL:function(a){var z,y,x
z=$.$get$ab()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$av()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b9()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ba()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$au()
if((y&z.a)!==0)if(x===a)return z
return $.$get$dF()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.dC))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.f([],[P.k])
y=this.a
if((y&$.$get$ab().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$av().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$ay().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b9().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$ba().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$az().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$au().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.M(z,"|")},
q:{
a_:function(a){return new Z.dC(a)}}}}],["","",,D,{"^":"",ep:{"^":"a;"},bm:{"^":"a;0a,0b,0c",
L:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.r(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.C(y,new D.eO(z))
return x!==0},
dt:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.L(y)}}},
ap:function(a){return this.dt(a,!0,!1)},
q:{
ah:function(){var z=new D.bm()
z.a=H.f([],[{func:1,ret:-1,args:[D.r]}])
z.c=0
return z}}},eO:{"^":"o:33;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.r]})
z=this.a.a
z.b
a.$1(z)}},r:{"^":"a;a,0b"},eW:{"^":"r;c,d,a,0b,$ti"},eX:{"^":"r;c,d,a,0b,$ti"},I:{"^":"r;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.c(this.d)+" => "+H.c(this.e)}}}],["","",,X,{"^":"",cL:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cL))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.c(this.a)},
q:{"^":"jP<"}},d1:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d1))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.c(this.a)}},f4:{"^":"a;0a,0b,0c,0d",
dk:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
dg:function(a){this.c=a.b
this.d.J(0,a.a)
return!1}},ff:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aH:function(a,b){this.r=a.a
return!1},
ai:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.bH()
if(typeof z!=="number")return z.bC()
this.r=(z&~y)>>>0
return!1},
ah:function(a,b){return!1},
dl:function(a){return!1},
cj:function(a,b,c){return}},aW:{"^":"a;a,b,c",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aW))return!1
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
return z+(this.c?"Shift+":"")}},fn:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
aH:function(a,b){this.f=a.a
return!1},
ai:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.bH()
if(typeof z!=="number")return z.bC()
this.f=(z&~y)>>>0
return!1},
ah:function(a,b){return!1},
dm:function(a,b){return!1}},fx:{"^":"r;"},h5:{"^":"fx;x,y,z,Q,ch,c,d,e,a,0b"},h6:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
b4:function(a,b){var z,y,x,w
H.x(a,"$isb",[V.N],"$asb")
z=new P.aM(Date.now(),!1)
y=a.length>0?a[0]:new V.N(0,0)
x=this.a.gcO()
w=new X.h5(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
dj:function(a){var z
H.x(a,"$isb",[V.N],"$asb")
z=this.b
if(z==null)return!1
z.L(this.b4(a,!0))
return!0},
dh:function(a){var z
H.x(a,"$isb",[V.N],"$asb")
z=this.c
if(z==null)return!1
z.L(this.b4(a,!0))
return!0},
di:function(a){H.x(a,"$isb",[V.N],"$asb")
return!1}},hq:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gcO:function(){var z=this.a
return V.dd(0,0,(z&&C.f).gao(z).c,C.f.gao(z).d)},
b1:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.d1(z,new X.aW(y,a.altKey,a.shiftKey))},
a5:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aW(y,a.altKey,a.shiftKey)},
aB:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aW(y,a.altKey,a.shiftKey)},
X:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.a_()
v=z.top
if(typeof x!=="number")return x.a_()
return new V.N(y-w,x-v)},
aa:function(a){return new V.b8(a.movementX,a.movementY)},
ay:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.N])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v){u=x[v]
t=C.d.P(u.pageX)
C.d.P(u.pageY)
s=z.left
C.d.P(u.pageX)
C.a.h(y,new V.N(t-s,C.d.P(u.pageY)-z.top))}return y},
W:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.cL(z,new X.aW(y,a.altKey,a.shiftKey))},
dM:[function(a){this.f=!0},"$1","gcf",4,0,3],
dG:[function(a){this.f=!1},"$1","gc9",4,0,3],
dJ:[function(a){if(this.f)a.preventDefault()},"$1","gcc",4,0,3],
dO:[function(a){var z
H.l(a,"$isaU")
if(!this.f)return
z=this.b1(a)
this.b.dk(z)},"$1","gci",4,0,13],
dN:[function(a){var z
H.l(a,"$isaU")
if(!this.f)return
z=this.b1(a)
this.b.dg(z)},"$1","gcg",4,0,13],
dP:[function(a){var z,y,x,w
H.l(a,"$isa7")
z=this.a
z.focus()
this.f=!0
this.a5(a)
if(this.x){y=this.W(a)
x=this.aa(a)
if(this.d.aH(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.W(a)
w=this.X(a)
if(this.c.aH(y,w))a.preventDefault()},"$1","gck",4,0,4],
dR:[function(a){var z,y,x
H.l(a,"$isa7")
this.a5(a)
z=this.W(a)
if(this.x){y=this.aa(a)
if(this.d.ai(z,y))a.preventDefault()
return}if(this.r)return
x=this.X(a)
if(this.c.ai(z,x))a.preventDefault()},"$1","gcm",4,0,4],
dL:[function(a){var z,y,x,w
H.l(a,"$isa7")
z=this.a
if(!(z&&C.f).gao(z).bh(0,new P.aY(a.clientX,a.clientY,[P.G]))){this.a5(a)
y=this.W(a)
if(this.x){x=this.aa(a)
if(this.d.ai(y,x))a.preventDefault()
return}if(this.r)return
w=this.X(a)
if(this.c.ai(y,w))a.preventDefault()}},"$1","gce",4,0,4],
dQ:[function(a){var z,y,x
H.l(a,"$isa7")
this.a5(a)
z=this.W(a)
if(this.x){y=this.aa(a)
if(this.d.ah(z,y))a.preventDefault()
return}if(this.r)return
x=this.X(a)
if(this.c.ah(z,x))a.preventDefault()},"$1","gcl",4,0,4],
dK:[function(a){var z,y,x,w
H.l(a,"$isa7")
z=this.a
if(!(z&&C.f).gao(z).bh(0,new P.aY(a.clientX,a.clientY,[P.G]))){this.a5(a)
y=this.W(a)
if(this.x){x=this.aa(a)
if(this.d.ah(y,x))a.preventDefault()
return}if(this.r)return
w=this.X(a)
if(this.c.ah(y,w))a.preventDefault()}},"$1","gcd",4,0,4],
dS:[function(a){var z,y
H.l(a,"$isbb")
this.a5(a)
z=new V.b8((a&&C.m).gcT(a),C.m.gcU(a)).G(0,180)
if(this.x){if(this.d.dl(z))a.preventDefault()
return}if(this.r)return
y=this.X(a)
if(this.c.dm(z,y))a.preventDefault()},"$1","gcn",4,0,27],
dT:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.W(this.y)
v=this.X(this.y)
this.d.cj(w,v,x)}},"$1","gco",4,0,3],
dW:[function(a){var z
H.l(a,"$isat")
this.a.focus()
this.f=!0
this.aB(a)
z=this.ay(a)
if(this.e.dj(z))a.preventDefault()},"$1","gcs",4,0,9],
dU:[function(a){var z
H.l(a,"$isat")
this.aB(a)
z=this.ay(a)
if(this.e.dh(z))a.preventDefault()},"$1","gcq",4,0,9],
dV:[function(a){var z
H.l(a,"$isat")
this.aB(a)
z=this.ay(a)
if(this.e.di(z))a.preventDefault()},"$1","gcr",4,0,9]}}],["","",,V,{"^":"",
jR:[function(a,b){if(typeof b!=="number")return b.a_()
if(typeof a!=="number")return H.A(a)
return Math.abs(b-a)<=1e-9},"$2","fk",8,0,25],
cB:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bG(a-b,z)
return(a<0?a+z:a)+b},
y:function(a,b,c){if(a==null)return C.e.Z("null",c)
return C.e.Z(C.d.bz($.m.$2(a,0)?0:a,b),c+b+1)},
bQ:function(a,b,c){var z,y,x,w,v
H.x(a,"$isb",[P.q],"$asb")
z=H.f([],[P.k])
for(y=0,x=0;x<4;++x){w=V.y(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.i(z,v)
C.a.N(z,v,C.e.Z(z[v],y))}return z},
bj:{"^":"a;a,b,c",
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
return new V.bj(z,y,x)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bj))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}},
bk:{"^":"a;a,b,c,d",
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
return new V.bk(z,y,x,w)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bk))return!1
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
br:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
by:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
n:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.l(a7,"$isbr")
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
return V.ai(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.br))return!1
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
bl:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.bQ(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bQ(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bQ(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bQ(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
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
B:function(){return this.bl("",3,0)},
u:function(a){return this.bl(a,3,0)},
q:{
ai:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.br(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
d5:function(){return V.ai(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
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
ak:{"^":"a;l:a>,m:b>,c",
a_:function(a,b){return new V.ak(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){return new V.ak(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}},
dc:{"^":"a;l:a>,m:b>,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dc))return!1
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
dd:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dc(a,b,c,d)}}},
b8:{"^":"a;a,b",
d3:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.n()
y=this.b
if(typeof y!=="number")return y.n()
return Math.sqrt(z*z+y*y)},"$0","gj",1,0,14],
n:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.n()
y=this.b
if(typeof y!=="number")return y.n()
return new V.b8(z*b,y*b)},
G:function(a,b){var z,y
if($.m.$2(b,0))return new V.b8(0,0)
z=this.a
if(typeof z!=="number")return z.G()
y=this.b
if(typeof y!=="number")return y.G()
return new V.b8(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b8))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}},
J:{"^":"a;a,b,c",
d3:[function(a){return Math.sqrt(this.H(this))},"$0","gj",1,0,14],
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ac:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.J(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
aq:function(a){return new V.J(-this.a,-this.b,-this.c)},
n:function(a,b){return new V.J(this.a*b,this.b*b,this.c*b)},
G:function(a,b){if($.m.$2(b,0))return new V.J(0,0,0)
return new V.J(this.a/b,this.b/b,this.c/b)},
d2:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}}],["","",,U,{"^":"",cQ:{"^":"bI;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.ah()
this.b=z}return z},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cQ))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}},bI:{"^":"ep;"},df:{"^":"bI;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.ah()
this.y=z}return z},
a4:function(a){var z=this.y
if(!(z==null))z.L(a)},
sbB:function(a){var z,y
a=V.cB(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.I("yaw",y,a,this,[P.q])
z.b=!0
this.a4(z)}},
sbq:function(a,b){var z,y
b=V.cB(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.I("pitch",y,b,this,[P.q])
z.b=!0
this.a4(z)}},
sbu:function(a){var z,y
a=V.cB(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.I("roll",y,a,this,[P.q])
z.b=!0
this.a4(z)}},
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.df))return!1
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
i:function(a){return"Rotater: ["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"], ["+V.y(this.d,3,0)+", "+V.y(this.e,3,0)+", "+V.y(this.f,3,0)+"]"}}}],["","",,M,{"^":"",eM:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
a1:[function(a){var z
H.l(a,"$isr")
z=this.x
if(!(z==null))z.L(a)},function(){return this.a1(null)},"dD","$1","$0","gT",0,2,2],
dH:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ag
H.x(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gT(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){if(t.gK()==null){s=new D.bm()
s.a=H.f([],v)
s.c=0
t.sK(s)}s=t.gK()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.eW(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gca",8,0,6],
dI:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ag
H.x(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gT(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){if(t.gK()==null){s=new D.bm()
s.a=H.f([],v)
s.c=0
t.sK(s)}s=t.gK()
s.toString
H.d(x,w)
C.a.J(s.a,x)}}z=new D.eX(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gcb",8,0,6],
sbw:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.d(this.gT(),{func:1,ret:-1,args:[D.r]})
C.a.J(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.d(this.gT(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,y)}z=new D.I("technique",x,this.c,this,[O.cc])
z.b=!0
this.a1(z)}},
gw:function(){var z=this.x
if(z==null){z=D.ah()
this.x=z}return z},
a7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.bt(this.c)
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
u=C.b.P(v.a*x)
if(typeof w!=="number")return H.A(w)
t=C.b.P(v.b*w)
s=C.b.P(v.c*x)
a.c=s
v=C.b.P(v.d*w)
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
s.bs(V.ai(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.d9
if(y==null){y=new V.J(0,0,-1)
m=y.G(0,Math.sqrt(y.H(y)))
y=new V.J(0,1,0).ac(m)
l=y.G(0,Math.sqrt(y.H(y)))
k=m.ac(l)
j=new V.J(0,0,0)
y=V.ai(l.a,k.a,m.a,l.aq(0).H(j),l.b,k.b,m.b,k.aq(0).H(j),l.c,k.c,m.c,m.aq(0).H(j),0,0,0,1)
$.d9=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.n(0,i)}a.db.bs(i)
for(z=this.d.a,z=new J.af(z,z.length,0,[H.t(z,0)]);z.A();)z.d.bA(0,a)
for(z=this.d.a,z=new J.af(z,z.length,0,[H.t(z,0)]);z.A();)z.d.a7(a)
this.a.toString
a.cy.aI()
a.db.aI()
this.b.toString
a.br()},
$iskX:1}}],["","",,A,{"^":"",cF:{"^":"a;a,b,c"},ej:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
cW:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
cV:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eC:{"^":"dg;0x,0y,0z,0Q,0ch,0cx,0cy,a,b,0c,0d,0e,0f,0r"},dg:{"^":"cG;",
bP:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
b2:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.e4(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.e(P.a2("Error compiling shader '"+H.c(y)+"': "+H.c(x)))}return y},
cF:function(){var z,y,x,w,v,u
z=H.f([],[A.cF])
y=this.a
x=H.P(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.cF(y,v.name,u))}this.f=new A.ej(z)},
cG:function(){var z,y,x,w,v,u
z=H.f([],[A.T])
y=this.a
x=H.P(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.cS(v.type,v.size,v.name,u))}this.r=new A.hh(z)},
a3:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ha(z,y,b,c)
else return A.cf(z,y,b,a,c)},
c1:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.hl(z,y,b,c)
else return A.cf(z,y,b,a,c)},
c2:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.hm(z,y,b,c)
else return A.cf(z,y,b,a,c)},
an:function(a,b){return new P.dI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.c(b)+"."))},
cS:function(a,b,c,d){switch(a){case 5120:return this.a3(b,c,d)
case 5121:return this.a3(b,c,d)
case 5122:return this.a3(b,c,d)
case 5123:return this.a3(b,c,d)
case 5124:return this.a3(b,c,d)
case 5125:return this.a3(b,c,d)
case 5126:return new A.ce(this.a,this.e,c,d)
case 35664:return new A.hc(this.a,this.e,c,d)
case 35665:return new A.cg(this.a,this.e,c,d)
case 35666:return new A.hf(this.a,this.e,c,d)
case 35667:return new A.hd(this.a,this.e,c,d)
case 35668:return new A.he(this.a,this.e,c,d)
case 35669:return new A.hg(this.a,this.e,c,d)
case 35674:return new A.hj(this.a,this.e,c,d)
case 35675:return new A.hk(this.a,this.e,c,d)
case 35676:return new A.ch(this.a,this.e,c,d)
case 35678:return this.c1(b,c,d)
case 35680:return this.c2(b,c,d)
case 35670:throw H.e(this.an("BOOL",c))
case 35671:throw H.e(this.an("BOOL_VEC2",c))
case 35672:throw H.e(this.an("BOOL_VEC3",c))
case 35673:throw H.e(this.an("BOOL_VEC4",c))
default:throw H.e(P.a2("Unknown uniform variable type "+H.c(a)+" for "+H.c(c)+"."))}}},T:{"^":"a;"},hh:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.B()},
cY:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.E)(z),++w)x+=z[w].i(0)+a
return x},
B:function(){return this.cY("\n")}},ha:{"^":"T;a,b,c,d",
i:function(a){return"Uniform1i: "+H.c(this.c)}},hd:{"^":"T;a,b,c,d",
i:function(a){return"Uniform2i: "+H.c(this.c)}},he:{"^":"T;a,b,c,d",
i:function(a){return"Uniform3i: "+H.c(this.c)}},hg:{"^":"T;a,b,c,d",
i:function(a){return"Uniform4i: "+H.c(this.c)}},hb:{"^":"T;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.c(this.c)},
q:{
cf:function(a,b,c,d,e){var z=new A.hb(a,b,c,e)
z.f=d
z.e=P.fd(d,0,!1,P.K)
return z}}},ce:{"^":"T;a,b,c,d",
i:function(a){return"Uniform1f: "+H.c(this.c)}},hc:{"^":"T;a,b,c,d",
i:function(a){return"Uniform2f: "+H.c(this.c)}},cg:{"^":"T;a,b,c,d",
i:function(a){return"Uniform3f: "+H.c(this.c)}},hf:{"^":"T;a,b,c,d",
i:function(a){return"Uniform4f: "+H.c(this.c)}},hj:{"^":"T;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.c(this.c)}},hk:{"^":"T;a,b,c,d",
i:function(a){return"UniformMat3: "+H.c(this.c)}},ch:{"^":"T;a,b,c,d",
aP:function(a){var z=new Float32Array(H.cn(H.x(a,"$isb",[P.q],"$asb")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.c(this.c)}},hl:{"^":"T;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.c(this.c)}},hm:{"^":"T;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.c(this.c)}}}],["","",,F,{"^":"",
jE:function(a,b,c,d){return F.j9(c,a,d,b,new F.jF())},
j9:function(a,b,c,d,e){var z,y
z=F.jC(a,b,new F.ja(H.d(e,{func:1,ret:V.ak,args:[P.q]}),d,b,c),null)
if(z==null)return
y=z.e
if(!(y==null))++y.c
z.d.aF()
z.a.aF()
y=z.e
if(!(y==null))y.ap(0)
z.d8(new F.hw(),new F.fr())
return z},
jC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[F.aa,P.q,P.q]})
if(a<1)return
if(b<1)return
z=new F.dh()
y=new F.hr(z)
y.b=!1
x=[F.aa]
y.c=H.f([],x)
z.a=y
y=new F.fT(z)
y.b=H.f([],[F.da])
z.b=y
y=new F.fS(z)
y.b=H.f([],[F.d2])
z.c=y
y=new F.fR(z)
y.b=H.f([],[F.a6])
z.d=y
z.e=null
w=H.f([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.ci(null,null,new V.bk(x,0,0,1),null,null,new V.N(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.bi(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.ci(null,null,new V.bk(o,n,m,1),null,null,new V.N(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.bi(d))}}z.d.cK(a+1,b+1,w)
return z},
jF:{"^":"o:29;",
$1:function(a){return new V.ak(Math.cos(a),Math.sin(a),0)}},
ja:{"^":"o:30;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.cC(y.$1(z),x)
x=J.cC(y.$1(z+3.141592653589793/this.c),x).a_(0,w)
x=new V.J(x.a,x.b,x.c)
v=x.G(0,Math.sqrt(x.H(x)))
u=new V.J(1,0,0)
y=v.ac(!v.p(0,u)?new V.J(0,0,1):u)
t=y.G(0,Math.sqrt(y.H(y)))
y=t.ac(v)
u=y.G(0,Math.sqrt(y.H(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.n(0,y*x)
x=t.n(0,r*x)
x=new V.ak(w.a+(y.a-x.a),w.b+(y.b-x.b),w.c+(y.c-x.c))
if(!J.L(a.f,x)){a.f=x
y=a.a
if(y!=null)y.R()}}},
a6:{"^":"a;0a,0b,0c,0d,0e",
ad:function(){if(!this.gbj()){C.a.J(this.a.a.d.b,this)
this.a.a.R()}this.cu()
this.cv()
this.cw()},
cC:function(a){this.a=a
C.a.h(a.d.b,this)},
cD:function(a){this.b=a
C.a.h(a.d.c,this)},
cE:function(a){this.c=a
C.a.h(a.d.d,this)},
cu:function(){var z=this.a
if(z!=null){C.a.J(z.d.b,this)
this.a=null}},
cv:function(){var z=this.b
if(z!=null){C.a.J(z.d.c,this)
this.b=null}},
cw:function(){var z=this.c
if(z!=null){C.a.J(z.d.d,this)
this.c=null}},
gbj:function(){return this.a==null||this.b==null||this.c==null},
bX:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.J(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.d2())return
return v.G(0,Math.sqrt(v.H(v)))},
bY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.a_(0,y)
z=new V.J(z.a,z.b,z.c)
v=z.G(0,Math.sqrt(z.H(z)))
z=w.a_(0,y)
z=new V.J(z.a,z.b,z.c)
z=v.ac(z.G(0,Math.sqrt(z.H(z))))
return z.G(0,Math.sqrt(z.H(z)))},
aE:function(){if(this.d!=null)return!0
var z=this.bX()
if(z==null){z=this.bY()
if(z==null)return!1}this.d=z
this.a.a.R()
return!0},
gcP:function(a){if(J.L(this.a,this.b))return!0
if(J.L(this.b,this.c))return!0
if(J.L(this.c,this.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
u:function(a){var z,y
if(this.gbj())return a+"disposed"
z=a+C.e.Z(J.a1(this.a.e),0)+", "+C.e.Z(J.a1(this.b.e),0)+", "+C.e.Z(J.a1(this.c.e),0)+" {"
y=this.d
z=(y!=null?z+(y.i(0)+", "):z+"-, ")+"-}"
return z},
B:function(){return this.u("")},
q:{
bE:function(a,b,c){var z,y,x
z=new F.a6()
y=a.a
if(y==null)H.Y(P.a2("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.Y(P.a2("May not create a face with vertices attached to different shapes."))
z.cC(a)
z.cD(b)
z.cE(c)
C.a.h(z.a.a.d.b,z)
z.a.a.R()
return z}}},
eP:{"^":"a;"},
fU:{"^":"eP;",
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
d2:{"^":"a;"},
f5:{"^":"a;"},
h9:{"^":"f5;",
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
da:{"^":"a;"},
dh:{"^":"a;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.ah()
this.e=z}return z},
c5:function(a,b,c,d,e){var z,y,x
H.x(d,"$isb",[F.aa],"$asb")
H.x(e,"$isb",[P.K],"$asb")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.ae(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
d8:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.aa],x=[P.K];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.f([],z)
t=H.f([],x)
if(this.c5(a,v,y,u,t))b.d7(u)}this.a.t()
this.c.aJ()
this.d.aJ()
this.b.dq()
this.c.aK(new F.h9())
this.d.aK(new F.fU())
z=this.e
if(!(z==null))z.ap(0)},
cN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ab()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aw().a)!==0)++w
if((x&$.$get$av().a)!==0)++w
if((x&$.$get$ax().a)!==0)++w
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$b9().a)!==0)++w
if((x&$.$get$ba().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$au().a)!==0)++w
v=b.gaR(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.cJ])
for(r=0,q=0;q<w;++q){p=b.cL(q)
o=p.gaR(p)
C.a.N(s,q,new Z.cJ(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].d4(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.N(t,l,m[k]);++l}}r+=o}H.x(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cn(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cK(new Z.dG(34962,j),s,b)
i.b=H.f([],[Z.bG])
if(this.b.b.length!==0){x=P.K
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)}f=Z.cj(y,34963,H.x(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bG(0,h.length,f))}if(this.c.b.length!==0){x=P.K
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)}f=Z.cj(y,34963,H.x(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bG(1,h.length,f))}if(this.d.b.length!==0){x=P.K
h=H.f([],[x])
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
C.a.h(h,g.e)}f=Z.cj(y,34963,H.x(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bG(4,h.length,f))}return i},
i:function(a){var z=H.f([],[P.k])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.u("   "))}return C.a.M(z,"\n")},
S:function(a){var z=this.e
if(!(z==null))z.L(a)},
R:function(){return this.S(null)}},
fR:{"^":"a;a,0b",
cK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(c,"$isb",[F.aa],"$asb")
z=H.f([],[F.a6])
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
C.a.h(z,F.bE(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bE(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bE(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bE(q,n,r))}u=!u}w=!w}return z},
gj:function(a){return this.b.length},
aK:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.ae(0,v,t)){v.ad()
break}}}}},
aJ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gcP(x)
if(y)x.ad()}},
aF:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].aE())x=!1
return x},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].u(a))
return C.a.M(z,"\n")},
B:function(){return this.u("")}},
fS:{"^":"a;a,0b",
gj:function(a){return this.b.length},
aK:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.ae(0,v,t)){v.ad()
break}}}}},
aJ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.L(x.a,x.b)
if(y)x.ad()}},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
z=H.f([],[P.k])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].u(a+(""+x+". ")))}return C.a.M(z,"\n")},
B:function(){return this.u("")}},
fT:{"^":"a;a,0b",
gj:function(a){return this.b.length},
dq:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ad()}},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].u(a))
return C.a.M(z,"\n")},
B:function(){return this.u("")}},
aa:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bi:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ci(this.cx,x,u,z,y,w,v,a,t)},
d4:function(a){var z,y
z=J.B(a)
if(z.p(a,$.$get$ab())){z=this.f
y=[P.q]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$aw())){z=this.r
y=[P.q]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$av())){z=H.f([0,0,1],[P.q])
return z}else if(z.p(a,$.$get$ax())){z=this.y
y=[P.q]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.p(a,$.$get$ay())){z=H.f([0,0,0],[P.q])
return z}else if(z.p(a,$.$get$b9())){z=this.Q
y=[P.q]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$ba())){z=this.Q
y=[P.q]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.p(a,$.$get$az()))return H.f([this.ch],[P.q])
else if(z.p(a,$.$get$au())){z=H.f([-1,-1,-1,-1],[P.q])
return z}else return H.f([],[P.q])},
aE:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.J(0,0,0)
this.d.C(0,new F.hA(z))
z=z.a
this.r=z.G(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.R()
z=this.a.e
if(!(z==null))z.ap(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
u:function(a){var z,y,x
z=H.f([],[P.k])
C.a.h(z,C.e.Z(J.a1(this.e),0))
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
ci:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aa()
y=new F.hz(z)
y.b=H.f([],[F.da])
z.b=y
y=new F.hv(z)
x=[F.d2]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.hs(z)
x=[F.a6]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$dD()
z.e=0
y=$.$get$ab()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aw().a)!==0?e:null
z.x=(x&$.$get$av().a)!==0?b:null
z.y=(x&$.$get$ax().a)!==0?f:null
z.z=(x&$.$get$ay().a)!==0?g:null
z.Q=(x&$.$get$dE().a)!==0?c:null
z.ch=(x&$.$get$az().a)!==0?i:0
z.cx=(x&$.$get$au().a)!==0?a:null
return z}}},
hA:{"^":"o:10;a",
$1:function(a){var z,y
H.l(a,"$isa6")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
hr:{"^":"a;a,0b,0c",
t:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.a2("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.R()
return!0},
gj:function(a){return this.c.length},
aF:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].aE()
return!0},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
this.t()
z=H.f([],[P.k])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].u(a))
return C.a.M(z,"\n")},
B:function(){return this.u("")}},
hs:{"^":"a;a,0b,0c,0d",
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
C:function(a,b){H.d(b,{func:1,ret:-1,args:[F.a6]})
C.a.C(this.b,b)
C.a.C(this.c,new F.ht(this,b))
C.a.C(this.d,new F.hu(this,b))},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].u(a))
return C.a.M(z,"\n")},
B:function(){return this.u("")}},
ht:{"^":"o:10;a,b",
$1:function(a){H.l(a,"$isa6")
if(!J.L(a.a,this.a))this.b.$1(a)}},
hu:{"^":"o:10;a,b",
$1:function(a){var z
H.l(a,"$isa6")
z=this.a
if(!J.L(a.a,z)&&!J.L(a.b,z))this.b.$1(a)}},
hv:{"^":"a;a,0b,0c",
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
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].u(a))
return C.a.M(z,"\n")},
B:function(){return this.u("")}},
hx:{"^":"a;"},
hw:{"^":"hx;",
ae:function(a,b,c){return J.L(b.f,c.f)}},
hy:{"^":"a;"},
fr:{"^":"hy;",
d7:function(a){var z,y,x,w,v,u,t,s
H.x(a,"$isb",[F.aa],"$asb")
z=new V.J(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.J(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.G(0,Math.sqrt(z.H(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.E)(a),++x){t=a[x]
s=z.G(0,Math.sqrt(u))
if(!J.L(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.L(null)}}}return}},
hz:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.B()},
u:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].u(a))
return C.a.M(z,"\n")},
B:function(){return this.u("")}}}],["","",,O,{"^":"",eB:{"^":"cc;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.ah()
this.f=z}return z},
ak:function(a){var z=this.f
if(!(z==null))z.L(a)}},cc:{"^":"a;"}}],["","",,T,{"^":"",h0:{"^":"a;a,0b,0c,0d,0e"}}],["","",,X,{"^":"",cM:{"^":"a;",$isd6:1},eT:{"^":"dl;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.ah()
this.x=z}return z}},fv:{"^":"a;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.ah()
this.e=z}return z},
a9:[function(a){var z
H.l(a,"$isr")
z=this.e
if(!(z==null))z.L(a)},function(){return this.a9(null)},"dE","$1","$0","gaU",0,2,2],
sag:function(a){var z,y,x
if(!J.L(this.a,a)){z=this.a
if(z!=null){z=z.gw()
z.toString
y=H.d(this.gaU(),{func:1,ret:-1,args:[D.r]})
C.a.J(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gw()
z.toString
y=H.d(this.gaU(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,y)}z=new D.I("mover",x,this.a,this,[U.bI])
z.b=!0
this.a9(z)}},
$isd6:1,
$iscM:1},dl:{"^":"a;"}}],["","",,B,{"^":"",
jw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.i.cB(x,(x&&C.i).aX(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
W.O(z,"scroll",H.d(new B.jx(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
jy:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(b,"$isb",[P.k],"$asb")
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
u=W.cN(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.l(v.insertCell(-1),"$isb4")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.l(q.insertCell(-1),"$isb4").style
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
t=H.l(q.insertCell(-1),"$isb4")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.l(q.insertCell(-1),"$isb4")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.l(q.insertCell(-1),"$isb4").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.jw(a,y,!1,"../resources/SnowTop.png")},
jz:function(a){P.h4(C.p,new B.jA(a))},
jx:{"^":"o:31;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.c(-0.05*C.d.P(this.b.scrollTop))+"px"
z.top=y}},
jA:{"^":"o:32;a",
$1:function(a){H.l(a,"$isas")
P.cA(C.d.bz(this.a.gcZ(),2)+" fps")}}}],["","",,Y,{"^":"",
ea:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n
B.jy("Test 001",H.f([],[P.k]),"Test of the Depth shader, a basic fog shader with a single auto-rotating shape.")
z=new E.ag()
z.a=""
z.b=!0
y=E.ag
x=O.cP(y)
z.y=x
x.aO(z.gd9(),z.gdc())
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
z.saQ(0,null)
z.sag(null)
z.saQ(0,F.jE(30,1,15,0.5))
x=new U.df()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sbB(0)
x.sbq(0,0)
x.sbu(0)
w=x.d
if(!$.m.$2(w,0.1)){v=x.d
x.d=0.1
w=new D.I("deltaYaw",v,0.1,x,[P.q])
w.b=!0
x.a4(w)}w=x.e
if(!$.m.$2(w,0.21)){v=x.e
x.e=0.21
w=new D.I("deltaPitch",v,0.21,x,[P.q])
w.b=!0
x.a4(w)}w=x.f
if(!$.m.$2(w,0.32)){v=x.f
x.f=0.32
w=new D.I("deltaRoll",v,0.32,x,[P.q])
w.b=!0
x.a4(w)}z.sag(x)
u=new M.eM()
y=O.cP(y)
u.d=y
y.aO(u.gca(),u.gcb())
u.e=null
u.f=null
u.r=null
u.x=null
t=new X.fv()
t.b=1.0471975511965976
t.c=0.1
t.d=2000
t.sag(null)
y=t.b
if(!$.m.$2(y,1.0471975511965976)){v=t.b
t.b=1.0471975511965976
y=new D.I("fov",v,1.0471975511965976,t,[P.q])
y.b=!0
t.a9(y)}y=t.c
if(!$.m.$2(y,0.1)){v=t.c
t.c=0.1
y=new D.I("near",v,0.1,t,[P.q])
y.b=!0
t.a9(y)}y=t.d
if(!$.m.$2(y,2000)){v=t.d
t.d=2000
y=new D.I("far",v,2000,t,[P.q])
y.b=!0
t.a9(y)}y=u.a
if(y!==t){if(y!=null){y=y.gw()
y.toString
x=H.d(u.gT(),{func:1,ret:-1,args:[D.r]})
C.a.J(y.a,x)}v=u.a
u.a=t
y=t.gw()
y.toString
x=H.d(u.gT(),{func:1,ret:-1,args:[D.r]})
C.a.h(y.a,x)
y=new D.I("camera",v,u.a,u,[X.cM])
y.b=!0
u.a1(y)}s=new X.eT()
y=new V.bk(0,0,0,1)
s.a=y
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
y=V.dd(0,0,1,1)
s.r=y
y=u.b
if(y!==s){if(y!=null){y=y.gw()
y.toString
x=H.d(u.gT(),{func:1,ret:-1,args:[D.r]})
C.a.J(y.a,x)}v=u.b
u.b=s
y=s.gw()
y.toString
x=H.d(u.gT(),{func:1,ret:-1,args:[D.r]})
C.a.h(y.a,x)
y=new D.I("target",v,u.b,u,[X.dl])
y.b=!0
u.a1(y)}u.sbw(null)
y=u.d
x=H.t(y,0)
H.v(z,x)
x=[x]
if(y.cp(H.f([z],x))){w=y.a
r=w.length
C.a.h(w,z)
y.c8(r,H.f([z],x))}y=new O.eB()
y.d=1
y.e=10
q=new V.bj(1,1,1)
y.b=q
x=[V.bj]
w=new D.I("objectColor",null,q,y,x)
w.b=!0
y.ak(w)
q=new V.bj(0,0,0)
if(!J.L(y.c,q)){v=y.c
y.c=q
x=new D.I("fogColor",v,q,y,x)
x.b=!0
y.ak(x)}x=y.d
if(!$.m.$2(x,3)){v=y.d
y.d=3
x=new D.I("fogStart",v,3,y,[P.q])
x.b=!0
y.ak(x)}x=y.e
if(!$.m.$2(x,6)){v=y.e
y.e=6
x=new D.I("fogStop",v,6,y,[P.q])
x.b=!0
y.ak(x)}u.sbw(y)
y=u.a
p=V.ai(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
x=new U.cQ()
x.a=p
y.sag(x)
o=document.getElementById("threeDart")
if(o==null)H.Y(P.a2("Failed to find an element with the identifier, threeDart."))
n=E.h2(o,!0,!0,!0,!1)
y=n.d
if(y!==u){if(y!=null){y=y.gw()
y.toString
x=H.d(n.gaT(),{func:1,ret:-1,args:[D.r]})
C.a.J(y.a,x)}n.d=u
y=u.gw()
y.toString
x=H.d(n.gaT(),{func:1,ret:-1,args:[D.r]})
C.a.h(y.a,x)
n.bR()}B.jz(n)}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d0.prototype
return J.f1.prototype}if(typeof a=="string")return J.bH.prototype
if(a==null)return J.f2.prototype
if(typeof a=="boolean")return J.f0.prototype
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.a)return a
return J.bR(a)}
J.bw=function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.a)return a
return J.bR(a)}
J.cv=function(a){if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.a)return a
return J.bR(a)}
J.jd=function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bK.prototype
return a}
J.je=function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bK.prototype
return a}
J.bx=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.a)return a
return J.bR(a)}
J.L=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).p(a,b)}
J.ef=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jd(a).a8(a,b)}
J.cC=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.je(a).n(a,b)}
J.eg=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jn(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bw(a).k(a,b)}
J.eh=function(a,b,c,d){return J.bx(a).bd(a,b,c,d)}
J.bU=function(a,b,c){return J.bw(a).cQ(a,b,c)}
J.cD=function(a,b){return J.cv(a).v(a,b)}
J.ei=function(a,b){return J.cv(a).C(a,b)}
J.ae=function(a){return J.B(a).gF(a)}
J.bz=function(a){return J.cv(a).gI(a)}
J.aI=function(a){return J.bw(a).gj(a)}
J.a1=function(a){return J.B(a).i(a)}
var $=I.p
C.f=W.bX.prototype
C.i=W.ew.prototype
C.q=J.j.prototype
C.a=J.bn.prototype
C.b=J.d0.prototype
C.d=J.bo.prototype
C.e=J.bH.prototype
C.y=J.bp.prototype
C.z=W.fq.prototype
C.l=J.fw.prototype
C.h=J.bK.prototype
C.m=W.bb.prototype
C.n=W.hE.prototype
C.o=new P.ft()
C.c=new P.ir()
C.p=new P.aN(5e6)
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
$.a5=0
$.aJ=null
$.cH=null
$.co=!1
$.e7=null
$.e1=null
$.ed=null
$.bP=null
$.bS=null
$.cx=null
$.aB=null
$.be=null
$.bf=null
$.cp=!1
$.D=C.c
$.cW=null
$.cV=null
$.cU=null
$.cT=null
$.m=V.fk()
$.eE="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.eD="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.d9=null
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
I.$lazy(y,x,w)}})(["cS","$get$cS",function(){return H.e6("_$dart_dartClosure")},"c1","$get$c1",function(){return H.e6("_$dart_js")},"dq","$get$dq",function(){return H.a8(H.bJ({
toString:function(){return"$receiver$"}}))},"dr","$get$dr",function(){return H.a8(H.bJ({$method$:null,
toString:function(){return"$receiver$"}}))},"ds","$get$ds",function(){return H.a8(H.bJ(null))},"dt","$get$dt",function(){return H.a8(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dx","$get$dx",function(){return H.a8(H.bJ(void 0))},"dy","$get$dy",function(){return H.a8(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dv","$get$dv",function(){return H.a8(H.dw(null))},"du","$get$du",function(){return H.a8(function(){try{null.$method$}catch(z){return z.message}}())},"dA","$get$dA",function(){return H.a8(H.dw(void 0))},"dz","$get$dz",function(){return H.a8(function(){try{(void 0).$method$}catch(z){return z.message}}())},"ck","$get$ck",function(){return P.hF()},"bg","$get$bg",function(){return[]},"cR","$get$cR",function(){return{}},"dF","$get$dF",function(){return Z.a_(0)},"dD","$get$dD",function(){return Z.a_(511)},"ab","$get$ab",function(){return Z.a_(1)},"aw","$get$aw",function(){return Z.a_(2)},"av","$get$av",function(){return Z.a_(4)},"ax","$get$ax",function(){return Z.a_(8)},"ay","$get$ay",function(){return Z.a_(16)},"b9","$get$b9",function(){return Z.a_(32)},"ba","$get$ba",function(){return Z.a_(64)},"dE","$get$dE",function(){return Z.a_(96)},"az","$get$az",function(){return Z.a_(128)},"au","$get$au",function(){return Z.a_(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.w},{func:1,ret:-1},{func:1,ret:-1,opt:[D.r]},{func:1,ret:-1,args:[W.W]},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:-1,args:[P.K,[P.h,E.ag]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.w,args:[D.r]},{func:1,ret:-1,args:[W.at]},{func:1,ret:P.w,args:[F.a6]},{func:1,ret:P.k,args:[P.K]},{func:1,ret:P.w,args:[,]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.q},{func:1,ret:P.w,args:[,,]},{func:1,args:[,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.w,args:[{func:1,ret:-1}]},{func:1,ret:P.am,args:[W.z]},{func:1,ret:W.Q,args:[W.z]},{func:1,args:[,P.k]},{func:1,args:[P.k]},{func:1,ret:-1,args:[P.a],opt:[P.a3]},{func:1,ret:P.w,args:[P.G]},{func:1,ret:P.am,args:[P.q,P.q]},{func:1,ret:P.w,args:[,],opt:[,]},{func:1,ret:-1,args:[W.bb]},{func:1,ret:[P.ac,,],args:[,]},{func:1,ret:V.ak,args:[P.q]},{func:1,ret:P.w,args:[F.aa,P.q,P.q]},{func:1,ret:P.w,args:[W.W]},{func:1,ret:P.w,args:[P.as]},{func:1,ret:P.w,args:[{func:1,ret:-1,args:[D.r]}]}]
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
if(x==y)H.jD(d||a)
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
Isolate.ct=a.ct
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
if(typeof dartMainRunner==="function")dartMainRunner(Y.ea,[])
else Y.ea([])})})()
//# sourceMappingURL=test.dart.js.map
