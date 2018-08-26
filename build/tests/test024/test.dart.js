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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isq)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="p"){processStatics(init.statics[b2]=b3.p,b4)
delete b3.p}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dp(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ds=function(){}
var dart=[["","",,H,{"^":"",nI:{"^":"b;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
dx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cA:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dv==null){H.ml()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c3("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cT()]
if(v!=null)return v
v=H.mq(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cT(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
q:{"^":"b;",
u:function(a,b){return a===b},
gR:function(a){return H.bH(a)},
i:["eb",function(a){return"Instance of '"+H.b9(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hK:{"^":"q;",
i:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$isah:1},
e7:{"^":"q;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0},
$isG:1},
cU:{"^":"q;",
gR:function(a){return 0},
i:["ec",function(a){return String(a)}]},
iu:{"^":"cU;"},
c4:{"^":"cU;"},
c0:{"^":"cU;",
i:function(a){var z=a[$.$get$dU()]
if(z==null)return this.ec(a)
return"JavaScript function for "+H.l(J.a8(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscP:1},
b5:{"^":"q;$ti",
h:function(a,b){H.z(b,H.x(a,0))
if(!!a.fixed$length)H.t(P.B("add"))
a.push(b)},
L:function(a,b){var z
if(!!a.fixed$length)H.t(P.B("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b1(a))}},
U:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hh:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b1(a))}return y},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bF:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a0(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.x(a,0)])
return H.f(a.slice(b,c),[H.x(a,0)])},
gay:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hI())},
aw:function(a,b,c,d){var z
H.z(d,H.x(a,0))
if(!!a.immutable$list)H.t(P.B("fill range"))
P.aJ(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.D(0,1))a[z]=d},
bm:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.cR(a,"[","]")},
gZ:function(a){return new J.as(a,a.length,0,[H.x(a,0)])},
gR:function(a){return H.bH(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cb(b,"newLength",null))
if(b<0)throw H.a(P.a0(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aB(a,b))
if(b>=a.length||b<0)throw H.a(H.aB(a,b))
return a[b]},
m:function(a,b,c){H.C(b)
H.z(c,H.x(a,0))
if(!!a.immutable$list)H.t(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aB(a,b))
if(b>=a.length||b<0)throw H.a(H.aB(a,b))
a[b]=c},
$isj:1,
$isc:1,
p:{
hJ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a0(a,0,4294967295,"length",null))
return J.e5(new Array(a),b)},
e5:function(a,b){return J.bB(H.f(a,[b]))},
bB:function(a){H.bV(a)
a.fixed$length=Array
return a}}},
nH:{"^":"b5;$ti"},
as:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bZ:{"^":"q;",
ghn:function(a){return a===0?1/a<0:a<0},
dv:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
e_:function(a,b){var z
if(b>20)throw H.a(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghn(a))return"-"+z
return z},
b7:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.T(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.B("Unexpected toString result: "+z))
x=J.aC(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a*b},
ba:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ee:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cV(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.cV(a,b)},
cV:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aG:function(a,b){var z
if(a>0)z=this.cT(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ft:function(a,b){if(b<0)throw H.a(H.ae(b))
return this.cT(a,b)},
cT:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a<b},
$isr:1,
$isW:1},
e6:{"^":"bZ;",$ism:1},
hL:{"^":"bZ;"},
c_:{"^":"q;",
T:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aB(a,b))
if(b<0)throw H.a(H.aB(a,b))
if(b>=a.length)H.t(H.aB(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.a(H.aB(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.K(b)
if(typeof b!=="string")throw H.a(P.cb(b,null,null))
return a+b},
aN:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ae(b))
c=P.aJ(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ae(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a6:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ae(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a5:function(a,b){return this.a6(a,b,0)},
v:function(a,b,c){H.C(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.a(P.cp(b,null,null))
if(b>c)throw H.a(P.cp(b,null,null))
if(c>a.length)throw H.a(P.cp(c,null,null))
return a.substring(b,c)},
az:function(a,b){return this.v(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hA:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ab:function(a,b){return this.hA(a,b," ")},
dF:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dE:function(a,b){return this.dF(a,b,0)},
h7:function(a,b,c){if(c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
return H.mL(a,b,c)},
i:function(a){return a},
gR:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isek:1,
$isi:1}}],["","",,H,{"^":"",
cB:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hI:function(){return new P.j1("No element")},
hb:{"^":"jw;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.T(this.a,b)},
$asct:function(){return[P.m]},
$asy:function(){return[P.m]},
$asj:function(){return[P.m]},
$asc:function(){return[P.m]}},
hs:{"^":"j;"},
i_:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z,y,x,w
z=this.a
y=J.aC(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b1(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
i7:{"^":"j;a,b,$ti",
gZ:function(a){return new H.i8(J.bu(this.a),this.b,this.$ti)},
gl:function(a){return J.ar(this.a)},
I:function(a,b){return this.b.$1(J.cG(this.a,b))},
$asj:function(a,b){return[b]}},
i8:{"^":"cS;0a,b,c,$ti",
F:function(){var z=this.b
if(z.F()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascS:function(a,b){return[b]}},
k0:{"^":"j;a,b,$ti",
gZ:function(a){return new H.k1(J.bu(this.a),this.b,this.$ti)}},
k1:{"^":"cS;a,b,$ti",
F:function(){var z,y
for(z=this.a,y=this.b;z.F();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
cg:{"^":"b;$ti"},
ct:{"^":"b;$ti",
m:function(a,b,c){H.C(b)
H.z(c,H.aD(this,"ct",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
aw:function(a,b,c,d){H.z(d,H.aD(this,"ct",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
jw:{"^":"cl+ct;"}}],["","",,H,{"^":"",
hf:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
mg:function(a){return init.types[H.C(a)]},
fJ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a8(a)
if(typeof z!=="string")throw H.a(H.ae(a))
return z},
bH:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iE:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.K(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.G(w,u)|32)>x)return}return parseInt(a,b)},
b9:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.M(a).$isc4){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.G(w,0)===36)w=C.b.az(w,1)
r=H.dw(H.bV(H.aY(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iw:function(){if(!!self.location)return self.location.href
return},
em:function(a){var z,y,x,w,v
H.bV(a)
z=J.ar(a)
if(typeof z!=="number")return z.e8()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iF:function(a){var z,y,x,w
z=H.f([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ae(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aG(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ae(w))}return H.em(z)},
en:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ae(x))
if(x<0)throw H.a(H.ae(x))
if(x>65535)return H.iF(a)}return H.em(a)},
iG:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.e8()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cn:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aG(z,10))>>>0,56320|z&1023)}}throw H.a(P.a0(a,0,1114111,null,null))},
ac:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iD:function(a){return a.b?H.ac(a).getUTCFullYear()+0:H.ac(a).getFullYear()+0},
iB:function(a){return a.b?H.ac(a).getUTCMonth()+1:H.ac(a).getMonth()+1},
ix:function(a){return a.b?H.ac(a).getUTCDate()+0:H.ac(a).getDate()+0},
iy:function(a){return a.b?H.ac(a).getUTCHours()+0:H.ac(a).getHours()+0},
iA:function(a){return a.b?H.ac(a).getUTCMinutes()+0:H.ac(a).getMinutes()+0},
iC:function(a){return a.b?H.ac(a).getUTCSeconds()+0:H.ac(a).getSeconds()+0},
iz:function(a){return a.b?H.ac(a).getUTCMilliseconds()+0:H.ac(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ae(a))},
d:function(a,b){if(a==null)J.ar(a)
throw H.a(H.aB(a,b))},
aB:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.C(J.ar(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.R(b,a,"index",null,z)
return P.cp(b,"index",null)},
ma:function(a,b,c){if(a>c)return new P.co(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.co(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
ae:function(a){return new P.aE(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.ej()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fQ})
z.name=""}else z.toString=H.fQ
return z},
fQ:function(){return J.a8(this.dartException)},
t:function(a){throw H.a(a)},
D:function(a){throw H.a(P.b1(a))},
aq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mO(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aG(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cV(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ei(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eD()
u=$.$get$eE()
t=$.$get$eF()
s=$.$get$eG()
r=$.$get$eK()
q=$.$get$eL()
p=$.$get$eI()
$.$get$eH()
o=$.$get$eN()
n=$.$get$eM()
m=v.aa(y)
if(m!=null)return z.$1(H.cV(H.K(y),m))
else{m=u.aa(y)
if(m!=null){m.method="call"
return z.$1(H.cV(H.K(y),m))}else{m=t.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=r.aa(y)
if(m==null){m=q.aa(y)
if(m==null){m=p.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=o.aa(y)
if(m==null){m=n.aa(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ei(H.K(y),m))}}return z.$1(new H.jv(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.et()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.et()
return a},
bs:function(a){var z
if(a==null)return new H.fg(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fg(a)},
md:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mn:function(a,b,c,d,e,f){H.e(a,"$iscP")
switch(H.C(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bq:function(a,b){var z
H.C(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mn)
a.$identity=z
return z},
ha:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$isc){z.$reflectionInfo=d
x=H.iL(z).r}else x=d
w=e?Object.create(new H.j2().constructor.prototype):Object.create(new H.cJ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aw
if(typeof u!=="number")return u.D()
$.aw=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dQ(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mg,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dJ:H.cK
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dQ(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
h7:function(a,b,c,d){var z=H.cK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dQ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h9(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h7(y,!w,z,b)
if(y===0){w=$.aw
if(typeof w!=="number")return w.D()
$.aw=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bv
if(v==null){v=H.cc("self")
$.bv=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aw
if(typeof w!=="number")return w.D()
$.aw=w+1
t+=w
w="return function("+t+"){return this."
v=$.bv
if(v==null){v=H.cc("self")
$.bv=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
h8:function(a,b,c,d){var z,y
z=H.cK
y=H.dJ
switch(b?-1:a){case 0:throw H.a(H.iV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h9:function(a,b){var z,y,x,w,v,u,t,s
z=$.bv
if(z==null){z=H.cc("self")
$.bv=z}y=$.dI
if(y==null){y=H.cc("receiver")
$.dI=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h8(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aw
if(typeof y!=="number")return y.D()
$.aw=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aw
if(typeof y!=="number")return y.D()
$.aw=y+1
return new Function(z+y+"}")()},
dp:function(a,b,c,d,e,f,g){var z,y
z=J.bB(H.bV(b))
H.C(c)
y=!!J.M(d).$isc?J.bB(d):d
return H.ha(a,z,c,y,!!e,f,g)},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.av(a,"String"))},
mb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.av(a,"double"))},
mz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.av(a,"num"))},
fC:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.av(a,"bool"))},
C:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.av(a,"int"))},
fO:function(a,b){throw H.a(H.av(a,H.K(b).substring(3)))},
mB:function(a,b){var z=J.aC(b)
throw H.a(H.h6(a,z.v(b,3,z.gl(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.fO(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.mB(a,b)},
bV:function(a){if(a==null)return a
if(!!J.M(a).$isc)return a
throw H.a(H.av(a,"List"))},
fL:function(a,b){if(a==null)return a
if(!!J.M(a).$isc)return a
if(J.M(a)[b])return a
H.fO(a,b)},
fF:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.C(z)]
else return a.$S()}return},
c6:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fF(J.M(a))
if(z==null)return!1
y=H.fI(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dk)return a
$.dk=!0
try{if(H.c6(a,b))return a
z=H.c9(b)
y=H.av(a,z)
throw H.a(y)}finally{$.dk=!1}},
dt:function(a,b){if(a!=null&&!H.dn(a,b))H.t(H.av(a,H.c9(b)))
return a},
fx:function(a){var z
if(a instanceof H.n){z=H.fF(J.M(a))
if(z!=null)return H.c9(z)
return"Closure"}return H.b9(a)},
mM:function(a){throw H.a(new P.hj(H.K(a)))},
fG:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
aY:function(a){if(a==null)return
return a.$ti},
oP:function(a,b,c){return H.bt(a["$as"+H.l(c)],H.aY(b))},
aX:function(a,b,c,d){var z
H.K(c)
H.C(d)
z=H.bt(a["$as"+H.l(c)],H.aY(b))
return z==null?null:z[d]},
aD:function(a,b,c){var z
H.K(b)
H.C(c)
z=H.bt(a["$as"+H.l(b)],H.aY(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.C(b)
z=H.aY(a)
return z==null?null:z[b]},
c9:function(a){var z=H.aZ(a,null)
return z},
aZ:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dw(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.C(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.lT(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aZ(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aZ(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aZ(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aZ(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mc(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.K(z[l])
n=n+m+H.aZ(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dw:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.ak("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aZ(u,c)}v="<"+z.i(0)+">"
return v},
bt:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bp:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aY(a)
y=J.M(a)
if(y[b]==null)return!1
return H.fA(H.bt(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.K(b)
H.bV(c)
H.K(d)
if(a==null)return a
z=H.bp(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dw(c,0,null)
throw H.a(H.av(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fA:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ao(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ao(a[y],b,c[y],d))return!1
return!0},
oN:function(a,b,c){return a.apply(b,H.bt(J.M(b)["$as"+H.l(c)],H.aY(b)))},
fK:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.fK(z)}return!1},
dn:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.fK(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dn(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c6(a,b)}y=J.M(a).constructor
x=H.aY(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ao(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dn(a,b))throw H.a(H.av(a,H.c9(b)))
return a},
ao:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ao(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fI(a,b,c,d)
if('func' in a)return c.builtin$cls==="cP"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ao("type" in a?a.type:null,b,x,d)
else if(H.ao(a,b,x,d))return!0
else{if(!('$is'+"bz" in y.prototype))return!1
w=y.prototype["$as"+"bz"]
v=H.bt(w,z?a.slice(1):null)
return H.ao(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c9(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fA(H.bt(r,z),b,u,d)},
fI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ao(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ao(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ao(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ao(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.my(m,b,l,d)},
my:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ao(c[w],d,a[w],b))return!1}return!0},
oO:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
mq:function(a){var z,y,x,w,v,u
z=H.K($.fH.$1(a))
y=$.cz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.K($.fz.$2(a,z))
if(z!=null){y=$.cz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cD(x)
$.cz[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cC[z]=x
return x}if(v==="-"){u=H.cD(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fN(a,x)
if(v==="*")throw H.a(P.c3(z))
if(init.leafTags[z]===true){u=H.cD(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fN(a,x)},
fN:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dx(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cD:function(a){return J.dx(a,!1,null,!!a.$isF)},
mx:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cD(z)
else return J.dx(z,c,null,null)},
ml:function(){if(!0===$.dv)return
$.dv=!0
H.mm()},
mm:function(){var z,y,x,w,v,u,t,s
$.cz=Object.create(null)
$.cC=Object.create(null)
H.mh()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fP.$1(v)
if(u!=null){t=H.mx(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mh:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.bo(C.I,H.bo(C.N,H.bo(C.u,H.bo(C.u,H.bo(C.M,H.bo(C.J,H.bo(C.K(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fH=new H.mi(v)
$.fz=new H.mj(u)
$.fP=new H.mk(t)},
bo:function(a,b){return a(b)||b},
mL:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
he:{"^":"b;$ti",
i:function(a){return P.cX(this)},
m:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
return H.hf()},
$isH:1},
hg:{"^":"he;a,b,c,$ti",
gl:function(a){return this.a},
c2:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.c2(0,b))return
return this.cJ(b)},
cJ:function(a){return this.b[H.K(a)]},
J:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.h(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cJ(v),z))}}},
iK:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iL:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bB(z)
y=z[0]
x=z[1]
return new H.iK(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ji:{"^":"b;a,b,c,d,e,f",
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
p:{
az:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ji(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eJ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ir:{"^":"a4;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
ei:function(a,b){return new H.ir(a,b==null?null:b.method)}}},
hO:{"^":"a4;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
cV:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hO(a,y,z?null:b.receiver)}}},
jv:{"^":"a4;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mO:{"^":"n:16;a",
$1:function(a){if(!!J.M(a).$isa4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fg:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isau:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.b9(this).trim()+"'"},
ge6:function(){return this},
$iscP:1,
ge6:function(){return this}},
ey:{"^":"n;"},
j2:{"^":"ey;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cJ:{"^":"ey;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cJ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gR:function(a){var z,y
z=this.c
if(z==null)y=H.bH(this.a)
else y=typeof z!=="object"?J.b_(z):H.bH(z)
return(y^H.bH(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.b9(z)+"'")},
p:{
cK:function(a){return a.a},
dJ:function(a){return a.c},
cc:function(a){var z,y,x,w,v
z=new H.cJ("self","target","receiver","name")
y=J.bB(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jj:{"^":"a4;a",
i:function(a){return this.a},
p:{
av:function(a,b){return new H.jj("TypeError: "+H.l(P.cf(a))+": type '"+H.fx(a)+"' is not a subtype of type '"+b+"'")}}},
h5:{"^":"a4;a",
i:function(a){return this.a},
p:{
h6:function(a,b){return new H.h5("CastError: "+H.l(P.cf(a))+": type '"+H.fx(a)+"' is not a subtype of type '"+b+"'")}}},
iU:{"^":"a4;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
iV:function(a){return new H.iU(a)}}},
ck:{"^":"i4;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gax:function(a){return new H.hT(this,[H.x(this,0)])},
c2:function(a,b){var z=this.b
if(z==null)return!1
return this.ey(z,b)},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bd(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bd(w,b)
x=y==null?null:y.b
return x}else return this.hl(b)},
hl:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cL(z,this.dG(a))
x=this.dH(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bO()
this.b=z}this.cw(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bO()
this.c=y}this.cw(y,b,c)}else this.hm(b,c)},
hm:function(a,b){var z,y,x,w
H.z(a,H.x(this,0))
H.z(b,H.x(this,1))
z=this.d
if(z==null){z=this.bO()
this.d=z}y=this.dG(a)
x=this.cL(z,y)
if(x==null)this.bV(z,y,[this.bP(a,b)])
else{w=this.dH(x,a)
if(w>=0)x[w].b=b
else x.push(this.bP(a,b))}},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b1(this))
z=z.c}},
cw:function(a,b,c){var z
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
z=this.bd(a,b)
if(z==null)this.bV(a,b,this.bP(b,c))
else z.b=c},
eI:function(){this.r=this.r+1&67108863},
bP:function(a,b){var z,y
z=new H.hS(H.z(a,H.x(this,0)),H.z(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eI()
return z},
dG:function(a){return J.b_(a)&0x3ffffff},
dH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.cX(this)},
bd:function(a,b){return a[b]},
cL:function(a,b){return a[b]},
bV:function(a,b,c){a[b]=c},
eB:function(a,b){delete a[b]},
ey:function(a,b){return this.bd(a,b)!=null},
bO:function(){var z=Object.create(null)
this.bV(z,"<non-identifier-key>",z)
this.eB(z,"<non-identifier-key>")
return z},
$isea:1},
hS:{"^":"b;a,b,0c,0d"},
hT:{"^":"hs;a,$ti",
gl:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.hU(z,z.r,this.$ti)
y.c=z.e
return y}},
hU:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b1(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mi:{"^":"n:16;a",
$1:function(a){return this.a(a)}},
mj:{"^":"n:39;a",
$2:function(a,b){return this.a(a,b)}},
mk:{"^":"n:28;a",
$1:function(a){return this.a(H.K(a))}},
hM:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isek:1,
$isiM:1,
p:{
hN:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.X("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mc:function(a){return J.e5(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bm:function(a){return a},
im:function(a){return new Int8Array(a)},
aA:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aB(b,a))},
lN:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.ma(a,b,c))
return b},
eh:{"^":"q;",$iseh:1,"%":"ArrayBuffer"},
d0:{"^":"q;",$isd0:1,"%":"DataView;ArrayBufferView;d_|fa|fb|io|fc|fd|aW"},
d_:{"^":"d0;",
gl:function(a){return a.length},
$isF:1,
$asF:I.ds},
io:{"^":"fb;",
j:function(a,b){H.aA(b,a,a.length)
return a[b]},
m:function(a,b,c){H.C(b)
H.mb(c)
H.aA(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.r]},
$asy:function(){return[P.r]},
$isj:1,
$asj:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
"%":"Float32Array|Float64Array"},
aW:{"^":"fd;",
m:function(a,b,c){H.C(b)
H.C(c)
H.aA(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.m]},
$asy:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
nT:{"^":"aW;",
j:function(a,b){H.aA(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nU:{"^":"aW;",
j:function(a,b){H.aA(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nV:{"^":"aW;",
j:function(a,b){H.aA(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nW:{"^":"aW;",
j:function(a,b){H.aA(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nX:{"^":"aW;",
j:function(a,b){H.aA(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nY:{"^":"aW;",
gl:function(a){return a.length},
j:function(a,b){H.aA(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d1:{"^":"aW;",
gl:function(a){return a.length},
j:function(a,b){H.aA(b,a,a.length)
return a[b]},
bF:function(a,b,c){return new Uint8Array(a.subarray(b,H.lN(b,c,a.length)))},
$isd1:1,
$isO:1,
"%":";Uint8Array"},
fa:{"^":"d_+y;"},
fb:{"^":"fa+cg;"},
fc:{"^":"d_+y;"},
fd:{"^":"fc+cg;"}}],["","",,P,{"^":"",
k3:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.m_()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bq(new P.k5(z),1)).observe(y,{childList:true})
return new P.k4(z,y,x)}else if(self.setImmediate!=null)return P.m0()
return P.m1()},
oC:[function(a){self.scheduleImmediate(H.bq(new P.k6(H.h(a,{func:1,ret:-1})),0))},"$1","m_",4,0,11],
oD:[function(a){self.setImmediate(H.bq(new P.k7(H.h(a,{func:1,ret:-1})),0))},"$1","m0",4,0,11],
oE:[function(a){H.h(a,{func:1,ret:-1})
P.l6(0,a)},"$1","m1",4,0,11],
eB:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bg]})
z=C.d.a2(a.a,1000)
return P.l7(z<0?0:z,b)},
lW:function(a,b){if(H.c6(a,{func:1,args:[P.b,P.au]}))return b.hJ(a,null,P.b,P.au)
if(H.c6(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lV:function(){var z,y
for(;z=$.bn,z!=null;){$.bT=null
y=z.b
$.bn=y
if(y==null)$.bS=null
z.a.$0()}},
oM:[function(){$.dl=!0
try{P.lV()}finally{$.bT=null
$.dl=!1
if($.bn!=null)$.$get$de().$1(P.fB())}},"$0","fB",0,0,3],
fw:function(a){var z=new P.f3(H.h(a,{func:1,ret:-1}))
if($.bn==null){$.bS=z
$.bn=z
if(!$.dl)$.$get$de().$1(P.fB())}else{$.bS.b=z
$.bS=z}},
lZ:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bn
if(z==null){P.fw(a)
$.bT=$.bS
return}y=new P.f3(a)
x=$.bT
if(x==null){y.b=z
$.bT=y
$.bn=y}else{y.b=x.b
x.b=y
$.bT=y
if(y.b==null)$.bS=y}},
mC:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.U
if(C.j===y){P.cy(null,null,C.j,a)
return}y.toString
P.cy(null,null,y,H.h(y.d3(a),z))},
jg:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bg]}
H.h(b,z)
y=$.U
if(y===C.j){y.toString
return P.eB(a,b)}x=y.d4(b,P.bg)
$.U.toString
return P.eB(a,H.h(x,z))},
cx:function(a,b,c,d,e){var z={}
z.a=d
P.lZ(new P.lX(z,e))},
fs:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.U
if(y===c)return d.$0()
$.U=c
z=y
try{y=d.$0()
return y}finally{$.U=z}},
ft:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.U
if(y===c)return d.$1(e)
$.U=c
z=y
try{y=d.$1(e)
return y}finally{$.U=z}},
lY:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.U
if(y===c)return d.$2(e,f)
$.U=c
z=y
try{y=d.$2(e,f)
return y}finally{$.U=z}},
cy:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.d3(d):c.h3(d,-1)
P.fw(d)},
k5:{"^":"n:26;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
k4:{"^":"n:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
k6:{"^":"n:0;a",
$0:function(){this.a.$0()}},
k7:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fj:{"^":"b;a,0b,c",
en:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bq(new P.l9(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
eo:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bq(new P.l8(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbg:1,
p:{
l6:function(a,b){var z=new P.fj(!0,0)
z.en(a,b)
return z},
l7:function(a,b){var z=new P.fj(!1,0)
z.eo(a,b)
return z}}},
l9:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
l8:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.ee(w,x)}z.c=y
this.d.$1(z)}},
bl:{"^":"b;0a,b,c,d,e,$ti",
hr:function(a){if(this.c!==6)return!0
return this.b.b.cm(H.h(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
hk:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.c6(z,{func:1,args:[P.b,P.au]}))return H.dt(w.hQ(z,a.a,a.b,null,y,P.au),x)
else return H.dt(w.cm(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aR:{"^":"b;cU:a<,b,0fk:c<,$ti",
dZ:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.U
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lW(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aR(0,$.U,[c])
w=b==null?1:3
this.cz(new P.bl(x,w,a,b,[z,c]))
return x},
hT:function(a,b){return this.dZ(a,null,b)},
cz:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbl")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaR")
z=y.a
if(z<4){y.cz(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cy(null,null,z,H.h(new P.km(this,a),{func:1,ret:-1}))}},
cP:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbl")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaR")
y=u.a
if(y<4){u.cP(a)
return}this.a=y
this.c=u.c}z.a=this.bg(a)
y=this.b
y.toString
P.cy(null,null,y,H.h(new P.kr(z,this),{func:1,ret:-1}))}},
bR:function(){var z=H.e(this.c,"$isbl")
this.c=null
return this.bg(z)},
bg:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cE:function(a){var z,y,x,w
z=H.x(this,0)
H.dt(a,{futureOr:1,type:z})
y=this.$ti
x=H.bp(a,"$isbz",y,"$asbz")
if(x){z=H.bp(a,"$isaR",y,null)
if(z)P.f6(a,this)
else P.kn(a,this)}else{w=this.bR()
H.z(a,z)
this.a=4
this.c=a
P.bN(this,w)}},
bK:[function(a,b){var z
H.e(b,"$isau")
z=this.bR()
this.a=8
this.c=new P.ai(a,b)
P.bN(this,z)},function(a){return this.bK(a,null)},"i0","$2","$1","gew",4,2,29],
$isbz:1,
p:{
kn:function(a,b){var z,y,x
b.a=1
try{a.dZ(new P.ko(b),new P.kp(b),null)}catch(x){z=H.aq(x)
y=H.bs(x)
P.mC(new P.kq(b,z,y))}},
f6:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaR")
if(z>=4){y=b.bR()
b.a=a.a
b.c=a.c
P.bN(b,y)}else{y=H.e(b.c,"$isbl")
b.a=2
b.c=a
a.cP(y)}},
bN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isai")
y=y.b
u=v.a
t=v.b
y.toString
P.cx(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bN(z.a,b)}y=z.a
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
if(p){H.e(r,"$isai")
y=y.b
u=r.a
t=r.b
y.toString
P.cx(null,null,y,u,t)
return}o=$.U
if(o==null?q!=null:o!==q)$.U=q
else o=null
y=b.c
if(y===8)new P.ku(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kt(x,b,r).$0()}else if((y&2)!==0)new P.ks(z,x,b).$0()
if(o!=null)$.U=o
y=x.b
if(!!J.M(y).$isbz){if(y.a>=4){n=H.e(t.c,"$isbl")
t.c=null
b=t.bg(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f6(y,t)
return}}m=b.b
n=H.e(m.c,"$isbl")
m.c=null
b=m.bg(n)
y=x.a
u=x.b
if(!y){H.z(u,H.x(m,0))
m.a=4
m.c=u}else{H.e(u,"$isai")
m.a=8
m.c=u}z.a=m
y=m}}}},
km:{"^":"n:0;a,b",
$0:function(){P.bN(this.a,this.b)}},
kr:{"^":"n:0;a,b",
$0:function(){P.bN(this.b,this.a.a)}},
ko:{"^":"n:26;a",
$1:function(a){var z=this.a
z.a=0
z.cE(a)}},
kp:{"^":"n:51;a",
$2:function(a,b){this.a.bK(a,H.e(b,"$isau"))},
$1:function(a){return this.$2(a,null)}},
kq:{"^":"n:0;a,b,c",
$0:function(){this.a.bK(this.b,this.c)}},
ku:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dX(H.h(w.d,{func:1}),null)}catch(v){y=H.aq(v)
x=H.bs(v)
if(this.d){w=H.e(this.a.a.c,"$isai").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isai")
else u.b=new P.ai(y,x)
u.a=!0
return}if(!!J.M(z).$isbz){if(z instanceof P.aR&&z.gcU()>=4){if(z.gcU()===8){w=this.b
w.b=H.e(z.gfk(),"$isai")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hT(new P.kv(t),null)
w.a=!1}}},
kv:{"^":"n:34;a",
$1:function(a){return this.a}},
kt:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.z(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cm(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aq(t)
y=H.bs(t)
x=this.a
x.b=new P.ai(z,y)
x.a=!0}}},
ks:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isai")
w=this.c
if(w.hr(z)&&w.e!=null){v=this.b
v.b=w.hk(z)
v.a=!1}}catch(u){y=H.aq(u)
x=H.bs(u)
w=H.e(this.a.a.c,"$isai")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ai(y,x)
s.a=!0}}},
f3:{"^":"b;a,0b"},
d6:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aR(0,$.U,[P.m])
z.a=0
this.hq(new P.j5(z,this),!0,new P.j6(z,y),y.gew())
return y}},
j5:{"^":"n;a,b",
$1:function(a){H.z(a,H.aD(this.b,"d6",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.aD(this.b,"d6",0)]}}},
j6:{"^":"n:0;a,b",
$0:function(){this.b.cE(this.a.a)}},
eu:{"^":"b;$ti"},
j4:{"^":"b;"},
bg:{"^":"b;"},
ai:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa4:1},
lB:{"^":"b;",$isoB:1},
lX:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ej()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
kP:{"^":"lB;",
hR:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.U){a.$0()
return}P.fs(null,null,this,a,-1)}catch(x){z=H.aq(x)
y=H.bs(x)
P.cx(null,null,this,z,H.e(y,"$isau"))}},
hS:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.U){a.$1(b)
return}P.ft(null,null,this,a,b,-1,c)}catch(x){z=H.aq(x)
y=H.bs(x)
P.cx(null,null,this,z,H.e(y,"$isau"))}},
h3:function(a,b){return new P.kR(this,H.h(a,{func:1,ret:b}),b)},
d3:function(a){return new P.kQ(this,H.h(a,{func:1,ret:-1}))},
d4:function(a,b){return new P.kS(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
dX:function(a,b){H.h(a,{func:1,ret:b})
if($.U===C.j)return a.$0()
return P.fs(null,null,this,a,b)},
cm:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.U===C.j)return a.$1(b)
return P.ft(null,null,this,a,b,c,d)},
hQ:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.U===C.j)return a.$2(b,c)
return P.lY(null,null,this,a,b,c,d,e,f)},
hJ:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
kR:{"^":"n;a,b,c",
$0:function(){return this.a.dX(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kQ:{"^":"n:3;a,b",
$0:function(){return this.a.hR(this.b)}},
kS:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.hS(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hV:function(a,b,c,d,e){return new H.ck(0,0,[d,e])},
hW:function(a,b,c){H.bV(a)
return H.w(H.md(a,new H.ck(0,0,[b,c])),"$isea",[b,c],"$asea")},
eb:function(a,b){return new H.ck(0,0,[a,b])},
hZ:function(a,b,c,d){return new P.kB(0,0,[d])},
hH:function(a,b,c){var z,y
if(P.dm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bU()
C.a.h(y,a)
try{P.lU(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.ev(b,H.fL(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cR:function(a,b,c){var z,y,x
if(P.dm(a))return b+"..."+c
z=new P.ak(b)
y=$.$get$bU()
C.a.h(y,a)
try{x=z
x.a=P.ev(x.gaD(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaD()+c
y=z.gaD()
return y.charCodeAt(0)==0?y:y},
dm:function(a){var z,y
for(z=0;y=$.$get$bU(),z<y.length;++z)if(a===y[z])return!0
return!1},
lU:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.F())return
w=H.l(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.F()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.F()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.F();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
hX:function(a,b,c){var z=P.hV(null,null,null,b,c)
a.J(0,new P.hY(z,b,c))
return z},
cX:function(a){var z,y,x
z={}
if(P.dm(a))return"{...}"
y=new P.ak("")
try{C.a.h($.$get$bU(),a)
x=y
x.a=x.gaD()+"{"
z.a=!0
J.dC(a,new P.i5(z,y))
z=y
z.a=z.gaD()+"}"}finally{z=$.$get$bU()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaD()
return z.charCodeAt(0)==0?z:z},
kB:{"^":"kw;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){return P.f9(this,this.r,H.x(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dg()
this.b=z}return this.cC(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dg()
this.c=y}return this.cC(y,b)}else return this.ep(0,b)},
ep:function(a,b){var z,y,x
H.z(b,H.x(this,0))
z=this.d
if(z==null){z=P.dg()
this.d=z}y=this.cF(b)
x=z[y]
if(x==null)z[y]=[this.bJ(b)]
else{if(this.cK(x,b)>=0)return!1
x.push(this.bJ(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cQ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cQ(this.c,b)
else return this.fd(0,b)},
fd:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eF(z,b)
x=this.cK(y,b)
if(x<0)return!1
this.cW(y.splice(x,1)[0])
return!0},
cC:function(a,b){H.z(b,H.x(this,0))
if(H.e(a[b],"$isdf")!=null)return!1
a[b]=this.bJ(b)
return!0},
cQ:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdf")
if(z==null)return!1
this.cW(z)
delete a[b]
return!0},
cD:function(){this.r=this.r+1&67108863},
bJ:function(a){var z,y
z=new P.df(H.z(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cD()
return z},
cW:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cD()},
cF:function(a){return J.b_(a)&0x3ffffff},
eF:function(a,b){return a[this.cF(b)]},
cK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
p:{
dg:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
df:{"^":"b;a,0b,0c"},
kC:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b1(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.x(this,0))
this.c=z.b
return!0}}},
p:{
f9:function(a,b,c){var z=new P.kC(a,b,[c])
z.c=a.e
return z}}},
kw:{"^":"iW;"},
hY:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cl:{"^":"kD;",$isj:1,$isc:1},
y:{"^":"b;$ti",
gZ:function(a){return new H.i_(a,this.gl(a),0,[H.aX(this,a,"y",0)])},
I:function(a,b){return this.j(a,b)},
hV:function(a,b){var z,y,x
z=H.f([],[H.aX(this,a,"y",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
hU:function(a){return this.hV(a,!0)},
aw:function(a,b,c,d){var z
H.z(d,H.aX(this,a,"y",0))
P.aJ(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cR(a,"[","]")}},
i4:{"^":"af;"},
i5:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
af:{"^":"b;$ti",
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aX(this,a,"af",0),H.aX(this,a,"af",1)]})
for(z=J.bu(this.gax(a));z.F();){y=z.gO(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.ar(this.gax(a))},
i:function(a){return P.cX(a)},
$isH:1},
le:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
i6:{"^":"b;$ti",
j:function(a,b){return J.dB(this.a,b)},
m:function(a,b,c){J.cE(this.a,H.z(b,H.x(this,0)),H.z(c,H.x(this,1)))},
J:function(a,b){J.dC(this.a,H.h(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gl:function(a){return J.ar(this.a)},
i:function(a){return J.a8(this.a)},
$isH:1},
eU:{"^":"lf;a,$ti"},
iX:{"^":"b;$ti",
i:function(a){return P.cR(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dE("index"))
if(b<0)H.t(P.a0(b,0,null,"index",null))
for(z=P.f9(this,this.r,H.x(this,0)),y=0;z.F();){x=z.d
if(b===y)return x;++y}throw H.a(P.R(b,this,"index",null,y))},
$isj:1},
iW:{"^":"iX;"},
kD:{"^":"b+y;"},
lf:{"^":"i6+le;$ti"}}],["","",,P,{"^":"",h2:{"^":"bW;a",
ht:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aJ(c,d,b.length,null,null,null)
z=$.$get$f4()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.G(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cB(C.b.G(b,s))
o=H.cB(C.b.G(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ak("")
w.a+=C.b.v(b,x,y)
w.a+=H.cn(r)
x=s
continue}}throw H.a(P.X("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dH(b,u,d,v,t,k)
else{j=C.d.ba(k-1,4)+1
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aN(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dH(b,u,d,v,t,i)
else{j=C.d.ba(i,4)
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aN(b,d,d,j===2?"==":"=")}return b},
$asbW:function(){return[[P.c,P.m],P.i]},
p:{
dH:function(a,b,c,d,e,f){if(C.d.ba(f,4)!==0)throw H.a(P.X("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.X("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.X("Invalid base64 padding, more than two '=' characters",a,b))}}},h3:{"^":"bw;a",
$asbw:function(){return[[P.c,P.m],P.i]}},bW:{"^":"b;$ti"},bw:{"^":"j4;$ti"},hu:{"^":"bW;",
$asbW:function(){return[P.i,[P.c,P.m]]}},jH:{"^":"hu;a",
ghf:function(){return C.F}},jO:{"^":"bw;",
aT:function(a,b,c){var z,y,x,w
z=a.length
P.aJ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lA(0,0,x)
if(w.eD(a,b,z)!==z)w.cX(J.fW(a,z-1),0)
return C.T.bF(x,0,w.b)},
c3:function(a){return this.aT(a,0,null)},
$asbw:function(){return[P.i,[P.c,P.m]]}},lA:{"^":"b;a,b,c",
cX:function(a,b){var z,y,x,w,v
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
eD:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.T(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.G(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cX(w,C.b.G(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},jI:{"^":"bw;a",
aT:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.jJ(!1,a,b,c)
if(z!=null)return z
y=J.ar(a)
P.aJ(b,c,y,null,null,null)
x=new P.ak("")
w=new P.lx(!1,x,!0,0,0,0)
w.aT(a,b,y)
w.hg(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
c3:function(a){return this.aT(a,0,null)},
$asbw:function(){return[[P.c,P.m],P.i]},
p:{
jJ:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.jK(!1,b,c,d)
return},
jK:function(a,b,c,d){var z,y,x
z=$.$get$eZ()
if(z==null)return
y=0===c
if(y&&!0)return P.dc(z,b)
x=b.length
d=P.aJ(c,d,x,null,null,null)
if(y&&d===x)return P.dc(z,b)
return P.dc(z,b.subarray(c,d))},
dc:function(a,b){if(P.jM(b))return
return P.jN(a,b)},
jN:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aq(y)}return},
jM:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
jL:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aq(y)}return}}},lx:{"^":"b;a,b,c,d,e,f",
hg:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.X("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lz(c)
v=new P.ly(this,b,c,a)
$label0$0:for(u=J.aC(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bD()
if((r&192)!==128){q=P.X("Bad UTF-8 encoding 0x"+C.d.b7(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.X("Overlong encoding of 0x"+C.d.b7(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.X("Character outside valid Unicode range: 0x"+C.d.b7(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cn(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cr()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.X("Negative UTF-8 code unit: -0x"+C.d.b7(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.X("Bad UTF-8 encoding 0x"+C.d.b7(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lz:{"^":"n:41;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aC(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bD()
if((w&127)!==w)return x-b}return z-b}},ly:{"^":"n:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ew(this.d,a,b)}}}],["","",,P,{"^":"",
c8:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.iE(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.X(a,null,null))},
hw:function(a){var z=J.M(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.b9(a)+"'"},
i0:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hJ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
i1:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.gZ(a);x.F();)C.a.h(y,H.z(x.gO(x),c))
if(b)return y
return H.w(J.bB(y),"$isc",z,"$asc")},
ew:function(a,b,c){var z,y
z=P.m
H.w(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb5",[z],"$asb5")
y=a.length
c=P.aJ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.M()
z=c<y}else z=!0
return H.en(z?C.a.bF(a,b,c):a)}if(!!J.M(a).$isd1)return H.iG(a,b,P.aJ(b,c,a.length,null,null,null))
return P.j7(a,b,c)},
j7:function(a,b,c){var z,y,x,w
H.w(a,"$isj",[P.m],"$asj")
if(b<0)throw H.a(P.a0(b,0,J.ar(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a0(c,b,J.ar(a),null,null))
y=J.bu(a)
for(x=0;x<b;++x)if(!y.F())throw H.a(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.F();)w.push(y.gO(y))
else for(x=b;x<c;++x){if(!y.F())throw H.a(P.a0(c,b,x,null,null))
w.push(y.gO(y))}return H.en(w)},
iN:function(a,b,c){return new H.hM(a,H.hN(a,!1,!0,!1))},
db:function(){var z=H.iw()
if(z!=null)return P.jB(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
cf:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hw(a)},
v:function(a){return new P.f5(a)},
i2:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.f([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dy:function(a){H.mA(a)},
jB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.G(a,b+4)^58)*3|C.b.G(a,b)^100|C.b.G(a,b+1)^97|C.b.G(a,b+2)^116|C.b.G(a,b+3)^97)>>>0
if(y===0)return P.eV(b>0||c<c?C.b.v(a,b,c):a,5,null).ge2()
else if(y===32)return P.eV(C.b.v(a,z,c),0,null).ge2()}x=new Array(8)
x.fixed$length=Array
w=H.f(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fu(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cp()
if(v>=b)if(P.fu(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.M()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.M()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.M()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a6(a,"..",s)))n=r>s+2&&C.b.a6(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a6(a,"file",b)){if(u<=b){if(!C.b.a6(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aN(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a6(a,"http",b)){if(x&&t+3===s&&C.b.a6(a,"80",t+1))if(b===0&&!0){a=C.b.aN(a,t,s,"")
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
else if(v===z&&C.b.a6(a,"https",b)){if(x&&t+4===s&&C.b.a6(a,"443",t+1))if(b===0&&!0){a=C.b.aN(a,t,s,"")
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
q-=b}return new P.kU(a,v,u,t,s,r,q,o)}return P.lg(a,b,c,v,u,t,s,r,q,o)},
eX:function(a,b){var z=P.i
return C.a.hh(H.f(a.split("&"),[z]),P.eb(z,z),new P.jE(b),[P.H,P.i,P.i])},
jz:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jA(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.T(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c8(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.cr()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c8(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.cr()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
eW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jC(a)
y=new P.jD(z,a)
if(a.length<2)z.$1("address is too short")
x=H.f([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.T(a,w)
if(s===58){if(w===b){++w
if(C.b.T(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gay(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jz(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aG(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
lO:function(){var z,y,x,w,v
z=P.i2(22,new P.lQ(),!0,P.O)
y=new P.lP(z)
x=new P.lR()
w=new P.lS()
v=H.e(y.$2(0,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isO")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isO")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isO"),"]",5)
v=H.e(y.$2(9,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isO"),"az",21)
v=H.e(y.$2(21,245),"$isO")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fu:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fv()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.G(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ah:{"^":"b;"},
"+bool":0,
ax:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ax))return!1
return this.a===b.a&&this.b===b.b},
gR:function(a){var z=this.a
return(z^C.d.aG(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hk(H.iD(this))
y=P.bY(H.iB(this))
x=P.bY(H.ix(this))
w=P.bY(H.iy(this))
v=P.bY(H.iA(this))
u=P.bY(H.iC(this))
t=P.hl(H.iz(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hk:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hl:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bY:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"W;"},
"+double":0,
bx:{"^":"b;a",
k:function(a,b){return new P.bx(C.d.ac(this.a*b))},
M:function(a,b){return C.d.M(this.a,H.e(b,"$isbx").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bx))return!1
return this.a===b.a},
gR:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hr()
y=this.a
if(y<0)return"-"+new P.bx(0-y).i(0)
x=z.$1(C.d.a2(y,6e7)%60)
w=z.$1(C.d.a2(y,1e6)%60)
v=new P.hq().$1(y%1e6)
return""+C.d.a2(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e_:function(a,b,c,d,e,f){return new P.bx(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hq:{"^":"n:25;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hr:{"^":"n:25;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a4:{"^":"b;"},
ej:{"^":"a4;",
i:function(a){return"Throw of null."}},
aE:{"^":"a4;a,b,c,d",
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbM()+y+x
if(!this.a)return w
v=this.gbL()
u=P.cf(this.b)
return w+v+": "+H.l(u)},
p:{
ca:function(a){return new P.aE(!1,null,null,a)},
cb:function(a,b,c){return new P.aE(!0,a,b,c)},
dE:function(a){return new P.aE(!1,null,a,"Must not be null")}}},
co:{"^":"aE;e,f,a,b,c,d",
gbM:function(){return"RangeError"},
gbL:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cp:function(a,b,c){return new P.co(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.co(b,c,!0,a,d,"Invalid value")},
aJ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a0(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a0(b,a,c,"end",f))
return b}return c}}},
hF:{"^":"aE;e,l:f>,a,b,c,d",
gbM:function(){return"RangeError"},
gbL:function(){if(J.fS(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
R:function(a,b,c,d,e){var z=H.C(e!=null?e:J.ar(b))
return new P.hF(b,z,!0,a,c,"Index out of range")}}},
jx:{"^":"a4;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.jx(a)}}},
ju:{"^":"a4;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c3:function(a){return new P.ju(a)}}},
j1:{"^":"a4;a",
i:function(a){return"Bad state: "+this.a}},
hd:{"^":"a4;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cf(z))+"."},
p:{
b1:function(a){return new P.hd(a)}}},
is:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa4:1},
et:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa4:1},
hj:{"^":"a4;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f5:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hC:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.v(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.G(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.T(w,s)
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
p:{
X:function(a,b,c){return new P.hC(a,b,c)}}},
m:{"^":"W;"},
"+int":0,
j:{"^":"b;$ti",
gl:function(a){var z,y
z=this.gZ(this)
for(y=0;z.F();)++y
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dE("index"))
if(b<0)H.t(P.a0(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.F();){x=z.gO(z)
if(b===y)return x;++y}throw H.a(P.R(b,this,"index",null,y))},
i:function(a){return P.hH(this,"(",")")}},
cS:{"^":"b;$ti"},
c:{"^":"b;$ti",$isj:1},
"+List":0,
H:{"^":"b;$ti"},
G:{"^":"b;",
gR:function(a){return P.b.prototype.gR.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
W:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gR:function(a){return H.bH(this)},
i:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.i(this)}},
au:{"^":"b;"},
i:{"^":"b;",$isek:1},
"+String":0,
ak:{"^":"b;aD:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isol:1,
p:{
ev:function(a,b,c){var z=J.bu(b)
if(!z.F())return a
if(c.length===0){do a+=H.l(z.gO(z))
while(z.F())}else{a+=H.l(z.gO(z))
for(;z.F();)a=a+c+H.l(z.gO(z))}return a}}},
jE:{"^":"n:38;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isH",[z,z],"$asH")
H.K(b)
y=J.aC(b).dE(b,"=")
if(y===-1){if(b!=="")J.cE(a,P.di(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.az(b,y+1)
z=this.a
J.cE(a,P.di(x,0,x.length,z,!0),P.di(w,0,w.length,z,!0))}return a}},
jA:{"^":"n:30;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv4 address, "+a,this.a,b))}},
jC:{"^":"n:48;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jD:{"^":"n:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c8(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cv:{"^":"b;bE:a<,b,c,d,dS:e>,f,r,0x,0y,0z,0Q,0ch",
ge3:function(){return this.b},
gcc:function(a){var z=this.c
if(z==null)return""
if(C.b.a5(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbA:function(a){var z=this.d
if(z==null)return P.fk(this.a)
return z},
gci:function(a){var z=this.f
return z==null?"":z},
gdz:function(){var z=this.r
return z==null?"":z},
cl:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.i,null],"$asH")
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
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dh(g,0,0,h)
return new P.cv(i,j,c,f,d,g,this.r)},
dW:function(a,b){return this.cl(a,null,null,null,null,null,null,b,null,null)},
gbB:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.eU(P.eX(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdA:function(){return this.c!=null},
gdD:function(){return this.f!=null},
gdB:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.l(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.l(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.l(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
u:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isda){y=this.a
x=b.gbE()
if(y==null?x==null:y===x)if(this.c!=null===b.gdA()){y=this.b
x=b.ge3()
if(y==null?x==null:y===x){y=this.gcc(this)
x=z.gcc(b)
if(y==null?x==null:y===x){y=this.gbA(this)
x=z.gbA(b)
if(y==null?x==null:y===x)if(this.e===z.gdS(b)){y=this.f
x=y==null
if(!x===b.gdD()){if(x)y=""
if(y===z.gci(b)){z=this.r
y=z==null
if(!y===b.gdB()){if(y)z=""
z=z===b.gdz()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gR:function(a){var z=this.z
if(z==null){z=C.b.gR(this.i(0))
this.z=z}return z},
$isda:1,
p:{
dj:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fp().b
if(typeof b!=="string")H.t(H.ae(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.aD(c,"bW",0))
y=c.ghf().c3(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cn(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lg:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lr(a,b,d)
else{if(d===b)P.bP(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.ls(a,z,e-1):""
x=P.ll(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lo(P.c8(C.b.v(a,w,g),new P.lh(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lm(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.dh(a,h+1,i,null):null
return new P.cv(j,y,x,v,u,t,i<c?P.lk(a,i+1,c):null)},
fk:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bP:function(a,b,c){throw H.a(P.X(c,a,b))},
lo:function(a,b){if(a!=null&&a===P.fk(b))return
return a},
ll:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.T(a,b)===91){if(typeof c!=="number")return c.P()
z=c-1
if(C.b.T(a,z)!==93)P.bP(a,b,"Missing end `]` to match `[` in host")
P.eW(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.T(a,y)===58){P.eW(a,b,c)
return"["+a+"]"}return P.lu(a,b,c)},
lu:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.T(a,z)
if(v===37){u=P.fr(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ak("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ak("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bP(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.T(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ak("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fl(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lr:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fn(C.b.G(a,b)))P.bP(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.G(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bP(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.li(y?a.toLowerCase():a)},
li:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ls:function(a,b,c){return P.bQ(a,b,c,C.Q)},
lm:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bQ(a,b,c,C.y):C.t.iC(d,new P.ln(),P.i).U(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a5(w,"/"))w="/"+w
return P.lt(w,e,f)},
lt:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a5(a,"/"))return P.lv(a,!z||c)
return P.lw(a)},
dh:function(a,b,c,d){var z,y
z={}
H.w(d,"$isH",[P.i,null],"$asH")
if(a!=null){if(d!=null)throw H.a(P.ca("Both query and queryParameters specified"))
return P.bQ(a,b,c,C.n)}if(d==null)return
y=new P.ak("")
z.a=""
d.J(0,new P.lp(new P.lq(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lk:function(a,b,c){return P.bQ(a,b,c,C.n)},
fr:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.T(a,b+1)
x=C.b.T(a,z)
w=H.cB(y)
v=H.cB(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aG(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cn(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fl:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.f(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.G("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.f(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.ft(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.G("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.G("0123456789ABCDEF",u&15))
v+=3}}return P.ew(y,0,null)},
bQ:function(a,b,c,d){var z=P.fq(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.v(a,b,c):z},
fq:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.T(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fr(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bP(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.T(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fl(v)}}if(w==null)w=new P.ak("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fo:function(a){if(C.b.a5(a,"."))return!0
return C.b.dE(a,"/.")!==-1},
lw:function(a){var z,y,x,w,v,u,t
if(!P.fo(a))return a
z=H.f([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.P(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.U(z,"/")},
lv:function(a,b){var z,y,x,w,v,u
if(!P.fo(a))return!b?P.fm(a):a
z=H.f([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gay(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gay(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.m(z,0,P.fm(z[0]))}return C.a.U(z,"/")},
fm:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fn(J.fT(a,0)))for(y=1;y<z;++y){x=C.b.G(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.az(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lj:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.G(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.ca("Invalid URL encoding"))}}return z},
di:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.du(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.G(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.hb(y.v(a,b,c))}else{u=H.f([],[P.m])
for(x=b;x<c;++x){w=y.G(a,x)
if(w>127)throw H.a(P.ca("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.ca("Truncated URI"))
C.a.h(u,P.lj(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.jI(!1).c3(u)},
fn:function(a){var z=a|32
return 97<=z&&z<=122}}},
lh:{"^":"n:47;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.X("Invalid port",this.a,z+1))}},
ln:{"^":"n:46;",
$1:function(a){return P.dj(C.R,a,C.k,!1)}},
lq:{"^":"n:17;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.dj(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.dj(C.p,b,C.k,!0))}}},
lp:{"^":"n:50;a",
$2:function(a,b){var z,y
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(z=J.bu(H.fL(b,"$isj")),y=this.a;z.F();)y.$2(a,H.K(z.gO(z)))}},
jy:{"^":"b;a,b,c",
ge2:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.dF(y,"?",z)
w=y.length
if(x>=0){v=P.bQ(y,x+1,w,C.n)
w=x}else v=null
z=new P.kc(this,"data",null,null,null,P.bQ(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
eV:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.f([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.G(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.X("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.X("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.G(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gay(z)
if(v!==44||x!==t+7||!C.b.a6(a,"base64",t+1))throw H.a(P.X("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.ht(0,a,s,y)
else{r=P.fq(a,s,y,C.n,!0)
if(r!=null)a=C.b.aN(a,s,y,r)}return new P.jy(a,z,c)}}},
lQ:{"^":"n:45;",
$1:function(a){return new Uint8Array(96)}},
lP:{"^":"n:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.fX(z,0,96,b)
return z}},
lR:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.G(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lS:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.G(b,0),y=C.b.G(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
kU:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdA:function(){return this.c>0},
gdC:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gdD:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
gdB:function(){return this.r<this.a.length},
gcM:function(){return this.b===4&&C.b.a5(this.a,"http")},
gcN:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbE:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcM()){this.x="http"
z="http"}else if(this.gcN()){this.x="https"
z="https"}else if(z===4&&C.b.a5(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a5(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
ge3:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcc:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbA:function(a){var z
if(this.gdC()){z=this.d
if(typeof z!=="number")return z.D()
return P.c8(C.b.v(this.a,z+1,this.e),null,null)}if(this.gcM())return 80
if(this.gcN())return 443
return 0},
gdS:function(a){return C.b.v(this.a,this.e,this.f)},
gci:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.v(this.a,z+1,y):""},
gdz:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.az(y,z+1):""},
gbB:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.S
z=P.i
return new P.eU(P.eX(this.gci(this),C.k),[z,z])},
cl:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.i,null],"$asH")
i=this.gbE()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gdC()?this.gbA(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dh(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.az(y,x+1)
return new P.cv(i,j,c,f,d,g,b)},
dW:function(a,b){return this.cl(a,null,null,null,null,null,null,b,null,null)},
gR:function(a){var z=this.y
if(z==null){z=C.b.gR(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isda)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isda:1},
kc:{"^":"cv;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dO:function(a,b){var z=document.createElement("canvas")
return z},
ht:function(a){H.e(a,"$isa6")
return"wheel"},
hG:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$ise4")
try{J.fZ(z,a)}catch(x){H.aq(x)}return z},
cu:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f8:function(a,b,c,d){var z,y
z=W.cu(W.cu(W.cu(W.cu(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fy:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.U
if(z===C.j)return a
return z.d4(a,b)},
a9:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
mQ:{"^":"d4;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
mR:{"^":"q;0l:length=","%":"AccessibleNodeList"},
mS:{"^":"a9;0a_:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mT:{"^":"a9;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cI:{"^":"q;",$iscI:1,"%":";Blob"},
mZ:{"^":"a9;0a_:type}","%":"HTMLButtonElement"},
cL:{"^":"a9;",
cq:function(a,b,c){var z=a.getContext(b,P.m2(c,null))
return z},
$iscL:1,
"%":"HTMLCanvasElement"},
n0:{"^":"I;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
n2:{"^":"ce;0l:length=","%":"CSSPerspective"},
n3:{"^":"cN;0q:x=,0t:y=","%":"CSSPositionValue"},
n4:{"^":"ce;0q:x=,0t:y=","%":"CSSRotation"},
b2:{"^":"q;",$isb2:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
n5:{"^":"ce;0q:x=,0t:y=","%":"CSSScale"},
hh:{"^":"kb;0l:length=",
e7:function(a,b){var z=a.getPropertyValue(this.cA(a,b))
return z==null?"":z},
cA:function(a,b){var z,y
z=$.$get$dT()
y=z[b]
if(typeof y==="string")return y
y=this.fu(a,b)
z[b]=y
return y},
fu:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hm()+b
if(z in a)return z
return b},
fl:function(a,b,c,d){a.setProperty(b,c,d)},
gbY:function(a){return a.bottom},
gal:function(a){return a.height},
gaK:function(a){return a.left},
gb4:function(a){return a.right},
gb8:function(a){return a.top},
gao:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hi:{"^":"b;",
gaK:function(a){return this.e7(a,"left")}},
cN:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ce:{"^":"q;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
n6:{"^":"cN;0l:length=","%":"CSSTransformValue"},
n7:{"^":"ce;0q:x=,0t:y=","%":"CSSTranslation"},
n8:{"^":"cN;0l:length=","%":"CSSUnparsedValue"},
n9:{"^":"q;0l:length=","%":"DataTransferItemList"},
na:{"^":"q;0q:x=,0t:y=","%":"DeviceAcceleration"},
nb:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
nc:{"^":"ho;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
ho:{"^":"q;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
nd:{"^":"ke;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.w(c,"$isa7",[P.W],"$asa7")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a7,P.W]]},
$asy:function(){return[[P.a7,P.W]]},
$isj:1,
$asj:function(){return[[P.a7,P.W]]},
$isc:1,
$asc:function(){return[[P.a7,P.W]]},
$asA:function(){return[[P.a7,P.W]]},
"%":"ClientRectList|DOMRectList"},
hp:{"^":"q;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gao(a))+" x "+H.l(this.gal(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bp(b,"$isa7",[P.W],"$asa7")
if(!z)return!1
z=J.aT(b)
return a.left===z.gaK(b)&&a.top===z.gb8(b)&&this.gao(a)===z.gao(b)&&this.gal(a)===z.gal(b)},
gR:function(a){return W.f8(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF,this.gal(a)&0x1FFFFFFF)},
gbY:function(a){return a.bottom},
gal:function(a){return a.height},
gaK:function(a){return a.left},
gb4:function(a){return a.right},
gb8:function(a){return a.top},
gao:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa7:1,
$asa7:function(){return[P.W]},
"%":";DOMRectReadOnly"},
ne:{"^":"kg;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.K(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asy:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asA:function(){return[P.i]},
"%":"DOMStringList"},
nf:{"^":"q;0l:length=","%":"DOMTokenList"},
ka:{"^":"cl;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.e(z[b],"$isa1")},
m:function(a,b,c){var z
H.C(b)
H.e(c,"$isa1")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.hU(this)
return new J.as(z,z.length,0,[H.x(z,0)])},
aw:function(a,b,c,d){throw H.a(P.c3(null))},
$asy:function(){return[W.a1]},
$asj:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
a1:{"^":"I;",
gc1:function(a){return new W.ka(a,a.children)},
gbk:function(a){return P.iJ(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
ng:{"^":"a9;0a_:type}","%":"HTMLEmbedElement"},
ab:{"^":"q;",$isab:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"q;",
cZ:["ea",function(a,b,c,d){H.h(c,{func:1,args:[W.ab]})
if(c!=null)this.eq(a,b,c,!1)}],
eq:function(a,b,c,d){return a.addEventListener(b,H.bq(H.h(c,{func:1,args:[W.ab]}),1),!1)},
$isa6:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fe|ff|fh|fi"},
aU:{"^":"cI;",$isaU:1,"%":"File"},
e0:{"^":"kl;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isaU")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aU]},
$asy:function(){return[W.aU]},
$isj:1,
$asj:function(){return[W.aU]},
$isc:1,
$asc:function(){return[W.aU]},
$ise0:1,
$asA:function(){return[W.aU]},
"%":"FileList"},
nz:{"^":"a6;0l:length=","%":"FileWriter"},
nC:{"^":"a9;0l:length=","%":"HTMLFormElement"},
b4:{"^":"q;",$isb4:1,"%":"Gamepad"},
nD:{"^":"d4;0q:x=,0t:y=","%":"Gyroscope"},
nE:{"^":"q;0l:length=","%":"History"},
nF:{"^":"ky;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isI")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.I]},
$asy:function(){return[W.I]},
$isj:1,
$asj:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asA:function(){return[W.I]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
e3:{"^":"q;",$ise3:1,"%":"ImageData"},
e4:{"^":"a9;0a_:type}",$ise4:1,"%":"HTMLInputElement"},
bC:{"^":"d7;",$isbC:1,"%":"KeyboardEvent"},
nK:{"^":"a9;0a_:type}","%":"HTMLLinkElement"},
nL:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
nM:{"^":"d4;0q:x=,0t:y=","%":"Magnetometer"},
nO:{"^":"q;0l:length=","%":"MediaList"},
nP:{"^":"a6;",
cZ:function(a,b,c,d){H.h(c,{func:1,args:[W.ab]})
if(b==="message")a.start()
this.ea(a,b,c,!1)},
"%":"MessagePort"},
nQ:{"^":"kE;",
j:function(a,b){return P.aS(a.get(H.K(b)))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aS(y.value[1]))}},
gax:function(a){var z=H.f([],[P.i])
this.J(a,new W.ij(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asaf:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIInputMap"},
ij:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nR:{"^":"kF;",
j:function(a,b){return P.aS(a.get(H.K(b)))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aS(y.value[1]))}},
gax:function(a){var z=H.f([],[P.i])
this.J(a,new W.ik(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asaf:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
ik:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b7:{"^":"q;",$isb7:1,"%":"MimeType"},
nS:{"^":"kH;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb7")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b7]},
$asy:function(){return[W.b7]},
$isj:1,
$asj:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asA:function(){return[W.b7]},
"%":"MimeTypeArray"},
ay:{"^":"d7;",$isay:1,"%":"PointerEvent;DragEvent|MouseEvent"},
k9:{"^":"cl;a",
m:function(a,b,c){var z,y
H.C(b)
H.e(c,"$isI")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gZ:function(a){var z=this.a.childNodes
return new W.e1(z,z.length,-1,[H.aX(C.U,z,"A",0)])},
aw:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asy:function(){return[W.I]},
$asj:function(){return[W.I]},
$asc:function(){return[W.I]}},
I:{"^":"a6;",
hN:function(a,b){var z,y
try{z=a.parentNode
J.fU(z,b,a)}catch(y){H.aq(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eb(a):z},
fg:function(a,b,c){return a.replaceChild(b,c)},
$isI:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
ip:{"^":"kJ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isI")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.I]},
$asy:function(){return[W.I]},
$isj:1,
$asj:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asA:function(){return[W.I]},
"%":"NodeList|RadioNodeList"},
o_:{"^":"a9;0a_:type}","%":"HTMLOListElement"},
o0:{"^":"a9;0a_:type}","%":"HTMLObjectElement"},
b8:{"^":"q;0l:length=",$isb8:1,"%":"Plugin"},
o4:{"^":"kN;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb8")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asy:function(){return[W.b8]},
$isj:1,
$asj:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asA:function(){return[W.b8]},
"%":"PluginArray"},
o9:{"^":"q;0a_:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oa:{"^":"kT;",
j:function(a,b){return P.aS(a.get(H.K(b)))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aS(y.value[1]))}},
gax:function(a){var z=H.f([],[P.i])
this.J(a,new W.iT(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asaf:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"RTCStatsReport"},
iT:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oc:{"^":"a9;0a_:type}","%":"HTMLScriptElement"},
oe:{"^":"a9;0l:length=","%":"HTMLSelectElement"},
d4:{"^":"a6;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
ba:{"^":"a6;",$isba:1,"%":"SourceBuffer"},
of:{"^":"ff;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isba")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asy:function(){return[W.ba]},
$isj:1,
$asj:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asA:function(){return[W.ba]},
"%":"SourceBufferList"},
og:{"^":"a9;0a_:type}","%":"HTMLSourceElement"},
bb:{"^":"q;",$isbb:1,"%":"SpeechGrammar"},
oh:{"^":"kW;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbb")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asy:function(){return[W.bb]},
$isj:1,
$asj:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asA:function(){return[W.bb]},
"%":"SpeechGrammarList"},
bc:{"^":"q;0l:length=",$isbc:1,"%":"SpeechRecognitionResult"},
oj:{"^":"kZ;",
j:function(a,b){return a.getItem(H.K(b))},
m:function(a,b,c){a.setItem(b,H.K(c))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gax:function(a){var z=H.f([],[P.i])
this.J(a,new W.j3(z))
return z},
gl:function(a){return a.length},
$asaf:function(){return[P.i,P.i]},
$isH:1,
$asH:function(){return[P.i,P.i]},
"%":"Storage"},
j3:{"^":"n:17;a",
$2:function(a,b){return C.a.h(this.a,a)}},
om:{"^":"a9;0a_:type}","%":"HTMLStyleElement"},
bd:{"^":"q;",$isbd:1,"%":"CSSStyleSheet|StyleSheet"},
bI:{"^":"a9;",$isbI:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
be:{"^":"a6;",$isbe:1,"%":"TextTrack"},
bf:{"^":"a6;",$isbf:1,"%":"TextTrackCue|VTTCue"},
or:{"^":"l5;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbf")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asy:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asA:function(){return[W.bf]},
"%":"TextTrackCueList"},
os:{"^":"fi;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbe")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asy:function(){return[W.be]},
$isj:1,
$asj:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asA:function(){return[W.be]},
"%":"TextTrackList"},
ot:{"^":"q;0l:length=","%":"TimeRanges"},
bh:{"^":"q;",$isbh:1,"%":"Touch"},
bi:{"^":"d7;",$isbi:1,"%":"TouchEvent"},
ou:{"^":"lb;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbh")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asy:function(){return[W.bh]},
$isj:1,
$asj:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asA:function(){return[W.bh]},
"%":"TouchList"},
ov:{"^":"q;0l:length=","%":"TrackDefaultList"},
d7:{"^":"ab;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
ox:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
oz:{"^":"q;0q:x=","%":"VRStageBoundsPoint"},
oA:{"^":"a6;0l:length=","%":"VideoTrackList"},
bM:{"^":"ay;",
ghc:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghb:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbM:1,
"%":"WheelEvent"},
k2:{"^":"a6;",
fh:function(a,b){return a.requestAnimationFrame(H.bq(H.h(b,{func:1,ret:-1,args:[P.W]}),1))},
eC:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oF:{"^":"lD;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb2")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b2]},
$asy:function(){return[W.b2]},
$isj:1,
$asj:function(){return[W.b2]},
$isc:1,
$asc:function(){return[W.b2]},
$asA:function(){return[W.b2]},
"%":"CSSRuleList"},
oG:{"^":"hp;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bp(b,"$isa7",[P.W],"$asa7")
if(!z)return!1
z=J.aT(b)
return a.left===z.gaK(b)&&a.top===z.gb8(b)&&a.width===z.gao(b)&&a.height===z.gal(b)},
gR:function(a){return W.f8(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gal:function(a){return a.height},
gao:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
oI:{"^":"lF;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb4")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b4]},
$asy:function(){return[W.b4]},
$isj:1,
$asj:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asA:function(){return[W.b4]},
"%":"GamepadList"},
oJ:{"^":"lH;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isI")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.I]},
$asy:function(){return[W.I]},
$isj:1,
$asj:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asA:function(){return[W.I]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oK:{"^":"lJ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbc")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asy:function(){return[W.bc]},
$isj:1,
$asj:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asA:function(){return[W.bc]},
"%":"SpeechRecognitionResultList"},
oL:{"^":"lL;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbd")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asy:function(){return[W.bd]},
$isj:1,
$asj:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asA:function(){return[W.bd]},
"%":"StyleSheetList"},
kh:{"^":"d6;a,b,c,$ti",
hq:function(a,b,c,d){var z=H.x(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a3(this.a,this.b,a,!1,z)}},
oH:{"^":"kh;a,b,c,$ti"},
ki:{"^":"eu;a,b,c,d,e,$ti",
fA:function(){var z=this.d
if(z!=null&&this.a<=0)J.fV(this.b,this.c,z,!1)},
p:{
a3:function(a,b,c,d,e){var z=c==null?null:W.fy(new W.kj(c),W.ab)
z=new W.ki(0,a,b,z,!1,[e])
z.fA()
return z}}},
kj:{"^":"n:4;a",
$1:function(a){return this.a.$1(H.e(a,"$isab"))}},
A:{"^":"b;$ti",
gZ:function(a){return new W.e1(a,this.gl(a),-1,[H.aX(this,a,"A",0)])},
aw:function(a,b,c,d){H.z(d,H.aX(this,a,"A",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
e1:{"^":"b;a,b,c,0d,$ti",
F:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dB(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
kb:{"^":"q+hi;"},
kd:{"^":"q+y;"},
ke:{"^":"kd+A;"},
kf:{"^":"q+y;"},
kg:{"^":"kf+A;"},
kk:{"^":"q+y;"},
kl:{"^":"kk+A;"},
kx:{"^":"q+y;"},
ky:{"^":"kx+A;"},
kE:{"^":"q+af;"},
kF:{"^":"q+af;"},
kG:{"^":"q+y;"},
kH:{"^":"kG+A;"},
kI:{"^":"q+y;"},
kJ:{"^":"kI+A;"},
kM:{"^":"q+y;"},
kN:{"^":"kM+A;"},
kT:{"^":"q+af;"},
fe:{"^":"a6+y;"},
ff:{"^":"fe+A;"},
kV:{"^":"q+y;"},
kW:{"^":"kV+A;"},
kZ:{"^":"q+af;"},
l4:{"^":"q+y;"},
l5:{"^":"l4+A;"},
fh:{"^":"a6+y;"},
fi:{"^":"fh+A;"},
la:{"^":"q+y;"},
lb:{"^":"la+A;"},
lC:{"^":"q+y;"},
lD:{"^":"lC+A;"},
lE:{"^":"q+y;"},
lF:{"^":"lE+A;"},
lG:{"^":"q+y;"},
lH:{"^":"lG+A;"},
lI:{"^":"q+y;"},
lJ:{"^":"lI+A;"},
lK:{"^":"q+y;"},
lL:{"^":"lK+A;"}}],["","",,P,{"^":"",
aS:function(a){var z,y,x,w,v
if(a==null)return
z=P.eb(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.K(y[w])
z.m(0,v,a[v])}return z},
m2:function(a,b){var z={}
a.J(0,new P.m3(z))
return z},
dZ:function(){var z=$.dY
if(z==null){z=J.cF(window.navigator.userAgent,"Opera",0)
$.dY=z}return z},
hm:function(){var z,y
z=$.dV
if(z!=null)return z
y=$.dW
if(y==null){y=J.cF(window.navigator.userAgent,"Firefox",0)
$.dW=y}if(y)z="-moz-"
else{y=$.dX
if(y==null){y=!P.dZ()&&J.cF(window.navigator.userAgent,"Trident/",0)
$.dX=y}if(y)z="-ms-"
else z=P.dZ()?"-o-":"-webkit-"}$.dV=z
return z},
l1:{"^":"b;",
du:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
co:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.M(a)
if(!!y.$isax)return new Date(a.a)
if(!!y.$isiM)throw H.a(P.c3("structured clone of RegExp"))
if(!!y.$isaU)return a
if(!!y.$iscI)return a
if(!!y.$ise0)return a
if(!!y.$ise3)return a
if(!!y.$iseh||!!y.$isd0)return a
if(!!y.$isH){x=this.du(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.J(a,new P.l3(z,this))
return z.a}if(!!y.$isc){x=this.du(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.h9(a,x)}throw H.a(P.c3("structured clone of other type"))},
h9:function(a,b){var z,y,x,w
z=J.aC(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.co(z.j(a,w)))
return x}},
l3:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.co(b)}},
m3:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
l2:{"^":"l1;a,b"},
hz:{"^":"cl;a,b",
gbe:function(){var z,y,x
z=this.b
y=H.aD(z,"y",0)
x=W.a1
return new H.i7(new H.k0(z,H.h(new P.hA(),{func:1,ret:P.ah,args:[y]}),[y]),H.h(new P.hB(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.C(b)
H.e(c,"$isa1")
z=this.gbe()
J.fY(z.b.$1(J.cG(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aw:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gl:function(a){return J.ar(this.gbe().a)},
j:function(a,b){var z=this.gbe()
return z.b.$1(J.cG(z.a,b))},
gZ:function(a){var z=P.i1(this.gbe(),!1,W.a1)
return new J.as(z,z.length,0,[H.x(z,0)])},
$asy:function(){return[W.a1]},
$asj:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
hA:{"^":"n:44;",
$1:function(a){return!!J.M(H.e(a,"$isI")).$isa1}},
hB:{"^":"n:27;",
$1:function(a){return H.k(H.e(a,"$isI"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f7:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bF:{"^":"b;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.bp(b,"$isbF",[P.W],null)
if(!z)return!1
z=this.a
y=J.aT(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gR:function(a){var z,y
z=J.b_(this.a)
y=J.b_(this.b)
return P.f7(P.bO(P.bO(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.x(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bF(z,H.z(x*b,y),this.$ti)}},
kO:{"^":"b;$ti",
gb4:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.z(z+this.c,H.x(this,0))},
gbY:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.z(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bp(b,"$isa7",[P.W],"$asa7")
if(!z)return!1
z=this.a
y=J.aT(b)
x=y.gaK(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb8(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.x(this,0)
if(H.z(z+this.c,w)===y.gb4(b)){if(typeof x!=="number")return x.D()
z=H.z(x+this.d,w)===y.gbY(b)}else z=!1}else z=!1}else z=!1
return z},
gR:function(a){var z,y,x,w,v
z=this.a
y=J.b_(z)
x=this.b
w=J.b_(x)
if(typeof z!=="number")return z.D()
v=H.x(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.z(x+this.d,v)
return P.f7(P.bO(P.bO(P.bO(P.bO(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d5:function(a,b){var z,y
H.w(b,"$isbF",[P.W],"$asbF")
z=b.a
y=this.a
if(typeof z!=="number")return z.cp()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cp()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a7:{"^":"kO;aK:a>,b8:b>,ao:c>,al:d>,$ti",p:{
iJ:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.M()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.M()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nh:{"^":"T;0q:x=,0t:y=","%":"SVGFEBlendElement"},ni:{"^":"T;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},nj:{"^":"T;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nk:{"^":"T;0q:x=,0t:y=","%":"SVGFECompositeElement"},nl:{"^":"T;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nm:{"^":"T;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nn:{"^":"T;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},no:{"^":"T;0q:x=,0t:y=","%":"SVGFEFloodElement"},np:{"^":"T;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nq:{"^":"T;0q:x=,0t:y=","%":"SVGFEImageElement"},nr:{"^":"T;0q:x=,0t:y=","%":"SVGFEMergeElement"},ns:{"^":"T;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nt:{"^":"T;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nu:{"^":"T;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nv:{"^":"T;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},nw:{"^":"T;0q:x=,0t:y=","%":"SVGFESpotLightElement"},nx:{"^":"T;0q:x=,0t:y=","%":"SVGFETileElement"},ny:{"^":"T;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},nA:{"^":"T;0q:x=,0t:y=","%":"SVGFilterElement"},nB:{"^":"bA;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hE:{"^":"bA;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bA:{"^":"T;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},nG:{"^":"bA;0q:x=,0t:y=","%":"SVGImageElement"},bD:{"^":"q;",$isbD:1,"%":"SVGLength"},nJ:{"^":"kA;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbD")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bD]},
$isj:1,
$asj:function(){return[P.bD]},
$isc:1,
$asc:function(){return[P.bD]},
$asA:function(){return[P.bD]},
"%":"SVGLengthList"},nN:{"^":"T;0q:x=,0t:y=","%":"SVGMaskElement"},bE:{"^":"q;",$isbE:1,"%":"SVGNumber"},nZ:{"^":"kL;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbE")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bE]},
$isj:1,
$asj:function(){return[P.bE]},
$isc:1,
$asc:function(){return[P.bE]},
$asA:function(){return[P.bE]},
"%":"SVGNumberList"},o3:{"^":"T;0q:x=,0t:y=","%":"SVGPatternElement"},o5:{"^":"q;0q:x=,0t:y=","%":"SVGPoint"},o6:{"^":"q;0l:length=","%":"SVGPointList"},o7:{"^":"q;0q:x=,0t:y=","%":"SVGRect"},o8:{"^":"hE;0q:x=,0t:y=","%":"SVGRectElement"},od:{"^":"T;0a_:type}","%":"SVGScriptElement"},ok:{"^":"l0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.K(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asA:function(){return[P.i]},
"%":"SVGStringList"},on:{"^":"T;0a_:type}","%":"SVGStyleElement"},T:{"^":"a1;",
gc1:function(a){return new P.hz(a,new W.k9(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oo:{"^":"bA;0q:x=,0t:y=","%":"SVGSVGElement"},j8:{"^":"bA;","%":"SVGTextPathElement;SVGTextContentElement"},oq:{"^":"j8;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bJ:{"^":"q;",$isbJ:1,"%":"SVGTransform"},ow:{"^":"ld;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbJ")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bJ]},
$isj:1,
$asj:function(){return[P.bJ]},
$isc:1,
$asc:function(){return[P.bJ]},
$asA:function(){return[P.bJ]},
"%":"SVGTransformList"},oy:{"^":"bA;0q:x=,0t:y=","%":"SVGUseElement"},kz:{"^":"q+y;"},kA:{"^":"kz+A;"},kK:{"^":"q+y;"},kL:{"^":"kK+A;"},l_:{"^":"q+y;"},l0:{"^":"l_+A;"},lc:{"^":"q+y;"},ld:{"^":"lc+A;"}}],["","",,P,{"^":"",O:{"^":"b;",$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}}}],["","",,P,{"^":"",mU:{"^":"q;0l:length=","%":"AudioBuffer"},dG:{"^":"a6;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},mV:{"^":"k8;",
j:function(a,b){return P.aS(a.get(H.K(b)))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aS(y.value[1]))}},
gax:function(a){var z=H.f([],[P.i])
this.J(a,new P.h0(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asaf:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"AudioParamMap"},h0:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},h1:{"^":"dG;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},mW:{"^":"a6;0l:length=","%":"AudioTrackList"},h4:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mX:{"^":"dG;0a_:type}","%":"BiquadFilterNode"},o1:{"^":"h4;0l:length=","%":"OfflineAudioContext"},o2:{"^":"h1;0a_:type}","%":"Oscillator|OscillatorNode"},k8:{"^":"q+af;"}}],["","",,P,{"^":"",eq:{"^":"q;",$iseq:1,"%":"WebGLRenderingContext"},js:{"^":"q;",$isjs:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oi:{"^":"kY;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return P.aS(a.item(b))},
m:function(a,b,c){H.C(b)
H.e(c,"$isH")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[[P.H,,,]]},
$isj:1,
$asj:function(){return[[P.H,,,]]},
$isc:1,
$asc:function(){return[[P.H,,,]]},
$asA:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},kX:{"^":"q+y;"},kY:{"^":"kX+A;"}}],["","",,O,{"^":"",aF:{"^":"b;0a,0b,0c,0d,$ti",
bH:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
cs:function(a,b,c){var z=H.aD(this,"aF",0)
H.h(b,{func:1,ret:P.ah,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.m,[P.j,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bb:function(a,b){return this.cs(a,null,b)},
f6:function(a){var z
H.w(a,"$isj",[H.aD(this,"aF",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eM:function(a,b){var z
H.w(b,"$isj",[H.aD(this,"aF",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.as(z,z.length,0,[H.x(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aD(this,"aF",0)
H.z(b,z)
z=[z]
if(this.f6(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eM(x,H.f([b],z))}},
$isj:1,
p:{
cM:function(a){var z=new O.aF([a])
z.bH(a)
return z}}},cZ:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.S()
this.b=z}return z},
ei:function(a){var z=this.b
if(!(z==null))z.H(a)},
aA:function(){return this.ei(null)},
gV:function(a){var z=this.a
if(z.length>0)return C.a.gay(z)
else return V.c1()},
dU:function(a){var z=this.a
if(a==null)C.a.h(z,V.c1())
else C.a.h(z,a)
this.aA()},
cf:function(){var z=this.a
if(z.length>0){z.pop()
this.aA()}}}}],["","",,E,{"^":"",cH:{"^":"b;"},aG:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a1:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cB:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.as(z,z.length,0,[H.x(z,0)]);z.F();){y=z.d
if(y.f==null)y.cB()}},
sa4:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gB()
y.toString
x=H.h(this.gdQ(),{func:1,ret:-1,args:[D.u]})
C.a.L(y.a,x)}y=this.c
if(y!=null){y=y.gB()
y.toString
x=H.h(this.gdQ(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}w=new D.N("shape",z,this.c,this,[F.es])
w.b=!0
this.a3(w)}},
sb5:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.h(this.gdR(),{func:1,ret:-1,args:[D.u]})
C.a.L(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gdR(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}this.cB()
w=new D.N("technique",x,this.f,this,[O.cr])
w.b=!0
this.a3(w)}},
saL:function(a){var z,y,x,w
if(!J.P(this.r,a)){z=this.r
if(z!=null){y=z.gB()
y.toString
x=H.h(this.gdP(),{func:1,ret:-1,args:[D.u]})
C.a.L(y.a,x)}if(a!=null){y=a.gB()
y.toString
x=H.h(this.gdP(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}this.r=a
w=new D.N("mover",z,a,this,[U.ag])
w.b=!0
this.a3(w)}},
an:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aP(0,b,this):null
if(!J.P(y,this.x)){x=this.x
this.x=y
w=new D.N("matrix",x,y,this,[V.at])
w.b=!0
this.a3(w)}z=this.f
if(z!=null)z.an(0,b)
for(z=this.y.a,z=new J.as(z,z.length,0,[H.x(z,0)]);z.F();)z.d.an(0,b)},
aM:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gV(z))
else C.a.h(z.a,y.k(0,z.gV(z)))
z.aA()
a.dV(this.f)
z=a.dy
x=(z&&C.a).gay(z)
if(x!=null&&this.d!=null)x.hM(a,this)
for(z=this.y.a,z=new J.as(z,z.length,0,[H.x(z,0)]);z.F();)z.d.aM(a)
a.dT()
a.dx.cf()},
gB:function(){var z=this.z
if(z==null){z=D.S()
this.z=z}return z},
a3:function(a){var z=this.z
if(!(z==null))z.H(a)},
W:function(){return this.a3(null)},
hy:[function(a){H.e(a,"$isu")
this.e=null
this.a3(a)},function(){return this.hy(null)},"iH","$1","$0","gdQ",0,2,1],
hz:[function(a){this.a3(H.e(a,"$isu"))},function(){return this.hz(null)},"iI","$1","$0","gdR",0,2,1],
hx:[function(a){this.a3(H.e(a,"$isu"))},function(){return this.hx(null)},"iG","$1","$0","gdP",0,2,1],
hv:[function(a){this.a3(H.e(a,"$isu"))},function(){return this.hv(null)},"iE","$1","$0","gdO",0,2,1],
iD:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aG],"$asj")
for(z=b.length,y=this.gdO(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga1()==null){t=new D.b3()
t.a=H.f([],w)
t.c=0
u.sa1(t)}t=u.ga1()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.W()},"$2","ghu",8,0,8],
iF:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aG],"$asj")
for(z=b.length,y=this.gdO(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga1()==null){t=new D.b3()
t.a=H.f([],w)
t.c=0
u.sa1(t)}t=u.ga1()
t.toString
H.h(y,x)
C.a.L(t.a,y)}}this.W()},"$2","ghw",8,0,8],
$isaI:1,
p:{
cO:function(a,b,c,d,e,f){var z,y
z=new E.aG()
z.a=d
z.b=!0
y=O.cM(E.aG)
z.y=y
y.bb(z.ghu(),z.ghw())
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
z.sa4(0,e)
z.sb5(f)
z.saL(c)
return z}}},iO:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eg:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ax(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cZ()
y=[V.at]
z.a=H.f([],y)
x=z.gB()
x.toString
w={func:1,ret:-1,args:[D.u]}
v=H.h(new E.iQ(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cZ()
z.a=H.f([],y)
v=z.gB()
v.toString
x=H.h(new E.iR(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cZ()
z.a=H.f([],y)
y=z.gB()
y.toString
w=H.h(new E.iS(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.cr])
this.dy=z
C.a.h(z,null)
this.fr=new H.ck(0,0,[P.i,A.er])},
ghI:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gV(z)
y=this.db
y=z.k(0,y.gV(y))
this.z=y
z=y}return z},
dV:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gay(z):a;(z&&C.a).h(z,y)},
dT:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iP:function(a,b){var z=new E.iO(a,b)
z.eg(a,b)
return z}}},iQ:{"^":"n:12;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.z=null
z.ch=null}},iR:{"^":"n:12;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iS:{"^":"n:12;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},jd:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a1:x@,0y,0z,0Q,0ch",
gB:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z},
ek:[function(a){var z
H.e(a,"$isu")
z=this.x
if(!(z==null))z.H(a)
this.hO()},function(){return this.ek(null)},"ej","$1","$0","gcu",0,2,1],
ghj:function(){var z,y,x
z=Date.now()
y=C.d.a2(P.e_(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ax(z,!1)
return x/y},
cR:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.h.dv(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.dv(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hO:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jf(this),{func:1,ret:-1,args:[P.W]})
C.B.eC(z)
C.B.fh(z,W.fy(y,P.W))}},
hL:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cR()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ax(w,!1)
x.y=P.e_(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aA()
w=x.db
C.a.sl(w.a,0)
w.aA()
w=x.dx
C.a.sl(w.a,0)
w.aA()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aM(this.e)}}catch(v){z=H.aq(v)
y=H.bs(v)
P.dy("Error: "+H.l(z))
P.dy("Stack: "+H.l(y))
throw H.a(z)}},
p:{
je:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$iscL)return E.eA(a,!0,!0,!0,!1)
y=W.dO(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gc1(a).h(0,y)
w=E.eA(y,!0,!0,!0,!1)
w.a=a
return w},
eA:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jd()
y=P.hW(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.cq(a,"webgl",y)
x=H.e(x==null?C.l.cq(a,"experimental-webgl",y):x,"$iseq")
if(x==null)H.t(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iP(x,a)
w=new T.j9(x)
w.b=H.C(x.getParameter(3379))
w.c=H.C(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jF(a)
v=new X.hP()
v.c=new X.aV(!1,!1,!1)
v.d=P.hZ(null,null,null,P.m)
w.b=v
v=new X.il(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.i3(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jh(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.eu,P.b]])
w.z=v
u=document
t=W.ay
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a3(u,"contextmenu",H.h(w.geU(),s),!1,t))
v=w.z
r=W.ab
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.h(w.geX(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.h(w.geQ(),q),!1,r))
v=w.z
p=W.bC
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.h(w.geZ(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.h(w.geY(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.h(w.gf1(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.h(w.gf3(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.h(w.gf2(),s),!1,t))
p=w.z
o=W.bM;(p&&C.a).h(p,W.a3(a,H.K(W.ht(a)),H.h(w.gf4(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.h(w.geV(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.h(w.geW(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.h(w.gf5(),q),!1,r))
r=w.z
q=W.bi
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.h(w.gfc(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.h(w.gfa(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.h(w.gfb(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ax(Date.now(),!1)
z.ch=0
z.cR()
return z}}},jf:{"^":"n:31;a",
$1:function(a){var z
H.mz(a)
z=this.a
if(z.z){z.z=!1
z.hL()}}}}],["","",,Z,{"^":"",f2:{"^":"b;a,b",p:{
dd:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bm(c)),35044)
a.bindBuffer(b,null)
return new Z.f2(b,z)}}},dK:{"^":"cH;a,b,c,d,e",
bi:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aq(y)
x=P.v('Failed to bind buffer attribute "'+J.a8(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a8(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},k_:{"^":"b;a",$ismY:1},dL:{"^":"b;a,0b,c,d",
aJ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bi:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bi(a)},
e0:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aM:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.d(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].i(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a8(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.U(y,", ")+"\nAttrs:   "+C.a.U(u,", ")},
$isop:1},ch:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b9(this.c)+"'")+"]"}},bj:{"^":"b;a",
gct:function(a){var z,y
z=this.a
y=(z&$.$get$aO().a)!==0?3:0
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aM().a)!==0)y+=3
if((z&$.$get$aP().a)!==0)y+=2
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$bK().a)!==0)y+=3
if((z&$.$get$bL().a)!==0)y+=4
if((z&$.$get$bk().a)!==0)++y
return(z&$.$get$aL().a)!==0?y+4:y},
h1:function(a){var z,y,x
z=$.$get$aO()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bk()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f1()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bj))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.f([],[P.i])
y=this.a
if((y&$.$get$aO().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bK().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bL().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bk().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.U(z,"|")},
p:{
an:function(a){return new Z.bj(a)}}}}],["","",,D,{"^":"",dP:{"^":"b;"},b3:{"^":"b;0a,0b,0c",
H:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.hx(z))
return x!==0},
hP:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.H(y)}}},
ag:function(a){return this.hP(a,!0,!1)},
p:{
S:function(){var z=new D.b3()
z.a=H.f([],[{func:1,ret:-1,args:[D.u]}])
z.c=0
return z}}},hx:{"^":"n:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"b;a,0b"},ci:{"^":"u;c,d,a,0b,$ti"},cj:{"^":"u;c,d,a,0b,$ti"},N:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dM:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"n_<"}},e8:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e8))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},e9:{"^":"u;c,a,0b"},hP:{"^":"b;0a,0b,0c,0d",
hF:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.e9(a,this)
y.b=!0
return z.H(y)},
hB:function(a){var z,y
this.c=a.b
this.d.L(0,a.a)
z=this.b
if(z==null)return!1
y=new X.e9(a,this)
y.b=!0
return z.H(y)}},ec:{"^":"d3;x,y,c,d,e,a,0b"},i3:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ar:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ax(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.V(y.a+x*w,y.b+v*u)
u=this.a.gbl()
s=new X.c2(a,new V.V(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
ce:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.H(this.ar(a,b))
return!0},
b3:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.e9()
if(typeof z!=="number")return z.bD()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.ar(a,b))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.ar(a,b))
return!0},
hG:function(a){return!1},
f0:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ax(Date.now(),!1)
y=this.f
x=new X.ec(c,a,this.a.gbl(),b,z,this)
x.b=!0
y.H(x)
this.y=z
this.x=new V.V(0,0)}},aV:{"^":"b;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aV))return!1
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
return z+(this.c?"Shift+":"")}},c2:{"^":"d3;x,y,z,Q,ch,c,d,e,a,0b"},il:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bN:function(a,b,c){var z,y,x
z=new P.ax(Date.now(),!1)
y=this.a.gbl()
x=new X.c2(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
ce:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.H(this.bN(a,b,!0))
return!0},
b3:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.e9()
if(typeof z!=="number")return z.bD()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.bN(a,b,!0))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.bN(a,b,!1))
return!0},
hH:function(a,b){return!1}},d3:{"^":"u;"},eC:{"^":"d3;x,y,z,Q,ch,c,d,e,a,0b"},jh:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ar:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.V],"$asc")
z=new P.ax(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gbl()
w=new X.eC(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hE:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.b
if(z==null)return!1
z.H(this.ar(a,!0))
return!0},
hC:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.c
if(z==null)return!1
z.H(this.ar(a,!0))
return!0},
hD:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.d
if(z==null)return!1
z.H(this.ar(a,!1))
return!0}},jF:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbl:function(){var z=this.a
return V.ep(0,0,(z&&C.l).gbk(z).c,C.l.gbk(z).d)},
cH:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.e8(z,new X.aV(y,a.altKey,a.shiftKey))},
aF:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aV(y,a.altKey,a.shiftKey)},
bW:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aV(y,a.altKey,a.shiftKey)},
as:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.P()
v=z.top
if(typeof x!=="number")return x.P()
return new V.V(y-w,x-v)},
aR:function(a){return new V.a5(a.movementX,a.movementY)},
bQ:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.V])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.h.ac(u.pageX)
C.h.ac(u.pageY)
s=z.left
C.h.ac(u.pageX)
C.a.h(y,new V.V(t-s,C.h.ac(u.pageY)-z.top))}return y},
ap:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dM(z,new X.aV(y,a.altKey,a.shiftKey))},
ii:[function(a){this.f=!0},"$1","geX",4,0,4],
i9:[function(a){this.f=!1},"$1","geQ",4,0,4],
ie:[function(a){if(this.f)a.preventDefault()},"$1","geU",4,0,4],
ik:[function(a){var z
H.e(a,"$isbC")
if(!this.f)return
z=this.cH(a)
if(this.b.hF(z))a.preventDefault()},"$1","geZ",4,0,19],
ij:[function(a){var z
H.e(a,"$isbC")
if(!this.f)return
z=this.cH(a)
if(this.b.hB(z))a.preventDefault()},"$1","geY",4,0,19],
im:[function(a){var z,y,x,w
H.e(a,"$isay")
z=this.a
z.focus()
this.f=!0
this.aF(a)
if(this.x){y=this.ap(a)
x=this.aR(a)
if(this.d.ce(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.as(a)
if(this.c.ce(y,w))a.preventDefault()},"$1","gf1",4,0,5],
ip:[function(a){var z,y,x
H.e(a,"$isay")
this.aF(a)
z=this.ap(a)
if(this.x){y=this.aR(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b3(z,x))a.preventDefault()},"$1","gf3",4,0,5],
ih:[function(a){var z,y,x,w
H.e(a,"$isay")
z=this.a
if(!(z&&C.l).gbk(z).d5(0,new P.bF(a.clientX,a.clientY,[P.W]))){this.aF(a)
y=this.ap(a)
if(this.x){x=this.aR(a)
if(this.d.b3(y,x))a.preventDefault()
return}if(this.r)return
w=this.as(a)
if(this.c.b3(y,w))a.preventDefault()}},"$1","geW",4,0,5],
io:[function(a){var z,y,x
H.e(a,"$isay")
this.aF(a)
z=this.ap(a)
if(this.x){y=this.aR(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","gf2",4,0,5],
ig:[function(a){var z,y,x,w
H.e(a,"$isay")
z=this.a
if(!(z&&C.l).gbk(z).d5(0,new P.bF(a.clientX,a.clientY,[P.W]))){this.aF(a)
y=this.ap(a)
if(this.x){x=this.aR(a)
if(this.d.b2(y,x))a.preventDefault()
return}if(this.r)return
w=this.as(a)
if(this.c.b2(y,w))a.preventDefault()}},"$1","geV",4,0,5],
iq:[function(a){var z,y
H.e(a,"$isbM")
this.aF(a)
z=new V.a5((a&&C.A).ghb(a),C.A.ghc(a)).A(0,180)
if(this.x){if(this.d.hG(z))a.preventDefault()
return}if(this.r)return
y=this.as(a)
if(this.c.hH(z,y))a.preventDefault()},"$1","gf4",4,0,35],
ir:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ap(this.y)
v=this.as(this.y)
this.d.f0(w,v,x)}},"$1","gf5",4,0,4],
ix:[function(a){var z
H.e(a,"$isbi")
this.a.focus()
this.f=!0
this.bW(a)
z=this.bQ(a)
if(this.e.hE(z))a.preventDefault()},"$1","gfc",4,0,13],
iv:[function(a){var z
H.e(a,"$isbi")
this.bW(a)
z=this.bQ(a)
if(this.e.hC(z))a.preventDefault()},"$1","gfa",4,0,13],
iw:[function(a){var z
H.e(a,"$isbi")
this.bW(a)
z=this.bQ(a)
if(this.e.hD(z))a.preventDefault()},"$1","gfb",4,0,13]}}],["","",,D,{"^":"",hn:{"^":"b;",$isa2:1,$isaI:1},a2:{"^":"b;",$isaI:1},hQ:{"^":"aF;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.S()
this.Q=z}return z},
a7:function(a){var z=this.Q
if(!(z==null))z.H(a)},
f_:[function(a){var z
H.e(a,"$isu")
z=this.ch
if(!(z==null))z.H(a)},function(){return this.f_(null)},"il","$1","$0","gcO",0,2,1],
is:[function(a){var z,y,x
H.w(a,"$isj",[D.a2],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.ex(x))return!1}return!0},"$1","gf7",4,0,37],
i6:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcO(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa2")
if(t instanceof D.cq)C.a.h(this.r,t)
s=t.z
if(s==null){s=new D.b3()
s.a=H.f([],v)
s.c=0
t.z=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.ci(a,b,this,[z])
z.b=!0
this.a7(z)},"$2","geN",8,0,18],
iu:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcO(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa2")
if(t instanceof D.cq)C.a.L(this.r,t)
s=t.z
if(s==null){s=new D.b3()
s.a=H.f([],v)
s.c=0
t.z=s}H.h(x,w)
C.a.L(s.a,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.a7(z)},"$2","gf9",8,0,18],
ex:function(a){var z=C.a.bm(this.r,a)
return z},
$asj:function(){return[D.a2]},
$asaF:function(){return[D.a2]}},iv:{"^":"b;",$isa2:1,$isaI:1},cq:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gB:function(){var z=this.z
if(z==null){z=D.S()
this.z=z}return z},
a7:[function(a){var z
H.e(a,"$isu")
z=this.z
if(!(z==null))z.H(a)},function(){return this.a7(null)},"ia","$1","$0","geR",0,2,1],
$isa2:1,
$isaI:1},ja:{"^":"b;",$isa2:1,$isaI:1},jb:{"^":"b;",$isa2:1,$isaI:1},jc:{"^":"b;",$isa2:1,$isaI:1}}],["","",,V,{"^":"",
n1:[function(a,b){if(typeof b!=="number")return b.P()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","ii",8,0,33],
mP:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.ba(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.b.ab("null",c)
return C.b.ab(C.h.e_($.p.$2(a,0)?0:a,b),c+b+1)},
br:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.r],"$asc")
z=H.f([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.b.ab(z[u],x))}return z},
a_:{"^":"b;a,b,c",
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
return new V.a_(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
b0:{"^":"b;a,b,c,d",
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
return new V.b0(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b0))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
cm:{"^":"b;a,b,c,d,e,f,r,x,y",
ad:function(a,b){var z=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$iscm")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.h.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.h.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.h.k(t,s)
q=a5.b
p=C.h.k(z,q)
o=a5.e
n=C.h.k(w,o)
m=a5.x
l=C.h.k(t,m)
k=a5.c
z=C.h.k(z,k)
j=a5.f
w=C.h.k(w,j)
i=a5.y
t=C.h.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.h.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.h.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.h.k(d,s)
b=C.h.k(h,q)
a=C.h.k(f,o)
a0=C.h.k(d,m)
h=C.h.k(h,k)
f=C.h.k(f,j)
d=C.h.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.h.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.h.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cm(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.k(a3,s),C.h.k(a1,q)+C.h.k(a2,o)+C.h.k(a3,m),C.h.k(a1,k)+C.h.k(a2,j)+C.h.k(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cm))return!1
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
i:function(a){var z,y,x,w,v,u,t,s
z=[P.r]
y=V.br(H.f([this.a,this.d,this.r],z),3,0)
x=V.br(H.f([this.b,this.e,this.x],z),3,0)
w=V.br(H.f([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.d(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.d(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.d(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.d(y,1)
s=" "+y[1]+", "
if(1>=u)return H.d(x,1)
s=s+x[1]+", "
if(1>=t)return H.d(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.d(y,2)
z=" "+y[2]+", "
if(2>=u)return H.d(x,2)
z=z+x[2]+", "
if(2>=t)return H.d(w,2)
return s+(z+w[2]+"]")}},
at:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ad:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
dI:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.c1()
a3=1/a2
a4=-w
a5=-i
return V.aH((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isat")
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
return V.aH(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cn:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.E(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.at))return!1
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
i:function(a){return this.K()},
dw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.br(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.br(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.br(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.br(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
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
K:function(){return this.dw("",3,0)},
C:function(a){return this.dw(a,3,0)},
p:{
aH:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c1:function(){return V.aH(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eg:function(a,b,c){return V.aH(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ef:function(a,b,c,d){return V.aH(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
ee:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aH(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)}}},
V:{"^":"b;q:a>,t:b>",
P:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.V(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
Y:{"^":"b;q:a>,t:b>,c",
D:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.Y(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
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
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
bG:{"^":"b;q:a>,t:b>,c,d",
k:function(a,b){return new V.bG(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bG))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
eo:{"^":"b;q:a>,t:b>,c,d",
gam:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eo))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"},
p:{
ep:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eo(a,b,c,d)}}},
a5:{"^":"b;a,b",
ho:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,24],
E:function(a){var z,y,x,w
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
return new V.a5(z*b,y*b)},
A:function(a,b){var z,y
if($.p.$2(b,0))return new V.a5(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.a5(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
ho:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,24],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cd:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
at:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.E(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.p.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dJ:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hc:{"^":"dP;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bI:function(a){var z=V.mP(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.S()
this.y=z}return z},
Y:function(a){var z=this.y
if(!(z==null))z.H(a)},
se4:function(a,b){},
sdK:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bI(z)}z=new D.N("maximumLocation",y,this.b,this,[P.r])
z.b=!0
this.Y(z)}},
sdM:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bI(z)}z=new D.N("minimumLocation",y,this.c,this,[P.r])
z.b=!0
this.Y(z)}},
sa0:function(a,b){var z,y
b=this.bI(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.N("location",y,b,this,[P.r])
z.b=!0
this.Y(z)}},
sdL:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.N("maximumVelocity",y,a,this,[P.r])
z.b=!0
this.Y(z)}},
sX:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.N("velocity",x,a,this,[P.r])
z.b=!0
this.Y(z)}},
sd6:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.N("dampening",y,a,this,[P.r])
z.b=!0
this.Y(z)}},
an:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa0(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sX(y)}},
p:{
dR:function(){var z=new U.hc()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dS:{"^":"ag;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.S()
this.b=z}return z},
aP:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dS))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
p:{
bX:function(a){var z=new U.dS()
z.a=a
return z}}},e2:{"^":"aF;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.S()
this.e=z}return z},
Y:[function(a){var z
H.e(a,"$isu")
z=this.e
if(!(z==null))z.H(a)},function(){return this.Y(null)},"aB","$1","$0","gbc",0,2,1],
hX:[function(a,b){var z,y,x,w,v,u,t
z=U.ag
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbc(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.Y(z)},"$2","gel",8,0,23],
it:[function(a,b){var z,y,x,w,v,u,t
z=U.ag
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbc(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.h(x,w)
C.a.L(t.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.Y(z)},"$2","gf8",8,0,23],
aP:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.as(z,z.length,0,[H.x(z,0)]),x=null;z.F();){y=z.d
if(y!=null){w=y.aP(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.c1():x
z=this.e
if(!(z==null))z.ag(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e2))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.ag]},
$asaF:function(){return[U.ag]},
$isag:1,
p:{
cQ:function(a){var z=new U.e2()
z.bH(U.ag)
z.bb(z.gel(),z.gf8())
z.e=null
z.f=V.c1()
z.r=0
return z}}},ag:{"^":"dP;"},jG:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.S()
this.fx=z}return z},
Y:[function(a){var z
H.e(a,"$isu")
z=this.fx
if(!(z==null))z.H(a)},function(){return this.Y(null)},"aB","$1","$0","gbc",0,2,1],
h2:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.S()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.u]}
x=H.h(this.geJ(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.S()
x.d=z}x=H.h(this.geK(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.S()
x.c=z}x=H.h(this.geL(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.S()
x.f=z}x=H.h(this.geG(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.S()
x.d=z}x=H.h(this.geH(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.S()
x.b=z}x=H.h(this.gfz(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.S()
x.d=z}x=H.h(this.gfw(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.S()
x.c=z}y=H.h(this.gfv(),y)
C.a.h(z.a,y)
return!0},
aj:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.a5(z,y)},
i3:[function(a){a=H.k(H.e(a,"$isu"),"$isc2")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geJ",4,0,2],
i4:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isu"),"$isc2")
if(!this.cx)return
if(this.ch){z=a.d.P(0,a.y)
z=new V.a5(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.P(0,a.y)
z=this.aj(new V.a5(y.a,y.b).k(0,2).A(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.P(0,a.y)
w=this.aj(new V.a5(x.a,x.b).k(0,2).A(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa0(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.P(0,a.z)
this.dx=this.aj(new V.a5(y.a,y.b).k(0,2).A(0,z.gam()))}this.aB()},"$1","geK",4,0,2],
i5:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sX(-y*10*z)
this.aB()}},"$1","geL",4,0,2],
i1:[function(a){if(H.k(H.e(a,"$isu"),"$isec").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geG",4,0,2],
i2:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isu"),"$isc2")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.P(0,a.y)
w=this.aj(new V.a5(x.a,x.b).k(0,2).A(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa0(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.P(0,a.z)
this.dx=this.aj(new V.a5(y.a,y.b).k(0,2).A(0,z.gam()))
this.aB()},"$1","geH",4,0,2],
iB:[function(a){H.e(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfz",4,0,2],
iA:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isu"),"$iseC")
if(!this.cx)return
if(this.ch){z=a.d.P(0,a.y)
z=new V.a5(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.P(0,a.y)
z=this.aj(new V.a5(y.a,y.b).k(0,2).A(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.P(0,a.y)
w=this.aj(new V.a5(x.a,x.b).k(0,2).A(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa0(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.P(0,a.z)
this.dx=this.aj(new V.a5(y.a,y.b).k(0,2).A(0,z.gam()))}this.aB()},"$1","gfw",4,0,2],
iz:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sX(-y*10*z)
this.aB()}},"$1","gfv",4,0,2],
aP:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.dy=y
x=b.y
this.c.an(0,x)
this.b.an(0,x)
z=V.ee(this.b.d)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aH(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isag:1,
p:{
eY:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.jG()
y=U.dR()
y.se4(0,!0)
y.sdK(6.283185307179586)
y.sdM(0)
y.sa0(0,0)
y.sdL(100)
y.sX(0)
y.sd6(0.5)
z.b=y
y=y.gB()
y.toString
x=H.h(z.gbc(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)
y=U.dR()
y.se4(0,!0)
y.sdK(6.283185307179586)
y.sdM(0)
y.sa0(0,0)
y.sdL(100)
y.sX(0)
y.sd6(0.5)
z.c=y
C.a.h(y.gB().a,x)
z.d=null
z.e=!1
z.f=!1
z.r=!1
z.x=2.5
z.y=2.5
z.z=2
z.Q=4
z.cx=!1
z.ch=!1
z.cy=0
z.db=0
z.dx=null
z.dy=0
z.fr=null
z.fx=null
w=new X.aV(b,!1,!1)
v=z.d
z.d=w
y=new D.N("modifiers",v,w,z,[X.aV])
y.b=!0
z.Y(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.N("invertX",y,!1,z,[P.ah])
y.b=!0
z.Y(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.N("invertY",y,!1,z,[P.ah])
y.b=!0
z.Y(y)}z.h2(c)
return z}}}}],["","",,M,{"^":"",hv:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aC:[function(a){var z
H.e(a,"$isu")
z=this.x
if(!(z==null))z.H(a)},function(){return this.aC(null)},"hY","$1","$0","gai",0,2,1],
ib:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aG
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga1()==null){s=new D.b3()
s.a=H.f([],v)
s.c=0
t.sa1(s)}s=t.ga1()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","geS",8,0,8],
ic:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aG
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga1()==null){s=new D.b3()
s.a=H.f([],v)
s.c=0
t.sa1(s)}s=t.ga1()
s.toString
H.h(x,w)
C.a.L(s.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","geT",8,0,8],
sb5:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.h(this.gai(),{func:1,ret:-1,args:[D.u]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gai(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.N("technique",x,this.c,this,[O.cr])
z.b=!0
this.aC(z)}},
gB:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z},
aM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.dV(this.c)
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
u=C.d.ac(v.a*x)
if(typeof w!=="number")return H.o(w)
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
s=a.cy
r=z.b
q=z.c
p=z.d
o=p-q
n=1/Math.tan(r*0.5)
s.dU(V.aH(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.el
if(y==null){y=new V.E(0,0,-1)
m=y.A(0,Math.sqrt(y.E(y)))
y=new V.E(0,1,0).at(m)
l=y.A(0,Math.sqrt(y.E(y)))
k=m.at(l)
j=new V.E(0,0,0)
y=V.aH(l.a,k.a,m.a,l.N(0).E(j),l.b,k.b,m.b,k.N(0).E(j),l.c,k.c,m.c,m.N(0).E(j),0,0,0,1)
$.el=y
i=y}else i=y
y=z.a
if(y!=null){h=y.aP(0,a,z)
if(h!=null)i=h.k(0,i)}a.db.dU(i)
z=this.c
if(z!=null)z.an(0,a)
for(z=this.d.a,z=new J.as(z,z.length,0,[H.x(z,0)]);z.F();)z.d.an(0,a)
for(z=this.d.a,z=new J.as(z,z.length,0,[H.x(z,0)]);z.F();)z.d.aM(a)
this.a.toString
a.cy.cf()
a.db.cf()
this.b.toString
a.dT()},
$isob:1}}],["","",,A,{"^":"",dF:{"^":"b;a,b,c"},h_:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
he:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hd:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},i9:{"^":"er;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aH,0av,0aI,0bn,0d7,0d8,0bo,0bp,0d9,0da,0bq,0br,0dc,0dd,0bs,0de,0df,0bt,0dg,0dh,0bu,0bv,0bw,0di,0dj,0bx,0by,0dk,0dl,0bz,0dm,0c6,0dn,0c7,0dq,0c8,0dr,0c9,0ds,0ca,0dt,0cb,a,b,0c,0d,0e,0f,0r",
ef:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.ak("")
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
a2.fC(z)
a2.fJ(z)
a2.fD(z)
a2.fR(z)
a2.fS(z)
a2.fL(z)
a2.fW(z)
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
v=this.x
z=new P.ak("")
z.a="precision mediump float;\n"
z.a="precision mediump float;\n\n"
u=v.r1
if(u){z.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
t="precision mediump float;\n\nvarying vec3 normalVec;\n"}else t="precision mediump float;\n\n"
if(v.r2){t+="varying vec3 binormalVec;\n"
z.a=t}if(v.rx){t+="varying vec2 txt2D;\n"
z.a=t}if(v.ry){t+="varying vec3 txtCube;\n"
z.a=t}if(v.k3){t+="varying vec3 objPos;\n"
z.a=t}if(v.k4){t+="varying vec3 viewPos;\n"
z.a=t}t+="\n"
z.a=t
s=v.y2
if(s){t+="uniform mat4 colorMat;\n"
z.a=t}if(v.fr){t+="uniform mat4 invViewMat;\n"
z.a=t}z.a=t+"\n"
v.fG(z)
v.fB(z)
v.fE(z)
v.fH(z)
v.fP(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fN(z)
v.fO(z)}v.fK(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.f){r+="uniform samplerCube alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
q=v.k2
if(q){r+="// === Lighting ===\n"
z.a=r
r+="\n"
z.a=r
r+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
z.a=r
r+="{\n"
z.a=r
z.a=r+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
p=H.f([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.U(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fF(z)
v.fM(z)
v.fQ(z)
v.fT(z)
v.fU(z)
v.fV(z)
v.fI(z)}r=z.a+="// === Main ===\n"
r+="\n"
z.a=r
r+="void main()\n"
z.a=r
r+="{\n"
z.a=r
r+="   float alpha = alphaValue();\n"
z.a=r
if(u){u=r+"   vec3 norm = normal();\n"
z.a=u}else u=r
if(t)z.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
o=H.f([],[P.i])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(v.c!==C.c)z.a+="   setDiffuseColor();\n"
if(v.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(v.e!==C.c)z.a+="   setSpecularColor();\n"
if(v.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(v.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(v.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(v.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(v.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(v.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(v.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(v.a!==C.c)C.a.h(o,"emission()")
if(v.r!==C.c)C.a.h(o,"reflect(refl)")
if(v.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.U(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cI(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cI(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fC(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.t(P.v("Failed to link shader: "+H.l(m)))}this.fq()
this.fs()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaK")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaK")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaK")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaK")
if(a2.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isd9")
if(a2.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaK")
if(a2.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaK")
this.k3=H.f([],[A.aK])
y=a2.aH
if(y>0){this.k2=H.e(this.r.n(0,"bendMatCount"),"$isL")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.t(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaK"))}}y=a2.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isal")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isL")
break
case C.f:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isam")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isL")
break}}y=a2.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isal")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isL")
break
case C.f:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isam")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isL")
break}}y=a2.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.aH=H.k(this.r.n(0,"diffuseTxt"),"$isal")
this.aI=H.k(this.r.n(0,"nullDiffuseTxt"),"$isL")
break
case C.f:this.av=H.k(this.r.n(0,"diffuseTxt"),"$isam")
this.aI=H.k(this.r.n(0,"nullDiffuseTxt"),"$isL")
break}}y=a2.d
if(y!==C.c){this.bn=H.k(this.r.n(0,"invDiffuseClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.d7=H.k(this.r.n(0,"invDiffuseTxt"),"$isal")
this.bo=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isL")
break
case C.f:this.d8=H.k(this.r.n(0,"invDiffuseTxt"),"$isam")
this.bo=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isL")
break}}y=a2.e
if(y!==C.c){this.br=H.k(this.r.n(0,"shininess"),"$isZ")
this.bp=H.k(this.r.n(0,"specularClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.d9=H.k(this.r.n(0,"specularTxt"),"$isal")
this.bq=H.k(this.r.n(0,"nullSpecularTxt"),"$isL")
break
case C.f:this.da=H.k(this.r.n(0,"specularTxt"),"$isam")
this.bq=H.k(this.r.n(0,"nullSpecularTxt"),"$isL")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.e:this.dc=H.k(this.r.n(0,"bumpTxt"),"$isal")
this.bs=H.k(this.r.n(0,"nullBumpTxt"),"$isL")
break
case C.f:this.dd=H.k(this.r.n(0,"bumpTxt"),"$isam")
this.bs=H.k(this.r.n(0,"nullBumpTxt"),"$isL")
break}if(a2.dy){this.de=H.k(this.r.n(0,"envSampler"),"$isam")
this.df=H.k(this.r.n(0,"nullEnvTxt"),"$isL")
y=a2.r
if(y!==C.c){this.bt=H.k(this.r.n(0,"reflectClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dg=H.k(this.r.n(0,"reflectTxt"),"$isal")
this.bu=H.k(this.r.n(0,"nullReflectTxt"),"$isL")
break
case C.f:this.dh=H.k(this.r.n(0,"reflectTxt"),"$isam")
this.bu=H.k(this.r.n(0,"nullReflectTxt"),"$isL")
break}}y=a2.x
if(y!==C.c){this.bv=H.k(this.r.n(0,"refraction"),"$isZ")
this.bw=H.k(this.r.n(0,"refractClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.di=H.k(this.r.n(0,"refractTxt"),"$isal")
this.bx=H.k(this.r.n(0,"nullRefractTxt"),"$isL")
break
case C.f:this.dj=H.k(this.r.n(0,"refractTxt"),"$isam")
this.bx=H.k(this.r.n(0,"nullRefractTxt"),"$isL")
break}}}y=a2.y
if(y!==C.c){this.by=H.k(this.r.n(0,"alpha"),"$isZ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dk=H.k(this.r.n(0,"alphaTxt"),"$isal")
this.bz=H.k(this.r.n(0,"nullAlphaTxt"),"$isL")
break
case C.f:this.dl=H.k(this.r.n(0,"alphaTxt"),"$isam")
this.bz=H.k(this.r.n(0,"nullAlphaTxt"),"$isL")
break}}this.c6=H.f([],[A.eO])
this.c7=H.f([],[A.eP])
this.c8=H.f([],[A.eQ])
this.c9=H.f([],[A.eR])
this.ca=H.f([],[A.eS])
this.cb=H.f([],[A.eT])
if(a2.k2){y=a2.z
if(y>0){this.dm=H.e(this.r.n(0,"dirLightCount"),"$isL")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isJ")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isJ")
x=this.c6;(x&&C.a).h(x,new A.eO(l,k,j))}}y=a2.Q
if(y>0){this.dn=H.e(this.r.n(0,"pntLightCount"),"$isL")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isJ")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isJ")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isJ")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isZ")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isZ")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isZ")
x=this.c7;(x&&C.a).h(x,new A.eP(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dq=H.e(this.r.n(0,"spotLightCount"),"$isL")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isJ")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isJ")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isJ")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isJ")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isZ")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isZ")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isZ")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isZ")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isZ")
x=this.c8;(x&&C.a).h(x,new A.eQ(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dr=H.e(this.r.n(0,"txtDirLightCount"),"$isL")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isJ")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isJ")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isJ")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isJ")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isJ")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isL")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isal")
x=this.c9;(x&&C.a).h(x,new A.eR(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.ds=H.e(this.r.n(0,"txtPntLightCount"),"$isL")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isJ")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isJ")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isd9")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isJ")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isL")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isZ")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isZ")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isZ")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isam")
x=this.ca;(x&&C.a).h(x,new A.eS(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dt=H.e(this.r.n(0,"txtSpotLightCount"),"$isL")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isJ")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isJ")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isJ")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isJ")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isJ")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isL")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isJ")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isZ")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isZ")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isal")
x=this.cb;(x&&C.a).h(x,new A.eT(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
af:function(a,b,c){b.a.uniform1i(b.d,1)},
a8:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
ia:function(a,b){var z,y
z=a.av
y=new A.i9(b,z)
y.eh(b,z)
y.ef(a,b)
return y}}},ie:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aH,av,aI",
fC:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aH+"];\n"
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
fJ:function(a){var z
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
fD:function(a){var z
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
fR:function(a){var z,y
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
fS:function(a){var z,y
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
fL:function(a){var z
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
fW:function(a){var z
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
aq:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.az(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fG:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aq(a,z,"emission")
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
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fB:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aq(a,z,"ambient")
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
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fE:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"diffuse")
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
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fH:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"invDiffuse")
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
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
fP:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aq(a,z,"specular")
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
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
fK:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.i:break
case C.e:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.f:z+="uniform samplerCube bumpTxt;\n"
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
case C.e:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.f:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
fN:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aq(a,z,"reflect")
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
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fO:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aq(a,z,"refract")
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
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fF:function(a){var z,y
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
fM:function(a){var z,y
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
fQ:function(a){var z,y
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
fT:function(a){var z,y,x
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
fU:function(a){var z,y,x
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
fV:function(a){var z,y,x
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
fI:function(a){var z
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
i:function(a){return this.av}},eO:{"^":"b;a,b,c"},eR:{"^":"b;a,b,c,d,e,f,r,x"},eP:{"^":"b;a,b,c,d,e,f,r"},eS:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eQ:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eT:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},er:{"^":"cH;",
eh:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cI:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fC(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fq:function(){var z,y,x,w,v,u
z=H.f([],[A.dF])
y=this.a
x=H.C(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dF(y,v.name,u))}this.f=new A.h_(z)},
fs:function(){var z,y,x,w,v,u
z=H.f([],[A.aa])
y=this.a
x=H.C(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.ha(v.type,v.size,v.name,u))}this.r=new A.jr(z)},
aE:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.L(z,y,b,c)
else return A.d8(z,y,b,a,c)},
ez:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.al(z,y,b,c)
else return A.d8(z,y,b,a,c)},
eA:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.am(z,y,b,c)
else return A.d8(z,y,b,a,c)},
bh:function(a,b){return new P.f5(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
ha:function(a,b,c,d){switch(a){case 5120:return this.aE(b,c,d)
case 5121:return this.aE(b,c,d)
case 5122:return this.aE(b,c,d)
case 5123:return this.aE(b,c,d)
case 5124:return this.aE(b,c,d)
case 5125:return this.aE(b,c,d)
case 5126:return new A.Z(this.a,this.e,c,d)
case 35664:return new A.jm(this.a,this.e,c,d)
case 35665:return new A.J(this.a,this.e,c,d)
case 35666:return new A.jp(this.a,this.e,c,d)
case 35667:return new A.jn(this.a,this.e,c,d)
case 35668:return new A.jo(this.a,this.e,c,d)
case 35669:return new A.jq(this.a,this.e,c,d)
case 35674:return new A.jt(this.a,this.e,c,d)
case 35675:return new A.d9(this.a,this.e,c,d)
case 35676:return new A.aK(this.a,this.e,c,d)
case 35678:return this.ez(b,c,d)
case 35680:return this.eA(b,c,d)
case 35670:throw H.a(this.bh("BOOL",c))
case 35671:throw H.a(this.bh("BOOL_VEC2",c))
case 35672:throw H.a(this.bh("BOOL_VEC3",c))
case 35673:throw H.a(this.bh("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cd:{"^":"b;a,b",
i:function(a){return this.b}},aa:{"^":"b;"},jr:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.K()},
hi:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].i(0)+a
return x},
K:function(){return this.hi("\n")}},L:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jn:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jo:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jq:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jl:{"^":"aa;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
d8:function(a,b,c,d,e){var z=new A.jl(a,b,c,e)
z.f=d
z.e=P.i0(d,0,!1,P.m)
return z}}},Z:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jm:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},J:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jp:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jt:{"^":"aa;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},d9:{"^":"aa;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bm(H.w(a,"$isc",[P.r],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aK:{"^":"aa;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bm(H.w(a,"$isc",[P.r],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},al:{"^":"aa;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},am:{"^":"aa;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dq:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.ad,P.r,P.r]})
z=F.d5()
F.bR(z,b,c,d,a,1,0,0,1)
F.bR(z,b,c,d,a,0,1,0,3)
F.bR(z,b,c,d,a,0,0,1,2)
F.bR(z,b,c,d,a,-1,0,0,0)
F.bR(z,b,c,d,a,0,-1,0,0)
F.bR(z,b,c,d,a,0,0,-1,3)
z.ak()
return z},
cw:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bR:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.ad,P.r,P.r]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.E(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.E(t+h,s+f,r+g)
z.b=q
p=new V.E(t-h,s-f,r-g)
z.c=p
o=new V.E(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cw(y)
k=F.cw(z.b)
j=F.dz(d,e,new F.lM(z,F.cw(z.c),F.cw(z.d),k,l,c),b)
if(j!=null)a.b1(j)},
fE:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.r,args:[P.r]})
if(e<3)return
z=F.d5()
y=b?-1:1
x=-6.283185307179586/e
w=H.f([],[F.ad])
v=z.a
u=new V.E(0,0,y)
u=u.A(0,Math.sqrt(u.E(u)))
C.a.h(w,v.fZ(new V.bG(a,-1,-1,-1),new V.b0(1,1,1,1),new V.Y(0,0,c),new V.E(0,0,y),new V.V(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.E(r,q,y).A(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c5(new V.bG(a,-1,-1,-1),null,new V.b0(n,l,m,1),new V.Y(r*p,q*p,c),new V.E(0,0,y),new V.V(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.fX(w)
return z},
dr:function(a,b,c,d,e,f){return F.m5(b,c,d,new F.m4(a,f),e)},
m5:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
z=F.dz(c,e,new F.m7(d),null)
if(z==null)return
z.ak()
z.bX()
if(b)z.b1(F.fE(3,!1,1,new F.m8(d),e))
if(a)z.b1(F.fE(1,!0,-1,new F.m9(d),e))
return z},
mI:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.mJ()
y=F.dq(a,null,new F.mK(z),c)
y.bX()
return y},
fR:function(a,b,c,d){return F.fD(c,a,d,b,new F.mN())},
mo:function(a,b,c,d,e,f){return F.fD(d,a,e,b,new F.mp(f,c))},
fD:function(a,b,c,d,e){var z=F.dz(a,b,new F.m6(H.h(e,{func:1,ret:V.Y,args:[P.r]}),d,b,c),null)
if(z==null)return
z.ak()
z.bX()
return z},
dz:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.ad,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.d5()
y=H.f([],[F.ad])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c5(null,null,new V.b0(u,0,0,1),null,null,new V.V(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c4(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c5(null,null,new V.b0(o,n,m,1),null,null,new V.V(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c4(d))}}z.d.fY(a+1,b+1,y)
return z},
lM:{"^":"n:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cd(z.b,b).cd(z.d.cd(z.c,b),c)
a.sa0(0,new V.Y(y.a,y.b,y.c))
a.sdY(y.A(0,Math.sqrt(y.E(y))))
z=1-b
x=1-c
a.sd2(new V.bG(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
m4:{"^":"n:14;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
m7:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sa0(0,new V.Y(y,u,w))
u=new V.E(y,u,w)
a.sdY(u.A(0,Math.sqrt(u.E(u))))
a.sd2(new V.bG(1-c,2+c,-1,-1))}},
m8:{"^":"n:15;a",
$1:function(a){return this.a.$2(a,1)}},
m9:{"^":"n:15;a",
$1:function(a){return this.a.$2(1-a,0)}},
mJ:{"^":"n:14;",
$2:function(a,b){return 0}},
mK:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.A(0,Math.sqrt(x.E(x))).k(0,1+z)
a.sa0(0,new V.Y(z.a,z.b,z.c))}},
mN:{"^":"n:22;",
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)}},
mp:{"^":"n:22;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Y(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
m6:{"^":"n:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dA(y.$1(z),x)
x=J.dA(y.$1(z+3.141592653589793/this.c),x).P(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.E(x)))
u=new V.E(1,0,0)
y=v.at(!v.u(0,u)?new V.E(0,0,1):u)
t=y.A(0,Math.sqrt(y.E(y)))
y=t.at(v)
u=y.A(0,Math.sqrt(y.E(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa0(0,w.D(0,new V.Y(y.a-x.a,y.b-x.b,y.c-x.c)))}},
aj:{"^":"b;0a,0b,0c,0d,0e",
au:function(){if(!this.gaU()){C.a.L(this.a.a.d.b,this)
this.a.a.W()}this.bS()
this.bT()
this.ff()},
fn:function(a){this.a=a
C.a.h(a.d.b,this)},
fo:function(a){this.b=a
C.a.h(a.d.c,this)},
fp:function(a){this.c=a
C.a.h(a.d.d,this)},
bS:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
bT:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
ff:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gaU:function(){return this.a==null||this.b==null||this.c==null},
es:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.E(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dJ())return
return v.A(0,Math.sqrt(v.E(v)))},
ev:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.P(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.E(z)))
z=w.P(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.at(z.A(0,Math.sqrt(z.E(z))))
return z.A(0,Math.sqrt(z.E(z)))},
c0:function(){if(this.d!=null)return!0
var z=this.es()
if(z==null){z=this.ev()
if(z==null)return!1}this.d=z
this.a.a.W()
return!0},
er:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.E(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dJ())return
return v.A(0,Math.sqrt(v.E(v)))},
eu:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.P(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.P(0,u).k(0,l).D(0,u).P(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.E(z)))
z=k.at(m)
z=z.A(0,Math.sqrt(z.E(z))).at(k)
m=z.A(0,Math.sqrt(z.E(z)))}return m},
bZ:function(){if(this.e!=null)return!0
var z=this.er()
if(z==null){z=this.eu()
if(z==null)return!1}this.e=z
this.a.a.W()
return!0},
aY:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.N(0)
y=this.e
if(y!=null)this.e=y.N(0)
this.a.a.W()},
gh6:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var z,y
if(this.gaU())return a+"disposed"
z=a+C.b.ab(J.a8(this.a.e),0)+", "+C.b.ab(J.a8(this.b.e),0)+", "+C.b.ab(J.a8(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
K:function(){return this.C("")},
p:{
by:function(a,b,c){var z,y,x
z=new F.aj()
y=a.a
if(y==null)H.t(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.v("May not create a face with vertices attached to different shapes."))
z.fn(a)
z.fo(b)
z.fp(c)
C.a.h(z.a.a.d.b,z)
z.a.a.W()
return z}}},
hy:{"^":"b;"},
j0:{"^":"hy;",
b0:function(a,b,c){var z,y
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
cW:{"^":"b;0a,0b",
au:function(){if(!this.gaU()){C.a.L(this.a.a.c.b,this)
this.a.a.W()}this.bS()
this.bT()},
bS:function(){var z=this.a
if(z!=null){C.a.L(z.c.b,this)
this.a=null}},
bT:function(){var z=this.b
if(z!=null){C.a.L(z.c.c,this)
this.b=null}},
gaU:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){if(this.gaU())return a+"disposed"
return a+C.b.ab(J.a8(this.a.e),0)+", "+C.b.ab(J.a8(this.b.e),0)},
K:function(){return this.C("")}},
hR:{"^":"b;"},
jk:{"^":"hR;",
b0:function(a,b,c){var z,y
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
d2:{"^":"b;0a",
au:function(){var z=this.a
if(z!=null){C.a.L(z.a.b.b,this)
this.a.a.W()}this.fe()},
fe:function(){var z=this.a
if(z!=null){C.a.L(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ab(J.a8(z.e),0)},
K:function(){return this.C("")}},
es:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.S()
this.e=z}return z},
b1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.h8())}this.a.w()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d2()
if(r.a==null)H.t(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.H(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cW()
s=p.a
if(s==null)H.t(P.v("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.t(P.v("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.H(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.by(p,o,l)}z=this.e
if(!(z==null))z.ag(0)},
ak:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ak()||!1
if(!this.a.ak())y=!1
z=this.e
if(!(z==null))z.ag(0)
return y},
eE:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ad],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.b0(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hs:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ad],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.f([],z)
t=H.f([],x)
if(this.eE(a,v,y,u,t))b.b1(u)}this.a.w()
this.c.cj()
this.d.cj()
this.b.hK()
this.c.ck(new F.jk())
this.d.ck(new F.j0())
z=this.e
if(!(z==null))z.ag(0)},
h0:function(a){this.hs(new F.jU(),new F.iq())},
bX:function(){return this.h0(null)},
aY:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.aY()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.d(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdN(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).A(0,Math.sqrt(w*w+v*v+z*z))
if(!J.P(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.H(null)}}}}z=this.e
if(!(z==null))z.ag(0)},
h4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aO()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$bK().a)!==0)++w
if((x&$.$get$bL().a)!==0)++w
if((x&$.$get$bk().a)!==0)++w
if((x&$.$get$aL().a)!==0)++w
v=b.gct(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.dK])
for(r=0,q=0;q<w;++q){p=b.h1(q)
o=p.gct(p)
C.a.m(s,q,new Z.dK(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hp(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bm(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dL(new Z.f2(34962,j),s,b)
i.b=H.f([],[Z.ch])
if(this.b.b.length!==0){x=P.m
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.dd(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.dd(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.f([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.w()
C.a.h(h,g.e)}f=Z.dd(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(4,h.length,f))}return i},
i:function(a){var z=H.f([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.U(z,"\n")},
a3:function(a){var z=this.e
if(!(z==null))z.H(a)},
W:function(){return this.a3(null)},
p:{
d5:function(){var z,y
z=new F.es()
y=new F.jP(z)
y.b=!1
y.c=H.f([],[F.ad])
z.a=y
y=new F.j_(z)
y.b=H.f([],[F.d2])
z.b=y
y=new F.iZ(z)
y.b=H.f([],[F.cW])
z.c=y
y=new F.iY(z)
y.b=H.f([],[F.aj])
z.d=y
z.e=null
return z}}},
iY:{"^":"b;a,0b",
fX:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ad],"$asc")
z=H.f([],[F.aj])
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
C.a.h(z,F.by(x,v,u))}}return z},
fY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ad],"$asc")
z=H.f([],[F.aj])
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
C.a.h(z,F.by(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.by(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.by(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.by(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
ck:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b0(0,v,t)){v.au()
break}}}}},
cj:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.gh6(x)
if(y)x.au()}},
ak:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].c0())x=!1
return x},
c_:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].bZ())x=!1
return x},
aY:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].aY()},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.U(z,"\n")},
K:function(){return this.C("")}},
iZ:{"^":"b;a,0b",
gl:function(a){return this.b.length},
ck:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b0(0,v,t)){v.au()
break}}}}},
cj:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.au()}},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.U(z,"\n")},
K:function(){return this.C("")}},
j_:{"^":"b;a,0b",
gl:function(a){return this.b.length},
hK:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.au()}},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.U(z,"\n")},
K:function(){return this.C("")}},
ad:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c4:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c5(this.cx,x,u,z,y,w,v,a,t)},
h8:function(){return this.c4(null)},
sa0:function(a,b){var z
if(!J.P(this.f,b)){this.f=b
z=this.a
if(z!=null)z.W()}},
sdN:function(a){var z
a=a.A(0,Math.sqrt(a.E(a)))
if(!J.P(this.r,a)){this.r=a
z=this.a
if(z!=null)z.W()}},
sdY:function(a){var z
if(!J.P(this.z,a)){this.z=a
z=this.a
if(z!=null)z.W()}},
sd2:function(a){var z
if(!J.P(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.W()}},
hp:function(a){var z,y
z=J.M(a)
if(z.u(a,$.$get$aO())){z=this.f
y=[P.r]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aN())){z=this.r
y=[P.r]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aM())){z=this.x
y=[P.r]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aP())){z=this.y
y=[P.r]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.u(a,$.$get$aQ())){z=this.z
y=[P.r]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bK())){z=this.Q
y=[P.r]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bL())){z=this.Q
y=[P.r]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$bk()))return H.f([this.ch],[P.r])
else if(z.u(a,$.$get$aL())){z=this.cx
y=[P.r]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.r])},
c0:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.J(0,new F.jZ(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.ag(0)}return!0},
bZ:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.J(0,new F.jY(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.ag(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var z,y,x
z=H.f([],[P.i])
C.a.h(z,C.b.ab(J.a8(this.e),0))
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
C.a.h(z,V.Q(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.U(z,", ")
return a+"{"+x+"}"},
K:function(){return this.C("")},
p:{
c5:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ad()
y=new F.jX(z)
y.b=H.f([],[F.d2])
z.b=y
y=new F.jT(z)
x=[F.cW]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.jQ(z)
x=[F.aj]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$f_()
z.e=0
y=$.$get$aO()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aN().a)!==0?e:null
z.x=(x&$.$get$aM().a)!==0?b:null
z.y=(x&$.$get$aP().a)!==0?f:null
z.z=(x&$.$get$aQ().a)!==0?g:null
z.Q=(x&$.$get$f0().a)!==0?c:null
z.ch=(x&$.$get$bk().a)!==0?i:0
z.cx=(x&$.$get$aL().a)!==0?a:null
return z}}},
jZ:{"^":"n:10;a",
$1:function(a){var z,y
H.e(a,"$isaj")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
jY:{"^":"n:10;a",
$1:function(a){var z,y
H.e(a,"$isaj")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
jP:{"^":"b;a,0b,0c",
w:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.W()
return!0},
h_:function(a,b,c,d,e,f,g,h,i){var z=F.c5(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
fZ:function(a,b,c,d,e,f){return this.h_(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ak:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].c0()
return!0},
c_:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].bZ()
return!0},
h5:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.H(null)}}}}return!0},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
this.w()
z=H.f([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.U(z,"\n")},
K:function(){return this.C("")}},
jQ:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
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
J:function(a,b){H.h(b,{func:1,ret:-1,args:[F.aj]})
C.a.J(this.b,b)
C.a.J(this.c,new F.jR(this,b))
C.a.J(this.d,new F.jS(this,b))},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.U(z,"\n")},
K:function(){return this.C("")}},
jR:{"^":"n:10;a,b",
$1:function(a){H.e(a,"$isaj")
if(!J.P(a.a,this.a))this.b.$1(a)}},
jS:{"^":"n:10;a,b",
$1:function(a){var z
H.e(a,"$isaj")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
jT:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.U(z,"\n")},
K:function(){return this.C("")}},
jV:{"^":"b;"},
jU:{"^":"jV;",
b0:function(a,b,c){return J.P(b.f,c.f)}},
jW:{"^":"b;"},
iq:{"^":"jW;",
b1:function(a){var z,y,x,w
H.w(a,"$isc",[F.ad],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.E(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x)a[x].sdN(z)
return}},
jX:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.U(z,"\n")},
K:function(){return this.C("")}}}],["","",,O,{"^":"",ib:{"^":"cr;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.S()
this.dy=z}return z},
ae:[function(a){var z
H.e(a,"$isu")
z=this.dy
if(!(z==null))z.H(a)},function(){return this.ae(null)},"hZ","$1","$0","gem",0,2,1],
fj:[function(a){H.e(a,"$isu")
this.a=null
this.ae(a)},function(){return this.fj(null)},"iy","$1","$0","gfi",0,2,1],
i7:[function(a,b){var z=V.at
z=new D.ci(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.ae(z)},"$2","geO",8,0,21],
i8:[function(a,b){var z=V.at
z=new D.cj(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.ae(z)},"$2","geP",8,0,21],
cG:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
h="MaterialLight_"+C.d.i(q.a)+C.d.i(p.a)+C.d.i(o.a)+C.d.i(n.a)+C.d.i(m.a)+C.d.i(l.a)+C.d.i(k.a)+C.d.i(j.a)+C.d.i(i.a)+"_"
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
a=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a0=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aO()
if(c){z=$.$get$aN()
a6=new Z.bj(a6.a|z.a)}if(b){z=$.$get$aM()
a6=new Z.bj(a6.a|z.a)}if(a){z=$.$get$aP()
a6=new Z.bj(a6.a|z.a)}if(a0){z=$.$get$aQ()
a6=new Z.bj(a6.a|z.a)}if(a2){z=$.$get$aL()
a6=new Z.bj(a6.a|z.a)}return new A.ie(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
S:function(a,b){H.w(a,"$isc",[T.ez],"$asc")},
an:function(a,b){var z,y,x,w
for(z=this.dx.a,z=new J.as(z,z.length,0,[H.x(z,0)]);z.F();){y=z.d
y.a=new V.Y(0,0,0)
y.b=new V.E(0,0,1)
x=y.c
if(x!=null){w=x.aP(0,b,y)
if(w!=null){y.a=w.aO(y.a)
y.b=w.cn(y.b)}}}},
hM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cG()
y=a.fr.j(0,z.av)
if(y==null){y=A.ia(z,a.a)
x=y.b
if(x.length===0)H.t(P.v("May not cache a shader with no name."))
if(a.fr.c2(0,x))H.t(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aI
z=b.e
if(!(z instanceof Z.dL)){b.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)b.d.ak()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.c_()
t.a.c_()
t=t.e
if(!(t==null))t.ag(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.h5()
s=s.e
if(!(s==null))s.ag(0)}q=b.d.h4(new Z.k_(a.a),v)
q.aJ($.$get$aO()).e=this.a.y.c
if(z)q.aJ($.$get$aN()).e=this.a.Q.c
if(u)q.aJ($.$get$aM()).e=this.a.z.c
if(w.rx)q.aJ($.$get$aP()).e=this.a.ch.c
if(t)q.aJ($.$get$aQ()).e=this.a.cx.c
if(w.x1)q.aJ($.$get$aL()).e=this.a.cy.c
b.e=q}z=T.ez
p=H.f([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.he()
if(w.fx){u=this.a
t=a.dx
t=t.gV(t)
u=u.db
u.toString
u.ah(t.ad(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gV(t)
s=a.dx
s=t.k(0,s.gV(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ah(t.ad(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghI()
s=a.dx
s=t.k(0,s.gV(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ah(t.ad(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ah(t.ad(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ah(t.ad(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ah(C.t.ad(t,!0))}if(w.aH>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.r],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.e(s,"$isat")
t=t.k3
if(n>=t.length)return H.d(t,n)
t=t[n]
m=new Float32Array(H.bm(H.w(s.ad(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.c:break
case C.i:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.S(p,this.f.d)
u=this.a
t=this.f.d
u.af(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.S(p,this.f.e)
u=this.a
t=this.f.e
u.a8(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.i:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.S(p,this.r.d)
u=this.a
t=this.r.d
u.af(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.S(p,this.r.e)
u=this.a
t=this.r.e
u.a8(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.c:break
case C.i:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.S(p,this.x.d)
u=this.a
t=this.x.d
u.af(u.aH,u.aI,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.S(p,this.x.e)
u=this.a
t=this.x.e
u.a8(u.av,u.aI,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bn
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.S(p,this.y.d)
u=this.a
t=this.y.d
u.af(u.d7,u.bo,t)
t=this.a
u=this.y.f
t=t.bn
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.S(p,this.y.e)
u=this.a
t=this.y.e
u.a8(u.d8,u.bo,t)
t=this.a
u=this.y.f
t=t.bn
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bp
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.br
t.a.uniform1f(t.d,r)
break
case C.e:this.S(p,this.z.d)
u=this.a
t=this.z.d
u.af(u.d9,u.bq,t)
t=this.a
u=this.z.f
t=t.bp
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.br
u.a.uniform1f(u.d,r)
break
case C.f:this.S(p,this.z.e)
u=this.a
t=this.z.e
u.a8(u.da,u.bq,t)
t=this.a
u=this.z.f
t=t.bp
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.br
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dm
u.a.uniform1i(u.d,o)
u=a.db
l=u.gV(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.c6
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.cn(i.gc5(i))
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.ga9(i)
g=h.c
r=f.gbC()
s=f.gb9()
f=f.gbj()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dn
u.a.uniform1i(u.d,o)
u=a.db
l=u.gV(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.c7
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gcg(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.ge5(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aO(i.gcg(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga9(i)
f=h.d
g=s.gbC()
r=s.gb9()
s=s.gbj()
f.a.uniform3f(f.d,g,r,s)
s=i.gd_()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gd0()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gd1()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dq
u.a.uniform1i(u.d,o)
u=a.db
l=u.gV(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.c8
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.a
r=h.b
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.b
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=l.aO(i.a)
g=h.d
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.d
g=h.e
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.e
g=h.f
g.a.uniform1f(g.d,f)
f=i.f
g=h.r
g.a.uniform1f(g.d,f)
f=i.r
g=h.x
g.a.uniform1f(g.d,f)
f=i.x
g=h.y
g.a.uniform1f(g.d,f)
f=i.y
g=h.z
g.a.uniform1f(g.d,f);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dr
u.a.uniform1i(u.d,o)
u=a.db
l=u.gV(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
r=this.a.c9
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gb6()
H.w(p,"$isc",s,"$asc")
if(!C.a.bm(p,r)){r.saZ(0,p.length)
C.a.h(p,r)}r=i.gc5(i)
g=h.d
f=r.gaV(r)
e=r.gaW(r)
r=r.gaX()
g.a.uniform3f(g.d,f,e,r)
r=i.ghW()
e=h.b
f=r.gaV(r)
g=r.gaW(r)
r=r.gaX()
e.a.uniform3f(e.d,f,g,r)
r=i.gb4(i)
g=h.c
f=r.gaV(r)
e=r.gaW(r)
r=r.gaX()
g.a.uniform3f(g.d,f,e,r)
r=l.cn(i.gc5(i))
e=r.a
f=r.b
g=r.c
g=r.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga9(i)
f=h.f
e=g.gbC()
r=g.gb9()
g=g.gbj()
f.a.uniform3f(f.d,e,r,g)
g=i.gb6()
r=g.gb_(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gb_(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaZ(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.ds
u.a.uniform1i(u.d,o)
u=a.db
l=u.gV(u)
for(u=this.dx.y,t=u.length,s=[P.r],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
g=this.a.ca
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gb6()
H.w(p,"$isc",r,"$asc")
if(!C.a.bm(p,g)){g.saZ(0,p.length)
C.a.h(p,g)}d=l.k(0,i.gV(i))
g=i.gV(i).aO(new V.Y(0,0,0))
f=h.b
e=g.gq(g)
c=g.gt(g)
g=g.ge5(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aO(new V.Y(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dI(0)
c=h.d
m=new Float32Array(H.bm(H.w(new V.cm(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ad(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga9(i)
g=h.e
e=c.gbC()
f=c.gb9()
c=c.gbj()
g.a.uniform3f(g.d,e,f,c)
c=i.gb6()
g=c.gb_(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gb_(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gaZ(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gd_()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gd0()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gd1()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dt
u.a.uniform1i(u.d,o)
u=a.db
l=u.gV(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cb
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb6()
H.w(p,"$isc",z,"$asc")
if(!C.a.bm(p,s)){s.saZ(0,p.length)
C.a.h(p,s)}s=i.gcg(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.ge5(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gc5(i)
f=h.c
g=s.gaV(s)
r=s.gaW(s)
s=s.gaX()
f.a.uniform3f(f.d,g,r,s)
s=i.ghW()
r=h.d
g=s.gaV(s)
f=s.gaW(s)
s=s.gaX()
r.a.uniform3f(r.d,g,f,s)
s=i.gb4(i)
f=h.e
g=s.gaV(s)
r=s.gaW(s)
s=s.gaX()
f.a.uniform3f(f.d,g,r,s)
s=l.aO(i.gcg(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb6()
r=s.gb_(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gb_(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaZ(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga9(i)
r=h.y
g=s.gbC()
f=s.gb9()
s=s.gbj()
r.a.uniform3f(r.d,g,f,s)
s=i.giJ()
f=h.z
f.a.uniform1f(f.d,s)
s=i.giK()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gd_()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gd0()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gd1()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.e:this.S(p,this.Q.d)
z=this.a
u=this.Q.d
z.af(z.dc,z.bs,u)
break
case C.f:this.S(p,this.Q.e)
z=this.a
u=this.Q.e
z.a8(z.dd,z.bs,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gV(u).dI(0)
a.Q=u}z=z.fy
z.toString
z.ah(u.ad(0,!0))}if(w.dy){this.S(p,this.ch)
z=this.a
u=this.ch
z.a8(z.de,z.df,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bt
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.e:this.S(p,this.cx.d)
z=this.a
u=this.cx.d
z.af(z.dg,z.bu,u)
u=this.a
z=this.cx.f
u=u.bt
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.f:this.S(p,this.cx.e)
z=this.a
u=this.cx.e
z.a8(z.dh,z.bu,u)
u=this.a
z=this.cx.f
u=u.bt
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bw
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bv
u.a.uniform1f(u.d,s)
break
case C.e:this.S(p,this.cy.d)
z=this.a
u=this.cy.d
z.af(z.di,z.bx,u)
u=this.a
z=this.cy.f
u=u.bw
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bv
z.a.uniform1f(z.d,s)
break
case C.f:this.S(p,this.cy.e)
z=this.a
u=this.cy.e
z.a8(z.dj,z.bx,u)
u=this.a
z=this.cy.f
u=u.bw
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bv
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.by
z.a.uniform1f(z.d,t)
break
case C.e:this.S(p,this.db.d)
z=this.a
t=this.db.d
z.af(z.dk,z.bz,t)
t=this.a
z=this.db.f
t=t.by
t.a.uniform1f(t.d,z)
break
case C.f:this.S(p,this.db.e)
z=this.a
t=this.db.e
z.a8(z.dl,z.bz,t)
t=this.a
z=this.db.f
t=t.by
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bi(a)
z=b.e
z.bi(a)
z.aM(a)
z.e0(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].e0(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.hd()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cG().av},
p:{
ed:function(){var z,y,x,w
z=new O.ib()
y=O.cM(V.at)
z.e=y
y.bb(z.geO(),z.geP())
y=new O.b6(z,"emission")
y.c=C.c
y.f=new V.a_(0,0,0)
z.f=y
y=new O.b6(z,"ambient")
y.c=C.c
y.f=new V.a_(0,0,0)
z.r=y
y=new O.b6(z,"diffuse")
y.c=C.c
y.f=new V.a_(0,0,0)
z.x=y
y=new O.b6(z,"invDiffuse")
y.c=C.c
y.f=new V.a_(0,0,0)
z.y=y
y=new O.ih(z,"specular")
y.c=C.c
y.f=new V.a_(0,0,0)
y.ch=100
z.z=y
y=new O.id(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.b6(z,"reflect")
y.c=C.c
y.f=new V.a_(0,0,0)
z.cx=y
y=new O.ig(z,"refract")
y.c=C.c
y.f=new V.a_(0,0,0)
y.ch=1
z.cy=y
y=new O.ic(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.hQ()
y.bH(D.a2)
y.e=H.f([],[D.hn])
y.f=H.f([],[D.iv])
y.r=H.f([],[D.cq])
y.x=H.f([],[D.ja])
y.y=H.f([],[D.jb])
y.z=H.f([],[D.jc])
y.Q=null
y.ch=null
y.cs(y.geN(),y.gf7(),y.gf9())
z.dx=y
x=y.Q
if(x==null){x=D.S()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.u]}
w=H.h(z.gfi(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.S()
w.ch=y}x=H.h(z.gem(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},ic:{"^":"cY;0f,a,b,0c,0d,0e"},cY:{"^":"b;",
bf:["ed",function(){}]},id:{"^":"cY;a,b,0c,0d,0e"},b6:{"^":"cY;0f,a,b,0c,0d,0e",
cS:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.N(this.b+".color",z,a,this,[V.a_])
y.b=!0
this.a.ae(y)}},
bf:["bG",function(){this.ed()
this.cS(new V.a_(1,1,1))}],
sa9:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bf()
z=this.a
z.a=null
z.ae(null)}this.cS(b)}},ig:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
fm:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".refraction",y,a,this,[P.r])
z.b=!0
this.a.ae(z)}},
bf:function(){this.bG()
this.fm(1)}},ih:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
bU:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".shininess",y,a,this,[P.r])
z.b=!0
this.a.ae(z)}},
bf:function(){this.bG()
this.bU(100)}},cr:{"^":"b;"}}],["","",,T,{"^":"",ez:{"^":"cH;"},j9:{"^":"b;a,0b,0c,0d,0e"}}],["","",,X,{"^":"",dN:{"^":"b;",$isaI:1},hD:{"^":"ex;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z}},it:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.S()
this.e=z}return z},
aQ:[function(a){var z
H.e(a,"$isu")
z=this.e
if(!(z==null))z.H(a)},function(){return this.aQ(null)},"i_","$1","$0","gcv",0,2,1],
saL:function(a){var z,y,x
if(!J.P(this.a,a)){z=this.a
if(z!=null){z=z.gB()
z.toString
y=H.h(this.gcv(),{func:1,ret:-1,args:[D.u]})
C.a.L(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gcv(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.N("mover",x,this.a,this,[U.ag])
z.b=!0
this.aQ(z)}},
$isaI:1,
$isdN:1},ex:{"^":"b;"}}],["","",,B,{"^":"",
mD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.r.fl(x,(x&&C.r).cA(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.ab
W.a3(z,"scroll",H.h(new B.mE(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
mF:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isc",[P.i],"$asc")
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
u=W.dO(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.e(v.insertCell(-1),"$isbI")
x=c.length>0
s=x?4:3
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.e(q.insertCell(-1),"$isbI").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;p<1;++p){o=z.createElement("div")
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.e(q.insertCell(-1),"$isbI")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.e(q.insertCell(-1),"$isbI")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.e(q.insertCell(-1),"$isbI").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.mD(a,y,!1,"../resources/SnowTop.png")},
mG:function(a){P.jg(C.G,new B.mH(a))},
iH:{"^":"b;a,0b",
cY:function(a,b,c,d){var z,y,x,w,v,u,t
H.h(c,{func:1,ret:-1})
if(this.b==null)return
z=this.a
if(P.db().gbB().j(0,z)==null)if(d){c.$0()
this.e1(b)
y=!0}else y=!1
else if(P.db().gbB().j(0,z)===b){c.$0()
y=!0}else y=!1
x=document
w=x.createElement("label")
v=w.style
v.whiteSpace="nowrap"
J.dD(this.b).h(0,w)
u=W.hG("radio")
u.checked=y
u.name=z
z=W.ab
W.a3(u,"change",H.h(new B.iI(this,u,b,c),{func:1,ret:-1,args:[z]}),!1,z)
w.appendChild(u)
t=x.createElement("span")
t.textContent=b
w.appendChild(t)
J.dD(this.b).h(0,x.createElement("br"))},
aS:function(a,b,c){return this.cY(a,b,c,!1)},
e1:function(a){var z,y,x,w,v
z=P.db()
y=P.i
x=P.hX(z.gbB(),y,y)
x.m(0,this.a,a)
w=z.dW(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.l2([],[]).co(""),"",v)}},
iI:{"^":"n:20;a,b,c,d",
$1:function(a){if(this.b.checked){this.a.e1(this.c)
this.d.$0()}}},
mE:{"^":"n:20;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.l(-0.05*C.h.ac(this.b.scrollTop))+"px"
z.top=y}},
mH:{"^":"n:49;a",
$1:function(a){H.e(a,"$isbg")
P.dy(C.h.e_(this.a.ghj(),2)+" fps")}}}],["","",,N,{"^":"",
fM:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
B.mF("Test 024",H.f(["shapes"],[P.i]),"Test of the Material Lighting shader with a simple spot light. Use Ctrl plus the mouse to move the light.")
z=document
y=z.getElementById("threeDart")
if(y==null)H.t(P.v("Failed to find an element with the identifier, threeDart."))
x=E.je(y,!0,!0,!0,!1)
w=U.cQ(null)
w.h(0,U.bX(V.eg(0,0,-2.5)))
w.h(0,U.eY(!1,!0,x.r,!1,!1,!1,null,!1))
v=new V.a_(1,1,1)
u=new D.cq()
u.d=new V.a_(1,1,1)
u.e=3.141592653589793
u.f=3.141592653589793
u.r=1
u.x=0
u.y=0
u.a=new V.Y(0,0,0)
u.b=new V.E(0,0,1)
t=u.c
u.c=w
s=w.gB()
s.toString
r=H.h(u.geR(),{func:1,ret:-1,args:[D.u]})
C.a.h(s.a,r)
s=new D.N("mover",t,u.c,u,[U.ag])
s.b=!0
u.a7(s)
if(!u.d.u(0,v)){t=u.d
u.d=v
s=new D.N("color",t,v,u,[V.a_])
s.b=!0
u.a7(s)}s=u.e
if(!$.p.$2(s,0.6)){t=u.e
u.e=0.6
s=new D.N("cutoff",t,0.6,u,[P.r])
s.b=!0
u.a7(s)}s=u.f
if(!$.p.$2(s,0.5)){t=u.f
u.f=0.5
s=new D.N("coneAngle",t,0.5,u,[P.r])
s.b=!0
u.a7(s)}s=u.r
if(!$.p.$2(s,0.5)){t=u.r
u.r=0.5
s=new D.N("attenuation0",t,0.5,u,[P.r])
s.b=!0
u.a7(s)}s=u.x
if(!$.p.$2(s,0.05)){t=u.x
u.x=0.05
s=new D.N("attenuation1",t,0.05,u,[P.r])
s.b=!0
u.a7(s)}q=O.ed()
q.dx.h(0,u)
q.f.sa9(0,new V.a_(0,0,0))
s=q.r
s.sa9(0,new V.a_(0,0,0))
s=q.x
s.sa9(0,new V.a_(0.7,0.7,0.7))
s=q.z
s.sa9(0,new V.a_(0.3,0.3,0.3))
s=q.z
if(s.c===C.c){s.c=C.i
s.bG()
s.bU(100)
r=s.a
r.a=null
r.ae(null)}s.bU(100)
p=E.cO(null,!0,null,"",null,null)
p.sa4(0,F.fR(30,1,15,0.5))
o=E.cO(null,!0,null,"",null,null)
o.saL(U.bX(V.ef(3,3,3,1)))
s=F.dq(1,null,null,1)
s.aY()
o.sa4(0,s)
n=U.cQ(null)
n.h(0,U.eY(!1,!1,x.r,!1,!1,!1,null,!1))
n.h(0,U.bX(V.ee(3.141592653589793)))
n.h(0,U.bX(V.eg(0,0,5)))
m=E.cO(null,!0,null,"",null,null)
s=U.cQ(null)
s.h(0,U.bX(V.ef(0.1,0.1,0.1,1)))
s.h(0,w)
m.saL(s)
m.sa4(0,F.dr(0,!1,!0,1,40,1))
s=O.ed()
s.f.sa9(0,new V.a_(1,1,1))
m.sb5(s)
s=new M.hv()
r=O.cM(E.aG)
s.d=r
r.bb(s.geS(),s.geT())
s.e=null
s.f=null
s.r=null
s.x=null
l=new X.it()
l.b=1.0471975511965976
l.c=0.1
l.d=2000
l.saL(null)
r=l.b
if(!$.p.$2(r,1.0471975511965976)){t=l.b
l.b=1.0471975511965976
r=new D.N("fov",t,1.0471975511965976,l,[P.r])
r.b=!0
l.aQ(r)}r=l.c
if(!$.p.$2(r,0.1)){t=l.c
l.c=0.1
r=new D.N("near",t,0.1,l,[P.r])
r.b=!0
l.aQ(r)}r=l.d
if(!$.p.$2(r,2000)){t=l.d
l.d=2000
r=new D.N("far",t,2000,l,[P.r])
r.b=!0
l.aQ(r)}r=s.a
if(r!==l){if(r!=null){r=r.gB()
r.toString
k=H.h(s.gai(),{func:1,ret:-1,args:[D.u]})
C.a.L(r.a,k)}t=s.a
s.a=l
r=l.gB()
r.toString
k=H.h(s.gai(),{func:1,ret:-1,args:[D.u]})
C.a.h(r.a,k)
r=new D.N("camera",t,s.a,s,[X.dN])
r.b=!0
s.aC(r)}j=new X.hD()
r=new V.b0(0,0,0,1)
j.a=r
j.b=!0
j.c=2000
j.d=!0
j.e=0
j.f=!1
r=V.ep(0,0,1,1)
j.r=r
r=s.b
if(r!==j){if(r!=null){r=r.gB()
r.toString
k=H.h(s.gai(),{func:1,ret:-1,args:[D.u]})
C.a.L(r.a,k)}t=s.b
s.b=j
r=j.gB()
r.toString
k=H.h(s.gai(),{func:1,ret:-1,args:[D.u]})
C.a.h(r.a,k)
r=new D.N("target",t,s.b,s,[X.ex])
r.b=!0
s.aC(r)}s.sb5(null)
s.sb5(q)
s.d.h(0,p)
s.d.h(0,o)
s.d.h(0,m)
s.a.saL(n)
r=x.d
if(r!==s){if(r!=null){r=r.gB()
r.toString
k=H.h(x.gcu(),{func:1,ret:-1,args:[D.u]})
C.a.L(r.a,k)}x.d=s
s=s.gB()
s.toString
r=H.h(x.gcu(),{func:1,ret:-1,args:[D.u]})
C.a.h(s.a,r)
x.ej()}s=new B.iH("shapes")
z=z.getElementById("shapes")
s.b=z
if(z==null)H.t("Failed to find "+s.i(0)+"._elemId for RadioGroup")
s.aS(0,"Cube",new N.mr(p))
s.aS(0,"Cylinder",new N.ms(p))
s.aS(0,"Cone",new N.mt(p))
s.aS(0,"Sphere",new N.mu(p))
s.cY(0,"Toroid",new N.mv(p),!0)
s.aS(0,"Knot",new N.mw(p))
B.mG(x)},
mr:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.dq(1,null,null,1))}},
ms:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.dr(1,!0,!0,1,40,1))}},
mt:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.dr(1,!0,!1,1,40,0))}},
mu:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.mI(6,null,6))}},
mv:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.fR(30,1,15,0.5))}},
mw:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.mo(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e6.prototype
return J.hL.prototype}if(typeof a=="string")return J.c_.prototype
if(a==null)return J.e7.prototype
if(typeof a=="boolean")return J.hK.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.aC=function(a){if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.c7=function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.me=function(a){if(typeof a=="number")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c4.prototype
return a}
J.mf=function(a){if(typeof a=="number")return J.bZ.prototype
if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c4.prototype
return a}
J.du=function(a){if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c4.prototype
return a}
J.aT=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).u(a,b)}
J.fS=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.me(a).M(a,b)}
J.dA=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mf(a).k(a,b)}
J.dB=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fJ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aC(a).j(a,b)}
J.cE=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fJ(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c7(a).m(a,b,c)}
J.fT=function(a,b){return J.du(a).G(a,b)}
J.fU=function(a,b,c){return J.aT(a).fg(a,b,c)}
J.fV=function(a,b,c,d){return J.aT(a).cZ(a,b,c,d)}
J.fW=function(a,b){return J.du(a).T(a,b)}
J.cF=function(a,b,c){return J.aC(a).h7(a,b,c)}
J.cG=function(a,b){return J.c7(a).I(a,b)}
J.fX=function(a,b,c,d){return J.c7(a).aw(a,b,c,d)}
J.dC=function(a,b){return J.c7(a).J(a,b)}
J.dD=function(a){return J.aT(a).gc1(a)}
J.b_=function(a){return J.M(a).gR(a)}
J.bu=function(a){return J.c7(a).gZ(a)}
J.ar=function(a){return J.aC(a).gl(a)}
J.fY=function(a,b){return J.aT(a).hN(a,b)}
J.fZ=function(a,b){return J.aT(a).sa_(a,b)}
J.a8=function(a){return J.M(a).i(a)}
I.ap=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cL.prototype
C.r=W.hh.prototype
C.H=J.q.prototype
C.a=J.b5.prototype
C.d=J.e6.prototype
C.t=J.e7.prototype
C.h=J.bZ.prototype
C.b=J.c_.prototype
C.O=J.c0.prototype
C.T=H.d1.prototype
C.U=W.ip.prototype
C.z=J.iu.prototype
C.q=J.c4.prototype
C.A=W.bM.prototype
C.B=W.k2.prototype
C.D=new P.h3(!1)
C.C=new P.h2(C.D)
C.E=new P.is()
C.F=new P.jO()
C.j=new P.kP()
C.c=new A.cd(0,"ColorSourceType.None")
C.i=new A.cd(1,"ColorSourceType.Solid")
C.e=new A.cd(2,"ColorSourceType.Texture2D")
C.f=new A.cd(3,"ColorSourceType.TextureCube")
C.G=new P.bx(5e6)
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=H.f(I.ap([127,2047,65535,1114111]),[P.m])
C.m=H.f(I.ap([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.f(I.ap([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.f(I.ap([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.Q=H.f(I.ap([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.p=H.f(I.ap([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.f(I.ap([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.R=H.f(I.ap([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.f(I.ap([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.P=H.f(I.ap([]),[P.i])
C.S=new H.hg(0,{},C.P,[P.i,P.i])
C.k=new P.jH(!1)
$.aw=0
$.bv=null
$.dI=null
$.dk=!1
$.fH=null
$.fz=null
$.fP=null
$.cz=null
$.cC=null
$.dv=null
$.bn=null
$.bS=null
$.bT=null
$.dl=!1
$.U=C.j
$.dY=null
$.dX=null
$.dW=null
$.dV=null
$.p=V.ii()
$.el=null
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
I.$lazy(y,x,w)}})(["dU","$get$dU",function(){return H.fG("_$dart_dartClosure")},"cT","$get$cT",function(){return H.fG("_$dart_js")},"eD","$get$eD",function(){return H.az(H.cs({
toString:function(){return"$receiver$"}}))},"eE","$get$eE",function(){return H.az(H.cs({$method$:null,
toString:function(){return"$receiver$"}}))},"eF","$get$eF",function(){return H.az(H.cs(null))},"eG","$get$eG",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eK","$get$eK",function(){return H.az(H.cs(void 0))},"eL","$get$eL",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eI","$get$eI",function(){return H.az(H.eJ(null))},"eH","$get$eH",function(){return H.az(function(){try{null.$method$}catch(z){return z.message}}())},"eN","$get$eN",function(){return H.az(H.eJ(void 0))},"eM","$get$eM",function(){return H.az(function(){try{(void 0).$method$}catch(z){return z.message}}())},"de","$get$de",function(){return P.k3()},"bU","$get$bU",function(){return[]},"eZ","$get$eZ",function(){return P.jL()},"f4","$get$f4",function(){return H.im(H.bm(H.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fp","$get$fp",function(){return P.iN("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fv","$get$fv",function(){return P.lO()},"dT","$get$dT",function(){return{}},"f1","$get$f1",function(){return Z.an(0)},"f_","$get$f_",function(){return Z.an(511)},"aO","$get$aO",function(){return Z.an(1)},"aN","$get$aN",function(){return Z.an(2)},"aM","$get$aM",function(){return Z.an(4)},"aP","$get$aP",function(){return Z.an(8)},"aQ","$get$aQ",function(){return Z.an(16)},"bK","$get$bK",function(){return Z.an(32)},"bL","$get$bL",function(){return Z.an(64)},"f0","$get$f0",function(){return Z.an(96)},"bk","$get$bk",function(){return Z.an(128)},"aL","$get$aL",function(){return Z.an(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.m,[P.j,E.aG]]},{func:1,ret:P.G,args:[F.ad,P.r,P.r]},{func:1,ret:P.G,args:[F.aj]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[D.u]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:P.r,args:[P.r]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.m,[P.j,D.a2]]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:P.G,args:[W.ab]},{func:1,ret:-1,args:[P.m,[P.j,V.at]]},{func:1,ret:V.Y,args:[P.r]},{func:1,ret:-1,args:[P.m,[P.j,U.ag]]},{func:1,ret:P.r},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.G,args:[,]},{func:1,ret:W.a1,args:[W.I]},{func:1,args:[P.i]},{func:1,ret:-1,args:[P.b],opt:[P.au]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:P.G,args:[P.W]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.ah,args:[P.r,P.r]},{func:1,ret:[P.aR,,],args:[,]},{func:1,ret:-1,args:[W.bM]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ah,args:[[P.j,D.a2]]},{func:1,ret:[P.H,P.i,P.i],args:[[P.H,P.i,P.i],P.i]},{func:1,args:[,P.i]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.ah,args:[W.I]},{func:1,ret:P.O,args:[P.m]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.G,args:[P.bg]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.mM(d||a)
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
Isolate.ap=a.ap
Isolate.ds=a.ds
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
if(typeof dartMainRunner==="function")dartMainRunner(N.fM,[])
else N.fM([])})})()
//# sourceMappingURL=test.dart.js.map
