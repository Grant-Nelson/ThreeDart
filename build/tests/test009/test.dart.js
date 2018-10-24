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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isn)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.df"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.df"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.df(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dg=function(){}
var dart=[["","",,H,{"^":"",ma:{"^":"a;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
dl:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cx:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dj==null){H.lr()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.eU("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cN()]
if(v!=null)return v
v=H.lw(a)
if(v!=null)return v
if(typeof a=="function")return C.M
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.$get$cN(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
n:{"^":"a;",
t:function(a,b){return a===b},
gV:function(a){return H.bx(a)},
i:["e1",function(a){return"Instance of '"+H.b8(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hu:{"^":"n;",
i:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isN:1},
dW:{"^":"n;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gV:function(a){return 0},
$isK:1},
cO:{"^":"n;",
gV:function(a){return 0},
i:["e3",function(a){return String(a)}]},
i7:{"^":"cO;"},
c0:{"^":"cO;"},
bV:{"^":"cO;",
i:function(a){var z=a[$.$get$dI()]
if(z==null)return this.e3(a)
return"JavaScript function for "+H.k(J.ae(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbS:1},
b5:{"^":"n;$ti",
h:function(a,b){H.E(b,H.B(a,0))
if(!!a.fixed$length)H.u(P.as("add"))
a.push(b)},
P:function(a,b){var z
if(!!a.fixed$length)H.u(P.as("remove"))
for(z=0;z<a.length;++z)if(J.S(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.B(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aR(a))}},
m:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.T(z,y,H.k(a[y]))
return z.join(b)},
hn:function(a){return this.m(a,"")},
hg:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.N,args:[H.B(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.d(P.aR(a))}throw H.d(H.cL())},
hf:function(a,b){return this.hg(a,b,null)},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bA:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.ac(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.ac(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.B(a,0)])
return H.b(a.slice(b,c),[H.B(a,0)])},
gbv:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cL())},
d2:function(a,b){var z,y
H.l(b,{func:1,ret:P.N,args:[H.B(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aR(a))}return!1},
S:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
i:function(a){return P.cK(a,"[","]")},
gU:function(a){return new J.at(a,a.length,0,[H.B(a,0)])},
gV:function(a){return H.bx(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.u(P.as("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.c6(b,"newLength",null))
if(b<0)throw H.d(P.ac(b,0,null,"newLength",null))
a.length=b},
T:function(a,b,c){H.a3(b)
H.E(c,H.B(a,0))
if(!!a.immutable$list)H.u(P.as("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aW(a,b))
if(b>=a.length||b<0)throw H.d(H.aW(a,b))
a[b]=c},
$ise:1,
$isc:1,
q:{
ht:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.c6(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ac(a,0,4294967295,"length",null))
return J.dU(new Array(a),b)},
dU:function(a,b){return J.bs(H.b(a,[b]))},
bs:function(a){H.c4(a)
a.fixed$length=Array
return a}}},
m9:{"^":"b5;$ti"},
at:{"^":"a;a,b,c,0d,$ti",
gJ:function(a){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bT:{"^":"n;",
ghm:function(a){return a===0?1/a<0:a<0},
dA:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.as(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.as(""+a+".round()"))},
dP:function(a,b){var z
if(b>20)throw H.d(P.ac(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghm(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.d(H.aV(b))
return a*b},
dW:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
e7:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cX(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.cX(a,b)},
cX:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.as("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
bb:function(a,b){var z
if(a>0)z=this.fu(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fu:function(a,b){return b>31?0:a>>>b},
a6:function(a,b){if(typeof b!=="number")throw H.d(H.aV(b))
return a<b},
$isx:1,
$isa_:1},
dV:{"^":"bT;",$isD:1},
hv:{"^":"bT;"},
bU:{"^":"n;",
c5:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aW(a,b))
if(b<0)throw H.d(H.aW(a,b))
if(b>=a.length)H.u(H.aW(a,b))
return a.charCodeAt(b)},
az:function(a,b){if(b>=a.length)throw H.d(H.aW(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.G(b)
if(typeof b!=="string")throw H.d(P.c6(b,null,null))
return a+b},
e_:function(a,b,c){var z
if(c>a.length)throw H.d(P.ac(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bz:function(a,b){return this.e_(a,b,0)},
aP:function(a,b,c){H.a3(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.cn(b,null,null))
if(b>c)throw H.d(P.cn(b,null,null))
if(c>a.length)throw H.d(P.cn(c,null,null))
return a.substring(b,c)},
b6:function(a,b){return this.aP(a,b,null)},
hY:function(a){return a.toLowerCase()},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hz:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
ar:function(a,b){return this.hz(a,b," ")},
h5:function(a,b,c){if(c>a.length)throw H.d(P.ac(c,0,a.length,null,null))
return H.fC(a,b,c)},
i:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$iseb:1,
$isi:1}}],["","",,H,{"^":"",
cL:function(){return new P.cW("No element")},
hs:function(){return new P.cW("Too many elements")},
q:{"^":"je;a",
gn:function(a){return this.a.length},
k:function(a,b){return C.i.c5(this.a,b)},
$aseV:function(){return[P.D]},
$asv:function(){return[P.D]},
$ase:function(){return[P.D]},
$asc:function(){return[P.D]}},
dP:{"^":"e;"},
cj:{"^":"dP;$ti",
gU:function(a){return new H.cQ(this,this.gn(this),0,[H.al(this,"cj",0)])},
cq:function(a,b){return this.e2(0,H.l(b,{func:1,ret:P.N,args:[H.al(this,"cj",0)]}))}},
cQ:{"^":"a;a,b,c,0d,$ti",
gJ:function(a){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.c3(z)
x=y.gn(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.aR(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
hJ:{"^":"e;a,b,$ti",
gU:function(a){return new H.hK(J.b0(this.a),this.b,this.$ti)},
gn:function(a){return J.b1(this.a)},
E:function(a,b){return this.b.$1(J.cB(this.a,b))},
$ase:function(a,b){return[b]}},
hK:{"^":"cM;0a,b,c,$ti",
A:function(){var z=this.b
if(z.A()){this.a=this.c.$1(z.gJ(z))
return!0}this.a=null
return!1},
gJ:function(a){return this.a},
$ascM:function(a,b){return[b]}},
hL:{"^":"cj;a,b,$ti",
gn:function(a){return J.b1(this.a)},
E:function(a,b){return this.b.$1(J.cB(this.a,b))},
$ascj:function(a,b){return[b]},
$ase:function(a,b){return[b]}},
d6:{"^":"e;a,b,$ti",
gU:function(a){return new H.jy(J.b0(this.a),this.b,this.$ti)}},
jy:{"^":"cM;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gJ(z)))return!0
return!1},
gJ:function(a){var z=this.a
return z.gJ(z)}},
ce:{"^":"a;$ti"},
eV:{"^":"a;$ti"},
je:{"^":"ci+eV;"}}],["","",,H,{"^":"",
lk:function(a){return init.types[H.a3(a)]},
lu:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isF},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ae(a)
if(typeof z!=="string")throw H.d(H.aV(a))
return z},
bx:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b8:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.L(a).$isc0){v=C.t(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.az(w,0)===36)w=C.i.b6(w,1)
r=H.dk(H.c4(H.aX(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
ee:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ii:function(a){var z,y,x,w
z=H.b([],[P.D])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aV(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bb(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aV(w))}return H.ee(z)},
ef:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aV(x))
if(x<0)throw H.d(H.aV(x))
if(x>65535)return H.ii(a)}return H.ee(a)},
cV:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bb(z,10))>>>0,56320|z&1023)}throw H.d(P.ac(a,0,1114111,null,null))},
a9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ih:function(a){return a.b?H.a9(a).getUTCFullYear()+0:H.a9(a).getFullYear()+0},
ie:function(a){return a.b?H.a9(a).getUTCMonth()+1:H.a9(a).getMonth()+1},
ia:function(a){return a.b?H.a9(a).getUTCDate()+0:H.a9(a).getDate()+0},
ib:function(a){return a.b?H.a9(a).getUTCHours()+0:H.a9(a).getHours()+0},
id:function(a){return a.b?H.a9(a).getUTCMinutes()+0:H.a9(a).getMinutes()+0},
ig:function(a){return a.b?H.a9(a).getUTCSeconds()+0:H.a9(a).getSeconds()+0},
ic:function(a){return a.b?H.a9(a).getUTCMilliseconds()+0:H.a9(a).getMilliseconds()+0},
o:function(a){throw H.d(H.aV(a))},
h:function(a,b){if(a==null)J.b1(a)
throw H.d(H.aW(a,b))},
aW:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,"index",null)
z=H.a3(J.b1(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.O(b,a,"index",null,z)
return P.cn(b,"index",null)},
lf:function(a,b,c){if(a>c)return new P.cm(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cm(a,c,!0,b,"end","Invalid value")
return new P.aB(!0,b,"end",null)},
aV:function(a){return new P.aB(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.ea()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fD})
z.name=""}else z.toString=H.fD
return z},
fD:function(){return J.ae(this.dartException)},
u:function(a){throw H.d(a)},
z:function(a){throw H.d(P.aR(a))},
ad:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lK(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bb(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cP(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e9(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eD()
u=$.$get$eE()
t=$.$get$eF()
s=$.$get$eG()
r=$.$get$eK()
q=$.$get$eL()
p=$.$get$eI()
$.$get$eH()
o=$.$get$eN()
n=$.$get$eM()
m=v.a3(y)
if(m!=null)return z.$1(H.cP(H.G(y),m))
else{m=u.a3(y)
if(m!=null){m.method="call"
return z.$1(H.cP(H.G(y),m))}else{m=t.a3(y)
if(m==null){m=s.a3(y)
if(m==null){m=r.a3(y)
if(m==null){m=q.a3(y)
if(m==null){m=p.a3(y)
if(m==null){m=s.a3(y)
if(m==null){m=o.a3(y)
if(m==null){m=n.a3(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e9(H.G(y),m))}}return z.$1(new H.jd(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.en()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aB(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.en()
return a},
bj:function(a){var z
if(a==null)return new H.fd(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fd(a)},
lh:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.T(0,a[y],a[x])}return b},
lt:function(a,b,c,d,e,f){H.j(a,"$isbS")
switch(H.a3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.r("Unsupported number of arguments for wrapped closure"))},
bg:function(a,b){var z
H.a3(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lt)
a.$identity=z
return z},
fW:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$isc){z.$reflectionInfo=d
x=H.im(z).r}else x=d
w=e?Object.create(new H.iK().constructor.prototype):Object.create(new H.cD(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.au
if(typeof u!=="number")return u.I()
$.au=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dD(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.lk,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dw:H.cE
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dD(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fT:function(a,b,c,d){var z=H.cE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dD:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fV(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fT(y,!w,z,b)
if(y===0){w=$.au
if(typeof w!=="number")return w.I()
$.au=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bm
if(v==null){v=H.c8("self")
$.bm=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.au
if(typeof w!=="number")return w.I()
$.au=w+1
t+=w
w="return function("+t+"){return this."
v=$.bm
if(v==null){v=H.c8("self")
$.bm=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
fU:function(a,b,c,d){var z,y
z=H.cE
y=H.dw
switch(b?-1:a){case 0:throw H.d(H.iw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fV:function(a,b){var z,y,x,w,v,u,t,s
z=$.bm
if(z==null){z=H.c8("self")
$.bm=z}y=$.dv
if(y==null){y=H.c8("receiver")
$.dv=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fU(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.au
if(typeof y!=="number")return y.I()
$.au=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.au
if(typeof y!=="number")return y.I()
$.au=y+1
return new Function(z+y+"}")()},
df:function(a,b,c,d,e,f,g){var z,y
z=J.bs(H.c4(b))
H.a3(c)
y=!!J.L(d).$isc?J.bs(d):d
return H.fW(a,z,c,y,!!e,f,g)},
G:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aA(a,"String"))},
lA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aA(a,"num"))},
dd:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aA(a,"bool"))},
a3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aA(a,"int"))},
fA:function(a,b){throw H.d(H.aA(a,H.G(b).substring(3)))},
lC:function(a,b){var z=J.c3(b)
throw H.d(H.fS(a,z.aP(b,3,z.gn(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.fA(a,b)},
f:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.lC(a,b)},
c4:function(a){if(a==null)return a
if(!!J.L(a).$isc)return a
throw H.d(H.aA(a,"List"))},
lv:function(a,b){if(a==null)return a
if(!!J.L(a).$isc)return a
if(J.L(a)[b])return a
H.fA(a,b)},
ft:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a3(z)]
else return a.$S()}return},
c2:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ft(J.L(a))
if(z==null)return!1
y=H.fw(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.da)return a
$.da=!0
try{if(H.c2(a,b))return a
z=H.c5(b)
y=H.aA(a,z)
throw H.d(y)}finally{$.da=!1}},
dh:function(a,b){if(a!=null&&!H.de(a,b))H.u(H.aA(a,H.c5(b)))
return a},
fo:function(a){var z
if(a instanceof H.p){z=H.ft(J.L(a))
if(z!=null)return H.c5(z)
return"Closure"}return H.b8(a)},
lH:function(a){throw H.d(new P.h0(H.G(a)))},
fu:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aX:function(a){if(a==null)return
return a.$ti},
n4:function(a,b,c){return H.bk(a["$as"+H.k(c)],H.aX(b))},
bP:function(a,b,c,d){var z
H.G(c)
H.a3(d)
z=H.bk(a["$as"+H.k(c)],H.aX(b))
return z==null?null:z[d]},
al:function(a,b,c){var z
H.G(b)
H.a3(c)
z=H.bk(a["$as"+H.k(b)],H.aX(a))
return z==null?null:z[c]},
B:function(a,b){var z
H.a3(b)
z=H.aX(a)
return z==null?null:z[b]},
c5:function(a){var z=H.aZ(a,null)
return z},
aZ:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dk(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a3(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.k(b[y])}if('func' in a)return H.l1(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
l1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.I(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aZ(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aZ(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aZ(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aZ(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lg(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.G(z[l])
n=n+m+H.aZ(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dk:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.bB("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aZ(u,c)}v="<"+z.i(0)+">"
return v},
bk:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bO:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aX(a)
y=J.L(a)
if(y[b]==null)return!1
return H.fr(H.bk(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.G(b)
H.c4(c)
H.G(d)
if(a==null)return a
z=H.bO(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dk(c,0,null)
throw H.d(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fr:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.am(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.am(a[y],b,c[y],d))return!1
return!0},
n2:function(a,b,c){return a.apply(b,H.bk(J.L(b)["$as"+H.k(c)],H.aX(b)))},
fx:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="K"||a===-1||a===-2||H.fx(z)}return!1},
de:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="K"||b===-1||b===-2||H.fx(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.de(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c2(a,b)}y=J.L(a).constructor
x=H.aX(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.am(y,null,b,null)
return z},
E:function(a,b){if(a!=null&&!H.de(a,b))throw H.d(H.aA(a,H.c5(b)))
return a},
am:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.am(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="K")return!0
if('func' in c)return H.fw(a,b,c,d)
if('func' in a)return c.builtin$cls==="bS"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.am("type" in a?a.type:null,b,x,d)
else if(H.am(a,b,x,d))return!0
else{if(!('$is'+"bq" in y.prototype))return!1
w=y.prototype["$as"+"bq"]
v=H.bk(w,z?a.slice(1):null)
return H.am(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c5(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fr(H.bk(r,z),b,u,d)},
fw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.am(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.am(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.am(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.am(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lz(m,b,l,d)},
lz:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.am(c[w],d,a[w],b))return!1}return!0},
n3:function(a,b,c){Object.defineProperty(a,H.G(b),{value:c,enumerable:false,writable:true,configurable:true})},
lw:function(a){var z,y,x,w,v,u
z=H.G($.fv.$1(a))
y=$.cv[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cy[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.G($.fq.$2(a,z))
if(z!=null){y=$.cv[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cy[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cz(x)
$.cv[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cy[z]=x
return x}if(v==="-"){u=H.cz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fz(a,x)
if(v==="*")throw H.d(P.eU(z))
if(init.leafTags[z]===true){u=H.cz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fz(a,x)},
fz:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dl(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cz:function(a){return J.dl(a,!1,null,!!a.$isF)},
ly:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cz(z)
else return J.dl(z,c,null,null)},
lr:function(){if(!0===$.dj)return
$.dj=!0
H.ls()},
ls:function(){var z,y,x,w,v,u,t,s
$.cv=Object.create(null)
$.cy=Object.create(null)
H.ln()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fB.$1(v)
if(u!=null){t=H.ly(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ln:function(){var z,y,x,w,v,u,t
z=C.J()
z=H.bf(C.G,H.bf(C.L,H.bf(C.r,H.bf(C.r,H.bf(C.K,H.bf(C.H,H.bf(C.I(C.t),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fv=new H.lo(v)
$.fq=new H.lp(u)
$.fB=new H.lq(t)},
bf:function(a,b){return a(b)||b},
fC:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dn:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
il:{"^":"a;a,b,c,d,e,f,r,0x",q:{
im:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bs(z)
y=z[0]
x=z[1]
return new H.il(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j0:{"^":"a;a,b,c,d,e,f",
a3:function(a){var z,y,x
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
az:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cp:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eJ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i4:{"^":"a0;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
e9:function(a,b){return new H.i4(a,b==null?null:b.method)}}},
hy:{"^":"a0;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
q:{
cP:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hy(a,y,z?null:b.receiver)}}},
jd:{"^":"a0;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lK:{"^":"p:17;a",
$1:function(a){if(!!J.L(a).$isa0)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fd:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isar:1},
p:{"^":"a;",
i:function(a){return"Closure '"+H.b8(this).trim()+"'"},
gdT:function(){return this},
$isbS:1,
gdT:function(){return this}},
et:{"^":"p;"},
iK:{"^":"et;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cD:{"^":"et;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cD))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.bx(this.a)
else y=typeof z!=="object"?J.b_(z):H.bx(z)
return(y^H.bx(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.b8(z)+"'")},
q:{
cE:function(a){return a.a},
dw:function(a){return a.c},
c8:function(a){var z,y,x,w,v
z=new H.cD("self","target","receiver","name")
y=J.bs(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
j1:{"^":"a0;a",
i:function(a){return this.a},
q:{
aA:function(a,b){return new H.j1("TypeError: "+H.k(P.cc(a))+": type '"+H.fo(a)+"' is not a subtype of type '"+b+"'")}}},
fR:{"^":"a0;a",
i:function(a){return this.a},
q:{
fS:function(a,b){return new H.fR("CastError: "+H.k(P.cc(a))+": type '"+H.fo(a)+"' is not a subtype of type '"+b+"'")}}},
iv:{"^":"a0;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
q:{
iw:function(a){return new H.iv(a)}}},
b6:{"^":"e4;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
gZ:function(a){return new H.e0(this,[H.B(this,0)])},
d6:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cM(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cM(y,b)}else return this.hk(b)},
hk:function(a){var z=this.d
if(z==null)return!1
return this.ce(this.bL(z,J.b_(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b8(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b8(w,b)
x=y==null?null:y.b
return x}else return this.hl(b)},
hl:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bL(z,J.b_(a)&0x3ffffff)
x=this.ce(y,a)
if(x<0)return
return y[x].b},
T:function(a,b,c){var z,y,x,w,v,u
H.E(b,H.B(this,0))
H.E(c,H.B(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bR()
this.b=z}this.cF(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bR()
this.c=y}this.cF(y,b,c)}else{x=this.d
if(x==null){x=this.bR()
this.d=x}w=J.b_(b)&0x3ffffff
v=this.bL(x,w)
if(v==null)this.bW(x,w,[this.bS(b,c)])
else{u=this.ce(v,b)
if(u>=0)v[u].b=c
else v.push(this.bS(b,c))}}},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.B(this,0),H.B(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aR(this))
z=z.c}},
cF:function(a,b,c){var z
H.E(b,H.B(this,0))
H.E(c,H.B(this,1))
z=this.b8(a,b)
if(z==null)this.bW(a,b,this.bS(b,c))
else z.b=c},
eG:function(){this.r=this.r+1&67108863},
bS:function(a,b){var z,y
z=new H.hC(H.E(a,H.B(this,0)),H.E(b,H.B(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eG()
return z},
ce:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
i:function(a){return P.e5(this)},
b8:function(a,b){return a[b]},
bL:function(a,b){return a[b]},
bW:function(a,b,c){a[b]=c},
eA:function(a,b){delete a[b]},
cM:function(a,b){return this.b8(a,b)!=null},
bR:function(){var z=Object.create(null)
this.bW(z,"<non-identifier-key>",z)
this.eA(z,"<non-identifier-key>")
return z},
$ise_:1},
hC:{"^":"a;a,b,0c,0d"},
e0:{"^":"dP;a,$ti",
gn:function(a){return this.a.a},
gU:function(a){var z,y
z=this.a
y=new H.hD(z,z.r,this.$ti)
y.c=z.e
return y}},
hD:{"^":"a;a,b,0c,0d,$ti",
gJ:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aR(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lo:{"^":"p:17;a",
$1:function(a){return this.a(a)}},
lp:{"^":"p:35;a",
$2:function(a,b){return this.a(a,b)}},
lq:{"^":"p:44;a",
$1:function(a){return this.a(H.G(a))}},
hw:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseb:1,
q:{
hx:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(new P.hk("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lg:function(a){return J.dU(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bK:function(a){return a},
aU:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aW(b,a))},
l0:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.lf(a,b,c))
return b},
hZ:{"^":"n;","%":"DataView;ArrayBufferView;cU|f7|f8|hY|f9|fa|aT"},
cU:{"^":"hZ;",
gn:function(a){return a.length},
$isF:1,
$asF:I.dg},
hY:{"^":"f8;",
k:function(a,b){H.aU(b,a,a.length)
return a[b]},
$asce:function(){return[P.x]},
$asv:function(){return[P.x]},
$ise:1,
$ase:function(){return[P.x]},
$isc:1,
$asc:function(){return[P.x]},
"%":"Float32Array|Float64Array"},
aT:{"^":"fa;",
$asce:function(){return[P.D]},
$asv:function(){return[P.D]},
$ise:1,
$ase:function(){return[P.D]},
$isc:1,
$asc:function(){return[P.D]}},
mi:{"^":"aT;",
k:function(a,b){H.aU(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mj:{"^":"aT;",
k:function(a,b){H.aU(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mk:{"^":"aT;",
k:function(a,b){H.aU(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ml:{"^":"aT;",
k:function(a,b){H.aU(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mm:{"^":"aT;",
k:function(a,b){H.aU(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mn:{"^":"aT;",
gn:function(a){return a.length},
k:function(a,b){H.aU(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
i_:{"^":"aT;",
gn:function(a){return a.length},
k:function(a,b){H.aU(b,a,a.length)
return a[b]},
bA:function(a,b,c){return new Uint8Array(a.subarray(b,H.l0(b,c,a.length)))},
"%":";Uint8Array"},
f7:{"^":"cU+v;"},
f8:{"^":"f7+ce;"},
f9:{"^":"cU+v;"},
fa:{"^":"f9+ce;"}}],["","",,P,{"^":"",
jA:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.l8()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bg(new P.jC(z),1)).observe(y,{childList:true})
return new P.jB(z,y,x)}else if(self.setImmediate!=null)return P.l9()
return P.la()},
mQ:[function(a){self.scheduleImmediate(H.bg(new P.jD(H.l(a,{func:1,ret:-1})),0))},"$1","l8",4,0,11],
mR:[function(a){self.setImmediate(H.bg(new P.jE(H.l(a,{func:1,ret:-1})),0))},"$1","l9",4,0,11],
mS:[function(a){P.d0(C.l,H.l(a,{func:1,ret:-1}))},"$1","la",4,0,11],
d0:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.Y(a.a,1000)
return P.kG(z<0?0:z,b)},
ey:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.b9]})
z=C.h.Y(a.a,1000)
return P.kH(z<0?0:z,b)},
l4:function(a,b){if(H.c2(a,{func:1,args:[P.a,P.ar]}))return b.hJ(a,null,P.a,P.ar)
if(H.c2(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.c6(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
l3:function(){var z,y
for(;z=$.be,z!=null;){$.bM=null
y=z.b
$.be=y
if(y==null)$.bL=null
z.a.$0()}},
n1:[function(){$.db=!0
try{P.l3()}finally{$.bM=null
$.db=!1
if($.be!=null)$.$get$d7().$1(P.fs())}},"$0","fs",0,0,3],
fn:function(a){var z=new P.f_(H.l(a,{func:1,ret:-1}))
if($.be==null){$.bL=z
$.be=z
if(!$.db)$.$get$d7().$1(P.fs())}else{$.bL.b=z
$.bL=z}},
l7:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.be
if(z==null){P.fn(a)
$.bM=$.bL
return}y=new P.f_(a)
x=$.bM
if(x==null){y.b=z
$.bM=y
$.be=y}else{y.b=x.b
x.b=y
$.bM=y
if(y.b==null)$.bL=y}},
lD:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.R
if(C.j===y){P.cu(null,null,C.j,a)
return}y.toString
P.cu(null,null,y,H.l(y.c0(a),z))},
ex:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.R
if(y===C.j){y.toString
return P.d0(a,b)}return P.d0(a,H.l(y.c0(b),z))},
iY:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b9]}
H.l(b,z)
y=$.R
if(y===C.j){y.toString
return P.ey(a,b)}x=y.d3(b,P.b9)
$.R.toString
return P.ey(a,H.l(x,z))},
ct:function(a,b,c,d,e){var z={}
z.a=d
P.l7(new P.l5(z,e))},
fl:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.R
if(y===c)return d.$0()
$.R=c
z=y
try{y=d.$0()
return y}finally{$.R=z}},
fm:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.E(e,g)
y=$.R
if(y===c)return d.$1(e)
$.R=c
z=y
try{y=d.$1(e)
return y}finally{$.R=z}},
l6:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
y=$.R
if(y===c)return d.$2(e,f)
$.R=c
z=y
try{y=d.$2(e,f)
return y}finally{$.R=z}},
cu:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c0(d):c.h1(d,-1)
P.fn(d)},
jC:{"^":"p:18;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jB:{"^":"p:27;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jD:{"^":"p:2;a",
$0:function(){this.a.$0()}},
jE:{"^":"p:2;a",
$0:function(){this.a.$0()}},
fh:{"^":"a;a,0b,c",
el:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bg(new P.kJ(this,b),0),a)
else throw H.d(P.as("`setTimeout()` not found."))},
em:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bg(new P.kI(this,a,Date.now(),b),0),a)
else throw H.d(P.as("Periodic timer."))},
$isb9:1,
q:{
kG:function(a,b){var z=new P.fh(!0,0)
z.el(a,b)
return z},
kH:function(a,b){var z=new P.fh(!1,0)
z.em(a,b)
return z}}},
kJ:{"^":"p:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kI:{"^":"p:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.e7(w,x)}z.c=y
this.d.$1(z)}},
bd:{"^":"a;0a,b,c,d,e,$ti",
hr:function(a){if(this.c!==6)return!0
return this.b.b.co(H.l(this.d,{func:1,ret:P.N,args:[P.a]}),a.a,P.N,P.a)},
hj:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.B(this,1)}
w=this.b.b
if(H.c2(z,{func:1,args:[P.a,P.ar]}))return H.dh(w.hR(z,a.a,a.b,null,y,P.ar),x)
else return H.dh(w.co(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aO:{"^":"a;cW:a<,b,0fj:c<,$ti",
dO:function(a,b,c){var z,y,x,w
z=H.B(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.R
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.l4(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aO(0,$.R,[c])
w=b==null?1:3
this.cG(new P.bd(x,w,a,b,[z,c]))
return x},
hV:function(a,b){return this.dO(a,null,b)},
cG:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isbd")
this.c=a}else{if(z===2){y=H.j(this.c,"$isaO")
z=y.a
if(z<4){y.cG(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cu(null,null,z,H.l(new P.jT(this,a),{func:1,ret:-1}))}},
cS:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isbd")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isaO")
y=u.a
if(y<4){u.cS(a)
return}this.a=y
this.c=u.c}z.a=this.ba(a)
y=this.b
y.toString
P.cu(null,null,y,H.l(new P.jY(z,this),{func:1,ret:-1}))}},
bU:function(){var z=H.j(this.c,"$isbd")
this.c=null
return this.ba(z)},
ba:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cJ:function(a){var z,y,x,w
z=H.B(this,0)
H.dh(a,{futureOr:1,type:z})
y=this.$ti
x=H.bO(a,"$isbq",y,"$asbq")
if(x){z=H.bO(a,"$isaO",y,null)
if(z)P.f2(a,this)
else P.jU(a,this)}else{w=this.bU()
H.E(a,z)
this.a=4
this.c=a
P.bJ(this,w)}},
bG:[function(a,b){var z
H.j(b,"$isar")
z=this.bU()
this.a=8
this.c=new P.af(a,b)
P.bJ(this,z)},function(a){return this.bG(a,null)},"i1","$2","$1","gev",4,2,45],
$isbq:1,
q:{
jU:function(a,b){var z,y,x
b.a=1
try{a.dO(new P.jV(b),new P.jW(b),null)}catch(x){z=H.ad(x)
y=H.bj(x)
P.lD(new P.jX(b,z,y))}},
f2:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isaO")
if(z>=4){y=b.bU()
b.a=a.a
b.c=a.c
P.bJ(b,y)}else{y=H.j(b.c,"$isbd")
b.a=2
b.c=a
a.cS(y)}},
bJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isaf")
y=y.b
u=v.a
t=v.b
y.toString
P.ct(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bJ(z.a,b)}y=z.a
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
if(p){H.j(r,"$isaf")
y=y.b
u=r.a
t=r.b
y.toString
P.ct(null,null,y,u,t)
return}o=$.R
if(o==null?q!=null:o!==q)$.R=q
else o=null
y=b.c
if(y===8)new P.k0(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.k_(x,b,r).$0()}else if((y&2)!==0)new P.jZ(z,x,b).$0()
if(o!=null)$.R=o
y=x.b
if(!!J.L(y).$isbq){if(y.a>=4){n=H.j(t.c,"$isbd")
t.c=null
b=t.ba(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f2(y,t)
return}}m=b.b
n=H.j(m.c,"$isbd")
m.c=null
b=m.ba(n)
y=x.a
u=x.b
if(!y){H.E(u,H.B(m,0))
m.a=4
m.c=u}else{H.j(u,"$isaf")
m.a=8
m.c=u}z.a=m
y=m}}}},
jT:{"^":"p:2;a,b",
$0:function(){P.bJ(this.a,this.b)}},
jY:{"^":"p:2;a,b",
$0:function(){P.bJ(this.b,this.a.a)}},
jV:{"^":"p:18;a",
$1:function(a){var z=this.a
z.a=0
z.cJ(a)}},
jW:{"^":"p:43;a",
$2:function(a,b){this.a.bG(a,H.j(b,"$isar"))},
$1:function(a){return this.$2(a,null)}},
jX:{"^":"p:2;a,b,c",
$0:function(){this.a.bG(this.b,this.c)}},
k0:{"^":"p:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dM(H.l(w.d,{func:1}),null)}catch(v){y=H.ad(v)
x=H.bj(v)
if(this.d){w=H.j(this.a.a.c,"$isaf").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isaf")
else u.b=new P.af(y,x)
u.a=!0
return}if(!!J.L(z).$isbq){if(z instanceof P.aO&&z.gcW()>=4){if(z.gcW()===8){w=this.b
w.b=H.j(z.gfj(),"$isaf")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hV(new P.k1(t),null)
w.a=!1}}},
k1:{"^":"p:39;a",
$1:function(a){return this.a}},
k_:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.B(x,0)
v=H.E(this.c,w)
u=H.B(x,1)
this.a.b=x.b.b.co(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ad(t)
y=H.bj(t)
x=this.a
x.b=new P.af(z,y)
x.a=!0}}},
jZ:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isaf")
w=this.c
if(w.hr(z)&&w.e!=null){v=this.b
v.b=w.hj(z)
v.a=!1}}catch(u){y=H.ad(u)
x=H.bj(u)
w=H.j(this.a.a.c,"$isaf")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.af(y,x)
s.a=!0}}},
f_:{"^":"a;a,0b"},
cX:{"^":"a;$ti",
gn:function(a){var z,y
z={}
y=new P.aO(0,$.R,[P.D])
z.a=0
this.hq(new P.iN(z,this),!0,new P.iO(z,y),y.gev())
return y}},
iN:{"^":"p;a,b",
$1:function(a){H.E(a,H.al(this.b,"cX",0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.al(this.b,"cX",0)]}}},
iO:{"^":"p:2;a,b",
$0:function(){this.b.cJ(this.a.a)}},
eq:{"^":"a;$ti"},
iM:{"^":"a;"},
b9:{"^":"a;"},
af:{"^":"a;a,b",
i:function(a){return H.k(this.a)},
$isa0:1},
kQ:{"^":"a;",$ismP:1},
l5:{"^":"p:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ea()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
kl:{"^":"kQ;",
hS:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.R){a.$0()
return}P.fl(null,null,this,a,-1)}catch(x){z=H.ad(x)
y=H.bj(x)
P.ct(null,null,this,z,H.j(y,"$isar"))}},
hT:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.j===$.R){a.$1(b)
return}P.fm(null,null,this,a,b,-1,c)}catch(x){z=H.ad(x)
y=H.bj(x)
P.ct(null,null,this,z,H.j(y,"$isar"))}},
h1:function(a,b){return new P.kn(this,H.l(a,{func:1,ret:b}),b)},
c0:function(a){return new P.km(this,H.l(a,{func:1,ret:-1}))},
d3:function(a,b){return new P.ko(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dM:function(a,b){H.l(a,{func:1,ret:b})
if($.R===C.j)return a.$0()
return P.fl(null,null,this,a,b)},
co:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.R===C.j)return a.$1(b)
return P.fm(null,null,this,a,b,c,d)},
hR:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.R===C.j)return a.$2(b,c)
return P.l6(null,null,this,a,b,c,d,e,f)},
hJ:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
kn:{"^":"p;a,b,c",
$0:function(){return this.a.dM(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
km:{"^":"p:3;a,b",
$0:function(){return this.a.hS(this.b)}},
ko:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.hT(this.b,H.E(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hE:function(a,b,c){H.c4(a)
return H.w(H.lh(a,new H.b6(0,0,[b,c])),"$ise_",[b,c],"$ase_")},
e1:function(a,b){return new H.b6(0,0,[a,b])},
bX:function(a,b,c,d){return new P.k8(0,0,[d])},
hr:function(a,b,c){var z,y
if(P.dc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bN()
C.a.h(y,a)
try{P.l2(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.er(b,H.lv(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
cK:function(a,b,c){var z,y,x
if(P.dc(a))return b+"..."+c
z=new P.bB(b)
y=$.$get$bN()
C.a.h(y,a)
try{x=z
x.a=P.er(x.gaA(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaA()+c
y=z.gaA()
return y.charCodeAt(0)==0?y:y},
dc:function(a){var z,y
for(z=0;y=$.$get$bN(),z<y.length;++z)if(a===y[z])return!0
return!1},
l2:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gU(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.k(z.gJ(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gJ(z);++x
if(!z.A()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gJ(z);++x
for(;z.A();t=s,s=r){r=z.gJ(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
e2:function(a,b){var z,y
z=P.bX(null,null,null,b)
for(y=J.b0(a);y.A();)z.h(0,H.E(y.gJ(y),b))
return z},
e5:function(a){var z,y,x
z={}
if(P.dc(a))return"{...}"
y=new P.bB("")
try{C.a.h($.$get$bN(),a)
x=y
x.a=x.gaA()+"{"
z.a=!0
J.fH(a,new P.hI(z,y))
z=y
z.a=z.gaA()+"}"}finally{z=$.$get$bN()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaA()
return z.charCodeAt(0)==0?z:z},
k8:{"^":"k2;a,0b,0c,0d,0e,0f,r,$ti",
gU:function(a){var z=new P.f6(this,this.r,this.$ti)
z.c=this.e
return z},
gn:function(a){return this.a},
S:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.j(z[b],"$iscs")!=null}else{y=this.ew(b)
return y}},
ew:function(a){var z=this.d
if(z==null)return!1
return this.bJ(this.cQ(z,a),a)>=0},
h:function(a,b){var z,y
H.E(b,H.B(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d9()
this.b=z}return this.cH(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d9()
this.c=y}return this.cH(y,b)}else return this.en(0,b)},
en:function(a,b){var z,y,x
H.E(b,H.B(this,0))
z=this.d
if(z==null){z=P.d9()
this.d=z}y=this.cK(b)
x=z[y]
if(x==null)z[y]=[this.bF(b)]
else{if(this.bJ(x,b)>=0)return!1
x.push(this.bF(b))}return!0},
P:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cT(this.c,b)
else return this.fc(0,b)},
fc:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.cQ(z,b)
x=this.bJ(y,b)
if(x<0)return!1
this.cY(y.splice(x,1)[0])
return!0},
cH:function(a,b){H.E(b,H.B(this,0))
if(H.j(a[b],"$iscs")!=null)return!1
a[b]=this.bF(b)
return!0},
cT:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$iscs")
if(z==null)return!1
this.cY(z)
delete a[b]
return!0},
cI:function(){this.r=this.r+1&67108863},
bF:function(a){var z,y
z=new P.cs(H.E(a,H.B(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cI()
return z},
cY:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cI()},
cK:function(a){return J.b_(a)&0x3ffffff},
cQ:function(a,b){return a[this.cK(b)]},
bJ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
q:{
d9:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cs:{"^":"a;a,0b,0c"},
f6:{"^":"a;a,b,0c,0d,$ti",
gJ:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aR(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.E(z.a,H.B(this,0))
this.c=z.b
return!0}}}},
k2:{"^":"ix;"},
ci:{"^":"k9;",$ise:1,$isc:1},
v:{"^":"a;$ti",
gU:function(a){return new H.cQ(a,this.gn(a),0,[H.bP(this,a,"v",0)])},
E:function(a,b){return this.k(a,b)},
hX:function(a,b){var z,y,x
z=H.b([],[H.bP(this,a,"v",0)])
C.a.sn(z,this.gn(a))
y=0
while(!0){x=this.gn(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.T(z,y,this.k(a,y));++y}return z},
hW:function(a){return this.hX(a,!0)},
i:function(a){return P.cK(a,"[","]")}},
e4:{"^":"a6;"},
hI:{"^":"p:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
a6:{"^":"a;$ti",
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bP(this,a,"a6",0),H.bP(this,a,"a6",1)]})
for(z=J.b0(this.gZ(a));z.A();){y=z.gJ(z)
b.$2(y,this.k(a,y))}},
gn:function(a){return J.b1(this.gZ(a))},
i:function(a){return P.e5(a)},
$isa1:1},
iz:{"^":"a;$ti",
ag:function(a,b){var z
for(z=J.b0(H.w(b,"$ise",this.$ti,"$ase"));z.A();)this.h(0,z.gJ(z))},
i:function(a){return P.cK(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.ds("index"))
if(b<0)H.u(P.ac(b,0,null,"index",null))
for(z=new P.f6(this,this.r,this.$ti),z.c=this.e,y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.d(P.O(b,this,"index",null,y))},
$ise:1},
ix:{"^":"iz;"},
k9:{"^":"a+v;"}}],["","",,P,{"^":"",cG:{"^":"a;$ti"},ca:{"^":"iM;$ti"},hb:{"^":"cG;",
$ascG:function(){return[P.i,[P.c,P.D]]}},hp:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},ho:{"^":"ca;a",
ex:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.h(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.bB("")
if(w>b)v.a+=C.i.aP(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fL(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asca:function(){return[P.i,P.i]}},jk:{"^":"hb;a"},jl:{"^":"ca;",
h7:function(a,b,c){var z,y,x,w
z=a.length
P.eg(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kO(0,0,x)
if(w.eC(a,b,z)!==z)w.cZ(C.i.c5(a,z-1),0)
return C.Q.bA(x,0,w.b)},
h6:function(a){return this.h7(a,0,null)},
$asca:function(){return[P.i,[P.c,P.D]]}},kO:{"^":"a;a,b,c",
cZ:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.h(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.h(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.h(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.h(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.h(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.h(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.h(z,y)
z[y]=128|a&63
return!1}},
eC:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.c5(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.az(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cZ(w,C.i.az(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.h(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.h(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.h(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.h(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
hd:function(a){var z=J.L(a)
if(!!z.$isp)return z.i(a)
return"Instance of '"+H.b8(a)+"'"},
hF:function(a,b,c,d){var z,y
H.E(b,d)
z=J.ht(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.T(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
hG:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gU(a);x.A();)C.a.h(y,H.E(x.gJ(x),c))
if(b)return y
return H.w(J.bs(y),"$isc",z,"$asc")},
cY:function(a,b,c){var z,y
z=P.D
H.w(a,"$ise",[z],"$ase")
if(a.constructor===Array){H.w(a,"$isb5",[z],"$asb5")
y=a.length
c=P.eg(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a6()
z=c<y}else z=!0
return H.ef(z?C.a.bA(a,b,c):a)}return P.iP(a,b,c)},
iP:function(a,b,c){var z,y,x
H.w(a,"$ise",[P.D],"$ase")
z=J.b0(a)
for(y=0;y<b;++y)if(!z.A())throw H.d(P.ac(b,0,y,null,null))
x=[]
for(;z.A();)x.push(z.gJ(z))
return H.ef(x)},
io:function(a,b,c){return new H.hw(a,H.hx(a,!1,!0,!1))},
fj:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.D],"$asc")
if(c===C.p){z=$.$get$fi().b
z=z.test(b)}else z=!1
if(z)return b
y=C.A.h6(H.E(b,H.al(c,"cG",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cV(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cc:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ae(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hd(a)},
r:function(a){return new P.f1(a)},
dm:function(a){H.lB(a)},
N:{"^":"a;"},
"+bool":0,
an:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&this.b===b.b},
gV:function(a){var z=this.a
return(z^C.h.bb(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.h2(H.ih(this))
y=P.bR(H.ie(this))
x=P.bR(H.ia(this))
w=P.bR(H.ib(this))
v=P.bR(H.id(this))
u=P.bR(H.ig(this))
t=P.h3(H.ic(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
h2:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bR:function(a){if(a>=10)return""+a
return"0"+a}}},
x:{"^":"a_;"},
"+double":0,
b3:{"^":"a;a",
j:function(a,b){return new P.b3(C.h.a4(this.a*b))},
a6:function(a,b){return C.h.a6(this.a,H.j(b,"$isb3").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.b3))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.h7()
y=this.a
if(y<0)return"-"+new P.b3(0-y).i(0)
x=z.$1(C.h.Y(y,6e7)%60)
w=z.$1(C.h.Y(y,1e6)%60)
v=new P.h6().$1(y%1e6)
return""+C.h.Y(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
q:{
dO:function(a,b,c,d,e,f){return new P.b3(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h6:{"^":"p:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h7:{"^":"p:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a0:{"^":"a;"},
ea:{"^":"a0;",
i:function(a){return"Throw of null."}},
aB:{"^":"a0;a,b,c,d",
gbI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbH:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbI()+y+x
if(!this.a)return w
v=this.gbH()
u=P.cc(this.b)
return w+v+": "+H.k(u)},
q:{
c6:function(a,b,c){return new P.aB(!0,a,b,c)},
ds:function(a){return new P.aB(!1,null,a,"Must not be null")}}},
cm:{"^":"aB;e,f,a,b,c,d",
gbI:function(){return"RangeError"},
gbH:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
q:{
cn:function(a,b,c){return new P.cm(null,null,!0,a,b,"Value not in range")},
ac:function(a,b,c,d,e){return new P.cm(b,c,!0,a,d,"Invalid value")},
eg:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.d(P.ac(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.d(P.ac(b,a,c,"end",f))
return b}return c}}},
hq:{"^":"aB;e,n:f>,a,b,c,d",
gbI:function(){return"RangeError"},
gbH:function(){if(J.fE(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
q:{
O:function(a,b,c,d,e){var z=H.a3(e!=null?e:J.b1(b))
return new P.hq(b,z,!0,a,c,"Index out of range")}}},
jf:{"^":"a0;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
as:function(a){return new P.jf(a)}}},
jc:{"^":"a0;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
eU:function(a){return new P.jc(a)}}},
cW:{"^":"a0;a",
i:function(a){return"Bad state: "+this.a},
q:{
ep:function(a){return new P.cW(a)}}},
fY:{"^":"a0;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cc(z))+"."},
q:{
aR:function(a){return new P.fY(a)}}},
i5:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa0:1},
en:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa0:1},
h0:{"^":"a0;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f1:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hk:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.aP(x,0,75)+"..."
return y+"\n"+x}},
bS:{"^":"a;"},
D:{"^":"a_;"},
"+int":0,
e:{"^":"a;$ti",
cq:["e2",function(a,b){var z=H.al(this,"e",0)
return new H.d6(this,H.l(b,{func:1,ret:P.N,args:[z]}),[z])}],
gn:function(a){var z,y
z=this.gU(this)
for(y=0;z.A();)++y
return y},
gau:function(a){var z,y
z=this.gU(this)
if(!z.A())throw H.d(H.cL())
y=z.gJ(z)
if(z.A())throw H.d(H.hs())
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.ds("index"))
if(b<0)H.u(P.ac(b,0,null,"index",null))
for(z=this.gU(this),y=0;z.A();){x=z.gJ(z)
if(b===y)return x;++y}throw H.d(P.O(b,this,"index",null,y))},
i:function(a){return P.hr(this,"(",")")}},
cM:{"^":"a;$ti"},
c:{"^":"a;$ti",$ise:1},
"+List":0,
a1:{"^":"a;$ti"},
K:{"^":"a;",
gV:function(a){return P.a.prototype.gV.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a_:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gV:function(a){return H.bx(this)},
i:function(a){return"Instance of '"+H.b8(this)+"'"},
toString:function(){return this.i(this)}},
ar:{"^":"a;"},
i:{"^":"a;",$iseb:1},
"+String":0,
bB:{"^":"a;aA:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
er:function(a,b,c){var z=J.b0(b)
if(!z.A())return a
if(c.length===0){do a+=H.k(z.gJ(z))
while(z.A())}else{a+=H.k(z.gJ(z))
for(;z.A();)a=a+c+H.k(z.gJ(z))}return a}}}}],["","",,W,{"^":"",
dr:function(a){var z=document.createElement("a")
return z},
dB:function(a,b){var z=document.createElement("canvas")
return z},
h8:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).ab(z,a,b,c)
y.toString
z=W.C
z=new H.d6(new W.ak(y),H.l(new W.h9(),{func:1,ret:P.N,args:[z]}),[z])
return H.j(z.gau(z),"$isT")},
ha:function(a){H.j(a,"$isa5")
return"wheel"},
bo:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fK(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ad(x)}return z},
cq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f5:function(a,b,c,d){var z,y
z=W.cq(W.cq(W.cq(W.cq(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fp:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.R
if(z===C.j)return a
return z.d3(a,b)},
ag:{"^":"T;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lM:{"^":"n;0n:length=","%":"AccessibleNodeList"},
lN:{"^":"ag;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lO:{"^":"ag;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
du:{"^":"ag;",$isdu:1,"%":"HTMLBaseElement"},
fQ:{"^":"n;","%":";Blob"},
c7:{"^":"ag;",$isc7:1,"%":"HTMLBodyElement"},
cF:{"^":"ag;",
cv:function(a,b,c){var z=a.getContext(b,P.lb(c,null))
return z},
$iscF:1,
"%":"HTMLCanvasElement"},
lU:{"^":"C;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lW:{"^":"h_;0n:length=","%":"CSSPerspective"},
bn:{"^":"n;",$isbn:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lX:{"^":"jI;0n:length=",
dV:function(a,b){var z=a.getPropertyValue(this.er(a,b))
return z==null?"":z},
er:function(a,b){var z,y
z=$.$get$dG()
y=z[b]
if(typeof y==="string")return y
y=this.fv(a,b)
z[b]=y
return y},
fv:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h4()+b
if(z in a)return z
return b},
gc1:function(a){return a.bottom},
gai:function(a){return a.height},
gaK:function(a){return a.left},
gb0:function(a){return a.right},
gb2:function(a){return a.top},
gak:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fZ:{"^":"a;",
gaK:function(a){return this.dV(a,"left")}},
dH:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
h_:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lY:{"^":"dH;0n:length=","%":"CSSTransformValue"},
lZ:{"^":"dH;0n:length=","%":"CSSUnparsedValue"},
m_:{"^":"n;0n:length=","%":"DataTransferItemList"},
b2:{"^":"ag;",$isb2:1,"%":"HTMLDivElement"},
m0:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
m1:{"^":"jK;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.aa,P.a_]]},
$asv:function(){return[[P.aa,P.a_]]},
$ise:1,
$ase:function(){return[[P.aa,P.a_]]},
$isc:1,
$asc:function(){return[[P.aa,P.a_]]},
$asA:function(){return[[P.aa,P.a_]]},
"%":"ClientRectList|DOMRectList"},
h5:{"^":"n;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gak(a))+" x "+H.k(this.gai(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bO(b,"$isaa",[P.a_],"$asaa")
if(!z)return!1
z=J.bi(b)
return a.left===z.gaK(b)&&a.top===z.gb2(b)&&this.gak(a)===z.gak(b)&&this.gai(a)===z.gai(b)},
gV:function(a){return W.f5(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF,this.gai(a)&0x1FFFFFFF)},
gc1:function(a){return a.bottom},
gai:function(a){return a.height},
gaK:function(a){return a.left},
gb0:function(a){return a.right},
gb2:function(a){return a.top},
gak:function(a){return a.width},
$isaa:1,
$asaa:function(){return[P.a_]},
"%":";DOMRectReadOnly"},
m2:{"^":"jM;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asv:function(){return[P.i]},
$ise:1,
$ase:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asA:function(){return[P.i]},
"%":"DOMStringList"},
m3:{"^":"n;0n:length=","%":"DOMTokenList"},
jH:{"^":"ci;cP:a<,b",
gn:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.j(z[b],"$isT")},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var z=this.hW(this)
return new J.at(z,z.length,0,[H.B(z,0)])},
$asv:function(){return[W.T]},
$ase:function(){return[W.T]},
$asc:function(){return[W.T]}},
T:{"^":"C;0hU:tagName=",
gh0:function(a){return new W.jN(a)},
gd4:function(a){return new W.jH(a,a.children)},
gd5:function(a){return P.ik(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a_)},
i:function(a){return a.localName},
ab:["bB",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dR
if(z==null){z=H.b([],[W.ay])
y=new W.e8(z)
C.a.h(z,W.f3(null))
C.a.h(z,W.fe())
$.dR=y
d=y}else d=z
z=$.dQ
if(z==null){z=new W.fk(d)
$.dQ=z
c=z}else{z.a=d
c=z}}if($.aD==null){z=document
y=z.implementation.createHTMLDocument("")
$.aD=y
$.cJ=y.createRange()
y=$.aD
y.toString
y=y.createElement("base")
H.j(y,"$isdu")
y.href=z.baseURI
$.aD.head.appendChild(y)}z=$.aD
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.j(y,"$isc7")}z=$.aD
if(!!this.$isc7)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aD.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.S(C.O,a.tagName)){$.cJ.selectNodeContents(x)
w=$.cJ.createContextualFragment(b)}else{x.innerHTML=b
w=$.aD.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aD.body
if(x==null?z!=null:x!==z)J.dq(x)
c.cw(w)
document.adoptNode(w)
return w},function(a,b,c){return this.ab(a,b,c,null)},"h8",null,null,"giD",5,5,null],
dZ:function(a,b,c,d){a.textContent=null
a.appendChild(this.ab(a,b,c,d))},
dY:function(a,b){return this.dZ(a,b,null,null)},
$isT:1,
"%":";Element"},
h9:{"^":"p:14;",
$1:function(a){return!!J.L(H.j(a,"$isC")).$isT}},
ab:{"^":"n;",$isab:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a5:{"^":"n;",
d0:["e0",function(a,b,c,d){H.l(c,{func:1,args:[W.ab]})
if(c!=null)this.eo(a,b,c,!1)}],
eo:function(a,b,c,d){return a.addEventListener(b,H.bg(H.l(c,{func:1,args:[W.ab]}),1),!1)},
$isa5:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fb|fc|ff|fg"},
bp:{"^":"fQ;",$isbp:1,"%":"File"},
m4:{"^":"jS;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bp]},
$asv:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asA:function(){return[W.bp]},
"%":"FileList"},
m5:{"^":"a5;0n:length=","%":"FileWriter"},
m6:{"^":"ag;0n:length=","%":"HTMLFormElement"},
br:{"^":"n;",$isbr:1,"%":"Gamepad"},
m7:{"^":"n;0n:length=","%":"History"},
m8:{"^":"k4;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.C]},
$asv:function(){return[W.C]},
$ise:1,
$ase:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asA:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bt:{"^":"d1;",$isbt:1,"%":"KeyboardEvent"},
mc:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
md:{"^":"n;0n:length=","%":"MediaList"},
me:{"^":"a5;",
d0:function(a,b,c,d){H.l(c,{func:1,args:[W.ab]})
if(b==="message")a.start()
this.e0(a,b,c,!1)},
"%":"MessagePort"},
mf:{"^":"ka;",
k:function(a,b){return P.aP(a.get(H.G(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gZ:function(a){var z=H.b([],[P.i])
this.K(a,new W.hV(z))
return z},
gn:function(a){return a.size},
$asa6:function(){return[P.i,null]},
$isa1:1,
$asa1:function(){return[P.i,null]},
"%":"MIDIInputMap"},
hV:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mg:{"^":"kb;",
k:function(a,b){return P.aP(a.get(H.G(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gZ:function(a){var z=H.b([],[P.i])
this.K(a,new W.hW(z))
return z},
gn:function(a){return a.size},
$asa6:function(){return[P.i,null]},
$isa1:1,
$asa1:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
hW:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bu:{"^":"n;",$isbu:1,"%":"MimeType"},
mh:{"^":"kd;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bu]},
$asv:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$isc:1,
$asc:function(){return[W.bu]},
$asA:function(){return[W.bu]},
"%":"MimeTypeArray"},
ap:{"^":"d1;",$isap:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ak:{"^":"ci;a",
gau:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.ep("No elements"))
if(y>1)throw H.d(P.ep("More than one element"))
return z.firstChild},
ag:function(a,b){var z,y,x,w
H.w(b,"$ise",[W.C],"$ase")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gU:function(a){var z=this.a.childNodes
return new W.dS(z,z.length,-1,[H.bP(C.R,z,"A",0)])},
gn:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asv:function(){return[W.C]},
$ase:function(){return[W.C]},
$asc:function(){return[W.C]}},
C:{"^":"a5;0cl:previousSibling=",
hK:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
i:function(a){var z=a.nodeValue
return z==null?this.e1(a):z},
$isC:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
mo:{"^":"n;",
hH:[function(a){return a.previousNode()},"$0","gcl",1,0,16],
"%":"NodeIterator"},
i0:{"^":"kf;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.C]},
$asv:function(){return[W.C]},
$ise:1,
$ase:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asA:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
bw:{"^":"n;0n:length=",$isbw:1,"%":"Plugin"},
ms:{"^":"kj;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bw]},
$asv:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$isc:1,
$asc:function(){return[W.bw]},
$asA:function(){return[W.bw]},
"%":"PluginArray"},
mu:{"^":"kp;",
k:function(a,b){return P.aP(a.get(H.G(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gZ:function(a){var z=H.b([],[P.i])
this.K(a,new W.iu(z))
return z},
gn:function(a){return a.size},
$asa6:function(){return[P.i,null]},
$isa1:1,
$asa1:function(){return[P.i,null]},
"%":"RTCStatsReport"},
iu:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mw:{"^":"ag;0n:length=","%":"HTMLSelectElement"},
by:{"^":"a5;",$isby:1,"%":"SourceBuffer"},
mx:{"^":"fc;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.by]},
$asv:function(){return[W.by]},
$ise:1,
$ase:function(){return[W.by]},
$isc:1,
$asc:function(){return[W.by]},
$asA:function(){return[W.by]},
"%":"SourceBufferList"},
bz:{"^":"n;",$isbz:1,"%":"SpeechGrammar"},
my:{"^":"kv;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bz]},
$asv:function(){return[W.bz]},
$ise:1,
$ase:function(){return[W.bz]},
$isc:1,
$asc:function(){return[W.bz]},
$asA:function(){return[W.bz]},
"%":"SpeechGrammarList"},
bA:{"^":"n;0n:length=",$isbA:1,"%":"SpeechRecognitionResult"},
mA:{"^":"ky;",
k:function(a,b){return a.getItem(H.G(b))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gZ:function(a){var z=H.b([],[P.i])
this.K(a,new W.iL(z))
return z},
gn:function(a){return a.length},
$asa6:function(){return[P.i,P.i]},
$isa1:1,
$asa1:function(){return[P.i,P.i]},
"%":"Storage"},
iL:{"^":"p:30;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bC:{"^":"n;",$isbC:1,"%":"CSSStyleSheet|StyleSheet"},
iQ:{"^":"ag;",
ab:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
z=W.h8("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ak(y).ag(0,new W.ak(z))
return y},
"%":"HTMLTableElement"},
mC:{"^":"ag;",
ab:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.ab(z.createElement("table"),b,c,d)
z.toString
z=new W.ak(z)
x=z.gau(z)
x.toString
z=new W.ak(x)
w=z.gau(z)
y.toString
w.toString
new W.ak(y).ag(0,new W.ak(w))
return y},
"%":"HTMLTableRowElement"},
mD:{"^":"ag;",
ab:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.ab(z.createElement("table"),b,c,d)
z.toString
z=new W.ak(z)
x=z.gau(z)
y.toString
x.toString
new W.ak(y).ag(0,new W.ak(x))
return y},
"%":"HTMLTableSectionElement"},
eu:{"^":"ag;",$iseu:1,"%":"HTMLTemplateElement"},
bD:{"^":"a5;",$isbD:1,"%":"TextTrack"},
bE:{"^":"a5;",$isbE:1,"%":"TextTrackCue|VTTCue"},
mF:{"^":"kF;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bE]},
$asv:function(){return[W.bE]},
$ise:1,
$ase:function(){return[W.bE]},
$isc:1,
$asc:function(){return[W.bE]},
$asA:function(){return[W.bE]},
"%":"TextTrackCueList"},
mG:{"^":"fg;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bD]},
$asv:function(){return[W.bD]},
$ise:1,
$ase:function(){return[W.bD]},
$isc:1,
$asc:function(){return[W.bD]},
$asA:function(){return[W.bD]},
"%":"TextTrackList"},
mH:{"^":"n;0n:length=","%":"TimeRanges"},
bF:{"^":"n;",$isbF:1,"%":"Touch"},
ba:{"^":"d1;",$isba:1,"%":"TouchEvent"},
mI:{"^":"kL;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bF]},
$asv:function(){return[W.bF]},
$ise:1,
$ase:function(){return[W.bF]},
$isc:1,
$asc:function(){return[W.bF]},
$asA:function(){return[W.bF]},
"%":"TouchList"},
mJ:{"^":"n;0n:length=","%":"TrackDefaultList"},
mL:{"^":"n;",
hH:[function(a){return a.previousNode()},"$0","gcl",1,0,16],
"%":"TreeWalker"},
d1:{"^":"ab;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mN:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
mO:{"^":"a5;0n:length=","%":"VideoTrackList"},
bI:{"^":"ap;",
ghb:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.as("deltaY is not supported"))},
gha:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.as("deltaX is not supported"))},
$isbI:1,
"%":"WheelEvent"},
jz:{"^":"a5;",
fg:function(a,b){return a.requestAnimationFrame(H.bg(H.l(b,{func:1,ret:-1,args:[P.a_]}),1))},
eB:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
f0:{"^":"C;",$isf0:1,"%":"Attr"},
mT:{"^":"kS;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bn]},
$asv:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asA:function(){return[W.bn]},
"%":"CSSRuleList"},
mU:{"^":"h5;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bO(b,"$isaa",[P.a_],"$asaa")
if(!z)return!1
z=J.bi(b)
return a.left===z.gaK(b)&&a.top===z.gb2(b)&&a.width===z.gak(b)&&a.height===z.gai(b)},
gV:function(a){return W.f5(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gai:function(a){return a.height},
gak:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mW:{"^":"kU;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.br]},
$asv:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$asA:function(){return[W.br]},
"%":"GamepadList"},
mZ:{"^":"kW;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.C]},
$asv:function(){return[W.C]},
$ise:1,
$ase:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asA:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n_:{"^":"kY;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bA]},
$asv:function(){return[W.bA]},
$ise:1,
$ase:function(){return[W.bA]},
$isc:1,
$asc:function(){return[W.bA]},
$asA:function(){return[W.bA]},
"%":"SpeechRecognitionResultList"},
n0:{"^":"l_;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bC]},
$asv:function(){return[W.bC]},
$ise:1,
$ase:function(){return[W.bC]},
$isc:1,
$asc:function(){return[W.bC]},
$asA:function(){return[W.bC]},
"%":"StyleSheetList"},
jF:{"^":"e4;cP:a<",
K:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=this.gZ(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gZ:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.i])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=H.j(z[w],"$isf0")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asa6:function(){return[P.i,P.i]},
$asa1:function(){return[P.i,P.i]}},
jN:{"^":"jF;a",
k:function(a,b){return this.a.getAttribute(H.G(b))},
gn:function(a){return this.gZ(this).length}},
jO:{"^":"cX;a,b,c,$ti",
hq:function(a,b,c,d){var z=H.B(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
mV:{"^":"jO;a,b,c,$ti"},
jP:{"^":"eq;a,b,c,d,e,$ti",
fB:function(){var z=this.d
if(z!=null&&this.a<=0)J.fG(this.b,this.c,z,!1)},
q:{
a2:function(a,b,c,d,e){var z=c==null?null:W.fp(new W.jQ(c),W.ab)
z=new W.jP(0,a,b,z,!1,[e])
z.fB()
return z}}},
jQ:{"^":"p:7;a",
$1:function(a){return this.a.$1(H.j(a,"$isab"))}},
c1:{"^":"a;a",
eh:function(a){var z,y
z=$.$get$d8()
if(z.a===0){for(y=0;y<262;++y)z.T(0,C.N[y],W.ll())
for(y=0;y<12;++y)z.T(0,C.n[y],W.lm())}},
aD:function(a){return $.$get$f4().S(0,W.bo(a))},
ap:function(a,b,c){var z,y,x
z=W.bo(a)
y=$.$get$d8()
x=y.k(0,H.k(z)+"::"+b)
if(x==null)x=y.k(0,"*::"+b)
if(x==null)return!1
return H.dd(x.$4(a,b,c,this))},
$isay:1,
q:{
f3:function(a){var z,y
z=W.dr(null)
y=window.location
z=new W.c1(new W.kq(z,y))
z.eh(a)
return z},
mX:[function(a,b,c,d){H.j(a,"$isT")
H.G(b)
H.G(c)
H.j(d,"$isc1")
return!0},"$4","ll",16,0,15],
mY:[function(a,b,c,d){var z,y,x,w,v
H.j(a,"$isT")
H.G(b)
H.G(c)
z=H.j(d,"$isc1").a
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
return z},"$4","lm",16,0,15]}},
A:{"^":"a;$ti",
gU:function(a){return new W.dS(a,this.gn(a),-1,[H.bP(this,a,"A",0)])}},
e8:{"^":"a;a",
aD:function(a){return C.a.d2(this.a,new W.i2(a))},
ap:function(a,b,c){return C.a.d2(this.a,new W.i1(a,b,c))},
$isay:1},
i2:{"^":"p:19;a",
$1:function(a){return H.j(a,"$isay").aD(this.a)}},
i1:{"^":"p:19;a,b,c",
$1:function(a){return H.j(a,"$isay").ap(this.a,this.b,this.c)}},
kr:{"^":"a;",
ek:function(a,b,c,d){var z,y,x
this.a.ag(0,c)
z=b.cq(0,new W.ks())
y=b.cq(0,new W.kt())
this.b.ag(0,z)
x=this.c
x.ag(0,C.P)
x.ag(0,y)},
aD:function(a){return this.a.S(0,W.bo(a))},
ap:["e6",function(a,b,c){var z,y
z=W.bo(a)
y=this.c
if(y.S(0,H.k(z)+"::"+b))return this.d.fZ(c)
else if(y.S(0,"*::"+b))return this.d.fZ(c)
else{y=this.b
if(y.S(0,H.k(z)+"::"+b))return!0
else if(y.S(0,"*::"+b))return!0
else if(y.S(0,H.k(z)+"::*"))return!0
else if(y.S(0,"*::*"))return!0}return!1}],
$isay:1},
ks:{"^":"p:20;",
$1:function(a){return!C.a.S(C.n,H.G(a))}},
kt:{"^":"p:20;",
$1:function(a){return C.a.S(C.n,H.G(a))}},
kC:{"^":"kr;e,a,b,c,d",
ap:function(a,b,c){if(this.e6(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.S(0,b)
return!1},
q:{
fe:function(){var z,y,x,w,v
z=P.i
y=P.e2(C.m,z)
x=H.B(C.m,0)
w=H.l(new W.kD(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.kC(y,P.bX(null,null,null,z),P.bX(null,null,null,z),P.bX(null,null,null,z),null)
y.ek(null,new H.hL(C.m,w,[x,z]),v,null)
return y}}},
kD:{"^":"p:34;",
$1:function(a){return"TEMPLATE::"+H.k(H.G(a))}},
kB:{"^":"a;",
aD:function(a){var z=J.L(a)
if(!!z.$isek)return!1
z=!!z.$iscZ
if(z&&W.bo(a)==="foreignObject")return!1
if(z)return!0
return!1},
ap:function(a,b,c){if(b==="is"||C.i.bz(b,"on"))return!1
return this.aD(a)},
$isay:1},
dS:{"^":"a;a,b,c,0d,$ti",
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fF(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gJ:function(a){return this.d}},
ay:{"^":"a;"},
kq:{"^":"a;a,b",$ismM:1},
fk:{"^":"a;a",
cw:function(a){new W.kP(this).$2(a,null)},
aS:function(a,b){if(b==null)J.dq(a)
else b.removeChild(a)},
fl:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fI(a)
x=y.gcP().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ad(t)}v="element unprintable"
try{v=J.ae(a)}catch(t){H.ad(t)}try{u=W.bo(a)
this.fk(H.j(a,"$isT"),b,z,v,u,H.j(y,"$isa1"),H.G(x))}catch(t){if(H.ad(t) instanceof P.aB)throw t
else{this.aS(a,b)
window
s="Removing corrupted element "+H.k(v)
if(typeof console!="undefined")window.console.warn(s)}}},
fk:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aS(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aD(a)){this.aS(a,b)
window
z="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.ap(a,"is",g)){this.aS(a,b)
window
z="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gZ(f)
y=H.b(z.slice(0),[H.B(z,0)])
for(x=f.gZ(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.h(y,x)
w=y[x]
if(!this.a.ap(a,J.fM(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.k(e)+" "+w+'="'+H.k(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$iseu)this.cw(a.content)},
$ismp:1},
kP:{"^":"p:33;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.fl(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aS(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fJ(z)}catch(w){H.ad(w)
v=H.j(z,"$isC")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.j(y,"$isC")}}},
jI:{"^":"n+fZ;"},
jJ:{"^":"n+v;"},
jK:{"^":"jJ+A;"},
jL:{"^":"n+v;"},
jM:{"^":"jL+A;"},
jR:{"^":"n+v;"},
jS:{"^":"jR+A;"},
k3:{"^":"n+v;"},
k4:{"^":"k3+A;"},
ka:{"^":"n+a6;"},
kb:{"^":"n+a6;"},
kc:{"^":"n+v;"},
kd:{"^":"kc+A;"},
ke:{"^":"n+v;"},
kf:{"^":"ke+A;"},
ki:{"^":"n+v;"},
kj:{"^":"ki+A;"},
kp:{"^":"n+a6;"},
fb:{"^":"a5+v;"},
fc:{"^":"fb+A;"},
ku:{"^":"n+v;"},
kv:{"^":"ku+A;"},
ky:{"^":"n+a6;"},
kE:{"^":"n+v;"},
kF:{"^":"kE+A;"},
ff:{"^":"a5+v;"},
fg:{"^":"ff+A;"},
kK:{"^":"n+v;"},
kL:{"^":"kK+A;"},
kR:{"^":"n+v;"},
kS:{"^":"kR+A;"},
kT:{"^":"n+v;"},
kU:{"^":"kT+A;"},
kV:{"^":"n+v;"},
kW:{"^":"kV+A;"},
kX:{"^":"n+v;"},
kY:{"^":"kX+A;"},
kZ:{"^":"n+v;"},
l_:{"^":"kZ+A;"}}],["","",,P,{"^":"",
aP:function(a){var z,y,x,w,v
if(a==null)return
z=P.e1(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.G(y[w])
z.T(0,v,a[v])}return z},
lb:function(a,b){var z={}
a.K(0,new P.lc(z))
return z},
dN:function(){var z=$.dM
if(z==null){z=J.cA(window.navigator.userAgent,"Opera",0)
$.dM=z}return z},
h4:function(){var z,y
z=$.dJ
if(z!=null)return z
y=$.dK
if(y==null){y=J.cA(window.navigator.userAgent,"Firefox",0)
$.dK=y}if(y)z="-moz-"
else{y=$.dL
if(y==null){y=!P.dN()&&J.cA(window.navigator.userAgent,"Trident/",0)
$.dL=y}if(y)z="-ms-"
else z=P.dN()?"-o-":"-webkit-"}$.dJ=z
return z},
lc:{"^":"p:12;a",
$2:function(a,b){this.a[a]=b}},
hh:{"^":"ci;a,b",
gbM:function(){var z,y,x
z=this.b
y=H.al(z,"v",0)
x=W.T
return new H.hJ(new H.d6(z,H.l(new P.hi(),{func:1,ret:P.N,args:[y]}),[y]),H.l(new P.hj(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.b1(this.gbM().a)},
k:function(a,b){var z=this.gbM()
return z.b.$1(J.cB(z.a,b))},
gU:function(a){var z=P.hG(this.gbM(),!1,W.T)
return new J.at(z,z.length,0,[H.B(z,0)])},
$asv:function(){return[W.T]},
$ase:function(){return[W.T]},
$asc:function(){return[W.T]}},
hi:{"^":"p:14;",
$1:function(a){return!!J.L(H.j(a,"$isC")).$isT}},
hj:{"^":"p:32;",
$1:function(a){return H.f(H.j(a,"$isC"),"$isT")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k5:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kk:{"^":"a;$ti",
gb0:function(a){var z=this.a
if(typeof z!=="number")return z.I()
return H.E(z+this.c,H.B(this,0))},
gc1:function(a){var z=this.b
if(typeof z!=="number")return z.I()
return H.E(z+this.d,H.B(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bO(b,"$isaa",[P.a_],"$asaa")
if(!z)return!1
z=this.a
y=J.bi(b)
x=y.gaK(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb2(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.I()
w=H.B(this,0)
if(H.E(z+this.c,w)===y.gb0(b)){if(typeof x!=="number")return x.I()
z=H.E(x+this.d,w)===y.gc1(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.b_(z)
x=this.b
w=J.b_(x)
if(typeof z!=="number")return z.I()
v=H.B(this,0)
z=H.E(z+this.c,v)
if(typeof x!=="number")return x.I()
v=H.E(x+this.d,v)
return P.k5(P.cr(P.cr(P.cr(P.cr(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aa:{"^":"kk;aK:a>,b2:b>,ak:c>,ai:d>,$ti",q:{
ik:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a6()
if(c<0)z=-c*0
else z=c
H.E(z,e)
if(typeof d!=="number")return d.a6()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.E(y,e),[e])}}}}],["","",,P,{"^":"",bW:{"^":"n;",$isbW:1,"%":"SVGLength"},mb:{"^":"k7;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[P.bW]},
$ise:1,
$ase:function(){return[P.bW]},
$isc:1,
$asc:function(){return[P.bW]},
$asA:function(){return[P.bW]},
"%":"SVGLengthList"},bZ:{"^":"n;",$isbZ:1,"%":"SVGNumber"},mq:{"^":"kh;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[P.bZ]},
$ise:1,
$ase:function(){return[P.bZ]},
$isc:1,
$asc:function(){return[P.bZ]},
$asA:function(){return[P.bZ]},
"%":"SVGNumberList"},mt:{"^":"n;0n:length=","%":"SVGPointList"},ek:{"^":"cZ;",$isek:1,"%":"SVGScriptElement"},mB:{"^":"kA;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[P.i]},
$ise:1,
$ase:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asA:function(){return[P.i]},
"%":"SVGStringList"},cZ:{"^":"T;",
gd4:function(a){return new P.hh(a,new W.ak(a))},
ab:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.ay])
C.a.h(z,W.f3(null))
C.a.h(z,W.fe())
C.a.h(z,new W.kB())
c=new W.fk(new W.e8(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).h8(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ak(w)
u=z.gau(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscZ:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},c_:{"^":"n;",$isc_:1,"%":"SVGTransform"},mK:{"^":"kN;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[P.c_]},
$ise:1,
$ase:function(){return[P.c_]},
$isc:1,
$asc:function(){return[P.c_]},
$asA:function(){return[P.c_]},
"%":"SVGTransformList"},k6:{"^":"n+v;"},k7:{"^":"k6+A;"},kg:{"^":"n+v;"},kh:{"^":"kg+A;"},kz:{"^":"n+v;"},kA:{"^":"kz+A;"},kM:{"^":"n+v;"},kN:{"^":"kM+A;"}}],["","",,P,{"^":"",lP:{"^":"n;0n:length=","%":"AudioBuffer"},lQ:{"^":"jG;",
k:function(a,b){return P.aP(a.get(H.G(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gZ:function(a){var z=H.b([],[P.i])
this.K(a,new P.fO(z))
return z},
gn:function(a){return a.size},
$asa6:function(){return[P.i,null]},
$isa1:1,
$asa1:function(){return[P.i,null]},
"%":"AudioParamMap"},fO:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},lR:{"^":"a5;0n:length=","%":"AudioTrackList"},fP:{"^":"a5;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mr:{"^":"fP;0n:length=","%":"OfflineAudioContext"},jG:{"^":"n+a6;"}}],["","",,P,{"^":"",ej:{"^":"n;",$isej:1,"%":"WebGLRenderingContext"},ja:{"^":"n;",$isja:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mz:{"^":"kx;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.O(b,a,null,null,null))
return P.aP(a.item(b))},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[[P.a1,,,]]},
$ise:1,
$ase:function(){return[[P.a1,,,]]},
$isc:1,
$asc:function(){return[[P.a1,,,]]},
$asA:function(){return[[P.a1,,,]]},
"%":"SQLResultSetRowList"},kw:{"^":"n+v;"},kx:{"^":"kw+A;"}}],["","",,O,{"^":"",aC:{"^":"a;0a,0b,0c,0d,$ti",
bD:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cz:function(a,b,c){var z=H.al(this,"aC",0)
H.l(b,{func:1,ret:P.N,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.D,[P.e,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
b5:function(a,b){return this.cz(a,null,b)},
f5:function(a){var z
H.w(a,"$ise",[H.al(this,"aC",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ed:function(a,b){var z
H.w(b,"$ise",[H.al(this,"aC",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gU:function(a){var z=this.a
return new J.at(z,z.length,0,[H.B(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.al(this,"aC",0)
H.E(b,z)
z=[z]
if(this.f5(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ed(x,H.b([b],z))}},
$ise:1,
q:{
cH:function(a){var z=new O.aC([a])
z.bD(a)
return z}}},cS:{"^":"a;0a,0b",
gn:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.J()
this.b=z}return z},
ee:function(a){var z=this.b
if(!(z==null))z.B(a)},
av:function(){return this.ee(null)},
gW:function(a){var z=this.a
if(z.length>0)return C.a.gbv(z)
else return V.bY()},
dK:function(a){var z=this.a
if(a==null)C.a.h(z,V.bY())
else C.a.h(z,a)
this.av()},
ck:function(){var z=this.a
if(z.length>0){z.pop()
this.av()}}}}],["","",,E,{"^":"",cC:{"^":"a;"},aS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0X:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scA:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gv().P(0,this.gdH())
y=this.c
if(y!=null)y.gv().h(0,this.gdH())
x=new D.Q("shape",z,this.c,this,[F.em])
x.b=!0
this.aM(x)}},
aj:function(a,b){var z
for(z=this.y.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.A();)z.d.aj(0,b)},
aN:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gW(z))
z.av()
a.dL(this.f)
z=a.dy
y=(z&&C.a).gbv(z)
if(y!=null&&this.d!=null)y.hN(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.A();)z.d.aN(a)
a.dJ()
a.dx.ck()},
gv:function(){var z=this.z
if(z==null){z=D.J()
this.z=z}return z},
aM:function(a){var z=this.z
if(!(z==null))z.B(a)},
a1:function(){return this.aM(null)},
hy:[function(a){H.j(a,"$isy")
this.e=null
this.aM(a)},function(){return this.hy(null)},"iJ","$1","$0","gdH",0,2,1],
hw:[function(a){this.aM(H.j(a,"$isy"))},function(){return this.hw(null)},"iH","$1","$0","gdG",0,2,1],
iG:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$ise",[E.aS],"$ase")
for(z=b.length,y=this.gdG(),x={func:1,ret:-1,args:[D.y]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gX()==null){t=new D.b4()
t.d=0
u.sX(t)}t=u.gX()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a1()},"$2","ghv",8,0,8],
iI:[function(a,b){var z,y,x,w,v
H.w(b,"$ise",[E.aS],"$ase")
for(z=b.length,y=this.gdG(),x=0;x<b.length;b.length===z||(0,H.z)(b),++x){w=b[x]
if(w!=null){if(w.gX()==null){v=new D.b4()
v.d=0
w.sX(v)}w.gX().P(0,y)}}this.a1()},"$2","ghx",8,0,8],
$isaF:1},ip:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e9:function(a,b){var z,y
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
y=[V.av]
z.a=H.b([],y)
z.gv().h(0,new E.ir(this))
this.cy=z
z=new O.cS()
z.a=H.b([],y)
z.gv().h(0,new E.is(this))
this.db=z
z=new O.cS()
z.a=H.b([],y)
z.gv().h(0,new E.it(this))
this.dx=z
z=H.b([],[O.d_])
this.dy=z
C.a.h(z,null)
this.fr=new H.b6(0,0,[P.i,A.el])},
ghI:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gW(z)
y=this.db
y=z.j(0,y.gW(y))
this.z=y
z=y}return z},
dL:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbv(z):a;(z&&C.a).h(z,y)},
dJ:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
iq:function(a,b){var z=new E.ip(a,b)
z.e9(a,b)
return z}}},ir:{"^":"p:9;a",
$1:function(a){var z
H.j(a,"$isy")
z=this.a
z.z=null
z.ch=null}},is:{"^":"p:9;a",
$1:function(a){var z
H.j(a,"$isy")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},it:{"^":"p:9;a",
$1:function(a){var z
H.j(a,"$isy")
z=this.a
z.ch=null
z.cx=null}},iV:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0X:x@,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.x
if(z==null){z=D.J()
this.x=z}return z},
eg:[function(a){var z
H.j(a,"$isy")
z=this.x
if(!(z==null))z.B(a)
this.hP()},function(){return this.eg(null)},"ef","$1","$0","gcD",0,2,1],
ghi:function(){var z,y,x
z=Date.now()
y=C.h.Y(P.dO(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.an(z,!1)
return x/y},
cU:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.o(z)
x=C.c.dA(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.c.dA(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.ex(C.l,this.ghO())},
hP:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.iX(this),{func:1,ret:-1,args:[P.a_]})
C.y.eB(z)
C.y.fg(z,W.fp(y,P.a_))}},"$0","ghO",0,0,3],
hM:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cU()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.dO(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.av()
w=x.db
C.a.sn(w.a,0)
w.av()
w=x.dx
C.a.sn(w.a,0)
w.av()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aN(this.e)}x=this.z
if(!(x==null))x.B(null)}catch(v){z=H.ad(v)
y=H.bj(v)
P.dm("Error: "+H.k(z))
P.dm("Stack: "+H.k(y))
throw H.d(z)}},
q:{
iW:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$iscF)return E.ew(a,!0,!0,!0,!1)
y=W.dB(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd4(a).h(0,y)
w=E.ew(y,!0,!0,!0,!1)
w.a=a
return w},
ew:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iV()
y=P.hE(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.k.cv(a,"webgl",y)
x=H.j(x==null?C.k.cv(a,"experimental-webgl",y):x,"$isej")
if(x==null)H.u(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iq(x,a)
w=new T.iR(x)
w.b=H.a3(x.getParameter(3379))
w.c=H.a3(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jg(a)
v=new X.hz()
v.c=new X.ax(!1,!1,!1)
v.d=P.bX(null,null,null,P.D)
w.b=v
v=new X.hX(w)
v.f=0
v.r=new V.W(0,0)
v.x=new V.W(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hH(w)
v.r=0
v.x=new V.W(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.j_(w)
v.e=0
v.f=new V.W(0,0)
v.r=new V.W(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.eq,P.a]])
w.z=v
u=document
t=W.ap
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.l(w.geT(),s),!1,t))
v=w.z
r=W.ab
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.l(w.geW(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.l(w.geP(),q),!1,r))
v=w.z
p=W.bt
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.l(w.geY(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.l(w.geX(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.l(w.gf0(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.l(w.gf2(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.l(w.gf1(),s),!1,t))
p=w.z
o=W.bI;(p&&C.a).h(p,W.a2(a,H.G(W.ha(a)),H.l(w.gf3(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.l(w.geU(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.l(w.geV(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.l(w.gf4(),q),!1,r))
r=w.z
q=W.ba
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.l(w.gfb(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.l(w.gf9(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.l(w.gfa(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.an(Date.now(),!1)
z.cy=0
z.cU()
return z}}},iX:{"^":"p:28;a",
$1:function(a){var z
H.lA(a)
z=this.a
if(z.ch){z.ch=!1
z.hM()}}}}],["","",,Z,{"^":"",eZ:{"^":"a;a,b",q:{
d5:function(a,b,c){var z
H.w(c,"$isc",[P.D],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bK(c)),35044)
a.bindBuffer(b,null)
return new Z.eZ(b,z)}}},dx:{"^":"cC;a,b,c,d,e",
bd:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ad(y)
x=P.r('Failed to bind buffer attribute "'+J.ae(this.a)+'": '+H.k(z))
throw H.d(x)}},
i:function(a){return"["+J.ae(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},jx:{"^":"a;a",$islS:1},dy:{"^":"a;a,0b,c,d",
aJ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bd:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bd(a)},
dR:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aN:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ae(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(y,", ")+"\nAttrs:   "+C.a.m(u,", ")},
$ismE:1},cf:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b8(this.c)+"'")+"]"}},bb:{"^":"a;a",
gcB:function(a){var z,y
z=this.a
y=(z&$.$get$aL().a)!==0?3:0
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$aM().a)!==0)y+=2
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$bG().a)!==0)y+=3
if((z&$.$get$bH().a)!==0)y+=4
if((z&$.$get$bc().a)!==0)++y
return(z&$.$get$aI().a)!==0?y+4:y},
h_:function(a){var z,y,x
z=$.$get$aL()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bc()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eY()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bb))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.i])
y=this.a
if((y&$.$get$aL().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aK().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aN().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bG().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bH().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bc().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.m(z,"|")},
q:{
aj:function(a){return new Z.bb(a)}}}}],["","",,D,{"^":"",dC:{"^":"a;"},b4:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.y]}
H.l(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
P:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.y]})
z=this.a
z=z==null?null:C.a.S(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).P(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.S(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).P(z,b)||y}return y},
B:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.y(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.K(y,new D.he(z))
y=this.b
if(!(y==null))C.a.K(y,new D.hf(z))
z=this.b
if(!(z==null))C.a.sn(z,0)
return!0},
hQ:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.B(y)}}},
at:function(a){return this.hQ(a,!0,!1)},
q:{
J:function(){var z=new D.b4()
z.d=0
return z}}},he:{"^":"p:26;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},hf:{"^":"p:26;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},y:{"^":"a;a,0b"},cg:{"^":"y;c,d,a,0b,$ti"},ch:{"^":"y;c,d,a,0b,$ti"},Q:{"^":"y;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dz:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dz))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
q:{"^":"lT<"}},dX:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dX))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},dY:{"^":"y;c,a,0b"},hz:{"^":"a;0a,0b,0c,0d",
hE:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dY(a,this)
y.b=!0
return z.B(y)},
hA:function(a){var z,y
this.c=a.b
this.d.P(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dY(a,this)
y.b=!0
return z.B(y)}},e3:{"^":"cl;x,y,c,d,e,a,0b"},hH:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
an:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.W(y.a+x*w,y.b+v*u)
u=this.a.gaF()
s=new X.bv(a,new V.W(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cj:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.B(this.an(a,b))
return!0},
aZ:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dX()
if(typeof z!=="number")return z.dS()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.an(a,b))
return!0},
aY:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.an(a,b))
return!0},
hF:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaF()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.cT(new V.U(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.B(w)
return!0},
f_:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.e3(c,a,this.a.gaF(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=new V.W(0,0)}},ax:{"^":"a;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ax))return!1
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
return z+(this.c?"Shift+":"")}},bv:{"^":"cl;x,y,z,Q,ch,c,d,e,a,0b"},hX:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bK:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaF()
x=new X.bv(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cj:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.bK(a,b,!0))
return!0},
aZ:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dX()
if(typeof z!=="number")return z.dS()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.bK(a,b,!0))
return!0},
aY:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.bK(a,b,!1))
return!0},
hG:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaF()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.cT(new V.U(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.B(x)
return!0},
gd9:function(){var z=this.b
if(z==null){z=D.J()
this.b=z}return z},
gby:function(){var z=this.c
if(z==null){z=D.J()
this.c=z}return z},
gdE:function(){var z=this.d
if(z==null){z=D.J()
this.d=z}return z}},cT:{"^":"cl;x,c,d,e,a,0b"},cl:{"^":"y;"},eB:{"^":"cl;x,y,z,Q,ch,c,d,e,a,0b"},j_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
an:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.W],"$asc")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:new V.W(0,0)
x=this.a.gaF()
w=new X.eB(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hD:function(a){var z
H.w(a,"$isc",[V.W],"$asc")
z=this.b
if(z==null)return!1
z.B(this.an(a,!0))
return!0},
hB:function(a){var z
H.w(a,"$isc",[V.W],"$asc")
z=this.c
if(z==null)return!1
z.B(this.an(a,!0))
return!0},
hC:function(a){var z
H.w(a,"$isc",[V.W],"$asc")
z=this.d
if(z==null)return!1
z.B(this.an(a,!1))
return!0}},jg:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaF:function(){var z=this.a
return V.ei(0,0,(z&&C.k).gd5(z).c,C.k.gd5(z).d)},
cN:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dX(z,new X.ax(y,a.altKey,a.shiftKey))},
aC:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ax(y,a.altKey,a.shiftKey)},
bX:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ax(y,a.altKey,a.shiftKey)},
ao:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=z.top
if(typeof x!=="number")return x.F()
return new V.W(y-w,x-v)},
aR:function(a){return new V.U(a.movementX,a.movementY)},
bT:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.W])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.c.a4(u.pageX)
C.c.a4(u.pageY)
s=z.left
C.c.a4(u.pageX)
C.a.h(y,new V.W(t-s,C.c.a4(u.pageY)-z.top))}return y},
al:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dz(z,new X.ax(y,a.altKey,a.shiftKey))},
bN:function(a){var z,y,x,w,v,u
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
ii:[function(a){this.f=!0},"$1","geW",4,0,7],
i9:[function(a){this.f=!1},"$1","geP",4,0,7],
ie:[function(a){H.j(a,"$isap")
if(this.f&&this.bN(a))a.preventDefault()},"$1","geT",4,0,4],
ik:[function(a){var z
H.j(a,"$isbt")
if(!this.f)return
z=this.cN(a)
if(this.b.hE(z))a.preventDefault()},"$1","geY",4,0,25],
ij:[function(a){var z
H.j(a,"$isbt")
if(!this.f)return
z=this.cN(a)
if(this.b.hA(z))a.preventDefault()},"$1","geX",4,0,25],
im:[function(a){var z,y,x,w
H.j(a,"$isap")
z=this.a
z.focus()
this.f=!0
this.aC(a)
if(this.x){y=this.al(a)
x=this.aR(a)
if(this.d.cj(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.al(a)
w=this.ao(a)
if(this.c.cj(y,w))a.preventDefault()},"$1","gf0",4,0,4],
ip:[function(a){var z,y,x
H.j(a,"$isap")
this.aC(a)
z=this.al(a)
if(this.x){y=this.aR(a)
if(this.d.aZ(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aZ(z,x))a.preventDefault()},"$1","gf2",4,0,4],
ih:[function(a){var z,y,x
H.j(a,"$isap")
if(!this.bN(a)){this.aC(a)
z=this.al(a)
if(this.x){y=this.aR(a)
if(this.d.aZ(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aZ(z,x))a.preventDefault()}},"$1","geV",4,0,4],
io:[function(a){var z,y,x
H.j(a,"$isap")
this.aC(a)
z=this.al(a)
if(this.x){y=this.aR(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aY(z,x))a.preventDefault()},"$1","gf1",4,0,4],
ig:[function(a){var z,y,x
H.j(a,"$isap")
if(!this.bN(a)){this.aC(a)
z=this.al(a)
if(this.x){y=this.aR(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aY(z,x))a.preventDefault()}},"$1","geU",4,0,4],
iq:[function(a){var z,y
H.j(a,"$isbI")
this.aC(a)
z=new V.U((a&&C.x).gha(a),C.x.ghb(a)).u(0,180)
if(this.x){if(this.d.hF(z))a.preventDefault()
return}if(this.r)return
y=this.ao(a)
if(this.c.hG(z,y))a.preventDefault()},"$1","gf3",4,0,38],
ir:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.al(this.y)
v=this.ao(this.y)
this.d.f_(w,v,x)}},"$1","gf4",4,0,7],
ix:[function(a){var z
H.j(a,"$isba")
this.a.focus()
this.f=!0
this.bX(a)
z=this.bT(a)
if(this.e.hD(z))a.preventDefault()},"$1","gfb",4,0,10],
iv:[function(a){var z
H.j(a,"$isba")
this.bX(a)
z=this.bT(a)
if(this.e.hB(z))a.preventDefault()},"$1","gf9",4,0,10],
iw:[function(a){var z
H.j(a,"$isba")
this.bX(a)
z=this.bT(a)
if(this.e.hC(z))a.preventDefault()},"$1","gfa",4,0,10]}}],["","",,D,{"^":"",cb:{"^":"a;0a,0b,0c,0d",
gv:function(){var z=this.d
if(z==null){z=D.J()
this.d=z}return z},
aw:[function(a){var z
H.j(a,"$isy")
z=this.d
if(!(z==null))z.B(a)},function(){return this.aw(null)},"hZ","$1","$0","gej",0,2,1],
$isZ:1,
$isaF:1},Z:{"^":"a;",$isaF:1},hA:{"^":"aC;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gv:function(){var z=this.Q
if(z==null){z=D.J()
this.Q=z}return z},
aw:function(a){var z=this.Q
if(!(z==null))z.B(a)},
eZ:[function(a){var z
H.j(a,"$isy")
z=this.ch
if(!(z==null))z.B(a)},function(){return this.eZ(null)},"il","$1","$0","gcR",0,2,1],
is:[function(a){var z,y,x
H.w(a,"$ise",[D.Z],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.ei(x))return!1}return!0},"$1","gf6",4,0,31],
i6:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.Z
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcR(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.j(b[u],"$isZ")
if(t instanceof D.cb)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b4()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cg(a,b,this,[z])
z.b=!0
this.aw(z)},"$2","geM",8,0,23],
iu:[function(a,b){var z,y,x,w,v,u
z=D.Z
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcR(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=H.j(b[w],"$isZ")
if(v instanceof D.cb)C.a.P(this.e,v)
u=v.d
if(u==null){u=new D.b4()
u.d=0
v.d=u}u.P(0,x)}z=new D.ch(a,b,this,[z])
z.b=!0
this.aw(z)},"$2","gf8",8,0,23],
ei:function(a){var z=C.a.S(this.e,a)
return z},
$ase:function(){return[D.Z]},
$asaC:function(){return[D.Z]}},i9:{"^":"a;",$isZ:1,$isaF:1},iJ:{"^":"a;",$isZ:1,$isaF:1},iS:{"^":"a;",$isZ:1,$isaF:1},iT:{"^":"a;",$isZ:1,$isaF:1},iU:{"^":"a;",$isZ:1,$isaF:1}}],["","",,V,{"^":"",
lV:[function(a,b){if(typeof b!=="number")return b.F()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","hU",8,0,29],
lL:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.dW(a-b,z)
return(a<0?a+z:a)+b},
V:function(a,b,c){if(a==null)return C.i.ar("null",c)
return C.i.ar(C.c.dP($.m.$2(a,0)?0:a,b),c+b+1)},
bh:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.x],"$asc")
z=H.b([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.V(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.T(z,u,C.i.ar(z[u],x))}return z},
Y:{"^":"a;a,b,c",
j:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.Y(z,y,x)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}},
bQ:{"^":"a;a,b,c,d",
j:function(a,b){var z,y,x,w
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
return new V.bQ(z,y,x,w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bQ))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}},
ck:{"^":"a;a,b,c,d,e,f,r,x,y",
a5:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.x])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.j(a5,"$isck")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.c.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.c.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.c.j(t,s)
q=a5.b
p=C.c.j(z,q)
o=a5.e
n=C.c.j(w,o)
m=a5.x
l=C.c.j(t,m)
k=a5.c
z=C.c.j(z,k)
j=a5.f
w=C.c.j(w,j)
i=a5.y
t=C.c.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.c.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.c.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.c.j(d,s)
b=C.c.j(h,q)
a=C.c.j(f,o)
a0=C.c.j(d,m)
h=C.c.j(h,k)
f=C.c.j(f,j)
d=C.c.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.c.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.c.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.ck(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.c.j(a3,s),C.c.j(a1,q)+C.c.j(a2,o)+C.c.j(a3,m),C.c.j(a1,k)+C.c.j(a2,j)+C.c.j(a3,i))},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ck))return!1
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
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.x]
y=V.bh(H.b([this.a,this.d,this.r],z),3,0)
x=V.bh(H.b([this.b,this.e,this.x],z),3,0)
w=V.bh(H.b([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.h(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.h(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.h(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.h(y,1)
s=" "+y[1]+", "
if(1>=u)return H.h(x,1)
s=s+x[1]+", "
if(1>=t)return H.h(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.h(y,2)
z=" "+y[2]+", "
if(2>=u)return H.h(x,2)
z=z+x[2]+", "
if(2>=t)return H.h(w,2)
return s+(z+w[2]+"]")}},
av:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a5:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.x])
return z},
dC:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.bY()
a3=1/a2
a4=-w
a5=-i
return V.aw((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.j(a7,"$isav")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
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
if(typeof f!=="number")return f.j()
e=this.f
if(typeof e!=="number")return e.j()
d=this.r
if(typeof d!=="number")return d.j()
c=this.x
if(typeof c!=="number")return c.j()
b=this.y
if(typeof b!=="number")return b.j()
a=this.z
if(typeof a!=="number")return a.j()
a0=this.Q
if(typeof a0!=="number")return a0.j()
a1=this.ch
if(typeof a1!=="number")return a1.j()
a2=this.cx
if(typeof a2!=="number")return a2.j()
a3=this.cy
if(typeof a3!=="number")return a3.j()
a4=this.db
if(typeof a4!=="number")return a4.j()
a5=this.dx
if(typeof a5!=="number")return a5.j()
return V.aw(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cp:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
t=this.e
if(typeof t!=="number")return t.j()
s=this.f
if(typeof s!=="number")return s.j()
r=this.r
if(typeof r!=="number")return r.j()
q=this.y
if(typeof q!=="number")return q.j()
p=this.z
if(typeof p!=="number")return p.j()
o=this.Q
if(typeof o!=="number")return o.j()
return new V.M(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
t=this.d
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.a8(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
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
i:function(a){return this.N()},
dB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.x]
y=V.bh(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bh(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bh(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bh(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.h(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.h(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.h(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.h(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.h(y,1)
q=q+y[1]+", "
if(1>=t)return H.h(x,1)
q=q+x[1]+", "
if(1>=s)return H.h(w,1)
q=q+w[1]+", "
if(1>=r)return H.h(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.h(y,2)
u=u+y[2]+", "
if(2>=t)return H.h(x,2)
u=u+x[2]+", "
if(2>=s)return H.h(w,2)
u=u+w[2]+", "
if(2>=r)return H.h(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.h(y,3)
q=q+y[3]+", "
if(3>=t)return H.h(x,3)
q=q+x[3]+", "
if(3>=s)return H.h(w,3)
q=q+w[3]+", "
if(3>=r)return H.h(v,3)
return u+(q+v[3]+"]")},
N:function(){return this.dB("",3,0)},
C:function(a){return this.dB(a,3,0)},
q:{
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bY:function(){return V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
e7:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.D(c)))
y=b.aq(z)
x=y.u(0,Math.sqrt(y.D(y)))
w=z.aq(x)
v=new V.M(a.a,a.b,a.c)
return V.aw(x.a,w.a,z.a,x.L(0).D(v),x.b,w.b,z.b,w.L(0).D(v),x.c,w.c,z.c,z.L(0).D(v),0,0,0,1)}}},
W:{"^":"a;a,b",
F:function(a,b){return new V.W(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.W(this.a*b,this.b*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}},
a8:{"^":"a;a,b,c",
I:function(a,b){return new V.a8(this.a+b.a,this.b+b.b,this.c+b.c)},
F:function(a,b){return new V.a8(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.a8(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}},
eh:{"^":"a;a,b,c,d",
ga0:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eh))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"},
q:{
ei:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eh(a,b,c,d)}}},
U:{"^":"a;a,b",
ho:[function(a){return Math.sqrt(this.D(this))},"$0","gn",1,0,22],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.U(z*b,y*b)},
u:function(a,b){var z,y
if($.m.$2(b,0))return new V.U(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.U(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}},
M:{"^":"a;a,b,c",
ho:[function(a){return Math.sqrt(this.D(this))},"$0","gn",1,0,22],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aq:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.M(z*y-x*w,x*v-u*y,u*w-z*v)},
I:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.M(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.m.$2(b,0))return new V.M(0,0,0)
return new V.M(this.a/b,this.b/b,this.c/b)},
dD:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fX:{"^":"dC;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bE:function(a){var z=V.lL(a,this.c,this.b)
return z},
gv:function(){var z=this.y
if(z==null){z=D.J()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.B(a)},
scr:function(a,b){},
scf:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bE(z)}z=new D.Q("maximumLocation",y,this.b,this,[P.x])
z.b=!0
this.M(z)}},
sci:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bE(z)}z=new D.Q("minimumLocation",y,this.c,this,[P.x])
z.b=!0
this.M(z)}},
sa_:function(a,b){var z,y
b=this.bE(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.Q("location",y,b,this,[P.x])
z.b=!0
this.M(z)}},
scg:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.Q("maximumVelocity",y,a,this,[P.x])
z.b=!0
this.M(z)}},
sO:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.Q("velocity",x,a,this,[P.x])
z.b=!0
this.M(z)}},
sc6:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.Q("dampening",y,a,this,[P.x])
z.b=!0
this.M(z)}},
aj:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa_(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sO(y)}},
q:{
cI:function(){var z=new U.fX()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dE:{"^":"a7;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.J()
this.b=z}return z},
aO:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dE))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
q:{
dF:function(a){var z=new U.dE()
z.a=a
return z}}},dT:{"^":"aC;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.J()
this.e=z}return z},
M:[function(a){var z
H.j(a,"$isy")
z=this.e
if(!(z==null))z.B(a)},function(){return this.M(null)},"a7","$1","$0","gax",0,2,1],
i5:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.a7
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gax(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gv()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cg(a,b,this,[z])
z.b=!0
this.M(z)},"$2","geL",8,0,21],
it:[function(a,b){var z,y,x,w,v
z=U.a7
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gax(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=b[w]
if(v!=null)v.gv().P(0,x)}z=new D.ch(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gf7",8,0,21],
aO:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a6()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.at(z,z.length,0,[H.B(z,0)]),x=null;z.A();){y=z.d
if(y!=null){w=y.aO(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.bY():x
z=this.e
if(!(z==null))z.at(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dT))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.S(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ase:function(){return[U.a7]},
$asaC:function(){return[U.a7]},
$isa7:1},a7:{"^":"dC;"},jh:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.cy
if(z==null){z=D.J()
this.cy=z}return z},
M:[function(a){var z
H.j(a,"$isy")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.M(null)},"a7","$1","$0","gax",0,2,1],
aT:function(a){if(this.a!=null)return!1
this.a=a
a.c.gd9().h(0,this.gbO())
this.a.c.gdE().h(0,this.gbP())
this.a.c.gby().h(0,this.gbQ())
return!0},
eH:[function(a){H.j(a,"$isy")
if(!J.S(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbO",4,0,0],
eI:[function(a){var z,y,x,w,v,u,t
a=H.f(H.j(a,"$isy"),"$isbv")
if(!this.y)return
if(this.x){z=a.d.F(0,a.y)
z=new V.U(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.F(0,a.y)
z=new V.U(y.a,y.b).j(0,2).u(0,z.ga0())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sO(z*10*x)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=new V.U(x.a,x.b).j(0,2).u(0,z.ga0())
x=this.b
v=w.a
if(typeof v!=="number")return v.L()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
this.b.sO(0)
y=y.F(0,a.z)
this.Q=new V.U(y.a,y.b).j(0,2).u(0,z.ga0())}this.a7()},"$1","gbP",4,0,0],
eJ:[function(a){var z,y,x
H.j(a,"$isy")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sO(y*10*x)
this.a7()}},"$1","gbQ",4,0,0],
aO:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a6()
if(z<y){this.ch=y
x=b.y
this.b.aj(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aw(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa7:1},ji:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gv:function(){var z=this.fx
if(z==null){z=D.J()
this.fx=z}return z},
M:[function(a){var z
H.j(a,"$isy")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.M(null)},"a7","$1","$0","gax",0,2,1],
aT:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gd9().h(0,this.gbO())
this.a.c.gdE().h(0,this.gbP())
this.a.c.gby().h(0,this.gbQ())
z=this.a.d
y=z.f
if(y==null){y=D.J()
z.f=y
z=y}else z=y
z.h(0,this.geE())
z=this.a.d
y=z.d
if(y==null){y=D.J()
z.d=y
z=y}else z=y
z.h(0,this.geF())
z=this.a.e
y=z.b
if(y==null){y=D.J()
z.b=y
z=y}else z=y
z.h(0,this.gfA())
z=this.a.e
y=z.d
if(y==null){y=D.J()
z.d=y
z=y}else z=y
z.h(0,this.gfz())
z=this.a.e
y=z.c
if(y==null){y=D.J()
z.c=y
z=y}else z=y
z.h(0,this.gfw())
return!0},
af:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.L()
z=-z}if(this.r){if(typeof y!=="number")return y.L()
y=-y}return new V.U(z,y)},
eH:[function(a){a=H.f(H.j(a,"$isy"),"$isbv")
if(!J.S(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbO",4,0,0],
eI:[function(a){var z,y,x,w,v,u,t
a=H.f(H.j(a,"$isy"),"$isbv")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.U(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.af(new V.U(y.a,y.b).j(0,2).u(0,z.ga0()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sO(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sO(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.af(new V.U(x.a,x.b).j(0,2).u(0,z.ga0()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.F(0,a.z)
this.dx=this.af(new V.U(y.a,y.b).j(0,2).u(0,z.ga0()))}this.a7()},"$1","gbP",4,0,0],
eJ:[function(a){var z,y,x
H.j(a,"$isy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sO(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sO(-y*10*z)
this.a7()}},"$1","gbQ",4,0,0],
i2:[function(a){if(H.f(H.j(a,"$isy"),"$ise3").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geE",4,0,0],
i3:[function(a){var z,y,x,w,v,u,t
a=H.f(H.j(a,"$isy"),"$isbv")
if(!J.S(this.d,a.x.b))return
z=a.c
y=a.d
x=y.F(0,a.y)
w=this.af(new V.U(x.a,x.b).j(0,2).u(0,z.ga0()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.F(0,a.z)
this.dx=this.af(new V.U(y.a,y.b).j(0,2).u(0,z.ga0()))
this.a7()},"$1","geF",4,0,0],
iB:[function(a){H.j(a,"$isy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfA",4,0,0],
iA:[function(a){var z,y,x,w,v,u,t
a=H.f(H.j(a,"$isy"),"$iseB")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.U(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.af(new V.U(y.a,y.b).j(0,2).u(0,z.ga0()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sO(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sO(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.af(new V.U(x.a,x.b).j(0,2).u(0,z.ga0()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.F(0,a.z)
this.dx=this.af(new V.U(y.a,y.b).j(0,2).u(0,z.ga0()))}this.a7()},"$1","gfz",4,0,0],
iz:[function(a){var z,y,x
H.j(a,"$isy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sO(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sO(-y*10*z)
this.a7()}},"$1","gfw",4,0,0],
aO:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a6()
if(z<y){this.dy=y
x=b.y
this.c.aj(0,x)
this.b.aj(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aw(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.j(0,V.aw(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa7:1},jj:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gv:function(){var z=this.r
if(z==null){z=D.J()
this.r=z}return z},
M:function(a){var z=this.r
if(!(z==null))z.B(a)},
aT:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.J()
z.e=y
z=y}else z=y
y=this.geK()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.J()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
i4:[function(a){var z,y,x,w
H.j(a,"$isy")
if(!J.S(this.b,this.a.b.c))return
H.f(a,"$iscT")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.Q("zoom",z,w,this,[P.x])
z.b=!0
this.M(z)}},"$1","geK",4,0,0],
aO:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aw(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa7:1}}],["","",,M,{"^":"",hc:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ay:[function(a){var z
H.j(a,"$isy")
z=this.x
if(!(z==null))z.B(a)},function(){return this.ay(null)},"i_","$1","$0","gae",0,2,1],
ib:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aS
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gae(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gX()==null){s=new D.b4()
s.d=0
t.sX(s)}s=t.gX()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cg(a,b,this,[z])
z.b=!0
this.ay(z)},"$2","geR",8,0,8],
ic:[function(a,b){var z,y,x,w,v,u
z=E.aS
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gae(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=b[w]
if(v!=null){if(v.gX()==null){u=new D.b4()
u.d=0
v.sX(u)}v.gX().P(0,x)}}z=new D.ch(a,b,this,[z])
z.b=!0
this.ay(z)},"$2","geS",8,0,8],
sdN:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gv().P(0,this.gae())
y=this.c
this.c=a
if(a!=null)a.gv().h(0,this.gae())
z=new D.Q("technique",y,this.c,this,[O.d_])
z.b=!0
this.ay(z)}},
gv:function(){var z=this.x
if(z==null){z=D.J()
this.x=z}return z},
aN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dL(this.c)
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
u=C.c.a4(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.c.a4(v.b*w)
s=C.c.a4(v.c*x)
a.c=s
v=C.c.a4(v.d*w)
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
n=V.aw(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.dK(n)
y=$.ec
if(y==null){y=V.e7(new V.a8(0,0,0),new V.M(0,1,0),new V.M(0,0,-1))
$.ec=y
m=y}else m=y
y=z.b
if(y!=null){l=y.aO(0,a,z)
if(l!=null)m=l.j(0,m)}a.db.dK(m)
z=this.c
if(z!=null)z.aj(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.A();)z.d.aj(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.A();)z.d.aN(a)
this.a.toString
a.cy.ck()
a.db.ck()
this.b.toString
a.dJ()},
$ismv:1}}],["","",,A,{"^":"",dt:{"^":"a;a,b,c"},fN:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hd:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hc:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},hO:{"^":"el;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ah,0ac,0bg,0da,0bh,0bi,0dc,0dd,0bj,0bk,0de,0df,0bl,0bm,0dg,0dh,0bn,0di,0dj,0bo,0dk,0dl,0bp,0bq,0br,0dm,0dn,0bs,0bt,0dq,0dr,0bu,0ds,0c8,0dt,0c9,0du,0ca,0dv,0cb,0dw,0cc,0dz,0cd,a,b,0c,0d,0e,0f,0r,0x,0y",
e8:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.bB("")
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
a2.fD(z)
a2.fK(z)
a2.fE(z)
a2.fS(z)
a2.fT(z)
a2.fM(z)
a2.fX(z)
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
z=new P.bB("")
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
x.fH(z)
x.fC(z)
x.fF(z)
x.fI(z)
x.fQ(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.fO(z)
x.fP(z)}x.fL(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.b:r+="   return 1.0;\n"
z.a=r
break
case C.f:r+="   return alpha;\n"
z.a=r
break
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.b([],[P.i])
if(x.b!==C.b)C.a.h(p,"ambient()")
if(x.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.m(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.fG(z)
x.fN(z)
x.fR(z)
x.fU(z)
x.fV(z)
x.fW(z)
x.fJ(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.i])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.b)z.a+="   setDiffuseColor();\n"
if(x.d!==C.b)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.b)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.b)C.a.h(o,"emission()")
if(x.r!==C.b)C.a.h(o,"reflect(refl)")
if(x.x!==C.b)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.m(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.cO(s,35633)
this.f=this.cO(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.dd(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.u(P.r("Failed to link shader: "+H.k(m)))}this.fq()
this.ft()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a2.fr)this.id=H.f(this.y.p(0,"invViewMat"),"$isaG")
if(y)this.dy=H.f(this.y.p(0,"objMat"),"$isaG")
if(w)this.fr=H.f(this.y.p(0,"viewObjMat"),"$isaG")
this.fy=H.f(this.y.p(0,"projViewObjMat"),"$isaG")
if(a2.x2)this.k1=H.f(this.y.p(0,"txt2DMat"),"$isd3")
if(a2.y1)this.k2=H.f(this.y.p(0,"txtCubeMat"),"$isaG")
if(a2.y2)this.k3=H.f(this.y.p(0,"colorMat"),"$isaG")
this.r1=H.b([],[A.aG])
y=a2.ah
if(y>0){this.k4=H.j(this.y.p(0,"bendMatCount"),"$isI")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.u(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(k,"$isaG"))}}y=a2.a
if(y!==C.b){this.r2=H.f(this.y.p(0,"emissionClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.rx=H.f(this.y.p(0,"emissionTxt"),"$isah")
this.x1=H.f(this.y.p(0,"nullEmissionTxt"),"$isI")
break
case C.e:this.ry=H.f(this.y.p(0,"emissionTxt"),"$isai")
this.x1=H.f(this.y.p(0,"nullEmissionTxt"),"$isI")
break}}y=a2.b
if(y!==C.b){this.x2=H.f(this.y.p(0,"ambientClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.y1=H.f(this.y.p(0,"ambientTxt"),"$isah")
this.ah=H.f(this.y.p(0,"nullAmbientTxt"),"$isI")
break
case C.e:this.y2=H.f(this.y.p(0,"ambientTxt"),"$isai")
this.ah=H.f(this.y.p(0,"nullAmbientTxt"),"$isI")
break}}y=a2.c
if(y!==C.b){this.ac=H.f(this.y.p(0,"diffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.bg=H.f(this.y.p(0,"diffuseTxt"),"$isah")
this.bh=H.f(this.y.p(0,"nullDiffuseTxt"),"$isI")
break
case C.e:this.da=H.f(this.y.p(0,"diffuseTxt"),"$isai")
this.bh=H.f(this.y.p(0,"nullDiffuseTxt"),"$isI")
break}}y=a2.d
if(y!==C.b){this.bi=H.f(this.y.p(0,"invDiffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dc=H.f(this.y.p(0,"invDiffuseTxt"),"$isah")
this.bj=H.f(this.y.p(0,"nullInvDiffuseTxt"),"$isI")
break
case C.e:this.dd=H.f(this.y.p(0,"invDiffuseTxt"),"$isai")
this.bj=H.f(this.y.p(0,"nullInvDiffuseTxt"),"$isI")
break}}y=a2.e
if(y!==C.b){this.bm=H.f(this.y.p(0,"shininess"),"$isX")
this.bk=H.f(this.y.p(0,"specularClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.de=H.f(this.y.p(0,"specularTxt"),"$isah")
this.bl=H.f(this.y.p(0,"nullSpecularTxt"),"$isI")
break
case C.e:this.df=H.f(this.y.p(0,"specularTxt"),"$isai")
this.bl=H.f(this.y.p(0,"nullSpecularTxt"),"$isI")
break}}switch(a2.f){case C.b:break
case C.f:break
case C.d:this.dg=H.f(this.y.p(0,"bumpTxt"),"$isah")
this.bn=H.f(this.y.p(0,"nullBumpTxt"),"$isI")
break
case C.e:this.dh=H.f(this.y.p(0,"bumpTxt"),"$isai")
this.bn=H.f(this.y.p(0,"nullBumpTxt"),"$isI")
break}if(a2.dy){this.di=H.f(this.y.p(0,"envSampler"),"$isai")
this.dj=H.f(this.y.p(0,"nullEnvTxt"),"$isI")
y=a2.r
if(y!==C.b){this.bo=H.f(this.y.p(0,"reflectClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dk=H.f(this.y.p(0,"reflectTxt"),"$isah")
this.bp=H.f(this.y.p(0,"nullReflectTxt"),"$isI")
break
case C.e:this.dl=H.f(this.y.p(0,"reflectTxt"),"$isai")
this.bp=H.f(this.y.p(0,"nullReflectTxt"),"$isI")
break}}y=a2.x
if(y!==C.b){this.bq=H.f(this.y.p(0,"refraction"),"$isX")
this.br=H.f(this.y.p(0,"refractClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dm=H.f(this.y.p(0,"refractTxt"),"$isah")
this.bs=H.f(this.y.p(0,"nullRefractTxt"),"$isI")
break
case C.e:this.dn=H.f(this.y.p(0,"refractTxt"),"$isai")
this.bs=H.f(this.y.p(0,"nullRefractTxt"),"$isI")
break}}}y=a2.y
if(y!==C.b){this.bt=H.f(this.y.p(0,"alpha"),"$isX")
switch(y){case C.b:break
case C.f:break
case C.d:this.dq=H.f(this.y.p(0,"alphaTxt"),"$isah")
this.bu=H.f(this.y.p(0,"nullAlphaTxt"),"$isI")
break
case C.e:this.dr=H.f(this.y.p(0,"alphaTxt"),"$isai")
this.bu=H.f(this.y.p(0,"nullAlphaTxt"),"$isI")
break}}this.c8=H.b([],[A.eO])
this.c9=H.b([],[A.eP])
this.ca=H.b([],[A.eQ])
this.cb=H.b([],[A.eR])
this.cc=H.b([],[A.eS])
this.cd=H.b([],[A.eT])
if(a2.k2){y=a2.z
if(y>0){this.ds=H.j(this.y.p(0,"dirLightCount"),"$isI")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.c8;(x&&C.a).h(x,new A.eO(l,k,j))}}y=a2.Q
if(y>0){this.dt=H.j(this.y.p(0,"pntLightCount"),"$isI")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.y
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isX")
x=this.y
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isX")
x=this.y
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isX")
x=this.c9;(x&&C.a).h(x,new A.eP(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.du=H.j(this.y.p(0,"spotLightCount"),"$isI")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.y
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isX")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isX")
x=this.y
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isX")
x=this.y
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isX")
x=this.y
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isX")
x=this.ca;(x&&C.a).h(x,new A.eQ(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dv=H.j(this.y.p(0,"txtDirLightCount"),"$isI")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.y
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isH")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isI")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isah")
x=this.cb;(x&&C.a).h(x,new A.eR(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dw=H.j(this.y.p(0,"txtPntLightCount"),"$isI")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isd3")
x=this.y
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isI")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isX")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isX")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isX")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isai")
x=this.cc;(x&&C.a).h(x,new A.eS(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dz=H.j(this.y.p(0,"txtSpotLightCount"),"$isI")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isH")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isI")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isH")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isX")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isX")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isX")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isX")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isX")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a1,"$isah")
x=this.cd;(x&&C.a).h(x,new A.eT(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a9:function(a,b,c){b.a.uniform1i(b.d,1)},
a2:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
hN:function(a,b){var z,y
z=a.ac
y=new A.hO(b,z)
y.eb(b,z)
y.e8(a,b)
return y}}},hR:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ah,ac,bg",
fD:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ah+"];\n"
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
fK:function(a){var z
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
fE:function(a){var z
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
fS:function(a){var z,y
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
fT:function(a){var z,y
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
fM:function(a){var z
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
fX:function(a){var z
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
am:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.b6(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fH:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.am(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   return emissionClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fC:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.am(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   return ambientClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fF:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.am(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fI:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.am(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
fQ:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.am(a,z,"specular")
y=a.a+="uniform float shininess;\n"
y+="vec3 specularColor;\n"
a.a=y
y+="\n"
a.a=y
y+="void setSpecularColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
fL:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
case C.d:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.e:z+="uniform samplerCube bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break}z+="vec3 normal()\n"
a.a=z
z+="{\n"
a.a=z
switch(y){case C.b:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.f:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.d:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.e:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
fO:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.am(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fP:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.am(a,z,"refract")
y=a.a+="uniform float refraction;\n"
y+="\n"
a.a=y
y+="vec3 refract(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.b:z=y
break
case C.f:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fG:function(a){var z,y
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
fN:function(a){var z,y
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
fR:function(a){var z,y
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
fU:function(a){var z,y,x
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
fV:function(a){var z,y,x
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
fW:function(a){var z,y,x
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
fJ:function(a){var z
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
i:function(a){return this.ac}},eO:{"^":"a;a,b,c"},eR:{"^":"a;a,b,c,d,e,f,r,x"},eP:{"^":"a;a,b,c,d,e,f,r"},eS:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eQ:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eT:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},el:{"^":"cC;",
eb:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cO:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dd(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.r("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
fq:function(){var z,y,x,w,v,u
z=H.b([],[A.dt])
y=this.a
x=H.a3(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dt(y,v.name,u))}this.x=new A.fN(z)},
ft:function(){var z,y,x,w,v,u
z=H.b([],[A.a4])
y=this.a
x=H.a3(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.h9(v.type,v.size,v.name,u))}this.y=new A.j9(z)},
aB:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.I(z,y,b,c)
else return A.d2(z,y,b,a,c)},
ey:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ah(z,y,b,c)
else return A.d2(z,y,b,a,c)},
ez:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ai(z,y,b,c)
else return A.d2(z,y,b,a,c)},
bc:function(a,b){return new P.f1(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
h9:function(a,b,c,d){switch(a){case 5120:return this.aB(b,c,d)
case 5121:return this.aB(b,c,d)
case 5122:return this.aB(b,c,d)
case 5123:return this.aB(b,c,d)
case 5124:return this.aB(b,c,d)
case 5125:return this.aB(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.j4(this.a,this.r,c,d)
case 35665:return new A.H(this.a,this.r,c,d)
case 35666:return new A.j7(this.a,this.r,c,d)
case 35667:return new A.j5(this.a,this.r,c,d)
case 35668:return new A.j6(this.a,this.r,c,d)
case 35669:return new A.j8(this.a,this.r,c,d)
case 35674:return new A.jb(this.a,this.r,c,d)
case 35675:return new A.d3(this.a,this.r,c,d)
case 35676:return new A.aG(this.a,this.r,c,d)
case 35678:return this.ey(b,c,d)
case 35680:return this.ez(b,c,d)
case 35670:throw H.d(this.bc("BOOL",c))
case 35671:throw H.d(this.bc("BOOL_VEC2",c))
case 35672:throw H.d(this.bc("BOOL_VEC3",c))
case 35673:throw H.d(this.bc("BOOL_VEC4",c))
default:throw H.d(P.r("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},c9:{"^":"a;a,b",
i:function(a){return this.b}},a4:{"^":"a;"},j9:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.k(0,b)
if(z==null)throw H.d(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.N()},
hh:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.hh("\n")}},I:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},j5:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},j6:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},j8:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},j3:{"^":"a4;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
q:{
d2:function(a,b,c,d,e){var z=new A.j3(a,b,c,e)
z.f=d
z.e=P.hF(d,0,!1,P.D)
return z}}},X:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},j4:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},H:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},j7:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},jb:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},d3:{"^":"a4;a,b,c,d",
ad:function(a){var z=new Float32Array(H.bK(H.w(a,"$isc",[P.x],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},aG:{"^":"a4;a,b,c,d",
ad:function(a){var z=new Float32Array(H.bK(H.w(a,"$isc",[P.x],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},ah:{"^":"a4;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},ai:{"^":"a4;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
lI:function(a,b,c,d){return F.ld(c,a,d,b,new F.lJ())},
ld:function(a,b,c,d,e){var z=F.lG(a,b,new F.le(H.l(e,{func:1,ret:V.a8,args:[P.x]}),d,b,c),null)
if(z==null)return
z.aE()
z.ht(new F.jr(),new F.i3())
return z},
lG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.aH,P.x,P.x]})
if(a<1)return
if(b<1)return
z=new F.em()
y=new F.jm(z)
y.b=!1
x=[F.aH]
y.c=H.b([],x)
z.a=y
y=new F.iC(z)
y.b=H.b([],[F.ed])
z.b=y
y=new F.iB(z)
y.b=H.b([],[F.dZ])
z.c=y
y=new F.iA(z)
y.b=H.b([],[F.ao])
z.d=y
z.e=null
w=H.b([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.d4(null,null,new V.bQ(x,0,0,1),null,null,new V.W(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.d7(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.d4(null,null,new V.bQ(o,n,m,1),null,null,new V.W(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.d7(d))}}z.d.fY(a+1,b+1,w)
return z},
lJ:{"^":"p:36;",
$1:function(a){return new V.a8(Math.cos(a),Math.sin(a),0)}},
le:{"^":"p:37;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dp(y.$1(z),x)
x=J.dp(y.$1(z+3.141592653589793/this.c),x).F(0,w)
x=new V.M(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.D(x)))
u=new V.M(1,0,0)
y=v.aq(!v.t(0,u)?new V.M(0,0,1):u)
t=y.u(0,Math.sqrt(y.D(y)))
y=t.aq(v)
u=y.u(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
x=w.I(0,new V.a8(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.S(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a1()}}},
ao:{"^":"a;0a,0b,0c,0d,0e",
aU:function(){if(!this.gd8()){C.a.P(this.a.a.d.b,this)
this.a.a.a1()}this.fd()
this.fe()
this.ff()},
fn:function(a){this.a=a
C.a.h(a.d.b,this)},
fo:function(a){this.b=a
C.a.h(a.d.c,this)},
fp:function(a){this.c=a
C.a.h(a.d.d,this)},
fd:function(){var z=this.a
if(z!=null){C.a.P(z.d.b,this)
this.a=null}},
fe:function(){var z=this.b
if(z!=null){C.a.P(z.d.c,this)
this.b=null}},
ff:function(){var z=this.c
if(z!=null){C.a.P(z.d.d,this)
this.c=null}},
gd8:function(){return this.a==null||this.b==null||this.c==null},
eq:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.M(0,0,0)
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.dD())return
return v.u(0,Math.sqrt(v.D(v)))},
eu:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.F(0,y)
z=new V.M(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.D(z)))
z=w.F(0,y)
z=new V.M(z.a,z.b,z.c)
z=v.aq(z.u(0,Math.sqrt(z.D(z))))
return z.u(0,Math.sqrt(z.D(z)))},
c4:function(){if(this.d!=null)return!0
var z=this.eq()
if(z==null){z=this.eu()
if(z==null)return!1}this.d=z
this.a.a.a1()
return!0},
ep:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.M(0,0,0)
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.dD())return
return v.u(0,Math.sqrt(v.D(v)))},
es:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.F(0,u)
z=new V.M(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.L(0)}else{l=(z-q.b)/n
z=r.F(0,u).j(0,l).I(0,u).F(0,x)
z=new V.M(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.L(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.D(z)))
z=k.aq(m)
z=z.u(0,Math.sqrt(z.D(z))).aq(k)
m=z.u(0,Math.sqrt(z.D(z)))}return m},
c2:function(){if(this.e!=null)return!0
var z=this.ep()
if(z==null){z=this.es()
if(z==null)return!1}this.e=z
this.a.a.a1()
return!0},
gh4:function(a){if(J.S(this.a,this.b))return!0
if(J.S(this.b,this.c))return!0
if(J.S(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z,y
if(this.gd8())return a+"disposed"
z=a+C.i.ar(J.ae(this.a.e),0)+", "+C.i.ar(J.ae(this.b.e),0)+", "+C.i.ar(J.ae(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.C("")},
q:{
cd:function(a,b,c){var z,y,x
z=new F.ao()
y=a.a
if(y==null)H.u(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.u(P.r("May not create a face with vertices attached to different shapes."))
z.fn(a)
z.fo(b)
z.fp(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a1()
return z}}},
hg:{"^":"a;"},
iI:{"^":"hg;",
aX:function(a,b,c){var z,y
z=b.a
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
dZ:{"^":"a;"},
hB:{"^":"a;"},
j2:{"^":"hB;",
aX:function(a,b,c){var z,y
z=b.a
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
return z==null?y==null:z===y}else return!1}}},
ed:{"^":"a;"},
em:{"^":"a;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.J()
this.e=z}return z},
aE:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aE()||!1
if(!this.a.aE())y=!1
z=this.e
if(!(z==null))z.at(0)
return y},
eD:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.aH],"$asc")
H.w(e,"$isc",[P.D],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
if(a.aX(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
ht:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.aH],x=[P.D];y>=0;--y){w=this.a.c
if(y>=w.length)return H.h(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.eD(a,v,y,u,t))b.hs(u)}this.a.w()
this.c.cm()
this.d.cm()
this.b.hL()
this.c.cn(new F.j2())
this.d.cn(new F.iI())
z=this.e
if(!(z==null))z.at(0)},
h2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aL()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$bG().a)!==0)++w
if((x&$.$get$bH().a)!==0)++w
if((x&$.$get$bc().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
v=b.gcB(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.x
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.dx])
for(r=0,q=0;q<w;++q){p=b.h_(q)
o=p.gcB(p)
C.a.T(s,q,new Z.dx(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].hp(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.T(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bK(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dy(new Z.eZ(34962,j),s,b)
i.b=H.b([],[Z.cf])
if(this.b.b.length!==0){x=P.D
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.d5(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cf(0,h.length,f))}if(this.c.b.length!==0){x=P.D
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.d5(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cf(1,h.length,f))}if(this.d.b.length!==0){x=P.D
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.w()
C.a.h(h,g.e)}f=Z.d5(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cf(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.m(z,"\n")},
aM:function(a){var z=this.e
if(!(z==null))z.B(a)},
a1:function(){return this.aM(null)}},
iA:{"^":"a;a,0b",
fY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.aH],"$asc")
z=H.b([],[F.ao])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.h(c,x)
r=c[x];++x
if(x>=s)return H.h(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.h(c,p)
o=c[p]
if(y<0||y>=s)return H.h(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.cd(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.cd(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.cd(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.cd(q,n,r))}u=!u}w=!w}return z},
gn:function(a){return this.b.length},
cn:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aX(0,v,t)){v.aU()
break}}}}},
cm:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gh4(x)
if(y)x.aU()}},
aE:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].c4())x=!1
return x},
c3:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].c2())x=!1
return x},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.m(z,"\n")},
N:function(){return this.C("")}},
iB:{"^":"a;a,0b",
gn:function(a){return this.b.length},
cn:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aX(0,v,t)){v.aU()
break}}}}},
cm:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.S(x.a,x.b)
if(y)x.aU()}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.b([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.m(z,"\n")},
N:function(){return this.C("")}},
iC:{"^":"a;a,0b",
gn:function(a){return this.b.length},
hL:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aU()}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.m(z,"\n")},
N:function(){return this.C("")}},
aH:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
d7:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.d4(this.cx,x,u,z,y,w,v,a,t)},
hp:function(a){var z,y
z=J.L(a)
if(z.t(a,$.$get$aL())){z=this.f
y=[P.x]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aK())){z=this.r
y=[P.x]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aJ())){z=this.x
y=[P.x]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aM())){z=this.y
y=[P.x]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.t(a,$.$get$aN())){z=this.z
y=[P.x]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bG())){z=this.Q
y=[P.x]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bH())){z=this.Q
y=[P.x]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$bc()))return H.b([this.ch],[P.x])
else if(z.t(a,$.$get$aI())){z=H.b([-1,-1,-1,-1],[P.x])
return z}else return H.b([],[P.x])},
c4:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.M(0,0,0)
this.d.K(0,new F.jw(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
c2:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.M(0,0,0)
this.d.K(0,new F.jv(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z,y,x
z=H.b([],[P.i])
C.a.h(z,C.i.ar(J.ae(this.e),0))
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
C.a.h(z,V.V(this.ch,3,0))
C.a.h(z,"-")
x=C.a.m(z,", ")
return a+"{"+x+"}"},
N:function(){return this.C("")},
q:{
d4:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aH()
y=new F.ju(z)
y.b=H.b([],[F.ed])
z.b=y
y=new F.jq(z)
x=[F.dZ]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.jn(z)
x=[F.ao]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$eW()
z.e=0
y=$.$get$aL()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aK().a)!==0?e:null
z.x=(x&$.$get$aJ().a)!==0?b:null
z.y=(x&$.$get$aM().a)!==0?f:null
z.z=(x&$.$get$aN().a)!==0?g:null
z.Q=(x&$.$get$eX().a)!==0?c:null
z.ch=(x&$.$get$bc().a)!==0?i:0
z.cx=(x&$.$get$aI().a)!==0?a:null
return z}}},
jw:{"^":"p:5;a",
$1:function(a){var z,y
H.j(a,"$isao")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
jv:{"^":"p:5;a",
$1:function(a){var z,y
H.j(a,"$isao")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
jm:{"^":"a;a,0b,0c",
w:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a1()
return!0},
gn:function(a){return this.c.length},
aE:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].c4()
return!0},
c3:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].c2()
return!0},
h3:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.S(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}}}return!0},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
this.w()
z=H.b([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.m(z,"\n")},
N:function(){return this.C("")}},
jn:{"^":"a;a,0b,0c,0d",
gn:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.h(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.h(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ao]})
C.a.K(this.b,b)
C.a.K(this.c,new F.jo(this,b))
C.a.K(this.d,new F.jp(this,b))},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.m(z,"\n")},
N:function(){return this.C("")}},
jo:{"^":"p:5;a,b",
$1:function(a){H.j(a,"$isao")
if(!J.S(a.a,this.a))this.b.$1(a)}},
jp:{"^":"p:5;a,b",
$1:function(a){var z
H.j(a,"$isao")
z=this.a
if(!J.S(a.a,z)&&!J.S(a.b,z))this.b.$1(a)}},
jq:{"^":"a;a,0b,0c",
gn:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.m(z,"\n")},
N:function(){return this.C("")}},
js:{"^":"a;"},
jr:{"^":"js;",
aX:function(a,b,c){return J.S(b.f,c.f)}},
jt:{"^":"a;"},
i3:{"^":"jt;",
hs:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.aH],"$asc")
z=new V.M(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.M(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.u(0,Math.sqrt(z.D(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){t=a[x]
s=z.u(0,Math.sqrt(u))
if(!J.S(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.B(null)}}}return}},
ju:{"^":"a;a,0b",
gn:function(a){return this.b.length},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.m(z,"\n")},
N:function(){return this.C("")}}}],["","",,O,{"^":"",hM:{"^":"d_;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gv:function(){var z=this.dy
if(z==null){z=D.J()
this.dy=z}return z},
a8:[function(a){var z
H.j(a,"$isy")
z=this.dy
if(!(z==null))z.B(a)},function(){return this.a8(null)},"ia","$1","$0","geQ",0,2,1],
fi:[function(a){H.j(a,"$isy")
this.a=null
this.a8(a)},function(){return this.fi(null)},"iy","$1","$0","gfh",0,2,1],
i7:[function(a,b){var z=V.av
z=new D.cg(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.a8(z)},"$2","geN",8,0,24],
i8:[function(a,b){var z=V.av
z=new D.ch(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.a8(z)},"$2","geO",8,0,24],
cL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.Y(z.e.length+3,4)*4
x=C.h.Y(z.f.length+3,4)*4
w=C.h.Y(z.r.length+3,4)*4
v=C.h.Y(z.x.length+3,4)*4
u=C.h.Y(z.y.length+3,4)*4
t=C.h.Y(z.z.length+3,4)*4
s=C.h.Y(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+"_"
h+=z?"1":"0"
h+=r?"1":"0"
h+"0"
h=h+"0_"+s+"_"+y+"_"+x+"_"+w+"_"+v+"_"+u+"_"+t
g=k!==C.b||j!==C.b
f=p!==C.b||o!==C.b||n!==C.b||m!==C.b
e=m===C.b
d=!e||g
c=o!==C.b||n!==C.b||!e||l!==C.b||g
e=l===C.b
b=!e
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aL()
if(c){z=$.$get$aK()
a6=new Z.bb(a6.a|z.a)}if(b){z=$.$get$aJ()
a6=new Z.bb(a6.a|z.a)}if(a){z=$.$get$aM()
a6=new Z.bb(a6.a|z.a)}if(a0){z=$.$get$aN()
a6=new Z.bb(a6.a|z.a)}if(a2){z=$.$get$aI()
a6=new Z.bb(a6.a|z.a)}return new A.hR(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
R:function(a,b){H.w(a,"$isc",[T.ev],"$asc")},
aj:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.A();){y=z.d
x=new V.M(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cp(x)}}},
hN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cL()
y=a.fr.k(0,z.ac)
if(y==null){y=A.hN(z,a.a)
x=y.b
if(x.length===0)H.u(P.r("May not cache a shader with no name."))
if(a.fr.d6(0,x))H.u(P.r('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.T(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.bg
z=b.e
if(!(z instanceof Z.dy)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.aE()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.c3()
t.a.c3()
t=t.e
if(!(t==null))t.at(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.h3()
s=s.e
if(!(s==null))s.at(0)}q=b.d.h2(new Z.jx(a.a),v)
q.aJ($.$get$aL()).e=this.a.Q.c
if(z)q.aJ($.$get$aK()).e=this.a.cx.c
if(u)q.aJ($.$get$aJ()).e=this.a.ch.c
if(w.rx)q.aJ($.$get$aM()).e=this.a.cy.c
if(t)q.aJ($.$get$aN()).e=this.a.db.c
if(w.x1)q.aJ($.$get$aI()).e=this.a.dx.c
b.e=q}z=T.ev
p=H.b([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.hd()
if(w.fx){u=this.a
t=a.dx
t=t.gW(t)
u=u.dy
u.toString
u.ad(t.a5(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gW(t)
s=a.dx
s=t.j(0,s.gW(s))
a.cx=s
t=s}u=u.fr
u.toString
u.ad(t.a5(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghI()
s=a.dx
s=t.j(0,s.gW(s))
a.ch=s
t=s}u=u.fy
u.toString
u.ad(t.a5(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.ad(t.a5(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.ad(t.a5(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.ad(C.F.a5(t,!0))}if(w.ah>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.x],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.h(s,n)
s=s[n]
t.toString
H.j(s,"$isav")
t=t.r1
if(n>=t.length)return H.h(t,n)
t=t[n]
m=new Float32Array(H.bK(H.w(s.a5(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.f:u=this.a
t=this.f.f
u=u.r2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.R(p,this.f.d)
u=this.a
t=this.f.d
u.a9(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.R(p,this.f.e)
u=this.a
t=this.f.e
u.a2(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.f:u=this.a
t=this.r.f
u=u.x2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.R(p,this.r.d)
u=this.a
t=this.r.d
u.a9(u.y1,u.ah,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.R(p,this.r.e)
u=this.a
t=this.r.e
u.a2(u.y2,u.ah,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.f:u=this.a
t=this.x.f
u=u.ac
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.R(p,this.x.d)
u=this.a
t=this.x.d
u.a9(u.bg,u.bh,t)
t=this.a
u=this.x.f
t=t.ac
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.R(p,this.x.e)
u=this.a
t=this.x.e
u.a2(u.da,u.bh,t)
t=this.a
u=this.x.f
t=t.ac
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.f:u=this.a
t=this.y.f
u=u.bi
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.R(p,this.y.d)
u=this.a
t=this.y.d
u.a9(u.dc,u.bj,t)
t=this.a
u=this.y.f
t=t.bi
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.R(p,this.y.e)
u=this.a
t=this.y.e
u.a2(u.dd,u.bj,t)
t=this.a
u=this.y.f
t=t.bi
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.f:u=this.a
t=this.z.f
u=u.bk
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bm
t.a.uniform1f(t.d,r)
break
case C.d:this.R(p,this.z.d)
u=this.a
t=this.z.d
u.a9(u.de,u.bl,t)
t=this.a
u=this.z.f
t=t.bk
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bm
u.a.uniform1f(u.d,r)
break
case C.e:this.R(p,this.z.e)
u=this.a
t=this.z.e
u.a2(u.df,u.bl,t)
t=this.a
u=this.z.f
t=t.bk
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bm
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.ds
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.c8
if(k>=s.length)return H.h(s,k)
h=s[k]
s=l.cp(i.a)
r=s.a
g=s.b
f=s.c
f=s.u(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dt
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.c9
if(k>=s.length)return H.h(s,k)
h=s[k]
s=i.gb_(i)
r=h.b
g=s.gcs(s)
f=s.gct(s)
s=s.gcu(s)
r.a.uniform3f(r.d,g,f,s)
s=l.b3(i.gb_(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gaa(i)
f=h.d
g=s.gbx()
r=s.gb4()
s=s.gbe()
f.a.uniform3f(f.d,g,r,s)
s=i.gbY()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbZ()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gc_()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.du
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.ca
if(k>=s.length)return H.h(s,k)
h=s[k]
s=i.gb_(i)
r=h.b
g=s.gcs(s)
f=s.gct(s)
s=s.gcu(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gc7(i).iF()
f=h.c
g=s.gaG(s)
r=s.gaH(s)
s=s.gaI()
f.a.uniform3f(f.d,g,r,s)
s=l.b3(i.gb_(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaa(i)
r=h.e
g=s.gbx()
f=s.gb4()
s=s.gbe()
r.a.uniform3f(r.d,g,f,s)
s=i.giE()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giC()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbY()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbZ()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gc_()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dv
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
r=this.a.cb
if(k>=r.length)return H.h(r,k)
h=r[k]
r=i.gb1()
H.w(p,"$isc",s,"$asc")
if(!C.a.S(p,r)){r.saV(0,p.length)
C.a.h(p,r)}r=i.gc7(i)
g=h.d
f=r.gaG(r)
e=r.gaH(r)
r=r.gaI()
g.a.uniform3f(g.d,f,e,r)
r=i.gby()
e=h.b
f=r.gaG(r)
g=r.gaH(r)
r=r.gaI()
e.a.uniform3f(e.d,f,g,r)
r=i.gb0(i)
g=h.c
f=r.gaG(r)
e=r.gaH(r)
r=r.gaI()
g.a.uniform3f(g.d,f,e,r)
r=l.cp(i.gc7(i))
e=r.a
f=r.b
g=r.c
g=r.u(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gaa(i)
f=h.f
e=g.gbx()
r=g.gb4()
g=g.gbe()
f.a.uniform3f(f.d,e,r,g)
g=i.gb1()
r=g.gaW(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gaW(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaV(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dw
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.y,t=u.length,s=[P.x],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
g=this.a.cc
if(k>=g.length)return H.h(g,k)
h=g[k]
g=i.gb1()
H.w(p,"$isc",r,"$asc")
if(!C.a.S(p,g)){g.saV(0,p.length)
C.a.h(p,g)}d=l.j(0,i.gW(i))
g=i.gW(i).b3(new V.a8(0,0,0))
f=h.b
e=g.gcs(g)
c=g.gct(g)
g=g.gcu(g)
f.a.uniform3f(f.d,e,c,g)
g=d.b3(new V.a8(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dC(0)
c=h.d
m=new Float32Array(H.bK(H.w(new V.ck(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a5(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gaa(i)
g=h.e
e=c.gbx()
f=c.gb4()
c=c.gbe()
g.a.uniform3f(g.d,e,f,c)
c=i.gb1()
g=c.gaW(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gaW(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gaV(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbY()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbZ()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gc_()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dz
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.cd
if(k>=s.length)return H.h(s,k)
h=s[k]
s=i.gb1()
H.w(p,"$isc",z,"$asc")
if(!C.a.S(p,s)){s.saV(0,p.length)
C.a.h(p,s)}s=i.gb_(i)
r=h.b
g=s.gcs(s)
f=s.gct(s)
s=s.gcu(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gc7(i)
f=h.c
g=s.gaG(s)
r=s.gaH(s)
s=s.gaI()
f.a.uniform3f(f.d,g,r,s)
s=i.gby()
r=h.d
g=s.gaG(s)
f=s.gaH(s)
s=s.gaI()
r.a.uniform3f(r.d,g,f,s)
s=i.gb0(i)
f=h.e
g=s.gaG(s)
r=s.gaH(s)
s=s.gaI()
f.a.uniform3f(f.d,g,r,s)
s=l.b3(i.gb_(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb1()
r=s.gaW(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gaW(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaV(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gaa(i)
r=h.y
g=s.gbx()
f=s.gb4()
s=s.gbe()
r.a.uniform3f(r.d,g,f,s)
s=i.giK()
f=h.z
f.a.uniform1f(f.d,s)
s=i.giL()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbY()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbZ()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gc_()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.f:break
case C.d:this.R(p,this.Q.d)
z=this.a
u=this.Q.d
z.a9(z.dg,z.bn,u)
break
case C.e:this.R(p,this.Q.e)
z=this.a
u=this.Q.e
z.a2(z.dh,z.bn,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gW(u).dC(0)
a.Q=u}z=z.id
z.toString
z.ad(u.a5(0,!0))}if(w.dy){this.R(p,this.ch)
z=this.a
u=this.ch
z.a2(z.di,z.dj,u)
switch(w.r){case C.b:break
case C.f:z=this.a
u=this.cx.f
z=z.bo
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.d:this.R(p,this.cx.d)
z=this.a
u=this.cx.d
z.a9(z.dk,z.bp,u)
u=this.a
z=this.cx.f
u=u.bo
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.e:this.R(p,this.cx.e)
z=this.a
u=this.cx.e
z.a2(z.dl,z.bp,u)
u=this.a
z=this.cx.f
u=u.bo
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.f:z=this.a
u=this.cy.f
z=z.br
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bq
u.a.uniform1f(u.d,s)
break
case C.d:this.R(p,this.cy.d)
z=this.a
u=this.cy.d
z.a9(z.dm,z.bs,u)
u=this.a
z=this.cy.f
u=u.br
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bq
z.a.uniform1f(z.d,s)
break
case C.e:this.R(p,this.cy.e)
z=this.a
u=this.cy.e
z.a2(z.dn,z.bs,u)
u=this.a
z=this.cy.f
u=u.br
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bq
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.f:z=this.a
t=this.db.f
z=z.bt
z.a.uniform1f(z.d,t)
break
case C.d:this.R(p,this.db.d)
z=this.a
t=this.db.d
z.a9(z.dq,z.bu,t)
t=this.a
z=this.db.f
t=t.bt
t.a.uniform1f(t.d,z)
break
case C.e:this.R(p,this.db.e)
z=this.a
t=this.db.e
z.a2(z.dr,z.bu,t)
t=this.a
z=this.db.f
t=t.bt
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bd(a)
z=b.e
z.bd(a)
z.aN(a)
z.dR(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].dR(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.hc()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cL().ac}},hP:{"^":"cR;0f,a,b,0c,0d,0e"},cR:{"^":"a;",
b9:["e5",function(){}]},hQ:{"^":"cR;a,b,0c,0d,0e"},b7:{"^":"cR;0f,a,b,0c,0d,0e",
cV:function(a){var z,y
if(!J.S(this.f,a)){z=this.f
this.f=a
y=new D.Q(this.b+".color",z,a,this,[V.Y])
y.b=!0
this.a.a8(y)}},
b9:["bC",function(){this.e5()
this.cV(new V.Y(1,1,1))}],
saa:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.b9()
z=this.a
z.a=null
z.a8(null)}this.cV(b)}},hS:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
fm:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".refraction",y,a,this,[P.x])
z.b=!0
this.a.a8(z)}},
b9:function(){this.bC()
this.fm(1)}},hT:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
bV:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".shininess",y,a,this,[P.x])
z.b=!0
this.a.a8(z)}},
b9:function(){this.bC()
this.bV(100)}},d_:{"^":"a;"}}],["","",,T,{"^":"",ev:{"^":"cC;"},iR:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",bl:{"^":"a;",
aL:function(a,b){return!0},
i:function(a){return"all"},
$isaE:1},aE:{"^":"a;"},e6:{"^":"a;",
aL:["e4",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].aL(0,b))return!0
return!1}],
i:["cC",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaE:1},aq:{"^":"e6;0a",
aL:function(a,b){return!this.e4(0,b)},
i:function(a){return"!["+this.cC(0)+"]"}},ij:{"^":"a;0a,0b",
aL:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.cV(this.a)
y=H.cV(this.b)
return z+".."+y},
$isaE:1,
q:{
P:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.d(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.i.az(a,0)
y=C.i.az(b,0)
x=new V.ij()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},iy:{"^":"a;0a",
ea:function(a){var z,y
if(a.a.length<=0)throw H.d(P.r("May not create a SetMatcher with zero characters."))
z=new H.b6(0,0,[P.D,P.N])
for(y=new H.cQ(a,a.gn(a),0,[H.al(a,"v",0)]);y.A();)z.T(0,y.d,!0)
this.a=z},
aL:function(a,b){return this.a.d6(0,b)},
i:function(a){var z=this.a
return P.cY(new H.e0(z,[H.B(z,0)]),0,null)},
$isaE:1,
q:{
t:function(a){var z=new V.iy()
z.ea(a)
return z}}},eo:{"^":"a;a,b,0c,0d",
ghu:function(a){return this.b},
m:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eC(this.a.l(0,b))
w.a=H.b([],[V.aE])
w.c=!1
C.a.h(this.c,w)
return w},
he:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.aL(0,a))return w}return},
i:function(a){return this.b}},ez:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dn(this.b,"\n","\\n")
y=H.dn(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eA:{"^":"a;a,b,0c",
as:function(a,b,c){var z,y,x
H.w(c,"$isc",[P.i],"$asc")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.z)(c),++y){x=c[y]
this.c.T(0,x,b)}},
i:function(a){return this.b}},iZ:{"^":"a;0a,0b,0c",
l:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.eo(this,b)
z.c=H.b([],[V.eC])
this.a.T(0,b,z)}return z},
H:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.eA(this,a)
y=P.i
z.c=new H.b6(0,0,[y,y])
this.b.T(0,a,z)}return z},
dQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.ez])
y=this.c
x=[P.D]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.az(a,t)
r=y.he(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cY(w,0,null)
throw H.d(P.r("Untokenizable string [state: "+y.ghu(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cY(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.ez(o==null?p.b:o,q,t)}++t}}},
q:{
co:function(){var z,y
z=new V.iZ()
y=P.i
z.a=new H.b6(0,0,[y,V.eo])
z.b=new H.b6(0,0,[y,V.eA])
return z}}},eC:{"^":"e6;b,0c,0a",
i:function(a){return this.b.b+": "+this.cC(0)}}}],["","",,X,{"^":"",dA:{"^":"a;",$isaF:1},hl:{"^":"es;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.J()
this.x=z}return z}},i6:{"^":"a;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.J()
this.f=z}return z},
aQ:[function(a){var z
H.j(a,"$isy")
z=this.f
if(!(z==null))z.B(a)},function(){return this.aQ(null)},"i0","$1","$0","gcE",0,2,1],
sdF:function(a){var z,y
if(!J.S(this.b,a)){z=this.b
if(z!=null)z.gv().P(0,this.gcE())
y=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gcE())
z=new D.Q("mover",y,this.b,this,[U.a7])
z.b=!0
this.aQ(z)}},
$isaF:1,
$isdA:1},es:{"^":"a;"}}],["","",,V,{"^":"",
lE:function(a){P.iY(C.C,new V.lF(a))},
aQ:{"^":"a;",
b7:function(a){this.b=new P.ho(C.D)
this.c=null
this.d=H.b([],[[P.c,W.b2]])},
G:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.b2]))
y=a.split("\n")
for(z=y.length,x=[W.b2],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.G(u)
s=this.b.ex(u,0,u.length)
r=s==null?u:s
C.B.dY(t,H.dn(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbv(this.d),t)}},
dI:function(a,b){var z,y,x,w
H.w(b,"$isc",[P.i],"$asc")
this.d=H.b([],[[P.c,W.b2]])
z=C.a.m(b,"\n")
y=this.c
if(y==null){y=this.bf()
this.c=y}for(y=y.dQ(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)this.bw(y[w])}},
lF:{"^":"p:40;a",
$1:function(a){H.j(a,"$isb9")
P.dm(C.c.dP(this.a.ghi(),2)+" fps")}},
h1:{"^":"aQ;a,0b,0c,0d",
bw:function(a){switch(a.a){case"Class":this.G(a.b,"#551")
break
case"Comment":this.G(a.b,"#777")
break
case"Id":this.G(a.b,"#111")
break
case"Num":this.G(a.b,"#191")
break
case"Reserved":this.G(a.b,"#119")
break
case"String":this.G(a.b,"#171")
break
case"Symbol":this.G(a.b,"#616")
break
case"Type":this.G(a.b,"#B11")
break
case"Whitespace":this.G(a.b,"#111")
break}},
bf:function(){var z,y,x,w
z=V.co()
z.c=z.l(0,"Start")
y=z.l(0,"Start").m(0,"Id")
x=V.t(new H.q("_"))
C.a.h(y.a,x)
x=V.P("a","z")
C.a.h(y.a,x)
x=V.P("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").m(0,"Id")
y=V.t(new H.q("_"))
C.a.h(x.a,y)
y=V.P("0","9")
C.a.h(x.a,y)
y=V.P("a","z")
C.a.h(x.a,y)
y=V.P("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"Int")
x=V.P("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").m(0,"Int")
y=V.P("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").m(0,"FloatDot")
x=V.t(new H.q("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").m(0,"Float")
y=V.P("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").m(0,"Float")
x=V.P("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"Sym")
y=V.t(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").m(0,"Sym")
x=V.t(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"OpenDoubleStr")
y=V.t(new H.q('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
x=V.t(new H.q('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenDoubleStr").m(0,"EscDoubleStr")
y=V.t(new H.q("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscDoubleStr").m(0,"OpenDoubleStr")
x=V.t(new H.q('"'))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bl())
x=z.l(0,"Start").m(0,"OpenSingleStr")
y=V.t(new H.q("'"))
C.a.h(x.a,y)
y=z.l(0,"OpenSingleStr").m(0,"CloseSingleStr")
x=V.t(new H.q("'"))
C.a.h(y.a,x)
x=z.l(0,"OpenSingleStr").m(0,"EscSingleStr")
y=V.t(new H.q("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscSingleStr").m(0,"OpenSingleStr")
x=V.t(new H.q("'"))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bl())
x=z.l(0,"Start").m(0,"Slash")
y=V.t(new H.q("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").m(0,"Comment")
x=V.t(new H.q("/"))
C.a.h(y.a,x)
x=z.l(0,"Comment").m(0,"EndComment")
y=V.t(new H.q("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").m(0,"Comment")
x=new V.aq()
w=[V.aE]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.q("\n"))
C.a.h(x.a,y)
y=z.l(0,"Slash").m(0,"MLComment")
x=V.t(new H.q("*"))
C.a.h(y.a,x)
x=z.l(0,"MLComment").m(0,"MLCStar")
y=V.t(new H.q("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").m(0,"MLComment")
x=new V.aq()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.q("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").m(0,"EndComment")
x=V.t(new H.q("/"))
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"Whitespace")
y=V.t(new H.q(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Whitespace").m(0,"Whitespace")
x=V.t(new H.q(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Int")
x.d=x.a.H("Num")
x=z.l(0,"Float")
x.d=x.a.H("Num")
x=z.l(0,"Sym")
x.d=x.a.H("Symbol")
x=z.l(0,"CloseDoubleStr")
x.d=x.a.H("String")
x=z.l(0,"CloseSingleStr")
x.d=x.a.H("String")
x=z.l(0,"EndComment")
x.d=x.a.H("Comment")
x=z.l(0,"Whitespace")
x.d=x.a.H("Whitespace")
x=z.l(0,"Id")
y=x.a.H("Id")
x.d=y
x=[P.i]
y.as(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.as(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.as(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hm:{"^":"aQ;a,0b,0c,0d",
bw:function(a){switch(a.a){case"Builtin":this.G(a.b,"#411")
break
case"Comment":this.G(a.b,"#777")
break
case"Id":this.G(a.b,"#111")
break
case"Num":this.G(a.b,"#191")
break
case"Preprocess":this.G(a.b,"#737")
break
case"Reserved":this.G(a.b,"#119")
break
case"Symbol":this.G(a.b,"#611")
break
case"Type":this.G(a.b,"#171")
break
case"Whitespace":this.G(a.b,"#111")
break}},
bf:function(){var z,y,x,w
z=V.co()
z.c=z.l(0,"Start")
y=z.l(0,"Start").m(0,"Id")
x=V.t(new H.q("_"))
C.a.h(y.a,x)
x=V.P("a","z")
C.a.h(y.a,x)
x=V.P("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").m(0,"Id")
y=V.t(new H.q("_"))
C.a.h(x.a,y)
y=V.P("0","9")
C.a.h(x.a,y)
y=V.P("a","z")
C.a.h(x.a,y)
y=V.P("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"Int")
x=V.P("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").m(0,"Int")
y=V.P("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").m(0,"FloatDot")
x=V.t(new H.q("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").m(0,"Float")
y=V.P("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").m(0,"Float")
x=V.P("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"Sym")
y=V.t(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").m(0,"Sym")
x=V.t(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"Slash")
y=V.t(new H.q("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").m(0,"Comment")
x=V.t(new H.q("/"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Slash").m(0,"Sym").a,new V.bl())
x=z.l(0,"Comment").m(0,"EndComment")
y=V.t(new H.q("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").m(0,"Comment")
x=new V.aq()
w=[V.aE]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.q("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"Preprocess")
x=V.t(new H.q("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").m(0,"Preprocess")
y=new V.aq()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.t(new H.q("\n"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").m(0,"EndPreprocess")
y=V.t(new H.q("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"Whitespace")
x=V.t(new H.q(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Whitespace").m(0,"Whitespace")
y=V.t(new H.q(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Int")
y.d=y.a.H("Num")
y=z.l(0,"Float")
y.d=y.a.H("Num")
y=z.l(0,"Sym")
y.d=y.a.H("Symbol")
y=z.l(0,"EndComment")
y.d=y.a.H("Comment")
y=z.l(0,"EndPreprocess")
y.d=y.a.H("Preprocess")
y=z.l(0,"Whitespace")
y.d=y.a.H("Whitespace")
y=z.l(0,"Id")
x=y.a.H("Id")
y.d=x
y=[P.i]
x.as(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.as(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.as(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
hn:{"^":"aQ;a,0b,0c,0d",
bw:function(a){switch(a.a){case"Attr":this.G(a.b,"#911")
this.G("=","#111")
break
case"Id":this.G(a.b,"#111")
break
case"Other":this.G(a.b,"#111")
break
case"Reserved":this.G(a.b,"#119")
break
case"String":this.G(a.b,"#171")
break
case"Symbol":this.G(a.b,"#616")
break}},
bf:function(){var z,y,x
z=V.co()
z.c=z.l(0,"Start")
y=z.l(0,"Start").m(0,"Id")
x=V.t(new H.q("_"))
C.a.h(y.a,x)
x=V.P("a","z")
C.a.h(y.a,x)
x=V.P("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").m(0,"Id")
y=V.t(new H.q("_"))
C.a.h(x.a,y)
y=V.P("0","9")
C.a.h(x.a,y)
y=V.P("a","z")
C.a.h(x.a,y)
y=V.P("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Id").m(0,"Attr")
x=V.t(new H.q("="))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").m(0,"Sym")
x=V.t(new H.q("</\\-!>="))
C.a.h(y.a,x)
x=z.l(0,"Sym").m(0,"Sym")
y=V.t(new H.q("</\\-!>="))
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"OpenStr")
x=V.t(new H.q('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenStr").m(0,"CloseStr")
y=V.t(new H.q('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenStr").m(0,"EscStr")
x=V.t(new H.q("\\"))
C.a.h(y.a,x)
x=z.l(0,"EscStr").m(0,"OpenStr")
y=V.t(new H.q('"'))
C.a.h(x.a,y)
C.a.h(z.l(0,"OpenStr").m(0,"OpenStr").a,new V.bl())
C.a.h(z.l(0,"Start").m(0,"Other").a,new V.bl())
y=z.l(0,"Other").m(0,"Other")
x=new V.aq()
x.a=H.b([],[V.aE])
C.a.h(y.a,x)
y=V.t(new H.q('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.P("a","z")
C.a.h(x.a,y)
y=V.P("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.H("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.H("String")
y=z.l(0,"Id")
x=y.a.H("Id")
y.d=x
x.as(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.i]))
x=z.l(0,"Attr")
x.d=x.a.H("Attr")
x=z.l(0,"Other")
x.d=x.a.H("Other")
return z}},
i8:{"^":"aQ;a,0b,0c,0d",
dI:function(a,b){H.w(b,"$isc",[P.i],"$asc")
this.d=H.b([],[[P.c,W.b2]])
this.G(C.a.m(b,"\n"),"#111")},
bw:function(a){},
bf:function(){return}},
iD:{"^":"a;0a,0b",
ec:function(a,b){var z,y,x,w,v,u,t
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
W.a2(z,"scroll",H.l(new V.iG(x),{func:1,ret:-1,args:[t]}),!1,t)},
d1:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.i],"$asc")
this.fs()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.dQ(C.a.hn(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
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
if(H.fC(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.fj(C.u,s,C.p,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
dU:function(a){var z,y,x,w
z=new V.h1("dart")
z.b7("dart")
y=new V.hm("glsl")
y.b7("glsl")
x=new V.hn("html")
x.b7("html")
w=C.a.hf(H.b([z,y,x],[V.aQ]),new V.iH(a))
if(w!=null)return w
z=new V.i8("plain")
z.b7("plain")
return z},
d_:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.w(a2,"$isc",[P.i],"$asc")
z=H.b([],[P.D])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.di(w).bz(w,"+")){C.a.T(a2,x,C.i.b6(w,1))
C.a.h(z,1)
y=!0}else if(C.i.bz(w,"-")){C.a.T(a2,x,C.i.b6(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.dU(a0)
v.dI(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.fj(C.u,a,C.p,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dr(null)
n.href="#"+r
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
if(x>=z.length)return H.h(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.z)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.z)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gU(w);b.A();)h.appendChild(b.gJ(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
fs:function(){var z,y,x,w
if(this.b!=null)return
z=V.co()
z.c=z.l(0,"Start")
y=z.l(0,"Start").m(0,"Bold")
x=V.t(new H.q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").m(0,"Bold")
x=new V.aq()
w=[V.aE]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.q("*"))
C.a.h(x.a,y)
y=z.l(0,"Bold").m(0,"BoldEnd")
x=V.t(new H.q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").m(0,"Italic")
x=V.t(new H.q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Italic").m(0,"Italic")
x=new V.aq()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.q("_"))
C.a.h(x.a,y)
y=z.l(0,"Italic").m(0,"ItalicEnd")
x=V.t(new H.q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").m(0,"Code")
x=V.t(new H.q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Code").m(0,"Code")
x=new V.aq()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.q("`"))
C.a.h(x.a,y)
y=z.l(0,"Code").m(0,"CodeEnd")
x=V.t(new H.q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").m(0,"LinkHead")
x=V.t(new H.q("["))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"LinkHead").m(0,"LinkTail")
x=V.t(new H.q("|"))
C.a.h(y.a,x)
x=z.l(0,"LinkHead").m(0,"LinkEnd")
y=V.t(new H.q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkHead").m(0,"LinkHead")
y=new V.aq()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.t(new H.q("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").m(0,"LinkEnd")
y=V.t(new H.q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").m(0,"LinkTail")
y=new V.aq()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.t(new H.q("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").m(0,"Other").a,new V.bl())
x=z.l(0,"Other").m(0,"Other")
y=new V.aq()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.t(new H.q("*_`["))
C.a.h(y.a,x)
x=z.l(0,"BoldEnd")
x.d=x.a.H("Bold")
x=z.l(0,"ItalicEnd")
x.d=x.a.H("Italic")
x=z.l(0,"CodeEnd")
x.d=x.a.H("Code")
x=z.l(0,"LinkEnd")
x.d=x.a.H("Link")
x=z.l(0,"Other")
x.d=x.a.H("Other")
this.b=z},
q:{
iE:function(a,b){var z=new V.iD()
z.ec(a,!0)
return z}}},
iG:{"^":"p:41;a",
$1:function(a){P.ex(C.l,new V.iF(this.a))}},
iF:{"^":"p:2;a",
$0:function(){var z,y,x
z=C.c.a4(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}},
iH:{"^":"p:42;a",
$1:function(a){return H.j(a,"$isaQ").a===this.a}}}],["","",,Q,{"^":"",
fy:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=V.iE("Test 009",!0)
y=W.dB(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.d1(H.b(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."],x))
z.d1(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.u(P.r("Failed to find an element with the identifier, testCanvas."))
v=E.iW(w,!0,!0,!0,!1)
u=new E.aS()
u.a=""
u.b=!0
x=E.aS
t=O.cH(x)
u.y=t
t.b5(u.ghv(),u.ghx())
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
u.scA(0,null)
u.scA(0,F.lI(30,1,15,0.5))
s=new O.hM()
t=O.cH(V.av)
s.e=t
t.b5(s.geN(),s.geO())
t=new O.b7(s,"emission")
t.c=C.b
t.f=new V.Y(0,0,0)
s.f=t
t=new O.b7(s,"ambient")
t.c=C.b
t.f=new V.Y(0,0,0)
s.r=t
t=new O.b7(s,"diffuse")
t.c=C.b
t.f=new V.Y(0,0,0)
s.x=t
t=new O.b7(s,"invDiffuse")
t.c=C.b
t.f=new V.Y(0,0,0)
s.y=t
t=new O.hT(s,"specular")
t.c=C.b
t.f=new V.Y(0,0,0)
t.ch=100
s.z=t
t=new O.hQ(s,"bump")
t.c=C.b
s.Q=t
s.ch=null
t=new O.b7(s,"reflect")
t.c=C.b
t.f=new V.Y(0,0,0)
s.cx=t
t=new O.hS(s,"refract")
t.c=C.b
t.f=new V.Y(0,0,0)
t.ch=1
s.cy=t
t=new O.hP(s,"alpha")
t.c=C.b
t.f=1
s.db=t
t=new D.hA()
t.bD(D.Z)
t.e=H.b([],[D.cb])
t.f=H.b([],[D.i9])
t.r=H.b([],[D.iJ])
t.x=H.b([],[D.iS])
t.y=H.b([],[D.iT])
t.z=H.b([],[D.iU])
t.Q=null
t.ch=null
t.cz(t.geM(),t.gf6(),t.gf8())
s.dx=t
r=t.Q
if(r==null){r=D.J()
t.Q=r
t=r}else t=r
t.h(0,s.gfh())
t=s.dx
r=t.ch
if(r==null){r=D.J()
t.ch=r
t=r}else t=r
t.h(0,s.geQ())
s.dy=null
t=s.dx
r=U.dF(V.e7(new V.a8(0,0,0),new V.M(0,1,0),new V.M(-1,-1,-1)))
q=new V.Y(1,1,1)
p=new D.cb()
p.c=new V.Y(1,1,1)
p.a=new V.M(0,0,1)
o=p.b
p.b=r
r.gv().h(0,p.gej())
r=new D.Q("mover",o,p.b,p,[U.a7])
r.b=!0
p.aw(r)
if(!p.c.t(0,q)){o=p.c
p.c=q
r=new D.Q("color",o,q,p,[V.Y])
r.b=!0
p.aw(r)}t.h(0,p)
s.f.saa(0,new V.Y(0,0,0))
t=s.r
t.saa(0,new V.Y(0,0,1))
t=s.x
t.saa(0,new V.Y(0,1,0))
t=s.z
t.saa(0,new V.Y(1,0,0))
t=s.z
if(t.c===C.b){t.c=C.f
t.bC()
t.bV(100)
r=t.a
r.a=null
r.a8(null)}t.bV(10)
n=new U.dT()
n.bD(U.a7)
n.b5(n.geL(),n.gf7())
n.e=null
n.f=V.bY()
n.r=0
t=v.r
r=new U.ji()
p=U.cI()
p.scr(0,!0)
p.scf(6.283185307179586)
p.sci(0)
p.sa_(0,0)
p.scg(100)
p.sO(0)
p.sc6(0.5)
r.b=p
m=r.gax()
p.gv().h(0,m)
p=U.cI()
p.scr(0,!0)
p.scf(6.283185307179586)
p.sci(0)
p.sa_(0,0)
p.scg(100)
p.sO(0)
p.sc6(0.5)
r.c=p
p.gv().h(0,m)
r.d=null
r.e=!1
r.f=!1
r.r=!1
r.x=2.5
r.y=2.5
r.z=2
r.Q=4
r.cx=!1
r.ch=!1
r.cy=0
r.db=0
r.dx=null
r.dy=0
r.fr=null
r.fx=null
l=new X.ax(!1,!1,!1)
o=r.d
r.d=l
p=[X.ax]
m=new D.Q("modifiers",o,l,r,p)
m.b=!0
r.M(m)
m=r.f
if(m!==!1){r.f=!1
m=new D.Q("invertX",m,!1,r,[P.N])
m.b=!0
r.M(m)}m=r.r
if(m!==!0){r.r=!0
m=new D.Q("invertY",m,!0,r,[P.N])
m.b=!0
r.M(m)}r.aT(t)
n.h(0,r)
t=v.r
r=new U.jh()
m=U.cI()
m.scr(0,!0)
m.scf(6.283185307179586)
m.sci(0)
m.sa_(0,0)
m.scg(100)
m.sO(0)
m.sc6(0.2)
r.b=m
m.gv().h(0,r.gax())
r.c=null
r.d=!1
r.e=2.5
r.f=2
r.r=4
r.y=!1
r.x=!1
r.z=0
r.Q=null
r.ch=0
r.cx=null
r.cy=null
l=new X.ax(!0,!1,!1)
o=r.c
r.c=l
m=new D.Q("modifiers",o,l,r,p)
m.b=!0
r.M(m)
r.aT(t)
n.h(0,r)
t=v.r
r=new U.jj()
r.c=0.01
r.d=0
r.e=0
l=new X.ax(!1,!1,!1)
r.b=l
p=new D.Q("modifiers",null,l,r,p)
p.b=!0
r.M(p)
r.aT(t)
n.h(0,r)
n.h(0,U.dF(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
t=new M.hc()
x=O.cH(x)
t.d=x
x.b5(t.geR(),t.geS())
t.e=null
t.f=null
t.r=null
t.x=null
k=new X.i6()
k.c=1.0471975511965976
k.d=0.1
k.e=2000
k.sdF(null)
x=k.c
if(!$.m.$2(x,1.0471975511965976)){o=k.c
k.c=1.0471975511965976
x=new D.Q("fov",o,1.0471975511965976,k,[P.x])
x.b=!0
k.aQ(x)}x=k.d
if(!$.m.$2(x,0.1)){o=k.d
k.d=0.1
x=new D.Q("near",o,0.1,k,[P.x])
x.b=!0
k.aQ(x)}x=k.e
if(!$.m.$2(x,2000)){o=k.e
k.e=2000
x=new D.Q("far",o,2000,k,[P.x])
x.b=!0
k.aQ(x)}x=t.a
if(x!==k){if(x!=null)x.gv().P(0,t.gae())
o=t.a
t.a=k
k.gv().h(0,t.gae())
x=new D.Q("camera",o,t.a,t,[X.dA])
x.b=!0
t.ay(x)}j=new X.hl()
x=new V.bQ(0,0,0,1)
j.a=x
j.b=!0
j.c=2000
j.d=!0
j.e=0
j.f=!1
x=V.ei(0,0,1,1)
j.r=x
x=t.b
if(x!==j){if(x!=null)x.gv().P(0,t.gae())
o=t.b
t.b=j
j.gv().h(0,t.gae())
x=new D.Q("target",o,t.b,t,[X.es])
x.b=!0
t.ay(x)}t.sdN(null)
t.sdN(s)
t.d.h(0,u)
t.a.sdF(n)
x=v.d
if(x!==t){if(x!=null)x.gv().P(0,v.gcD())
v.d=t
t.gv().h(0,v.gcD())
v.ef()}x=v.z
if(x==null){x=D.J()
v.z=x}t={func:1,ret:-1,args:[D.y]}
r=H.l(new Q.lx(z,s),t)
p=x.b
if(p==null){t=H.b([],[t])
x.b=t
x=t}else x=p
C.a.h(x,r)
V.lE(v)},
lx:{"^":"p:9;a,b",
$1:function(a){var z,y,x,w
H.j(a,"$isy")
z=this.a
y=this.b
x=y.a
w=[P.i]
z.d_("Vertex Shader","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.d_("Fragment Shader","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dV.prototype
return J.hv.prototype}if(typeof a=="string")return J.bU.prototype
if(a==null)return J.dW.prototype
if(typeof a=="boolean")return J.hu.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bV.prototype
return a}if(a instanceof P.a)return a
return J.cx(a)}
J.c3=function(a){if(typeof a=="string")return J.bU.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bV.prototype
return a}if(a instanceof P.a)return a
return J.cx(a)}
J.cw=function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bV.prototype
return a}if(a instanceof P.a)return a
return J.cx(a)}
J.li=function(a){if(typeof a=="number")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c0.prototype
return a}
J.lj=function(a){if(typeof a=="number")return J.bT.prototype
if(typeof a=="string")return J.bU.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c0.prototype
return a}
J.di=function(a){if(typeof a=="string")return J.bU.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c0.prototype
return a}
J.bi=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bV.prototype
return a}if(a instanceof P.a)return a
return J.cx(a)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).t(a,b)}
J.fE=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.li(a).a6(a,b)}
J.dp=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lj(a).j(a,b)}
J.fF=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lu(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c3(a).k(a,b)}
J.fG=function(a,b,c,d){return J.bi(a).d0(a,b,c,d)}
J.cA=function(a,b,c){return J.c3(a).h5(a,b,c)}
J.cB=function(a,b){return J.cw(a).E(a,b)}
J.fH=function(a,b){return J.cw(a).K(a,b)}
J.fI=function(a){return J.bi(a).gh0(a)}
J.b_=function(a){return J.L(a).gV(a)}
J.b0=function(a){return J.cw(a).gU(a)}
J.b1=function(a){return J.c3(a).gn(a)}
J.fJ=function(a){return J.bi(a).gcl(a)}
J.fK=function(a){return J.bi(a).ghU(a)}
J.dq=function(a){return J.cw(a).hK(a)}
J.fL=function(a,b,c){return J.di(a).aP(a,b,c)}
J.fM=function(a){return J.di(a).hY(a)}
J.ae=function(a){return J.L(a).i(a)}
I.aY=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.c7.prototype
C.k=W.cF.prototype
C.B=W.b2.prototype
C.E=J.n.prototype
C.a=J.b5.prototype
C.h=J.dV.prototype
C.F=J.dW.prototype
C.c=J.bT.prototype
C.i=J.bU.prototype
C.M=J.bV.prototype
C.Q=H.i_.prototype
C.R=W.i0.prototype
C.v=J.i7.prototype
C.w=W.iQ.prototype
C.o=J.c0.prototype
C.x=W.bI.prototype
C.y=W.jz.prototype
C.z=new P.i5()
C.A=new P.jl()
C.j=new P.kl()
C.b=new A.c9(0,"ColorSourceType.None")
C.f=new A.c9(1,"ColorSourceType.Solid")
C.d=new A.c9(2,"ColorSourceType.Texture2D")
C.e=new A.c9(3,"ColorSourceType.TextureCube")
C.l=new P.b3(0)
C.C=new P.b3(5e6)
C.D=new P.hp("element",!0,!1,!1,!1)
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.I=function(getTagFallback) {
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
C.J=function() {
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
C.K=function(hooks) {
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
C.L=function(hooks) {
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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.N=H.b(I.aY(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.i])
C.O=H.b(I.aY(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.i])
C.P=H.b(I.aY([]),[P.i])
C.u=H.b(I.aY([0,0,65498,45055,65535,34815,65534,18431]),[P.D])
C.m=H.b(I.aY(["bind","if","ref","repeat","syntax"]),[P.i])
C.n=H.b(I.aY(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.i])
C.p=new P.jk(!1)
$.au=0
$.bm=null
$.dv=null
$.da=!1
$.fv=null
$.fq=null
$.fB=null
$.cv=null
$.cy=null
$.dj=null
$.be=null
$.bL=null
$.bM=null
$.db=!1
$.R=C.j
$.aD=null
$.cJ=null
$.dR=null
$.dQ=null
$.dM=null
$.dL=null
$.dK=null
$.dJ=null
$.m=V.hU()
$.ec=null
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
I.$lazy(y,x,w)}})(["dI","$get$dI",function(){return H.fu("_$dart_dartClosure")},"cN","$get$cN",function(){return H.fu("_$dart_js")},"eD","$get$eD",function(){return H.az(H.cp({
toString:function(){return"$receiver$"}}))},"eE","$get$eE",function(){return H.az(H.cp({$method$:null,
toString:function(){return"$receiver$"}}))},"eF","$get$eF",function(){return H.az(H.cp(null))},"eG","$get$eG",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eK","$get$eK",function(){return H.az(H.cp(void 0))},"eL","$get$eL",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eI","$get$eI",function(){return H.az(H.eJ(null))},"eH","$get$eH",function(){return H.az(function(){try{null.$method$}catch(z){return z.message}}())},"eN","$get$eN",function(){return H.az(H.eJ(void 0))},"eM","$get$eM",function(){return H.az(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d7","$get$d7",function(){return P.jA()},"bN","$get$bN",function(){return[]},"fi","$get$fi",function(){return P.io("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dG","$get$dG",function(){return{}},"f4","$get$f4",function(){return P.e2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)},"d8","$get$d8",function(){return P.e1(P.i,P.bS)},"eY","$get$eY",function(){return Z.aj(0)},"eW","$get$eW",function(){return Z.aj(511)},"aL","$get$aL",function(){return Z.aj(1)},"aK","$get$aK",function(){return Z.aj(2)},"aJ","$get$aJ",function(){return Z.aj(4)},"aM","$get$aM",function(){return Z.aj(8)},"aN","$get$aN",function(){return Z.aj(16)},"bG","$get$bG",function(){return Z.aj(32)},"bH","$get$bH",function(){return Z.aj(64)},"eX","$get$eX",function(){return Z.aj(96)},"bc","$get$bc",function(){return Z.aj(128)},"aI","$get$aI",function(){return Z.aj(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.y]},{func:1,ret:-1,opt:[D.y]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.K,args:[F.ao]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[P.D,[P.e,E.aS]]},{func:1,ret:P.K,args:[D.y]},{func:1,ret:-1,args:[W.ba]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[,,]},{func:1,ret:P.i,args:[P.D]},{func:1,ret:P.N,args:[W.C]},{func:1,ret:P.N,args:[W.T,P.i,P.i,W.c1]},{func:1,ret:W.C},{func:1,args:[,]},{func:1,ret:P.K,args:[,]},{func:1,ret:P.N,args:[W.ay]},{func:1,ret:P.N,args:[P.i]},{func:1,ret:-1,args:[P.D,[P.e,U.a7]]},{func:1,ret:P.x},{func:1,ret:-1,args:[P.D,[P.e,D.Z]]},{func:1,ret:-1,args:[P.D,[P.e,V.av]]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[P.a_]},{func:1,ret:P.N,args:[P.x,P.x]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:P.N,args:[[P.e,D.Z]]},{func:1,ret:W.T,args:[W.C]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:P.i,args:[P.i]},{func:1,args:[,P.i]},{func:1,ret:V.a8,args:[P.x]},{func:1,ret:P.K,args:[F.aH,P.x,P.x]},{func:1,ret:-1,args:[W.bI]},{func:1,ret:[P.aO,,],args:[,]},{func:1,ret:P.K,args:[P.b9]},{func:1,ret:P.K,args:[W.ab]},{func:1,ret:P.N,args:[V.aQ]},{func:1,ret:P.K,args:[,],opt:[,]},{func:1,args:[P.i]},{func:1,ret:-1,args:[P.a],opt:[P.ar]}]
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
if(x==y)H.lH(d||a)
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
Isolate.aY=a.aY
Isolate.dg=a.dg
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.fy,[])
else Q.fy([])})})()
//# sourceMappingURL=test.dart.js.map
