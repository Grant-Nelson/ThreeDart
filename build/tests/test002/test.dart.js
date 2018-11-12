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
b6.$isc=b5
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isr)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var d=supportsDirectProtoAccess&&b2!="c"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="u"){processStatics(init.statics[b2]=b3.u,b4)
delete b3.u}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dk(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dm=function(){}
var dart=[["","",,H,{"^":"",ox:{"^":"c;a"}}],["","",,J,{"^":"",
Q:function(a){return void 0},
ds:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cy:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dq==null){H.mU()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.bZ("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cO()]
if(v!=null)return v
v=H.n_(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.u
if(y===Object.prototype)return C.u
if(typeof w=="function"){Object.defineProperty(w,$.$get$cO(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
r:{"^":"c;",
B:function(a,b){return a===b},
gW:function(a){return H.bA(a)},
i:["du",function(a){return"Instance of '"+H.b6(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
ik:{"^":"r;",
i:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isO:1},
e9:{"^":"r;",
B:function(a,b){return null==b},
i:function(a){return"null"},
gW:function(a){return 0},
$isD:1},
cP:{"^":"r;",
gW:function(a){return 0},
i:["dv",function(a){return String(a)}]},
iT:{"^":"cP;"},
c_:{"^":"cP;"},
bU:{"^":"cP;",
i:function(a){var z=a[$.$get$dS()]
if(z==null)return this.dv(a)
return"JavaScript function for "+H.k(J.aa(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscL:1},
b2:{"^":"r;$ti",
h:function(a,b){H.v(b,H.u(a,0))
if(!!a.fixed$length)H.J(P.x("add"))
a.push(b)},
fW:function(a,b){if(!!a.fixed$length)H.J(P.x("removeAt"))
if(b<0||b>=a.length)throw H.a(P.bX(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var z
if(!!a.fixed$length)H.J(P.x("remove"))
for(z=0;z<a.length;++z)if(J.I(a[z],b)){a.splice(z,1)
return!0}return!1},
v:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aY(a))}},
E:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.k(a[y]))
return z.join(b)},
fB:function(a){return this.E(a,"")},
fq:function(a,b,c,d){var z,y,x
H.v(b,d)
H.h(c,{func:1,ret:d,args:[d,H.u(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aY(a))}return y},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bj:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a1(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a1(c,b,a.length,"end",null))
if(b===c)return H.i([],[H.u(a,0)])
return H.i(a.slice(b,c),[H.u(a,0)])},
gfn:function(a){if(a.length>0)return a[0]
throw H.a(H.e6())},
gas:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.e6())},
ar:function(a,b,c,d){var z
H.v(d,H.u(a,0))
if(!!a.immutable$list)H.J(P.x("fill range"))
P.aJ(b,c,a.length,null,null,null)
for(z=b;z.L(0,c);z=z.t(0,1))a[z]=d},
fb:function(a,b){var z
for(z=0;z<a.length;++z)if(J.I(a[z],b))return!0
return!1},
i:function(a){return P.cM(a,"[","]")},
ga2:function(a){return new J.aG(a,a.length,0,[H.u(a,0)])},
gW:function(a){return H.bA(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.J(P.x("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.c8(b,"newLength",null))
if(b<0)throw H.a(P.a1(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b>=a.length||b<0)throw H.a(H.aD(a,b))
return a[b]},
m:function(a,b,c){H.A(b)
H.v(c,H.u(a,0))
if(!!a.immutable$list)H.J(P.x("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b>=a.length||b<0)throw H.a(H.aD(a,b))
a[b]=c},
$isl:1,
$isf:1,
u:{
ij:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.c8(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a1(a,0,4294967295,"length",null))
return J.e7(new Array(a),b)},
e7:function(a,b){return J.bu(H.i(a,[b]))},
bu:function(a){H.bN(a)
a.fixed$length=Array
return a}}},
ow:{"^":"b2;$ti"},
aG:{"^":"c;a,b,c,0d,$ti",
gS:function(a){return this.d},
J:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bS:{"^":"r;",
bb:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.x(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.x(""+a+".round()"))},
dh:function(a,b){var z,y
if(b>20)throw H.a(P.a1(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
aX:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Z(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.J(P.x("Unexpected toString result: "+z))
x=J.aE(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.l("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.ai(b))
return a*b},
b0:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dz:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cF(a,b)},
aC:function(a,b){return(a|0)===a?a/b|0:this.cF(a,b)},
cF:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.x("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
aB:function(a,b){var z
if(a>0)z=this.cD(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eO:function(a,b){if(b<0)throw H.a(H.ai(b))
return this.cD(a,b)},
cD:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.a(H.ai(b))
return a<b},
$isq:1,
$isa3:1},
e8:{"^":"bS;",$isn:1},
il:{"^":"bS;"},
bT:{"^":"r;",
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b<0)throw H.a(H.aD(a,b))
if(b>=a.length)H.J(H.aD(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.a(H.aD(a,b))
return a.charCodeAt(b)},
t:function(a,b){H.P(b)
if(typeof b!=="string")throw H.a(P.c8(b,null,null))
return a+b},
aK:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.J(H.ai(b))
c=P.aJ(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.J(H.ai(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a8:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.J(H.ai(c))
if(typeof c!=="number")return c.L()
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a7:function(a,b){return this.a8(a,b,0)},
w:function(a,b,c){H.A(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.J(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.L()
if(b<0)throw H.a(P.bX(b,null,null))
if(b>c)throw H.a(P.bX(b,null,null))
if(c>a.length)throw H.a(P.bX(c,null,null))
return a.substring(b,c)},
at:function(a,b){return this.w(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fM:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
ab:function(a,b){return this.fM(a,b," ")},
fN:function(a,b,c){var z=b-a.length
if(z<=0)return a
return a+this.l(c,z)},
d0:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
d_:function(a,b){return this.d0(a,b,0)},
fc:function(a,b,c){if(c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
return H.fX(a,b,c)},
i:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$isen:1,
$isj:1}}],["","",,H,{"^":"",
cz:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
e6:function(){return new P.jv("No element")},
a5:{"^":"k0;a",
gj:function(a){return this.a.length},
k:function(a,b){return C.b.Z(this.a,b)},
$ascl:function(){return[P.n]},
$ast:function(){return[P.n]},
$asl:function(){return[P.n]},
$asf:function(){return[P.n]}},
hA:{"^":"l;"},
eg:{"^":"c;a,b,c,0d,$ti",
gS:function(a){return this.d},
J:function(){var z,y,x,w
z=this.a
y=J.aE(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aY(z))
w=this.c
if(typeof x!=="number")return H.m(x)
if(w>=x){this.d=null
return!1}this.d=y.K(z,w);++this.c
return!0}},
iG:{"^":"l;a,b,$ti",
ga2:function(a){return new H.iH(J.bq(this.a),this.b,this.$ti)},
gj:function(a){return J.as(this.a)},
K:function(a,b){return this.b.$1(J.cE(this.a,b))},
$asl:function(a,b){return[b]}},
iH:{"^":"cN;0a,b,c,$ti",
J:function(){var z=this.b
if(z.J()){this.a=this.c.$1(z.gS(z))
return!0}this.a=null
return!1},
gS:function(a){return this.a},
$ascN:function(a,b){return[b]}},
kx:{"^":"l;a,b,$ti",
ga2:function(a){return new H.ky(J.bq(this.a),this.b,this.$ti)}},
ky:{"^":"cN;a,b,$ti",
J:function(){var z,y
for(z=this.a,y=this.b;z.J();)if(y.$1(z.gS(z)))return!0
return!1},
gS:function(a){var z=this.a
return z.gS(z)}},
cb:{"^":"c;$ti"},
cl:{"^":"c;$ti",
m:function(a,b,c){H.A(b)
H.v(c,H.ax(this,"cl",0))
throw H.a(P.x("Cannot modify an unmodifiable list"))},
ar:function(a,b,c,d){H.v(d,H.ax(this,"cl",0))
throw H.a(P.x("Cannot modify an unmodifiable list"))}},
k0:{"^":"cd+cl;"}}],["","",,H,{"^":"",
hp:function(){throw H.a(P.x("Cannot modify unmodifiable Map"))},
mN:function(a){return init.types[H.A(a)]},
fO:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.Q(a).$isG},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aa(a)
if(typeof z!=="string")throw H.a(H.ai(a))
return z},
bA:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
j1:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.P(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
b6:function(a){var z,y,x,w,v,u,t,s,r
z=J.Q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.C||!!J.Q(a).$isc_){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.I(w,0)===36)w=C.b.at(w,1)
r=H.dr(H.bN(H.aV(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iU:function(){if(!!self.location)return self.location.href
return},
ep:function(a){var z,y,x,w,v
H.bN(a)
z=J.as(a)
if(typeof z!=="number")return z.dq()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
j2:function(a){var z,y,x,w
z=H.i([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.E)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ai(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.c.aB(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ai(w))}return H.ep(z)},
eq:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ai(x))
if(x<0)throw H.a(H.ai(x))
if(x>65535)return H.j2(a)}return H.ep(a)},
j3:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.dq()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cg:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.aB(z,10))>>>0,56320|z&1023)}}throw H.a(P.a1(a,0,1114111,null,null))},
ah:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j0:function(a){return a.b?H.ah(a).getUTCFullYear()+0:H.ah(a).getFullYear()+0},
iZ:function(a){return a.b?H.ah(a).getUTCMonth()+1:H.ah(a).getMonth()+1},
iV:function(a){return a.b?H.ah(a).getUTCDate()+0:H.ah(a).getDate()+0},
iW:function(a){return a.b?H.ah(a).getUTCHours()+0:H.ah(a).getHours()+0},
iY:function(a){return a.b?H.ah(a).getUTCMinutes()+0:H.ah(a).getMinutes()+0},
j_:function(a){return a.b?H.ah(a).getUTCSeconds()+0:H.ah(a).getSeconds()+0},
iX:function(a){return a.b?H.ah(a).getUTCMilliseconds()+0:H.ah(a).getMilliseconds()+0},
m:function(a){throw H.a(H.ai(a))},
d:function(a,b){if(a==null)J.as(a)
throw H.a(H.aD(a,b))},
aD:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.A(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.m(z)
y=b>=z}else y=!0
if(y)return P.U(b,a,"index",null,z)
return P.bX(b,"index",null)},
mG:function(a,b,c){if(a>c)return new P.ch(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ch(a,c,!0,b,"end","Invalid value")
return new P.aF(!0,b,"end",null)},
ai:function(a){return new P.aF(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.em()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fZ})
z.name=""}else z.toString=H.fZ
return z},
fZ:function(){return J.aa(this.dartException)},
J:function(a){throw H.a(a)},
E:function(a){throw H.a(P.aY(a))},
ar:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.o4(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.aB(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cQ(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.el(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eL()
u=$.$get$eM()
t=$.$get$eN()
s=$.$get$eO()
r=$.$get$eS()
q=$.$get$eT()
p=$.$get$eQ()
$.$get$eP()
o=$.$get$eV()
n=$.$get$eU()
m=v.aa(y)
if(m!=null)return z.$1(H.cQ(H.P(y),m))
else{m=u.aa(y)
if(m!=null){m.method="call"
return z.$1(H.cQ(H.P(y),m))}else{m=t.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=r.aa(y)
if(m==null){m=q.aa(y)
if(m==null){m=p.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=o.aa(y)
if(m==null){m=n.aa(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.el(H.P(y),m))}}return z.$1(new H.k_(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ex()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ex()
return a},
bo:function(a){var z
if(a==null)return new H.fj(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fj(a)},
mK:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mW:function(a,b,c,d,e,f){H.e(a,"$iscL")
switch(H.A(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.T("Unsupported number of arguments for wrapped closure"))},
bn:function(a,b){var z
H.A(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mW)
a.$identity=z
return z},
hl:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.Q(d).$isf){z.$reflectionInfo=d
x=H.j9(z).r}else x=d
w=e?Object.create(new H.jw().constructor.prototype):Object.create(new H.cG(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ay
if(typeof u!=="number")return u.t()
$.ay=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dM(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mN,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dE:H.cH
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dM(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hi:function(a,b,c,d){var z=H.cH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dM:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hk(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hi(y,!w,z,b)
if(y===0){w=$.ay
if(typeof w!=="number")return w.t()
$.ay=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.br
if(v==null){v=H.c9("self")
$.br=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ay
if(typeof w!=="number")return w.t()
$.ay=w+1
t+=w
w="return function("+t+"){return this."
v=$.br
if(v==null){v=H.c9("self")
$.br=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
hj:function(a,b,c,d){var z,y
z=H.cH
y=H.dE
switch(b?-1:a){case 0:throw H.a(H.jj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hk:function(a,b){var z,y,x,w,v,u,t,s
z=$.br
if(z==null){z=H.c9("self")
$.br=z}y=$.dD
if(y==null){y=H.c9("receiver")
$.dD=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hj(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.ay
if(typeof y!=="number")return y.t()
$.ay=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.ay
if(typeof y!=="number")return y.t()
$.ay=y+1
return new Function(z+y+"}")()},
dk:function(a,b,c,d,e,f,g){var z,y
z=J.bu(H.bN(b))
H.A(c)
y=!!J.Q(d).$isf?J.bu(d):d
return H.hl(a,z,c,y,!!e,f,g)},
P:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aw(a,"String"))},
mI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"double"))},
nU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"num"))},
fG:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aw(a,"bool"))},
A:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aw(a,"int"))},
fV:function(a,b){throw H.a(H.aw(a,H.P(b).substring(3)))},
nW:function(a,b){var z=J.aE(b)
throw H.a(H.hf(a,z.w(b,3,z.gj(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.fV(a,b)},
af:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else z=!0
if(z)return a
H.nW(a,b)},
bN:function(a){if(a==null)return a
if(!!J.Q(a).$isf)return a
throw H.a(H.aw(a,"List"))},
fS:function(a,b){if(a==null)return a
if(!!J.Q(a).$isf)return a
if(J.Q(a)[b])return a
H.fV(a,b)},
fJ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.A(z)]
else return a.$S()}return},
c1:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fJ(J.Q(a))
if(z==null)return!1
y=H.fN(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dg)return a
$.dg=!0
try{if(H.c1(a,b))return a
z=H.c4(b)
y=H.aw(a,z)
throw H.a(y)}finally{$.dg=!1}},
dn:function(a,b){if(a!=null&&!H.dj(a,b))H.J(H.aw(a,H.c4(b)))
return a},
fB:function(a){var z
if(a instanceof H.b){z=H.fJ(J.Q(a))
if(z!=null)return H.c4(z)
return"Closure"}return H.b6(a)},
o1:function(a){throw H.a(new P.ht(H.P(a)))},
fK:function(a){return init.getIsolateTag(a)},
i:function(a,b){a.$ti=b
return a},
aV:function(a){if(a==null)return
return a.$ti},
pt:function(a,b,c){return H.bp(a["$as"+H.k(c)],H.aV(b))},
aU:function(a,b,c,d){var z
H.P(c)
H.A(d)
z=H.bp(a["$as"+H.k(c)],H.aV(b))
return z==null?null:z[d]},
ax:function(a,b,c){var z
H.P(b)
H.A(c)
z=H.bp(a["$as"+H.k(b)],H.aV(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.A(b)
z=H.aV(a)
return z==null?null:z[b]},
c4:function(a){var z=H.aW(a,null)
return z},
aW:function(a,b){var z,y
H.w(b,"$isf",[P.j],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dr(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.A(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.k(b[y])}if('func' in a)return H.mp(a,b)
if('futureOr' in a)return"FutureOr<"+H.aW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mp:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.w(b,"$isf",z,"$asf")
if("bounds" in a){y=a.bounds
if(b==null){b=H.i([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.t(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aW(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aW(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aW(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aW(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mJ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.P(z[l])
n=n+m+H.aW(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dr:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isf",[P.j],"$asf")
if(a==null)return""
z=new P.aA("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aW(u,c)}v="<"+z.i(0)+">"
return v},
bp:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bM:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aV(a)
y=J.Q(a)
if(y[b]==null)return!1
return H.fE(H.bp(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.P(b)
H.bN(c)
H.P(d)
if(a==null)return a
z=H.bM(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dr(c,0,null)
throw H.a(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fE:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
pr:function(a,b,c){return a.apply(b,H.bp(J.Q(b)["$as"+H.k(c)],H.aV(b)))},
fP:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="D"||a===-1||a===-2||H.fP(z)}return!1},
dj:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="c"||b.builtin$cls==="D"||b===-1||b===-2||H.fP(b)
return z}z=b==null||b===-1||b.builtin$cls==="c"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dj(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c1(a,b)}y=J.Q(a).constructor
x=H.aV(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aq(y,null,b,null)
return z},
v:function(a,b){if(a!=null&&!H.dj(a,b))throw H.a(H.aw(a,H.c4(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.fN(a,b,c,d)
if('func' in a)return c.builtin$cls==="cL"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bt" in y.prototype))return!1
w=y.prototype["$as"+"bt"]
v=H.bp(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c4(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fE(H.bp(r,z),b,u,d)},
fN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aq(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aq(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aq(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aq(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nT(m,b,l,d)},
nT:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
ps:function(a,b,c){Object.defineProperty(a,H.P(b),{value:c,enumerable:false,writable:true,configurable:true})},
n_:function(a){var z,y,x,w,v,u
z=H.P($.fL.$1(a))
y=$.cw[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.P($.fD.$2(a,z))
if(z!=null){y=$.cw[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cB(x)
$.cw[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cA[z]=x
return x}if(v==="-"){u=H.cB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fU(a,x)
if(v==="*")throw H.a(P.bZ(z))
if(init.leafTags[z]===true){u=H.cB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fU(a,x)},
fU:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ds(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cB:function(a){return J.ds(a,!1,null,!!a.$isG)},
nS:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cB(z)
else return J.ds(z,c,null,null)},
mU:function(){if(!0===$.dq)return
$.dq=!0
H.mV()},
mV:function(){var z,y,x,w,v,u,t,s
$.cw=Object.create(null)
$.cA=Object.create(null)
H.mQ()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fW.$1(v)
if(u!=null){t=H.nS(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mQ:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.bm(C.E,H.bm(C.J,H.bm(C.o,H.bm(C.o,H.bm(C.I,H.bm(C.F,H.bm(C.G(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fL=new H.mR(v)
$.fD=new H.mS(u)
$.fW=new H.mT(t)},
bm:function(a,b){return a(b)||b},
fX:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fY:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ho:{"^":"c;$ti",
i:function(a){return P.cR(this)},
m:function(a,b,c){H.v(b,H.u(this,0))
H.v(c,H.u(this,1))
return H.hp()},
$isL:1},
hq:{"^":"ho;a,b,c,$ti",
gj:function(a){return this.a},
b9:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.b9(0,b))return
return this.ct(b)},
ct:function(a){return this.b[H.P(a)]},
v:function(a,b){var z,y,x,w,v
z=H.u(this,1)
H.h(b,{func:1,ret:-1,args:[H.u(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.v(this.ct(v),z))}}},
j8:{"^":"c;a,b,c,d,e,f,r,0x",u:{
j9:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bu(z)
y=z[0]
x=z[1]
return new H.j8(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jK:{"^":"c;a,b,c,d,e,f",
aa:function(a){var z,y,x
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
u:{
aB:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.i([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cj:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eR:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iQ:{"^":"a6;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
u:{
el:function(a,b){return new H.iQ(a,b==null?null:b.method)}}},
ip:{"^":"a6;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
u:{
cQ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ip(a,y,z?null:b.receiver)}}},
k_:{"^":"a6;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
o4:{"^":"b:23;a",
$1:function(a){if(!!J.Q(a).$isa6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fj:{"^":"c;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isav:1},
b:{"^":"c;",
i:function(a){return"Closure '"+H.b6(this).trim()+"'"},
gdm:function(){return this},
$iscL:1,
gdm:function(){return this}},
eD:{"^":"b;"},
jw:{"^":"eD;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cG:{"^":"eD;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cG))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.bA(this.a)
else y=typeof z!=="object"?J.bO(z):H.bA(z)
return(y^H.bA(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.b6(z)+"'")},
u:{
cH:function(a){return a.a},
dE:function(a){return a.c},
c9:function(a){var z,y,x,w,v
z=new H.cG("self","target","receiver","name")
y=J.bu(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jL:{"^":"a6;a",
i:function(a){return this.a},
u:{
aw:function(a,b){return new H.jL("TypeError: "+H.k(P.ca(a))+": type '"+H.fB(a)+"' is not a subtype of type '"+b+"'")}}},
he:{"^":"a6;a",
i:function(a){return this.a},
u:{
hf:function(a,b){return new H.he("CastError: "+H.k(P.ca(a))+": type '"+H.fB(a)+"' is not a subtype of type '"+b+"'")}}},
ji:{"^":"a6;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
u:{
jj:function(a){return new H.ji(a)}}},
aH:{"^":"iD;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gaj:function(a){return new H.it(this,[H.u(this,0)])},
b9:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cq(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cq(y,b)}else return this.fv(b)},
fv:function(a){var z=this.d
if(z==null)return!1
return this.bT(this.bq(z,this.bS(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b3(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b3(w,b)
x=y==null?null:y.b
return x}else return this.fw(b)},
fw:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bq(z,this.bS(a))
x=this.bT(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.v(b,H.u(this,0))
H.v(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bv()
this.b=z}this.ci(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bv()
this.c=y}this.ci(y,b,c)}else this.fz(b,c)},
fz:function(a,b){var z,y,x,w
H.v(a,H.u(this,0))
H.v(b,H.u(this,1))
z=this.d
if(z==null){z=this.bv()
this.d=z}y=this.bS(a)
x=this.bq(z,y)
if(x==null)this.bB(z,y,[this.bw(a,b)])
else{w=this.bT(x,a)
if(w>=0)x[w].b=b
else x.push(this.bw(a,b))}},
v:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aY(this))
z=z.c}},
ci:function(a,b,c){var z
H.v(b,H.u(this,0))
H.v(c,H.u(this,1))
z=this.b3(a,b)
if(z==null)this.bB(a,b,this.bw(b,c))
else z.b=c},
e9:function(){this.r=this.r+1&67108863},
bw:function(a,b){var z,y
z=new H.is(H.v(a,H.u(this,0)),H.v(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.e9()
return z},
bS:function(a){return J.bO(a)&0x3ffffff},
bT:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].a,b))return y
return-1},
i:function(a){return P.cR(this)},
b3:function(a,b){return a[b]},
bq:function(a,b){return a[b]},
bB:function(a,b,c){a[b]=c},
dZ:function(a,b){delete a[b]},
cq:function(a,b){return this.b3(a,b)!=null},
bv:function(){var z=Object.create(null)
this.bB(z,"<non-identifier-key>",z)
this.dZ(z,"<non-identifier-key>")
return z},
$ised:1},
is:{"^":"c;a,b,0c,0d"},
it:{"^":"hA;a,$ti",
gj:function(a){return this.a.a},
ga2:function(a){var z,y
z=this.a
y=new H.iu(z,z.r,this.$ti)
y.c=z.e
return y}},
iu:{"^":"c;a,b,0c,0d,$ti",
gS:function(a){return this.d},
J:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mR:{"^":"b:23;a",
$1:function(a){return this.a(a)}},
mS:{"^":"b:30;a",
$2:function(a,b){return this.a(a,b)}},
mT:{"^":"b:47;a",
$1:function(a){return this.a(H.P(a))}},
im:{"^":"c;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isen:1,
$isja:1,
u:{
io:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a_("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mJ:function(a){return J.e7(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cr:function(a){return a},
iM:function(a){return new Int8Array(a)},
aC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aD(b,a))},
mj:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mG(a,b,c))
return b},
ek:{"^":"r;",$isek:1,"%":"ArrayBuffer"},
cV:{"^":"r;",$iscV:1,"%":"DataView;ArrayBufferView;cU|fd|fe|iN|ff|fg|aR"},
cU:{"^":"cV;",
gj:function(a){return a.length},
$isG:1,
$asG:I.dm},
iN:{"^":"fe;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
m:function(a,b,c){H.A(b)
H.mI(c)
H.aC(b,a,a.length)
a[b]=c},
$ascb:function(){return[P.q]},
$ast:function(){return[P.q]},
$isl:1,
$asl:function(){return[P.q]},
$isf:1,
$asf:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
aR:{"^":"fg;",
m:function(a,b,c){H.A(b)
H.A(c)
H.aC(b,a,a.length)
a[b]=c},
$ascb:function(){return[P.n]},
$ast:function(){return[P.n]},
$isl:1,
$asl:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]}},
oG:{"^":"aR;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oH:{"^":"aR;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oI:{"^":"aR;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oJ:{"^":"aR;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oK:{"^":"aR;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oL:{"^":"aR;",
gj:function(a){return a.length},
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
cW:{"^":"aR;",
gj:function(a){return a.length},
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
bj:function(a,b,c){return new Uint8Array(a.subarray(b,H.mj(b,c,a.length)))},
$iscW:1,
$isS:1,
"%":";Uint8Array"},
fd:{"^":"cU+t;"},
fe:{"^":"fd+cb;"},
ff:{"^":"cU+t;"},
fg:{"^":"ff+cb;"}}],["","",,P,{"^":"",
kA:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mw()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bn(new P.kC(z),1)).observe(y,{childList:true})
return new P.kB(z,y,x)}else if(self.setImmediate!=null)return P.mx()
return P.my()},
pg:[function(a){self.scheduleImmediate(H.bn(new P.kD(H.h(a,{func:1,ret:-1})),0))},"$1","mw",4,0,15],
ph:[function(a){self.setImmediate(H.bn(new P.kE(H.h(a,{func:1,ret:-1})),0))},"$1","mx",4,0,15],
pi:[function(a){P.d2(C.m,H.h(a,{func:1,ret:-1}))},"$1","my",4,0,15],
d2:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.c.aC(a.a,1000)
return P.lD(z<0?0:z,b)},
eG:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bd]})
z=C.c.aC(a.a,1000)
return P.lE(z<0?0:z,b)},
ms:function(a,b){if(H.c1(a,{func:1,args:[P.c,P.av]}))return b.fV(a,null,P.c,P.av)
if(H.c1(a,{func:1,args:[P.c]}))return H.h(a,{func:1,ret:null,args:[P.c]})
throw H.a(P.c8(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mr:function(){var z,y
for(;z=$.bl,z!=null;){$.bK=null
y=z.b
$.bl=y
if(y==null)$.bJ=null
z.a.$0()}},
pq:[function(){$.dh=!0
try{P.mr()}finally{$.bK=null
$.dh=!1
if($.bl!=null)$.$get$db().$1(P.fF())}},"$0","fF",0,0,7],
fA:function(a){var z=new P.f7(H.h(a,{func:1,ret:-1}))
if($.bl==null){$.bJ=z
$.bl=z
if(!$.dh)$.$get$db().$1(P.fF())}else{$.bJ.b=z
$.bJ=z}},
mv:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bl
if(z==null){P.fA(a)
$.bK=$.bJ
return}y=new P.f7(a)
x=$.bK
if(x==null){y.b=z
$.bK=y
$.bl=y}else{y.b=x.b
x.b=y
$.bK=y
if(y.b==null)$.bJ=y}},
nX:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.V
if(C.e===y){P.ct(null,null,C.e,a)
return}y.toString
P.ct(null,null,y,H.h(y.bI(a),z))},
eF:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.V
if(y===C.e){y.toString
return P.d2(a,b)}return P.d2(a,H.h(y.bI(b),z))},
jH:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bd]}
H.h(b,z)
y=$.V
if(y===C.e){y.toString
return P.eG(a,b)}x=y.cO(b,P.bd)
$.V.toString
return P.eG(a,H.h(x,z))},
cs:function(a,b,c,d,e){var z={}
z.a=d
P.mv(new P.mt(z,e))},
fw:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.V
if(y===c)return d.$0()
$.V=c
z=y
try{y=d.$0()
return y}finally{$.V=z}},
fx:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.V
if(y===c)return d.$1(e)
$.V=c
z=y
try{y=d.$1(e)
return y}finally{$.V=z}},
mu:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.V
if(y===c)return d.$2(e,f)
$.V=c
z=y
try{y=d.$2(e,f)
return y}finally{$.V=z}},
ct:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bI(d):c.f5(d,-1)
P.fA(d)},
kC:{"^":"b:21;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kB:{"^":"b:45;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kD:{"^":"b:0;a",
$0:function(){this.a.$0()}},
kE:{"^":"b:0;a",
$0:function(){this.a.$0()}},
fn:{"^":"c;a,0b,c",
dI:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bn(new P.lG(this,b),0),a)
else throw H.a(P.x("`setTimeout()` not found."))},
dJ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bn(new P.lF(this,a,Date.now(),b),0),a)
else throw H.a(P.x("Periodic timer."))},
$isbd:1,
u:{
lD:function(a,b){var z=new P.fn(!0,0)
z.dI(a,b)
return z},
lE:function(a,b){var z=new P.fn(!1,0)
z.dJ(a,b)
return z}}},
lG:{"^":"b:7;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lF:{"^":"b:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.dz(w,x)}z.c=y
this.d.$1(z)}},
bk:{"^":"c;0a,b,c,d,e,$ti",
fE:function(a){if(this.c!==6)return!0
return this.b.b.c4(H.h(this.d,{func:1,ret:P.O,args:[P.c]}),a.a,P.O,P.c)},
fu:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.c1(z,{func:1,args:[P.c,P.av]}))return H.dn(w.h2(z,a.a,a.b,null,y,P.av),x)
else return H.dn(w.c4(H.h(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
aN:{"^":"c;cE:a<,b,0eH:c<,$ti",
dg:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.V
if(y!==C.e){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ms(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aN(0,$.V,[c])
w=b==null?1:3
this.cj(new P.bk(x,w,a,b,[z,c]))
return x},
h5:function(a,b){return this.dg(a,null,b)},
cj:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbk")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaN")
z=y.a
if(z<4){y.cj(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ct(null,null,z,H.h(new P.kT(this,a),{func:1,ret:-1}))}},
cz:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbk")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaN")
y=u.a
if(y<4){u.cz(a)
return}this.a=y
this.c=u.c}z.a=this.b5(a)
y=this.b
y.toString
P.ct(null,null,y,H.h(new P.kY(z,this),{func:1,ret:-1}))}},
by:function(){var z=H.e(this.c,"$isbk")
this.c=null
return this.b5(z)},
b5:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
co:function(a){var z,y,x,w
z=H.u(this,0)
H.dn(a,{futureOr:1,type:z})
y=this.$ti
x=H.bM(a,"$isbt",y,"$asbt")
if(x){z=H.bM(a,"$isaN",y,null)
if(z)P.fa(a,this)
else P.kU(a,this)}else{w=this.by()
H.v(a,z)
this.a=4
this.c=a
P.bF(this,w)}},
bm:[function(a,b){var z
H.e(b,"$isav")
z=this.by()
this.a=8
this.c=new P.am(a,b)
P.bF(this,z)},function(a){return this.bm(a,null)},"hh","$2","$1","gdW",4,2,39],
$isbt:1,
u:{
kU:function(a,b){var z,y,x
b.a=1
try{a.dg(new P.kV(b),new P.kW(b),null)}catch(x){z=H.ar(x)
y=H.bo(x)
P.nX(new P.kX(b,z,y))}},
fa:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaN")
if(z>=4){y=b.by()
b.a=a.a
b.c=a.c
P.bF(b,y)}else{y=H.e(b.c,"$isbk")
b.a=2
b.c=a
a.cz(y)}},
bF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isam")
y=y.b
u=v.a
t=v.b
y.toString
P.cs(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bF(z.a,b)}y=z.a
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
if(p){H.e(r,"$isam")
y=y.b
u=r.a
t=r.b
y.toString
P.cs(null,null,y,u,t)
return}o=$.V
if(o==null?q!=null:o!==q)$.V=q
else o=null
y=b.c
if(y===8)new P.l0(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.l_(x,b,r).$0()}else if((y&2)!==0)new P.kZ(z,x,b).$0()
if(o!=null)$.V=o
y=x.b
if(!!J.Q(y).$isbt){if(y.a>=4){n=H.e(t.c,"$isbk")
t.c=null
b=t.b5(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fa(y,t)
return}}m=b.b
n=H.e(m.c,"$isbk")
m.c=null
b=m.b5(n)
y=x.a
u=x.b
if(!y){H.v(u,H.u(m,0))
m.a=4
m.c=u}else{H.e(u,"$isam")
m.a=8
m.c=u}z.a=m
y=m}}}},
kT:{"^":"b:0;a,b",
$0:function(){P.bF(this.a,this.b)}},
kY:{"^":"b:0;a,b",
$0:function(){P.bF(this.b,this.a.a)}},
kV:{"^":"b:21;a",
$1:function(a){var z=this.a
z.a=0
z.co(a)}},
kW:{"^":"b:41;a",
$2:function(a,b){this.a.bm(a,H.e(b,"$isav"))},
$1:function(a){return this.$2(a,null)}},
kX:{"^":"b:0;a,b,c",
$0:function(){this.a.bm(this.b,this.c)}},
l0:{"^":"b:7;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.de(H.h(w.d,{func:1}),null)}catch(v){y=H.ar(v)
x=H.bo(v)
if(this.d){w=H.e(this.a.a.c,"$isam").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isam")
else u.b=new P.am(y,x)
u.a=!0
return}if(!!J.Q(z).$isbt){if(z instanceof P.aN&&z.gcE()>=4){if(z.gcE()===8){w=this.b
w.b=H.e(z.geH(),"$isam")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.h5(new P.l1(t),null)
w.a=!1}}},
l1:{"^":"b:55;a",
$1:function(a){return this.a}},
l_:{"^":"b:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.v(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.c4(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ar(t)
y=H.bo(t)
x=this.a
x.b=new P.am(z,y)
x.a=!0}}},
kZ:{"^":"b:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isam")
w=this.c
if(w.fE(z)&&w.e!=null){v=this.b
v.b=w.fu(z)
v.a=!1}}catch(u){y=H.ar(u)
x=H.bo(u)
w=H.e(this.a.a.c,"$isam")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.am(y,x)
s.a=!0}}},
f7:{"^":"c;a,0b"},
d_:{"^":"c;$ti",
gj:function(a){var z,y
z={}
y=new P.aN(0,$.V,[P.n])
z.a=0
this.fD(new P.jz(z,this),!0,new P.jA(z,y),y.gdW())
return y}},
jz:{"^":"b;a,b",
$1:function(a){H.v(a,H.ax(this.b,"d_",0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.ax(this.b,"d_",0)]}}},
jA:{"^":"b:0;a,b",
$0:function(){this.b.co(this.a.a)}},
ez:{"^":"c;$ti"},
jy:{"^":"c;"},
bd:{"^":"c;"},
am:{"^":"c;a,b",
i:function(a){return H.k(this.a)},
$isa6:1},
m7:{"^":"c;",$ispf:1},
mt:{"^":"b:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.em()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lm:{"^":"m7;",
h3:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.e===$.V){a.$0()
return}P.fw(null,null,this,a,-1)}catch(x){z=H.ar(x)
y=H.bo(x)
P.cs(null,null,this,z,H.e(y,"$isav"))}},
h4:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.e===$.V){a.$1(b)
return}P.fx(null,null,this,a,b,-1,c)}catch(x){z=H.ar(x)
y=H.bo(x)
P.cs(null,null,this,z,H.e(y,"$isav"))}},
f5:function(a,b){return new P.lo(this,H.h(a,{func:1,ret:b}),b)},
bI:function(a){return new P.ln(this,H.h(a,{func:1,ret:-1}))},
cO:function(a,b){return new P.lp(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
de:function(a,b){H.h(a,{func:1,ret:b})
if($.V===C.e)return a.$0()
return P.fw(null,null,this,a,b)},
c4:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.V===C.e)return a.$1(b)
return P.fx(null,null,this,a,b,c,d)},
h2:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.V===C.e)return a.$2(b,c)
return P.mu(null,null,this,a,b,c,d,e,f)},
fV:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
lo:{"^":"b;a,b,c",
$0:function(){return this.a.de(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ln:{"^":"b:7;a,b",
$0:function(){return this.a.h3(this.b)}},
lp:{"^":"b;a,b,c",
$1:function(a){var z=this.c
return this.a.h4(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iv:function(a,b,c,d,e){return new H.aH(0,0,[d,e])},
iw:function(a,b,c){H.bN(a)
return H.w(H.mK(a,new H.aH(0,0,[b,c])),"$ised",[b,c],"$ased")},
ee:function(a,b){return new H.aH(0,0,[a,b])},
iy:function(a,b,c,d){return new P.l8(0,0,[d])},
ii:function(a,b,c){var z,y
if(P.di(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bL()
C.a.h(y,a)
try{P.mq(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eA(b,H.fS(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cM:function(a,b,c){var z,y,x
if(P.di(a))return b+"..."+c
z=new P.aA(b)
y=$.$get$bL()
C.a.h(y,a)
try{x=z
x.a=P.eA(x.gax(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gax()+c
y=z.gax()
return y.charCodeAt(0)==0?y:y},
di:function(a){var z,y
for(z=0;y=$.$get$bL(),z<y.length;++z)if(a===y[z])return!0
return!1},
mq:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga2(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.J())return
w=H.k(z.gS(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.J()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gS(z);++x
if(!z.J()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gS(z);++x
for(;z.J();t=s,s=r){r=z.gS(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ef:function(a,b,c){var z=P.iv(null,null,null,b,c)
a.v(0,new P.ix(z,b,c))
return z},
cR:function(a){var z,y,x
z={}
if(P.di(a))return"{...}"
y=new P.aA("")
try{C.a.h($.$get$bL(),a)
x=y
x.a=x.gax()+"{"
z.a=!0
J.dx(a,new P.iE(z,y))
z=y
z.a=z.gax()+"}"}finally{z=$.$get$bL()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gax()
return z.charCodeAt(0)==0?z:z},
l8:{"^":"l2;a,0b,0c,0d,0e,0f,r,$ti",
ga2:function(a){return P.fc(this,this.r,H.u(this,0))},
gj:function(a){return this.a},
h:function(a,b){var z,y
H.v(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dd()
this.b=z}return this.cm(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dd()
this.c=y}return this.cm(y,b)}else return this.dL(0,b)},
dL:function(a,b){var z,y,x
H.v(b,H.u(this,0))
z=this.d
if(z==null){z=P.dd()
this.d=z}y=this.cp(b)
x=z[y]
if(x==null)z[y]=[this.bl(b)]
else{if(this.cu(x,b)>=0)return!1
x.push(this.bl(b))}return!0},
G:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cA(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cA(this.c,b)
else return this.eB(0,b)},
eB:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.e5(z,b)
x=this.cu(y,b)
if(x<0)return!1
this.cG(y.splice(x,1)[0])
return!0},
cm:function(a,b){H.v(b,H.u(this,0))
if(H.e(a[b],"$isdc")!=null)return!1
a[b]=this.bl(b)
return!0},
cA:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdc")
if(z==null)return!1
this.cG(z)
delete a[b]
return!0},
cn:function(){this.r=this.r+1&67108863},
bl:function(a){var z,y
z=new P.dc(H.v(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cn()
return z},
cG:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cn()},
cp:function(a){return J.bO(a)&0x3ffffff},
e5:function(a,b){return a[this.cp(b)]},
cu:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].a,b))return y
return-1},
u:{
dd:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dc:{"^":"c;a,0b,0c"},
l9:{"^":"c;a,b,0c,0d,$ti",
gS:function(a){return this.d},
J:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.v(z.a,H.u(this,0))
this.c=z.b
return!0}}},
u:{
fc:function(a,b,c){var z=new P.l9(a,b,[c])
z.c=a.e
return z}}},
l2:{"^":"jk;"},
ix:{"^":"b:11;a,b,c",
$2:function(a,b){this.a.m(0,H.v(a,this.b),H.v(b,this.c))}},
cd:{"^":"la;",$isl:1,$isf:1},
t:{"^":"c;$ti",
ga2:function(a){return new H.eg(a,this.gj(a),0,[H.aU(this,a,"t",0)])},
K:function(a,b){return this.k(a,b)},
h6:function(a,b){var z,y,x
z=H.i([],[H.aU(this,a,"t",0)])
C.a.sj(z,this.gj(a))
y=0
while(!0){x=this.gj(a)
if(typeof x!=="number")return H.m(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
c6:function(a){return this.h6(a,!0)},
ar:function(a,b,c,d){var z
H.v(d,H.aU(this,a,"t",0))
P.aJ(b,c,this.gj(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cM(a,"[","]")}},
iD:{"^":"aj;"},
iE:{"^":"b:11;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
aj:{"^":"c;$ti",
v:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aU(this,a,"aj",0),H.aU(this,a,"aj",1)]})
for(z=J.bq(this.gaj(a));z.J();){y=z.gS(z)
b.$2(y,this.k(a,y))}},
gj:function(a){return J.as(this.gaj(a))},
i:function(a){return P.cR(a)},
$isL:1},
lL:{"^":"c;$ti",
m:function(a,b,c){H.v(b,H.u(this,0))
H.v(c,H.u(this,1))
throw H.a(P.x("Cannot modify unmodifiable map"))}},
iF:{"^":"c;$ti",
k:function(a,b){return J.dw(this.a,b)},
m:function(a,b,c){J.cC(this.a,H.v(b,H.u(this,0)),H.v(c,H.u(this,1)))},
v:function(a,b){J.dx(this.a,H.h(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gj:function(a){return J.as(this.a)},
i:function(a){return J.aa(this.a)},
$isL:1},
eY:{"^":"lM;a,$ti"},
jm:{"^":"c;$ti",
i:function(a){return P.cM(this,"{","}")},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dy("index"))
if(b<0)H.J(P.a1(b,0,null,"index",null))
for(z=P.fc(this,this.r,H.u(this,0)),y=0;z.J();){x=z.d
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
$isl:1},
jk:{"^":"jm;"},
la:{"^":"c+t;"},
lM:{"^":"iF+lL;$ti"}}],["","",,P,{"^":"",hb:{"^":"bP;a",
fG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aJ(c,d,b.length,null,null,null)
z=$.$get$f8()
if(typeof d!=="number")return H.m(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.I(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cz(C.b.I(b,s))
o=H.cz(C.b.I(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aA("")
l=w.a+=C.b.w(b,x,y)
w.a=l+H.cg(r)
x=s
continue}}throw H.a(P.a_("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.w(b,x,d)
k=l.length
if(v>=0)P.dB(b,u,d,v,t,k)
else{j=C.c.b0(k-1,4)+1
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aK(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dB(b,u,d,v,t,i)
else{j=C.c.b0(i,4)
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aK(b,d,d,j===2?"==":"=")}return b},
$asbP:function(){return[[P.f,P.n],P.j]},
u:{
dB:function(a,b,c,d,e,f){if(C.c.b0(f,4)!==0)throw H.a(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a_("Invalid base64 padding, more than two '=' characters",a,b))}}},hc:{"^":"bs;a",
$asbs:function(){return[[P.f,P.n],P.j]}},bP:{"^":"c;$ti"},bs:{"^":"jy;$ti"},hC:{"^":"bP;",
$asbP:function(){return[P.j,[P.f,P.n]]}},kd:{"^":"hC;a",
gfj:function(){return C.A}},kk:{"^":"bs;",
aQ:function(a,b,c){var z,y,x,w
z=a.length
P.aJ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.m6(0,0,x)
if(w.e4(a,b,z)!==z)w.cJ(J.h3(a,z-1),0)
return C.Q.bj(x,0,w.b)},
bO:function(a){return this.aQ(a,0,null)},
$asbs:function(){return[P.j,[P.f,P.n]]}},m6:{"^":"c;a,b,c",
cJ:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.d(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.d(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.d(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.d(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.d(z,y)
z[y]=128|a&63
return!1}},
e4:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cJ(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.d(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.d(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.d(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.d(z,v)
z[v]=128|w&63}}return x}},ke:{"^":"bs;a",
aQ:function(a,b,c){var z,y,x,w,v
H.w(a,"$isf",[P.n],"$asf")
z=P.kf(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.aJ(b,c,y,null,null,null)
x=new P.aA("")
w=new P.m3(!1,x,!0,0,0,0)
w.aQ(a,b,y)
w.fp(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
bO:function(a){return this.aQ(a,0,null)},
$asbs:function(){return[[P.f,P.n],P.j]},
u:{
kf:function(a,b,c,d){H.w(b,"$isf",[P.n],"$asf")
if(b instanceof Uint8Array)return P.kg(!1,b,c,d)
return},
kg:function(a,b,c,d){var z,y,x
z=$.$get$f1()
if(z==null)return
y=0===c
if(y&&!0)return P.d7(z,b)
x=b.length
d=P.aJ(c,d,x,null,null,null)
if(y&&d===x)return P.d7(z,b)
return P.d7(z,b.subarray(c,d))},
d7:function(a,b){if(P.ki(b))return
return P.kj(a,b)},
kj:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ar(y)}return},
ki:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kh:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ar(y)}return}}},m3:{"^":"c;a,b,c,d,e,f",
fp:function(a,b,c){var z
H.w(b,"$isf",[P.n],"$asf")
if(this.e>0){z=P.a_("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aQ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isf",[P.n],"$asf")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.m5(c)
v=new P.m4(this,b,c,a)
$label0$0:for(u=J.aE(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bf()
if((r&192)!==128){q=P.a_("Bad UTF-8 encoding 0x"+C.c.aX(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.q,q)
if(z<=C.q[q]){q=P.a_("Overlong encoding of 0x"+C.c.aX(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a_("Character outside valid Unicode range: 0x"+C.c.aX(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cg(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.b_()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.L()
if(r<0){m=P.a_("Negative UTF-8 code unit: -0x"+C.c.aX(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a_("Bad UTF-8 encoding 0x"+C.c.aX(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},m5:{"^":"b:54;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isf",[P.n],"$asf")
z=this.a
for(y=J.aE(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bf()
if((w&127)!==w)return x-b}return z-b}},m4:{"^":"b:29;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.bY(this.d,a,b)}}}],["","",,P,{"^":"",
c3:function(a,b,c){var z
H.h(b,{func:1,ret:P.n,args:[P.j]})
z=H.j1(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a_(a,null,null))},
hE:function(a){var z=J.Q(a)
if(!!z.$isb)return z.i(a)
return"Instance of '"+H.b6(a)+"'"},
iz:function(a,b,c,d){var z,y
H.v(b,d)
z=J.ij(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isf",[d],"$asf")},
iA:function(a,b,c){var z,y,x
z=[c]
y=H.i([],z)
for(x=a.ga2(a);x.J();)C.a.h(y,H.v(x.gS(x),c))
if(b)return y
return H.w(J.bu(y),"$isf",z,"$asf")},
bY:function(a,b,c){var z,y
z=P.n
H.w(a,"$isl",[z],"$asl")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb2",[z],"$asb2")
y=a.length
c=P.aJ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.L()
z=c<y}else z=!0
return H.eq(z?C.a.bj(a,b,c):a)}if(!!J.Q(a).$iscW)return H.j3(a,b,P.aJ(b,c,a.length,null,null,null))
return P.jB(a,b,c)},
jB:function(a,b,c){var z,y,x,w
H.w(a,"$isl",[P.n],"$asl")
if(b<0)throw H.a(P.a1(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a1(c,b,J.as(a),null,null))
y=J.bq(a)
for(x=0;x<b;++x)if(!y.J())throw H.a(P.a1(b,0,x,null,null))
w=[]
if(z)for(;y.J();)w.push(y.gS(y))
else for(x=b;x<c;++x){if(!y.J())throw H.a(P.a1(c,b,x,null,null))
w.push(y.gS(y))}return H.eq(w)},
jb:function(a,b,c){return new H.im(a,H.io(a,!1,!0,!1))},
c0:function(){var z=H.iU()
if(z!=null)return P.k5(z,0,null)
throw H.a(P.x("'Uri.base' is not supported"))},
ca:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hE(a)},
T:function(a){return new P.f9(a)},
iB:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.n]})
z=H.i([],[d])
C.a.sj(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dt:function(a){H.nV(a)},
k5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.eZ(b>0||c<c?C.b.w(a,b,c):a,5,null).gdj()
else if(y===32)return P.eZ(C.b.w(a,z,c),0,null).gdj()}x=new Array(8)
x.fixed$length=Array
w=H.i(x,[P.n])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fy(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.h9()
if(v>=b)if(P.fy(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.t()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.L()
if(typeof r!=="number")return H.m(r)
if(q<r)r=q
if(typeof s!=="number")return s.L()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.L()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.L()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a8(a,"..",s)))n=r>s+2&&C.b.a8(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a8(a,"file",b)){if(u<=b){if(!C.b.a8(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.w(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aK(a,s,r,"/");++r;++q;++c}else{a=C.b.w(a,b,s)+"/"+C.b.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a8(a,"http",b)){if(x&&t+3===s&&C.b.a8(a,"80",t+1))if(b===0&&!0){a=C.b.aK(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.w(a,b,t)+C.b.w(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a8(a,"https",b)){if(x&&t+4===s&&C.b.a8(a,"443",t+1))if(b===0&&!0){a=C.b.aK(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.w(a,b,t)+C.b.w(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.w(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lr(a,v,u,t,s,r,q,o)}return P.lN(a,b,c,v,u,t,s,r,q,o)},
f0:function(a,b){var z=P.j
return C.a.fq(H.i(a.split("&"),[z]),P.ee(z,z),new P.k8(b),[P.L,P.j,P.j])},
k3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k4(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Z(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c3(C.b.w(a,v,w),null,null)
if(typeof s!=="number")return s.b_()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c3(C.b.w(a,v,c),null,null)
if(typeof s!=="number")return s.b_()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
f_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k6(a)
y=new P.k7(z,a)
if(a.length<2)z.$1("address is too short")
x=H.i([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Z(a,w)
if(s===58){if(w===b){++w
if(C.b.Z(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gas(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k3(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.c.aB(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
mk:function(){var z,y,x,w,v
z=P.iB(22,new P.mm(),!0,P.S)
y=new P.ml(z)
x=new P.mn()
w=new P.mo()
v=H.e(y.$2(0,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isS")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isS")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isS"),"]",5)
v=H.e(y.$2(9,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isS"),"az",21)
v=H.e(y.$2(21,245),"$isS")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fy:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isf",[P.n],"$asf")
z=$.$get$fz()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
O:{"^":"c;"},
"+bool":0,
an:{"^":"c;a,b",
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&this.b===b.b},
gW:function(a){var z=this.a
return(z^C.c.aB(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hu(H.j0(this))
y=P.bQ(H.iZ(this))
x=P.bQ(H.iV(this))
w=P.bQ(H.iW(this))
v=P.bQ(H.iY(this))
u=P.bQ(H.j_(this))
t=P.hv(H.iX(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
u:{
hu:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hv:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bQ:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"a3;"},
"+double":0,
b_:{"^":"c;a",
l:function(a,b){return new P.b_(C.c.ac(this.a*b))},
L:function(a,b){return C.c.L(this.a,H.e(b,"$isb_").a)},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.b_))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hz()
y=this.a
if(y<0)return"-"+new P.b_(0-y).i(0)
x=z.$1(C.c.aC(y,6e7)%60)
w=z.$1(C.c.aC(y,1e6)%60)
v=new P.hy().$1(y%1e6)
return""+C.c.aC(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
u:{
dY:function(a,b,c,d,e,f){return new P.b_(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hy:{"^":"b:22;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hz:{"^":"b:22;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a6:{"^":"c;"},
em:{"^":"a6;",
i:function(a){return"Throw of null."}},
aF:{"^":"a6;a,b,c,d",
gbo:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbn:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbo()+y+x
if(!this.a)return w
v=this.gbn()
u=P.ca(this.b)
return w+v+": "+H.k(u)},
u:{
c7:function(a){return new P.aF(!1,null,null,a)},
c8:function(a,b,c){return new P.aF(!0,a,b,c)},
dy:function(a){return new P.aF(!1,null,a,"Must not be null")}}},
ch:{"^":"aF;e,f,a,b,c,d",
gbo:function(){return"RangeError"},
gbn:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
u:{
bX:function(a,b,c){return new P.ch(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.ch(b,c,!0,a,d,"Invalid value")},
aJ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.m(a)
if(0<=a){if(typeof c!=="number")return H.m(c)
z=a>c}else z=!0
if(z)throw H.a(P.a1(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.m(c)
z=b>c}else z=!0
if(z)throw H.a(P.a1(b,a,c,"end",f))
return b}return c}}},
hM:{"^":"aF;e,j:f>,a,b,c,d",
gbo:function(){return"RangeError"},
gbn:function(){if(J.h_(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
u:{
U:function(a,b,c,d,e){var z=H.A(e!=null?e:J.as(b))
return new P.hM(b,z,!0,a,c,"Index out of range")}}},
k1:{"^":"a6;a",
i:function(a){return"Unsupported operation: "+this.a},
u:{
x:function(a){return new P.k1(a)}}},
jZ:{"^":"a6;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
u:{
bZ:function(a){return new P.jZ(a)}}},
jv:{"^":"a6;a",
i:function(a){return"Bad state: "+this.a}},
hn:{"^":"a6;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.ca(z))+"."},
u:{
aY:function(a){return new P.hn(a)}}},
iR:{"^":"c;",
i:function(a){return"Out of Memory"},
$isa6:1},
ex:{"^":"c;",
i:function(a){return"Stack Overflow"},
$isa6:1},
ht:{"^":"a6;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f9:{"^":"c;a",
i:function(a){return"Exception: "+this.a}},
hK:{"^":"c;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.k(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.w(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.I(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.Z(w,s)
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
m=""}l=C.b.w(w,o,p)
return y+n+l+m+"\n"+C.b.l(" ",x-o+n.length)+"^\n"},
u:{
a_:function(a,b,c){return new P.hK(a,b,c)}}},
n:{"^":"a3;"},
"+int":0,
l:{"^":"c;$ti",
gj:function(a){var z,y
z=this.ga2(this)
for(y=0;z.J();)++y
return y},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dy("index"))
if(b<0)H.J(P.a1(b,0,null,"index",null))
for(z=this.ga2(this),y=0;z.J();){x=z.gS(z)
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
i:function(a){return P.ii(this,"(",")")}},
cN:{"^":"c;$ti"},
f:{"^":"c;$ti",$isl:1},
"+List":0,
L:{"^":"c;$ti"},
D:{"^":"c;",
gW:function(a){return P.c.prototype.gW.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a3:{"^":"c;"},
"+num":0,
c:{"^":";",
B:function(a,b){return this===b},
gW:function(a){return H.bA(this)},
i:function(a){return"Instance of '"+H.b6(this)+"'"},
toString:function(){return this.i(this)}},
av:{"^":"c;"},
j:{"^":"c;",$isen:1},
"+String":0,
aA:{"^":"c;ax:a<",
gj:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isp4:1,
u:{
eA:function(a,b,c){var z=J.bq(b)
if(!z.J())return a
if(c.length===0){do a+=H.k(z.gS(z))
while(z.J())}else{a+=H.k(z.gS(z))
for(;z.J();)a=a+c+H.k(z.gS(z))}return a}}},
k8:{"^":"b:33;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.w(a,"$isL",[z,z],"$asL")
H.P(b)
y=J.aE(b).d_(b,"=")
if(y===-1){if(b!=="")J.cC(a,P.df(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.w(b,0,y)
w=C.b.at(b,y+1)
z=this.a
J.cC(a,P.df(x,0,x.length,z,!0),P.df(w,0,w.length,z,!0))}return a}},
k4:{"^":"b:34;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv4 address, "+a,this.a,b))}},
k6:{"^":"b:37;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k7:{"^":"b:38;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c3(C.b.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.L()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
co:{"^":"c;bg:a<,b,c,d,d9:e>,f,r,0x,0y,0z,0Q,0ch",
gdk:function(){return this.b},
gbR:function(a){var z=this.c
if(z==null)return""
if(C.b.a7(z,"["))return C.b.w(z,1,z.length-1)
return z},
gbc:function(a){var z=this.d
if(z==null)return P.fo(this.a)
return z},
gc_:function(a){var z=this.f
return z==null?"":z},
gcV:function(){var z=this.r
return z==null?"":z},
c2:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isL",[P.j,null],"$asL")
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
if(x&&!C.b.a7(d,"/"))d="/"+d
g=P.de(g,0,0,h)
return new P.co(i,j,c,f,d,g,this.r)},
c1:function(a,b){return this.c2(a,null,null,null,null,null,null,b,null,null)},
gaI:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.eY(P.f0(z==null?"":z,C.f),[y,y])
this.Q=y
z=y}return z},
gcW:function(){return this.c!=null},
gcZ:function(){return this.f!=null},
gcX:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.k(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.k(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.k(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
B:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.Q(b)
if(!!z.$isd6){y=this.a
x=b.gbg()
if(y==null?x==null:y===x)if(this.c!=null===b.gcW()){y=this.b
x=b.gdk()
if(y==null?x==null:y===x){y=this.gbR(this)
x=z.gbR(b)
if(y==null?x==null:y===x){y=this.gbc(this)
x=z.gbc(b)
if(y==null?x==null:y===x)if(this.e===z.gd9(b)){y=this.f
x=y==null
if(!x===b.gcZ()){if(x)y=""
if(y===z.gc_(b)){z=this.r
y=z==null
if(!y===b.gcX()){if(y)z=""
z=z===b.gcV()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gW:function(a){var z=this.z
if(z==null){z=C.b.gW(this.i(0))
this.z=z}return z},
$isd6:1,
u:{
cp:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isf",[P.n],"$asf")
if(c===C.f){z=$.$get$ft().b
if(typeof b!=="string")H.J(H.ai(b))
z=z.test(b)}else z=!1
if(z)return b
H.v(b,H.ax(c,"bP",0))
y=c.gfj().bO(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cg(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lN:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lY(a,b,d)
else{if(d===b)P.bG(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lZ(a,z,e-1):""
x=P.lS(a,e,f,!1)
if(typeof f!=="number")return f.t()
w=f+1
if(typeof g!=="number")return H.m(g)
v=w<g?P.lV(P.c3(C.b.w(a,w,g),new P.lO(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lT(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.L()
t=h<i?P.de(a,h+1,i,null):null
return new P.co(j,y,x,v,u,t,i<c?P.lR(a,i+1,c):null)},
fo:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bG:function(a,b,c){throw H.a(P.a_(c,a,b))},
lV:function(a,b){if(a!=null&&a===P.fo(b))return
return a},
lS:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.F()
z=c-1
if(C.b.Z(a,z)!==93)P.bG(a,b,"Missing end `]` to match `[` in host")
P.f_(a,b+1,z)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.m(c)
y=b
for(;y<c;++y)if(C.b.Z(a,y)===58){P.f_(a,b,c)
return"["+a+"]"}return P.m0(a,b,c)},
m0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.m(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Z(a,z)
if(v===37){u=P.fv(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aA("")
s=C.b.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.r,t)
t=(C.r[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aA("")
if(y<z){x.a+=C.b.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.i,t)
t=(C.i[t]&1<<(v&15))!==0}else t=!1
if(t)P.bG(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Z(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aA("")
s=C.b.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fp(v)
z+=q
y=z}}}}if(x==null)return C.b.w(a,b,c)
if(y<c){s=C.b.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lY:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fr(C.b.I(a,b)))P.bG(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.k,w)
w=(C.k[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bG(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.w(a,b,c)
return P.lP(y?a.toLowerCase():a)},
lP:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lZ:function(a,b,c){return P.bH(a,b,c,C.M)},
lT:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bH(a,b,c,C.t):C.D.hT(d,new P.lU(),P.j).E(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a7(w,"/"))w="/"+w
return P.m_(w,e,f)},
m_:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a7(a,"/"))return P.m1(a,!z||c)
return P.m2(a)},
de:function(a,b,c,d){var z,y
z={}
H.w(d,"$isL",[P.j,null],"$asL")
if(a!=null){if(d!=null)throw H.a(P.c7("Both query and queryParameters specified"))
return P.bH(a,b,c,C.j)}if(d==null)return
y=new P.aA("")
z.a=""
d.v(0,new P.lW(new P.lX(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lR:function(a,b,c){return P.bH(a,b,c,C.j)},
fv:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Z(a,b+1)
x=C.b.Z(a,z)
w=H.cz(y)
v=H.cz(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.c.aB(u,4)
if(z>=8)return H.d(C.l,z)
z=(C.l[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cg(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
fp:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.i(z,[P.n])
C.a.m(y,0,37)
C.a.m(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.i(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.c.eO(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.bY(y,0,null)},
bH:function(a,b,c,d){var z=P.fu(a,b,c,H.w(d,"$isf",[P.n],"$asf"),!1)
return z==null?C.b.w(a,b,c):z},
fu:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isf",[P.n],"$asf")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.L()
if(typeof c!=="number")return H.m(c)
if(!(y<c))break
c$0:{v=C.b.Z(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fv(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.i,u)
u=(C.i[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bG(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Z(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fp(v)}}if(w==null)w=new P.aA("")
w.a+=C.b.w(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.m(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.L()
if(x<c)w.a+=C.b.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fs:function(a){if(C.b.a7(a,"."))return!0
return C.b.d_(a,"/.")!==-1},
m2:function(a){var z,y,x,w,v,u,t
if(!P.fs(a))return a
z=H.i([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.I(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.E(z,"/")},
m1:function(a,b){var z,y,x,w,v,u
if(!P.fs(a))return!b?P.fq(a):a
z=H.i([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gas(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gas(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.m(z,0,P.fq(z[0]))}return C.a.E(z,"/")},
fq:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fr(J.h0(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.w(a,0,y)+"%3A"+C.b.at(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.k,w)
w=(C.k[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lQ:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c7("Invalid URL encoding"))}}return z},
df:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dp(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.I(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.f!==d)v=!1
else v=!0
if(v)return y.w(a,b,c)
else u=new H.a5(y.w(a,b,c))}else{u=H.i([],[P.n])
for(x=b;x<c;++x){w=y.I(a,x)
if(w>127)throw H.a(P.c7("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c7("Truncated URI"))
C.a.h(u,P.lQ(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isf",[P.n],"$asf")
return new P.ke(!1).bO(u)},
fr:function(a){var z=a|32
return 97<=z&&z<=122}}},
lO:{"^":"b:28;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.t()
throw H.a(P.a_("Invalid port",this.a,z+1))}},
lU:{"^":"b:40;",
$1:function(a){return P.cp(C.O,a,C.f,!1)}},
lX:{"^":"b:24;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.cp(C.l,a,C.f,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.cp(C.l,b,C.f,!0))}}},
lW:{"^":"b:42;a",
$2:function(a,b){var z,y
H.P(a)
if(b==null||typeof b==="string")this.a.$2(a,H.P(b))
else for(z=J.bq(H.fS(b,"$isl")),y=this.a;z.J();)y.$2(a,H.P(z.gS(z)))}},
k2:{"^":"c;a,b,c",
gdj:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.d0(y,"?",z)
w=y.length
if(x>=0){v=P.bH(y,x+1,w,C.j)
w=x}else v=null
z=new P.kJ(this,"data",null,null,null,P.bH(y,z,w,C.t),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
u:{
eZ:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.i([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a_("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a_("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gas(z)
if(v!==44||x!==t+7||!C.b.a8(a,"base64",t+1))throw H.a(P.a_("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.x.fG(0,a,s,y)
else{r=P.fu(a,s,y,C.j,!0)
if(r!=null)a=C.b.aK(a,s,y,r)}return new P.k2(a,z,c)}}},
mm:{"^":"b:43;",
$1:function(a){return new Uint8Array(96)}},
ml:{"^":"b:44;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.h4(z,0,96,b)
return z}},
mn:{"^":"b;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
mo:{"^":"b;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lr:{"^":"c;a,b,c,d,e,f,r,x,0y",
gcW:function(){return this.c>0},
gcY:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.t()
y=this.e
if(typeof y!=="number")return H.m(y)
y=z+1<y
z=y}else z=!1
return z},
gcZ:function(){var z=this.f
if(typeof z!=="number")return z.L()
return z<this.r},
gcX:function(){return this.r<this.a.length},
gcv:function(){return this.b===4&&C.b.a7(this.a,"http")},
gcw:function(){return this.b===5&&C.b.a7(this.a,"https")},
gbg:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcv()){this.x="http"
z="http"}else if(this.gcw()){this.x="https"
z="https"}else if(z===4&&C.b.a7(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a7(this.a,"package")){this.x="package"
z="package"}else{z=C.b.w(this.a,0,z)
this.x=z}return z},
gdk:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.w(this.a,y,z-1):""},
gbR:function(a){var z=this.c
return z>0?C.b.w(this.a,z,this.d):""},
gbc:function(a){var z
if(this.gcY()){z=this.d
if(typeof z!=="number")return z.t()
return P.c3(C.b.w(this.a,z+1,this.e),null,null)}if(this.gcv())return 80
if(this.gcw())return 443
return 0},
gd9:function(a){return C.b.w(this.a,this.e,this.f)},
gc_:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.L()
return z<y?C.b.w(this.a,z+1,y):""},
gcV:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.at(y,z+1):""},
gaI:function(){var z=this.f
if(typeof z!=="number")return z.L()
if(z>=this.r)return C.P
z=P.j
return new P.eY(P.f0(this.gc_(this),C.f),[z,z])},
c2:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isL",[P.j,null],"$asL")
i=this.gbg()
z=i==="file"
y=this.c
j=y>0?C.b.w(this.a,this.b+3,y):""
f=this.gcY()?this.gbc(this):null
y=this.c
if(y>0)c=C.b.w(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.w(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a7(d,"/"))d="/"+d
g=P.de(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.at(y,x+1)
return new P.co(i,j,c,f,d,g,b)},
c1:function(a,b){return this.c2(a,null,null,null,null,null,null,b,null,null)},
gW:function(a){var z=this.y
if(z==null){z=C.b.gW(this.a)
this.y=z}return z},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.Q(b)
if(!!z.$isd6)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isd6:1},
kJ:{"^":"co;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dK:function(a,b){var z=document.createElement("canvas")
return z},
hB:function(a){H.e(a,"$isa7")
return"wheel"},
e3:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$ise2")
try{J.h6(z,a)}catch(x){H.ar(x)}return z},
cm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fb:function(a,b,c,d){var z,y
z=W.cm(W.cm(W.cm(W.cm(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fC:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.V
if(z===C.e)return a
return z.cO(a,b)},
ac:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
o6:{"^":"r;0j:length=","%":"AccessibleNodeList"},
o7:{"^":"ac;0a3:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
o8:{"^":"ac;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cF:{"^":"r;",$iscF:1,"%":";Blob"},
oe:{"^":"ac;0a3:type}","%":"HTMLButtonElement"},
cI:{"^":"ac;",
c9:function(a,b,c){var z=a.getContext(b,P.mz(c,null))
return z},
$iscI:1,
"%":"HTMLCanvasElement"},
og:{"^":"M;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oi:{"^":"hs;0j:length=","%":"CSSPerspective"},
aZ:{"^":"r;",$isaZ:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oj:{"^":"kI;0j:length=",
dn:function(a,b){var z=a.getPropertyValue(this.dS(a,b))
return z==null?"":z},
dS:function(a,b){var z,y
z=$.$get$dQ()
y=z[b]
if(typeof y==="string")return y
y=this.eP(a,b)
z[b]=y
return y},
eP:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hw()+b
if(z in a)return z
return b},
gbJ:function(a){return a.bottom},
gai:function(a){return a.height},
gaE:function(a){return a.left},
gc3:function(a){return a.right},
gaZ:function(a){return a.top},
gam:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hr:{"^":"c;",
gaE:function(a){return this.dn(a,"left")}},
dR:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hs:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ok:{"^":"dR;0j:length=","%":"CSSTransformValue"},
ol:{"^":"dR;0j:length=","%":"CSSUnparsedValue"},
om:{"^":"r;0j:length=","%":"DataTransferItemList"},
on:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
oo:{"^":"kL;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.w(c,"$isa8",[P.a3],"$asa8")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.a8,P.a3]]},
$ast:function(){return[[P.a8,P.a3]]},
$isl:1,
$asl:function(){return[[P.a8,P.a3]]},
$isf:1,
$asf:function(){return[[P.a8,P.a3]]},
$asy:function(){return[[P.a8,P.a3]]},
"%":"ClientRectList|DOMRectList"},
hx:{"^":"r;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gam(a))+" x "+H.k(this.gai(a))},
B:function(a,b){var z
if(b==null)return!1
z=H.bM(b,"$isa8",[P.a3],"$asa8")
if(!z)return!1
z=J.aT(b)
return a.left===z.gaE(b)&&a.top===z.gaZ(b)&&this.gam(a)===z.gam(b)&&this.gai(a)===z.gai(b)},
gW:function(a){return W.fb(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF,this.gai(a)&0x1FFFFFFF)},
gbJ:function(a){return a.bottom},
gai:function(a){return a.height},
gaE:function(a){return a.left},
gc3:function(a){return a.right},
gaZ:function(a){return a.top},
gam:function(a){return a.width},
$isa8:1,
$asa8:function(){return[P.a3]},
"%":";DOMRectReadOnly"},
op:{"^":"kN;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.P(c)
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.j]},
$ast:function(){return[P.j]},
$isl:1,
$asl:function(){return[P.j]},
$isf:1,
$asf:function(){return[P.j]},
$asy:function(){return[P.j]},
"%":"DOMStringList"},
oq:{"^":"r;0j:length=","%":"DOMTokenList"},
kH:{"^":"cd;a,b",
gj:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.e(z[b],"$isa0")},
m:function(a,b,c){var z
H.A(b)
H.e(c,"$isa0")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga2:function(a){var z=this.c6(this)
return new J.aG(z,z.length,0,[H.u(z,0)])},
ar:function(a,b,c,d){throw H.a(P.bZ(null))},
$ast:function(){return[W.a0]},
$asl:function(){return[W.a0]},
$asf:function(){return[W.a0]}},
a0:{"^":"M;",
gbN:function(a){return new W.kH(a,a.children)},
gcQ:function(a){return P.j7(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a3)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
or:{"^":"ac;0a3:type}","%":"HTMLEmbedElement"},
ab:{"^":"r;",$isab:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"r;",
cK:["dt",function(a,b,c,d){H.h(c,{func:1,args:[W.ab]})
if(c!=null)this.dM(a,b,c,!1)}],
dM:function(a,b,c,d){return a.addEventListener(b,H.bn(H.h(c,{func:1,args:[W.ab]}),1),!1)},
$isa7:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fh|fi|fl|fm"},
aQ:{"^":"cF;",$isaQ:1,"%":"File"},
dZ:{"^":"kS;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isaQ")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.aQ]},
$ast:function(){return[W.aQ]},
$isl:1,
$asl:function(){return[W.aQ]},
$isf:1,
$asf:function(){return[W.aQ]},
$isdZ:1,
$asy:function(){return[W.aQ]},
"%":"FileList"},
os:{"^":"a7;0j:length=","%":"FileWriter"},
ot:{"^":"ac;0j:length=","%":"HTMLFormElement"},
b1:{"^":"r;",$isb1:1,"%":"Gamepad"},
ou:{"^":"r;0j:length=","%":"History"},
ov:{"^":"l4;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isM")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.M]},
$ast:function(){return[W.M]},
$isl:1,
$asl:function(){return[W.M]},
$isf:1,
$asf:function(){return[W.M]},
$asy:function(){return[W.M]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
e1:{"^":"r;",$ise1:1,"%":"ImageData"},
e2:{"^":"ac;0a3:type}",$ise2:1,$isdL:1,"%":"HTMLInputElement"},
dL:{"^":"c;",$isa0:1,$isa7:1,$isM:1},
bv:{"^":"d3;",$isbv:1,"%":"KeyboardEvent"},
oz:{"^":"ac;0a3:type}","%":"HTMLLinkElement"},
oA:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
oB:{"^":"r;0j:length=","%":"MediaList"},
oC:{"^":"a7;",
cK:function(a,b,c,d){H.h(c,{func:1,args:[W.ab]})
if(b==="message")a.start()
this.dt(a,b,c,!1)},
"%":"MessagePort"},
oD:{"^":"lb;",
k:function(a,b){return P.aO(a.get(H.P(b)))},
v:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aO(y.value[1]))}},
gaj:function(a){var z=H.i([],[P.j])
this.v(a,new W.iJ(z))
return z},
gj:function(a){return a.size},
m:function(a,b,c){throw H.a(P.x("Not supported"))},
$asaj:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"MIDIInputMap"},
iJ:{"^":"b:12;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oE:{"^":"lc;",
k:function(a,b){return P.aO(a.get(H.P(b)))},
v:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aO(y.value[1]))}},
gaj:function(a){var z=H.i([],[P.j])
this.v(a,new W.iK(z))
return z},
gj:function(a){return a.size},
m:function(a,b,c){throw H.a(P.x("Not supported"))},
$asaj:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
iK:{"^":"b:12;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b4:{"^":"r;",$isb4:1,"%":"MimeType"},
oF:{"^":"le;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isb4")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b4]},
$ast:function(){return[W.b4]},
$isl:1,
$asl:function(){return[W.b4]},
$isf:1,
$asf:function(){return[W.b4]},
$asy:function(){return[W.b4]},
"%":"MimeTypeArray"},
au:{"^":"d3;",$isau:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kG:{"^":"cd;a",
m:function(a,b,c){var z,y
H.A(b)
H.e(c,"$isM")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga2:function(a){var z=this.a.childNodes
return new W.e_(z,z.length,-1,[H.aU(C.R,z,"y",0)])},
ar:function(a,b,c,d){throw H.a(P.x("Cannot fillRange on Node list"))},
gj:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$ast:function(){return[W.M]},
$asl:function(){return[W.M]},
$asf:function(){return[W.M]}},
M:{"^":"a7;",
fZ:function(a,b){var z,y
try{z=a.parentNode
J.h1(z,b,a)}catch(y){H.ar(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.du(a):z},
eE:function(a,b,c){return a.replaceChild(b,c)},
$isM:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iO:{"^":"lg;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isM")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.M]},
$ast:function(){return[W.M]},
$isl:1,
$asl:function(){return[W.M]},
$isf:1,
$asf:function(){return[W.M]},
$asy:function(){return[W.M]},
"%":"NodeList|RadioNodeList"},
oN:{"^":"ac;0a3:type}","%":"HTMLOListElement"},
oO:{"^":"ac;0a3:type}","%":"HTMLObjectElement"},
b5:{"^":"r;0j:length=",$isb5:1,"%":"Plugin"},
oR:{"^":"lk;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isb5")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b5]},
$ast:function(){return[W.b5]},
$isl:1,
$asl:function(){return[W.b5]},
$isf:1,
$asf:function(){return[W.b5]},
$asy:function(){return[W.b5]},
"%":"PluginArray"},
oT:{"^":"r;0a3:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oU:{"^":"lq;",
k:function(a,b){return P.aO(a.get(H.P(b)))},
v:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aO(y.value[1]))}},
gaj:function(a){var z=H.i([],[P.j])
this.v(a,new W.jh(z))
return z},
gj:function(a){return a.size},
m:function(a,b,c){throw H.a(P.x("Not supported"))},
$asaj:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"RTCStatsReport"},
jh:{"^":"b:12;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oW:{"^":"ac;0a3:type}","%":"HTMLScriptElement"},
oY:{"^":"ac;0j:length=","%":"HTMLSelectElement"},
b7:{"^":"a7;",$isb7:1,"%":"SourceBuffer"},
oZ:{"^":"fi;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isb7")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b7]},
$ast:function(){return[W.b7]},
$isl:1,
$asl:function(){return[W.b7]},
$isf:1,
$asf:function(){return[W.b7]},
$asy:function(){return[W.b7]},
"%":"SourceBufferList"},
p_:{"^":"ac;0a3:type}","%":"HTMLSourceElement"},
b8:{"^":"r;",$isb8:1,"%":"SpeechGrammar"},
p0:{"^":"lt;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isb8")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b8]},
$ast:function(){return[W.b8]},
$isl:1,
$asl:function(){return[W.b8]},
$isf:1,
$asf:function(){return[W.b8]},
$asy:function(){return[W.b8]},
"%":"SpeechGrammarList"},
b9:{"^":"r;0j:length=",$isb9:1,"%":"SpeechRecognitionResult"},
p2:{"^":"lw;",
k:function(a,b){return a.getItem(H.P(b))},
m:function(a,b,c){a.setItem(b,H.P(c))},
v:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaj:function(a){var z=H.i([],[P.j])
this.v(a,new W.jx(z))
return z},
gj:function(a){return a.length},
$asaj:function(){return[P.j,P.j]},
$isL:1,
$asL:function(){return[P.j,P.j]},
"%":"Storage"},
jx:{"^":"b:24;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p5:{"^":"ac;0a3:type}","%":"HTMLStyleElement"},
ba:{"^":"r;",$isba:1,"%":"CSSStyleSheet|StyleSheet"},
d0:{"^":"ac;",$isd0:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bb:{"^":"a7;",$isbb:1,"%":"TextTrack"},
bc:{"^":"a7;",$isbc:1,"%":"TextTrackCue|VTTCue"},
p7:{"^":"lC;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isbc")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bc]},
$ast:function(){return[W.bc]},
$isl:1,
$asl:function(){return[W.bc]},
$isf:1,
$asf:function(){return[W.bc]},
$asy:function(){return[W.bc]},
"%":"TextTrackCueList"},
p8:{"^":"fm;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isbb")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bb]},
$ast:function(){return[W.bb]},
$isl:1,
$asl:function(){return[W.bb]},
$isf:1,
$asf:function(){return[W.bb]},
$asy:function(){return[W.bb]},
"%":"TextTrackList"},
p9:{"^":"r;0j:length=","%":"TimeRanges"},
be:{"^":"r;",$isbe:1,"%":"Touch"},
bf:{"^":"d3;",$isbf:1,"%":"TouchEvent"},
pa:{"^":"lI;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isbe")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.be]},
$ast:function(){return[W.be]},
$isl:1,
$asl:function(){return[W.be]},
$isf:1,
$asf:function(){return[W.be]},
$asy:function(){return[W.be]},
"%":"TouchList"},
pb:{"^":"r;0j:length=","%":"TrackDefaultList"},
d3:{"^":"ab;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pd:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
pe:{"^":"a7;0j:length=","%":"VideoTrackList"},
bE:{"^":"au;",
gfg:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.x("deltaY is not supported"))},
gff:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.x("deltaX is not supported"))},
$isbE:1,
"%":"WheelEvent"},
kz:{"^":"a7;",
eG:function(a,b){return a.requestAnimationFrame(H.bn(H.h(b,{func:1,ret:-1,args:[P.a3]}),1))},
e_:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
pj:{"^":"m9;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isaZ")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.aZ]},
$ast:function(){return[W.aZ]},
$isl:1,
$asl:function(){return[W.aZ]},
$isf:1,
$asf:function(){return[W.aZ]},
$asy:function(){return[W.aZ]},
"%":"CSSRuleList"},
pk:{"^":"hx;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
B:function(a,b){var z
if(b==null)return!1
z=H.bM(b,"$isa8",[P.a3],"$asa8")
if(!z)return!1
z=J.aT(b)
return a.left===z.gaE(b)&&a.top===z.gaZ(b)&&a.width===z.gam(b)&&a.height===z.gai(b)},
gW:function(a){return W.fb(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gai:function(a){return a.height},
gam:function(a){return a.width},
"%":"ClientRect|DOMRect"},
pm:{"^":"mb;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isb1")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b1]},
$ast:function(){return[W.b1]},
$isl:1,
$asl:function(){return[W.b1]},
$isf:1,
$asf:function(){return[W.b1]},
$asy:function(){return[W.b1]},
"%":"GamepadList"},
pn:{"^":"md;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isM")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.M]},
$ast:function(){return[W.M]},
$isl:1,
$asl:function(){return[W.M]},
$isf:1,
$asf:function(){return[W.M]},
$asy:function(){return[W.M]},
"%":"MozNamedAttrMap|NamedNodeMap"},
po:{"^":"mf;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isb9")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b9]},
$ast:function(){return[W.b9]},
$isl:1,
$asl:function(){return[W.b9]},
$isf:1,
$asf:function(){return[W.b9]},
$asy:function(){return[W.b9]},
"%":"SpeechRecognitionResultList"},
pp:{"^":"mh;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.A(b)
H.e(c,"$isba")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.ba]},
$ast:function(){return[W.ba]},
$isl:1,
$asl:function(){return[W.ba]},
$isf:1,
$asf:function(){return[W.ba]},
$asy:function(){return[W.ba]},
"%":"StyleSheetList"},
kO:{"^":"d_;a,b,c,$ti",
fD:function(a,b,c,d){var z=H.u(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
pl:{"^":"kO;a,b,c,$ti"},
kP:{"^":"ez;a,b,c,d,e,$ti",
eU:function(){var z=this.d
if(z!=null&&this.a<=0)J.h2(this.b,this.c,z,!1)},
u:{
a2:function(a,b,c,d,e){var z=c==null?null:W.fC(new W.kQ(c),W.ab)
z=new W.kP(0,a,b,z,!1,[e])
z.eU()
return z}}},
kQ:{"^":"b:13;a",
$1:function(a){return this.a.$1(H.e(a,"$isab"))}},
y:{"^":"c;$ti",
ga2:function(a){return new W.e_(a,this.gj(a),-1,[H.aU(this,a,"y",0)])},
ar:function(a,b,c,d){H.v(d,H.aU(this,a,"y",0))
throw H.a(P.x("Cannot modify an immutable List."))}},
e_:{"^":"c;a,b,c,0d,$ti",
J:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dw(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gS:function(a){return this.d}},
kI:{"^":"r+hr;"},
kK:{"^":"r+t;"},
kL:{"^":"kK+y;"},
kM:{"^":"r+t;"},
kN:{"^":"kM+y;"},
kR:{"^":"r+t;"},
kS:{"^":"kR+y;"},
l3:{"^":"r+t;"},
l4:{"^":"l3+y;"},
lb:{"^":"r+aj;"},
lc:{"^":"r+aj;"},
ld:{"^":"r+t;"},
le:{"^":"ld+y;"},
lf:{"^":"r+t;"},
lg:{"^":"lf+y;"},
lj:{"^":"r+t;"},
lk:{"^":"lj+y;"},
lq:{"^":"r+aj;"},
fh:{"^":"a7+t;"},
fi:{"^":"fh+y;"},
ls:{"^":"r+t;"},
lt:{"^":"ls+y;"},
lw:{"^":"r+aj;"},
lB:{"^":"r+t;"},
lC:{"^":"lB+y;"},
fl:{"^":"a7+t;"},
fm:{"^":"fl+y;"},
lH:{"^":"r+t;"},
lI:{"^":"lH+y;"},
m8:{"^":"r+t;"},
m9:{"^":"m8+y;"},
ma:{"^":"r+t;"},
mb:{"^":"ma+y;"},
mc:{"^":"r+t;"},
md:{"^":"mc+y;"},
me:{"^":"r+t;"},
mf:{"^":"me+y;"},
mg:{"^":"r+t;"},
mh:{"^":"mg+y;"}}],["","",,P,{"^":"",
aO:function(a){var z,y,x,w,v
if(a==null)return
z=P.ee(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=H.P(y[w])
z.m(0,v,a[v])}return z},
mz:function(a,b){var z={}
a.v(0,new P.mA(z))
return z},
dX:function(){var z=$.dW
if(z==null){z=J.cD(window.navigator.userAgent,"Opera",0)
$.dW=z}return z},
hw:function(){var z,y
z=$.dT
if(z!=null)return z
y=$.dU
if(y==null){y=J.cD(window.navigator.userAgent,"Firefox",0)
$.dU=y}if(y)z="-moz-"
else{y=$.dV
if(y==null){y=!P.dX()&&J.cD(window.navigator.userAgent,"Trident/",0)
$.dV=y}if(y)z="-ms-"
else z=P.dX()?"-o-":"-webkit-"}$.dT=z
return z},
lz:{"^":"c;",
cS:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
be:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.Q(a)
if(!!y.$isan)return new Date(a.a)
if(!!y.$isja)throw H.a(P.bZ("structured clone of RegExp"))
if(!!y.$isaQ)return a
if(!!y.$iscF)return a
if(!!y.$isdZ)return a
if(!!y.$ise1)return a
if(!!y.$isek||!!y.$iscV)return a
if(!!y.$isL){x=this.cS(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.v(a,new P.lA(z,this))
return z.a}if(!!y.$isf){x=this.cS(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.fd(a,x)}throw H.a(P.bZ("structured clone of other type"))},
fd:function(a,b){var z,y,x,w
z=J.aE(a)
y=z.gj(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.m(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.be(z.k(a,w)))
return x}},
lA:{"^":"b:11;a,b",
$2:function(a,b){this.a.a[a]=this.b.be(b)}},
mA:{"^":"b:11;a",
$2:function(a,b){this.a[a]=b}},
fk:{"^":"lz;a,b"},
hH:{"^":"cd;a,b",
gb4:function(){var z,y,x
z=this.b
y=H.ax(z,"t",0)
x=W.a0
return new H.iG(new H.kx(z,H.h(new P.hI(),{func:1,ret:P.O,args:[y]}),[y]),H.h(new P.hJ(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.A(b)
H.e(c,"$isa0")
z=this.gb4()
J.h5(z.b.$1(J.cE(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ar:function(a,b,c,d){throw H.a(P.x("Cannot fillRange on filtered list"))},
gj:function(a){return J.as(this.gb4().a)},
k:function(a,b){var z=this.gb4()
return z.b.$1(J.cE(z.a,b))},
ga2:function(a){var z=P.iA(this.gb4(),!1,W.a0)
return new J.aG(z,z.length,0,[H.u(z,0)])},
$ast:function(){return[W.a0]},
$asl:function(){return[W.a0]},
$asf:function(){return[W.a0]}},
hI:{"^":"b:50;",
$1:function(a){return!!J.Q(H.e(a,"$isM")).$isa0}},
hJ:{"^":"b:52;",
$1:function(a){return H.af(H.e(a,"$isM"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l5:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ll:{"^":"c;$ti",
gc3:function(a){var z=this.a
if(typeof z!=="number")return z.t()
return H.v(z+this.c,H.u(this,0))},
gbJ:function(a){var z=this.b
if(typeof z!=="number")return z.t()
return H.v(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
B:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bM(b,"$isa8",[P.a3],"$asa8")
if(!z)return!1
z=this.a
y=J.aT(b)
x=y.gaE(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaZ(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.t()
w=H.u(this,0)
if(H.v(z+this.c,w)===y.gc3(b)){if(typeof x!=="number")return x.t()
z=H.v(x+this.d,w)===y.gbJ(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.bO(z)
x=this.b
w=J.bO(x)
if(typeof z!=="number")return z.t()
v=H.u(this,0)
z=H.v(z+this.c,v)
if(typeof x!=="number")return x.t()
v=H.v(x+this.d,v)
return P.l5(P.cn(P.cn(P.cn(P.cn(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a8:{"^":"ll;aE:a>,aZ:b>,am:c>,ai:d>,$ti",u:{
j7:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.L()
if(c<0)z=-c*0
else z=c
H.v(z,e)
if(typeof d!=="number")return d.L()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.v(y,e),[e])}}}}],["","",,P,{"^":"",bw:{"^":"r;",$isbw:1,"%":"SVGLength"},oy:{"^":"l7;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.A(b)
H.e(c,"$isbw")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bw]},
$isl:1,
$asl:function(){return[P.bw]},
$isf:1,
$asf:function(){return[P.bw]},
$asy:function(){return[P.bw]},
"%":"SVGLengthList"},bz:{"^":"r;",$isbz:1,"%":"SVGNumber"},oM:{"^":"li;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.A(b)
H.e(c,"$isbz")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bz]},
$isl:1,
$asl:function(){return[P.bz]},
$isf:1,
$asf:function(){return[P.bz]},
$asy:function(){return[P.bz]},
"%":"SVGNumberList"},oS:{"^":"r;0j:length=","%":"SVGPointList"},oX:{"^":"eB;0a3:type}","%":"SVGScriptElement"},p3:{"^":"ly;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.A(b)
H.P(c)
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$ast:function(){return[P.j]},
$isl:1,
$asl:function(){return[P.j]},
$isf:1,
$asf:function(){return[P.j]},
$asy:function(){return[P.j]},
"%":"SVGStringList"},p6:{"^":"eB;0a3:type}","%":"SVGStyleElement"},eB:{"^":"a0;",
gbN:function(a){return new P.hH(a,new W.kG(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bB:{"^":"r;",$isbB:1,"%":"SVGTransform"},pc:{"^":"lK;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.A(b)
H.e(c,"$isbB")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bB]},
$isl:1,
$asl:function(){return[P.bB]},
$isf:1,
$asf:function(){return[P.bB]},
$asy:function(){return[P.bB]},
"%":"SVGTransformList"},l6:{"^":"r+t;"},l7:{"^":"l6+y;"},lh:{"^":"r+t;"},li:{"^":"lh+y;"},lx:{"^":"r+t;"},ly:{"^":"lx+y;"},lJ:{"^":"r+t;"},lK:{"^":"lJ+y;"}}],["","",,P,{"^":"",S:{"^":"c;",$isl:1,
$asl:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]}}}],["","",,P,{"^":"",o9:{"^":"r;0j:length=","%":"AudioBuffer"},dA:{"^":"a7;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},oa:{"^":"kF;",
k:function(a,b){return P.aO(a.get(H.P(b)))},
v:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aO(y.value[1]))}},
gaj:function(a){var z=H.i([],[P.j])
this.v(a,new P.h9(z))
return z},
gj:function(a){return a.size},
m:function(a,b,c){throw H.a(P.x("Not supported"))},
$asaj:function(){return[P.j,null]},
$isL:1,
$asL:function(){return[P.j,null]},
"%":"AudioParamMap"},h9:{"^":"b:12;a",
$2:function(a,b){return C.a.h(this.a,a)}},ha:{"^":"dA;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},ob:{"^":"a7;0j:length=","%":"AudioTrackList"},hd:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oc:{"^":"dA;0a3:type}","%":"BiquadFilterNode"},oP:{"^":"hd;0j:length=","%":"OfflineAudioContext"},oQ:{"^":"ha;0a3:type}","%":"Oscillator|OscillatorNode"},kF:{"^":"r+aj;"}}],["","",,P,{"^":"",ev:{"^":"r;",$isev:1,"%":"WebGLRenderingContext"},jU:{"^":"r;",$isjU:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",p1:{"^":"lv;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return P.aO(a.item(b))},
m:function(a,b,c){H.A(b)
H.e(c,"$isL")
throw H.a(P.x("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$ast:function(){return[[P.L,,,]]},
$isl:1,
$asl:function(){return[[P.L,,,]]},
$isf:1,
$asf:function(){return[[P.L,,,]]},
$asy:function(){return[[P.L,,,]]},
"%":"SQLResultSetRowList"},lu:{"^":"r+t;"},lv:{"^":"lu+y;"}}],["","",,O,{"^":"",aX:{"^":"c;0a,0b,0c,0d,$ti",
cd:function(a){this.a=H.i([],[a])
this.b=null
this.c=null
this.d=null},
ds:function(a,b,c){var z={func:1,ret:-1,args:[P.n,[P.l,H.ax(this,"aX",0)]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bh:function(a,b){return this.ds(a,null,b)},
ew:function(a){H.w(a,"$isl",[H.ax(this,"aX",0)],"$asl")
return!0},
dE:function(a,b){var z
H.w(b,"$isl",[H.ax(this,"aX",0)],"$asl")
z=this.c
if(z!=null)z.$2(a,b)},
gj:function(a){return this.a.length},
ga2:function(a){var z=this.a
return new J.aG(z,z.length,0,[H.u(z,0)])},
K:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ax(this,"aX",0)
H.v(b,z)
z=[z]
if(this.ew(H.i([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dE(x,H.i([b],z))}},
$isl:1,
u:{
dN:function(a){var z=new O.aX([a])
z.cd(a)
return z}}},cS:{"^":"c;0a,0b",
gj:function(a){return this.a.length},
gD:function(){var z=this.b
if(z==null){z=D.W()
this.b=z}return z},
dF:function(a){var z=this.b
if(!(z==null))z.H(a)},
au:function(){return this.dF(null)},
gak:function(a){var z=this.a
if(z.length>0)return C.a.gas(z)
else return V.ce()},
dc:function(a){var z=this.a
if(a==null)C.a.h(z,V.ce())
else C.a.h(z,a)
this.au()},
bZ:function(){var z=this.a
if(z.length>0){z.pop()
this.au()}}}}],["","",,E,{"^":"",dC:{"^":"c;"},aP:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sca:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gD().G(0,this.gd7())
y=this.c
if(y!=null)y.gD().h(0,this.gd7())
x=new D.C("shape",z,this.c,this,[F.a4])
x.b=!0
this.af(x)}},
saT:function(a){var z,y
if(!J.I(this.r,a)){z=this.r
if(z!=null)z.gD().G(0,this.gd6())
if(a!=null)a.gD().h(0,this.gd6())
this.r=a
y=new D.C("mover",z,a,this,[U.ag])
y.b=!0
this.af(y)}},
aL:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aM(0,b,this):null
if(!J.I(y,this.x)){x=this.x
this.x=y
w=new D.C("matrix",x,y,this,[V.bW])
w.b=!0
this.af(w)}for(z=this.y.a,z=new J.aG(z,z.length,0,[H.u(z,0)]);z.J();)z.d.aL(0,b)},
aJ:function(a){var z,y,x,w,v,u
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gak(z))
else C.a.h(z.a,y.l(0,z.gak(z)))
z.au()
a.dd(this.f)
z=a.dy
x=(z&&C.a).gas(z)
if(x!=null&&this.d!=null){if(x.a==null){w=a.fr.k(0,"Inspection")
if(w==null){z=a.a
w=new A.hO(z,"Inspection")
w.dC(z,"Inspection")
y=$.i8
v=$.i_
w.c=y
w.d=v
w.e=w.cs(y,35633)
w.f=w.cs(w.d,35632)
y=z.createProgram()
w.r=y
z.attachShader(y,w.e)
z.attachShader(w.r,w.f)
z.linkProgram(w.r)
if(!H.fG(z.getProgramParameter(w.r,35714))){u=z.getProgramInfoLog(w.r)
z.deleteProgram(w.r)
H.J(P.T("Failed to link shader: "+H.k(u)))}w.eK()
w.eM()
w.z=w.x.k(0,"posAttr")
w.Q=w.x.k(0,"normAttr")
w.ch=w.x.k(0,"clrAttr")
w.cx=w.x.k(0,"binmAttr")
w.cy=H.af(w.y.k(0,"lightVec"),"$iseX")
w.db=H.af(w.y.k(0,"ambientClr"),"$isd5")
w.dx=H.af(w.y.k(0,"diffuseClr"),"$isd5")
w.dy=H.af(w.y.k(0,"weightScalar"),"$iseW")
w.fr=H.af(w.y.k(0,"viewMat"),"$isck")
w.fx=H.af(w.y.k(0,"viewObjMatrix"),"$isck")
w.fy=H.af(w.y.k(0,"projViewObjMatrix"),"$isck")
if(a.fr.b9(0,"Inspection"))H.J(P.T('Shader cache already contains a shader by the name "Inspection".'))
a.fr.m(0,"Inspection",w)}x.a=w}if(this.e==null){this.d.a9()
z=this.d
y=z.e
if(!(y==null))++y.d
z.d.bL()
z.a.bL()
z=z.e
if(!(z==null))z.al(0)
z=this.d
y=z.e
if(!(y==null))++y.d
z.a.f7()
z=z.e
if(!(z==null))z.al(0)
z=new Z.dH()
z.a=new H.aH(0,0,[P.j,Z.dG])
this.e=z}z=x.a
a.a.useProgram(z.r)
z.x.fi()
y=x.r2
v=z.dy
v.a.uniform1f(v.d,y)
y=x.b
v=z.cy
v.a.uniform3f(v.d,y.a,y.b,y.c)
y=a.db
y=y.gak(y)
v=z.fr
v.toString
v.bi(y.c7(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gak(y)
v=a.dx
v=y.l(0,v.gak(v))
a.cx=v
y=v}v=z.fx
v.toString
v.bi(y.c7(0,!0))
y=a.ch
if(y==null){y=a.z
if(y==null){y=a.cy
y=y.gak(y)
v=a.db
v=y.l(0,v.gak(v))
a.z=v
y=v}v=a.dx
v=y.l(0,v.gak(v))
a.ch=v
y=v}z=z.fy
z.toString
z.bi(y.c7(0,!0))
z=this.e
if(z instanceof Z.dH){a.a.blendFunc(1,1)
y=this.c
v=a.a
if(y==null){v.disable(2929)
a.a.enable(3042)
a.a.blendFunc(1,1)
if(x.k3)x.cB(a,z,this.d,"Axis",H.h(x.gck(),{func:1,ret:F.a4,args:[F.ci]}),x.z,x.y)
if(x.k4)x.cB(a,z,this.d,"AABB",H.h(x.gcg(),{func:1,ret:F.a4,args:[F.ci]}),x.z,x.y)
a.a.enable(2929)
a.a.blendFunc(770,771)}else{v.enable(2929)
a.a.enable(3042)
a.a.blendFunc(770,771)
if(x.cx)x.a_(a,z,this.c,"vertices",x.geX(),x.f,x.e)
if(x.fr)x.a_(a,z,this.c,"faceCenters",x.ge1(),x.f,x.e)
if(x.Q)x.a_(a,z,this.c,"shapeFill",x.geN(),x.d,x.c)
if(x.id)x.a_(a,z,this.c,"colorFill",x.gdV(),x.x,x.r)
if(x.k1)x.a_(a,z,this.c,"txt2DColor",x.geV(),x.x,x.r)
if(x.k2)x.a_(a,z,this.c,"weight",x.geY(),x.x,x.r)
if(x.r1)x.a_(a,z,this.c,"bend1",x.gdQ(),x.x,x.r)
a.a.disable(2929)
a.a.blendFunc(1,1)
if(x.ch)x.a_(a,z,this.c,"wireFrame",x.geZ(),x.f,x.e)
if(x.cy)x.a_(a,z,this.c,"normals",x.gee(),x.f,x.e)
if(x.db)x.a_(a,z,this.c,"binormals",x.gdR(),x.f,x.e)
if(x.dx)x.a_(a,z,this.c,"tangentals",x.geQ(),x.f,x.e)
if(x.dy)x.a_(a,z,this.c,"textureCube",x.geW(),x.f,x.e)
if(x.fx)x.a_(a,z,this.c,"faceNormals",x.ge2(),x.f,x.e)
if(x.fy)x.a_(a,z,this.c,"faceBinormals",x.ge0(),x.x,x.r)
if(x.go)x.a_(a,z,this.c,"faceTangentals",x.ge3(),x.x,x.r)
if(x.k3)x.a_(a,z,this.c,"Axis",x.gck(),x.z,x.y)
if(x.k4)x.a_(a,z,this.c,"AABB",x.gcg(),x.z,x.y)
a.a.enable(2929)
a.a.blendFunc(770,771)}}else this.e=null
z=x.a
z.toString
a.a.useProgram(null)
z.x.fh()}for(z=this.y.a,z=new J.aG(z,z.length,0,[H.u(z,0)]);z.J();)z.d.aJ(a)
a.da()
a.dx.bZ()},
gD:function(){var z=this.z
if(z==null){z=D.W()
this.z=z}return z},
af:function(a){var z=this.z
if(!(z==null))z.H(a)},
R:function(){return this.af(null)},
fL:[function(a){H.e(a,"$isB")
this.e=null
this.af(a)},function(){return this.fL(null)},"hY","$1","$0","gd7",0,2,6],
fK:[function(a){this.af(H.e(a,"$isB"))},function(){return this.fK(null)},"hX","$1","$0","gd6",0,2,6],
fI:[function(a){this.af(H.e(a,"$isB"))},function(){return this.fI(null)},"hV","$1","$0","gd5",0,2,6],
hU:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isl",[E.aP],"$asl")
for(z=b.length,y=this.gd5(),x={func:1,ret:-1,args:[D.B]},w=[x],v=0;v<b.length;b.length===z||(0,H.E)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bR()
t.d=0
u.sa4(t)}t=u.ga4()
t.toString
H.h(y,x)
s=t.a
if(s==null){s=H.i([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.R()},"$2","gfH",8,0,14],
hW:[function(a,b){var z,y,x,w,v
H.w(b,"$isl",[E.aP],"$asl")
for(z=b.length,y=this.gd5(),x=0;x<b.length;b.length===z||(0,H.E)(b),++x){w=b[x]
if(w!=null){if(w.ga4()==null){v=new D.bR()
v.d=0
w.sa4(v)}w.ga4().G(0,y)}}this.R()},"$2","gfJ",8,0,14],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isej:1},jc:{"^":"c;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dA:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.an(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cS()
y=[V.bW]
z.a=H.i([],y)
z.gD().h(0,new E.je(this))
this.cy=z
z=new O.cS()
z.a=H.i([],y)
z.gD().h(0,new E.jf(this))
this.db=z
z=new O.cS()
z.a=H.i([],y)
z.gD().h(0,new E.jg(this))
this.dx=z
z=H.i([],[O.d1])
this.dy=z
C.a.h(z,null)
this.fr=new H.aH(0,0,[P.j,A.ew])},
dd:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gas(z):a;(z&&C.a).h(z,y)},
da:function(){var z=this.dy
if(z.length>1)z.pop()},
u:{
jd:function(a,b){var z=new E.jc(a,b)
z.dA(a,b)
return z}}},je:{"^":"b:17;a",
$1:function(a){var z
H.e(a,"$isB")
z=this.a
z.z=null
z.ch=null}},jf:{"^":"b:17;a",
$1:function(a){var z
H.e(a,"$isB")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jg:{"^":"b:17;a",
$1:function(a){var z
H.e(a,"$isB")
z=this.a
z.ch=null
z.cx=null}},jE:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch,0cx,0cy",
gD:function(){var z=this.x
if(z==null){z=D.W()
this.x=z}return z},
dH:[function(a){var z
H.e(a,"$isB")
z=this.x
if(!(z==null))z.H(a)
this.h0()},function(){return this.dH(null)},"dG","$1","$0","gce",0,2,6],
gft:function(){var z,y,x
z=Date.now()
y=C.c.aC(P.dY(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.an(z,!1)
return x/y},
cC:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.m(z)
x=C.d.bb(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.d.bb(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eF(C.m,this.gh_())}},
h0:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.h(new E.jG(this),{func:1,ret:-1,args:[P.a3]})
C.w.e_(z)
C.w.eG(z,W.fC(y,P.a3))}},"$0","gh_",0,0,7],
fY:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cC()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.dY(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sj(w.a,0)
w.au()
w=x.db
C.a.sj(w.a,0)
w.au()
w=x.dx
C.a.sj(w.a,0)
w.au()
w=x.dy;(w&&C.a).sj(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aJ(this.e)}}catch(v){z=H.ar(v)
y=H.bo(v)
P.dt("Error: "+H.k(z))
P.dt("Stack: "+H.k(y))
throw H.a(z)}},
u:{
jF:function(a,b,c,d,e){var z,y,x,w
z=J.Q(a)
if(!!z.$iscI)return E.eE(a,!0,!0,!0,!1)
y=W.dK(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbN(a).h(0,y)
w=E.eE(y,!0,!0,!0,!1)
w.a=a
return w},
eE:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jE()
y=P.iw(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.h.c9(a,"webgl",y)
x=H.e(x==null?C.h.c9(a,"experimental-webgl",y):x,"$isev")
if(x==null)H.J(P.T("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jd(x,a)
w=new T.jD(x)
w.b=H.A(x.getParameter(3379))
w.c=H.A(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k9(a)
v=new X.iq()
v.c=new X.az(!1,!1,!1)
v.d=P.iy(null,null,null,P.n)
w.b=v
v=new X.iL(w)
v.f=0
v.r=new V.N(0,0)
v.x=new V.N(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iC(w)
v.r=0
v.x=new V.N(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jJ(w)
v.e=0
v.f=new V.N(0,0)
v.r=new V.N(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.i([],[[P.ez,P.c]])
w.z=v
u=document
t=W.au
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.h(w.gej(),s),!1,t))
v=w.z
r=W.ab
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.h(w.gem(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.h(w.geg(),q),!1,r))
v=w.z
p=W.bv
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.h(w.geo(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.h(w.gen(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.h(w.geq(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.h(w.ges(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.h(w.ger(),s),!1,t))
p=w.z
o=W.bE;(p&&C.a).h(p,W.a2(a,H.P(W.hB(a)),H.h(w.geu(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.h(w.gek(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.h(w.gel(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.h(w.gev(),q),!1,r))
r=w.z
q=W.bf
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.h(w.geA(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.h(w.gey(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.h(w.gez(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.an(Date.now(),!1)
z.cy=0
z.cC()
return z}}},jG:{"^":"b:31;a",
$1:function(a){var z
H.nU(a)
z=this.a
if(z.ch){z.ch=!1
z.fY()}}}}],["","",,Z,{"^":"",f6:{"^":"c;a,b",u:{
da:function(a,b,c){var z
H.w(c,"$isf",[P.n],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cr(c)),35044)
a.bindBuffer(b,null)
return new Z.f6(b,z)}}},dF:{"^":"dC;a,b,c,d,e",
bH:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ar(y)
x=P.T('Failed to bind buffer attribute "'+J.aa(this.a)+'": '+H.k(z))
throw H.a(x)}},
i:function(a){return"["+J.aa(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},kw:{"^":"c;a",$isod:1},dG:{"^":"c;a,0b,c,d",
ba:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bH:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bH(a)},
h8:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aJ:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.d(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
d8:function(a){this.bH(a)
this.aJ(a)
this.h8(a)},
i:function(a){var z,y,x,w,v,u
z=[P.j]
y=H.i([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v)C.a.h(y,x[v].i(0))
u=H.i([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.aa(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.E(y,", ")+"\nAttrs:   "+C.a.E(u,", ")},
$isjC:1},dH:{"^":"c;0a",$isjC:1},cc:{"^":"c;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b6(this.c)+"'")+"]"}},d9:{"^":"c;a",
gcb:function(a){var z,y
z=this.a
y=(z&$.$get$aM().a)!==0?3:0
if((z&$.$get$aL().a)!==0)y+=3
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$bh().a)!==0)y+=2
if((z&$.$get$bi().a)!==0)y+=3
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bD().a)!==0)y+=4
if((z&$.$get$bj().a)!==0)++y
return(z&$.$get$bg().a)!==0?y+4:y},
f4:function(a){var z,y,x
z=$.$get$aM()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bh()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bi()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bj()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bg()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f5()},
B:function(a,b){if(b==null)return!1
if(!(b instanceof Z.d9))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.i([],[P.j])
y=this.a
if((y&$.$get$aM().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aK().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$bh().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$bi().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bD().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bj().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$bg().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.E(z,"|")},
u:{
ap:function(a){return new Z.d9(a)}}}}],["","",,D,{"^":"",cJ:{"^":"c;"},bR:{"^":"c;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.B]}
H.h(b,z)
y=this.a
if(y==null){z=H.i([],[z])
this.a=z}else z=y
C.a.h(z,b)},
G:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[D.B]})
z=this.a
z=z==null?null:C.a.fb(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).G(z,b)||!1}else y=!1
return y},
H:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.B(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.v(y,new D.hF(z))
return!0},
h1:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.H(y)}}},
al:function(a){return this.h1(a,!0,!1)},
u:{
W:function(){var z=new D.bR()
z.d=0
return z}}},hF:{"^":"b:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.B]})
z=this.a.a
z.b
a.$1(z)}},B:{"^":"c;a,0b"},e4:{"^":"B;c,d,a,0b,$ti"},e5:{"^":"B;c,d,a,0b,$ti"},C:{"^":"B;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dI:{"^":"c;a,b",
B:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dI))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
u:{"^":"of<"}},ea:{"^":"c;a,b",
B:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ea))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},eb:{"^":"B;c,a,0b"},iq:{"^":"c;0a,0b,0c,0d",
fS:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eb(a,this)
y.b=!0
return z.H(y)},
fO:function(a){var z,y
this.c=a.b
this.d.G(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eb(a,this)
y.b=!0
return z.H(y)}},eh:{"^":"cf;x,y,c,d,e,a,0b"},iC:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ao:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=y.t(0,new V.N(x*w,v*u))
u=this.a.gaD()
s=new X.bx(a,new V.N(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bY:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.H(this.ao(a,b))
return!0},
aV:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dr()
if(typeof z!=="number")return z.bf()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.ao(a,b))
return!0},
aU:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.ao(a,b))
return!0},
fT:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaD()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cT(new V.Y(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.H(w)
return!0},
ep:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.eh(c,a,this.a.gaD(),b,z,this)
x.b=!0
y.H(x)
this.y=z
this.x=new V.N(0,0)}},az:{"^":"c;a,b,c",
B:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.az))return!1
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
return z+(this.c?"Shift+":"")}},bx:{"^":"cf;x,y,z,Q,ch,c,d,e,a,0b"},iL:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bp:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaD()
x=new X.bx(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bY:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.H(this.bp(a,b,!0))
return!0},
aV:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dr()
if(typeof z!=="number")return z.bf()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.bp(a,b,!0))
return!0},
aU:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.bp(a,b,!1))
return!0},
fU:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaD()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cT(new V.Y(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.H(x)
return!0},
gcR:function(){var z=this.b
if(z==null){z=D.W()
this.b=z}return z},
gdi:function(){var z=this.c
if(z==null){z=D.W()
this.c=z}return z},
gd4:function(){var z=this.d
if(z==null){z=D.W()
this.d=z}return z}},cT:{"^":"cf;x,c,d,e,a,0b"},cf:{"^":"B;"},eJ:{"^":"cf;x,y,z,Q,ch,c,d,e,a,0b"},jJ:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y",
ao:function(a,b){var z,y,x,w
H.w(a,"$isf",[V.N],"$asf")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:new V.N(0,0)
x=this.a.gaD()
w=new X.eJ(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fR:function(a){var z
H.w(a,"$isf",[V.N],"$asf")
z=this.b
if(z==null)return!1
z.H(this.ao(a,!0))
return!0},
fP:function(a){var z
H.w(a,"$isf",[V.N],"$asf")
z=this.c
if(z==null)return!1
z.H(this.ao(a,!0))
return!0},
fQ:function(a){var z
H.w(a,"$isf",[V.N],"$asf")
z=this.d
if(z==null)return!1
z.H(this.ao(a,!1))
return!0}},k9:{"^":"c;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaD:function(){var z=this.a
return V.et(0,0,(z&&C.h).gcQ(z).c,C.h.gcQ(z).d)},
cr:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ea(z,new X.az(y,a.altKey,a.shiftKey))},
aA:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.az(y,a.altKey,a.shiftKey)},
bC:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.az(y,a.altKey,a.shiftKey)},
ap:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=z.top
if(typeof x!=="number")return x.F()
return new V.N(y-w,x-v)},
aO:function(a){return new V.Y(a.movementX,a.movementY)},
bx:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.i([],[V.N])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v){u=x[v]
t=C.d.ac(u.pageX)
C.d.ac(u.pageY)
s=z.left
C.d.ac(u.pageX)
C.a.h(y,new V.N(t-s,C.d.ac(u.pageY)-z.top))}return y},
an:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dI(z,new X.az(y,a.altKey,a.shiftKey))},
br:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.F()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
hx:[function(a){this.f=!0},"$1","gem",4,0,13],
hr:[function(a){this.f=!1},"$1","geg",4,0,13],
hu:[function(a){H.e(a,"$isau")
if(this.f&&this.br(a))a.preventDefault()},"$1","gej",4,0,9],
hz:[function(a){var z
H.e(a,"$isbv")
if(!this.f)return
z=this.cr(a)
if(this.b.fS(z))a.preventDefault()},"$1","geo",4,0,25],
hy:[function(a){var z
H.e(a,"$isbv")
if(!this.f)return
z=this.cr(a)
if(this.b.fO(z))a.preventDefault()},"$1","gen",4,0,25],
hA:[function(a){var z,y,x,w
H.e(a,"$isau")
z=this.a
z.focus()
this.f=!0
this.aA(a)
if(this.x){y=this.an(a)
x=this.aO(a)
if(this.d.bY(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.an(a)
w=this.ap(a)
if(this.c.bY(y,w))a.preventDefault()},"$1","geq",4,0,9],
hC:[function(a){var z,y,x
H.e(a,"$isau")
this.aA(a)
z=this.an(a)
if(this.x){y=this.aO(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.ap(a)
if(this.c.aV(z,x))a.preventDefault()},"$1","ges",4,0,9],
hw:[function(a){var z,y,x
H.e(a,"$isau")
if(!this.br(a)){this.aA(a)
z=this.an(a)
if(this.x){y=this.aO(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.ap(a)
if(this.c.aV(z,x))a.preventDefault()}},"$1","gel",4,0,9],
hB:[function(a){var z,y,x
H.e(a,"$isau")
this.aA(a)
z=this.an(a)
if(this.x){y=this.aO(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.ap(a)
if(this.c.aU(z,x))a.preventDefault()},"$1","ger",4,0,9],
hv:[function(a){var z,y,x
H.e(a,"$isau")
if(!this.br(a)){this.aA(a)
z=this.an(a)
if(this.x){y=this.aO(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.ap(a)
if(this.c.aU(z,x))a.preventDefault()}},"$1","gek",4,0,9],
hD:[function(a){var z,y
H.e(a,"$isbE")
this.aA(a)
z=new V.Y((a&&C.v).gff(a),C.v.gfg(a)).p(0,180)
if(this.x){if(this.d.fT(z))a.preventDefault()
return}if(this.r)return
y=this.ap(a)
if(this.c.fU(z,y))a.preventDefault()},"$1","geu",4,0,35],
hE:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.an(this.y)
v=this.ap(this.y)
this.d.ep(w,v,x)}},"$1","gev",4,0,13],
hI:[function(a){var z
H.e(a,"$isbf")
this.a.focus()
this.f=!0
this.bC(a)
z=this.bx(a)
if(this.e.fR(z))a.preventDefault()},"$1","geA",4,0,16],
hG:[function(a){var z
H.e(a,"$isbf")
this.bC(a)
z=this.bx(a)
if(this.e.fP(z))a.preventDefault()},"$1","gey",4,0,16],
hH:[function(a){var z
H.e(a,"$isbf")
this.bC(a)
z=this.bx(a)
if(this.e.fQ(z))a.preventDefault()},"$1","gez",4,0,16]}}],["","",,V,{"^":"",
oh:[function(a,b){if(typeof b!=="number")return b.F()
if(typeof a!=="number")return H.m(a)
return Math.abs(b-a)<=1e-9},"$2","iI",8,0,36],
o5:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.b0(a-b,z)
return(a<0?a+z:a)+b},
H:function(a,b,c){if(a==null)return C.b.ab("null",c)
return C.b.ab(C.d.dh($.p.$2(a,0)?0:a,b),c+b+1)},
cx:function(a,b,c){var z,y,x,w,v
H.w(a,"$isf",[P.q],"$asf")
z=H.i([],[P.j])
for(y=0,x=0;x<4;++x){w=V.H(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.d(z,v)
C.a.m(z,v,C.b.ab(z[v],y))}return z},
at:{"^":"c;a,b,c",
t:function(a,b){var z,y,x
z=this.a+b.a
y=this.b+b.b
x=this.c+b.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.at(z,y,x)},
l:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.at(z,y,x)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.at))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"},
u:{
dO:function(a,b,c){var z,y,x,w,v,u,t,s
a*=6
z=C.d.bb(a)
y=a-z
x=b*(1-c)
w=b*(1-c*y)
v=b*(1-c*(1-y))
switch(z){case 0:if(b<0)u=0
else u=b>1?1:b
if(v<0)t=0
else t=v>1?1:v
if(x<0)s=0
else s=x>1?1:x
return new V.at(u,t,s)
case 1:if(w<0)u=0
else u=w>1?1:w
if(b<0)t=0
else t=b>1?1:b
if(x<0)s=0
else s=x>1?1:x
return new V.at(u,t,s)
case 2:if(x<0)u=0
else u=x>1?1:x
if(b<0)t=0
else t=b>1?1:b
if(v<0)s=0
else s=v>1?1:v
return new V.at(u,t,s)
case 3:if(x<0)u=0
else u=x>1?1:x
if(w<0)t=0
else t=w>1?1:w
if(b<0)s=0
else s=b>1?1:b
return new V.at(u,t,s)
case 4:if(v<0)u=0
else u=v>1?1:v
if(x<0)t=0
else t=x>1?1:x
if(b<0)s=0
else s=b>1?1:b
return new V.at(u,t,s)
default:if(b<0)u=0
else u=b>1?1:b
if(x<0)t=0
else t=x>1?1:x
if(w<0)s=0
else s=w>1?1:w
return new V.at(u,t,s)}}}},
F:{"^":"c;a,b,c,d",
c6:function(a){return H.i([this.a,this.b,this.c,this.d],[P.q])},
l:function(a,b){var z,y,x,w
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
return new V.F(z,y,x,w)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}},
bW:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
c7:function(a,b){var z=H.i([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isbW")
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.m(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.m(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.m(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
if(typeof s!=="number")return H.m(s)
r=a7.b
if(typeof r!=="number")return H.m(r)
q=a7.f
if(typeof q!=="number")return H.m(q)
p=a7.z
if(typeof p!=="number")return H.m(p)
o=a7.cy
if(typeof o!=="number")return H.m(o)
n=a7.c
if(typeof n!=="number")return H.m(n)
m=a7.r
if(typeof m!=="number")return H.m(m)
l=a7.Q
if(typeof l!=="number")return H.m(l)
k=a7.db
if(typeof k!=="number")return H.m(k)
j=a7.d
if(typeof j!=="number")return H.m(j)
i=a7.x
if(typeof i!=="number")return H.m(i)
h=a7.ch
if(typeof h!=="number")return H.m(h)
g=a7.dx
if(typeof g!=="number")return H.m(g)
f=this.e
if(typeof f!=="number")return f.l()
e=this.f
if(typeof e!=="number")return e.l()
d=this.r
if(typeof d!=="number")return d.l()
c=this.x
if(typeof c!=="number")return c.l()
b=this.y
if(typeof b!=="number")return b.l()
a=this.z
if(typeof a!=="number")return a.l()
a0=this.Q
if(typeof a0!=="number")return a0.l()
a1=this.ch
if(typeof a1!=="number")return a1.l()
a2=this.cx
if(typeof a2!=="number")return a2.l()
a3=this.cy
if(typeof a3!=="number")return a3.l()
a4=this.db
if(typeof a4!=="number")return a4.l()
a5=this.dx
if(typeof a5!=="number")return a5.l()
return V.aI(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bW))return!1
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
i:function(a){return this.N()},
cU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.cx(H.i([this.a,this.e,this.y,this.cx],z),b,c)
x=V.cx(H.i([this.b,this.f,this.z,this.cy],z),b,c)
w=V.cx(H.i([this.c,this.r,this.Q,this.db],z),b,c)
v=V.cx(H.i([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.d(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.d(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.d(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.d(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.d(y,1)
q=q+y[1]+", "
if(1>=t)return H.d(x,1)
q=q+x[1]+", "
if(1>=s)return H.d(w,1)
q=q+w[1]+", "
if(1>=r)return H.d(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.d(y,2)
u=u+y[2]+", "
if(2>=t)return H.d(x,2)
u=u+x[2]+", "
if(2>=s)return H.d(w,2)
u=u+w[2]+", "
if(2>=r)return H.d(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.d(y,3)
q=q+y[3]+", "
if(3>=t)return H.d(x,3)
q=q+x[3]+", "
if(3>=s)return H.d(w,3)
q=q+w[3]+", "
if(3>=r)return H.d(v,3)
return u+(q+v[3]+"]")},
C:function(a){return this.cU(a,3,0)},
N:function(){return this.cU("",3,0)},
u:{
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ce:function(){return V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
N:{"^":"c;a,b",
t:function(a,b){return new V.N(this.a+b.a,this.b+b.b)},
F:function(a,b){return new V.N(this.a-b.a,this.b-b.b)},
l:function(a,b){return new V.N(this.a*b,this.b*b)},
p:function(a,b){if($.p.$2(b,0))return new V.N(0,0)
return new V.N(this.a/b,this.b/b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
R:{"^":"c;a,b,c",
t:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.m(w)
return new V.R(this.a+z,this.b+y,x+w)},
F:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.F()
if(typeof w!=="number")return H.m(w)
return new V.R(this.a-z,this.b-y,x-w)},
l:function(a,b){var z=this.c
if(typeof z!=="number")return z.l()
return new V.R(this.a*b,this.b*b,z*b)},
p:function(a,b){var z
if($.p.$2(b,0))return new V.R(0,0,0)
z=this.c
if(typeof z!=="number")return z.p()
return new V.R(this.a/b,this.b/b,z/b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}},
ak:{"^":"c;a,b,c,d",
l:function(a,b){return new V.ak(this.a*b,this.b*b,this.c*b,this.d*b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}},
es:{"^":"c;a,b,c,d",
ga6:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.es))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"},
u:{
et:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.es(a,b,c,d)}}},
cZ:{"^":"c;a,b,c,d,e,f",
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cZ))return!1
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
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+", "+V.H(this.e,3,0)+", "+V.H(this.f,3,0)+"]"},
u:{
eu:function(a,b,c,d,e,f){return new V.cZ(a,b,c,d,e,f)}}},
Y:{"^":"c;a,b",
d2:[function(a){return Math.sqrt(this.A(this))},"$0","gj",1,0,18],
A:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.m(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.m(w)
return z*y+x*w},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.Y(z*b,y*b)},
p:function(a,b){var z,y
if($.p.$2(b,0))return new V.Y(0,0)
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.Y(z/b,y/b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
o:{"^":"c;a,b,c",
d2:[function(a){return Math.sqrt(this.A(this))},"$0","gj",1,0,18],
A:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.m(y)
return this.a*a.a+this.b*a.b+z*y},
bU:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.F()
if(typeof x!=="number")return H.m(x)
return new V.o(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
ae:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.m(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.l()
v=a.a
u=this.a
return new V.o(z*y-x*w,x*v-u*y,u*w-z*v)},
t:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.m(w)
return new V.o(this.a+z,this.b+y,x+w)},
M:function(a){var z=this.c
if(typeof z!=="number")return z.M()
return new V.o(-this.a,-this.b,-z)},
l:function(a,b){var z=this.c
if(typeof z!=="number")return z.l()
return new V.o(this.a*b,this.b*b,z*b)},
p:function(a,b){var z
if($.p.$2(b,0))return new V.o(0,0,0)
z=this.c
if(typeof z!=="number")return z.p()
return new V.o(this.a/b,this.b/b,z/b)},
d1:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.o))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}},
bC:{"^":"c;a,b,c,d",
d2:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gj",1,0,18],
l:function(a,b){return new V.bC(this.a*b,this.b*b,this.c*b,this.d*b)},
p:function(a,b){if($.p.$2(b,0))return new V.bC(0,0,0,0)
return new V.bC(this.a/b,this.b/b,this.c/b,this.d/b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bC))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}}],["","",,U,{"^":"",hm:{"^":"cJ;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bk:function(a){var z=V.o5(a,this.c,this.b)
return z},
gD:function(){var z=this.y
if(z==null){z=D.W()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.H(a)},
sc8:function(a,b){},
sbV:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bk(z)}z=new D.C("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.T(z)}},
sbX:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bk(z)}z=new D.C("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.T(z)}},
sU:function(a,b){var z,y
b=this.bk(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.C("location",y,b,this,[P.q])
z.b=!0
this.T(z)}},
sbW:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.C("maximumVelocity",y,a,this,[P.q])
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
z=new D.C("velocity",x,a,this,[P.q])
z.b=!0
this.T(z)}},
sbQ:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.C("dampening",y,a,this,[P.q])
z.b=!0
this.T(z)}},
aL:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sU(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
u:{
cK:function(){var z=new U.hm()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dP:{"^":"ag;0a,0b",
gD:function(){var z=this.b
if(z==null){z=D.W()
this.b=z}return z},
aM:function(a,b,c){return this.a},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dP))return!1
return J.I(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}},e0:{"^":"aX;0e,0f,0r,0a,0b,0c,0d",
gD:function(){var z=this.e
if(z==null){z=D.W()
this.e=z}return z},
T:[function(a){var z
H.e(a,"$isB")
z=this.e
if(!(z==null))z.H(a)},function(){return this.T(null)},"ad","$1","$0","gaz",0,2,6],
hq:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ag
H.w(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gaz(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){s=t.gD()
s.toString
H.h(x,w)
r=s.a
if(r==null){r=H.i([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.e4(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gef",8,0,26],
hF:[function(a,b){var z,y,x,w,v
z=U.ag
H.w(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gaz(),w=0;w<b.length;b.length===y||(0,H.E)(b),++w){v=b[w]
if(v!=null)v.gD().G(0,x)}z=new D.e5(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gex",8,0,26],
aM:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aG(z,z.length,0,[H.u(z,0)]),x=null;z.J();){y=z.d
if(y!=null){w=y.aM(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.ce():x
z=this.e
if(!(z==null))z.al(0)}return this.f},
B:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e0))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.I(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asl:function(){return[U.ag]},
$asaX:function(){return[U.ag]},
$isag:1},ag:{"^":"cJ;"},ka:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gD:function(){var z=this.cy
if(z==null){z=D.W()
this.cy=z}return z},
T:[function(a){var z
H.e(a,"$isB")
z=this.cy
if(!(z==null))z.H(a)},function(){return this.T(null)},"ad","$1","$0","gaz",0,2,6],
aP:function(a){if(this.a!=null)return!1
this.a=a
a.c.gcR().h(0,this.gbs())
this.a.c.gd4().h(0,this.gbt())
this.a.c.gdi().h(0,this.gbu())
return!0},
ea:[function(a){H.e(a,"$isB")
if(!J.I(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbs",4,0,5],
eb:[function(a){var z,y,x,w,v,u,t
a=H.af(H.e(a,"$isB"),"$isbx")
if(!this.y)return
if(this.x){z=a.d.F(0,a.y)
z=new V.Y(z.a,z.b)
z=z.A(z)
y=this.r
if(typeof y!=="number")return H.m(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.F(0,a.y)
z=new V.Y(y.a,y.b).l(0,2).p(0,z.ga6())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.m(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=new V.Y(x.a,x.b).l(0,2).p(0,z.ga6())
x=this.b
v=w.a
if(typeof v!=="number")return v.M()
u=this.e
if(typeof u!=="number")return H.m(u)
t=this.z
if(typeof t!=="number")return H.m(t)
x.sU(0,-v*u+t)
this.b.sV(0)
y=y.F(0,a.z)
this.Q=new V.Y(y.a,y.b).l(0,2).p(0,z.ga6())}this.ad()},"$1","gbt",4,0,5],
ec:[function(a){var z,y,x
H.e(a,"$isB")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.A(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.m(x)
z.sV(y*10*x)
this.ad()}},"$1","gbu",4,0,5],
aM:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.ch=y
x=b.y
this.b.aL(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aI(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isag:1},kb:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gD:function(){var z=this.fx
if(z==null){z=D.W()
this.fx=z}return z},
T:[function(a){var z
H.e(a,"$isB")
z=this.fx
if(!(z==null))z.H(a)},function(){return this.T(null)},"ad","$1","$0","gaz",0,2,6],
aP:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gcR().h(0,this.gbs())
this.a.c.gd4().h(0,this.gbt())
this.a.c.gdi().h(0,this.gbu())
z=this.a.d
y=z.f
if(y==null){y=D.W()
z.f=y
z=y}else z=y
z.h(0,this.ge6())
z=this.a.d
y=z.d
if(y==null){y=D.W()
z.d=y
z=y}else z=y
z.h(0,this.ge7())
z=this.a.e
y=z.b
if(y==null){y=D.W()
z.b=y
z=y}else z=y
z.h(0,this.geT())
z=this.a.e
y=z.d
if(y==null){y=D.W()
z.d=y
z=y}else z=y
z.h(0,this.geS())
z=this.a.e
y=z.c
if(y==null){y=D.W()
z.c=y
z=y}else z=y
z.h(0,this.geR())
return!0},
ah:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.Y(z,y)},
ea:[function(a){a=H.af(H.e(a,"$isB"),"$isbx")
if(!J.I(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbs",4,0,5],
eb:[function(a){var z,y,x,w,v,u,t
a=H.af(H.e(a,"$isB"),"$isbx")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.Y(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.m(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.ah(new V.Y(y.a,y.b).l(0,2).p(0,z.ga6()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.m(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.m(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.ah(new V.Y(x.a,x.b).l(0,2).p(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.m(u)
t=this.cy
if(typeof t!=="number")return H.m(t)
x.sU(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.m(v)
x=this.db
if(typeof x!=="number")return H.m(x)
t.sU(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.F(0,a.z)
this.dx=this.ah(new V.Y(y.a,y.b).l(0,2).p(0,z.ga6()))}this.ad()},"$1","gbt",4,0,5],
ec:[function(a){var z,y,x
H.e(a,"$isB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.m(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.m(z)
x.sV(-y*10*z)
this.ad()}},"$1","gbu",4,0,5],
hm:[function(a){if(H.af(H.e(a,"$isB"),"$iseh").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ge6",4,0,5],
hn:[function(a){var z,y,x,w,v,u,t
a=H.af(H.e(a,"$isB"),"$isbx")
if(!J.I(this.d,a.x.b))return
z=a.c
y=a.d
x=y.F(0,a.y)
w=this.ah(new V.Y(x.a,x.b).l(0,2).p(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.m(u)
t=this.cy
if(typeof t!=="number")return H.m(t)
x.sU(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.m(v)
x=this.db
if(typeof x!=="number")return H.m(x)
t.sU(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.F(0,a.z)
this.dx=this.ah(new V.Y(y.a,y.b).l(0,2).p(0,z.ga6()))
this.ad()},"$1","ge7",4,0,5],
hN:[function(a){H.e(a,"$isB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geT",4,0,5],
hM:[function(a){var z,y,x,w,v,u,t
a=H.af(H.e(a,"$isB"),"$iseJ")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.Y(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.m(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.ah(new V.Y(y.a,y.b).l(0,2).p(0,z.ga6()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.m(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.m(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.ah(new V.Y(x.a,x.b).l(0,2).p(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.m(u)
t=this.cy
if(typeof t!=="number")return H.m(t)
x.sU(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.m(v)
x=this.db
if(typeof x!=="number")return H.m(x)
t.sU(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.F(0,a.z)
this.dx=this.ah(new V.Y(y.a,y.b).l(0,2).p(0,z.ga6()))}this.ad()},"$1","geS",4,0,5],
hL:[function(a){var z,y,x
H.e(a,"$isB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.m(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.m(z)
x.sV(-y*10*z)
this.ad()}},"$1","geR",4,0,5],
aM:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.dy=y
x=b.y
this.c.aL(0,x)
this.b.aL(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aI(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.aI(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isag:1},kc:{"^":"c;0a,0b,0c,0d,0e,0f,0r",
gD:function(){var z=this.r
if(z==null){z=D.W()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.H(a)},
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.W()
z.e=y
z=y}else z=y
y=this.ged()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.W()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
ho:[function(a){var z,y,x,w
H.e(a,"$isB")
if(!J.I(this.b,this.a.b.c))return
H.af(a,"$iscT")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.C("zoom",z,w,this,[P.q])
z.b=!0
this.T(z)}},"$1","ged",4,0,5],
aM:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aI(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isag:1}}],["","",,M,{"^":"",hD:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x",
av:[function(a){var z
H.e(a,"$isB")
z=this.x
if(!(z==null))z.H(a)},function(){return this.av(null)},"ha","$1","$0","gag",0,2,6],
hs:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aP
H.w(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gag(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bR()
s.d=0
t.sa4(s)}s=t.ga4()
s.toString
H.h(x,w)
r=s.a
if(r==null){r=H.i([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.e4(a,b,this,[z])
z.b=!0
this.av(z)},"$2","geh",8,0,14],
ht:[function(a,b){var z,y,x,w,v,u
z=E.aP
H.w(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gag(),w=0;w<b.length;b.length===y||(0,H.E)(b),++w){v=b[w]
if(v!=null){if(v.ga4()==null){u=new D.bR()
u.d=0
v.sa4(u)}v.ga4().G(0,x)}}z=new D.e5(a,b,this,[z])
z.b=!0
this.av(z)},"$2","gei",8,0,14],
sdf:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gD().G(0,this.gag())
y=this.c
this.c=a
if(a!=null)a.gD().h(0,this.gag())
z=new D.C("technique",y,this.c,this,[O.d1])
z.b=!0
this.av(z)}},
gD:function(){var z=this.x
if(z==null){z=D.W()
this.x=z}return z},
aJ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.dd(this.c)
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
if(typeof x!=="number")return H.m(x)
u=C.d.ac(v.a*x)
if(typeof w!=="number")return H.m(w)
t=C.d.ac(v.b*w)
s=C.d.ac(v.c*x)
a.c=s
v=C.d.ac(v.d*w)
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
n=V.aI(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.dc(n)
y=$.eo
if(y==null){y=new V.o(0,0,-1)
m=y.p(0,Math.sqrt(y.A(y)))
y=new V.o(0,1,0).ae(m)
l=y.p(0,Math.sqrt(y.A(y)))
k=m.ae(l)
j=new V.o(0,0,0)
y=V.aI(l.a,k.a,m.a,l.M(0).A(j),l.b,k.b,m.b,k.M(0).A(j),l.c,k.c,m.c,m.M(0).A(j),0,0,0,1)
$.eo=y
i=y}else i=y
z=z.b
if(z!=null){h=z.a
if(h!=null)i=h.l(0,i)}a.db.dc(i)
for(z=this.d.a,z=new J.aG(z,z.length,0,[H.u(z,0)]);z.J();)z.d.aL(0,a)
for(z=this.d.a,z=new J.aG(z,z.length,0,[H.u(z,0)]);z.J();)z.d.aJ(a)
this.a.toString
a.cy.bZ()
a.db.bZ()
this.b.toString
a.da()},
$isoV:1}}],["","",,A,{"^":"",dz:{"^":"c;a,b,c"},h8:{"^":"c;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fi:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fh:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},hO:{"^":"ew;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r,0x,0y"},ew:{"^":"dC;",
dC:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cs:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fG(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.T("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
eK:function(){var z,y,x,w,v,u
z=H.i([],[A.dz])
y=this.a
x=H.A(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.m(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dz(y,v.name,u))}this.x=new A.h8(z)},
eM:function(){var z,y,x,w,v,u
z=H.i([],[A.ad])
y=this.a
x=H.A(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.m(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.fe(v.type,v.size,v.name,u))}this.y=new A.jT(z)},
ay:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.jN(z,y,b,c)
else return A.d4(z,y,b,a,c)},
dX:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.jX(z,y,b,c)
else return A.d4(z,y,b,a,c)},
dY:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.jY(z,y,b,c)
else return A.d4(z,y,b,a,c)},
b6:function(a,b){return new P.f9(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
fe:function(a,b,c,d){switch(a){case 5120:return this.ay(b,c,d)
case 5121:return this.ay(b,c,d)
case 5122:return this.ay(b,c,d)
case 5123:return this.ay(b,c,d)
case 5124:return this.ay(b,c,d)
case 5125:return this.ay(b,c,d)
case 5126:return new A.eW(this.a,this.r,c,d)
case 35664:return new A.jP(this.a,this.r,c,d)
case 35665:return new A.eX(this.a,this.r,c,d)
case 35666:return new A.d5(this.a,this.r,c,d)
case 35667:return new A.jQ(this.a,this.r,c,d)
case 35668:return new A.jR(this.a,this.r,c,d)
case 35669:return new A.jS(this.a,this.r,c,d)
case 35674:return new A.jV(this.a,this.r,c,d)
case 35675:return new A.jW(this.a,this.r,c,d)
case 35676:return new A.ck(this.a,this.r,c,d)
case 35678:return this.dX(b,c,d)
case 35680:return this.dY(b,c,d)
case 35670:throw H.a(this.b6("BOOL",c))
case 35671:throw H.a(this.b6("BOOL_VEC2",c))
case 35672:throw H.a(this.b6("BOOL_VEC3",c))
case 35673:throw H.a(this.b6("BOOL_VEC4",c))
default:throw H.a(P.T("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},ad:{"^":"c;"},jT:{"^":"c;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.N()},
fs:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.E)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.fs("\n")}},jN:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},jQ:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},jR:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},jS:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},jO:{"^":"ad;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
u:{
d4:function(a,b,c,d,e){var z=new A.jO(a,b,c,e)
z.f=d
z.e=P.iz(d,0,!1,P.n)
return z}}},eW:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},jP:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},eX:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},d5:{"^":"ad;a,b,c,d",
b1:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.k(this.c)}},jV:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},jW:{"^":"ad;a,b,c,d",
i:function(a){return"UniformMat3: "+H.k(this.c)}},ck:{"^":"ad;a,b,c,d",
bi:function(a){var z=new Float32Array(H.cr(H.w(a,"$isf",[P.q],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},jX:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},jY:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
cu:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.z,P.q,P.q]})
z=F.Z()
F.bI(z,b,c,d,a,1,0,0,1)
F.bI(z,b,c,d,a,0,1,0,3)
F.bI(z,b,c,d,a,0,0,1,2)
F.bI(z,b,c,d,a,-1,0,0,0)
F.bI(z,b,c,d,a,0,-1,0,0)
F.bI(z,b,c,d,a,0,0,-1,3)
z.a9()
return z},
cq:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.b_()
return(y>0?z+4:z)*2},
bI:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.z,P.q,P.q]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.o(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.o(t+h,s+f,r+g)
z.b=q
p=new V.o(t-h,s-f,r-g)
z.c=p
o=new V.o(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cq(y)
k=F.cq(z.b)
j=F.c5(d,e,new F.mi(z,F.cq(z.c),F.cq(z.d),k,l,c),b)
if(j!=null)a.aG(j)},
cv:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(e,{func:1,ret:P.q,args:[P.q]})
if(e==null)e=new F.mH()
if(f<3)return
z=F.Z()
y=b?-1:1
x=-6.283185307179586/f
w=H.i([],[F.z])
v=z.a
u=new V.o(0,0,y)
u=u.p(0,Math.sqrt(u.A(u)))
C.a.h(w,v.f2(new V.ak(a,-1,-1,-1),new V.F(1,1,1,1),new V.R(0,0,d),new V.o(0,0,y),new V.N(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.m(p)
o=new V.o(r,q,y).p(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.ao(new V.ak(a,-1,-1,-1),null,new V.F(n,l,m,1),new V.R(r*p,q*p,d),new V.o(0,0,y),new V.N(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.cL(w)
return z},
dl:function(a,b,c,d,e,f){return F.fH(!0,c,d,new F.mB(a,f),e)},
fH:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.c5(c,e,new F.mD(d),null)
if(z==null)return
z.a9()
z.b8()
if(b)z.aG(F.cv(3,!1,!1,1,new F.mE(d),e))
z.aG(F.cv(1,!0,!1,-1,new F.mF(d),e))
return z},
fR:function(a,b){var z=F.c5(a,b,new F.mZ(),null)
z.d.bd()
z.a9()
z.b8()
return z},
fQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.Z()
y=Math.sqrt(5)/2+0.5
x=F.ae(z,new V.o(-1,y,0))
w=F.ae(z,new V.o(1,y,0))
v=-y
u=F.ae(z,new V.o(-1,v,0))
t=F.ae(z,new V.o(1,v,0))
s=F.ae(z,new V.o(0,-1,v))
r=F.ae(z,new V.o(0,1,v))
q=F.ae(z,new V.o(0,-1,y))
p=F.ae(z,new V.o(0,1,y))
o=F.ae(z,new V.o(y,0,1))
n=F.ae(z,new V.o(y,0,-1))
m=F.ae(z,new V.o(v,0,1))
l=F.ae(z,new V.o(v,0,-1))
F.X(z,x,l,r,a)
F.X(z,x,r,w,a)
F.X(z,x,w,p,a)
F.X(z,x,p,m,a)
F.X(z,x,m,l,a)
F.X(z,w,r,n,a)
F.X(z,r,l,s,a)
F.X(z,l,m,u,a)
F.X(z,m,p,q,a)
F.X(z,p,w,o,a)
F.X(z,t,n,s,a)
F.X(z,t,s,u,a)
F.X(z,t,u,q,a)
F.X(z,t,q,o,a)
F.X(z,t,o,n,a)
F.X(z,s,n,r,a)
F.X(z,u,s,l,a)
F.X(z,q,u,m,a)
F.X(z,o,q,p,a)
F.X(z,n,o,w,a)
z.d3(new F.d8(),new F.kp())
return z},
ae:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.p(0,Math.sqrt(b.A(b)))
z=b.a
y=b.b
x=b.c
w=F.ao(null,null,null,new V.R(z,y,x),b,null,null,null,0)
v=a.fk(w,new F.d8())
if(v!=null)return v
u=z*0.5+0.5
t=y*0.5+0.5
if(typeof x!=="number")return x.l()
s=x*0.5+0.5
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
w.sa1(0,new V.F(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.sc5(new V.N(q,p<0?-p:p))
a.a.h(0,w)
return w},
X:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.a0(0,b,d,c)
else{z=F.ae(a,b.r.t(0,c.r).l(0,0.5))
y=F.ae(a,c.r.t(0,d.r).l(0,0.5))
x=F.ae(a,d.r.t(0,b.r).l(0,0.5))
w=e-1
F.X(a,b,z,x,w)
F.X(a,z,c,y,w)
F.X(a,y,x,z,w)
F.X(a,x,y,d,w)}},
du:function(a,b,c,d){var z,y
z={}
z.a=b
if(H.h(b,{func:1,ret:P.q,args:[P.q,P.q]})==null)z.a=new F.o_()
y=F.cu(a,null,new F.o0(z,c),d)
y.b8()
return y},
o2:function(a,b,c,d){return F.fI(c,a,d,b,new F.o3())},
mX:function(a,b,c,d,e,f){return F.fI(d,a,e,b,new F.mY(f,c))},
fI:function(a,b,c,d,e){var z=F.c5(a,b,new F.mC(H.h(e,{func:1,ret:V.R,args:[P.q]}),d,b,c),null)
if(z==null)return
z.a9()
z.b8()
return z},
fM:function(a,b,c){var z={}
z.a=b
if(H.h(b,{func:1,ret:P.q,args:[P.q,P.q]})==null)z.a=new F.mO()
return F.c5(c,a,new F.mP(z),null)},
c5:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.z,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.Z()
y=H.i([],[F.z])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ao(null,null,new V.F(u,0,0,1),null,null,new V.N(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bP(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.ao(null,null,new V.F(o,n,m,1),null,null,new V.N(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bP(d))}}z.d.f1(a+1,b+1,y)
return z},
mi:{"^":"b:8;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bU(z.b,b).bU(z.d.bU(z.c,b),c)
a.sU(0,new V.R(y.a,y.b,y.c))
a.saW(y.p(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
a.sbG(new V.ak(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mH:{"^":"b:19;",
$1:function(a){return 1}},
mB:{"^":"b:10;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mD:{"^":"b:8;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.m(v)
y=-y*v
u=x*v
a.sU(0,new V.R(y,u,w))
u=new V.o(y,u,w)
a.saW(u.p(0,Math.sqrt(u.A(u))))
a.sbG(new V.ak(1-c,2+c,-1,-1))}},
mE:{"^":"b:19;a",
$1:function(a){return this.a.$2(a,1)}},
mF:{"^":"b:19;a",
$1:function(a){return this.a.$2(1-a,0)}},
mZ:{"^":"b:8;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.o(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.p(0,Math.sqrt(w.A(w)))
a.sU(0,new V.R(x.a,x.b,x.c))}},
o_:{"^":"b:10;",
$2:function(a,b){return 0}},
o0:{"^":"b:8;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.m(z)
y=a.f
x=new V.o(y.a,y.b,y.c)
z=x.p(0,Math.sqrt(x.A(x))).l(0,this.b+z)
a.sU(0,new V.R(z.a,z.b,z.c))}},
o3:{"^":"b:27;",
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)}},
mY:{"^":"b:27;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.R(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mC:{"^":"b:8;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dv(y.$1(z),x)
x=J.dv(y.$1(z+3.141592653589793/this.c),x).F(0,w)
x=new V.o(x.a,x.b,x.c)
v=x.p(0,Math.sqrt(x.A(x)))
u=new V.o(1,0,0)
y=v.ae(!v.B(0,u)?new V.o(0,0,1):u)
t=y.p(0,Math.sqrt(y.A(y)))
y=t.ae(v)
u=y.p(0,Math.sqrt(y.A(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.l(0,y*x)
x=t.l(0,r*x)
r=y.c
q=x.c
if(typeof r!=="number")return r.F()
if(typeof q!=="number")return H.m(q)
a.sU(0,w.t(0,new V.R(y.a-x.a,y.b-x.b,r-q)))}},
mO:{"^":"b:10;",
$2:function(a,b){return 0}},
mP:{"^":"b:8;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sU(0,new V.R(z,y,this.a.a.$2(b,c)))
x=new V.o(z,y,1)
a.saW(x.p(0,Math.sqrt(x.A(x))))
x=1-b
w=1-c
a.sbG(new V.ak(b*c,2+x*c,4+b*w,6+x*w))}},
K:{"^":"c;0a,0b,0c,0d,0e",
aq:function(){if(!this.gaR()){C.a.G(this.a.a.d.b,this)
this.a.a.R()}this.bz()
this.bA()
this.eD()},
bD:function(a){this.a=a
C.a.h(a.d.b,this)},
bE:function(a){this.b=a
C.a.h(a.d.c,this)},
eJ:function(a){this.c=a
C.a.h(a.d.d,this)},
bz:function(){var z=this.a
if(z!=null){C.a.G(z.d.b,this)
this.a=null}},
bA:function(){var z=this.b
if(z!=null){C.a.G(z.d.c,this)
this.b=null}},
eD:function(){var z=this.c
if(z!=null){C.a.G(z.d.d,this)
this.c=null}},
gaR:function(){return this.a==null||this.b==null||this.c==null},
dO:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.o(0,0,0)
if(y!=null)v=v.t(0,y)
if(x!=null)v=v.t(0,x)
if(w!=null)v=v.t(0,w)
if(v.d1())return
return v.p(0,Math.sqrt(v.A(v)))},
dU:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.F(0,y)
z=new V.o(z.a,z.b,z.c)
v=z.p(0,Math.sqrt(z.A(z)))
z=w.F(0,y)
z=new V.o(z.a,z.b,z.c)
z=v.ae(z.p(0,Math.sqrt(z.A(z))))
return z.p(0,Math.sqrt(z.A(z)))},
bM:function(){if(this.d!=null)return!0
var z=this.dO()
if(z==null){z=this.dU()
if(z==null)return!1}this.d=z
this.a.a.R()
return!0},
dN:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.o(0,0,0)
if(y!=null)v=v.t(0,y)
if(x!=null)v=v.t(0,x)
if(w!=null)v=v.t(0,w)
if(v.d1())return
return v.p(0,Math.sqrt(v.A(v)))},
dT:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.F(0,u)
z=new V.o(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.M(0)}else{l=(z-q.b)/n
z=r.F(0,u).l(0,l).t(0,u).F(0,x)
z=new V.o(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.M(0)}z=this.d
if(z!=null){k=z.p(0,Math.sqrt(z.A(z)))
z=k.ae(m)
z=z.p(0,Math.sqrt(z.A(z))).ae(k)
m=z.p(0,Math.sqrt(z.A(z)))}return m},
bK:function(){if(this.e!=null)return!0
var z=this.dN()
if(z==null){z=this.dT()
if(z==null)return!1}this.e=z
this.a.a.R()
return!0},
aw:function(a,b){var z=b.a
if(z==null)throw H.a(P.T("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.T("May not replace a face's vertex with a vertex attached to a different shape."))},
gfa:function(a){if(J.I(this.a,this.b))return!0
if(J.I(this.b,this.c))return!0
if(J.I(this.c,this.a))return!0
return!1},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z,y
if(this.gaR())return a+"disposed"
z=a+C.b.ab(J.aa(this.a.e),0)+", "+C.b.ab(J.aa(this.b.e),0)+", "+C.b.ab(J.aa(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.C("")},
u:{
b0:function(a,b,c){var z,y,x
z=new F.K()
y=a.a
if(y==null)H.J(P.T("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.J(P.T("May not create a face with vertices attached to different shapes."))
z.bD(a)
z.bE(b)
z.eJ(c)
C.a.h(z.a.a.d.b,z)
z.a.a.R()
return z}}},
hG:{"^":"c;"},
ju:{"^":"hG;",
aF:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
b3:{"^":"c;0a,0b",
aq:function(){if(!this.gaR()){C.a.G(this.a.a.c.b,this)
this.a.a.R()}this.bz()
this.bA()},
bD:function(a){this.a=a
C.a.h(a.c.b,this)},
bE:function(a){this.b=a
C.a.h(a.c.c,this)},
bz:function(){var z=this.a
if(z!=null){C.a.G(z.c.b,this)
this.a=null}},
bA:function(){var z=this.b
if(z!=null){C.a.G(z.c.c,this)
this.b=null}},
gaR:function(){return this.a==null||this.b==null},
aw:function(a,b){var z=b.a
if(z==null)throw H.a(P.T("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.T("May not replace a line's vertex with a vertex attached to a different shape."))},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){if(this.gaR())return a+"disposed"
return a+C.b.ab(J.aa(this.a.e),0)+", "+C.b.ab(J.aa(this.b.e),0)},
N:function(){return this.C("")},
u:{
ec:function(a,b){var z,y,x
z=new F.b3()
if(a==null)H.J(P.T("May not create a line with a null start vertex."))
if(b==null)H.J(P.T("May not create a line with a null end vertex."))
y=a.a
if(y==null)H.J(P.T("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.J(P.T("May not create a line with vertices attached to different shapes."))
z.bD(a)
z.bE(b)
C.a.h(z.a.a.c.b,z)
z.a.a.R()
return z}}},
ir:{"^":"c;"},
jM:{"^":"ir;",
aF:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else return!1}}},
cX:{"^":"c;0a",
aq:function(){var z=this.a
if(z!=null){C.a.G(z.a.b.b,this)
this.a.a.R()}this.eC()},
eI:function(a){this.a=a
C.a.h(a.b.b,this)},
eC:function(){var z=this.a
if(z!=null){C.a.G(z.b.b,this)
this.a=null}},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ab(J.aa(z.e),0)},
N:function(){return this.C("")},
u:{
cY:function(a){var z=new F.cX()
if(a.a==null)H.J(P.T("May not create a point with a vertex which is not attached to a shape."))
z.eI(a)
C.a.h(z.a.a.b.b,z)
z.a.a.R()
return z}}},
a4:{"^":"c;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.W()
this.e=z}return z},
aG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.q()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){v=z[w]
this.a.h(0,v.X())}this.a.q()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.t()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.cY(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.t()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.t()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.ec(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.t()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.t()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.t()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.b0(p,o,m)}z=this.e
if(!(z==null))z.al(0)},
a9:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.a9()||!1
if(!this.a.a9())y=!1
z=this.e
if(!(z==null))z.al(0)
return y},
f9:function(a){var z,y,x,w,v,u,t,s,r
z=this.cP()
y=new V.o(z.d,z.e,z.f)
x=Math.sqrt(y.A(y))
if(x<=0)x=1
a=new F.j4()
a.a=1/x
a.b=new V.R(z.a,z.b,z.c)
for(w=this.a.c.length-1;w>=0;--w){y=this.a.c
if(w>=y.length)return H.d(y,w)
v=y[w]
y=a.b
u=v.f
t=y.a-u.a
s=y.b-u.b
y=y.c
u=u.c
if(typeof y!=="number")return y.F()
if(typeof u!=="number")return H.m(u)
r=y-u
u=Math.sqrt(t*t+s*s+r*r)*a.a
if(v.ch!==u){v.ch=u
y=v.a
if(y!=null){y=y.e
if(!(y==null))y.H(null)}}}},
f8:function(){return this.f9(null)},
cP:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.a.c
y=z.length
if(y<=0)return V.eu(0,0,0,0,0,0)
z=z[0].f
x=V.eu(z.a,z.b,z.c,0,0,0)
for(w=y-1,z=this.a;w>=1;--w){v=z.c
if(w>=v.length)return H.d(v,w)
v=v[w].f
u=v.a
t=v.b
v=v.c
s=x.d
r=x.a
if(u<r)s+=r-u
else{if(u>r+s)s=u-r
u=r}q=x.e
p=x.b
if(t<p)q+=p-t
else{if(t>p+q)q=t-p
t=p}o=x.f
n=x.c
if(typeof v!=="number")return v.L()
if(typeof n!=="number")return H.m(n)
if(v<n){o+=n-v
m=v}else{if(v>n+o)o=v-n
m=n}x=new V.cZ(u,t,m,s,q,o)}return x},
fl:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.d(x,y)
w=x[y]
if(b.aF(0,a,w))return w}return},
fk:function(a,b){return this.fl(a,b,0)},
eF:function(a,b){var z,y,x,w,v,u
H.w(b,"$isf",[F.z],"$asf")
this.a.h(0,a)
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.E)(b),++y){x=b[y]
for(;w=x.d,w.b.length+w.c.length+w.d.length>0;){w=w.k(0,0)
v=w.a
if(v==null||w.b==null||w.c==null)H.J(P.T("May not replace a face's vertex when the point has been disposed."))
if(J.I(v,x)){w.aw(x,a)
v=w.a
if(v!=null){C.a.G(v.d.b,w)
w.a=null}w.a=a
C.a.h(a.d.b,w)
u=1}else u=0
if(J.I(w.b,x)){w.aw(x,a)
v=w.b
if(v!=null){C.a.G(v.d.c,w)
w.b=null}w.b=a
C.a.h(a.d.c,w);++u}if(J.I(w.c,x)){w.aw(x,a)
v=w.c
if(v!=null){C.a.G(v.d.d,w)
w.c=null}w.c=a
C.a.h(a.d.d,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.H(null)}}for(;w=x.c,w.b.length+w.c.length>0;){w=w.k(0,0)
v=w.a
if(v==null||w.b==null)H.J(P.T("May not replace a line's vertex when the point has been disposed."))
if(J.I(v,x)){w.aw(x,a)
v=w.a
if(v!=null){C.a.G(v.c.b,w)
w.a=null}w.a=a
C.a.h(a.c.b,w)
u=1}else u=0
if(J.I(w.b,x)){w.aw(x,a)
v=w.b
if(v!=null){C.a.G(v.c.c,w)
w.b=null}w.b=a
C.a.h(a.c.c,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.H(null)}}for(;w=x.b.b,w.length>0;){w=w[0]
v=w.a
if(v==null)H.J(P.T("May not replace a point's vertex when the point has been disposed."))
if(J.I(v,x)){if(a.a==null)H.J(P.T("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=w.a
if(v!=null){C.a.G(v.b.b,w)
w.a=null}w.a=a
C.a.h(a.b.b,w)
u=1}else u=0
if(u>0){w=w.a.a.e
if(!(w==null))w.H(null)}}this.a.G(0,x)}},
d3:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.i(z.slice(0),[H.u(z,0)])
for(z=[F.z];y.length!==0;){x=C.a.gfn(y)
C.a.fW(y,0)
if(x!=null){w=H.i([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.E)(y),++u){t=y[u]
if(t!=null&&a.aF(0,x,t)){C.a.h(w,t)
C.a.G(y,t)}}if(w.length>1){s=b.aG(w)
if(s!=null){this.eF(s,w)
C.a.h(y,s)}}}}this.a.q()
this.c.bd()
this.d.bd()
this.b.fX()
this.c.c0(new F.jM())
this.d.c0(new F.ju())
z=this.e
if(!(z==null))z.al(0)},
f3:function(a){this.d3(new F.d8(),new F.iP())},
b8:function(){return this.f3(null)},
f6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$aM().a)!==0?1:0
if((y&$.$get$aL().a)!==0)++x
if((y&$.$get$aK().a)!==0)++x
if((y&$.$get$bh().a)!==0)++x
if((y&$.$get$bi().a)!==0)++x
if((y&$.$get$aS().a)!==0)++x
if((y&$.$get$bD().a)!==0)++x
if((y&$.$get$bj().a)!==0)++x
if((y&$.$get$bg().a)!==0)++x
w=b.gcb(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.q
t=H.i(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.i(y,[Z.dF])
for(r=0,q=0;q<x;++q){p=b.f4(q)
o=p.gcb(p)
C.a.m(s,q,new Z.dF(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].fC(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isf",[u],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cr(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dG(new Z.f6(34962,j),s,b)
i.b=H.i([],[Z.cc])
if(this.b.b.length!==0){u=P.n
h=H.i([],[u])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)}f=Z.da(y,34963,H.w(h,"$isf",[u],"$asf"))
C.a.h(i.b,new Z.cc(0,h.length,f))}if(this.c.b.length!==0){u=P.n
h=H.i([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)}f=Z.da(y,34963,H.w(h,"$isf",[u],"$asf"))
C.a.h(i.b,new Z.cc(1,h.length,f))}if(this.d.b.length!==0){u=P.n
h=H.i([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.q()
C.a.h(h,g.e)}f=Z.da(y,34963,H.w(h,"$isf",[u],"$asf"))
C.a.h(i.b,new Z.cc(4,h.length,f))}return i},
i:function(a){var z=H.i([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.E(z,"\n")},
af:function(a){var z=this.e
if(!(z==null))z.H(a)},
R:function(){return this.af(null)},
$isci:1,
u:{
Z:function(){var z,y
z=new F.a4()
y=new F.kl(z)
y.b=!1
y.c=H.i([],[F.z])
z.a=y
y=new F.jp(z)
y.b=H.i([],[F.cX])
z.b=y
y=new F.jo(z)
y.b=H.i([],[F.b3])
z.c=y
y=new F.jn(z)
y.b=H.i([],[F.K])
z.d=y
z.e=null
return z}}},
ci:{"^":"cJ;"},
jn:{"^":"c;a,0b",
a0:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.b0(b,c,d)},
cL:function(a){var z,y,x,w,v,u
H.w(a,"$isf",[F.z],"$asf")
z=H.i([],[F.K])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.d(a,v)
v=a[v]
if(w>=u)return H.d(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.b0(x,v,u))}}return z},
f1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isf",[F.z],"$asf")
z=H.i([],[F.K])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.d(c,x)
r=c[x];++x
if(x>=s)return H.d(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.d(c,p)
o=c[p]
if(y<0||y>=s)return H.d(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.b0(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.b0(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.b0(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.b0(q,n,r))}u=!u}w=!w}return z},
gj:function(a){return this.b.length},
c0:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aF(0,v,t)){v.aq()
break}}}}},
bd:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.gfa(x)
if(y)x.aq()}},
a9:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].bM())x=!1
return x},
bL:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].bK())x=!1
return x},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
N:function(){return this.C("")}},
jo:{"^":"c;a,0b",
n:function(a,b,c){this.a.a.h(0,b)
this.a.a.h(0,c)
return F.ec(b,c)},
gj:function(a){return this.b.length},
c0:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aF(0,v,t)){v.aq()
break}}}}},
bd:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.I(x.a,x.b)
if(y)x.aq()}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.i([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.E(z,"\n")},
N:function(){return this.C("")}},
jp:{"^":"c;a,0b",
gj:function(a){return this.b.length},
fX:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aq()}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
N:function(){return this.C("")}},
z:{"^":"c;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bP:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ao(this.cx,x,u,z,y,w,v,a,t)},
X:function(){return this.bP(null)},
gfA:function(a){var z
if(this.b.b.length===0){z=this.c
if(z.b.length===0&&z.c.length===0){z=this.d
z=z.b.length===0&&z.c.length===0&&z.d.length===0}else z=!1}else z=!1
return z},
sU:function(a,b){var z
if(!J.I(this.f,b)){this.f=b
z=this.a
if(z!=null)z.R()}},
saH:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.A(a)))
if(!J.I(this.r,a)){this.r=a
z=this.a
if(z!=null)z.R()}},
sP:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.A(a)))
if(!J.I(this.x,a)){this.x=a
z=this.a
if(z!=null)z.R()}},
sc5:function(a){var z
if(!J.I(this.y,a)){this.y=a
z=this.a
if(z!=null)z.R()}},
saW:function(a){var z
if(!J.I(this.z,a)){this.z=a
z=this.a
if(z!=null)z.R()}},
sa1:function(a,b){var z
if(!J.I(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.R()}},
sdl:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.R()}},
sbG:function(a){var z
if(!J.I(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.R()}},
fC:function(a){var z,y
z=J.Q(a)
if(z.B(a,$.$get$aM())){z=this.f
y=[P.q]
if(z==null)return H.i([0,0,0],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$aL())){z=this.r
y=[P.q]
if(z==null)return H.i([0,1,0],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$aK())){z=this.x
y=[P.q]
if(z==null)return H.i([0,0,1],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$bh())){z=this.y
y=[P.q]
if(z==null)return H.i([0,0],y)
else return H.i([z.a,z.b],y)}else if(z.B(a,$.$get$bi())){z=this.z
y=[P.q]
if(z==null)return H.i([0,0,0],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$aS())){z=this.Q
y=[P.q]
if(z==null)return H.i([1,1,1],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$bD())){z=this.Q
if(z==null)return H.i([1,1,1,1],[P.q])
else return z.c6(0)}else if(z.B(a,$.$get$bj()))return H.i([this.ch],[P.q])
else if(z.B(a,$.$get$bg())){z=this.cx
y=[P.q]
if(z==null)return H.i([-1,-1,-1,-1],y)
else return H.i([z.a,z.b,z.c,z.d],y)}else return H.i([],[P.q])},
bM:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.o(0,0,0)
this.d.v(0,new F.kv(z))
z=z.a
this.r=z.p(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.R()
z=this.a.e
if(!(z==null))z.al(0)}return!0},
bK:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.o(0,0,0)
this.d.v(0,new F.ku(z))
z=z.a
this.x=z.p(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.R()
z=this.a.e
if(!(z==null))z.al(0)}return!0},
cT:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.d(x,y)
w=x[y]
x=w.b
x.a.a.q()
x=x.e
a.a.a.q()
v=a.e
if(x==null?v==null:x===v)return w}return},
fo:function(a){var z=this.cT(a)
if(z!=null)return z
return a.cT(this)},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z,y,x
z=H.i([],[P.j])
C.a.h(z,C.b.ab(J.aa(this.e),0))
y=this.f
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
y=this.r
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
y=this.x
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
y=this.y
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
y=this.z
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,V.H(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.E(z,", ")
return a+"{"+x+"}"},
N:function(){return this.C("")},
u:{
ao:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.z()
y=new F.kt(z)
y.b=H.i([],[F.cX])
z.b=y
y=new F.kq(z)
x=[F.b3]
y.b=H.i([],x)
y.c=H.i([],x)
z.c=y
y=new F.km(z)
x=[F.K]
y.b=H.i([],x)
y.c=H.i([],x)
y.d=H.i([],x)
z.d=y
h=$.$get$f3()
z.e=0
y=$.$get$aM()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aL().a)!==0?e:null
z.x=(x&$.$get$aK().a)!==0?b:null
z.y=(x&$.$get$bh().a)!==0?f:null
z.z=(x&$.$get$bi().a)!==0?g:null
z.Q=(x&$.$get$f4().a)!==0?c:null
z.ch=(x&$.$get$bj().a)!==0?i:0
z.cx=(x&$.$get$bg().a)!==0?a:null
return z}}},
kv:{"^":"b:3;a",
$1:function(a){var z,y
H.e(a,"$isK")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.t(0,z)}}},
ku:{"^":"b:3;a",
$1:function(a){var z,y
H.e(a,"$isK")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.t(0,z)}}},
kl:{"^":"c;a,0b,0c",
q:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.T("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.R()
return!0},
cM:function(a,b,c,d,e,f,g,h,i){var z=F.ao(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
f2:function(a,b,c,d,e,f){return this.cM(a,null,b,c,d,e,f,null,0)},
b7:function(a,b,c,d,e,f){return this.cM(a,null,b,c,null,d,e,f,0)},
bF:function(a,b,c){var z=F.ao(null,null,null,new V.R(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gj:function(a){return this.c.length},
G:function(a,b){if(b==null)return!1
if(b.a!==this.a)return!1
if(!b.gfA(b))throw H.a(P.T("May not remove a vertex without first making it empty."))
b.a=null
C.a.G(this.c,b)
this.a.R()
this.b=!0
return!0},
a9:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].bM()
return!0},
bL:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].bK()
return!0},
f7:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.l()
s=v.p(0,Math.sqrt(u*u+t*t+s*s))
if(!J.I(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.H(null)}}}}return!0},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
this.q()
z=H.i([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
N:function(){return this.C("")}},
km:{"^":"c;a,0b,0c,0d",
gj:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.d(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.d(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
v:function(a,b){H.h(b,{func:1,ret:-1,args:[F.K]})
C.a.v(this.b,b)
C.a.v(this.c,new F.kn(this,b))
C.a.v(this.d,new F.ko(this,b))},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
N:function(){return this.C("")}},
kn:{"^":"b:3;a,b",
$1:function(a){H.e(a,"$isK")
if(!J.I(a.a,this.a))this.b.$1(a)}},
ko:{"^":"b:3;a,b",
$1:function(a){var z
H.e(a,"$isK")
z=this.a
if(!J.I(a.a,z)&&!J.I(a.b,z))this.b.$1(a)}},
kq:{"^":"c;a,0b,0c",
gj:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
N:function(){return this.C("")}},
kr:{"^":"c;"},
d8:{"^":"kr;",
aF:function(a,b,c){return J.I(b.f,c.f)}},
ks:{"^":"c;"},
j4:{"^":"ks;0a,0b"},
f2:{"^":"c;"},
kp:{"^":"f2;",
aG:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
H.w(a1,"$isf",[F.z],"$asf")
for(z=a1.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a1[m]
k=l.f
if(k!=null){if(x==null)x=k
else{j=x.a
i=k.a
h=x.b
g=k.b
f=x.c
e=k.c
if(typeof f!=="number")return f.t()
if(typeof e!=="number")return H.m(e)
x=new V.R(j+i,h+g,f+e)}++y}d=l.r
if(d!=null)if(w==null)w=d
else{j=w.a
i=d.a
h=w.b
g=d.b
f=w.c
e=d.c
if(typeof f!=="number")return f.t()
if(typeof e!=="number")return H.m(e)
w=new V.o(j+i,h+g,f+e)}c=l.x
if(c!=null)if(v==null)v=c
else{j=v.a
i=c.a
h=v.b
g=c.b
f=v.c
e=c.c
if(typeof f!=="number")return f.t()
if(typeof e!=="number")return H.m(e)
v=new V.o(j+i,h+g,f+e)}b=l.y
if(b!=null){r=r==null?b:new V.N(r.a+b.a,r.b+b.b);++s}a=l.z
if(a!=null){if(p==null)p=a
else{j=p.a
i=a.a
h=p.b
g=a.b
f=p.c
e=a.c
if(typeof f!=="number")return f.t()
if(typeof e!=="number")return H.m(e)
p=new V.o(j+i,h+g,f+e)}++q}j=l.Q
if(j!=null){i=j.a
h=j.b
g=j.c
j=j.d
if(t==null){j=[i,h,g,j]
t=new V.bC(j[0],j[1],j[2],j[3])}else{j=[i,h,g,j]
i=j[0]
h=j[1]
g=j[2]
j=j[3]
t=new V.bC(t.a+i,t.b+h,t.c+g,t.d+j)}++u}j=l.ch
if(typeof j!=="number")return H.m(j)
n+=j;++o}a0=F.ao(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)a0.sU(0,null)
else a0.sU(0,x.p(0,y))
if(w==null)a0.saH(null)
else a0.saH(w.p(0,Math.sqrt(w.A(w))))
if(v==null)a0.sP(null)
else a0.sP(v.p(0,Math.sqrt(v.A(v))))
if(s<=0||r==null)a0.sc5(null)
else a0.sc5(r.p(0,s))
if(q<=0||p==null)a0.saW(null)
else a0.saW(p.p(0,q))
if(u<=0||t==null)a0.sa1(0,null)
else{z=t.p(0,u)
z=[z.a,z.b,z.c,z.d]
j=z[0]
i=z[1]
h=z[2]
z=z[3]
if(j<0)j=0
else if(j>1)j=1
if(i<0)i=0
else if(i>1)i=1
if(h<0)h=0
else if(h>1)h=1
if(z<0)z=0
else if(z>1)z=1
a0.sa1(0,new V.F(j,i,h,z))}if(o<=0)a0.sdl(0,0)
else a0.sdl(0,n/o)
return a0}},
iP:{"^":"f2;",
aG:function(a){var z,y,x,w,v,u,t
H.w(a,"$isf",[F.z],"$asf")
z=new V.o(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=w.a
u=w.b
t=z.c
w=w.c
if(typeof t!=="number")return t.t()
if(typeof w!=="number")return H.m(w)
z=new V.o(z.a+v,z.b+u,t+w)}}z=z.p(0,Math.sqrt(z.A(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.E)(a),++x)a[x].saH(z)
return}},
kt:{"^":"c;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
N:function(){return this.C("")}}}],["","",,O,{"^":"",hN:{"^":"d1;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gD:function(){var z=this.rx
if(z==null){z=D.W()
this.rx=z}return z},
Y:function(a){var z=this.rx
if(!(z==null))z.H(a)},
sa5:function(a){var z,y
z=this.r2
if(!$.p.$2(z,a)){y=this.r2
this.r2=a
z=new D.C("vectorScale",y,a,this,[P.q])
z.b=!0
this.Y(z)}},
a_:function(a,b,c,d,e,f,g){var z,y
H.h(e,{func:1,ret:F.a4,args:[F.a4]})
z=b.a.k(0,d)
if(z==null){z=this.cl(a,e.$1(c))
b.a.m(0,d,z)}y=this.a
y.db.b1(f)
y.dx.b1(g)
z.d8(a)},
cB:function(a,b,c,d,e,f,g){var z,y
H.h(e,{func:1,ret:F.a4,args:[F.ci]})
z=b.a.k(0,d)
if(z==null){z=this.cl(a,e.$1(c))
b.a.m(0,d,z)}y=this.a
y.db.b1(f)
y.dx.b1(g)
z.d8(a)},
cl:function(a,b){var z,y,x,w
H.e(b,"$isa4")
z=a.a
y=$.$get$aM()
x=$.$get$aL()
w=b.f6(new Z.kw(z),new Z.d9(y.a|x.a|$.$get$aK().a|$.$get$aS().a))
w.ba($.$get$aM()).e=this.a.z.c
w.ba($.$get$aL()).e=this.a.Q.c
w.ba($.$get$aS()).e=this.a.ch.c
w.ba($.$get$aK()).e=this.a.cx.c
return w},
hJ:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.h(new O.i2(z,new V.F(1,1,1,1)),{func:1,ret:-1,args:[F.z]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.h(new O.i3(z),{func:1,ret:-1,args:[F.K]})
C.a.v(x.b,y)
return z},"$1","geN",4,0,2],
f_:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.Z()
z.a=new V.F(0,0.7,1,1)
x=a.a
x.toString
z=H.h(new O.ie(z,y),{func:1,ret:-1,args:[F.z]})
C.a.v(x.c,z)
z=new O.id(y)
x=a.c
x.toString
w=H.h(new O.ig(y,z),{func:1,ret:-1,args:[F.b3]})
C.a.v(x.b,w)
w=a.d
w.toString
z=H.h(new O.ih(y,z),{func:1,ret:-1,args:[F.K]})
C.a.v(w.b,z)
return y},function(a){return this.f_(a,null)},"hS","$2$color","$1","geZ",4,3,46],
hQ:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.h(new O.i9(new V.F(1,1,1,1),z),{func:1,ret:-1,args:[F.z]})
C.a.v(y.c,x)
return z},"$1","geX",4,0,2],
hp:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.h(new O.i1(new V.F(1,1,0.3,1),z),{func:1,ret:-1,args:[F.z]})
C.a.v(y.c,x)
return z},"$1","gee",4,0,2],
hf:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.h(new O.hT(new V.F(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.z]})
C.a.v(y.c,x)
return z},"$1","gdR",4,0,2],
hK:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.h(new O.i4(new V.F(1,0.3,1,1),z),{func:1,ret:-1,args:[F.z]})
C.a.v(y.c,x)
return z},"$1","geQ",4,0,2],
hP:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.h(new O.i7(new V.F(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.z]})
C.a.v(y.c,x)
return z},"$1","geW",4,0,2],
hj:[function(a){var z,y,x
z=F.Z()
y=a.d
y.toString
x=H.h(new O.hX(new V.F(1,1,0.3,1),z),{func:1,ret:-1,args:[F.K]})
C.a.v(y.b,x)
return z},"$1","ge1",4,0,2],
hk:[function(a){var z,y,x
z=F.Z()
y=a.d
y.toString
x=H.h(new O.hY(new V.F(1,1,0.3,1),z),{func:1,ret:-1,args:[F.K]})
C.a.v(y.b,x)
return z},"$1","ge2",4,0,2],
hi:[function(a){var z,y,x
z=F.Z()
y=a.d
y.toString
x=H.h(new O.hW(new V.F(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.K]})
C.a.v(y.b,x)
return z},"$1","ge0",4,0,2],
hl:[function(a){var z,y,x
z=F.Z()
y=a.d
y.toString
x=H.h(new O.hZ(new V.F(1,0.3,1,1),z),{func:1,ret:-1,args:[F.K]})
C.a.v(y.b,x)
return z},"$1","ge3",4,0,2],
hg:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.h(new O.hU(z),{func:1,ret:-1,args:[F.z]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.h(new O.hV(z),{func:1,ret:-1,args:[F.K]})
C.a.v(x.b,y)
return z},"$1","gdV",4,0,2],
hO:[function(a){var z,y,x
z=F.Z()
y=a.a
y.toString
x=H.h(new O.i5(z),{func:1,ret:-1,args:[F.z]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.h(new O.i6(z),{func:1,ret:-1,args:[F.K]})
C.a.v(x.b,y)
return z},"$1","geV",4,0,2],
hR:[function(a){var z,y,x,w,v,u,t
z={}
y=F.Z()
x=a.a
w=x.c
if(w.length<1)return y
v=w[0].ch
z.a=v
z.b=v
x.toString
x={func:1,ret:-1,args:[F.z]}
C.a.v(w,H.h(new O.ia(z),x))
w=z.b
u=z.a
if(typeof w!=="number")return w.F()
if(typeof u!=="number")return H.m(u)
t=w-u
z.c=t
if(t<=0)z.c=1
w=a.a
w.toString
x=H.h(new O.ib(z,y),x)
C.a.v(w.c,x)
x=a.d
x.toString
w=H.h(new O.ic(y),{func:1,ret:-1,args:[F.K]})
C.a.v(x.b,w)
return y},"$1","geY",4,0,2],
e8:function(a){var z,y,x
z={}
z.a=0
y=a.a
y.toString
x=H.h(new O.i0(z),{func:1,ret:-1,args:[F.z]})
C.a.v(y.c,x)
return C.d.bb((z.a+1.5)*0.5)},
b2:function(a,b){var z
if(a<0)return new V.at(0,0,0)
else{z=Math.floor((a+0.5)*0.5)
return V.dO(z/b,a-z*2,1)}},
he:[function(a){var z,y,x,w
z=this.e8(a)
y=F.Z()
x=a.a
x.toString
w=H.h(new O.hR(this,z,y),{func:1,ret:-1,args:[F.z]})
C.a.v(x.c,w)
w=a.d
w.toString
x=H.h(new O.hS(y),{func:1,ret:-1,args:[F.K]})
C.a.v(w.b,x)
return y},"$1","gdQ",4,0,2],
hd:[function(a){return this.dP(a)},"$1","gck",4,0,2],
dP:function(a){var z,y
z=F.Z()
y=new O.hQ(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z},
hc:[function(a){return this.dK(a)},"$1","gcg",4,0,2],
dK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.cP()
y=F.Z()
x=new O.hP(y)
w=z.a
v=z.b
u=z.c
t=x.$3(w,v,u)
s=w+z.d
r=x.$3(s,v,u)
q=v+z.e
p=x.$3(s,q,u)
o=x.$3(w,q,u)
if(typeof u!=="number")return u.t()
u+=z.f
n=x.$3(w,v,u)
m=x.$3(s,v,u)
l=x.$3(s,q,u)
k=x.$3(w,q,u)
y.c.n(0,t,r)
y.c.n(0,r,p)
y.c.n(0,p,o)
y.c.n(0,o,t)
y.c.n(0,n,m)
y.c.n(0,m,l)
y.c.n(0,l,k)
y.c.n(0,k,n)
y.c.n(0,t,n)
y.c.n(0,r,m)
y.c.n(0,p,l)
y.c.n(0,o,k)
return y}},i2:{"^":"b:4;a,b",
$1:function(a){var z,y
H.e(a,"$isz")
z=this.a.a
y=a.X()
y.sa1(0,this.b)
y.sP(new V.o(0,0,0))
z.h(0,y)}},i3:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isK")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.d(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.d(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.d(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},ie:{"^":"b:4;a,b",
$1:function(a){var z,y
H.e(a,"$isz")
z=this.b.a
y=a.X()
y.sa1(0,this.a.a)
y.sP(new V.o(0,0,0))
z.h(0,y)}},id:{"^":"b:48;a",
$2:function(a,b){if(a.fo(b)==null)this.a.c.n(0,a,b)}},ig:{"^":"b:49;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isb3")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.d(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.q()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.d(z,x)
this.b.$2(w,z[x])}},ih:{"^":"b:3;a,b",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isK")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.d(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.d(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.q()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.d(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},i9:{"^":"b:4;a,b",
$1:function(a){var z,y
z=H.e(a,"$isz").X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.cY(z)}},i1:{"^":"b:4;a,b",
$1:function(a){var z,y,x
z=H.e(a,"$isz").X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=z.X()
y.sP(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},hT:{"^":"b:4;a,b",
$1:function(a){var z,y,x
H.e(a,"$isz")
z=a.X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=z.X()
y.sP(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i4:{"^":"b:4;a,b",
$1:function(a){var z,y,x
H.e(a,"$isz")
z=a.X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=z.X()
y.sP(a.x.ae(a.r).M(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i7:{"^":"b:4;a,b",
$1:function(a){var z,y,x
H.e(a,"$isz")
z=a.X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=z.X()
y.sP(a.z)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},hX:{"^":"b:3;a,b",
$1:function(a){var z,y
H.e(a,"$isK")
z=F.ao(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.cY(z)}},hY:{"^":"b:3;a,b",
$1:function(a){var z,y,x
H.e(a,"$isK")
z=F.ao(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=z.X()
y.sP(a.d)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},hW:{"^":"b:3;a,b",
$1:function(a){var z,y,x
H.e(a,"$isK")
z=F.ao(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=z.X()
y.sP(a.e)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},hZ:{"^":"b:3;a,b",
$1:function(a){var z,y,x
H.e(a,"$isK")
z=F.ao(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=z.X()
y.sP(a.e.ae(a.d).M(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},hU:{"^":"b:4;a",
$1:function(a){var z,y
H.e(a,"$isz")
z=this.a.a
y=a.X()
y.sP(new V.o(0,0,0))
z.h(0,y)}},hV:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isK")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.d(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.d(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.d(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},i5:{"^":"b:4;a",
$1:function(a){var z,y,x,w,v,u,t
H.e(a,"$isz")
z=a.y
y=this.a.a
x=a.X()
w=z.a
v=z.b
if(w<0)w=0
else if(w>1)w=1
u=v<0
if(u)t=0
else t=v>1?1:v
if(u)v=0
else if(v>1)v=1
x.sa1(0,new V.F(w,t,v,1))
x.sP(new V.o(0,0,0))
y.h(0,x)}},i6:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isK")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.d(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.d(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.d(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},ia:{"^":"b:4;a",
$1:function(a){var z,y,x
H.e(a,"$isz")
z=this.a
y=z.a
x=a.ch
if(typeof y!=="number")return y.b_()
if(typeof x!=="number")return H.m(x)
if(y>x)z.a=x
y=z.b
if(typeof y!=="number")return y.L()
if(y<x)z.b=x}},ib:{"^":"b:4;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isz")
z=a.ch
y=this.a
x=y.a
if(typeof z!=="number")return z.F()
if(typeof x!=="number")return H.m(x)
w=V.dO((z-x)/y.c*5/6,1,1)
y=this.b.a
x=a.X()
x.sP(new V.o(0,0,0))
x.sa1(0,new V.F(w.a,w.b,w.c,1))
y.h(0,x)}},ic:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isK")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.d(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.d(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.d(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},i0:{"^":"b:4;a",
$1:function(a){var z,y,x
z=H.e(a,"$isz").cx
if(z==null)z=new V.ak(0,0,0,0)
y=this.a
x=Math.max(y.a,z.a)
y.a=x
x=Math.max(x,z.b)
y.a=x
x=Math.max(x,z.c)
y.a=x
y.a=Math.max(x,z.d)}},hR:{"^":"b:4;a,b,c",
$1:function(a){var z,y,x,w
H.e(a,"$isz")
z=a.cx
if(z==null)z=new V.ak(0,0,0,0)
y=this.a
x=this.b
w=new V.at(0,0,0).t(0,y.b2(z.a,x)).t(0,y.b2(z.b,x)).t(0,y.b2(z.c,x)).t(0,y.b2(z.d,x))
x=this.c.a
y=a.X()
y.sP(new V.o(0,0,0))
y.sa1(0,new V.F(w.a,w.b,w.c,1))
x.h(0,y)}},hS:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isK")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.d(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.d(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.d(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},hQ:{"^":"b;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.F(z,y,x,1)
z=this.a
v=z.a.bF(0,0,0)
v.sP(new V.o(0,0,0))
v.saH(new V.o(1,0,0))
v.sa1(0,w)
u=z.a.bF(a,b,c)
u.sP(new V.o(0,0,0))
u.saH(new V.o(1,0,0))
u.sa1(0,w)
z.c.n(0,v,u)}},hP:{"^":"b;a",
$3:function(a,b,c){var z=this.a.a.bF(a,b,c)
z.sP(new V.o(0,0,0))
z.saH(new V.o(a,b,c))
return z}},d1:{"^":"c;"}}],["","",,T,{"^":"",jD:{"^":"c;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",h7:{"^":"c;",
aS:function(a,b){return!0},
i:function(a){return"all"},
$isbV:1},bV:{"^":"c;"},ei:{"^":"c;",
aS:["dw",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)if(z[x].aS(0,b))return!0
return!1}],
i:["cc",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.E)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbV:1},by:{"^":"ei;0a",
aS:function(a,b){return!this.dw(0,b)},
i:function(a){return"!["+this.cc(0)+"]"}},jl:{"^":"c;0a",
dB:function(a){var z,y
if(a.a.length<=0)throw H.a(P.T("May not create a SetMatcher with zero characters."))
z=new H.aH(0,0,[P.n,P.O])
for(y=new H.eg(a,a.gj(a),0,[H.ax(a,"t",0)]);y.J();)z.m(0,y.d,!0)
this.a=z},
aS:function(a,b){return this.a.b9(0,b)},
i:function(a){var z=this.a
return P.bY(z.gaj(z),0,null)},
$isbV:1,
u:{
a9:function(a){var z=new V.jl()
z.dB(a)
return z}}},ey:{"^":"c;a,b,0c,0d",
gfF:function(a){return this.b},
E:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eK(this.a.O(0,b))
w.a=H.i([],[V.bV])
w.c=!1
C.a.h(this.c,w)
return w},
fm:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
if(w.aS(0,a))return w}return},
i:function(a){return this.b}},eH:{"^":"c;a,b,c",
i:function(a){var z,y
z=H.fY(this.b,"\n","\\n")
y=H.fY(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eI:{"^":"c;a,b,0c",
i:function(a){return this.b}},jI:{"^":"c;0a,0b,0c",
O:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.ey(this,b)
z.c=H.i([],[V.eK])
this.a.m(0,b,z)}return z},
aY:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.eI(this,a)
y=P.j
z.c=new H.aH(0,0,[y,y])
this.b.m(0,a,z)}return z},
h7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.i([],[V.eH])
y=this.c
x=[P.n]
w=H.i([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.I(a,t)
r=y.fm(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.bY(w,0,null)
throw H.a(P.T("Untokenizable string [state: "+y.gfF(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.i([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.bY(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eH(o==null?p.b:o,q,t)}++t}}}},eK:{"^":"ei;b,0c,0a",
i:function(a){return this.b.b+": "+this.cc(0)}}}],["","",,X,{"^":"",dJ:{"^":"c;",$isej:1},hL:{"^":"eC;0a,0b,0c,0d,0e,0f,0r,0x",
gD:function(){var z=this.x
if(z==null){z=D.W()
this.x=z}return z}},iS:{"^":"c;0a,0b,0c,0d,0e,0f",
gD:function(){var z=this.f
if(z==null){z=D.W()
this.f=z}return z},
aN:[function(a){var z
H.e(a,"$isB")
z=this.f
if(!(z==null))z.H(a)},function(){return this.aN(null)},"hb","$1","$0","gcf",0,2,6],
saT:function(a){var z,y
if(!J.I(this.b,a)){z=this.b
if(z!=null)z.gD().G(0,this.gcf())
y=this.b
this.b=a
if(a!=null)a.gD().h(0,this.gcf())
z=new D.C("mover",y,this.b,this,[U.ag])
z.b=!0
this.aN(z)}},
$isej:1,
$isdJ:1},eC:{"^":"c;"}}],["","",,V,{"^":"",
nY:function(a){P.jH(C.B,new V.nZ(a))},
hg:{"^":"c;a,b,0c,0d",
a0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
H.h(c,{func:1,ret:-1,args:[P.O]})
if(this.c==null)return
z=this.d.length
y=P.c0().gaI().k(0,this.a)
if(y==null||y.length<=z){x=d
w=!0}else{if(z>=y.length)return H.d(y,z)
x=y[z]==="1"
w=!1}c.$1(x)
v=document
u=v.createElement("label")
t=u.style
t.whiteSpace="nowrap"
J.c6(this.c).h(0,u)
s=W.e3("checkbox")
s.checked=x
t=W.ab
W.a2(s,"change",H.h(new V.hh(this,c,s,z),{func:1,ret:-1,args:[t]}),!1,t)
u.appendChild(s)
r=v.createElement("span")
r.textContent=b
u.appendChild(r)
J.c6(this.c).h(0,v.createElement("br"))
C.a.h(this.d,s)
if(w)this.cI(z,x)},
n:function(a,b,c){return this.a0(a,b,c,!1)},
cI:function(a,b){var z,y,x,w,v,u,t
z=this.a
y=P.c0().gaI().k(0,z)
if(y==null)y=""
x=y.length
if(x<a)y=C.b.fN(y,a-x+1,"0")
w=a>0?C.b.w(y,0,a):""
w+=b?"1":"0"
x=a+1
if(x<y.length)w+=C.b.at(y,x)
v=P.c0()
x=P.j
u=P.ef(v.gaI(),x,x)
u.m(0,z,w)
t=v.c1(0,u)
z=window.history
x=t.i(0)
z.toString
z.replaceState(new P.fk([],[]).be(""),"",x)}},
hh:{"^":"b:20;a,b,c,d",
$1:function(a){var z=this.c
this.b.$1(z.checked)
this.a.cI(this.d,z.checked)}},
nZ:{"^":"b:51;a",
$1:function(a){H.e(a,"$isbd")
P.dt(C.d.dh(this.a.gft(),2)+" fps")}},
j5:{"^":"c;a,b,0c",
a0:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.c0().gaI().k(0,H.k(z))
if(y==null)if(d){c.$0()
this.cH(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.c6(this.c).h(0,v)
t=W.e3("radio")
t.checked=x
t.name=z
z=W.ab
W.a2(t,"change",H.h(new V.j6(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.c6(this.c).h(0,w.createElement("br"))},
n:function(a,b,c){return this.a0(a,b,c,!1)},
cH:function(a){var z,y,x,w,v
z=P.c0()
y=P.j
x=P.ef(z.gaI(),y,y)
x.m(0,this.a,a)
w=z.c1(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fk([],[]).be(""),"",v)},
u:{
er:function(a,b){var z,y
z=new V.j5(a,!0)
y=document.getElementById(a)
z.c=y
if(y==null)H.J("Failed to find "+a+" for RadioGroup")
return z}}},
j6:{"^":"b:20;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.cH(this.d)}}},
jq:{"^":"c;0a,0b",
dD:function(a,b){var z,y,x,w,v,u,t
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
t=W.ab
W.a2(z,"scroll",H.h(new V.jt(x),{func:1,ret:-1,args:[t]}),!1,t)},
cN:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isf",[P.j],"$asf")
this.eL()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.h7(C.a.fB(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v){u=x[v]
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
if(H.fX(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cp(C.N,s,C.f,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.k(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
f0:function(a){var z,y,x,w,v,u,t
H.w(a,"$isf",[P.j],"$asf")
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
x=H.e(w.insertCell(-1),"$isd0").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<3;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.e(w.insertCell(-1),"$isd0")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
eL:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jI()
y=P.j
z.a=new H.aH(0,0,[y,V.ey])
z.b=new H.aH(0,0,[y,V.eI])
z.c=z.O(0,"Start")
y=z.O(0,"Start").E(0,"Bold")
x=V.a9(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Bold").E(0,"Bold")
x=new V.by()
w=[V.bV]
x.a=H.i([],w)
C.a.h(y.a,x)
y=V.a9(new H.a5("*"))
C.a.h(x.a,y)
y=z.O(0,"Bold").E(0,"BoldEnd")
x=V.a9(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").E(0,"Italic")
x=V.a9(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Italic").E(0,"Italic")
x=new V.by()
x.a=H.i([],w)
C.a.h(y.a,x)
y=V.a9(new H.a5("_"))
C.a.h(x.a,y)
y=z.O(0,"Italic").E(0,"ItalicEnd")
x=V.a9(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").E(0,"Code")
x=V.a9(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Code").E(0,"Code")
x=new V.by()
x.a=H.i([],w)
C.a.h(y.a,x)
y=V.a9(new H.a5("`"))
C.a.h(x.a,y)
y=z.O(0,"Code").E(0,"CodeEnd")
x=V.a9(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").E(0,"LinkHead")
x=V.a9(new H.a5("["))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"LinkHead").E(0,"LinkTail")
x=V.a9(new H.a5("|"))
C.a.h(y.a,x)
x=z.O(0,"LinkHead").E(0,"LinkEnd")
y=V.a9(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkHead").E(0,"LinkHead")
y=new V.by()
y.a=H.i([],w)
C.a.h(x.a,y)
x=V.a9(new H.a5("|]"))
C.a.h(y.a,x)
x=z.O(0,"LinkTail").E(0,"LinkEnd")
y=V.a9(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkTail").E(0,"LinkTail")
y=new V.by()
y.a=H.i([],w)
C.a.h(x.a,y)
x=V.a9(new H.a5("|]"))
C.a.h(y.a,x)
C.a.h(z.O(0,"Start").E(0,"Other").a,new V.h7())
x=z.O(0,"Other").E(0,"Other")
y=new V.by()
y.a=H.i([],w)
C.a.h(x.a,y)
x=V.a9(new H.a5("*_`["))
C.a.h(y.a,x)
x=z.O(0,"BoldEnd")
x.d=x.a.aY("Bold")
x=z.O(0,"ItalicEnd")
x.d=x.a.aY("Italic")
x=z.O(0,"CodeEnd")
x.d=x.a.aY("Code")
x=z.O(0,"LinkEnd")
x.d=x.a.aY("Link")
x=z.O(0,"Other")
x.d=x.a.aY("Other")
this.b=z},
u:{
jr:function(a,b){var z=new V.jq()
z.dD(a,!0)
return z}}},
jt:{"^":"b:20;a",
$1:function(a){P.eF(C.m,new V.js(this.a))}},
js:{"^":"b:0;a",
$0:function(){var z,y,x
z=C.d.ac(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,Z,{"^":"",
fT:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.jr("Test 002",!0)
y=W.dK(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.cN(H.i(["The inspection test is used to check that shapes are built correctly ","and for checking the data privided by the shapes. ","Also it is useful for testing out new generated shape configurations. ","For loaded shape testing see test032."],x))
z.f0(H.i(["controls","shapes","scalars"],x))
z.cN(H.i(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.J(P.T("Failed to find an element with the identifier, testCanvas."))
v=E.jF(w,!0,!0,!0,!1)
u=new E.aP()
u.a=""
u.b=!0
t=E.aP
s=O.dN(t)
u.y=s
s.bh(u.gfH(),u.gfJ())
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
u.sca(0,null)
u.saT(null)
s=new U.e0()
s.cd(U.ag)
s.bh(s.gef(),s.gex())
s.e=null
s.f=V.ce()
s.r=0
r=v.r
q=new U.kb()
p=U.cK()
p.sc8(0,!0)
p.sbV(6.283185307179586)
p.sbX(0)
p.sU(0,0)
p.sbW(100)
p.sV(0)
p.sbQ(0.5)
q.b=p
o=q.gaz()
p.gD().h(0,o)
p=U.cK()
p.sc8(0,!0)
p.sbV(6.283185307179586)
p.sbX(0)
p.sU(0,0)
p.sbW(100)
p.sV(0)
p.sbQ(0.5)
q.c=p
p.gD().h(0,o)
q.d=null
q.e=!1
q.f=!1
q.r=!1
q.x=2.5
q.y=2.5
q.z=2
q.Q=4
q.cx=!1
q.ch=!1
q.cy=0
q.db=0
q.dx=null
q.dy=0
q.fr=null
q.fx=null
n=new X.az(!1,!1,!1)
m=q.d
q.d=n
p=[X.az]
o=new D.C("modifiers",m,n,q,p)
o.b=!0
q.T(o)
o=q.f
if(o!==!1){q.f=!1
o=new D.C("invertX",o,!1,q,[P.O])
o.b=!0
q.T(o)}o=q.r
if(o!==!0){q.r=!0
o=new D.C("invertY",o,!0,q,[P.O])
o.b=!0
q.T(o)}q.aP(r)
s.h(0,q)
r=v.r
q=new U.ka()
o=U.cK()
o.sc8(0,!0)
o.sbV(6.283185307179586)
o.sbX(0)
o.sU(0,0)
o.sbW(100)
o.sV(0)
o.sbQ(0.2)
q.b=o
o.gD().h(0,q.gaz())
q.c=null
q.d=!1
q.e=2.5
q.f=2
q.r=4
q.y=!1
q.x=!1
q.z=0
q.Q=null
q.ch=0
q.cx=null
q.cy=null
n=new X.az(!0,!1,!1)
m=q.c
q.c=n
o=new D.C("modifiers",m,n,q,p)
o.b=!0
q.T(o)
q.aP(r)
s.h(0,q)
r=v.r
q=new U.kc()
q.c=0.01
q.d=0
q.e=0
n=new X.az(!1,!1,!1)
q.b=n
p=new D.C("modifiers",null,n,q,p)
p.b=!0
q.T(p)
q.aP(r)
s.h(0,q)
u.saT(s)
l=new O.hN()
l.b=new V.o(0,0,-1)
l.c=new V.F(0.2,0.3,0.4,1)
l.d=new V.F(0.1,0.2,0.3,1)
l.e=new V.F(0.7,0.7,0.7,1)
l.f=new V.F(0.3,0.3,0.3,1)
l.r=new V.F(0.5,0.5,0.5,1)
l.x=new V.F(0.5,0.5,0.5,1)
l.y=new V.F(1,1,1,1)
l.z=new V.F(0.8,0.8,0.8,1)
l.Q=!1
l.ch=!1
l.cx=!1
l.cy=!1
l.db=!1
l.dx=!1
l.dy=!1
l.fr=!1
l.fx=!1
l.fy=!1
l.go=!1
l.id=!1
l.k1=!1
l.k2=!1
l.k3=!1
l.k4=!1
l.r1=!1
l.r2=1
l.sa5(0.4)
s=new M.hD()
t=O.dN(t)
s.d=t
t.bh(s.geh(),s.gei())
s.e=null
s.f=null
s.r=null
s.x=null
k=new X.iS()
k.c=1.0471975511965976
k.d=0.1
k.e=2000
k.saT(null)
t=k.c
if(!$.p.$2(t,1.0471975511965976)){m=k.c
k.c=1.0471975511965976
t=new D.C("fov",m,1.0471975511965976,k,[P.q])
t.b=!0
k.aN(t)}t=k.d
if(!$.p.$2(t,0.1)){m=k.d
k.d=0.1
t=new D.C("near",m,0.1,k,[P.q])
t.b=!0
k.aN(t)}t=k.e
if(!$.p.$2(t,2000)){m=k.e
k.e=2000
t=new D.C("far",m,2000,k,[P.q])
t.b=!0
k.aN(t)}t=s.a
if(t!==k){if(t!=null)t.gD().G(0,s.gag())
m=s.a
s.a=k
k.gD().h(0,s.gag())
t=new D.C("camera",m,s.a,s,[X.dJ])
t.b=!0
s.av(t)}j=new X.hL()
t=new V.F(0,0,0,1)
j.a=t
j.b=!0
j.c=2000
j.d=!0
j.e=0
j.f=!1
t=V.et(0,0,1,1)
j.r=t
t=s.b
if(t!==j){if(t!=null)t.gD().G(0,s.gag())
m=s.b
s.b=j
j.gD().h(0,s.gag())
t=new D.C("target",m,s.b,s,[X.eC])
t.b=!0
s.av(t)}s.sdf(null)
s.sdf(l)
s.d.h(0,u)
t=s.a
i=V.aI(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
r=new U.dP()
r.a=i
t.saT(r)
t=v.d
if(t!==s){if(t!=null)t.gD().G(0,v.gce())
v.d=s
s.gD().h(0,v.gce())
v.dG()}t=new V.hg("controls",!0)
x=x.getElementById("controls")
t.c=x
if(x==null)H.J("Failed to find controls for CheckGroup")
t.d=H.i([],[W.dL])
t.a0(0,"Filled",new Z.n4(l),!0)
t.a0(0,"Wire Frame",new Z.n5(l),!0)
t.n(0,"Vertices",new Z.n6(l))
t.n(0,"Normals",new Z.nh(l))
t.n(0,"Binormals",new Z.ns(l))
t.n(0,"Tangentals",new Z.nD(l))
t.n(0,"Face Centers",new Z.nM(l))
t.n(0,"Face Normals",new Z.nN(l))
t.n(0,"Face Binormals",new Z.nO(l))
t.n(0,"Face Tangentals",new Z.nP(l))
t.n(0,"Colors",new Z.nQ(l))
t.n(0,"Textures2D",new Z.n7(l))
t.n(0,"TexturesCube",new Z.n8(l))
t.n(0,"Weight",new Z.n9(l))
t.n(0,"Bend",new Z.na(l))
t.a0(0,"Axis",new Z.nb(l),!0)
t.n(0,"AABB",new Z.nc(l))
x=new Z.nR(u)
t=V.er("shapes",!0)
t.a0(0,"Square",new Z.nd(x),!0)
t.n(0,"Cube",new Z.ne(x))
t.n(0,"Cuboid",new Z.nf(x))
t.n(0,"Cuboid+",new Z.ng(x))
t.n(0,"Disk",new Z.ni(x))
t.n(0,"Disk+",new Z.nj(x))
t.n(0,"Cylinder",new Z.nk(x))
t.n(0,"Cylinder+",new Z.nl(x))
t.n(0,"Cone",new Z.nm(x))
t.n(0,"Cylindrical",new Z.nn(x))
t.n(0,"LatLonSphere",new Z.no(x))
t.n(0,"LatLonSphere+",new Z.np(x))
t.n(0,"IsoSphere",new Z.nq(x))
t.n(0,"IsoSphere+",new Z.nr(x))
t.n(0,"Sphere",new Z.nt(x))
t.n(0,"Sphere+",new Z.nu(x))
t.n(0,"Spherical",new Z.nv(x))
t.n(0,"Toroid",new Z.nw(x))
t.n(0,"Knot",new Z.nx(x))
t.n(0,"Grid",new Z.ny(x))
t.n(0,"Grid+",new Z.nz(x))
x=V.er("scalars",!0)
x.n(0,"0.01",new Z.nA(l))
x.n(0,"0.02",new Z.nB(l))
x.n(0,"0.04",new Z.nC(l))
x.n(0,"0.06",new Z.nE(l))
x.n(0,"0.08",new Z.nF(l))
x.n(0,"0.1",new Z.nG(l))
x.n(0,"0.2",new Z.nH(l))
x.a0(0,"0.4",new Z.nI(l),!0)
x.n(0,"0.6",new Z.nJ(l))
x.n(0,"0.8",new Z.nK(l))
x.n(0,"1.0",new Z.nL(l))
V.nY(v)},
n4:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.Q!==a){z.Q=a
y=new D.C("showFilled",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
n5:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.ch!==a){z.ch=a
y=new D.C("showWireFrame",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
n6:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cx!==a){z.cx=a
y=new D.C("showVertices",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
nh:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cy!==a){z.cy=a
y=new D.C("showNormals",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
ns:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.db!==a){z.db=a
y=new D.C("showBinormals",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
nD:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dx!==a){z.dx=a
y=new D.C("showTangentals",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
nM:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fr!==a){z.fr=a
y=new D.C("showFaceCenters",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
nN:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fx!==a){z.fx=a
y=new D.C("showFaceNormals",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
nO:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fy!==a){z.fy=a
y=new D.C("showFaceBinormals",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
nP:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.go!==a){z.go=a
y=new D.C("showFaceTangentals",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
nQ:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.id!==a){z.id=a
y=new D.C("showColorFill",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
n7:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k1!==a){z.k1=a
y=new D.C("showTxt2DColor",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
n8:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dy!==a){z.dy=a
y=new D.C("showTxtCube",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
n9:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k2!==a){z.k2=a
y=new D.C("showWeight",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
na:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.r1!==a){z.r1=a
y=new D.C("showBend",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
nb:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k3!==a){z.k3=a
y=new D.C("showAxis",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
nc:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k4!==a){z.k4=a
y=new D.C("showAABB",!a,a,z,[P.O])
y.b=!0
z.Y(y)}}},
nR:{"^":"b:53;a",
$1:function(a){a.f8()
this.a.sca(0,a)}},
nd:{"^":"b:0;a",
$0:function(){var z,y,x,w,v,u,t
z=F.Z()
y=z.a
x=new V.o(-1,-1,1)
x=x.p(0,Math.sqrt(x.A(x)))
w=y.b7(new V.ak(1,2,4,6),new V.F(1,0,0,1),new V.R(-1,-1,0),new V.N(0,1),x,null)
y=z.a
x=new V.o(1,-1,1)
x=x.p(0,Math.sqrt(x.A(x)))
v=y.b7(new V.ak(0,3,4,6),new V.F(0,0,1,1),new V.R(1,-1,0),new V.N(1,1),x,null)
y=z.a
x=new V.o(1,1,1)
x=x.p(0,Math.sqrt(x.A(x)))
u=y.b7(new V.ak(0,2,5,6),new V.F(0,1,0,1),new V.R(1,1,0),new V.N(1,0),x,null)
y=z.a
x=new V.o(-1,1,1)
x=x.p(0,Math.sqrt(x.A(x)))
t=y.b7(new V.ak(0,2,4,7),new V.F(1,1,0,1),new V.R(-1,1,0),new V.N(0,0),x,null)
z.d.cL(H.i([w,v,u,t],[F.z]))
z.a9()
this.a.$1(z)}},
ne:{"^":"b:0;a",
$0:function(){this.a.$1(F.cu(1,null,null,1))}},
nf:{"^":"b:0;a",
$0:function(){this.a.$1(F.cu(8,null,null,8))}},
ng:{"^":"b:0;a",
$0:function(){this.a.$1(F.cu(15,null,new Z.n3(),15))}},
n3:{"^":"b:8;",
$3:function(a,b,c){var z,y,x,w
z=Math.cos(c*4*3.141592653589793+3.141592653589793)
y=Math.cos(b*4*3.141592653589793+3.141592653589793)
x=a.f
x=new V.o(x.a,x.b,x.c)
w=x.p(0,Math.sqrt(x.A(x)))
x=a.f
y=w.l(0,z*0.1+y*0.1)
a.sU(0,x.t(0,new V.R(y.a,y.b,y.c)))}},
ni:{"^":"b:0;a",
$0:function(){this.a.$1(F.cv(-1,!1,!1,0,null,8))}},
nj:{"^":"b:0;a",
$0:function(){this.a.$1(F.cv(-1,!1,!1,0,null,30))}},
nk:{"^":"b:0;a",
$0:function(){this.a.$1(F.dl(1,!0,!0,1,8,1))}},
nl:{"^":"b:0;a",
$0:function(){this.a.$1(F.dl(1,!0,!0,8,16,1))}},
nm:{"^":"b:0;a",
$0:function(){this.a.$1(F.dl(1,!0,!1,1,12,0))}},
nn:{"^":"b:0;a",
$0:function(){this.a.$1(F.fH(!0,!0,25,new Z.n2(),50))}},
n2:{"^":"b:10;",
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}},
no:{"^":"b:0;a",
$0:function(){this.a.$1(F.fR(10,20))}},
np:{"^":"b:0;a",
$0:function(){this.a.$1(F.fR(20,40))}},
nq:{"^":"b:0;a",
$0:function(){this.a.$1(F.fQ(2))}},
nr:{"^":"b:0;a",
$0:function(){this.a.$1(F.fQ(3))}},
nt:{"^":"b:0;a",
$0:function(){this.a.$1(F.du(6,null,1,6))}},
nu:{"^":"b:0;a",
$0:function(){this.a.$1(F.du(10,null,1,10))}},
nv:{"^":"b:0;a",
$0:function(){this.a.$1(F.du(10,new Z.n1(),1,10))}},
n1:{"^":"b:10;",
$2:function(a,b){var z,y
z=a-0.5
y=b-0.5
return Math.cos(Math.sqrt(z*z+y*y)*3.141592653589793)*0.3}},
nw:{"^":"b:0;a",
$0:function(){this.a.$1(F.o2(30,1,15,0.5))}},
nx:{"^":"b:0;a",
$0:function(){this.a.$1(F.mX(120,1,2,12,0.3,3))}},
ny:{"^":"b:0;a",
$0:function(){this.a.$1(F.fM(4,null,4))}},
nz:{"^":"b:0;a",
$0:function(){this.a.$1(F.fM(16,new Z.n0(),16))}},
n0:{"^":"b:10;",
$2:function(a,b){return Math.sin(a*8)*Math.cos(b*8)*0.3}},
nA:{"^":"b:0;a",
$0:function(){this.a.sa5(0.01)}},
nB:{"^":"b:0;a",
$0:function(){this.a.sa5(0.02)}},
nC:{"^":"b:0;a",
$0:function(){this.a.sa5(0.04)}},
nE:{"^":"b:0;a",
$0:function(){this.a.sa5(0.06)}},
nF:{"^":"b:0;a",
$0:function(){this.a.sa5(0.08)}},
nG:{"^":"b:0;a",
$0:function(){this.a.sa5(0.1)}},
nH:{"^":"b:0;a",
$0:function(){this.a.sa5(0.2)}},
nI:{"^":"b:0;a",
$0:function(){this.a.sa5(0.4)}},
nJ:{"^":"b:0;a",
$0:function(){this.a.sa5(0.6)}},
nK:{"^":"b:0;a",
$0:function(){this.a.sa5(0.8)}},
nL:{"^":"b:0;a",
$0:function(){this.a.sa5(1)}}},1]]
setupProgram(dart,0,0)
J.Q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e8.prototype
return J.il.prototype}if(typeof a=="string")return J.bT.prototype
if(a==null)return J.e9.prototype
if(typeof a=="boolean")return J.ik.prototype
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.c)return a
return J.cy(a)}
J.aE=function(a){if(typeof a=="string")return J.bT.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.c)return a
return J.cy(a)}
J.c2=function(a){if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.c)return a
return J.cy(a)}
J.mL=function(a){if(typeof a=="number")return J.bS.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.c_.prototype
return a}
J.mM=function(a){if(typeof a=="number")return J.bS.prototype
if(typeof a=="string")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.c_.prototype
return a}
J.dp=function(a){if(typeof a=="string")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.c_.prototype
return a}
J.aT=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.c)return a
return J.cy(a)}
J.I=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).B(a,b)}
J.h_=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mL(a).L(a,b)}
J.dv=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mM(a).l(a,b)}
J.dw=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fO(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aE(a).k(a,b)}
J.cC=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fO(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c2(a).m(a,b,c)}
J.h0=function(a,b){return J.dp(a).I(a,b)}
J.h1=function(a,b,c){return J.aT(a).eE(a,b,c)}
J.h2=function(a,b,c,d){return J.aT(a).cK(a,b,c,d)}
J.h3=function(a,b){return J.dp(a).Z(a,b)}
J.cD=function(a,b,c){return J.aE(a).fc(a,b,c)}
J.cE=function(a,b){return J.c2(a).K(a,b)}
J.h4=function(a,b,c,d){return J.c2(a).ar(a,b,c,d)}
J.dx=function(a,b){return J.c2(a).v(a,b)}
J.c6=function(a){return J.aT(a).gbN(a)}
J.bO=function(a){return J.Q(a).gW(a)}
J.bq=function(a){return J.c2(a).ga2(a)}
J.as=function(a){return J.aE(a).gj(a)}
J.h5=function(a,b){return J.aT(a).fZ(a,b)}
J.h6=function(a,b){return J.aT(a).sa3(a,b)}
J.aa=function(a){return J.Q(a).i(a)}
I.al=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.h=W.cI.prototype
C.C=J.r.prototype
C.a=J.b2.prototype
C.c=J.e8.prototype
C.D=J.e9.prototype
C.d=J.bS.prototype
C.b=J.bT.prototype
C.K=J.bU.prototype
C.Q=H.cW.prototype
C.R=W.iO.prototype
C.u=J.iT.prototype
C.n=J.c_.prototype
C.v=W.bE.prototype
C.w=W.kz.prototype
C.y=new P.hc(!1)
C.x=new P.hb(C.y)
C.z=new P.iR()
C.A=new P.kk()
C.e=new P.lm()
C.m=new P.b_(0)
C.B=new P.b_(5e6)
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.q=H.i(I.al([127,2047,65535,1114111]),[P.n])
C.i=H.i(I.al([0,0,32776,33792,1,10240,0,0]),[P.n])
C.j=H.i(I.al([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.k=H.i(I.al([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.M=H.i(I.al([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.N=H.i(I.al([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.l=H.i(I.al([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.r=H.i(I.al([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.O=H.i(I.al([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.t=H.i(I.al([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.L=H.i(I.al([]),[P.j])
C.P=new H.hq(0,{},C.L,[P.j,P.j])
C.f=new P.kd(!1)
$.ay=0
$.br=null
$.dD=null
$.dg=!1
$.fL=null
$.fD=null
$.fW=null
$.cw=null
$.cA=null
$.dq=null
$.bl=null
$.bJ=null
$.bK=null
$.dh=!1
$.V=C.e
$.dW=null
$.dV=null
$.dU=null
$.dT=null
$.p=V.iI()
$.i8="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.i_="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.eo=null
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
I.$lazy(y,x,w)}})(["dS","$get$dS",function(){return H.fK("_$dart_dartClosure")},"cO","$get$cO",function(){return H.fK("_$dart_js")},"eL","$get$eL",function(){return H.aB(H.cj({
toString:function(){return"$receiver$"}}))},"eM","$get$eM",function(){return H.aB(H.cj({$method$:null,
toString:function(){return"$receiver$"}}))},"eN","$get$eN",function(){return H.aB(H.cj(null))},"eO","$get$eO",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eS","$get$eS",function(){return H.aB(H.cj(void 0))},"eT","$get$eT",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eQ","$get$eQ",function(){return H.aB(H.eR(null))},"eP","$get$eP",function(){return H.aB(function(){try{null.$method$}catch(z){return z.message}}())},"eV","$get$eV",function(){return H.aB(H.eR(void 0))},"eU","$get$eU",function(){return H.aB(function(){try{(void 0).$method$}catch(z){return z.message}}())},"db","$get$db",function(){return P.kA()},"bL","$get$bL",function(){return[]},"f1","$get$f1",function(){return P.kh()},"f8","$get$f8",function(){return H.iM(H.cr(H.i([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"ft","$get$ft",function(){return P.jb("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fz","$get$fz",function(){return P.mk()},"dQ","$get$dQ",function(){return{}},"f5","$get$f5",function(){return Z.ap(0)},"f3","$get$f3",function(){return Z.ap(511)},"aM","$get$aM",function(){return Z.ap(1)},"aL","$get$aL",function(){return Z.ap(2)},"aK","$get$aK",function(){return Z.ap(4)},"bh","$get$bh",function(){return Z.ap(8)},"bi","$get$bi",function(){return Z.ap(16)},"aS","$get$aS",function(){return Z.ap(32)},"bD","$get$bD",function(){return Z.ap(64)},"f4","$get$f4",function(){return Z.ap(96)},"bj","$get$bj",function(){return Z.ap(128)},"bg","$get$bg",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.D},{func:1,ret:P.D,args:[P.O]},{func:1,ret:F.a4,args:[F.a4]},{func:1,ret:P.D,args:[F.K]},{func:1,ret:P.D,args:[F.z]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1},{func:1,ret:P.D,args:[F.z,P.q,P.q]},{func:1,ret:-1,args:[W.au]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.D,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[P.n,[P.l,E.aP]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:P.D,args:[D.B]},{func:1,ret:P.q},{func:1,ret:P.q,args:[P.q]},{func:1,ret:P.D,args:[W.ab]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.j,args:[P.n]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[W.bv]},{func:1,ret:-1,args:[P.n,[P.l,U.ag]]},{func:1,ret:V.R,args:[P.q]},{func:1,ret:P.D,args:[P.j]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,args:[,P.j]},{func:1,ret:P.D,args:[P.a3]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:[P.L,P.j,P.j],args:[[P.L,P.j,P.j],P.j]},{func:1,ret:-1,args:[P.j,P.n]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:P.O,args:[P.q,P.q]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.c],opt:[P.av]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.D,args:[,],opt:[,]},{func:1,ret:P.D,args:[P.j,,]},{func:1,ret:P.S,args:[P.n]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:F.a4,args:[F.a4],named:{color:V.F}},{func:1,args:[P.j]},{func:1,ret:-1,args:[F.z,F.z]},{func:1,ret:P.D,args:[F.b3]},{func:1,ret:P.O,args:[W.M]},{func:1,ret:P.D,args:[P.bd]},{func:1,ret:W.a0,args:[W.M]},{func:1,ret:-1,args:[F.a4]},{func:1,ret:P.n,args:[[P.f,P.n],P.n]},{func:1,ret:[P.aN,,],args:[,]}]
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
if(x==y)H.o1(d||a)
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
Isolate.al=a.al
Isolate.dm=a.dm
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
if(typeof dartMainRunner==="function")dartMainRunner(Z.fT,[])
else Z.fT([])})})()
//# sourceMappingURL=test.dart.js.map
