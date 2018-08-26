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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dt(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dv=function(){}
var dart=[["","",,H,{"^":"",nX:{"^":"b;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cA:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dy==null){H.mA()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c6("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cT()]
if(v!=null)return v
v=H.mF(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.y
if(y===Object.prototype)return C.y
if(typeof w=="function"){Object.defineProperty(w,$.$get$cT(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
r:{"^":"b;",
u:function(a,b){return a===b},
gS:function(a){return H.bI(a)},
i:["eg",function(a){return"Instance of '"+H.b9(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hT:{"^":"r;",
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isah:1},
ee:{"^":"r;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0},
$isG:1},
cU:{"^":"r;",
gS:function(a){return 0},
i:["eh",function(a){return String(a)}]},
iD:{"^":"cU;"},
c7:{"^":"cU;"},
c3:{"^":"cU;",
i:function(a){var z=a[$.$get$dY()]
if(z==null)return this.eh(a)
return"JavaScript function for "+H.l(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscQ:1},
b5:{"^":"r;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.t(P.A("add"))
a.push(b)},
L:function(a,b){var z
if(!!a.fixed$length)H.t(P.A("remove"))
for(z=0;z<a.length;++z)if(J.O(a[z],b)){a.splice(z,1)
return!0}return!1},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b1(a))}},
V:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hq:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b1(a))}return y},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bF:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a0(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.y(a,0)])
return H.f(a.slice(b,c),[H.y(a,0)])},
gay:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hR())},
aw:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.t(P.A("fill range"))
P.aJ(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.D(0,1))a[z]=d},
aW:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
i:function(a){return P.cR(a,"[","]")},
ga_:function(a){return new J.av(a,a.length,0,[H.y(a,0)])},
gS:function(a){return H.bI(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cd(b,"newLength",null))
if(b<0)throw H.a(P.a0(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aC(a,b))
if(b>=a.length||b<0)throw H.a(H.aC(a,b))
return a[b]},
m:function(a,b,c){H.C(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.t(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aC(a,b))
if(b>=a.length||b<0)throw H.a(H.aC(a,b))
a[b]=c},
$isj:1,
$isc:1,
p:{
hS:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a0(a,0,4294967295,"length",null))
return J.eb(new Array(a),b)},
eb:function(a,b){return J.bB(H.f(a,[b]))},
bB:function(a){H.bW(a)
a.fixed$length=Array
return a}}},
nW:{"^":"b5;$ti"},
av:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c1:{"^":"r;",
ghw:function(a){return a===0?1/a<0:a<0},
i5:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
cg:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
e3:function(a,b){var z
if(b>20)throw H.a(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghw(a))return"-"+z
return z},
b6:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.U(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.A("Unexpected toString result: "+z))
x=J.aD(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.ac(b))
return a*b},
ba:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ej:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d_(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.d_(a,b)},
d_:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aI:function(a,b){var z
if(a>0)z=this.cY(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fD:function(a,b){if(b<0)throw H.a(H.ac(b))
return this.cY(a,b)},
cY:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.ac(b))
return a<b},
$isq:1,
$isW:1},
ed:{"^":"c1;",$ism:1},
ec:{"^":"c1;"},
c2:{"^":"r;",
U:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aC(a,b))
if(b<0)throw H.a(H.aC(a,b))
if(b>=a.length)H.t(H.aC(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.a(H.aC(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.N(b)
if(typeof b!=="string")throw H.a(P.cd(b,null,null))
return a+b},
aR:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ac(b))
c=P.aJ(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ac(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a6:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ac(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a5:function(a,b){return this.a6(a,b,0)},
v:function(a,b,c){H.C(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ac(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.a(P.cr(b,null,null))
if(b>c)throw H.a(P.cr(b,null,null))
if(c>a.length)throw H.a(P.cr(c,null,null))
return a.substring(b,c)},
aA:function(a,b){return this.v(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.D)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hK:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
aa:function(a,b){return this.hK(a,b," ")},
dH:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dG:function(a,b){return this.dH(a,b,0)},
hf:function(a,b,c){if(c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
return H.n0(a,b,c)},
i:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseq:1,
$isi:1}}],["","",,H,{"^":"",
cB:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hR:function(){return new P.jb("No element")},
hl:{"^":"jI;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.b.U(this.a,b)},
$asct:function(){return[P.m]},
$asx:function(){return[P.m]},
$asj:function(){return[P.m]},
$asc:function(){return[P.m]}},
hB:{"^":"j;"},
i7:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.aD(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b1(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
ig:{"^":"j;a,b,$ti",
ga_:function(a){return new H.ih(J.bu(this.a),this.b,this.$ti)},
gl:function(a){return J.as(this.a)},
I:function(a,b){return this.b.$1(J.cH(this.a,b))},
$asj:function(a,b){return[b]}},
ih:{"^":"cS;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascS:function(a,b){return[b]}},
kc:{"^":"j;a,b,$ti",
ga_:function(a){return new H.kd(J.bu(this.a),this.b,this.$ti)}},
kd:{"^":"cS;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cj:{"^":"b;$ti"},
ct:{"^":"b;$ti",
m:function(a,b,c){H.C(b)
H.z(c,H.aE(this,"ct",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
aw:function(a,b,c,d){H.z(d,H.aE(this,"ct",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jI:{"^":"co+ct;"}}],["","",,H,{"^":"",
hp:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mv:function(a){return init.types[H.C(a)]},
fT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.ac(a))
return z},
bI:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iN:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.N(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.G(w,u)|32)>x)return}return parseInt(a,b)},
b9:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.K(a).$isc7){v=C.u(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.G(w,0)===36)w=C.b.aA(w,1)
r=H.dz(H.bW(H.aY(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iF:function(){if(!!self.location)return self.location.href
return},
es:function(a){var z,y,x,w,v
H.bW(a)
z=J.as(a)
if(typeof z!=="number")return z.ec()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iO:function(a){var z,y,x,w
z=H.f([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ac(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aI(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ac(w))}return H.es(z)},
et:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ac(x))
if(x<0)throw H.a(H.ac(x))
if(x>65535)return H.iO(a)}return H.es(a)},
iP:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ec()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cp:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aI(z,10))>>>0,56320|z&1023)}}throw H.a(P.a0(a,0,1114111,null,null))},
ae:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iM:function(a){return a.b?H.ae(a).getUTCFullYear()+0:H.ae(a).getFullYear()+0},
iK:function(a){return a.b?H.ae(a).getUTCMonth()+1:H.ae(a).getMonth()+1},
iG:function(a){return a.b?H.ae(a).getUTCDate()+0:H.ae(a).getDate()+0},
iH:function(a){return a.b?H.ae(a).getUTCHours()+0:H.ae(a).getHours()+0},
iJ:function(a){return a.b?H.ae(a).getUTCMinutes()+0:H.ae(a).getMinutes()+0},
iL:function(a){return a.b?H.ae(a).getUTCSeconds()+0:H.ae(a).getSeconds()+0},
iI:function(a){return a.b?H.ae(a).getUTCMilliseconds()+0:H.ae(a).getMilliseconds()+0},
p:function(a){throw H.a(H.ac(a))},
d:function(a,b){if(a==null)J.as(a)
throw H.a(H.aC(a,b))},
aC:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.C(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cr(b,"index",null)},
mp:function(a,b,c){if(a>c)return new P.cq(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cq(a,c,!0,b,"end","Invalid value")
return new P.aF(!0,b,"end",null)},
ac:function(a){return new P.aF(!0,a,null,null)},
me:function(a){if(typeof a!=="number")throw H.a(H.ac(a))
return a},
a:function(a){var z
if(a==null)a=new P.ep()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h_})
z.name=""}else z.toString=H.h_
return z},
h_:function(){return J.a9(this.dartException)},
t:function(a){throw H.a(a)},
D:function(a){throw H.a(P.b1(a))},
ar:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n3(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aI(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cV(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eo(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eL()
u=$.$get$eM()
t=$.$get$eN()
s=$.$get$eO()
r=$.$get$eS()
q=$.$get$eT()
p=$.$get$eQ()
$.$get$eP()
o=$.$get$eV()
n=$.$get$eU()
m=v.a8(y)
if(m!=null)return z.$1(H.cV(H.N(y),m))
else{m=u.a8(y)
if(m!=null){m.method="call"
return z.$1(H.cV(H.N(y),m))}else{m=t.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=r.a8(y)
if(m==null){m=q.a8(y)
if(m==null){m=p.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=o.a8(y)
if(m==null){m=n.a8(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eo(H.N(y),m))}}return z.$1(new H.jH(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eA()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eA()
return a},
bs:function(a){var z
if(a==null)return new H.fo(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fo(a)},
ms:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mC:function(a,b,c,d,e,f){H.e(a,"$iscQ")
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
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mC)
a.$identity=z
return z},
hk:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isc){z.$reflectionInfo=d
x=H.iU(z).r}else x=d
w=e?Object.create(new H.jc().constructor.prototype):Object.create(new H.cK(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aw
if(typeof u!=="number")return u.D()
$.aw=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dU(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mv,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dN:H.cL
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
hh:function(a,b,c,d){var z=H.cL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dU:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hj(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hh(y,!w,z,b)
if(y===0){w=$.aw
if(typeof w!=="number")return w.D()
$.aw=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bv
if(v==null){v=H.ce("self")
$.bv=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aw
if(typeof w!=="number")return w.D()
$.aw=w+1
t+=w
w="return function("+t+"){return this."
v=$.bv
if(v==null){v=H.ce("self")
$.bv=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hi:function(a,b,c,d){var z,y
z=H.cL
y=H.dN
switch(b?-1:a){case 0:throw H.a(H.j3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hj:function(a,b){var z,y,x,w,v,u,t,s
z=$.bv
if(z==null){z=H.ce("self")
$.bv=z}y=$.dM
if(y==null){y=H.ce("receiver")
$.dM=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hi(w,!u,x,b)
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
dt:function(a,b,c,d,e,f,g){var z,y
z=J.bB(H.bW(b))
H.C(c)
y=!!J.K(d).$isc?J.bB(d):d
return H.hk(a,z,c,y,!!e,f,g)},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.au(a,"String"))},
mq:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.au(a,"double"))},
mP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.au(a,"num"))},
fL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.au(a,"bool"))},
C:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.au(a,"int"))},
fY:function(a,b){throw H.a(H.au(a,H.N(b).substring(3)))},
mR:function(a,b){var z=J.aD(b)
throw H.a(H.hg(a,z.v(b,3,z.gl(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.fY(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.mR(a,b)},
bW:function(a){if(a==null)return a
if(!!J.K(a).$isc)return a
throw H.a(H.au(a,"List"))},
fV:function(a,b){if(a==null)return a
if(!!J.K(a).$isc)return a
if(J.K(a)[b])return a
H.fY(a,b)},
fP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.C(z)]
else return a.$S()}return},
c9:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fP(J.K(a))
if(z==null)return!1
y=H.fS(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dp)return a
$.dp=!0
try{if(H.c9(a,b))return a
z=H.cc(b)
y=H.au(a,z)
throw H.a(y)}finally{$.dp=!1}},
dw:function(a,b){if(a!=null&&!H.ds(a,b))H.t(H.au(a,H.cc(b)))
return a},
fG:function(a){var z
if(a instanceof H.n){z=H.fP(J.K(a))
if(z!=null)return H.cc(z)
return"Closure"}return H.b9(a)},
n1:function(a){throw H.a(new P.ht(H.N(a)))},
fQ:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
aY:function(a){if(a==null)return
return a.$ti},
p3:function(a,b,c){return H.bt(a["$as"+H.l(c)],H.aY(b))},
aX:function(a,b,c,d){var z
H.N(c)
H.C(d)
z=H.bt(a["$as"+H.l(c)],H.aY(b))
return z==null?null:z[d]},
aE:function(a,b,c){var z
H.N(b)
H.C(c)
z=H.bt(a["$as"+H.l(b)],H.aY(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.C(b)
z=H.aY(a)
return z==null?null:z[b]},
cc:function(a){var z=H.aZ(a,null)
return z},
aZ:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dz(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.C(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.m4(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
for(z=H.mr(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.N(z[l])
n=n+m+H.aZ(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dz:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.al("")
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
y=J.K(a)
if(y[b]==null)return!1
return H.fJ(H.bt(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.N(b)
H.bW(c)
H.N(d)
if(a==null)return a
z=H.bp(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dz(c,0,null)
throw H.a(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fJ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ap(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ap(a[y],b,c[y],d))return!1
return!0},
p1:function(a,b,c){return a.apply(b,H.bt(J.K(b)["$as"+H.l(c)],H.aY(b)))},
fU:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.fU(z)}return!1},
ds:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.fU(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.ds(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c9(a,b)}y=J.K(a).constructor
x=H.aY(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ap(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.ds(a,b))throw H.a(H.au(a,H.cc(b)))
return a},
ap:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ap(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fS(a,b,c,d)
if('func' in a)return c.builtin$cls==="cQ"
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
if(t!==y){s=H.cc(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fJ(H.bt(r,z),b,u,d)},
fS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.mO(m,b,l,d)},
mO:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ap(c[w],d,a[w],b))return!1}return!0},
p2:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
mF:function(a){var z,y,x,w,v,u
z=H.N($.fR.$1(a))
y=$.cz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.N($.fI.$2(a,z))
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
return u.i}if(v==="+")return H.fX(a,x)
if(v==="*")throw H.a(P.c6(z))
if(init.leafTags[z]===true){u=H.cD(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fX(a,x)},
fX:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dA(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cD:function(a){return J.dA(a,!1,null,!!a.$isF)},
mN:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cD(z)
else return J.dA(z,c,null,null)},
mA:function(){if(!0===$.dy)return
$.dy=!0
H.mB()},
mB:function(){var z,y,x,w,v,u,t,s
$.cz=Object.create(null)
$.cC=Object.create(null)
H.mw()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fZ.$1(v)
if(u!=null){t=H.mN(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mw:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bo(C.J,H.bo(C.O,H.bo(C.t,H.bo(C.t,H.bo(C.N,H.bo(C.K,H.bo(C.L(C.u),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fR=new H.mx(v)
$.fI=new H.my(u)
$.fZ=new H.mz(t)},
bo:function(a,b){return a(b)||b},
n0:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ho:{"^":"b;$ti",
i:function(a){return P.cX(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hp()},
$isJ:1},
hq:{"^":"ho;a,b,c,$ti",
gl:function(a){return this.a},
c6:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.c6(0,b))return
return this.cO(b)},
cO:function(a){return this.b[H.N(a)]},
J:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cO(v),z))}}},
iT:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iU:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bB(z)
y=z[0]
x=z[1]
return new H.iT(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jt:{"^":"b;a,b,c,d,e,f",
a8:function(a){var z,y,x
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
aA:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jt(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eR:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iA:{"^":"a4;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
eo:function(a,b){return new H.iA(a,b==null?null:b.method)}}},
hW:{"^":"a4;a,b,c",
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
return new H.hW(a,y,z?null:b.receiver)}}},
jH:{"^":"a4;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n3:{"^":"n:17;a",
$1:function(a){if(!!J.K(a).$isa4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fo:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isat:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.b9(this).trim()+"'"},
ge9:function(){return this},
$iscQ:1,
ge9:function(){return this}},
eG:{"^":"n;"},
jc:{"^":"eG;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cK:{"^":"eG;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cK))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bI(this.a)
else y=typeof z!=="object"?J.b_(z):H.bI(z)
return(y^H.bI(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.b9(z)+"'")},
p:{
cL:function(a){return a.a},
dN:function(a){return a.c},
ce:function(a){var z,y,x,w,v
z=new H.cK("self","target","receiver","name")
y=J.bB(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ju:{"^":"a4;a",
i:function(a){return this.a},
p:{
au:function(a,b){return new H.ju("TypeError: "+H.l(P.ci(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
hf:{"^":"a4;a",
i:function(a){return this.a},
p:{
hg:function(a,b){return new H.hf("CastError: "+H.l(P.ci(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
j2:{"^":"a4;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j3:function(a){return new H.j2(a)}}},
cn:{"^":"ic;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gax:function(a){return new H.i0(this,[H.y(this,0)])},
c6:function(a,b){var z=this.b
if(z==null)return!1
return this.eC(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bd(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bd(w,b)
x=y==null?null:y.b
return x}else return this.hu(b)},
hu:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cQ(z,this.dI(a))
x=this.dJ(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bO()
this.b=z}this.cE(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bO()
this.c=y}this.cE(y,b,c)}else this.hv(b,c)},
hv:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.bO()
this.d=z}y=this.dI(a)
x=this.cQ(z,y)
if(x==null)this.bV(z,y,[this.bP(a,b)])
else{w=this.dJ(x,a)
if(w>=0)x[w].b=b
else x.push(this.bP(a,b))}},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b1(this))
z=z.c}},
cE:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.bd(a,b)
if(z==null)this.bV(a,b,this.bP(b,c))
else z.b=c},
eN:function(){this.r=this.r+1&67108863},
bP:function(a,b){var z,y
z=new H.i_(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eN()
return z},
dI:function(a){return J.b_(a)&0x3ffffff},
dJ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
i:function(a){return P.cX(this)},
bd:function(a,b){return a[b]},
cQ:function(a,b){return a[b]},
bV:function(a,b,c){a[b]=c},
eF:function(a,b){delete a[b]},
eC:function(a,b){return this.bd(a,b)!=null},
bO:function(){var z=Object.create(null)
this.bV(z,"<non-identifier-key>",z)
this.eF(z,"<non-identifier-key>")
return z},
$iseh:1},
i_:{"^":"b;a,b,0c,0d"},
i0:{"^":"hB;a,$ti",
gl:function(a){return this.a.a},
ga_:function(a){var z,y
z=this.a
y=new H.i1(z,z.r,this.$ti)
y.c=z.e
return y}},
i1:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b1(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mx:{"^":"n:17;a",
$1:function(a){return this.a(a)}},
my:{"^":"n:39;a",
$2:function(a,b){return this.a(a,b)}},
mz:{"^":"n:45;a",
$1:function(a){return this.a(H.N(a))}},
hU:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseq:1,
$isiV:1,
p:{
hV:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.X("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mr:function(a){return J.eb(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mQ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bm:function(a){return a},
iw:function(a){return new Int8Array(a)},
aB:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aC(b,a))},
lZ:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mp(a,b,c))
return b},
en:{"^":"r;",$isen:1,"%":"ArrayBuffer"},
d1:{"^":"r;",$isd1:1,$isjv:1,"%":"DataView;ArrayBufferView;d0|fi|fj|ix|fk|fl|aW"},
d0:{"^":"d1;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dv},
ix:{"^":"fj;",
k:function(a,b){H.aB(b,a,a.length)
return a[b]},
m:function(a,b,c){H.C(b)
H.mq(c)
H.aB(b,a,a.length)
a[b]=c},
$ascj:function(){return[P.q]},
$asx:function(){return[P.q]},
$isj:1,
$asj:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
aW:{"^":"fl;",
m:function(a,b,c){H.C(b)
H.C(c)
H.aB(b,a,a.length)
a[b]=c},
$ascj:function(){return[P.m]},
$asx:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
o7:{"^":"aW;",
k:function(a,b){H.aB(b,a,a.length)
return a[b]},
"%":"Int16Array"},
o8:{"^":"aW;",
k:function(a,b){H.aB(b,a,a.length)
return a[b]},
"%":"Int32Array"},
o9:{"^":"aW;",
k:function(a,b){H.aB(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oa:{"^":"aW;",
k:function(a,b){H.aB(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ob:{"^":"aW;",
k:function(a,b){H.aB(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oc:{"^":"aW;",
gl:function(a){return a.length},
k:function(a,b){H.aB(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d2:{"^":"aW;",
gl:function(a){return a.length},
k:function(a,b){H.aB(b,a,a.length)
return a[b]},
bF:function(a,b,c){return new Uint8Array(a.subarray(b,H.lZ(b,c,a.length)))},
$isd2:1,
$isQ:1,
"%":";Uint8Array"},
fi:{"^":"d0+x;"},
fj:{"^":"fi+cj;"},
fk:{"^":"d0+x;"},
fl:{"^":"fk+cj;"}}],["","",,P,{"^":"",
kf:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mb()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bq(new P.kh(z),1)).observe(y,{childList:true})
return new P.kg(z,y,x)}else if(self.setImmediate!=null)return P.mc()
return P.md()},
oR:[function(a){self.scheduleImmediate(H.bq(new P.ki(H.h(a,{func:1,ret:-1})),0))},"$1","mb",4,0,12],
oS:[function(a){self.setImmediate(H.bq(new P.kj(H.h(a,{func:1,ret:-1})),0))},"$1","mc",4,0,12],
oT:[function(a){H.h(a,{func:1,ret:-1})
P.li(0,a)},"$1","md",4,0,12],
eJ:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bg]})
z=C.d.a3(a.a,1000)
return P.lj(z<0?0:z,b)},
m7:function(a,b){if(H.c9(a,{func:1,args:[P.b,P.at]}))return b.hT(a,null,P.b,P.at)
if(H.c9(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cd(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m6:function(){var z,y
for(;z=$.bn,z!=null;){$.bU=null
y=z.b
$.bn=y
if(y==null)$.bT=null
z.a.$0()}},
p0:[function(){$.dq=!0
try{P.m6()}finally{$.bU=null
$.dq=!1
if($.bn!=null)$.$get$di().$1(P.fK())}},"$0","fK",0,0,3],
fF:function(a){var z=new P.fb(H.h(a,{func:1,ret:-1}))
if($.bn==null){$.bT=z
$.bn=z
if(!$.dq)$.$get$di().$1(P.fK())}else{$.bT.b=z
$.bT=z}},
ma:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bn
if(z==null){P.fF(a)
$.bU=$.bT
return}y=new P.fb(a)
x=$.bU
if(x==null){y.b=z
$.bU=y
$.bn=y}else{y.b=x.b
x.b=y
$.bU=y
if(y.b==null)$.bT=y}},
mS:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.U
if(C.j===y){P.cy(null,null,C.j,a)
return}y.toString
P.cy(null,null,y,H.h(y.d5(a),z))},
jr:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bg]}
H.h(b,z)
y=$.U
if(y===C.j){y.toString
return P.eJ(a,b)}x=y.d6(b,P.bg)
$.U.toString
return P.eJ(a,H.h(x,z))},
cx:function(a,b,c,d,e){var z={}
z.a=d
P.ma(new P.m8(z,e))},
fB:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.U
if(y===c)return d.$0()
$.U=c
z=y
try{y=d.$0()
return y}finally{$.U=z}},
fC:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.U
if(y===c)return d.$1(e)
$.U=c
z=y
try{y=d.$1(e)
return y}finally{$.U=z}},
m9:function(a,b,c,d,e,f,g,h,i){var z,y
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
if(z)d=!(!z||!1)?c.d5(d):c.hb(d,-1)
P.fF(d)},
kh:{"^":"n:26;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kg:{"^":"n:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ki:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kj:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fr:{"^":"b;a,0b,c",
er:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bq(new P.ll(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
es:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bq(new P.lk(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbg:1,
p:{
li:function(a,b){var z=new P.fr(!0,0)
z.er(a,b)
return z},
lj:function(a,b){var z=new P.fr(!1,0)
z.es(a,b)
return z}}},
ll:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lk:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.ej(w,x)}z.c=y
this.d.$1(z)}},
bl:{"^":"b;0a,b,c,d,e,$ti",
hC:function(a){if(this.c!==6)return!0
return this.b.b.cr(H.h(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
ht:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.c9(z,{func:1,args:[P.b,P.at]}))return H.dw(w.i_(z,a.a,a.b,null,y,P.at),x)
else return H.dw(w.cr(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aR:{"^":"b;cZ:a<,b,0fq:c<,$ti",
e2:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.U
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.m7(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aR(0,$.U,[c])
w=b==null?1:3
this.cF(new P.bl(x,w,a,b,[z,c]))
return x},
i4:function(a,b){return this.e2(a,null,b)},
cF:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbl")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaR")
z=y.a
if(z<4){y.cF(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cy(null,null,z,H.h(new P.ky(this,a),{func:1,ret:-1}))}},
cU:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbl")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaR")
y=u.a
if(y<4){u.cU(a)
return}this.a=y
this.c=u.c}z.a=this.bh(a)
y=this.b
y.toString
P.cy(null,null,y,H.h(new P.kD(z,this),{func:1,ret:-1}))}},
bR:function(){var z=H.e(this.c,"$isbl")
this.c=null
return this.bh(z)},
bh:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cJ:function(a){var z,y,x,w
z=H.y(this,0)
H.dw(a,{futureOr:1,type:z})
y=this.$ti
x=H.bp(a,"$isbz",y,"$asbz")
if(x){z=H.bp(a,"$isaR",y,null)
if(z)P.fe(a,this)
else P.kz(a,this)}else{w=this.bR()
H.z(a,z)
this.a=4
this.c=a
P.bO(this,w)}},
bK:[function(a,b){var z
H.e(b,"$isat")
z=this.bR()
this.a=8
this.c=new P.ai(a,b)
P.bO(this,z)},function(a){return this.bK(a,null)},"ie","$2","$1","geA",4,2,29],
$isbz:1,
p:{
kz:function(a,b){var z,y,x
b.a=1
try{a.e2(new P.kA(b),new P.kB(b),null)}catch(x){z=H.ar(x)
y=H.bs(x)
P.mS(new P.kC(b,z,y))}},
fe:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaR")
if(z>=4){y=b.bR()
b.a=a.a
b.c=a.c
P.bO(b,y)}else{y=H.e(b.c,"$isbl")
b.a=2
b.c=a
a.cU(y)}},
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
P.cx(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
P.cx(null,null,y,u,t)
return}o=$.U
if(o==null?q!=null:o!==q)$.U=q
else o=null
y=b.c
if(y===8)new P.kG(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kF(x,b,r).$0()}else if((y&2)!==0)new P.kE(z,x,b).$0()
if(o!=null)$.U=o
y=x.b
if(!!J.K(y).$isbz){if(y.a>=4){n=H.e(t.c,"$isbl")
t.c=null
b=t.bh(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fe(y,t)
return}}m=b.b
n=H.e(m.c,"$isbl")
m.c=null
b=m.bh(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.e(u,"$isai")
m.a=8
m.c=u}z.a=m
y=m}}}},
ky:{"^":"n:0;a,b",
$0:function(){P.bO(this.a,this.b)}},
kD:{"^":"n:0;a,b",
$0:function(){P.bO(this.b,this.a.a)}},
kA:{"^":"n:26;a",
$1:function(a){var z=this.a
z.a=0
z.cJ(a)}},
kB:{"^":"n:51;a",
$2:function(a,b){this.a.bK(a,H.e(b,"$isat"))},
$1:function(a){return this.$2(a,null)}},
kC:{"^":"n:0;a,b,c",
$0:function(){this.a.bK(this.b,this.c)}},
kG:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e_(H.h(w.d,{func:1}),null)}catch(v){y=H.ar(v)
x=H.bs(v)
if(this.d){w=H.e(this.a.a.c,"$isai").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isai")
else u.b=new P.ai(y,x)
u.a=!0
return}if(!!J.K(z).$isbz){if(z instanceof P.aR&&z.gcZ()>=4){if(z.gcZ()===8){w=this.b
w.b=H.e(z.gfq(),"$isai")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.i4(new P.kH(t),null)
w.a=!1}}},
kH:{"^":"n:34;a",
$1:function(a){return this.a}},
kF:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cr(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ar(t)
y=H.bs(t)
x=this.a
x.b=new P.ai(z,y)
x.a=!0}}},
kE:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isai")
w=this.c
if(w.hC(z)&&w.e!=null){v=this.b
v.b=w.ht(z)
v.a=!1}}catch(u){y=H.ar(u)
x=H.bs(u)
w=H.e(this.a.a.c,"$isai")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ai(y,x)
s.a=!0}}},
fb:{"^":"b;a,0b"},
d8:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aR(0,$.U,[P.m])
z.a=0
this.hz(new P.jf(z,this),!0,new P.jg(z,y),y.geA())
return y}},
jf:{"^":"n;a,b",
$1:function(a){H.z(a,H.aE(this.b,"d8",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.aE(this.b,"d8",0)]}}},
jg:{"^":"n:0;a,b",
$0:function(){this.b.cJ(this.a.a)}},
eC:{"^":"b;$ti"},
je:{"^":"b;"},
bg:{"^":"b;"},
ai:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa4:1},
lN:{"^":"b;",$isoQ:1},
m8:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ep()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
l0:{"^":"lN;",
i0:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.U){a.$0()
return}P.fB(null,null,this,a,-1)}catch(x){z=H.ar(x)
y=H.bs(x)
P.cx(null,null,this,z,H.e(y,"$isat"))}},
i1:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.U){a.$1(b)
return}P.fC(null,null,this,a,b,-1,c)}catch(x){z=H.ar(x)
y=H.bs(x)
P.cx(null,null,this,z,H.e(y,"$isat"))}},
hb:function(a,b){return new P.l2(this,H.h(a,{func:1,ret:b}),b)},
d5:function(a){return new P.l1(this,H.h(a,{func:1,ret:-1}))},
d6:function(a,b){return new P.l3(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
e_:function(a,b){H.h(a,{func:1,ret:b})
if($.U===C.j)return a.$0()
return P.fB(null,null,this,a,b)},
cr:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.U===C.j)return a.$1(b)
return P.fC(null,null,this,a,b,c,d)},
i_:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.U===C.j)return a.$2(b,c)
return P.m9(null,null,this,a,b,c,d,e,f)},
hT:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
l2:{"^":"n;a,b,c",
$0:function(){return this.a.e_(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l1:{"^":"n:3;a,b",
$0:function(){return this.a.i0(this.b)}},
l3:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.i1(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i2:function(a,b,c,d,e){return new H.cn(0,0,[d,e])},
i3:function(a,b,c){H.bW(a)
return H.w(H.ms(a,new H.cn(0,0,[b,c])),"$iseh",[b,c],"$aseh")},
ei:function(a,b){return new H.cn(0,0,[a,b])},
i6:function(a,b,c,d){return new P.kN(0,0,[d])},
hQ:function(a,b,c){var z,y
if(P.dr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bV()
C.a.h(y,a)
try{P.m5(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eD(b,H.fV(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cR:function(a,b,c){var z,y,x
if(P.dr(a))return b+"..."+c
z=new P.al(b)
y=$.$get$bV()
C.a.h(y,a)
try{x=z
x.a=P.eD(x.gaF(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaF()+c
y=z.gaF()
return y.charCodeAt(0)==0?y:y},
dr:function(a){var z,y
for(z=0;y=$.$get$bV(),z<y.length;++z)if(a===y[z])return!0
return!1},
m5:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga_(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.H();t=s,s=r){r=z.gP(z);++x
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
i4:function(a,b,c){var z=P.i2(null,null,null,b,c)
a.J(0,new P.i5(z,b,c))
return z},
cX:function(a){var z,y,x
z={}
if(P.dr(a))return"{...}"
y=new P.al("")
try{C.a.h($.$get$bV(),a)
x=y
x.a=x.gaF()+"{"
z.a=!0
J.dG(a,new P.id(z,y))
z=y
z.a=z.gaF()+"}"}finally{z=$.$get$bV()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaF()
return z.charCodeAt(0)==0?z:z},
kN:{"^":"kI;a,0b,0c,0d,0e,0f,r,$ti",
ga_:function(a){return P.fh(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dk()
this.b=z}return this.cH(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dk()
this.c=y}return this.cH(y,b)}else return this.eu(0,b)},
eu:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dk()
this.d=z}y=this.cK(b)
x=z[y]
if(x==null)z[y]=[this.bJ(b)]
else{if(this.cP(x,b)>=0)return!1
x.push(this.bJ(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cV(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cV(this.c,b)
else return this.fi(0,b)},
fi:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eJ(z,b)
x=this.cP(y,b)
if(x<0)return!1
this.d0(y.splice(x,1)[0])
return!0},
cH:function(a,b){H.z(b,H.y(this,0))
if(H.e(a[b],"$isdj")!=null)return!1
a[b]=this.bJ(b)
return!0},
cV:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdj")
if(z==null)return!1
this.d0(z)
delete a[b]
return!0},
cI:function(){this.r=this.r+1&67108863},
bJ:function(a){var z,y
z=new P.dj(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cI()
return z},
d0:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cI()},
cK:function(a){return J.b_(a)&0x3ffffff},
eJ:function(a,b){return a[this.cK(b)]},
cP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
p:{
dk:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dj:{"^":"b;a,0b,0c"},
kO:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b1(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fh:function(a,b,c){var z=new P.kO(a,b,[c])
z.c=a.e
return z}}},
kI:{"^":"j4;"},
i5:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
co:{"^":"kP;",$isj:1,$isc:1},
x:{"^":"b;$ti",
ga_:function(a){return new H.i7(a,this.gl(a),0,[H.aX(this,a,"x",0)])},
I:function(a,b){return this.k(a,b)},
i7:function(a,b){var z,y,x
z=H.f([],[H.aX(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
i6:function(a){return this.i7(a,!0)},
aw:function(a,b,c,d){var z
H.z(d,H.aX(this,a,"x",0))
P.aJ(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cR(a,"[","]")}},
ic:{"^":"ag;"},
id:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ag:{"^":"b;$ti",
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aX(this,a,"ag",0),H.aX(this,a,"ag",1)]})
for(z=J.bu(this.gax(a));z.H();){y=z.gP(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.as(this.gax(a))},
i:function(a){return P.cX(a)},
$isJ:1},
lq:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
ie:{"^":"b;$ti",
k:function(a,b){return J.dF(this.a,b)},
m:function(a,b,c){J.cF(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
J:function(a,b){J.dG(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.as(this.a)},
i:function(a){return J.a9(this.a)},
$isJ:1},
f1:{"^":"lr;a,$ti"},
j5:{"^":"b;$ti",
i:function(a){return P.cR(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dI("index"))
if(b<0)H.t(P.a0(b,0,null,"index",null))
for(z=P.fh(this,this.r,H.y(this,0)),y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isj:1},
j4:{"^":"j5;"},
kP:{"^":"b+x;"},
lr:{"^":"ie+lq;$ti"}}],["","",,P,{"^":"",hc:{"^":"bY;a",
hE:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aJ(c,d,b.length,null,null,null)
z=$.$get$fc()
if(typeof d!=="number")return H.p(d)
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
if(m>=0){n=C.b.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.al("")
w.a+=C.b.v(b,x,y)
w.a+=H.cp(r)
x=s
continue}}throw H.a(P.X("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dL(b,u,d,v,t,k)
else{j=C.d.ba(k-1,4)+1
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aR(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dL(b,u,d,v,t,i)
else{j=C.d.ba(i,4)
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aR(b,d,d,j===2?"==":"=")}return b},
$asbY:function(){return[[P.c,P.m],P.i]},
p:{
dL:function(a,b,c,d,e,f){if(C.d.ba(f,4)!==0)throw H.a(P.X("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.X("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.X("Invalid base64 padding, more than two '=' characters",a,b))}}},hd:{"^":"bw;a",
$asbw:function(){return[[P.c,P.m],P.i]}},bY:{"^":"b;$ti"},bw:{"^":"je;$ti"},hD:{"^":"bY;",
$asbY:function(){return[P.i,[P.c,P.m]]}},jT:{"^":"hD;a",
gho:function(){return C.E}},k_:{"^":"bw;",
aX:function(a,b,c){var z,y,x,w
z=a.length
P.aJ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lM(0,0,x)
if(w.eH(a,b,z)!==z)w.d1(J.h5(a,z-1),0)
return C.U.bF(x,0,w.b)},
c7:function(a){return this.aX(a,0,null)},
$asbw:function(){return[P.i,[P.c,P.m]]}},lM:{"^":"b;a,b,c",
d1:function(a,b){var z,y,x,w,v
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
eH:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.U(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.G(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d1(w,C.b.G(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},jU:{"^":"bw;a",
aX:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.jV(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.aJ(b,c,y,null,null,null)
x=new P.al("")
w=new P.lJ(!1,x,!0,0,0,0)
w.aX(a,b,y)
w.hp(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
c7:function(a){return this.aX(a,0,null)},
$asbw:function(){return[[P.c,P.m],P.i]},
p:{
jV:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.jW(!1,b,c,d)
return},
jW:function(a,b,c,d){var z,y,x
z=$.$get$f6()
if(z==null)return
y=0===c
if(y&&!0)return P.dg(z,b)
x=b.length
d=P.aJ(c,d,x,null,null,null)
if(y&&d===x)return P.dg(z,b)
return P.dg(z,b.subarray(c,d))},
dg:function(a,b){if(P.jY(b))return
return P.jZ(a,b)},
jZ:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ar(y)}return},
jY:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
jX:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ar(y)}return}}},lJ:{"^":"b;a,b,c,d,e,f",
hp:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.X("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lL(c)
v=new P.lK(this,b,c,a)
$label0$0:for(u=J.aD(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bC()
if((r&192)!==128){q=P.X("Bad UTF-8 encoding 0x"+C.d.b6(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.v,q)
if(z<=C.v[q]){q=P.X("Overlong encoding of 0x"+C.d.b6(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.X("Character outside valid Unicode range: 0x"+C.d.b6(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cp(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cw()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.X("Negative UTF-8 code unit: -0x"+C.d.b6(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.X("Bad UTF-8 encoding 0x"+C.d.b6(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lL:{"^":"n:41;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aD(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bC()
if((w&127)!==w)return x-b}return z-b}},lK:{"^":"n:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.eE(this.d,a,b)}}}],["","",,P,{"^":"",
cb:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.iN(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.X(a,null,null))},
hF:function(a){var z=J.K(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.b9(a)+"'"},
i8:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hS(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
i9:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.ga_(a);x.H();)C.a.h(y,H.z(x.gP(x),c))
if(b)return y
return H.w(J.bB(y),"$isc",z,"$asc")},
eE:function(a,b,c){var z,y
z=P.m
H.w(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb5",[z],"$asb5")
y=a.length
c=P.aJ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.M()
z=c<y}else z=!0
return H.et(z?C.a.bF(a,b,c):a)}if(!!J.K(a).$isd2)return H.iP(a,b,P.aJ(b,c,a.length,null,null,null))
return P.jh(a,b,c)},
jh:function(a,b,c){var z,y,x,w
H.w(a,"$isj",[P.m],"$asj")
if(b<0)throw H.a(P.a0(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a0(c,b,J.as(a),null,null))
y=J.bu(a)
for(x=0;x<b;++x)if(!y.H())throw H.a(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gP(y))
else for(x=b;x<c;++x){if(!y.H())throw H.a(P.a0(c,b,x,null,null))
w.push(y.gP(y))}return H.et(w)},
iW:function(a,b,c){return new H.hU(a,H.hV(a,!1,!0,!1))},
df:function(){var z=H.iF()
if(z!=null)return P.jN(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
ci:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hF(a)},
v:function(a){return new P.fd(a)},
ia:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.f([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dC:function(a){H.mQ(a)},
jN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.G(a,b+4)^58)*3|C.b.G(a,b)^100|C.b.G(a,b+1)^97|C.b.G(a,b+2)^116|C.b.G(a,b+3)^97)>>>0
if(y===0)return P.f2(b>0||c<c?C.b.v(a,b,c):a,5,null).ge5()
else if(y===32)return P.f2(C.b.v(a,z,c),0,null).ge5()}x=new Array(8)
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
if(P.fD(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cv()
if(v>=b)if(P.fD(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.p(r)
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aR(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a6(a,"http",b)){if(x&&t+3===s&&C.b.a6(a,"80",t+1))if(b===0&&!0){a=C.b.aR(a,t,s,"")
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
else if(v===z&&C.b.a6(a,"https",b)){if(x&&t+4===s&&C.b.a6(a,"443",t+1))if(b===0&&!0){a=C.b.aR(a,t,s,"")
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
q-=b}return new P.l5(a,v,u,t,s,r,q,o)}return P.ls(a,b,c,v,u,t,s,r,q,o)},
f4:function(a,b){var z=P.i
return C.a.hq(H.f(a.split("&"),[z]),P.ei(z,z),new P.jQ(b),[P.J,P.i,P.i])},
jL:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jM(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.U(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cb(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.cw()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cb(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.cw()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
f3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jO(a)
y=new P.jP(z,a)
if(a.length<2)z.$1("address is too short")
x=H.f([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.U(a,w)
if(s===58){if(w===b){++w
if(C.b.U(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gay(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jL(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aI(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
m_:function(){var z,y,x,w,v
z=P.ia(22,new P.m1(),!0,P.Q)
y=new P.m0(z)
x=new P.m2()
w=new P.m3()
v=H.e(y.$2(0,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isQ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isQ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isQ"),"]",5)
v=H.e(y.$2(9,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isQ"),"az",21)
v=H.e(y.$2(21,245),"$isQ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fD:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fE()
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
gS:function(a){var z=this.a
return(z^C.d.aI(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hu(H.iM(this))
y=P.c_(H.iK(this))
x=P.c_(H.iG(this))
w=P.c_(H.iH(this))
v=P.c_(H.iJ(this))
u=P.c_(H.iL(this))
t=P.hv(H.iI(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
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
c_:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"W;"},
"+double":0,
bx:{"^":"b;a",
j:function(a,b){return new P.bx(C.d.ac(this.a*b))},
M:function(a,b){return C.d.M(this.a,H.e(b,"$isbx").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bx))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hA()
y=this.a
if(y<0)return"-"+new P.bx(0-y).i(0)
x=z.$1(C.d.a3(y,6e7)%60)
w=z.$1(C.d.a3(y,1e6)%60)
v=new P.hz().$1(y%1e6)
return""+C.d.a3(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e4:function(a,b,c,d,e,f){return new P.bx(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hz:{"^":"n:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hA:{"^":"n:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a4:{"^":"b;"},
ep:{"^":"a4;",
i:function(a){return"Throw of null."}},
aF:{"^":"a4;a,b,c,d",
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
u=P.ci(this.b)
return w+v+": "+H.l(u)},
p:{
bX:function(a){return new P.aF(!1,null,null,a)},
cd:function(a,b,c){return new P.aF(!0,a,b,c)},
dI:function(a){return new P.aF(!1,null,a,"Must not be null")}}},
cq:{"^":"aF;e,f,a,b,c,d",
gbM:function(){return"RangeError"},
gbL:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cr:function(a,b,c){return new P.cq(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
aJ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.a(P.a0(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.a(P.a0(b,a,c,"end",f))
return b}return c}}},
hO:{"^":"aF;e,l:f>,a,b,c,d",
gbM:function(){return"RangeError"},
gbL:function(){if(J.h1(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.C(e!=null?e:J.as(b))
return new P.hO(b,z,!0,a,c,"Index out of range")}}},
jJ:{"^":"a4;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jJ(a)}}},
jG:{"^":"a4;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c6:function(a){return new P.jG(a)}}},
jb:{"^":"a4;a",
i:function(a){return"Bad state: "+this.a}},
hn:{"^":"a4;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.ci(z))+"."},
p:{
b1:function(a){return new P.hn(a)}}},
iB:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa4:1},
eA:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa4:1},
ht:{"^":"a4;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fd:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hL:{"^":"b;a,b,c",
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
for(s=x;s<w.length;++s){r=C.b.U(w,s)
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
return y+n+l+m+"\n"+C.b.j(" ",x-o+n.length)+"^\n"},
p:{
X:function(a,b,c){return new P.hL(a,b,c)}}},
m:{"^":"W;"},
"+int":0,
j:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga_(this)
for(y=0;z.H();)++y
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dI("index"))
if(b<0)H.t(P.a0(b,0,null,"index",null))
for(z=this.ga_(this),y=0;z.H();){x=z.gP(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hQ(this,"(",")")}},
cS:{"^":"b;$ti"},
c:{"^":"b;$ti",$isj:1},
"+List":0,
J:{"^":"b;$ti"},
G:{"^":"b;",
gS:function(a){return P.b.prototype.gS.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
W:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gS:function(a){return H.bI(this)},
i:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.i(this)}},
at:{"^":"b;"},
i:{"^":"b;",$iseq:1},
"+String":0,
al:{"^":"b;aF:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoA:1,
p:{
eD:function(a,b,c){var z=J.bu(b)
if(!z.H())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.H())}else{a+=H.l(z.gP(z))
for(;z.H();)a=a+c+H.l(z.gP(z))}return a}}},
jQ:{"^":"n:48;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isJ",[z,z],"$asJ")
H.N(b)
y=J.aD(b).dG(b,"=")
if(y===-1){if(b!=="")J.cF(a,P.dm(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aA(b,y+1)
z=this.a
J.cF(a,P.dm(x,0,x.length,z,!0),P.dm(w,0,w.length,z,!0))}return a}},
jM:{"^":"n:38;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv4 address, "+a,this.a,b))}},
jO:{"^":"n:28;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jP:{"^":"n:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cb(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cv:{"^":"b;bE:a<,b,c,d,dT:e>,f,r,0x,0y,0z,0Q,0ch",
ge6:function(){return this.b},
gci:function(a){var z=this.c
if(z==null)return""
if(C.b.a5(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbz:function(a){var z=this.d
if(z==null)return P.ft(this.a)
return z},
gcn:function(a){var z=this.f
return z==null?"":z},
gdB:function(){var z=this.r
return z==null?"":z},
cq:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dl(g,0,0,h)
return new P.cv(i,j,c,f,d,g,this.r)},
dY:function(a,b){return this.cq(a,null,null,null,null,null,null,b,null,null)},
gbA:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f1(P.f4(z==null?"":z,C.l),[y,y])
this.Q=y
z=y}return z},
gdC:function(){return this.c!=null},
gdF:function(){return this.f!=null},
gdD:function(){return this.r!=null},
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
z=J.K(b)
if(!!z.$isde){y=this.a
x=b.gbE()
if(y==null?x==null:y===x)if(this.c!=null===b.gdC()){y=this.b
x=b.ge6()
if(y==null?x==null:y===x){y=this.gci(this)
x=z.gci(b)
if(y==null?x==null:y===x){y=this.gbz(this)
x=z.gbz(b)
if(y==null?x==null:y===x)if(this.e===z.gdT(b)){y=this.f
x=y==null
if(!x===b.gdF()){if(x)y=""
if(y===z.gcn(b)){z=this.r
y=z==null
if(!y===b.gdD()){if(y)z=""
z=z===b.gdB()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gS:function(a){var z=this.z
if(z==null){z=C.b.gS(this.i(0))
this.z=z}return z},
$isde:1,
p:{
dn:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.l){z=$.$get$fy().b
if(typeof b!=="string")H.t(H.ac(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.aE(c,"bY",0))
y=c.gho().c7(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cp(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ls:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lD(a,b,d)
else{if(d===b)P.bQ(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lE(a,z,e-1):""
x=P.lx(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.lA(P.cb(C.b.v(a,w,g),new P.lt(a,f),null),j):null}else{y=""
x=null
v=null}u=P.ly(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.dl(a,h+1,i,null):null
return new P.cv(j,y,x,v,u,t,i<c?P.lw(a,i+1,c):null)},
ft:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bQ:function(a,b,c){throw H.a(P.X(c,a,b))},
lA:function(a,b){if(a!=null&&a===P.ft(b))return
return a},
lx:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.U(a,b)===91){if(typeof c!=="number")return c.R()
z=c-1
if(C.b.U(a,z)!==93)P.bQ(a,b,"Missing end `]` to match `[` in host")
P.f3(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.U(a,y)===58){P.f3(a,b,c)
return"["+a+"]"}return P.lG(a,b,c)},
lG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.U(a,z)
if(v===37){u=P.fA(a,z,!0)
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
if(t>=8)return H.d(C.w,t)
t=(C.w[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.al("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bQ(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.U(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.al("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fu(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lD:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fw(C.b.G(a,b)))P.bQ(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.G(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bQ(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lu(y?a.toLowerCase():a)},
lu:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lE:function(a,b,c){return P.bR(a,b,c,C.R)},
ly:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bR(a,b,c,C.x):C.I.iS(d,new P.lz(),P.i).V(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a5(w,"/"))w="/"+w
return P.lF(w,e,f)},
lF:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a5(a,"/"))return P.lH(a,!z||c)
return P.lI(a)},
dl:function(a,b,c,d){var z,y
z={}
H.w(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.bX("Both query and queryParameters specified"))
return P.bR(a,b,c,C.n)}if(d==null)return
y=new P.al("")
z.a=""
d.J(0,new P.lB(new P.lC(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lw:function(a,b,c){return P.bR(a,b,c,C.n)},
fA:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.U(a,b+1)
x=C.b.U(a,z)
w=H.cB(y)
v=H.cB(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aI(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cp(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fu:function(a){var z,y,x,w,v,u
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
for(v=0;--w,w>=0;x=128){u=C.d.fD(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.G("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.G("0123456789ABCDEF",u&15))
v+=3}}return P.eE(y,0,null)},
bR:function(a,b,c,d){var z=P.fz(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.v(a,b,c):z},
fz:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.p(c)
if(!(y<c))break
c$0:{v=C.b.U(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fA(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bQ(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.U(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fu(v)}}if(w==null)w=new P.al("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fx:function(a){if(C.b.a5(a,"."))return!0
return C.b.dG(a,"/.")!==-1},
lI:function(a){var z,y,x,w,v,u,t
if(!P.fx(a))return a
z=H.f([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.O(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.V(z,"/")},
lH:function(a,b){var z,y,x,w,v,u
if(!P.fx(a))return!b?P.fv(a):a
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
C.a.m(z,0,P.fv(z[0]))}return C.a.V(z,"/")},
fv:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fw(J.h2(a,0)))for(y=1;y<z;++y){x=C.b.G(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aA(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lv:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.G(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bX("Invalid URL encoding"))}}return z},
dm:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dx(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.G(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.l!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.hl(y.v(a,b,c))}else{u=H.f([],[P.m])
for(x=b;x<c;++x){w=y.G(a,x)
if(w>127)throw H.a(P.bX("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bX("Truncated URI"))
C.a.h(u,P.lv(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.jU(!1).c7(u)},
fw:function(a){var z=a|32
return 97<=z&&z<=122}}},
lt:{"^":"n:47;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.X("Invalid port",this.a,z+1))}},
lz:{"^":"n:46;",
$1:function(a){return P.dn(C.S,a,C.l,!1)}},
lC:{"^":"n:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.dn(C.p,a,C.l,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.dn(C.p,b,C.l,!0))}}},
lB:{"^":"n:50;a",
$2:function(a,b){var z,y
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(z=J.bu(H.fV(b,"$isj")),y=this.a;z.H();)y.$2(a,H.N(z.gP(z)))}},
jK:{"^":"b;a,b,c",
ge5:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.dH(y,"?",z)
w=y.length
if(x>=0){v=P.bR(y,x+1,w,C.n)
w=x}else v=null
z=new P.ko(this,"data",null,null,null,P.bR(y,z,w,C.x),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f2:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
if((z.length&1)===1)a=C.B.hE(0,a,s,y)
else{r=P.fz(a,s,y,C.n,!0)
if(r!=null)a=C.b.aR(a,s,y,r)}return new P.jK(a,z,c)}}},
m1:{"^":"n:44;",
$1:function(a){return new Uint8Array(96)}},
m0:{"^":"n:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.h6(z,0,96,b)
return z}},
m2:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.G(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
m3:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.G(b,0),y=C.b.G(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
l5:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdC:function(){return this.c>0},
gdE:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
gdF:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
gdD:function(){return this.r<this.a.length},
gcR:function(){return this.b===4&&C.b.a5(this.a,"http")},
gcS:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbE:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcR()){this.x="http"
z="http"}else if(this.gcS()){this.x="https"
z="https"}else if(z===4&&C.b.a5(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a5(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
ge6:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gci:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbz:function(a){var z
if(this.gdE()){z=this.d
if(typeof z!=="number")return z.D()
return P.cb(C.b.v(this.a,z+1,this.e),null,null)}if(this.gcR())return 80
if(this.gcS())return 443
return 0},
gdT:function(a){return C.b.v(this.a,this.e,this.f)},
gcn:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.v(this.a,z+1,y):""},
gdB:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aA(y,z+1):""},
gbA:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.T
z=P.i
return new P.f1(P.f4(this.gcn(this),C.l),[z,z])},
cq:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
i=this.gbE()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gdE()?this.gbz(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dl(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aA(y,x+1)
return new P.cv(i,j,c,f,d,g,b)},
dY:function(a,b){return this.cq(a,null,null,null,null,null,null,b,null,null)},
gS:function(a){var z=this.y
if(z==null){z=C.b.gS(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isde)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isde:1},
ko:{"^":"cv;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cN:function(a,b){var z=document.createElement("canvas")
return z},
hC:function(a){H.e(a,"$isa6")
return"wheel"},
hP:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isea")
try{J.h8(z,a)}catch(x){H.ar(x)}return z},
cu:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fg:function(a,b,c,d){var z,y
z=W.cu(W.cu(W.cu(W.cu(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fH:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.U
if(z===C.j)return a
return z.d6(a,b)},
a7:{"^":"a2;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n4:{"^":"d6;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
n5:{"^":"r;0l:length=","%":"AccessibleNodeList"},
n6:{"^":"a7;0a0:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
n7:{"^":"a7;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cJ:{"^":"r;",$iscJ:1,"%":";Blob"},
nd:{"^":"a7;0a0:type}","%":"HTMLButtonElement"},
cM:{"^":"a7;",
bD:function(a,b,c){if(c!=null)return a.getContext(b,P.mf(c,null))
return a.getContext(b)},
ea:function(a,b){return this.bD(a,b,null)},
$iscM:1,
"%":"HTMLCanvasElement"},
dS:{"^":"r;",$isdS:1,"%":"CanvasRenderingContext2D"},
nf:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nh:{"^":"cg;0l:length=","%":"CSSPerspective"},
ni:{"^":"cP;0q:x=,0t:y=","%":"CSSPositionValue"},
nj:{"^":"cg;0q:x=,0t:y=","%":"CSSRotation"},
b2:{"^":"r;",$isb2:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nk:{"^":"cg;0q:x=,0t:y=","%":"CSSScale"},
hr:{"^":"kn;0l:length=",
eb:function(a,b){var z=a.getPropertyValue(this.cG(a,b))
return z==null?"":z},
cG:function(a,b){var z,y
z=$.$get$dX()
y=z[b]
if(typeof y==="string")return y
y=this.fE(a,b)
z[b]=y
return y},
fE:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hw()+b
if(z in a)return z
return b},
fs:function(a,b,c,d){a.setProperty(b,c,d)},
gc1:function(a){return a.bottom},
gal:function(a){return a.height},
gaP:function(a){return a.left},
gb4:function(a){return a.right},
gb7:function(a){return a.top},
gao:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hs:{"^":"b;",
gaP:function(a){return this.eb(a,"left")}},
cP:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cg:{"^":"r;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nl:{"^":"cP;0l:length=","%":"CSSTransformValue"},
nm:{"^":"cg;0q:x=,0t:y=","%":"CSSTranslation"},
nn:{"^":"cP;0l:length=","%":"CSSUnparsedValue"},
no:{"^":"r;0l:length=","%":"DataTransferItemList"},
np:{"^":"r;0q:x=,0t:y=","%":"DeviceAcceleration"},
nq:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
nr:{"^":"hx;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hx:{"^":"r;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
ns:{"^":"kq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.w(c,"$isa8",[P.W],"$asa8")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a8,P.W]]},
$asx:function(){return[[P.a8,P.W]]},
$isj:1,
$asj:function(){return[[P.a8,P.W]]},
$isc:1,
$asc:function(){return[[P.a8,P.W]]},
$asB:function(){return[[P.a8,P.W]]},
"%":"ClientRectList|DOMRectList"},
hy:{"^":"r;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gao(a))+" x "+H.l(this.gal(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bp(b,"$isa8",[P.W],"$asa8")
if(!z)return!1
z=J.aT(b)
return a.left===z.gaP(b)&&a.top===z.gb7(b)&&this.gao(a)===z.gao(b)&&this.gal(a)===z.gal(b)},
gS:function(a){return W.fg(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF,this.gal(a)&0x1FFFFFFF)},
gc1:function(a){return a.bottom},
gal:function(a){return a.height},
gaP:function(a){return a.left},
gb4:function(a){return a.right},
gb7:function(a){return a.top},
gao:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa8:1,
$asa8:function(){return[P.W]},
"%":";DOMRectReadOnly"},
nt:{"^":"ks;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.N(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"DOMStringList"},
nu:{"^":"r;0l:length=","%":"DOMTokenList"},
km:{"^":"co;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.e(z[b],"$isa2")},
m:function(a,b,c){var z
H.C(b)
H.e(c,"$isa2")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var z=this.i6(this)
return new J.av(z,z.length,0,[H.y(z,0)])},
aw:function(a,b,c,d){throw H.a(P.c6(null))},
$asx:function(){return[W.a2]},
$asj:function(){return[W.a2]},
$asc:function(){return[W.a2]}},
a2:{"^":"L;",
gc5:function(a){return new W.km(a,a.children)},
gbk:function(a){return P.iS(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa2:1,
"%":";Element"},
nv:{"^":"a7;0a0:type}","%":"HTMLEmbedElement"},
aa:{"^":"r;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"r;",
d3:["ef",function(a,b,c,d){H.h(c,{func:1,args:[W.aa]})
if(c!=null)this.ev(a,b,c,!1)}],
ev:function(a,b,c,d){return a.addEventListener(b,H.bq(H.h(c,{func:1,args:[W.aa]}),1),!1)},
$isa6:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fm|fn|fp|fq"},
aU:{"^":"cJ;",$isaU:1,"%":"File"},
e6:{"^":"kx;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isaU")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aU]},
$asx:function(){return[W.aU]},
$isj:1,
$asj:function(){return[W.aU]},
$isc:1,
$asc:function(){return[W.aU]},
$ise6:1,
$asB:function(){return[W.aU]},
"%":"FileList"},
nO:{"^":"a6;0l:length=","%":"FileWriter"},
nR:{"^":"a7;0l:length=","%":"HTMLFormElement"},
b4:{"^":"r;",$isb4:1,"%":"Gamepad"},
nS:{"^":"d6;0q:x=,0t:y=","%":"Gyroscope"},
nT:{"^":"r;0l:length=","%":"History"},
nU:{"^":"kK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asx:function(){return[W.L]},
$isj:1,
$asj:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c0:{"^":"r;0d9:data=",$isc0:1,"%":"ImageData"},
e9:{"^":"a7;",$ise9:1,"%":"HTMLImageElement"},
ea:{"^":"a7;0a0:type}",$isea:1,"%":"HTMLInputElement"},
bC:{"^":"db;",$isbC:1,"%":"KeyboardEvent"},
nZ:{"^":"a7;0a0:type}","%":"HTMLLinkElement"},
o_:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
o0:{"^":"d6;0q:x=,0t:y=","%":"Magnetometer"},
o2:{"^":"r;0l:length=","%":"MediaList"},
o3:{"^":"a6;",
d3:function(a,b,c,d){H.h(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.ef(a,b,c,!1)},
"%":"MessagePort"},
o4:{"^":"kQ;",
k:function(a,b){return P.aS(a.get(H.N(b)))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aS(y.value[1]))}},
gax:function(a){var z=H.f([],[P.i])
this.J(a,new W.it(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIInputMap"},
it:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o5:{"^":"kR;",
k:function(a,b){return P.aS(a.get(H.N(b)))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aS(y.value[1]))}},
gax:function(a){var z=H.f([],[P.i])
this.J(a,new W.iu(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iu:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b7:{"^":"r;",$isb7:1,"%":"MimeType"},
o6:{"^":"kT;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb7")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b7]},
$asx:function(){return[W.b7]},
$isj:1,
$asj:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asB:function(){return[W.b7]},
"%":"MimeTypeArray"},
az:{"^":"db;",$isaz:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kl:{"^":"co;a",
m:function(a,b,c){var z,y
H.C(b)
H.e(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga_:function(a){var z=this.a.childNodes
return new W.e7(z,z.length,-1,[H.aX(C.V,z,"B",0)])},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asx:function(){return[W.L]},
$asj:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"a6;",
hX:function(a,b){var z,y
try{z=a.parentNode
J.h3(z,b,a)}catch(y){H.ar(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eg(a):z},
fl:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iy:{"^":"kV;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asx:function(){return[W.L]},
$isj:1,
$asj:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
oe:{"^":"a7;0a0:type}","%":"HTMLOListElement"},
of:{"^":"a7;0a0:type}","%":"HTMLObjectElement"},
b8:{"^":"r;0l:length=",$isb8:1,"%":"Plugin"},
oj:{"^":"kZ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb8")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asx:function(){return[W.b8]},
$isj:1,
$asj:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asB:function(){return[W.b8]},
"%":"PluginArray"},
oo:{"^":"r;0a0:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
op:{"^":"l4;",
k:function(a,b){return P.aS(a.get(H.N(b)))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aS(y.value[1]))}},
gax:function(a){var z=H.f([],[P.i])
this.J(a,new W.j1(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j1:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
or:{"^":"a7;0a0:type}","%":"HTMLScriptElement"},
ot:{"^":"a7;0l:length=","%":"HTMLSelectElement"},
d6:{"^":"a6;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
ba:{"^":"a6;",$isba:1,"%":"SourceBuffer"},
ou:{"^":"fn;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isba")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asx:function(){return[W.ba]},
$isj:1,
$asj:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asB:function(){return[W.ba]},
"%":"SourceBufferList"},
ov:{"^":"a7;0a0:type}","%":"HTMLSourceElement"},
bb:{"^":"r;",$isbb:1,"%":"SpeechGrammar"},
ow:{"^":"l7;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbb")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asx:function(){return[W.bb]},
$isj:1,
$asj:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asB:function(){return[W.bb]},
"%":"SpeechGrammarList"},
bc:{"^":"r;0l:length=",$isbc:1,"%":"SpeechRecognitionResult"},
oy:{"^":"la;",
k:function(a,b){return a.getItem(H.N(b))},
m:function(a,b,c){a.setItem(b,H.N(c))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gax:function(a){var z=H.f([],[P.i])
this.J(a,new W.jd(z))
return z},
gl:function(a){return a.length},
$asag:function(){return[P.i,P.i]},
$isJ:1,
$asJ:function(){return[P.i,P.i]},
"%":"Storage"},
jd:{"^":"n:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oB:{"^":"a7;0a0:type}","%":"HTMLStyleElement"},
bd:{"^":"r;",$isbd:1,"%":"CSSStyleSheet|StyleSheet"},
bJ:{"^":"a7;",$isbJ:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
be:{"^":"a6;",$isbe:1,"%":"TextTrack"},
bf:{"^":"a6;",$isbf:1,"%":"TextTrackCue|VTTCue"},
oG:{"^":"lh;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"TextTrackCueList"},
oH:{"^":"fq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asx:function(){return[W.be]},
$isj:1,
$asj:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asB:function(){return[W.be]},
"%":"TextTrackList"},
oI:{"^":"r;0l:length=","%":"TimeRanges"},
bh:{"^":"r;",$isbh:1,"%":"Touch"},
bi:{"^":"db;",$isbi:1,"%":"TouchEvent"},
oJ:{"^":"ln;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isj:1,
$asj:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asB:function(){return[W.bh]},
"%":"TouchList"},
oK:{"^":"r;0l:length=","%":"TrackDefaultList"},
db:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oM:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
oO:{"^":"r;0q:x=","%":"VRStageBoundsPoint"},
oP:{"^":"a6;0l:length=","%":"VideoTrackList"},
bN:{"^":"az;",
ghk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbN:1,
"%":"WheelEvent"},
ke:{"^":"a6;",
fm:function(a,b){return a.requestAnimationFrame(H.bq(H.h(b,{func:1,ret:-1,args:[P.W]}),1))},
eG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oU:{"^":"lP;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb2")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b2]},
$asx:function(){return[W.b2]},
$isj:1,
$asj:function(){return[W.b2]},
$isc:1,
$asc:function(){return[W.b2]},
$asB:function(){return[W.b2]},
"%":"CSSRuleList"},
oV:{"^":"hy;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bp(b,"$isa8",[P.W],"$asa8")
if(!z)return!1
z=J.aT(b)
return a.left===z.gaP(b)&&a.top===z.gb7(b)&&a.width===z.gao(b)&&a.height===z.gal(b)},
gS:function(a){return W.fg(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gal:function(a){return a.height},
gao:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
oX:{"^":"lR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb4")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b4]},
$asx:function(){return[W.b4]},
$isj:1,
$asj:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asB:function(){return[W.b4]},
"%":"GamepadList"},
oY:{"^":"lT;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asx:function(){return[W.L]},
$isj:1,
$asj:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oZ:{"^":"lV;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isj:1,
$asj:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asB:function(){return[W.bc]},
"%":"SpeechRecognitionResultList"},
p_:{"^":"lX;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbd")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asx:function(){return[W.bd]},
$isj:1,
$asj:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asB:function(){return[W.bd]},
"%":"StyleSheetList"},
kt:{"^":"d8;a,b,c,$ti",
hz:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a1(this.a,this.b,a,!1,z)}},
oW:{"^":"kt;a,b,c,$ti"},
ku:{"^":"eC;a,b,c,d,e,$ti",
fI:function(){var z=this.d
if(z!=null&&this.a<=0)J.h4(this.b,this.c,z,!1)},
p:{
a1:function(a,b,c,d,e){var z=c==null?null:W.fH(new W.kv(c),W.aa)
z=new W.ku(0,a,b,z,!1,[e])
z.fI()
return z}}},
kv:{"^":"n:4;a",
$1:function(a){return this.a.$1(H.e(a,"$isaa"))}},
B:{"^":"b;$ti",
ga_:function(a){return new W.e7(a,this.gl(a),-1,[H.aX(this,a,"B",0)])},
aw:function(a,b,c,d){H.z(d,H.aX(this,a,"B",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
e7:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dF(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
kn:{"^":"r+hs;"},
kp:{"^":"r+x;"},
kq:{"^":"kp+B;"},
kr:{"^":"r+x;"},
ks:{"^":"kr+B;"},
kw:{"^":"r+x;"},
kx:{"^":"kw+B;"},
kJ:{"^":"r+x;"},
kK:{"^":"kJ+B;"},
kQ:{"^":"r+ag;"},
kR:{"^":"r+ag;"},
kS:{"^":"r+x;"},
kT:{"^":"kS+B;"},
kU:{"^":"r+x;"},
kV:{"^":"kU+B;"},
kY:{"^":"r+x;"},
kZ:{"^":"kY+B;"},
l4:{"^":"r+ag;"},
fm:{"^":"a6+x;"},
fn:{"^":"fm+B;"},
l6:{"^":"r+x;"},
l7:{"^":"l6+B;"},
la:{"^":"r+ag;"},
lg:{"^":"r+x;"},
lh:{"^":"lg+B;"},
fp:{"^":"a6+x;"},
fq:{"^":"fp+B;"},
lm:{"^":"r+x;"},
ln:{"^":"lm+B;"},
lO:{"^":"r+x;"},
lP:{"^":"lO+B;"},
lQ:{"^":"r+x;"},
lR:{"^":"lQ+B;"},
lS:{"^":"r+x;"},
lT:{"^":"lS+B;"},
lU:{"^":"r+x;"},
lV:{"^":"lU+B;"},
lW:{"^":"r+x;"},
lX:{"^":"lW+B;"}}],["","",,P,{"^":"",
mi:function(a){var z,y
z=J.K(a)
if(!!z.$isc0){y=z.gd9(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fs(a.data,a.height,a.width)},
mh:function(a){if(a instanceof P.fs)return{data:a.a,height:a.b,width:a.c}
return a},
aS:function(a){var z,y,x,w,v
if(a==null)return
z=P.ei(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.N(y[w])
z.m(0,v,a[v])}return z},
mf:function(a,b){var z={}
a.J(0,new P.mg(z))
return z},
e2:function(){var z=$.e1
if(z==null){z=J.cG(window.navigator.userAgent,"Opera",0)
$.e1=z}return z},
hw:function(){var z,y
z=$.dZ
if(z!=null)return z
y=$.e_
if(y==null){y=J.cG(window.navigator.userAgent,"Firefox",0)
$.e_=y}if(y)z="-moz-"
else{y=$.e0
if(y==null){y=!P.e2()&&J.cG(window.navigator.userAgent,"Trident/",0)
$.e0=y}if(y)z="-ms-"
else z=P.e2()?"-o-":"-webkit-"}$.dZ=z
return z},
ld:{"^":"b;",
dz:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
ct:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.K(a)
if(!!y.$isax)return new Date(a.a)
if(!!y.$isiV)throw H.a(P.c6("structured clone of RegExp"))
if(!!y.$isaU)return a
if(!!y.$iscJ)return a
if(!!y.$ise6)return a
if(!!y.$isc0)return a
if(!!y.$isen||!!y.$isd1)return a
if(!!y.$isJ){x=this.dz(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.J(a,new P.lf(z,this))
return z.a}if(!!y.$isc){x=this.dz(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hh(a,x)}throw H.a(P.c6("structured clone of other type"))},
hh:function(a,b){var z,y,x,w
z=J.aD(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.p(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.ct(z.k(a,w)))
return x}},
lf:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.ct(b)}},
fs:{"^":"b;d9:a>,b,c",$isc0:1},
mg:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
le:{"^":"ld;a,b"},
hI:{"^":"co;a,b",
gbf:function(){var z,y,x
z=this.b
y=H.aE(z,"x",0)
x=W.a2
return new H.ig(new H.kc(z,H.h(new P.hJ(),{func:1,ret:P.ah,args:[y]}),[y]),H.h(new P.hK(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.C(b)
H.e(c,"$isa2")
z=this.gbf()
J.h7(z.b.$1(J.cH(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.as(this.gbf().a)},
k:function(a,b){var z=this.gbf()
return z.b.$1(J.cH(z.a,b))},
ga_:function(a){var z=P.i9(this.gbf(),!1,W.a2)
return new J.av(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a2]},
$asj:function(){return[W.a2]},
$asc:function(){return[W.a2]}},
hJ:{"^":"n:30;",
$1:function(a){return!!J.K(H.e(a,"$isL")).$isa2}},
hK:{"^":"n:27;",
$1:function(a){return H.k(H.e(a,"$isL"),"$isa2")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ff:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bG:{"^":"b;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.bp(b,"$isbG",[P.W],null)
if(!z)return!1
z=this.a
y=J.aT(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gS:function(a){var z,y
z=J.b_(this.a)
y=J.b_(this.b)
return P.ff(P.bP(P.bP(0,z),y))},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=H.y(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.j()
return new P.bG(z,H.z(x*b,y),this.$ti)}},
l_:{"^":"b;$ti",
gb4:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.z(z+this.c,H.y(this,0))},
gc1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bp(b,"$isa8",[P.W],"$asa8")
if(!z)return!1
z=this.a
y=J.aT(b)
x=y.gaP(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb7(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gb4(b)){if(typeof x!=="number")return x.D()
z=H.z(x+this.d,w)===y.gc1(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.b_(z)
x=this.b
w=J.b_(x)
if(typeof z!=="number")return z.D()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.z(x+this.d,v)
return P.ff(P.bP(P.bP(P.bP(P.bP(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d7:function(a,b){var z,y
H.w(b,"$isbG",[P.W],"$asbG")
z=b.a
y=this.a
if(typeof z!=="number")return z.cv()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cv()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a8:{"^":"l_;aP:a>,b7:b>,ao:c>,al:d>,$ti",p:{
iS:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.M()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.M()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nw:{"^":"T;0q:x=,0t:y=","%":"SVGFEBlendElement"},nx:{"^":"T;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},ny:{"^":"T;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nz:{"^":"T;0q:x=,0t:y=","%":"SVGFECompositeElement"},nA:{"^":"T;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nB:{"^":"T;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nC:{"^":"T;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nD:{"^":"T;0q:x=,0t:y=","%":"SVGFEFloodElement"},nE:{"^":"T;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nF:{"^":"T;0q:x=,0t:y=","%":"SVGFEImageElement"},nG:{"^":"T;0q:x=,0t:y=","%":"SVGFEMergeElement"},nH:{"^":"T;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nI:{"^":"T;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nJ:{"^":"T;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nK:{"^":"T;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},nL:{"^":"T;0q:x=,0t:y=","%":"SVGFESpotLightElement"},nM:{"^":"T;0q:x=,0t:y=","%":"SVGFETileElement"},nN:{"^":"T;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},nP:{"^":"T;0q:x=,0t:y=","%":"SVGFilterElement"},nQ:{"^":"bA;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hN:{"^":"bA;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bA:{"^":"T;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},nV:{"^":"bA;0q:x=,0t:y=","%":"SVGImageElement"},bD:{"^":"r;",$isbD:1,"%":"SVGLength"},nY:{"^":"kM;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbD")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bD]},
$isj:1,
$asj:function(){return[P.bD]},
$isc:1,
$asc:function(){return[P.bD]},
$asB:function(){return[P.bD]},
"%":"SVGLengthList"},o1:{"^":"T;0q:x=,0t:y=","%":"SVGMaskElement"},bF:{"^":"r;",$isbF:1,"%":"SVGNumber"},od:{"^":"kX;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbF")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bF]},
$isj:1,
$asj:function(){return[P.bF]},
$isc:1,
$asc:function(){return[P.bF]},
$asB:function(){return[P.bF]},
"%":"SVGNumberList"},oi:{"^":"T;0q:x=,0t:y=","%":"SVGPatternElement"},ok:{"^":"r;0q:x=,0t:y=","%":"SVGPoint"},ol:{"^":"r;0l:length=","%":"SVGPointList"},om:{"^":"r;0q:x=,0t:y=","%":"SVGRect"},on:{"^":"hN;0q:x=,0t:y=","%":"SVGRectElement"},os:{"^":"T;0a0:type}","%":"SVGScriptElement"},oz:{"^":"lc;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.N(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"SVGStringList"},oC:{"^":"T;0a0:type}","%":"SVGStyleElement"},T:{"^":"a2;",
gc5:function(a){return new P.hI(a,new W.kl(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oD:{"^":"bA;0q:x=,0t:y=","%":"SVGSVGElement"},ji:{"^":"bA;","%":"SVGTextPathElement;SVGTextContentElement"},oF:{"^":"ji;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bK:{"^":"r;",$isbK:1,"%":"SVGTransform"},oL:{"^":"lp;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbK")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bK]},
$isj:1,
$asj:function(){return[P.bK]},
$isc:1,
$asc:function(){return[P.bK]},
$asB:function(){return[P.bK]},
"%":"SVGTransformList"},oN:{"^":"bA;0q:x=,0t:y=","%":"SVGUseElement"},kL:{"^":"r+x;"},kM:{"^":"kL+B;"},kW:{"^":"r+x;"},kX:{"^":"kW+B;"},lb:{"^":"r+x;"},lc:{"^":"lb+B;"},lo:{"^":"r+x;"},lp:{"^":"lo+B;"}}],["","",,P,{"^":"",Q:{"^":"b;",$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjv:1}}],["","",,P,{"^":"",n8:{"^":"r;0l:length=","%":"AudioBuffer"},dK:{"^":"a6;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},n9:{"^":"kk;",
k:function(a,b){return P.aS(a.get(H.N(b)))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aS(y.value[1]))}},
gax:function(a){var z=H.f([],[P.i])
this.J(a,new P.ha(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"AudioParamMap"},ha:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hb:{"^":"dK;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},na:{"^":"a6;0l:length=","%":"AudioTrackList"},he:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nb:{"^":"dK;0a0:type}","%":"BiquadFilterNode"},og:{"^":"he;0l:length=","%":"OfflineAudioContext"},oh:{"^":"hb;0a0:type}","%":"Oscillator|OscillatorNode"},kk:{"^":"r+ag;"}}],["","",,P,{"^":"",d5:{"^":"r;",
i3:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$isc0)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mh(g))
return}if(!!z.$ise9)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bX("Incorrect number or type of arguments"))},
i2:function(a,b,c,d,e,f,g){return this.i3(a,b,c,d,e,f,g,null,null,null)},
$isd5:1,
"%":"WebGLRenderingContext"},jE:{"^":"r;",$isjE:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ox:{"^":"l9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aS(a.item(b))},
m:function(a,b,c){H.C(b)
H.e(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asx:function(){return[[P.J,,,]]},
$isj:1,
$asj:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asB:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},l8:{"^":"r+x;"},l9:{"^":"l8+B;"}}],["","",,O,{"^":"",aG:{"^":"b;0a,0b,0c,0d,$ti",
bH:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
cz:function(a,b,c){var z=H.aE(this,"aG",0)
H.h(b,{func:1,ret:P.ah,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.m,[P.j,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bb:function(a,b){return this.cz(a,null,b)},
fb:function(a){var z
H.w(a,"$isj",[H.aE(this,"aG",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
en:function(a,b){var z
H.w(b,"$isj",[H.aE(this,"aG",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga_:function(a){var z=this.a
return new J.av(z,z.length,0,[H.y(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aE(this,"aG",0)
H.z(b,z)
z=[z]
if(this.fb(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.en(x,H.f([b],z))}},
$isj:1,
p:{
cO:function(a){var z=new O.aG([a])
z.bH(a)
return z}}},cZ:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
eo:function(a){var z=this.b
if(!(z==null))z.F(a)},
aB:function(){return this.eo(null)},
gW:function(a){var z=this.a
if(z.length>0)return C.a.gay(z)
else return V.c4()},
dW:function(a){var z=this.a
if(a==null)C.a.h(z,V.c4())
else C.a.h(z,a)
this.aB()},
cm:function(){var z=this.a
if(z.length>0){z.pop()
this.aB()}}}}],["","",,E,{"^":"",cI:{"^":"b;"},aH:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sae:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gB()
y.toString
x=H.h(this.gdS(),{func:1,ret:-1,args:[D.u]})
C.a.L(y.a,x)}y=this.c
if(y!=null){y=y.gB()
y.toString
x=H.h(this.gdS(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}w=new D.H("shape",z,this.c,this,[F.ez])
w.b=!0
this.ag(w)}},
sa9:function(a){var z,y,x,w
if(!J.O(this.r,a)){z=this.r
if(z!=null){y=z.gB()
y.toString
x=H.h(this.gdR(),{func:1,ret:-1,args:[D.u]})
C.a.L(y.a,x)}if(a!=null){y=a.gB()
y.toString
x=H.h(this.gdR(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}this.r=a
w=new D.H("mover",z,a,this,[U.ad])
w.b=!0
this.ag(w)}},
az:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.an(0,b,this):null
if(!J.O(y,this.x)){x=this.x
this.x=y
w=new D.H("matrix",x,y,this,[V.ak])
w.b=!0
this.ag(w)}for(z=this.y.a,z=new J.av(z,z.length,0,[H.y(z,0)]);z.H();)z.d.az(0,b)},
aQ:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gW(z))
else C.a.h(z.a,y.j(0,z.gW(z)))
z.aB()
a.dX(this.f)
z=a.dy
x=(z&&C.a).gay(z)
if(x!=null&&this.d!=null)x.hW(a,this)
for(z=this.y.a,z=new J.av(z,z.length,0,[H.y(z,0)]);z.H();)z.d.aQ(a)
a.dV()
a.dx.cm()},
gB:function(){var z=this.z
if(z==null){z=D.R()
this.z=z}return z},
ag:function(a){var z=this.z
if(!(z==null))z.F(a)},
X:function(){return this.ag(null)},
hJ:[function(a){H.e(a,"$isu")
this.e=null
this.ag(a)},function(){return this.hJ(null)},"iY","$1","$0","gdS",0,2,1],
hI:[function(a){this.ag(H.e(a,"$isu"))},function(){return this.hI(null)},"iX","$1","$0","gdR",0,2,1],
hG:[function(a){this.ag(H.e(a,"$isu"))},function(){return this.hG(null)},"iV","$1","$0","gdQ",0,2,1],
iU:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aH],"$asj")
for(z=b.length,y=this.gdQ(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b3()
t.a=H.f([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.X()},"$2","ghF",8,0,8],
iW:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aH],"$asj")
for(z=b.length,y=this.gdQ(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b3()
t.a=H.f([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.h(y,x)
C.a.L(t.a,y)}}this.X()},"$2","ghH",8,0,8],
$isaI:1,
p:{
e5:function(a,b,c,d,e,f){var z,y
z=new E.aH()
z.a=d
z.b=!0
y=O.cO(E.aH)
z.y=y
y.bb(z.ghF(),z.ghH())
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
z.sae(0,e)
z.sa9(c)
return z}}},iX:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
el:function(a,b){var z,y,x,w,v
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
y=[V.ak]
z.a=H.f([],y)
x=z.gB()
x.toString
w={func:1,ret:-1,args:[D.u]}
v=H.h(new E.iZ(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cZ()
z.a=H.f([],y)
v=z.gB()
v.toString
x=H.h(new E.j_(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cZ()
z.a=H.f([],y)
y=z.gB()
y.toString
w=H.h(new E.j0(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.d9])
this.dy=z
C.a.h(z,null)
this.fr=new H.cn(0,0,[P.i,A.ey])},
ghS:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gW(z)
y=this.db
y=z.j(0,y.gW(y))
this.z=y
z=y}return z},
dX:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gay(z):a;(z&&C.a).h(z,y)},
dV:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iY:function(a,b){var z=new E.iX(a,b)
z.el(a,b)
return z}}},iZ:{"^":"n:9;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.z=null
z.ch=null}},j_:{"^":"n:9;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j0:{"^":"n:9;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},eB:{"^":"u;c,a,0b"},jo:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a2:x@,0y,0z,0Q,0ch",
gB:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z},
eq:[function(a){var z
H.e(a,"$isu")
z=this.x
if(!(z==null))z.F(a)
this.hY()},function(){return this.eq(null)},"ep","$1","$0","gcB",0,2,1],
ghs:function(){var z,y,x
z=Date.now()
y=C.d.a3(P.e4(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ax(z,!1)
return x/y},
cW:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.p(z)
x=C.h.cg(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.h.cg(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hY:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jq(this),{func:1,ret:-1,args:[P.W]})
C.A.eG(z)
C.A.fm(z,W.fH(y,P.W))}},
hV:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cW()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ax(w,!1)
x.y=P.e4(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aB()
w=x.db
C.a.sl(w.a,0)
w.aB()
w=x.dx
C.a.sl(w.a,0)
w.aB()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aQ(this.e)}}catch(v){z=H.ar(v)
y=H.bs(v)
P.dC("Error: "+H.l(z))
P.dC("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jp:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscM)return E.eI(a,!0,!0,!0,!1)
y=W.cN(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gc5(a).h(0,y)
w=E.eI(y,!0,!0,!0,!1)
w.a=a
return w},
eI:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jo()
y=P.i3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.k.bD(a,"webgl",y)
x=H.e(x==null?C.k.bD(a,"experimental-webgl",y):x,"$isd5")
if(x==null)H.t(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iY(x,a)
w=new T.jj(x)
w.b=H.C(x.getParameter(3379))
w.c=H.C(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jR(a)
v=new X.hX()
v.c=new X.aV(!1,!1,!1)
v.d=P.i6(null,null,null,P.m)
w.b=v
v=new X.iv(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ib(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.js(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.eC,P.b]])
w.z=v
u=document
t=W.az
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a1(u,"contextmenu",H.h(w.geZ(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a1(a,"focus",H.h(w.gf1(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a1(a,"blur",H.h(w.geV(),q),!1,r))
v=w.z
p=W.bC
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a1(u,"keyup",H.h(w.gf3(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a1(u,"keydown",H.h(w.gf2(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousedown",H.h(w.gf6(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mouseup",H.h(w.gf8(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousemove",H.h(w.gf7(),s),!1,t))
p=w.z
o=W.bN;(p&&C.a).h(p,W.a1(a,H.N(W.hC(a)),H.h(w.gf9(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a1(u,"mousemove",H.h(w.gf_(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a1(u,"mouseup",H.h(w.gf0(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a1(u,"pointerlockchange",H.h(w.gfa(),q),!1,r))
r=w.z
q=W.bi
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a1(a,"touchstart",H.h(w.gfh(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchend",H.h(w.gff(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchmove",H.h(w.gfg(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ax(Date.now(),!1)
z.ch=0
z.cW()
return z}}},jq:{"^":"n:31;a",
$1:function(a){var z
H.mP(a)
z=this.a
if(z.z){z.z=!1
z.hV()}}}}],["","",,Z,{"^":"",fa:{"^":"b;a,b",p:{
dh:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bm(c)),35044)
a.bindBuffer(b,null)
return new Z.fa(b,z)}}},dO:{"^":"cI;a,b,c,d,e",
c0:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ar(y)
x=P.v('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},kb:{"^":"b;a",$isnc:1},dP:{"^":"b;a,0b,c,d",
aO:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
c0:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].c0(a)},
i8:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aQ:function(a){var z,y,x,w,v
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
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.V(y,", ")+"\nAttrs:   "+C.a.V(u,", ")},
$isoE:1},ck:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b9(this.c)+"'")+"]"}},bj:{"^":"b;a",
gcA:function(a){var z,y
z=this.a
y=(z&$.$get$aO().a)!==0?3:0
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aM().a)!==0)y+=3
if((z&$.$get$aP().a)!==0)y+=2
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$bL().a)!==0)y+=3
if((z&$.$get$bM().a)!==0)y+=4
if((z&$.$get$bk().a)!==0)++y
return(z&$.$get$aL().a)!==0?y+4:y},
h9:function(a){var z,y,x
z=$.$get$aO()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bk()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f9()},
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
if((y&$.$get$bL().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bM().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bk().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.V(z,"|")},
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
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.hG(z))
return x!==0},
hm:function(){return this.F(null)},
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
R:function(){var z=new D.b3()
z.a=H.f([],[{func:1,ret:-1,args:[D.u]}])
z.c=0
return z}}},hG:{"^":"n:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"b;a,0b"},cl:{"^":"u;c,d,a,0b,$ti"},cm:{"^":"u;c,d,a,0b,$ti"},H:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dQ:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"ne<"}},ef:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ef))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},eg:{"^":"u;c,a,0b"},hX:{"^":"b;0a,0b,0c,0d",
hP:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eg(a,this)
y.b=!0
return z.F(y)},
hL:function(a){var z,y
this.c=a.b
this.d.L(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eg(a,this)
y.b=!0
return z.F(y)}},ej:{"^":"d4;x,y,c,d,e,a,0b"},ib:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ar:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ax(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.V(y.a+x*w,y.b+v*u)
u=this.a.gbl()
s=new X.c5(a,new V.V(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cl:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.F(this.ar(a,b))
return!0},
b2:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ed()
if(typeof z!=="number")return z.bC()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.ar(a,b))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.ar(a,b))
return!0},
hQ:function(a){return!1},
f5:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ax(Date.now(),!1)
y=this.f
x=new X.ej(c,a,this.a.gbl(),b,z,this)
x.b=!0
y.F(x)
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
return z+(this.c?"Shift+":"")}},c5:{"^":"d4;x,y,z,Q,ch,c,d,e,a,0b"},iv:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bN:function(a,b,c){var z,y,x
z=new P.ax(Date.now(),!1)
y=this.a.gbl()
x=new X.c5(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cl:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.F(this.bN(a,b,!0))
return!0},
b2:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ed()
if(typeof z!=="number")return z.bC()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.bN(a,b,!0))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.bN(a,b,!1))
return!0},
hR:function(a,b){return!1}},d4:{"^":"u;"},eK:{"^":"d4;x,y,z,Q,ch,c,d,e,a,0b"},js:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ar:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.V],"$asc")
z=new P.ax(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gbl()
w=new X.eK(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hO:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.b
if(z==null)return!1
z.F(this.ar(a,!0))
return!0},
hM:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.c
if(z==null)return!1
z.F(this.ar(a,!0))
return!0},
hN:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.d
if(z==null)return!1
z.F(this.ar(a,!1))
return!0}},jR:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbl:function(){var z=this.a
return V.ev(0,0,(z&&C.k).gbk(z).c,C.k.gbk(z).d)},
cM:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ef(z,new X.aV(y,a.altKey,a.shiftKey))},
aH:function(a){var z,y
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
if(typeof y!=="number")return y.R()
v=z.top
if(typeof x!=="number")return x.R()
return new V.V(y-w,x-v)},
aU:function(a){return new V.a5(a.movementX,a.movementY)},
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
return new X.dQ(z,new X.aV(y,a.altKey,a.shiftKey))},
iw:[function(a){this.f=!0},"$1","gf1",4,0,4],
iq:[function(a){this.f=!1},"$1","geV",4,0,4],
it:[function(a){if(this.f)a.preventDefault()},"$1","geZ",4,0,4],
iy:[function(a){var z
H.e(a,"$isbC")
if(!this.f)return
z=this.cM(a)
if(this.b.hP(z))a.preventDefault()},"$1","gf3",4,0,20],
ix:[function(a){var z
H.e(a,"$isbC")
if(!this.f)return
z=this.cM(a)
if(this.b.hL(z))a.preventDefault()},"$1","gf2",4,0,20],
iA:[function(a){var z,y,x,w
H.e(a,"$isaz")
z=this.a
z.focus()
this.f=!0
this.aH(a)
if(this.x){y=this.ap(a)
x=this.aU(a)
if(this.d.cl(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.as(a)
if(this.c.cl(y,w))a.preventDefault()},"$1","gf6",4,0,5],
iC:[function(a){var z,y,x
H.e(a,"$isaz")
this.aH(a)
z=this.ap(a)
if(this.x){y=this.aU(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","gf8",4,0,5],
iv:[function(a){var z,y,x,w
H.e(a,"$isaz")
z=this.a
if(!(z&&C.k).gbk(z).d7(0,new P.bG(a.clientX,a.clientY,[P.W]))){this.aH(a)
y=this.ap(a)
if(this.x){x=this.aU(a)
if(this.d.b2(y,x))a.preventDefault()
return}if(this.r)return
w=this.as(a)
if(this.c.b2(y,w))a.preventDefault()}},"$1","gf0",4,0,5],
iB:[function(a){var z,y,x
H.e(a,"$isaz")
this.aH(a)
z=this.ap(a)
if(this.x){y=this.aU(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b1(z,x))a.preventDefault()},"$1","gf7",4,0,5],
iu:[function(a){var z,y,x,w
H.e(a,"$isaz")
z=this.a
if(!(z&&C.k).gbk(z).d7(0,new P.bG(a.clientX,a.clientY,[P.W]))){this.aH(a)
y=this.ap(a)
if(this.x){x=this.aU(a)
if(this.d.b1(y,x))a.preventDefault()
return}if(this.r)return
w=this.as(a)
if(this.c.b1(y,w))a.preventDefault()}},"$1","gf_",4,0,5],
iD:[function(a){var z,y
H.e(a,"$isbN")
this.aH(a)
z=new V.a5((a&&C.z).ghj(a),C.z.ghk(a)).A(0,180)
if(this.x){if(this.d.hQ(z))a.preventDefault()
return}if(this.r)return
y=this.as(a)
if(this.c.hR(z,y))a.preventDefault()},"$1","gf9",4,0,35],
iE:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ap(this.y)
v=this.as(this.y)
this.d.f5(w,v,x)}},"$1","gfa",4,0,4],
iK:[function(a){var z
H.e(a,"$isbi")
this.a.focus()
this.f=!0
this.bW(a)
z=this.bQ(a)
if(this.e.hO(z))a.preventDefault()},"$1","gfh",4,0,13],
iI:[function(a){var z
H.e(a,"$isbi")
this.bW(a)
z=this.bQ(a)
if(this.e.hM(z))a.preventDefault()},"$1","gff",4,0,13],
iJ:[function(a){var z
H.e(a,"$isbi")
this.bW(a)
z=this.bQ(a)
if(this.e.hN(z))a.preventDefault()},"$1","gfg",4,0,13]}}],["","",,D,{"^":"",ch:{"^":"b;0a,0b,0c,0d",
gB:function(){var z=this.d
if(z==null){z=D.R()
this.d=z}return z},
aC:[function(a){var z
H.e(a,"$isu")
z=this.d
if(!(z==null))z.F(a)},function(){return this.aC(null)},"ia","$1","$0","gcC",0,2,1],
sa9:function(a){var z,y,x
if(!J.O(this.b,a)){z=this.b
if(z!=null){z=z.gB()
z.toString
y=H.h(this.gcC(),{func:1,ret:-1,args:[D.u]})
C.a.L(z.a,y)}x=this.b
this.b=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gcC(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H("mover",x,this.b,this,[U.ad])
z.b=!0
this.aC(z)}},
sa4:function(a,b){var z,y
if(b==null)b=new V.a_(1,1,1)
if(!this.c.u(0,b)){z=this.c
this.c=b
y=new D.H("color",z,b,this,[V.a_])
y.b=!0
this.aC(y)}},
$isa3:1,
$isaI:1,
p:{
e3:function(a,b){var z=new D.ch()
z.c=new V.a_(1,1,1)
z.a=new V.E(0,0,1)
z.sa9(b)
z.sa4(0,a)
return z}}},a3:{"^":"b;",$isaI:1},hY:{"^":"aG;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.R()
this.Q=z}return z},
aC:function(a){var z=this.Q
if(!(z==null))z.F(a)},
f4:[function(a){var z
H.e(a,"$isu")
z=this.ch
if(!(z==null))z.F(a)},function(){return this.f4(null)},"iz","$1","$0","gcT",0,2,1],
iF:[function(a){var z,y,x
H.w(a,"$isj",[D.a3],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.eB(x))return!1}return!0},"$1","gfc",4,0,37],
im:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcT(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa3")
if(t instanceof D.ch)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b3()
s.a=H.f([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.cl(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","geS",8,0,19],
iH:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcT(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa3")
if(t instanceof D.ch)C.a.L(this.e,t)
s=t.d
if(s==null){s=new D.b3()
s.a=H.f([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.L(s.a,x)}z=new D.cm(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","gfe",8,0,19],
eB:function(a){var z=C.a.aW(this.e,a)
return z},
$asj:function(){return[D.a3]},
$asaG:function(){return[D.a3]}},iE:{"^":"b;",$isa3:1,$isaI:1},ja:{"^":"b;",$isa3:1,$isaI:1},jl:{"^":"b;",$isa3:1,$isaI:1},jm:{"^":"b;",$isa3:1,$isaI:1},jn:{"^":"b;",$isa3:1,$isaI:1}}],["","",,V,{"^":"",
ng:[function(a,b){if(typeof b!=="number")return b.R()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","ir",8,0,33],
cE:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.ba(a-b,z)
return(a<0?a+z:a)+b},
I:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.h.e3($.o.$2(a,0)?0:a,b),c+b+1)},
br:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.q],"$asc")
z=H.f([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.I(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.b.aa(z[u],x))}return z},
dB:function(a,b){return C.h.i5(Math.pow(b,C.H.cg(Math.log(H.me(a))/Math.log(b))))},
a_:{"^":"b;a,b,c",
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
return new V.a_(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
b0:{"^":"b;a,b,c,d",
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
return new V.b0(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b0))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
bE:{"^":"b;a,b,c,d,e,f,r,x,y",
ad:function(a,b){var z=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$isbE")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.h.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.h.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.h.j(t,s)
q=a5.b
p=C.h.j(z,q)
o=a5.e
n=C.h.j(w,o)
m=a5.x
l=C.h.j(t,m)
k=a5.c
z=C.h.j(z,k)
j=a5.f
w=C.h.j(w,j)
i=a5.y
t=C.h.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.h.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.h.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.h.j(d,s)
b=C.h.j(h,q)
a=C.h.j(f,o)
a0=C.h.j(d,m)
h=C.h.j(h,k)
f=C.h.j(f,j)
d=C.h.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.h.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.h.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.bE(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.j(a3,s),C.h.j(a1,q)+C.h.j(a2,o)+C.h.j(a3,m),C.h.j(a1,k)+C.h.j(a2,j)+C.h.j(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bE))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
z=b.e
if(!$.o.$2(z,this.e))return!1
z=b.f
if(!$.o.$2(z,this.f))return!1
z=b.r
if(!$.o.$2(z,this.r))return!1
z=b.x
if(!$.o.$2(z,this.x))return!1
z=b.y
if(!$.o.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
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
return s+(z+w[2]+"]")},
p:{
is:function(a){return new V.bE(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)}}},
ak:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ad:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
dK:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.o.$2(a2,0))return V.c4()
a3=1/a2
a4=-w
a5=-i
return V.ay((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isak")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
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
return V.ay(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cs:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.E(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.Y(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
z=b.e
if(!$.o.$2(z,this.e))return!1
z=b.f
if(!$.o.$2(z,this.f))return!1
z=b.r
if(!$.o.$2(z,this.r))return!1
z=b.x
if(!$.o.$2(z,this.x))return!1
z=b.y
if(!$.o.$2(z,this.y))return!1
z=b.z
if(!$.o.$2(z,this.z))return!1
z=b.Q
if(!$.o.$2(z,this.Q))return!1
z=b.ch
if(!$.o.$2(z,this.ch))return!1
z=b.cx
if(!$.o.$2(z,this.cx))return!1
z=b.cy
if(!$.o.$2(z,this.cy))return!1
z=b.db
if(!$.o.$2(z,this.db))return!1
z=b.dx
if(!$.o.$2(z,this.dx))return!1
return!0},
i:function(a){return this.K()},
dA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
K:function(){return this.dA("",3,0)},
C:function(a){return this.dA(a,3,0)},
p:{
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c4:function(){return V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
d_:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ay(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
el:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ay(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
em:function(a,b,c,d){return V.ek(new V.Y(0,0,0),new V.E(0,1,0),new V.E(a,b,c))},
ek:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.E(c)))
y=b.at(z)
x=y.A(0,Math.sqrt(y.E(y)))
w=z.at(x)
v=new V.E(a.a,a.b,a.c)
return V.ay(x.a,w.a,z.a,x.N(0).E(v),x.b,w.b,z.b,w.N(0).E(v),x.c,w.c,z.c,z.N(0).E(v),0,0,0,1)}}},
V:{"^":"b;q:a>,t:b>",
R:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.V(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
Y:{"^":"b;q:a>,t:b>,c",
D:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.Y(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
bH:{"^":"b;q:a>,t:b>,c,d",
j:function(a,b){return new V.bH(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bH))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
eu:{"^":"b;q:a>,t:b>,c,d",
gam:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eu))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"},
p:{
ev:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eu(a,b,c,d)}}},
a5:{"^":"b;a,b",
hx:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,24],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.a5(z*b,y*b)},
A:function(a,b){var z,y
if($.o.$2(b,0))return new V.a5(0,0)
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
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
hx:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,24],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cj:function(a,b){var z,y,x
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
j:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.o.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dL:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hm:{"^":"dT;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bI:function(a){var z=V.cE(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.R()
this.y=z}return z},
O:function(a){var z=this.y
if(!(z==null))z.F(a)},
se7:function(a,b){},
sdM:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bI(z)}z=new D.H("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.O(z)}},
sdO:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bI(z)}z=new D.H("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.O(z)}},
sa1:function(a,b){var z,y
b=this.bI(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.q])
z.b=!0
this.O(z)}},
sdN:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.O(z)}},
sY:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.q])
z.b=!0
this.O(z)}},
sd8:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.q])
z.b=!0
this.O(z)}},
az:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sY(y)}},
p:{
dV:function(){var z=new U.hm()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dW:{"^":"ad;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
an:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dW))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
p:{
bZ:function(a){var z=new U.dW()
z.a=a
return z}}},e8:{"^":"aG;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
O:[function(a){var z
H.e(a,"$isu")
z=this.e
if(!(z==null))z.F(a)},function(){return this.O(null)},"aD","$1","$0","gbc",0,2,1],
il:[function(a,b){var z,y,x,w,v,u,t
z=U.ad
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbc(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.cl(a,b,this,[z])
z.b=!0
this.O(z)},"$2","geR",8,0,23],
iG:[function(a,b){var z,y,x,w,v,u,t
z=U.ad
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbc(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.h(x,w)
C.a.L(t.a,x)}}z=new D.cm(a,b,this,[z])
z.b=!0
this.O(z)},"$2","gfd",8,0,23],
an:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.av(z,z.length,0,[H.y(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.an(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.c4():x
z=this.e
if(!(z==null))z.ab(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e8))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.O(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.ad]},
$asaG:function(){return[U.ad]},
$isad:1},ad:{"^":"dT;"},ew:{"^":"ad;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.R()
this.y=z}return z},
O:function(a){var z=this.y
if(!(z==null))z.F(a)},
se8:function(a){var z,y
a=V.cE(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.H("yaw",y,a,this,[P.q])
z.b=!0
this.O(z)}},
sdU:function(a,b){var z,y
b=V.cE(b,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,b)){y=this.b
this.b=b
z=new D.H("pitch",y,b,this,[P.q])
z.b=!0
this.O(z)}},
sdZ:function(a){var z,y
a=V.cE(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.H("roll",y,a,this,[P.q])
z.b=!0
this.O(z)}},
an:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.se8(this.a+this.d*b.y)
this.sdU(0,this.b+this.e*b.y)
this.sdZ(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.ay(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).j(0,V.el(this.b)).j(0,V.d_(this.a))
z=this.y
if(!(z==null))z.ab(0)}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ew))return!1
z=this.a
y=b.a
if(!$.o.$2(z,y))return!1
z=this.b
y=b.b
if(!$.o.$2(z,y))return!1
z=this.c
y=b.c
if(!$.o.$2(z,y))return!1
z=this.d
y=b.d
if(!$.o.$2(z,y))return!1
z=this.e
y=b.e
if(!$.o.$2(z,y))return!1
z=this.f
y=b.f
if(!$.o.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"], ["+V.I(this.d,3,0)+", "+V.I(this.e,3,0)+", "+V.I(this.f,3,0)+"]"},
p:{
ex:function(a,b,c,d,e,f){var z,y,x
z=new U.ew()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.se8(f)
z.sdU(0,d)
z.sdZ(e)
y=z.d
if(!$.o.$2(y,c)){x=z.d
z.d=c
y=new D.H("deltaYaw",x,c,z,[P.q])
y.b=!0
z.O(y)}y=z.e
if(!$.o.$2(y,a)){x=z.e
z.e=a
y=new D.H("deltaPitch",x,a,z,[P.q])
y.b=!0
z.O(y)}y=z.f
if(!$.o.$2(y,b)){x=z.f
z.f=b
y=new D.H("deltaRoll",x,b,z,[P.q])
y.b=!0
z.O(y)}return z}}},jS:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.R()
this.fx=z}return z},
O:[function(a){var z
H.e(a,"$isu")
z=this.fx
if(!(z==null))z.F(a)},function(){return this.O(null)},"aD","$1","$0","gbc",0,2,1],
ha:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.R()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.u]}
x=H.h(this.geO(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.h(this.geP(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.R()
x.c=z}x=H.h(this.geQ(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.R()
x.f=z}x=H.h(this.geL(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.h(this.geM(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.R()
x.b=z}x=H.h(this.gfH(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.h(this.gfG(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.R()
x.c=z}y=H.h(this.gfF(),y)
C.a.h(z.a,y)
return!0},
aj:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.a5(z,y)},
ii:[function(a){a=H.k(H.e(a,"$isu"),"$isc5")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geO",4,0,2],
ij:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isu"),"$isc5")
if(!this.cx)return
if(this.ch){z=a.d.R(0,a.y)
z=new V.a5(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.R(0,a.y)
z=this.aj(new V.a5(y.a,y.b).j(0,2).A(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.R(0,a.y)
w=this.aj(new V.a5(x.a,x.b).j(0,2).A(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.R(0,a.z)
this.dx=this.aj(new V.a5(y.a,y.b).j(0,2).A(0,z.gam()))}this.aD()},"$1","geP",4,0,2],
ik:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sY(-y*10*z)
this.aD()}},"$1","geQ",4,0,2],
ig:[function(a){if(H.k(H.e(a,"$isu"),"$isej").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geL",4,0,2],
ih:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isu"),"$isc5")
if(!J.O(this.d,a.x.b))return
z=a.c
y=a.d
x=y.R(0,a.y)
w=this.aj(new V.a5(x.a,x.b).j(0,2).A(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.R(0,a.z)
this.dx=this.aj(new V.a5(y.a,y.b).j(0,2).A(0,z.gam()))
this.aD()},"$1","geM",4,0,2],
iO:[function(a){H.e(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfH",4,0,2],
iN:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isu"),"$iseK")
if(!this.cx)return
if(this.ch){z=a.d.R(0,a.y)
z=new V.a5(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.R(0,a.y)
z=this.aj(new V.a5(y.a,y.b).j(0,2).A(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.R(0,a.y)
w=this.aj(new V.a5(x.a,x.b).j(0,2).A(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.R(0,a.z)
this.dx=this.aj(new V.a5(y.a,y.b).j(0,2).A(0,z.gam()))}this.aD()},"$1","gfG",4,0,2],
iM:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sY(-y*10*z)
this.aD()}},"$1","gfF",4,0,2],
an:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.dy=y
x=b.y
this.c.az(0,x)
this.b.az(0,x)
this.fr=V.d_(this.b.d).j(0,V.el(this.c.d))}return this.fr},
$isad:1,
p:{
f5:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.jS()
y=U.dV()
y.se7(0,!0)
y.sdM(6.283185307179586)
y.sdO(0)
y.sa1(0,0)
y.sdN(100)
y.sY(0)
y.sd8(0.5)
z.b=y
y=y.gB()
y.toString
x=H.h(z.gbc(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)
y=U.dV()
y.se7(0,!0)
y.sdM(6.283185307179586)
y.sdO(0)
y.sa1(0,0)
y.sdN(100)
y.sY(0)
y.sd8(0.5)
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
y=new D.H("modifiers",v,w,z,[X.aV])
y.b=!0
z.O(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.H("invertX",y,!1,z,[P.ah])
y.b=!0
z.O(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.H("invertY",y,!1,z,[P.ah])
y.b=!0
z.O(y)}z.ha(c)
return z}}}}],["","",,M,{"^":"",hE:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aE:[function(a){var z
H.e(a,"$isu")
z=this.x
if(!(z==null))z.F(a)},function(){return this.aE(null)},"ib","$1","$0","gai",0,2,1],
ir:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aH
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b3()
s.a=H.f([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.cl(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","geX",8,0,8],
is:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aH
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b3()
s.a=H.f([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.h(x,w)
C.a.L(s.a,x)}}z=new D.cm(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","geY",8,0,8],
se0:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.h(this.gai(),{func:1,ret:-1,args:[D.u]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gai(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.d9])
z.b=!0
this.aE(z)}},
gB:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.eB(a,this)
z.b=!0
y=this.e
if(!(y==null))y.F(z)
a.dX(this.c)
y=this.b
y.toString
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
x=a.a
w=x.drawingBufferWidth
v=x.drawingBufferHeight
u=y.r
if(typeof w!=="number")return H.p(w)
t=C.d.ac(u.a*w)
if(typeof v!=="number")return H.p(v)
s=C.d.ac(u.b*v)
r=C.d.ac(u.c*w)
a.c=r
u=C.d.ac(u.d*v)
a.d=u
x.viewport(t,s,r,u)
a.a.clearDepth(y.c)
x=a.a
y=y.a
x.clearColor(y.a,y.b,y.c,y.d)
a.a.clear(16640)
y=this.a
x=a.c
u=a.d
r=a.cy
q=y.b
p=y.c
o=y.d
n=o-p
m=1/Math.tan(q*0.5)
r.dW(V.ay(-m/(x/u),0,0,0,0,m,0,0,0,0,o/n,-o*p/n,0,0,1,0))
x=$.er
if(x==null){x=V.ek(new V.Y(0,0,0),new V.E(0,1,0),new V.E(0,0,-1))
$.er=x
l=x}else l=x
x=y.a
if(x!=null){k=x.an(0,a,y)
if(k!=null)l=k.j(0,l)}a.db.dW(l)
y=this.c
if(y!=null)y.az(0,a)
for(y=this.d.a,y=new J.av(y,y.length,0,[H.y(y,0)]);y.H();)y.d.az(0,a)
for(y=this.d.a,y=new J.av(y,y.length,0,[H.y(y,0)]);y.H();)y.d.aQ(a)
this.a.toString
a.cy.cm()
a.db.cm()
this.b.toString
a.dV()},
$isoq:1}}],["","",,A,{"^":"",dJ:{"^":"b;a,b,c"},h9:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hl:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ik:{"^":"ey;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aM,0av,0aN,0bm,0da,0dc,0bn,0bo,0dd,0de,0bp,0bq,0df,0dg,0br,0dh,0di,0bs,0dj,0dk,0bt,0bu,0bv,0dl,0dm,0bw,0bx,0dn,0dq,0by,0dr,0ca,0ds,0cb,0dt,0cc,0du,0cd,0dv,0ce,0dw,0cf,a,b,0c,0d,0e,0f,0r",
ek:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.fK(z)
a2.fR(z)
a2.fL(z)
a2.fZ(z)
a2.h_(z)
a2.fT(z)
a2.h3(z)
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
v.fO(z)
v.fJ(z)
v.fM(z)
v.fP(z)
v.fX(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fV(z)
v.fW(z)}v.fS(z)
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
r=z.a+="   return litClr*("+C.a.V(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fN(z)
v.fU(z)
v.fY(z)
v.h0(z)
v.h1(z)
v.h2(z)
v.fQ(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.V(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cN(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cN(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fL(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.t(P.v("Failed to link shader: "+H.l(m)))}this.fB()
this.fC()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaK")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaK")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaK")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaK")
if(a2.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isdd")
if(a2.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaK")
if(a2.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaK")
this.k3=H.f([],[A.aK])
y=a2.aM
if(y>0){this.k2=H.e(this.r.n(0,"bendMatCount"),"$isP")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.t(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaK"))}}y=a2.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isam")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break
case C.f:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isan")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break}}y=a2.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isam")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break
case C.f:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isan")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break}}y=a2.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.aM=H.k(this.r.n(0,"diffuseTxt"),"$isam")
this.aN=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break
case C.f:this.av=H.k(this.r.n(0,"diffuseTxt"),"$isan")
this.aN=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break}}y=a2.d
if(y!==C.c){this.bm=H.k(this.r.n(0,"invDiffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.da=H.k(this.r.n(0,"invDiffuseTxt"),"$isam")
this.bn=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break
case C.f:this.dc=H.k(this.r.n(0,"invDiffuseTxt"),"$isan")
this.bn=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a2.e
if(y!==C.c){this.bq=H.k(this.r.n(0,"shininess"),"$isZ")
this.bo=H.k(this.r.n(0,"specularClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dd=H.k(this.r.n(0,"specularTxt"),"$isam")
this.bp=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break
case C.f:this.de=H.k(this.r.n(0,"specularTxt"),"$isan")
this.bp=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.e:this.df=H.k(this.r.n(0,"bumpTxt"),"$isam")
this.br=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break
case C.f:this.dg=H.k(this.r.n(0,"bumpTxt"),"$isan")
this.br=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break}if(a2.dy){this.dh=H.k(this.r.n(0,"envSampler"),"$isan")
this.di=H.k(this.r.n(0,"nullEnvTxt"),"$isP")
y=a2.r
if(y!==C.c){this.bs=H.k(this.r.n(0,"reflectClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dj=H.k(this.r.n(0,"reflectTxt"),"$isam")
this.bt=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break
case C.f:this.dk=H.k(this.r.n(0,"reflectTxt"),"$isan")
this.bt=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break}}y=a2.x
if(y!==C.c){this.bu=H.k(this.r.n(0,"refraction"),"$isZ")
this.bv=H.k(this.r.n(0,"refractClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dl=H.k(this.r.n(0,"refractTxt"),"$isam")
this.bw=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break
case C.f:this.dm=H.k(this.r.n(0,"refractTxt"),"$isan")
this.bw=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break}}}y=a2.y
if(y!==C.c){this.bx=H.k(this.r.n(0,"alpha"),"$isZ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dn=H.k(this.r.n(0,"alphaTxt"),"$isam")
this.by=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break
case C.f:this.dq=H.k(this.r.n(0,"alphaTxt"),"$isan")
this.by=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break}}this.ca=H.f([],[A.eW])
this.cb=H.f([],[A.eX])
this.cc=H.f([],[A.eY])
this.cd=H.f([],[A.eZ])
this.ce=H.f([],[A.f_])
this.cf=H.f([],[A.f0])
if(a2.k2){y=a2.z
if(y>0){this.dr=H.e(this.r.n(0,"dirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.ca;(x&&C.a).h(x,new A.eW(l,k,j))}}y=a2.Q
if(y>0){this.ds=H.e(this.r.n(0,"pntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isM")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isZ")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isZ")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isZ")
x=this.cb;(x&&C.a).h(x,new A.eX(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dt=H.e(this.r.n(0,"spotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isM")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isM")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isZ")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isZ")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isZ")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isZ")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isZ")
x=this.cc;(x&&C.a).h(x,new A.eY(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.du=H.e(this.r.n(0,"txtDirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isM")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isM")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isM")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isP")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isam")
x=this.cd;(x&&C.a).h(x,new A.eZ(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dv=H.e(this.r.n(0,"txtPntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdd")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isM")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isZ")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isZ")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isZ")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isan")
x=this.ce;(x&&C.a).h(x,new A.f_(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dw=H.e(this.r.n(0,"txtSpotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isM")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isM")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isM")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isP")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isM")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isZ")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isZ")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isam")
x=this.cf;(x&&C.a).h(x,new A.f0(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
af:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.ee(c)
b.a.uniform1i(b.d,0)}},
a7:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
ij:function(a,b){var z,y
z=a.av
y=new A.ik(b,z)
y.em(b,z)
y.ek(a,b)
return y}}},io:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aM,av,aN",
fK:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aM+"];\n"
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
fR:function(a){var z
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
fL:function(a){var z
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
fZ:function(a){var z,y
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
h_:function(a){var z,y
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
fT:function(a){var z
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
h3:function(a){var z
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
z+="uniform int null"+(c[0].toUpperCase()+C.b.aA(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fO:function(a){var z,y
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
fJ:function(a){var z,y
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
fM:function(a){var z,y
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
fP:function(a){var z,y
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
fX:function(a){var z,y
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
fS:function(a){var z,y
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
fV:function(a){var z,y
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
fW:function(a){var z,y
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
fN:function(a){var z,y
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
fU:function(a){var z,y
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
fY:function(a){var z,y
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
h0:function(a){var z,y,x
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
h1:function(a){var z,y,x
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
h2:function(a){var z,y,x
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
fQ:function(a){var z
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
i:function(a){return this.av}},eW:{"^":"b;a,b,c"},eZ:{"^":"b;a,b,c,d,e,f,r,x"},eX:{"^":"b;a,b,c,d,e,f,r"},f_:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eY:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f0:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ey:{"^":"cI;",
em:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cN:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fL(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fB:function(){var z,y,x,w,v,u
z=H.f([],[A.dJ])
y=this.a
x=H.C(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dJ(y,v.name,u))}this.f=new A.h9(z)},
fC:function(){var z,y,x,w,v,u
z=H.f([],[A.ab])
y=this.a
x=H.C(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hi(v.type,v.size,v.name,u))}this.r=new A.jD(z)},
aG:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.dc(z,y,b,a,c)},
eD:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.am(z,y,b,c)
else return A.dc(z,y,b,a,c)},
eE:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.an(z,y,b,c)
else return A.dc(z,y,b,a,c)},
bi:function(a,b){return new P.fd(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hi:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.Z(this.a,this.e,c,d)
case 35664:return new A.jy(this.a,this.e,c,d)
case 35665:return new A.M(this.a,this.e,c,d)
case 35666:return new A.jB(this.a,this.e,c,d)
case 35667:return new A.jz(this.a,this.e,c,d)
case 35668:return new A.jA(this.a,this.e,c,d)
case 35669:return new A.jC(this.a,this.e,c,d)
case 35674:return new A.jF(this.a,this.e,c,d)
case 35675:return new A.dd(this.a,this.e,c,d)
case 35676:return new A.aK(this.a,this.e,c,d)
case 35678:return this.eD(b,c,d)
case 35680:return this.eE(b,c,d)
case 35670:throw H.a(this.bi("BOOL",c))
case 35671:throw H.a(this.bi("BOOL_VEC2",c))
case 35672:throw H.a(this.bi("BOOL_VEC3",c))
case 35673:throw H.a(this.bi("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cf:{"^":"b;a,b",
i:function(a){return this.b}},ab:{"^":"b;"},jD:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.K()},
hr:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].i(0)+a
return x},
K:function(){return this.hr("\n")}},P:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jz:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jA:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jC:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jx:{"^":"ab;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dc:function(a,b,c,d,e){var z=new A.jx(a,b,c,e)
z.f=d
z.e=P.i8(d,0,!1,P.m)
return z}}},Z:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jy:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},M:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jB:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jF:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dd:{"^":"ab;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bm(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aK:{"^":"ab;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bm(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},am:{"^":"ab;a,b,c,d",
ee:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},an:{"^":"ab;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
du:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
z=F.d7()
F.bS(z,b,c,d,a,1,0,0,1)
F.bS(z,b,c,d,a,0,1,0,3)
F.bS(z,b,c,d,a,0,0,1,2)
F.bS(z,b,c,d,a,-1,0,0,0)
F.bS(z,b,c,d,a,0,-1,0,0)
F.bS(z,b,c,d,a,0,0,-1,3)
z.ak()
return z},
cw:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bS:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
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
j=F.dD(d,e,new F.lY(z,F.cw(z.c),F.cw(z.d),k,l,c),b)
if(j!=null)a.b0(j)},
fO:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
z=F.d7()
y=b?-1:1
x=-6.283185307179586/e
w=H.f([],[F.af])
v=z.a
u=new V.E(0,0,y)
u=u.A(0,Math.sqrt(u.E(u)))
C.a.h(w,v.h6(new V.bH(a,-1,-1,-1),new V.b0(1,1,1,1),new V.Y(0,0,c),new V.E(0,0,y),new V.V(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.p(p)
o=new V.E(r,q,y).A(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c8(new V.bH(a,-1,-1,-1),null,new V.b0(n,l,m,1),new V.Y(r*p,q*p,c),new V.E(0,0,y),new V.V(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.h4(w)
return z},
fM:function(a,b,c,d,e,f){return F.mk(!0,c,d,new F.mj(a,f),e)},
mk:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dD(c,e,new F.mm(d),null)
if(z==null)return
z.ak()
z.bX()
if(b)z.b0(F.fO(3,!1,1,new F.mn(d),e))
z.b0(F.fO(1,!0,-1,new F.mo(d),e))
return z},
mY:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.mZ()
y=F.du(a,null,new F.n_(z),c)
y.bX()
return y},
h0:function(a,b,c,d){return F.fN(c,a,d,b,new F.n2())},
mD:function(a,b,c,d,e,f){return F.fN(d,a,e,b,new F.mE(f,c))},
fN:function(a,b,c,d,e){var z=F.dD(a,b,new F.ml(H.h(e,{func:1,ret:V.Y,args:[P.q]}),d,b,c),null)
if(z==null)return
z.ak()
z.bX()
return z},
dD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.d7()
y=H.f([],[F.af])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c8(null,null,new V.b0(u,0,0,1),null,null,new V.V(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c8(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c8(null,null,new V.b0(o,n,m,1),null,null,new V.V(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c8(d))}}z.d.h5(a+1,b+1,y)
return z},
lY:{"^":"n:10;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cj(z.b,b).cj(z.d.cj(z.c,b),c)
a.sa1(0,new V.Y(y.a,y.b,y.c))
a.se1(y.A(0,Math.sqrt(y.E(y))))
z=1-b
x=1-c
a.sd4(new V.bH(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mj:{"^":"n:15;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mm:{"^":"n:10;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.p(v)
y=-y*v
u=x*v
a.sa1(0,new V.Y(y,u,w))
u=new V.E(y,u,w)
a.se1(u.A(0,Math.sqrt(u.E(u))))
a.sd4(new V.bH(1-c,2+c,-1,-1))}},
mn:{"^":"n:22;a",
$1:function(a){return this.a.$2(a,1)}},
mo:{"^":"n:22;a",
$1:function(a){return this.a.$2(1-a,0)}},
mZ:{"^":"n:15;",
$2:function(a,b){return 0}},
n_:{"^":"n:10;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.p(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.A(0,Math.sqrt(x.E(x))).j(0,1+z)
a.sa1(0,new V.Y(z.a,z.b,z.c))}},
n2:{"^":"n:16;",
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)}},
mE:{"^":"n:16;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Y(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
ml:{"^":"n:10;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dE(y.$1(z),x)
x=J.dE(y.$1(z+3.141592653589793/this.c),x).R(0,w)
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
y=u.j(0,y*x)
x=t.j(0,r*x)
a.sa1(0,w.D(0,new V.Y(y.a-x.a,y.b-x.b,y.c-x.c)))}},
aj:{"^":"b;0a,0b,0c,0d,0e",
au:function(){if(!this.gaY()){C.a.L(this.a.a.d.b,this)
this.a.a.X()}this.bS()
this.bT()
this.fk()},
fw:function(a){this.a=a
C.a.h(a.d.b,this)},
fz:function(a){this.b=a
C.a.h(a.d.c,this)},
fA:function(a){this.c=a
C.a.h(a.d.d,this)},
bS:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
bT:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
fk:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gaY:function(){return this.a==null||this.b==null||this.c==null},
ex:function(){var z,y,x,w,v
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
if(v.dL())return
return v.A(0,Math.sqrt(v.E(v)))},
ez:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.R(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.E(z)))
z=w.R(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.at(z.A(0,Math.sqrt(z.E(z))))
return z.A(0,Math.sqrt(z.E(z)))},
c4:function(){if(this.d!=null)return!0
var z=this.ex()
if(z==null){z=this.ez()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
ew:function(){var z,y,x,w,v
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
if(v.dL())return
return v.A(0,Math.sqrt(v.E(v)))},
ey:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.R(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.R(0,u).j(0,l).D(0,u).R(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.E(z)))
z=k.at(m)
z=z.A(0,Math.sqrt(z.E(z))).at(k)
m=z.A(0,Math.sqrt(z.E(z)))}return m},
c2:function(){if(this.e!=null)return!0
var z=this.ew()
if(z==null){z=this.ey()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
aZ:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.N(0)
y=this.e
if(y!=null)this.e=y.N(0)
this.a.a.X()},
ghe:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var z,y
if(this.gaY())return a+"disposed"
z=a+C.b.aa(J.a9(this.a.e),0)+", "+C.b.aa(J.a9(this.b.e),0)+", "+C.b.aa(J.a9(this.c.e),0)+" {"
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
z.fw(a)
z.fz(b)
z.fA(c)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
hH:{"^":"b;"},
j9:{"^":"hH;",
b_:function(a,b,c){var z,y
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
au:function(){if(!this.gaY()){C.a.L(this.a.a.c.b,this)
this.a.a.X()}this.bS()
this.bT()},
bS:function(){var z=this.a
if(z!=null){C.a.L(z.c.b,this)
this.a=null}},
bT:function(){var z=this.b
if(z!=null){C.a.L(z.c.c,this)
this.b=null}},
gaY:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){if(this.gaY())return a+"disposed"
return a+C.b.aa(J.a9(this.a.e),0)+", "+C.b.aa(J.a9(this.b.e),0)},
K:function(){return this.C("")}},
hZ:{"^":"b;"},
jw:{"^":"hZ;",
b_:function(a,b,c){var z,y
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
d3:{"^":"b;0a",
au:function(){var z=this.a
if(z!=null){C.a.L(z.a.b.b,this)
this.a.a.X()}this.fj()},
fj:function(){var z=this.a
if(z!=null){C.a.L(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.aa(J.a9(z.e),0)},
K:function(){return this.C("")}},
ez:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
b0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.hg())}this.a.w()
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
s=new F.d3()
if(r.a==null)H.t(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.F(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
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
if(!(t==null))t.F(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){m=z[w]
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
if(!(z==null))z.ab(0)},
ak:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ak()||!1
if(!this.a.ak())y=!1
z=this.e
if(!(z==null))z.ab(0)
return y},
eI:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.af],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.b_(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hD:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.af],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.f([],z)
t=H.f([],x)
if(this.eI(a,v,y,u,t))b.b0(u)}this.a.w()
this.c.co()
this.d.co()
this.b.hU()
this.c.cp(new F.jw())
this.d.cp(new F.j9())
z=this.e
if(!(z==null))z.ab(0)},
h8:function(a){this.hD(new F.k5(),new F.iz())},
bX:function(){return this.h8(null)},
aZ:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.aZ()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.d(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdP(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).A(0,Math.sqrt(w*w+v*v+z*z))
if(!J.O(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.F(null)}}}}z=this.e
if(!(z==null))z.ab(0)},
hc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aO()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$bL().a)!==0)++w
if((x&$.$get$bM().a)!==0)++w
if((x&$.$get$bk().a)!==0)++w
if((x&$.$get$aL().a)!==0)++w
v=b.gcA(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.dO])
for(r=0,q=0;q<w;++q){p=b.h9(q)
o=p.gcA(p)
C.a.m(s,q,new Z.dO(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hy(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bm(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dP(new Z.fa(34962,j),s,b)
i.b=H.f([],[Z.ck])
if(this.b.b.length!==0){x=P.m
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ck(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ck(1,h.length,f))}if(this.d.b.length!==0){x=P.m
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
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ck(4,h.length,f))}return i},
i:function(a){var z=H.f([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.V(z,"\n")},
ag:function(a){var z=this.e
if(!(z==null))z.F(a)},
X:function(){return this.ag(null)},
p:{
d7:function(){var z,y
z=new F.ez()
y=new F.k0(z)
y.b=!1
y.c=H.f([],[F.af])
z.a=y
y=new F.j8(z)
y.b=H.f([],[F.d3])
z.b=y
y=new F.j7(z)
y.b=H.f([],[F.cW])
z.c=y
y=new F.j6(z)
y.b=H.f([],[F.aj])
z.d=y
z.e=null
return z}}},
j6:{"^":"b;a,0b",
h4:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.af],"$asc")
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
h5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.af],"$asc")
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
cp:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b_(0,v,t)){v.au()
break}}}}},
co:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghe(x)
if(y)x.au()}},
ak:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].c4())x=!1
return x},
c3:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].c2())x=!1
return x},
aZ:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].aZ()},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.V(z,"\n")},
K:function(){return this.C("")}},
j7:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cp:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b_(0,v,t)){v.au()
break}}}}},
co:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.O(x.a,x.b)
if(y)x.au()}},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.V(z,"\n")},
K:function(){return this.C("")}},
j8:{"^":"b;a,0b",
gl:function(a){return this.b.length},
hU:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.au()}},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.V(z,"\n")},
K:function(){return this.C("")}},
af:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c8:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c8(this.cx,x,u,z,y,w,v,a,t)},
hg:function(){return this.c8(null)},
sa1:function(a,b){var z
if(!J.O(this.f,b)){this.f=b
z=this.a
if(z!=null)z.X()}},
sdP:function(a){var z
a=a.A(0,Math.sqrt(a.E(a)))
if(!J.O(this.r,a)){this.r=a
z=this.a
if(z!=null)z.X()}},
se1:function(a){var z
if(!J.O(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
sd4:function(a){var z
if(!J.O(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.X()}},
hy:function(a){var z,y
z=J.K(a)
if(z.u(a,$.$get$aO())){z=this.f
y=[P.q]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aN())){z=this.r
y=[P.q]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aM())){z=this.x
y=[P.q]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aP())){z=this.y
y=[P.q]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.u(a,$.$get$aQ())){z=this.z
y=[P.q]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bL())){z=this.Q
y=[P.q]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bM())){z=this.Q
y=[P.q]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$bk()))return H.f([this.ch],[P.q])
else if(z.u(a,$.$get$aL())){z=this.cx
y=[P.q]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.q])},
c4:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.J(0,new F.ka(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ab(0)}return!0},
c2:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.J(0,new F.k9(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ab(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var z,y,x
z=H.f([],[P.i])
C.a.h(z,C.b.aa(J.a9(this.e),0))
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
C.a.h(z,V.I(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.V(z,", ")
return a+"{"+x+"}"},
K:function(){return this.C("")},
p:{
c8:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.af()
y=new F.k8(z)
y.b=H.f([],[F.d3])
z.b=y
y=new F.k4(z)
x=[F.cW]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.k1(z)
x=[F.aj]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$f7()
z.e=0
y=$.$get$aO()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aN().a)!==0?e:null
z.x=(x&$.$get$aM().a)!==0?b:null
z.y=(x&$.$get$aP().a)!==0?f:null
z.z=(x&$.$get$aQ().a)!==0?g:null
z.Q=(x&$.$get$f8().a)!==0?c:null
z.ch=(x&$.$get$bk().a)!==0?i:0
z.cx=(x&$.$get$aL().a)!==0?a:null
return z}}},
ka:{"^":"n:11;a",
$1:function(a){var z,y
H.e(a,"$isaj")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
k9:{"^":"n:11;a",
$1:function(a){var z,y
H.e(a,"$isaj")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
k0:{"^":"b;a,0b,0c",
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
this.a.X()
return!0},
h7:function(a,b,c,d,e,f,g,h,i){var z=F.c8(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
h6:function(a,b,c,d,e,f){return this.h7(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ak:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].c4()
return!0},
c3:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].c2()
return!0},
hd:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.O(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.F(null)}}}}return!0},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
this.w()
z=H.f([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.V(z,"\n")},
K:function(){return this.C("")}},
k1:{"^":"b;a,0b,0c,0d",
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
J:function(a,b){H.h(b,{func:1,ret:-1,args:[F.aj]})
C.a.J(this.b,b)
C.a.J(this.c,new F.k2(this,b))
C.a.J(this.d,new F.k3(this,b))},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.V(z,"\n")},
K:function(){return this.C("")}},
k2:{"^":"n:11;a,b",
$1:function(a){H.e(a,"$isaj")
if(!J.O(a.a,this.a))this.b.$1(a)}},
k3:{"^":"n:11;a,b",
$1:function(a){var z
H.e(a,"$isaj")
z=this.a
if(!J.O(a.a,z)&&!J.O(a.b,z))this.b.$1(a)}},
k4:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
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
return C.a.V(z,"\n")},
K:function(){return this.C("")}},
k6:{"^":"b;"},
k5:{"^":"k6;",
b_:function(a,b,c){return J.O(b.f,c.f)}},
k7:{"^":"b;"},
iz:{"^":"k7;",
b0:function(a){var z,y,x,w
H.w(a,"$isc",[F.af],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.E(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x)a[x].sdP(z)
return}},
k8:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.V(z,"\n")},
K:function(){return this.C("")}}}],["","",,O,{"^":"",ii:{"^":"d9;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.R()
this.dy=z}return z},
Z:[function(a){var z
H.e(a,"$isu")
z=this.dy
if(!(z==null))z.F(a)},function(){return this.Z(null)},"eW","$1","$0","gbg",0,2,1],
fo:[function(a){H.e(a,"$isu")
this.a=null
this.Z(a)},function(){return this.fo(null)},"iL","$1","$0","gfn",0,2,1],
io:[function(a,b){var z=V.ak
z=new D.cl(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.Z(z)},"$2","geT",8,0,25],
ip:[function(a,b){var z=V.ak
z=new D.cm(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.Z(z)},"$2","geU",8,0,25],
cL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=this.dx
y=C.d.a3(z.e.length+3,4)*4
x=C.d.a3(z.f.length+3,4)*4
w=C.d.a3(z.r.length+3,4)*4
v=C.d.a3(z.x.length+3,4)*4
u=C.d.a3(z.y.length+3,4)*4
t=C.d.a3(z.z.length+3,4)*4
s=C.d.a3(this.e.a.length+3,4)*4
z=this.b!=null
r=this.c!=null
q=this.d!=null
p=this.f.c
o=this.r.c
n=this.x.c
m=this.y.c
l=this.z.c
k=this.Q.c
j=this.cx.c
i=this.cy.c
h=this.db.c
g="MaterialLight_"+C.d.i(p.a)+C.d.i(o.a)+C.d.i(n.a)+C.d.i(m.a)+C.d.i(l.a)+C.d.i(k.a)+C.d.i(j.a)+C.d.i(i.a)+C.d.i(h.a)+"_"
g+=z?"1":"0"
g+=r?"1":"0"
g=g+(q?"1":"0")+"_"+s+"_"+y+"_"+x+"_"+w+"_"+v+"_"+u+"_"+t
f=j!==C.c||i!==C.c
e=o!==C.c||n!==C.c||m!==C.c||l!==C.c
d=l===C.c
c=!d||f
b=n!==C.c||m!==C.c||!d||k!==C.c||f
d=k===C.c
a=!d
a0=p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e
a1=p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f
a2=x+u+v+w+t>0
a3=s>0
a4=b||!d||c
a5=z&&a0
a6=r&&a1
a7=$.$get$aO()
if(b){z=$.$get$aN()
a7=new Z.bj(a7.a|z.a)}if(a){z=$.$get$aM()
a7=new Z.bj(a7.a|z.a)}if(a0){z=$.$get$aP()
a7=new Z.bj(a7.a|z.a)}if(a1){z=$.$get$aQ()
a7=new Z.bj(a7.a|z.a)}if(a3){z=$.$get$aL()
a7=new Z.bj(a7.a|z.a)}return new A.io(p,o,n,m,l,k,j,i,h,y,x,w,v,u,t,y+x+w+v+u+t,f,f,a2,a4,!0,!1,!1,e,a2,c,b,a,a0,a1,a3,a5,a6,q,s,g.charCodeAt(0)==0?g:g,a7)},
T:function(a,b){H.w(a,"$isc",[T.da],"$asc")
if(b!=null)if(!C.a.aW(a,b)){b.a=a.length
C.a.h(a,b)}},
az:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.av(z,z.length,0,[H.y(z,0)]);z.H();){y=z.d
x=new V.E(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cs(x)}}},
hW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cL()
y=a.fr.k(0,z.av)
if(y==null){y=A.ij(z,a.a)
x=y.b
if(x.length===0)H.t(P.v("May not cache a shader with no name."))
if(a.fr.c6(0,x))H.t(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aN
z=b.e
if(!(z instanceof Z.dP)){b.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)b.d.ak()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.c3()
t.a.c3()
t=t.e
if(!(t==null))t.ab(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hd()
s=s.e
if(!(s==null))s.ab(0)}q=b.d.hc(new Z.kb(a.a),v)
q.aO($.$get$aO()).e=this.a.y.c
if(z)q.aO($.$get$aN()).e=this.a.Q.c
if(u)q.aO($.$get$aM()).e=this.a.z.c
if(w.rx)q.aO($.$get$aP()).e=this.a.ch.c
if(t)q.aO($.$get$aQ()).e=this.a.cx.c
if(w.x1)q.aO($.$get$aL()).e=this.a.cy.c
b.e=q}z=T.da
p=H.f([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hn()
if(w.fx){u=this.a
t=a.dx
t=t.gW(t)
u=u.db
u.toString
u.ah(t.ad(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gW(t)
s=a.dx
s=t.j(0,s.gW(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ah(t.ad(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghS()
s=a.dx
s=t.j(0,s.gW(s))
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
u.ah(t.ad(0,!0))}if(w.aM>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.q],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.e(s,"$isak")
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
case C.e:this.T(p,this.f.d)
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
case C.f:this.T(p,this.f.e)
u=this.a
t=this.f.e
u.a7(u.r2,u.rx,t)
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
case C.e:this.T(p,this.r.d)
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
case C.f:this.T(p,this.r.e)
u=this.a
t=this.r.e
u.a7(u.x2,u.y1,t)
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
case C.e:this.T(p,this.x.d)
u=this.a
t=this.x.d
u.af(u.aM,u.aN,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.T(p,this.x.e)
u=this.a
t=this.x.e
u.a7(u.av,u.aN,t)
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
u=u.bm
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.T(p,this.y.d)
u=this.a
t=this.y.d
u.af(u.da,u.bn,t)
t=this.a
u=this.y.f
t=t.bm
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.T(p,this.y.e)
u=this.a
t=this.y.e
u.a7(u.dc,u.bn,t)
t=this.a
u=this.y.f
t=t.bm
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bo
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bq
t.a.uniform1f(t.d,r)
break
case C.e:this.T(p,this.z.d)
u=this.a
t=this.z.d
u.af(u.dd,u.bp,t)
t=this.a
u=this.z.f
t=t.bo
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bq
u.a.uniform1f(u.d,r)
break
case C.f:this.T(p,this.z.e)
u=this.a
t=this.z.e
u.a7(u.de,u.bp,t)
t=this.a
u=this.z.f
t=t.bo
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bq
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dr
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.ca
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.cs(i.a)
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.ds
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cb
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb3(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcu(s)
r.a.uniform3f(r.d,g,f,s)
s=l.b8(i.gb3(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga4(i)
f=h.d
g=s.gbB()
r=s.gb9()
s=s.gbj()
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
u=this.a.dt
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cc
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb3(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcu(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gc9(i).iT()
f=h.c
g=s.gaJ(s)
r=s.gaK(s)
s=s.gaL()
f.a.uniform3f(f.d,g,r,s)
s=l.b8(i.gb3(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga4(i)
r=h.e
g=s.gbB()
f=s.gb9()
s=s.gbj()
r.a.uniform3f(r.d,g,f,s)
s=i.giQ()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giP()
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
u=this.a.du
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
r=this.a.cd
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gb5()
H.w(p,"$isc",s,"$asc")
if(!C.a.aW(p,r)){r.sbe(p.length)
C.a.h(p,r)}r=i.gc9(i)
g=h.d
f=r.gaJ(r)
e=r.gaK(r)
r=r.gaL()
g.a.uniform3f(g.d,f,e,r)
r=i.gi9()
e=h.b
f=r.gaJ(r)
g=r.gaK(r)
r=r.gaL()
e.a.uniform3f(e.d,f,g,r)
r=i.gb4(i)
g=h.c
f=r.gaJ(r)
e=r.gaK(r)
r=r.gaL()
g.a.uniform3f(g.d,f,e,r)
r=l.cs(i.gc9(i))
e=r.a
f=r.b
g=r.c
g=r.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga4(i)
f=h.f
e=g.gbB()
r=g.gb9()
g=g.gbj()
f.a.uniform3f(f.d,e,r,g)
g=i.gb5()
r=g.gck(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.geK()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gbe())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dv
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.y,t=u.length,s=[P.q],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
g=this.a.ce
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gb5()
H.w(p,"$isc",r,"$asc")
if(!C.a.aW(p,g)){g.sbe(p.length)
C.a.h(p,g)}d=l.j(0,i.gW(i))
g=i.gW(i).b8(new V.Y(0,0,0))
f=h.b
e=g.gq(g)
c=g.gt(g)
g=g.gcu(g)
f.a.uniform3f(f.d,e,c,g)
g=d.b8(new V.Y(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dK(0)
c=h.d
m=new Float32Array(H.bm(H.w(new V.bE(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ad(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga4(i)
g=h.e
e=c.gbB()
f=c.gb9()
c=c.gbj()
g.a.uniform3f(g.d,e,f,c)
c=i.gb5()
g=c.gck(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gck(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.giR(c))
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
u=this.a.dw
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cf
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb5()
H.w(p,"$isc",z,"$asc")
if(!C.a.aW(p,s)){s.sbe(p.length)
C.a.h(p,s)}s=i.gb3(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcu(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gc9(i)
f=h.c
g=s.gaJ(s)
r=s.gaK(s)
s=s.gaL()
f.a.uniform3f(f.d,g,r,s)
s=i.gi9()
r=h.d
g=s.gaJ(s)
f=s.gaK(s)
s=s.gaL()
r.a.uniform3f(r.d,g,f,s)
s=i.gb4(i)
f=h.e
g=s.gaJ(s)
r=s.gaK(s)
s=s.gaL()
f.a.uniform3f(f.d,g,r,s)
s=l.b8(i.gb3(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb5()
r=s.gck(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.geK()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gbe())
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga4(i)
r=h.y
g=s.gbB()
f=s.gb9()
s=s.gbj()
r.a.uniform3f(r.d,g,f,s)
s=i.giZ()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gj_()
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
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.e:this.T(p,this.Q.d)
z=this.a
u=this.Q.d
z.af(z.df,z.br,u)
break
case C.f:this.T(p,this.Q.e)
z=this.a
u=this.Q.e
z.a7(z.dg,z.br,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gW(u).dK(0)
a.Q=u}z=z.fy
z.toString
z.ah(u.ad(0,!0))}if(w.dy){this.T(p,this.ch)
z=this.a
u=this.ch
z.a7(z.dh,z.di,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bs
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.e:this.T(p,this.cx.d)
z=this.a
u=this.cx.d
z.af(z.dj,z.bt,u)
u=this.a
z=this.cx.f
u=u.bs
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.f:this.T(p,this.cx.e)
z=this.a
u=this.cx.e
z.a7(z.dk,z.bt,u)
u=this.a
z=this.cx.f
u=u.bs
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bv
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bu
u.a.uniform1f(u.d,s)
break
case C.e:this.T(p,this.cy.d)
z=this.a
u=this.cy.d
z.af(z.dl,z.bw,u)
u=this.a
z=this.cy.f
u=u.bv
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bu
z.a.uniform1f(z.d,s)
break
case C.f:this.T(p,this.cy.e)
z=this.a
u=this.cy.e
z.a7(z.dm,z.bw,u)
u=this.a
z=this.cy.f
u=u.bv
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bu
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bx
z.a.uniform1f(z.d,t)
break
case C.e:this.T(p,this.db.d)
z=this.a
t=this.db.d
z.af(z.dn,z.by,t)
t=this.a
z=this.db.f
t=t.bx
t.a.uniform1f(t.d,z)
break
case C.f:this.T(p,this.db.e)
z=this.a
t=this.db.e
z.a7(z.dq,z.by,t)
t=this.a
z=this.db.f
t=t.bx
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.c0(a)
z.aQ(a)
z.i8(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.hl()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cL().av}},il:{"^":"cY;0f,a,b,0c,0d,0e"},cY:{"^":"b;",
Z:[function(a){this.a.Z(H.e(a,"$isu"))},function(){return this.Z(null)},"eW","$1","$0","gbg",0,2,1],
aT:["ei",function(){}],
fu:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.h(this.gbg(),{func:1,ret:-1,args:[D.u]})
C.a.L(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.h(this.gbg(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H(this.b+".texture2D",x,this.d,this,[T.eH])
z.b=!0
this.a.Z(z)}},
fv:function(a){}},im:{"^":"cY;a,b,0c,0d,0e"},b6:{"^":"cY;0f,a,b,0c,0d,0e",
cX:function(a){var z,y
if(!J.O(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.a_])
y.b=!0
this.a.Z(y)}},
aT:["bG",function(){this.ei()
this.cX(new V.a_(1,1,1))}],
sa4:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.aT()
z=this.a
z.a=null
z.Z(null)}this.cX(b)}},ip:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
ft:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.Z(z)}},
aT:function(){this.bG()
this.ft(1)}},iq:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
bU:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.Z(z)}},
aT:function(){this.bG()
this.bU(100)}},d9:{"^":"b;"}}],["","",,T,{"^":"",da:{"^":"cI;"},eH:{"^":"da;0b,0c,0d,0e,0f,0r,0x,0y,a"},jj:{"^":"b;a,0b,0c,0d,0e",
hB:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,10497)
z.texParameteri(3553,10243,10497)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.eH(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.R()
z=W.aa
W.a1(x,"load",H.h(new T.jk(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hA:function(a,b){return this.hB(a,!1,!1,!1,b)},
fp:function(a,b,c){var z,y,x,w
b=V.dB(b,2)
z=V.dB(a.width,2)
y=V.dB(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cN(null,null)
x.width=z
x.height=y
w=H.e(C.k.ea(x,"2d"),"$isdS")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mi(w.getImageData(0,0,x.width,x.height))}}},jk:{"^":"n:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fp(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.W.i2(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.hm()}++x.e}}}],["","",,X,{"^":"",dR:{"^":"b;",$isaI:1},hM:{"^":"eF;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z}},iC:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
aS:[function(a){var z
H.e(a,"$isu")
z=this.e
if(!(z==null))z.F(a)},function(){return this.aS(null)},"ic","$1","$0","gcD",0,2,1],
sa9:function(a){var z,y,x
if(!J.O(this.a,a)){z=this.a
if(z!=null){z=z.gB()
z.toString
y=H.h(this.gcD(),{func:1,ret:-1,args:[D.u]})
C.a.L(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gcD(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H("mover",x,this.a,this,[U.ad])
z.b=!0
this.aS(z)}},
$isaI:1,
$isdR:1},eF:{"^":"b;"}}],["","",,B,{"^":"",
mT:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.r.fs(x,(x&&C.r).cG(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.aa
W.a1(z,"scroll",H.h(new B.mU(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
mV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
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
u=W.cN(null,null)
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
B.mT(a,y,!1,"../resources/SnowTop.png")},
mW:function(a){P.jr(C.F,new B.mX(a))},
iQ:{"^":"b;a,0b",
d2:function(a,b,c,d){var z,y,x,w,v,u,t
H.h(c,{func:1,ret:-1})
if(this.b==null)return
z=this.a
if(P.df().gbA().k(0,z)==null)if(d){c.$0()
this.e4(b)
y=!0}else y=!1
else if(P.df().gbA().k(0,z)===b){c.$0()
y=!0}else y=!1
x=document
w=x.createElement("label")
v=w.style
v.whiteSpace="nowrap"
J.dH(this.b).h(0,w)
u=W.hP("radio")
u.checked=y
u.name=z
z=W.aa
W.a1(u,"change",H.h(new B.iR(this,u,b,c),{func:1,ret:-1,args:[z]}),!1,z)
w.appendChild(u)
t=x.createElement("span")
t.textContent=b
w.appendChild(t)
J.dH(this.b).h(0,x.createElement("br"))},
aV:function(a,b,c){return this.d2(a,b,c,!1)},
e4:function(a){var z,y,x,w,v
z=P.df()
y=P.i
x=P.i4(z.gbA(),y,y)
x.m(0,this.a,a)
w=z.dY(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.le([],[]).ct(""),"",v)}},
iR:{"^":"n:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.a.e4(this.c)
this.d.$0()}}},
mU:{"^":"n:14;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.l(-0.05*C.h.ac(this.b.scrollTop))+"px"
z.top=y}},
mX:{"^":"n:49;a",
$1:function(a){H.e(a,"$isbg")
P.dC(C.h.e3(this.a.ghs(),2)+" fps")}}}],["","",,K,{"^":"",
fW:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
B.mV("Test 026",H.f(["shapes"],[P.i]),"Test of the Material Lighting shader with a textured directional light. The texturing of the directional light is being modified with a matrix. The texture metrix is updated using the pre-update mathods. Use Ctrl plus the mouse to move the center object.")
z=document
y=z.getElementById("threeDart")
if(y==null)H.t(P.v("Failed to find an element with the identifier, threeDart."))
x=E.jp(y,!0,!0,!0,!1)
w=D.e3(null,null)
w.sa9(U.bZ(V.em(0.3,0.4,1,null)))
v=D.e3(null,null)
v.sa9(U.bZ(V.em(-0.3,-0.4,-1,null)))
v.sa4(0,new V.a_(0.125,0.125,0.125))
u=new O.ii()
t=O.cO(V.ak)
u.e=t
t.bb(u.geT(),u.geU())
t=new O.b6(u,"emission")
t.c=C.c
t.f=new V.a_(0,0,0)
u.f=t
t=new O.b6(u,"ambient")
t.c=C.c
t.f=new V.a_(0,0,0)
u.r=t
t=new O.b6(u,"diffuse")
t.c=C.c
t.f=new V.a_(0,0,0)
u.x=t
t=new O.b6(u,"invDiffuse")
t.c=C.c
t.f=new V.a_(0,0,0)
u.y=t
t=new O.iq(u,"specular")
t.c=C.c
t.f=new V.a_(0,0,0)
t.ch=100
u.z=t
t=new O.im(u,"bump")
t.c=C.c
u.Q=t
u.ch=null
t=new O.b6(u,"reflect")
t.c=C.c
t.f=new V.a_(0,0,0)
u.cx=t
t=new O.ip(u,"refract")
t.c=C.c
t.f=new V.a_(0,0,0)
t.ch=1
u.cy=t
t=new O.il(u,"alpha")
t.c=C.c
t.f=1
u.db=t
t=new D.hY()
t.bH(D.a3)
t.e=H.f([],[D.ch])
t.f=H.f([],[D.iE])
t.r=H.f([],[D.ja])
t.x=H.f([],[D.jl])
t.y=H.f([],[D.jm])
t.z=H.f([],[D.jn])
t.Q=null
t.ch=null
t.cz(t.geS(),t.gfc(),t.gfe())
u.dx=t
s=t.Q
if(s==null){s=D.R()
t.Q=s
t=s}else t=s
s={func:1,ret:-1,args:[D.u]}
r=H.h(u.gfn(),s)
C.a.h(t.a,r)
r=u.dx
t=r.ch
if(t==null){t=D.R()
r.ch=t}r=H.h(u.gbg(),s)
C.a.h(t.a,r)
u.dy=null
u.dx.h(0,w)
u.dx.h(0,v)
u.f.sa4(0,new V.a_(0,0,0))
r=u.r
r.sa4(0,new V.a_(0.1,0.1,0.1))
t=u.x
t.sa4(0,new V.a_(0.8,0.8,0.8))
t=u.z
t.sa4(0,new V.a_(0.2,0.2,0.2))
t=u.z
if(t.c===C.c){t.c=C.i
t.bG()
t.bU(100)
r=t.a
r.a=null
r.Z(null)}t.bU(100)
t=u.x
r=x.f.hA("../resources/Test.png",!0)
q=t.c
if(q!==C.e){if(q===C.c)t.aT()
t.c=C.e
t.fv(null)
q=t.a
q.a=null
q.Z(null)}t.fu(r)
p=E.e5(null,!0,null,"",null,null)
p.sa9(U.f5(!1,!0,x.r,!1,!1,!1,null,!1))
p.sae(0,F.h0(30,1,15,0.5))
o=E.e5(null,!0,null,"",null,null)
o.sa9(U.bZ(V.ay(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
t=F.du(1,null,null,1)
t.aZ()
o.sae(0,t)
n=new U.e8()
n.bH(U.ad)
n.bb(n.geR(),n.gfd())
n.e=null
n.f=V.c4()
n.r=0
n.h(0,U.f5(!1,!1,x.r,!1,!1,!1,null,!1))
n.h(0,U.bZ(V.d_(3.141592653589793)))
n.h(0,U.bZ(V.ay(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=U.ex(0.5,0.7,0.3,0,0,0)
l=U.ex(0,0.1,0,0,0,0)
t=new M.hE()
r=O.cO(E.aH)
t.d=r
r.bb(t.geX(),t.geY())
t.e=null
t.f=null
t.r=null
t.x=null
k=new X.iC()
k.b=1.0471975511965976
k.c=0.1
k.d=2000
k.sa9(null)
r=k.b
if(!$.o.$2(r,1.0471975511965976)){j=k.b
k.b=1.0471975511965976
r=new D.H("fov",j,1.0471975511965976,k,[P.q])
r.b=!0
k.aS(r)}r=k.c
if(!$.o.$2(r,0.1)){j=k.c
k.c=0.1
r=new D.H("near",j,0.1,k,[P.q])
r.b=!0
k.aS(r)}r=k.d
if(!$.o.$2(r,2000)){j=k.d
k.d=2000
r=new D.H("far",j,2000,k,[P.q])
r.b=!0
k.aS(r)}r=t.a
if(r!==k){if(r!=null){r=r.gB()
r.toString
q=H.h(t.gai(),s)
C.a.L(r.a,q)}j=t.a
t.a=k
r=k.gB()
r.toString
q=H.h(t.gai(),s)
C.a.h(r.a,q)
r=new D.H("camera",j,t.a,t,[X.dR])
r.b=!0
t.aE(r)}i=new X.hM()
r=new V.b0(0,0,0,1)
i.a=r
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
r=V.ev(0,0,1,1)
i.r=r
r=t.b
if(r!==i){if(r!=null){r=r.gB()
r.toString
q=H.h(t.gai(),s)
C.a.L(r.a,q)}j=t.b
t.b=i
r=i.gB()
r.toString
q=H.h(t.gai(),s)
C.a.h(r.a,q)
r=new D.H("target",j,t.b,t,[X.eF])
r.b=!0
t.aE(r)}t.se0(null)
t.se0(u)
t.d.h(0,p)
t.d.h(0,o)
t.a.sa9(n)
r=t.e
if(r==null){r=D.R()
t.e=r}q=H.h(new K.mG(u,m,l),s)
C.a.h(r.a,q)
r=x.d
if(r!==t){if(r!=null){r=r.gB()
r.toString
q=H.h(x.gcB(),s)
C.a.L(r.a,q)}x.d=t
t=t.gB()
t.toString
s=H.h(x.gcB(),s)
C.a.h(t.a,s)
x.ep()}t=new B.iQ("shapes")
z=z.getElementById("shapes")
t.b=z
if(z==null)H.t("Failed to find "+t.i(0)+"._elemId for RadioGroup")
t.aV(0,"Cube",new K.mH(p))
t.aV(0,"Cylinder",new K.mI(p))
t.aV(0,"Cone",new K.mJ(p))
t.aV(0,"Sphere",new K.mK(p))
t.d2(0,"Toroid",new K.mL(p),!0)
t.aV(0,"Knot",new K.mM(p))
B.mW(x)},
mG:{"^":"n:9;a,b,c",
$1:function(a){var z,y,x,w,v,u,t
z=H.k(H.e(a,"$isu"),"$iseB").c
y=this.a
x=this.b.an(0,z,null)
if(!J.O(y.d,x)){w=y.d
v=w==null
u=x==null
if(!(!v&&u))v=v&&!u
else v=!0
if(v)y.a=null
y.d=x
x=new D.H("colorMatrix",w,x,y,[V.ak])
x.b=!0
y.Z(x)}t=V.is(this.c.an(0,z,null))
if(!J.O(y.b,t)){x=y.b
w=x==null&&!0
if(w)y.a=null
y.b=t
x=new D.H("texture2DMatrix",x,t,y,[V.bE])
x.b=!0
y.Z(x)}}},
mH:{"^":"n:0;a",
$0:function(){this.a.sae(0,F.du(1,null,null,1))}},
mI:{"^":"n:0;a",
$0:function(){this.a.sae(0,F.fM(1,!0,!0,1,40,1))}},
mJ:{"^":"n:0;a",
$0:function(){this.a.sae(0,F.fM(1,!0,!1,1,40,0))}},
mK:{"^":"n:0;a",
$0:function(){this.a.sae(0,F.mY(6,null,6))}},
mL:{"^":"n:0;a",
$0:function(){this.a.sae(0,F.h0(30,1,15,0.5))}},
mM:{"^":"n:0;a",
$0:function(){this.a.sae(0,F.mD(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ed.prototype
return J.ec.prototype}if(typeof a=="string")return J.c2.prototype
if(a==null)return J.ee.prototype
if(typeof a=="boolean")return J.hT.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c3.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.aD=function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c3.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.ca=function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c3.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.mt=function(a){if(typeof a=="number")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c7.prototype
return a}
J.mu=function(a){if(typeof a=="number")return J.c1.prototype
if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c7.prototype
return a}
J.dx=function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c7.prototype
return a}
J.aT=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c3.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.O=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).u(a,b)}
J.h1=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mt(a).M(a,b)}
J.dE=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mu(a).j(a,b)}
J.dF=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aD(a).k(a,b)}
J.cF=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fT(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ca(a).m(a,b,c)}
J.h2=function(a,b){return J.dx(a).G(a,b)}
J.h3=function(a,b,c){return J.aT(a).fl(a,b,c)}
J.h4=function(a,b,c,d){return J.aT(a).d3(a,b,c,d)}
J.h5=function(a,b){return J.dx(a).U(a,b)}
J.cG=function(a,b,c){return J.aD(a).hf(a,b,c)}
J.cH=function(a,b){return J.ca(a).I(a,b)}
J.h6=function(a,b,c,d){return J.ca(a).aw(a,b,c,d)}
J.dG=function(a,b){return J.ca(a).J(a,b)}
J.dH=function(a){return J.aT(a).gc5(a)}
J.b_=function(a){return J.K(a).gS(a)}
J.bu=function(a){return J.ca(a).ga_(a)}
J.as=function(a){return J.aD(a).gl(a)}
J.h7=function(a,b){return J.aT(a).hX(a,b)}
J.h8=function(a,b){return J.aT(a).sa0(a,b)}
J.a9=function(a){return J.K(a).i(a)}
I.aq=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cM.prototype
C.r=W.hr.prototype
C.G=J.r.prototype
C.a=J.b5.prototype
C.H=J.ec.prototype
C.d=J.ed.prototype
C.I=J.ee.prototype
C.h=J.c1.prototype
C.b=J.c2.prototype
C.P=J.c3.prototype
C.U=H.d2.prototype
C.V=W.iy.prototype
C.y=J.iD.prototype
C.W=P.d5.prototype
C.q=J.c7.prototype
C.z=W.bN.prototype
C.A=W.ke.prototype
C.C=new P.hd(!1)
C.B=new P.hc(C.C)
C.D=new P.iB()
C.E=new P.k_()
C.j=new P.l0()
C.c=new A.cf(0,"ColorSourceType.None")
C.i=new A.cf(1,"ColorSourceType.Solid")
C.e=new A.cf(2,"ColorSourceType.Texture2D")
C.f=new A.cf(3,"ColorSourceType.TextureCube")
C.F=new P.bx(5e6)
C.J=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.K=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.L=function(getTagFallback) {
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
C.M=function() {
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
C.N=function(hooks) {
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
C.O=function(hooks) {
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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=H.f(I.aq([127,2047,65535,1114111]),[P.m])
C.m=H.f(I.aq([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.f(I.aq([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.f(I.aq([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.f(I.aq([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.p=H.f(I.aq([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.w=H.f(I.aq([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.S=H.f(I.aq([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.x=H.f(I.aq([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.f(I.aq([]),[P.i])
C.T=new H.hq(0,{},C.Q,[P.i,P.i])
C.l=new P.jT(!1)
$.aw=0
$.bv=null
$.dM=null
$.dp=!1
$.fR=null
$.fI=null
$.fZ=null
$.cz=null
$.cC=null
$.dy=null
$.bn=null
$.bT=null
$.bU=null
$.dq=!1
$.U=C.j
$.e1=null
$.e0=null
$.e_=null
$.dZ=null
$.o=V.ir()
$.er=null
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
I.$lazy(y,x,w)}})(["dY","$get$dY",function(){return H.fQ("_$dart_dartClosure")},"cT","$get$cT",function(){return H.fQ("_$dart_js")},"eL","$get$eL",function(){return H.aA(H.cs({
toString:function(){return"$receiver$"}}))},"eM","$get$eM",function(){return H.aA(H.cs({$method$:null,
toString:function(){return"$receiver$"}}))},"eN","$get$eN",function(){return H.aA(H.cs(null))},"eO","$get$eO",function(){return H.aA(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eS","$get$eS",function(){return H.aA(H.cs(void 0))},"eT","$get$eT",function(){return H.aA(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eQ","$get$eQ",function(){return H.aA(H.eR(null))},"eP","$get$eP",function(){return H.aA(function(){try{null.$method$}catch(z){return z.message}}())},"eV","$get$eV",function(){return H.aA(H.eR(void 0))},"eU","$get$eU",function(){return H.aA(function(){try{(void 0).$method$}catch(z){return z.message}}())},"di","$get$di",function(){return P.kf()},"bV","$get$bV",function(){return[]},"f6","$get$f6",function(){return P.jX()},"fc","$get$fc",function(){return H.iw(H.bm(H.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fy","$get$fy",function(){return P.iW("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fE","$get$fE",function(){return P.m_()},"dX","$get$dX",function(){return{}},"f9","$get$f9",function(){return Z.ao(0)},"f7","$get$f7",function(){return Z.ao(511)},"aO","$get$aO",function(){return Z.ao(1)},"aN","$get$aN",function(){return Z.ao(2)},"aM","$get$aM",function(){return Z.ao(4)},"aP","$get$aP",function(){return Z.ao(8)},"aQ","$get$aQ",function(){return Z.ao(16)},"bL","$get$bL",function(){return Z.ao(32)},"bM","$get$bM",function(){return Z.ao(64)},"f8","$get$f8",function(){return Z.ao(96)},"bk","$get$bk",function(){return Z.ao(128)},"aL","$get$aL",function(){return Z.ao(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[W.az]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.m,[P.j,E.aH]]},{func:1,ret:P.G,args:[D.u]},{func:1,ret:P.G,args:[F.af,P.q,P.q]},{func:1,ret:P.G,args:[F.aj]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.G,args:[W.aa]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:V.Y,args:[P.q]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.m,[P.j,D.a3]]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[P.m,[P.j,U.ad]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.m,[P.j,V.ak]]},{func:1,ret:P.G,args:[,]},{func:1,ret:W.a2,args:[W.L]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.at]},{func:1,ret:P.ah,args:[W.L]},{func:1,ret:P.G,args:[P.W]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.ah,args:[P.q,P.q]},{func:1,ret:[P.aR,,],args:[,]},{func:1,ret:-1,args:[W.bN]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ah,args:[[P.j,D.a3]]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,args:[,P.i]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.Q,args:[P.m]},{func:1,args:[P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,ret:P.G,args:[P.bg]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.n1(d||a)
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
Isolate.dv=a.dv
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
if(typeof dartMainRunner==="function")dartMainRunner(K.fW,[])
else K.fW([])})})()
//# sourceMappingURL=test.dart.js.map
