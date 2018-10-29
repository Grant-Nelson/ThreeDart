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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.db"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.db"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.db(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dc=function(){}
var dart=[["","",,H,{"^":"",me:{"^":"a;a"}}],["","",,J,{"^":"",
H:function(a){return void 0},
dg:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c7:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.de==null){H.lz()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.ev("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cO()]
if(v!=null)return v
v=H.lE(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.o
if(y===Object.prototype)return C.o
if(typeof w=="function"){Object.defineProperty(w,$.$get$cO(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
m:{"^":"a;",
n:function(a,b){return a===b},
gH:function(a){return H.bu(a)},
h:["bW",function(a){return"Instance of '"+H.bv(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
ha:{"^":"m;",
h:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$isU:1},
hb:{"^":"m;",
n:function(a,b){return null==b},
h:function(a){return"null"},
gH:function(a){return 0},
$isN:1},
cP:{"^":"m;",
gH:function(a){return 0},
h:["bY",function(a){return String(a)}]},
hE:{"^":"cP;"},
cn:{"^":"cP;"},
bo:{"^":"cP;",
h:function(a){var z=a[$.$get$dw()]
if(z==null)return this.bY(a)
return"JavaScript function for "+H.d(J.aJ(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbS:1},
aL:{"^":"m;$ti",
i:function(a,b){H.v(b,H.t(a,0))
if(!!a.fixed$length)H.aY(P.aB("add"))
a.push(b)},
N:function(a,b){var z
if(!!a.fixed$length)H.aY(P.aB("remove"))
for(z=0;z<a.length;++z)if(J.I(a[z],b)){a.splice(z,1)
return!0}return!1},
G:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.c(P.b_(a))}},
u:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.K(z,y,H.d(a[y]))
return z.join(b)},
dc:function(a){return this.u(a,"")},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
aJ:function(a,b,c){var z=a.length
if(b>z)throw H.c(P.ah(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.ah(c,b,a.length,"end",null))
if(b===c)return H.k([],[H.t(a,0)])
return H.k(a.slice(b,c),[H.t(a,0)])},
gb1:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.dI())},
bv:function(a,b){var z,y
H.j(b,{func:1,ret:P.U,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.b_(a))}return!1},
J:function(a,b){var z
for(z=0;z<a.length;++z)if(J.I(a[z],b))return!0
return!1},
h:function(a){return P.cN(a,"[","]")},
gM:function(a){return new J.bh(a,a.length,0,[H.t(a,0)])},
gH:function(a){return H.bu(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.aY(P.aB("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ca(b,"newLength",null))
if(b<0)throw H.c(P.ah(b,0,null,"newLength",null))
a.length=b},
K:function(a,b,c){H.a6(b)
H.v(c,H.t(a,0))
if(!!a.immutable$list)H.aY(P.aB("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aS(a,b))
if(b>=a.length||b<0)throw H.c(H.aS(a,b))
a[b]=c},
$isi:1,
$ish:1,
t:{
h9:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ca(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ah(a,0,4294967295,"length",null))
return J.dJ(new Array(a),b)},
dJ:function(a,b){return J.bT(H.k(a,[b]))},
bT:function(a){H.c9(a)
a.fixed$length=Array
return a}}},
md:{"^":"aL;$ti"},
bh:{"^":"a;a,b,c,0d,$ti",
gE:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.Z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bU:{"^":"m;",
by:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.c(P.aB(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.aB(""+a+".round()"))},
aG:function(a,b){var z,y
if(b>20)throw H.c(P.ah(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){return a&0x1FFFFFFF},
ae:function(a,b){return(a|0)===a?a/b|0:this.cP(a,b)},
cP:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.aB("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
aA:function(a,b){var z
if(a>0)z=this.cN(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cN:function(a,b){return b>31?0:a>>>b},
a3:function(a,b){if(typeof b!=="number")throw H.c(H.bc(b))
return a<b},
$isQ:1,
$isV:1},
dL:{"^":"bU;",$isK:1},
dK:{"^":"bU;"},
bV:{"^":"m;",
b_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aS(a,b))
if(b<0)throw H.c(H.aS(a,b))
if(b>=a.length)H.aY(H.aS(a,b))
return a.charCodeAt(b)},
ab:function(a,b){if(b>=a.length)throw H.c(H.aS(a,b))
return a.charCodeAt(b)},
de:function(a,b,c){var z,y
if(c>b.length)throw H.c(P.ah(c,0,b.length,null,null))
z=a.length
if(c+z>b.length)return
for(y=0;y<z;++y)if(this.ab(b,c+y)!==this.ab(a,y))return
return new H.ii(c,b,a)},
F:function(a,b){H.z(b)
if(typeof b!=="string")throw H.c(P.ca(b,null,null))
return a+b},
bT:function(a,b,c){var z
if(c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
if(typeof b==="string"){z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)}return J.fm(b,a,c)!=null},
bc:function(a,b){return this.bT(a,b,0)},
av:function(a,b,c){H.a6(c)
if(c==null)c=a.length
if(b<0)throw H.c(P.ci(b,null,null))
if(b>c)throw H.c(P.ci(b,null,null))
if(c>a.length)throw H.c(P.ci(c,null,null))
return a.substring(b,c)},
bU:function(a,b){return this.av(a,b,null)},
dJ:function(a){return a.toLowerCase()},
D:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
dn:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.D(c,z)+a},
aD:function(a,b){return this.dn(a,b," ")},
d_:function(a,b,c){if(c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
return H.fb(a,b,c)},
h:function(a){return a},
gH:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$ise_:1,
$ise:1}}],["","",,H,{"^":"",
dI:function(){return new P.cY("No element")},
h7:function(){return new P.cY("Too many elements")},
a_:{"^":"iB;a",
gk:function(a){return this.a.length},
p:function(a,b){return C.b.b_(this.a,b)},
$asew:function(){return[P.K]},
$asp:function(){return[P.K]},
$asi:function(){return[P.K]},
$ash:function(){return[P.K]}},
dD:{"^":"i;"},
cf:{"^":"dD;$ti",
gM:function(a){return new H.cS(this,this.gk(this),0,[H.bd(this,"cf",0)])},
b7:function(a,b){return this.bX(0,H.j(b,{func:1,ret:P.U,args:[H.bd(this,"cf",0)]}))}},
cS:{"^":"a;a,b,c,0d,$ti",
gE:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.cB(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.c(P.b_(z))
w=this.c
if(typeof x!=="number")return H.aD(x)
if(w>=x){this.d=null
return!1}this.d=y.v(z,w);++this.c
return!0}},
hn:{"^":"cf;a,b,$ti",
gk:function(a){return J.bN(this.a)},
v:function(a,b){return this.b.$1(J.fh(this.a,b))},
$ascf:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
eA:{"^":"i;a,b,$ti",
gM:function(a){return new H.iK(J.bg(this.a),this.b,this.$ti)}},
iK:{"^":"h8;a,b,$ti",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
ce:{"^":"a;$ti"},
ew:{"^":"a;$ti"},
iB:{"^":"cR+ew;"}}],["","",,H,{"^":"",
ls:function(a){return init.types[H.a6(a)]},
lC:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.H(a).$isw},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aJ(a)
if(typeof z!=="string")throw H.c(H.bc(a))
return z},
bu:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
bv:function(a){var z,y,x,w,v,u,t,s,r
z=J.H(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.H(a).$iscn){v=C.n(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.ab(w,0)===36)w=C.b.bU(w,1)
r=H.df(H.c9(H.aU(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e1:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hP:function(a){var z,y,x,w
z=H.k([],[P.K])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.Z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.c(H.bc(w))
if(w<=65535)C.a.i(z,w)
else if(w<=1114111){C.a.i(z,55296+(C.e.aA(w-65536,10)&1023))
C.a.i(z,56320+(w&1023))}else throw H.c(H.bc(w))}return H.e1(z)},
e2:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.c(H.bc(x))
if(x<0)throw H.c(H.bc(x))
if(x>65535)return H.hP(a)}return H.e1(a)},
hO:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aA(z,10))>>>0,56320|z&1023)}throw H.c(P.ah(a,0,1114111,null,null))},
a9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hN:function(a){return a.b?H.a9(a).getUTCFullYear()+0:H.a9(a).getFullYear()+0},
hL:function(a){return a.b?H.a9(a).getUTCMonth()+1:H.a9(a).getMonth()+1},
hH:function(a){return a.b?H.a9(a).getUTCDate()+0:H.a9(a).getDate()+0},
hI:function(a){return a.b?H.a9(a).getUTCHours()+0:H.a9(a).getHours()+0},
hK:function(a){return a.b?H.a9(a).getUTCMinutes()+0:H.a9(a).getMinutes()+0},
hM:function(a){return a.b?H.a9(a).getUTCSeconds()+0:H.a9(a).getSeconds()+0},
hJ:function(a){return a.b?H.a9(a).getUTCMilliseconds()+0:H.a9(a).getMilliseconds()+0},
aD:function(a){throw H.c(H.bc(a))},
f:function(a,b){if(a==null)J.bN(a)
throw H.c(H.aS(a,b))},
aS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.a6(J.bN(a))
if(!(b<0)){if(typeof z!=="number")return H.aD(z)
y=b>=z}else y=!0
if(y)return P.O(b,a,"index",null,z)
return P.ci(b,"index",null)},
ln:function(a,b,c){if(a>c)return new P.ch(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ch(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
bc:function(a){return new P.aE(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dZ()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fc})
z.name=""}else z.toString=H.fc
return z},
fc:function(){return J.aJ(this.dartException)},
aY:function(a){throw H.c(a)},
Z:function(a){throw H.c(P.b_(a))},
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lN(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aA(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cQ(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dY(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ej()
u=$.$get$ek()
t=$.$get$el()
s=$.$get$em()
r=$.$get$eq()
q=$.$get$er()
p=$.$get$eo()
$.$get$en()
o=$.$get$et()
n=$.$get$es()
m=v.S(y)
if(m!=null)return z.$1(H.cQ(H.z(y),m))
else{m=u.S(y)
if(m!=null){m.method="call"
return z.$1(H.cQ(H.z(y),m))}else{m=t.S(y)
if(m==null){m=s.S(y)
if(m==null){m=r.S(y)
if(m==null){m=q.S(y)
if(m==null){m=p.S(y)
if(m==null){m=s.S(y)
if(m==null){m=o.S(y)
if(m==null){m=n.S(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dY(H.z(y),m))}}return z.$1(new H.iA(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e7()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e7()
return a},
aV:function(a){var z
if(a==null)return new H.eN(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eN(a)},
lp:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.K(0,a[y],a[x])}return b},
lB:function(a,b,c,d,e,f){H.n(a,"$isbS")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.bR("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var z
H.a6(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lB)
a.$identity=z
return z},
fC:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.H(d).$ish){z.$reflectionInfo=d
x=H.hS(z).r}else x=d
w=e?Object.create(new H.ic().constructor.prototype):Object.create(new H.cH(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.av
if(typeof u!=="number")return u.F()
$.av=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dp(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.ls,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dl:H.cI
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dp(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fz:function(a,b,c,d){var z=H.cI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dp:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fB(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fz(y,!w,z,b)
if(y===0){w=$.av
if(typeof w!=="number")return w.F()
$.av=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bi
if(v==null){v=H.cc("self")
$.bi=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.av
if(typeof w!=="number")return w.F()
$.av=w+1
t+=w
w="return function("+t+"){return this."
v=$.bi
if(v==null){v=H.cc("self")
$.bi=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
fA:function(a,b,c,d){var z,y
z=H.cI
y=H.dl
switch(b?-1:a){case 0:throw H.c(H.i0("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fB:function(a,b){var z,y,x,w,v,u,t,s
z=$.bi
if(z==null){z=H.cc("self")
$.bi=z}y=$.dk
if(y==null){y=H.cc("receiver")
$.dk=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fA(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.av
if(typeof y!=="number")return y.F()
$.av=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.av
if(typeof y!=="number")return y.F()
$.av=y+1
return new Function(z+y+"}")()},
db:function(a,b,c,d,e,f,g){var z,y
z=J.bT(H.c9(b))
H.a6(c)
y=!!J.H(d).$ish?J.bT(d):d
return H.fC(a,z,c,y,!!e,f,g)},
z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aA(a,"String"))},
lH:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aA(a,"num"))},
lk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aA(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aA(a,"int"))},
f9:function(a,b){throw H.c(H.aA(a,H.z(b).substring(3)))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.H(a)[b])return a
H.f9(a,b)},
c9:function(a){if(a==null)return a
if(!!J.H(a).$ish)return a
throw H.c(H.aA(a,"List"))},
lD:function(a,b){if(a==null)return a
if(!!J.H(a).$ish)return a
if(J.H(a)[b])return a
H.f9(a,b)},
f0:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a6(z)]
else return a.$S()}return},
c6:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f0(J.H(a))
if(z==null)return!1
y=H.f4(z,null,b,null)
return y},
j:function(a,b){var z,y
if(a==null)return a
if($.d6)return a
$.d6=!0
try{if(H.c6(a,b))return a
z=H.be(b)
y=H.aA(a,z)
throw H.c(y)}finally{$.d6=!1}},
dd:function(a,b){if(a!=null&&!H.da(a,b))H.aY(H.aA(a,H.be(b)))
return a},
kl:function(a){var z
if(a instanceof H.b){z=H.f0(J.H(a))
if(z!=null)return H.be(z)
return"Closure"}return H.bv(a)},
lL:function(a){throw H.c(new P.fH(H.z(a)))},
f2:function(a){return init.getIsolateTag(a)},
k:function(a,b){a.$ti=b
return a},
aU:function(a){if(a==null)return
return a.$ti},
nh:function(a,b,c){return H.bf(a["$as"+H.d(c)],H.aU(b))},
c8:function(a,b,c,d){var z
H.z(c)
H.a6(d)
z=H.bf(a["$as"+H.d(c)],H.aU(b))
return z==null?null:z[d]},
bd:function(a,b,c){var z
H.z(b)
H.a6(c)
z=H.bf(a["$as"+H.d(b)],H.aU(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.a6(b)
z=H.aU(a)
return z==null?null:z[b]},
be:function(a){var z=H.aX(a,null)
return z},
aX:function(a,b){var z,y
H.G(b,"$ish",[P.e],"$ash")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.df(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.d(b[y])}if('func' in a)return H.kf(a,b)
if('futureOr' in a)return"FutureOr<"+H.aX("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kf:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.G(b,"$ish",z,"$ash")
if("bounds" in a){y=a.bounds
if(b==null){b=H.k([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.i(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.b.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aX(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aX(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aX(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aX(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lo(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.z(z[l])
n=n+m+H.aX(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
df:function(a,b,c){var z,y,x,w,v,u
H.G(c,"$ish",[P.e],"$ash")
if(a==null)return""
z=new P.c0("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aX(u,c)}v="<"+z.h(0)+">"
return v},
bf:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bL:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aU(a)
y=J.H(a)
if(y[b]==null)return!1
return H.eZ(H.bf(y[d],z),null,c,null)},
G:function(a,b,c,d){var z,y
H.z(b)
H.c9(c)
H.z(d)
if(a==null)return a
z=H.bL(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.df(c,0,null)
throw H.c(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
lg:function(a,b,c,d,e){var z
H.z(c)
H.z(d)
H.z(e)
z=H.ak(a,null,b,null)
if(!z)H.lM("TypeError: "+H.d(c)+H.be(a)+H.d(d)+H.be(b)+H.d(e))},
lM:function(a){throw H.c(new H.eu(H.z(a)))},
eZ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
nf:function(a,b,c){return a.apply(b,H.bf(J.H(b)["$as"+H.d(c)],H.aU(b)))},
f5:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="N"||a===-1||a===-2||H.f5(z)}return!1},
da:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="N"||b===-1||b===-2||H.f5(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.da(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c6(a,b)}y=J.H(a).constructor
x=H.aU(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ak(y,null,b,null)
return z},
v:function(a,b){if(a!=null&&!H.da(a,b))throw H.c(H.aA(a,H.be(b)))
return a},
ak:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ak(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="N")return!0
if('func' in c)return H.f4(a,b,c,d)
if('func' in a)return c.builtin$cls==="bS"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"bm" in y.prototype))return!1
w=y.prototype["$as"+"bm"]
v=H.bf(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.be(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eZ(H.bf(r,z),b,u,d)},
f4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.lG(m,b,l,d)},
lG:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
ng:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
lE:function(a){var z,y,x,w,v,u
z=H.z($.f3.$1(a))
y=$.cA[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cD[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.z($.eY.$2(a,z))
if(z!=null){y=$.cA[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cD[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cE(x)
$.cA[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cD[z]=x
return x}if(v==="-"){u=H.cE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f7(a,x)
if(v==="*")throw H.c(P.ev(z))
if(init.leafTags[z]===true){u=H.cE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f7(a,x)},
f7:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dg(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cE:function(a){return J.dg(a,!1,null,!!a.$isw)},
lF:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cE(z)
else return J.dg(z,c,null,null)},
lz:function(){if(!0===$.de)return
$.de=!0
H.lA()},
lA:function(){var z,y,x,w,v,u,t,s
$.cA=Object.create(null)
$.cD=Object.create(null)
H.lv()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fa.$1(v)
if(u!=null){t=H.lF(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lv:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.bb(C.A,H.bb(C.F,H.bb(C.m,H.bb(C.m,H.bb(C.E,H.bb(C.B,H.bb(C.C(C.n),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f3=new H.lw(v)
$.eY=new H.lx(u)
$.fa=new H.ly(t)},
bb:function(a,b){return a(b)||b},
fb:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
cF:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hR:{"^":"a;a,b,c,d,e,f,r,0x",t:{
hS:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bT(z)
y=z[0]
x=z[1]
return new H.hR(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iy:{"^":"a;a,b,c,d,e,f",
S:function(a){var z,y,x
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
az:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.k([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iy(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cm:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ep:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hB:{"^":"a0;a,b",
h:function(a){var z=this.b
if(z==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
dY:function(a,b){return new H.hB(a,b==null?null:b.method)}}},
he:{"^":"a0;a,b,c",
h:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
t:{
cQ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.he(a,y,z?null:b.receiver)}}},
iA:{"^":"a0;a",
h:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lN:{"^":"b:15;a",
$1:function(a){if(!!J.H(a).$isa0)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eN:{"^":"a;a,0b",
h:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isao:1},
b:{"^":"a;",
h:function(a){return"Closure '"+H.bv(this).trim()+"'"},
gbN:function(){return this},
$isbS:1,
gbN:function(){return this}},
ed:{"^":"b;"},
ic:{"^":"ed;",
h:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cH:{"^":"ed;a,b,c,d",
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cH))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gH:function(a){var z,y
z=this.c
if(z==null)y=H.bu(this.a)
else y=typeof z!=="object"?J.aZ(z):H.bu(z)
return(y^H.bu(this.b))>>>0},
h:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.bv(z)+"'")},
t:{
cI:function(a){return a.a},
dl:function(a){return a.c},
cc:function(a){var z,y,x,w,v
z=new H.cH("self","target","receiver","name")
y=J.bT(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
eu:{"^":"a0;a",
h:function(a){return this.a},
t:{
aA:function(a,b){return new H.eu("TypeError: "+H.d(P.cM(a))+": type '"+H.kl(a)+"' is not a subtype of type '"+b+"'")}}},
i_:{"^":"a0;a",
h:function(a){return"RuntimeError: "+H.d(this.a)},
t:{
i0:function(a){return new H.i_(a)}}},
b1:{"^":"dR;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gO:function(a){return new H.dO(this,[H.t(this,0)])},
d0:function(a,b){var z
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null)return!1
return this.cd(z,b)}else return this.d9(b)},
d9:function(a){var z=this.d
if(z==null)return!1
return this.b0(this.aR(z,J.aZ(a)&0x3ffffff),a)>=0},
p:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ay(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ay(w,b)
x=y==null?null:y.b
return x}else return this.da(b)},
da:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aR(z,J.aZ(a)&0x3ffffff)
x=this.b0(y,a)
if(x<0)return
return y[x].b},
K:function(a,b,c){var z,y,x,w,v,u
H.v(b,H.t(this,0))
H.v(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aT()
this.b=z}this.bg(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aT()
this.c=y}this.bg(y,b,c)}else{x=this.d
if(x==null){x=this.aT()
this.d=x}w=J.aZ(b)&0x3ffffff
v=this.aR(x,w)
if(v==null)this.aX(x,w,[this.aU(b,c)])
else{u=this.b0(v,b)
if(u>=0)v[u].b=c
else v.push(this.aU(b,c))}}},
G:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.b_(this))
z=z.c}},
bg:function(a,b,c){var z
H.v(b,H.t(this,0))
H.v(c,H.t(this,1))
z=this.ay(a,b)
if(z==null)this.aX(a,b,this.aU(b,c))
else z.b=c},
ck:function(){this.r=this.r+1&67108863},
aU:function(a,b){var z,y
z=new H.hh(H.v(a,H.t(this,0)),H.v(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ck()
return z},
b0:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].a,b))return y
return-1},
h:function(a){return P.dS(this)},
ay:function(a,b){return a[b]},
aR:function(a,b){return a[b]},
aX:function(a,b,c){a[b]=c},
cf:function(a,b){delete a[b]},
cd:function(a,b){return this.ay(a,b)!=null},
aT:function(){var z=Object.create(null)
this.aX(z,"<non-identifier-key>",z)
this.cf(z,"<non-identifier-key>")
return z},
$isdN:1},
hh:{"^":"a;a,b,0c,0d"},
dO:{"^":"dD;a,$ti",
gk:function(a){return this.a.a},
gM:function(a){var z,y
z=this.a
y=new H.hi(z,z.r,this.$ti)
y.c=z.e
return y}},
hi:{"^":"a;a,b,0c,0d,$ti",
gE:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.b_(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lw:{"^":"b:15;a",
$1:function(a){return this.a(a)}},
lx:{"^":"b:27;a",
$2:function(a,b){return this.a(a,b)}},
ly:{"^":"b:24;a",
$1:function(a){return this.a(H.z(a))}},
hc:{"^":"a;a,b,0c,0d",
h:function(a){return"RegExp/"+this.a+"/"},
$ise_:1,
t:{
hd:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(new P.fX("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
ii:{"^":"a;a,b,c"}}],["","",,H,{"^":"",
lo:function(a){return J.dJ(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
aO:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aS(b,a))},
kd:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.c(H.ln(a,b,c))
return b},
hw:{"^":"m;","%":"DataView;ArrayBufferView;cV|eH|eI|hv|eJ|eK|aM"},
cV:{"^":"hw;",
gk:function(a){return a.length},
$isw:1,
$asw:I.dc},
hv:{"^":"eI;",
p:function(a,b){H.aO(b,a,a.length)
return a[b]},
$asce:function(){return[P.Q]},
$asp:function(){return[P.Q]},
$isi:1,
$asi:function(){return[P.Q]},
$ish:1,
$ash:function(){return[P.Q]},
"%":"Float32Array|Float64Array"},
aM:{"^":"eK;",
$asce:function(){return[P.K]},
$asp:function(){return[P.K]},
$isi:1,
$asi:function(){return[P.K]},
$ish:1,
$ash:function(){return[P.K]}},
mn:{"^":"aM;",
p:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mo:{"^":"aM;",
p:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mp:{"^":"aM;",
p:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mq:{"^":"aM;",
p:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mr:{"^":"aM;",
p:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ms:{"^":"aM;",
gk:function(a){return a.length},
p:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hx:{"^":"aM;",
gk:function(a){return a.length},
p:function(a,b){H.aO(b,a,a.length)
return a[b]},
aJ:function(a,b,c){return new Uint8Array(a.subarray(b,H.kd(b,c,a.length)))},
"%":";Uint8Array"},
eH:{"^":"cV+p;"},
eI:{"^":"eH+ce;"},
eJ:{"^":"cV+p;"},
eK:{"^":"eJ+ce;"}}],["","",,P,{"^":"",
iM:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lh()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bM(new P.iO(z),1)).observe(y,{childList:true})
return new P.iN(z,y,x)}else if(self.setImmediate!=null)return P.li()
return P.lj()},
n1:[function(a){self.scheduleImmediate(H.bM(new P.iP(H.j(a,{func:1,ret:-1})),0))},"$1","lh",4,0,13],
n2:[function(a){self.setImmediate(H.bM(new P.iQ(H.j(a,{func:1,ret:-1})),0))},"$1","li",4,0,13],
n3:[function(a){P.d1(C.f,H.j(a,{func:1,ret:-1}))},"$1","lj",4,0,13],
d1:function(a,b){var z
H.j(b,{func:1,ret:-1})
z=C.e.ae(a.a,1000)
return P.jU(z<0?0:z,b)},
fZ:function(a,b){var z
H.j(a,{func:1,ret:{futureOr:1,type:b}})
z=new P.au(0,$.J,[b])
P.c1(C.f,new P.h_(z,a))
return z},
ke:function(a,b,c){var z=$.J
H.n(c,"$isao")
z.toString
a.aw(b,c)},
eT:function(a,b){if(H.c6(a,{func:1,args:[P.a,P.ao]}))return b.dA(a,null,P.a,P.ao)
if(H.c6(a,{func:1,args:[P.a]})){b.toString
return H.j(a,{func:1,ret:null,args:[P.a]})}throw H.c(P.ca(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kh:function(){var z,y
for(;z=$.ba,z!=null;){$.bJ=null
y=z.b
$.ba=y
if(y==null)$.bI=null
z.a.$0()}},
ne:[function(){$.d8=!0
try{P.kh()}finally{$.bJ=null
$.d8=!1
if($.ba!=null)$.$get$d3().$1(P.f_())}},"$0","f_",0,0,2],
eW:function(a){var z=new P.eB(H.j(a,{func:1,ret:-1}))
if($.ba==null){$.bI=z
$.ba=z
if(!$.d8)$.$get$d3().$1(P.f_())}else{$.bI.b=z
$.bI=z}},
kk:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.ba
if(z==null){P.eW(a)
$.bJ=$.bI
return}y=new P.eB(a)
x=$.bJ
if(x==null){y.b=z
$.bJ=y
$.ba=y}else{y.b=x.b
x.b=y
$.bJ=y
if(y.b==null)$.bI=y}},
lJ:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.J
if(C.d===y){P.cu(null,null,C.d,a)
return}y.toString
P.cu(null,null,y,H.j(y.aZ(a),z))},
c1:function(a,b){var z,y
z={func:1,ret:-1}
H.j(b,z)
y=$.J
if(y===C.d){y.toString
return P.d1(a,b)}return P.d1(a,H.j(y.aZ(b),z))},
ct:function(a,b,c,d,e){var z={}
z.a=d
P.kk(new P.ki(z,e))},
eU:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
eV:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
kj:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
cu:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.aZ(d):c.cX(d,-1)
P.eW(d)},
iO:{"^":"b:5;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iN:{"^":"b:22;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iP:{"^":"b:1;a",
$0:function(){this.a.$0()}},
iQ:{"^":"b:1;a",
$0:function(){this.a.$0()}},
jT:{"^":"a;a,0b,c",
c7:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bM(new P.jV(this,b),0),a)
else throw H.c(P.aB("`setTimeout()` not found."))},
t:{
jU:function(a,b){var z=new P.jT(!0,0)
z.c7(a,b)
return z}}},
jV:{"^":"b:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
h_:{"^":"b:1;a,b",
$0:function(){var z,y,x
try{this.a.aN(this.b.$0())}catch(x){z=H.ag(x)
y=H.aV(x)
P.ke(this.a,z,y)}}},
aN:{"^":"a;0a,b,c,d,e,$ti",
df:function(a){if(this.c!==6)return!0
return this.b.b.b5(H.j(this.d,{func:1,ret:P.U,args:[P.a]}),a.a,P.U,P.a)},
d7:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.c6(z,{func:1,args:[P.a,P.ao]}))return H.dd(w.dF(z,a.a,a.b,null,y,P.ao),x)
else return H.dd(w.b5(H.j(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
au:{"^":"a;br:a<,b,0cJ:c<,$ti",
bK:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.d){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.eT(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.au(0,$.J,[c])
w=b==null?1:3
this.aL(new P.aN(x,w,a,b,[z,c]))
return x},
b6:function(a,b){return this.bK(a,null,b)},
aL:function(a){var z,y
z=this.a
if(z<=1){a.a=H.n(this.c,"$isaN")
this.c=a}else{if(z===2){y=H.n(this.c,"$isau")
z=y.a
if(z<4){y.aL(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cu(null,null,z,H.j(new P.j4(this,a),{func:1,ret:-1}))}},
bo:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.n(this.c,"$isaN")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.n(this.c,"$isau")
y=u.a
if(y<4){u.bo(a)
return}this.a=y
this.c=u.c}z.a=this.az(a)
y=this.b
y.toString
P.cu(null,null,y,H.j(new P.j9(z,this),{func:1,ret:-1}))}},
aW:function(){var z=H.n(this.c,"$isaN")
this.c=null
return this.az(z)},
az:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aN:function(a){var z,y,x,w
z=H.t(this,0)
H.dd(a,{futureOr:1,type:z})
y=this.$ti
x=H.bL(a,"$isbm",y,"$asbm")
if(x){z=H.bL(a,"$isau",y,null)
if(z)P.eD(a,this)
else P.j5(a,this)}else{w=this.aW()
H.v(a,z)
this.a=4
this.c=a
P.bF(this,w)}},
aw:[function(a,b){var z
H.n(b,"$isao")
z=this.aW()
this.a=8
this.c=new P.al(a,b)
P.bF(this,z)},function(a){return this.aw(a,null)},"dM","$2","$1","gcb",4,2,28],
$isbm:1,
t:{
j5:function(a,b){var z,y,x
b.a=1
try{a.bK(new P.j6(b),new P.j7(b),null)}catch(x){z=H.ag(x)
y=H.aV(x)
P.lJ(new P.j8(b,z,y))}},
eD:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.n(a.c,"$isau")
if(z>=4){y=b.aW()
b.a=a.a
b.c=a.c
P.bF(b,y)}else{y=H.n(b.c,"$isaN")
b.a=2
b.c=a
a.bo(y)}},
bF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.n(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.ct(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bF(z.a,b)}y=z.a
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
if(p){H.n(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.ct(null,null,y,u,t)
return}o=$.J
if(o==null?q!=null:o!==q)$.J=q
else o=null
y=b.c
if(y===8)new P.jc(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jb(x,b,r).$0()}else if((y&2)!==0)new P.ja(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.H(y).$isbm){if(y.a>=4){n=H.n(t.c,"$isaN")
t.c=null
b=t.az(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eD(y,t)
return}}m=b.b
n=H.n(m.c,"$isaN")
m.c=null
b=m.az(n)
y=x.a
u=x.b
if(!y){H.v(u,H.t(m,0))
m.a=4
m.c=u}else{H.n(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
j4:{"^":"b:1;a,b",
$0:function(){P.bF(this.a,this.b)}},
j9:{"^":"b:1;a,b",
$0:function(){P.bF(this.b,this.a.a)}},
j6:{"^":"b:5;a",
$1:function(a){var z=this.a
z.a=0
z.aN(a)}},
j7:{"^":"b:31;a",
$2:function(a,b){this.a.aw(a,H.n(b,"$isao"))},
$1:function(a){return this.$2(a,null)}},
j8:{"^":"b:1;a,b,c",
$0:function(){this.a.aw(this.b,this.c)}},
jc:{"^":"b:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bI(H.j(w.d,{func:1}),null)}catch(v){y=H.ag(v)
x=H.aV(v)
if(this.d){w=H.n(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.n(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.H(z).$isbm){if(z instanceof P.au&&z.gbr()>=4){if(z.gbr()===8){w=this.b
w.b=H.n(z.gcJ(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.b6(new P.jd(t),null)
w.a=!1}}},
jd:{"^":"b:34;a",
$1:function(a){return this.a}},
jb:{"^":"b:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.v(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.b5(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ag(t)
y=H.aV(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
ja:{"^":"b:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.n(this.a.a.c,"$isal")
w=this.c
if(w.df(z)&&w.e!=null){v=this.b
v.b=w.d7(z)
v.a=!1}}catch(u){y=H.ag(u)
x=H.aV(u)
w=H.n(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
eB:{"^":"a;a,0b"},
cZ:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.au(0,$.J,[P.K])
z.a=0
this.dd(new P.ig(z,this),!0,new P.ih(z,y),y.gcb())
return y}},
ig:{"^":"b;a,b",
$1:function(a){H.v(a,H.bd(this.b,"cZ",0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.bd(this.b,"cZ",0)]}}},
ih:{"^":"b:1;a,b",
$0:function(){this.b.aN(this.a.a)}},
ea:{"^":"a;$ti"},
ie:{"^":"a;"},
al:{"^":"a;a,b",
h:function(a){return H.d(this.a)},
$isa0:1},
k2:{"^":"a;",$isn0:1},
ki:{"^":"b:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dZ()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.h(0)
throw x}},
jy:{"^":"k2;",
dG:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.d===$.J){a.$0()
return}P.eU(null,null,this,a,-1)}catch(x){z=H.ag(x)
y=H.aV(x)
P.ct(null,null,this,z,H.n(y,"$isao"))}},
dH:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.d===$.J){a.$1(b)
return}P.eV(null,null,this,a,b,-1,c)}catch(x){z=H.ag(x)
y=H.aV(x)
P.ct(null,null,this,z,H.n(y,"$isao"))}},
cX:function(a,b){return new P.jA(this,H.j(a,{func:1,ret:b}),b)},
aZ:function(a){return new P.jz(this,H.j(a,{func:1,ret:-1}))},
cY:function(a,b){return new P.jB(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
bI:function(a,b){H.j(a,{func:1,ret:b})
if($.J===C.d)return a.$0()
return P.eU(null,null,this,a,b)},
b5:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.J===C.d)return a.$1(b)
return P.eV(null,null,this,a,b,c,d)},
dF:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.J===C.d)return a.$2(b,c)
return P.kj(null,null,this,a,b,c,d,e,f)},
dA:function(a,b,c,d){return H.j(a,{func:1,ret:b,args:[c,d]})}},
jA:{"^":"b;a,b,c",
$0:function(){return this.a.bI(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jz:{"^":"b:2;a,b",
$0:function(){return this.a.dG(this.b)}},
jB:{"^":"b;a,b,c",
$1:function(a){var z=this.c
return this.a.dH(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hj:function(a,b,c){H.c9(a)
return H.G(H.lp(a,new H.b1(0,0,[b,c])),"$isdN",[b,c],"$asdN")},
dP:function(a,b){return new H.b1(0,0,[a,b])},
bX:function(a,b,c,d){return new P.jk(0,0,[d])},
h6:function(a,b,c){var z,y
if(P.d9(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bK()
C.a.i(y,a)
try{P.kg(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.eb(b,H.lD(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cN:function(a,b,c){var z,y,x
if(P.d9(a))return b+"..."+c
z=new P.c0(b)
y=$.$get$bK()
C.a.i(y,a)
try{x=z
x.a=P.eb(x.gac(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gac()+c
y=z.gac()
return y.charCodeAt(0)==0?y:y},
d9:function(a){var z,y
for(z=0;y=$.$get$bK(),z<y.length;++z)if(a===y[z])return!0
return!1},
kg:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gM(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.d(z.gE(z))
C.a.i(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.w()){if(x<=4){C.a.i(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.w();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.i(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.i(b,q)
C.a.i(b,u)
C.a.i(b,v)},
dQ:function(a,b){var z,y
z=P.bX(null,null,null,b)
for(y=J.bg(a);y.w();)z.i(0,H.v(y.gE(y),b))
return z},
dS:function(a){var z,y,x
z={}
if(P.d9(a))return"{...}"
y=new P.c0("")
try{C.a.i($.$get$bK(),a)
x=y
x.a=x.gac()+"{"
z.a=!0
J.fi(a,new P.hm(z,y))
z=y
z.a=z.gac()+"}"}finally{z=$.$get$bK()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gac()
return z.charCodeAt(0)==0?z:z},
jk:{"^":"je;a,0b,0c,0d,0e,0f,r,$ti",
gM:function(a){var z=new P.jl(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
J:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.n(z[b],"$iscs")!=null}else{y=this.cc(b)
return y}},
cc:function(a){var z=this.d
if(z==null)return!1
return this.aQ(this.bl(z,a),a)>=0},
i:function(a,b){var z,y
H.v(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d5()
this.b=z}return this.bh(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d5()
this.c=y}return this.bh(y,b)}else return this.c8(0,b)},
c8:function(a,b){var z,y,x
H.v(b,H.t(this,0))
z=this.d
if(z==null){z=P.d5()
this.d=z}y=this.bj(b)
x=z[y]
if(x==null)z[y]=[this.aM(b)]
else{if(this.aQ(x,b)>=0)return!1
x.push(this.aM(b))}return!0},
N:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bp(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bp(this.c,b)
else return this.cH(0,b)},
cH:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bl(z,b)
x=this.aQ(y,b)
if(x<0)return!1
this.bs(y.splice(x,1)[0])
return!0},
bh:function(a,b){H.v(b,H.t(this,0))
if(H.n(a[b],"$iscs")!=null)return!1
a[b]=this.aM(b)
return!0},
bp:function(a,b){var z
if(a==null)return!1
z=H.n(a[b],"$iscs")
if(z==null)return!1
this.bs(z)
delete a[b]
return!0},
bi:function(){this.r=this.r+1&67108863},
aM:function(a){var z,y
z=new P.cs(H.v(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bi()
return z},
bs:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bi()},
bj:function(a){return J.aZ(a)&0x3ffffff},
bl:function(a,b){return a[this.bj(b)]},
aQ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].a,b))return y
return-1},
t:{
d5:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cs:{"^":"a;a,0b,0c"},
jl:{"^":"a;a,b,0c,0d,$ti",
gE:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.b_(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.v(z.a,H.t(this,0))
this.c=z.b
return!0}}}},
je:{"^":"i1;"},
cR:{"^":"jm;",$isi:1,$ish:1},
p:{"^":"a;$ti",
gM:function(a){return new H.cS(a,this.gk(a),0,[H.c8(this,a,"p",0)])},
v:function(a,b){return this.p(a,b)},
h:function(a){return P.cN(a,"[","]")}},
dR:{"^":"a8;"},
hm:{"^":"b:10;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
a8:{"^":"a;$ti",
G:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.c8(this,a,"a8",0),H.c8(this,a,"a8",1)]})
for(z=J.bg(this.gO(a));z.w();){y=z.gE(z)
b.$2(y,this.p(a,y))}},
gk:function(a){return J.bN(this.gO(a))},
h:function(a){return P.dS(a)},
$isW:1},
i3:{"^":"a;$ti",
a0:function(a,b){var z
for(z=J.bg(H.G(b,"$isi",this.$ti,"$asi"));z.w();)this.i(0,z.gE(z))},
h:function(a){return P.cN(this,"{","}")},
$isi:1},
i1:{"^":"i3;"},
jm:{"^":"a+p;"}}],["","",,P,{"^":"",cJ:{"^":"a;$ti"},cd:{"^":"ie;$ti"},fS:{"^":"cJ;",
$ascJ:function(){return[P.e,[P.h,P.K]]}},h1:{"^":"a;a,b,c,d,e",
h:function(a){return this.a}},h0:{"^":"cd;a",
ce:function(a,b,c){var z,y,x,w,v,u,t
for(z=a.length,y=this.a,x=y.e,w=y.d,y=y.c,v=b,u=null;v<c;++v){if(v>=z)return H.f(a,v)
switch(a[v]){case"&":t="&amp;"
break
case'"':t=y?"&quot;":null
break
case"'":t=w?"&#39;":null
break
case"<":t="&lt;"
break
case">":t="&gt;"
break
case"/":t=x?"&#47;":null
break
default:t=null}if(t!=null){if(u==null)u=new P.c0("")
if(v>b)u.a+=C.b.av(a,b,v)
u.a+=t
b=v+1}}if(u==null)return
if(c>b)u.a+=C.b.av(a,b,c)
z=u.a
return z.charCodeAt(0)==0?z:z},
$ascd:function(){return[P.e,P.e]}},iE:{"^":"fS;a"},iF:{"^":"cd;",
d2:function(a,b,c){var z,y,x,w
z=a.length
P.e3(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.k0(0,0,x)
if(w.cj(a,b,z)!==z)w.bt(C.b.b_(a,z-1),0)
return C.L.aJ(x,0,w.b)},
d1:function(a){return this.d2(a,0,null)},
$ascd:function(){return[P.e,[P.h,P.K]]}},k0:{"^":"a;a,b,c",
bt:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.f(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.f(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.f(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.f(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.f(z,y)
z[y]=128|a&63
return!1}},
cj:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.b_(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.ab(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bt(w,C.b.ab(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.f(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.f(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.f(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.f(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fU:function(a){var z=J.H(a)
if(!!z.$isb)return z.h(a)
return"Instance of '"+H.bv(a)+"'"},
hk:function(a,b,c,d){var z,y
H.v(b,d)
z=J.h9(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.K(z,y,b)
return H.G(z,"$ish",[d],"$ash")},
d_:function(a,b,c){var z,y
z=P.K
H.G(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.G(a,"$isaL",[z],"$asaL")
y=a.length
c=P.e3(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a3()
z=c<y}else z=!0
return H.e2(z?C.a.aJ(a,b,c):a)}return P.ij(a,b,c)},
ij:function(a,b,c){var z,y,x
H.G(a,"$isi",[P.K],"$asi")
z=J.bg(a)
for(y=0;y<b;++y)if(!z.w())throw H.c(P.ah(b,0,y,null,null))
x=[]
for(;z.w();)x.push(z.gE(z))
return H.e2(x)},
hT:function(a,b,c){return new H.hc(a,H.hd(a,!1,!0,!1))},
k_:function(a,b,c,d){var z,y,x,w,v,u
H.G(a,"$ish",[P.K],"$ash")
if(c===C.q){z=$.$get$eR().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.d1(H.v(b,H.bd(c,"cJ",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hO(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fU(a)},
bR:function(a){return new P.j1(a)},
f8:function(a){H.lI(a)},
U:{"^":"a;"},
"+bool":0,
aw:{"^":"a;a,b",
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.aw))return!1
return this.a===b.a&&this.b===b.b},
gH:function(a){var z=this.a
return(z^C.e.aA(z,30))&1073741823},
h:function(a){var z,y,x,w,v,u,t
z=P.fI(H.hN(this))
y=P.bO(H.hL(this))
x=P.bO(H.hH(this))
w=P.bO(H.hI(this))
v=P.bO(H.hK(this))
u=P.bO(H.hM(this))
t=P.fJ(H.hJ(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
fI:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bO:function(a){if(a>=10)return""+a
return"0"+a}}},
Q:{"^":"V;"},
"+double":0,
bP:{"^":"a;a",
a3:function(a,b){return C.e.a3(this.a,H.n(b,"$isbP").a)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.bP))return!1
return this.a===b.a},
gH:function(a){return this.a&0x1FFFFFFF},
h:function(a){var z,y,x,w,v
z=new P.fO()
y=this.a
if(y<0)return"-"+new P.bP(0-y).h(0)
x=z.$1(C.e.ae(y,6e7)%60)
w=z.$1(C.e.ae(y,1e6)%60)
v=new P.fN().$1(y%1e6)
return""+C.e.ae(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
t:{
cK:function(a,b,c,d,e,f){return new P.bP(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fN:{"^":"b:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fO:{"^":"b:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a0:{"^":"a;"},
dZ:{"^":"a0;",
h:function(a){return"Throw of null."}},
aE:{"^":"a0;a,b,c,d",
gaP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaO:function(){return""},
h:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gaP()+y+x
if(!this.a)return w
v=this.gaO()
u=P.cM(this.b)
return w+v+": "+H.d(u)},
t:{
ca:function(a,b,c){return new P.aE(!0,a,b,c)},
fr:function(a){return new P.aE(!1,null,a,"Must not be null")}}},
ch:{"^":"aE;e,f,a,b,c,d",
gaP:function(){return"RangeError"},
gaO:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
t:{
ci:function(a,b,c){return new P.ch(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.ch(b,c,!0,a,d,"Invalid value")},
e3:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.aD(a)
if(0<=a){if(typeof c!=="number")return H.aD(c)
z=a>c}else z=!0
if(z)throw H.c(P.ah(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.aD(c)
z=b>c}else z=!0
if(z)throw H.c(P.ah(b,a,c,"end",f))
return b}return c}}},
h2:{"^":"aE;e,k:f>,a,b,c,d",
gaP:function(){return"RangeError"},
gaO:function(){if(J.fe(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.d(z)},
t:{
O:function(a,b,c,d,e){var z=H.a6(e!=null?e:J.bN(b))
return new P.h2(b,z,!0,a,c,"Index out of range")}}},
iC:{"^":"a0;a",
h:function(a){return"Unsupported operation: "+this.a},
t:{
aB:function(a){return new P.iC(a)}}},
iz:{"^":"a0;a",
h:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
ev:function(a){return new P.iz(a)}}},
cY:{"^":"a0;a",
h:function(a){return"Bad state: "+this.a},
t:{
e9:function(a){return new P.cY(a)}}},
fE:{"^":"a0;a",
h:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.cM(z))+"."},
t:{
b_:function(a){return new P.fE(a)}}},
hC:{"^":"a;",
h:function(a){return"Out of Memory"},
$isa0:1},
e7:{"^":"a;",
h:function(a){return"Stack Overflow"},
$isa0:1},
fH:{"^":"a0;a",
h:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
j1:{"^":"a;a",
h:function(a){return"Exception: "+this.a}},
fX:{"^":"a;a,b,c",
h:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.b.av(x,0,75)+"..."
return y+"\n"+x}},
bS:{"^":"a;"},
K:{"^":"V;"},
"+int":0,
i:{"^":"a;$ti",
b7:["bX",function(a,b){var z=H.bd(this,"i",0)
return new H.eA(this,H.j(b,{func:1,ret:P.U,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gM(this)
for(y=0;z.w();)++y
return y},
ga8:function(a){var z,y
z=this.gM(this)
if(!z.w())throw H.c(H.dI())
y=z.gE(z)
if(z.w())throw H.c(H.h7())
return y},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.fr("index"))
if(b<0)H.aY(P.ah(b,0,null,"index",null))
for(z=this.gM(this),y=0;z.w();){x=z.gE(z)
if(b===y)return x;++y}throw H.c(P.O(b,this,"index",null,y))},
h:function(a){return P.h6(this,"(",")")}},
h8:{"^":"a;$ti"},
h:{"^":"a;$ti",$isi:1},
"+List":0,
W:{"^":"a;$ti"},
N:{"^":"a;",
gH:function(a){return P.a.prototype.gH.call(this,this)},
h:function(a){return"null"}},
"+Null":0,
V:{"^":"a;"},
"+num":0,
a:{"^":";",
n:function(a,b){return this===b},
gH:function(a){return H.bu(this)},
h:function(a){return"Instance of '"+H.bv(this)+"'"},
toString:function(){return this.h(this)}},
ao:{"^":"a;"},
e:{"^":"a;",$ise_:1},
"+String":0,
c0:{"^":"a;ac:a<",
gk:function(a){return this.a.length},
h:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
eb:function(a,b,c){var z=J.bg(b)
if(!z.w())return a
if(c.length===0){do a+=H.d(z.gE(z))
while(z.w())}else{a+=H.d(z.gE(z))
for(;z.w();)a=a+c+H.d(z.gE(z))}return a}}}}],["","",,W,{"^":"",
fq:function(a){var z=document.createElement("a")
return z},
fP:function(a,b,c){var z,y
z=document.body
y=(z&&C.l).U(z,a,b,c)
y.toString
z=W.y
z=new H.eA(new W.at(y),H.j(new W.fQ(),{func:1,ret:P.U,args:[z]}),[z])
return H.n(z.ga8(z),"$isam")},
fR:function(a){H.n(a,"$isa3")
return"wheel"},
bk:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fl(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ag(x)}return z},
h3:function(a){var z,y,x
y=document.createElement("input")
z=H.n(y,"$isdH")
try{J.fn(z,a)}catch(x){H.ag(x)}return z},
cq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eG:function(a,b,c,d){var z,y
z=W.cq(W.cq(W.cq(W.cq(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eX:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.d)return a
return z.cY(a,b)},
R:{"^":"am;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lO:{"^":"m;0k:length=","%":"AccessibleNodeList"},
lP:{"^":"R;0I:type}",
h:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lQ:{"^":"R;",
h:function(a){return String(a)},
"%":"HTMLAreaElement"},
dj:{"^":"R;",$isdj:1,"%":"HTMLBaseElement"},
fw:{"^":"m;","%":";Blob"},
cb:{"^":"R;",$iscb:1,"%":"HTMLBodyElement"},
lV:{"^":"R;0I:type}","%":"HTMLButtonElement"},
fx:{"^":"R;",
b8:function(a,b,c){var z=a.getContext(b,P.ll(c,null))
return z},
"%":"HTMLCanvasElement"},
lX:{"^":"y;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lZ:{"^":"fG;0k:length=","%":"CSSPerspective"},
bj:{"^":"m;",$isbj:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
m_:{"^":"iT;0k:length=",
a7:function(a,b){var z=a.getPropertyValue(this.ca(a,b))
return z==null?"":z},
ca:function(a,b){var z,y
z=$.$get$du()
y=z[b]
if(typeof y==="string")return y
y=this.cO(a,b)
z[b]=y
return y},
cO:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fL()+b
if(z in a)return z
return b},
gaB:function(a){return a.bottom},
gV:function(a){return a.height},
gah:function(a){return a.left},
gaF:function(a){return a.right},
gai:function(a){return a.top},
gY:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fF:{"^":"a;",
gaB:function(a){return this.a7(a,"bottom")},
gV:function(a){return this.a7(a,"height")},
gah:function(a){return this.a7(a,"left")},
gaF:function(a){return this.a7(a,"right")},
gai:function(a){return this.a7(a,"top")},
gY:function(a){return this.a7(a,"width")}},
dv:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fG:{"^":"m;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
m0:{"^":"dv;0k:length=","%":"CSSTransformValue"},
m1:{"^":"dv;0k:length=","%":"CSSUnparsedValue"},
m2:{"^":"m;0k:length=","%":"DataTransferItemList"},
dC:{"^":"R;",$isdC:1,"%":"HTMLDivElement"},
m3:{"^":"m;",
h:function(a){return String(a)},
"%":"DOMException"},
m4:{"^":"iV;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.aa,P.V]]},
$asp:function(){return[[P.aa,P.V]]},
$isi:1,
$asi:function(){return[[P.aa,P.V]]},
$ish:1,
$ash:function(){return[[P.aa,P.V]]},
$asr:function(){return[[P.aa,P.V]]},
"%":"ClientRectList|DOMRectList"},
fM:{"^":"m;",
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gY(a))+" x "+H.d(this.gV(a))},
n:function(a,b){var z
if(b==null)return!1
z=H.bL(b,"$isaa",[P.V],"$asaa")
if(!z)return!1
z=J.aT(b)
return a.left===z.gah(b)&&a.top===z.gai(b)&&this.gY(a)===z.gY(b)&&this.gV(a)===z.gV(b)},
gH:function(a){return W.eG(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gY(a)&0x1FFFFFFF,this.gV(a)&0x1FFFFFFF)},
gaB:function(a){return a.bottom},
gV:function(a){return a.height},
gah:function(a){return a.left},
gaF:function(a){return a.right},
gai:function(a){return a.top},
gY:function(a){return a.width},
$isaa:1,
$asaa:function(){return[P.V]},
"%":";DOMRectReadOnly"},
m5:{"^":"iX;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.e]},
$asp:function(){return[P.e]},
$isi:1,
$asi:function(){return[P.e]},
$ish:1,
$ash:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"DOMStringList"},
m6:{"^":"m;0k:length=","%":"DOMTokenList"},
n7:{"^":"cR;a,$ti",
gk:function(a){return this.a.length},
p:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.v(z[b],H.t(this,0))}},
am:{"^":"y;0dI:tagName=",
gcW:function(a){return new W.iY(a)},
gbw:function(a){return P.hQ(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.V)},
h:function(a){return a.localName},
U:["aK",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dF
if(z==null){z=H.k([],[W.ay])
y=new W.dX(z)
C.a.i(z,W.eE(null))
C.a.i(z,W.eO())
$.dF=y
d=y}else d=z
z=$.dE
if(z==null){z=new W.eS(d)
$.dE=z
c=z}else{z.a=d
c=z}}if($.aF==null){z=document
y=z.implementation.createHTMLDocument("")
$.aF=y
$.cL=y.createRange()
y=$.aF
y.toString
y=y.createElement("base")
H.n(y,"$isdj")
y.href=z.baseURI
$.aF.head.appendChild(y)}z=$.aF
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.n(y,"$iscb")}z=$.aF
if(!!this.$iscb)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aF.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.J(C.I,a.tagName)){$.cL.selectNodeContents(x)
w=$.cL.createContextualFragment(b)}else{x.innerHTML=b
w=$.aF.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aF.body
if(x==null?z!=null:x!==z)J.dh(x)
c.b9(w)
document.adoptNode(w)
return w},function(a,b,c){return this.U(a,b,c,null)},"d3",null,null,"ge5",5,5,null],
bS:function(a,b,c,d){a.textContent=null
a.appendChild(this.U(a,b,c,d))},
bR:function(a,b){return this.bS(a,b,null,null)},
$isam:1,
"%":";Element"},
fQ:{"^":"b:36;",
$1:function(a){return!!J.H(H.n(a,"$isy")).$isam}},
m7:{"^":"R;0I:type}","%":"HTMLEmbedElement"},
a7:{"^":"m;",$isa7:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a3:{"^":"m;",
bu:["bV",function(a,b,c,d){H.j(c,{func:1,args:[W.a7]})
if(c!=null)this.c9(a,b,c,!1)}],
c9:function(a,b,c,d){return a.addEventListener(b,H.bM(H.j(c,{func:1,args:[W.a7]}),1),!1)},
$isa3:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;eL|eM|eP|eQ"},
bl:{"^":"fw;",$isbl:1,"%":"File"},
m8:{"^":"j3;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.bl]},
$asp:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$ish:1,
$ash:function(){return[W.bl]},
$asr:function(){return[W.bl]},
"%":"FileList"},
m9:{"^":"a3;0k:length=","%":"FileWriter"},
ma:{"^":"R;0k:length=","%":"HTMLFormElement"},
bn:{"^":"m;",$isbn:1,"%":"Gamepad"},
mb:{"^":"m;0k:length=","%":"History"},
mc:{"^":"jg;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.y]},
$asp:function(){return[W.y]},
$isi:1,
$asi:function(){return[W.y]},
$ish:1,
$ash:function(){return[W.y]},
$asr:function(){return[W.y]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
dH:{"^":"R;0I:type}",$isdH:1,"%":"HTMLInputElement"},
bp:{"^":"d2;",$isbp:1,"%":"KeyboardEvent"},
mg:{"^":"R;0I:type}","%":"HTMLLinkElement"},
mh:{"^":"m;",
h:function(a){return String(a)},
"%":"Location"},
mi:{"^":"m;0k:length=","%":"MediaList"},
mj:{"^":"a3;",
bu:function(a,b,c,d){H.j(c,{func:1,args:[W.a7]})
if(b==="message")a.start()
this.bV(a,b,c,!1)},
"%":"MessagePort"},
mk:{"^":"jn;",
p:function(a,b){return P.aH(a.get(H.z(b)))},
G:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gO:function(a){var z=H.k([],[P.e])
this.G(a,new W.hs(z))
return z},
gk:function(a){return a.size},
$asa8:function(){return[P.e,null]},
$isW:1,
$asW:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hs:{"^":"b:6;a",
$2:function(a,b){return C.a.i(this.a,a)}},
ml:{"^":"jo;",
p:function(a,b){return P.aH(a.get(H.z(b)))},
G:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gO:function(a){var z=H.k([],[P.e])
this.G(a,new W.ht(z))
return z},
gk:function(a){return a.size},
$asa8:function(){return[P.e,null]},
$isW:1,
$asW:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
ht:{"^":"b:6;a",
$2:function(a,b){return C.a.i(this.a,a)}},
bq:{"^":"m;",$isbq:1,"%":"MimeType"},
mm:{"^":"jq;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.bq]},
$asp:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$ish:1,
$ash:function(){return[W.bq]},
$asr:function(){return[W.bq]},
"%":"MimeTypeArray"},
an:{"^":"d2;",$isan:1,"%":"PointerEvent;DragEvent|MouseEvent"},
at:{"^":"cR;a",
ga8:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.e9("No elements"))
if(y>1)throw H.c(P.e9("More than one element"))
return z.firstChild},
a0:function(a,b){var z,y,x,w
H.G(b,"$isi",[W.y],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gM:function(a){var z=this.a.childNodes
return new W.dG(z,z.length,-1,[H.c8(C.M,z,"r",0)])},
gk:function(a){return this.a.childNodes.length},
p:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asp:function(){return[W.y]},
$asi:function(){return[W.y]},
$ash:function(){return[W.y]}},
y:{"^":"a3;0b4:previousSibling=",
dB:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
h:function(a){var z=a.nodeValue
return z==null?this.bW(a):z},
$isy:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
mt:{"^":"m;",
dz:[function(a){return a.previousNode()},"$0","gb4",1,0,16],
"%":"NodeIterator"},
hy:{"^":"js;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.y]},
$asp:function(){return[W.y]},
$isi:1,
$asi:function(){return[W.y]},
$ish:1,
$ash:function(){return[W.y]},
$asr:function(){return[W.y]},
"%":"NodeList|RadioNodeList"},
mw:{"^":"R;0I:type}","%":"HTMLOListElement"},
mx:{"^":"R;0I:type}","%":"HTMLObjectElement"},
bt:{"^":"m;0k:length=",$isbt:1,"%":"Plugin"},
mA:{"^":"jw;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.bt]},
$asp:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$ish:1,
$ash:function(){return[W.bt]},
$asr:function(){return[W.bt]},
"%":"PluginArray"},
mC:{"^":"m;0I:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
mD:{"^":"jC;",
p:function(a,b){return P.aH(a.get(H.z(b)))},
G:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gO:function(a){var z=H.k([],[P.e])
this.G(a,new W.hZ(z))
return z},
gk:function(a){return a.size},
$asa8:function(){return[P.e,null]},
$isW:1,
$asW:function(){return[P.e,null]},
"%":"RTCStatsReport"},
hZ:{"^":"b:6;a",
$2:function(a,b){return C.a.i(this.a,a)}},
mF:{"^":"R;0I:type}","%":"HTMLScriptElement"},
mG:{"^":"R;0k:length=","%":"HTMLSelectElement"},
bx:{"^":"a3;",$isbx:1,"%":"SourceBuffer"},
mH:{"^":"eM;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.bx]},
$asp:function(){return[W.bx]},
$isi:1,
$asi:function(){return[W.bx]},
$ish:1,
$ash:function(){return[W.bx]},
$asr:function(){return[W.bx]},
"%":"SourceBufferList"},
mI:{"^":"R;0I:type}","%":"HTMLSourceElement"},
by:{"^":"m;",$isby:1,"%":"SpeechGrammar"},
mJ:{"^":"jI;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.by]},
$asp:function(){return[W.by]},
$isi:1,
$asi:function(){return[W.by]},
$ish:1,
$ash:function(){return[W.by]},
$asr:function(){return[W.by]},
"%":"SpeechGrammarList"},
bz:{"^":"m;0k:length=",$isbz:1,"%":"SpeechRecognitionResult"},
mL:{"^":"jL;",
p:function(a,b){return a.getItem(H.z(b))},
G:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gO:function(a){var z=H.k([],[P.e])
this.G(a,new W.id(z))
return z},
gk:function(a){return a.length},
$asa8:function(){return[P.e,P.e]},
$isW:1,
$asW:function(){return[P.e,P.e]},
"%":"Storage"},
id:{"^":"b:23;a",
$2:function(a,b){return C.a.i(this.a,a)}},
mN:{"^":"R;0I:type}","%":"HTMLStyleElement"},
bA:{"^":"m;",$isbA:1,"%":"CSSStyleSheet|StyleSheet"},
ik:{"^":"R;",
U:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
z=W.fP("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.at(y).a0(0,new W.at(z))
return y},
"%":"HTMLTableElement"},
mP:{"^":"R;",
U:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.p.U(z.createElement("table"),b,c,d)
z.toString
z=new W.at(z)
x=z.ga8(z)
x.toString
z=new W.at(x)
w=z.ga8(z)
y.toString
w.toString
new W.at(y).a0(0,new W.at(w))
return y},
"%":"HTMLTableRowElement"},
mQ:{"^":"R;",
U:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.p.U(z.createElement("table"),b,c,d)
z.toString
z=new W.at(z)
x=z.ga8(z)
y.toString
x.toString
new W.at(y).a0(0,new W.at(x))
return y},
"%":"HTMLTableSectionElement"},
ee:{"^":"R;",$isee:1,"%":"HTMLTemplateElement"},
bB:{"^":"a3;",$isbB:1,"%":"TextTrack"},
bC:{"^":"a3;",$isbC:1,"%":"TextTrackCue|VTTCue"},
mR:{"^":"jS;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.bC]},
$asp:function(){return[W.bC]},
$isi:1,
$asi:function(){return[W.bC]},
$ish:1,
$ash:function(){return[W.bC]},
$asr:function(){return[W.bC]},
"%":"TextTrackCueList"},
mS:{"^":"eQ;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.bB]},
$asp:function(){return[W.bB]},
$isi:1,
$asi:function(){return[W.bB]},
$ish:1,
$ash:function(){return[W.bB]},
$asr:function(){return[W.bB]},
"%":"TextTrackList"},
mT:{"^":"m;0k:length=","%":"TimeRanges"},
bD:{"^":"m;",$isbD:1,"%":"Touch"},
b9:{"^":"d2;",$isb9:1,"%":"TouchEvent"},
mU:{"^":"jX;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.bD]},
$asp:function(){return[W.bD]},
$isi:1,
$asi:function(){return[W.bD]},
$ish:1,
$ash:function(){return[W.bD]},
$asr:function(){return[W.bD]},
"%":"TouchList"},
mV:{"^":"m;0k:length=","%":"TrackDefaultList"},
mX:{"^":"m;",
dz:[function(a){return a.previousNode()},"$0","gb4",1,0,16],
"%":"TreeWalker"},
d2:{"^":"a7;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mZ:{"^":"m;",
h:function(a){return String(a)},
"%":"URL"},
n_:{"^":"a3;0k:length=","%":"VideoTrackList"},
bE:{"^":"an;",
gd5:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.aB("deltaY is not supported"))},
gd4:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.aB("deltaX is not supported"))},
$isbE:1,
"%":"WheelEvent"},
iL:{"^":"a3;",
cI:function(a,b){return a.requestAnimationFrame(H.bM(H.j(b,{func:1,ret:-1,args:[P.V]}),1))},
ci:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
eC:{"^":"y;",$iseC:1,"%":"Attr"},
n4:{"^":"k4;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.bj]},
$asp:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$ish:1,
$ash:function(){return[W.bj]},
$asr:function(){return[W.bj]},
"%":"CSSRuleList"},
n5:{"^":"fM;",
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var z
if(b==null)return!1
z=H.bL(b,"$isaa",[P.V],"$asaa")
if(!z)return!1
z=J.aT(b)
return a.left===z.gah(b)&&a.top===z.gai(b)&&a.width===z.gY(b)&&a.height===z.gV(b)},
gH:function(a){return W.eG(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gV:function(a){return a.height},
gY:function(a){return a.width},
"%":"ClientRect|DOMRect"},
n8:{"^":"k6;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.bn]},
$asp:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$asr:function(){return[W.bn]},
"%":"GamepadList"},
nb:{"^":"k8;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.y]},
$asp:function(){return[W.y]},
$isi:1,
$asi:function(){return[W.y]},
$ish:1,
$ash:function(){return[W.y]},
$asr:function(){return[W.y]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nc:{"^":"ka;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.bz]},
$asp:function(){return[W.bz]},
$isi:1,
$asi:function(){return[W.bz]},
$ish:1,
$ash:function(){return[W.bz]},
$asr:function(){return[W.bz]},
"%":"SpeechRecognitionResultList"},
nd:{"^":"kc;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.bA]},
$asp:function(){return[W.bA]},
$isi:1,
$asi:function(){return[W.bA]},
$ish:1,
$ash:function(){return[W.bA]},
$asr:function(){return[W.bA]},
"%":"StyleSheetList"},
iR:{"^":"dR;cg:a<",
G:function(a,b){var z,y,x,w,v
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gO(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.Z)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gO:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.k([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.n(z[w],"$iseC")
if(v.namespaceURI==null)C.a.i(y,v.name)}return y},
$asa8:function(){return[P.e,P.e]},
$asW:function(){return[P.e,P.e]}},
iY:{"^":"iR;a",
p:function(a,b){return this.a.getAttribute(H.z(b))},
gk:function(a){return this.gO(this).length}},
iZ:{"^":"cZ;a,b,c,$ti",
dd:function(a,b,c,d){var z=H.t(this,0)
H.j(a,{func:1,ret:-1,args:[z]})
H.j(c,{func:1,ret:-1})
return W.S(this.a,this.b,a,!1,z)}},
n6:{"^":"iZ;a,b,c,$ti"},
j_:{"^":"ea;a,b,c,d,e,$ti",
cR:function(){var z=this.d
if(z!=null&&this.a<=0)J.fg(this.b,this.c,z,!1)},
t:{
S:function(a,b,c,d,e){var z=c==null?null:W.eX(new W.j0(c),W.a7)
z=new W.j_(0,a,b,z,!1,[e])
z.cR()
return z}}},
j0:{"^":"b:7;a",
$1:function(a){return this.a.$1(H.n(a,"$isa7"))}},
c3:{"^":"a;a",
c5:function(a){var z,y
z=$.$get$d4()
if(z.a===0){for(y=0;y<262;++y)z.K(0,C.H[y],W.lt())
for(y=0;y<12;++y)z.K(0,C.j[y],W.lu())}},
af:function(a){return $.$get$eF().J(0,W.bk(a))},
a6:function(a,b,c){var z,y,x
z=W.bk(a)
y=$.$get$d4()
x=y.p(0,H.d(z)+"::"+b)
if(x==null)x=y.p(0,"*::"+b)
if(x==null)return!1
return H.lk(x.$4(a,b,c,this))},
$isay:1,
t:{
eE:function(a){var z,y
z=W.fq(null)
y=window.location
z=new W.c3(new W.jD(z,y))
z.c5(a)
return z},
n9:[function(a,b,c,d){H.n(a,"$isam")
H.z(b)
H.z(c)
H.n(d,"$isc3")
return!0},"$4","lt",16,0,21],
na:[function(a,b,c,d){var z,y,x,w,v
H.n(a,"$isam")
H.z(b)
H.z(c)
z=H.n(d,"$isc3").a
y=z.a
y.href=c
x=y.hostname
z=z.b
w=z.hostname
if(x==null?w==null:x===w){w=y.port
v=z.port
if(w==null?v==null:w===v){w=y.protocol
z=z.protocol
z=w==null?z==null:w===z}else z=!1}else z=!1
if(!z)if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","lu",16,0,21]}},
r:{"^":"a;$ti",
gM:function(a){return new W.dG(a,this.gk(a),-1,[H.c8(this,a,"r",0)])}},
dX:{"^":"a;a",
af:function(a){return C.a.bv(this.a,new W.hA(a))},
a6:function(a,b,c){return C.a.bv(this.a,new W.hz(a,b,c))},
$isay:1},
hA:{"^":"b:17;a",
$1:function(a){return H.n(a,"$isay").af(this.a)}},
hz:{"^":"b:17;a,b,c",
$1:function(a){return H.n(a,"$isay").a6(this.a,this.b,this.c)}},
jE:{"^":"a;",
c6:function(a,b,c,d){var z,y,x
this.a.a0(0,c)
z=b.b7(0,new W.jF())
y=b.b7(0,new W.jG())
this.b.a0(0,z)
x=this.c
x.a0(0,C.J)
x.a0(0,y)},
af:function(a){return this.a.J(0,W.bk(a))},
a6:["c_",function(a,b,c){var z,y
z=W.bk(a)
y=this.c
if(y.J(0,H.d(z)+"::"+b))return this.d.cU(c)
else if(y.J(0,"*::"+b))return this.d.cU(c)
else{y=this.b
if(y.J(0,H.d(z)+"::"+b))return!0
else if(y.J(0,"*::"+b))return!0
else if(y.J(0,H.d(z)+"::*"))return!0
else if(y.J(0,"*::*"))return!0}return!1}],
$isay:1},
jF:{"^":"b:18;",
$1:function(a){return!C.a.J(C.j,H.z(a))}},
jG:{"^":"b:18;",
$1:function(a){return C.a.J(C.j,H.z(a))}},
jP:{"^":"jE;e,a,b,c,d",
a6:function(a,b,c){if(this.c_(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.J(0,b)
return!1},
t:{
eO:function(){var z,y,x,w,v
z=P.e
y=P.dQ(C.i,z)
x=H.t(C.i,0)
w=H.j(new W.jQ(),{func:1,ret:z,args:[x]})
v=H.k(["TEMPLATE"],[z])
y=new W.jP(y,P.bX(null,null,null,z),P.bX(null,null,null,z),P.bX(null,null,null,z),null)
y.c6(null,new H.hn(C.i,w,[x,z]),v,null)
return y}}},
jQ:{"^":"b:25;",
$1:function(a){return"TEMPLATE::"+H.d(H.z(a))}},
jO:{"^":"a;",
af:function(a){var z=J.H(a)
if(!!z.$ise5)return!1
z=!!z.$isck
if(z&&W.bk(a)==="foreignObject")return!1
if(z)return!0
return!1},
a6:function(a,b,c){if(b==="is"||C.b.bc(b,"on"))return!1
return this.af(a)},
$isay:1},
dG:{"^":"a;a,b,c,0d,$ti",
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ff(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gE:function(a){return this.d}},
ay:{"^":"a;"},
jD:{"^":"a;a,b",$ismY:1},
eS:{"^":"a;a",
b9:function(a){new W.k1(this).$2(a,null)},
al:function(a,b){if(b==null)J.dh(a)
else b.removeChild(a)},
cL:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fj(a)
x=y.gcg().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ag(t)}v="element unprintable"
try{v=J.aJ(a)}catch(t){H.ag(t)}try{u=W.bk(a)
this.cK(H.n(a,"$isam"),b,z,v,u,H.n(y,"$isW"),H.z(x))}catch(t){if(H.ag(t) instanceof P.aE)throw t
else{this.al(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cK:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.al(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.af(a)){this.al(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a6(a,"is",g)){this.al(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gO(f)
y=H.k(z.slice(0),[H.t(z,0)])
for(x=f.gO(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.a6(a,J.fo(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.d(e)+" "+w+'="'+H.d(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.H(a).$isee)this.b9(a.content)},
$ismu:1},
k1:{"^":"b:26;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cL(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.al(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fk(z)}catch(w){H.ag(w)
v=H.n(z,"$isy")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.n(y,"$isy")}}},
iT:{"^":"m+fF;"},
iU:{"^":"m+p;"},
iV:{"^":"iU+r;"},
iW:{"^":"m+p;"},
iX:{"^":"iW+r;"},
j2:{"^":"m+p;"},
j3:{"^":"j2+r;"},
jf:{"^":"m+p;"},
jg:{"^":"jf+r;"},
jn:{"^":"m+a8;"},
jo:{"^":"m+a8;"},
jp:{"^":"m+p;"},
jq:{"^":"jp+r;"},
jr:{"^":"m+p;"},
js:{"^":"jr+r;"},
jv:{"^":"m+p;"},
jw:{"^":"jv+r;"},
jC:{"^":"m+a8;"},
eL:{"^":"a3+p;"},
eM:{"^":"eL+r;"},
jH:{"^":"m+p;"},
jI:{"^":"jH+r;"},
jL:{"^":"m+a8;"},
jR:{"^":"m+p;"},
jS:{"^":"jR+r;"},
eP:{"^":"a3+p;"},
eQ:{"^":"eP+r;"},
jW:{"^":"m+p;"},
jX:{"^":"jW+r;"},
k3:{"^":"m+p;"},
k4:{"^":"k3+r;"},
k5:{"^":"m+p;"},
k6:{"^":"k5+r;"},
k7:{"^":"m+p;"},
k8:{"^":"k7+r;"},
k9:{"^":"m+p;"},
ka:{"^":"k9+r;"},
kb:{"^":"m+p;"},
kc:{"^":"kb+r;"}}],["","",,P,{"^":"",
aH:function(a){var z,y,x,w,v
if(a==null)return
z=P.dP(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.Z)(y),++w){v=H.z(y[w])
z.K(0,v,a[v])}return z},
ll:function(a,b){var z={}
a.G(0,new P.lm(z))
return z},
dB:function(){var z=$.dA
if(z==null){z=J.cG(window.navigator.userAgent,"Opera",0)
$.dA=z}return z},
fL:function(){var z,y
z=$.dx
if(z!=null)return z
y=$.dy
if(y==null){y=J.cG(window.navigator.userAgent,"Firefox",0)
$.dy=y}if(y)z="-moz-"
else{y=$.dz
if(y==null){y=!P.dB()&&J.cG(window.navigator.userAgent,"Trident/",0)
$.dz=y}if(y)z="-ms-"
else z=P.dB()?"-o-":"-webkit-"}$.dx=z
return z},
lm:{"^":"b:10;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jh:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jx:{"^":"a;$ti",
gaF:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.v(z+this.c,H.t(this,0))},
gaB:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.v(z+this.d,H.t(this,0))},
h:function(a){return"Rectangle ("+H.d(this.a)+", "+H.d(this.b)+") "+this.c+" x "+this.d},
n:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bL(b,"$isaa",[P.V],"$asaa")
if(!z)return!1
z=this.a
y=J.aT(b)
x=y.gah(b)
if(z==null?x==null:z===x){x=this.b
w=y.gai(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.t(this,0)
if(H.v(z+this.c,w)===y.gaF(b)){if(typeof x!=="number")return x.F()
z=H.v(x+this.d,w)===y.gaB(b)}else z=!1}else z=!1}else z=!1
return z},
gH:function(a){var z,y,x,w,v
z=this.a
y=J.aZ(z)
x=this.b
w=J.aZ(x)
if(typeof z!=="number")return z.F()
v=H.t(this,0)
z=H.v(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.v(x+this.d,v)
return P.jh(P.cr(P.cr(P.cr(P.cr(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aa:{"^":"jx;ah:a>,ai:b>,Y:c>,V:d>,$ti",t:{
hQ:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a3()
if(c<0)z=-c*0
else z=c
H.v(z,e)
if(typeof d!=="number")return d.a3()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.v(y,e),[e])}}}}],["","",,P,{"^":"",bW:{"^":"m;",$isbW:1,"%":"SVGLength"},mf:{"^":"jj;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.p(a,b)},
$asp:function(){return[P.bW]},
$isi:1,
$asi:function(){return[P.bW]},
$ish:1,
$ash:function(){return[P.bW]},
$asr:function(){return[P.bW]},
"%":"SVGLengthList"},bZ:{"^":"m;",$isbZ:1,"%":"SVGNumber"},mv:{"^":"ju;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.p(a,b)},
$asp:function(){return[P.bZ]},
$isi:1,
$asi:function(){return[P.bZ]},
$ish:1,
$ash:function(){return[P.bZ]},
$asr:function(){return[P.bZ]},
"%":"SVGNumberList"},mB:{"^":"m;0k:length=","%":"SVGPointList"},e5:{"^":"ck;0I:type}",$ise5:1,"%":"SVGScriptElement"},mM:{"^":"jN;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.p(a,b)},
$asp:function(){return[P.e]},
$isi:1,
$asi:function(){return[P.e]},
$ish:1,
$ash:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"SVGStringList"},mO:{"^":"ck;0I:type}","%":"SVGStyleElement"},ck:{"^":"am;",
U:function(a,b,c,d){var z,y,x,w,v,u
z=H.k([],[W.ay])
C.a.i(z,W.eE(null))
C.a.i(z,W.eO())
C.a.i(z,new W.jO())
c=new W.eS(new W.dX(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.l).d3(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.at(w)
u=z.ga8(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$isck:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},c2:{"^":"m;",$isc2:1,"%":"SVGTransform"},mW:{"^":"jZ;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.p(a,b)},
$asp:function(){return[P.c2]},
$isi:1,
$asi:function(){return[P.c2]},
$ish:1,
$ash:function(){return[P.c2]},
$asr:function(){return[P.c2]},
"%":"SVGTransformList"},ji:{"^":"m+p;"},jj:{"^":"ji+r;"},jt:{"^":"m+p;"},ju:{"^":"jt+r;"},jM:{"^":"m+p;"},jN:{"^":"jM+r;"},jY:{"^":"m+p;"},jZ:{"^":"jY+r;"}}],["","",,P,{"^":"",lR:{"^":"m;0k:length=","%":"AudioBuffer"},di:{"^":"a3;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},lS:{"^":"iS;",
p:function(a,b){return P.aH(a.get(H.z(b)))},
G:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gO:function(a){var z=H.k([],[P.e])
this.G(a,new P.fs(z))
return z},
gk:function(a){return a.size},
$asa8:function(){return[P.e,null]},
$isW:1,
$asW:function(){return[P.e,null]},
"%":"AudioParamMap"},fs:{"^":"b:6;a",
$2:function(a,b){return C.a.i(this.a,a)}},ft:{"^":"di;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},lT:{"^":"a3;0k:length=","%":"AudioTrackList"},fu:{"^":"a3;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lU:{"^":"di;0I:type}","%":"BiquadFilterNode"},my:{"^":"fu;0k:length=","%":"OfflineAudioContext"},mz:{"^":"ft;0I:type}","%":"Oscillator|OscillatorNode"},iS:{"^":"m+a8;"}}],["","",,P,{"^":"",e4:{"^":"m;",$ise4:1,"%":"WebGLRenderingContext"}}],["","",,P,{"^":"",mK:{"^":"jK;",
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return P.aH(a.item(b))},
v:function(a,b){return this.p(a,b)},
$asp:function(){return[[P.W,,,]]},
$isi:1,
$asi:function(){return[[P.W,,,]]},
$ish:1,
$ash:function(){return[[P.W,,,]]},
$asr:function(){return[[P.W,,,]]},
"%":"SQLResultSetRowList"},jJ:{"^":"m+p;"},jK:{"^":"jJ+r;"}}],["","",,O,{"^":"",fD:{"^":"a;0a,0b,0c,0d,$ti",
bQ:function(a,b,c){var z={func:1,ret:-1,args:[P.K,[P.i,H.t(this,0)]]}
H.j(a,z)
H.j(c,z)
this.b=b
this.c=a
this.d=c},
ba:function(a,b){return this.bQ(a,null,b)},
cD:function(a){H.G(a,"$isi",this.$ti,"$asi")
return!0},
cl:function(a,b){var z
H.G(b,"$isi",this.$ti,"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gM:function(a){var z=this.a
return new J.bh(z,z.length,0,[H.t(z,0)])},
$isi:1,
t:{
dq:function(a){var z=new O.fD([a])
z.a=H.k([],[a])
return z}}},cT:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gC:function(){var z=this.b
if(z==null){z=D.b0()
this.b=z}return z},
c3:function(a){var z=this.b
if(!(z==null))z.a1(a)},
a9:function(){return this.c3(null)},
gan:function(a){var z=this.a
if(z.length>0)return C.a.gb1(z)
else return V.ax()},
bE:function(a){var z=this.a
if(a==null)C.a.i(z,V.ax())
else C.a.i(z,a)
this.a9()},
b3:function(){var z=this.a
if(z.length>0){z.pop()
this.a9()}}}}],["","",,E,{"^":"",fv:{"^":"a;"},aK:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0L:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbb:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gC().N(0,this.gbC())
y=this.c
if(y!=null)y.gC().i(0,this.gbC())
x=new D.aC("shape",z,this.c,this,[F.e6])
x.b=!0
this.W(x)}},
sao:function(a){var z,y
if(!J.I(this.r,a)){z=this.r
if(z!=null)z.gC().N(0,this.gbB())
if(a!=null)a.gC().i(0,this.gbB())
this.r=a
y=new D.aC("mover",z,a,this,[U.cU])
y.b=!0
this.W(y)}},
bL:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.I(y,this.x)){x=this.x
this.x=y
w=new D.aC("matrix",x,y,this,[V.cg])
w.b=!0
this.W(w)}for(z=this.y.a,z=new J.bh(z,z.length,0,[H.t(z,0)]);z.w();)z.d.bL(0,b)},
aE:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.i(z.a,z.gan(z))
else C.a.i(z.a,y.D(0,z.gan(z)))
z.a9()
a.bF(this.f)
z=a.dy
x=(z&&C.a).gb1(z)
if(x!=null&&this.d!=null)x.dC(a,this)
for(z=this.y.a,z=new J.bh(z,z.length,0,[H.t(z,0)]);z.w();)z.d.aE(a)
a.bD()
a.dx.b3()},
W:function(a){var z=this.z
if(!(z==null))z.a1(a)},
aC:function(){return this.W(null)},
dm:[function(a){H.n(a,"$isL")
this.e=null
this.W(a)},function(){return this.dm(null)},"ea","$1","$0","gbC",0,2,3],
dl:[function(a){this.W(H.n(a,"$isL"))},function(){return this.dl(null)},"e9","$1","$0","gbB",0,2,3],
dj:[function(a){this.W(H.n(a,"$isL"))},function(){return this.dj(null)},"e7","$1","$0","gbA",0,2,3],
e6:[function(a,b){var z,y,x,w,v,u,t,s
H.G(b,"$isi",[E.aK],"$asi")
for(z=b.length,y=this.gbA(),x={func:1,ret:-1,args:[D.L]},w=[x],v=0;v<b.length;b.length===z||(0,H.Z)(b),++v){u=b[v]
if(u!=null){if(u.gL()==null){t=new D.bQ()
t.d=0
u.sL(t)}t=u.gL()
t.toString
H.j(y,x)
s=t.a
if(s==null){s=H.k([],w)
t.a=s
t=s}else t=s
C.a.i(t,y)}}this.aC()},"$2","gdi",8,0,8],
e8:[function(a,b){var z,y,x,w,v
H.G(b,"$isi",[E.aK],"$asi")
for(z=b.length,y=this.gbA(),x=0;x<b.length;b.length===z||(0,H.Z)(b),++x){w=b[x]
if(w!=null){if(w.gL()==null){v=new D.bQ()
v.d=0
w.sL(v)}w.gL().N(0,y)}}this.aC()},"$2","gdk",8,0,8],
$isdW:1},hU:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
c0:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aw(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cT()
y=[V.cg]
z.a=H.k([],y)
z.gC().i(0,new E.hW(this))
this.cy=z
z=new O.cT()
z.a=H.k([],y)
z.gC().i(0,new E.hX(this))
this.db=z
z=new O.cT()
z.a=H.k([],y)
z.gC().i(0,new E.hY(this))
this.dx=z
z=H.k([],[O.d0])
this.dy=z
C.a.i(z,null)
this.fr=new H.b1(0,0,[P.e,A.i4])},
bF:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gb1(z):a;(z&&C.a).i(z,y)},
bD:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
hV:function(a,b){var z=new E.hU(a,b)
z.c0(a,b)
return z}}},hW:{"^":"b:11;a",
$1:function(a){var z
H.n(a,"$isL")
z=this.a
z.z=null
z.ch=null}},hX:{"^":"b:11;a",
$1:function(a){var z
H.n(a,"$isL")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hY:{"^":"b:11;a",
$1:function(a){var z
H.n(a,"$isL")
z=this.a
z.ch=null
z.cx=null}},it:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0L:x@,0y,0z,0Q,0ch,0cx,0cy",
c4:[function(a){var z
H.n(a,"$isL")
z=this.x
if(!(z==null))z.a1(a)
if(this.Q)this.dE()},function(){return this.c4(null)},"bf","$1","$0","gbe",0,2,3],
bq:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.D()
if(typeof z!=="number")return H.aD(z)
x=C.c.by(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.D()
w=C.c.by(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.c1(C.f,this.gdD())},
dE:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.j(new E.iu(this),{func:1,ret:-1,args:[P.V]})
C.t.ci(z)
C.t.cI(z,W.eX(y,P.V))}},"$0","gdD",0,0,2],
bG:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.bq()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aw(w,!1)
x.y=P.cK(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.a9()
w=x.db
C.a.sk(w.a,0)
w.a9()
w=x.dx
C.a.sk(w.a,0)
w.a9()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).i(x,null)
this.d.aE(this.e)}}catch(v){z=H.ag(v)
y=H.aV(v)
P.f8("Error: "+H.d(z))
P.f8("Stack: "+H.d(y))
throw H.c(z)}}},iu:{"^":"b:33;a",
$1:function(a){var z
H.lH(a)
z=this.a
if(z.ch){z.ch=!1
z.bG()}}}}],["","",,Z,{"^":"",aG:{"^":"a;a",
cV:function(a){var z,y,x
z=$.$get$af()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ae()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ad()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$a4()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ar()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aq()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$as()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aj()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ai()
if((y&z.a)!==0)if(x===a)return z
return $.$get$cp()},
d8:function(a,b){var z,y,x
z=$.$get$af()
y=this.a
if((y&z.a)!==0){if(J.I(b,z))return 0
x=1}else x=0
z=$.$get$ae()
if((y&z.a)!==0){if(J.I(b,z))return x;++x}z=$.$get$ad()
if((y&z.a)!==0){if(J.I(b,z))return x;++x}z=$.$get$a4()
if((y&z.a)!==0){if(J.I(b,z))return x;++x}z=$.$get$ar()
if((y&z.a)!==0){if(J.I(b,z))return x;++x}z=$.$get$aq()
if((y&z.a)!==0){if(J.I(b,z))return x;++x}z=$.$get$as()
if((y&z.a)!==0){if(J.I(b,z))return x;++x}z=$.$get$aj()
if((y&z.a)!==0){if(J.I(b,z))return x;++x}z=$.$get$ai()
if((y&z.a)!==0)if(J.I(b,z))return x
return-1},
dh:function(a,b){var z,y,x
z=$.$get$af()
y=this.a
if((y&z.a)!==0){if(J.I(b,z))return 0
x=3}else x=0
z=$.$get$ae()
if((y&z.a)!==0){if(J.I(b,z))return x
x+=3}z=$.$get$ad()
if((y&z.a)!==0){if(J.I(b,z))return x
x+=3}z=$.$get$a4()
if((y&z.a)!==0){if(J.I(b,z))return x
x+=2}z=$.$get$ar()
if((y&z.a)!==0){if(J.I(b,z))return x
x+=3}z=$.$get$aq()
if((y&z.a)!==0){if(J.I(b,z))return x
x+=3}z=$.$get$as()
if((y&z.a)!==0){if(J.I(b,z))return x
x+=4}z=$.$get$aj()
if((y&z.a)!==0){if(J.I(b,z))return x;++x}z=$.$get$ai()
if((y&z.a)!==0)if(J.I(b,z))return x
return-1},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aG))return!1
return this.a===b.a},
h:function(a){var z,y
z=H.k([],[P.e])
y=this.a
if((y&$.$get$af().a)!==0)C.a.i(z,"Pos")
if((y&$.$get$ae().a)!==0)C.a.i(z,"Norm")
if((y&$.$get$ad().a)!==0)C.a.i(z,"Binm")
if((y&$.$get$a4().a)!==0)C.a.i(z,"Txt2D")
if((y&$.$get$ar().a)!==0)C.a.i(z,"TxtCube")
if((y&$.$get$aq().a)!==0)C.a.i(z,"Clr3")
if((y&$.$get$as().a)!==0)C.a.i(z,"Clr4")
if((y&$.$get$aj().a)!==0)C.a.i(z,"Weight")
if((y&$.$get$ai().a)!==0)C.a.i(z,"Bending")
if(z.length<=0)return"None"
return C.a.u(z,"|")},
t:{
ap:function(a){return new Z.aG(a)}}}}],["","",,D,{"^":"",fy:{"^":"a;"},bQ:{"^":"a;0a,0b,0c,0d",
i:function(a,b){var z,y
z={func:1,ret:-1,args:[D.L]}
H.j(b,z)
y=this.a
if(y==null){z=H.k([],[z])
this.a=z}else z=y
C.a.i(z,b)},
N:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[D.L]})
z=this.a
z=z==null?null:C.a.J(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).N(z,b)||!1}else y=!1
return y},
a1:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.L(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.G(y,new D.fV(z))
return!0},
t:{
b0:function(){var z=new D.bQ()
z.d=0
return z}}},fV:{"^":"b:30;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.L]})
z=this.a.a
z.b
a.$1(z)}},L:{"^":"a;a,0b"},h4:{"^":"L;c,d,a,0b,$ti"},h5:{"^":"L;c,d,a,0b,$ti"},aC:{"^":"L;c,d,e,a,0b,$ti",
h:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}}],["","",,X,{"^":"",dm:{"^":"a;a,b",
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dm))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)},
t:{"^":"lW<"}},dM:{"^":"a;a,b",
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}},hf:{"^":"a;0a,0b,0c,0d",
du:function(a){this.c=a.b
this.d.i(0,a.a)
return!1},
dq:function(a){this.c=a.b
this.d.N(0,a.a)
return!1}},hl:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b2:function(a,b){this.r=a.a
return!1},
aq:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.bP()
if(typeof z!=="number")return z.bM()
this.r=(z&~y)>>>0
return!1},
ap:function(a,b){return!1},
dv:function(a){return!1},
cv:function(a,b,c){return}},br:{"^":"a;a,b,c",
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.br))return!1
if(this.a!==b.a)return!1
z=this.b
y=b.b
if(z==null?y!=null:z!==y)return!1
z=this.c
y=b.c
if(z==null?y!=null:z!==y)return!1
return!0},
h:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},hu:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
b2:function(a,b){this.f=a.a
return!1},
aq:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.bP()
if(typeof z!=="number")return z.bM()
this.f=(z&~y)>>>0
return!1},
ap:function(a,b){return!1},
dw:function(a,b){return!1}},hG:{"^":"L;"},iw:{"^":"hG;x,y,z,Q,ch,c,d,e,a,0b"},ix:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
bm:function(a,b){var z,y,x,w
H.G(a,"$ish",[V.P],"$ash")
z=new P.aw(Date.now(),!1)
y=a.length>0?a[0]:new V.P(0,0)
x=this.a.gcZ()
w=new X.iw(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
dt:function(a){var z
H.G(a,"$ish",[V.P],"$ash")
z=this.b
if(z==null)return!1
z.a1(this.bm(a,!0))
return!0},
dr:function(a){var z
H.G(a,"$ish",[V.P],"$ash")
z=this.c
if(z==null)return!1
z.a1(this.bm(a,!0))
return!0},
ds:function(a){H.G(a,"$ish",[V.P],"$ash")
return!1}},iD:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gcZ:function(){var z=this.a
return V.bw(0,0,(z&&C.h).gbw(z).c,C.h.gbw(z).d)},
bk:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dM(z,new X.br(y,a.altKey,a.shiftKey))},
ad:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.br(y,a.altKey,a.shiftKey)},
aY:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.br(y,a.altKey,a.shiftKey)},
a5:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.au()
v=z.top
if(typeof x!=="number")return x.au()
return new V.P(y-w,x-v)},
ak:function(a){return new V.ab(a.movementX,a.movementY)},
aV:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.k([],[V.P])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.Z)(x),++v){u=x[v]
t=C.c.X(u.pageX)
C.c.X(u.pageY)
s=z.left
C.c.X(u.pageX)
C.a.i(y,new V.P(t-s,C.c.X(u.pageY)-z.top))}return y},
a4:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dm(z,new X.br(y,a.altKey,a.shiftKey))},
aS:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.au()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.au()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
dU:[function(a){this.f=!0},"$1","gcs",4,0,7],
dN:[function(a){this.f=!1},"$1","gcm",4,0,7],
dR:[function(a){H.n(a,"$isan")
if(this.f&&this.aS(a))a.preventDefault()},"$1","gcp",4,0,4],
dW:[function(a){var z
H.n(a,"$isbp")
if(!this.f)return
z=this.bk(a)
this.b.du(z)},"$1","gcu",4,0,19],
dV:[function(a){var z
H.n(a,"$isbp")
if(!this.f)return
z=this.bk(a)
this.b.dq(z)},"$1","gct",4,0,19],
dX:[function(a){var z,y,x,w
H.n(a,"$isan")
z=this.a
z.focus()
this.f=!0
this.ad(a)
if(this.x){y=this.a4(a)
x=this.ak(a)
if(this.d.b2(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a4(a)
w=this.a5(a)
if(this.c.b2(y,w))a.preventDefault()},"$1","gcw",4,0,4],
dZ:[function(a){var z,y,x
H.n(a,"$isan")
this.ad(a)
z=this.a4(a)
if(this.x){y=this.ak(a)
if(this.d.aq(z,y))a.preventDefault()
return}if(this.r)return
x=this.a5(a)
if(this.c.aq(z,x))a.preventDefault()},"$1","gcA",4,0,4],
dT:[function(a){var z,y,x
H.n(a,"$isan")
if(!this.aS(a)){this.ad(a)
z=this.a4(a)
if(this.x){y=this.ak(a)
if(this.d.aq(z,y))a.preventDefault()
return}if(this.r)return
x=this.a5(a)
if(this.c.aq(z,x))a.preventDefault()}},"$1","gcr",4,0,4],
dY:[function(a){var z,y,x
H.n(a,"$isan")
this.ad(a)
z=this.a4(a)
if(this.x){y=this.ak(a)
if(this.d.ap(z,y))a.preventDefault()
return}if(this.r)return
x=this.a5(a)
if(this.c.ap(z,x))a.preventDefault()},"$1","gcz",4,0,4],
dS:[function(a){var z,y,x
H.n(a,"$isan")
if(!this.aS(a)){this.ad(a)
z=this.a4(a)
if(this.x){y=this.ak(a)
if(this.d.ap(z,y))a.preventDefault()
return}if(this.r)return
x=this.a5(a)
if(this.c.ap(z,x))a.preventDefault()}},"$1","gcq",4,0,4],
e_:[function(a){var z,y
H.n(a,"$isbE")
this.ad(a)
z=new V.ab((a&&C.r).gd4(a),C.r.gd5(a)).Z(0,180)
if(this.x){if(this.d.dv(z))a.preventDefault()
return}if(this.r)return
y=this.a5(a)
if(this.c.dw(z,y))a.preventDefault()},"$1","gcB",4,0,32],
e0:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a4(this.y)
v=this.a5(this.y)
this.d.cv(w,v,x)}},"$1","gcC",4,0,7],
e3:[function(a){var z
H.n(a,"$isb9")
this.a.focus()
this.f=!0
this.aY(a)
z=this.aV(a)
if(this.e.dt(z))a.preventDefault()},"$1","gcG",4,0,12],
e1:[function(a){var z
H.n(a,"$isb9")
this.aY(a)
z=this.aV(a)
if(this.e.dr(z))a.preventDefault()},"$1","gcE",4,0,12],
e2:[function(a){var z
H.n(a,"$isb9")
this.aY(a)
z=this.aV(a)
if(this.e.ds(z))a.preventDefault()},"$1","gcF",4,0,12]}}],["","",,V,{"^":"",
lY:[function(a,b){if(typeof b!=="number")return b.au()
if(typeof a!=="number")return H.aD(a)
return Math.abs(b-a)<=1e-9},"$2","ho",8,0,29],
B:function(a,b,c){if(a==null)return C.b.aD("null",c)
return C.b.aD(C.c.aG($.l.$2(a,0)?0:a,b),c+b+1)},
aI:function(a,b,c){var z,y,x,w,v,u
H.G(a,"$ish",[P.Q],"$ash")
z=H.k([],[P.e])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.Z)(a),++w){v=V.B(a[w],b,c)
x=Math.max(x,v.length)
C.a.i(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.K(z,u,C.b.aD(z[u],x))}return z},
dr:{"^":"a;a,b,c,d",
n:function(a,b){var z
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
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}},
M:{"^":"a;a,b,c,d",
as:function(a,b){var z=H.k([this.a,this.b,this.c,this.d],[P.Q])
return z},
ar:function(a){return this.as(a,!1)},
P:function(a){var z,y,x,w,v,u
z=this.a
y=this.d
x=this.b
w=this.c
v=z*y-x*w
if($.l.$2(v,0))return new V.M(1,0,0,1)
u=1/v
return new V.M(y*u,-x*u,-w*u,z*u)},
D:function(a,b){var z,y,x,w,v,u,t,s
z=this.a
y=b.a
x=this.b
w=b.c
v=b.b
u=b.d
t=this.c
s=this.d
return new V.M(z*y+x*w,z*v+x*u,t*y+s*w,t*v+s*u)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
h:function(a){return this.A()},
a2:function(a,b,c){var z,y,x,w,v
z=[P.Q]
y=V.aI(H.k([this.a,this.c],z),b,c)
x=V.aI(H.k([this.b,this.d],z),b,c)
z=y.length
if(0>=z)return H.f(y,0)
w="["+y[0]+", "
v=x.length
if(0>=v)return H.f(x,0)
w=w+x[0]+",\n"+a+" "
if(1>=z)return H.f(y,1)
w=w+y[1]+", "
if(1>=v)return H.f(x,1)
return w+x[1]+"]"},
A:function(){return this.a2("",3,0)},
l:function(a){return this.a2(a,3,0)},
t:{
b2:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return new V.M(z,-y,y,z)},
hp:function(a,b){var z,y,x,w
H.G(a,"$ish",[P.Q],"$ash")
z=a[0]
y=a[1]
x=a[2]
w=a[3]
return new V.M(z,y,x,w)}}},
D:{"^":"a;a,b,c,d,e,f,r,x,y",
as:function(a,b){var z=H.k([this.a,this.b,this.c,this.d,this.e,this.f,this.r,this.x,this.y],[P.Q])
return z},
ar:function(a){return this.as(a,!1)},
P:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=this.e
x=this.y
w=y*x
v=this.f
u=this.x
t=this.d
s=this.b
r=s*x
q=this.c
p=u*q
o=this.r
n=s*v-y*q
m=z*(w-v*u)-t*(r-p)+o*n
if($.l.$2(m,0))return new V.D(1,0,0,0,1,0,0,0,1)
l=1/m
return new V.D((w-u*v)*l,(p-r)*l,n*l,(o*v-t*x)*l,(z*x-o*q)*l,(t*q-z*v)*l,(t*u-o*y)*l,(o*s-z*u)*l,(z*y-t*s)*l)},
D:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=this.a
y=b.a
x=this.b
w=b.d
v=this.c
u=b.r
t=b.b
s=b.e
r=b.x
q=b.c
p=b.f
o=b.y
n=this.d
m=this.e
l=this.f
k=this.r
j=this.x
i=this.y
return new V.D(z*y+x*w+v*u,z*t+x*s+v*r,z*q+x*p+v*o,n*y+m*w+l*u,n*t+m*s+l*r,n*q+m*p+l*o,k*y+j*w+i*u,k*t+j*s+i*r,k*q+j*p+i*o)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
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
h:function(a){return this.A()},
a2:function(a,b,c){var z,y,x,w,v,u,t,s
z=[P.Q]
y=V.aI(H.k([this.a,this.d,this.r],z),b,c)
x=V.aI(H.k([this.b,this.e,this.x],z),b,c)
w=V.aI(H.k([this.c,this.f,this.y],z),b,c)
z=y.length
if(0>=z)return H.f(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.f(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.f(w,0)
v=v+w[0]+",\n"
s=a+" "
if(1>=z)return H.f(y,1)
s=s+y[1]+", "
if(1>=u)return H.f(x,1)
s=s+x[1]+", "
if(1>=t)return H.f(w,1)
s=v+(s+w[1]+",\n")
v=a+" "
if(2>=z)return H.f(y,2)
v=v+y[2]+", "
if(2>=u)return H.f(x,2)
v=v+x[2]+", "
if(2>=t)return H.f(w,2)
return s+(v+w[2]+"]")},
A:function(){return this.a2("",3,0)},
l:function(a){return this.a2(a,3,0)},
t:{
b3:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return new V.D(1,0,0,0,z,-y,0,y,z)},
b4:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return new V.D(z,0,-y,0,1,0,y,0,z)},
b5:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return new V.D(z,-y,0,y,z,0,0,0,1)},
hq:function(a,b){var z,y,x,w,v,u,t,s,r
H.G(a,"$ish",[P.Q],"$ash")
z=a[0]
y=a[1]
x=a[2]
w=a[3]
v=a[4]
u=a[5]
t=a[6]
s=a[7]
r=a[8]
return new V.D(z,y,x,w,v,u,t,s,r)}}},
cg:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
as:function(a,b){var z=H.k([this.a,this.b,this.c,this.d,this.e,this.f,this.r,this.x,this.y,this.z,this.Q,this.ch,this.cx,this.cy,this.db,this.dx],[P.Q])
return z},
ar:function(a){return this.as(a,!1)},
P:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
x=this.b
w=this.e
v=z*y-x*w
u=this.r
t=this.c
s=z*u-t*w
r=this.x
q=this.d
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
j=this.z
i=this.cx
h=l*k-j*i
g=this.db
f=this.Q
e=l*g-f*i
d=this.dx
c=this.ch
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.l.$2(a2,0))return V.ax()
a3=1/a2
a4=-w
a5=-i
return V.F((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
D:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
x=this.b
w=a7.e
v=this.c
u=a7.y
t=this.d
s=a7.cx
r=a7.b
q=a7.f
p=a7.z
o=a7.cy
n=a7.c
m=a7.r
l=a7.Q
k=a7.db
j=a7.d
i=a7.x
h=a7.ch
g=a7.dx
f=this.e
e=this.f
d=this.r
c=this.x
b=this.y
a=this.z
a0=this.Q
a1=this.ch
a2=this.cx
a3=this.cy
a4=this.db
a5=this.dx
return V.F(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
aH:function(a){var z,y,x,w
z=a.a
y=a.b
x=a.c
w=a.d
return new V.c_(this.a*z+this.b*y+this.c*x+this.d*w,this.e*z+this.f*y+this.r*x+this.x*w,this.y*z+this.z*y+this.Q*x+this.ch*w,this.cx*z+this.cy*y+this.db*x+this.dx*w)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cg))return!1
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
h:function(a){return this.A()},
a2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.Q]
y=V.aI(H.k([this.a,this.e,this.y,this.cx],z),b,c)
x=V.aI(H.k([this.b,this.f,this.z,this.cy],z),b,c)
w=V.aI(H.k([this.c,this.r,this.Q,this.db],z),b,c)
v=V.aI(H.k([this.d,this.x,this.ch,this.dx],z),b,c)
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
A:function(){return this.a2("",3,0)},
l:function(a){return this.a2(a,3,0)},
t:{
F:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.cg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ax:function(){return V.F(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dV:function(a,b,c){return V.F(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dU:function(a,b,c,d){return V.F(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
b6:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.F(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
b7:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.F(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
b8:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.F(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)},
hr:function(a,b){var z
H.G(a,"$ish",[P.Q],"$ash")
z=V.F(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15])
return z}}},
P:{"^":"a;a,b",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}},
u:{"^":"a;a,b,c",
Z:function(a,b){if($.l.$2(b,0))return new V.u(0,0,0)
return new V.u(this.a/b,this.b/b,this.c/b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.u))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
h:function(a){return this.A()},
R:function(a,b){return"["+V.B(this.a,a,b)+", "+V.B(this.b,a,b)+", "+V.B(this.c,a,b)+"]"},
A:function(){return this.R(3,0)}},
c_:{"^":"a;a,b,c,d",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c_))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
h:function(a){return this.A()},
R:function(a,b){return"["+V.B(this.a,a,b)+", "+V.B(this.b,a,b)+", "+V.B(this.c,a,b)+", "+V.B(this.d,a,b)+"]"},
A:function(){return this.R(3,0)}},
cW:{"^":"a;a,b,c,d",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cW))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"},
t:{
bw:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cW(a,b,c,d)}}},
cX:{"^":"a;a,b,c,d,e,f",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cX))return!1
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
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+", "+V.B(this.e,3,0)+", "+V.B(this.f,3,0)+"]"},
t:{
cj:function(a,b,c,d,e,f){return new V.cX(a,b,c,d,e,f)}}},
ab:{"^":"a;a,b",
bz:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.D()
y=this.b
if(typeof y!=="number")return y.D()
return Math.sqrt(z*z+y*y)},"$0","gk",1,0,9],
Z:function(a,b){var z,y
if($.l.$2(b,0))return new V.ab(0,0)
z=this.a
if(typeof z!=="number")return z.Z()
y=this.b
if(typeof y!=="number")return y.Z()
return new V.ab(z/b,y/b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}},
ac:{"^":"a;a,b,c",
bz:[function(a){return Math.sqrt(this.ag(this))},"$0","gk",1,0,9],
ag:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bx:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.ac(z*y-x*w,x*v-u*y,u*w-z*v)},
aI:function(a){return new V.ac(-this.a,-this.b,-this.c)},
Z:function(a,b){if($.l.$2(b,0))return new V.ac(0,0,0)
return new V.ac(this.a/b,this.b/b,this.c/b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}},
co:{"^":"a;a,b,c,d",
bz:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gk",1,0,9],
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.co))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
h:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}}}],["","",,U,{"^":"",ds:{"^":"cU;0a,0b",
gC:function(){var z=this.b
if(z==null){z=D.b0()
this.b=z}return z},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ds))return!1
return J.I(this.a,b.a)},
h:function(a){return"Constant: "+this.a.l("          ")},
t:{
dt:function(a){var z=new U.ds()
z.a=a
return z}}},cU:{"^":"fy;"}}],["","",,M,{"^":"",fT:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
aa:[function(a){var z
H.n(a,"$isL")
z=this.x
if(!(z==null))z.a1(a)},function(){return this.aa(null)},"dL","$1","$0","ga_",0,2,3],
dP:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aK
H.G(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga_(),w={func:1,ret:-1,args:[D.L]},v=[w],u=0;u<b.length;b.length===y||(0,H.Z)(b),++u){t=b[u]
if(t!=null){if(t.gL()==null){s=new D.bQ()
s.d=0
t.sL(s)}s=t.gL()
s.toString
H.j(x,w)
r=s.a
if(r==null){r=H.k([],v)
s.a=r
s=r}else s=r
C.a.i(s,x)}}z=new D.h4(a,b,this,[z])
z.b=!0
this.aa(z)},"$2","gcn",8,0,8],
dQ:[function(a,b){var z,y,x,w,v,u
z=E.aK
H.G(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga_(),w=0;w<b.length;b.length===y||(0,H.Z)(b),++w){v=b[w]
if(v!=null){if(v.gL()==null){u=new D.bQ()
u.d=0
v.sL(u)}v.gL().N(0,x)}}z=new D.h5(a,b,this,[z])
z.b=!0
this.aa(z)},"$2","gco",8,0,8],
sbJ:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gC().N(0,this.ga_())
y=this.c
this.c=a
if(a!=null)a.gC().i(0,this.ga_())
z=new D.aC("technique",y,this.c,this,[O.d0])
z.b=!0
this.aa(z)}},
gC:function(){var z=this.x
if(z==null){z=D.b0()
this.x=z}return z},
aE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.bF(this.c)
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
if(typeof x!=="number")return H.aD(x)
u=C.c.X(v.a*x)
if(typeof w!=="number")return H.aD(w)
t=C.c.X(v.b*w)
s=C.c.X(v.c*x)
a.c=s
v=C.c.X(v.d*w)
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
s=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.F(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.bE(n)
y=$.e0
if(y==null){y=new V.ac(0,0,-1)
m=y.Z(0,Math.sqrt(y.ag(y)))
y=new V.ac(0,1,0).bx(m)
l=y.Z(0,Math.sqrt(y.ag(y)))
k=m.bx(l)
j=new V.ac(0,0,0)
y=V.F(l.a,k.a,m.a,l.aI(0).ag(j),l.b,k.b,m.b,k.aI(0).ag(j),l.c,k.c,m.c,m.aI(0).ag(j),0,0,0,1)
$.e0=y
i=y}else i=y
z=z.b
if(z!=null){h=z.a
if(h!=null)i=h.D(0,i)}a.db.bE(i)
for(z=this.d.a,z=new J.bh(z,z.length,0,[H.t(z,0)]);z.w();)z.d.bL(0,a)
for(z=this.d.a,z=new J.bh(z,z.length,0,[H.t(z,0)]);z.w();)z.d.aE(a)
this.a.toString
a.cy.b3()
a.db.b3()
this.b.toString
a.bD()},
$ismE:1}}],["","",,A,{"^":"",i4:{"^":"fv;"}}],["","",,F,{"^":"",fW:{"^":"a;"},hg:{"^":"a;"},hF:{"^":"a;"},e6:{"^":"a;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.b0()
this.e=z}return z},
h:function(a){var z=H.k([],[P.e])
if(this.a.c.length!==0){C.a.i(z,"Vertices:")
C.a.i(z,this.a.l("   "))}if(this.b.b.length!==0){C.a.i(z,"Points:")
C.a.i(z,this.b.l("   "))}this.c.b
this.d.b
return C.a.u(z,"\n")},
W:function(a){var z=this.e
if(!(z==null))z.a1(a)},
aC:function(){return this.W(null)}},i5:{"^":"a;a,0b",
gk:function(a){return 0},
h:function(a){return this.A()},
l:function(a){var z,y,x
z=H.k([],[P.e])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.f(y,x)
C.a.i(z,y[x].l(a))}return C.a.u(z,"\n")},
A:function(){return this.l("")}},i6:{"^":"a;a,0b",
gk:function(a){return 0},
h:function(a){return this.A()},
l:function(a){var z,y,x
z=H.k([],[P.e])
for(y=0;!1;++y){x=this.b
if(y>=0)return H.f(x,y)
C.a.i(z,x[y].l(a+(""+y+". ")))}return C.a.u(z,"\n")},
A:function(){return this.l("")}},i7:{"^":"a;a,0b",
gk:function(a){return this.b.length},
h:function(a){return this.A()},
l:function(a){var z,y,x,w
z=H.k([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.Z)(y),++w)C.a.i(z,y[w].l(a))
return C.a.u(z,"\n")},
A:function(){return this.l("")}},ex:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.A()},
l:function(a){var z,y,x
z=H.k([],[P.e])
C.a.i(z,C.b.aD(J.aJ(this.e),0))
y=this.f
if(y!=null)C.a.i(z,y.h(0))
else C.a.i(z,"-")
C.a.i(z,"-")
C.a.i(z,"-")
C.a.i(z,"-")
C.a.i(z,"-")
C.a.i(z,"-")
C.a.i(z,V.B(this.ch,3,0))
C.a.i(z,"-")
x=C.a.u(z,", ")
return a+"{"+x+"}"},
A:function(){return this.l("")}},iG:{"^":"a;a,0b,0c",
cS:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
i:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.c(P.bR("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.i(z,b)
this.a.aC()
return!0},
gk:function(a){return this.c.length},
h:function(a){return this.A()},
l:function(a){var z,y,x,w
this.cS()
z=H.k([],[P.e])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.Z)(y),++w)C.a.i(z,y[w].l(a))
return C.a.u(z,"\n")},
A:function(){return this.l("")}},iH:{"^":"a;a,0b,0c,0d",
gk:function(a){return 0},
h:function(a){return this.A()},
l:function(a){var z,y,x
z=H.k([],[P.e])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.f(y,x)
C.a.i(z,y[x].l(a))}for(y=this.c,x=0;!1;++x){if(x>=0)return H.f(y,x)
C.a.i(z,y[x].l(a))}for(y=this.d,x=0;!1;++x){if(x>=0)return H.f(y,x)
C.a.i(z,y[x].l(a))}return C.a.u(z,"\n")},
A:function(){return this.l("")}},iI:{"^":"a;a,0b,0c",
gk:function(a){return 0},
h:function(a){return this.A()},
l:function(a){var z,y,x
z=H.k([],[P.e])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.f(y,x)
C.a.i(z,y[x].l(a))}for(y=this.c,x=0;!1;++x){if(x>=0)return H.f(y,x)
C.a.i(z,y[x].l(a))}return C.a.u(z,"\n")},
A:function(){return this.l("")}},iJ:{"^":"a;a,0b",
gk:function(a){return this.b.length},
h:function(a){return this.A()},
l:function(a){var z,y,x,w
z=H.k([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.Z)(y),++w)C.a.i(z,y[w].l(a))
return C.a.u(z,"\n")},
A:function(){return this.l("")}}}],["","",,O,{"^":"",fK:{"^":"d0;a,0b,0c",
gC:function(){var z=this.c
if(z==null){z=D.b0()
this.c=z}return z},
dC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.cy
y=z.gan(z)
z=a.db
x=z.gan(z)
z=a.dx
w=z.gan(z)
z=this.a
z.a+="Object:     "+w.l("            ")+"\n\n"
z.a+="View:       "+x.l("            ")+"\n\n"
z.a+="Projection: "+y.l("            ")+"\n\n"
C.a.sk(this.b,0)
v=b.c
if(v!=null){u=v.a
t=u.c.length
for(s=0;s<t;++s){v=u.c
if(s>=v.length)return H.f(v,s)
r=v[s].f
q=new V.c_(r.a,r.b,r.c,1)
p=w.aH(q)
o=x.aH(p)
n=y.aH(o)
m=new V.u(n.a,n.b,n.c).Z(0,n.d)
z.a+=q.R(3,2)+" => "+p.R(3,2)+" => "+o.R(3,2)+" => "+n.R(3,2)+" => "+m.R(3,2)+"\n"
C.a.i(this.b,m)}}}},d0:{"^":"a;"}}],["","",,T,{"^":"",is:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",fp:{"^":"a;",
am:function(a,b){return!0},
h:function(a){return"all"},
$isbY:1},bY:{"^":"a;"},dT:{"^":"a;",
am:["bZ",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.Z)(z),++x)if(z[x].am(0,b))return!0
return!1}],
h:["bd",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.Z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.h(0)}return x}],
$isbY:1},bs:{"^":"dT;0a",
am:function(a,b){return!this.bZ(0,b)},
h:function(a){return"!["+this.bd(0)+"]"}},i2:{"^":"a;0a",
c1:function(a){var z,y
if(a.a.length<=0)throw H.c(P.bR("May not create a SetMatcher with zero characters."))
z=new H.b1(0,0,[P.K,P.U])
for(y=new H.cS(a,a.gk(a),0,[H.bd(a,"p",0)]);y.w();)z.K(0,y.d,!0)
this.a=z},
am:function(a,b){return this.a.d0(0,b)},
h:function(a){var z=this.a
return P.d_(new H.dO(z,[H.t(z,0)]),0,null)},
$isbY:1,
t:{
a1:function(a){var z=new V.i2()
z.c1(a)
return z}}},e8:{"^":"a;a,b,0c,0d",
gdg:function(a){return this.b},
u:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ei(this.a.B(0,b))
w.a=H.k([],[V.bY])
w.c=!1
C.a.i(this.c,w)
return w},
d6:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.Z)(z),++x){w=z[x]
if(w.am(0,a))return w}return},
h:function(a){return this.b}},eg:{"^":"a;a,b,c",
h:function(a){var z,y
z=H.cF(this.b,"\n","\\n")
y=H.cF(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eh:{"^":"a;a,b,0c",
h:function(a){return this.b}},iv:{"^":"a;0a,0b,0c",
B:function(a,b){var z=this.a.p(0,b)
if(z==null){z=new V.e8(this,b)
z.c=H.k([],[V.ei])
this.a.K(0,b,z)}return z},
at:function(a){var z,y
z=this.b.p(0,a)
if(z==null){z=new V.eh(this,a)
y=P.e
z.c=new H.b1(0,0,[y,y])
this.b.K(0,a,z)}return z},
dK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.k([],[V.eg])
y=this.c
x=[P.K]
w=H.k([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.i(z,u)
return z}s=C.b.ab(a,t)
r=y.d6(s)
if(r==null){if(u==null){C.a.i(w,s)
q=P.d_(w,0,null)
throw H.c(P.bR("Untokenizable string [state: "+y.gdg(y)+", index "+t+']: "'+q+'"'))}C.a.i(z,u)
t=u.c+1
w=H.k([],x)
y=this.c
u=null}else{if(!r.c)C.a.i(w,s)
y=r.b
if(y.d!=null){q=P.d_(w,0,null)
p=y.d
o=p.c.p(0,q)
u=new V.eg(o==null?p.b:o,q,t)}++t}}}},ei:{"^":"dT;b,0c,0a",
h:function(a){return this.b.b+": "+this.bd(0)}}}],["","",,X,{"^":"",dn:{"^":"a;",$isdW:1},fY:{"^":"ec;0a,0b,0c,0d,0e,0f,0r,0x",
gC:function(){var z=this.x
if(z==null){z=D.b0()
this.x=z}return z}},hD:{"^":"a;0a,0b,0c,0d,0e,0f",
gC:function(){var z=this.f
if(z==null){z=D.b0()
this.f=z}return z},
aj:[function(a){var z
H.n(a,"$isL")
z=this.f
if(!(z==null))z.a1(a)},function(){return this.aj(null)},"dO","$1","$0","gbn",0,2,3],
sao:function(a){var z,y
if(!J.I(this.b,a)){z=this.b
if(z!=null)z.gC().N(0,this.gbn())
y=this.b
this.b=a
if(a!=null)a.gC().i(0,this.gbn())
z=new D.aC("mover",y,this.b,this,[U.cU])
z.b=!0
this.aj(z)}},
$isdW:1,
$isdn:1},ec:{"^":"a;"}}],["","",,V,{"^":"",i8:{"^":"a;0a,0b",
c2:function(a,b){var z,y,x,w,v,u
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
if(a.length!==0)z.title=a
u=z.createElement("div")
this.a=u
v.appendChild(u)
this.b=null
u=W.a7
W.S(z,"scroll",H.j(new V.ib(x),{func:1,ret:-1,args:[u]}),!1,u)},
cT:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.G(a,"$ish",[P.e],"$ash")
this.cM()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.dK(C.a.dc(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.Z)(x),++v){u=x[v]
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
if(H.fb(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.k_(C.K,s,C.q,!1)
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
cM:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iv()
y=P.e
z.a=new H.b1(0,0,[y,V.e8])
z.b=new H.b1(0,0,[y,V.eh])
z.c=z.B(0,"Start")
y=z.B(0,"Start").u(0,"Bold")
x=V.a1(new H.a_("*"))
C.a.i(y.a,x)
y.c=!0
y=z.B(0,"Bold").u(0,"Bold")
x=new V.bs()
w=[V.bY]
x.a=H.k([],w)
C.a.i(y.a,x)
y=V.a1(new H.a_("*"))
C.a.i(x.a,y)
y=z.B(0,"Bold").u(0,"BoldEnd")
x=V.a1(new H.a_("*"))
C.a.i(y.a,x)
y.c=!0
y=z.B(0,"Start").u(0,"Italic")
x=V.a1(new H.a_("_"))
C.a.i(y.a,x)
y.c=!0
y=z.B(0,"Italic").u(0,"Italic")
x=new V.bs()
x.a=H.k([],w)
C.a.i(y.a,x)
y=V.a1(new H.a_("_"))
C.a.i(x.a,y)
y=z.B(0,"Italic").u(0,"ItalicEnd")
x=V.a1(new H.a_("_"))
C.a.i(y.a,x)
y.c=!0
y=z.B(0,"Start").u(0,"Code")
x=V.a1(new H.a_("`"))
C.a.i(y.a,x)
y.c=!0
y=z.B(0,"Code").u(0,"Code")
x=new V.bs()
x.a=H.k([],w)
C.a.i(y.a,x)
y=V.a1(new H.a_("`"))
C.a.i(x.a,y)
y=z.B(0,"Code").u(0,"CodeEnd")
x=V.a1(new H.a_("`"))
C.a.i(y.a,x)
y.c=!0
y=z.B(0,"Start").u(0,"LinkHead")
x=V.a1(new H.a_("["))
C.a.i(y.a,x)
y.c=!0
y=z.B(0,"LinkHead").u(0,"LinkTail")
x=V.a1(new H.a_("|"))
C.a.i(y.a,x)
x=z.B(0,"LinkHead").u(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.i(x.a,y)
x.c=!0
x=z.B(0,"LinkHead").u(0,"LinkHead")
y=new V.bs()
y.a=H.k([],w)
C.a.i(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.i(y.a,x)
x=z.B(0,"LinkTail").u(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.i(x.a,y)
x.c=!0
x=z.B(0,"LinkTail").u(0,"LinkTail")
y=new V.bs()
y.a=H.k([],w)
C.a.i(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.i(y.a,x)
C.a.i(z.B(0,"Start").u(0,"Other").a,new V.fp())
x=z.B(0,"Other").u(0,"Other")
y=new V.bs()
y.a=H.k([],w)
C.a.i(x.a,y)
x=V.a1(new H.a_("*_`["))
C.a.i(y.a,x)
x=z.B(0,"BoldEnd")
x.d=x.a.at("Bold")
x=z.B(0,"ItalicEnd")
x.d=x.a.at("Italic")
x=z.B(0,"CodeEnd")
x.d=x.a.at("Code")
x=z.B(0,"LinkEnd")
x.d=x.a.at("Link")
x=z.B(0,"Other")
x.d=x.a.at("Other")
this.b=z},
t:{
i9:function(a,b){var z=new V.i8()
z.c2(a,!1)
return z}}},ib:{"^":"b:20;a",
$1:function(a){P.c1(C.f,new V.ia(this.a))}},ia:{"^":"b:1;a",
$0:function(){var z,y,x
z=C.c.X(document.documentElement.scrollTop)
y=this.a.style
x=H.d(-0.01*z)+"px"
y.top=x}}}],["","",,M,{"^":"",
km:function(a){a.q(0,"Uint8List bench timing",new M.kn())
a.q(0,"List int bench timing",new M.ko())},
kp:function(a){a.q(0,"Matrix2 Point Transposition Test",new M.kq())
a.q(0,"Matrix2 Vector Transposition Test",new M.kr())
a.q(0,"Matrix2 Identity Test",new M.ks())
a.q(0,"Matrix2 Scalar Test",new M.kt())
a.q(0,"Matrix2 Basic Rotate Test",new M.ku())
a.q(0,"Matrix2 Rotate Test",new M.kv())
a.q(0,"Matrix2 Miscellaneous Test",new M.kw())
a.q(0,"Matrix2 Inverse Test",new M.kx())
a.q(0,"Matrix2 Multiplication Test",new M.ky())},
E:function(a,b,c,d){if(b!==c){a.j("Unexpected result from "+d+": "+("\n   Expected: "+c)+("\n   Gotten:   "+H.d(b)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("Checked "+d+" is "+H.d(b)+"\n\n","info_log")},
T:function(a,b,c,d){var z,y
z=c+"\n             "+d
y=b.l("             ")
if(y!==z){a.j("Unexpected result from Matrix2: "+("\n   Expected: "+z)+("\n   Gotten:   "+y+"\n"),"error_log")
a.m()
a.m()}else a.j("Checking: "+b.l("          ")+"\n\n","info_log")},
d7:function(a,b,c,d){var z,y,x,w
z=b.P(0)
M.T(a,z,c,d)
y=z.P(0)
if(!y.n(0,b)){a.j("Unexpected result from Matrix2.inverse().inverse(): \n   Expected: "+b.l("             ")+"\n   Gotten:   "+y.l("             ")+"\n","error_log")
a.m()
a.m()}x=b.D(0,z)
if(!x.n(0,new V.M(1,0,0,1))){a.j("Unexpected result from Matrix2*Matrix2.inverse(): \n   Matrix:   "+b.l("             ")+"\n   Inverted: "+z.l("             ")+"\n   Expected: "+new V.M(1,0,0,1).l("             ")+"\n   Gotten:   "+x.l("             ")+"\n","error_log")
a.m()
a.m()}w=b.D(0,z)
if(!w.n(0,new V.M(1,0,0,1))){a.j("Unexpected result from Matrix2*Matrix2.inverse(): \n   Matrix:   "+b.l("             ")+"\n   Inverted: "+z.l("             ")+"\n   Expected: "+new V.M(1,0,0,1).l("             ")+"\n   Gotten:   "+w.l("             ")+"\n","error_log")
a.m()
a.m()}},
C:function(a,b,c,d,e,f){var z,y
z=new V.P(e,f)
y=new V.P(b.a*c+b.b*d,b.c*c+b.d*d)
a.j("Checking Matrix2.transPnt2: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+new V.P(c,d).h(0)+"\n"),"info_log")
if(!y.n(0,z)){a.j("Unexpected result from Matrix2.transPnt2: "+("\n   Expected: "+z.h(0))+("\n   Gotten:   "+y.h(0)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("   Result:   "+y.h(0)+"\n\n","info_log")},
cx:function(a,b,c,d,e,f){var z,y
z=new V.ab(e,f)
y=new V.ab(b.a*c+b.b*d,b.c*c+b.d*d)
a.j("Checking Matrix2.transVec2: \n   Matrix:   "+b.l("             ")+("\n   Vector:   "+new V.ab(c,d).h(0)+"\n"),"info_log")
if(!y.n(0,z)){a.j("Unexpected result from Matrix2.transVec2: "+("\n   Expected: "+z.h(0))+("\n   Gotten:   "+y.h(0)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("   Result:   "+y.h(0)+"\n\n","info_log")},
kz:function(a){a.q(0,"Matrix3 Point Transposition Test",new M.kA())
a.q(0,"Matrix3 Vector Transposition Test",new M.kB())
a.q(0,"Matrix3 Identity Test",new M.kC())
a.q(0,"Matrix3 Scalar Test",new M.kH())
a.q(0,"Matrix3 Basic Rotate X Test",new M.kI())
a.q(0,"Matrix3 Rotate X Test",new M.kJ())
a.q(0,"Matrix3 Basic Rotate Y Test",new M.kK())
a.q(0,"Matrix3 Rotate Y Test",new M.kL())
a.q(0,"Matrix3 Basic Rotate Z Test",new M.kM())
a.q(0,"Matrix3 Rotate Z Test",new M.kN())
a.q(0,"Matrix3 Miscellaneous Test",new M.kO())
a.q(0,"Matrix3 Inverse Test",new M.kD())
a.q(0,"Matrix3 Multiplication Test",new M.kE())
a.q(0,"Matrix3 Point2 Transposition Test",new M.kF())
a.q(0,"Matrix3 Vector2 Transposition Test",new M.kG())},
A:function(a,b,c,d,e){var z,y
z=c+"\n             "+d+"\n             "+e
y=b.l("             ")
if(y!==z){a.j("Unexpected result from Matrix3: "+("\n   Expected: "+z)+("\n   Gotten:   "+y+"\n"),"error_log")
a.m()
a.m()}else a.j("Checking: "+b.l("          ")+"\n\n","info_log")},
c4:function(a,b,c,d,e){var z,y,x,w
z=b.P(0)
M.A(a,z,c,d,e)
y=z.P(0)
if(!y.n(0,b)){a.j("Unexpected result from Matrix3.inverse().inverse(): \n   Expected: "+b.l("             ")+"\n   Gotten:   "+y.l("             ")+"\n","error_log")
a.m()
a.m()}x=b.D(0,z)
if(!x.n(0,new V.D(1,0,0,0,1,0,0,0,1))){a.j("Unexpected result from Matrix3*Matrix3.inverse(): \n   Matrix:   "+b.l("             ")+"\n   Inverted: "+z.l("             ")+"\n   Expected: "+new V.D(1,0,0,0,1,0,0,0,1).l("             ")+"\n   Gotten:   "+x.l("             ")+"\n","error_log")
a.m()
a.m()}w=b.D(0,z)
if(!w.n(0,new V.D(1,0,0,0,1,0,0,0,1))){a.j("Unexpected result from Matrix3*Matrix3.inverse(): \n   Matrix:   "+b.l("             ")+"\n   Inverted: "+z.l("             ")+"\n   Expected: "+new V.D(1,0,0,0,1,0,0,0,1).l("             ")+"\n   Gotten:   "+w.l("             ")+"\n","error_log")
a.m()
a.m()}},
q:function(a,b,c,d,e,f,g,h){var z,y
z=new V.u(f,g,h)
y=new V.u(b.a*c+b.b*d+b.c*e,b.d*c+b.e*d+b.f*e,b.r*c+b.x*d+b.y*e)
a.j("Checking Matrix3.transPnt3: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+new V.u(c,d,e).h(0)+"\n"),"info_log")
if(!y.n(0,z)){a.j("Unexpected result from Matrix3.transPnt3: "+("\n   Expected: "+z.h(0))+("\n   Gotten:   "+y.h(0)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("   Result:   "+y.h(0)+"\n\n","info_log")},
aQ:function(a,b,c,d,e,f,g,h){var z,y
z=new V.ac(f,g,h)
y=new V.ac(b.a*c+b.b*d+b.c*e,b.d*c+b.e*d+b.f*e,b.r*c+b.x*d+b.y*e)
a.j("Checking Matrix3.transVec3: \n   Matrix:   "+b.l("             ")+("\n   Vector:   "+new V.ac(c,d,e).h(0)+"\n"),"info_log")
if(!y.n(0,z)){a.j("Unexpected result from Matrix3.transVec3: "+("\n   Expected: "+z.h(0))+("\n   Gotten:   "+y.h(0)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("   Result:   "+y.h(0)+"\n\n","info_log")},
cv:function(a,b,c,d,e,f){var z,y
z=new V.P(e,f)
y=new V.P(b.a*c+b.b*d+b.c,b.d*c+b.e*d+b.f)
a.j("Checking Matrix3.transPnt2: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+new V.P(c,d).h(0)+"\n"),"info_log")
if(!y.n(0,z)){a.j("Unexpected result from Matrix3.transPnt2: "+("\n   Expected: "+z.h(0))+("\n   Gotten:   "+y.h(0)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("   Result:   "+y.h(0)+"\n\n","info_log")},
cy:function(a,b,c,d,e,f){var z,y
z=new V.ab(e,f)
y=new V.ab(b.a*c+b.b*d,b.d*c+b.e*d)
a.j("Checking Matrix3.transVec2: \n   Matrix:   "+b.l("             ")+("\n   Vector:   "+new V.ab(c,d).h(0)+"\n"),"info_log")
if(!y.n(0,z)){a.j("Unexpected result from Matrix3.transVec2: "+("\n   Expected: "+z.h(0))+("\n   Gotten:   "+y.h(0)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("   Result:   "+y.h(0)+"\n\n","info_log")},
kP:function(a){a.q(0,"Matrix4 Point Transposition Test",new M.kQ())
a.q(0,"Matrix4 Vector Transposition Test",new M.kR())
a.q(0,"Matrix4 Identity Test",new M.kS())
a.q(0,"Matrix4 Scalar Test",new M.kZ())
a.q(0,"Matrix4 Basic Rotate X Test",new M.l_())
a.q(0,"Matrix4 Rotate X Test",new M.l0())
a.q(0,"Matrix4 Basic Rotate Y Test",new M.l1())
a.q(0,"Matrix4 Rotate Y Test",new M.l2())
a.q(0,"Matrix4 Basic Rotate Z Test",new M.l3())
a.q(0,"Matrix4 Rotate Z Test",new M.l4())
a.q(0,"Matrix4 Miscellaneous Test",new M.l5())
a.q(0,"Matrix4 Inverse Test",new M.kT())
a.q(0,"Matrix4 Multiplication Test",new M.kU())
a.q(0,"Matrix4 Point3 Transposition Test",new M.kV())
a.q(0,"Matrix4 Vector3 Transposition Test",new M.kW())
a.q(0,"Matrix4 Point2 Transposition Test",new M.kX())
a.q(0,"Matrix4 Vector2 Transposition Test",new M.kY())},
x:function(a,b,c,d,e,f){var z,y
z=c+"\n             "+d+"\n             "+e+"\n             "+f
y=b.l("             ")
if(y!==z){a.j("Unexpected result from Matrix4: "+("\n   Expected: "+z)+("\n   Gotten:   "+y+"\n"),"error_log")
a.m()
a.m()}else a.j("Checking: "+b.l("          ")+"\n\n","info_log")},
c5:function(a,b,c,d,e,f){var z,y,x,w
z=b.P(0)
M.x(a,z,c,d,e,f)
y=z.P(0)
if(!y.n(0,b)){a.j("Unexpected result from Matrix4.inverse().inverse(): \n   Expected: "+b.l("             ")+"\n   Gotten:   "+y.l("             ")+"\n","error_log")
a.m()
a.m()}x=b.D(0,z)
if(!x.n(0,V.ax())){a.j("Unexpected result from Matrix4*Matrix4.inverse(): \n   Matrix:   "+b.l("             ")+"\n   Inverted: "+z.l("             ")+"\n   Expected: "+V.ax().l("             ")+"\n   Gotten:   "+x.l("             ")+"\n","error_log")
a.m()
a.m()}w=b.D(0,z)
if(!w.n(0,V.ax())){a.j("Unexpected result from Matrix4*Matrix4.inverse(): \n   Matrix:   "+b.l("             ")+"\n   Inverted: "+z.l("             ")+"\n   Expected: "+V.ax().l("             ")+"\n   Gotten:   "+w.l("             ")+"\n","error_log")
a.m()
a.m()}},
o:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
z=new V.c_(c,d,e,f)
y=new V.c_(g,h,i,j)
x=b.aH(z)
a.j("Checking Matrix4.transPnt4: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+z.h(0)+"\n"),"info_log")
if(!x.n(0,y)){a.j("Unexpected result from Matrix4.transPnt4: "+("\n   Expected: "+y.h(0))+("\n   Gotten:   "+x.h(0)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("   Result:   "+x.h(0)+"\n\n","info_log")},
a2:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=new V.co(g,h,i,j)
y=new V.co(b.a*c+b.b*d+b.c*e+b.d*f,b.e*c+b.f*d+b.r*e+b.x*f,b.y*c+b.z*d+b.Q*e+b.ch*f,b.cx*c+b.cy*d+b.db*e+b.dx*f)
a.j("Checking Matrix4.transVec4: \n   Matrix:   "+b.l("             ")+("\n   Vector:   "+new V.co(c,d,e,f).h(0)+"\n"),"info_log")
if(!y.n(0,z)){a.j("Unexpected result from Matrix4.transVec4: "+("\n   Expected: "+z.h(0))+("\n   Gotten:   "+y.h(0)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("   Result:   "+y.h(0)+"\n\n","info_log")},
aP:function(a,b,c,d,e,f,g,h){var z,y
z=new V.u(f,g,h)
y=new V.u(b.a*c+b.b*d+b.c*e+b.d,b.e*c+b.f*d+b.r*e+b.x,b.y*c+b.z*d+b.Q*e+b.ch)
a.j("Checking Matrix4.transPnt3: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+new V.u(c,d,e).h(0)+"\n"),"info_log")
if(!y.n(0,z)){a.j("Unexpected result from Matrix4.transPnt3: "+("\n   Expected: "+z.h(0))+("\n   Gotten:   "+y.h(0)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("   Result:   "+y.h(0)+"\n\n","info_log")},
aR:function(a,b,c,d,e,f,g,h){var z,y
z=new V.ac(f,g,h)
y=new V.ac(b.a*c+b.b*d+b.c*e,b.e*c+b.f*d+b.r*e,b.y*c+b.z*d+b.Q*e)
a.j("Checking Matrix4.transVec3: \n   Matrix:   "+b.l("             ")+("\n   Vector:   "+new V.ac(c,d,e).h(0)+"\n"),"info_log")
if(!y.n(0,z)){a.j("Unexpected result from Matrix4.transVec3: "+("\n   Expected: "+z.h(0))+("\n   Gotten:   "+y.h(0)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("   Result:   "+y.h(0)+"\n\n","info_log")},
cw:function(a,b,c,d,e,f){var z,y
z=new V.P(e,f)
y=new V.P(b.a*c+b.b*d+b.d,b.e*c+b.f*d+b.x)
a.j("Checking Matrix4.transPnt2: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+new V.P(c,d).h(0)+"\n"),"info_log")
if(!y.n(0,z)){a.j("Unexpected result from Matrix4.transPnt2: "+("\n   Expected: "+z.h(0))+("\n   Gotten:   "+y.h(0)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("   Result:   "+y.h(0)+"\n\n","info_log")},
cz:function(a,b,c,d,e,f){var z,y
z=new V.ab(e,f)
y=new V.ab(b.a*c+b.b*d,b.e*c+b.f*d)
a.j("Checking Matrix4.transVec2: \n   Matrix:   "+b.l("             ")+("\n   Point:    "+new V.ab(c,d).h(0)+"\n"),"info_log")
if(!y.n(0,z)){a.j("Unexpected result from Matrix4.transVec2: "+("\n   Expected: "+z.h(0))+("\n   Gotten:   "+y.h(0)+"\n\n"),"error_log")
a.m()
a.m()}else a.j("   Result:   "+y.h(0)+"\n\n","info_log")},
l6:function(a){a.q(0,"Region2 Point Expand Test",new M.l7())},
bG:function(a,b,c,d,e,f,g,h){var z,y,x,w,v,u,t
z=new V.P(c,d)
y=b.c
x=b.a
if(c<x){y+=x-c
x=c}else if(c>x+y)y=c-x
w=b.d
v=b.b
if(d<v){w+=v-d
v=d}else if(d>v+w)w=d-v
u=new V.cW(x,v,y,w)
t=V.bw(e,f,g,h)
if(!u.n(0,t)){a.j("Unexpected result from expand:\n"+("   Original: "+b.h(0)+"\n")+("   Point:    "+z.h(0)+"\n")+("   Expected: "+t.h(0)+"\n")+("   Result:   "+u.h(0)+"\n"),"error_log")
a.m()}else a.j(b.h(0)+" + "+z.h(0)+" => "+u.h(0)+"\n","info_log")
return u},
l8:function(a){a.q(0,"Region3 Point Expand Test",new M.l9())},
bH:function(a,b,c,d,e,f,g,h,i,j,k){var z,y,x,w,v,u,t,s,r
z=new V.u(c,d,e)
y=b.d
x=b.a
if(c<x){y+=x-c
x=c}else if(c>x+y)y=c-x
w=b.e
v=b.b
if(d<v){w+=v-d
v=d}else if(d>v+w)w=d-v
u=b.f
t=b.c
if(e<t){u+=t-e
t=e}else if(e>t+u)u=e-t
s=new V.cX(x,v,t,y,w,u)
r=V.cj(f,g,h,i,j,k)
if(!s.n(0,r)){a.j("Unexpected result from expand:\n"+("   Original: "+b.h(0)+"\n")+("   Point:    "+z.h(0)+"\n")+("   Expected: "+r.h(0)+"\n")+("   Result:   "+s.h(0)+"\n"),"error_log")
a.m()}else a.j("["+b.h(0)+"] + ["+z.h(0)+"] => ["+s.h(0)+"]\n","info_log")
return s},
la:function(a){a.q(0,"Matrix4 Point Transposition Test",new M.lb())},
lK:function(a2,a3,a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.G(a5,"$ish",[M.Y],"$ash")
z=new F.e6()
y=new F.iG(z)
y.b=!1
y.c=H.k([],[F.ex])
z.a=y
y=new F.i7(z)
x=[F.hF]
y.b=H.k([],x)
z.b=y
y=new F.i6(z)
w=[F.hg]
y.b=H.k([],w)
z.c=y
y=new F.i5(z)
v=[F.fW]
y.b=H.k([],v)
z.d=y
z.e=null
for(u=0;u<15;++u){y=z.a
t=a5[u].a
y.toString
s=new F.ex()
r=new F.iJ(s)
r.b=H.k([],x)
s.b=r
r=new F.iI(s)
r.b=H.k([],w)
r.c=H.k([],w)
s.c=r
r=new F.iH(s)
r.b=H.k([],v)
r.c=H.k([],v)
r.d=H.k([],v)
s.d=r
q=$.$get$ey()
s.e=0
r=$.$get$af()
s.f=(q.a&r.a)!==0?t:null
$.$get$ae().a
s.r=null
$.$get$ad().a
s.x=null
$.$get$a4().a
s.y=null
$.$get$ar().a
s.z=null
$.$get$ez().a
s.Q=null
$.$get$aj().a
s.ch=0
$.$get$ai().a
s.cx=null
y.i(0,s)}p=new E.aK()
p.a=""
p.b=!0
y=E.aK
x=O.dq(y)
p.y=x
x.ba(p.gdi(),p.gdk())
p.z=null
p.Q=null
p.ch=null
p.cx=null
p.cy=null
p.db=null
p.dx=null
p.dy=null
p.fr=null
p.fx=null
p.sbb(0,null)
p.sao(null)
p.sbb(0,z)
p.sao(U.dt(a3))
o=new P.c0("")
n=new O.fK(o)
n.b=H.k([],[V.u])
m=new M.fT()
y=O.dq(y)
m.d=y
y.ba(m.gcn(),m.gco())
m.e=null
m.f=null
m.r=null
m.x=null
l=new X.hD()
l.c=1.0471975511965976
l.d=0.1
l.e=2000
l.sao(null)
y=l.c
if(!$.l.$2(y,1.0471975511965976)){k=l.c
l.c=1.0471975511965976
y=new D.aC("fov",k,1.0471975511965976,l,[P.Q])
y.b=!0
l.aj(y)}y=l.d
if(!$.l.$2(y,0.1)){k=l.d
l.d=0.1
y=new D.aC("near",k,0.1,l,[P.Q])
y.b=!0
l.aj(y)}y=l.e
if(!$.l.$2(y,2000)){k=l.e
l.e=2000
y=new D.aC("far",k,2000,l,[P.Q])
y.b=!0
l.aj(y)}y=m.a
if(y!==l){if(y!=null)y.gC().N(0,m.ga_())
k=m.a
m.a=l
l.gC().i(0,m.ga_())
y=new D.aC("camera",k,m.a,m,[X.dn])
y.b=!0
m.aa(y)}j=new X.fY()
y=new V.dr(0,0,0,1)
j.a=y
j.b=!0
j.c=2000
j.d=!0
j.e=0
j.f=!1
y=V.bw(0,0,1,1)
j.r=y
y=m.b
if(y!==j){if(y!=null)y.gC().N(0,m.ga_())
k=m.b
m.b=j
j.gC().i(0,m.ga_())
y=new D.aC("target",k,m.b,m,[X.ec])
y.b=!0
m.aa(y)}m.sbJ(null)
m.sbJ(n)
y=m.d
x=H.t(y,0)
H.v(p,x)
x=[x]
if(y.cD(H.k([p],x))){w=y.a
i=w.length
C.a.i(w,p)
y.cl(i,H.k([p],x))}m.a.sao(U.dt(a4))
y=document
h=y.createElement("canvas")
g=new E.it()
f=P.hj(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.e,null)
e=C.h.b8(h,"webgl",f)
e=H.n(e==null?C.h.b8(h,"experimental-webgl",f):e,"$ise4")
if(e==null)H.aY(P.bR("Failed to get the rendering context for WebGL."))
g.b=h
g.a=h
g.c=e
g.e=E.hV(e,h)
x=new T.is(e)
x.b=H.a6(e.getParameter(3379))
x.c=H.a6(e.getParameter(34076))
x.d=0
x.e=0
g.f=x
x=new X.iD(h)
w=new X.hf()
w.c=new X.br(!1,!1,!1)
w.d=P.bX(null,null,null,P.K)
x.b=w
w=new X.hu(x)
w.f=0
w.r=new V.P(0,0)
w.x=new V.P(0,0)
w.Q=1
w.ch=1
x.c=w
w=new X.hl(x)
w.r=0
w.x=new V.P(0,0)
w.Q=1
w.ch=1
w.cx=1
w.cy=1
x.d=w
w=new X.ix(x)
w.e=0
w.f=new V.P(0,0)
w.r=new V.P(0,0)
x.e=w
x.f=!1
x.r=!1
x.x=!1
w=H.k([],[[P.ea,P.a]])
x.z=w
v=W.an
t={func:1,ret:-1,args:[v]}
C.a.i(w,W.S(y,"contextmenu",H.j(x.gcp(),t),!1,v))
w=x.z
r=W.a7
d={func:1,ret:-1,args:[r]};(w&&C.a).i(w,W.S(h,"focus",H.j(x.gcs(),d),!1,r))
w=x.z;(w&&C.a).i(w,W.S(h,"blur",H.j(x.gcm(),d),!1,r))
w=x.z
c=W.bp
b={func:1,ret:-1,args:[c]};(w&&C.a).i(w,W.S(y,"keyup",H.j(x.gcu(),b),!1,c))
w=x.z;(w&&C.a).i(w,W.S(y,"keydown",H.j(x.gct(),b),!1,c))
c=x.z;(c&&C.a).i(c,W.S(h,"mousedown",H.j(x.gcw(),t),!1,v))
c=x.z;(c&&C.a).i(c,W.S(h,"mouseup",H.j(x.gcA(),t),!1,v))
c=x.z;(c&&C.a).i(c,W.S(h,"mousemove",H.j(x.gcz(),t),!1,v))
c=x.z
b=W.bE;(c&&C.a).i(c,W.S(h,H.z(W.fR(h)),H.j(x.gcB(),{func:1,ret:-1,args:[b]}),!1,b))
b=x.z;(b&&C.a).i(b,W.S(y,"mousemove",H.j(x.gcq(),t),!1,v))
b=x.z;(b&&C.a).i(b,W.S(y,"mouseup",H.j(x.gcr(),t),!1,v))
v=x.z;(v&&C.a).i(v,W.S(y,"pointerlockchange",H.j(x.gcC(),d),!1,r))
r=x.z
d=W.b9
y={func:1,ret:-1,args:[d]};(r&&C.a).i(r,W.S(h,"touchstart",H.j(x.gcG(),y),!1,d))
r=x.z;(r&&C.a).i(r,W.S(h,"touchend",H.j(x.gcE(),y),!1,d))
r=x.z;(r&&C.a).i(r,W.S(h,"touchmove",H.j(x.gcF(),y),!1,d))
g.r=x
g.Q=!0
g.ch=!1
g.cx=new P.aw(Date.now(),!1)
g.cy=0
g.bq()
if(!g.Q){g.Q=!1
g.bf()}y=g.d
if(y!==m){if(y!=null)y.gC().N(0,g.gbe())
g.d=m
m.gC().i(0,g.gbe())
g.bf()}g.bG()
y=o.a
a2.j(y.charCodeAt(0)==0?y:y,"info_log")
if(n.b.length!==15){for(a="",u=0;y=n.b,u<y.length;++u)a+="\n   "+y[u].R(1,3)
for(a0="",u=0;u<15;++u)a0+="\n   "+a5[u].b.R(1,3)
a2.j("Unexpected number of results from debugging technique: "+("\n   Expected: "+a0)+("\n   Gotten:   "+a+"\n\n"),"error_log")
a2.m()
a2.m()}else for(u=0;y=n.b,x=y.length,u<x;++u){if(u>=15)return H.f(a5,u)
a1=a5[u].b
if(u>=x)return H.f(y,u)
a=y[u]
if(!a1.n(0,a)){a2.j("Unexpected result from debugging technique at "+u+": "+("\n   Expected: "+a1.h(0))+("\n   Gotten:   "+H.d(a.a)+", "+H.d(a.b)+", "+H.d(a.c)+"\n\n"),"error_log")
if(!a2.y){a2.y=!0
a2.b.className="test_body body_shown"
a2.T(0)}}}},
f6:function(){var z,y,x,w,v,u,t
z=document
y=z.createElement("div")
x=new M.iq(y)
x.c=new P.h0(C.x)
w=z.createElement("div")
x.b=w
y.appendChild(w)
v=z.createElement("div")
v.className="log_checkboxes"
x.ax(v,"Information","info_log")
x.ax(v,"Notice","notice_log")
x.ax(v,"Warning","warning_log")
x.ax(v,"Error","error_log")
y.appendChild(v)
x.d=new P.aw(Date.now(),!1)
x.e=H.k([],[M.ef])
x.f=0
x.r=0
x.x=""
M.km(x)
M.lc(x)
M.kp(x)
M.kz(x)
M.kP(x)
M.l6(x)
M.l8(x)
M.la(x)
w=V.i9("Unit-tests",!1)
u=z.createElement("div")
u.appendChild(y)
t=z.createElement("div")
z=t.style
z.display="block"
z.clear="both"
u.appendChild(t)
w.a.appendChild(u)
w.cT(H.k(["\xab[Back to Tests|../]"],[P.e]))},
lc:function(a){a.q(0,"VertexTypes and Groups",new M.ld())
a.q(0,"VertexTypes from Type Groups 1",new M.le())
a.q(0,"VertexType from Type Groups 2",new M.lf())},
a5:function(a,b,c,d,e,f){var z,y,x,w
z=J.H(b)
a.j("Checking vertex type "+z.h(b)+":\n","info_log")
y=z.h(b)
if(y!==c){a.j("Error: Got the wrong name for a vertex type:\n","error_log")
a.m()
a.j("   Gotten:   "+y+"\n","error_log")
a.m()
a.j("   Expected: "+c+"\n","error_log")
a.m()}x=b.a
if(x!==d){a.j("Error: Got the wrong value for a vertex type:\n","error_log")
a.m()
a.j("   Gotten:   "+x+"\n","error_log")
a.m()
a.j("   Expected: "+d+"\n","error_log")
a.m()}w=(x&$.$get$af().a)!==0?1:0
if((x&$.$get$ae().a)!==0)++w
if((x&$.$get$ad().a)!==0)++w
if((x&$.$get$a4().a)!==0)++w
if((x&$.$get$ar().a)!==0)++w
if((x&$.$get$aq().a)!==0)++w
if((x&$.$get$as().a)!==0)++w
if((x&$.$get$aj().a)!==0)++w
if((x&$.$get$ai().a)!==0)++w
if(w!==e){a.j("Error: Got the wrong count for a vertex type:\n","error_log")
a.m()
a.j("   Gotten:   "+w+"\n","error_log")
a.m()
a.j("   Expected: "+e+"\n","error_log")
a.m()}w=(x&$.$get$af().a)!==0?3:0
if((x&$.$get$ae().a)!==0)w+=3
if((x&$.$get$ad().a)!==0)w+=3
if((x&$.$get$a4().a)!==0)w+=2
if((x&$.$get$ar().a)!==0)w+=3
if((x&$.$get$aq().a)!==0)w+=3
if((x&$.$get$as().a)!==0)w+=4
if((x&$.$get$aj().a)!==0)++w
if((x&$.$get$ai().a)!==0)w+=4
if(w!==f){a.j("Error: Got the wrong size for a vertex type:\n","error_log")
a.m()
a.j("   Gotten:   "+w+"\n","error_log")
a.m()
a.j("   Expected: "+f+"\n","error_log")
a.m()}},
X:function(a,b,c,d,e,f){var z,y,x,w,v,u
a.j("Checking vertex type "+J.aJ(c)+" in "+b.h(0)+":\n","info_log")
z=(b.a&c.a)!==0
if(z!==d){a.j("Error: Got the wrong result from has for a vertex type in a group:\n","error_log")
a.m()
a.j("   Gotten:   "+z+"\n","error_log")
a.m()
a.j("   Expected: "+d+"\n","error_log")
a.m()}y=b.d8(0,c)
if(y!==e){a.j("Error: Got the wrong index for a vertex type in a group:\n","error_log")
a.m()
a.j("   Gotten:   "+y+"\n","error_log")
a.m()
a.j("   Expected: "+e+"\n","error_log")
a.m()}x=d?c:$.$get$cp()
w=b.cV(e)
v=J.H(w)
if(!v.n(w,x)){a.j("Error: Got the wrong index for a vertex type in a group:\n","error_log")
a.m()
a.j("   Gotten:   "+v.h(w)+"\n","error_log")
a.m()
a.j("   Expected: "+J.aJ(x)+"\n","error_log")
a.m()}u=b.dh(0,c)
if(u!==f){a.j("Error: Got the wrong offset for a vertex type in a group:\n","error_log")
a.m()
a.j("   Gotten:   "+u+"\n","error_log")
a.m()
a.j("   Expected: "+f+"\n","error_log")
a.m()}},
kn:{"^":"b:0;",
$1:function(a){var z,y,x,w,v
z=new Uint8Array(1000)
for(y=z.length,x=0;x<100;++x){for(w=0;w<1000;++w){if(w>=y)return H.f(z,w)
z[w]=0}for(v=0;v<100;++v)for(w=0;w<1000;++w){if(w>=y)return H.f(z,w)
z[w]=z[w]+1}}a.j(H.d(z),"info_log")}},
ko:{"^":"b:0;",
$1:function(a){var z,y,x,w
z=P.hk(1000,0,!1,P.K)
for(y=0;y<100;++y){for(x=0;x<1000;++x)C.a.K(z,x,0)
for(w=0;w<100;++w)for(x=0;x<1000;++x){if(x>=z.length)return H.f(z,x)
C.a.K(z,x,z[x]+1)}}a.j(H.d(z),"info_log")}},
kq:{"^":"b:0;",
$1:function(a){var z=new V.M(2,3,4,5)
M.T(a,z,"[2.000, 3.000,"," 4.000, 5.000]")
M.C(a,z,0,0,0,0)
M.C(a,z,1,0,2,4)
M.C(a,z,0,1,3,5)
M.C(a,z,1,1,5,9)}},
kr:{"^":"b:0;",
$1:function(a){var z=new V.M(2,3,4,5)
M.T(a,z,"[2.000, 3.000,"," 4.000, 5.000]")
M.cx(a,z,0,0,0,0)
M.cx(a,z,1,0,2,4)
M.cx(a,z,0,1,3,5)
M.cx(a,z,1,1,5,9)}},
ks:{"^":"b:0;",
$1:function(a){var z=new V.M(1,0,0,1)
M.T(a,z,"[1.000, 0.000,"," 0.000, 1.000]")
M.C(a,z,0,0,0,0)
M.C(a,z,1,0,1,0)
M.C(a,z,-1,0,-1,0)
M.C(a,z,1,1,1,1)
M.C(a,z,-1,-1,-1,-1)
M.C(a,z,0,1,0,1)
M.C(a,z,0,-1,0,-1)
M.C(a,z,2.3,-4.2,2.3,-4.2)
M.C(a,z,-1.5,7.3,-1.5,7.3)}},
kt:{"^":"b:0;",
$1:function(a){var z=new V.M(2,0,0,3)
M.T(a,z,"[2.000, 0.000,"," 0.000, 3.000]")
M.C(a,z,0,0,0,0)
M.C(a,z,1,0,2,0)
M.C(a,z,-1,0,-2,0)
M.C(a,z,1,1,2,3)
M.C(a,z,-1,-1,-2,-3)
M.C(a,z,0,1,0,3)
M.C(a,z,0,-1,0,-3)
M.C(a,z,2.3,-4.2,4.6,-12.6)
M.C(a,z,-1.5,7.3,-3,21.9)}},
ku:{"^":"b:0;",
$1:function(a){var z=V.b2(0.7853981633974483)
M.T(a,z,"[0.707, -0.707,"," 0.707,  0.707]")
M.C(a,z,0,0,0,0)
M.C(a,z,1,0,0.70710678118,0.70710678118)
M.C(a,z,0.70710678118,0.70710678118,0,1)
M.C(a,z,0,1,-0.70710678118,0.70710678118)
M.C(a,z,-0.70710678118,0.70710678118,-1,0)
M.C(a,z,-1,0,-0.70710678118,-0.70710678118)
M.C(a,z,-0.70710678118,-0.70710678118,0,-1)
M.C(a,z,0,-1,0.70710678118,-0.70710678118)
M.C(a,z,0.70710678118,-0.70710678118,1,0)}},
kv:{"^":"b:0;",
$1:function(a){M.T(a,V.b2(-0.7853981633974483),"[ 0.707, 0.707,"," -0.707, 0.707]")
M.T(a,V.b2(1.5707963267948966),"[0.000, -1.000,"," 1.000,  0.000]")
M.T(a,V.b2(-3.141592653589793),"[-1.000,  0.000,","  0.000, -1.000]")
M.T(a,V.b2(3.141592653589793),"[-1.000,  0.000,","  0.000, -1.000]")
M.T(a,V.b2(1.1780972450961724),"[0.383, -0.924,"," 0.924,  0.383]")}},
kw:{"^":"b:0;",
$1:function(a){var z,y
z=new V.M(1,2,3,4)
M.T(a,z,"[1.000, 2.000,"," 3.000, 4.000]")
M.T(a,V.hp(z.ar(0),!1),"[1.000, 2.000,"," 3.000, 4.000]")
M.T(a,new V.M(1,3,2,4),"[1.000, 3.000,"," 2.000, 4.000]")
M.E(a,1,1,"m11")
M.E(a,2,2,"m21")
M.E(a,3,3,"m12")
M.E(a,4,4,"m22")
M.T(a,new V.M(1,2,4,5),"[1.000, 2.000,"," 4.000, 5.000]")
y=V.F(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.T(a,new V.M(y.a,y.b,y.e,y.f),"[1.000, 2.000,"," 5.000, 6.000]")}},
kx:{"^":"b:0;",
$1:function(a){M.d7(a,new V.M(1,0,0,1),"[1.000, 0.000,"," 0.000, 1.000]")
M.d7(a,new V.M(2,0,0,3),"[0.500, 0.000,"," 0.000, 0.333]")
M.d7(a,V.b2(0.7853981633974483),"[ 0.707, 0.707,"," -0.707, 0.707]")
M.T(a,new V.M(0,0,0,0).P(0),"[1.000, 0.000,"," 0.000, 1.000]")}},
ky:{"^":"b:0;",
$1:function(a){M.T(a,new V.M(1,2,3,4).D(0,new V.M(5,6,7,8)),"[19.000, 22.000,"," 43.000, 50.000]")
M.T(a,new V.M(5,6,7,8).D(0,new V.M(1,2,3,4)),"[23.000, 34.000,"," 31.000, 46.000]")}},
kA:{"^":"b:0;",
$1:function(a){var z=new V.D(1,2,3,4,5,6,7,8,9)
M.A(a,z,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.q(a,z,0,0,0,0,0,0)
M.q(a,z,1,0,0,1,4,7)
M.q(a,z,0,1,0,2,5,8)
M.q(a,z,0,0,1,3,6,9)
M.q(a,z,1,1,0,3,9,15)
M.q(a,z,1,0,1,4,10,16)
M.q(a,z,0,1,1,5,11,17)
M.q(a,z,1,1,1,6,15,24)}},
kB:{"^":"b:0;",
$1:function(a){var z=new V.D(1,2,3,4,5,6,7,8,9)
M.A(a,z,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.aQ(a,z,0,0,0,0,0,0)
M.aQ(a,z,1,0,0,1,4,7)
M.aQ(a,z,0,1,0,2,5,8)
M.aQ(a,z,0,0,1,3,6,9)
M.aQ(a,z,1,1,0,3,9,15)
M.aQ(a,z,1,0,1,4,10,16)
M.aQ(a,z,0,1,1,5,11,17)
M.aQ(a,z,1,1,1,6,15,24)}},
kC:{"^":"b:0;",
$1:function(a){var z=new V.D(1,0,0,0,1,0,0,0,1)
M.A(a,z,"[1.000, 0.000, 0.000,"," 0.000, 1.000, 0.000,"," 0.000, 0.000, 1.000]")
M.q(a,z,0,0,0,0,0,0)
M.q(a,z,1,0,0,1,0,0)
M.q(a,z,0,1,0,0,1,0)
M.q(a,z,0,0,1,0,0,1)
M.q(a,z,1,0,1,1,0,1)
M.q(a,z,-1,0,1,-1,0,1)
M.q(a,z,1,1,1,1,1,1)
M.q(a,z,-1,-1,-1,-1,-1,-1)
M.q(a,z,0,1,1,0,1,1)
M.q(a,z,0,-1,-1,0,-1,-1)
M.q(a,z,2.3,-4.2,-0.2,2.3,-4.2,-0.2)
M.q(a,z,-1.5,7.3,4.8,-1.5,7.3,4.8)}},
kH:{"^":"b:0;",
$1:function(a){var z=new V.D(2,0,0,0,3,0,0,0,4)
M.A(a,z,"[2.000, 0.000, 0.000,"," 0.000, 3.000, 0.000,"," 0.000, 0.000, 4.000]")
M.q(a,z,0,0,0,0,0,0)
M.q(a,z,1,1,1,2,3,4)
M.q(a,z,-1,-1,-1,-2,-3,-4)
M.q(a,z,2.3,-4.2,-0.2,4.6,-12.6,-0.8)
M.q(a,z,-1.5,7.3,4.8,-3,21.9,19.2)}},
kI:{"^":"b:0;",
$1:function(a){var z=V.b3(0.7853981633974483)
M.A(a,z,"[1.000, 0.000,  0.000,"," 0.000, 0.707, -0.707,"," 0.000, 0.707,  0.707]")
M.q(a,z,1,0,0,1,0,0)
M.q(a,z,2,1,0,2,0.70710678118,0.70710678118)
M.q(a,z,3,0.70710678118,0.70710678118,3,0,1)
M.q(a,z,4,0,1,4,-0.70710678118,0.70710678118)
M.q(a,z,5,-0.70710678118,0.70710678118,5,-1,0)
M.q(a,z,6,-1,0,6,-0.70710678118,-0.70710678118)
M.q(a,z,7,-0.70710678118,-0.70710678118,7,0,-1)
M.q(a,z,8,0,-1,8,0.70710678118,-0.70710678118)
M.q(a,z,9,0.70710678118,-0.70710678118,9,1,0)}},
kJ:{"^":"b:0;",
$1:function(a){M.A(a,V.b3(-0.7853981633974483),"[1.000,  0.000, 0.000,"," 0.000,  0.707, 0.707,"," 0.000, -0.707, 0.707]")
M.A(a,V.b3(1.5707963267948966),"[1.000, 0.000,  0.000,"," 0.000, 0.000, -1.000,"," 0.000, 1.000,  0.000]")
M.A(a,V.b3(-3.141592653589793),"[1.000,  0.000,  0.000,"," 0.000, -1.000,  0.000,"," 0.000,  0.000, -1.000]")
M.A(a,V.b3(3.141592653589793),"[1.000,  0.000,  0.000,"," 0.000, -1.000,  0.000,"," 0.000,  0.000, -1.000]")
M.A(a,V.b3(1.1780972450961724),"[1.000, 0.000,  0.000,"," 0.000, 0.383, -0.924,"," 0.000, 0.924,  0.383]")}},
kK:{"^":"b:0;",
$1:function(a){var z=V.b4(0.7853981633974483)
M.A(a,z,"[0.707, 0.000, -0.707,"," 0.000, 1.000,  0.000,"," 0.707, 0.000,  0.707]")
M.q(a,z,0,1,0,0,1,0)
M.q(a,z,1,2,0,0.70710678118,2,0.70710678118)
M.q(a,z,0.70710678118,3,0.70710678118,0,3,1)
M.q(a,z,0,4,1,-0.70710678118,4,0.70710678118)
M.q(a,z,-0.70710678118,5,0.70710678118,-1,5,0)
M.q(a,z,-1,6,0,-0.70710678118,6,-0.70710678118)
M.q(a,z,-0.70710678118,7,-0.70710678118,0,7,-1)
M.q(a,z,0,8,-1,0.70710678118,8,-0.70710678118)
M.q(a,z,0.70710678118,9,-0.70710678118,1,9,0)}},
kL:{"^":"b:0;",
$1:function(a){M.A(a,V.b4(-0.7853981633974483),"[ 0.707, 0.000, 0.707,","  0.000, 1.000, 0.000,"," -0.707, 0.000, 0.707]")
M.A(a,V.b4(1.5707963267948966),"[0.000, 0.000, -1.000,"," 0.000, 1.000,  0.000,"," 1.000, 0.000,  0.000]")
M.A(a,V.b4(-3.141592653589793),"[-1.000, 0.000,  0.000,","  0.000, 1.000,  0.000,","  0.000, 0.000, -1.000]")
M.A(a,V.b4(3.141592653589793),"[-1.000, 0.000,  0.000,","  0.000, 1.000,  0.000,","  0.000, 0.000, -1.000]")
M.A(a,V.b4(1.1780972450961724),"[0.383, 0.000, -0.924,"," 0.000, 1.000,  0.000,"," 0.924, 0.000,  0.383]")}},
kM:{"^":"b:0;",
$1:function(a){var z=V.b5(0.7853981633974483)
M.A(a,z,"[0.707, -0.707, 0.000,"," 0.707,  0.707, 0.000,"," 0.000,  0.000, 1.000]")
M.q(a,z,0,0,1,0,0,1)
M.q(a,z,1,0,2,0.70710678118,0.70710678118,2)
M.q(a,z,0.70710678118,0.70710678118,3,0,1,3)
M.q(a,z,0,1,4,-0.70710678118,0.70710678118,4)
M.q(a,z,-0.70710678118,0.70710678118,5,-1,0,5)
M.q(a,z,-1,0,6,-0.70710678118,-0.70710678118,6)
M.q(a,z,-0.70710678118,-0.70710678118,7,0,-1,7)
M.q(a,z,0,-1,8,0.70710678118,-0.70710678118,8)
M.q(a,z,0.70710678118,-0.70710678118,9,1,0,9)}},
kN:{"^":"b:0;",
$1:function(a){M.A(a,V.b5(-0.7853981633974483),"[ 0.707, 0.707, 0.000,"," -0.707, 0.707, 0.000,","  0.000, 0.000, 1.000]")
M.A(a,V.b5(1.5707963267948966),"[0.000, -1.000, 0.000,"," 1.000,  0.000, 0.000,"," 0.000,  0.000, 1.000]")
M.A(a,V.b5(-3.141592653589793),"[-1.000,  0.000, 0.000,","  0.000, -1.000, 0.000,","  0.000,  0.000, 1.000]")
M.A(a,V.b5(3.141592653589793),"[-1.000,  0.000, 0.000,","  0.000, -1.000, 0.000,","  0.000,  0.000, 1.000]")
M.A(a,V.b5(1.1780972450961724),"[0.383, -0.924, 0.000,"," 0.924,  0.383, 0.000,"," 0.000,  0.000, 1.000]")}},
kO:{"^":"b:0;",
$1:function(a){var z,y
z=new V.D(1,2,3,4,5,6,7,8,9)
M.A(a,z,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.A(a,V.hq(z.ar(0),!1),"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.A(a,new V.D(1,4,7,2,5,8,3,6,9),"[1.000, 4.000, 7.000,"," 2.000, 5.000, 8.000,"," 3.000, 6.000, 9.000]")
M.E(a,1,1,"m11")
M.E(a,2,2,"m21")
M.E(a,3,3,"m31")
M.E(a,4,4,"m12")
M.E(a,5,5,"m22")
M.E(a,6,6,"m32")
M.E(a,7,7,"m13")
M.E(a,8,8,"m23")
M.E(a,9,9,"m33")
M.A(a,new V.D(1,0,1.2,0,1,3.4,0,0,1),"[1.000, 0.000, 1.200,"," 0.000, 1.000, 3.400,"," 0.000, 0.000, 1.000]")
M.A(a,new V.D(1,2,0,3,4,0,0,0,1),"[1.000, 2.000, 0.000,"," 3.000, 4.000, 0.000,"," 0.000, 0.000, 1.000]")
y=V.F(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.A(a,new V.D(y.a,y.b,y.c,y.e,y.f,y.r,y.y,y.z,y.Q),"[1.000,  2.000,  3.000,"," 5.000,  6.000,  7.000,"," 9.000, 10.000, 11.000]")}},
kD:{"^":"b:0;",
$1:function(a){M.c4(a,new V.D(1,0,0,0,1,0,0,0,1),"[1.000, 0.000, 0.000,"," 0.000, 1.000, 0.000,"," 0.000, 0.000, 1.000]")
M.c4(a,new V.D(2,0,0,0,3,0,0,0,4),"[0.500, 0.000, 0.000,"," 0.000, 0.333, 0.000,"," 0.000, 0.000, 0.250]")
M.c4(a,V.b3(0.7853981633974483),"[1.000,  0.000, 0.000,"," 0.000,  0.707, 0.707,"," 0.000, -0.707, 0.707]")
M.c4(a,V.b4(0.7853981633974483),"[ 0.707, 0.000, 0.707,","  0.000, 1.000, 0.000,"," -0.707, 0.000, 0.707]")
M.c4(a,V.b5(0.7853981633974483),"[ 0.707, 0.707, 0.000,"," -0.707, 0.707, 0.000,","  0.000, 0.000, 1.000]")
M.A(a,new V.D(0,0,0,0,0,0,0,0,0).P(0),"[1.000, 0.000, 0.000,"," 0.000, 1.000, 0.000,"," 0.000, 0.000, 1.000]")}},
kE:{"^":"b:0;",
$1:function(a){M.A(a,new V.D(1,2,3,4,5,6,7,8,9).D(0,new V.D(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9)),"[ 3.000,  3.600,  4.200,","  6.600,  8.100,  9.600,"," 10.200, 12.600, 15.000]")
M.A(a,new V.D(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9).D(0,new V.D(1,2,3,4,5,6,7,8,9)),"[ 3.000,  3.600,  4.200,","  6.600,  8.100,  9.600,"," 10.200, 12.600, 15.000]")}},
kF:{"^":"b:0;",
$1:function(a){var z=new V.D(1,2,3,4,5,6,7,8,9)
M.A(a,z,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.cv(a,z,0,0,3,6)
M.cv(a,z,1,0,4,10)
M.cv(a,z,0,1,5,11)
M.cv(a,z,1,1,6,15)}},
kG:{"^":"b:0;",
$1:function(a){var z=new V.D(1,2,3,4,5,6,7,8,9)
M.A(a,z,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.cy(a,z,0,0,0,0)
M.cy(a,z,1,0,1,4)
M.cy(a,z,0,1,2,5)
M.cy(a,z,1,1,3,9)}},
kQ:{"^":"b:0;",
$1:function(a){var z=V.F(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.x(a,z,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.o(a,z,0,0,0,0,0,0,0,0)
M.o(a,z,1,0,0,0,1,5,9,13)
M.o(a,z,0,1,0,0,2,6,10,14)
M.o(a,z,1,1,0,0,3,11,19,27)
M.o(a,z,0,0,1,0,3,7,11,15)
M.o(a,z,1,0,1,0,4,12,20,28)
M.o(a,z,0,1,1,0,5,13,21,29)
M.o(a,z,1,1,1,0,6,18,30,42)
M.o(a,z,0,0,0,1,4,8,12,16)
M.o(a,z,1,0,0,1,5,13,21,29)
M.o(a,z,0,1,0,1,6,14,22,30)
M.o(a,z,1,1,0,1,7,19,31,43)
M.o(a,z,0,0,1,1,7,15,23,31)
M.o(a,z,1,0,1,1,8,20,32,44)
M.o(a,z,0,1,1,1,9,21,33,45)
M.o(a,z,1,1,1,1,10,26,42,58)}},
kR:{"^":"b:0;",
$1:function(a){var z=V.F(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.x(a,z,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.a2(a,z,0,0,0,0,0,0,0,0)
M.a2(a,z,1,0,0,0,1,5,9,13)
M.a2(a,z,0,1,0,0,2,6,10,14)
M.a2(a,z,1,1,0,0,3,11,19,27)
M.a2(a,z,0,0,1,0,3,7,11,15)
M.a2(a,z,1,0,1,0,4,12,20,28)
M.a2(a,z,0,1,1,0,5,13,21,29)
M.a2(a,z,1,1,1,0,6,18,30,42)
M.a2(a,z,0,0,0,1,4,8,12,16)
M.a2(a,z,1,0,0,1,5,13,21,29)
M.a2(a,z,0,1,0,1,6,14,22,30)
M.a2(a,z,1,1,0,1,7,19,31,43)
M.a2(a,z,0,0,1,1,7,15,23,31)
M.a2(a,z,1,0,1,1,8,20,32,44)
M.a2(a,z,0,1,1,1,9,21,33,45)
M.a2(a,z,1,1,1,1,10,26,42,58)}},
kS:{"^":"b:0;",
$1:function(a){var z=V.ax()
M.x(a,z,"[1.000, 0.000, 0.000, 0.000,"," 0.000, 1.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.o(a,z,0,0,0,0,0,0,0,0)
M.o(a,z,1,0,0,0,1,0,0,0)
M.o(a,z,0,1,0,0,0,1,0,0)
M.o(a,z,0,0,1,0,0,0,1,0)
M.o(a,z,1,0,1,0,1,0,1,0)
M.o(a,z,0,1,0,1,0,1,0,1)
M.o(a,z,1,1,1,1,1,1,1,1)
M.o(a,z,-1,0,1,0,-1,0,1,0)
M.o(a,z,1,1,1,0,1,1,1,0)
M.o(a,z,-1,-1,-1,-1,-1,-1,-1,-1)
M.o(a,z,2.3,-4.2,-0.2,3.3,2.3,-4.2,-0.2,3.3)
M.o(a,z,-1.5,7.3,4.8,-9.1,-1.5,7.3,4.8,-9.1)}},
kZ:{"^":"b:0;",
$1:function(a){var z=V.dU(2,3,4,5)
M.x(a,z,"[2.000, 0.000, 0.000, 0.000,"," 0.000, 3.000, 0.000, 0.000,"," 0.000, 0.000, 4.000, 0.000,"," 0.000, 0.000, 0.000, 5.000]")
M.o(a,z,0,0,0,0,0,0,0,0)
M.o(a,z,1,1,1,1,2,3,4,5)
M.o(a,z,-1,-1,-1,-1,-2,-3,-4,-5)
M.o(a,z,2.3,-4.2,-0.2,3.3,4.6,-12.6,-0.8,16.5)
M.o(a,z,-1.5,7.3,4.8,-9.1,-3,21.9,19.2,-45.5)}},
l_:{"^":"b:0;",
$1:function(a){var z=V.b6(0.7853981633974483)
M.x(a,z,"[1.000, 0.000,  0.000, 0.000,"," 0.000, 0.707, -0.707, 0.000,"," 0.000, 0.707,  0.707, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.o(a,z,1,0,0,9,1,0,0,9)
M.o(a,z,2,1,0,8,2,0.70710678118,0.70710678118,8)
M.o(a,z,3,0.70710678118,0.70710678118,7,3,0,1,7)
M.o(a,z,4,0,1,6,4,-0.70710678118,0.70710678118,6)
M.o(a,z,5,-0.70710678118,0.70710678118,5,5,-1,0,5)
M.o(a,z,6,-1,0,4,6,-0.70710678118,-0.70710678118,4)
M.o(a,z,7,-0.70710678118,-0.70710678118,3,7,0,-1,3)
M.o(a,z,8,0,-1,2,8,0.70710678118,-0.70710678118,2)
M.o(a,z,9,0.70710678118,-0.70710678118,1,9,1,0,1)}},
l0:{"^":"b:0;",
$1:function(a){M.x(a,V.b6(-0.7853981633974483),"[1.000,  0.000, 0.000, 0.000,"," 0.000,  0.707, 0.707, 0.000,"," 0.000, -0.707, 0.707, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.x(a,V.b6(1.5707963267948966),"[1.000, 0.000,  0.000, 0.000,"," 0.000, 0.000, -1.000, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.x(a,V.b6(-3.141592653589793),"[1.000,  0.000,  0.000, 0.000,"," 0.000, -1.000,  0.000, 0.000,"," 0.000,  0.000, -1.000, 0.000,"," 0.000,  0.000,  0.000, 1.000]")
M.x(a,V.b6(3.141592653589793),"[1.000,  0.000,  0.000, 0.000,"," 0.000, -1.000,  0.000, 0.000,"," 0.000,  0.000, -1.000, 0.000,"," 0.000,  0.000,  0.000, 1.000]")
M.x(a,V.b6(1.1780972450961724),"[1.000, 0.000,  0.000, 0.000,"," 0.000, 0.383, -0.924, 0.000,"," 0.000, 0.924,  0.383, 0.000,"," 0.000, 0.000,  0.000, 1.000]")}},
l1:{"^":"b:0;",
$1:function(a){var z=V.b7(0.7853981633974483)
M.x(a,z,"[0.707, 0.000, -0.707, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 0.707, 0.000,  0.707, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.o(a,z,0,1,0,9,0,1,0,9)
M.o(a,z,1,2,0,8,0.70710678118,2,0.70710678118,8)
M.o(a,z,0.70710678118,3,0.70710678118,7,0,3,1,7)
M.o(a,z,0,4,1,6,-0.70710678118,4,0.70710678118,6)
M.o(a,z,-0.70710678118,5,0.70710678118,5,-1,5,0,5)
M.o(a,z,-1,6,0,4,-0.70710678118,6,-0.70710678118,4)
M.o(a,z,-0.70710678118,7,-0.70710678118,3,0,7,-1,3)
M.o(a,z,0,8,-1,2,0.70710678118,8,-0.70710678118,2)
M.o(a,z,0.70710678118,9,-0.70710678118,1,1,9,0,1)}},
l2:{"^":"b:0;",
$1:function(a){M.x(a,V.b7(-0.7853981633974483),"[ 0.707, 0.000, 0.707, 0.000,","  0.000, 1.000, 0.000, 0.000,"," -0.707, 0.000, 0.707, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.x(a,V.b7(1.5707963267948966),"[0.000, 0.000, -1.000, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 1.000, 0.000,  0.000, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.x(a,V.b7(-3.141592653589793),"[-1.000, 0.000,  0.000, 0.000,","  0.000, 1.000,  0.000, 0.000,","  0.000, 0.000, -1.000, 0.000,","  0.000, 0.000,  0.000, 1.000]")
M.x(a,V.b7(3.141592653589793),"[-1.000, 0.000,  0.000, 0.000,","  0.000, 1.000,  0.000, 0.000,","  0.000, 0.000, -1.000, 0.000,","  0.000, 0.000,  0.000, 1.000]")
M.x(a,V.b7(1.1780972450961724),"[0.383, 0.000, -0.924, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 0.924, 0.000,  0.383, 0.000,"," 0.000, 0.000,  0.000, 1.000]")}},
l3:{"^":"b:0;",
$1:function(a){var z=V.b8(0.7853981633974483)
M.x(a,z,"[0.707, -0.707, 0.000, 0.000,"," 0.707,  0.707, 0.000, 0.000,"," 0.000,  0.000, 1.000, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.o(a,z,0,0,1,9,0,0,1,9)
M.o(a,z,1,0,2,8,0.70710678118,0.70710678118,2,8)
M.o(a,z,0.70710678118,0.70710678118,3,7,0,1,3,7)
M.o(a,z,0,1,4,6,-0.70710678118,0.70710678118,4,6)
M.o(a,z,-0.70710678118,0.70710678118,5,5,-1,0,5,5)
M.o(a,z,-1,0,6,4,-0.70710678118,-0.70710678118,6,4)
M.o(a,z,-0.70710678118,-0.70710678118,7,3,0,-1,7,3)
M.o(a,z,0,-1,8,2,0.70710678118,-0.70710678118,8,2)
M.o(a,z,0.70710678118,-0.70710678118,9,1,1,0,9,1)}},
l4:{"^":"b:0;",
$1:function(a){M.x(a,V.b8(-0.7853981633974483),"[ 0.707, 0.707, 0.000, 0.000,"," -0.707, 0.707, 0.000, 0.000,","  0.000, 0.000, 1.000, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.x(a,V.b8(1.5707963267948966),"[0.000, -1.000, 0.000, 0.000,"," 1.000,  0.000, 0.000, 0.000,"," 0.000,  0.000, 1.000, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.x(a,V.b8(-3.141592653589793),"[-1.000,  0.000, 0.000, 0.000,","  0.000, -1.000, 0.000, 0.000,","  0.000,  0.000, 1.000, 0.000,","  0.000,  0.000, 0.000, 1.000]")
M.x(a,V.b8(3.141592653589793),"[-1.000,  0.000, 0.000, 0.000,","  0.000, -1.000, 0.000, 0.000,","  0.000,  0.000, 1.000, 0.000,","  0.000,  0.000, 0.000, 1.000]")
M.x(a,V.b8(1.1780972450961724),"[0.383, -0.924, 0.000, 0.000,"," 0.924,  0.383, 0.000, 0.000,"," 0.000,  0.000, 1.000, 0.000,"," 0.000,  0.000, 0.000, 1.000]")}},
l5:{"^":"b:0;",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=V.F(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.x(a,z,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.x(a,V.hr(z.ar(0),!1),"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
y=z.a
x=z.e
w=z.y
v=z.cx
u=z.b
t=z.f
s=z.z
r=z.cy
q=z.c
p=z.r
o=z.Q
n=z.db
m=z.d
l=z.x
k=z.ch
j=z.dx
M.x(a,V.F(y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j),"[1.000, 5.000,  9.000, 13.000,"," 2.000, 6.000, 10.000, 14.000,"," 3.000, 7.000, 11.000, 15.000,"," 4.000, 8.000, 12.000, 16.000]")
M.E(a,y,1,"m11")
M.E(a,u,2,"m21")
M.E(a,q,3,"m31")
M.E(a,m,4,"m41")
M.E(a,x,5,"m12")
M.E(a,t,6,"m22")
M.E(a,p,7,"m32")
M.E(a,l,8,"m42")
M.E(a,w,9,"m13")
M.E(a,s,10,"m23")
M.E(a,o,11,"m33")
M.E(a,k,12,"m43")
M.E(a,v,13,"m14")
M.E(a,r,14,"m24")
M.E(a,n,15,"m34")
M.E(a,j,16,"m44")
M.x(a,V.dV(1.2,3.4,5.6),"[1.000, 0.000, 0.000, 1.200,"," 0.000, 1.000, 0.000, 3.400,"," 0.000, 0.000, 1.000, 5.600,"," 0.000, 0.000, 0.000, 1.000]")
M.x(a,V.F(1,2,0,0,3,4,0,0,0,0,1,0,0,0,0,1),"[1.000, 2.000, 0.000, 0.000,"," 3.000, 4.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.x(a,V.F(1,2,3,0,4,5,6,0,7,8,9,0,0,0,0,1),"[1.000, 2.000, 3.000, 0.000,"," 4.000, 5.000, 6.000, 0.000,"," 7.000, 8.000, 9.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")}},
kT:{"^":"b:0;",
$1:function(a){M.c5(a,V.ax(),"[1.000, 0.000, 0.000, 0.000,"," 0.000, 1.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.c5(a,V.dU(2,3,4,1),"[0.500, 0.000, 0.000, 0.000,"," 0.000, 0.333, 0.000, 0.000,"," 0.000, 0.000, 0.250, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.c5(a,V.b6(0.7853981633974483),"[1.000,  0.000, 0.000, 0.000,"," 0.000,  0.707, 0.707, 0.000,"," 0.000, -0.707, 0.707, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.c5(a,V.b7(0.7853981633974483),"[ 0.707, 0.000, 0.707, 0.000,","  0.000, 1.000, 0.000, 0.000,"," -0.707, 0.000, 0.707, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.c5(a,V.b8(0.7853981633974483),"[ 0.707, 0.707, 0.000, 0.000,"," -0.707, 0.707, 0.000, 0.000,","  0.000, 0.000, 1.000, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.x(a,V.F(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0).P(0),"[1.000, 0.000, 0.000, 0.000,"," 0.000, 1.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")}},
kU:{"^":"b:0;",
$1:function(a){M.x(a,V.F(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6).D(0,V.F(1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6)),"[ 1.900,  2.000,  2.100,  2.200,","  4.620,  4.880,  5.140,  5.400,","  7.340,  7.760,  8.180,  8.600,"," 10.060, 10.640, 11.220, 11.800]")
M.x(a,V.F(1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6).D(0,V.F(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6)),"[3.700, 4.200, 4.700,  5.200,"," 4.820, 5.480, 6.140,  6.800,"," 5.940, 6.760, 7.580,  8.400,"," 7.060, 8.040, 9.020, 10.000]")}},
kV:{"^":"b:0;",
$1:function(a){var z=V.F(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.x(a,z,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.aP(a,z,0,0,0,4,8,12)
M.aP(a,z,1,0,0,5,13,21)
M.aP(a,z,0,1,0,6,14,22)
M.aP(a,z,1,1,0,7,19,31)
M.aP(a,z,0,0,1,7,15,23)
M.aP(a,z,1,0,1,8,20,32)
M.aP(a,z,0,1,1,9,21,33)
M.aP(a,z,1,1,1,10,26,42)}},
kW:{"^":"b:0;",
$1:function(a){var z=V.F(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.x(a,z,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.aR(a,z,0,0,0,0,0,0)
M.aR(a,z,1,0,0,1,5,9)
M.aR(a,z,0,1,0,2,6,10)
M.aR(a,z,1,1,0,3,11,19)
M.aR(a,z,0,0,1,3,7,11)
M.aR(a,z,1,0,1,4,12,20)
M.aR(a,z,0,1,1,5,13,21)
M.aR(a,z,1,1,1,6,18,30)}},
kX:{"^":"b:0;",
$1:function(a){var z=V.F(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.x(a,z,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.cw(a,z,0,0,4,8)
M.cw(a,z,1,0,5,13)
M.cw(a,z,0,1,6,14)
M.cw(a,z,1,1,7,19)}},
kY:{"^":"b:0;",
$1:function(a){var z=V.F(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.x(a,z,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.cz(a,z,0,0,0,0)
M.cz(a,z,1,0,1,5)
M.cz(a,z,0,1,2,6)
M.cz(a,z,1,1,3,11)}},
l7:{"^":"b:0;",
$1:function(a){var z,y
z=V.bw(0,0,0,0)
M.bG(a,z,0,0,0,0,0,0)
M.bG(a,z,1,2,0,0,1,2)
M.bG(a,z,-1,-2,-1,-2,1,2)
M.bG(a,V.bw(0,0,1,2),-1,-2,-1,-2,2,4)
y=V.bw(-1,-2,2,4)
M.bG(a,y,1,1,-1,-2,2,4)
M.bG(a,y,4,4,-1,-2,5,6)}},
l9:{"^":"b:0;",
$1:function(a){var z,y
z=V.cj(0,0,0,0,0,0)
M.bH(a,z,0,0,0,0,0,0,0,0,0)
M.bH(a,z,1,2,3,0,0,0,1,2,3)
M.bH(a,z,-1,-2,-3,-1,-2,-3,1,2,3)
M.bH(a,V.cj(0,0,0,1,2,3),-1,-2,-3,-1,-2,-3,2,4,6)
y=V.cj(-1,-2,-3,2,4,6)
M.bH(a,y,1,1,1,-1,-2,-3,2,4,6)
M.bH(a,y,4,4,4,-1,-2,-3,5,6,7)}},
lb:{"^":"b:0;",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=V.ax()
y=V.dV(0,0,-5)
x=new M.Y()
x.a=new V.u(0,0,0)
x.b=new V.u(0,0,1.020051002550127)
w=new M.Y()
w.a=new V.u(1,0,0)
w.b=new V.u(-0.3464101615137755,0,1.020051002550127)
v=new M.Y()
v.a=new V.u(-1,0,0)
v.b=new V.u(0.3464101615137755,0,1.020051002550127)
u=new M.Y()
u.a=new V.u(0,1,0)
u.b=new V.u(0,-0.3464101615137755,1.020051002550127)
t=new M.Y()
t.a=new V.u(0,-1,0)
t.b=new V.u(0,0.3464101615137755,1.020051002550127)
s=new M.Y()
s.a=new V.u(0,0,1)
s.b=new V.u(0,0,1.016717502541794)
r=new M.Y()
r.a=new V.u(0,0,-1)
r.b=new V.u(0,0,1.025051252562628)
q=new M.Y()
q.a=new V.u(1,1,1)
q.b=new V.u(-0.2886751345948129,-0.2886751345948129,1.016717502541794)
p=new M.Y()
p.a=new V.u(1,-1,1)
p.b=new V.u(-0.2886751345948129,0.2886751345948129,1.016717502541794)
o=new M.Y()
o.a=new V.u(1,1,-1)
o.b=new V.u(-0.4330127018922194,-0.4330127018922194,1.025051252562628)
n=new M.Y()
n.a=new V.u(1,-1,-1)
n.b=new V.u(-0.4330127018922194,0.4330127018922194,1.025051252562628)
m=new M.Y()
m.a=new V.u(-1,1,1)
m.b=new V.u(0.2886751345948129,-0.2886751345948129,1.016717502541794)
l=new M.Y()
l.a=new V.u(-1,-1,1)
l.b=new V.u(0.2886751345948129,0.2886751345948129,1.016717502541794)
k=new M.Y()
k.a=new V.u(-1,1,-1)
k.b=new V.u(0.4330127018922194,-0.4330127018922194,1.025051252562628)
j=new M.Y()
j.a=new V.u(-1,-1,-1)
j.b=new V.u(0.4330127018922194,0.4330127018922194,1.025051252562628)
M.lK(a,z,y,H.k([x,w,v,u,t,s,r,q,p,o,n,m,l,k,j],[M.Y]))}},
Y:{"^":"a;0a,0b"},
cl:{"^":"a;"},
ef:{"^":"cl;a,0b,0c,0d,0e,f,r,0x,0y,0z",
e4:[function(a){var z=this.b
if(z.className!=="test_body body_hidden")z.className="test_body body_hidden"
else z.className="test_body body_shown"},"$1","gcQ",4,0,35],
T:function(a){var z,y,x,w
if(this.d!=null){z=this.e
if(z==null)z=new P.aw(Date.now(),!1)
y="("+C.c.aG(C.e.ae(P.cK(0,0,0,z.a-this.d.a,0,0).a,1000)*0.001,2)+"s)"}else y=""
if(!this.x){x=this.c
x.className="test_header queued"
x.textContent="Queued: "+this.r+" "+y}else if(this.y){x=this.c
x.className="test_header failed"
x.textContent="Failed: "+this.r+" "+y}else{x=this.z
w=this.c
if(x){w.className="test_header passed"
w.textContent="Passed: "+this.r+" "+y}else{w.className="test_header running"
w.textContent="Running: "+this.r+" "+y}}this.a.T(0)},
eb:[function(){var z,y,x,w,v
z=P.fZ(new M.il(this),null).b6(new M.im(this),null)
y=new M.io(this)
x=H.t(z,0)
w=$.J
v=new P.au(0,w,[x])
if(w!==C.d)y=P.eT(y,w)
z.aL(new P.aN(v,2,null,y,[x,x]))
v.b6(new M.ip(this),null)},"$0","gbH",0,0,2],
j:function(a,b){var z,y,x,w
z=this.a.c.ce(a,0,a.length)
y=z==null?a:z
y=H.cF(y," ","&nbsp;")
x='</dir><br class="'+b+'"><dir class="'+b+'">'
w=H.cF(y,"\n",x)
y=this.b
C.w.bR(y,J.fd(y.innerHTML,'<dir class="'+b+'">'+w+"</dir>"))},
m:function(){if(!this.y){this.y=!0
this.b.className="test_body body_shown"
this.T(0)}}},
il:{"^":"b:1;a",
$0:function(){var z=this.a
z.x=!0
z.T(0)}},
im:{"^":"b:5;a",
$1:function(a){var z=this.a
z.d=new P.aw(Date.now(),!1)
z.f.$1(z)
z.e=new P.aw(Date.now(),!1)}},
io:{"^":"b:10;a",
$2:function(a,b){var z=this.a
z.e=new P.aw(Date.now(),!1)
z.j("\nException: "+H.d(a),"error_log")
z.m()
z.j("\nStack: "+H.d(b),"warning_log")}},
ip:{"^":"b:5;a",
$1:function(a){var z,y,x,w
z=this.a
z.z=!0
y=z.a
x=y.f
if(typeof x!=="number")return x.F()
y.f=x+1
if(z.y){x=y.r
if(typeof x!=="number")return x.F()
y.r=x+1}y.T(0)
x=y.f
y=y.e
w=y.length
if(typeof x!=="number")return x.a3()
if(x<w)P.c1(C.f,y[x].gbH())
z.T(0)}},
iq:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x",
ax:function(a,b,c){var z,y,x
z=W.h3("checkbox")
z.className="log_checkbox"
z.checked=!0
y=W.a7
W.S(z,"change",H.j(new M.ir(c,z),{func:1,ret:-1,args:[y]}),!1,y)
a.appendChild(z)
x=document.createElement("span")
x.textContent=b
a.appendChild(x)},
T:function(a){var z,y,x,w,v
z=C.c.aG(C.e.ae(P.cK(0,0,0,Date.now()-this.d.a,0,0).a,1000)*0.001,2)
y=this.e.length
x=this.f
if(typeof x!=="number")return H.aD(x)
if(y<=x){x=this.r
if(typeof x!=="number")return x.bO()
w=this.b
if(x>0){w.className="top_header failed"
if(x===1)w.textContent="Failed 1 Test ("+z+"s)"
else w.textContent="Failed "+x+" Tests ("+z+"s)"}else{w.textContent="Tests Passed ("+z+"s)"
w.className="top_header passed"}}else{v=C.z.aG(x/y*100,2)
this.b.textContent="Running Tests: "+H.d(this.f)+"/"+y+" ("+v+"%)"
x=this.r
if(typeof x!=="number")return x.bO()
w=this.b
if(x>0){w.textContent=H.d(w.textContent)+" - "+H.d(this.r)+" failed)"
w.className="topHeader failed"}else w.className="topHeader running"}},
q:function(a,b,c){var z,y,x,w
H.j(c,{func:1,ret:-1,args:[M.cl]})
if(b.length<=0)b=H.d(c)
if(!C.b.bc(b,this.x))return
z=this.e
y=new M.ef(this,c,b)
x=document
w=x.createElement("div")
w.className="test_body body_hidden"
y.b=w
x=x.createElement("div")
x.className="running top_header"
w=W.an
W.S(x,"click",H.j(y.gcQ(),{func:1,ret:-1,args:[w]}),!1,w)
y.c=x
w=this.a
w.appendChild(x)
w.appendChild(y.b)
y.d=null
y.e=null
y.x=!1
y.y=!1
y.z=!1
y.T(0);(z&&C.a).i(z,y)
this.T(0)
z=this.f
if(typeof z!=="number")return z.F()
y=this.e
x=y.length
if(z+1===x){if(z>=x)return H.f(y,z)
P.c1(C.f,y[z].gbH())}}},
ir:{"^":"b:20;a,b",
$1:function(a){var z,y,x,w,v
z=document
y="."+this.a
x=W.am
H.lg(x,x,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
y=z.querySelectorAll(y)
w=this.b.checked?"block":"none"
for(v=0;v<y.length;++v){z=H.n(y[v],"$isam").style
z.display=w}}},
ld:{"^":"b:0;",
$1:function(a){var z,y
M.a5(a,$.$get$cp(),"None",0,0,0)
M.a5(a,$.$get$af(),"Pos",1,1,3)
M.a5(a,$.$get$ae(),"Norm",2,1,3)
M.a5(a,$.$get$ad(),"Binm",4,1,3)
M.a5(a,$.$get$a4(),"Txt2D",8,1,2)
M.a5(a,$.$get$ar(),"TxtCube",16,1,3)
M.a5(a,$.$get$aq(),"Clr3",32,1,3)
M.a5(a,$.$get$as(),"Clr4",64,1,4)
M.a5(a,$.$get$aj(),"Weight",128,1,1)
M.a5(a,$.$get$ai(),"Bending",256,1,4)
z=$.$get$af()
y=$.$get$ae()
M.a5(a,new Z.aG(z.a|y.a),"Pos|Norm",3,2,6)
y=$.$get$af()
z=$.$get$a4()
M.a5(a,new Z.aG(y.a|z.a),"Pos|Txt2D",9,2,5)
z=$.$get$af()
y=$.$get$ae()
M.a5(a,new Z.aG(z.a|y.a|$.$get$ad().a|$.$get$a4().a|$.$get$aq().a),"Pos|Norm|Binm|Txt2D|Clr3",47,5,14)
y=$.$get$a4()
z=$.$get$aj()
M.a5(a,new Z.aG(y.a|z.a),"Txt2D|Weight",136,2,3)
z=$.$get$ar()
y=$.$get$ai()
M.a5(a,new Z.aG(z.a|y.a),"TxtCube|Bending",272,2,7)}},
le:{"^":"b:0;",
$1:function(a){var z,y,x
z=$.$get$af()
y=$.$get$ae()
x=new Z.aG(z.a|y.a|$.$get$ad().a|$.$get$a4().a|$.$get$ar().a|$.$get$aq().a)
M.X(a,x,z,!0,0,0)
M.X(a,x,$.$get$ae(),!0,1,3)
M.X(a,x,$.$get$ad(),!0,2,6)
M.X(a,x,$.$get$a4(),!0,3,9)
M.X(a,x,$.$get$ar(),!0,4,11)
M.X(a,x,$.$get$aq(),!0,5,14)
M.X(a,x,$.$get$as(),!1,-1,-1)
M.X(a,x,$.$get$aj(),!1,-1,-1)
M.X(a,x,$.$get$ai(),!1,-1,-1)}},
lf:{"^":"b:0;",
$1:function(a){var z,y,x
z=$.$get$af()
y=$.$get$ad()
x=new Z.aG(z.a|y.a|$.$get$as().a|$.$get$aj().a|$.$get$ai().a)
M.X(a,x,z,!0,0,0)
M.X(a,x,$.$get$ae(),!1,-1,-1)
M.X(a,x,$.$get$ad(),!0,1,3)
M.X(a,x,$.$get$a4(),!1,-1,-1)
M.X(a,x,$.$get$aq(),!1,-1,-1)
M.X(a,x,$.$get$as(),!0,2,6)
M.X(a,x,$.$get$aj(),!0,3,10)
M.X(a,x,$.$get$ai(),!0,4,11)}}},1]]
setupProgram(dart,0,0)
J.H=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dL.prototype
return J.dK.prototype}if(typeof a=="string")return J.bV.prototype
if(a==null)return J.hb.prototype
if(typeof a=="boolean")return J.ha.prototype
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.lq=function(a){if(typeof a=="number")return J.bU.prototype
if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.cB=function(a){if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.cC=function(a){if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.lr=function(a){if(typeof a=="number")return J.bU.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cn.prototype
return a}
J.f1=function(a){if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cn.prototype
return a}
J.aT=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.fd=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.lq(a).F(a,b)}
J.I=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).n(a,b)}
J.fe=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lr(a).a3(a,b)}
J.ff=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lC(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cB(a).p(a,b)}
J.fg=function(a,b,c,d){return J.aT(a).bu(a,b,c,d)}
J.cG=function(a,b,c){return J.cB(a).d_(a,b,c)}
J.fh=function(a,b){return J.cC(a).v(a,b)}
J.fi=function(a,b){return J.cC(a).G(a,b)}
J.fj=function(a){return J.aT(a).gcW(a)}
J.aZ=function(a){return J.H(a).gH(a)}
J.bg=function(a){return J.cC(a).gM(a)}
J.bN=function(a){return J.cB(a).gk(a)}
J.fk=function(a){return J.aT(a).gb4(a)}
J.fl=function(a){return J.aT(a).gdI(a)}
J.fm=function(a,b,c){return J.f1(a).de(a,b,c)}
J.dh=function(a){return J.cC(a).dB(a)}
J.fn=function(a,b){return J.aT(a).sI(a,b)}
J.fo=function(a){return J.f1(a).dJ(a)}
J.aJ=function(a){return J.H(a).h(a)}
I.aW=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cb.prototype
C.h=W.fx.prototype
C.w=W.dC.prototype
C.y=J.m.prototype
C.a=J.aL.prototype
C.z=J.dK.prototype
C.e=J.dL.prototype
C.c=J.bU.prototype
C.b=J.bV.prototype
C.G=J.bo.prototype
C.L=H.hx.prototype
C.M=W.hy.prototype
C.o=J.hE.prototype
C.p=W.ik.prototype
C.k=J.cn.prototype
C.r=W.bE.prototype
C.t=W.iL.prototype
C.u=new P.hC()
C.v=new P.iF()
C.d=new P.jy()
C.f=new P.bP(0)
C.x=new P.h1("element",!0,!1,!1,!1)
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.m=function(hooks) { return hooks; }

C.C=function(getTagFallback) {
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
C.D=function() {
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
C.E=function(hooks) {
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
C.F=function(hooks) {
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
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=H.k(I.aW(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.I=H.k(I.aW(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.J=H.k(I.aW([]),[P.e])
C.K=H.k(I.aW([0,0,65498,45055,65535,34815,65534,18431]),[P.K])
C.i=H.k(I.aW(["bind","if","ref","repeat","syntax"]),[P.e])
C.j=H.k(I.aW(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.q=new P.iE(!1)
$.av=0
$.bi=null
$.dk=null
$.d6=!1
$.f3=null
$.eY=null
$.fa=null
$.cA=null
$.cD=null
$.de=null
$.ba=null
$.bI=null
$.bJ=null
$.d8=!1
$.J=C.d
$.aF=null
$.cL=null
$.dF=null
$.dE=null
$.dA=null
$.dz=null
$.dy=null
$.dx=null
$.l=V.ho()
$.e0=null
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
I.$lazy(y,x,w)}})(["dw","$get$dw",function(){return H.f2("_$dart_dartClosure")},"cO","$get$cO",function(){return H.f2("_$dart_js")},"ej","$get$ej",function(){return H.az(H.cm({
toString:function(){return"$receiver$"}}))},"ek","$get$ek",function(){return H.az(H.cm({$method$:null,
toString:function(){return"$receiver$"}}))},"el","$get$el",function(){return H.az(H.cm(null))},"em","$get$em",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eq","$get$eq",function(){return H.az(H.cm(void 0))},"er","$get$er",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eo","$get$eo",function(){return H.az(H.ep(null))},"en","$get$en",function(){return H.az(function(){try{null.$method$}catch(z){return z.message}}())},"et","$get$et",function(){return H.az(H.ep(void 0))},"es","$get$es",function(){return H.az(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d3","$get$d3",function(){return P.iM()},"bK","$get$bK",function(){return[]},"eR","$get$eR",function(){return P.hT("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"du","$get$du",function(){return{}},"eF","$get$eF",function(){return P.dQ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"d4","$get$d4",function(){return P.dP(P.e,P.bS)},"cp","$get$cp",function(){return Z.ap(0)},"ey","$get$ey",function(){return Z.ap(511)},"af","$get$af",function(){return Z.ap(1)},"ae","$get$ae",function(){return Z.ap(2)},"ad","$get$ad",function(){return Z.ap(4)},"a4","$get$a4",function(){return Z.ap(8)},"ar","$get$ar",function(){return Z.ap(16)},"aq","$get$aq",function(){return Z.ap(32)},"as","$get$as",function(){return Z.ap(64)},"ez","$get$ez",function(){return Z.ap(96)},"aj","$get$aj",function(){return Z.ap(128)},"ai","$get$ai",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.N,args:[M.cl]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,opt:[D.L]},{func:1,ret:-1,args:[W.an]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[P.K,[P.i,E.aK]]},{func:1,ret:P.Q},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.N,args:[D.L]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.e,args:[P.K]},{func:1,args:[,]},{func:1,ret:W.y},{func:1,ret:P.U,args:[W.ay]},{func:1,ret:P.U,args:[P.e]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.N,args:[W.a7]},{func:1,ret:P.U,args:[W.am,P.e,P.e,W.c3]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,args:[P.e]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.y,W.y]},{func:1,args:[,P.e]},{func:1,ret:-1,args:[P.a],opt:[P.ao]},{func:1,ret:P.U,args:[P.Q,P.Q]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.L]}]},{func:1,ret:P.N,args:[,],opt:[,]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:P.N,args:[P.V]},{func:1,ret:[P.au,,],args:[,]},{func:1,ret:-1,args:[,]},{func:1,ret:P.U,args:[W.y]}]
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
if(x==y)H.lL(d||a)
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
Isolate.aW=a.aW
Isolate.dc=a.dc
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
if(typeof dartMainRunner==="function")dartMainRunner(M.f6,[])
else M.f6([])})})()
//# sourceMappingURL=test.dart.js.map
