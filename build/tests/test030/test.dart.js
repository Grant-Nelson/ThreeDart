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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isk)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cI(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cJ=function(){}
var dart=[["","",,H,{"^":"",kN:{"^":"a;a"}}],["","",,J,{"^":"",
A:function(a){return void 0},
cO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c_:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cM==null){H.jB()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.e0("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ce()]
if(v!=null)return v
v=H.jG(a)
if(v!=null)return v
if(typeof a=="function")return C.D
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$ce(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
k:{"^":"a;",
p:function(a,b){return a===b},
gL:function(a){return H.b2(a)},
i:["ce",function(a){return"Instance of '"+H.aA(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fj:{"^":"k;",
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$isag:1},
fk:{"^":"k;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$isz:1},
cf:{"^":"k;",
gL:function(a){return 0},
i:["cf",function(a){return String(a)}]},
fP:{"^":"cf;"},
cy:{"^":"cf;"},
bs:{"^":"cf;",
i:function(a){var z=a[$.$get$d5()]
if(z==null)return this.cf(a)
return"JavaScript function for "+H.d(J.Z(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isca:1},
br:{"^":"k;$ti",
h:function(a,b){H.w(b,H.u(a,0))
if(!!a.fixed$length)H.S(P.a5("add"))
a.push(b)},
P:function(a,b){var z
if(!!a.fixed$length)H.S(P.a5("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aS(a))}},
R:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.V(z,y,H.d(a[y]))
return z.join(b)},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
gb5:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.fh())},
dt:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
i:function(a){return P.cb(a,"[","]")},
gN:function(a){return new J.ah(a,a.length,0,[H.u(a,0)])},
gL:function(a){return H.b2(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.S(P.a5("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.bF(b,"newLength",null))
if(b<0)throw H.e(P.b3(b,0,null,"newLength",null))
a.length=b},
V:function(a,b,c){H.R(b)
H.w(c,H.u(a,0))
if(!!a.immutable$list)H.S(P.a5("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.by(a,b))
if(b>=a.length||b<0)throw H.e(H.by(a,b))
a[b]=c},
$ish:1,
$isc:1,
q:{
fi:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.bF(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.b3(a,0,4294967295,"length",null))
return J.di(new Array(a),b)},
di:function(a,b){return J.aY(H.f(a,[b]))},
aY:function(a){H.bC(a)
a.fixed$length=Array
return a}}},
kM:{"^":"br;$ti"},
ah:{"^":"a;a,b,c,0d,$ti",
gK:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bN:{"^":"k;",
ec:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.a5(""+a+".toInt()"))},
b4:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.a5(""+a+".floor()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.a5(""+a+".round()"))},
c2:function(a,b){var z,y
if(b>20)throw H.e(P.b3(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){return a&0x1FFFFFFF},
c9:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
cg:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bG(a,b)},
ar:function(a,b){return(a|0)===a?a/b|0:this.bG(a,b)},
bG:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.a5("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
bE:function(a,b){var z
if(a>0)z=this.dg(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dg:function(a,b){return b>31?0:a>>>b},
a0:function(a,b){if(typeof b!=="number")throw H.e(H.bY(b))
return a<b},
$ist:1,
$isK:1},
dk:{"^":"bN;",$isO:1},
dj:{"^":"bN;"},
cd:{"^":"k;",
cz:function(a,b){if(b>=a.length)throw H.e(H.by(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.L(b)
if(typeof b!=="string")throw H.e(P.bF(b,null,null))
return a+b},
bh:function(a,b,c){H.R(c)
if(c==null)c=a.length
if(b>c)throw H.e(P.co(b,null,null))
if(c>a.length)throw H.e(P.co(c,null,null))
return a.substring(b,c)},
cc:function(a,b){return this.bh(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.t)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
dT:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
X:function(a,b){return this.dT(a,b," ")},
du:function(a,b,c){if(c>a.length)throw H.e(P.b3(c,0,a.length,null,null))
return H.jS(a,b,c)},
i:function(a){return a},
gL:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$isfN:1,
$ism:1}}],["","",,H,{"^":"",
fh:function(){return new P.hb("No element")},
f5:{"^":"h;"},
ft:{"^":"a;a,b,c,0d,$ti",
gK:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.bA(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.e(P.aS(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.A(z,w);++this.c
return!0}},
fz:{"^":"h;a,b,$ti",
gN:function(a){return new H.fA(J.bE(this.a),this.b,this.$ti)},
gj:function(a){return J.aP(this.a)},
A:function(a,b){return this.b.$1(J.cR(this.a,b))},
$ash:function(a,b){return[b]}},
fA:{"^":"cc;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gK(z))
return!0}this.a=null
return!1},
gK:function(a){return this.a},
$ascc:function(a,b){return[b]}},
hS:{"^":"h;a,b,$ti",
gN:function(a){return new H.hT(J.bE(this.a),this.b,this.$ti)}},
hT:{"^":"cc;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gK(z)))return!0
return!1},
gK:function(a){var z=this.a
return z.gK(z)}},
bK:{"^":"a;$ti"}}],["","",,H,{"^":"",
jw:function(a){return init.types[H.R(a)]},
jE:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isv},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.Z(a)
if(typeof z!=="string")throw H.e(H.bY(a))
return z},
b2:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aA:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.v||!!J.A(a).$iscy){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.c.cz(w,0)===36)w=C.c.cc(w,1)
r=H.cN(H.bC(H.av(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
a1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fW:function(a){return a.b?H.a1(a).getUTCFullYear()+0:H.a1(a).getFullYear()+0},
fU:function(a){return a.b?H.a1(a).getUTCMonth()+1:H.a1(a).getMonth()+1},
fQ:function(a){return a.b?H.a1(a).getUTCDate()+0:H.a1(a).getDate()+0},
fR:function(a){return a.b?H.a1(a).getUTCHours()+0:H.a1(a).getHours()+0},
fT:function(a){return a.b?H.a1(a).getUTCMinutes()+0:H.a1(a).getMinutes()+0},
fV:function(a){return a.b?H.a1(a).getUTCSeconds()+0:H.a1(a).getSeconds()+0},
fS:function(a){return a.b?H.a1(a).getUTCMilliseconds()+0:H.a1(a).getMilliseconds()+0},
o:function(a){throw H.e(H.bY(a))},
j:function(a,b){if(a==null)J.aP(a)
throw H.e(H.by(a,b))},
by:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ar(!0,b,"index",null)
z=H.R(J.aP(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.D(b,a,"index",null,z)
return P.co(b,"index",null)},
bY:function(a){return new P.ar(!0,a,null,null)},
jo:function(a){if(typeof a!=="number")throw H.e(H.bY(a))
return a},
e:function(a){var z
if(a==null)a=new P.dv()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eE})
z.name=""}else z.toString=H.eE
return z},
eE:function(){return J.Z(this.dartException)},
S:function(a){throw H.e(a)},
x:function(a){throw H.e(P.aS(a))},
ax:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bE(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ch(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.du(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dN()
u=$.$get$dO()
t=$.$get$dP()
s=$.$get$dQ()
r=$.$get$dU()
q=$.$get$dV()
p=$.$get$dS()
$.$get$dR()
o=$.$get$dX()
n=$.$get$dW()
m=v.W(y)
if(m!=null)return z.$1(H.ch(H.L(y),m))
else{m=u.W(y)
if(m!=null){m.method="call"
return z.$1(H.ch(H.L(y),m))}else{m=t.W(y)
if(m==null){m=s.W(y)
if(m==null){m=r.W(y)
if(m==null){m=q.W(y)
if(m==null){m=p.W(y)
if(m==null){m=s.W(y)
if(m==null){m=o.W(y)
if(m==null){m=n.W(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.du(H.L(y),m))}}return z.$1(new H.hD(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dE()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ar(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dE()
return a},
aN:function(a){var z
if(a==null)return new H.eh(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eh(a)},
ju:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.V(0,a[y],a[x])}return b},
jD:function(a,b,c,d,e,f){H.i(a,"$isca")
switch(H.R(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.U("Unsupported number of arguments for wrapped closure"))},
aK:function(a,b){var z
H.R(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jD)
a.$identity=z
return z},
eT:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.A(d).$isc){z.$reflectionInfo=d
x=H.fY(z).r}else x=d
w=e?Object.create(new H.hc().constructor.prototype):Object.create(new H.c4(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ab
if(typeof u!=="number")return u.B()
$.ab=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.d1(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.jw,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cV:H.c5
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.e("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.d1(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
eQ:function(a,b,c,d){var z=H.c5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d1:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eS(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eQ(y,!w,z,b)
if(y===0){w=$.ab
if(typeof w!=="number")return w.B()
$.ab=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aQ
if(v==null){v=H.bG("self")
$.aQ=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ab
if(typeof w!=="number")return w.B()
$.ab=w+1
t+=w
w="return function("+t+"){return this."
v=$.aQ
if(v==null){v=H.bG("self")
$.aQ=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
eR:function(a,b,c,d){var z,y
z=H.c5
y=H.cV
switch(b?-1:a){case 0:throw H.e(H.h5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eS:function(a,b){var z,y,x,w,v,u,t,s
z=$.aQ
if(z==null){z=H.bG("self")
$.aQ=z}y=$.cU
if(y==null){y=H.bG("receiver")
$.cU=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eR(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.ab
if(typeof y!=="number")return y.B()
$.ab=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.ab
if(typeof y!=="number")return y.B()
$.ab=y+1
return new Function(z+y+"}")()},
cI:function(a,b,c,d,e,f,g){var z,y
z=J.aY(H.bC(b))
H.R(c)
y=!!J.A(d).$isc?J.aY(d):d
return H.eT(a,z,c,y,!!e,f,g)},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.af(a,"String"))},
jJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.af(a,"num"))},
eu:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.af(a,"bool"))},
R:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.af(a,"int"))},
eC:function(a,b){throw H.e(H.af(a,H.L(b).substring(3)))},
jL:function(a,b){var z=J.bA(b)
throw H.e(H.eP(a,z.bh(b,3,z.gj(b))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.eC(a,b)},
V:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.jL(a,b)},
bC:function(a){if(a==null)return a
if(!!J.A(a).$isc)return a
throw H.e(H.af(a,"List"))},
jF:function(a,b){if(a==null)return a
if(!!J.A(a).$isc)return a
if(J.A(a)[b])return a
H.eC(a,b)},
ev:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.R(z)]
else return a.$S()}return},
bz:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ev(J.A(a))
if(z==null)return!1
y=H.ey(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.cE)return a
$.cE=!0
try{if(H.bz(a,b))return a
z=H.bD(b)
y=H.af(a,z)
throw H.e(y)}finally{$.cE=!1}},
cK:function(a,b){if(a!=null&&!H.cH(a,b))H.S(H.af(a,H.bD(b)))
return a},
ep:function(a){var z
if(a instanceof H.q){z=H.ev(J.A(a))
if(z!=null)return H.bD(z)
return"Closure"}return H.aA(a)},
jU:function(a){throw H.e(new P.eY(H.L(a)))},
ew:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
av:function(a){if(a==null)return
return a.$ti},
lL:function(a,b,c){return H.aO(a["$as"+H.d(c)],H.av(b))},
bm:function(a,b,c,d){var z
H.L(c)
H.R(d)
z=H.aO(a["$as"+H.d(c)],H.av(b))
return z==null?null:z[d]},
aM:function(a,b,c){var z
H.L(b)
H.R(c)
z=H.aO(a["$as"+H.d(b)],H.av(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.R(b)
z=H.av(a)
return z==null?null:z[b]},
bD:function(a){var z=H.aw(a,null)
return z},
aw:function(a,b){var z,y
H.y(b,"$isc",[P.m],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cN(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.R(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.d(b[y])}if('func' in a)return H.je(a,b)
if('futureOr' in a)return"FutureOr<"+H.aw("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
je:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
H.y(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.c.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aw(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aw(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aw(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aw(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jt(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.L(z[l])
n=n+m+H.aw(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cN:function(a,b,c){var z,y,x,w,v,u
H.y(c,"$isc",[P.m],"$asc")
if(a==null)return""
z=new P.cs("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aw(u,c)}v="<"+z.i(0)+">"
return v},
aO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aJ:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.av(a)
y=J.A(a)
if(y[b]==null)return!1
return H.es(H.aO(y[d],z),null,c,null)},
y:function(a,b,c,d){var z,y
H.L(b)
H.bC(c)
H.L(d)
if(a==null)return a
z=H.aJ(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cN(c,0,null)
throw H.e(H.af(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
es:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a7(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a7(a[y],b,c[y],d))return!1
return!0},
lJ:function(a,b,c){return a.apply(b,H.aO(J.A(b)["$as"+H.d(c)],H.av(b)))},
ez:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="z"||a===-1||a===-2||H.ez(z)}return!1},
cH:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="z"||b===-1||b===-2||H.ez(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cH(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bz(a,b)}y=J.A(a).constructor
x=H.av(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.a7(y,null,b,null)
return z},
w:function(a,b){if(a!=null&&!H.cH(a,b))throw H.e(H.af(a,H.bD(b)))
return a},
a7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a7(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.ey(a,b,c,d)
if('func' in a)return c.builtin$cls==="ca"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a7("type" in a?a.type:null,b,x,d)
else if(H.a7(a,b,x,d))return!0
else{if(!('$is'+"aV" in y.prototype))return!1
w=y.prototype["$as"+"aV"]
v=H.aO(w,z?a.slice(1):null)
return H.a7(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bD(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.es(H.aO(r,z),b,u,d)},
ey:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a7(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a7(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a7(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a7(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.jI(m,b,l,d)},
jI:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a7(c[w],d,a[w],b))return!1}return!0},
lK:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
jG:function(a){var z,y,x,w,v,u
z=H.L($.ex.$1(a))
y=$.bZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c0[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.L($.er.$2(a,z))
if(z!=null){y=$.bZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c0[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c1(x)
$.bZ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c0[z]=x
return x}if(v==="-"){u=H.c1(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eB(a,x)
if(v==="*")throw H.e(P.e0(z))
if(init.leafTags[z]===true){u=H.c1(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eB(a,x)},
eB:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cO(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c1:function(a){return J.cO(a,!1,null,!!a.$isv)},
jH:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c1(z)
else return J.cO(z,c,null,null)},
jB:function(){if(!0===$.cM)return
$.cM=!0
H.jC()},
jC:function(){var z,y,x,w,v,u,t,s
$.bZ=Object.create(null)
$.c0=Object.create(null)
H.jx()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eD.$1(v)
if(u!=null){t=H.jH(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jx:function(){var z,y,x,w,v,u,t
z=C.A()
z=H.aI(C.x,H.aI(C.C,H.aI(C.n,H.aI(C.n,H.aI(C.B,H.aI(C.y,H.aI(C.z(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ex=new H.jy(v)
$.er=new H.jz(u)
$.eD=new H.jA(t)},
aI:function(a,b){return a(b)||b},
jS:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fX:{"^":"a;a,b,c,d,e,f,r,0x",q:{
fY:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aY(z)
y=z[0]
x=z[1]
return new H.fX(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hp:{"^":"a;a,b,c,d,e,f",
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
q:{
ae:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hp(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dT:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fL:{"^":"Q;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
du:function(a,b){return new H.fL(a,b==null?null:b.method)}}},
fl:{"^":"Q;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
q:{
ch:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fl(a,y,z?null:b.receiver)}}},
hD:{"^":"Q;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jV:{"^":"q:18;a",
$1:function(a){if(!!J.A(a).$isQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eh:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaa:1},
q:{"^":"a;",
i:function(a){return"Closure '"+H.aA(this).trim()+"'"},
gc5:function(){return this},
$isca:1,
gc5:function(){return this}},
dI:{"^":"q;"},
hc:{"^":"dI;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
c4:{"^":"dI;a,b,c,d",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c4))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var z,y
z=this.c
if(z==null)y=H.b2(this.a)
else y=typeof z!=="object"?J.aq(z):H.b2(z)
return(y^H.b2(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.aA(z)+"'")},
q:{
c5:function(a){return a.a},
cV:function(a){return a.c},
bG:function(a){var z,y,x,w,v
z=new H.c4("self","target","receiver","name")
y=J.aY(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hq:{"^":"Q;a",
i:function(a){return this.a},
q:{
af:function(a,b){return new H.hq("TypeError: "+H.d(P.bJ(a))+": type '"+H.ep(a)+"' is not a subtype of type '"+b+"'")}}},
eO:{"^":"Q;a",
i:function(a){return this.a},
q:{
eP:function(a,b){return new H.eO("CastError: "+H.d(P.bJ(a))+": type '"+H.ep(a)+"' is not a subtype of type '"+b+"'")}}},
h4:{"^":"Q;a",
i:function(a){return"RuntimeError: "+H.d(this.a)},
q:{
h5:function(a){return new H.h4(a)}}},
cg:{"^":"fx;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
ga9:function(a){return new H.fo(this,[H.u(this,0)])},
dv:function(a,b){var z=this.b
if(z==null)return!1
return this.cB(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aA(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aA(w,b)
x=y==null?null:y.b
return x}else return this.dI(b)},
dI:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.by(z,J.aq(a)&0x3ffffff)
x=this.bQ(y,a)
if(x<0)return
return y[x].b},
V:function(a,b,c){var z,y,x,w,v,u
H.w(b,H.u(this,0))
H.w(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aR()
this.b=z}this.bn(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aR()
this.c=y}this.bn(y,b,c)}else{x=this.d
if(x==null){x=this.aR()
this.d=x}w=J.aq(b)&0x3ffffff
v=this.by(x,w)
if(v==null)this.aV(x,w,[this.aS(b,c)])
else{u=this.bQ(v,b)
if(u>=0)v[u].b=c
else v.push(this.aS(b,c))}}},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aS(this))
z=z.c}},
bn:function(a,b,c){var z
H.w(b,H.u(this,0))
H.w(c,H.u(this,1))
z=this.aA(a,b)
if(z==null)this.aV(a,b,this.aS(b,c))
else z.b=c},
cJ:function(){this.r=this.r+1&67108863},
aS:function(a,b){var z,y
z=new H.fn(H.w(a,H.u(this,0)),H.w(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.cJ()
return z},
bQ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
i:function(a){return P.dq(this)},
aA:function(a,b){return a[b]},
by:function(a,b){return a[b]},
aV:function(a,b,c){a[b]=c},
cE:function(a,b){delete a[b]},
cB:function(a,b){return this.aA(a,b)!=null},
aR:function(){var z=Object.create(null)
this.aV(z,"<non-identifier-key>",z)
this.cE(z,"<non-identifier-key>")
return z},
$isdn:1},
fn:{"^":"a;a,b,0c,0d"},
fo:{"^":"f5;a,$ti",
gj:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.fp(z,z.r,this.$ti)
y.c=z.e
return y}},
fp:{"^":"a;a,b,0c,0d,$ti",
gK:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aS(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jy:{"^":"q:18;a",
$1:function(a){return this.a(a)}},
jz:{"^":"q:33;a",
$2:function(a,b){return this.a(a,b)}},
jA:{"^":"q:31;a",
$1:function(a){return this.a(H.L(a))}}}],["","",,H,{"^":"",
jt:function(a){return J.di(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
jK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bV:function(a){return a},
au:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.by(b,a))},
fG:{"^":"k;",$isls:1,"%":"DataView;ArrayBufferView;cm|eb|ec|fF|ed|ee|at"},
cm:{"^":"fG;",
gj:function(a){return a.length},
$isv:1,
$asv:I.cJ},
fF:{"^":"ec;",
k:function(a,b){H.au(b,a,a.length)
return a[b]},
$asbK:function(){return[P.t]},
$asp:function(){return[P.t]},
$ish:1,
$ash:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
at:{"^":"ee;",
$asbK:function(){return[P.O]},
$asp:function(){return[P.O]},
$ish:1,
$ash:function(){return[P.O]},
$isc:1,
$asc:function(){return[P.O]}},
kX:{"^":"at;",
k:function(a,b){H.au(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kY:{"^":"at;",
k:function(a,b){H.au(b,a,a.length)
return a[b]},
"%":"Int32Array"},
kZ:{"^":"at;",
k:function(a,b){H.au(b,a,a.length)
return a[b]},
"%":"Int8Array"},
l_:{"^":"at;",
k:function(a,b){H.au(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
l0:{"^":"at;",
k:function(a,b){H.au(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
l1:{"^":"at;",
gj:function(a){return a.length},
k:function(a,b){H.au(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
l2:{"^":"at;",
gj:function(a){return a.length},
k:function(a,b){H.au(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eb:{"^":"cm+p;"},
ec:{"^":"eb+bK;"},
ed:{"^":"cm+p;"},
ee:{"^":"ed+bK;"}}],["","",,P,{"^":"",
hV:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jl()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aK(new P.hX(z),1)).observe(y,{childList:true})
return new P.hW(z,y,x)}else if(self.setImmediate!=null)return P.jm()
return P.jn()},
ly:[function(a){self.scheduleImmediate(H.aK(new P.hY(H.b(a,{func:1,ret:-1})),0))},"$1","jl",4,0,9],
lz:[function(a){self.setImmediate(H.aK(new P.hZ(H.b(a,{func:1,ret:-1})),0))},"$1","jm",4,0,9],
lA:[function(a){H.b(a,{func:1,ret:-1})
P.iV(0,a)},"$1","jn",4,0,9],
dL:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aB]})
z=C.b.ar(a.a,1000)
return P.iW(z<0?0:z,b)},
jh:function(a,b){if(H.bz(a,{func:1,args:[P.a,P.aa]}))return b.e0(a,null,P.a,P.aa)
if(H.bz(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.bF(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jg:function(){var z,y
for(;z=$.aH,z!=null;){$.bk=null
y=z.b
$.aH=y
if(y==null)$.bj=null
z.a.$0()}},
lI:[function(){$.cF=!0
try{P.jg()}finally{$.bk=null
$.cF=!1
if($.aH!=null)$.$get$cB().$1(P.et())}},"$0","et",0,0,3],
eo:function(a){var z=new P.e5(H.b(a,{func:1,ret:-1}))
if($.aH==null){$.bj=z
$.aH=z
if(!$.cF)$.$get$cB().$1(P.et())}else{$.bj.b=z
$.bj=z}},
jk:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.aH
if(z==null){P.eo(a)
$.bk=$.bj
return}y=new P.e5(a)
x=$.bk
if(x==null){y.b=z
$.bk=y
$.aH=y}else{y.b=x.b
x.b=y
$.bk=y
if(y.b==null)$.bj=y}},
jM:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.F
if(C.d===y){P.bX(null,null,C.d,a)
return}y.toString
P.bX(null,null,y,H.b(y.bJ(a),z))},
hn:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aB]}
H.b(b,z)
y=$.F
if(y===C.d){y.toString
return P.dL(a,b)}x=y.bK(b,P.aB)
$.F.toString
return P.dL(a,H.b(x,z))},
bW:function(a,b,c,d,e){var z={}
z.a=d
P.jk(new P.ji(z,e))},
em:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.F
if(y===c)return d.$0()
$.F=c
z=y
try{y=d.$0()
return y}finally{$.F=z}},
en:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.F
if(y===c)return d.$1(e)
$.F=c
z=y
try{y=d.$1(e)
return y}finally{$.F=z}},
jj:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
bX:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.bJ(d):c.dq(d,-1)
P.eo(d)},
hX:{"^":"q:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hW:{"^":"q:30;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hY:{"^":"q:2;a",
$0:function(){this.a.$0()}},
hZ:{"^":"q:2;a",
$0:function(){this.a.$0()}},
ek:{"^":"a;a,0b,c",
cp:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aK(new P.iY(this,b),0),a)
else throw H.e(P.a5("`setTimeout()` not found."))},
cq:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aK(new P.iX(this,a,Date.now(),b),0),a)
else throw H.e(P.a5("Periodic timer."))},
$isaB:1,
q:{
iV:function(a,b){var z=new P.ek(!0,0)
z.cp(a,b)
return z},
iW:function(a,b){var z=new P.ek(!1,0)
z.cq(a,b)
return z}}},
iY:{"^":"q:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iX:{"^":"q:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.b.cg(w,x)}z.c=y
this.d.$1(z)}},
aG:{"^":"a;0a,b,c,d,e,$ti",
dM:function(a){if(this.c!==6)return!0
return this.b.b.bd(H.b(this.d,{func:1,ret:P.ag,args:[P.a]}),a.a,P.ag,P.a)},
dH:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.bz(z,{func:1,args:[P.a,P.aa]}))return H.cK(w.e5(z,a.a,a.b,null,y,P.aa),x)
else return H.cK(w.bd(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
ao:{"^":"a;bF:a<,b,0dc:c<,$ti",
c1:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.d){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jh(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ao(0,$.F,[c])
w=b==null?1:3
this.bo(new P.aG(x,w,a,b,[z,c]))
return x},
eb:function(a,b){return this.c1(a,null,b)},
bo:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaG")
this.c=a}else{if(z===2){y=H.i(this.c,"$isao")
z=y.a
if(z<4){y.bo(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bX(null,null,z,H.b(new P.ic(this,a),{func:1,ret:-1}))}},
bz:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaG")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isao")
y=u.a
if(y<4){u.bz(a)
return}this.a=y
this.c=u.c}z.a=this.aB(a)
y=this.b
y.toString
P.bX(null,null,y,H.b(new P.ii(z,this),{func:1,ret:-1}))}},
aU:function(){var z=H.i(this.c,"$isaG")
this.c=null
return this.aB(z)},
aB:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bt:function(a){var z,y,x,w
z=H.u(this,0)
H.cK(a,{futureOr:1,type:z})
y=this.$ti
x=H.aJ(a,"$isaV",y,"$asaV")
if(x){z=H.aJ(a,"$isao",y,null)
if(z)P.e7(a,this)
else P.id(a,this)}else{w=this.aU()
H.w(a,z)
this.a=4
this.c=a
P.bg(this,w)}},
aJ:[function(a,b){var z
H.i(b,"$isaa")
z=this.aU()
this.a=8
this.c=new P.a4(a,b)
P.bg(this,z)},function(a){return this.aJ(a,null)},"ei","$2","$1","gcA",4,2,28],
$isaV:1,
q:{
id:function(a,b){var z,y,x
b.a=1
try{a.c1(new P.ie(b),new P.ig(b),null)}catch(x){z=H.ax(x)
y=H.aN(x)
P.jM(new P.ih(b,z,y))}},
e7:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isao")
if(z>=4){y=b.aU()
b.a=a.a
b.c=a.c
P.bg(b,y)}else{y=H.i(b.c,"$isaG")
b.a=2
b.c=a
a.bz(y)}},
bg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isa4")
y=y.b
u=v.a
t=v.b
y.toString
P.bW(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.i(r,"$isa4")
y=y.b
u=r.a
t=r.b
y.toString
P.bW(null,null,y,u,t)
return}o=$.F
if(o==null?q!=null:o!==q)$.F=q
else o=null
y=b.c
if(y===8)new P.il(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.ik(x,b,r).$0()}else if((y&2)!==0)new P.ij(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.A(y).$isaV){if(y.a>=4){n=H.i(t.c,"$isaG")
t.c=null
b=t.aB(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.e7(y,t)
return}}m=b.b
n=H.i(m.c,"$isaG")
m.c=null
b=m.aB(n)
y=x.a
u=x.b
if(!y){H.w(u,H.u(m,0))
m.a=4
m.c=u}else{H.i(u,"$isa4")
m.a=8
m.c=u}z.a=m
y=m}}}},
ic:{"^":"q:2;a,b",
$0:function(){P.bg(this.a,this.b)}},
ii:{"^":"q:2;a,b",
$0:function(){P.bg(this.b,this.a.a)}},
ie:{"^":"q:12;a",
$1:function(a){var z=this.a
z.a=0
z.bt(a)}},
ig:{"^":"q:27;a",
$2:function(a,b){this.a.aJ(a,H.i(b,"$isaa"))},
$1:function(a){return this.$2(a,null)}},
ih:{"^":"q:2;a,b,c",
$0:function(){this.a.aJ(this.b,this.c)}},
il:{"^":"q:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bZ(H.b(w.d,{func:1}),null)}catch(v){y=H.ax(v)
x=H.aN(v)
if(this.d){w=H.i(this.a.a.c,"$isa4").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isa4")
else u.b=new P.a4(y,x)
u.a=!0
return}if(!!J.A(z).$isaV){if(z instanceof P.ao&&z.gbF()>=4){if(z.gbF()===8){w=this.b
w.b=H.i(z.gdc(),"$isa4")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.eb(new P.im(t),null)
w.a=!1}}},
im:{"^":"q:26;a",
$1:function(a){return this.a}},
ik:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.w(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.bd(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ax(t)
y=H.aN(t)
x=this.a
x.b=new P.a4(z,y)
x.a=!0}}},
ij:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isa4")
w=this.c
if(w.dM(z)&&w.e!=null){v=this.b
v.b=w.dH(z)
v.a=!1}}catch(u){y=H.ax(u)
x=H.aN(u)
w=H.i(this.a.a.c,"$isa4")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a4(y,x)
s.a=!0}}},
e5:{"^":"a;a,0b"},
cr:{"^":"a;$ti",
gj:function(a){var z,y
z={}
y=new P.ao(0,$.F,[P.O])
z.a=0
this.dL(new P.he(z,this),!0,new P.hf(z,y),y.gcA())
return y}},
he:{"^":"q;a,b",
$1:function(a){H.w(a,H.aM(this.b,"cr",0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.aM(this.b,"cr",0)]}}},
hf:{"^":"q:2;a,b",
$0:function(){this.b.bt(this.a.a)}},
dF:{"^":"a;$ti"},
aB:{"^":"a;"},
a4:{"^":"a;a,b",
i:function(a){return H.d(this.a)},
$isQ:1},
j2:{"^":"a;",$islx:1},
ji:{"^":"q:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dv()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
iH:{"^":"j2;",
e6:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.d===$.F){a.$0()
return}P.em(null,null,this,a,-1)}catch(x){z=H.ax(x)
y=H.aN(x)
P.bW(null,null,this,z,H.i(y,"$isaa"))}},
e7:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.d===$.F){a.$1(b)
return}P.en(null,null,this,a,b,-1,c)}catch(x){z=H.ax(x)
y=H.aN(x)
P.bW(null,null,this,z,H.i(y,"$isaa"))}},
dq:function(a,b){return new P.iJ(this,H.b(a,{func:1,ret:b}),b)},
bJ:function(a){return new P.iI(this,H.b(a,{func:1,ret:-1}))},
bK:function(a,b){return new P.iK(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
bZ:function(a,b){H.b(a,{func:1,ret:b})
if($.F===C.d)return a.$0()
return P.em(null,null,this,a,b)},
bd:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.F===C.d)return a.$1(b)
return P.en(null,null,this,a,b,c,d)},
e5:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.F===C.d)return a.$2(b,c)
return P.jj(null,null,this,a,b,c,d,e,f)},
e0:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
iJ:{"^":"q;a,b,c",
$0:function(){return this.a.bZ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
iI:{"^":"q:3;a,b",
$0:function(){return this.a.e6(this.b)}},
iK:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.e7(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fr:function(a,b,c){H.bC(a)
return H.y(H.ju(a,new H.cg(0,0,[b,c])),"$isdn",[b,c],"$asdn")},
fq:function(a,b){return new H.cg(0,0,[a,b])},
fs:function(a,b,c,d){return new P.it(0,0,[d])},
fg:function(a,b,c){var z,y
if(P.cG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bl()
C.a.h(y,a)
try{P.jf(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.dG(b,H.jF(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
cb:function(a,b,c){var z,y,x
if(P.cG(a))return b+"..."+c
z=new P.cs(b)
y=$.$get$bl()
C.a.h(y,a)
try{x=z
x.a=P.dG(x.gae(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gae()+c
y=z.gae()
return y.charCodeAt(0)==0?y:y},
cG:function(a){var z,y
for(z=0;y=$.$get$bl(),z<y.length;++z)if(a===y[z])return!0
return!1},
jf:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.d(z.gK(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gK(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gK(z);++x
for(;z.E();t=s,s=r){r=z.gK(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dq:function(a){var z,y,x
z={}
if(P.cG(a))return"{...}"
y=new P.cs("")
try{C.a.h($.$get$bl(),a)
x=y
x.a=x.gae()+"{"
z.a=!0
J.eI(a,new P.fy(z,y))
z=y
z.a=z.gae()+"}"}finally{z=$.$get$bl()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gae()
return z.charCodeAt(0)==0?z:z},
it:{"^":"io;a,0b,0c,0d,0e,0f,r,$ti",
gN:function(a){return P.ea(this,this.r,H.u(this,0))},
gj:function(a){return this.a},
h:function(a,b){var z,y
H.w(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cD()
this.b=z}return this.br(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cD()
this.c=y}return this.br(y,b)}else return this.cr(0,b)},
cr:function(a,b){var z,y,x
H.w(b,H.u(this,0))
z=this.d
if(z==null){z=P.cD()
this.d=z}y=this.bu(b)
x=z[y]
if(x==null)z[y]=[this.aI(b)]
else{if(this.bx(x,b)>=0)return!1
x.push(this.aI(b))}return!0},
P:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bA(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bA(this.c,b)
else return this.d8(0,b)},
d8:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.cG(z,b)
x=this.bx(y,b)
if(x<0)return!1
this.bH(y.splice(x,1)[0])
return!0},
br:function(a,b){H.w(b,H.u(this,0))
if(H.i(a[b],"$iscC")!=null)return!1
a[b]=this.aI(b)
return!0},
bA:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$iscC")
if(z==null)return!1
this.bH(z)
delete a[b]
return!0},
bs:function(){this.r=this.r+1&67108863},
aI:function(a){var z,y
z=new P.cC(H.w(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bs()
return z},
bH:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bs()},
bu:function(a){return J.aq(a)&0x3ffffff},
cG:function(a,b){return a[this.bu(b)]},
bx:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
q:{
cD:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cC:{"^":"a;a,0b,0c"},
iu:{"^":"a;a,b,0c,0d,$ti",
gK:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aS(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.w(z.a,H.u(this,0))
this.c=z.b
return!0}}},
q:{
ea:function(a,b,c){var z=new P.iu(a,b,[c])
z.c=a.e
return z}}},
io:{"^":"h6;"},
cj:{"^":"iv;",$ish:1,$isc:1},
p:{"^":"a;$ti",
gN:function(a){return new H.ft(a,this.gj(a),0,[H.bm(this,a,"p",0)])},
A:function(a,b){return this.k(a,b)},
ee:function(a,b){var z,y,x
z=H.f([],[H.bm(this,a,"p",0)])
C.a.sj(z,this.gj(a))
y=0
while(!0){x=this.gj(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.V(z,y,this.k(a,y));++y}return z},
ed:function(a){return this.ee(a,!0)},
i:function(a){return P.cb(a,"[","]")}},
fx:{"^":"a3;"},
fy:{"^":"q:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
a3:{"^":"a;$ti",
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bm(this,a,"a3",0),H.bm(this,a,"a3",1)]})
for(z=J.bE(this.ga9(a));z.E();){y=z.gK(z)
b.$2(y,this.k(a,y))}},
gj:function(a){return J.aP(this.ga9(a))},
i:function(a){return P.dq(a)},
$isX:1},
h7:{"^":"a;$ti",
i:function(a){return P.cb(this,"{","}")},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.cS("index"))
if(b<0)H.S(P.b3(b,0,null,"index",null))
for(z=P.ea(this,this.r,H.u(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.e(P.D(b,this,"index",null,y))},
$ish:1},
h6:{"^":"h7;"},
iv:{"^":"a+p;"}}],["","",,P,{"^":"",
f8:function(a){var z=J.A(a)
if(!!z.$isq)return z.i(a)
return"Instance of '"+H.aA(a)+"'"},
fu:function(a,b,c,d){var z,y
H.w(b,d)
z=J.fi(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.V(z,y,b)
return H.y(z,"$isc",[d],"$asc")},
fv:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.gN(a);x.E();)C.a.h(y,H.w(x.gK(x),c))
if(b)return y
return H.y(J.aY(y),"$isc",z,"$asc")},
bJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.Z(a)
if(typeof a==="string")return JSON.stringify(a)
return P.f8(a)},
U:function(a){return new P.e6(a)},
cQ:function(a){H.jK(a)},
ag:{"^":"a;"},
"+bool":0,
a8:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.a8))return!1
return this.a===b.a&&this.b===b.b},
gL:function(a){var z=this.a
return(z^C.b.bE(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.eZ(H.fW(this))
y=P.bn(H.fU(this))
x=P.bn(H.fQ(this))
w=P.bn(H.fR(this))
v=P.bn(H.fT(this))
u=P.bn(H.fV(this))
t=P.f_(H.fS(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
eZ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
f_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bn:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"K;"},
"+double":0,
bo:{"^":"a;a",
a0:function(a,b){return C.b.a0(this.a,H.i(b,"$isbo").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.bo))return!1
return this.a===b.a},
gL:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.f4()
y=this.a
if(y<0)return"-"+new P.bo(0-y).i(0)
x=z.$1(C.b.ar(y,6e7)%60)
w=z.$1(C.b.ar(y,1e6)%60)
v=new P.f3().$1(y%1e6)
return""+C.b.ar(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
q:{
db:function(a,b,c,d,e,f){return new P.bo(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
f3:{"^":"q:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
f4:{"^":"q:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Q:{"^":"a;"},
dv:{"^":"Q;",
i:function(a){return"Throw of null."}},
ar:{"^":"Q;a,b,c,d",
gaL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaK:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gaL()+y+x
if(!this.a)return w
v=this.gaK()
u=P.bJ(this.b)
return w+v+": "+H.d(u)},
q:{
eJ:function(a){return new P.ar(!1,null,null,a)},
bF:function(a,b,c){return new P.ar(!0,a,b,c)},
cS:function(a){return new P.ar(!1,null,a,"Must not be null")}}},
dy:{"^":"ar;e,f,a,b,c,d",
gaL:function(){return"RangeError"},
gaK:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
q:{
co:function(a,b,c){return new P.dy(null,null,!0,a,b,"Value not in range")},
b3:function(a,b,c,d,e){return new P.dy(b,c,!0,a,d,"Invalid value")}}},
ff:{"^":"ar;e,j:f>,a,b,c,d",
gaL:function(){return"RangeError"},
gaK:function(){if(J.eF(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.d(z)},
q:{
D:function(a,b,c,d,e){var z=H.R(e!=null?e:J.aP(b))
return new P.ff(b,z,!0,a,c,"Index out of range")}}},
hE:{"^":"Q;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
a5:function(a){return new P.hE(a)}}},
hC:{"^":"Q;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
e0:function(a){return new P.hC(a)}}},
hb:{"^":"Q;a",
i:function(a){return"Bad state: "+this.a}},
eV:{"^":"Q;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.bJ(z))+"."},
q:{
aS:function(a){return new P.eV(a)}}},
fM:{"^":"a;",
i:function(a){return"Out of Memory"},
$isQ:1},
dE:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isQ:1},
eY:{"^":"Q;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
e6:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
O:{"^":"K;"},
"+int":0,
h:{"^":"a;$ti",
gj:function(a){var z,y
z=this.gN(this)
for(y=0;z.E();)++y
return y},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.cS("index"))
if(b<0)H.S(P.b3(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.E();){x=z.gK(z)
if(b===y)return x;++y}throw H.e(P.D(b,this,"index",null,y))},
i:function(a){return P.fg(this,"(",")")}},
cc:{"^":"a;$ti"},
c:{"^":"a;$ti",$ish:1},
"+List":0,
X:{"^":"a;$ti"},
z:{"^":"a;",
gL:function(a){return P.a.prototype.gL.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
K:{"^":"a;"},
"+num":0,
a:{"^":";",
p:function(a,b){return this===b},
gL:function(a){return H.b2(this)},
i:function(a){return"Instance of '"+H.aA(this)+"'"},
toString:function(){return this.i(this)}},
aa:{"^":"a;"},
m:{"^":"a;",$isfN:1},
"+String":0,
cs:{"^":"a;ae:a<",
gj:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
dG:function(a,b,c){var z=J.bE(b)
if(!z.E())return a
if(c.length===0){do a+=H.d(z.gK(z))
while(z.E())}else{a+=H.d(z.gK(z))
for(;z.E();)a=a+c+H.d(z.gK(z))}return a}}}}],["","",,W,{"^":"",
c7:function(a,b){var z=document.createElement("canvas")
return z},
f6:function(a){H.i(a,"$isW")
return"wheel"},
bT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e9:function(a,b,c,d){var z,y
z=W.bT(W.bT(W.bT(W.bT(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eq:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.d)return a
return z.bK(a,b)},
az:{"^":"T;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
jX:{"^":"cq;0m:x=,0n:y=","%":"Accelerometer|LinearAccelerationSensor"},
jY:{"^":"k;0j:length=","%":"AccessibleNodeList"},
jZ:{"^":"az;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
k_:{"^":"az;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
eN:{"^":"k;","%":";Blob"},
c6:{"^":"az;",
aE:function(a,b,c){if(c!=null)return a.getContext(b,P.jp(c,null))
return a.getContext(b)},
c7:function(a,b){return this.aE(a,b,null)},
$isc6:1,
"%":"HTMLCanvasElement"},
d_:{"^":"k;",$isd_:1,"%":"CanvasRenderingContext2D"},
k5:{"^":"B;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
k7:{"^":"bI;0j:length=","%":"CSSPerspective"},
k8:{"^":"c9;0m:x=,0n:y=","%":"CSSPositionValue"},
k9:{"^":"bI;0m:x=,0n:y=","%":"CSSRotation"},
aT:{"^":"k;",$isaT:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ka:{"^":"bI;0m:x=,0n:y=","%":"CSSScale"},
eW:{"^":"i2;0j:length=",
c8:function(a,b){var z=a.getPropertyValue(this.bq(a,b))
return z==null?"":z},
bq:function(a,b){var z,y
z=$.$get$d4()
y=z[b]
if(typeof y==="string")return y
y=this.dh(a,b)
z[b]=y
return y},
dh:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.f0()+b
if(z in a)return z
return b},
dd:function(a,b,c,d){a.setProperty(b,c,d)},
gaY:function(a){return a.bottom},
ga3:function(a){return a.height},
gal:function(a){return a.left},
gbc:function(a){return a.right},
gaz:function(a){return a.top},
ga5:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eX:{"^":"a;",
gal:function(a){return this.c8(a,"left")}},
c9:{"^":"k;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bI:{"^":"k;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kb:{"^":"c9;0j:length=","%":"CSSTransformValue"},
kc:{"^":"bI;0m:x=,0n:y=","%":"CSSTranslation"},
kd:{"^":"c9;0j:length=","%":"CSSUnparsedValue"},
ke:{"^":"k;0j:length=","%":"DataTransferItemList"},
kf:{"^":"k;0m:x=,0n:y=","%":"DeviceAcceleration"},
kg:{"^":"k;",
i:function(a){return String(a)},
"%":"DOMException"},
kh:{"^":"f1;",
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"DOMPoint"},
f1:{"^":"k;",
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":";DOMPointReadOnly"},
ki:{"^":"i4;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.a2,P.K]]},
$asp:function(){return[[P.a2,P.K]]},
$ish:1,
$ash:function(){return[[P.a2,P.K]]},
$isc:1,
$asc:function(){return[[P.a2,P.K]]},
$asr:function(){return[[P.a2,P.K]]},
"%":"ClientRectList|DOMRectList"},
f2:{"^":"k;",
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.ga5(a))+" x "+H.d(this.ga3(a))},
p:function(a,b){var z
if(b==null)return!1
z=H.aJ(b,"$isa2",[P.K],"$asa2")
if(!z)return!1
z=J.bB(b)
return a.left===z.gal(b)&&a.top===z.gaz(b)&&this.ga5(a)===z.ga5(b)&&this.ga3(a)===z.ga3(b)},
gL:function(a){return W.e9(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga5(a)&0x1FFFFFFF,this.ga3(a)&0x1FFFFFFF)},
gaY:function(a){return a.bottom},
ga3:function(a){return a.height},
gal:function(a){return a.left},
gbc:function(a){return a.right},
gaz:function(a){return a.top},
ga5:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa2:1,
$asa2:function(){return[P.K]},
"%":";DOMRectReadOnly"},
kj:{"^":"i6;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.m]},
$asp:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$asr:function(){return[P.m]},
"%":"DOMStringList"},
kk:{"^":"k;0j:length=","%":"DOMTokenList"},
i1:{"^":"cj;a,b",
gj:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return H.i(z[b],"$isT")},
h:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var z=this.ed(this)
return new J.ah(z,z.length,0,[H.u(z,0)])},
$asp:function(){return[W.T]},
$ash:function(){return[W.T]},
$asc:function(){return[W.T]}},
T:{"^":"B;",
gbL:function(a){return new W.i1(a,a.children)},
gaD:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.a0()
if(x<0)x=-x*0
if(typeof w!=="number")return w.a0()
if(w<0)w=-w*0
return new P.a2(z,y,x,w,[P.K])},
i:function(a){return a.localName},
$isT:1,
"%":";Element"},
a_:{"^":"k;",$isa_:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
W:{"^":"k;",
bI:["cd",function(a,b,c,d){H.b(c,{func:1,args:[W.a_]})
if(c!=null)this.cs(a,b,c,!1)}],
cs:function(a,b,c,d){return a.addEventListener(b,H.aK(H.b(c,{func:1,args:[W.a_]}),1),!1)},
$isW:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ef|eg|ei|ej"},
aU:{"^":"eN;",$isaU:1,"%":"File"},
kD:{"^":"ib;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aU]},
$asp:function(){return[W.aU]},
$ish:1,
$ash:function(){return[W.aU]},
$isc:1,
$asc:function(){return[W.aU]},
$asr:function(){return[W.aU]},
"%":"FileList"},
kE:{"^":"W;0j:length=","%":"FileWriter"},
kH:{"^":"az;0j:length=","%":"HTMLFormElement"},
aW:{"^":"k;",$isaW:1,"%":"Gamepad"},
kI:{"^":"cq;0m:x=,0n:y=","%":"Gyroscope"},
kJ:{"^":"k;0j:length=","%":"History"},
kK:{"^":"iq;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.B]},
$asp:function(){return[W.B]},
$ish:1,
$ash:function(){return[W.B]},
$isc:1,
$asc:function(){return[W.B]},
$asr:function(){return[W.B]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bL:{"^":"k;0bN:data=",$isbL:1,"%":"ImageData"},
df:{"^":"az;",$isdf:1,"%":"HTMLImageElement"},
aZ:{"^":"cv;",$isaZ:1,"%":"KeyboardEvent"},
kP:{"^":"k;",
i:function(a){return String(a)},
"%":"Location"},
kQ:{"^":"cq;0m:x=,0n:y=","%":"Magnetometer"},
kS:{"^":"k;0j:length=","%":"MediaList"},
kT:{"^":"W;",
bI:function(a,b,c,d){H.b(c,{func:1,args:[W.a_]})
if(b==="message")a.start()
this.cd(a,b,c,!1)},
"%":"MessagePort"},
kU:{"^":"iw;",
k:function(a,b){return P.ap(a.get(H.L(b)))},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ap(y.value[1]))}},
ga9:function(a){var z=H.f([],[P.m])
this.I(a,new W.fC(z))
return z},
gj:function(a){return a.size},
$asa3:function(){return[P.m,null]},
$isX:1,
$asX:function(){return[P.m,null]},
"%":"MIDIInputMap"},
fC:{"^":"q:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
kV:{"^":"ix;",
k:function(a,b){return P.ap(a.get(H.L(b)))},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ap(y.value[1]))}},
ga9:function(a){var z=H.f([],[P.m])
this.I(a,new W.fD(z))
return z},
gj:function(a){return a.size},
$asa3:function(){return[P.m,null]},
$isX:1,
$asX:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
fD:{"^":"q:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b_:{"^":"k;",$isb_:1,"%":"MimeType"},
kW:{"^":"iz;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b_]},
$asp:function(){return[W.b_]},
$ish:1,
$ash:function(){return[W.b_]},
$isc:1,
$asc:function(){return[W.b_]},
$asr:function(){return[W.b_]},
"%":"MimeTypeArray"},
ad:{"^":"cv;",$isad:1,"%":"PointerEvent;DragEvent|MouseEvent"},
i0:{"^":"cj;a",
gN:function(a){var z=this.a.childNodes
return new W.dc(z,z.length,-1,[H.bm(C.E,z,"r",0)])},
gj:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
$asp:function(){return[W.B]},
$ash:function(){return[W.B]},
$asc:function(){return[W.B]}},
B:{"^":"W;",
i:function(a){var z=a.nodeValue
return z==null?this.ce(a):z},
$isB:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
fH:{"^":"iB;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.B]},
$asp:function(){return[W.B]},
$ish:1,
$ash:function(){return[W.B]},
$isc:1,
$asc:function(){return[W.B]},
$asr:function(){return[W.B]},
"%":"NodeList|RadioNodeList"},
b1:{"^":"k;0j:length=",$isb1:1,"%":"Plugin"},
l6:{"^":"iF;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b1]},
$asp:function(){return[W.b1]},
$ish:1,
$ash:function(){return[W.b1]},
$isc:1,
$asc:function(){return[W.b1]},
$asr:function(){return[W.b1]},
"%":"PluginArray"},
lb:{"^":"iL;",
k:function(a,b){return P.ap(a.get(H.L(b)))},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ap(y.value[1]))}},
ga9:function(a){var z=H.f([],[P.m])
this.I(a,new W.h3(z))
return z},
gj:function(a){return a.size},
$asa3:function(){return[P.m,null]},
$isX:1,
$asX:function(){return[P.m,null]},
"%":"RTCStatsReport"},
h3:{"^":"q:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ld:{"^":"az;0j:length=","%":"HTMLSelectElement"},
cq:{"^":"W;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
b4:{"^":"W;",$isb4:1,"%":"SourceBuffer"},
le:{"^":"eg;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b4]},
$asp:function(){return[W.b4]},
$ish:1,
$ash:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asr:function(){return[W.b4]},
"%":"SourceBufferList"},
b5:{"^":"k;",$isb5:1,"%":"SpeechGrammar"},
lf:{"^":"iN;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b5]},
$asp:function(){return[W.b5]},
$ish:1,
$ash:function(){return[W.b5]},
$isc:1,
$asc:function(){return[W.b5]},
$asr:function(){return[W.b5]},
"%":"SpeechGrammarList"},
b6:{"^":"k;0j:length=",$isb6:1,"%":"SpeechRecognitionResult"},
lh:{"^":"iQ;",
k:function(a,b){return a.getItem(H.L(b))},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga9:function(a){var z=H.f([],[P.m])
this.I(a,new W.hd(z))
return z},
gj:function(a){return a.length},
$asa3:function(){return[P.m,P.m]},
$isX:1,
$asX:function(){return[P.m,P.m]},
"%":"Storage"},
hd:{"^":"q:25;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b7:{"^":"k;",$isb7:1,"%":"CSSStyleSheet|StyleSheet"},
b8:{"^":"az;",$isb8:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
b9:{"^":"W;",$isb9:1,"%":"TextTrack"},
ba:{"^":"W;",$isba:1,"%":"TextTrackCue|VTTCue"},
lm:{"^":"iU;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ba]},
$asp:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asr:function(){return[W.ba]},
"%":"TextTrackCueList"},
ln:{"^":"ej;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b9]},
$asp:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asr:function(){return[W.b9]},
"%":"TextTrackList"},
lo:{"^":"k;0j:length=","%":"TimeRanges"},
bb:{"^":"k;",$isbb:1,"%":"Touch"},
aC:{"^":"cv;",$isaC:1,"%":"TouchEvent"},
lp:{"^":"j_;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bb]},
$asp:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asr:function(){return[W.bb]},
"%":"TouchList"},
lq:{"^":"k;0j:length=","%":"TrackDefaultList"},
cv:{"^":"a_;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lt:{"^":"k;",
i:function(a){return String(a)},
"%":"URL"},
lv:{"^":"k;0m:x=","%":"VRStageBoundsPoint"},
lw:{"^":"W;0j:length=","%":"VideoTrackList"},
bf:{"^":"ad;",
gdB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.a5("deltaY is not supported"))},
gdA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.a5("deltaX is not supported"))},
$isbf:1,
"%":"WheelEvent"},
hU:{"^":"W;",
d9:function(a,b){return a.requestAnimationFrame(H.aK(H.b(b,{func:1,ret:-1,args:[P.K]}),1))},
cF:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lB:{"^":"j4;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aT]},
$asp:function(){return[W.aT]},
$ish:1,
$ash:function(){return[W.aT]},
$isc:1,
$asc:function(){return[W.aT]},
$asr:function(){return[W.aT]},
"%":"CSSRuleList"},
lC:{"^":"f2;",
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
p:function(a,b){var z
if(b==null)return!1
z=H.aJ(b,"$isa2",[P.K],"$asa2")
if(!z)return!1
z=J.bB(b)
return a.left===z.gal(b)&&a.top===z.gaz(b)&&a.width===z.ga5(b)&&a.height===z.ga3(b)},
gL:function(a){return W.e9(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga3:function(a){return a.height},
ga5:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
lE:{"^":"j6;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aW]},
$asp:function(){return[W.aW]},
$ish:1,
$ash:function(){return[W.aW]},
$isc:1,
$asc:function(){return[W.aW]},
$asr:function(){return[W.aW]},
"%":"GamepadList"},
lF:{"^":"j8;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.B]},
$asp:function(){return[W.B]},
$ish:1,
$ash:function(){return[W.B]},
$isc:1,
$asc:function(){return[W.B]},
$asr:function(){return[W.B]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lG:{"^":"ja;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b6]},
$asp:function(){return[W.b6]},
$ish:1,
$ash:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asr:function(){return[W.b6]},
"%":"SpeechRecognitionResultList"},
lH:{"^":"jc;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b7]},
$asp:function(){return[W.b7]},
$ish:1,
$ash:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asr:function(){return[W.b7]},
"%":"StyleSheetList"},
i7:{"^":"cr;a,b,c,$ti",
dL:function(a,b,c,d){var z=H.u(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.P(this.a,this.b,a,!1,z)}},
lD:{"^":"i7;a,b,c,$ti"},
i8:{"^":"dF;a,b,c,d,e,$ti",
dl:function(){var z=this.d
if(z!=null&&this.a<=0)J.eH(this.b,this.c,z,!1)},
q:{
P:function(a,b,c,d,e){var z=c==null?null:W.eq(new W.i9(c),W.a_)
z=new W.i8(0,a,b,z,!1,[e])
z.dl()
return z}}},
i9:{"^":"q:4;a",
$1:function(a){return this.a.$1(H.i(a,"$isa_"))}},
r:{"^":"a;$ti",
gN:function(a){return new W.dc(a,this.gj(a),-1,[H.bm(this,a,"r",0)])}},
dc:{"^":"a;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.eG(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gK:function(a){return this.d}},
i2:{"^":"k+eX;"},
i3:{"^":"k+p;"},
i4:{"^":"i3+r;"},
i5:{"^":"k+p;"},
i6:{"^":"i5+r;"},
ia:{"^":"k+p;"},
ib:{"^":"ia+r;"},
ip:{"^":"k+p;"},
iq:{"^":"ip+r;"},
iw:{"^":"k+a3;"},
ix:{"^":"k+a3;"},
iy:{"^":"k+p;"},
iz:{"^":"iy+r;"},
iA:{"^":"k+p;"},
iB:{"^":"iA+r;"},
iE:{"^":"k+p;"},
iF:{"^":"iE+r;"},
iL:{"^":"k+a3;"},
ef:{"^":"W+p;"},
eg:{"^":"ef+r;"},
iM:{"^":"k+p;"},
iN:{"^":"iM+r;"},
iQ:{"^":"k+a3;"},
iT:{"^":"k+p;"},
iU:{"^":"iT+r;"},
ei:{"^":"W+p;"},
ej:{"^":"ei+r;"},
iZ:{"^":"k+p;"},
j_:{"^":"iZ+r;"},
j3:{"^":"k+p;"},
j4:{"^":"j3+r;"},
j5:{"^":"k+p;"},
j6:{"^":"j5+r;"},
j7:{"^":"k+p;"},
j8:{"^":"j7+r;"},
j9:{"^":"k+p;"},
ja:{"^":"j9+r;"},
jb:{"^":"k+p;"},
jc:{"^":"jb+r;"}}],["","",,P,{"^":"",
js:function(a){var z,y
z=J.A(a)
if(!!z.$isbL){y=z.gbN(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.el(a.data,a.height,a.width)},
jr:function(a){if(a instanceof P.el)return{data:a.a,height:a.b,width:a.c}
return a},
ap:function(a){var z,y,x,w,v
if(a==null)return
z=P.fq(P.m,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.L(y[w])
z.V(0,v,a[v])}return z},
jp:function(a,b){var z={}
a.I(0,new P.jq(z))
return z},
da:function(){var z=$.d9
if(z==null){z=J.c2(window.navigator.userAgent,"Opera",0)
$.d9=z}return z},
f0:function(){var z,y
z=$.d6
if(z!=null)return z
y=$.d7
if(y==null){y=J.c2(window.navigator.userAgent,"Firefox",0)
$.d7=y}if(y)z="-moz-"
else{y=$.d8
if(y==null){y=!P.da()&&J.c2(window.navigator.userAgent,"Trident/",0)
$.d8=y}if(y)z="-ms-"
else z=P.da()?"-o-":"-webkit-"}$.d6=z
return z},
el:{"^":"a;bN:a>,b,c",$isbL:1},
jq:{"^":"q:16;a",
$2:function(a,b){this.a[a]=b}},
fa:{"^":"cj;a,b",
gaN:function(){var z,y,x
z=this.b
y=H.aM(z,"p",0)
x=W.T
return new H.fz(new H.hS(z,H.b(new P.fb(),{func:1,ret:P.ag,args:[y]}),[y]),H.b(new P.fc(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.aP(this.gaN().a)},
k:function(a,b){var z=this.gaN()
return z.b.$1(J.cR(z.a,b))},
gN:function(a){var z=P.fv(this.gaN(),!1,W.T)
return new J.ah(z,z.length,0,[H.u(z,0)])},
$asp:function(){return[W.T]},
$ash:function(){return[W.T]},
$asc:function(){return[W.T]}},
fb:{"^":"q:23;",
$1:function(a){return!!J.A(H.i(a,"$isB")).$isT}},
fc:{"^":"q:34;",
$1:function(a){return H.V(H.i(a,"$isB"),"$isT")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e8:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bw:{"^":"a;m:a>,n:b>,$ti",
i:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
p:function(a,b){var z,y,x
if(b==null)return!1
z=H.aJ(b,"$isbw",[P.K],null)
if(!z)return!1
z=this.a
y=J.bB(b)
x=y.gm(b)
if(z==null?x==null:z===x){z=this.b
y=y.gn(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gL:function(a){var z,y
z=J.aq(this.a)
y=J.aq(this.b)
return P.e8(P.bh(P.bh(0,z),y))}},
iG:{"^":"a;$ti",
gbc:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.w(z+this.c,H.u(this,0))},
gaY:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.w(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.d(this.a)+", "+H.d(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.aJ(b,"$isa2",[P.K],"$asa2")
if(!z)return!1
z=this.a
y=J.bB(b)
x=y.gal(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaz(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.u(this,0)
if(H.w(z+this.c,w)===y.gbc(b)){if(typeof x!=="number")return x.B()
z=H.w(x+this.d,w)===y.gaY(b)}else z=!1}else z=!1}else z=!1
return z},
gL:function(a){var z,y,x,w,v
z=this.a
y=J.aq(z)
x=this.b
w=J.aq(x)
if(typeof z!=="number")return z.B()
v=H.u(this,0)
z=H.w(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.w(x+this.d,v)
return P.e8(P.bh(P.bh(P.bh(P.bh(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
bM:function(a,b){var z,y
H.y(b,"$isbw",[P.K],"$asbw")
z=b.a
y=this.a
if(typeof z!=="number")return z.c6()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.c6()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a2:{"^":"iG;al:a>,az:b>,a5:c>,a3:d>,$ti"}}],["","",,P,{"^":"",kl:{"^":"I;0m:x=,0n:y=","%":"SVGFEBlendElement"},km:{"^":"I;0m:x=,0n:y=","%":"SVGFEColorMatrixElement"},kn:{"^":"I;0m:x=,0n:y=","%":"SVGFEComponentTransferElement"},ko:{"^":"I;0m:x=,0n:y=","%":"SVGFECompositeElement"},kp:{"^":"I;0m:x=,0n:y=","%":"SVGFEConvolveMatrixElement"},kq:{"^":"I;0m:x=,0n:y=","%":"SVGFEDiffuseLightingElement"},kr:{"^":"I;0m:x=,0n:y=","%":"SVGFEDisplacementMapElement"},ks:{"^":"I;0m:x=,0n:y=","%":"SVGFEFloodElement"},kt:{"^":"I;0m:x=,0n:y=","%":"SVGFEGaussianBlurElement"},ku:{"^":"I;0m:x=,0n:y=","%":"SVGFEImageElement"},kv:{"^":"I;0m:x=,0n:y=","%":"SVGFEMergeElement"},kw:{"^":"I;0m:x=,0n:y=","%":"SVGFEMorphologyElement"},kx:{"^":"I;0m:x=,0n:y=","%":"SVGFEOffsetElement"},ky:{"^":"I;0m:x=,0n:y=","%":"SVGFEPointLightElement"},kz:{"^":"I;0m:x=,0n:y=","%":"SVGFESpecularLightingElement"},kA:{"^":"I;0m:x=,0n:y=","%":"SVGFESpotLightElement"},kB:{"^":"I;0m:x=,0n:y=","%":"SVGFETileElement"},kC:{"^":"I;0m:x=,0n:y=","%":"SVGFETurbulenceElement"},kF:{"^":"I;0m:x=,0n:y=","%":"SVGFilterElement"},kG:{"^":"aX;0m:x=,0n:y=","%":"SVGForeignObjectElement"},fe:{"^":"aX;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aX:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},kL:{"^":"aX;0m:x=,0n:y=","%":"SVGImageElement"},bt:{"^":"k;",$isbt:1,"%":"SVGLength"},kO:{"^":"is;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.k(a,b)},
$asp:function(){return[P.bt]},
$ish:1,
$ash:function(){return[P.bt]},
$isc:1,
$asc:function(){return[P.bt]},
$asr:function(){return[P.bt]},
"%":"SVGLengthList"},kR:{"^":"I;0m:x=,0n:y=","%":"SVGMaskElement"},bv:{"^":"k;",$isbv:1,"%":"SVGNumber"},l3:{"^":"iD;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.k(a,b)},
$asp:function(){return[P.bv]},
$ish:1,
$ash:function(){return[P.bv]},
$isc:1,
$asc:function(){return[P.bv]},
$asr:function(){return[P.bv]},
"%":"SVGNumberList"},l5:{"^":"I;0m:x=,0n:y=","%":"SVGPatternElement"},l7:{"^":"k;0m:x=,0n:y=","%":"SVGPoint"},l8:{"^":"k;0j:length=","%":"SVGPointList"},l9:{"^":"k;0m:x=,0n:y=","%":"SVGRect"},la:{"^":"fe;0m:x=,0n:y=","%":"SVGRectElement"},li:{"^":"iS;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.k(a,b)},
$asp:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$asr:function(){return[P.m]},
"%":"SVGStringList"},I:{"^":"T;",
gbL:function(a){return new P.fa(a,new W.i0(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lj:{"^":"aX;0m:x=,0n:y=","%":"SVGSVGElement"},hg:{"^":"aX;","%":"SVGTextPathElement;SVGTextContentElement"},ll:{"^":"hg;0m:x=,0n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bx:{"^":"k;",$isbx:1,"%":"SVGTransform"},lr:{"^":"j1;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.k(a,b)},
$asp:function(){return[P.bx]},
$ish:1,
$ash:function(){return[P.bx]},
$isc:1,
$asc:function(){return[P.bx]},
$asr:function(){return[P.bx]},
"%":"SVGTransformList"},lu:{"^":"aX;0m:x=,0n:y=","%":"SVGUseElement"},ir:{"^":"k+p;"},is:{"^":"ir+r;"},iC:{"^":"k+p;"},iD:{"^":"iC+r;"},iR:{"^":"k+p;"},iS:{"^":"iR+r;"},j0:{"^":"k+p;"},j1:{"^":"j0+r;"}}],["","",,P,{"^":"",k0:{"^":"k;0j:length=","%":"AudioBuffer"},k1:{"^":"i_;",
k:function(a,b){return P.ap(a.get(H.L(b)))},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ap(y.value[1]))}},
ga9:function(a){var z=H.f([],[P.m])
this.I(a,new P.eL(z))
return z},
gj:function(a){return a.size},
$asa3:function(){return[P.m,null]},
$isX:1,
$asX:function(){return[P.m,null]},
"%":"AudioParamMap"},eL:{"^":"q:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},k2:{"^":"W;0j:length=","%":"AudioTrackList"},eM:{"^":"W;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},l4:{"^":"eM;0j:length=","%":"OfflineAudioContext"},i_:{"^":"k+a3;"}}],["","",,P,{"^":"",cp:{"^":"k;",
e9:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$isbL)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.jr(g))
return}if(!!z.$isdf)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.e(P.eJ("Incorrect number or type of arguments"))},
e8:function(a,b,c,d,e,f,g){return this.e9(a,b,c,d,e,f,g,null,null,null)},
$iscp:1,
"%":"WebGLRenderingContext"},hh:{"^":"k;",$ishh:1,"%":"WebGLTexture"},hA:{"^":"k;",$ishA:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lg:{"^":"iP;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return P.ap(a.item(b))},
A:function(a,b){return this.k(a,b)},
$asp:function(){return[[P.X,,,]]},
$ish:1,
$ash:function(){return[[P.X,,,]]},
$isc:1,
$asc:function(){return[[P.X,,,]]},
$asr:function(){return[[P.X,,,]]},
"%":"SQLResultSetRowList"},iO:{"^":"k+p;"},iP:{"^":"iO+r;"}}],["","",,O,{"^":"",ay:{"^":"a;0a,0b,0c,0d,$ti",
bi:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
cb:function(a,b,c){var z={func:1,ret:-1,args:[P.O,[P.h,H.aM(this,"ay",0)]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aF:function(a,b){return this.cb(a,null,b)},
d3:function(a){H.y(a,"$ish",[H.aM(this,"ay",0)],"$ash")
return!0},
ck:function(a,b){var z
H.y(b,"$ish",[H.aM(this,"ay",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gj:function(a){return this.a.length},
gN:function(a){var z=this.a
return new J.ah(z,z.length,0,[H.u(z,0)])},
A:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aM(this,"ay",0)
H.w(b,z)
z=[z]
if(this.d3(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ck(x,H.f([b],z))}},
$ish:1,
q:{
d2:function(a){var z=new O.ay([a])
z.bi(a)
return z}}},ck:{"^":"a;0a,0b",
gj:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
cl:function(a){var z=this.b
if(!(z==null))z.v(a)},
ac:function(){return this.cl(null)},
gaa:function(a){var z=this.a
if(z.length>0)return C.a.gb5(z)
else return V.bu()},
bX:function(a){var z=this.a
if(a==null)C.a.h(z,V.bu())
else C.a.h(z,a)
this.ac()},
bb:function(){var z=this.a
if(z.length>0){z.pop()
this.ac()}}}}],["","",,E,{"^":"",c3:{"^":"a;"},as:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0O:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbf:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gu()
y.toString
x=H.b(this.gbV(),{func:1,ret:-1,args:[D.n]})
C.a.P(y.a,x)}y=this.c
if(y!=null){y=y.gu()
y.toString
x=H.b(this.gbV(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}w=new D.E("shape",z,this.c,this,[F.dC])
w.b=!0
this.Z(w)}},
sav:function(a){var z,y,x,w
if(!J.M(this.r,a)){z=this.r
if(z!=null){y=z.gu()
y.toString
x=H.b(this.gbU(),{func:1,ret:-1,args:[D.n]})
C.a.P(y.a,x)}if(a!=null){y=a.gu()
y.toString
x=H.b(this.gbU(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}this.r=a
w=new D.E("mover",z,a,this,[U.a0])
w.b=!0
this.Z(w)}},
an:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.ao(0,b,this):null
if(!J.M(y,this.x)){x=this.x
this.x=y
w=new D.E("matrix",x,y,this,[V.bO])
w.b=!0
this.Z(w)}for(z=this.y.a,z=new J.ah(z,z.length,0,[H.u(z,0)]);z.E();)z.d.an(0,b)},
am:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaa(z))
else C.a.h(z.a,y.l(0,z.gaa(z)))
z.ac()
a.bY(this.f)
z=a.dy
x=(z&&C.a).gb5(z)
if(x!=null&&this.d!=null)x.e2(a,this)
for(z=this.y.a,z=new J.ah(z,z.length,0,[H.u(z,0)]);z.E();)z.d.am(a)
a.bW()
a.dx.bb()},
gu:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
Z:function(a){var z=this.z
if(!(z==null))z.v(a)},
S:function(){return this.Z(null)},
dS:[function(a){H.i(a,"$isn")
this.e=null
this.Z(a)},function(){return this.dS(null)},"eN","$1","$0","gbV",0,2,1],
dR:[function(a){this.Z(H.i(a,"$isn"))},function(){return this.dR(null)},"eM","$1","$0","gbU",0,2,1],
dP:[function(a){this.Z(H.i(a,"$isn"))},function(){return this.dP(null)},"eK","$1","$0","gbT",0,2,1],
eJ:[function(a,b){var z,y,x,w,v,u,t
H.y(b,"$ish",[E.as],"$ash")
for(z=b.length,y=this.gbT(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gO()==null){t=new D.bp()
t.a=H.f([],w)
t.c=0
u.sO(t)}t=u.gO()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.S()},"$2","gdO",8,0,8],
eL:[function(a,b){var z,y,x,w,v,u,t
H.y(b,"$ish",[E.as],"$ash")
for(z=b.length,y=this.gbT(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gO()==null){t=new D.bp()
t.a=H.f([],w)
t.c=0
u.sO(t)}t=u.gO()
t.toString
H.b(y,x)
C.a.P(t.a,y)}}this.S()},"$2","gdQ",8,0,8],
$isds:1},fZ:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ci:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.a8(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.ck()
y=[V.bO]
z.a=H.f([],y)
x=z.gu()
x.toString
w={func:1,ret:-1,args:[D.n]}
v=H.b(new E.h0(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.ck()
z.a=H.f([],y)
v=z.gu()
v.toString
x=H.b(new E.h1(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.ck()
z.a=H.f([],y)
y=z.gu()
y.toString
w=H.b(new E.h2(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.ct])
this.dy=z
C.a.h(z,null)
this.fr=new H.cg(0,0,[P.m,A.dB])},
bY:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gb5(z):a;(z&&C.a).h(z,y)},
bW:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
h_:function(a,b){var z=new E.fZ(a,b)
z.ci(a,b)
return z}}},h0:{"^":"q:11;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.z=null
z.ch=null}},h1:{"^":"q:11;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},h2:{"^":"q:11;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.ch=null
z.cx=null}},hk:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0O:x@,0y,0z,0Q,0ch",
gu:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
cn:[function(a){var z
H.i(a,"$isn")
z=this.x
if(!(z==null))z.v(a)
this.e3()},function(){return this.cn(null)},"cm","$1","$0","gbj",0,2,1],
gdG:function(){var z,y,x
z=Date.now()
y=C.b.ar(P.db(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.a8(z,!1)
return x/y},
bB:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.o(z)
x=C.e.b4(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.e.b4(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
e3:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.hm(this),{func:1,ret:-1,args:[P.K]})
C.r.cF(z)
C.r.d9(z,W.eq(y,P.K))}},
e1:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.bB()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.a8(w,!1)
x.y=P.db(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sj(w.a,0)
w.ac()
w=x.db
C.a.sj(w.a,0)
w.ac()
w=x.dx
C.a.sj(w.a,0)
w.ac()
w=x.dy;(w&&C.a).sj(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.am(this.e)}}catch(v){z=H.ax(v)
y=H.aN(v)
P.cQ("Error: "+H.d(z))
P.cQ("Stack: "+H.d(y))
throw H.e(z)}},
q:{
hl:function(a,b,c,d,e){var z,y,x,w
z=J.A(a)
if(!!z.$isc6)return E.dK(a,!0,!0,!0,!1)
y=W.c7(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbL(a).h(0,y)
w=E.dK(y,!0,!0,!0,!1)
w.a=a
return w},
dK:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hk()
y=P.fr(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.f.aE(a,"webgl",y)
x=H.i(x==null?C.f.aE(a,"experimental-webgl",y):x,"$iscp")
if(x==null)H.S(P.U("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.h_(x,a)
w=new T.hi(x)
w.b=H.R(x.getParameter(3379))
w.c=H.R(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.hF(a)
v=new X.fm()
v.c=new X.ac(!1,!1,!1)
v.d=P.fs(null,null,null,P.O)
w.b=v
v=new X.fE(w)
v.f=0
v.r=new V.N(0,0)
v.x=new V.N(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fw(w)
v.r=0
v.x=new V.N(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ho(w)
v.e=0
v.f=new V.N(0,0)
v.r=new V.N(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.dF,P.a]])
w.z=v
u=document
t=W.ad
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.P(u,"contextmenu",H.b(w.gcS(),s),!1,t))
v=w.z
r=W.a_
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.P(a,"focus",H.b(w.gcV(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.P(a,"blur",H.b(w.gcP(),q),!1,r))
v=w.z
p=W.aZ
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.P(u,"keyup",H.b(w.gcX(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.P(u,"keydown",H.b(w.gcW(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.P(a,"mousedown",H.b(w.gcZ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.P(a,"mouseup",H.b(w.gd0(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.P(a,"mousemove",H.b(w.gd_(),s),!1,t))
p=w.z
o=W.bf;(p&&C.a).h(p,W.P(a,H.L(W.f6(a)),H.b(w.gd1(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.P(u,"mousemove",H.b(w.gcT(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.P(u,"mouseup",H.b(w.gcU(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.P(u,"pointerlockchange",H.b(w.gd2(),q),!1,r))
r=w.z
q=W.aC
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.P(a,"touchstart",H.b(w.gd7(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.P(a,"touchend",H.b(w.gd5(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.P(a,"touchmove",H.b(w.gd6(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.a8(Date.now(),!1)
z.ch=0
z.bB()
return z}}},hm:{"^":"q:20;a",
$1:function(a){var z
H.jJ(a)
z=this.a
if(z.z){z.z=!1
z.e1()}}}}],["","",,Z,{"^":"",e4:{"^":"a;a,b",q:{
cA:function(a,b,c){var z
H.y(c,"$isc",[P.O],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bV(c)),35044)
a.bindBuffer(b,null)
return new Z.e4(b,z)}}},cW:{"^":"c3;a,b,c,d,e",
aX:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ax(y)
x=P.U('Failed to bind buffer attribute "'+J.Z(this.a)+'": '+H.d(z))
throw H.e(x)}},
i:function(a){return"["+J.Z(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.d(this.e)+"]"}},hR:{"^":"a;a",$isk3:1},cX:{"^":"a;a,0b,c,d",
au:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aX:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aX(a)},
ef:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
am:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.j(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.m]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.Z(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.R(y,", ")+"\nAttrs:   "+C.a.R(u,", ")},
$islk:1},bM:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aA(this.c)+"'")+"]"}},bc:{"^":"a;a",
gbg:function(a){var z,y
z=this.a
y=(z&$.$get$al().a)!==0?3:0
if((z&$.$get$ak().a)!==0)y+=3
if((z&$.$get$aj().a)!==0)y+=3
if((z&$.$get$am().a)!==0)y+=2
if((z&$.$get$an().a)!==0)y+=3
if((z&$.$get$bd().a)!==0)y+=3
if((z&$.$get$be().a)!==0)y+=4
if((z&$.$get$aF().a)!==0)++y
return(z&$.$get$aE().a)!==0?y+4:y},
dn:function(a){var z,y,x
z=$.$get$al()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ak()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aj()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$am()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$an()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bd()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$be()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0)if(x===a)return z
return $.$get$e3()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bc))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.f([],[P.m])
y=this.a
if((y&$.$get$al().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ak().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aj().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$am().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$an().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bd().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$be().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.R(z,"|")},
q:{
a6:function(a){return new Z.bc(a)}}}}],["","",,D,{"^":"",d0:{"^":"a;"},bp:{"^":"a;0a,0b,0c",
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.n(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.I(y,new D.f9(z))
return x!==0},
dD:function(){return this.v(null)},
e4:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.v(y)}}},
ab:function(a){return this.e4(a,!0,!1)},
q:{
C:function(){var z=new D.bp()
z.a=H.f([],[{func:1,ret:-1,args:[D.n]}])
z.c=0
return z}}},f9:{"^":"q:21;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.n]})
z=this.a.a
z.b
a.$1(z)}},n:{"^":"a;a,0b"},dg:{"^":"n;c,d,a,0b,$ti"},dh:{"^":"n;c,d,a,0b,$ti"},E:{"^":"n;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}}],["","",,X,{"^":"",cY:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cY))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)},
q:{"^":"k4<"}},dl:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dl))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}},dm:{"^":"n;c,a,0b"},fm:{"^":"a;0a,0b,0c,0d",
dY:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dm(a,this)
y.b=!0
return z.v(y)},
dU:function(a){var z,y
this.c=a.b
this.d.P(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dm(a,this)
y.b=!0
return z.v(y)}},dp:{"^":"bQ;x,y,c,d,e,a,0b"},fw:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
a7:function(a,b){var z,y,x,w,v,u,t,s
z=new P.a8(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.N(y.a+x*w,y.b+v*u)
u=this.a.gak()
s=new X.b0(a,new V.N(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
ba:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.a7(a,b))
return!0},
ax:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ca()
if(typeof z!=="number")return z.c4()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.a7(a,b))
return!0},
aw:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.a7(a,b))
return!0},
dZ:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gak()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cl(new V.H(v*u,t*s),y,x,new P.a8(w,!1),this)
w.b=!0
z.v(w)
return!0},
cY:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.a8(Date.now(),!1)
y=this.f
x=new X.dp(c,a,this.a.gak(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.N(0,0)}},ac:{"^":"a;a,b,c",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ac))return!1
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
return z+(this.c?"Shift+":"")}},b0:{"^":"bQ;x,y,z,Q,ch,c,d,e,a,0b"},fE:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
aM:function(a,b,c){var z,y,x
z=new P.a8(Date.now(),!1)
y=this.a.gak()
x=new X.b0(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
ba:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.aM(a,b,!0))
return!0},
ax:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ca()
if(typeof z!=="number")return z.c4()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.aM(a,b,!0))
return!0},
aw:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.aM(a,b,!1))
return!0},
e_:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gak()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cl(new V.H(w*v,u*t),y,b,new P.a8(x,!1),this)
x.b=!0
z.v(x)
return!0},
gbO:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
gc3:function(){var z=this.c
if(z==null){z=D.C()
this.c=z}return z},
gbS:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z}},cl:{"^":"bQ;x,c,d,e,a,0b"},bQ:{"^":"n;"},dM:{"^":"bQ;x,y,z,Q,ch,c,d,e,a,0b"},ho:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
a7:function(a,b){var z,y,x,w
H.y(a,"$isc",[V.N],"$asc")
z=new P.a8(Date.now(),!1)
y=a.length>0?a[0]:new V.N(0,0)
x=this.a.gak()
w=new X.dM(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
dX:function(a){var z
H.y(a,"$isc",[V.N],"$asc")
z=this.b
if(z==null)return!1
z.v(this.a7(a,!0))
return!0},
dV:function(a){var z
H.y(a,"$isc",[V.N],"$asc")
z=this.c
if(z==null)return!1
z.v(this.a7(a,!0))
return!0},
dW:function(a){var z
H.y(a,"$isc",[V.N],"$asc")
z=this.d
if(z==null)return!1
z.v(this.a7(a,!1))
return!0}},hF:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gak:function(){var z=this.a
return V.dA(0,0,(z&&C.f).gaD(z).c,C.f.gaD(z).d)},
bv:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dl(z,new X.ac(y,a.altKey,a.shiftKey))},
ai:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ac(y,a.altKey,a.shiftKey)},
aW:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ac(y,a.altKey,a.shiftKey)},
a8:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=z.top
if(typeof x!=="number")return x.F()
return new V.N(y-w,x-v)},
aq:function(a){return new V.H(a.movementX,a.movementY)},
aT:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.N])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.e.a_(u.pageX)
C.e.a_(u.pageY)
s=z.left
C.e.a_(u.pageX)
C.a.h(y,new V.N(t-s,C.e.a_(u.pageY)-z.top))}return y},
a6:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.cY(z,new X.ac(y,a.altKey,a.shiftKey))},
eu:[function(a){this.f=!0},"$1","gcV",4,0,4],
en:[function(a){this.f=!1},"$1","gcP",4,0,4],
eq:[function(a){if(this.f)a.preventDefault()},"$1","gcS",4,0,4],
ew:[function(a){var z
H.i(a,"$isaZ")
if(!this.f)return
z=this.bv(a)
if(this.b.dY(z))a.preventDefault()},"$1","gcX",4,0,19],
ev:[function(a){var z
H.i(a,"$isaZ")
if(!this.f)return
z=this.bv(a)
if(this.b.dU(z))a.preventDefault()},"$1","gcW",4,0,19],
ex:[function(a){var z,y,x,w
H.i(a,"$isad")
z=this.a
z.focus()
this.f=!0
this.ai(a)
if(this.x){y=this.a6(a)
x=this.aq(a)
if(this.d.ba(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a6(a)
w=this.a8(a)
if(this.c.ba(y,w))a.preventDefault()},"$1","gcZ",4,0,5],
ez:[function(a){var z,y,x
H.i(a,"$isad")
this.ai(a)
z=this.a6(a)
if(this.x){y=this.aq(a)
if(this.d.ax(z,y))a.preventDefault()
return}if(this.r)return
x=this.a8(a)
if(this.c.ax(z,x))a.preventDefault()},"$1","gd0",4,0,5],
es:[function(a){var z,y,x,w
H.i(a,"$isad")
z=this.a
if(!(z&&C.f).gaD(z).bM(0,new P.bw(a.clientX,a.clientY,[P.K]))){this.ai(a)
y=this.a6(a)
if(this.x){x=this.aq(a)
if(this.d.ax(y,x))a.preventDefault()
return}if(this.r)return
w=this.a8(a)
if(this.c.ax(y,w))a.preventDefault()}},"$1","gcU",4,0,5],
ey:[function(a){var z,y,x
H.i(a,"$isad")
this.ai(a)
z=this.a6(a)
if(this.x){y=this.aq(a)
if(this.d.aw(z,y))a.preventDefault()
return}if(this.r)return
x=this.a8(a)
if(this.c.aw(z,x))a.preventDefault()},"$1","gd_",4,0,5],
er:[function(a){var z,y,x,w
H.i(a,"$isad")
z=this.a
if(!(z&&C.f).gaD(z).bM(0,new P.bw(a.clientX,a.clientY,[P.K]))){this.ai(a)
y=this.a6(a)
if(this.x){x=this.aq(a)
if(this.d.aw(y,x))a.preventDefault()
return}if(this.r)return
w=this.a8(a)
if(this.c.aw(y,w))a.preventDefault()}},"$1","gcT",4,0,5],
eA:[function(a){var z,y
H.i(a,"$isbf")
this.ai(a)
z=new V.H((a&&C.q).gdA(a),C.q.gdB(a)).w(0,180)
if(this.x){if(this.d.dZ(z))a.preventDefault()
return}if(this.r)return
y=this.a8(a)
if(this.c.e_(z,y))a.preventDefault()},"$1","gd1",4,0,24],
eB:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a6(this.y)
v=this.a8(this.y)
this.d.cY(w,v,x)}},"$1","gd2",4,0,4],
eF:[function(a){var z
H.i(a,"$isaC")
this.a.focus()
this.f=!0
this.aW(a)
z=this.aT(a)
if(this.e.dX(z))a.preventDefault()},"$1","gd7",4,0,10],
eD:[function(a){var z
H.i(a,"$isaC")
this.aW(a)
z=this.aT(a)
if(this.e.dV(z))a.preventDefault()},"$1","gd5",4,0,10],
eE:[function(a){var z
H.i(a,"$isaC")
this.aW(a)
z=this.aT(a)
if(this.e.dW(z))a.preventDefault()},"$1","gd6",4,0,10]}}],["","",,V,{"^":"",
k6:[function(a,b){if(typeof b!=="number")return b.F()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","fB",8,0,22],
jW:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.c9(a-b,z)
return(a<0?a+z:a)+b},
G:function(a,b,c){if(a==null)return C.c.X("null",c)
return C.c.X(C.e.c2($.l.$2(a,0)?0:a,b),c+b+1)},
aL:function(a,b,c){var z,y,x,w,v,u
H.y(a,"$isc",[P.t],"$asc")
z=H.f([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.G(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.j(z,u)
C.a.V(z,u,C.c.X(z[u],x))}return z},
cP:function(a,b){return C.e.ec(Math.pow(b,C.w.b4(Math.log(H.jo(a))/Math.log(b))))},
aR:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aR))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
dr:{"^":"a;a,b,c,d,e,f,r,x,y",
ay:function(a,b){var z=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dr))return!1
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
y=V.aL(H.f([this.a,this.d,this.r],z),3,0)
x=V.aL(H.f([this.b,this.e,this.x],z),3,0)
w=V.aL(H.f([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.j(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.j(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.j(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.j(y,1)
s=" "+y[1]+", "
if(1>=u)return H.j(x,1)
s=s+x[1]+", "
if(1>=t)return H.j(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.j(y,2)
z=" "+y[2]+", "
if(2>=u)return H.j(x,2)
z=z+x[2]+", "
if(2>=t)return H.j(w,2)
return s+(z+w[2]+"]")}},
bO:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ay:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
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
return V.ai(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bO))return!1
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
i:function(a){return this.D()},
bP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.aL(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.aL(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.aL(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.aL(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.j(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.j(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.j(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.j(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.j(y,1)
q=q+y[1]+", "
if(1>=t)return H.j(x,1)
q=q+x[1]+", "
if(1>=s)return H.j(w,1)
q=q+w[1]+", "
if(1>=r)return H.j(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.j(y,2)
u=u+y[2]+", "
if(2>=t)return H.j(x,2)
u=u+x[2]+", "
if(2>=s)return H.j(w,2)
u=u+w[2]+", "
if(2>=r)return H.j(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.j(y,3)
q=q+y[3]+", "
if(3>=t)return H.j(x,3)
q=q+x[3]+", "
if(3>=s)return H.j(w,3)
q=q+w[3]+", "
if(3>=r)return H.j(v,3)
return u+(q+v[3]+"]")},
t:function(a){return this.bP(a,3,0)},
D:function(){return this.bP("",3,0)},
q:{
ai:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bu:function(){return V.ai(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
N:{"^":"a;m:a>,n:b>",
F:function(a,b){return new V.N(this.a-b.a,this.b-b.b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
bP:{"^":"a;m:a>,n:b>,c",
F:function(a,b){return new V.bP(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bP))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
dx:{"^":"a;m:a>,n:b>,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dx))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
dz:{"^":"a;m:a>,n:b>,c,d",
gU:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dz))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"},
q:{
dA:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dz(a,b,c,d)}}},
H:{"^":"a;a,b",
dJ:[function(a){return Math.sqrt(this.C(this))},"$0","gj",1,0,15],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.H(z*b,y*b)},
w:function(a,b){var z,y
if($.l.$2(b,0))return new V.H(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.H(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
J:{"^":"a;a,b,c",
dJ:[function(a){return Math.sqrt(this.C(this))},"$0","gj",1,0,15],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b6:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.J(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
at:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.J(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a){return new V.J(-this.a,-this.b,-this.c)},
w:function(a,b){if($.l.$2(b,0))return new V.J(0,0,0)
return new V.J(this.a/b,this.b/b,this.c/b)},
bR:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}}],["","",,U,{"^":"",eU:{"^":"d0;0a,0b,0c,0d,0e,0f,0r,0x,0y",
aH:function(a){var z=V.jW(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
H:function(a){var z=this.y
if(!(z==null))z.v(a)},
sbe:function(a,b){},
sb7:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.aH(z)}z=new D.E("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.H(z)}},
sb9:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.aH(z)}z=new D.E("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.H(z)}},
sT:function(a,b){var z,y
b=this.aH(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.E("location",y,b,this,[P.t])
z.b=!0
this.H(z)}},
sb8:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.E("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.H(z)}},
sJ:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.E("velocity",x,a,this,[P.t])
z.b=!0
this.H(z)}},
sb2:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.E("dampening",y,a,this,[P.t])
z.b=!0
this.H(z)}},
an:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sT(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sJ(y)}},
q:{
c8:function(){var z=new U.eU()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},d3:{"^":"a0;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
ao:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d3))return!1
return J.M(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")}},de:{"^":"ay;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
H:[function(a){var z
H.i(a,"$isn")
z=this.e
if(!(z==null))z.v(a)},function(){return this.H(null)},"Y","$1","$0","gah",0,2,1],
em:[function(a,b){var z,y,x,w,v,u,t
z=U.a0
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gah(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.dg(a,b,this,[z])
z.b=!0
this.H(z)},"$2","gcO",8,0,14],
eC:[function(a,b){var z,y,x,w,v,u,t
z=U.a0
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gah(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.b(x,w)
C.a.P(t.a,x)}}z=new D.dh(a,b,this,[z])
z.b=!0
this.H(z)},"$2","gd4",8,0,14],
ao:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a0()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ah(z,z.length,0,[H.u(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.ao(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.bu():x
z=this.e
if(!(z==null))z.ab(0)}return this.f},
p:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.de))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.j(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.j(w,y)
if(!J.M(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a0]},
$asay:function(){return[U.a0]},
$isa0:1},a0:{"^":"d0;"},hG:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.C()
this.cy=z}return z},
H:[function(a){var z
H.i(a,"$isn")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.H(null)},"Y","$1","$0","gah",0,2,1],
as:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gbO()
z.toString
y={func:1,ret:-1,args:[D.n]}
x=H.b(this.gaO(),y)
C.a.h(z.a,x)
x=this.a.c.gbS()
x.toString
z=H.b(this.gaP(),y)
C.a.h(x.a,z)
z=this.a.c.gc3()
z.toString
y=H.b(this.gaQ(),y)
C.a.h(z.a,y)
return!0},
cK:[function(a){H.i(a,"$isn")
if(!J.M(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gaO",4,0,0],
cL:[function(a){var z,y,x,w,v,u,t
a=H.V(H.i(a,"$isn"),"$isb0")
if(!this.y)return
if(this.x){z=a.d.F(0,a.y)
z=new V.H(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.F(0,a.y)
z=new V.H(y.a,y.b).l(0,2).w(0,z.gU())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sJ(z*10*x)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=new V.H(x.a,x.b).l(0,2).w(0,z.gU())
x=this.b
v=w.a
if(typeof v!=="number")return v.G()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sT(0,-v*u+t)
this.b.sJ(0)
y=y.F(0,a.z)
this.Q=new V.H(y.a,y.b).l(0,2).w(0,z.gU())}this.Y()},"$1","gaP",4,0,0],
cM:[function(a){var z,y,x
H.i(a,"$isn")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sJ(y*10*x)
this.Y()}},"$1","gaQ",4,0,0],
ao:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a0()
if(z<y){this.ch=y
x=b.y
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ai(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa0:1},hH:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
H:[function(a){var z
H.i(a,"$isn")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.H(null)},"Y","$1","$0","gah",0,2,1],
as:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gbO()
z.toString
y={func:1,ret:-1,args:[D.n]}
x=H.b(this.gaO(),y)
C.a.h(z.a,x)
x=this.a.c.gbS()
x.toString
z=H.b(this.gaP(),y)
C.a.h(x.a,z)
z=this.a.c.gc3()
z.toString
x=H.b(this.gaQ(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.C()
x.f=z}x=H.b(this.gcH(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.b(this.gcI(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.C()
x.b=z}x=H.b(this.gdk(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.b(this.gdj(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.C()
x.c=z}y=H.b(this.gdi(),y)
C.a.h(z.a,y)
return!0},
a2:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.G()
z=-z}if(this.r){if(typeof y!=="number")return y.G()
y=-y}return new V.H(z,y)},
cK:[function(a){a=H.V(H.i(a,"$isn"),"$isb0")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gaO",4,0,0],
cL:[function(a){var z,y,x,w,v,u,t
a=H.V(H.i(a,"$isn"),"$isb0")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.H(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.a2(new V.H(y.a,y.b).l(0,2).w(0,z.gU()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.G()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sJ(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.G()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sJ(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.a2(new V.H(x.a,x.b).l(0,2).w(0,z.gU()))
x=this.c
v=w.a
if(typeof v!=="number")return v.G()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.G()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sT(0,-u*v+x)
this.b.sJ(0)
this.c.sJ(0)
y=y.F(0,a.z)
this.dx=this.a2(new V.H(y.a,y.b).l(0,2).w(0,z.gU()))}this.Y()},"$1","gaP",4,0,0],
cM:[function(a){var z,y,x
H.i(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.G()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sJ(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.G()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sJ(-y*10*z)
this.Y()}},"$1","gaQ",4,0,0],
ej:[function(a){if(H.V(H.i(a,"$isn"),"$isdp").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gcH",4,0,0],
ek:[function(a){var z,y,x,w,v,u,t
a=H.V(H.i(a,"$isn"),"$isb0")
if(!J.M(this.d,a.x.b))return
z=a.c
y=a.d
x=y.F(0,a.y)
w=this.a2(new V.H(x.a,x.b).l(0,2).w(0,z.gU()))
x=this.c
v=w.a
if(typeof v!=="number")return v.G()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.G()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sT(0,-u*v+x)
this.b.sJ(0)
this.c.sJ(0)
y=y.F(0,a.z)
this.dx=this.a2(new V.H(y.a,y.b).l(0,2).w(0,z.gU()))
this.Y()},"$1","gcI",4,0,0],
eI:[function(a){H.i(a,"$isn")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gdk",4,0,0],
eH:[function(a){var z,y,x,w,v,u,t
a=H.V(H.i(a,"$isn"),"$isdM")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.H(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.a2(new V.H(y.a,y.b).l(0,2).w(0,z.gU()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.G()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sJ(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.G()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sJ(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.a2(new V.H(x.a,x.b).l(0,2).w(0,z.gU()))
x=this.c
v=w.a
if(typeof v!=="number")return v.G()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.G()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sT(0,-u*v+x)
this.b.sJ(0)
this.c.sJ(0)
y=y.F(0,a.z)
this.dx=this.a2(new V.H(y.a,y.b).l(0,2).w(0,z.gU()))}this.Y()},"$1","gdj",4,0,0],
eG:[function(a){var z,y,x
H.i(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.G()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sJ(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.G()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sJ(-y*10*z)
this.Y()}},"$1","gdi",4,0,0],
ao:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a0()
if(z<y){this.dy=y
x=b.y
this.c.an(0,x)
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ai(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.ai(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa0:1},hI:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
H:function(a){var z=this.r
if(!(z==null))z.v(a)},
as:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.C()
z.e=y
z=y}else z=y
y=H.b(this.gcN(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.C()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
el:[function(a){var z,y,x,w
H.i(a,"$isn")
if(!J.M(this.b,this.a.b.c))return
H.V(a,"$iscl")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.E("zoom",z,w,this,[P.t])
z.b=!0
this.H(z)}},"$1","gcN",4,0,0],
ao:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ai(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa0:1}}],["","",,M,{"^":"",f7:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ad:[function(a){var z
H.i(a,"$isn")
z=this.x
if(!(z==null))z.v(a)},function(){return this.ad(null)},"eg","$1","$0","ga1",0,2,1],
eo:[function(a,b){var z,y,x,w,v,u,t,s
z=E.as
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga1(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gO()==null){s=new D.bp()
s.a=H.f([],v)
s.c=0
t.sO(s)}s=t.gO()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.dg(a,b,this,[z])
z.b=!0
this.ad(z)},"$2","gcQ",8,0,8],
ep:[function(a,b){var z,y,x,w,v,u,t,s
z=E.as
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga1(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gO()==null){s=new D.bp()
s.a=H.f([],v)
s.c=0
t.sO(s)}s=t.gO()
s.toString
H.b(x,w)
C.a.P(s.a,x)}}z=new D.dh(a,b,this,[z])
z.b=!0
this.ad(z)},"$2","gcR",8,0,8],
sc_:function(a,b){var z,y,x
if(b==null)b=X.dd(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gu()
z.toString
y=H.b(this.ga1(),{func:1,ret:-1,args:[D.n]})
C.a.P(z.a,y)}x=this.b
this.b=b
z=b.gu()
z.toString
y=H.b(this.ga1(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)
z=new D.E("target",x,this.b,this,[X.dH])
z.b=!0
this.ad(z)}},
sc0:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.b(this.ga1(),{func:1,ret:-1,args:[D.n]})
C.a.P(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gu()
z.toString
y=H.b(this.ga1(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.E("technique",x,this.c,this,[O.ct])
z.b=!0
this.ad(z)}},
gu:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
am:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.bY(this.c)
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
u=C.b.a_(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.b.a_(v.b*w)
s=C.b.a_(v.c*x)
a.c=s
v=C.b.a_(v.d*w)
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
s.bX(V.ai(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dw
if(y==null){y=new V.J(0,0,-1)
m=y.w(0,Math.sqrt(y.C(y)))
y=new V.J(0,1,0).at(m)
l=y.w(0,Math.sqrt(y.C(y)))
k=m.at(l)
j=new V.J(0,0,0)
y=V.ai(l.a,k.a,m.a,l.G(0).C(j),l.b,k.b,m.b,k.G(0).C(j),l.c,k.c,m.c,m.G(0).C(j),0,0,0,1)
$.dw=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.l(0,i)}a.db.bX(i)
for(z=this.d.a,z=new J.ah(z,z.length,0,[H.u(z,0)]);z.E();)z.d.an(0,a)
for(z=this.d.a,z=new J.ah(z,z.length,0,[H.u(z,0)]);z.E();)z.d.am(a)
this.a.toString
a.cy.bb()
a.db.bb()
this.b.toString
a.bW()},
$islc:1}}],["","",,A,{"^":"",cT:{"^":"a;a,b,c"},eK:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
dE:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dC:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},fJ:{"^":"dB;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r"},fK:{"^":"a;a,b,c,d,e,f",
i:function(a){return this.e},
q:{
dt:function(a){var z,y,x,w,v,u,t
z=a!==C.h
y=a===C.j
x=a===C.i
w="Normal_"+C.b.i(a.a)
v=$.$get$al()
u=$.$get$ak()
u=v.a|u.a
t=new Z.bc(u)
if(z)t=new Z.bc(u|$.$get$aj().a)
if(y)t=new Z.bc(t.a|$.$get$am().a)
return new A.fK(a,z,y,x,w,x?new Z.bc(t.a|$.$get$an().a):t)}}},dB:{"^":"c3;",
cj:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
bw:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eu(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.e(P.U("Error compiling shader '"+H.d(y)+"': "+H.d(x)))}return y},
de:function(){var z,y,x,w,v,u
z=H.f([],[A.cT])
y=this.a
x=H.R(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.cT(y,v.name,u))}this.f=new A.eK(z)},
df:function(){var z,y,x,w,v,u
z=H.f([],[A.Y])
y=this.a
x=H.R(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.dz(v.type,v.size,v.name,u))}this.r=new A.hz(z)},
af:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.cw(z,y,b,c)
else return A.cx(z,y,b,a,c)},
cC:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.dZ(z,y,b,c)
else return A.cx(z,y,b,a,c)},
cD:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.e_(z,y,b,c)
else return A.cx(z,y,b,a,c)},
aC:function(a,b){return new P.e6(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
dz:function(a,b,c,d){switch(a){case 5120:return this.af(b,c,d)
case 5121:return this.af(b,c,d)
case 5122:return this.af(b,c,d)
case 5123:return this.af(b,c,d)
case 5124:return this.af(b,c,d)
case 5125:return this.af(b,c,d)
case 5126:return new A.hr(this.a,this.e,c,d)
case 35664:return new A.ht(this.a,this.e,c,d)
case 35665:return new A.hv(this.a,this.e,c,d)
case 35666:return new A.hx(this.a,this.e,c,d)
case 35667:return new A.hu(this.a,this.e,c,d)
case 35668:return new A.hw(this.a,this.e,c,d)
case 35669:return new A.hy(this.a,this.e,c,d)
case 35674:return new A.hB(this.a,this.e,c,d)
case 35675:return new A.dY(this.a,this.e,c,d)
case 35676:return new A.bS(this.a,this.e,c,d)
case 35678:return this.cC(b,c,d)
case 35680:return this.cD(b,c,d)
case 35670:throw H.e(this.aC("BOOL",c))
case 35671:throw H.e(this.aC("BOOL_VEC2",c))
case 35672:throw H.e(this.aC("BOOL_VEC3",c))
case 35673:throw H.e(this.aC("BOOL_VEC4",c))
default:throw H.e(P.U("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}},bH:{"^":"a;a,b",
i:function(a){return this.b}},Y:{"^":"a;"},hz:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
a4:function(a,b){var z=this.k(0,b)
if(z==null)throw H.e(P.U("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.D()},
dF:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
D:function(){return this.dF("\n")}},cw:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1i: "+H.d(this.c)}},hu:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform2i: "+H.d(this.c)}},hw:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform3i: "+H.d(this.c)}},hy:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform4i: "+H.d(this.c)}},hs:{"^":"Y;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.d(this.c)},
q:{
cx:function(a,b,c,d,e){var z=new A.hs(a,b,c,e)
z.f=d
z.e=P.fu(d,0,!1,P.O)
return z}}},hr:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1f: "+H.d(this.c)}},ht:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform2f: "+H.d(this.c)}},hv:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform3f: "+H.d(this.c)}},hx:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform4f: "+H.d(this.c)}},hB:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}},dY:{"^":"Y;a,b,c,d",
i:function(a){return"UniformMat3: "+H.d(this.c)}},bS:{"^":"Y;a,b,c,d",
aG:function(a){var z=new Float32Array(H.bV(H.y(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.d(this.c)}},dZ:{"^":"Y;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.d(this.c)}},e_:{"^":"Y;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}}],["","",,F,{"^":"",
bU:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bi:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.J(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.J(t+h,s+f,r+g)
z.b=q
p=new V.J(t-h,s-f,r-g)
z.c=p
o=new V.J(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.bU(y)
k=F.bU(z.b)
j=F.jT(d,e,new F.jd(z,F.bU(z.c),F.bU(z.d),k,l,c),b)
if(j!=null)a.dN(j)},
jT:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aD,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.dD()
y=H.f([],[F.aD])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cz(null,null,new V.aR(u,0,0,1),null,null,new V.N(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.b1(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cz(null,null,new V.aR(o,n,m,1),null,null,new V.N(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.b1(d))}}z.d.dm(a+1,b+1,y)
return z},
jd:{"^":"q:29;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.b6(z.b,b).b6(z.d.b6(z.c,b),c)
z=new V.bP(y.a,y.b,y.c)
if(!J.M(a.f,z)){a.f=z
z=a.a
if(z!=null)z.S()}a.sea(y.w(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
x=new V.dx(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.M(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.S()}}},
a9:{"^":"a;0a,0b,0c,0d,0e",
gb3:function(){return this.a==null||this.b==null||this.c==null},
cu:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.J(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.bR())return
return v.w(0,Math.sqrt(v.C(v)))},
cw:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.F(0,y)
z=new V.J(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.C(z)))
z=w.F(0,y)
z=new V.J(z.a,z.b,z.c)
z=v.at(z.w(0,Math.sqrt(z.C(z))))
return z.w(0,Math.sqrt(z.C(z)))},
b0:function(){if(this.d!=null)return!0
var z=this.cu()
if(z==null){z=this.cw()
if(z==null)return!1}this.d=z
this.a.a.S()
return!0},
ct:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.J(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.bR())return
return v.w(0,Math.sqrt(v.C(v)))},
cv:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.F(0,u)
z=new V.J(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.G(0)}else{l=(z-q.b)/n
z=r.F(0,u)
z=new V.bP(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).F(0,x)
z=new V.J(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.G(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.C(z)))
z=k.at(m)
z=z.w(0,Math.sqrt(z.C(z))).at(k)
m=z.w(0,Math.sqrt(z.C(z)))}return m},
aZ:function(){if(this.e!=null)return!0
var z=this.ct()
if(z==null){z=this.cv()
if(z==null)return!1}this.e=z
this.a.a.S()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
t:function(a){var z,y
if(this.gb3())return a+"disposed"
z=a+C.c.X(J.Z(this.a.e),0)+", "+C.c.X(J.Z(this.b.e),0)+", "+C.c.X(J.Z(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
D:function(){return this.t("")},
q:{
bq:function(a,b,c){var z,y,x
z=new F.a9()
y=a.a
if(y==null)H.S(P.U("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.S(P.U("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.S()
return z}}},
ci:{"^":"a;0a,0b",
gb3:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
t:function(a){if(this.gb3())return a+"disposed"
return a+C.c.X(J.Z(this.a.e),0)+", "+C.c.X(J.Z(this.b.e),0)},
D:function(){return this.t("")}},
cn:{"^":"a;0a",
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
t:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.X(J.Z(z.e),0)},
D:function(){return this.t("")}},
dC:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
dN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.M()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.dw())}this.a.M()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.M()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cn()
if(r.a==null)H.S(P.U("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.M()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.M()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.j(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.ci()
s=p.a
if(s==null)H.S(P.U("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.S(P.U("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.M()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.M()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.j(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.M()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bq(p,o,l)}z=this.e
if(!(z==null))z.ab(0)},
aj:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aj()||!1
if(!this.a.aj())y=!1
z=this.e
if(!(z==null))z.ab(0)
return y},
dr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$al().a)!==0?1:0
if((y&$.$get$ak().a)!==0)++x
if((y&$.$get$aj().a)!==0)++x
if((y&$.$get$am().a)!==0)++x
if((y&$.$get$an().a)!==0)++x
if((y&$.$get$bd().a)!==0)++x
if((y&$.$get$be().a)!==0)++x
if((y&$.$get$aF().a)!==0)++x
if((y&$.$get$aE().a)!==0)++x
w=b.gbg(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.t
t=H.f(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.f(y,[Z.cW])
for(r=0,q=0;q<x;++q){p=b.dn(q)
o=p.gbg(p)
C.a.V(s,q,new Z.cW(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.j(y,n)
m=y[n].dK(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.V(t,l,m[k]);++l}}r+=o}H.y(t,"$isc",[u],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bV(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cX(new Z.e4(34962,j),s,b)
i.b=H.f([],[Z.bM])
if(this.b.b.length!==0){u=P.O
h=H.f([],[u])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.M()
C.a.h(h,g.e)}f=Z.cA(y,34963,H.y(h,"$isc",[u],"$asc"))
C.a.h(i.b,new Z.bM(0,h.length,f))}if(this.c.b.length!==0){u=P.O
h=H.f([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.M()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.M()
C.a.h(h,g.e)}f=Z.cA(y,34963,H.y(h,"$isc",[u],"$asc"))
C.a.h(i.b,new Z.bM(1,h.length,f))}if(this.d.b.length!==0){u=P.O
h=H.f([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.M()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.M()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].c
g.a.a.M()
C.a.h(h,g.e)}f=Z.cA(y,34963,H.y(h,"$isc",[u],"$asc"))
C.a.h(i.b,new Z.bM(4,h.length,f))}return i},
i:function(a){var z=H.f([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.t("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.t("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.t("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.t("   "))}return C.a.R(z,"\n")},
Z:function(a){var z=this.e
if(!(z==null))z.v(a)},
S:function(){return this.Z(null)},
q:{
dD:function(){var z,y
z=new F.dC()
y=new F.hJ(z)
y.b=!1
y.c=H.f([],[F.aD])
z.a=y
y=new F.ha(z)
y.b=H.f([],[F.cn])
z.b=y
y=new F.h9(z)
y.b=H.f([],[F.ci])
z.c=y
y=new F.h8(z)
y.b=H.f([],[F.a9])
z.d=y
z.e=null
return z}}},
h8:{"^":"a;a,0b",
dm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.y(c,"$isc",[F.aD],"$asc")
z=H.f([],[F.a9])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.j(c,x)
r=c[x];++x
if(x>=s)return H.j(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.j(c,p)
o=c[p]
if(y<0||y>=s)return H.j(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bq(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bq(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bq(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bq(q,n,r))}u=!u}w=!w}return z},
gj:function(a){return this.b.length},
aj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].b0())x=!1
return x},
b_:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].aZ())x=!1
return x},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
z=H.f([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.R(z,"\n")},
D:function(){return this.t("")}},
h9:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
z=H.f([],[P.m])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.j(w,x)
C.a.h(z,w[x].t(a+(""+x+". ")))}return C.a.R(z,"\n")},
D:function(){return this.t("")}},
ha:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
z=H.f([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.R(z,"\n")},
D:function(){return this.t("")}},
aD:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
b1:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cz(this.cx,x,u,z,y,w,v,a,t)},
dw:function(){return this.b1(null)},
sea:function(a){var z
if(!J.M(this.z,a)){this.z=a
z=this.a
if(z!=null)z.S()}},
dK:function(a){var z,y
z=J.A(a)
if(z.p(a,$.$get$al())){z=this.f
y=[P.t]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$ak())){z=this.r
y=[P.t]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$aj())){z=this.x
y=[P.t]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$am())){z=this.y
y=[P.t]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.p(a,$.$get$an())){z=this.z
y=[P.t]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$bd())){z=this.Q
y=[P.t]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$be())){z=this.Q
y=[P.t]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.p(a,$.$get$aF()))return H.f([this.ch],[P.t])
else if(z.p(a,$.$get$aE())){z=this.cx
y=[P.t]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.t])},
b0:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.J(0,0,0)
this.d.I(0,new F.hQ(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.ab(0)}return!0},
aZ:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.J(0,0,0)
this.d.I(0,new F.hP(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.ab(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
t:function(a){var z,y,x
z=H.f([],[P.m])
C.a.h(z,C.c.X(J.Z(this.e),0))
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
C.a.h(z,V.G(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.R(z,", ")
return a+"{"+x+"}"},
D:function(){return this.t("")},
q:{
cz:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aD()
y=new F.hO(z)
y.b=H.f([],[F.cn])
z.b=y
y=new F.hN(z)
x=[F.ci]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.hK(z)
x=[F.a9]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$e1()
z.e=0
y=$.$get$al()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ak().a)!==0?e:null
z.x=(x&$.$get$aj().a)!==0?b:null
z.y=(x&$.$get$am().a)!==0?f:null
z.z=(x&$.$get$an().a)!==0?g:null
z.Q=(x&$.$get$e2().a)!==0?c:null
z.ch=(x&$.$get$aF().a)!==0?i:0
z.cx=(x&$.$get$aE().a)!==0?a:null
return z}}},
hQ:{"^":"q:6;a",
$1:function(a){var z,y
H.i(a,"$isa9")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
hP:{"^":"q:6;a",
$1:function(a){var z,y
H.i(a,"$isa9")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
hJ:{"^":"a;a,0b,0c",
M:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.j(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.U("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.S()
return!0},
gj:function(a){return this.c.length},
aj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].b0()
return!0},
b_:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].aZ()
return!0},
ds:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.M(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
this.M()
z=H.f([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.R(z,"\n")},
D:function(){return this.t("")}},
hK:{"^":"a;a,0b,0c,0d",
gj:function(a){return this.b.length+this.c.length+this.d.length},
I:function(a,b){H.b(b,{func:1,ret:-1,args:[F.a9]})
C.a.I(this.b,b)
C.a.I(this.c,new F.hL(this,b))
C.a.I(this.d,new F.hM(this,b))},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
z=H.f([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.R(z,"\n")},
D:function(){return this.t("")}},
hL:{"^":"q:6;a,b",
$1:function(a){H.i(a,"$isa9")
if(!J.M(a.a,this.a))this.b.$1(a)}},
hM:{"^":"q:6;a,b",
$1:function(a){var z
H.i(a,"$isa9")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
hN:{"^":"a;a,0b,0c",
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
z=H.f([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.R(z,"\n")},
D:function(){return this.t("")}},
hO:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
z=H.f([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.R(z,"\n")},
D:function(){return this.t("")}}}],["","",,O,{"^":"",fI:{"^":"ct;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
bl:[function(a){var z
H.i(a,"$isn")
z=this.r
if(!(z==null))z.v(a)},function(){return this.bl(null)},"co","$1","$0","gbk",0,2,1],
bC:function(a){},
bD:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.b(this.gbk(),{func:1,ret:-1,args:[D.n]})
C.a.P(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.e
y=H.b(this.gbk(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.E("bumpyTextureCube",x,this.f,this,[T.dJ])
z.b=!0
this.bl(z)}},
bp:function(a,b){H.y(a,"$isc",[T.cu],"$asc")
if(b!=null)if(!C.a.dt(a,b)){b.a=a.length
C.a.h(a,b)}},
e2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
if(z==null){y=A.dt(this.d)
z=y.e
x=a.fr.k(0,z)
if(x==null){w=a.a
x=new A.fJ(w,z)
x.cj(w,z)
x.x=y
v=y.c
u=v?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
t=y.d
u=(t?u+"uniform mat4 txtCubeMat;\n":u)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
s=y.b
if(s)u+="attribute vec3 binmAttr;\n"
if(v)u+="attribute vec2 txt2DAttr;\n"
u=(t?u+"attribute vec3 txtCubeAttr;\n":u)+"\nvarying vec3 normalVec;\n"
if(s)u+="varying vec3 binormalVec;\n"
if(v)u+="varying vec2 txt2D;\n"
u=(t?u+"varying vec3 txtCube;\n":u)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(s)u+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
if(v)u+="   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
u=(t?u+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":u)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
s=s?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
if(v)s+="varying vec2 txt2D;\n"
s=(t?s+"varying vec3 txtCube;\n":s)+"\n"
r=y.a
switch(r){case C.h:break
case C.k:break
case C.j:s+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.i:s+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}s+="\nvec3 normal()\n{\n"
if(r===C.h||r===C.k)s+="   return normalize(normalVec);\n"
else{s+="   if(nullBumpTxt > 0) return normalVec;\n"
s=(r===C.j?s+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":s+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}s+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
x.c=x.bw(u.charCodeAt(0)==0?u:u,35633)
x.d=x.bw(s.charCodeAt(0)==0?s:s,35632)
s=w.createProgram()
x.e=s
w.attachShader(s,x.c)
w.attachShader(x.e,x.d)
w.linkProgram(x.e)
if(!H.eu(w.getProgramParameter(x.e,35714))){q=w.getProgramInfoLog(x.e)
w.deleteProgram(x.e)
H.S(P.U("Failed to link shader: "+H.d(q)))}x.de()
x.df()
x.y=x.f.k(0,"posAttr")
x.Q=x.f.k(0,"normAttr")
x.z=x.f.k(0,"binmAttr")
x.ch=x.f.k(0,"txt2DAttr")
x.cx=x.f.k(0,"txtCubeAttr")
x.cy=H.V(x.r.a4(0,"viewObjMat"),"$isbS")
x.db=H.V(x.r.a4(0,"projViewObjMat"),"$isbS")
if(v)x.dx=H.V(x.r.a4(0,"txt2DMat"),"$isdY")
if(t)x.dy=H.V(x.r.a4(0,"txtCubeMat"),"$isbS")
switch(r){case C.h:break
case C.k:break
case C.j:x.fr=H.V(x.r.a4(0,"bumpTxt"),"$isdZ")
x.fy=H.V(x.r.a4(0,"nullBumpTxt"),"$iscw")
break
case C.i:x.fx=H.V(x.r.a4(0,"bumpTxt"),"$ise_")
x.fy=H.V(x.r.a4(0,"nullBumpTxt"),"$iscw")
break}if(z.length===0)H.S(P.U("May not cache a shader with no name."))
if(a.fr.dv(0,z))H.S(P.U('Shader cache already contains a shader by the name "'+z+'".'))
a.fr.V(0,z,x)}this.a=x
b.e=null
z=x}y=z.x
p=y.f
z=b.e
if(!(z instanceof Z.cX)){b.e=null
z=null}if(z==null||!z.d.p(0,p)){b.d.aj()
z=y.b
if(z){v=b.d
u=v.e
if(!(u==null))++u.c
v.d.b_()
v.a.b_()
v=v.e
if(!(v==null))v.ab(0)}v=y.d
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.a.ds()
u=u.e
if(!(u==null))u.ab(0)}o=b.d.dr(new Z.hR(a.a),p)
o.au($.$get$al()).e=this.a.y.c
o.au($.$get$ak()).e=this.a.Q.c
if(z)o.au($.$get$aj()).e=this.a.z.c
if(y.c)o.au($.$get$am()).e=this.a.ch.c
if(v)o.au($.$get$an()).e=this.a.cx.c
b.e=o}n=H.f([],[T.cu])
z=this.a
a.a.useProgram(z.e)
z.f.dE()
z=this.a
v=a.cx
if(v==null){v=a.db
v=v.gaa(v)
u=a.dx
u=v.l(0,u.gaa(u))
a.cx=u
v=u}z=z.cy
z.toString
z.aG(v.ay(0,!0))
v=this.a
z=a.ch
if(z==null){z=a.z
if(z==null){z=a.cy
z=z.gaa(z)
u=a.db
u=z.l(0,u.gaa(u))
a.z=u
z=u}u=a.dx
u=z.l(0,u.gaa(u))
a.ch=u
z=u}v=v.db
v.toString
v.aG(z.ay(0,!0))
if(y.c){z=this.a
v=this.b
z=z.dx
z.toString
m=new Float32Array(H.bV(H.y(v.ay(0,!0),"$isc",[P.t],"$asc")))
z.a.uniformMatrix3fv(z.d,!1,m)}if(y.d){z=this.a
v=this.c
z=z.dy
z.toString
z.aG(v.ay(0,!0))}switch(y.a){case C.h:break
case C.k:break
case C.j:this.bp(n,this.e)
z=this.a.fy
z.a.uniform1i(z.d,1)
break
case C.i:this.bp(n,this.f)
z=this.a
v=this.f
u=z.fx
z=z.fy
t=v!=null
if(!t||v.d<6)z.a.uniform1i(z.d,1)
else{u.toString
if(!t||v.d<6)u.a.uniform1i(u.d,0)
else{v=v.a
u.a.uniform1i(u.d,v)}z.a.uniform1i(z.d,0)}break}for(l=0;l<n.length;++l){z=n[l]
if(!z.c&&z.d>=6){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,z.b)}}z=b.e
z.aX(a)
z.am(a)
z.ef(a)
for(l=0;l<n.length;++l){z=n[l]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.dC()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return A.dt(this.d).e}},ct:{"^":"a;"}}],["","",,T,{"^":"",cu:{"^":"c3;"},dJ:{"^":"cu;0b,0c,0d,0e,a"},hi:{"^":"a;a,0b,0c,0d,0e",
ag:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a_
W.P(z,"load",H.b(new T.hj(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
da:function(a,b,c){var z,y,x,w
b=V.cP(b,2)
z=V.cP(a.width,2)
y=V.cP(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.c7(null,null)
x.width=z
x.height=y
w=H.i(C.f.c7(x,"2d"),"$isd_")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.js(w.getImageData(0,0,x.width,x.height))}}},hj:{"^":"q:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.da(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.F.e8(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.dD();++z.e}}}],["","",,X,{"^":"",cZ:{"^":"a;",$isds:1},fd:{"^":"dH;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
q:{
dd:function(a,b,c,d,e,f,g){var z,y
z=new X.fd()
y=new V.aR(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.dA(0,0,1,1)
z.r=y
return z}}},fO:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
ap:[function(a){var z
H.i(a,"$isn")
z=this.e
if(!(z==null))z.v(a)},function(){return this.ap(null)},"eh","$1","$0","gbm",0,2,1],
sav:function(a){var z,y,x
if(!J.M(this.a,a)){z=this.a
if(z!=null){z=z.gu()
z.toString
y=H.b(this.gbm(),{func:1,ret:-1,args:[D.n]})
C.a.P(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gu()
z.toString
y=H.b(this.gbm(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.E("mover",x,this.a,this,[U.a0])
z.b=!0
this.ap(z)}},
$isds:1,
$iscZ:1},dH:{"^":"a;"}}],["","",,B,{"^":"",
jN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.dd(x,(x&&C.m).bq(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.a_
W.P(z,"scroll",H.b(new B.jO(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
jP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.y(b,"$isc",[P.m],"$asc")
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
u=W.c7(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.i(v.insertCell(-1),"$isb8")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.i(q.insertCell(-1),"$isb8").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;!1;++p){o=z.createElement("div")
if(p>=0)return H.j(b,p)
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.i(q.insertCell(-1),"$isb8")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.i(q.insertCell(-1),"$isb8")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.i(q.insertCell(-1),"$isb8").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.jN(a,y,!1,"../resources/SnowTop.png")},
jQ:function(a){P.hn(C.u,new B.jR(a))},
jO:{"^":"q:13;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.d(-0.05*C.e.a_(this.b.scrollTop))+"px"
z.top=y}},
jR:{"^":"q:32;a",
$1:function(a){H.i(a,"$isaB")
P.cQ(C.e.c2(this.a.gdG(),2)+" fps")}}}],["","",,D,{"^":"",
eA:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
B.jP("Test 030",H.f([],[P.m]),"A test of the Normal shader for dynamically rendering normal maps.")
z=document.getElementById("threeDart")
if(z==null)H.S(P.U("Failed to find an element with the identifier, threeDart."))
y=E.hl(z,!0,!0,!0,!1)
x=new E.as()
x.a=""
x.b=!0
w=E.as
v=O.d2(w)
x.y=v
v.aF(x.gdO(),x.gdQ())
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
x.sbf(0,null)
x.sav(null)
u=F.dD()
F.bi(u,null,null,1,1,1,0,0,1)
F.bi(u,null,null,1,1,0,1,0,3)
F.bi(u,null,null,1,1,0,0,1,2)
F.bi(u,null,null,1,1,-1,0,0,0)
F.bi(u,null,null,1,1,0,-1,0,0)
F.bi(u,null,null,1,1,0,0,-1,3)
u.aj()
x.sbf(0,u)
v=new U.de()
v.bi(U.a0)
v.aF(v.gcO(),v.gd4())
v.e=null
v.f=V.bu()
v.r=0
t=y.r
s=new U.hH()
r=U.c8()
r.sbe(0,!0)
r.sb7(6.283185307179586)
r.sb9(0)
r.sT(0,0)
r.sb8(100)
r.sJ(0)
r.sb2(0.5)
s.b=r
r=r.gu()
r.toString
q={func:1,ret:-1,args:[D.n]}
p=H.b(s.gah(),q)
C.a.h(r.a,p)
r=U.c8()
r.sbe(0,!0)
r.sb7(6.283185307179586)
r.sb9(0)
r.sT(0,0)
r.sb8(100)
r.sJ(0)
r.sb2(0.5)
s.c=r
C.a.h(r.gu().a,p)
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
o=new X.ac(!1,!1,!1)
n=s.d
s.d=o
r=[X.ac]
p=new D.E("modifiers",n,o,s,r)
p.b=!0
s.H(p)
p=s.f
if(p!==!1){s.f=!1
p=new D.E("invertX",p,!1,s,[P.ag])
p.b=!0
s.H(p)}p=s.r
if(p!==!1){s.r=!1
p=new D.E("invertY",p,!1,s,[P.ag])
p.b=!0
s.H(p)}s.as(t)
v.h(0,s)
t=y.r
s=new U.hG()
p=U.c8()
p.sbe(0,!0)
p.sb7(6.283185307179586)
p.sb9(0)
p.sT(0,0)
p.sb8(100)
p.sJ(0)
p.sb2(0.2)
s.b=p
p=p.gu()
p.toString
m=H.b(s.gah(),q)
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
o=new X.ac(!0,!1,!1)
n=s.c
s.c=o
p=new D.E("modifiers",n,o,s,r)
p.b=!0
s.H(p)
s.as(t)
v.h(0,s)
t=y.r
s=new U.hI()
s.c=0.01
s.d=0
s.e=0
o=new X.ac(!1,!1,!1)
s.b=o
r=new D.E("modifiers",null,o,s,r)
r.b=!0
s.H(r)
s.as(t)
v.h(0,s)
x.sav(v)
l=new O.fI()
l.b=new V.dr(1,0,0,0,1,0,0,0,1)
l.c=V.bu()
l.d=C.h
l.bC(null)
l.bD(null)
l.co()
l.r=null
v=y.f
t=v.a
k=t.createTexture()
t.bindTexture(34067,k)
t.texParameteri(34067,10242,10497)
t.texParameteri(34067,10243,10497)
t.texParameteri(34067,10241,9729)
t.texParameteri(34067,10240,9729)
t.bindTexture(34067,null)
j=new T.dJ(0)
j.b=k
j.c=!1
j.d=0
j.e=D.C()
v.ag(j,k,"../resources/diceBumpMap/posx.png",34069,!1,!1)
v.ag(j,k,"../resources/diceBumpMap/negx.png",34070,!1,!1)
v.ag(j,k,"../resources/diceBumpMap/posy.png",34071,!1,!1)
v.ag(j,k,"../resources/diceBumpMap/negy.png",34072,!1,!1)
v.ag(j,k,"../resources/diceBumpMap/posz.png",34073,!1,!1)
v.ag(j,k,"../resources/diceBumpMap/negz.png",34074,!1,!1)
if(l.d!==C.i){l.d=C.i
l.bC(null)
l.a=null}l.bD(j)
i=X.dd(!0,!0,!1,null,2000,null,0)
h=new V.aR(0.5,0.5,1,1)
if(!i.a.p(0,h)){n=i.a
i.a=h
v=new D.E("color",n,h,i,[V.aR])
v.b=!0
t=i.x
if(!(t==null))t.v(v)}g=new M.f7()
w=O.d2(w)
g.d=w
w.aF(g.gcQ(),g.gcR())
g.e=null
g.f=null
g.r=null
g.x=null
f=new X.fO()
f.b=1.0471975511965976
f.c=0.1
f.d=2000
f.sav(null)
w=f.b
if(!$.l.$2(w,1.0471975511965976)){n=f.b
f.b=1.0471975511965976
w=new D.E("fov",n,1.0471975511965976,f,[P.t])
w.b=!0
f.ap(w)}w=f.c
if(!$.l.$2(w,0.1)){n=f.c
f.c=0.1
w=new D.E("near",n,0.1,f,[P.t])
w.b=!0
f.ap(w)}w=f.d
if(!$.l.$2(w,2000)){n=f.d
f.d=2000
w=new D.E("far",n,2000,f,[P.t])
w.b=!0
f.ap(w)}w=g.a
if(w!==f){if(w!=null){w=w.gu()
w.toString
v=H.b(g.ga1(),q)
C.a.P(w.a,v)}n=g.a
g.a=f
w=f.gu()
w.toString
v=H.b(g.ga1(),q)
C.a.h(w.a,v)
w=new D.E("camera",n,g.a,g,[X.cZ])
w.b=!0
g.ad(w)}g.sc_(0,null)
g.sc0(null)
g.sc0(l)
g.sc_(0,i)
g.d.h(0,x)
w=g.a
e=V.ai(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
v=new U.d3()
v.a=e
w.sav(v)
w=y.d
if(w!==g){if(w!=null){w=w.gu()
w.toString
v=H.b(y.gbj(),q)
C.a.P(w.a,v)}y.d=g
w=g.gu()
w.toString
q=H.b(y.gbj(),q)
C.a.h(w.a,q)
y.cm()}B.jQ(y)}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.cd.prototype
if(a==null)return J.fk.prototype
if(typeof a=="boolean")return J.fj.prototype
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.a)return a
return J.c_(a)}
J.bA=function(a){if(typeof a=="string")return J.cd.prototype
if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.a)return a
return J.c_(a)}
J.cL=function(a){if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.a)return a
return J.c_(a)}
J.jv=function(a){if(typeof a=="number")return J.bN.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cy.prototype
return a}
J.bB=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.a)return a
return J.c_(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).p(a,b)}
J.eF=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jv(a).a0(a,b)}
J.eG=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jE(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bA(a).k(a,b)}
J.eH=function(a,b,c,d){return J.bB(a).bI(a,b,c,d)}
J.c2=function(a,b,c){return J.bA(a).du(a,b,c)}
J.cR=function(a,b){return J.cL(a).A(a,b)}
J.eI=function(a,b){return J.cL(a).I(a,b)}
J.aq=function(a){return J.A(a).gL(a)}
J.bE=function(a){return J.cL(a).gN(a)}
J.aP=function(a){return J.bA(a).gj(a)}
J.Z=function(a){return J.A(a).i(a)}
var $=I.p
C.f=W.c6.prototype
C.m=W.eW.prototype
C.v=J.k.prototype
C.a=J.br.prototype
C.w=J.dj.prototype
C.b=J.dk.prototype
C.e=J.bN.prototype
C.c=J.cd.prototype
C.D=J.bs.prototype
C.E=W.fH.prototype
C.p=J.fP.prototype
C.F=P.cp.prototype
C.l=J.cy.prototype
C.q=W.bf.prototype
C.r=W.hU.prototype
C.t=new P.fM()
C.d=new P.iH()
C.h=new A.bH(0,"ColorSourceType.None")
C.k=new A.bH(1,"ColorSourceType.Solid")
C.j=new A.bH(2,"ColorSourceType.Texture2D")
C.i=new A.bH(3,"ColorSourceType.TextureCube")
C.u=new P.bo(5e6)
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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

C.z=function(getTagFallback) {
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
C.A=function() {
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
C.B=function(hooks) {
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
C.C=function(hooks) {
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
$.ab=0
$.aQ=null
$.cU=null
$.cE=!1
$.ex=null
$.er=null
$.eD=null
$.bZ=null
$.c0=null
$.cM=null
$.aH=null
$.bj=null
$.bk=null
$.cF=!1
$.F=C.d
$.d9=null
$.d8=null
$.d7=null
$.d6=null
$.l=V.fB()
$.dw=null
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
I.$lazy(y,x,w)}})(["d5","$get$d5",function(){return H.ew("_$dart_dartClosure")},"ce","$get$ce",function(){return H.ew("_$dart_js")},"dN","$get$dN",function(){return H.ae(H.bR({
toString:function(){return"$receiver$"}}))},"dO","$get$dO",function(){return H.ae(H.bR({$method$:null,
toString:function(){return"$receiver$"}}))},"dP","$get$dP",function(){return H.ae(H.bR(null))},"dQ","$get$dQ",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dU","$get$dU",function(){return H.ae(H.bR(void 0))},"dV","$get$dV",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dS","$get$dS",function(){return H.ae(H.dT(null))},"dR","$get$dR",function(){return H.ae(function(){try{null.$method$}catch(z){return z.message}}())},"dX","$get$dX",function(){return H.ae(H.dT(void 0))},"dW","$get$dW",function(){return H.ae(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cB","$get$cB",function(){return P.hV()},"bl","$get$bl",function(){return[]},"d4","$get$d4",function(){return{}},"e3","$get$e3",function(){return Z.a6(0)},"e1","$get$e1",function(){return Z.a6(511)},"al","$get$al",function(){return Z.a6(1)},"ak","$get$ak",function(){return Z.a6(2)},"aj","$get$aj",function(){return Z.a6(4)},"am","$get$am",function(){return Z.a6(8)},"an","$get$an",function(){return Z.a6(16)},"bd","$get$bd",function(){return Z.a6(32)},"be","$get$be",function(){return Z.a6(64)},"e2","$get$e2",function(){return Z.a6(96)},"aF","$get$aF",function(){return Z.a6(128)},"aE","$get$aE",function(){return Z.a6(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.n]},{func:1,ret:-1,opt:[D.n]},{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[W.a_]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.z,args:[F.a9]},{func:1,ret:-1,args:[P.m,,]},{func:1,ret:-1,args:[P.O,[P.h,E.as]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.z,args:[D.n]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.z,args:[W.a_]},{func:1,ret:-1,args:[P.O,[P.h,U.a0]]},{func:1,ret:P.t},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.m,args:[P.O]},{func:1,args:[,]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:P.z,args:[P.K]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.n]}]},{func:1,ret:P.ag,args:[P.t,P.t]},{func:1,ret:P.ag,args:[W.B]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:[P.ao,,],args:[,]},{func:1,ret:P.z,args:[,],opt:[,]},{func:1,ret:-1,args:[P.a],opt:[P.aa]},{func:1,ret:P.z,args:[F.aD,P.t,P.t]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,args:[P.m]},{func:1,ret:P.z,args:[P.aB]},{func:1,args:[,P.m]},{func:1,ret:W.T,args:[W.B]}]
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
if(x==y)H.jU(d||a)
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
Isolate.cJ=a.cJ
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
if(typeof dartMainRunner==="function")dartMainRunner(D.eA,[])
else D.eA([])})})()
//# sourceMappingURL=test.dart.js.map
