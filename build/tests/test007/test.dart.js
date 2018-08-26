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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cW(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cX=function(){}
var dart=[["","",,H,{"^":"",l7:{"^":"a;a"}}],["","",,J,{"^":"",
H:function(a){return void 0},
d1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cc:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d_==null){H.jW()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.j(P.ee("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cs()]
if(v!=null)return v
v=H.k0(a)
if(v!=null)return v
if(typeof a=="function")return C.E
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cs(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
q:function(a,b){return a===b},
gN:function(a){return H.bf(a)},
i:["dt",function(a){return"Instance of '"+H.aO(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fx:{"^":"m;",
i:function(a){return String(a)},
gN:function(a){return a?519018:218159},
$isa9:1},
dx:{"^":"m;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gN:function(a){return 0},
$isF:1},
ct:{"^":"m;",
gN:function(a){return 0},
i:["du",function(a){return String(a)}]},
h7:{"^":"ct;"},
cM:{"^":"ct;"},
bE:{"^":"ct;",
i:function(a){var z=a[$.$get$dj()]
if(z==null)return this.du(a)
return"JavaScript function for "+H.h(J.a3(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isco:1},
bD:{"^":"m;$ti",
h:function(a,b){H.B(b,H.z(a,0))
if(!!a.fixed$length)H.q(P.ad("add"))
a.push(b)},
T:function(a,b){var z
if(!!a.fixed$length)H.q(P.ad("remove"))
for(z=0;z<a.length;++z)if(J.S(a[z],b)){a.splice(z,1)
return!0}return!1},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.j(P.b4(a))}},
U:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a_(z,y,H.h(a[y]))
return z.join(b)},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
gbU:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.j(H.fv())},
aJ:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
i:function(a){return P.cp(a,"[","]")},
gS:function(a){return new J.aj(a,a.length,0,[H.z(a,0)])},
gN:function(a){return H.bf(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.q(P.ad("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.bS(b,"newLength",null))
if(b<0)throw H.j(P.bg(b,0,null,"newLength",null))
a.length=b},
a_:function(a,b,c){H.Y(b)
H.B(c,H.z(a,0))
if(!!a.immutable$list)H.q(P.ad("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.bL(a,b))
if(b>=a.length||b<0)throw H.j(H.bL(a,b))
a[b]=c},
$isf:1,
$isd:1,
t:{
fw:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.bS(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.bg(a,0,4294967295,"length",null))
return J.du(new Array(a),b)},
du:function(a,b){return J.ba(H.e(a,[b]))},
ba:function(a){H.bP(a)
a.fixed$length=Array
return a}}},
l6:{"^":"bD;$ti"},
aj:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.j(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c3:{"^":"m;",
h1:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.j(P.ad(""+a+".toInt()"))},
bT:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.j(P.ad(""+a+".floor()"))},
a7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.ad(""+a+".round()"))},
dh:function(a,b){var z,y
if(b>20)throw H.j(P.bg(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gN:function(a){return a&0x1FFFFFFF},
dn:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dv:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cA(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cA(a,b)},
cA:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.j(P.ad("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
cw:function(a,b){var z
if(a>0)z=this.eK(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eK:function(a,b){return b>31?0:a>>>b},
a8:function(a,b){if(typeof b!=="number")throw H.j(H.ca(b))
return a<b},
$isv:1,
$isQ:1},
dw:{"^":"c3;",$isO:1},
dv:{"^":"c3;"},
cr:{"^":"m;",
dP:function(a,b){if(b>=a.length)throw H.j(H.bL(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.R(b)
if(typeof b!=="string")throw H.j(P.bS(b,null,null))
return a+b},
ca:function(a,b,c){H.Y(c)
if(c==null)c=a.length
if(b>c)throw H.j(P.cD(b,null,null))
if(c>a.length)throw H.j(P.cD(c,null,null))
return a.substring(b,c)},
c9:function(a,b){return this.ca(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.t)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fH:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a2:function(a,b){return this.fH(a,b," ")},
fg:function(a,b,c){if(c>a.length)throw H.j(P.bg(c,0,a.length,null,null))
return H.kc(a,b,c)},
i:function(a){return a},
gN:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$ish5:1,
$iso:1}}],["","",,H,{"^":"",
fv:function(){return new P.hw("No element")},
fj:{"^":"f;"},
fH:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.bN(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.j(P.b4(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.B(z,w);++this.c
return!0}},
fN:{"^":"f;a,b,$ti",
gS:function(a){return new H.fO(J.bR(this.a),this.b,this.$ti)},
gk:function(a){return J.b2(this.a)},
B:function(a,b){return this.b.$1(J.d4(this.a,b))},
$asf:function(a,b){return[b]}},
fO:{"^":"cq;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$ascq:function(a,b){return[b]}},
ic:{"^":"f;a,b,$ti",
gS:function(a){return new H.id(J.bR(this.a),this.b,this.$ti)}},
id:{"^":"cq;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
bZ:{"^":"a;$ti"}}],["","",,H,{"^":"",
jR:function(a){return init.types[H.Y(a)]},
jZ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.H(a).$isA},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a3(a)
if(typeof z!=="string")throw H.j(H.ca(a))
return z},
bf:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aO:function(a){var z,y,x,w,v,u,t,s,r
z=J.H(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.v||!!J.H(a).$iscM){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.dP(w,0)===36)w=C.h.c9(w,1)
r=H.d0(H.bP(H.aI(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
a6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hf:function(a){return a.b?H.a6(a).getUTCFullYear()+0:H.a6(a).getFullYear()+0},
hd:function(a){return a.b?H.a6(a).getUTCMonth()+1:H.a6(a).getMonth()+1},
h9:function(a){return a.b?H.a6(a).getUTCDate()+0:H.a6(a).getDate()+0},
ha:function(a){return a.b?H.a6(a).getUTCHours()+0:H.a6(a).getHours()+0},
hc:function(a){return a.b?H.a6(a).getUTCMinutes()+0:H.a6(a).getMinutes()+0},
he:function(a){return a.b?H.a6(a).getUTCSeconds()+0:H.a6(a).getSeconds()+0},
hb:function(a){return a.b?H.a6(a).getUTCMilliseconds()+0:H.a6(a).getMilliseconds()+0},
p:function(a){throw H.j(H.ca(a))},
k:function(a,b){if(a==null)J.b2(a)
throw H.j(H.bL(a,b))},
bL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.Y(J.b2(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.L(b,a,"index",null,z)
return P.cD(b,"index",null)},
ca:function(a){return new P.aE(!0,a,null,null)},
jJ:function(a){if(typeof a!=="number")throw H.j(H.ca(a))
return a},
j:function(a){var z
if(a==null)a=new P.dG()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eS})
z.name=""}else z.toString=H.eS
return z},
eS:function(){return J.a3(this.dartException)},
q:function(a){throw H.j(a)},
x:function(a){throw H.j(P.b4(a))},
aK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kf(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.cw(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cv(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dF(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dY()
u=$.$get$dZ()
t=$.$get$e_()
s=$.$get$e0()
r=$.$get$e4()
q=$.$get$e5()
p=$.$get$e2()
$.$get$e1()
o=$.$get$e7()
n=$.$get$e6()
m=v.a1(y)
if(m!=null)return z.$1(H.cv(H.R(y),m))
else{m=u.a1(y)
if(m!=null){m.method="call"
return z.$1(H.cv(H.R(y),m))}else{m=t.a1(y)
if(m==null){m=s.a1(y)
if(m==null){m=r.a1(y)
if(m==null){m=q.a1(y)
if(m==null){m=p.a1(y)
if(m==null){m=s.a1(y)
if(m==null){m=o.a1(y)
if(m==null){m=n.a1(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dF(H.R(y),m))}}return z.$1(new H.hY(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dP()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dP()
return a},
b0:function(a){var z
if(a==null)return new H.ev(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ev(a)},
jP:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a_(0,a[y],a[x])}return b},
jY:function(a,b,c,d,e,f){H.i(a,"$isco")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.r("Unsupported number of arguments for wrapped closure"))},
aY:function(a,b){var z
H.Y(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jY)
a.$identity=z
return z},
f6:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.H(d).$isd){z.$reflectionInfo=d
x=H.hh(z).r}else x=d
w=e?Object.create(new H.hx().constructor.prototype):Object.create(new H.ch(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ak
if(typeof u!=="number")return u.C()
$.ak=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.df(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.jR,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.d8:H.ci
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.j("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.df(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
f3:function(a,b,c,d){var z=H.ci
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
df:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.f5(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.f3(y,!w,z,b)
if(y===0){w=$.ak
if(typeof w!=="number")return w.C()
$.ak=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b3
if(v==null){v=H.bT("self")
$.b3=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ak
if(typeof w!=="number")return w.C()
$.ak=w+1
t+=w
w="return function("+t+"){return this."
v=$.b3
if(v==null){v=H.bT("self")
$.b3=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
f4:function(a,b,c,d){var z,y
z=H.ci
y=H.d8
switch(b?-1:a){case 0:throw H.j(H.hp("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
f5:function(a,b){var z,y,x,w,v,u,t,s
z=$.b3
if(z==null){z=H.bT("self")
$.b3=z}y=$.d7
if(y==null){y=H.bT("receiver")
$.d7=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.f4(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.ak
if(typeof y!=="number")return y.C()
$.ak=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.ak
if(typeof y!=="number")return y.C()
$.ak=y+1
return new Function(z+y+"}")()},
cW:function(a,b,c,d,e,f,g){var z,y
z=J.ba(H.bP(b))
H.Y(c)
y=!!J.H(d).$isd?J.ba(d):d
return H.f6(a,z,c,y,!!e,f,g)},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.aq(a,"String"))},
k3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.aq(a,"num"))},
eI:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.aq(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.aq(a,"int"))},
eQ:function(a,b){throw H.j(H.aq(a,H.R(b).substring(3)))},
k5:function(a,b){var z=J.bN(b)
throw H.j(H.f2(a,z.ca(b,3,z.gk(b))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.H(a)[b])return a
H.eQ(a,b)},
c:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.H(a)[b]
else z=!0
if(z)return a
H.k5(a,b)},
bP:function(a){if(a==null)return a
if(!!J.H(a).$isd)return a
throw H.j(H.aq(a,"List"))},
k_:function(a,b){if(a==null)return a
if(!!J.H(a).$isd)return a
if(J.H(a)[b])return a
H.eQ(a,b)},
eJ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Y(z)]
else return a.$S()}return},
bM:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eJ(J.H(a))
if(z==null)return!1
y=H.eM(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.cS)return a
$.cS=!0
try{if(H.bM(a,b))return a
z=H.bQ(b)
y=H.aq(a,z)
throw H.j(y)}finally{$.cS=!1}},
cY:function(a,b){if(a!=null&&!H.cV(a,b))H.q(H.aq(a,H.bQ(b)))
return a},
eD:function(a){var z
if(a instanceof H.u){z=H.eJ(J.H(a))
if(z!=null)return H.bQ(z)
return"Closure"}return H.aO(a)},
ke:function(a){throw H.j(new P.fb(H.R(a)))},
eK:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
aI:function(a){if(a==null)return
return a.$ti},
m5:function(a,b,c){return H.b1(a["$as"+H.h(c)],H.aI(b))},
bz:function(a,b,c,d){var z
H.R(c)
H.Y(d)
z=H.b1(a["$as"+H.h(c)],H.aI(b))
return z==null?null:z[d]},
b_:function(a,b,c){var z
H.R(b)
H.Y(c)
z=H.b1(a["$as"+H.h(b)],H.aI(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Y(b)
z=H.aI(a)
return z==null?null:z[b]},
bQ:function(a){var z=H.aJ(a,null)
return z},
aJ:function(a,b){var z,y
H.y(b,"$isd",[P.o],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d0(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.h(b[y])}if('func' in a)return H.jz(a,b)
if('futureOr' in a)return"FutureOr<"+H.aJ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.y(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.h.C(t,b[r])
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
for(z=H.jO(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.R(z[l])
n=n+m+H.aJ(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d0:function(a,b,c){var z,y,x,w,v,u
H.y(c,"$isd",[P.o],"$asd")
if(a==null)return""
z=new P.bJ("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aJ(u,c)}v="<"+z.i(0)+">"
return v},
b1:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aX:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aI(a)
y=J.H(a)
if(y[b]==null)return!1
return H.eG(H.b1(y[d],z),null,c,null)},
y:function(a,b,c,d){var z,y
H.R(b)
H.bP(c)
H.R(d)
if(a==null)return a
z=H.aX(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d0(c,0,null)
throw H.j(H.aq(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eG:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.af(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.af(a[y],b,c[y],d))return!1
return!0},
m3:function(a,b,c){return a.apply(b,H.b1(J.H(b)["$as"+H.h(c)],H.aI(b)))},
eN:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.eN(z)}return!1},
cV:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.eN(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cV(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bM(a,b)}y=J.H(a).constructor
x=H.aI(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.af(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.cV(a,b))throw H.j(H.aq(a,H.bQ(b)))
return a},
af:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.af(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.eM(a,b,c,d)
if('func' in a)return c.builtin$cls==="co"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.af("type" in a?a.type:null,b,x,d)
else if(H.af(a,b,x,d))return!0
else{if(!('$is'+"b7" in y.prototype))return!1
w=y.prototype["$as"+"b7"]
v=H.b1(w,z?a.slice(1):null)
return H.af(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bQ(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eG(H.b1(r,z),b,u,d)},
eM:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.af(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.af(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.af(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.af(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.k2(m,b,l,d)},
k2:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.af(c[w],d,a[w],b))return!1}return!0},
m4:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
k0:function(a){var z,y,x,w,v,u
z=H.R($.eL.$1(a))
y=$.cb[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cd[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.R($.eF.$2(a,z))
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
return u.i}if(v==="+")return H.eP(a,x)
if(v==="*")throw H.j(P.ee(z))
if(init.leafTags[z]===true){u=H.ce(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eP(a,x)},
eP:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d1(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ce:function(a){return J.d1(a,!1,null,!!a.$isA)},
k1:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ce(z)
else return J.d1(z,c,null,null)},
jW:function(){if(!0===$.d_)return
$.d_=!0
H.jX()},
jX:function(){var z,y,x,w,v,u,t,s
$.cb=Object.create(null)
$.cd=Object.create(null)
H.jS()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eR.$1(v)
if(u!=null){t=H.k1(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jS:function(){var z,y,x,w,v,u,t
z=C.B()
z=H.aW(C.y,H.aW(C.D,H.aW(C.n,H.aW(C.n,H.aW(C.C,H.aW(C.z,H.aW(C.A(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eL=new H.jT(v)
$.eF=new H.jU(u)
$.eR=new H.jV(t)},
aW:function(a,b){return a(b)||b},
kc:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hg:{"^":"a;a,b,c,d,e,f,r,0x",t:{
hh:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ba(z)
y=z[0]
x=z[1]
return new H.hg(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hM:{"^":"a;a,b,c,d,e,f",
a1:function(a){var z,y,x
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
ap:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e3:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
h3:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
dF:function(a,b){return new H.h3(a,b==null?null:b.method)}}},
fy:{"^":"X;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
t:{
cv:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fy(a,y,z?null:b.receiver)}}},
hY:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kf:{"^":"u:14;a",
$1:function(a){if(!!J.H(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ev:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isai:1},
u:{"^":"a;",
i:function(a){return"Closure '"+H.aO(this).trim()+"'"},
gdj:function(){return this},
$isco:1,
gdj:function(){return this}},
dT:{"^":"u;"},
hx:{"^":"dT;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
ch:{"^":"dT;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ch))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gN:function(a){var z,y
z=this.c
if(z==null)y=H.bf(this.a)
else y=typeof z!=="object"?J.aD(z):H.bf(z)
return(y^H.bf(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.aO(z)+"'")},
t:{
ci:function(a){return a.a},
d8:function(a){return a.c},
bT:function(a){var z,y,x,w,v
z=new H.ch("self","target","receiver","name")
y=J.ba(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hN:{"^":"X;a",
i:function(a){return this.a},
t:{
aq:function(a,b){return new H.hN("TypeError: "+H.h(P.bY(a))+": type '"+H.eD(a)+"' is not a subtype of type '"+b+"'")}}},
f1:{"^":"X;a",
i:function(a){return this.a},
t:{
f2:function(a,b){return new H.f1("CastError: "+H.h(P.bY(a))+": type '"+H.eD(a)+"' is not a subtype of type '"+b+"'")}}},
ho:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.h(this.a)},
t:{
hp:function(a){return new H.ho(a)}}},
cu:{"^":"fL;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gal:function(a){return new H.fC(this,[H.z(this,0)])},
fh:function(a,b){var z=this.b
if(z==null)return!1
return this.dS(z,b)},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aW(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aW(w,b)
x=y==null?null:y.b
return x}else return this.ft(b)},
ft:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cq(z,J.aD(a)&0x3ffffff)
x=this.d3(y,a)
if(x<0)return
return y[x].b},
a_:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.z(this,0))
H.B(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bu()
this.b=z}this.ce(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bu()
this.c=y}this.ce(y,b,c)}else{x=this.d
if(x==null){x=this.bu()
this.d=x}w=J.aD(b)&0x3ffffff
v=this.cq(x,w)
if(v==null)this.bz(x,w,[this.bv(b,c)])
else{u=this.d3(v,b)
if(u>=0)v[u].b=c
else v.push(this.bv(b,c))}}},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.j(P.b4(this))
z=z.c}},
ce:function(a,b,c){var z
H.B(b,H.z(this,0))
H.B(c,H.z(this,1))
z=this.aW(a,b)
if(z==null)this.bz(a,b,this.bv(b,c))
else z.b=c},
e0:function(){this.r=this.r+1&67108863},
bv:function(a,b){var z,y
z=new H.fB(H.B(a,H.z(this,0)),H.B(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.e0()
return z},
d3:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
i:function(a){return P.dC(this)},
aW:function(a,b){return a[b]},
cq:function(a,b){return a[b]},
bz:function(a,b,c){a[b]=c},
dV:function(a,b){delete a[b]},
dS:function(a,b){return this.aW(a,b)!=null},
bu:function(){var z=Object.create(null)
this.bz(z,"<non-identifier-key>",z)
this.dV(z,"<non-identifier-key>")
return z},
$isdA:1},
fB:{"^":"a;a,b,0c,0d"},
fC:{"^":"fj;a,$ti",
gk:function(a){return this.a.a},
gS:function(a){var z,y
z=this.a
y=new H.fD(z,z.r,this.$ti)
y.c=z.e
return y}},
fD:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jT:{"^":"u:14;a",
$1:function(a){return this.a(a)}},
jU:{"^":"u:31;a",
$2:function(a,b){return this.a(a,b)}},
jV:{"^":"u:34;a",
$1:function(a){return this.a(H.R(a))}}}],["","",,H,{"^":"",
jO:function(a){return J.du(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
k4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bv:function(a){return a},
aH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.bL(b,a))},
h1:{"^":"m;",$islN:1,"%":"DataView;ArrayBufferView;cB|ep|eq|h0|er|es|aG"},
cB:{"^":"h1;",
gk:function(a){return a.length},
$isA:1,
$asA:I.cX},
h0:{"^":"eq;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
$asbZ:function(){return[P.v]},
$ast:function(){return[P.v]},
$isf:1,
$asf:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aG:{"^":"es;",
$asbZ:function(){return[P.O]},
$ast:function(){return[P.O]},
$isf:1,
$asf:function(){return[P.O]},
$isd:1,
$asd:function(){return[P.O]}},
lh:{"^":"aG;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int16Array"},
li:{"^":"aG;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lj:{"^":"aG;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lk:{"^":"aG;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ll:{"^":"aG;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lm:{"^":"aG;",
gk:function(a){return a.length},
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ln:{"^":"aG;",
gk:function(a){return a.length},
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ep:{"^":"cB+t;"},
eq:{"^":"ep+bZ;"},
er:{"^":"cB+t;"},
es:{"^":"er+bZ;"}}],["","",,P,{"^":"",
ig:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jG()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aY(new P.ii(z),1)).observe(y,{childList:true})
return new P.ih(z,y,x)}else if(self.setImmediate!=null)return P.jH()
return P.jI()},
lT:[function(a){self.scheduleImmediate(H.aY(new P.ij(H.b(a,{func:1,ret:-1})),0))},"$1","jG",4,0,11],
lU:[function(a){self.setImmediate(H.aY(new P.ik(H.b(a,{func:1,ret:-1})),0))},"$1","jH",4,0,11],
lV:[function(a){H.b(a,{func:1,ret:-1})
P.jf(0,a)},"$1","jI",4,0,11],
dW:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aP]})
z=C.f.W(a.a,1000)
return P.jg(z<0?0:z,b)},
jC:function(a,b){if(H.bM(a,{func:1,args:[P.a,P.ai]}))return b.fQ(a,null,P.a,P.ai)
if(H.bM(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.j(P.bS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jB:function(){var z,y
for(;z=$.aV,z!=null;){$.bx=null
y=z.b
$.aV=y
if(y==null)$.bw=null
z.a.$0()}},
m2:[function(){$.cT=!0
try{P.jB()}finally{$.bx=null
$.cT=!1
if($.aV!=null)$.$get$cP().$1(P.eH())}},"$0","eH",0,0,3],
eC:function(a){var z=new P.ej(H.b(a,{func:1,ret:-1}))
if($.aV==null){$.bw=z
$.aV=z
if(!$.cT)$.$get$cP().$1(P.eH())}else{$.bw.b=z
$.bw=z}},
jF:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.aV
if(z==null){P.eC(a)
$.bx=$.bw
return}y=new P.ej(a)
x=$.bx
if(x==null){y.b=z
$.bx=y
$.aV=y}else{y.b=x.b
x.b=y
$.bx=y
if(y.b==null)$.bw=y}},
k6:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.M
if(C.i===y){P.c9(null,null,C.i,a)
return}y.toString
P.c9(null,null,y,H.b(y.cD(a),z))},
hK:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aP]}
H.b(b,z)
y=$.M
if(y===C.i){y.toString
return P.dW(a,b)}x=y.cE(b,P.aP)
$.M.toString
return P.dW(a,H.b(x,z))},
c8:function(a,b,c,d,e){var z={}
z.a=d
P.jF(new P.jD(z,e))},
eA:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.M
if(y===c)return d.$0()
$.M=c
z=y
try{y=d.$0()
return y}finally{$.M=z}},
eB:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.M
if(y===c)return d.$1(e)
$.M=c
z=y
try{y=d.$1(e)
return y}finally{$.M=z}},
jE:function(a,b,c,d,e,f,g,h,i){var z,y
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
if(z)d=!(!z||!1)?c.cD(d):c.fd(d,-1)
P.eC(d)},
ii:{"^":"u:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ih:{"^":"u:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ij:{"^":"u:2;a",
$0:function(){this.a.$0()}},
ik:{"^":"u:2;a",
$0:function(){this.a.$0()}},
ey:{"^":"a;a,0b,c",
dH:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aY(new P.ji(this,b),0),a)
else throw H.j(P.ad("`setTimeout()` not found."))},
dI:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aY(new P.jh(this,a,Date.now(),b),0),a)
else throw H.j(P.ad("Periodic timer."))},
$isaP:1,
t:{
jf:function(a,b){var z=new P.ey(!0,0)
z.dH(a,b)
return z},
jg:function(a,b){var z=new P.ey(!1,0)
z.dI(a,b)
return z}}},
ji:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jh:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dv(w,x)}z.c=y
this.d.$1(z)}},
aU:{"^":"a;0a,b,c,d,e,$ti",
fA:function(a){if(this.c!==6)return!0
return this.b.b.c2(H.b(this.d,{func:1,ret:P.a9,args:[P.a]}),a.a,P.a9,P.a)},
fs:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bM(z,{func:1,args:[P.a,P.ai]}))return H.cY(w.fV(z,a.a,a.b,null,y,P.ai),x)
else return H.cY(w.c2(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aB:{"^":"a;cz:a<,b,0eC:c<,$ti",
dg:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.M
if(y!==C.i){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jC(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aB(0,$.M,[c])
w=b==null?1:3
this.cf(new P.aU(x,w,a,b,[z,c]))
return x},
h0:function(a,b){return this.dg(a,null,b)},
cf:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaU")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaB")
z=y.a
if(z<4){y.cf(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c9(null,null,z,H.b(new P.iz(this,a),{func:1,ret:-1}))}},
cs:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaU")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaB")
y=u.a
if(y<4){u.cs(a)
return}this.a=y
this.c=u.c}z.a=this.aY(a)
y=this.b
y.toString
P.c9(null,null,y,H.b(new P.iE(z,this),{func:1,ret:-1}))}},
bx:function(){var z=H.i(this.c,"$isaU")
this.c=null
return this.aY(z)},
aY:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ck:function(a){var z,y,x,w
z=H.z(this,0)
H.cY(a,{futureOr:1,type:z})
y=this.$ti
x=H.aX(a,"$isb7",y,"$asb7")
if(x){z=H.aX(a,"$isaB",y,null)
if(z)P.el(a,this)
else P.iA(a,this)}else{w=this.bx()
H.B(a,z)
this.a=4
this.c=a
P.bs(this,w)}},
bm:[function(a,b){var z
H.i(b,"$isai")
z=this.bx()
this.a=8
this.c=new P.aa(a,b)
P.bs(this,z)},function(a){return this.bm(a,null)},"h8","$2","$1","gdQ",4,2,22],
$isb7:1,
t:{
iA:function(a,b){var z,y,x
b.a=1
try{a.dg(new P.iB(b),new P.iC(b),null)}catch(x){z=H.aK(x)
y=H.b0(x)
P.k6(new P.iD(b,z,y))}},
el:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaB")
if(z>=4){y=b.bx()
b.a=a.a
b.c=a.c
P.bs(b,y)}else{y=H.i(b.c,"$isaU")
b.a=2
b.c=a
a.cs(y)}},
bs:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isaa")
y=y.b
u=v.a
t=v.b
y.toString
P.c8(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bs(z.a,b)}y=z.a
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
if(p){H.i(r,"$isaa")
y=y.b
u=r.a
t=r.b
y.toString
P.c8(null,null,y,u,t)
return}o=$.M
if(o==null?q!=null:o!==q)$.M=q
else o=null
y=b.c
if(y===8)new P.iH(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iG(x,b,r).$0()}else if((y&2)!==0)new P.iF(z,x,b).$0()
if(o!=null)$.M=o
y=x.b
if(!!J.H(y).$isb7){if(y.a>=4){n=H.i(t.c,"$isaU")
t.c=null
b=t.aY(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.el(y,t)
return}}m=b.b
n=H.i(m.c,"$isaU")
m.c=null
b=m.aY(n)
y=x.a
u=x.b
if(!y){H.B(u,H.z(m,0))
m.a=4
m.c=u}else{H.i(u,"$isaa")
m.a=8
m.c=u}z.a=m
y=m}}}},
iz:{"^":"u:2;a,b",
$0:function(){P.bs(this.a,this.b)}},
iE:{"^":"u:2;a,b",
$0:function(){P.bs(this.b,this.a.a)}},
iB:{"^":"u:15;a",
$1:function(a){var z=this.a
z.a=0
z.ck(a)}},
iC:{"^":"u:23;a",
$2:function(a,b){this.a.bm(a,H.i(b,"$isai"))},
$1:function(a){return this.$2(a,null)}},
iD:{"^":"u:2;a,b,c",
$0:function(){this.a.bm(this.b,this.c)}},
iH:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.de(H.b(w.d,{func:1}),null)}catch(v){y=H.aK(v)
x=H.b0(v)
if(this.d){w=H.i(this.a.a.c,"$isaa").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isaa")
else u.b=new P.aa(y,x)
u.a=!0
return}if(!!J.H(z).$isb7){if(z instanceof P.aB&&z.gcz()>=4){if(z.gcz()===8){w=this.b
w.b=H.i(z.geC(),"$isaa")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.h0(new P.iI(t),null)
w.a=!1}}},
iI:{"^":"u:24;a",
$1:function(a){return this.a}},
iG:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.B(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.c2(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aK(t)
y=H.b0(t)
x=this.a
x.b=new P.aa(z,y)
x.a=!0}}},
iF:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isaa")
w=this.c
if(w.fA(z)&&w.e!=null){v=this.b
v.b=w.fs(z)
v.a=!1}}catch(u){y=H.aK(u)
x=H.b0(u)
w=H.i(this.a.a.c,"$isaa")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aa(y,x)
s.a=!0}}},
ej:{"^":"a;a,0b"},
cG:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aB(0,$.M,[P.O])
z.a=0
this.fw(new P.hz(z,this),!0,new P.hA(z,y),y.gdQ())
return y}},
hz:{"^":"u;a,b",
$1:function(a){H.B(a,H.b_(this.b,"cG",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.b_(this.b,"cG",0)]}}},
hA:{"^":"u:2;a,b",
$0:function(){this.b.ck(this.a.a)}},
dQ:{"^":"a;$ti"},
aP:{"^":"a;"},
aa:{"^":"a;a,b",
i:function(a){return H.h(this.a)},
$isX:1},
jn:{"^":"a;",$islS:1},
jD:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dG()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.j(z)
x=H.j(z)
x.stack=y.i(0)
throw x}},
j1:{"^":"jn;",
fW:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.i===$.M){a.$0()
return}P.eA(null,null,this,a,-1)}catch(x){z=H.aK(x)
y=H.b0(x)
P.c8(null,null,this,z,H.i(y,"$isai"))}},
fX:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.i===$.M){a.$1(b)
return}P.eB(null,null,this,a,b,-1,c)}catch(x){z=H.aK(x)
y=H.b0(x)
P.c8(null,null,this,z,H.i(y,"$isai"))}},
fd:function(a,b){return new P.j3(this,H.b(a,{func:1,ret:b}),b)},
cD:function(a){return new P.j2(this,H.b(a,{func:1,ret:-1}))},
cE:function(a,b){return new P.j4(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
de:function(a,b){H.b(a,{func:1,ret:b})
if($.M===C.i)return a.$0()
return P.eA(null,null,this,a,b)},
c2:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.M===C.i)return a.$1(b)
return P.eB(null,null,this,a,b,c,d)},
fV:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.M===C.i)return a.$2(b,c)
return P.jE(null,null,this,a,b,c,d,e,f)},
fQ:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
j3:{"^":"u;a,b,c",
$0:function(){return this.a.de(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
j2:{"^":"u:3;a,b",
$0:function(){return this.a.fW(this.b)}},
j4:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.fX(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fF:function(a,b,c){H.bP(a)
return H.y(H.jP(a,new H.cu(0,0,[b,c])),"$isdA",[b,c],"$asdA")},
fE:function(a,b){return new H.cu(0,0,[a,b])},
fG:function(a,b,c,d){return new P.iO(0,0,[d])},
fu:function(a,b,c){var z,y
if(P.cU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$by()
C.a.h(y,a)
try{P.jA(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dR(b,H.k_(z,"$isf"),", ")+c
return y.charCodeAt(0)==0?y:y},
cp:function(a,b,c){var z,y,x
if(P.cU(a))return b+"..."+c
z=new P.bJ(b)
y=$.$get$by()
C.a.h(y,a)
try{x=z
x.a=P.dR(x.gaq(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gaq()+c
y=z.gaq()
return y.charCodeAt(0)==0?y:y},
cU:function(a){var z,y
for(z=0;y=$.$get$by(),z<y.length;++z)if(a===y[z])return!0
return!1},
jA:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gS(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.h(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.E();t=s,s=r){r=z.gM(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dC:function(a){var z,y,x
z={}
if(P.cU(a))return"{...}"
y=new P.bJ("")
try{C.a.h($.$get$by(),a)
x=y
x.a=x.gaq()+"{"
z.a=!0
J.eW(a,new P.fM(z,y))
z=y
z.a=z.gaq()+"}"}finally{z=$.$get$by()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gaq()
return z.charCodeAt(0)==0?z:z},
iO:{"^":"iJ;a,0b,0c,0d,0e,0f,r,$ti",
gS:function(a){return P.eo(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cR()
this.b=z}return this.ci(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cR()
this.c=y}return this.ci(y,b)}else return this.dJ(0,b)},
dJ:function(a,b){var z,y,x
H.B(b,H.z(this,0))
z=this.d
if(z==null){z=P.cR()
this.d=z}y=this.cl(b)
x=z[y]
if(x==null)z[y]=[this.bl(b)]
else{if(this.cp(x,b)>=0)return!1
x.push(this.bl(b))}return!0},
T:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.ct(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ct(this.c,b)
else return this.ex(0,b)},
ex:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dX(z,b)
x=this.cp(y,b)
if(x<0)return!1
this.cB(y.splice(x,1)[0])
return!0},
ci:function(a,b){H.B(b,H.z(this,0))
if(H.i(a[b],"$iscQ")!=null)return!1
a[b]=this.bl(b)
return!0},
ct:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$iscQ")
if(z==null)return!1
this.cB(z)
delete a[b]
return!0},
cj:function(){this.r=this.r+1&67108863},
bl:function(a){var z,y
z=new P.cQ(H.B(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cj()
return z},
cB:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cj()},
cl:function(a){return J.aD(a)&0x3ffffff},
dX:function(a,b){return a[this.cl(b)]},
cp:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
t:{
cR:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cQ:{"^":"a;a,0b,0c"},
iP:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.z(this,0))
this.c=z.b
return!0}}},
t:{
eo:function(a,b,c){var z=new P.iP(a,b,[c])
z.c=a.e
return z}}},
iJ:{"^":"hq;"},
cx:{"^":"iQ;",$isf:1,$isd:1},
t:{"^":"a;$ti",
gS:function(a){return new H.fH(a,this.gk(a),0,[H.bz(this,a,"t",0)])},
B:function(a,b){return this.j(a,b)},
h3:function(a,b){var z,y,x
z=H.e([],[H.bz(this,a,"t",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.a_(z,y,this.j(a,y));++y}return z},
h2:function(a){return this.h3(a,!0)},
i:function(a){return P.cp(a,"[","]")}},
fL:{"^":"a8;"},
fM:{"^":"u:12;a,b",
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
H.b(b,{func:1,ret:-1,args:[H.bz(this,a,"a8",0),H.bz(this,a,"a8",1)]})
for(z=J.bR(this.gal(a));z.E();){y=z.gM(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b2(this.gal(a))},
i:function(a){return P.dC(a)},
$isa1:1},
hr:{"^":"a;$ti",
i:function(a){return P.cp(this,"{","}")},
B:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.d5("index"))
if(b<0)H.q(P.bg(b,0,null,"index",null))
for(z=P.eo(this,this.r,H.z(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.j(P.L(b,this,"index",null,y))},
$isf:1},
hq:{"^":"hr;"},
iQ:{"^":"a+t;"}}],["","",,P,{"^":"",
fm:function(a){var z=J.H(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aO(a)+"'"},
fI:function(a,b,c,d){var z,y
H.B(b,d)
z=J.fw(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a_(z,y,b)
return H.y(z,"$isd",[d],"$asd")},
fJ:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.gS(a);x.E();)C.a.h(y,H.B(x.gM(x),c))
if(b)return y
return H.y(J.ba(y),"$isd",z,"$asd")},
bY:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fm(a)},
r:function(a){return new P.ek(a)},
d3:function(a){H.k4(a)},
a9:{"^":"a;"},
"+bool":0,
ag:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.ag))return!1
return this.a===b.a&&this.b===b.b},
gN:function(a){var z=this.a
return(z^C.f.cw(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fc(H.hf(this))
y=P.bA(H.hd(this))
x=P.bA(H.h9(this))
w=P.bA(H.ha(this))
v=P.bA(H.hc(this))
u=P.bA(H.he(this))
t=P.fd(H.hb(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
fc:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fd:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bA:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"Q;"},
"+double":0,
bB:{"^":"a;a",
a8:function(a,b){return C.f.a8(this.a,H.i(b,"$isbB").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.bB))return!1
return this.a===b.a},
gN:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fi()
y=this.a
if(y<0)return"-"+new P.bB(0-y).i(0)
x=z.$1(C.f.W(y,6e7)%60)
w=z.$1(C.f.W(y,1e6)%60)
v=new P.fh().$1(y%1e6)
return""+C.f.W(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
t:{
dq:function(a,b,c,d,e,f){return new P.bB(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fh:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fi:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
dG:{"^":"X;",
i:function(a){return"Throw of null."}},
aE:{"^":"X;a,b,c,d",
gbo:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbn:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.h(z)
w=this.gbo()+y+x
if(!this.a)return w
v=this.gbn()
u=P.bY(this.b)
return w+v+": "+H.h(u)},
t:{
eX:function(a){return new P.aE(!1,null,null,a)},
bS:function(a,b,c){return new P.aE(!0,a,b,c)},
d5:function(a){return new P.aE(!1,null,a,"Must not be null")}}},
dJ:{"^":"aE;e,f,a,b,c,d",
gbo:function(){return"RangeError"},
gbn:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
t:{
cD:function(a,b,c){return new P.dJ(null,null,!0,a,b,"Value not in range")},
bg:function(a,b,c,d,e){return new P.dJ(b,c,!0,a,d,"Invalid value")}}},
ft:{"^":"aE;e,k:f>,a,b,c,d",
gbo:function(){return"RangeError"},
gbn:function(){if(J.eT(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.h(z)},
t:{
L:function(a,b,c,d,e){var z=H.Y(e!=null?e:J.b2(b))
return new P.ft(b,z,!0,a,c,"Index out of range")}}},
hZ:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
ad:function(a){return new P.hZ(a)}}},
hX:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
ee:function(a){return new P.hX(a)}}},
hw:{"^":"X;a",
i:function(a){return"Bad state: "+this.a}},
f8:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.bY(z))+"."},
t:{
b4:function(a){return new P.f8(a)}}},
h4:{"^":"a;",
i:function(a){return"Out of Memory"},
$isX:1},
dP:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isX:1},
fb:{"^":"X;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ek:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
O:{"^":"Q;"},
"+int":0,
f:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gS(this)
for(y=0;z.E();)++y
return y},
B:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.d5("index"))
if(b<0)H.q(P.bg(b,0,null,"index",null))
for(z=this.gS(this),y=0;z.E();){x=z.gM(z)
if(b===y)return x;++y}throw H.j(P.L(b,this,"index",null,y))},
i:function(a){return P.fu(this,"(",")")}},
cq:{"^":"a;$ti"},
d:{"^":"a;$ti",$isf:1},
"+List":0,
a1:{"^":"a;$ti"},
F:{"^":"a;",
gN:function(a){return P.a.prototype.gN.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Q:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gN:function(a){return H.bf(this)},
i:function(a){return"Instance of '"+H.aO(this)+"'"},
toString:function(){return this.i(this)}},
ai:{"^":"a;"},
o:{"^":"a;",$ish5:1},
"+String":0,
bJ:{"^":"a;aq:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
dR:function(a,b,c){var z=J.bR(b)
if(!z.E())return a
if(c.length===0){do a+=H.h(z.gM(z))
while(z.E())}else{a+=H.h(z.gM(z))
for(;z.E();)a=a+c+H.h(z.gM(z))}return a}}}}],["","",,W,{"^":"",
ck:function(a,b){var z=document.createElement("canvas")
return z},
fk:function(a){H.i(a,"$isa0")
return"wheel"},
c6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
en:function(a,b,c,d){var z,y
z=W.c6(W.c6(W.c6(W.c6(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eE:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.M
if(z===C.i)return a
return z.cE(a,b)},
aM:{"^":"a_;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kh:{"^":"cF;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
ki:{"^":"m;0k:length=","%":"AccessibleNodeList"},
kj:{"^":"aM;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kk:{"^":"aM;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
f0:{"^":"m;","%":";Blob"},
cj:{"^":"aM;",
bh:function(a,b,c){if(c!=null)return a.getContext(b,P.jK(c,null))
return a.getContext(b)},
dl:function(a,b){return this.bh(a,b,null)},
$iscj:1,
"%":"HTMLCanvasElement"},
dd:{"^":"m;",$isdd:1,"%":"CanvasRenderingContext2D"},
kq:{"^":"I;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ks:{"^":"bW;0k:length=","%":"CSSPerspective"},
kt:{"^":"cn;0n:x=,0p:y=","%":"CSSPositionValue"},
ku:{"^":"bW;0n:x=,0p:y=","%":"CSSRotation"},
b5:{"^":"m;",$isb5:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kv:{"^":"bW;0n:x=,0p:y=","%":"CSSScale"},
f9:{"^":"ip;0k:length=",
dm:function(a,b){var z=a.getPropertyValue(this.cg(a,b))
return z==null?"":z},
cg:function(a,b){var z,y
z=$.$get$di()
y=z[b]
if(typeof y==="string")return y
y=this.eL(a,b)
z[b]=y
return y},
eL:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fe()+b
if(z in a)return z
return b},
eE:function(a,b,c,d){a.setProperty(b,c,d)},
gbF:function(a){return a.bottom},
gad:function(a){return a.height},
gaD:function(a){return a.left},
gaP:function(a){return a.right},
gaR:function(a){return a.top},
gaf:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fa:{"^":"a;",
gaD:function(a){return this.dm(a,"left")}},
cn:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bW:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kw:{"^":"cn;0k:length=","%":"CSSTransformValue"},
kx:{"^":"bW;0n:x=,0p:y=","%":"CSSTranslation"},
ky:{"^":"cn;0k:length=","%":"CSSUnparsedValue"},
kz:{"^":"m;0k:length=","%":"DataTransferItemList"},
kA:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
kB:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
kC:{"^":"ff;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
ff:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
kD:{"^":"ir;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a7,P.Q]]},
$ast:function(){return[[P.a7,P.Q]]},
$isf:1,
$asf:function(){return[[P.a7,P.Q]]},
$isd:1,
$asd:function(){return[[P.a7,P.Q]]},
$asw:function(){return[[P.a7,P.Q]]},
"%":"ClientRectList|DOMRectList"},
fg:{"^":"m;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gaf(a))+" x "+H.h(this.gad(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.aX(b,"$isa7",[P.Q],"$asa7")
if(!z)return!1
z=J.bO(b)
return a.left===z.gaD(b)&&a.top===z.gaR(b)&&this.gaf(a)===z.gaf(b)&&this.gad(a)===z.gad(b)},
gN:function(a){return W.en(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaf(a)&0x1FFFFFFF,this.gad(a)&0x1FFFFFFF)},
gbF:function(a){return a.bottom},
gad:function(a){return a.height},
gaD:function(a){return a.left},
gaP:function(a){return a.right},
gaR:function(a){return a.top},
gaf:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa7:1,
$asa7:function(){return[P.Q]},
"%":";DOMRectReadOnly"},
kE:{"^":"it;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.o]},
$ast:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$asw:function(){return[P.o]},
"%":"DOMStringList"},
kF:{"^":"m;0k:length=","%":"DOMTokenList"},
io:{"^":"cx;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return H.i(z[b],"$isa_")},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var z=this.h2(this)
return new J.aj(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a_]},
$asf:function(){return[W.a_]},
$asd:function(){return[W.a_]}},
a_:{"^":"I;",
gcF:function(a){return new W.io(a,a.children)},
gb0:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.a8()
if(x<0)x=-x*0
if(typeof w!=="number")return w.a8()
if(w<0)w=-w*0
return new P.a7(z,y,x,w,[P.Q])},
i:function(a){return a.localName},
$isa_:1,
"%":";Element"},
a4:{"^":"m;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a0:{"^":"m;",
cC:["ds",function(a,b,c,d){H.b(c,{func:1,args:[W.a4]})
if(c!=null)this.dK(a,b,c,!1)}],
dK:function(a,b,c,d){return a.addEventListener(b,H.aY(H.b(c,{func:1,args:[W.a4]}),1),!1)},
$isa0:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;et|eu|ew|ex"},
b6:{"^":"f0;",$isb6:1,"%":"File"},
kY:{"^":"iy;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b6]},
$ast:function(){return[W.b6]},
$isf:1,
$asf:function(){return[W.b6]},
$isd:1,
$asd:function(){return[W.b6]},
$asw:function(){return[W.b6]},
"%":"FileList"},
kZ:{"^":"a0;0k:length=","%":"FileWriter"},
l1:{"^":"aM;0k:length=","%":"HTMLFormElement"},
b8:{"^":"m;",$isb8:1,"%":"Gamepad"},
l2:{"^":"cF;0n:x=,0p:y=","%":"Gyroscope"},
l3:{"^":"m;0k:length=","%":"History"},
l4:{"^":"iL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.I]},
$ast:function(){return[W.I]},
$isf:1,
$asf:function(){return[W.I]},
$isd:1,
$asd:function(){return[W.I]},
$asw:function(){return[W.I]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c_:{"^":"m;0cH:data=",$isc_:1,"%":"ImageData"},
dt:{"^":"aM;",$isdt:1,"%":"HTMLImageElement"},
bb:{"^":"cJ;",$isbb:1,"%":"KeyboardEvent"},
l9:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
la:{"^":"cF;0n:x=,0p:y=","%":"Magnetometer"},
lc:{"^":"m;0k:length=","%":"MediaList"},
ld:{"^":"a0;",
cC:function(a,b,c,d){H.b(c,{func:1,args:[W.a4]})
if(b==="message")a.start()
this.ds(a,b,c,!1)},
"%":"MessagePort"},
le:{"^":"iR;",
j:function(a,b){return P.aC(a.get(H.R(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gal:function(a){var z=H.e([],[P.o])
this.J(a,new W.fY(z))
return z},
gk:function(a){return a.size},
$asa8:function(){return[P.o,null]},
$isa1:1,
$asa1:function(){return[P.o,null]},
"%":"MIDIInputMap"},
fY:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lf:{"^":"iS;",
j:function(a,b){return P.aC(a.get(H.R(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gal:function(a){var z=H.e([],[P.o])
this.J(a,new W.fZ(z))
return z},
gk:function(a){return a.size},
$asa8:function(){return[P.o,null]},
$isa1:1,
$asa1:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
fZ:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bc:{"^":"m;",$isbc:1,"%":"MimeType"},
lg:{"^":"iU;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bc]},
$ast:function(){return[W.bc]},
$isf:1,
$asf:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asw:function(){return[W.bc]},
"%":"MimeTypeArray"},
ao:{"^":"cJ;",$isao:1,"%":"PointerEvent;DragEvent|MouseEvent"},
im:{"^":"cx;a",
gS:function(a){var z=this.a.childNodes
return new W.dr(z,z.length,-1,[H.bz(C.F,z,"w",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
$ast:function(){return[W.I]},
$asf:function(){return[W.I]},
$asd:function(){return[W.I]}},
I:{"^":"a0;",
i:function(a){var z=a.nodeValue
return z==null?this.dt(a):z},
$isI:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
h2:{"^":"iW;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.I]},
$ast:function(){return[W.I]},
$isf:1,
$asf:function(){return[W.I]},
$isd:1,
$asd:function(){return[W.I]},
$asw:function(){return[W.I]},
"%":"NodeList|RadioNodeList"},
be:{"^":"m;0k:length=",$isbe:1,"%":"Plugin"},
lr:{"^":"j_;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.be]},
$ast:function(){return[W.be]},
$isf:1,
$asf:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asw:function(){return[W.be]},
"%":"PluginArray"},
lw:{"^":"j5;",
j:function(a,b){return P.aC(a.get(H.R(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gal:function(a){var z=H.e([],[P.o])
this.J(a,new W.hn(z))
return z},
gk:function(a){return a.size},
$asa8:function(){return[P.o,null]},
$isa1:1,
$asa1:function(){return[P.o,null]},
"%":"RTCStatsReport"},
hn:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ly:{"^":"aM;0k:length=","%":"HTMLSelectElement"},
cF:{"^":"a0;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bh:{"^":"a0;",$isbh:1,"%":"SourceBuffer"},
lz:{"^":"eu;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bh]},
$ast:function(){return[W.bh]},
$isf:1,
$asf:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asw:function(){return[W.bh]},
"%":"SourceBufferList"},
bi:{"^":"m;",$isbi:1,"%":"SpeechGrammar"},
lA:{"^":"j7;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bi]},
$ast:function(){return[W.bi]},
$isf:1,
$asf:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asw:function(){return[W.bi]},
"%":"SpeechGrammarList"},
bj:{"^":"m;0k:length=",$isbj:1,"%":"SpeechRecognitionResult"},
lC:{"^":"ja;",
j:function(a,b){return a.getItem(H.R(b))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gal:function(a){var z=H.e([],[P.o])
this.J(a,new W.hy(z))
return z},
gk:function(a){return a.length},
$asa8:function(){return[P.o,P.o]},
$isa1:1,
$asa1:function(){return[P.o,P.o]},
"%":"Storage"},
hy:{"^":"u:25;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bk:{"^":"m;",$isbk:1,"%":"CSSStyleSheet|StyleSheet"},
bl:{"^":"aM;",$isbl:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bm:{"^":"a0;",$isbm:1,"%":"TextTrack"},
bn:{"^":"a0;",$isbn:1,"%":"TextTrackCue|VTTCue"},
lH:{"^":"je;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bn]},
$ast:function(){return[W.bn]},
$isf:1,
$asf:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asw:function(){return[W.bn]},
"%":"TextTrackCueList"},
lI:{"^":"ex;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bm]},
$ast:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asw:function(){return[W.bm]},
"%":"TextTrackList"},
lJ:{"^":"m;0k:length=","%":"TimeRanges"},
bo:{"^":"m;",$isbo:1,"%":"Touch"},
aQ:{"^":"cJ;",$isaQ:1,"%":"TouchEvent"},
lK:{"^":"jk;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asw:function(){return[W.bo]},
"%":"TouchList"},
lL:{"^":"m;0k:length=","%":"TrackDefaultList"},
cJ:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lO:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
lQ:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
lR:{"^":"a0;0k:length=","%":"VideoTrackList"},
br:{"^":"ao;",
gfl:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.ad("deltaY is not supported"))},
gfk:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.ad("deltaX is not supported"))},
$isbr:1,
"%":"WheelEvent"},
ie:{"^":"a0;",
ey:function(a,b){return a.requestAnimationFrame(H.aY(H.b(b,{func:1,ret:-1,args:[P.Q]}),1))},
dW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lW:{"^":"jp;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b5]},
$ast:function(){return[W.b5]},
$isf:1,
$asf:function(){return[W.b5]},
$isd:1,
$asd:function(){return[W.b5]},
$asw:function(){return[W.b5]},
"%":"CSSRuleList"},
lX:{"^":"fg;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.aX(b,"$isa7",[P.Q],"$asa7")
if(!z)return!1
z=J.bO(b)
return a.left===z.gaD(b)&&a.top===z.gaR(b)&&a.width===z.gaf(b)&&a.height===z.gad(b)},
gN:function(a){return W.en(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gad:function(a){return a.height},
gaf:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
lZ:{"^":"jr;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b8]},
$ast:function(){return[W.b8]},
$isf:1,
$asf:function(){return[W.b8]},
$isd:1,
$asd:function(){return[W.b8]},
$asw:function(){return[W.b8]},
"%":"GamepadList"},
m_:{"^":"jt;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.I]},
$ast:function(){return[W.I]},
$isf:1,
$asf:function(){return[W.I]},
$isd:1,
$asd:function(){return[W.I]},
$asw:function(){return[W.I]},
"%":"MozNamedAttrMap|NamedNodeMap"},
m0:{"^":"jv;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bj]},
$ast:function(){return[W.bj]},
$isf:1,
$asf:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asw:function(){return[W.bj]},
"%":"SpeechRecognitionResultList"},
m1:{"^":"jx;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bk]},
$ast:function(){return[W.bk]},
$isf:1,
$asf:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asw:function(){return[W.bk]},
"%":"StyleSheetList"},
iu:{"^":"cG;a,b,c,$ti",
fw:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.W(this.a,this.b,a,!1,z)}},
lY:{"^":"iu;a,b,c,$ti"},
iv:{"^":"dQ;a,b,c,d,e,$ti",
eP:function(){var z=this.d
if(z!=null&&this.a<=0)J.eV(this.b,this.c,z,!1)},
t:{
W:function(a,b,c,d,e){var z=c==null?null:W.eE(new W.iw(c),W.a4)
z=new W.iv(0,a,b,z,!1,[e])
z.eP()
return z}}},
iw:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.i(a,"$isa4"))}},
w:{"^":"a;$ti",
gS:function(a){return new W.dr(a,this.gk(a),-1,[H.bz(this,a,"w",0)])}},
dr:{"^":"a;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.eU(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
ip:{"^":"m+fa;"},
iq:{"^":"m+t;"},
ir:{"^":"iq+w;"},
is:{"^":"m+t;"},
it:{"^":"is+w;"},
ix:{"^":"m+t;"},
iy:{"^":"ix+w;"},
iK:{"^":"m+t;"},
iL:{"^":"iK+w;"},
iR:{"^":"m+a8;"},
iS:{"^":"m+a8;"},
iT:{"^":"m+t;"},
iU:{"^":"iT+w;"},
iV:{"^":"m+t;"},
iW:{"^":"iV+w;"},
iZ:{"^":"m+t;"},
j_:{"^":"iZ+w;"},
j5:{"^":"m+a8;"},
et:{"^":"a0+t;"},
eu:{"^":"et+w;"},
j6:{"^":"m+t;"},
j7:{"^":"j6+w;"},
ja:{"^":"m+a8;"},
jd:{"^":"m+t;"},
je:{"^":"jd+w;"},
ew:{"^":"a0+t;"},
ex:{"^":"ew+w;"},
jj:{"^":"m+t;"},
jk:{"^":"jj+w;"},
jo:{"^":"m+t;"},
jp:{"^":"jo+w;"},
jq:{"^":"m+t;"},
jr:{"^":"jq+w;"},
js:{"^":"m+t;"},
jt:{"^":"js+w;"},
ju:{"^":"m+t;"},
jv:{"^":"ju+w;"},
jw:{"^":"m+t;"},
jx:{"^":"jw+w;"}}],["","",,P,{"^":"",
jN:function(a){var z,y
z=J.H(a)
if(!!z.$isc_){y=z.gcH(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.ez(a.data,a.height,a.width)},
jM:function(a){if(a instanceof P.ez)return{data:a.a,height:a.b,width:a.c}
return a},
aC:function(a){var z,y,x,w,v
if(a==null)return
z=P.fE(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.R(y[w])
z.a_(0,v,a[v])}return z},
jK:function(a,b){var z={}
a.J(0,new P.jL(z))
return z},
dp:function(){var z=$.dn
if(z==null){z=J.cf(window.navigator.userAgent,"Opera",0)
$.dn=z}return z},
fe:function(){var z,y
z=$.dk
if(z!=null)return z
y=$.dl
if(y==null){y=J.cf(window.navigator.userAgent,"Firefox",0)
$.dl=y}if(y)z="-moz-"
else{y=$.dm
if(y==null){y=!P.dp()&&J.cf(window.navigator.userAgent,"Trident/",0)
$.dm=y}if(y)z="-ms-"
else z=P.dp()?"-o-":"-webkit-"}$.dk=z
return z},
ez:{"^":"a;cH:a>,b,c",$isc_:1},
jL:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fo:{"^":"cx;a,b",
gbq:function(){var z,y,x
z=this.b
y=H.b_(z,"t",0)
x=W.a_
return new H.fN(new H.ic(z,H.b(new P.fp(),{func:1,ret:P.a9,args:[y]}),[y]),H.b(new P.fq(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b2(this.gbq().a)},
j:function(a,b){var z=this.gbq()
return z.b.$1(J.d4(z.a,b))},
gS:function(a){var z=P.fJ(this.gbq(),!1,W.a_)
return new J.aj(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a_]},
$asf:function(){return[W.a_]},
$asd:function(){return[W.a_]}},
fp:{"^":"u:26;",
$1:function(a){return!!J.H(H.i(a,"$isI")).$isa_}},
fq:{"^":"u:27;",
$1:function(a){return H.c(H.i(a,"$isI"),"$isa_")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bt:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
em:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bI:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.h(this.a)+", "+H.h(this.b)+")"},
q:function(a,b){var z,y,x
if(b==null)return!1
z=H.aX(b,"$isbI",[P.Q],null)
if(!z)return!1
z=this.a
y=J.bO(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gN:function(a){var z,y
z=J.aD(this.a)
y=J.aD(this.b)
return P.em(P.bt(P.bt(0,z),y))}},
j0:{"^":"a;$ti",
gaP:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.B(z+this.c,H.z(this,0))},
gbF:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.B(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.aX(b,"$isa7",[P.Q],"$asa7")
if(!z)return!1
z=this.a
y=J.bO(b)
x=y.gaD(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaR(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.z(this,0)
if(H.B(z+this.c,w)===y.gaP(b)){if(typeof x!=="number")return x.C()
z=H.B(x+this.d,w)===y.gbF(b)}else z=!1}else z=!1}else z=!1
return z},
gN:function(a){var z,y,x,w,v
z=this.a
y=J.aD(z)
x=this.b
w=J.aD(x)
if(typeof z!=="number")return z.C()
v=H.z(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.B(x+this.d,v)
return P.em(P.bt(P.bt(P.bt(P.bt(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cG:function(a,b){var z,y
H.y(b,"$isbI",[P.Q],"$asbI")
z=b.a
y=this.a
if(typeof z!=="number")return z.dk()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dk()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a7:{"^":"j0;aD:a>,aR:b>,af:c>,ad:d>,$ti"}}],["","",,P,{"^":"",kG:{"^":"P;0n:x=,0p:y=","%":"SVGFEBlendElement"},kH:{"^":"P;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},kI:{"^":"P;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},kJ:{"^":"P;0n:x=,0p:y=","%":"SVGFECompositeElement"},kK:{"^":"P;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},kL:{"^":"P;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},kM:{"^":"P;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},kN:{"^":"P;0n:x=,0p:y=","%":"SVGFEFloodElement"},kO:{"^":"P;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},kP:{"^":"P;0n:x=,0p:y=","%":"SVGFEImageElement"},kQ:{"^":"P;0n:x=,0p:y=","%":"SVGFEMergeElement"},kR:{"^":"P;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},kS:{"^":"P;0n:x=,0p:y=","%":"SVGFEOffsetElement"},kT:{"^":"P;0n:x=,0p:y=","%":"SVGFEPointLightElement"},kU:{"^":"P;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},kV:{"^":"P;0n:x=,0p:y=","%":"SVGFESpotLightElement"},kW:{"^":"P;0n:x=,0p:y=","%":"SVGFETileElement"},kX:{"^":"P;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},l_:{"^":"P;0n:x=,0p:y=","%":"SVGFilterElement"},l0:{"^":"b9;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fs:{"^":"b9;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b9:{"^":"P;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},l5:{"^":"b9;0n:x=,0p:y=","%":"SVGImageElement"},bF:{"^":"m;",$isbF:1,"%":"SVGLength"},l8:{"^":"iN;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bF]},
$isf:1,
$asf:function(){return[P.bF]},
$isd:1,
$asd:function(){return[P.bF]},
$asw:function(){return[P.bF]},
"%":"SVGLengthList"},lb:{"^":"P;0n:x=,0p:y=","%":"SVGMaskElement"},bH:{"^":"m;",$isbH:1,"%":"SVGNumber"},lo:{"^":"iY;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bH]},
$isf:1,
$asf:function(){return[P.bH]},
$isd:1,
$asd:function(){return[P.bH]},
$asw:function(){return[P.bH]},
"%":"SVGNumberList"},lq:{"^":"P;0n:x=,0p:y=","%":"SVGPatternElement"},ls:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},lt:{"^":"m;0k:length=","%":"SVGPointList"},lu:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},lv:{"^":"fs;0n:x=,0p:y=","%":"SVGRectElement"},lD:{"^":"jc;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$ast:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$asw:function(){return[P.o]},
"%":"SVGStringList"},P:{"^":"a_;",
gcF:function(a){return new P.fo(a,new W.im(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lE:{"^":"b9;0n:x=,0p:y=","%":"SVGSVGElement"},hB:{"^":"b9;","%":"SVGTextPathElement;SVGTextContentElement"},lG:{"^":"hB;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bK:{"^":"m;",$isbK:1,"%":"SVGTransform"},lM:{"^":"jm;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bK]},
$isf:1,
$asf:function(){return[P.bK]},
$isd:1,
$asd:function(){return[P.bK]},
$asw:function(){return[P.bK]},
"%":"SVGTransformList"},lP:{"^":"b9;0n:x=,0p:y=","%":"SVGUseElement"},iM:{"^":"m+t;"},iN:{"^":"iM+w;"},iX:{"^":"m+t;"},iY:{"^":"iX+w;"},jb:{"^":"m+t;"},jc:{"^":"jb+w;"},jl:{"^":"m+t;"},jm:{"^":"jl+w;"}}],["","",,P,{"^":"",kl:{"^":"m;0k:length=","%":"AudioBuffer"},km:{"^":"il;",
j:function(a,b){return P.aC(a.get(H.R(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gal:function(a){var z=H.e([],[P.o])
this.J(a,new P.eZ(z))
return z},
gk:function(a){return a.size},
$asa8:function(){return[P.o,null]},
$isa1:1,
$asa1:function(){return[P.o,null]},
"%":"AudioParamMap"},eZ:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},kn:{"^":"a0;0k:length=","%":"AudioTrackList"},f_:{"^":"a0;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lp:{"^":"f_;0k:length=","%":"OfflineAudioContext"},il:{"^":"m+a8;"}}],["","",,P,{"^":"",cE:{"^":"m;",
fZ:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.H(g)
if(!!z.$isc_)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.jM(g))
return}if(!!z.$isdt)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.j(P.eX("Incorrect number or type of arguments"))},
fY:function(a,b,c,d,e,f,g){return this.fZ(a,b,c,d,e,f,g,null,null,null)},
$iscE:1,
"%":"WebGLRenderingContext"},hV:{"^":"m;",$ishV:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lB:{"^":"j9;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return P.aC(a.item(b))},
B:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a1,,,]]},
$isf:1,
$asf:function(){return[[P.a1,,,]]},
$isd:1,
$asd:function(){return[[P.a1,,,]]},
$asw:function(){return[[P.a1,,,]]},
"%":"SQLResultSetRowList"},j8:{"^":"m+t;"},j9:{"^":"j8+w;"}}],["","",,O,{"^":"",ar:{"^":"a;0a,0b,0c,0d,$ti",
bj:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
c6:function(a,b,c){var z=H.b_(this,"ar",0)
H.b(b,{func:1,ret:P.a9,args:[[P.f,z]]})
z={func:1,ret:-1,args:[P.O,[P.f,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aU:function(a,b){return this.c6(a,null,b)},
ep:function(a){var z
H.y(a,"$isf",[H.b_(this,"ar",0)],"$asf")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dB:function(a,b){var z
H.y(b,"$isf",[H.b_(this,"ar",0)],"$asf")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gS:function(a){var z=this.a
return new J.aj(z,z.length,0,[H.z(z,0)])},
B:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.b_(this,"ar",0)
H.B(b,z)
z=[z]
if(this.ep(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dB(x,H.e([b],z))}},
$isf:1,
t:{
cl:function(a){var z=new O.ar([a])
z.bj(a)
return z}}},cz:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
dC:function(a){var z=this.b
if(!(z==null))z.w(a)},
an:function(){return this.dC(null)},
gO:function(a){var z=this.a
if(z.length>0)return C.a.gbU(z)
else return V.bG()},
dc:function(a){var z=this.a
if(a==null)C.a.h(z,V.bG())
else C.a.h(z,a)
this.an()},
c1:function(){var z=this.a
if(z.length>0){z.pop()
this.an()}}}}],["","",,E,{"^":"",cg:{"^":"a;"},aF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0V:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sc7:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gu()
y.toString
x=H.b(this.gd9(),{func:1,ret:-1,args:[D.n]})
C.a.T(y.a,x)}y=this.c
if(y!=null){y=y.gu()
y.toString
x=H.b(this.gd9(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}w=new D.G("shape",z,this.c,this,[F.dN])
w.b=!0
this.a6(w)}},
saL:function(a){var z,y,x,w
if(!J.S(this.r,a)){z=this.r
if(z!=null){y=z.gu()
y.toString
x=H.b(this.gd8(),{func:1,ret:-1,args:[D.n]})
C.a.T(y.a,x)}if(a!=null){y=a.gu()
y.toString
x=H.b(this.gd8(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}this.r=a
w=new D.G("mover",z,a,this,[U.a5])
w.b=!0
this.a6(w)}},
ae:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aF(0,b,this):null
if(!J.S(y,this.x)){x=this.x
this.x=y
w=new D.G("matrix",x,y,this,[V.al])
w.b=!0
this.a6(w)}for(z=this.y.a,z=new J.aj(z,z.length,0,[H.z(z,0)]);z.E();)z.d.ae(0,b)},
aE:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gO(z))
else C.a.h(z.a,y.l(0,z.gO(z)))
z.an()
a.dd(this.f)
z=a.dy
x=(z&&C.a).gbU(z)
if(x!=null&&this.d!=null)x.fS(a,this)
for(z=this.y.a,z=new J.aj(z,z.length,0,[H.z(z,0)]);z.E();)z.d.aE(a)
a.da()
a.dx.c1()},
gu:function(){var z=this.z
if(z==null){z=D.E()
this.z=z}return z},
a6:function(a){var z=this.z
if(!(z==null))z.w(a)},
X:function(){return this.a6(null)},
fG:[function(a){H.i(a,"$isn")
this.e=null
this.a6(a)},function(){return this.fG(null)},"hN","$1","$0","gd9",0,2,0],
fF:[function(a){this.a6(H.i(a,"$isn"))},function(){return this.fF(null)},"hM","$1","$0","gd8",0,2,0],
fD:[function(a){this.a6(H.i(a,"$isn"))},function(){return this.fD(null)},"hK","$1","$0","gd7",0,2,0],
hJ:[function(a,b){var z,y,x,w,v,u,t
H.y(b,"$isf",[E.aF],"$asf")
for(z=b.length,y=this.gd7(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gV()==null){t=new D.aL()
t.a=H.e([],w)
t.c=0
u.sV(t)}t=u.gV()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.X()},"$2","gfC",8,0,7],
hL:[function(a,b){var z,y,x,w,v,u,t
H.y(b,"$isf",[E.aF],"$asf")
for(z=b.length,y=this.gd7(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gV()==null){t=new D.aL()
t.a=H.e([],w)
t.c=0
u.sV(t)}t=u.gV()
t.toString
H.b(y,x)
C.a.T(t.a,y)}}this.X()},"$2","gfE",8,0,7],
$isas:1},hi:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dz:function(a,b){var z,y,x,w,v
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
z=new O.cz()
y=[V.al]
z.a=H.e([],y)
x=z.gu()
x.toString
w={func:1,ret:-1,args:[D.n]}
v=H.b(new E.hk(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cz()
z.a=H.e([],y)
v=z.gu()
v.toString
x=H.b(new E.hl(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cz()
z.a=H.e([],y)
y=z.gu()
y.toString
w=H.b(new E.hm(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.cH])
this.dy=z
C.a.h(z,null)
this.fr=new H.cu(0,0,[P.o,A.dM])},
gfP:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gO(z)
y=this.db
y=z.l(0,y.gO(y))
this.z=y
z=y}return z},
dd:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbU(z):a;(z&&C.a).h(z,y)},
da:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
hj:function(a,b){var z=new E.hi(a,b)
z.dz(a,b)
return z}}},hk:{"^":"u:9;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.z=null
z.ch=null}},hl:{"^":"u:9;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hm:{"^":"u:9;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.ch=null
z.cx=null}},hH:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0V:x@,0y,0z,0Q,0ch",
gu:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
dE:[function(a){var z
H.i(a,"$isn")
z=this.x
if(!(z==null))z.w(a)
this.fT()},function(){return this.dE(null)},"dD","$1","$0","gcc",0,2,0],
gfq:function(){var z,y,x
z=Date.now()
y=C.f.W(P.dq(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ag(z,!1)
return x/y},
cu:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.j.bT(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.j.bT(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
fT:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.hJ(this),{func:1,ret:-1,args:[P.Q]})
C.r.dW(z)
C.r.ey(z,W.eE(y,P.Q))}},
fR:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cu()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ag(w,!1)
x.y=P.dq(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.an()
w=x.db
C.a.sk(w.a,0)
w.an()
w=x.dx
C.a.sk(w.a,0)
w.an()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aE(this.e)}}catch(v){z=H.aK(v)
y=H.b0(v)
P.d3("Error: "+H.h(z))
P.d3("Stack: "+H.h(y))
throw H.j(z)}},
t:{
hI:function(a,b,c,d,e){var z,y,x,w
z=J.H(a)
if(!!z.$iscj)return E.dV(a,!0,!0,!0,!1)
y=W.ck(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcF(a).h(0,y)
w=E.dV(y,!0,!0,!0,!1)
w.a=a
return w},
dV:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hH()
y=P.fF(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bh(a,"webgl",y)
x=H.i(x==null?C.k.bh(a,"experimental-webgl",y):x,"$iscE")
if(x==null)H.q(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hj(x,a)
w=new T.hC(x)
w.b=H.Y(x.getParameter(3379))
w.c=H.Y(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.i_(a)
v=new X.fz()
v.c=new X.an(!1,!1,!1)
v.d=P.fG(null,null,null,P.O)
w.b=v
v=new X.h_(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fK(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.hL(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.dQ,P.a]])
w.z=v
u=document
t=W.ao
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.W(u,"contextmenu",H.b(w.gec(),s),!1,t))
v=w.z
r=W.a4
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.W(a,"focus",H.b(w.gef(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.W(a,"blur",H.b(w.ge9(),q),!1,r))
v=w.z
p=W.bb
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.W(u,"keyup",H.b(w.geh(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.W(u,"keydown",H.b(w.geg(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.W(a,"mousedown",H.b(w.gek(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mouseup",H.b(w.gem(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mousemove",H.b(w.gel(),s),!1,t))
p=w.z
o=W.br;(p&&C.a).h(p,W.W(a,H.R(W.fk(a)),H.b(w.gen(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.W(u,"mousemove",H.b(w.ged(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.W(u,"mouseup",H.b(w.gee(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.W(u,"pointerlockchange",H.b(w.geo(),q),!1,r))
r=w.z
q=W.aQ
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.W(a,"touchstart",H.b(w.gew(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchend",H.b(w.geu(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchmove",H.b(w.gev(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ag(Date.now(),!1)
z.ch=0
z.cu()
return z}}},hJ:{"^":"u:29;a",
$1:function(a){var z
H.k3(a)
z=this.a
if(z.z){z.z=!1
z.fR()}}}}],["","",,Z,{"^":"",ei:{"^":"a;a,b",t:{
cO:function(a,b,c){var z
H.y(c,"$isd",[P.O],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bv(c)),35044)
a.bindBuffer(b,null)
return new Z.ei(b,z)}}},d9:{"^":"cg;a,b,c,d,e",
bE:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aK(y)
x=P.r('Failed to bind buffer attribute "'+J.a3(this.a)+'": '+H.h(z))
throw H.j(x)}},
i:function(a){return"["+J.a3(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}},ib:{"^":"a;a",$isko:1},da:{"^":"a;a,0b,c,d",
aC:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bE:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bE(a)},
h4:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aE:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.k(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a3(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.U(y,", ")+"\nAttrs:   "+C.a.U(u,", ")},
$islF:1},c0:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aO(this.c)+"'")+"]"}},aS:{"^":"a;a",
gc8:function(a){var z,y
z=this.a
y=(z&$.$get$ay().a)!==0?3:0
if((z&$.$get$ax().a)!==0)y+=3
if((z&$.$get$aw().a)!==0)y+=3
if((z&$.$get$az().a)!==0)y+=2
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$bp().a)!==0)y+=3
if((z&$.$get$bq().a)!==0)y+=4
if((z&$.$get$aT().a)!==0)++y
return(z&$.$get$av().a)!==0?y+4:y},
fc:function(a){var z,y,x
z=$.$get$ay()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bp()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bq()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$av()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eh()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aS))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.o])
y=this.a
if((y&$.$get$ay().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$az().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aA().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bp().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bq().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$av().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.U(z,"|")},
t:{
ae:function(a){return new Z.aS(a)}}}}],["","",,D,{"^":"",de:{"^":"a;"},aL:{"^":"a;0a,0b,0c",
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.n(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.fn(z))
return x!==0},
fn:function(){return this.w(null)},
fU:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.w(y)}}},
am:function(a){return this.fU(a,!0,!1)},
t:{
E:function(){var z=new D.aL()
z.a=H.e([],[{func:1,ret:-1,args:[D.n]}])
z.c=0
return z}}},fn:{"^":"u:30;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.n]})
z=this.a.a
z.b
a.$1(z)}},n:{"^":"a;a,0b"},c1:{"^":"n;c,d,a,0b,$ti"},c2:{"^":"n;c,d,a,0b,$ti"},G:{"^":"n;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}}],["","",,X,{"^":"",db:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)},
t:{"^":"kp<"}},dy:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dy))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}},dz:{"^":"n;c,a,0b"},fz:{"^":"a;0a,0b,0c,0d",
fM:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dz(a,this)
y.b=!0
return z.w(y)},
fI:function(a){var z,y
this.c=a.b
this.d.T(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dz(a,this)
y.b=!0
return z.w(y)}},dB:{"^":"c4;x,y,c,d,e,a,0b"},fK:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ai:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ag(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.T(y.a+x*w,y.b+v*u)
u=this.a.gaw()
s=new X.bd(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c0:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.ai(a,b))
return!0},
aN:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dq()
if(typeof z!=="number")return z.di()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.ai(a,b))
return!0},
aM:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.ai(a,b))
return!0},
fN:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaw()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cA(new V.N(v*u,t*s),y,x,new P.ag(w,!1),this)
w.b=!0
z.w(w)
return!0},
ej:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ag(Date.now(),!1)
y=this.f
x=new X.dB(c,a,this.a.gaw(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.T(0,0)}},an:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.an))return!1
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
return z+(this.c?"Shift+":"")}},bd:{"^":"c4;x,y,z,Q,ch,c,d,e,a,0b"},h_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bp:function(a,b,c){var z,y,x
z=new P.ag(Date.now(),!1)
y=this.a.gaw()
x=new X.bd(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c0:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bp(a,b,!0))
return!0},
aN:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dq()
if(typeof z!=="number")return z.di()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bp(a,b,!0))
return!0},
aM:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bp(a,b,!1))
return!0},
fO:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaw()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cA(new V.N(w*v,u*t),y,b,new P.ag(x,!1),this)
x.b=!0
z.w(x)
return!0},
gcI:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
gbg:function(){var z=this.c
if(z==null){z=D.E()
this.c=z}return z},
gd6:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z}},cA:{"^":"c4;x,c,d,e,a,0b"},c4:{"^":"n;"},dX:{"^":"c4;x,y,z,Q,ch,c,d,e,a,0b"},hL:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ai:function(a,b){var z,y,x,w
H.y(a,"$isd",[V.T],"$asd")
z=new P.ag(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gaw()
w=new X.dX(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fL:function(a){var z
H.y(a,"$isd",[V.T],"$asd")
z=this.b
if(z==null)return!1
z.w(this.ai(a,!0))
return!0},
fJ:function(a){var z
H.y(a,"$isd",[V.T],"$asd")
z=this.c
if(z==null)return!1
z.w(this.ai(a,!0))
return!0},
fK:function(a){var z
H.y(a,"$isd",[V.T],"$asd")
z=this.d
if(z==null)return!1
z.w(this.ai(a,!1))
return!0}},i_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaw:function(){var z=this.a
return V.dL(0,0,(z&&C.k).gb0(z).c,C.k.gb0(z).d)},
cn:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dy(z,new X.an(y,a.altKey,a.shiftKey))},
au:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.an(y,a.altKey,a.shiftKey)},
bA:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.an(y,a.altKey,a.shiftKey)},
aj:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.T(y-w,x-v)},
aH:function(a){return new V.N(a.movementX,a.movementY)},
bw:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.j.a7(u.pageX)
C.j.a7(u.pageY)
s=z.left
C.j.a7(u.pageX)
C.a.h(y,new V.T(t-s,C.j.a7(u.pageY)-z.top))}return y},
ag:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.db(z,new X.an(y,a.altKey,a.shiftKey))},
hm:[function(a){this.f=!0},"$1","gef",4,0,4],
hg:[function(a){this.f=!1},"$1","ge9",4,0,4],
hj:[function(a){if(this.f)a.preventDefault()},"$1","gec",4,0,4],
ho:[function(a){var z
H.i(a,"$isbb")
if(!this.f)return
z=this.cn(a)
if(this.b.fM(z))a.preventDefault()},"$1","geh",4,0,16],
hn:[function(a){var z
H.i(a,"$isbb")
if(!this.f)return
z=this.cn(a)
if(this.b.fI(z))a.preventDefault()},"$1","geg",4,0,16],
hq:[function(a){var z,y,x,w
H.i(a,"$isao")
z=this.a
z.focus()
this.f=!0
this.au(a)
if(this.x){y=this.ag(a)
x=this.aH(a)
if(this.d.c0(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ag(a)
w=this.aj(a)
if(this.c.c0(y,w))a.preventDefault()},"$1","gek",4,0,5],
hs:[function(a){var z,y,x
H.i(a,"$isao")
this.au(a)
z=this.ag(a)
if(this.x){y=this.aH(a)
if(this.d.aN(z,y))a.preventDefault()
return}if(this.r)return
x=this.aj(a)
if(this.c.aN(z,x))a.preventDefault()},"$1","gem",4,0,5],
hl:[function(a){var z,y,x,w
H.i(a,"$isao")
z=this.a
if(!(z&&C.k).gb0(z).cG(0,new P.bI(a.clientX,a.clientY,[P.Q]))){this.au(a)
y=this.ag(a)
if(this.x){x=this.aH(a)
if(this.d.aN(y,x))a.preventDefault()
return}if(this.r)return
w=this.aj(a)
if(this.c.aN(y,w))a.preventDefault()}},"$1","gee",4,0,5],
hr:[function(a){var z,y,x
H.i(a,"$isao")
this.au(a)
z=this.ag(a)
if(this.x){y=this.aH(a)
if(this.d.aM(z,y))a.preventDefault()
return}if(this.r)return
x=this.aj(a)
if(this.c.aM(z,x))a.preventDefault()},"$1","gel",4,0,5],
hk:[function(a){var z,y,x,w
H.i(a,"$isao")
z=this.a
if(!(z&&C.k).gb0(z).cG(0,new P.bI(a.clientX,a.clientY,[P.Q]))){this.au(a)
y=this.ag(a)
if(this.x){x=this.aH(a)
if(this.d.aM(y,x))a.preventDefault()
return}if(this.r)return
w=this.aj(a)
if(this.c.aM(y,w))a.preventDefault()}},"$1","ged",4,0,5],
ht:[function(a){var z,y
H.i(a,"$isbr")
this.au(a)
z=new V.N((a&&C.q).gfk(a),C.q.gfl(a)).A(0,180)
if(this.x){if(this.d.fN(z))a.preventDefault()
return}if(this.r)return
y=this.aj(a)
if(this.c.fO(z,y))a.preventDefault()},"$1","gen",4,0,37],
hu:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ag(this.y)
v=this.aj(this.y)
this.d.ej(w,v,x)}},"$1","geo",4,0,4],
hA:[function(a){var z
H.i(a,"$isaQ")
this.a.focus()
this.f=!0
this.bA(a)
z=this.bw(a)
if(this.e.fL(z))a.preventDefault()},"$1","gew",4,0,10],
hy:[function(a){var z
H.i(a,"$isaQ")
this.bA(a)
z=this.bw(a)
if(this.e.fJ(z))a.preventDefault()},"$1","geu",4,0,10],
hz:[function(a){var z
H.i(a,"$isaQ")
this.bA(a)
z=this.bw(a)
if(this.e.fK(z))a.preventDefault()},"$1","gev",4,0,10]}}],["","",,D,{"^":"",bX:{"^":"a;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z},
ao:[function(a){var z
H.i(a,"$isn")
z=this.d
if(!(z==null))z.w(a)},function(){return this.ao(null)},"h5","$1","$0","gdF",0,2,0],
$isV:1,
$isas:1},V:{"^":"a;",$isas:1},fA:{"^":"ar;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.E()
this.Q=z}return z},
ao:function(a){var z=this.Q
if(!(z==null))z.w(a)},
ei:[function(a){var z
H.i(a,"$isn")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.ei(null)},"hp","$1","$0","gcr",0,2,0],
hv:[function(a){var z,y,x
H.y(a,"$isf",[D.V],"$asf")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.dR(x))return!1}return!0},"$1","geq",4,0,33],
hd:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.y(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcr(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.i(b[u],"$isV")
if(t instanceof D.bX)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aL()
s.a=H.e([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.c1(a,b,this,[z])
z.b=!0
this.ao(z)},"$2","ge6",8,0,17],
hx:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.y(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcr(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.i(b[u],"$isV")
if(t instanceof D.bX)C.a.T(this.e,t)
s=t.d
if(s==null){s=new D.aL()
s.a=H.e([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.T(s.a,x)}z=new D.c2(a,b,this,[z])
z.b=!0
this.ao(z)},"$2","ges",8,0,17],
dR:function(a){var z=C.a.aJ(this.e,a)
return z},
$asf:function(){return[D.V]},
$asar:function(){return[D.V]}},h8:{"^":"a;",$isV:1,$isas:1},hv:{"^":"a;",$isV:1,$isas:1},hE:{"^":"a;",$isV:1,$isas:1},hF:{"^":"a;",$isV:1,$isas:1},hG:{"^":"a;",$isV:1,$isas:1}}],["","",,V,{"^":"",
kr:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","fX",8,0,32],
kg:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.dn(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.h.a2("null",c)
return C.h.a2(C.j.dh($.l.$2(a,0)?0:a,b),c+b+1)},
aZ:function(a,b,c){var z,y,x,w,v,u
H.y(a,"$isd",[P.v],"$asd")
z=H.e([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.k(z,u)
C.a.a_(z,u,C.h.a2(z[u],x))}return z},
d2:function(a,b){return C.j.h1(Math.pow(b,C.w.bT(Math.log(H.jJ(a))/Math.log(b))))},
Z:{"^":"a;a,b,c",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
bU:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bU))return!1
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
dD:{"^":"a;a,b,c,d,e,f,r,x,y",
a3:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dD))return!1
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
y=V.aZ(H.e([this.a,this.d,this.r],z),3,0)
x=V.aZ(H.e([this.b,this.e,this.x],z),3,0)
w=V.aZ(H.e([this.c,this.f,this.y],z),3,0)
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
al:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a3:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
d4:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.l.$2(a2,0))return V.bG()
a3=1/a2
a4=-w
a5=-i
return V.am((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.am(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
c3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.J(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.at(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
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
i:function(a){return this.F()},
d2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.aZ(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.aZ(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.aZ(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.aZ(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
v:function(a){return this.d2(a,3,0)},
F:function(){return this.d2("",3,0)},
t:{
am:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bG:function(){return V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dE:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.D(c)))
y=b.aK(z)
x=y.A(0,Math.sqrt(y.D(y)))
w=z.aK(x)
v=new V.J(a.a,a.b,a.c)
return V.am(x.a,w.a,z.a,x.H(0).D(v),x.b,w.b,z.b,w.H(0).D(v),x.c,w.c,z.c,z.H(0).D(v),0,0,0,1)}}},
T:{"^":"a;n:a>,p:b>",
G:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
at:{"^":"a;n:a>,p:b>,c",
G:function(a,b){return new V.at(this.a-b.a,this.b-b.b,this.c-b.c)},
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
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
dI:{"^":"a;n:a>,p:b>,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dI))return!1
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
dK:{"^":"a;n:a>,p:b>,c,d",
gZ:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dK))return!1
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
dL:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dK(a,b,c,d)}}},
N:{"^":"a;a,b",
fu:[function(a){return Math.sqrt(this.D(this))},"$0","gk",1,0,18],
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
return new V.N(z*b,y*b)},
A:function(a,b){var z,y
if($.l.$2(b,0))return new V.N(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.N(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
J:{"^":"a;a,b,c",
fu:[function(a){return Math.sqrt(this.D(this))},"$0","gk",1,0,18],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bV:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.J(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aK:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.J(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.J(-this.a,-this.b,-this.c)},
A:function(a,b){if($.l.$2(b,0))return new V.J(0,0,0)
return new V.J(this.a/b,this.b/b,this.c/b)},
d5:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
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
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}}],["","",,U,{"^":"",f7:{"^":"de;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bk:function(a){var z=V.kg(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.w(a)},
sc4:function(a,b){},
sbY:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bk(z)}z=new D.G("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.I(z)}},
sc_:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bk(z)}z=new D.G("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.I(z)}},
sY:function(a,b){var z,y
b=this.bk(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.G("location",y,b,this,[P.v])
z.b=!0
this.I(z)}},
sbZ:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.G("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.I(z)}},
sK:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.G("velocity",x,a,this,[P.v])
z.b=!0
this.I(z)}},
sbK:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.G("dampening",y,a,this,[P.v])
z.b=!0
this.I(z)}},
ae:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sY(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sK(y)}},
t:{
cm:function(){var z=new U.f7()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dg:{"^":"a5;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
aF:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dg))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
t:{
dh:function(a){var z=new U.dg()
z.a=a
return z}}},ds:{"^":"ar;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
I:[function(a){var z
H.i(a,"$isn")
z=this.e
if(!(z==null))z.w(a)},function(){return this.I(null)},"a4","$1","$0","gas",0,2,0],
hc:[function(a,b){var z,y,x,w,v,u,t
z=U.a5
H.y(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gas(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.I(z)},"$2","ge5",8,0,19],
hw:[function(a,b){var z,y,x,w,v,u,t
z=U.a5
H.y(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gas(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.b(x,w)
C.a.T(t.a,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.I(z)},"$2","ger",8,0,19],
aF:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a8()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aj(z,z.length,0,[H.z(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aF(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.bG():x
z=this.e
if(!(z==null))z.am(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ds))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.k(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.k(w,y)
if(!J.S(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asf:function(){return[U.a5]},
$asar:function(){return[U.a5]},
$isa5:1},a5:{"^":"de;"},i0:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
I:[function(a){var z
H.i(a,"$isn")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.I(null)},"a4","$1","$0","gas",0,2,0],
aI:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcI()
z.toString
y={func:1,ret:-1,args:[D.n]}
x=H.b(this.gbr(),y)
C.a.h(z.a,x)
x=this.a.c.gd6()
x.toString
z=H.b(this.gbs(),y)
C.a.h(x.a,z)
z=this.a.c.gbg()
z.toString
y=H.b(this.gbt(),y)
C.a.h(z.a,y)
return!0},
e1:[function(a){H.i(a,"$isn")
if(!J.S(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbr",4,0,1],
e2:[function(a){var z,y,x,w,v,u,t
a=H.c(H.i(a,"$isn"),"$isbd")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.N(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.N(y.a,y.b).l(0,2).A(0,z.gZ())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sK(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.N(x.a,x.b).l(0,2).A(0,z.gZ())
x=this.b
v=w.a
if(typeof v!=="number")return v.H()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
this.b.sK(0)
y=y.G(0,a.z)
this.Q=new V.N(y.a,y.b).l(0,2).A(0,z.gZ())}this.a4()},"$1","gbs",4,0,1],
e3:[function(a){var z,y,x
H.i(a,"$isn")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sK(y*10*x)
this.a4()}},"$1","gbt",4,0,1],
aF:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a8()
if(z<y){this.ch=y
x=b.y
this.b.ae(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.am(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa5:1},i1:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.E()
this.fx=z}return z},
I:[function(a){var z
H.i(a,"$isn")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.I(null)},"a4","$1","$0","gas",0,2,0],
aI:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcI()
z.toString
y={func:1,ret:-1,args:[D.n]}
x=H.b(this.gbr(),y)
C.a.h(z.a,x)
x=this.a.c.gd6()
x.toString
z=H.b(this.gbs(),y)
C.a.h(x.a,z)
z=this.a.c.gbg()
z.toString
x=H.b(this.gbt(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.E()
x.f=z}x=H.b(this.gdZ(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.ge_(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.E()
x.b=z}x=H.b(this.geO(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.geN(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.E()
x.c=z}y=H.b(this.geM(),y)
C.a.h(z.a,y)
return!0},
ab:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.N(z,y)},
e1:[function(a){a=H.c(H.i(a,"$isn"),"$isbd")
if(!J.S(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbr",4,0,1],
e2:[function(a){var z,y,x,w,v,u,t
a=H.c(H.i(a,"$isn"),"$isbd")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.N(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ab(new V.N(y.a,y.b).l(0,2).A(0,z.gZ()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sK(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sK(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ab(new V.N(x.a,x.b).l(0,2).A(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.G(0,a.z)
this.dx=this.ab(new V.N(y.a,y.b).l(0,2).A(0,z.gZ()))}this.a4()},"$1","gbs",4,0,1],
e3:[function(a){var z,y,x
H.i(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sK(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sK(-y*10*z)
this.a4()}},"$1","gbt",4,0,1],
h9:[function(a){if(H.c(H.i(a,"$isn"),"$isdB").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gdZ",4,0,1],
ha:[function(a){var z,y,x,w,v,u,t
a=H.c(H.i(a,"$isn"),"$isbd")
if(!J.S(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ab(new V.N(x.a,x.b).l(0,2).A(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.G(0,a.z)
this.dx=this.ab(new V.N(y.a,y.b).l(0,2).A(0,z.gZ()))
this.a4()},"$1","ge_",4,0,1],
hE:[function(a){H.i(a,"$isn")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geO",4,0,1],
hD:[function(a){var z,y,x,w,v,u,t
a=H.c(H.i(a,"$isn"),"$isdX")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.N(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ab(new V.N(y.a,y.b).l(0,2).A(0,z.gZ()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sK(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sK(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ab(new V.N(x.a,x.b).l(0,2).A(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.G(0,a.z)
this.dx=this.ab(new V.N(y.a,y.b).l(0,2).A(0,z.gZ()))}this.a4()},"$1","geN",4,0,1],
hC:[function(a){var z,y,x
H.i(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sK(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sK(-y*10*z)
this.a4()}},"$1","geM",4,0,1],
aF:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a8()
if(z<y){this.dy=y
x=b.y
this.c.ae(0,x)
this.b.ae(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.am(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.am(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa5:1},i2:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.E()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.w(a)},
aI:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.E()
z.e=y
z=y}else z=y
y=H.b(this.ge4(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.E()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hb:[function(a){var z,y,x,w
H.i(a,"$isn")
if(!J.S(this.b,this.a.b.c))return
H.c(a,"$iscA")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.G("zoom",z,w,this,[P.v])
z.b=!0
this.I(z)}},"$1","ge4",4,0,1],
aF:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.am(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa5:1}}],["","",,M,{"^":"",fl:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ap:[function(a){var z
H.i(a,"$isn")
z=this.x
if(!(z==null))z.w(a)},function(){return this.ap(null)},"h6","$1","$0","gaa",0,2,0],
hh:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aF
H.y(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gaa(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gV()==null){s=new D.aL()
s.a=H.e([],v)
s.c=0
t.sV(s)}s=t.gV()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","gea",8,0,7],
hi:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aF
H.y(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gaa(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gV()==null){s=new D.aL()
s.a=H.e([],v)
s.c=0
t.sV(s)}s=t.gV()
s.toString
H.b(x,w)
C.a.T(s.a,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","geb",8,0,7],
sdf:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.b(this.gaa(),{func:1,ret:-1,args:[D.n]})
C.a.T(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gu()
z.toString
y=H.b(this.gaa(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G("technique",x,this.c,this,[O.cH])
z.b=!0
this.ap(z)}},
gu:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
aE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof x!=="number")return H.p(x)
u=C.f.a7(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.f.a7(v.b*w)
s=C.f.a7(v.c*x)
a.c=s
v=C.f.a7(v.d*w)
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
s.dc(V.am(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dH
if(y==null){y=V.dE(new V.at(0,0,0),new V.J(0,1,0),new V.J(0,0,-1))
$.dH=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.l(0,m)}a.db.dc(m)
z=this.c
if(z!=null)z.ae(0,a)
for(z=this.d.a,z=new J.aj(z,z.length,0,[H.z(z,0)]);z.E();)z.d.ae(0,a)
for(z=this.d.a,z=new J.aj(z,z.length,0,[H.z(z,0)]);z.E();)z.d.aE(a)
this.a.toString
a.cy.c1()
a.db.c1()
this.b.toString
a.da()},
$islx:1}}],["","",,A,{"^":"",d6:{"^":"a;a,b,c"},eY:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fo:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fm:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},fR:{"^":"dM;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aA,0ak,0aB,0b1,0cJ,0cK,0b2,0b3,0cL,0cM,0b4,0b5,0cN,0cO,0b6,0cP,0cQ,0b7,0cR,0cS,0b8,0b9,0ba,0cT,0cU,0bb,0bc,0cV,0cW,0bd,0cX,0bN,0cY,0bO,0cZ,0bP,0d_,0bQ,0d0,0bR,0d1,0bS,a,b,0c,0d,0e,0f,0r",
dw:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.eR(z)
a2.eY(z)
a2.eS(z)
a2.f5(z)
a2.f6(z)
a2.f_(z)
a2.fa(z)
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
v.eV(z)
v.eQ(z)
v.eT(z)
v.eW(z)
v.f3(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.f1(z)
v.f2(z)}v.eZ(z)
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
p=H.e([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.U(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.eU(z)
v.f0(z)
v.f4(z)
v.f7(z)
v.f8(z)
v.f9(z)
v.eX(z)}r=z.a+="// === Main ===\n"
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
o=H.e([],[P.o])
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
n="vec4("+C.a.U(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.co(x.charCodeAt(0)==0?x:x,35633)
this.d=this.co(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.eI(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.q(P.r("Failed to link shader: "+H.h(m)))}this.eI()
this.eJ()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.c(this.r.m(0,"invViewMat"),"$isau")
if(y)this.db=H.c(this.r.m(0,"objMat"),"$isau")
if(w)this.dx=H.c(this.r.m(0,"viewObjMat"),"$isau")
this.fr=H.c(this.r.m(0,"projViewObjMat"),"$isau")
if(a2.x2)this.go=H.c(this.r.m(0,"txt2DMat"),"$iscL")
if(a2.y1)this.id=H.c(this.r.m(0,"txtCubeMat"),"$isau")
if(a2.y2)this.k1=H.c(this.r.m(0,"colorMat"),"$isau")
this.k3=H.e([],[A.au])
y=a2.aA
if(y>0){this.k2=H.i(this.r.m(0,"bendMatCount"),"$isD")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.q(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.c(k,"$isau"))}}y=a2.a
if(y!==C.b){this.k4=H.c(this.r.m(0,"emissionClr"),"$isC")
switch(y){case C.b:break
case C.e:break
case C.c:this.r1=H.c(this.r.m(0,"emissionTxt"),"$isab")
this.rx=H.c(this.r.m(0,"nullEmissionTxt"),"$isD")
break
case C.d:this.r2=H.c(this.r.m(0,"emissionTxt"),"$isac")
this.rx=H.c(this.r.m(0,"nullEmissionTxt"),"$isD")
break}}y=a2.b
if(y!==C.b){this.ry=H.c(this.r.m(0,"ambientClr"),"$isC")
switch(y){case C.b:break
case C.e:break
case C.c:this.x1=H.c(this.r.m(0,"ambientTxt"),"$isab")
this.y1=H.c(this.r.m(0,"nullAmbientTxt"),"$isD")
break
case C.d:this.x2=H.c(this.r.m(0,"ambientTxt"),"$isac")
this.y1=H.c(this.r.m(0,"nullAmbientTxt"),"$isD")
break}}y=a2.c
if(y!==C.b){this.y2=H.c(this.r.m(0,"diffuseClr"),"$isC")
switch(y){case C.b:break
case C.e:break
case C.c:this.aA=H.c(this.r.m(0,"diffuseTxt"),"$isab")
this.aB=H.c(this.r.m(0,"nullDiffuseTxt"),"$isD")
break
case C.d:this.ak=H.c(this.r.m(0,"diffuseTxt"),"$isac")
this.aB=H.c(this.r.m(0,"nullDiffuseTxt"),"$isD")
break}}y=a2.d
if(y!==C.b){this.b1=H.c(this.r.m(0,"invDiffuseClr"),"$isC")
switch(y){case C.b:break
case C.e:break
case C.c:this.cJ=H.c(this.r.m(0,"invDiffuseTxt"),"$isab")
this.b2=H.c(this.r.m(0,"nullInvDiffuseTxt"),"$isD")
break
case C.d:this.cK=H.c(this.r.m(0,"invDiffuseTxt"),"$isac")
this.b2=H.c(this.r.m(0,"nullInvDiffuseTxt"),"$isD")
break}}y=a2.e
if(y!==C.b){this.b5=H.c(this.r.m(0,"shininess"),"$isU")
this.b3=H.c(this.r.m(0,"specularClr"),"$isC")
switch(y){case C.b:break
case C.e:break
case C.c:this.cL=H.c(this.r.m(0,"specularTxt"),"$isab")
this.b4=H.c(this.r.m(0,"nullSpecularTxt"),"$isD")
break
case C.d:this.cM=H.c(this.r.m(0,"specularTxt"),"$isac")
this.b4=H.c(this.r.m(0,"nullSpecularTxt"),"$isD")
break}}switch(a2.f){case C.b:break
case C.e:break
case C.c:this.cN=H.c(this.r.m(0,"bumpTxt"),"$isab")
this.b6=H.c(this.r.m(0,"nullBumpTxt"),"$isD")
break
case C.d:this.cO=H.c(this.r.m(0,"bumpTxt"),"$isac")
this.b6=H.c(this.r.m(0,"nullBumpTxt"),"$isD")
break}if(a2.dy){this.cP=H.c(this.r.m(0,"envSampler"),"$isac")
this.cQ=H.c(this.r.m(0,"nullEnvTxt"),"$isD")
y=a2.r
if(y!==C.b){this.b7=H.c(this.r.m(0,"reflectClr"),"$isC")
switch(y){case C.b:break
case C.e:break
case C.c:this.cR=H.c(this.r.m(0,"reflectTxt"),"$isab")
this.b8=H.c(this.r.m(0,"nullReflectTxt"),"$isD")
break
case C.d:this.cS=H.c(this.r.m(0,"reflectTxt"),"$isac")
this.b8=H.c(this.r.m(0,"nullReflectTxt"),"$isD")
break}}y=a2.x
if(y!==C.b){this.b9=H.c(this.r.m(0,"refraction"),"$isU")
this.ba=H.c(this.r.m(0,"refractClr"),"$isC")
switch(y){case C.b:break
case C.e:break
case C.c:this.cT=H.c(this.r.m(0,"refractTxt"),"$isab")
this.bb=H.c(this.r.m(0,"nullRefractTxt"),"$isD")
break
case C.d:this.cU=H.c(this.r.m(0,"refractTxt"),"$isac")
this.bb=H.c(this.r.m(0,"nullRefractTxt"),"$isD")
break}}}y=a2.y
if(y!==C.b){this.bc=H.c(this.r.m(0,"alpha"),"$isU")
switch(y){case C.b:break
case C.e:break
case C.c:this.cV=H.c(this.r.m(0,"alphaTxt"),"$isab")
this.bd=H.c(this.r.m(0,"nullAlphaTxt"),"$isD")
break
case C.d:this.cW=H.c(this.r.m(0,"alphaTxt"),"$isac")
this.bd=H.c(this.r.m(0,"nullAlphaTxt"),"$isD")
break}}this.bN=H.e([],[A.e8])
this.bO=H.e([],[A.e9])
this.bP=H.e([],[A.ea])
this.bQ=H.e([],[A.eb])
this.bR=H.e([],[A.ec])
this.bS=H.e([],[A.ed])
if(a2.k2){y=a2.z
if(y>0){this.cX=H.i(this.r.m(0,"dirLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isC")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isC")
x=this.bN;(x&&C.a).h(x,new A.e8(l,k,j))}}y=a2.Q
if(y>0){this.cY=H.i(this.r.m(0,"pntLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isC")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isC")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isC")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isU")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isU")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isU")
x=this.bO;(x&&C.a).h(x,new A.e9(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.cZ=H.i(this.r.m(0,"spotLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isC")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isC")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isC")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isC")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isU")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isU")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isU")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isU")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(c,"$isU")
x=this.bP;(x&&C.a).h(x,new A.ea(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.d_=H.i(this.r.m(0,"txtDirLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isC")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isC")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isC")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isC")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isC")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isD")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isab")
x=this.bQ;(x&&C.a).h(x,new A.eb(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.d0=H.i(this.r.m(0,"txtPntLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isC")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isC")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$iscL")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isC")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isD")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isU")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isU")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isU")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(c,"$isac")
x=this.bR;(x&&C.a).h(x,new A.ec(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.d1=H.i(this.r.m(0,"txtSpotLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isC")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isC")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isC")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isC")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isC")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isD")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isC")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isU")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(c,"$isU")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(b,"$isU")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a,"$isU")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a0,"$isU")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a1,"$isab")
x=this.bS;(x&&C.a).h(x,new A.ed(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a5:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dr(c)
b.a.uniform1i(b.d,0)}},
a0:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
fQ:function(a,b){var z,y
z=a.ak
y=new A.fR(b,z)
y.dA(b,z)
y.dw(a,b)
return y}}},fU:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aA,ak,aB",
eR:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aA+"];\n"
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
eY:function(a){var z
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
eS:function(a){var z
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
f5:function(a){var z,y
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
f6:function(a){var z,y
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
f_:function(a){var z
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
fa:function(a){var z
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
z+="uniform int null"+(c[0].toUpperCase()+C.h.c9(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
eV:function(a){var z,y
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
eQ:function(a){var z,y
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
eT:function(a){var z,y
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
eW:function(a){var z,y
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
f3:function(a){var z,y
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
eZ:function(a){var z,y
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
f1:function(a){var z,y
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
f2:function(a){var z,y
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
eU:function(a){var z,y
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
f0:function(a){var z,y
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
f4:function(a){var z,y
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
f7:function(a){var z,y,x
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
f8:function(a){var z,y,x
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
f9:function(a){var z,y,x
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
eX:function(a){var z
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
i:function(a){return this.ak}},e8:{"^":"a;a,b,c"},eb:{"^":"a;a,b,c,d,e,f,r,x"},e9:{"^":"a;a,b,c,d,e,f,r"},ec:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ea:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ed:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dM:{"^":"cg;",
dA:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
co:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eI(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.j(P.r("Error compiling shader '"+H.h(y)+"': "+H.h(x)))}return y},
eI:function(){var z,y,x,w,v,u
z=H.e([],[A.d6])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.d6(y,v.name,u))}this.f=new A.eY(z)},
eJ:function(){var z,y,x,w,v,u
z=H.e([],[A.a2])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fj(v.type,v.size,v.name,u))}this.r=new A.hU(z)},
ar:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.D(z,y,b,c)
else return A.cK(z,y,b,a,c)},
dT:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ab(z,y,b,c)
else return A.cK(z,y,b,a,c)},
dU:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ac(z,y,b,c)
else return A.cK(z,y,b,a,c)},
aZ:function(a,b){return new P.ek(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
fj:function(a,b,c,d){switch(a){case 5120:return this.ar(b,c,d)
case 5121:return this.ar(b,c,d)
case 5122:return this.ar(b,c,d)
case 5123:return this.ar(b,c,d)
case 5124:return this.ar(b,c,d)
case 5125:return this.ar(b,c,d)
case 5126:return new A.U(this.a,this.e,c,d)
case 35664:return new A.hP(this.a,this.e,c,d)
case 35665:return new A.C(this.a,this.e,c,d)
case 35666:return new A.hS(this.a,this.e,c,d)
case 35667:return new A.hQ(this.a,this.e,c,d)
case 35668:return new A.hR(this.a,this.e,c,d)
case 35669:return new A.hT(this.a,this.e,c,d)
case 35674:return new A.hW(this.a,this.e,c,d)
case 35675:return new A.cL(this.a,this.e,c,d)
case 35676:return new A.au(this.a,this.e,c,d)
case 35678:return this.dT(b,c,d)
case 35680:return this.dU(b,c,d)
case 35670:throw H.j(this.aZ("BOOL",c))
case 35671:throw H.j(this.aZ("BOOL_VEC2",c))
case 35672:throw H.j(this.aZ("BOOL_VEC3",c))
case 35673:throw H.j(this.aZ("BOOL_VEC4",c))
default:throw H.j(P.r("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}},bV:{"^":"a;a,b",
i:function(a){return this.b}},a2:{"^":"a;"},hU:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.j(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.F()},
fp:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.fp("\n")}},D:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1i: "+H.h(this.c)}},hQ:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2i: "+H.h(this.c)}},hR:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3i: "+H.h(this.c)}},hT:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4i: "+H.h(this.c)}},hO:{"^":"a2;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.h(this.c)},
t:{
cK:function(a,b,c,d,e){var z=new A.hO(a,b,c,e)
z.f=d
z.e=P.fI(d,0,!1,P.O)
return z}}},U:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1f: "+H.h(this.c)}},hP:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2f: "+H.h(this.c)}},C:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3f: "+H.h(this.c)}},hS:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4f: "+H.h(this.c)}},hW:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}},cL:{"^":"a2;a,b,c,d",
a9:function(a){var z=new Float32Array(H.bv(H.y(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.h(this.c)}},au:{"^":"a2;a,b,c,d",
a9:function(a){var z=new Float32Array(H.bv(H.y(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.h(this.c)}},ab:{"^":"a2;a,b,c,d",
dr:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.h(this.c)}},ac:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}}],["","",,F,{"^":"",
c7:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bu:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.d=y}l=F.c7(y)
k=F.c7(z.b)
j=F.kd(d,e,new F.jy(z,F.c7(z.c),F.c7(z.d),k,l,c),b)
if(j!=null)a.fB(j)},
kd:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aR,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.dO()
y=H.e([],[F.aR])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cN(null,null,new V.bU(u,0,0,1),null,null,new V.T(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bJ(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cN(null,null,new V.bU(o,n,m,1),null,null,new V.T(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bJ(d))}}z.d.fb(a+1,b+1,y)
return z},
jy:{"^":"u:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bV(z.b,b).bV(z.d.bV(z.c,b),c)
z=new V.at(y.a,y.b,y.c)
if(!J.S(a.f,z)){a.f=z
z=a.a
if(z!=null)z.X()}a.sh_(y.A(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
x=new V.dI(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.S(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.X()}}},
ah:{"^":"a;0a,0b,0c,0d,0e",
gbM:function(){return this.a==null||this.b==null||this.c==null},
dM:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.J(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.d5())return
return v.A(0,Math.sqrt(v.D(v)))},
dO:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.J(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.D(z)))
z=w.G(0,y)
z=new V.J(z.a,z.b,z.c)
z=v.aK(z.A(0,Math.sqrt(z.D(z))))
return z.A(0,Math.sqrt(z.D(z)))},
bI:function(){if(this.d!=null)return!0
var z=this.dM()
if(z==null){z=this.dO()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
dL:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.J(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.d5())return
return v.A(0,Math.sqrt(v.D(v)))},
dN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.G(0,u)
z=new V.J(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.H(0)}else{l=(z-q.b)/n
z=r.G(0,u)
z=new V.at(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).G(0,x)
z=new V.J(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.D(z)))
z=k.aK(m)
z=z.A(0,Math.sqrt(z.D(z))).aK(k)
m=z.A(0,Math.sqrt(z.D(z)))}return m},
bG:function(){if(this.e!=null)return!0
var z=this.dL()
if(z==null){z=this.dN()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z,y
if(this.gbM())return a+"disposed"
z=a+C.h.a2(J.a3(this.a.e),0)+", "+C.h.a2(J.a3(this.b.e),0)+", "+C.h.a2(J.a3(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
F:function(){return this.v("")},
t:{
bC:function(a,b,c){var z,y,x
z=new F.ah()
y=a.a
if(y==null)H.q(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.r("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
cw:{"^":"a;0a,0b",
gbM:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){if(this.gbM())return a+"disposed"
return a+C.h.a2(J.a3(this.a.e),0)+", "+C.h.a2(J.a3(this.b.e),0)},
F:function(){return this.v("")}},
cC:{"^":"a;0a",
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a2(J.a3(z.e),0)},
F:function(){return this.v("")}},
dN:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
fB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.R()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fi())}this.a.R()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cC()
if(r.a==null)H.q(P.r("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.w(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.R()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cw()
s=p.a
if(s==null)H.q(P.r("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.q(P.r("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.w(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.R()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.R()
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
F.bC(p,o,l)}z=this.e
if(!(z==null))z.am(0)},
av:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.av()||!1
if(!this.a.av())y=!1
z=this.e
if(!(z==null))z.am(0)
return y},
fe:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ay()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$ax().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$bp().a)!==0)++w
if((x&$.$get$bq().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$av().a)!==0)++w
v=b.gc8(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.d9])
for(r=0,q=0;q<w;++q){p=b.fc(q)
o=p.gc8(p)
C.a.a_(s,q,new Z.d9(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.k(y,n)
m=y[n].fv(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a_(t,l,m[k]);++l}}r+=o}H.y(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bv(t)),35044)
y.bindBuffer(34962,null)
i=new Z.da(new Z.ei(34962,j),s,b)
i.b=H.e([],[Z.c0])
if(this.b.b.length!==0){x=P.O
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.R()
C.a.h(h,g.e)}f=Z.cO(y,34963,H.y(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c0(0,h.length,f))}if(this.c.b.length!==0){x=P.O
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.R()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.R()
C.a.h(h,g.e)}f=Z.cO(y,34963,H.y(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c0(1,h.length,f))}if(this.d.b.length!==0){x=P.O
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.R()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.R()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].c
g.a.a.R()
C.a.h(h,g.e)}f=Z.cO(y,34963,H.y(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c0(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.U(z,"\n")},
a6:function(a){var z=this.e
if(!(z==null))z.w(a)},
X:function(){return this.a6(null)},
t:{
dO:function(){var z,y
z=new F.dN()
y=new F.i3(z)
y.b=!1
y.c=H.e([],[F.aR])
z.a=y
y=new F.hu(z)
y.b=H.e([],[F.cC])
z.b=y
y=new F.ht(z)
y.b=H.e([],[F.cw])
z.c=y
y=new F.hs(z)
y.b=H.e([],[F.ah])
z.d=y
z.e=null
return z}}},
hs:{"^":"a;a,0b",
fb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.y(c,"$isd",[F.aR],"$asd")
z=H.e([],[F.ah])
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
C.a.h(z,F.bC(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bC(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bC(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bC(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
av:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bI())x=!1
return x},
bH:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bG())x=!1
return x},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.e([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.U(z,"\n")},
F:function(){return this.v("")}},
ht:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.e([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.k(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.U(z,"\n")},
F:function(){return this.v("")}},
hu:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.e([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.U(z,"\n")},
F:function(){return this.v("")}},
aR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bJ:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cN(this.cx,x,u,z,y,w,v,a,t)},
fi:function(){return this.bJ(null)},
sh_:function(a){var z
if(!J.S(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
fv:function(a){var z,y
z=J.H(a)
if(z.q(a,$.$get$ay())){z=this.f
y=[P.v]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$ax())){z=this.r
y=[P.v]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aw())){z=this.x
y=[P.v]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$az())){z=this.y
y=[P.v]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.q(a,$.$get$aA())){z=this.z
y=[P.v]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bp())){z=this.Q
y=[P.v]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bq())){z=this.Q
y=[P.v]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$aT()))return H.e([this.ch],[P.v])
else if(z.q(a,$.$get$av())){z=this.cx
y=[P.v]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.v])},
bI:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.J(0,0,0)
this.d.J(0,new F.ia(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.am(0)}return!0},
bG:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.J(0,0,0)
this.d.J(0,new F.i9(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.am(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z,y,x
z=H.e([],[P.o])
C.a.h(z,C.h.a2(J.a3(this.e),0))
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
x=C.a.U(z,", ")
return a+"{"+x+"}"},
F:function(){return this.v("")},
t:{
cN:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aR()
y=new F.i8(z)
y.b=H.e([],[F.cC])
z.b=y
y=new F.i7(z)
x=[F.cw]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.i4(z)
x=[F.ah]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$ef()
z.e=0
y=$.$get$ay()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ax().a)!==0?e:null
z.x=(x&$.$get$aw().a)!==0?b:null
z.y=(x&$.$get$az().a)!==0?f:null
z.z=(x&$.$get$aA().a)!==0?g:null
z.Q=(x&$.$get$eg().a)!==0?c:null
z.ch=(x&$.$get$aT().a)!==0?i:0
z.cx=(x&$.$get$av().a)!==0?a:null
return z}}},
ia:{"^":"u:8;a",
$1:function(a){var z,y
H.i(a,"$isah")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
i9:{"^":"u:8;a",
$1:function(a){var z,y
H.i(a,"$isah")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
i3:{"^":"a;a,0b,0c",
R:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.k(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.j(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.X()
return!0},
gk:function(a){return this.c.length},
av:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bI()
return!0},
bH:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bG()
return!0},
ff:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.S(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
this.R()
z=H.e([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.U(z,"\n")},
F:function(){return this.v("")}},
i4:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ah]})
C.a.J(this.b,b)
C.a.J(this.c,new F.i5(this,b))
C.a.J(this.d,new F.i6(this,b))},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.e([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.U(z,"\n")},
F:function(){return this.v("")}},
i5:{"^":"u:8;a,b",
$1:function(a){H.i(a,"$isah")
if(!J.S(a.a,this.a))this.b.$1(a)}},
i6:{"^":"u:8;a,b",
$1:function(a){var z
H.i(a,"$isah")
z=this.a
if(!J.S(a.a,z)&&!J.S(a.b,z))this.b.$1(a)}},
i7:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.e([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.U(z,"\n")},
F:function(){return this.v("")}},
i8:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.e([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.U(z,"\n")},
F:function(){return this.v("")}}}],["","",,O,{"^":"",fP:{"^":"cH;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.E()
this.dy=z}return z},
P:[function(a){var z
H.i(a,"$isn")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.P(null)},"dG","$1","$0","gaV",0,2,0],
eA:[function(a){H.i(a,"$isn")
this.a=null
this.P(a)},function(){return this.eA(null)},"hB","$1","$0","gez",0,2,0],
he:[function(a,b){var z=V.al
z=new D.c1(a,H.y(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.P(z)},"$2","ge7",8,0,20],
hf:[function(a,b){var z=V.al
z=new D.c2(a,H.y(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.P(z)},"$2","ge8",8,0,20],
cm:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.W(z.e.length+3,4)*4
x=C.f.W(z.f.length+3,4)*4
w=C.f.W(z.r.length+3,4)*4
v=C.f.W(z.x.length+3,4)*4
u=C.f.W(z.y.length+3,4)*4
t=C.f.W(z.z.length+3,4)*4
s=C.f.W(this.e.a.length+3,4)*4
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
a6=$.$get$ay()
if(c){z=$.$get$ax()
a6=new Z.aS(a6.a|z.a)}if(b){z=$.$get$aw()
a6=new Z.aS(a6.a|z.a)}if(a){z=$.$get$az()
a6=new Z.aS(a6.a|z.a)}if(a0){z=$.$get$aA()
a6=new Z.aS(a6.a|z.a)}if(a2){z=$.$get$av()
a6=new Z.aS(a6.a|z.a)}return new A.fU(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
L:function(a,b){H.y(a,"$isd",[T.cI],"$asd")
if(b!=null)if(!C.a.aJ(a,b)){b.a=a.length
C.a.h(a,b)}},
ae:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aj(z,z.length,0,[H.z(z,0)]);z.E();){y=z.d
x=new V.J(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.c3(x)}}},
fS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cm()
y=a.fr.j(0,z.ak)
if(y==null){y=A.fQ(z,a.a)
x=y.b
if(x.length===0)H.q(P.r("May not cache a shader with no name."))
if(a.fr.fh(0,x))H.q(P.r('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.a_(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aB
z=b.e
if(!(z instanceof Z.da)){b.e=null
z=null}if(z==null||!z.d.q(0,v)){z=w.r1
if(z)b.d.av()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.bH()
t.a.bH()
t=t.e
if(!(t==null))t.am(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.ff()
s=s.e
if(!(s==null))s.am(0)}q=b.d.fe(new Z.ib(a.a),v)
q.aC($.$get$ay()).e=this.a.y.c
if(z)q.aC($.$get$ax()).e=this.a.Q.c
if(u)q.aC($.$get$aw()).e=this.a.z.c
if(w.rx)q.aC($.$get$az()).e=this.a.ch.c
if(t)q.aC($.$get$aA()).e=this.a.cx.c
if(w.x1)q.aC($.$get$av()).e=this.a.cy.c
b.e=q}z=T.cI
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.fo()
if(w.fx){u=this.a
t=a.dx
t=t.gO(t)
u=u.db
u.toString
u.a9(t.a3(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gO(t)
s=a.dx
s=t.l(0,s.gO(s))
a.cx=s
t=s}u=u.dx
u.toString
u.a9(t.a3(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gfP()
s=a.dx
s=t.l(0,s.gO(s))
a.ch=s
t=s}u=u.fr
u.toString
u.a9(t.a3(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.a9(t.a3(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.a9(t.a3(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.a9(C.x.a3(t,!0))}if(w.aA>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.v],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.k(s,n)
s=s[n]
t.toString
H.i(s,"$isal")
t=t.k3
if(n>=t.length)return H.k(t,n)
t=t[n]
m=new Float32Array(H.bv(H.y(s.a3(0,!0),"$isd",u,"$asd")))
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
case C.c:this.L(p,this.f.d)
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
case C.d:this.L(p,this.f.e)
u=this.a
t=this.f.e
u.a0(u.r2,u.rx,t)
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
case C.c:this.L(p,this.r.d)
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
case C.d:this.L(p,this.r.e)
u=this.a
t=this.r.e
u.a0(u.x2,u.y1,t)
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
case C.c:this.L(p,this.x.d)
u=this.a
t=this.x.d
u.a5(u.aA,u.aB,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.L(p,this.x.e)
u=this.a
t=this.x.e
u.a0(u.ak,u.aB,t)
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
u=u.b1
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.L(p,this.y.d)
u=this.a
t=this.y.d
u.a5(u.cJ,u.b2,t)
t=this.a
u=this.y.f
t=t.b1
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.L(p,this.y.e)
u=this.a
t=this.y.e
u.a0(u.cK,u.b2,t)
t=this.a
u=this.y.f
t=t.b1
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.e:u=this.a
t=this.z.f
u=u.b3
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.b5
t.a.uniform1f(t.d,r)
break
case C.c:this.L(p,this.z.d)
u=this.a
t=this.z.d
u.a5(u.cL,u.b4,t)
t=this.a
u=this.z.f
t=t.b3
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b5
u.a.uniform1f(u.d,r)
break
case C.d:this.L(p,this.z.e)
u=this.a
t=this.z.e
u.a0(u.cM,u.b4,t)
t=this.a
u=this.z.f
t=t.b3
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b5
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.cX
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bN
if(k>=s.length)return H.k(s,k)
h=s[k]
s=l.c3(i.a)
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.cY
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bO
if(k>=s.length)return H.k(s,k)
h=s[k]
s=i.gaO(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gc5(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aS(i.gaO(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gac(i)
f=h.d
g=s.gbe()
r=s.gaT()
s=s.gb_()
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
u=this.a.cZ
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bP
if(k>=s.length)return H.k(s,k)
h=s[k]
s=i.gaO(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gc5(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbL(i).hI()
f=h.c
g=s.gax(s)
r=s.gay(s)
s=s.gaz()
f.a.uniform3f(f.d,g,r,s)
s=l.aS(i.gaO(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gac(i)
r=h.e
g=s.gbe()
f=s.gaT()
s=s.gb_()
r.a.uniform3f(r.d,g,f,s)
s=i.ghG()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghF()
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
u=this.a.d_
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
r=this.a.bQ
if(k>=r.length)return H.k(r,k)
h=r[k]
r=i.gaQ()
H.y(p,"$isd",s,"$asd")
if(!C.a.aJ(p,r)){r.saX(p.length)
C.a.h(p,r)}r=i.gbL(i)
g=h.d
f=r.gax(r)
e=r.gay(r)
r=r.gaz()
g.a.uniform3f(g.d,f,e,r)
r=i.gbg()
e=h.b
f=r.gax(r)
g=r.gay(r)
r=r.gaz()
e.a.uniform3f(e.d,f,g,r)
r=i.gaP(i)
g=h.c
f=r.gax(r)
e=r.gay(r)
r=r.gaz()
g.a.uniform3f(g.d,f,e,r)
r=l.c3(i.gbL(i))
e=r.a
f=r.b
g=r.c
g=r.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gac(i)
f=h.f
e=g.gbe()
r=g.gaT()
g=g.gb_()
f.a.uniform3f(f.d,e,r,g)
g=i.gaQ()
r=g.gbX(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gdY()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaX())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.d0
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.y,t=u.length,s=[P.v],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
g=this.a.bR
if(k>=g.length)return H.k(g,k)
h=g[k]
g=i.gaQ()
H.y(p,"$isd",r,"$asd")
if(!C.a.aJ(p,g)){g.saX(p.length)
C.a.h(p,g)}d=l.l(0,i.gO(i))
g=i.gO(i).aS(new V.at(0,0,0))
f=h.b
e=g.gn(g)
c=g.gp(g)
g=g.gc5(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aS(new V.at(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.d4(0)
c=h.d
m=new Float32Array(H.bv(H.y(new V.dD(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a3(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gac(i)
g=h.e
e=c.gbe()
f=c.gaT()
c=c.gb_()
g.a.uniform3f(g.d,e,f,c)
c=i.gaQ()
g=c.gbX(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gbX(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.ghH(c))
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
u=this.a.d1
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bS
if(k>=s.length)return H.k(s,k)
h=s[k]
s=i.gaQ()
H.y(p,"$isd",z,"$asd")
if(!C.a.aJ(p,s)){s.saX(p.length)
C.a.h(p,s)}s=i.gaO(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gc5(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbL(i)
f=h.c
g=s.gax(s)
r=s.gay(s)
s=s.gaz()
f.a.uniform3f(f.d,g,r,s)
s=i.gbg()
r=h.d
g=s.gax(s)
f=s.gay(s)
s=s.gaz()
r.a.uniform3f(r.d,g,f,s)
s=i.gaP(i)
f=h.e
g=s.gax(s)
r=s.gay(s)
s=s.gaz()
f.a.uniform3f(f.d,g,r,s)
s=l.aS(i.gaO(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaQ()
r=s.gbX(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gdY()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaX())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gac(i)
r=h.y
g=s.gbe()
f=s.gaT()
s=s.gb_()
r.a.uniform3f(r.d,g,f,s)
s=i.ghO()
f=h.z
f.a.uniform1f(f.d,s)
s=i.ghP()
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
case C.e:break
case C.c:this.L(p,this.Q.d)
z=this.a
u=this.Q.d
z.a5(z.cN,z.b6,u)
break
case C.d:this.L(p,this.Q.e)
z=this.a
u=this.Q.e
z.a0(z.cO,z.b6,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gO(u).d4(0)
a.Q=u}z=z.fy
z.toString
z.a9(u.a3(0,!0))}if(w.dy){this.L(p,this.ch)
z=this.a
u=this.ch
z.a0(z.cP,z.cQ,u)
switch(w.r){case C.b:break
case C.e:z=this.a
u=this.cx.f
z=z.b7
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.L(p,this.cx.d)
z=this.a
u=this.cx.d
z.a5(z.cR,z.b8,u)
u=this.a
z=this.cx.f
u=u.b7
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.L(p,this.cx.e)
z=this.a
u=this.cx.e
z.a0(z.cS,z.b8,u)
u=this.a
z=this.cx.f
u=u.b7
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.e:z=this.a
u=this.cy.f
z=z.ba
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.b9
u.a.uniform1f(u.d,s)
break
case C.c:this.L(p,this.cy.d)
z=this.a
u=this.cy.d
z.a5(z.cT,z.bb,u)
u=this.a
z=this.cy.f
u=u.ba
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b9
z.a.uniform1f(z.d,s)
break
case C.d:this.L(p,this.cy.e)
z=this.a
u=this.cy.e
z.a0(z.cU,z.bb,u)
u=this.a
z=this.cy.f
u=u.ba
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b9
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.e:z=this.a
t=this.db.f
z=z.bc
z.a.uniform1f(z.d,t)
break
case C.c:this.L(p,this.db.d)
z=this.a
t=this.db.d
z.a5(z.cV,z.bd,t)
t=this.a
z=this.db.f
t=t.bc
t.a.uniform1f(t.d,z)
break
case C.d:this.L(p,this.db.e)
z=this.a
t=this.db.e
z.a0(z.cW,z.bd,t)
t=this.a
z=this.db.f
t=t.bc
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.bE(a)
z.aE(a)
z.h4(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.fm()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cm().ak}},fS:{"^":"cy;0f,a,b,0c,0d,0e",
eD:function(a){var z,y
z=this.f
if(!$.l.$2(z,a)){y=this.f
this.f=a
z=new D.G(this.b,y,a,this,[P.v])
z.b=!0
this.a.P(z)}},
at:function(){this.cb()
this.eD(1)}},cy:{"^":"a;",
P:[function(a){this.a.P(H.i(a,"$isn"))},function(){return this.P(null)},"dG","$1","$0","gaV",0,2,0],
at:["cb",function(){}],
eG:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.b(this.gaV(),{func:1,ret:-1,args:[D.n]})
C.a.T(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.b(this.gaV(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G(this.b+".texture2D",x,this.d,this,[T.dU])
z.b=!0
this.a.P(z)}},
eH:function(a){},
sbf:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.at()
this.c=C.c
this.eH(null)
z=this.a
z.a=null
z.P(null)}this.eG(a)}},fT:{"^":"cy;a,b,0c,0d,0e"},aN:{"^":"cy;0f,a,b,0c,0d,0e",
cv:function(a){var z,y
if(!J.S(this.f,a)){z=this.f
this.f=a
y=new D.G(this.b+".color",z,a,this,[V.Z])
y.b=!0
this.a.P(y)}},
at:["bi",function(){this.cb()
this.cv(new V.Z(1,1,1))}],
sac:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.at()
z=this.a
z.a=null
z.P(null)}this.cv(b)}},fV:{"^":"aN;0ch,0f,a,b,0c,0d,0e",
eF:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.P(z)}},
at:function(){this.bi()
this.eF(1)}},fW:{"^":"aN;0ch,0f,a,b,0c,0d,0e",
by:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.P(z)}},
at:function(){this.bi()
this.by(100)}},cH:{"^":"a;"}}],["","",,T,{"^":"",cI:{"^":"cg;"},dU:{"^":"cI;0b,0c,0d,0e,0f,0r,0x,0y,a"},hC:{"^":"a;a,0b,0c,0d,0e",
fz:function(a,b,c,d,e){var z,y,x,w
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
w=new T.dU(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.E()
z=W.a4
W.W(x,"load",H.b(new T.hD(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
bW:function(a){return this.fz(a,!1,!1,!1,!1)},
eB:function(a,b,c){var z,y,x,w
b=V.d2(b,2)
z=V.d2(a.width,2)
y=V.d2(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.ck(null,null)
x.width=z
x.height=y
w=H.i(C.k.dl(x,"2d"),"$isdd")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.jN(w.getImageData(0,0,x.width,x.height))}}},hD:{"^":"u:21;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.eB(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.G.fY(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.fn()}++x.e}}}],["","",,X,{"^":"",dc:{"^":"a;",$isas:1},fr:{"^":"dS;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z}},h6:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
aG:[function(a){var z
H.i(a,"$isn")
z=this.e
if(!(z==null))z.w(a)},function(){return this.aG(null)},"h7","$1","$0","gcd",0,2,0],
saL:function(a){var z,y,x
if(!J.S(this.a,a)){z=this.a
if(z!=null){z=z.gu()
z.toString
y=H.b(this.gcd(),{func:1,ret:-1,args:[D.n]})
C.a.T(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gu()
z.toString
y=H.b(this.gcd(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G("mover",x,this.a,this,[U.a5])
z.b=!0
this.aG(z)}},
$isas:1,
$isdc:1},dS:{"^":"a;"}}],["","",,B,{"^":"",
k7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.eE(x,(x&&C.m).cg(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.a4
W.W(z,"scroll",H.b(new B.k8(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
k9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.y(b,"$isd",[P.o],"$asd")
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
u=W.ck(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.i(v.insertCell(-1),"$isbl")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.i(q.insertCell(-1),"$isbl").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;!1;++p){o=z.createElement("div")
if(p>=0)return H.k(b,p)
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.i(q.insertCell(-1),"$isbl")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.i(q.insertCell(-1),"$isbl")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.i(q.insertCell(-1),"$isbl").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.k7(a,y,!1,"../resources/SnowTop.png")},
ka:function(a){P.hK(C.u,new B.kb(a))},
k8:{"^":"u:21;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.h(-0.05*C.j.a7(this.b.scrollTop))+"px"
z.top=y}},
kb:{"^":"u:36;a",
$1:function(a){H.i(a,"$isaP")
P.d3(C.j.dh(this.a.gfq(),2)+" fps")}}}],["","",,E,{"^":"",
eO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
B.k9("Test 007",H.e([],[P.o]),"A test of the Material Lighting shader with bumpy 2D textures and a directional light. The lighting and bump is being applied to ambient, diffuse, and specular 2D texturing.")
z=document.getElementById("threeDart")
if(z==null)H.q(P.r("Failed to find an element with the identifier, threeDart."))
y=E.hI(z,!0,!0,!0,!1)
x=new E.aF()
x.a=""
x.b=!0
w=E.aF
v=O.cl(w)
x.y=v
v.aU(x.gfC(),x.gfE())
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
x.sc7(0,null)
x.saL(null)
u=F.dO()
F.bu(u,null,null,1,1,1,0,0,1)
F.bu(u,null,null,1,1,0,1,0,3)
F.bu(u,null,null,1,1,0,0,1,2)
F.bu(u,null,null,1,1,-1,0,0,0)
F.bu(u,null,null,1,1,0,-1,0,0)
F.bu(u,null,null,1,1,0,0,-1,3)
u.av()
x.sc7(0,u)
v=new U.ds()
t=U.a5
v.bj(t)
v.aU(v.ge5(),v.ger())
v.e=null
v.f=V.bG()
v.r=0
s=y.r
r=new U.i1()
q=U.cm()
q.sc4(0,!0)
q.sbY(6.283185307179586)
q.sc_(0)
q.sY(0,0)
q.sbZ(100)
q.sK(0)
q.sbK(0.5)
r.b=q
q=q.gu()
q.toString
p={func:1,ret:-1,args:[D.n]}
o=H.b(r.gas(),p)
C.a.h(q.a,o)
q=U.cm()
q.sc4(0,!0)
q.sbY(6.283185307179586)
q.sc_(0)
q.sY(0,0)
q.sbZ(100)
q.sK(0)
q.sbK(0.5)
r.c=q
C.a.h(q.gu().a,o)
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
n=new X.an(!1,!1,!1)
m=r.d
r.d=n
q=[X.an]
o=new D.G("modifiers",m,n,r,q)
o.b=!0
r.I(o)
o=r.f
if(o!==!1){r.f=!1
o=new D.G("invertX",o,!1,r,[P.a9])
o.b=!0
r.I(o)}o=r.r
if(o!==!0){r.r=!0
o=new D.G("invertY",o,!0,r,[P.a9])
o.b=!0
r.I(o)}r.aI(s)
v.h(0,r)
s=y.r
r=new U.i0()
o=U.cm()
o.sc4(0,!0)
o.sbY(6.283185307179586)
o.sc_(0)
o.sY(0,0)
o.sbZ(100)
o.sK(0)
o.sbK(0.2)
r.b=o
o=o.gu()
o.toString
l=H.b(r.gas(),p)
C.a.h(o.a,l)
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
n=new X.an(!0,!1,!1)
m=r.c
r.c=n
o=new D.G("modifiers",m,n,r,q)
o.b=!0
r.I(o)
r.aI(s)
v.h(0,r)
s=y.r
r=new U.i2()
r.c=0.01
r.d=0
r.e=0
n=new X.an(!1,!1,!1)
r.b=n
q=new D.G("modifiers",null,n,r,q)
q.b=!0
r.I(q)
r.aI(s)
v.h(0,r)
x.saL(v)
k=y.f.bW("../resources/ScrewColor.png")
j=new O.fP()
v=O.cl(V.al)
j.e=v
v.aU(j.ge7(),j.ge8())
v=new O.aN(j,"emission")
v.c=C.b
v.f=new V.Z(0,0,0)
j.f=v
v=new O.aN(j,"ambient")
v.c=C.b
v.f=new V.Z(0,0,0)
j.r=v
v=new O.aN(j,"diffuse")
v.c=C.b
v.f=new V.Z(0,0,0)
j.x=v
v=new O.aN(j,"invDiffuse")
v.c=C.b
v.f=new V.Z(0,0,0)
j.y=v
v=new O.fW(j,"specular")
v.c=C.b
v.f=new V.Z(0,0,0)
v.ch=100
j.z=v
v=new O.fT(j,"bump")
v.c=C.b
j.Q=v
j.ch=null
v=new O.aN(j,"reflect")
v.c=C.b
v.f=new V.Z(0,0,0)
j.cx=v
v=new O.fV(j,"refract")
v.c=C.b
v.f=new V.Z(0,0,0)
v.ch=1
j.cy=v
v=new O.fS(j,"alpha")
v.c=C.b
v.f=1
j.db=v
v=new D.fA()
v.bj(D.V)
v.e=H.e([],[D.bX])
v.f=H.e([],[D.h8])
v.r=H.e([],[D.hv])
v.x=H.e([],[D.hE])
v.y=H.e([],[D.hF])
v.z=H.e([],[D.hG])
v.Q=null
v.ch=null
v.c6(v.ge6(),v.geq(),v.ges())
j.dx=v
s=v.Q
if(s==null){s=D.E()
v.Q=s
v=s}else v=s
s=H.b(j.gez(),p)
C.a.h(v.a,s)
s=j.dx
v=s.ch
if(v==null){v=D.E()
s.ch=v}s=H.b(j.gaV(),p)
C.a.h(v.a,s)
j.dy=null
s=j.dx
v=U.dh(V.dE(new V.at(0,0,0),new V.J(0,1,0),new V.J(0,0,-1)))
i=new V.Z(1,1,1)
r=new D.bX()
r.c=new V.Z(1,1,1)
r.a=new V.J(0,0,1)
m=r.b
r.b=v
v=v.gu()
v.toString
q=H.b(r.gdF(),p)
C.a.h(v.a,q)
v=new D.G("mover",m,r.b,r,[t])
v.b=!0
r.ao(v)
if(!r.c.q(0,i)){m=r.c
r.c=i
v=new D.G("color",m,i,r,[V.Z])
v.b=!0
r.ao(v)}s.h(0,r)
v=j.r
v.sac(0,new V.Z(0.2,0.2,0.2))
v=j.x
v.sac(0,new V.Z(0.8,0.8,0.8))
j.r.sbf(k)
j.x.sbf(k)
j.Q.sbf(y.f.bW("../resources/ScrewBumpMap.png"))
j.z.sac(0,new V.Z(1,1,1))
j.z.sbf(y.f.bW("../resources/ScrewSpecular.png"))
v=j.z
if(v.c===C.b){v.c=C.e
v.bi()
v.by(100)
t=v.a
t.a=null
t.P(null)}v.by(10)
v=new M.fl()
w=O.cl(w)
v.d=w
w.aU(v.gea(),v.geb())
v.e=null
v.f=null
v.r=null
v.x=null
h=new X.h6()
h.b=1.0471975511965976
h.c=0.1
h.d=2000
h.saL(null)
w=h.b
if(!$.l.$2(w,1.0471975511965976)){m=h.b
h.b=1.0471975511965976
w=new D.G("fov",m,1.0471975511965976,h,[P.v])
w.b=!0
h.aG(w)}w=h.c
if(!$.l.$2(w,0.1)){m=h.c
h.c=0.1
w=new D.G("near",m,0.1,h,[P.v])
w.b=!0
h.aG(w)}w=h.d
if(!$.l.$2(w,2000)){m=h.d
h.d=2000
w=new D.G("far",m,2000,h,[P.v])
w.b=!0
h.aG(w)}w=v.a
if(w!==h){if(w!=null){w=w.gu()
w.toString
t=H.b(v.gaa(),p)
C.a.T(w.a,t)}m=v.a
v.a=h
w=h.gu()
w.toString
t=H.b(v.gaa(),p)
C.a.h(w.a,t)
w=new D.G("camera",m,v.a,v,[X.dc])
w.b=!0
v.ap(w)}g=new X.fr()
w=new V.bU(0,0,0,1)
g.a=w
g.b=!0
g.c=2000
g.d=!0
g.e=0
g.f=!1
w=V.dL(0,0,1,1)
g.r=w
w=v.b
if(w!==g){if(w!=null){w=w.gu()
w.toString
t=H.b(v.gaa(),p)
C.a.T(w.a,t)}m=v.b
v.b=g
w=g.gu()
w.toString
t=H.b(v.gaa(),p)
C.a.h(w.a,t)
w=new D.G("target",m,v.b,v,[X.dS])
w.b=!0
v.ap(w)}v.sdf(null)
v.sdf(j)
v.d.h(0,x)
v.a.saL(U.dh(V.am(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
w=y.d
if(w!==v){if(w!=null){w=w.gu()
w.toString
t=H.b(y.gcc(),p)
C.a.T(w.a,t)}y.d=v
w=v.gu()
w.toString
p=H.b(y.gcc(),p)
C.a.h(w.a,p)
y.dD()}B.ka(y)}},1]]
setupProgram(dart,0,0)
J.H=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dw.prototype
return J.dv.prototype}if(typeof a=="string")return J.cr.prototype
if(a==null)return J.dx.prototype
if(typeof a=="boolean")return J.fx.prototype
if(a.constructor==Array)return J.bD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.a)return a
return J.cc(a)}
J.bN=function(a){if(typeof a=="string")return J.cr.prototype
if(a==null)return a
if(a.constructor==Array)return J.bD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.a)return a
return J.cc(a)}
J.cZ=function(a){if(a==null)return a
if(a.constructor==Array)return J.bD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.a)return a
return J.cc(a)}
J.jQ=function(a){if(typeof a=="number")return J.c3.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cM.prototype
return a}
J.bO=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.a)return a
return J.cc(a)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).q(a,b)}
J.eT=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jQ(a).a8(a,b)}
J.eU=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jZ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bN(a).j(a,b)}
J.eV=function(a,b,c,d){return J.bO(a).cC(a,b,c,d)}
J.cf=function(a,b,c){return J.bN(a).fg(a,b,c)}
J.d4=function(a,b){return J.cZ(a).B(a,b)}
J.eW=function(a,b){return J.cZ(a).J(a,b)}
J.aD=function(a){return J.H(a).gN(a)}
J.bR=function(a){return J.cZ(a).gS(a)}
J.b2=function(a){return J.bN(a).gk(a)}
J.a3=function(a){return J.H(a).i(a)}
var $=I.p
C.k=W.cj.prototype
C.m=W.f9.prototype
C.v=J.m.prototype
C.a=J.bD.prototype
C.w=J.dv.prototype
C.f=J.dw.prototype
C.x=J.dx.prototype
C.j=J.c3.prototype
C.h=J.cr.prototype
C.E=J.bE.prototype
C.F=W.h2.prototype
C.p=J.h7.prototype
C.G=P.cE.prototype
C.l=J.cM.prototype
C.q=W.br.prototype
C.r=W.ie.prototype
C.t=new P.h4()
C.i=new P.j1()
C.b=new A.bV(0,"ColorSourceType.None")
C.e=new A.bV(1,"ColorSourceType.Solid")
C.c=new A.bV(2,"ColorSourceType.Texture2D")
C.d=new A.bV(3,"ColorSourceType.TextureCube")
C.u=new P.bB(5e6)
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
$.ak=0
$.b3=null
$.d7=null
$.cS=!1
$.eL=null
$.eF=null
$.eR=null
$.cb=null
$.cd=null
$.d_=null
$.aV=null
$.bw=null
$.bx=null
$.cT=!1
$.M=C.i
$.dn=null
$.dm=null
$.dl=null
$.dk=null
$.l=V.fX()
$.dH=null
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
I.$lazy(y,x,w)}})(["dj","$get$dj",function(){return H.eK("_$dart_dartClosure")},"cs","$get$cs",function(){return H.eK("_$dart_js")},"dY","$get$dY",function(){return H.ap(H.c5({
toString:function(){return"$receiver$"}}))},"dZ","$get$dZ",function(){return H.ap(H.c5({$method$:null,
toString:function(){return"$receiver$"}}))},"e_","$get$e_",function(){return H.ap(H.c5(null))},"e0","$get$e0",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e4","$get$e4",function(){return H.ap(H.c5(void 0))},"e5","$get$e5",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e2","$get$e2",function(){return H.ap(H.e3(null))},"e1","$get$e1",function(){return H.ap(function(){try{null.$method$}catch(z){return z.message}}())},"e7","$get$e7",function(){return H.ap(H.e3(void 0))},"e6","$get$e6",function(){return H.ap(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cP","$get$cP",function(){return P.ig()},"by","$get$by",function(){return[]},"di","$get$di",function(){return{}},"eh","$get$eh",function(){return Z.ae(0)},"ef","$get$ef",function(){return Z.ae(511)},"ay","$get$ay",function(){return Z.ae(1)},"ax","$get$ax",function(){return Z.ae(2)},"aw","$get$aw",function(){return Z.ae(4)},"az","$get$az",function(){return Z.ae(8)},"aA","$get$aA",function(){return Z.ae(16)},"bp","$get$bp",function(){return Z.ae(32)},"bq","$get$bq",function(){return Z.ae(64)},"eg","$get$eg",function(){return Z.ae(96)},"aT","$get$aT",function(){return Z.ae(128)},"av","$get$av",function(){return Z.ae(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.n]},{func:1,ret:-1,args:[D.n]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[W.ao]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.O,[P.f,E.aF]]},{func:1,ret:P.F,args:[F.ah]},{func:1,ret:P.F,args:[D.n]},{func:1,ret:-1,args:[W.aQ]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.o,args:[P.O]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[W.bb]},{func:1,ret:-1,args:[P.O,[P.f,D.V]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.O,[P.f,U.a5]]},{func:1,ret:-1,args:[P.O,[P.f,V.al]]},{func:1,ret:P.F,args:[W.a4]},{func:1,ret:-1,args:[P.a],opt:[P.ai]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:[P.aB,,],args:[,]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.a9,args:[W.I]},{func:1,ret:W.a_,args:[W.I]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[P.Q]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.n]}]},{func:1,args:[,P.o]},{func:1,ret:P.a9,args:[P.v,P.v]},{func:1,ret:P.a9,args:[[P.f,D.V]]},{func:1,args:[P.o]},{func:1,ret:P.F,args:[F.aR,P.v,P.v]},{func:1,ret:P.F,args:[P.aP]},{func:1,ret:-1,args:[W.br]}]
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
if(x==y)H.ke(d||a)
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
Isolate.cX=a.cX
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
if(typeof dartMainRunner==="function")dartMainRunner(E.eO,[])
else E.eO([])})})()
//# sourceMappingURL=test.dart.js.map
