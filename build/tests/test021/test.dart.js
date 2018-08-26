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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.du"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.du"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.du(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dw=function(){}
var dart=[["","",,H,{"^":"",nO:{"^":"b;a"}}],["","",,J,{"^":"",
O:function(a){return void 0},
dB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cC:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dz==null){H.mt()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c3("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cX()]
if(v!=null)return v
v=H.my(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cX(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
r:{"^":"b;",
u:function(a,b){return a===b},
gS:function(a){return H.bI(a)},
j:["el",function(a){return"Instance of '"+H.b9(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hQ:{"^":"r;",
j:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isah:1},
ea:{"^":"r;",
u:function(a,b){return null==b},
j:function(a){return"null"},
gS:function(a){return 0},
$isH:1},
cY:{"^":"r;",
gS:function(a){return 0},
j:["em",function(a){return String(a)}]},
iA:{"^":"cY;"},
c4:{"^":"cY;"},
c1:{"^":"cY;",
j:function(a){var z=a[$.$get$dX()]
if(z==null)return this.em(a)
return"JavaScript function for "+H.l(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscT:1},
b5:{"^":"r;$ti",
h:function(a,b){H.z(b,H.x(a,0))
if(!!a.fixed$length)H.t(P.B("add"))
a.push(b)},
P:function(a,b){var z
if(!!a.fixed$length)H.t(P.B("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b1(a))}},
W:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hr:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b1(a))}return y},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bI:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a0(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.x(a,0)])
return H.f(a.slice(b,c),[H.x(a,0)])},
gaD:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hO())},
aB:function(a,b,c,d){var z
H.z(d,H.x(a,0))
if(!!a.immutable$list)H.t(P.B("fill range"))
P.aK(b,c,a.length,null,null,null)
for(z=b;z.N(0,c);z=z.D(0,1))a[z]=d},
bn:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
j:function(a){return P.cV(a,"[","]")},
ga_:function(a){return new J.at(a,a.length,0,[H.x(a,0)])},
gS:function(a){return H.bI(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cb(b,"newLength",null))
if(b<0)throw H.a(P.a0(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b>=a.length||b<0)throw H.a(H.aD(a,b))
return a[b]},
m:function(a,b,c){H.C(b)
H.z(c,H.x(a,0))
if(!!a.immutable$list)H.t(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b>=a.length||b<0)throw H.a(H.aD(a,b))
a[b]=c},
$isk:1,
$isc:1,
p:{
hP:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a0(a,0,4294967295,"length",null))
return J.e8(new Array(a),b)},
e8:function(a,b){return J.bB(H.f(a,[b]))},
bB:function(a){H.bW(a)
a.fixed$length=Array
return a}}},
nN:{"^":"b5;$ti"},
at:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c_:{"^":"r;",
ghx:function(a){return a===0?1/a<0:a<0},
dG:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
e8:function(a,b){var z
if(b>20)throw H.a(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghx(a))return"-"+z
return z},
ba:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.V(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.B("Unexpected toString result: "+z))
x=J.aE(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.i("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
i:function(a,b){if(typeof b!=="number")throw H.a(H.af(b))
return a*b},
bd:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eo:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d3(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.d3(a,b)},
d3:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aM:function(a,b){var z
if(a>0)z=this.d1(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fG:function(a,b){if(b<0)throw H.a(H.af(b))
return this.d1(a,b)},
d1:function(a,b){return b>31?0:a>>>b},
N:function(a,b){if(typeof b!=="number")throw H.a(H.af(b))
return a<b},
$isq:1,
$isX:1},
e9:{"^":"c_;",$isn:1},
hR:{"^":"c_;"},
c0:{"^":"r;",
V:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b<0)throw H.a(H.aD(a,b))
if(b>=a.length)H.t(H.aD(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aD(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.M(b)
if(typeof b!=="string")throw H.a(P.cb(b,null,null))
return a+b},
aT:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.af(b))
c=P.aK(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.af(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a7:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.af(c))
if(typeof c!=="number")return c.N()
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a6:function(a,b){return this.a7(a,b,0)},
v:function(a,b,c){H.C(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.af(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.N()
if(b<0)throw H.a(P.cs(b,null,null))
if(b>c)throw H.a(P.cs(b,null,null))
if(c>a.length)throw H.a(P.cs(c,null,null))
return a.substring(b,c)},
aF:function(a,b){return this.v(a,b,null)},
i:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hK:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.i(c,z)+a},
aa:function(a,b){return this.hK(a,b," ")},
dO:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dN:function(a,b){return this.dO(a,b,0)},
hh:function(a,b,c){if(c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
return H.mS(a,b,c)},
j:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseo:1,
$isi:1}}],["","",,H,{"^":"",
cD:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hO:function(){return new P.j7("No element")},
hh:{"^":"jC;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.b.V(this.a,b)},
$ascv:function(){return[P.n]},
$asy:function(){return[P.n]},
$ask:function(){return[P.n]},
$asc:function(){return[P.n]}},
hy:{"^":"k;"},
i5:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aE(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b1(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
id:{"^":"k;a,b,$ti",
ga_:function(a){return new H.ie(J.bu(this.a),this.b,this.$ti)},
gl:function(a){return J.as(this.a)},
I:function(a,b){return this.b.$1(J.cJ(this.a,b))},
$ask:function(a,b){return[b]}},
ie:{"^":"cW;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascW:function(a,b){return[b]}},
k8:{"^":"k;a,b,$ti",
ga_:function(a){return new H.k9(J.bu(this.a),this.b,this.$ti)}},
k9:{"^":"cW;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cg:{"^":"b;$ti"},
cv:{"^":"b;$ti",
m:function(a,b,c){H.C(b)
H.z(c,H.aF(this,"cv",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
aB:function(a,b,c,d){H.z(d,H.aF(this,"cv",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
jC:{"^":"cl+cv;"}}],["","",,H,{"^":"",
hl:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
mo:function(a){return init.types[H.C(a)]},
fO:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isE},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.af(a))
return z},
bI:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iJ:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.M(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
b9:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.O(a).$isc4){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.aF(w,1)
r=H.dA(H.bW(H.aY(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iB:function(){if(!!self.location)return self.location.href
return},
eq:function(a){var z,y,x,w,v
H.bW(a)
z=J.as(a)
if(typeof z!=="number")return z.ei()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iK:function(a){var z,y,x,w
z=H.f([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.af(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aM(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.af(w))}return H.eq(z)},
er:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.af(x))
if(x<0)throw H.a(H.af(x))
if(x>65535)return H.iK(a)}return H.eq(a)},
iL:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ei()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cq:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aM(z,10))>>>0,56320|z&1023)}}throw H.a(P.a0(a,0,1114111,null,null))},
ad:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iI:function(a){return a.b?H.ad(a).getUTCFullYear()+0:H.ad(a).getFullYear()+0},
iG:function(a){return a.b?H.ad(a).getUTCMonth()+1:H.ad(a).getMonth()+1},
iC:function(a){return a.b?H.ad(a).getUTCDate()+0:H.ad(a).getDate()+0},
iD:function(a){return a.b?H.ad(a).getUTCHours()+0:H.ad(a).getHours()+0},
iF:function(a){return a.b?H.ad(a).getUTCMinutes()+0:H.ad(a).getMinutes()+0},
iH:function(a){return a.b?H.ad(a).getUTCSeconds()+0:H.ad(a).getSeconds()+0},
iE:function(a){return a.b?H.ad(a).getUTCMilliseconds()+0:H.ad(a).getMilliseconds()+0},
p:function(a){throw H.a(H.af(a))},
d:function(a,b){if(a==null)J.as(a)
throw H.a(H.aD(a,b))},
aD:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.C(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cs(b,"index",null)},
mi:function(a,b,c){if(a>c)return new P.cr(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cr(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
af:function(a){return new P.aG(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.en()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fW})
z.name=""}else z.toString=H.fW
return z},
fW:function(){return J.a9(this.dartException)},
t:function(a){throw H.a(a)},
D:function(a){throw H.a(P.b1(a))},
ar:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aM(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cZ(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.em(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eI()
u=$.$get$eJ()
t=$.$get$eK()
s=$.$get$eL()
r=$.$get$eP()
q=$.$get$eQ()
p=$.$get$eN()
$.$get$eM()
o=$.$get$eS()
n=$.$get$eR()
m=v.a9(y)
if(m!=null)return z.$1(H.cZ(H.M(y),m))
else{m=u.a9(y)
if(m!=null){m.method="call"
return z.$1(H.cZ(H.M(y),m))}else{m=t.a9(y)
if(m==null){m=s.a9(y)
if(m==null){m=r.a9(y)
if(m==null){m=q.a9(y)
if(m==null){m=p.a9(y)
if(m==null){m=s.a9(y)
if(m==null){m=o.a9(y)
if(m==null){m=n.a9(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.em(H.M(y),m))}}return z.$1(new H.jB(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ey()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ey()
return a},
bs:function(a){var z
if(a==null)return new H.fk(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fk(a)},
ml:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mv:function(a,b,c,d,e,f){H.e(a,"$iscT")
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
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mv)
a.$identity=z
return z},
hg:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.O(d).$isc){z.$reflectionInfo=d
x=H.iQ(z).r}else x=d
w=e?Object.create(new H.j8().constructor.prototype):Object.create(new H.cM(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ax
if(typeof u!=="number")return u.D()
$.ax=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dU(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mo,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dN:H.cN
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dU(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hd:function(a,b,c,d){var z=H.cN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dU:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hf(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hd(y,!w,z,b)
if(y===0){w=$.ax
if(typeof w!=="number")return w.D()
$.ax=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bv
if(v==null){v=H.cc("self")
$.bv=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ax
if(typeof w!=="number")return w.D()
$.ax=w+1
t+=w
w="return function("+t+"){return this."
v=$.bv
if(v==null){v=H.cc("self")
$.bv=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
he:function(a,b,c,d){var z,y
z=H.cN
y=H.dN
switch(b?-1:a){case 0:throw H.a(H.j_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hf:function(a,b){var z,y,x,w,v,u,t,s
z=$.bv
if(z==null){z=H.cc("self")
$.bv=z}y=$.dM
if(y==null){y=H.cc("receiver")
$.dM=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.he(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.ax
if(typeof y!=="number")return y.D()
$.ax=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.ax
if(typeof y!=="number")return y.D()
$.ax=y+1
return new Function(z+y+"}")()},
du:function(a,b,c,d,e,f,g){var z,y
z=J.bB(H.bW(b))
H.C(c)
y=!!J.O(d).$isc?J.bB(d):d
return H.hg(a,z,c,y,!!e,f,g)},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aw(a,"String"))},
mj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"double"))},
mH:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"num"))},
fG:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aw(a,"bool"))},
C:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aw(a,"int"))},
fT:function(a,b){throw H.a(H.aw(a,H.M(b).substring(3)))},
mJ:function(a,b){var z=J.aE(b)
throw H.a(H.hc(a,z.v(b,3,z.gl(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.fT(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.mJ(a,b)},
bW:function(a){if(a==null)return a
if(!!J.O(a).$isc)return a
throw H.a(H.aw(a,"List"))},
fQ:function(a,b){if(a==null)return a
if(!!J.O(a).$isc)return a
if(J.O(a)[b])return a
H.fT(a,b)},
fK:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.C(z)]
else return a.$S()}return},
c6:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fK(J.O(a))
if(z==null)return!1
y=H.fN(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dp)return a
$.dp=!0
try{if(H.c6(a,b))return a
z=H.c9(b)
y=H.aw(a,z)
throw H.a(y)}finally{$.dp=!1}},
dx:function(a,b){if(a!=null&&!H.dt(a,b))H.t(H.aw(a,H.c9(b)))
return a},
fB:function(a){var z
if(a instanceof H.o){z=H.fK(J.O(a))
if(z!=null)return H.c9(z)
return"Closure"}return H.b9(a)},
mT:function(a){throw H.a(new P.hp(H.M(a)))},
fL:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
aY:function(a){if(a==null)return
return a.$ti},
oV:function(a,b,c){return H.bt(a["$as"+H.l(c)],H.aY(b))},
aX:function(a,b,c,d){var z
H.M(c)
H.C(d)
z=H.bt(a["$as"+H.l(c)],H.aY(b))
return z==null?null:z[d]},
aF:function(a,b,c){var z
H.M(b)
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
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dA(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.C(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.m0(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
for(z=H.mk(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.M(z[l])
n=n+m+H.aZ(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dA:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.al("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aZ(u,c)}v="<"+z.j(0)+">"
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
y=J.O(a)
if(y[b]==null)return!1
return H.fE(H.bt(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.M(b)
H.bW(c)
H.M(d)
if(a==null)return a
z=H.bp(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dA(c,0,null)
throw H.a(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fE:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ap(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ap(a[y],b,c[y],d))return!1
return!0},
oT:function(a,b,c){return a.apply(b,H.bt(J.O(b)["$as"+H.l(c)],H.aY(b)))},
fP:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="H"||a===-1||a===-2||H.fP(z)}return!1},
dt:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="H"||b===-1||b===-2||H.fP(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dt(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c6(a,b)}y=J.O(a).constructor
x=H.aY(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ap(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dt(a,b))throw H.a(H.aw(a,H.c9(b)))
return a},
ap:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ap(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.fN(a,b,c,d)
if('func' in a)return c.builtin$cls==="cT"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ap("type" in a?a.type:null,b,x,d)
else if(H.ap(a,b,x,d))return!0
else{if(!('$is'+"bz" in y.prototype))return!1
w=y.prototype["$as"+"bz"]
v=H.bt(w,z?a.slice(1):null)
return H.ap(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c9(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fE(H.bt(r,z),b,u,d)},
fN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ap(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ap(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ap(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ap(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mG(m,b,l,d)},
mG:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ap(c[w],d,a[w],b))return!1}return!0},
oU:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
my:function(a){var z,y,x,w,v,u
z=H.M($.fM.$1(a))
y=$.cB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.M($.fD.$2(a,z))
if(z!=null){y=$.cB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cF(x)
$.cB[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cE[z]=x
return x}if(v==="-"){u=H.cF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fS(a,x)
if(v==="*")throw H.a(P.c3(z))
if(init.leafTags[z]===true){u=H.cF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fS(a,x)},
fS:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dB(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cF:function(a){return J.dB(a,!1,null,!!a.$isE)},
mF:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cF(z)
else return J.dB(z,c,null,null)},
mt:function(){if(!0===$.dz)return
$.dz=!0
H.mu()},
mu:function(){var z,y,x,w,v,u,t,s
$.cB=Object.create(null)
$.cE=Object.create(null)
H.mp()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fU.$1(v)
if(u!=null){t=H.mF(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mp:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.bo(C.I,H.bo(C.N,H.bo(C.u,H.bo(C.u,H.bo(C.M,H.bo(C.J,H.bo(C.K(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fM=new H.mq(v)
$.fD=new H.mr(u)
$.fU=new H.ms(t)},
bo:function(a,b){return a(b)||b},
mS:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hk:{"^":"b;$ti",
j:function(a){return P.d0(this)},
m:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
return H.hl()},
$isJ:1},
hm:{"^":"hk;a,b,c,$ti",
gl:function(a){return this.a},
c8:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.c8(0,b))return
return this.cS(b)},
cS:function(a){return this.b[H.M(a)]},
K:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.h(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cS(v),z))}}},
iP:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iQ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bB(z)
y=z[0]
x=z[1]
return new H.iP(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jo:{"^":"b;a,b,c,d,e,f",
a9:function(a){var z,y,x
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
aB:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jo(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eO:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ix:{"^":"a5;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
em:function(a,b){return new H.ix(a,b==null?null:b.method)}}},
hU:{"^":"a5;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
cZ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hU(a,y,z?null:b.receiver)}}},
jB:{"^":"a5;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mV:{"^":"o:16;a",
$1:function(a){if(!!J.O(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fk:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isav:1},
o:{"^":"b;",
j:function(a){return"Closure '"+H.b9(this).trim()+"'"},
geg:function(){return this},
$iscT:1,
geg:function(){return this}},
eD:{"^":"o;"},
j8:{"^":"eD;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cM:{"^":"eD;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cM))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bI(this.a)
else y=typeof z!=="object"?J.b_(z):H.bI(z)
return(y^H.bI(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.b9(z)+"'")},
p:{
cN:function(a){return a.a},
dN:function(a){return a.c},
cc:function(a){var z,y,x,w,v
z=new H.cM("self","target","receiver","name")
y=J.bB(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jp:{"^":"a5;a",
j:function(a){return this.a},
p:{
aw:function(a,b){return new H.jp("TypeError: "+H.l(P.cf(a))+": type '"+H.fB(a)+"' is not a subtype of type '"+b+"'")}}},
hb:{"^":"a5;a",
j:function(a){return this.a},
p:{
hc:function(a,b){return new H.hb("CastError: "+H.l(P.cf(a))+": type '"+H.fB(a)+"' is not a subtype of type '"+b+"'")}}},
iZ:{"^":"a5;a",
j:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j_:function(a){return new H.iZ(a)}}},
ck:{"^":"ia;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaC:function(a){return new H.hZ(this,[H.x(this,0)])},
c8:function(a,b){var z=this.b
if(z==null)return!1
return this.eJ(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bf(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bf(w,b)
x=y==null?null:y.b
return x}else return this.hv(b)},
hv:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cU(z,this.dP(a))
x=this.dQ(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bU()
this.b=z}this.cH(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bU()
this.c=y}this.cH(y,b,c)}else this.hw(b,c)},
hw:function(a,b){var z,y,x,w
H.z(a,H.x(this,0))
H.z(b,H.x(this,1))
z=this.d
if(z==null){z=this.bU()
this.d=z}y=this.dP(a)
x=this.cU(z,y)
if(x==null)this.c0(z,y,[this.bV(a,b)])
else{w=this.dQ(x,a)
if(w>=0)x[w].b=b
else x.push(this.bV(a,b))}},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b1(this))
z=z.c}},
cH:function(a,b,c){var z
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
z=this.bf(a,b)
if(z==null)this.c0(a,b,this.bV(b,c))
else z.b=c},
eT:function(){this.r=this.r+1&67108863},
bV:function(a,b){var z,y
z=new H.hY(H.z(a,H.x(this,0)),H.z(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eT()
return z},
dP:function(a){return J.b_(a)&0x3ffffff},
dQ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
j:function(a){return P.d0(this)},
bf:function(a,b){return a[b]},
cU:function(a,b){return a[b]},
c0:function(a,b,c){a[b]=c},
eM:function(a,b){delete a[b]},
eJ:function(a,b){return this.bf(a,b)!=null},
bU:function(){var z=Object.create(null)
this.c0(z,"<non-identifier-key>",z)
this.eM(z,"<non-identifier-key>")
return z},
$ised:1},
hY:{"^":"b;a,b,0c,0d"},
hZ:{"^":"hy;a,$ti",
gl:function(a){return this.a.a},
ga_:function(a){var z,y
z=this.a
y=new H.i_(z,z.r,this.$ti)
y.c=z.e
return y}},
i_:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b1(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mq:{"^":"o:16;a",
$1:function(a){return this.a(a)}},
mr:{"^":"o:39;a",
$2:function(a,b){return this.a(a,b)}},
ms:{"^":"o:28;a",
$1:function(a){return this.a(H.M(a))}},
hS:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$iseo:1,
$isiR:1,
p:{
hT:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.Y("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mk:function(a){return J.e8(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bm:function(a){return a},
it:function(a){return new Int8Array(a)},
aC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aD(b,a))},
lV:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mi(a,b,c))
return b},
el:{"^":"r;",$isel:1,"%":"ArrayBuffer"},
d5:{"^":"r;",$isd5:1,"%":"DataView;ArrayBufferView;d4|fe|ff|iu|fg|fh|aW"},
d4:{"^":"d5;",
gl:function(a){return a.length},
$isE:1,
$asE:I.dw},
iu:{"^":"ff;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
m:function(a,b,c){H.C(b)
H.mj(c)
H.aC(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.q]},
$asy:function(){return[P.q]},
$isk:1,
$ask:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
aW:{"^":"fh;",
m:function(a,b,c){H.C(b)
H.C(c)
H.aC(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.n]},
$asy:function(){return[P.n]},
$isk:1,
$ask:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]}},
nZ:{"^":"aW;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int16Array"},
o_:{"^":"aW;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int32Array"},
o0:{"^":"aW;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int8Array"},
o1:{"^":"aW;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
o2:{"^":"aW;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
o3:{"^":"aW;",
gl:function(a){return a.length},
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d6:{"^":"aW;",
gl:function(a){return a.length},
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
bI:function(a,b,c){return new Uint8Array(a.subarray(b,H.lV(b,c,a.length)))},
$isd6:1,
$isR:1,
"%":";Uint8Array"},
fe:{"^":"d4+y;"},
ff:{"^":"fe+cg;"},
fg:{"^":"d4+y;"},
fh:{"^":"fg+cg;"}}],["","",,P,{"^":"",
kb:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.m7()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bq(new P.kd(z),1)).observe(y,{childList:true})
return new P.kc(z,y,x)}else if(self.setImmediate!=null)return P.m8()
return P.m9()},
oI:[function(a){self.scheduleImmediate(H.bq(new P.ke(H.h(a,{func:1,ret:-1})),0))},"$1","m7",4,0,11],
oJ:[function(a){self.setImmediate(H.bq(new P.kf(H.h(a,{func:1,ret:-1})),0))},"$1","m8",4,0,11],
oK:[function(a){H.h(a,{func:1,ret:-1})
P.le(0,a)},"$1","m9",4,0,11],
eG:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bg]})
z=C.e.a2(a.a,1000)
return P.lf(z<0?0:z,b)},
m3:function(a,b){if(H.c6(a,{func:1,args:[P.b,P.av]}))return b.hT(a,null,P.b,P.av)
if(H.c6(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m2:function(){var z,y
for(;z=$.bn,z!=null;){$.bU=null
y=z.b
$.bn=y
if(y==null)$.bT=null
z.a.$0()}},
oS:[function(){$.dq=!0
try{P.m2()}finally{$.bU=null
$.dq=!1
if($.bn!=null)$.$get$di().$1(P.fF())}},"$0","fF",0,0,3],
fA:function(a){var z=new P.f7(H.h(a,{func:1,ret:-1}))
if($.bn==null){$.bT=z
$.bn=z
if(!$.dq)$.$get$di().$1(P.fF())}else{$.bT.b=z
$.bT=z}},
m6:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bn
if(z==null){P.fA(a)
$.bU=$.bT
return}y=new P.f7(a)
x=$.bU
if(x==null){y.b=z
$.bU=y
$.bn=y}else{y.b=x.b
x.b=y
$.bU=y
if(y.b==null)$.bT=y}},
mK:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.U
if(C.j===y){P.cA(null,null,C.j,a)
return}y.toString
P.cA(null,null,y,H.h(y.dd(a),z))},
jm:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bg]}
H.h(b,z)
y=$.U
if(y===C.j){y.toString
return P.eG(a,b)}x=y.de(b,P.bg)
$.U.toString
return P.eG(a,H.h(x,z))},
cz:function(a,b,c,d,e){var z={}
z.a=d
P.m6(new P.m4(z,e))},
fw:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.U
if(y===c)return d.$0()
$.U=c
z=y
try{y=d.$0()
return y}finally{$.U=z}},
fx:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.U
if(y===c)return d.$1(e)
$.U=c
z=y
try{y=d.$1(e)
return y}finally{$.U=z}},
m5:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.U
if(y===c)return d.$2(e,f)
$.U=c
z=y
try{y=d.$2(e,f)
return y}finally{$.U=z}},
cA:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.dd(d):c.hd(d,-1)
P.fA(d)},
kd:{"^":"o:26;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kc:{"^":"o:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ke:{"^":"o:0;a",
$0:function(){this.a.$0()}},
kf:{"^":"o:0;a",
$0:function(){this.a.$0()}},
fn:{"^":"b;a,0b,c",
ez:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bq(new P.lh(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
eA:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bq(new P.lg(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbg:1,
p:{
le:function(a,b){var z=new P.fn(!0,0)
z.ez(a,b)
return z},
lf:function(a,b){var z=new P.fn(!1,0)
z.eA(a,b)
return z}}},
lh:{"^":"o:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lg:{"^":"o:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.eo(w,x)}z.c=y
this.d.$1(z)}},
bl:{"^":"b;0a,b,c,d,e,$ti",
hB:function(a){if(this.c!==6)return!0
return this.b.b.cv(H.h(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
hu:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.c6(z,{func:1,args:[P.b,P.av]}))return H.dx(w.i_(z,a.a,a.b,null,y,P.av),x)
else return H.dx(w.cv(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aS:{"^":"b;d2:a<,b,0fw:c<,$ti",
e7:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.U
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.m3(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aS(0,$.U,[c])
w=b==null?1:3
this.cI(new P.bl(x,w,a,b,[z,c]))
return x},
i2:function(a,b){return this.e7(a,null,b)},
cI:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbl")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaS")
z=y.a
if(z<4){y.cI(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cA(null,null,z,H.h(new P.ku(this,a),{func:1,ret:-1}))}},
cY:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbl")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaS")
y=u.a
if(y<4){u.cY(a)
return}this.a=y
this.c=u.c}z.a=this.bi(a)
y=this.b
y.toString
P.cA(null,null,y,H.h(new P.kz(z,this),{func:1,ret:-1}))}},
bX:function(){var z=H.e(this.c,"$isbl")
this.c=null
return this.bi(z)},
bi:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cN:function(a){var z,y,x,w
z=H.x(this,0)
H.dx(a,{futureOr:1,type:z})
y=this.$ti
x=H.bp(a,"$isbz",y,"$asbz")
if(x){z=H.bp(a,"$isaS",y,null)
if(z)P.fa(a,this)
else P.kv(a,this)}else{w=this.bX()
H.z(a,z)
this.a=4
this.c=a
P.bO(this,w)}},
bN:[function(a,b){var z
H.e(b,"$isav")
z=this.bX()
this.a=8
this.c=new P.ai(a,b)
P.bO(this,z)},function(a){return this.bN(a,null)},"ia","$2","$1","geH",4,2,29],
$isbz:1,
p:{
kv:function(a,b){var z,y,x
b.a=1
try{a.e7(new P.kw(b),new P.kx(b),null)}catch(x){z=H.ar(x)
y=H.bs(x)
P.mK(new P.ky(b,z,y))}},
fa:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaS")
if(z>=4){y=b.bX()
b.a=a.a
b.c=a.c
P.bO(b,y)}else{y=H.e(b.c,"$isbl")
b.a=2
b.c=a
a.cY(y)}},
bO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isai")
y=y.b
u=v.a
t=v.b
y.toString
P.cz(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bO(z.a,b)}y=z.a
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
P.cz(null,null,y,u,t)
return}o=$.U
if(o==null?q!=null:o!==q)$.U=q
else o=null
y=b.c
if(y===8)new P.kC(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kB(x,b,r).$0()}else if((y&2)!==0)new P.kA(z,x,b).$0()
if(o!=null)$.U=o
y=x.b
if(!!J.O(y).$isbz){if(y.a>=4){n=H.e(t.c,"$isbl")
t.c=null
b=t.bi(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fa(y,t)
return}}m=b.b
n=H.e(m.c,"$isbl")
m.c=null
b=m.bi(n)
y=x.a
u=x.b
if(!y){H.z(u,H.x(m,0))
m.a=4
m.c=u}else{H.e(u,"$isai")
m.a=8
m.c=u}z.a=m
y=m}}}},
ku:{"^":"o:0;a,b",
$0:function(){P.bO(this.a,this.b)}},
kz:{"^":"o:0;a,b",
$0:function(){P.bO(this.b,this.a.a)}},
kw:{"^":"o:26;a",
$1:function(a){var z=this.a
z.a=0
z.cN(a)}},
kx:{"^":"o:51;a",
$2:function(a,b){this.a.bN(a,H.e(b,"$isav"))},
$1:function(a){return this.$2(a,null)}},
ky:{"^":"o:0;a,b,c",
$0:function(){this.a.bN(this.b,this.c)}},
kC:{"^":"o:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e5(H.h(w.d,{func:1}),null)}catch(v){y=H.ar(v)
x=H.bs(v)
if(this.d){w=H.e(this.a.a.c,"$isai").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isai")
else u.b=new P.ai(y,x)
u.a=!0
return}if(!!J.O(z).$isbz){if(z instanceof P.aS&&z.gd2()>=4){if(z.gd2()===8){w=this.b
w.b=H.e(z.gfw(),"$isai")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.i2(new P.kD(t),null)
w.a=!1}}},
kD:{"^":"o:34;a",
$1:function(a){return this.a}},
kB:{"^":"o:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.z(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cv(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ar(t)
y=H.bs(t)
x=this.a
x.b=new P.ai(z,y)
x.a=!0}}},
kA:{"^":"o:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isai")
w=this.c
if(w.hB(z)&&w.e!=null){v=this.b
v.b=w.hu(z)
v.a=!1}}catch(u){y=H.ar(u)
x=H.bs(u)
w=H.e(this.a.a.c,"$isai")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ai(y,x)
s.a=!0}}},
f7:{"^":"b;a,0b"},
da:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aS(0,$.U,[P.n])
z.a=0
this.hA(new P.jb(z,this),!0,new P.jc(z,y),y.geH())
return y}},
jb:{"^":"o;a,b",
$1:function(a){H.z(a,H.aF(this.b,"da",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.aF(this.b,"da",0)]}}},
jc:{"^":"o:0;a,b",
$0:function(){this.b.cN(this.a.a)}},
ez:{"^":"b;$ti"},
ja:{"^":"b;"},
bg:{"^":"b;"},
ai:{"^":"b;a,b",
j:function(a){return H.l(this.a)},
$isa5:1},
lJ:{"^":"b;",$isoH:1},
m4:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.en()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
kX:{"^":"lJ;",
i0:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.U){a.$0()
return}P.fw(null,null,this,a,-1)}catch(x){z=H.ar(x)
y=H.bs(x)
P.cz(null,null,this,z,H.e(y,"$isav"))}},
i1:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.U){a.$1(b)
return}P.fx(null,null,this,a,b,-1,c)}catch(x){z=H.ar(x)
y=H.bs(x)
P.cz(null,null,this,z,H.e(y,"$isav"))}},
hd:function(a,b){return new P.kZ(this,H.h(a,{func:1,ret:b}),b)},
dd:function(a){return new P.kY(this,H.h(a,{func:1,ret:-1}))},
de:function(a,b){return new P.l_(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
e5:function(a,b){H.h(a,{func:1,ret:b})
if($.U===C.j)return a.$0()
return P.fw(null,null,this,a,b)},
cv:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.U===C.j)return a.$1(b)
return P.fx(null,null,this,a,b,c,d)},
i_:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.U===C.j)return a.$2(b,c)
return P.m5(null,null,this,a,b,c,d,e,f)},
hT:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
kZ:{"^":"o;a,b,c",
$0:function(){return this.a.e5(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kY:{"^":"o:3;a,b",
$0:function(){return this.a.i0(this.b)}},
l_:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.i1(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i0:function(a,b,c,d,e){return new H.ck(0,0,[d,e])},
i1:function(a,b,c){H.bW(a)
return H.w(H.ml(a,new H.ck(0,0,[b,c])),"$ised",[b,c],"$ased")},
ee:function(a,b){return new H.ck(0,0,[a,b])},
i4:function(a,b,c,d){return new P.kJ(0,0,[d])},
hN:function(a,b,c){var z,y
if(P.dr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bV()
C.a.h(y,a)
try{P.m1(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eA(b,H.fQ(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cV:function(a,b,c){var z,y,x
if(P.dr(a))return b+"..."+c
z=new P.al(b)
y=$.$get$bV()
C.a.h(y,a)
try{x=z
x.a=P.eA(x.gaI(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaI()+c
y=z.gaI()
return y.charCodeAt(0)==0?y:y},
dr:function(a){var z,y
for(z=0;y=$.$get$bV(),z<y.length;++z)if(a===y[z])return!0
return!1},
m1:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga_(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.l(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.G();t=s,s=r){r=z.gR(z);++x
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
i2:function(a,b,c){var z=P.i0(null,null,null,b,c)
a.K(0,new P.i3(z,b,c))
return z},
d0:function(a){var z,y,x
z={}
if(P.dr(a))return"{...}"
y=new P.al("")
try{C.a.h($.$get$bV(),a)
x=y
x.a=x.gaI()+"{"
z.a=!0
J.dG(a,new P.ib(z,y))
z=y
z.a=z.gaI()+"}"}finally{z=$.$get$bV()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaI()
return z.charCodeAt(0)==0?z:z},
kJ:{"^":"kE;a,0b,0c,0d,0e,0f,r,$ti",
ga_:function(a){return P.fd(this,this.r,H.x(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dk()
this.b=z}return this.cL(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dk()
this.c=y}return this.cL(y,b)}else return this.eB(0,b)},
eB:function(a,b){var z,y,x
H.z(b,H.x(this,0))
z=this.d
if(z==null){z=P.dk()
this.d=z}y=this.cO(b)
x=z[y]
if(x==null)z[y]=[this.bM(b)]
else{if(this.cT(x,b)>=0)return!1
x.push(this.bM(b))}return!0},
P:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cZ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cZ(this.c,b)
else return this.fo(0,b)},
fo:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eQ(z,b)
x=this.cT(y,b)
if(x<0)return!1
this.d4(y.splice(x,1)[0])
return!0},
cL:function(a,b){H.z(b,H.x(this,0))
if(H.e(a[b],"$isdj")!=null)return!1
a[b]=this.bM(b)
return!0},
cZ:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdj")
if(z==null)return!1
this.d4(z)
delete a[b]
return!0},
cM:function(){this.r=this.r+1&67108863},
bM:function(a){var z,y
z=new P.dj(H.z(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cM()
return z},
d4:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cM()},
cO:function(a){return J.b_(a)&0x3ffffff},
eQ:function(a,b){return a[this.cO(b)]},
cT:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
p:{
dk:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dj:{"^":"b;a,0b,0c"},
kK:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b1(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.x(this,0))
this.c=z.b
return!0}}},
p:{
fd:function(a,b,c){var z=new P.kK(a,b,[c])
z.c=a.e
return z}}},
kE:{"^":"j0;"},
i3:{"^":"o:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cl:{"^":"kL;",$isk:1,$isc:1},
y:{"^":"b;$ti",
ga_:function(a){return new H.i5(a,this.gl(a),0,[H.aX(this,a,"y",0)])},
I:function(a,b){return this.k(a,b)},
i4:function(a,b){var z,y,x
z=H.f([],[H.aX(this,a,"y",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
i3:function(a){return this.i4(a,!0)},
aB:function(a,b,c,d){var z
H.z(d,H.aX(this,a,"y",0))
P.aK(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
j:function(a){return P.cV(a,"[","]")}},
ia:{"^":"ag;"},
ib:{"^":"o:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ag:{"^":"b;$ti",
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aX(this,a,"ag",0),H.aX(this,a,"ag",1)]})
for(z=J.bu(this.gaC(a));z.G();){y=z.gR(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.as(this.gaC(a))},
j:function(a){return P.d0(a)},
$isJ:1},
lm:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
ic:{"^":"b;$ti",
k:function(a,b){return J.dF(this.a,b)},
m:function(a,b,c){J.cH(this.a,H.z(b,H.x(this,0)),H.z(c,H.x(this,1)))},
K:function(a,b){J.dG(this.a,H.h(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gl:function(a){return J.as(this.a)},
j:function(a){return J.a9(this.a)},
$isJ:1},
eZ:{"^":"ln;a,$ti"},
j1:{"^":"b;$ti",
j:function(a){return P.cV(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dI("index"))
if(b<0)H.t(P.a0(b,0,null,"index",null))
for(z=P.fd(this,this.r,H.x(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isk:1},
j0:{"^":"j1;"},
kL:{"^":"b+y;"},
ln:{"^":"ic+lm;$ti"}}],["","",,P,{"^":"",h8:{"^":"bX;a",
hD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aK(c,d,b.length,null,null,null)
z=$.$get$f8()
if(typeof d!=="number")return H.p(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cD(C.b.H(b,s))
o=H.cD(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.al("")
w.a+=C.b.v(b,x,y)
w.a+=H.cq(r)
x=s
continue}}throw H.a(P.Y("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dL(b,u,d,v,t,k)
else{j=C.e.bd(k-1,4)+1
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aT(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dL(b,u,d,v,t,i)
else{j=C.e.bd(i,4)
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aT(b,d,d,j===2?"==":"=")}return b},
$asbX:function(){return[[P.c,P.n],P.i]},
p:{
dL:function(a,b,c,d,e,f){if(C.e.bd(f,4)!==0)throw H.a(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.Y("Invalid base64 padding, more than two '=' characters",a,b))}}},h9:{"^":"bw;a",
$asbw:function(){return[[P.c,P.n],P.i]}},bX:{"^":"b;$ti"},bw:{"^":"ja;$ti"},hA:{"^":"bX;",
$asbX:function(){return[P.i,[P.c,P.n]]}},jP:{"^":"hA;a",
ghp:function(){return C.F}},jW:{"^":"bw;",
aZ:function(a,b,c){var z,y,x,w
z=a.length
P.aK(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lI(0,0,x)
if(w.eO(a,b,z)!==z)w.d5(J.h1(a,z-1),0)
return C.T.bI(x,0,w.b)},
c9:function(a){return this.aZ(a,0,null)},
$asbw:function(){return[P.i,[P.c,P.n]]}},lI:{"^":"b;a,b,c",
d5:function(a,b){var z,y,x,w,v
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
eO:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d5(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},jQ:{"^":"bw;a",
aZ:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.n],"$asc")
z=P.jR(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.aK(b,c,y,null,null,null)
x=new P.al("")
w=new P.lF(!1,x,!0,0,0,0)
w.aZ(a,b,y)
w.hq(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
c9:function(a){return this.aZ(a,0,null)},
$asbw:function(){return[[P.c,P.n],P.i]},
p:{
jR:function(a,b,c,d){H.w(b,"$isc",[P.n],"$asc")
if(b instanceof Uint8Array)return P.jS(!1,b,c,d)
return},
jS:function(a,b,c,d){var z,y,x
z=$.$get$f2()
if(z==null)return
y=0===c
if(y&&!0)return P.dg(z,b)
x=b.length
d=P.aK(c,d,x,null,null,null)
if(y&&d===x)return P.dg(z,b)
return P.dg(z,b.subarray(c,d))},
dg:function(a,b){if(P.jU(b))return
return P.jV(a,b)},
jV:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ar(y)}return},
jU:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
jT:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ar(y)}return}}},lF:{"^":"b;a,b,c,d,e,f",
hq:function(a,b,c){var z
H.w(b,"$isc",[P.n],"$asc")
if(this.e>0){z=P.Y("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aZ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.n],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lH(c)
v=new P.lG(this,b,c,a)
$label0$0:for(u=J.aE(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bG()
if((r&192)!==128){q=P.Y("Bad UTF-8 encoding 0x"+C.e.ba(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.Y("Overlong encoding of 0x"+C.e.ba(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.Y("Character outside valid Unicode range: 0x"+C.e.ba(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cq(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cC()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.N()
if(r<0){m=P.Y("Negative UTF-8 code unit: -0x"+C.e.ba(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Y("Bad UTF-8 encoding 0x"+C.e.ba(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lH:{"^":"o:41;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.n],"$asc")
z=this.a
for(y=J.aE(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bG()
if((w&127)!==w)return x-b}return z-b}},lG:{"^":"o:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.eB(this.d,a,b)}}}],["","",,P,{"^":"",
c8:function(a,b,c){var z
H.h(b,{func:1,ret:P.n,args:[P.i]})
z=H.iJ(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.Y(a,null,null))},
hC:function(a){var z=J.O(a)
if(!!z.$iso)return z.j(a)
return"Instance of '"+H.b9(a)+"'"},
i6:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hP(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
i7:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.ga_(a);x.G();)C.a.h(y,H.z(x.gR(x),c))
if(b)return y
return H.w(J.bB(y),"$isc",z,"$asc")},
eB:function(a,b,c){var z,y
z=P.n
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb5",[z],"$asb5")
y=a.length
c=P.aK(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.N()
z=c<y}else z=!0
return H.er(z?C.a.bI(a,b,c):a)}if(!!J.O(a).$isd6)return H.iL(a,b,P.aK(b,c,a.length,null,null,null))
return P.jd(a,b,c)},
jd:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.n],"$ask")
if(b<0)throw H.a(P.a0(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a0(c,b,J.as(a),null,null))
y=J.bu(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a0(c,b,x,null,null))
w.push(y.gR(y))}return H.er(w)},
iS:function(a,b,c){return new H.hS(a,H.hT(a,!1,!0,!1))},
df:function(){var z=H.iB()
if(z!=null)return P.jH(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
cf:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hC(a)},
v:function(a){return new P.f9(a)},
i8:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.n]})
z=H.f([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dC:function(a){H.mI(a)},
jH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.f_(b>0||c<c?C.b.v(a,b,c):a,5,null).gec()
else if(y===32)return P.f_(C.b.v(a,z,c),0,null).gec()}x=new Array(8)
x.fixed$length=Array
w=H.f(x,[P.n])
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
if(typeof v!=="number")return v.cA()
if(v>=b)if(P.fy(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.N()
if(typeof r!=="number")return H.p(r)
if(q<r)r=q
if(typeof s!=="number")return s.N()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.N()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.N()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a7(a,"..",s)))n=r>s+2&&C.b.a7(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a7(a,"file",b)){if(u<=b){if(!C.b.a7(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aT(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a7(a,"http",b)){if(x&&t+3===s&&C.b.a7(a,"80",t+1))if(b===0&&!0){a=C.b.aT(a,t,s,"")
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
else if(v===z&&C.b.a7(a,"https",b)){if(x&&t+4===s&&C.b.a7(a,"443",t+1))if(b===0&&!0){a=C.b.aT(a,t,s,"")
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
q-=b}return new P.l1(a,v,u,t,s,r,q,o)}return P.lo(a,b,c,v,u,t,s,r,q,o)},
f1:function(a,b){var z=P.i
return C.a.hr(H.f(a.split("&"),[z]),P.ee(z,z),new P.jK(b),[P.J,P.i,P.i])},
jF:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jG(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.V(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c8(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.cC()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c8(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.cC()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
f0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jI(a)
y=new P.jJ(z,a)
if(a.length<2)z.$1("address is too short")
x=H.f([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.V(a,w)
if(s===58){if(w===b){++w
if(C.b.V(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaD(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jF(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.e.aM(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
lW:function(){var z,y,x,w,v
z=P.i8(22,new P.lY(),!0,P.R)
y=new P.lX(z)
x=new P.lZ()
w=new P.m_()
v=H.e(y.$2(0,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isR")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isR")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isR"),"]",5)
v=H.e(y.$2(9,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isR"),"az",21)
v=H.e(y.$2(21,245),"$isR")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fy:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.n],"$asc")
z=$.$get$fz()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ah:{"^":"b;"},
"+bool":0,
aj:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aj))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.e.aM(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hq(H.iI(this))
y=P.bZ(H.iG(this))
x=P.bZ(H.iC(this))
w=P.bZ(H.iD(this))
v=P.bZ(H.iF(this))
u=P.bZ(H.iH(this))
t=P.hr(H.iE(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hq:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hr:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bZ:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"X;"},
"+double":0,
bx:{"^":"b;a",
i:function(a,b){return new P.bx(C.e.ac(this.a*b))},
N:function(a,b){return C.e.N(this.a,H.e(b,"$isbx").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bx))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.hx()
y=this.a
if(y<0)return"-"+new P.bx(0-y).j(0)
x=z.$1(C.e.a2(y,6e7)%60)
w=z.$1(C.e.a2(y,1e6)%60)
v=new P.hw().$1(y%1e6)
return""+C.e.a2(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e2:function(a,b,c,d,e,f){return new P.bx(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hw:{"^":"o:25;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hx:{"^":"o:25;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
en:{"^":"a5;",
j:function(a){return"Throw of null."}},
aG:{"^":"a5;a,b,c,d",
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbP()+y+x
if(!this.a)return w
v=this.gbO()
u=P.cf(this.b)
return w+v+": "+H.l(u)},
p:{
ca:function(a){return new P.aG(!1,null,null,a)},
cb:function(a,b,c){return new P.aG(!0,a,b,c)},
dI:function(a){return new P.aG(!1,null,a,"Must not be null")}}},
cr:{"^":"aG;e,f,a,b,c,d",
gbP:function(){return"RangeError"},
gbO:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cs:function(a,b,c){return new P.cr(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cr(b,c,!0,a,d,"Invalid value")},
aK:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.a(P.a0(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.a(P.a0(b,a,c,"end",f))
return b}return c}}},
hL:{"^":"aG;e,l:f>,a,b,c,d",
gbP:function(){return"RangeError"},
gbO:function(){if(J.fY(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.C(e!=null?e:J.as(b))
return new P.hL(b,z,!0,a,c,"Index out of range")}}},
jD:{"^":"a5;a",
j:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.jD(a)}}},
jA:{"^":"a5;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c3:function(a){return new P.jA(a)}}},
j7:{"^":"a5;a",
j:function(a){return"Bad state: "+this.a}},
hj:{"^":"a5;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cf(z))+"."},
p:{
b1:function(a){return new P.hj(a)}}},
iy:{"^":"b;",
j:function(a){return"Out of Memory"},
$isa5:1},
ey:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isa5:1},
hp:{"^":"a5;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f9:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
hI:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
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
for(s=x;s<w.length;++s){r=C.b.V(w,s)
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
return y+n+l+m+"\n"+C.b.i(" ",x-o+n.length)+"^\n"},
p:{
Y:function(a,b,c){return new P.hI(a,b,c)}}},
n:{"^":"X;"},
"+int":0,
k:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga_(this)
for(y=0;z.G();)++y
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dI("index"))
if(b<0)H.t(P.a0(b,0,null,"index",null))
for(z=this.ga_(this),y=0;z.G();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
j:function(a){return P.hN(this,"(",")")}},
cW:{"^":"b;$ti"},
c:{"^":"b;$ti",$isk:1},
"+List":0,
J:{"^":"b;$ti"},
H:{"^":"b;",
gS:function(a){return P.b.prototype.gS.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
X:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gS:function(a){return H.bI(this)},
j:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.j(this)}},
av:{"^":"b;"},
i:{"^":"b;",$iseo:1},
"+String":0,
al:{"^":"b;aI:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isor:1,
p:{
eA:function(a,b,c){var z=J.bu(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gR(z))
while(z.G())}else{a+=H.l(z.gR(z))
for(;z.G();)a=a+c+H.l(z.gR(z))}return a}}},
jK:{"^":"o:38;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isJ",[z,z],"$asJ")
H.M(b)
y=J.aE(b).dN(b,"=")
if(y===-1){if(b!=="")J.cH(a,P.dm(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aF(b,y+1)
z=this.a
J.cH(a,P.dm(x,0,x.length,z,!0),P.dm(w,0,w.length,z,!0))}return a}},
jG:{"^":"o:30;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv4 address, "+a,this.a,b))}},
jI:{"^":"o:48;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jJ:{"^":"o:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c8(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.N()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cx:{"^":"b;bH:a<,b,c,d,dZ:e>,f,r,0x,0y,0z,0Q,0ch",
ged:function(){return this.b},
gcj:function(a){var z=this.c
if(z==null)return""
if(C.b.a6(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbC:function(a){var z=this.d
if(z==null)return P.fo(this.a)
return z},
gcr:function(a){var z=this.f
return z==null?"":z},
gdI:function(){var z=this.r
return z==null?"":z},
cu:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
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
if(x&&!C.b.a6(d,"/"))d="/"+d
g=P.dl(g,0,0,h)
return new P.cx(i,j,c,f,d,g,this.r)},
e3:function(a,b){return this.cu(a,null,null,null,null,null,null,b,null,null)},
gbD:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.eZ(P.f1(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdJ:function(){return this.c!=null},
gdM:function(){return this.f!=null},
gdK:function(){return this.r!=null},
j:function(a){var z,y,x,w
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
z=J.O(b)
if(!!z.$isde){y=this.a
x=b.gbH()
if(y==null?x==null:y===x)if(this.c!=null===b.gdJ()){y=this.b
x=b.ged()
if(y==null?x==null:y===x){y=this.gcj(this)
x=z.gcj(b)
if(y==null?x==null:y===x){y=this.gbC(this)
x=z.gbC(b)
if(y==null?x==null:y===x)if(this.e===z.gdZ(b)){y=this.f
x=y==null
if(!x===b.gdM()){if(x)y=""
if(y===z.gcr(b)){z=this.r
y=z==null
if(!y===b.gdK()){if(y)z=""
z=z===b.gdI()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gS:function(a){var z=this.z
if(z==null){z=C.b.gS(this.j(0))
this.z=z}return z},
$isde:1,
p:{
dn:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.n],"$asc")
if(c===C.k){z=$.$get$ft().b
if(typeof b!=="string")H.t(H.af(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.aF(c,"bX",0))
y=c.ghp().c9(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cq(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lo:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lz(a,b,d)
else{if(d===b)P.bQ(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lA(a,z,e-1):""
x=P.lt(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.lw(P.c8(C.b.v(a,w,g),new P.lp(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lu(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.N()
t=h<i?P.dl(a,h+1,i,null):null
return new P.cx(j,y,x,v,u,t,i<c?P.ls(a,i+1,c):null)},
fo:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bQ:function(a,b,c){throw H.a(P.Y(c,a,b))},
lw:function(a,b){if(a!=null&&a===P.fo(b))return
return a},
lt:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.b.V(a,z)!==93)P.bQ(a,b,"Missing end `]` to match `[` in host")
P.f0(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.V(a,y)===58){P.f0(a,b,c)
return"["+a+"]"}return P.lC(a,b,c)},
lC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.V(a,z)
if(v===37){u=P.fv(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.al("")
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
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.al("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bQ(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.V(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.al("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fp(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lz:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fr(C.b.H(a,b)))P.bQ(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bQ(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lq(y?a.toLowerCase():a)},
lq:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lA:function(a,b,c){return P.bR(a,b,c,C.Q)},
lu:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bR(a,b,c,C.y):C.t.iL(d,new P.lv(),P.i).W(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a6(w,"/"))w="/"+w
return P.lB(w,e,f)},
lB:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a6(a,"/"))return P.lD(a,!z||c)
return P.lE(a)},
dl:function(a,b,c,d){var z,y
z={}
H.w(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.ca("Both query and queryParameters specified"))
return P.bR(a,b,c,C.n)}if(d==null)return
y=new P.al("")
z.a=""
d.K(0,new P.lx(new P.ly(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
ls:function(a,b,c){return P.bR(a,b,c,C.n)},
fv:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.V(a,b+1)
x=C.b.V(a,z)
w=H.cD(y)
v=H.cD(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aM(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cq(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fp:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.f(z,[P.n])
C.a.m(y,0,37)
C.a.m(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.f(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.e.fG(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.eB(y,0,null)},
bR:function(a,b,c,d){var z=P.fu(a,b,c,H.w(d,"$isc",[P.n],"$asc"),!1)
return z==null?C.b.v(a,b,c):z},
fu:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.n],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.N()
if(typeof c!=="number")return H.p(c)
if(!(y<c))break
c$0:{v=C.b.V(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fv(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bQ(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.V(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fp(v)}}if(w==null)w=new P.al("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.N()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fs:function(a){if(C.b.a6(a,"."))return!0
return C.b.dN(a,"/.")!==-1},
lE:function(a){var z,y,x,w,v,u,t
if(!P.fs(a))return a
z=H.f([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.P(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.W(z,"/")},
lD:function(a,b){var z,y,x,w,v,u
if(!P.fs(a))return!b?P.fq(a):a
z=H.f([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaD(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaD(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.m(z,0,P.fq(z[0]))}return C.a.W(z,"/")},
fq:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fr(J.fZ(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aF(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lr:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.ca("Invalid URL encoding"))}}return z},
dm:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dy(a)
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
else u=new H.hh(y.v(a,b,c))}else{u=H.f([],[P.n])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.ca("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.ca("Truncated URI"))
C.a.h(u,P.lr(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.n],"$asc")
return new P.jQ(!1).c9(u)},
fr:function(a){var z=a|32
return 97<=z&&z<=122}}},
lp:{"^":"o:47;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.Y("Invalid port",this.a,z+1))}},
lv:{"^":"o:46;",
$1:function(a){return P.dn(C.R,a,C.k,!1)}},
ly:{"^":"o:17;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.dn(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.dn(C.p,b,C.k,!0))}}},
lx:{"^":"o:50;a",
$2:function(a,b){var z,y
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(z=J.bu(H.fQ(b,"$isk")),y=this.a;z.G();)y.$2(a,H.M(z.gR(z)))}},
jE:{"^":"b;a,b,c",
gec:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.dO(y,"?",z)
w=y.length
if(x>=0){v=P.bR(y,x+1,w,C.n)
w=x}else v=null
z=new P.kk(this,"data",null,null,null,P.bR(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f_:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.f([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.Y("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.Y("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaD(z)
if(v!==44||x!==t+7||!C.b.a7(a,"base64",t+1))throw H.a(P.Y("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hD(0,a,s,y)
else{r=P.fu(a,s,y,C.n,!0)
if(r!=null)a=C.b.aT(a,s,y,r)}return new P.jE(a,z,c)}}},
lY:{"^":"o:45;",
$1:function(a){return new Uint8Array(96)}},
lX:{"^":"o:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.h2(z,0,96,b)
return z}},
lZ:{"^":"o;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
m_:{"^":"o;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
l1:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdJ:function(){return this.c>0},
gdL:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
gdM:function(){var z=this.f
if(typeof z!=="number")return z.N()
return z<this.r},
gdK:function(){return this.r<this.a.length},
gcV:function(){return this.b===4&&C.b.a6(this.a,"http")},
gcW:function(){return this.b===5&&C.b.a6(this.a,"https")},
gbH:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcV()){this.x="http"
z="http"}else if(this.gcW()){this.x="https"
z="https"}else if(z===4&&C.b.a6(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a6(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
ged:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcj:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbC:function(a){var z
if(this.gdL()){z=this.d
if(typeof z!=="number")return z.D()
return P.c8(C.b.v(this.a,z+1,this.e),null,null)}if(this.gcV())return 80
if(this.gcW())return 443
return 0},
gdZ:function(a){return C.b.v(this.a,this.e,this.f)},
gcr:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.N()
return z<y?C.b.v(this.a,z+1,y):""},
gdI:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aF(y,z+1):""},
gbD:function(){var z=this.f
if(typeof z!=="number")return z.N()
if(z>=this.r)return C.S
z=P.i
return new P.eZ(P.f1(this.gcr(this),C.k),[z,z])},
cu:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
i=this.gbH()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gdL()?this.gbC(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a6(d,"/"))d="/"+d
g=P.dl(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aF(y,x+1)
return new P.cx(i,j,c,f,d,g,b)},
e3:function(a,b){return this.cu(a,null,null,null,null,null,null,b,null,null)},
gS:function(a){var z=this.y
if(z==null){z=C.b.gS(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.O(b)
if(!!z.$isde)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isde:1},
kk:{"^":"cx;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dS:function(a,b){var z=document.createElement("canvas")
return z},
hz:function(a){H.e(a,"$isa6")
return"wheel"},
hM:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$ise7")
try{J.h4(z,a)}catch(x){H.ar(x)}return z},
cw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fc:function(a,b,c,d){var z,y
z=W.cw(W.cw(W.cw(W.cw(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fC:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.U
if(z===C.j)return a
return z.de(a,b)},
aa:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
mW:{"^":"d8;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
mX:{"^":"r;0l:length=","%":"AccessibleNodeList"},
mY:{"^":"aa;0a0:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mZ:{"^":"aa;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
cL:{"^":"r;",$iscL:1,"%":";Blob"},
n4:{"^":"aa;0a0:type}","%":"HTMLButtonElement"},
cO:{"^":"aa;",
cB:function(a,b,c){var z=a.getContext(b,P.ma(c,null))
return z},
$iscO:1,
"%":"HTMLCanvasElement"},
n6:{"^":"K;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
n8:{"^":"ce;0l:length=","%":"CSSPerspective"},
n9:{"^":"cR;0q:x=,0t:y=","%":"CSSPositionValue"},
na:{"^":"ce;0q:x=,0t:y=","%":"CSSRotation"},
b2:{"^":"r;",$isb2:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nb:{"^":"ce;0q:x=,0t:y=","%":"CSSScale"},
hn:{"^":"kj;0l:length=",
eh:function(a,b){var z=a.getPropertyValue(this.cJ(a,b))
return z==null?"":z},
cJ:function(a,b){var z,y
z=$.$get$dW()
y=z[b]
if(typeof y==="string")return y
y=this.fH(a,b)
z[b]=y
return y},
fH:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hs()+b
if(z in a)return z
return b},
fz:function(a,b,c,d){a.setProperty(b,c,d)},
gc3:function(a){return a.bottom},
gas:function(a){return a.height},
gaR:function(a){return a.left},
gb7:function(a){return a.right},
gbb:function(a){return a.top},
gat:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ho:{"^":"b;",
gaR:function(a){return this.eh(a,"left")}},
cR:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ce:{"^":"r;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nc:{"^":"cR;0l:length=","%":"CSSTransformValue"},
nd:{"^":"ce;0q:x=,0t:y=","%":"CSSTranslation"},
ne:{"^":"cR;0l:length=","%":"CSSUnparsedValue"},
nf:{"^":"r;0l:length=","%":"DataTransferItemList"},
ng:{"^":"r;0q:x=,0t:y=","%":"DeviceAcceleration"},
nh:{"^":"r;",
j:function(a){return String(a)},
"%":"DOMException"},
ni:{"^":"hu;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hu:{"^":"r;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
nj:{"^":"km;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.w(c,"$isa8",[P.X],"$asa8")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[[P.a8,P.X]]},
$asy:function(){return[[P.a8,P.X]]},
$isk:1,
$ask:function(){return[[P.a8,P.X]]},
$isc:1,
$asc:function(){return[[P.a8,P.X]]},
$asA:function(){return[[P.a8,P.X]]},
"%":"ClientRectList|DOMRectList"},
hv:{"^":"r;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gat(a))+" x "+H.l(this.gas(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bp(b,"$isa8",[P.X],"$asa8")
if(!z)return!1
z=J.aU(b)
return a.left===z.gaR(b)&&a.top===z.gbb(b)&&this.gat(a)===z.gat(b)&&this.gas(a)===z.gas(b)},
gS:function(a){return W.fc(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gat(a)&0x1FFFFFFF,this.gas(a)&0x1FFFFFFF)},
gc3:function(a){return a.bottom},
gas:function(a){return a.height},
gaR:function(a){return a.left},
gb7:function(a){return a.right},
gbb:function(a){return a.top},
gat:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa8:1,
$asa8:function(){return[P.X]},
"%":";DOMRectReadOnly"},
nk:{"^":"ko;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.M(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[P.i]},
$asy:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asA:function(){return[P.i]},
"%":"DOMStringList"},
nl:{"^":"r;0l:length=","%":"DOMTokenList"},
ki:{"^":"cl;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
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
ga_:function(a){var z=this.i3(this)
return new J.at(z,z.length,0,[H.x(z,0)])},
aB:function(a,b,c,d){throw H.a(P.c3(null))},
$asy:function(){return[W.a1]},
$ask:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
a1:{"^":"K;",
gc7:function(a){return new W.ki(a,a.children)},
gbm:function(a){return P.iO(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
j:function(a){return a.localName},
$isa1:1,
"%":";Element"},
nm:{"^":"aa;0a0:type}","%":"HTMLEmbedElement"},
ac:{"^":"r;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"r;",
d7:["ek",function(a,b,c,d){H.h(c,{func:1,args:[W.ac]})
if(c!=null)this.eC(a,b,c,!1)}],
eC:function(a,b,c,d){return a.addEventListener(b,H.bq(H.h(c,{func:1,args:[W.ac]}),1),!1)},
$isa6:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fi|fj|fl|fm"},
aV:{"^":"cL;",$isaV:1,"%":"File"},
e3:{"^":"kt;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isaV")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aV]},
$asy:function(){return[W.aV]},
$isk:1,
$ask:function(){return[W.aV]},
$isc:1,
$asc:function(){return[W.aV]},
$ise3:1,
$asA:function(){return[W.aV]},
"%":"FileList"},
nF:{"^":"a6;0l:length=","%":"FileWriter"},
nI:{"^":"aa;0l:length=","%":"HTMLFormElement"},
b4:{"^":"r;",$isb4:1,"%":"Gamepad"},
nJ:{"^":"d8;0q:x=,0t:y=","%":"Gyroscope"},
nK:{"^":"r;0l:length=","%":"History"},
nL:{"^":"kG;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isK")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.K]},
$asy:function(){return[W.K]},
$isk:1,
$ask:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asA:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
e6:{"^":"r;",$ise6:1,"%":"ImageData"},
e7:{"^":"aa;0a0:type}",$ise7:1,"%":"HTMLInputElement"},
bC:{"^":"db;",$isbC:1,"%":"KeyboardEvent"},
nQ:{"^":"aa;0a0:type}","%":"HTMLLinkElement"},
nR:{"^":"r;",
j:function(a){return String(a)},
"%":"Location"},
nS:{"^":"d8;0q:x=,0t:y=","%":"Magnetometer"},
nU:{"^":"r;0l:length=","%":"MediaList"},
nV:{"^":"a6;",
d7:function(a,b,c,d){H.h(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.ek(a,b,c,!1)},
"%":"MessagePort"},
nW:{"^":"kM;",
k:function(a,b){return P.aT(a.get(H.M(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gaC:function(a){var z=H.f([],[P.i])
this.K(a,new W.iq(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asag:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iq:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nX:{"^":"kN;",
k:function(a,b){return P.aT(a.get(H.M(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gaC:function(a){var z=H.f([],[P.i])
this.K(a,new W.ir(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asag:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
ir:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b7:{"^":"r;",$isb7:1,"%":"MimeType"},
nY:{"^":"kP;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb7")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b7]},
$asy:function(){return[W.b7]},
$isk:1,
$ask:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asA:function(){return[W.b7]},
"%":"MimeTypeArray"},
aA:{"^":"db;",$isaA:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kh:{"^":"cl;a",
m:function(a,b,c){var z,y
H.C(b)
H.e(c,"$isK")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga_:function(a){var z=this.a.childNodes
return new W.e4(z,z.length,-1,[H.aX(C.U,z,"A",0)])},
aB:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asy:function(){return[W.K]},
$ask:function(){return[W.K]},
$asc:function(){return[W.K]}},
K:{"^":"a6;",
hX:function(a,b){var z,y
try{z=a.parentNode
J.h_(z,b,a)}catch(y){H.ar(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.el(a):z},
fs:function(a,b,c){return a.replaceChild(b,c)},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iv:{"^":"kR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isK")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.K]},
$asy:function(){return[W.K]},
$isk:1,
$ask:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asA:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
o5:{"^":"aa;0a0:type}","%":"HTMLOListElement"},
o6:{"^":"aa;0a0:type}","%":"HTMLObjectElement"},
b8:{"^":"r;0l:length=",$isb8:1,"%":"Plugin"},
oa:{"^":"kV;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb8")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b8]},
$asy:function(){return[W.b8]},
$isk:1,
$ask:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asA:function(){return[W.b8]},
"%":"PluginArray"},
of:{"^":"r;0a0:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
og:{"^":"l0;",
k:function(a,b){return P.aT(a.get(H.M(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gaC:function(a){var z=H.f([],[P.i])
this.K(a,new W.iY(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asag:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"RTCStatsReport"},
iY:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oi:{"^":"aa;0a0:type}","%":"HTMLScriptElement"},
ok:{"^":"aa;0l:length=","%":"HTMLSelectElement"},
d8:{"^":"a6;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
ba:{"^":"a6;",$isba:1,"%":"SourceBuffer"},
ol:{"^":"fj;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isba")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.ba]},
$asy:function(){return[W.ba]},
$isk:1,
$ask:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asA:function(){return[W.ba]},
"%":"SourceBufferList"},
om:{"^":"aa;0a0:type}","%":"HTMLSourceElement"},
bb:{"^":"r;",$isbb:1,"%":"SpeechGrammar"},
on:{"^":"l3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbb")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bb]},
$asy:function(){return[W.bb]},
$isk:1,
$ask:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asA:function(){return[W.bb]},
"%":"SpeechGrammarList"},
bc:{"^":"r;0l:length=",$isbc:1,"%":"SpeechRecognitionResult"},
op:{"^":"l6;",
k:function(a,b){return a.getItem(H.M(b))},
m:function(a,b,c){a.setItem(b,H.M(c))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaC:function(a){var z=H.f([],[P.i])
this.K(a,new W.j9(z))
return z},
gl:function(a){return a.length},
$asag:function(){return[P.i,P.i]},
$isJ:1,
$asJ:function(){return[P.i,P.i]},
"%":"Storage"},
j9:{"^":"o:17;a",
$2:function(a,b){return C.a.h(this.a,a)}},
os:{"^":"aa;0a0:type}","%":"HTMLStyleElement"},
bd:{"^":"r;",$isbd:1,"%":"CSSStyleSheet|StyleSheet"},
bJ:{"^":"aa;",$isbJ:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
be:{"^":"a6;",$isbe:1,"%":"TextTrack"},
bf:{"^":"a6;",$isbf:1,"%":"TextTrackCue|VTTCue"},
ox:{"^":"ld;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbf")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bf]},
$asy:function(){return[W.bf]},
$isk:1,
$ask:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asA:function(){return[W.bf]},
"%":"TextTrackCueList"},
oy:{"^":"fm;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbe")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.be]},
$asy:function(){return[W.be]},
$isk:1,
$ask:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asA:function(){return[W.be]},
"%":"TextTrackList"},
oz:{"^":"r;0l:length=","%":"TimeRanges"},
bh:{"^":"r;",$isbh:1,"%":"Touch"},
bi:{"^":"db;",$isbi:1,"%":"TouchEvent"},
oA:{"^":"lj;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbh")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bh]},
$asy:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asA:function(){return[W.bh]},
"%":"TouchList"},
oB:{"^":"r;0l:length=","%":"TrackDefaultList"},
db:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oD:{"^":"r;",
j:function(a){return String(a)},
"%":"URL"},
oF:{"^":"r;0q:x=","%":"VRStageBoundsPoint"},
oG:{"^":"a6;0l:length=","%":"VideoTrackList"},
bN:{"^":"aA;",
ghm:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghl:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbN:1,
"%":"WheelEvent"},
ka:{"^":"a6;",
ft:function(a,b){return a.requestAnimationFrame(H.bq(H.h(b,{func:1,ret:-1,args:[P.X]}),1))},
eN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oL:{"^":"lL;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb2")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b2]},
$asy:function(){return[W.b2]},
$isk:1,
$ask:function(){return[W.b2]},
$isc:1,
$asc:function(){return[W.b2]},
$asA:function(){return[W.b2]},
"%":"CSSRuleList"},
oM:{"^":"hv;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bp(b,"$isa8",[P.X],"$asa8")
if(!z)return!1
z=J.aU(b)
return a.left===z.gaR(b)&&a.top===z.gbb(b)&&a.width===z.gat(b)&&a.height===z.gas(b)},
gS:function(a){return W.fc(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gas:function(a){return a.height},
gat:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
oO:{"^":"lN;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb4")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b4]},
$asy:function(){return[W.b4]},
$isk:1,
$ask:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asA:function(){return[W.b4]},
"%":"GamepadList"},
oP:{"^":"lP;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isK")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.K]},
$asy:function(){return[W.K]},
$isk:1,
$ask:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asA:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oQ:{"^":"lR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbc")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bc]},
$asy:function(){return[W.bc]},
$isk:1,
$ask:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asA:function(){return[W.bc]},
"%":"SpeechRecognitionResultList"},
oR:{"^":"lT;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbd")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bd]},
$asy:function(){return[W.bd]},
$isk:1,
$ask:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asA:function(){return[W.bd]},
"%":"StyleSheetList"},
kp:{"^":"da;a,b,c,$ti",
hA:function(a,b,c,d){var z=H.x(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a3(this.a,this.b,a,!1,z)}},
oN:{"^":"kp;a,b,c,$ti"},
kq:{"^":"ez;a,b,c,d,e,$ti",
fL:function(){var z=this.d
if(z!=null&&this.a<=0)J.h0(this.b,this.c,z,!1)},
p:{
a3:function(a,b,c,d,e){var z=c==null?null:W.fC(new W.kr(c),W.ac)
z=new W.kq(0,a,b,z,!1,[e])
z.fL()
return z}}},
kr:{"^":"o:4;a",
$1:function(a){return this.a.$1(H.e(a,"$isac"))}},
A:{"^":"b;$ti",
ga_:function(a){return new W.e4(a,this.gl(a),-1,[H.aX(this,a,"A",0)])},
aB:function(a,b,c,d){H.z(d,H.aX(this,a,"A",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
e4:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dF(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
kj:{"^":"r+ho;"},
kl:{"^":"r+y;"},
km:{"^":"kl+A;"},
kn:{"^":"r+y;"},
ko:{"^":"kn+A;"},
ks:{"^":"r+y;"},
kt:{"^":"ks+A;"},
kF:{"^":"r+y;"},
kG:{"^":"kF+A;"},
kM:{"^":"r+ag;"},
kN:{"^":"r+ag;"},
kO:{"^":"r+y;"},
kP:{"^":"kO+A;"},
kQ:{"^":"r+y;"},
kR:{"^":"kQ+A;"},
kU:{"^":"r+y;"},
kV:{"^":"kU+A;"},
l0:{"^":"r+ag;"},
fi:{"^":"a6+y;"},
fj:{"^":"fi+A;"},
l2:{"^":"r+y;"},
l3:{"^":"l2+A;"},
l6:{"^":"r+ag;"},
lc:{"^":"r+y;"},
ld:{"^":"lc+A;"},
fl:{"^":"a6+y;"},
fm:{"^":"fl+A;"},
li:{"^":"r+y;"},
lj:{"^":"li+A;"},
lK:{"^":"r+y;"},
lL:{"^":"lK+A;"},
lM:{"^":"r+y;"},
lN:{"^":"lM+A;"},
lO:{"^":"r+y;"},
lP:{"^":"lO+A;"},
lQ:{"^":"r+y;"},
lR:{"^":"lQ+A;"},
lS:{"^":"r+y;"},
lT:{"^":"lS+A;"}}],["","",,P,{"^":"",
aT:function(a){var z,y,x,w,v
if(a==null)return
z=P.ee(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.M(y[w])
z.m(0,v,a[v])}return z},
ma:function(a,b){var z={}
a.K(0,new P.mb(z))
return z},
e1:function(){var z=$.e0
if(z==null){z=J.cI(window.navigator.userAgent,"Opera",0)
$.e0=z}return z},
hs:function(){var z,y
z=$.dY
if(z!=null)return z
y=$.dZ
if(y==null){y=J.cI(window.navigator.userAgent,"Firefox",0)
$.dZ=y}if(y)z="-moz-"
else{y=$.e_
if(y==null){y=!P.e1()&&J.cI(window.navigator.userAgent,"Trident/",0)
$.e_=y}if(y)z="-ms-"
else z=P.e1()?"-o-":"-webkit-"}$.dY=z
return z},
l9:{"^":"b;",
dF:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cw:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.O(a)
if(!!y.$isaj)return new Date(a.a)
if(!!y.$isiR)throw H.a(P.c3("structured clone of RegExp"))
if(!!y.$isaV)return a
if(!!y.$iscL)return a
if(!!y.$ise3)return a
if(!!y.$ise6)return a
if(!!y.$isel||!!y.$isd5)return a
if(!!y.$isJ){x=this.dF(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.K(a,new P.lb(z,this))
return z.a}if(!!y.$isc){x=this.dF(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hj(a,x)}throw H.a(P.c3("structured clone of other type"))},
hj:function(a,b){var z,y,x,w
z=J.aE(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.p(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cw(z.k(a,w)))
return x}},
lb:{"^":"o:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cw(b)}},
mb:{"^":"o:6;a",
$2:function(a,b){this.a[a]=b}},
la:{"^":"l9;a,b"},
hF:{"^":"cl;a,b",
gbg:function(){var z,y,x
z=this.b
y=H.aF(z,"y",0)
x=W.a1
return new H.id(new H.k8(z,H.h(new P.hG(),{func:1,ret:P.ah,args:[y]}),[y]),H.h(new P.hH(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.C(b)
H.e(c,"$isa1")
z=this.gbg()
J.h3(z.b.$1(J.cJ(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aB:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gl:function(a){return J.as(this.gbg().a)},
k:function(a,b){var z=this.gbg()
return z.b.$1(J.cJ(z.a,b))},
ga_:function(a){var z=P.i7(this.gbg(),!1,W.a1)
return new J.at(z,z.length,0,[H.x(z,0)])},
$asy:function(){return[W.a1]},
$ask:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
hG:{"^":"o:44;",
$1:function(a){return!!J.O(H.e(a,"$isK")).$isa1}},
hH:{"^":"o:27;",
$1:function(a){return H.j(H.e(a,"$isK"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fb:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bG:{"^":"b;q:a>,t:b>,$ti",
j:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.bp(b,"$isbG",[P.X],null)
if(!z)return!1
z=this.a
y=J.aU(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gS:function(a){var z,y
z=J.b_(this.a)
y=J.b_(this.b)
return P.fb(P.bP(P.bP(0,z),y))},
i:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.i()
y=H.x(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.i()
return new P.bG(z,H.z(x*b,y),this.$ti)}},
kW:{"^":"b;$ti",
gb7:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.z(z+this.c,H.x(this,0))},
gc3:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.z(z+this.d,H.x(this,0))},
j:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bp(b,"$isa8",[P.X],"$asa8")
if(!z)return!1
z=this.a
y=J.aU(b)
x=y.gaR(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbb(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.x(this,0)
if(H.z(z+this.c,w)===y.gb7(b)){if(typeof x!=="number")return x.D()
z=H.z(x+this.d,w)===y.gc3(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.b_(z)
x=this.b
w=J.b_(x)
if(typeof z!=="number")return z.D()
v=H.x(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.z(x+this.d,v)
return P.fb(P.bP(P.bP(P.bP(P.bP(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
df:function(a,b){var z,y
H.w(b,"$isbG",[P.X],"$asbG")
z=b.a
y=this.a
if(typeof z!=="number")return z.cA()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cA()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a8:{"^":"kW;aR:a>,bb:b>,at:c>,as:d>,$ti",p:{
iO:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.N()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.N()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nn:{"^":"T;0q:x=,0t:y=","%":"SVGFEBlendElement"},no:{"^":"T;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},np:{"^":"T;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nq:{"^":"T;0q:x=,0t:y=","%":"SVGFECompositeElement"},nr:{"^":"T;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},ns:{"^":"T;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nt:{"^":"T;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nu:{"^":"T;0q:x=,0t:y=","%":"SVGFEFloodElement"},nv:{"^":"T;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nw:{"^":"T;0q:x=,0t:y=","%":"SVGFEImageElement"},nx:{"^":"T;0q:x=,0t:y=","%":"SVGFEMergeElement"},ny:{"^":"T;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nz:{"^":"T;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nA:{"^":"T;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nB:{"^":"T;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},nC:{"^":"T;0q:x=,0t:y=","%":"SVGFESpotLightElement"},nD:{"^":"T;0q:x=,0t:y=","%":"SVGFETileElement"},nE:{"^":"T;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},nG:{"^":"T;0q:x=,0t:y=","%":"SVGFilterElement"},nH:{"^":"bA;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hK:{"^":"bA;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bA:{"^":"T;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},nM:{"^":"bA;0q:x=,0t:y=","%":"SVGImageElement"},bD:{"^":"r;",$isbD:1,"%":"SVGLength"},nP:{"^":"kI;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbD")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[P.bD]},
$isk:1,
$ask:function(){return[P.bD]},
$isc:1,
$asc:function(){return[P.bD]},
$asA:function(){return[P.bD]},
"%":"SVGLengthList"},nT:{"^":"T;0q:x=,0t:y=","%":"SVGMaskElement"},bF:{"^":"r;",$isbF:1,"%":"SVGNumber"},o4:{"^":"kT;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbF")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[P.bF]},
$isk:1,
$ask:function(){return[P.bF]},
$isc:1,
$asc:function(){return[P.bF]},
$asA:function(){return[P.bF]},
"%":"SVGNumberList"},o9:{"^":"T;0q:x=,0t:y=","%":"SVGPatternElement"},ob:{"^":"r;0q:x=,0t:y=","%":"SVGPoint"},oc:{"^":"r;0l:length=","%":"SVGPointList"},od:{"^":"r;0q:x=,0t:y=","%":"SVGRect"},oe:{"^":"hK;0q:x=,0t:y=","%":"SVGRectElement"},oj:{"^":"T;0a0:type}","%":"SVGScriptElement"},oq:{"^":"l8;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.M(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asA:function(){return[P.i]},
"%":"SVGStringList"},ot:{"^":"T;0a0:type}","%":"SVGStyleElement"},T:{"^":"a1;",
gc7:function(a){return new P.hF(a,new W.kh(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},ou:{"^":"bA;0q:x=,0t:y=","%":"SVGSVGElement"},je:{"^":"bA;","%":"SVGTextPathElement;SVGTextContentElement"},ow:{"^":"je;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bK:{"^":"r;",$isbK:1,"%":"SVGTransform"},oC:{"^":"ll;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbK")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[P.bK]},
$isk:1,
$ask:function(){return[P.bK]},
$isc:1,
$asc:function(){return[P.bK]},
$asA:function(){return[P.bK]},
"%":"SVGTransformList"},oE:{"^":"bA;0q:x=,0t:y=","%":"SVGUseElement"},kH:{"^":"r+y;"},kI:{"^":"kH+A;"},kS:{"^":"r+y;"},kT:{"^":"kS+A;"},l7:{"^":"r+y;"},l8:{"^":"l7+A;"},lk:{"^":"r+y;"},ll:{"^":"lk+A;"}}],["","",,P,{"^":"",R:{"^":"b;",$isk:1,
$ask:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]}}}],["","",,P,{"^":"",n_:{"^":"r;0l:length=","%":"AudioBuffer"},dK:{"^":"a6;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},n0:{"^":"kg;",
k:function(a,b){return P.aT(a.get(H.M(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gaC:function(a){var z=H.f([],[P.i])
this.K(a,new P.h6(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asag:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"AudioParamMap"},h6:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},h7:{"^":"dK;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},n1:{"^":"a6;0l:length=","%":"AudioTrackList"},ha:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n2:{"^":"dK;0a0:type}","%":"BiquadFilterNode"},o7:{"^":"ha;0l:length=","%":"OfflineAudioContext"},o8:{"^":"h7;0a0:type}","%":"Oscillator|OscillatorNode"},kg:{"^":"r+ag;"}}],["","",,P,{"^":"",eu:{"^":"r;",$iseu:1,"%":"WebGLRenderingContext"},jy:{"^":"r;",$isjy:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oo:{"^":"l5;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aT(a.item(b))},
m:function(a,b,c){H.C(b)
H.e(c,"$isJ")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[[P.J,,,]]},
$isk:1,
$ask:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asA:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},l4:{"^":"r+y;"},l5:{"^":"l4+A;"}}],["","",,O,{"^":"",aH:{"^":"b;0a,0b,0c,0d,$ti",
bK:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
cD:function(a,b,c){var z=H.aF(this,"aH",0)
H.h(b,{func:1,ret:P.ah,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.n,[P.k,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
be:function(a,b){return this.cD(a,null,b)},
fh:function(a){var z
H.w(a,"$isk",[H.aF(this,"aH",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eY:function(a,b){var z
H.w(b,"$isk",[H.aF(this,"aH",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga_:function(a){var z=this.a
return new J.at(z,z.length,0,[H.x(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aF(this,"aH",0)
H.z(b,z)
z=[z]
if(this.fh(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eY(x,H.f([b],z))}},
$isk:1,
p:{
cP:function(a){var z=new O.aH([a])
z.bK(a)
return z}}},d2:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
es:function(a){var z=this.b
if(!(z==null))z.F(a)},
aG:function(){return this.es(null)},
gX:function(a){var z=this.a
if(z.length>0)return C.a.gaD(z)
else return V.c2()},
e1:function(a){var z=this.a
if(a==null)C.a.h(z,V.c2())
else C.a.h(z,a)
this.aG()},
cp:function(){var z=this.a
if(z.length>0){z.pop()
this.aG()}}}}],["","",,E,{"^":"",cK:{"^":"b;"},aI:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a1:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cK:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.at(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
if(y.f==null)y.cK()}},
sa5:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gB()
y.toString
x=H.h(this.gdX(),{func:1,ret:-1,args:[D.u]})
C.a.P(y.a,x)}y=this.c
if(y!=null){y=y.gB()
y.toString
x=H.h(this.gdX(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}w=new D.F("shape",z,this.c,this,[F.ex])
w.b=!0
this.a4(w)}},
sb8:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.h(this.gdY(),{func:1,ret:-1,args:[D.u]})
C.a.P(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gdY(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}this.cK()
w=new D.F("technique",x,this.f,this,[O.ct])
w.b=!0
this.a4(w)}},
saE:function(a){var z,y,x,w
if(!J.P(this.r,a)){z=this.r
if(z!=null){y=z.gB()
y.toString
x=H.h(this.gdW(),{func:1,ret:-1,args:[D.u]})
C.a.P(y.a,x)}if(a!=null){y=a.gB()
y.toString
x=H.h(this.gdW(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}this.r=a
w=new D.F("mover",z,a,this,[U.a7])
w.b=!0
this.a4(w)}},
am:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.an(0,b,this):null
if(!J.P(y,this.x)){x=this.x
this.x=y
w=new D.F("matrix",x,y,this,[V.au])
w.b=!0
this.a4(w)}z=this.f
if(z!=null)z.am(0,b)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.x(z,0)]);z.G();)z.d.am(0,b)},
aS:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gX(z))
else C.a.h(z.a,y.i(0,z.gX(z)))
z.aG()
a.e2(this.f)
z=a.dy
x=(z&&C.a).gaD(z)
if(x!=null&&this.d!=null)x.hW(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.x(z,0)]);z.G();)z.d.aS(a)
a.e0()
a.dx.cp()},
gB:function(){var z=this.z
if(z==null){z=D.Q()
this.z=z}return z},
a4:function(a){var z=this.z
if(!(z==null))z.F(a)},
Y:function(){return this.a4(null)},
hI:[function(a){H.e(a,"$isu")
this.e=null
this.a4(a)},function(){return this.hI(null)},"iR","$1","$0","gdX",0,2,1],
hJ:[function(a){this.a4(H.e(a,"$isu"))},function(){return this.hJ(null)},"iS","$1","$0","gdY",0,2,1],
hH:[function(a){this.a4(H.e(a,"$isu"))},function(){return this.hH(null)},"iQ","$1","$0","gdW",0,2,1],
hF:[function(a){this.a4(H.e(a,"$isu"))},function(){return this.hF(null)},"iO","$1","$0","gdV",0,2,1],
iN:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aI],"$ask")
for(z=b.length,y=this.gdV(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga1()==null){t=new D.b3()
t.a=H.f([],w)
t.c=0
u.sa1(t)}t=u.ga1()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.Y()},"$2","ghE",8,0,8],
iP:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aI],"$ask")
for(z=b.length,y=this.gdV(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga1()==null){t=new D.b3()
t.a=H.f([],w)
t.c=0
u.sa1(t)}t=u.ga1()
t.toString
H.h(y,x)
C.a.P(t.a,y)}}this.Y()},"$2","ghG",8,0,8],
$isaJ:1,
p:{
cS:function(a,b,c,d,e,f){var z,y
z=new E.aI()
z.a=d
z.b=!0
y=O.cP(E.aI)
z.y=y
y.be(z.ghE(),z.ghG())
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
z.sa5(0,e)
z.sb8(f)
z.saE(c)
return z}}},iT:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eq:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aj(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d2()
y=[V.au]
z.a=H.f([],y)
x=z.gB()
x.toString
w={func:1,ret:-1,args:[D.u]}
v=H.h(new E.iV(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d2()
z.a=H.f([],y)
v=z.gB()
v.toString
x=H.h(new E.iW(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d2()
z.a=H.f([],y)
y=z.gB()
y.toString
w=H.h(new E.iX(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.ct])
this.dy=z
C.a.h(z,null)
this.fr=new H.ck(0,0,[P.i,A.ew])},
ghS:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gX(z)
y=this.db
y=z.i(0,y.gX(y))
this.z=y
z=y}return z},
e2:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaD(z):a;(z&&C.a).h(z,y)},
e0:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iU:function(a,b){var z=new E.iT(a,b)
z.eq(a,b)
return z}}},iV:{"^":"o:12;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.z=null
z.ch=null}},iW:{"^":"o:12;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iX:{"^":"o:12;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},jj:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a1:x@,0y,0z,0Q,0ch",
gB:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
ev:[function(a){var z
H.e(a,"$isu")
z=this.x
if(!(z==null))z.F(a)
this.hY()},function(){return this.ev(null)},"eu","$1","$0","gcF",0,2,1],
ght:function(){var z,y,x
z=Date.now()
y=C.e.a2(P.e2(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aj(z,!1)
return x/y},
d_:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.i()
if(typeof z!=="number")return H.p(z)
x=C.d.dG(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.i()
w=C.d.dG(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hY:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jl(this),{func:1,ret:-1,args:[P.X]})
C.B.eN(z)
C.B.ft(z,W.fC(y,P.X))}},
hV:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d_()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aj(w,!1)
x.y=P.e2(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aG()
w=x.db
C.a.sl(w.a,0)
w.aG()
w=x.dx
C.a.sl(w.a,0)
w.aG()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aS(this.e)}}catch(v){z=H.ar(v)
y=H.bs(v)
P.dC("Error: "+H.l(z))
P.dC("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jk:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$iscO)return E.eF(a,!0,!0,!0,!1)
y=W.dS(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gc7(a).h(0,y)
w=E.eF(y,!0,!0,!0,!1)
w.a=a
return w},
eF:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jj()
y=P.i1(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.cB(a,"webgl",y)
x=H.e(x==null?C.l.cB(a,"experimental-webgl",y):x,"$iseu")
if(x==null)H.t(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iU(x,a)
w=new T.jf(x)
w.b=H.C(x.getParameter(3379))
w.c=H.C(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jL(a)
v=new X.hV()
v.c=new X.az(!1,!1,!1)
v.d=P.i4(null,null,null,P.n)
w.b=v
v=new X.is(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.i9(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jn(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.ez,P.b]])
w.z=v
u=document
t=W.aA
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a3(u,"contextmenu",H.h(w.gf4(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.h(w.gf7(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.h(w.gf1(),q),!1,r))
v=w.z
p=W.bC
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.h(w.gf9(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.h(w.gf8(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.h(w.gfc(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.h(w.gfe(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.h(w.gfd(),s),!1,t))
p=w.z
o=W.bN;(p&&C.a).h(p,W.a3(a,H.M(W.hz(a)),H.h(w.gff(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.h(w.gf5(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.h(w.gf6(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.h(w.gfg(),q),!1,r))
r=w.z
q=W.bi
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.h(w.gfn(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.h(w.gfl(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.h(w.gfm(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aj(Date.now(),!1)
z.ch=0
z.d_()
return z}}},jl:{"^":"o:31;a",
$1:function(a){var z
H.mH(a)
z=this.a
if(z.z){z.z=!1
z.hV()}}}}],["","",,Z,{"^":"",f6:{"^":"b;a,b",p:{
dh:function(a,b,c){var z
H.w(c,"$isc",[P.n],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bm(c)),35044)
a.bindBuffer(b,null)
return new Z.f6(b,z)}}},dO:{"^":"cK;a,b,c,d,e",
bk:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ar(y)
x=P.v('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.l(z))
throw H.a(x)}},
j:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},k7:{"^":"b;a",$isn3:1},dP:{"^":"b;a,0b,c,d",
aQ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bk:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bk(a)},
ea:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aS:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.d(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].j(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.W(y,", ")+"\nAttrs:   "+C.a.W(u,", ")},
$isov:1},ch:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b9(this.c)+"'")+"]"}},bj:{"^":"b;a",
gcE:function(a){var z,y
z=this.a
y=(z&$.$get$aP().a)!==0?3:0
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aQ().a)!==0)y+=2
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$bL().a)!==0)y+=3
if((z&$.$get$bM().a)!==0)y+=4
if((z&$.$get$bk().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
hc:function(a){var z,y,x
z=$.$get$aP()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bk()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f5()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bj))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.f([],[P.i])
y=this.a
if((y&$.$get$aP().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aR().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bL().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bM().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bk().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.W(z,"|")},
p:{
ao:function(a){return new Z.bj(a)}}}}],["","",,D,{"^":"",dT:{"^":"b;"},b3:{"^":"b;0a,0b,0c",
F:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.hD(z))
return x!==0},
hZ:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.F(y)}}},
ab:function(a){return this.hZ(a,!0,!1)},
p:{
Q:function(){var z=new D.b3()
z.a=H.f([],[{func:1,ret:-1,args:[D.u]}])
z.c=0
return z}}},hD:{"^":"o:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"b;a,0b"},ci:{"^":"u;c,d,a,0b,$ti"},cj:{"^":"u;c,d,a,0b,$ti"},F:{"^":"u;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dQ:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)},
p:{"^":"n5<"}},eb:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eb))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)}},ec:{"^":"u;c,a,0b"},hV:{"^":"b;0a,0b,0c,0d",
hP:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ec(a,this)
y.b=!0
return z.F(y)},
hL:function(a){var z,y
this.c=a.b
this.d.P(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ec(a,this)
y.b=!0
return z.F(y)}},ef:{"^":"cp;x,y,c,d,e,a,0b"},i9:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aw:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aj(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.i()
v=b.b
u=this.ch
if(typeof v!=="number")return v.i()
t=new V.V(y.a+x*w,y.b+v*u)
u=this.a.gaN()
s=new X.bE(a,new V.V(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
co:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.F(this.aw(a,b))
return!0},
b6:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ej()
if(typeof z!=="number")return z.bG()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.aw(a,b))
return!0},
b5:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.aw(a,b))
return!0},
hQ:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaN()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.i()
t=a.b
s=this.cy
if(typeof t!=="number")return t.i()
w=new X.d3(new V.W(v*u,t*s),y,x,new P.aj(w,!1),this)
w.b=!0
z.F(w)
return!0},
fb:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aj(Date.now(),!1)
y=this.f
x=new X.ef(c,a,this.a.gaN(),b,z,this)
x.b=!0
y.F(x)
this.y=z
this.x=new V.V(0,0)}},az:{"^":"b;a,b,c",
u:function(a,b){var z,y
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
j:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bE:{"^":"cp;x,y,z,Q,ch,c,d,e,a,0b"},is:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bQ:function(a,b,c){var z,y,x
z=new P.aj(Date.now(),!1)
y=this.a.gaN()
x=new X.bE(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
co:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.F(this.bQ(a,b,!0))
return!0},
b6:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ej()
if(typeof z!=="number")return z.bG()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.bQ(a,b,!0))
return!0},
b5:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.bQ(a,b,!1))
return!0},
hR:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaN()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.i()
u=a.b
t=this.ch
if(typeof u!=="number")return u.i()
x=new X.d3(new V.W(w*v,u*t),y,b,new P.aj(x,!1),this)
x.b=!0
z.F(x)
return!0},
gdg:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
gbF:function(){var z=this.c
if(z==null){z=D.Q()
this.c=z}return z},
gdT:function(){var z=this.d
if(z==null){z=D.Q()
this.d=z}return z}},d3:{"^":"cp;x,c,d,e,a,0b"},cp:{"^":"u;"},eH:{"^":"cp;x,y,z,Q,ch,c,d,e,a,0b"},jn:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aw:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.V],"$asc")
z=new P.aj(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gaN()
w=new X.eH(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hO:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.b
if(z==null)return!1
z.F(this.aw(a,!0))
return!0},
hM:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.c
if(z==null)return!1
z.F(this.aw(a,!0))
return!0},
hN:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.d
if(z==null)return!1
z.F(this.aw(a,!1))
return!0}},jL:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaN:function(){var z=this.a
return V.et(0,0,(z&&C.l).gbm(z).c,C.l.gbm(z).d)},
cQ:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eb(z,new X.az(y,a.altKey,a.shiftKey))},
aL:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.az(y,a.altKey,a.shiftKey)},
c1:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.az(y,a.altKey,a.shiftKey)},
ax:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.V(y-w,x-v)},
aW:function(a){return new V.W(a.movementX,a.movementY)},
bW:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.V])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.d.ac(u.pageX)
C.d.ac(u.pageY)
s=z.left
C.d.ac(u.pageX)
C.a.h(y,new V.V(t-s,C.d.ac(u.pageY)-z.top))}return y},
au:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dQ(z,new X.az(y,a.altKey,a.shiftKey))},
iq:[function(a){this.f=!0},"$1","gf7",4,0,4],
ij:[function(a){this.f=!1},"$1","gf1",4,0,4],
im:[function(a){if(this.f)a.preventDefault()},"$1","gf4",4,0,4],
is:[function(a){var z
H.e(a,"$isbC")
if(!this.f)return
z=this.cQ(a)
if(this.b.hP(z))a.preventDefault()},"$1","gf9",4,0,19],
ir:[function(a){var z
H.e(a,"$isbC")
if(!this.f)return
z=this.cQ(a)
if(this.b.hL(z))a.preventDefault()},"$1","gf8",4,0,19],
iu:[function(a){var z,y,x,w
H.e(a,"$isaA")
z=this.a
z.focus()
this.f=!0
this.aL(a)
if(this.x){y=this.au(a)
x=this.aW(a)
if(this.d.co(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.au(a)
w=this.ax(a)
if(this.c.co(y,w))a.preventDefault()},"$1","gfc",4,0,5],
iw:[function(a){var z,y,x
H.e(a,"$isaA")
this.aL(a)
z=this.au(a)
if(this.x){y=this.aW(a)
if(this.d.b6(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.b6(z,x))a.preventDefault()},"$1","gfe",4,0,5],
ip:[function(a){var z,y,x,w
H.e(a,"$isaA")
z=this.a
if(!(z&&C.l).gbm(z).df(0,new P.bG(a.clientX,a.clientY,[P.X]))){this.aL(a)
y=this.au(a)
if(this.x){x=this.aW(a)
if(this.d.b6(y,x))a.preventDefault()
return}if(this.r)return
w=this.ax(a)
if(this.c.b6(y,w))a.preventDefault()}},"$1","gf6",4,0,5],
iv:[function(a){var z,y,x
H.e(a,"$isaA")
this.aL(a)
z=this.au(a)
if(this.x){y=this.aW(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.b5(z,x))a.preventDefault()},"$1","gfd",4,0,5],
io:[function(a){var z,y,x,w
H.e(a,"$isaA")
z=this.a
if(!(z&&C.l).gbm(z).df(0,new P.bG(a.clientX,a.clientY,[P.X]))){this.aL(a)
y=this.au(a)
if(this.x){x=this.aW(a)
if(this.d.b5(y,x))a.preventDefault()
return}if(this.r)return
w=this.ax(a)
if(this.c.b5(y,w))a.preventDefault()}},"$1","gf5",4,0,5],
ix:[function(a){var z,y
H.e(a,"$isbN")
this.aL(a)
z=new V.W((a&&C.A).ghl(a),C.A.ghm(a)).w(0,180)
if(this.x){if(this.d.hQ(z))a.preventDefault()
return}if(this.r)return
y=this.ax(a)
if(this.c.hR(z,y))a.preventDefault()},"$1","gff",4,0,35],
iy:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.au(this.y)
v=this.ax(this.y)
this.d.fb(w,v,x)}},"$1","gfg",4,0,4],
iE:[function(a){var z
H.e(a,"$isbi")
this.a.focus()
this.f=!0
this.c1(a)
z=this.bW(a)
if(this.e.hO(z))a.preventDefault()},"$1","gfn",4,0,13],
iC:[function(a){var z
H.e(a,"$isbi")
this.c1(a)
z=this.bW(a)
if(this.e.hM(z))a.preventDefault()},"$1","gfl",4,0,13],
iD:[function(a){var z
H.e(a,"$isbi")
this.c1(a)
z=this.bW(a)
if(this.e.hN(z))a.preventDefault()},"$1","gfm",4,0,13]}}],["","",,D,{"^":"",ht:{"^":"b;",$isa2:1,$isaJ:1},a2:{"^":"b;",$isaJ:1},hW:{"^":"aH;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.Q()
this.Q=z}return z},
ae:function(a){var z=this.Q
if(!(z==null))z.F(a)},
fa:[function(a){var z
H.e(a,"$isu")
z=this.ch
if(!(z==null))z.F(a)},function(){return this.fa(null)},"it","$1","$0","gcX",0,2,1],
iz:[function(a){var z,y,x
H.w(a,"$isk",[D.a2],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.eI(x))return!1}return!0},"$1","gfi",4,0,37],
ig:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gcX(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa2")
if(t instanceof D.co)C.a.h(this.f,t)
s=t.r
if(s==null){s=new D.b3()
s.a=H.f([],v)
s.c=0
t.r=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.ci(a,b,this,[z])
z.b=!0
this.ae(z)},"$2","geZ",8,0,18],
iB:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gcX(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa2")
if(t instanceof D.co)C.a.P(this.f,t)
s=t.r
if(s==null){s=new D.b3()
s.a=H.f([],v)
s.c=0
t.r=s}H.h(x,w)
C.a.P(s.a,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.ae(z)},"$2","gfk",8,0,18],
eI:function(a){var z=C.a.bn(this.f,a)
return z},
$ask:function(){return[D.a2]},
$asaH:function(){return[D.a2]}},co:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gB:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
ae:[function(a){var z
H.e(a,"$isu")
z=this.r
if(!(z==null))z.F(a)},function(){return this.ae(null)},"i5","$1","$0","gew",0,2,1],
$isa2:1,
$isaJ:1},j6:{"^":"b;",$isa2:1,$isaJ:1},jg:{"^":"b;",$isa2:1,$isaJ:1},jh:{"^":"b;",$isa2:1,$isaJ:1},ji:{"^":"b;",$isa2:1,$isaJ:1}}],["","",,V,{"^":"",
n7:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","ip",8,0,33],
cG:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bd(a-b,z)
return(a<0?a+z:a)+b},
I:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.d.e8($.m.$2(a,0)?0:a,b),c+b+1)},
br:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.q],"$asc")
z=H.f([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.I(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.b.aa(z[u],x))}return z},
a4:{"^":"b;a,b,c",
i:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.a4(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
b0:{"^":"b;a,b,c,d",
i:function(a,b){var z,y,x,w
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
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
cm:{"^":"b;a,b,c,d,e,f,r,x,y",
ad:function(a,b){var z=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
i:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$iscm")
z=this.a
y=a5.a
if(typeof z!=="number")return z.i()
x=C.d.i(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.i()
u=C.d.i(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.i()
r=C.d.i(t,s)
q=a5.b
p=C.d.i(z,q)
o=a5.e
n=C.d.i(w,o)
m=a5.x
l=C.d.i(t,m)
k=a5.c
z=C.d.i(z,k)
j=a5.f
w=C.d.i(w,j)
i=a5.y
t=C.d.i(t,i)
h=this.d
if(typeof h!=="number")return h.i()
g=C.d.i(h,y)
f=this.e
if(typeof f!=="number")return f.i()
e=C.d.i(f,v)
d=this.f
if(typeof d!=="number")return d.i()
c=C.d.i(d,s)
b=C.d.i(h,q)
a=C.d.i(f,o)
a0=C.d.i(d,m)
h=C.d.i(h,k)
f=C.d.i(f,j)
d=C.d.i(d,i)
a1=this.r
if(typeof a1!=="number")return a1.i()
y=C.d.i(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.i()
v=C.d.i(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.i()
return new V.cm(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.i(a3,s),C.d.i(a1,q)+C.d.i(a2,o)+C.d.i(a3,m),C.d.i(a1,k)+C.d.i(a2,j)+C.d.i(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cm))return!1
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
j:function(a){var z,y,x,w,v,u,t,s
z=[P.q]
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
au:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ad:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
dR:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.i()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.i()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.i()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.i()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.i()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.i()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.c2()
a3=1/a2
a4=-w
a5=-i
return V.ay((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
i:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isau")
z=this.a
y=a7.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.i()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.i()
if(typeof s!=="number")return H.p(s)
r=a7.b
if(typeof r!=="number")return H.p(r)
q=a7.f
if(typeof q!=="number")return H.p(q)
p=a7.z
if(typeof p!=="number")return H.p(p)
o=a7.cy
if(typeof o!=="number")return H.p(o)
n=a7.c
if(typeof n!=="number")return H.p(n)
m=a7.r
if(typeof m!=="number")return H.p(m)
l=a7.Q
if(typeof l!=="number")return H.p(l)
k=a7.db
if(typeof k!=="number")return H.p(k)
j=a7.d
if(typeof j!=="number")return H.p(j)
i=a7.x
if(typeof i!=="number")return H.p(i)
h=a7.ch
if(typeof h!=="number")return H.p(h)
g=a7.dx
if(typeof g!=="number")return H.p(g)
f=this.e
if(typeof f!=="number")return f.i()
e=this.f
if(typeof e!=="number")return e.i()
d=this.r
if(typeof d!=="number")return d.i()
c=this.x
if(typeof c!=="number")return c.i()
b=this.y
if(typeof b!=="number")return b.i()
a=this.z
if(typeof a!=="number")return a.i()
a0=this.Q
if(typeof a0!=="number")return a0.i()
a1=this.ch
if(typeof a1!=="number")return a1.i()
a2=this.cx
if(typeof a2!=="number")return a2.i()
a3=this.cy
if(typeof a3!=="number")return a3.i()
a4=this.db
if(typeof a4!=="number")return a4.i()
a5=this.dx
if(typeof a5!=="number")return a5.i()
return V.ay(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
e9:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gaj(a)
if(typeof z!=="number")return z.i()
y=C.d.i(z,y)
z=this.b
x=a.gak(a)
if(typeof z!=="number")return z.i()
x=C.d.i(z,x)
z=this.c
w=a.gal()
if(typeof z!=="number")return z.i()
w=C.d.i(z,w)
z=this.e
v=a.gaj(a)
if(typeof z!=="number")return z.i()
v=C.d.i(z,v)
z=this.f
u=a.gak(a)
if(typeof z!=="number")return z.i()
u=C.d.i(z,u)
z=this.r
t=a.gal()
if(typeof z!=="number")return z.i()
t=C.d.i(z,t)
z=this.y
s=a.gaj(a)
if(typeof z!=="number")return z.i()
s=C.d.i(z,s)
z=this.z
r=a.gak(a)
if(typeof z!=="number")return z.i()
r=C.d.i(z,r)
z=this.Q
q=a.gal()
if(typeof z!=="number")return z.i()
return new V.G(y+x+w,v+u+t,s+r+C.d.i(z,q))},
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
v=this.c
u=a.c
if(typeof v!=="number")return v.i()
t=this.d
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.i()
r=this.f
if(typeof r!=="number")return r.i()
q=this.r
if(typeof q!=="number")return q.i()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.i()
n=this.z
if(typeof n!=="number")return n.i()
m=this.Q
if(typeof m!=="number")return m.i()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.Z(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
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
j:function(a){return this.M()},
dH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
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
M:function(){return this.dH("",3,0)},
C:function(a){return this.dH(a,3,0)},
p:{
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c2:function(){return V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ek:function(a,b,c){return V.ay(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
cn:function(a,b,c,d){return V.ay(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eh:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ay(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
ei:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ay(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
ej:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ay(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)}}},
V:{"^":"b;q:a>,t:b>",
L:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
i:function(a,b){return new V.V(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
Z:{"^":"b;q:a>,t:b>,c",
D:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
i:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
bH:{"^":"b;q:a>,t:b>,c,d",
i:function(a,b){return new V.bH(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bH))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
es:{"^":"b;q:a>,t:b>,c,d",
ga3:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.es))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"},
p:{
et:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.es(a,b,c,d)}}},
W:{"^":"b;a,b",
hy:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,24],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
i:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.i()
y=this.b
if(typeof y!=="number")return y.i()
return new V.W(z*b,y*b)},
w:function(a,b){var z,y
if($.m.$2(b,0))return new V.W(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.W(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
G:{"^":"b;a,b,c",
hy:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,24],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ck:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
ay:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.G(-this.a,-this.b,-this.c)},
i:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if($.m.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dS:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hi:{"^":"dT;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bL:function(a){var z=V.cG(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.F(a)},
scz:function(a,b){},
scl:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bL(z)}z=new D.F("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.J(z)}},
scn:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bL(z)}z=new D.F("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.J(z)}},
sZ:function(a,b){var z,y
b=this.bL(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.F("location",y,b,this,[P.q])
z.b=!0
this.J(z)}},
scm:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.F("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.J(z)}},
sT:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.F("velocity",x,a,this,[P.q])
z.b=!0
this.J(z)}},
scb:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.F("dampening",y,a,this,[P.q])
z.b=!0
this.J(z)}},
am:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sZ(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sT(y)}},
p:{
cQ:function(){var z=new U.hi()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dV:{"^":"a7;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
an:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dV))return!1
return J.P(this.a,b.a)},
j:function(a){return"Constant: "+this.a.C("          ")},
p:{
bY:function(a){var z=new U.dV()
z.a=a
return z}}},e5:{"^":"aH;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
J:[function(a){var z
H.e(a,"$isu")
z=this.e
if(!(z==null))z.F(a)},function(){return this.J(null)},"ag","$1","$0","gaK",0,2,1],
i6:[function(a,b){var z,y,x,w,v,u,t
z=U.a7
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gex",8,0,23],
iA:[function(a,b){var z,y,x,w,v,u,t
z=U.a7
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.h(x,w)
C.a.P(t.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gfj",8,0,23],
an:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.N()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.at(z,z.length,0,[H.x(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.an(0,b,c)
if(w!=null)x=x==null?w:w.i(0,x)}}this.f=x==null?V.c2():x
z=this.e
if(!(z==null))z.ab(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e5))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.P(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$ask:function(){return[U.a7]},
$asaH:function(){return[U.a7]},
$isa7:1,
p:{
cU:function(a){var z=new U.e5()
z.bK(U.a7)
z.be(z.gex(),z.gfj())
z.e=null
z.f=V.c2()
z.r=0
return z}}},a7:{"^":"dT;"},ev:{"^":"a7;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.F(a)},
see:function(a){var z,y
a=V.cG(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.F("yaw",y,a,this,[P.q])
z.b=!0
this.J(z)}},
se_:function(a,b){var z,y
b=V.cG(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.F("pitch",y,b,this,[P.q])
z.b=!0
this.J(z)}},
se4:function(a){var z,y
a=V.cG(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.F("roll",y,a,this,[P.q])
z.b=!0
this.J(z)}},
an:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.see(this.a+this.d*b.y)
this.se_(0,this.b+this.e*b.y)
this.se4(this.c+this.f*b.y)
this.x=V.ej(this.c).i(0,V.ei(this.b)).i(0,V.eh(this.a))
z=this.y
if(!(z==null))z.ab(0)}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ev))return!1
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
j:function(a){return"Rotater: ["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"], ["+V.I(this.d,3,0)+", "+V.I(this.e,3,0)+", "+V.I(this.f,3,0)+"]"}},jM:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.cy
if(z==null){z=D.Q()
this.cy=z}return z},
J:[function(a){var z
H.e(a,"$isu")
z=this.cy
if(!(z==null))z.F(a)},function(){return this.J(null)},"ag","$1","$0","gaK",0,2,1],
aY:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdg()
z.toString
y={func:1,ret:-1,args:[D.u]}
x=H.h(this.gbR(),y)
C.a.h(z.a,x)
x=this.a.c.gdT()
x.toString
z=H.h(this.gbS(),y)
C.a.h(x.a,z)
z=this.a.c.gbF()
z.toString
y=H.h(this.gbT(),y)
C.a.h(z.a,y)
return!0},
eU:[function(a){H.e(a,"$isu")
if(!J.P(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbR",4,0,2],
eV:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isu"),"$isbE")
if(!this.y)return
if(this.x){z=a.d.L(0,a.y)
z=new V.W(z.a,z.b)
z=z.E(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.L(0,a.y)
z=new V.W(y.a,y.b).i(0,2).w(0,z.ga3())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.i()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sT(z*10*x)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=new V.W(x.a,x.b).i(0,2).w(0,z.ga3())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
this.b.sT(0)
y=y.L(0,a.z)
this.Q=new V.W(y.a,y.b).i(0,2).w(0,z.ga3())}this.ag()},"$1","gbS",4,0,2],
eW:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.E(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.i()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sT(y*10*x)
this.ag()}},"$1","gbT",4,0,2],
an:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.N()
if(z<y){this.ch=y
x=b.y
this.b.am(0,x)
this.cx=V.ej(this.b.d)}return this.cx},
$isa7:1},jN:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.Q()
this.fx=z}return z},
J:[function(a){var z
H.e(a,"$isu")
z=this.fx
if(!(z==null))z.F(a)},function(){return this.J(null)},"ag","$1","$0","gaK",0,2,1],
aY:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdg()
z.toString
y={func:1,ret:-1,args:[D.u]}
x=H.h(this.gbR(),y)
C.a.h(z.a,x)
x=this.a.c.gdT()
x.toString
z=H.h(this.gbS(),y)
C.a.h(x.a,z)
z=this.a.c.gbF()
z.toString
x=H.h(this.gbT(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.Q()
x.f=z}x=H.h(this.geR(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.Q()
x.d=z}x=H.h(this.geS(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.Q()
x.b=z}x=H.h(this.gfK(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.Q()
x.d=z}x=H.h(this.gfJ(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.Q()
x.c=z}y=H.h(this.gfI(),y)
C.a.h(z.a,y)
return!0},
aq:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.W(z,y)},
eU:[function(a){a=H.j(H.e(a,"$isu"),"$isbE")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbR",4,0,2],
eV:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isu"),"$isbE")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.W(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.aq(new V.W(y.a,y.b).i(0,2).w(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aq(new V.W(x.a,x.b).i(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.L(0,a.z)
this.dx=this.aq(new V.W(y.a,y.b).i(0,2).w(0,z.ga3()))}this.ag()},"$1","gbS",4,0,2],
eW:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sT(-y*10*z)
this.ag()}},"$1","gbT",4,0,2],
ib:[function(a){if(H.j(H.e(a,"$isu"),"$isef").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geR",4,0,2],
ic:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isu"),"$isbE")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aq(new V.W(x.a,x.b).i(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.L(0,a.z)
this.dx=this.aq(new V.W(y.a,y.b).i(0,2).w(0,z.ga3()))
this.ag()},"$1","geS",4,0,2],
iI:[function(a){H.e(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfK",4,0,2],
iH:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isu"),"$iseH")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.W(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.aq(new V.W(y.a,y.b).i(0,2).w(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aq(new V.W(x.a,x.b).i(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.L(0,a.z)
this.dx=this.aq(new V.W(y.a,y.b).i(0,2).w(0,z.ga3()))}this.ag()},"$1","gfJ",4,0,2],
iG:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sT(-y*10*z)
this.ag()}},"$1","gfI",4,0,2],
an:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.N()
if(z<y){this.dy=y
x=b.y
this.c.am(0,x)
this.b.am(0,x)
this.fr=V.eh(this.b.d).i(0,V.ei(this.c.d))}return this.fr},
$isa7:1},jO:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gB:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
J:function(a){var z=this.r
if(!(z==null))z.F(a)},
aY:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.Q()
z.e=y
z=y}else z=y
y=H.h(this.geX(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.Q()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
ie:[function(a){var z,y,x,w
H.e(a,"$isu")
if(!J.P(this.b,this.a.b.c))return
H.j(a,"$isd3")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.i()
w=z+y*x
if(z!==w){this.d=w
z=new D.F("zoom",z,w,this,[P.q])
z.b=!0
this.J(z)}},"$1","geX",4,0,2],
an:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.cn(x,x,x,1)}return this.f},
$isa7:1}}],["","",,M,{"^":"",hB:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aH:[function(a){var z
H.e(a,"$isu")
z=this.x
if(!(z==null))z.F(a)},function(){return this.aH(null)},"i7","$1","$0","gap",0,2,1],
ik:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gap(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga1()==null){s=new D.b3()
s.a=H.f([],v)
s.c=0
t.sa1(s)}s=t.ga1()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.aH(z)},"$2","gf2",8,0,8],
il:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gap(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga1()==null){s=new D.b3()
s.a=H.f([],v)
s.c=0
t.sa1(s)}s=t.ga1()
s.toString
H.h(x,w)
C.a.P(s.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.aH(z)},"$2","gf3",8,0,8],
sb8:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.h(this.gap(),{func:1,ret:-1,args:[D.u]})
C.a.P(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gap(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.F("technique",x,this.c,this,[O.ct])
z.b=!0
this.aH(z)}},
gB:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
aS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.e2(this.c)
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
if(typeof x!=="number")return H.p(x)
u=C.e.ac(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.e.ac(v.b*w)
s=C.e.ac(v.c*x)
a.c=s
v=C.e.ac(v.d*w)
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
s.e1(V.ay(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.ep
if(y==null){y=new V.G(0,0,-1)
m=y.w(0,Math.sqrt(y.E(y)))
y=new V.G(0,1,0).ay(m)
l=y.w(0,Math.sqrt(y.E(y)))
k=m.ay(l)
j=new V.G(0,0,0)
y=V.ay(l.a,k.a,m.a,l.O(0).E(j),l.b,k.b,m.b,k.O(0).E(j),l.c,k.c,m.c,m.O(0).E(j),0,0,0,1)
$.ep=y
i=y}else i=y
y=z.a
if(y!=null){h=y.an(0,a,z)
if(h!=null)i=h.i(0,i)}a.db.e1(i)
z=this.c
if(z!=null)z.am(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.x(z,0)]);z.G();)z.d.am(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.x(z,0)]);z.G();)z.d.aS(a)
this.a.toString
a.cy.cp()
a.db.cp()
this.b.toString
a.e0()},
$isoh:1}}],["","",,A,{"^":"",dJ:{"^":"b;a,b,c"},h5:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
ho:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ig:{"^":"ew;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aO,0aA,0aP,0bp,0dh,0di,0bq,0br,0dj,0dk,0bs,0bt,0dl,0dm,0bu,0dn,0dq,0bv,0dr,0ds,0bw,0bx,0by,0dt,0du,0bz,0bA,0dv,0dw,0bB,0dz,0cc,0dA,0cd,0dB,0ce,0dC,0cf,0dD,0cg,0dE,0ci,a,b,0c,0d,0e,0f,0r",
ep:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.al("")
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
a2.fN(z)
a2.fU(z)
a2.fO(z)
a2.h1(z)
a2.h2(z)
a2.fW(z)
a2.h6(z)
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
z=new P.al("")
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
v.fR(z)
v.fM(z)
v.fP(z)
v.fS(z)
v.h_(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fY(z)
v.fZ(z)}v.fV(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
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
r=z.a+="   return litClr*("+C.a.W(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fQ(z)
v.fX(z)
v.h0(z)
v.h3(z)
v.h4(z)
v.h5(z)
v.fT(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.W(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cR(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cR(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fG(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.t(P.v("Failed to link shader: "+H.l(m)))}this.fE()
this.fF()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaL")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaL")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaL")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaL")
if(a2.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdd")
if(a2.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaL")
if(a2.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaL")
this.k3=H.f([],[A.aL])
y=a2.aO
if(y>0){this.k2=H.e(this.r.n(0,"bendMatCount"),"$isN")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.t(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaL"))}}y=a2.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isam")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isN")
break
case C.h:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isan")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isN")
break}}y=a2.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isam")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isN")
break
case C.h:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isan")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isN")
break}}y=a2.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.aO=H.j(this.r.n(0,"diffuseTxt"),"$isam")
this.aP=H.j(this.r.n(0,"nullDiffuseTxt"),"$isN")
break
case C.h:this.aA=H.j(this.r.n(0,"diffuseTxt"),"$isan")
this.aP=H.j(this.r.n(0,"nullDiffuseTxt"),"$isN")
break}}y=a2.d
if(y!==C.c){this.bp=H.j(this.r.n(0,"invDiffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dh=H.j(this.r.n(0,"invDiffuseTxt"),"$isam")
this.bq=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isN")
break
case C.h:this.di=H.j(this.r.n(0,"invDiffuseTxt"),"$isan")
this.bq=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isN")
break}}y=a2.e
if(y!==C.c){this.bt=H.j(this.r.n(0,"shininess"),"$isa_")
this.br=H.j(this.r.n(0,"specularClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dj=H.j(this.r.n(0,"specularTxt"),"$isam")
this.bs=H.j(this.r.n(0,"nullSpecularTxt"),"$isN")
break
case C.h:this.dk=H.j(this.r.n(0,"specularTxt"),"$isan")
this.bs=H.j(this.r.n(0,"nullSpecularTxt"),"$isN")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dl=H.j(this.r.n(0,"bumpTxt"),"$isam")
this.bu=H.j(this.r.n(0,"nullBumpTxt"),"$isN")
break
case C.h:this.dm=H.j(this.r.n(0,"bumpTxt"),"$isan")
this.bu=H.j(this.r.n(0,"nullBumpTxt"),"$isN")
break}if(a2.dy){this.dn=H.j(this.r.n(0,"envSampler"),"$isan")
this.dq=H.j(this.r.n(0,"nullEnvTxt"),"$isN")
y=a2.r
if(y!==C.c){this.bv=H.j(this.r.n(0,"reflectClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dr=H.j(this.r.n(0,"reflectTxt"),"$isam")
this.bw=H.j(this.r.n(0,"nullReflectTxt"),"$isN")
break
case C.h:this.ds=H.j(this.r.n(0,"reflectTxt"),"$isan")
this.bw=H.j(this.r.n(0,"nullReflectTxt"),"$isN")
break}}y=a2.x
if(y!==C.c){this.bx=H.j(this.r.n(0,"refraction"),"$isa_")
this.by=H.j(this.r.n(0,"refractClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dt=H.j(this.r.n(0,"refractTxt"),"$isam")
this.bz=H.j(this.r.n(0,"nullRefractTxt"),"$isN")
break
case C.h:this.du=H.j(this.r.n(0,"refractTxt"),"$isan")
this.bz=H.j(this.r.n(0,"nullRefractTxt"),"$isN")
break}}}y=a2.y
if(y!==C.c){this.bA=H.j(this.r.n(0,"alpha"),"$isa_")
switch(y){case C.c:break
case C.i:break
case C.f:this.dv=H.j(this.r.n(0,"alphaTxt"),"$isam")
this.bB=H.j(this.r.n(0,"nullAlphaTxt"),"$isN")
break
case C.h:this.dw=H.j(this.r.n(0,"alphaTxt"),"$isan")
this.bB=H.j(this.r.n(0,"nullAlphaTxt"),"$isN")
break}}this.cc=H.f([],[A.eT])
this.cd=H.f([],[A.eU])
this.ce=H.f([],[A.eV])
this.cf=H.f([],[A.eW])
this.cg=H.f([],[A.eX])
this.ci=H.f([],[A.eY])
if(a2.k2){y=a2.z
if(y>0){this.dz=H.e(this.r.n(0,"dirLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.cc;(x&&C.a).h(x,new A.eT(l,k,j))}}y=a2.Q
if(y>0){this.dA=H.e(this.r.n(0,"pntLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa_")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa_")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa_")
x=this.cd;(x&&C.a).h(x,new A.eU(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dB=H.e(this.r.n(0,"spotLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa_")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa_")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa_")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa_")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa_")
x=this.ce;(x&&C.a).h(x,new A.eV(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dC=H.e(this.r.n(0,"txtDirLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isL")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isN")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isam")
x=this.cf;(x&&C.a).h(x,new A.eW(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dD=H.e(this.r.n(0,"txtPntLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdd")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isN")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa_")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa_")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa_")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isan")
x=this.cg;(x&&C.a).h(x,new A.eX(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dE=H.e(this.r.n(0,"txtSpotLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isL")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isN")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isL")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa_")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa_")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isa_")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isa_")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isa_")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isam")
x=this.ci;(x&&C.a).h(x,new A.eY(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ah:function(a,b,c){b.a.uniform1i(b.d,1)},
a8:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
ih:function(a,b){var z,y
z=a.aA
y=new A.ig(b,z)
y.er(b,z)
y.ep(a,b)
return y}}},il:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aO,aA,aP",
fN:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aO+"];\n"
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
fU:function(a){var z
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
fO:function(a){var z
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
h1:function(a){var z,y
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
h2:function(a){var z,y
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
fW:function(a){var z
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
h6:function(a){var z
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
av:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aF(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fR:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.av(a,z,"emission")
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
fM:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.av(a,z,"ambient")
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
fP:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.av(a,z,"diffuse")
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
fS:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.av(a,z,"invDiffuse")
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
h_:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.av(a,z,"specular")
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
fV:function(a){var z,y
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
fY:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.av(a,z,"reflect")
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
fZ:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.av(a,z,"refract")
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
fQ:function(a){var z,y
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
fX:function(a){var z,y
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
h0:function(a){var z,y
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
h3:function(a){var z,y,x
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
h4:function(a){var z,y,x
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
h5:function(a){var z,y,x
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
fT:function(a){var z
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
j:function(a){return this.aA}},eT:{"^":"b;a,b,c"},eW:{"^":"b;a,b,c,d,e,f,r,x"},eU:{"^":"b;a,b,c,d,e,f,r"},eX:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eV:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eY:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ew:{"^":"cK;",
er:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cR:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fG(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fE:function(){var z,y,x,w,v,u
z=H.f([],[A.dJ])
y=this.a
x=H.C(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dJ(y,v.name,u))}this.f=new A.h5(z)},
fF:function(){var z,y,x,w,v,u
z=H.f([],[A.ab])
y=this.a
x=H.C(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hk(v.type,v.size,v.name,u))}this.r=new A.jx(z)},
aJ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.N(z,y,b,c)
else return A.dc(z,y,b,a,c)},
eK:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.am(z,y,b,c)
else return A.dc(z,y,b,a,c)},
eL:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.an(z,y,b,c)
else return A.dc(z,y,b,a,c)},
bj:function(a,b){return new P.f9(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hk:function(a,b,c,d){switch(a){case 5120:return this.aJ(b,c,d)
case 5121:return this.aJ(b,c,d)
case 5122:return this.aJ(b,c,d)
case 5123:return this.aJ(b,c,d)
case 5124:return this.aJ(b,c,d)
case 5125:return this.aJ(b,c,d)
case 5126:return new A.a_(this.a,this.e,c,d)
case 35664:return new A.js(this.a,this.e,c,d)
case 35665:return new A.L(this.a,this.e,c,d)
case 35666:return new A.jv(this.a,this.e,c,d)
case 35667:return new A.jt(this.a,this.e,c,d)
case 35668:return new A.ju(this.a,this.e,c,d)
case 35669:return new A.jw(this.a,this.e,c,d)
case 35674:return new A.jz(this.a,this.e,c,d)
case 35675:return new A.dd(this.a,this.e,c,d)
case 35676:return new A.aL(this.a,this.e,c,d)
case 35678:return this.eK(b,c,d)
case 35680:return this.eL(b,c,d)
case 35670:throw H.a(this.bj("BOOL",c))
case 35671:throw H.a(this.bj("BOOL_VEC2",c))
case 35672:throw H.a(this.bj("BOOL_VEC3",c))
case 35673:throw H.a(this.bj("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cd:{"^":"b;a,b",
j:function(a){return this.b}},ab:{"^":"b;"},jx:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.M()},
hs:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].j(0)+a
return x},
M:function(){return this.hs("\n")}},N:{"^":"ab;a,b,c,d",
j:function(a){return"Uniform1i: "+H.l(this.c)}},jt:{"^":"ab;a,b,c,d",
j:function(a){return"Uniform2i: "+H.l(this.c)}},ju:{"^":"ab;a,b,c,d",
j:function(a){return"Uniform3i: "+H.l(this.c)}},jw:{"^":"ab;a,b,c,d",
j:function(a){return"Uniform4i: "+H.l(this.c)}},jr:{"^":"ab;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dc:function(a,b,c,d,e){var z=new A.jr(a,b,c,e)
z.f=d
z.e=P.i6(d,0,!1,P.n)
return z}}},a_:{"^":"ab;a,b,c,d",
j:function(a){return"Uniform1f: "+H.l(this.c)}},js:{"^":"ab;a,b,c,d",
j:function(a){return"Uniform2f: "+H.l(this.c)}},L:{"^":"ab;a,b,c,d",
j:function(a){return"Uniform3f: "+H.l(this.c)}},jv:{"^":"ab;a,b,c,d",
j:function(a){return"Uniform4f: "+H.l(this.c)}},jz:{"^":"ab;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dd:{"^":"ab;a,b,c,d",
ao:function(a){var z=new Float32Array(H.bm(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.l(this.c)}},aL:{"^":"ab;a,b,c,d",
ao:function(a){var z=new Float32Array(H.bm(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.l(this.c)}},am:{"^":"ab;a,b,c,d",
j:function(a){return"UniformSampler2D: "+H.l(this.c)}},an:{"^":"ab;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dv:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
z=F.d9()
F.bS(z,b,c,d,a,1,0,0,1)
F.bS(z,b,c,d,a,0,1,0,3)
F.bS(z,b,c,d,a,0,0,1,2)
F.bS(z,b,c,d,a,-1,0,0,0)
F.bS(z,b,c,d,a,0,-1,0,0)
F.bS(z,b,c,d,a,0,0,-1,3)
z.ar()
return z},
cy:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bS:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.G(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.G(t+h,s+f,r+g)
z.b=q
p=new V.G(t-h,s-f,r-g)
z.c=p
o=new V.G(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cy(y)
k=F.cy(z.b)
j=F.dD(d,e,new F.lU(z,F.cy(z.c),F.cy(z.d),k,l,c),b)
if(j!=null)a.b4(j)},
fJ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
z=F.d9()
y=b?-1:1
x=-6.283185307179586/e
w=H.f([],[F.ae])
v=z.a
u=new V.G(0,0,y)
u=u.w(0,Math.sqrt(u.E(u)))
C.a.h(w,v.h9(new V.bH(a,-1,-1,-1),new V.b0(1,1,1,1),new V.Z(0,0,c),new V.G(0,0,y),new V.V(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.p(p)
o=new V.G(r,q,y).w(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c5(new V.bH(a,-1,-1,-1),null,new V.b0(n,l,m,1),new V.Z(r*p,q*p,c),new V.G(0,0,y),new V.V(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.h7(w)
return z},
fH:function(a,b,c,d,e,f){return F.md(!0,c,d,new F.mc(a,f),e)},
md:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dD(c,e,new F.mf(d),null)
if(z==null)return
z.ar()
z.c2()
if(b)z.b4(F.fJ(3,!1,1,new F.mg(d),e))
z.b4(F.fJ(1,!0,-1,new F.mh(d),e))
return z},
fV:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.mQ()
y=F.dv(a,null,new F.mR(z),c)
y.c2()
return y},
fX:function(a,b,c,d){return F.fI(c,a,d,b,new F.mU())},
mw:function(a,b,c,d,e,f){return F.fI(d,a,e,b,new F.mx(f,c))},
fI:function(a,b,c,d,e){var z=F.dD(a,b,new F.me(H.h(e,{func:1,ret:V.Z,args:[P.q]}),d,b,c),null)
if(z==null)return
z.ar()
z.c2()
return z},
dD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.d9()
y=H.f([],[F.ae])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c5(null,null,new V.b0(u,0,0,1),null,null,new V.V(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.ca(d))}for(x=1;x<=a;++x){s=x/a
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
C.a.h(y,t.ca(d))}}z.d.h8(a+1,b+1,y)
return z},
lU:{"^":"o:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.ck(z.b,b).ck(z.d.ck(z.c,b),c)
a.sZ(0,new V.Z(y.a,y.b,y.c))
a.se6(y.w(0,Math.sqrt(y.E(y))))
z=1-b
x=1-c
a.sdc(new V.bH(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mc:{"^":"o:14;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mf:{"^":"o:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.p(v)
y=-y*v
u=x*v
a.sZ(0,new V.Z(y,u,w))
u=new V.G(y,u,w)
a.se6(u.w(0,Math.sqrt(u.E(u))))
a.sdc(new V.bH(1-c,2+c,-1,-1))}},
mg:{"^":"o:15;a",
$1:function(a){return this.a.$2(a,1)}},
mh:{"^":"o:15;a",
$1:function(a){return this.a.$2(1-a,0)}},
mQ:{"^":"o:14;",
$2:function(a,b){return 0}},
mR:{"^":"o:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.p(z)
y=a.f
x=new V.G(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.E(x))).i(0,1+z)
a.sZ(0,new V.Z(z.a,z.b,z.c))}},
mU:{"^":"o:22;",
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)}},
mx:{"^":"o:22;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Z(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
me:{"^":"o:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dE(y.$1(z),x)
x=J.dE(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.E(x)))
u=new V.G(1,0,0)
y=v.ay(!v.u(0,u)?new V.G(0,0,1):u)
t=y.w(0,Math.sqrt(y.E(y)))
y=t.ay(v)
u=y.w(0,Math.sqrt(y.E(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.i(0,y*x)
x=t.i(0,r*x)
a.sZ(0,w.D(0,new V.Z(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ak:{"^":"b;0a,0b,0c,0d,0e",
az:function(){if(!this.gb_()){C.a.P(this.a.a.d.b,this)
this.a.a.Y()}this.bY()
this.bZ()
this.fq()},
fB:function(a){this.a=a
C.a.h(a.d.b,this)},
fC:function(a){this.b=a
C.a.h(a.d.c,this)},
fD:function(a){this.c=a
C.a.h(a.d.d,this)},
bY:function(){var z=this.a
if(z!=null){C.a.P(z.d.b,this)
this.a=null}},
bZ:function(){var z=this.b
if(z!=null){C.a.P(z.d.c,this)
this.b=null}},
fq:function(){var z=this.c
if(z!=null){C.a.P(z.d.d,this)
this.c=null}},
gb_:function(){return this.a==null||this.b==null||this.c==null},
eE:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dS())return
return v.w(0,Math.sqrt(v.E(v)))},
eG:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.E(z)))
z=w.L(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.ay(z.w(0,Math.sqrt(z.E(z))))
return z.w(0,Math.sqrt(z.E(z)))},
c6:function(){if(this.d!=null)return!0
var z=this.eE()
if(z==null){z=this.eG()
if(z==null)return!1}this.d=z
this.a.a.Y()
return!0},
eD:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dS())return
return v.w(0,Math.sqrt(v.E(v)))},
eF:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.L(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.L(0,u).i(0,l).D(0,u).L(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.E(z)))
z=k.ay(m)
z=z.w(0,Math.sqrt(z.E(z))).ay(k)
m=z.w(0,Math.sqrt(z.E(z)))}return m},
c4:function(){if(this.e!=null)return!0
var z=this.eD()
if(z==null){z=this.eF()
if(z==null)return!1}this.e=z
this.a.a.Y()
return!0},
b0:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.O(0)
y=this.e
if(y!=null)this.e=y.O(0)
this.a.a.Y()},
ghg:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.M()},
C:function(a){var z,y
if(this.gb_())return a+"disposed"
z=a+C.b.aa(J.a9(this.a.e),0)+", "+C.b.aa(J.a9(this.b.e),0)+", "+C.b.aa(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
M:function(){return this.C("")},
p:{
by:function(a,b,c){var z,y,x
z=new F.ak()
y=a.a
if(y==null)H.t(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.v("May not create a face with vertices attached to different shapes."))
z.fB(a)
z.fC(b)
z.fD(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Y()
return z}}},
hE:{"^":"b;"},
j5:{"^":"hE;",
b3:function(a,b,c){var z,y
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
d_:{"^":"b;0a,0b",
az:function(){if(!this.gb_()){C.a.P(this.a.a.c.b,this)
this.a.a.Y()}this.bY()
this.bZ()},
bY:function(){var z=this.a
if(z!=null){C.a.P(z.c.b,this)
this.a=null}},
bZ:function(){var z=this.b
if(z!=null){C.a.P(z.c.c,this)
this.b=null}},
gb_:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.M()},
C:function(a){if(this.gb_())return a+"disposed"
return a+C.b.aa(J.a9(this.a.e),0)+", "+C.b.aa(J.a9(this.b.e),0)},
M:function(){return this.C("")}},
hX:{"^":"b;"},
jq:{"^":"hX;",
b3:function(a,b,c){var z,y
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
d7:{"^":"b;0a",
az:function(){var z=this.a
if(z!=null){C.a.P(z.a.b.b,this)
this.a.a.Y()}this.fp()},
fp:function(){var z=this.a
if(z!=null){C.a.P(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.M()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.aa(J.a9(z.e),0)},
M:function(){return this.C("")}},
ex:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
b4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.hi())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d7()
if(r.a==null)H.t(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.F(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d_()
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
if(!(t==null))t.F(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.A()
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
if(!(z==null))z.ab(0)},
ar:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ar()||!1
if(!this.a.ar())y=!1
z=this.e
if(!(z==null))z.ab(0)
return y},
eP:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ae],"$asc")
H.w(e,"$isc",[P.n],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.b3(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hC:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ae],x=[P.n];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.f([],z)
t=H.f([],x)
if(this.eP(a,v,y,u,t))b.b4(u)}this.a.A()
this.c.cs()
this.d.cs()
this.b.hU()
this.c.ct(new F.jq())
this.d.ct(new F.j5())
z=this.e
if(!(z==null))z.ab(0)},
hb:function(a){this.hC(new F.k1(),new F.iw())},
c2:function(){return this.hb(null)},
b0:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.b0()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.d(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdU(new V.G(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.G(w,v,z).w(0,Math.sqrt(w*w+v*v+z*z))
if(!J.P(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.F(null)}}}}z=this.e
if(!(z==null))z.ab(0)},
he:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aP()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$bL().a)!==0)++w
if((x&$.$get$bM().a)!==0)++w
if((x&$.$get$bk().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gcE(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.dO])
for(r=0,q=0;q<w;++q){p=b.hc(q)
o=p.gcE(p)
C.a.m(s,q,new Z.dO(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hz(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bm(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dP(new Z.f6(34962,j),s,b)
i.b=H.f([],[Z.ch])
if(this.b.b.length!==0){x=P.n
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.f([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(4,h.length,f))}return i},
j:function(a){var z=H.f([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.W(z,"\n")},
a4:function(a){var z=this.e
if(!(z==null))z.F(a)},
Y:function(){return this.a4(null)},
p:{
d9:function(){var z,y
z=new F.ex()
y=new F.jX(z)
y.b=!1
y.c=H.f([],[F.ae])
z.a=y
y=new F.j4(z)
y.b=H.f([],[F.d7])
z.b=y
y=new F.j3(z)
y.b=H.f([],[F.d_])
z.c=y
y=new F.j2(z)
y.b=H.f([],[F.ak])
z.d=y
z.e=null
return z}}},
j2:{"^":"b;a,0b",
h7:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ae],"$asc")
z=H.f([],[F.ak])
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
h8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ae],"$asc")
z=H.f([],[F.ak])
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
ct:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b3(0,v,t)){v.az()
break}}}}},
cs:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghg(x)
if(y)x.az()}},
ar:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].c6())x=!1
return x},
c5:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].c4())x=!1
return x},
b0:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].b0()},
j:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
M:function(){return this.C("")}},
j3:{"^":"b;a,0b",
gl:function(a){return this.b.length},
ct:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b3(0,v,t)){v.az()
break}}}}},
cs:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.az()}},
j:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.W(z,"\n")},
M:function(){return this.C("")}},
j4:{"^":"b;a,0b",
gl:function(a){return this.b.length},
hU:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.az()}},
j:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
M:function(){return this.C("")}},
ae:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ca:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c5(this.cx,x,u,z,y,w,v,a,t)},
hi:function(){return this.ca(null)},
sZ:function(a,b){var z
if(!J.P(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Y()}},
sdU:function(a){var z
a=a.w(0,Math.sqrt(a.E(a)))
if(!J.P(this.r,a)){this.r=a
z=this.a
if(z!=null)z.Y()}},
se6:function(a){var z
if(!J.P(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Y()}},
sdc:function(a){var z
if(!J.P(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.Y()}},
hz:function(a){var z,y
z=J.O(a)
if(z.u(a,$.$get$aP())){z=this.f
y=[P.q]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aO())){z=this.r
y=[P.q]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aN())){z=this.x
y=[P.q]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aQ())){z=this.y
y=[P.q]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.u(a,$.$get$aR())){z=this.z
y=[P.q]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bL())){z=this.Q
y=[P.q]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bM())){z=this.Q
y=[P.q]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$bk()))return H.f([this.ch],[P.q])
else if(z.u(a,$.$get$aM())){z=this.cx
y=[P.q]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.q])},
c6:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.K(0,new F.k6(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.ab(0)}return!0},
c4:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.K(0,new F.k5(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.ab(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.M()},
C:function(a){var z,y,x
z=H.f([],[P.i])
C.a.h(z,C.b.aa(J.a9(this.e),0))
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
C.a.h(z,V.I(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.W(z,", ")
return a+"{"+x+"}"},
M:function(){return this.C("")},
p:{
c5:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ae()
y=new F.k4(z)
y.b=H.f([],[F.d7])
z.b=y
y=new F.k0(z)
x=[F.d_]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.jY(z)
x=[F.ak]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$f3()
z.e=0
y=$.$get$aP()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aO().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aQ().a)!==0?f:null
z.z=(x&$.$get$aR().a)!==0?g:null
z.Q=(x&$.$get$f4().a)!==0?c:null
z.ch=(x&$.$get$bk().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
k6:{"^":"o:10;a",
$1:function(a){var z,y
H.e(a,"$isak")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
k5:{"^":"o:10;a",
$1:function(a){var z,y
H.e(a,"$isak")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
jX:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
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
this.a.Y()
return!0},
ha:function(a,b,c,d,e,f,g,h,i){var z=F.c5(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
h9:function(a,b,c,d,e,f){return this.ha(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ar:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].c6()
return!0},
c5:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].c4()
return!0},
hf:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.F(null)}}}}return!0},
j:function(a){return this.M()},
C:function(a){var z,y,x,w
this.A()
z=H.f([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
M:function(){return this.C("")}},
jY:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
K:function(a,b){H.h(b,{func:1,ret:-1,args:[F.ak]})
C.a.K(this.b,b)
C.a.K(this.c,new F.jZ(this,b))
C.a.K(this.d,new F.k_(this,b))},
j:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
M:function(){return this.C("")}},
jZ:{"^":"o:10;a,b",
$1:function(a){H.e(a,"$isak")
if(!J.P(a.a,this.a))this.b.$1(a)}},
k_:{"^":"o:10;a,b",
$1:function(a){var z
H.e(a,"$isak")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
k0:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
j:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
M:function(){return this.C("")}},
k2:{"^":"b;"},
k1:{"^":"k2;",
b3:function(a,b,c){return J.P(b.f,c.f)}},
k3:{"^":"b;"},
iw:{"^":"k3;",
b4:function(a){var z,y,x,w
H.w(a,"$isc",[F.ae],"$asc")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.w(0,Math.sqrt(z.E(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x)a[x].sdU(z)
return}},
k4:{"^":"b;a,0b",
gl:function(a){return this.b.length},
j:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
M:function(){return this.C("")}}}],["","",,O,{"^":"",ii:{"^":"ct;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.Q()
this.dy=z}return z},
af:[function(a){var z
H.e(a,"$isu")
z=this.dy
if(!(z==null))z.F(a)},function(){return this.af(null)},"i8","$1","$0","gey",0,2,1],
fv:[function(a){H.e(a,"$isu")
this.a=null
this.af(a)},function(){return this.fv(null)},"iF","$1","$0","gfu",0,2,1],
ih:[function(a,b){var z=V.au
z=new D.ci(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.af(z)},"$2","gf_",8,0,21],
ii:[function(a,b){var z=V.au
z=new D.cj(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.af(z)},"$2","gf0",8,0,21],
cP:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a2(z.e.length+3,4)*4
x=C.e.a2(z.f.length+3,4)*4
w=C.e.a2(z.r.length+3,4)*4
v=C.e.a2(z.x.length+3,4)*4
u=C.e.a2(z.y.length+3,4)*4
t=C.e.a2(z.z.length+3,4)*4
s=C.e.a2(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.e.j(q.a)+C.e.j(p.a)+C.e.j(o.a)+C.e.j(n.a)+C.e.j(m.a)+C.e.j(l.a)+C.e.j(k.a)+C.e.j(j.a)+C.e.j(i.a)+"_"
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
a6=$.$get$aP()
if(c){z=$.$get$aO()
a6=new Z.bj(a6.a|z.a)}if(b){z=$.$get$aN()
a6=new Z.bj(a6.a|z.a)}if(a){z=$.$get$aQ()
a6=new Z.bj(a6.a|z.a)}if(a0){z=$.$get$aR()
a6=new Z.bj(a6.a|z.a)}if(a2){z=$.$get$aM()
a6=new Z.bj(a6.a|z.a)}return new A.il(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.w(a,"$isc",[T.eE],"$asc")},
am:function(a,b){var z,y,x,w
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
y.a=new V.Z(0,0,0)
x=y.b
if(x!=null){w=x.an(0,b,y)
if(w!=null)y.a=w.aU(y.a)}}},
hW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cP()
y=a.fr.k(0,z.aA)
if(y==null){y=A.ih(z,a.a)
x=y.b
if(x.length===0)H.t(P.v("May not cache a shader with no name."))
if(a.fr.c8(0,x))H.t(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aP
z=b.e
if(!(z instanceof Z.dP)){b.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)b.d.ar()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.c5()
t.a.c5()
t=t.e
if(!(t==null))t.ab(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hf()
s=s.e
if(!(s==null))s.ab(0)}q=b.d.he(new Z.k7(a.a),v)
q.aQ($.$get$aP()).e=this.a.y.c
if(z)q.aQ($.$get$aO()).e=this.a.Q.c
if(u)q.aQ($.$get$aN()).e=this.a.z.c
if(w.rx)q.aQ($.$get$aQ()).e=this.a.ch.c
if(t)q.aQ($.$get$aR()).e=this.a.cx.c
if(w.x1)q.aQ($.$get$aM()).e=this.a.cy.c
b.e=q}z=T.eE
p=H.f([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.ho()
if(w.fx){u=this.a
t=a.dx
t=t.gX(t)
u=u.db
u.toString
u.ao(t.ad(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gX(t)
s=a.dx
s=t.i(0,s.gX(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ao(t.ad(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghS()
s=a.dx
s=t.i(0,s.gX(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ao(t.ad(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ao(t.ad(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ao(t.ad(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ao(C.t.ad(t,!0))}if(w.aO>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.q],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.e(s,"$isau")
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
case C.f:this.U(p,this.f.d)
u=this.a
t=this.f.d
u.ah(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.f.e)
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
case C.f:this.U(p,this.r.d)
u=this.a
t=this.r.d
u.ah(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.r.e)
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
case C.f:this.U(p,this.x.d)
u=this.a
t=this.x.d
u.ah(u.aO,u.aP,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.x.e)
u=this.a
t=this.x.e
u.a8(u.aA,u.aP,t)
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
u=u.bp
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.U(p,this.y.d)
u=this.a
t=this.y.d
u.ah(u.dh,u.bq,t)
t=this.a
u=this.y.f
t=t.bp
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.y.e)
u=this.a
t=this.y.e
u.a8(u.di,u.bq,t)
t=this.a
u=this.y.f
t=t.bp
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.br
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bt
t.a.uniform1f(t.d,r)
break
case C.f:this.U(p,this.z.d)
u=this.a
t=this.z.d
u.ah(u.dj,u.bs,t)
t=this.a
u=this.z.f
t=t.br
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bt
u.a.uniform1f(u.d,r)
break
case C.h:this.U(p,this.z.e)
u=this.a
t=this.z.e
u.a8(u.dk,u.bs,t)
t=this.a
u=this.z.f
t=t.br
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bt
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dz
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cc
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.e9(i.gbo(i))
r=s.a
g=s.b
f=s.c
f=s.w(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gai(i)
g=h.c
r=f.gbE()
s=f.gbc()
f=f.gbl()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dA
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cd
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.a
r=h.b
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=l.aU(i.a)
r=h.c
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.c
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.d
r=h.e
r.a.uniform1f(r.d,s)
s=i.e
r=h.f
r.a.uniform1f(r.d,s)
s=i.f
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dB
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.ce
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gcq(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gef(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbo(i).iM()
f=h.c
g=s.gaj(s)
r=s.gak(s)
s=s.gal()
f.a.uniform3f(f.d,g,r,s)
s=l.aU(i.gcq(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gai(i)
r=h.e
g=s.gbE()
f=s.gbc()
s=s.gbl()
r.a.uniform3f(r.d,g,f,s)
s=i.giK()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giJ()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gd8()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gd9()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gda()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dC
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
r=this.a.cf
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gb9()
H.w(p,"$isc",s,"$asc")
if(!C.a.bn(p,r)){r.sb1(0,p.length)
C.a.h(p,r)}r=i.gbo(i)
g=h.d
f=r.gaj(r)
e=r.gak(r)
r=r.gal()
g.a.uniform3f(g.d,f,e,r)
r=i.gbF()
e=h.b
f=r.gaj(r)
g=r.gak(r)
r=r.gal()
e.a.uniform3f(e.d,f,g,r)
r=i.gb7(i)
g=h.c
f=r.gaj(r)
e=r.gak(r)
r=r.gal()
g.a.uniform3f(g.d,f,e,r)
r=l.e9(i.gbo(i))
e=r.a
f=r.b
g=r.c
g=r.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gai(i)
f=h.f
e=g.gbE()
r=g.gbc()
g=g.gbl()
f.a.uniform3f(f.d,e,r,g)
g=i.gb9()
r=g.gb2(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gb2(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gb1(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dD
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.y,t=u.length,s=[P.q],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
g=this.a.cg
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gb9()
H.w(p,"$isc",r,"$asc")
if(!C.a.bn(p,g)){g.sb1(0,p.length)
C.a.h(p,g)}d=l.i(0,i.gX(i))
g=i.gX(i).aU(new V.Z(0,0,0))
f=h.b
e=g.gq(g)
c=g.gt(g)
g=g.gef(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aU(new V.Z(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dR(0)
c=h.d
m=new Float32Array(H.bm(H.w(new V.cm(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ad(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gai(i)
g=h.e
e=c.gbE()
f=c.gbc()
c=c.gbl()
g.a.uniform3f(g.d,e,f,c)
c=i.gb9()
g=c.gb2(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gb2(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gb1(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gd8()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gd9()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gda()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dE
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.ci
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb9()
H.w(p,"$isc",z,"$asc")
if(!C.a.bn(p,s)){s.sb1(0,p.length)
C.a.h(p,s)}s=i.gcq(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gef(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbo(i)
f=h.c
g=s.gaj(s)
r=s.gak(s)
s=s.gal()
f.a.uniform3f(f.d,g,r,s)
s=i.gbF()
r=h.d
g=s.gaj(s)
f=s.gak(s)
s=s.gal()
r.a.uniform3f(r.d,g,f,s)
s=i.gb7(i)
f=h.e
g=s.gaj(s)
r=s.gak(s)
s=s.gal()
f.a.uniform3f(f.d,g,r,s)
s=l.aU(i.gcq(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb9()
r=s.gb2(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gb2(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gb1(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gai(i)
r=h.y
g=s.gbE()
f=s.gbc()
s=s.gbl()
r.a.uniform3f(r.d,g,f,s)
s=i.giT()
f=h.z
f.a.uniform1f(f.d,s)
s=i.giU()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gd8()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gd9()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gda()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.U(p,this.Q.d)
z=this.a
u=this.Q.d
z.ah(z.dl,z.bu,u)
break
case C.h:this.U(p,this.Q.e)
z=this.a
u=this.Q.e
z.a8(z.dm,z.bu,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gX(u).dR(0)
a.Q=u}z=z.fy
z.toString
z.ao(u.ad(0,!0))}if(w.dy){this.U(p,this.ch)
z=this.a
u=this.ch
z.a8(z.dn,z.dq,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bv
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.U(p,this.cx.d)
z=this.a
u=this.cx.d
z.ah(z.dr,z.bw,u)
u=this.a
z=this.cx.f
u=u.bv
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.U(p,this.cx.e)
z=this.a
u=this.cx.e
z.a8(z.ds,z.bw,u)
u=this.a
z=this.cx.f
u=u.bv
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.by
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bx
u.a.uniform1f(u.d,s)
break
case C.f:this.U(p,this.cy.d)
z=this.a
u=this.cy.d
z.ah(z.dt,z.bz,u)
u=this.a
z=this.cy.f
u=u.by
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bx
z.a.uniform1f(z.d,s)
break
case C.h:this.U(p,this.cy.e)
z=this.a
u=this.cy.e
z.a8(z.du,z.bz,u)
u=this.a
z=this.cy.f
u=u.by
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bx
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bA
z.a.uniform1f(z.d,t)
break
case C.f:this.U(p,this.db.d)
z=this.a
t=this.db.d
z.ah(z.dv,z.bB,t)
t=this.a
z=this.db.f
t=t.bA
t.a.uniform1f(t.d,z)
break
case C.h:this.U(p,this.db.e)
z=this.a
t=this.db.e
z.a8(z.dw,z.bB,t)
t=this.a
z=this.db.f
t=t.bA
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bk(a)
z=b.e
z.bk(a)
z.aS(a)
z.ea(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].ea(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.hn()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cP().aA},
p:{
eg:function(){var z,y,x,w
z=new O.ii()
y=O.cP(V.au)
z.e=y
y.be(z.gf_(),z.gf0())
y=new O.b6(z,"emission")
y.c=C.c
y.f=new V.a4(0,0,0)
z.f=y
y=new O.b6(z,"ambient")
y.c=C.c
y.f=new V.a4(0,0,0)
z.r=y
y=new O.b6(z,"diffuse")
y.c=C.c
y.f=new V.a4(0,0,0)
z.x=y
y=new O.b6(z,"invDiffuse")
y.c=C.c
y.f=new V.a4(0,0,0)
z.y=y
y=new O.io(z,"specular")
y.c=C.c
y.f=new V.a4(0,0,0)
y.ch=100
z.z=y
y=new O.ik(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.b6(z,"reflect")
y.c=C.c
y.f=new V.a4(0,0,0)
z.cx=y
y=new O.im(z,"refract")
y.c=C.c
y.f=new V.a4(0,0,0)
y.ch=1
z.cy=y
y=new O.ij(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.hW()
y.bK(D.a2)
y.e=H.f([],[D.ht])
y.f=H.f([],[D.co])
y.r=H.f([],[D.j6])
y.x=H.f([],[D.jg])
y.y=H.f([],[D.jh])
y.z=H.f([],[D.ji])
y.Q=null
y.ch=null
y.cD(y.geZ(),y.gfi(),y.gfk())
z.dx=y
x=y.Q
if(x==null){x=D.Q()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.u]}
w=H.h(z.gfu(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.Q()
w.ch=y}x=H.h(z.gey(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},ij:{"^":"d1;0f,a,b,0c,0d,0e"},d1:{"^":"b;",
bh:["en",function(){}]},ik:{"^":"d1;a,b,0c,0d,0e"},b6:{"^":"d1;0f,a,b,0c,0d,0e",
d0:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.F(this.b+".color",z,a,this,[V.a4])
y.b=!0
this.a.af(y)}},
bh:["bJ",function(){this.en()
this.d0(new V.a4(1,1,1))}],
sai:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bh()
z=this.a
z.a=null
z.af(null)}this.d0(b)}},im:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
fA:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.af(z)}},
bh:function(){this.bJ()
this.fA(1)}},io:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
c_:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.af(z)}},
bh:function(){this.bJ()
this.c_(100)}},ct:{"^":"b;"}}],["","",,T,{"^":"",eE:{"^":"cK;"},jf:{"^":"b;a,0b,0c,0d,0e"}}],["","",,X,{"^":"",dR:{"^":"b;",$isaJ:1},hJ:{"^":"eC;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z}},iz:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
aV:[function(a){var z
H.e(a,"$isu")
z=this.e
if(!(z==null))z.F(a)},function(){return this.aV(null)},"i9","$1","$0","gcG",0,2,1],
saE:function(a){var z,y,x
if(!J.P(this.a,a)){z=this.a
if(z!=null){z=z.gB()
z.toString
y=H.h(this.gcG(),{func:1,ret:-1,args:[D.u]})
C.a.P(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gcG(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.F("mover",x,this.a,this,[U.a7])
z.b=!0
this.aV(z)}},
$isaJ:1,
$isdR:1},eC:{"^":"b;"}}],["","",,B,{"^":"",
mL:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.r.fz(x,(x&&C.r).cJ(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.ac
W.a3(z,"scroll",H.h(new B.mM(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
mN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
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
u=W.dS(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.e(v.insertCell(-1),"$isbJ")
x=c.length>0
s=x?4:3
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.e(q.insertCell(-1),"$isbJ").style
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
t=H.e(q.insertCell(-1),"$isbJ")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.e(q.insertCell(-1),"$isbJ")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.e(q.insertCell(-1),"$isbJ").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.mL(a,y,!1,"../resources/SnowTop.png")},
mO:function(a){P.jm(C.G,new B.mP(a))},
iM:{"^":"b;a,0b",
d6:function(a,b,c,d){var z,y,x,w,v,u,t
H.h(c,{func:1,ret:-1})
if(this.b==null)return
z=this.a
if(P.df().gbD().k(0,z)==null)if(d){c.$0()
this.eb(b)
y=!0}else y=!1
else if(P.df().gbD().k(0,z)===b){c.$0()
y=!0}else y=!1
x=document
w=x.createElement("label")
v=w.style
v.whiteSpace="nowrap"
J.dH(this.b).h(0,w)
u=W.hM("radio")
u.checked=y
u.name=z
z=W.ac
W.a3(u,"change",H.h(new B.iN(this,u,b,c),{func:1,ret:-1,args:[z]}),!1,z)
w.appendChild(u)
t=x.createElement("span")
t.textContent=b
w.appendChild(t)
J.dH(this.b).h(0,x.createElement("br"))},
aX:function(a,b,c){return this.d6(a,b,c,!1)},
eb:function(a){var z,y,x,w,v
z=P.df()
y=P.i
x=P.i2(z.gbD(),y,y)
x.m(0,this.a,a)
w=z.e3(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.la([],[]).cw(""),"",v)}},
iN:{"^":"o:20;a,b,c,d",
$1:function(a){if(this.b.checked){this.a.eb(this.c)
this.d.$0()}}},
mM:{"^":"o:20;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.l(-0.05*C.d.ac(this.b.scrollTop))+"px"
z.top=y}},
mP:{"^":"o:49;a",
$1:function(a){H.e(a,"$isbg")
P.dC(C.d.e8(this.a.ght(),2)+" fps")}}}],["","",,U,{"^":"",
ds:function(a,b,c,d,e,f,g,h){var z,y,x,w,v,u,t,s
z=c>1?1:c
y=d>1?1:d
x=e>1?1:e
w=new V.a4(z,y,x)
v=U.cU(null)
v.h(0,U.bY(V.ek(0,0,2)))
x=new U.ev()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.see(0)
x.se_(0,0)
x.se4(0)
z=x.d
if(!$.m.$2(z,f)){u=x.d
x.d=f
z=new D.F("deltaYaw",u,f,x,[P.q])
z.b=!0
x.J(z)}z=x.e
if(!$.m.$2(z,g)){u=x.e
x.e=g
z=new D.F("deltaPitch",u,g,x,[P.q])
z.b=!0
x.J(z)}z=x.f
if(!$.m.$2(z,h)){u=x.f
x.f=h
z=new D.F("deltaRoll",u,h,x,[P.q])
z.b=!0
x.J(z)}v.h(0,x)
t=E.cS(null,!0,null,"",null,null)
z=U.cU(null)
z.h(0,U.bY(V.cn(0.1,0.1,0.1,1)))
z.h(0,v)
t.saE(z)
t.sa5(0,F.fV(8,null,8))
z=O.eg()
z.f.sai(0,w)
t.sb8(z)
s=new D.co()
s.c=new V.a4(1,1,1)
s.d=1
s.e=0
s.f=0
s.a=new V.Z(0,0,0)
u=s.b
s.b=v
z=v.gB()
z.toString
y=H.h(s.gew(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)
z=new D.F("mover",u,s.b,s,[U.a7])
z.b=!0
s.ae(z)
s.c=w
if(!w.u(0,w)){u=s.c
s.c=w
z=new D.F("color",u,w,s,[V.a4])
z.b=!0
s.ae(z)}z=s.d
if(!$.m.$2(z,1)){u=s.d
s.d=1
z=new D.F("attenuation0",u,1,s,[P.q])
z.b=!0
s.ae(z)}z=s.e
if(!$.m.$2(z,0.5)){u=s.e
s.e=0.5
z=new D.F("attenuation1",u,0.5,s,[P.q])
z.b=!0
s.ae(z)}z=s.f
if(!$.m.$2(z,0.15)){u=s.f
s.f=0.15
z=new D.F("attenuation2",u,0.15,s,[P.q])
z.b=!0
s.ae(z)}a.dx.h(0,s)
b.d.h(0,t)},
fR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
B.mN("Test 021",H.f(["shapes"],[P.i]),"Test of the Material Lighting shader with multiple moving point lights. Emissive spheres are added at the lights sources.")
z=document
y=z.getElementById("threeDart")
if(y==null)H.t(P.v("Failed to find an element with the identifier, threeDart."))
x=E.jk(y,!0,!0,!0,!1)
w=E.cS(null,!0,null,"",null,null)
w.saE(U.bY(V.cn(1,1,1,1)))
w.sa5(0,F.fX(30,1,15,0.5))
v=E.cS(null,!0,null,"",null,null)
v.saE(U.bY(V.cn(3,3,3,1)))
u=F.dv(1,null,null,1)
u.b0()
v.sa5(0,u)
t=U.cU(null)
u=x.r
s=new U.jN()
r=U.cQ()
r.scz(0,!0)
r.scl(6.283185307179586)
r.scn(0)
r.sZ(0,0)
r.scm(100)
r.sT(0)
r.scb(0.5)
s.b=r
r=r.gB()
r.toString
q={func:1,ret:-1,args:[D.u]}
p=H.h(s.gaK(),q)
C.a.h(r.a,p)
r=U.cQ()
r.scz(0,!0)
r.scl(6.283185307179586)
r.scn(0)
r.sZ(0,0)
r.scm(100)
r.sT(0)
r.scb(0.5)
s.c=r
C.a.h(r.gB().a,p)
s.d=null
s.e=!1
s.f=!1
s.r=!1
s.x=2.5
s.y=2.5
s.z=2
s.Q=4
s.cx=!1
s.ch=!1
s.cy=0
s.db=0
s.dx=null
s.dy=0
s.fr=null
s.fx=null
o=new X.az(!1,!1,!1)
n=s.d
s.d=o
r=[X.az]
p=new D.F("modifiers",n,o,s,r)
p.b=!0
s.J(p)
p=s.f
if(p!==!1){s.f=!1
p=new D.F("invertX",p,!1,s,[P.ah])
p.b=!0
s.J(p)}p=s.r
if(p!==!1){s.r=!1
p=new D.F("invertY",p,!1,s,[P.ah])
p.b=!0
s.J(p)}s.aY(u)
t.h(0,s)
u=x.r
s=new U.jM()
p=U.cQ()
p.scz(0,!0)
p.scl(6.283185307179586)
p.scn(0)
p.sZ(0,0)
p.scm(100)
p.sT(0)
p.scb(0.2)
s.b=p
p=p.gB()
p.toString
m=H.h(s.gaK(),q)
C.a.h(p.a,m)
s.c=null
s.d=!1
s.e=2.5
s.f=2
s.r=4
s.y=!1
s.x=!1
s.z=0
s.Q=null
s.ch=0
s.cx=null
s.cy=null
o=new X.az(!0,!1,!1)
n=s.c
s.c=o
p=new D.F("modifiers",n,o,s,r)
p.b=!0
s.J(p)
s.aY(u)
t.h(0,s)
u=x.r
s=new U.jO()
s.c=0.01
s.d=0
s.e=0
o=new X.az(!1,!1,!1)
s.b=o
r=new D.F("modifiers",null,o,s,r)
r.b=!0
s.J(r)
s.aY(u)
t.h(0,s)
t.h(0,U.bY(V.ek(0,0,5)))
l=O.eg()
u=l.r
u.sai(0,new V.a4(0.4,0.4,0.4))
u=l.x
u.sai(0,new V.a4(0.4,0.4,0.4))
u=l.z
u.sai(0,new V.a4(0.3,0.3,0.3))
u=l.z
if(u.c===C.c){u.c=C.i
u.bJ()
u.c_(100)
s=u.a
s.a=null
s.af(null)}u.c_(100)
k=new M.hB()
u=O.cP(E.aI)
k.d=u
u.be(k.gf2(),k.gf3())
k.e=null
k.f=null
k.r=null
k.x=null
j=new X.iz()
j.b=1.0471975511965976
j.c=0.1
j.d=2000
j.saE(null)
u=j.b
if(!$.m.$2(u,1.0471975511965976)){n=j.b
j.b=1.0471975511965976
u=new D.F("fov",n,1.0471975511965976,j,[P.q])
u.b=!0
j.aV(u)}u=j.c
if(!$.m.$2(u,0.1)){n=j.c
j.c=0.1
u=new D.F("near",n,0.1,j,[P.q])
u.b=!0
j.aV(u)}u=j.d
if(!$.m.$2(u,2000)){n=j.d
j.d=2000
u=new D.F("far",n,2000,j,[P.q])
u.b=!0
j.aV(u)}u=k.a
if(u!==j){if(u!=null){u=u.gB()
u.toString
s=H.h(k.gap(),q)
C.a.P(u.a,s)}n=k.a
k.a=j
u=j.gB()
u.toString
s=H.h(k.gap(),q)
C.a.h(u.a,s)
u=new D.F("camera",n,k.a,k,[X.dR])
u.b=!0
k.aH(u)}i=new X.hJ()
u=new V.b0(0,0,0,1)
i.a=u
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
u=V.et(0,0,1,1)
i.r=u
u=k.b
if(u!==i){if(u!=null){u=u.gB()
u.toString
s=H.h(k.gap(),q)
C.a.P(u.a,s)}n=k.b
k.b=i
u=i.gB()
u.toString
s=H.h(k.gap(),q)
C.a.h(u.a,s)
u=new D.F("target",n,k.b,k,[X.eC])
u.b=!0
k.aH(u)}k.sb8(null)
k.sb8(l)
k.d.h(0,v)
k.d.h(0,w)
k.a.saE(t)
u=x.d
if(u!==k){if(u!=null){u=u.gB()
u.toString
s=H.h(x.gcF(),q)
C.a.P(u.a,s)}x.d=k
u=k.gB()
u.toString
q=H.h(x.gcF(),q)
C.a.h(u.a,q)
x.eu()}U.ds(l,k,1,0,0,0.3,0,0)
U.ds(l,k,0,1,0,0,0.4,0)
U.ds(l,k,0,0,1,0.5,0.5,0)
u=new B.iM("shapes")
z=z.getElementById("shapes")
u.b=z
if(z==null)H.t("Failed to find "+u.j(0)+"._elemId for RadioGroup")
u.aX(0,"Cube",new U.mz(w))
u.aX(0,"Cylinder",new U.mA(w))
u.aX(0,"Cone",new U.mB(w))
u.aX(0,"Sphere",new U.mC(w))
u.d6(0,"Toroid",new U.mD(w),!0)
u.aX(0,"Knot",new U.mE(w))
B.mO(x)},
mz:{"^":"o:0;a",
$0:function(){this.a.sa5(0,F.dv(1,null,null,1))}},
mA:{"^":"o:0;a",
$0:function(){this.a.sa5(0,F.fH(1,!0,!0,1,40,1))}},
mB:{"^":"o:0;a",
$0:function(){this.a.sa5(0,F.fH(1,!0,!1,1,40,0))}},
mC:{"^":"o:0;a",
$0:function(){this.a.sa5(0,F.fV(6,null,6))}},
mD:{"^":"o:0;a",
$0:function(){this.a.sa5(0,F.fX(30,1,15,0.5))}},
mE:{"^":"o:0;a",
$0:function(){this.a.sa5(0,F.mw(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e9.prototype
return J.hR.prototype}if(typeof a=="string")return J.c0.prototype
if(a==null)return J.ea.prototype
if(typeof a=="boolean")return J.hQ.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c1.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.aE=function(a){if(typeof a=="string")return J.c0.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c1.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.c7=function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c1.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.mm=function(a){if(typeof a=="number")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c4.prototype
return a}
J.mn=function(a){if(typeof a=="number")return J.c_.prototype
if(typeof a=="string")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c4.prototype
return a}
J.dy=function(a){if(typeof a=="string")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c4.prototype
return a}
J.aU=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c1.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).u(a,b)}
J.fY=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mm(a).N(a,b)}
J.dE=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mn(a).i(a,b)}
J.dF=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fO(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aE(a).k(a,b)}
J.cH=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fO(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c7(a).m(a,b,c)}
J.fZ=function(a,b){return J.dy(a).H(a,b)}
J.h_=function(a,b,c){return J.aU(a).fs(a,b,c)}
J.h0=function(a,b,c,d){return J.aU(a).d7(a,b,c,d)}
J.h1=function(a,b){return J.dy(a).V(a,b)}
J.cI=function(a,b,c){return J.aE(a).hh(a,b,c)}
J.cJ=function(a,b){return J.c7(a).I(a,b)}
J.h2=function(a,b,c,d){return J.c7(a).aB(a,b,c,d)}
J.dG=function(a,b){return J.c7(a).K(a,b)}
J.dH=function(a){return J.aU(a).gc7(a)}
J.b_=function(a){return J.O(a).gS(a)}
J.bu=function(a){return J.c7(a).ga_(a)}
J.as=function(a){return J.aE(a).gl(a)}
J.h3=function(a,b){return J.aU(a).hX(a,b)}
J.h4=function(a,b){return J.aU(a).sa0(a,b)}
J.a9=function(a){return J.O(a).j(a)}
I.aq=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cO.prototype
C.r=W.hn.prototype
C.H=J.r.prototype
C.a=J.b5.prototype
C.e=J.e9.prototype
C.t=J.ea.prototype
C.d=J.c_.prototype
C.b=J.c0.prototype
C.O=J.c1.prototype
C.T=H.d6.prototype
C.U=W.iv.prototype
C.z=J.iA.prototype
C.q=J.c4.prototype
C.A=W.bN.prototype
C.B=W.ka.prototype
C.D=new P.h9(!1)
C.C=new P.h8(C.D)
C.E=new P.iy()
C.F=new P.jW()
C.j=new P.kX()
C.c=new A.cd(0,"ColorSourceType.None")
C.i=new A.cd(1,"ColorSourceType.Solid")
C.f=new A.cd(2,"ColorSourceType.Texture2D")
C.h=new A.cd(3,"ColorSourceType.TextureCube")
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
C.w=H.f(I.aq([127,2047,65535,1114111]),[P.n])
C.m=H.f(I.aq([0,0,32776,33792,1,10240,0,0]),[P.n])
C.n=H.f(I.aq([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.f(I.aq([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.Q=H.f(I.aq([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.p=H.f(I.aq([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.x=H.f(I.aq([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.R=H.f(I.aq([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.y=H.f(I.aq([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.P=H.f(I.aq([]),[P.i])
C.S=new H.hm(0,{},C.P,[P.i,P.i])
C.k=new P.jP(!1)
$.ax=0
$.bv=null
$.dM=null
$.dp=!1
$.fM=null
$.fD=null
$.fU=null
$.cB=null
$.cE=null
$.dz=null
$.bn=null
$.bT=null
$.bU=null
$.dq=!1
$.U=C.j
$.e0=null
$.e_=null
$.dZ=null
$.dY=null
$.m=V.ip()
$.ep=null
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
I.$lazy(y,x,w)}})(["dX","$get$dX",function(){return H.fL("_$dart_dartClosure")},"cX","$get$cX",function(){return H.fL("_$dart_js")},"eI","$get$eI",function(){return H.aB(H.cu({
toString:function(){return"$receiver$"}}))},"eJ","$get$eJ",function(){return H.aB(H.cu({$method$:null,
toString:function(){return"$receiver$"}}))},"eK","$get$eK",function(){return H.aB(H.cu(null))},"eL","$get$eL",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eP","$get$eP",function(){return H.aB(H.cu(void 0))},"eQ","$get$eQ",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eN","$get$eN",function(){return H.aB(H.eO(null))},"eM","$get$eM",function(){return H.aB(function(){try{null.$method$}catch(z){return z.message}}())},"eS","$get$eS",function(){return H.aB(H.eO(void 0))},"eR","$get$eR",function(){return H.aB(function(){try{(void 0).$method$}catch(z){return z.message}}())},"di","$get$di",function(){return P.kb()},"bV","$get$bV",function(){return[]},"f2","$get$f2",function(){return P.jT()},"f8","$get$f8",function(){return H.it(H.bm(H.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"ft","$get$ft",function(){return P.iS("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fz","$get$fz",function(){return P.lW()},"dW","$get$dW",function(){return{}},"f5","$get$f5",function(){return Z.ao(0)},"f3","$get$f3",function(){return Z.ao(511)},"aP","$get$aP",function(){return Z.ao(1)},"aO","$get$aO",function(){return Z.ao(2)},"aN","$get$aN",function(){return Z.ao(4)},"aQ","$get$aQ",function(){return Z.ao(8)},"aR","$get$aR",function(){return Z.ao(16)},"bL","$get$bL",function(){return Z.ao(32)},"bM","$get$bM",function(){return Z.ao(64)},"f4","$get$f4",function(){return Z.ao(96)},"bk","$get$bk",function(){return Z.ao(128)},"aM","$get$aM",function(){return Z.ao(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.H},{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[W.aA]},{func:1,ret:P.H,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.n,[P.k,E.aI]]},{func:1,ret:P.H,args:[F.ae,P.q,P.q]},{func:1,ret:P.H,args:[F.ak]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[D.u]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.q,args:[P.q]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.n,[P.k,D.a2]]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:P.H,args:[W.ac]},{func:1,ret:-1,args:[P.n,[P.k,V.au]]},{func:1,ret:V.Z,args:[P.q]},{func:1,ret:-1,args:[P.n,[P.k,U.a7]]},{func:1,ret:P.q},{func:1,ret:P.i,args:[P.n]},{func:1,ret:P.H,args:[,]},{func:1,ret:W.a1,args:[W.K]},{func:1,args:[P.i]},{func:1,ret:-1,args:[P.b],opt:[P.av]},{func:1,ret:-1,args:[P.i,P.n]},{func:1,ret:P.H,args:[P.X]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.ah,args:[P.q,P.q]},{func:1,ret:[P.aS,,],args:[,]},{func:1,ret:-1,args:[W.bN]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.ah,args:[[P.k,D.a2]]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,args:[,P.i]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.n,args:[[P.c,P.n],P.n]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:P.ah,args:[W.K]},{func:1,ret:P.R,args:[P.n]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.H,args:[P.i]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.H,args:[P.bg]},{func:1,ret:P.H,args:[P.i,,]},{func:1,ret:P.H,args:[,],opt:[,]}]
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
if(x==y)H.mT(d||a)
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
Isolate.aq=a.aq
Isolate.dw=a.dw
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
if(typeof dartMainRunner==="function")dartMainRunner(U.fR,[])
else U.fR([])})})()
//# sourceMappingURL=test.dart.js.map
