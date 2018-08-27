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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isj)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cD(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cE=function(){}
var dart=[["","",,H,{"^":"",lf:{"^":"a;a"}}],["","",,J,{"^":"",
D:function(a){return void 0},
cK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c1:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cH==null){H.k5()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.e_("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cd()]
if(v!=null)return v
v=H.ka(a)
if(v!=null)return v
if(typeof a=="function")return C.A
y=Object.getPrototypeOf(a)
if(y==null)return C.l
if(y===Object.prototype)return C.l
if(typeof w=="function"){Object.defineProperty(w,$.$get$cd(),{value:C.h,enumerable:false,writable:true,configurable:true})
return C.h}return C.h},
j:{"^":"a;",
q:function(a,b){return a===b},
gH:function(a){return H.b9(a)},
i:["bZ",function(a){return"Instance of '"+H.aD(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fs:{"^":"j;",
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$isan:1},
fu:{"^":"j;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0},
$isA:1},
ce:{"^":"j;",
gH:function(a){return 0},
i:["c_",function(a){return String(a)}]},
fY:{"^":"ce;"},
bW:{"^":"ce;"},
bz:{"^":"ce;",
i:function(a){var z=a[$.$get$d4()]
if(z==null)return this.c_(a)
return"JavaScript function for "+H.e(J.a6(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isca:1},
aB:{"^":"j;$ti",
h:function(a,b){H.u(b,H.t(a,0))
if(!!a.fixed$length)H.Y(P.a9("add"))
a.push(b)},
J:function(a,b){var z
if(!!a.fixed$length)H.Y(P.a9("remove"))
for(z=0;z<a.length;++z)if(J.K(a[z],b)){a.splice(z,1)
return!0}return!1},
F:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.b(P.aW(a))}},
v:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.M(z,y,H.e(a[y]))
return z.join(b)},
dt:function(a){return this.v(a,"")},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
ax:function(a,b,c){var z=a.length
if(b>z)throw H.b(P.a3(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.b(P.a3(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.t(a,0)])
return H.f(a.slice(b,c),[H.t(a,0)])},
gaS:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.fq())},
i:function(a){return P.cb(a,"[","]")},
gL:function(a){return new J.ag(a,a.length,0,[H.t(a,0)])},
gH:function(a){return H.b9(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.Y(P.a9("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.bJ(b,"newLength",null))
if(b<0)throw H.b(P.a3(b,0,null,"newLength",null))
a.length=b},
M:function(a,b,c){H.P(b)
H.u(c,H.t(a,0))
if(!!a.immutable$list)H.Y(P.a9("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.av(a,b))
if(b>=a.length||b<0)throw H.b(H.av(a,b))
a[b]=c},
$ish:1,
$isc:1,
p:{
fr:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.b(P.bJ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a3(a,0,4294967295,"length",null))
return J.df(new Array(a),b)},
df:function(a,b){return J.b2(H.f(a,[b]))},
b2:function(a){H.br(a)
a.fixed$length=Array
return a}}},
le:{"^":"aB;$ti"},
ag:{"^":"a;a,b,c,0d,$ti",
gE:function(a){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
by:{"^":"j;",
gdr:function(a){return a===0?1/a<0:a<0},
by:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.b(P.a9(""+a+".floor()"))},
S:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.a9(""+a+".round()"))},
bN:function(a,b){var z
if(b>20)throw H.b(P.a3(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gdr(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.b(H.au(b))
return a*b},
bU:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
c1:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bl(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.bl(a,b)},
bl:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.a9("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
ar:function(a,b){var z
if(a>0)z=this.d_(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d_:function(a,b){return b>31?0:a>>>b},
Y:function(a,b){if(typeof b!=="number")throw H.b(H.au(b))
return a<b},
$isq:1,
$isH:1},
dg:{"^":"by;",$isx:1},
ft:{"^":"by;"},
bQ:{"^":"j;",
aQ:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.av(a,b))
if(b<0)throw H.b(H.av(a,b))
if(b>=a.length)H.Y(H.av(a,b))
return a.charCodeAt(b)},
ao:function(a,b){if(b>=a.length)throw H.b(H.av(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.I(b)
if(typeof b!=="string")throw H.b(P.bJ(b,null,null))
return a+b},
ay:function(a,b,c){H.P(c)
if(c==null)c=a.length
if(b<0)throw H.b(P.bU(b,null,null))
if(b>c)throw H.b(P.bU(b,null,null))
if(c>a.length)throw H.b(P.bU(c,null,null))
return a.substring(b,c)},
bX:function(a,b){return this.ay(a,b,null)},
n:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.p)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
dI:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.n(c,z)+a},
a1:function(a,b){return this.dI(a,b," ")},
d9:function(a,b,c){if(c>a.length)throw H.b(P.a3(c,0,a.length,null,null))
return H.eF(a,b,c)},
i:function(a){return a},
gH:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$isds:1,
$isk:1}}],["","",,H,{"^":"",
fq:function(){return new P.hv("No element")},
Q:{"^":"i3;a",
gj:function(a){return this.a.length},
k:function(a,b){return C.c.aQ(this.a,b)},
$ase0:function(){return[P.x]},
$asm:function(){return[P.x]},
$ash:function(){return[P.x]},
$asc:function(){return[P.x]}},
fb:{"^":"h;"},
dl:{"^":"a;a,b,c,0d,$ti",
gE:function(a){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.bG(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.b(P.aW(z))
w=this.c
if(typeof x!=="number")return H.y(x)
if(w>=x){this.d=null
return!1}this.d=y.A(z,w);++this.c
return!0}},
fK:{"^":"h;a,b,$ti",
gL:function(a){return new H.fL(J.bs(this.a),this.b,this.$ti)},
gj:function(a){return J.aU(this.a)},
A:function(a,b){return this.b.$1(J.cO(this.a,b))},
$ash:function(a,b){return[b]}},
fL:{"^":"cc;0a,b,c,$ti",
B:function(){var z=this.b
if(z.B()){this.a=this.c.$1(z.gE(z))
return!0}this.a=null
return!1},
gE:function(a){return this.a},
$ascc:function(a,b){return[b]}},
ik:{"^":"h;a,b,$ti",
gL:function(a){return new H.il(J.bs(this.a),this.b,this.$ti)}},
il:{"^":"cc;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
bO:{"^":"a;$ti"},
e0:{"^":"a;$ti"},
i3:{"^":"bR+e0;"}}],["","",,H,{"^":"",
k0:function(a){return init.types[H.P(a)]},
k8:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.D(a).$isv},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a6(a)
if(typeof z!=="string")throw H.b(H.au(a))
return z},
b9:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aD:function(a){var z,y,x,w,v,u,t,s,r
z=J.D(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.t||!!J.D(a).$isbW){v=C.k(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.c.ao(w,0)===36)w=C.c.bX(w,1)
r=H.cI(H.br(H.aw(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dv:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
h7:function(a){var z,y,x,w
z=H.f([],[P.x])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.b(H.au(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.b.ar(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.b(H.au(w))}return H.dv(z)},
dw:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.b(H.au(x))
if(x<0)throw H.b(H.au(x))
if(x>65535)return H.h7(a)}return H.dv(a)},
h6:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.b.ar(z,10))>>>0,56320|z&1023)}throw H.b(P.a3(a,0,1114111,null,null))},
W:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
h5:function(a){return a.b?H.W(a).getUTCFullYear()+0:H.W(a).getFullYear()+0},
h3:function(a){return a.b?H.W(a).getUTCMonth()+1:H.W(a).getMonth()+1},
h_:function(a){return a.b?H.W(a).getUTCDate()+0:H.W(a).getDate()+0},
h0:function(a){return a.b?H.W(a).getUTCHours()+0:H.W(a).getHours()+0},
h2:function(a){return a.b?H.W(a).getUTCMinutes()+0:H.W(a).getMinutes()+0},
h4:function(a){return a.b?H.W(a).getUTCSeconds()+0:H.W(a).getSeconds()+0},
h1:function(a){return a.b?H.W(a).getUTCMilliseconds()+0:H.W(a).getMilliseconds()+0},
y:function(a){throw H.b(H.au(a))},
i:function(a,b){if(a==null)J.aU(a)
throw H.b(H.av(a,b))},
av:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aq(!0,b,"index",null)
z=H.P(J.aU(a))
if(!(b<0)){if(typeof z!=="number")return H.y(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bU(b,"index",null)},
jW:function(a,b,c){if(a>c)return new P.bT(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bT(a,c,!0,b,"end","Invalid value")
return new P.aq(!0,b,"end",null)},
au:function(a){return new P.aq(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.dr()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eH})
z.name=""}else z.toString=H.eH
return z},
eH:function(){return J.a6(this.dartException)},
Y:function(a){throw H.b(a)},
z:function(a){throw H.b(P.aW(a))},
ay:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kn(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.ar(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cf(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dq(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dP()
u=$.$get$dQ()
t=$.$get$dR()
s=$.$get$dS()
r=$.$get$dW()
q=$.$get$dX()
p=$.$get$dU()
$.$get$dT()
o=$.$get$dZ()
n=$.$get$dY()
m=v.R(y)
if(m!=null)return z.$1(H.cf(H.I(y),m))
else{m=u.R(y)
if(m!=null){m.method="call"
return z.$1(H.cf(H.I(y),m))}else{m=t.R(y)
if(m==null){m=s.R(y)
if(m==null){m=r.R(y)
if(m==null){m=q.R(y)
if(m==null){m=p.R(y)
if(m==null){m=s.R(y)
if(m==null){m=o.R(y)
if(m==null){m=n.R(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dq(H.I(y),m))}}return z.$1(new H.i2(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dE()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aq(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dE()
return a},
aR:function(a){var z
if(a==null)return new H.ei(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ei(a)},
jY:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.M(0,a[y],a[x])}return b},
k7:function(a,b,c,d,e,f){H.n(a,"$isca")
switch(H.P(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.a_("Unsupported number of arguments for wrapped closure"))},
aQ:function(a,b){var z
H.P(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k7)
a.$identity=z
return z},
eX:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.D(d).$isc){z.$reflectionInfo=d
x=H.ha(z).r}else x=d
w=e?Object.create(new H.hw().constructor.prototype):Object.create(new H.c5(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aa
if(typeof u!=="number")return u.G()
$.aa=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.cZ(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.k0,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cT:H.c6
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cZ(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
eU:function(a,b,c,d){var z=H.c6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eW(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eU(y,!w,z,b)
if(y===0){w=$.aa
if(typeof w!=="number")return w.G()
$.aa=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aV
if(v==null){v=H.bK("self")
$.aV=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aa
if(typeof w!=="number")return w.G()
$.aa=w+1
t+=w
w="return function("+t+"){return this."
v=$.aV
if(v==null){v=H.bK("self")
$.aV=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
eV:function(a,b,c,d){var z,y
z=H.c6
y=H.cT
switch(b?-1:a){case 0:throw H.b(H.hj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eW:function(a,b){var z,y,x,w,v,u,t,s
z=$.aV
if(z==null){z=H.bK("self")
$.aV=z}y=$.cS
if(y==null){y=H.bK("receiver")
$.cS=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eV(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.aa
if(typeof y!=="number")return y.G()
$.aa=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.aa
if(typeof y!=="number")return y.G()
$.aa=y+1
return new Function(z+y+"}")()},
cD:function(a,b,c,d,e,f,g){var z,y
z=J.b2(H.br(b))
H.P(c)
y=!!J.D(d).$isc?J.b2(d):d
return H.eX(a,z,c,y,!!e,f,g)},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.ae(a,"String"))},
kd:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.ae(a,"num"))},
ev:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.ae(a,"bool"))},
P:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.ae(a,"int"))},
eD:function(a,b){throw H.b(H.ae(a,H.I(b).substring(3)))},
kf:function(a,b){var z=J.bG(b)
throw H.b(H.eS(a,z.ay(b,3,z.gj(b))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.D(a)[b])return a
H.eD(a,b)},
aS:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.D(a)[b]
else z=!0
if(z)return a
H.kf(a,b)},
br:function(a){if(a==null)return a
if(!!J.D(a).$isc)return a
throw H.b(H.ae(a,"List"))},
k9:function(a,b){if(a==null)return a
if(!!J.D(a).$isc)return a
if(J.D(a)[b])return a
H.eD(a,b)},
ew:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.P(z)]
else return a.$S()}return},
bF:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ew(J.D(a))
if(z==null)return!1
y=H.ez(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.cz)return a
$.cz=!0
try{if(H.bF(a,b))return a
z=H.bI(b)
y=H.ae(a,z)
throw H.b(y)}finally{$.cz=!1}},
cF:function(a,b){if(a!=null&&!H.cC(a,b))H.Y(H.ae(a,H.bI(b)))
return a},
eq:function(a){var z
if(a instanceof H.o){z=H.ew(J.D(a))
if(z!=null)return H.bI(z)
return"Closure"}return H.aD(a)},
kk:function(a){throw H.b(new P.f_(H.I(a)))},
ex:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
aw:function(a){if(a==null)return
return a.$ti},
mb:function(a,b,c){return H.aT(a["$as"+H.e(c)],H.aw(b))},
bq:function(a,b,c,d){var z
H.I(c)
H.P(d)
z=H.aT(a["$as"+H.e(c)],H.aw(b))
return z==null?null:z[d]},
ap:function(a,b,c){var z
H.I(b)
H.P(c)
z=H.aT(a["$as"+H.e(b)],H.aw(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.P(b)
z=H.aw(a)
return z==null?null:z[b]},
bI:function(a){var z=H.ax(a,null)
return z},
ax:function(a,b){var z,y
H.w(b,"$isc",[P.k],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cI(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.P(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.e(b[y])}if('func' in a)return H.jI(a,b)
if('futureOr' in a)return"FutureOr<"+H.ax("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.k]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.c.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.ax(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ax(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ax(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ax(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jX(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.I(z[l])
n=n+m+H.ax(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cI:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.k],"$asc")
if(a==null)return""
z=new P.ck("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ax(u,c)}v="<"+z.i(0)+">"
return v},
aT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aP:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aw(a)
y=J.D(a)
if(y[b]==null)return!1
return H.et(H.aT(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.I(b)
H.br(c)
H.I(d)
if(a==null)return a
z=H.aP(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cI(c,0,null)
throw H.b(H.ae(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
et:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a5(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a5(a[y],b,c[y],d))return!1
return!0},
m9:function(a,b,c){return a.apply(b,H.aT(J.D(b)["$as"+H.e(c)],H.aw(b)))},
eA:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="A"||a===-1||a===-2||H.eA(z)}return!1},
cC:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="A"||b===-1||b===-2||H.eA(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cC(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bF(a,b)}y=J.D(a).constructor
x=H.aw(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.a5(y,null,b,null)
return z},
u:function(a,b){if(a!=null&&!H.cC(a,b))throw H.b(H.ae(a,H.bI(b)))
return a},
a5:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a5(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="A")return!0
if('func' in c)return H.ez(a,b,c,d)
if('func' in a)return c.builtin$cls==="ca"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a5("type" in a?a.type:null,b,x,d)
else if(H.a5(a,b,x,d))return!0
else{if(!('$is'+"b_" in y.prototype))return!1
w=y.prototype["$as"+"b_"]
v=H.aT(w,z?a.slice(1):null)
return H.a5(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bI(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.et(H.aT(r,z),b,u,d)},
ez:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a5(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a5(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a5(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a5(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kc(m,b,l,d)},
kc:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a5(c[w],d,a[w],b))return!1}return!0},
ma:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
ka:function(a){var z,y,x,w,v,u
z=H.I($.ey.$1(a))
y=$.c_[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.I($.es.$2(a,z))
if(z!=null){y=$.c_[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c3(x)
$.c_[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c2[z]=x
return x}if(v==="-"){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eC(a,x)
if(v==="*")throw H.b(P.e_(z))
if(init.leafTags[z]===true){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eC(a,x)},
eC:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cK(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c3:function(a){return J.cK(a,!1,null,!!a.$isv)},
kb:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c3(z)
else return J.cK(z,c,null,null)},
k5:function(){if(!0===$.cH)return
$.cH=!0
H.k6()},
k6:function(){var z,y,x,w,v,u,t,s
$.c_=Object.create(null)
$.c2=Object.create(null)
H.k1()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eE.$1(v)
if(u!=null){t=H.kb(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k1:function(){var z,y,x,w,v,u,t
z=C.x()
z=H.aO(C.u,H.aO(C.z,H.aO(C.j,H.aO(C.j,H.aO(C.y,H.aO(C.v,H.aO(C.w(C.k),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ey=new H.k2(v)
$.es=new H.k3(u)
$.eE=new H.k4(t)},
aO:function(a,b){return a(b)||b},
eF:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
eG:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
h9:{"^":"a;a,b,c,d,e,f,r,0x",p:{
ha:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.b2(z)
y=z[0]
x=z[1]
return new H.h9(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hM:{"^":"a;a,b,c,d,e,f",
R:function(a){var z,y,x
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
ad:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bV:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dV:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fV:{"^":"M;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
dq:function(a,b){return new H.fV(a,b==null?null:b.method)}}},
fx:{"^":"M;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cf:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fx(a,y,z?null:b.receiver)}}},
i2:{"^":"M;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kn:{"^":"o:16;a",
$1:function(a){if(!!J.D(a).$isM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ei:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa8:1},
o:{"^":"a;",
i:function(a){return"Closure '"+H.aD(this).trim()+"'"},
gbR:function(){return this},
$isca:1,
gbR:function(){return this}},
dJ:{"^":"o;"},
hw:{"^":"dJ;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
c5:{"^":"dJ;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c5))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gH:function(a){var z,y
z=this.c
if(z==null)y=H.b9(this.a)
else y=typeof z!=="object"?J.af(z):H.b9(z)
return(y^H.b9(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aD(z)+"'")},
p:{
c6:function(a){return a.a},
cT:function(a){return a.c},
bK:function(a){var z,y,x,w,v
z=new H.c5("self","target","receiver","name")
y=J.b2(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hN:{"^":"M;a",
i:function(a){return this.a},
p:{
ae:function(a,b){return new H.hN("TypeError: "+H.e(P.bM(a))+": type '"+H.eq(a)+"' is not a subtype of type '"+b+"'")}}},
eR:{"^":"M;a",
i:function(a){return this.a},
p:{
eS:function(a,b){return new H.eR("CastError: "+H.e(P.bM(a))+": type '"+H.eq(a)+"' is not a subtype of type '"+b+"'")}}},
hi:{"^":"M;a",
i:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hj:function(a){return new H.hi(a)}}},
aC:{"^":"fI;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
ga0:function(a){return new H.dk(this,[H.t(this,0)])},
br:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bb(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bb(y,b)}else return this.dn(b)},
dn:function(a){var z=this.d
if(z==null)return!1
return this.aR(this.aD(z,J.af(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ap(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ap(w,b)
x=y==null?null:y.b
return x}else return this.dq(b)},
dq:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aD(z,J.af(a)&0x3ffffff)
x=this.aR(y,a)
if(x<0)return
return y[x].b},
M:function(a,b,c){var z,y,x,w,v,u
H.u(b,H.t(this,0))
H.u(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aF()
this.b=z}this.b5(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aF()
this.c=y}this.b5(y,b,c)}else{x=this.d
if(x==null){x=this.aF()
this.d=x}w=J.af(b)&0x3ffffff
v=this.aD(x,w)
if(v==null)this.aJ(x,w,[this.aG(b,c)])
else{u=this.aR(v,b)
if(u>=0)v[u].b=c
else v.push(this.aG(b,c))}}},
F:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.aW(this))
z=z.c}},
b5:function(a,b,c){var z
H.u(b,H.t(this,0))
H.u(c,H.t(this,1))
z=this.ap(a,b)
if(z==null)this.aJ(a,b,this.aG(b,c))
else z.b=c},
cq:function(){this.r=this.r+1&67108863},
aG:function(a,b){var z,y
z=new H.fA(H.u(a,H.t(this,0)),H.u(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.cq()
return z},
aR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].a,b))return y
return-1},
i:function(a){return P.dm(this)},
ap:function(a,b){return a[b]},
aD:function(a,b){return a[b]},
aJ:function(a,b,c){a[b]=c},
cl:function(a,b){delete a[b]},
bb:function(a,b){return this.ap(a,b)!=null},
aF:function(){var z=Object.create(null)
this.aJ(z,"<non-identifier-key>",z)
this.cl(z,"<non-identifier-key>")
return z},
$isdj:1},
fA:{"^":"a;a,b,0c,0d"},
dk:{"^":"fb;a,$ti",
gj:function(a){return this.a.a},
gL:function(a){var z,y
z=this.a
y=new H.fB(z,z.r,this.$ti)
y.c=z.e
return y}},
fB:{"^":"a;a,b,0c,0d,$ti",
gE:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aW(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
k2:{"^":"o:16;a",
$1:function(a){return this.a(a)}},
k3:{"^":"o:33;a",
$2:function(a,b){return this.a(a,b)}},
k4:{"^":"o:30;a",
$1:function(a){return this.a(H.I(a))}},
fv:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isds:1,
p:{
fw:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.b(new P.fl("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
jX:function(a){return J.df(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ke:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cy:function(a){return a},
at:function(a,b,c){H.br(b)
if(a>>>0!==a||a>=c)throw H.b(H.av(b,a))},
jH:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.b(H.jW(a,b,c))
return b},
fR:{"^":"j;","%":"DataView;ArrayBufferView;ch|ec|ed|fQ|ee|ef|ar"},
ch:{"^":"fR;",
gj:function(a){return a.length},
$isv:1,
$asv:I.cE},
fQ:{"^":"ed;",
k:function(a,b){H.at(b,a,a.length)
return a[b]},
$asbO:function(){return[P.q]},
$asm:function(){return[P.q]},
$ish:1,
$ash:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
ar:{"^":"ef;",
$asbO:function(){return[P.x]},
$asm:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]},
$isc:1,
$asc:function(){return[P.x]}},
lp:{"^":"ar;",
k:function(a,b){H.at(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lq:{"^":"ar;",
k:function(a,b){H.at(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lr:{"^":"ar;",
k:function(a,b){H.at(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ls:{"^":"ar;",
k:function(a,b){H.at(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lt:{"^":"ar;",
k:function(a,b){H.at(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lu:{"^":"ar;",
gj:function(a){return a.length},
k:function(a,b){H.at(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
fS:{"^":"ar;",
gj:function(a){return a.length},
k:function(a,b){H.at(b,a,a.length)
return a[b]},
ax:function(a,b,c){return new Uint8Array(a.subarray(b,H.jH(b,c,a.length)))},
"%":";Uint8Array"},
ec:{"^":"ch+m;"},
ed:{"^":"ec+bO;"},
ee:{"^":"ch+m;"},
ef:{"^":"ee+bO;"}}],["","",,P,{"^":"",
io:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jP()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aQ(new P.iq(z),1)).observe(y,{childList:true})
return new P.ip(z,y,x)}else if(self.setImmediate!=null)return P.jQ()
return P.jR()},
lZ:[function(a){self.scheduleImmediate(H.aQ(new P.ir(H.d(a,{func:1,ret:-1})),0))},"$1","jP",4,0,8],
m_:[function(a){self.setImmediate(H.aQ(new P.is(H.d(a,{func:1,ret:-1})),0))},"$1","jQ",4,0,8],
m0:[function(a){P.cn(C.i,H.d(a,{func:1,ret:-1}))},"$1","jR",4,0,8],
cn:function(a,b){var z
H.d(b,{func:1,ret:-1})
z=C.b.a8(a.a,1000)
return P.jm(z<0?0:z,b)},
dL:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.aE]})
z=C.b.a8(a.a,1000)
return P.jn(z<0?0:z,b)},
jL:function(a,b){if(H.bF(a,{func:1,args:[P.a,P.a8]}))return b.dQ(a,null,P.a,P.a8)
if(H.bF(a,{func:1,args:[P.a]}))return H.d(a,{func:1,ret:null,args:[P.a]})
throw H.b(P.bJ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jK:function(){var z,y
for(;z=$.aN,z!=null;){$.bo=null
y=z.b
$.aN=y
if(y==null)$.bn=null
z.a.$0()}},
m8:[function(){$.cA=!0
try{P.jK()}finally{$.bo=null
$.cA=!1
if($.aN!=null)$.$get$cv().$1(P.eu())}},"$0","eu",0,0,2],
ep:function(a){var z=new P.e6(H.d(a,{func:1,ret:-1}))
if($.aN==null){$.bn=z
$.aN=z
if(!$.cA)$.$get$cv().$1(P.eu())}else{$.bn.b=z
$.bn=z}},
jO:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.aN
if(z==null){P.ep(a)
$.bo=$.bn
return}y=new P.e6(a)
x=$.bo
if(x==null){y.b=z
$.bo=y
$.aN=y}else{y.b=x.b
x.b=y
$.bo=y
if(y.b==null)$.bn=y}},
kg:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.F
if(C.d===y){P.bZ(null,null,C.d,a)
return}y.toString
P.bZ(null,null,y,H.d(y.aM(a),z))},
hH:function(a,b){var z,y
z={func:1,ret:-1}
H.d(b,z)
y=$.F
if(y===C.d){y.toString
return P.cn(a,b)}return P.cn(a,H.d(y.aM(b),z))},
hI:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aE]}
H.d(b,z)
y=$.F
if(y===C.d){y.toString
return P.dL(a,b)}x=y.bp(b,P.aE)
$.F.toString
return P.dL(a,H.d(x,z))},
bY:function(a,b,c,d,e){var z={}
z.a=d
P.jO(new P.jM(z,e))},
en:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.F
if(y===c)return d.$0()
$.F=c
z=y
try{y=d.$0()
return y}finally{$.F=z}},
eo:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.u(e,g)
y=$.F
if(y===c)return d.$1(e)
$.F=c
z=y
try{y=d.$1(e)
return y}finally{$.F=z}},
jN:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.u(e,h)
H.u(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
bZ:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.aM(d):c.d5(d,-1)
P.ep(d)},
iq:{"^":"o:11;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ip:{"^":"o:27;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ir:{"^":"o:0;a",
$0:function(){this.a.$0()}},
is:{"^":"o:0;a",
$0:function(){this.a.$0()}},
el:{"^":"a;a,0b,c",
ca:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aQ(new P.jp(this,b),0),a)
else throw H.b(P.a9("`setTimeout()` not found."))},
cb:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aQ(new P.jo(this,a,Date.now(),b),0),a)
else throw H.b(P.a9("Periodic timer."))},
$isaE:1,
p:{
jm:function(a,b){var z=new P.el(!0,0)
z.ca(a,b)
return z},
jn:function(a,b){var z=new P.el(!1,0)
z.cb(a,b)
return z}}},
jp:{"^":"o:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jo:{"^":"o:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.b.c1(w,x)}z.c=y
this.d.$1(z)}},
aM:{"^":"a;0a,b,c,d,e,$ti",
dz:function(a){if(this.c!==6)return!0
return this.b.b.aY(H.d(this.d,{func:1,ret:P.an,args:[P.a]}),a.a,P.an,P.a)},
dm:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.bF(z,{func:1,args:[P.a,P.a8]}))return H.cF(w.dV(z,a.a,a.b,null,y,P.a8),x)
else return H.cF(w.aY(H.d(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
am:{"^":"a;bk:a<,b,0cT:c<,$ti",
bL:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.d){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jL(b,y)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.am(0,$.F,[c])
w=b==null?1:3
this.b6(new P.aM(x,w,a,b,[z,c]))
return x},
dY:function(a,b){return this.bL(a,null,b)},
b6:function(a){var z,y
z=this.a
if(z<=1){a.a=H.n(this.c,"$isaM")
this.c=a}else{if(z===2){y=H.n(this.c,"$isam")
z=y.a
if(z<4){y.b6(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bZ(null,null,z,H.d(new P.iG(this,a),{func:1,ret:-1}))}},
bh:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.n(this.c,"$isaM")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.n(this.c,"$isam")
y=u.a
if(y<4){u.bh(a)
return}this.a=y
this.c=u.c}z.a=this.aq(a)
y=this.b
y.toString
P.bZ(null,null,y,H.d(new P.iL(z,this),{func:1,ret:-1}))}},
aI:function(){var z=H.n(this.c,"$isaM")
this.c=null
return this.aq(z)},
aq:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
b9:function(a){var z,y,x,w
z=H.t(this,0)
H.cF(a,{futureOr:1,type:z})
y=this.$ti
x=H.aP(a,"$isb_",y,"$asb_")
if(x){z=H.aP(a,"$isam",y,null)
if(z)P.e8(a,this)
else P.iH(a,this)}else{w=this.aI()
H.u(a,z)
this.a=4
this.c=a
P.bl(this,w)}},
aA:[function(a,b){var z
H.n(b,"$isa8")
z=this.aI()
this.a=8
this.c=new P.a1(a,b)
P.bl(this,z)},function(a){return this.aA(a,null)},"e4","$2","$1","gci",4,2,26],
$isb_:1,
p:{
iH:function(a,b){var z,y,x
b.a=1
try{a.bL(new P.iI(b),new P.iJ(b),null)}catch(x){z=H.ay(x)
y=H.aR(x)
P.kg(new P.iK(b,z,y))}},
e8:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.n(a.c,"$isam")
if(z>=4){y=b.aI()
b.a=a.a
b.c=a.c
P.bl(b,y)}else{y=H.n(b.c,"$isaM")
b.a=2
b.c=a
a.bh(y)}},
bl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.n(y.c,"$isa1")
y=y.b
u=v.a
t=v.b
y.toString
P.bY(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bl(z.a,b)}y=z.a
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
if(p){H.n(r,"$isa1")
y=y.b
u=r.a
t=r.b
y.toString
P.bY(null,null,y,u,t)
return}o=$.F
if(o==null?q!=null:o!==q)$.F=q
else o=null
y=b.c
if(y===8)new P.iO(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iN(x,b,r).$0()}else if((y&2)!==0)new P.iM(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.D(y).$isb_){if(y.a>=4){n=H.n(t.c,"$isaM")
t.c=null
b=t.aq(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.e8(y,t)
return}}m=b.b
n=H.n(m.c,"$isaM")
m.c=null
b=m.aq(n)
y=x.a
u=x.b
if(!y){H.u(u,H.t(m,0))
m.a=4
m.c=u}else{H.n(u,"$isa1")
m.a=8
m.c=u}z.a=m
y=m}}}},
iG:{"^":"o:0;a,b",
$0:function(){P.bl(this.a,this.b)}},
iL:{"^":"o:0;a,b",
$0:function(){P.bl(this.b,this.a.a)}},
iI:{"^":"o:11;a",
$1:function(a){var z=this.a
z.a=0
z.b9(a)}},
iJ:{"^":"o:25;a",
$2:function(a,b){this.a.aA(a,H.n(b,"$isa8"))},
$1:function(a){return this.$2(a,null)}},
iK:{"^":"o:0;a,b,c",
$0:function(){this.a.aA(this.b,this.c)}},
iO:{"^":"o:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bJ(H.d(w.d,{func:1}),null)}catch(v){y=H.ay(v)
x=H.aR(v)
if(this.d){w=H.n(this.a.a.c,"$isa1").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.n(this.a.a.c,"$isa1")
else u.b=new P.a1(y,x)
u.a=!0
return}if(!!J.D(z).$isb_){if(z instanceof P.am&&z.gbk()>=4){if(z.gbk()===8){w=this.b
w.b=H.n(z.gcT(),"$isa1")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.dY(new P.iP(t),null)
w.a=!1}}},
iP:{"^":"o:23;a",
$1:function(a){return this.a}},
iN:{"^":"o:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.u(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.aY(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ay(t)
y=H.aR(t)
x=this.a
x.b=new P.a1(z,y)
x.a=!0}}},
iM:{"^":"o:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.n(this.a.a.c,"$isa1")
w=this.c
if(w.dz(z)&&w.e!=null){v=this.b
v.b=w.dm(z)
v.a=!1}}catch(u){y=H.ay(u)
x=H.aR(u)
w=H.n(this.a.a.c,"$isa1")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a1(y,x)
s.a=!0}}},
e6:{"^":"a;a,0b"},
cj:{"^":"a;$ti",
gj:function(a){var z,y
z={}
y=new P.am(0,$.F,[P.x])
z.a=0
this.dw(new P.hz(z,this),!0,new P.hA(z,y),y.gci())
return y}},
hz:{"^":"o;a,b",
$1:function(a){H.u(a,H.ap(this.b,"cj",0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.ap(this.b,"cj",0)]}}},
hA:{"^":"o:0;a,b",
$0:function(){this.b.b9(this.a.a)}},
dG:{"^":"a;$ti"},
hy:{"^":"a;"},
aE:{"^":"a;"},
a1:{"^":"a;a,b",
i:function(a){return H.e(this.a)},
$isM:1},
jw:{"^":"a;",$islY:1},
jM:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dr()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.i(0)
throw x}},
j8:{"^":"jw;",
dW:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.d===$.F){a.$0()
return}P.en(null,null,this,a,-1)}catch(x){z=H.ay(x)
y=H.aR(x)
P.bY(null,null,this,z,H.n(y,"$isa8"))}},
dX:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.u(b,c)
try{if(C.d===$.F){a.$1(b)
return}P.eo(null,null,this,a,b,-1,c)}catch(x){z=H.ay(x)
y=H.aR(x)
P.bY(null,null,this,z,H.n(y,"$isa8"))}},
d5:function(a,b){return new P.ja(this,H.d(a,{func:1,ret:b}),b)},
aM:function(a){return new P.j9(this,H.d(a,{func:1,ret:-1}))},
bp:function(a,b){return new P.jb(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
bJ:function(a,b){H.d(a,{func:1,ret:b})
if($.F===C.d)return a.$0()
return P.en(null,null,this,a,b)},
aY:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.u(b,d)
if($.F===C.d)return a.$1(b)
return P.eo(null,null,this,a,b,c,d)},
dV:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.u(b,e)
H.u(c,f)
if($.F===C.d)return a.$2(b,c)
return P.jN(null,null,this,a,b,c,d,e,f)},
dQ:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
ja:{"^":"o;a,b,c",
$0:function(){return this.a.bJ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
j9:{"^":"o:2;a,b",
$0:function(){return this.a.dW(this.b)}},
jb:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dX(this.b,H.u(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fD:function(a,b,c){H.br(a)
return H.w(H.jY(a,new H.aC(0,0,[b,c])),"$isdj",[b,c],"$asdj")},
fC:function(a,b){return new H.aC(0,0,[a,b])},
fE:function(a,b,c,d){return new P.iV(0,0,[d])},
fp:function(a,b,c){var z,y
if(P.cB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bp()
C.a.h(y,a)
try{P.jJ(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dH(b,H.k9(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
cb:function(a,b,c){var z,y,x
if(P.cB(a))return b+"..."+c
z=new P.ck(b)
y=$.$get$bp()
C.a.h(y,a)
try{x=z
x.a=P.dH(x.ga5(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.ga5()+c
y=z.ga5()
return y.charCodeAt(0)==0?y:y},
cB:function(a){var z,y
for(z=0;y=$.$get$bp(),z<y.length;++z)if(a===y[z])return!0
return!1},
jJ:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gL(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.e(z.gE(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.B()){if(x<=4){C.a.h(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.B();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dm:function(a){var z,y,x
z={}
if(P.cB(a))return"{...}"
y=new P.ck("")
try{C.a.h($.$get$bp(),a)
x=y
x.a=x.ga5()+"{"
z.a=!0
J.eL(a,new P.fJ(z,y))
z=y
z.a=z.ga5()+"}"}finally{z=$.$get$bp()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.ga5()
return z.charCodeAt(0)==0?z:z},
iV:{"^":"iQ;a,0b,0c,0d,0e,0f,r,$ti",
gL:function(a){return P.eb(this,this.r,H.t(this,0))},
gj:function(a){return this.a},
h:function(a,b){var z,y
H.u(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cx()
this.b=z}return this.b7(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cx()
this.c=y}return this.b7(y,b)}else return this.cc(0,b)},
cc:function(a,b){var z,y,x
H.u(b,H.t(this,0))
z=this.d
if(z==null){z=P.cx()
this.d=z}y=this.ba(b)
x=z[y]
if(x==null)z[y]=[this.az(b)]
else{if(this.be(x,b)>=0)return!1
x.push(this.az(b))}return!0},
J:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cO(0,b)},
cO:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.cp(z,b)
x=this.be(y,b)
if(x<0)return!1
this.bm(y.splice(x,1)[0])
return!0},
b7:function(a,b){H.u(b,H.t(this,0))
if(H.n(a[b],"$iscw")!=null)return!1
a[b]=this.az(b)
return!0},
bi:function(a,b){var z
if(a==null)return!1
z=H.n(a[b],"$iscw")
if(z==null)return!1
this.bm(z)
delete a[b]
return!0},
b8:function(){this.r=this.r+1&67108863},
az:function(a){var z,y
z=new P.cw(H.u(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.b8()
return z},
bm:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.b8()},
ba:function(a){return J.af(a)&0x3ffffff},
cp:function(a,b){return a[this.ba(b)]},
be:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].a,b))return y
return-1},
p:{
cx:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cw:{"^":"a;a,0b,0c"},
iW:{"^":"a;a,b,0c,0d,$ti",
gE:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aW(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.u(z.a,H.t(this,0))
this.c=z.b
return!0}}},
p:{
eb:function(a,b,c){var z=new P.iW(a,b,[c])
z.c=a.e
return z}}},
iQ:{"^":"hk;"},
bR:{"^":"iX;",$ish:1,$isc:1},
m:{"^":"a;$ti",
gL:function(a){return new H.dl(a,this.gj(a),0,[H.bq(this,a,"m",0)])},
A:function(a,b){return this.k(a,b)},
e_:function(a,b){var z,y,x
z=H.f([],[H.bq(this,a,"m",0)])
C.a.sj(z,this.gj(a))
y=0
while(!0){x=this.gj(a)
if(typeof x!=="number")return H.y(x)
if(!(y<x))break
C.a.M(z,y,this.k(a,y));++y}return z},
dZ:function(a){return this.e_(a,!0)},
i:function(a){return P.cb(a,"[","]")}},
fI:{"^":"a0;"},
fJ:{"^":"o:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
a0:{"^":"a;$ti",
F:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.bq(this,a,"a0",0),H.bq(this,a,"a0",1)]})
for(z=J.bs(this.ga0(a));z.B();){y=z.gE(z)
b.$2(y,this.k(a,y))}},
gj:function(a){return J.aU(this.ga0(a))},
i:function(a){return P.dm(a)},
$isU:1},
hm:{"^":"a;$ti",
i:function(a){return P.cb(this,"{","}")},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.cP("index"))
if(b<0)H.Y(P.a3(b,0,null,"index",null))
for(z=P.eb(this,this.r,H.t(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.b(P.E(b,this,"index",null,y))},
$ish:1},
hk:{"^":"hm;"},
iX:{"^":"a+m;"}}],["","",,P,{"^":"",c8:{"^":"a;$ti"},d2:{"^":"hy;$ti"},fd:{"^":"c8;",
$asc8:function(){return[P.k,[P.c,P.x]]}},i6:{"^":"fd;a"},i7:{"^":"d2;",
dc:function(a,b,c){var z,y,x,w
z=a.length
P.dx(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jv(0,0,x)
if(w.cn(a,b,z)!==z)w.bn(C.c.aQ(a,z-1),0)
return C.C.ax(x,0,w.b)},
da:function(a){return this.dc(a,0,null)},
$asd2:function(){return[P.k,[P.c,P.x]]}},jv:{"^":"a;a,b,c",
bn:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.i(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.i(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.i(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.i(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.i(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.i(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.i(z,y)
z[y]=128|a&63
return!1}},
cn:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.aQ(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.ao(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bn(w,C.c.ao(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.i(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.i(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.i(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.i(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
ff:function(a){var z=J.D(a)
if(!!z.$iso)return z.i(a)
return"Instance of '"+H.aD(a)+"'"},
fF:function(a,b,c,d){var z,y
H.u(b,d)
z=J.fr(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.M(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
fG:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.gL(a);x.B();)C.a.h(y,H.u(x.gE(x),c))
if(b)return y
return H.w(J.b2(y),"$isc",z,"$asc")},
cl:function(a,b,c){var z,y
z=P.x
H.w(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.w(a,"$isaB",[z],"$asaB")
y=a.length
c=P.dx(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.Y()
z=c<y}else z=!0
return H.dw(z?C.a.ax(a,b,c):a)}return P.hB(a,b,c)},
hB:function(a,b,c){var z,y,x
H.w(a,"$ish",[P.x],"$ash")
z=J.bs(a)
for(y=0;y<b;++y)if(!z.B())throw H.b(P.a3(b,0,y,null,null))
x=[]
for(;z.B();)x.push(z.gE(z))
return H.dw(x)},
hb:function(a,b,c){return new H.fv(a,H.fw(a,!1,!0,!1))},
ju:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.x],"$asc")
if(c===C.m){z=$.$get$em().b
z=z.test(b)}else z=!1
if(z)return b
y=C.q.da(H.u(b,H.ap(c,"c8",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.h6(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ff(a)},
a_:function(a){return new P.e7(a)},
cL:function(a){H.ke(a)},
an:{"^":"a;"},
"+bool":0,
aY:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aY))return!1
return this.a===b.a&&this.b===b.b},
gH:function(a){var z=this.a
return(z^C.b.ar(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.f0(H.h5(this))
y=P.bv(H.h3(this))
x=P.bv(H.h_(this))
w=P.bv(H.h0(this))
v=P.bv(H.h2(this))
u=P.bv(H.h4(this))
t=P.f1(H.h1(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
f0:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
f1:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bv:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"H;"},
"+double":0,
aA:{"^":"a;a",
n:function(a,b){return new P.aA(C.b.S(this.a*b))},
Y:function(a,b){return C.b.Y(this.a,H.n(b,"$isaA").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a},
gH:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fa()
y=this.a
if(y<0)return"-"+new P.aA(0-y).i(0)
x=z.$1(C.b.a8(y,6e7)%60)
w=z.$1(C.b.a8(y,1e6)%60)
v=new P.f9().$1(y%1e6)
return""+C.b.a8(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
p:{
da:function(a,b,c,d,e,f){return new P.aA(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
f9:{"^":"o:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fa:{"^":"o:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
M:{"^":"a;"},
dr:{"^":"M;",
i:function(a){return"Throw of null."}},
aq:{"^":"M;a,b,c,d",
gaC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaB:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gaC()+y+x
if(!this.a)return w
v=this.gaB()
u=P.bM(this.b)
return w+v+": "+H.e(u)},
p:{
bJ:function(a,b,c){return new P.aq(!0,a,b,c)},
cP:function(a){return new P.aq(!1,null,a,"Must not be null")}}},
bT:{"^":"aq;e,f,a,b,c,d",
gaC:function(){return"RangeError"},
gaB:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bU:function(a,b,c){return new P.bT(null,null,!0,a,b,"Value not in range")},
a3:function(a,b,c,d,e){return new P.bT(b,c,!0,a,d,"Invalid value")},
dx:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.y(a)
if(0<=a){if(typeof c!=="number")return H.y(c)
z=a>c}else z=!0
if(z)throw H.b(P.a3(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.y(c)
z=b>c}else z=!0
if(z)throw H.b(P.a3(b,a,c,"end",f))
return b}return c}}},
fo:{"^":"aq;e,j:f>,a,b,c,d",
gaC:function(){return"RangeError"},
gaB:function(){if(J.eI(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.e(z)},
p:{
E:function(a,b,c,d,e){var z=H.P(e!=null?e:J.aU(b))
return new P.fo(b,z,!0,a,c,"Index out of range")}}},
i4:{"^":"M;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
a9:function(a){return new P.i4(a)}}},
i1:{"^":"M;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
e_:function(a){return new P.i1(a)}}},
hv:{"^":"M;a",
i:function(a){return"Bad state: "+this.a}},
eY:{"^":"M;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bM(z))+"."},
p:{
aW:function(a){return new P.eY(a)}}},
fW:{"^":"a;",
i:function(a){return"Out of Memory"},
$isM:1},
dE:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isM:1},
f_:{"^":"M;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
e7:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fl:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.c.ay(x,0,75)+"..."
return y+"\n"+x}},
x:{"^":"H;"},
"+int":0,
h:{"^":"a;$ti",
gj:function(a){var z,y
z=this.gL(this)
for(y=0;z.B();)++y
return y},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.cP("index"))
if(b<0)H.Y(P.a3(b,0,null,"index",null))
for(z=this.gL(this),y=0;z.B();){x=z.gE(z)
if(b===y)return x;++y}throw H.b(P.E(b,this,"index",null,y))},
i:function(a){return P.fp(this,"(",")")}},
cc:{"^":"a;$ti"},
c:{"^":"a;$ti",$ish:1},
"+List":0,
U:{"^":"a;$ti"},
A:{"^":"a;",
gH:function(a){return P.a.prototype.gH.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
H:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gH:function(a){return H.b9(this)},
i:function(a){return"Instance of '"+H.aD(this)+"'"},
toString:function(){return this.i(this)}},
a8:{"^":"a;"},
k:{"^":"a;",$isds:1},
"+String":0,
ck:{"^":"a;a5:a<",
gj:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dH:function(a,b,c){var z=J.bs(b)
if(!z.B())return a
if(c.length===0){do a+=H.e(z.gE(z))
while(z.B())}else{a+=H.e(z.gE(z))
for(;z.B();)a=a+c+H.e(z.gE(z))}return a}}}}],["","",,W,{"^":"",
cY:function(a,b){var z=document.createElement("canvas")
return z},
fc:function(a){H.n(a,"$isT")
return"wheel"},
bX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ea:function(a,b,c,d){var z,y
z=W.bX(W.bX(W.bX(W.bX(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
er:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.d)return a
return z.bp(a,b)},
bx:{"^":"R;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ko:{"^":"ci;0l:x=,0m:y=","%":"Accelerometer|LinearAccelerationSensor"},
kp:{"^":"j;0j:length=","%":"AccessibleNodeList"},
kq:{"^":"bx;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kr:{"^":"bx;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
eQ:{"^":"j;","%":";Blob"},
c7:{"^":"bx;",
aZ:function(a,b,c){var z=a.getContext(b,P.jS(c,null))
return z},
$isc7:1,
"%":"HTMLCanvasElement"},
kx:{"^":"C;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kz:{"^":"bL;0j:length=","%":"CSSPerspective"},
kA:{"^":"c9;0l:x=,0m:y=","%":"CSSPositionValue"},
kB:{"^":"bL;0l:x=,0m:y=","%":"CSSRotation"},
aX:{"^":"j;",$isaX:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kC:{"^":"bL;0l:x=,0m:y=","%":"CSSScale"},
kD:{"^":"iw;0j:length=",
bT:function(a,b){var z=a.getPropertyValue(this.cf(a,b))
return z==null?"":z},
cf:function(a,b){var z,y
z=$.$get$d3()
y=z[b]
if(typeof y==="string")return y
y=this.d0(a,b)
z[b]=y
return y},
d0:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.f6()+b
if(z in a)return z
return b},
gaN:function(a){return a.bottom},
gW:function(a){return a.height},
ga9:function(a){return a.left},
gaX:function(a){return a.right},
gam:function(a){return a.top},
gX:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eZ:{"^":"a;",
ga9:function(a){return this.bT(a,"left")}},
c9:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bL:{"^":"j;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kE:{"^":"c9;0j:length=","%":"CSSTransformValue"},
kF:{"^":"bL;0l:x=,0m:y=","%":"CSSTranslation"},
kG:{"^":"c9;0j:length=","%":"CSSUnparsedValue"},
kH:{"^":"j;0j:length=","%":"DataTransferItemList"},
kI:{"^":"j;0l:x=,0m:y=","%":"DeviceAcceleration"},
kJ:{"^":"j;",
i:function(a){return String(a)},
"%":"DOMException"},
kK:{"^":"f7;",
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"DOMPoint"},
f7:{"^":"j;",
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":";DOMPointReadOnly"},
kL:{"^":"iy;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.X,P.H]]},
$asm:function(){return[[P.X,P.H]]},
$ish:1,
$ash:function(){return[[P.X,P.H]]},
$isc:1,
$asc:function(){return[[P.X,P.H]]},
$asp:function(){return[[P.X,P.H]]},
"%":"ClientRectList|DOMRectList"},
f8:{"^":"j;",
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gX(a))+" x "+H.e(this.gW(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.aP(b,"$isX",[P.H],"$asX")
if(!z)return!1
z=J.bH(b)
return a.left===z.ga9(b)&&a.top===z.gam(b)&&this.gX(a)===z.gX(b)&&this.gW(a)===z.gW(b)},
gH:function(a){return W.ea(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gX(a)&0x1FFFFFFF,this.gW(a)&0x1FFFFFFF)},
gaN:function(a){return a.bottom},
gW:function(a){return a.height},
ga9:function(a){return a.left},
gaX:function(a){return a.right},
gam:function(a){return a.top},
gX:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isX:1,
$asX:function(){return[P.H]},
"%":";DOMRectReadOnly"},
kM:{"^":"iA;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.k]},
$asm:function(){return[P.k]},
$ish:1,
$ash:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]},
$asp:function(){return[P.k]},
"%":"DOMStringList"},
kN:{"^":"j;0j:length=","%":"DOMTokenList"},
iv:{"^":"bR;a,b",
gj:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.n(z[b],"$isR")},
h:function(a,b){this.a.appendChild(b)
return b},
gL:function(a){var z=this.dZ(this)
return new J.ag(z,z.length,0,[H.t(z,0)])},
$asm:function(){return[W.R]},
$ash:function(){return[W.R]},
$asc:function(){return[W.R]}},
R:{"^":"C;",
gbq:function(a){return new W.iv(a,a.children)},
gat:function(a){return P.h8(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.H)},
i:function(a){return a.localName},
$isR:1,
"%":";Element"},
Z:{"^":"j;",$isZ:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
T:{"^":"j;",
bo:["bY",function(a,b,c,d){H.d(c,{func:1,args:[W.Z]})
if(c!=null)this.cd(a,b,c,!1)}],
cd:function(a,b,c,d){return a.addEventListener(b,H.aQ(H.d(c,{func:1,args:[W.Z]}),1),!1)},
$isT:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eg|eh|ej|ek"},
aZ:{"^":"eQ;",$isaZ:1,"%":"File"},
l5:{"^":"iF;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aZ]},
$asm:function(){return[W.aZ]},
$ish:1,
$ash:function(){return[W.aZ]},
$isc:1,
$asc:function(){return[W.aZ]},
$asp:function(){return[W.aZ]},
"%":"FileList"},
l6:{"^":"T;0j:length=","%":"FileWriter"},
l9:{"^":"bx;0j:length=","%":"HTMLFormElement"},
b0:{"^":"j;",$isb0:1,"%":"Gamepad"},
la:{"^":"ci;0l:x=,0m:y=","%":"Gyroscope"},
lb:{"^":"j;0j:length=","%":"History"},
lc:{"^":"iS;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.C]},
$asm:function(){return[W.C]},
$ish:1,
$ash:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asp:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
b3:{"^":"co;",$isb3:1,"%":"KeyboardEvent"},
lh:{"^":"j;",
i:function(a){return String(a)},
"%":"Location"},
li:{"^":"ci;0l:x=,0m:y=","%":"Magnetometer"},
lk:{"^":"j;0j:length=","%":"MediaList"},
ll:{"^":"T;",
bo:function(a,b,c,d){H.d(c,{func:1,args:[W.Z]})
if(b==="message")a.start()
this.bY(a,b,c,!1)},
"%":"MessagePort"},
lm:{"^":"iY;",
k:function(a,b){return P.ao(a.get(H.I(b)))},
F:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ao(y.value[1]))}},
ga0:function(a){var z=H.f([],[P.k])
this.F(a,new W.fN(z))
return z},
gj:function(a){return a.size},
$asa0:function(){return[P.k,null]},
$isU:1,
$asU:function(){return[P.k,null]},
"%":"MIDIInputMap"},
fN:{"^":"o:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ln:{"^":"iZ;",
k:function(a,b){return P.ao(a.get(H.I(b)))},
F:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ao(y.value[1]))}},
ga0:function(a){var z=H.f([],[P.k])
this.F(a,new W.fO(z))
return z},
gj:function(a){return a.size},
$asa0:function(){return[P.k,null]},
$isU:1,
$asU:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
fO:{"^":"o:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b4:{"^":"j;",$isb4:1,"%":"MimeType"},
lo:{"^":"j0;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b4]},
$asm:function(){return[W.b4]},
$ish:1,
$ash:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asp:function(){return[W.b4]},
"%":"MimeTypeArray"},
ac:{"^":"co;",$isac:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iu:{"^":"bR;a",
gL:function(a){var z=this.a.childNodes
return new W.db(z,z.length,-1,[H.bq(C.D,z,"p",0)])},
gj:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asm:function(){return[W.C]},
$ash:function(){return[W.C]},
$asc:function(){return[W.C]}},
C:{"^":"T;",
i:function(a){var z=a.nodeValue
return z==null?this.bZ(a):z},
$isC:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
fT:{"^":"j2;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.C]},
$asm:function(){return[W.C]},
$ish:1,
$ash:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asp:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
b7:{"^":"j;0j:length=",$isb7:1,"%":"Plugin"},
ly:{"^":"j6;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b7]},
$asm:function(){return[W.b7]},
$ish:1,
$ash:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asp:function(){return[W.b7]},
"%":"PluginArray"},
lD:{"^":"jc;",
k:function(a,b){return P.ao(a.get(H.I(b)))},
F:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ao(y.value[1]))}},
ga0:function(a){var z=H.f([],[P.k])
this.F(a,new W.hh(z))
return z},
gj:function(a){return a.size},
$asa0:function(){return[P.k,null]},
$isU:1,
$asU:function(){return[P.k,null]},
"%":"RTCStatsReport"},
hh:{"^":"o:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lF:{"^":"bx;0j:length=","%":"HTMLSelectElement"},
ci:{"^":"T;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
ba:{"^":"T;",$isba:1,"%":"SourceBuffer"},
lG:{"^":"eh;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ba]},
$asm:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asp:function(){return[W.ba]},
"%":"SourceBufferList"},
bb:{"^":"j;",$isbb:1,"%":"SpeechGrammar"},
lH:{"^":"je;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bb]},
$asm:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asp:function(){return[W.bb]},
"%":"SpeechGrammarList"},
bc:{"^":"j;0j:length=",$isbc:1,"%":"SpeechRecognitionResult"},
lJ:{"^":"jh;",
k:function(a,b){return a.getItem(H.I(b))},
F:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga0:function(a){var z=H.f([],[P.k])
this.F(a,new W.hx(z))
return z},
gj:function(a){return a.length},
$asa0:function(){return[P.k,P.k]},
$isU:1,
$asU:function(){return[P.k,P.k]},
"%":"Storage"},
hx:{"^":"o:19;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bd:{"^":"j;",$isbd:1,"%":"CSSStyleSheet|StyleSheet"},
be:{"^":"T;",$isbe:1,"%":"TextTrack"},
bf:{"^":"T;",$isbf:1,"%":"TextTrackCue|VTTCue"},
lO:{"^":"jl;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bf]},
$asm:function(){return[W.bf]},
$ish:1,
$ash:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asp:function(){return[W.bf]},
"%":"TextTrackCueList"},
lP:{"^":"ek;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.be]},
$asm:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asp:function(){return[W.be]},
"%":"TextTrackList"},
lQ:{"^":"j;0j:length=","%":"TimeRanges"},
bg:{"^":"j;",$isbg:1,"%":"Touch"},
aF:{"^":"co;",$isaF:1,"%":"TouchEvent"},
lR:{"^":"jr;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bg]},
$asm:function(){return[W.bg]},
$ish:1,
$ash:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asp:function(){return[W.bg]},
"%":"TouchList"},
lS:{"^":"j;0j:length=","%":"TrackDefaultList"},
co:{"^":"Z;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lU:{"^":"j;",
i:function(a){return String(a)},
"%":"URL"},
lW:{"^":"j;0l:x=","%":"VRStageBoundsPoint"},
lX:{"^":"T;0j:length=","%":"VideoTrackList"},
bk:{"^":"ac;",
gdf:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.a9("deltaY is not supported"))},
gde:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.a9("deltaX is not supported"))},
$isbk:1,
"%":"WheelEvent"},
im:{"^":"T;",
cS:function(a,b){return a.requestAnimationFrame(H.aQ(H.d(b,{func:1,ret:-1,args:[P.H]}),1))},
cm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
m1:{"^":"jy;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aX]},
$asm:function(){return[W.aX]},
$ish:1,
$ash:function(){return[W.aX]},
$isc:1,
$asc:function(){return[W.aX]},
$asp:function(){return[W.aX]},
"%":"CSSRuleList"},
m2:{"^":"f8;",
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.aP(b,"$isX",[P.H],"$asX")
if(!z)return!1
z=J.bH(b)
return a.left===z.ga9(b)&&a.top===z.gam(b)&&a.width===z.gX(b)&&a.height===z.gW(b)},
gH:function(a){return W.ea(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gW:function(a){return a.height},
gX:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
m4:{"^":"jA;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b0]},
$asm:function(){return[W.b0]},
$ish:1,
$ash:function(){return[W.b0]},
$isc:1,
$asc:function(){return[W.b0]},
$asp:function(){return[W.b0]},
"%":"GamepadList"},
m5:{"^":"jC;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.C]},
$asm:function(){return[W.C]},
$ish:1,
$ash:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asp:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
m6:{"^":"jE;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bc]},
$asm:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asp:function(){return[W.bc]},
"%":"SpeechRecognitionResultList"},
m7:{"^":"jG;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bd]},
$asm:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asp:function(){return[W.bd]},
"%":"StyleSheetList"},
iB:{"^":"cj;a,b,c,$ti",
dw:function(a,b,c,d){var z=H.t(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.O(this.a,this.b,a,!1,z)}},
m3:{"^":"iB;a,b,c,$ti"},
iC:{"^":"dG;a,b,c,d,e,$ti",
d1:function(){var z=this.d
if(z!=null&&this.a<=0)J.eK(this.b,this.c,z,!1)},
p:{
O:function(a,b,c,d,e){var z=c==null?null:W.er(new W.iD(c),W.Z)
z=new W.iC(0,a,b,z,!1,[e])
z.d1()
return z}}},
iD:{"^":"o:4;a",
$1:function(a){return this.a.$1(H.n(a,"$isZ"))}},
p:{"^":"a;$ti",
gL:function(a){return new W.db(a,this.gj(a),-1,[H.bq(this,a,"p",0)])}},
db:{"^":"a;a,b,c,0d,$ti",
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.eJ(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gE:function(a){return this.d}},
iw:{"^":"j+eZ;"},
ix:{"^":"j+m;"},
iy:{"^":"ix+p;"},
iz:{"^":"j+m;"},
iA:{"^":"iz+p;"},
iE:{"^":"j+m;"},
iF:{"^":"iE+p;"},
iR:{"^":"j+m;"},
iS:{"^":"iR+p;"},
iY:{"^":"j+a0;"},
iZ:{"^":"j+a0;"},
j_:{"^":"j+m;"},
j0:{"^":"j_+p;"},
j1:{"^":"j+m;"},
j2:{"^":"j1+p;"},
j5:{"^":"j+m;"},
j6:{"^":"j5+p;"},
jc:{"^":"j+a0;"},
eg:{"^":"T+m;"},
eh:{"^":"eg+p;"},
jd:{"^":"j+m;"},
je:{"^":"jd+p;"},
jh:{"^":"j+a0;"},
jk:{"^":"j+m;"},
jl:{"^":"jk+p;"},
ej:{"^":"T+m;"},
ek:{"^":"ej+p;"},
jq:{"^":"j+m;"},
jr:{"^":"jq+p;"},
jx:{"^":"j+m;"},
jy:{"^":"jx+p;"},
jz:{"^":"j+m;"},
jA:{"^":"jz+p;"},
jB:{"^":"j+m;"},
jC:{"^":"jB+p;"},
jD:{"^":"j+m;"},
jE:{"^":"jD+p;"},
jF:{"^":"j+m;"},
jG:{"^":"jF+p;"}}],["","",,P,{"^":"",
ao:function(a){var z,y,x,w,v
if(a==null)return
z=P.fC(P.k,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.I(y[w])
z.M(0,v,a[v])}return z},
jS:function(a,b){var z={}
a.F(0,new P.jT(z))
return z},
d9:function(){var z=$.d8
if(z==null){z=J.c4(window.navigator.userAgent,"Opera",0)
$.d8=z}return z},
f6:function(){var z,y
z=$.d5
if(z!=null)return z
y=$.d6
if(y==null){y=J.c4(window.navigator.userAgent,"Firefox",0)
$.d6=y}if(y)z="-moz-"
else{y=$.d7
if(y==null){y=!P.d9()&&J.c4(window.navigator.userAgent,"Trident/",0)
$.d7=y}if(y)z="-ms-"
else z=P.d9()?"-o-":"-webkit-"}$.d5=z
return z},
jT:{"^":"o:14;a",
$2:function(a,b){this.a[a]=b}},
fi:{"^":"bR;a,b",
gaE:function(){var z,y,x
z=this.b
y=H.ap(z,"m",0)
x=W.R
return new H.fK(new H.ik(z,H.d(new P.fj(),{func:1,ret:P.an,args:[y]}),[y]),H.d(new P.fk(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.aU(this.gaE().a)},
k:function(a,b){var z=this.gaE()
return z.b.$1(J.cO(z.a,b))},
gL:function(a){var z=P.fG(this.gaE(),!1,W.R)
return new J.ag(z,z.length,0,[H.t(z,0)])},
$asm:function(){return[W.R]},
$ash:function(){return[W.R]},
$asc:function(){return[W.R]}},
fj:{"^":"o:18;",
$1:function(a){return!!J.D(H.n(a,"$isC")).$isR}},
fk:{"^":"o:34;",
$1:function(a){return H.aS(H.n(a,"$isC"),"$isR")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
b8:{"^":"a;l:a>,m:b>,$ti",
i:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
q:function(a,b){var z,y,x
if(b==null)return!1
z=H.aP(b,"$isb8",[P.H],null)
if(!z)return!1
z=this.a
y=J.bH(b)
x=y.gl(b)
if(z==null?x==null:z===x){z=this.b
y=y.gm(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gH:function(a){var z,y
z=J.af(this.a)
y=J.af(this.b)
return P.e9(P.bm(P.bm(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.n()
y=H.t(this,0)
z=H.u(z*b,y)
x=this.b
if(typeof x!=="number")return x.n()
return new P.b8(z,H.u(x*b,y),this.$ti)}},
j7:{"^":"a;$ti",
gaX:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.u(z+this.c,H.t(this,0))},
gaN:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.u(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.e(this.a)+", "+H.e(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.aP(b,"$isX",[P.H],"$asX")
if(!z)return!1
z=this.a
y=J.bH(b)
x=y.ga9(b)
if(z==null?x==null:z===x){x=this.b
w=y.gam(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.t(this,0)
if(H.u(z+this.c,w)===y.gaX(b)){if(typeof x!=="number")return x.G()
z=H.u(x+this.d,w)===y.gaN(b)}else z=!1}else z=!1}else z=!1
return z},
gH:function(a){var z,y,x,w,v
z=this.a
y=J.af(z)
x=this.b
w=J.af(x)
if(typeof z!=="number")return z.G()
v=H.t(this,0)
z=H.u(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.u(x+this.d,v)
return P.e9(P.bm(P.bm(P.bm(P.bm(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
bs:function(a,b){var z,y
H.w(b,"$isb8",[P.H],"$asb8")
z=b.a
y=this.a
if(typeof z!=="number")return z.bS()
if(typeof y!=="number")return H.y(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.bS()
if(typeof y!=="number")return H.y(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
X:{"^":"j7;a9:a>,am:b>,X:c>,W:d>,$ti",p:{
h8:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.Y()
if(c<0)z=-c*0
else z=c
H.u(z,e)
if(typeof d!=="number")return d.Y()
if(d<0)y=-d*0
else y=d
return new P.X(a,b,z,H.u(y,e),[e])}}}}],["","",,P,{"^":"",kO:{"^":"G;0l:x=,0m:y=","%":"SVGFEBlendElement"},kP:{"^":"G;0l:x=,0m:y=","%":"SVGFEColorMatrixElement"},kQ:{"^":"G;0l:x=,0m:y=","%":"SVGFEComponentTransferElement"},kR:{"^":"G;0l:x=,0m:y=","%":"SVGFECompositeElement"},kS:{"^":"G;0l:x=,0m:y=","%":"SVGFEConvolveMatrixElement"},kT:{"^":"G;0l:x=,0m:y=","%":"SVGFEDiffuseLightingElement"},kU:{"^":"G;0l:x=,0m:y=","%":"SVGFEDisplacementMapElement"},kV:{"^":"G;0l:x=,0m:y=","%":"SVGFEFloodElement"},kW:{"^":"G;0l:x=,0m:y=","%":"SVGFEGaussianBlurElement"},kX:{"^":"G;0l:x=,0m:y=","%":"SVGFEImageElement"},kY:{"^":"G;0l:x=,0m:y=","%":"SVGFEMergeElement"},kZ:{"^":"G;0l:x=,0m:y=","%":"SVGFEMorphologyElement"},l_:{"^":"G;0l:x=,0m:y=","%":"SVGFEOffsetElement"},l0:{"^":"G;0l:x=,0m:y=","%":"SVGFEPointLightElement"},l1:{"^":"G;0l:x=,0m:y=","%":"SVGFESpecularLightingElement"},l2:{"^":"G;0l:x=,0m:y=","%":"SVGFESpotLightElement"},l3:{"^":"G;0l:x=,0m:y=","%":"SVGFETileElement"},l4:{"^":"G;0l:x=,0m:y=","%":"SVGFETurbulenceElement"},l7:{"^":"G;0l:x=,0m:y=","%":"SVGFilterElement"},l8:{"^":"b1;0l:x=,0m:y=","%":"SVGForeignObjectElement"},fn:{"^":"b1;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b1:{"^":"G;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ld:{"^":"b1;0l:x=,0m:y=","%":"SVGImageElement"},bA:{"^":"j;",$isbA:1,"%":"SVGLength"},lg:{"^":"iU;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.k(a,b)},
$asm:function(){return[P.bA]},
$ish:1,
$ash:function(){return[P.bA]},
$isc:1,
$asc:function(){return[P.bA]},
$asp:function(){return[P.bA]},
"%":"SVGLengthList"},lj:{"^":"G;0l:x=,0m:y=","%":"SVGMaskElement"},bD:{"^":"j;",$isbD:1,"%":"SVGNumber"},lv:{"^":"j4;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.k(a,b)},
$asm:function(){return[P.bD]},
$ish:1,
$ash:function(){return[P.bD]},
$isc:1,
$asc:function(){return[P.bD]},
$asp:function(){return[P.bD]},
"%":"SVGNumberList"},lx:{"^":"G;0l:x=,0m:y=","%":"SVGPatternElement"},lz:{"^":"j;0l:x=,0m:y=","%":"SVGPoint"},lA:{"^":"j;0j:length=","%":"SVGPointList"},lB:{"^":"j;0l:x=,0m:y=","%":"SVGRect"},lC:{"^":"fn;0l:x=,0m:y=","%":"SVGRectElement"},lK:{"^":"jj;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.k(a,b)},
$asm:function(){return[P.k]},
$ish:1,
$ash:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]},
$asp:function(){return[P.k]},
"%":"SVGStringList"},G:{"^":"R;",
gbq:function(a){return new P.fi(a,new W.iu(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lL:{"^":"b1;0l:x=,0m:y=","%":"SVGSVGElement"},hC:{"^":"b1;","%":"SVGTextPathElement;SVGTextContentElement"},lN:{"^":"hC;0l:x=,0m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bE:{"^":"j;",$isbE:1,"%":"SVGTransform"},lT:{"^":"jt;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.k(a,b)},
$asm:function(){return[P.bE]},
$ish:1,
$ash:function(){return[P.bE]},
$isc:1,
$asc:function(){return[P.bE]},
$asp:function(){return[P.bE]},
"%":"SVGTransformList"},lV:{"^":"b1;0l:x=,0m:y=","%":"SVGUseElement"},iT:{"^":"j+m;"},iU:{"^":"iT+p;"},j3:{"^":"j+m;"},j4:{"^":"j3+p;"},ji:{"^":"j+m;"},jj:{"^":"ji+p;"},js:{"^":"j+m;"},jt:{"^":"js+p;"}}],["","",,P,{"^":"",ks:{"^":"j;0j:length=","%":"AudioBuffer"},kt:{"^":"it;",
k:function(a,b){return P.ao(a.get(H.I(b)))},
F:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ao(y.value[1]))}},
ga0:function(a){var z=H.f([],[P.k])
this.F(a,new P.eO(z))
return z},
gj:function(a){return a.size},
$asa0:function(){return[P.k,null]},
$isU:1,
$asU:function(){return[P.k,null]},
"%":"AudioParamMap"},eO:{"^":"o:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},ku:{"^":"T;0j:length=","%":"AudioTrackList"},eP:{"^":"T;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lw:{"^":"eP;0j:length=","%":"OfflineAudioContext"},it:{"^":"j+a0;"}}],["","",,P,{"^":"",dA:{"^":"j;",$isdA:1,"%":"WebGLRenderingContext"},hX:{"^":"j;",$ishX:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lI:{"^":"jg;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return P.ao(a.item(b))},
A:function(a,b){return this.k(a,b)},
$asm:function(){return[[P.U,,,]]},
$ish:1,
$ash:function(){return[[P.U,,,]]},
$isc:1,
$asc:function(){return[[P.U,,,]]},
$asp:function(){return[[P.U,,,]]},
"%":"SQLResultSetRowList"},jf:{"^":"j+m;"},jg:{"^":"jf+p;"}}],["","",,O,{"^":"",az:{"^":"a;0a,0b,0c,0d,$ti",
b2:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
bW:function(a,b,c){var z={func:1,ret:-1,args:[P.x,[P.h,H.ap(this,"az",0)]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
aw:function(a,b){return this.bW(a,null,b)},
cJ:function(a){H.w(a,"$ish",[H.ap(this,"az",0)],"$ash")
return!0},
c6:function(a,b){var z
H.w(b,"$ish",[H.ap(this,"az",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gj:function(a){return this.a.length},
gL:function(a){var z=this.a
return new J.ag(z,z.length,0,[H.t(z,0)])},
A:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ap(this,"az",0)
H.u(b,z)
z=[z]
if(this.cJ(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.c6(x,H.f([b],z))}},
$ish:1,
p:{
d_:function(a){var z=new O.az([a])
z.b2(a)
return z}}},cg:{"^":"a;0a,0b",
gj:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.a7()
this.b=z}return z},
c7:function(a){var z=this.b
if(!(z==null))z.O(a)},
a3:function(){return this.c7(null)},
gah:function(a){var z=this.a
if(z.length>0)return C.a.gaS(z)
else return V.bS()},
bG:function(a){var z=this.a
if(a==null)C.a.h(z,V.bS())
else C.a.h(z,a)
this.a3()},
aU:function(){var z=this.a
if(z.length>0){z.pop()
this.a3()}}}}],["","",,E,{"^":"",cR:{"^":"a;"},ah:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0N:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
bO:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.au(0,b,this):null
if(!J.K(y,this.x)){x=this.x
this.x=y
w=new D.J("matrix",x,y,this,[V.bC])
w.b=!0
this.U(w)}for(z=this.y.a,z=new J.ag(z,z.length,0,[H.t(z,0)]);z.B();)z.d.bO(0,b)},
aa:function(a){var z,y,x,w,v,u,t,s
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gah(z))
else C.a.h(z.a,y.n(0,z.gah(z)))
z.a3()
a.bH(this.f)
z=a.dy
x=(z&&C.a).gaS(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.k(0,"Depth")
if(w==null){z=a.a
w=new A.f3(z,"Depth")
w.c4(z,"Depth")
y=$.f5
v=$.f4
w.c=w.bd(y,35633)
w.d=w.bd(v,35632)
v=z.createProgram()
w.e=v
z.attachShader(v,w.c)
z.attachShader(w.e,w.d)
z.linkProgram(w.e)
if(!H.ev(z.getProgramParameter(w.e,35714))){u=z.getProgramInfoLog(w.e)
z.deleteProgram(w.e)
H.Y(P.a_("Failed to link shader: "+H.e(u)))}w.cX()
w.cZ()
w.x=w.f.k(0,"posAttr")
w.y=H.aS(w.r.k(0,"objClr"),"$iscr")
w.z=H.aS(w.r.k(0,"fogClr"),"$iscr")
w.Q=H.aS(w.r.k(0,"fogStart"),"$iscp")
w.ch=H.aS(w.r.k(0,"fogStop"),"$iscp")
w.cx=H.aS(w.r.k(0,"viewObjMat"),"$iscs")
w.cy=H.aS(w.r.k(0,"projMat"),"$iscs")
if(a.fr.br(0,"Depth"))H.Y(P.a_('Shader cache already contains a shader by the name "Depth".'))
a.fr.M(0,"Depth",w)}x.a=w
z=w}y=this.e
if(!(y instanceof Z.cV)){this.e=null
y=null}if(y==null){z=this.d.d6(new Z.ij(a.a),$.$get$al())
y=z.di($.$get$al())
v=x.a
y.e=v.x.c
this.e=z
z=v}a.a.useProgram(z.e)
z.f.dh()
y=x.b
v=z.y
v.toString
t=y.a
s=y.b
y=y.c
v.a.uniform3f(v.d,t,s,y)
y=x.c
s=z.z
s.toString
t=y.a
v=y.b
y=y.c
s.a.uniform3f(s.d,t,v,y)
y=x.d
v=z.Q
v.a.uniform1f(v.d,y)
y=x.e
v=z.ch
v.a.uniform1f(v.d,y)
y=a.cy
y=y.gah(y)
v=z.cy
v.toString
v.b_(y.bM(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gah(y)
v=a.dx
v=y.n(0,v.gah(v))
a.cx=v
y=v}z=z.cx
z.toString
z.b_(y.bM(0,!0))
y=this.e
y.aL(a)
y.aa(a)
y.e1(a)
y=x.a
y.toString
a.a.useProgram(null)
y.f.dg()}for(z=this.y.a,z=new J.ag(z,z.length,0,[H.t(z,0)]);z.B();)z.d.aa(a)
a.bF()
a.dx.aU()},
gw:function(){var z=this.z
if(z==null){z=D.a7()
this.z=z}return z},
U:function(a){var z=this.z
if(!(z==null))z.O(a)},
T:function(){return this.U(null)},
dH:[function(a){H.n(a,"$isr")
this.e=null
this.U(a)},function(){return this.dH(null)},"eu","$1","$0","gbD",0,2,1],
dG:[function(a){this.U(H.n(a,"$isr"))},function(){return this.dG(null)},"es","$1","$0","gbC",0,2,1],
dE:[function(a){this.U(H.n(a,"$isr"))},function(){return this.dE(null)},"eq","$1","$0","gbB",0,2,1],
ep:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ish",[E.ah],"$ash")
for(z=b.length,y=this.gbB(),x={func:1,ret:-1,args:[D.r]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gN()==null){t=new D.bw()
t.a=H.f([],w)
t.c=0
u.sN(t)}t=u.gN()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.T()},"$2","gdD",8,0,5],
er:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ish",[E.ah],"$ash")
for(z=b.length,y=this.gbB(),x={func:1,ret:-1,args:[D.r]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gN()==null){t=new D.bw()
t.a=H.f([],w)
t.c=0
u.sN(t)}t=u.gN()
t.toString
H.d(y,x)
C.a.J(t.a,y)}}this.T()},"$2","gdF",8,0,5],
$isdp:1,
p:{
ai:function(a,b,c,d,e,f){var z,y,x,w,v,u
z=new E.ah()
z.a=d
z.b=!0
y=O.d_(E.ah)
z.y=y
y.aw(z.gdD(),z.gdF())
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
y=z.c
if(y==null?e!=null:y!==e){z.c=e
z.d=e
z.e=null
if(y!=null){x=y.gw()
x.toString
w=H.d(z.gbD(),{func:1,ret:-1,args:[D.r]})
C.a.J(x.a,w)}x=z.c
if(x!=null){x=x.gw()
x.toString
w=H.d(z.gbD(),{func:1,ret:-1,args:[D.r]})
C.a.h(x.a,w)}v=new D.J("shape",y,z.c,z,[F.dD])
v.b=!0
z.U(v)}if(!J.K(z.r,c)){u=z.r
if(u!=null){y=u.gw()
y.toString
x=H.d(z.gbC(),{func:1,ret:-1,args:[D.r]})
C.a.J(y.a,x)}y=c.gw()
y.toString
x=H.d(z.gbC(),{func:1,ret:-1,args:[D.r]})
C.a.h(y.a,x)
z.r=c
v=new D.J("mover",u,c,z,[U.a2])
v.b=!0
z.U(v)}return z}}},hc:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
c2:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aY(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cg()
y=[V.bC]
z.a=H.f([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.r]}
v=H.d(new E.he(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cg()
z.a=H.f([],y)
v=z.gw()
v.toString
x=H.d(new E.hf(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cg()
z.a=H.f([],y)
y=z.gw()
y.toString
w=H.d(new E.hg(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.cm])
this.dy=z
C.a.h(z,null)
this.fr=new H.aC(0,0,[P.k,A.dC])},
bH:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaS(z):a;(z&&C.a).h(z,y)},
bF:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
hd:function(a,b){var z=new E.hc(a,b)
z.c2(a,b)
return z}}},he:{"^":"o:10;a",
$1:function(a){var z
H.n(a,"$isr")
z=this.a
z.z=null
z.ch=null}},hf:{"^":"o:10;a",
$1:function(a){var z
H.n(a,"$isr")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hg:{"^":"o:10;a",
$1:function(a){var z
H.n(a,"$isr")
z=this.a
z.ch=null
z.cx=null}},hE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0N:x@,0y,0z,0Q,0ch",
gw:function(){var z=this.x
if(z==null){z=D.a7()
this.x=z}return z},
c9:[function(a){var z
H.n(a,"$isr")
z=this.x
if(!(z==null))z.O(a)
this.dT()},function(){return this.c9(null)},"c8","$1","$0","gb3",0,2,1],
gdl:function(){var z,y,x
z=Date.now()
y=C.b.a8(P.da(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aY(z,!1)
return x/y},
bj:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.y(z)
x=C.e.by(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.n()
w=C.e.by(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
dT:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.hG(this),{func:1,ret:-1,args:[P.H]})
C.o.cm(z)
C.o.cS(z,W.er(y,P.H))}},
dS:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.bj()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aY(w,!1)
x.y=P.da(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sj(w.a,0)
w.a3()
w=x.db
C.a.sj(w.a,0)
w.a3()
w=x.dx
C.a.sj(w.a,0)
w.a3()
w=x.dy;(w&&C.a).sj(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aa(this.e)}}catch(v){z=H.ay(v)
y=H.aR(v)
P.cL("Error: "+H.e(z))
P.cL("Stack: "+H.e(y))
throw H.b(z)}},
p:{
hF:function(a,b,c,d,e){var z,y,x,w
z=J.D(a)
if(!!z.$isc7)return E.dK(a,!0,!0,!0,!1)
y=W.cY(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbq(a).h(0,y)
w=E.dK(y,!0,!0,!0,!1)
w.a=a
return w},
dK:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hE()
y=P.fD(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
x=C.f.aZ(a,"webgl",y)
x=H.n(x==null?C.f.aZ(a,"experimental-webgl",y):x,"$isdA")
if(x==null)H.Y(P.a_("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hd(x,a)
w=new T.hD(x)
w.b=H.P(x.getParameter(3379))
w.c=H.P(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.i5(a)
v=new X.fy()
v.c=new X.b5(!1,!1,!1)
v.d=P.fE(null,null,null,P.x)
w.b=v
v=new X.fP(w)
v.f=0
v.r=new V.N(0,0)
v.x=new V.N(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fH(w)
v.r=0
v.x=new V.N(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.hL(w)
v.e=0
v.f=new V.N(0,0)
v.r=new V.N(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.dG,P.a]])
w.z=v
u=document
t=W.ac
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.O(u,"contextmenu",H.d(w.gcv(),s),!1,t))
v=w.z
r=W.Z
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.O(a,"focus",H.d(w.gcA(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.O(a,"blur",H.d(w.gcs(),q),!1,r))
v=w.z
p=W.b3
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.O(u,"keyup",H.d(w.gcC(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.O(u,"keydown",H.d(w.gcB(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.O(a,"mousedown",H.d(w.gcE(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.O(a,"mouseup",H.d(w.gcG(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.O(a,"mousemove",H.d(w.gcF(),s),!1,t))
p=w.z
o=W.bk;(p&&C.a).h(p,W.O(a,H.I(W.fc(a)),H.d(w.gcH(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.O(u,"mousemove",H.d(w.gcw(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.O(u,"mouseup",H.d(w.gcz(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.O(u,"pointerlockchange",H.d(w.gcI(),q),!1,r))
r=w.z
q=W.aF
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.O(a,"touchstart",H.d(w.gcN(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.O(a,"touchend",H.d(w.gcL(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.O(a,"touchmove",H.d(w.gcM(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aY(Date.now(),!1)
z.ch=0
z.bj()
return z}}},hG:{"^":"o:20;a",
$1:function(a){var z
H.kd(a)
z=this.a
if(z.z){z.z=!1
z.dS()}}}}],["","",,Z,{"^":"",e5:{"^":"a;a,b",p:{
cu:function(a,b,c){var z
H.w(c,"$isc",[P.x],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cy(c)),35044)
a.bindBuffer(b,null)
return new Z.e5(b,z)}}},cU:{"^":"cR;a,b,c,d,e",
aL:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ay(y)
x=P.a_('Failed to bind buffer attribute "'+J.a6(this.a)+'": '+H.e(z))
throw H.b(x)}},
i:function(a){return"["+J.a6(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.e(this.e)+"]"}},ij:{"^":"a;a",$iskv:1},cV:{"^":"a;a,0b,c,d",
di:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aL:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aL(a)},
e1:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aa:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.k]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a6(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.v(y,", ")+"\nAttrs:   "+C.a.v(u,", ")},
$islM:1},bP:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aD(this.c)+"'")+"]"}},e1:{"^":"a;a",
gb0:function(a){var z,y
z=this.a
y=(z&$.$get$al().a)!==0?3:0
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aJ().a)!==0)y+=2
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$bi().a)!==0)y+=3
if((z&$.$get$bj().a)!==0)y+=4
if((z&$.$get$aL().a)!==0)++y
return(z&$.$get$aG().a)!==0?y+4:y},
d4:function(a){var z,y,x
z=$.$get$al()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bi()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bj()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0)if(x===a)return z
return $.$get$e4()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.e1))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.f([],[P.k])
y=this.a
if((y&$.$get$al().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aK().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bi().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bj().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.v(z,"|")},
p:{
a4:function(a){return new Z.e1(a)}}}}],["","",,D,{"^":"",eT:{"^":"a;"},bw:{"^":"a;0a,0b,0c",
O:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.r(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.F(y,new D.fg(z))
return x!==0},
dU:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.O(y)}}},
ak:function(a){return this.dU(a,!0,!1)},
p:{
a7:function(){var z=new D.bw()
z.a=H.f([],[{func:1,ret:-1,args:[D.r]}])
z.c=0
return z}}},fg:{"^":"o:21;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.r]})
z=this.a.a
z.b
a.$1(z)}},r:{"^":"a;a,0b"},dd:{"^":"r;c,d,a,0b,$ti"},de:{"^":"r;c,d,a,0b,$ti"},J:{"^":"r;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}}],["","",,X,{"^":"",cW:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cW))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)},
p:{"^":"kw<"}},dh:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dh))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}},fy:{"^":"a;0a,0b,0c,0d",
dN:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
dJ:function(a){this.c=a.b
this.d.J(0,a.a)
return!1}},fH:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aT:function(a,b){this.r=a.a
return!1},
aj:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.bV()
if(typeof z!=="number")return z.bQ()
this.r=(z&~y)>>>0
return!1},
ai:function(a,b){return!1},
dO:function(a){return!1},
cD:function(a,b,c){return}},b5:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b5))return!1
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
return z+(this.c?"Shift+":"")}},fP:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
aT:function(a,b){this.f=a.a
return!1},
aj:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.bV()
if(typeof z!=="number")return z.bQ()
this.f=(z&~y)>>>0
return!1},
ai:function(a,b){return!1},
dP:function(a,b){return!1}},fZ:{"^":"r;"},hK:{"^":"fZ;x,y,z,Q,ch,c,d,e,a,0b"},hL:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
bf:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.N],"$asc")
z=new P.aY(Date.now(),!1)
y=a.length>0?a[0]:new V.N(0,0)
x=this.a.gd7()
w=new X.hK(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
dM:function(a){var z
H.w(a,"$isc",[V.N],"$asc")
z=this.b
if(z==null)return!1
z.O(this.bf(a,!0))
return!0},
dK:function(a){var z
H.w(a,"$isc",[V.N],"$asc")
z=this.c
if(z==null)return!1
z.O(this.bf(a,!0))
return!0},
dL:function(a){H.w(a,"$isc",[V.N],"$asc")
return!1}},i5:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gd7:function(){var z=this.a
return V.dz(0,0,(z&&C.f).gat(z).c,C.f.gat(z).d)},
bc:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dh(z,new X.b5(y,a.altKey,a.shiftKey))},
a7:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b5(y,a.altKey,a.shiftKey)},
aK:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b5(y,a.altKey,a.shiftKey)},
a_:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.a2()
v=z.top
if(typeof x!=="number")return x.a2()
return new V.N(y-w,x-v)},
ac:function(a){return new V.bh(a.movementX,a.movementY)},
aH:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.N])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.e.S(u.pageX)
C.e.S(u.pageY)
s=z.left
C.e.S(u.pageX)
C.a.h(y,new V.N(t-s,C.e.S(u.pageY)-z.top))}return y},
Z:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.cW(z,new X.b5(y,a.altKey,a.shiftKey))},
ed:[function(a){this.f=!0},"$1","gcA",4,0,4],
e6:[function(a){this.f=!1},"$1","gcs",4,0,4],
ea:[function(a){if(this.f)a.preventDefault()},"$1","gcv",4,0,4],
ef:[function(a){var z
H.n(a,"$isb3")
if(!this.f)return
z=this.bc(a)
this.b.dN(z)},"$1","gcC",4,0,17],
ee:[function(a){var z
H.n(a,"$isb3")
if(!this.f)return
z=this.bc(a)
this.b.dJ(z)},"$1","gcB",4,0,17],
eg:[function(a){var z,y,x,w
H.n(a,"$isac")
z=this.a
z.focus()
this.f=!0
this.a7(a)
if(this.x){y=this.Z(a)
x=this.ac(a)
if(this.d.aT(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.Z(a)
w=this.a_(a)
if(this.c.aT(y,w))a.preventDefault()},"$1","gcE",4,0,3],
ei:[function(a){var z,y,x
H.n(a,"$isac")
this.a7(a)
z=this.Z(a)
if(this.x){y=this.ac(a)
if(this.d.aj(z,y))a.preventDefault()
return}if(this.r)return
x=this.a_(a)
if(this.c.aj(z,x))a.preventDefault()},"$1","gcG",4,0,3],
ec:[function(a){var z,y,x,w
H.n(a,"$isac")
z=this.a
if(!(z&&C.f).gat(z).bs(0,new P.b8(a.clientX,a.clientY,[P.H]))){this.a7(a)
y=this.Z(a)
if(this.x){x=this.ac(a)
if(this.d.aj(y,x))a.preventDefault()
return}if(this.r)return
w=this.a_(a)
if(this.c.aj(y,w))a.preventDefault()}},"$1","gcz",4,0,3],
eh:[function(a){var z,y,x
H.n(a,"$isac")
this.a7(a)
z=this.Z(a)
if(this.x){y=this.ac(a)
if(this.d.ai(z,y))a.preventDefault()
return}if(this.r)return
x=this.a_(a)
if(this.c.ai(z,x))a.preventDefault()},"$1","gcF",4,0,3],
eb:[function(a){var z,y,x,w
H.n(a,"$isac")
z=this.a
if(!(z&&C.f).gat(z).bs(0,new P.b8(a.clientX,a.clientY,[P.H]))){this.a7(a)
y=this.Z(a)
if(this.x){x=this.ac(a)
if(this.d.ai(y,x))a.preventDefault()
return}if(this.r)return
w=this.a_(a)
if(this.c.ai(y,w))a.preventDefault()}},"$1","gcw",4,0,3],
ej:[function(a){var z,y
H.n(a,"$isbk")
this.a7(a)
z=new V.bh((a&&C.n).gde(a),C.n.gdf(a)).I(0,180)
if(this.x){if(this.d.dO(z))a.preventDefault()
return}if(this.r)return
y=this.a_(a)
if(this.c.dP(z,y))a.preventDefault()},"$1","gcH",4,0,24],
ek:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.Z(this.y)
v=this.a_(this.y)
this.d.cD(w,v,x)}},"$1","gcI",4,0,4],
eo:[function(a){var z
H.n(a,"$isaF")
this.a.focus()
this.f=!0
this.aK(a)
z=this.aH(a)
if(this.e.dM(z))a.preventDefault()},"$1","gcN",4,0,9],
em:[function(a){var z
H.n(a,"$isaF")
this.aK(a)
z=this.aH(a)
if(this.e.dK(z))a.preventDefault()},"$1","gcL",4,0,9],
en:[function(a){var z
H.n(a,"$isaF")
this.aK(a)
z=this.aH(a)
if(this.e.dL(z))a.preventDefault()},"$1","gcM",4,0,9]}}],["","",,V,{"^":"",
ky:[function(a,b){if(typeof b!=="number")return b.a2()
if(typeof a!=="number")return H.y(a)
return Math.abs(b-a)<=1e-9},"$2","fM",8,0,22],
cM:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.bU(a-b,z)
return(a<0?a+z:a)+b},
B:function(a,b,c){if(a==null)return C.c.a1("null",c)
return C.c.a1(C.e.bN($.l.$2(a,0)?0:a,b),c+b+1)},
c0:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.q],"$asc")
z=H.f([],[P.k])
for(y=0,x=0;x<4;++x){w=V.B(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.i(z,v)
C.a.M(z,v,C.c.a1(z[v],y))}return z},
bt:{"^":"a;a,b,c",
n:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.bt(z,y,x)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bt))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}},
bu:{"^":"a;a,b,c,d",
n:function(a,b){var z,y,x,w
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
return new V.bu(z,y,x,w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bu))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}},
bC:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
bM:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
n:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.n(a7,"$isbC")
z=this.a
y=a7.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.y(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.y(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.y(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.n()
if(typeof s!=="number")return H.y(s)
r=a7.b
if(typeof r!=="number")return H.y(r)
q=a7.f
if(typeof q!=="number")return H.y(q)
p=a7.z
if(typeof p!=="number")return H.y(p)
o=a7.cy
if(typeof o!=="number")return H.y(o)
n=a7.c
if(typeof n!=="number")return H.y(n)
m=a7.r
if(typeof m!=="number")return H.y(m)
l=a7.Q
if(typeof l!=="number")return H.y(l)
k=a7.db
if(typeof k!=="number")return H.y(k)
j=a7.d
if(typeof j!=="number")return H.y(j)
i=a7.x
if(typeof i!=="number")return H.y(i)
h=a7.ch
if(typeof h!=="number")return H.y(h)
g=a7.dx
if(typeof g!=="number")return H.y(g)
f=this.e
if(typeof f!=="number")return f.n()
e=this.f
if(typeof e!=="number")return e.n()
d=this.r
if(typeof d!=="number")return d.n()
c=this.x
if(typeof c!=="number")return c.n()
b=this.y
if(typeof b!=="number")return b.n()
a=this.z
if(typeof a!=="number")return a.n()
a0=this.Q
if(typeof a0!=="number")return a0.n()
a1=this.ch
if(typeof a1!=="number")return a1.n()
a2=this.cx
if(typeof a2!=="number")return a2.n()
a3=this.cy
if(typeof a3!=="number")return a3.n()
a4=this.db
if(typeof a4!=="number")return a4.n()
a5=this.dx
if(typeof a5!=="number")return a5.n()
return V.aj(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bC))return!1
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
bz:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.c0(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.c0(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.c0(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.c0(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
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
u:function(a){return this.bz(a,3,0)},
D:function(){return this.bz("",3,0)},
p:{
aj:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bS:function(){return V.aj(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
N:{"^":"a;l:a>,m:b>",
n:function(a,b){return new V.N(this.a*b,this.b*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}},
as:{"^":"a;l:a>,m:b>,c",
a2:function(a,b){return new V.as(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){return new V.as(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}},
dy:{"^":"a;l:a>,m:b>,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dy))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"},
p:{
dz:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dy(a,b,c,d)}}},
bh:{"^":"a;a,b",
du:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.n()
y=this.b
if(typeof y!=="number")return y.n()
return Math.sqrt(z*z+y*y)},"$0","gj",1,0,13],
n:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.n()
y=this.b
if(typeof y!=="number")return y.n()
return new V.bh(z*b,y*b)},
I:function(a,b){var z,y
if($.l.$2(b,0))return new V.bh(0,0)
z=this.a
if(typeof z!=="number")return z.I()
y=this.b
if(typeof y!=="number")return y.I()
return new V.bh(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bh))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}},
L:{"^":"a;a,b,c",
du:[function(a){return Math.sqrt(this.K(this))},"$0","gj",1,0,13],
K:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ad:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.L(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
av:function(a){return new V.L(-this.a,-this.b,-this.c)},
n:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
I:function(a,b){if($.l.$2(b,0))return new V.L(0,0,0)
return new V.L(this.a/b,this.b/b,this.c/b)},
ds:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}}],["","",,U,{"^":"",d0:{"^":"a2;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.a7()
this.b=z}return z},
au:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d0))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")},
p:{
d1:function(a){var z=new U.d0()
z.a=a
return z}}},dc:{"^":"az;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.a7()
this.e=z}return z},
P:[function(a){var z
H.n(a,"$isr")
z=this.e
if(!(z==null))z.O(a)},function(){return this.P(null)},"e2","$1","$0","gb4",0,2,1],
e5:[function(a,b){var z,y,x,w,v,u,t
z=U.a2
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gb4(),w={func:1,ret:-1,args:[D.r]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.d(x,w)
C.a.h(t.a,x)}}z=new D.dd(a,b,this,[z])
z.b=!0
this.P(z)},"$2","gcr",8,0,12],
el:[function(a,b){var z,y,x,w,v,u,t
z=U.a2
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gb4(),w={func:1,ret:-1,args:[D.r]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.d(x,w)
C.a.J(t.a,x)}}z=new D.de(a,b,this,[z])
z.b=!0
this.P(z)},"$2","gcK",8,0,12],
au:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.Y()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ag(z,z.length,0,[H.t(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.au(0,b,c)
if(w!=null)x=x==null?w:w.n(0,x)}}this.f=x==null?V.bS():x
z=this.e
if(!(z==null))z.ak(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dc))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.K(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a2]},
$asaz:function(){return[U.a2]},
$isa2:1},a2:{"^":"eT;"},dB:{"^":"a2;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.a7()
this.y=z}return z},
P:function(a){var z=this.y
if(!(z==null))z.O(a)},
sbP:function(a){var z,y
a=V.cM(a,0,6.283185307179586)
z=this.a
if(!$.l.$2(z,a)){y=this.a
this.a=a
z=new D.J("yaw",y,a,this,[P.q])
z.b=!0
this.P(z)}},
sbE:function(a,b){var z,y
b=V.cM(b,0,6.283185307179586)
z=this.b
if(!$.l.$2(z,b)){y=this.b
this.b=b
z=new D.J("pitch",y,b,this,[P.q])
z.b=!0
this.P(z)}},
sbI:function(a){var z,y
a=V.cM(a,0,6.283185307179586)
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
z=new D.J("roll",y,a,this,[P.q])
z.b=!0
this.P(z)}},
sbw:function(a){var z,y
z=this.d
if(!$.l.$2(z,a)){y=this.d
this.d=a
z=new D.J("deltaYaw",y,a,this,[P.q])
z.b=!0
this.P(z)}},
sbu:function(a){var z,y
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=new D.J("deltaPitch",y,a,this,[P.q])
z.b=!0
this.P(z)}},
sbv:function(a){var z,y
z=this.f
if(!$.l.$2(z,a)){y=this.f
this.f=a
z=new D.J("deltaRoll",y,a,this,[P.q])
z.b=!0
this.P(z)}},
au:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sbP(this.a+this.d*b.y)
this.sbE(0,this.b+this.e*b.y)
this.sbI(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
z=V.aj(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1)
y=this.b
x=Math.cos(y)
w=Math.sin(y)
z=z.n(0,V.aj(x,0,-w,0,0,1,0,0,w,0,x,0,0,0,0,1))
y=this.a
x=Math.cos(y)
w=Math.sin(y)
this.x=z.n(0,V.aj(1,0,0,0,0,x,-w,0,0,w,x,0,0,0,0,1))
z=this.y
if(!(z==null))z.ak(0)}return this.x},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dB))return!1
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
i:function(a){return"Rotater: ["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"], ["+V.B(this.d,3,0)+", "+V.B(this.e,3,0)+", "+V.B(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fe:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
a4:[function(a){var z
H.n(a,"$isr")
z=this.x
if(!(z==null))z.O(a)},function(){return this.a4(null)},"e3","$1","$0","gV",0,2,1],
e8:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ah
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gN()==null){s=new D.bw()
s.a=H.f([],v)
s.c=0
t.sN(s)}s=t.gN()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.dd(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","gct",8,0,5],
e9:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ah
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gN()==null){s=new D.bw()
s.a=H.f([],v)
s.c=0
t.sN(s)}s=t.gN()
s.toString
H.d(x,w)
C.a.J(s.a,x)}}z=new D.de(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","gcu",8,0,5],
sbK:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.d(this.gV(),{func:1,ret:-1,args:[D.r]})
C.a.J(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.d(this.gV(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,y)}z=new D.J("technique",x,this.c,this,[O.cm])
z.b=!0
this.a4(z)}},
gw:function(){var z=this.x
if(z==null){z=D.a7()
this.x=z}return z},
aa:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.bH(this.c)
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
if(typeof x!=="number")return H.y(x)
u=C.b.S(v.a*x)
if(typeof w!=="number")return H.y(w)
t=C.b.S(v.b*w)
s=C.b.S(v.c*x)
a.c=s
v=C.b.S(v.d*w)
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
s.bG(V.aj(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dt
if(y==null){y=new V.L(0,0,-1)
m=y.I(0,Math.sqrt(y.K(y)))
y=new V.L(0,1,0).ad(m)
l=y.I(0,Math.sqrt(y.K(y)))
k=m.ad(l)
j=new V.L(0,0,0)
y=V.aj(l.a,k.a,m.a,l.av(0).K(j),l.b,k.b,m.b,k.av(0).K(j),l.c,k.c,m.c,m.av(0).K(j),0,0,0,1)
$.dt=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.n(0,i)}a.db.bG(i)
for(z=this.d.a,z=new J.ag(z,z.length,0,[H.t(z,0)]);z.B();)z.d.bO(0,a)
for(z=this.d.a,z=new J.ag(z,z.length,0,[H.t(z,0)]);z.B();)z.d.aa(a)
this.a.toString
a.cy.aU()
a.db.aU()
this.b.toString
a.bF()},
$islE:1}}],["","",,A,{"^":"",cQ:{"^":"a;a,b,c"},eN:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
dh:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dg:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},f3:{"^":"dC;0x,0y,0z,0Q,0ch,0cx,0cy,a,b,0c,0d,0e,0f,0r"},dC:{"^":"cR;",
c4:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
bd:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.ev(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.b(P.a_("Error compiling shader '"+H.e(y)+"': "+H.e(x)))}return y},
cX:function(){var z,y,x,w,v,u
z=H.f([],[A.cQ])
y=this.a
x=H.P(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.cQ(y,v.name,u))}this.f=new A.eN(z)},
cZ:function(){var z,y,x,w,v,u
z=H.f([],[A.V])
y=this.a
x=H.P(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.dd(v.type,v.size,v.name,u))}this.r=new A.hW(z)},
a6:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.hP(z,y,b,c)
else return A.cq(z,y,b,a,c)},
cj:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.i_(z,y,b,c)
else return A.cq(z,y,b,a,c)},
ck:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.i0(z,y,b,c)
else return A.cq(z,y,b,a,c)},
as:function(a,b){return new P.e7(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
dd:function(a,b,c,d){switch(a){case 5120:return this.a6(b,c,d)
case 5121:return this.a6(b,c,d)
case 5122:return this.a6(b,c,d)
case 5123:return this.a6(b,c,d)
case 5124:return this.a6(b,c,d)
case 5125:return this.a6(b,c,d)
case 5126:return new A.cp(this.a,this.e,c,d)
case 35664:return new A.hR(this.a,this.e,c,d)
case 35665:return new A.cr(this.a,this.e,c,d)
case 35666:return new A.hU(this.a,this.e,c,d)
case 35667:return new A.hS(this.a,this.e,c,d)
case 35668:return new A.hT(this.a,this.e,c,d)
case 35669:return new A.hV(this.a,this.e,c,d)
case 35674:return new A.hY(this.a,this.e,c,d)
case 35675:return new A.hZ(this.a,this.e,c,d)
case 35676:return new A.cs(this.a,this.e,c,d)
case 35678:return this.cj(b,c,d)
case 35680:return this.ck(b,c,d)
case 35670:throw H.b(this.as("BOOL",c))
case 35671:throw H.b(this.as("BOOL_VEC2",c))
case 35672:throw H.b(this.as("BOOL_VEC3",c))
case 35673:throw H.b(this.as("BOOL_VEC4",c))
default:throw H.b(P.a_("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}},V:{"^":"a;"},hW:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.D()},
dk:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
D:function(){return this.dk("\n")}},hP:{"^":"V;a,b,c,d",
i:function(a){return"Uniform1i: "+H.e(this.c)}},hS:{"^":"V;a,b,c,d",
i:function(a){return"Uniform2i: "+H.e(this.c)}},hT:{"^":"V;a,b,c,d",
i:function(a){return"Uniform3i: "+H.e(this.c)}},hV:{"^":"V;a,b,c,d",
i:function(a){return"Uniform4i: "+H.e(this.c)}},hQ:{"^":"V;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.e(this.c)},
p:{
cq:function(a,b,c,d,e){var z=new A.hQ(a,b,c,e)
z.f=d
z.e=P.fF(d,0,!1,P.x)
return z}}},cp:{"^":"V;a,b,c,d",
i:function(a){return"Uniform1f: "+H.e(this.c)}},hR:{"^":"V;a,b,c,d",
i:function(a){return"Uniform2f: "+H.e(this.c)}},cr:{"^":"V;a,b,c,d",
i:function(a){return"Uniform3f: "+H.e(this.c)}},hU:{"^":"V;a,b,c,d",
i:function(a){return"Uniform4f: "+H.e(this.c)}},hY:{"^":"V;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}},hZ:{"^":"V;a,b,c,d",
i:function(a){return"UniformMat3: "+H.e(this.c)}},cs:{"^":"V;a,b,c,d",
b_:function(a){var z=new Float32Array(H.cy(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.e(this.c)}},i_:{"^":"V;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.e(this.c)}},i0:{"^":"V;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}}],["","",,F,{"^":"",
kl:function(a,b,c,d){return F.jU(c,a,d,b,new F.km())},
jU:function(a,b,c,d,e){var z,y
z=F.kj(a,b,new F.jV(H.d(e,{func:1,ret:V.as,args:[P.q]}),d,b,c),null)
if(z==null)return
y=z.e
if(!(y==null))++y.c
z.d.aP()
z.a.aP()
y=z.e
if(!(y==null))y.ak(0)
z.dB(new F.id(),new F.fU())
return z},
kj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[F.ak,P.q,P.q]})
if(a<1)return
if(b<1)return
z=new F.dD()
y=new F.i8(z)
y.b=!1
x=[F.ak]
y.c=H.f([],x)
z.a=y
y=new F.hp(z)
y.b=H.f([],[F.du])
z.b=y
y=new F.ho(z)
y.b=H.f([],[F.di])
z.c=y
y=new F.hn(z)
y.b=H.f([],[F.ab])
z.d=y
z.e=null
w=H.f([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.ct(null,null,new V.bu(x,0,0,1),null,null,new V.N(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.bt(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.ct(null,null,new V.bu(o,n,m,1),null,null,new V.N(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.bt(d))}}z.d.d2(a+1,b+1,w)
return z},
km:{"^":"o:28;",
$1:function(a){return new V.as(Math.cos(a),Math.sin(a),0)}},
jV:{"^":"o:29;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.cN(y.$1(z),x)
x=J.cN(y.$1(z+3.141592653589793/this.c),x).a2(0,w)
x=new V.L(x.a,x.b,x.c)
v=x.I(0,Math.sqrt(x.K(x)))
u=new V.L(1,0,0)
y=v.ad(!v.q(0,u)?new V.L(0,0,1):u)
t=y.I(0,Math.sqrt(y.K(y)))
y=t.ad(v)
u=y.I(0,Math.sqrt(y.K(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.n(0,y*x)
x=t.n(0,r*x)
x=new V.as(w.a+(y.a-x.a),w.b+(y.b-x.b),w.c+(y.c-x.c))
if(!J.K(a.f,x)){a.f=x
y=a.a
if(y!=null)y.T()}}},
ab:{"^":"a;0a,0b,0c,0d,0e",
ae:function(){if(!this.gbx()){C.a.J(this.a.a.d.b,this)
this.a.a.T()}this.cP()
this.cQ()
this.cR()},
cU:function(a){this.a=a
C.a.h(a.d.b,this)},
cV:function(a){this.b=a
C.a.h(a.d.c,this)},
cW:function(a){this.c=a
C.a.h(a.d.d,this)},
cP:function(){var z=this.a
if(z!=null){C.a.J(z.d.b,this)
this.a=null}},
cQ:function(){var z=this.b
if(z!=null){C.a.J(z.d.c,this)
this.b=null}},
cR:function(){var z=this.c
if(z!=null){C.a.J(z.d.d,this)
this.c=null}},
gbx:function(){return this.a==null||this.b==null||this.c==null},
ce:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.L(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.ds())return
return v.I(0,Math.sqrt(v.K(v)))},
cg:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.a2(0,y)
z=new V.L(z.a,z.b,z.c)
v=z.I(0,Math.sqrt(z.K(z)))
z=w.a2(0,y)
z=new V.L(z.a,z.b,z.c)
z=v.ad(z.I(0,Math.sqrt(z.K(z))))
return z.I(0,Math.sqrt(z.K(z)))},
aO:function(){if(this.d!=null)return!0
var z=this.ce()
if(z==null){z=this.cg()
if(z==null)return!1}this.d=z
this.a.a.T()
return!0},
gd8:function(a){if(J.K(this.a,this.b))return!0
if(J.K(this.b,this.c))return!0
if(J.K(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
u:function(a){var z,y
if(this.gbx())return a+"disposed"
z=a+C.c.a1(J.a6(this.a.e),0)+", "+C.c.a1(J.a6(this.b.e),0)+", "+C.c.a1(J.a6(this.c.e),0)+" {"
y=this.d
z=(y!=null?z+(y.i(0)+", "):z+"-, ")+"-}"
return z},
D:function(){return this.u("")},
p:{
bN:function(a,b,c){var z,y,x
z=new F.ab()
y=a.a
if(y==null)H.Y(P.a_("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.Y(P.a_("May not create a face with vertices attached to different shapes."))
z.cU(a)
z.cV(b)
z.cW(c)
C.a.h(z.a.a.d.b,z)
z.a.a.T()
return z}}},
fh:{"^":"a;"},
hu:{"^":"fh;",
ag:function(a,b,c){var z,y
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
di:{"^":"a;"},
fz:{"^":"a;"},
hO:{"^":"fz;",
ag:function(a,b,c){var z,y
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
du:{"^":"a;"},
dD:{"^":"a;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.a7()
this.e=z}return z},
co:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ak],"$asc")
H.w(e,"$isc",[P.x],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.ag(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
dB:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ak],x=[P.x];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.f([],z)
t=H.f([],x)
if(this.co(a,v,y,u,t))b.dA(u)}this.a.t()
this.c.aV()
this.d.aV()
this.b.dR()
this.c.aW(new F.hO())
this.d.aW(new F.hu())
z=this.e
if(!(z==null))z.ak(0)},
d6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$al()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$bi().a)!==0)++w
if((x&$.$get$bj().a)!==0)++w
if((x&$.$get$aL().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
v=b.gb0(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.cU])
for(r=0,q=0;q<w;++q){p=b.d4(q)
o=p.gb0(p)
C.a.M(s,q,new Z.cU(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].dv(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.M(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cy(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cV(new Z.e5(34962,j),s,b)
i.b=H.f([],[Z.bP])
if(this.b.b.length!==0){x=P.x
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)}f=Z.cu(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bP(0,h.length,f))}if(this.c.b.length!==0){x=P.x
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)}f=Z.cu(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bP(1,h.length,f))}if(this.d.b.length!==0){x=P.x
h=H.f([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.t()
C.a.h(h,g.e)}f=Z.cu(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bP(4,h.length,f))}return i},
i:function(a){var z=H.f([],[P.k])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.u("   "))}return C.a.v(z,"\n")},
U:function(a){var z=this.e
if(!(z==null))z.O(a)},
T:function(){return this.U(null)}},
hn:{"^":"a;a,0b",
d2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ak],"$asc")
z=H.f([],[F.ab])
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
C.a.h(z,F.bN(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bN(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bN(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bN(q,n,r))}u=!u}w=!w}return z},
gj:function(a){return this.b.length},
aW:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.ag(0,v,t)){v.ae()
break}}}}},
aV:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gd8(x)
if(y)x.ae()}},
aP:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].aO())x=!1
return x},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.v(z,"\n")},
D:function(){return this.u("")}},
ho:{"^":"a;a,0b",
gj:function(a){return this.b.length},
aW:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.ag(0,v,t)){v.ae()
break}}}}},
aV:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.K(x.a,x.b)
if(y)x.ae()}},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
z=H.f([],[P.k])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].u(a+(""+x+". ")))}return C.a.v(z,"\n")},
D:function(){return this.u("")}},
hp:{"^":"a;a,0b",
gj:function(a){return this.b.length},
dR:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ae()}},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.v(z,"\n")},
D:function(){return this.u("")}},
ak:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bt:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ct(this.cx,x,u,z,y,w,v,a,t)},
dv:function(a){var z,y
z=J.D(a)
if(z.q(a,$.$get$al())){z=this.f
y=[P.q]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aI())){z=this.r
y=[P.q]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aH())){z=H.f([0,0,1],[P.q])
return z}else if(z.q(a,$.$get$aJ())){z=this.y
y=[P.q]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.q(a,$.$get$aK())){z=H.f([0,0,0],[P.q])
return z}else if(z.q(a,$.$get$bi())){z=this.Q
y=[P.q]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bj())){z=this.Q
y=[P.q]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$aL()))return H.f([this.ch],[P.q])
else if(z.q(a,$.$get$aG())){z=H.f([-1,-1,-1,-1],[P.q])
return z}else return H.f([],[P.q])},
aO:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.L(0,0,0)
this.d.F(0,new F.ii(z))
z=z.a
this.r=z.I(0,Math.sqrt(z.K(z)))
z=this.a
if(z!=null){z.T()
z=this.a.e
if(!(z==null))z.ak(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
u:function(a){var z,y,x
z=H.f([],[P.k])
C.a.h(z,C.c.a1(J.a6(this.e),0))
y=this.f
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
y=this.r
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,"-")
y=this.y
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,V.B(this.ch,3,0))
C.a.h(z,"-")
x=C.a.v(z,", ")
return a+"{"+x+"}"},
D:function(){return this.u("")},
p:{
ct:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ak()
y=new F.ih(z)
y.b=H.f([],[F.du])
z.b=y
y=new F.ic(z)
x=[F.di]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.i9(z)
x=[F.ab]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$e2()
z.e=0
y=$.$get$al()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aI().a)!==0?e:null
z.x=(x&$.$get$aH().a)!==0?b:null
z.y=(x&$.$get$aJ().a)!==0?f:null
z.z=(x&$.$get$aK().a)!==0?g:null
z.Q=(x&$.$get$e3().a)!==0?c:null
z.ch=(x&$.$get$aL().a)!==0?i:0
z.cx=(x&$.$get$aG().a)!==0?a:null
return z}}},
ii:{"^":"o:7;a",
$1:function(a){var z,y
H.n(a,"$isab")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
i8:{"^":"a;a,0b,0c",
t:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.b(P.a_("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.T()
return!0},
gj:function(a){return this.c.length},
aP:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].aO()
return!0},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
this.t()
z=H.f([],[P.k])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.v(z,"\n")},
D:function(){return this.u("")}},
i9:{"^":"a;a,0b,0c,0d",
gj:function(a){return this.b.length+this.c.length+this.d.length},
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
F:function(a,b){H.d(b,{func:1,ret:-1,args:[F.ab]})
C.a.F(this.b,b)
C.a.F(this.c,new F.ia(this,b))
C.a.F(this.d,new F.ib(this,b))},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.v(z,"\n")},
D:function(){return this.u("")}},
ia:{"^":"o:7;a,b",
$1:function(a){H.n(a,"$isab")
if(!J.K(a.a,this.a))this.b.$1(a)}},
ib:{"^":"o:7;a,b",
$1:function(a){var z
H.n(a,"$isab")
z=this.a
if(!J.K(a.a,z)&&!J.K(a.b,z))this.b.$1(a)}},
ic:{"^":"a;a,0b,0c",
gj:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.v(z,"\n")},
D:function(){return this.u("")}},
ie:{"^":"a;"},
id:{"^":"ie;",
ag:function(a,b,c){return J.K(b.f,c.f)}},
ig:{"^":"a;"},
fU:{"^":"ig;",
dA:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.ak],"$asc")
z=new V.L(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.L(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.I(0,Math.sqrt(z.K(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){t=a[x]
s=z.I(0,Math.sqrt(u))
if(!J.K(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.O(null)}}}return}},
ih:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
z=H.f([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.v(z,"\n")},
D:function(){return this.u("")}}}],["","",,O,{"^":"",f2:{"^":"cm;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.a7()
this.f=z}return z},
an:function(a){var z=this.f
if(!(z==null))z.O(a)}},cm:{"^":"a;"}}],["","",,T,{"^":"",hD:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",eM:{"^":"a;",
af:function(a,b){return!0},
i:function(a){return"all"},
$isbB:1},bB:{"^":"a;"},dn:{"^":"a;",
af:["c0",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].af(0,b))return!0
return!1}],
i:["b1",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbB:1},b6:{"^":"dn;0a",
af:function(a,b){return!this.c0(0,b)},
i:function(a){return"!["+this.b1(0)+"]"}},hl:{"^":"a;0a",
c3:function(a){var z,y
if(a.a.length<=0)throw H.b(P.a_("May not create a SetMatcher with zero characters."))
z=new H.aC(0,0,[P.x,P.an])
for(y=new H.dl(a,a.gj(a),0,[H.ap(a,"m",0)]);y.B();)z.M(0,y.d,!0)
this.a=z},
af:function(a,b){return this.a.br(0,b)},
i:function(a){var z=this.a
return P.cl(new H.dk(z,[H.t(z,0)]),0,null)},
$isbB:1,
p:{
S:function(a){var z=new V.hl()
z.c3(a)
return z}}},dF:{"^":"a;a,b,0c,0d",
gdC:function(a){return this.b},
v:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dO(this.a.C(0,b))
w.a=H.f([],[V.bB])
w.c=!1
C.a.h(this.c,w)
return w},
dj:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.af(0,a))return w}return},
i:function(a){return this.b}},dM:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.eG(this.b,"\n","\\n")
y=H.eG(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dN:{"^":"a;a,b,0c",
i:function(a){return this.b}},hJ:{"^":"a;0a,0b,0c",
C:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.dF(this,b)
z.c=H.f([],[V.dO])
this.a.M(0,b,z)}return z},
al:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.dN(this,a)
y=P.k
z.c=new H.aC(0,0,[y,y])
this.b.M(0,a,z)}return z},
e0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.f([],[V.dM])
y=this.c
x=[P.x]
w=H.f([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.ao(a,t)
r=y.dj(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cl(w,0,null)
throw H.b(P.a_("Untokenizable string [state: "+y.gdC(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.f([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cl(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.dM(o==null?p.b:o,q,t)}++t}}}},dO:{"^":"dn;b,0c,0a",
i:function(a){return this.b.b+": "+this.b1(0)}}}],["","",,X,{"^":"",cX:{"^":"a;",$isdp:1},fm:{"^":"dI;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.a7()
this.x=z}return z}},fX:{"^":"a;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.a7()
this.e=z}return z},
ab:[function(a){var z
H.n(a,"$isr")
z=this.e
if(!(z==null))z.O(a)},function(){return this.ab(null)},"e7","$1","$0","gbg",0,2,1],
sbA:function(a){var z,y,x
if(!J.K(this.a,a)){z=this.a
if(z!=null){z=z.gw()
z.toString
y=H.d(this.gbg(),{func:1,ret:-1,args:[D.r]})
C.a.J(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gw()
z.toString
y=H.d(this.gbg(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,y)}z=new D.J("mover",x,this.a,this,[U.a2])
z.b=!0
this.ab(z)}},
$isdp:1,
$iscX:1},dI:{"^":"a;"}}],["","",,V,{"^":"",
kh:function(a){P.hI(C.r,new V.ki(a))},
ki:{"^":"o:31;a",
$1:function(a){H.n(a,"$isaE")
P.cL(C.e.bN(this.a.gdl(),2)+" fps")}},
hq:{"^":"a;0a,0b",
c5:function(a,b){var z,y,x,w,v,u,t
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
t=W.Z
W.O(z,"scroll",H.d(new V.ht(x),{func:1,ret:-1,args:[t]}),!1,t)},
d3:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.k],"$asc")
this.cY()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.e0(C.a.dt(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
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
if(H.eF(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.ju(C.B,s,C.m,!1)
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
cY:function(){var z,y,x,w
if(this.b!=null)return
z=new V.hJ()
y=P.k
z.a=new H.aC(0,0,[y,V.dF])
z.b=new H.aC(0,0,[y,V.dN])
z.c=z.C(0,"Start")
y=z.C(0,"Start").v(0,"Bold")
x=V.S(new H.Q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.C(0,"Bold").v(0,"Bold")
x=new V.b6()
w=[V.bB]
x.a=H.f([],w)
C.a.h(y.a,x)
y=V.S(new H.Q("*"))
C.a.h(x.a,y)
y=z.C(0,"Bold").v(0,"BoldEnd")
x=V.S(new H.Q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.C(0,"Start").v(0,"Italic")
x=V.S(new H.Q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.C(0,"Italic").v(0,"Italic")
x=new V.b6()
x.a=H.f([],w)
C.a.h(y.a,x)
y=V.S(new H.Q("_"))
C.a.h(x.a,y)
y=z.C(0,"Italic").v(0,"ItalicEnd")
x=V.S(new H.Q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.C(0,"Start").v(0,"Code")
x=V.S(new H.Q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.C(0,"Code").v(0,"Code")
x=new V.b6()
x.a=H.f([],w)
C.a.h(y.a,x)
y=V.S(new H.Q("`"))
C.a.h(x.a,y)
y=z.C(0,"Code").v(0,"CodeEnd")
x=V.S(new H.Q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.C(0,"Start").v(0,"LinkHead")
x=V.S(new H.Q("["))
C.a.h(y.a,x)
y.c=!0
y=z.C(0,"LinkHead").v(0,"LinkTail")
x=V.S(new H.Q("|"))
C.a.h(y.a,x)
x=z.C(0,"LinkHead").v(0,"LinkEnd")
y=V.S(new H.Q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.C(0,"LinkHead").v(0,"LinkHead")
y=new V.b6()
y.a=H.f([],w)
C.a.h(x.a,y)
x=V.S(new H.Q("|]"))
C.a.h(y.a,x)
x=z.C(0,"LinkTail").v(0,"LinkEnd")
y=V.S(new H.Q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.C(0,"LinkTail").v(0,"LinkTail")
y=new V.b6()
y.a=H.f([],w)
C.a.h(x.a,y)
x=V.S(new H.Q("|]"))
C.a.h(y.a,x)
C.a.h(z.C(0,"Start").v(0,"Other").a,new V.eM())
x=z.C(0,"Other").v(0,"Other")
y=new V.b6()
y.a=H.f([],w)
C.a.h(x.a,y)
x=V.S(new H.Q("*_`["))
C.a.h(y.a,x)
x=z.C(0,"BoldEnd")
x.d=x.a.al("Bold")
x=z.C(0,"ItalicEnd")
x.d=x.a.al("Italic")
x=z.C(0,"CodeEnd")
x.d=x.a.al("Code")
x=z.C(0,"LinkEnd")
x.d=x.a.al("Link")
x=z.C(0,"Other")
x.d=x.a.al("Other")
this.b=z},
p:{
hr:function(a,b){var z=new V.hq()
z.c5(a,!0)
return z}}},
ht:{"^":"o:32;a",
$1:function(a){P.hH(C.i,new V.hs(this.a))}},
hs:{"^":"o:0;a",
$0:function(){var z,y,x
z=C.e.S(document.documentElement.scrollTop)
y=this.a.style
x=H.e(-0.01*z)+"px"
y.top=x}}}],["","",,R,{"^":"",
eB:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=V.hr("Test 004",!0)
y=W.cY(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.d3(H.f(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."],[P.k]))
x=new U.dB()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sbP(0)
x.sbE(0,0)
x.sbI(0)
x.sbw(0.1)
x.sbu(0.21)
x.sbv(0.32)
x.sbw(0.51)
x.sbu(0.71)
x.sbv(0.92)
w=new U.dc()
w.b2(U.a2)
w.aw(w.gcr(),w.gcK())
w.e=null
w.f=V.bS()
w.r=0
w.h(0,U.d1(V.aj(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
w.h(0,x)
v=F.kl(30,2,15,0.2)
u=E.ai(null,!0,w,"",v,null)
t=E.ai(null,!0,w,"",v,null)
t.y.h(0,u)
s=E.ai(null,!0,w,"",v,null)
s.y.h(0,t)
r=E.ai(null,!0,w,"",v,null)
r.y.h(0,s)
q=E.ai(null,!0,w,"",v,null)
q.y.h(0,r)
p=E.ai(null,!0,w,"",v,null)
p.y.h(0,q)
o=E.ai(null,!0,w,"",v,null)
o.y.h(0,p)
n=E.ai(null,!0,w,"",v,null)
n.y.h(0,o)
m=E.ai(null,!0,w,"",v,null)
m.y.h(0,n)
l=new M.fe()
z=O.d_(E.ah)
l.d=z
z.aw(l.gct(),l.gcu())
l.e=null
l.f=null
l.r=null
l.x=null
k=new X.fX()
k.b=1.0471975511965976
k.c=0.1
k.d=2000
k.sbA(null)
z=k.b
if(!$.l.$2(z,1.0471975511965976)){j=k.b
k.b=1.0471975511965976
z=new D.J("fov",j,1.0471975511965976,k,[P.q])
z.b=!0
k.ab(z)}z=k.c
if(!$.l.$2(z,0.1)){j=k.c
k.c=0.1
z=new D.J("near",j,0.1,k,[P.q])
z.b=!0
k.ab(z)}z=k.d
if(!$.l.$2(z,2000)){j=k.d
k.d=2000
z=new D.J("far",j,2000,k,[P.q])
z.b=!0
k.ab(z)}z=l.a
if(z!==k){if(z!=null){z=z.gw()
z.toString
i=H.d(l.gV(),{func:1,ret:-1,args:[D.r]})
C.a.J(z.a,i)}j=l.a
l.a=k
z=k.gw()
z.toString
i=H.d(l.gV(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,i)
z=new D.J("camera",j,l.a,l,[X.cX])
z.b=!0
l.a4(z)}h=new X.fm()
z=new V.bu(0,0,0,1)
h.a=z
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
z=V.dz(0,0,1,1)
h.r=z
z=l.b
if(z!==h){if(z!=null){z=z.gw()
z.toString
i=H.d(l.gV(),{func:1,ret:-1,args:[D.r]})
C.a.J(z.a,i)}j=l.b
l.b=h
z=h.gw()
z.toString
i=H.d(l.gV(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,i)
z=new D.J("target",j,l.b,l,[X.dI])
z.b=!0
l.a4(z)}l.sbK(null)
z=new O.f2()
z.d=1
z.e=10
g=new V.bt(1,1,1)
z.b=g
i=[V.bt]
f=new D.J("objectColor",null,g,z,i)
f.b=!0
z.an(f)
g=new V.bt(0,0,0)
if(!J.K(z.c,g)){j=z.c
z.c=g
i=new D.J("fogColor",j,g,z,i)
i.b=!0
z.an(i)}i=z.d
if(!$.l.$2(i,3)){j=z.d
z.d=3
i=new D.J("fogStart",j,3,z,[P.q])
i.b=!0
z.an(i)}i=z.e
if(!$.l.$2(i,6)){j=z.e
z.e=6
i=new D.J("fogStop",j,6,z,[P.q])
i.b=!0
z.an(i)}l.sbK(z)
l.d.h(0,m)
l.a.sbA(U.d1(V.aj(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=document.getElementById("testCanvas")
if(e==null)H.Y(P.a_("Failed to find an element with the identifier, testCanvas."))
d=E.hF(e,!0,!0,!0,!1)
z=d.d
if(z!==l){if(z!=null){z=z.gw()
z.toString
i=H.d(d.gb3(),{func:1,ret:-1,args:[D.r]})
C.a.J(z.a,i)}d.d=l
z=l.gw()
z.toString
i=H.d(d.gb3(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,i)
d.c8()}V.kh(d)}},1]]
setupProgram(dart,0,0)
J.D=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dg.prototype
return J.ft.prototype}if(typeof a=="string")return J.bQ.prototype
if(a==null)return J.fu.prototype
if(typeof a=="boolean")return J.fs.prototype
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.a)return a
return J.c1(a)}
J.bG=function(a){if(typeof a=="string")return J.bQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.a)return a
return J.c1(a)}
J.cG=function(a){if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.a)return a
return J.c1(a)}
J.jZ=function(a){if(typeof a=="number")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bW.prototype
return a}
J.k_=function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.bQ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bW.prototype
return a}
J.bH=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.a)return a
return J.c1(a)}
J.K=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.D(a).q(a,b)}
J.eI=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jZ(a).Y(a,b)}
J.cN=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.k_(a).n(a,b)}
J.eJ=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k8(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bG(a).k(a,b)}
J.eK=function(a,b,c,d){return J.bH(a).bo(a,b,c,d)}
J.c4=function(a,b,c){return J.bG(a).d9(a,b,c)}
J.cO=function(a,b){return J.cG(a).A(a,b)}
J.eL=function(a,b){return J.cG(a).F(a,b)}
J.af=function(a){return J.D(a).gH(a)}
J.bs=function(a){return J.cG(a).gL(a)}
J.aU=function(a){return J.bG(a).gj(a)}
J.a6=function(a){return J.D(a).i(a)}
I.cJ=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.f=W.c7.prototype
C.t=J.j.prototype
C.a=J.aB.prototype
C.b=J.dg.prototype
C.e=J.by.prototype
C.c=J.bQ.prototype
C.A=J.bz.prototype
C.C=H.fS.prototype
C.D=W.fT.prototype
C.l=J.fY.prototype
C.h=J.bW.prototype
C.n=W.bk.prototype
C.o=W.im.prototype
C.p=new P.fW()
C.q=new P.i7()
C.d=new P.j8()
C.i=new P.aA(0)
C.r=new P.aA(5e6)
C.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.v=function(hooks) {
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
C.j=function(hooks) { return hooks; }

C.w=function(getTagFallback) {
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
C.x=function() {
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
C.y=function(hooks) {
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
C.z=function(hooks) {
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
C.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=H.f(I.cJ([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.m=new P.i6(!1)
$.aa=0
$.aV=null
$.cS=null
$.cz=!1
$.ey=null
$.es=null
$.eE=null
$.c_=null
$.c2=null
$.cH=null
$.aN=null
$.bn=null
$.bo=null
$.cA=!1
$.F=C.d
$.d8=null
$.d7=null
$.d6=null
$.d5=null
$.l=V.fM()
$.f5="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.f4="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.dt=null
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
I.$lazy(y,x,w)}})(["d4","$get$d4",function(){return H.ex("_$dart_dartClosure")},"cd","$get$cd",function(){return H.ex("_$dart_js")},"dP","$get$dP",function(){return H.ad(H.bV({
toString:function(){return"$receiver$"}}))},"dQ","$get$dQ",function(){return H.ad(H.bV({$method$:null,
toString:function(){return"$receiver$"}}))},"dR","$get$dR",function(){return H.ad(H.bV(null))},"dS","$get$dS",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dW","$get$dW",function(){return H.ad(H.bV(void 0))},"dX","$get$dX",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dU","$get$dU",function(){return H.ad(H.dV(null))},"dT","$get$dT",function(){return H.ad(function(){try{null.$method$}catch(z){return z.message}}())},"dZ","$get$dZ",function(){return H.ad(H.dV(void 0))},"dY","$get$dY",function(){return H.ad(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cv","$get$cv",function(){return P.io()},"bp","$get$bp",function(){return[]},"em","$get$em",function(){return P.hb("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"d3","$get$d3",function(){return{}},"e4","$get$e4",function(){return Z.a4(0)},"e2","$get$e2",function(){return Z.a4(511)},"al","$get$al",function(){return Z.a4(1)},"aI","$get$aI",function(){return Z.a4(2)},"aH","$get$aH",function(){return Z.a4(4)},"aJ","$get$aJ",function(){return Z.a4(8)},"aK","$get$aK",function(){return Z.a4(16)},"bi","$get$bi",function(){return Z.a4(32)},"bj","$get$bj",function(){return Z.a4(64)},"e3","$get$e3",function(){return Z.a4(96)},"aL","$get$aL",function(){return Z.a4(128)},"aG","$get$aG",function(){return Z.a4(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.A},{func:1,ret:-1,opt:[D.r]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[W.Z]},{func:1,ret:-1,args:[P.x,[P.h,E.ah]]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:P.A,args:[F.ab]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:P.A,args:[D.r]},{func:1,ret:P.A,args:[,]},{func:1,ret:-1,args:[P.x,[P.h,U.a2]]},{func:1,ret:P.q},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.k,args:[P.x]},{func:1,args:[,]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.an,args:[W.C]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.A,args:[P.H]},{func:1,ret:P.A,args:[{func:1,ret:-1,args:[D.r]}]},{func:1,ret:P.an,args:[P.q,P.q]},{func:1,ret:[P.am,,],args:[,]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.A,args:[,],opt:[,]},{func:1,ret:-1,args:[P.a],opt:[P.a8]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:V.as,args:[P.q]},{func:1,ret:P.A,args:[F.ak,P.q,P.q]},{func:1,args:[P.k]},{func:1,ret:P.A,args:[P.aE]},{func:1,ret:P.A,args:[W.Z]},{func:1,args:[,P.k]},{func:1,ret:W.R,args:[W.C]}]
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
if(x==y)H.kk(d||a)
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
Isolate.cE=a.cE
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
if(typeof dartMainRunner==="function")dartMainRunner(R.eB,[])
else R.eB([])})})()
//# sourceMappingURL=test.dart.js.map
