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
var d=supportsDirectProtoAccess&&b2!="b"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d5(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d6=function(){}
var dart=[["","",,H,{"^":"",n8:{"^":"b;a"}}],["","",,J,{"^":"",
C:function(a){return void 0},
db:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ch:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d9==null){H.lM()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.bK("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cB()]
if(v!=null)return v
v=H.lP(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.u
if(y===Object.prototype)return C.u
if(typeof w=="function"){Object.defineProperty(w,$.$get$cB(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
n:{"^":"b;",
u:function(a,b){return a===b},
gO:function(a){return H.bn(a)},
i:["cU",function(a){return"Instance of '"+H.aU(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hm:{"^":"n;",
i:function(a){return String(a)},
gO:function(a){return a?519018:218159},
$isar:1},
dP:{"^":"n;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gO:function(a){return 0},
$isB:1},
cC:{"^":"n;",
gO:function(a){return 0},
i:["cV",function(a){return String(a)}]},
hS:{"^":"cC;"},
c8:{"^":"cC;"},
bI:{"^":"cC;",
i:function(a){var z=a[$.$get$dx()]
if(z==null)return this.cV(a)
return"JavaScript function for "+H.j(J.a3(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscw:1},
aR:{"^":"n;$ti",
h:function(a,b){H.u(b,H.t(a,0))
if(!!a.fixed$length)H.O(P.w("add"))
a.push(b)},
S:function(a,b){var z
if(!!a.fixed$length)H.O(P.w("remove"))
for(z=0;z<a.length;++z)if(J.V(a[z],b)){a.splice(z,1)
return!0}return!1},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aI(a))}},
U:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.j(a[y]))
return z.join(b)},
ei:function(a,b,c,d){var z,y,x
H.u(b,d)
H.d(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aI(a))}return y},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
b_:function(a,b,c){if(b<0||b>a.length)throw H.a(P.W(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.W(c,b,a.length,"end",null))
if(b===c)return H.i([],[H.t(a,0)])
return H.i(a.slice(b,c),[H.t(a,0)])},
gag:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hk())},
ae:function(a,b,c,d){var z
H.u(d,H.t(a,0))
if(!!a.immutable$list)H.O(P.w("fill range"))
P.ay(b,c,a.length,null,null,null)
for(z=b;z.J(0,c);z=z.G(0,1))a[z]=d},
i:function(a){return P.cz(a,"[","]")},
gT:function(a){return new J.al(a,a.length,0,[H.t(a,0)])},
gO:function(a){return H.bn(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.O(P.w("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.bP(b,"newLength",null))
if(b<0)throw H.a(P.W(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.as(a,b))
if(b>=a.length||b<0)throw H.a(H.as(a,b))
return a[b]},
l:function(a,b,c){H.y(b)
H.u(c,H.t(a,0))
if(!!a.immutable$list)H.O(P.w("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.as(a,b))
if(b>=a.length||b<0)throw H.a(H.as(a,b))
a[b]=c},
$isk:1,
$ise:1,
n:{
hl:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.bP(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.W(a,0,4294967295,"length",null))
return J.dM(new Array(a),b)},
dM:function(a,b){return J.bi(H.i(a,[b]))},
bi:function(a){H.bb(a)
a.fixed$length=Array
return a}}},
n7:{"^":"aR;$ti"},
al:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.J(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bW:{"^":"n;",
eW:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.w(""+a+".toInt()"))},
br:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.w(""+a+".floor()"))},
a7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.w(""+a+".round()"))},
cI:function(a,b){var z,y
if(b>20)throw H.a(P.W(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
aL:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.W(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.R(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.O(P.w("Unexpected toString result: "+z))
x=J.at(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.t("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gO:function(a){return a&0x1FFFFFFF},
aN:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
cW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c5(a,b)},
aB:function(a,b){return(a|0)===a?a/b|0:this.c5(a,b)},
c5:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.w("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
an:function(a,b){var z
if(a>0)z=this.c3(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dX:function(a,b){if(b<0)throw H.a(H.a7(b))
return this.c3(a,b)},
c3:function(a,b){return b>31?0:a>>>b},
J:function(a,b){if(typeof b!=="number")throw H.a(H.a7(b))
return a<b},
$isv:1,
$isR:1},
dO:{"^":"bW;",$ism:1},
dN:{"^":"bW;"},
bX:{"^":"n;",
R:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.as(a,b))
if(b<0)throw H.a(H.as(a,b))
if(b>=a.length)H.O(H.as(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.a(H.as(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.F(b)
if(typeof b!=="string")throw H.a(P.bP(b,null,null))
return a+b},
as:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.O(H.a7(b))
c=P.ay(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.O(H.a7(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a3:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.O(H.a7(c))
if(typeof c!=="number")return c.J()
if(c<0||c>a.length)throw H.a(P.W(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a2:function(a,b){return this.a3(a,b,0)},
p:function(a,b,c){H.y(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.O(H.a7(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.J()
if(b<0)throw H.a(P.c5(b,null,null))
if(b>c)throw H.a(P.c5(b,null,null))
if(c>a.length)throw H.a(P.c5(c,null,null))
return a.substring(b,c)},
aw:function(a,b){return this.p(a,b,null)},
t:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
eC:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.t(c,z)+a},
a6:function(a,b){return this.eC(a,b," ")},
cp:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.W(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
co:function(a,b){return this.cp(a,b,0)},
e6:function(a,b,c){if(c>a.length)throw H.a(P.W(c,0,a.length,null,null))
return H.mb(a,b,c)},
i:function(a){return a},
gO:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$ise_:1,
$isf:1}}],["","",,H,{"^":"",
ci:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hk:function(){return new P.ip("No element")},
fQ:{"^":"j_;a",
gj:function(a){return this.a.length},
k:function(a,b){return C.b.R(this.a,b)},
$asc9:function(){return[P.m]},
$asr:function(){return[P.m]},
$ask:function(){return[P.m]},
$ase:function(){return[P.m]}},
h5:{"^":"k;"},
hz:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.at(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aI(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.F(z,w);++this.c
return!0}},
hG:{"^":"k;a,b,$ti",
gT:function(a){return new H.hH(J.bd(this.a),this.b,this.$ti)},
gj:function(a){return J.ah(this.a)},
F:function(a,b){return this.b.$1(J.cn(this.a,b))},
$ask:function(a,b){return[b]}},
hH:{"^":"cA;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$ascA:function(a,b){return[b]}},
jt:{"^":"k;a,b,$ti",
gT:function(a){return new H.ju(J.bd(this.a),this.b,this.$ti)}},
ju:{"^":"cA;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
bV:{"^":"b;$ti"},
c9:{"^":"b;$ti",
l:function(a,b,c){H.y(b)
H.u(c,H.au(this,"c9",0))
throw H.a(P.w("Cannot modify an unmodifiable list"))},
ae:function(a,b,c,d){H.u(d,H.au(this,"c9",0))
throw H.a(P.w("Cannot modify an unmodifiable list"))}},
j_:{"^":"bZ+c9;"}}],["","",,H,{"^":"",
fU:function(){throw H.a(P.w("Cannot modify unmodifiable Map"))},
lE:function(a){return init.types[H.y(a)]},
fk:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isA},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a3(a)
if(typeof z!=="string")throw H.a(H.a7(a))
return z},
bn:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
i0:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.F(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.W(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.C(w,u)|32)>x)return}return parseInt(a,b)},
aU:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.C||!!J.C(a).$isc8){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.C(w,0)===36)w=C.b.aw(w,1)
r=H.da(H.bb(H.aL(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
hT:function(){if(!!self.location)return self.location.href
return},
e3:function(a){var z,y,x,w,v
H.bb(a)
z=J.ah(a)
if(typeof z!=="number")return z.cQ()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
i1:function(a){var z,y,x,w
z=H.i([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.J)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a7(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.c.an(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a7(w))}return H.e3(z)},
e4:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a7(x))
if(x<0)throw H.a(H.a7(x))
if(x>65535)return H.i1(a)}return H.e3(a)},
i2:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.cQ()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
c3:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.an(z,10))>>>0,56320|z&1023)}}throw H.a(P.W(a,0,1114111,null,null))},
a6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i_:function(a){return a.b?H.a6(a).getUTCFullYear()+0:H.a6(a).getFullYear()+0},
hY:function(a){return a.b?H.a6(a).getUTCMonth()+1:H.a6(a).getMonth()+1},
hU:function(a){return a.b?H.a6(a).getUTCDate()+0:H.a6(a).getDate()+0},
hV:function(a){return a.b?H.a6(a).getUTCHours()+0:H.a6(a).getHours()+0},
hX:function(a){return a.b?H.a6(a).getUTCMinutes()+0:H.a6(a).getMinutes()+0},
hZ:function(a){return a.b?H.a6(a).getUTCSeconds()+0:H.a6(a).getSeconds()+0},
hW:function(a){return a.b?H.a6(a).getUTCMilliseconds()+0:H.a6(a).getMilliseconds()+0},
p:function(a){throw H.a(H.a7(a))},
h:function(a,b){if(a==null)J.ah(a)
throw H.a(H.as(a,b))},
as:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.av(!0,b,"index",null)
z=H.y(J.ah(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.c5(b,"index",null)},
lz:function(a,b,c){if(a>c)return new P.c4(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c4(a,c,!0,b,"end","Invalid value")
return new P.av(!0,b,"end",null)},
a7:function(a){return new P.av(!0,a,null,null)},
lu:function(a){if(typeof a!=="number")throw H.a(H.a7(a))
return a},
a:function(a){var z
if(a==null)a=new P.dZ()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fr})
z.name=""}else z.toString=H.fr
return z},
fr:function(){return J.a3(this.dartException)},
O:function(a){throw H.a(a)},
J:function(a){throw H.a(P.aI(a))},
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.me(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.an(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cD(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dY(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ej()
u=$.$get$ek()
t=$.$get$el()
s=$.$get$em()
r=$.$get$eq()
q=$.$get$er()
p=$.$get$eo()
$.$get$en()
o=$.$get$et()
n=$.$get$es()
m=v.a4(y)
if(m!=null)return z.$1(H.cD(H.F(y),m))
else{m=u.a4(y)
if(m!=null){m.method="call"
return z.$1(H.cD(H.F(y),m))}else{m=t.a4(y)
if(m==null){m=s.a4(y)
if(m==null){m=r.a4(y)
if(m==null){m=q.a4(y)
if(m==null){m=p.a4(y)
if(m==null){m=s.a4(y)
if(m==null){m=o.a4(y)
if(m==null){m=n.a4(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dY(H.F(y),m))}}return z.$1(new H.iZ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e9()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.av(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e9()
return a},
ba:function(a){var z
if(a==null)return new H.eT(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eT(a)},
lC:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
lO:function(a,b,c,d,e,f){H.c(a,"$iscw")
switch(H.y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.a8("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var z
H.y(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lO)
a.$identity=z
return z},
fP:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.C(d).$ise){z.$reflectionInfo=d
x=H.i7(z).r}else x=d
w=e?Object.create(new H.iq().constructor.prototype):Object.create(new H.cq(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.am
if(typeof u!=="number")return u.G()
$.am=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dt(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.lE,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dl:H.cr
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dt(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fM:function(a,b,c,d){var z=H.cr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dt:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fO(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fM(y,!w,z,b)
if(y===0){w=$.am
if(typeof w!=="number")return w.G()
$.am=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.be
if(v==null){v=H.bQ("self")
$.be=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.am
if(typeof w!=="number")return w.G()
$.am=w+1
t+=w
w="return function("+t+"){return this."
v=$.be
if(v==null){v=H.bQ("self")
$.be=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fN:function(a,b,c,d){var z,y
z=H.cr
y=H.dl
switch(b?-1:a){case 0:throw H.a(H.ii("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fO:function(a,b){var z,y,x,w,v,u,t,s
z=$.be
if(z==null){z=H.bQ("self")
$.be=z}y=$.dk
if(y==null){y=H.bQ("receiver")
$.dk=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fN(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.am
if(typeof y!=="number")return y.G()
$.am=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.am
if(typeof y!=="number")return y.G()
$.am=y+1
return new Function(z+y+"}")()},
d5:function(a,b,c,d,e,f,g){var z,y
z=J.bi(H.bb(b))
H.y(c)
y=!!J.C(d).$ise?J.bi(d):d
return H.fP(a,z,c,y,!!e,f,g)},
F:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ak(a,"String"))},
lA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ak(a,"double"))},
m2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ak(a,"num"))},
ff:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ak(a,"bool"))},
y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ak(a,"int"))},
fp:function(a,b){throw H.a(H.ak(a,H.F(b).substring(3)))},
m4:function(a,b){var z=J.at(b)
throw H.a(H.fL(a,z.p(b,3,z.gj(b))))},
c:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.fp(a,b)},
aa:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.m4(a,b)},
bb:function(a){if(a==null)return a
if(!!J.C(a).$ise)return a
throw H.a(H.ak(a,"List"))},
fm:function(a,b){if(a==null)return a
if(!!J.C(a).$ise)return a
if(J.C(a)[b])return a
H.fp(a,b)},
fg:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.y(z)]
else return a.$S()}return},
bL:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fg(J.C(a))
if(z==null)return!1
y=H.fj(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.d1)return a
$.d1=!0
try{if(H.bL(a,b))return a
z=H.bO(b)
y=H.ak(a,z)
throw H.a(y)}finally{$.d1=!1}},
d7:function(a,b){if(a!=null&&!H.d4(a,b))H.O(H.ak(a,H.bO(b)))
return a},
fa:function(a){var z
if(a instanceof H.l){z=H.fg(J.C(a))
if(z!=null)return H.bO(z)
return"Closure"}return H.aU(a)},
md:function(a){throw H.a(new P.fY(H.F(a)))},
fh:function(a){return init.getIsolateTag(a)},
i:function(a,b){a.$ti=b
return a},
aL:function(a){if(a==null)return
return a.$ti},
of:function(a,b,c){return H.bc(a["$as"+H.j(c)],H.aL(b))},
aH:function(a,b,c,d){var z
H.F(c)
H.y(d)
z=H.bc(a["$as"+H.j(c)],H.aL(b))
return z==null?null:z[d]},
au:function(a,b,c){var z
H.F(b)
H.y(c)
z=H.bc(a["$as"+H.j(b)],H.aL(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.y(b)
z=H.aL(a)
return z==null?null:z[b]},
bO:function(a){var z=H.aM(a,null)
return z},
aM:function(a,b){var z,y
H.z(b,"$ise",[P.f],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.da(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.j(b[y])}if('func' in a)return H.lk(a,b)
if('futureOr' in a)return"FutureOr<"+H.aM("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lk:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.z(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.i([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.b.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aM(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aM(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aM(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aM(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lB(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.F(z[l])
n=n+m+H.aM(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
da:function(a,b,c){var z,y,x,w,v,u
H.z(c,"$ise",[P.f],"$ase")
if(a==null)return""
z=new P.ao("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aM(u,c)}v="<"+z.i(0)+">"
return v},
bc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b8:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aL(a)
y=J.C(a)
if(y[b]==null)return!1
return H.fd(H.bc(y[d],z),null,c,null)},
z:function(a,b,c,d){var z,y
H.F(b)
H.bb(c)
H.F(d)
if(a==null)return a
z=H.b8(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.da(c,0,null)
throw H.a(H.ak(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fd:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ae(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ae(a[y],b,c[y],d))return!1
return!0},
od:function(a,b,c){return a.apply(b,H.bc(J.C(b)["$as"+H.j(c)],H.aL(b)))},
fl:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="B"||a===-1||a===-2||H.fl(z)}return!1},
d4:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="B"||b===-1||b===-2||H.fl(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d4(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bL(a,b)}y=J.C(a).constructor
x=H.aL(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ae(y,null,b,null)
return z},
u:function(a,b){if(a!=null&&!H.d4(a,b))throw H.a(H.ak(a,H.bO(b)))
return a},
ae:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ae(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="B")return!0
if('func' in c)return H.fj(a,b,c,d)
if('func' in a)return c.builtin$cls==="cw"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ae("type" in a?a.type:null,b,x,d)
else if(H.ae(a,b,x,d))return!0
else{if(!('$is'+"bg" in y.prototype))return!1
w=y.prototype["$as"+"bg"]
v=H.bc(w,z?a.slice(1):null)
return H.ae(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bO(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fd(H.bc(r,z),b,u,d)},
fj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.m1(m,b,l,d)},
m1:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ae(c[w],d,a[w],b))return!1}return!0},
oe:function(a,b,c){Object.defineProperty(a,H.F(b),{value:c,enumerable:false,writable:true,configurable:true})},
lP:function(a){var z,y,x,w,v,u
z=H.F($.fi.$1(a))
y=$.cf[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cj[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.F($.fc.$2(a,z))
if(z!=null){y=$.cf[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cj[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ck(x)
$.cf[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cj[z]=x
return x}if(v==="-"){u=H.ck(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fo(a,x)
if(v==="*")throw H.a(P.bK(z))
if(init.leafTags[z]===true){u=H.ck(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fo(a,x)},
fo:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.db(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ck:function(a){return J.db(a,!1,null,!!a.$isA)},
m0:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ck(z)
else return J.db(z,c,null,null)},
lM:function(){if(!0===$.d9)return
$.d9=!0
H.lN()},
lN:function(){var z,y,x,w,v,u,t,s
$.cf=Object.create(null)
$.cj=Object.create(null)
H.lI()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fq.$1(v)
if(u!=null){t=H.m0(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lI:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.b7(C.F,H.b7(C.K,H.b7(C.o,H.b7(C.o,H.b7(C.J,H.b7(C.G,H.b7(C.H(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fi=new H.lJ(v)
$.fc=new H.lK(u)
$.fq=new H.lL(t)},
b7:function(a,b){return a(b)||b},
mb:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fT:{"^":"b;$ti",
i:function(a){return P.cF(this)},
l:function(a,b,c){H.u(b,H.t(this,0))
H.u(c,H.t(this,1))
return H.fU()},
$isD:1},
fV:{"^":"fT;a,b,c,$ti",
gj:function(a){return this.a},
bn:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bn(0,b))return
return this.bW(b)},
bW:function(a){return this.b[H.F(a)]},
D:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.d(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.u(this.bW(v),z))}}},
i6:{"^":"b;a,b,c,d,e,f,r,0x",n:{
i7:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bi(z)
y=z[0]
x=z[1]
return new H.i6(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iI:{"^":"b;a,b,c,d,e,f",
a4:function(a){var z,y,x
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
ap:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.i([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iI(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ep:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hP:{"^":"Y;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dY:function(a,b){return new H.hP(a,b==null?null:b.method)}}},
hp:{"^":"Y;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
cD:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hp(a,y,z?null:b.receiver)}}},
iZ:{"^":"Y;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
me:{"^":"l:16;a",
$1:function(a){if(!!J.C(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eT:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaj:1},
l:{"^":"b;",
i:function(a){return"Closure '"+H.aU(this).trim()+"'"},
gcN:function(){return this},
$iscw:1,
gcN:function(){return this}},
ee:{"^":"l;"},
iq:{"^":"ee;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cq:{"^":"ee;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cq))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gO:function(a){var z,y
z=this.c
if(z==null)y=H.bn(this.a)
else y=typeof z!=="object"?J.aN(z):H.bn(z)
return(y^H.bn(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aU(z)+"'")},
n:{
cr:function(a){return a.a},
dl:function(a){return a.c},
bQ:function(a){var z,y,x,w,v
z=new H.cq("self","target","receiver","name")
y=J.bi(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iJ:{"^":"Y;a",
i:function(a){return this.a},
n:{
ak:function(a,b){return new H.iJ("TypeError: "+H.j(P.bT(a))+": type '"+H.fa(a)+"' is not a subtype of type '"+b+"'")}}},
fK:{"^":"Y;a",
i:function(a){return this.a},
n:{
fL:function(a,b){return new H.fK("CastError: "+H.j(P.bT(a))+": type '"+H.fa(a)+"' is not a subtype of type '"+b+"'")}}},
ih:{"^":"Y;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
ii:function(a){return new H.ih(a)}}},
bY:{"^":"hD;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gaf:function(a){return new H.hs(this,[H.t(this,0)])},
bn:function(a,b){var z=this.b
if(z==null)return!1
return this.dc(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aO(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aO(w,b)
x=y==null?null:y.b
return x}else return this.em(b)},
em:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bY(z,this.cq(a))
x=this.cr(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y
H.u(b,H.t(this,0))
H.u(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.b9()
this.b=z}this.bM(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.b9()
this.c=y}this.bM(y,b,c)}else this.en(b,c)},
en:function(a,b){var z,y,x,w
H.u(a,H.t(this,0))
H.u(b,H.t(this,1))
z=this.d
if(z==null){z=this.b9()
this.d=z}y=this.cq(a)
x=this.bY(z,y)
if(x==null)this.bd(z,y,[this.ba(a,b)])
else{w=this.cr(x,a)
if(w>=0)x[w].b=b
else x.push(this.ba(a,b))}},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aI(this))
z=z.c}},
bM:function(a,b,c){var z
H.u(b,H.t(this,0))
H.u(c,H.t(this,1))
z=this.aO(a,b)
if(z==null)this.bd(a,b,this.ba(b,c))
else z.b=c},
dl:function(){this.r=this.r+1&67108863},
ba:function(a,b){var z,y
z=new H.hr(H.u(a,H.t(this,0)),H.u(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dl()
return z},
cq:function(a){return J.aN(a)&0x3ffffff},
cr:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
i:function(a){return P.cF(this)},
aO:function(a,b){return a[b]},
bY:function(a,b){return a[b]},
bd:function(a,b,c){a[b]=c},
df:function(a,b){delete a[b]},
dc:function(a,b){return this.aO(a,b)!=null},
b9:function(){var z=Object.create(null)
this.bd(z,"<non-identifier-key>",z)
this.df(z,"<non-identifier-key>")
return z},
$isdS:1},
hr:{"^":"b;a,b,0c,0d"},
hs:{"^":"h5;a,$ti",
gj:function(a){return this.a.a},
gT:function(a){var z,y
z=this.a
y=new H.ht(z,z.r,this.$ti)
y.c=z.e
return y}},
ht:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aI(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lJ:{"^":"l:16;a",
$1:function(a){return this.a(a)}},
lK:{"^":"l:30;a",
$2:function(a,b){return this.a(a,b)}},
lL:{"^":"l:25;a",
$1:function(a){return this.a(H.F(a))}},
hn:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise_:1,
$isi8:1,
n:{
ho:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.S("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lB:function(a){return J.dM(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
m3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cc:function(a){return a},
hM:function(a){return new Int8Array(a)},
aq:function(a,b,c){H.bb(b)
if(a>>>0!==a||a>=c)throw H.a(H.as(b,a))},
le:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.lz(a,b,c))
return b},
dX:{"^":"n;",$isdX:1,"%":"ArrayBuffer"},
cJ:{"^":"n;",$iscJ:1,$isiK:1,"%":"DataView;ArrayBufferView;cI|eN|eO|hN|eP|eQ|aK"},
cI:{"^":"cJ;",
gj:function(a){return a.length},
$isA:1,
$asA:I.d6},
hN:{"^":"eO;",
k:function(a,b){H.aq(b,a,a.length)
return a[b]},
l:function(a,b,c){H.y(b)
H.lA(c)
H.aq(b,a,a.length)
a[b]=c},
$asbV:function(){return[P.v]},
$asr:function(){return[P.v]},
$isk:1,
$ask:function(){return[P.v]},
$ise:1,
$ase:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aK:{"^":"eQ;",
l:function(a,b,c){H.y(b)
H.y(c)
H.aq(b,a,a.length)
a[b]=c},
$asbV:function(){return[P.m]},
$asr:function(){return[P.m]},
$isk:1,
$ask:function(){return[P.m]},
$ise:1,
$ase:function(){return[P.m]}},
nj:{"^":"aK;",
k:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nk:{"^":"aK;",
k:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nl:{"^":"aK;",
k:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nm:{"^":"aK;",
k:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nn:{"^":"aK;",
k:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
no:{"^":"aK;",
gj:function(a){return a.length},
k:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
cK:{"^":"aK;",
gj:function(a){return a.length},
k:function(a,b){H.aq(b,a,a.length)
return a[b]},
b_:function(a,b,c){return new Uint8Array(a.subarray(b,H.le(b,c,a.length)))},
$iscK:1,
$isG:1,
"%":";Uint8Array"},
eN:{"^":"cI+r;"},
eO:{"^":"eN+bV;"},
eP:{"^":"cI+r;"},
eQ:{"^":"eP+bV;"}}],["","",,P,{"^":"",
jw:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lr()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b9(new P.jy(z),1)).observe(y,{childList:true})
return new P.jx(z,y,x)}else if(self.setImmediate!=null)return P.ls()
return P.lt()},
o2:[function(a){self.scheduleImmediate(H.b9(new P.jz(H.d(a,{func:1,ret:-1})),0))},"$1","lr",4,0,10],
o3:[function(a){self.setImmediate(H.b9(new P.jA(H.d(a,{func:1,ret:-1})),0))},"$1","ls",4,0,10],
o4:[function(a){H.d(a,{func:1,ret:-1})
P.kz(0,a)},"$1","lt",4,0,10],
eh:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.b0]})
z=C.c.aB(a.a,1000)
return P.kA(z<0?0:z,b)},
ln:function(a,b){if(H.bL(a,{func:1,args:[P.b,P.aj]}))return b.eK(a,null,P.b,P.aj)
if(H.bL(a,{func:1,args:[P.b]}))return H.d(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.bP(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lm:function(){var z,y
for(;z=$.b6,z!=null;){$.bz=null
y=z.b
$.b6=y
if(y==null)$.by=null
z.a.$0()}},
oc:[function(){$.d2=!0
try{P.lm()}finally{$.bz=null
$.d2=!1
if($.b6!=null)$.$get$cW().$1(P.fe())}},"$0","fe",0,0,3],
f9:function(a){var z=new P.eG(H.d(a,{func:1,ret:-1}))
if($.b6==null){$.by=z
$.b6=z
if(!$.d2)$.$get$cW().$1(P.fe())}else{$.by.b=z
$.by=z}},
lq:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.b6
if(z==null){P.f9(a)
$.bz=$.by
return}y=new P.eG(a)
x=$.bz
if(x==null){y.b=z
$.bz=y
$.b6=y}else{y.b=x.b
x.b=y
$.bz=y
if(y.b==null)$.by=y}},
m5:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.M
if(C.d===y){P.ce(null,null,C.d,a)
return}y.toString
P.ce(null,null,y,H.d(y.cb(a),z))},
iG:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b0]}
H.d(b,z)
y=$.M
if(y===C.d){y.toString
return P.eh(a,b)}x=y.cc(b,P.b0)
$.M.toString
return P.eh(a,H.d(x,z))},
cd:function(a,b,c,d,e){var z={}
z.a=d
P.lq(new P.lo(z,e))},
f5:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.M
if(y===c)return d.$0()
$.M=c
z=y
try{y=d.$0()
return y}finally{$.M=z}},
f6:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.u(e,g)
y=$.M
if(y===c)return d.$1(e)
$.M=c
z=y
try{y=d.$1(e)
return y}finally{$.M=z}},
lp:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.u(e,h)
H.u(f,i)
y=$.M
if(y===c)return d.$2(e,f)
$.M=c
z=y
try{y=d.$2(e,f)
return y}finally{$.M=z}},
ce:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.cb(d):c.e4(d,-1)
P.f9(d)},
jy:{"^":"l:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jx:{"^":"l:38;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jz:{"^":"l:0;a",
$0:function(){this.a.$0()}},
jA:{"^":"l:0;a",
$0:function(){this.a.$0()}},
eW:{"^":"b;a,0b,c",
d2:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b9(new P.kC(this,b),0),a)
else throw H.a(P.w("`setTimeout()` not found."))},
d3:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b9(new P.kB(this,a,Date.now(),b),0),a)
else throw H.a(P.w("Periodic timer."))},
$isb0:1,
n:{
kz:function(a,b){var z=new P.eW(!0,0)
z.d2(a,b)
return z},
kA:function(a,b){var z=new P.eW(!1,0)
z.d3(a,b)
return z}}},
kC:{"^":"l:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kB:{"^":"l:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.cW(w,x)}z.c=y
this.d.$1(z)}},
b5:{"^":"b;0a,b,c,d,e,$ti",
eu:function(a){if(this.c!==6)return!0
return this.b.b.bB(H.d(this.d,{func:1,ret:P.ar,args:[P.b]}),a.a,P.ar,P.b)},
el:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.bL(z,{func:1,args:[P.b,P.aj]}))return H.d7(w.eQ(z,a.a,a.b,null,y,P.aj),x)
else return H.d7(w.bB(H.d(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aE:{"^":"b;c4:a<,b,0dT:c<,$ti",
cH:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.M
if(y!==C.d){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ln(b,y)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aE(0,$.M,[c])
w=b==null?1:3
this.bN(new P.b5(x,w,a,b,[z,c]))
return x},
eV:function(a,b){return this.cH(a,null,b)},
bN:function(a){var z,y
z=this.a
if(z<=1){a.a=H.c(this.c,"$isb5")
this.c=a}else{if(z===2){y=H.c(this.c,"$isaE")
z=y.a
if(z<4){y.bN(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ce(null,null,z,H.d(new P.jP(this,a),{func:1,ret:-1}))}},
c0:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.c(this.c,"$isb5")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.c(this.c,"$isaE")
y=u.a
if(y<4){u.c0(a)
return}this.a=y
this.c=u.c}z.a=this.aP(a)
y=this.b
y.toString
P.ce(null,null,y,H.d(new P.jU(z,this),{func:1,ret:-1}))}},
bc:function(){var z=H.c(this.c,"$isb5")
this.c=null
return this.aP(z)},
aP:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bS:function(a){var z,y,x,w
z=H.t(this,0)
H.d7(a,{futureOr:1,type:z})
y=this.$ti
x=H.b8(a,"$isbg",y,"$asbg")
if(x){z=H.b8(a,"$isaE",y,null)
if(z)P.eJ(a,this)
else P.jQ(a,this)}else{w=this.bc()
H.u(a,z)
this.a=4
this.c=a
P.bu(this,w)}},
b2:[function(a,b){var z
H.c(b,"$isaj")
z=this.bc()
this.a=8
this.c=new P.ab(a,b)
P.bu(this,z)},function(a){return this.b2(a,null)},"f1","$2","$1","gda",4,2,36],
$isbg:1,
n:{
jQ:function(a,b){var z,y,x
b.a=1
try{a.cH(new P.jR(b),new P.jS(b),null)}catch(x){z=H.ag(x)
y=H.ba(x)
P.m5(new P.jT(b,z,y))}},
eJ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.c(a.c,"$isaE")
if(z>=4){y=b.bc()
b.a=a.a
b.c=a.c
P.bu(b,y)}else{y=H.c(b.c,"$isb5")
b.a=2
b.c=a
a.c0(y)}},
bu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.c(y.c,"$isab")
y=y.b
u=v.a
t=v.b
y.toString
P.cd(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.c(r,"$isab")
y=y.b
u=r.a
t=r.b
y.toString
P.cd(null,null,y,u,t)
return}o=$.M
if(o==null?q!=null:o!==q)$.M=q
else o=null
y=b.c
if(y===8)new P.jX(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jW(x,b,r).$0()}else if((y&2)!==0)new P.jV(z,x,b).$0()
if(o!=null)$.M=o
y=x.b
if(!!J.C(y).$isbg){if(y.a>=4){n=H.c(t.c,"$isb5")
t.c=null
b=t.aP(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eJ(y,t)
return}}m=b.b
n=H.c(m.c,"$isb5")
m.c=null
b=m.aP(n)
y=x.a
u=x.b
if(!y){H.u(u,H.t(m,0))
m.a=4
m.c=u}else{H.c(u,"$isab")
m.a=8
m.c=u}z.a=m
y=m}}}},
jP:{"^":"l:0;a,b",
$0:function(){P.bu(this.a,this.b)}},
jU:{"^":"l:0;a,b",
$0:function(){P.bu(this.b,this.a.a)}},
jR:{"^":"l:14;a",
$1:function(a){var z=this.a
z.a=0
z.bS(a)}},
jS:{"^":"l:24;a",
$2:function(a,b){this.a.b2(a,H.c(b,"$isaj"))},
$1:function(a){return this.$2(a,null)}},
jT:{"^":"l:0;a,b,c",
$0:function(){this.a.b2(this.b,this.c)}},
jX:{"^":"l:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.cF(H.d(w.d,{func:1}),null)}catch(v){y=H.ag(v)
x=H.ba(v)
if(this.d){w=H.c(this.a.a.c,"$isab").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.c(this.a.a.c,"$isab")
else u.b=new P.ab(y,x)
u.a=!0
return}if(!!J.C(z).$isbg){if(z instanceof P.aE&&z.gc4()>=4){if(z.gc4()===8){w=this.b
w.b=H.c(z.gdT(),"$isab")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.eV(new P.jY(t),null)
w.a=!1}}},
jY:{"^":"l:42;a",
$1:function(a){return this.a}},
jW:{"^":"l:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.u(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.bB(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ag(t)
y=H.ba(t)
x=this.a
x.b=new P.ab(z,y)
x.a=!0}}},
jV:{"^":"l:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.c(this.a.a.c,"$isab")
w=this.c
if(w.eu(z)&&w.e!=null){v=this.b
v.b=w.el(z)
v.a=!1}}catch(u){y=H.ag(u)
x=H.ba(u)
w=H.c(this.a.a.c,"$isab")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ab(y,x)
s.a=!0}}},
eG:{"^":"b;a,0b"},
cN:{"^":"b;$ti",
gj:function(a){var z,y
z={}
y=new P.aE(0,$.M,[P.m])
z.a=0
this.eq(new P.it(z,this),!0,new P.iu(z,y),y.gda())
return y}},
it:{"^":"l;a,b",
$1:function(a){H.u(a,H.au(this.b,"cN",0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.au(this.b,"cN",0)]}}},
iu:{"^":"l:0;a,b",
$0:function(){this.b.bS(this.a.a)}},
ea:{"^":"b;$ti"},
is:{"^":"b;"},
b0:{"^":"b;"},
ab:{"^":"b;a,b",
i:function(a){return H.j(this.a)},
$isY:1},
l3:{"^":"b;",$iso1:1},
lo:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dZ()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
kh:{"^":"l3;",
eR:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.d===$.M){a.$0()
return}P.f5(null,null,this,a,-1)}catch(x){z=H.ag(x)
y=H.ba(x)
P.cd(null,null,this,z,H.c(y,"$isaj"))}},
eS:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.u(b,c)
try{if(C.d===$.M){a.$1(b)
return}P.f6(null,null,this,a,b,-1,c)}catch(x){z=H.ag(x)
y=H.ba(x)
P.cd(null,null,this,z,H.c(y,"$isaj"))}},
e4:function(a,b){return new P.kj(this,H.d(a,{func:1,ret:b}),b)},
cb:function(a){return new P.ki(this,H.d(a,{func:1,ret:-1}))},
cc:function(a,b){return new P.kk(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
cF:function(a,b){H.d(a,{func:1,ret:b})
if($.M===C.d)return a.$0()
return P.f5(null,null,this,a,b)},
bB:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.u(b,d)
if($.M===C.d)return a.$1(b)
return P.f6(null,null,this,a,b,c,d)},
eQ:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.u(b,e)
H.u(c,f)
if($.M===C.d)return a.$2(b,c)
return P.lp(null,null,this,a,b,c,d,e,f)},
eK:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
kj:{"^":"l;a,b,c",
$0:function(){return this.a.cF(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ki:{"^":"l:3;a,b",
$0:function(){return this.a.eR(this.b)}},
kk:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.eS(this.b,H.u(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hu:function(a,b,c,d,e){return new H.bY(0,0,[d,e])},
hv:function(a,b,c){H.bb(a)
return H.z(H.lC(a,new H.bY(0,0,[b,c])),"$isdS",[b,c],"$asdS")},
dT:function(a,b){return new H.bY(0,0,[a,b])},
hy:function(a,b,c,d){return new P.k3(0,0,[d])},
hj:function(a,b,c){var z,y
if(P.d3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bA()
C.a.h(y,a)
try{P.ll(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.eb(b,H.fm(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cz:function(a,b,c){var z,y,x
if(P.d3(a))return b+"..."+c
z=new P.ao(b)
y=$.$get$bA()
C.a.h(y,a)
try{x=z
x.a=P.eb(x.gaj(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaj()+c
y=z.gaj()
return y.charCodeAt(0)==0?y:y},
d3:function(a){var z,y
for(z=0;y=$.$get$bA(),z<y.length;++z)if(a===y[z])return!0
return!1},
ll:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gT(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.j(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.E();t=s,s=r){r=z.gM(z);++x
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
hw:function(a,b,c){var z=P.hu(null,null,null,b,c)
a.D(0,new P.hx(z,b,c))
return z},
cF:function(a){var z,y,x
z={}
if(P.d3(a))return"{...}"
y=new P.ao("")
try{C.a.h($.$get$bA(),a)
x=y
x.a=x.gaj()+"{"
z.a=!0
J.df(a,new P.hE(z,y))
z=y
z.a=z.gaj()+"}"}finally{z=$.$get$bA()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaj()
return z.charCodeAt(0)==0?z:z},
k3:{"^":"jZ;a,0b,0c,0d,0e,0f,r,$ti",
gT:function(a){return P.eM(this,this.r,H.t(this,0))},
gj:function(a){return this.a},
h:function(a,b){var z,y
H.u(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cY()
this.b=z}return this.bQ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cY()
this.c=y}return this.bQ(y,b)}else return this.d4(0,b)},
d4:function(a,b){var z,y,x
H.u(b,H.t(this,0))
z=this.d
if(z==null){z=P.cY()
this.d=z}y=this.bT(b)
x=z[y]
if(x==null)z[y]=[this.b1(b)]
else{if(this.bX(x,b)>=0)return!1
x.push(this.b1(b))}return!0},
S:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.c1(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c1(this.c,b)
else return this.dP(0,b)},
dP:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.di(z,b)
x=this.bX(y,b)
if(x<0)return!1
this.c7(y.splice(x,1)[0])
return!0},
bQ:function(a,b){H.u(b,H.t(this,0))
if(H.c(a[b],"$iscX")!=null)return!1
a[b]=this.b1(b)
return!0},
c1:function(a,b){var z
if(a==null)return!1
z=H.c(a[b],"$iscX")
if(z==null)return!1
this.c7(z)
delete a[b]
return!0},
bR:function(){this.r=this.r+1&67108863},
b1:function(a){var z,y
z=new P.cX(H.u(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bR()
return z},
c7:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bR()},
bT:function(a){return J.aN(a)&0x3ffffff},
di:function(a,b){return a[this.bT(b)]},
bX:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
n:{
cY:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cX:{"^":"b;a,0b,0c"},
k4:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aI(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.u(z.a,H.t(this,0))
this.c=z.b
return!0}}},
n:{
eM:function(a,b,c){var z=new P.k4(a,b,[c])
z.c=a.e
return z}}},
jZ:{"^":"ij;"},
hx:{"^":"l:7;a,b,c",
$2:function(a,b){this.a.l(0,H.u(a,this.b),H.u(b,this.c))}},
bZ:{"^":"k5;",$isk:1,$ise:1},
r:{"^":"b;$ti",
gT:function(a){return new H.hz(a,this.gj(a),0,[H.aH(this,a,"r",0)])},
F:function(a,b){return this.k(a,b)},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.aH(this,a,"r",0)]})
z=this.gj(a)
if(typeof z!=="number")return H.p(z)
y=0
for(;y<z;++y){b.$1(this.k(a,y))
if(z!==this.gj(a))throw H.a(P.aI(a))}},
eY:function(a,b){var z,y,x
z=H.i([],[H.aH(this,a,"r",0)])
C.a.sj(z,this.gj(a))
y=0
while(!0){x=this.gj(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.l(z,y,this.k(a,y));++y}return z},
eX:function(a){return this.eY(a,!0)},
ae:function(a,b,c,d){var z
H.u(d,H.aH(this,a,"r",0))
P.ay(b,c,this.gj(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
i:function(a){return P.cz(a,"[","]")}},
hD:{"^":"a9;"},
hE:{"^":"l:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
a9:{"^":"b;$ti",
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.aH(this,a,"a9",0),H.aH(this,a,"a9",1)]})
for(z=J.bd(this.gaf(a));z.E();){y=z.gM(z)
b.$2(y,this.k(a,y))}},
gj:function(a){return J.ah(this.gaf(a))},
i:function(a){return P.cF(a)},
$isD:1},
kH:{"^":"b;$ti",
l:function(a,b,c){H.u(b,H.t(this,0))
H.u(c,H.t(this,1))
throw H.a(P.w("Cannot modify unmodifiable map"))}},
hF:{"^":"b;$ti",
k:function(a,b){return J.de(this.a,b)},
l:function(a,b,c){J.cl(this.a,H.u(b,H.t(this,0)),H.u(c,H.t(this,1)))},
D:function(a,b){J.df(this.a,H.d(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gj:function(a){return J.ah(this.a)},
i:function(a){return J.a3(this.a)},
$isD:1},
ew:{"^":"kI;a,$ti"},
ik:{"^":"b;$ti",
i:function(a){return P.cz(this,"{","}")},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dg("index"))
if(b<0)H.O(P.W(b,0,null,"index",null))
for(z=P.eM(this,this.r,H.t(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.a(P.I(b,this,"index",null,y))},
$isk:1},
ij:{"^":"ik;"},
k5:{"^":"b+r;"},
kI:{"^":"hF+kH;$ti"}}],["","",,P,{"^":"",fD:{"^":"bD;a",
ev:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.ay(c,d,b.length,null,null,null)
z=$.$get$eH()
if(typeof d!=="number")return H.p(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.C(b,y)
if(r===37){q=s+2
if(q<=d){p=H.ci(C.b.C(b,s))
o=H.ci(C.b.C(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.h(z,n)
m=z[n]
if(m>=0){n=C.b.R("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ao("")
l=w.a+=C.b.p(b,x,y)
w.a=l+H.c3(r)
x=s
continue}}throw H.a(P.S("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.p(b,x,d)
k=l.length
if(v>=0)P.dj(b,u,d,v,t,k)
else{j=C.c.aN(k-1,4)+1
if(j===1)throw H.a(P.S("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.as(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dj(b,u,d,v,t,i)
else{j=C.c.aN(i,4)
if(j===1)throw H.a(P.S("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.as(b,d,d,j===2?"==":"=")}return b},
$asbD:function(){return[[P.e,P.m],P.f]},
n:{
dj:function(a,b,c,d,e,f){if(C.c.aN(f,4)!==0)throw H.a(P.S("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.S("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.S("Invalid base64 padding, more than two '=' characters",a,b))}}},fE:{"^":"bf;a",
$asbf:function(){return[[P.e,P.m],P.f]}},bD:{"^":"b;$ti"},bf:{"^":"is;$ti"},h7:{"^":"bD;",
$asbD:function(){return[P.f,[P.e,P.m]]}},jc:{"^":"h7;a",
geg:function(){return C.A}},jj:{"^":"bf;",
aD:function(a,b,c){var z,y,x,w
z=a.length
P.ay(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.l2(0,0,x)
if(w.dh(a,b,z)!==z)w.c8(J.fw(a,z-1),0)
return C.Q.b_(x,0,w.b)},
bo:function(a){return this.aD(a,0,null)},
$asbf:function(){return[P.f,[P.e,P.m]]}},l2:{"^":"b;a,b,c",
c8:function(a,b){var z,y,x,w,v
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
dh:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.R(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.C(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.c8(w,C.b.C(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},jd:{"^":"bf;a",
aD:function(a,b,c){var z,y,x,w,v
H.z(a,"$ise",[P.m],"$ase")
z=P.je(!1,a,b,c)
if(z!=null)return z
y=J.ah(a)
P.ay(b,c,y,null,null,null)
x=new P.ao("")
w=new P.l_(!1,x,!0,0,0,0)
w.aD(a,b,y)
w.eh(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
bo:function(a){return this.aD(a,0,null)},
$asbf:function(){return[[P.e,P.m],P.f]},
n:{
je:function(a,b,c,d){H.z(b,"$ise",[P.m],"$ase")
if(b instanceof Uint8Array)return P.jf(!1,b,c,d)
return},
jf:function(a,b,c,d){var z,y,x
z=$.$get$eA()
if(z==null)return
y=0===c
if(y&&!0)return P.cT(z,b)
x=b.length
d=P.ay(c,d,x,null,null,null)
if(y&&d===x)return P.cT(z,b)
return P.cT(z,b.subarray(c,d))},
cT:function(a,b){if(P.jh(b))return
return P.ji(a,b)},
ji:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ag(y)}return},
jh:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
jg:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ag(y)}return}}},l_:{"^":"b;a,b,c,d,e,f",
eh:function(a,b,c){var z
H.z(b,"$ise",[P.m],"$ase")
if(this.e>0){z=P.S("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.z(a,"$ise",[P.m],"$ase")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.l1(c)
v=new P.l0(this,b,c,a)
$label0$0:for(u=J.at(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.aV()
if((r&192)!==128){q=P.S("Bad UTF-8 encoding 0x"+C.c.aL(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.q,q)
if(z<=C.q[q]){q=P.S("Overlong encoding of 0x"+C.c.aL(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.S("Character outside valid Unicode range: 0x"+C.c.aL(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.c3(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.bG()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.J()
if(r<0){m=P.S("Negative UTF-8 code unit: -0x"+C.c.aL(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.S("Bad UTF-8 encoding 0x"+C.c.aL(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},l1:{"^":"l:28;a",
$2:function(a,b){var z,y,x,w
H.z(a,"$ise",[P.m],"$ase")
z=this.a
for(y=J.at(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.aV()
if((w&127)!==w)return x-b}return z-b}},l0:{"^":"l:29;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ec(this.d,a,b)}}}],["","",,P,{"^":"",
bN:function(a,b,c){var z
H.d(b,{func:1,ret:P.m,args:[P.f]})
z=H.i0(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.S(a,null,null))},
h9:function(a){var z=J.C(a)
if(!!z.$isl)return z.i(a)
return"Instance of '"+H.aU(a)+"'"},
hA:function(a,b,c,d){var z,y
H.u(b,d)
z=J.hl(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.z(z,"$ise",[d],"$ase")},
dU:function(a,b,c){var z,y,x
z=[c]
y=H.i([],z)
for(x=a.gT(a);x.E();)C.a.h(y,H.u(x.gM(x),c))
if(b)return y
return H.z(J.bi(y),"$ise",z,"$ase")},
ec:function(a,b,c){var z,y
z=P.m
H.z(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.z(a,"$isaR",[z],"$asaR")
y=a.length
c=P.ay(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.J()
z=c<y}else z=!0
return H.e4(z?C.a.b_(a,b,c):a)}if(!!J.C(a).$iscK)return H.i2(a,b,P.ay(b,c,a.length,null,null,null))
return P.iv(a,b,c)},
iv:function(a,b,c){var z,y,x,w
H.z(a,"$isk",[P.m],"$ask")
if(b<0)throw H.a(P.W(b,0,J.ah(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.W(c,b,J.ah(a),null,null))
y=J.bd(a)
for(x=0;x<b;++x)if(!y.E())throw H.a(P.W(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gM(y))
else for(x=b;x<c;++x){if(!y.E())throw H.a(P.W(c,b,x,null,null))
w.push(y.gM(y))}return H.e4(w)},
i9:function(a,b,c){return new H.hn(a,H.ho(a,!1,!0,!1))},
cS:function(){var z=H.hT()
if(z!=null)return P.j4(z,0,null)
throw H.a(P.w("'Uri.base' is not supported"))},
bT:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h9(a)},
a8:function(a){return new P.eI(a)},
hB:function(a,b,c,d){var z,y
H.d(b,{func:1,ret:d,args:[P.m]})
z=H.i([],[d])
C.a.sj(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
dd:function(a){H.m3(a)},
j4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.C(a,b+4)^58)*3|C.b.C(a,b)^100|C.b.C(a,b+1)^97|C.b.C(a,b+2)^116|C.b.C(a,b+3)^97)>>>0
if(y===0)return P.ex(b>0||c<c?C.b.p(a,b,c):a,5,null).gcL()
else if(y===32)return P.ex(C.b.p(a,z,c),0,null).gcL()}x=new Array(8)
x.fixed$length=Array
w=H.i(x,[P.m])
C.a.l(w,0,0)
x=b-1
C.a.l(w,1,x)
C.a.l(w,2,x)
C.a.l(w,7,x)
C.a.l(w,3,b)
C.a.l(w,4,b)
C.a.l(w,5,c)
C.a.l(w,6,c)
if(P.f7(a,b,c,0,w)>=14)C.a.l(w,7,c)
v=w[1]
if(typeof v!=="number")return v.bF()
if(v>=b)if(P.f7(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.G()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.J()
if(typeof r!=="number")return H.p(r)
if(q<r)r=q
if(typeof s!=="number")return s.J()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.J()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.J()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a3(a,"..",s)))n=r>s+2&&C.b.a3(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a3(a,"file",b)){if(u<=b){if(!C.b.a3(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.p(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.as(a,s,r,"/");++r;++q;++c}else{a=C.b.p(a,b,s)+"/"+C.b.p(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a3(a,"http",b)){if(x&&t+3===s&&C.b.a3(a,"80",t+1))if(b===0&&!0){a=C.b.as(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.p(a,b,t)+C.b.p(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a3(a,"https",b)){if(x&&t+4===s&&C.b.a3(a,"443",t+1))if(b===0&&!0){a=C.b.as(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.p(a,b,t)+C.b.p(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.p(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.km(a,v,u,t,s,r,q,o)}return P.kJ(a,b,c,v,u,t,s,r,q,o)},
ez:function(a,b){var z=P.f
return C.a.ei(H.i(a.split("&"),[z]),P.dT(z,z),new P.j7(b),[P.D,P.f,P.f])},
j2:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.j3(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.R(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bN(C.b.p(a,v,w),null,null)
if(typeof s!=="number")return s.bG()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bN(C.b.p(a,v,c),null,null)
if(typeof s!=="number")return s.bG()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
ey:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.j5(a)
y=new P.j6(z,a)
if(a.length<2)z.$1("address is too short")
x=H.i([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.R(a,w)
if(s===58){if(w===b){++w
if(C.b.R(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gag(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.j2(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.c.an(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
lf:function(){var z,y,x,w,v
z=P.hB(22,new P.lh(),!0,P.G)
y=new P.lg(z)
x=new P.li()
w=new P.lj()
v=H.c(y.$2(0,225),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(14,225),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(15,225),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(1,225),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(2,235),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(3,235),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(4,229),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(5,229),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(6,231),"$isG")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(7,231),"$isG")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.c(y.$2(8,8),"$isG"),"]",5)
v=H.c(y.$2(9,235),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(16,235),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(17,235),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(10,235),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(18,235),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(19,235),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(11,235),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(12,236),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.c(y.$2(13,237),"$isG")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.c(y.$2(20,245),"$isG"),"az",21)
v=H.c(y.$2(21,245),"$isG")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
f7:function(a,b,c,d,e){var z,y,x,w,v
H.z(e,"$ise",[P.m],"$ase")
z=$.$get$f8()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.C(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
ar:{"^":"b;"},
"+bool":0,
ac:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ac))return!1
return this.a===b.a&&this.b===b.b},
gO:function(a){var z=this.a
return(z^C.c.an(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fZ(H.i_(this))
y=P.bE(H.hY(this))
x=P.bE(H.hU(this))
w=P.bE(H.hV(this))
v=P.bE(H.hX(this))
u=P.bE(H.hZ(this))
t=P.h_(H.hW(this))
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
bE:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"R;"},
"+double":0,
bF:{"^":"b;a",
J:function(a,b){return C.c.J(this.a,H.c(b,"$isbF").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bF))return!1
return this.a===b.a},
gO:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.h4()
y=this.a
if(y<0)return"-"+new P.bF(0-y).i(0)
x=z.$1(C.c.aB(y,6e7)%60)
w=z.$1(C.c.aB(y,1e6)%60)
v=new P.h3().$1(y%1e6)
return""+C.c.aB(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
dD:function(a,b,c,d,e,f){return new P.bF(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h3:{"^":"l:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h4:{"^":"l:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"b;"},
dZ:{"^":"Y;",
i:function(a){return"Throw of null."}},
av:{"^":"Y;a,b,c,d",
gb4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb3:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gb4()+y+x
if(!this.a)return w
v=this.gb3()
u=P.bT(this.b)
return w+v+": "+H.j(u)},
n:{
bC:function(a){return new P.av(!1,null,null,a)},
bP:function(a,b,c){return new P.av(!0,a,b,c)},
dg:function(a){return new P.av(!1,null,a,"Must not be null")}}},
c4:{"^":"av;e,f,a,b,c,d",
gb4:function(){return"RangeError"},
gb3:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
c5:function(a,b,c){return new P.c4(null,null,!0,a,b,"Value not in range")},
W:function(a,b,c,d,e){return new P.c4(b,c,!0,a,d,"Invalid value")},
ay:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.a(P.W(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.a(P.W(b,a,c,"end",f))
return b}return c}}},
hh:{"^":"av;e,j:f>,a,b,c,d",
gb4:function(){return"RangeError"},
gb3:function(){if(J.fs(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
I:function(a,b,c,d,e){var z=H.y(e!=null?e:J.ah(b))
return new P.hh(b,z,!0,a,c,"Index out of range")}}},
j0:{"^":"Y;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
w:function(a){return new P.j0(a)}}},
iY:{"^":"Y;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
bK:function(a){return new P.iY(a)}}},
ip:{"^":"Y;a",
i:function(a){return"Bad state: "+this.a}},
fS:{"^":"Y;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.bT(z))+"."},
n:{
aI:function(a){return new P.fS(a)}}},
hQ:{"^":"b;",
i:function(a){return"Out of Memory"},
$isY:1},
e9:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isY:1},
fY:{"^":"Y;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eI:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
he:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.p(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.C(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.R(w,s)
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
m=""}l=C.b.p(w,o,p)
return y+n+l+m+"\n"+C.b.t(" ",x-o+n.length)+"^\n"},
n:{
S:function(a,b,c){return new P.he(a,b,c)}}},
m:{"^":"R;"},
"+int":0,
k:{"^":"b;$ti",
gj:function(a){var z,y
z=this.gT(this)
for(y=0;z.E();)++y
return y},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dg("index"))
if(b<0)H.O(P.W(b,0,null,"index",null))
for(z=this.gT(this),y=0;z.E();){x=z.gM(z)
if(b===y)return x;++y}throw H.a(P.I(b,this,"index",null,y))},
i:function(a){return P.hj(this,"(",")")}},
cA:{"^":"b;$ti"},
e:{"^":"b;$ti",$isk:1},
"+List":0,
D:{"^":"b;$ti"},
B:{"^":"b;",
gO:function(a){return P.b.prototype.gO.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
R:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gO:function(a){return H.bn(this)},
i:function(a){return"Instance of '"+H.aU(this)+"'"},
toString:function(){return this.i(this)}},
aj:{"^":"b;"},
f:{"^":"b;",$ise_:1},
"+String":0,
ao:{"^":"b;aj:a<",
gj:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnM:1,
n:{
eb:function(a,b,c){var z=J.bd(b)
if(!z.E())return a
if(c.length===0){do a+=H.j(z.gM(z))
while(z.E())}else{a+=H.j(z.gM(z))
for(;z.E();)a=a+c+H.j(z.gM(z))}return a}}},
j7:{"^":"l:33;a",
$2:function(a,b){var z,y,x,w
z=P.f
H.z(a,"$isD",[z,z],"$asD")
H.F(b)
y=J.at(b).co(b,"=")
if(y===-1){if(b!=="")J.cl(a,P.d_(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.p(b,0,y)
w=C.b.aw(b,y+1)
z=this.a
J.cl(a,P.d_(x,0,x.length,z,!0),P.d_(w,0,w.length,z,!0))}return a}},
j3:{"^":"l:34;a",
$2:function(a,b){throw H.a(P.S("Illegal IPv4 address, "+a,this.a,b))}},
j5:{"^":"l:22;a",
$2:function(a,b){throw H.a(P.S("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
j6:{"^":"l:37;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bN(C.b.p(this.b,a,b),null,16)
if(typeof z!=="number")return z.J()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cb:{"^":"b;aX:a<,b,c,d,cA:e>,f,r,0x,0y,0z,0Q,0ch",
gcM:function(){return this.b},
gbs:function(a){var z=this.c
if(z==null)return""
if(C.b.a2(z,"["))return C.b.p(z,1,z.length-1)
return z},
gaT:function(a){var z=this.d
if(z==null)return P.eY(this.a)
return z},
gby:function(a){var z=this.f
return z==null?"":z},
gcj:function(){var z=this.r
return z==null?"":z},
bz:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.z(h,"$isD",[P.f,null],"$asD")
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
if(x&&!C.b.a2(d,"/"))d="/"+d
g=P.cZ(g,0,0,h)
return new P.cb(i,j,c,f,d,g,this.r)},
cE:function(a,b){return this.bz(a,null,null,null,null,null,null,b,null,null)},
gaU:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.f
y=new P.ew(P.ez(z==null?"":z,C.h),[y,y])
this.Q=y
z=y}return z},
gck:function(){return this.c!=null},
gcn:function(){return this.f!=null},
gcl:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.j(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.j(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.j(y)}else z=y
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
z=J.C(b)
if(!!z.$iscR){y=this.a
x=b.gaX()
if(y==null?x==null:y===x)if(this.c!=null===b.gck()){y=this.b
x=b.gcM()
if(y==null?x==null:y===x){y=this.gbs(this)
x=z.gbs(b)
if(y==null?x==null:y===x){y=this.gaT(this)
x=z.gaT(b)
if(y==null?x==null:y===x)if(this.e===z.gcA(b)){y=this.f
x=y==null
if(!x===b.gcn()){if(x)y=""
if(y===z.gby(b)){z=this.r
y=z==null
if(!y===b.gcl()){if(y)z=""
z=z===b.gcj()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gO:function(a){var z=this.z
if(z==null){z=C.b.gO(this.i(0))
this.z=z}return z},
$iscR:1,
n:{
d0:function(a,b,c,d){var z,y,x,w,v,u
H.z(a,"$ise",[P.m],"$ase")
if(c===C.h){z=$.$get$f2().b
if(typeof b!=="string")H.O(H.a7(b))
z=z.test(b)}else z=!1
if(z)return b
H.u(b,H.au(c,"bD",0))
y=c.geg().bo(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.c3(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
kJ:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.kU(a,b,d)
else{if(d===b)P.bw(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.kV(a,z,e-1):""
x=P.kO(a,e,f,!1)
if(typeof f!=="number")return f.G()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.kR(P.bN(C.b.p(a,w,g),new P.kK(a,f),null),j):null}else{y=""
x=null
v=null}u=P.kP(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.J()
t=h<i?P.cZ(a,h+1,i,null):null
return new P.cb(j,y,x,v,u,t,i<c?P.kN(a,i+1,c):null)},
eY:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bw:function(a,b,c){throw H.a(P.S(c,a,b))},
kR:function(a,b){if(a!=null&&a===P.eY(b))return
return a},
kO:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.R(a,b)===91){if(typeof c!=="number")return c.I()
z=c-1
if(C.b.R(a,z)!==93)P.bw(a,b,"Missing end `]` to match `[` in host")
P.ey(a,b+1,z)
return C.b.p(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.R(a,y)===58){P.ey(a,b,c)
return"["+a+"]"}return P.kX(a,b,c)},
kX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.R(a,z)
if(v===37){u=P.f4(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ao("")
s=C.b.p(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.p(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.h(C.r,t)
t=(C.r[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ao("")
if(y<z){x.a+=C.b.p(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.i,t)
t=(C.i[t]&1<<(v&15))!==0}else t=!1
if(t)P.bw(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.R(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ao("")
s=C.b.p(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.eZ(v)
z+=q
y=z}}}}if(x==null)return C.b.p(a,b,c)
if(y<c){s=C.b.p(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
kU:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.f0(C.b.C(a,b)))P.bw(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.C(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.k,w)
w=(C.k[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bw(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.p(a,b,c)
return P.kL(y?a.toLowerCase():a)},
kL:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
kV:function(a,b,c){return P.bx(a,b,c,C.N)},
kP:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bx(a,b,c,C.t):C.E.ft(d,new P.kQ(),P.f).U(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a2(w,"/"))w="/"+w
return P.kW(w,e,f)},
kW:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a2(a,"/"))return P.kY(a,!z||c)
return P.kZ(a)},
cZ:function(a,b,c,d){var z,y
z={}
H.z(d,"$isD",[P.f,null],"$asD")
if(a!=null){if(d!=null)throw H.a(P.bC("Both query and queryParameters specified"))
return P.bx(a,b,c,C.j)}if(d==null)return
y=new P.ao("")
z.a=""
d.D(0,new P.kS(new P.kT(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
kN:function(a,b,c){return P.bx(a,b,c,C.j)},
f4:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.R(a,b+1)
x=C.b.R(a,z)
w=H.ci(y)
v=H.ci(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.c.an(u,4)
if(z>=8)return H.h(C.l,z)
z=(C.l[z]&1<<(u&15))!==0}else z=!1
if(z)return H.c3(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.p(a,b,b+3).toUpperCase()
return},
eZ:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.i(z,[P.m])
C.a.l(y,0,37)
C.a.l(y,1,C.b.C("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.b.C("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.i(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.c.dX(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.b.C("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.b.C("0123456789ABCDEF",u&15))
v+=3}}return P.ec(y,0,null)},
bx:function(a,b,c,d){var z=P.f3(a,b,c,H.z(d,"$ise",[P.m],"$ase"),!1)
return z==null?C.b.p(a,b,c):z},
f3:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.z(d,"$ise",[P.m],"$ase")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.J()
if(typeof c!=="number")return H.p(c)
if(!(y<c))break
c$0:{v=C.b.R(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.f4(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.i,u)
u=(C.i[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bw(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.R(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.eZ(v)}}if(w==null)w=new P.ao("")
w.a+=C.b.p(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.J()
if(x<c)w.a+=C.b.p(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
f1:function(a){if(C.b.a2(a,"."))return!0
return C.b.co(a,"/.")!==-1},
kZ:function(a){var z,y,x,w,v,u,t
if(!P.f1(a))return a
z=H.i([],[P.f])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.V(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.U(z,"/")},
kY:function(a,b){var z,y,x,w,v,u
if(!P.f1(a))return!b?P.f_(a):a
z=H.i([],[P.f])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gag(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gag(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.l(z,0,P.f_(z[0]))}return C.a.U(z,"/")},
f_:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.f0(J.ft(a,0)))for(y=1;y<z;++y){x=C.b.C(a,y)
if(x===58)return C.b.p(a,0,y)+"%3A"+C.b.aw(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.k,w)
w=(C.k[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
kM:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.C(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bC("Invalid URL encoding"))}}return z},
d_:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.d8(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.C(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.h!==d)v=!1
else v=!0
if(v)return y.p(a,b,c)
else u=new H.fQ(y.p(a,b,c))}else{u=H.i([],[P.m])
for(x=b;x<c;++x){w=y.C(a,x)
if(w>127)throw H.a(P.bC("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bC("Truncated URI"))
C.a.h(u,P.kM(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.z(u,"$ise",[P.m],"$ase")
return new P.jd(!1).bo(u)},
f0:function(a){var z=a|32
return 97<=z&&z<=122}}},
kK:{"^":"l:17;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.G()
throw H.a(P.S("Invalid port",this.a,z+1))}},
kQ:{"^":"l:39;",
$1:function(a){return P.d0(C.O,a,C.h,!1)}},
kT:{"^":"l:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.d0(C.l,a,C.h,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.d0(C.l,b,C.h,!0))}}},
kS:{"^":"l:43;a",
$2:function(a,b){var z,y
H.F(a)
if(b==null||typeof b==="string")this.a.$2(a,H.F(b))
else for(z=J.bd(H.fm(b,"$isk")),y=this.a;z.E();)y.$2(a,H.F(z.gM(z)))}},
j1:{"^":"b;a,b,c",
gcL:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.cp(y,"?",z)
w=y.length
if(x>=0){v=P.bx(y,x+1,w,C.j)
w=x}else v=null
z=new P.jF(this,"data",null,null,null,P.bx(y,z,w,C.t),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
n:{
ex:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.i([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.C(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.S("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.S("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.C(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gag(z)
if(v!==44||x!==t+7||!C.b.a3(a,"base64",t+1))throw H.a(P.S("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.x.ev(0,a,s,y)
else{r=P.f3(a,s,y,C.j,!0)
if(r!=null)a=C.b.as(a,s,y,r)}return new P.j1(a,z,c)}}},
lh:{"^":"l:47;",
$1:function(a){return new Uint8Array(96)}},
lg:{"^":"l:23;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.fx(z,0,96,b)
return z}},
li:{"^":"l;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.C(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
lj:{"^":"l;",
$3:function(a,b,c){var z,y,x
for(z=C.b.C(b,0),y=C.b.C(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
km:{"^":"b;a,b,c,d,e,f,r,x,0y",
gck:function(){return this.c>0},
gcm:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.G()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
gcn:function(){var z=this.f
if(typeof z!=="number")return z.J()
return z<this.r},
gcl:function(){return this.r<this.a.length},
gbZ:function(){return this.b===4&&C.b.a2(this.a,"http")},
gc_:function(){return this.b===5&&C.b.a2(this.a,"https")},
gaX:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gbZ()){this.x="http"
z="http"}else if(this.gc_()){this.x="https"
z="https"}else if(z===4&&C.b.a2(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a2(this.a,"package")){this.x="package"
z="package"}else{z=C.b.p(this.a,0,z)
this.x=z}return z},
gcM:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.p(this.a,y,z-1):""},
gbs:function(a){var z=this.c
return z>0?C.b.p(this.a,z,this.d):""},
gaT:function(a){var z
if(this.gcm()){z=this.d
if(typeof z!=="number")return z.G()
return P.bN(C.b.p(this.a,z+1,this.e),null,null)}if(this.gbZ())return 80
if(this.gc_())return 443
return 0},
gcA:function(a){return C.b.p(this.a,this.e,this.f)},
gby:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.J()
return z<y?C.b.p(this.a,z+1,y):""},
gcj:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aw(y,z+1):""},
gaU:function(){var z=this.f
if(typeof z!=="number")return z.J()
if(z>=this.r)return C.P
z=P.f
return new P.ew(P.ez(this.gby(this),C.h),[z,z])},
bz:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.z(h,"$isD",[P.f,null],"$asD")
i=this.gaX()
z=i==="file"
y=this.c
j=y>0?C.b.p(this.a,this.b+3,y):""
f=this.gcm()?this.gaT(this):null
y=this.c
if(y>0)c=C.b.p(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.p(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a2(d,"/"))d="/"+d
g=P.cZ(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aw(y,x+1)
return new P.cb(i,j,c,f,d,g,b)},
cE:function(a,b){return this.bz(a,null,null,null,null,null,null,b,null,null)},
gO:function(a){var z=this.y
if(z==null){z=C.b.gO(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.C(b)
if(!!z.$iscR)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$iscR:1},
jF:{"^":"cb;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
ct:function(a,b){var z=document.createElement("canvas")
return z},
h6:function(a){H.c(a,"$isZ")
return"wheel"},
dI:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
hi:function(a){var z,y,x
y=document.createElement("input")
z=H.c(y,"$isdJ")
try{J.fz(z,a)}catch(x){H.ag(x)}return z},
ca:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eL:function(a,b,c,d){var z,y
z=W.ca(W.ca(W.ca(W.ca(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fb:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.M
if(z===C.d)return a
return z.cc(a,b)},
a_:{"^":"P;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
mg:{"^":"cM;0m:x=,0q:y=","%":"Accelerometer|LinearAccelerationSensor"},
mh:{"^":"n;0j:length=","%":"AccessibleNodeList"},
mi:{"^":"a_;0V:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mj:{"^":"a_;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cp:{"^":"n;",$iscp:1,"%":";Blob"},
mp:{"^":"a_;0V:type}","%":"HTMLButtonElement"},
cs:{"^":"a_;",
aW:function(a,b,c){if(c!=null)return a.getContext(b,P.lv(c,null))
return a.getContext(b)},
cO:function(a,b){return this.aW(a,b,null)},
$iscs:1,
"%":"HTMLCanvasElement"},
dr:{"^":"n;",$isdr:1,"%":"CanvasRenderingContext2D"},
mr:{"^":"E;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mt:{"^":"bS;0j:length=","%":"CSSPerspective"},
mu:{"^":"cv;0m:x=,0q:y=","%":"CSSPositionValue"},
mv:{"^":"bS;0m:x=,0q:y=","%":"CSSRotation"},
aP:{"^":"n;",$isaP:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
mw:{"^":"bS;0m:x=,0q:y=","%":"CSSScale"},
fW:{"^":"jE;0j:length=",
cP:function(a,b){var z=a.getPropertyValue(this.bO(a,b))
return z==null?"":z},
bO:function(a,b){var z,y
z=$.$get$dw()
y=z[b]
if(typeof y==="string")return y
y=this.dY(a,b)
z[b]=y
return y},
dY:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h0()+b
if(z in a)return z
return b},
dU:function(a,b,c,d){a.setProperty(b,c,d)},
gbh:function(a){return a.bottom},
ga9:function(a){return a.height},
gaq:function(a){return a.left},
gbA:function(a){return a.right},
gaM:function(a){return a.top},
gaa:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fX:{"^":"b;",
gaq:function(a){return this.cP(a,"left")}},
cv:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bS:{"^":"n;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
mx:{"^":"cv;0j:length=","%":"CSSTransformValue"},
my:{"^":"bS;0m:x=,0q:y=","%":"CSSTranslation"},
mz:{"^":"cv;0j:length=","%":"CSSUnparsedValue"},
mA:{"^":"n;0j:length=","%":"DataTransferItemList"},
mB:{"^":"n;0m:x=,0q:y=","%":"DeviceAcceleration"},
mC:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
mD:{"^":"h1;",
gm:function(a){return a.x},
gq:function(a){return a.y},
"%":"DOMPoint"},
h1:{"^":"n;",
gm:function(a){return a.x},
gq:function(a){return a.y},
"%":";DOMPointReadOnly"},
mE:{"^":"jH;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.z(c,"$isa0",[P.R],"$asa0")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a0,P.R]]},
$asr:function(){return[[P.a0,P.R]]},
$isk:1,
$ask:function(){return[[P.a0,P.R]]},
$ise:1,
$ase:function(){return[[P.a0,P.R]]},
$asx:function(){return[[P.a0,P.R]]},
"%":"ClientRectList|DOMRectList"},
h2:{"^":"n;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaa(a))+" x "+H.j(this.ga9(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b8(b,"$isa0",[P.R],"$asa0")
if(!z)return!1
z=J.aG(b)
return a.left===z.gaq(b)&&a.top===z.gaM(b)&&this.gaa(a)===z.gaa(b)&&this.ga9(a)===z.ga9(b)},
gO:function(a){return W.eL(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaa(a)&0x1FFFFFFF,this.ga9(a)&0x1FFFFFFF)},
gbh:function(a){return a.bottom},
ga9:function(a){return a.height},
gaq:function(a){return a.left},
gbA:function(a){return a.right},
gaM:function(a){return a.top},
gaa:function(a){return a.width},
gm:function(a){return a.x},
gq:function(a){return a.y},
$isa0:1,
$asa0:function(){return[P.R]},
"%":";DOMRectReadOnly"},
mF:{"^":"jJ;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.F(c)
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.f]},
$asr:function(){return[P.f]},
$isk:1,
$ask:function(){return[P.f]},
$ise:1,
$ase:function(){return[P.f]},
$asx:function(){return[P.f]},
"%":"DOMStringList"},
mG:{"^":"n;0j:length=","%":"DOMTokenList"},
jD:{"^":"bZ;a,b",
gj:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.c(z[b],"$isP")},
l:function(a,b,c){var z
H.y(b)
H.c(c,"$isP")
z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var z=this.eX(this)
return new J.al(z,z.length,0,[H.t(z,0)])},
ae:function(a,b,c,d){throw H.a(P.bK(null))},
$asr:function(){return[W.P]},
$ask:function(){return[W.P]},
$ase:function(){return[W.P]}},
P:{"^":"E;",
gbm:function(a){return new W.jD(a,a.children)},
gaR:function(a){return P.i5(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.R)},
i:function(a){return a.localName},
$isP:1,
"%":";Element"},
mH:{"^":"a_;0V:type}","%":"HTMLEmbedElement"},
a1:{"^":"n;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
Z:{"^":"n;",
ca:["cT",function(a,b,c,d){H.d(c,{func:1,args:[W.a1]})
if(c!=null)this.d5(a,b,c,!1)}],
d5:function(a,b,c,d){return a.addEventListener(b,H.b9(H.d(c,{func:1,args:[W.a1]}),1),!1)},
$isZ:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;eR|eS|eU|eV"},
aJ:{"^":"cp;",$isaJ:1,"%":"File"},
dF:{"^":"jO;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isaJ")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aJ]},
$asr:function(){return[W.aJ]},
$isk:1,
$ask:function(){return[W.aJ]},
$ise:1,
$ase:function(){return[W.aJ]},
$isdF:1,
$asx:function(){return[W.aJ]},
"%":"FileList"},
n_:{"^":"Z;0j:length=","%":"FileWriter"},
n2:{"^":"a_;0j:length=","%":"HTMLFormElement"},
aQ:{"^":"n;",$isaQ:1,"%":"Gamepad"},
n3:{"^":"cM;0m:x=,0q:y=","%":"Gyroscope"},
n4:{"^":"n;0j:length=","%":"History"},
n5:{"^":"k0;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isE")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.E]},
$asr:function(){return[W.E]},
$isk:1,
$ask:function(){return[W.E]},
$ise:1,
$ase:function(){return[W.E]},
$asx:function(){return[W.E]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bH:{"^":"n;0ce:data=",$isbH:1,"%":"ImageData"},
cx:{"^":"a_;",$iscx:1,"%":"HTMLImageElement"},
dJ:{"^":"a_;0V:type}",$isdJ:1,"%":"HTMLInputElement"},
bj:{"^":"cP;",$isbj:1,"%":"KeyboardEvent"},
na:{"^":"a_;0V:type}","%":"HTMLLinkElement"},
nb:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
nc:{"^":"cM;0m:x=,0q:y=","%":"Magnetometer"},
ne:{"^":"n;0j:length=","%":"MediaList"},
nf:{"^":"Z;",
ca:function(a,b,c,d){H.d(c,{func:1,args:[W.a1]})
if(b==="message")a.start()
this.cT(a,b,c,!1)},
"%":"MessagePort"},
ng:{"^":"k6;",
k:function(a,b){return P.aF(a.get(H.F(b)))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gaf:function(a){var z=H.i([],[P.f])
this.D(a,new W.hJ(z))
return z},
gj:function(a){return a.size},
l:function(a,b,c){throw H.a(P.w("Not supported"))},
$asa9:function(){return[P.f,null]},
$isD:1,
$asD:function(){return[P.f,null]},
"%":"MIDIInputMap"},
hJ:{"^":"l:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nh:{"^":"k7;",
k:function(a,b){return P.aF(a.get(H.F(b)))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gaf:function(a){var z=H.i([],[P.f])
this.D(a,new W.hK(z))
return z},
gj:function(a){return a.size},
l:function(a,b,c){throw H.a(P.w("Not supported"))},
$asa9:function(){return[P.f,null]},
$isD:1,
$asD:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
hK:{"^":"l:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
aS:{"^":"n;",$isaS:1,"%":"MimeType"},
ni:{"^":"k9;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isaS")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aS]},
$asr:function(){return[W.aS]},
$isk:1,
$ask:function(){return[W.aS]},
$ise:1,
$ase:function(){return[W.aS]},
$asx:function(){return[W.aS]},
"%":"MimeTypeArray"},
a4:{"^":"cP;",$isa4:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jC:{"^":"bZ;a",
l:function(a,b,c){var z,y
H.y(b)
H.c(c,"$isE")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
gT:function(a){var z=this.a.childNodes
return new W.dG(z,z.length,-1,[H.aH(C.R,z,"x",0)])},
ae:function(a,b,c,d){throw H.a(P.w("Cannot fillRange on Node list"))},
gj:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asr:function(){return[W.E]},
$ask:function(){return[W.E]},
$ase:function(){return[W.E]}},
E:{"^":"Z;",
eN:function(a,b){var z,y
try{z=a.parentNode
J.fu(z,b,a)}catch(y){H.ag(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.cU(a):z},
dQ:function(a,b,c){return a.replaceChild(b,c)},
$isE:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hO:{"^":"kb;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isE")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.E]},
$asr:function(){return[W.E]},
$isk:1,
$ask:function(){return[W.E]},
$ise:1,
$ase:function(){return[W.E]},
$asx:function(){return[W.E]},
"%":"NodeList|RadioNodeList"},
nq:{"^":"a_;0V:type}","%":"HTMLOListElement"},
nr:{"^":"a_;0V:type}","%":"HTMLObjectElement"},
aT:{"^":"n;0j:length=",$isaT:1,"%":"Plugin"},
nv:{"^":"kf;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isaT")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aT]},
$asr:function(){return[W.aT]},
$isk:1,
$ask:function(){return[W.aT]},
$ise:1,
$ase:function(){return[W.aT]},
$asx:function(){return[W.aT]},
"%":"PluginArray"},
nA:{"^":"n;0V:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
nB:{"^":"kl;",
k:function(a,b){return P.aF(a.get(H.F(b)))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gaf:function(a){var z=H.i([],[P.f])
this.D(a,new W.ig(z))
return z},
gj:function(a){return a.size},
l:function(a,b,c){throw H.a(P.w("Not supported"))},
$asa9:function(){return[P.f,null]},
$isD:1,
$asD:function(){return[P.f,null]},
"%":"RTCStatsReport"},
ig:{"^":"l:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nD:{"^":"a_;0V:type}","%":"HTMLScriptElement"},
nF:{"^":"a_;0j:length=","%":"HTMLSelectElement"},
cM:{"^":"Z;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
aV:{"^":"Z;",$isaV:1,"%":"SourceBuffer"},
nG:{"^":"eS;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isaV")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aV]},
$asr:function(){return[W.aV]},
$isk:1,
$ask:function(){return[W.aV]},
$ise:1,
$ase:function(){return[W.aV]},
$asx:function(){return[W.aV]},
"%":"SourceBufferList"},
nH:{"^":"a_;0V:type}","%":"HTMLSourceElement"},
aW:{"^":"n;",$isaW:1,"%":"SpeechGrammar"},
nI:{"^":"ko;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isaW")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aW]},
$asr:function(){return[W.aW]},
$isk:1,
$ask:function(){return[W.aW]},
$ise:1,
$ase:function(){return[W.aW]},
$asx:function(){return[W.aW]},
"%":"SpeechGrammarList"},
aX:{"^":"n;0j:length=",$isaX:1,"%":"SpeechRecognitionResult"},
nK:{"^":"kr;",
k:function(a,b){return a.getItem(H.F(b))},
l:function(a,b,c){a.setItem(b,H.F(c))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaf:function(a){var z=H.i([],[P.f])
this.D(a,new W.ir(z))
return z},
gj:function(a){return a.length},
$asa9:function(){return[P.f,P.f]},
$isD:1,
$asD:function(){return[P.f,P.f]},
"%":"Storage"},
ir:{"^":"l:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nN:{"^":"a_;0V:type}","%":"HTMLStyleElement"},
aY:{"^":"n;",$isaY:1,"%":"CSSStyleSheet|StyleSheet"},
bo:{"^":"a_;",$isbo:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
aZ:{"^":"Z;",$isaZ:1,"%":"TextTrack"},
b_:{"^":"Z;",$isb_:1,"%":"TextTrackCue|VTTCue"},
nS:{"^":"ky;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isb_")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b_]},
$asr:function(){return[W.b_]},
$isk:1,
$ask:function(){return[W.b_]},
$ise:1,
$ase:function(){return[W.b_]},
$asx:function(){return[W.b_]},
"%":"TextTrackCueList"},
nT:{"^":"eV;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isaZ")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aZ]},
$asr:function(){return[W.aZ]},
$isk:1,
$ask:function(){return[W.aZ]},
$ise:1,
$ase:function(){return[W.aZ]},
$asx:function(){return[W.aZ]},
"%":"TextTrackList"},
nU:{"^":"n;0j:length=","%":"TimeRanges"},
b1:{"^":"n;",$isb1:1,"%":"Touch"},
b2:{"^":"cP;",$isb2:1,"%":"TouchEvent"},
nV:{"^":"kE;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isb1")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b1]},
$asr:function(){return[W.b1]},
$isk:1,
$ask:function(){return[W.b1]},
$ise:1,
$ase:function(){return[W.b1]},
$asx:function(){return[W.b1]},
"%":"TouchList"},
nW:{"^":"n;0j:length=","%":"TrackDefaultList"},
cP:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
nY:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
o_:{"^":"n;0m:x=","%":"VRStageBoundsPoint"},
o0:{"^":"Z;0j:length=","%":"VideoTrackList"},
bt:{"^":"a4;",
geb:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.w("deltaY is not supported"))},
gea:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.w("deltaX is not supported"))},
$isbt:1,
"%":"WheelEvent"},
jv:{"^":"Z;",
dR:function(a,b){return a.requestAnimationFrame(H.b9(H.d(b,{func:1,ret:-1,args:[P.R]}),1))},
dg:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
o5:{"^":"l5;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isaP")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aP]},
$asr:function(){return[W.aP]},
$isk:1,
$ask:function(){return[W.aP]},
$ise:1,
$ase:function(){return[W.aP]},
$asx:function(){return[W.aP]},
"%":"CSSRuleList"},
o6:{"^":"h2;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b8(b,"$isa0",[P.R],"$asa0")
if(!z)return!1
z=J.aG(b)
return a.left===z.gaq(b)&&a.top===z.gaM(b)&&a.width===z.gaa(b)&&a.height===z.ga9(b)},
gO:function(a){return W.eL(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga9:function(a){return a.height},
gaa:function(a){return a.width},
gm:function(a){return a.x},
gq:function(a){return a.y},
"%":"ClientRect|DOMRect"},
o8:{"^":"l7;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isaQ")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aQ]},
$asr:function(){return[W.aQ]},
$isk:1,
$ask:function(){return[W.aQ]},
$ise:1,
$ase:function(){return[W.aQ]},
$asx:function(){return[W.aQ]},
"%":"GamepadList"},
o9:{"^":"l9;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isE")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.E]},
$asr:function(){return[W.E]},
$isk:1,
$ask:function(){return[W.E]},
$ise:1,
$ase:function(){return[W.E]},
$asx:function(){return[W.E]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oa:{"^":"lb;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isaX")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aX]},
$asr:function(){return[W.aX]},
$isk:1,
$ask:function(){return[W.aX]},
$ise:1,
$ase:function(){return[W.aX]},
$asx:function(){return[W.aX]},
"%":"SpeechRecognitionResultList"},
ob:{"^":"ld;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.c(c,"$isaY")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aY]},
$asr:function(){return[W.aY]},
$isk:1,
$ask:function(){return[W.aY]},
$ise:1,
$ase:function(){return[W.aY]},
$asx:function(){return[W.aY]},
"%":"StyleSheetList"},
jK:{"^":"cN;a,b,c,$ti",
eq:function(a,b,c,d){var z=H.t(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.U(this.a,this.b,a,!1,z)}},
o7:{"^":"jK;a,b,c,$ti"},
jL:{"^":"ea;a,b,c,d,e,$ti",
e1:function(){var z=this.d
if(z!=null&&this.a<=0)J.fv(this.b,this.c,z,!1)},
n:{
U:function(a,b,c,d,e){var z=c==null?null:W.fb(new W.jM(c),W.a1)
z=new W.jL(0,a,b,z,!1,[e])
z.e1()
return z}}},
jM:{"^":"l:4;a",
$1:function(a){return this.a.$1(H.c(a,"$isa1"))}},
x:{"^":"b;$ti",
gT:function(a){return new W.dG(a,this.gj(a),-1,[H.aH(this,a,"x",0)])},
ae:function(a,b,c,d){H.u(d,H.aH(this,a,"x",0))
throw H.a(P.w("Cannot modify an immutable List."))}},
dG:{"^":"b;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.de(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
jE:{"^":"n+fX;"},
jG:{"^":"n+r;"},
jH:{"^":"jG+x;"},
jI:{"^":"n+r;"},
jJ:{"^":"jI+x;"},
jN:{"^":"n+r;"},
jO:{"^":"jN+x;"},
k_:{"^":"n+r;"},
k0:{"^":"k_+x;"},
k6:{"^":"n+a9;"},
k7:{"^":"n+a9;"},
k8:{"^":"n+r;"},
k9:{"^":"k8+x;"},
ka:{"^":"n+r;"},
kb:{"^":"ka+x;"},
ke:{"^":"n+r;"},
kf:{"^":"ke+x;"},
kl:{"^":"n+a9;"},
eR:{"^":"Z+r;"},
eS:{"^":"eR+x;"},
kn:{"^":"n+r;"},
ko:{"^":"kn+x;"},
kr:{"^":"n+a9;"},
kx:{"^":"n+r;"},
ky:{"^":"kx+x;"},
eU:{"^":"Z+r;"},
eV:{"^":"eU+x;"},
kD:{"^":"n+r;"},
kE:{"^":"kD+x;"},
l4:{"^":"n+r;"},
l5:{"^":"l4+x;"},
l6:{"^":"n+r;"},
l7:{"^":"l6+x;"},
l8:{"^":"n+r;"},
l9:{"^":"l8+x;"},
la:{"^":"n+r;"},
lb:{"^":"la+x;"},
lc:{"^":"n+r;"},
ld:{"^":"lc+x;"}}],["","",,P,{"^":"",
ly:function(a){var z,y
z=J.C(a)
if(!!z.$isbH){y=z.gce(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eX(a.data,a.height,a.width)},
lx:function(a){if(a instanceof P.eX)return{data:a.a,height:a.b,width:a.c}
return a},
aF:function(a){var z,y,x,w,v
if(a==null)return
z=P.dT(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){v=H.F(y[w])
z.l(0,v,a[v])}return z},
lv:function(a,b){var z={}
a.D(0,new P.lw(z))
return z},
dC:function(){var z=$.dB
if(z==null){z=J.cm(window.navigator.userAgent,"Opera",0)
$.dB=z}return z},
h0:function(){var z,y
z=$.dy
if(z!=null)return z
y=$.dz
if(y==null){y=J.cm(window.navigator.userAgent,"Firefox",0)
$.dz=y}if(y)z="-moz-"
else{y=$.dA
if(y==null){y=!P.dC()&&J.cm(window.navigator.userAgent,"Trident/",0)
$.dA=y}if(y)z="-ms-"
else z=P.dC()?"-o-":"-webkit-"}$.dy=z
return z},
ku:{"^":"b;",
cg:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
bD:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.C(a)
if(!!y.$isac)return new Date(a.a)
if(!!y.$isi8)throw H.a(P.bK("structured clone of RegExp"))
if(!!y.$isaJ)return a
if(!!y.$iscp)return a
if(!!y.$isdF)return a
if(!!y.$isbH)return a
if(!!y.$isdX||!!y.$iscJ)return a
if(!!y.$isD){x=this.cg(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.l(w,x,v)
y.D(a,new P.kw(z,this))
return z.a}if(!!y.$ise){x=this.cg(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.e8(a,x)}throw H.a(P.bK("structured clone of other type"))},
e8:function(a,b){var z,y,x,w
z=J.at(a)
y=z.gj(a)
x=new Array(y)
C.a.l(this.b,b,x)
if(typeof y!=="number")return H.p(y)
w=0
for(;w<y;++w)C.a.l(x,w,this.bD(z.k(a,w)))
return x}},
kw:{"^":"l:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.bD(b)}},
eX:{"^":"b;ce:a>,b,c",$isbH:1},
lw:{"^":"l:7;a",
$2:function(a,b){this.a[a]=b}},
kv:{"^":"ku;a,b"},
hb:{"^":"bZ;a,b",
gaz:function(){var z,y,x
z=this.b
y=H.au(z,"r",0)
x=W.P
return new H.hG(new H.jt(z,H.d(new P.hc(),{func:1,ret:P.ar,args:[y]}),[y]),H.d(new P.hd(),{func:1,ret:x,args:[y]}),[y,x])},
D:function(a,b){H.d(b,{func:1,ret:-1,args:[W.P]})
C.a.D(P.dU(this.gaz(),!1,W.P),b)},
l:function(a,b,c){var z
H.y(b)
H.c(c,"$isP")
z=this.gaz()
J.fy(z.b.$1(J.cn(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ae:function(a,b,c,d){throw H.a(P.w("Cannot fillRange on filtered list"))},
gj:function(a){return J.ah(this.gaz().a)},
k:function(a,b){var z=this.gaz()
return z.b.$1(J.cn(z.a,b))},
gT:function(a){var z=P.dU(this.gaz(),!1,W.P)
return new J.al(z,z.length,0,[H.t(z,0)])},
$asr:function(){return[W.P]},
$ask:function(){return[W.P]},
$ase:function(){return[W.P]}},
hc:{"^":"l:26;",
$1:function(a){return!!J.C(H.c(a,"$isE")).$isP}},
hd:{"^":"l:27;",
$1:function(a){return H.aa(H.c(a,"$isE"),"$isP")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eK:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bJ:{"^":"b;m:a>,q:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b8(b,"$isbJ",[P.R],null)
if(!z)return!1
z=this.a
y=J.aG(b)
x=y.gm(b)
if(z==null?x==null:z===x){z=this.b
y=y.gq(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gO:function(a){var z,y
z=J.aN(this.a)
y=J.aN(this.b)
return P.eK(P.bv(P.bv(0,z),y))}},
kg:{"^":"b;$ti",
gbA:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.u(z+this.c,H.t(this,0))},
gbh:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.u(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b8(b,"$isa0",[P.R],"$asa0")
if(!z)return!1
z=this.a
y=J.aG(b)
x=y.gaq(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaM(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.t(this,0)
if(H.u(z+this.c,w)===y.gbA(b)){if(typeof x!=="number")return x.G()
z=H.u(x+this.d,w)===y.gbh(b)}else z=!1}else z=!1}else z=!1
return z},
gO:function(a){var z,y,x,w,v
z=this.a
y=J.aN(z)
x=this.b
w=J.aN(x)
if(typeof z!=="number")return z.G()
v=H.t(this,0)
z=H.u(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.u(x+this.d,v)
return P.eK(P.bv(P.bv(P.bv(P.bv(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cd:function(a,b){var z,y
H.z(b,"$isbJ",[P.R],"$asbJ")
z=b.a
y=this.a
if(typeof z!=="number")return z.bF()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.bF()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a0:{"^":"kg;aq:a>,aM:b>,aa:c>,a9:d>,$ti",n:{
i5:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.J()
if(c<0)z=-c*0
else z=c
H.u(z,e)
if(typeof d!=="number")return d.J()
if(d<0)y=-d*0
else y=d
return new P.a0(a,b,z,H.u(y,e),[e])}}}}],["","",,P,{"^":"",mI:{"^":"K;0m:x=,0q:y=","%":"SVGFEBlendElement"},mJ:{"^":"K;0m:x=,0q:y=","%":"SVGFEColorMatrixElement"},mK:{"^":"K;0m:x=,0q:y=","%":"SVGFEComponentTransferElement"},mL:{"^":"K;0m:x=,0q:y=","%":"SVGFECompositeElement"},mM:{"^":"K;0m:x=,0q:y=","%":"SVGFEConvolveMatrixElement"},mN:{"^":"K;0m:x=,0q:y=","%":"SVGFEDiffuseLightingElement"},mO:{"^":"K;0m:x=,0q:y=","%":"SVGFEDisplacementMapElement"},mP:{"^":"K;0m:x=,0q:y=","%":"SVGFEFloodElement"},mQ:{"^":"K;0m:x=,0q:y=","%":"SVGFEGaussianBlurElement"},mR:{"^":"K;0m:x=,0q:y=","%":"SVGFEImageElement"},mS:{"^":"K;0m:x=,0q:y=","%":"SVGFEMergeElement"},mT:{"^":"K;0m:x=,0q:y=","%":"SVGFEMorphologyElement"},mU:{"^":"K;0m:x=,0q:y=","%":"SVGFEOffsetElement"},mV:{"^":"K;0m:x=,0q:y=","%":"SVGFEPointLightElement"},mW:{"^":"K;0m:x=,0q:y=","%":"SVGFESpecularLightingElement"},mX:{"^":"K;0m:x=,0q:y=","%":"SVGFESpotLightElement"},mY:{"^":"K;0m:x=,0q:y=","%":"SVGFETileElement"},mZ:{"^":"K;0m:x=,0q:y=","%":"SVGFETurbulenceElement"},n0:{"^":"K;0m:x=,0q:y=","%":"SVGFilterElement"},n1:{"^":"bh;0m:x=,0q:y=","%":"SVGForeignObjectElement"},hg:{"^":"bh;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bh:{"^":"K;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},n6:{"^":"bh;0m:x=,0q:y=","%":"SVGImageElement"},bk:{"^":"n;",$isbk:1,"%":"SVGLength"},n9:{"^":"k2;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.y(b)
H.c(c,"$isbk")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.k(a,b)},
$asr:function(){return[P.bk]},
$isk:1,
$ask:function(){return[P.bk]},
$ise:1,
$ase:function(){return[P.bk]},
$asx:function(){return[P.bk]},
"%":"SVGLengthList"},nd:{"^":"K;0m:x=,0q:y=","%":"SVGMaskElement"},bm:{"^":"n;",$isbm:1,"%":"SVGNumber"},np:{"^":"kd;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.y(b)
H.c(c,"$isbm")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.k(a,b)},
$asr:function(){return[P.bm]},
$isk:1,
$ask:function(){return[P.bm]},
$ise:1,
$ase:function(){return[P.bm]},
$asx:function(){return[P.bm]},
"%":"SVGNumberList"},nu:{"^":"K;0m:x=,0q:y=","%":"SVGPatternElement"},nw:{"^":"n;0m:x=,0q:y=","%":"SVGPoint"},nx:{"^":"n;0j:length=","%":"SVGPointList"},ny:{"^":"n;0m:x=,0q:y=","%":"SVGRect"},nz:{"^":"hg;0m:x=,0q:y=","%":"SVGRectElement"},nE:{"^":"K;0V:type}","%":"SVGScriptElement"},nL:{"^":"kt;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.y(b)
H.F(c)
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.k(a,b)},
$asr:function(){return[P.f]},
$isk:1,
$ask:function(){return[P.f]},
$ise:1,
$ase:function(){return[P.f]},
$asx:function(){return[P.f]},
"%":"SVGStringList"},nO:{"^":"K;0V:type}","%":"SVGStyleElement"},K:{"^":"P;",
gbm:function(a){return new P.hb(a,new W.jC(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nP:{"^":"bh;0m:x=,0q:y=","%":"SVGSVGElement"},iw:{"^":"bh;","%":"SVGTextPathElement;SVGTextContentElement"},nR:{"^":"iw;0m:x=,0q:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bp:{"^":"n;",$isbp:1,"%":"SVGTransform"},nX:{"^":"kG;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.y(b)
H.c(c,"$isbp")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.k(a,b)},
$asr:function(){return[P.bp]},
$isk:1,
$ask:function(){return[P.bp]},
$ise:1,
$ase:function(){return[P.bp]},
$asx:function(){return[P.bp]},
"%":"SVGTransformList"},nZ:{"^":"bh;0m:x=,0q:y=","%":"SVGUseElement"},k1:{"^":"n+r;"},k2:{"^":"k1+x;"},kc:{"^":"n+r;"},kd:{"^":"kc+x;"},ks:{"^":"n+r;"},kt:{"^":"ks+x;"},kF:{"^":"n+r;"},kG:{"^":"kF+x;"}}],["","",,P,{"^":"",G:{"^":"b;",$isk:1,
$ask:function(){return[P.m]},
$ise:1,
$ase:function(){return[P.m]},
$isiK:1}}],["","",,P,{"^":"",mk:{"^":"n;0j:length=","%":"AudioBuffer"},di:{"^":"Z;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},ml:{"^":"jB;",
k:function(a,b){return P.aF(a.get(H.F(b)))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gaf:function(a){var z=H.i([],[P.f])
this.D(a,new P.fB(z))
return z},
gj:function(a){return a.size},
l:function(a,b,c){throw H.a(P.w("Not supported"))},
$asa9:function(){return[P.f,null]},
$isD:1,
$asD:function(){return[P.f,null]},
"%":"AudioParamMap"},fB:{"^":"l:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},fC:{"^":"di;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},mm:{"^":"Z;0j:length=","%":"AudioTrackList"},fF:{"^":"Z;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mn:{"^":"di;0V:type}","%":"BiquadFilterNode"},ns:{"^":"fF;0j:length=","%":"OfflineAudioContext"},nt:{"^":"fC;0V:type}","%":"Oscillator|OscillatorNode"},jB:{"^":"n+a9;"}}],["","",,P,{"^":"",cL:{"^":"n;",
eU:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.C(g)
if(!!z.$isbH)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.lx(g))
return}if(!!z.$iscx)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bC("Incorrect number or type of arguments"))},
eT:function(a,b,c,d,e,f,g){return this.eU(a,b,c,d,e,f,g,null,null,null)},
$iscL:1,
"%":"WebGLRenderingContext"},iU:{"^":"n;",$isiU:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",nJ:{"^":"kq;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.I(b,a,null,null,null))
return P.aF(a.item(b))},
l:function(a,b,c){H.y(b)
H.c(c,"$isD")
throw H.a(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.k(a,b)},
$asr:function(){return[[P.D,,,]]},
$isk:1,
$ask:function(){return[[P.D,,,]]},
$ise:1,
$ase:function(){return[[P.D,,,]]},
$asx:function(){return[[P.D,,,]]},
"%":"SQLResultSetRowList"},kp:{"^":"n+r;"},kq:{"^":"kp+x;"}}],["","",,O,{"^":"",aO:{"^":"b;0a,0b,0c,0d,$ti",
bJ:function(a){this.a=H.i([],[a])
this.b=null
this.c=null
this.d=null},
cS:function(a,b,c){var z={func:1,ret:-1,args:[P.m,[P.k,H.au(this,"aO",0)]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
aY:function(a,b){return this.cS(a,null,b)},
dK:function(a){H.z(a,"$isk",[H.au(this,"aO",0)],"$ask")
return!0},
cZ:function(a,b){var z
H.z(b,"$isk",[H.au(this,"aO",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gj:function(a){return this.a.length},
gT:function(a){var z=this.a
return new J.al(z,z.length,0,[H.t(z,0)])},
F:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.au(this,"aO",0)
H.u(b,z)
z=[z]
if(this.dK(H.i([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cZ(x,H.i([b],z))}},
$isk:1,
n:{
du:function(a){var z=new O.aO([a])
z.bJ(a)
return z}}},cG:{"^":"b;0a,0b",
gj:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
d_:function(a){var z=this.b
if(!(z==null))z.B(a)},
ah:function(){return this.d_(null)},
gaG:function(a){var z=this.a
if(z.length>0)return C.a.gag(z)
else return V.c0()},
cC:function(a){var z=this.a
if(a==null)C.a.h(z,V.c0())
else C.a.h(z,a)
this.ah()},
bx:function(){var z=this.a
if(z.length>0){z.pop()
this.ah()}}}}],["","",,E,{"^":"",co:{"^":"b;"},aw:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0W:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
bP:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.al(z,z.length,0,[H.t(z,0)]);z.E();){y=z.d
if(y.f==null)y.bP()}},
sbH:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gv()
y.toString
x=H.d(this.gcw(),{func:1,ret:-1,args:[D.o]})
C.a.S(y.a,x)}y=this.c
if(y!=null){y=y.gv()
y.toString
x=H.d(this.gcw(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}w=new D.L("shape",z,this.c,this,[F.e8])
w.b=!0
this.a1(w)}},
scG:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gv()
z.toString
y=H.d(this.gcz(),{func:1,ret:-1,args:[D.o]})
C.a.S(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gv()
z.toString
y=H.d(this.gcz(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}this.bP()
w=new D.L("technique",x,this.f,this,[O.cO])
w.b=!0
this.a1(w)}},
saH:function(a){var z,y,x,w
if(!J.V(this.r,a)){z=this.r
if(z!=null){y=z.gv()
y.toString
x=H.d(this.gcv(),{func:1,ret:-1,args:[D.o]})
C.a.S(y.a,x)}if(a!=null){y=a.gv()
y.toString
x=H.d(this.gcv(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}this.r=a
w=new D.L("mover",z,a,this,[U.a5])
w.b=!0
this.a1(w)}},
at:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.au(0,b,this):null
if(!J.V(y,this.x)){x=this.x
this.x=y
w=new D.L("matrix",x,y,this,[V.c_])
w.b=!0
this.a1(w)}for(z=this.y.a,z=new J.al(z,z.length,0,[H.t(z,0)]);z.E();)z.d.at(0,b)},
ar:function(a){var z,y,x,w,v,u,t
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaG(z))
else C.a.h(z.a,y.t(0,z.gaG(z)))
z.ah()
a.cD(this.f)
z=a.dy
x=(z&&C.a).gag(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.k(0,"Bumpy Debugging Shader")
if(w==null){z=a.a
w=new T.fG(z,"Bumpy Debugging Shader")
w.cY(z,"Bumpy Debugging Shader")
y=$.fI
v=$.fH
w.c=w.bV(y,35633)
w.d=w.bV(v,35632)
v=z.createProgram()
w.e=v
z.attachShader(v,w.c)
z.attachShader(w.e,w.d)
z.linkProgram(w.e)
if(!H.ff(z.getProgramParameter(w.e,35714))){u=z.getProgramInfoLog(w.e)
z.deleteProgram(w.e)
H.O(P.a8("Failed to link shader: "+H.j(u)))}w.dV()
w.dW()
w.x=w.f.k(0,"posAttr")
w.y=w.f.k(0,"normAttr")
w.z=w.f.k(0,"binmAttr")
w.Q=w.f.k(0,"txtAttr")
w.ch=w.f.k(0,"weightAttr")
w.cx=H.aa(w.r.k(0,"bumpTxt"),"$isev")
w.cy=H.aa(w.r.k(0,"objMat"),"$isc7")
w.db=H.aa(w.r.k(0,"viewMat"),"$isc7")
w.dx=H.aa(w.r.k(0,"projMat"),"$isc7")
w.dy=H.aa(w.r.k(0,"offsetScalar"),"$iseu")
if(a.fr.bn(0,"Bumpy Debugging Shader"))H.O(P.a8('Shader cache already contains a shader by the name "Bumpy Debugging Shader".'))
a.fr.l(0,"Bumpy Debugging Shader",w)}x.a=w
z=w}if(this.e==null){z=this.c
y=a.a
v=$.$get$aB()
t=$.$get$aA()
t=z.e5(new Z.js(y),new Z.cV(v.a|t.a|$.$get$az().a|$.$get$aC().a|$.$get$aD().a))
t.aF($.$get$aB()).e=x.a.x.c
t.aF($.$get$aA()).e=x.a.y.c
t.aF($.$get$az()).e=x.a.z.c
t.aF($.$get$aC()).e=x.a.Q.c
v=t.aF($.$get$aD())
y=x.a
v.e=y.ch.c
this.e=t
z=y}y=x.b
if(y!=null){y.a=0
a.a.useProgram(z.e)
z.f.ef()
y=x.b
if(y!=null){v=z.cx
v.toString
t=y.d
if(!t)v.a.uniform1i(v.d,0)
else{y=y.a
v.a.uniform1i(v.d,y)}}y=a.cy
y=y.gaG(y)
v=z.dx
v.toString
v.aZ(y.bC(0,!0))
y=a.db
y=y.gaG(y)
v=z.db
v.toString
v.aZ(y.bC(0,!0))
y=a.dx
y=y.gaG(y)
v=z.cy
v.toString
v.aZ(y.bC(0,!0))
y=x.c
z=z.dy
z.a.uniform1f(z.d,y)
y=x.b
if(!y.c&&y.d){y.c=!0
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,y.b)}z=this.e
if(z instanceof Z.dn){z.bg(a)
z.ar(a)
z.eZ(a)}else this.e=null
z=x.a
z.toString
a.a.useProgram(null)
z.f.ec()
z=x.b
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}}for(z=this.y.a,z=new J.al(z,z.length,0,[H.t(z,0)]);z.E();)z.d.ar(a)
a.cB()
a.dx.bx()},
gv:function(){var z=this.z
if(z==null){z=D.H()
this.z=z}return z},
a1:function(a){var z=this.z
if(!(z==null))z.B(a)},
X:function(){return this.a1(null)},
eA:[function(a){H.c(a,"$iso")
this.e=null
this.a1(a)},function(){return this.eA(null)},"fA","$1","$0","gcw",0,2,2],
eB:[function(a){this.a1(H.c(a,"$iso"))},function(){return this.eB(null)},"fB","$1","$0","gcz",0,2,2],
ez:[function(a){this.a1(H.c(a,"$iso"))},function(){return this.ez(null)},"fz","$1","$0","gcv",0,2,2],
ex:[function(a){this.a1(H.c(a,"$iso"))},function(){return this.ex(null)},"fv","$1","$0","gcu",0,2,2],
fu:[function(a,b){var z,y,x,w,v,u,t
H.z(b,"$isk",[E.aw],"$ask")
for(z=b.length,y=this.gcu(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.J)(b),++v){u=b[v]
if(u!=null){if(u.gW()==null){t=new D.bG()
t.a=H.i([],w)
t.c=0
u.sW(t)}t=u.gW()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.X()},"$2","gew",8,0,8],
fw:[function(a,b){var z,y,x,w,v,u,t
H.z(b,"$isk",[E.aw],"$ask")
for(z=b.length,y=this.gcu(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.J)(b),++v){u=b[v]
if(u!=null){if(u.gW()==null){t=new D.bG()
t.a=H.i([],w)
t.c=0
u.sW(t)}t=u.gW()
t.toString
H.d(y,x)
C.a.S(t.a,y)}}this.X()},"$2","gey",8,0,8],
$isdW:1,
n:{
dE:function(a,b,c,d,e,f){var z,y
z=new E.aw()
z.a=d
z.b=!0
y=O.du(E.aw)
z.y=y
y.aY(z.gew(),z.gey())
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
z.sbH(0,e)
z.scG(f)
z.saH(c)
return z}}},ia:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
cX:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ac(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cG()
y=[V.c_]
z.a=H.i([],y)
x=z.gv()
x.toString
w={func:1,ret:-1,args:[D.o]}
v=H.d(new E.ic(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cG()
z.a=H.i([],y)
v=z.gv()
v.toString
x=H.d(new E.id(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cG()
z.a=H.i([],y)
y=z.gv()
y.toString
w=H.d(new E.ie(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.i([],[O.cO])
this.dy=z
C.a.h(z,null)
this.fr=new H.bY(0,0,[P.f,A.e7])},
gav:function(){return this.a},
cD:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gag(z):a;(z&&C.a).h(z,y)},
cB:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
ib:function(a,b){var z=new E.ia(a,b)
z.cX(a,b)
return z}}},ic:{"^":"l:11;a",
$1:function(a){var z
H.c(a,"$iso")
z=this.a
z.z=null
z.ch=null}},id:{"^":"l:11;a",
$1:function(a){var z
H.c(a,"$iso")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ie:{"^":"l:11;a",
$1:function(a){var z
H.c(a,"$iso")
z=this.a
z.ch=null
z.cx=null}},iD:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0W:x@,0y,0z,0Q,0ch",
gv:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
d1:[function(a){var z
H.c(a,"$iso")
z=this.x
if(!(z==null))z.B(a)
this.eO()},function(){return this.d1(null)},"d0","$1","$0","gbK",0,2,2],
gek:function(){var z,y,x
z=Date.now()
y=C.c.aB(P.dD(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ac(z,!1)
return x/y},
c2:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.t()
if(typeof z!=="number")return H.p(z)
x=C.e.br(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.t()
w=C.e.br(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
eO:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.iF(this),{func:1,ret:-1,args:[P.R]})
C.w.dg(z)
C.w.dR(z,W.fb(y,P.R))}},
eM:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.c2()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ac(w,!1)
x.y=P.dD(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sj(w.a,0)
w.ah()
w=x.db
C.a.sj(w.a,0)
w.ah()
w=x.dx
C.a.sj(w.a,0)
w.ah()
w=x.dy;(w&&C.a).sj(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ar(this.e)}}catch(v){z=H.ag(v)
y=H.ba(v)
P.dd("Error: "+H.j(z))
P.dd("Stack: "+H.j(y))
throw H.a(z)}},
n:{
iE:function(a,b,c,d,e){var z,y,x,w
z=J.C(a)
if(!!z.$iscs)return E.eg(a,!0,!0,!0,!1)
y=W.ct(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbm(a).h(0,y)
w=E.eg(y,!0,!0,!0,!1)
w.a=a
return w},
eg:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iD()
y=P.hv(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
x=C.f.aW(a,"webgl",y)
x=H.c(x==null?C.f.aW(a,"experimental-webgl",y):x,"$iscL")
if(x==null)H.O(P.a8("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ib(x,a)
w=new T.iB(x)
w.b=H.y(x.getParameter(3379))
w.c=H.y(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.j8(a)
v=new X.hq()
v.c=new X.an(!1,!1,!1)
v.d=P.hy(null,null,null,P.m)
w.b=v
v=new X.hL(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hC(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iH(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.i([],[[P.ea,P.b]])
w.z=v
u=document
t=W.a4
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.U(u,"contextmenu",H.d(w.gdw(),s),!1,t))
v=w.z
r=W.a1
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.U(a,"focus",H.d(w.gdB(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.U(a,"blur",H.d(w.gdt(),q),!1,r))
v=w.z
p=W.bj
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.U(u,"keyup",H.d(w.gdD(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.U(u,"keydown",H.d(w.gdC(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.U(a,"mousedown",H.d(w.gdF(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mouseup",H.d(w.gdH(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mousemove",H.d(w.gdG(),s),!1,t))
p=w.z
o=W.bt;(p&&C.a).h(p,W.U(a,H.F(W.h6(a)),H.d(w.gdI(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.U(u,"mousemove",H.d(w.gdz(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.U(u,"mouseup",H.d(w.gdA(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.U(u,"pointerlockchange",H.d(w.gdJ(),q),!1,r))
r=w.z
q=W.b2
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.U(a,"touchstart",H.d(w.gdO(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchend",H.d(w.gdM(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchmove",H.d(w.gdN(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ac(Date.now(),!1)
z.ch=0
z.c2()
return z}}},iF:{"^":"l:31;a",
$1:function(a){var z
H.m2(a)
z=this.a
if(z.z){z.z=!1
z.eM()}}}}],["","",,Z,{"^":"",eE:{"^":"b;a,b",n:{
eF:function(a,b,c){var z
H.z(c,"$ise",[P.m],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cc(c)),35044)
a.bindBuffer(b,null)
return new Z.eE(b,z)}}},dm:{"^":"co;a,b,c,d,e",
bg:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ag(y)
x=P.a8('Failed to bind buffer attribute "'+J.a3(this.a)+'": '+H.j(z))
throw H.a(x)}},
i:function(a){return"["+J.a3(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},js:{"^":"b;a",$ismo:1},dn:{"^":"b;a,0b,c,d",
aF:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bg:function(a){var z,y
z=this.a
a.gav().bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bg(a)},
eZ:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.gav().bindBuffer(this.a.a,null)},
ar:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.c
v=x.a
a.gav().bindBuffer(v,x.b)
a.gav().drawElements(w.a,w.b,5123,0)
a.gav().bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.f]
y=H.i([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.J)(x),++v)C.a.h(y,x[v].i(0))
u=H.i([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a3(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.U(y,", ")+"\nAttrs:   "+C.a.U(u,", ")},
$isnQ:1},cy:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aU(this.c)+"'")+"]"}},cV:{"^":"b;a",
gbI:function(a){var z,y
z=this.a
y=(z&$.$get$aB().a)!==0?3:0
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$az().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=2
if((z&$.$get$b4().a)!==0)y+=3
if((z&$.$get$br().a)!==0)y+=3
if((z&$.$get$bs().a)!==0)y+=4
if((z&$.$get$aD().a)!==0)++y
return(z&$.$get$b3().a)!==0?y+4:y},
e3:function(a){var z,y,x
z=$.$get$aB()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b4()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$br()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bs()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b3()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eD()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cV))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.i([],[P.f])
y=this.a
if((y&$.$get$aB().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$az().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b4().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$br().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bs().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$b3().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.U(z,"|")},
n:{
ad:function(a){return new Z.cV(a)}}}}],["","",,D,{"^":"",ds:{"^":"b;"},bG:{"^":"b;0a,0b,0c",
B:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.o(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.D(y,new D.ha(z))
return x!==0},
ee:function(){return this.B(null)},
eP:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.B(y)}}},
aK:function(a){return this.eP(a,!0,!1)},
n:{
H:function(){var z=new D.bG()
z.a=H.i([],[{func:1,ret:-1,args:[D.o]}])
z.c=0
return z}}},ha:{"^":"l:48;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.o]})
z=this.a.a
z.b
a.$1(z)}},o:{"^":"b;a,0b"},dK:{"^":"o;c,d,a,0b,$ti"},dL:{"^":"o;c,d,a,0b,$ti"},L:{"^":"o;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dp:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
n:{"^":"mq<"}},dQ:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dR:{"^":"o;c,a,0b"},hq:{"^":"b;0a,0b,0c,0d",
eH:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dR(a,this)
y.b=!0
return z.B(y)},
eD:function(a){var z,y
this.c=a.b
this.d.S(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dR(a,this)
y.b=!0
return z.B(y)}},dV:{"^":"c2;x,y,c,d,e,a,0b"},hC:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ac:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ac(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.t()
v=b.b
u=this.ch
if(typeof v!=="number")return v.t()
t=new V.T(y.a+x*w,y.b+v*u)
u=this.a.gap()
s=new X.bl(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bw:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.B(this.ac(a,b))
return!0},
aJ:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.cR()
if(typeof z!=="number")return z.aV()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.ac(a,b))
return!0},
aI:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.ac(a,b))
return!0},
eI:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gap()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.t()
t=a.b
s=this.cy
if(typeof t!=="number")return t.t()
w=new X.cH(new V.Q(v*u,t*s),y,x,new P.ac(w,!1),this)
w.b=!0
z.B(w)
return!0},
dE:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ac(Date.now(),!1)
y=this.f
x=new X.dV(c,a,this.a.gap(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=new V.T(0,0)}},an:{"^":"b;a,b,c",
u:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bl:{"^":"c2;x,y,z,Q,ch,c,d,e,a,0b"},hL:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
b5:function(a,b,c){var z,y,x
z=new P.ac(Date.now(),!1)
y=this.a.gap()
x=new X.bl(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bw:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.b5(a,b,!0))
return!0},
aJ:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.cR()
if(typeof z!=="number")return z.aV()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.b5(a,b,!0))
return!0},
aI:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.b5(a,b,!1))
return!0},
eJ:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gap()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.t()
u=a.b
t=this.ch
if(typeof u!=="number")return u.t()
x=new X.cH(new V.Q(w*v,u*t),y,b,new P.ac(x,!1),this)
x.b=!0
z.B(x)
return!0},
gcf:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
gcJ:function(){var z=this.c
if(z==null){z=D.H()
this.c=z}return z},
gct:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z}},cH:{"^":"c2;x,c,d,e,a,0b"},c2:{"^":"o;"},ei:{"^":"c2;x,y,z,Q,ch,c,d,e,a,0b"},iH:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ac:function(a,b){var z,y,x,w
H.z(a,"$ise",[V.T],"$ase")
z=new P.ac(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gap()
w=new X.ei(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
eG:function(a){var z
H.z(a,"$ise",[V.T],"$ase")
z=this.b
if(z==null)return!1
z.B(this.ac(a,!0))
return!0},
eE:function(a){var z
H.z(a,"$ise",[V.T],"$ase")
z=this.c
if(z==null)return!1
z.B(this.ac(a,!0))
return!0},
eF:function(a){var z
H.z(a,"$ise",[V.T],"$ase")
z=this.d
if(z==null)return!1
z.B(this.ac(a,!1))
return!0}},j8:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gap:function(){var z=this.a
return V.e6(0,0,(z&&C.f).gaR(z).c,C.f.gaR(z).d)},
bU:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dQ(z,new X.an(y,a.altKey,a.shiftKey))},
am:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.an(y,a.altKey,a.shiftKey)},
be:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.an(y,a.altKey,a.shiftKey)},
ad:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.T(y-w,x-v)},
aA:function(a){return new V.Q(a.movementX,a.movementY)},
bb:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.i([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.J)(x),++v){u=x[v]
t=C.e.a7(u.pageX)
C.e.a7(u.pageY)
s=z.left
C.e.a7(u.pageX)
C.a.h(y,new V.T(t-s,C.e.a7(u.pageY)-z.top))}return y},
ab:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dp(z,new X.an(y,a.altKey,a.shiftKey))},
fc:[function(a){this.f=!0},"$1","gdB",4,0,4],
f6:[function(a){this.f=!1},"$1","gdt",4,0,4],
f9:[function(a){if(this.f)a.preventDefault()},"$1","gdw",4,0,4],
fe:[function(a){var z
H.c(a,"$isbj")
if(!this.f)return
z=this.bU(a)
if(this.b.eH(z))a.preventDefault()},"$1","gdD",4,0,19],
fd:[function(a){var z
H.c(a,"$isbj")
if(!this.f)return
z=this.bU(a)
if(this.b.eD(z))a.preventDefault()},"$1","gdC",4,0,19],
ff:[function(a){var z,y,x,w
H.c(a,"$isa4")
z=this.a
z.focus()
this.f=!0
this.am(a)
if(this.x){y=this.ab(a)
x=this.aA(a)
if(this.d.bw(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ab(a)
w=this.ad(a)
if(this.c.bw(y,w))a.preventDefault()},"$1","gdF",4,0,5],
fh:[function(a){var z,y,x
H.c(a,"$isa4")
this.am(a)
z=this.ab(a)
if(this.x){y=this.aA(a)
if(this.d.aJ(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aJ(z,x))a.preventDefault()},"$1","gdH",4,0,5],
fb:[function(a){var z,y,x,w
H.c(a,"$isa4")
z=this.a
if(!(z&&C.f).gaR(z).cd(0,new P.bJ(a.clientX,a.clientY,[P.R]))){this.am(a)
y=this.ab(a)
if(this.x){x=this.aA(a)
if(this.d.aJ(y,x))a.preventDefault()
return}if(this.r)return
w=this.ad(a)
if(this.c.aJ(y,w))a.preventDefault()}},"$1","gdA",4,0,5],
fg:[function(a){var z,y,x
H.c(a,"$isa4")
this.am(a)
z=this.ab(a)
if(this.x){y=this.aA(a)
if(this.d.aI(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aI(z,x))a.preventDefault()},"$1","gdG",4,0,5],
fa:[function(a){var z,y,x,w
H.c(a,"$isa4")
z=this.a
if(!(z&&C.f).gaR(z).cd(0,new P.bJ(a.clientX,a.clientY,[P.R]))){this.am(a)
y=this.ab(a)
if(this.x){x=this.aA(a)
if(this.d.aI(y,x))a.preventDefault()
return}if(this.r)return
w=this.ad(a)
if(this.c.aI(y,w))a.preventDefault()}},"$1","gdz",4,0,5],
fi:[function(a){var z,y
H.c(a,"$isbt")
this.am(a)
z=new V.Q((a&&C.v).gea(a),C.v.geb(a)).A(0,180)
if(this.x){if(this.d.eI(z))a.preventDefault()
return}if(this.r)return
y=this.ad(a)
if(this.c.eJ(z,y))a.preventDefault()},"$1","gdI",4,0,35],
fj:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ab(this.y)
v=this.ad(this.y)
this.d.dE(w,v,x)}},"$1","gdJ",4,0,4],
fn:[function(a){var z
H.c(a,"$isb2")
this.a.focus()
this.f=!0
this.be(a)
z=this.bb(a)
if(this.e.eG(z))a.preventDefault()},"$1","gdO",4,0,12],
fl:[function(a){var z
H.c(a,"$isb2")
this.be(a)
z=this.bb(a)
if(this.e.eE(z))a.preventDefault()},"$1","gdM",4,0,12],
fm:[function(a){var z
H.c(a,"$isb2")
this.be(a)
z=this.bb(a)
if(this.e.eF(z))a.preventDefault()},"$1","gdN",4,0,12]}}],["","",,V,{"^":"",
ms:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hI",8,0,32],
mf:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.aN(a-b,z)
return(a<0?a+z:a)+b},
N:function(a,b,c){if(a==null)return C.b.a6("null",c)
return C.b.a6(C.e.cI($.q.$2(a,0)?0:a,b),c+b+1)},
cg:function(a,b,c){var z,y,x,w,v
H.z(a,"$ise",[P.v],"$ase")
z=H.i([],[P.f])
for(y=0,x=0;x<4;++x){w=V.N(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.h(z,v)
C.a.l(z,v,C.b.a6(z[v],y))}return z},
dc:function(a,b){return C.e.eW(Math.pow(b,C.D.br(Math.log(H.lu(a))/Math.log(b))))},
bR:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bR))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
c_:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
bC:function(a,b){var z=H.i([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
t:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
x=this.b
w=a7.e
v=this.c
u=a7.y
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
r=a7.b
q=a7.f
p=a7.z
if(typeof p!=="number")return H.p(p)
o=a7.cy
n=a7.c
m=a7.r
l=a7.Q
if(typeof l!=="number")return H.p(l)
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
if(typeof b!=="number")return b.t()
a=this.z
if(typeof a!=="number")return a.t()
a0=this.Q
if(typeof a0!=="number")return a0.t()
a1=this.ch
a2=this.cx
a3=this.cy
a4=this.db
a5=this.dx
return V.ax(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c_))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
z=b.z
if(!$.q.$2(z,this.z))return!1
z=b.Q
if(!$.q.$2(z,this.Q))return!1
z=b.ch
if(!$.q.$2(z,this.ch))return!1
z=b.cx
if(!$.q.$2(z,this.cx))return!1
z=b.cy
if(!$.q.$2(z,this.cy))return!1
z=b.db
if(!$.q.$2(z,this.db))return!1
z=b.dx
if(!$.q.$2(z,this.dx))return!1
return!0},
i:function(a){return this.L()},
ci:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.cg(H.i([this.a,this.e,this.y,this.cx],z),b,c)
x=V.cg(H.i([this.b,this.f,this.z,this.cy],z),b,c)
w=V.cg(H.i([this.c,this.r,this.Q,this.db],z),b,c)
v=V.cg(H.i([this.d,this.x,this.ch,this.dx],z),b,c)
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
w:function(a){return this.ci(a,3,0)},
L:function(){return this.ci("",3,0)},
n:{
ax:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.c_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c0:function(){return V.ax(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
T:{"^":"b;m:a>,q:b>",
I:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
c1:{"^":"b;m:a>,q:b>,c",
I:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.I()
if(typeof w!=="number")return H.p(w)
return new V.c1(this.a-z,this.b-y,x-w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c1))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
e2:{"^":"b;m:a>,q:b>,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e2))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
e5:{"^":"b;m:a>,q:b>,c,d",
ga_:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e5))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"},
n:{
e6:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e5(a,b,c,d)}}},
Q:{"^":"b;a,b",
eo:[function(a){return Math.sqrt(this.H(this))},"$0","gj",1,0,20],
H:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.t()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
t:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.Q(z*b,y*b)},
A:function(a,b){var z,y
if($.q.$2(b,0))return new V.Q(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.Q(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
X:{"^":"b;a,b,c",
eo:[function(a){return Math.sqrt(this.H(this))},"$0","gj",1,0,20],
H:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.t()
if(typeof y!=="number")return H.p(y)
return this.a*a.a+this.b*a.b+z*y},
aE:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.p(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.t()
v=a.a
u=this.a
return new V.X(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){var z,y
z=this.c
y=b.c
if(typeof z!=="number")return z.G()
if(typeof y!=="number")return H.p(y)
return new V.X(this.a+b.a,this.b+b.b,z+y)},
K:function(a){var z=this.c
if(typeof z!=="number")return z.K()
return new V.X(-this.a,-this.b,-z)},
A:function(a,b){var z
if($.q.$2(b,0))return new V.X(0,0,0)
z=this.c
if(typeof z!=="number")return z.A()
return new V.X(this.a/b,this.b/b,z/b)},
cs:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fR:{"^":"ds;0a,0b,0c,0d,0e,0f,0r,0x,0y",
b0:function(a){var z=V.mf(a,this.c,this.b)
return z},
gv:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z},
N:function(a){var z=this.y
if(!(z==null))z.B(a)},
sbE:function(a,b){},
sbt:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.b0(z)}z=new D.L("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.N(z)}},
sbv:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.b0(z)}z=new D.L("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.N(z)}},
sZ:function(a,b){var z,y
b=this.b0(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.L("location",y,b,this,[P.v])
z.b=!0
this.N(z)}},
sbu:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.L("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.N(z)}},
sP:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.L("velocity",x,a,this,[P.v])
z.b=!0
this.N(z)}},
sbq:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.L("dampening",y,a,this,[P.v])
z.b=!0
this.N(z)}},
at:function(a,b){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sZ(0,this.d+y*b)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sP(y)}},
n:{
cu:function(){var z=new U.fR()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dv:{"^":"a5;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
au:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dv))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}},dH:{"^":"aO;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
N:[function(a){var z
H.c(a,"$iso")
z=this.e
if(!(z==null))z.B(a)},function(){return this.N(null)},"a5","$1","$0","gal",0,2,2],
f5:[function(a,b){var z,y,x,w,v,u,t
z=U.a5
H.z(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gal(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.J)(b),++v){u=b[v]
if(u!=null){t=u.gv()
t.toString
H.d(x,w)
C.a.h(t.a,x)}}z=new D.dK(a,b,this,[z])
z.b=!0
this.N(z)},"$2","gds",8,0,21],
fk:[function(a,b){var z,y,x,w,v,u,t
z=U.a5
H.z(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gal(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.J)(b),++v){u=b[v]
if(u!=null){t=u.gv()
t.toString
H.d(x,w)
C.a.S(t.a,x)}}z=new D.dL(a,b,this,[z])
z.b=!0
this.N(z)},"$2","gdL",8,0,21],
au:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.J()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.al(z,z.length,0,[H.t(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.au(0,b,c)
if(w!=null)x=x==null?w:w.t(0,x)}}this.f=x==null?V.c0():x
z=this.e
if(!(z==null))z.aK(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dH))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.V(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.a5]},
$asaO:function(){return[U.a5]},
$isa5:1},a5:{"^":"ds;"},j9:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.cy
if(z==null){z=D.H()
this.cy=z}return z},
N:[function(a){var z
H.c(a,"$iso")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.N(null)},"a5","$1","$0","gal",0,2,2],
aC:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcf()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.d(this.gb6(),y)
C.a.h(z.a,x)
x=this.a.c.gct()
x.toString
z=H.d(this.gb7(),y)
C.a.h(x.a,z)
z=this.a.c.gcJ()
z.toString
y=H.d(this.gb8(),y)
C.a.h(z.a,y)
return!0},
dm:[function(a){H.c(a,"$iso")
if(!J.V(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gb6",4,0,1],
dn:[function(a){var z,y,x,w,v,u,t
a=H.aa(H.c(a,"$iso"),"$isbl")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.Q(z.a,z.b)
z=z.H(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.Q(y.a,y.b).t(0,2).A(0,z.ga_())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.t()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sP(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.Q(x.a,x.b).t(0,2).A(0,z.ga_())
x=this.b
v=w.a
if(typeof v!=="number")return v.K()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
this.b.sP(0)
y=y.I(0,a.z)
this.Q=new V.Q(y.a,y.b).t(0,2).A(0,z.ga_())}this.a5()},"$1","gb7",4,0,1],
dq:[function(a){var z,y,x
H.c(a,"$iso")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.H(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.t()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sP(y*10*x)
this.a5()}},"$1","gb8",4,0,1],
au:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.J()
if(z<y){this.ch=y
x=b.y
this.b.at(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ax(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa5:1},ja:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gv:function(){var z=this.fx
if(z==null){z=D.H()
this.fx=z}return z},
N:[function(a){var z
H.c(a,"$iso")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.N(null)},"a5","$1","$0","gal",0,2,2],
aC:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcf()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.d(this.gb6(),y)
C.a.h(z.a,x)
x=this.a.c.gct()
x.toString
z=H.d(this.gb7(),y)
C.a.h(x.a,z)
z=this.a.c.gcJ()
z.toString
x=H.d(this.gb8(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.H()
x.f=z}x=H.d(this.gdj(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.d(this.gdk(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.H()
x.b=z}x=H.d(this.ge0(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.d(this.ge_(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.H()
x.c=z}y=H.d(this.gdZ(),y)
C.a.h(z.a,y)
return!0},
a8:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.Q(z,y)},
dm:[function(a){a=H.aa(H.c(a,"$iso"),"$isbl")
if(!J.V(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gb6",4,0,1],
dn:[function(a){var z,y,x,w,v,u,t
a=H.aa(H.c(a,"$iso"),"$isbl")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.Q(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.a8(new V.Q(y.a,y.b).t(0,2).A(0,z.ga_()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sP(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sP(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.a8(new V.Q(x.a,x.b).t(0,2).A(0,z.ga_()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.I(0,a.z)
this.dx=this.a8(new V.Q(y.a,y.b).t(0,2).A(0,z.ga_()))}this.a5()},"$1","gb7",4,0,1],
dq:[function(a){var z,y,x
H.c(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.H(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sP(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sP(-y*10*z)
this.a5()}},"$1","gb8",4,0,1],
f2:[function(a){if(H.aa(H.c(a,"$iso"),"$isdV").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gdj",4,0,1],
f3:[function(a){var z,y,x,w,v,u,t
a=H.aa(H.c(a,"$iso"),"$isbl")
if(!J.V(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.a8(new V.Q(x.a,x.b).t(0,2).A(0,z.ga_()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.I(0,a.z)
this.dx=this.a8(new V.Q(y.a,y.b).t(0,2).A(0,z.ga_()))
this.a5()},"$1","gdk",4,0,1],
fs:[function(a){H.c(a,"$iso")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ge0",4,0,1],
fq:[function(a){var z,y,x,w,v,u,t
a=H.aa(H.c(a,"$iso"),"$isei")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.Q(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.a8(new V.Q(y.a,y.b).t(0,2).A(0,z.ga_()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sP(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sP(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.a8(new V.Q(x.a,x.b).t(0,2).A(0,z.ga_()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.I(0,a.z)
this.dx=this.a8(new V.Q(y.a,y.b).t(0,2).A(0,z.ga_()))}this.a5()},"$1","ge_",4,0,1],
fp:[function(a){var z,y,x
H.c(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.H(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sP(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sP(-y*10*z)
this.a5()}},"$1","gdZ",4,0,1],
au:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.J()
if(z<y){this.dy=y
x=b.y
this.c.at(0,x)
this.b.at(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ax(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.t(0,V.ax(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa5:1},jb:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gv:function(){var z=this.r
if(z==null){z=D.H()
this.r=z}return z},
N:function(a){var z=this.r
if(!(z==null))z.B(a)},
aC:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.H()
z.e=y
z=y}else z=y
y=H.d(this.gdr(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.H()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
f4:[function(a){var z,y,x,w
H.c(a,"$iso")
if(!J.V(this.b,this.a.b.c))return
H.aa(a,"$iscH")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.t()
w=z+y*x
if(z!==w){this.d=w
z=new D.L("zoom",z,w,this,[P.v])
z.b=!0
this.N(z)}},"$1","gdr",4,0,1],
au:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ax(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa5:1}}],["","",,M,{"^":"",h8:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
ax:[function(a){var z
H.c(a,"$iso")
z=this.x
if(!(z==null))z.B(a)},function(){return this.ax(null)},"f_","$1","$0","gai",0,2,2],
f7:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aw
H.z(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.J)(b),++u){t=b[u]
if(t!=null){if(t.gW()==null){s=new D.bG()
s.a=H.i([],v)
s.c=0
t.sW(s)}s=t.gW()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.dK(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","gdu",8,0,8],
f8:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aw
H.z(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.J)(b),++u){t=b[u]
if(t!=null){if(t.gW()==null){s=new D.bG()
s.a=H.i([],v)
s.c=0
t.sW(s)}s=t.gW()
s.toString
H.d(x,w)
C.a.S(s.a,x)}}z=new D.dL(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","gdv",8,0,8],
gv:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
ar:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.cD(this.c)
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
u=C.c.a7(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.c.a7(v.b*w)
s=C.c.a7(v.c*x)
a.c=s
v=C.c.a7(v.d*w)
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
s.cC(V.ax(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.e0
if(y==null){y=new V.X(0,0,-1)
m=y.A(0,Math.sqrt(y.H(y)))
y=new V.X(0,1,0).aE(m)
l=y.A(0,Math.sqrt(y.H(y)))
k=m.aE(l)
j=new V.X(0,0,0)
y=V.ax(l.a,k.a,m.a,l.K(0).H(j),l.b,k.b,m.b,k.K(0).H(j),l.c,k.c,m.c,m.K(0).H(j),0,0,0,1)
$.e0=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.t(0,i)}a.db.cC(i)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.t(z,0)]);z.E();)z.d.at(0,a)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.t(z,0)]);z.E();)z.d.ar(a)
this.a.toString
a.cy.bx()
a.db.bx()
this.b.toString
a.cB()},
$isnC:1}}],["","",,A,{"^":"",dh:{"^":"b;a,b,c"},fA:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
ef:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.J)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ec:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.J)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},e7:{"^":"co;",
cY:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
bV:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.ff(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.a8("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
dV:function(){var z,y,x,w,v,u
z=H.i([],[A.dh])
y=this.a
x=H.y(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dh(y,v.name,u))}this.f=new A.fA(z)},
dW:function(){var z,y,x,w,v,u
z=H.i([],[A.a2])
y=this.a
x=H.y(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.e9(v.type,v.size,v.name,u))}this.r=new A.iT(z)},
ak:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.iL(z,y,b,c)
else return A.cQ(z,y,b,a,c)},
dd:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ev(z,y,b,c)
else return A.cQ(z,y,b,a,c)},
de:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.iX(z,y,b,c)
else return A.cQ(z,y,b,a,c)},
aQ:function(a,b){return new P.eI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
e9:function(a,b,c,d){switch(a){case 5120:return this.ak(b,c,d)
case 5121:return this.ak(b,c,d)
case 5122:return this.ak(b,c,d)
case 5123:return this.ak(b,c,d)
case 5124:return this.ak(b,c,d)
case 5125:return this.ak(b,c,d)
case 5126:return new A.eu(this.a,this.e,c,d)
case 35664:return new A.iN(this.a,this.e,c,d)
case 35665:return new A.iP(this.a,this.e,c,d)
case 35666:return new A.iR(this.a,this.e,c,d)
case 35667:return new A.iO(this.a,this.e,c,d)
case 35668:return new A.iQ(this.a,this.e,c,d)
case 35669:return new A.iS(this.a,this.e,c,d)
case 35674:return new A.iV(this.a,this.e,c,d)
case 35675:return new A.iW(this.a,this.e,c,d)
case 35676:return new A.c7(this.a,this.e,c,d)
case 35678:return this.dd(b,c,d)
case 35680:return this.de(b,c,d)
case 35670:throw H.a(this.aQ("BOOL",c))
case 35671:throw H.a(this.aQ("BOOL_VEC2",c))
case 35672:throw H.a(this.aQ("BOOL_VEC3",c))
case 35673:throw H.a(this.aQ("BOOL_VEC4",c))
default:throw H.a(P.a8("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},a2:{"^":"b;"},iT:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.L()},
ej:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.J)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.ej("\n")}},iL:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iO:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iQ:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iS:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iM:{"^":"a2;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
cQ:function(a,b,c,d,e){var z=new A.iM(a,b,c,e)
z.f=d
z.e=P.hA(d,0,!1,P.m)
return z}}},eu:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iN:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},iP:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},iR:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iV:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},iW:{"^":"a2;a,b,c,d",
i:function(a){return"UniformMat3: "+H.j(this.c)}},c7:{"^":"a2;a,b,c,d",
aZ:function(a){var z=new Float32Array(H.cc(H.z(a,"$ise",[P.v],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ev:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},iX:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
lF:function(a,b,c){var z={}
z.a=b
z.a=new F.lG()
return F.mc(c,a,new F.lH(z),null)},
mc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[F.bq,P.v,P.v]})
if(a<1)return
if(b<1)return
z=new F.e8()
y=new F.jk(z)
y.b=!1
x=[F.bq]
y.c=H.i([],x)
z.a=y
y=new F.io(z)
y.b=H.i([],[F.e1])
z.b=y
y=new F.im(z)
y.b=H.i([],[F.cE])
z.c=y
y=new F.il(z)
y.b=H.i([],[F.ai])
z.d=y
z.e=null
w=H.i([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cU(null,null,new V.bR(x,0,0,1),null,null,new V.T(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.bp(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cU(null,null,new V.bR(o,n,m,1),null,null,new V.T(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.bp(d))}}z.d.e2(a+1,b+1,w)
return z},
lG:{"^":"l:40;",
$2:function(a,b){return 0}},
lH:{"^":"l:41;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
x=new V.c1(z,y,this.a.a.$2(b,c))
if(!J.V(a.f,x)){a.f=x
x=a.a
if(x!=null)x.X()}x=new V.X(z,y,1)
x=x.A(0,Math.sqrt(x.H(x)))
if(!J.V(a.z,x)){a.z=x
x=a.a
if(x!=null)x.X()}x=1-b
w=1-c
w=new V.e2(b*c,2+x*c,4+b*w,6+x*w)
if(!J.V(a.cx,w)){a.cx=w
x=a.a
if(x!=null)x.X()}}},
ai:{"^":"b;0a,0b,0c,0d,0e",
ed:function(){if(!this.gaS()){C.a.S(this.a.a.d.b,this)
this.a.a.X()}var z=this.a
if(z!=null){C.a.S(z.d.b,this)
this.a=null}z=this.b
if(z!=null){C.a.S(z.d.c,this)
this.b=null}z=this.c
if(z!=null){C.a.S(z.d.d,this)
this.c=null}},
gaS:function(){return this.a==null||this.b==null||this.c==null},
d7:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.X(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.cs())return
return v.A(0,Math.sqrt(v.H(v)))},
d9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.X(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.H(z)))
z=w.I(0,y)
z=new V.X(z.a,z.b,z.c)
z=v.aE(z.A(0,Math.sqrt(z.H(z))))
return z.A(0,Math.sqrt(z.H(z)))},
bk:function(){if(this.d!=null)return!0
var z=this.d7()
if(z==null){z=this.d9()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
d6:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.X(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.cs())return
return v.A(0,Math.sqrt(v.H(v)))},
d8:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.I(0,u)
z=new V.X(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.H(z)))
if(o.a-p.a<0)m=m.K(0)}else{l=(z-q.b)/n
z=r.I(0,u)
y=z.c
if(typeof y!=="number")return y.t()
w=u.a
v=u.b
t=u.c
if(typeof t!=="number")return H.p(t)
t=new V.c1(z.a*l+w,z.b*l+v,y*l+t).I(0,x)
t=new V.X(t.a,t.b,t.c)
m=t.A(0,Math.sqrt(t.H(t)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.K(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.H(z)))
z=k.aE(m)
z=z.A(0,Math.sqrt(z.H(z))).aE(k)
m=z.A(0,Math.sqrt(z.H(z)))}return m},
bi:function(){if(this.e!=null)return!0
var z=this.d6()
if(z==null){z=this.d8()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var z,y
if(this.gaS())return a+"disposed"
z=a+C.b.a6(J.a3(this.a.e),0)+", "+C.b.a6(J.a3(this.b.e),0)+", "+C.b.a6(J.a3(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.w("")},
n:{
bU:function(a,b,c){var z,y,x
z=new F.ai()
y=a.a
if(y==null)H.O(P.a8("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.O(P.a8("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
cE:{"^":"b;0a,0b",
gaS:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){if(this.gaS())return a+"disposed"
return a+C.b.a6(J.a3(this.a.e),0)+", "+C.b.a6(J.a3(this.b.e),0)},
L:function(){return this.w("")}},
e1:{"^":"b;"},
e8:{"^":"b;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
e5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$aB().a)!==0?1:0
if((y&$.$get$aA().a)!==0)++x
if((y&$.$get$az().a)!==0)++x
if((y&$.$get$aC().a)!==0)++x
if((y&$.$get$b4().a)!==0)++x
if((y&$.$get$br().a)!==0)++x
if((y&$.$get$bs().a)!==0)++x
if((y&$.$get$aD().a)!==0)++x
if((y&$.$get$b3().a)!==0)++x
w=b.gbI(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.v
t=H.i(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.i(y,[Z.dm])
for(r=0,q=0;q<x;++q){p=b.e3(q)
o=p.gbI(p)
C.a.l(s,q,new Z.dm(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].ep(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.l(t,l,m[k]);++l}}r+=o}H.z(t,"$ise",[u],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cc(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dn(new Z.eE(34962,j),s,b)
i.b=H.i([],[Z.cy])
this.b.b
if(this.c.b.length!==0){u=P.m
h=H.i([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.ao()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.ao()
C.a.h(h,g.e)}f=Z.eF(y,34963,H.z(h,"$ise",[u],"$ase"))
C.a.h(i.b,new Z.cy(1,h.length,f))}if(this.d.b.length!==0){u=P.m
h=H.i([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.ao()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.ao()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.ao()
C.a.h(h,g.e)}f=Z.eF(y,34963,H.z(h,"$ise",[u],"$ase"))
C.a.h(i.b,new Z.cy(4,h.length,f))}return i},
i:function(a){var z=H.i([],[P.f])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.U(z,"\n")},
a1:function(a){var z=this.e
if(!(z==null))z.B(a)},
X:function(){return this.a1(null)}},
il:{"^":"b;a,0b",
e2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.z(c,"$ise",[F.bq],"$ase")
z=H.i([],[F.ai])
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
C.a.h(z,F.bU(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bU(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bU(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bU(q,n,r))}u=!u}w=!w}return z},
gj:function(a){return this.b.length},
eL:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y[z].ed()}C.a.sj(this.b,0)},
bl:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.J)(z),++w)if(!z[w].bk())x=!1
return x},
bj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.J)(z),++w)if(!z[w].bi())x=!1
return x},
i:function(a){return this.L()},
w:function(a){var z,y,x,w
z=H.i([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w)C.a.h(z,y[w].w(a))
return C.a.U(z,"\n")},
L:function(){return this.w("")}},
im:{"^":"b;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.L()},
w:function(a){var z,y,x,w
z=H.i([],[P.f])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].w(a+(""+x+". ")))}return C.a.U(z,"\n")},
L:function(){return this.w("")}},
io:{"^":"b;a,0b",
gj:function(a){return 0},
i:function(a){return this.L()},
w:function(a){var z,y,x
z=H.i([],[P.f])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].w(a))}return C.a.U(z,"\n")},
L:function(){return this.w("")}},
bq:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bp:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cU(this.cx,x,u,z,y,w,v,a,t)},
e7:function(){return this.bp(null)},
ep:function(a){var z,y
z=J.C(a)
if(z.u(a,$.$get$aB())){z=this.f
y=[P.v]
if(z==null)return H.i([0,0,0],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aA())){z=this.r
y=[P.v]
if(z==null)return H.i([0,1,0],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$az())){z=this.x
y=[P.v]
if(z==null)return H.i([0,0,1],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aC())){z=this.y
y=[P.v]
if(z==null)return H.i([0,0],y)
else return H.i([z.a,z.b],y)}else if(z.u(a,$.$get$b4())){z=this.z
y=[P.v]
if(z==null)return H.i([0,0,0],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$br())){z=this.Q
y=[P.v]
if(z==null)return H.i([1,1,1],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bs())){z=this.Q
y=[P.v]
if(z==null)return H.i([1,1,1,1],y)
else return H.i([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$aD()))return H.i([this.ch],[P.v])
else if(z.u(a,$.$get$b3())){z=this.cx
y=[P.v]
if(z==null)return H.i([-1,-1,-1,-1],y)
else return H.i([z.a,z.b,z.c,z.d],y)}else return H.i([],[P.v])},
bk:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.X(0,0,0)
this.d.D(0,new F.jr(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.aK(0)}return!0},
bi:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.X(0,0,0)
this.d.D(0,new F.jq(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.aK(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var z,y,x
z=H.i([],[P.f])
C.a.h(z,C.b.a6(J.a3(this.e),0))
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
C.a.h(z,V.N(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.U(z,", ")
return a+"{"+x+"}"},
L:function(){return this.w("")},
n:{
cU:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.bq()
y=new F.jp(z)
y.b=H.i([],[F.e1])
z.b=y
y=new F.jo(z)
x=[F.cE]
y.b=H.i([],x)
y.c=H.i([],x)
z.c=y
y=new F.jl(z)
x=[F.ai]
y.b=H.i([],x)
y.c=H.i([],x)
y.d=H.i([],x)
z.d=y
h=$.$get$eB()
z.e=0
y=$.$get$aB()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aA().a)!==0?e:null
z.x=(x&$.$get$az().a)!==0?b:null
z.y=(x&$.$get$aC().a)!==0?f:null
z.z=(x&$.$get$b4().a)!==0?g:null
z.Q=(x&$.$get$eC().a)!==0?c:null
z.ch=(x&$.$get$aD().a)!==0?i:0
z.cx=(x&$.$get$b3().a)!==0?a:null
return z}}},
jr:{"^":"l:9;a",
$1:function(a){var z,y
H.c(a,"$isai")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
jq:{"^":"l:9;a",
$1:function(a){var z,y
H.c(a,"$isai")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
jk:{"^":"b;a,0b,0c",
ao:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.a8("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.X()
return!0},
gj:function(a){return this.c.length},
bl:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.J)(z),++x)z[x].bk()
return!0},
bj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.J)(z),++x)z[x].bi()
return!0},
i:function(a){return this.L()},
w:function(a){var z,y,x,w
this.ao()
z=H.i([],[P.f])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w)C.a.h(z,y[w].w(a))
return C.a.U(z,"\n")},
L:function(){return this.w("")}},
jl:{"^":"b;a,0b,0c,0d",
gj:function(a){return this.b.length+this.c.length+this.d.length},
D:function(a,b){H.d(b,{func:1,ret:-1,args:[F.ai]})
C.a.D(this.b,b)
C.a.D(this.c,new F.jm(this,b))
C.a.D(this.d,new F.jn(this,b))},
i:function(a){return this.L()},
w:function(a){var z,y,x,w
z=H.i([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w)C.a.h(z,y[w].w(a))
return C.a.U(z,"\n")},
L:function(){return this.w("")}},
jm:{"^":"l:9;a,b",
$1:function(a){H.c(a,"$isai")
if(!J.V(a.a,this.a))this.b.$1(a)}},
jn:{"^":"l:9;a,b",
$1:function(a){var z
H.c(a,"$isai")
z=this.a
if(!J.V(a.a,z)&&!J.V(a.b,z))this.b.$1(a)}},
jo:{"^":"b;a,0b,0c",
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
w:function(a){var z,y,x,w
z=H.i([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w)C.a.h(z,y[w].w(a))
return C.a.U(z,"\n")},
L:function(){return this.w("")}},
jp:{"^":"b;a,0b",
gj:function(a){return 0},
i:function(a){return this.L()},
w:function(a){var z,y,x
z=H.i([],[P.f])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].w(a))}return C.a.U(z,"\n")},
L:function(){return this.w("")}}}],["","",,O,{"^":"",cO:{"^":"b;"}}],["","",,T,{"^":"",ix:{"^":"co;"},ef:{"^":"ix;0b,0c,0d,0e,0f,0r,0x,0y,a"},iB:{"^":"b;a,0b,0c,0d,0e",
es:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.dI(null,a,null)
w=new T.ef(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.H()
z=W.a1
W.U(x,"load",H.d(new T.iC(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
er:function(a){return this.es(a,!1,!1,!1,!1)},
dS:function(a,b,c){var z,y,x,w
b=V.dc(b,2)
z=V.dc(a.width,2)
y=V.dc(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.ct(null,null)
x.width=z
x.height=y
w=H.c(C.f.cO(x,"2d"),"$isdr")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.ly(w.getImageData(0,0,x.width,x.height))}}},iC:{"^":"l:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.dS(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.S.eT(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.ee()}++x.e}}}],["","",,X,{"^":"",dq:{"^":"b;",$isdW:1},hf:{"^":"ed;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z}},hR:{"^":"b;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
ay:[function(a){var z
H.c(a,"$iso")
z=this.e
if(!(z==null))z.B(a)},function(){return this.ay(null)},"f0","$1","$0","gbL",0,2,2],
saH:function(a){var z,y,x
if(!J.V(this.a,a)){z=this.a
if(z!=null){z=z.gv()
z.toString
y=H.d(this.gbL(),{func:1,ret:-1,args:[D.o]})
C.a.S(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gv()
z.toString
y=H.d(this.gbL(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.L("mover",x,this.a,this,[U.a5])
z.b=!0
this.ay(z)}},
$isdW:1,
$isdq:1},ed:{"^":"b;"}}],["","",,B,{"^":"",
m6:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.n.dU(x,(x&&C.n).bO(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.a1
W.U(z,"scroll",H.d(new B.m7(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
m8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.z(b,"$ise",[P.f],"$ase")
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
u=W.ct(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.c(v.insertCell(-1),"$isbo")
x=c.length>0
s=x?5:4
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.c(q.insertCell(-1),"$isbo").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;p<2;++p){o=z.createElement("div")
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.c(q.insertCell(-1),"$isbo")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.c(q.insertCell(-1),"$isbo")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.c(q.insertCell(-1),"$isbo").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.m6(a,y,!1,"../resources/SnowTop.png")},
m9:function(a){P.iG(C.B,new B.ma(a))},
i3:{"^":"b;a,0b",
c9:function(a,b,c,d){var z,y,x,w,v,u,t
H.d(c,{func:1,ret:-1})
if(this.b==null)return
z=this.a
if(P.cS().gaU().k(0,z)==null)if(d){c.$0()
this.cK(b)
y=!0}else y=!1
else if(P.cS().gaU().k(0,z)===b){c.$0()
y=!0}else y=!1
x=document
w=x.createElement("label")
v=w.style
v.whiteSpace="nowrap"
J.bB(this.b).h(0,w)
u=W.hi("radio")
u.checked=y
u.name=z
z=W.a1
W.U(u,"change",H.d(new B.i4(this,u,b,c),{func:1,ret:-1,args:[z]}),!1,z)
w.appendChild(u)
t=x.createElement("span")
t.textContent=b
w.appendChild(t)
J.bB(this.b).h(0,x.createElement("br"))},
Y:function(a,b,c){return this.c9(a,b,c,!1)},
cK:function(a){var z,y,x,w,v
z=P.cS()
y=P.f
x=P.hw(z.gaU(),y,y)
x.l(0,this.a,a)
w=z.cE(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.kv([],[]).bD(""),"",v)}},
i4:{"^":"l:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.a.cK(this.c)
this.d.$0()}}},
m7:{"^":"l:13;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.j(-0.05*C.e.a7(this.b.scrollTop))+"px"
z.top=y}},
ma:{"^":"l:44;a",
$1:function(a){H.c(a,"$isb0")
P.dd(C.e.cI(this.a.gek(),2)+" fps")}},
iy:{"^":"b;0a,b",
Y:function(a,b,c){var z,y
z=W.dI(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=W.a4
W.U(z,"click",H.d(new B.iA(this,z,b),{func:1,ret:-1,args:[y]}),!1,y)
J.bB(this.a).h(0,z)
J.bB(this.a).h(0,document.createElement("br"))
if(c)z.click()},
h:function(a,b){return this.Y(a,b,!1)}},
iA:{"^":"l:45;a,b,c",
$1:function(a){var z,y
H.c(a,"$isa4")
z=this.a
y=J.bB(z.a)
y.D(y,new B.iz())
y=this.b.style
y.border="solid 2px black"
z.b.$1(this.c)}},
iz:{"^":"l:46;",
$1:function(a){var z
H.c(a,"$isP")
if(!!J.C(a).$iscx){z=a.style
z.border="solid 2px white"}}}}],["","",,T,{"^":"",
fn:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
B.m8("Test 008",H.i(["bumpMaps","scalars"],[P.f]),"A custom shader for testing and fixing the normal distortion equation used for bump maps. This displays the normal vectors across a surface.")
z=document
y=z.getElementById("threeDart")
if(y==null)H.O(P.a8("Failed to find an element with the identifier, threeDart."))
x=E.iE(y,!0,!0,!0,!1)
w=F.lF(50,null,50)
v=w.e
if(!(v==null))++v.c
w.d.bl()
w.a.bl()
v=w.e
if(!(v==null))v.aK(0)
v=w.e
if(!(v==null))++v.c
w.d.bj()
w.a.bj()
v=w.e
if(!(v==null))v.aK(0)
w.d.eL()
for(u=w.a.c.length-1;u>=0;--u){v=w.a.c
if(u>=v.length)return H.h(v,u)
t=v[u]
if(t.ch!==0){t.ch=0
v=t.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}s=t.e7()
if(s.ch!==1){s.ch=1
v=s.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}w.a.h(0,s)
v=w.c
v.a.a.h(0,t)
v.a.a.h(0,s)
v=new F.cE()
r=t.a
if(r==null)H.O(P.a8("May not create a line with a start vertex which is not attached to a shape."))
q=s.a
if(r==null?q!=null:r!==q)H.O(P.a8("May not create a line with vertices attached to different shapes."))
v.a=t
C.a.h(t.c.b,v)
v.b=s
C.a.h(s.c.c,v)
C.a.h(v.a.a.c.b,v)
v=v.a.a.e
if(!(v==null))v.B(null)}p=new T.fJ()
p.c=1
p.sa0(0.5)
o=E.dE(null,!0,null,"",null,null)
o.sbH(0,w)
o.scG(p)
n=E.dE(null,!0,null,"",null,null)
n.y.h(0,o)
v=new U.dH()
v.bJ(U.a5)
v.aY(v.gds(),v.gdL())
v.e=null
v.f=V.c0()
v.r=0
r=x.r
q=new U.ja()
m=U.cu()
m.sbE(0,!0)
m.sbt(6.283185307179586)
m.sbv(0)
m.sZ(0,0)
m.sbu(100)
m.sP(0)
m.sbq(0.5)
q.b=m
m=m.gv()
m.toString
l={func:1,ret:-1,args:[D.o]}
k=H.d(q.gal(),l)
C.a.h(m.a,k)
m=U.cu()
m.sbE(0,!0)
m.sbt(6.283185307179586)
m.sbv(0)
m.sZ(0,0)
m.sbu(100)
m.sP(0)
m.sbq(0.5)
q.c=m
C.a.h(m.gv().a,k)
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
j=new X.an(!1,!1,!1)
i=q.d
q.d=j
m=[X.an]
k=new D.L("modifiers",i,j,q,m)
k.b=!0
q.N(k)
k=q.f
if(k!==!1){q.f=!1
k=new D.L("invertX",k,!1,q,[P.ar])
k.b=!0
q.N(k)}k=q.r
if(k!==!0){q.r=!0
k=new D.L("invertY",k,!0,q,[P.ar])
k.b=!0
q.N(k)}q.aC(r)
v.h(0,q)
r=x.r
q=new U.j9()
k=U.cu()
k.sbE(0,!0)
k.sbt(6.283185307179586)
k.sbv(0)
k.sZ(0,0)
k.sbu(100)
k.sP(0)
k.sbq(0.2)
q.b=k
k=k.gv()
k.toString
h=H.d(q.gal(),l)
C.a.h(k.a,h)
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
j=new X.an(!0,!1,!1)
i=q.c
q.c=j
k=new D.L("modifiers",i,j,q,m)
k.b=!0
q.N(k)
q.aC(r)
v.h(0,q)
r=x.r
q=new U.jb()
q.c=0.01
q.d=0
q.e=0
j=new X.an(!1,!1,!1)
q.b=j
m=new D.L("modifiers",null,j,q,m)
m.b=!0
q.N(m)
q.aC(r)
v.h(0,q)
n.saH(v)
v=new M.h8()
r=O.du(E.aw)
v.d=r
r.aY(v.gdu(),v.gdv())
v.e=null
v.f=null
v.r=null
v.x=null
g=new X.hR()
g.b=1.0471975511965976
g.c=0.1
g.d=2000
g.saH(null)
r=g.b
if(!$.q.$2(r,1.0471975511965976)){i=g.b
g.b=1.0471975511965976
r=new D.L("fov",i,1.0471975511965976,g,[P.v])
r.b=!0
g.ay(r)}r=g.c
if(!$.q.$2(r,0.1)){i=g.c
g.c=0.1
r=new D.L("near",i,0.1,g,[P.v])
r.b=!0
g.ay(r)}r=g.d
if(!$.q.$2(r,2000)){i=g.d
g.d=2000
r=new D.L("far",i,2000,g,[P.v])
r.b=!0
g.ay(r)}r=v.a
if(r!==g){if(r!=null){r=r.gv()
r.toString
q=H.d(v.gai(),l)
C.a.S(r.a,q)}i=v.a
v.a=g
r=g.gv()
r.toString
q=H.d(v.gai(),l)
C.a.h(r.a,q)
r=new D.L("camera",i,v.a,v,[X.dq])
r.b=!0
v.ax(r)}f=new X.hf()
r=new V.bR(0,0,0,1)
f.a=r
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
r=V.e6(0,0,1,1)
f.r=r
r=v.b
if(r!==f){if(r!=null){r=r.gv()
r.toString
q=H.d(v.gai(),l)
C.a.S(r.a,q)}i=v.b
v.b=f
r=f.gv()
r.toString
q=H.d(v.gai(),l)
C.a.h(r.a,q)
r=new D.L("target",i,v.b,v,[X.ed])
r.b=!0
v.ax(r)}v.d.h(0,n)
r=v.a
e=V.ax(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
q=new U.dv()
q.a=e
r.saH(q)
r=x.d
if(r!==v){if(r!=null){r=r.gv()
r.toString
q=H.d(x.gbK(),l)
C.a.S(r.a,q)}x.d=v
v=v.gv()
v.toString
l=H.d(x.gbK(),l)
C.a.h(v.a,l)
x.d0()}v=new B.iy(new T.lQ(p,x))
v.a=z.getElementById("bumpMaps")
v.Y(0,"../resources/BumpMap1.png",!0)
v.h(0,"../resources/BumpMap2.png")
v.h(0,"../resources/BumpMap3.png")
v.h(0,"../resources/BumpMap4.png")
v.h(0,"../resources/BumpMap5.png")
v.h(0,"../resources/ScrewBumpMap.png")
v.h(0,"../resources/CtrlPnlBumpMap.png")
v=new B.i3("scalars")
z=z.getElementById("scalars")
v.b=z
if(z==null)H.O("Failed to find "+v.i(0)+"._elemId for RadioGroup")
v.Y(0,"0.1",new T.lR(p))
v.Y(0,"0.2",new T.lS(p))
v.Y(0,"0.3",new T.lT(p))
v.Y(0,"0.4",new T.lU(p))
v.c9(0,"0.5",new T.lV(p),!0)
v.Y(0,"0.6",new T.lW(p))
v.Y(0,"0.7",new T.lX(p))
v.Y(0,"0.8",new T.lY(p))
v.Y(0,"0.9",new T.lZ(p))
v.Y(0,"1.0",new T.m_(p))
B.m9(x)},
fG:{"^":"e7;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r"},
fJ:{"^":"cO;0a,0b,0c,0d",
gv:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z},
bf:[function(a){var z
H.c(a,"$iso")
z=this.d
if(!(z==null))z.B(a)},function(){return this.bf(null)},"fo","$1","$0","gc6",0,2,2],
sa0:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
z=new D.L("offsetScalar",y,a,this,[P.v])
z.b=!0
this.bf(z)}}},
lQ:{"^":"l:17;a,b",
$1:function(a){var z,y,x,w,v
z=this.a
y=this.b.f.er(a)
x=z.b
if(x!==y){if(x!=null){x=x.y
w=H.d(z.gc6(),{func:1,ret:-1,args:[D.o]})
C.a.S(x.a,w)}v=z.b
z.b=y
y=y.y
x=H.d(z.gc6(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)
y=new D.L("bumpyTexture",v,z.b,z,[T.ef])
y.b=!0
z.bf(y)}}},
lR:{"^":"l:0;a",
$0:function(){this.a.sa0(0.1)}},
lS:{"^":"l:0;a",
$0:function(){this.a.sa0(0.2)}},
lT:{"^":"l:0;a",
$0:function(){this.a.sa0(0.3)}},
lU:{"^":"l:0;a",
$0:function(){this.a.sa0(0.4)}},
lV:{"^":"l:0;a",
$0:function(){this.a.sa0(0.5)}},
lW:{"^":"l:0;a",
$0:function(){this.a.sa0(0.6)}},
lX:{"^":"l:0;a",
$0:function(){this.a.sa0(0.7)}},
lY:{"^":"l:0;a",
$0:function(){this.a.sa0(0.8)}},
lZ:{"^":"l:0;a",
$0:function(){this.a.sa0(0.9)}},
m_:{"^":"l:0;a",
$0:function(){this.a.sa0(1)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dO.prototype
return J.dN.prototype}if(typeof a=="string")return J.bX.prototype
if(a==null)return J.dP.prototype
if(typeof a=="boolean")return J.hm.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.b)return a
return J.ch(a)}
J.at=function(a){if(typeof a=="string")return J.bX.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.b)return a
return J.ch(a)}
J.bM=function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.b)return a
return J.ch(a)}
J.lD=function(a){if(typeof a=="number")return J.bW.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c8.prototype
return a}
J.d8=function(a){if(typeof a=="string")return J.bX.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c8.prototype
return a}
J.aG=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.b)return a
return J.ch(a)}
J.V=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).u(a,b)}
J.fs=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lD(a).J(a,b)}
J.de=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fk(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.at(a).k(a,b)}
J.cl=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fk(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.bM(a).l(a,b,c)}
J.ft=function(a,b){return J.d8(a).C(a,b)}
J.fu=function(a,b,c){return J.aG(a).dQ(a,b,c)}
J.fv=function(a,b,c,d){return J.aG(a).ca(a,b,c,d)}
J.fw=function(a,b){return J.d8(a).R(a,b)}
J.cm=function(a,b,c){return J.at(a).e6(a,b,c)}
J.cn=function(a,b){return J.bM(a).F(a,b)}
J.fx=function(a,b,c,d){return J.bM(a).ae(a,b,c,d)}
J.df=function(a,b){return J.bM(a).D(a,b)}
J.bB=function(a){return J.aG(a).gbm(a)}
J.aN=function(a){return J.C(a).gO(a)}
J.bd=function(a){return J.bM(a).gT(a)}
J.ah=function(a){return J.at(a).gj(a)}
J.fy=function(a,b){return J.aG(a).eN(a,b)}
J.fz=function(a,b){return J.aG(a).sV(a,b)}
J.a3=function(a){return J.C(a).i(a)}
I.af=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.f=W.cs.prototype
C.n=W.fW.prototype
C.C=J.n.prototype
C.a=J.aR.prototype
C.D=J.dN.prototype
C.c=J.dO.prototype
C.E=J.dP.prototype
C.e=J.bW.prototype
C.b=J.bX.prototype
C.L=J.bI.prototype
C.Q=H.cK.prototype
C.R=W.hO.prototype
C.u=J.hS.prototype
C.S=P.cL.prototype
C.m=J.c8.prototype
C.v=W.bt.prototype
C.w=W.jv.prototype
C.y=new P.fE(!1)
C.x=new P.fD(C.y)
C.z=new P.hQ()
C.A=new P.jj()
C.d=new P.kh()
C.B=new P.bF(5e6)
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.q=H.i(I.af([127,2047,65535,1114111]),[P.m])
C.i=H.i(I.af([0,0,32776,33792,1,10240,0,0]),[P.m])
C.j=H.i(I.af([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.k=H.i(I.af([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.N=H.i(I.af([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.l=H.i(I.af([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.r=H.i(I.af([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.O=H.i(I.af([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.t=H.i(I.af([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.M=H.i(I.af([]),[P.f])
C.P=new H.fV(0,{},C.M,[P.f,P.f])
C.h=new P.jc(!1)
$.am=0
$.be=null
$.dk=null
$.d1=!1
$.fi=null
$.fc=null
$.fq=null
$.cf=null
$.cj=null
$.d9=null
$.b6=null
$.by=null
$.bz=null
$.d2=!1
$.M=C.d
$.dB=null
$.dA=null
$.dz=null
$.dy=null
$.q=V.hI()
$.e0=null
$.fI="uniform mat4 objMat;                                     \nuniform mat4 viewMat;                                    \nuniform mat4 projMat;                                    \nuniform sampler2D bumpTxt;                               \nuniform float offsetScalar;                              \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec3 normAttr;                                 \nattribute vec3 binmAttr;                                 \nattribute vec2 txtAttr;                                  \nattribute float weightAttr;                              \n                                                         \nvarying vec3 color;                                      \n                                                         \nvec3 bumpyNormal(vec3 color)                             \n{                                                        \n   vec3 n = normalize(objMat*vec4(normAttr, 0.0)).xyz;   \n   vec3 b = normalize(objMat*vec4(binmAttr, 0.0)).xyz;   \n   vec3 c = cross(b, n);                                 \n   b = cross(n, c);                                      \n   mat3 mat = mat3( b.x,  b.y,  b.z,                     \n                   -c.x, -c.y, -c.z,                     \n                    n.x,  n.y,  n.z);                    \n   return mat * normalize(2.0*color - 1.0);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   color = texture2D(bumpTxt, txtAttr).rgb;              \n   vec4 pnt = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n   if (weightAttr > 0.5)                                 \n   {                                                     \n     pnt += vec4(bumpyNormal(color)*offsetScalar, 0.0);  \n   }                                                     \n   gl_Position = pnt;                                    \n}                                                        \n"
$.fH="precision mediump float;            \n                                    \nvarying vec3 color;                 \n                                    \nvoid main()                         \n{                                   \n   gl_FragColor = vec4(color, 1.0); \n}                                   \n"
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
I.$lazy(y,x,w)}})(["dx","$get$dx",function(){return H.fh("_$dart_dartClosure")},"cB","$get$cB",function(){return H.fh("_$dart_js")},"ej","$get$ej",function(){return H.ap(H.c6({
toString:function(){return"$receiver$"}}))},"ek","$get$ek",function(){return H.ap(H.c6({$method$:null,
toString:function(){return"$receiver$"}}))},"el","$get$el",function(){return H.ap(H.c6(null))},"em","$get$em",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eq","$get$eq",function(){return H.ap(H.c6(void 0))},"er","$get$er",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eo","$get$eo",function(){return H.ap(H.ep(null))},"en","$get$en",function(){return H.ap(function(){try{null.$method$}catch(z){return z.message}}())},"et","$get$et",function(){return H.ap(H.ep(void 0))},"es","$get$es",function(){return H.ap(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cW","$get$cW",function(){return P.jw()},"bA","$get$bA",function(){return[]},"eA","$get$eA",function(){return P.jg()},"eH","$get$eH",function(){return H.hM(H.cc(H.i([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"f2","$get$f2",function(){return P.i9("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"f8","$get$f8",function(){return P.lf()},"dw","$get$dw",function(){return{}},"eD","$get$eD",function(){return Z.ad(0)},"eB","$get$eB",function(){return Z.ad(511)},"aB","$get$aB",function(){return Z.ad(1)},"aA","$get$aA",function(){return Z.ad(2)},"az","$get$az",function(){return Z.ad(4)},"aC","$get$aC",function(){return Z.ad(8)},"b4","$get$b4",function(){return Z.ad(16)},"br","$get$br",function(){return Z.ad(32)},"bs","$get$bs",function(){return Z.ad(64)},"eC","$get$eC",function(){return Z.ad(96)},"aD","$get$aD",function(){return Z.ad(128)},"b3","$get$b3",function(){return Z.ad(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.B},{func:1,ret:-1,args:[D.o]},{func:1,ret:-1,opt:[D.o]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.B,args:[,,]},{func:1,ret:-1,args:[P.m,[P.k,E.aw]]},{func:1,ret:P.B,args:[F.ai]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[D.o]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:P.B,args:[W.a1]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.f,args:[P.m]},{func:1,args:[,]},{func:1,ret:P.B,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.m,[P.k,U.a5]]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.B,args:[,],opt:[,]},{func:1,args:[P.f]},{func:1,ret:P.ar,args:[W.E]},{func:1,ret:W.P,args:[W.E]},{func:1,ret:P.m,args:[[P.e,P.m],P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[,P.f]},{func:1,ret:P.B,args:[P.R]},{func:1,ret:P.ar,args:[P.v,P.v]},{func:1,ret:[P.D,P.f,P.f],args:[[P.D,P.f,P.f],P.f]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:-1,args:[P.b],opt:[P.aj]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:P.v,args:[P.v,P.v]},{func:1,ret:P.B,args:[F.bq,P.v,P.v]},{func:1,ret:[P.aE,,],args:[,]},{func:1,ret:P.B,args:[P.f,,]},{func:1,ret:P.B,args:[P.b0]},{func:1,ret:P.B,args:[W.a4]},{func:1,ret:P.B,args:[W.P]},{func:1,ret:P.G,args:[P.m]},{func:1,ret:P.B,args:[{func:1,ret:-1,args:[D.o]}]}]
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
if(x==y)H.md(d||a)
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
Isolate.af=a.af
Isolate.d6=a.d6
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
if(typeof dartMainRunner==="function")dartMainRunner(T.fn,[])
else T.fn([])})})()
//# sourceMappingURL=test.dart.js.map
