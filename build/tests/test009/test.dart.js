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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isl)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cP(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cQ=function(){}
var dart=[["","",,H,{"^":"",l5:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
cV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cc:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cT==null){H.jS()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.k(P.e5("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cq()]
if(v!=null)return v
v=H.jX(a)
if(v!=null)return v
if(typeof a=="function")return C.D
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cq(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
l:{"^":"a;",
q:function(a,b){return a===b},
gO:function(a){return H.bh(a)},
j:["dn",function(a){return"Instance of '"+H.aO(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fn:{"^":"l;",
j:function(a){return String(a)},
gO:function(a){return a?519018:218159},
$isa9:1},
dn:{"^":"l;",
q:function(a,b){return null==b},
j:function(a){return"null"},
gO:function(a){return 0},
$isE:1},
cr:{"^":"l;",
gO:function(a){return 0},
j:["dq",function(a){return String(a)}]},
h0:{"^":"cr;"},
c6:{"^":"cr;"},
bF:{"^":"cr;",
j:function(a){var z=a[$.$get$dc()]
if(z==null)return this.dq(a)
return"JavaScript function for "+H.h(J.af(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscn:1},
bD:{"^":"l;$ti",
h:function(a,b){H.B(b,H.y(a,0))
if(!!a.fixed$length)H.q(P.aj("add"))
a.push(b)},
P:function(a,b){var z
if(!!a.fixed$length)H.q(P.aj("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.k(P.b3(a))}},
T:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.Z(z,y,H.h(a[y]))
return z.join(b)},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
gbQ:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.k(H.fl())},
b2:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
j:function(a){return P.co(a,"[","]")},
gS:function(a){return new J.ak(a,a.length,0,[H.y(a,0)])},
gO:function(a){return H.bh(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.aj("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.bS(b,"newLength",null))
if(b<0)throw H.k(P.bi(b,0,null,"newLength",null))
a.length=b},
Z:function(a,b,c){H.Z(b)
H.B(c,H.y(a,0))
if(!!a.immutable$list)H.q(P.aj("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.bL(a,b))
if(b>=a.length||b<0)throw H.k(H.bL(a,b))
a[b]=c},
$isf:1,
$isc:1,
t:{
fm:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.bS(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.k(P.bi(a,0,4294967295,"length",null))
return J.dl(new Array(a),b)},
dl:function(a,b){return J.bb(H.e(a,[b]))},
bb:function(a){H.bP(a)
a.fixed$length=Array
return a}}},
l4:{"^":"bD;$ti"},
ak:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.k(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bE:{"^":"l;",
gfs:function(a){return a===0?1/a<0:a<0},
cZ:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.k(P.aj(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(P.aj(""+a+".round()"))},
de:function(a,b){var z
if(b>20)throw H.k(P.bi(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gfs(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gO:function(a){return a&0x1FFFFFFF},
i:function(a,b){if(typeof b!=="number")throw H.k(H.ca(b))
return a*b},
dk:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ds:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ct(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.ct(a,b)},
ct:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.k(P.aj("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
cr:function(a,b){var z
if(a>0)z=this.eJ(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eJ:function(a,b){return b>31?0:a>>>b},
a7:function(a,b){if(typeof b!=="number")throw H.k(H.ca(b))
return a<b},
$isv:1,
$isR:1},
dm:{"^":"bE;",$isL:1},
fo:{"^":"bE;"},
c2:{"^":"l;",
dL:function(a,b){if(b>=a.length)throw H.k(H.bL(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.S(b)
if(typeof b!=="string")throw H.k(P.bS(b,null,null))
return a+b},
c6:function(a,b,c){H.Z(c)
if(c==null)c=a.length
if(b>c)throw H.k(P.cz(b,null,null))
if(c>a.length)throw H.k(P.cz(c,null,null))
return a.substring(b,c)},
c5:function(a,b){return this.c6(a,b,null)},
i:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.t)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fF:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.i(c,z)+a},
al:function(a,b){return this.fF(a,b," ")},
fg:function(a,b,c){if(c>a.length)throw H.k(P.bi(c,0,a.length,null,null))
return H.k8(a,b,c)},
j:function(a){return a},
gO:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isfZ:1,
$isn:1}}],["","",,H,{"^":"",
fl:function(){return new P.hq("No element")},
f8:{"^":"f;"},
fz:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.bN(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.k(P.b3(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.D(z,w);++this.c
return!0}},
fF:{"^":"f;a,b,$ti",
gS:function(a){return new H.fG(J.bR(this.a),this.b,this.$ti)},
gl:function(a){return J.b1(this.a)},
D:function(a,b){return this.b.$1(J.cY(this.a,b))},
$asf:function(a,b){return[b]}},
fG:{"^":"cp;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gN(z))
return!0}this.a=null
return!1},
gN:function(a){return this.a},
$ascp:function(a,b){return[b]}},
i9:{"^":"f;a,b,$ti",
gS:function(a){return new H.ia(J.bR(this.a),this.b,this.$ti)}},
ia:{"^":"cp;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gN(z)))return!0
return!1},
gN:function(a){var z=this.a
return z.gN(z)}},
bZ:{"^":"a;$ti"}}],["","",,H,{"^":"",
jN:function(a){return init.types[H.Z(a)]},
jV:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isA},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.af(a)
if(typeof z!=="string")throw H.k(H.ca(a))
return z},
bh:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aO:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.v||!!J.I(a).$isc6){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.j.dL(w,0)===36)w=C.j.c5(w,1)
r=H.cU(H.bP(H.aI(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
a5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
h8:function(a){return a.b?H.a5(a).getUTCFullYear()+0:H.a5(a).getFullYear()+0},
h6:function(a){return a.b?H.a5(a).getUTCMonth()+1:H.a5(a).getMonth()+1},
h2:function(a){return a.b?H.a5(a).getUTCDate()+0:H.a5(a).getDate()+0},
h3:function(a){return a.b?H.a5(a).getUTCHours()+0:H.a5(a).getHours()+0},
h5:function(a){return a.b?H.a5(a).getUTCMinutes()+0:H.a5(a).getMinutes()+0},
h7:function(a){return a.b?H.a5(a).getUTCSeconds()+0:H.a5(a).getSeconds()+0},
h4:function(a){return a.b?H.a5(a).getUTCMilliseconds()+0:H.a5(a).getMilliseconds()+0},
o:function(a){throw H.k(H.ca(a))},
i:function(a,b){if(a==null)J.b1(a)
throw H.k(H.bL(a,b))},
bL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,"index",null)
z=H.Z(J.b1(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.J(b,a,"index",null,z)
return P.cz(b,"index",null)},
ca:function(a){return new P.aL(!0,a,null,null)},
k:function(a){var z
if(a==null)a=new P.dx()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eI})
z.name=""}else z.toString=H.eI
return z},
eI:function(){return J.af(this.dartException)},
q:function(a){throw H.k(a)},
z:function(a){throw H.k(P.b3(a))},
aK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kd(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.cr(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ct(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dw(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dP()
u=$.$get$dQ()
t=$.$get$dR()
s=$.$get$dS()
r=$.$get$dW()
q=$.$get$dX()
p=$.$get$dU()
$.$get$dT()
o=$.$get$dZ()
n=$.$get$dY()
m=v.a0(y)
if(m!=null)return z.$1(H.ct(H.S(y),m))
else{m=u.a0(y)
if(m!=null){m.method="call"
return z.$1(H.ct(H.S(y),m))}else{m=t.a0(y)
if(m==null){m=s.a0(y)
if(m==null){m=r.a0(y)
if(m==null){m=q.a0(y)
if(m==null){m=p.a0(y)
if(m==null){m=s.a0(y)
if(m==null){m=o.a0(y)
if(m==null){m=n.a0(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dw(H.S(y),m))}}return z.$1(new H.hS(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dG()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aL(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dG()
return a},
b_:function(a){var z
if(a==null)return new H.em(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.em(a)},
jK:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.Z(0,a[y],a[x])}return b},
jU:function(a,b,c,d,e,f){H.j(a,"$iscn")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.k(P.r("Unsupported number of arguments for wrapped closure"))},
aX:function(a,b){var z
H.Z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jU)
a.$identity=z
return z},
eW:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.ha(z).r}else x=d
w=e?Object.create(new H.hr().constructor.prototype):Object.create(new H.ch(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.al
if(typeof u!=="number")return u.F()
$.al=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.d8(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.jN,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.d1:H.ci
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.k("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.d8(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
eT:function(a,b,c,d){var z=H.ci
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d8:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eV(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eT(y,!w,z,b)
if(y===0){w=$.al
if(typeof w!=="number")return w.F()
$.al=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b2
if(v==null){v=H.bT("self")
$.b2=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.al
if(typeof w!=="number")return w.F()
$.al=w+1
t+=w
w="return function("+t+"){return this."
v=$.b2
if(v==null){v=H.bT("self")
$.b2=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
eU:function(a,b,c,d){var z,y
z=H.ci
y=H.d1
switch(b?-1:a){case 0:throw H.k(H.hi("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eV:function(a,b){var z,y,x,w,v,u,t,s
z=$.b2
if(z==null){z=H.bT("self")
$.b2=z}y=$.d0
if(y==null){y=H.bT("receiver")
$.d0=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eU(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.al
if(typeof y!=="number")return y.F()
$.al=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.al
if(typeof y!=="number")return y.F()
$.al=y+1
return new Function(z+y+"}")()},
cP:function(a,b,c,d,e,f,g){var z,y
z=J.bb(H.bP(b))
H.Z(c)
y=!!J.I(d).$isc?J.bb(d):d
return H.eW(a,z,c,y,!!e,f,g)},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.k(H.ar(a,"String"))},
k_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.ar(a,"num"))},
ey:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.k(H.ar(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.k(H.ar(a,"int"))},
eG:function(a,b){throw H.k(H.ar(a,H.S(b).substring(3)))},
k1:function(a,b){var z=J.bN(b)
throw H.k(H.eS(a,z.c6(b,3,z.gl(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.eG(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.k1(a,b)},
bP:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.k(H.ar(a,"List"))},
jW:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.eG(a,b)},
ez:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
bM:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ez(J.I(a))
if(z==null)return!1
y=H.eC(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.cL)return a
$.cL=!0
try{if(H.bM(a,b))return a
z=H.bQ(b)
y=H.ar(a,z)
throw H.k(y)}finally{$.cL=!1}},
cR:function(a,b){if(a!=null&&!H.cO(a,b))H.q(H.ar(a,H.bQ(b)))
return a},
et:function(a){var z
if(a instanceof H.u){z=H.ez(J.I(a))
if(z!=null)return H.bQ(z)
return"Closure"}return H.aO(a)},
ka:function(a){throw H.k(new P.f0(H.S(a)))},
eA:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
aI:function(a){if(a==null)return
return a.$ti},
m2:function(a,b,c){return H.b0(a["$as"+H.h(c)],H.aI(b))},
bA:function(a,b,c,d){var z
H.S(c)
H.Z(d)
z=H.b0(a["$as"+H.h(c)],H.aI(b))
return z==null?null:z[d]},
aZ:function(a,b,c){var z
H.S(b)
H.Z(c)
z=H.b0(a["$as"+H.h(b)],H.aI(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.Z(b)
z=H.aI(a)
return z==null?null:z[b]},
bQ:function(a){var z=H.aJ(a,null)
return z},
aJ:function(a,b){var z,y
H.x(b,"$isc",[P.n],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cU(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.h(b[y])}if('func' in a)return H.jv(a,b)
if('futureOr' in a)return"FutureOr<"+H.aJ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.x(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.j.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aJ(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aJ(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aJ(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aJ(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jJ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.S(z[l])
n=n+m+H.aJ(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cU:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isc",[P.n],"$asc")
if(a==null)return""
z=new P.bJ("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aJ(u,c)}v="<"+z.j(0)+">"
return v},
b0:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aW:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aI(a)
y=J.I(a)
if(y[b]==null)return!1
return H.ew(H.b0(y[d],z),null,c,null)},
x:function(a,b,c,d){var z,y
H.S(b)
H.bP(c)
H.S(d)
if(a==null)return a
z=H.aW(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cU(c,0,null)
throw H.k(H.ar(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ew:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ae(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ae(a[y],b,c[y],d))return!1
return!0},
m0:function(a,b,c){return a.apply(b,H.b0(J.I(b)["$as"+H.h(c)],H.aI(b)))},
eD:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="E"||a===-1||a===-2||H.eD(z)}return!1},
cO:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="E"||b===-1||b===-2||H.eD(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cO(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bM(a,b)}y=J.I(a).constructor
x=H.aI(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ae(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.cO(a,b))throw H.k(H.ar(a,H.bQ(b)))
return a},
ae:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ae(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.eC(a,b,c,d)
if('func' in a)return c.builtin$cls==="cn"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ae("type" in a?a.type:null,b,x,d)
else if(H.ae(a,b,x,d))return!0
else{if(!('$is'+"b7" in y.prototype))return!1
w=y.prototype["$as"+"b7"]
v=H.b0(w,z?a.slice(1):null)
return H.ae(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bQ(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ew(H.b0(r,z),b,u,d)},
eC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ae(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ae(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ae(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ae(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.jZ(m,b,l,d)},
jZ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ae(c[w],d,a[w],b))return!1}return!0},
m1:function(a,b,c){Object.defineProperty(a,H.S(b),{value:c,enumerable:false,writable:true,configurable:true})},
jX:function(a){var z,y,x,w,v,u
z=H.S($.eB.$1(a))
y=$.cb[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cd[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.S($.ev.$2(a,z))
if(z!=null){y=$.cb[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cd[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ce(x)
$.cb[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cd[z]=x
return x}if(v==="-"){u=H.ce(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eF(a,x)
if(v==="*")throw H.k(P.e5(z))
if(init.leafTags[z]===true){u=H.ce(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eF(a,x)},
eF:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cV(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ce:function(a){return J.cV(a,!1,null,!!a.$isA)},
jY:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ce(z)
else return J.cV(z,c,null,null)},
jS:function(){if(!0===$.cT)return
$.cT=!0
H.jT()},
jT:function(){var z,y,x,w,v,u,t,s
$.cb=Object.create(null)
$.cd=Object.create(null)
H.jO()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eH.$1(v)
if(u!=null){t=H.jY(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jO:function(){var z,y,x,w,v,u,t
z=C.A()
z=H.aV(C.x,H.aV(C.C,H.aV(C.n,H.aV(C.n,H.aV(C.B,H.aV(C.y,H.aV(C.z(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eB=new H.jP(v)
$.ev=new H.jQ(u)
$.eH=new H.jR(t)},
aV:function(a,b){return a(b)||b},
k8:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h9:{"^":"a;a,b,c,d,e,f,r,0x",t:{
ha:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bb(z)
y=z[0]
x=z[1]
return new H.h9(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hF:{"^":"a;a,b,c,d,e,f",
a0:function(a){var z,y,x
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
aq:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dV:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fX:{"^":"X;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
dw:function(a,b){return new H.fX(a,b==null?null:b.method)}}},
fp:{"^":"X;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
t:{
ct:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fp(a,y,z?null:b.receiver)}}},
hS:{"^":"X;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kd:{"^":"u:15;a",
$1:function(a){if(!!J.I(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
em:{"^":"a;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isai:1},
u:{"^":"a;",
j:function(a){return"Closure '"+H.aO(this).trim()+"'"},
gdh:function(){return this},
$iscn:1,
gdh:function(){return this}},
dK:{"^":"u;"},
hr:{"^":"dK;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
ch:{"^":"dK;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ch))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gO:function(a){var z,y
z=this.c
if(z==null)y=H.bh(this.a)
else y=typeof z!=="object"?J.aE(z):H.bh(z)
return(y^H.bh(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.aO(z)+"'")},
t:{
ci:function(a){return a.a},
d1:function(a){return a.c},
bT:function(a){var z,y,x,w,v
z=new H.ch("self","target","receiver","name")
y=J.bb(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hG:{"^":"X;a",
j:function(a){return this.a},
t:{
ar:function(a,b){return new H.hG("TypeError: "+H.h(P.bX(a))+": type '"+H.et(a)+"' is not a subtype of type '"+b+"'")}}},
eR:{"^":"X;a",
j:function(a){return this.a},
t:{
eS:function(a,b){return new H.eR("CastError: "+H.h(P.bX(a))+": type '"+H.et(a)+"' is not a subtype of type '"+b+"'")}}},
hh:{"^":"X;a",
j:function(a){return"RuntimeError: "+H.h(this.a)},
t:{
hi:function(a){return new H.hh(a)}}},
cs:{"^":"fD;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gak:function(a){return new H.fu(this,[H.y(this,0)])},
fh:function(a,b){var z=this.b
if(z==null)return!1
return this.dO(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aW(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aW(w,b)
x=y==null?null:y.b
return x}else return this.fq(b)},
fq:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cl(z,J.aE(a)&0x3ffffff)
x=this.d0(y,a)
if(x<0)return
return y[x].b},
Z:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bu()
this.b=z}this.c9(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bu()
this.c=y}this.c9(y,b,c)}else{x=this.d
if(x==null){x=this.bu()
this.d=x}w=J.aE(b)&0x3ffffff
v=this.cl(x,w)
if(v==null)this.bz(x,w,[this.bv(b,c)])
else{u=this.d0(v,b)
if(u>=0)v[u].b=c
else v.push(this.bv(b,c))}}},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.k(P.b3(this))
z=z.c}},
c9:function(a,b,c){var z
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
z=this.aW(a,b)
if(z==null)this.bz(a,b,this.bv(b,c))
else z.b=c},
dX:function(){this.r=this.r+1&67108863},
bv:function(a,b){var z,y
z=new H.ft(H.B(a,H.y(this,0)),H.B(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dX()
return z},
d0:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
j:function(a){return P.du(this)},
aW:function(a,b){return a[b]},
cl:function(a,b){return a[b]},
bz:function(a,b,c){a[b]=c},
dR:function(a,b){delete a[b]},
dO:function(a,b){return this.aW(a,b)!=null},
bu:function(){var z=Object.create(null)
this.bz(z,"<non-identifier-key>",z)
this.dR(z,"<non-identifier-key>")
return z},
$isds:1},
ft:{"^":"a;a,b,0c,0d"},
fu:{"^":"f8;a,$ti",
gl:function(a){return this.a.a},
gS:function(a){var z,y
z=this.a
y=new H.fv(z,z.r,this.$ti)
y.c=z.e
return y}},
fv:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.b3(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jP:{"^":"u:15;a",
$1:function(a){return this.a(a)}},
jQ:{"^":"u:24;a",
$2:function(a,b){return this.a(a,b)}},
jR:{"^":"u:25;a",
$1:function(a){return this.a(H.S(a))}}}],["","",,H,{"^":"",
jJ:function(a){return J.dl(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
k0:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bw:function(a){return a},
aH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.k(H.bL(b,a))},
fU:{"^":"l;","%":"DataView;ArrayBufferView;cy|eg|eh|fT|ei|ej|aG"},
cy:{"^":"fU;",
gl:function(a){return a.length},
$isA:1,
$asA:I.cQ},
fT:{"^":"eh;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
$asbZ:function(){return[P.v]},
$ast:function(){return[P.v]},
$isf:1,
$asf:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aG:{"^":"ej;",
$asbZ:function(){return[P.L]},
$ast:function(){return[P.L]},
$isf:1,
$asf:function(){return[P.L]},
$isc:1,
$asc:function(){return[P.L]}},
lf:{"^":"aG;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lg:{"^":"aG;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lh:{"^":"aG;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int8Array"},
li:{"^":"aG;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lj:{"^":"aG;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lk:{"^":"aG;",
gl:function(a){return a.length},
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ll:{"^":"aG;",
gl:function(a){return a.length},
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eg:{"^":"cy+t;"},
eh:{"^":"eg+bZ;"},
ei:{"^":"cy+t;"},
ej:{"^":"ei+bZ;"}}],["","",,P,{"^":"",
ic:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jC()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aX(new P.ie(z),1)).observe(y,{childList:true})
return new P.id(z,y,x)}else if(self.setImmediate!=null)return P.jD()
return P.jE()},
lQ:[function(a){self.scheduleImmediate(H.aX(new P.ig(H.b(a,{func:1,ret:-1})),0))},"$1","jC",4,0,11],
lR:[function(a){self.setImmediate(H.aX(new P.ih(H.b(a,{func:1,ret:-1})),0))},"$1","jD",4,0,11],
lS:[function(a){H.b(a,{func:1,ret:-1})
P.jc(0,a)},"$1","jE",4,0,11],
dN:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aP]})
z=C.h.V(a.a,1000)
return P.jd(z<0?0:z,b)},
jy:function(a,b){if(H.bM(a,{func:1,args:[P.a,P.ai]}))return b.fO(a,null,P.a,P.ai)
if(H.bM(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.k(P.bS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jx:function(){var z,y
for(;z=$.aU,z!=null;){$.by=null
y=z.b
$.aU=y
if(y==null)$.bx=null
z.a.$0()}},
m_:[function(){$.cM=!0
try{P.jx()}finally{$.by=null
$.cM=!1
if($.aU!=null)$.$get$cI().$1(P.ex())}},"$0","ex",0,0,3],
es:function(a){var z=new P.ea(H.b(a,{func:1,ret:-1}))
if($.aU==null){$.bx=z
$.aU=z
if(!$.cM)$.$get$cI().$1(P.ex())}else{$.bx.b=z
$.bx=z}},
jB:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.aU
if(z==null){P.es(a)
$.by=$.bx
return}y=new P.ea(a)
x=$.by
if(x==null){y.b=z
$.by=y
$.aU=y}else{y.b=x.b
x.b=y
$.by=y
if(y.b==null)$.bx=y}},
k2:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.M
if(C.i===y){P.c9(null,null,C.i,a)
return}y.toString
P.c9(null,null,y,H.b(y.cw(a),z))},
hD:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aP]}
H.b(b,z)
y=$.M
if(y===C.i){y.toString
return P.dN(a,b)}x=y.cz(b,P.aP)
$.M.toString
return P.dN(a,H.b(x,z))},
c8:function(a,b,c,d,e){var z={}
z.a=d
P.jB(new P.jz(z,e))},
eq:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.M
if(y===c)return d.$0()
$.M=c
z=y
try{y=d.$0()
return y}finally{$.M=z}},
er:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.M
if(y===c)return d.$1(e)
$.M=c
z=y
try{y=d.$1(e)
return y}finally{$.M=z}},
jA:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.M
if(y===c)return d.$2(e,f)
$.M=c
z=y
try{y=d.$2(e,f)
return y}finally{$.M=z}},
c9:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.cw(d):c.fc(d,-1)
P.es(d)},
ie:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
id:{"^":"u:21;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ig:{"^":"u:2;a",
$0:function(){this.a.$0()}},
ih:{"^":"u:2;a",
$0:function(){this.a.$0()}},
ep:{"^":"a;a,0b,c",
dD:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aX(new P.jf(this,b),0),a)
else throw H.k(P.aj("`setTimeout()` not found."))},
dE:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aX(new P.je(this,a,Date.now(),b),0),a)
else throw H.k(P.aj("Periodic timer."))},
$isaP:1,
t:{
jc:function(a,b){var z=new P.ep(!0,0)
z.dD(a,b)
return z},
jd:function(a,b){var z=new P.ep(!1,0)
z.dE(a,b)
return z}}},
jf:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
je:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.ds(w,x)}z.c=y
this.d.$1(z)}},
aT:{"^":"a;0a,b,c,d,e,$ti",
fw:function(a){if(this.c!==6)return!0
return this.b.b.bY(H.b(this.d,{func:1,ret:P.a9,args:[P.a]}),a.a,P.a9,P.a)},
fp:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bM(z,{func:1,args:[P.a,P.ai]}))return H.cR(w.fU(z,a.a,a.b,null,y,P.ai),x)
else return H.cR(w.bY(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aC:{"^":"a;cs:a<,b,0eB:c<,$ti",
dd:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.M
if(y!==C.i){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jy(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aC(0,$.M,[c])
w=b==null?1:3
this.ca(new P.aT(x,w,a,b,[z,c]))
return x},
fX:function(a,b){return this.dd(a,null,b)},
ca:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isaT")
this.c=a}else{if(z===2){y=H.j(this.c,"$isaC")
z=y.a
if(z<4){y.ca(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c9(null,null,z,H.b(new P.iw(this,a),{func:1,ret:-1}))}},
cn:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isaT")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isaC")
y=u.a
if(y<4){u.cn(a)
return}this.a=y
this.c=u.c}z.a=this.aY(a)
y=this.b
y.toString
P.c9(null,null,y,H.b(new P.iB(z,this),{func:1,ret:-1}))}},
bx:function(){var z=H.j(this.c,"$isaT")
this.c=null
return this.aY(z)},
aY:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ce:function(a){var z,y,x,w
z=H.y(this,0)
H.cR(a,{futureOr:1,type:z})
y=this.$ti
x=H.aW(a,"$isb7",y,"$asb7")
if(x){z=H.aW(a,"$isaC",y,null)
if(z)P.ec(a,this)
else P.ix(a,this)}else{w=this.bx()
H.B(a,z)
this.a=4
this.c=a
P.bu(this,w)}},
bm:[function(a,b){var z
H.j(b,"$isai")
z=this.bx()
this.a=8
this.c=new P.aa(a,b)
P.bu(this,z)},function(a){return this.bm(a,null)},"h2","$2","$1","gdM",4,2,28],
$isb7:1,
t:{
ix:function(a,b){var z,y,x
b.a=1
try{a.dd(new P.iy(b),new P.iz(b),null)}catch(x){z=H.aK(x)
y=H.b_(x)
P.k2(new P.iA(b,z,y))}},
ec:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isaC")
if(z>=4){y=b.bx()
b.a=a.a
b.c=a.c
P.bu(b,y)}else{y=H.j(b.c,"$isaT")
b.a=2
b.c=a
a.cn(y)}},
bu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isaa")
y=y.b
u=v.a
t=v.b
y.toString
P.c8(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bu(z.a,b)}y=z.a
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
if(p){H.j(r,"$isaa")
y=y.b
u=r.a
t=r.b
y.toString
P.c8(null,null,y,u,t)
return}o=$.M
if(o==null?q!=null:o!==q)$.M=q
else o=null
y=b.c
if(y===8)new P.iE(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iD(x,b,r).$0()}else if((y&2)!==0)new P.iC(z,x,b).$0()
if(o!=null)$.M=o
y=x.b
if(!!J.I(y).$isb7){if(y.a>=4){n=H.j(t.c,"$isaT")
t.c=null
b=t.aY(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ec(y,t)
return}}m=b.b
n=H.j(m.c,"$isaT")
m.c=null
b=m.aY(n)
y=x.a
u=x.b
if(!y){H.B(u,H.y(m,0))
m.a=4
m.c=u}else{H.j(u,"$isaa")
m.a=8
m.c=u}z.a=m
y=m}}}},
iw:{"^":"u:2;a,b",
$0:function(){P.bu(this.a,this.b)}},
iB:{"^":"u:2;a,b",
$0:function(){P.bu(this.b,this.a.a)}},
iy:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.ce(a)}},
iz:{"^":"u:32;a",
$2:function(a,b){this.a.bm(a,H.j(b,"$isai"))},
$1:function(a){return this.$2(a,null)}},
iA:{"^":"u:2;a,b,c",
$0:function(){this.a.bm(this.b,this.c)}},
iE:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.da(H.b(w.d,{func:1}),null)}catch(v){y=H.aK(v)
x=H.b_(v)
if(this.d){w=H.j(this.a.a.c,"$isaa").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isaa")
else u.b=new P.aa(y,x)
u.a=!0
return}if(!!J.I(z).$isb7){if(z instanceof P.aC&&z.gcs()>=4){if(z.gcs()===8){w=this.b
w.b=H.j(z.geB(),"$isaa")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.fX(new P.iF(t),null)
w.a=!1}}},
iF:{"^":"u:35;a",
$1:function(a){return this.a}},
iD:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.B(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.bY(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aK(t)
y=H.b_(t)
x=this.a
x.b=new P.aa(z,y)
x.a=!0}}},
iC:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isaa")
w=this.c
if(w.fw(z)&&w.e!=null){v=this.b
v.b=w.fp(z)
v.a=!1}}catch(u){y=H.aK(u)
x=H.b_(u)
w=H.j(this.a.a.c,"$isaa")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aa(y,x)
s.a=!0}}},
ea:{"^":"a;a,0b"},
cB:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aC(0,$.M,[P.L])
z.a=0
this.fv(new P.ht(z,this),!0,new P.hu(z,y),y.gdM())
return y}},
ht:{"^":"u;a,b",
$1:function(a){H.B(a,H.aZ(this.b,"cB",0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.aZ(this.b,"cB",0)]}}},
hu:{"^":"u:2;a,b",
$0:function(){this.b.ce(this.a.a)}},
dH:{"^":"a;$ti"},
aP:{"^":"a;"},
aa:{"^":"a;a,b",
j:function(a){return H.h(this.a)},
$isX:1},
jk:{"^":"a;",$islP:1},
jz:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dx()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.k(z)
x=H.k(z)
x.stack=y.j(0)
throw x}},
iZ:{"^":"jk;",
fV:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.i===$.M){a.$0()
return}P.eq(null,null,this,a,-1)}catch(x){z=H.aK(x)
y=H.b_(x)
P.c8(null,null,this,z,H.j(y,"$isai"))}},
fW:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.i===$.M){a.$1(b)
return}P.er(null,null,this,a,b,-1,c)}catch(x){z=H.aK(x)
y=H.b_(x)
P.c8(null,null,this,z,H.j(y,"$isai"))}},
fc:function(a,b){return new P.j0(this,H.b(a,{func:1,ret:b}),b)},
cw:function(a){return new P.j_(this,H.b(a,{func:1,ret:-1}))},
cz:function(a,b){return new P.j1(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
da:function(a,b){H.b(a,{func:1,ret:b})
if($.M===C.i)return a.$0()
return P.eq(null,null,this,a,b)},
bY:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.M===C.i)return a.$1(b)
return P.er(null,null,this,a,b,c,d)},
fU:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.M===C.i)return a.$2(b,c)
return P.jA(null,null,this,a,b,c,d,e,f)},
fO:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
j0:{"^":"u;a,b,c",
$0:function(){return this.a.da(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
j_:{"^":"u:3;a,b",
$0:function(){return this.a.fV(this.b)}},
j1:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.fW(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fx:function(a,b,c){H.bP(a)
return H.x(H.jK(a,new H.cs(0,0,[b,c])),"$isds",[b,c],"$asds")},
fw:function(a,b){return new H.cs(0,0,[a,b])},
fy:function(a,b,c,d){return new P.iL(0,0,[d])},
fk:function(a,b,c){var z,y
if(P.cN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bz()
C.a.h(y,a)
try{P.jw(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dI(b,H.jW(z,"$isf"),", ")+c
return y.charCodeAt(0)==0?y:y},
co:function(a,b,c){var z,y,x
if(P.cN(a))return b+"..."+c
z=new P.bJ(b)
y=$.$get$bz()
C.a.h(y,a)
try{x=z
x.a=P.dI(x.gar(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gar()+c
y=z.gar()
return y.charCodeAt(0)==0?y:y},
cN:function(a){var z,y
for(z=0;y=$.$get$bz(),z<y.length;++z)if(a===y[z])return!0
return!1},
jw:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gS(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.h(z.gN(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gN(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gN(z);++x
for(;z.E();t=s,s=r){r=z.gN(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
du:function(a){var z,y,x
z={}
if(P.cN(a))return"{...}"
y=new P.bJ("")
try{C.a.h($.$get$bz(),a)
x=y
x.a=x.gar()+"{"
z.a=!0
J.eM(a,new P.fE(z,y))
z=y
z.a=z.gar()+"}"}finally{z=$.$get$bz()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gar()
return z.charCodeAt(0)==0?z:z},
iL:{"^":"iG;a,0b,0c,0d,0e,0f,r,$ti",
gS:function(a){return P.ef(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cK()
this.b=z}return this.cc(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cK()
this.c=y}return this.cc(y,b)}else return this.dF(0,b)},
dF:function(a,b){var z,y,x
H.B(b,H.y(this,0))
z=this.d
if(z==null){z=P.cK()
this.d=z}y=this.cf(b)
x=z[y]
if(x==null)z[y]=[this.bl(b)]
else{if(this.ck(x,b)>=0)return!1
x.push(this.bl(b))}return!0},
P:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.co(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.co(this.c,b)
else return this.eu(0,b)},
eu:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dU(z,b)
x=this.ck(y,b)
if(x<0)return!1
this.cu(y.splice(x,1)[0])
return!0},
cc:function(a,b){H.B(b,H.y(this,0))
if(H.j(a[b],"$iscJ")!=null)return!1
a[b]=this.bl(b)
return!0},
co:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$iscJ")
if(z==null)return!1
this.cu(z)
delete a[b]
return!0},
cd:function(){this.r=this.r+1&67108863},
bl:function(a){var z,y
z=new P.cJ(H.B(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cd()
return z},
cu:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cd()},
cf:function(a){return J.aE(a)&0x3ffffff},
dU:function(a,b){return a[this.cf(b)]},
ck:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
t:{
cK:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cJ:{"^":"a;a,0b,0c"},
iM:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.b3(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.y(this,0))
this.c=z.b
return!0}}},
t:{
ef:function(a,b,c){var z=new P.iM(a,b,[c])
z.c=a.e
return z}}},
iG:{"^":"hj;"},
cu:{"^":"iN;",$isf:1,$isc:1},
t:{"^":"a;$ti",
gS:function(a){return new H.fz(a,this.gl(a),0,[H.bA(this,a,"t",0)])},
D:function(a,b){return this.k(a,b)},
fZ:function(a,b){var z,y,x
z=H.e([],[H.bA(this,a,"t",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.Z(z,y,this.k(a,y));++y}return z},
fY:function(a){return this.fZ(a,!0)},
j:function(a){return P.co(a,"[","]")}},
fD:{"^":"a8;"},
fE:{"^":"u:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
a8:{"^":"a;$ti",
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bA(this,a,"a8",0),H.bA(this,a,"a8",1)]})
for(z=J.bR(this.gak(a));z.E();){y=z.gN(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.b1(this.gak(a))},
j:function(a){return P.du(a)},
$isa1:1},
hk:{"^":"a;$ti",
j:function(a){return P.co(this,"{","}")},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.cZ("index"))
if(b<0)H.q(P.bi(b,0,null,"index",null))
for(z=P.ef(this,this.r,H.y(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.k(P.J(b,this,"index",null,y))},
$isf:1},
hj:{"^":"hk;"},
iN:{"^":"a+t;"}}],["","",,P,{"^":"",
fb:function(a){var z=J.I(a)
if(!!z.$isu)return z.j(a)
return"Instance of '"+H.aO(a)+"'"},
fA:function(a,b,c,d){var z,y
H.B(b,d)
z=J.fm(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.Z(z,y,b)
return H.x(z,"$isc",[d],"$asc")},
fB:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.gS(a);x.E();)C.a.h(y,H.B(x.gN(x),c))
if(b)return y
return H.x(J.bb(y),"$isc",z,"$asc")},
bX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fb(a)},
r:function(a){return new P.eb(a)},
cW:function(a){H.k0(a)},
a9:{"^":"a;"},
"+bool":0,
ag:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.ag))return!1
return this.a===b.a&&this.b===b.b},
gO:function(a){var z=this.a
return(z^C.h.cr(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.f1(H.h8(this))
y=P.bC(H.h6(this))
x=P.bC(H.h2(this))
w=P.bC(H.h3(this))
v=P.bC(H.h5(this))
u=P.bC(H.h7(this))
t=P.f2(H.h4(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
f1:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
f2:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bC:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"R;"},
"+double":0,
b5:{"^":"a;a",
i:function(a,b){return new P.b5(C.h.a1(this.a*b))},
a7:function(a,b){return C.h.a7(this.a,H.j(b,"$isb5").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.b5))return!1
return this.a===b.a},
gO:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.f7()
y=this.a
if(y<0)return"-"+new P.b5(0-y).j(0)
x=z.$1(C.h.V(y,6e7)%60)
w=z.$1(C.h.V(y,1e6)%60)
v=new P.f6().$1(y%1e6)
return""+C.h.V(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
t:{
di:function(a,b,c,d,e,f){return new P.b5(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
f6:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
f7:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
dx:{"^":"X;",
j:function(a){return"Throw of null."}},
aL:{"^":"X;a,b,c,d",
gbo:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbn:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.h(z)
w=this.gbo()+y+x
if(!this.a)return w
v=this.gbn()
u=P.bX(this.b)
return w+v+": "+H.h(u)},
t:{
bS:function(a,b,c){return new P.aL(!0,a,b,c)},
cZ:function(a){return new P.aL(!1,null,a,"Must not be null")}}},
dA:{"^":"aL;e,f,a,b,c,d",
gbo:function(){return"RangeError"},
gbn:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
t:{
cz:function(a,b,c){return new P.dA(null,null,!0,a,b,"Value not in range")},
bi:function(a,b,c,d,e){return new P.dA(b,c,!0,a,d,"Invalid value")}}},
fj:{"^":"aL;e,l:f>,a,b,c,d",
gbo:function(){return"RangeError"},
gbn:function(){if(J.eJ(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.h(z)},
t:{
J:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.b1(b))
return new P.fj(b,z,!0,a,c,"Index out of range")}}},
hT:{"^":"X;a",
j:function(a){return"Unsupported operation: "+this.a},
t:{
aj:function(a){return new P.hT(a)}}},
hR:{"^":"X;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
e5:function(a){return new P.hR(a)}}},
hq:{"^":"X;a",
j:function(a){return"Bad state: "+this.a}},
eY:{"^":"X;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.bX(z))+"."},
t:{
b3:function(a){return new P.eY(a)}}},
fY:{"^":"a;",
j:function(a){return"Out of Memory"},
$isX:1},
dG:{"^":"a;",
j:function(a){return"Stack Overflow"},
$isX:1},
f0:{"^":"X;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eb:{"^":"a;a",
j:function(a){return"Exception: "+this.a}},
L:{"^":"R;"},
"+int":0,
f:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gS(this)
for(y=0;z.E();)++y
return y},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.cZ("index"))
if(b<0)H.q(P.bi(b,0,null,"index",null))
for(z=this.gS(this),y=0;z.E();){x=z.gN(z)
if(b===y)return x;++y}throw H.k(P.J(b,this,"index",null,y))},
j:function(a){return P.fk(this,"(",")")}},
cp:{"^":"a;$ti"},
c:{"^":"a;$ti",$isf:1},
"+List":0,
a1:{"^":"a;$ti"},
E:{"^":"a;",
gO:function(a){return P.a.prototype.gO.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
R:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gO:function(a){return H.bh(this)},
j:function(a){return"Instance of '"+H.aO(this)+"'"},
toString:function(){return this.j(this)}},
ai:{"^":"a;"},
n:{"^":"a;",$isfZ:1},
"+String":0,
bJ:{"^":"a;ar:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
dI:function(a,b,c){var z=J.bR(b)
if(!z.E())return a
if(c.length===0){do a+=H.h(z.gN(z))
while(z.E())}else{a+=H.h(z.gN(z))
for(;z.E();)a=a+c+H.h(z.gN(z))}return a}}}}],["","",,W,{"^":"",
d6:function(a,b){var z=document.createElement("canvas")
return z},
f9:function(a){H.j(a,"$isa0")
return"wheel"},
c7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ee:function(a,b,c,d){var z,y
z=W.c7(W.c7(W.c7(W.c7(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eu:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.M
if(z===C.i)return a
return z.cz(a,b)},
ba:{"^":"a_;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kf:{"^":"cA;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kg:{"^":"l;0l:length=","%":"AccessibleNodeList"},
kh:{"^":"ba;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ki:{"^":"ba;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
eQ:{"^":"l;","%":";Blob"},
cj:{"^":"ba;",
c1:function(a,b,c){var z=a.getContext(b,P.jF(c,null))
return z},
$iscj:1,
"%":"HTMLCanvasElement"},
ko:{"^":"H;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kq:{"^":"bV;0l:length=","%":"CSSPerspective"},
kr:{"^":"cm;0n:x=,0p:y=","%":"CSSPositionValue"},
ks:{"^":"bV;0n:x=,0p:y=","%":"CSSRotation"},
b4:{"^":"l;",$isb4:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kt:{"^":"bV;0n:x=,0p:y=","%":"CSSScale"},
eZ:{"^":"il;0l:length=",
dj:function(a,b){var z=a.getPropertyValue(this.cb(a,b))
return z==null?"":z},
cb:function(a,b){var z,y
z=$.$get$db()
y=z[b]
if(typeof y==="string")return y
y=this.eK(a,b)
z[b]=y
return y},
eK:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.f3()+b
if(z in a)return z
return b},
eC:function(a,b,c,d){a.setProperty(b,c,d)},
gbE:function(a){return a.bottom},
gab:function(a){return a.height},
gaC:function(a){return a.left},
gaQ:function(a){return a.right},
gaS:function(a){return a.top},
gad:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
f_:{"^":"a;",
gaC:function(a){return this.dj(a,"left")}},
cm:{"^":"l;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bV:{"^":"l;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
ku:{"^":"cm;0l:length=","%":"CSSTransformValue"},
kv:{"^":"bV;0n:x=,0p:y=","%":"CSSTranslation"},
kw:{"^":"cm;0l:length=","%":"CSSUnparsedValue"},
kx:{"^":"l;0l:length=","%":"DataTransferItemList"},
ky:{"^":"l;0n:x=,0p:y=","%":"DeviceAcceleration"},
kz:{"^":"l;",
j:function(a){return String(a)},
"%":"DOMException"},
kA:{"^":"f4;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
f4:{"^":"l;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
kB:{"^":"io;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a6,P.R]]},
$ast:function(){return[[P.a6,P.R]]},
$isf:1,
$asf:function(){return[[P.a6,P.R]]},
$isc:1,
$asc:function(){return[[P.a6,P.R]]},
$asw:function(){return[[P.a6,P.R]]},
"%":"ClientRectList|DOMRectList"},
f5:{"^":"l;",
j:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gad(a))+" x "+H.h(this.gab(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.aW(b,"$isa6",[P.R],"$asa6")
if(!z)return!1
z=J.bO(b)
return a.left===z.gaC(b)&&a.top===z.gaS(b)&&this.gad(a)===z.gad(b)&&this.gab(a)===z.gab(b)},
gO:function(a){return W.ee(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gad(a)&0x1FFFFFFF,this.gab(a)&0x1FFFFFFF)},
gbE:function(a){return a.bottom},
gab:function(a){return a.height},
gaC:function(a){return a.left},
gaQ:function(a){return a.right},
gaS:function(a){return a.top},
gad:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa6:1,
$asa6:function(){return[P.R]},
"%":";DOMRectReadOnly"},
kC:{"^":"iq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.n]},
$ast:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
$asw:function(){return[P.n]},
"%":"DOMStringList"},
kD:{"^":"l;0l:length=","%":"DOMTokenList"},
ik:{"^":"cu;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.j(z[b],"$isa_")},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var z=this.fY(this)
return new J.ak(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a_]},
$asf:function(){return[W.a_]},
$asc:function(){return[W.a_]}},
a_:{"^":"H;",
gcA:function(a){return new W.ik(a,a.children)},
gb1:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.a7()
if(x<0)x=-x*0
if(typeof w!=="number")return w.a7()
if(w<0)w=-w*0
return new P.a6(z,y,x,w,[P.R])},
j:function(a){return a.localName},
$isa_:1,
"%":";Element"},
a7:{"^":"l;",$isa7:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a0:{"^":"l;",
cv:["dm",function(a,b,c,d){H.b(c,{func:1,args:[W.a7]})
if(c!=null)this.dG(a,b,c,!1)}],
dG:function(a,b,c,d){return a.addEventListener(b,H.aX(H.b(c,{func:1,args:[W.a7]}),1),!1)},
$isa0:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ek|el|en|eo"},
b6:{"^":"eQ;",$isb6:1,"%":"File"},
kW:{"^":"iv;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b6]},
$ast:function(){return[W.b6]},
$isf:1,
$asf:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asw:function(){return[W.b6]},
"%":"FileList"},
kX:{"^":"a0;0l:length=","%":"FileWriter"},
l_:{"^":"ba;0l:length=","%":"HTMLFormElement"},
b8:{"^":"l;",$isb8:1,"%":"Gamepad"},
l0:{"^":"cA;0n:x=,0p:y=","%":"Gyroscope"},
l1:{"^":"l;0l:length=","%":"History"},
l2:{"^":"iI;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.H]},
$ast:function(){return[W.H]},
$isf:1,
$asf:function(){return[W.H]},
$isc:1,
$asc:function(){return[W.H]},
$asw:function(){return[W.H]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bc:{"^":"cD;",$isbc:1,"%":"KeyboardEvent"},
l7:{"^":"l;",
j:function(a){return String(a)},
"%":"Location"},
l8:{"^":"cA;0n:x=,0p:y=","%":"Magnetometer"},
la:{"^":"l;0l:length=","%":"MediaList"},
lb:{"^":"a0;",
cv:function(a,b,c,d){H.b(c,{func:1,args:[W.a7]})
if(b==="message")a.start()
this.dm(a,b,c,!1)},
"%":"MessagePort"},
lc:{"^":"iO;",
k:function(a,b){return P.aD(a.get(H.S(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aD(y.value[1]))}},
gak:function(a){var z=H.e([],[P.n])
this.J(a,new W.fQ(z))
return z},
gl:function(a){return a.size},
$asa8:function(){return[P.n,null]},
$isa1:1,
$asa1:function(){return[P.n,null]},
"%":"MIDIInputMap"},
fQ:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ld:{"^":"iP;",
k:function(a,b){return P.aD(a.get(H.S(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aD(y.value[1]))}},
gak:function(a){var z=H.e([],[P.n])
this.J(a,new W.fR(z))
return z},
gl:function(a){return a.size},
$asa8:function(){return[P.n,null]},
$isa1:1,
$asa1:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
fR:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bd:{"^":"l;",$isbd:1,"%":"MimeType"},
le:{"^":"iR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bd]},
$ast:function(){return[W.bd]},
$isf:1,
$asf:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asw:function(){return[W.bd]},
"%":"MimeTypeArray"},
ap:{"^":"cD;",$isap:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ij:{"^":"cu;a",
gS:function(a){var z=this.a.childNodes
return new W.dj(z,z.length,-1,[H.bA(C.E,z,"w",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.H]},
$asf:function(){return[W.H]},
$asc:function(){return[W.H]}},
H:{"^":"a0;",
j:function(a){var z=a.nodeValue
return z==null?this.dn(a):z},
$isH:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
fV:{"^":"iT;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.H]},
$ast:function(){return[W.H]},
$isf:1,
$asf:function(){return[W.H]},
$isc:1,
$asc:function(){return[W.H]},
$asw:function(){return[W.H]},
"%":"NodeList|RadioNodeList"},
bf:{"^":"l;0l:length=",$isbf:1,"%":"Plugin"},
lp:{"^":"iX;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bf]},
$ast:function(){return[W.bf]},
$isf:1,
$asf:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asw:function(){return[W.bf]},
"%":"PluginArray"},
lu:{"^":"j2;",
k:function(a,b){return P.aD(a.get(H.S(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aD(y.value[1]))}},
gak:function(a){var z=H.e([],[P.n])
this.J(a,new W.hg(z))
return z},
gl:function(a){return a.size},
$asa8:function(){return[P.n,null]},
$isa1:1,
$asa1:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hg:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lw:{"^":"ba;0l:length=","%":"HTMLSelectElement"},
cA:{"^":"a0;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bj:{"^":"a0;",$isbj:1,"%":"SourceBuffer"},
lx:{"^":"el;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bj]},
$ast:function(){return[W.bj]},
$isf:1,
$asf:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asw:function(){return[W.bj]},
"%":"SourceBufferList"},
bk:{"^":"l;",$isbk:1,"%":"SpeechGrammar"},
ly:{"^":"j4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bk]},
$ast:function(){return[W.bk]},
$isf:1,
$asf:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asw:function(){return[W.bk]},
"%":"SpeechGrammarList"},
bl:{"^":"l;0l:length=",$isbl:1,"%":"SpeechRecognitionResult"},
lA:{"^":"j7;",
k:function(a,b){return a.getItem(H.S(b))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gak:function(a){var z=H.e([],[P.n])
this.J(a,new W.hs(z))
return z},
gl:function(a){return a.length},
$asa8:function(){return[P.n,P.n]},
$isa1:1,
$asa1:function(){return[P.n,P.n]},
"%":"Storage"},
hs:{"^":"u:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bm:{"^":"l;",$isbm:1,"%":"CSSStyleSheet|StyleSheet"},
bn:{"^":"ba;",$isbn:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bo:{"^":"a0;",$isbo:1,"%":"TextTrack"},
bp:{"^":"a0;",$isbp:1,"%":"TextTrackCue|VTTCue"},
lF:{"^":"jb;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bp]},
$ast:function(){return[W.bp]},
$isf:1,
$asf:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asw:function(){return[W.bp]},
"%":"TextTrackCueList"},
lG:{"^":"eo;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asw:function(){return[W.bo]},
"%":"TextTrackList"},
lH:{"^":"l;0l:length=","%":"TimeRanges"},
bq:{"^":"l;",$isbq:1,"%":"Touch"},
aQ:{"^":"cD;",$isaQ:1,"%":"TouchEvent"},
lI:{"^":"jh;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bq]},
$ast:function(){return[W.bq]},
$isf:1,
$asf:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asw:function(){return[W.bq]},
"%":"TouchList"},
lJ:{"^":"l;0l:length=","%":"TrackDefaultList"},
cD:{"^":"a7;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lL:{"^":"l;",
j:function(a){return String(a)},
"%":"URL"},
lN:{"^":"l;0n:x=","%":"VRStageBoundsPoint"},
lO:{"^":"a0;0l:length=","%":"VideoTrackList"},
bt:{"^":"ap;",
gfk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.k(P.aj("deltaY is not supported"))},
gfj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.k(P.aj("deltaX is not supported"))},
$isbt:1,
"%":"WheelEvent"},
ib:{"^":"a0;",
ey:function(a,b){return a.requestAnimationFrame(H.aX(H.b(b,{func:1,ret:-1,args:[P.R]}),1))},
dS:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lT:{"^":"jm;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b4]},
$ast:function(){return[W.b4]},
$isf:1,
$asf:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asw:function(){return[W.b4]},
"%":"CSSRuleList"},
lU:{"^":"f5;",
j:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.aW(b,"$isa6",[P.R],"$asa6")
if(!z)return!1
z=J.bO(b)
return a.left===z.gaC(b)&&a.top===z.gaS(b)&&a.width===z.gad(b)&&a.height===z.gab(b)},
gO:function(a){return W.ee(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gab:function(a){return a.height},
gad:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
lW:{"^":"jo;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b8]},
$ast:function(){return[W.b8]},
$isf:1,
$asf:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asw:function(){return[W.b8]},
"%":"GamepadList"},
lX:{"^":"jq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.H]},
$ast:function(){return[W.H]},
$isf:1,
$asf:function(){return[W.H]},
$isc:1,
$asc:function(){return[W.H]},
$asw:function(){return[W.H]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lY:{"^":"js;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bl]},
$ast:function(){return[W.bl]},
$isf:1,
$asf:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asw:function(){return[W.bl]},
"%":"SpeechRecognitionResultList"},
lZ:{"^":"ju;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bm]},
$ast:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asw:function(){return[W.bm]},
"%":"StyleSheetList"},
ir:{"^":"cB;a,b,c,$ti",
fv:function(a,b,c,d){var z=H.y(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
lV:{"^":"ir;a,b,c,$ti"},
is:{"^":"dH;a,b,c,d,e,$ti",
eO:function(){var z=this.d
if(z!=null&&this.a<=0)J.eL(this.b,this.c,z,!1)},
t:{
Y:function(a,b,c,d,e){var z=c==null?null:W.eu(new W.it(c),W.a7)
z=new W.is(0,a,b,z,!1,[e])
z.eO()
return z}}},
it:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.j(a,"$isa7"))}},
w:{"^":"a;$ti",
gS:function(a){return new W.dj(a,this.gl(a),-1,[H.bA(this,a,"w",0)])}},
dj:{"^":"a;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.eK(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gN:function(a){return this.d}},
il:{"^":"l+f_;"},
im:{"^":"l+t;"},
io:{"^":"im+w;"},
ip:{"^":"l+t;"},
iq:{"^":"ip+w;"},
iu:{"^":"l+t;"},
iv:{"^":"iu+w;"},
iH:{"^":"l+t;"},
iI:{"^":"iH+w;"},
iO:{"^":"l+a8;"},
iP:{"^":"l+a8;"},
iQ:{"^":"l+t;"},
iR:{"^":"iQ+w;"},
iS:{"^":"l+t;"},
iT:{"^":"iS+w;"},
iW:{"^":"l+t;"},
iX:{"^":"iW+w;"},
j2:{"^":"l+a8;"},
ek:{"^":"a0+t;"},
el:{"^":"ek+w;"},
j3:{"^":"l+t;"},
j4:{"^":"j3+w;"},
j7:{"^":"l+a8;"},
ja:{"^":"l+t;"},
jb:{"^":"ja+w;"},
en:{"^":"a0+t;"},
eo:{"^":"en+w;"},
jg:{"^":"l+t;"},
jh:{"^":"jg+w;"},
jl:{"^":"l+t;"},
jm:{"^":"jl+w;"},
jn:{"^":"l+t;"},
jo:{"^":"jn+w;"},
jp:{"^":"l+t;"},
jq:{"^":"jp+w;"},
jr:{"^":"l+t;"},
js:{"^":"jr+w;"},
jt:{"^":"l+t;"},
ju:{"^":"jt+w;"}}],["","",,P,{"^":"",
aD:function(a){var z,y,x,w,v
if(a==null)return
z=P.fw(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.S(y[w])
z.Z(0,v,a[v])}return z},
jF:function(a,b){var z={}
a.J(0,new P.jG(z))
return z},
dh:function(){var z=$.dg
if(z==null){z=J.cf(window.navigator.userAgent,"Opera",0)
$.dg=z}return z},
f3:function(){var z,y
z=$.dd
if(z!=null)return z
y=$.de
if(y==null){y=J.cf(window.navigator.userAgent,"Firefox",0)
$.de=y}if(y)z="-moz-"
else{y=$.df
if(y==null){y=!P.dh()&&J.cf(window.navigator.userAgent,"Trident/",0)
$.df=y}if(y)z="-ms-"
else z=P.dh()?"-o-":"-webkit-"}$.dd=z
return z},
jG:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fe:{"^":"cu;a,b",
gbq:function(){var z,y,x
z=this.b
y=H.aZ(z,"t",0)
x=W.a_
return new H.fF(new H.i9(z,H.b(new P.ff(),{func:1,ret:P.a9,args:[y]}),[y]),H.b(new P.fg(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b1(this.gbq().a)},
k:function(a,b){var z=this.gbq()
return z.b.$1(J.cY(z.a,b))},
gS:function(a){var z=P.fB(this.gbq(),!1,W.a_)
return new J.ak(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a_]},
$asf:function(){return[W.a_]},
$asc:function(){return[W.a_]}},
ff:{"^":"u:22;",
$1:function(a){return!!J.I(H.j(a,"$isH")).$isa_}},
fg:{"^":"u:23;",
$1:function(a){return H.d(H.j(a,"$isH"),"$isa_")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ed:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bg:{"^":"a;n:a>,p:b>,$ti",
j:function(a){return"Point("+H.h(this.a)+", "+H.h(this.b)+")"},
q:function(a,b){var z,y,x
if(b==null)return!1
z=H.aW(b,"$isbg",[P.R],null)
if(!z)return!1
z=this.a
y=J.bO(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gO:function(a){var z,y
z=J.aE(this.a)
y=J.aE(this.b)
return P.ed(P.bv(P.bv(0,z),y))},
i:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.i()
y=H.y(this,0)
z=H.B(z*b,y)
x=this.b
if(typeof x!=="number")return x.i()
return new P.bg(z,H.B(x*b,y),this.$ti)}},
iY:{"^":"a;$ti",
gaQ:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.B(z+this.c,H.y(this,0))},
gbE:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.B(z+this.d,H.y(this,0))},
j:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.aW(b,"$isa6",[P.R],"$asa6")
if(!z)return!1
z=this.a
y=J.bO(b)
x=y.gaC(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaS(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.y(this,0)
if(H.B(z+this.c,w)===y.gaQ(b)){if(typeof x!=="number")return x.F()
z=H.B(x+this.d,w)===y.gbE(b)}else z=!1}else z=!1}else z=!1
return z},
gO:function(a){var z,y,x,w,v
z=this.a
y=J.aE(z)
x=this.b
w=J.aE(x)
if(typeof z!=="number")return z.F()
v=H.y(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.B(x+this.d,v)
return P.ed(P.bv(P.bv(P.bv(P.bv(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cB:function(a,b){var z,y
H.x(b,"$isbg",[P.R],"$asbg")
z=b.a
y=this.a
if(typeof z!=="number")return z.di()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.di()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a6:{"^":"iY;aC:a>,aS:b>,ad:c>,ab:d>,$ti"}}],["","",,P,{"^":"",kE:{"^":"Q;0n:x=,0p:y=","%":"SVGFEBlendElement"},kF:{"^":"Q;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},kG:{"^":"Q;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},kH:{"^":"Q;0n:x=,0p:y=","%":"SVGFECompositeElement"},kI:{"^":"Q;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},kJ:{"^":"Q;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},kK:{"^":"Q;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},kL:{"^":"Q;0n:x=,0p:y=","%":"SVGFEFloodElement"},kM:{"^":"Q;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},kN:{"^":"Q;0n:x=,0p:y=","%":"SVGFEImageElement"},kO:{"^":"Q;0n:x=,0p:y=","%":"SVGFEMergeElement"},kP:{"^":"Q;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},kQ:{"^":"Q;0n:x=,0p:y=","%":"SVGFEOffsetElement"},kR:{"^":"Q;0n:x=,0p:y=","%":"SVGFEPointLightElement"},kS:{"^":"Q;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},kT:{"^":"Q;0n:x=,0p:y=","%":"SVGFESpotLightElement"},kU:{"^":"Q;0n:x=,0p:y=","%":"SVGFETileElement"},kV:{"^":"Q;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},kY:{"^":"Q;0n:x=,0p:y=","%":"SVGFilterElement"},kZ:{"^":"b9;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fi:{"^":"b9;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b9:{"^":"Q;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},l3:{"^":"b9;0n:x=,0p:y=","%":"SVGImageElement"},bG:{"^":"l;",$isbG:1,"%":"SVGLength"},l6:{"^":"iK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bG]},
$isf:1,
$asf:function(){return[P.bG]},
$isc:1,
$asc:function(){return[P.bG]},
$asw:function(){return[P.bG]},
"%":"SVGLengthList"},l9:{"^":"Q;0n:x=,0p:y=","%":"SVGMaskElement"},bI:{"^":"l;",$isbI:1,"%":"SVGNumber"},lm:{"^":"iV;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bI]},
$isf:1,
$asf:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asw:function(){return[P.bI]},
"%":"SVGNumberList"},lo:{"^":"Q;0n:x=,0p:y=","%":"SVGPatternElement"},lq:{"^":"l;0n:x=,0p:y=","%":"SVGPoint"},lr:{"^":"l;0l:length=","%":"SVGPointList"},ls:{"^":"l;0n:x=,0p:y=","%":"SVGRect"},lt:{"^":"fi;0n:x=,0p:y=","%":"SVGRectElement"},lB:{"^":"j9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
$asw:function(){return[P.n]},
"%":"SVGStringList"},Q:{"^":"a_;",
gcA:function(a){return new P.fe(a,new W.ij(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lC:{"^":"b9;0n:x=,0p:y=","%":"SVGSVGElement"},hv:{"^":"b9;","%":"SVGTextPathElement;SVGTextContentElement"},lE:{"^":"hv;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bK:{"^":"l;",$isbK:1,"%":"SVGTransform"},lK:{"^":"jj;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bK]},
$isf:1,
$asf:function(){return[P.bK]},
$isc:1,
$asc:function(){return[P.bK]},
$asw:function(){return[P.bK]},
"%":"SVGTransformList"},lM:{"^":"b9;0n:x=,0p:y=","%":"SVGUseElement"},iJ:{"^":"l+t;"},iK:{"^":"iJ+w;"},iU:{"^":"l+t;"},iV:{"^":"iU+w;"},j8:{"^":"l+t;"},j9:{"^":"j8+w;"},ji:{"^":"l+t;"},jj:{"^":"ji+w;"}}],["","",,P,{"^":"",kj:{"^":"l;0l:length=","%":"AudioBuffer"},kk:{"^":"ii;",
k:function(a,b){return P.aD(a.get(H.S(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aD(y.value[1]))}},
gak:function(a){var z=H.e([],[P.n])
this.J(a,new P.eO(z))
return z},
gl:function(a){return a.size},
$asa8:function(){return[P.n,null]},
$isa1:1,
$asa1:function(){return[P.n,null]},
"%":"AudioParamMap"},eO:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},kl:{"^":"a0;0l:length=","%":"AudioTrackList"},eP:{"^":"a0;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ln:{"^":"eP;0l:length=","%":"OfflineAudioContext"},ii:{"^":"l+a8;"}}],["","",,P,{"^":"",dD:{"^":"l;",$isdD:1,"%":"WebGLRenderingContext"},hP:{"^":"l;",$ishP:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lz:{"^":"j6;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.J(b,a,null,null,null))
return P.aD(a.item(b))},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[[P.a1,,,]]},
$isf:1,
$asf:function(){return[[P.a1,,,]]},
$isc:1,
$asc:function(){return[[P.a1,,,]]},
$asw:function(){return[[P.a1,,,]]},
"%":"SQLResultSetRowList"},j5:{"^":"l+t;"},j6:{"^":"j5+w;"}}],["","",,O,{"^":"",as:{"^":"a;0a,0b,0c,0d,$ti",
bj:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
c2:function(a,b,c){var z=H.aZ(this,"as",0)
H.b(b,{func:1,ret:P.a9,args:[[P.f,z]]})
z={func:1,ret:-1,args:[P.L,[P.f,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aV:function(a,b){return this.c2(a,null,b)},
em:function(a){var z
H.x(a,"$isf",[H.aZ(this,"as",0)],"$asf")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dw:function(a,b){var z
H.x(b,"$isf",[H.aZ(this,"as",0)],"$asf")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var z=this.a
return new J.ak(z,z.length,0,[H.y(z,0)])},
D:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aZ(this,"as",0)
H.B(b,z)
z=[z]
if(this.em(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dw(x,H.e([b],z))}},
$isf:1,
t:{
ck:function(a){var z=new O.as([a])
z.bj(a)
return z}}},cw:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
dz:function(a){var z=this.b
if(!(z==null))z.B(a)},
an:function(){return this.dz(null)},
gR:function(a){var z=this.a
if(z.length>0)return C.a.gbQ(z)
else return V.bH()},
d8:function(a){var z=this.a
if(a==null)C.a.h(z,V.bH())
else C.a.h(z,a)
this.an()},
bV:function(){var z=this.a
if(z.length>0){z.pop()
this.an()}}}}],["","",,E,{"^":"",cg:{"^":"a;"},aF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0U:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sc3:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gv()
y.toString
x=H.b(this.gd6(),{func:1,ret:-1,args:[D.p]})
C.a.P(y.a,x)}y=this.c
if(y!=null){y=y.gv()
y.toString
x=H.b(this.gd6(),{func:1,ret:-1,args:[D.p]})
C.a.h(y.a,x)}w=new D.K("shape",z,this.c,this,[F.dF])
w.b=!0
this.aD(w)}},
ac:function(a,b){var z
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.y(z,0)]);z.E();)z.d.ac(0,b)},
aE:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gR(z))
z.an()
a.d9(this.f)
z=a.dy
y=(z&&C.a).gbQ(z)
if(y!=null&&this.d!=null)y.fR(a,this)
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.y(z,0)]);z.E();)z.d.aE(a)
a.d7()
a.dx.bV()},
gv:function(){var z=this.z
if(z==null){z=D.F()
this.z=z}return z},
aD:function(a){var z=this.z
if(!(z==null))z.B(a)},
Y:function(){return this.aD(null)},
fE:[function(a){H.j(a,"$isp")
this.e=null
this.aD(a)},function(){return this.fE(null)},"hG","$1","$0","gd6",0,2,0],
fC:[function(a){this.aD(H.j(a,"$isp"))},function(){return this.fC(null)},"hE","$1","$0","gd5",0,2,0],
hD:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isf",[E.aF],"$asf")
for(z=b.length,y=this.gd5(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gU()==null){t=new D.aM()
t.a=H.e([],w)
t.c=0
u.sU(t)}t=u.gU()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.Y()},"$2","gfB",8,0,8],
hF:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isf",[E.aF],"$asf")
for(z=b.length,y=this.gd5(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gU()==null){t=new D.aM()
t.a=H.e([],w)
t.c=0
u.sU(t)}t=u.gU()
t.toString
H.b(y,x)
C.a.P(t.a,y)}}this.Y()},"$2","gfD",8,0,8],
$isat:1},hb:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
du:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ag(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cw()
y=[V.am]
z.a=H.e([],y)
x=z.gv()
x.toString
w={func:1,ret:-1,args:[D.p]}
v=H.b(new E.hd(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cw()
z.a=H.e([],y)
v=z.gv()
v.toString
x=H.b(new E.he(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cw()
z.a=H.e([],y)
y=z.gv()
y.toString
w=H.b(new E.hf(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.cC])
this.dy=z
C.a.h(z,null)
this.fr=new H.cs(0,0,[P.n,A.dE])},
gfN:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gR(z)
y=this.db
y=z.i(0,y.gR(y))
this.z=y
z=y}return z},
d9:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbQ(z):a;(z&&C.a).h(z,y)},
d7:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
hc:function(a,b){var z=new E.hb(a,b)
z.du(a,b)
return z}}},hd:{"^":"u:9;a",
$1:function(a){var z
H.j(a,"$isp")
z=this.a
z.z=null
z.ch=null}},he:{"^":"u:9;a",
$1:function(a){var z
H.j(a,"$isp")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hf:{"^":"u:9;a",
$1:function(a){var z
H.j(a,"$isp")
z=this.a
z.ch=null
z.cx=null}},hA:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0U:x@,0y,0z,0Q,0ch",
gv:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
dB:[function(a){var z
H.j(a,"$isp")
z=this.x
if(!(z==null))z.B(a)
this.fS()},function(){return this.dB(null)},"dA","$1","$0","gc7",0,2,0],
gfo:function(){var z,y,x
z=Date.now()
y=C.h.V(P.di(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ag(z,!1)
return x/y},
cp:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.i()
if(typeof z!=="number")return H.o(z)
x=C.e.cZ(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.i()
w=C.e.cZ(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
fS:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.hC(this),{func:1,ret:-1,args:[P.R]})
C.r.dS(z)
C.r.ey(z,W.eu(y,P.R))}},
fQ:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cp()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ag(w,!1)
x.y=P.di(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.an()
w=x.db
C.a.sl(w.a,0)
w.an()
w=x.dx
C.a.sl(w.a,0)
w.an()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aE(this.e)}}catch(v){z=H.aK(v)
y=H.b_(v)
P.cW("Error: "+H.h(z))
P.cW("Stack: "+H.h(y))
throw H.k(z)}},
t:{
hB:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscj)return E.dM(a,!0,!0,!0,!1)
y=W.d6(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcA(a).h(0,y)
w=E.dM(y,!0,!0,!0,!1)
w.a=a
return w},
dM:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hA()
y=P.fx(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.c1(a,"webgl",y)
x=H.j(x==null?C.k.c1(a,"experimental-webgl",y):x,"$isdD")
if(x==null)H.q(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hc(x,a)
w=new T.hw(x)
w.b=H.Z(x.getParameter(3379))
w.c=H.Z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.hU(a)
v=new X.fq()
v.c=new X.ao(!1,!1,!1)
v.d=P.fy(null,null,null,P.L)
w.b=v
v=new X.fS(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fC(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.hE(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.dH,P.a]])
w.z=v
u=document
t=W.ap
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.b(w.ge9(),s),!1,t))
v=w.z
r=W.a7
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.b(w.gec(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.b(w.ge5(),q),!1,r))
v=w.z
p=W.bc
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.b(w.gee(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.b(w.ged(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.b(w.geh(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.b(w.gej(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.b(w.gei(),s),!1,t))
p=w.z
o=W.bt;(p&&C.a).h(p,W.Y(a,H.S(W.f9(a)),H.b(w.gek(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.b(w.gea(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.b(w.geb(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.b(w.gel(),q),!1,r))
r=w.z
q=W.aQ
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.b(w.ges(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.b(w.geq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.b(w.ger(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ag(Date.now(),!1)
z.ch=0
z.cp()
return z}}},hC:{"^":"u:26;a",
$1:function(a){var z
H.k_(a)
z=this.a
if(z.z){z.z=!1
z.fQ()}}}}],["","",,Z,{"^":"",e9:{"^":"a;a,b",t:{
cH:function(a,b,c){var z
H.x(c,"$isc",[P.L],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bw(c)),35044)
a.bindBuffer(b,null)
return new Z.e9(b,z)}}},d2:{"^":"cg;a,b,c,d,e",
b_:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aK(y)
x=P.r('Failed to bind buffer attribute "'+J.af(this.a)+'": '+H.h(z))
throw H.k(x)}},
j:function(a){return"["+J.af(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}},i8:{"^":"a;a",$iskm:1},d3:{"^":"a;a,0b,c,d",
aB:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b_:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b_(a)},
df:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aE:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.n]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].j(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.af(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.T(y,", ")+"\nAttrs:   "+C.a.T(u,", ")},
$islD:1},c_:{"^":"a;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aO(this.c)+"'")+"]"}},aR:{"^":"a;a",
gc4:function(a){var z,y
z=this.a
y=(z&$.$get$az().a)!==0?3:0
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$ax().a)!==0)y+=3
if((z&$.$get$aA().a)!==0)y+=2
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$br().a)!==0)y+=3
if((z&$.$get$bs().a)!==0)y+=4
if((z&$.$get$aS().a)!==0)++y
return(z&$.$get$aw().a)!==0?y+4:y},
fb:function(a){var z,y,x
z=$.$get$az()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$br()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bs()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0)if(x===a)return z
return $.$get$e8()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aR))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.e([],[P.n])
y=this.a
if((y&$.$get$az().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ay().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aB().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$br().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bs().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.T(z,"|")},
t:{
ad:function(a){return new Z.aR(a)}}}}],["","",,D,{"^":"",d7:{"^":"a;"},aM:{"^":"a;0a,0b,0c",
B:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.p(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.fc(z))
return x!==0},
fT:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.B(y)}}},
am:function(a){return this.fT(a,!0,!1)},
t:{
F:function(){var z=new D.aM()
z.a=H.e([],[{func:1,ret:-1,args:[D.p]}])
z.c=0
return z}}},fc:{"^":"u:27;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.p]})
z=this.a.a
z.b
a.$1(z)}},p:{"^":"a;a,0b"},c0:{"^":"p;c,d,a,0b,$ti"},c1:{"^":"p;c,d,a,0b,$ti"},K:{"^":"p;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}}],["","",,X,{"^":"",d4:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d4))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.h(this.a)},
t:{"^":"kn<"}},dp:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.h(this.a)}},dq:{"^":"p;c,a,0b"},fq:{"^":"a;0a,0b,0c,0d",
fK:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dq(a,this)
y.b=!0
return z.B(y)},
fG:function(a){var z,y
this.c=a.b
this.d.P(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dq(a,this)
y.b=!0
return z.B(y)}},dt:{"^":"c4;x,y,c,d,e,a,0b"},fC:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ag:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ag(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.i()
v=b.b
u=this.ch
if(typeof v!=="number")return v.i()
t=new V.T(y.a+x*w,y.b+v*u)
u=this.a.gav()
s=new X.be(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bU:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.B(this.ag(a,b))
return!0},
aO:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dl()
if(typeof z!=="number")return z.dg()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.ag(a,b))
return!0},
aN:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.ag(a,b))
return!0},
fL:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gav()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.i()
t=a.b
s=this.cy
if(typeof t!=="number")return t.i()
w=new X.cx(new V.O(v*u,t*s),y,x,new P.ag(w,!1),this)
w.b=!0
z.B(w)
return!0},
eg:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ag(Date.now(),!1)
y=this.f
x=new X.dt(c,a,this.a.gav(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=new V.T(0,0)}},ao:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ao))return!1
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
return z+(this.c?"Shift+":"")}},be:{"^":"c4;x,y,z,Q,ch,c,d,e,a,0b"},fS:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bp:function(a,b,c){var z,y,x
z=new P.ag(Date.now(),!1)
y=this.a.gav()
x=new X.be(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bU:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.bp(a,b,!0))
return!0},
aO:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dl()
if(typeof z!=="number")return z.dg()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.bp(a,b,!0))
return!0},
aN:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.bp(a,b,!1))
return!0},
fM:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gav()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.i()
u=a.b
t=this.ch
if(typeof u!=="number")return u.i()
x=new X.cx(new V.O(w*v,u*t),y,b,new P.ag(x,!1),this)
x.b=!0
z.B(x)
return!0},
gcE:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
gbh:function(){var z=this.c
if(z==null){z=D.F()
this.c=z}return z},
gd3:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z}},cx:{"^":"c4;x,c,d,e,a,0b"},c4:{"^":"p;"},dO:{"^":"c4;x,y,z,Q,ch,c,d,e,a,0b"},hE:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ag:function(a,b){var z,y,x,w
H.x(a,"$isc",[V.T],"$asc")
z=new P.ag(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gav()
w=new X.dO(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fJ:function(a){var z
H.x(a,"$isc",[V.T],"$asc")
z=this.b
if(z==null)return!1
z.B(this.ag(a,!0))
return!0},
fH:function(a){var z
H.x(a,"$isc",[V.T],"$asc")
z=this.c
if(z==null)return!1
z.B(this.ag(a,!0))
return!0},
fI:function(a){var z
H.x(a,"$isc",[V.T],"$asc")
z=this.d
if(z==null)return!1
z.B(this.ag(a,!1))
return!0}},hU:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gav:function(){var z=this.a
return V.dC(0,0,(z&&C.k).gb1(z).c,C.k.gb1(z).d)},
ci:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dp(z,new X.ao(y,a.altKey,a.shiftKey))},
at:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ao(y,a.altKey,a.shiftKey)},
bA:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ao(y,a.altKey,a.shiftKey)},
ah:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.T(y-w,x-v)},
aH:function(a){return new V.O(a.movementX,a.movementY)},
bw:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.e.a1(u.pageX)
C.e.a1(u.pageY)
s=z.left
C.e.a1(u.pageX)
C.a.h(y,new V.T(t-s,C.e.a1(u.pageY)-z.top))}return y},
ae:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.d4(z,new X.ao(y,a.altKey,a.shiftKey))},
hh:[function(a){this.f=!0},"$1","gec",4,0,4],
ha:[function(a){this.f=!1},"$1","ge5",4,0,4],
he:[function(a){if(this.f)a.preventDefault()},"$1","ge9",4,0,4],
hj:[function(a){var z
H.j(a,"$isbc")
if(!this.f)return
z=this.ci(a)
if(this.b.fK(z))a.preventDefault()},"$1","gee",4,0,16],
hi:[function(a){var z
H.j(a,"$isbc")
if(!this.f)return
z=this.ci(a)
if(this.b.fG(z))a.preventDefault()},"$1","ged",4,0,16],
hl:[function(a){var z,y,x,w
H.j(a,"$isap")
z=this.a
z.focus()
this.f=!0
this.at(a)
if(this.x){y=this.ae(a)
x=this.aH(a)
if(this.d.bU(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ae(a)
w=this.ah(a)
if(this.c.bU(y,w))a.preventDefault()},"$1","geh",4,0,5],
hn:[function(a){var z,y,x
H.j(a,"$isap")
this.at(a)
z=this.ae(a)
if(this.x){y=this.aH(a)
if(this.d.aO(z,y))a.preventDefault()
return}if(this.r)return
x=this.ah(a)
if(this.c.aO(z,x))a.preventDefault()},"$1","gej",4,0,5],
hg:[function(a){var z,y,x,w
H.j(a,"$isap")
z=this.a
if(!(z&&C.k).gb1(z).cB(0,new P.bg(a.clientX,a.clientY,[P.R]))){this.at(a)
y=this.ae(a)
if(this.x){x=this.aH(a)
if(this.d.aO(y,x))a.preventDefault()
return}if(this.r)return
w=this.ah(a)
if(this.c.aO(y,w))a.preventDefault()}},"$1","geb",4,0,5],
hm:[function(a){var z,y,x
H.j(a,"$isap")
this.at(a)
z=this.ae(a)
if(this.x){y=this.aH(a)
if(this.d.aN(z,y))a.preventDefault()
return}if(this.r)return
x=this.ah(a)
if(this.c.aN(z,x))a.preventDefault()},"$1","gei",4,0,5],
hf:[function(a){var z,y,x,w
H.j(a,"$isap")
z=this.a
if(!(z&&C.k).gb1(z).cB(0,new P.bg(a.clientX,a.clientY,[P.R]))){this.at(a)
y=this.ae(a)
if(this.x){x=this.aH(a)
if(this.d.aN(y,x))a.preventDefault()
return}if(this.r)return
w=this.ah(a)
if(this.c.aN(y,w))a.preventDefault()}},"$1","gea",4,0,5],
ho:[function(a){var z,y
H.j(a,"$isbt")
this.at(a)
z=new V.O((a&&C.q).gfj(a),C.q.gfk(a)).u(0,180)
if(this.x){if(this.d.fL(z))a.preventDefault()
return}if(this.r)return
y=this.ah(a)
if(this.c.fM(z,y))a.preventDefault()},"$1","gek",4,0,29],
hp:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ae(this.y)
v=this.ah(this.y)
this.d.eg(w,v,x)}},"$1","gel",4,0,4],
hv:[function(a){var z
H.j(a,"$isaQ")
this.a.focus()
this.f=!0
this.bA(a)
z=this.bw(a)
if(this.e.fJ(z))a.preventDefault()},"$1","ges",4,0,10],
ht:[function(a){var z
H.j(a,"$isaQ")
this.bA(a)
z=this.bw(a)
if(this.e.fH(z))a.preventDefault()},"$1","geq",4,0,10],
hu:[function(a){var z
H.j(a,"$isaQ")
this.bA(a)
z=this.bw(a)
if(this.e.fI(z))a.preventDefault()},"$1","ger",4,0,10]}}],["","",,D,{"^":"",bW:{"^":"a;0a,0b,0c,0d",
gv:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z},
ao:[function(a){var z
H.j(a,"$isp")
z=this.d
if(!(z==null))z.B(a)},function(){return this.ao(null)},"h_","$1","$0","gdC",0,2,0],
$isW:1,
$isat:1},W:{"^":"a;",$isat:1},fr:{"^":"as;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gv:function(){var z=this.Q
if(z==null){z=D.F()
this.Q=z}return z},
ao:function(a){var z=this.Q
if(!(z==null))z.B(a)},
ef:[function(a){var z
H.j(a,"$isp")
z=this.ch
if(!(z==null))z.B(a)},function(){return this.ef(null)},"hk","$1","$0","gcm",0,2,0],
hq:[function(a){var z,y,x
H.x(a,"$isf",[D.W],"$asf")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.dN(x))return!1}return!0},"$1","gen",4,0,31],
h7:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.x(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcm(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.j(b[u],"$isW")
if(t instanceof D.bW)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aM()
s.a=H.e([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.c0(a,b,this,[z])
z.b=!0
this.ao(z)},"$2","ge2",8,0,17],
hs:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.x(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcm(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.j(b[u],"$isW")
if(t instanceof D.bW)C.a.P(this.e,t)
s=t.d
if(s==null){s=new D.aM()
s.a=H.e([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.P(s.a,x)}z=new D.c1(a,b,this,[z])
z.b=!0
this.ao(z)},"$2","gep",8,0,17],
dN:function(a){var z=C.a.b2(this.e,a)
return z},
$asf:function(){return[D.W]},
$asas:function(){return[D.W]}},h1:{"^":"a;",$isW:1,$isat:1},hp:{"^":"a;",$isW:1,$isat:1},hx:{"^":"a;",$isW:1,$isat:1},hy:{"^":"a;",$isW:1,$isat:1},hz:{"^":"a;",$isW:1,$isat:1}}],["","",,V,{"^":"",
kp:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","fP",8,0,30],
ke:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.dk(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.j.al("null",c)
return C.j.al(C.e.de($.m.$2(a,0)?0:a,b),c+b+1)},
aY:function(a,b,c){var z,y,x,w,v,u
H.x(a,"$isc",[P.v],"$asc")
z=H.e([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.Z(z,u,C.j.al(z[u],x))}return z},
V:{"^":"a;a,b,c",
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
return new V.V(z,y,x)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
bB:{"^":"a;a,b,c,d",
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
return new V.bB(z,y,x,w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bB))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
c3:{"^":"a;a,b,c,d,e,f,r,x,y",
a2:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
i:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.j(a5,"$isc3")
z=this.a
y=a5.a
if(typeof z!=="number")return z.i()
x=C.e.i(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.i()
u=C.e.i(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.i()
r=C.e.i(t,s)
q=a5.b
p=C.e.i(z,q)
o=a5.e
n=C.e.i(w,o)
m=a5.x
l=C.e.i(t,m)
k=a5.c
z=C.e.i(z,k)
j=a5.f
w=C.e.i(w,j)
i=a5.y
t=C.e.i(t,i)
h=this.d
if(typeof h!=="number")return h.i()
g=C.e.i(h,y)
f=this.e
if(typeof f!=="number")return f.i()
e=C.e.i(f,v)
d=this.f
if(typeof d!=="number")return d.i()
c=C.e.i(d,s)
b=C.e.i(h,q)
a=C.e.i(f,o)
a0=C.e.i(d,m)
h=C.e.i(h,k)
f=C.e.i(f,j)
d=C.e.i(d,i)
a1=this.r
if(typeof a1!=="number")return a1.i()
y=C.e.i(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.i()
v=C.e.i(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.i()
return new V.c3(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.i(a3,s),C.e.i(a1,q)+C.e.i(a2,o)+C.e.i(a3,m),C.e.i(a1,k)+C.e.i(a2,j)+C.e.i(a3,i))},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c3))return!1
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
z=[P.v]
y=V.aY(H.e([this.a,this.d,this.r],z),3,0)
x=V.aY(H.e([this.b,this.e,this.x],z),3,0)
w=V.aY(H.e([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.i(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.i(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.i(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.i(y,1)
s=" "+y[1]+", "
if(1>=u)return H.i(x,1)
s=s+x[1]+", "
if(1>=t)return H.i(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.i(y,2)
z=" "+y[2]+", "
if(2>=u)return H.i(x,2)
z=z+x[2]+", "
if(2>=t)return H.i(w,2)
return s+(z+w[2]+"]")}},
am:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a2:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
d1:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.i()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.i()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.i()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.i()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.i()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.i()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.bH()
a3=1/a2
a4=-w
a5=-i
return V.an((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
i:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.j(a7,"$isam")
z=this.a
y=a7.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.i()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.i()
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
return V.an(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
bZ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
v=this.c
u=a.c
if(typeof v!=="number")return v.i()
t=this.e
if(typeof t!=="number")return t.i()
s=this.f
if(typeof s!=="number")return s.i()
r=this.r
if(typeof r!=="number")return r.i()
q=this.y
if(typeof q!=="number")return q.i()
p=this.z
if(typeof p!=="number")return p.i()
o=this.Q
if(typeof o!=="number")return o.i()
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.i()
r=this.f
if(typeof r!=="number")return r.i()
q=this.r
if(typeof q!=="number")return q.i()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.i()
n=this.z
if(typeof n!=="number")return n.i()
m=this.Q
if(typeof m!=="number")return m.i()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.a4(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
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
j:function(a){return this.K()},
d_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.aY(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.aY(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.aY(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.aY(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
K:function(){return this.d_("",3,0)},
A:function(a){return this.d_(a,3,0)},
t:{
an:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bH:function(){return V.an(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dv:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.C(c)))
y=b.ai(z)
x=y.u(0,Math.sqrt(y.C(y)))
w=z.ai(x)
v=new V.G(a.a,a.b,a.c)
return V.an(x.a,w.a,z.a,x.H(0).C(v),x.b,w.b,z.b,w.H(0).C(v),x.c,w.c,z.c,z.H(0).C(v),0,0,0,1)}}},
T:{"^":"a;n:a>,p:b>",
G:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
i:function(a,b){return new V.T(this.a*b,this.b*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
a4:{"^":"a;n:a>,p:b>,c",
F:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
i:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
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
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
dB:{"^":"a;n:a>,p:b>,c,d",
gX:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dB))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
t:{
dC:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dB(a,b,c,d)}}},
O:{"^":"a;a,b",
ft:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,18],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
i:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.i()
y=this.b
if(typeof y!=="number")return y.i()
return new V.O(z*b,y*b)},
u:function(a,b){var z,y
if($.m.$2(b,0))return new V.O(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.O(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
ft:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,18],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ai:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.G(-this.a,-this.b,-this.c)},
i:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.m.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
d2:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
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
j:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}}],["","",,U,{"^":"",eX:{"^":"d7;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bk:function(a){var z=V.ke(a,this.c,this.b)
return z},
gv:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.B(a)},
sc_:function(a,b){},
sbR:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bk(z)}z=new D.K("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.I(z)}},
sbT:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bk(z)}z=new D.K("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.I(z)}},
sW:function(a,b){var z,y
b=this.bk(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.K("location",y,b,this,[P.v])
z.b=!0
this.I(z)}},
sbS:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.K("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.I(z)}},
sL:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.K("velocity",x,a,this,[P.v])
z.b=!0
this.I(z)}},
sbI:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.K("dampening",y,a,this,[P.v])
z.b=!0
this.I(z)}},
ac:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sW(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sL(y)}},
t:{
cl:function(){var z=new U.eX()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},d9:{"^":"a3;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
aF:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d9))return!1
return J.N(this.a,b.a)},
j:function(a){return"Constant: "+this.a.A("          ")},
t:{
da:function(a){var z=new U.d9()
z.a=a
return z}}},dk:{"^":"as;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
I:[function(a){var z
H.j(a,"$isp")
z=this.e
if(!(z==null))z.B(a)},function(){return this.I(null)},"a3","$1","$0","gap",0,2,0],
h6:[function(a,b){var z,y,x,w,v,u,t
z=U.a3
H.x(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gap(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gv()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.c0(a,b,this,[z])
z.b=!0
this.I(z)},"$2","ge1",8,0,19],
hr:[function(a,b){var z,y,x,w,v,u,t
z=U.a3
H.x(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gap(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gv()
t.toString
H.b(x,w)
C.a.P(t.a,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geo",8,0,19],
aF:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ak(z,z.length,0,[H.y(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aF(0,b,c)
if(w!=null)x=x==null?w:w.i(0,x)}}this.f=x==null?V.bH():x
z=this.e
if(!(z==null))z.am(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dk))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.N(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asf:function(){return[U.a3]},
$asas:function(){return[U.a3]},
$isa3:1},a3:{"^":"d7;"},hV:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.cy
if(z==null){z=D.F()
this.cy=z}return z},
I:[function(a){var z
H.j(a,"$isp")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.I(null)},"a3","$1","$0","gap",0,2,0],
aI:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcE()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.b(this.gbr(),y)
C.a.h(z.a,x)
x=this.a.c.gd3()
x.toString
z=H.b(this.gbs(),y)
C.a.h(x.a,z)
z=this.a.c.gbh()
z.toString
y=H.b(this.gbt(),y)
C.a.h(z.a,y)
return!0},
dY:[function(a){H.j(a,"$isp")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbr",4,0,1],
dZ:[function(a){var z,y,x,w,v,u,t
a=H.d(H.j(a,"$isp"),"$isbe")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.O(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.O(y.a,y.b).i(0,2).u(0,z.gX())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.i()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sL(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.O(x.a,x.b).i(0,2).u(0,z.gX())
x=this.b
v=w.a
if(typeof v!=="number")return v.H()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sW(0,-v*u+t)
this.b.sL(0)
y=y.G(0,a.z)
this.Q=new V.O(y.a,y.b).i(0,2).u(0,z.gX())}this.a3()},"$1","gbs",4,0,1],
e_:[function(a){var z,y,x
H.j(a,"$isp")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.i()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sL(y*10*x)
this.a3()}},"$1","gbt",4,0,1],
aF:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.ch=y
x=b.y
this.b.ac(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.an(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa3:1},hW:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gv:function(){var z=this.fx
if(z==null){z=D.F()
this.fx=z}return z},
I:[function(a){var z
H.j(a,"$isp")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.I(null)},"a3","$1","$0","gap",0,2,0],
aI:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcE()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.b(this.gbr(),y)
C.a.h(z.a,x)
x=this.a.c.gd3()
x.toString
z=H.b(this.gbs(),y)
C.a.h(x.a,z)
z=this.a.c.gbh()
z.toString
x=H.b(this.gbt(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.F()
x.f=z}x=H.b(this.gdV(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.F()
x.d=z}x=H.b(this.gdW(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.F()
x.b=z}x=H.b(this.geN(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.F()
x.d=z}x=H.b(this.geM(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.F()
x.c=z}y=H.b(this.geL(),y)
C.a.h(z.a,y)
return!0},
aa:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.O(z,y)},
dY:[function(a){a=H.d(H.j(a,"$isp"),"$isbe")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbr",4,0,1],
dZ:[function(a){var z,y,x,w,v,u,t
a=H.d(H.j(a,"$isp"),"$isbe")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.O(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.aa(new V.O(y.a,y.b).i(0,2).u(0,z.gX()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.aa(new V.O(x.a,x.b).i(0,2).u(0,z.gX()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sW(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.G(0,a.z)
this.dx=this.aa(new V.O(y.a,y.b).i(0,2).u(0,z.gX()))}this.a3()},"$1","gbs",4,0,1],
e_:[function(a){var z,y,x
H.j(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sL(-y*10*z)
this.a3()}},"$1","gbt",4,0,1],
h3:[function(a){if(H.d(H.j(a,"$isp"),"$isdt").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gdV",4,0,1],
h4:[function(a){var z,y,x,w,v,u,t
a=H.d(H.j(a,"$isp"),"$isbe")
if(!J.N(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.aa(new V.O(x.a,x.b).i(0,2).u(0,z.gX()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sW(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.G(0,a.z)
this.dx=this.aa(new V.O(y.a,y.b).i(0,2).u(0,z.gX()))
this.a3()},"$1","gdW",4,0,1],
hz:[function(a){H.j(a,"$isp")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geN",4,0,1],
hy:[function(a){var z,y,x,w,v,u,t
a=H.d(H.j(a,"$isp"),"$isdO")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.O(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.aa(new V.O(y.a,y.b).i(0,2).u(0,z.gX()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.aa(new V.O(x.a,x.b).i(0,2).u(0,z.gX()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sW(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.G(0,a.z)
this.dx=this.aa(new V.O(y.a,y.b).i(0,2).u(0,z.gX()))}this.a3()},"$1","geM",4,0,1],
hx:[function(a){var z,y,x
H.j(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sL(-y*10*z)
this.a3()}},"$1","geL",4,0,1],
aF:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.dy=y
x=b.y
this.c.ac(0,x)
this.b.ac(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.an(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.i(0,V.an(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa3:1},hX:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gv:function(){var z=this.r
if(z==null){z=D.F()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.B(a)},
aI:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.F()
z.e=y
z=y}else z=y
y=H.b(this.ge0(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.F()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
h5:[function(a){var z,y,x,w
H.j(a,"$isp")
if(!J.N(this.b,this.a.b.c))return
H.d(a,"$iscx")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.i()
w=z+y*x
if(z!==w){this.d=w
z=new D.K("zoom",z,w,this,[P.v])
z.b=!0
this.I(z)}},"$1","ge0",4,0,1],
aF:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.an(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa3:1}}],["","",,M,{"^":"",fa:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
aq:[function(a){var z
H.j(a,"$isp")
z=this.x
if(!(z==null))z.B(a)},function(){return this.aq(null)},"h0","$1","$0","ga9",0,2,0],
hc:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aF
H.x(b,"$isf",[z],"$asf")
for(y=b.length,x=this.ga9(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gU()==null){s=new D.aM()
s.a=H.e([],v)
s.c=0
t.sU(s)}s=t.gU()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.c0(a,b,this,[z])
z.b=!0
this.aq(z)},"$2","ge7",8,0,8],
hd:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aF
H.x(b,"$isf",[z],"$asf")
for(y=b.length,x=this.ga9(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gU()==null){s=new D.aM()
s.a=H.e([],v)
s.c=0
t.sU(s)}s=t.gU()
s.toString
H.b(x,w)
C.a.P(s.a,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.aq(z)},"$2","ge8",8,0,8],
sdc:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gv()
z.toString
y=H.b(this.ga9(),{func:1,ret:-1,args:[D.p]})
C.a.P(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gv()
z.toString
y=H.b(this.ga9(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.K("technique",x,this.c,this,[O.cC])
z.b=!0
this.aq(z)}},
gv:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
aE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.d9(this.c)
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
u=C.h.a1(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.h.a1(v.b*w)
s=C.h.a1(v.c*x)
a.c=s
v=C.h.a1(v.d*w)
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
s.d8(V.an(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dy
if(y==null){y=V.dv(new V.a4(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.dy=y
m=y}else m=y
y=z.a
if(y!=null){l=y.aF(0,a,z)
if(l!=null)m=l.i(0,m)}a.db.d8(m)
z=this.c
if(z!=null)z.ac(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.y(z,0)]);z.E();)z.d.ac(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.y(z,0)]);z.E();)z.d.aE(a)
this.a.toString
a.cy.bV()
a.db.bV()
this.b.toString
a.d7()},
$islv:1}}],["","",,A,{"^":"",d_:{"^":"a;a,b,c"},eN:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fm:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fl:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},fJ:{"^":"dE;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0az,0aj,0aA,0b3,0cF,0cG,0b4,0b5,0cH,0cI,0b6,0b7,0cJ,0cK,0b8,0cL,0cM,0b9,0cN,0cO,0ba,0bb,0bc,0cP,0cQ,0bd,0be,0cR,0cS,0bf,0cT,0bK,0cU,0bL,0cV,0bM,0cW,0bN,0cX,0bO,0cY,0bP,a,b,0c,0d,0e,0f,0r",
dt:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.bJ("")
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
a2.eQ(z)
a2.eX(z)
a2.eR(z)
a2.f4(z)
a2.f5(z)
a2.eZ(z)
a2.f9(z)
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
z=new P.bJ("")
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
v.eU(z)
v.eP(z)
v.eS(z)
v.eV(z)
v.f2(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.f0(z)
v.f1(z)}v.eY(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
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
case C.f:r+="   return alpha;\n"
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
p=H.e([],[P.n])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.T(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.eT(z)
v.f_(z)
v.f3(z)
v.f6(z)
v.f7(z)
v.f8(z)
v.eW(z)}r=z.a+="// === Main ===\n"
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
o=H.e([],[P.n])
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
n="vec4("+C.a.T(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cj(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cj(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.ey(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.q(P.r("Failed to link shader: "+H.h(m)))}this.eH()
this.eI()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.d(this.r.m(0,"invViewMat"),"$isau")
if(y)this.db=H.d(this.r.m(0,"objMat"),"$isau")
if(w)this.dx=H.d(this.r.m(0,"viewObjMat"),"$isau")
this.fr=H.d(this.r.m(0,"projViewObjMat"),"$isau")
if(a2.x2)this.go=H.d(this.r.m(0,"txt2DMat"),"$iscF")
if(a2.y1)this.id=H.d(this.r.m(0,"txtCubeMat"),"$isau")
if(a2.y2)this.k1=H.d(this.r.m(0,"colorMat"),"$isau")
this.k3=H.e([],[A.au])
y=a2.az
if(y>0){this.k2=H.j(this.r.m(0,"bendMatCount"),"$isD")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.q(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(k,"$isau"))}}y=a2.a
if(y!==C.b){this.k4=H.d(this.r.m(0,"emissionClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.r1=H.d(this.r.m(0,"emissionTxt"),"$isab")
this.rx=H.d(this.r.m(0,"nullEmissionTxt"),"$isD")
break
case C.d:this.r2=H.d(this.r.m(0,"emissionTxt"),"$isac")
this.rx=H.d(this.r.m(0,"nullEmissionTxt"),"$isD")
break}}y=a2.b
if(y!==C.b){this.ry=H.d(this.r.m(0,"ambientClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.x1=H.d(this.r.m(0,"ambientTxt"),"$isab")
this.y1=H.d(this.r.m(0,"nullAmbientTxt"),"$isD")
break
case C.d:this.x2=H.d(this.r.m(0,"ambientTxt"),"$isac")
this.y1=H.d(this.r.m(0,"nullAmbientTxt"),"$isD")
break}}y=a2.c
if(y!==C.b){this.y2=H.d(this.r.m(0,"diffuseClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.az=H.d(this.r.m(0,"diffuseTxt"),"$isab")
this.aA=H.d(this.r.m(0,"nullDiffuseTxt"),"$isD")
break
case C.d:this.aj=H.d(this.r.m(0,"diffuseTxt"),"$isac")
this.aA=H.d(this.r.m(0,"nullDiffuseTxt"),"$isD")
break}}y=a2.d
if(y!==C.b){this.b3=H.d(this.r.m(0,"invDiffuseClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.cF=H.d(this.r.m(0,"invDiffuseTxt"),"$isab")
this.b4=H.d(this.r.m(0,"nullInvDiffuseTxt"),"$isD")
break
case C.d:this.cG=H.d(this.r.m(0,"invDiffuseTxt"),"$isac")
this.b4=H.d(this.r.m(0,"nullInvDiffuseTxt"),"$isD")
break}}y=a2.e
if(y!==C.b){this.b7=H.d(this.r.m(0,"shininess"),"$isU")
this.b5=H.d(this.r.m(0,"specularClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.cH=H.d(this.r.m(0,"specularTxt"),"$isab")
this.b6=H.d(this.r.m(0,"nullSpecularTxt"),"$isD")
break
case C.d:this.cI=H.d(this.r.m(0,"specularTxt"),"$isac")
this.b6=H.d(this.r.m(0,"nullSpecularTxt"),"$isD")
break}}switch(a2.f){case C.b:break
case C.f:break
case C.c:this.cJ=H.d(this.r.m(0,"bumpTxt"),"$isab")
this.b8=H.d(this.r.m(0,"nullBumpTxt"),"$isD")
break
case C.d:this.cK=H.d(this.r.m(0,"bumpTxt"),"$isac")
this.b8=H.d(this.r.m(0,"nullBumpTxt"),"$isD")
break}if(a2.dy){this.cL=H.d(this.r.m(0,"envSampler"),"$isac")
this.cM=H.d(this.r.m(0,"nullEnvTxt"),"$isD")
y=a2.r
if(y!==C.b){this.b9=H.d(this.r.m(0,"reflectClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.cN=H.d(this.r.m(0,"reflectTxt"),"$isab")
this.ba=H.d(this.r.m(0,"nullReflectTxt"),"$isD")
break
case C.d:this.cO=H.d(this.r.m(0,"reflectTxt"),"$isac")
this.ba=H.d(this.r.m(0,"nullReflectTxt"),"$isD")
break}}y=a2.x
if(y!==C.b){this.bb=H.d(this.r.m(0,"refraction"),"$isU")
this.bc=H.d(this.r.m(0,"refractClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.cP=H.d(this.r.m(0,"refractTxt"),"$isab")
this.bd=H.d(this.r.m(0,"nullRefractTxt"),"$isD")
break
case C.d:this.cQ=H.d(this.r.m(0,"refractTxt"),"$isac")
this.bd=H.d(this.r.m(0,"nullRefractTxt"),"$isD")
break}}}y=a2.y
if(y!==C.b){this.be=H.d(this.r.m(0,"alpha"),"$isU")
switch(y){case C.b:break
case C.f:break
case C.c:this.cR=H.d(this.r.m(0,"alphaTxt"),"$isab")
this.bf=H.d(this.r.m(0,"nullAlphaTxt"),"$isD")
break
case C.d:this.cS=H.d(this.r.m(0,"alphaTxt"),"$isac")
this.bf=H.d(this.r.m(0,"nullAlphaTxt"),"$isD")
break}}this.bK=H.e([],[A.e_])
this.bL=H.e([],[A.e0])
this.bM=H.e([],[A.e1])
this.bN=H.e([],[A.e2])
this.bO=H.e([],[A.e3])
this.bP=H.e([],[A.e4])
if(a2.k2){y=a2.z
if(y>0){this.cT=H.j(this.r.m(0,"dirLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.bK;(x&&C.a).h(x,new A.e_(l,k,j))}}y=a2.Q
if(y>0){this.cU=H.j(this.r.m(0,"pntLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isU")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isU")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isU")
x=this.bL;(x&&C.a).h(x,new A.e0(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.cV=H.j(this.r.m(0,"spotLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isU")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isU")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isU")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isU")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isU")
x=this.bM;(x&&C.a).h(x,new A.e1(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.cW=H.j(this.r.m(0,"txtDirLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isC")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isD")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isab")
x=this.bN;(x&&C.a).h(x,new A.e2(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.cX=H.j(this.r.m(0,"txtPntLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$iscF")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isD")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isU")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isU")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isU")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isac")
x=this.bO;(x&&C.a).h(x,new A.e3(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.cY=H.j(this.r.m(0,"txtSpotLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isC")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isD")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isC")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isU")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isU")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isU")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isU")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isU")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a1,"$isab")
x=this.bP;(x&&C.a).h(x,new A.e4(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a5:function(a,b,c){b.a.uniform1i(b.d,1)},
a_:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
fI:function(a,b){var z,y
z=a.aj
y=new A.fJ(b,z)
y.dv(b,z)
y.dt(a,b)
return y}}},fM:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,az,aj,aA",
eQ:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.az+"];\n"
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
eX:function(a){var z
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
eR:function(a){var z
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
f4:function(a){var z,y
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
f5:function(a){var z,y
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
eZ:function(a){var z
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
f9:function(a){var z
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
af:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.j.c5(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
eU:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.af(a,z,"emission")
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
eP:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.af(a,z,"ambient")
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
eS:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.af(a,z,"diffuse")
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
eV:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.af(a,z,"invDiffuse")
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
f2:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.af(a,z,"specular")
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
eY:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
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
case C.f:z+="   return normalize(normalVec);\n"
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
f0:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.af(a,z,"reflect")
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
f1:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.af(a,z,"refract")
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
eT:function(a){var z,y
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
f_:function(a){var z,y
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
f3:function(a){var z,y
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
f6:function(a){var z,y,x
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
f7:function(a){var z,y,x
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
f8:function(a){var z,y,x
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
eW:function(a){var z
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
j:function(a){return this.aj}},e_:{"^":"a;a,b,c"},e2:{"^":"a;a,b,c,d,e,f,r,x"},e0:{"^":"a;a,b,c,d,e,f,r"},e3:{"^":"a;a,b,c,d,e,f,r,x,y,z"},e1:{"^":"a;a,b,c,d,e,f,r,x,y,z"},e4:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dE:{"^":"cg;",
dv:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cj:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.ey(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.k(P.r("Error compiling shader '"+H.h(y)+"': "+H.h(x)))}return y},
eH:function(){var z,y,x,w,v,u
z=H.e([],[A.d_])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.d_(y,v.name,u))}this.f=new A.eN(z)},
eI:function(){var z,y,x,w,v,u
z=H.e([],[A.a2])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fi(v.type,v.size,v.name,u))}this.r=new A.hO(z)},
as:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.D(z,y,b,c)
else return A.cE(z,y,b,a,c)},
dP:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ab(z,y,b,c)
else return A.cE(z,y,b,a,c)},
dQ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ac(z,y,b,c)
else return A.cE(z,y,b,a,c)},
aZ:function(a,b){return new P.eb(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
fi:function(a,b,c,d){switch(a){case 5120:return this.as(b,c,d)
case 5121:return this.as(b,c,d)
case 5122:return this.as(b,c,d)
case 5123:return this.as(b,c,d)
case 5124:return this.as(b,c,d)
case 5125:return this.as(b,c,d)
case 5126:return new A.U(this.a,this.e,c,d)
case 35664:return new A.hJ(this.a,this.e,c,d)
case 35665:return new A.C(this.a,this.e,c,d)
case 35666:return new A.hM(this.a,this.e,c,d)
case 35667:return new A.hK(this.a,this.e,c,d)
case 35668:return new A.hL(this.a,this.e,c,d)
case 35669:return new A.hN(this.a,this.e,c,d)
case 35674:return new A.hQ(this.a,this.e,c,d)
case 35675:return new A.cF(this.a,this.e,c,d)
case 35676:return new A.au(this.a,this.e,c,d)
case 35678:return this.dP(b,c,d)
case 35680:return this.dQ(b,c,d)
case 35670:throw H.k(this.aZ("BOOL",c))
case 35671:throw H.k(this.aZ("BOOL_VEC2",c))
case 35672:throw H.k(this.aZ("BOOL_VEC3",c))
case 35673:throw H.k(this.aZ("BOOL_VEC4",c))
default:throw H.k(P.r("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}},bU:{"^":"a;a,b",
j:function(a){return this.b}},a2:{"^":"a;"},hO:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.k(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.K()},
fn:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].j(0)+a
return x},
K:function(){return this.fn("\n")}},D:{"^":"a2;a,b,c,d",
j:function(a){return"Uniform1i: "+H.h(this.c)}},hK:{"^":"a2;a,b,c,d",
j:function(a){return"Uniform2i: "+H.h(this.c)}},hL:{"^":"a2;a,b,c,d",
j:function(a){return"Uniform3i: "+H.h(this.c)}},hN:{"^":"a2;a,b,c,d",
j:function(a){return"Uniform4i: "+H.h(this.c)}},hI:{"^":"a2;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.h(this.c)},
t:{
cE:function(a,b,c,d,e){var z=new A.hI(a,b,c,e)
z.f=d
z.e=P.fA(d,0,!1,P.L)
return z}}},U:{"^":"a2;a,b,c,d",
j:function(a){return"Uniform1f: "+H.h(this.c)}},hJ:{"^":"a2;a,b,c,d",
j:function(a){return"Uniform2f: "+H.h(this.c)}},C:{"^":"a2;a,b,c,d",
j:function(a){return"Uniform3f: "+H.h(this.c)}},hM:{"^":"a2;a,b,c,d",
j:function(a){return"Uniform4f: "+H.h(this.c)}},hQ:{"^":"a2;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.h(this.c)}},cF:{"^":"a2;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bw(H.x(a,"$isc",[P.v],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.h(this.c)}},au:{"^":"a2;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bw(H.x(a,"$isc",[P.v],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.h(this.c)}},ab:{"^":"a2;a,b,c,d",
j:function(a){return"UniformSampler2D: "+H.h(this.c)}},ac:{"^":"a2;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.h(this.c)}}}],["","",,F,{"^":"",
kb:function(a,b,c,d){return F.jH(c,a,d,b,new F.kc())},
jH:function(a,b,c,d,e){var z=F.k9(a,b,new F.jI(H.b(e,{func:1,ret:V.a4,args:[P.v]}),d,b,c),null)
if(z==null)return
z.au()
z.fA(new F.i2(),new F.fW())
return z},
k9:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.av,P.v,P.v]})
if(a<1)return
if(b<1)return
z=new F.dF()
y=new F.hY(z)
y.b=!1
x=[F.av]
y.c=H.e([],x)
z.a=y
y=new F.hn(z)
y.b=H.e([],[F.dz])
z.b=y
y=new F.hm(z)
y.b=H.e([],[F.dr])
z.c=y
y=new F.hl(z)
y.b=H.e([],[F.ah])
z.d=y
z.e=null
w=H.e([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cG(null,null,new V.bB(x,0,0,1),null,null,new V.T(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.cC(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cG(null,null,new V.bB(o,n,m,1),null,null,new V.T(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.cC(d))}}z.d.fa(a+1,b+1,w)
return z},
kc:{"^":"u:33;",
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)}},
jI:{"^":"u:34;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.cX(y.$1(z),x)
x=J.cX(y.$1(z+3.141592653589793/this.c),x).G(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.C(x)))
u=new V.G(1,0,0)
y=v.ai(!v.q(0,u)?new V.G(0,0,1):u)
t=y.u(0,Math.sqrt(y.C(y)))
y=t.ai(v)
u=y.u(0,Math.sqrt(y.C(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.i(0,y*x)
x=t.i(0,r*x)
x=w.F(0,new V.a4(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.N(a.f,x)){a.f=x
y=a.a
if(y!=null)y.Y()}}},
ah:{"^":"a;0a,0b,0c,0d,0e",
aJ:function(){if(!this.gcD()){C.a.P(this.a.a.d.b,this)
this.a.a.Y()}this.ev()
this.ew()
this.ex()},
eE:function(a){this.a=a
C.a.h(a.d.b,this)},
eF:function(a){this.b=a
C.a.h(a.d.c,this)},
eG:function(a){this.c=a
C.a.h(a.d.d,this)},
ev:function(){var z=this.a
if(z!=null){C.a.P(z.d.b,this)
this.a=null}},
ew:function(){var z=this.b
if(z!=null){C.a.P(z.d.c,this)
this.b=null}},
ex:function(){var z=this.c
if(z!=null){C.a.P(z.d.d,this)
this.c=null}},
gcD:function(){return this.a==null||this.b==null||this.c==null},
dI:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.d2())return
return v.u(0,Math.sqrt(v.C(v)))},
dK:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.C(z)))
z=w.G(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.ai(z.u(0,Math.sqrt(z.C(z))))
return z.u(0,Math.sqrt(z.C(z)))},
bH:function(){if(this.d!=null)return!0
var z=this.dI()
if(z==null){z=this.dK()
if(z==null)return!1}this.d=z
this.a.a.Y()
return!0},
dH:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.d2())return
return v.u(0,Math.sqrt(v.C(v)))},
dJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.G(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.H(0)}else{l=(z-q.b)/n
z=r.G(0,u).i(0,l).F(0,u).G(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.C(z)))
z=k.ai(m)
z=z.u(0,Math.sqrt(z.C(z))).ai(k)
m=z.u(0,Math.sqrt(z.C(z)))}return m},
bF:function(){if(this.e!=null)return!0
var z=this.dH()
if(z==null){z=this.dJ()
if(z==null)return!1}this.e=z
this.a.a.Y()
return!0},
gff:function(a){if(J.N(this.a,this.b))return!0
if(J.N(this.b,this.c))return!0
if(J.N(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
A:function(a){var z,y
if(this.gcD())return a+"disposed"
z=a+C.j.al(J.af(this.a.e),0)+", "+C.j.al(J.af(this.b.e),0)+", "+C.j.al(J.af(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
K:function(){return this.A("")},
t:{
bY:function(a,b,c){var z,y,x
z=new F.ah()
y=a.a
if(y==null)H.q(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.r("May not create a face with vertices attached to different shapes."))
z.eE(a)
z.eF(b)
z.eG(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Y()
return z}}},
fd:{"^":"a;"},
ho:{"^":"fd;",
aM:function(a,b,c){var z,y
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
dr:{"^":"a;"},
fs:{"^":"a;"},
hH:{"^":"fs;",
aM:function(a,b,c){var z,y
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
dz:{"^":"a;"},
dF:{"^":"a;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
au:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.au()||!1
if(!this.a.au())y=!1
z=this.e
if(!(z==null))z.am(0)
return y},
dT:function(a,b,c,d,e){var z,y,x
H.x(d,"$isc",[F.av],"$asc")
H.x(e,"$isc",[P.L],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.aM(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fA:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.av],x=[P.L];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.dT(a,v,y,u,t))b.fz(u)}this.a.w()
this.c.bW()
this.d.bW()
this.b.fP()
this.c.bX(new F.hH())
this.d.bX(new F.ho())
z=this.e
if(!(z==null))z.am(0)},
fd:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$az()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$ax().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$br().a)!==0)++w
if((x&$.$get$bs().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
v=b.gc4(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.d2])
for(r=0,q=0;q<w;++q){p=b.fb(q)
o=p.gc4(p)
C.a.Z(s,q,new Z.d2(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].fu(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.Z(t,l,m[k]);++l}}r+=o}H.x(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bw(t)),35044)
y.bindBuffer(34962,null)
i=new Z.d3(new Z.e9(34962,j),s,b)
i.b=H.e([],[Z.c_])
if(this.b.b.length!==0){x=P.L
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.cH(y,34963,H.x(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c_(0,h.length,f))}if(this.c.b.length!==0){x=P.L
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.cH(y,34963,H.x(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c_(1,h.length,f))}if(this.d.b.length!==0){x=P.L
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.w()
C.a.h(h,g.e)}f=Z.cH(y,34963,H.x(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c_(4,h.length,f))}return i},
j:function(a){var z=H.e([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.T(z,"\n")},
aD:function(a){var z=this.e
if(!(z==null))z.B(a)},
Y:function(){return this.aD(null)}},
hl:{"^":"a;a,0b",
fa:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(c,"$isc",[F.av],"$asc")
z=H.e([],[F.ah])
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
C.a.h(z,F.bY(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bY(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bY(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bY(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
bX:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aM(0,v,t)){v.aJ()
break}}}}},
bW:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gff(x)
if(y)x.aJ()}},
au:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bH())x=!1
return x},
bG:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bF())x=!1
return x},
j:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.e([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.T(z,"\n")},
K:function(){return this.A("")}},
hm:{"^":"a;a,0b",
gl:function(a){return this.b.length},
bX:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aM(0,v,t)){v.aJ()
break}}}}},
bW:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.N(x.a,x.b)
if(y)x.aJ()}},
j:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.e([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.T(z,"\n")},
K:function(){return this.A("")}},
hn:{"^":"a;a,0b",
gl:function(a){return this.b.length},
fP:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aJ()}},
j:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.e([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.T(z,"\n")},
K:function(){return this.A("")}},
av:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cC:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cG(this.cx,x,u,z,y,w,v,a,t)},
fu:function(a){var z,y
z=J.I(a)
if(z.q(a,$.$get$az())){z=this.f
y=[P.v]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$ay())){z=this.r
y=[P.v]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$ax())){z=this.x
y=[P.v]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aA())){z=this.y
y=[P.v]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.q(a,$.$get$aB())){z=this.z
y=[P.v]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$br())){z=this.Q
y=[P.v]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bs())){z=this.Q
y=[P.v]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$aS()))return H.e([this.ch],[P.v])
else if(z.q(a,$.$get$aw())){z=H.e([-1,-1,-1,-1],[P.v])
return z}else return H.e([],[P.v])},
bH:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.J(0,new F.i7(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.am(0)}return!0},
bF:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.J(0,new F.i6(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.am(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
A:function(a){var z,y,x
z=H.e([],[P.n])
C.a.h(z,C.j.al(J.af(this.e),0))
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
C.a.h(z,V.P(this.ch,3,0))
C.a.h(z,"-")
x=C.a.T(z,", ")
return a+"{"+x+"}"},
K:function(){return this.A("")},
t:{
cG:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.av()
y=new F.i5(z)
y.b=H.e([],[F.dz])
z.b=y
y=new F.i1(z)
x=[F.dr]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.hZ(z)
x=[F.ah]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$e6()
z.e=0
y=$.$get$az()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ay().a)!==0?e:null
z.x=(x&$.$get$ax().a)!==0?b:null
z.y=(x&$.$get$aA().a)!==0?f:null
z.z=(x&$.$get$aB().a)!==0?g:null
z.Q=(x&$.$get$e7().a)!==0?c:null
z.ch=(x&$.$get$aS().a)!==0?i:0
z.cx=(x&$.$get$aw().a)!==0?a:null
return z}}},
i7:{"^":"u:6;a",
$1:function(a){var z,y
H.j(a,"$isah")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
i6:{"^":"u:6;a",
$1:function(a){var z,y
H.j(a,"$isah")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
hY:{"^":"a;a,0b,0c",
w:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.k(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Y()
return!0},
gl:function(a){return this.c.length},
au:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bH()
return!0},
bG:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bF()
return!0},
fe:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}}}return!0},
j:function(a){return this.K()},
A:function(a){var z,y,x,w
this.w()
z=H.e([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.T(z,"\n")},
K:function(){return this.A("")}},
hZ:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
J:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ah]})
C.a.J(this.b,b)
C.a.J(this.c,new F.i_(this,b))
C.a.J(this.d,new F.i0(this,b))},
j:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.e([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.T(z,"\n")},
K:function(){return this.A("")}},
i_:{"^":"u:6;a,b",
$1:function(a){H.j(a,"$isah")
if(!J.N(a.a,this.a))this.b.$1(a)}},
i0:{"^":"u:6;a,b",
$1:function(a){var z
H.j(a,"$isah")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
i1:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
j:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.e([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.T(z,"\n")},
K:function(){return this.A("")}},
i3:{"^":"a;"},
i2:{"^":"i3;",
aM:function(a,b,c){return J.N(b.f,c.f)}},
i4:{"^":"a;"},
fW:{"^":"i4;",
fz:function(a){var z,y,x,w,v,u,t,s
H.x(a,"$isc",[F.av],"$asc")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.u(0,Math.sqrt(z.C(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){t=a[x]
s=z.u(0,Math.sqrt(u))
if(!J.N(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.B(null)}}}return}},
i5:{"^":"a;a,0b",
gl:function(a){return this.b.length},
j:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.e([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.T(z,"\n")},
K:function(){return this.A("")}}}],["","",,O,{"^":"",fH:{"^":"cC;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gv:function(){var z=this.dy
if(z==null){z=D.F()
this.dy=z}return z},
a4:[function(a){var z
H.j(a,"$isp")
z=this.dy
if(!(z==null))z.B(a)},function(){return this.a4(null)},"hb","$1","$0","ge6",0,2,0],
eA:[function(a){H.j(a,"$isp")
this.a=null
this.a4(a)},function(){return this.eA(null)},"hw","$1","$0","gez",0,2,0],
h8:[function(a,b){var z=V.am
z=new D.c0(a,H.x(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.a4(z)},"$2","ge3",8,0,20],
h9:[function(a,b){var z=V.am
z=new D.c1(a,H.x(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.a4(z)},"$2","ge4",8,0,20],
cg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.V(z.e.length+3,4)*4
x=C.h.V(z.f.length+3,4)*4
w=C.h.V(z.r.length+3,4)*4
v=C.h.V(z.x.length+3,4)*4
u=C.h.V(z.y.length+3,4)*4
t=C.h.V(z.z.length+3,4)*4
s=C.h.V(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.h.j(q.a)+C.h.j(p.a)+C.h.j(o.a)+C.h.j(n.a)+C.h.j(m.a)+C.h.j(l.a)+C.h.j(k.a)+C.h.j(j.a)+C.h.j(i.a)+"_"
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
a6=$.$get$az()
if(c){z=$.$get$ay()
a6=new Z.aR(a6.a|z.a)}if(b){z=$.$get$ax()
a6=new Z.aR(a6.a|z.a)}if(a){z=$.$get$aA()
a6=new Z.aR(a6.a|z.a)}if(a0){z=$.$get$aB()
a6=new Z.aR(a6.a|z.a)}if(a2){z=$.$get$aw()
a6=new Z.aR(a6.a|z.a)}return new A.fM(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
M:function(a,b){H.x(a,"$isc",[T.dL],"$asc")},
ac:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ak(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.bZ(x)}}},
fR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cg()
y=a.fr.k(0,z.aj)
if(y==null){y=A.fI(z,a.a)
x=y.b
if(x.length===0)H.q(P.r("May not cache a shader with no name."))
if(a.fr.fh(0,x))H.q(P.r('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.Z(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aA
z=b.e
if(!(z instanceof Z.d3)){b.e=null
z=null}if(z==null||!z.d.q(0,v)){z=w.r1
if(z)b.d.au()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.bG()
t.a.bG()
t=t.e
if(!(t==null))t.am(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.fe()
s=s.e
if(!(s==null))s.am(0)}q=b.d.fd(new Z.i8(a.a),v)
q.aB($.$get$az()).e=this.a.y.c
if(z)q.aB($.$get$ay()).e=this.a.Q.c
if(u)q.aB($.$get$ax()).e=this.a.z.c
if(w.rx)q.aB($.$get$aA()).e=this.a.ch.c
if(t)q.aB($.$get$aB()).e=this.a.cx.c
if(w.x1)q.aB($.$get$aw()).e=this.a.cy.c
b.e=q}z=T.dL
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.fm()
if(w.fx){u=this.a
t=a.dx
t=t.gR(t)
u=u.db
u.toString
u.a8(t.a2(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gR(t)
s=a.dx
s=t.i(0,s.gR(s))
a.cx=s
t=s}u=u.dx
u.toString
u.a8(t.a2(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gfN()
s=a.dx
s=t.i(0,s.gR(s))
a.ch=s
t=s}u=u.fr
u.toString
u.a8(t.a2(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.a8(t.a2(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.a8(t.a2(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.a8(C.w.a2(t,!0))}if(w.az>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.v],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.i(s,n)
s=s[n]
t.toString
H.j(s,"$isam")
t=t.k3
if(n>=t.length)return H.i(t,n)
t=t[n]
m=new Float32Array(H.bw(H.x(s.a2(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.f:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.M(p,this.f.d)
u=this.a
t=this.f.d
u.a5(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.M(p,this.f.e)
u=this.a
t=this.f.e
u.a_(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.f:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.M(p,this.r.d)
u=this.a
t=this.r.d
u.a5(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.M(p,this.r.e)
u=this.a
t=this.r.e
u.a_(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.f:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.M(p,this.x.d)
u=this.a
t=this.x.d
u.a5(u.az,u.aA,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.M(p,this.x.e)
u=this.a
t=this.x.e
u.a_(u.aj,u.aA,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.f:u=this.a
t=this.y.f
u=u.b3
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.M(p,this.y.d)
u=this.a
t=this.y.d
u.a5(u.cF,u.b4,t)
t=this.a
u=this.y.f
t=t.b3
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.M(p,this.y.e)
u=this.a
t=this.y.e
u.a_(u.cG,u.b4,t)
t=this.a
u=this.y.f
t=t.b3
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.f:u=this.a
t=this.z.f
u=u.b5
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.b7
t.a.uniform1f(t.d,r)
break
case C.c:this.M(p,this.z.d)
u=this.a
t=this.z.d
u.a5(u.cH,u.b6,t)
t=this.a
u=this.z.f
t=t.b5
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b7
u.a.uniform1f(u.d,r)
break
case C.d:this.M(p,this.z.e)
u=this.a
t=this.z.e
u.a_(u.cI,u.b6,t)
t=this.a
u=this.z.f
t=t.b5
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b7
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.cT
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bK
if(k>=s.length)return H.i(s,k)
h=s[k]
s=l.bZ(i.a)
r=s.a
g=s.b
f=s.c
f=s.u(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.cU
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bL
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaP(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gc0(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aT(i.gaP(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga6(i)
f=h.d
g=s.gbg()
r=s.gaU()
s=s.gb0()
f.a.uniform3f(f.d,g,r,s)
s=i.gbB()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbC()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbD()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.cV
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bM
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaP(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gc0(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbJ(i).hC()
f=h.c
g=s.gaw(s)
r=s.gax(s)
s=s.gay()
f.a.uniform3f(f.d,g,r,s)
s=l.aT(i.gaP(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga6(i)
r=h.e
g=s.gbg()
f=s.gaU()
s=s.gb0()
r.a.uniform3f(r.d,g,f,s)
s=i.ghB()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghA()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbB()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbC()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbD()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.cW
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
r=this.a.bN
if(k>=r.length)return H.i(r,k)
h=r[k]
r=i.gaR()
H.x(p,"$isc",s,"$asc")
if(!C.a.b2(p,r)){r.saK(0,p.length)
C.a.h(p,r)}r=i.gbJ(i)
g=h.d
f=r.gaw(r)
e=r.gax(r)
r=r.gay()
g.a.uniform3f(g.d,f,e,r)
r=i.gbh()
e=h.b
f=r.gaw(r)
g=r.gax(r)
r=r.gay()
e.a.uniform3f(e.d,f,g,r)
r=i.gaQ(i)
g=h.c
f=r.gaw(r)
e=r.gax(r)
r=r.gay()
g.a.uniform3f(g.d,f,e,r)
r=l.bZ(i.gbJ(i))
e=r.a
f=r.b
g=r.c
g=r.u(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga6(i)
f=h.f
e=g.gbg()
r=g.gaU()
g=g.gb0()
f.a.uniform3f(f.d,e,r,g)
g=i.gaR()
r=g.gaL(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gaL(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaK(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.cX
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.y,t=u.length,s=[P.v],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
g=this.a.bO
if(k>=g.length)return H.i(g,k)
h=g[k]
g=i.gaR()
H.x(p,"$isc",r,"$asc")
if(!C.a.b2(p,g)){g.saK(0,p.length)
C.a.h(p,g)}d=l.i(0,i.gR(i))
g=i.gR(i).aT(new V.a4(0,0,0))
f=h.b
e=g.gn(g)
c=g.gp(g)
g=g.gc0(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aT(new V.a4(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.d1(0)
c=h.d
m=new Float32Array(H.bw(H.x(new V.c3(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a2(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga6(i)
g=h.e
e=c.gbg()
f=c.gaU()
c=c.gb0()
g.a.uniform3f(g.d,e,f,c)
c=i.gaR()
g=c.gaL(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gaL(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gaK(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbB()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbC()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbD()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.cY
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bP
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaR()
H.x(p,"$isc",z,"$asc")
if(!C.a.b2(p,s)){s.saK(0,p.length)
C.a.h(p,s)}s=i.gaP(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gc0(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbJ(i)
f=h.c
g=s.gaw(s)
r=s.gax(s)
s=s.gay()
f.a.uniform3f(f.d,g,r,s)
s=i.gbh()
r=h.d
g=s.gaw(s)
f=s.gax(s)
s=s.gay()
r.a.uniform3f(r.d,g,f,s)
s=i.gaQ(i)
f=h.e
g=s.gaw(s)
r=s.gax(s)
s=s.gay()
f.a.uniform3f(f.d,g,r,s)
s=l.aT(i.gaP(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaR()
r=s.gaL(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gaL(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaK(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga6(i)
r=h.y
g=s.gbg()
f=s.gaU()
s=s.gb0()
r.a.uniform3f(r.d,g,f,s)
s=i.ghH()
f=h.z
f.a.uniform1f(f.d,s)
s=i.ghI()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbB()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbC()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbD()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.f:break
case C.c:this.M(p,this.Q.d)
z=this.a
u=this.Q.d
z.a5(z.cJ,z.b8,u)
break
case C.d:this.M(p,this.Q.e)
z=this.a
u=this.Q.e
z.a_(z.cK,z.b8,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gR(u).d1(0)
a.Q=u}z=z.fy
z.toString
z.a8(u.a2(0,!0))}if(w.dy){this.M(p,this.ch)
z=this.a
u=this.ch
z.a_(z.cL,z.cM,u)
switch(w.r){case C.b:break
case C.f:z=this.a
u=this.cx.f
z=z.b9
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.M(p,this.cx.d)
z=this.a
u=this.cx.d
z.a5(z.cN,z.ba,u)
u=this.a
z=this.cx.f
u=u.b9
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.M(p,this.cx.e)
z=this.a
u=this.cx.e
z.a_(z.cO,z.ba,u)
u=this.a
z=this.cx.f
u=u.b9
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.f:z=this.a
u=this.cy.f
z=z.bc
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bb
u.a.uniform1f(u.d,s)
break
case C.c:this.M(p,this.cy.d)
z=this.a
u=this.cy.d
z.a5(z.cP,z.bd,u)
u=this.a
z=this.cy.f
u=u.bc
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bb
z.a.uniform1f(z.d,s)
break
case C.d:this.M(p,this.cy.e)
z=this.a
u=this.cy.e
z.a_(z.cQ,z.bd,u)
u=this.a
z=this.cy.f
u=u.bc
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bb
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.f:z=this.a
t=this.db.f
z=z.be
z.a.uniform1f(z.d,t)
break
case C.c:this.M(p,this.db.d)
z=this.a
t=this.db.d
z.a5(z.cR,z.bf,t)
t=this.a
z=this.db.f
t=t.be
t.a.uniform1f(t.d,z)
break
case C.d:this.M(p,this.db.e)
z=this.a
t=this.db.e
z.a_(z.cS,z.bf,t)
t=this.a
z=this.db.f
t=t.be
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].b_(a)
z=b.e
z.b_(a)
z.aE(a)
z.df(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].df(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.fl()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cg().aj}},fK:{"^":"cv;0f,a,b,0c,0d,0e"},cv:{"^":"a;",
aX:["dr",function(){}]},fL:{"^":"cv;a,b,0c,0d,0e"},aN:{"^":"cv;0f,a,b,0c,0d,0e",
cq:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.K(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.a4(y)}},
aX:["bi",function(){this.dr()
this.cq(new V.V(1,1,1))}],
sa6:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.aX()
z=this.a
z.a=null
z.a4(null)}this.cq(b)}},fN:{"^":"aN;0ch,0f,a,b,0c,0d,0e",
eD:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.K(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.a4(z)}},
aX:function(){this.bi()
this.eD(1)}},fO:{"^":"aN;0ch,0f,a,b,0c,0d,0e",
by:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.K(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.a4(z)}},
aX:function(){this.bi()
this.by(100)}},cC:{"^":"a;"}}],["","",,T,{"^":"",dL:{"^":"cg;"},hw:{"^":"a;a,0b,0c,0d,0e"}}],["","",,X,{"^":"",d5:{"^":"a;",$isat:1},fh:{"^":"dJ;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z}},h_:{"^":"a;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
aG:[function(a){var z
H.j(a,"$isp")
z=this.e
if(!(z==null))z.B(a)},function(){return this.aG(null)},"h1","$1","$0","gc8",0,2,0],
sd4:function(a){var z,y,x
if(!J.N(this.a,a)){z=this.a
if(z!=null){z=z.gv()
z.toString
y=H.b(this.gc8(),{func:1,ret:-1,args:[D.p]})
C.a.P(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gv()
z.toString
y=H.b(this.gc8(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.K("mover",x,this.a,this,[U.a3])
z.b=!0
this.aG(z)}},
$isat:1,
$isd5:1},dJ:{"^":"a;"}}],["","",,B,{"^":"",
k3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.eC(x,(x&&C.m).cb(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.a7
W.Y(z,"scroll",H.b(new B.k4(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
k5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(b,"$isc",[P.n],"$asc")
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
u=W.d6(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.j(v.insertCell(-1),"$isbn")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.j(q.insertCell(-1),"$isbn").style
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
t=H.j(q.insertCell(-1),"$isbn")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.j(q.insertCell(-1),"$isbn")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.j(q.insertCell(-1),"$isbn").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.k3(a,y,!1,"../resources/SnowTop.png")},
k6:function(a){P.hD(C.u,new B.k7(a))},
k4:{"^":"u:36;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.h(-0.05*C.e.a1(this.b.scrollTop))+"px"
z.top=y}},
k7:{"^":"u:37;a",
$1:function(a){H.j(a,"$isaP")
P.cW(C.e.de(this.a.gfo(),2)+" fps")}}}],["","",,Q,{"^":"",
eE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
B.k5("Test 009",H.e([],[P.n]),"Another test of the Material Lighting shader with solid color and a directional lighting. The light and object don't move but the camera can be moved around the object.")
z=document.getElementById("threeDart")
if(z==null)H.q(P.r("Failed to find an element with the identifier, threeDart."))
y=E.hB(z,!0,!0,!0,!1)
x=new E.aF()
x.a=""
x.b=!0
w=E.aF
v=O.ck(w)
x.y=v
v.aV(x.gfB(),x.gfD())
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
x.sc3(0,null)
x.sc3(0,F.kb(30,1,15,0.5))
u=new O.fH()
v=O.ck(V.am)
u.e=v
v.aV(u.ge3(),u.ge4())
v=new O.aN(u,"emission")
v.c=C.b
v.f=new V.V(0,0,0)
u.f=v
v=new O.aN(u,"ambient")
v.c=C.b
v.f=new V.V(0,0,0)
u.r=v
v=new O.aN(u,"diffuse")
v.c=C.b
v.f=new V.V(0,0,0)
u.x=v
v=new O.aN(u,"invDiffuse")
v.c=C.b
v.f=new V.V(0,0,0)
u.y=v
v=new O.fO(u,"specular")
v.c=C.b
v.f=new V.V(0,0,0)
v.ch=100
u.z=v
v=new O.fL(u,"bump")
v.c=C.b
u.Q=v
u.ch=null
v=new O.aN(u,"reflect")
v.c=C.b
v.f=new V.V(0,0,0)
u.cx=v
v=new O.fN(u,"refract")
v.c=C.b
v.f=new V.V(0,0,0)
v.ch=1
u.cy=v
v=new O.fK(u,"alpha")
v.c=C.b
v.f=1
u.db=v
v=new D.fr()
v.bj(D.W)
v.e=H.e([],[D.bW])
v.f=H.e([],[D.h1])
v.r=H.e([],[D.hp])
v.x=H.e([],[D.hx])
v.y=H.e([],[D.hy])
v.z=H.e([],[D.hz])
v.Q=null
v.ch=null
v.c2(v.ge2(),v.gen(),v.gep())
u.dx=v
t=v.Q
if(t==null){t=D.F()
v.Q=t
v=t}else v=t
t={func:1,ret:-1,args:[D.p]}
s=H.b(u.gez(),t)
C.a.h(v.a,s)
s=u.dx
v=s.ch
if(v==null){v=D.F()
s.ch=v}s=H.b(u.ge6(),t)
C.a.h(v.a,s)
u.dy=null
s=u.dx
v=U.da(V.dv(new V.a4(0,0,0),new V.G(0,1,0),new V.G(-1,-1,-1)))
r=new V.V(1,1,1)
q=new D.bW()
q.c=new V.V(1,1,1)
q.a=new V.G(0,0,1)
p=q.b
q.b=v
v=v.gv()
v.toString
o=H.b(q.gdC(),t)
C.a.h(v.a,o)
v=new D.K("mover",p,q.b,q,[U.a3])
v.b=!0
q.ao(v)
if(!q.c.q(0,r)){p=q.c
q.c=r
v=new D.K("color",p,r,q,[V.V])
v.b=!0
q.ao(v)}s.h(0,q)
u.f.sa6(0,new V.V(0,0,0))
v=u.r
v.sa6(0,new V.V(0,0,1))
v=u.x
v.sa6(0,new V.V(0,1,0))
v=u.z
v.sa6(0,new V.V(1,0,0))
v=u.z
if(v.c===C.b){v.c=C.f
v.bi()
v.by(100)
s=v.a
s.a=null
s.a4(null)}v.by(10)
n=new U.dk()
n.bj(U.a3)
n.aV(n.ge1(),n.geo())
n.e=null
n.f=V.bH()
n.r=0
v=y.r
s=new U.hW()
q=U.cl()
q.sc_(0,!0)
q.sbR(6.283185307179586)
q.sbT(0)
q.sW(0,0)
q.sbS(100)
q.sL(0)
q.sbI(0.5)
s.b=q
q=q.gv()
q.toString
o=H.b(s.gap(),t)
C.a.h(q.a,o)
q=U.cl()
q.sc_(0,!0)
q.sbR(6.283185307179586)
q.sbT(0)
q.sW(0,0)
q.sbS(100)
q.sL(0)
q.sbI(0.5)
s.c=q
C.a.h(q.gv().a,o)
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
m=new X.ao(!1,!1,!1)
p=s.d
s.d=m
q=[X.ao]
o=new D.K("modifiers",p,m,s,q)
o.b=!0
s.I(o)
o=s.f
if(o!==!1){s.f=!1
o=new D.K("invertX",o,!1,s,[P.a9])
o.b=!0
s.I(o)}o=s.r
if(o!==!0){s.r=!0
o=new D.K("invertY",o,!0,s,[P.a9])
o.b=!0
s.I(o)}s.aI(v)
n.h(0,s)
v=y.r
s=new U.hV()
o=U.cl()
o.sc_(0,!0)
o.sbR(6.283185307179586)
o.sbT(0)
o.sW(0,0)
o.sbS(100)
o.sL(0)
o.sbI(0.2)
s.b=o
o=o.gv()
o.toString
l=H.b(s.gap(),t)
C.a.h(o.a,l)
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
m=new X.ao(!0,!1,!1)
p=s.c
s.c=m
o=new D.K("modifiers",p,m,s,q)
o.b=!0
s.I(o)
s.aI(v)
n.h(0,s)
v=y.r
s=new U.hX()
s.c=0.01
s.d=0
s.e=0
m=new X.ao(!1,!1,!1)
s.b=m
q=new D.K("modifiers",null,m,s,q)
q.b=!0
s.I(q)
s.aI(v)
n.h(0,s)
n.h(0,U.da(V.an(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
v=new M.fa()
w=O.ck(w)
v.d=w
w.aV(v.ge7(),v.ge8())
v.e=null
v.f=null
v.r=null
v.x=null
k=new X.h_()
k.b=1.0471975511965976
k.c=0.1
k.d=2000
k.sd4(null)
w=k.b
if(!$.m.$2(w,1.0471975511965976)){p=k.b
k.b=1.0471975511965976
w=new D.K("fov",p,1.0471975511965976,k,[P.v])
w.b=!0
k.aG(w)}w=k.c
if(!$.m.$2(w,0.1)){p=k.c
k.c=0.1
w=new D.K("near",p,0.1,k,[P.v])
w.b=!0
k.aG(w)}w=k.d
if(!$.m.$2(w,2000)){p=k.d
k.d=2000
w=new D.K("far",p,2000,k,[P.v])
w.b=!0
k.aG(w)}w=v.a
if(w!==k){if(w!=null){w=w.gv()
w.toString
s=H.b(v.ga9(),t)
C.a.P(w.a,s)}p=v.a
v.a=k
w=k.gv()
w.toString
s=H.b(v.ga9(),t)
C.a.h(w.a,s)
w=new D.K("camera",p,v.a,v,[X.d5])
w.b=!0
v.aq(w)}j=new X.fh()
w=new V.bB(0,0,0,1)
j.a=w
j.b=!0
j.c=2000
j.d=!0
j.e=0
j.f=!1
w=V.dC(0,0,1,1)
j.r=w
w=v.b
if(w!==j){if(w!=null){w=w.gv()
w.toString
s=H.b(v.ga9(),t)
C.a.P(w.a,s)}p=v.b
v.b=j
w=j.gv()
w.toString
s=H.b(v.ga9(),t)
C.a.h(w.a,s)
w=new D.K("target",p,v.b,v,[X.dJ])
w.b=!0
v.aq(w)}v.sdc(null)
v.sdc(u)
v.d.h(0,x)
v.a.sd4(n)
w=y.d
if(w!==v){if(w!=null){w=w.gv()
w.toString
s=H.b(y.gc7(),t)
C.a.P(w.a,s)}y.d=v
w=v.gv()
w.toString
t=H.b(y.gc7(),t)
C.a.h(w.a,t)
y.dA()}B.k6(y)}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dm.prototype
return J.fo.prototype}if(typeof a=="string")return J.c2.prototype
if(a==null)return J.dn.prototype
if(typeof a=="boolean")return J.fn.prototype
if(a.constructor==Array)return J.bD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.cc(a)}
J.bN=function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(a.constructor==Array)return J.bD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.cc(a)}
J.cS=function(a){if(a==null)return a
if(a.constructor==Array)return J.bD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.cc(a)}
J.jL=function(a){if(typeof a=="number")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c6.prototype
return a}
J.jM=function(a){if(typeof a=="number")return J.bE.prototype
if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c6.prototype
return a}
J.bO=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.cc(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).q(a,b)}
J.eJ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jL(a).a7(a,b)}
J.cX=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jM(a).i(a,b)}
J.eK=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jV(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bN(a).k(a,b)}
J.eL=function(a,b,c,d){return J.bO(a).cv(a,b,c,d)}
J.cf=function(a,b,c){return J.bN(a).fg(a,b,c)}
J.cY=function(a,b){return J.cS(a).D(a,b)}
J.eM=function(a,b){return J.cS(a).J(a,b)}
J.aE=function(a){return J.I(a).gO(a)}
J.bR=function(a){return J.cS(a).gS(a)}
J.b1=function(a){return J.bN(a).gl(a)}
J.af=function(a){return J.I(a).j(a)}
var $=I.p
C.k=W.cj.prototype
C.m=W.eZ.prototype
C.v=J.l.prototype
C.a=J.bD.prototype
C.h=J.dm.prototype
C.w=J.dn.prototype
C.e=J.bE.prototype
C.j=J.c2.prototype
C.D=J.bF.prototype
C.E=W.fV.prototype
C.p=J.h0.prototype
C.l=J.c6.prototype
C.q=W.bt.prototype
C.r=W.ib.prototype
C.t=new P.fY()
C.i=new P.iZ()
C.b=new A.bU(0,"ColorSourceType.None")
C.f=new A.bU(1,"ColorSourceType.Solid")
C.c=new A.bU(2,"ColorSourceType.Texture2D")
C.d=new A.bU(3,"ColorSourceType.TextureCube")
C.u=new P.b5(5e6)
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
$.al=0
$.b2=null
$.d0=null
$.cL=!1
$.eB=null
$.ev=null
$.eH=null
$.cb=null
$.cd=null
$.cT=null
$.aU=null
$.bx=null
$.by=null
$.cM=!1
$.M=C.i
$.dg=null
$.df=null
$.de=null
$.dd=null
$.m=V.fP()
$.dy=null
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
I.$lazy(y,x,w)}})(["dc","$get$dc",function(){return H.eA("_$dart_dartClosure")},"cq","$get$cq",function(){return H.eA("_$dart_js")},"dP","$get$dP",function(){return H.aq(H.c5({
toString:function(){return"$receiver$"}}))},"dQ","$get$dQ",function(){return H.aq(H.c5({$method$:null,
toString:function(){return"$receiver$"}}))},"dR","$get$dR",function(){return H.aq(H.c5(null))},"dS","$get$dS",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dW","$get$dW",function(){return H.aq(H.c5(void 0))},"dX","$get$dX",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dU","$get$dU",function(){return H.aq(H.dV(null))},"dT","$get$dT",function(){return H.aq(function(){try{null.$method$}catch(z){return z.message}}())},"dZ","$get$dZ",function(){return H.aq(H.dV(void 0))},"dY","$get$dY",function(){return H.aq(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cI","$get$cI",function(){return P.ic()},"bz","$get$bz",function(){return[]},"db","$get$db",function(){return{}},"e8","$get$e8",function(){return Z.ad(0)},"e6","$get$e6",function(){return Z.ad(511)},"az","$get$az",function(){return Z.ad(1)},"ay","$get$ay",function(){return Z.ad(2)},"ax","$get$ax",function(){return Z.ad(4)},"aA","$get$aA",function(){return Z.ad(8)},"aB","$get$aB",function(){return Z.ad(16)},"br","$get$br",function(){return Z.ad(32)},"bs","$get$bs",function(){return Z.ad(64)},"e7","$get$e7",function(){return Z.ad(96)},"aS","$get$aS",function(){return Z.ad(128)},"aw","$get$aw",function(){return Z.ad(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.p]},{func:1,ret:-1,args:[D.p]},{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.E,args:[F.ah]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.L,[P.f,E.aF]]},{func:1,ret:P.E,args:[D.p]},{func:1,ret:-1,args:[W.aQ]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.n,args:[P.L]},{func:1,ret:P.E,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:-1,args:[P.L,[P.f,D.W]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.L,[P.f,U.a3]]},{func:1,ret:-1,args:[P.L,[P.f,V.am]]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:P.a9,args:[W.H]},{func:1,ret:W.a_,args:[W.H]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.E,args:[P.R]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.p]}]},{func:1,ret:-1,args:[P.a],opt:[P.ai]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:P.a9,args:[P.v,P.v]},{func:1,ret:P.a9,args:[[P.f,D.W]]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:V.a4,args:[P.v]},{func:1,ret:P.E,args:[F.av,P.v,P.v]},{func:1,ret:[P.aC,,],args:[,]},{func:1,ret:P.E,args:[W.a7]},{func:1,ret:P.E,args:[P.aP]},{func:1,ret:-1,args:[P.n,P.n]}]
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
if(x==y)H.ka(d||a)
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
Isolate.cQ=a.cQ
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.eE,[])
else Q.eE([])})})()
//# sourceMappingURL=test.dart.js.map
