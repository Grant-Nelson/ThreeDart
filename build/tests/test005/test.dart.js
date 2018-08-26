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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ism)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cS(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cT=function(){}
var dart=[["","",,H,{"^":"",l8:{"^":"a;a"}}],["","",,J,{"^":"",
H:function(a){return void 0},
cY:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c7:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cW==null){H.jY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.j(P.e9("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$co()]
if(v!=null)return v
v=H.k2(a)
if(v!=null)return v
if(typeof a=="function")return C.E
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$co(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
q:function(a,b){return a===b},
gL:function(a){return H.bc(a)},
i:["dg",function(a){return"Instance of '"+H.aM(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ft:{"^":"m;",
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$isaf:1},
ds:{"^":"m;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$isF:1},
cp:{"^":"m;",
gL:function(a){return 0},
i:["dh",function(a){return String(a)}]},
h6:{"^":"cp;"},
cI:{"^":"cp;"},
bB:{"^":"cp;",
i:function(a){var z=a[$.$get$df()]
if(z==null)return this.dh(a)
return"JavaScript function for "+H.h(J.a1(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isci:1},
bA:{"^":"m;$ti",
h:function(a,b){H.B(b,H.y(a,0))
if(!!a.fixed$length)H.o(P.a9("add"))
a.push(b)},
F:function(a,b){var z
if(!!a.fixed$length)H.o(P.a9("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
H:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.j(P.b1(a))}},
R:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.U(z,y,H.h(a[y]))
return z.join(b)},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
gbI:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.j(H.fr())},
az:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.cl(a,"[","]")},
gO:function(a){return new J.am(a,a.length,0,[H.y(a,0)])},
gL:function(a){return H.bc(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.o(P.a9("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.bQ(b,"newLength",null))
if(b<0)throw H.j(P.bd(b,0,null,"newLength",null))
a.length=b},
U:function(a,b,c){H.W(b)
H.B(c,H.y(a,0))
if(!!a.immutable$list)H.o(P.a9("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.bJ(a,b))
if(b>=a.length||b<0)throw H.j(H.bJ(a,b))
a[b]=c},
$isi:1,
$isb:1,
u:{
fs:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.bQ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.bd(a,0,4294967295,"length",null))
return J.dp(new Array(a),b)},
dp:function(a,b){return J.b7(H.c(a,[b]))},
b7:function(a){H.bN(a)
a.fixed$length=Array
return a}}},
l7:{"^":"bA;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gK:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.j(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c_:{"^":"m;",
gff:function(a){return a===0?1/a<0:a<0},
fQ:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.j(P.a9(""+a+".toInt()"))},
bH:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.j(P.a9(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.a9(""+a+".round()"))},
d4:function(a,b){var z
if(b>20)throw H.j(P.bd(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gff(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){return a&0x1FFFFFFF},
dc:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
di:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cm(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.cm(a,b)},
cm:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.j(P.a9("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
ck:function(a,b){var z
if(a>0)z=this.ey(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ey:function(a,b){return b>31?0:a>>>b},
av:function(a,b){if(typeof b!=="number")throw H.j(H.c5(b))
return a<b},
$ist:1,
$isP:1},
dr:{"^":"c_;",$isM:1},
dq:{"^":"c_;"},
cn:{"^":"m;",
dD:function(a,b){if(b>=a.length)throw H.j(H.bJ(a,b))
return a.charCodeAt(b)},
A:function(a,b){H.Q(b)
if(typeof b!=="string")throw H.j(P.bQ(b,null,null))
return a+b},
bY:function(a,b,c){H.W(c)
if(c==null)c=a.length
if(b>c)throw H.j(P.cz(b,null,null))
if(c>a.length)throw H.j(P.cz(c,null,null))
return a.substring(b,c)},
bX:function(a,b){return this.bY(a,b,null)},
m:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.t)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fs:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.m(c,z)+a},
X:function(a,b){return this.fs(a,b," ")},
f2:function(a,b,c){if(c>a.length)throw H.j(P.bd(c,0,a.length,null,null))
return H.ke(a,b,c)},
i:function(a){return a},
gL:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$ish4:1,
$isn:1}}],["","",,H,{"^":"",
fr:function(){return new P.hw("No element")},
fe:{"^":"i;"},
fF:{"^":"a;a,b,c,0d,$ti",
gK:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.bL(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.j(P.b1(z))
w=this.c
if(typeof x!=="number")return H.z(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
fL:{"^":"i;a,b,$ti",
gO:function(a){return new H.fM(J.bP(this.a),this.b,this.$ti)},
gk:function(a){return J.b_(this.a)},
w:function(a,b){return this.b.$1(J.d1(this.a,b))},
$asi:function(a,b){return[b]}},
fM:{"^":"cm;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gK(z))
return!0}this.a=null
return!1},
gK:function(a){return this.a},
$ascm:function(a,b){return[b]}},
ie:{"^":"i;a,b,$ti",
gO:function(a){return new H.ig(J.bP(this.a),this.b,this.$ti)}},
ig:{"^":"cm;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gK(z)))return!0
return!1},
gK:function(a){var z=this.a
return z.gK(z)}},
bX:{"^":"a;$ti"}}],["","",,H,{"^":"",
jT:function(a){return init.types[H.W(a)]},
k0:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.H(a).$isA},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a1(a)
if(typeof z!=="string")throw H.j(H.c5(a))
return z},
bc:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aM:function(a){var z,y,x,w,v,u,t,s,r
z=J.H(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.v||!!J.H(a).$iscI){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.dD(w,0)===36)w=C.h.bX(w,1)
r=H.cX(H.bN(H.aF(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
a3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
he:function(a){return a.b?H.a3(a).getUTCFullYear()+0:H.a3(a).getFullYear()+0},
hc:function(a){return a.b?H.a3(a).getUTCMonth()+1:H.a3(a).getMonth()+1},
h8:function(a){return a.b?H.a3(a).getUTCDate()+0:H.a3(a).getDate()+0},
h9:function(a){return a.b?H.a3(a).getUTCHours()+0:H.a3(a).getHours()+0},
hb:function(a){return a.b?H.a3(a).getUTCMinutes()+0:H.a3(a).getMinutes()+0},
hd:function(a){return a.b?H.a3(a).getUTCSeconds()+0:H.a3(a).getSeconds()+0},
ha:function(a){return a.b?H.a3(a).getUTCMilliseconds()+0:H.a3(a).getMilliseconds()+0},
z:function(a){throw H.j(H.c5(a))},
f:function(a,b){if(a==null)J.b_(a)
throw H.j(H.bJ(a,b))},
bJ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aA(!0,b,"index",null)
z=H.W(J.b_(a))
if(!(b<0)){if(typeof z!=="number")return H.z(z)
y=b>=z}else y=!0
if(y)return P.J(b,a,"index",null,z)
return P.cz(b,"index",null)},
c5:function(a){return new P.aA(!0,a,null,null)},
jL:function(a){if(typeof a!=="number")throw H.j(H.c5(a))
return a},
j:function(a){var z
if(a==null)a=new P.dA()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eN})
z.name=""}else z.toString=H.eN
return z},
eN:function(){return J.a1(this.dartException)},
o:function(a){throw H.j(a)},
x:function(a){throw H.j(P.b1(a))},
aH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.ck(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cr(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dz(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dT()
u=$.$get$dU()
t=$.$get$dV()
s=$.$get$dW()
r=$.$get$e_()
q=$.$get$e0()
p=$.$get$dY()
$.$get$dX()
o=$.$get$e2()
n=$.$get$e1()
m=v.W(y)
if(m!=null)return z.$1(H.cr(H.Q(y),m))
else{m=u.W(y)
if(m!=null){m.method="call"
return z.$1(H.cr(H.Q(y),m))}else{m=t.W(y)
if(m==null){m=s.W(y)
if(m==null){m=r.W(y)
if(m==null){m=q.W(y)
if(m==null){m=p.W(y)
if(m==null){m=s.W(y)
if(m==null){m=o.W(y)
if(m==null){m=n.W(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dz(H.Q(y),m))}}return z.$1(new H.i_(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dL()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aA(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dL()
return a},
aY:function(a){var z
if(a==null)return new H.eq(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eq(a)},
jR:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.U(0,a[y],a[x])}return b},
k_:function(a,b,c,d,e,f){H.k(a,"$isci")
switch(H.W(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.p("Unsupported number of arguments for wrapped closure"))},
aV:function(a,b){var z
H.W(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k_)
a.$identity=z
return z},
f2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.H(d).$isb){z.$reflectionInfo=d
x=H.hg(z).r}else x=d
w=e?Object.create(new H.hx().constructor.prototype):Object.create(new H.cc(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ag
if(typeof u!=="number")return u.A()
$.ag=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.db(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.jT,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.d5:H.cd
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.j("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.db(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
f_:function(a,b,c,d){var z=H.cd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
db:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.f1(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.f_(y,!w,z,b)
if(y===0){w=$.ag
if(typeof w!=="number")return w.A()
$.ag=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b0
if(v==null){v=H.bR("self")
$.b0=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ag
if(typeof w!=="number")return w.A()
$.ag=w+1
t+=w
w="return function("+t+"){return this."
v=$.b0
if(v==null){v=H.bR("self")
$.b0=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
f0:function(a,b,c,d){var z,y
z=H.cd
y=H.d5
switch(b?-1:a){case 0:throw H.j(H.ho("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
f1:function(a,b){var z,y,x,w,v,u,t,s
z=$.b0
if(z==null){z=H.bR("self")
$.b0=z}y=$.d4
if(y==null){y=H.bR("receiver")
$.d4=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.f0(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.ag
if(typeof y!=="number")return y.A()
$.ag=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.ag
if(typeof y!=="number")return y.A()
$.ag=y+1
return new Function(z+y+"}")()},
cS:function(a,b,c,d,e,f,g){var z,y
z=J.b7(H.bN(b))
H.W(c)
y=!!J.H(d).$isb?J.b7(d):d
return H.f2(a,z,c,y,!!e,f,g)},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.ak(a,"String"))},
k5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.ak(a,"num"))},
eD:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.ak(a,"bool"))},
W:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.ak(a,"int"))},
eL:function(a,b){throw H.j(H.ak(a,H.Q(b).substring(3)))},
k7:function(a,b){var z=J.bL(b)
throw H.j(H.eY(a,z.bY(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.H(a)[b])return a
H.eL(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.H(a)[b]
else z=!0
if(z)return a
H.k7(a,b)},
bN:function(a){if(a==null)return a
if(!!J.H(a).$isb)return a
throw H.j(H.ak(a,"List"))},
k1:function(a,b){if(a==null)return a
if(!!J.H(a).$isb)return a
if(J.H(a)[b])return a
H.eL(a,b)},
eE:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.W(z)]
else return a.$S()}return},
bK:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eE(J.H(a))
if(z==null)return!1
y=H.eH(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.cO)return a
$.cO=!0
try{if(H.bK(a,b))return a
z=H.bO(b)
y=H.ak(a,z)
throw H.j(y)}finally{$.cO=!1}},
cU:function(a,b){if(a!=null&&!H.cR(a,b))H.o(H.ak(a,H.bO(b)))
return a},
ey:function(a){var z
if(a instanceof H.r){z=H.eE(J.H(a))
if(z!=null)return H.bO(z)
return"Closure"}return H.aM(a)},
kg:function(a){throw H.j(new P.f6(H.Q(a)))},
eF:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aF:function(a){if(a==null)return
return a.$ti},
m6:function(a,b,c){return H.aZ(a["$as"+H.h(c)],H.aF(b))},
bw:function(a,b,c,d){var z
H.Q(c)
H.W(d)
z=H.aZ(a["$as"+H.h(c)],H.aF(b))
return z==null?null:z[d]},
aX:function(a,b,c){var z
H.Q(b)
H.W(c)
z=H.aZ(a["$as"+H.h(b)],H.aF(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.W(b)
z=H.aF(a)
return z==null?null:z[b]},
bO:function(a){var z=H.aG(a,null)
return z},
aG:function(a,b){var z,y
H.w(b,"$isb",[P.n],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cX(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.W(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.h(b[y])}if('func' in a)return H.jB(a,b)
if('futureOr' in a)return"FutureOr<"+H.aG("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.w(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.h.A(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aG(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aG(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aG(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aG(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jQ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.Q(z[l])
n=n+m+H.aG(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cX:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isb",[P.n],"$asb")
if(a==null)return""
z=new P.bG("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aG(u,c)}v="<"+z.i(0)+">"
return v},
aZ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aU:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aF(a)
y=J.H(a)
if(y[b]==null)return!1
return H.eB(H.aZ(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.Q(b)
H.bN(c)
H.Q(d)
if(a==null)return a
z=H.aU(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cX(c,0,null)
throw H.j(H.ak(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eB:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ab(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ab(a[y],b,c[y],d))return!1
return!0},
m4:function(a,b,c){return a.apply(b,H.aZ(J.H(b)["$as"+H.h(c)],H.aF(b)))},
eI:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.eI(z)}return!1},
cR:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.eI(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cR(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bK(a,b)}y=J.H(a).constructor
x=H.aF(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ab(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.cR(a,b))throw H.j(H.ak(a,H.bO(b)))
return a},
ab:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ab(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.eH(a,b,c,d)
if('func' in a)return c.builtin$cls==="ci"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ab("type" in a?a.type:null,b,x,d)
else if(H.ab(a,b,x,d))return!0
else{if(!('$is'+"b4" in y.prototype))return!1
w=y.prototype["$as"+"b4"]
v=H.aZ(w,z?a.slice(1):null)
return H.ab(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bO(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eB(H.aZ(r,z),b,u,d)},
eH:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ab(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ab(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ab(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ab(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.k4(m,b,l,d)},
k4:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ab(c[w],d,a[w],b))return!1}return!0},
m5:function(a,b,c){Object.defineProperty(a,H.Q(b),{value:c,enumerable:false,writable:true,configurable:true})},
k2:function(a){var z,y,x,w,v,u
z=H.Q($.eG.$1(a))
y=$.c6[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.Q($.eA.$2(a,z))
if(z!=null){y=$.c6[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c9(x)
$.c6[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c8[z]=x
return x}if(v==="-"){u=H.c9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eK(a,x)
if(v==="*")throw H.j(P.e9(z))
if(init.leafTags[z]===true){u=H.c9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eK(a,x)},
eK:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cY(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c9:function(a){return J.cY(a,!1,null,!!a.$isA)},
k3:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c9(z)
else return J.cY(z,c,null,null)},
jY:function(){if(!0===$.cW)return
$.cW=!0
H.jZ()},
jZ:function(){var z,y,x,w,v,u,t,s
$.c6=Object.create(null)
$.c8=Object.create(null)
H.jU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eM.$1(v)
if(u!=null){t=H.k3(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jU:function(){var z,y,x,w,v,u,t
z=C.B()
z=H.aT(C.y,H.aT(C.D,H.aT(C.n,H.aT(C.n,H.aT(C.C,H.aT(C.z,H.aT(C.A(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eG=new H.jV(v)
$.eA=new H.jW(u)
$.eM=new H.jX(t)},
aT:function(a,b){return a(b)||b},
ke:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hf:{"^":"a;a,b,c,d,e,f,r,0x",u:{
hg:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.b7(z)
y=z[0]
x=z[1]
return new H.hf(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hN:{"^":"a;a,b,c,d,e,f",
W:function(a){var z,y,x
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
aj:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c0:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dZ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
h2:{"^":"V;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+z+"' on null"},
u:{
dz:function(a,b){return new H.h2(a,b==null?null:b.method)}}},
fu:{"^":"V;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
u:{
cr:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fu(a,y,z?null:b.receiver)}}},
i_:{"^":"V;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kh:{"^":"r:17;a",
$1:function(a){if(!!J.H(a).$isV)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eq:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isae:1},
r:{"^":"a;",
i:function(a){return"Closure '"+H.aM(this).trim()+"'"},
gd7:function(){return this},
$isci:1,
gd7:function(){return this}},
dP:{"^":"r;"},
hx:{"^":"dP;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cc:{"^":"dP;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var z,y
z=this.c
if(z==null)y=H.bc(this.a)
else y=typeof z!=="object"?J.az(z):H.bc(z)
return(y^H.bc(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.aM(z)+"'")},
u:{
cd:function(a){return a.a},
d5:function(a){return a.c},
bR:function(a){var z,y,x,w,v
z=new H.cc("self","target","receiver","name")
y=J.b7(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hO:{"^":"V;a",
i:function(a){return this.a},
u:{
ak:function(a,b){return new H.hO("TypeError: "+H.h(P.bW(a))+": type '"+H.ey(a)+"' is not a subtype of type '"+b+"'")}}},
eX:{"^":"V;a",
i:function(a){return this.a},
u:{
eY:function(a,b){return new H.eX("CastError: "+H.h(P.bW(a))+": type '"+H.ey(a)+"' is not a subtype of type '"+b+"'")}}},
hn:{"^":"V;a",
i:function(a){return"RuntimeError: "+H.h(this.a)},
u:{
ho:function(a){return new H.hn(a)}}},
cq:{"^":"fJ;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gad:function(a){return new H.fA(this,[H.y(this,0)])},
f3:function(a,b){var z=this.b
if(z==null)return!1
return this.dG(z,b)},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aO(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aO(w,b)
x=y==null?null:y.b
return x}else return this.fe(b)},
fe:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cd(z,J.az(a)&0x3ffffff)
x=this.cR(y,a)
if(x<0)return
return y[x].b},
U:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bh()
this.b=z}this.c2(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bh()
this.c=y}this.c2(y,b,c)}else{x=this.d
if(x==null){x=this.bh()
this.d=x}w=J.az(b)&0x3ffffff
v=this.cd(x,w)
if(v==null)this.bo(x,w,[this.bi(b,c)])
else{u=this.cR(v,b)
if(u>=0)v[u].b=c
else v.push(this.bi(b,c))}}},
H:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.j(P.b1(this))
z=z.c}},
c2:function(a,b,c){var z
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
z=this.aO(a,b)
if(z==null)this.bo(a,b,this.bi(b,c))
else z.b=c},
dP:function(){this.r=this.r+1&67108863},
bi:function(a,b){var z,y
z=new H.fz(H.B(a,H.y(this,0)),H.B(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dP()
return z},
cR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.dv(this)},
aO:function(a,b){return a[b]},
cd:function(a,b){return a[b]},
bo:function(a,b,c){a[b]=c},
dJ:function(a,b){delete a[b]},
dG:function(a,b){return this.aO(a,b)!=null},
bh:function(){var z=Object.create(null)
this.bo(z,"<non-identifier-key>",z)
this.dJ(z,"<non-identifier-key>")
return z},
$isdu:1},
fz:{"^":"a;a,b,0c,0d"},
fA:{"^":"fe;a,$ti",
gk:function(a){return this.a.a},
gO:function(a){var z,y
z=this.a
y=new H.fB(z,z.r,this.$ti)
y.c=z.e
return y}},
fB:{"^":"a;a,b,0c,0d,$ti",
gK:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.b1(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jV:{"^":"r:17;a",
$1:function(a){return this.a(a)}},
jW:{"^":"r:34;a",
$2:function(a,b){return this.a(a,b)}},
jX:{"^":"r:32;a",
$1:function(a){return this.a(H.Q(a))}}}],["","",,H,{"^":"",
jQ:function(a){return J.dp(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
k6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bs:function(a){return a},
aE:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.bJ(b,a))},
h_:{"^":"m;",$islO:1,"%":"DataView;ArrayBufferView;cx|ek|el|fZ|em|en|aD"},
cx:{"^":"h_;",
gk:function(a){return a.length},
$isA:1,
$asA:I.cT},
fZ:{"^":"el;",
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
$asbX:function(){return[P.t]},
$asq:function(){return[P.t]},
$isi:1,
$asi:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aD:{"^":"en;",
$asbX:function(){return[P.M]},
$asq:function(){return[P.M]},
$isi:1,
$asi:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}},
li:{"^":"aD;",
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lj:{"^":"aD;",
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lk:{"^":"aD;",
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ll:{"^":"aD;",
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lm:{"^":"aD;",
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ln:{"^":"aD;",
gk:function(a){return a.length},
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lo:{"^":"aD;",
gk:function(a){return a.length},
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ek:{"^":"cx+q;"},
el:{"^":"ek+bX;"},
em:{"^":"cx+q;"},
en:{"^":"em+bX;"}}],["","",,P,{"^":"",
ii:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jI()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aV(new P.ik(z),1)).observe(y,{childList:true})
return new P.ij(z,y,x)}else if(self.setImmediate!=null)return P.jJ()
return P.jK()},
lU:[function(a){self.scheduleImmediate(H.aV(new P.il(H.d(a,{func:1,ret:-1})),0))},"$1","jI",4,0,8],
lV:[function(a){self.setImmediate(H.aV(new P.im(H.d(a,{func:1,ret:-1})),0))},"$1","jJ",4,0,8],
lW:[function(a){H.d(a,{func:1,ret:-1})
P.jh(0,a)},"$1","jK",4,0,8],
dS:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.aN]})
z=C.f.T(a.a,1000)
return P.ji(z<0?0:z,b)},
jE:function(a,b){if(H.bK(a,{func:1,args:[P.a,P.ae]}))return b.fD(a,null,P.a,P.ae)
if(H.bK(a,{func:1,args:[P.a]}))return H.d(a,{func:1,ret:null,args:[P.a]})
throw H.j(P.bQ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jD:function(){var z,y
for(;z=$.aS,z!=null;){$.bu=null
y=z.b
$.aS=y
if(y==null)$.bt=null
z.a.$0()}},
m3:[function(){$.cP=!0
try{P.jD()}finally{$.bu=null
$.cP=!1
if($.aS!=null)$.$get$cL().$1(P.eC())}},"$0","eC",0,0,2],
ex:function(a){var z=new P.ee(H.d(a,{func:1,ret:-1}))
if($.aS==null){$.bt=z
$.aS=z
if(!$.cP)$.$get$cL().$1(P.eC())}else{$.bt.b=z
$.bt=z}},
jH:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.aS
if(z==null){P.ex(a)
$.bu=$.bt
return}y=new P.ee(a)
x=$.bu
if(x==null){y.b=z
$.bu=y
$.aS=y}else{y.b=x.b
x.b=y
$.bu=y
if(y.b==null)$.bt=y}},
k8:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.K
if(C.i===y){P.c4(null,null,C.i,a)
return}y.toString
P.c4(null,null,y,H.d(y.cp(a),z))},
hK:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aN]}
H.d(b,z)
y=$.K
if(y===C.i){y.toString
return P.dS(a,b)}x=y.cq(b,P.aN)
$.K.toString
return P.dS(a,H.d(x,z))},
c3:function(a,b,c,d,e){var z={}
z.a=d
P.jH(new P.jF(z,e))},
ev:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.K
if(y===c)return d.$0()
$.K=c
z=y
try{y=d.$0()
return y}finally{$.K=z}},
ew:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.K
if(y===c)return d.$1(e)
$.K=c
z=y
try{y=d.$1(e)
return y}finally{$.K=z}},
jG:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.K
if(y===c)return d.$2(e,f)
$.K=c
z=y
try{y=d.$2(e,f)
return y}finally{$.K=z}},
c4:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.cp(d):c.eZ(d,-1)
P.ex(d)},
ik:{"^":"r:11;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ij:{"^":"r:31;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
il:{"^":"r:1;a",
$0:function(){this.a.$0()}},
im:{"^":"r:1;a",
$0:function(){this.a.$0()}},
et:{"^":"a;a,0b,c",
dt:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aV(new P.jk(this,b),0),a)
else throw H.j(P.a9("`setTimeout()` not found."))},
du:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aV(new P.jj(this,a,Date.now(),b),0),a)
else throw H.j(P.a9("Periodic timer."))},
$isaN:1,
u:{
jh:function(a,b){var z=new P.et(!0,0)
z.dt(a,b)
return z},
ji:function(a,b){var z=new P.et(!1,0)
z.du(a,b)
return z}}},
jk:{"^":"r:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jj:{"^":"r:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.di(w,x)}z.c=y
this.d.$1(z)}},
aR:{"^":"a;0a,b,c,d,e,$ti",
fk:function(a){if(this.c!==6)return!0
return this.b.b.bR(H.d(this.d,{func:1,ret:P.af,args:[P.a]}),a.a,P.af,P.a)},
fd:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bK(z,{func:1,args:[P.a,P.ae]}))return H.cU(w.fJ(z,a.a,a.b,null,y,P.ae),x)
else return H.cU(w.bR(H.d(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
ax:{"^":"a;cl:a<,b,0em:c<,$ti",
d3:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.K
if(y!==C.i){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jE(b,y)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ax(0,$.K,[c])
w=b==null?1:3
this.c3(new P.aR(x,w,a,b,[z,c]))
return x},
fP:function(a,b){return this.d3(a,null,b)},
c3:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isaR")
this.c=a}else{if(z===2){y=H.k(this.c,"$isax")
z=y.a
if(z<4){y.c3(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c4(null,null,z,H.d(new P.iB(this,a),{func:1,ret:-1}))}},
cf:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isaR")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isax")
y=u.a
if(y<4){u.cf(a)
return}this.a=y
this.c=u.c}z.a=this.aQ(a)
y=this.b
y.toString
P.c4(null,null,y,H.d(new P.iG(z,this),{func:1,ret:-1}))}},
bk:function(){var z=H.k(this.c,"$isaR")
this.c=null
return this.aQ(z)},
aQ:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
c7:function(a){var z,y,x,w
z=H.y(this,0)
H.cU(a,{futureOr:1,type:z})
y=this.$ti
x=H.aU(a,"$isb4",y,"$asb4")
if(x){z=H.aU(a,"$isax",y,null)
if(z)P.eg(a,this)
else P.iC(a,this)}else{w=this.bk()
H.B(a,z)
this.a=4
this.c=a
P.bp(this,w)}},
bd:[function(a,b){var z
H.k(b,"$isae")
z=this.bk()
this.a=8
this.c=new P.a6(a,b)
P.bp(this,z)},function(a){return this.bd(a,null)},"fY","$2","$1","gdE",4,2,30],
$isb4:1,
u:{
iC:function(a,b){var z,y,x
b.a=1
try{a.d3(new P.iD(b),new P.iE(b),null)}catch(x){z=H.aH(x)
y=H.aY(x)
P.k8(new P.iF(b,z,y))}},
eg:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isax")
if(z>=4){y=b.bk()
b.a=a.a
b.c=a.c
P.bp(b,y)}else{y=H.k(b.c,"$isaR")
b.a=2
b.c=a
a.cf(y)}},
bp:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isa6")
y=y.b
u=v.a
t=v.b
y.toString
P.c3(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bp(z.a,b)}y=z.a
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
if(p){H.k(r,"$isa6")
y=y.b
u=r.a
t=r.b
y.toString
P.c3(null,null,y,u,t)
return}o=$.K
if(o==null?q!=null:o!==q)$.K=q
else o=null
y=b.c
if(y===8)new P.iJ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iI(x,b,r).$0()}else if((y&2)!==0)new P.iH(z,x,b).$0()
if(o!=null)$.K=o
y=x.b
if(!!J.H(y).$isb4){if(y.a>=4){n=H.k(t.c,"$isaR")
t.c=null
b=t.aQ(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eg(y,t)
return}}m=b.b
n=H.k(m.c,"$isaR")
m.c=null
b=m.aQ(n)
y=x.a
u=x.b
if(!y){H.B(u,H.y(m,0))
m.a=4
m.c=u}else{H.k(u,"$isa6")
m.a=8
m.c=u}z.a=m
y=m}}}},
iB:{"^":"r:1;a,b",
$0:function(){P.bp(this.a,this.b)}},
iG:{"^":"r:1;a,b",
$0:function(){P.bp(this.b,this.a.a)}},
iD:{"^":"r:11;a",
$1:function(a){var z=this.a
z.a=0
z.c7(a)}},
iE:{"^":"r:28;a",
$2:function(a,b){this.a.bd(a,H.k(b,"$isae"))},
$1:function(a){return this.$2(a,null)}},
iF:{"^":"r:1;a,b,c",
$0:function(){this.a.bd(this.b,this.c)}},
iJ:{"^":"r:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.d1(H.d(w.d,{func:1}),null)}catch(v){y=H.aH(v)
x=H.aY(v)
if(this.d){w=H.k(this.a.a.c,"$isa6").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isa6")
else u.b=new P.a6(y,x)
u.a=!0
return}if(!!J.H(z).$isb4){if(z instanceof P.ax&&z.gcl()>=4){if(z.gcl()===8){w=this.b
w.b=H.k(z.gem(),"$isa6")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.fP(new P.iK(t),null)
w.a=!1}}},
iK:{"^":"r:27;a",
$1:function(a){return this.a}},
iI:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.B(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.bR(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aH(t)
y=H.aY(t)
x=this.a
x.b=new P.a6(z,y)
x.a=!0}}},
iH:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isa6")
w=this.c
if(w.fk(z)&&w.e!=null){v=this.b
v.b=w.fd(z)
v.a=!1}}catch(u){y=H.aH(u)
x=H.aY(u)
w=H.k(this.a.a.c,"$isa6")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a6(y,x)
s.a=!0}}},
ee:{"^":"a;a,0b"},
cC:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.ax(0,$.K,[P.M])
z.a=0
this.fi(new P.hz(z,this),!0,new P.hA(z,y),y.gdE())
return y}},
hz:{"^":"r;a,b",
$1:function(a){H.B(a,H.aX(this.b,"cC",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.aX(this.b,"cC",0)]}}},
hA:{"^":"r:1;a,b",
$0:function(){this.b.c7(this.a.a)}},
dM:{"^":"a;$ti"},
aN:{"^":"a;"},
a6:{"^":"a;a,b",
i:function(a){return H.h(this.a)},
$isV:1},
jp:{"^":"a;",$islT:1},
jF:{"^":"r:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dA()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.j(z)
x=H.j(z)
x.stack=y.i(0)
throw x}},
j3:{"^":"jp;",
fK:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.i===$.K){a.$0()
return}P.ev(null,null,this,a,-1)}catch(x){z=H.aH(x)
y=H.aY(x)
P.c3(null,null,this,z,H.k(y,"$isae"))}},
fL:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.i===$.K){a.$1(b)
return}P.ew(null,null,this,a,b,-1,c)}catch(x){z=H.aH(x)
y=H.aY(x)
P.c3(null,null,this,z,H.k(y,"$isae"))}},
eZ:function(a,b){return new P.j5(this,H.d(a,{func:1,ret:b}),b)},
cp:function(a){return new P.j4(this,H.d(a,{func:1,ret:-1}))},
cq:function(a,b){return new P.j6(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
d1:function(a,b){H.d(a,{func:1,ret:b})
if($.K===C.i)return a.$0()
return P.ev(null,null,this,a,b)},
bR:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.K===C.i)return a.$1(b)
return P.ew(null,null,this,a,b,c,d)},
fJ:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.K===C.i)return a.$2(b,c)
return P.jG(null,null,this,a,b,c,d,e,f)},
fD:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
j5:{"^":"r;a,b,c",
$0:function(){return this.a.d1(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
j4:{"^":"r:2;a,b",
$0:function(){return this.a.fK(this.b)}},
j6:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.fL(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fD:function(a,b,c){H.bN(a)
return H.w(H.jR(a,new H.cq(0,0,[b,c])),"$isdu",[b,c],"$asdu")},
fC:function(a,b){return new H.cq(0,0,[a,b])},
fE:function(a,b,c,d){return new P.iQ(0,0,[d])},
fq:function(a,b,c){var z,y
if(P.cQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bv()
C.a.h(y,a)
try{P.jC(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.dN(b,H.k1(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cl:function(a,b,c){var z,y,x
if(P.cQ(a))return b+"..."+c
z=new P.bG(b)
y=$.$get$bv()
C.a.h(y,a)
try{x=z
x.a=P.dN(x.gah(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gah()+c
y=z.gah()
return y.charCodeAt(0)==0?y:y},
cQ:function(a){var z,y
for(z=0;y=$.$get$bv(),z<y.length;++z)if(a===y[z])return!0
return!1},
jC:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gO(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.h(z.gK(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gK(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gK(z);++x
for(;z.D();t=s,s=r){r=z.gK(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dv:function(a){var z,y,x
z={}
if(P.cQ(a))return"{...}"
y=new P.bG("")
try{C.a.h($.$get$bv(),a)
x=y
x.a=x.gah()+"{"
z.a=!0
J.eR(a,new P.fK(z,y))
z=y
z.a=z.gah()+"}"}finally{z=$.$get$bv()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gah()
return z.charCodeAt(0)==0?z:z},
iQ:{"^":"iL;a,0b,0c,0d,0e,0f,r,$ti",
gO:function(a){return P.ej(this,this.r,H.y(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cN()
this.b=z}return this.c5(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cN()
this.c=y}return this.c5(y,b)}else return this.dv(0,b)},
dv:function(a,b){var z,y,x
H.B(b,H.y(this,0))
z=this.d
if(z==null){z=P.cN()
this.d=z}y=this.c8(b)
x=z[y]
if(x==null)z[y]=[this.bc(b)]
else{if(this.cc(x,b)>=0)return!1
x.push(this.bc(b))}return!0},
F:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cg(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cg(this.c,b)
else return this.ef(0,b)},
ef:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dM(z,b)
x=this.cc(y,b)
if(x<0)return!1
this.cn(y.splice(x,1)[0])
return!0},
c5:function(a,b){H.B(b,H.y(this,0))
if(H.k(a[b],"$iscM")!=null)return!1
a[b]=this.bc(b)
return!0},
cg:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$iscM")
if(z==null)return!1
this.cn(z)
delete a[b]
return!0},
c6:function(){this.r=this.r+1&67108863},
bc:function(a){var z,y
z=new P.cM(H.B(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.c6()
return z},
cn:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.c6()},
c8:function(a){return J.az(a)&0x3ffffff},
dM:function(a,b){return a[this.c8(b)]},
cc:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
u:{
cN:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cM:{"^":"a;a,0b,0c"},
iR:{"^":"a;a,b,0c,0d,$ti",
gK:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.b1(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.y(this,0))
this.c=z.b
return!0}}},
u:{
ej:function(a,b,c){var z=new P.iR(a,b,[c])
z.c=a.e
return z}}},
iL:{"^":"hp;"},
ct:{"^":"iS;",$isi:1,$isb:1},
q:{"^":"a;$ti",
gO:function(a){return new H.fF(a,this.gk(a),0,[H.bw(this,a,"q",0)])},
w:function(a,b){return this.j(a,b)},
fS:function(a,b){var z,y,x
z=H.c([],[H.bw(this,a,"q",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.z(x)
if(!(y<x))break
C.a.U(z,y,this.j(a,y));++y}return z},
fR:function(a){return this.fS(a,!0)},
i:function(a){return P.cl(a,"[","]")}},
fJ:{"^":"a5;"},
fK:{"^":"r:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
a5:{"^":"a;$ti",
H:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.bw(this,a,"a5",0),H.bw(this,a,"a5",1)]})
for(z=J.bP(this.gad(a));z.D();){y=z.gK(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b_(this.gad(a))},
i:function(a){return P.dv(a)},
$isa_:1},
hq:{"^":"a;$ti",
i:function(a){return P.cl(this,"{","}")},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.d2("index"))
if(b<0)H.o(P.bd(b,0,null,"index",null))
for(z=P.ej(this,this.r,H.y(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.j(P.J(b,this,"index",null,y))},
$isi:1},
hp:{"^":"hq;"},
iS:{"^":"a+q;"}}],["","",,P,{"^":"",
fh:function(a){var z=J.H(a)
if(!!z.$isr)return z.i(a)
return"Instance of '"+H.aM(a)+"'"},
fG:function(a,b,c,d){var z,y
H.B(b,d)
z=J.fs(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.U(z,y,b)
return H.w(z,"$isb",[d],"$asb")},
fH:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gO(a);x.D();)C.a.h(y,H.B(x.gK(x),c))
if(b)return y
return H.w(J.b7(y),"$isb",z,"$asb")},
bW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fh(a)},
p:function(a){return new P.ef(a)},
d_:function(a){H.k6(a)},
af:{"^":"a;"},
"+bool":0,
aB:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aB))return!1
return this.a===b.a&&this.b===b.b},
gL:function(a){var z=this.a
return(z^C.f.ck(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.f7(H.he(this))
y=P.bx(H.hc(this))
x=P.bx(H.h8(this))
w=P.bx(H.h9(this))
v=P.bx(H.hb(this))
u=P.bx(H.hd(this))
t=P.f8(H.ha(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
u:{
f7:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
f8:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bx:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"P;"},
"+double":0,
by:{"^":"a;a",
av:function(a,b){return C.f.av(this.a,H.k(b,"$isby").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.by))return!1
return this.a===b.a},
gL:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fd()
y=this.a
if(y<0)return"-"+new P.by(0-y).i(0)
x=z.$1(C.f.T(y,6e7)%60)
w=z.$1(C.f.T(y,1e6)%60)
v=new P.fc().$1(y%1e6)
return""+C.f.T(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
u:{
dl:function(a,b,c,d,e,f){return new P.by(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fc:{"^":"r:19;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fd:{"^":"r:19;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
V:{"^":"a;"},
dA:{"^":"V;",
i:function(a){return"Throw of null."}},
aA:{"^":"V;a,b,c,d",
gbf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbe:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.h(z)
w=this.gbf()+y+x
if(!this.a)return w
v=this.gbe()
u=P.bW(this.b)
return w+v+": "+H.h(u)},
u:{
eS:function(a){return new P.aA(!1,null,null,a)},
bQ:function(a,b,c){return new P.aA(!0,a,b,c)},
d2:function(a){return new P.aA(!1,null,a,"Must not be null")}}},
dE:{"^":"aA;e,f,a,b,c,d",
gbf:function(){return"RangeError"},
gbe:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
u:{
cz:function(a,b,c){return new P.dE(null,null,!0,a,b,"Value not in range")},
bd:function(a,b,c,d,e){return new P.dE(b,c,!0,a,d,"Invalid value")}}},
fp:{"^":"aA;e,k:f>,a,b,c,d",
gbf:function(){return"RangeError"},
gbe:function(){if(J.eO(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.h(z)},
u:{
J:function(a,b,c,d,e){var z=H.W(e!=null?e:J.b_(b))
return new P.fp(b,z,!0,a,c,"Index out of range")}}},
i0:{"^":"V;a",
i:function(a){return"Unsupported operation: "+this.a},
u:{
a9:function(a){return new P.i0(a)}}},
hZ:{"^":"V;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
u:{
e9:function(a){return new P.hZ(a)}}},
hw:{"^":"V;a",
i:function(a){return"Bad state: "+this.a}},
f3:{"^":"V;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.bW(z))+"."},
u:{
b1:function(a){return new P.f3(a)}}},
h3:{"^":"a;",
i:function(a){return"Out of Memory"},
$isV:1},
dL:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isV:1},
f6:{"^":"V;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ef:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
M:{"^":"P;"},
"+int":0,
i:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gO(this)
for(y=0;z.D();)++y
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.d2("index"))
if(b<0)H.o(P.bd(b,0,null,"index",null))
for(z=this.gO(this),y=0;z.D();){x=z.gK(z)
if(b===y)return x;++y}throw H.j(P.J(b,this,"index",null,y))},
i:function(a){return P.fq(this,"(",")")}},
cm:{"^":"a;$ti"},
b:{"^":"a;$ti",$isi:1},
"+List":0,
a_:{"^":"a;$ti"},
F:{"^":"a;",
gL:function(a){return P.a.prototype.gL.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
P:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gL:function(a){return H.bc(this)},
i:function(a){return"Instance of '"+H.aM(this)+"'"},
toString:function(){return this.i(this)}},
ae:{"^":"a;"},
n:{"^":"a;",$ish4:1},
"+String":0,
bG:{"^":"a;ah:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
u:{
dN:function(a,b,c){var z=J.bP(b)
if(!z.D())return a
if(c.length===0){do a+=H.h(z.gK(z))
while(z.D())}else{a+=H.h(z.gK(z))
for(;z.D();)a=a+c+H.h(z.gK(z))}return a}}}}],["","",,W,{"^":"",
cf:function(a,b){var z=document.createElement("canvas")
return z},
ff:function(a){H.k(a,"$isZ")
return"wheel"},
c1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ei:function(a,b,c,d){var z,y
z=W.c1(W.c1(W.c1(W.c1(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ez:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.K
if(z===C.i)return a
return z.cq(a,b)},
aK:{"^":"X;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ki:{"^":"cB;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kj:{"^":"m;0k:length=","%":"AccessibleNodeList"},
kk:{"^":"aK;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kl:{"^":"aK;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
eW:{"^":"m;","%":";Blob"},
ce:{"^":"aK;",
b9:function(a,b,c){if(c!=null)return a.getContext(b,P.jM(c,null))
return a.getContext(b)},
d9:function(a,b){return this.b9(a,b,null)},
$isce:1,
"%":"HTMLCanvasElement"},
da:{"^":"m;",$isda:1,"%":"CanvasRenderingContext2D"},
kr:{"^":"I;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kt:{"^":"bU;0k:length=","%":"CSSPerspective"},
ku:{"^":"ch;0n:x=,0p:y=","%":"CSSPositionValue"},
kv:{"^":"bU;0n:x=,0p:y=","%":"CSSRotation"},
b2:{"^":"m;",$isb2:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kw:{"^":"bU;0n:x=,0p:y=","%":"CSSScale"},
f4:{"^":"ir;0k:length=",
da:function(a,b){var z=a.getPropertyValue(this.c4(a,b))
return z==null?"":z},
c4:function(a,b){var z,y
z=$.$get$de()
y=z[b]
if(typeof y==="string")return y
y=this.ez(a,b)
z[b]=y
return y},
ez:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.f9()+b
if(z in a)return z
return b},
eo:function(a,b,c,d){a.setProperty(b,c,d)},
gbu:function(a){return a.bottom},
ga4:function(a){return a.height},
gat:function(a){return a.left},
gaH:function(a){return a.right},
gaJ:function(a){return a.top},
ga6:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
f5:{"^":"a;",
gat:function(a){return this.da(a,"left")}},
ch:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bU:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kx:{"^":"ch;0k:length=","%":"CSSTransformValue"},
ky:{"^":"bU;0n:x=,0p:y=","%":"CSSTranslation"},
kz:{"^":"ch;0k:length=","%":"CSSUnparsedValue"},
kA:{"^":"m;0k:length=","%":"DataTransferItemList"},
kB:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
kC:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
kD:{"^":"fa;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fa:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
kE:{"^":"it;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a4,P.P]]},
$asq:function(){return[[P.a4,P.P]]},
$isi:1,
$asi:function(){return[[P.a4,P.P]]},
$isb:1,
$asb:function(){return[[P.a4,P.P]]},
$asv:function(){return[[P.a4,P.P]]},
"%":"ClientRectList|DOMRectList"},
fb:{"^":"m;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.ga6(a))+" x "+H.h(this.ga4(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.aU(b,"$isa4",[P.P],"$asa4")
if(!z)return!1
z=J.bM(b)
return a.left===z.gat(b)&&a.top===z.gaJ(b)&&this.ga6(a)===z.ga6(b)&&this.ga4(a)===z.ga4(b)},
gL:function(a){return W.ei(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga6(a)&0x1FFFFFFF,this.ga4(a)&0x1FFFFFFF)},
gbu:function(a){return a.bottom},
ga4:function(a){return a.height},
gat:function(a){return a.left},
gaH:function(a){return a.right},
gaJ:function(a){return a.top},
ga6:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa4:1,
$asa4:function(){return[P.P]},
"%":";DOMRectReadOnly"},
kF:{"^":"iv;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.n]},
$asq:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$asv:function(){return[P.n]},
"%":"DOMStringList"},
kG:{"^":"m;0k:length=","%":"DOMTokenList"},
iq:{"^":"ct;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.k(z[b],"$isX")},
h:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var z=this.fR(this)
return new J.am(z,z.length,0,[H.y(z,0)])},
$asq:function(){return[W.X]},
$asi:function(){return[W.X]},
$asb:function(){return[W.X]}},
X:{"^":"I;",
gcr:function(a){return new W.iq(a,a.children)},
gaT:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.av()
if(x<0)x=-x*0
if(typeof w!=="number")return w.av()
if(w<0)w=-w*0
return new P.a4(z,y,x,w,[P.P])},
i:function(a){return a.localName},
$isX:1,
"%":";Element"},
a2:{"^":"m;",$isa2:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
Z:{"^":"m;",
co:["df",function(a,b,c,d){H.d(c,{func:1,args:[W.a2]})
if(c!=null)this.dw(a,b,c,!1)}],
dw:function(a,b,c,d){return a.addEventListener(b,H.aV(H.d(c,{func:1,args:[W.a2]}),1),!1)},
$isZ:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eo|ep|er|es"},
b3:{"^":"eW;",$isb3:1,"%":"File"},
kZ:{"^":"iA;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b3]},
$asq:function(){return[W.b3]},
$isi:1,
$asi:function(){return[W.b3]},
$isb:1,
$asb:function(){return[W.b3]},
$asv:function(){return[W.b3]},
"%":"FileList"},
l_:{"^":"Z;0k:length=","%":"FileWriter"},
l2:{"^":"aK;0k:length=","%":"HTMLFormElement"},
b5:{"^":"m;",$isb5:1,"%":"Gamepad"},
l3:{"^":"cB;0n:x=,0p:y=","%":"Gyroscope"},
l4:{"^":"m;0k:length=","%":"History"},
l5:{"^":"iN;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.I]},
$asq:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$isb:1,
$asb:function(){return[W.I]},
$asv:function(){return[W.I]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bY:{"^":"m;0ct:data=",$isbY:1,"%":"ImageData"},
dn:{"^":"aK;",$isdn:1,"%":"HTMLImageElement"},
b8:{"^":"cF;",$isb8:1,"%":"KeyboardEvent"},
la:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
lb:{"^":"cB;0n:x=,0p:y=","%":"Magnetometer"},
ld:{"^":"m;0k:length=","%":"MediaList"},
le:{"^":"Z;",
co:function(a,b,c,d){H.d(c,{func:1,args:[W.a2]})
if(b==="message")a.start()
this.df(a,b,c,!1)},
"%":"MessagePort"},
lf:{"^":"iT;",
j:function(a,b){return P.ay(a.get(H.Q(b)))},
H:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ay(y.value[1]))}},
gad:function(a){var z=H.c([],[P.n])
this.H(a,new W.fW(z))
return z},
gk:function(a){return a.size},
$asa5:function(){return[P.n,null]},
$isa_:1,
$asa_:function(){return[P.n,null]},
"%":"MIDIInputMap"},
fW:{"^":"r:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lg:{"^":"iU;",
j:function(a,b){return P.ay(a.get(H.Q(b)))},
H:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ay(y.value[1]))}},
gad:function(a){var z=H.c([],[P.n])
this.H(a,new W.fX(z))
return z},
gk:function(a){return a.size},
$asa5:function(){return[P.n,null]},
$isa_:1,
$asa_:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
fX:{"^":"r:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b9:{"^":"m;",$isb9:1,"%":"MimeType"},
lh:{"^":"iW;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b9]},
$asq:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$isb:1,
$asb:function(){return[W.b9]},
$asv:function(){return[W.b9]},
"%":"MimeTypeArray"},
ai:{"^":"cF;",$isai:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ip:{"^":"ct;a",
gO:function(a){var z=this.a.childNodes
return new W.dm(z,z.length,-1,[H.bw(C.F,z,"v",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asq:function(){return[W.I]},
$asi:function(){return[W.I]},
$asb:function(){return[W.I]}},
I:{"^":"Z;",
i:function(a){var z=a.nodeValue
return z==null?this.dg(a):z},
$isI:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
h0:{"^":"iY;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.I]},
$asq:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$isb:1,
$asb:function(){return[W.I]},
$asv:function(){return[W.I]},
"%":"NodeList|RadioNodeList"},
bb:{"^":"m;0k:length=",$isbb:1,"%":"Plugin"},
ls:{"^":"j1;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bb]},
$asq:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$isb:1,
$asb:function(){return[W.bb]},
$asv:function(){return[W.bb]},
"%":"PluginArray"},
lx:{"^":"j7;",
j:function(a,b){return P.ay(a.get(H.Q(b)))},
H:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ay(y.value[1]))}},
gad:function(a){var z=H.c([],[P.n])
this.H(a,new W.hm(z))
return z},
gk:function(a){return a.size},
$asa5:function(){return[P.n,null]},
$isa_:1,
$asa_:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hm:{"^":"r:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lz:{"^":"aK;0k:length=","%":"HTMLSelectElement"},
cB:{"^":"Z;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
be:{"^":"Z;",$isbe:1,"%":"SourceBuffer"},
lA:{"^":"ep;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.be]},
$asq:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$isb:1,
$asb:function(){return[W.be]},
$asv:function(){return[W.be]},
"%":"SourceBufferList"},
bf:{"^":"m;",$isbf:1,"%":"SpeechGrammar"},
lB:{"^":"j9;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bf]},
$asq:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isb:1,
$asb:function(){return[W.bf]},
$asv:function(){return[W.bf]},
"%":"SpeechGrammarList"},
bg:{"^":"m;0k:length=",$isbg:1,"%":"SpeechRecognitionResult"},
lD:{"^":"jc;",
j:function(a,b){return a.getItem(H.Q(b))},
H:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gad:function(a){var z=H.c([],[P.n])
this.H(a,new W.hy(z))
return z},
gk:function(a){return a.length},
$asa5:function(){return[P.n,P.n]},
$isa_:1,
$asa_:function(){return[P.n,P.n]},
"%":"Storage"},
hy:{"^":"r:25;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bh:{"^":"m;",$isbh:1,"%":"CSSStyleSheet|StyleSheet"},
bi:{"^":"aK;",$isbi:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bj:{"^":"Z;",$isbj:1,"%":"TextTrack"},
bk:{"^":"Z;",$isbk:1,"%":"TextTrackCue|VTTCue"},
lI:{"^":"jg;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bk]},
$asq:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isb:1,
$asb:function(){return[W.bk]},
$asv:function(){return[W.bk]},
"%":"TextTrackCueList"},
lJ:{"^":"es;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bj]},
$asq:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isb:1,
$asb:function(){return[W.bj]},
$asv:function(){return[W.bj]},
"%":"TextTrackList"},
lK:{"^":"m;0k:length=","%":"TimeRanges"},
bl:{"^":"m;",$isbl:1,"%":"Touch"},
aO:{"^":"cF;",$isaO:1,"%":"TouchEvent"},
lL:{"^":"jm;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bl]},
$asq:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$isb:1,
$asb:function(){return[W.bl]},
$asv:function(){return[W.bl]},
"%":"TouchList"},
lM:{"^":"m;0k:length=","%":"TrackDefaultList"},
cF:{"^":"a2;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lP:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
lR:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
lS:{"^":"Z;0k:length=","%":"VideoTrackList"},
bo:{"^":"ai;",
gf7:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.a9("deltaY is not supported"))},
gf6:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.a9("deltaX is not supported"))},
$isbo:1,
"%":"WheelEvent"},
ih:{"^":"Z;",
ei:function(a,b){return a.requestAnimationFrame(H.aV(H.d(b,{func:1,ret:-1,args:[P.P]}),1))},
dK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lX:{"^":"jr;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b2]},
$asq:function(){return[W.b2]},
$isi:1,
$asi:function(){return[W.b2]},
$isb:1,
$asb:function(){return[W.b2]},
$asv:function(){return[W.b2]},
"%":"CSSRuleList"},
lY:{"^":"fb;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.aU(b,"$isa4",[P.P],"$asa4")
if(!z)return!1
z=J.bM(b)
return a.left===z.gat(b)&&a.top===z.gaJ(b)&&a.width===z.ga6(b)&&a.height===z.ga4(b)},
gL:function(a){return W.ei(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga4:function(a){return a.height},
ga6:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
m_:{"^":"jt;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b5]},
$asq:function(){return[W.b5]},
$isi:1,
$asi:function(){return[W.b5]},
$isb:1,
$asb:function(){return[W.b5]},
$asv:function(){return[W.b5]},
"%":"GamepadList"},
m0:{"^":"jv;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.I]},
$asq:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$isb:1,
$asb:function(){return[W.I]},
$asv:function(){return[W.I]},
"%":"MozNamedAttrMap|NamedNodeMap"},
m1:{"^":"jx;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bg]},
$asq:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isb:1,
$asb:function(){return[W.bg]},
$asv:function(){return[W.bg]},
"%":"SpeechRecognitionResultList"},
m2:{"^":"jz;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bh]},
$asq:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isb:1,
$asb:function(){return[W.bh]},
$asv:function(){return[W.bh]},
"%":"StyleSheetList"},
iw:{"^":"cC;a,b,c,$ti",
fi:function(a,b,c,d){var z=H.y(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.U(this.a,this.b,a,!1,z)}},
lZ:{"^":"iw;a,b,c,$ti"},
ix:{"^":"dM;a,b,c,d,e,$ti",
eA:function(){var z=this.d
if(z!=null&&this.a<=0)J.eQ(this.b,this.c,z,!1)},
u:{
U:function(a,b,c,d,e){var z=c==null?null:W.ez(new W.iy(c),W.a2)
z=new W.ix(0,a,b,z,!1,[e])
z.eA()
return z}}},
iy:{"^":"r:3;a",
$1:function(a){return this.a.$1(H.k(a,"$isa2"))}},
v:{"^":"a;$ti",
gO:function(a){return new W.dm(a,this.gk(a),-1,[H.bw(this,a,"v",0)])}},
dm:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.eP(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gK:function(a){return this.d}},
ir:{"^":"m+f5;"},
is:{"^":"m+q;"},
it:{"^":"is+v;"},
iu:{"^":"m+q;"},
iv:{"^":"iu+v;"},
iz:{"^":"m+q;"},
iA:{"^":"iz+v;"},
iM:{"^":"m+q;"},
iN:{"^":"iM+v;"},
iT:{"^":"m+a5;"},
iU:{"^":"m+a5;"},
iV:{"^":"m+q;"},
iW:{"^":"iV+v;"},
iX:{"^":"m+q;"},
iY:{"^":"iX+v;"},
j0:{"^":"m+q;"},
j1:{"^":"j0+v;"},
j7:{"^":"m+a5;"},
eo:{"^":"Z+q;"},
ep:{"^":"eo+v;"},
j8:{"^":"m+q;"},
j9:{"^":"j8+v;"},
jc:{"^":"m+a5;"},
jf:{"^":"m+q;"},
jg:{"^":"jf+v;"},
er:{"^":"Z+q;"},
es:{"^":"er+v;"},
jl:{"^":"m+q;"},
jm:{"^":"jl+v;"},
jq:{"^":"m+q;"},
jr:{"^":"jq+v;"},
js:{"^":"m+q;"},
jt:{"^":"js+v;"},
ju:{"^":"m+q;"},
jv:{"^":"ju+v;"},
jw:{"^":"m+q;"},
jx:{"^":"jw+v;"},
jy:{"^":"m+q;"},
jz:{"^":"jy+v;"}}],["","",,P,{"^":"",
jP:function(a){var z,y
z=J.H(a)
if(!!z.$isbY){y=z.gct(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eu(a.data,a.height,a.width)},
jO:function(a){if(a instanceof P.eu)return{data:a.a,height:a.b,width:a.c}
return a},
ay:function(a){var z,y,x,w,v
if(a==null)return
z=P.fC(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.Q(y[w])
z.U(0,v,a[v])}return z},
jM:function(a,b){var z={}
a.H(0,new P.jN(z))
return z},
dk:function(){var z=$.dj
if(z==null){z=J.ca(window.navigator.userAgent,"Opera",0)
$.dj=z}return z},
f9:function(){var z,y
z=$.dg
if(z!=null)return z
y=$.dh
if(y==null){y=J.ca(window.navigator.userAgent,"Firefox",0)
$.dh=y}if(y)z="-moz-"
else{y=$.di
if(y==null){y=!P.dk()&&J.ca(window.navigator.userAgent,"Trident/",0)
$.di=y}if(y)z="-ms-"
else z=P.dk()?"-o-":"-webkit-"}$.dg=z
return z},
eu:{"^":"a;ct:a>,b,c",$isbY:1},
jN:{"^":"r:16;a",
$2:function(a,b){this.a[a]=b}},
fk:{"^":"ct;a,b",
gbg:function(){var z,y,x
z=this.b
y=H.aX(z,"q",0)
x=W.X
return new H.fL(new H.ie(z,H.d(new P.fl(),{func:1,ret:P.af,args:[y]}),[y]),H.d(new P.fm(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b_(this.gbg().a)},
j:function(a,b){var z=this.gbg()
return z.b.$1(J.d1(z.a,b))},
gO:function(a){var z=P.fH(this.gbg(),!1,W.X)
return new J.am(z,z.length,0,[H.y(z,0)])},
$asq:function(){return[W.X]},
$asi:function(){return[W.X]},
$asb:function(){return[W.X]}},
fl:{"^":"r:22;",
$1:function(a){return!!J.H(H.k(a,"$isI")).$isX}},
fm:{"^":"r:35;",
$1:function(a){return H.e(H.k(a,"$isI"),"$isX")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eh:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bF:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.h(this.a)+", "+H.h(this.b)+")"},
q:function(a,b){var z,y,x
if(b==null)return!1
z=H.aU(b,"$isbF",[P.P],null)
if(!z)return!1
z=this.a
y=J.bM(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gL:function(a){var z,y
z=J.az(this.a)
y=J.az(this.b)
return P.eh(P.bq(P.bq(0,z),y))}},
j2:{"^":"a;$ti",
gaH:function(a){var z=this.a
if(typeof z!=="number")return z.A()
return H.B(z+this.c,H.y(this,0))},
gbu:function(a){var z=this.b
if(typeof z!=="number")return z.A()
return H.B(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.aU(b,"$isa4",[P.P],"$asa4")
if(!z)return!1
z=this.a
y=J.bM(b)
x=y.gat(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaJ(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.A()
w=H.y(this,0)
if(H.B(z+this.c,w)===y.gaH(b)){if(typeof x!=="number")return x.A()
z=H.B(x+this.d,w)===y.gbu(b)}else z=!1}else z=!1}else z=!1
return z},
gL:function(a){var z,y,x,w,v
z=this.a
y=J.az(z)
x=this.b
w=J.az(x)
if(typeof z!=="number")return z.A()
v=H.y(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.A()
v=H.B(x+this.d,v)
return P.eh(P.bq(P.bq(P.bq(P.bq(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cs:function(a,b){var z,y
H.w(b,"$isbF",[P.P],"$asbF")
z=b.a
y=this.a
if(typeof z!=="number")return z.d8()
if(typeof y!=="number")return H.z(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.d8()
if(typeof y!=="number")return H.z(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a4:{"^":"j2;at:a>,aJ:b>,a6:c>,a4:d>,$ti"}}],["","",,P,{"^":"",kH:{"^":"O;0n:x=,0p:y=","%":"SVGFEBlendElement"},kI:{"^":"O;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},kJ:{"^":"O;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},kK:{"^":"O;0n:x=,0p:y=","%":"SVGFECompositeElement"},kL:{"^":"O;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},kM:{"^":"O;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},kN:{"^":"O;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},kO:{"^":"O;0n:x=,0p:y=","%":"SVGFEFloodElement"},kP:{"^":"O;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},kQ:{"^":"O;0n:x=,0p:y=","%":"SVGFEImageElement"},kR:{"^":"O;0n:x=,0p:y=","%":"SVGFEMergeElement"},kS:{"^":"O;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},kT:{"^":"O;0n:x=,0p:y=","%":"SVGFEOffsetElement"},kU:{"^":"O;0n:x=,0p:y=","%":"SVGFEPointLightElement"},kV:{"^":"O;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},kW:{"^":"O;0n:x=,0p:y=","%":"SVGFESpotLightElement"},kX:{"^":"O;0n:x=,0p:y=","%":"SVGFETileElement"},kY:{"^":"O;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},l0:{"^":"O;0n:x=,0p:y=","%":"SVGFilterElement"},l1:{"^":"b6;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fo:{"^":"b6;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b6:{"^":"O;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},l6:{"^":"b6;0n:x=,0p:y=","%":"SVGImageElement"},bC:{"^":"m;",$isbC:1,"%":"SVGLength"},l9:{"^":"iP;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bC]},
$isi:1,
$asi:function(){return[P.bC]},
$isb:1,
$asb:function(){return[P.bC]},
$asv:function(){return[P.bC]},
"%":"SVGLengthList"},lc:{"^":"O;0n:x=,0p:y=","%":"SVGMaskElement"},bE:{"^":"m;",$isbE:1,"%":"SVGNumber"},lp:{"^":"j_;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bE]},
$isi:1,
$asi:function(){return[P.bE]},
$isb:1,
$asb:function(){return[P.bE]},
$asv:function(){return[P.bE]},
"%":"SVGNumberList"},lr:{"^":"O;0n:x=,0p:y=","%":"SVGPatternElement"},lt:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},lu:{"^":"m;0k:length=","%":"SVGPointList"},lv:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},lw:{"^":"fo;0n:x=,0p:y=","%":"SVGRectElement"},lE:{"^":"je;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$asq:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$asv:function(){return[P.n]},
"%":"SVGStringList"},O:{"^":"X;",
gcr:function(a){return new P.fk(a,new W.ip(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lF:{"^":"b6;0n:x=,0p:y=","%":"SVGSVGElement"},hB:{"^":"b6;","%":"SVGTextPathElement;SVGTextContentElement"},lH:{"^":"hB;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bH:{"^":"m;",$isbH:1,"%":"SVGTransform"},lN:{"^":"jo;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bH]},
$isi:1,
$asi:function(){return[P.bH]},
$isb:1,
$asb:function(){return[P.bH]},
$asv:function(){return[P.bH]},
"%":"SVGTransformList"},lQ:{"^":"b6;0n:x=,0p:y=","%":"SVGUseElement"},iO:{"^":"m+q;"},iP:{"^":"iO+v;"},iZ:{"^":"m+q;"},j_:{"^":"iZ+v;"},jd:{"^":"m+q;"},je:{"^":"jd+v;"},jn:{"^":"m+q;"},jo:{"^":"jn+v;"}}],["","",,P,{"^":"",km:{"^":"m;0k:length=","%":"AudioBuffer"},kn:{"^":"io;",
j:function(a,b){return P.ay(a.get(H.Q(b)))},
H:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ay(y.value[1]))}},
gad:function(a){var z=H.c([],[P.n])
this.H(a,new P.eU(z))
return z},
gk:function(a){return a.size},
$asa5:function(){return[P.n,null]},
$isa_:1,
$asa_:function(){return[P.n,null]},
"%":"AudioParamMap"},eU:{"^":"r:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},ko:{"^":"Z;0k:length=","%":"AudioTrackList"},eV:{"^":"Z;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lq:{"^":"eV;0k:length=","%":"OfflineAudioContext"},io:{"^":"m+a5;"}}],["","",,P,{"^":"",cA:{"^":"m;",
fN:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.H(g)
if(!!z.$isbY)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.jO(g))
return}if(!!z.$isdn)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.j(P.eS("Incorrect number or type of arguments"))},
fM:function(a,b,c,d,e,f,g){return this.fN(a,b,c,d,e,f,g,null,null,null)},
$iscA:1,
"%":"WebGLRenderingContext"},hX:{"^":"m;",$ishX:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lC:{"^":"jb;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return P.ay(a.item(b))},
w:function(a,b){return this.j(a,b)},
$asq:function(){return[[P.a_,,,]]},
$isi:1,
$asi:function(){return[[P.a_,,,]]},
$isb:1,
$asb:function(){return[[P.a_,,,]]},
$asv:function(){return[[P.a_,,,]]},
"%":"SQLResultSetRowList"},ja:{"^":"m+q;"},jb:{"^":"ja+v;"}}],["","",,O,{"^":"",aI:{"^":"a;0a,0b,0c,0d,$ti",
c_:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
bU:function(a,b,c){var z=H.aX(this,"aI",0)
H.d(b,{func:1,ret:P.af,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.M,[P.i,z]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
ba:function(a,b){return this.bU(a,null,b)},
e9:function(a){var z
H.w(a,"$isi",[H.aX(this,"aI",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dQ:function(a,b){var z
H.w(b,"$isi",[H.aX(this,"aI",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gO:function(a){var z=this.a
return new J.am(z,z.length,0,[H.y(z,0)])},
w:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aX(this,"aI",0)
H.B(b,z)
z=[z]
if(this.e9(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dQ(x,H.c([b],z))}},
$isi:1,
u:{
cg:function(a){var z=new O.aI([a])
z.c_(a)
return z}}},cv:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.ac()
this.b=z}return z},
dm:function(a){var z=this.b
if(!(z==null))z.G(a)},
ae:function(){return this.dm(null)},
gM:function(a){var z=this.a
if(z.length>0)return C.a.gbI(z)
else return V.cw()},
cZ:function(a){var z=this.a
if(a==null)C.a.h(z,V.cw())
else C.a.h(z,a)
this.ae()},
bO:function(){var z=this.a
if(z.length>0){z.pop()
this.ae()}}}}],["","",,E,{"^":"",cb:{"^":"a;"},aC:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0S:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbV:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gB()
y.toString
x=H.d(this.gcW(),{func:1,ret:-1,args:[D.u]})
C.a.F(y.a,x)}y=this.c
if(y!=null){y=y.gB()
y.toString
x=H.d(this.gcW(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}w=new D.L("shape",z,this.c,this,[F.dJ])
w.b=!0
this.a_(w)}},
saD:function(a){var z,y,x,w
if(!J.N(this.r,a)){z=this.r
if(z!=null){y=z.gB()
y.toString
x=H.d(this.gcV(),{func:1,ret:-1,args:[D.u]})
C.a.F(y.a,x)}if(a!=null){y=a.gB()
y.toString
x=H.d(this.gcV(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}this.r=a
w=new D.L("mover",z,a,this,[U.bD])
w.b=!0
this.a_(w)}},
b8:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.c
z.sd5(z.a+z.d*b.y)
z.scX(0,z.b+z.e*b.y)
z.sd0(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.an(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.m(0,V.an(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.m(0,V.an(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.a5(0)}u=z.x}else u=null
if(!J.N(u,this.x)){t=this.x
this.x=u
s=new D.L("matrix",t,u,this,[V.ah])
s.b=!0
this.a_(s)}for(z=this.y.a,z=new J.am(z,z.length,0,[H.y(z,0)]);z.D();)z.d.b8(0,b)},
au:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gM(z))
else C.a.h(z.a,y.m(0,z.gM(z)))
z.ae()
a.d_(this.f)
z=a.dy
x=(z&&C.a).gbI(z)
if(x!=null&&this.d!=null)x.fG(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.y(z,0)]);z.D();)z.d.au(a)
a.cY()
a.dx.bO()},
a_:function(a){var z=this.z
if(!(z==null))z.G(a)},
P:function(){return this.a_(null)},
fq:[function(a){H.k(a,"$isu")
this.e=null
this.a_(a)},function(){return this.fq(null)},"hu","$1","$0","gcW",0,2,0],
fp:[function(a){this.a_(H.k(a,"$isu"))},function(){return this.fp(null)},"ht","$1","$0","gcV",0,2,0],
fn:[function(a){this.a_(H.k(a,"$isu"))},function(){return this.fn(null)},"hr","$1","$0","gcU",0,2,0],
hq:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aC],"$asi")
for(z=b.length,y=this.gcU(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gS()==null){t=new D.aJ()
t.a=H.c([],w)
t.c=0
u.sS(t)}t=u.gS()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.P()},"$2","gfm",8,0,7],
hs:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aC],"$asi")
for(z=b.length,y=this.gcU(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gS()==null){t=new D.aJ()
t.a=H.c([],w)
t.c=0
u.sS(t)}t=u.gS()
t.toString
H.d(y,x)
C.a.F(t.a,y)}}this.P()},"$2","gfo",8,0,7],
$isao:1},hh:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dk:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aB(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cv()
y=[V.ah]
z.a=H.c([],y)
x=z.gB()
x.toString
w={func:1,ret:-1,args:[D.u]}
v=H.d(new E.hj(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cv()
z.a=H.c([],y)
v=z.gB()
v.toString
x=H.d(new E.hk(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cv()
z.a=H.c([],y)
y=z.gB()
y.toString
w=H.d(new E.hl(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.cD])
this.dy=z
C.a.h(z,null)
this.fr=new H.cq(0,0,[P.n,A.dI])},
gfC:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gM(z)
y=this.db
y=z.m(0,y.gM(y))
this.z=y
z=y}return z},
d_:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbI(z):a;(z&&C.a).h(z,y)},
cY:function(){var z=this.dy
if(z.length>1)z.pop()},
u:{
hi:function(a,b){var z=new E.hh(a,b)
z.dk(a,b)
return z}}},hj:{"^":"r:10;a",
$1:function(a){var z
H.k(a,"$isu")
z=this.a
z.z=null
z.ch=null}},hk:{"^":"r:10;a",
$1:function(a){var z
H.k(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hl:{"^":"r:10;a",
$1:function(a){var z
H.k(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},hH:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0S:x@,0y,0z,0Q,0ch",
dq:[function(a){var z
H.k(a,"$isu")
z=this.x
if(!(z==null))z.G(a)
this.fH()},function(){return this.dq(null)},"dn","$1","$0","gc0",0,2,0],
gfc:function(){var z,y,x
z=Date.now()
y=C.f.T(P.dl(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aB(z,!1)
return x/y},
ci:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.m()
if(typeof z!=="number")return H.z(z)
x=C.j.bH(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.m()
w=C.j.bH(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
fH:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.hJ(this),{func:1,ret:-1,args:[P.P]})
C.r.dK(z)
C.r.ei(z,W.ez(y,P.P))}},
fF:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.ci()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aB(w,!1)
x.y=P.dl(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.ae()
w=x.db
C.a.sk(w.a,0)
w.ae()
w=x.dx
C.a.sk(w.a,0)
w.ae()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.au(this.e)}}catch(v){z=H.aH(v)
y=H.aY(v)
P.d_("Error: "+H.h(z))
P.d_("Stack: "+H.h(y))
throw H.j(z)}},
u:{
hI:function(a,b,c,d,e){var z,y,x,w
z=J.H(a)
if(!!z.$isce)return E.dR(a,!0,!0,!0,!1)
y=W.cf(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcr(a).h(0,y)
w=E.dR(y,!0,!0,!0,!1)
w.a=a
return w},
dR:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hH()
y=P.fD(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.b9(a,"webgl",y)
x=H.k(x==null?C.k.b9(a,"experimental-webgl",y):x,"$iscA")
if(x==null)H.o(P.p("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hi(x,a)
w=new T.hC(x)
w.b=H.W(x.getParameter(3379))
w.c=H.W(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.i1(a)
v=new X.fw()
v.c=new X.ba(!1,!1,!1)
v.d=P.fE(null,null,null,P.M)
w.b=v
v=new X.fY(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fI(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.hM(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.dM,P.a]])
w.z=v
u=document
t=W.ai
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.U(u,"contextmenu",H.d(w.gdX(),s),!1,t))
v=w.z
r=W.a2
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.U(a,"focus",H.d(w.ge_(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.U(a,"blur",H.d(w.gdU(),q),!1,r))
v=w.z
p=W.b8
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.U(u,"keyup",H.d(w.ge1(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.U(u,"keydown",H.d(w.ge0(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.U(a,"mousedown",H.d(w.ge4(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mouseup",H.d(w.ge6(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mousemove",H.d(w.ge5(),s),!1,t))
p=w.z
o=W.bo;(p&&C.a).h(p,W.U(a,H.Q(W.ff(a)),H.d(w.ge7(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.U(u,"mousemove",H.d(w.gdY(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.U(u,"mouseup",H.d(w.gdZ(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.U(u,"pointerlockchange",H.d(w.ge8(),q),!1,r))
r=w.z
q=W.aO
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.U(a,"touchstart",H.d(w.gee(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchend",H.d(w.gec(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchmove",H.d(w.ged(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aB(Date.now(),!1)
z.ch=0
z.ci()
return z}}},hJ:{"^":"r:20;a",
$1:function(a){var z
H.k5(a)
z=this.a
if(z.z){z.z=!1
z.fF()}}}}],["","",,Z,{"^":"",ed:{"^":"a;a,b",u:{
cK:function(a,b,c){var z
H.w(c,"$isb",[P.M],"$asb")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bs(c)),35044)
a.bindBuffer(b,null)
return new Z.ed(b,z)}}},d6:{"^":"cb;a,b,c,d,e",
bt:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aH(y)
x=P.p('Failed to bind buffer attribute "'+J.a1(this.a)+'": '+H.h(z))
throw H.j(x)}},
i:function(a){return"["+J.a1(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}},id:{"^":"a;a",$iskp:1},d7:{"^":"a;a,0b,c,d",
as:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bt:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bt(a)},
fT:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
au:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.f(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.n]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a1(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.R(y,", ")+"\nAttrs:   "+C.a.R(u,", ")},
$islG:1},bZ:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aM(this.c)+"'")+"]"}},aP:{"^":"a;a",
gbW:function(a){var z,y
z=this.a
y=(z&$.$get$au().a)!==0?3:0
if((z&$.$get$at().a)!==0)y+=3
if((z&$.$get$as().a)!==0)y+=3
if((z&$.$get$av().a)!==0)y+=2
if((z&$.$get$aw().a)!==0)y+=3
if((z&$.$get$bm().a)!==0)y+=3
if((z&$.$get$bn().a)!==0)y+=4
if((z&$.$get$aQ().a)!==0)++y
return(z&$.$get$ar().a)!==0?y+4:y},
eY:function(a){var z,y,x
z=$.$get$au()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$at()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$as()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$av()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bn()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ar()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ec()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aP))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$au().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$at().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$as().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$av().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aw().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bm().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bn().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$ar().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.R(z,"|")},
u:{
aa:function(a){return new Z.aP(a)}}}}],["","",,D,{"^":"",eZ:{"^":"a;"},aJ:{"^":"a;0a,0b,0c",
G:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.H(y,new D.fi(z))
return x!==0},
f9:function(){return this.G(null)},
fI:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.G(y)}}},
a5:function(a){return this.fI(a,!0,!1)},
u:{
ac:function(){var z=new D.aJ()
z.a=H.c([],[{func:1,ret:-1,args:[D.u]}])
z.c=0
return z}}},fi:{"^":"r:21;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"a;a,0b"},cj:{"^":"u;c,d,a,0b,$ti"},ck:{"^":"u;c,d,a,0b,$ti"},L:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}}],["","",,X,{"^":"",d8:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)},
u:{"^":"kq<"}},dt:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}},fv:{"^":"u;c,a,0b"},fw:{"^":"a;0a,0b,0c,0d",
fz:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.fv(a,this)
y.b=!0
return z.G(y)},
ft:function(a){this.c=a.b
this.d.F(0,a.a)
return!1}},fI:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aN:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aB(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.m()
v=b.b
u=this.ch
if(typeof v!=="number")return v.m()
t=new V.T(y.a+x*w,y.b+v*u)
u=this.a.gby()
s=new X.dy(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bN:function(a,b){this.r=a.a
return!1},
aF:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dd()
if(typeof z!=="number")return z.d6()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.aN(a,b))
return!0},
aE:function(a,b){return!1},
fA:function(a){return!1},
e3:function(a,b,c){return}},ba:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ba))return!1
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
return z+(this.c?"Shift+":"")}},dy:{"^":"dD;x,y,z,Q,ch,c,d,e,a,0b"},fY:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
dN:function(a,b,c){var z,y,x
z=new P.aB(Date.now(),!1)
y=this.a.gby()
x=new X.dy(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bN:function(a,b){this.f=a.a
return!1},
aF:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dd()
if(typeof z!=="number")return z.d6()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.dN(a,b,!0))
return!0},
aE:function(a,b){return!1},
fB:function(a,b){return!1}},dD:{"^":"u;"},hL:{"^":"dD;x,y,z,Q,ch,c,d,e,a,0b"},hM:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aN:function(a,b){var z,y,x,w
H.w(a,"$isb",[V.T],"$asb")
z=new P.aB(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gby()
w=new X.hL(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fw:function(a){var z
H.w(a,"$isb",[V.T],"$asb")
z=this.b
if(z==null)return!1
z.G(this.aN(a,!0))
return!0},
fu:function(a){var z
H.w(a,"$isb",[V.T],"$asb")
z=this.c
if(z==null)return!1
z.G(this.aN(a,!0))
return!0},
fv:function(a){H.w(a,"$isb",[V.T],"$asb")
return!1}},i1:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gby:function(){var z=this.a
return V.dG(0,0,(z&&C.k).gaT(z).c,C.k.gaT(z).d)},
ca:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dt(z,new X.ba(y,a.altKey,a.shiftKey))},
al:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ba(y,a.altKey,a.shiftKey)},
bp:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ba(y,a.altKey,a.shiftKey)},
a9:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.a2()
v=z.top
if(typeof x!=="number")return x.a2()
return new V.T(y-w,x-v)},
ay:function(a){return new V.bI(a.movementX,a.movementY)},
bj:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.j.a0(u.pageX)
C.j.a0(u.pageY)
s=z.left
C.j.a0(u.pageX)
C.a.h(y,new V.T(t-s,C.j.a0(u.pageY)-z.top))}return y},
a7:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.d8(z,new X.ba(y,a.altKey,a.shiftKey))},
h7:[function(a){this.f=!0},"$1","ge_",4,0,3],
h1:[function(a){this.f=!1},"$1","gdU",4,0,3],
h4:[function(a){if(this.f)a.preventDefault()},"$1","gdX",4,0,3],
h9:[function(a){var z
H.k(a,"$isb8")
if(!this.f)return
z=this.ca(a)
if(this.b.fz(z))a.preventDefault()},"$1","ge1",4,0,18],
h8:[function(a){var z
H.k(a,"$isb8")
if(!this.f)return
z=this.ca(a)
this.b.ft(z)},"$1","ge0",4,0,18],
hb:[function(a){var z,y,x,w
H.k(a,"$isai")
z=this.a
z.focus()
this.f=!0
this.al(a)
if(this.x){y=this.a7(a)
x=this.ay(a)
if(this.d.bN(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a7(a)
w=this.a9(a)
if(this.c.bN(y,w))a.preventDefault()},"$1","ge4",4,0,4],
hd:[function(a){var z,y,x
H.k(a,"$isai")
this.al(a)
z=this.a7(a)
if(this.x){y=this.ay(a)
if(this.d.aF(z,y))a.preventDefault()
return}if(this.r)return
x=this.a9(a)
if(this.c.aF(z,x))a.preventDefault()},"$1","ge6",4,0,4],
h6:[function(a){var z,y,x,w
H.k(a,"$isai")
z=this.a
if(!(z&&C.k).gaT(z).cs(0,new P.bF(a.clientX,a.clientY,[P.P]))){this.al(a)
y=this.a7(a)
if(this.x){x=this.ay(a)
if(this.d.aF(y,x))a.preventDefault()
return}if(this.r)return
w=this.a9(a)
if(this.c.aF(y,w))a.preventDefault()}},"$1","gdZ",4,0,4],
hc:[function(a){var z,y,x
H.k(a,"$isai")
this.al(a)
z=this.a7(a)
if(this.x){y=this.ay(a)
if(this.d.aE(z,y))a.preventDefault()
return}if(this.r)return
x=this.a9(a)
if(this.c.aE(z,x))a.preventDefault()},"$1","ge5",4,0,4],
h5:[function(a){var z,y,x,w
H.k(a,"$isai")
z=this.a
if(!(z&&C.k).gaT(z).cs(0,new P.bF(a.clientX,a.clientY,[P.P]))){this.al(a)
y=this.a7(a)
if(this.x){x=this.ay(a)
if(this.d.aE(y,x))a.preventDefault()
return}if(this.r)return
w=this.a9(a)
if(this.c.aE(y,w))a.preventDefault()}},"$1","gdY",4,0,4],
he:[function(a){var z,y
H.k(a,"$isbo")
this.al(a)
z=new V.bI((a&&C.q).gf6(a),C.q.gf7(a)).E(0,180)
if(this.x){if(this.d.fA(z))a.preventDefault()
return}if(this.r)return
y=this.a9(a)
if(this.c.fB(z,y))a.preventDefault()},"$1","ge7",4,0,24],
hf:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a7(this.y)
v=this.a9(this.y)
this.d.e3(w,v,x)}},"$1","ge8",4,0,3],
hk:[function(a){var z
H.k(a,"$isaO")
this.a.focus()
this.f=!0
this.bp(a)
z=this.bj(a)
if(this.e.fw(z))a.preventDefault()},"$1","gee",4,0,9],
hi:[function(a){var z
H.k(a,"$isaO")
this.bp(a)
z=this.bj(a)
if(this.e.fu(z))a.preventDefault()},"$1","gec",4,0,9],
hj:[function(a){var z
H.k(a,"$isaO")
this.bp(a)
z=this.bj(a)
if(this.e.fv(z))a.preventDefault()},"$1","ged",4,0,9]}}],["","",,D,{"^":"",bV:{"^":"a;0a,0b,0c,0d",
af:[function(a){var z
H.k(a,"$isu")
z=this.d
if(!(z==null))z.G(a)},function(){return this.af(null)},"fV","$1","$0","gdr",0,2,0],
$isS:1,
$isao:1},S:{"^":"a;",$isao:1},fx:{"^":"aI;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
af:function(a){var z=this.Q
if(!(z==null))z.G(a)},
e2:[function(a){var z
H.k(a,"$isu")
z=this.ch
if(!(z==null))z.G(a)},function(){return this.e2(null)},"ha","$1","$0","gce",0,2,0],
hg:[function(a){var z,y,x
H.w(a,"$isi",[D.S],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.dF(x))return!1}return!0},"$1","gea",4,0,26],
fZ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.S
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gce(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isS")
if(t instanceof D.bV)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aJ()
s.a=H.c([],v)
s.c=0
t.d=s}H.d(x,w)
C.a.h(s.a,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.af(z)},"$2","gdR",8,0,15],
hh:[function(a,b){var z,y,x,w,v,u,t,s
z=D.S
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gce(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isS")
if(t instanceof D.bV)C.a.F(this.e,t)
s=t.d
if(s==null){s=new D.aJ()
s.a=H.c([],v)
s.c=0
t.d=s}H.d(x,w)
C.a.F(s.a,x)}z=new D.ck(a,b,this,[z])
z.b=!0
this.af(z)},"$2","geb",8,0,15],
dF:function(a){var z=C.a.az(this.e,a)
return z},
$asi:function(){return[D.S]},
$asaI:function(){return[D.S]}},h7:{"^":"a;",$isS:1,$isao:1},hv:{"^":"a;",$isS:1,$isao:1},hE:{"^":"a;",$isS:1,$isao:1},hF:{"^":"a;",$isS:1,$isao:1},hG:{"^":"a;",$isS:1,$isao:1}}],["","",,V,{"^":"",
ks:[function(a,b){if(typeof b!=="number")return b.a2()
if(typeof a!=="number")return H.z(a)
return Math.abs(b-a)<=1e-9},"$2","fV",8,0,23],
d0:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.dc(a-b,z)
return(a<0?a+z:a)+b},
C:function(a,b,c){if(a==null)return C.h.X("null",c)
return C.h.X(C.j.d4($.l.$2(a,0)?0:a,b),c+b+1)},
aW:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isb",[P.t],"$asb")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.C(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.U(z,u,C.h.X(z[u],x))}return z},
cZ:function(a,b){return C.j.fQ(Math.pow(b,C.w.bH(Math.log(H.jL(a))/Math.log(b))))},
Y:{"^":"a;a,b,c",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}},
bS:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bS))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+"]"}},
dw:{"^":"a;a,b,c,d,e,f,r,x,y",
Y:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dw))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
z=b.r
if(!$.l.$2(z,this.r))return!1
z=b.x
if(!$.l.$2(z,this.x))return!1
z=b.y
if(!$.l.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.aW(H.c([this.a,this.d,this.r],z),3,0)
x=V.aW(H.c([this.b,this.e,this.x],z),3,0)
w=V.aW(H.c([this.c,this.f,this.y],z),3,0)
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
ah:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
Y:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
cS:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.z(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.z(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.z(u)
t=this.c
if(typeof t!=="number")return t.m()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.z(r)
q=this.d
if(typeof q!=="number")return q.m()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.m()
if(typeof k!=="number")return H.z(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.m()
if(typeof i!=="number")return H.z(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.z(g)
f=this.Q
if(typeof f!=="number")return f.m()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.z(d)
c=this.ch
if(typeof c!=="number")return c.m()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.l.$2(a2,0))return V.cw()
a3=1/a2
a4=-w
a5=-i
return V.an((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
m:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.z(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.z(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.z(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.m()
if(typeof s!=="number")return H.z(s)
r=a7.b
if(typeof r!=="number")return H.z(r)
q=a7.f
if(typeof q!=="number")return H.z(q)
p=a7.z
if(typeof p!=="number")return H.z(p)
o=a7.cy
if(typeof o!=="number")return H.z(o)
n=a7.c
if(typeof n!=="number")return H.z(n)
m=a7.r
if(typeof m!=="number")return H.z(m)
l=a7.Q
if(typeof l!=="number")return H.z(l)
k=a7.db
if(typeof k!=="number")return H.z(k)
j=a7.d
if(typeof j!=="number")return H.z(j)
i=a7.x
if(typeof i!=="number")return H.z(i)
h=a7.ch
if(typeof h!=="number")return H.z(h)
g=a7.dx
if(typeof g!=="number")return H.z(g)
f=this.e
if(typeof f!=="number")return f.m()
e=this.f
if(typeof e!=="number")return e.m()
d=this.r
if(typeof d!=="number")return d.m()
c=this.x
if(typeof c!=="number")return c.m()
b=this.y
if(typeof b!=="number")return b.m()
a=this.z
if(typeof a!=="number")return a.m()
a0=this.Q
if(typeof a0!=="number")return a0.m()
a1=this.ch
if(typeof a1!=="number")return a1.m()
a2=this.cx
if(typeof a2!=="number")return a2.m()
a3=this.cy
if(typeof a3!=="number")return a3.m()
a4=this.db
if(typeof a4!=="number")return a4.m()
a5=this.dx
if(typeof a5!=="number")return a5.m()
return V.an(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
bS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.m()
x=this.b
w=a.b
if(typeof x!=="number")return x.m()
v=this.c
u=a.c
if(typeof v!=="number")return v.m()
t=this.e
if(typeof t!=="number")return t.m()
s=this.f
if(typeof s!=="number")return s.m()
r=this.r
if(typeof r!=="number")return r.m()
q=this.y
if(typeof q!=="number")return q.m()
p=this.z
if(typeof p!=="number")return p.m()
o=this.Q
if(typeof o!=="number")return o.m()
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.m()
x=this.b
w=a.b
if(typeof x!=="number")return x.m()
v=this.c
u=a.c
if(typeof v!=="number")return v.m()
t=this.d
if(typeof t!=="number")return H.z(t)
s=this.e
if(typeof s!=="number")return s.m()
r=this.f
if(typeof r!=="number")return r.m()
q=this.r
if(typeof q!=="number")return q.m()
p=this.x
if(typeof p!=="number")return H.z(p)
o=this.y
if(typeof o!=="number")return o.m()
n=this.z
if(typeof n!=="number")return n.m()
m=this.Q
if(typeof m!=="number")return m.m()
l=this.ch
if(typeof l!=="number")return H.z(l)
return new V.ap(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
z=b.r
if(!$.l.$2(z,this.r))return!1
z=b.x
if(!$.l.$2(z,this.x))return!1
z=b.y
if(!$.l.$2(z,this.y))return!1
z=b.z
if(!$.l.$2(z,this.z))return!1
z=b.Q
if(!$.l.$2(z,this.Q))return!1
z=b.ch
if(!$.l.$2(z,this.ch))return!1
z=b.cx
if(!$.l.$2(z,this.cx))return!1
z=b.cy
if(!$.l.$2(z,this.cy))return!1
z=b.db
if(!$.l.$2(z,this.db))return!1
z=b.dx
if(!$.l.$2(z,this.dx))return!1
return!0},
i:function(a){return this.C()},
cQ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.aW(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.aW(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.aW(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.aW(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
C:function(){return this.cQ("",3,0)},
v:function(a){return this.cQ(a,3,0)},
u:{
an:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cw:function(){return V.an(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dx:function(a,b,c){var z,y,x,w,v
z=c.E(0,Math.sqrt(c.I(c)))
y=b.aA(z)
x=y.E(0,Math.sqrt(y.I(y)))
w=z.aA(x)
v=new V.G(a.a,a.b,a.c)
return V.an(x.a,w.a,z.a,x.aw(0).I(v),x.b,w.b,z.b,w.aw(0).I(v),x.c,w.c,z.c,z.aw(0).I(v),0,0,0,1)}}},
T:{"^":"a;n:a>,p:b>",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}},
ap:{"^":"a;n:a>,p:b>,c",
a2:function(a,b){return new V.ap(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}},
dC:{"^":"a;n:a>,p:b>,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dC))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+"]"}},
dF:{"^":"a;n:a>,p:b>,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dF))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+"]"},
u:{
dG:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dF(a,b,c,d)}}},
bI:{"^":"a;a,b",
fg:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
return Math.sqrt(z*z+y*y)},"$0","gk",1,0,14],
E:function(a,b){var z,y
if($.l.$2(b,0))return new V.bI(0,0)
z=this.a
if(typeof z!=="number")return z.E()
y=this.b
if(typeof y!=="number")return y.E()
return new V.bI(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bI))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
fg:[function(a){return Math.sqrt(this.I(this))},"$0","gk",1,0,14],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bJ:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aA:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
A:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
aw:function(a){return new V.G(-this.a,-this.b,-this.c)},
E:function(a,b){if($.l.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
cT:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}}],["","",,U,{"^":"",dc:{"^":"bD;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.ac()
this.b=z}return z},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dc))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
u:{
dd:function(a){var z=new U.dc()
z.a=a
return z}}},bD:{"^":"eZ;"},dH:{"^":"bD;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.ac()
this.y=z}return z},
aj:function(a){var z=this.y
if(!(z==null))z.G(a)},
sd5:function(a){var z,y
a=V.d0(a,0,6.283185307179586)
z=this.a
if(!$.l.$2(z,a)){y=this.a
this.a=a
z=new D.L("yaw",y,a,this,[P.t])
z.b=!0
this.aj(z)}},
scX:function(a,b){var z,y
b=V.d0(b,0,6.283185307179586)
z=this.b
if(!$.l.$2(z,b)){y=this.b
this.b=b
z=new D.L("pitch",y,b,this,[P.t])
z.b=!0
this.aj(z)}},
sd0:function(a){var z,y
a=V.d0(a,0,6.283185307179586)
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
z=new D.L("roll",y,a,this,[P.t])
z.b=!0
this.aj(z)}},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dH))return!1
z=this.a
y=b.a
if(!$.l.$2(z,y))return!1
z=this.b
y=b.b
if(!$.l.$2(z,y))return!1
z=this.c
y=b.c
if(!$.l.$2(z,y))return!1
z=this.d
y=b.d
if(!$.l.$2(z,y))return!1
z=this.e
y=b.e
if(!$.l.$2(z,y))return!1
z=this.f
y=b.f
if(!$.l.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"], ["+V.C(this.d,3,0)+", "+V.C(this.e,3,0)+", "+V.C(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fg:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ag:[function(a){var z
H.k(a,"$isu")
z=this.x
if(!(z==null))z.G(a)},function(){return this.ag(null)},"fW","$1","$0","ga3",0,2,0],
h2:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aC
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga3(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gS()==null){s=new D.aJ()
s.a=H.c([],v)
s.c=0
t.sS(s)}s=t.gS()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.ag(z)},"$2","gdV",8,0,7],
h3:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aC
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga3(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gS()==null){s=new D.aJ()
s.a=H.c([],v)
s.c=0
t.sS(s)}s=t.gS()
s.toString
H.d(x,w)
C.a.F(s.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.ag(z)},"$2","gdW",8,0,7],
sd2:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.d(this.ga3(),{func:1,ret:-1,args:[D.u]})
C.a.F(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gB()
z.toString
y=H.d(this.ga3(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.L("technique",x,this.c,this,[O.cD])
z.b=!0
this.ag(z)}},
gB:function(){var z=this.x
if(z==null){z=D.ac()
this.x=z}return z},
au:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.d_(this.c)
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
if(typeof x!=="number")return H.z(x)
u=C.f.a0(v.a*x)
if(typeof w!=="number")return H.z(w)
t=C.f.a0(v.b*w)
s=C.f.a0(v.c*x)
a.c=s
v=C.f.a0(v.d*w)
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
s.cZ(V.an(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dB
if(y==null){y=V.dx(new V.ap(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.dB=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.m(0,m)}a.db.cZ(m)
z=this.c
if(z!=null)z.b8(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.y(z,0)]);z.D();)z.d.b8(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.y(z,0)]);z.D();)z.d.au(a)
this.a.toString
a.cy.bO()
a.db.bO()
this.b.toString
a.cY()},
$isly:1}}],["","",,A,{"^":"",d3:{"^":"a;a,b,c"},eT:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fa:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
f8:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},fP:{"^":"dI;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aq,0ac,0ar,0aU,0cu,0cv,0aV,0aW,0cw,0cz,0aX,0aY,0cA,0cB,0aZ,0cC,0cD,0b_,0cE,0cF,0b0,0b1,0b2,0cG,0cH,0b3,0b4,0cI,0cJ,0b5,0cK,0bB,0cL,0bC,0cM,0bD,0cN,0bE,0cO,0bF,0cP,0bG,a,b,0c,0d,0e,0f,0r",
dj:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.bG("")
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
a2.eC(z)
a2.eJ(z)
a2.eD(z)
a2.eR(z)
a2.eS(z)
a2.eL(z)
a2.eW(z)
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
z=new P.bG("")
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
v.eG(z)
v.eB(z)
v.eE(z)
v.eH(z)
v.eP(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.eN(z)
v.eO(z)}v.eK(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.e){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.c){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.d){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.b:r+="   return 1.0;\n"
z.a=r
break
case C.e:r+="   return alpha;\n"
z.a=r
break
case C.c:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.n])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.R(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.eF(z)
v.eM(z)
v.eQ(z)
v.eT(z)
v.eU(z)
v.eV(z)
v.eI(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.n])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(v.c!==C.b)z.a+="   setDiffuseColor();\n"
if(v.d!==C.b)z.a+="   setInvDiffuseColor();\n"
if(v.e!==C.b)z.a+="   setSpecularColor();\n"
if(v.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(v.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(v.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(v.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(v.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(v.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(v.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(v.a!==C.b)C.a.h(o,"emission()")
if(v.r!==C.b)C.a.h(o,"reflect(refl)")
if(v.x!==C.b)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.R(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cb(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cb(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.eD(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.o(P.p("Failed to link shader: "+H.h(m)))}this.ew()
this.ex()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.e(this.r.l(0,"invViewMat"),"$isaq")
if(y)this.db=H.e(this.r.l(0,"objMat"),"$isaq")
if(w)this.dx=H.e(this.r.l(0,"viewObjMat"),"$isaq")
this.fr=H.e(this.r.l(0,"projViewObjMat"),"$isaq")
if(a2.x2)this.go=H.e(this.r.l(0,"txt2DMat"),"$iscH")
if(a2.y1)this.id=H.e(this.r.l(0,"txtCubeMat"),"$isaq")
if(a2.y2)this.k1=H.e(this.r.l(0,"colorMat"),"$isaq")
this.k3=H.c([],[A.aq])
y=a2.aq
if(y>0){this.k2=H.k(this.r.l(0,"bendMatCount"),"$isE")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.o(P.p("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(k,"$isaq"))}}y=a2.a
if(y!==C.b){this.k4=H.e(this.r.l(0,"emissionClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.r1=H.e(this.r.l(0,"emissionTxt"),"$isa7")
this.rx=H.e(this.r.l(0,"nullEmissionTxt"),"$isE")
break
case C.d:this.r2=H.e(this.r.l(0,"emissionTxt"),"$isa8")
this.rx=H.e(this.r.l(0,"nullEmissionTxt"),"$isE")
break}}y=a2.b
if(y!==C.b){this.ry=H.e(this.r.l(0,"ambientClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.x1=H.e(this.r.l(0,"ambientTxt"),"$isa7")
this.y1=H.e(this.r.l(0,"nullAmbientTxt"),"$isE")
break
case C.d:this.x2=H.e(this.r.l(0,"ambientTxt"),"$isa8")
this.y1=H.e(this.r.l(0,"nullAmbientTxt"),"$isE")
break}}y=a2.c
if(y!==C.b){this.y2=H.e(this.r.l(0,"diffuseClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.aq=H.e(this.r.l(0,"diffuseTxt"),"$isa7")
this.ar=H.e(this.r.l(0,"nullDiffuseTxt"),"$isE")
break
case C.d:this.ac=H.e(this.r.l(0,"diffuseTxt"),"$isa8")
this.ar=H.e(this.r.l(0,"nullDiffuseTxt"),"$isE")
break}}y=a2.d
if(y!==C.b){this.aU=H.e(this.r.l(0,"invDiffuseClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.cu=H.e(this.r.l(0,"invDiffuseTxt"),"$isa7")
this.aV=H.e(this.r.l(0,"nullInvDiffuseTxt"),"$isE")
break
case C.d:this.cv=H.e(this.r.l(0,"invDiffuseTxt"),"$isa8")
this.aV=H.e(this.r.l(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a2.e
if(y!==C.b){this.aY=H.e(this.r.l(0,"shininess"),"$isR")
this.aW=H.e(this.r.l(0,"specularClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.cw=H.e(this.r.l(0,"specularTxt"),"$isa7")
this.aX=H.e(this.r.l(0,"nullSpecularTxt"),"$isE")
break
case C.d:this.cz=H.e(this.r.l(0,"specularTxt"),"$isa8")
this.aX=H.e(this.r.l(0,"nullSpecularTxt"),"$isE")
break}}switch(a2.f){case C.b:break
case C.e:break
case C.c:this.cA=H.e(this.r.l(0,"bumpTxt"),"$isa7")
this.aZ=H.e(this.r.l(0,"nullBumpTxt"),"$isE")
break
case C.d:this.cB=H.e(this.r.l(0,"bumpTxt"),"$isa8")
this.aZ=H.e(this.r.l(0,"nullBumpTxt"),"$isE")
break}if(a2.dy){this.cC=H.e(this.r.l(0,"envSampler"),"$isa8")
this.cD=H.e(this.r.l(0,"nullEnvTxt"),"$isE")
y=a2.r
if(y!==C.b){this.b_=H.e(this.r.l(0,"reflectClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.cE=H.e(this.r.l(0,"reflectTxt"),"$isa7")
this.b0=H.e(this.r.l(0,"nullReflectTxt"),"$isE")
break
case C.d:this.cF=H.e(this.r.l(0,"reflectTxt"),"$isa8")
this.b0=H.e(this.r.l(0,"nullReflectTxt"),"$isE")
break}}y=a2.x
if(y!==C.b){this.b1=H.e(this.r.l(0,"refraction"),"$isR")
this.b2=H.e(this.r.l(0,"refractClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.cG=H.e(this.r.l(0,"refractTxt"),"$isa7")
this.b3=H.e(this.r.l(0,"nullRefractTxt"),"$isE")
break
case C.d:this.cH=H.e(this.r.l(0,"refractTxt"),"$isa8")
this.b3=H.e(this.r.l(0,"nullRefractTxt"),"$isE")
break}}}y=a2.y
if(y!==C.b){this.b4=H.e(this.r.l(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.e:break
case C.c:this.cI=H.e(this.r.l(0,"alphaTxt"),"$isa7")
this.b5=H.e(this.r.l(0,"nullAlphaTxt"),"$isE")
break
case C.d:this.cJ=H.e(this.r.l(0,"alphaTxt"),"$isa8")
this.b5=H.e(this.r.l(0,"nullAlphaTxt"),"$isE")
break}}this.bB=H.c([],[A.e3])
this.bC=H.c([],[A.e4])
this.bD=H.c([],[A.e5])
this.bE=H.c([],[A.e6])
this.bF=H.c([],[A.e7])
this.bG=H.c([],[A.e8])
if(a2.k2){y=a2.z
if(y>0){this.cK=H.k(this.r.l(0,"dirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.bB;(x&&C.a).h(x,new A.e3(l,k,j))}}y=a2.Q
if(y>0){this.cL=H.k(this.r.l(0,"pntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isR")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isR")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isR")
x=this.bC;(x&&C.a).h(x,new A.e4(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.cM=H.k(this.r.l(0,"spotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isR")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isR")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isR")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isR")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isR")
x=this.bD;(x&&C.a).h(x,new A.e5(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.cN=H.k(this.r.l(0,"txtDirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isD")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isE")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isa7")
x=this.bE;(x&&C.a).h(x,new A.e6(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.cO=H.k(this.r.l(0,"txtPntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$iscH")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isE")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isR")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isR")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isR")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isa8")
x=this.bF;(x&&C.a).h(x,new A.e7(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.cP=H.k(this.r.l(0,"txtSpotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isD")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isE")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isD")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isR")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isR")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isR")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isR")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isR")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a1,"$isa7")
x=this.bG;(x&&C.a).h(x,new A.e8(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
Z:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.de(c)
b.a.uniform1i(b.d,0)}},
V:function(a,b,c){b.a.uniform1i(b.d,1)},
u:{
fO:function(a,b){var z,y
z=a.ac
y=new A.fP(b,z)
y.dl(b,z)
y.dj(a,b)
return y}}},fS:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aq,ac,ar",
eC:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aq+"];\n"
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
eJ:function(a){var z
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
eD:function(a){var z
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
eR:function(a){var z,y
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
eS:function(a){var z,y
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
eL:function(a){var z
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
eW:function(a){var z
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
a8:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.bX(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
eG:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.a8(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   return emissionClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
eB:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.a8(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   return ambientClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
eE:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.a8(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
eH:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.a8(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
eP:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.a8(a,z,"specular")
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
case C.e:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
eK:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.e:break
case C.c:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.d:z+="uniform samplerCube bumpTxt;\n"
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
case C.e:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.c:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.d:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
eN:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.a8(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
eO:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.a8(a,z,"refract")
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
case C.e:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
eF:function(a){var z,y
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
eM:function(a){var z,y
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
eQ:function(a){var z,y
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
eT:function(a){var z,y,x
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
eU:function(a){var z,y,x
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
eV:function(a){var z,y,x
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
eI:function(a){var z
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
i:function(a){return this.ac}},e3:{"^":"a;a,b,c"},e6:{"^":"a;a,b,c,d,e,f,r,x"},e4:{"^":"a;a,b,c,d,e,f,r"},e7:{"^":"a;a,b,c,d,e,f,r,x,y,z"},e5:{"^":"a;a,b,c,d,e,f,r,x,y,z"},e8:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dI:{"^":"cb;",
dl:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cb:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eD(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.j(P.p("Error compiling shader '"+H.h(y)+"': "+H.h(x)))}return y},
ew:function(){var z,y,x,w,v,u
z=H.c([],[A.d3])
y=this.a
x=H.W(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.d3(y,v.name,u))}this.f=new A.eT(z)},
ex:function(){var z,y,x,w,v,u
z=H.c([],[A.a0])
y=this.a
x=H.W(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.f5(v.type,v.size,v.name,u))}this.r=new A.hW(z)},
ai:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.E(z,y,b,c)
else return A.cG(z,y,b,a,c)},
dH:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a7(z,y,b,c)
else return A.cG(z,y,b,a,c)},
dI:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a8(z,y,b,c)
else return A.cG(z,y,b,a,c)},
aR:function(a,b){return new P.ef(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
f5:function(a,b,c,d){switch(a){case 5120:return this.ai(b,c,d)
case 5121:return this.ai(b,c,d)
case 5122:return this.ai(b,c,d)
case 5123:return this.ai(b,c,d)
case 5124:return this.ai(b,c,d)
case 5125:return this.ai(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.hR(this.a,this.e,c,d)
case 35665:return new A.D(this.a,this.e,c,d)
case 35666:return new A.hU(this.a,this.e,c,d)
case 35667:return new A.hS(this.a,this.e,c,d)
case 35668:return new A.hT(this.a,this.e,c,d)
case 35669:return new A.hV(this.a,this.e,c,d)
case 35674:return new A.hY(this.a,this.e,c,d)
case 35675:return new A.cH(this.a,this.e,c,d)
case 35676:return new A.aq(this.a,this.e,c,d)
case 35678:return this.dH(b,c,d)
case 35680:return this.dI(b,c,d)
case 35670:throw H.j(this.aR("BOOL",c))
case 35671:throw H.j(this.aR("BOOL_VEC2",c))
case 35672:throw H.j(this.aR("BOOL_VEC3",c))
case 35673:throw H.j(this.aR("BOOL_VEC4",c))
default:throw H.j(P.p("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}},bT:{"^":"a;a,b",
i:function(a){return this.b}},a0:{"^":"a;"},hW:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
l:function(a,b){var z=this.j(0,b)
if(z==null)throw H.j(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.C()},
fb:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
C:function(){return this.fb("\n")}},E:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1i: "+H.h(this.c)}},hS:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2i: "+H.h(this.c)}},hT:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3i: "+H.h(this.c)}},hV:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4i: "+H.h(this.c)}},hQ:{"^":"a0;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.h(this.c)},
u:{
cG:function(a,b,c,d,e){var z=new A.hQ(a,b,c,e)
z.f=d
z.e=P.fG(d,0,!1,P.M)
return z}}},R:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1f: "+H.h(this.c)}},hR:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2f: "+H.h(this.c)}},D:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3f: "+H.h(this.c)}},hU:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4f: "+H.h(this.c)}},hY:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}},cH:{"^":"a0;a,b,c,d",
a1:function(a){var z=new Float32Array(H.bs(H.w(a,"$isb",[P.t],"$asb")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.h(this.c)}},aq:{"^":"a0;a,b,c,d",
a1:function(a){var z=new Float32Array(H.bs(H.w(a,"$isb",[P.t],"$asb")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.h(this.c)}},a7:{"^":"a0;a,b,c,d",
de:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.h(this.c)}},a8:{"^":"a0;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}}],["","",,F,{"^":"",
c2:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
br:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
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
z.d=y}l=F.c2(y)
k=F.c2(z.b)
j=F.kf(d,e,new F.jA(z,F.c2(z.c),F.c2(z.d),k,l,c),b)
if(j!=null)a.bM(j)},
kf:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[F.al,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.dK()
y=H.c([],[F.al])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cJ(null,null,new V.bS(u,0,0,1),null,null,new V.T(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bz(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cJ(null,null,new V.bS(o,n,m,1),null,null,new V.T(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bz(d))}}z.d.eX(a+1,b+1,y)
return z},
jA:{"^":"r:29;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bJ(z.b,b).bJ(z.d.bJ(z.c,b),c)
z=new V.ap(y.a,y.b,y.c)
if(!J.N(a.f,z)){a.f=z
z=a.a
if(z!=null)z.P()}a.sfO(y.E(0,Math.sqrt(y.I(y))))
z=1-b
x=1-c
x=new V.dC(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.N(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.P()}}},
ad:{"^":"a;0a,0b,0c,0d,0e",
ab:function(){if(!this.gaB()){C.a.F(this.a.a.d.b,this)
this.a.a.P()}this.bl()
this.bm()
this.eh()},
es:function(a){this.a=a
C.a.h(a.d.b,this)},
eu:function(a){this.b=a
C.a.h(a.d.c,this)},
ev:function(a){this.c=a
C.a.h(a.d.d,this)},
bl:function(){var z=this.a
if(z!=null){C.a.F(z.d.b,this)
this.a=null}},
bm:function(){var z=this.b
if(z!=null){C.a.F(z.d.c,this)
this.b=null}},
eh:function(){var z=this.c
if(z!=null){C.a.F(z.d.d,this)
this.c=null}},
gaB:function(){return this.a==null||this.b==null||this.c==null},
dA:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.cT())return
return v.E(0,Math.sqrt(v.I(v)))},
dC:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.a2(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.E(0,Math.sqrt(z.I(z)))
z=w.a2(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aA(z.E(0,Math.sqrt(z.I(z))))
return z.E(0,Math.sqrt(z.I(z)))},
bx:function(){if(this.d!=null)return!0
var z=this.dA()
if(z==null){z=this.dC()
if(z==null)return!1}this.d=z
this.a.a.P()
return!0},
dz:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.cT())return
return v.E(0,Math.sqrt(v.I(v)))},
dB:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.a2(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.E(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.aw(0)}else{l=(z-q.b)/n
z=r.a2(0,u)
z=new V.ap(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).a2(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.E(0,Math.sqrt(z.I(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.aw(0)}z=this.d
if(z!=null){k=z.E(0,Math.sqrt(z.I(z)))
z=k.aA(m)
z=z.E(0,Math.sqrt(z.I(z))).aA(k)
m=z.E(0,Math.sqrt(z.I(z)))}return m},
bv:function(){if(this.e!=null)return!0
var z=this.dz()
if(z==null){z=this.dB()
if(z==null)return!1}this.e=z
this.a.a.P()
return!0},
gf1:function(a){if(J.N(this.a,this.b))return!0
if(J.N(this.b,this.c))return!0
if(J.N(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
v:function(a){var z,y
if(this.gaB())return a+"disposed"
z=a+C.h.X(J.a1(this.a.e),0)+", "+C.h.X(J.a1(this.b.e),0)+", "+C.h.X(J.a1(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
C:function(){return this.v("")},
u:{
bz:function(a,b,c){var z,y,x
z=new F.ad()
y=a.a
if(y==null)H.o(P.p("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.o(P.p("May not create a face with vertices attached to different shapes."))
z.es(a)
z.eu(b)
z.ev(c)
C.a.h(z.a.a.d.b,z)
z.a.a.P()
return z}}},
fj:{"^":"a;"},
hu:{"^":"fj;",
aC:function(a,b,c){var z,y
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
cs:{"^":"a;0a,0b",
ab:function(){if(!this.gaB()){C.a.F(this.a.a.c.b,this)
this.a.a.P()}this.bl()
this.bm()},
bl:function(){var z=this.a
if(z!=null){C.a.F(z.c.b,this)
this.a=null}},
bm:function(){var z=this.b
if(z!=null){C.a.F(z.c.c,this)
this.b=null}},
gaB:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
v:function(a){if(this.gaB())return a+"disposed"
return a+C.h.X(J.a1(this.a.e),0)+", "+C.h.X(J.a1(this.b.e),0)},
C:function(){return this.v("")}},
fy:{"^":"a;"},
hP:{"^":"fy;",
aC:function(a,b,c){var z,y
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
cy:{"^":"a;0a",
ab:function(){var z=this.a
if(z!=null){C.a.F(z.a.b.b,this)
this.a.a.P()}this.eg()},
eg:function(){var z=this.a
if(z!=null){C.a.F(z.b.b,this)
this.a=null}},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.X(J.a1(z.e),0)},
C:function(){return this.v("")}},
dJ:{"^":"a;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.ac()
this.e=z}return z},
bM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.t()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.f4())}this.a.t()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cy()
if(r.a==null)H.o(P.p("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.G(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cs()
s=p.a
if(s==null)H.o(P.p("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.o(P.p("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.G(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bz(p,o,l)}z=this.e
if(!(z==null))z.a5(0)},
am:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.am()||!1
if(!this.a.am())y=!1
z=this.e
if(!(z==null))z.a5(0)
return y},
dL:function(a,b,c,d,e){var z,y,x
H.w(d,"$isb",[F.al],"$asb")
H.w(e,"$isb",[P.M],"$asb")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
if(a.aC(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fl:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.al],x=[P.M];y>=0;--y){w=this.a.c
if(y>=w.length)return H.f(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.dL(a,v,y,u,t))b.bM(u)}this.a.t()
this.c.bP()
this.d.bP()
this.b.fE()
this.c.bQ(new F.hP())
this.d.bQ(new F.hu())
z=this.e
if(!(z==null))z.a5(0)},
f_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$au()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$at().a)!==0)++w
if((x&$.$get$as().a)!==0)++w
if((x&$.$get$av().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
if((x&$.$get$bm().a)!==0)++w
if((x&$.$get$bn().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$ar().a)!==0)++w
v=b.gbW(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.d6])
for(r=0,q=0;q<w;++q){p=b.eY(q)
o=p.gbW(p)
C.a.U(s,q,new Z.d6(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].fh(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.U(t,l,m[k]);++l}}r+=o}H.w(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bs(t)),35044)
y.bindBuffer(34962,null)
i=new Z.d7(new Z.ed(34962,j),s,b)
i.b=H.c([],[Z.bZ])
if(this.b.b.length!==0){x=P.M
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)}f=Z.cK(y,34963,H.w(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bZ(0,h.length,f))}if(this.c.b.length!==0){x=P.M
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)}f=Z.cK(y,34963,H.w(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bZ(1,h.length,f))}if(this.d.b.length!==0){x=P.M
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.t()
C.a.h(h,g.e)}f=Z.cK(y,34963,H.w(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bZ(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.R(z,"\n")},
a_:function(a){var z=this.e
if(!(z==null))z.G(a)},
P:function(){return this.a_(null)},
u:{
dK:function(){var z,y
z=new F.dJ()
y=new F.i2(z)
y.b=!1
y.c=H.c([],[F.al])
z.a=y
y=new F.ht(z)
y.b=H.c([],[F.cy])
z.b=y
y=new F.hs(z)
y.b=H.c([],[F.cs])
z.c=y
y=new F.hr(z)
y.b=H.c([],[F.ad])
z.d=y
z.e=null
return z}}},
hr:{"^":"a;a,0b",
eX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isb",[F.al],"$asb")
z=H.c([],[F.ad])
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
C.a.h(z,F.bz(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bz(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bz(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bz(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
bQ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aC(0,v,t)){v.ab()
break}}}}},
bP:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gf1(x)
if(y)x.ab()}},
am:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bx())x=!1
return x},
bw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bv())x=!1
return x},
i:function(a){return this.C()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.R(z,"\n")},
C:function(){return this.v("")}},
hs:{"^":"a;a,0b",
gk:function(a){return this.b.length},
bQ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aC(0,v,t)){v.ab()
break}}}}},
bP:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.N(x.a,x.b)
if(y)x.ab()}},
i:function(a){return this.C()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.R(z,"\n")},
C:function(){return this.v("")}},
ht:{"^":"a;a,0b",
gk:function(a){return this.b.length},
fE:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ab()}},
i:function(a){return this.C()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.R(z,"\n")},
C:function(){return this.v("")}},
al:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bz:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cJ(this.cx,x,u,z,y,w,v,a,t)},
f4:function(){return this.bz(null)},
sfO:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.P()}},
fh:function(a){var z,y
z=J.H(a)
if(z.q(a,$.$get$au())){z=this.f
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$at())){z=this.r
y=[P.t]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$as())){z=this.x
y=[P.t]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$av())){z=this.y
y=[P.t]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.q(a,$.$get$aw())){z=this.z
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bm())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bn())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$aQ()))return H.c([this.ch],[P.t])
else if(z.q(a,$.$get$ar())){z=this.cx
y=[P.t]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.t])},
bx:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.H(0,new F.ic(z))
z=z.a
this.r=z.E(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.P()
z=this.a.e
if(!(z==null))z.a5(0)}return!0},
bv:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.H(0,new F.ib(z))
z=z.a
this.x=z.E(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.P()
z=this.a.e
if(!(z==null))z.a5(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
v:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.h.X(J.a1(this.e),0))
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
C.a.h(z,V.C(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.R(z,", ")
return a+"{"+x+"}"},
C:function(){return this.v("")},
u:{
cJ:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.al()
y=new F.ia(z)
y.b=H.c([],[F.cy])
z.b=y
y=new F.i6(z)
x=[F.cs]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.i3(z)
x=[F.ad]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$ea()
z.e=0
y=$.$get$au()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$at().a)!==0?e:null
z.x=(x&$.$get$as().a)!==0?b:null
z.y=(x&$.$get$av().a)!==0?f:null
z.z=(x&$.$get$aw().a)!==0?g:null
z.Q=(x&$.$get$eb().a)!==0?c:null
z.ch=(x&$.$get$aQ().a)!==0?i:0
z.cx=(x&$.$get$ar().a)!==0?a:null
return z}}},
ic:{"^":"r:5;a",
$1:function(a){var z,y
H.k(a,"$isad")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
ib:{"^":"r:5;a",
$1:function(a){var z,y
H.k(a,"$isad")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
i2:{"^":"a;a,0b,0c",
t:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.j(P.p("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.P()
return!0},
gk:function(a){return this.c.length},
am:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bx()
return!0},
bw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bv()
return!0},
f0:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.E(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}}return!0},
i:function(a){return this.C()},
v:function(a){var z,y,x,w
this.t()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.R(z,"\n")},
C:function(){return this.v("")}},
i3:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
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
H:function(a,b){H.d(b,{func:1,ret:-1,args:[F.ad]})
C.a.H(this.b,b)
C.a.H(this.c,new F.i4(this,b))
C.a.H(this.d,new F.i5(this,b))},
i:function(a){return this.C()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.R(z,"\n")},
C:function(){return this.v("")}},
i4:{"^":"r:5;a,b",
$1:function(a){H.k(a,"$isad")
if(!J.N(a.a,this.a))this.b.$1(a)}},
i5:{"^":"r:5;a,b",
$1:function(a){var z
H.k(a,"$isad")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
i6:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.C()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.R(z,"\n")},
C:function(){return this.v("")}},
i8:{"^":"a;"},
i7:{"^":"i8;",
aC:function(a,b,c){return J.N(b.f,c.f)}},
i9:{"^":"a;"},
h1:{"^":"i9;",
bM:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isb",[F.al],"$asb")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.E(0,Math.sqrt(z.I(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){t=a[x]
s=z.E(0,Math.sqrt(u))
if(!J.N(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.G(null)}}}return}},
ia:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.C()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.R(z,"\n")},
C:function(){return this.v("")}}}],["","",,O,{"^":"",fN:{"^":"cD;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.ac()
this.dy=z}return z},
N:[function(a){var z
H.k(a,"$isu")
z=this.dy
if(!(z==null))z.G(a)},function(){return this.N(null)},"ds","$1","$0","gaM",0,2,0],
ek:[function(a){H.k(a,"$isu")
this.a=null
this.N(a)},function(){return this.ek(null)},"hl","$1","$0","gej",0,2,0],
h_:[function(a,b){var z=V.ah
z=new D.cj(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.N(z)},"$2","gdS",8,0,12],
h0:[function(a,b){var z=V.ah
z=new D.ck(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.N(z)},"$2","gdT",8,0,12],
c9:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.T(z.e.length+3,4)*4
x=C.f.T(z.f.length+3,4)*4
w=C.f.T(z.r.length+3,4)*4
v=C.f.T(z.x.length+3,4)*4
u=C.f.T(z.y.length+3,4)*4
t=C.f.T(z.z.length+3,4)*4
s=C.f.T(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.f.i(q.a)+C.f.i(p.a)+C.f.i(o.a)+C.f.i(n.a)+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+"_"
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
a=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a0=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$au()
if(c){z=$.$get$at()
a6=new Z.aP(a6.a|z.a)}if(b){z=$.$get$as()
a6=new Z.aP(a6.a|z.a)}if(a){z=$.$get$av()
a6=new Z.aP(a6.a|z.a)}if(a0){z=$.$get$aw()
a6=new Z.aP(a6.a|z.a)}if(a2){z=$.$get$ar()
a6=new Z.aP(a6.a|z.a)}return new A.fS(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
J:function(a,b){H.w(a,"$isb",[T.cE],"$asb")
if(b!=null)if(!C.a.az(a,b)){b.a=a.length
C.a.h(a,b)}},
b8:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.bS(x)}}},
fG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.c9()
y=a.fr.j(0,z.ac)
if(y==null){y=A.fO(z,a.a)
x=y.b
if(x.length===0)H.o(P.p("May not cache a shader with no name."))
if(a.fr.f3(0,x))H.o(P.p('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.U(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.ar
z=b.e
if(!(z instanceof Z.d7)){b.e=null
z=null}if(z==null||!z.d.q(0,v)){z=w.r1
if(z)b.d.am()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.bw()
t.a.bw()
t=t.e
if(!(t==null))t.a5(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.f0()
s=s.e
if(!(s==null))s.a5(0)}q=b.d.f_(new Z.id(a.a),v)
q.as($.$get$au()).e=this.a.y.c
if(z)q.as($.$get$at()).e=this.a.Q.c
if(u)q.as($.$get$as()).e=this.a.z.c
if(w.rx)q.as($.$get$av()).e=this.a.ch.c
if(t)q.as($.$get$aw()).e=this.a.cx.c
if(w.x1)q.as($.$get$ar()).e=this.a.cy.c
b.e=q}z=T.cE
p=H.c([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.fa()
if(w.fx){u=this.a
t=a.dx
t=t.gM(t)
u=u.db
u.toString
u.a1(t.Y(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gM(t)
s=a.dx
s=t.m(0,s.gM(s))
a.cx=s
t=s}u=u.dx
u.toString
u.a1(t.Y(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gfC()
s=a.dx
s=t.m(0,s.gM(s))
a.ch=s
t=s}u=u.fr
u.toString
u.a1(t.Y(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.a1(t.Y(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.a1(t.Y(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.a1(C.x.Y(t,!0))}if(w.aq>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.f(s,n)
s=s[n]
t.toString
H.k(s,"$isah")
t=t.k3
if(n>=t.length)return H.f(t,n)
t=t[n]
m=new Float32Array(H.bs(H.w(s.Y(0,!0),"$isb",u,"$asb")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.e:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.J(p,this.f.d)
u=this.a
t=this.f.d
u.Z(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.J(p,this.f.e)
u=this.a
t=this.f.e
u.V(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.e:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.J(p,this.r.d)
u=this.a
t=this.r.d
u.Z(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.J(p,this.r.e)
u=this.a
t=this.r.e
u.V(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.e:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.J(p,this.x.d)
u=this.a
t=this.x.d
u.Z(u.aq,u.ar,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.J(p,this.x.e)
u=this.a
t=this.x.e
u.V(u.ac,u.ar,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.e:u=this.a
t=this.y.f
u=u.aU
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.J(p,this.y.d)
u=this.a
t=this.y.d
u.Z(u.cu,u.aV,t)
t=this.a
u=this.y.f
t=t.aU
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.J(p,this.y.e)
u=this.a
t=this.y.e
u.V(u.cv,u.aV,t)
t=this.a
u=this.y.f
t=t.aU
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.e:u=this.a
t=this.z.f
u=u.aW
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.aY
t.a.uniform1f(t.d,r)
break
case C.c:this.J(p,this.z.d)
u=this.a
t=this.z.d
u.Z(u.cw,u.aX,t)
t=this.a
u=this.z.f
t=t.aW
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.aY
u.a.uniform1f(u.d,r)
break
case C.d:this.J(p,this.z.e)
u=this.a
t=this.z.e
u.V(u.cz,u.aX,t)
t=this.a
u=this.z.f
t=t.aW
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.aY
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.cK
u.a.uniform1i(u.d,o)
u=a.db
l=u.gM(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bB
if(k>=s.length)return H.f(s,k)
h=s[k]
s=l.bS(i.a)
r=s.a
g=s.b
f=s.c
f=s.E(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.cL
u.a.uniform1i(u.d,o)
u=a.db
l=u.gM(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bC
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gaG(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gbT(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aK(i.gaG(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gaa(i)
f=h.d
g=s.gb6()
r=s.gaL()
s=s.gaS()
f.a.uniform3f(f.d,g,r,s)
s=i.gbq()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbr()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbs()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.cM
u.a.uniform1i(u.d,o)
u=a.db
l=u.gM(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bD
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gaG(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gbT(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbA(i).hp()
f=h.c
g=s.gan(s)
r=s.gao(s)
s=s.gap()
f.a.uniform3f(f.d,g,r,s)
s=l.aK(i.gaG(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaa(i)
r=h.e
g=s.gb6()
f=s.gaL()
s=s.gaS()
r.a.uniform3f(r.d,g,f,s)
s=i.ghn()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghm()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbq()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbr()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbs()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.cN
u.a.uniform1i(u.d,o)
u=a.db
l=u.gM(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
r=this.a.bE
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gaI()
H.w(p,"$isb",s,"$asb")
if(!C.a.az(p,r)){r.saP(p.length)
C.a.h(p,r)}r=i.gbA(i)
g=h.d
f=r.gan(r)
e=r.gao(r)
r=r.gap()
g.a.uniform3f(g.d,f,e,r)
r=i.gfU()
e=h.b
f=r.gan(r)
g=r.gao(r)
r=r.gap()
e.a.uniform3f(e.d,f,g,r)
r=i.gaH(i)
g=h.c
f=r.gan(r)
e=r.gao(r)
r=r.gap()
g.a.uniform3f(g.d,f,e,r)
r=l.bS(i.gbA(i))
e=r.a
f=r.b
g=r.c
g=r.E(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gaa(i)
f=h.f
e=g.gb6()
r=g.gaL()
g=g.gaS()
f.a.uniform3f(f.d,e,r,g)
g=i.gaI()
r=g.gbL(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gdO()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaP())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.cO
u.a.uniform1i(u.d,o)
u=a.db
l=u.gM(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
g=this.a.bF
if(k>=g.length)return H.f(g,k)
h=g[k]
g=i.gaI()
H.w(p,"$isb",r,"$asb")
if(!C.a.az(p,g)){g.saP(p.length)
C.a.h(p,g)}d=l.m(0,i.gM(i))
g=i.gM(i).aK(new V.ap(0,0,0))
f=h.b
e=g.gn(g)
c=g.gp(g)
g=g.gbT(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aK(new V.ap(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.cS(0)
c=h.d
m=new Float32Array(H.bs(H.w(new V.dw(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).Y(0,!0),"$isb",s,"$asb")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gaa(i)
g=h.e
e=c.gb6()
f=c.gaL()
c=c.gaS()
g.a.uniform3f(g.d,e,f,c)
c=i.gaI()
g=c.gbL(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gbL(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gho(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbq()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbr()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbs()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.cP
u.a.uniform1i(u.d,o)
u=a.db
l=u.gM(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bG
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gaI()
H.w(p,"$isb",z,"$asb")
if(!C.a.az(p,s)){s.saP(p.length)
C.a.h(p,s)}s=i.gaG(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gbT(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbA(i)
f=h.c
g=s.gan(s)
r=s.gao(s)
s=s.gap()
f.a.uniform3f(f.d,g,r,s)
s=i.gfU()
r=h.d
g=s.gan(s)
f=s.gao(s)
s=s.gap()
r.a.uniform3f(r.d,g,f,s)
s=i.gaH(i)
f=h.e
g=s.gan(s)
r=s.gao(s)
s=s.gap()
f.a.uniform3f(f.d,g,r,s)
s=l.aK(i.gaG(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaI()
r=s.gbL(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gdO()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaP())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gaa(i)
r=h.y
g=s.gb6()
f=s.gaL()
s=s.gaS()
r.a.uniform3f(r.d,g,f,s)
s=i.ghv()
f=h.z
f.a.uniform1f(f.d,s)
s=i.ghw()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbq()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbr()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbs()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.e:break
case C.c:this.J(p,this.Q.d)
z=this.a
u=this.Q.d
z.Z(z.cA,z.aZ,u)
break
case C.d:this.J(p,this.Q.e)
z=this.a
u=this.Q.e
z.V(z.cB,z.aZ,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gM(u).cS(0)
a.Q=u}z=z.fy
z.toString
z.a1(u.Y(0,!0))}if(w.dy){this.J(p,this.ch)
z=this.a
u=this.ch
z.V(z.cC,z.cD,u)
switch(w.r){case C.b:break
case C.e:z=this.a
u=this.cx.f
z=z.b_
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.J(p,this.cx.d)
z=this.a
u=this.cx.d
z.Z(z.cE,z.b0,u)
u=this.a
z=this.cx.f
u=u.b_
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.J(p,this.cx.e)
z=this.a
u=this.cx.e
z.V(z.cF,z.b0,u)
u=this.a
z=this.cx.f
u=u.b_
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.e:z=this.a
u=this.cy.f
z=z.b2
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.b1
u.a.uniform1f(u.d,s)
break
case C.c:this.J(p,this.cy.d)
z=this.a
u=this.cy.d
z.Z(z.cG,z.b3,u)
u=this.a
z=this.cy.f
u=u.b2
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b1
z.a.uniform1f(z.d,s)
break
case C.d:this.J(p,this.cy.e)
z=this.a
u=this.cy.e
z.V(z.cH,z.b3,u)
u=this.a
z=this.cy.f
u=u.b2
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b1
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.e:z=this.a
t=this.db.f
z=z.b4
z.a.uniform1f(z.d,t)
break
case C.c:this.J(p,this.db.d)
z=this.a
t=this.db.d
z.Z(z.cI,z.b5,t)
t=this.a
z=this.db.f
t=t.b4
t.a.uniform1f(t.d,z)
break
case C.d:this.J(p,this.db.e)
z=this.a
t=this.db.e
z.V(z.cJ,z.b5,t)
t=this.a
z=this.db.f
t=t.b4
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.bt(a)
z.au(a)
z.fT(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.f8()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.c9().ac}},fQ:{"^":"cu;0f,a,b,0c,0d,0e",
en:function(a){var z,y
z=this.f
if(!$.l.$2(z,a)){y=this.f
this.f=a
z=new D.L(this.b,y,a,this,[P.t])
z.b=!0
this.a.N(z)}},
ak:function(){this.bZ()
this.en(1)}},cu:{"^":"a;",
N:[function(a){this.a.N(H.k(a,"$isu"))},function(){return this.N(null)},"ds","$1","$0","gaM",0,2,0],
ak:["bZ",function(){}],
eq:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.d(this.gaM(),{func:1,ret:-1,args:[D.u]})
C.a.F(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.d(this.gaM(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.L(this.b+".texture2D",x,this.d,this,[T.dQ])
z.b=!0
this.a.N(z)}},
er:function(a){},
sb7:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.ak()
this.c=C.c
this.er(null)
z=this.a
z.a=null
z.N(null)}this.eq(a)}},fR:{"^":"cu;a,b,0c,0d,0e"},aL:{"^":"cu;0f,a,b,0c,0d,0e",
cj:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.L(this.b+".color",z,a,this,[V.Y])
y.b=!0
this.a.N(y)}},
ak:["bb",function(){this.bZ()
this.cj(new V.Y(1,1,1))}],
saa:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.ak()
z=this.a
z.a=null
z.N(null)}this.cj(b)}},fT:{"^":"aL;0ch,0f,a,b,0c,0d,0e",
ep:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.L(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.N(z)}},
ak:function(){this.bb()
this.ep(1)}},fU:{"^":"aL;0ch,0f,a,b,0c,0d,0e",
bn:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.L(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.N(z)}},
ak:function(){this.bb()
this.bn(100)}},cD:{"^":"a;"}}],["","",,T,{"^":"",cE:{"^":"cb;"},dQ:{"^":"cE;0b,0c,0d,0e,0f,0r,0x,0y,a"},hC:{"^":"a;a,0b,0c,0d,0e",
fj:function(a,b,c,d,e){var z,y,x,w
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
w=new T.dQ(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.ac()
z=W.a2
W.U(x,"load",H.d(new T.hD(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
bK:function(a){return this.fj(a,!1,!1,!1,!1)},
el:function(a,b,c){var z,y,x,w
b=V.cZ(b,2)
z=V.cZ(a.width,2)
y=V.cZ(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cf(null,null)
x.width=z
x.height=y
w=H.k(C.k.d9(x,"2d"),"$isda")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.jP(w.getImageData(0,0,x.width,x.height))}}},hD:{"^":"r:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.el(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.G.fM(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.f9()}++x.e}}}],["","",,X,{"^":"",d9:{"^":"a;",$isao:1},fn:{"^":"dO;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.ac()
this.x=z}return z}},h5:{"^":"a;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.ac()
this.e=z}return z},
ax:[function(a){var z
H.k(a,"$isu")
z=this.e
if(!(z==null))z.G(a)},function(){return this.ax(null)},"fX","$1","$0","gc1",0,2,0],
saD:function(a){var z,y,x
if(!J.N(this.a,a)){z=this.a
if(z!=null){z=z.gB()
z.toString
y=H.d(this.gc1(),{func:1,ret:-1,args:[D.u]})
C.a.F(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gB()
z.toString
y=H.d(this.gc1(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.L("mover",x,this.a,this,[U.bD])
z.b=!0
this.ax(z)}},
$isao:1,
$isd9:1},dO:{"^":"a;"}}],["","",,B,{"^":"",
k9:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.eo(x,(x&&C.m).c4(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.a2
W.U(z,"scroll",H.d(new B.ka(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
kb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isb",[P.n],"$asb")
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
u=W.cf(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.k(v.insertCell(-1),"$isbi")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.k(q.insertCell(-1),"$isbi").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;!1;++p){o=z.createElement("div")
if(p>=0)return H.f(b,p)
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.k(q.insertCell(-1),"$isbi")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.k(q.insertCell(-1),"$isbi")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.k(q.insertCell(-1),"$isbi").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.k9(a,y,!1,"../resources/SnowTop.png")},
kc:function(a){P.hK(C.u,new B.kd(a))},
ka:{"^":"r:13;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.h(-0.05*C.j.a0(this.b.scrollTop))+"px"
z.top=y}},
kd:{"^":"r:33;a",
$1:function(a){H.k(a,"$isaN")
P.d_(C.j.d4(this.a.gfc(),2)+" fps")}}}],["","",,F,{"^":"",
eJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
B.kb("Test 005",H.c([],[P.n]),"A test of the Material Lighting shader with 2D textures and directional lighting. This test has texturing for emission, ambient, diffuse, and specular. The same texture is used for ambient and diffuse. The emission texture makes the lights on the panel glow. The specular texture makes specific parts shiny and other parts not.")
z=document.getElementById("threeDart")
if(z==null)H.o(P.p("Failed to find an element with the identifier, threeDart."))
y=E.hI(z,!0,!0,!0,!1)
x=new E.aC()
x.a=""
x.b=!0
w=E.aC
v=O.cg(w)
x.y=v
v.ba(x.gfm(),x.gfo())
x.z=null
x.Q=null
x.ch=null
x.cx=null
x.cy=null
x.db=null
x.dx=null
x.dy=null
x.fr=null
x.fx=null
x.sbV(0,null)
x.saD(null)
u=F.dK()
F.br(u,null,null,1,1,1,0,0,1)
F.br(u,null,null,1,1,0,1,0,3)
F.br(u,null,null,1,1,0,0,1,2)
F.br(u,null,null,1,1,-1,0,0,0)
F.br(u,null,null,1,1,0,-1,0,0)
F.br(u,null,null,1,1,0,0,-1,3)
u.am()
u.fl(new F.i7(),new F.h1())
x.sbV(0,u)
v=new U.dH()
v.a=0
v.b=0
v.c=0
v.d=0
v.e=0
v.f=0
v.r=0
v.sd5(0)
v.scX(0,0)
v.sd0(0)
t=v.d
if(!$.l.$2(t,0.1)){s=v.d
v.d=0.1
t=new D.L("deltaYaw",s,0.1,v,[P.t])
t.b=!0
v.aj(t)}t=v.e
if(!$.l.$2(t,0.21)){s=v.e
v.e=0.21
t=new D.L("deltaPitch",s,0.21,v,[P.t])
t.b=!0
v.aj(t)}t=v.f
if(!$.l.$2(t,0.32)){s=v.f
v.f=0.32
t=new D.L("deltaRoll",s,0.32,v,[P.t])
t.b=!0
v.aj(t)}x.saD(v)
r=y.f.bK("../resources/CtrlPnlColor.png")
q=new O.fN()
v=O.cg(V.ah)
q.e=v
v.ba(q.gdS(),q.gdT())
v=new O.aL(q,"emission")
v.c=C.b
v.f=new V.Y(0,0,0)
q.f=v
v=new O.aL(q,"ambient")
v.c=C.b
v.f=new V.Y(0,0,0)
q.r=v
v=new O.aL(q,"diffuse")
v.c=C.b
v.f=new V.Y(0,0,0)
q.x=v
v=new O.aL(q,"invDiffuse")
v.c=C.b
v.f=new V.Y(0,0,0)
q.y=v
v=new O.fU(q,"specular")
v.c=C.b
v.f=new V.Y(0,0,0)
v.ch=100
q.z=v
v=new O.fR(q,"bump")
v.c=C.b
q.Q=v
q.ch=null
v=new O.aL(q,"reflect")
v.c=C.b
v.f=new V.Y(0,0,0)
q.cx=v
v=new O.fT(q,"refract")
v.c=C.b
v.f=new V.Y(0,0,0)
v.ch=1
q.cy=v
v=new O.fQ(q,"alpha")
v.c=C.b
v.f=1
q.db=v
v=new D.fx()
v.c_(D.S)
v.e=H.c([],[D.bV])
v.f=H.c([],[D.h7])
v.r=H.c([],[D.hv])
v.x=H.c([],[D.hE])
v.y=H.c([],[D.hF])
v.z=H.c([],[D.hG])
v.Q=null
v.ch=null
v.bU(v.gdR(),v.gea(),v.geb())
q.dx=v
t=v.Q
if(t==null){t=D.ac()
v.Q=t
v=t}else v=t
t={func:1,ret:-1,args:[D.u]}
p=H.d(q.gej(),t)
C.a.h(v.a,p)
p=q.dx
v=p.ch
if(v==null){v=D.ac()
p.ch=v}p=H.d(q.gaM(),t)
C.a.h(v.a,p)
q.dy=null
p=q.dx
v=U.dd(V.dx(new V.ap(0,0,0),new V.G(0,1,0),new V.G(1,-1,-3)))
o=new V.Y(1,1,1)
n=new D.bV()
n.c=new V.Y(1,1,1)
n.a=new V.G(0,0,1)
s=n.b
n.b=v
v=v.gB()
v.toString
m=H.d(n.gdr(),t)
C.a.h(v.a,m)
v=new D.L("mover",s,n.b,n,[U.bD])
v.b=!0
n.af(v)
if(!n.c.q(0,o)){s=n.c
n.c=o
v=new D.L("color",s,o,n,[V.Y])
v.b=!0
n.af(v)}p.h(0,n)
q.f.sb7(y.f.bK("../resources/CtrlPnlEmission.png"))
v=q.r
v.saa(0,new V.Y(0.2,0.2,0.2))
v=q.x
v.saa(0,new V.Y(0.8,0.8,0.8))
q.r.sb7(r)
q.x.sb7(r)
q.z.sb7(y.f.bK("../resources/CtrlPnlSpecular.png"))
v=q.z
if(v.c===C.b){v.c=C.e
v.bb()
v.bn(100)
p=v.a
p.a=null
p.N(null)}v.bn(10)
v=new M.fg()
w=O.cg(w)
v.d=w
w.ba(v.gdV(),v.gdW())
v.e=null
v.f=null
v.r=null
v.x=null
l=new X.h5()
l.b=1.0471975511965976
l.c=0.1
l.d=2000
l.saD(null)
w=l.b
if(!$.l.$2(w,1.0471975511965976)){s=l.b
l.b=1.0471975511965976
w=new D.L("fov",s,1.0471975511965976,l,[P.t])
w.b=!0
l.ax(w)}w=l.c
if(!$.l.$2(w,0.1)){s=l.c
l.c=0.1
w=new D.L("near",s,0.1,l,[P.t])
w.b=!0
l.ax(w)}w=l.d
if(!$.l.$2(w,2000)){s=l.d
l.d=2000
w=new D.L("far",s,2000,l,[P.t])
w.b=!0
l.ax(w)}w=v.a
if(w!==l){if(w!=null){w=w.gB()
w.toString
p=H.d(v.ga3(),t)
C.a.F(w.a,p)}s=v.a
v.a=l
w=l.gB()
w.toString
p=H.d(v.ga3(),t)
C.a.h(w.a,p)
w=new D.L("camera",s,v.a,v,[X.d9])
w.b=!0
v.ag(w)}k=new X.fn()
w=new V.bS(0,0,0,1)
k.a=w
k.b=!0
k.c=2000
k.d=!0
k.e=0
k.f=!1
w=V.dG(0,0,1,1)
k.r=w
w=v.b
if(w!==k){if(w!=null){w=w.gB()
w.toString
p=H.d(v.ga3(),t)
C.a.F(w.a,p)}s=v.b
v.b=k
w=k.gB()
w.toString
p=H.d(v.ga3(),t)
C.a.h(w.a,p)
w=new D.L("target",s,v.b,v,[X.dO])
w.b=!0
v.ag(w)}v.sd2(null)
v.sd2(q)
v.d.h(0,x)
v.a.saD(U.dd(V.an(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
w=y.d
if(w!==v){if(w!=null){w=w.gB()
w.toString
p=H.d(y.gc0(),t)
C.a.F(w.a,p)}y.d=v
w=v.gB()
w.toString
t=H.d(y.gc0(),t)
C.a.h(w.a,t)
y.dn()}B.kc(y)}},1]]
setupProgram(dart,0,0)
J.H=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dr.prototype
return J.dq.prototype}if(typeof a=="string")return J.cn.prototype
if(a==null)return J.ds.prototype
if(typeof a=="boolean")return J.ft.prototype
if(a.constructor==Array)return J.bA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.bL=function(a){if(typeof a=="string")return J.cn.prototype
if(a==null)return a
if(a.constructor==Array)return J.bA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.cV=function(a){if(a==null)return a
if(a.constructor==Array)return J.bA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.jS=function(a){if(typeof a=="number")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cI.prototype
return a}
J.bM=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).q(a,b)}
J.eO=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jS(a).av(a,b)}
J.eP=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k0(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bL(a).j(a,b)}
J.eQ=function(a,b,c,d){return J.bM(a).co(a,b,c,d)}
J.ca=function(a,b,c){return J.bL(a).f2(a,b,c)}
J.d1=function(a,b){return J.cV(a).w(a,b)}
J.eR=function(a,b){return J.cV(a).H(a,b)}
J.az=function(a){return J.H(a).gL(a)}
J.bP=function(a){return J.cV(a).gO(a)}
J.b_=function(a){return J.bL(a).gk(a)}
J.a1=function(a){return J.H(a).i(a)}
var $=I.p
C.k=W.ce.prototype
C.m=W.f4.prototype
C.v=J.m.prototype
C.a=J.bA.prototype
C.w=J.dq.prototype
C.f=J.dr.prototype
C.x=J.ds.prototype
C.j=J.c_.prototype
C.h=J.cn.prototype
C.E=J.bB.prototype
C.F=W.h0.prototype
C.p=J.h6.prototype
C.G=P.cA.prototype
C.l=J.cI.prototype
C.q=W.bo.prototype
C.r=W.ih.prototype
C.t=new P.h3()
C.i=new P.j3()
C.b=new A.bT(0,"ColorSourceType.None")
C.e=new A.bT(1,"ColorSourceType.Solid")
C.c=new A.bT(2,"ColorSourceType.Texture2D")
C.d=new A.bT(3,"ColorSourceType.TextureCube")
C.u=new P.by(5e6)
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.A=function(getTagFallback) {
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
C.B=function() {
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
C.C=function(hooks) {
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
C.D=function(hooks) {
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
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
$.ag=0
$.b0=null
$.d4=null
$.cO=!1
$.eG=null
$.eA=null
$.eM=null
$.c6=null
$.c8=null
$.cW=null
$.aS=null
$.bt=null
$.bu=null
$.cP=!1
$.K=C.i
$.dj=null
$.di=null
$.dh=null
$.dg=null
$.l=V.fV()
$.dB=null
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
I.$lazy(y,x,w)}})(["df","$get$df",function(){return H.eF("_$dart_dartClosure")},"co","$get$co",function(){return H.eF("_$dart_js")},"dT","$get$dT",function(){return H.aj(H.c0({
toString:function(){return"$receiver$"}}))},"dU","$get$dU",function(){return H.aj(H.c0({$method$:null,
toString:function(){return"$receiver$"}}))},"dV","$get$dV",function(){return H.aj(H.c0(null))},"dW","$get$dW",function(){return H.aj(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e_","$get$e_",function(){return H.aj(H.c0(void 0))},"e0","$get$e0",function(){return H.aj(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dY","$get$dY",function(){return H.aj(H.dZ(null))},"dX","$get$dX",function(){return H.aj(function(){try{null.$method$}catch(z){return z.message}}())},"e2","$get$e2",function(){return H.aj(H.dZ(void 0))},"e1","$get$e1",function(){return H.aj(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cL","$get$cL",function(){return P.ii()},"bv","$get$bv",function(){return[]},"de","$get$de",function(){return{}},"ec","$get$ec",function(){return Z.aa(0)},"ea","$get$ea",function(){return Z.aa(511)},"au","$get$au",function(){return Z.aa(1)},"at","$get$at",function(){return Z.aa(2)},"as","$get$as",function(){return Z.aa(4)},"av","$get$av",function(){return Z.aa(8)},"aw","$get$aw",function(){return Z.aa(16)},"bm","$get$bm",function(){return Z.aa(32)},"bn","$get$bn",function(){return Z.aa(64)},"eb","$get$eb",function(){return Z.aa(96)},"aQ","$get$aQ",function(){return Z.aa(128)},"ar","$get$ar",function(){return Z.aa(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.u]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.a2]},{func:1,ret:-1,args:[W.ai]},{func:1,ret:P.F,args:[F.ad]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.M,[P.i,E.aC]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:P.F,args:[D.u]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[P.M,[P.i,V.ah]]},{func:1,ret:P.F,args:[W.a2]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.M,[P.i,D.S]]},{func:1,ret:P.F,args:[,,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.n,args:[P.M]},{func:1,ret:P.F,args:[P.P]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.af,args:[W.I]},{func:1,ret:P.af,args:[P.t,P.t]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.af,args:[[P.i,D.S]]},{func:1,ret:[P.ax,,],args:[,]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:P.F,args:[F.al,P.t,P.t]},{func:1,ret:-1,args:[P.a],opt:[P.ae]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[P.n]},{func:1,ret:P.F,args:[P.aN]},{func:1,args:[,P.n]},{func:1,ret:W.X,args:[W.I]}]
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
if(x==y)H.kg(d||a)
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
Isolate.cT=a.cT
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
if(typeof dartMainRunner==="function")dartMainRunner(F.eJ,[])
else F.eJ([])})})()
//# sourceMappingURL=test.dart.js.map
