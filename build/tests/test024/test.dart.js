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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dx=function(){}
var dart=[["","",,H,{"^":"",nX:{"^":"b;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
dC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cF:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dA==null){H.mD()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c8("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cY()]
if(v!=null)return v
v=H.mI(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cY(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
q:{"^":"b;",
u:function(a,b){return a===b},
gT:function(a){return H.bL(a)},
i:["ef",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hW:{"^":"q;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isah:1},
ec:{"^":"q;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isG:1},
cZ:{"^":"q;",
gT:function(a){return 0},
i:["eg",function(a){return String(a)}]},
iF:{"^":"cZ;"},
c9:{"^":"cZ;"},
c3:{"^":"cZ;",
i:function(a){var z=a[$.$get$dZ()]
if(z==null)return this.eg(a)
return"JavaScript function for "+H.l(J.aa(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscU:1},
b9:{"^":"q;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.t(P.C("add"))
a.push(b)},
N:function(a,b){var z
if(!!a.fixed$length)H.t(P.C("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b4(a))}},
E:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hz:function(a){return this.E(a,"")},
hr:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b4(a))}return y},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bI:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a0(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.y(a,0)])
return H.e(a.slice(b,c),[H.y(a,0)])},
gaz:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hU())},
ay:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.t(P.C("fill range"))
P.aL(b,c,a.length,null,null,null)
for(z=b;z.O(0,c);z=z.D(0,1))a[z]=d},
bp:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.cW(a,"[","]")},
ga_:function(a){return new J.au(a,a.length,0,[H.y(a,0)])},
gT:function(a){return H.bL(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.C("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cg(b,"newLength",null))
if(b<0)throw H.a(P.a0(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b>=a.length||b<0)throw H.a(H.aE(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.t(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b>=a.length||b<0)throw H.a(H.aE(a,b))
a[b]=c},
$isj:1,
$isc:1,
p:{
hV:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cg(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a0(a,0,4294967295,"length",null))
return J.ea(new Array(a),b)},
ea:function(a,b){return J.bE(H.e(a,[b]))},
bE:function(a){H.bY(a)
a.fixed$length=Array
return a}}},
nW:{"^":"b9;$ti"},
au:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.A(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c1:{"^":"q;",
ghy:function(a){return a===0?1/a<0:a<0},
dE:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.C(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.C(""+a+".round()"))},
e4:function(a,b){var z
if(b>20)throw H.a(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghy(a))return"-"+z
return z},
b9:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.V(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.C("Unexpected toString result: "+z))
x=J.aF(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ag(b))
return a*b},
bd:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ej:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d1(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.d1(a,b)},
d1:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.C("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aH:function(a,b){var z
if(a>0)z=this.d_(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fC:function(a,b){if(b<0)throw H.a(H.ag(b))
return this.d_(a,b)},
d_:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.a(H.ag(b))
return a<b},
$isr:1,
$isW:1},
eb:{"^":"c1;",$ism:1},
hX:{"^":"c1;"},
c2:{"^":"q;",
V:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b<0)throw H.a(H.aE(a,b))
if(b>=a.length)H.t(H.aE(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aE(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.K(b)
if(typeof b!=="string")throw H.a(P.cg(b,null,null))
return a+b},
aO:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ag(b))
c=P.aL(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ag(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a7:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ag(c))
if(typeof c!=="number")return c.O()
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a6:function(a,b){return this.a7(a,b,0)},
v:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ag(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.a(P.ct(b,null,null))
if(b>c)throw H.a(P.ct(b,null,null))
if(c>a.length)throw H.a(P.ct(c,null,null))
return a.substring(b,c)},
aA:function(a,b){return this.v(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hN:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ac:function(a,b){return this.hN(a,b," ")},
dM:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dL:function(a,b){return this.dM(a,b,0)},
hg:function(a,b,c){if(c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
return H.h0(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iser:1,
$isi:1}}],["","",,H,{"^":"",
cG:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hU:function(){return new P.jh("No element")},
a4:{"^":"jO;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.V(this.a,b)},
$ascx:function(){return[P.m]},
$asx:function(){return[P.m]},
$asj:function(){return[P.m]},
$asc:function(){return[P.m]}},
hE:{"^":"j;"},
eh:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aF(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b4(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
ij:{"^":"j;a,b,$ti",
ga_:function(a){return new H.ik(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.at(this.a)},
J:function(a,b){return this.b.$1(J.cL(this.a,b))},
$asj:function(a,b){return[b]}},
ik:{"^":"cX;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascX:function(a,b){return[b]}},
ki:{"^":"j;a,b,$ti",
ga_:function(a){return new H.kj(J.by(this.a),this.b,this.$ti)}},
kj:{"^":"cX;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cl:{"^":"b;$ti"},
cx:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.ay(this,"cx",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))},
ay:function(a,b,c,d){H.z(d,H.ay(this,"cx",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))}},
jO:{"^":"cp+cx;"}}],["","",,H,{"^":"",
hs:function(){throw H.a(P.C("Cannot modify unmodifiable Map"))},
my:function(a){return init.types[H.D(a)]},
fU:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aa(a)
if(typeof z!=="string")throw H.a(H.ag(a))
return z},
bL:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iP:function(a,b){var z,y,x,w,v,u
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
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bd:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.M(a).$isc9){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.aA(w,1)
r=H.dB(H.bY(H.b0(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iH:function(){if(!!self.location)return self.location.href
return},
et:function(a){var z,y,x,w,v
H.bY(a)
z=J.at(a)
if(typeof z!=="number")return z.ec()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iQ:function(a){var z,y,x,w
z=H.e([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ag(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aH(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ag(w))}return H.et(z)},
eu:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ag(x))
if(x<0)throw H.a(H.ag(x))
if(x>65535)return H.iQ(a)}return H.et(a)},
iR:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ec()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cr:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aH(z,10))>>>0,56320|z&1023)}}throw H.a(P.a0(a,0,1114111,null,null))},
ae:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iO:function(a){return a.b?H.ae(a).getUTCFullYear()+0:H.ae(a).getFullYear()+0},
iM:function(a){return a.b?H.ae(a).getUTCMonth()+1:H.ae(a).getMonth()+1},
iI:function(a){return a.b?H.ae(a).getUTCDate()+0:H.ae(a).getDate()+0},
iJ:function(a){return a.b?H.ae(a).getUTCHours()+0:H.ae(a).getHours()+0},
iL:function(a){return a.b?H.ae(a).getUTCMinutes()+0:H.ae(a).getMinutes()+0},
iN:function(a){return a.b?H.ae(a).getUTCSeconds()+0:H.ae(a).getSeconds()+0},
iK:function(a){return a.b?H.ae(a).getUTCMilliseconds()+0:H.ae(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ag(a))},
d:function(a,b){if(a==null)J.at(a)
throw H.a(H.aE(a,b))},
aE:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.D(J.at(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.R(b,a,"index",null,z)
return P.ct(b,"index",null)},
ms:function(a,b,c){if(a>c)return new P.cs(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cs(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
ag:function(a){return new P.aG(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.eq()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h2})
z.name=""}else z.toString=H.h2
return z},
h2:function(){return J.aa(this.dartException)},
t:function(a){throw H.a(a)},
A:function(a){throw H.a(P.b4(a))},
as:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aH(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d_(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ep(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eN()
u=$.$get$eO()
t=$.$get$eP()
s=$.$get$eQ()
r=$.$get$eU()
q=$.$get$eV()
p=$.$get$eS()
$.$get$eR()
o=$.$get$eX()
n=$.$get$eW()
m=v.ab(y)
if(m!=null)return z.$1(H.d_(H.K(y),m))
else{m=u.ab(y)
if(m!=null){m.method="call"
return z.$1(H.d_(H.K(y),m))}else{m=t.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=r.ab(y)
if(m==null){m=q.ab(y)
if(m==null){m=p.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=o.ab(y)
if(m==null){m=n.ab(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ep(H.K(y),m))}}return z.$1(new H.jN(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eA()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eA()
return a},
bw:function(a){var z
if(a==null)return new H.fr(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fr(a)},
mv:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mF:function(a,b,c,d,e,f){H.f(a,"$iscU")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bu:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mF)
a.$identity=z
return z},
ho:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$isc){z.$reflectionInfo=d
x=H.iW(z).r}else x=d
w=e?Object.create(new H.ji().constructor.prototype):Object.create(new H.cO(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.D()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dV(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.my,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dO:H.cP
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dV(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hl:function(a,b,c,d){var z=H.cP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dV:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hn(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hl(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.D()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bz
if(v==null){v=H.ch("self")
$.bz=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.D()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bz
if(v==null){v=H.ch("self")
$.bz=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hm:function(a,b,c,d){var z,y
z=H.cP
y=H.dO
switch(b?-1:a){case 0:throw H.a(H.j5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hn:function(a,b){var z,y,x,w,v,u,t,s
z=$.bz
if(z==null){z=H.ch("self")
$.bz=z}y=$.dN
if(y==null){y=H.ch("receiver")
$.dN=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hm(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.az
if(typeof y!=="number")return y.D()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.D()
$.az=y+1
return new Function(z+y+"}")()},
du:function(a,b,c,d,e,f,g){var z,y
z=J.bE(H.bY(b))
H.D(c)
y=!!J.M(d).$isc?J.bE(d):d
return H.ho(a,z,c,y,!!e,f,g)},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ax(a,"String"))},
mt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"double"))},
mR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"num"))},
fN:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ax(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ax(a,"int"))},
fZ:function(a,b){throw H.a(H.ax(a,H.K(b).substring(3)))},
mT:function(a,b){var z=J.aF(b)
throw H.a(H.hk(a,z.v(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.fZ(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.mT(a,b)},
bY:function(a){if(a==null)return a
if(!!J.M(a).$isc)return a
throw H.a(H.ax(a,"List"))},
fW:function(a,b){if(a==null)return a
if(!!J.M(a).$isc)return a
if(J.M(a)[b])return a
H.fZ(a,b)},
fQ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
cb:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fQ(J.M(a))
if(z==null)return!1
y=H.fT(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dq)return a
$.dq=!0
try{if(H.cb(a,b))return a
z=H.ce(b)
y=H.ax(a,z)
throw H.a(y)}finally{$.dq=!1}},
dy:function(a,b){if(a!=null&&!H.dt(a,b))H.t(H.ax(a,H.ce(b)))
return a},
fI:function(a){var z
if(a instanceof H.n){z=H.fQ(J.M(a))
if(z!=null)return H.ce(z)
return"Closure"}return H.bd(a)},
n_:function(a){throw H.a(new P.hv(H.K(a)))},
fR:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b0:function(a){if(a==null)return
return a.$ti},
p3:function(a,b,c){return H.bx(a["$as"+H.l(c)],H.b0(b))},
b_:function(a,b,c,d){var z
H.K(c)
H.D(d)
z=H.bx(a["$as"+H.l(c)],H.b0(b))
return z==null?null:z[d]},
ay:function(a,b,c){var z
H.K(b)
H.D(c)
z=H.bx(a["$as"+H.l(b)],H.b0(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.D(b)
z=H.b0(a)
return z==null?null:z[b]},
ce:function(a){var z=H.b1(a,null)
return z},
b1:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dB(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.ma(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ma:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b1(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b1(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b1(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b1(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mu(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.K(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dB:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b1(u,c)}v="<"+z.i(0)+">"
return v},
bx:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bt:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b0(a)
y=J.M(a)
if(y[b]==null)return!1
return H.fL(H.bx(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.K(b)
H.bY(c)
H.K(d)
if(a==null)return a
z=H.bt(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dB(c,0,null)
throw H.a(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fL:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
p1:function(a,b,c){return a.apply(b,H.bx(J.M(b)["$as"+H.l(c)],H.b0(b)))},
fV:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.fV(z)}return!1},
dt:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.fV(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dt(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cb(a,b)}y=J.M(a).constructor
x=H.b0(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ar(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dt(a,b))throw H.a(H.ax(a,H.ce(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fT(a,b,c,d)
if('func' in a)return c.builtin$cls==="cU"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"bC" in y.prototype))return!1
w=y.prototype["$as"+"bC"]
v=H.bx(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ce(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fL(H.bx(r,z),b,u,d)},
fT:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ar(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ar(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ar(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ar(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mQ(m,b,l,d)},
mQ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
p2:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
mI:function(a){var z,y,x,w,v,u
z=H.K($.fS.$1(a))
y=$.cE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cH[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.K($.fK.$2(a,z))
if(z!=null){y=$.cE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cH[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cI(x)
$.cE[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cH[z]=x
return x}if(v==="-"){u=H.cI(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fY(a,x)
if(v==="*")throw H.a(P.c8(z))
if(init.leafTags[z]===true){u=H.cI(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fY(a,x)},
fY:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dC(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cI:function(a){return J.dC(a,!1,null,!!a.$isF)},
mP:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cI(z)
else return J.dC(z,c,null,null)},
mD:function(){if(!0===$.dA)return
$.dA=!0
H.mE()},
mE:function(){var z,y,x,w,v,u,t,s
$.cE=Object.create(null)
$.cH=Object.create(null)
H.mz()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h_.$1(v)
if(u!=null){t=H.mP(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mz:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.bs(C.I,H.bs(C.N,H.bs(C.u,H.bs(C.u,H.bs(C.M,H.bs(C.J,H.bs(C.K(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fS=new H.mA(v)
$.fK=new H.mB(u)
$.h_=new H.mC(t)},
bs:function(a,b){return a(b)||b},
h0:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h1:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hr:{"^":"b;$ti",
i:function(a){return P.d1(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hs()},
$isH:1},
ht:{"^":"hr;a,b,c,$ti",
gl:function(a){return this.a},
bq:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bq(0,b))return
return this.cR(b)},
cR:function(a){return this.b[H.K(a)]},
K:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cR(v),z))}}},
iV:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iW:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bE(z)
y=z[0]
x=z[1]
return new H.iV(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jA:{"^":"b;a,b,c,d,e,f",
ab:function(a){var z,y,x
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
aC:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eT:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iC:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
ep:function(a,b){return new H.iC(a,b==null?null:b.method)}}},
i_:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d_:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i_(a,y,z?null:b.receiver)}}},
jN:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n1:{"^":"n:16;a",
$1:function(a){if(!!J.M(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fr:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaw:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.bd(this).trim()+"'"},
gea:function(){return this},
$iscU:1,
gea:function(){return this}},
eF:{"^":"n;"},
ji:{"^":"eF;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cO:{"^":"eF;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cO))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bL(this.a)
else y=typeof z!=="object"?J.b2(z):H.bL(z)
return(y^H.bL(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
p:{
cP:function(a){return a.a},
dO:function(a){return a.c},
ch:function(a){var z,y,x,w,v
z=new H.cO("self","target","receiver","name")
y=J.bE(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jB:{"^":"a5;a",
i:function(a){return this.a},
p:{
ax:function(a,b){return new H.jB("TypeError: "+H.l(P.ck(a))+": type '"+H.fI(a)+"' is not a subtype of type '"+b+"'")}}},
hj:{"^":"a5;a",
i:function(a){return this.a},
p:{
hk:function(a,b){return new H.hj("CastError: "+H.l(P.ck(a))+": type '"+H.fI(a)+"' is not a subtype of type '"+b+"'")}}},
j4:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j5:function(a){return new H.j4(a)}}},
aX:{"^":"ig;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gan:function(a){return new H.i4(this,[H.y(this,0)])},
bq:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cO(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cO(y,b)}else return this.hv(b)},
hv:function(a){var z=this.d
if(z==null)return!1
return this.cj(this.bR(z,this.ci(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bg(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bg(w,b)
x=y==null?null:y.b
return x}else return this.hw(b)},
hw:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bR(z,this.ci(a))
x=this.cj(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bS()
this.b=z}this.cG(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bS()
this.c=y}this.cG(y,b,c)}else this.hx(b,c)},
hx:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.bS()
this.d=z}y=this.ci(a)
x=this.bR(z,y)
if(x==null)this.bZ(z,y,[this.bT(a,b)])
else{w=this.cj(x,a)
if(w>=0)x[w].b=b
else x.push(this.bT(a,b))}},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b4(this))
z=z.c}},
cG:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.bg(a,b)
if(z==null)this.bZ(a,b,this.bT(b,c))
else z.b=c},
eP:function(){this.r=this.r+1&67108863},
bT:function(a,b){var z,y
z=new H.i3(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eP()
return z},
ci:function(a){return J.b2(a)&0x3ffffff},
cj:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.d1(this)},
bg:function(a,b){return a[b]},
bR:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
eI:function(a,b){delete a[b]},
cO:function(a,b){return this.bg(a,b)!=null},
bS:function(){var z=Object.create(null)
this.bZ(z,"<non-identifier-key>",z)
this.eI(z,"<non-identifier-key>")
return z},
$isef:1},
i3:{"^":"b;a,b,0c,0d"},
i4:{"^":"hE;a,$ti",
gl:function(a){return this.a.a},
ga_:function(a){var z,y
z=this.a
y=new H.i5(z,z.r,this.$ti)
y.c=z.e
return y}},
i5:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mA:{"^":"n:16;a",
$1:function(a){return this.a(a)}},
mB:{"^":"n:39;a",
$2:function(a,b){return this.a(a,b)}},
mC:{"^":"n:28;a",
$1:function(a){return this.a(H.K(a))}},
hY:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iser:1,
$isiX:1,
p:{
hZ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.X("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mu:function(a){return J.ea(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bq:function(a){return a},
iy:function(a){return new Int8Array(a)},
aD:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aE(b,a))},
m4:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.ms(a,b,c))
return b},
eo:{"^":"q;",$iseo:1,"%":"ArrayBuffer"},
d5:{"^":"q;",$isd5:1,"%":"DataView;ArrayBufferView;d4|fl|fm|iz|fn|fo|aZ"},
d4:{"^":"d5;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dx},
iz:{"^":"fm;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mt(c)
H.aD(b,a,a.length)
a[b]=c},
$ascl:function(){return[P.r]},
$asx:function(){return[P.r]},
$isj:1,
$asj:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
"%":"Float32Array|Float64Array"},
aZ:{"^":"fo;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aD(b,a,a.length)
a[b]=c},
$ascl:function(){return[P.m]},
$asx:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
o7:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int16Array"},
o8:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int32Array"},
o9:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oa:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ob:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oc:{"^":"aZ;",
gl:function(a){return a.length},
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d6:{"^":"aZ;",
gl:function(a){return a.length},
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
bI:function(a,b,c){return new Uint8Array(a.subarray(b,H.m4(b,c,a.length)))},
$isd6:1,
$isO:1,
"%":";Uint8Array"},
fl:{"^":"d4+x;"},
fm:{"^":"fl+cl;"},
fn:{"^":"d4+x;"},
fo:{"^":"fn+cl;"}}],["","",,P,{"^":"",
kl:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mh()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bu(new P.kn(z),1)).observe(y,{childList:true})
return new P.km(z,y,x)}else if(self.setImmediate!=null)return P.mi()
return P.mj()},
oR:[function(a){self.scheduleImmediate(H.bu(new P.ko(H.h(a,{func:1,ret:-1})),0))},"$1","mh",4,0,11],
oS:[function(a){self.setImmediate(H.bu(new P.kp(H.h(a,{func:1,ret:-1})),0))},"$1","mi",4,0,11],
oT:[function(a){P.dd(C.r,H.h(a,{func:1,ret:-1}))},"$1","mj",4,0,11],
dd:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.d.a3(a.a,1000)
return P.lo(z<0?0:z,b)},
eI:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bk]})
z=C.d.a3(a.a,1000)
return P.lp(z<0?0:z,b)},
md:function(a,b){if(H.cb(a,{func:1,args:[P.b,P.aw]}))return b.hW(a,null,P.b,P.aw)
if(H.cb(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cg(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mc:function(){var z,y
for(;z=$.br,z!=null;){$.bW=null
y=z.b
$.br=y
if(y==null)$.bV=null
z.a.$0()}},
p0:[function(){$.dr=!0
try{P.mc()}finally{$.bW=null
$.dr=!1
if($.br!=null)$.$get$dk().$1(P.fM())}},"$0","fM",0,0,3],
fH:function(a){var z=new P.fe(H.h(a,{func:1,ret:-1}))
if($.br==null){$.bV=z
$.br=z
if(!$.dr)$.$get$dk().$1(P.fM())}else{$.bV.b=z
$.bV=z}},
mg:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.br
if(z==null){P.fH(a)
$.bW=$.bV
return}y=new P.fe(a)
x=$.bW
if(x==null){y.b=z
$.bW=y
$.br=y}else{y.b=x.b
x.b=y
$.bW=y
if(y.b==null)$.bV=y}},
mU:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.S
if(C.j===y){P.cD(null,null,C.j,a)
return}y.toString
P.cD(null,null,y,H.h(y.c1(a),z))},
jw:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.S
if(y===C.j){y.toString
return P.dd(a,b)}return P.dd(a,H.h(y.c1(b),z))},
jx:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bk]}
H.h(b,z)
y=$.S
if(y===C.j){y.toString
return P.eI(a,b)}x=y.dc(b,P.bk)
$.S.toString
return P.eI(a,H.h(x,z))},
cC:function(a,b,c,d,e){var z={}
z.a=d
P.mg(new P.me(z,e))},
fD:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
fE:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
mf:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.S
if(y===c)return d.$2(e,f)
$.S=c
z=y
try{y=d.$2(e,f)
return y}finally{$.S=z}},
cD:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c1(d):c.hc(d,-1)
P.fH(d)},
kn:{"^":"n:26;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
km:{"^":"n:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ko:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kp:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fu:{"^":"b;a,0b,c",
ev:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bu(new P.lr(this,b),0),a)
else throw H.a(P.C("`setTimeout()` not found."))},
ew:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bu(new P.lq(this,a,Date.now(),b),0),a)
else throw H.a(P.C("Periodic timer."))},
$isbk:1,
p:{
lo:function(a,b){var z=new P.fu(!0,0)
z.ev(a,b)
return z},
lp:function(a,b){var z=new P.fu(!1,0)
z.ew(a,b)
return z}}},
lr:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lq:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.ej(w,x)}z.c=y
this.d.$1(z)}},
bp:{"^":"b;0a,b,c,d,e,$ti",
hD:function(a){if(this.c!==6)return!0
return this.b.b.ct(H.h(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
hu:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cb(z,{func:1,args:[P.b,P.aw]}))return H.dy(w.i2(z,a.a,a.b,null,y,P.aw),x)
else return H.dy(w.ct(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aT:{"^":"b;d0:a<,b,0fs:c<,$ti",
e3:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.md(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.S,[c])
w=b==null?1:3
this.cH(new P.bp(x,w,a,b,[z,c]))
return x},
i5:function(a,b){return this.e3(a,null,b)},
cH:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbp")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaT")
z=y.a
if(z<4){y.cH(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cD(null,null,z,H.h(new P.kE(this,a),{func:1,ret:-1}))}},
cW:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbp")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaT")
y=u.a
if(y<4){u.cW(a)
return}this.a=y
this.c=u.c}z.a=this.bj(a)
y=this.b
y.toString
P.cD(null,null,y,H.h(new P.kJ(z,this),{func:1,ret:-1}))}},
bV:function(){var z=H.f(this.c,"$isbp")
this.c=null
return this.bj(z)},
bj:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cL:function(a){var z,y,x,w
z=H.y(this,0)
H.dy(a,{futureOr:1,type:z})
y=this.$ti
x=H.bt(a,"$isbC",y,"$asbC")
if(x){z=H.bt(a,"$isaT",y,null)
if(z)P.fh(a,this)
else P.kF(a,this)}else{w=this.bV()
H.z(a,z)
this.a=4
this.c=a
P.bQ(this,w)}},
bN:[function(a,b){var z
H.f(b,"$isaw")
z=this.bV()
this.a=8
this.c=new P.al(a,b)
P.bQ(this,z)},function(a){return this.bN(a,null)},"ig","$2","$1","geE",4,2,29],
$isbC:1,
p:{
kF:function(a,b){var z,y,x
b.a=1
try{a.e3(new P.kG(b),new P.kH(b),null)}catch(x){z=H.as(x)
y=H.bw(x)
P.mU(new P.kI(b,z,y))}},
fh:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaT")
if(z>=4){y=b.bV()
b.a=a.a
b.c=a.c
P.bQ(b,y)}else{y=H.f(b.c,"$isbp")
b.a=2
b.c=a
a.cW(y)}},
bQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cC(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bQ(z.a,b)}y=z.a
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
if(p){H.f(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cC(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.kM(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kL(x,b,r).$0()}else if((y&2)!==0)new P.kK(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.M(y).$isbC){if(y.a>=4){n=H.f(t.c,"$isbp")
t.c=null
b=t.bj(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fh(y,t)
return}}m=b.b
n=H.f(m.c,"$isbp")
m.c=null
b=m.bj(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
kE:{"^":"n:0;a,b",
$0:function(){P.bQ(this.a,this.b)}},
kJ:{"^":"n:0;a,b",
$0:function(){P.bQ(this.b,this.a.a)}},
kG:{"^":"n:26;a",
$1:function(a){var z=this.a
z.a=0
z.cL(a)}},
kH:{"^":"n:51;a",
$2:function(a,b){this.a.bN(a,H.f(b,"$isaw"))},
$1:function(a){return this.$2(a,null)}},
kI:{"^":"n:0;a,b,c",
$0:function(){this.a.bN(this.b,this.c)}},
kM:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e1(H.h(w.d,{func:1}),null)}catch(v){y=H.as(v)
x=H.bw(v)
if(this.d){w=H.f(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.M(z).$isbC){if(z instanceof P.aT&&z.gd0()>=4){if(z.gd0()===8){w=this.b
w.b=H.f(z.gfs(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.i5(new P.kN(t),null)
w.a=!1}}},
kN:{"^":"n:34;a",
$1:function(a){return this.a}},
kL:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.ct(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.as(t)
y=H.bw(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kK:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isal")
w=this.c
if(w.hD(z)&&w.e!=null){v=this.b
v.b=w.hu(z)
v.a=!1}}catch(u){y=H.as(u)
x=H.bw(u)
w=H.f(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fe:{"^":"b;a,0b"},
db:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aT(0,$.S,[P.m])
z.a=0
this.hC(new P.jl(z,this),!0,new P.jm(z,y),y.geE())
return y}},
jl:{"^":"n;a,b",
$1:function(a){H.z(a,H.ay(this.b,"db",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.ay(this.b,"db",0)]}}},
jm:{"^":"n:0;a,b",
$0:function(){this.b.cL(this.a.a)}},
eC:{"^":"b;$ti"},
jk:{"^":"b;"},
bk:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
lT:{"^":"b;",$isoQ:1},
me:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eq()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
l6:{"^":"lT;",
i3:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.S){a.$0()
return}P.fD(null,null,this,a,-1)}catch(x){z=H.as(x)
y=H.bw(x)
P.cC(null,null,this,z,H.f(y,"$isaw"))}},
i4:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.S){a.$1(b)
return}P.fE(null,null,this,a,b,-1,c)}catch(x){z=H.as(x)
y=H.bw(x)
P.cC(null,null,this,z,H.f(y,"$isaw"))}},
hc:function(a,b){return new P.l8(this,H.h(a,{func:1,ret:b}),b)},
c1:function(a){return new P.l7(this,H.h(a,{func:1,ret:-1}))},
dc:function(a,b){return new P.l9(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
e1:function(a,b){H.h(a,{func:1,ret:b})
if($.S===C.j)return a.$0()
return P.fD(null,null,this,a,b)},
ct:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.S===C.j)return a.$1(b)
return P.fE(null,null,this,a,b,c,d)},
i2:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.S===C.j)return a.$2(b,c)
return P.mf(null,null,this,a,b,c,d,e,f)},
hW:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
l8:{"^":"n;a,b,c",
$0:function(){return this.a.e1(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l7:{"^":"n:3;a,b",
$0:function(){return this.a.i3(this.b)}},
l9:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.i4(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i6:function(a,b,c,d,e){return new H.aX(0,0,[d,e])},
i7:function(a,b,c){H.bY(a)
return H.w(H.mv(a,new H.aX(0,0,[b,c])),"$isef",[b,c],"$asef")},
eg:function(a,b){return new H.aX(0,0,[a,b])},
ia:function(a,b,c,d){return new P.kT(0,0,[d])},
hT:function(a,b,c){var z,y
if(P.ds(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bX()
C.a.h(y,a)
try{P.mb(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eD(b,H.fW(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cW:function(a,b,c){var z,y,x
if(P.ds(a))return b+"..."+c
z=new P.an(b)
y=$.$get$bX()
C.a.h(y,a)
try{x=z
x.a=P.eD(x.gaE(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaE()+c
y=z.gaE()
return y.charCodeAt(0)==0?y:y},
ds:function(a){var z,y
for(z=0;y=$.$get$bX(),z<y.length;++z)if(a===y[z])return!0
return!1},
mb:function(a,b){var z,y,x,w,v,u,t,s,r,q
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
i8:function(a,b,c){var z=P.i6(null,null,null,b,c)
a.K(0,new P.i9(z,b,c))
return z},
d1:function(a){var z,y,x
z={}
if(P.ds(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$bX(),a)
x=y
x.a=x.gaE()+"{"
z.a=!0
J.dH(a,new P.ih(z,y))
z=y
z.a=z.gaE()+"}"}finally{z=$.$get$bX()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaE()
return z.charCodeAt(0)==0?z:z},
kT:{"^":"kO;a,0b,0c,0d,0e,0f,r,$ti",
ga_:function(a){return P.fk(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dm()
this.b=z}return this.cJ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dm()
this.c=y}return this.cJ(y,b)}else return this.ex(0,b)},
ex:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dm()
this.d=z}y=this.cM(b)
x=z[y]
if(x==null)z[y]=[this.bM(b)]
else{if(this.cS(x,b)>=0)return!1
x.push(this.bM(b))}return!0},
N:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cX(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cX(this.c,b)
else return this.fk(0,b)},
fk:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eM(z,b)
x=this.cS(y,b)
if(x<0)return!1
this.d2(y.splice(x,1)[0])
return!0},
cJ:function(a,b){H.z(b,H.y(this,0))
if(H.f(a[b],"$isdl")!=null)return!1
a[b]=this.bM(b)
return!0},
cX:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdl")
if(z==null)return!1
this.d2(z)
delete a[b]
return!0},
cK:function(){this.r=this.r+1&67108863},
bM:function(a){var z,y
z=new P.dl(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cK()
return z},
d2:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cK()},
cM:function(a){return J.b2(a)&0x3ffffff},
eM:function(a,b){return a[this.cM(b)]},
cS:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
p:{
dm:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dl:{"^":"b;a,0b,0c"},
kU:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fk:function(a,b,c){var z=new P.kU(a,b,[c])
z.c=a.e
return z}}},
kO:{"^":"j6;"},
i9:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cp:{"^":"kV;",$isj:1,$isc:1},
x:{"^":"b;$ti",
ga_:function(a){return new H.eh(a,this.gl(a),0,[H.b_(this,a,"x",0)])},
J:function(a,b){return this.j(a,b)},
i7:function(a,b){var z,y,x
z=H.e([],[H.b_(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
i6:function(a){return this.i7(a,!0)},
ay:function(a,b,c,d){var z
H.z(d,H.b_(this,a,"x",0))
P.aL(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cW(a,"[","]")}},
ig:{"^":"ai;"},
ih:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ai:{"^":"b;$ti",
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.b_(this,a,"ai",0),H.b_(this,a,"ai",1)]})
for(z=J.by(this.gan(a));z.G();){y=z.gR(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.at(this.gan(a))},
i:function(a){return P.d1(a)},
$isH:1},
lw:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.C("Cannot modify unmodifiable map"))}},
ii:{"^":"b;$ti",
j:function(a,b){return J.dG(this.a,b)},
m:function(a,b,c){J.cJ(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
K:function(a,b){J.dH(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.at(this.a)},
i:function(a){return J.aa(this.a)},
$isH:1},
f3:{"^":"lx;a,$ti"},
j8:{"^":"b;$ti",
i:function(a){return P.cW(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dJ("index"))
if(b<0)H.t(P.a0(b,0,null,"index",null))
for(z=P.fk(this,this.r,H.y(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.R(b,this,"index",null,y))},
$isj:1},
j6:{"^":"j8;"},
kV:{"^":"b+x;"},
lx:{"^":"ii+lw;$ti"}}],["","",,P,{"^":"",hg:{"^":"bZ;a",
hG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aL(c,d,b.length,null,null,null)
z=$.$get$ff()
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
if(q<=d){p=H.cG(C.b.H(b,s))
o=H.cG(C.b.H(b,s+1))
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
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.v(b,x,y)
w.a+=H.cr(r)
x=s
continue}}throw H.a(P.X("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dM(b,u,d,v,t,k)
else{j=C.d.bd(k-1,4)+1
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aO(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dM(b,u,d,v,t,i)
else{j=C.d.bd(i,4)
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aO(b,d,d,j===2?"==":"=")}return b},
$asbZ:function(){return[[P.c,P.m],P.i]},
p:{
dM:function(a,b,c,d,e,f){if(C.d.bd(f,4)!==0)throw H.a(P.X("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.X("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.X("Invalid base64 padding, more than two '=' characters",a,b))}}},hh:{"^":"bA;a",
$asbA:function(){return[[P.c,P.m],P.i]}},bZ:{"^":"b;$ti"},bA:{"^":"jk;$ti"},hG:{"^":"bZ;",
$asbZ:function(){return[P.i,[P.c,P.m]]}},jZ:{"^":"hG;a",
gho:function(){return C.F}},k5:{"^":"bA;",
aU:function(a,b,c){var z,y,x,w
z=a.length
P.aL(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lS(0,0,x)
if(w.eK(a,b,z)!==z)w.d4(J.h8(a,z-1),0)
return C.U.bI(x,0,w.b)},
c7:function(a){return this.aU(a,0,null)},
$asbA:function(){return[P.i,[P.c,P.m]]}},lS:{"^":"b;a,b,c",
d4:function(a,b){var z,y,x,w,v
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
eK:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d4(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},k_:{"^":"bA;a",
aU:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.k0(!1,a,b,c)
if(z!=null)return z
y=J.at(a)
P.aL(b,c,y,null,null,null)
x=new P.an("")
w=new P.lP(!1,x,!0,0,0,0)
w.aU(a,b,y)
w.hq(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
c7:function(a){return this.aU(a,0,null)},
$asbA:function(){return[[P.c,P.m],P.i]},
p:{
k0:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.k1(!1,b,c,d)
return},
k1:function(a,b,c,d){var z,y,x
z=$.$get$f9()
if(z==null)return
y=0===c
if(y&&!0)return P.di(z,b)
x=b.length
d=P.aL(c,d,x,null,null,null)
if(y&&d===x)return P.di(z,b)
return P.di(z,b.subarray(c,d))},
di:function(a,b){if(P.k3(b))return
return P.k4(a,b)},
k4:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.as(y)}return},
k3:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k2:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.as(y)}return}}},lP:{"^":"b;a,b,c,d,e,f",
hq:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.X("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lR(c)
v=new P.lQ(this,b,c,a)
$label0$0:for(u=J.aF(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bG()
if((r&192)!==128){q=P.X("Bad UTF-8 encoding 0x"+C.d.b9(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.X("Overlong encoding of 0x"+C.d.b9(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.X("Character outside valid Unicode range: 0x"+C.d.b9(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cr(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cA()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.X("Negative UTF-8 code unit: -0x"+C.d.b9(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.X("Bad UTF-8 encoding 0x"+C.d.b9(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lR:{"^":"n:41;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aF(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bG()
if((w&127)!==w)return x-b}return z-b}},lQ:{"^":"n:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c7(this.d,a,b)}}}],["","",,P,{"^":"",
cd:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.iP(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.X(a,null,null))},
hI:function(a){var z=J.M(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bd(a)+"'"},
ib:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hV(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
ic:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.ga_(a);x.G();)C.a.h(y,H.z(x.gR(x),c))
if(b)return y
return H.w(J.bE(y),"$isc",z,"$asc")},
c7:function(a,b,c){var z,y
z=P.m
H.w(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb9",[z],"$asb9")
y=a.length
c=P.aL(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.O()
z=c<y}else z=!0
return H.eu(z?C.a.bI(a,b,c):a)}if(!!J.M(a).$isd6)return H.iR(a,b,P.aL(b,c,a.length,null,null,null))
return P.jn(a,b,c)},
jn:function(a,b,c){var z,y,x,w
H.w(a,"$isj",[P.m],"$asj")
if(b<0)throw H.a(P.a0(b,0,J.at(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a0(c,b,J.at(a),null,null))
y=J.by(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a0(c,b,x,null,null))
w.push(y.gR(y))}return H.eu(w)},
iY:function(a,b,c){return new H.hY(a,H.hZ(a,!1,!0,!1))},
f5:function(){var z=H.iH()
if(z!=null)return P.jT(z,0,null)
throw H.a(P.C("'Uri.base' is not supported"))},
ck:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hI(a)},
v:function(a){return new P.fg(a)},
id:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.e([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dD:function(a){H.mS(a)},
jT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.f4(b>0||c<c?C.b.v(a,b,c):a,5,null).ge6()
else if(y===32)return P.f4(C.b.v(a,z,c),0,null).ge6()}x=new Array(8)
x.fixed$length=Array
w=H.e(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fF(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cw()
if(v>=b)if(P.fF(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.O()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.O()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.O()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.O()
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aO(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a7(a,"http",b)){if(x&&t+3===s&&C.b.a7(a,"80",t+1))if(b===0&&!0){a=C.b.aO(a,t,s,"")
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
else if(v===z&&C.b.a7(a,"https",b)){if(x&&t+4===s&&C.b.a7(a,"443",t+1))if(b===0&&!0){a=C.b.aO(a,t,s,"")
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
q-=b}return new P.lb(a,v,u,t,s,r,q,o)}return P.ly(a,b,c,v,u,t,s,r,q,o)},
f7:function(a,b){var z=P.i
return C.a.hr(H.e(a.split("&"),[z]),P.eg(z,z),new P.jW(b),[P.H,P.i,P.i])},
jR:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jS(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.V(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cd(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.cA()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cd(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.cA()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
f6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jU(a)
y=new P.jV(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.V(a,w)
if(s===58){if(w===b){++w
if(C.b.V(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaz(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jR(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aH(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
m5:function(){var z,y,x,w,v
z=P.id(22,new P.m7(),!0,P.O)
y=new P.m6(z)
x=new P.m8()
w=new P.m9()
v=H.f(y.$2(0,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isO")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isO")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isO"),"]",5)
v=H.f(y.$2(9,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isO"),"az",21)
v=H.f(y.$2(21,245),"$isO")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fF:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fG()
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
aA:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.d.aH(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hw(H.iO(this))
y=P.c0(H.iM(this))
x=P.c0(H.iI(this))
w=P.c0(H.iJ(this))
v=P.c0(H.iL(this))
u=P.c0(H.iN(this))
t=P.hx(H.iK(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hw:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c0:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"W;"},
"+double":0,
b6:{"^":"b;a",
k:function(a,b){return new P.b6(C.d.ad(this.a*b))},
O:function(a,b){return C.d.O(this.a,H.f(b,"$isb6").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.b6))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hD()
y=this.a
if(y<0)return"-"+new P.b6(0-y).i(0)
x=z.$1(C.d.a3(y,6e7)%60)
w=z.$1(C.d.a3(y,1e6)%60)
v=new P.hC().$1(y%1e6)
return""+C.d.a3(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e4:function(a,b,c,d,e,f){return new P.b6(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hC:{"^":"n:25;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hD:{"^":"n:25;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
eq:{"^":"a5;",
i:function(a){return"Throw of null."}},
aG:{"^":"a5;a,b,c,d",
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbP()+y+x
if(!this.a)return w
v=this.gbO()
u=P.ck(this.b)
return w+v+": "+H.l(u)},
p:{
cf:function(a){return new P.aG(!1,null,null,a)},
cg:function(a,b,c){return new P.aG(!0,a,b,c)},
dJ:function(a){return new P.aG(!1,null,a,"Must not be null")}}},
cs:{"^":"aG;e,f,a,b,c,d",
gbP:function(){return"RangeError"},
gbO:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
ct:function(a,b,c){return new P.cs(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cs(b,c,!0,a,d,"Invalid value")},
aL:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a0(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a0(b,a,c,"end",f))
return b}return c}}},
hR:{"^":"aG;e,l:f>,a,b,c,d",
gbP:function(){return"RangeError"},
gbO:function(){if(J.h4(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
R:function(a,b,c,d,e){var z=H.D(e!=null?e:J.at(b))
return new P.hR(b,z,!0,a,c,"Index out of range")}}},
jP:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
C:function(a){return new P.jP(a)}}},
jM:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c8:function(a){return new P.jM(a)}}},
jh:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hq:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.ck(z))+"."},
p:{
b4:function(a){return new P.hq(a)}}},
iD:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
eA:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hv:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fg:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hO:{"^":"b;a,b,c",
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
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
p:{
X:function(a,b,c){return new P.hO(a,b,c)}}},
m:{"^":"W;"},
"+int":0,
j:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga_(this)
for(y=0;z.G();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dJ("index"))
if(b<0)H.t(P.a0(b,0,null,"index",null))
for(z=this.ga_(this),y=0;z.G();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.R(b,this,"index",null,y))},
i:function(a){return P.hT(this,"(",")")}},
cX:{"^":"b;$ti"},
c:{"^":"b;$ti",$isj:1},
"+List":0,
H:{"^":"b;$ti"},
G:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
W:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gT:function(a){return H.bL(this)},
i:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.i(this)}},
aw:{"^":"b;"},
i:{"^":"b;",$iser:1},
"+String":0,
an:{"^":"b;aE:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoA:1,
p:{
eD:function(a,b,c){var z=J.by(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gR(z))
while(z.G())}else{a+=H.l(z.gR(z))
for(;z.G();)a=a+c+H.l(z.gR(z))}return a}}},
jW:{"^":"n:38;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isH",[z,z],"$asH")
H.K(b)
y=J.aF(b).dL(b,"=")
if(y===-1){if(b!=="")J.cJ(a,P.dp(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aA(b,y+1)
z=this.a
J.cJ(a,P.dp(x,0,x.length,z,!0),P.dp(w,0,w.length,z,!0))}return a}},
jS:{"^":"n:30;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv4 address, "+a,this.a,b))}},
jU:{"^":"n:49;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jV:{"^":"n:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cd(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.O()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cz:{"^":"b;bH:a<,b,c,d,dX:e>,f,r,0x,0y,0z,0Q,0ch",
ge7:function(){return this.b},
gcg:function(a){var z=this.c
if(z==null)return""
if(C.b.a6(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbE:function(a){var z=this.d
if(z==null)return P.fv(this.a)
return z},
gco:function(a){var z=this.f
return z==null?"":z},
gdG:function(){var z=this.r
return z==null?"":z},
cs:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
if(x&&!C.b.a6(d,"/"))d="/"+d
g=P.dn(g,0,0,h)
return new P.cz(i,j,c,f,d,g,this.r)},
e0:function(a,b){return this.cs(a,null,null,null,null,null,null,b,null,null)},
gcp:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f3(P.f7(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdH:function(){return this.c!=null},
gdK:function(){return this.f!=null},
gdI:function(){return this.r!=null},
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
if(!!z.$isdh){y=this.a
x=b.gbH()
if(y==null?x==null:y===x)if(this.c!=null===b.gdH()){y=this.b
x=b.ge7()
if(y==null?x==null:y===x){y=this.gcg(this)
x=z.gcg(b)
if(y==null?x==null:y===x){y=this.gbE(this)
x=z.gbE(b)
if(y==null?x==null:y===x)if(this.e===z.gdX(b)){y=this.f
x=y==null
if(!x===b.gdK()){if(x)y=""
if(y===z.gco(b)){z=this.r
y=z==null
if(!y===b.gdI()){if(y)z=""
z=z===b.gdG()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdh:1,
p:{
cA:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fA().b
if(typeof b!=="string")H.t(H.ag(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.ay(c,"bZ",0))
y=c.gho().c7(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cr(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ly:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lJ(a,b,d)
else{if(d===b)P.bS(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lK(a,z,e-1):""
x=P.lD(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lG(P.cd(C.b.v(a,w,g),new P.lz(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lE(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.O()
t=h<i?P.dn(a,h+1,i,null):null
return new P.cz(j,y,x,v,u,t,i<c?P.lC(a,i+1,c):null)},
fv:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bS:function(a,b,c){throw H.a(P.X(c,a,b))},
lG:function(a,b){if(a!=null&&a===P.fv(b))return
return a},
lD:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.S()
z=c-1
if(C.b.V(a,z)!==93)P.bS(a,b,"Missing end `]` to match `[` in host")
P.f6(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.V(a,y)===58){P.f6(a,b,c)
return"["+a+"]"}return P.lM(a,b,c)},
lM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.V(a,z)
if(v===37){u=P.fC(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
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
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bS(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.V(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fw(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lJ:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fy(C.b.H(a,b)))P.bS(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bS(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lA(y?a.toLowerCase():a)},
lA:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lK:function(a,b,c){return P.bT(a,b,c,C.Q)},
lE:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bT(a,b,c,C.y):C.t.iQ(d,new P.lF(),P.i).E(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a6(w,"/"))w="/"+w
return P.lL(w,e,f)},
lL:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a6(a,"/"))return P.lN(a,!z||c)
return P.lO(a)},
dn:function(a,b,c,d){var z,y
z={}
H.w(d,"$isH",[P.i,null],"$asH")
if(a!=null){if(d!=null)throw H.a(P.cf("Both query and queryParameters specified"))
return P.bT(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.K(0,new P.lH(new P.lI(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lC:function(a,b,c){return P.bT(a,b,c,C.n)},
fC:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.V(a,b+1)
x=C.b.V(a,z)
w=H.cG(y)
v=H.cG(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aH(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cr(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fw:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.fC(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.c7(y,0,null)},
bT:function(a,b,c,d){var z=P.fB(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.v(a,b,c):z},
fB:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.O()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.V(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fC(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bS(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.V(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fw(v)}}if(w==null)w=new P.an("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.O()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fz:function(a){if(C.b.a6(a,"."))return!0
return C.b.dL(a,"/.")!==-1},
lO:function(a){var z,y,x,w,v,u,t
if(!P.fz(a))return a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.P(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.E(z,"/")},
lN:function(a,b){var z,y,x,w,v,u
if(!P.fz(a))return!b?P.fx(a):a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaz(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaz(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.m(z,0,P.fx(z[0]))}return C.a.E(z,"/")},
fx:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fy(J.h5(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aA(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lB:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cf("Invalid URL encoding"))}}return z},
dp:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dz(a)
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
else u=new H.a4(y.v(a,b,c))}else{u=H.e([],[P.m])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.cf("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cf("Truncated URI"))
C.a.h(u,P.lB(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.k_(!1).c7(u)},
fy:function(a){var z=a|32
return 97<=z&&z<=122}}},
lz:{"^":"n:47;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.X("Invalid port",this.a,z+1))}},
lF:{"^":"n:46;",
$1:function(a){return P.cA(C.S,a,C.k,!1)}},
lI:{"^":"n:17;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cA(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cA(C.p,b,C.k,!0))}}},
lH:{"^":"n:50;a",
$2:function(a,b){var z,y
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(z=J.by(H.fW(b,"$isj")),y=this.a;z.G();)y.$2(a,H.K(z.gR(z)))}},
jQ:{"^":"b;a,b,c",
ge6:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.dM(y,"?",z)
w=y.length
if(x>=0){v=P.bT(y,x+1,w,C.n)
w=x}else v=null
z=new P.ku(this,"data",null,null,null,P.bT(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f4:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.X("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.X("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaz(z)
if(v!==44||x!==t+7||!C.b.a7(a,"base64",t+1))throw H.a(P.X("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hG(0,a,s,y)
else{r=P.fB(a,s,y,C.n,!0)
if(r!=null)a=C.b.aO(a,s,y,r)}return new P.jQ(a,z,c)}}},
m7:{"^":"n:45;",
$1:function(a){return new Uint8Array(96)}},
m6:{"^":"n:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.h9(z,0,96,b)
return z}},
m8:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
m9:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lb:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdH:function(){return this.c>0},
gdJ:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gdK:function(){var z=this.f
if(typeof z!=="number")return z.O()
return z<this.r},
gdI:function(){return this.r<this.a.length},
gcT:function(){return this.b===4&&C.b.a6(this.a,"http")},
gcU:function(){return this.b===5&&C.b.a6(this.a,"https")},
gbH:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcT()){this.x="http"
z="http"}else if(this.gcU()){this.x="https"
z="https"}else if(z===4&&C.b.a6(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a6(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
ge7:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcg:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbE:function(a){var z
if(this.gdJ()){z=this.d
if(typeof z!=="number")return z.D()
return P.cd(C.b.v(this.a,z+1,this.e),null,null)}if(this.gcT())return 80
if(this.gcU())return 443
return 0},
gdX:function(a){return C.b.v(this.a,this.e,this.f)},
gco:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.O()
return z<y?C.b.v(this.a,z+1,y):""},
gdG:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aA(y,z+1):""},
gcp:function(){var z=this.f
if(typeof z!=="number")return z.O()
if(z>=this.r)return C.T
z=P.i
return new P.f3(P.f7(this.gco(this),C.k),[z,z])},
cs:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.i,null],"$asH")
i=this.gbH()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gdJ()?this.gbE(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a6(d,"/"))d="/"+d
g=P.dn(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aA(y,x+1)
return new P.cz(i,j,c,f,d,g,b)},
e0:function(a,b){return this.cs(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdh)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdh:1},
ku:{"^":"cz;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dT:function(a,b){var z=document.createElement("canvas")
return z},
hF:function(a){H.f(a,"$isa7")
return"wheel"},
hS:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$ise9")
try{J.hb(z,a)}catch(x){H.as(x)}return z},
cy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fj:function(a,b,c,d){var z,y
z=W.cy(W.cy(W.cy(W.cy(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fJ:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.j)return a
return z.dc(a,b)},
ab:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n3:{"^":"d9;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
n4:{"^":"q;0l:length=","%":"AccessibleNodeList"},
n5:{"^":"ab;0a0:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
n6:{"^":"ab;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cN:{"^":"q;",$iscN:1,"%":";Blob"},
nc:{"^":"ab;0a0:type}","%":"HTMLButtonElement"},
cQ:{"^":"ab;",
cz:function(a,b,c){var z=a.getContext(b,P.mk(c,null))
return z},
$iscQ:1,
"%":"HTMLCanvasElement"},
ne:{"^":"I;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ng:{"^":"cj;0l:length=","%":"CSSPerspective"},
nh:{"^":"cS;0q:x=,0t:y=","%":"CSSPositionValue"},
ni:{"^":"cj;0q:x=,0t:y=","%":"CSSRotation"},
b5:{"^":"q;",$isb5:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nj:{"^":"cj;0q:x=,0t:y=","%":"CSSScale"},
nk:{"^":"kt;0l:length=",
eb:function(a,b){var z=a.getPropertyValue(this.eB(a,b))
return z==null?"":z},
eB:function(a,b){var z,y
z=$.$get$dY()
y=z[b]
if(typeof y==="string")return y
y=this.fD(a,b)
z[b]=y
return y},
fD:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hy()+b
if(z in a)return z
return b},
gc2:function(a){return a.bottom},
gam:function(a){return a.height},
gaL:function(a){return a.left},
gb6:function(a){return a.right},
gbb:function(a){return a.top},
gaq:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hu:{"^":"b;",
gaL:function(a){return this.eb(a,"left")}},
cS:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cj:{"^":"q;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nl:{"^":"cS;0l:length=","%":"CSSTransformValue"},
nm:{"^":"cj;0q:x=,0t:y=","%":"CSSTranslation"},
nn:{"^":"cS;0l:length=","%":"CSSUnparsedValue"},
no:{"^":"q;0l:length=","%":"DataTransferItemList"},
np:{"^":"q;0q:x=,0t:y=","%":"DeviceAcceleration"},
nq:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
nr:{"^":"hA;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hA:{"^":"q;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
ns:{"^":"kw;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.w(c,"$isa8",[P.W],"$asa8")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
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
hB:{"^":"q;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaq(a))+" x "+H.l(this.gam(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bt(b,"$isa8",[P.W],"$asa8")
if(!z)return!1
z=J.aV(b)
return a.left===z.gaL(b)&&a.top===z.gbb(b)&&this.gaq(a)===z.gaq(b)&&this.gam(a)===z.gam(b)},
gT:function(a){return W.fj(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaq(a)&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF)},
gc2:function(a){return a.bottom},
gam:function(a){return a.height},
gaL:function(a){return a.left},
gb6:function(a){return a.right},
gbb:function(a){return a.top},
gaq:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa8:1,
$asa8:function(){return[P.W]},
"%":";DOMRectReadOnly"},
nt:{"^":"ky;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.K(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
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
nu:{"^":"q;0l:length=","%":"DOMTokenList"},
ks:{"^":"cp;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.f(z[b],"$isa1")},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa1")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var z=this.i6(this)
return new J.au(z,z.length,0,[H.y(z,0)])},
ay:function(a,b,c,d){throw H.a(P.c8(null))},
$asx:function(){return[W.a1]},
$asj:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
a1:{"^":"I;",
gc6:function(a){return new W.ks(a,a.children)},
gbn:function(a){return P.iU(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
nv:{"^":"ab;0a0:type}","%":"HTMLEmbedElement"},
ad:{"^":"q;",$isad:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"q;",
d6:["ee",function(a,b,c,d){H.h(c,{func:1,args:[W.ad]})
if(c!=null)this.ey(a,b,c,!1)}],
ey:function(a,b,c,d){return a.addEventListener(b,H.bu(H.h(c,{func:1,args:[W.ad]}),1),!1)},
$isa7:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fp|fq|fs|ft"},
aW:{"^":"cN;",$isaW:1,"%":"File"},
e5:{"^":"kD;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isaW")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aW]},
$asx:function(){return[W.aW]},
$isj:1,
$asj:function(){return[W.aW]},
$isc:1,
$asc:function(){return[W.aW]},
$ise5:1,
$asB:function(){return[W.aW]},
"%":"FileList"},
nO:{"^":"a7;0l:length=","%":"FileWriter"},
nR:{"^":"ab;0l:length=","%":"HTMLFormElement"},
b8:{"^":"q;",$isb8:1,"%":"Gamepad"},
nS:{"^":"d9;0q:x=,0t:y=","%":"Gyroscope"},
nT:{"^":"q;0l:length=","%":"History"},
nU:{"^":"kQ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isI")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.I]},
$asx:function(){return[W.I]},
$isj:1,
$asj:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asB:function(){return[W.I]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
e8:{"^":"q;",$ise8:1,"%":"ImageData"},
e9:{"^":"ab;0a0:type}",$ise9:1,"%":"HTMLInputElement"},
bF:{"^":"de;",$isbF:1,"%":"KeyboardEvent"},
nZ:{"^":"ab;0a0:type}","%":"HTMLLinkElement"},
o_:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
o0:{"^":"d9;0q:x=,0t:y=","%":"Magnetometer"},
o2:{"^":"q;0l:length=","%":"MediaList"},
o3:{"^":"a7;",
d6:function(a,b,c,d){H.h(c,{func:1,args:[W.ad]})
if(b==="message")a.start()
this.ee(a,b,c,!1)},
"%":"MessagePort"},
o4:{"^":"kW;",
j:function(a,b){return P.aU(a.get(H.K(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new W.iv(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iv:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o5:{"^":"kX;",
j:function(a,b){return P.aU(a.get(H.K(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new W.iw(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iw:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bb:{"^":"q;",$isbb:1,"%":"MimeType"},
o6:{"^":"kZ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbb")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asx:function(){return[W.bb]},
$isj:1,
$asj:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asB:function(){return[W.bb]},
"%":"MimeTypeArray"},
aB:{"^":"de;",$isaB:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kr:{"^":"cp;a",
m:function(a,b,c){var z,y
H.D(b)
H.f(c,"$isI")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga_:function(a){var z=this.a.childNodes
return new W.e6(z,z.length,-1,[H.b_(C.V,z,"B",0)])},
ay:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asx:function(){return[W.I]},
$asj:function(){return[W.I]},
$asc:function(){return[W.I]}},
I:{"^":"a7;",
i_:function(a,b){var z,y
try{z=a.parentNode
J.h6(z,b,a)}catch(y){H.as(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ef(a):z},
fn:function(a,b,c){return a.replaceChild(b,c)},
$isI:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iA:{"^":"l0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isI")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.I]},
$asx:function(){return[W.I]},
$isj:1,
$asj:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asB:function(){return[W.I]},
"%":"NodeList|RadioNodeList"},
oe:{"^":"ab;0a0:type}","%":"HTMLOListElement"},
of:{"^":"ab;0a0:type}","%":"HTMLObjectElement"},
bc:{"^":"q;0l:length=",$isbc:1,"%":"Plugin"},
oj:{"^":"l4;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbc")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isj:1,
$asj:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asB:function(){return[W.bc]},
"%":"PluginArray"},
oo:{"^":"q;0a0:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
op:{"^":"la;",
j:function(a,b){return P.aU(a.get(H.K(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new W.j3(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j3:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
or:{"^":"ab;0a0:type}","%":"HTMLScriptElement"},
ot:{"^":"ab;0l:length=","%":"HTMLSelectElement"},
d9:{"^":"a7;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
be:{"^":"a7;",$isbe:1,"%":"SourceBuffer"},
ou:{"^":"fq;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbe")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asx:function(){return[W.be]},
$isj:1,
$asj:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asB:function(){return[W.be]},
"%":"SourceBufferList"},
ov:{"^":"ab;0a0:type}","%":"HTMLSourceElement"},
bf:{"^":"q;",$isbf:1,"%":"SpeechGrammar"},
ow:{"^":"ld;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbf")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"SpeechGrammarList"},
bg:{"^":"q;0l:length=",$isbg:1,"%":"SpeechRecognitionResult"},
oy:{"^":"lg;",
j:function(a,b){return a.getItem(H.K(b))},
m:function(a,b,c){a.setItem(b,H.K(c))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new W.jj(z))
return z},
gl:function(a){return a.length},
$asai:function(){return[P.i,P.i]},
$isH:1,
$asH:function(){return[P.i,P.i]},
"%":"Storage"},
jj:{"^":"n:17;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oB:{"^":"ab;0a0:type}","%":"HTMLStyleElement"},
bh:{"^":"q;",$isbh:1,"%":"CSSStyleSheet|StyleSheet"},
dc:{"^":"ab;",$isdc:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bi:{"^":"a7;",$isbi:1,"%":"TextTrack"},
bj:{"^":"a7;",$isbj:1,"%":"TextTrackCue|VTTCue"},
oG:{"^":"ln;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbj")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isj:1,
$asj:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asB:function(){return[W.bj]},
"%":"TextTrackCueList"},
oH:{"^":"ft;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbi")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asx:function(){return[W.bi]},
$isj:1,
$asj:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asB:function(){return[W.bi]},
"%":"TextTrackList"},
oI:{"^":"q;0l:length=","%":"TimeRanges"},
bl:{"^":"q;",$isbl:1,"%":"Touch"},
bm:{"^":"de;",$isbm:1,"%":"TouchEvent"},
oJ:{"^":"lt;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbl")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bl]},
$asx:function(){return[W.bl]},
$isj:1,
$asj:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asB:function(){return[W.bl]},
"%":"TouchList"},
oK:{"^":"q;0l:length=","%":"TrackDefaultList"},
de:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oM:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
oO:{"^":"q;0q:x=","%":"VRStageBoundsPoint"},
oP:{"^":"a7;0l:length=","%":"VideoTrackList"},
bP:{"^":"aB;",
ghl:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.C("deltaY is not supported"))},
ghk:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.C("deltaX is not supported"))},
$isbP:1,
"%":"WheelEvent"},
kk:{"^":"a7;",
fo:function(a,b){return a.requestAnimationFrame(H.bu(H.h(b,{func:1,ret:-1,args:[P.W]}),1))},
eJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oU:{"^":"lV;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb5")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b5]},
$asx:function(){return[W.b5]},
$isj:1,
$asj:function(){return[W.b5]},
$isc:1,
$asc:function(){return[W.b5]},
$asB:function(){return[W.b5]},
"%":"CSSRuleList"},
oV:{"^":"hB;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bt(b,"$isa8",[P.W],"$asa8")
if(!z)return!1
z=J.aV(b)
return a.left===z.gaL(b)&&a.top===z.gbb(b)&&a.width===z.gaq(b)&&a.height===z.gam(b)},
gT:function(a){return W.fj(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gam:function(a){return a.height},
gaq:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
oX:{"^":"lX;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb8")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asx:function(){return[W.b8]},
$isj:1,
$asj:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asB:function(){return[W.b8]},
"%":"GamepadList"},
oY:{"^":"lZ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isI")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.I]},
$asx:function(){return[W.I]},
$isj:1,
$asj:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asB:function(){return[W.I]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oZ:{"^":"m0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbg")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isj:1,
$asj:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asB:function(){return[W.bg]},
"%":"SpeechRecognitionResultList"},
p_:{"^":"m2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbh")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isj:1,
$asj:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asB:function(){return[W.bh]},
"%":"StyleSheetList"},
kz:{"^":"db;a,b,c,$ti",
hC:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a3(this.a,this.b,a,!1,z)}},
oW:{"^":"kz;a,b,c,$ti"},
kA:{"^":"eC;a,b,c,d,e,$ti",
fH:function(){var z=this.d
if(z!=null&&this.a<=0)J.h7(this.b,this.c,z,!1)},
p:{
a3:function(a,b,c,d,e){var z=c==null?null:W.fJ(new W.kB(c),W.ad)
z=new W.kA(0,a,b,z,!1,[e])
z.fH()
return z}}},
kB:{"^":"n:4;a",
$1:function(a){return this.a.$1(H.f(a,"$isad"))}},
B:{"^":"b;$ti",
ga_:function(a){return new W.e6(a,this.gl(a),-1,[H.b_(this,a,"B",0)])},
ay:function(a,b,c,d){H.z(d,H.b_(this,a,"B",0))
throw H.a(P.C("Cannot modify an immutable List."))}},
e6:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dG(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
kt:{"^":"q+hu;"},
kv:{"^":"q+x;"},
kw:{"^":"kv+B;"},
kx:{"^":"q+x;"},
ky:{"^":"kx+B;"},
kC:{"^":"q+x;"},
kD:{"^":"kC+B;"},
kP:{"^":"q+x;"},
kQ:{"^":"kP+B;"},
kW:{"^":"q+ai;"},
kX:{"^":"q+ai;"},
kY:{"^":"q+x;"},
kZ:{"^":"kY+B;"},
l_:{"^":"q+x;"},
l0:{"^":"l_+B;"},
l3:{"^":"q+x;"},
l4:{"^":"l3+B;"},
la:{"^":"q+ai;"},
fp:{"^":"a7+x;"},
fq:{"^":"fp+B;"},
lc:{"^":"q+x;"},
ld:{"^":"lc+B;"},
lg:{"^":"q+ai;"},
lm:{"^":"q+x;"},
ln:{"^":"lm+B;"},
fs:{"^":"a7+x;"},
ft:{"^":"fs+B;"},
ls:{"^":"q+x;"},
lt:{"^":"ls+B;"},
lU:{"^":"q+x;"},
lV:{"^":"lU+B;"},
lW:{"^":"q+x;"},
lX:{"^":"lW+B;"},
lY:{"^":"q+x;"},
lZ:{"^":"lY+B;"},
m_:{"^":"q+x;"},
m0:{"^":"m_+B;"},
m1:{"^":"q+x;"},
m2:{"^":"m1+B;"}}],["","",,P,{"^":"",
aU:function(a){var z,y,x,w,v
if(a==null)return
z=P.eg(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=H.K(y[w])
z.m(0,v,a[v])}return z},
mk:function(a,b){var z={}
a.K(0,new P.ml(z))
return z},
e3:function(){var z=$.e2
if(z==null){z=J.cK(window.navigator.userAgent,"Opera",0)
$.e2=z}return z},
hy:function(){var z,y
z=$.e_
if(z!=null)return z
y=$.e0
if(y==null){y=J.cK(window.navigator.userAgent,"Firefox",0)
$.e0=y}if(y)z="-moz-"
else{y=$.e1
if(y==null){y=!P.e3()&&J.cK(window.navigator.userAgent,"Trident/",0)
$.e1=y}if(y)z="-ms-"
else z=P.e3()?"-o-":"-webkit-"}$.e_=z
return z},
lj:{"^":"b;",
dD:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cv:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.M(a)
if(!!y.$isaA)return new Date(a.a)
if(!!y.$isiX)throw H.a(P.c8("structured clone of RegExp"))
if(!!y.$isaW)return a
if(!!y.$iscN)return a
if(!!y.$ise5)return a
if(!!y.$ise8)return a
if(!!y.$iseo||!!y.$isd5)return a
if(!!y.$isH){x=this.dD(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.K(a,new P.ll(z,this))
return z.a}if(!!y.$isc){x=this.dD(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hi(a,x)}throw H.a(P.c8("structured clone of other type"))},
hi:function(a,b){var z,y,x,w
z=J.aF(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cv(z.j(a,w)))
return x}},
ll:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cv(b)}},
ml:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lk:{"^":"lj;a,b"},
hL:{"^":"cp;a,b",
gbh:function(){var z,y,x
z=this.b
y=H.ay(z,"x",0)
x=W.a1
return new H.ij(new H.ki(z,H.h(new P.hM(),{func:1,ret:P.ah,args:[y]}),[y]),H.h(new P.hN(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa1")
z=this.gbh()
J.ha(z.b.$1(J.cL(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ay:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on filtered list"))},
gl:function(a){return J.at(this.gbh().a)},
j:function(a,b){var z=this.gbh()
return z.b.$1(J.cL(z.a,b))},
ga_:function(a){var z=P.ic(this.gbh(),!1,W.a1)
return new J.au(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a1]},
$asj:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
hM:{"^":"n:44;",
$1:function(a){return!!J.M(H.f(a,"$isI")).$isa1}},
hN:{"^":"n:27;",
$1:function(a){return H.k(H.f(a,"$isI"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fi:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bJ:{"^":"b;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.bt(b,"$isbJ",[P.W],null)
if(!z)return!1
z=this.a
y=J.aV(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gT:function(a){var z,y
z=J.b2(this.a)
y=J.b2(this.b)
return P.fi(P.bR(P.bR(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.y(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bJ(z,H.z(x*b,y),this.$ti)}},
l5:{"^":"b;$ti",
gb6:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.z(z+this.c,H.y(this,0))},
gc2:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bt(b,"$isa8",[P.W],"$asa8")
if(!z)return!1
z=this.a
y=J.aV(b)
x=y.gaL(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbb(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gb6(b)){if(typeof x!=="number")return x.D()
z=H.z(x+this.d,w)===y.gc2(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.b2(z)
x=this.b
w=J.b2(x)
if(typeof z!=="number")return z.D()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.z(x+this.d,v)
return P.fi(P.bR(P.bR(P.bR(P.bR(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dd:function(a,b){var z,y
H.w(b,"$isbJ",[P.W],"$asbJ")
z=b.a
y=this.a
if(typeof z!=="number")return z.cw()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cw()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a8:{"^":"l5;aL:a>,bb:b>,aq:c>,am:d>,$ti",p:{
iU:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.O()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.O()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nw:{"^":"U;0q:x=,0t:y=","%":"SVGFEBlendElement"},nx:{"^":"U;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},ny:{"^":"U;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nz:{"^":"U;0q:x=,0t:y=","%":"SVGFECompositeElement"},nA:{"^":"U;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nB:{"^":"U;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nC:{"^":"U;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nD:{"^":"U;0q:x=,0t:y=","%":"SVGFEFloodElement"},nE:{"^":"U;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nF:{"^":"U;0q:x=,0t:y=","%":"SVGFEImageElement"},nG:{"^":"U;0q:x=,0t:y=","%":"SVGFEMergeElement"},nH:{"^":"U;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nI:{"^":"U;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nJ:{"^":"U;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nK:{"^":"U;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},nL:{"^":"U;0q:x=,0t:y=","%":"SVGFESpotLightElement"},nM:{"^":"U;0q:x=,0t:y=","%":"SVGFETileElement"},nN:{"^":"U;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},nP:{"^":"U;0q:x=,0t:y=","%":"SVGFilterElement"},nQ:{"^":"bD;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hQ:{"^":"bD;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bD:{"^":"U;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},nV:{"^":"bD;0q:x=,0t:y=","%":"SVGImageElement"},bG:{"^":"q;",$isbG:1,"%":"SVGLength"},nY:{"^":"kS;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbG")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bG]},
$isj:1,
$asj:function(){return[P.bG]},
$isc:1,
$asc:function(){return[P.bG]},
$asB:function(){return[P.bG]},
"%":"SVGLengthList"},o1:{"^":"U;0q:x=,0t:y=","%":"SVGMaskElement"},bI:{"^":"q;",$isbI:1,"%":"SVGNumber"},od:{"^":"l2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbI")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bI]},
$isj:1,
$asj:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asB:function(){return[P.bI]},
"%":"SVGNumberList"},oi:{"^":"U;0q:x=,0t:y=","%":"SVGPatternElement"},ok:{"^":"q;0q:x=,0t:y=","%":"SVGPoint"},ol:{"^":"q;0l:length=","%":"SVGPointList"},om:{"^":"q;0q:x=,0t:y=","%":"SVGRect"},on:{"^":"hQ;0q:x=,0t:y=","%":"SVGRectElement"},os:{"^":"U;0a0:type}","%":"SVGScriptElement"},oz:{"^":"li;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.K(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"SVGStringList"},oC:{"^":"U;0a0:type}","%":"SVGStyleElement"},U:{"^":"a1;",
gc6:function(a){return new P.hL(a,new W.kr(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oD:{"^":"bD;0q:x=,0t:y=","%":"SVGSVGElement"},jo:{"^":"bD;","%":"SVGTextPathElement;SVGTextContentElement"},oF:{"^":"jo;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bM:{"^":"q;",$isbM:1,"%":"SVGTransform"},oL:{"^":"lv;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbM")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bM]},
$isj:1,
$asj:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asB:function(){return[P.bM]},
"%":"SVGTransformList"},oN:{"^":"bD;0q:x=,0t:y=","%":"SVGUseElement"},kR:{"^":"q+x;"},kS:{"^":"kR+B;"},l1:{"^":"q+x;"},l2:{"^":"l1+B;"},lh:{"^":"q+x;"},li:{"^":"lh+B;"},lu:{"^":"q+x;"},lv:{"^":"lu+B;"}}],["","",,P,{"^":"",O:{"^":"b;",$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}}}],["","",,P,{"^":"",n7:{"^":"q;0l:length=","%":"AudioBuffer"},dL:{"^":"a7;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},n8:{"^":"kq;",
j:function(a,b){return P.aU(a.get(H.K(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new P.he(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"AudioParamMap"},he:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hf:{"^":"dL;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},n9:{"^":"a7;0l:length=","%":"AudioTrackList"},hi:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},na:{"^":"dL;0a0:type}","%":"BiquadFilterNode"},og:{"^":"hi;0l:length=","%":"OfflineAudioContext"},oh:{"^":"hf;0a0:type}","%":"Oscillator|OscillatorNode"},kq:{"^":"q+ai;"}}],["","",,P,{"^":"",ex:{"^":"q;",$isex:1,"%":"WebGLRenderingContext"},jK:{"^":"q;",$isjK:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ox:{"^":"lf;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){H.D(b)
H.f(c,"$isH")
throw H.a(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[[P.H,,,]]},
$isj:1,
$asj:function(){return[[P.H,,,]]},
$isc:1,
$asc:function(){return[[P.H,,,]]},
$asB:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},le:{"^":"q+x;"},lf:{"^":"le+B;"}}],["","",,O,{"^":"",aH:{"^":"b;0a,0b,0c,0d,$ti",
bK:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cB:function(a,b,c){var z=H.ay(this,"aH",0)
H.h(b,{func:1,ret:P.ah,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.m,[P.j,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
be:function(a,b){return this.cB(a,null,b)},
fd:function(a){var z
H.w(a,"$isj",[H.ay(this,"aH",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eT:function(a,b){var z
H.w(b,"$isj",[H.ay(this,"aH",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga_:function(a){var z=this.a
return new J.au(z,z.length,0,[H.y(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ay(this,"aH",0)
H.z(b,z)
z=[z]
if(this.fd(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eT(x,H.e([b],z))}},
$isj:1,
p:{
cR:function(a){var z=new O.aH([a])
z.bK(a)
return z}}},d3:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.T()
this.b=z}return z},
ep:function(a){var z=this.b
if(!(z==null))z.I(a)},
aB:function(){return this.ep(null)},
gW:function(a){var z=this.a
if(z.length>0)return C.a.gaz(z)
else return V.c5()},
dZ:function(a){var z=this.a
if(a==null)C.a.h(z,V.c5())
else C.a.h(z,a)
this.aB()},
cm:function(){var z=this.a
if(z.length>0){z.pop()
this.aB()}}}}],["","",,E,{"^":"",cM:{"^":"b;"},aI:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cI:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
if(y.f==null)y.cI()}},
sa5:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gB()
y.toString
x=H.h(this.gdV(),{func:1,ret:-1,args:[D.u]})
C.a.N(y.a,x)}y=this.c
if(y!=null){y=y.gB()
y.toString
x=H.h(this.gdV(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}w=new D.N("shape",z,this.c,this,[F.ez])
w.b=!0
this.a4(w)}},
sb7:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.h(this.gdW(),{func:1,ret:-1,args:[D.u]})
C.a.N(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gdW(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}this.cI()
w=new D.N("technique",x,this.f,this,[O.cv])
w.b=!0
this.a4(w)}},
saM:function(a){var z,y,x,w
if(!J.P(this.r,a)){z=this.r
if(z!=null){y=z.gB()
y.toString
x=H.h(this.gdU(),{func:1,ret:-1,args:[D.u]})
C.a.N(y.a,x)}if(a!=null){y=a.gB()
y.toString
x=H.h(this.gdU(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}this.r=a
w=new D.N("mover",z,a,this,[U.aj])
w.b=!0
this.a4(w)}},
ap:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aQ(0,b,this):null
if(!J.P(y,this.x)){x=this.x
this.x=y
w=new D.N("matrix",x,y,this,[V.av])
w.b=!0
this.a4(w)}z=this.f
if(z!=null)z.ap(0,b)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.G();)z.d.ap(0,b)},
aN:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gW(z))
else C.a.h(z.a,y.k(0,z.gW(z)))
z.aB()
a.e_(this.f)
z=a.dy
x=(z&&C.a).gaz(z)
if(x!=null&&this.d!=null)x.hZ(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aN(a)
a.dY()
a.dx.cm()},
gB:function(){var z=this.z
if(z==null){z=D.T()
this.z=z}return z},
a4:function(a){var z=this.z
if(!(z==null))z.I(a)},
X:function(){return this.a4(null)},
hL:[function(a){H.f(a,"$isu")
this.e=null
this.a4(a)},function(){return this.hL(null)},"iV","$1","$0","gdV",0,2,1],
hM:[function(a){this.a4(H.f(a,"$isu"))},function(){return this.hM(null)},"iW","$1","$0","gdW",0,2,1],
hK:[function(a){this.a4(H.f(a,"$isu"))},function(){return this.hK(null)},"iU","$1","$0","gdU",0,2,1],
hI:[function(a){this.a4(H.f(a,"$isu"))},function(){return this.hI(null)},"iS","$1","$0","gdT",0,2,1],
iR:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aI],"$asj")
for(z=b.length,y=this.gdT(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b7()
t.a=H.e([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.X()},"$2","ghH",8,0,8],
iT:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aI],"$asj")
for(z=b.length,y=this.gdT(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b7()
t.a=H.e([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.h(y,x)
C.a.N(t.a,y)}}this.X()},"$2","ghJ",8,0,8],
$isaK:1,
p:{
cT:function(a,b,c,d,e,f){var z,y
z=new E.aI()
z.a=d
z.b=!0
y=O.cR(E.aI)
z.y=y
y.be(z.ghH(),z.ghJ())
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
z.sb7(f)
z.saM(c)
return z}}},iZ:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
el:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aA(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d3()
y=[V.av]
z.a=H.e([],y)
x=z.gB()
x.toString
w={func:1,ret:-1,args:[D.u]}
v=H.h(new E.j0(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d3()
z.a=H.e([],y)
v=z.gB()
v.toString
x=H.h(new E.j1(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d3()
z.a=H.e([],y)
y=z.gB()
y.toString
w=H.h(new E.j2(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.cv])
this.dy=z
C.a.h(z,null)
this.fr=new H.aX(0,0,[P.i,A.ey])},
ghV:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gW(z)
y=this.db
y=z.k(0,y.gW(y))
this.z=y
z=y}return z},
e_:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaz(z):a;(z&&C.a).h(z,y)},
dY:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
j_:function(a,b){var z=new E.iZ(a,b)
z.el(a,b)
return z}}},j0:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.z=null
z.ch=null}},j1:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j2:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},jt:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a2:x@,0y,0z,0Q,0ch",
gB:function(){var z=this.x
if(z==null){z=D.T()
this.x=z}return z},
er:[function(a){var z
H.f(a,"$isu")
z=this.x
if(!(z==null))z.I(a)
this.i0()},function(){return this.er(null)},"eq","$1","$0","gcE",0,2,1],
ght:function(){var z,y,x
z=Date.now()
y=C.d.a3(P.e4(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aA(z,!1)
return x/y},
cY:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.h.dE(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.dE(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
i0:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jv(this),{func:1,ret:-1,args:[P.W]})
C.B.eJ(z)
C.B.fo(z,W.fJ(y,P.W))}},
hY:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cY()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aA(w,!1)
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
this.d.aN(this.e)}}catch(v){z=H.as(v)
y=H.bw(v)
P.dD("Error: "+H.l(z))
P.dD("Stack: "+H.l(y))
throw H.a(z)}},
p:{
ju:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$iscQ)return E.eH(a,!0,!0,!0,!1)
y=W.dT(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gc6(a).h(0,y)
w=E.eH(y,!0,!0,!0,!1)
w.a=a
return w},
eH:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jt()
y=P.i7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.cz(a,"webgl",y)
x=H.f(x==null?C.l.cz(a,"experimental-webgl",y):x,"$isex")
if(x==null)H.t(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j_(x,a)
w=new T.jp(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jX(a)
v=new X.i0()
v.c=new X.aY(!1,!1,!1)
v.d=P.ia(null,null,null,P.m)
w.b=v
v=new X.ix(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ie(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jz(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eC,P.b]])
w.z=v
u=document
t=W.aB
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a3(u,"contextmenu",H.h(w.gf0(),s),!1,t))
v=w.z
r=W.ad
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.h(w.gf3(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.h(w.geX(),q),!1,r))
v=w.z
p=W.bF
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.h(w.gf5(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.h(w.gf4(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.h(w.gf8(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.h(w.gfa(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.h(w.gf9(),s),!1,t))
p=w.z
o=W.bP;(p&&C.a).h(p,W.a3(a,H.K(W.hF(a)),H.h(w.gfb(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.h(w.gf1(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.h(w.gf2(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.h(w.gfc(),q),!1,r))
r=w.z
q=W.bm
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.h(w.gfj(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.h(w.gfh(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.h(w.gfi(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aA(Date.now(),!1)
z.ch=0
z.cY()
return z}}},jv:{"^":"n:31;a",
$1:function(a){var z
H.mR(a)
z=this.a
if(z.z){z.z=!1
z.hY()}}}}],["","",,Z,{"^":"",fd:{"^":"b;a,b",p:{
dj:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bq(c)),35044)
a.bindBuffer(b,null)
return new Z.fd(b,z)}}},dP:{"^":"cM;a,b,c,d,e",
bl:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.as(y)
x=P.v('Failed to bind buffer attribute "'+J.aa(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.aa(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},kh:{"^":"b;a",$isnb:1},dQ:{"^":"b;a,0b,c,d",
aK:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bl:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bl(a)},
e5:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aN:function(a){var z,y,x,w,v
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
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.aa(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.E(y,", ")+"\nAttrs:   "+C.a.E(u,", ")},
$isoE:1},cm:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bd(this.c)+"'")+"]"}},bn:{"^":"b;a",
gcC:function(a){var z,y
z=this.a
y=(z&$.$get$aQ().a)!==0?3:0
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bN().a)!==0)y+=3
if((z&$.$get$bO().a)!==0)y+=4
if((z&$.$get$bo().a)!==0)++y
return(z&$.$get$aN().a)!==0?y+4:y},
ha:function(a){var z,y,x
z=$.$get$aQ()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bo()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fc()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bn))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.i])
y=this.a
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bN().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bO().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bo().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.E(z,"|")},
p:{
aq:function(a){return new Z.bn(a)}}}}],["","",,D,{"^":"",dU:{"^":"b;"},b7:{"^":"b;0a,0b,0c",
I:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.hJ(z))
return x!==0},
i1:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.I(y)}}},
ah:function(a){return this.i1(a,!0,!1)},
p:{
T:function(){var z=new D.b7()
z.a=H.e([],[{func:1,ret:-1,args:[D.u]}])
z.c=0
return z}}},hJ:{"^":"n:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"b;a,0b"},cn:{"^":"u;c,d,a,0b,$ti"},co:{"^":"u;c,d,a,0b,$ti"},N:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dR:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dR))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"nd<"}},ed:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ed))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ee:{"^":"u;c,a,0b"},i0:{"^":"b;0a,0b,0c,0d",
hS:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ee(a,this)
y.b=!0
return z.I(y)},
hO:function(a){var z,y
this.c=a.b
this.d.N(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ee(a,this)
y.b=!0
return z.I(y)}},ei:{"^":"d8;x,y,c,d,e,a,0b"},ie:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
at:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aA(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.V(y.a+x*w,y.b+v*u)
u=this.a.gbo()
s=new X.c6(a,new V.V(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cl:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.I(this.at(a,b))
return!0},
b5:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ed()
if(typeof z!=="number")return z.bG()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.I(this.at(a,b))
return!0},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.I(this.at(a,b))
return!0},
hT:function(a){return!1},
f7:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aA(Date.now(),!1)
y=this.f
x=new X.ei(c,a,this.a.gbo(),b,z,this)
x.b=!0
y.I(x)
this.y=z
this.x=new V.V(0,0)}},aY:{"^":"b;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aY))return!1
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
return z+(this.c?"Shift+":"")}},c6:{"^":"d8;x,y,z,Q,ch,c,d,e,a,0b"},ix:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bQ:function(a,b,c){var z,y,x
z=new P.aA(Date.now(),!1)
y=this.a.gbo()
x=new X.c6(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cl:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.I(this.bQ(a,b,!0))
return!0},
b5:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ed()
if(typeof z!=="number")return z.bG()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.I(this.bQ(a,b,!0))
return!0},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.I(this.bQ(a,b,!1))
return!0},
hU:function(a,b){return!1}},d8:{"^":"u;"},eL:{"^":"d8;x,y,z,Q,ch,c,d,e,a,0b"},jz:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
at:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.V],"$asc")
z=new P.aA(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gbo()
w=new X.eL(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hR:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.b
if(z==null)return!1
z.I(this.at(a,!0))
return!0},
hP:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.c
if(z==null)return!1
z.I(this.at(a,!0))
return!0},
hQ:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.d
if(z==null)return!1
z.I(this.at(a,!1))
return!0}},jX:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbo:function(){var z=this.a
return V.ew(0,0,(z&&C.l).gbn(z).c,C.l.gbn(z).d)},
cP:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ed(z,new X.aY(y,a.altKey,a.shiftKey))},
aG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aY(y,a.altKey,a.shiftKey)},
c_:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aY(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=z.top
if(typeof x!=="number")return x.S()
return new V.V(y-w,x-v)},
aS:function(a){return new V.a6(a.movementX,a.movementY)},
bU:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.V])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.h.ad(u.pageX)
C.h.ad(u.pageY)
s=z.left
C.h.ad(u.pageX)
C.a.h(y,new V.V(t-s,C.h.ad(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dR(z,new X.aY(y,a.altKey,a.shiftKey))},
ix:[function(a){this.f=!0},"$1","gf3",4,0,4],
iq:[function(a){this.f=!1},"$1","geX",4,0,4],
iu:[function(a){if(this.f)a.preventDefault()},"$1","gf0",4,0,4],
iz:[function(a){var z
H.f(a,"$isbF")
if(!this.f)return
z=this.cP(a)
if(this.b.hS(z))a.preventDefault()},"$1","gf5",4,0,19],
iy:[function(a){var z
H.f(a,"$isbF")
if(!this.f)return
z=this.cP(a)
if(this.b.hO(z))a.preventDefault()},"$1","gf4",4,0,19],
iB:[function(a){var z,y,x,w
H.f(a,"$isaB")
z=this.a
z.focus()
this.f=!0
this.aG(a)
if(this.x){y=this.ar(a)
x=this.aS(a)
if(this.d.cl(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.au(a)
if(this.c.cl(y,w))a.preventDefault()},"$1","gf8",4,0,5],
iD:[function(a){var z,y,x
H.f(a,"$isaB")
this.aG(a)
z=this.ar(a)
if(this.x){y=this.aS(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b5(z,x))a.preventDefault()},"$1","gfa",4,0,5],
iw:[function(a){var z,y,x,w
H.f(a,"$isaB")
z=this.a
if(!(z&&C.l).gbn(z).dd(0,new P.bJ(a.clientX,a.clientY,[P.W]))){this.aG(a)
y=this.ar(a)
if(this.x){x=this.aS(a)
if(this.d.b5(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b5(y,w))a.preventDefault()}},"$1","gf2",4,0,5],
iC:[function(a){var z,y,x
H.f(a,"$isaB")
this.aG(a)
z=this.ar(a)
if(this.x){y=this.aS(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b4(z,x))a.preventDefault()},"$1","gf9",4,0,5],
iv:[function(a){var z,y,x,w
H.f(a,"$isaB")
z=this.a
if(!(z&&C.l).gbn(z).dd(0,new P.bJ(a.clientX,a.clientY,[P.W]))){this.aG(a)
y=this.ar(a)
if(this.x){x=this.aS(a)
if(this.d.b4(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b4(y,w))a.preventDefault()}},"$1","gf1",4,0,5],
iE:[function(a){var z,y
H.f(a,"$isbP")
this.aG(a)
z=new V.a6((a&&C.A).ghk(a),C.A.ghl(a)).A(0,180)
if(this.x){if(this.d.hT(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.hU(z,y))a.preventDefault()},"$1","gfb",4,0,35],
iF:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.au(this.y)
this.d.f7(w,v,x)}},"$1","gfc",4,0,4],
iL:[function(a){var z
H.f(a,"$isbm")
this.a.focus()
this.f=!0
this.c_(a)
z=this.bU(a)
if(this.e.hR(z))a.preventDefault()},"$1","gfj",4,0,13],
iJ:[function(a){var z
H.f(a,"$isbm")
this.c_(a)
z=this.bU(a)
if(this.e.hP(z))a.preventDefault()},"$1","gfh",4,0,13],
iK:[function(a){var z
H.f(a,"$isbm")
this.c_(a)
z=this.bU(a)
if(this.e.hQ(z))a.preventDefault()},"$1","gfi",4,0,13]}}],["","",,D,{"^":"",hz:{"^":"b;",$isa2:1,$isaK:1},a2:{"^":"b;",$isaK:1},i1:{"^":"aH;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.T()
this.Q=z}return z},
a8:function(a){var z=this.Q
if(!(z==null))z.I(a)},
f6:[function(a){var z
H.f(a,"$isu")
z=this.ch
if(!(z==null))z.I(a)},function(){return this.f6(null)},"iA","$1","$0","gcV",0,2,1],
iG:[function(a){var z,y,x
H.w(a,"$isj",[D.a2],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(x==null||this.eF(x))return!1}return!0},"$1","gfe",4,0,37],
im:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcV(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.f(b[u],"$isa2")
if(t instanceof D.cu)C.a.h(this.r,t)
s=t.z
if(s==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.z=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.cn(a,b,this,[z])
z.b=!0
this.a8(z)},"$2","geU",8,0,18],
iI:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcV(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.f(b[u],"$isa2")
if(t instanceof D.cu)C.a.N(this.r,t)
s=t.z
if(s==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.z=s}H.h(x,w)
C.a.N(s.a,x)}z=new D.co(a,b,this,[z])
z.b=!0
this.a8(z)},"$2","gfg",8,0,18],
eF:function(a){var z=C.a.bp(this.r,a)
return z},
$asj:function(){return[D.a2]},
$asaH:function(){return[D.a2]}},iG:{"^":"b;",$isa2:1,$isaK:1},cu:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gB:function(){var z=this.z
if(z==null){z=D.T()
this.z=z}return z},
a8:[function(a){var z
H.f(a,"$isu")
z=this.z
if(!(z==null))z.I(a)},function(){return this.a8(null)},"ir","$1","$0","geY",0,2,1],
$isa2:1,
$isaK:1},jq:{"^":"b;",$isa2:1,$isaK:1},jr:{"^":"b;",$isa2:1,$isaK:1},js:{"^":"b;",$isa2:1,$isaK:1}}],["","",,V,{"^":"",
nf:[function(a,b){if(typeof b!=="number")return b.S()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iu",8,0,33],
n2:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.bd(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.b.ac("null",c)
return C.b.ac(C.h.e4($.p.$2(a,0)?0:a,b),c+b+1)},
bv:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.r],"$asc")
z=H.e([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.A)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.b.ac(z[u],x))}return z},
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
b3:{"^":"b;a,b,c,d",
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
return new V.b3(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b3))return!1
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
cq:{"^":"b;a,b,c,d,e,f,r,x,y",
ae:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$iscq")
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
return new V.cq(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.k(a3,s),C.h.k(a1,q)+C.h.k(a2,o)+C.h.k(a3,m),C.h.k(a1,k)+C.h.k(a2,j)+C.h.k(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cq))return!1
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
y=V.bv(H.e([this.a,this.d,this.r],z),3,0)
x=V.bv(H.e([this.b,this.e,this.x],z),3,0)
w=V.bv(H.e([this.c,this.f,this.y],z),3,0)
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
av:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ae:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
dN:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.c5()
a3=1/a2
a4=-w
a5=-i
return V.aJ((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isav")
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
return V.aJ(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cu:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
aP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(!(b instanceof V.av))return!1
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
i:function(a){return this.L()},
dF:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.bv(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bv(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bv(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bv(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
L:function(){return this.dF("",3,0)},
C:function(a){return this.dF(a,3,0)},
p:{
aJ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c5:function(){return V.aJ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
en:function(a,b,c){return V.aJ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
em:function(a,b,c,d){return V.aJ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
el:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aJ(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)}}},
V:{"^":"b;q:a>,t:b>",
S:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
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
S:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
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
bK:{"^":"b;q:a>,t:b>,c,d",
k:function(a,b){return new V.bK(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bK))return!1
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
ev:{"^":"b;q:a>,t:b>,c,d",
gao:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ev))return!1
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
ew:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ev(a,b,c,d)}}},
a6:{"^":"b;a,b",
hA:[function(a){return Math.sqrt(this.F(this))},"$0","gl",1,0,24],
F:function(a){var z,y,x,w
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
return new V.a6(z*b,y*b)},
A:function(a,b){var z,y
if($.p.$2(b,0))return new V.a6(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.a6(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
hA:[function(a){return Math.sqrt(this.F(this))},"$0","gl",1,0,24],
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ck:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
av:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.E(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.p.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dO:function(){if(!$.p.$2(0,this.a))return!1
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
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hp:{"^":"dU;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bL:function(a){var z=V.n2(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.T()
this.y=z}return z},
Z:function(a){var z=this.y
if(!(z==null))z.I(a)},
se8:function(a,b){},
sdP:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bL(z)}z=new D.N("maximumLocation",y,this.b,this,[P.r])
z.b=!0
this.Z(z)}},
sdR:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bL(z)}z=new D.N("minimumLocation",y,this.c,this,[P.r])
z.b=!0
this.Z(z)}},
sa1:function(a,b){var z,y
b=this.bL(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.N("location",y,b,this,[P.r])
z.b=!0
this.Z(z)}},
sdQ:function(a){var z,y,x
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
this.Z(z)}},
sY:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.N("velocity",x,a,this,[P.r])
z.b=!0
this.Z(z)}},
sde:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.N("dampening",y,a,this,[P.r])
z.b=!0
this.Z(z)}},
ap:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sY(y)}},
p:{
dW:function(){var z=new U.hp()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dX:{"^":"aj;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.T()
this.b=z}return z},
aQ:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dX))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
p:{
c_:function(a){var z=new U.dX()
z.a=a
return z}}},e7:{"^":"aH;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.T()
this.e=z}return z},
Z:[function(a){var z
H.f(a,"$isu")
z=this.e
if(!(z==null))z.I(a)},function(){return this.Z(null)},"aC","$1","$0","gbf",0,2,1],
ia:[function(a,b){var z,y,x,w,v,u,t
z=U.aj
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbf(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.A)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.cn(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","ges",8,0,23],
iH:[function(a,b){var z,y,x,w,v,u,t
z=U.aj
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbf(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.A)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.h(x,w)
C.a.N(t.a,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gff",8,0,23],
aQ:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.au(z,z.length,0,[H.y(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aQ(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.c5():x
z=this.e
if(!(z==null))z.ah(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e7))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.aj]},
$asaH:function(){return[U.aj]},
$isaj:1,
p:{
cV:function(a){var z=new U.e7()
z.bK(U.aj)
z.be(z.ges(),z.gff())
z.e=null
z.f=V.c5()
z.r=0
return z}}},aj:{"^":"dU;"},jY:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.T()
this.fx=z}return z},
Z:[function(a){var z
H.f(a,"$isu")
z=this.fx
if(!(z==null))z.I(a)},function(){return this.Z(null)},"aC","$1","$0","gbf",0,2,1],
hb:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.T()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.u]}
x=H.h(this.geQ(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.T()
x.d=z}x=H.h(this.geR(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.T()
x.c=z}x=H.h(this.geS(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.T()
x.f=z}x=H.h(this.geN(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.T()
x.d=z}x=H.h(this.geO(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.T()
x.b=z}x=H.h(this.gfG(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.T()
x.d=z}x=H.h(this.gfF(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.T()
x.c=z}y=H.h(this.gfE(),y)
C.a.h(z.a,y)
return!0},
ak:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.a6(z,y)},
ij:[function(a){a=H.k(H.f(a,"$isu"),"$isc6")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geQ",4,0,2],
ik:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isu"),"$isc6")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a6(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.ak(new V.a6(y.a,y.b).k(0,2).A(0,z.gao()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ak(new V.a6(x.a,x.b).k(0,2).A(0,z.gao()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.S(0,a.z)
this.dx=this.ak(new V.a6(y.a,y.b).k(0,2).A(0,z.gao()))}this.aC()},"$1","geR",4,0,2],
il:[function(a){var z,y,x
H.f(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sY(-y*10*z)
this.aC()}},"$1","geS",4,0,2],
ih:[function(a){if(H.k(H.f(a,"$isu"),"$isei").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geN",4,0,2],
ii:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isu"),"$isc6")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ak(new V.a6(x.a,x.b).k(0,2).A(0,z.gao()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.S(0,a.z)
this.dx=this.ak(new V.a6(y.a,y.b).k(0,2).A(0,z.gao()))
this.aC()},"$1","geO",4,0,2],
iP:[function(a){H.f(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfG",4,0,2],
iO:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isu"),"$iseL")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a6(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.ak(new V.a6(y.a,y.b).k(0,2).A(0,z.gao()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ak(new V.a6(x.a,x.b).k(0,2).A(0,z.gao()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.S(0,a.z)
this.dx=this.ak(new V.a6(y.a,y.b).k(0,2).A(0,z.gao()))}this.aC()},"$1","gfF",4,0,2],
iN:[function(a){var z,y,x
H.f(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sY(-y*10*z)
this.aC()}},"$1","gfE",4,0,2],
aQ:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.dy=y
x=b.y
this.c.ap(0,x)
this.b.ap(0,x)
z=V.el(this.b.d)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aJ(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaj:1,
p:{
f8:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.jY()
y=U.dW()
y.se8(0,!0)
y.sdP(6.283185307179586)
y.sdR(0)
y.sa1(0,0)
y.sdQ(100)
y.sY(0)
y.sde(0.5)
z.b=y
y=y.gB()
y.toString
x=H.h(z.gbf(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)
y=U.dW()
y.se8(0,!0)
y.sdP(6.283185307179586)
y.sdR(0)
y.sa1(0,0)
y.sdQ(100)
y.sY(0)
y.sde(0.5)
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
w=new X.aY(b,!1,!1)
v=z.d
z.d=w
y=new D.N("modifiers",v,w,z,[X.aY])
y.b=!0
z.Z(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.N("invertX",y,!1,z,[P.ah])
y.b=!0
z.Z(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.N("invertY",y,!1,z,[P.ah])
y.b=!0
z.Z(y)}z.hb(c)
return z}}}}],["","",,M,{"^":"",hH:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aD:[function(a){var z
H.f(a,"$isu")
z=this.x
if(!(z==null))z.I(a)},function(){return this.aD(null)},"ib","$1","$0","gaj",0,2,1],
is:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaj(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.cn(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","geZ",8,0,8],
it:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaj(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.h(x,w)
C.a.N(s.a,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gf_",8,0,8],
sb7:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.h(this.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.N(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.N("technique",x,this.c,this,[O.cv])
z.b=!0
this.aD(z)}},
gB:function(){var z=this.x
if(z==null){z=D.T()
this.x=z}return z},
aN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.e_(this.c)
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
u=C.d.ad(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.d.ad(v.b*w)
s=C.d.ad(v.c*x)
a.c=s
v=C.d.ad(v.d*w)
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
s.dZ(V.aJ(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.es
if(y==null){y=new V.E(0,0,-1)
m=y.A(0,Math.sqrt(y.F(y)))
y=new V.E(0,1,0).av(m)
l=y.A(0,Math.sqrt(y.F(y)))
k=m.av(l)
j=new V.E(0,0,0)
y=V.aJ(l.a,k.a,m.a,l.P(0).F(j),l.b,k.b,m.b,k.P(0).F(j),l.c,k.c,m.c,m.P(0).F(j),0,0,0,1)
$.es=y
i=y}else i=y
y=z.a
if(y!=null){h=y.aQ(0,a,z)
if(h!=null)i=h.k(0,i)}a.db.dZ(i)
z=this.c
if(z!=null)z.ap(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.G();)z.d.ap(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aN(a)
this.a.toString
a.cy.cm()
a.db.cm()
this.b.toString
a.dY()},
$isoq:1}}],["","",,A,{"^":"",dK:{"^":"b;a,b,c"},hd:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hm:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},il:{"^":"ey;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aI,0ax,0aJ,0br,0df,0dg,0bs,0bt,0dh,0di,0bu,0bv,0dj,0dk,0bw,0dl,0dm,0bx,0dn,0dq,0by,0bz,0bA,0dr,0ds,0bB,0bC,0dt,0du,0bD,0dv,0ca,0dw,0cb,0dz,0cc,0dA,0cd,0dB,0ce,0dC,0cf,a,b,0c,0d,0e,0f,0r",
ek:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.an("")
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
a2.fJ(z)
a2.fQ(z)
a2.fK(z)
a2.fY(z)
a2.fZ(z)
a2.fS(z)
a2.h2(z)
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
z=new P.an("")
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
v.fN(z)
v.fI(z)
v.fL(z)
v.fO(z)
v.fW(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fU(z)
v.fV(z)}v.fR(z)
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
p=H.e([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.E(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fM(z)
v.fT(z)
v.fX(z)
v.h_(z)
v.h0(z)
v.h1(z)
v.fP(z)}r=z.a+="// === Main ===\n"
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
o=H.e([],[P.i])
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
n="vec4("+C.a.E(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cQ(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cQ(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fN(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.t(P.v("Failed to link shader: "+H.l(m)))}this.fz()
this.fB()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaM")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaM")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaM")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaM")
if(a2.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isdg")
if(a2.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaM")
if(a2.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaM")
this.k3=H.e([],[A.aM])
y=a2.aI
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isL")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.t(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaM"))}}y=a2.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isL")
break
case C.f:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isap")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isL")
break}}y=a2.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isL")
break
case C.f:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isap")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isL")
break}}y=a2.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.aI=H.k(this.r.n(0,"diffuseTxt"),"$isao")
this.aJ=H.k(this.r.n(0,"nullDiffuseTxt"),"$isL")
break
case C.f:this.ax=H.k(this.r.n(0,"diffuseTxt"),"$isap")
this.aJ=H.k(this.r.n(0,"nullDiffuseTxt"),"$isL")
break}}y=a2.d
if(y!==C.c){this.br=H.k(this.r.n(0,"invDiffuseClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.df=H.k(this.r.n(0,"invDiffuseTxt"),"$isao")
this.bs=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isL")
break
case C.f:this.dg=H.k(this.r.n(0,"invDiffuseTxt"),"$isap")
this.bs=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isL")
break}}y=a2.e
if(y!==C.c){this.bv=H.k(this.r.n(0,"shininess"),"$isZ")
this.bt=H.k(this.r.n(0,"specularClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dh=H.k(this.r.n(0,"specularTxt"),"$isao")
this.bu=H.k(this.r.n(0,"nullSpecularTxt"),"$isL")
break
case C.f:this.di=H.k(this.r.n(0,"specularTxt"),"$isap")
this.bu=H.k(this.r.n(0,"nullSpecularTxt"),"$isL")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.e:this.dj=H.k(this.r.n(0,"bumpTxt"),"$isao")
this.bw=H.k(this.r.n(0,"nullBumpTxt"),"$isL")
break
case C.f:this.dk=H.k(this.r.n(0,"bumpTxt"),"$isap")
this.bw=H.k(this.r.n(0,"nullBumpTxt"),"$isL")
break}if(a2.dy){this.dl=H.k(this.r.n(0,"envSampler"),"$isap")
this.dm=H.k(this.r.n(0,"nullEnvTxt"),"$isL")
y=a2.r
if(y!==C.c){this.bx=H.k(this.r.n(0,"reflectClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dn=H.k(this.r.n(0,"reflectTxt"),"$isao")
this.by=H.k(this.r.n(0,"nullReflectTxt"),"$isL")
break
case C.f:this.dq=H.k(this.r.n(0,"reflectTxt"),"$isap")
this.by=H.k(this.r.n(0,"nullReflectTxt"),"$isL")
break}}y=a2.x
if(y!==C.c){this.bz=H.k(this.r.n(0,"refraction"),"$isZ")
this.bA=H.k(this.r.n(0,"refractClr"),"$isJ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dr=H.k(this.r.n(0,"refractTxt"),"$isao")
this.bB=H.k(this.r.n(0,"nullRefractTxt"),"$isL")
break
case C.f:this.ds=H.k(this.r.n(0,"refractTxt"),"$isap")
this.bB=H.k(this.r.n(0,"nullRefractTxt"),"$isL")
break}}}y=a2.y
if(y!==C.c){this.bC=H.k(this.r.n(0,"alpha"),"$isZ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dt=H.k(this.r.n(0,"alphaTxt"),"$isao")
this.bD=H.k(this.r.n(0,"nullAlphaTxt"),"$isL")
break
case C.f:this.du=H.k(this.r.n(0,"alphaTxt"),"$isap")
this.bD=H.k(this.r.n(0,"nullAlphaTxt"),"$isL")
break}}this.ca=H.e([],[A.eY])
this.cb=H.e([],[A.eZ])
this.cc=H.e([],[A.f_])
this.cd=H.e([],[A.f0])
this.ce=H.e([],[A.f1])
this.cf=H.e([],[A.f2])
if(a2.k2){y=a2.z
if(y>0){this.dv=H.f(this.r.n(0,"dirLightCount"),"$isL")
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
x=this.ca;(x&&C.a).h(x,new A.eY(l,k,j))}}y=a2.Q
if(y>0){this.dw=H.f(this.r.n(0,"pntLightCount"),"$isL")
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
x=this.cb;(x&&C.a).h(x,new A.eZ(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dz=H.f(this.r.n(0,"spotLightCount"),"$isL")
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
x=this.cc;(x&&C.a).h(x,new A.f_(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dA=H.f(this.r.n(0,"txtDirLightCount"),"$isL")
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
H.k(e,"$isao")
x=this.cd;(x&&C.a).h(x,new A.f0(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dB=H.f(this.r.n(0,"txtPntLightCount"),"$isL")
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
H.k(i,"$isdg")
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
H.k(c,"$isap")
x=this.ce;(x&&C.a).h(x,new A.f1(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dC=H.f(this.r.n(0,"txtSpotLightCount"),"$isL")
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
H.k(a1,"$isao")
x=this.cf;(x&&C.a).h(x,new A.f2(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ag:function(a,b,c){b.a.uniform1i(b.d,1)},
a9:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
im:function(a,b){var z,y
z=a.ax
y=new A.il(b,z)
y.en(b,z)
y.ek(a,b)
return y}}},ir:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aI,ax,aJ",
fJ:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aI+"];\n"
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
fQ:function(a){var z
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
fK:function(a){var z
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
fY:function(a){var z,y
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
fZ:function(a){var z,y
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
fS:function(a){var z
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
h2:function(a){var z
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
as:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aA(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fN:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.as(a,z,"emission")
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
fI:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.as(a,z,"ambient")
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
fL:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"diffuse")
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
fO:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"invDiffuse")
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
fW:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.as(a,z,"specular")
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
fR:function(a){var z,y
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
fU:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.as(a,z,"reflect")
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
fV:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.as(a,z,"refract")
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
fM:function(a){var z,y
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
fT:function(a){var z,y
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
fX:function(a){var z,y
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
h_:function(a){var z,y,x
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
h0:function(a){var z,y,x
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
h1:function(a){var z,y,x
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
fP:function(a){var z
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
i:function(a){return this.ax}},eY:{"^":"b;a,b,c"},f0:{"^":"b;a,b,c,d,e,f,r,x"},eZ:{"^":"b;a,b,c,d,e,f,r"},f1:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f_:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f2:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ey:{"^":"cM;",
en:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cQ:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fN(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fz:function(){var z,y,x,w,v,u
z=H.e([],[A.dK])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dK(y,v.name,u))}this.f=new A.hd(z)},
fB:function(){var z,y,x,w,v,u
z=H.e([],[A.ac])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hj(v.type,v.size,v.name,u))}this.r=new A.jJ(z)},
aF:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.L(z,y,b,c)
else return A.df(z,y,b,a,c)},
eG:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.df(z,y,b,a,c)},
eH:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ap(z,y,b,c)
else return A.df(z,y,b,a,c)},
bk:function(a,b){return new P.fg(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hj:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.Z(this.a,this.e,c,d)
case 35664:return new A.jE(this.a,this.e,c,d)
case 35665:return new A.J(this.a,this.e,c,d)
case 35666:return new A.jH(this.a,this.e,c,d)
case 35667:return new A.jF(this.a,this.e,c,d)
case 35668:return new A.jG(this.a,this.e,c,d)
case 35669:return new A.jI(this.a,this.e,c,d)
case 35674:return new A.jL(this.a,this.e,c,d)
case 35675:return new A.dg(this.a,this.e,c,d)
case 35676:return new A.aM(this.a,this.e,c,d)
case 35678:return this.eG(b,c,d)
case 35680:return this.eH(b,c,d)
case 35670:throw H.a(this.bk("BOOL",c))
case 35671:throw H.a(this.bk("BOOL_VEC2",c))
case 35672:throw H.a(this.bk("BOOL_VEC3",c))
case 35673:throw H.a(this.bk("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ci:{"^":"b;a,b",
i:function(a){return this.b}},ac:{"^":"b;"},jJ:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
hs:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.hs("\n")}},L:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jF:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jG:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jI:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jD:{"^":"ac;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
df:function(a,b,c,d,e){var z=new A.jD(a,b,c,e)
z.f=d
z.e=P.ib(d,0,!1,P.m)
return z}}},Z:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jE:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},J:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jH:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jL:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dg:{"^":"ac;a,b,c,d",
ai:function(a){var z=new Float32Array(H.bq(H.w(a,"$isc",[P.r],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aM:{"^":"ac;a,b,c,d",
ai:function(a){var z=new Float32Array(H.bq(H.w(a,"$isc",[P.r],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ao:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ap:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dv:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.af,P.r,P.r]})
z=F.da()
F.bU(z,b,c,d,a,1,0,0,1)
F.bU(z,b,c,d,a,0,1,0,3)
F.bU(z,b,c,d,a,0,0,1,2)
F.bU(z,b,c,d,a,-1,0,0,0)
F.bU(z,b,c,d,a,0,-1,0,0)
F.bU(z,b,c,d,a,0,0,-1,3)
z.al()
return z},
cB:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bU:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.af,P.r,P.r]})
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
z.d=y}l=F.cB(y)
k=F.cB(z.b)
j=F.dE(d,e,new F.m3(z,F.cB(z.c),F.cB(z.d),k,l,c),b)
if(j!=null)a.b3(j)},
fP:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.r,args:[P.r]})
if(e<3)return
z=F.da()
y=b?-1:1
x=-6.283185307179586/e
w=H.e([],[F.af])
v=z.a
u=new V.E(0,0,y)
u=u.A(0,Math.sqrt(u.F(u)))
C.a.h(w,v.h6(new V.bK(a,-1,-1,-1),new V.b3(1,1,1,1),new V.Y(0,0,c),new V.E(0,0,y),new V.V(0.5,0.5),u))
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
k=F.ca(new V.bK(a,-1,-1,-1),null,new V.b3(n,l,m,1),new V.Y(r*p,q*p,c),new V.E(0,0,y),new V.V(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.h4(w)
return z},
dw:function(a,b,c,d,e,f){return F.mn(b,c,d,new F.mm(a,f),e)},
mn:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
z=F.dE(c,e,new F.mp(d),null)
if(z==null)return
z.al()
z.c0()
if(b)z.b3(F.fP(3,!1,1,new F.mq(d),e))
if(a)z.b3(F.fP(1,!0,-1,new F.mr(d),e))
return z},
mX:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.mY()
y=F.dv(a,null,new F.mZ(z),c)
y.c0()
return y},
h3:function(a,b,c,d){return F.fO(c,a,d,b,new F.n0())},
mG:function(a,b,c,d,e,f){return F.fO(d,a,e,b,new F.mH(f,c))},
fO:function(a,b,c,d,e){var z=F.dE(a,b,new F.mo(H.h(e,{func:1,ret:V.Y,args:[P.r]}),d,b,c),null)
if(z==null)return
z.al()
z.c0()
return z},
dE:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.af,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.da()
y=H.e([],[F.af])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ca(null,null,new V.b3(u,0,0,1),null,null,new V.V(w,1),null,null,0)
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
t=F.ca(null,null,new V.b3(o,n,m,1),null,null,new V.V(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c8(d))}}z.d.h5(a+1,b+1,y)
return z},
m3:{"^":"n:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.ck(z.b,b).ck(z.d.ck(z.c,b),c)
a.sa1(0,new V.Y(y.a,y.b,y.c))
a.se2(y.A(0,Math.sqrt(y.F(y))))
z=1-b
x=1-c
a.sda(new V.bK(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mm:{"^":"n:14;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mp:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sa1(0,new V.Y(y,u,w))
u=new V.E(y,u,w)
a.se2(u.A(0,Math.sqrt(u.F(u))))
a.sda(new V.bK(1-c,2+c,-1,-1))}},
mq:{"^":"n:15;a",
$1:function(a){return this.a.$2(a,1)}},
mr:{"^":"n:15;a",
$1:function(a){return this.a.$2(1-a,0)}},
mY:{"^":"n:14;",
$2:function(a,b){return 0}},
mZ:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.A(0,Math.sqrt(x.F(x))).k(0,1+z)
a.sa1(0,new V.Y(z.a,z.b,z.c))}},
n0:{"^":"n:22;",
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)}},
mH:{"^":"n:22;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Y(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mo:{"^":"n:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dF(y.$1(z),x)
x=J.dF(y.$1(z+3.141592653589793/this.c),x).S(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.F(x)))
u=new V.E(1,0,0)
y=v.av(!v.u(0,u)?new V.E(0,0,1):u)
t=y.A(0,Math.sqrt(y.F(y)))
y=t.av(v)
u=y.A(0,Math.sqrt(y.F(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa1(0,w.D(0,new V.Y(y.a-x.a,y.b-x.b,y.c-x.c)))}},
am:{"^":"b;0a,0b,0c,0d,0e",
aw:function(){if(!this.gaV()){C.a.N(this.a.a.d.b,this)
this.a.a.X()}this.bW()
this.bX()
this.fm()},
fu:function(a){this.a=a
C.a.h(a.d.b,this)},
fv:function(a){this.b=a
C.a.h(a.d.c,this)},
fw:function(a){this.c=a
C.a.h(a.d.d,this)},
bW:function(){var z=this.a
if(z!=null){C.a.N(z.d.b,this)
this.a=null}},
bX:function(){var z=this.b
if(z!=null){C.a.N(z.d.c,this)
this.b=null}},
fm:function(){var z=this.c
if(z!=null){C.a.N(z.d.d,this)
this.c=null}},
gaV:function(){return this.a==null||this.b==null||this.c==null},
eA:function(){var z,y,x,w,v
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
if(v.dO())return
return v.A(0,Math.sqrt(v.F(v)))},
eD:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.S(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.F(z)))
z=w.S(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.av(z.A(0,Math.sqrt(z.F(z))))
return z.A(0,Math.sqrt(z.F(z)))},
c5:function(){if(this.d!=null)return!0
var z=this.eA()
if(z==null){z=this.eD()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
ez:function(){var z,y,x,w,v
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
if(v.dO())return
return v.A(0,Math.sqrt(v.F(v)))},
eC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.S(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.F(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.S(0,u).k(0,l).D(0,u).S(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.F(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.F(z)))
z=k.av(m)
z=z.A(0,Math.sqrt(z.F(z))).av(k)
m=z.A(0,Math.sqrt(z.F(z)))}return m},
c3:function(){if(this.e!=null)return!0
var z=this.ez()
if(z==null){z=this.eC()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
aZ:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.P(0)
y=this.e
if(y!=null)this.e=y.P(0)
this.a.a.X()},
ghf:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z,y
if(this.gaV())return a+"disposed"
z=a+C.b.ac(J.aa(this.a.e),0)+", "+C.b.ac(J.aa(this.b.e),0)+", "+C.b.ac(J.aa(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.C("")},
p:{
bB:function(a,b,c){var z,y,x
z=new F.am()
y=a.a
if(y==null)H.t(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.v("May not create a face with vertices attached to different shapes."))
z.fu(a)
z.fv(b)
z.fw(c)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
hK:{"^":"b;"},
jg:{"^":"hK;",
b2:function(a,b,c){var z,y
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
d0:{"^":"b;0a,0b",
aw:function(){if(!this.gaV()){C.a.N(this.a.a.c.b,this)
this.a.a.X()}this.bW()
this.bX()},
bW:function(){var z=this.a
if(z!=null){C.a.N(z.c.b,this)
this.a=null}},
bX:function(){var z=this.b
if(z!=null){C.a.N(z.c.c,this)
this.b=null}},
gaV:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){if(this.gaV())return a+"disposed"
return a+C.b.ac(J.aa(this.a.e),0)+", "+C.b.ac(J.aa(this.b.e),0)},
L:function(){return this.C("")}},
i2:{"^":"b;"},
jC:{"^":"i2;",
b2:function(a,b,c){var z,y
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
d7:{"^":"b;0a",
aw:function(){var z=this.a
if(z!=null){C.a.N(z.a.b.b,this)
this.a.a.X()}this.fl()},
fl:function(){var z=this.a
if(z!=null){C.a.N(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ac(J.aa(z.e),0)},
L:function(){return this.C("")}},
ez:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.T()
this.e=z}return z},
b3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){v=z[w]
this.a.h(0,v.hh())}this.a.w()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){u=z[w]
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
s=new F.d7()
if(r.a==null)H.t(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.I(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){q=z[w]
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
t=new F.d0()
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
if(!(t==null))t.I(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){m=z[w]
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
F.bB(p,o,l)}z=this.e
if(!(z==null))z.ah(0)},
al:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.al()||!1
if(!this.a.al())y=!1
z=this.e
if(!(z==null))z.ah(0)
return y},
eL:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.af],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.b2(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hE:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.af],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.eL(a,v,y,u,t))b.b3(u)}this.a.w()
this.c.cq()
this.d.cq()
this.b.hX()
this.c.cr(new F.jC())
this.d.cr(new F.jg())
z=this.e
if(!(z==null))z.ah(0)},
h9:function(a){this.hE(new F.kb(),new F.iB())},
c0:function(){return this.h9(null)},
aZ:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.aZ()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.d(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdS(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).A(0,Math.sqrt(w*w+v*v+z*z))
if(!J.P(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.I(null)}}}}z=this.e
if(!(z==null))z.ah(0)},
hd:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aQ()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$bN().a)!==0)++w
if((x&$.$get$bO().a)!==0)++w
if((x&$.$get$bo().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
v=b.gcC(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dP])
for(r=0,q=0;q<w;++q){p=b.ha(q)
o=p.gcC(p)
C.a.m(s,q,new Z.dP(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hB(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bq(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dQ(new Z.fd(34962,j),s,b)
i.b=H.e([],[Z.cm])
if(this.b.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.dj(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cm(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.dj(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cm(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.e([],[x])
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
C.a.h(h,g.e)}f=Z.dj(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cm(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.E(z,"\n")},
a4:function(a){var z=this.e
if(!(z==null))z.I(a)},
X:function(){return this.a4(null)},
p:{
da:function(){var z,y
z=new F.ez()
y=new F.k6(z)
y.b=!1
y.c=H.e([],[F.af])
z.a=y
y=new F.jb(z)
y.b=H.e([],[F.d7])
z.b=y
y=new F.ja(z)
y.b=H.e([],[F.d0])
z.c=y
y=new F.j9(z)
y.b=H.e([],[F.am])
z.d=y
z.e=null
return z}}},
j9:{"^":"b;a,0b",
h4:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.af],"$asc")
z=H.e([],[F.am])
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
C.a.h(z,F.bB(x,v,u))}}return z},
h5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.af],"$asc")
z=H.e([],[F.am])
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
C.a.h(z,F.bB(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bB(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bB(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bB(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cr:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b2(0,v,t)){v.aw()
break}}}}},
cq:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghf(x)
if(y)x.aw()}},
al:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].c5())x=!1
return x},
c4:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].c3())x=!1
return x},
aZ:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].aZ()},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
ja:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cr:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b2(0,v,t)){v.aw()
break}}}}},
cq:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.aw()}},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.E(z,"\n")},
L:function(){return this.C("")}},
jb:{"^":"b;a,0b",
gl:function(a){return this.b.length},
hX:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aw()}},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
af:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c8:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ca(this.cx,x,u,z,y,w,v,a,t)},
hh:function(){return this.c8(null)},
sa1:function(a,b){var z
if(!J.P(this.f,b)){this.f=b
z=this.a
if(z!=null)z.X()}},
sdS:function(a){var z
a=a.A(0,Math.sqrt(a.F(a)))
if(!J.P(this.r,a)){this.r=a
z=this.a
if(z!=null)z.X()}},
se2:function(a){var z
if(!J.P(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
sda:function(a){var z
if(!J.P(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.X()}},
hB:function(a){var z,y
z=J.M(a)
if(z.u(a,$.$get$aQ())){z=this.f
y=[P.r]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aP())){z=this.r
y=[P.r]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aO())){z=this.x
y=[P.r]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aR())){z=this.y
y=[P.r]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.u(a,$.$get$aS())){z=this.z
y=[P.r]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bN())){z=this.Q
y=[P.r]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bO())){z=this.Q
y=[P.r]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$bo()))return H.e([this.ch],[P.r])
else if(z.u(a,$.$get$aN())){z=this.cx
y=[P.r]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.r])},
c5:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.K(0,new F.kg(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ah(0)}return!0},
c3:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.K(0,new F.kf(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ah(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z,y,x
z=H.e([],[P.i])
C.a.h(z,C.b.ac(J.aa(this.e),0))
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
x=C.a.E(z,", ")
return a+"{"+x+"}"},
L:function(){return this.C("")},
p:{
ca:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.af()
y=new F.ke(z)
y.b=H.e([],[F.d7])
z.b=y
y=new F.ka(z)
x=[F.d0]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.k7(z)
x=[F.am]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$fa()
z.e=0
y=$.$get$aQ()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aP().a)!==0?e:null
z.x=(x&$.$get$aO().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$fb().a)!==0?c:null
z.ch=(x&$.$get$bo().a)!==0?i:0
z.cx=(x&$.$get$aN().a)!==0?a:null
return z}}},
kg:{"^":"n:10;a",
$1:function(a){var z,y
H.f(a,"$isam")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kf:{"^":"n:10;a",
$1:function(a){var z,y
H.f(a,"$isam")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
k6:{"^":"b;a,0b,0c",
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
h7:function(a,b,c,d,e,f,g,h,i){var z=F.ca(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
h6:function(a,b,c,d,e,f){return this.h7(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
al:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].c5()
return!0},
c4:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].c3()
return!0},
he:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.I(null)}}}}return!0},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
this.w()
z=H.e([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
k7:{"^":"b;a,0b,0c,0d",
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
K:function(a,b){H.h(b,{func:1,ret:-1,args:[F.am]})
C.a.K(this.b,b)
C.a.K(this.c,new F.k8(this,b))
C.a.K(this.d,new F.k9(this,b))},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
k8:{"^":"n:10;a,b",
$1:function(a){H.f(a,"$isam")
if(!J.P(a.a,this.a))this.b.$1(a)}},
k9:{"^":"n:10;a,b",
$1:function(a){var z
H.f(a,"$isam")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
ka:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
kc:{"^":"b;"},
kb:{"^":"kc;",
b2:function(a,b,c){return J.P(b.f,c.f)}},
kd:{"^":"b;"},
iB:{"^":"kd;",
b3:function(a){var z,y,x,w
H.w(a,"$isc",[F.af],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.F(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x)a[x].sdS(z)
return}},
ke:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}}}],["","",,O,{"^":"",io:{"^":"cv;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.T()
this.dy=z}return z},
af:[function(a){var z
H.f(a,"$isu")
z=this.dy
if(!(z==null))z.I(a)},function(){return this.af(null)},"ic","$1","$0","geu",0,2,1],
fq:[function(a){H.f(a,"$isu")
this.a=null
this.af(a)},function(){return this.fq(null)},"iM","$1","$0","gfp",0,2,1],
io:[function(a,b){var z=V.av
z=new D.cn(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.af(z)},"$2","geV",8,0,21],
ip:[function(a,b){var z=V.av
z=new D.co(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.af(z)},"$2","geW",8,0,21],
cN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a6=$.$get$aQ()
if(c){z=$.$get$aP()
a6=new Z.bn(a6.a|z.a)}if(b){z=$.$get$aO()
a6=new Z.bn(a6.a|z.a)}if(a){z=$.$get$aR()
a6=new Z.bn(a6.a|z.a)}if(a0){z=$.$get$aS()
a6=new Z.bn(a6.a|z.a)}if(a2){z=$.$get$aN()
a6=new Z.bn(a6.a|z.a)}return new A.ir(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.w(a,"$isc",[T.eG],"$asc")},
ap:function(a,b){var z,y,x,w
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
y.a=new V.Y(0,0,0)
y.b=new V.E(0,0,1)
x=y.c
if(x!=null){w=x.aQ(0,b,y)
if(w!=null){y.a=w.aP(y.a)
y.b=w.cu(y.b)}}}},
hZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cN()
y=a.fr.j(0,z.ax)
if(y==null){y=A.im(z,a.a)
x=y.b
if(x.length===0)H.t(P.v("May not cache a shader with no name."))
if(a.fr.bq(0,x))H.t(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aJ
z=b.e
if(!(z instanceof Z.dQ)){b.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)b.d.al()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.c4()
t.a.c4()
t=t.e
if(!(t==null))t.ah(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.he()
s=s.e
if(!(s==null))s.ah(0)}q=b.d.hd(new Z.kh(a.a),v)
q.aK($.$get$aQ()).e=this.a.y.c
if(z)q.aK($.$get$aP()).e=this.a.Q.c
if(u)q.aK($.$get$aO()).e=this.a.z.c
if(w.rx)q.aK($.$get$aR()).e=this.a.ch.c
if(t)q.aK($.$get$aS()).e=this.a.cx.c
if(w.x1)q.aK($.$get$aN()).e=this.a.cy.c
b.e=q}z=T.eG
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hn()
if(w.fx){u=this.a
t=a.dx
t=t.gW(t)
u=u.db
u.toString
u.ai(t.ae(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gW(t)
s=a.dx
s=t.k(0,s.gW(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ai(t.ae(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghV()
s=a.dx
s=t.k(0,s.gW(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ai(t.ae(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ai(t.ae(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ai(t.ae(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ai(C.t.ae(t,!0))}if(w.aI>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.r],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.f(s,"$isav")
t=t.k3
if(n>=t.length)return H.d(t,n)
t=t[n]
m=new Float32Array(H.bq(H.w(s.ae(0,!0),"$isc",u,"$asc")))
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
case C.e:this.U(p,this.f.d)
u=this.a
t=this.f.d
u.ag(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.f.e)
u=this.a
t=this.f.e
u.a9(u.r2,u.rx,t)
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
case C.e:this.U(p,this.r.d)
u=this.a
t=this.r.d
u.ag(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.r.e)
u=this.a
t=this.r.e
u.a9(u.x2,u.y1,t)
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
case C.e:this.U(p,this.x.d)
u=this.a
t=this.x.d
u.ag(u.aI,u.aJ,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.x.e)
u=this.a
t=this.x.e
u.a9(u.ax,u.aJ,t)
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
u=u.br
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.U(p,this.y.d)
u=this.a
t=this.y.d
u.ag(u.df,u.bs,t)
t=this.a
u=this.y.f
t=t.br
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.y.e)
u=this.a
t=this.y.e
u.a9(u.dg,u.bs,t)
t=this.a
u=this.y.f
t=t.br
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bt
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bv
t.a.uniform1f(t.d,r)
break
case C.e:this.U(p,this.z.d)
u=this.a
t=this.z.d
u.ag(u.dh,u.bu,t)
t=this.a
u=this.z.f
t=t.bt
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bv
u.a.uniform1f(u.d,r)
break
case C.f:this.U(p,this.z.e)
u=this.a
t=this.z.e
u.a9(u.di,u.bu,t)
t=this.a
u=this.z.f
t=t.bt
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bv
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dv
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.ca
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.cu(i.gc9(i))
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gaa(i)
g=h.c
r=f.gbF()
s=f.gbc()
f=f.gbm()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dw
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.cb
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gcn(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.ge9(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aP(i.gcn(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gaa(i)
f=h.d
g=s.gbF()
r=s.gbc()
s=s.gbm()
f.a.uniform3f(f.d,g,r,s)
s=i.gd7()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gd8()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gd9()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dz
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.cc
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
f=l.aP(i.a)
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
u=this.a.dA
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
r=this.a.cd
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gb8()
H.w(p,"$isc",s,"$asc")
if(!C.a.bp(p,r)){r.sb_(0,p.length)
C.a.h(p,r)}r=i.gc9(i)
g=h.d
f=r.gaW(r)
e=r.gaX(r)
r=r.gaY()
g.a.uniform3f(g.d,f,e,r)
r=i.gi9()
e=h.b
f=r.gaW(r)
g=r.gaX(r)
r=r.gaY()
e.a.uniform3f(e.d,f,g,r)
r=i.gb6(i)
g=h.c
f=r.gaW(r)
e=r.gaX(r)
r=r.gaY()
g.a.uniform3f(g.d,f,e,r)
r=l.cu(i.gc9(i))
e=r.a
f=r.b
g=r.c
g=r.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gaa(i)
f=h.f
e=g.gbF()
r=g.gbc()
g=g.gbm()
f.a.uniform3f(f.d,e,r,g)
g=i.gb8()
r=g.gb0(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gb0(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gb_(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dB
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.y,t=u.length,s=[P.r],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
g=this.a.ce
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gb8()
H.w(p,"$isc",r,"$asc")
if(!C.a.bp(p,g)){g.sb_(0,p.length)
C.a.h(p,g)}d=l.k(0,i.gW(i))
g=i.gW(i).aP(new V.Y(0,0,0))
f=h.b
e=g.gq(g)
c=g.gt(g)
g=g.ge9(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aP(new V.Y(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dN(0)
c=h.d
m=new Float32Array(H.bq(H.w(new V.cq(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ae(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gaa(i)
g=h.e
e=c.gbF()
f=c.gbc()
c=c.gbm()
g.a.uniform3f(g.d,e,f,c)
c=i.gb8()
g=c.gb0(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gb0(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gb_(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gd7()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gd8()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gd9()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dC
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.cf
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb8()
H.w(p,"$isc",z,"$asc")
if(!C.a.bp(p,s)){s.sb_(0,p.length)
C.a.h(p,s)}s=i.gcn(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.ge9(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gc9(i)
f=h.c
g=s.gaW(s)
r=s.gaX(s)
s=s.gaY()
f.a.uniform3f(f.d,g,r,s)
s=i.gi9()
r=h.d
g=s.gaW(s)
f=s.gaX(s)
s=s.gaY()
r.a.uniform3f(r.d,g,f,s)
s=i.gb6(i)
f=h.e
g=s.gaW(s)
r=s.gaX(s)
s=s.gaY()
f.a.uniform3f(f.d,g,r,s)
s=l.aP(i.gcn(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb8()
r=s.gb0(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gb0(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gb_(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gaa(i)
r=h.y
g=s.gbF()
f=s.gbc()
s=s.gbm()
r.a.uniform3f(r.d,g,f,s)
s=i.giX()
f=h.z
f.a.uniform1f(f.d,s)
s=i.giY()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gd7()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gd8()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gd9()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.e:this.U(p,this.Q.d)
z=this.a
u=this.Q.d
z.ag(z.dj,z.bw,u)
break
case C.f:this.U(p,this.Q.e)
z=this.a
u=this.Q.e
z.a9(z.dk,z.bw,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gW(u).dN(0)
a.Q=u}z=z.fy
z.toString
z.ai(u.ae(0,!0))}if(w.dy){this.U(p,this.ch)
z=this.a
u=this.ch
z.a9(z.dl,z.dm,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bx
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.e:this.U(p,this.cx.d)
z=this.a
u=this.cx.d
z.ag(z.dn,z.by,u)
u=this.a
z=this.cx.f
u=u.bx
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.f:this.U(p,this.cx.e)
z=this.a
u=this.cx.e
z.a9(z.dq,z.by,u)
u=this.a
z=this.cx.f
u=u.bx
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bA
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bz
u.a.uniform1f(u.d,s)
break
case C.e:this.U(p,this.cy.d)
z=this.a
u=this.cy.d
z.ag(z.dr,z.bB,u)
u=this.a
z=this.cy.f
u=u.bA
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bz
z.a.uniform1f(z.d,s)
break
case C.f:this.U(p,this.cy.e)
z=this.a
u=this.cy.e
z.a9(z.ds,z.bB,u)
u=this.a
z=this.cy.f
u=u.bA
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bz
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bC
z.a.uniform1f(z.d,t)
break
case C.e:this.U(p,this.db.d)
z=this.a
t=this.db.d
z.ag(z.dt,z.bD,t)
t=this.a
z=this.db.f
t=t.bC
t.a.uniform1f(t.d,z)
break
case C.f:this.U(p,this.db.e)
z=this.a
t=this.db.e
z.a9(z.du,z.bD,t)
t=this.a
z=this.db.f
t=t.bC
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bl(a)
z=b.e
z.bl(a)
z.aN(a)
z.e5(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].e5(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.hm()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cN().ax},
p:{
ek:function(){var z,y,x,w
z=new O.io()
y=O.cR(V.av)
z.e=y
y.be(z.geV(),z.geW())
y=new O.ba(z,"emission")
y.c=C.c
y.f=new V.a_(0,0,0)
z.f=y
y=new O.ba(z,"ambient")
y.c=C.c
y.f=new V.a_(0,0,0)
z.r=y
y=new O.ba(z,"diffuse")
y.c=C.c
y.f=new V.a_(0,0,0)
z.x=y
y=new O.ba(z,"invDiffuse")
y.c=C.c
y.f=new V.a_(0,0,0)
z.y=y
y=new O.it(z,"specular")
y.c=C.c
y.f=new V.a_(0,0,0)
y.ch=100
z.z=y
y=new O.iq(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.ba(z,"reflect")
y.c=C.c
y.f=new V.a_(0,0,0)
z.cx=y
y=new O.is(z,"refract")
y.c=C.c
y.f=new V.a_(0,0,0)
y.ch=1
z.cy=y
y=new O.ip(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.i1()
y.bK(D.a2)
y.e=H.e([],[D.hz])
y.f=H.e([],[D.iG])
y.r=H.e([],[D.cu])
y.x=H.e([],[D.jq])
y.y=H.e([],[D.jr])
y.z=H.e([],[D.js])
y.Q=null
y.ch=null
y.cB(y.geU(),y.gfe(),y.gfg())
z.dx=y
x=y.Q
if(x==null){x=D.T()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.u]}
w=H.h(z.gfp(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.T()
w.ch=y}x=H.h(z.geu(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},ip:{"^":"d2;0f,a,b,0c,0d,0e"},d2:{"^":"b;",
bi:["ei",function(){}]},iq:{"^":"d2;a,b,0c,0d,0e"},ba:{"^":"d2;0f,a,b,0c,0d,0e",
cZ:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.N(this.b+".color",z,a,this,[V.a_])
y.b=!0
this.a.af(y)}},
bi:["bJ",function(){this.ei()
this.cZ(new V.a_(1,1,1))}],
saa:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bi()
z=this.a
z.a=null
z.af(null)}this.cZ(b)}},is:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
ft:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".refraction",y,a,this,[P.r])
z.b=!0
this.a.af(z)}},
bi:function(){this.bJ()
this.ft(1)}},it:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
bY:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".shininess",y,a,this,[P.r])
z.b=!0
this.a.af(z)}},
bi:function(){this.bJ()
this.bY(100)}},cv:{"^":"b;"}}],["","",,T,{"^":"",eG:{"^":"cM;"},jp:{"^":"b;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",hc:{"^":"b;",
b1:function(a,b){return!0},
i:function(a){return"all"},
$isc4:1},c4:{"^":"b;"},ej:{"^":"b;",
b1:["eh",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].b1(0,b))return!0
return!1}],
i:["cD",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc4:1},bH:{"^":"ej;0a",
b1:function(a,b){return!this.eh(0,b)},
i:function(a){return"!["+this.cD(0)+"]"}},j7:{"^":"b;0a",
em:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.aX(0,0,[P.m,P.ah])
for(y=new H.eh(a,a.gl(a),0,[H.ay(a,"x",0)]);y.G();)z.m(0,y.d,!0)
this.a=z},
b1:function(a,b){return this.a.bq(0,b)},
i:function(a){var z=this.a
return P.c7(z.gan(z),0,null)},
$isc4:1,
p:{
a9:function(a){var z=new V.j7()
z.em(a)
return z}}},eB:{"^":"b;a,b,0c,0d",
ghF:function(a){return this.b},
E:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eM(this.a.M(0,b))
w.a=H.e([],[V.c4])
w.c=!1
C.a.h(this.c,w)
return w},
hp:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.b1(0,a))return w}return},
i:function(a){return this.b}},eJ:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h1(this.b,"\n","\\n")
y=H.h1(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eK:{"^":"b;a,b,0c",
i:function(a){return this.b}},jy:{"^":"b;0a,0b,0c",
M:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eB(this,b)
z.c=H.e([],[V.eM])
this.a.m(0,b,z)}return z},
ba:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eK(this,a)
y=P.i
z.c=new H.aX(0,0,[y,y])
this.b.m(0,a,z)}return z},
i8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eJ])
y=this.c
x=[P.m]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.hp(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c7(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghF(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c7(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eJ(o==null?p.b:o,q,t)}++t}}}},eM:{"^":"ej;b,0c,0a",
i:function(a){return this.b.b+": "+this.cD(0)}}}],["","",,X,{"^":"",dS:{"^":"b;",$isaK:1},hP:{"^":"eE;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.T()
this.x=z}return z}},iE:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.T()
this.e=z}return z},
aR:[function(a){var z
H.f(a,"$isu")
z=this.e
if(!(z==null))z.I(a)},function(){return this.aR(null)},"ie","$1","$0","gcF",0,2,1],
saM:function(a){var z,y,x
if(!J.P(this.a,a)){z=this.a
if(z!=null){z=z.gB()
z.toString
y=H.h(this.gcF(),{func:1,ret:-1,args:[D.u]})
C.a.N(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gcF(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.N("mover",x,this.a,this,[U.aj])
z.b=!0
this.aR(z)}},
$isaK:1,
$isdS:1},eE:{"^":"b;"}}],["","",,V,{"^":"",
mV:function(a){P.jx(C.G,new V.mW(a))},
mW:{"^":"n:48;a",
$1:function(a){H.f(a,"$isbk")
P.dD(C.h.e4(this.a.ght(),2)+" fps")}},
iS:{"^":"b;a,b,0c",
d5:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.f5().gcp().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.d3(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dI(this.c).h(0,v)
t=W.hS("radio")
t.checked=x
t.name=z
z=W.ad
W.a3(t,"change",H.h(new V.iT(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dI(this.c).h(0,w.createElement("br"))},
aT:function(a,b,c){return this.d5(a,b,c,!1)},
d3:function(a){var z,y,x,w,v
z=P.f5()
y=P.i
x=P.i8(z.gcp(),y,y)
x.m(0,this.a,a)
w=z.e0(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lk([],[]).cv(""),"",v)}},
iT:{"^":"n:20;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.d3(this.d)}}},
jc:{"^":"b;0a,0b",
eo:function(a,b){var z,y,x,w,v,u,t
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
t=W.ad
W.a3(z,"scroll",H.h(new V.jf(x),{func:1,ret:-1,args:[t]}),!1,t)},
h8:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.i],"$asc")
this.fA()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.i8(C.a.hz(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
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
if(H.h0(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cA(C.R,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.l(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
h3:function(a){var z,y,x,w,v,u,t
H.w(a,"$isc",[P.i],"$asc")
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
x=H.f(w.insertCell(-1),"$isdc").style
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
t=H.f(w.insertCell(-1),"$isdc")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fA:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jy()
y=P.i
z.a=new H.aX(0,0,[y,V.eB])
z.b=new H.aX(0,0,[y,V.eK])
z.c=z.M(0,"Start")
y=z.M(0,"Start").E(0,"Bold")
x=V.a9(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Bold").E(0,"Bold")
x=new V.bH()
w=[V.c4]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a9(new H.a4("*"))
C.a.h(x.a,y)
y=z.M(0,"Bold").E(0,"BoldEnd")
x=V.a9(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").E(0,"Italic")
x=V.a9(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Italic").E(0,"Italic")
x=new V.bH()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a9(new H.a4("_"))
C.a.h(x.a,y)
y=z.M(0,"Italic").E(0,"ItalicEnd")
x=V.a9(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").E(0,"Code")
x=V.a9(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Code").E(0,"Code")
x=new V.bH()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a9(new H.a4("`"))
C.a.h(x.a,y)
y=z.M(0,"Code").E(0,"CodeEnd")
x=V.a9(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").E(0,"LinkHead")
x=V.a9(new H.a4("["))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"LinkHead").E(0,"LinkTail")
x=V.a9(new H.a4("|"))
C.a.h(y.a,x)
x=z.M(0,"LinkHead").E(0,"LinkEnd")
y=V.a9(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.M(0,"LinkHead").E(0,"LinkHead")
y=new V.bH()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a9(new H.a4("|]"))
C.a.h(y.a,x)
x=z.M(0,"LinkTail").E(0,"LinkEnd")
y=V.a9(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.M(0,"LinkTail").E(0,"LinkTail")
y=new V.bH()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a9(new H.a4("|]"))
C.a.h(y.a,x)
C.a.h(z.M(0,"Start").E(0,"Other").a,new V.hc())
x=z.M(0,"Other").E(0,"Other")
y=new V.bH()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a9(new H.a4("*_`["))
C.a.h(y.a,x)
x=z.M(0,"BoldEnd")
x.d=x.a.ba("Bold")
x=z.M(0,"ItalicEnd")
x.d=x.a.ba("Italic")
x=z.M(0,"CodeEnd")
x.d=x.a.ba("Code")
x=z.M(0,"LinkEnd")
x.d=x.a.ba("Link")
x=z.M(0,"Other")
x.d=x.a.ba("Other")
this.b=z},
p:{
jd:function(a,b){var z=new V.jc()
z.eo(a,!0)
return z}}},
jf:{"^":"n:20;a",
$1:function(a){P.jw(C.r,new V.je(this.a))}},
je:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.h.ad(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,N,{"^":"",
fX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.jd("Test 024",!0)
y=W.dT(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.h8(H.e(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],x))
z.h3(H.e(["shapes"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.t(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.ju(w,!0,!0,!0,!1)
u=U.cV(null)
u.h(0,U.c_(V.en(0,0,-2.5)))
u.h(0,U.f8(!1,!0,v.r,!1,!1,!1,null,!1))
t=new V.a_(1,1,1)
s=new D.cu()
s.d=new V.a_(1,1,1)
s.e=3.141592653589793
s.f=3.141592653589793
s.r=1
s.x=0
s.y=0
s.a=new V.Y(0,0,0)
s.b=new V.E(0,0,1)
r=s.c
s.c=u
z=u.gB()
z.toString
q=H.h(s.geY(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,q)
z=new D.N("mover",r,s.c,s,[U.aj])
z.b=!0
s.a8(z)
if(!s.d.u(0,t)){r=s.d
s.d=t
z=new D.N("color",r,t,s,[V.a_])
z.b=!0
s.a8(z)}z=s.e
if(!$.p.$2(z,0.6)){r=s.e
s.e=0.6
z=new D.N("cutoff",r,0.6,s,[P.r])
z.b=!0
s.a8(z)}z=s.f
if(!$.p.$2(z,0.5)){r=s.f
s.f=0.5
z=new D.N("coneAngle",r,0.5,s,[P.r])
z.b=!0
s.a8(z)}z=s.r
if(!$.p.$2(z,0.5)){r=s.r
s.r=0.5
z=new D.N("attenuation0",r,0.5,s,[P.r])
z.b=!0
s.a8(z)}z=s.x
if(!$.p.$2(z,0.05)){r=s.x
s.x=0.05
z=new D.N("attenuation1",r,0.05,s,[P.r])
z.b=!0
s.a8(z)}p=O.ek()
p.dx.h(0,s)
p.f.saa(0,new V.a_(0,0,0))
z=p.r
z.saa(0,new V.a_(0,0,0))
z=p.x
z.saa(0,new V.a_(0.7,0.7,0.7))
z=p.z
z.saa(0,new V.a_(0.3,0.3,0.3))
z=p.z
if(z.c===C.c){z.c=C.i
z.bJ()
z.bY(100)
q=z.a
q.a=null
q.af(null)}z.bY(100)
o=E.cT(null,!0,null,"",null,null)
o.sa5(0,F.h3(30,1,15,0.5))
n=E.cT(null,!0,null,"",null,null)
n.saM(U.c_(V.em(3,3,3,1)))
z=F.dv(1,null,null,1)
z.aZ()
n.sa5(0,z)
m=U.cV(null)
m.h(0,U.f8(!1,!1,v.r,!1,!1,!1,null,!1))
m.h(0,U.c_(V.el(3.141592653589793)))
m.h(0,U.c_(V.en(0,0,5)))
l=E.cT(null,!0,null,"",null,null)
z=U.cV(null)
z.h(0,U.c_(V.em(0.1,0.1,0.1,1)))
z.h(0,u)
l.saM(z)
l.sa5(0,F.dw(0,!1,!0,1,40,1))
z=O.ek()
z.f.saa(0,new V.a_(1,1,1))
l.sb7(z)
z=new M.hH()
q=O.cR(E.aI)
z.d=q
q.be(z.geZ(),z.gf_())
z.e=null
z.f=null
z.r=null
z.x=null
k=new X.iE()
k.b=1.0471975511965976
k.c=0.1
k.d=2000
k.saM(null)
q=k.b
if(!$.p.$2(q,1.0471975511965976)){r=k.b
k.b=1.0471975511965976
q=new D.N("fov",r,1.0471975511965976,k,[P.r])
q.b=!0
k.aR(q)}q=k.c
if(!$.p.$2(q,0.1)){r=k.c
k.c=0.1
q=new D.N("near",r,0.1,k,[P.r])
q.b=!0
k.aR(q)}q=k.d
if(!$.p.$2(q,2000)){r=k.d
k.d=2000
q=new D.N("far",r,2000,k,[P.r])
q.b=!0
k.aR(q)}q=z.a
if(q!==k){if(q!=null){q=q.gB()
q.toString
j=H.h(z.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.N(q.a,j)}r=z.a
z.a=k
q=k.gB()
q.toString
j=H.h(z.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.h(q.a,j)
q=new D.N("camera",r,z.a,z,[X.dS])
q.b=!0
z.aD(q)}i=new X.hP()
q=new V.b3(0,0,0,1)
i.a=q
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
q=V.ew(0,0,1,1)
i.r=q
q=z.b
if(q!==i){if(q!=null){q=q.gB()
q.toString
j=H.h(z.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.N(q.a,j)}r=z.b
z.b=i
q=i.gB()
q.toString
j=H.h(z.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.h(q.a,j)
q=new D.N("target",r,z.b,z,[X.eE])
q.b=!0
z.aD(q)}z.sb7(null)
z.sb7(p)
z.d.h(0,o)
z.d.h(0,n)
z.d.h(0,l)
z.a.saM(m)
q=v.d
if(q!==z){if(q!=null){q=q.gB()
q.toString
j=H.h(v.gcE(),{func:1,ret:-1,args:[D.u]})
C.a.N(q.a,j)}v.d=z
z=z.gB()
z.toString
q=H.h(v.gcE(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,q)
v.eq()}z=new V.iS("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.t("Failed to find shapes for RadioGroup")
z.aT(0,"Cube",new N.mJ(o))
z.aT(0,"Cylinder",new N.mK(o))
z.aT(0,"Cone",new N.mL(o))
z.aT(0,"Sphere",new N.mM(o))
z.d5(0,"Toroid",new N.mN(o),!0)
z.aT(0,"Knot",new N.mO(o))
V.mV(v)},
mJ:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.dv(1,null,null,1))}},
mK:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.dw(1,!0,!0,1,40,1))}},
mL:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.dw(1,!0,!1,1,40,0))}},
mM:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.mX(6,null,6))}},
mN:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.h3(30,1,15,0.5))}},
mO:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.mG(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eb.prototype
return J.hX.prototype}if(typeof a=="string")return J.c2.prototype
if(a==null)return J.ec.prototype
if(typeof a=="boolean")return J.hW.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c3.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.aF=function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c3.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.cc=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c3.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.mw=function(a){if(typeof a=="number")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c9.prototype
return a}
J.mx=function(a){if(typeof a=="number")return J.c1.prototype
if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c9.prototype
return a}
J.dz=function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c9.prototype
return a}
J.aV=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c3.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).u(a,b)}
J.h4=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mw(a).O(a,b)}
J.dF=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mx(a).k(a,b)}
J.dG=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fU(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aF(a).j(a,b)}
J.cJ=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fU(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cc(a).m(a,b,c)}
J.h5=function(a,b){return J.dz(a).H(a,b)}
J.h6=function(a,b,c){return J.aV(a).fn(a,b,c)}
J.h7=function(a,b,c,d){return J.aV(a).d6(a,b,c,d)}
J.h8=function(a,b){return J.dz(a).V(a,b)}
J.cK=function(a,b,c){return J.aF(a).hg(a,b,c)}
J.cL=function(a,b){return J.cc(a).J(a,b)}
J.h9=function(a,b,c,d){return J.cc(a).ay(a,b,c,d)}
J.dH=function(a,b){return J.cc(a).K(a,b)}
J.dI=function(a){return J.aV(a).gc6(a)}
J.b2=function(a){return J.M(a).gT(a)}
J.by=function(a){return J.cc(a).ga_(a)}
J.at=function(a){return J.aF(a).gl(a)}
J.ha=function(a,b){return J.aV(a).i_(a,b)}
J.hb=function(a,b){return J.aV(a).sa0(a,b)}
J.aa=function(a){return J.M(a).i(a)}
I.ak=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cQ.prototype
C.H=J.q.prototype
C.a=J.b9.prototype
C.d=J.eb.prototype
C.t=J.ec.prototype
C.h=J.c1.prototype
C.b=J.c2.prototype
C.O=J.c3.prototype
C.U=H.d6.prototype
C.V=W.iA.prototype
C.z=J.iF.prototype
C.q=J.c9.prototype
C.A=W.bP.prototype
C.B=W.kk.prototype
C.D=new P.hh(!1)
C.C=new P.hg(C.D)
C.E=new P.iD()
C.F=new P.k5()
C.j=new P.l6()
C.c=new A.ci(0,"ColorSourceType.None")
C.i=new A.ci(1,"ColorSourceType.Solid")
C.e=new A.ci(2,"ColorSourceType.Texture2D")
C.f=new A.ci(3,"ColorSourceType.TextureCube")
C.r=new P.b6(0)
C.G=new P.b6(5e6)
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
C.w=H.e(I.ak([127,2047,65535,1114111]),[P.m])
C.m=H.e(I.ak([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.e(I.ak([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.e(I.ak([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.Q=H.e(I.ak([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.R=H.e(I.ak([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.e(I.ak([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.e(I.ak([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.S=H.e(I.ak([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.e(I.ak([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.P=H.e(I.ak([]),[P.i])
C.T=new H.ht(0,{},C.P,[P.i,P.i])
C.k=new P.jZ(!1)
$.az=0
$.bz=null
$.dN=null
$.dq=!1
$.fS=null
$.fK=null
$.h_=null
$.cE=null
$.cH=null
$.dA=null
$.br=null
$.bV=null
$.bW=null
$.dr=!1
$.S=C.j
$.e2=null
$.e1=null
$.e0=null
$.e_=null
$.p=V.iu()
$.es=null
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
I.$lazy(y,x,w)}})(["dZ","$get$dZ",function(){return H.fR("_$dart_dartClosure")},"cY","$get$cY",function(){return H.fR("_$dart_js")},"eN","$get$eN",function(){return H.aC(H.cw({
toString:function(){return"$receiver$"}}))},"eO","$get$eO",function(){return H.aC(H.cw({$method$:null,
toString:function(){return"$receiver$"}}))},"eP","$get$eP",function(){return H.aC(H.cw(null))},"eQ","$get$eQ",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eU","$get$eU",function(){return H.aC(H.cw(void 0))},"eV","$get$eV",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eS","$get$eS",function(){return H.aC(H.eT(null))},"eR","$get$eR",function(){return H.aC(function(){try{null.$method$}catch(z){return z.message}}())},"eX","$get$eX",function(){return H.aC(H.eT(void 0))},"eW","$get$eW",function(){return H.aC(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dk","$get$dk",function(){return P.kl()},"bX","$get$bX",function(){return[]},"f9","$get$f9",function(){return P.k2()},"ff","$get$ff",function(){return H.iy(H.bq(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fA","$get$fA",function(){return P.iY("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fG","$get$fG",function(){return P.m5()},"dY","$get$dY",function(){return{}},"fc","$get$fc",function(){return Z.aq(0)},"fa","$get$fa",function(){return Z.aq(511)},"aQ","$get$aQ",function(){return Z.aq(1)},"aP","$get$aP",function(){return Z.aq(2)},"aO","$get$aO",function(){return Z.aq(4)},"aR","$get$aR",function(){return Z.aq(8)},"aS","$get$aS",function(){return Z.aq(16)},"bN","$get$bN",function(){return Z.aq(32)},"bO","$get$bO",function(){return Z.aq(64)},"fb","$get$fb",function(){return Z.aq(96)},"bo","$get$bo",function(){return Z.aq(128)},"aN","$get$aN",function(){return Z.aq(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.m,[P.j,E.aI]]},{func:1,ret:P.G,args:[F.af,P.r,P.r]},{func:1,ret:P.G,args:[F.am]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[D.u]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:P.r,args:[P.r]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.m,[P.j,D.a2]]},{func:1,ret:-1,args:[W.bF]},{func:1,ret:P.G,args:[W.ad]},{func:1,ret:-1,args:[P.m,[P.j,V.av]]},{func:1,ret:V.Y,args:[P.r]},{func:1,ret:-1,args:[P.m,[P.j,U.aj]]},{func:1,ret:P.r},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.G,args:[,]},{func:1,ret:W.a1,args:[W.I]},{func:1,args:[P.i]},{func:1,ret:-1,args:[P.b],opt:[P.aw]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:P.G,args:[P.W]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.ah,args:[P.r,P.r]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:-1,args:[W.bP]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ah,args:[[P.j,D.a2]]},{func:1,ret:[P.H,P.i,P.i],args:[[P.H,P.i,P.i],P.i]},{func:1,args:[,P.i]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.ah,args:[W.I]},{func:1,ret:P.O,args:[P.m]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:P.G,args:[P.bk]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.n_(d||a)
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
Isolate.ak=a.ak
Isolate.dx=a.dx
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
if(typeof dartMainRunner==="function")dartMainRunner(N.fX,[])
else N.fX([])})})()
//# sourceMappingURL=test.dart.js.map
