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
var d=supportsDirectProtoAccess&&b2!="a"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="n"){processStatics(init.statics[b2]=b3.n,b4)
delete b3.n}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.de"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.de"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.de(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.df=function(){}
var dart=[["","",,H,{"^":"",m0:{"^":"a;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dl:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cz:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.di==null){H.lj()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.i(P.eR("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cQ()]
if(v!=null)return v
v=H.lo(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cQ(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
q:{"^":"a;",
q:function(a,b){return a===b},
gX:function(a){return H.bv(a)},
i:["e5",function(a){return"Instance of '"+H.b4(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ho:{"^":"q;",
i:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isa5:1},
dV:{"^":"q;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gX:function(a){return 0},
$isJ:1},
cR:{"^":"q;",
gX:function(a){return 0},
i:["e6",function(a){return String(a)}]},
i1:{"^":"cR;"},
cq:{"^":"cR;"},
bY:{"^":"cR;",
i:function(a){var z=a[$.$get$dF()]
if(z==null)return this.e6(a)
return"JavaScript function for "+H.k(J.a8(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscN:1},
b_:{"^":"q;$ti",
h:function(a,b){H.G(b,H.z(a,0))
if(!!a.fixed$length)H.p(P.ai("add"))
a.push(b)},
F:function(a,b){var z
if(!!a.fixed$length)H.p(P.ai("remove"))
for(z=0;z<a.length;++z)if(J.H(a[z],b)){a.splice(z,1)
return!0}return!1},
bZ:function(a,b){var z,y
H.u(b,"$isf",[H.z(a,0)],"$asf")
if(!!a.fixed$length)H.p(P.ai("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
N:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.i(P.bj(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a4(z,y,H.k(a[y]))
return z.join(b)},
hh:function(a){return this.B(a,"")},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bE:function(a,b,c){var z=a.length
if(b>z)throw H.i(P.an(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.i(P.an(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gck:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.i(H.hm())},
au:function(a,b){var z
for(z=0;z<a.length;++z)if(J.H(a[z],b))return!0
return!1},
i:function(a){return P.cO(a,"[","]")},
ga0:function(a){return new J.as(a,a.length,0,[H.z(a,0)])},
gX:function(a){return H.bv(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.ai("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.c8(b,"newLength",null))
if(b<0)throw H.i(P.an(b,0,null,"newLength",null))
a.length=b},
a4:function(a,b,c){H.S(b)
H.G(c,H.z(a,0))
if(!!a.immutable$list)H.p(P.ai("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(H.aU(a,b))
if(b>=a.length||b<0)throw H.i(H.aU(a,b))
a[b]=c},
$isf:1,
$ise:1,
n:{
hn:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.c8(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.an(a,0,4294967295,"length",null))
return J.dS(new Array(a),b)},
dS:function(a,b){return J.bq(H.c(a,[b]))},
bq:function(a){H.bR(a)
a.fixed$length=Array
return a}}},
m_:{"^":"b_;$ti"},
as:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.i(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bX:{"^":"q;",
ghg:function(a){return a===0?1/a<0:a<0},
hR:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.i(P.ai(""+a+".toInt()"))},
cg:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.i(P.ai(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.ai(""+a+".round()"))},
dV:function(a,b){var z
if(b>20)throw H.i(P.an(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghg(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.i(H.aO(b))
return a*b},
e1:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
e9:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d4(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.d4(a,b)},
d4:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.i(P.ai("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
bj:function(a,b){var z
if(a>0)z=this.fs(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fs:function(a,b){return b>31?0:a>>>b},
ak:function(a,b){if(typeof b!=="number")throw H.i(H.aO(b))
return a<b},
$isw:1,
$isY:1},
dU:{"^":"bX;",$isA:1},
dT:{"^":"bX;"},
ci:{"^":"q;",
c7:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(H.aU(a,b))
if(b<0)throw H.i(H.aU(a,b))
if(b>=a.length)H.p(H.aU(a,b))
return a.charCodeAt(b)},
bf:function(a,b){if(b>=a.length)throw H.i(H.aU(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.R(b)
if(typeof b!=="string")throw H.i(P.c8(b,null,null))
return a+b},
bF:function(a,b,c){H.S(c)
if(c==null)c=a.length
if(b<0)throw H.i(P.cm(b,null,null))
if(b>c)throw H.i(P.cm(b,null,null))
if(c>a.length)throw H.i(P.cm(c,null,null))
return a.substring(b,c)},
cD:function(a,b){return this.bF(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hw:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ah:function(a,b){return this.hw(a,b," ")},
h2:function(a,b,c){if(c>a.length)throw H.i(P.an(c,0,a.length,null,null))
return H.fx(a,b,c)},
i:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseb:1,
$iso:1}}],["","",,H,{"^":"",
hm:function(){return new P.iF("No element")},
a2:{"^":"jc;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.i.c7(this.a,b)},
$aseS:function(){return[P.A]},
$ast:function(){return[P.A]},
$asf:function(){return[P.A]},
$ase:function(){return[P.A]}},
h7:{"^":"f;"},
e_:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.c6(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.i(P.bj(z))
w=this.c
if(typeof x!=="number")return H.r(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
hF:{"^":"f;a,b,$ti",
ga0:function(a){return new H.hG(J.bT(this.a),this.b,this.$ti)},
gl:function(a){return J.bg(this.a)},
E:function(a,b){return this.b.$1(J.dp(this.a,b))},
$asf:function(a,b){return[b]}},
hG:{"^":"cP;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascP:function(a,b){return[b]}},
ju:{"^":"f;a,b,$ti",
ga0:function(a){return new H.jv(J.bT(this.a),this.b,this.$ti)}},
jv:{"^":"cP;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
cf:{"^":"a;$ti"},
eS:{"^":"a;$ti"},
jc:{"^":"cj+eS;"}}],["","",,H,{"^":"",
le:function(a){return init.types[H.S(a)]},
lm:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isD},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a8(a)
if(typeof z!=="string")throw H.i(H.aO(a))
return z},
bv:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b4:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.K(a).$iscq){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bf(w,0)===36)w=C.i.cD(w,1)
r=H.dj(H.bR(H.aV(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
ee:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ib:function(a){var z,y,x,w
z=H.c([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.i(H.aO(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bj(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.i(H.aO(w))}return H.ee(z)},
ef:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.i(H.aO(x))
if(x<0)throw H.i(H.aO(x))
if(x>65535)return H.ib(a)}return H.ee(a)},
ia:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bj(z,10))>>>0,56320|z&1023)}throw H.i(P.an(a,0,1114111,null,null))},
ad:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i9:function(a){return a.b?H.ad(a).getUTCFullYear()+0:H.ad(a).getFullYear()+0},
i7:function(a){return a.b?H.ad(a).getUTCMonth()+1:H.ad(a).getMonth()+1},
i3:function(a){return a.b?H.ad(a).getUTCDate()+0:H.ad(a).getDate()+0},
i4:function(a){return a.b?H.ad(a).getUTCHours()+0:H.ad(a).getHours()+0},
i6:function(a){return a.b?H.ad(a).getUTCMinutes()+0:H.ad(a).getMinutes()+0},
i8:function(a){return a.b?H.ad(a).getUTCSeconds()+0:H.ad(a).getSeconds()+0},
i5:function(a){return a.b?H.ad(a).getUTCMilliseconds()+0:H.ad(a).getMilliseconds()+0},
r:function(a){throw H.i(H.aO(a))},
h:function(a,b){if(a==null)J.bg(a)
throw H.i(H.aU(a,b))},
aU:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.S(J.bg(a))
if(!(b<0)){if(typeof z!=="number")return H.r(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.cm(b,"index",null)},
l9:function(a,b,c){if(a>c)return new P.cl(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cl(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
aO:function(a){return new P.aH(!0,a,null,null)},
l2:function(a){if(typeof a!=="number")throw H.i(H.aO(a))
return a},
i:function(a){var z
if(a==null)a=new P.ea()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fA})
z.name=""}else z.toString=H.fA
return z},
fA:function(){return J.a8(this.dartException)},
p:function(a){throw H.i(a)},
x:function(a){throw H.i(P.bj(a))},
aX:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lA(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bj(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cS(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e9(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ez()
u=$.$get$eA()
t=$.$get$eB()
s=$.$get$eC()
r=$.$get$eG()
q=$.$get$eH()
p=$.$get$eE()
$.$get$eD()
o=$.$get$eJ()
n=$.$get$eI()
m=v.ag(y)
if(m!=null)return z.$1(H.cS(H.R(y),m))
else{m=u.ag(y)
if(m!=null){m.method="call"
return z.$1(H.cS(H.R(y),m))}else{m=t.ag(y)
if(m==null){m=s.ag(y)
if(m==null){m=r.ag(y)
if(m==null){m=q.ag(y)
if(m==null){m=p.ag(y)
if(m==null){m=s.ag(y)
if(m==null){m=o.ag(y)
if(m==null){m=n.ag(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e9(H.R(y),m))}}return z.$1(new H.jb(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ej()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ej()
return a},
be:function(a){var z
if(a==null)return new H.f9(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f9(a)},
lb:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a4(0,a[y],a[x])}return b},
ll:function(a,b,c,d,e,f){H.j(a,"$iscN")
switch(H.S(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.n("Unsupported number of arguments for wrapped closure"))},
bc:function(a,b){var z
H.S(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ll)
a.$identity=z
return z},
fR:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$ise){z.$reflectionInfo=d
x=H.ie(z).r}else x=d
w=e?Object.create(new H.iG().constructor.prototype):Object.create(new H.cE(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.C()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dz(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.le,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.du:H.cF
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.i("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dz(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fO:function(a,b,c,d){var z=H.cF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dz:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fQ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fO(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.C()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bh
if(v==null){v=H.c9("self")
$.bh=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.C()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bh
if(v==null){v=H.c9("self")
$.bh=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
fP:function(a,b,c,d){var z,y
z=H.cF
y=H.du
switch(b?-1:a){case 0:throw H.i(H.ip("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fQ:function(a,b){var z,y,x,w,v,u,t,s
z=$.bh
if(z==null){z=H.c9("self")
$.bh=z}y=$.dt
if(y==null){y=H.c9("receiver")
$.dt=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fP(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.az
if(typeof y!=="number")return y.C()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.C()
$.az=y+1
return new Function(z+y+"}")()},
de:function(a,b,c,d,e,f,g){var z,y
z=J.bq(H.bR(b))
H.S(c)
y=!!J.K(d).$ise?J.bq(d):d
return H.fR(a,z,c,y,!!e,f,g)},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aF(a,"String"))},
lr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aF(a,"num"))},
fn:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aF(a,"bool"))},
S:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aF(a,"int"))},
fv:function(a,b){throw H.i(H.aF(a,H.R(b).substring(3)))},
lt:function(a,b){var z=J.c6(b)
throw H.i(H.fN(a,z.bF(b,3,z.gl(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.fv(a,b)},
b:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.lt(a,b)},
bR:function(a){if(a==null)return a
if(!!J.K(a).$ise)return a
throw H.i(H.aF(a,"List"))},
ln:function(a,b){if(a==null)return a
if(!!J.K(a).$ise)return a
if(J.K(a)[b])return a
H.fv(a,b)},
fo:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.S(z)]
else return a.$S()}return},
c5:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fo(J.K(a))
if(z==null)return!1
y=H.fr(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.da)return a
$.da=!0
try{if(H.c5(a,b))return a
z=H.c7(b)
y=H.aF(a,z)
throw H.i(y)}finally{$.da=!1}},
dg:function(a,b){if(a!=null&&!H.dd(a,b))H.p(H.aF(a,H.c7(b)))
return a},
fi:function(a){var z
if(a instanceof H.v){z=H.fo(J.K(a))
if(z!=null)return H.c7(z)
return"Closure"}return H.b4(a)},
lx:function(a){throw H.i(new P.fY(H.R(a)))},
fp:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aV:function(a){if(a==null)return
return a.$ti},
mO:function(a,b,c){return H.bf(a["$as"+H.k(c)],H.aV(b))},
bQ:function(a,b,c,d){var z
H.R(c)
H.S(d)
z=H.bf(a["$as"+H.k(c)],H.aV(b))
return z==null?null:z[d]},
aG:function(a,b,c){var z
H.R(b)
H.S(c)
z=H.bf(a["$as"+H.k(b)],H.aV(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.S(b)
z=H.aV(a)
return z==null?null:z[b]},
c7:function(a){var z=H.aW(a,null)
return z},
aW:function(a,b){var z,y
H.u(b,"$ise",[P.o],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dj(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.S(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.k(b[y])}if('func' in a)return H.kT(a,b)
if('futureOr' in a)return"FutureOr<"+H.aW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.u(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aW(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aW(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aW(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aW(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.la(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.R(z[l])
n=n+m+H.aW(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dj:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$ise",[P.o],"$ase")
if(a==null)return""
z=new P.c2("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aW(u,c)}v="<"+z.i(0)+">"
return v},
bf:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bP:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aV(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fl(H.bf(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.R(b)
H.bR(c)
H.R(d)
if(a==null)return a
z=H.bP(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dj(c,0,null)
throw H.i(H.aF(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fl:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
mM:function(a,b,c){return a.apply(b,H.bf(J.K(b)["$as"+H.k(c)],H.aV(b)))},
fs:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="J"||a===-1||a===-2||H.fs(z)}return!1},
dd:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="J"||b===-1||b===-2||H.fs(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dd(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c5(a,b)}y=J.K(a).constructor
x=H.aV(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ar(y,null,b,null)
return z},
G:function(a,b){if(a!=null&&!H.dd(a,b))throw H.i(H.aF(a,H.c7(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.fr(a,b,c,d)
if('func' in a)return c.builtin$cls==="cN"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"bn" in y.prototype))return!1
w=y.prototype["$as"+"bn"]
v=H.bf(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c7(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fl(H.bf(r,z),b,u,d)},
fr:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.lq(m,b,l,d)},
lq:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
mN:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
lo:function(a){var z,y,x,w,v,u
z=H.R($.fq.$1(a))
y=$.cx[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.R($.fk.$2(a,z))
if(z!=null){y=$.cx[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cB(x)
$.cx[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cA[z]=x
return x}if(v==="-"){u=H.cB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fu(a,x)
if(v==="*")throw H.i(P.eR(z))
if(init.leafTags[z]===true){u=H.cB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fu(a,x)},
fu:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dl(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cB:function(a){return J.dl(a,!1,null,!!a.$isD)},
lp:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cB(z)
else return J.dl(z,c,null,null)},
lj:function(){if(!0===$.di)return
$.di=!0
H.lk()},
lk:function(){var z,y,x,w,v,u,t,s
$.cx=Object.create(null)
$.cA=Object.create(null)
H.lf()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fw.$1(v)
if(u!=null){t=H.lp(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lf:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.bb(C.B,H.bb(C.G,H.bb(C.n,H.bb(C.n,H.bb(C.F,H.bb(C.C,H.bb(C.D(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fq=new H.lg(v)
$.fk=new H.lh(u)
$.fw=new H.li(t)},
bb:function(a,b){return a(b)||b},
fx:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fy:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
id:{"^":"a;a,b,c,d,e,f,r,0x",n:{
ie:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bq(z)
y=z[0]
x=z[1]
return new H.id(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j0:{"^":"a;a,b,c,d,e,f",
ag:function(a){var z,y,x
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
n:{
aE:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cp:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eF:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hZ:{"^":"Z;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
e9:function(a,b){return new H.hZ(a,b==null?null:b.method)}}},
hr:{"^":"Z;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
n:{
cS:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hr(a,y,z?null:b.receiver)}}},
jb:{"^":"Z;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lA:{"^":"v:13;a",
$1:function(a){if(!!J.K(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f9:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isav:1},
v:{"^":"a;",
i:function(a){return"Closure '"+H.b4(this).trim()+"'"},
gdZ:function(){return this},
$iscN:1,
gdZ:function(){return this}},
en:{"^":"v;"},
iG:{"^":"en;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cE:{"^":"en;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cE))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bv(this.a)
else y=typeof z!=="object"?J.aY(z):H.bv(z)
return(y^H.bv(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.b4(z)+"'")},
n:{
cF:function(a){return a.a},
du:function(a){return a.c},
c9:function(a){var z,y,x,w,v
z=new H.cE("self","target","receiver","name")
y=J.bq(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
j1:{"^":"Z;a",
i:function(a){return this.a},
n:{
aF:function(a,b){return new H.j1("TypeError: "+H.k(P.ce(a))+": type '"+H.fi(a)+"' is not a subtype of type '"+b+"'")}}},
fM:{"^":"Z;a",
i:function(a){return this.a},
n:{
fN:function(a,b){return new H.fM("CastError: "+H.k(P.ce(a))+": type '"+H.fi(a)+"' is not a subtype of type '"+b+"'")}}},
io:{"^":"Z;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
n:{
ip:function(a){return new H.io(a)}}},
b0:{"^":"hD;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gay:function(a){return new H.dZ(this,[H.z(this,0)])},
df:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cP(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cP(y,b)}else return this.he(b)},
he:function(a){var z=this.d
if(z==null)return!1
return this.ci(this.bN(z,J.aY(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bg(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bg(w,b)
x=y==null?null:y.b
return x}else return this.hf(b)},
hf:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bN(z,J.aY(a)&0x3ffffff)
x=this.ci(y,a)
if(x<0)return
return y[x].b},
a4:function(a,b,c){var z,y,x,w,v,u
H.G(b,H.z(this,0))
H.G(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bQ()
this.b=z}this.cI(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bQ()
this.c=y}this.cI(y,b,c)}else{x=this.d
if(x==null){x=this.bQ()
this.d=x}w=J.aY(b)&0x3ffffff
v=this.bN(x,w)
if(v==null)this.bX(x,w,[this.bR(b,c)])
else{u=this.ci(v,b)
if(u>=0)v[u].b=c
else v.push(this.bR(b,c))}}},
N:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.i(P.bj(this))
z=z.c}},
cI:function(a,b,c){var z
H.G(b,H.z(this,0))
H.G(c,H.z(this,1))
z=this.bg(a,b)
if(z==null)this.bX(a,b,this.bR(b,c))
else z.b=c},
eF:function(){this.r=this.r+1&67108863},
bR:function(a,b){var z,y
z=new H.hv(H.G(a,H.z(this,0)),H.G(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eF()
return z},
ci:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].a,b))return y
return-1},
i:function(a){return P.e1(this)},
bg:function(a,b){return a[b]},
bN:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
ey:function(a,b){delete a[b]},
cP:function(a,b){return this.bg(a,b)!=null},
bQ:function(){var z=Object.create(null)
this.bX(z,"<non-identifier-key>",z)
this.ey(z,"<non-identifier-key>")
return z},
$isdY:1},
hv:{"^":"a;a,b,0c,0d"},
dZ:{"^":"h7;a,$ti",
gl:function(a){return this.a.a},
ga0:function(a){var z,y
z=this.a
y=new H.hw(z,z.r,this.$ti)
y.c=z.e
return y}},
hw:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.bj(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lg:{"^":"v:13;a",
$1:function(a){return this.a(a)}},
lh:{"^":"v:35;a",
$2:function(a,b){return this.a(a,b)}},
li:{"^":"v:28;a",
$1:function(a){return this.a(H.R(a))}},
hp:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseb:1,
n:{
hq:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.i(new P.hh("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
la:function(a){return J.dS(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ls:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b9:function(a){return a},
aT:function(a,b,c){H.bR(b)
if(a>>>0!==a||a>=c)throw H.i(H.aU(b,a))},
kS:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.i(H.l9(a,b,c))
return b},
hT:{"^":"q;",$ismx:1,"%":"DataView;ArrayBufferView;cX|f3|f4|hS|f5|f6|aQ"},
cX:{"^":"hT;",
gl:function(a){return a.length},
$isD:1,
$asD:I.df},
hS:{"^":"f4;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
$ascf:function(){return[P.w]},
$ast:function(){return[P.w]},
$isf:1,
$asf:function(){return[P.w]},
$ise:1,
$ase:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
aQ:{"^":"f6;",
$ascf:function(){return[P.A]},
$ast:function(){return[P.A]},
$isf:1,
$asf:function(){return[P.A]},
$ise:1,
$ase:function(){return[P.A]}},
m8:{"^":"aQ;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m9:{"^":"aQ;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ma:{"^":"aQ;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mb:{"^":"aQ;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mc:{"^":"aQ;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
md:{"^":"aQ;",
gl:function(a){return a.length},
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hU:{"^":"aQ;",
gl:function(a){return a.length},
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
bE:function(a,b,c){return new Uint8Array(a.subarray(b,H.kS(b,c,a.length)))},
"%":";Uint8Array"},
f3:{"^":"cX+t;"},
f4:{"^":"f3+cf;"},
f5:{"^":"cX+t;"},
f6:{"^":"f5+cf;"}}],["","",,P,{"^":"",
jx:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.l_()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bc(new P.jz(z),1)).observe(y,{childList:true})
return new P.jy(z,y,x)}else if(self.setImmediate!=null)return P.l0()
return P.l1()},
mB:[function(a){self.scheduleImmediate(H.bc(new P.jA(H.d(a,{func:1,ret:-1})),0))},"$1","l_",4,0,9],
mC:[function(a){self.setImmediate(H.bc(new P.jB(H.d(a,{func:1,ret:-1})),0))},"$1","l0",4,0,9],
mD:[function(a){P.d3(C.l,H.d(a,{func:1,ret:-1}))},"$1","l1",4,0,9],
d3:function(a,b){var z
H.d(b,{func:1,ret:-1})
z=C.h.a2(a.a,1000)
return P.kw(z<0?0:z,b)},
eu:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.b5]})
z=C.h.a2(a.a,1000)
return P.kx(z<0?0:z,b)},
kW:function(a,b){if(H.c5(a,{func:1,args:[P.a,P.av]}))return b.hF(a,null,P.a,P.av)
if(H.c5(a,{func:1,args:[P.a]}))return H.d(a,{func:1,ret:null,args:[P.a]})
throw H.i(P.c8(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kV:function(){var z,y
for(;z=$.ba,z!=null;){$.bN=null
y=z.b
$.ba=y
if(y==null)$.bM=null
z.a.$0()}},
mL:[function(){$.db=!0
try{P.kV()}finally{$.bN=null
$.db=!1
if($.ba!=null)$.$get$d7().$1(P.fm())}},"$0","fm",0,0,3],
fh:function(a){var z=new P.eZ(H.d(a,{func:1,ret:-1}))
if($.ba==null){$.bM=z
$.ba=z
if(!$.db)$.$get$d7().$1(P.fm())}else{$.bM.b=z
$.bM=z}},
kZ:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.ba
if(z==null){P.fh(a)
$.bN=$.bM
return}y=new P.eZ(a)
x=$.bN
if(x==null){y.b=z
$.bN=y
$.ba=y}else{y.b=x.b
x.b=y
$.bN=y
if(y.b==null)$.bM=y}},
lu:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.P
if(C.j===y){P.cw(null,null,C.j,a)
return}y.toString
P.cw(null,null,y,H.d(y.c3(a),z))},
et:function(a,b){var z,y
z={func:1,ret:-1}
H.d(b,z)
y=$.P
if(y===C.j){y.toString
return P.d3(a,b)}return P.d3(a,H.d(y.c3(b),z))},
iY:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b5]}
H.d(b,z)
y=$.P
if(y===C.j){y.toString
return P.eu(a,b)}x=y.d8(b,P.b5)
$.P.toString
return P.eu(a,H.d(x,z))},
cv:function(a,b,c,d,e){var z={}
z.a=d
P.kZ(new P.kX(z,e))},
ff:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
fg:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.G(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
kY:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.G(e,h)
H.G(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cw:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c3(d):c.h0(d,-1)
P.fh(d)},
jz:{"^":"v:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jy:{"^":"v:39;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jA:{"^":"v:2;a",
$0:function(){this.a.$0()}},
jB:{"^":"v:2;a",
$0:function(){this.a.$0()}},
fc:{"^":"a;a,0b,c",
ek:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bc(new P.kz(this,b),0),a)
else throw H.i(P.ai("`setTimeout()` not found."))},
el:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bc(new P.ky(this,a,Date.now(),b),0),a)
else throw H.i(P.ai("Periodic timer."))},
$isb5:1,
n:{
kw:function(a,b){var z=new P.fc(!0,0)
z.ek(a,b)
return z},
kx:function(a,b){var z=new P.fc(!1,0)
z.el(a,b)
return z}}},
kz:{"^":"v:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ky:{"^":"v:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.e9(w,x)}z.c=y
this.d.$1(z)}},
b8:{"^":"a;0a,b,c,d,e,$ti",
hn:function(a){if(this.c!==6)return!0
return this.b.b.ct(H.d(this.d,{func:1,ret:P.a5,args:[P.a]}),a.a,P.a5,P.a)},
hd:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.c5(z,{func:1,args:[P.a,P.av]}))return H.dg(w.hL(z,a.a,a.b,null,y,P.av),x)
else return H.dg(w.ct(H.d(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aN:{"^":"a;d3:a<,b,0fj:c<,$ti",
dU:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kW(b,y)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aN(0,$.P,[c])
w=b==null?1:3
this.cJ(new P.b8(x,w,a,b,[z,c]))
return x},
hQ:function(a,b){return this.dU(a,null,b)},
cJ:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isb8")
this.c=a}else{if(z===2){y=H.j(this.c,"$isaN")
z=y.a
if(z<4){y.cJ(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cw(null,null,z,H.d(new P.jP(this,a),{func:1,ret:-1}))}},
cY:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isb8")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isaN")
y=u.a
if(y<4){u.cY(a)
return}this.a=y
this.c=u.c}z.a=this.bi(a)
y=this.b
y.toString
P.cw(null,null,y,H.d(new P.jU(z,this),{func:1,ret:-1}))}},
bT:function(){var z=H.j(this.c,"$isb8")
this.c=null
return this.bi(z)},
bi:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cM:function(a){var z,y,x,w
z=H.z(this,0)
H.dg(a,{futureOr:1,type:z})
y=this.$ti
x=H.bP(a,"$isbn",y,"$asbn")
if(x){z=H.bP(a,"$isaN",y,null)
if(z)P.f0(a,this)
else P.jQ(a,this)}else{w=this.bT()
H.G(a,z)
this.a=4
this.c=a
P.bK(this,w)}},
bJ:[function(a,b){var z
H.j(b,"$isav")
z=this.bT()
this.a=8
this.c=new P.ak(a,b)
P.bK(this,z)},function(a){return this.bJ(a,null)},"hZ","$2","$1","geu",4,2,34],
$isbn:1,
n:{
jQ:function(a,b){var z,y,x
b.a=1
try{a.dU(new P.jR(b),new P.jS(b),null)}catch(x){z=H.aX(x)
y=H.be(x)
P.lu(new P.jT(b,z,y))}},
f0:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isaN")
if(z>=4){y=b.bT()
b.a=a.a
b.c=a.c
P.bK(b,y)}else{y=H.j(b.c,"$isb8")
b.a=2
b.c=a
a.cY(y)}},
bK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isak")
y=y.b
u=v.a
t=v.b
y.toString
P.cv(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bK(z.a,b)}y=z.a
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
if(p){H.j(r,"$isak")
y=y.b
u=r.a
t=r.b
y.toString
P.cv(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.jX(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jW(x,b,r).$0()}else if((y&2)!==0)new P.jV(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.K(y).$isbn){if(y.a>=4){n=H.j(t.c,"$isb8")
t.c=null
b=t.bi(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f0(y,t)
return}}m=b.b
n=H.j(m.c,"$isb8")
m.c=null
b=m.bi(n)
y=x.a
u=x.b
if(!y){H.G(u,H.z(m,0))
m.a=4
m.c=u}else{H.j(u,"$isak")
m.a=8
m.c=u}z.a=m
y=m}}}},
jP:{"^":"v:2;a,b",
$0:function(){P.bK(this.a,this.b)}},
jU:{"^":"v:2;a,b",
$0:function(){P.bK(this.b,this.a.a)}},
jR:{"^":"v:12;a",
$1:function(a){var z=this.a
z.a=0
z.cM(a)}},
jS:{"^":"v:29;a",
$2:function(a,b){this.a.bJ(a,H.j(b,"$isav"))},
$1:function(a){return this.$2(a,null)}},
jT:{"^":"v:2;a,b,c",
$0:function(){this.a.bJ(this.b,this.c)}},
jX:{"^":"v:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dS(H.d(w.d,{func:1}),null)}catch(v){y=H.aX(v)
x=H.be(v)
if(this.d){w=H.j(this.a.a.c,"$isak").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isak")
else u.b=new P.ak(y,x)
u.a=!0
return}if(!!J.K(z).$isbn){if(z instanceof P.aN&&z.gd3()>=4){if(z.gd3()===8){w=this.b
w.b=H.j(z.gfj(),"$isak")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hQ(new P.jY(t),null)
w.a=!1}}},
jY:{"^":"v:30;a",
$1:function(a){return this.a}},
jW:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.G(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.ct(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aX(t)
y=H.be(t)
x=this.a
x.b=new P.ak(z,y)
x.a=!0}}},
jV:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isak")
w=this.c
if(w.hn(z)&&w.e!=null){v=this.b
v.b=w.hd(z)
v.a=!1}}catch(u){y=H.aX(u)
x=H.be(u)
w=H.j(this.a.a.c,"$isak")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ak(y,x)
s.a=!0}}},
eZ:{"^":"a;a,0b"},
d0:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aN(0,$.P,[P.A])
z.a=0
this.hk(new P.iJ(z,this),!0,new P.iK(z,y),y.geu())
return y}},
iJ:{"^":"v;a,b",
$1:function(a){H.G(a,H.aG(this.b,"d0",0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.aG(this.b,"d0",0)]}}},
iK:{"^":"v:2;a,b",
$0:function(){this.b.cM(this.a.a)}},
el:{"^":"a;$ti"},
iI:{"^":"a;"},
b5:{"^":"a;"},
ak:{"^":"a;a,b",
i:function(a){return H.k(this.a)},
$isZ:1},
kG:{"^":"a;",$ismA:1},
kX:{"^":"v:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ea()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.i(z)
x=H.i(z)
x.stack=y.i(0)
throw x}},
ki:{"^":"kG;",
hM:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.ff(null,null,this,a,-1)}catch(x){z=H.aX(x)
y=H.be(x)
P.cv(null,null,this,z,H.j(y,"$isav"))}},
hN:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.G(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.fg(null,null,this,a,b,-1,c)}catch(x){z=H.aX(x)
y=H.be(x)
P.cv(null,null,this,z,H.j(y,"$isav"))}},
h0:function(a,b){return new P.kk(this,H.d(a,{func:1,ret:b}),b)},
c3:function(a){return new P.kj(this,H.d(a,{func:1,ret:-1}))},
d8:function(a,b){return new P.kl(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
dS:function(a,b){H.d(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.ff(null,null,this,a,b)},
ct:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.G(b,d)
if($.P===C.j)return a.$1(b)
return P.fg(null,null,this,a,b,c,d)},
hL:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.G(b,e)
H.G(c,f)
if($.P===C.j)return a.$2(b,c)
return P.kY(null,null,this,a,b,c,d,e,f)},
hF:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
kk:{"^":"v;a,b,c",
$0:function(){return this.a.dS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kj:{"^":"v:3;a,b",
$0:function(){return this.a.hM(this.b)}},
kl:{"^":"v;a,b,c",
$1:function(a){var z=this.c
return this.a.hN(this.b,H.G(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hy:function(a,b,c){H.bR(a)
return H.u(H.lb(a,new H.b0(0,0,[b,c])),"$isdY",[b,c],"$asdY")},
hx:function(a,b){return new H.b0(0,0,[a,b])},
hz:function(a,b,c,d){return new P.k4(0,0,[d])},
hl:function(a,b,c){var z,y
if(P.dc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bO()
C.a.h(y,a)
try{P.kU(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.em(b,H.ln(z,"$isf"),", ")+c
return y.charCodeAt(0)==0?y:y},
cO:function(a,b,c){var z,y,x
if(P.dc(a))return b+"..."+c
z=new P.c2(b)
y=$.$get$bO()
C.a.h(y,a)
try{x=z
x.a=P.em(x.gaF(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaF()+c
y=z.gaF()
return y.charCodeAt(0)==0?y:y},
dc:function(a){var z,y
for(z=0;y=$.$get$bO(),z<y.length;++z)if(a===y[z])return!0
return!1},
kU:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga0(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.k(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.D();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
e1:function(a){var z,y,x
z={}
if(P.dc(a))return"{...}"
y=new P.c2("")
try{C.a.h($.$get$bO(),a)
x=y
x.a=x.gaF()+"{"
z.a=!0
J.fE(a,new P.hE(z,y))
z=y
z.a=z.gaF()+"}"}finally{z=$.$get$bO()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaF()
return z.charCodeAt(0)==0?z:z},
k4:{"^":"jZ;a,0b,0c,0d,0e,0f,r,$ti",
ga0:function(a){return P.f2(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.G(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d9()
this.b=z}return this.cK(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d9()
this.c=y}return this.cK(y,b)}else return this.em(0,b)},
em:function(a,b){var z,y,x
H.G(b,H.z(this,0))
z=this.d
if(z==null){z=P.d9()
this.d=z}y=this.cN(b)
x=z[y]
if(x==null)z[y]=[this.bI(b)]
else{if(this.cS(x,b)>=0)return!1
x.push(this.bI(b))}return!0},
F:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cZ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cZ(this.c,b)
else return this.fc(0,b)},
fc:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eC(z,b)
x=this.cS(y,b)
if(x<0)return!1
this.d5(y.splice(x,1)[0])
return!0},
cK:function(a,b){H.G(b,H.z(this,0))
if(H.j(a[b],"$isd8")!=null)return!1
a[b]=this.bI(b)
return!0},
cZ:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isd8")
if(z==null)return!1
this.d5(z)
delete a[b]
return!0},
cL:function(){this.r=this.r+1&67108863},
bI:function(a){var z,y
z=new P.d8(H.G(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cL()
return z},
d5:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cL()},
cN:function(a){return J.aY(a)&0x3ffffff},
eC:function(a,b){return a[this.cN(b)]},
cS:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].a,b))return y
return-1},
n:{
d9:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d8:{"^":"a;a,0b,0c"},
k5:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.bj(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.G(z.a,H.z(this,0))
this.c=z.b
return!0}}},
n:{
f2:function(a,b,c){var z=new P.k5(a,b,[c])
z.c=a.e
return z}}},
jZ:{"^":"iq;"},
cj:{"^":"k6;",$isf:1,$ise:1},
t:{"^":"a;$ti",
ga0:function(a){return new H.e_(a,this.gl(a),0,[H.bQ(this,a,"t",0)])},
E:function(a,b){return this.j(a,b)},
hT:function(a,b){var z,y,x
z=H.c([],[H.bQ(this,a,"t",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.r(x)
if(!(y<x))break
C.a.a4(z,y,this.j(a,y));++y}return z},
hS:function(a){return this.hT(a,!0)},
i:function(a){return P.cO(a,"[","]")}},
hD:{"^":"ag;"},
hE:{"^":"v:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
ag:{"^":"a;$ti",
N:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.bQ(this,a,"ag",0),H.bQ(this,a,"ag",1)]})
for(z=J.bT(this.gay(a));z.D();){y=z.gO(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.bg(this.gay(a))},
i:function(a){return P.e1(a)},
$isa6:1},
is:{"^":"a;$ti",
i:function(a){return P.cO(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.dq("index"))
if(b<0)H.p(P.an(b,0,null,"index",null))
for(z=P.f2(this,this.r,H.z(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.i(P.N(b,this,"index",null,y))},
$isf:1},
iq:{"^":"is;"},
k6:{"^":"a+t;"}}],["","",,P,{"^":"",cI:{"^":"a;$ti"},dC:{"^":"iI;$ti"},h9:{"^":"cI;",
$ascI:function(){return[P.o,[P.e,P.A]]}},jh:{"^":"h9;a"},ji:{"^":"dC;",
h4:function(a,b,c){var z,y,x,w
z=a.length
P.eg(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kF(0,0,x)
if(w.eA(a,b,z)!==z)w.d6(C.i.c7(a,z-1),0)
return C.J.bE(x,0,w.b)},
h3:function(a){return this.h4(a,0,null)},
$asdC:function(){return[P.o,[P.e,P.A]]}},kF:{"^":"a;a,b,c",
d6:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.h(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.h(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.h(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.h(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.h(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.h(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.h(z,y)
z[y]=128|a&63
return!1}},
eA:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.c7(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.bf(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d6(w,C.i.bf(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.h(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.h(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.h(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.h(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
hb:function(a){var z=J.K(a)
if(!!z.$isv)return z.i(a)
return"Instance of '"+H.b4(a)+"'"},
hA:function(a,b,c,d){var z,y
H.G(b,d)
z=J.hn(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a4(z,y,b)
return H.u(z,"$ise",[d],"$ase")},
hB:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga0(a);x.D();)C.a.h(y,H.G(x.gO(x),c))
if(b)return y
return H.u(J.bq(y),"$ise",z,"$ase")},
d1:function(a,b,c){var z,y
z=P.A
H.u(a,"$isf",[z],"$asf")
if(a.constructor===Array){H.u(a,"$isb_",[z],"$asb_")
y=a.length
c=P.eg(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.ak()
z=c<y}else z=!0
return H.ef(z?C.a.bE(a,b,c):a)}return P.iL(a,b,c)},
iL:function(a,b,c){var z,y,x
H.u(a,"$isf",[P.A],"$asf")
z=J.bT(a)
for(y=0;y<b;++y)if(!z.D())throw H.i(P.an(b,0,y,null,null))
x=[]
for(;z.D();)x.push(z.gO(z))
return H.ef(x)},
ig:function(a,b,c){return new H.hp(a,H.hq(a,!1,!0,!1))},
kE:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$ise",[P.A],"$ase")
if(c===C.r){z=$.$get$fe().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.h3(H.G(b,H.aG(c,"cI",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ia(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ce:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hb(a)},
n:function(a){return new P.f_(a)},
dm:function(a){H.ls(a)},
a5:{"^":"a;"},
"+bool":0,
at:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.at))return!1
return this.a===b.a&&this.b===b.b},
gX:function(a){var z=this.a
return(z^C.h.bj(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fZ(H.i9(this))
y=P.bU(H.i7(this))
x=P.bU(H.i3(this))
w=P.bU(H.i4(this))
v=P.bU(H.i6(this))
u=P.bU(H.i8(this))
t=P.h_(H.i5(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fZ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bU:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"Y;"},
"+double":0,
aZ:{"^":"a;a",
k:function(a,b){return new P.aZ(C.h.U(this.a*b))},
ak:function(a,b){return C.h.ak(this.a,H.j(b,"$isaZ").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aZ))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.h6()
y=this.a
if(y<0)return"-"+new P.aZ(0-y).i(0)
x=z.$1(C.h.a2(y,6e7)%60)
w=z.$1(C.h.a2(y,1e6)%60)
v=new P.h5().$1(y%1e6)
return""+C.h.a2(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
n:{
dM:function(a,b,c,d,e,f){return new P.aZ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h5:{"^":"v:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h6:{"^":"v:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
ea:{"^":"Z;",
i:function(a){return"Throw of null."}},
aH:{"^":"Z;a,b,c,d",
gbL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbK:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbL()+y+x
if(!this.a)return w
v=this.gbK()
u=P.ce(this.b)
return w+v+": "+H.k(u)},
n:{
fG:function(a){return new P.aH(!1,null,null,a)},
c8:function(a,b,c){return new P.aH(!0,a,b,c)},
dq:function(a){return new P.aH(!1,null,a,"Must not be null")}}},
cl:{"^":"aH;e,f,a,b,c,d",
gbL:function(){return"RangeError"},
gbK:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
n:{
cm:function(a,b,c){return new P.cl(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.cl(b,c,!0,a,d,"Invalid value")},
eg:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
z=a>c}else z=!0
if(z)throw H.i(P.an(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
z=b>c}else z=!0
if(z)throw H.i(P.an(b,a,c,"end",f))
return b}return c}}},
hk:{"^":"aH;e,l:f>,a,b,c,d",
gbL:function(){return"RangeError"},
gbK:function(){if(J.fB(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
n:{
N:function(a,b,c,d,e){var z=H.S(e!=null?e:J.bg(b))
return new P.hk(b,z,!0,a,c,"Index out of range")}}},
jd:{"^":"Z;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
ai:function(a){return new P.jd(a)}}},
ja:{"^":"Z;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eR:function(a){return new P.ja(a)}}},
iF:{"^":"Z;a",
i:function(a){return"Bad state: "+this.a}},
fU:{"^":"Z;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.ce(z))+"."},
n:{
bj:function(a){return new P.fU(a)}}},
i_:{"^":"a;",
i:function(a){return"Out of Memory"},
$isZ:1},
ej:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isZ:1},
fY:{"^":"Z;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f_:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hh:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bF(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"Y;"},
"+int":0,
f:{"^":"a;$ti",
gl:function(a){var z,y
z=this.ga0(this)
for(y=0;z.D();)++y
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.dq("index"))
if(b<0)H.p(P.an(b,0,null,"index",null))
for(z=this.ga0(this),y=0;z.D();){x=z.gO(z)
if(b===y)return x;++y}throw H.i(P.N(b,this,"index",null,y))},
i:function(a){return P.hl(this,"(",")")}},
cP:{"^":"a;$ti"},
e:{"^":"a;$ti",$isf:1},
"+List":0,
a6:{"^":"a;$ti"},
J:{"^":"a;",
gX:function(a){return P.a.prototype.gX.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Y:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gX:function(a){return H.bv(this)},
i:function(a){return"Instance of '"+H.b4(this)+"'"},
toString:function(){return this.i(this)}},
av:{"^":"a;"},
o:{"^":"a;",$iseb:1},
"+String":0,
c2:{"^":"a;aF:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
em:function(a,b,c){var z=J.bT(b)
if(!z.D())return a
if(c.length===0){do a+=H.k(z.gO(z))
while(z.D())}else{a+=H.k(z.gO(z))
for(;z.D();)a=a+c+H.k(z.gO(z))}return a}}}}],["","",,W,{"^":"",
cH:function(a,b){var z=document.createElement("canvas")
return z},
h8:function(a){H.j(a,"$isab")
return"wheel"},
cs:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f1:function(a,b,c,d){var z,y
z=W.cs(W.cs(W.cs(W.cs(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fj:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.d8(a,b)},
bp:{"^":"a3;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lC:{"^":"q;0l:length=","%":"AccessibleNodeList"},
lD:{"^":"bp;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lE:{"^":"bp;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fL:{"^":"q;","%":";Blob"},
cG:{"^":"bp;",
bD:function(a,b,c){if(c!=null)return a.getContext(b,P.l3(c,null))
return a.getContext(b)},
e_:function(a,b){return this.bD(a,b,null)},
$iscG:1,
"%":"HTMLCanvasElement"},
dx:{"^":"q;",$isdx:1,"%":"CanvasRenderingContext2D"},
lK:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lM:{"^":"fX;0l:length=","%":"CSSPerspective"},
bk:{"^":"q;",$isbk:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lN:{"^":"jF;0l:length=",
e0:function(a,b){var z=a.getPropertyValue(this.eq(a,b))
return z==null?"":z},
eq:function(a,b){var z,y
z=$.$get$dD()
y=z[b]
if(typeof y==="string")return y
y=this.ft(a,b)
z[b]=y
return y},
ft:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h0()+b
if(z in a)return z
return b},
gc4:function(a){return a.bottom},
gac:function(a){return a.height},
gaQ:function(a){return a.left},
gb6:function(a){return a.right},
gb9:function(a){return a.top},
gad:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fW:{"^":"a;",
gaQ:function(a){return this.e0(a,"left")}},
dE:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fX:{"^":"q;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lO:{"^":"dE;0l:length=","%":"CSSTransformValue"},
lP:{"^":"dE;0l:length=","%":"CSSUnparsedValue"},
lQ:{"^":"q;0l:length=","%":"DataTransferItemList"},
lR:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
lS:{"^":"jH;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[[P.ae,P.Y]]},
$ast:function(){return[[P.ae,P.Y]]},
$isf:1,
$asf:function(){return[[P.ae,P.Y]]},
$ise:1,
$ase:function(){return[[P.ae,P.Y]]},
$asy:function(){return[[P.ae,P.Y]]},
"%":"ClientRectList|DOMRectList"},
h4:{"^":"q;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gad(a))+" x "+H.k(this.gac(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bP(b,"$isae",[P.Y],"$asae")
if(!z)return!1
z=J.cy(b)
return a.left===z.gaQ(b)&&a.top===z.gb9(b)&&this.gad(a)===z.gad(b)&&this.gac(a)===z.gac(b)},
gX:function(a){return W.f1(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gad(a)&0x1FFFFFFF,this.gac(a)&0x1FFFFFFF)},
gc4:function(a){return a.bottom},
gac:function(a){return a.height},
gaQ:function(a){return a.left},
gb6:function(a){return a.right},
gb9:function(a){return a.top},
gad:function(a){return a.width},
$isae:1,
$asae:function(){return[P.Y]},
"%":";DOMRectReadOnly"},
lT:{"^":"jJ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[P.o]},
$ast:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$asy:function(){return[P.o]},
"%":"DOMStringList"},
lU:{"^":"q;0l:length=","%":"DOMTokenList"},
jE:{"^":"cj;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.j(z[b],"$isa3")},
h:function(a,b){this.a.appendChild(b)
return b},
ga0:function(a){var z=this.hS(this)
return new J.as(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a3]},
$asf:function(){return[W.a3]},
$ase:function(){return[W.a3]}},
a3:{"^":"L;",
gdc:function(a){return new W.jE(a,a.children)},
gdd:function(a){return P.ic(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Y)},
i:function(a){return a.localName},
$isa3:1,
"%":";Element"},
aa:{"^":"q;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ab:{"^":"q;",
d7:["e4",function(a,b,c,d){H.d(c,{func:1,args:[W.aa]})
if(c!=null)this.en(a,b,c,!1)}],
en:function(a,b,c,d){return a.addEventListener(b,H.bc(H.d(c,{func:1,args:[W.aa]}),1),!1)},
$isab:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;f7|f8|fa|fb"},
bm:{"^":"fL;",$isbm:1,"%":"File"},
lV:{"^":"jO;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bm]},
$ast:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$asy:function(){return[W.bm]},
"%":"FileList"},
lW:{"^":"ab;0l:length=","%":"FileWriter"},
lX:{"^":"bp;0l:length=","%":"HTMLFormElement"},
bo:{"^":"q;",$isbo:1,"%":"Gamepad"},
lY:{"^":"q;0l:length=","%":"History"},
lZ:{"^":"k0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.L]},
$ast:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cg:{"^":"q;0dh:data=",$iscg:1,"%":"ImageData"},
dR:{"^":"bp;",$isdR:1,"%":"HTMLImageElement"},
br:{"^":"d4;",$isbr:1,"%":"KeyboardEvent"},
m2:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
m3:{"^":"q;0l:length=","%":"MediaList"},
m4:{"^":"ab;",
d7:function(a,b,c,d){H.d(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.e4(a,b,c,!1)},
"%":"MessagePort"},
m5:{"^":"k7;",
j:function(a,b){return P.aP(a.get(H.R(b)))},
N:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gay:function(a){var z=H.c([],[P.o])
this.N(a,new W.hP(z))
return z},
gl:function(a){return a.size},
$asag:function(){return[P.o,null]},
$isa6:1,
$asa6:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hP:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m6:{"^":"k8;",
j:function(a,b){return P.aP(a.get(H.R(b)))},
N:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gay:function(a){var z=H.c([],[P.o])
this.N(a,new W.hQ(z))
return z},
gl:function(a){return a.size},
$asag:function(){return[P.o,null]},
$isa6:1,
$asa6:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hQ:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bs:{"^":"q;",$isbs:1,"%":"MimeType"},
m7:{"^":"ka;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bs]},
$ast:function(){return[W.bs]},
$isf:1,
$asf:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$asy:function(){return[W.bs]},
"%":"MimeTypeArray"},
au:{"^":"d4;",$isau:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jD:{"^":"cj;a",
ga0:function(a){var z=this.a.childNodes
return new W.dO(z,z.length,-1,[H.bQ(C.K,z,"y",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$ast:function(){return[W.L]},
$asf:function(){return[W.L]},
$ase:function(){return[W.L]}},
L:{"^":"ab;",
i:function(a){var z=a.nodeValue
return z==null?this.e5(a):z},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hV:{"^":"kc;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.L]},
$ast:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
bu:{"^":"q;0l:length=",$isbu:1,"%":"Plugin"},
mg:{"^":"kg;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bu]},
$ast:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$asy:function(){return[W.bu]},
"%":"PluginArray"},
mi:{"^":"km;",
j:function(a,b){return P.aP(a.get(H.R(b)))},
N:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gay:function(a){var z=H.c([],[P.o])
this.N(a,new W.im(z))
return z},
gl:function(a){return a.size},
$asag:function(){return[P.o,null]},
$isa6:1,
$asa6:function(){return[P.o,null]},
"%":"RTCStatsReport"},
im:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mj:{"^":"bp;0l:length=","%":"HTMLSelectElement"},
bx:{"^":"ab;",$isbx:1,"%":"SourceBuffer"},
mk:{"^":"f8;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bx]},
$ast:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$ise:1,
$ase:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"SourceBufferList"},
by:{"^":"q;",$isby:1,"%":"SpeechGrammar"},
ml:{"^":"ko;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.by]},
$ast:function(){return[W.by]},
$isf:1,
$asf:function(){return[W.by]},
$ise:1,
$ase:function(){return[W.by]},
$asy:function(){return[W.by]},
"%":"SpeechGrammarList"},
bz:{"^":"q;0l:length=",$isbz:1,"%":"SpeechRecognitionResult"},
mn:{"^":"kr;",
j:function(a,b){return a.getItem(H.R(b))},
N:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gay:function(a){var z=H.c([],[P.o])
this.N(a,new W.iH(z))
return z},
gl:function(a){return a.length},
$asag:function(){return[P.o,P.o]},
$isa6:1,
$asa6:function(){return[P.o,P.o]},
"%":"Storage"},
iH:{"^":"v:25;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bA:{"^":"q;",$isbA:1,"%":"CSSStyleSheet|StyleSheet"},
bB:{"^":"ab;",$isbB:1,"%":"TextTrack"},
bC:{"^":"ab;",$isbC:1,"%":"TextTrackCue|VTTCue"},
mr:{"^":"kv;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bC]},
$ast:function(){return[W.bC]},
$isf:1,
$asf:function(){return[W.bC]},
$ise:1,
$ase:function(){return[W.bC]},
$asy:function(){return[W.bC]},
"%":"TextTrackCueList"},
ms:{"^":"fb;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bB]},
$ast:function(){return[W.bB]},
$isf:1,
$asf:function(){return[W.bB]},
$ise:1,
$ase:function(){return[W.bB]},
$asy:function(){return[W.bB]},
"%":"TextTrackList"},
mt:{"^":"q;0l:length=","%":"TimeRanges"},
bE:{"^":"q;",$isbE:1,"%":"Touch"},
b6:{"^":"d4;",$isb6:1,"%":"TouchEvent"},
mu:{"^":"kB;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bE]},
$ast:function(){return[W.bE]},
$isf:1,
$asf:function(){return[W.bE]},
$ise:1,
$ase:function(){return[W.bE]},
$asy:function(){return[W.bE]},
"%":"TouchList"},
mv:{"^":"q;0l:length=","%":"TrackDefaultList"},
d4:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
my:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
mz:{"^":"ab;0l:length=","%":"VideoTrackList"},
bJ:{"^":"au;",
gh8:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.ai("deltaY is not supported"))},
gh7:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.ai("deltaX is not supported"))},
$isbJ:1,
"%":"WheelEvent"},
jw:{"^":"ab;",
ff:function(a,b){return a.requestAnimationFrame(H.bc(H.d(b,{func:1,ret:-1,args:[P.Y]}),1))},
ez:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mE:{"^":"kI;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bk]},
$ast:function(){return[W.bk]},
$isf:1,
$asf:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$asy:function(){return[W.bk]},
"%":"CSSRuleList"},
mF:{"^":"h4;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bP(b,"$isae",[P.Y],"$asae")
if(!z)return!1
z=J.cy(b)
return a.left===z.gaQ(b)&&a.top===z.gb9(b)&&a.width===z.gad(b)&&a.height===z.gac(b)},
gX:function(a){return W.f1(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gac:function(a){return a.height},
gad:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mH:{"^":"kK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$asy:function(){return[W.bo]},
"%":"GamepadList"},
mI:{"^":"kM;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.L]},
$ast:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mJ:{"^":"kO;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bz]},
$ast:function(){return[W.bz]},
$isf:1,
$asf:function(){return[W.bz]},
$ise:1,
$ase:function(){return[W.bz]},
$asy:function(){return[W.bz]},
"%":"SpeechRecognitionResultList"},
mK:{"^":"kQ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bA]},
$ast:function(){return[W.bA]},
$isf:1,
$asf:function(){return[W.bA]},
$ise:1,
$ase:function(){return[W.bA]},
$asy:function(){return[W.bA]},
"%":"StyleSheetList"},
jK:{"^":"d0;a,b,c,$ti",
hk:function(a,b,c,d){var z=H.z(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.X(this.a,this.b,a,!1,z)}},
mG:{"^":"jK;a,b,c,$ti"},
jL:{"^":"el;a,b,c,d,e,$ti",
fz:function(){var z=this.d
if(z!=null&&this.a<=0)J.fD(this.b,this.c,z,!1)},
n:{
X:function(a,b,c,d,e){var z=c==null?null:W.fj(new W.jM(c),W.aa)
z=new W.jL(0,a,b,z,!1,[e])
z.fz()
return z}}},
jM:{"^":"v:5;a",
$1:function(a){return this.a.$1(H.j(a,"$isaa"))}},
y:{"^":"a;$ti",
ga0:function(a){return new W.dO(a,this.gl(a),-1,[H.bQ(this,a,"y",0)])}},
dO:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fC(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
jF:{"^":"q+fW;"},
jG:{"^":"q+t;"},
jH:{"^":"jG+y;"},
jI:{"^":"q+t;"},
jJ:{"^":"jI+y;"},
jN:{"^":"q+t;"},
jO:{"^":"jN+y;"},
k_:{"^":"q+t;"},
k0:{"^":"k_+y;"},
k7:{"^":"q+ag;"},
k8:{"^":"q+ag;"},
k9:{"^":"q+t;"},
ka:{"^":"k9+y;"},
kb:{"^":"q+t;"},
kc:{"^":"kb+y;"},
kf:{"^":"q+t;"},
kg:{"^":"kf+y;"},
km:{"^":"q+ag;"},
f7:{"^":"ab+t;"},
f8:{"^":"f7+y;"},
kn:{"^":"q+t;"},
ko:{"^":"kn+y;"},
kr:{"^":"q+ag;"},
ku:{"^":"q+t;"},
kv:{"^":"ku+y;"},
fa:{"^":"ab+t;"},
fb:{"^":"fa+y;"},
kA:{"^":"q+t;"},
kB:{"^":"kA+y;"},
kH:{"^":"q+t;"},
kI:{"^":"kH+y;"},
kJ:{"^":"q+t;"},
kK:{"^":"kJ+y;"},
kL:{"^":"q+t;"},
kM:{"^":"kL+y;"},
kN:{"^":"q+t;"},
kO:{"^":"kN+y;"},
kP:{"^":"q+t;"},
kQ:{"^":"kP+y;"}}],["","",,P,{"^":"",
l6:function(a){var z,y
z=J.K(a)
if(!!z.$iscg){y=z.gdh(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fd(a.data,a.height,a.width)},
l5:function(a){if(a instanceof P.fd)return{data:a.a,height:a.b,width:a.c}
return a},
aP:function(a){var z,y,x,w,v
if(a==null)return
z=P.hx(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.R(y[w])
z.a4(0,v,a[v])}return z},
l3:function(a,b){var z={}
a.N(0,new P.l4(z))
return z},
dK:function(){var z=$.dJ
if(z==null){z=J.cC(window.navigator.userAgent,"Opera",0)
$.dJ=z}return z},
h0:function(){var z,y
z=$.dG
if(z!=null)return z
y=$.dH
if(y==null){y=J.cC(window.navigator.userAgent,"Firefox",0)
$.dH=y}if(y)z="-moz-"
else{y=$.dI
if(y==null){y=!P.dK()&&J.cC(window.navigator.userAgent,"Trident/",0)
$.dI=y}if(y)z="-ms-"
else z=P.dK()?"-o-":"-webkit-"}$.dG=z
return z},
fd:{"^":"a;dh:a>,b,c",$iscg:1},
l4:{"^":"v:14;a",
$2:function(a,b){this.a[a]=b}},
he:{"^":"cj;a,b",
gbO:function(){var z,y,x
z=this.b
y=H.aG(z,"t",0)
x=W.a3
return new H.hF(new H.ju(z,H.d(new P.hf(),{func:1,ret:P.a5,args:[y]}),[y]),H.d(new P.hg(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bg(this.gbO().a)},
j:function(a,b){var z=this.gbO()
return z.b.$1(J.dp(z.a,b))},
ga0:function(a){var z=P.hB(this.gbO(),!1,W.a3)
return new J.as(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a3]},
$asf:function(){return[W.a3]},
$ase:function(){return[W.a3]}},
hf:{"^":"v:26;",
$1:function(a){return!!J.K(H.j(a,"$isL")).$isa3}},
hg:{"^":"v:27;",
$1:function(a){return H.b(H.j(a,"$isL"),"$isa3")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ct:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kh:{"^":"a;$ti",
gb6:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.G(z+this.c,H.z(this,0))},
gc4:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.G(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bP(b,"$isae",[P.Y],"$asae")
if(!z)return!1
z=this.a
y=J.cy(b)
x=y.gaQ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb9(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.z(this,0)
if(H.G(z+this.c,w)===y.gb6(b)){if(typeof x!=="number")return x.C()
z=H.G(x+this.d,w)===y.gc4(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.aY(z)
x=this.b
w=J.aY(x)
if(typeof z!=="number")return z.C()
v=H.z(this,0)
z=H.G(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.G(x+this.d,v)
return P.k1(P.ct(P.ct(P.ct(P.ct(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ae:{"^":"kh;aQ:a>,b9:b>,ad:c>,ac:d>,$ti",n:{
ic:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.ak()
if(c<0)z=-c*0
else z=c
H.G(z,e)
if(typeof d!=="number")return d.ak()
if(d<0)y=-d*0
else y=d
return new P.ae(a,b,z,H.G(y,e),[e])}}}}],["","",,P,{"^":"",bZ:{"^":"q;",$isbZ:1,"%":"SVGLength"},m1:{"^":"k3;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bZ]},
$isf:1,
$asf:function(){return[P.bZ]},
$ise:1,
$ase:function(){return[P.bZ]},
$asy:function(){return[P.bZ]},
"%":"SVGLengthList"},c1:{"^":"q;",$isc1:1,"%":"SVGNumber"},me:{"^":"ke;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.c1]},
$isf:1,
$asf:function(){return[P.c1]},
$ise:1,
$ase:function(){return[P.c1]},
$asy:function(){return[P.c1]},
"%":"SVGNumberList"},mh:{"^":"q;0l:length=","%":"SVGPointList"},mo:{"^":"kt;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$asy:function(){return[P.o]},
"%":"SVGStringList"},mp:{"^":"a3;",
gdc:function(a){return new P.he(a,new W.jD(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},c3:{"^":"q;",$isc3:1,"%":"SVGTransform"},mw:{"^":"kD;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.c3]},
$isf:1,
$asf:function(){return[P.c3]},
$ise:1,
$ase:function(){return[P.c3]},
$asy:function(){return[P.c3]},
"%":"SVGTransformList"},k2:{"^":"q+t;"},k3:{"^":"k2+y;"},kd:{"^":"q+t;"},ke:{"^":"kd+y;"},ks:{"^":"q+t;"},kt:{"^":"ks+y;"},kC:{"^":"q+t;"},kD:{"^":"kC+y;"}}],["","",,P,{"^":"",lF:{"^":"q;0l:length=","%":"AudioBuffer"},lG:{"^":"jC;",
j:function(a,b){return P.aP(a.get(H.R(b)))},
N:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gay:function(a){var z=H.c([],[P.o])
this.N(a,new P.fI(z))
return z},
gl:function(a){return a.size},
$asag:function(){return[P.o,null]},
$isa6:1,
$asa6:function(){return[P.o,null]},
"%":"AudioParamMap"},fI:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},lH:{"^":"ab;0l:length=","%":"AudioTrackList"},fK:{"^":"ab;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mf:{"^":"fK;0l:length=","%":"OfflineAudioContext"},jC:{"^":"q+ag;"}}],["","",,P,{"^":"",cZ:{"^":"q;",
dT:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.K(g)
if(!!y.$iscg&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.l5(g))
return}if(!!y.$isdR&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.i(P.fG("Incorrect number or type of arguments"))},
hO:function(a,b,c,d,e,f,g){return this.dT(a,b,c,d,e,f,g,null,null,null)},
$iscZ:1,
"%":"WebGLRenderingContext"},iM:{"^":"q;",$isiM:1,"%":"WebGLTexture"},j8:{"^":"q;",$isj8:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mm:{"^":"kq;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return P.aP(a.item(b))},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a6,,,]]},
$isf:1,
$asf:function(){return[[P.a6,,,]]},
$ise:1,
$ase:function(){return[[P.a6,,,]]},
$asy:function(){return[[P.a6,,,]]},
"%":"SQLResultSetRowList"},kp:{"^":"q+t;"},kq:{"^":"kp+y;"}}],["","",,O,{"^":"",al:{"^":"a;0a,0b,0c,0d,$ti",
bd:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cA:function(a,b,c){var z=H.aG(this,"al",0)
H.d(b,{func:1,ret:P.a5,args:[[P.f,z]]})
z={func:1,ret:-1,args:[P.A,[P.f,z]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
aB:function(a,b){return this.cA(a,null,b)},
cX:function(a){var z
H.u(a,"$isf",[H.aG(this,"al",0)],"$asf")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cV:function(a,b){var z
H.u(b,"$isf",[H.aG(this,"al",0)],"$asf")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga0:function(a){var z=this.a
return new J.as(z,z.length,0,[H.z(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aG(this,"al",0)
H.G(b,z)
z=[z]
if(this.cX(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cV(x,H.c([b],z))}},
bZ:function(a,b){var z,y
H.u(b,"$isf",[H.aG(this,"al",0)],"$asf")
if(this.cX(b)){z=this.a
y=z.length
C.a.bZ(z,b)
this.cV(y,b)}},
$isf:1,
n:{
cb:function(a){var z=new O.al([a])
z.bd(a)
return z}}},cV:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
ef:function(a){var z=this.b
if(!(z==null))z.u(a)},
aC:function(){return this.ef(null)},
gT:function(a){var z=this.a
if(z.length>0)return C.a.gck(z)
else return V.aA()},
bB:function(a){var z=this.a
if(a==null)C.a.h(z,V.aA())
else C.a.h(z,a)
this.aC()},
az:function(){var z=this.a
if(z.length>0){z.pop()
this.aC()}}}}],["","",,E,{"^":"",cD:{"^":"a;"},aI:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a5:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbc:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gp()
y.toString
x=H.d(this.gdR(),{func:1,ret:-1,args:[D.l]})
C.a.F(y.a,x)}y=this.c
if(y!=null){y=y.gp()
y.toString
x=H.d(this.gdR(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.B("shape",z,this.c,this,[F.eh])
w.b=!0
this.aj(w)}},
sb1:function(a){var z,y,x,w
if(!J.H(this.r,a)){z=this.r
if(z!=null){y=z.gp()
y.toString
x=H.d(this.gdQ(),{func:1,ret:-1,args:[D.l]})
C.a.F(y.a,x)}if(a!=null){y=a.gp()
y.toString
x=H.d(this.gdQ(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}this.r=a
w=new D.B("mover",z,a,this,[U.ac])
w.b=!0
this.aj(w)}},
a7:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aR(0,b,this):null
if(!J.H(y,this.x)){x=this.x
this.x=y
w=new D.B("matrix",x,y,this,[V.ah])
w.b=!0
this.aj(w)}for(z=this.y.a,z=new J.as(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a7(0,b)},
a3:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gT(z))
else C.a.h(z.a,y.k(0,z.gT(z)))
z.aC()
a.cq(this.f)
z=a.dy
x=(z&&C.a).gck(z)
if(x!=null&&this.d!=null)x.b5(a,this)
for(z=this.y.a,z=new J.as(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a3(a)
a.co()
a.dx.az()},
gp:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
aj:function(a){var z=this.z
if(!(z==null))z.u(a)},
Y:function(){return this.aj(null)},
hv:[function(a){H.j(a,"$isl")
this.e=null
this.aj(a)},function(){return this.hv(null)},"iL","$1","$0","gdR",0,2,0],
hu:[function(a){this.aj(H.j(a,"$isl"))},function(){return this.hu(null)},"iK","$1","$0","gdQ",0,2,0],
hs:[function(a){this.aj(H.j(a,"$isl"))},function(){return this.hs(null)},"iI","$1","$0","gdP",0,2,0],
iH:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$isf",[E.aI],"$asf")
for(z=b.length,y=this.gdP(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.aJ()
t.a=H.c([],w)
t.c=0
u.sa5(t)}t=u.ga5()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.Y()},"$2","ghr",8,0,7],
iJ:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$isf",[E.aI],"$asf")
for(z=b.length,y=this.gdP(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.aJ()
t.a=H.c([],w)
t.c=0
u.sa5(t)}t=u.ga5()
t.toString
H.d(y,x)
C.a.F(t.a,y)}}this.Y()},"$2","ght",8,0,7],
$isaC:1,
n:{
cL:function(a,b,c,d,e,f){var z,y
z=new E.aI()
z.a=d
z.b=!0
y=O.cb(E.aI)
z.y=y
y.aB(z.ghr(),z.ght())
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
z.sbc(0,e)
z.sb1(c)
return z}}},ih:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eb:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.at(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cV()
y=[V.ah]
z.a=H.c([],y)
x=z.gp()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.d(new E.ij(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cV()
z.a=H.c([],y)
v=z.gp()
v.toString
x=H.d(new E.ik(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cV()
z.a=H.c([],y)
y=z.gp()
y.toString
w=H.d(new E.il(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.aS])
this.dy=z
C.a.h(z,null)
this.fr=new H.b0(0,0,[P.o,A.bw])},
ghE:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gT(z)
y=this.db
y=z.k(0,y.gT(y))
this.z=y
z=y}return z},
gcp:function(){var z,y
z=this.ch
if(z==null){z=this.ghE()
y=this.dx
y=z.k(0,y.gT(y))
this.ch=y
z=y}return z},
gdW:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gT(z)
y=this.dx
y=z.k(0,y.gT(y))
this.cx=y
z=y}return z},
cq:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gck(z):a;(z&&C.a).h(z,y)},
co:function(){var z=this.dy
if(z.length>1)z.pop()},
aU:function(a){var z=a.b
if(z.length===0)throw H.i(P.n("May not cache a shader with no name."))
if(this.fr.df(0,z))throw H.i(P.n('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a4(0,z,a)},
n:{
ii:function(a,b){var z=new E.ih(a,b)
z.eb(a,b)
return z}}},ij:{"^":"v:10;a",
$1:function(a){var z
H.j(a,"$isl")
z=this.a
z.z=null
z.ch=null}},ik:{"^":"v:10;a",
$1:function(a){var z
H.j(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},il:{"^":"v:10;a",
$1:function(a){var z
H.j(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},iV:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a5:x@,0y,0z,0Q,0ch",
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
eh:[function(a){var z
H.j(a,"$isl")
z=this.x
if(!(z==null))z.u(a)
this.hJ()},function(){return this.eh(null)},"eg","$1","$0","gcF",0,2,0],
ghc:function(){var z,y,x
z=Date.now()
y=C.h.a2(P.dM(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.at(z,!1)
return x/y},
d_:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.r(z)
x=C.c.cg(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.c.cg(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.et(C.l,this.ghI())},
hJ:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.iX(this),{func:1,ret:-1,args:[P.Y]})
C.u.ez(z)
C.u.ff(z,W.fj(y,P.Y))}},"$0","ghI",0,0,3],
hH:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d_()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.at(w,!1)
x.y=P.dM(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aC()
w=x.db
C.a.sl(w.a,0)
w.aC()
w=x.dx
C.a.sl(w.a,0)
w.aC()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a3(this.e)}}catch(v){z=H.aX(v)
y=H.be(v)
P.dm("Error: "+H.k(z))
P.dm("Stack: "+H.k(y))
throw H.i(z)}},
n:{
iW:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscG)return E.es(a,!0,!0,!0,!1)
y=W.cH(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdc(a).h(0,y)
w=E.es(y,!0,!0,!0,!1)
w.a=a
return w},
es:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iV()
y=P.hy(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bD(a,"webgl",y)
x=H.j(x==null?C.k.bD(a,"experimental-webgl",y):x,"$iscZ")
if(x==null)H.p(P.n("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ii(x,a)
w=new T.iQ(x)
w.b=H.S(x.getParameter(3379))
w.c=H.S(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.je(a)
v=new X.hs()
v.c=new X.aB(!1,!1,!1)
v.d=P.hz(null,null,null,P.A)
w.b=v
v=new X.hR(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hC(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.j_(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.el,P.a]])
w.z=v
u=document
t=W.au
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.X(u,"contextmenu",H.d(w.geQ(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.X(a,"focus",H.d(w.geV(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.X(a,"blur",H.d(w.geN(),q),!1,r))
v=w.z
p=W.br
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.X(u,"keyup",H.d(w.geX(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.X(u,"keydown",H.d(w.geW(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.X(a,"mousedown",H.d(w.gf_(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mouseup",H.d(w.gf1(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mousemove",H.d(w.gf0(),s),!1,t))
p=w.z
o=W.bJ;(p&&C.a).h(p,W.X(a,H.R(W.h8(a)),H.d(w.gf2(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.X(u,"mousemove",H.d(w.geR(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.X(u,"mouseup",H.d(w.geS(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.X(u,"pointerlockchange",H.d(w.gf3(),q),!1,r))
r=w.z
q=W.b6
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.X(a,"touchstart",H.d(w.gfb(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchend",H.d(w.gf9(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchmove",H.d(w.gfa(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.at(Date.now(),!1)
z.ch=0
z.d_()
return z}}},iX:{"^":"v:40;a",
$1:function(a){var z
H.lr(a)
z=this.a
if(z.z){z.z=!1
z.hH()}}}}],["","",,Z,{"^":"",eY:{"^":"a;a,b",n:{
d6:function(a,b,c){var z
H.u(c,"$ise",[P.A],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.b9(c)),35044)
a.bindBuffer(b,null)
return new Z.eY(b,z)}}},dv:{"^":"cD;a,b,c,d,e",
H:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aX(y)
x=P.n('Failed to bind buffer attribute "'+J.a8(this.a)+'": '+H.k(z))
throw H.i(x)}},
i:function(a){return"["+J.a8(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},c4:{"^":"a;a",$islI:1},bi:{"^":"a;a,0b,c,d",
a_:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
H:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].H(a)},
a1:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a3:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a8(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$ismq:1},ch:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b4(this.c)+"'")+"]"}},ap:{"^":"a;a",
gcC:function(a){var z,y
z=this.a
y=(z&$.$get$a1().a)!==0?3:0
if((z&$.$get$ax().a)!==0)y+=3
if((z&$.$get$aw().a)!==0)y+=3
if((z&$.$get$aj().a)!==0)y+=2
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$bH().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=4
if((z&$.$get$b7().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
h_:function(a){var z,y,x
z=$.$get$a1()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aj()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b7()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eX()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ap))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.o])
y=this.a
if((y&$.$get$a1().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aj().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$ay().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bH().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b7().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
n:{
aq:function(a){return new Z.ap(a)}}}}],["","",,D,{"^":"",dy:{"^":"a;"},aJ:{"^":"a;0a,0b,0c",
u:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.N(y,new D.hc(z))
return x!==0},
di:function(){return this.u(null)},
hK:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.u(y)}}},
ao:function(a){return this.hK(a,!0,!1)},
n:{
C:function(){var z=new D.aJ()
z.a=H.c([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},hc:{"^":"v:31;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bV:{"^":"l;c,d,a,0b,$ti"},bW:{"^":"l;c,d,a,0b,$ti"},B:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dw:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
n:{"^":"lJ<"}},dW:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dW))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},dX:{"^":"l;c,a,0b"},hs:{"^":"a;0a,0b,0c,0d",
hB:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dX(a,this)
y.b=!0
return z.u(y)},
hx:function(a){var z,y
this.c=a.b
this.d.F(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dX(a,this)
y.b=!0
return z.u(y)}},e0:{"^":"ck;x,y,c,d,e,a,0b"},hC:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
as:function(a,b){var z,y,x,w,v,u,t,s
z=new P.at(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaK()
s=new X.c0(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cn:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.u(this.as(a,b))
return!0},
b3:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.e2()
if(typeof z!=="number")return z.dY()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.as(a,b))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.as(a,b))
return!0},
hC:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaK()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.cW(new V.V(v*u,t*s),y,x,new P.at(w,!1),this)
w.b=!0
z.u(w)
return!0},
eZ:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.at(Date.now(),!1)
y=this.f
x=new X.e0(c,a,this.a.gaK(),b,z,this)
x.b=!0
y.u(x)
this.y=z
this.x=new V.O(0,0)}},aB:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aB))return!1
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
return z+(this.c?"Shift+":"")}},c0:{"^":"ck;x,y,z,Q,ch,c,d,e,a,0b"},hR:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bM:function(a,b,c){var z,y,x
z=new P.at(Date.now(),!1)
y=this.a.gaK()
x=new X.c0(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cn:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.u(this.bM(a,b,!0))
return!0},
b3:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.e2()
if(typeof z!=="number")return z.dY()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.bM(a,b,!0))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.bM(a,b,!1))
return!0},
hD:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaK()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.cW(new V.V(w*v,u*t),y,b,new P.at(x,!1),this)
x.b=!0
z.u(x)
return!0}},cW:{"^":"ck;x,c,d,e,a,0b"},ck:{"^":"l;"},ex:{"^":"ck;x,y,z,Q,ch,c,d,e,a,0b"},j_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
as:function(a,b){var z,y,x,w
H.u(a,"$ise",[V.O],"$ase")
z=new P.at(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaK()
w=new X.ex(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hA:function(a){var z
H.u(a,"$ise",[V.O],"$ase")
z=this.b
if(z==null)return!1
z.u(this.as(a,!0))
return!0},
hy:function(a){var z
H.u(a,"$ise",[V.O],"$ase")
z=this.c
if(z==null)return!1
z.u(this.as(a,!0))
return!0},
hz:function(a){var z
H.u(a,"$ise",[V.O],"$ase")
z=this.d
if(z==null)return!1
z.u(this.as(a,!1))
return!0}},je:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaK:function(){var z=this.a
return V.aR(0,0,(z&&C.k).gdd(z).c,C.k.gdd(z).d)},
cQ:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dW(z,new X.aB(y,a.altKey,a.shiftKey))},
aI:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
bY:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
at:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.O(y-w,x-v)},
aT:function(a){return new V.V(a.movementX,a.movementY)},
bS:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.c.U(u.pageX)
C.c.U(u.pageY)
s=z.left
C.c.U(u.pageX)
C.a.h(y,new V.O(t-s,C.c.U(u.pageY)-z.top))}return y},
aq:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dw(z,new X.aB(y,a.altKey,a.shiftKey))},
bP:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=H.S(y-w)
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.L()
u=H.S(x-y)
if(u<0)return!1
return v<z.width&&u<z.height},
ii:[function(a){this.f=!0},"$1","geV",4,0,5],
i8:[function(a){this.f=!1},"$1","geN",4,0,5],
ib:[function(a){H.j(a,"$isau")
if(this.f&&this.bP(a))a.preventDefault()},"$1","geQ",4,0,4],
ik:[function(a){var z
H.j(a,"$isbr")
if(!this.f)return
z=this.cQ(a)
if(this.b.hB(z))a.preventDefault()},"$1","geX",4,0,16],
ij:[function(a){var z
H.j(a,"$isbr")
if(!this.f)return
z=this.cQ(a)
if(this.b.hx(z))a.preventDefault()},"$1","geW",4,0,16],
im:[function(a){var z,y,x,w
H.j(a,"$isau")
z=this.a
z.focus()
this.f=!0
this.aI(a)
if(this.x){y=this.aq(a)
x=this.aT(a)
if(this.d.cn(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aq(a)
w=this.at(a)
if(this.c.cn(y,w))a.preventDefault()},"$1","gf_",4,0,4],
ip:[function(a){var z,y,x
H.j(a,"$isau")
this.aI(a)
z=this.aq(a)
if(this.x){y=this.aT(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b3(z,x))a.preventDefault()},"$1","gf1",4,0,4],
ie:[function(a){var z,y,x
H.j(a,"$isau")
if(!this.bP(a)){this.aI(a)
z=this.aq(a)
if(this.x){y=this.aT(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b3(z,x))a.preventDefault()}},"$1","geS",4,0,4],
io:[function(a){var z,y,x
H.j(a,"$isau")
this.aI(a)
z=this.aq(a)
if(this.x){y=this.aT(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","gf0",4,0,4],
ic:[function(a){var z,y,x
H.j(a,"$isau")
if(!this.bP(a)){this.aI(a)
z=this.aq(a)
if(this.x){y=this.aT(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b2(z,x))a.preventDefault()}},"$1","geR",4,0,4],
iq:[function(a){var z,y
H.j(a,"$isbJ")
this.aI(a)
z=new V.V((a&&C.t).gh7(a),C.t.gh8(a)).v(0,180)
if(this.x){if(this.d.hC(z))a.preventDefault()
return}if(this.r)return
y=this.at(a)
if(this.c.hD(z,y))a.preventDefault()},"$1","gf2",4,0,32],
ir:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aq(this.y)
v=this.at(this.y)
this.d.eZ(w,v,x)}},"$1","gf3",4,0,5],
iz:[function(a){var z
H.j(a,"$isb6")
this.a.focus()
this.f=!0
this.bY(a)
z=this.bS(a)
if(this.e.hA(z))a.preventDefault()},"$1","gfb",4,0,11],
ix:[function(a){var z
H.j(a,"$isb6")
this.bY(a)
z=this.bS(a)
if(this.e.hy(z))a.preventDefault()},"$1","gf9",4,0,11],
iy:[function(a){var z
H.j(a,"$isb6")
this.bY(a)
z=this.bS(a)
if(this.e.hz(z))a.preventDefault()},"$1","gfa",4,0,11]}}],["","",,D,{"^":"",cd:{"^":"a;0a,0b,0c,0d",
gp:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z},
aD:[function(a){var z
H.j(a,"$isl")
z=this.d
if(!(z==null))z.u(a)},function(){return this.aD(null)},"hW","$1","$0","gei",0,2,0],
$isW:1,
$isaC:1},W:{"^":"a;",$isaC:1},ht:{"^":"al;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gp:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
aD:function(a){var z=this.Q
if(!(z==null))z.u(a)},
eY:[function(a){var z
H.j(a,"$isl")
z=this.ch
if(!(z==null))z.u(a)},function(){return this.eY(null)},"il","$1","$0","gcW",0,2,0],
is:[function(a){var z,y,x
H.u(a,"$isf",[D.W],"$asf")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.ev(x))return!1}return!0},"$1","gf4",4,0,37],
i5:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.u(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcW(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.j(b[u],"$isW")
if(t instanceof D.cd)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aJ()
s.a=H.c([],v)
s.c=0
t.d=s}H.d(x,w)
C.a.h(s.a,x)}z=new D.bV(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","geK",8,0,15],
iu:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.u(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcW(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.j(b[u],"$isW")
if(t instanceof D.cd)C.a.F(this.e,t)
s=t.d
if(s==null){s=new D.aJ()
s.a=H.c([],v)
s.c=0
t.d=s}H.d(x,w)
C.a.F(s.a,x)}z=new D.bW(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gf6",8,0,15],
ev:function(a){var z=C.a.au(this.e,a)
return z},
$asf:function(){return[D.W]},
$asal:function(){return[D.W]}},i2:{"^":"a;",$isW:1,$isaC:1},iE:{"^":"a;",$isW:1,$isaC:1},iS:{"^":"a;",$isW:1,$isaC:1},iT:{"^":"a;",$isW:1,$isaC:1},iU:{"^":"a;",$isW:1,$isaC:1}}],["","",,V,{"^":"",
lL:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.r(a)
return Math.abs(b-a)<=1e-9},"$2","hO",8,0,33],
lB:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.e1(a-b,z)
return(a<0?a+z:a)+b},
M:function(a,b,c){if(a==null)return C.i.ah("null",c)
return C.i.ah(C.c.dV($.m.$2(a,0)?0:a,b),c+b+1)},
bd:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$ise",[P.w],"$ase")
z=H.c([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.M(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.a4(z,u,C.i.ah(z[u],x))}return z},
bS:function(a,b){return C.c.hR(Math.pow(b,C.z.cg(Math.log(H.l2(a))/Math.log(b))))},
T:{"^":"a;a,b,c",
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
return new V.T(z,y,x)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}},
a9:{"^":"a;a,b,c,d",
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
return new V.a9(z,y,x,w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}},
b2:{"^":"a;a,b,c,d,e,f,r,x,y",
P:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.j(a5,"$isb2")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.c.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.c.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.c.k(t,s)
q=a5.b
p=C.c.k(z,q)
o=a5.e
n=C.c.k(w,o)
m=a5.x
l=C.c.k(t,m)
k=a5.c
z=C.c.k(z,k)
j=a5.f
w=C.c.k(w,j)
i=a5.y
t=C.c.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.c.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.c.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.c.k(d,s)
b=C.c.k(h,q)
a=C.c.k(f,o)
a0=C.c.k(d,m)
h=C.c.k(h,k)
f=C.c.k(f,j)
d=C.c.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.c.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.c.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.b2(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.c.k(a3,s),C.c.k(a1,q)+C.c.k(a2,o)+C.c.k(a3,m),C.c.k(a1,k)+C.c.k(a2,j)+C.c.k(a3,i))},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b2))return!1
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
i:function(a){var z,y,x,w,v,u,t,s
z=[P.w]
y=V.bd(H.c([this.a,this.d,this.r],z),3,0)
x=V.bd(H.c([this.b,this.e,this.x],z),3,0)
w=V.bd(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.h(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.h(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.h(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.h(y,1)
s=" "+y[1]+", "
if(1>=u)return H.h(x,1)
s=s+x[1]+", "
if(1>=t)return H.h(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.h(y,2)
z=" "+y[2]+", "
if(2>=u)return H.h(x,2)
z=z+x[2]+", "
if(2>=t)return H.h(w,2)
return s+(z+w[2]+"]")}},
ah:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
P:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
cj:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.r(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.r(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.r(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.r(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.r(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.r(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.r(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.r(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.aA()
a3=1/a2
a4=-w
a5=-i
return V.aK((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.j(a7,"$isah")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.r(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.r(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.r(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.r(s)
r=a7.b
if(typeof r!=="number")return H.r(r)
q=a7.f
if(typeof q!=="number")return H.r(q)
p=a7.z
if(typeof p!=="number")return H.r(p)
o=a7.cy
if(typeof o!=="number")return H.r(o)
n=a7.c
if(typeof n!=="number")return H.r(n)
m=a7.r
if(typeof m!=="number")return H.r(m)
l=a7.Q
if(typeof l!=="number")return H.r(l)
k=a7.db
if(typeof k!=="number")return H.r(k)
j=a7.d
if(typeof j!=="number")return H.r(j)
i=a7.x
if(typeof i!=="number")return H.r(i)
h=a7.ch
if(typeof h!=="number")return H.r(h)
g=a7.dx
if(typeof g!=="number")return H.r(g)
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
return V.aK(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
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
return new V.F(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
ba:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.r(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.r(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.r(l)
return new V.U(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
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
i:function(a){return this.J()},
dH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.bd(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bd(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bd(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bd(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.h(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.h(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.h(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.h(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.h(y,1)
q=q+y[1]+", "
if(1>=t)return H.h(x,1)
q=q+x[1]+", "
if(1>=s)return H.h(w,1)
q=q+w[1]+", "
if(1>=r)return H.h(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.h(y,2)
u=u+y[2]+", "
if(2>=t)return H.h(x,2)
u=u+x[2]+", "
if(2>=s)return H.h(w,2)
u=u+w[2]+", "
if(2>=r)return H.h(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.h(y,3)
q=q+y[3]+", "
if(3>=t)return H.h(x,3)
q=q+x[3]+", "
if(3>=s)return H.h(w,3)
q=q+w[3]+", "
if(3>=r)return H.h(v,3)
return u+(q+v[3]+"]")},
w:function(a){return this.dH(a,3,0)},
J:function(){return this.dH("",3,0)},
n:{
aK:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aA:function(){return V.aK(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
e6:function(a,b,c){return V.aK(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
e5:function(a,b,c,d){return V.aK(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
e4:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.A(c)))
y=b.av(z)
x=y.v(0,Math.sqrt(y.A(y)))
w=z.av(x)
v=new V.F(a.a,a.b,a.c)
return V.aK(x.a,w.a,z.a,x.M(0).A(v),x.b,w.b,z.b,w.M(0).A(v),x.c,w.c,z.c,z.M(0).A(v),0,0,0,1)}}},
O:{"^":"a;a,b",
L:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.O(this.a*b,this.b*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
U:{"^":"a;a,b,c",
C:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}},
b3:{"^":"a;a,b,c,d",
k:function(a,b){return new V.b3(this.a*b,this.b*b,this.c*b,this.d*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b3))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}},
cn:{"^":"a;a,b,c,d",
gan:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cn))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"},
n:{
aR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cn(a,b,c,d)}}},
V:{"^":"a;a,b",
hi:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,18],
A:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.r(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.r(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.V(z*b,y*b)},
v:function(a,b){var z,y
if($.m.$2(b,0))return new V.V(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.V(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
F:{"^":"a;a,b,c",
hi:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,18],
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cl:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.F(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
av:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.F(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.F(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.m.$2(b,0))return new V.F(0,0,0)
return new V.F(this.a/b,this.b/b,this.c/b)},
dJ:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fS:{"^":"dy;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bH:function(a){var z=V.lB(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.u(a)},
sdX:function(a,b){},
sdM:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bH(z)}z=new D.B("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.R(z)}},
sdO:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bH(z)}z=new D.B("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.R(z)}},
sa9:function(a,b){var z,y
b=this.bH(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.B("location",y,b,this,[P.w])
z.b=!0
this.R(z)}},
sdN:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.B("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.R(z)}},
sW:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.B("velocity",x,a,this,[P.w])
z.b=!0
this.R(z)}},
sdg:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.B("dampening",y,a,this,[P.w])
z.b=!0
this.R(z)}},
a7:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa9(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sW(y)}},
n:{
dA:function(){var z=new U.fS()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dB:{"^":"ac;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
aR:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dB))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")},
n:{
cJ:function(a){var z=new U.dB()
z.a=a
return z}}},dP:{"^":"al;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
R:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.u(a)},function(){return this.R(null)},"aE","$1","$0","gbe",0,2,0],
hX:[function(a,b){var z,y,x,w,v,u,t
z=U.ac
H.u(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gbe(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.d(x,w)
C.a.h(t.a,x)}}z=new D.bV(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gej",8,0,19],
it:[function(a,b){var z,y,x,w,v,u,t
z=U.ac
H.u(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gbe(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.d(x,w)
C.a.F(t.a,x)}}z=new D.bW(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gf5",8,0,19],
aR:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ak()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.as(z,z.length,0,[H.z(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aR(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.aA():x
z=this.e
if(!(z==null))z.ao(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dP))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.H(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asf:function(){return[U.ac]},
$asal:function(){return[U.ac]},
$isac:1,
n:{
dQ:function(a){var z=new U.dP()
z.bd(U.ac)
z.aB(z.gej(),z.gf5())
z.e=null
z.f=V.aA()
z.r=0
return z}}},ac:{"^":"dy;"},jf:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
R:[function(a){var z
H.j(a,"$isl")
z=this.fx
if(!(z==null))z.u(a)},function(){return this.R(null)},"aE","$1","$0","gbe",0,2,0],
c_:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.C()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.l]}
x=H.d(this.geG(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.d(this.geH(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.C()
x.c=z}x=H.d(this.geI(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.C()
x.f=z}x=H.d(this.geD(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.d(this.geE(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.C()
x.b=z}x=H.d(this.gfw(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.d(this.gfv(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.C()
x.c=z}y=H.d(this.gfu(),y)
C.a.h(z.a,y)
return!0},
al:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.V(z,y)},
i1:[function(a){a=H.b(H.j(a,"$isl"),"$isc0")
if(!J.H(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geG",4,0,1],
i2:[function(a){var z,y,x,w,v,u,t
a=H.b(H.j(a,"$isl"),"$isc0")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.V(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.al(new V.V(y.a,y.b).k(0,2).v(0,z.gan()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.al(new V.V(x.a,x.b).k(0,2).v(0,z.gan()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sa9(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.L(0,a.z)
this.dx=this.al(new V.V(y.a,y.b).k(0,2).v(0,z.gan()))}this.aE()},"$1","geH",4,0,1],
i3:[function(a){var z,y,x
H.j(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sW(-y*10*z)
this.aE()}},"$1","geI",4,0,1],
i_:[function(a){if(H.b(H.j(a,"$isl"),"$ise0").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geD",4,0,1],
i0:[function(a){var z,y,x,w,v,u,t
a=H.b(H.j(a,"$isl"),"$isc0")
if(!J.H(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.al(new V.V(x.a,x.b).k(0,2).v(0,z.gan()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sa9(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.L(0,a.z)
this.dx=this.al(new V.V(y.a,y.b).k(0,2).v(0,z.gan()))
this.aE()},"$1","geE",4,0,1],
iD:[function(a){H.j(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfw",4,0,1],
iC:[function(a){var z,y,x,w,v,u,t
a=H.b(H.j(a,"$isl"),"$isex")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.V(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.al(new V.V(y.a,y.b).k(0,2).v(0,z.gan()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.al(new V.V(x.a,x.b).k(0,2).v(0,z.gan()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sa9(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.L(0,a.z)
this.dx=this.al(new V.V(y.a,y.b).k(0,2).v(0,z.gan()))}this.aE()},"$1","gfv",4,0,1],
iB:[function(a){var z,y,x
H.j(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sW(-y*10*z)
this.aE()}},"$1","gfu",4,0,1],
aR:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.ak()
if(z<y){this.dy=y
x=b.y
this.c.a7(0,x)
this.b.a7(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aK(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aK(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isac:1,
n:{
eT:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.jf()
y=U.dA()
y.sdX(0,!0)
y.sdM(6.283185307179586)
y.sdO(0)
y.sa9(0,0)
y.sdN(100)
y.sW(0)
y.sdg(0.5)
z.b=y
y=y.gp()
y.toString
x=H.d(z.gbe(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)
y=U.dA()
y.sdX(0,!0)
y.sdM(6.283185307179586)
y.sdO(0)
y.sa9(0,0)
y.sdN(100)
y.sW(0)
y.sdg(0.5)
z.c=y
C.a.h(y.gp().a,x)
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
w=new X.aB(b,!1,!1)
v=z.d
z.d=w
y=new D.B("modifiers",v,w,z,[X.aB])
y.b=!0
z.R(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.B("invertX",y,!1,z,[P.a5])
y.b=!0
z.R(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.B("invertY",y,!1,z,[P.a5])
y.b=!0
z.R(y)}z.c_(c)
return z}}},jg:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.u(a)},
c_:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.C()
z.e=y
z=y}else z=y
y=H.d(this.geJ(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.C()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
i4:[function(a){var z,y,x,w
H.j(a,"$isl")
if(!J.H(this.b,this.a.b.c))return
H.b(a,"$iscW")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.B("zoom",z,w,this,[P.w])
z.b=!0
this.R(z)}},"$1","geJ",4,0,1],
aR:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.e5(x,x,x,1)}return this.f},
$isac:1,
n:{
eU:function(a,b,c,d,e){var z,y,x
z=new U.jg()
z.c=0.01
z.d=0
z.e=0
y=new X.aB(b,!1,!1)
z.b=y
x=new D.B("modifiers",null,y,z,[X.aB])
x.b=!0
z.R(x)
z.c_(c)
return z}}}}],["","",,M,{"^":"",fT:{"^":"al;0e,0f,0a,0b,0c,0d",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
Z:[function(a){var z
H.j(a,"$isl")
z=this.f
if(!(z==null))z.u(a)},function(){return this.Z(null)},"cG","$1","$0","gS",0,2,0],
iv:[function(a,b){var z,y,x,w,v,u,t
z=M.aD
H.u(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.d(x,w)
C.a.h(t.a,x)}}z=new D.bV(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gf7",8,0,20],
iw:[function(a,b){var z,y,x,w,v,u,t
z=M.aD
H.u(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.d(x,w)
C.a.F(t.a,x)}}z=new D.bW(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gf8",8,0,20],
a3:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.as(z,z.length,0,[H.z(z,0)]);z.D();){y=z.d
if(!(y==null))y.a3(a)}this.e=!1},
$asf:function(){return[M.aD]},
$asal:function(){return[M.aD]},
$isaD:1},fV:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
Z:[function(a){var z
H.j(a,"$isl")
z=this.f
if(!(z==null))z.u(a)},function(){return this.Z(null)},"cG","$1","$0","gS",0,2,0],
saW:function(a){var z,y,x
if(a==null)a=new X.hj()
z=this.a
if(z!==a){if(z!=null){z=z.gp()
z.toString
y=H.d(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.a
this.a=a
z=a.gp()
z.toString
y=H.d(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("camera",x,this.a,this,[X.ca])
z.b=!0
this.Z(z)}},
saA:function(a,b){var z,y,x
if(b==null)b=X.cM(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.d(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.d(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("target",x,this.b,this,[X.co])
z.b=!0
this.Z(z)}},
sap:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.d(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.d(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B("technique",x,this.c,this,[O.aS])
z.b=!0
this.Z(z)}},
a3:function(a){var z
a.cq(this.c)
this.b.H(a)
this.a.H(a)
z=this.c
if(z!=null)z.a7(0,a)
this.d.a7(0,a)
this.d.a3(a)
this.a.a1(a)
this.b.a1(a)
a.co()},
$isaD:1,
n:{
cK:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new M.fV()
z.saW(a)
z.saA(0,b)
z.sap(c)
y=E.cL(null,!0,null,"",null,null)
x=F.d_()
w=x.a
v=new V.F(-1,-1,1)
v=v.v(0,Math.sqrt(v.A(v)))
u=w.bl(new V.b3(1,2,4,6),new V.a9(1,0,0,1),new V.U(-1,-1,0),new V.O(0,1),v,null)
w=x.a
v=new V.F(1,-1,1)
v=v.v(0,Math.sqrt(v.A(v)))
t=w.bl(new V.b3(0,3,4,6),new V.a9(0,0,1,1),new V.U(1,-1,0),new V.O(1,1),v,null)
w=x.a
v=new V.F(1,1,1)
v=v.v(0,Math.sqrt(v.A(v)))
s=w.bl(new V.b3(0,2,5,6),new V.a9(0,1,0,1),new V.U(1,1,0),new V.O(1,0),v,null)
w=x.a
v=new V.F(-1,1,1)
v=v.v(0,Math.sqrt(v.A(v)))
r=w.bl(new V.b3(0,2,4,7),new V.a9(1,1,0,1),new V.U(-1,1,0),new V.O(0,0),v,null)
x.d.fW(H.c([u,t,s,r],[F.ao]))
x.ai()
y.sbc(0,x)
z.d=y
z.e=null
return z}}},ha:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
Z:[function(a){var z
H.j(a,"$isl")
z=this.x
if(!(z==null))z.u(a)},function(){return this.Z(null)},"cG","$1","$0","gS",0,2,0],
i9:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.u(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.aJ()
s.a=H.c([],v)
s.c=0
t.sa5(s)}s=t.ga5()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.bV(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","geO",8,0,7],
ia:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.u(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.aJ()
s.a=H.c([],v)
s.c=0
t.sa5(s)}s=t.ga5()
s.toString
H.d(x,w)
C.a.F(s.a,x)}}z=new D.bW(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","geP",8,0,7],
saW:function(a){var z,y,x
if(a==null)a=X.ec(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gp()
z.toString
y=H.d(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.a
this.a=a
z=a.gp()
z.toString
y=H.d(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("camera",x,this.a,this,[X.ca])
z.b=!0
this.Z(z)}},
saA:function(a,b){var z,y,x
if(b==null)b=X.cM(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.d(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.d(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("target",x,this.b,this,[X.co])
z.b=!0
this.Z(z)}},
sap:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.d(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.d(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B("technique",x,this.c,this,[O.aS])
z.b=!0
this.Z(z)}},
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
a3:function(a){var z
a.cq(this.c)
this.b.H(a)
this.a.H(a)
z=this.c
if(z!=null)z.a7(0,a)
for(z=this.d.a,z=new J.as(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a7(0,a)
for(z=this.d.a,z=new J.as(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a3(a)
this.a.toString
a.cy.az()
a.db.az()
this.b.a1(a)
a.co()},
$isaD:1,
n:{
dN:function(a,b,c,d){var z,y
z=new M.ha()
y=O.cb(E.aI)
z.d=y
y.aB(z.geO(),z.geP())
z.e=null
z.f=null
z.r=null
z.x=null
z.saW(a)
z.saA(0,c)
z.sap(d)
return z}}},aD:{"^":"a;"}}],["","",,A,{"^":"",dr:{"^":"a;a,b,c"},fH:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
h9:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
aX:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dL:{"^":"bw;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
a8:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.e3(c)
b.a.uniform1i(b.d,0)}}},e3:{"^":"bw;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aO,0ax,0aP,0bo,0dj,0dk,0bp,0bq,0dl,0dm,0br,0bs,0dn,0dq,0bt,0dr,0ds,0bu,0dt,0du,0bv,0bw,0bx,0dv,0dw,0by,0bz,0dz,0dA,0bA,0dB,0ca,0dC,0cb,0dD,0cc,0dE,0cd,0dF,0ce,0dG,0cf,a,b,0c,0d,0e,0f,0r",
ea:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.c2("")
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
a1.fB(z)
a1.fI(z)
a1.fC(z)
a1.fQ(z)
a1.fR(z)
a1.fK(z)
a1.fV(z)
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
z=new P.c2("")
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
v.fF(z)
v.fA(z)
v.fD(z)
v.fG(z)
v.fO(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fM(z)
v.fN(z)}v.fJ(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fE(z)
v.fL(z)
v.fP(z)
v.fS(z)
v.fT(z)
v.fU(z)
v.fH(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.o])
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
n="vec4("+C.a.B(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.aZ(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.b(this.r.m(0,"invViewMat"),"$isa_")
if(y)this.db=H.b(this.r.m(0,"objMat"),"$isa_")
if(w)this.dx=H.b(this.r.m(0,"viewObjMat"),"$isa_")
this.fr=H.b(this.r.m(0,"projViewObjMat"),"$isa_")
if(a1.x2)this.go=H.b(this.r.m(0,"txt2DMat"),"$isbG")
if(a1.y1)this.id=H.b(this.r.m(0,"txtCubeMat"),"$isa_")
if(a1.y2)this.k1=H.b(this.r.m(0,"colorMat"),"$isa_")
this.k3=H.c([],[A.a_])
y=a1.aO
if(y>0){this.k2=H.j(this.r.m(0,"bendMatCount"),"$isE")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.p(P.n("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.b(l,"$isa_"))}}y=a1.a
if(y!==C.b){this.k4=H.b(this.r.m(0,"emissionClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.r1=H.b(this.r.m(0,"emissionTxt"),"$isa0")
this.rx=H.b(this.r.m(0,"nullEmissionTxt"),"$isE")
break
case C.d:this.r2=H.b(this.r.m(0,"emissionTxt"),"$isaf")
this.rx=H.b(this.r.m(0,"nullEmissionTxt"),"$isE")
break}}y=a1.b
if(y!==C.b){this.ry=H.b(this.r.m(0,"ambientClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.x1=H.b(this.r.m(0,"ambientTxt"),"$isa0")
this.y1=H.b(this.r.m(0,"nullAmbientTxt"),"$isE")
break
case C.d:this.x2=H.b(this.r.m(0,"ambientTxt"),"$isaf")
this.y1=H.b(this.r.m(0,"nullAmbientTxt"),"$isE")
break}}y=a1.c
if(y!==C.b){this.y2=H.b(this.r.m(0,"diffuseClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.aO=H.b(this.r.m(0,"diffuseTxt"),"$isa0")
this.aP=H.b(this.r.m(0,"nullDiffuseTxt"),"$isE")
break
case C.d:this.ax=H.b(this.r.m(0,"diffuseTxt"),"$isaf")
this.aP=H.b(this.r.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a1.d
if(y!==C.b){this.bo=H.b(this.r.m(0,"invDiffuseClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.dj=H.b(this.r.m(0,"invDiffuseTxt"),"$isa0")
this.bp=H.b(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.d:this.dk=H.b(this.r.m(0,"invDiffuseTxt"),"$isaf")
this.bp=H.b(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a1.e
if(y!==C.b){this.bs=H.b(this.r.m(0,"shininess"),"$isQ")
this.bq=H.b(this.r.m(0,"specularClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.dl=H.b(this.r.m(0,"specularTxt"),"$isa0")
this.br=H.b(this.r.m(0,"nullSpecularTxt"),"$isE")
break
case C.d:this.dm=H.b(this.r.m(0,"specularTxt"),"$isaf")
this.br=H.b(this.r.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.e:this.dn=H.b(this.r.m(0,"bumpTxt"),"$isa0")
this.bt=H.b(this.r.m(0,"nullBumpTxt"),"$isE")
break
case C.d:this.dq=H.b(this.r.m(0,"bumpTxt"),"$isaf")
this.bt=H.b(this.r.m(0,"nullBumpTxt"),"$isE")
break}if(a1.dy){this.dr=H.b(this.r.m(0,"envSampler"),"$isaf")
this.ds=H.b(this.r.m(0,"nullEnvTxt"),"$isE")
y=a1.r
if(y!==C.b){this.bu=H.b(this.r.m(0,"reflectClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.dt=H.b(this.r.m(0,"reflectTxt"),"$isa0")
this.bv=H.b(this.r.m(0,"nullReflectTxt"),"$isE")
break
case C.d:this.du=H.b(this.r.m(0,"reflectTxt"),"$isaf")
this.bv=H.b(this.r.m(0,"nullReflectTxt"),"$isE")
break}}y=a1.x
if(y!==C.b){this.bw=H.b(this.r.m(0,"refraction"),"$isQ")
this.bx=H.b(this.r.m(0,"refractClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.dv=H.b(this.r.m(0,"refractTxt"),"$isa0")
this.by=H.b(this.r.m(0,"nullRefractTxt"),"$isE")
break
case C.d:this.dw=H.b(this.r.m(0,"refractTxt"),"$isaf")
this.by=H.b(this.r.m(0,"nullRefractTxt"),"$isE")
break}}}y=a1.y
if(y!==C.b){this.bz=H.b(this.r.m(0,"alpha"),"$isQ")
switch(y){case C.b:break
case C.f:break
case C.e:this.dz=H.b(this.r.m(0,"alphaTxt"),"$isa0")
this.bA=H.b(this.r.m(0,"nullAlphaTxt"),"$isE")
break
case C.d:this.dA=H.b(this.r.m(0,"alphaTxt"),"$isaf")
this.bA=H.b(this.r.m(0,"nullAlphaTxt"),"$isE")
break}}this.ca=H.c([],[A.eL])
this.cb=H.c([],[A.eM])
this.cc=H.c([],[A.eN])
this.cd=H.c([],[A.eO])
this.ce=H.c([],[A.eP])
this.cf=H.c([],[A.eQ])
if(a1.k2){y=a1.z
if(y>0){this.dB=H.j(this.r.m(0,"dirLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.ca;(x&&C.a).h(x,new A.eL(m,l,k))}}y=a1.Q
if(y>0){this.dC=H.j(this.r.m(0,"pntLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isI")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isQ")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isQ")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isQ")
x=this.cb;(x&&C.a).h(x,new A.eM(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dD=H.j(this.r.m(0,"spotLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isI")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isQ")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isQ")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isQ")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isQ")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isQ")
x=this.cc;(x&&C.a).h(x,new A.eN(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dE=H.j(this.r.m(0,"txtDirLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isI")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isI")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isE")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isa0")
x=this.cd;(x&&C.a).h(x,new A.eO(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dF=H.j(this.r.m(0,"txtPntLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isbG")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isE")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isQ")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isQ")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isQ")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isaf")
x=this.ce;(x&&C.a).h(x,new A.eP(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dG=H.j(this.r.m(0,"txtSpotLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isI")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isI")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isE")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isI")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isQ")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isQ")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(c,"$isQ")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(b,"$isQ")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a,"$isQ")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a0,"$isa0")
x=this.cf;(x&&C.a).h(x,new A.eQ(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
a8:function(a,b,c){b.a.uniform1i(b.d,1)},
af:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
hI:function(a,b){var z,y
z=a.ax
y=new A.e3(b,z)
y.aS(b,z)
y.ea(a,b)
return y}}},hL:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aO,ax,aP",
fB:function(a){var z,y,x
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
fI:function(a){var z
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
fC:function(a){var z
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
fQ:function(a){var z,y
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
fR:function(a){var z,y
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
fK:function(a){var z
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
fV:function(a){var z
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
ar:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cD(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fF:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ar(a,z,"emission")
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
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
fA:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ar(a,z,"ambient")
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
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
fD:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ar(a,z,"diffuse")
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
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fG:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ar(a,z,"invDiffuse")
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
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
fO:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ar(a,z,"specular")
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
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
fJ:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
case C.e:z+="uniform sampler2D bumpTxt;\n"
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
fM:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ar(a,z,"reflect")
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
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fN:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ar(a,z,"refract")
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
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fE:function(a){var z,y
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
fL:function(a){var z,y
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
fP:function(a){var z,y
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
fS:function(a){var z,y,x
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
fT:function(a){var z,y,x
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
fU:function(a){var z,y,x
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
fH:function(a){var z
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
i:function(a){return this.ax}},eL:{"^":"a;a,b,c"},eO:{"^":"a;a,b,c,d,e,f,r,x"},eM:{"^":"a;a,b,c,d,e,f,r"},eP:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eN:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eQ:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},e7:{"^":"bw;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r"},hY:{"^":"a;a,b,c,d,e,f",
i:function(a){return this.e},
n:{
e8:function(a){var z,y,x,w,v,u,t
z=a!==C.b
y=a===C.e
x=a===C.d
w="Normal_"+C.h.i(a.a)
v=$.$get$a1()
u=$.$get$ax()
u=v.a|u.a
t=new Z.ap(u)
if(z)t=new Z.ap(u|$.$get$aw().a)
if(y)t=new Z.ap(t.a|$.$get$aj().a)
return new A.hY(a,z,y,x,w,x?new Z.ap(t.a|$.$get$ay().a):t)}}},bw:{"^":"cD;",
aS:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
aZ:function(a,b,c){var z,y,x
this.c=this.cR(b,35633)
this.d=this.cR(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fn(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.p(P.n("Failed to link shader: "+H.k(x)))}this.fo()
this.fq()},
H:function(a){a.a.useProgram(this.e)
this.f.h9()},
cR:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fn(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.i(P.n("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
fo:function(){var z,y,x,w,v,u
z=H.c([],[A.dr])
y=this.a
x=H.S(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dr(y,v.name,u))}this.f=new A.fH(z)},
fq:function(){var z,y,x,w,v,u
z=H.c([],[A.a7])
y=this.a
x=H.S(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.h6(v.type,v.size,v.name,u))}this.r=new A.j7(z)},
aG:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.E(z,y,b,c)
else return A.d5(z,y,b,a,c)},
ew:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a0(z,y,b,c)
else return A.d5(z,y,b,a,c)},
ex:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.af(z,y,b,c)
else return A.d5(z,y,b,a,c)},
bk:function(a,b){return new P.f_(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
h6:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.Q(this.a,this.e,c,d)
case 35664:return new A.bF(this.a,this.e,c,d)
case 35665:return new A.I(this.a,this.e,c,d)
case 35666:return new A.eK(this.a,this.e,c,d)
case 35667:return new A.j4(this.a,this.e,c,d)
case 35668:return new A.j5(this.a,this.e,c,d)
case 35669:return new A.j6(this.a,this.e,c,d)
case 35674:return new A.j9(this.a,this.e,c,d)
case 35675:return new A.bG(this.a,this.e,c,d)
case 35676:return new A.a_(this.a,this.e,c,d)
case 35678:return this.ew(b,c,d)
case 35680:return this.ex(b,c,d)
case 35670:throw H.i(this.bk("BOOL",c))
case 35671:throw H.i(this.bk("BOOL_VEC2",c))
case 35672:throw H.i(this.bk("BOOL_VEC3",c))
case 35673:throw H.i(this.bk("BOOL_VEC4",c))
default:throw H.i(P.n("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cc:{"^":"a;a,b",
i:function(a){return this.b}},ei:{"^":"bw;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},eq:{"^":"bw;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
ee:function(a,b){var z,y,x,w,v
this.aZ(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.iP(a))
this.x=this.f.j(0,"posAttr")
this.y=H.b(this.r.m(0,"txtCount"),"$isE")
this.z=H.b(this.r.m(0,"backClr"),"$iseK")
this.Q=H.c([],[A.a0])
this.ch=H.c([],[A.a_])
z=[A.bF]
this.cx=H.c([],z)
this.cy=H.c([],z)
this.db=H.c([],z)
this.dx=H.c([],z)
this.dy=H.c([],[A.E])
for(y=0;y<a;++y){z=this.Q
x=this.r
w="txt"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa0"))
z=this.ch
x=this.r
w="clrMat"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa_"))
z=this.cx
x=this.r
w="srcLoc"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbF"))
z=this.cy
x=this.r
w="srcSize"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbF"))
z=this.db
x=this.r
w="destLoc"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbF"))
z=this.dx
x=this.r
w="destSize"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbF"))
z=this.dy
x=this.r
w="flip"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isE"))}},
n:{
iP:function(a){var z,y
for(z=0,y="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";z<a;++z)y=y+("uniform sampler2D txt"+z+";\n")+("uniform mat4 clrMat"+z+";\n")+("uniform vec2 srcLoc"+z+";\n")+("uniform vec2 srcSize"+z+";\n")+("uniform vec2 destLoc"+z+";\n")+("uniform vec2 destSize"+z+";\n")+("uniform int flip"+z+";\n")
y+"\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n"
y+="\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n   vec4 clrAccum = backClr;\n"
for(z=0;z<a;++z)y=y+("   if(txtCount <= "+z+") return clrAccum;\n")+("   clrAccum = layout(clrAccum, txt"+z+", clrMat"+z+", srcLoc"+z+", srcSize"+z+", destLoc"+z+", destSize"+z+", flip"+z+");\n")
y+"   return clrAccum;\n"
y+"   return clrAccum;\n}\n"
y+"   return clrAccum;\n}\n\n"
y+"   return clrAccum;\n}\n\nvoid main()\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n"
y+="   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n}\n"
return y.charCodeAt(0)==0?y:y},
iO:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.eq(b,z)
y.aS(b,z)
y.ee(a,b)
return y}}},a7:{"^":"a;"},j7:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.i(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
hb:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.hb("\n")}},E:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},j4:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},j5:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},j6:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},j3:{"^":"a7;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
n:{
d5:function(a,b,c,d,e){var z=new A.j3(a,b,c,e)
z.f=d
z.e=P.hA(d,0,!1,P.A)
return z}}},Q:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},bF:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},I:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},eK:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},j9:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},bG:{"^":"a7;a,b,c,d",
V:function(a){var z=new Float32Array(H.b9(H.u(a,"$ise",[P.w],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},a_:{"^":"a7;a,b,c,d",
V:function(a){var z=new Float32Array(H.b9(H.u(a,"$ise",[P.w],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},a0:{"^":"a7;a,b,c,d",
e3:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},af:{"^":"a7;a,b,c,d",
cB:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
cu:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bL:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.F(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.F(t+h,s+f,r+g)
z.b=q
p=new V.F(t-h,s-f,r-g)
z.c=p
o=new V.F(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cu(y)
k=F.cu(z.b)
j=F.fz(d,e,new F.kR(z,F.cu(z.c),F.cu(z.d),k,l,c),b)
if(j!=null)a.cm(j)},
ly:function(a,b,c,d){return F.l7(c,a,d,b,new F.lz())},
l7:function(a,b,c,d,e){var z=F.fz(a,b,new F.l8(H.d(e,{func:1,ret:V.U,args:[P.w]}),d,b,c),null)
if(z==null)return
z.ai()
z.ho(new F.jo(),new F.hX())
return z},
fz:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[F.ao,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.d_()
y=H.c([],[F.ao])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cr(null,null,new V.a9(u,0,0,1),null,null,new V.O(w,1),null,null,0)
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
t=F.cr(null,null,new V.a9(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c8(d))}}z.d.fX(a+1,b+1,y)
return z},
kR:{"^":"v:21;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cl(z.b,b).cl(z.d.cl(z.c,b),c)
a.sa9(0,new V.U(y.a,y.b,y.c))
a.shP(y.v(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
x=new V.b3(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.H(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.Y()}}},
lz:{"^":"v:36;",
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}},
l8:{"^":"v:21;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dn(y.$1(z),x)
x=J.dn(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.F(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.A(x)))
u=new V.F(1,0,0)
y=v.av(!v.q(0,u)?new V.F(0,0,1):u)
t=y.v(0,Math.sqrt(y.A(y)))
y=t.av(v)
u=y.v(0,Math.sqrt(y.A(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa9(0,w.C(0,new V.U(y.a-x.a,y.b-x.b,y.c-x.c)))}},
am:{"^":"a;0a,0b,0c,0d,0e",
aw:function(){if(!this.gaY()){C.a.F(this.a.a.d.b,this)
this.a.a.Y()}this.bU()
this.bV()
this.fe()},
fl:function(a){this.a=a
C.a.h(a.d.b,this)},
fm:function(a){this.b=a
C.a.h(a.d.c,this)},
fn:function(a){this.c=a
C.a.h(a.d.d,this)},
bU:function(){var z=this.a
if(z!=null){C.a.F(z.d.b,this)
this.a=null}},
bV:function(){var z=this.b
if(z!=null){C.a.F(z.d.c,this)
this.b=null}},
fe:function(){var z=this.c
if(z!=null){C.a.F(z.d.d,this)
this.c=null}},
gaY:function(){return this.a==null||this.b==null||this.c==null},
ep:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.F(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.dJ())return
return v.v(0,Math.sqrt(v.A(v)))},
es:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.F(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.A(z)))
z=w.L(0,y)
z=new V.F(z.a,z.b,z.c)
z=v.av(z.v(0,Math.sqrt(z.A(z))))
return z.v(0,Math.sqrt(z.A(z)))},
c6:function(){if(this.d!=null)return!0
var z=this.ep()
if(z==null){z=this.es()
if(z==null)return!1}this.d=z
this.a.a.Y()
return!0},
eo:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.F(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.dJ())return
return v.v(0,Math.sqrt(v.A(v)))},
er:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.F(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.M(0)}else{l=(z-q.b)/n
z=r.L(0,u).k(0,l).C(0,u).L(0,x)
z=new V.F(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.M(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.A(z)))
z=k.av(m)
z=z.v(0,Math.sqrt(z.A(z))).av(k)
m=z.v(0,Math.sqrt(z.A(z)))}return m},
c5:function(){if(this.e!=null)return!0
var z=this.eo()
if(z==null){z=this.er()
if(z==null)return!1}this.e=z
this.a.a.Y()
return!0},
gh1:function(a){if(J.H(this.a,this.b))return!0
if(J.H(this.b,this.c))return!0
if(J.H(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y
if(this.gaY())return a+"disposed"
z=a+C.i.ah(J.a8(this.a.e),0)+", "+C.i.ah(J.a8(this.b.e),0)+", "+C.i.ah(J.a8(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
J:function(){return this.w("")},
n:{
bl:function(a,b,c){var z,y,x
z=new F.am()
y=a.a
if(y==null)H.p(P.n("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.n("May not create a face with vertices attached to different shapes."))
z.fl(a)
z.fm(b)
z.fn(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Y()
return z}}},
hd:{"^":"a;"},
iA:{"^":"hd;",
b0:function(a,b,c){var z,y
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
cT:{"^":"a;0a,0b",
aw:function(){if(!this.gaY()){C.a.F(this.a.a.c.b,this)
this.a.a.Y()}this.bU()
this.bV()},
bU:function(){var z=this.a
if(z!=null){C.a.F(z.c.b,this)
this.a=null}},
bV:function(){var z=this.b
if(z!=null){C.a.F(z.c.c,this)
this.b=null}},
gaY:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){if(this.gaY())return a+"disposed"
return a+C.i.ah(J.a8(this.a.e),0)+", "+C.i.ah(J.a8(this.b.e),0)},
J:function(){return this.w("")}},
hu:{"^":"a;"},
j2:{"^":"hu;",
b0:function(a,b,c){var z,y
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
cY:{"^":"a;0a",
aw:function(){var z=this.a
if(z!=null){C.a.F(z.a.b.b,this)
this.a.a.Y()}this.fd()},
fd:function(){var z=this.a
if(z!=null){C.a.F(z.b.b,this)
this.a=null}},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.ah(J.a8(z.e),0)},
J:function(){return this.w("")}},
eh:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
cm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.t()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.h5())}this.a.t()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cY()
if(r.a==null)H.p(P.n("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.u(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cT()
s=p.a
if(s==null)H.p(P.n("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.n("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.u(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bl(p,o,l)}z=this.e
if(!(z==null))z.ao(0)},
ai:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ai()||!1
if(!this.a.ai())y=!1
z=this.e
if(!(z==null))z.ao(0)
return y},
aJ:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aJ()||!1
if(!this.a.aJ())y=!1
z=this.e
if(!(z==null))z.ao(0)
return y},
bn:function(){var z=this.e
if(!(z==null))++z.c
this.a.bn()
z=this.e
if(!(z==null))z.ao(0)
return!0},
eB:function(a,b,c,d,e){var z,y,x
H.u(d,"$ise",[F.ao],"$ase")
H.u(e,"$ise",[P.A],"$ase")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
if(a.b0(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
ho:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ao],x=[P.A];y>=0;--y){w=this.a.c
if(y>=w.length)return H.h(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.eB(a,v,y,u,t))b.cm(u)}this.a.t()
this.c.cr()
this.d.cr()
this.b.hG()
this.c.cs(new F.j2())
this.d.cs(new F.iA())
z=this.e
if(!(z==null))z.ao(0)},
aV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$a1()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$ax().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
if((x&$.$get$aj().a)!==0)++w
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$bH().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$b7().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gcC(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dv])
for(r=0,q=0;q<w;++q){p=b.h_(q)
o=p.gcC(p)
C.a.a4(s,q,new Z.dv(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].hj(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a4(t,l,m[k]);++l}}r+=o}H.u(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.b9(t)),35044)
y.bindBuffer(34962,null)
i=new Z.bi(new Z.eY(34962,j),s,b)
i.b=H.c([],[Z.ch])
if(this.b.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)}f=Z.d6(y,34963,H.u(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.ch(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)}f=Z.d6(y,34963,H.u(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.ch(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.t()
C.a.h(h,g.e)}f=Z.d6(y,34963,H.u(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.ch(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.B(z,"\n")},
aj:function(a){var z=this.e
if(!(z==null))z.u(a)},
Y:function(){return this.aj(null)},
n:{
d_:function(){var z,y
z=new F.eh()
y=new F.jj(z)
y.b=!1
y.c=H.c([],[F.ao])
z.a=y
y=new F.iv(z)
y.b=H.c([],[F.cY])
z.b=y
y=new F.iu(z)
y.b=H.c([],[F.cT])
z.c=y
y=new F.it(z)
y.b=H.c([],[F.am])
z.d=y
z.e=null
return z}}},
it:{"^":"a;a,0b",
fW:function(a){var z,y,x,w,v
H.u(a,"$ise",[F.ao],"$ase")
z=H.c([],[F.am])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bl(y,w,v))}return z},
fX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$ise",[F.ao],"$ase")
z=H.c([],[F.am])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.h(c,x)
r=c[x];++x
if(x>=s)return H.h(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.h(c,p)
o=c[p]
if(y<0||y>=s)return H.h(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bl(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bl(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bl(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bl(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cs:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b0(0,v,t)){v.aw()
break}}}}},
cr:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gh1(x)
if(y)x.aw()}},
ai:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c6())x=!1
return x},
aJ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c5())x=!1
return x},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
iu:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cs:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b0(0,v,t)){v.aw()
break}}}}},
cr:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.H(x.a,x.b)
if(y)x.aw()}},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].w(a+(""+x+". ")))}return C.a.B(z,"\n")},
J:function(){return this.w("")}},
iv:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hG:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aw()}},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
ao:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c8:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cr(this.cx,x,u,z,y,w,v,a,t)},
h5:function(){return this.c8(null)},
sa9:function(a,b){var z
if(!J.H(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Y()}},
shq:function(a){var z
a=a.v(0,Math.sqrt(a.A(a)))
if(!J.H(this.r,a)){this.r=a
z=this.a
if(z!=null)z.Y()}},
shP:function(a){var z
if(!J.H(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Y()}},
hj:function(a){var z,y
z=J.K(a)
if(z.q(a,$.$get$a1())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$ax())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aw())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aj())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.q(a,$.$get$ay())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bH())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bI())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$b7()))return H.c([this.ch],[P.w])
else if(z.q(a,$.$get$aM())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
c6:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.N(0,new F.jt(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.ao(0)}return!0},
c5:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.N(0,new F.js(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.ao(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y,x
z=H.c([],[P.o])
C.a.h(z,C.i.ah(J.a8(this.e),0))
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
C.a.h(z,V.M(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.B(z,", ")
return a+"{"+x+"}"},
J:function(){return this.w("")},
n:{
cr:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ao()
y=new F.jr(z)
y.b=H.c([],[F.cY])
z.b=y
y=new F.jn(z)
x=[F.cT]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.jk(z)
x=[F.am]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eV()
z.e=0
y=$.$get$a1()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ax().a)!==0?e:null
z.x=(x&$.$get$aw().a)!==0?b:null
z.y=(x&$.$get$aj().a)!==0?f:null
z.z=(x&$.$get$ay().a)!==0?g:null
z.Q=(x&$.$get$eW().a)!==0?c:null
z.ch=(x&$.$get$b7().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
jt:{"^":"v:8;a",
$1:function(a){var z,y
H.j(a,"$isam")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
js:{"^":"v:8;a",
$1:function(a){var z,y
H.j(a,"$isam")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
jj:{"^":"a;a,0b,0c",
t:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.i(P.n("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Y()
return!0},
fY:function(a,b,c,d,e,f,g,h,i){var z=F.cr(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bl:function(a,b,c,d,e,f){return this.fY(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
ai:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c6()
return!0},
aJ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c5()
return!0},
bn:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.H(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.u(null)}}}}return!0},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
this.t()
z=H.c([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
jk:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.h(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.h(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
N:function(a,b){H.d(b,{func:1,ret:-1,args:[F.am]})
C.a.N(this.b,b)
C.a.N(this.c,new F.jl(this,b))
C.a.N(this.d,new F.jm(this,b))},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
jl:{"^":"v:8;a,b",
$1:function(a){H.j(a,"$isam")
if(!J.H(a.a,this.a))this.b.$1(a)}},
jm:{"^":"v:8;a,b",
$1:function(a){var z
H.j(a,"$isam")
z=this.a
if(!J.H(a.a,z)&&!J.H(a.b,z))this.b.$1(a)}},
jn:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
jp:{"^":"a;"},
jo:{"^":"jp;",
b0:function(a,b,c){return J.H(b.f,c.f)}},
jq:{"^":"a;"},
hX:{"^":"jq;",
cm:function(a){var z,y,x,w
H.u(a,"$ise",[F.ao],"$ase")
z=new V.F(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.F(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.A(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x)a[x].shq(z)
return}},
jr:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}}}],["","",,O,{"^":"",h1:{"^":"aS;0a,0b,0c,0d,0e,0f,0aa:r@",
gp:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
G:function(a){var z=this.r
if(!(z==null))z.u(a)},
a6:function(){return this.G(null)},
sde:function(a){var z=this.b
if(z==null?a!=null:z!==a){this.b=a
this.a6()}},
sda:function(a){var z=this.c
if(z==null?a!=null:z!==a){this.c=a
this.a6()}},
sd9:function(a){var z=a==null?V.aA():a
this.f=z
if(!z.q(0,a)){this.f=a
this.a6()}},
a7:function(a,b){},
I:function(a,b){H.u(a,"$ise",[T.aL],"$ase")
if(b!=null)if(!C.a.au(a,b)){b.a=a.length
C.a.h(a,b)}},
b5:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.j(a.fr.j(0,"Distort"),"$isdL")
if(z==null){y=a.a
z=new A.dL(y,"Distort")
z.aS(y,"Distort")
z.aZ(0,$.h3,$.h2)
z.x=z.f.j(0,"posAttr")
z.y=z.f.j(0,"txt2DAttr")
z.z=H.b(z.r.m(0,"projViewObjMat"),"$isa_")
z.Q=H.b(z.r.m(0,"colorTxt2DMat"),"$isbG")
z.ch=H.b(z.r.m(0,"bumpTxt2DMat"),"$isbG")
z.cx=H.b(z.r.m(0,"colorTxt"),"$isa0")
z.cy=H.b(z.r.m(0,"bumpTxt"),"$isa0")
z.db=H.b(z.r.m(0,"nullColorTxt"),"$isE")
z.dx=H.b(z.r.m(0,"nullBumpTxt"),"$isE")
z.dy=H.b(z.r.m(0,"bumpMat"),"$isa_")
a.aU(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$a1()
v=$.$get$aj()
v=y.aV(new Z.c4(x),new Z.ap(w.a|v.a))
v.a_($.$get$a1()).e=this.a.x.c
v.a_($.$get$aj()).e=this.a.y.c
b.e=v}u=H.c([],[T.aL])
this.I(u,this.b)
this.I(u,this.c)
for(t=0;t<u.length;++t)u[t].H(a)
y=this.a
y.H(a)
x=this.b
y.a8(y.cx,y.db,x)
x=this.c
y.a8(y.cy,y.dx,x)
x=a.gcp()
w=y.z
w.toString
w.V(x.P(0,!0))
x=this.d
w=y.Q
w.toString
w.V(x.P(0,!0))
x=this.e
w=y.ch
w.toString
w.V(x.P(0,!0))
x=this.f
y=y.dy
y.toString
y.V(x.P(0,!0))
y=b.e
if(y instanceof Z.bi){y.H(a)
y.a3(a)
y.a1(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.aX()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},hH:{"^":"aS;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0aa:dy@",
gp:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
G:[function(a){var z
H.j(a,"$isl")
z=this.dy
if(!(z==null))z.u(a)},function(){return this.G(null)},"a6","$1","$0","gab",0,2,0],
fh:[function(a){H.j(a,"$isl")
this.a=null
this.G(a)},function(){return this.fh(null)},"iA","$1","$0","gfg",0,2,0],
i6:[function(a,b){var z=V.ah
z=new D.bV(a,H.u(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.G(z)},"$2","geL",8,0,22],
i7:[function(a,b){var z=V.ah
z=new D.bW(a,H.u(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.G(z)},"$2","geM",8,0,22],
cO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.a2(z.e.length+3,4)*4
x=C.h.a2(z.f.length+3,4)*4
w=C.h.a2(z.r.length+3,4)*4
v=C.h.a2(z.x.length+3,4)*4
u=C.h.a2(z.y.length+3,4)*4
t=C.h.a2(z.z.length+3,4)*4
s=C.h.a2(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+"_"
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
a=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a0=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$a1()
if(c){z=$.$get$ax()
a6=new Z.ap(a6.a|z.a)}if(b){z=$.$get$aw()
a6=new Z.ap(a6.a|z.a)}if(a){z=$.$get$aj()
a6=new Z.ap(a6.a|z.a)}if(a0){z=$.$get$ay()
a6=new Z.ap(a6.a|z.a)}if(a2){z=$.$get$aM()
a6=new Z.ap(a6.a|z.a)}return new A.hL(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
I:function(a,b){H.u(a,"$ise",[T.aL],"$ase")},
a7:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.as(z,z.length,0,[H.z(z,0)]);z.D();){y=z.d
x=new V.F(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cu(x)}}},
b5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cO()
y=H.j(a.fr.j(0,z.ax),"$ise3")
if(y==null){y=A.hI(z,a.a)
a.aU(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aP
z=b.e
if(!(z instanceof Z.bi)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.ai()
v=x.r2
if(v)b.d.aJ()
u=x.ry
if(u)b.d.bn()
t=b.d.aV(new Z.c4(a.a),w)
t.a_($.$get$a1()).e=this.a.y.c
if(z)t.a_($.$get$ax()).e=this.a.Q.c
if(v)t.a_($.$get$aw()).e=this.a.z.c
if(x.rx)t.a_($.$get$aj()).e=this.a.ch.c
if(u)t.a_($.$get$ay()).e=this.a.cx.c
if(x.x1)t.a_($.$get$aM()).e=this.a.cy.c
b.e=t}z=T.aL
s=H.c([],[z])
this.a.H(a)
if(x.fx){v=this.a
u=a.dx
u=u.gT(u)
v=v.db
v.toString
v.V(u.P(0,!0))}if(x.fy){v=this.a
u=a.gdW()
v=v.dx
v.toString
v.V(u.P(0,!0))}v=this.a
u=a.gcp()
v=v.fr
v.toString
v.V(u.P(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.V(u.P(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.V(u.P(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.V(C.A.P(u,!0))}if(x.aO>0){r=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,r)
for(v=[P.w],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.h(p,q)
p=p[q]
u.toString
H.j(p,"$isah")
u=u.k3
if(q>=u.length)return H.h(u,q)
u=u[q]
o=new Float32Array(H.b9(H.u(p.P(0,!0),"$ise",v,"$ase")))
u.a.uniformMatrix4fv(u.d,!1,o)}}switch(x.a){case C.b:break
case C.f:v=this.a
u=this.f.f
v=v.k4
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.I(s,this.f.d)
v=this.a
u=this.f.d
v.a8(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.I(s,this.f.e)
v=this.a
u=this.f.e
v.af(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.f:v=this.a
u=this.r.f
v=v.ry
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.I(s,this.r.d)
v=this.a
u=this.r.d
v.a8(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.I(s,this.r.e)
v=this.a
u=this.r.e
v.af(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.c){case C.b:break
case C.f:v=this.a
u=this.x.f
v=v.y2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.I(s,this.x.d)
v=this.a
u=this.x.d
v.a8(v.aO,v.aP,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.I(s,this.x.e)
v=this.a
u=this.x.e
v.af(v.ax,v.aP,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.d){case C.b:break
case C.f:v=this.a
u=this.y.f
v=v.bo
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.I(s,this.y.d)
v=this.a
u=this.y.d
v.a8(v.dj,v.bp,u)
u=this.a
v=this.y.f
u=u.bo
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.I(s,this.y.e)
v=this.a
u=this.y.e
v.af(v.dk,v.bp,u)
u=this.a
v=this.y.f
u=u.bo
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
u=this.z.f
v=v.bq
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bs
u.a.uniform1f(u.d,n)
break
case C.e:this.I(s,this.z.d)
v=this.a
u=this.z.d
v.a8(v.dl,v.br,u)
u=this.a
v=this.z.f
u=u.bq
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bs
v.a.uniform1f(v.d,n)
break
case C.d:this.I(s,this.z.e)
v=this.a
u=this.z.e
v.af(v.dm,v.br,u)
u=this.a
v=this.z.f
u=u.bq
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bs
v.a.uniform1f(v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.dB
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.ca
if(l>=p.length)return H.h(p,l)
i=p[l]
p=m.cu(j.a)
n=p.a
h=p.b
g=p.c
g=p.v(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.dC
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.cb
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb4(j)
n=i.b
h=p.gcv(p)
g=p.gcw(p)
p=p.gcz(p)
n.a.uniform3f(n.d,h,g,p)
p=m.ba(j.gb4(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.gam(j)
g=i.d
h=p.gbC()
n=p.gbb()
p=p.gbm()
g.a.uniform3f(g.d,h,n,p)
p=j.gc0()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gc1()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gc2()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.dD
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.cc
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb4(j)
n=i.b
h=p.gcv(p)
g=p.gcw(p)
p=p.gcz(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gc9(j).iG()
g=i.c
h=p.gaL(p)
n=p.gaM(p)
p=p.gaN()
g.a.uniform3f(g.d,h,n,p)
p=m.ba(j.gb4(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gam(j)
n=i.e
h=p.gbC()
g=p.gbb()
p=p.gbm()
n.a.uniform3f(n.d,h,g,p)
p=j.giF()
g=i.f
g.a.uniform1f(g.d,p)
p=j.giE()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gc0()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gc1()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gc2()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.dE
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
n=this.a.cd
if(l>=n.length)return H.h(n,l)
i=n[l]
n=j.gb7()
H.u(s,"$ise",p,"$ase")
if(!C.a.au(s,n)){n.sdI(0,s.length)
C.a.h(s,n)}n=j.gc9(j)
h=i.d
g=n.gaL(n)
f=n.gaM(n)
n=n.gaN()
h.a.uniform3f(h.d,g,f,n)
n=j.ghV()
f=i.b
g=n.gaL(n)
h=n.gaM(n)
n=n.gaN()
f.a.uniform3f(f.d,g,h,n)
n=j.gb6(j)
h=i.c
g=n.gaL(n)
f=n.gaM(n)
n=n.gaN()
h.a.uniform3f(h.d,g,f,n)
n=m.cu(j.gc9(j))
f=n.a
g=n.b
h=n.c
h=n.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gam(j)
g=i.f
f=h.gbC()
n=h.gbb()
h=h.gbm()
g.a.uniform3f(g.d,f,n,h)
h=j.gb7()
n=h.gdL(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.gcU()
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gcT())
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.dF
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.y,u=v.length,p=[P.w],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.ce
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gb7()
H.u(s,"$ise",n,"$ase")
if(!C.a.au(s,h)){h.sdI(0,s.length)
C.a.h(s,h)}e=m.k(0,j.gT(j))
h=j.gT(j).ba(new V.U(0,0,0))
g=i.b
f=h.gcv(h)
d=h.gcw(h)
h=h.gcz(h)
g.a.uniform3f(g.d,f,d,h)
h=e.ba(new V.U(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cj(0)
d=i.d
o=new Float32Array(H.b9(H.u(new V.b2(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).P(0,!0),"$ise",p,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.gam(j)
h=i.e
f=d.gbC()
g=d.gbb()
d=d.gbm()
h.a.uniform3f(h.d,f,g,d)
d=j.gb7()
h=d.gdL(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcU()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gcT())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gc0()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gc1()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gc2()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.dG
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.cf
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb7()
H.u(s,"$ise",z,"$ase")
if(!C.a.au(s,p)){p.sdI(0,s.length)
C.a.h(s,p)}p=j.gb4(j)
n=i.b
h=p.gcv(p)
g=p.gcw(p)
p=p.gcz(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gc9(j)
g=i.c
h=p.gaL(p)
n=p.gaM(p)
p=p.gaN()
g.a.uniform3f(g.d,h,n,p)
p=j.ghV()
n=i.d
h=p.gaL(p)
g=p.gaM(p)
p=p.gaN()
n.a.uniform3f(n.d,h,g,p)
p=j.gb6(j)
g=i.e
h=p.gaL(p)
n=p.gaM(p)
p=p.gaN()
g.a.uniform3f(g.d,h,n,p)
p=m.ba(j.gb4(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gb7()
n=p.gdL(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.gcU()
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gcT())
p=i.x
p.a.uniform1i(p.d,0)}p=j.gam(j)
n=i.y
h=p.gbC()
g=p.gbb()
p=p.gbm()
n.a.uniform3f(n.d,h,g,p)
p=j.giM()
g=i.z
g.a.uniform1f(g.d,p)
p=j.giN()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gc0()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gc1()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gc2()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.e:this.I(s,this.Q.d)
z=this.a
v=this.Q.d
z.a8(z.dn,z.bt,v)
break
case C.d:this.I(s,this.Q.e)
z=this.a
v=this.Q.e
z.af(z.dq,z.bt,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gT(v).cj(0)
a.Q=v}z=z.fy
z.toString
z.V(v.P(0,!0))}if(x.dy){this.I(s,this.ch)
z=this.a
v=this.ch
z.af(z.dr,z.ds,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bu
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.e:this.I(s,this.cx.d)
z=this.a
v=this.cx.d
z.a8(z.dt,z.bv,v)
v=this.a
z=this.cx.f
v=v.bu
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.d:this.I(s,this.cx.e)
z=this.a
v=this.cx.e
z.af(z.du,z.bv,v)
v=this.a
z=this.cx.f
v=v.bu
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
v=this.cy.f
z=z.bx
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bw
v.a.uniform1f(v.d,p)
break
case C.e:this.I(s,this.cy.d)
z=this.a
v=this.cy.d
z.a8(z.dv,z.by,v)
v=this.a
z=this.cy.f
v=v.bx
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bw
z.a.uniform1f(z.d,p)
break
case C.d:this.I(s,this.cy.e)
z=this.a
v=this.cy.e
z.af(z.dw,z.by,v)
v=this.a
z=this.cy.f
v=v.bx
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bw
z.a.uniform1f(z.d,p)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.f:z=this.a
u=this.db.f
z=z.bz
z.a.uniform1f(z.d,u)
break
case C.e:this.I(s,this.db.d)
z=this.a
u=this.db.d
z.a8(z.dz,z.bA,u)
u=this.a
z=this.db.f
u=u.bz
u.a.uniform1f(u.d,z)
break
case C.d:this.I(s,this.db.e)
z=this.a
u=this.db.e
z.af(z.dA,z.bA,u)
u=this.a
z=this.db.f
u=u.bz
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(q=0;q<s.length;++q)s[q].H(a)
z=b.e
z.H(a)
z.a3(a)
z.a1(a)
if(v)a.a.disable(3042)
for(q=0;q<s.length;++q)s[q].a1(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.aX()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cO().ax}},hJ:{"^":"cU;0f,a,b,0c,0d,0e"},cU:{"^":"a;",
bh:["e8",function(){}]},hK:{"^":"cU;a,b,0c,0d,0e"},b1:{"^":"cU;0f,a,b,0c,0d,0e",
d2:function(a){var z,y
if(!J.H(this.f,a)){z=this.f
this.f=a
y=new D.B(this.b+".color",z,a,this,[V.T])
y.b=!0
this.a.G(y)}},
bh:["bG",function(){this.e8()
this.d2(new V.T(1,1,1))}],
sam:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.bh()
z=this.a
z.a=null
z.G(null)}this.d2(b)}},hM:{"^":"b1;0ch,0f,a,b,0c,0d,0e",
fk:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.G(z)}},
bh:function(){this.bG()
this.fk(1)}},hN:{"^":"b1;0ch,0f,a,b,0c,0d,0e",
bW:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.G(z)}},
bh:function(){this.bG()
this.bW(100)}},hW:{"^":"aS;0a,0b,0c,0d,0e,0f,0aa:r@",
gp:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
G:[function(a){var z
H.j(a,"$isl")
z=this.r
if(!(z==null))z.u(a)},function(){return this.G(null)},"a6","$1","$0","gab",0,2,0],
d0:function(a){},
d1:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.d(this.gab(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.e
y=H.d(this.gab(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B("bumpyTextureCube",x,this.f,this,[T.d2])
z.b=!0
this.G(z)}},
I:function(a,b){H.u(a,"$ise",[T.aL],"$ase")
if(b!=null)if(!C.a.au(a,b)){b.a=a.length
C.a.h(a,b)}},
a7:function(a,b){},
b5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
if(z==null){y=A.e8(this.d)
z=y.e
x=H.j(a.fr.j(0,z),"$ise7")
if(x==null){w=a.a
x=new A.e7(w,z)
x.aS(w,z)
x.x=y
z=y.c
v=z?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
u=y.d
v=(u?v+"uniform mat4 txtCubeMat;\n":v)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
t=y.b
if(t)v+="attribute vec3 binmAttr;\n"
if(z)v+="attribute vec2 txt2DAttr;\n"
v=(u?v+"attribute vec3 txtCubeAttr;\n":v)+"\nvarying vec3 normalVec;\n"
if(t)v+="varying vec3 binormalVec;\n"
if(z)v+="varying vec2 txt2D;\n"
v=(u?v+"varying vec3 txtCube;\n":v)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(t)v+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
if(z)v+="   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
v=(u?v+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":v)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
t=t?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
if(z)t+="varying vec2 txt2D;\n"
t=(u?t+"varying vec3 txtCube;\n":t)+"\n"
s=y.a
switch(s){case C.b:break
case C.f:break
case C.e:t+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.d:t+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}t+="\nvec3 normal()\n{\n"
if(s===C.b||s===C.f)t+="   return normalize(normalVec);\n"
else{t+="   if(nullBumpTxt > 0) return normalVec;\n"
t=(s===C.e?t+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":t+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}t+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
x.aZ(0,v.charCodeAt(0)==0?v:v,t.charCodeAt(0)==0?t:t)
x.y=x.f.j(0,"posAttr")
x.Q=x.f.j(0,"normAttr")
x.z=x.f.j(0,"binmAttr")
x.ch=x.f.j(0,"txt2DAttr")
x.cx=x.f.j(0,"txtCubeAttr")
x.cy=H.b(x.r.m(0,"viewObjMat"),"$isa_")
x.db=H.b(x.r.m(0,"projViewObjMat"),"$isa_")
if(z)x.dx=H.b(x.r.m(0,"txt2DMat"),"$isbG")
if(u)x.dy=H.b(x.r.m(0,"txtCubeMat"),"$isa_")
switch(s){case C.b:break
case C.f:break
case C.e:x.fr=H.b(x.r.m(0,"bumpTxt"),"$isa0")
x.fy=H.b(x.r.m(0,"nullBumpTxt"),"$isE")
break
case C.d:x.fx=H.b(x.r.m(0,"bumpTxt"),"$isaf")
x.fy=H.b(x.r.m(0,"nullBumpTxt"),"$isE")
break}a.aU(x)}this.a=x
b.e=null
z=x}y=z.x
r=y.f
z=b.e
if(!(z instanceof Z.bi)){b.e=null
z=null}if(z==null||!z.d.q(0,r)){b.d.ai()
z=y.b
if(z)b.d.aJ()
v=y.d
if(v)b.d.bn()
q=b.d.aV(new Z.c4(a.a),r)
q.a_($.$get$a1()).e=this.a.y.c
q.a_($.$get$ax()).e=this.a.Q.c
if(z)q.a_($.$get$aw()).e=this.a.z.c
if(y.c)q.a_($.$get$aj()).e=this.a.ch.c
if(v)q.a_($.$get$ay()).e=this.a.cx.c
b.e=q}p=H.c([],[T.aL])
this.a.H(a)
z=this.a
v=a.gdW()
z=z.cy
z.toString
z.V(v.P(0,!0))
v=this.a
z=a.gcp()
v=v.db
v.toString
v.V(z.P(0,!0))
if(y.c){z=this.a
v=this.b
z=z.dx
z.toString
z.V(v.P(0,!0))}if(y.d){z=this.a
v=this.c
z=z.dy
z.toString
z.V(v.P(0,!0))}switch(y.a){case C.b:break
case C.f:break
case C.e:this.I(p,this.e)
z=this.a.fy
z.a.uniform1i(z.d,1)
break
case C.d:this.I(p,this.f)
z=this.a
v=this.f
u=z.fx
z=z.fy
if(v==null||v.d<6)z.a.uniform1i(z.d,1)
else{u.cB(v)
z.a.uniform1i(z.d,0)}break}for(o=0;o<p.length;++o)p[o].H(a)
z=b.e
z.H(a)
z.a3(a)
z.a1(a)
for(o=0;o<p.length;++o){z=p[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.aX()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return A.e8(this.d).e}},iB:{"^":"aS;0a,0b,0c,0d,0aa:e@",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
G:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.u(a)},function(){return this.G(null)},"a6","$1","$0","gab",0,2,0],
a7:function(a,b){},
b5:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.j(a.fr.j(0,"Skybox"),"$isei")
if(z==null){y=a.a
z=new A.ei(y,"Skybox")
z.aS(y,"Skybox")
z.aZ(0,$.iD,$.iC)
z.x=z.f.j(0,"posAttr")
z.y=H.b(z.r.j(0,"fov"),"$isQ")
z.z=H.b(z.r.j(0,"ratio"),"$isQ")
z.Q=H.b(z.r.j(0,"boxClr"),"$isI")
z.ch=H.b(z.r.j(0,"boxTxt"),"$isaf")
z.cx=H.b(z.r.j(0,"viewMat"),"$isa_")
a.aU(z)}this.a=z}if(b.e==null){y=b.d.aV(new Z.c4(a.a),$.$get$a1())
y.a_($.$get$a1()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.H(a)}y=a.d
x=a.c
w=this.a
w.H(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.cB(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gT(x).cj(0)
w=w.cx
w.toString
w.V(x.P(0,!0))
y=b.e
if(y instanceof Z.bi){y.H(a)
y.a3(a)
y.a1(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.aX()
y=this.c
if(y!=null)y.a1(a)}},aS:{"^":"a;"},iN:{"^":"aS;0a,0b,0c,0d,0aa:e@",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
G:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.u(a)},function(){return this.G(null)},"a6","$1","$0","gab",0,2,0],
ig:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$isf",[O.bD],"$asf")
for(z=b.length,y=this.gab(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gaa()==null){t=new D.aJ()
t.a=H.c([],w)
t.c=0
u.saa(t)}t=u.gaa()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.a6()},"$2","geT",8,0,23],
ih:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$isf",[O.bD],"$asf")
for(z=b.length,y=this.gab(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gaa()==null){t=new D.aJ()
t.a=H.c([],w)
t.c=0
u.saa(t)}t=u.gaa()
t.toString
H.d(y,x)
C.a.F(t.a,y)}}this.a6()},"$2","geU",8,0,23],
a7:function(a,b){},
b5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.h.a2(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.j(a.fr.j(0,y),"$iseq")
if(x==null){x=A.iO(z,a.a)
a.aU(x)}this.b=x
y=x}if(b.e==null){y=b.d.aV(new Z.c4(a.a),$.$get$a1())
w=y.a_($.$get$a1())
v=this.b
w.e=v.x.c
b.e=y
y=v}y.H(a)
y=T.aL
u=H.c([],[y])
for(w=[P.w],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.u(u,"$ise",y,"$ase")
if(v!=null)if(!C.a.au(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.Q
if(t>=v.length)return H.h(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)o.uniform1i(v,0)
else o.uniform1i(v,q.a)
v=this.b
q=r.b
v=v.ch
if(t>=v.length)return H.h(v,t)
v=v[t]
n=new Float32Array(H.b9(H.u((q==null?new V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).P(0,!0),"$ise",w,"$ase")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.aR(0,0,1,1)
q=v.cx
if(t>=q.length)return H.h(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.cy
if(t>=v.length)return H.h(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null)m=V.aR(0,0,1,1)
q=v.db
if(t>=q.length)return H.h(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.h(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
q=r.e
v=v.dy
if(t>=v.length)return H.h(v,t)
v=v[t]
q=q?1:0
v.a.uniform1i(v.d,q);++t}}y=this.b.y
y.a.uniform1i(y.d,t)
y=this.b
w=this.a
y=y.z
y.toString
v=w.a
q=w.b
p=w.c
w=w.d
y.a.uniform4f(y.d,v,q,p,w)
for(s=0;s<u.length;++s)u[s].H(a)
y=b.e
if(y instanceof Z.bi){y.H(a)
y.a3(a)
y.a1(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.f.aX()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},bD:{"^":"a;0a,0b,0c,0d,0e,0aa:f@",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
G:[function(a){var z
H.j(a,"$isl")
z=this.f
if(!(z==null))z.u(a)},function(){return this.G(null)},"a6","$1","$0","gab",0,2,0],
n:{
er:function(a,b,c,d,e){var z,y,x,w,v,u
z=new O.bD()
y=z.a
z.a=e
x=e.y
w=H.d(z.gab(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)
x=new D.B("texture",y,z.a,z,[T.eo])
x.b=!0
z.G(x)
v=V.aA()
if(!J.H(z.b,v)){y=z.b
z.b=v
x=new D.B("colorMatrix",y,v,z,[V.ah])
x.b=!0
z.G(x)}u=V.aR(0,0,1,1)
if(!J.H(z.c,u)){y=z.c
z.c=u
x=new D.B("source",y,u,z,[V.cn])
x.b=!0
z.G(x)}if(!J.H(z.d,b)){y=z.d
z.d=b
x=new D.B("destination",y,b,z,[V.cn])
x.b=!0
z.G(x)}if(z.e!==c){z.e=c
x=new D.B("flip",!c,c,z,[P.a5])
x.b=!0
z.G(x)}z.f=null
return z}}}}],["","",,T,{"^":"",aL:{"^":"cD;"},eo:{"^":"aL;0b,0c,0d,0e,0f,0r,0x,0y,a",
H:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
n:{
ep:function(a,b){var z=new T.eo(a)
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
z.y=D.C()
return z}}},d2:{"^":"aL;0b,0c,0d,0e,a",
H:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
a1:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},iQ:{"^":"a;a,0b,0c,0d,0e",
dK:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=a+"/"+d+"posx"+b
y=a+"/"+d+"posy"+b
x=a+"/"+d+"posz"+b
w=a+"/"+d+"negx"+b
v=a+"/"+d+"negy"+b
u=a+"/"+d+"negz"+b
t=this.a
s=t.createTexture()
t.bindTexture(34067,s)
t.texParameteri(34067,10242,10497)
t.texParameteri(34067,10243,10497)
t.texParameteri(34067,10241,9729)
t.texParameteri(34067,10240,9729)
t.bindTexture(34067,null)
r=new T.d2(0)
r.b=s
r.c=!1
r.d=0
r.e=D.C()
this.aH(r,s,z,34069,!1,!1)
this.aH(r,s,w,34070,!1,!1)
this.aH(r,s,y,34071,!1,!1)
this.aH(r,s,v,34072,!1,!1)
this.aH(r,s,x,34073,!1,!1)
this.aH(r,s,u,34074,!1,!1)
return r},
hl:function(a){return this.dK(a,".png",!1,"")},
hm:function(a,b){return this.dK(a,b,!1,"")},
aH:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.aa
W.X(z,"load",H.d(new T.iR(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fi:function(a,b,c){var z,y,x,w
b=V.bS(b,2)
z=V.bS(a.width,2)
y=V.bS(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cH(null,null)
x.width=z
x.height=y
w=H.j(C.k.e_(x,"2d"),"$isdx")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.l6(w.getImageData(0,0,x.width,x.height))}}},iR:{"^":"v:24;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fi(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.hO(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.di();++z.e}}}],["","",,V,{"^":"",fF:{"^":"a;",
b_:function(a,b){return!0},
i:function(a){return"all"},
$isc_:1},c_:{"^":"a;"},e2:{"^":"a;",
b_:["e7",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].b_(0,b))return!0
return!1}],
i:["cE",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc_:1},bt:{"^":"e2;0a",
b_:function(a,b){return!this.e7(0,b)},
i:function(a){return"!["+this.cE(0)+"]"}},ir:{"^":"a;0a",
ec:function(a){var z,y
if(a.a.length<=0)throw H.i(P.n("May not create a SetMatcher with zero characters."))
z=new H.b0(0,0,[P.A,P.a5])
for(y=new H.e_(a,a.gl(a),0,[H.aG(a,"t",0)]);y.D();)z.a4(0,y.d,!0)
this.a=z},
b_:function(a,b){return this.a.df(0,b)},
i:function(a){var z=this.a
return P.d1(new H.dZ(z,[H.z(z,0)]),0,null)},
$isc_:1,
n:{
a4:function(a){var z=new V.ir()
z.ec(a)
return z}}},ek:{"^":"a;a,b,0c,0d",
ghp:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ey(this.a.K(0,b))
w.a=H.c([],[V.c_])
w.c=!1
C.a.h(this.c,w)
return w},
ha:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.b_(0,a))return w}return},
i:function(a){return this.b}},ev:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fy(this.b,"\n","\\n")
y=H.fy(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ew:{"^":"a;a,b,0c",
i:function(a){return this.b}},iZ:{"^":"a;0a,0b,0c",
K:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.ek(this,b)
z.c=H.c([],[V.ey])
this.a.a4(0,b,z)}return z},
b8:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ew(this,a)
y=P.o
z.c=new H.b0(0,0,[y,y])
this.b.a4(0,a,z)}return z},
hU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.ev])
y=this.c
x=[P.A]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.bf(a,t)
r=y.ha(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d1(w,0,null)
throw H.i(P.n("Untokenizable string [state: "+y.ghp(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d1(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.ev(o==null?p.b:o,q,t)}++t}}}},ey:{"^":"e2;b,0c,0a",
i:function(a){return this.b.b+": "+this.cE(0)}}}],["","",,X,{"^":"",fJ:{"^":"co;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gp:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
ae:function(a){var z=this.dy
if(!(z==null))z.u(a)},
sad:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.x=null
this.a=b
this.c=b
z=new D.B("width",z,b,this,[P.A])
z.b=!0
this.ae(z)}},
sac:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.x=null
this.b=b
this.d=b
z=new D.B("height",z,b,this,[P.A])
z.b=!0
this.ae(z)}},
H:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f){z=a.a.drawingBufferWidth
y=this.r
if(typeof z!=="number")return z.k()
this.sad(0,C.h.U(z*y))
y=a.a.drawingBufferHeight
z=this.r
if(typeof y!=="number")return y.k()
this.sac(0,C.h.U(y*z))}if(this.x==null){z=a.a
y=this.Q
x=this.a
w=this.b
v=H.S(z.getParameter(3379))
u=V.bS(x,2)
t=V.bS(w,2)
v=V.bS(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.q.dT(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.ep(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
r.y.di()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=this.Q
x=y.b
this.y=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.z=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.x=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.y,0)
z.framebufferRenderbuffer(36160,36096,36161,this.z)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.x)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.dx
y=z.c
a.c=C.c.U(y*this.a)
x=z.d
a.d=C.c.U(x*this.b)
w=this.c
q=C.c.U(z.a*w)
p=this.d
o=C.c.U(z.b*p)
n=C.c.U(y*w)
m=C.c.U(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.cy)
if(this.cx){z=a.a
y=this.ch
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
a1:function(a){a.a.bindFramebuffer(36160,null)},
n:{
ds:function(a,b,c,d,e){var z=new X.fJ()
z.a=512
z.b=512
z.c=512
z.d=512
z.e=!0
z.f=!0
z.r=d
z.Q=T.ep(0,null)
z.ch=new V.a9(0,0,0,1)
z.cx=!0
z.cy=2000
z.db=!0
z.dx=V.aR(0,0,1,1)
z.sad(0,a)
z.sac(0,b)
return z}}},ca:{"^":"a;",$isaC:1},hi:{"^":"co;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
H:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.r(y)
v=C.c.U(w.a*y)
if(typeof x!=="number")return H.r(x)
u=C.c.U(w.b*x)
t=C.c.U(w.c*y)
a.c=t
w=C.c.U(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
a1:function(a){},
n:{
cM:function(a,b,c,d,e,f,g){var z,y
z=new X.hi()
y=new V.a9(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.aR(0,0,1,1)
z.r=y
return z}}},hj:{"^":"a;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
H:function(a){var z
a.cy.bB(V.aA())
z=V.aA()
a.db.bB(z)},
a1:function(a){a.cy.az()
a.db.az()},
$isaC:1,
$isca:1},i0:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
ae:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.u(a)},function(){return this.ae(null)},"hY","$1","$0","gcH",0,2,0],
sb1:function(a){var z,y,x
if(!J.H(this.a,a)){z=this.a
if(z!=null){z=z.gp()
z.toString
y=H.d(this.gcH(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gp()
z.toString
y=H.d(this.gcH(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B("mover",x,this.a,this,[U.ac])
z.b=!0
this.ae(z)}},
H:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bB(V.aK(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.ed
if(z==null){z=V.e4(new V.U(0,0,0),new V.F(0,1,0),new V.F(0,0,-1))
$.ed=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aR(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bB(r)},
a1:function(a){a.cy.az()
a.db.az()},
$isaC:1,
$isca:1,
n:{
ec:function(a,b,c,d){var z,y,x
z=new X.i0()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
z.sb1(c)
y=z.b
if(!$.m.$2(y,b)){x=z.b
z.b=b
y=new D.B("fov",x,b,z,[P.w])
y.b=!0
z.ae(y)}y=z.c
if(!$.m.$2(y,d)){x=z.c
z.c=d
y=new D.B("near",x,d,z,[P.w])
y.b=!0
z.ae(y)}y=z.d
if(!$.m.$2(y,a)){x=z.d
z.d=a
y=new D.B("far",x,a,z,[P.w])
y.b=!0
z.ae(y)}return z}}},co:{"^":"a;"}}],["","",,V,{"^":"",
lv:function(a){P.iY(C.x,new V.lw(a))},
lw:{"^":"v:38;a",
$1:function(a){H.j(a,"$isb5")
P.dm(C.c.dV(this.a.ghc(),2)+" fps")}},
iw:{"^":"a;0a,0b",
ed:function(a,b){var z,y,x,w,v,u,t
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
t=W.aa
W.X(z,"scroll",H.d(new V.iz(x),{func:1,ret:-1,args:[t]}),!1,t)},
fZ:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$ise",[P.o],"$ase")
this.fp()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hU(C.a.hh(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fx(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kE(C.I,s,C.r,!1)
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
fp:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iZ()
y=P.o
z.a=new H.b0(0,0,[y,V.ek])
z.b=new H.b0(0,0,[y,V.ew])
z.c=z.K(0,"Start")
y=z.K(0,"Start").B(0,"Bold")
x=V.a4(new H.a2("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Bold").B(0,"Bold")
x=new V.bt()
w=[V.c_]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a4(new H.a2("*"))
C.a.h(x.a,y)
y=z.K(0,"Bold").B(0,"BoldEnd")
x=V.a4(new H.a2("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").B(0,"Italic")
x=V.a4(new H.a2("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Italic").B(0,"Italic")
x=new V.bt()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a4(new H.a2("_"))
C.a.h(x.a,y)
y=z.K(0,"Italic").B(0,"ItalicEnd")
x=V.a4(new H.a2("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").B(0,"Code")
x=V.a4(new H.a2("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Code").B(0,"Code")
x=new V.bt()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a4(new H.a2("`"))
C.a.h(x.a,y)
y=z.K(0,"Code").B(0,"CodeEnd")
x=V.a4(new H.a2("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").B(0,"LinkHead")
x=V.a4(new H.a2("["))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"LinkHead").B(0,"LinkTail")
x=V.a4(new H.a2("|"))
C.a.h(y.a,x)
x=z.K(0,"LinkHead").B(0,"LinkEnd")
y=V.a4(new H.a2("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkHead").B(0,"LinkHead")
y=new V.bt()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a4(new H.a2("|]"))
C.a.h(y.a,x)
x=z.K(0,"LinkTail").B(0,"LinkEnd")
y=V.a4(new H.a2("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkTail").B(0,"LinkTail")
y=new V.bt()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a4(new H.a2("|]"))
C.a.h(y.a,x)
C.a.h(z.K(0,"Start").B(0,"Other").a,new V.fF())
x=z.K(0,"Other").B(0,"Other")
y=new V.bt()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a4(new H.a2("*_`["))
C.a.h(y.a,x)
x=z.K(0,"BoldEnd")
x.d=x.a.b8("Bold")
x=z.K(0,"ItalicEnd")
x.d=x.a.b8("Italic")
x=z.K(0,"CodeEnd")
x.d=x.a.b8("Code")
x=z.K(0,"LinkEnd")
x.d=x.a.b8("Link")
x=z.K(0,"Other")
x.d=x.a.b8("Other")
this.b=z},
n:{
ix:function(a,b){var z=new V.iw()
z.ed(a,!0)
return z}}},
iz:{"^":"v:24;a",
$1:function(a){P.et(C.l,new V.iy(this.a))}},
iy:{"^":"v:2;a",
$0:function(){var z,y,x
z=C.c.U(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,S,{"^":"",
ft:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=V.ix("Test 031",!0)
y=W.cH(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fZ(H.c(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."],[P.o]))
x=document.getElementById("testCanvas")
if(x==null)H.p(P.n("Failed to find an element with the identifier, testCanvas."))
w=E.iW(x,!0,!0,!0,!1)
v=E.cL(null,!0,null,"",null,null)
u=F.d_()
F.bL(u,null,null,1,1,1,0,0,1)
F.bL(u,null,null,1,1,0,1,0,3)
F.bL(u,null,null,1,1,0,0,1,2)
F.bL(u,null,null,1,1,-1,0,0,0)
F.bL(u,null,null,1,1,0,-1,0,0)
F.bL(u,null,null,1,1,0,0,-1,3)
u.ai()
v.sbc(0,u)
z=U.dQ(null)
z.h(0,U.eT(!1,!1,w.r,!1,!1,!1,null,!1))
z.h(0,U.eU(!1,!1,w.r,null,!1))
v.sb1(z)
t=new O.hW()
t.b=new V.b2(1,0,0,0,1,0,0,0,1)
t.c=V.aA()
t.d=C.b
t.d0(null)
t.d1(null)
t.a6()
t.r=null
z=w.f.hl("../resources/diceBumpMap")
if(t.d!==C.d){t.d=C.d
t.d0(null)
t.a=null}t.d1(z)
s=X.ds(800,600,!0,1,!0)
z=new V.a9(0.5,0.5,1,1)
if(!s.ch.q(0,z)){r=s.ch
s.ch=z
z=new D.B("color",r,z,s,[V.a9])
z.b=!0
s.ae(z)}q=M.dN(null,null,null,null)
q.sap(t)
q.saA(0,s)
q.d.h(0,v)
q.a.sb1(U.cJ(V.e6(0,0,5)))
p=U.dQ(null)
p.h(0,U.eT(!1,!0,w.r,!1,!1,!1,null,!1))
p.h(0,U.eU(!1,!0,w.r,null,!1))
p.h(0,U.cJ(V.e6(0,0,5)))
o=X.ec(2000,1.0471975511965976,p,0.1)
n=X.ds(800,600,!0,1,!0)
if(n.cx){n.cx=!1
z=new D.B("clearColor",!0,!1,n,[P.a5])
z.b=!0
n.ae(z)}m=E.cL(null,!0,null,"",null,null)
m.sbc(0,F.ly(30,1,15,0.5))
l=new O.hH()
z=O.cb(V.ah)
l.e=z
z.aB(l.geL(),l.geM())
z=new O.b1(l,"emission")
z.c=C.b
z.f=new V.T(0,0,0)
l.f=z
z=new O.b1(l,"ambient")
z.c=C.b
z.f=new V.T(0,0,0)
l.r=z
z=new O.b1(l,"diffuse")
z.c=C.b
z.f=new V.T(0,0,0)
l.x=z
z=new O.b1(l,"invDiffuse")
z.c=C.b
z.f=new V.T(0,0,0)
l.y=z
z=new O.hN(l,"specular")
z.c=C.b
z.f=new V.T(0,0,0)
z.ch=100
l.z=z
z=new O.hK(l,"bump")
z.c=C.b
l.Q=z
l.ch=null
z=new O.b1(l,"reflect")
z.c=C.b
z.f=new V.T(0,0,0)
l.cx=z
z=new O.hM(l,"refract")
z.c=C.b
z.f=new V.T(0,0,0)
z.ch=1
l.cy=z
z=new O.hJ(l,"alpha")
z.c=C.b
z.f=1
l.db=z
z=new D.ht()
z.bd(D.W)
z.e=H.c([],[D.cd])
z.f=H.c([],[D.i2])
z.r=H.c([],[D.iE])
z.x=H.c([],[D.iS])
z.y=H.c([],[D.iT])
z.z=H.c([],[D.iU])
z.Q=null
z.ch=null
z.cA(z.geK(),z.gf4(),z.gf6())
l.dx=z
k=z.Q
if(k==null){k=D.C()
z.Q=k
z=k}else z=k
k={func:1,ret:-1,args:[D.l]}
j=H.d(l.gfg(),k)
C.a.h(z.a,j)
j=l.dx
z=j.ch
if(z==null){z=D.C()
j.ch=z}j=H.d(l.gab(),k)
C.a.h(z.a,j)
l.dy=null
j=l.dx
z=U.cJ(V.e4(new V.U(0,0,0),new V.F(0,1,0),new V.F(0,-1,-1)))
i=new V.T(1,1,1)
h=new D.cd()
h.c=new V.T(1,1,1)
h.a=new V.F(0,0,1)
r=h.b
h.b=z
z=z.gp()
z.toString
g=H.d(h.gei(),k)
C.a.h(z.a,g)
z=new D.B("mover",r,h.b,h,[U.ac])
z.b=!0
h.aD(z)
if(!h.c.q(0,i)){r=h.c
h.c=i
z=new D.B("color",r,i,h,[V.T])
z.b=!0
h.aD(z)}j.h(0,h)
z=l.r
z.sam(0,new V.T(0,0,1))
z=l.x
z.sam(0,new V.T(0,1,0))
z=l.z
z.sam(0,new V.T(1,0,0))
z=l.z
if(z.c===C.b){z.c=C.f
z.bG()
z.bW(100)
j=z.a
j.a=null
j.G(null)}z.bW(10)
z=w.f.hm("../resources/maskonaive",".jpg")
f=M.cK(null,null,null)
j=new O.iB()
j.b=1.0471975511965976
r=j.c
j.c=z
z=z.e
h=H.d(j.gab(),k)
C.a.h(z.a,h)
z=new D.B("boxTexture",r,j.c,j,[T.d2])
z.b=!0
j.G(z)
i=new V.T(1,1,1)
if(!J.H(j.d,i)){r=j.d
j.d=i
z=new D.B("boxColor",r,i,j,[V.T])
z.b=!0
j.G(z)}j.e=null
f.sap(j)
f.saA(0,n)
f.saW(o)
e=M.dN(null,null,null,null)
e.saW(o)
e.sap(l)
e.saA(0,n)
e.d.h(0,m)
d=new O.h1()
d.sde(null)
d.sda(null)
c=new V.b2(1,0,0,0,1,0,0,0,1)
if(!J.H(d.d,c)){d.d=c
d.a6()}c=new V.b2(1,0,0,0,1,0,0,0,1)
if(!J.H(d.e,c)){d.e=c
d.a6()}d.sd9(null)
d.sde(n.Q)
d.sda(s.Q)
d.sd9(V.e5(0.05,0.05,0.05,1))
b=M.cK(null,null,null)
b.sap(d)
a=new O.iN()
a0=new V.a9(0,0,0,0)
a.a=a0
z=new D.B("backColor",null,a0,a,[V.a9])
z.b=!0
a.G(z)
a.b=null
z=O.cb(O.bD)
a.c=z
z.aB(a.geT(),a.geU())
a.d=0
a.e=null
z=a.c
j=s.Q
z.h(0,O.er(null,V.aR(0,0.8,0.2,0.2),!0,null,j))
j=a.c
z=n.Q
j.h(0,O.er(null,V.aR(0,0.6,0.2,0.2),!1,null,z))
a1=M.cK(null,null,null)
a1.saA(0,X.cM(!1,!0,!1,null,2000,null,0))
a1.sap(a)
z=M.aD
j=H.c([f,e,q,b,a1],[z])
h=new M.fT()
h.bd(z)
h.e=!1
h.f=null
h.aB(h.gf7(),h.gf8())
h.bZ(0,j)
z=w.d
if(z!==h){if(z!=null){z=z.gp()
z.toString
j=H.d(w.gcF(),k)
C.a.F(z.a,j)}w.d=h
z=h.gp()
z.toString
k=H.d(w.gcF(),k)
C.a.h(z.a,k)
w.eg()}V.lv(w)}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dU.prototype
return J.dT.prototype}if(typeof a=="string")return J.ci.prototype
if(a==null)return J.dV.prototype
if(typeof a=="boolean")return J.ho.prototype
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.a)return a
return J.cz(a)}
J.c6=function(a){if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.a)return a
return J.cz(a)}
J.dh=function(a){if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.a)return a
return J.cz(a)}
J.lc=function(a){if(typeof a=="number")return J.bX.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cq.prototype
return a}
J.ld=function(a){if(typeof a=="number")return J.bX.prototype
if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cq.prototype
return a}
J.cy=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.a)return a
return J.cz(a)}
J.H=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).q(a,b)}
J.fB=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lc(a).ak(a,b)}
J.dn=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ld(a).k(a,b)}
J.fC=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lm(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c6(a).j(a,b)}
J.fD=function(a,b,c,d){return J.cy(a).d7(a,b,c,d)}
J.cC=function(a,b,c){return J.c6(a).h2(a,b,c)}
J.dp=function(a,b){return J.dh(a).E(a,b)}
J.fE=function(a,b){return J.dh(a).N(a,b)}
J.aY=function(a){return J.K(a).gX(a)}
J.bT=function(a){return J.dh(a).ga0(a)}
J.bg=function(a){return J.c6(a).gl(a)}
J.a8=function(a){return J.K(a).i(a)}
I.dk=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cG.prototype
C.y=J.q.prototype
C.a=J.b_.prototype
C.z=J.dT.prototype
C.h=J.dU.prototype
C.A=J.dV.prototype
C.c=J.bX.prototype
C.i=J.ci.prototype
C.H=J.bY.prototype
C.J=H.hU.prototype
C.K=W.hV.prototype
C.p=J.i1.prototype
C.q=P.cZ.prototype
C.m=J.cq.prototype
C.t=W.bJ.prototype
C.u=W.jw.prototype
C.v=new P.i_()
C.w=new P.ji()
C.j=new P.ki()
C.b=new A.cc(0,"ColorSourceType.None")
C.f=new A.cc(1,"ColorSourceType.Solid")
C.e=new A.cc(2,"ColorSourceType.Texture2D")
C.d=new A.cc(3,"ColorSourceType.TextureCube")
C.l=new P.aZ(0)
C.x=new P.aZ(5e6)
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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

C.D=function(getTagFallback) {
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
C.E=function() {
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
C.F=function(hooks) {
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
C.G=function(hooks) {
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
C.I=H.c(I.dk([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.r=new P.jh(!1)
$.az=0
$.bh=null
$.dt=null
$.da=!1
$.fq=null
$.fk=null
$.fw=null
$.cx=null
$.cA=null
$.di=null
$.ba=null
$.bM=null
$.bN=null
$.db=!1
$.P=C.j
$.dJ=null
$.dI=null
$.dH=null
$.dG=null
$.m=V.hO()
$.h3="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.h2="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.iD="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.iC="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ed=null
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
I.$lazy(y,x,w)}})(["dF","$get$dF",function(){return H.fp("_$dart_dartClosure")},"cQ","$get$cQ",function(){return H.fp("_$dart_js")},"ez","$get$ez",function(){return H.aE(H.cp({
toString:function(){return"$receiver$"}}))},"eA","$get$eA",function(){return H.aE(H.cp({$method$:null,
toString:function(){return"$receiver$"}}))},"eB","$get$eB",function(){return H.aE(H.cp(null))},"eC","$get$eC",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eG","$get$eG",function(){return H.aE(H.cp(void 0))},"eH","$get$eH",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eE","$get$eE",function(){return H.aE(H.eF(null))},"eD","$get$eD",function(){return H.aE(function(){try{null.$method$}catch(z){return z.message}}())},"eJ","$get$eJ",function(){return H.aE(H.eF(void 0))},"eI","$get$eI",function(){return H.aE(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d7","$get$d7",function(){return P.jx()},"bO","$get$bO",function(){return[]},"fe","$get$fe",function(){return P.ig("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dD","$get$dD",function(){return{}},"eX","$get$eX",function(){return Z.aq(0)},"eV","$get$eV",function(){return Z.aq(511)},"a1","$get$a1",function(){return Z.aq(1)},"ax","$get$ax",function(){return Z.aq(2)},"aw","$get$aw",function(){return Z.aq(4)},"aj","$get$aj",function(){return Z.aq(8)},"ay","$get$ay",function(){return Z.aq(16)},"bH","$get$bH",function(){return Z.aq(32)},"bI","$get$bI",function(){return Z.aq(64)},"eW","$get$eW",function(){return Z.aq(96)},"b7","$get$b7",function(){return Z.aq(128)},"aM","$get$aM",function(){return Z.aq(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.au]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.A,[P.f,E.aI]]},{func:1,ret:P.J,args:[F.am]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[D.l]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.J,args:[,]},{func:1,args:[,]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.A,[P.f,D.W]]},{func:1,ret:-1,args:[W.br]},{func:1,ret:P.o,args:[P.A]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.A,[P.f,U.ac]]},{func:1,ret:-1,args:[P.A,[P.f,M.aD]]},{func:1,ret:P.J,args:[F.ao,P.w,P.w]},{func:1,ret:-1,args:[P.A,[P.f,V.ah]]},{func:1,ret:-1,args:[P.A,[P.f,O.bD]]},{func:1,ret:P.J,args:[W.aa]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.a5,args:[W.L]},{func:1,ret:W.a3,args:[W.L]},{func:1,args:[P.o]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[W.bJ]},{func:1,ret:P.a5,args:[P.w,P.w]},{func:1,ret:-1,args:[P.a],opt:[P.av]},{func:1,args:[,P.o]},{func:1,ret:V.U,args:[P.w]},{func:1,ret:P.a5,args:[[P.f,D.W]]},{func:1,ret:P.J,args:[P.b5]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[P.Y]}]
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
if(x==y)H.lx(d||a)
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
Isolate.dk=a.dk
Isolate.df=a.df
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
if(typeof dartMainRunner==="function")dartMainRunner(S.ft,[])
else S.ft([])})})()
//# sourceMappingURL=test.dart.js.map
