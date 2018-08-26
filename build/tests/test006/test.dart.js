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
if(a1==="t"){processStatics(init.statics[b2]=b3.t,b4)
delete b3.t}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d4"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d4"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d4(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d5=function(){}
var dart=[["","",,H,{"^":"",lt:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
da:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cj:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d8==null){H.kg()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.j(P.em("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cD()]
if(v!=null)return v
v=H.kl(a)
if(v!=null)return v
if(typeof a=="function")return C.E
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cD(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
q:function(a,b){return a===b},
gR:function(a){return H.bk(a)},
i:["dO",function(a){return"Instance of '"+H.aV(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fQ:{"^":"m;",
i:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$isa0:1},
dG:{"^":"m;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0},
$isA:1},
cE:{"^":"m;",
gR:function(a){return 0},
i:["dP",function(a){return String(a)}]},
ho:{"^":"cE;"},
cW:{"^":"cE;"},
bJ:{"^":"cE;",
i:function(a){var z=a[$.$get$ds()]
if(z==null)return this.dP(a)
return"JavaScript function for "+H.i(J.a7(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscy:1},
bI:{"^":"m;$ti",
h:function(a,b){H.E(b,H.x(a,0))
if(!!a.fixed$length)H.r(P.ai("add"))
a.push(b)},
U:function(a,b){var z
if(!!a.fixed$length)H.r(P.ai("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
B:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.j(P.aR(a))}},
W:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.Z(z,y,H.i(a[y]))
return z.join(b)},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
gc_:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.j(H.fO())},
aO:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
i:function(a){return P.cA(a,"[","]")},
gT:function(a){return new J.al(a,a.length,0,[H.x(a,0)])},
gR:function(a){return H.bk(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.ai("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.bW(b,"newLength",null))
if(b<0)throw H.j(P.bl(b,0,null,"newLength",null))
a.length=b},
Z:function(a,b,c){H.a1(b)
H.E(c,H.x(a,0))
if(!!a.immutable$list)H.r(P.ai("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.bQ(a,b))
if(b>=a.length||b<0)throw H.j(H.bQ(a,b))
a[b]=c},
$ish:1,
$isd:1,
t:{
fP:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.bW(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.bl(a,0,4294967295,"length",null))
return J.dD(new Array(a),b)},
dD:function(a,b){return J.bf(H.f(a,[b]))},
bf:function(a){H.bT(a)
a.fixed$length=Array
return a}}},
ls:{"^":"bI;$ti"},
al:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.j(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c7:{"^":"m;",
hn:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.j(P.ai(""+a+".toInt()"))},
bZ:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.j(P.ai(""+a+".floor()"))},
aa:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.ai(""+a+".round()"))},
dC:function(a,b){var z,y
if(b>20)throw H.j(P.bl(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){return a&0x1FFFFFFF},
dK:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dR:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cI(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cI(a,b)},
cI:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.j(P.ai("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
cG:function(a,b){var z
if(a>0)z=this.f5(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
f5:function(a,b){return b>31?0:a>>>b},
ac:function(a,b){if(typeof b!=="number")throw H.j(H.ch(b))
return a<b},
$isv:1,
$isS:1},
dF:{"^":"c7;",$isQ:1},
dE:{"^":"c7;"},
cC:{"^":"m;",
e8:function(a,b){if(b>=a.length)throw H.j(H.bQ(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.T(b)
if(typeof b!=="string")throw H.j(P.bW(b,null,null))
return a+b},
cf:function(a,b,c){H.a1(c)
if(c==null)c=a.length
if(b>c)throw H.j(P.cM(b,null,null))
if(c>a.length)throw H.j(P.cM(c,null,null))
return a.substring(b,c)},
ce:function(a,b){return this.cf(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.t)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
h3:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a7:function(a,b){return this.h3(a,b," ")},
fF:function(a,b,c){if(c>a.length)throw H.j(P.bl(c,0,a.length,null,null))
return H.ky(a,b,c)},
i:function(a){return a},
gR:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$ishm:1,
$isn:1}}],["","",,H,{"^":"",
fO:function(){return new P.hO("No element")},
fs:{"^":"h;"},
h_:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z,y,x,w
z=this.a
y=J.bS(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.j(P.aR(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
h4:{"^":"h;a,b,$ti",
gT:function(a){return new H.h5(J.bV(this.a),this.b,this.$ti)},
gk:function(a){return J.b8(this.a)},
E:function(a,b){return this.b.$1(J.dd(this.a,b))},
$ash:function(a,b){return[b]}},
h5:{"^":"cB;0a,b,c,$ti",
F:function(){var z=this.b
if(z.F()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascB:function(a,b){return[b]}},
iz:{"^":"h;a,b,$ti",
gT:function(a){return new H.iA(J.bV(this.a),this.b,this.$ti)}},
iA:{"^":"cB;a,b,$ti",
F:function(){var z,y
for(z=this.a,y=this.b;z.F();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
c2:{"^":"a;$ti"}}],["","",,H,{"^":"",
kb:function(a){return init.types[H.a1(a)]},
kj:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isB},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a7(a)
if(typeof z!=="string")throw H.j(H.ch(a))
return z},
bk:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aV:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.v||!!J.I(a).$iscW){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.e8(w,0)===36)w=C.h.ce(w,1)
r=H.d9(H.bT(H.aO(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
aa:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hx:function(a){return a.b?H.aa(a).getUTCFullYear()+0:H.aa(a).getFullYear()+0},
hv:function(a){return a.b?H.aa(a).getUTCMonth()+1:H.aa(a).getMonth()+1},
hr:function(a){return a.b?H.aa(a).getUTCDate()+0:H.aa(a).getDate()+0},
hs:function(a){return a.b?H.aa(a).getUTCHours()+0:H.aa(a).getHours()+0},
hu:function(a){return a.b?H.aa(a).getUTCMinutes()+0:H.aa(a).getMinutes()+0},
hw:function(a){return a.b?H.aa(a).getUTCSeconds()+0:H.aa(a).getSeconds()+0},
ht:function(a){return a.b?H.aa(a).getUTCMilliseconds()+0:H.aa(a).getMilliseconds()+0},
p:function(a){throw H.j(H.ch(a))},
k:function(a,b){if(a==null)J.b8(a)
throw H.j(H.bQ(a,b))},
bQ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.a1(J.b8(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.L(b,a,"index",null,z)
return P.cM(b,"index",null)},
ch:function(a){return new P.aI(!0,a,null,null)},
k3:function(a){if(typeof a!=="number")throw H.j(H.ch(a))
return a},
j:function(a){var z
if(a==null)a=new P.dR()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f0})
z.name=""}else z.toString=H.f0
return z},
f0:function(){return J.a7(this.dartException)},
r:function(a){throw H.j(a)},
y:function(a){throw H.j(P.aR(a))},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kB(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.cG(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cF(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dQ(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e5()
u=$.$get$e6()
t=$.$get$e7()
s=$.$get$e8()
r=$.$get$ec()
q=$.$get$ed()
p=$.$get$ea()
$.$get$e9()
o=$.$get$ef()
n=$.$get$ee()
m=v.a6(y)
if(m!=null)return z.$1(H.cF(H.T(y),m))
else{m=u.a6(y)
if(m!=null){m.method="call"
return z.$1(H.cF(H.T(y),m))}else{m=t.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=r.a6(y)
if(m==null){m=q.a6(y)
if(m==null){m=p.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=o.a6(y)
if(m==null){m=n.a6(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dQ(H.T(y),m))}}return z.$1(new H.ik(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dX()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dX()
return a},
b6:function(a){var z
if(a==null)return new H.eE(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eE(a)},
k9:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.Z(0,a[y],a[x])}return b},
ki:function(a,b,c,d,e,f){H.e(a,"$iscy")
switch(H.a1(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.q("Unsupported number of arguments for wrapped closure"))},
b2:function(a,b){var z
H.a1(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ki)
a.$identity=z
return z},
ff:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isd){z.$reflectionInfo=d
x=H.hz(z).r}else x=d
w=e?Object.create(new H.hP().constructor.prototype):Object.create(new H.cp(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.as
if(typeof u!=="number")return u.C()
$.as=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dn(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kb,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dh:H.cq
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.j("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dn(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fc:function(a,b,c,d){var z=H.cq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dn:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fe(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fc(y,!w,z,b)
if(y===0){w=$.as
if(typeof w!=="number")return w.C()
$.as=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b9
if(v==null){v=H.bX("self")
$.b9=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.as
if(typeof w!=="number")return w.C()
$.as=w+1
t+=w
w="return function("+t+"){return this."
v=$.b9
if(v==null){v=H.bX("self")
$.b9=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
fd:function(a,b,c,d){var z,y
z=H.cq
y=H.dh
switch(b?-1:a){case 0:throw H.j(H.hH("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fe:function(a,b){var z,y,x,w,v,u,t,s
z=$.b9
if(z==null){z=H.bX("self")
$.b9=z}y=$.dg
if(y==null){y=H.bX("receiver")
$.dg=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fd(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.as
if(typeof y!=="number")return y.C()
$.as=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.as
if(typeof y!=="number")return y.C()
$.as=y+1
return new Function(z+y+"}")()},
d4:function(a,b,c,d,e,f,g){var z,y
z=J.bf(H.bT(b))
H.a1(c)
y=!!J.I(d).$isd?J.bf(d):d
return H.ff(a,z,c,y,!!e,f,g)},
T:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.ay(a,"String"))},
kp:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.ay(a,"num"))},
eR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.ay(a,"bool"))},
a1:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.ay(a,"int"))},
eZ:function(a,b){throw H.j(H.ay(a,H.T(b).substring(3)))},
kr:function(a,b){var z=J.bS(b)
throw H.j(H.fb(a,z.cf(b,3,z.gk(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.eZ(a,b)},
c:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.kr(a,b)},
bT:function(a){if(a==null)return a
if(!!J.I(a).$isd)return a
throw H.j(H.ay(a,"List"))},
kk:function(a,b){if(a==null)return a
if(!!J.I(a).$isd)return a
if(J.I(a)[b])return a
H.eZ(a,b)},
eS:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a1(z)]
else return a.$S()}return},
bR:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eS(J.I(a))
if(z==null)return!1
y=H.eV(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.d0)return a
$.d0=!0
try{if(H.bR(a,b))return a
z=H.bU(b)
y=H.ay(a,z)
throw H.j(y)}finally{$.d0=!1}},
d6:function(a,b){if(a!=null&&!H.d3(a,b))H.r(H.ay(a,H.bU(b)))
return a},
eM:function(a){var z
if(a instanceof H.t){z=H.eS(J.I(a))
if(z!=null)return H.bU(z)
return"Closure"}return H.aV(a)},
kA:function(a){throw H.j(new P.fk(H.T(a)))},
eT:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
aO:function(a){if(a==null)return
return a.$ti},
mq:function(a,b,c){return H.b7(a["$as"+H.i(c)],H.aO(b))},
b5:function(a,b,c,d){var z
H.T(c)
H.a1(d)
z=H.b7(a["$as"+H.i(c)],H.aO(b))
return z==null?null:z[d]},
b4:function(a,b,c){var z
H.T(b)
H.a1(c)
z=H.b7(a["$as"+H.i(b)],H.aO(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.a1(b)
z=H.aO(a)
return z==null?null:z[b]},
bU:function(a){var z=H.aP(a,null)
return z},
aP:function(a,b){var z,y
H.z(b,"$isd",[P.n],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d9(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a1(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.i(b[y])}if('func' in a)return H.jU(a,b)
if('futureOr' in a)return"FutureOr<"+H.aP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.z(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.h.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aP(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aP(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aP(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aP(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k8(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.T(z[l])
n=n+m+H.aP(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d9:function(a,b,c){var z,y,x,w,v,u
H.z(c,"$isd",[P.n],"$asd")
if(a==null)return""
z=new P.bO("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aP(u,c)}v="<"+z.i(0)+">"
return v},
b7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b1:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aO(a)
y=J.I(a)
if(y[b]==null)return!1
return H.eP(H.b7(y[d],z),null,c,null)},
z:function(a,b,c,d){var z,y
H.T(b)
H.bT(c)
H.T(d)
if(a==null)return a
z=H.b1(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d9(c,0,null)
throw H.j(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eP:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
mo:function(a,b,c){return a.apply(b,H.b7(J.I(b)["$as"+H.i(c)],H.aO(b)))},
eW:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="A"||a===-1||a===-2||H.eW(z)}return!1},
d3:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="A"||b===-1||b===-2||H.eW(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d3(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bR(a,b)}y=J.I(a).constructor
x=H.aO(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ak(y,null,b,null)
return z},
E:function(a,b){if(a!=null&&!H.d3(a,b))throw H.j(H.ay(a,H.bU(b)))
return a},
ak:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ak(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="A")return!0
if('func' in c)return H.eV(a,b,c,d)
if('func' in a)return c.builtin$cls==="cy"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"bc" in y.prototype))return!1
w=y.prototype["$as"+"bc"]
v=H.b7(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bU(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eP(H.b7(r,z),b,u,d)},
eV:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ak(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ak(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ak(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ak(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.ko(m,b,l,d)},
ko:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
mp:function(a,b,c){Object.defineProperty(a,H.T(b),{value:c,enumerable:false,writable:true,configurable:true})},
kl:function(a){var z,y,x,w,v,u
z=H.T($.eU.$1(a))
y=$.ci[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ck[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.T($.eO.$2(a,z))
if(z!=null){y=$.ci[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ck[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cl(x)
$.ci[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ck[z]=x
return x}if(v==="-"){u=H.cl(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eY(a,x)
if(v==="*")throw H.j(P.em(z))
if(init.leafTags[z]===true){u=H.cl(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eY(a,x)},
eY:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.da(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cl:function(a){return J.da(a,!1,null,!!a.$isB)},
kn:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cl(z)
else return J.da(z,c,null,null)},
kg:function(){if(!0===$.d8)return
$.d8=!0
H.kh()},
kh:function(){var z,y,x,w,v,u,t,s
$.ci=Object.create(null)
$.ck=Object.create(null)
H.kc()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f_.$1(v)
if(u!=null){t=H.kn(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kc:function(){var z,y,x,w,v,u,t
z=C.B()
z=H.b0(C.y,H.b0(C.D,H.b0(C.n,H.b0(C.n,H.b0(C.C,H.b0(C.z,H.b0(C.A(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eU=new H.kd(v)
$.eO=new H.ke(u)
$.f_=new H.kf(t)},
b0:function(a,b){return a(b)||b},
ky:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hy:{"^":"a;a,b,c,d,e,f,r,0x",t:{
hz:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bf(z)
y=z[0]
x=z[1]
return new H.hy(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i7:{"^":"a;a,b,c,d,e,f",
a6:function(a){var z,y,x
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
t:{
ax:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cb:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eb:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hk:{"^":"a_;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
dQ:function(a,b){return new H.hk(a,b==null?null:b.method)}}},
fR:{"^":"a_;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
t:{
cF:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fR(a,y,z?null:b.receiver)}}},
ik:{"^":"a_;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kB:{"^":"t:15;a",
$1:function(a){if(!!J.I(a).$isa_)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eE:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isao:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.aV(this).trim()+"'"},
gdG:function(){return this},
$iscy:1,
gdG:function(){return this}},
e0:{"^":"t;"},
hP:{"^":"e0;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cp:{"^":"e0;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cp))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gR:function(a){var z,y
z=this.c
if(z==null)y=H.bk(this.a)
else y=typeof z!=="object"?J.aH(z):H.bk(z)
return(y^H.bk(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.aV(z)+"'")},
t:{
cq:function(a){return a.a},
dh:function(a){return a.c},
bX:function(a){var z,y,x,w,v
z=new H.cp("self","target","receiver","name")
y=J.bf(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i8:{"^":"a_;a",
i:function(a){return this.a},
t:{
ay:function(a,b){return new H.i8("TypeError: "+H.i(P.c1(a))+": type '"+H.eM(a)+"' is not a subtype of type '"+b+"'")}}},
fa:{"^":"a_;a",
i:function(a){return this.a},
t:{
fb:function(a,b){return new H.fa("CastError: "+H.i(P.c1(a))+": type '"+H.eM(a)+"' is not a subtype of type '"+b+"'")}}},
hG:{"^":"a_;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
t:{
hH:function(a){return new H.hG(a)}}},
c8:{"^":"h2;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gap:function(a){return new H.fV(this,[H.x(this,0)])},
fG:function(a,b){var z=this.b
if(z==null)return!1
return this.eb(z,b)},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b_(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b_(w,b)
x=y==null?null:y.b
return x}else return this.fQ(b)},
fQ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cA(z,J.aH(a)&0x3ffffff)
x=this.dh(y,a)
if(x<0)return
return y[x].b},
Z:function(a,b,c){var z,y,x,w,v,u
H.E(b,H.x(this,0))
H.E(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bB()
this.b=z}this.ck(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bB()
this.c=y}this.ck(y,b,c)}else{x=this.d
if(x==null){x=this.bB()
this.d=x}w=J.aH(b)&0x3ffffff
v=this.cA(x,w)
if(v==null)this.bG(x,w,[this.bC(b,c)])
else{u=this.dh(v,b)
if(u>=0)v[u].b=c
else v.push(this.bC(b,c))}}},
B:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.j(P.aR(this))
z=z.c}},
ck:function(a,b,c){var z
H.E(b,H.x(this,0))
H.E(c,H.x(this,1))
z=this.b_(a,b)
if(z==null)this.bG(a,b,this.bC(b,c))
else z.b=c},
ek:function(){this.r=this.r+1&67108863},
bC:function(a,b){var z,y
z=new H.fU(H.E(a,H.x(this,0)),H.E(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ek()
return z},
dh:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
i:function(a){return P.dM(this)},
b_:function(a,b){return a[b]},
cA:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
ee:function(a,b){delete a[b]},
eb:function(a,b){return this.b_(a,b)!=null},
bB:function(){var z=Object.create(null)
this.bG(z,"<non-identifier-key>",z)
this.ee(z,"<non-identifier-key>")
return z},
$isdJ:1},
fU:{"^":"a;a,b,0c,0d"},
fV:{"^":"fs;a,$ti",
gk:function(a){return this.a.a},
gT:function(a){var z,y
z=this.a
y=new H.fW(z,z.r,this.$ti)
y.c=z.e
return y}},
fW:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.aR(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kd:{"^":"t:15;a",
$1:function(a){return this.a(a)}},
ke:{"^":"t:25;a",
$2:function(a,b){return this.a(a,b)}},
kf:{"^":"t:26;a",
$1:function(a){return this.a(H.T(a))}}}],["","",,H,{"^":"",
k8:function(a){return J.dD(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bA:function(a){return a},
aN:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.bQ(b,a))},
hi:{"^":"m;",$ism7:1,"%":"DataView;ArrayBufferView;cK|ey|ez|hh|eA|eB|aK"},
cK:{"^":"hi;",
gk:function(a){return a.length},
$isB:1,
$asB:I.d5},
hh:{"^":"ez;",
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
$asc2:function(){return[P.v]},
$asu:function(){return[P.v]},
$ish:1,
$ash:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aK:{"^":"eB;",
$asc2:function(){return[P.Q]},
$asu:function(){return[P.Q]},
$ish:1,
$ash:function(){return[P.Q]},
$isd:1,
$asd:function(){return[P.Q]}},
lD:{"^":"aK;",
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lE:{"^":"aK;",
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lF:{"^":"aK;",
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lG:{"^":"aK;",
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lH:{"^":"aK;",
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lI:{"^":"aK;",
gk:function(a){return a.length},
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lJ:{"^":"aK;",
gk:function(a){return a.length},
j:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ey:{"^":"cK+u;"},
ez:{"^":"ey+c2;"},
eA:{"^":"cK+u;"},
eB:{"^":"eA+c2;"}}],["","",,P,{"^":"",
iC:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k0()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b2(new P.iE(z),1)).observe(y,{childList:true})
return new P.iD(z,y,x)}else if(self.setImmediate!=null)return P.k1()
return P.k2()},
md:[function(a){self.scheduleImmediate(H.b2(new P.iF(H.b(a,{func:1,ret:-1})),0))},"$1","k0",4,0,9],
me:[function(a){self.setImmediate(H.b2(new P.iG(H.b(a,{func:1,ret:-1})),0))},"$1","k1",4,0,9],
mf:[function(a){H.b(a,{func:1,ret:-1})
P.jA(0,a)},"$1","k2",4,0,9],
e3:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aW]})
z=C.f.a_(a.a,1000)
return P.jB(z<0?0:z,b)},
jX:function(a,b){if(H.bR(a,{func:1,args:[P.a,P.ao]}))return b.hc(a,null,P.a,P.ao)
if(H.bR(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.j(P.bW(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jW:function(){var z,y
for(;z=$.b_,z!=null;){$.bC=null
y=z.b
$.b_=y
if(y==null)$.bB=null
z.a.$0()}},
mn:[function(){$.d1=!0
try{P.jW()}finally{$.bC=null
$.d1=!1
if($.b_!=null)$.$get$cY().$1(P.eQ())}},"$0","eQ",0,0,3],
eL:function(a){var z=new P.es(H.b(a,{func:1,ret:-1}))
if($.b_==null){$.bB=z
$.b_=z
if(!$.d1)$.$get$cY().$1(P.eQ())}else{$.bB.b=z
$.bB=z}},
k_:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b_
if(z==null){P.eL(a)
$.bC=$.bB
return}y=new P.es(a)
x=$.bC
if(x==null){y.b=z
$.bC=y
$.b_=y}else{y.b=x.b
x.b=y
$.bC=y
if(y.b==null)$.bB=y}},
ks:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.O
if(C.i===y){P.cg(null,null,C.i,a)
return}y.toString
P.cg(null,null,y,H.b(y.cN(a),z))},
i5:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aW]}
H.b(b,z)
y=$.O
if(y===C.i){y.toString
return P.e3(a,b)}x=y.cO(b,P.aW)
$.O.toString
return P.e3(a,H.b(x,z))},
cf:function(a,b,c,d,e){var z={}
z.a=d
P.k_(new P.jY(z,e))},
eJ:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.O
if(y===c)return d.$0()
$.O=c
z=y
try{y=d.$0()
return y}finally{$.O=z}},
eK:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.E(e,g)
y=$.O
if(y===c)return d.$1(e)
$.O=c
z=y
try{y=d.$1(e)
return y}finally{$.O=z}},
jZ:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
y=$.O
if(y===c)return d.$2(e,f)
$.O=c
z=y
try{y=d.$2(e,f)
return y}finally{$.O=z}},
cg:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.cN(d):c.fE(d,-1)
P.eL(d)},
iE:{"^":"t:22;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iD:{"^":"t:44;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iF:{"^":"t:2;a",
$0:function(){this.a.$0()}},
iG:{"^":"t:2;a",
$0:function(){this.a.$0()}},
eH:{"^":"a;a,0b,c",
dZ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b2(new P.jD(this,b),0),a)
else throw H.j(P.ai("`setTimeout()` not found."))},
e_:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b2(new P.jC(this,a,Date.now(),b),0),a)
else throw H.j(P.ai("Periodic timer."))},
$isaW:1,
t:{
jA:function(a,b){var z=new P.eH(!0,0)
z.dZ(a,b)
return z},
jB:function(a,b){var z=new P.eH(!1,0)
z.e_(a,b)
return z}}},
jD:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jC:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dR(w,x)}z.c=y
this.d.$1(z)}},
aZ:{"^":"a;0a,b,c,d,e,$ti",
fW:function(a){if(this.c!==6)return!0
return this.b.b.c7(H.b(this.d,{func:1,ret:P.a0,args:[P.a]}),a.a,P.a0,P.a)},
fP:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.bR(z,{func:1,args:[P.a,P.ao]}))return H.d6(w.hg(z,a.a,a.b,null,y,P.ao),x)
else return H.d6(w.c7(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aF:{"^":"a;cH:a<,b,0eZ:c<,$ti",
dB:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.O
if(y!==C.i){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jX(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aF(0,$.O,[c])
w=b==null?1:3
this.cl(new P.aZ(x,w,a,b,[z,c]))
return x},
hm:function(a,b){return this.dB(a,null,b)},
cl:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isaZ")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaF")
z=y.a
if(z<4){y.cl(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cg(null,null,z,H.b(new P.iU(this,a),{func:1,ret:-1}))}},
cC:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isaZ")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaF")
y=u.a
if(y<4){u.cC(a)
return}this.a=y
this.c=u.c}z.a=this.b4(a)
y=this.b
y.toString
P.cg(null,null,y,H.b(new P.iZ(z,this),{func:1,ret:-1}))}},
bE:function(){var z=H.e(this.c,"$isaZ")
this.c=null
return this.b4(z)},
b4:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cs:function(a){var z,y,x,w
z=H.x(this,0)
H.d6(a,{futureOr:1,type:z})
y=this.$ti
x=H.b1(a,"$isbc",y,"$asbc")
if(x){z=H.b1(a,"$isaF",y,null)
if(z)P.eu(a,this)
else P.iV(a,this)}else{w=this.bE()
H.E(a,z)
this.a=4
this.c=a
P.bx(this,w)}},
bu:[function(a,b){var z
H.e(b,"$isao")
z=this.bE()
this.a=8
this.c=new P.ae(a,b)
P.bx(this,z)},function(a){return this.bu(a,null)},"hv","$2","$1","ge9",4,2,45],
$isbc:1,
t:{
iV:function(a,b){var z,y,x
b.a=1
try{a.dB(new P.iW(b),new P.iX(b),null)}catch(x){z=H.aQ(x)
y=H.b6(x)
P.ks(new P.iY(b,z,y))}},
eu:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaF")
if(z>=4){y=b.bE()
b.a=a.a
b.c=a.c
P.bx(b,y)}else{y=H.e(b.c,"$isaZ")
b.a=2
b.c=a
a.cC(y)}},
bx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isae")
y=y.b
u=v.a
t=v.b
y.toString
P.cf(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bx(z.a,b)}y=z.a
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
if(p){H.e(r,"$isae")
y=y.b
u=r.a
t=r.b
y.toString
P.cf(null,null,y,u,t)
return}o=$.O
if(o==null?q!=null:o!==q)$.O=q
else o=null
y=b.c
if(y===8)new P.j1(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j0(x,b,r).$0()}else if((y&2)!==0)new P.j_(z,x,b).$0()
if(o!=null)$.O=o
y=x.b
if(!!J.I(y).$isbc){if(y.a>=4){n=H.e(t.c,"$isaZ")
t.c=null
b=t.b4(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eu(y,t)
return}}m=b.b
n=H.e(m.c,"$isaZ")
m.c=null
b=m.b4(n)
y=x.a
u=x.b
if(!y){H.E(u,H.x(m,0))
m.a=4
m.c=u}else{H.e(u,"$isae")
m.a=8
m.c=u}z.a=m
y=m}}}},
iU:{"^":"t:2;a,b",
$0:function(){P.bx(this.a,this.b)}},
iZ:{"^":"t:2;a,b",
$0:function(){P.bx(this.b,this.a.a)}},
iW:{"^":"t:22;a",
$1:function(a){var z=this.a
z.a=0
z.cs(a)}},
iX:{"^":"t:29;a",
$2:function(a,b){this.a.bu(a,H.e(b,"$isao"))},
$1:function(a){return this.$2(a,null)}},
iY:{"^":"t:2;a,b,c",
$0:function(){this.a.bu(this.b,this.c)}},
j1:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dA(H.b(w.d,{func:1}),null)}catch(v){y=H.aQ(v)
x=H.b6(v)
if(this.d){w=H.e(this.a.a.c,"$isae").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isae")
else u.b=new P.ae(y,x)
u.a=!0
return}if(!!J.I(z).$isbc){if(z instanceof P.aF&&z.gcH()>=4){if(z.gcH()===8){w=this.b
w.b=H.e(z.geZ(),"$isae")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hm(new P.j2(t),null)
w.a=!1}}},
j2:{"^":"t:31;a",
$1:function(a){return this.a}},
j0:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.E(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.c7(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aQ(t)
y=H.b6(t)
x=this.a
x.b=new P.ae(z,y)
x.a=!0}}},
j_:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isae")
w=this.c
if(w.fW(z)&&w.e!=null){v=this.b
v.b=w.fP(z)
v.a=!1}}catch(u){y=H.aQ(u)
x=H.b6(u)
w=H.e(this.a.a.c,"$isae")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ae(y,x)
s.a=!0}}},
es:{"^":"a;a,0b"},
cR:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aF(0,$.O,[P.Q])
z.a=0
this.fT(new P.hR(z,this),!0,new P.hS(z,y),y.ge9())
return y}},
hR:{"^":"t;a,b",
$1:function(a){H.E(a,H.b4(this.b,"cR",0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.b4(this.b,"cR",0)]}}},
hS:{"^":"t:2;a,b",
$0:function(){this.b.cs(this.a.a)}},
dY:{"^":"a;$ti"},
aW:{"^":"a;"},
ae:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isa_:1},
jI:{"^":"a;",$ismc:1},
jY:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dR()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.j(z)
x=H.j(z)
x.stack=y.i(0)
throw x}},
jm:{"^":"jI;",
hh:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.i===$.O){a.$0()
return}P.eJ(null,null,this,a,-1)}catch(x){z=H.aQ(x)
y=H.b6(x)
P.cf(null,null,this,z,H.e(y,"$isao"))}},
hi:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.i===$.O){a.$1(b)
return}P.eK(null,null,this,a,b,-1,c)}catch(x){z=H.aQ(x)
y=H.b6(x)
P.cf(null,null,this,z,H.e(y,"$isao"))}},
fE:function(a,b){return new P.jo(this,H.b(a,{func:1,ret:b}),b)},
cN:function(a){return new P.jn(this,H.b(a,{func:1,ret:-1}))},
cO:function(a,b){return new P.jp(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dA:function(a,b){H.b(a,{func:1,ret:b})
if($.O===C.i)return a.$0()
return P.eJ(null,null,this,a,b)},
c7:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.O===C.i)return a.$1(b)
return P.eK(null,null,this,a,b,c,d)},
hg:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.O===C.i)return a.$2(b,c)
return P.jZ(null,null,this,a,b,c,d,e,f)},
hc:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jo:{"^":"t;a,b,c",
$0:function(){return this.a.dA(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jn:{"^":"t:3;a,b",
$0:function(){return this.a.hh(this.b)}},
jp:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.hi(this.b,H.E(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fY:function(a,b,c){H.bT(a)
return H.z(H.k9(a,new H.c8(0,0,[b,c])),"$isdJ",[b,c],"$asdJ")},
fX:function(a,b){return new H.c8(0,0,[a,b])},
fZ:function(a,b,c,d){return new P.j8(0,0,[d])},
fN:function(a,b,c){var z,y
if(P.d2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bD()
C.a.h(y,a)
try{P.jV(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dZ(b,H.kk(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
cA:function(a,b,c){var z,y,x
if(P.d2(a))return b+"..."+c
z=new P.bO(b)
y=$.$get$bD()
C.a.h(y,a)
try{x=z
x.a=P.dZ(x.gaw(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gaw()+c
y=z.gaw()
return y.charCodeAt(0)==0?y:y},
d2:function(a){var z,y
for(z=0;y=$.$get$bD(),z<y.length;++z)if(a===y[z])return!0
return!1},
jV:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gT(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.F())return
w=H.i(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.F()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.F()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.F();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dM:function(a){var z,y,x
z={}
if(P.d2(a))return"{...}"
y=new P.bO("")
try{C.a.h($.$get$bD(),a)
x=y
x.a=x.gaw()+"{"
z.a=!0
J.f4(a,new P.h3(z,y))
z=y
z.a=z.gaw()+"}"}finally{z=$.$get$bD()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gaw()
return z.charCodeAt(0)==0?z:z},
j8:{"^":"j3;a,0b,0c,0d,0e,0f,r,$ti",
gT:function(a){return P.ex(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.E(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d_()
this.b=z}return this.cq(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d_()
this.c=y}return this.cq(y,b)}else return this.e0(0,b)},
e0:function(a,b){var z,y,x
H.E(b,H.x(this,0))
z=this.d
if(z==null){z=P.d_()
this.d=z}y=this.ct(b)
x=z[y]
if(x==null)z[y]=[this.bt(b)]
else{if(this.cz(x,b)>=0)return!1
x.push(this.bt(b))}return!0},
U:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cD(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cD(this.c,b)
else return this.eT(0,b)},
eT:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eg(z,b)
x=this.cz(y,b)
if(x<0)return!1
this.cJ(y.splice(x,1)[0])
return!0},
cq:function(a,b){H.E(b,H.x(this,0))
if(H.e(a[b],"$iscZ")!=null)return!1
a[b]=this.bt(b)
return!0},
cD:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscZ")
if(z==null)return!1
this.cJ(z)
delete a[b]
return!0},
cr:function(){this.r=this.r+1&67108863},
bt:function(a){var z,y
z=new P.cZ(H.E(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cr()
return z},
cJ:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cr()},
ct:function(a){return J.aH(a)&0x3ffffff},
eg:function(a,b){return a[this.ct(b)]},
cz:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
t:{
d_:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cZ:{"^":"a;a,0b,0c"},
j9:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.aR(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.E(z.a,H.x(this,0))
this.c=z.b
return!0}}},
t:{
ex:function(a,b,c){var z=new P.j9(a,b,[c])
z.c=a.e
return z}}},
j3:{"^":"hI;"},
cG:{"^":"ja;",$ish:1,$isd:1},
u:{"^":"a;$ti",
gT:function(a){return new H.h_(a,this.gk(a),0,[H.b5(this,a,"u",0)])},
E:function(a,b){return this.j(a,b)},
B:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.b5(this,a,"u",0)]})
z=this.gk(a)
if(typeof z!=="number")return H.p(z)
y=0
for(;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gk(a))throw H.j(P.aR(a))}},
hp:function(a,b){var z,y,x
z=H.f([],[H.b5(this,a,"u",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.Z(z,y,this.j(a,y));++y}return z},
ho:function(a){return this.hp(a,!0)},
i:function(a){return P.cA(a,"[","]")}},
h2:{"^":"ad;"},
h3:{"^":"t:20;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
ad:{"^":"a;$ti",
B:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.b5(this,a,"ad",0),H.b5(this,a,"ad",1)]})
for(z=J.bV(this.gap(a));z.F();){y=z.gO(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b8(this.gap(a))},
i:function(a){return P.dM(a)},
$isa3:1},
hJ:{"^":"a;$ti",
i:function(a){return P.cA(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.de("index"))
if(b<0)H.r(P.bl(b,0,null,"index",null))
for(z=P.ex(this,this.r,H.x(this,0)),y=0;z.F();){x=z.d
if(b===y)return x;++y}throw H.j(P.L(b,this,"index",null,y))},
$ish:1},
hI:{"^":"hJ;"},
ja:{"^":"a+u;"}}],["","",,P,{"^":"",
fv:function(a){var z=J.I(a)
if(!!z.$ist)return z.i(a)
return"Instance of '"+H.aV(a)+"'"},
h0:function(a,b,c,d){var z,y
H.E(b,d)
z=J.fP(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.Z(z,y,b)
return H.z(z,"$isd",[d],"$asd")},
dK:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.gT(a);x.F();)C.a.h(y,H.E(x.gO(x),c))
if(b)return y
return H.z(J.bf(y),"$isd",z,"$asd")},
c1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fv(a)},
q:function(a){return new P.et(a)},
dc:function(a){H.kq(a)},
a0:{"^":"a;"},
"+bool":0,
am:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&this.b===b.b},
gR:function(a){var z=this.a
return(z^C.f.cG(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fl(H.hx(this))
y=P.bF(H.hv(this))
x=P.bF(H.hr(this))
w=P.bF(H.hs(this))
v=P.bF(H.hu(this))
u=P.bF(H.hw(this))
t=P.fm(H.ht(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
fl:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bF:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"S;"},
"+double":0,
bG:{"^":"a;a",
ac:function(a,b){return C.f.ac(this.a,H.e(b,"$isbG").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.bG))return!1
return this.a===b.a},
gR:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fr()
y=this.a
if(y<0)return"-"+new P.bG(0-y).i(0)
x=z.$1(C.f.a_(y,6e7)%60)
w=z.$1(C.f.a_(y,1e6)%60)
v=new P.fq().$1(y%1e6)
return""+C.f.a_(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
t:{
dy:function(a,b,c,d,e,f){return new P.bG(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fq:{"^":"t:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fr:{"^":"t:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a_:{"^":"a;"},
dR:{"^":"a_;",
i:function(a){return"Throw of null."}},
aI:{"^":"a_;a,b,c,d",
gbw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbv:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gbw()+y+x
if(!this.a)return w
v=this.gbv()
u=P.c1(this.b)
return w+v+": "+H.i(u)},
t:{
f5:function(a){return new P.aI(!1,null,null,a)},
bW:function(a,b,c){return new P.aI(!0,a,b,c)},
de:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
dU:{"^":"aI;e,f,a,b,c,d",
gbw:function(){return"RangeError"},
gbv:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
t:{
cM:function(a,b,c){return new P.dU(null,null,!0,a,b,"Value not in range")},
bl:function(a,b,c,d,e){return new P.dU(b,c,!0,a,d,"Invalid value")}}},
fC:{"^":"aI;e,k:f>,a,b,c,d",
gbw:function(){return"RangeError"},
gbv:function(){if(J.f1(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
t:{
L:function(a,b,c,d,e){var z=H.a1(e!=null?e:J.b8(b))
return new P.fC(b,z,!0,a,c,"Index out of range")}}},
il:{"^":"a_;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
ai:function(a){return new P.il(a)}}},
ij:{"^":"a_;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
em:function(a){return new P.ij(a)}}},
hO:{"^":"a_;a",
i:function(a){return"Bad state: "+this.a}},
fh:{"^":"a_;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.c1(z))+"."},
t:{
aR:function(a){return new P.fh(a)}}},
hl:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa_:1},
dX:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa_:1},
fk:{"^":"a_;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
et:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
Q:{"^":"S;"},
"+int":0,
h:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gT(this)
for(y=0;z.F();)++y
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.de("index"))
if(b<0)H.r(P.bl(b,0,null,"index",null))
for(z=this.gT(this),y=0;z.F();){x=z.gO(z)
if(b===y)return x;++y}throw H.j(P.L(b,this,"index",null,y))},
i:function(a){return P.fN(this,"(",")")}},
cB:{"^":"a;$ti"},
d:{"^":"a;$ti",$ish:1},
"+List":0,
a3:{"^":"a;$ti"},
A:{"^":"a;",
gR:function(a){return P.a.prototype.gR.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
S:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gR:function(a){return H.bk(this)},
i:function(a){return"Instance of '"+H.aV(this)+"'"},
toString:function(){return this.i(this)}},
ao:{"^":"a;"},
n:{"^":"a;",$ishm:1},
"+String":0,
bO:{"^":"a;aw:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
dZ:function(a,b,c){var z=J.bV(b)
if(!z.F())return a
if(c.length===0){do a+=H.i(z.gO(z))
while(z.F())}else{a+=H.i(z.gO(z))
for(;z.F();)a=a+c+H.i(z.gO(z))}return a}}}}],["","",,W,{"^":"",
cs:function(a,b){var z=document.createElement("canvas")
return z},
ft:function(a){H.e(a,"$isa2")
return"wheel"},
dB:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
cd:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ew:function(a,b,c,d){var z,y
z=W.cd(W.cd(W.cd(W.cd(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eN:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.O
if(z===C.i)return a
return z.cO(a,b)},
aT:{"^":"U;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kD:{"^":"cO;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kE:{"^":"m;0k:length=","%":"AccessibleNodeList"},
kF:{"^":"aT;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kG:{"^":"aT;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
f9:{"^":"m;","%":";Blob"},
cr:{"^":"aT;",
bo:function(a,b,c){if(c!=null)return a.getContext(b,P.k4(c,null))
return a.getContext(b)},
dI:function(a,b){return this.bo(a,b,null)},
$iscr:1,
"%":"HTMLCanvasElement"},
dm:{"^":"m;",$isdm:1,"%":"CanvasRenderingContext2D"},
kM:{"^":"J;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kO:{"^":"c_;0k:length=","%":"CSSPerspective"},
kP:{"^":"cw;0n:x=,0p:y=","%":"CSSPositionValue"},
kQ:{"^":"c_;0n:x=,0p:y=","%":"CSSRotation"},
ba:{"^":"m;",$isba:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kR:{"^":"c_;0n:x=,0p:y=","%":"CSSScale"},
fi:{"^":"iK;0k:length=",
dJ:function(a,b){var z=a.getPropertyValue(this.cn(a,b))
return z==null?"":z},
cn:function(a,b){var z,y
z=$.$get$dr()
y=z[b]
if(typeof y==="string")return y
y=this.f6(a,b)
z[b]=y
return y},
f6:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fn()+b
if(z in a)return z
return b},
f_:function(a,b,c,d){a.setProperty(b,c,d)},
gbL:function(a){return a.bottom},
gae:function(a){return a.height},
gaH:function(a){return a.left},
gaU:function(a){return a.right},
gaW:function(a){return a.top},
gaf:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fj:{"^":"a;",
gaH:function(a){return this.dJ(a,"left")}},
cw:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c_:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kS:{"^":"cw;0k:length=","%":"CSSTransformValue"},
kT:{"^":"c_;0n:x=,0p:y=","%":"CSSTranslation"},
kU:{"^":"cw;0k:length=","%":"CSSUnparsedValue"},
kV:{"^":"m;0k:length=","%":"DataTransferItemList"},
kW:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
kX:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
kY:{"^":"fo;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fo:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
kZ:{"^":"iM;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.ab,P.S]]},
$asu:function(){return[[P.ab,P.S]]},
$ish:1,
$ash:function(){return[[P.ab,P.S]]},
$isd:1,
$asd:function(){return[[P.ab,P.S]]},
$asw:function(){return[[P.ab,P.S]]},
"%":"ClientRectList|DOMRectList"},
fp:{"^":"m;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaf(a))+" x "+H.i(this.gae(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.b1(b,"$isab",[P.S],"$asab")
if(!z)return!1
z=J.bE(b)
return a.left===z.gaH(b)&&a.top===z.gaW(b)&&this.gaf(a)===z.gaf(b)&&this.gae(a)===z.gae(b)},
gR:function(a){return W.ew(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaf(a)&0x1FFFFFFF,this.gae(a)&0x1FFFFFFF)},
gbL:function(a){return a.bottom},
gae:function(a){return a.height},
gaH:function(a){return a.left},
gaU:function(a){return a.right},
gaW:function(a){return a.top},
gaf:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isab:1,
$asab:function(){return[P.S]},
"%":";DOMRectReadOnly"},
l_:{"^":"iO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.n]},
$asu:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$asw:function(){return[P.n]},
"%":"DOMStringList"},
l0:{"^":"m;0k:length=","%":"DOMTokenList"},
iJ:{"^":"cG;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return H.e(z[b],"$isU")},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var z=this.ho(this)
return new J.al(z,z.length,0,[H.x(z,0)])},
$asu:function(){return[W.U]},
$ash:function(){return[W.U]},
$asd:function(){return[W.U]}},
U:{"^":"J;",
gbO:function(a){return new W.iJ(a,a.children)},
gb8:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ac()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ac()
if(w<0)w=-w*0
return new P.ab(z,y,x,w,[P.S])},
i:function(a){return a.localName},
$isU:1,
"%":";Element"},
a8:{"^":"m;",$isa8:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a2:{"^":"m;",
cK:["dN",function(a,b,c,d){H.b(c,{func:1,args:[W.a8]})
if(c!=null)this.e1(a,b,c,!1)}],
e1:function(a,b,c,d){return a.addEventListener(b,H.b2(H.b(c,{func:1,args:[W.a8]}),1),!1)},
$isa2:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eC|eD|eF|eG"},
bb:{"^":"f9;",$isbb:1,"%":"File"},
lj:{"^":"iT;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bb]},
$asu:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$asw:function(){return[W.bb]},
"%":"FileList"},
lk:{"^":"a2;0k:length=","%":"FileWriter"},
ln:{"^":"aT;0k:length=","%":"HTMLFormElement"},
bd:{"^":"m;",$isbd:1,"%":"Gamepad"},
lo:{"^":"cO;0n:x=,0p:y=","%":"Gyroscope"},
lp:{"^":"m;0k:length=","%":"History"},
lq:{"^":"j5;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.J]},
$asu:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asw:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c3:{"^":"m;0cR:data=",$isc3:1,"%":"ImageData"},
cz:{"^":"aT;",$iscz:1,"%":"HTMLImageElement"},
bg:{"^":"cT;",$isbg:1,"%":"KeyboardEvent"},
lv:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
lw:{"^":"cO;0n:x=,0p:y=","%":"Magnetometer"},
ly:{"^":"m;0k:length=","%":"MediaList"},
lz:{"^":"a2;",
cK:function(a,b,c,d){H.b(c,{func:1,args:[W.a8]})
if(b==="message")a.start()
this.dN(a,b,c,!1)},
"%":"MessagePort"},
lA:{"^":"jb;",
j:function(a,b){return P.aG(a.get(H.T(b)))},
B:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gap:function(a){var z=H.f([],[P.n])
this.B(a,new W.he(z))
return z},
gk:function(a){return a.size},
$asad:function(){return[P.n,null]},
$isa3:1,
$asa3:function(){return[P.n,null]},
"%":"MIDIInputMap"},
he:{"^":"t:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lB:{"^":"jc;",
j:function(a,b){return P.aG(a.get(H.T(b)))},
B:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gap:function(a){var z=H.f([],[P.n])
this.B(a,new W.hf(z))
return z},
gk:function(a){return a.size},
$asad:function(){return[P.n,null]},
$isa3:1,
$asa3:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hf:{"^":"t:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bh:{"^":"m;",$isbh:1,"%":"MimeType"},
lC:{"^":"je;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bh]},
$asu:function(){return[W.bh]},
$ish:1,
$ash:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asw:function(){return[W.bh]},
"%":"MimeTypeArray"},
a9:{"^":"cT;",$isa9:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iI:{"^":"cG;a",
gT:function(a){var z=this.a.childNodes
return new W.dz(z,z.length,-1,[H.b5(C.F,z,"w",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
$asu:function(){return[W.J]},
$ash:function(){return[W.J]},
$asd:function(){return[W.J]}},
J:{"^":"a2;",
i:function(a){var z=a.nodeValue
return z==null?this.dO(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hj:{"^":"jg;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.J]},
$asu:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asw:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bj:{"^":"m;0k:length=",$isbj:1,"%":"Plugin"},
lN:{"^":"jk;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bj]},
$asu:function(){return[W.bj]},
$ish:1,
$ash:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asw:function(){return[W.bj]},
"%":"PluginArray"},
lS:{"^":"jq;",
j:function(a,b){return P.aG(a.get(H.T(b)))},
B:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gap:function(a){var z=H.f([],[P.n])
this.B(a,new W.hF(z))
return z},
gk:function(a){return a.size},
$asad:function(){return[P.n,null]},
$isa3:1,
$asa3:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hF:{"^":"t:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lU:{"^":"aT;0k:length=","%":"HTMLSelectElement"},
cO:{"^":"a2;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bn:{"^":"a2;",$isbn:1,"%":"SourceBuffer"},
lV:{"^":"eD;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bn]},
$asu:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asw:function(){return[W.bn]},
"%":"SourceBufferList"},
bo:{"^":"m;",$isbo:1,"%":"SpeechGrammar"},
lW:{"^":"js;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bo]},
$asu:function(){return[W.bo]},
$ish:1,
$ash:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asw:function(){return[W.bo]},
"%":"SpeechGrammarList"},
bp:{"^":"m;0k:length=",$isbp:1,"%":"SpeechRecognitionResult"},
lY:{"^":"jv;",
j:function(a,b){return a.getItem(H.T(b))},
B:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gap:function(a){var z=H.f([],[P.n])
this.B(a,new W.hQ(z))
return z},
gk:function(a){return a.length},
$asad:function(){return[P.n,P.n]},
$isa3:1,
$asa3:function(){return[P.n,P.n]},
"%":"Storage"},
hQ:{"^":"t:36;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bq:{"^":"m;",$isbq:1,"%":"CSSStyleSheet|StyleSheet"},
br:{"^":"aT;",$isbr:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bs:{"^":"a2;",$isbs:1,"%":"TextTrack"},
bt:{"^":"a2;",$isbt:1,"%":"TextTrackCue|VTTCue"},
m1:{"^":"jz;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bt]},
$asu:function(){return[W.bt]},
$ish:1,
$ash:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asw:function(){return[W.bt]},
"%":"TextTrackCueList"},
m2:{"^":"eG;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bs]},
$asu:function(){return[W.bs]},
$ish:1,
$ash:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asw:function(){return[W.bs]},
"%":"TextTrackList"},
m3:{"^":"m;0k:length=","%":"TimeRanges"},
bu:{"^":"m;",$isbu:1,"%":"Touch"},
aX:{"^":"cT;",$isaX:1,"%":"TouchEvent"},
m4:{"^":"jF;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bu]},
$asu:function(){return[W.bu]},
$ish:1,
$ash:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asw:function(){return[W.bu]},
"%":"TouchList"},
m5:{"^":"m;0k:length=","%":"TrackDefaultList"},
cT:{"^":"a8;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m8:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
ma:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
mb:{"^":"a2;0k:length=","%":"VideoTrackList"},
bw:{"^":"a9;",
gfJ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.ai("deltaY is not supported"))},
gfI:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.ai("deltaX is not supported"))},
$isbw:1,
"%":"WheelEvent"},
iB:{"^":"a2;",
eV:function(a,b){return a.requestAnimationFrame(H.b2(H.b(b,{func:1,ret:-1,args:[P.S]}),1))},
ef:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mg:{"^":"jK;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.ba]},
$asu:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$isd:1,
$asd:function(){return[W.ba]},
$asw:function(){return[W.ba]},
"%":"CSSRuleList"},
mh:{"^":"fp;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.b1(b,"$isab",[P.S],"$asab")
if(!z)return!1
z=J.bE(b)
return a.left===z.gaH(b)&&a.top===z.gaW(b)&&a.width===z.gaf(b)&&a.height===z.gae(b)},
gR:function(a){return W.ew(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gae:function(a){return a.height},
gaf:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mj:{"^":"jM;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bd]},
$asu:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asw:function(){return[W.bd]},
"%":"GamepadList"},
mk:{"^":"jO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.J]},
$asu:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asw:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ml:{"^":"jQ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bp]},
$asu:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asw:function(){return[W.bp]},
"%":"SpeechRecognitionResultList"},
mm:{"^":"jS;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bq]},
$asu:function(){return[W.bq]},
$ish:1,
$ash:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asw:function(){return[W.bq]},
"%":"StyleSheetList"},
iP:{"^":"cR;a,b,c,$ti",
fT:function(a,b,c,d){var z=H.x(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
mi:{"^":"iP;a,b,c,$ti"},
iQ:{"^":"dY;a,b,c,d,e,$ti",
fa:function(){var z=this.d
if(z!=null&&this.a<=0)J.f3(this.b,this.c,z,!1)},
t:{
Y:function(a,b,c,d,e){var z=c==null?null:W.eN(new W.iR(c),W.a8)
z=new W.iQ(0,a,b,z,!1,[e])
z.fa()
return z}}},
iR:{"^":"t:4;a",
$1:function(a){return this.a.$1(H.e(a,"$isa8"))}},
w:{"^":"a;$ti",
gT:function(a){return new W.dz(a,this.gk(a),-1,[H.b5(this,a,"w",0)])}},
dz:{"^":"a;a,b,c,0d,$ti",
F:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f2(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
iK:{"^":"m+fj;"},
iL:{"^":"m+u;"},
iM:{"^":"iL+w;"},
iN:{"^":"m+u;"},
iO:{"^":"iN+w;"},
iS:{"^":"m+u;"},
iT:{"^":"iS+w;"},
j4:{"^":"m+u;"},
j5:{"^":"j4+w;"},
jb:{"^":"m+ad;"},
jc:{"^":"m+ad;"},
jd:{"^":"m+u;"},
je:{"^":"jd+w;"},
jf:{"^":"m+u;"},
jg:{"^":"jf+w;"},
jj:{"^":"m+u;"},
jk:{"^":"jj+w;"},
jq:{"^":"m+ad;"},
eC:{"^":"a2+u;"},
eD:{"^":"eC+w;"},
jr:{"^":"m+u;"},
js:{"^":"jr+w;"},
jv:{"^":"m+ad;"},
jy:{"^":"m+u;"},
jz:{"^":"jy+w;"},
eF:{"^":"a2+u;"},
eG:{"^":"eF+w;"},
jE:{"^":"m+u;"},
jF:{"^":"jE+w;"},
jJ:{"^":"m+u;"},
jK:{"^":"jJ+w;"},
jL:{"^":"m+u;"},
jM:{"^":"jL+w;"},
jN:{"^":"m+u;"},
jO:{"^":"jN+w;"},
jP:{"^":"m+u;"},
jQ:{"^":"jP+w;"},
jR:{"^":"m+u;"},
jS:{"^":"jR+w;"}}],["","",,P,{"^":"",
k7:function(a){var z,y
z=J.I(a)
if(!!z.$isc3){y=z.gcR(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eI(a.data,a.height,a.width)},
k6:function(a){if(a instanceof P.eI)return{data:a.a,height:a.b,width:a.c}
return a},
aG:function(a){var z,y,x,w,v
if(a==null)return
z=P.fX(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=H.T(y[w])
z.Z(0,v,a[v])}return z},
k4:function(a,b){var z={}
a.B(0,new P.k5(z))
return z},
dx:function(){var z=$.dw
if(z==null){z=J.cm(window.navigator.userAgent,"Opera",0)
$.dw=z}return z},
fn:function(){var z,y
z=$.dt
if(z!=null)return z
y=$.du
if(y==null){y=J.cm(window.navigator.userAgent,"Firefox",0)
$.du=y}if(y)z="-moz-"
else{y=$.dv
if(y==null){y=!P.dx()&&J.cm(window.navigator.userAgent,"Trident/",0)
$.dv=y}if(y)z="-ms-"
else z=P.dx()?"-o-":"-webkit-"}$.dt=z
return z},
eI:{"^":"a;cR:a>,b,c",$isc3:1},
k5:{"^":"t:20;a",
$2:function(a,b){this.a[a]=b}},
fx:{"^":"cG;a,b",
gb1:function(){var z,y,x
z=this.b
y=H.b4(z,"u",0)
x=W.U
return new H.h4(new H.iz(z,H.b(new P.fy(),{func:1,ret:P.a0,args:[y]}),[y]),H.b(new P.fz(),{func:1,ret:x,args:[y]}),[y,x])},
B:function(a,b){H.b(b,{func:1,ret:-1,args:[W.U]})
C.a.B(P.dK(this.gb1(),!1,W.U),b)},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b8(this.gb1().a)},
j:function(a,b){var z=this.gb1()
return z.b.$1(J.dd(z.a,b))},
gT:function(a){var z=P.dK(this.gb1(),!1,W.U)
return new J.al(z,z.length,0,[H.x(z,0)])},
$asu:function(){return[W.U]},
$ash:function(){return[W.U]},
$asd:function(){return[W.U]}},
fy:{"^":"t:39;",
$1:function(a){return!!J.I(H.e(a,"$isJ")).$isU}},
fz:{"^":"t:24;",
$1:function(a){return H.c(H.e(a,"$isJ"),"$isU")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
by:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ev:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bN:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.i(this.a)+", "+H.i(this.b)+")"},
q:function(a,b){var z,y,x
if(b==null)return!1
z=H.b1(b,"$isbN",[P.S],null)
if(!z)return!1
z=this.a
y=J.bE(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gR:function(a){var z,y
z=J.aH(this.a)
y=J.aH(this.b)
return P.ev(P.by(P.by(0,z),y))}},
jl:{"^":"a;$ti",
gaU:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.E(z+this.c,H.x(this,0))},
gbL:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.E(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b1(b,"$isab",[P.S],"$asab")
if(!z)return!1
z=this.a
y=J.bE(b)
x=y.gaH(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaW(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.x(this,0)
if(H.E(z+this.c,w)===y.gaU(b)){if(typeof x!=="number")return x.C()
z=H.E(x+this.d,w)===y.gbL(b)}else z=!1}else z=!1}else z=!1
return z},
gR:function(a){var z,y,x,w,v
z=this.a
y=J.aH(z)
x=this.b
w=J.aH(x)
if(typeof z!=="number")return z.C()
v=H.x(this,0)
z=H.E(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.E(x+this.d,v)
return P.ev(P.by(P.by(P.by(P.by(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cQ:function(a,b){var z,y
H.z(b,"$isbN",[P.S],"$asbN")
z=b.a
y=this.a
if(typeof z!=="number")return z.dH()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dH()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
ab:{"^":"jl;aH:a>,aW:b>,af:c>,ae:d>,$ti"}}],["","",,P,{"^":"",l1:{"^":"R;0n:x=,0p:y=","%":"SVGFEBlendElement"},l2:{"^":"R;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},l3:{"^":"R;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},l4:{"^":"R;0n:x=,0p:y=","%":"SVGFECompositeElement"},l5:{"^":"R;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},l6:{"^":"R;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},l7:{"^":"R;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},l8:{"^":"R;0n:x=,0p:y=","%":"SVGFEFloodElement"},l9:{"^":"R;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},la:{"^":"R;0n:x=,0p:y=","%":"SVGFEImageElement"},lb:{"^":"R;0n:x=,0p:y=","%":"SVGFEMergeElement"},lc:{"^":"R;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},ld:{"^":"R;0n:x=,0p:y=","%":"SVGFEOffsetElement"},le:{"^":"R;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lf:{"^":"R;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lg:{"^":"R;0n:x=,0p:y=","%":"SVGFESpotLightElement"},lh:{"^":"R;0n:x=,0p:y=","%":"SVGFETileElement"},li:{"^":"R;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},ll:{"^":"R;0n:x=,0p:y=","%":"SVGFilterElement"},lm:{"^":"be;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fB:{"^":"be;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},be:{"^":"R;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lr:{"^":"be;0n:x=,0p:y=","%":"SVGImageElement"},bK:{"^":"m;",$isbK:1,"%":"SVGLength"},lu:{"^":"j7;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bK]},
$ish:1,
$ash:function(){return[P.bK]},
$isd:1,
$asd:function(){return[P.bK]},
$asw:function(){return[P.bK]},
"%":"SVGLengthList"},lx:{"^":"R;0n:x=,0p:y=","%":"SVGMaskElement"},bM:{"^":"m;",$isbM:1,"%":"SVGNumber"},lK:{"^":"ji;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bM]},
$ish:1,
$ash:function(){return[P.bM]},
$isd:1,
$asd:function(){return[P.bM]},
$asw:function(){return[P.bM]},
"%":"SVGNumberList"},lM:{"^":"R;0n:x=,0p:y=","%":"SVGPatternElement"},lO:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},lP:{"^":"m;0k:length=","%":"SVGPointList"},lQ:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},lR:{"^":"fB;0n:x=,0p:y=","%":"SVGRectElement"},lZ:{"^":"jx;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$asu:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$asw:function(){return[P.n]},
"%":"SVGStringList"},R:{"^":"U;",
gbO:function(a){return new P.fx(a,new W.iI(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m_:{"^":"be;0n:x=,0p:y=","%":"SVGSVGElement"},hU:{"^":"be;","%":"SVGTextPathElement;SVGTextContentElement"},m0:{"^":"hU;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bP:{"^":"m;",$isbP:1,"%":"SVGTransform"},m6:{"^":"jH;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bP]},
$ish:1,
$ash:function(){return[P.bP]},
$isd:1,
$asd:function(){return[P.bP]},
$asw:function(){return[P.bP]},
"%":"SVGTransformList"},m9:{"^":"be;0n:x=,0p:y=","%":"SVGUseElement"},j6:{"^":"m+u;"},j7:{"^":"j6+w;"},jh:{"^":"m+u;"},ji:{"^":"jh+w;"},jw:{"^":"m+u;"},jx:{"^":"jw+w;"},jG:{"^":"m+u;"},jH:{"^":"jG+w;"}}],["","",,P,{"^":"",kH:{"^":"m;0k:length=","%":"AudioBuffer"},kI:{"^":"iH;",
j:function(a,b){return P.aG(a.get(H.T(b)))},
B:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gap:function(a){var z=H.f([],[P.n])
this.B(a,new P.f7(z))
return z},
gk:function(a){return a.size},
$asad:function(){return[P.n,null]},
$isa3:1,
$asa3:function(){return[P.n,null]},
"%":"AudioParamMap"},f7:{"^":"t:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},kJ:{"^":"a2;0k:length=","%":"AudioTrackList"},f8:{"^":"a2;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lL:{"^":"f8;0k:length=","%":"OfflineAudioContext"},iH:{"^":"m+ad;"}}],["","",,P,{"^":"",cN:{"^":"m;",
hk:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isc3)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.k6(g))
return}if(!!z.$iscz)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.j(P.f5("Incorrect number or type of arguments"))},
hj:function(a,b,c,d,e,f,g){return this.hk(a,b,c,d,e,f,g,null,null,null)},
$iscN:1,
"%":"WebGLRenderingContext"},ih:{"^":"m;",$isih:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lX:{"^":"ju;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return P.aG(a.item(b))},
E:function(a,b){return this.j(a,b)},
$asu:function(){return[[P.a3,,,]]},
$ish:1,
$ash:function(){return[[P.a3,,,]]},
$isd:1,
$asd:function(){return[[P.a3,,,]]},
$asw:function(){return[[P.a3,,,]]},
"%":"SQLResultSetRowList"},jt:{"^":"m+u;"},ju:{"^":"jt+w;"}}],["","",,O,{"^":"",az:{"^":"a;0a,0b,0c,0d,$ti",
br:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
cc:function(a,b,c){var z=H.b4(this,"az",0)
H.b(b,{func:1,ret:P.a0,args:[[P.h,z]]})
z={func:1,ret:-1,args:[P.Q,[P.h,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aZ:function(a,b){return this.cc(a,null,b)},
eM:function(a){var z
H.z(a,"$ish",[H.b4(this,"az",0)],"$ash")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dU:function(a,b){var z
H.z(b,"$ish",[H.b4(this,"az",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gT:function(a){var z=this.a
return new J.al(z,z.length,0,[H.x(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.b4(this,"az",0)
H.E(b,z)
z=[z]
if(this.eM(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dU(x,H.f([b],z))}},
$ish:1,
t:{
cu:function(a){var z=new O.az([a])
z.br(a)
return z}}},cI:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
dV:function(a){var z=this.b
if(!(z==null))z.A(a)},
as:function(){return this.dV(null)},
gP:function(a){var z=this.a
if(z.length>0)return C.a.gc_(z)
else return V.bL()},
dv:function(a){var z=this.a
if(a==null)C.a.h(z,V.bL())
else C.a.h(z,a)
this.as()},
c6:function(){var z=this.a
if(z.length>0){z.pop()
this.as()}}}}],["","",,E,{"^":"",co:{"^":"a;"},aA:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0X:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cp:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.al(z,z.length,0,[H.x(z,0)]);z.F();){y=z.d
if(y.f==null)y.cp()}},
sbp:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gu()
y.toString
x=H.b(this.gdq(),{func:1,ret:-1,args:[D.o]})
C.a.U(y.a,x)}y=this.c
if(y!=null){y=y.gu()
y.toString
x=H.b(this.gdq(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}w=new D.F("shape",z,this.c,this,[F.a5])
w.b=!0
this.a3(w)}},
sc8:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.b(this.gdr(),{func:1,ret:-1,args:[D.o]})
C.a.U(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gu()
z.toString
y=H.b(this.gdr(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}this.cp()
w=new D.F("technique",x,this.f,this,[O.ca])
w.b=!0
this.a3(w)}},
saQ:function(a){var z,y,x,w
if(!J.M(this.r,a)){z=this.r
if(z!=null){y=z.gu()
y.toString
x=H.b(this.gdn(),{func:1,ret:-1,args:[D.o]})
C.a.U(y.a,x)}if(a!=null){y=a.gu()
y.toString
x=H.b(this.gdn(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}this.r=a
w=new D.F("mover",z,a,this,[U.a4])
w.b=!0
this.a3(w)}},
ab:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aI(0,b,this):null
if(!J.M(y,this.x)){x=this.x
this.x=y
w=new D.F("matrix",x,y,this,[V.au])
w.b=!0
this.a3(w)}z=this.f
if(z!=null)z.ab(0,b)
for(z=this.y.a,z=new J.al(z,z.length,0,[H.x(z,0)]);z.F();)z.d.ab(0,b)},
aq:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gP(z))
else C.a.h(z.a,y.l(0,z.gP(z)))
z.as()
a.dw(this.f)
z=a.dy
x=(z&&C.a).gc_(z)
if(x!=null&&this.d!=null)x.dz(a,this)
for(z=this.y.a,z=new J.al(z,z.length,0,[H.x(z,0)]);z.F();)z.d.aq(a)
a.dt()
a.dx.c6()},
gu:function(){var z=this.z
if(z==null){z=D.G()
this.z=z}return z},
a3:function(a){var z=this.z
if(!(z==null))z.A(a)},
S:function(){return this.a3(null)},
h1:[function(a){H.e(a,"$iso")
this.e=null
this.a3(a)},function(){return this.h1(null)},"ib","$1","$0","gdq",0,2,0],
h2:[function(a){this.a3(H.e(a,"$iso"))},function(){return this.h2(null)},"ic","$1","$0","gdr",0,2,0],
h0:[function(a){this.a3(H.e(a,"$iso"))},function(){return this.h0(null)},"ia","$1","$0","gdn",0,2,0],
fZ:[function(a){this.a3(H.e(a,"$iso"))},function(){return this.fZ(null)},"i8","$1","$0","gdm",0,2,0],
i7:[function(a,b){var z,y,x,w,v,u,t
H.z(b,"$ish",[E.aA],"$ash")
for(z=b.length,y=this.gdm(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gX()==null){t=new D.aS()
t.a=H.f([],w)
t.c=0
u.sX(t)}t=u.gX()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.S()},"$2","gfY",8,0,8],
i9:[function(a,b){var z,y,x,w,v,u,t
H.z(b,"$ish",[E.aA],"$ash")
for(z=b.length,y=this.gdm(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gX()==null){t=new D.aS()
t.a=H.f([],w)
t.c=0
u.sX(t)}t=u.gX()
t.toString
H.b(y,x)
C.a.U(t.a,y)}}this.S()},"$2","gh_",8,0,8],
$isaB:1,
t:{
cx:function(a,b,c,d,e,f){var z,y
z=new E.aA()
z.a=d
z.b=!0
y=O.cu(E.aA)
z.y=y
y.aZ(z.gfY(),z.gh_())
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
z.sbp(0,e)
z.sc8(f)
z.saQ(c)
return z}}},hA:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dT:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.am(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cI()
y=[V.au]
z.a=H.f([],y)
x=z.gu()
x.toString
w={func:1,ret:-1,args:[D.o]}
v=H.b(new E.hC(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cI()
z.a=H.f([],y)
v=z.gu()
v.toString
x=H.b(new E.hD(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cI()
z.a=H.f([],y)
y=z.gu()
y.toString
w=H.b(new E.hE(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.ca])
this.dy=z
C.a.h(z,null)
this.fr=new H.c8(0,0,[P.n,A.cP])},
ghb:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gP(z)
y=this.db
y=z.l(0,y.gP(y))
this.z=y
z=y}return z},
gdu:function(){var z,y
z=this.ch
if(z==null){z=this.ghb()
y=this.dx
y=z.l(0,y.gP(y))
this.ch=y
z=y}return z},
gdE:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gP(z)
y=this.dx
y=z.l(0,y.gP(y))
this.cx=y
z=y}return z},
dw:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc_(z):a;(z&&C.a).h(z,y)},
dt:function(){var z=this.dy
if(z.length>1)z.pop()},
cM:function(a){var z=a.b
if(z.length===0)throw H.j(P.q("May not cache a shader with no name."))
if(this.fr.fG(0,z))throw H.j(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.Z(0,z,a)},
t:{
hB:function(a,b){var z=new E.hA(a,b)
z.dT(a,b)
return z}}},hC:{"^":"t:10;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.z=null
z.ch=null}},hD:{"^":"t:10;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hE:{"^":"t:10;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.ch=null
z.cx=null}},i2:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0X:x@,0y,0z,0Q,0ch",
gu:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
dX:[function(a){var z
H.e(a,"$iso")
z=this.x
if(!(z==null))z.A(a)
this.he()},function(){return this.dX(null)},"dW","$1","$0","gci",0,2,0],
gfO:function(){var z,y,x
z=Date.now()
y=C.f.a_(P.dy(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.am(z,!1)
return x/y},
cE:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.j.bZ(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.j.bZ(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
he:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.i4(this),{func:1,ret:-1,args:[P.S]})
C.r.ef(z)
C.r.eV(z,W.eN(y,P.S))}},
hd:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cE()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.dy(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.as()
w=x.db
C.a.sk(w.a,0)
w.as()
w=x.dx
C.a.sk(w.a,0)
w.as()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aq(this.e)}}catch(v){z=H.aQ(v)
y=H.b6(v)
P.dc("Error: "+H.i(z))
P.dc("Stack: "+H.i(y))
throw H.j(z)}},
t:{
i3:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscr)return E.e2(a,!0,!0,!0,!1)
y=W.cs(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbO(a).h(0,y)
w=E.e2(y,!0,!0,!0,!1)
w.a=a
return w},
e2:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.i2()
y=P.fY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.bo(a,"webgl",y)
x=H.e(x==null?C.k.bo(a,"experimental-webgl",y):x,"$iscN")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hB(x,a)
w=new T.hY(x)
w.b=H.a1(x.getParameter(3379))
w.c=H.a1(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.im(a)
v=new X.fS()
v.c=new X.aw(!1,!1,!1)
v.d=P.fZ(null,null,null,P.Q)
w.b=v
v=new X.hg(w)
v.f=0
v.r=new V.W(0,0)
v.x=new V.W(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.h1(w)
v.r=0
v.x=new V.W(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.i6(w)
v.e=0
v.f=new V.W(0,0)
v.r=new V.W(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.dY,P.a]])
w.z=v
u=document
t=W.a9
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.b(w.gez(),s),!1,t))
v=w.z
r=W.a8
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.b(w.geC(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.b(w.gev(),q),!1,r))
v=w.z
p=W.bg
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.b(w.geE(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.b(w.geD(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.b(w.geH(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.b(w.geJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.b(w.geI(),s),!1,t))
p=w.z
o=W.bw;(p&&C.a).h(p,W.Y(a,H.T(W.ft(a)),H.b(w.geK(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.b(w.geA(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.b(w.geB(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.b(w.geL(),q),!1,r))
r=w.z
q=W.aX
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.b(w.geS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.b(w.geQ(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.b(w.geR(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.am(Date.now(),!1)
z.ch=0
z.cE()
return z}}},i4:{"^":"t:27;a",
$1:function(a){var z
H.kp(a)
z=this.a
if(z.z){z.z=!1
z.hd()}}}}],["","",,Z,{"^":"",eq:{"^":"a;a,b",t:{
cX:function(a,b,c){var z
H.z(c,"$isd",[P.Q],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bA(c)),35044)
a.bindBuffer(b,null)
return new Z.eq(b,z)}}},di:{"^":"co;a,b,c,d,e",
al:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aQ(y)
x=P.q('Failed to bind buffer attribute "'+J.a7(this.a)+'": '+H.i(z))
throw H.j(x)}},
i:function(a){return"["+J.a7(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},er:{"^":"a;a",$iskK:1},bY:{"^":"a;a,0b,c,d",
a5:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
al:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].al(a)},
dD:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aq:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.k(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
ds:function(a){this.al(a)
this.aq(a)
this.dD(a)},
i:function(a){var z,y,x,w,v,u
z=[P.n]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a7(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.W(y,", ")+"\nAttrs:   "+C.a.W(u,", ")},
$ishT:1},dj:{"^":"a;0a",$ishT:1},c4:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aV(this.c)+"'")+"]"}},aL:{"^":"a;a",
gcd:function(a){var z,y
z=this.a
y=(z&$.$get$ar().a)!==0?3:0
if((z&$.$get$aq().a)!==0)y+=3
if((z&$.$get$ap().a)!==0)y+=3
if((z&$.$get$aD().a)!==0)y+=2
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$aM().a)!==0)y+=3
if((z&$.$get$bv().a)!==0)y+=4
if((z&$.$get$aY().a)!==0)++y
return(z&$.$get$aC().a)!==0?y+4:y},
fD:function(a){var z,y,x
z=$.$get$ar()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aq()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ap()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bv()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ep()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aL))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.f([],[P.n])
y=this.a
if((y&$.$get$ar().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aq().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$ap().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aE().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bv().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.W(z,"|")},
t:{
aj:function(a){return new Z.aL(a)}}}}],["","",,D,{"^":"",ct:{"^":"a;"},aS:{"^":"a;0a,0b,0c",
A:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.o(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.B(y,new D.fw(z))
return x!==0},
fK:function(){return this.A(null)},
hf:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.A(y)}}},
ar:function(a){return this.hf(a,!0,!1)},
t:{
G:function(){var z=new D.aS()
z.a=H.f([],[{func:1,ret:-1,args:[D.o]}])
z.c=0
return z}}},fw:{"^":"t:28;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.o]})
z=this.a.a
z.b
a.$1(z)}},o:{"^":"a;a,0b"},c5:{"^":"o;c,d,a,0b,$ti"},c6:{"^":"o;c,d,a,0b,$ti"},F:{"^":"o;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",dk:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dk))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)},
t:{"^":"kL<"}},dH:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dH))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},dI:{"^":"o;c,a,0b"},fS:{"^":"a;0a,0b,0c,0d",
h8:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dI(a,this)
y.b=!0
return z.A(y)},
h4:function(a){var z,y
this.c=a.b
this.d.U(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dI(a,this)
y.b=!0
return z.A(y)}},dL:{"^":"c9;x,y,c,d,e,a,0b"},h1:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ai:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.W(y.a+x*w,y.b+v*u)
u=this.a.gaA()
s=new X.bi(a,new V.W(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c5:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.A(this.ai(a,b))
return!0},
aS:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dL()
if(typeof z!=="number")return z.dF()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.ai(a,b))
return!0},
aR:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.ai(a,b))
return!0},
h9:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaA()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cJ(new V.P(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.A(w)
return!0},
eG:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.dL(c,a,this.a.gaA(),b,z,this)
x.b=!0
y.A(x)
this.y=z
this.x=new V.W(0,0)}},aw:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aw))return!1
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
return z+(this.c?"Shift+":"")}},bi:{"^":"c9;x,y,z,Q,ch,c,d,e,a,0b"},hg:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bx:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gaA()
x=new X.bi(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c5:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.A(this.bx(a,b,!0))
return!0},
aS:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dL()
if(typeof z!=="number")return z.dF()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.bx(a,b,!0))
return!0},
aR:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.bx(a,b,!1))
return!0},
ha:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaA()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cJ(new V.P(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.A(x)
return!0},
gcT:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
gbn:function(){var z=this.c
if(z==null){z=D.G()
this.c=z}return z},
gdk:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z}},cJ:{"^":"c9;x,c,d,e,a,0b"},c9:{"^":"o;"},e4:{"^":"c9;x,y,z,Q,ch,c,d,e,a,0b"},i6:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ai:function(a,b){var z,y,x,w
H.z(a,"$isd",[V.W],"$asd")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:new V.W(0,0)
x=this.a.gaA()
w=new X.e4(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
h7:function(a){var z
H.z(a,"$isd",[V.W],"$asd")
z=this.b
if(z==null)return!1
z.A(this.ai(a,!0))
return!0},
h5:function(a){var z
H.z(a,"$isd",[V.W],"$asd")
z=this.c
if(z==null)return!1
z.A(this.ai(a,!0))
return!0},
h6:function(a){var z
H.z(a,"$isd",[V.W],"$asd")
z=this.d
if(z==null)return!1
z.A(this.ai(a,!1))
return!0}},im:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaA:function(){var z=this.a
return V.dW(0,0,(z&&C.k).gb8(z).c,C.k.gb8(z).d)},
cv:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dH(z,new X.aw(y,a.altKey,a.shiftKey))},
ay:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aw(y,a.altKey,a.shiftKey)},
bH:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aw(y,a.altKey,a.shiftKey)},
aj:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.H()
v=z.top
if(typeof x!=="number")return x.H()
return new V.W(y-w,x-v)},
aM:function(a){return new V.P(a.movementX,a.movementY)},
bD:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.W])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.j.aa(u.pageX)
C.j.aa(u.pageY)
s=z.left
C.j.aa(u.pageX)
C.a.h(y,new V.W(t-s,C.j.aa(u.pageY)-z.top))}return y},
ag:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dk(z,new X.aw(y,a.altKey,a.shiftKey))},
hK:[function(a){this.f=!0},"$1","geC",4,0,4],
hE:[function(a){this.f=!1},"$1","gev",4,0,4],
hH:[function(a){if(this.f)a.preventDefault()},"$1","gez",4,0,4],
hM:[function(a){var z
H.e(a,"$isbg")
if(!this.f)return
z=this.cv(a)
if(this.b.h8(z))a.preventDefault()},"$1","geE",4,0,16],
hL:[function(a){var z
H.e(a,"$isbg")
if(!this.f)return
z=this.cv(a)
if(this.b.h4(z))a.preventDefault()},"$1","geD",4,0,16],
hO:[function(a){var z,y,x,w
H.e(a,"$isa9")
z=this.a
z.focus()
this.f=!0
this.ay(a)
if(this.x){y=this.ag(a)
x=this.aM(a)
if(this.d.c5(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ag(a)
w=this.aj(a)
if(this.c.c5(y,w))a.preventDefault()},"$1","geH",4,0,5],
hQ:[function(a){var z,y,x
H.e(a,"$isa9")
this.ay(a)
z=this.ag(a)
if(this.x){y=this.aM(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.aj(a)
if(this.c.aS(z,x))a.preventDefault()},"$1","geJ",4,0,5],
hJ:[function(a){var z,y,x,w
H.e(a,"$isa9")
z=this.a
if(!(z&&C.k).gb8(z).cQ(0,new P.bN(a.clientX,a.clientY,[P.S]))){this.ay(a)
y=this.ag(a)
if(this.x){x=this.aM(a)
if(this.d.aS(y,x))a.preventDefault()
return}if(this.r)return
w=this.aj(a)
if(this.c.aS(y,w))a.preventDefault()}},"$1","geB",4,0,5],
hP:[function(a){var z,y,x
H.e(a,"$isa9")
this.ay(a)
z=this.ag(a)
if(this.x){y=this.aM(a)
if(this.d.aR(z,y))a.preventDefault()
return}if(this.r)return
x=this.aj(a)
if(this.c.aR(z,x))a.preventDefault()},"$1","geI",4,0,5],
hI:[function(a){var z,y,x,w
H.e(a,"$isa9")
z=this.a
if(!(z&&C.k).gb8(z).cQ(0,new P.bN(a.clientX,a.clientY,[P.S]))){this.ay(a)
y=this.ag(a)
if(this.x){x=this.aM(a)
if(this.d.aR(y,x))a.preventDefault()
return}if(this.r)return
w=this.aj(a)
if(this.c.aR(y,w))a.preventDefault()}},"$1","geA",4,0,5],
hR:[function(a){var z,y
H.e(a,"$isbw")
this.ay(a)
z=new V.P((a&&C.q).gfI(a),C.q.gfJ(a)).w(0,180)
if(this.x){if(this.d.h9(z))a.preventDefault()
return}if(this.r)return
y=this.aj(a)
if(this.c.ha(z,y))a.preventDefault()},"$1","geK",4,0,30],
hS:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ag(this.y)
v=this.aj(this.y)
this.d.eG(w,v,x)}},"$1","geL",4,0,4],
hY:[function(a){var z
H.e(a,"$isaX")
this.a.focus()
this.f=!0
this.bH(a)
z=this.bD(a)
if(this.e.h7(z))a.preventDefault()},"$1","geS",4,0,11],
hW:[function(a){var z
H.e(a,"$isaX")
this.bH(a)
z=this.bD(a)
if(this.e.h5(z))a.preventDefault()},"$1","geQ",4,0,11],
hX:[function(a){var z
H.e(a,"$isaX")
this.bH(a)
z=this.bD(a)
if(this.e.h6(z))a.preventDefault()},"$1","geR",4,0,11]}}],["","",,D,{"^":"",c0:{"^":"a;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z},
at:[function(a){var z
H.e(a,"$iso")
z=this.d
if(!(z==null))z.A(a)},function(){return this.at(null)},"hq","$1","$0","gdY",0,2,0],
$isZ:1,
$isaB:1},Z:{"^":"a;",$isaB:1},fT:{"^":"az;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.G()
this.Q=z}return z},
at:function(a){var z=this.Q
if(!(z==null))z.A(a)},
eF:[function(a){var z
H.e(a,"$iso")
z=this.ch
if(!(z==null))z.A(a)},function(){return this.eF(null)},"hN","$1","$0","gcB",0,2,0],
hT:[function(a){var z,y,x
H.z(a,"$ish",[D.Z],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.ea(x))return!1}return!0},"$1","geN",4,0,32],
hB:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Z
H.z(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcB(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.e(b[u],"$isZ")
if(t instanceof D.c0)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aS()
s.a=H.f([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.c5(a,b,this,[z])
z.b=!0
this.at(z)},"$2","ger",8,0,18],
hV:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Z
H.z(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcB(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.e(b[u],"$isZ")
if(t instanceof D.c0)C.a.U(this.e,t)
s=t.d
if(s==null){s=new D.aS()
s.a=H.f([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.U(s.a,x)}z=new D.c6(a,b,this,[z])
z.b=!0
this.at(z)},"$2","geP",8,0,18],
ea:function(a){var z=C.a.aO(this.e,a)
return z},
$ash:function(){return[D.Z]},
$asaz:function(){return[D.Z]}},hp:{"^":"a;",$isZ:1,$isaB:1},hN:{"^":"a;",$isZ:1,$isaB:1},i_:{"^":"a;",$isZ:1,$isaB:1},i0:{"^":"a;",$isZ:1,$isaB:1},i1:{"^":"a;",$isZ:1,$isaB:1}}],["","",,V,{"^":"",
kN:[function(a,b){if(typeof b!=="number")return b.H()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hd",8,0,33],
kC:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.dK(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.h.a7("null",c)
return C.h.a7(C.j.dC($.l.$2(a,0)?0:a,b),c+b+1)},
b3:function(a,b,c){var z,y,x,w,v,u
H.z(a,"$isd",[P.v],"$asd")
z=H.f([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.k(z,u)
C.a.Z(z,u,C.h.a7(z[u],x))}return z},
db:function(a,b){return C.j.hn(Math.pow(b,C.w.bZ(Math.log(H.k3(a))/Math.log(b))))},
N:{"^":"a;a,b,c",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
at:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.at))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
dO:{"^":"a;a,b,c,d,e,f,r,x,y",
Y:function(a,b){var z=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dO))return!1
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
z=[P.v]
y=V.b3(H.f([this.a,this.d,this.r],z),3,0)
x=V.b3(H.f([this.b,this.e,this.x],z),3,0)
w=V.b3(H.f([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.k(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.k(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.k(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.k(y,1)
s=" "+y[1]+", "
if(1>=u)return H.k(x,1)
s=s+x[1]+", "
if(1>=t)return H.k(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.k(y,2)
z=" "+y[2]+", "
if(2>=u)return H.k(x,2)
z=z+x[2]+", "
if(2>=t)return H.k(w,2)
return s+(z+w[2]+"]")}},
au:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
Y:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
di:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.l.$2(a2,0))return V.bL()
a3=1/a2
a4=-w
a5=-i
return V.av((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
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
return V.av(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
c9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
t=this.e
if(typeof t!=="number")return t.l()
s=this.f
if(typeof s!=="number")return s.l()
r=this.r
if(typeof r!=="number")return r.l()
q=this.y
if(typeof q!=="number")return q.l()
p=this.z
if(typeof p!=="number")return p.l()
o=this.Q
if(typeof o!=="number")return o.l()
return new V.C(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aX:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
t=this.d
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.an(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
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
i:function(a){return this.G()},
df:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b3(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b3(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b3(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b3(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.k(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.k(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.k(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.k(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.k(y,1)
q=q+y[1]+", "
if(1>=t)return H.k(x,1)
q=q+x[1]+", "
if(1>=s)return H.k(w,1)
q=q+w[1]+", "
if(1>=r)return H.k(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.k(y,2)
u=u+y[2]+", "
if(2>=t)return H.k(x,2)
u=u+x[2]+", "
if(2>=s)return H.k(w,2)
u=u+w[2]+", "
if(2>=r)return H.k(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.k(y,3)
q=q+y[3]+", "
if(3>=t)return H.k(x,3)
q=q+x[3]+", "
if(3>=s)return H.k(w,3)
q=q+w[3]+", "
if(3>=r)return H.k(v,3)
return u+(q+v[3]+"]")},
G:function(){return this.df("",3,0)},
v:function(a){return this.df(a,3,0)},
t:{
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bL:function(){return V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dP:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.D(c)))
y=b.aP(z)
x=y.w(0,Math.sqrt(y.D(y)))
w=z.aP(x)
v=new V.C(a.a,a.b,a.c)
return V.av(x.a,w.a,z.a,x.I(0).D(v),x.b,w.b,z.b,w.I(0).D(v),x.c,w.c,z.c,z.I(0).D(v),0,0,0,1)}}},
W:{"^":"a;n:a>,p:b>",
H:function(a,b){return new V.W(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
an:{"^":"a;n:a>,p:b>,c",
C:function(a,b){return new V.an(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a,b){return new V.an(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
dT:{"^":"a;n:a>,p:b>,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dT))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
dV:{"^":"a;n:a>,p:b>,c,d",
ga2:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dV))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
t:{
dW:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dV(a,b,c,d)}}},
P:{"^":"a;a,b",
fR:[function(a){return Math.sqrt(this.D(this))},"$0","gk",1,0,19],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.P(z*b,y*b)},
w:function(a,b){var z,y
if($.l.$2(b,0))return new V.P(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.P(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
C:{"^":"a;a,b,c",
fR:[function(a){return Math.sqrt(this.D(this))},"$0","gk",1,0,19],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c0:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.C(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aP:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.C(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
I:function(a){return new V.C(-this.a,-this.b,-this.c)},
w:function(a,b){if($.l.$2(b,0))return new V.C(0,0,0)
return new V.C(this.a/b,this.b/b,this.c/b)},
dj:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fg:{"^":"ct;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bs:function(a){var z=V.kC(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.A(a)},
sca:function(a,b){},
sc2:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bs(z)}z=new D.F("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.K(z)}},
sc4:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bs(z)}z=new D.F("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.K(z)}},
sa1:function(a,b){var z,y
b=this.bs(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.F("location",y,b,this,[P.v])
z.b=!0
this.K(z)}},
sc3:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.F("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.K(z)}},
sL:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.F("velocity",x,a,this,[P.v])
z.b=!0
this.K(z)}},
sbQ:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.F("dampening",y,a,this,[P.v])
z.b=!0
this.K(z)}},
ab:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sL(y)}},
t:{
cv:function(){var z=new U.fg()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dp:{"^":"a4;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
aI:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dp))return!1
return J.M(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
t:{
dq:function(a){var z=new U.dp()
z.a=a
return z}}},dA:{"^":"az;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
K:[function(a){var z
H.e(a,"$iso")
z=this.e
if(!(z==null))z.A(a)},function(){return this.K(null)},"a8","$1","$0","gau",0,2,0],
hA:[function(a,b){var z,y,x,w,v,u,t
z=U.a4
H.z(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gau(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geq",8,0,17],
hU:[function(a,b){var z,y,x,w,v,u,t
z=U.a4
H.z(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gau(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.b(x,w)
C.a.U(t.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geO",8,0,17],
aI:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.al(z,z.length,0,[H.x(z,0)]),x=null;z.F();){y=z.d
if(y!=null){w=y.aI(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.bL():x
z=this.e
if(!(z==null))z.ar(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dA))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.k(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.k(w,y)
if(!J.M(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a4]},
$asaz:function(){return[U.a4]},
$isa4:1},a4:{"^":"ct;"},io:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.G()
this.cy=z}return z},
K:[function(a){var z
H.e(a,"$iso")
z=this.cy
if(!(z==null))z.A(a)},function(){return this.K(null)},"a8","$1","$0","gau",0,2,0],
aN:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcT()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.b(this.gby(),y)
C.a.h(z.a,x)
x=this.a.c.gdk()
x.toString
z=H.b(this.gbz(),y)
C.a.h(x.a,z)
z=this.a.c.gbn()
z.toString
y=H.b(this.gbA(),y)
C.a.h(z.a,y)
return!0},
el:[function(a){H.e(a,"$iso")
if(!J.M(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gby",4,0,1],
em:[function(a){var z,y,x,w,v,u,t
a=H.c(H.e(a,"$iso"),"$isbi")
if(!this.y)return
if(this.x){z=a.d.H(0,a.y)
z=new V.P(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.H(0,a.y)
z=new V.P(y.a,y.b).l(0,2).w(0,z.ga2())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sL(z*10*x)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=new V.P(x.a,x.b).l(0,2).w(0,z.ga2())
x=this.b
v=w.a
if(typeof v!=="number")return v.I()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
this.b.sL(0)
y=y.H(0,a.z)
this.Q=new V.P(y.a,y.b).l(0,2).w(0,z.ga2())}this.a8()},"$1","gbz",4,0,1],
en:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sL(y*10*x)
this.a8()}},"$1","gbA",4,0,1],
aI:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.ch=y
x=b.y
this.b.ab(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.av(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa4:1},ip:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.G()
this.fx=z}return z},
K:[function(a){var z
H.e(a,"$iso")
z=this.fx
if(!(z==null))z.A(a)},function(){return this.K(null)},"a8","$1","$0","gau",0,2,0],
aN:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcT()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.b(this.gby(),y)
C.a.h(z.a,x)
x=this.a.c.gdk()
x.toString
z=H.b(this.gbz(),y)
C.a.h(x.a,z)
z=this.a.c.gbn()
z.toString
x=H.b(this.gbA(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.G()
x.f=z}x=H.b(this.gei(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.G()
x.d=z}x=H.b(this.gej(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.G()
x.b=z}x=H.b(this.gf9(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.G()
x.d=z}x=H.b(this.gf8(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.G()
x.c=z}y=H.b(this.gf7(),y)
C.a.h(z.a,y)
return!0},
ad:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.I()
z=-z}if(this.r){if(typeof y!=="number")return y.I()
y=-y}return new V.P(z,y)},
el:[function(a){a=H.c(H.e(a,"$iso"),"$isbi")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gby",4,0,1],
em:[function(a){var z,y,x,w,v,u,t
a=H.c(H.e(a,"$iso"),"$isbi")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.P(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.ad(new V.P(y.a,y.b).l(0,2).w(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.I()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.I()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ad(new V.P(x.a,x.b).l(0,2).w(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.H(0,a.z)
this.dx=this.ad(new V.P(y.a,y.b).l(0,2).w(0,z.ga2()))}this.a8()},"$1","gbz",4,0,1],
en:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.I()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.I()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sL(-y*10*z)
this.a8()}},"$1","gbA",4,0,1],
hw:[function(a){if(H.c(H.e(a,"$iso"),"$isdL").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gei",4,0,1],
hx:[function(a){var z,y,x,w,v,u,t
a=H.c(H.e(a,"$iso"),"$isbi")
if(!J.M(this.d,a.x.b))return
z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ad(new V.P(x.a,x.b).l(0,2).w(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.H(0,a.z)
this.dx=this.ad(new V.P(y.a,y.b).l(0,2).w(0,z.ga2()))
this.a8()},"$1","gej",4,0,1],
i1:[function(a){H.e(a,"$iso")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gf9",4,0,1],
i0:[function(a){var z,y,x,w,v,u,t
a=H.c(H.e(a,"$iso"),"$ise4")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.P(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.ad(new V.P(y.a,y.b).l(0,2).w(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.I()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.I()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ad(new V.P(x.a,x.b).l(0,2).w(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.H(0,a.z)
this.dx=this.ad(new V.P(y.a,y.b).l(0,2).w(0,z.ga2()))}this.a8()},"$1","gf8",4,0,1],
i_:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.I()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.I()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sL(-y*10*z)
this.a8()}},"$1","gf7",4,0,1],
aI:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.dy=y
x=b.y
this.c.ab(0,x)
this.b.ab(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.av(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.av(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa4:1},iq:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
K:function(a){var z=this.r
if(!(z==null))z.A(a)},
aN:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.G()
z.e=y
z=y}else z=y
y=H.b(this.geo(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.G()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hy:[function(a){var z,y,x,w
H.e(a,"$iso")
if(!J.M(this.b,this.a.b.c))return
H.c(a,"$iscJ")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.F("zoom",z,w,this,[P.v])
z.b=!0
this.K(z)}},"$1","geo",4,0,1],
aI:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.av(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa4:1}}],["","",,M,{"^":"",fu:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
aJ:[function(a){var z
H.e(a,"$iso")
z=this.x
if(!(z==null))z.A(a)},function(){return this.aJ(null)},"hr","$1","$0","gav",0,2,0],
hF:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aA
H.z(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gav(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gX()==null){s=new D.aS()
s.a=H.f([],v)
s.c=0
t.sX(s)}s=t.gX()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.aJ(z)},"$2","gex",8,0,8],
hG:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aA
H.z(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gav(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gX()==null){s=new D.aS()
s.a=H.f([],v)
s.c=0
t.sX(s)}s=t.gX()
s.toString
H.b(x,w)
C.a.U(s.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.aJ(z)},"$2","gey",8,0,8],
gu:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
aq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dw(this.c)
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
u=C.f.aa(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.f.aa(v.b*w)
s=C.f.aa(v.c*x)
a.c=s
v=C.f.aa(v.d*w)
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
s.dv(V.av(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dS
if(y==null){y=V.dP(new V.an(0,0,0),new V.C(0,1,0),new V.C(0,0,-1))
$.dS=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.l(0,m)}a.db.dv(m)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.x(z,0)]);z.F();)z.d.ab(0,a)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.x(z,0)]);z.F();)z.d.aq(a)
this.a.toString
a.cy.c6()
a.db.c6()
this.b.toString
a.dt()},
$islT:1}}],["","",,A,{"^":"",df:{"^":"a;a,b,c"},f6:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fL:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
cS:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dC:{"^":"cP;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,a,b,0c,0d,0e,0f,0r"},dN:{"^":"cP;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aF,0ao,0aG,0b9,0cU,0cV,0ba,0bb,0cW,0cX,0bc,0bd,0cY,0cZ,0be,0d_,0d0,0bf,0d1,0d2,0bg,0bh,0bi,0d3,0d4,0bj,0bk,0d5,0d6,0bl,0d7,0bT,0d8,0bU,0d9,0bV,0da,0bW,0dc,0bX,0dd,0bY,a,b,0c,0d,0e,0f,0r",
dS:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bO("")
y=a1.fx
if(y){z.a="uniform mat4 objMat;\n"
x="uniform mat4 objMat;\n"}else x=""
w=a1.fy
if(w){x+="uniform mat4 viewObjMat;\n"
z.a=x}x+="uniform mat4 projViewObjMat;\n"
z.a=x
x+="\n"
z.a=x
x+="attribute vec3 posAttr;\n"
z.a=x
v=a1.r1
if(v){x+="attribute vec3 normAttr;\n"
z.a=x}u=a1.r2
if(u){x+="attribute vec3 binmAttr;\n"
z.a=x}z.a=x+"\n"
a1.fe(z)
a1.fl(z)
a1.ff(z)
a1.fu(z)
a1.fv(z)
a1.fn(z)
a1.fB(z)
x=z.a+="vec4 getPos()\n"
x+="{\n"
z.a=x
t=a1.x1
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
z.a=x}if(a1.rx){x+="   txt2D = getTxt2D();\n"
z.a=x}if(a1.ry){x+="   txtCube = getTxtCube();\n"
z.a=x}if(a1.k3){x+="   objPos = getObjPos();\n"
z.a=x}if(a1.k4){x+="   viewPos = getViewPos();\n"
z.a=x}x+="   gl_Position = getPos();\n"
z.a=x
x+="}\n"
z.a=x
x+="\n"
z.a=x
v=this.x
z=new P.bO("")
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
v.fi(z)
v.fd(z)
v.fg(z)
v.fj(z)
v.fs(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fp(z)
v.fq(z)}v.fm(z)
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
p=H.f([],[P.n])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.W(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fh(z)
v.fo(z)
v.ft(z)
v.fw(z)
v.fz(z)
v.fA(z)
v.fk(z)}r=z.a+="// === Main ===\n"
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
o=H.f([],[P.n])
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
n="vec4("+C.a.W(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.dg(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.c(this.r.m(0,"invViewMat"),"$isaf")
if(y)this.db=H.c(this.r.m(0,"objMat"),"$isaf")
if(w)this.dx=H.c(this.r.m(0,"viewObjMat"),"$isaf")
this.fr=H.c(this.r.m(0,"projViewObjMat"),"$isaf")
if(a1.x2)this.go=H.c(this.r.m(0,"txt2DMat"),"$iscV")
if(a1.y1)this.id=H.c(this.r.m(0,"txtCubeMat"),"$isaf")
if(a1.y2)this.k1=H.c(this.r.m(0,"colorMat"),"$isaf")
this.k3=H.f([],[A.af])
y=a1.aF
if(y>0){this.k2=H.e(this.r.m(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.c(l,"$isaf"))}}y=a1.a
if(y!==C.b){this.k4=H.c(this.r.m(0,"emissionClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.r1=H.c(this.r.m(0,"emissionTxt"),"$isag")
this.rx=H.c(this.r.m(0,"nullEmissionTxt"),"$isH")
break
case C.d:this.r2=H.c(this.r.m(0,"emissionTxt"),"$isah")
this.rx=H.c(this.r.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.b){this.ry=H.c(this.r.m(0,"ambientClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.x1=H.c(this.r.m(0,"ambientTxt"),"$isag")
this.y1=H.c(this.r.m(0,"nullAmbientTxt"),"$isH")
break
case C.d:this.x2=H.c(this.r.m(0,"ambientTxt"),"$isah")
this.y1=H.c(this.r.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.b){this.y2=H.c(this.r.m(0,"diffuseClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.aF=H.c(this.r.m(0,"diffuseTxt"),"$isag")
this.aG=H.c(this.r.m(0,"nullDiffuseTxt"),"$isH")
break
case C.d:this.ao=H.c(this.r.m(0,"diffuseTxt"),"$isah")
this.aG=H.c(this.r.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.b){this.b9=H.c(this.r.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.cU=H.c(this.r.m(0,"invDiffuseTxt"),"$isag")
this.ba=H.c(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.d:this.cV=H.c(this.r.m(0,"invDiffuseTxt"),"$isah")
this.ba=H.c(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.b){this.bd=H.c(this.r.m(0,"shininess"),"$isV")
this.bb=H.c(this.r.m(0,"specularClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.cW=H.c(this.r.m(0,"specularTxt"),"$isag")
this.bc=H.c(this.r.m(0,"nullSpecularTxt"),"$isH")
break
case C.d:this.cX=H.c(this.r.m(0,"specularTxt"),"$isah")
this.bc=H.c(this.r.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.c:this.cY=H.c(this.r.m(0,"bumpTxt"),"$isag")
this.be=H.c(this.r.m(0,"nullBumpTxt"),"$isH")
break
case C.d:this.cZ=H.c(this.r.m(0,"bumpTxt"),"$isah")
this.be=H.c(this.r.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.d_=H.c(this.r.m(0,"envSampler"),"$isah")
this.d0=H.c(this.r.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.b){this.bf=H.c(this.r.m(0,"reflectClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.d1=H.c(this.r.m(0,"reflectTxt"),"$isag")
this.bg=H.c(this.r.m(0,"nullReflectTxt"),"$isH")
break
case C.d:this.d2=H.c(this.r.m(0,"reflectTxt"),"$isah")
this.bg=H.c(this.r.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.b){this.bh=H.c(this.r.m(0,"refraction"),"$isV")
this.bi=H.c(this.r.m(0,"refractClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.d3=H.c(this.r.m(0,"refractTxt"),"$isag")
this.bj=H.c(this.r.m(0,"nullRefractTxt"),"$isH")
break
case C.d:this.d4=H.c(this.r.m(0,"refractTxt"),"$isah")
this.bj=H.c(this.r.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.b){this.bk=H.c(this.r.m(0,"alpha"),"$isV")
switch(y){case C.b:break
case C.e:break
case C.c:this.d5=H.c(this.r.m(0,"alphaTxt"),"$isag")
this.bl=H.c(this.r.m(0,"nullAlphaTxt"),"$isH")
break
case C.d:this.d6=H.c(this.r.m(0,"alphaTxt"),"$isah")
this.bl=H.c(this.r.m(0,"nullAlphaTxt"),"$isH")
break}}this.bT=H.f([],[A.eg])
this.bU=H.f([],[A.eh])
this.bV=H.f([],[A.ei])
this.bW=H.f([],[A.ej])
this.bX=H.f([],[A.ek])
this.bY=H.f([],[A.el])
if(a1.k2){y=a1.z
if(y>0){this.d7=H.e(this.r.m(0,"dirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isD")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isD")
x=this.bT;(x&&C.a).h(x,new A.eg(m,l,k))}}y=a1.Q
if(y>0){this.d8=H.e(this.r.m(0,"pntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isD")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isD")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isD")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isV")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isV")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isV")
x=this.bU;(x&&C.a).h(x,new A.eh(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.d9=H.e(this.r.m(0,"spotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isD")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isD")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isD")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isD")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isV")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isV")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isV")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isV")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isV")
x=this.bV;(x&&C.a).h(x,new A.ei(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.da=H.e(this.r.m(0,"txtDirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isD")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isD")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isD")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isD")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isD")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isH")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isag")
x=this.bW;(x&&C.a).h(x,new A.ej(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dc=H.e(this.r.m(0,"txtPntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isD")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isD")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$iscV")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isD")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isH")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isV")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isV")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isV")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isah")
x=this.bX;(x&&C.a).h(x,new A.ek(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dd=H.e(this.r.m(0,"txtSpotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isD")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isD")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isD")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isD")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isD")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isH")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isD")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isV")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isV")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(c,"$isV")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(b,"$isV")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a,"$isV")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a0,"$isag")
x=this.bY;(x&&C.a).h(x,new A.el(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
a9:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dM(c)
b.a.uniform1i(b.d,0)}},
a4:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
h7:function(a,b){var z,y
z=a.ao
y=new A.dN(b,z)
y.cg(b,z)
y.dS(a,b)
return y}}},ha:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aF,ao,aG",
fe:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aF+"];\n"
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
fl:function(a){var z
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
ff:function(a){var z
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
fu:function(a){var z,y
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
fv:function(a){var z,y
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
fn:function(a){var z
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
fB:function(a){var z
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
ah:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.k(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.ce(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fi:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ah(a,z,"emission")
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
fd:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ah(a,z,"ambient")
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
fg:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ah(a,z,"diffuse")
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
fj:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ah(a,z,"invDiffuse")
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
fs:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ah(a,z,"specular")
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
fm:function(a){var z,y
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
fp:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ah(a,z,"reflect")
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
fq:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ah(a,z,"refract")
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
fh:function(a){var z,y
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
fo:function(a){var z,y
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
ft:function(a){var z,y
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
fw:function(a){var z,y,x
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
fz:function(a){var z,y,x
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
fA:function(a){var z,y,x
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
fk:function(a){var z
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
i:function(a){return this.ao}},eg:{"^":"a;a,b,c"},ej:{"^":"a;a,b,c,d,e,f,r,x"},eh:{"^":"a;a,b,c,d,e,f,r"},ek:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ei:{"^":"a;a,b,c,d,e,f,r,x,y,z"},el:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cP:{"^":"co;",
cg:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dg:function(a,b,c){var z,y,x
this.c=this.cw(b,35633)
this.d=this.cw(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.eR(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.i(x)))}this.f3()
this.f4()},
al:function(a){a.a.useProgram(this.e)
this.f.fL()},
cw:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eR(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.j(P.q("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
f3:function(){var z,y,x,w,v,u
z=H.f([],[A.df])
y=this.a
x=H.a1(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.df(y,v.name,u))}this.f=new A.f6(z)},
f4:function(){var z,y,x,w,v,u
z=H.f([],[A.a6])
y=this.a
x=H.a1(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fH(v.type,v.size,v.name,u))}this.r=new A.ig(z)},
ax:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.H(z,y,b,c)
else return A.cU(z,y,b,a,c)},
ec:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ag(z,y,b,c)
else return A.cU(z,y,b,a,c)},
ed:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ah(z,y,b,c)
else return A.cU(z,y,b,a,c)},
b5:function(a,b){return new P.et(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
fH:function(a,b,c,d){switch(a){case 5120:return this.ax(b,c,d)
case 5121:return this.ax(b,c,d)
case 5122:return this.ax(b,c,d)
case 5123:return this.ax(b,c,d)
case 5124:return this.ax(b,c,d)
case 5125:return this.ax(b,c,d)
case 5126:return new A.V(this.a,this.e,c,d)
case 35664:return new A.ia(this.a,this.e,c,d)
case 35665:return new A.D(this.a,this.e,c,d)
case 35666:return new A.id(this.a,this.e,c,d)
case 35667:return new A.ib(this.a,this.e,c,d)
case 35668:return new A.ic(this.a,this.e,c,d)
case 35669:return new A.ie(this.a,this.e,c,d)
case 35674:return new A.ii(this.a,this.e,c,d)
case 35675:return new A.cV(this.a,this.e,c,d)
case 35676:return new A.af(this.a,this.e,c,d)
case 35678:return this.ec(b,c,d)
case 35680:return this.ed(b,c,d)
case 35670:throw H.j(this.b5("BOOL",c))
case 35671:throw H.j(this.b5("BOOL_VEC2",c))
case 35672:throw H.j(this.b5("BOOL_VEC3",c))
case 35673:throw H.j(this.b5("BOOL_VEC4",c))
default:throw H.j(P.q("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},bZ:{"^":"a;a,b",
i:function(a){return this.b}},a6:{"^":"a;"},ig:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.j(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.G()},
fN:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
G:function(){return this.fN("\n")}},H:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},ib:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},ic:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},ie:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},i9:{"^":"a6;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.i(this.c)},
t:{
cU:function(a,b,c,d,e){var z=new A.i9(a,b,c,e)
z.f=d
z.e=P.h0(d,0,!1,P.Q)
return z}}},V:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},ia:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},D:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},id:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},ii:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},cV:{"^":"a6;a,b,c,d",
a0:function(a){var z=new Float32Array(H.bA(H.z(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},af:{"^":"a6;a,b,c,d",
a0:function(a){var z=new Float32Array(H.bA(H.z(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},ag:{"^":"a6;a,b,c,d",
dM:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ah:{"^":"a6;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
ce:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bz:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.C(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.C(t+h,s+f,r+g)
z.b=q
p=new V.C(t-h,s-f,r-g)
z.c=p
o=new V.C(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.ce(y)
k=F.ce(z.b)
j=F.kz(d,e,new F.jT(z,F.ce(z.c),F.ce(z.d),k,l,c),b)
if(j!=null)a.fX(j)},
kz:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.X,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.bm()
y=H.f([],[F.X])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cc(null,null,new V.at(u,0,0,1),null,null,new V.W(w,1),null,null,0)
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
t=F.cc(null,null,new V.at(o,n,m,1),null,null,new V.W(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bP(d))}}z.d.fC(a+1,b+1,y)
return z},
jT:{"^":"t:34;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.c0(z.b,b).c0(z.d.c0(z.c,b),c)
z=new V.an(y.a,y.b,y.c)
if(!J.M(a.f,z)){a.f=z
z=a.a
if(z!=null)z.S()}a.shl(y.w(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
x=new V.dT(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.M(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.S()}}},
ac:{"^":"a;0a,0b,0c,0d,0e",
gbS:function(){return this.a==null||this.b==null||this.c==null},
e3:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.C(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.dj())return
return v.w(0,Math.sqrt(v.D(v)))},
e7:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.H(0,y)
z=new V.C(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.D(z)))
z=w.H(0,y)
z=new V.C(z.a,z.b,z.c)
z=v.aP(z.w(0,Math.sqrt(z.D(z))))
return z.w(0,Math.sqrt(z.D(z)))},
bN:function(){if(this.d!=null)return!0
var z=this.e3()
if(z==null){z=this.e7()
if(z==null)return!1}this.d=z
this.a.a.S()
return!0},
e2:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.C(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.dj())return
return v.w(0,Math.sqrt(v.D(v)))},
e6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.H(0,u)
z=new V.C(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.I(0)}else{l=(z-q.b)/n
z=r.H(0,u)
z=new V.an(z.a*l,z.b*l,z.c*l).C(0,u).H(0,x)
z=new V.C(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.I(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.D(z)))
z=k.aP(m)
z=z.w(0,Math.sqrt(z.D(z))).aP(k)
m=z.w(0,Math.sqrt(z.D(z)))}return m},
bM:function(){if(this.e!=null)return!0
var z=this.e2()
if(z==null){z=this.e6()
if(z==null)return!1}this.e=z
this.a.a.S()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){var z,y
if(this.gbS())return a+"disposed"
z=a+C.h.a7(J.a7(this.a.e),0)+", "+C.h.a7(J.a7(this.b.e),0)+", "+C.h.a7(J.a7(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
G:function(){return this.v("")},
t:{
bH:function(a,b,c){var z,y,x
z=new F.ac()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.S()
return z}}},
aJ:{"^":"a;0a,0b",
gbS:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){if(this.gbS())return a+"disposed"
return a+C.h.a7(J.a7(this.a.e),0)+", "+C.h.a7(J.a7(this.b.e),0)},
G:function(){return this.v("")}},
cL:{"^":"a;0a",
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a7(J.a7(z.e),0)},
G:function(){return this.v("")},
t:{
hq:function(a){var z=new F.cL()
if(a.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
z.a=a
C.a.h(a.b.b,z)
C.a.h(z.a.a.b.b,z)
z.a.a.S()
return z}}},
a5:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
fX:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.J()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.aB())}this.a.J()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.J()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.hq(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.J()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.J()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.aJ()
s=p.a
if(s==null)H.r(P.q("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.r(P.q("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.A(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.J()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.J()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.J()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bH(p,o,l)}z=this.e
if(!(z==null))z.ar(0)},
an:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.an()||!1
if(!this.a.an())y=!1
z=this.e
if(!(z==null))z.ar(0)
return y},
az:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.az()||!1
if(!this.a.az())y=!1
z=this.e
if(!(z==null))z.ar(0)
return y},
b7:function(){var z=this.e
if(!(z==null))++z.c
this.a.b7()
z=this.e
if(!(z==null))z.ar(0)
return!0},
cP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ar()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aq().a)!==0)++w
if((x&$.$get$ap().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$bv().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
v=b.gcd(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.di])
for(r=0,q=0;q<w;++q){p=b.fD(q)
o=p.gcd(p)
C.a.Z(s,q,new Z.di(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.k(y,n)
m=y[n].fS(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.Z(t,l,m[k]);++l}}r+=o}H.z(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bA(t)),35044)
y.bindBuffer(34962,null)
i=new Z.bY(new Z.eq(34962,j),s,b)
i.b=H.f([],[Z.c4])
if(this.b.b.length!==0){x=P.Q
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.J()
C.a.h(h,g.e)}f=Z.cX(y,34963,H.z(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c4(0,h.length,f))}if(this.c.b.length!==0){x=P.Q
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.J()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.J()
C.a.h(h,g.e)}f=Z.cX(y,34963,H.z(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c4(1,h.length,f))}if(this.d.b.length!==0){x=P.Q
h=H.f([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.J()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.J()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].c
g.a.a.J()
C.a.h(h,g.e)}f=Z.cX(y,34963,H.z(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c4(4,h.length,f))}return i},
i:function(a){var z=H.f([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.W(z,"\n")},
a3:function(a){var z=this.e
if(!(z==null))z.A(a)},
S:function(){return this.a3(null)},
$iscQ:1,
t:{
bm:function(){var z,y
z=new F.a5()
y=new F.ir(z)
y.b=!1
y.c=H.f([],[F.X])
z.a=y
y=new F.hM(z)
y.b=H.f([],[F.cL])
z.b=y
y=new F.hL(z)
y.b=H.f([],[F.aJ])
z.c=y
y=new F.hK(z)
y.b=H.f([],[F.ac])
z.d=y
z.e=null
return z}}},
cQ:{"^":"ct;"},
hK:{"^":"a;a,0b",
fC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.z(c,"$isd",[F.X],"$asd")
z=H.f([],[F.ac])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.k(c,x)
r=c[x];++x
if(x>=s)return H.k(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.k(c,p)
o=c[p]
if(y<0||y>=s)return H.k(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bH(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bH(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bH(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bH(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
an:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].bN())x=!1
return x},
az:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].bM())x=!1
return x},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.f([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].v(a))
return C.a.W(z,"\n")},
G:function(){return this.v("")}},
hL:{"^":"a;a,0b",
ak:function(a,b,c){var z,y,x
this.a.a.h(0,b)
this.a.a.h(0,c)
z=new F.aJ()
if(b==null)H.r(P.q("May not create a line with a null start vertex."))
if(c==null)H.r(P.q("May not create a line with a null end vertex."))
y=b.a
if(y==null)H.r(P.q("May not create a line with a start vertex which is not attached to a shape."))
x=c.a
if(y==null?x!=null:y!==x)H.r(P.q("May not create a line with vertices attached to different shapes."))
z.a=b
C.a.h(b.c.b,z)
z.b=c
C.a.h(c.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.S()
return z},
gk:function(a){return this.b.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.f([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.k(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.W(z,"\n")},
G:function(){return this.v("")}},
hM:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.f([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].v(a))
return C.a.W(z,"\n")},
G:function(){return this.v("")}},
X:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bP:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cc(this.cx,x,u,z,y,w,v,a,t)},
aB:function(){return this.bP(null)},
sdl:function(a){var z
a=a.w(0,Math.sqrt(a.D(a)))
if(!J.M(this.r,a)){this.r=a
z=this.a
if(z!=null)z.S()}},
sam:function(a){var z
a=a==null?null:a.w(0,Math.sqrt(a.D(a)))
if(!J.M(this.x,a)){this.x=a
z=this.a
if(z!=null)z.S()}},
shl:function(a){var z
if(!J.M(this.z,a)){this.z=a
z=this.a
if(z!=null)z.S()}},
sV:function(a,b){var z
if(!J.M(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.S()}},
fS:function(a){var z,y
z=J.I(a)
if(z.q(a,$.$get$ar())){z=this.f
y=[P.v]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aq())){z=this.r
y=[P.v]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$ap())){z=this.x
y=[P.v]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aD())){z=this.y
y=[P.v]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.q(a,$.$get$aE())){z=this.z
y=[P.v]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aM())){z=this.Q
y=[P.v]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bv())){z=this.Q
y=[P.v]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$aY()))return H.f([this.ch],[P.v])
else if(z.q(a,$.$get$aC())){z=this.cx
y=[P.v]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.v])},
bN:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.C(0,0,0)
this.d.B(0,new F.iy(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.ar(0)}return!0},
bM:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.C(0,0,0)
this.d.B(0,new F.ix(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.ar(0)}return!0},
de:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.k(x,y)
w=x[y]
x=w.b
x.a.a.J()
x=x.e
a.a.a.J()
v=a.e
if(x==null?v==null:x===v)return w}return},
fM:function(a){var z=this.de(a)
if(z!=null)return z
return a.de(this)},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){var z,y,x
z=H.f([],[P.n])
C.a.h(z,C.h.a7(J.a7(this.e),0))
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
C.a.h(z,V.K(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.W(z,", ")
return a+"{"+x+"}"},
G:function(){return this.v("")},
t:{
cc:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.X()
y=new F.iw(z)
y.b=H.f([],[F.cL])
z.b=y
y=new F.iv(z)
x=[F.aJ]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.is(z)
x=[F.ac]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$en()
z.e=0
y=$.$get$ar()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aq().a)!==0?e:null
z.x=(x&$.$get$ap().a)!==0?b:null
z.y=(x&$.$get$aD().a)!==0?f:null
z.z=(x&$.$get$aE().a)!==0?g:null
z.Q=(x&$.$get$eo().a)!==0?c:null
z.ch=(x&$.$get$aY().a)!==0?i:0
z.cx=(x&$.$get$aC().a)!==0?a:null
return z}}},
iy:{"^":"t:6;a",
$1:function(a){var z,y
H.e(a,"$isac")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
ix:{"^":"t:6;a",
$1:function(a){var z,y
H.e(a,"$isac")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
ir:{"^":"a;a,0b,0c",
J:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.k(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.j(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.S()
return!0},
cL:function(a,b,c){var z=F.cc(null,null,null,new V.an(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gk:function(a){return this.c.length},
an:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].bN()
return!0},
az:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].bM()
return!0},
b7:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.M(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.A(null)}}}}return!0},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
this.J()
z=H.f([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].v(a))
return C.a.W(z,"\n")},
G:function(){return this.v("")}},
is:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
B:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ac]})
C.a.B(this.b,b)
C.a.B(this.c,new F.it(this,b))
C.a.B(this.d,new F.iu(this,b))},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.f([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].v(a))
return C.a.W(z,"\n")},
G:function(){return this.v("")}},
it:{"^":"t:6;a,b",
$1:function(a){H.e(a,"$isac")
if(!J.M(a.a,this.a))this.b.$1(a)}},
iu:{"^":"t:6;a,b",
$1:function(a){var z
H.e(a,"$isac")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
iv:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.f([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].v(a))
return C.a.W(z,"\n")},
G:function(){return this.v("")}},
iw:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.f([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].v(a))
return C.a.W(z,"\n")},
G:function(){return this.v("")}}}],["","",,O,{"^":"",fD:{"^":"ca;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gu:function(){var z=this.rx
if(z==null){z=D.G()
this.rx=z}return z},
M:function(a){var z=this.rx
if(!(z==null))z.A(a)},
ab:function(a,b){},
dz:function(a,b){var z,y,x,w
if(this.a==null){z=H.e(a.fr.j(0,"Inspection"),"$isdC")
if(z==null){y=a.a
z=new A.dC(y,"Inspection")
z.cg(y,"Inspection")
z.dg(0,$.fI,$.fG)
z.x=z.f.j(0,"posAttr")
z.y=z.f.j(0,"normAttr")
z.z=z.f.j(0,"clrAttr")
z.Q=z.f.j(0,"binmAttr")
z.ch=H.c(z.r.j(0,"lightVec"),"$isD")
z.cx=H.c(z.r.j(0,"ambientClr"),"$isD")
z.cy=H.c(z.r.j(0,"diffuseClr"),"$isD")
z.db=H.c(z.r.j(0,"weightScalar"),"$isV")
z.dx=H.c(z.r.j(0,"viewMat"),"$isaf")
z.dy=H.c(z.r.j(0,"viewObjMatrix"),"$isaf")
z.fr=H.c(z.r.j(0,"projViewObjMatrix"),"$isaf")
a.cM(z)}this.a=z}if(b.e==null){b.d.an()
b.d.az()
b.d.b7()
y=new Z.dj()
y.a=new H.c8(0,0,[P.n,Z.bY])
b.e=y}y=this.a
y.al(a)
x=this.r2
w=y.db
w.a.uniform1f(w.d,x)
x=this.b
w=y.ch
w.a.uniform3f(w.d,x.a,x.b,x.c)
x=a.db
x=x.gP(x)
w=y.dx
w.toString
w.a0(x.Y(0,!0))
x=a.gdE()
w=y.dy
w.toString
w.a0(x.Y(0,!0))
x=a.gdu()
y=y.fr
y.toString
y.a0(x.Y(0,!0))
y=b.e
if(y instanceof Z.dj){a.a.blendFunc(1,1)
x=b.c
w=a.a
if(x==null){w.disable(2929)
a.a.enable(3042)
if(this.k3)this.eU(a,y,b.d,"Axis",H.b(this.gcm(),{func:1,ret:F.a5,args:[F.cQ]}),this.z,this.y)
a.a.enable(2929)
a.a.disable(3042)}else{w.enable(2929)
a.a.disable(3042)
a.a.disable(2929)
a.a.enable(3042)
if(this.ch)this.b3(a,y,b.c,"wireFrame",this.gfb(),this.f,this.e)
if(this.cy)this.b3(a,y,b.c,"normals",this.gep(),this.f,this.e)
if(this.db)this.b3(a,y,b.c,"binormals",this.ge5(),this.f,this.e)
if(this.k3)this.b3(a,y,b.c,"Axis",this.gcm(),this.z,this.y)
a.a.enable(2929)
a.a.disable(3042)}}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.cS()},
b3:function(a,b,c,d,e,f,g){var z,y,x
H.b(e,{func:1,ret:F.a5,args:[F.a5]})
z=b.a.j(0,d)
if(z==null){z=this.co(a,e.$1(c))
b.a.Z(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.ds(a)},
eU:function(a,b,c,d,e,f,g){var z,y,x
H.b(e,{func:1,ret:F.a5,args:[F.cQ]})
z=b.a.j(0,d)
if(z==null){z=this.co(a,e.$1(c))
b.a.Z(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.ds(a)},
co:function(a,b){var z,y,x,w
H.e(b,"$isa5")
z=a.a
y=$.$get$ar()
x=$.$get$aq()
w=b.cP(new Z.er(z),new Z.aL(y.a|x.a|$.$get$ap().a|$.$get$aM().a))
w.a5($.$get$ar()).e=this.a.x.c
w.a5($.$get$aq()).e=this.a.y.c
w.a5($.$get$aM()).e=this.a.z.c
w.a5($.$get$ap()).e=this.a.Q.c
return w},
fc:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.bm()
z.a=new V.at(0,0.7,1,1)
x=a.a
x.toString
z=H.b(new O.fK(z,y),{func:1,ret:-1,args:[F.X]})
C.a.B(x.c,z)
z=new O.fJ(y)
x=a.c
x.toString
w=H.b(new O.fL(y,z),{func:1,ret:-1,args:[F.aJ]})
C.a.B(x.b,w)
w=a.d
w.toString
z=H.b(new O.fM(y,z),{func:1,ret:-1,args:[F.ac]})
C.a.B(w.b,z)
return y},function(a){return this.fc(a,null)},"i2","$2$color","$1","gfb",4,3,35],
hz:[function(a){var z,y,x
z=F.bm()
y=a.a
y.toString
x=H.b(new O.fH(new V.at(1,1,0.3,1),z),{func:1,ret:-1,args:[F.X]})
C.a.B(y.c,x)
return z},"$1","gep",4,0,12],
hu:[function(a){var z,y,x
z=F.bm()
y=a.a
y.toString
x=H.b(new O.fF(new V.at(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.X]})
C.a.B(y.c,x)
return z},"$1","ge5",4,0,12],
ht:[function(a){return this.e4(a)},"$1","gcm",4,0,12],
e4:function(a){var z,y
z=F.bm()
y=new O.fE(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z}},fK:{"^":"t:13;a,b",
$1:function(a){var z,y
H.e(a,"$isX")
z=this.b.a
y=a.aB()
y.sV(0,this.a.a)
y.sam(new V.C(0,0,0))
z.h(0,y)}},fJ:{"^":"t:37;a",
$2:function(a,b){if(a.fM(b)==null)this.a.c.ak(0,a,b)}},fL:{"^":"t:38;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isaJ")
z=this.a
y=z.a
x=a.a
x.a.a.J()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.k(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.J()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.k(z,x)
this.b.$2(w,z[x])}},fM:{"^":"t:6;a,b",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isac")
z=this.a
y=z.a
x=a.a
x.a.a.J()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.k(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.J()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.k(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.J()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.k(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},fH:{"^":"t:13;a,b",
$1:function(a){var z,y,x
z=H.e(a,"$isX").aB()
z.sV(0,this.a)
z.sam(new V.C(0,0,0))
y=z.aB()
y.sam(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.ak(0,z,y)}},fF:{"^":"t:13;a,b",
$1:function(a){var z,y,x
H.e(a,"$isX")
z=a.aB()
z.sV(0,this.a)
z.sam(new V.C(0,0,0))
y=z.aB()
y.sam(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.ak(0,z,y)}},fE:{"^":"t;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.at(z,y,x,1)
z=this.a
v=z.a.cL(0,0,0)
v.sam(new V.C(0,0,0))
v.sdl(new V.C(1,0,0))
v.sV(0,w)
u=z.a.cL(a,b,c)
u.sam(new V.C(0,0,0))
u.sdl(new V.C(1,0,0))
u.sV(0,w)
z.c.ak(0,v,u)}},h6:{"^":"ca;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.G()
this.dy=z}return z},
M:[function(a){var z
H.e(a,"$iso")
z=this.dy
if(!(z==null))z.A(a)},function(){return this.M(null)},"ew","$1","$0","gb2",0,2,0],
eX:[function(a){H.e(a,"$iso")
this.a=null
this.M(a)},function(){return this.eX(null)},"hZ","$1","$0","geW",0,2,0],
hC:[function(a,b){var z=V.au
z=new D.c5(a,H.z(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.M(z)},"$2","ges",8,0,14],
hD:[function(a,b){var z=V.au
z=new D.c6(a,H.z(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.M(z)},"$2","geu",8,0,14],
cu:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a_(z.e.length+3,4)*4
x=C.f.a_(z.f.length+3,4)*4
w=C.f.a_(z.r.length+3,4)*4
v=C.f.a_(z.x.length+3,4)*4
u=C.f.a_(z.y.length+3,4)*4
t=C.f.a_(z.z.length+3,4)*4
s=C.f.a_(this.e.a.length+3,4)*4
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
a6=$.$get$ar()
if(c){z=$.$get$aq()
a6=new Z.aL(a6.a|z.a)}if(b){z=$.$get$ap()
a6=new Z.aL(a6.a|z.a)}if(a){z=$.$get$aD()
a6=new Z.aL(a6.a|z.a)}if(a0){z=$.$get$aE()
a6=new Z.aL(a6.a|z.a)}if(a2){z=$.$get$aC()
a6=new Z.aL(a6.a|z.a)}return new A.ha(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
N:function(a,b){H.z(a,"$isd",[T.cS],"$asd")
if(b!=null)if(!C.a.aO(a,b)){b.a=a.length
C.a.h(a,b)}},
ab:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.al(z,z.length,0,[H.x(z,0)]);z.F();){y=z.d
x=new V.C(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.c9(x)}}},
dz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cu()
y=H.e(a.fr.j(0,z.ao),"$isdN")
if(y==null){y=A.h7(z,a.a)
a.cM(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aG
z=b.e
if(!(z instanceof Z.bY)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.an()
v=x.r2
if(v)b.d.az()
u=x.ry
if(u)b.d.b7()
t=b.d.cP(new Z.er(a.a),w)
t.a5($.$get$ar()).e=this.a.y.c
if(z)t.a5($.$get$aq()).e=this.a.Q.c
if(v)t.a5($.$get$ap()).e=this.a.z.c
if(x.rx)t.a5($.$get$aD()).e=this.a.ch.c
if(u)t.a5($.$get$aE()).e=this.a.cx.c
if(x.x1)t.a5($.$get$aC()).e=this.a.cy.c
b.e=t}z=T.cS
s=H.f([],[z])
this.a.al(a)
if(x.fx){v=this.a
u=a.dx
u=u.gP(u)
v=v.db
v.toString
v.a0(u.Y(0,!0))}if(x.fy){v=this.a
u=a.gdE()
v=v.dx
v.toString
v.a0(u.Y(0,!0))}v=this.a
u=a.gdu()
v=v.fr
v.toString
v.a0(u.Y(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.a0(u.Y(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.a0(u.Y(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.a0(C.x.Y(u,!0))}if(x.aF>0){r=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,r)
for(v=[P.v],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.k(p,q)
p=p[q]
u.toString
H.e(p,"$isau")
u=u.k3
if(q>=u.length)return H.k(u,q)
u=u[q]
o=new Float32Array(H.bA(H.z(p.Y(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,o)}}switch(x.a){case C.b:break
case C.e:v=this.a
u=this.f.f
v=v.k4
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.c:this.N(s,this.f.d)
v=this.a
u=this.f.d
v.a9(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.N(s,this.f.e)
v=this.a
u=this.f.e
v.a4(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.e:v=this.a
u=this.r.f
v=v.ry
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.c:this.N(s,this.r.d)
v=this.a
u=this.r.d
v.a9(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.N(s,this.r.e)
v=this.a
u=this.r.e
v.a4(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.c){case C.b:break
case C.e:v=this.a
u=this.x.f
v=v.y2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.c:this.N(s,this.x.d)
v=this.a
u=this.x.d
v.a9(v.aF,v.aG,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.N(s,this.x.e)
v=this.a
u=this.x.e
v.a4(v.ao,v.aG,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.d){case C.b:break
case C.e:v=this.a
u=this.y.f
v=v.b9
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.c:this.N(s,this.y.d)
v=this.a
u=this.y.d
v.a9(v.cU,v.ba,u)
u=this.a
v=this.y.f
u=u.b9
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.N(s,this.y.e)
v=this.a
u=this.y.e
v.a4(v.cV,v.ba,u)
u=this.a
v=this.y.f
u=u.b9
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
u=this.z.f
v=v.bb
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bd
u.a.uniform1f(u.d,n)
break
case C.c:this.N(s,this.z.d)
v=this.a
u=this.z.d
v.a9(v.cW,v.bc,u)
u=this.a
v=this.z.f
u=u.bb
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bd
v.a.uniform1f(v.d,n)
break
case C.d:this.N(s,this.z.e)
v=this.a
u=this.z.e
v.a4(v.cX,v.bc,u)
u=this.a
v=this.z.f
u=u.bb
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bd
v.a.uniform1f(v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.d7
v.a.uniform1i(v.d,r)
v=a.db
m=v.gP(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
p=this.a.bT
if(l>=p.length)return H.k(p,l)
i=p[l]
p=m.c9(j.a)
n=p.a
h=p.b
g=p.c
g=p.w(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.d8
v.a.uniform1i(v.d,r)
v=a.db
m=v.gP(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
p=this.a.bU
if(l>=p.length)return H.k(p,l)
i=p[l]
p=j.gaT(j)
n=i.b
h=p.gn(p)
g=p.gp(p)
p=p.gcb(p)
n.a.uniform3f(n.d,h,g,p)
p=m.aX(j.gaT(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.gV(j)
g=i.d
h=p.gbm()
n=p.gaY()
p=p.gb6()
g.a.uniform3f(g.d,h,n,p)
p=j.gbI()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gbJ()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gbK()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.d9
v.a.uniform1i(v.d,r)
v=a.db
m=v.gP(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
p=this.a.bV
if(l>=p.length)return H.k(p,l)
i=p[l]
p=j.gaT(j)
n=i.b
h=p.gn(p)
g=p.gp(p)
p=p.gcb(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gbR(j).i6()
g=i.c
h=p.gaC(p)
n=p.gaD(p)
p=p.gaE()
g.a.uniform3f(g.d,h,n,p)
p=m.aX(j.gaT(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gV(j)
n=i.e
h=p.gbm()
g=p.gaY()
p=p.gb6()
n.a.uniform3f(n.d,h,g,p)
p=j.gi4()
g=i.f
g.a.uniform1f(g.d,p)
p=j.gi3()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gbI()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gbJ()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gbK()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.da
v.a.uniform1i(v.d,r)
v=a.db
m=v.gP(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
n=this.a.bW
if(l>=n.length)return H.k(n,l)
i=n[l]
n=j.gaV()
H.z(s,"$isd",p,"$asd")
if(!C.a.aO(s,n)){n.sb0(s.length)
C.a.h(s,n)}n=j.gbR(j)
h=i.d
g=n.gaC(n)
f=n.gaD(n)
n=n.gaE()
h.a.uniform3f(h.d,g,f,n)
n=j.gbn()
f=i.b
g=n.gaC(n)
h=n.gaD(n)
n=n.gaE()
f.a.uniform3f(f.d,g,h,n)
n=j.gaU(j)
h=i.c
g=n.gaC(n)
f=n.gaD(n)
n=n.gaE()
h.a.uniform3f(h.d,g,f,n)
n=m.c9(j.gbR(j))
f=n.a
g=n.b
h=n.c
h=n.w(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gV(j)
g=i.f
f=h.gbm()
n=h.gaY()
h=h.gb6()
g.a.uniform3f(g.d,f,n,h)
h=j.gaV()
n=h.gc1(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.geh()
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gb0())
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.dc
v.a.uniform1i(v.d,r)
v=a.db
m=v.gP(v)
for(v=this.dx.y,u=v.length,p=[P.v],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
h=this.a.bX
if(l>=h.length)return H.k(h,l)
i=h[l]
h=j.gaV()
H.z(s,"$isd",n,"$asd")
if(!C.a.aO(s,h)){h.sb0(s.length)
C.a.h(s,h)}e=m.l(0,j.gP(j))
h=j.gP(j).aX(new V.an(0,0,0))
g=i.b
f=h.gn(h)
d=h.gp(h)
h=h.gcb(h)
g.a.uniform3f(g.d,f,d,h)
h=e.aX(new V.an(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.di(0)
d=i.d
o=new Float32Array(H.bA(H.z(new V.dO(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).Y(0,!0),"$isd",p,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.gV(j)
h=i.e
f=d.gbm()
g=d.gaY()
d=d.gb6()
h.a.uniform3f(h.d,f,g,d)
d=j.gaV()
h=d.gc1(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gc1(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gi5(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbI()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbJ()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbK()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.dd
v.a.uniform1i(v.d,r)
v=a.db
m=v.gP(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
p=this.a.bY
if(l>=p.length)return H.k(p,l)
i=p[l]
p=j.gaV()
H.z(s,"$isd",z,"$asd")
if(!C.a.aO(s,p)){p.sb0(s.length)
C.a.h(s,p)}p=j.gaT(j)
n=i.b
h=p.gn(p)
g=p.gp(p)
p=p.gcb(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gbR(j)
g=i.c
h=p.gaC(p)
n=p.gaD(p)
p=p.gaE()
g.a.uniform3f(g.d,h,n,p)
p=j.gbn()
n=i.d
h=p.gaC(p)
g=p.gaD(p)
p=p.gaE()
n.a.uniform3f(n.d,h,g,p)
p=j.gaU(j)
g=i.e
h=p.gaC(p)
n=p.gaD(p)
p=p.gaE()
g.a.uniform3f(g.d,h,n,p)
p=m.aX(j.gaT(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gaV()
n=p.gc1(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.geh()
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gb0())
p=i.x
p.a.uniform1i(p.d,0)}p=j.gV(j)
n=i.y
h=p.gbm()
g=p.gaY()
p=p.gb6()
n.a.uniform3f(n.d,h,g,p)
p=j.gie()
g=i.z
g.a.uniform1f(g.d,p)
p=j.gig()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gbI()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gbJ()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gbK()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.c:this.N(s,this.Q.d)
z=this.a
v=this.Q.d
z.a9(z.cY,z.be,v)
break
case C.d:this.N(s,this.Q.e)
z=this.a
v=this.Q.e
z.a4(z.cZ,z.be,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gP(v).di(0)
a.Q=v}z=z.fy
z.toString
z.a0(v.Y(0,!0))}if(x.dy){this.N(s,this.ch)
z=this.a
v=this.ch
z.a4(z.d_,z.d0,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bf
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.c:this.N(s,this.cx.d)
z=this.a
v=this.cx.d
z.a9(z.d1,z.bg,v)
v=this.a
z=this.cx.f
v=v.bf
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.d:this.N(s,this.cx.e)
z=this.a
v=this.cx.e
z.a4(z.d2,z.bg,v)
v=this.a
z=this.cx.f
v=v.bf
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
v=this.cy.f
z=z.bi
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bh
v.a.uniform1f(v.d,p)
break
case C.c:this.N(s,this.cy.d)
z=this.a
v=this.cy.d
z.a9(z.d3,z.bj,v)
v=this.a
z=this.cy.f
v=v.bi
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bh
z.a.uniform1f(z.d,p)
break
case C.d:this.N(s,this.cy.e)
z=this.a
v=this.cy.e
z.a4(z.d4,z.bj,v)
v=this.a
z=this.cy.f
v=v.bi
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bh
z.a.uniform1f(z.d,p)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.e:z=this.a
u=this.db.f
z=z.bk
z.a.uniform1f(z.d,u)
break
case C.c:this.N(s,this.db.d)
z=this.a
u=this.db.d
z.a9(z.d5,z.bl,u)
u=this.a
z=this.db.f
u=u.bk
u.a.uniform1f(u.d,z)
break
case C.d:this.N(s,this.db.e)
z=this.a
u=this.db.e
z.a4(z.d6,z.bl,u)
u=this.a
z=this.db.f
u=u.bk
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(q=0;q<s.length;++q){z=s[q]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=H.c(b.e,"$isbY")
z.al(a)
z.aq(a)
z.dD(a)
if(v)a.a.disable(3042)
for(q=0;q<s.length;++q){z=s[q]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.cS()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cu().ao}},h8:{"^":"cH;0f,a,b,0c,0d,0e"},cH:{"^":"a;",
M:[function(a){this.a.M(H.e(a,"$iso"))},function(){return this.M(null)},"ew","$1","$0","gb2",0,2,0],
aL:["dQ",function(){}],
f1:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.b(this.gb2(),{func:1,ret:-1,args:[D.o]})
C.a.U(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.b(this.gb2(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.F(this.b+".texture2D",x,this.d,this,[T.e1])
z.b=!0
this.a.M(z)}},
f2:function(a){}},h9:{"^":"cH;a,b,0c,0d,0e"},aU:{"^":"cH;0f,a,b,0c,0d,0e",
cF:function(a){var z,y
if(!J.M(this.f,a)){z=this.f
this.f=a
y=new D.F(this.b+".color",z,a,this,[V.N])
y.b=!0
this.a.M(y)}},
aL:["bq",function(){this.dQ()
this.cF(new V.N(1,1,1))}],
sV:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aL()
z=this.a
z.a=null
z.M(null)}this.cF(b)}},hb:{"^":"aU;0ch,0f,a,b,0c,0d,0e",
f0:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.M(z)}},
aL:function(){this.bq()
this.f0(1)}},hc:{"^":"aU;0ch,0f,a,b,0c,0d,0e",
bF:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.M(z)}},
aL:function(){this.bq()
this.bF(100)}},ca:{"^":"a;"}}],["","",,T,{"^":"",cS:{"^":"co;"},e1:{"^":"cS;0b,0c,0d,0e,0f,0r,0x,0y,a"},hY:{"^":"a;a,0b,0c,0d,0e",
fV:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.dB(null,a,null)
w=new T.e1(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.G()
z=W.a8
W.Y(x,"load",H.b(new T.hZ(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
fU:function(a){return this.fV(a,!1,!1,!1,!1)},
eY:function(a,b,c){var z,y,x,w
b=V.db(b,2)
z=V.db(a.width,2)
y=V.db(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cs(null,null)
x.width=z
x.height=y
w=H.e(C.k.dI(x,"2d"),"$isdm")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.k7(w.getImageData(0,0,x.width,x.height))}}},hZ:{"^":"t:23;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.eY(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.G.hj(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.fK()}++x.e}}}],["","",,X,{"^":"",dl:{"^":"a;",$isaB:1},fA:{"^":"e_;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z}},hn:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
aK:[function(a){var z
H.e(a,"$iso")
z=this.e
if(!(z==null))z.A(a)},function(){return this.aK(null)},"hs","$1","$0","gcj",0,2,0],
saQ:function(a){var z,y,x
if(!J.M(this.a,a)){z=this.a
if(z!=null){z=z.gu()
z.toString
y=H.b(this.gcj(),{func:1,ret:-1,args:[D.o]})
C.a.U(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gu()
z.toString
y=H.b(this.gcj(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.F("mover",x,this.a,this,[U.a4])
z.b=!0
this.aK(z)}},
$isaB:1,
$isdl:1},e_:{"^":"a;"}}],["","",,B,{"^":"",
kt:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.f_(x,(x&&C.m).cn(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.a8
W.Y(z,"scroll",H.b(new B.ku(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
kv:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.z(b,"$isd",[P.n],"$asd")
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
u=W.cs(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.e(v.insertCell(-1),"$isbr")
x=c.length>0
s=x?4:3
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.e(q.insertCell(-1),"$isbr").style
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
t=H.e(q.insertCell(-1),"$isbr")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.e(q.insertCell(-1),"$isbr")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.e(q.insertCell(-1),"$isbr").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.kt(a,y,!1,"../resources/SnowTop.png")},
kw:function(a){P.i5(C.u,new B.kx(a))},
ku:{"^":"t:23;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.i(-0.05*C.j.aa(this.b.scrollTop))+"px"
z.top=y}},
kx:{"^":"t:40;a",
$1:function(a){H.e(a,"$isaW")
P.dc(C.j.dC(this.a.gfO(),2)+" fps")}},
hV:{"^":"a;0a,b",
ak:function(a,b,c){var z,y
z=W.dB(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=W.a9
W.Y(z,"click",H.b(new B.hX(this,z,b),{func:1,ret:-1,args:[y]}),!1,y)
J.cn(this.a).h(0,z)
J.cn(this.a).h(0,document.createElement("br"))
if(c)z.click()},
h:function(a,b){return this.ak(a,b,!1)}},
hX:{"^":"t:41;a,b,c",
$1:function(a){var z,y
H.e(a,"$isa9")
z=this.a
y=J.cn(z.a)
y.B(y,new B.hW())
y=this.b.style
y.border="solid 2px black"
z.b.$1(this.c)}},
hW:{"^":"t:42;",
$1:function(a){var z
H.e(a,"$isU")
if(!!J.I(a).$iscz){z=a.style
z.border="solid 2px white"}}}}],["","",,N,{"^":"",
eX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
B.kv("Test 006",H.f(["bumpMaps"],[P.n]),"A test of the Material Lighting shader with a bumpy 2D texture and a directional light. Select different bump maps for the test. The additional lines are part of shape inspection.")
z=document
y=z.getElementById("threeDart")
if(y==null)H.r(P.q("Failed to find an element with the identifier, threeDart."))
x=E.i3(y,!0,!0,!0,!1)
w=F.bm()
F.bz(w,null,null,1,1,1,0,0,1)
F.bz(w,null,null,1,1,0,1,0,3)
F.bz(w,null,null,1,1,0,0,1,2)
F.bz(w,null,null,1,1,-1,0,0,0)
F.bz(w,null,null,1,1,0,-1,0,0)
F.bz(w,null,null,1,1,0,0,-1,3)
w.an()
v=new O.h6()
u=O.cu(V.au)
v.e=u
u.aZ(v.ges(),v.geu())
u=new O.aU(v,"emission")
u.c=C.b
u.f=new V.N(0,0,0)
v.f=u
u=new O.aU(v,"ambient")
u.c=C.b
u.f=new V.N(0,0,0)
v.r=u
u=new O.aU(v,"diffuse")
u.c=C.b
u.f=new V.N(0,0,0)
v.x=u
u=new O.aU(v,"invDiffuse")
u.c=C.b
u.f=new V.N(0,0,0)
v.y=u
u=new O.hc(v,"specular")
u.c=C.b
u.f=new V.N(0,0,0)
u.ch=100
v.z=u
u=new O.h9(v,"bump")
u.c=C.b
v.Q=u
v.ch=null
u=new O.aU(v,"reflect")
u.c=C.b
u.f=new V.N(0,0,0)
v.cx=u
u=new O.hb(v,"refract")
u.c=C.b
u.f=new V.N(0,0,0)
u.ch=1
v.cy=u
u=new O.h8(v,"alpha")
u.c=C.b
u.f=1
v.db=u
u=new D.fT()
u.br(D.Z)
u.e=H.f([],[D.c0])
u.f=H.f([],[D.hp])
u.r=H.f([],[D.hN])
u.x=H.f([],[D.i_])
u.y=H.f([],[D.i0])
u.z=H.f([],[D.i1])
u.Q=null
u.ch=null
u.cc(u.ger(),u.geN(),u.geP())
v.dx=u
t=u.Q
if(t==null){t=D.G()
u.Q=t
u=t}else u=t
t={func:1,ret:-1,args:[D.o]}
s=H.b(v.geW(),t)
C.a.h(u.a,s)
s=v.dx
u=s.ch
if(u==null){u=D.G()
s.ch=u}s=H.b(v.gb2(),t)
C.a.h(u.a,s)
v.dy=null
s=v.dx
u=U.dq(V.dP(new V.an(0,0,0),new V.C(0,1,0),new V.C(0,0,-1)))
r=new V.N(1,1,1)
q=new D.c0()
q.c=new V.N(1,1,1)
q.a=new V.C(0,0,1)
p=q.b
q.b=u
u=u.gu()
u.toString
o=H.b(q.gdY(),t)
C.a.h(u.a,o)
u=new D.F("mover",p,q.b,q,[U.a4])
u.b=!0
q.at(u)
if(!q.c.q(0,r)){p=q.c
q.c=r
u=new D.F("color",p,r,q,[V.N])
u.b=!0
q.at(u)}s.h(0,q)
u=v.r
u.sV(0,new V.N(0,0,1))
u=v.x
u.sV(0,new V.N(0,1,0))
u=v.z
u.sV(0,new V.N(1,0,0))
u=v.z
if(u.c===C.b){u.c=C.e
u.bq()
u.bF(100)
s=u.a
s.a=null
s.M(null)}u.bF(10)
n=E.cx(null,!0,null,"",null,null)
n.sbp(0,w)
n.sc8(v)
m=E.cx(null,!0,null,"",null,null)
m.sbp(0,w)
u=new O.fD()
u.b=new V.C(0,0,-1)
u.c=new V.N(0.2,0.3,0.4)
u.d=new V.N(0.1,0.2,0.3)
u.e=new V.N(0.7,0.7,0.7)
u.f=new V.N(0.3,0.3,0.3)
u.r=new V.N(0.5,0.5,0.5)
u.x=new V.N(0.5,0.5,0.5)
u.y=new V.N(1,1,1)
u.z=new V.N(0.8,0.8,0.8)
u.Q=!1
u.ch=!1
u.cx=!1
u.cy=!1
u.db=!1
u.dx=!1
u.dy=!1
u.fr=!1
u.fx=!1
u.fy=!1
u.go=!1
u.id=!1
u.k1=!1
u.k2=!1
u.k3=!1
u.k4=!1
u.r1=!1
u.r2=1
if(!$.l.$2(1,0.4)){u.r2=0.4
s=new D.F("vectorScale",1,0.4,u,[P.v])
s.b=!0
u.M(s)}if(!u.ch){u.ch=!0
s=new D.F("showWireFrame",!1,!0,u,[P.a0])
s.b=!0
u.M(s)}if(!u.k3){u.k3=!0
s=new D.F("showAxis",!1,!0,u,[P.a0])
s.b=!0
u.M(s)}if(!u.cy){u.cy=!0
s=new D.F("showNormals",!1,!0,u,[P.a0])
s.b=!0
u.M(s)}if(!u.db){u.db=!0
s=new D.F("showBinormals",!1,!0,u,[P.a0])
s.b=!0
u.M(s)}m.sc8(u)
l=E.cx(null,!0,null,"",null,null)
l.y.h(0,m)
l.y.h(0,n)
u=new U.dA()
u.br(U.a4)
u.aZ(u.geq(),u.geO())
u.e=null
u.f=V.bL()
u.r=0
s=x.r
q=new U.ip()
o=U.cv()
o.sca(0,!0)
o.sc2(6.283185307179586)
o.sc4(0)
o.sa1(0,0)
o.sc3(100)
o.sL(0)
o.sbQ(0.5)
q.b=o
o=o.gu()
o.toString
k=H.b(q.gau(),t)
C.a.h(o.a,k)
o=U.cv()
o.sca(0,!0)
o.sc2(6.283185307179586)
o.sc4(0)
o.sa1(0,0)
o.sc3(100)
o.sL(0)
o.sbQ(0.5)
q.c=o
C.a.h(o.gu().a,k)
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
j=new X.aw(!1,!1,!1)
p=q.d
q.d=j
o=[X.aw]
k=new D.F("modifiers",p,j,q,o)
k.b=!0
q.K(k)
k=q.f
if(k!==!1){q.f=!1
k=new D.F("invertX",k,!1,q,[P.a0])
k.b=!0
q.K(k)}k=q.r
if(k!==!0){q.r=!0
k=new D.F("invertY",k,!0,q,[P.a0])
k.b=!0
q.K(k)}q.aN(s)
u.h(0,q)
s=x.r
q=new U.io()
k=U.cv()
k.sca(0,!0)
k.sc2(6.283185307179586)
k.sc4(0)
k.sa1(0,0)
k.sc3(100)
k.sL(0)
k.sbQ(0.2)
q.b=k
k=k.gu()
k.toString
i=H.b(q.gau(),t)
C.a.h(k.a,i)
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
j=new X.aw(!0,!1,!1)
p=q.c
q.c=j
k=new D.F("modifiers",p,j,q,o)
k.b=!0
q.K(k)
q.aN(s)
u.h(0,q)
s=x.r
q=new U.iq()
q.c=0.01
q.d=0
q.e=0
j=new X.aw(!1,!1,!1)
q.b=j
o=new D.F("modifiers",null,j,q,o)
o.b=!0
q.K(o)
q.aN(s)
u.h(0,q)
l.saQ(u)
u=new M.fu()
s=O.cu(E.aA)
u.d=s
s.aZ(u.gex(),u.gey())
u.e=null
u.f=null
u.r=null
u.x=null
h=new X.hn()
h.b=1.0471975511965976
h.c=0.1
h.d=2000
h.saQ(null)
s=h.b
if(!$.l.$2(s,1.0471975511965976)){p=h.b
h.b=1.0471975511965976
s=new D.F("fov",p,1.0471975511965976,h,[P.v])
s.b=!0
h.aK(s)}s=h.c
if(!$.l.$2(s,0.1)){p=h.c
h.c=0.1
s=new D.F("near",p,0.1,h,[P.v])
s.b=!0
h.aK(s)}s=h.d
if(!$.l.$2(s,2000)){p=h.d
h.d=2000
s=new D.F("far",p,2000,h,[P.v])
s.b=!0
h.aK(s)}s=u.a
if(s!==h){if(s!=null){s=s.gu()
s.toString
q=H.b(u.gav(),t)
C.a.U(s.a,q)}p=u.a
u.a=h
s=h.gu()
s.toString
q=H.b(u.gav(),t)
C.a.h(s.a,q)
s=new D.F("camera",p,u.a,u,[X.dl])
s.b=!0
u.aJ(s)}g=new X.fA()
s=new V.at(0,0,0,1)
g.a=s
g.b=!0
g.c=2000
g.d=!0
g.e=0
g.f=!1
s=V.dW(0,0,1,1)
g.r=s
s=u.b
if(s!==g){if(s!=null){s=s.gu()
s.toString
q=H.b(u.gav(),t)
C.a.U(s.a,q)}p=u.b
u.b=g
s=g.gu()
s.toString
q=H.b(u.gav(),t)
C.a.h(s.a,q)
s=new D.F("target",p,u.b,u,[X.e_])
s.b=!0
u.aJ(s)}u.d.h(0,l)
u.a.saQ(U.dq(V.av(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
s=x.d
if(s!==u){if(s!=null){s=s.gu()
s.toString
q=H.b(x.gci(),t)
C.a.U(s.a,q)}x.d=u
u=u.gu()
u.toString
t=H.b(x.gci(),t)
C.a.h(u.a,t)
x.dW()}u=new B.hV(new N.km(v,x))
u.a=z.getElementById("bumpMaps")
u.ak(0,"../resources/BumpMap1.png",!0)
u.h(0,"../resources/BumpMap2.png")
u.h(0,"../resources/BumpMap3.png")
u.h(0,"../resources/BumpMap4.png")
u.h(0,"../resources/BumpMap5.png")
u.h(0,"../resources/ScrewBumpMap.png")
u.h(0,"../resources/CtrlPnlBumpMap.png")
B.kw(x)},
km:{"^":"t:43;a,b",
$1:function(a){var z,y,x
z=this.a.Q
y=this.b.f.fU(a)
x=z.c
if(x!==C.c){if(x===C.b)z.aL()
z.c=C.c
z.f2(null)
x=z.a
x.a=null
x.M(null)}z.f1(y)}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dF.prototype
return J.dE.prototype}if(typeof a=="string")return J.cC.prototype
if(a==null)return J.dG.prototype
if(typeof a=="boolean")return J.fQ.prototype
if(a.constructor==Array)return J.bI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.a)return a
return J.cj(a)}
J.bS=function(a){if(typeof a=="string")return J.cC.prototype
if(a==null)return a
if(a.constructor==Array)return J.bI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.a)return a
return J.cj(a)}
J.d7=function(a){if(a==null)return a
if(a.constructor==Array)return J.bI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.a)return a
return J.cj(a)}
J.ka=function(a){if(typeof a=="number")return J.c7.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cW.prototype
return a}
J.bE=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.a)return a
return J.cj(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).q(a,b)}
J.f1=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ka(a).ac(a,b)}
J.f2=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kj(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bS(a).j(a,b)}
J.f3=function(a,b,c,d){return J.bE(a).cK(a,b,c,d)}
J.cm=function(a,b,c){return J.bS(a).fF(a,b,c)}
J.dd=function(a,b){return J.d7(a).E(a,b)}
J.f4=function(a,b){return J.d7(a).B(a,b)}
J.cn=function(a){return J.bE(a).gbO(a)}
J.aH=function(a){return J.I(a).gR(a)}
J.bV=function(a){return J.d7(a).gT(a)}
J.b8=function(a){return J.bS(a).gk(a)}
J.a7=function(a){return J.I(a).i(a)}
var $=I.p
C.k=W.cr.prototype
C.m=W.fi.prototype
C.v=J.m.prototype
C.a=J.bI.prototype
C.w=J.dE.prototype
C.f=J.dF.prototype
C.x=J.dG.prototype
C.j=J.c7.prototype
C.h=J.cC.prototype
C.E=J.bJ.prototype
C.F=W.hj.prototype
C.p=J.ho.prototype
C.G=P.cN.prototype
C.l=J.cW.prototype
C.q=W.bw.prototype
C.r=W.iB.prototype
C.t=new P.hl()
C.i=new P.jm()
C.b=new A.bZ(0,"ColorSourceType.None")
C.e=new A.bZ(1,"ColorSourceType.Solid")
C.c=new A.bZ(2,"ColorSourceType.Texture2D")
C.d=new A.bZ(3,"ColorSourceType.TextureCube")
C.u=new P.bG(5e6)
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
$.as=0
$.b9=null
$.dg=null
$.d0=!1
$.eU=null
$.eO=null
$.f_=null
$.ci=null
$.ck=null
$.d8=null
$.b_=null
$.bB=null
$.bC=null
$.d1=!1
$.O=C.i
$.dw=null
$.dv=null
$.du=null
$.dt=null
$.l=V.hd()
$.fI="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec3 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec3 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.fG="precision mediump float;                                   \n                                                           \nuniform vec3 ambientClr;                                   \nuniform vec3 diffuseClr;                                   \n                                                           \nvarying vec3 normal;                                       \nvarying vec3 color;                                        \nvarying vec3 litVec;                                       \n                                                           \nvoid main()                                                \n{                                                          \n   vec3 norm = normalize(normal);                          \n   float scalar = dot(norm, litVec);                       \n   vec3 diffuse = diffuseClr*max(scalar, 0.0);             \n   gl_FragColor = vec4(color*(ambientClr + diffuse), 1.0); \n}                                                          \n"
$.dS=null
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
I.$lazy(y,x,w)}})(["ds","$get$ds",function(){return H.eT("_$dart_dartClosure")},"cD","$get$cD",function(){return H.eT("_$dart_js")},"e5","$get$e5",function(){return H.ax(H.cb({
toString:function(){return"$receiver$"}}))},"e6","$get$e6",function(){return H.ax(H.cb({$method$:null,
toString:function(){return"$receiver$"}}))},"e7","$get$e7",function(){return H.ax(H.cb(null))},"e8","$get$e8",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ec","$get$ec",function(){return H.ax(H.cb(void 0))},"ed","$get$ed",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ea","$get$ea",function(){return H.ax(H.eb(null))},"e9","$get$e9",function(){return H.ax(function(){try{null.$method$}catch(z){return z.message}}())},"ef","$get$ef",function(){return H.ax(H.eb(void 0))},"ee","$get$ee",function(){return H.ax(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cY","$get$cY",function(){return P.iC()},"bD","$get$bD",function(){return[]},"dr","$get$dr",function(){return{}},"ep","$get$ep",function(){return Z.aj(0)},"en","$get$en",function(){return Z.aj(511)},"ar","$get$ar",function(){return Z.aj(1)},"aq","$get$aq",function(){return Z.aj(2)},"ap","$get$ap",function(){return Z.aj(4)},"aD","$get$aD",function(){return Z.aj(8)},"aE","$get$aE",function(){return Z.aj(16)},"aM","$get$aM",function(){return Z.aj(32)},"bv","$get$bv",function(){return Z.aj(64)},"eo","$get$eo",function(){return Z.aj(96)},"aY","$get$aY",function(){return Z.aj(128)},"aC","$get$aC",function(){return Z.aj(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.o]},{func:1,ret:-1,args:[D.o]},{func:1,ret:P.A},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[W.a9]},{func:1,ret:P.A,args:[F.ac]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.Q,[P.h,E.aA]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.A,args:[D.o]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:F.a5,args:[F.a5]},{func:1,ret:P.A,args:[F.X]},{func:1,ret:-1,args:[P.Q,[P.h,V.au]]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:-1,args:[P.Q,[P.h,U.a4]]},{func:1,ret:-1,args:[P.Q,[P.h,D.Z]]},{func:1,ret:P.v},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.n,args:[P.Q]},{func:1,ret:P.A,args:[,]},{func:1,ret:P.A,args:[W.a8]},{func:1,ret:W.U,args:[W.J]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.A,args:[P.S]},{func:1,ret:P.A,args:[{func:1,ret:-1,args:[D.o]}]},{func:1,ret:P.A,args:[,],opt:[,]},{func:1,ret:-1,args:[W.bw]},{func:1,ret:[P.aF,,],args:[,]},{func:1,ret:P.a0,args:[[P.h,D.Z]]},{func:1,ret:P.a0,args:[P.v,P.v]},{func:1,ret:P.A,args:[F.X,P.v,P.v]},{func:1,ret:F.a5,args:[F.a5],named:{color:V.at}},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:-1,args:[F.X,F.X]},{func:1,ret:P.A,args:[F.aJ]},{func:1,ret:P.a0,args:[W.J]},{func:1,ret:P.A,args:[P.aW]},{func:1,ret:P.A,args:[W.a9]},{func:1,ret:P.A,args:[W.U]},{func:1,ret:P.A,args:[P.n]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.a],opt:[P.ao]}]
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
if(x==y)H.kA(d||a)
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
Isolate.d5=a.d5
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
if(typeof dartMainRunner==="function")dartMainRunner(N.eX,[])
else N.eX([])})})()
//# sourceMappingURL=test.dart.js.map
