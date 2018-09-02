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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isn)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cM(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cN=function(){}
var dart=[["","",,H,{"^":"",l4:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
cT:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ca:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cQ==null){H.kn()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.ef("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cp()]
if(v!=null)return v
v=H.ks(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cp(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
n:{"^":"a;",
p:function(a,b){return a===b},
gM:function(a){return H.bh(a)},
i:["de",function(a){return"Instance of '"+H.aT(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fB:{"^":"n;",
i:function(a){return String(a)},
gM:function(a){return a?519018:218159},
$isac:1},
dm:{"^":"n;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gM:function(a){return 0},
$isF:1},
cq:{"^":"n;",
gM:function(a){return 0},
i:["df",function(a){return String(a)}]},
hf:{"^":"cq;"},
c3:{"^":"cq;"},
bG:{"^":"cq;",
i:function(a){var z=a[$.$get$dc()]
if(z==null)return this.df(a)
return"JavaScript function for "+H.j(J.ae(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isck:1},
aQ:{"^":"n;$ti",
h:function(a,b){H.B(b,H.x(a,0))
if(!!a.fixed$length)H.p(P.aj("add"))
a.push(b)},
L:function(a,b){var z
if(!!a.fixed$length)H.p(P.aj("remove"))
for(z=0;z<a.length;++z)if(J.O(a[z],b)){a.splice(z,1)
return!0}return!1},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.b6(a))}},
u:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.O(z,y,H.j(a[y]))
return z.join(b)},
fg:function(a){return this.u(a,"")},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bb:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.a8(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.a8(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.x(a,0)])
return H.b(a.slice(b,c),[H.x(a,0)])},
gbK:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.fz())},
aV:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
i:function(a){return P.cn(a,"[","]")},
gN:function(a){return new J.ao(a,a.length,0,[H.x(a,0)])},
gM:function(a){return H.bh(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.aj("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.bQ(b,"newLength",null))
if(b<0)throw H.d(P.a8(b,0,null,"newLength",null))
a.length=b},
O:function(a,b,c){H.R(b)
H.B(c,H.x(a,0))
if(!!a.immutable$list)H.p(P.aj("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aI(a,b))
if(b>=a.length||b<0)throw H.d(H.aI(a,b))
a[b]=c},
$isi:1,
$isc:1,
n:{
fA:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.bQ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a8(a,0,4294967295,"length",null))
return J.dk(new Array(a),b)},
dk:function(a,b){return J.bb(H.b(a,[b]))},
bb:function(a){H.bA(a)
a.fixed$length=Array
return a}}},
l3:{"^":"aQ;$ti"},
ao:{"^":"a;a,b,c,0d,$ti",
gH:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bF:{"^":"n;",
gff:function(a){return a===0?1/a<0:a<0},
cQ:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.aj(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.aj(""+a+".round()"))},
d4:function(a,b){var z
if(b>20)throw H.d(P.a8(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gff(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gM:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.d(H.aH(b))
return a*b},
da:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
di:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ck(a,b)},
R:function(a,b){return(a|0)===a?a/b|0:this.ck(a,b)},
ck:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.aj("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aR:function(a,b){var z
if(a>0)z=this.ew(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ew:function(a,b){return b>31?0:a>>>b},
ad:function(a,b){if(typeof b!=="number")throw H.d(H.aH(b))
return a<b},
$ist:1,
$isT:1},
dl:{"^":"bF;",$isC:1},
fC:{"^":"bF;"},
bY:{"^":"n;",
bB:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aI(a,b))
if(b<0)throw H.d(H.aI(a,b))
if(b>=a.length)H.p(H.aI(a,b))
return a.charCodeAt(b)},
aM:function(a,b){if(b>=a.length)throw H.d(H.aI(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.M(b)
if(typeof b!=="string")throw H.d(P.bQ(b,null,null))
return a+b},
bc:function(a,b,c){H.R(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.c1(b,null,null))
if(b>c)throw H.d(P.c1(b,null,null))
if(c>a.length)throw H.d(P.c1(c,null,null))
return a.substring(b,c)},
bY:function(a,b){return this.bc(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fu:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ab:function(a,b){return this.fu(a,b," ")},
f1:function(a,b,c){if(c>a.length)throw H.d(P.a8(c,0,a.length,null,null))
return H.eT(a,b,c)},
i:function(a){return a},
gM:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdz:1,
$isl:1}}],["","",,H,{"^":"",
fz:function(){return new P.hO("No element")},
X:{"^":"ik;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.i.bB(this.a,b)},
$aseg:function(){return[P.C]},
$asq:function(){return[P.C]},
$asi:function(){return[P.C]},
$asc:function(){return[P.C]}},
fl:{"^":"i;"},
ds:{"^":"a;a,b,c,0d,$ti",
gH:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.bO(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.b6(z))
w=this.c
if(typeof x!=="number")return H.z(x)
if(w>=x){this.d=null
return!1}this.d=y.v(z,w);++this.c
return!0}},
fU:{"^":"i;a,b,$ti",
gN:function(a){return new H.fV(J.bB(this.a),this.b,this.$ti)},
gl:function(a){return J.b4(this.a)},
v:function(a,b){return this.b.$1(J.cX(this.a,b))},
$asi:function(a,b){return[b]}},
fV:{"^":"co;0a,b,c,$ti",
w:function(){var z=this.b
if(z.w()){this.a=this.c.$1(z.gH(z))
return!0}this.a=null
return!1},
gH:function(a){return this.a},
$asco:function(a,b){return[b]}},
iC:{"^":"i;a,b,$ti",
gN:function(a){return new H.iD(J.bB(this.a),this.b,this.$ti)}},
iD:{"^":"co;a,b,$ti",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gH(z)))return!0
return!1},
gH:function(a){var z=this.a
return z.gH(z)}},
bW:{"^":"a;$ti"},
eg:{"^":"a;$ti"},
ik:{"^":"bZ+eg;"}}],["","",,H,{"^":"",
ki:function(a){return init.types[H.R(a)]},
kq:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isA},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ae(a)
if(typeof z!=="string")throw H.d(H.aH(a))
return z},
bh:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aT:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.J(a).$isc3){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.aM(w,0)===36)w=C.i.bY(w,1)
r=H.cR(H.bA(H.aJ(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dD:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hp:function(a){var z,y,x,w
z=H.b([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aH(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aR(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aH(w))}return H.dD(z)},
dE:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aH(x))
if(x<0)throw H.d(H.aH(x))
if(x>65535)return H.hp(a)}return H.dD(a)},
ho:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aR(z,10))>>>0,56320|z&1023)}throw H.d(P.a8(a,0,1114111,null,null))},
a3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hn:function(a){return a.b?H.a3(a).getUTCFullYear()+0:H.a3(a).getFullYear()+0},
hl:function(a){return a.b?H.a3(a).getUTCMonth()+1:H.a3(a).getMonth()+1},
hh:function(a){return a.b?H.a3(a).getUTCDate()+0:H.a3(a).getDate()+0},
hi:function(a){return a.b?H.a3(a).getUTCHours()+0:H.a3(a).getHours()+0},
hk:function(a){return a.b?H.a3(a).getUTCMinutes()+0:H.a3(a).getMinutes()+0},
hm:function(a){return a.b?H.a3(a).getUTCSeconds()+0:H.a3(a).getSeconds()+0},
hj:function(a){return a.b?H.a3(a).getUTCMilliseconds()+0:H.a3(a).getMilliseconds()+0},
z:function(a){throw H.d(H.aH(a))},
h:function(a,b){if(a==null)J.b4(a)
throw H.d(H.aI(a,b))},
aI:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
z=H.R(J.b4(a))
if(!(b<0)){if(typeof z!=="number")return H.z(z)
y=b>=z}else y=!0
if(y)return P.K(b,a,"index",null,z)
return P.c1(b,"index",null)},
kd:function(a,b,c){if(a>c)return new P.c0(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c0(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
aH:function(a){return new P.aC(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.dy()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eV})
z.name=""}else z.toString=H.eV
return z},
eV:function(){return J.ae(this.dartException)},
p:function(a){throw H.d(a)},
y:function(a){throw H.d(P.b6(a))},
aL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kF(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aR(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cr(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dx(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dZ()
u=$.$get$e_()
t=$.$get$e0()
s=$.$get$e1()
r=$.$get$e5()
q=$.$get$e6()
p=$.$get$e3()
$.$get$e2()
o=$.$get$e8()
n=$.$get$e7()
m=v.V(y)
if(m!=null)return z.$1(H.cr(H.M(y),m))
else{m=u.V(y)
if(m!=null){m.method="call"
return z.$1(H.cr(H.M(y),m))}else{m=t.V(y)
if(m==null){m=s.V(y)
if(m==null){m=r.V(y)
if(m==null){m=q.V(y)
if(m==null){m=p.V(y)
if(m==null){m=s.V(y)
if(m==null){m=o.V(y)
if(m==null){m=n.V(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dx(H.M(y),m))}}return z.$1(new H.ij(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dM()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aC(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dM()
return a},
b2:function(a){var z
if(a==null)return new H.ew(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ew(a)},
kf:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.O(0,a[y],a[x])}return b},
kp:function(a,b,c,d,e,f){H.k(a,"$isck")
switch(H.R(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.o("Unsupported number of arguments for wrapped closure"))},
b0:function(a,b){var z
H.R(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kp)
a.$identity=z
return z},
fa:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isc){z.$reflectionInfo=d
x=H.hs(z).r}else x=d
w=e?Object.create(new H.hP().constructor.prototype):Object.create(new H.cf(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ak
if(typeof u!=="number")return u.C()
$.ak=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.d6(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.ki,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.d0:H.cg
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.d6(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
f7:function(a,b,c,d){var z=H.cg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d6:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.f9(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.f7(y,!w,z,b)
if(y===0){w=$.ak
if(typeof w!=="number")return w.C()
$.ak=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b5
if(v==null){v=H.bR("self")
$.b5=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ak
if(typeof w!=="number")return w.C()
$.ak=w+1
t+=w
w="return function("+t+"){return this."
v=$.b5
if(v==null){v=H.bR("self")
$.b5=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
f8:function(a,b,c,d){var z,y
z=H.cg
y=H.d0
switch(b?-1:a){case 0:throw H.d(H.hB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
f9:function(a,b){var z,y,x,w,v,u,t,s
z=$.b5
if(z==null){z=H.bR("self")
$.b5=z}y=$.d_
if(y==null){y=H.bR("receiver")
$.d_=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.f8(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ak
if(typeof y!=="number")return y.C()
$.ak=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ak
if(typeof y!=="number")return y.C()
$.ak=y+1
return new Function(z+y+"}")()},
cM:function(a,b,c,d,e,f,g){var z,y
z=J.bb(H.bA(b))
H.R(c)
y=!!J.J(d).$isc?J.bb(d):d
return H.fa(a,z,c,y,!!e,f,g)},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.an(a,"String"))},
kv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.an(a,"num"))},
eJ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.an(a,"bool"))},
R:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.an(a,"int"))},
eR:function(a,b){throw H.d(H.an(a,H.M(b).substring(3)))},
kx:function(a,b){var z=J.bO(b)
throw H.d(H.f5(a,z.bc(b,3,z.gl(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.eR(a,b)},
f:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.kx(a,b)},
bA:function(a){if(a==null)return a
if(!!J.J(a).$isc)return a
throw H.d(H.an(a,"List"))},
kr:function(a,b){if(a==null)return a
if(!!J.J(a).$isc)return a
if(J.J(a)[b])return a
H.eR(a,b)},
eK:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.R(z)]
else return a.$S()}return},
bN:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eK(J.J(a))
if(z==null)return!1
y=H.eN(z,null,b,null)
return y},
e:function(a,b){var z,y
if(a==null)return a
if($.cI)return a
$.cI=!0
try{if(H.bN(a,b))return a
z=H.bP(b)
y=H.an(a,z)
throw H.d(y)}finally{$.cI=!1}},
cO:function(a,b){if(a!=null&&!H.cL(a,b))H.p(H.an(a,H.bP(b)))
return a},
eE:function(a){var z
if(a instanceof H.r){z=H.eK(J.J(a))
if(z!=null)return H.bP(z)
return"Closure"}return H.aT(a)},
kC:function(a){throw H.d(new P.fe(H.M(a)))},
eL:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aJ:function(a){if(a==null)return
return a.$ti},
lS:function(a,b,c){return H.b3(a["$as"+H.j(c)],H.aJ(b))},
bz:function(a,b,c,d){var z
H.M(c)
H.R(d)
z=H.b3(a["$as"+H.j(c)],H.aJ(b))
return z==null?null:z[d]},
aB:function(a,b,c){var z
H.M(b)
H.R(c)
z=H.b3(a["$as"+H.j(b)],H.aJ(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.R(b)
z=H.aJ(a)
return z==null?null:z[b]},
bP:function(a){var z=H.aK(a,null)
return z},
aK:function(a,b){var z,y
H.v(b,"$isc",[P.l],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cR(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.R(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.j(b[y])}if('func' in a)return H.k_(a,b)
if('futureOr' in a)return"FutureOr<"+H.aK("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.l]
H.v(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aK(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aK(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aK(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aK(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.ke(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.M(z[l])
n=n+m+H.aK(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cR:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isc",[P.l],"$asc")
if(a==null)return""
z=new P.bL("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aK(u,c)}v="<"+z.i(0)+">"
return v},
b3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
by:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aJ(a)
y=J.J(a)
if(y[b]==null)return!1
return H.eH(H.b3(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.M(b)
H.bA(c)
H.M(d)
if(a==null)return a
z=H.by(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cR(c,0,null)
throw H.d(H.an(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eH:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ad(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ad(a[y],b,c[y],d))return!1
return!0},
lQ:function(a,b,c){return a.apply(b,H.b3(J.J(b)["$as"+H.j(c)],H.aJ(b)))},
eO:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.eO(z)}return!1},
cL:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.eO(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cL(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bN(a,b)}y=J.J(a).constructor
x=H.aJ(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ad(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.cL(a,b))throw H.d(H.an(a,H.bP(b)))
return a},
ad:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ad(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.eN(a,b,c,d)
if('func' in a)return c.builtin$cls==="ck"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ad("type" in a?a.type:null,b,x,d)
else if(H.ad(a,b,x,d))return!0
else{if(!('$is'+"b9" in y.prototype))return!1
w=y.prototype["$as"+"b9"]
v=H.b3(w,z?a.slice(1):null)
return H.ad(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bP(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eH(H.b3(r,z),b,u,d)},
eN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ad(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ad(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ad(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ad(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.ku(m,b,l,d)},
ku:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ad(c[w],d,a[w],b))return!1}return!0},
lR:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
ks:function(a){var z,y,x,w,v,u
z=H.M($.eM.$1(a))
y=$.c8[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cb[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.M($.eG.$2(a,z))
if(z!=null){y=$.c8[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cb[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cc(x)
$.c8[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cb[z]=x
return x}if(v==="-"){u=H.cc(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eQ(a,x)
if(v==="*")throw H.d(P.ef(z))
if(init.leafTags[z]===true){u=H.cc(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eQ(a,x)},
eQ:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cT(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cc:function(a){return J.cT(a,!1,null,!!a.$isA)},
kt:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cc(z)
else return J.cT(z,c,null,null)},
kn:function(){if(!0===$.cQ)return
$.cQ=!0
H.ko()},
ko:function(){var z,y,x,w,v,u,t,s
$.c8=Object.create(null)
$.cb=Object.create(null)
H.kj()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eS.$1(v)
if(u!=null){t=H.kt(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kj:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.b_(C.z,H.b_(C.E,H.b_(C.n,H.b_(C.n,H.b_(C.D,H.b_(C.A,H.b_(C.B(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eM=new H.kk(v)
$.eG=new H.kl(u)
$.eS=new H.km(t)},
b_:function(a,b){return a(b)||b},
eT:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
eU:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hr:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hs:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bb(z)
y=z[0]
x=z[1]
return new H.hr(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i5:{"^":"a;a,b,c,d,e,f",
V:function(a){var z,y,x
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
am:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.l])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e4:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hc:{"^":"V;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dx:function(a,b){return new H.hc(a,b==null?null:b.method)}}},
fF:{"^":"V;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
cr:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fF(a,y,z?null:b.receiver)}}},
ij:{"^":"V;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kF:{"^":"r:15;a",
$1:function(a){if(!!J.J(a).$isV)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ew:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isai:1},
r:{"^":"a;",
i:function(a){return"Closure '"+H.aT(this).trim()+"'"},
gd8:function(){return this},
$isck:1,
gd8:function(){return this}},
dR:{"^":"r;"},
hP:{"^":"dR;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cf:{"^":"dR;a,b,c,d",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cf))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gM:function(a){var z,y
z=this.c
if(z==null)y=H.bh(this.a)
else y=typeof z!=="object"?J.aM(z):H.bh(z)
return(y^H.bh(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aT(z)+"'")},
n:{
cg:function(a){return a.a},
d0:function(a){return a.c},
bR:function(a){var z,y,x,w,v
z=new H.cf("self","target","receiver","name")
y=J.bb(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i6:{"^":"V;a",
i:function(a){return this.a},
n:{
an:function(a,b){return new H.i6("TypeError: "+H.j(P.bU(a))+": type '"+H.eE(a)+"' is not a subtype of type '"+b+"'")}}},
f4:{"^":"V;a",
i:function(a){return this.a},
n:{
f5:function(a,b){return new H.f4("CastError: "+H.j(P.bU(a))+": type '"+H.eE(a)+"' is not a subtype of type '"+b+"'")}}},
hA:{"^":"V;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
hB:function(a){return new H.hA(a)}}},
aR:{"^":"fS;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaa:function(a){return new H.dr(this,[H.x(this,0)])},
cr:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.c9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.c9(y,b)}else return this.fd(b)},
fd:function(a){var z=this.d
if(z==null)return!1
return this.bJ(this.bi(z,J.aM(a)&0x3ffffff),a)>=0},
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
y=this.bi(z,J.aM(a)&0x3ffffff)
x=this.bJ(y,a)
if(x<0)return
return y[x].b},
O:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.x(this,0))
H.B(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bl()
this.b=z}this.c2(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bl()
this.c=y}this.c2(y,b,c)}else{x=this.d
if(x==null){x=this.bl()
this.d=x}w=J.aM(b)&0x3ffffff
v=this.bi(x,w)
if(v==null)this.bq(x,w,[this.bm(b,c)])
else{u=this.bJ(v,b)
if(u>=0)v[u].b=c
else v.push(this.bm(b,c))}}},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.b6(this))
z=z.c}},
c2:function(a,b,c){var z
H.B(b,H.x(this,0))
H.B(c,H.x(this,1))
z=this.aO(a,b)
if(z==null)this.bq(a,b,this.bm(b,c))
else z.b=c},
dQ:function(){this.r=this.r+1&67108863},
bm:function(a,b){var z,y
z=new H.fK(H.B(a,H.x(this,0)),H.B(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dQ()
return z},
bJ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
i:function(a){return P.dt(this)},
aO:function(a,b){return a[b]},
bi:function(a,b){return a[b]},
bq:function(a,b,c){a[b]=c},
dK:function(a,b){delete a[b]},
c9:function(a,b){return this.aO(a,b)!=null},
bl:function(){var z=Object.create(null)
this.bq(z,"<non-identifier-key>",z)
this.dK(z,"<non-identifier-key>")
return z},
$isdq:1},
fK:{"^":"a;a,b,0c,0d"},
dr:{"^":"fl;a,$ti",
gl:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.fL(z,z.r,this.$ti)
y.c=z.e
return y}},
fL:{"^":"a;a,b,0c,0d,$ti",
gH:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.b6(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kk:{"^":"r:15;a",
$1:function(a){return this.a(a)}},
kl:{"^":"r:35;a",
$2:function(a,b){return this.a(a,b)}},
km:{"^":"r:32;a",
$1:function(a){return this.a(H.M(a))}},
fD:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdz:1,
n:{
fE:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(new P.fv("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
ke:function(a){return J.dk(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bu:function(a){return a},
aG:function(a,b,c){H.bA(b)
if(a>>>0!==a||a>=c)throw H.d(H.aI(b,a))},
jZ:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.kd(a,b,c))
return b},
h8:{"^":"n;","%":"DataView;ArrayBufferView;cv|eq|er|h7|es|et|aF"},
cv:{"^":"h8;",
gl:function(a){return a.length},
$isA:1,
$asA:I.cN},
h7:{"^":"er;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
$asbW:function(){return[P.t]},
$asq:function(){return[P.t]},
$isi:1,
$asi:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aF:{"^":"et;",
$asbW:function(){return[P.C]},
$asq:function(){return[P.C]},
$isi:1,
$asi:function(){return[P.C]},
$isc:1,
$asc:function(){return[P.C]}},
lc:{"^":"aF;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ld:{"^":"aF;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int32Array"},
le:{"^":"aF;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lf:{"^":"aF;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lg:{"^":"aF;",
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lh:{"^":"aF;",
gl:function(a){return a.length},
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
h9:{"^":"aF;",
gl:function(a){return a.length},
j:function(a,b){H.aG(b,a,a.length)
return a[b]},
bb:function(a,b,c){return new Uint8Array(a.subarray(b,H.jZ(b,c,a.length)))},
"%":";Uint8Array"},
eq:{"^":"cv+q;"},
er:{"^":"eq+bW;"},
es:{"^":"cv+q;"},
et:{"^":"es+bW;"}}],["","",,P,{"^":"",
iF:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k6()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b0(new P.iH(z),1)).observe(y,{childList:true})
return new P.iG(z,y,x)}else if(self.setImmediate!=null)return P.k7()
return P.k8()},
lF:[function(a){self.scheduleImmediate(H.b0(new P.iI(H.e(a,{func:1,ret:-1})),0))},"$1","k6",4,0,9],
lG:[function(a){self.setImmediate(H.b0(new P.iJ(H.e(a,{func:1,ret:-1})),0))},"$1","k7",4,0,9],
lH:[function(a){P.cz(C.l,H.e(a,{func:1,ret:-1}))},"$1","k8",4,0,9],
cz:function(a,b){var z
H.e(b,{func:1,ret:-1})
z=C.f.R(a.a,1000)
return P.jE(z<0?0:z,b)},
dV:function(a,b){var z
H.e(b,{func:1,ret:-1,args:[P.aU]})
z=C.f.R(a.a,1000)
return P.jF(z<0?0:z,b)},
k2:function(a,b){if(H.bN(a,{func:1,args:[P.a,P.ai]}))return b.fF(a,null,P.a,P.ai)
if(H.bN(a,{func:1,args:[P.a]}))return H.e(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.bQ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k1:function(){var z,y
for(;z=$.aZ,z!=null;){$.bw=null
y=z.b
$.aZ=y
if(y==null)$.bv=null
z.a.$0()}},
lP:[function(){$.cJ=!0
try{P.k1()}finally{$.bw=null
$.cJ=!1
if($.aZ!=null)$.$get$cF().$1(P.eI())}},"$0","eI",0,0,2],
eD:function(a){var z=new P.el(H.e(a,{func:1,ret:-1}))
if($.aZ==null){$.bv=z
$.aZ=z
if(!$.cJ)$.$get$cF().$1(P.eI())}else{$.bv.b=z
$.bv=z}},
k5:function(a){var z,y,x
H.e(a,{func:1,ret:-1})
z=$.aZ
if(z==null){P.eD(a)
$.bw=$.bv
return}y=new P.el(a)
x=$.bw
if(x==null){y.b=z
$.bw=y
$.aZ=y}else{y.b=x.b
x.b=y
$.bw=y
if(y.b==null)$.bv=y}},
ky:function(a){var z,y
z={func:1,ret:-1}
H.e(a,z)
y=$.L
if(C.j===y){P.c7(null,null,C.j,a)
return}y.toString
P.c7(null,null,y,H.e(y.bv(a),z))},
dU:function(a,b){var z,y
z={func:1,ret:-1}
H.e(b,z)
y=$.L
if(y===C.j){y.toString
return P.cz(a,b)}return P.cz(a,H.e(y.bv(b),z))},
i1:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aU]}
H.e(b,z)
y=$.L
if(y===C.j){y.toString
return P.dV(a,b)}x=y.co(b,P.aU)
$.L.toString
return P.dV(a,H.e(x,z))},
c6:function(a,b,c,d,e){var z={}
z.a=d
P.k5(new P.k3(z,e))},
eB:function(a,b,c,d,e){var z,y
H.e(d,{func:1,ret:e})
y=$.L
if(y===c)return d.$0()
$.L=c
z=y
try{y=d.$0()
return y}finally{$.L=z}},
eC:function(a,b,c,d,e,f,g){var z,y
H.e(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.L
if(y===c)return d.$1(e)
$.L=c
z=y
try{y=d.$1(e)
return y}finally{$.L=z}},
k4:function(a,b,c,d,e,f,g,h,i){var z,y
H.e(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.L
if(y===c)return d.$2(e,f)
$.L=c
z=y
try{y=d.$2(e,f)
return y}finally{$.L=z}},
c7:function(a,b,c,d){var z
H.e(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bv(d):c.eY(d,-1)
P.eD(d)},
iH:{"^":"r:17;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iG:{"^":"r:22;a,b,c",
$1:function(a){var z,y
this.a.a=H.e(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iI:{"^":"r:1;a",
$0:function(){this.a.$0()}},
iJ:{"^":"r:1;a",
$0:function(){this.a.$0()}},
ez:{"^":"a;a,0b,c",
dv:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b0(new P.jH(this,b),0),a)
else throw H.d(P.aj("`setTimeout()` not found."))},
dw:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b0(new P.jG(this,a,Date.now(),b),0),a)
else throw H.d(P.aj("Periodic timer."))},
$isaU:1,
n:{
jE:function(a,b){var z=new P.ez(!0,0)
z.dv(a,b)
return z},
jF:function(a,b){var z=new P.ez(!1,0)
z.dw(a,b)
return z}}},
jH:{"^":"r:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jG:{"^":"r:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.di(w,x)}z.c=y
this.d.$1(z)}},
aY:{"^":"a;0a,b,c,d,e,$ti",
fk:function(a){if(this.c!==6)return!0
return this.b.b.bP(H.e(this.d,{func:1,ret:P.ac,args:[P.a]}),a.a,P.ac,P.a)},
fc:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.bN(z,{func:1,args:[P.a,P.ai]}))return H.cO(w.fM(z,a.a,a.b,null,y,P.ai),x)
else return H.cO(w.bP(H.e(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
az:{"^":"a;cj:a<,b,0en:c<,$ti",
d3:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.L
if(y!==C.j){y.toString
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k2(b,y)}H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.az(0,$.L,[c])
w=b==null?1:3
this.c3(new P.aY(x,w,a,b,[z,c]))
return x},
fP:function(a,b){return this.d3(a,null,b)},
c3:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isaY")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaz")
z=y.a
if(z<4){y.c3(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c7(null,null,z,H.e(new P.iX(this,a),{func:1,ret:-1}))}},
ce:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isaY")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaz")
y=u.a
if(y<4){u.ce(a)
return}this.a=y
this.c=u.c}z.a=this.aQ(a)
y=this.b
y.toString
P.c7(null,null,y,H.e(new P.j1(z,this),{func:1,ret:-1}))}},
bo:function(){var z=H.k(this.c,"$isaY")
this.c=null
return this.aQ(z)},
aQ:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
c6:function(a){var z,y,x,w
z=H.x(this,0)
H.cO(a,{futureOr:1,type:z})
y=this.$ti
x=H.by(a,"$isb9",y,"$asb9")
if(x){z=H.by(a,"$isaz",y,null)
if(z)P.en(a,this)
else P.iY(a,this)}else{w=this.bo()
H.B(a,z)
this.a=4
this.c=a
P.bt(this,w)}},
bf:[function(a,b){var z
H.k(b,"$isai")
z=this.bo()
this.a=8
this.c=new P.a7(a,b)
P.bt(this,z)},function(a){return this.bf(a,null)},"fY","$2","$1","gdG",4,2,31],
$isb9:1,
n:{
iY:function(a,b){var z,y,x
b.a=1
try{a.d3(new P.iZ(b),new P.j_(b),null)}catch(x){z=H.aL(x)
y=H.b2(x)
P.ky(new P.j0(b,z,y))}},
en:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaz")
if(z>=4){y=b.bo()
b.a=a.a
b.c=a.c
P.bt(b,y)}else{y=H.k(b.c,"$isaY")
b.a=2
b.c=a
a.ce(y)}},
bt:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isa7")
y=y.b
u=v.a
t=v.b
y.toString
P.c6(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bt(z.a,b)}y=z.a
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
if(p){H.k(r,"$isa7")
y=y.b
u=r.a
t=r.b
y.toString
P.c6(null,null,y,u,t)
return}o=$.L
if(o==null?q!=null:o!==q)$.L=q
else o=null
y=b.c
if(y===8)new P.j4(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j3(x,b,r).$0()}else if((y&2)!==0)new P.j2(z,x,b).$0()
if(o!=null)$.L=o
y=x.b
if(!!J.J(y).$isb9){if(y.a>=4){n=H.k(t.c,"$isaY")
t.c=null
b=t.aQ(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.en(y,t)
return}}m=b.b
n=H.k(m.c,"$isaY")
m.c=null
b=m.aQ(n)
y=x.a
u=x.b
if(!y){H.B(u,H.x(m,0))
m.a=4
m.c=u}else{H.k(u,"$isa7")
m.a=8
m.c=u}z.a=m
y=m}}}},
iX:{"^":"r:1;a,b",
$0:function(){P.bt(this.a,this.b)}},
j1:{"^":"r:1;a,b",
$0:function(){P.bt(this.b,this.a.a)}},
iZ:{"^":"r:17;a",
$1:function(a){var z=this.a
z.a=0
z.c6(a)}},
j_:{"^":"r:28;a",
$2:function(a,b){this.a.bf(a,H.k(b,"$isai"))},
$1:function(a){return this.$2(a,null)}},
j0:{"^":"r:1;a,b,c",
$0:function(){this.a.bf(this.b,this.c)}},
j4:{"^":"r:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.d1(H.e(w.d,{func:1}),null)}catch(v){y=H.aL(v)
x=H.b2(v)
if(this.d){w=H.k(this.a.a.c,"$isa7").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isa7")
else u.b=new P.a7(y,x)
u.a=!0
return}if(!!J.J(z).$isb9){if(z instanceof P.az&&z.gcj()>=4){if(z.gcj()===8){w=this.b
w.b=H.k(z.gen(),"$isa7")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.fP(new P.j5(t),null)
w.a=!1}}},
j5:{"^":"r:27;a",
$1:function(a){return this.a}},
j3:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.B(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.bP(H.e(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aL(t)
y=H.b2(t)
x=this.a
x.b=new P.a7(z,y)
x.a=!0}}},
j2:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isa7")
w=this.c
if(w.fk(z)&&w.e!=null){v=this.b
v.b=w.fc(z)
v.a=!1}}catch(u){y=H.aL(u)
x=H.b2(u)
w=H.k(this.a.a.c,"$isa7")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a7(y,x)
s.a=!0}}},
el:{"^":"a;a,0b"},
cw:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.az(0,$.L,[P.C])
z.a=0
this.fj(new P.hS(z,this),!0,new P.hT(z,y),y.gdG())
return y}},
hS:{"^":"r;a,b",
$1:function(a){H.B(a,H.aB(this.b,"cw",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.aB(this.b,"cw",0)]}}},
hT:{"^":"r:1;a,b",
$0:function(){this.b.c6(this.a.a)}},
dO:{"^":"a;$ti"},
hR:{"^":"a;"},
aU:{"^":"a;"},
a7:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isV:1},
jO:{"^":"a;",$islE:1},
k3:{"^":"r:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dy()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
jq:{"^":"jO;",
fN:function(a){var z,y,x
H.e(a,{func:1,ret:-1})
try{if(C.j===$.L){a.$0()
return}P.eB(null,null,this,a,-1)}catch(x){z=H.aL(x)
y=H.b2(x)
P.c6(null,null,this,z,H.k(y,"$isai"))}},
fO:function(a,b,c){var z,y,x
H.e(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.j===$.L){a.$1(b)
return}P.eC(null,null,this,a,b,-1,c)}catch(x){z=H.aL(x)
y=H.b2(x)
P.c6(null,null,this,z,H.k(y,"$isai"))}},
eY:function(a,b){return new P.js(this,H.e(a,{func:1,ret:b}),b)},
bv:function(a){return new P.jr(this,H.e(a,{func:1,ret:-1}))},
co:function(a,b){return new P.jt(this,H.e(a,{func:1,ret:-1,args:[b]}),b)},
d1:function(a,b){H.e(a,{func:1,ret:b})
if($.L===C.j)return a.$0()
return P.eB(null,null,this,a,b)},
bP:function(a,b,c,d){H.e(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.L===C.j)return a.$1(b)
return P.eC(null,null,this,a,b,c,d)},
fM:function(a,b,c,d,e,f){H.e(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.L===C.j)return a.$2(b,c)
return P.k4(null,null,this,a,b,c,d,e,f)},
fF:function(a,b,c,d){return H.e(a,{func:1,ret:b,args:[c,d]})}},
js:{"^":"r;a,b,c",
$0:function(){return this.a.d1(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jr:{"^":"r:2;a,b",
$0:function(){return this.a.fN(this.b)}},
jt:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.fO(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fN:function(a,b,c){H.bA(a)
return H.v(H.kf(a,new H.aR(0,0,[b,c])),"$isdq",[b,c],"$asdq")},
fM:function(a,b){return new H.aR(0,0,[a,b])},
fO:function(a,b,c,d){return new P.jc(0,0,[d])},
fy:function(a,b,c){var z,y
if(P.cK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bx()
C.a.h(y,a)
try{P.k0(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.dP(b,H.kr(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cn:function(a,b,c){var z,y,x
if(P.cK(a))return b+"..."+c
z=new P.bL(b)
y=$.$get$bx()
C.a.h(y,a)
try{x=z
x.a=P.dP(x.gah(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gah()+c
y=z.gah()
return y.charCodeAt(0)==0?y:y},
cK:function(a){var z,y
for(z=0;y=$.$get$bx(),z<y.length;++z)if(a===y[z])return!0
return!1},
k0:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.j(z.gH(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gH(z);++x
if(!z.w()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gH(z);++x
for(;z.w();t=s,s=r){r=z.gH(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dt:function(a){var z,y,x
z={}
if(P.cK(a))return"{...}"
y=new P.bL("")
try{C.a.h($.$get$bx(),a)
x=y
x.a=x.gah()+"{"
z.a=!0
J.eZ(a,new P.fT(z,y))
z=y
z.a=z.gah()+"}"}finally{z=$.$get$bx()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gah()
return z.charCodeAt(0)==0?z:z},
jc:{"^":"j6;a,0b,0c,0d,0e,0f,r,$ti",
gN:function(a){return P.ep(this,this.r,H.x(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cH()
this.b=z}return this.c4(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cH()
this.c=y}return this.c4(y,b)}else return this.dz(0,b)},
dz:function(a,b){var z,y,x
H.B(b,H.x(this,0))
z=this.d
if(z==null){z=P.cH()
this.d=z}y=this.c7(b)
x=z[y]
if(x==null)z[y]=[this.be(b)]
else{if(this.cc(x,b)>=0)return!1
x.push(this.be(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cf(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cf(this.c,b)
else return this.eg(0,b)},
eg:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dO(z,b)
x=this.cc(y,b)
if(x<0)return!1
this.cl(y.splice(x,1)[0])
return!0},
c4:function(a,b){H.B(b,H.x(this,0))
if(H.k(a[b],"$iscG")!=null)return!1
a[b]=this.be(b)
return!0},
cf:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$iscG")
if(z==null)return!1
this.cl(z)
delete a[b]
return!0},
c5:function(){this.r=this.r+1&67108863},
be:function(a){var z,y
z=new P.cG(H.B(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.c5()
return z},
cl:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.c5()},
c7:function(a){return J.aM(a)&0x3ffffff},
dO:function(a,b){return a[this.c7(b)]},
cc:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
n:{
cH:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cG:{"^":"a;a,0b,0c"},
jd:{"^":"a;a,b,0c,0d,$ti",
gH:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.b6(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.x(this,0))
this.c=z.b
return!0}}},
n:{
ep:function(a,b,c){var z=new P.jd(a,b,[c])
z.c=a.e
return z}}},
j6:{"^":"hC;"},
bZ:{"^":"je;",$isi:1,$isc:1},
q:{"^":"a;$ti",
gN:function(a){return new H.ds(a,this.gl(a),0,[H.bz(this,a,"q",0)])},
v:function(a,b){return this.j(a,b)},
fR:function(a,b){var z,y,x
z=H.b([],[H.bz(this,a,"q",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.z(x)
if(!(y<x))break
C.a.O(z,y,this.j(a,y));++y}return z},
fQ:function(a){return this.fR(a,!0)},
i:function(a){return P.cn(a,"[","]")}},
fS:{"^":"a6;"},
fT:{"^":"r:13;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
a6:{"^":"a;$ti",
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.bz(this,a,"a6",0),H.bz(this,a,"a6",1)]})
for(z=J.bB(this.gaa(a));z.w();){y=z.gH(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.b4(this.gaa(a))},
i:function(a){return P.dt(a)},
$isa_:1},
hE:{"^":"a;$ti",
i:function(a){return P.cn(this,"{","}")},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.cY("index"))
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=P.ep(this,this.r,H.x(this,0)),y=0;z.w();){x=z.d
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
$isi:1},
hC:{"^":"hE;"},
je:{"^":"a+q;"}}],["","",,P,{"^":"",ci:{"^":"a;$ti"},d9:{"^":"hR;$ti"},fn:{"^":"ci;",
$asci:function(){return[P.l,[P.c,P.C]]}},io:{"^":"fn;a"},ip:{"^":"d9;",
f3:function(a,b,c){var z,y,x,w
z=a.length
P.dF(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jN(0,0,x)
if(w.dM(a,b,z)!==z)w.cm(C.i.bB(a,z-1),0)
return C.H.bb(x,0,w.b)},
f2:function(a){return this.f3(a,0,null)},
$asd9:function(){return[P.l,[P.c,P.C]]}},jN:{"^":"a;a,b,c",
cm:function(a,b){var z,y,x,w,v
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
dM:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.bB(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aM(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cm(w,C.i.aM(a,u)))x=u}else if(w<=2047){v=this.b
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
fp:function(a){var z=J.J(a)
if(!!z.$isr)return z.i(a)
return"Instance of '"+H.aT(a)+"'"},
fP:function(a,b,c,d){var z,y
H.B(b,d)
z=J.fA(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.O(z,y,b)
return H.v(z,"$isc",[d],"$asc")},
fQ:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gN(a);x.w();)C.a.h(y,H.B(x.gH(x),c))
if(b)return y
return H.v(J.bb(y),"$isc",z,"$asc")},
cx:function(a,b,c){var z,y
z=P.C
H.v(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.v(a,"$isaQ",[z],"$asaQ")
y=a.length
c=P.dF(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.ad()
z=c<y}else z=!0
return H.dE(z?C.a.bb(a,b,c):a)}return P.hU(a,b,c)},
hU:function(a,b,c){var z,y,x
H.v(a,"$isi",[P.C],"$asi")
z=J.bB(a)
for(y=0;y<b;++y)if(!z.w())throw H.d(P.a8(b,0,y,null,null))
x=[]
for(;z.w();)x.push(z.gH(z))
return H.dE(x)},
ht:function(a,b,c){return new H.fD(a,H.fE(a,!1,!0,!1))},
jM:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isc",[P.C],"$asc")
if(c===C.q){z=$.$get$eA().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.f2(H.B(b,H.aB(c,"ci",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ho(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ae(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fp(a)},
o:function(a){return new P.em(a)},
cU:function(a){H.kw(a)},
ac:{"^":"a;"},
"+bool":0,
aD:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.aD))return!1
return this.a===b.a&&this.b===b.b},
gM:function(a){var z=this.a
return(z^C.f.aR(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ff(H.hn(this))
y=P.bD(H.hl(this))
x=P.bD(H.hh(this))
w=P.bD(H.hi(this))
v=P.bD(H.hk(this))
u=P.bD(H.hm(this))
t=P.fg(H.hj(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
ff:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fg:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bD:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"T;"},
"+double":0,
aO:{"^":"a;a",
k:function(a,b){return new P.aO(C.f.W(this.a*b))},
ad:function(a,b){return C.f.ad(this.a,H.k(b,"$isaO").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.aO))return!1
return this.a===b.a},
gM:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fk()
y=this.a
if(y<0)return"-"+new P.aO(0-y).i(0)
x=z.$1(C.f.R(y,6e7)%60)
w=z.$1(C.f.R(y,1e6)%60)
v=new P.fj().$1(y%1e6)
return""+C.f.R(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
di:function(a,b,c,d,e,f){return new P.aO(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fj:{"^":"r:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fk:{"^":"r:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
V:{"^":"a;"},
dy:{"^":"V;",
i:function(a){return"Throw of null."}},
aC:{"^":"V;a,b,c,d",
gbh:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbg:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbh()+y+x
if(!this.a)return w
v=this.gbg()
u=P.bU(this.b)
return w+v+": "+H.j(u)},
n:{
bQ:function(a,b,c){return new P.aC(!0,a,b,c)},
cY:function(a){return new P.aC(!1,null,a,"Must not be null")}}},
c0:{"^":"aC;e,f,a,b,c,d",
gbh:function(){return"RangeError"},
gbg:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
c1:function(a,b,c){return new P.c0(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.c0(b,c,!0,a,d,"Invalid value")},
dF:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.z(a)
if(0<=a){if(typeof c!=="number")return H.z(c)
z=a>c}else z=!0
if(z)throw H.d(P.a8(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.z(c)
z=b>c}else z=!0
if(z)throw H.d(P.a8(b,a,c,"end",f))
return b}return c}}},
fx:{"^":"aC;e,l:f>,a,b,c,d",
gbh:function(){return"RangeError"},
gbg:function(){if(J.eW(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
K:function(a,b,c,d,e){var z=H.R(e!=null?e:J.b4(b))
return new P.fx(b,z,!0,a,c,"Index out of range")}}},
il:{"^":"V;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
aj:function(a){return new P.il(a)}}},
ii:{"^":"V;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
ef:function(a){return new P.ii(a)}}},
hO:{"^":"V;a",
i:function(a){return"Bad state: "+this.a}},
fb:{"^":"V;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.bU(z))+"."},
n:{
b6:function(a){return new P.fb(a)}}},
hd:{"^":"a;",
i:function(a){return"Out of Memory"},
$isV:1},
dM:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isV:1},
fe:{"^":"V;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
em:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fv:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bc(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"T;"},
"+int":0,
i:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gN(this)
for(y=0;z.w();)++y
return y},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.cY("index"))
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.w();){x=z.gH(z)
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
i:function(a){return P.fy(this,"(",")")}},
co:{"^":"a;$ti"},
c:{"^":"a;$ti",$isi:1},
"+List":0,
a_:{"^":"a;$ti"},
F:{"^":"a;",
gM:function(a){return P.a.prototype.gM.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
T:{"^":"a;"},
"+num":0,
a:{"^":";",
p:function(a,b){return this===b},
gM:function(a){return H.bh(this)},
i:function(a){return"Instance of '"+H.aT(this)+"'"},
toString:function(){return this.i(this)}},
ai:{"^":"a;"},
l:{"^":"a;",$isdz:1},
"+String":0,
bL:{"^":"a;ah:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
dP:function(a,b,c){var z=J.bB(b)
if(!z.w())return a
if(c.length===0){do a+=H.j(z.gH(z))
while(z.w())}else{a+=H.j(z.gH(z))
for(;z.w();)a=a+c+H.j(z.gH(z))}return a}}}}],["","",,W,{"^":"",
d5:function(a,b){var z=document.createElement("canvas")
return z},
fm:function(a){H.k(a,"$isa1")
return"wheel"},
c4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eo:function(a,b,c,d){var z,y
z=W.c4(W.c4(W.c4(W.c4(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eF:function(a,b){var z
H.e(a,{func:1,ret:-1,args:[b]})
z=$.L
if(z===C.j)return a
return z.co(a,b)},
bE:{"^":"Y;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kG:{"^":"n;0l:length=","%":"AccessibleNodeList"},
kH:{"^":"bE;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kI:{"^":"bE;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
f3:{"^":"n;","%":";Blob"},
ch:{"^":"bE;",
bU:function(a,b,c){var z=a.getContext(b,P.k9(c,null))
return z},
$isch:1,
"%":"HTMLCanvasElement"},
kO:{"^":"I;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kQ:{"^":"fd;0l:length=","%":"CSSPerspective"},
b7:{"^":"n;",$isb7:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kR:{"^":"iN;0l:length=",
d9:function(a,b){var z=a.getPropertyValue(this.dD(a,b))
return z==null?"":z},
dD:function(a,b){var z,y
z=$.$get$da()
y=z[b]
if(typeof y==="string")return y
y=this.ex(a,b)
z[b]=y
return y},
ex:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fh()+b
if(z in a)return z
return b},
gbw:function(a){return a.bottom},
ga3:function(a){return a.height},
gas:function(a){return a.left},
gaG:function(a){return a.right},
gaJ:function(a){return a.top},
ga4:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fc:{"^":"a;",
gas:function(a){return this.d9(a,"left")}},
db:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fd:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kS:{"^":"db;0l:length=","%":"CSSTransformValue"},
kT:{"^":"db;0l:length=","%":"CSSUnparsedValue"},
kU:{"^":"n;0l:length=","%":"DataTransferItemList"},
kV:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
kW:{"^":"iP;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a4,P.T]]},
$asq:function(){return[[P.a4,P.T]]},
$isi:1,
$asi:function(){return[[P.a4,P.T]]},
$isc:1,
$asc:function(){return[[P.a4,P.T]]},
$asu:function(){return[[P.a4,P.T]]},
"%":"ClientRectList|DOMRectList"},
fi:{"^":"n;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.ga4(a))+" x "+H.j(this.ga3(a))},
p:function(a,b){var z
if(b==null)return!1
z=H.by(b,"$isa4",[P.T],"$asa4")
if(!z)return!1
z=J.c9(b)
return a.left===z.gas(b)&&a.top===z.gaJ(b)&&this.ga4(a)===z.ga4(b)&&this.ga3(a)===z.ga3(b)},
gM:function(a){return W.eo(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga4(a)&0x1FFFFFFF,this.ga3(a)&0x1FFFFFFF)},
gbw:function(a){return a.bottom},
ga3:function(a){return a.height},
gas:function(a){return a.left},
gaG:function(a){return a.right},
gaJ:function(a){return a.top},
ga4:function(a){return a.width},
$isa4:1,
$asa4:function(){return[P.T]},
"%":";DOMRectReadOnly"},
kX:{"^":"iR;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.l]},
$asq:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$isc:1,
$asc:function(){return[P.l]},
$asu:function(){return[P.l]},
"%":"DOMStringList"},
kY:{"^":"n;0l:length=","%":"DOMTokenList"},
iM:{"^":"bZ;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.k(z[b],"$isY")},
h:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var z=this.fQ(this)
return new J.ao(z,z.length,0,[H.x(z,0)])},
$asq:function(){return[W.Y]},
$asi:function(){return[W.Y]},
$asc:function(){return[W.Y]}},
Y:{"^":"I;",
gcp:function(a){return new W.iM(a,a.children)},
gcq:function(a){return P.hq(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.T)},
i:function(a){return a.localName},
$isY:1,
"%":";Element"},
a5:{"^":"n;",$isa5:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a1:{"^":"n;",
cn:["dd",function(a,b,c,d){H.e(c,{func:1,args:[W.a5]})
if(c!=null)this.dA(a,b,c,!1)}],
dA:function(a,b,c,d){return a.addEventListener(b,H.b0(H.e(c,{func:1,args:[W.a5]}),1),!1)},
$isa1:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eu|ev|ex|ey"},
b8:{"^":"f3;",$isb8:1,"%":"File"},
kZ:{"^":"iW;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b8]},
$asq:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asu:function(){return[W.b8]},
"%":"FileList"},
l_:{"^":"a1;0l:length=","%":"FileWriter"},
l0:{"^":"bE;0l:length=","%":"HTMLFormElement"},
ba:{"^":"n;",$isba:1,"%":"Gamepad"},
l1:{"^":"n;0l:length=","%":"History"},
l2:{"^":"j8;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.I]},
$asq:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asu:function(){return[W.I]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bc:{"^":"cA;",$isbc:1,"%":"KeyboardEvent"},
l6:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
l7:{"^":"n;0l:length=","%":"MediaList"},
l8:{"^":"a1;",
cn:function(a,b,c,d){H.e(c,{func:1,args:[W.a5]})
if(b==="message")a.start()
this.dd(a,b,c,!1)},
"%":"MessagePort"},
l9:{"^":"jf;",
j:function(a,b){return P.aA(a.get(H.M(b)))},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aA(y.value[1]))}},
gaa:function(a){var z=H.b([],[P.l])
this.F(a,new W.h4(z))
return z},
gl:function(a){return a.size},
$asa6:function(){return[P.l,null]},
$isa_:1,
$asa_:function(){return[P.l,null]},
"%":"MIDIInputMap"},
h4:{"^":"r:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
la:{"^":"jg;",
j:function(a,b){return P.aA(a.get(H.M(b)))},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aA(y.value[1]))}},
gaa:function(a){var z=H.b([],[P.l])
this.F(a,new W.h5(z))
return z},
gl:function(a){return a.size},
$asa6:function(){return[P.l,null]},
$isa_:1,
$asa_:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
h5:{"^":"r:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bd:{"^":"n;",$isbd:1,"%":"MimeType"},
lb:{"^":"ji;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bd]},
$asq:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asu:function(){return[W.bd]},
"%":"MimeTypeArray"},
ah:{"^":"cA;",$isah:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iL:{"^":"bZ;a",
gN:function(a){var z=this.a.childNodes
return new W.dj(z,z.length,-1,[H.bz(C.I,z,"u",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asq:function(){return[W.I]},
$asi:function(){return[W.I]},
$asc:function(){return[W.I]}},
I:{"^":"a1;",
i:function(a){var z=a.nodeValue
return z==null?this.de(a):z},
$isI:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
ha:{"^":"jk;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.I]},
$asq:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asu:function(){return[W.I]},
"%":"NodeList|RadioNodeList"},
bg:{"^":"n;0l:length=",$isbg:1,"%":"Plugin"},
lk:{"^":"jo;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bg]},
$asq:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asu:function(){return[W.bg]},
"%":"PluginArray"},
lm:{"^":"ju;",
j:function(a,b){return P.aA(a.get(H.M(b)))},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aA(y.value[1]))}},
gaa:function(a){var z=H.b([],[P.l])
this.F(a,new W.hz(z))
return z},
gl:function(a){return a.size},
$asa6:function(){return[P.l,null]},
$isa_:1,
$asa_:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hz:{"^":"r:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lo:{"^":"bE;0l:length=","%":"HTMLSelectElement"},
bi:{"^":"a1;",$isbi:1,"%":"SourceBuffer"},
lp:{"^":"ev;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bi]},
$asq:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asu:function(){return[W.bi]},
"%":"SourceBufferList"},
bj:{"^":"n;",$isbj:1,"%":"SpeechGrammar"},
lq:{"^":"jw;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bj]},
$asq:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asu:function(){return[W.bj]},
"%":"SpeechGrammarList"},
bk:{"^":"n;0l:length=",$isbk:1,"%":"SpeechRecognitionResult"},
ls:{"^":"jz;",
j:function(a,b){return a.getItem(H.M(b))},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.l,P.l]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaa:function(a){var z=H.b([],[P.l])
this.F(a,new W.hQ(z))
return z},
gl:function(a){return a.length},
$asa6:function(){return[P.l,P.l]},
$isa_:1,
$asa_:function(){return[P.l,P.l]},
"%":"Storage"},
hQ:{"^":"r:25;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bl:{"^":"n;",$isbl:1,"%":"CSSStyleSheet|StyleSheet"},
bm:{"^":"a1;",$isbm:1,"%":"TextTrack"},
bn:{"^":"a1;",$isbn:1,"%":"TextTrackCue|VTTCue"},
lw:{"^":"jD;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bn]},
$asq:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asu:function(){return[W.bn]},
"%":"TextTrackCueList"},
lx:{"^":"ey;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bm]},
$asq:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asu:function(){return[W.bm]},
"%":"TextTrackList"},
ly:{"^":"n;0l:length=","%":"TimeRanges"},
bo:{"^":"n;",$isbo:1,"%":"Touch"},
aV:{"^":"cA;",$isaV:1,"%":"TouchEvent"},
lz:{"^":"jJ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bo]},
$asq:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asu:function(){return[W.bo]},
"%":"TouchList"},
lA:{"^":"n;0l:length=","%":"TrackDefaultList"},
cA:{"^":"a5;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lC:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
lD:{"^":"a1;0l:length=","%":"VideoTrackList"},
bs:{"^":"ah;",
gf6:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.aj("deltaY is not supported"))},
gf5:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.aj("deltaX is not supported"))},
$isbs:1,
"%":"WheelEvent"},
iE:{"^":"a1;",
ek:function(a,b){return a.requestAnimationFrame(H.b0(H.e(b,{func:1,ret:-1,args:[P.T]}),1))},
dL:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lI:{"^":"jQ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b7]},
$asq:function(){return[W.b7]},
$isi:1,
$asi:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asu:function(){return[W.b7]},
"%":"CSSRuleList"},
lJ:{"^":"fi;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
p:function(a,b){var z
if(b==null)return!1
z=H.by(b,"$isa4",[P.T],"$asa4")
if(!z)return!1
z=J.c9(b)
return a.left===z.gas(b)&&a.top===z.gaJ(b)&&a.width===z.ga4(b)&&a.height===z.ga3(b)},
gM:function(a){return W.eo(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga3:function(a){return a.height},
ga4:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lL:{"^":"jS;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.ba]},
$asq:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asu:function(){return[W.ba]},
"%":"GamepadList"},
lM:{"^":"jU;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.I]},
$asq:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asu:function(){return[W.I]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lN:{"^":"jW;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bk]},
$asq:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asu:function(){return[W.bk]},
"%":"SpeechRecognitionResultList"},
lO:{"^":"jY;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bl]},
$asq:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asu:function(){return[W.bl]},
"%":"StyleSheetList"},
iS:{"^":"cw;a,b,c,$ti",
fj:function(a,b,c,d){var z=H.x(this,0)
H.e(a,{func:1,ret:-1,args:[z]})
H.e(c,{func:1,ret:-1})
return W.W(this.a,this.b,a,!1,z)}},
lK:{"^":"iS;a,b,c,$ti"},
iT:{"^":"dO;a,b,c,d,e,$ti",
ey:function(){var z=this.d
if(z!=null&&this.a<=0)J.eY(this.b,this.c,z,!1)},
n:{
W:function(a,b,c,d,e){var z=c==null?null:W.eF(new W.iU(c),W.a5)
z=new W.iT(0,a,b,z,!1,[e])
z.ey()
return z}}},
iU:{"^":"r:5;a",
$1:function(a){return this.a.$1(H.k(a,"$isa5"))}},
u:{"^":"a;$ti",
gN:function(a){return new W.dj(a,this.gl(a),-1,[H.bz(this,a,"u",0)])}},
dj:{"^":"a;a,b,c,0d,$ti",
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.eX(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gH:function(a){return this.d}},
iN:{"^":"n+fc;"},
iO:{"^":"n+q;"},
iP:{"^":"iO+u;"},
iQ:{"^":"n+q;"},
iR:{"^":"iQ+u;"},
iV:{"^":"n+q;"},
iW:{"^":"iV+u;"},
j7:{"^":"n+q;"},
j8:{"^":"j7+u;"},
jf:{"^":"n+a6;"},
jg:{"^":"n+a6;"},
jh:{"^":"n+q;"},
ji:{"^":"jh+u;"},
jj:{"^":"n+q;"},
jk:{"^":"jj+u;"},
jn:{"^":"n+q;"},
jo:{"^":"jn+u;"},
ju:{"^":"n+a6;"},
eu:{"^":"a1+q;"},
ev:{"^":"eu+u;"},
jv:{"^":"n+q;"},
jw:{"^":"jv+u;"},
jz:{"^":"n+a6;"},
jC:{"^":"n+q;"},
jD:{"^":"jC+u;"},
ex:{"^":"a1+q;"},
ey:{"^":"ex+u;"},
jI:{"^":"n+q;"},
jJ:{"^":"jI+u;"},
jP:{"^":"n+q;"},
jQ:{"^":"jP+u;"},
jR:{"^":"n+q;"},
jS:{"^":"jR+u;"},
jT:{"^":"n+q;"},
jU:{"^":"jT+u;"},
jV:{"^":"n+q;"},
jW:{"^":"jV+u;"},
jX:{"^":"n+q;"},
jY:{"^":"jX+u;"}}],["","",,P,{"^":"",
aA:function(a){var z,y,x,w,v
if(a==null)return
z=P.fM(P.l,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=H.M(y[w])
z.O(0,v,a[v])}return z},
k9:function(a,b){var z={}
a.F(0,new P.ka(z))
return z},
dh:function(){var z=$.dg
if(z==null){z=J.cd(window.navigator.userAgent,"Opera",0)
$.dg=z}return z},
fh:function(){var z,y
z=$.dd
if(z!=null)return z
y=$.de
if(y==null){y=J.cd(window.navigator.userAgent,"Firefox",0)
$.de=y}if(y)z="-moz-"
else{y=$.df
if(y==null){y=!P.dh()&&J.cd(window.navigator.userAgent,"Trident/",0)
$.df=y}if(y)z="-ms-"
else z=P.dh()?"-o-":"-webkit-"}$.dd=z
return z},
ka:{"^":"r:13;a",
$2:function(a,b){this.a[a]=b}},
fs:{"^":"bZ;a,b",
gbj:function(){var z,y,x
z=this.b
y=H.aB(z,"q",0)
x=W.Y
return new H.fU(new H.iC(z,H.e(new P.ft(),{func:1,ret:P.ac,args:[y]}),[y]),H.e(new P.fu(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b4(this.gbj().a)},
j:function(a,b){var z=this.gbj()
return z.b.$1(J.cX(z.a,b))},
gN:function(a){var z=P.fQ(this.gbj(),!1,W.Y)
return new J.ao(z,z.length,0,[H.x(z,0)])},
$asq:function(){return[W.Y]},
$asi:function(){return[W.Y]},
$asc:function(){return[W.Y]}},
ft:{"^":"r:23;",
$1:function(a){return!!J.J(H.k(a,"$isI")).$isY}},
fu:{"^":"r:19;",
$1:function(a){return H.f(H.k(a,"$isI"),"$isY")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jp:{"^":"a;$ti",
gaG:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.B(z+this.c,H.x(this,0))},
gbw:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.B(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.by(b,"$isa4",[P.T],"$asa4")
if(!z)return!1
z=this.a
y=J.c9(b)
x=y.gas(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaJ(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.x(this,0)
if(H.B(z+this.c,w)===y.gaG(b)){if(typeof x!=="number")return x.C()
z=H.B(x+this.d,w)===y.gbw(b)}else z=!1}else z=!1}else z=!1
return z},
gM:function(a){var z,y,x,w,v
z=this.a
y=J.aM(z)
x=this.b
w=J.aM(x)
if(typeof z!=="number")return z.C()
v=H.x(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.B(x+this.d,v)
return P.j9(P.c5(P.c5(P.c5(P.c5(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a4:{"^":"jp;as:a>,aJ:b>,a4:c>,a3:d>,$ti",n:{
hq:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.ad()
if(c<0)z=-c*0
else z=c
H.B(z,e)
if(typeof d!=="number")return d.ad()
if(d<0)y=-d*0
else y=d
return new P.a4(a,b,z,H.B(y,e),[e])}}}}],["","",,P,{"^":"",bH:{"^":"n;",$isbH:1,"%":"SVGLength"},l5:{"^":"jb;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bH]},
$isi:1,
$asi:function(){return[P.bH]},
$isc:1,
$asc:function(){return[P.bH]},
$asu:function(){return[P.bH]},
"%":"SVGLengthList"},bK:{"^":"n;",$isbK:1,"%":"SVGNumber"},li:{"^":"jm;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bK]},
$isi:1,
$asi:function(){return[P.bK]},
$isc:1,
$asc:function(){return[P.bK]},
$asu:function(){return[P.bK]},
"%":"SVGNumberList"},ll:{"^":"n;0l:length=","%":"SVGPointList"},lt:{"^":"jB;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$isc:1,
$asc:function(){return[P.l]},
$asu:function(){return[P.l]},
"%":"SVGStringList"},lu:{"^":"Y;",
gcp:function(a){return new P.fs(a,new W.iL(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bM:{"^":"n;",$isbM:1,"%":"SVGTransform"},lB:{"^":"jL;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bM]},
$isi:1,
$asi:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asu:function(){return[P.bM]},
"%":"SVGTransformList"},ja:{"^":"n+q;"},jb:{"^":"ja+u;"},jl:{"^":"n+q;"},jm:{"^":"jl+u;"},jA:{"^":"n+q;"},jB:{"^":"jA+u;"},jK:{"^":"n+q;"},jL:{"^":"jK+u;"}}],["","",,P,{"^":"",kJ:{"^":"n;0l:length=","%":"AudioBuffer"},kK:{"^":"iK;",
j:function(a,b){return P.aA(a.get(H.M(b)))},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aA(y.value[1]))}},
gaa:function(a){var z=H.b([],[P.l])
this.F(a,new P.f1(z))
return z},
gl:function(a){return a.size},
$asa6:function(){return[P.l,null]},
$isa_:1,
$asa_:function(){return[P.l,null]},
"%":"AudioParamMap"},f1:{"^":"r:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},kL:{"^":"a1;0l:length=","%":"AudioTrackList"},f2:{"^":"a1;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lj:{"^":"f2;0l:length=","%":"OfflineAudioContext"},iK:{"^":"n+a6;"}}],["","",,P,{"^":"",dI:{"^":"n;",$isdI:1,"%":"WebGLRenderingContext"},ig:{"^":"n;",$isig:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lr:{"^":"jy;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aA(a.item(b))},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[[P.a_,,,]]},
$isi:1,
$asi:function(){return[[P.a_,,,]]},
$isc:1,
$asc:function(){return[[P.a_,,,]]},
$asu:function(){return[[P.a_,,,]]},
"%":"SQLResultSetRowList"},jx:{"^":"n+q;"},jy:{"^":"jx+u;"}}],["","",,O,{"^":"",aN:{"^":"a;0a,0b,0c,0d,$ti",
c_:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
bV:function(a,b,c){var z=H.aB(this,"aN",0)
H.e(b,{func:1,ret:P.ac,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.C,[P.i,z]]}
H.e(a,z)
H.e(c,z)
this.b=b
this.c=a
this.d=c},
ba:function(a,b){return this.bV(a,null,b)},
ea:function(a){var z
H.v(a,"$isi",[H.aB(this,"aN",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dR:function(a,b){var z
H.v(b,"$isi",[H.aB(this,"aN",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gN:function(a){var z=this.a
return new J.ao(z,z.length,0,[H.x(z,0)])},
v:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aB(this,"aN",0)
H.B(b,z)
z=[z]
if(this.ea(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dR(x,H.b([b],z))}},
$isi:1,
n:{
cj:function(a){var z=new O.aN([a])
z.c_(a)
return z}}},ct:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.al()
this.b=z}return z},
dq:function(a){var z=this.b
if(!(z==null))z.J(a)},
ae:function(){return this.dq(null)},
gK:function(a){var z=this.a
if(z.length>0)return C.a.gbK(z)
else return V.cu()},
cZ:function(a){var z=this.a
if(a==null)C.a.h(z,V.cu())
else C.a.h(z,a)
this.ae()},
bM:function(){var z=this.a
if(z.length>0){z.pop()
this.ae()}}}}],["","",,E,{"^":"",ce:{"^":"a;"},aE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0P:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbW:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gB()
y.toString
x=H.e(this.gcW(),{func:1,ret:-1,args:[D.w]})
C.a.L(y.a,x)}y=this.c
if(y!=null){y=y.gB()
y.toString
x=H.e(this.gcW(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)}w=new D.N("shape",z,this.c,this,[F.dL])
w.b=!0
this.a_(w)}},
saC:function(a){var z,y,x,w
if(!J.O(this.r,a)){z=this.r
if(z!=null){y=z.gB()
y.toString
x=H.e(this.gcV(),{func:1,ret:-1,args:[D.w]})
C.a.L(y.a,x)}if(a!=null){y=a.gB()
y.toString
x=H.e(this.gcV(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)}this.r=a
w=new D.N("mover",z,a,this,[U.bJ])
w.b=!0
this.a_(w)}},
b9:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.c
z.sd6(z.a+z.d*b.y)
z.scX(0,z.b+z.e*b.y)
z.sd0(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.ap(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.k(0,V.ap(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.k(0,V.ap(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.ac(0)}u=z.x}else u=null
if(!J.O(u,this.x)){t=this.x
this.x=u
s=new D.N("matrix",t,u,this,[V.ag])
s.b=!0
this.a_(s)}for(z=this.y.a,z=new J.ao(z,z.length,0,[H.x(z,0)]);z.w();)z.d.b9(0,b)},
at:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gK(z))
else C.a.h(z.a,y.k(0,z.gK(z)))
z.ae()
a.d_(this.f)
z=a.dy
x=(z&&C.a).gbK(z)
if(x!=null&&this.d!=null)x.fI(a,this)
for(z=this.y.a,z=new J.ao(z,z.length,0,[H.x(z,0)]);z.w();)z.d.at(a)
a.cY()
a.dx.bM()},
a_:function(a){var z=this.z
if(!(z==null))z.J(a)},
T:function(){return this.a_(null)},
ft:[function(a){H.k(a,"$isw")
this.e=null
this.a_(a)},function(){return this.ft(null)},"ht","$1","$0","gcW",0,2,0],
fs:[function(a){this.a_(H.k(a,"$isw"))},function(){return this.fs(null)},"hs","$1","$0","gcV",0,2,0],
fp:[function(a){this.a_(H.k(a,"$isw"))},function(){return this.fp(null)},"hq","$1","$0","gcU",0,2,0],
hp:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aE],"$asi")
for(z=b.length,y=this.gcU(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gP()==null){t=new D.aP()
t.a=H.b([],w)
t.c=0
u.sP(t)}t=u.gP()
t.toString
H.e(y,x)
C.a.h(t.a,y)}}this.T()},"$2","gfo",8,0,6],
hr:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aE],"$asi")
for(z=b.length,y=this.gcU(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gP()==null){t=new D.aP()
t.a=H.b([],w)
t.c=0
u.sP(t)}t=u.gP()
t.toString
H.e(y,x)
C.a.L(t.a,y)}}this.T()},"$2","gfq",8,0,6],
$isaq:1},hu:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dk:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aD(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.ct()
y=[V.ag]
z.a=H.b([],y)
x=z.gB()
x.toString
w={func:1,ret:-1,args:[D.w]}
v=H.e(new E.hw(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.ct()
z.a=H.b([],y)
v=z.gB()
v.toString
x=H.e(new E.hx(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.ct()
z.a=H.b([],y)
y=z.gB()
y.toString
w=H.e(new E.hy(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.b([],[O.cy])
this.dy=z
C.a.h(z,null)
this.fr=new H.aR(0,0,[P.l,A.dK])},
gfE:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gK(z)
y=this.db
y=z.k(0,y.gK(y))
this.z=y
z=y}return z},
d_:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbK(z):a;(z&&C.a).h(z,y)},
cY:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
hv:function(a,b){var z=new E.hu(a,b)
z.dk(a,b)
return z}}},hw:{"^":"r:10;a",
$1:function(a){var z
H.k(a,"$isw")
z=this.a
z.z=null
z.ch=null}},hx:{"^":"r:10;a",
$1:function(a){var z
H.k(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hy:{"^":"r:10;a",
$1:function(a){var z
H.k(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},hZ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0P:x@,0y,0z,0Q,0ch",
ds:[function(a){var z
H.k(a,"$isw")
z=this.x
if(!(z==null))z.J(a)
this.fK()},function(){return this.ds(null)},"dr","$1","$0","gc0",0,2,0],
gfb:function(){var z,y,x
z=Date.now()
y=C.f.R(P.di(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aD(z,!1)
return x/y},
cg:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.z(z)
x=C.e.cQ(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.e.cQ(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.dU(C.l,this.gfJ())},
fK:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.e(new E.i0(this),{func:1,ret:-1,args:[P.T]})
C.t.dL(z)
C.t.ek(z,W.eF(y,P.T))}},"$0","gfJ",0,0,2],
fH:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cg()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aD(w,!1)
x.y=P.di(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.ae()
w=x.db
C.a.sl(w.a,0)
w.ae()
w=x.dx
C.a.sl(w.a,0)
w.ae()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.at(this.e)}}catch(v){z=H.aL(v)
y=H.b2(v)
P.cU("Error: "+H.j(z))
P.cU("Stack: "+H.j(y))
throw H.d(z)}},
n:{
i_:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$isch)return E.dT(a,!0,!0,!0,!1)
y=W.d5(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcp(a).h(0,y)
w=E.dT(y,!0,!0,!0,!1)
w.a=a
return w},
dT:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hZ()
y=P.fN(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.l,null)
x=C.k.bU(a,"webgl",y)
x=H.k(x==null?C.k.bU(a,"experimental-webgl",y):x,"$isdI")
if(x==null)H.p(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hv(x,a)
w=new T.hV(x)
w.b=H.R(x.getParameter(3379))
w.c=H.R(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.im(a)
v=new X.fH()
v.c=new X.be(!1,!1,!1)
v.d=P.fO(null,null,null,P.C)
w.b=v
v=new X.h6(w)
v.f=0
v.r=new V.Q(0,0)
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fR(w)
v.r=0
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.i4(w)
v.e=0
v.f=new V.Q(0,0)
v.r=new V.Q(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.dO,P.a]])
w.z=v
u=document
t=W.ah
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.W(u,"contextmenu",H.e(w.gdY(),s),!1,t))
v=w.z
r=W.a5
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.W(a,"focus",H.e(w.ge0(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.W(a,"blur",H.e(w.gdV(),q),!1,r))
v=w.z
p=W.bc
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.W(u,"keyup",H.e(w.ge2(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.W(u,"keydown",H.e(w.ge1(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.W(a,"mousedown",H.e(w.ge5(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mouseup",H.e(w.ge7(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mousemove",H.e(w.ge6(),s),!1,t))
p=w.z
o=W.bs;(p&&C.a).h(p,W.W(a,H.M(W.fm(a)),H.e(w.ge8(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.W(u,"mousemove",H.e(w.gdZ(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.W(u,"mouseup",H.e(w.ge_(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.W(u,"pointerlockchange",H.e(w.ge9(),q),!1,r))
r=w.z
q=W.aV
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.W(a,"touchstart",H.e(w.gef(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchend",H.e(w.ged(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchmove",H.e(w.gee(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aD(Date.now(),!1)
z.ch=0
z.cg()
return z}}},i0:{"^":"r:20;a",
$1:function(a){var z
H.kv(a)
z=this.a
if(z.z){z.z=!1
z.fH()}}}}],["","",,Z,{"^":"",ek:{"^":"a;a,b",n:{
cE:function(a,b,c){var z
H.v(c,"$isc",[P.C],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bu(c)),35044)
a.bindBuffer(b,null)
return new Z.ek(b,z)}}},d1:{"^":"ce;a,b,c,d,e",
aT:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aL(y)
x=P.o('Failed to bind buffer attribute "'+J.ae(this.a)+'": '+H.j(z))
throw H.d(x)}},
i:function(a){return"["+J.ae(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},iB:{"^":"a;a",$iskM:1},d2:{"^":"a;a,0b,c,d",
ar:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aT:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aT(a)},
d5:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
at:function(a){var z,y,x,w,v
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
z=[P.l]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ae(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(y,", ")+"\nAttrs:   "+C.a.u(u,", ")},
$islv:1},bX:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aT(this.c)+"'")+"]"}},aW:{"^":"a;a",
gbX:function(a){var z,y
z=this.a
y=(z&$.$get$aw().a)!==0?3:0
if((z&$.$get$av().a)!==0)y+=3
if((z&$.$get$au().a)!==0)y+=3
if((z&$.$get$ax().a)!==0)y+=2
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$bq().a)!==0)y+=3
if((z&$.$get$br().a)!==0)y+=4
if((z&$.$get$aX().a)!==0)++y
return(z&$.$get$at().a)!==0?y+4:y},
eX:function(a){var z,y,x
z=$.$get$aw()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$av()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$au()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bq()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$br()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$at()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ej()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aW))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.l])
y=this.a
if((y&$.$get$aw().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$av().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$au().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$ay().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bq().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$br().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$at().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.u(z,"|")},
n:{
ab:function(a){return new Z.aW(a)}}}}],["","",,D,{"^":"",f6:{"^":"a;"},aP:{"^":"a;0a,0b,0c",
J:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.F(y,new D.fq(z))
return x!==0},
fL:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.J(y)}}},
ac:function(a){return this.fL(a,!0,!1)},
n:{
al:function(){var z=new D.aP()
z.a=H.b([],[{func:1,ret:-1,args:[D.w]}])
z.c=0
return z}}},fq:{"^":"r:21;a",
$1:function(a){var z
H.e(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"a;a,0b"},cl:{"^":"w;c,d,a,0b,$ti"},cm:{"^":"w;c,d,a,0b,$ti"},N:{"^":"w;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",d3:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d3))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
n:{"^":"kN<"}},dn:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dn))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},fG:{"^":"w;c,a,0b"},fH:{"^":"a;0a,0b,0c,0d",
fB:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.fG(a,this)
y.b=!0
return z.J(y)},
fv:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}},fR:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aN:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aD(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.Q(y.a+x*w,y.b+v*u)
u=this.a.gbA()
s=new X.dw(a,new V.Q(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bL:function(a,b){this.r=a.a
return!1},
aE:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dc()
if(typeof z!=="number")return z.d7()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.aN(a,b))
return!0},
aD:function(a,b){return!1},
fC:function(a){return!1},
e4:function(a,b,c){return}},be:{"^":"a;a,b,c",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.be))return!1
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
return z+(this.c?"Shift+":"")}},dw:{"^":"dC;x,y,z,Q,ch,c,d,e,a,0b"},h6:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
dP:function(a,b,c){var z,y,x
z=new P.aD(Date.now(),!1)
y=this.a.gbA()
x=new X.dw(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bL:function(a,b){this.f=a.a
return!1},
aE:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dc()
if(typeof z!=="number")return z.d7()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.dP(a,b,!0))
return!0},
aD:function(a,b){return!1},
fD:function(a,b){return!1}},dC:{"^":"w;"},i3:{"^":"dC;x,y,z,Q,ch,c,d,e,a,0b"},i4:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aN:function(a,b){var z,y,x,w
H.v(a,"$isc",[V.Q],"$asc")
z=new P.aD(Date.now(),!1)
y=a.length>0?a[0]:new V.Q(0,0)
x=this.a.gbA()
w=new X.i3(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fA:function(a){var z
H.v(a,"$isc",[V.Q],"$asc")
z=this.b
if(z==null)return!1
z.J(this.aN(a,!0))
return!0},
fw:function(a){var z
H.v(a,"$isc",[V.Q],"$asc")
z=this.c
if(z==null)return!1
z.J(this.aN(a,!0))
return!0},
fz:function(a){H.v(a,"$isc",[V.Q],"$asc")
return!1}},im:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbA:function(){var z=this.a
return V.dH(0,0,(z&&C.k).gcq(z).c,C.k.gcq(z).d)},
ca:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dn(z,new X.be(y,a.altKey,a.shiftKey))},
ak:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.be(y,a.altKey,a.shiftKey)},
br:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.be(y,a.altKey,a.shiftKey)},
a7:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=z.top
if(typeof x!=="number")return x.S()
return new V.Q(y-w,x-v)},
aw:function(a){return new V.bp(a.movementX,a.movementY)},
bn:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.Q])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.e.W(u.pageX)
C.e.W(u.pageY)
s=z.left
C.e.W(u.pageX)
C.a.h(y,new V.Q(t-s,C.e.W(u.pageY)-z.top))}return y},
a5:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.d3(z,new X.be(y,a.altKey,a.shiftKey))},
bk:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=H.R(y-w)
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.S()
u=H.R(x-y)
if(u<0)return!1
return v<z.width&&u<z.height},
h7:[function(a){this.f=!0},"$1","ge0",4,0,5],
h1:[function(a){this.f=!1},"$1","gdV",4,0,5],
h4:[function(a){H.k(a,"$isah")
if(this.f&&this.bk(a))a.preventDefault()},"$1","gdY",4,0,3],
h9:[function(a){var z
H.k(a,"$isbc")
if(!this.f)return
z=this.ca(a)
if(this.b.fB(z))a.preventDefault()},"$1","ge2",4,0,16],
h8:[function(a){var z
H.k(a,"$isbc")
if(!this.f)return
z=this.ca(a)
this.b.fv(z)},"$1","ge1",4,0,16],
hb:[function(a){var z,y,x,w
H.k(a,"$isah")
z=this.a
z.focus()
this.f=!0
this.ak(a)
if(this.x){y=this.a5(a)
x=this.aw(a)
if(this.d.bL(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a5(a)
w=this.a7(a)
if(this.c.bL(y,w))a.preventDefault()},"$1","ge5",4,0,3],
hd:[function(a){var z,y,x
H.k(a,"$isah")
this.ak(a)
z=this.a5(a)
if(this.x){y=this.aw(a)
if(this.d.aE(z,y))a.preventDefault()
return}if(this.r)return
x=this.a7(a)
if(this.c.aE(z,x))a.preventDefault()},"$1","ge7",4,0,3],
h6:[function(a){var z,y,x
H.k(a,"$isah")
if(!this.bk(a)){this.ak(a)
z=this.a5(a)
if(this.x){y=this.aw(a)
if(this.d.aE(z,y))a.preventDefault()
return}if(this.r)return
x=this.a7(a)
if(this.c.aE(z,x))a.preventDefault()}},"$1","ge_",4,0,3],
hc:[function(a){var z,y,x
H.k(a,"$isah")
this.ak(a)
z=this.a5(a)
if(this.x){y=this.aw(a)
if(this.d.aD(z,y))a.preventDefault()
return}if(this.r)return
x=this.a7(a)
if(this.c.aD(z,x))a.preventDefault()},"$1","ge6",4,0,3],
h5:[function(a){var z,y,x
H.k(a,"$isah")
if(!this.bk(a)){this.ak(a)
z=this.a5(a)
if(this.x){y=this.aw(a)
if(this.d.aD(z,y))a.preventDefault()
return}if(this.r)return
x=this.a7(a)
if(this.c.aD(z,x))a.preventDefault()}},"$1","gdZ",4,0,3],
he:[function(a){var z,y
H.k(a,"$isbs")
this.ak(a)
z=new V.bp((a&&C.r).gf5(a),C.r.gf6(a)).A(0,180)
if(this.x){if(this.d.fC(z))a.preventDefault()
return}if(this.r)return
y=this.a7(a)
if(this.c.fD(z,y))a.preventDefault()},"$1","ge8",4,0,36],
hf:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a5(this.y)
v=this.a7(this.y)
this.d.e4(w,v,x)}},"$1","ge9",4,0,5],
hk:[function(a){var z
H.k(a,"$isaV")
this.a.focus()
this.f=!0
this.br(a)
z=this.bn(a)
if(this.e.fA(z))a.preventDefault()},"$1","gef",4,0,8],
hi:[function(a){var z
H.k(a,"$isaV")
this.br(a)
z=this.bn(a)
if(this.e.fw(z))a.preventDefault()},"$1","ged",4,0,8],
hj:[function(a){var z
H.k(a,"$isaV")
this.br(a)
z=this.bn(a)
if(this.e.fz(z))a.preventDefault()},"$1","gee",4,0,8]}}],["","",,D,{"^":"",bT:{"^":"a;0a,0b,0c,0d",
af:[function(a){var z
H.k(a,"$isw")
z=this.d
if(!(z==null))z.J(a)},function(){return this.af(null)},"fU","$1","$0","gdt",0,2,0],
$isS:1,
$isaq:1},S:{"^":"a;",$isaq:1},fI:{"^":"aN;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
af:function(a){var z=this.Q
if(!(z==null))z.J(a)},
e3:[function(a){var z
H.k(a,"$isw")
z=this.ch
if(!(z==null))z.J(a)},function(){return this.e3(null)},"ha","$1","$0","gcd",0,2,0],
hg:[function(a){var z,y,x
H.v(a,"$isi",[D.S],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.dH(x))return!1}return!0},"$1","geb",4,0,26],
fZ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.S
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gcd(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.k(b[u],"$isS")
if(t instanceof D.bT)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.b([],v)
s.c=0
t.d=s}H.e(x,w)
C.a.h(s.a,x)}z=new D.cl(a,b,this,[z])
z.b=!0
this.af(z)},"$2","gdS",8,0,12],
hh:[function(a,b){var z,y,x,w,v,u,t,s
z=D.S
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gcd(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.k(b[u],"$isS")
if(t instanceof D.bT)C.a.L(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.b([],v)
s.c=0
t.d=s}H.e(x,w)
C.a.L(s.a,x)}z=new D.cm(a,b,this,[z])
z.b=!0
this.af(z)},"$2","gec",8,0,12],
dH:function(a){var z=C.a.aV(this.e,a)
return z},
$asi:function(){return[D.S]},
$asaN:function(){return[D.S]}},hg:{"^":"a;",$isS:1,$isaq:1},hN:{"^":"a;",$isS:1,$isaq:1},hW:{"^":"a;",$isS:1,$isaq:1},hX:{"^":"a;",$isS:1,$isaq:1},hY:{"^":"a;",$isS:1,$isaq:1}}],["","",,V,{"^":"",
kP:[function(a,b){if(typeof b!=="number")return b.S()
if(typeof a!=="number")return H.z(a)
return Math.abs(b-a)<=1e-9},"$2","h3",8,0,24],
cV:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.da(a-b,z)
return(a<0?a+z:a)+b},
G:function(a,b,c){if(a==null)return C.i.ab("null",c)
return C.i.ab(C.e.d4($.m.$2(a,0)?0:a,b),c+b+1)},
b1:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isc",[P.t],"$asc")
z=H.b([],[P.l])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.G(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.O(z,u,C.i.ab(z[u],x))}return z},
U:{"^":"a;a,b,c",
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
return new V.U(z,y,x)},
p:function(a,b){var z
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
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
bC:{"^":"a;a,b,c,d",
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
return new V.bC(z,y,x,w)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bC))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
c_:{"^":"a;a,b,c,d,e,f,r,x,y",
X:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a5,"$isc_")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.e.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.e.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.e.k(t,s)
q=a5.b
p=C.e.k(z,q)
o=a5.e
n=C.e.k(w,o)
m=a5.x
l=C.e.k(t,m)
k=a5.c
z=C.e.k(z,k)
j=a5.f
w=C.e.k(w,j)
i=a5.y
t=C.e.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.e.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.e.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.e.k(d,s)
b=C.e.k(h,q)
a=C.e.k(f,o)
a0=C.e.k(d,m)
h=C.e.k(h,k)
f=C.e.k(f,j)
d=C.e.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.e.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.e.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.c_(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.k(a3,s),C.e.k(a1,q)+C.e.k(a2,o)+C.e.k(a3,m),C.e.k(a1,k)+C.e.k(a2,j)+C.e.k(a3,i))},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c_))return!1
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
z=[P.t]
y=V.b1(H.b([this.a,this.d,this.r],z),3,0)
x=V.b1(H.b([this.b,this.e,this.x],z),3,0)
w=V.b1(H.b([this.c,this.f,this.y],z),3,0)
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
ag:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
X:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
cS:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.z(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.z(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.z(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.z(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.z(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.z(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.z(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.z(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.cu()
a3=1/a2
a4=-w
a5=-i
return V.ap((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.k(a7,"$isag")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.z(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.z(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.z(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
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
return V.ap(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
bQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.z(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.z(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.z(l)
return new V.a2(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
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
i:function(a){return this.G()},
cR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.b1(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b1(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b1(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b1(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
G:function(){return this.cR("",3,0)},
t:function(a){return this.cR(a,3,0)},
n:{
ap:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cu:function(){return V.ap(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dv:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.E(c)))
y=b.a8(z)
x=y.A(0,Math.sqrt(y.E(y)))
w=z.a8(x)
v=new V.H(a.a,a.b,a.c)
return V.ap(x.a,w.a,z.a,x.au(0).E(v),x.b,w.b,z.b,w.au(0).E(v),x.c,w.c,z.c,z.au(0).E(v),0,0,0,1)}}},
Q:{"^":"a;a,b",
k:function(a,b){return new V.Q(this.a*b,this.b*b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
a2:{"^":"a;a,b,c",
C:function(a,b){return new V.a2(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a,b){return new V.a2(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.a2(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
dG:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dG))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"},
n:{
dH:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dG(a,b,c,d)}}},
bp:{"^":"a;a,b",
fh:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return Math.sqrt(z*z+y*y)},"$0","gl",1,0,11],
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.bp(z*b,y*b)},
A:function(a,b){var z,y
if($.m.$2(b,0))return new V.bp(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.bp(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bp))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
H:{"^":"a;a,b,c",
fh:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,11],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
a8:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
au:function(a){return new V.H(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.H(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.m.$2(b,0))return new V.H(0,0,0)
return new V.H(this.a/b,this.b/b,this.c/b)},
cT:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}}],["","",,U,{"^":"",d7:{"^":"bJ;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.al()
this.b=z}return z},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d7))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")},
n:{
d8:function(a){var z=new U.d7()
z.a=a
return z}}},bJ:{"^":"f6;"},dJ:{"^":"bJ;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.al()
this.y=z}return z},
aj:function(a){var z=this.y
if(!(z==null))z.J(a)},
sd6:function(a){var z,y
a=V.cV(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.N("yaw",y,a,this,[P.t])
z.b=!0
this.aj(z)}},
scX:function(a,b){var z,y
b=V.cV(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.N("pitch",y,b,this,[P.t])
z.b=!0
this.aj(z)}},
sd0:function(a){var z,y
a=V.cV(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.N("roll",y,a,this,[P.t])
z.b=!0
this.aj(z)}},
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dJ))return!1
z=this.a
y=b.a
if(!$.m.$2(z,y))return!1
z=this.b
y=b.b
if(!$.m.$2(z,y))return!1
z=this.c
y=b.c
if(!$.m.$2(z,y))return!1
z=this.d
y=b.d
if(!$.m.$2(z,y))return!1
z=this.e
y=b.e
if(!$.m.$2(z,y))return!1
z=this.f
y=b.f
if(!$.m.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"], ["+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fo:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ag:[function(a){var z
H.k(a,"$isw")
z=this.x
if(!(z==null))z.J(a)},function(){return this.ag(null)},"fV","$1","$0","ga1",0,2,0],
h2:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aE
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga1(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gP()==null){s=new D.aP()
s.a=H.b([],v)
s.c=0
t.sP(s)}s=t.gP()
s.toString
H.e(x,w)
C.a.h(s.a,x)}}z=new D.cl(a,b,this,[z])
z.b=!0
this.ag(z)},"$2","gdW",8,0,6],
h3:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aE
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga1(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gP()==null){s=new D.aP()
s.a=H.b([],v)
s.c=0
t.sP(s)}s=t.gP()
s.toString
H.e(x,w)
C.a.L(s.a,x)}}z=new D.cm(a,b,this,[z])
z.b=!0
this.ag(z)},"$2","gdX",8,0,6],
sd2:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.e(this.ga1(),{func:1,ret:-1,args:[D.w]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gB()
z.toString
y=H.e(this.ga1(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.N("technique",x,this.c,this,[O.cy])
z.b=!0
this.ag(z)}},
gB:function(){var z=this.x
if(z==null){z=D.al()
this.x=z}return z},
at:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
u=C.f.W(v.a*x)
if(typeof w!=="number")return H.z(w)
t=C.f.W(v.b*w)
s=C.f.W(v.c*x)
a.c=s
v=C.f.W(v.d*w)
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
s.cZ(V.ap(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dA
if(y==null){y=V.dv(new V.a2(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.dA=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.k(0,m)}a.db.cZ(m)
z=this.c
if(z!=null)z.b9(0,a)
for(z=this.d.a,z=new J.ao(z,z.length,0,[H.x(z,0)]);z.w();)z.d.b9(0,a)
for(z=this.d.a,z=new J.ao(z,z.length,0,[H.x(z,0)]);z.w();)z.d.at(a)
this.a.toString
a.cy.bM()
a.db.bM()
this.b.toString
a.cY()},
$isln:1}}],["","",,A,{"^":"",cZ:{"^":"a;a,b,c"},f0:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
f8:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
f7:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},fY:{"^":"dK;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ap,0a9,0aq,0aW,0cu,0cv,0aX,0aY,0cw,0cz,0aZ,0b_,0cA,0cB,0b0,0cC,0cD,0b1,0cE,0cF,0b2,0b3,0b4,0cG,0cH,0b5,0b6,0cI,0cJ,0b7,0cK,0bD,0cL,0bE,0cM,0bF,0cN,0bG,0cO,0bH,0cP,0bI,a,b,0c,0d,0e,0f,0r",
dj:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.bL("")
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
a2.eA(z)
a2.eH(z)
a2.eB(z)
a2.eP(z)
a2.eQ(z)
a2.eJ(z)
a2.eU(z)
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
z=new P.bL("")
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
v.eE(z)
v.ez(z)
v.eC(z)
v.eF(z)
v.eN(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.eL(z)
v.eM(z)}v.eI(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
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
case C.h:r+="   return alpha;\n"
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
p=H.b([],[P.l])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.u(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.eD(z)
v.eK(z)
v.eO(z)
v.eR(z)
v.eS(z)
v.eT(z)
v.eG(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.l])
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
n="vec4("+C.a.u(o," + ")+", alpha);"
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
if(!H.eJ(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.p(P.o("Failed to link shader: "+H.j(m)))}this.es()
this.ev()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.f(this.r.m(0,"invViewMat"),"$isar")
if(y)this.db=H.f(this.r.m(0,"objMat"),"$isar")
if(w)this.dx=H.f(this.r.m(0,"viewObjMat"),"$isar")
this.fr=H.f(this.r.m(0,"projViewObjMat"),"$isar")
if(a2.x2)this.go=H.f(this.r.m(0,"txt2DMat"),"$iscC")
if(a2.y1)this.id=H.f(this.r.m(0,"txtCubeMat"),"$isar")
if(a2.y2)this.k1=H.f(this.r.m(0,"colorMat"),"$isar")
this.k3=H.b([],[A.ar])
y=a2.ap
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isE")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.p(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(k,"$isar"))}}y=a2.a
if(y!==C.b){this.k4=H.f(this.r.m(0,"emissionClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.r1=H.f(this.r.m(0,"emissionTxt"),"$isa9")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isE")
break
case C.d:this.r2=H.f(this.r.m(0,"emissionTxt"),"$isaa")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isE")
break}}y=a2.b
if(y!==C.b){this.ry=H.f(this.r.m(0,"ambientClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.x1=H.f(this.r.m(0,"ambientTxt"),"$isa9")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isE")
break
case C.d:this.x2=H.f(this.r.m(0,"ambientTxt"),"$isaa")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isE")
break}}y=a2.c
if(y!==C.b){this.y2=H.f(this.r.m(0,"diffuseClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.ap=H.f(this.r.m(0,"diffuseTxt"),"$isa9")
this.aq=H.f(this.r.m(0,"nullDiffuseTxt"),"$isE")
break
case C.d:this.a9=H.f(this.r.m(0,"diffuseTxt"),"$isaa")
this.aq=H.f(this.r.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a2.d
if(y!==C.b){this.aW=H.f(this.r.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cu=H.f(this.r.m(0,"invDiffuseTxt"),"$isa9")
this.aX=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.d:this.cv=H.f(this.r.m(0,"invDiffuseTxt"),"$isaa")
this.aX=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a2.e
if(y!==C.b){this.b_=H.f(this.r.m(0,"shininess"),"$isP")
this.aY=H.f(this.r.m(0,"specularClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cw=H.f(this.r.m(0,"specularTxt"),"$isa9")
this.aZ=H.f(this.r.m(0,"nullSpecularTxt"),"$isE")
break
case C.d:this.cz=H.f(this.r.m(0,"specularTxt"),"$isaa")
this.aZ=H.f(this.r.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a2.f){case C.b:break
case C.h:break
case C.c:this.cA=H.f(this.r.m(0,"bumpTxt"),"$isa9")
this.b0=H.f(this.r.m(0,"nullBumpTxt"),"$isE")
break
case C.d:this.cB=H.f(this.r.m(0,"bumpTxt"),"$isaa")
this.b0=H.f(this.r.m(0,"nullBumpTxt"),"$isE")
break}if(a2.dy){this.cC=H.f(this.r.m(0,"envSampler"),"$isaa")
this.cD=H.f(this.r.m(0,"nullEnvTxt"),"$isE")
y=a2.r
if(y!==C.b){this.b1=H.f(this.r.m(0,"reflectClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cE=H.f(this.r.m(0,"reflectTxt"),"$isa9")
this.b2=H.f(this.r.m(0,"nullReflectTxt"),"$isE")
break
case C.d:this.cF=H.f(this.r.m(0,"reflectTxt"),"$isaa")
this.b2=H.f(this.r.m(0,"nullReflectTxt"),"$isE")
break}}y=a2.x
if(y!==C.b){this.b3=H.f(this.r.m(0,"refraction"),"$isP")
this.b4=H.f(this.r.m(0,"refractClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cG=H.f(this.r.m(0,"refractTxt"),"$isa9")
this.b5=H.f(this.r.m(0,"nullRefractTxt"),"$isE")
break
case C.d:this.cH=H.f(this.r.m(0,"refractTxt"),"$isaa")
this.b5=H.f(this.r.m(0,"nullRefractTxt"),"$isE")
break}}}y=a2.y
if(y!==C.b){this.b6=H.f(this.r.m(0,"alpha"),"$isP")
switch(y){case C.b:break
case C.h:break
case C.c:this.cI=H.f(this.r.m(0,"alphaTxt"),"$isa9")
this.b7=H.f(this.r.m(0,"nullAlphaTxt"),"$isE")
break
case C.d:this.cJ=H.f(this.r.m(0,"alphaTxt"),"$isaa")
this.b7=H.f(this.r.m(0,"nullAlphaTxt"),"$isE")
break}}this.bD=H.b([],[A.e9])
this.bE=H.b([],[A.ea])
this.bF=H.b([],[A.eb])
this.bG=H.b([],[A.ec])
this.bH=H.b([],[A.ed])
this.bI=H.b([],[A.ee])
if(a2.k2){y=a2.z
if(y>0){this.cK=H.k(this.r.m(0,"dirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isD")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isD")
x=this.bD;(x&&C.a).h(x,new A.e9(l,k,j))}}y=a2.Q
if(y>0){this.cL=H.k(this.r.m(0,"pntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isD")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isD")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isD")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isP")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isP")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isP")
x=this.bE;(x&&C.a).h(x,new A.ea(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.cM=H.k(this.r.m(0,"spotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isD")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isD")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isD")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isD")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isP")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isP")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isP")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isP")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isP")
x=this.bF;(x&&C.a).h(x,new A.eb(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.cN=H.k(this.r.m(0,"txtDirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isD")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isD")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isD")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isD")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isD")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isE")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isa9")
x=this.bG;(x&&C.a).h(x,new A.ec(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.cO=H.k(this.r.m(0,"txtPntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isD")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isD")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$iscC")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isD")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isE")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isP")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isP")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isP")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isaa")
x=this.bH;(x&&C.a).h(x,new A.ed(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.cP=H.k(this.r.m(0,"txtSpotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isD")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isD")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isD")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isD")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isD")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isE")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isD")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isP")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isP")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isP")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isP")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isP")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a1,"$isa9")
x=this.bI;(x&&C.a).h(x,new A.ee(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
Z:function(a,b,c){b.a.uniform1i(b.d,1)},
U:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
fX:function(a,b){var z,y
z=a.a9
y=new A.fY(b,z)
y.dm(b,z)
y.dj(a,b)
return y}}},h0:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ap,a9,aq",
eA:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ap+"];\n"
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
eH:function(a){var z
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
eB:function(a){var z
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
eP:function(a){var z,y
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
eQ:function(a){var z,y
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
eJ:function(a){var z
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
eU:function(a){var z
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
a6:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.bY(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
eE:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.a6(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   return emissionClr;\n"
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
ez:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.a6(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   return ambientClr;\n"
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
eC:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.a6(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   diffuseColor = diffuseClr;\n"
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
eF:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.a6(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
eN:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.a6(a,z,"specular")
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
case C.h:z=y+"   specularColor = specularClr;\n"
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
eI:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.h:break
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
case C.h:z+="   return normalize(normalVec);\n"
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
eL:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.a6(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   vec3 scalar = reflectClr;\n"
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
eM:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.a6(a,z,"refract")
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
case C.h:z=y+"   vec3 scalar = refractClr;\n"
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
eD:function(a){var z,y
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
eK:function(a){var z,y
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
eO:function(a){var z,y
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
eR:function(a){var z,y,x
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
eS:function(a){var z,y,x
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
eT:function(a){var z,y,x
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
eG:function(a){var z
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
i:function(a){return this.a9}},e9:{"^":"a;a,b,c"},ec:{"^":"a;a,b,c,d,e,f,r,x"},ea:{"^":"a;a,b,c,d,e,f,r"},ed:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eb:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ee:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dK:{"^":"ce;",
dm:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cb:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eJ(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.o("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
es:function(){var z,y,x,w,v,u
z=H.b([],[A.cZ])
y=this.a
x=H.R(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.cZ(y,v.name,u))}this.f=new A.f0(z)},
ev:function(){var z,y,x,w,v,u
z=H.b([],[A.a0])
y=this.a
x=H.R(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.f4(v.type,v.size,v.name,u))}this.r=new A.ie(z)},
ai:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.E(z,y,b,c)
else return A.cB(z,y,b,a,c)},
dI:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a9(z,y,b,c)
else return A.cB(z,y,b,a,c)},
dJ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aa(z,y,b,c)
else return A.cB(z,y,b,a,c)},
aS:function(a,b){return new P.em(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
f4:function(a,b,c,d){switch(a){case 5120:return this.ai(b,c,d)
case 5121:return this.ai(b,c,d)
case 5122:return this.ai(b,c,d)
case 5123:return this.ai(b,c,d)
case 5124:return this.ai(b,c,d)
case 5125:return this.ai(b,c,d)
case 5126:return new A.P(this.a,this.e,c,d)
case 35664:return new A.i9(this.a,this.e,c,d)
case 35665:return new A.D(this.a,this.e,c,d)
case 35666:return new A.ic(this.a,this.e,c,d)
case 35667:return new A.ia(this.a,this.e,c,d)
case 35668:return new A.ib(this.a,this.e,c,d)
case 35669:return new A.id(this.a,this.e,c,d)
case 35674:return new A.ih(this.a,this.e,c,d)
case 35675:return new A.cC(this.a,this.e,c,d)
case 35676:return new A.ar(this.a,this.e,c,d)
case 35678:return this.dI(b,c,d)
case 35680:return this.dJ(b,c,d)
case 35670:throw H.d(this.aS("BOOL",c))
case 35671:throw H.d(this.aS("BOOL_VEC2",c))
case 35672:throw H.d(this.aS("BOOL_VEC3",c))
case 35673:throw H.d(this.aS("BOOL_VEC4",c))
default:throw H.d(P.o("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},bS:{"^":"a;a,b",
i:function(a){return this.b}},a0:{"^":"a;"},ie:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.d(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.G()},
fa:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
G:function(){return this.fa("\n")}},E:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},ia:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},ib:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},id:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},i8:{"^":"a0;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
cB:function(a,b,c,d,e){var z=new A.i8(a,b,c,e)
z.f=d
z.e=P.fP(d,0,!1,P.C)
return z}}},P:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},i9:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},D:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},ic:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},ih:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cC:{"^":"a0;a,b,c,d",
a0:function(a){var z=new Float32Array(H.bu(H.v(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},ar:{"^":"a0;a,b,c,d",
a0:function(a){var z=new Float32Array(H.bu(H.v(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},a9:{"^":"a0;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},aa:{"^":"a0;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
kD:function(a,b,c,d){return F.kb(c,a,d,b,new F.kE())},
kb:function(a,b,c,d,e){var z=F.kB(a,b,new F.kc(H.e(e,{func:1,ret:V.a2,args:[P.t]}),d,b,c),null)
if(z==null)return
z.al()
z.fm(new F.iv(),new F.hb())
return z},
kB:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.e(c,{func:1,ret:-1,args:[F.as,P.t,P.t]})
if(a<1)return
if(b<1)return
z=new F.dL()
y=new F.iq(z)
y.b=!1
x=[F.as]
y.c=H.b([],x)
z.a=y
y=new F.hH(z)
y.b=H.b([],[F.dB])
z.b=y
y=new F.hG(z)
y.b=H.b([],[F.dp])
z.c=y
y=new F.hF(z)
y.b=H.b([],[F.af])
z.d=y
z.e=null
w=H.b([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cD(null,null,new V.bC(x,0,0,1),null,null,new V.Q(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.cs(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cD(null,null,new V.bC(o,n,m,1),null,null,new V.Q(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.cs(d))}}z.d.eV(a+1,b+1,w)
return z},
kE:{"^":"r:29;",
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)}},
kc:{"^":"r:30;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.cW(y.$1(z),x)
x=J.cW(y.$1(z+3.141592653589793/this.c),x).S(0,w)
x=new V.H(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.E(x)))
u=new V.H(1,0,0)
y=v.a8(!v.p(0,u)?new V.H(0,0,1):u)
t=y.A(0,Math.sqrt(y.E(y)))
y=t.a8(v)
u=y.A(0,Math.sqrt(y.E(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
x=w.C(0,new V.a2(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.O(a.f,x)){a.f=x
y=a.a
if(y!=null)y.T()}}},
af:{"^":"a;0a,0b,0c,0d,0e",
ax:function(){if(!this.gct()){C.a.L(this.a.a.d.b,this)
this.a.a.T()}this.eh()
this.ei()
this.ej()},
ep:function(a){this.a=a
C.a.h(a.d.b,this)},
eq:function(a){this.b=a
C.a.h(a.d.c,this)},
er:function(a){this.c=a
C.a.h(a.d.d,this)},
eh:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
ei:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
ej:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gct:function(){return this.a==null||this.b==null||this.c==null},
dC:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.H(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.cT())return
return v.A(0,Math.sqrt(v.E(v)))},
dF:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.S(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.E(z)))
z=w.S(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.a8(z.A(0,Math.sqrt(z.E(z))))
return z.A(0,Math.sqrt(z.E(z)))},
bz:function(){if(this.d!=null)return!0
var z=this.dC()
if(z==null){z=this.dF()
if(z==null)return!1}this.d=z
this.a.a.T()
return!0},
dB:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.H(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.cT())return
return v.A(0,Math.sqrt(v.E(v)))},
dE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.S(0,u)
z=new V.H(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.au(0)}else{l=(z-q.b)/n
z=r.S(0,u).k(0,l).C(0,u).S(0,x)
z=new V.H(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.au(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.E(z)))
z=k.a8(m)
z=z.A(0,Math.sqrt(z.E(z))).a8(k)
m=z.A(0,Math.sqrt(z.E(z)))}return m},
bx:function(){if(this.e!=null)return!0
var z=this.dB()
if(z==null){z=this.dE()
if(z==null)return!1}this.e=z
this.a.a.T()
return!0},
gf0:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
t:function(a){var z,y
if(this.gct())return a+"disposed"
z=a+C.i.ab(J.ae(this.a.e),0)+", "+C.i.ab(J.ae(this.b.e),0)+", "+C.i.ab(J.ae(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
G:function(){return this.t("")},
n:{
bV:function(a,b,c){var z,y,x
z=new F.af()
y=a.a
if(y==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.o("May not create a face with vertices attached to different shapes."))
z.ep(a)
z.eq(b)
z.er(c)
C.a.h(z.a.a.d.b,z)
z.a.a.T()
return z}}},
fr:{"^":"a;"},
hM:{"^":"fr;",
aB:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
dp:{"^":"a;"},
fJ:{"^":"a;"},
i7:{"^":"fJ;",
aB:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dB:{"^":"a;"},
dL:{"^":"a;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.al()
this.e=z}return z},
al:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.al()||!1
if(!this.a.al())y=!1
z=this.e
if(!(z==null))z.ac(0)
return y},
dN:function(a,b,c,d,e){var z,y,x
H.v(d,"$isc",[F.as],"$asc")
H.v(e,"$isc",[P.C],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
if(a.aB(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fm:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.as],x=[P.C];y>=0;--y){w=this.a.c
if(y>=w.length)return H.h(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.dN(a,v,y,u,t))b.fl(u)}this.a.q()
this.c.bN()
this.d.bN()
this.b.fG()
this.c.bO(new F.i7())
this.d.bO(new F.hM())
z=this.e
if(!(z==null))z.ac(0)},
eZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aw()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$av().a)!==0)++w
if((x&$.$get$au().a)!==0)++w
if((x&$.$get$ax().a)!==0)++w
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$bq().a)!==0)++w
if((x&$.$get$br().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$at().a)!==0)++w
v=b.gbX(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.d1])
for(r=0,q=0;q<w;++q){p=b.eX(q)
o=p.gbX(p)
C.a.O(s,q,new Z.d1(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].fi(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.O(t,l,m[k]);++l}}r+=o}H.v(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bu(t)),35044)
y.bindBuffer(34962,null)
i=new Z.d2(new Z.ek(34962,j),s,b)
i.b=H.b([],[Z.bX])
if(this.b.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)}f=Z.cE(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bX(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)}f=Z.cE(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bX(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.q()
C.a.h(h,g.e)}f=Z.cE(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bX(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.l])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.t("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.t("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.t("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.t("   "))}return C.a.u(z,"\n")},
a_:function(a){var z=this.e
if(!(z==null))z.J(a)},
T:function(){return this.a_(null)}},
hF:{"^":"a;a,0b",
eV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isc",[F.as],"$asc")
z=H.b([],[F.af])
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
C.a.h(z,F.bV(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bV(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bV(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bV(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
bO:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aB(0,v,t)){v.ax()
break}}}}},
bN:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gf0(x)
if(y)x.ax()}},
al:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].bz())x=!1
return x},
by:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].bx())x=!1
return x},
i:function(a){return this.G()},
t:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
G:function(){return this.t("")}},
hG:{"^":"a;a,0b",
gl:function(a){return this.b.length},
bO:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aB(0,v,t)){v.ax()
break}}}}},
bN:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.O(x.a,x.b)
if(y)x.ax()}},
i:function(a){return this.G()},
t:function(a){var z,y,x,w
z=H.b([],[P.l])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].t(a+(""+x+". ")))}return C.a.u(z,"\n")},
G:function(){return this.t("")}},
hH:{"^":"a;a,0b",
gl:function(a){return this.b.length},
fG:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ax()}},
i:function(a){return this.G()},
t:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
G:function(){return this.t("")}},
as:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cs:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cD(this.cx,x,u,z,y,w,v,a,t)},
fi:function(a){var z,y
z=J.J(a)
if(z.p(a,$.$get$aw())){z=this.f
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$av())){z=this.r
y=[P.t]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$au())){z=this.x
y=[P.t]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$ax())){z=this.y
y=[P.t]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.p(a,$.$get$ay())){z=this.z
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$bq())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$br())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.p(a,$.$get$aX()))return H.b([this.ch],[P.t])
else if(z.p(a,$.$get$at())){z=H.b([-1,-1,-1,-1],[P.t])
return z}else return H.b([],[P.t])},
bz:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.F(0,new F.iA(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.T()
z=this.a.e
if(!(z==null))z.ac(0)}return!0},
bx:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.F(0,new F.iz(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.T()
z=this.a.e
if(!(z==null))z.ac(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
t:function(a){var z,y,x
z=H.b([],[P.l])
C.a.h(z,C.i.ab(J.ae(this.e),0))
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
C.a.h(z,"-")
x=C.a.u(z,", ")
return a+"{"+x+"}"},
G:function(){return this.t("")},
n:{
cD:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.as()
y=new F.iy(z)
y.b=H.b([],[F.dB])
z.b=y
y=new F.iu(z)
x=[F.dp]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.ir(z)
x=[F.af]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$eh()
z.e=0
y=$.$get$aw()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$av().a)!==0?e:null
z.x=(x&$.$get$au().a)!==0?b:null
z.y=(x&$.$get$ax().a)!==0?f:null
z.z=(x&$.$get$ay().a)!==0?g:null
z.Q=(x&$.$get$ei().a)!==0?c:null
z.ch=(x&$.$get$aX().a)!==0?i:0
z.cx=(x&$.$get$at().a)!==0?a:null
return z}}},
iA:{"^":"r:7;a",
$1:function(a){var z,y
H.k(a,"$isaf")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
iz:{"^":"r:7;a",
$1:function(a){var z,y
H.k(a,"$isaf")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
iq:{"^":"a;a,0b,0c",
q:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.T()
return!0},
gl:function(a){return this.c.length},
al:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].bz()
return!0},
by:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].bx()
return!0},
f_:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.O(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.J(null)}}}}return!0},
i:function(a){return this.G()},
t:function(a){var z,y,x,w
this.q()
z=H.b([],[P.l])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
G:function(){return this.t("")}},
ir:{"^":"a;a,0b,0c,0d",
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
F:function(a,b){H.e(b,{func:1,ret:-1,args:[F.af]})
C.a.F(this.b,b)
C.a.F(this.c,new F.is(this,b))
C.a.F(this.d,new F.it(this,b))},
i:function(a){return this.G()},
t:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
G:function(){return this.t("")}},
is:{"^":"r:7;a,b",
$1:function(a){H.k(a,"$isaf")
if(!J.O(a.a,this.a))this.b.$1(a)}},
it:{"^":"r:7;a,b",
$1:function(a){var z
H.k(a,"$isaf")
z=this.a
if(!J.O(a.a,z)&&!J.O(a.b,z))this.b.$1(a)}},
iu:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.G()},
t:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
G:function(){return this.t("")}},
iw:{"^":"a;"},
iv:{"^":"iw;",
aB:function(a,b,c){return J.O(b.f,c.f)}},
ix:{"^":"a;"},
hb:{"^":"ix;",
fl:function(a){var z,y,x,w,v,u,t,s
H.v(a,"$isc",[F.as],"$asc")
z=new V.H(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.H(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.E(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){t=a[x]
s=z.A(0,Math.sqrt(u))
if(!J.O(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.J(null)}}}return}},
iy:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.G()},
t:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
G:function(){return this.t("")}}}],["","",,O,{"^":"",fW:{"^":"cy;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.al()
this.dy=z}return z},
Y:[function(a){var z
H.k(a,"$isw")
z=this.dy
if(!(z==null))z.J(a)},function(){return this.Y(null)},"fW","$1","$0","gdu",0,2,0],
em:[function(a){H.k(a,"$isw")
this.a=null
this.Y(a)},function(){return this.em(null)},"hl","$1","$0","gel",0,2,0],
h_:[function(a,b){var z=V.ag
z=new D.cl(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.Y(z)},"$2","gdT",8,0,18],
h0:[function(a,b){var z=V.ag
z=new D.cm(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.Y(z)},"$2","gdU",8,0,18],
c8:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.R(z.e.length+3,4)*4
x=C.f.R(z.f.length+3,4)*4
w=C.f.R(z.r.length+3,4)*4
v=C.f.R(z.x.length+3,4)*4
u=C.f.R(z.y.length+3,4)*4
t=C.f.R(z.z.length+3,4)*4
s=C.f.R(this.e.a.length+3,4)*4
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
a6=$.$get$aw()
if(c){z=$.$get$av()
a6=new Z.aW(a6.a|z.a)}if(b){z=$.$get$au()
a6=new Z.aW(a6.a|z.a)}if(a){z=$.$get$ax()
a6=new Z.aW(a6.a|z.a)}if(a0){z=$.$get$ay()
a6=new Z.aW(a6.a|z.a)}if(a2){z=$.$get$at()
a6=new Z.aW(a6.a|z.a)}return new A.h0(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
I:function(a,b){H.v(a,"$isc",[T.dS],"$asc")},
b9:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ao(z,z.length,0,[H.x(z,0)]);z.w();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.bQ(x)}}},
fI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.c8()
y=a.fr.j(0,z.a9)
if(y==null){y=A.fX(z,a.a)
x=y.b
if(x.length===0)H.p(P.o("May not cache a shader with no name."))
if(a.fr.cr(0,x))H.p(P.o('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.O(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aq
z=b.e
if(!(z instanceof Z.d2)){b.e=null
z=null}if(z==null||!z.d.p(0,v)){z=w.r1
if(z)b.d.al()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.by()
t.a.by()
t=t.e
if(!(t==null))t.ac(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.f_()
s=s.e
if(!(s==null))s.ac(0)}q=b.d.eZ(new Z.iB(a.a),v)
q.ar($.$get$aw()).e=this.a.y.c
if(z)q.ar($.$get$av()).e=this.a.Q.c
if(u)q.ar($.$get$au()).e=this.a.z.c
if(w.rx)q.ar($.$get$ax()).e=this.a.ch.c
if(t)q.ar($.$get$ay()).e=this.a.cx.c
if(w.x1)q.ar($.$get$at()).e=this.a.cy.c
b.e=q}z=T.dS
p=H.b([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.f8()
if(w.fx){u=this.a
t=a.dx
t=t.gK(t)
u=u.db
u.toString
u.a0(t.X(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gK(t)
s=a.dx
s=t.k(0,s.gK(s))
a.cx=s
t=s}u=u.dx
u.toString
u.a0(t.X(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gfE()
s=a.dx
s=t.k(0,s.gK(s))
a.ch=s
t=s}u=u.fr
u.toString
u.a0(t.X(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.a0(t.X(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.a0(t.X(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.a0(C.y.X(t,!0))}if(w.ap>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.h(s,n)
s=s[n]
t.toString
H.k(s,"$isag")
t=t.k3
if(n>=t.length)return H.h(t,n)
t=t[n]
m=new Float32Array(H.bu(H.v(s.X(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.h:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.I(p,this.f.d)
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
case C.d:this.I(p,this.f.e)
u=this.a
t=this.f.e
u.U(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.h:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.I(p,this.r.d)
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
case C.d:this.I(p,this.r.e)
u=this.a
t=this.r.e
u.U(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.h:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.I(p,this.x.d)
u=this.a
t=this.x.d
u.Z(u.ap,u.aq,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.I(p,this.x.e)
u=this.a
t=this.x.e
u.U(u.a9,u.aq,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.h:u=this.a
t=this.y.f
u=u.aW
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.I(p,this.y.d)
u=this.a
t=this.y.d
u.Z(u.cu,u.aX,t)
t=this.a
u=this.y.f
t=t.aW
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.I(p,this.y.e)
u=this.a
t=this.y.e
u.U(u.cv,u.aX,t)
t=this.a
u=this.y.f
t=t.aW
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.h:u=this.a
t=this.z.f
u=u.aY
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.b_
t.a.uniform1f(t.d,r)
break
case C.c:this.I(p,this.z.d)
u=this.a
t=this.z.d
u.Z(u.cw,u.aZ,t)
t=this.a
u=this.z.f
t=t.aY
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b_
u.a.uniform1f(u.d,r)
break
case C.d:this.I(p,this.z.e)
u=this.a
t=this.z.e
u.U(u.cz,u.aZ,t)
t=this.a
u=this.z.f
t=t.aY
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b_
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.cK
u.a.uniform1i(u.d,o)
u=a.db
l=u.gK(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.y)(u),++j){i=u[j]
s=this.a.bD
if(k>=s.length)return H.h(s,k)
h=s[k]
s=l.bQ(i.a)
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.cL
u.a.uniform1i(u.d,o)
u=a.db
l=u.gK(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.y)(u),++j){i=u[j]
s=this.a.bE
if(k>=s.length)return H.h(s,k)
h=s[k]
s=i.gaF(i)
r=h.b
g=s.gbR(s)
f=s.gbS(s)
s=s.gbT(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aK(i.gaF(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga2(i)
f=h.d
g=s.gb8()
r=s.gaL()
s=s.gaU()
f.a.uniform3f(f.d,g,r,s)
s=i.gbs()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbt()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbu()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.cM
u.a.uniform1i(u.d,o)
u=a.db
l=u.gK(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.y)(u),++j){i=u[j]
s=this.a.bF
if(k>=s.length)return H.h(s,k)
h=s[k]
s=i.gaF(i)
r=h.b
g=s.gbR(s)
f=s.gbS(s)
s=s.gbT(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbC(i).ho()
f=h.c
g=s.gam(s)
r=s.gan(s)
s=s.gao()
f.a.uniform3f(f.d,g,r,s)
s=l.aK(i.gaF(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga2(i)
r=h.e
g=s.gb8()
f=s.gaL()
s=s.gaU()
r.a.uniform3f(r.d,g,f,s)
s=i.ghn()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghm()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbs()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbt()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbu()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.cN
u.a.uniform1i(u.d,o)
u=a.db
l=u.gK(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.y)(u),++j){i=u[j]
r=this.a.bG
if(k>=r.length)return H.h(r,k)
h=r[k]
r=i.gaH()
H.v(p,"$isc",s,"$asc")
if(!C.a.aV(p,r)){r.say(0,p.length)
C.a.h(p,r)}r=i.gbC(i)
g=h.d
f=r.gam(r)
e=r.gan(r)
r=r.gao()
g.a.uniform3f(g.d,f,e,r)
r=i.gfT()
e=h.b
f=r.gam(r)
g=r.gan(r)
r=r.gao()
e.a.uniform3f(e.d,f,g,r)
r=i.gaG(i)
g=h.c
f=r.gam(r)
e=r.gan(r)
r=r.gao()
g.a.uniform3f(g.d,f,e,r)
r=l.bQ(i.gbC(i))
e=r.a
f=r.b
g=r.c
g=r.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga2(i)
f=h.f
e=g.gb8()
r=g.gaL()
g=g.gaU()
f.a.uniform3f(f.d,e,r,g)
g=i.gaH()
r=g.gaz(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gaz(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gay(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.cO
u.a.uniform1i(u.d,o)
u=a.db
l=u.gK(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.y)(u),++j){i=u[j]
g=this.a.bH
if(k>=g.length)return H.h(g,k)
h=g[k]
g=i.gaH()
H.v(p,"$isc",r,"$asc")
if(!C.a.aV(p,g)){g.say(0,p.length)
C.a.h(p,g)}d=l.k(0,i.gK(i))
g=i.gK(i).aK(new V.a2(0,0,0))
f=h.b
e=g.gbR(g)
c=g.gbS(g)
g=g.gbT(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aK(new V.a2(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.cS(0)
c=h.d
m=new Float32Array(H.bu(H.v(new V.c_(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).X(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga2(i)
g=h.e
e=c.gb8()
f=c.gaL()
c=c.gaU()
g.a.uniform3f(g.d,e,f,c)
c=i.gaH()
g=c.gaz(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gaz(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gay(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbs()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbt()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbu()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.cP
u.a.uniform1i(u.d,o)
u=a.db
l=u.gK(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.y)(u),++j){i=u[j]
s=this.a.bI
if(k>=s.length)return H.h(s,k)
h=s[k]
s=i.gaH()
H.v(p,"$isc",z,"$asc")
if(!C.a.aV(p,s)){s.say(0,p.length)
C.a.h(p,s)}s=i.gaF(i)
r=h.b
g=s.gbR(s)
f=s.gbS(s)
s=s.gbT(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbC(i)
f=h.c
g=s.gam(s)
r=s.gan(s)
s=s.gao()
f.a.uniform3f(f.d,g,r,s)
s=i.gfT()
r=h.d
g=s.gam(s)
f=s.gan(s)
s=s.gao()
r.a.uniform3f(r.d,g,f,s)
s=i.gaG(i)
f=h.e
g=s.gam(s)
r=s.gan(s)
s=s.gao()
f.a.uniform3f(f.d,g,r,s)
s=l.aK(i.gaF(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaH()
r=s.gaz(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gaz(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gay(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga2(i)
r=h.y
g=s.gb8()
f=s.gaL()
s=s.gaU()
r.a.uniform3f(r.d,g,f,s)
s=i.ghu()
f=h.z
f.a.uniform1f(f.d,s)
s=i.ghv()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbs()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbt()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbu()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.h:break
case C.c:this.I(p,this.Q.d)
z=this.a
u=this.Q.d
z.Z(z.cA,z.b0,u)
break
case C.d:this.I(p,this.Q.e)
z=this.a
u=this.Q.e
z.U(z.cB,z.b0,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gK(u).cS(0)
a.Q=u}z=z.fy
z.toString
z.a0(u.X(0,!0))}if(w.dy){this.I(p,this.ch)
z=this.a
u=this.ch
z.U(z.cC,z.cD,u)
switch(w.r){case C.b:break
case C.h:z=this.a
u=this.cx.f
z=z.b1
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.I(p,this.cx.d)
z=this.a
u=this.cx.d
z.Z(z.cE,z.b2,u)
u=this.a
z=this.cx.f
u=u.b1
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.I(p,this.cx.e)
z=this.a
u=this.cx.e
z.U(z.cF,z.b2,u)
u=this.a
z=this.cx.f
u=u.b1
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.h:z=this.a
u=this.cy.f
z=z.b4
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.b3
u.a.uniform1f(u.d,s)
break
case C.c:this.I(p,this.cy.d)
z=this.a
u=this.cy.d
z.Z(z.cG,z.b5,u)
u=this.a
z=this.cy.f
u=u.b4
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b3
z.a.uniform1f(z.d,s)
break
case C.d:this.I(p,this.cy.e)
z=this.a
u=this.cy.e
z.U(z.cH,z.b5,u)
u=this.a
z=this.cy.f
u=u.b4
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b3
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.h:z=this.a
t=this.db.f
z=z.b6
z.a.uniform1f(z.d,t)
break
case C.c:this.I(p,this.db.d)
z=this.a
t=this.db.d
z.Z(z.cI,z.b7,t)
t=this.a
z=this.db.f
t=t.b6
t.a.uniform1f(t.d,z)
break
case C.d:this.I(p,this.db.e)
z=this.a
t=this.db.e
z.U(z.cJ,z.b7,t)
t=this.a
z=this.db.f
t=t.b6
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].aT(a)
z=b.e
z.aT(a)
z.at(a)
z.d5(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].d5(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.f7()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.c8().a9}},fZ:{"^":"cs;0f,a,b,0c,0d,0e"},cs:{"^":"a;",
aP:["dh",function(){}]},h_:{"^":"cs;a,b,0c,0d,0e"},aS:{"^":"cs;0f,a,b,0c,0d,0e",
ci:function(a){var z,y
if(!J.O(this.f,a)){z=this.f
this.f=a
y=new D.N(this.b+".color",z,a,this,[V.U])
y.b=!0
this.a.Y(y)}},
aP:["bd",function(){this.dh()
this.ci(new V.U(1,1,1))}],
sa2:function(a,b){var z
if(this.c===C.b){this.c=C.h
this.aP()
z=this.a
z.a=null
z.Y(null)}this.ci(b)}},h1:{"^":"aS;0ch,0f,a,b,0c,0d,0e",
eo:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.Y(z)}},
aP:function(){this.bd()
this.eo(1)}},h2:{"^":"aS;0ch,0f,a,b,0c,0d,0e",
bp:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.Y(z)}},
aP:function(){this.bd()
this.bp(100)}},cy:{"^":"a;"}}],["","",,T,{"^":"",dS:{"^":"ce;"},hV:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",f_:{"^":"a;",
aA:function(a,b){return!0},
i:function(a){return"all"},
$isbI:1},bI:{"^":"a;"},du:{"^":"a;",
aA:["dg",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].aA(0,b))return!0
return!1}],
i:["bZ",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbI:1},bf:{"^":"du;0a",
aA:function(a,b){return!this.dg(0,b)},
i:function(a){return"!["+this.bZ(0)+"]"}},hD:{"^":"a;0a",
dl:function(a){var z,y
if(a.a.length<=0)throw H.d(P.o("May not create a SetMatcher with zero characters."))
z=new H.aR(0,0,[P.C,P.ac])
for(y=new H.ds(a,a.gl(a),0,[H.aB(a,"q",0)]);y.w();)z.O(0,y.d,!0)
this.a=z},
aA:function(a,b){return this.a.cr(0,b)},
i:function(a){var z=this.a
return P.cx(new H.dr(z,[H.x(z,0)]),0,null)},
$isbI:1,
n:{
Z:function(a){var z=new V.hD()
z.dl(a)
return z}}},dN:{"^":"a;a,b,0c,0d",
gfn:function(a){return this.b},
u:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dY(this.a.D(0,b))
w.a=H.b([],[V.bI])
w.c=!1
C.a.h(this.c,w)
return w},
f9:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.aA(0,a))return w}return},
i:function(a){return this.b}},dW:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.eU(this.b,"\n","\\n")
y=H.eU(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dX:{"^":"a;a,b,0c",
i:function(a){return this.b}},i2:{"^":"a;0a,0b,0c",
D:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.dN(this,b)
z.c=H.b([],[V.dY])
this.a.O(0,b,z)}return z},
aI:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.dX(this,a)
y=P.l
z.c=new H.aR(0,0,[y,y])
this.b.O(0,a,z)}return z},
fS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.dW])
y=this.c
x=[P.C]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aM(a,t)
r=y.f9(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cx(w,0,null)
throw H.d(P.o("Untokenizable string [state: "+y.gfn(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cx(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.dW(o==null?p.b:o,q,t)}++t}}}},dY:{"^":"du;b,0c,0a",
i:function(a){return this.b.b+": "+this.bZ(0)}}}],["","",,X,{"^":"",d4:{"^":"a;",$isaq:1},fw:{"^":"dQ;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.al()
this.x=z}return z}},he:{"^":"a;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.al()
this.e=z}return z},
av:[function(a){var z
H.k(a,"$isw")
z=this.e
if(!(z==null))z.J(a)},function(){return this.av(null)},"fX","$1","$0","gc1",0,2,0],
saC:function(a){var z,y,x
if(!J.O(this.a,a)){z=this.a
if(z!=null){z=z.gB()
z.toString
y=H.e(this.gc1(),{func:1,ret:-1,args:[D.w]})
C.a.L(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gB()
z.toString
y=H.e(this.gc1(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.N("mover",x,this.a,this,[U.bJ])
z.b=!0
this.av(z)}},
$isaq:1,
$isd4:1},dQ:{"^":"a;"}}],["","",,V,{"^":"",
kz:function(a){P.i1(C.w,new V.kA(a))},
kA:{"^":"r:33;a",
$1:function(a){H.k(a,"$isaU")
P.cU(C.e.d4(this.a.gfb(),2)+" fps")}},
hI:{"^":"a;0a,0b",
dn:function(a,b){var z,y,x,w,v,u,t
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
t=W.a5
W.W(z,"scroll",H.e(new V.hL(x),{func:1,ret:-1,args:[t]}),!1,t)},
eW:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isc",[P.l],"$asc")
this.eu()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.fS(C.a.fg(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
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
if(H.eT(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.jM(C.G,s,C.q,!1)
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
eu:function(){var z,y,x,w
if(this.b!=null)return
z=new V.i2()
y=P.l
z.a=new H.aR(0,0,[y,V.dN])
z.b=new H.aR(0,0,[y,V.dX])
z.c=z.D(0,"Start")
y=z.D(0,"Start").u(0,"Bold")
x=V.Z(new H.X("*"))
C.a.h(y.a,x)
y.c=!0
y=z.D(0,"Bold").u(0,"Bold")
x=new V.bf()
w=[V.bI]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Z(new H.X("*"))
C.a.h(x.a,y)
y=z.D(0,"Bold").u(0,"BoldEnd")
x=V.Z(new H.X("*"))
C.a.h(y.a,x)
y.c=!0
y=z.D(0,"Start").u(0,"Italic")
x=V.Z(new H.X("_"))
C.a.h(y.a,x)
y.c=!0
y=z.D(0,"Italic").u(0,"Italic")
x=new V.bf()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Z(new H.X("_"))
C.a.h(x.a,y)
y=z.D(0,"Italic").u(0,"ItalicEnd")
x=V.Z(new H.X("_"))
C.a.h(y.a,x)
y.c=!0
y=z.D(0,"Start").u(0,"Code")
x=V.Z(new H.X("`"))
C.a.h(y.a,x)
y.c=!0
y=z.D(0,"Code").u(0,"Code")
x=new V.bf()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Z(new H.X("`"))
C.a.h(x.a,y)
y=z.D(0,"Code").u(0,"CodeEnd")
x=V.Z(new H.X("`"))
C.a.h(y.a,x)
y.c=!0
y=z.D(0,"Start").u(0,"LinkHead")
x=V.Z(new H.X("["))
C.a.h(y.a,x)
y.c=!0
y=z.D(0,"LinkHead").u(0,"LinkTail")
x=V.Z(new H.X("|"))
C.a.h(y.a,x)
x=z.D(0,"LinkHead").u(0,"LinkEnd")
y=V.Z(new H.X("]"))
C.a.h(x.a,y)
x.c=!0
x=z.D(0,"LinkHead").u(0,"LinkHead")
y=new V.bf()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Z(new H.X("|]"))
C.a.h(y.a,x)
x=z.D(0,"LinkTail").u(0,"LinkEnd")
y=V.Z(new H.X("]"))
C.a.h(x.a,y)
x.c=!0
x=z.D(0,"LinkTail").u(0,"LinkTail")
y=new V.bf()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Z(new H.X("|]"))
C.a.h(y.a,x)
C.a.h(z.D(0,"Start").u(0,"Other").a,new V.f_())
x=z.D(0,"Other").u(0,"Other")
y=new V.bf()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Z(new H.X("*_`["))
C.a.h(y.a,x)
x=z.D(0,"BoldEnd")
x.d=x.a.aI("Bold")
x=z.D(0,"ItalicEnd")
x.d=x.a.aI("Italic")
x=z.D(0,"CodeEnd")
x.d=x.a.aI("Code")
x=z.D(0,"LinkEnd")
x.d=x.a.aI("Link")
x=z.D(0,"Other")
x.d=x.a.aI("Other")
this.b=z},
n:{
hJ:function(a,b){var z=new V.hI()
z.dn(a,!0)
return z}}},
hL:{"^":"r:34;a",
$1:function(a){P.dU(C.l,new V.hK(this.a))}},
hK:{"^":"r:1;a",
$0:function(){var z,y,x
z=C.e.W(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,X,{"^":"",
eP:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=V.hJ("Test 003",!0)
y=W.d5(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.eW(H.b(["A test of the Material Light Shader with a solid color directional lighting."],[P.l]))
x=new E.aE()
x.a=""
x.b=!0
z=E.aE
w=O.cj(z)
x.y=w
w.ba(x.gfo(),x.gfq())
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
x.sbW(0,null)
x.saC(null)
x.sbW(0,F.kD(30,1,15,0.5))
w=new U.dJ()
w.a=0
w.b=0
w.c=0
w.d=0
w.e=0
w.f=0
w.r=0
w.sd6(0)
w.scX(0,0)
w.sd0(0)
v=w.d
if(!$.m.$2(v,0.1)){u=w.d
w.d=0.1
v=new D.N("deltaYaw",u,0.1,w,[P.t])
v.b=!0
w.aj(v)}v=w.e
if(!$.m.$2(v,0.21)){u=w.e
w.e=0.21
v=new D.N("deltaPitch",u,0.21,w,[P.t])
v.b=!0
w.aj(v)}v=w.f
if(!$.m.$2(v,0.32)){u=w.f
w.f=0.32
v=new D.N("deltaRoll",u,0.32,w,[P.t])
v.b=!0
w.aj(v)}x.saC(w)
t=new O.fW()
w=O.cj(V.ag)
t.e=w
w.ba(t.gdT(),t.gdU())
w=new O.aS(t,"emission")
w.c=C.b
w.f=new V.U(0,0,0)
t.f=w
w=new O.aS(t,"ambient")
w.c=C.b
w.f=new V.U(0,0,0)
t.r=w
w=new O.aS(t,"diffuse")
w.c=C.b
w.f=new V.U(0,0,0)
t.x=w
w=new O.aS(t,"invDiffuse")
w.c=C.b
w.f=new V.U(0,0,0)
t.y=w
w=new O.h2(t,"specular")
w.c=C.b
w.f=new V.U(0,0,0)
w.ch=100
t.z=w
w=new O.h_(t,"bump")
w.c=C.b
t.Q=w
t.ch=null
w=new O.aS(t,"reflect")
w.c=C.b
w.f=new V.U(0,0,0)
t.cx=w
w=new O.h1(t,"refract")
w.c=C.b
w.f=new V.U(0,0,0)
w.ch=1
t.cy=w
w=new O.fZ(t,"alpha")
w.c=C.b
w.f=1
t.db=w
w=new D.fI()
w.c_(D.S)
w.e=H.b([],[D.bT])
w.f=H.b([],[D.hg])
w.r=H.b([],[D.hN])
w.x=H.b([],[D.hW])
w.y=H.b([],[D.hX])
w.z=H.b([],[D.hY])
w.Q=null
w.ch=null
w.bV(w.gdS(),w.geb(),w.gec())
t.dx=w
v=w.Q
if(v==null){v=D.al()
w.Q=v
w=v}else w=v
v={func:1,ret:-1,args:[D.w]}
s=H.e(t.gel(),v)
C.a.h(w.a,s)
s=t.dx
w=s.ch
if(w==null){w=D.al()
s.ch=w}s=H.e(t.gdu(),v)
C.a.h(w.a,s)
t.dy=null
s=t.dx
w=U.d8(V.dv(new V.a2(0,0,0),new V.H(0,1,0),new V.H(1,1,-3)))
r=new V.U(1,1,1)
q=new D.bT()
q.c=new V.U(1,1,1)
q.a=new V.H(0,0,1)
u=q.b
q.b=w
w=w.gB()
w.toString
p=H.e(q.gdt(),v)
C.a.h(w.a,p)
w=new D.N("mover",u,q.b,q,[U.bJ])
w.b=!0
q.af(w)
if(!q.c.p(0,r)){u=q.c
q.c=r
w=new D.N("color",u,r,q,[V.U])
w.b=!0
q.af(w)}s.h(0,q)
w=t.r
w.sa2(0,new V.U(0,0,1))
w=t.x
w.sa2(0,new V.U(0,1,0))
w=t.z
w.sa2(0,new V.U(1,0,0))
w=t.z
if(w.c===C.b){w.c=C.h
w.bd()
w.bp(100)
s=w.a
s.a=null
s.Y(null)}w.bp(10)
o=new M.fo()
z=O.cj(z)
o.d=z
z.ba(o.gdW(),o.gdX())
o.e=null
o.f=null
o.r=null
o.x=null
n=new X.he()
n.b=1.0471975511965976
n.c=0.1
n.d=2000
n.saC(null)
z=n.b
if(!$.m.$2(z,1.0471975511965976)){u=n.b
n.b=1.0471975511965976
z=new D.N("fov",u,1.0471975511965976,n,[P.t])
z.b=!0
n.av(z)}z=n.c
if(!$.m.$2(z,0.1)){u=n.c
n.c=0.1
z=new D.N("near",u,0.1,n,[P.t])
z.b=!0
n.av(z)}z=n.d
if(!$.m.$2(z,2000)){u=n.d
n.d=2000
z=new D.N("far",u,2000,n,[P.t])
z.b=!0
n.av(z)}z=o.a
if(z!==n){if(z!=null){z=z.gB()
z.toString
w=H.e(o.ga1(),v)
C.a.L(z.a,w)}u=o.a
o.a=n
z=n.gB()
z.toString
w=H.e(o.ga1(),v)
C.a.h(z.a,w)
z=new D.N("camera",u,o.a,o,[X.d4])
z.b=!0
o.ag(z)}m=new X.fw()
z=new V.bC(0,0,0,1)
m.a=z
m.b=!0
m.c=2000
m.d=!0
m.e=0
m.f=!1
z=V.dH(0,0,1,1)
m.r=z
z=o.b
if(z!==m){if(z!=null){z=z.gB()
z.toString
w=H.e(o.ga1(),v)
C.a.L(z.a,w)}u=o.b
o.b=m
z=m.gB()
z.toString
w=H.e(o.ga1(),v)
C.a.h(z.a,w)
z=new D.N("target",u,o.b,o,[X.dQ])
z.b=!0
o.ag(z)}o.sd2(null)
o.sd2(t)
o.d.h(0,x)
o.a.saC(U.d8(V.ap(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=document.getElementById("testCanvas")
if(l==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
k=E.i_(l,!0,!0,!0,!1)
z=k.d
if(z!==o){if(z!=null){z=z.gB()
z.toString
w=H.e(k.gc0(),v)
C.a.L(z.a,w)}k.d=o
z=o.gB()
z.toString
v=H.e(k.gc0(),v)
C.a.h(z.a,v)
k.dr()}V.kz(k)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dl.prototype
return J.fC.prototype}if(typeof a=="string")return J.bY.prototype
if(a==null)return J.dm.prototype
if(typeof a=="boolean")return J.fB.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.ca(a)}
J.bO=function(a){if(typeof a=="string")return J.bY.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.ca(a)}
J.cP=function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.ca(a)}
J.kg=function(a){if(typeof a=="number")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c3.prototype
return a}
J.kh=function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bY.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c3.prototype
return a}
J.c9=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.ca(a)}
J.O=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).p(a,b)}
J.eW=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kg(a).ad(a,b)}
J.cW=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kh(a).k(a,b)}
J.eX=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kq(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bO(a).j(a,b)}
J.eY=function(a,b,c,d){return J.c9(a).cn(a,b,c,d)}
J.cd=function(a,b,c){return J.bO(a).f1(a,b,c)}
J.cX=function(a,b){return J.cP(a).v(a,b)}
J.eZ=function(a,b){return J.cP(a).F(a,b)}
J.aM=function(a){return J.J(a).gM(a)}
J.bB=function(a){return J.cP(a).gN(a)}
J.b4=function(a){return J.bO(a).gl(a)}
J.ae=function(a){return J.J(a).i(a)}
I.cS=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.ch.prototype
C.x=J.n.prototype
C.a=J.aQ.prototype
C.f=J.dl.prototype
C.y=J.dm.prototype
C.e=J.bF.prototype
C.i=J.bY.prototype
C.F=J.bG.prototype
C.H=H.h9.prototype
C.I=W.ha.prototype
C.p=J.hf.prototype
C.m=J.c3.prototype
C.r=W.bs.prototype
C.t=W.iE.prototype
C.u=new P.hd()
C.v=new P.ip()
C.j=new P.jq()
C.b=new A.bS(0,"ColorSourceType.None")
C.h=new A.bS(1,"ColorSourceType.Solid")
C.c=new A.bS(2,"ColorSourceType.Texture2D")
C.d=new A.bS(3,"ColorSourceType.TextureCube")
C.l=new P.aO(0)
C.w=new P.aO(5e6)
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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

C.B=function(getTagFallback) {
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
C.C=function() {
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
C.D=function(hooks) {
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
C.E=function(hooks) {
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
C.G=H.b(I.cS([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.q=new P.io(!1)
$.ak=0
$.b5=null
$.d_=null
$.cI=!1
$.eM=null
$.eG=null
$.eS=null
$.c8=null
$.cb=null
$.cQ=null
$.aZ=null
$.bv=null
$.bw=null
$.cJ=!1
$.L=C.j
$.dg=null
$.df=null
$.de=null
$.dd=null
$.m=V.h3()
$.dA=null
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
I.$lazy(y,x,w)}})(["dc","$get$dc",function(){return H.eL("_$dart_dartClosure")},"cp","$get$cp",function(){return H.eL("_$dart_js")},"dZ","$get$dZ",function(){return H.am(H.c2({
toString:function(){return"$receiver$"}}))},"e_","$get$e_",function(){return H.am(H.c2({$method$:null,
toString:function(){return"$receiver$"}}))},"e0","$get$e0",function(){return H.am(H.c2(null))},"e1","$get$e1",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e5","$get$e5",function(){return H.am(H.c2(void 0))},"e6","$get$e6",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e3","$get$e3",function(){return H.am(H.e4(null))},"e2","$get$e2",function(){return H.am(function(){try{null.$method$}catch(z){return z.message}}())},"e8","$get$e8",function(){return H.am(H.e4(void 0))},"e7","$get$e7",function(){return H.am(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cF","$get$cF",function(){return P.iF()},"bx","$get$bx",function(){return[]},"eA","$get$eA",function(){return P.ht("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"da","$get$da",function(){return{}},"ej","$get$ej",function(){return Z.ab(0)},"eh","$get$eh",function(){return Z.ab(511)},"aw","$get$aw",function(){return Z.ab(1)},"av","$get$av",function(){return Z.ab(2)},"au","$get$au",function(){return Z.ab(4)},"ax","$get$ax",function(){return Z.ab(8)},"ay","$get$ay",function(){return Z.ab(16)},"bq","$get$bq",function(){return Z.ab(32)},"br","$get$br",function(){return Z.ab(64)},"ei","$get$ei",function(){return Z.ab(96)},"aX","$get$aX",function(){return Z.ab(128)},"at","$get$at",function(){return Z.ab(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.w]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.l,,]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.C,[P.i,E.aE]]},{func:1,ret:P.F,args:[F.af]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[D.w]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.C,[P.i,D.S]]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.l,args:[P.C]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[P.C,[P.i,V.ag]]},{func:1,ret:W.Y,args:[W.I]},{func:1,ret:P.F,args:[P.T]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.ac,args:[W.I]},{func:1,ret:P.ac,args:[P.t,P.t]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.ac,args:[[P.i,D.S]]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:V.a2,args:[P.t]},{func:1,ret:P.F,args:[F.as,P.t,P.t]},{func:1,ret:-1,args:[P.a],opt:[P.ai]},{func:1,args:[P.l]},{func:1,ret:P.F,args:[P.aU]},{func:1,ret:P.F,args:[W.a5]},{func:1,args:[,P.l]},{func:1,ret:-1,args:[W.bs]}]
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
if(x==y)H.kC(d||a)
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
Isolate.cS=a.cS
Isolate.cN=a.cN
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
if(typeof dartMainRunner==="function")dartMainRunner(X.eP,[])
else X.eP([])})})()
//# sourceMappingURL=test.dart.js.map
