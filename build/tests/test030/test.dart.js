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
if(a1==="m"){processStatics(init.statics[b2]=b3.m,b4)
delete b3.m}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cJ(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cK=function(){}
var dart=[["","",,H,{"^":"",kT:{"^":"a;a"}}],["","",,J,{"^":"",
B:function(a){return void 0},
cQ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c2:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cN==null){H.kc()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.ef("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ch()]
if(v!=null)return v
v=H.kh(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$ch(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
l:{"^":"a;",
n:function(a,b){return a===b},
gL:function(a){return H.b8(a)},
i:["cm",function(a){return"Instance of '"+H.aG(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fC:{"^":"l;",
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$isae:1},
fD:{"^":"l;",
n:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$isA:1},
ci:{"^":"l;",
gL:function(a){return 0},
i:["cn",function(a){return String(a)}]},
h7:{"^":"ci;"},
cz:{"^":"ci;"},
bw:{"^":"ci;",
i:function(a){var z=a[$.$get$d9()]
if(z==null)return this.cn(a)
return"JavaScript function for "+H.f(J.Z(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscd:1},
aE:{"^":"l;$ti",
h:function(a,b){H.w(b,H.u(a,0))
if(!!a.fixed$length)H.Q(P.a7("add"))
a.push(b)},
R:function(a,b){var z
if(!!a.fixed$length)H.Q(P.a7("remove"))
for(z=0;z<a.length;++z)if(J.L(a[z],b)){a.splice(z,1)
return!0}return!1},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.c(P.aW(a))}},
v:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.O(z,y,H.f(a[y]))
return z.join(b)},
dW:function(a){return this.v(a,"")},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
aJ:function(a,b,c){var z=a.length
if(b>z)throw H.c(P.a6(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a6(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.u(a,0)])
return H.e(a.slice(b,c),[H.u(a,0)])},
gbe:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.fA())},
dF:function(a,b){var z
for(z=0;z<a.length;++z)if(J.L(a[z],b))return!0
return!1},
i:function(a){return P.ce(a,"[","]")},
gN:function(a){return new J.ak(a,a.length,0,[H.u(a,0)])},
gL:function(a){return H.b8(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.Q(P.a7("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.bF(b,"newLength",null))
if(b<0)throw H.c(P.a6(b,0,null,"newLength",null))
a.length=b},
O:function(a,b,c){H.S(b)
H.w(c,H.u(a,0))
if(!!a.immutable$list)H.Q(P.a7("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ay(a,b))
if(b>=a.length||b<0)throw H.c(H.ay(a,b))
a[b]=c},
$isi:1,
$isd:1,
m:{
fB:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.bF(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a6(a,0,4294967295,"length",null))
return J.dm(new Array(a),b)},
dm:function(a,b){return J.b2(H.e(a,[b]))},
b2:function(a){H.br(a)
a.fixed$length=Array
return a}}},
kS:{"^":"aE;$ti"},
ak:{"^":"a;a,b,c,0d,$ti",
gK:function(a){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bM:{"^":"l;",
es:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.a7(""+a+".toInt()"))},
bc:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.c(P.a7(""+a+".floor()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.a7(""+a+".round()"))},
ca:function(a,b){var z,y
if(b>20)throw H.c(P.a6(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){return a&0x1FFFFFFF},
cg:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
cp:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bN(a,b)},
ai:function(a,b){return(a|0)===a?a/b|0:this.bN(a,b)},
bN:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.a7("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
aE:function(a,b){var z
if(a>0)z=this.ds(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ds:function(a,b){return b>31?0:a>>>b},
X:function(a,b){if(typeof b!=="number")throw H.c(H.ax(b))
return a<b},
$ist:1,
$isP:1},
dp:{"^":"bM;",$isz:1},
dn:{"^":"bM;"},
cg:{"^":"l;",
b8:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ay(a,b))
if(b<0)throw H.c(H.ay(a,b))
if(b>=a.length)H.Q(H.ay(a,b))
return a.charCodeAt(b)},
aB:function(a,b){if(b>=a.length)throw H.c(H.ay(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.K(b)
if(typeof b!=="string")throw H.c(P.bF(b,null,null))
return a+b},
aK:function(a,b,c){H.S(c)
if(c==null)c=a.length
if(b<0)throw H.c(P.bS(b,null,null))
if(b>c)throw H.c(P.bS(b,null,null))
if(c>a.length)throw H.c(P.bS(c,null,null))
return a.substring(b,c)},
ck:function(a,b){return this.aK(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
e7:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
W:function(a,b){return this.e7(a,b," ")},
dG:function(a,b,c){if(c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
return H.eU(a,b,c)},
i:function(a){return a},
gL:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$isdD:1,
$isk:1}}],["","",,H,{"^":"",
fA:function(){return new P.hD("No element")},
T:{"^":"i7;a",
gj:function(a){return this.a.length},
k:function(a,b){return C.b.b8(this.a,b)},
$aseg:function(){return[P.z]},
$aso:function(){return[P.z]},
$asi:function(){return[P.z]},
$asd:function(){return[P.z]}},
fn:{"^":"i;"},
du:{"^":"a;a,b,c,0d,$ti",
gK:function(a){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.bD(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.c(P.aW(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
fS:{"^":"i;a,b,$ti",
gN:function(a){return new H.fT(J.bs(this.a),this.b,this.$ti)},
gj:function(a){return J.aT(this.a)},
w:function(a,b){return this.b.$1(J.cT(this.a,b))},
$asi:function(a,b){return[b]}},
fT:{"^":"cf;0a,b,c,$ti",
A:function(){var z=this.b
if(z.A()){this.a=this.c.$1(z.gK(z))
return!0}this.a=null
return!1},
gK:function(a){return this.a},
$ascf:function(a,b){return[b]}},
iq:{"^":"i;a,b,$ti",
gN:function(a){return new H.ir(J.bs(this.a),this.b,this.$ti)}},
ir:{"^":"cf;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gK(z)))return!0
return!1},
gK:function(a){var z=this.a
return z.gK(z)}},
bJ:{"^":"a;$ti"},
eg:{"^":"a;$ti"},
i7:{"^":"bN+eg;"}}],["","",,H,{"^":"",
k7:function(a){return init.types[H.S(a)]},
kf:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isv},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.Z(a)
if(typeof z!=="string")throw H.c(H.ax(a))
return z},
b8:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aG:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.B(a).$iscz){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.aB(w,0)===36)w=C.b.ck(w,1)
r=H.cO(H.br(H.az(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dG:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hg:function(a){var z,y,x,w
z=H.e([],[P.z])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.c(H.ax(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aE(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.c(H.ax(w))}return H.dG(z)},
dH:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.c(H.ax(x))
if(x<0)throw H.c(H.ax(x))
if(x>65535)return H.hg(a)}return H.dG(a)},
hf:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aE(z,10))>>>0,56320|z&1023)}throw H.c(P.a6(a,0,1114111,null,null))},
a2:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
he:function(a){return a.b?H.a2(a).getUTCFullYear()+0:H.a2(a).getFullYear()+0},
hc:function(a){return a.b?H.a2(a).getUTCMonth()+1:H.a2(a).getMonth()+1},
h8:function(a){return a.b?H.a2(a).getUTCDate()+0:H.a2(a).getDate()+0},
h9:function(a){return a.b?H.a2(a).getUTCHours()+0:H.a2(a).getHours()+0},
hb:function(a){return a.b?H.a2(a).getUTCMinutes()+0:H.a2(a).getMinutes()+0},
hd:function(a){return a.b?H.a2(a).getUTCSeconds()+0:H.a2(a).getSeconds()+0},
ha:function(a){return a.b?H.a2(a).getUTCMilliseconds()+0:H.a2(a).getMilliseconds()+0},
p:function(a){throw H.c(H.ax(a))},
h:function(a,b){if(a==null)J.aT(a)
throw H.c(H.ay(a,b))},
ay:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,"index",null)
z=H.S(J.aT(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bS(b,"index",null)},
k3:function(a,b,c){if(a>c)return new P.bR(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bR(a,c,!0,b,"end","Invalid value")
return new P.aj(!0,b,"end",null)},
ax:function(a){return new P.aj(!0,a,null,null)},
jZ:function(a){if(typeof a!=="number")throw H.c(H.ax(a))
return a},
c:function(a){var z
if(a==null)a=new P.dC()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eW})
z.name=""}else z.toString=H.eW
return z},
eW:function(){return J.Z(this.dartException)},
Q:function(a){throw H.c(a)},
x:function(a){throw H.c(P.aW(a))},
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ks(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aE(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cj(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dB(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e1()
u=$.$get$e2()
t=$.$get$e3()
s=$.$get$e4()
r=$.$get$e8()
q=$.$get$e9()
p=$.$get$e6()
$.$get$e5()
o=$.$get$eb()
n=$.$get$ea()
m=v.V(y)
if(m!=null)return z.$1(H.cj(H.K(y),m))
else{m=u.V(y)
if(m!=null){m.method="call"
return z.$1(H.cj(H.K(y),m))}else{m=t.V(y)
if(m==null){m=s.V(y)
if(m==null){m=r.V(y)
if(m==null){m=q.V(y)
if(m==null){m=p.V(y)
if(m==null){m=s.V(y)
if(m==null){m=o.V(y)
if(m==null){m=n.V(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dB(H.K(y),m))}}return z.$1(new H.i6(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dO()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aj(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dO()
return a},
aR:function(a){var z
if(a==null)return new H.ew(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ew(a)},
k5:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.O(0,a[y],a[x])}return b},
ke:function(a,b,c,d,e,f){H.j(a,"$iscd")
switch(H.S(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.N("Unsupported number of arguments for wrapped closure"))},
aP:function(a,b){var z
H.S(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ke)
a.$identity=z
return z},
fb:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.B(d).$isd){z.$reflectionInfo=d
x=H.hj(z).r}else x=d
w=e?Object.create(new H.hE().constructor.prototype):Object.create(new H.c7(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.af
if(typeof u!=="number")return u.B()
$.af=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.d3(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.k7,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cX:H.c8
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.d3(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
f8:function(a,b,c,d){var z=H.c8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d3:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fa(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.f8(y,!w,z,b)
if(y===0){w=$.af
if(typeof w!=="number")return w.B()
$.af=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aU
if(v==null){v=H.bG("self")
$.aU=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.af
if(typeof w!=="number")return w.B()
$.af=w+1
t+=w
w="return function("+t+"){return this."
v=$.aU
if(v==null){v=H.bG("self")
$.aU=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
f9:function(a,b,c,d){var z,y
z=H.c8
y=H.cX
switch(b?-1:a){case 0:throw H.c(H.hs("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fa:function(a,b){var z,y,x,w,v,u,t,s
z=$.aU
if(z==null){z=H.bG("self")
$.aU=z}y=$.cW
if(y==null){y=H.bG("receiver")
$.cW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.f9(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.af
if(typeof y!=="number")return y.B()
$.af=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.af
if(typeof y!=="number")return y.B()
$.af=y+1
return new Function(z+y+"}")()},
cJ:function(a,b,c,d,e,f,g){var z,y
z=J.b2(H.br(b))
H.S(c)
y=!!J.B(d).$isd?J.b2(d):d
return H.fb(a,z,c,y,!!e,f,g)},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ai(a,"String"))},
kk:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ai(a,"num"))},
eK:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ai(a,"bool"))},
S:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ai(a,"int"))},
eS:function(a,b){throw H.c(H.ai(a,H.K(b).substring(3)))},
km:function(a,b){var z=J.bD(b)
throw H.c(H.f7(a,z.aK(b,3,z.gj(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.eS(a,b)},
W:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.km(a,b)},
br:function(a){if(a==null)return a
if(!!J.B(a).$isd)return a
throw H.c(H.ai(a,"List"))},
kg:function(a,b){if(a==null)return a
if(!!J.B(a).$isd)return a
if(J.B(a)[b])return a
H.eS(a,b)},
eL:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.S(z)]
else return a.$S()}return},
bC:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eL(J.B(a))
if(z==null)return!1
y=H.eO(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.cF)return a
$.cF=!0
try{if(H.bC(a,b))return a
z=H.bE(b)
y=H.ai(a,z)
throw H.c(y)}finally{$.cF=!1}},
cL:function(a,b){if(a!=null&&!H.cI(a,b))H.Q(H.ai(a,H.bE(b)))
return a},
eF:function(a){var z
if(a instanceof H.q){z=H.eL(J.B(a))
if(z!=null)return H.bE(z)
return"Closure"}return H.aG(a)},
kr:function(a){throw H.c(new P.fg(H.K(a)))},
eM:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
az:function(a){if(a==null)return
return a.$ti},
lH:function(a,b,c){return H.aS(a["$as"+H.f(c)],H.az(b))},
bq:function(a,b,c,d){var z
H.K(c)
H.S(d)
z=H.aS(a["$as"+H.f(c)],H.az(b))
return z==null?null:z[d]},
at:function(a,b,c){var z
H.K(b)
H.S(c)
z=H.aS(a["$as"+H.f(b)],H.az(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.S(b)
z=H.az(a)
return z==null?null:z[b]},
bE:function(a){var z=H.aA(a,null)
return z},
aA:function(a,b){var z,y
H.y(b,"$isd",[P.k],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cO(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.S(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.f(b[y])}if('func' in a)return H.jP(a,b)
if('futureOr' in a)return"FutureOr<"+H.aA("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.k]
H.y(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.b.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aA(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aA(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aA(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aA(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k4(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.K(z[l])
n=n+m+H.aA(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cO:function(a,b,c){var z,y,x,w,v,u
H.y(c,"$isd",[P.k],"$asd")
if(a==null)return""
z=new P.cr("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aA(u,c)}v="<"+z.i(0)+">"
return v},
aS:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bp:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.az(a)
y=J.B(a)
if(y[b]==null)return!1
return H.eI(H.aS(y[d],z),null,c,null)},
y:function(a,b,c,d){var z,y
H.K(b)
H.br(c)
H.K(d)
if(a==null)return a
z=H.bp(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cO(c,0,null)
throw H.c(H.ai(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eI:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a9(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a9(a[y],b,c[y],d))return!1
return!0},
lF:function(a,b,c){return a.apply(b,H.aS(J.B(b)["$as"+H.f(c)],H.az(b)))},
eP:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="A"||a===-1||a===-2||H.eP(z)}return!1},
cI:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="A"||b===-1||b===-2||H.eP(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cI(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bC(a,b)}y=J.B(a).constructor
x=H.az(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.a9(y,null,b,null)
return z},
w:function(a,b){if(a!=null&&!H.cI(a,b))throw H.c(H.ai(a,H.bE(b)))
return a},
a9:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a9(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="A")return!0
if('func' in c)return H.eO(a,b,c,d)
if('func' in a)return c.builtin$cls==="cd"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a9("type" in a?a.type:null,b,x,d)
else if(H.a9(a,b,x,d))return!0
else{if(!('$is'+"b_" in y.prototype))return!1
w=y.prototype["$as"+"b_"]
v=H.aS(w,z?a.slice(1):null)
return H.a9(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bE(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eI(H.aS(r,z),b,u,d)},
eO:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a9(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a9(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a9(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a9(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kj(m,b,l,d)},
kj:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a9(c[w],d,a[w],b))return!1}return!0},
lG:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
kh:function(a){var z,y,x,w,v,u
z=H.K($.eN.$1(a))
y=$.c0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.K($.eH.$2(a,z))
if(z!=null){y=$.c0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c4(x)
$.c0[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c3[z]=x
return x}if(v==="-"){u=H.c4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eR(a,x)
if(v==="*")throw H.c(P.ef(z))
if(init.leafTags[z]===true){u=H.c4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eR(a,x)},
eR:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cQ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c4:function(a){return J.cQ(a,!1,null,!!a.$isv)},
ki:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c4(z)
else return J.cQ(z,c,null,null)},
kc:function(){if(!0===$.cN)return
$.cN=!0
H.kd()},
kd:function(){var z,y,x,w,v,u,t,s
$.c0=Object.create(null)
$.c3=Object.create(null)
H.k8()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eT.$1(v)
if(u!=null){t=H.ki(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k8:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.aO(C.z,H.aO(C.E,H.aO(C.n,H.aO(C.n,H.aO(C.D,H.aO(C.A,H.aO(C.B(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eN=new H.k9(v)
$.eH=new H.ka(u)
$.eT=new H.kb(t)},
aO:function(a,b){return a(b)||b},
eU:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
eV:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hi:{"^":"a;a,b,c,d,e,f,r,0x",m:{
hj:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.b2(z)
y=z[0]
x=z[1]
return new H.hi(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hT:{"^":"a;a,b,c,d,e,f",
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
m:{
ah:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e7:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
h4:{"^":"R;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+z+"' on null"},
m:{
dB:function(a,b){return new H.h4(a,b==null?null:b.method)}}},
fG:{"^":"R;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
m:{
cj:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fG(a,y,z?null:b.receiver)}}},
i6:{"^":"R;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ks:{"^":"q:14;a",
$1:function(a){if(!!J.B(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
$isad:1},
q:{"^":"a;",
i:function(a){return"Closure '"+H.aG(this).trim()+"'"},
gcd:function(){return this},
$iscd:1,
gcd:function(){return this}},
dT:{"^":"q;"},
hE:{"^":"dT;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
c7:{"^":"dT;a,b,c,d",
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c7))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var z,y
z=this.c
if(z==null)y=H.b8(this.a)
else y=typeof z!=="object"?J.aC(z):H.b8(z)
return(y^H.b8(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.aG(z)+"'")},
m:{
c8:function(a){return a.a},
cX:function(a){return a.c},
bG:function(a){var z,y,x,w,v
z=new H.c7("self","target","receiver","name")
y=J.b2(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hU:{"^":"R;a",
i:function(a){return this.a},
m:{
ai:function(a,b){return new H.hU("TypeError: "+H.f(P.bI(a))+": type '"+H.eF(a)+"' is not a subtype of type '"+b+"'")}}},
f6:{"^":"R;a",
i:function(a){return this.a},
m:{
f7:function(a,b){return new H.f6("CastError: "+H.f(P.bI(a))+": type '"+H.eF(a)+"' is not a subtype of type '"+b+"'")}}},
hr:{"^":"R;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
m:{
hs:function(a){return new H.hr(a)}}},
aF:{"^":"fQ;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
ga8:function(a){return new H.dt(this,[H.u(this,0)])},
bV:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bD(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bD(y,b)}else return this.dU(b)},
dU:function(a){var z=this.d
if(z==null)return!1
return this.bd(this.aR(z,J.aC(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aC(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aC(w,b)
x=y==null?null:y.b
return x}else return this.dV(b)},
dV:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aR(z,J.aC(a)&0x3ffffff)
x=this.bd(y,a)
if(x<0)return
return y[x].b},
O:function(a,b,c){var z,y,x,w,v,u
H.w(b,H.u(this,0))
H.w(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aX()
this.b=z}this.bw(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aX()
this.c=y}this.bw(y,b,c)}else{x=this.d
if(x==null){x=this.aX()
this.d=x}w=J.aC(b)&0x3ffffff
v=this.aR(x,w)
if(v==null)this.b0(x,w,[this.aY(b,c)])
else{u=this.bd(v,b)
if(u>=0)v[u].b=c
else v.push(this.aY(b,c))}}},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aW(this))
z=z.c}},
bw:function(a,b,c){var z
H.w(b,H.u(this,0))
H.w(c,H.u(this,1))
z=this.aC(a,b)
if(z==null)this.b0(a,b,this.aY(b,c))
else z.b=c},
cT:function(){this.r=this.r+1&67108863},
aY:function(a,b){var z,y
z=new H.fI(H.w(a,H.u(this,0)),H.w(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.cT()
return z},
bd:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].a,b))return y
return-1},
i:function(a){return P.dw(this)},
aC:function(a,b){return a[b]},
aR:function(a,b){return a[b]},
b0:function(a,b,c){a[b]=c},
cN:function(a,b){delete a[b]},
bD:function(a,b){return this.aC(a,b)!=null},
aX:function(){var z=Object.create(null)
this.b0(z,"<non-identifier-key>",z)
this.cN(z,"<non-identifier-key>")
return z},
$isds:1},
fI:{"^":"a;a,b,0c,0d"},
dt:{"^":"fn;a,$ti",
gj:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.fJ(z,z.r,this.$ti)
y.c=z.e
return y}},
fJ:{"^":"a;a,b,0c,0d,$ti",
gK:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aW(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
k9:{"^":"q:14;a",
$1:function(a){return this.a(a)}},
ka:{"^":"q:32;a",
$2:function(a,b){return this.a(a,b)}},
kb:{"^":"q:30;a",
$1:function(a){return this.a(H.K(a))}},
fE:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdD:1,
m:{
fF:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(new P.fw("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
k4:function(a){return J.dm(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kl:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bY:function(a){return a},
aw:function(a,b,c){H.br(b)
if(a>>>0!==a||a>=c)throw H.c(H.ay(b,a))},
jO:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.c(H.k3(a,b,c))
return b},
fZ:{"^":"l;",$islq:1,"%":"DataView;ArrayBufferView;cn|eq|er|fY|es|et|av"},
cn:{"^":"fZ;",
gj:function(a){return a.length},
$isv:1,
$asv:I.cK},
fY:{"^":"er;",
k:function(a,b){H.aw(b,a,a.length)
return a[b]},
$asbJ:function(){return[P.t]},
$aso:function(){return[P.t]},
$isi:1,
$asi:function(){return[P.t]},
$isd:1,
$asd:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
av:{"^":"et;",
$asbJ:function(){return[P.z]},
$aso:function(){return[P.z]},
$isi:1,
$asi:function(){return[P.z]},
$isd:1,
$asd:function(){return[P.z]}},
l0:{"^":"av;",
k:function(a,b){H.aw(b,a,a.length)
return a[b]},
"%":"Int16Array"},
l1:{"^":"av;",
k:function(a,b){H.aw(b,a,a.length)
return a[b]},
"%":"Int32Array"},
l2:{"^":"av;",
k:function(a,b){H.aw(b,a,a.length)
return a[b]},
"%":"Int8Array"},
l3:{"^":"av;",
k:function(a,b){H.aw(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
l4:{"^":"av;",
k:function(a,b){H.aw(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
l5:{"^":"av;",
gj:function(a){return a.length},
k:function(a,b){H.aw(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
h_:{"^":"av;",
gj:function(a){return a.length},
k:function(a,b){H.aw(b,a,a.length)
return a[b]},
aJ:function(a,b,c){return new Uint8Array(a.subarray(b,H.jO(b,c,a.length)))},
"%":";Uint8Array"},
eq:{"^":"cn+o;"},
er:{"^":"eq+bJ;"},
es:{"^":"cn+o;"},
et:{"^":"es+bJ;"}}],["","",,P,{"^":"",
it:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jW()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aP(new P.iv(z),1)).observe(y,{childList:true})
return new P.iu(z,y,x)}else if(self.setImmediate!=null)return P.jX()
return P.jY()},
lu:[function(a){self.scheduleImmediate(H.aP(new P.iw(H.b(a,{func:1,ret:-1})),0))},"$1","jW",4,0,11],
lv:[function(a){self.setImmediate(H.aP(new P.ix(H.b(a,{func:1,ret:-1})),0))},"$1","jX",4,0,11],
lw:[function(a){P.cv(C.l,H.b(a,{func:1,ret:-1}))},"$1","jY",4,0,11],
cv:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.e.ai(a.a,1000)
return P.js(z<0?0:z,b)},
dX:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aH]})
z=C.e.ai(a.a,1000)
return P.jt(z<0?0:z,b)},
jS:function(a,b){if(H.bC(a,{func:1,args:[P.a,P.ad]}))return b.ef(a,null,P.a,P.ad)
if(H.bC(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.c(P.bF(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jR:function(){var z,y
for(;z=$.aN,z!=null;){$.bn=null
y=z.b
$.aN=y
if(y==null)$.bm=null
z.a.$0()}},
lE:[function(){$.cG=!0
try{P.jR()}finally{$.bn=null
$.cG=!1
if($.aN!=null)$.$get$cC().$1(P.eJ())}},"$0","eJ",0,0,3],
eE:function(a){var z=new P.el(H.b(a,{func:1,ret:-1}))
if($.aN==null){$.bm=z
$.aN=z
if(!$.cG)$.$get$cC().$1(P.eJ())}else{$.bm.b=z
$.bm=z}},
jV:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.aN
if(z==null){P.eE(a)
$.bn=$.bm
return}y=new P.el(a)
x=$.bn
if(x==null){y.b=z
$.bn=y
$.aN=y}else{y.b=x.b
x.b=y
$.bn=y
if(y.b==null)$.bm=y}},
kn:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.F
if(C.d===y){P.c_(null,null,C.d,a)
return}y.toString
P.c_(null,null,y,H.b(y.b3(a),z))},
dW:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.F
if(y===C.d){y.toString
return P.cv(a,b)}return P.cv(a,H.b(y.b3(b),z))},
hQ:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aH]}
H.b(b,z)
y=$.F
if(y===C.d){y.toString
return P.dX(a,b)}x=y.bS(b,P.aH)
$.F.toString
return P.dX(a,H.b(x,z))},
bZ:function(a,b,c,d,e){var z={}
z.a=d
P.jV(new P.jT(z,e))},
eC:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.F
if(y===c)return d.$0()
$.F=c
z=y
try{y=d.$0()
return y}finally{$.F=z}},
eD:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.F
if(y===c)return d.$1(e)
$.F=c
z=y
try{y=d.$1(e)
return y}finally{$.F=z}},
jU:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
c_:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.b3(d):c.dC(d,-1)
P.eE(d)},
iv:{"^":"q:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iu:{"^":"q:25;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iw:{"^":"q:2;a",
$0:function(){this.a.$0()}},
ix:{"^":"q:2;a",
$0:function(){this.a.$0()}},
ez:{"^":"a;a,0b,c",
cB:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aP(new P.jv(this,b),0),a)
else throw H.c(P.a7("`setTimeout()` not found."))},
cC:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aP(new P.ju(this,a,Date.now(),b),0),a)
else throw H.c(P.a7("Periodic timer."))},
$isaH:1,
m:{
js:function(a,b){var z=new P.ez(!0,0)
z.cB(a,b)
return z},
jt:function(a,b){var z=new P.ez(!1,0)
z.cC(a,b)
return z}}},
jv:{"^":"q:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ju:{"^":"q:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.cp(w,x)}z.c=y
this.d.$1(z)}},
aM:{"^":"a;0a,b,c,d,e,$ti",
e_:function(a){if(this.c!==6)return!0
return this.b.b.bm(H.b(this.d,{func:1,ret:P.ae,args:[P.a]}),a.a,P.ae,P.a)},
dT:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.bC(z,{func:1,args:[P.a,P.ad]}))return H.cL(w.el(z,a.a,a.b,null,y,P.ad),x)
else return H.cL(w.bm(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
ar:{"^":"a;bM:a<,b,0dm:c<,$ti",
c9:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.d){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jS(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ar(0,$.F,[c])
w=b==null?1:3
this.bx(new P.aM(x,w,a,b,[z,c]))
return x},
er:function(a,b){return this.c9(a,null,b)},
bx:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isaM")
this.c=a}else{if(z===2){y=H.j(this.c,"$isar")
z=y.a
if(z<4){y.bx(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c_(null,null,z,H.b(new P.iL(this,a),{func:1,ret:-1}))}},
bH:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isaM")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isar")
y=u.a
if(y<4){u.bH(a)
return}this.a=y
this.c=u.c}z.a=this.aD(a)
y=this.b
y.toString
P.c_(null,null,y,H.b(new P.iQ(z,this),{func:1,ret:-1}))}},
b_:function(){var z=H.j(this.c,"$isaM")
this.c=null
return this.aD(z)},
aD:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bB:function(a){var z,y,x,w
z=H.u(this,0)
H.cL(a,{futureOr:1,type:z})
y=this.$ti
x=H.bp(a,"$isb_",y,"$asb_")
if(x){z=H.bp(a,"$isar",y,null)
if(z)P.en(a,this)
else P.iM(a,this)}else{w=this.b_()
H.w(a,z)
this.a=4
this.c=a
P.bk(this,w)}},
aN:[function(a,b){var z
H.j(b,"$isad")
z=this.b_()
this.a=8
this.c=new P.a5(a,b)
P.bk(this,z)},function(a){return this.aN(a,null)},"eA","$2","$1","gcK",4,2,22],
$isb_:1,
m:{
iM:function(a,b){var z,y,x
b.a=1
try{a.c9(new P.iN(b),new P.iO(b),null)}catch(x){z=H.aB(x)
y=H.aR(x)
P.kn(new P.iP(b,z,y))}},
en:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isar")
if(z>=4){y=b.b_()
b.a=a.a
b.c=a.c
P.bk(b,y)}else{y=H.j(b.c,"$isaM")
b.a=2
b.c=a
a.bH(y)}},
bk:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isa5")
y=y.b
u=v.a
t=v.b
y.toString
P.bZ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bk(z.a,b)}y=z.a
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
if(p){H.j(r,"$isa5")
y=y.b
u=r.a
t=r.b
y.toString
P.bZ(null,null,y,u,t)
return}o=$.F
if(o==null?q!=null:o!==q)$.F=q
else o=null
y=b.c
if(y===8)new P.iT(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iS(x,b,r).$0()}else if((y&2)!==0)new P.iR(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.B(y).$isb_){if(y.a>=4){n=H.j(t.c,"$isaM")
t.c=null
b=t.aD(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.en(y,t)
return}}m=b.b
n=H.j(m.c,"$isaM")
m.c=null
b=m.aD(n)
y=x.a
u=x.b
if(!y){H.w(u,H.u(m,0))
m.a=4
m.c=u}else{H.j(u,"$isa5")
m.a=8
m.c=u}z.a=m
y=m}}}},
iL:{"^":"q:2;a,b",
$0:function(){P.bk(this.a,this.b)}},
iQ:{"^":"q:2;a,b",
$0:function(){P.bk(this.b,this.a.a)}},
iN:{"^":"q:15;a",
$1:function(a){var z=this.a
z.a=0
z.bB(a)}},
iO:{"^":"q:34;a",
$2:function(a,b){this.a.aN(a,H.j(b,"$isad"))},
$1:function(a){return this.$2(a,null)}},
iP:{"^":"q:2;a,b,c",
$0:function(){this.a.aN(this.b,this.c)}},
iT:{"^":"q:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c6(H.b(w.d,{func:1}),null)}catch(v){y=H.aB(v)
x=H.aR(v)
if(this.d){w=H.j(this.a.a.c,"$isa5").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isa5")
else u.b=new P.a5(y,x)
u.a=!0
return}if(!!J.B(z).$isb_){if(z instanceof P.ar&&z.gbM()>=4){if(z.gbM()===8){w=this.b
w.b=H.j(z.gdm(),"$isa5")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.er(new P.iU(t),null)
w.a=!1}}},
iU:{"^":"q:20;a",
$1:function(a){return this.a}},
iS:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.w(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.bm(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aB(t)
y=H.aR(t)
x=this.a
x.b=new P.a5(z,y)
x.a=!0}}},
iR:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isa5")
w=this.c
if(w.e_(z)&&w.e!=null){v=this.b
v.b=w.dT(z)
v.a=!1}}catch(u){y=H.aB(u)
x=H.aR(u)
w=H.j(this.a.a.c,"$isa5")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a5(y,x)
s.a=!0}}},
el:{"^":"a;a,0b"},
cq:{"^":"a;$ti",
gj:function(a){var z,y
z={}
y=new P.ar(0,$.F,[P.z])
z.a=0
this.dZ(new P.hH(z,this),!0,new P.hI(z,y),y.gcK())
return y}},
hH:{"^":"q;a,b",
$1:function(a){H.w(a,H.at(this.b,"cq",0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.at(this.b,"cq",0)]}}},
hI:{"^":"q:2;a,b",
$0:function(){this.b.bB(this.a.a)}},
dQ:{"^":"a;$ti"},
hG:{"^":"a;"},
aH:{"^":"a;"},
a5:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isR:1},
jC:{"^":"a;",$islt:1},
jT:{"^":"q:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dC()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.i(0)
throw x}},
je:{"^":"jC;",
em:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.d===$.F){a.$0()
return}P.eC(null,null,this,a,-1)}catch(x){z=H.aB(x)
y=H.aR(x)
P.bZ(null,null,this,z,H.j(y,"$isad"))}},
en:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.d===$.F){a.$1(b)
return}P.eD(null,null,this,a,b,-1,c)}catch(x){z=H.aB(x)
y=H.aR(x)
P.bZ(null,null,this,z,H.j(y,"$isad"))}},
dC:function(a,b){return new P.jg(this,H.b(a,{func:1,ret:b}),b)},
b3:function(a){return new P.jf(this,H.b(a,{func:1,ret:-1}))},
bS:function(a,b){return new P.jh(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
c6:function(a,b){H.b(a,{func:1,ret:b})
if($.F===C.d)return a.$0()
return P.eC(null,null,this,a,b)},
bm:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.F===C.d)return a.$1(b)
return P.eD(null,null,this,a,b,c,d)},
el:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.F===C.d)return a.$2(b,c)
return P.jU(null,null,this,a,b,c,d,e,f)},
ef:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jg:{"^":"q;a,b,c",
$0:function(){return this.a.c6(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jf:{"^":"q:3;a,b",
$0:function(){return this.a.em(this.b)}},
jh:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.en(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fL:function(a,b,c){H.br(a)
return H.y(H.k5(a,new H.aF(0,0,[b,c])),"$isds",[b,c],"$asds")},
fK:function(a,b){return new H.aF(0,0,[a,b])},
fM:function(a,b,c,d){return new P.j0(0,0,[d])},
fz:function(a,b,c){var z,y
if(P.cH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bo()
C.a.h(y,a)
try{P.jQ(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.dR(b,H.kg(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
ce:function(a,b,c){var z,y,x
if(P.cH(a))return b+"..."+c
z=new P.cr(b)
y=$.$get$bo()
C.a.h(y,a)
try{x=z
x.a=P.dR(x.gad(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gad()+c
y=z.gad()
return y.charCodeAt(0)==0?y:y},
cH:function(a){var z,y
for(z=0;y=$.$get$bo(),z<y.length;++z)if(a===y[z])return!0
return!1},
jQ:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.f(z.gK(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gK(z);++x
if(!z.A()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gK(z);++x
for(;z.A();t=s,s=r){r=z.gK(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dw:function(a){var z,y,x
z={}
if(P.cH(a))return"{...}"
y=new P.cr("")
try{C.a.h($.$get$bo(),a)
x=y
x.a=x.gad()+"{"
z.a=!0
J.f_(a,new P.fR(z,y))
z=y
z.a=z.gad()+"}"}finally{z=$.$get$bo()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gad()
return z.charCodeAt(0)==0?z:z},
j0:{"^":"iV;a,0b,0c,0d,0e,0f,r,$ti",
gN:function(a){return P.ep(this,this.r,H.u(this,0))},
gj:function(a){return this.a},
h:function(a,b){var z,y
H.w(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cE()
this.b=z}return this.bz(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cE()
this.c=y}return this.bz(y,b)}else return this.cD(0,b)},
cD:function(a,b){var z,y,x
H.w(b,H.u(this,0))
z=this.d
if(z==null){z=P.cE()
this.d=z}y=this.bC(b)
x=z[y]
if(x==null)z[y]=[this.aM(b)]
else{if(this.bG(x,b)>=0)return!1
x.push(this.aM(b))}return!0},
R:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bI(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bI(this.c,b)
else return this.dj(0,b)},
dj:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.cQ(z,b)
x=this.bG(y,b)
if(x<0)return!1
this.bO(y.splice(x,1)[0])
return!0},
bz:function(a,b){H.w(b,H.u(this,0))
if(H.j(a[b],"$iscD")!=null)return!1
a[b]=this.aM(b)
return!0},
bI:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$iscD")
if(z==null)return!1
this.bO(z)
delete a[b]
return!0},
bA:function(){this.r=this.r+1&67108863},
aM:function(a){var z,y
z=new P.cD(H.w(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bA()
return z},
bO:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bA()},
bC:function(a){return J.aC(a)&0x3ffffff},
cQ:function(a,b){return a[this.bC(b)]},
bG:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].a,b))return y
return-1},
m:{
cE:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cD:{"^":"a;a,0b,0c"},
j1:{"^":"a;a,b,0c,0d,$ti",
gK:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aW(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.w(z.a,H.u(this,0))
this.c=z.b
return!0}}},
m:{
ep:function(a,b,c){var z=new P.j1(a,b,[c])
z.c=a.e
return z}}},
iV:{"^":"ht;"},
bN:{"^":"j2;",$isi:1,$isd:1},
o:{"^":"a;$ti",
gN:function(a){return new H.du(a,this.gj(a),0,[H.bq(this,a,"o",0)])},
w:function(a,b){return this.k(a,b)},
ev:function(a,b){var z,y,x
z=H.e([],[H.bq(this,a,"o",0)])
C.a.sj(z,this.gj(a))
y=0
while(!0){x=this.gj(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.O(z,y,this.k(a,y));++y}return z},
eu:function(a){return this.ev(a,!0)},
i:function(a){return P.ce(a,"[","]")}},
fQ:{"^":"a4;"},
fR:{"^":"q:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
a4:{"^":"a;$ti",
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bq(this,a,"a4",0),H.bq(this,a,"a4",1)]})
for(z=J.bs(this.ga8(a));z.A();){y=z.gK(z)
b.$2(y,this.k(a,y))}},
gj:function(a){return J.aT(this.ga8(a))},
i:function(a){return P.dw(a)},
$isX:1},
hv:{"^":"a;$ti",
i:function(a){return P.ce(this,"{","}")},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.cU("index"))
if(b<0)H.Q(P.a6(b,0,null,"index",null))
for(z=P.ep(this,this.r,H.u(this,0)),y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.c(P.E(b,this,"index",null,y))},
$isi:1},
ht:{"^":"hv;"},
j2:{"^":"a+o;"}}],["","",,P,{"^":"",cb:{"^":"a;$ti"},d6:{"^":"hG;$ti"},fp:{"^":"cb;",
$ascb:function(){return[P.k,[P.d,P.z]]}},id:{"^":"fp;a"},ie:{"^":"d6;",
dI:function(a,b,c){var z,y,x,w
z=a.length
P.dI(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jB(0,0,x)
if(w.cP(a,b,z)!==z)w.bP(C.b.b8(a,z-1),0)
return C.H.aJ(x,0,w.b)},
dH:function(a){return this.dI(a,0,null)},
$asd6:function(){return[P.k,[P.d,P.z]]}},jB:{"^":"a;a,b,c",
bP:function(a,b){var z,y,x,w,v
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
cP:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.b8(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.aB(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bP(w,C.b.aB(a,u)))x=u}else if(w<=2047){v=this.b
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
fr:function(a){var z=J.B(a)
if(!!z.$isq)return z.i(a)
return"Instance of '"+H.aG(a)+"'"},
fN:function(a,b,c,d){var z,y
H.w(b,d)
z=J.fB(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.O(z,y,b)
return H.y(z,"$isd",[d],"$asd")},
fO:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.gN(a);x.A();)C.a.h(y,H.w(x.gK(x),c))
if(b)return y
return H.y(J.b2(y),"$isd",z,"$asd")},
cs:function(a,b,c){var z,y
z=P.z
H.y(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.y(a,"$isaE",[z],"$asaE")
y=a.length
c=P.dI(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.X()
z=c<y}else z=!0
return H.dH(z?C.a.aJ(a,b,c):a)}return P.hJ(a,b,c)},
hJ:function(a,b,c){var z,y,x
H.y(a,"$isi",[P.z],"$asi")
z=J.bs(a)
for(y=0;y<b;++y)if(!z.A())throw H.c(P.a6(b,0,y,null,null))
x=[]
for(;z.A();)x.push(z.gK(z))
return H.dH(x)},
hk:function(a,b,c){return new H.fE(a,H.fF(a,!1,!0,!1))},
jA:function(a,b,c,d){var z,y,x,w,v,u
H.y(a,"$isd",[P.z],"$asd")
if(c===C.q){z=$.$get$eB().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.dH(H.w(b,H.at(c,"cb",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hf(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.Z(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fr(a)},
N:function(a){return new P.em(a)},
cS:function(a){H.kl(a)},
ae:{"^":"a;"},
"+bool":0,
aa:{"^":"a;a,b",
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.aa))return!1
return this.a===b.a&&this.b===b.b},
gL:function(a){var z=this.a
return(z^C.e.aE(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fh(H.he(this))
y=P.bt(H.hc(this))
x=P.bt(H.h8(this))
w=P.bt(H.h9(this))
v=P.bt(H.hb(this))
u=P.bt(H.hd(this))
t=P.fi(H.ha(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
m:{
fh:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fi:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bt:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"P;"},
"+double":0,
aY:{"^":"a;a",
X:function(a,b){return C.e.X(this.a,H.j(b,"$isaY").a)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.aY))return!1
return this.a===b.a},
gL:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fm()
y=this.a
if(y<0)return"-"+new P.aY(0-y).i(0)
x=z.$1(C.e.ai(y,6e7)%60)
w=z.$1(C.e.ai(y,1e6)%60)
v=new P.fl().$1(y%1e6)
return""+C.e.ai(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
m:{
df:function(a,b,c,d,e,f){return new P.aY(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fl:{"^":"q:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fm:{"^":"q:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
R:{"^":"a;"},
dC:{"^":"R;",
i:function(a){return"Throw of null."}},
aj:{"^":"R;a,b,c,d",
gaP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaO:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gaP()+y+x
if(!this.a)return w
v=this.gaO()
u=P.bI(this.b)
return w+v+": "+H.f(u)},
m:{
f1:function(a){return new P.aj(!1,null,null,a)},
bF:function(a,b,c){return new P.aj(!0,a,b,c)},
cU:function(a){return new P.aj(!1,null,a,"Must not be null")}}},
bR:{"^":"aj;e,f,a,b,c,d",
gaP:function(){return"RangeError"},
gaO:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
m:{
bS:function(a,b,c){return new P.bR(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.bR(b,c,!0,a,d,"Invalid value")},
dI:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.c(P.a6(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.c(P.a6(b,a,c,"end",f))
return b}return c}}},
fy:{"^":"aj;e,j:f>,a,b,c,d",
gaP:function(){return"RangeError"},
gaO:function(){if(J.eX(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
m:{
E:function(a,b,c,d,e){var z=H.S(e!=null?e:J.aT(b))
return new P.fy(b,z,!0,a,c,"Index out of range")}}},
i8:{"^":"R;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
a7:function(a){return new P.i8(a)}}},
i5:{"^":"R;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
ef:function(a){return new P.i5(a)}}},
hD:{"^":"R;a",
i:function(a){return"Bad state: "+this.a}},
fd:{"^":"R;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bI(z))+"."},
m:{
aW:function(a){return new P.fd(a)}}},
h5:{"^":"a;",
i:function(a){return"Out of Memory"},
$isR:1},
dO:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isR:1},
fg:{"^":"R;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
em:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fw:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.b.aK(x,0,75)+"..."
return y+"\n"+x}},
z:{"^":"P;"},
"+int":0,
i:{"^":"a;$ti",
gj:function(a){var z,y
z=this.gN(this)
for(y=0;z.A();)++y
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.cU("index"))
if(b<0)H.Q(P.a6(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.A();){x=z.gK(z)
if(b===y)return x;++y}throw H.c(P.E(b,this,"index",null,y))},
i:function(a){return P.fz(this,"(",")")}},
cf:{"^":"a;$ti"},
d:{"^":"a;$ti",$isi:1},
"+List":0,
X:{"^":"a;$ti"},
A:{"^":"a;",
gL:function(a){return P.a.prototype.gL.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
P:{"^":"a;"},
"+num":0,
a:{"^":";",
n:function(a,b){return this===b},
gL:function(a){return H.b8(this)},
i:function(a){return"Instance of '"+H.aG(this)+"'"},
toString:function(){return this.i(this)}},
ad:{"^":"a;"},
k:{"^":"a;",$isdD:1},
"+String":0,
cr:{"^":"a;ad:a<",
gj:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
m:{
dR:function(a,b,c){var z=J.bs(b)
if(!z.A())return a
if(c.length===0){do a+=H.f(z.gK(z))
while(z.A())}else{a+=H.f(z.gK(z))
for(;z.A();)a=a+c+H.f(z.gK(z))}return a}}}}],["","",,W,{"^":"",
ca:function(a,b){var z=document.createElement("canvas")
return z},
fo:function(a){H.j(a,"$isa0")
return"wheel"},
bV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eo:function(a,b,c,d){var z,y
z=W.bV(W.bV(W.bV(W.bV(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eG:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.d)return a
return z.bS(a,b)},
b1:{"^":"U;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ku:{"^":"l;0j:length=","%":"AccessibleNodeList"},
kv:{"^":"b1;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kw:{"^":"b1;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
f5:{"^":"l;","%":";Blob"},
c9:{"^":"b1;",
aG:function(a,b,c){if(c!=null)return a.getContext(b,P.k_(c,null))
return a.getContext(b)},
ce:function(a,b){return this.aG(a,b,null)},
$isc9:1,
"%":"HTMLCanvasElement"},
d1:{"^":"l;",$isd1:1,"%":"CanvasRenderingContext2D"},
kC:{"^":"C;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kE:{"^":"ff;0j:length=","%":"CSSPerspective"},
aX:{"^":"l;",$isaX:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kF:{"^":"iB;0j:length=",
cf:function(a,b){var z=a.getPropertyValue(this.cH(a,b))
return z==null?"":z},
cH:function(a,b){var z,y
z=$.$get$d7()
y=z[b]
if(typeof y==="string")return y
y=this.dt(a,b)
z[b]=y
return y},
dt:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fj()+b
if(z in a)return z
return b},
gb4:function(a){return a.bottom},
ga2:function(a){return a.height},
gal:function(a){return a.left},
gbl:function(a){return a.right},
gaA:function(a){return a.top},
ga4:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fe:{"^":"a;",
gal:function(a){return this.cf(a,"left")}},
d8:{"^":"l;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ff:{"^":"l;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kG:{"^":"d8;0j:length=","%":"CSSTransformValue"},
kH:{"^":"d8;0j:length=","%":"CSSUnparsedValue"},
kI:{"^":"l;0j:length=","%":"DataTransferItemList"},
kJ:{"^":"l;",
i:function(a){return String(a)},
"%":"DOMException"},
kK:{"^":"iD;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.a3,P.P]]},
$aso:function(){return[[P.a3,P.P]]},
$isi:1,
$asi:function(){return[[P.a3,P.P]]},
$isd:1,
$asd:function(){return[[P.a3,P.P]]},
$asr:function(){return[[P.a3,P.P]]},
"%":"ClientRectList|DOMRectList"},
fk:{"^":"l;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga4(a))+" x "+H.f(this.ga2(a))},
n:function(a,b){var z
if(b==null)return!1
z=H.bp(b,"$isa3",[P.P],"$asa3")
if(!z)return!1
z=J.c1(b)
return a.left===z.gal(b)&&a.top===z.gaA(b)&&this.ga4(a)===z.ga4(b)&&this.ga2(a)===z.ga2(b)},
gL:function(a){return W.eo(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga4(a)&0x1FFFFFFF,this.ga2(a)&0x1FFFFFFF)},
gb4:function(a){return a.bottom},
ga2:function(a){return a.height},
gal:function(a){return a.left},
gbl:function(a){return a.right},
gaA:function(a){return a.top},
ga4:function(a){return a.width},
$isa3:1,
$asa3:function(){return[P.P]},
"%":";DOMRectReadOnly"},
kL:{"^":"iF;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.k]},
$aso:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$isd:1,
$asd:function(){return[P.k]},
$asr:function(){return[P.k]},
"%":"DOMStringList"},
kM:{"^":"l;0j:length=","%":"DOMTokenList"},
iA:{"^":"bN;a,b",
gj:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.j(z[b],"$isU")},
h:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var z=this.eu(this)
return new J.ak(z,z.length,0,[H.u(z,0)])},
$aso:function(){return[W.U]},
$asi:function(){return[W.U]},
$asd:function(){return[W.U]}},
U:{"^":"C;",
gbT:function(a){return new W.iA(a,a.children)},
gbU:function(a){return P.hh(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.P)},
i:function(a){return a.localName},
$isU:1,
"%":";Element"},
a_:{"^":"l;",$isa_:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a0:{"^":"l;",
bQ:["cl",function(a,b,c,d){H.b(c,{func:1,args:[W.a_]})
if(c!=null)this.cE(a,b,c,!1)}],
cE:function(a,b,c,d){return a.addEventListener(b,H.aP(H.b(c,{func:1,args:[W.a_]}),1),!1)},
$isa0:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eu|ev|ex|ey"},
aZ:{"^":"f5;",$isaZ:1,"%":"File"},
kN:{"^":"iK;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aZ]},
$aso:function(){return[W.aZ]},
$isi:1,
$asi:function(){return[W.aZ]},
$isd:1,
$asd:function(){return[W.aZ]},
$asr:function(){return[W.aZ]},
"%":"FileList"},
kO:{"^":"a0;0j:length=","%":"FileWriter"},
kP:{"^":"b1;0j:length=","%":"HTMLFormElement"},
b0:{"^":"l;",$isb0:1,"%":"Gamepad"},
kQ:{"^":"l;0j:length=","%":"History"},
kR:{"^":"iX;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.C]},
$aso:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isd:1,
$asd:function(){return[W.C]},
$asr:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bK:{"^":"l;0bW:data=",$isbK:1,"%":"ImageData"},
dj:{"^":"b1;",$isdj:1,"%":"HTMLImageElement"},
b3:{"^":"cw;",$isb3:1,"%":"KeyboardEvent"},
kV:{"^":"l;",
i:function(a){return String(a)},
"%":"Location"},
kW:{"^":"l;0j:length=","%":"MediaList"},
kX:{"^":"a0;",
bQ:function(a,b,c,d){H.b(c,{func:1,args:[W.a_]})
if(b==="message")a.start()
this.cl(a,b,c,!1)},
"%":"MessagePort"},
kY:{"^":"j3;",
k:function(a,b){return P.as(a.get(H.K(b)))},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.as(y.value[1]))}},
ga8:function(a){var z=H.e([],[P.k])
this.I(a,new W.fV(z))
return z},
gj:function(a){return a.size},
$asa4:function(){return[P.k,null]},
$isX:1,
$asX:function(){return[P.k,null]},
"%":"MIDIInputMap"},
fV:{"^":"q:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
kZ:{"^":"j4;",
k:function(a,b){return P.as(a.get(H.K(b)))},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.as(y.value[1]))}},
ga8:function(a){var z=H.e([],[P.k])
this.I(a,new W.fW(z))
return z},
gj:function(a){return a.size},
$asa4:function(){return[P.k,null]},
$isX:1,
$asX:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
fW:{"^":"q:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b4:{"^":"l;",$isb4:1,"%":"MimeType"},
l_:{"^":"j6;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b4]},
$aso:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$isd:1,
$asd:function(){return[W.b4]},
$asr:function(){return[W.b4]},
"%":"MimeTypeArray"},
ac:{"^":"cw;",$isac:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iz:{"^":"bN;a",
gN:function(a){var z=this.a.childNodes
return new W.dg(z,z.length,-1,[H.bq(C.I,z,"r",0)])},
gj:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$aso:function(){return[W.C]},
$asi:function(){return[W.C]},
$asd:function(){return[W.C]}},
C:{"^":"a0;",
i:function(a){var z=a.nodeValue
return z==null?this.cm(a):z},
$isC:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
h0:{"^":"j8;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.C]},
$aso:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isd:1,
$asd:function(){return[W.C]},
$asr:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
b7:{"^":"l;0j:length=",$isb7:1,"%":"Plugin"},
l8:{"^":"jc;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b7]},
$aso:function(){return[W.b7]},
$isi:1,
$asi:function(){return[W.b7]},
$isd:1,
$asd:function(){return[W.b7]},
$asr:function(){return[W.b7]},
"%":"PluginArray"},
la:{"^":"ji;",
k:function(a,b){return P.as(a.get(H.K(b)))},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.as(y.value[1]))}},
ga8:function(a){var z=H.e([],[P.k])
this.I(a,new W.hq(z))
return z},
gj:function(a){return a.size},
$asa4:function(){return[P.k,null]},
$isX:1,
$asX:function(){return[P.k,null]},
"%":"RTCStatsReport"},
hq:{"^":"q:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lc:{"^":"b1;0j:length=","%":"HTMLSelectElement"},
b9:{"^":"a0;",$isb9:1,"%":"SourceBuffer"},
ld:{"^":"ev;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b9]},
$aso:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$isd:1,
$asd:function(){return[W.b9]},
$asr:function(){return[W.b9]},
"%":"SourceBufferList"},
ba:{"^":"l;",$isba:1,"%":"SpeechGrammar"},
le:{"^":"jk;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ba]},
$aso:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$isd:1,
$asd:function(){return[W.ba]},
$asr:function(){return[W.ba]},
"%":"SpeechGrammarList"},
bb:{"^":"l;0j:length=",$isbb:1,"%":"SpeechRecognitionResult"},
lg:{"^":"jn;",
k:function(a,b){return a.getItem(H.K(b))},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga8:function(a){var z=H.e([],[P.k])
this.I(a,new W.hF(z))
return z},
gj:function(a){return a.length},
$asa4:function(){return[P.k,P.k]},
$isX:1,
$asX:function(){return[P.k,P.k]},
"%":"Storage"},
hF:{"^":"q:21;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bc:{"^":"l;",$isbc:1,"%":"CSSStyleSheet|StyleSheet"},
bd:{"^":"a0;",$isbd:1,"%":"TextTrack"},
be:{"^":"a0;",$isbe:1,"%":"TextTrackCue|VTTCue"},
lk:{"^":"jr;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.be]},
$aso:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asr:function(){return[W.be]},
"%":"TextTrackCueList"},
ll:{"^":"ey;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bd]},
$aso:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asr:function(){return[W.bd]},
"%":"TextTrackList"},
lm:{"^":"l;0j:length=","%":"TimeRanges"},
bf:{"^":"l;",$isbf:1,"%":"Touch"},
aI:{"^":"cw;",$isaI:1,"%":"TouchEvent"},
ln:{"^":"jx;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bf]},
$aso:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asr:function(){return[W.bf]},
"%":"TouchList"},
lo:{"^":"l;0j:length=","%":"TrackDefaultList"},
cw:{"^":"a_;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lr:{"^":"l;",
i:function(a){return String(a)},
"%":"URL"},
ls:{"^":"a0;0j:length=","%":"VideoTrackList"},
bj:{"^":"ac;",
gdM:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.a7("deltaY is not supported"))},
gdL:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.a7("deltaX is not supported"))},
$isbj:1,
"%":"WheelEvent"},
is:{"^":"a0;",
dk:function(a,b){return a.requestAnimationFrame(H.aP(H.b(b,{func:1,ret:-1,args:[P.P]}),1))},
cO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lx:{"^":"jE;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aX]},
$aso:function(){return[W.aX]},
$isi:1,
$asi:function(){return[W.aX]},
$isd:1,
$asd:function(){return[W.aX]},
$asr:function(){return[W.aX]},
"%":"CSSRuleList"},
ly:{"^":"fk;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
n:function(a,b){var z
if(b==null)return!1
z=H.bp(b,"$isa3",[P.P],"$asa3")
if(!z)return!1
z=J.c1(b)
return a.left===z.gal(b)&&a.top===z.gaA(b)&&a.width===z.ga4(b)&&a.height===z.ga2(b)},
gL:function(a){return W.eo(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga2:function(a){return a.height},
ga4:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lA:{"^":"jG;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b0]},
$aso:function(){return[W.b0]},
$isi:1,
$asi:function(){return[W.b0]},
$isd:1,
$asd:function(){return[W.b0]},
$asr:function(){return[W.b0]},
"%":"GamepadList"},
lB:{"^":"jI;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.C]},
$aso:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isd:1,
$asd:function(){return[W.C]},
$asr:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lC:{"^":"jK;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bb]},
$aso:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$asr:function(){return[W.bb]},
"%":"SpeechRecognitionResultList"},
lD:{"^":"jM;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bc]},
$aso:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asr:function(){return[W.bc]},
"%":"StyleSheetList"},
iG:{"^":"cq;a,b,c,$ti",
dZ:function(a,b,c,d){var z=H.u(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.O(this.a,this.b,a,!1,z)}},
lz:{"^":"iG;a,b,c,$ti"},
iH:{"^":"dQ;a,b,c,d,e,$ti",
dz:function(){var z=this.d
if(z!=null&&this.a<=0)J.eZ(this.b,this.c,z,!1)},
m:{
O:function(a,b,c,d,e){var z=c==null?null:W.eG(new W.iI(c),W.a_)
z=new W.iH(0,a,b,z,!1,[e])
z.dz()
return z}}},
iI:{"^":"q:7;a",
$1:function(a){return this.a.$1(H.j(a,"$isa_"))}},
r:{"^":"a;$ti",
gN:function(a){return new W.dg(a,this.gj(a),-1,[H.bq(this,a,"r",0)])}},
dg:{"^":"a;a,b,c,0d,$ti",
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.eY(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gK:function(a){return this.d}},
iB:{"^":"l+fe;"},
iC:{"^":"l+o;"},
iD:{"^":"iC+r;"},
iE:{"^":"l+o;"},
iF:{"^":"iE+r;"},
iJ:{"^":"l+o;"},
iK:{"^":"iJ+r;"},
iW:{"^":"l+o;"},
iX:{"^":"iW+r;"},
j3:{"^":"l+a4;"},
j4:{"^":"l+a4;"},
j5:{"^":"l+o;"},
j6:{"^":"j5+r;"},
j7:{"^":"l+o;"},
j8:{"^":"j7+r;"},
jb:{"^":"l+o;"},
jc:{"^":"jb+r;"},
ji:{"^":"l+a4;"},
eu:{"^":"a0+o;"},
ev:{"^":"eu+r;"},
jj:{"^":"l+o;"},
jk:{"^":"jj+r;"},
jn:{"^":"l+a4;"},
jq:{"^":"l+o;"},
jr:{"^":"jq+r;"},
ex:{"^":"a0+o;"},
ey:{"^":"ex+r;"},
jw:{"^":"l+o;"},
jx:{"^":"jw+r;"},
jD:{"^":"l+o;"},
jE:{"^":"jD+r;"},
jF:{"^":"l+o;"},
jG:{"^":"jF+r;"},
jH:{"^":"l+o;"},
jI:{"^":"jH+r;"},
jJ:{"^":"l+o;"},
jK:{"^":"jJ+r;"},
jL:{"^":"l+o;"},
jM:{"^":"jL+r;"}}],["","",,P,{"^":"",
k2:function(a){var z,y
z=J.B(a)
if(!!z.$isbK){y=z.gbW(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eA(a.data,a.height,a.width)},
k1:function(a){if(a instanceof P.eA)return{data:a.a,height:a.b,width:a.c}
return a},
as:function(a){var z,y,x,w,v
if(a==null)return
z=P.fK(P.k,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.K(y[w])
z.O(0,v,a[v])}return z},
k_:function(a,b){var z={}
a.I(0,new P.k0(z))
return z},
de:function(){var z=$.dd
if(z==null){z=J.c5(window.navigator.userAgent,"Opera",0)
$.dd=z}return z},
fj:function(){var z,y
z=$.da
if(z!=null)return z
y=$.db
if(y==null){y=J.c5(window.navigator.userAgent,"Firefox",0)
$.db=y}if(y)z="-moz-"
else{y=$.dc
if(y==null){y=!P.de()&&J.c5(window.navigator.userAgent,"Trident/",0)
$.dc=y}if(y)z="-ms-"
else z=P.de()?"-o-":"-webkit-"}$.da=z
return z},
eA:{"^":"a;bW:a>,b,c",$isbK:1},
k0:{"^":"q:12;a",
$2:function(a,b){this.a[a]=b}},
ft:{"^":"bN;a,b",
gaS:function(){var z,y,x
z=this.b
y=H.at(z,"o",0)
x=W.U
return new H.fS(new H.iq(z,H.b(new P.fu(),{func:1,ret:P.ae,args:[y]}),[y]),H.b(new P.fv(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.aT(this.gaS().a)},
k:function(a,b){var z=this.gaS()
return z.b.$1(J.cT(z.a,b))},
gN:function(a){var z=P.fO(this.gaS(),!1,W.U)
return new J.ak(z,z.length,0,[H.u(z,0)])},
$aso:function(){return[W.U]},
$asi:function(){return[W.U]},
$asd:function(){return[W.U]}},
fu:{"^":"q:23;",
$1:function(a){return!!J.B(H.j(a,"$isC")).$isU}},
fv:{"^":"q:24;",
$1:function(a){return H.W(H.j(a,"$isC"),"$isU")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jd:{"^":"a;$ti",
gbl:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.w(z+this.c,H.u(this,0))},
gb4:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.w(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
n:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bp(b,"$isa3",[P.P],"$asa3")
if(!z)return!1
z=this.a
y=J.c1(b)
x=y.gal(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaA(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.u(this,0)
if(H.w(z+this.c,w)===y.gbl(b)){if(typeof x!=="number")return x.B()
z=H.w(x+this.d,w)===y.gb4(b)}else z=!1}else z=!1}else z=!1
return z},
gL:function(a){var z,y,x,w,v
z=this.a
y=J.aC(z)
x=this.b
w=J.aC(x)
if(typeof z!=="number")return z.B()
v=H.u(this,0)
z=H.w(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.w(x+this.d,v)
return P.iY(P.bW(P.bW(P.bW(P.bW(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a3:{"^":"jd;al:a>,aA:b>,a4:c>,a2:d>,$ti",m:{
hh:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.X()
if(c<0)z=-c*0
else z=c
H.w(z,e)
if(typeof d!=="number")return d.X()
if(d<0)y=-d*0
else y=d
return new P.a3(a,b,z,H.w(y,e),[e])}}}}],["","",,P,{"^":"",bx:{"^":"l;",$isbx:1,"%":"SVGLength"},kU:{"^":"j_;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.k(a,b)},
$aso:function(){return[P.bx]},
$isi:1,
$asi:function(){return[P.bx]},
$isd:1,
$asd:function(){return[P.bx]},
$asr:function(){return[P.bx]},
"%":"SVGLengthList"},bA:{"^":"l;",$isbA:1,"%":"SVGNumber"},l6:{"^":"ja;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.k(a,b)},
$aso:function(){return[P.bA]},
$isi:1,
$asi:function(){return[P.bA]},
$isd:1,
$asd:function(){return[P.bA]},
$asr:function(){return[P.bA]},
"%":"SVGNumberList"},l9:{"^":"l;0j:length=","%":"SVGPointList"},lh:{"^":"jp;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.k(a,b)},
$aso:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$isd:1,
$asd:function(){return[P.k]},
$asr:function(){return[P.k]},
"%":"SVGStringList"},li:{"^":"U;",
gbT:function(a){return new P.ft(a,new W.iz(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bB:{"^":"l;",$isbB:1,"%":"SVGTransform"},lp:{"^":"jz;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.k(a,b)},
$aso:function(){return[P.bB]},
$isi:1,
$asi:function(){return[P.bB]},
$isd:1,
$asd:function(){return[P.bB]},
$asr:function(){return[P.bB]},
"%":"SVGTransformList"},iZ:{"^":"l+o;"},j_:{"^":"iZ+r;"},j9:{"^":"l+o;"},ja:{"^":"j9+r;"},jo:{"^":"l+o;"},jp:{"^":"jo+r;"},jy:{"^":"l+o;"},jz:{"^":"jy+r;"}}],["","",,P,{"^":"",kx:{"^":"l;0j:length=","%":"AudioBuffer"},ky:{"^":"iy;",
k:function(a,b){return P.as(a.get(H.K(b)))},
I:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.as(y.value[1]))}},
ga8:function(a){var z=H.e([],[P.k])
this.I(a,new P.f3(z))
return z},
gj:function(a){return a.size},
$asa4:function(){return[P.k,null]},
$isX:1,
$asX:function(){return[P.k,null]},
"%":"AudioParamMap"},f3:{"^":"q:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},kz:{"^":"a0;0j:length=","%":"AudioTrackList"},f4:{"^":"a0;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},l7:{"^":"f4;0j:length=","%":"OfflineAudioContext"},iy:{"^":"l+a4;"}}],["","",,P,{"^":"",cp:{"^":"l;",
ep:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.B(g)
if(!!z.$isbK)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.k1(g))
return}if(!!z.$isdj)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.f1("Incorrect number or type of arguments"))},
eo:function(a,b,c,d,e,f,g){return this.ep(a,b,c,d,e,f,g,null,null,null)},
$iscp:1,
"%":"WebGLRenderingContext"},hK:{"^":"l;",$ishK:1,"%":"WebGLTexture"},i3:{"^":"l;",$isi3:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lf:{"^":"jm;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return P.as(a.item(b))},
w:function(a,b){return this.k(a,b)},
$aso:function(){return[[P.X,,,]]},
$isi:1,
$asi:function(){return[[P.X,,,]]},
$isd:1,
$asd:function(){return[[P.X,,,]]},
$asr:function(){return[[P.X,,,]]},
"%":"SQLResultSetRowList"},jl:{"^":"l+o;"},jm:{"^":"jl+r;"}}],["","",,O,{"^":"",aD:{"^":"a;0a,0b,0c,0d,$ti",
br:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cj:function(a,b,c){var z={func:1,ret:-1,args:[P.z,[P.i,H.at(this,"aD",0)]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aH:function(a,b){return this.cj(a,null,b)},
de:function(a){H.y(a,"$isi",[H.at(this,"aD",0)],"$asi")
return!0},
cu:function(a,b){var z
H.y(b,"$isi",[H.at(this,"aD",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gj:function(a){return this.a.length},
gN:function(a){var z=this.a
return new J.ak(z,z.length,0,[H.u(z,0)])},
w:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.at(this,"aD",0)
H.w(b,z)
z=[z]
if(this.de(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cu(x,H.e([b],z))}},
$isi:1,
m:{
d4:function(a){var z=new O.aD([a])
z.br(a)
return z}}},cl:{"^":"a;0a,0b",
gj:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
cv:function(a){var z=this.b
if(!(z==null))z.t(a)},
ab:function(){return this.cv(null)},
ga9:function(a){var z=this.a
if(z.length>0)return C.a.gbe(z)
else return V.bz()},
c4:function(a){var z=this.a
if(a==null)C.a.h(z,V.bz())
else C.a.h(z,a)
this.ab()},
bk:function(){var z=this.a
if(z.length>0){z.pop()
this.ab()}}}}],["","",,E,{"^":"",c6:{"^":"a;"},au:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0P:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbo:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gp()
y.toString
x=H.b(this.gc2(),{func:1,ret:-1,args:[D.n]})
C.a.R(y.a,x)}y=this.c
if(y!=null){y=y.gp()
y.toString
x=H.b(this.gc2(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}w=new D.G("shape",z,this.c,this,[F.dM])
w.b=!0
this.Z(w)}},
sav:function(a){var z,y,x,w
if(!J.L(this.r,a)){z=this.r
if(z!=null){y=z.gp()
y.toString
x=H.b(this.gc1(),{func:1,ret:-1,args:[D.n]})
C.a.R(y.a,x)}if(a!=null){y=a.gp()
y.toString
x=H.b(this.gc1(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}this.r=a
w=new D.G("mover",z,a,this,[U.a1])
w.b=!0
this.Z(w)}},
an:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.ao(0,b,this):null
if(!J.L(y,this.x)){x=this.x
this.x=y
w=new D.G("matrix",x,y,this,[V.bO])
w.b=!0
this.Z(w)}for(z=this.y.a,z=new J.ak(z,z.length,0,[H.u(z,0)]);z.A();)z.d.an(0,b)},
am:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga9(z))
else C.a.h(z.a,y.l(0,z.ga9(z)))
z.ab()
a.c5(this.f)
z=a.dy
x=(z&&C.a).gbe(z)
if(x!=null&&this.d!=null)x.eh(a,this)
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.u(z,0)]);z.A();)z.d.am(a)
a.c3()
a.dx.bk()},
gp:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
Z:function(a){var z=this.z
if(!(z==null))z.t(a)},
S:function(){return this.Z(null)},
e6:[function(a){H.j(a,"$isn")
this.e=null
this.Z(a)},function(){return this.e6(null)},"f3","$1","$0","gc2",0,2,1],
e5:[function(a){this.Z(H.j(a,"$isn"))},function(){return this.e5(null)},"f2","$1","$0","gc1",0,2,1],
e3:[function(a){this.Z(H.j(a,"$isn"))},function(){return this.e3(null)},"f0","$1","$0","gc0",0,2,1],
f_:[function(a,b){var z,y,x,w,v,u,t
H.y(b,"$isi",[E.au],"$asi")
for(z=b.length,y=this.gc0(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gP()==null){t=new D.bu()
t.a=H.e([],w)
t.c=0
u.sP(t)}t=u.gP()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.S()},"$2","ge2",8,0,5],
f1:[function(a,b){var z,y,x,w,v,u,t
H.y(b,"$isi",[E.au],"$asi")
for(z=b.length,y=this.gc0(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gP()==null){t=new D.bu()
t.a=H.e([],w)
t.c=0
u.sP(t)}t=u.gP()
t.toString
H.b(y,x)
C.a.R(t.a,y)}}this.S()},"$2","ge4",8,0,5],
$isdz:1},hl:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
cq:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aa(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cl()
y=[V.bO]
z.a=H.e([],y)
x=z.gp()
x.toString
w={func:1,ret:-1,args:[D.n]}
v=H.b(new E.hn(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cl()
z.a=H.e([],y)
v=z.gp()
v.toString
x=H.b(new E.ho(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cl()
z.a=H.e([],y)
y=z.gp()
y.toString
w=H.b(new E.hp(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.ct])
this.dy=z
C.a.h(z,null)
this.fr=new H.aF(0,0,[P.k,A.dL])},
c5:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbe(z):a;(z&&C.a).h(z,y)},
c3:function(){var z=this.dy
if(z.length>1)z.pop()},
m:{
hm:function(a,b){var z=new E.hl(a,b)
z.cq(a,b)
return z}}},hn:{"^":"q:9;a",
$1:function(a){var z
H.j(a,"$isn")
z=this.a
z.z=null
z.ch=null}},ho:{"^":"q:9;a",
$1:function(a){var z
H.j(a,"$isn")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hp:{"^":"q:9;a",
$1:function(a){var z
H.j(a,"$isn")
z=this.a
z.ch=null
z.cx=null}},hN:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0P:x@,0y,0z,0Q,0ch",
gp:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
cz:[function(a){var z
H.j(a,"$isn")
z=this.x
if(!(z==null))z.t(a)
this.ej()},function(){return this.cz(null)},"cw","$1","$0","gbs",0,2,1],
gdS:function(){var z,y,x
z=Date.now()
y=C.e.ai(P.df(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aa(z,!1)
return x/y},
bJ:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.c.bc(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.c.bc(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.dW(C.l,this.gei())},
ej:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.hP(this),{func:1,ret:-1,args:[P.P]})
C.t.cO(z)
C.t.dk(z,W.eG(y,P.P))}},"$0","gei",0,0,3],
eg:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.bJ()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aa(w,!1)
x.y=P.df(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sj(w.a,0)
w.ab()
w=x.db
C.a.sj(w.a,0)
w.ab()
w=x.dx
C.a.sj(w.a,0)
w.ab()
w=x.dy;(w&&C.a).sj(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.am(this.e)}}catch(v){z=H.aB(v)
y=H.aR(v)
P.cS("Error: "+H.f(z))
P.cS("Stack: "+H.f(y))
throw H.c(z)}},
m:{
hO:function(a,b,c,d,e){var z,y,x,w
z=J.B(a)
if(!!z.$isc9)return E.dV(a,!0,!0,!0,!1)
y=W.ca(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbT(a).h(0,y)
w=E.dV(y,!0,!0,!0,!1)
w.a=a
return w},
dV:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hN()
y=P.fL(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
x=C.i.aG(a,"webgl",y)
x=H.j(x==null?C.i.aG(a,"experimental-webgl",y):x,"$iscp")
if(x==null)H.Q(P.N("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hm(x,a)
w=new T.hL(x)
w.b=H.S(x.getParameter(3379))
w.c=H.S(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.i9(a)
v=new X.fH()
v.c=new X.ag(!1,!1,!1)
v.d=P.fM(null,null,null,P.z)
w.b=v
v=new X.fX(w)
v.f=0
v.r=new V.M(0,0)
v.x=new V.M(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fP(w)
v.r=0
v.x=new V.M(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.hS(w)
v.e=0
v.f=new V.M(0,0)
v.r=new V.M(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.dQ,P.a]])
w.z=v
u=document
t=W.ac
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.O(u,"contextmenu",H.b(w.gd1(),s),!1,t))
v=w.z
r=W.a_
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.O(a,"focus",H.b(w.gd4(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.O(a,"blur",H.b(w.gcZ(),q),!1,r))
v=w.z
p=W.b3
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.O(u,"keyup",H.b(w.gd6(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.O(u,"keydown",H.b(w.gd5(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.O(a,"mousedown",H.b(w.gd8(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.O(a,"mouseup",H.b(w.gda(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.O(a,"mousemove",H.b(w.gd9(),s),!1,t))
p=w.z
o=W.bj;(p&&C.a).h(p,W.O(a,H.K(W.fo(a)),H.b(w.gdc(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.O(u,"mousemove",H.b(w.gd2(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.O(u,"mouseup",H.b(w.gd3(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.O(u,"pointerlockchange",H.b(w.gdd(),q),!1,r))
r=w.z
q=W.aI
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.O(a,"touchstart",H.b(w.gdi(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.O(a,"touchend",H.b(w.gdg(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.O(a,"touchmove",H.b(w.gdh(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aa(Date.now(),!1)
z.ch=0
z.bJ()
return z}}},hP:{"^":"q:26;a",
$1:function(a){var z
H.kk(a)
z=this.a
if(z.z){z.z=!1
z.eg()}}}}],["","",,Z,{"^":"",ek:{"^":"a;a,b",m:{
cB:function(a,b,c){var z
H.y(c,"$isd",[P.z],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bY(c)),35044)
a.bindBuffer(b,null)
return new Z.ek(b,z)}}},cY:{"^":"c6;a,b,c,d,e",
b2:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aB(y)
x=P.N('Failed to bind buffer attribute "'+J.Z(this.a)+'": '+H.f(z))
throw H.c(x)}},
i:function(a){return"["+J.Z(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},ip:{"^":"a;a",$iskA:1},cZ:{"^":"a;a,0b,c,d",
at:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b2:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b2(a)},
ex:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
am:function(a){var z,y,x,w,v
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
z=[P.k]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.Z(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.v(y,", ")+"\nAttrs:   "+C.a.v(u,", ")},
$islj:1},bL:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aG(this.c)+"'")+"]"}},bg:{"^":"a;a",
gbp:function(a){var z,y
z=this.a
y=(z&$.$get$ao().a)!==0?3:0
if((z&$.$get$an().a)!==0)y+=3
if((z&$.$get$am().a)!==0)y+=3
if((z&$.$get$ap().a)!==0)y+=2
if((z&$.$get$aq().a)!==0)y+=3
if((z&$.$get$bh().a)!==0)y+=3
if((z&$.$get$bi().a)!==0)y+=4
if((z&$.$get$aL().a)!==0)++y
return(z&$.$get$aK().a)!==0?y+4:y},
dB:function(a){var z,y,x
z=$.$get$ao()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$an()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$am()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ap()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aq()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bh()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bi()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ej()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bg))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.k])
y=this.a
if((y&$.$get$ao().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$an().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$am().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$ap().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aq().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bh().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bi().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aK().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.v(z,"|")},
m:{
a8:function(a){return new Z.bg(a)}}}}],["","",,D,{"^":"",d2:{"^":"a;"},bu:{"^":"a;0a,0b,0c",
t:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.n(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.I(y,new D.fs(z))
return x!==0},
dO:function(){return this.t(null)},
ek:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.t(y)}}},
aa:function(a){return this.ek(a,!0,!1)},
m:{
D:function(){var z=new D.bu()
z.a=H.e([],[{func:1,ret:-1,args:[D.n]}])
z.c=0
return z}}},fs:{"^":"q:27;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.n]})
z=this.a.a
z.b
a.$1(z)}},n:{"^":"a;a,0b"},dk:{"^":"n;c,d,a,0b,$ti"},dl:{"^":"n;c,d,a,0b,$ti"},G:{"^":"n;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",d_:{"^":"a;a,b",
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d_))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)},
m:{"^":"kB<"}},dq:{"^":"a;a,b",
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dq))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},dr:{"^":"n;c,a,0b"},fH:{"^":"a;0a,0b,0c,0d",
ec:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dr(a,this)
y.b=!0
return z.t(y)},
e8:function(a){var z,y
this.c=a.b
this.d.R(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dr(a,this)
y.b=!0
return z.t(y)}},dv:{"^":"bQ;x,y,c,d,e,a,0b"},fP:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
a6:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aa(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.M(y.a+x*w,y.b+v*u)
u=this.a.gak()
s=new X.b5(a,new V.M(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bj:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.t(this.a6(a,b))
return!0},
ax:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ci()
if(typeof z!=="number")return z.cc()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.t(this.a6(a,b))
return!0},
aw:function(a,b){var z=this.d
if(z==null)return!1
z.t(this.a6(a,b))
return!0},
ed:function(a){var z,y,x,w,v,u,t,s
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
w=new X.cm(new V.I(v*u,t*s),y,x,new P.aa(w,!1),this)
w.b=!0
z.t(w)
return!0},
d7:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aa(Date.now(),!1)
y=this.f
x=new X.dv(c,a,this.a.gak(),b,z,this)
x.b=!0
y.t(x)
this.y=z
this.x=new V.M(0,0)}},ag:{"^":"a;a,b,c",
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ag))return!1
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
return z+(this.c?"Shift+":"")}},b5:{"^":"bQ;x,y,z,Q,ch,c,d,e,a,0b"},fX:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
aQ:function(a,b,c){var z,y,x
z=new P.aa(Date.now(),!1)
y=this.a.gak()
x=new X.b5(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bj:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.t(this.aQ(a,b,!0))
return!0},
ax:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ci()
if(typeof z!=="number")return z.cc()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.t(this.aQ(a,b,!0))
return!0},
aw:function(a,b){var z=this.d
if(z==null)return!1
z.t(this.aQ(a,b,!1))
return!0},
ee:function(a,b){var z,y,x,w,v,u,t
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
x=new X.cm(new V.I(w*v,u*t),y,b,new P.aa(x,!1),this)
x.b=!0
z.t(x)
return!0},
gbX:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
gcb:function(){var z=this.c
if(z==null){z=D.D()
this.c=z}return z},
gc_:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z}},cm:{"^":"bQ;x,c,d,e,a,0b"},bQ:{"^":"n;"},e_:{"^":"bQ;x,y,z,Q,ch,c,d,e,a,0b"},hS:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
a6:function(a,b){var z,y,x,w
H.y(a,"$isd",[V.M],"$asd")
z=new P.aa(Date.now(),!1)
y=a.length>0?a[0]:new V.M(0,0)
x=this.a.gak()
w=new X.e_(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
eb:function(a){var z
H.y(a,"$isd",[V.M],"$asd")
z=this.b
if(z==null)return!1
z.t(this.a6(a,!0))
return!0},
e9:function(a){var z
H.y(a,"$isd",[V.M],"$asd")
z=this.c
if(z==null)return!1
z.t(this.a6(a,!0))
return!0},
ea:function(a){var z
H.y(a,"$isd",[V.M],"$asd")
z=this.d
if(z==null)return!1
z.t(this.a6(a,!1))
return!0}},i9:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gak:function(){var z=this.a
return V.dK(0,0,(z&&C.i).gbU(z).c,C.i.gbU(z).d)},
bE:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dq(z,new X.ag(y,a.altKey,a.shiftKey))},
ah:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ag(y,a.altKey,a.shiftKey)},
b1:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ag(y,a.altKey,a.shiftKey)},
a7:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.D()
v=z.top
if(typeof x!=="number")return x.D()
return new V.M(y-w,x-v)},
aq:function(a){return new V.I(a.movementX,a.movementY)},
aZ:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.M])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.c.a_(u.pageX)
C.c.a_(u.pageY)
s=z.left
C.c.a_(u.pageX)
C.a.h(y,new V.M(t-s,C.c.a_(u.pageY)-z.top))}return y},
a5:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.d_(z,new X.ag(y,a.altKey,a.shiftKey))},
aT:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.D()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.D()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
eL:[function(a){this.f=!0},"$1","gd4",4,0,7],
eF:[function(a){this.f=!1},"$1","gcZ",4,0,7],
eI:[function(a){H.j(a,"$isac")
if(this.f&&this.aT(a))a.preventDefault()},"$1","gd1",4,0,4],
eN:[function(a){var z
H.j(a,"$isb3")
if(!this.f)return
z=this.bE(a)
if(this.b.ec(z))a.preventDefault()},"$1","gd6",4,0,16],
eM:[function(a){var z
H.j(a,"$isb3")
if(!this.f)return
z=this.bE(a)
if(this.b.e8(z))a.preventDefault()},"$1","gd5",4,0,16],
eO:[function(a){var z,y,x,w
H.j(a,"$isac")
z=this.a
z.focus()
this.f=!0
this.ah(a)
if(this.x){y=this.a5(a)
x=this.aq(a)
if(this.d.bj(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a5(a)
w=this.a7(a)
if(this.c.bj(y,w))a.preventDefault()},"$1","gd8",4,0,4],
eQ:[function(a){var z,y,x
H.j(a,"$isac")
this.ah(a)
z=this.a5(a)
if(this.x){y=this.aq(a)
if(this.d.ax(z,y))a.preventDefault()
return}if(this.r)return
x=this.a7(a)
if(this.c.ax(z,x))a.preventDefault()},"$1","gda",4,0,4],
eK:[function(a){var z,y,x
H.j(a,"$isac")
if(!this.aT(a)){this.ah(a)
z=this.a5(a)
if(this.x){y=this.aq(a)
if(this.d.ax(z,y))a.preventDefault()
return}if(this.r)return
x=this.a7(a)
if(this.c.ax(z,x))a.preventDefault()}},"$1","gd3",4,0,4],
eP:[function(a){var z,y,x
H.j(a,"$isac")
this.ah(a)
z=this.a5(a)
if(this.x){y=this.aq(a)
if(this.d.aw(z,y))a.preventDefault()
return}if(this.r)return
x=this.a7(a)
if(this.c.aw(z,x))a.preventDefault()},"$1","gd9",4,0,4],
eJ:[function(a){var z,y,x
H.j(a,"$isac")
if(!this.aT(a)){this.ah(a)
z=this.a5(a)
if(this.x){y=this.aq(a)
if(this.d.aw(z,y))a.preventDefault()
return}if(this.r)return
x=this.a7(a)
if(this.c.aw(z,x))a.preventDefault()}},"$1","gd2",4,0,4],
eR:[function(a){var z,y
H.j(a,"$isbj")
this.ah(a)
z=new V.I((a&&C.r).gdL(a),C.r.gdM(a)).u(0,180)
if(this.x){if(this.d.ed(z))a.preventDefault()
return}if(this.r)return
y=this.a7(a)
if(this.c.ee(z,y))a.preventDefault()},"$1","gdc",4,0,29],
eS:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a5(this.y)
v=this.a7(this.y)
this.d.d7(w,v,x)}},"$1","gdd",4,0,7],
eW:[function(a){var z
H.j(a,"$isaI")
this.a.focus()
this.f=!0
this.b1(a)
z=this.aZ(a)
if(this.e.eb(z))a.preventDefault()},"$1","gdi",4,0,10],
eU:[function(a){var z
H.j(a,"$isaI")
this.b1(a)
z=this.aZ(a)
if(this.e.e9(z))a.preventDefault()},"$1","gdg",4,0,10],
eV:[function(a){var z
H.j(a,"$isaI")
this.b1(a)
z=this.aZ(a)
if(this.e.ea(z))a.preventDefault()},"$1","gdh",4,0,10]}}],["","",,V,{"^":"",
kD:[function(a,b){if(typeof b!=="number")return b.D()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","fU",8,0,28],
kt:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.cg(a-b,z)
return(a<0?a+z:a)+b},
H:function(a,b,c){if(a==null)return C.b.W("null",c)
return C.b.W(C.c.ca($.m.$2(a,0)?0:a,b),c+b+1)},
aQ:function(a,b,c){var z,y,x,w,v,u
H.y(a,"$isd",[P.t],"$asd")
z=H.e([],[P.k])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.H(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.O(z,u,C.b.W(z[u],x))}return z},
cR:function(a,b){return C.c.es(Math.pow(b,C.y.bc(Math.log(H.jZ(a))/Math.log(b))))},
aV:{"^":"a;a,b,c,d",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aV))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}},
dy:{"^":"a;a,b,c,d,e,f,r,x,y",
ay:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dy))return!1
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
y=V.aQ(H.e([this.a,this.d,this.r],z),3,0)
x=V.aQ(H.e([this.b,this.e,this.x],z),3,0)
w=V.aQ(H.e([this.c,this.f,this.y],z),3,0)
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
bO:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ay:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
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
return V.al(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bO))return!1
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
i:function(a){return this.E()},
bY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.aQ(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.aQ(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.aQ(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.aQ(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
q:function(a){return this.bY(a,3,0)},
E:function(){return this.bY("",3,0)},
m:{
al:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bz:function(){return V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
M:{"^":"a;a,b",
D:function(a,b){return new V.M(this.a-b.a,this.b-b.b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
bP:{"^":"a;a,b,c",
D:function(a,b){return new V.bP(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bP))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}},
dF:{"^":"a;a,b,c,d",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dF))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}},
dJ:{"^":"a;a,b,c,d",
gU:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dJ))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"},
m:{
dK:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dJ(a,b,c,d)}}},
I:{"^":"a;a,b",
dX:[function(a){return Math.sqrt(this.C(this))},"$0","gj",1,0,17],
C:function(a){var z,y,x,w
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
return new V.I(z*b,y*b)},
u:function(a,b){var z,y
if($.m.$2(b,0))return new V.I(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.I(z/b,y/b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
J:{"^":"a;a,b,c",
dX:[function(a){return Math.sqrt(this.C(this))},"$0","gj",1,0,17],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bf:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.J(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
as:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.J(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a){return new V.J(-this.a,-this.b,-this.c)},
u:function(a,b){if($.m.$2(b,0))return new V.J(0,0,0)
return new V.J(this.a/b,this.b/b,this.c/b)},
bZ:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fc:{"^":"d2;0a,0b,0c,0d,0e,0f,0r,0x,0y",
aL:function(a){var z=V.kt(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
H:function(a){var z=this.y
if(!(z==null))z.t(a)},
sbn:function(a,b){},
sbg:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.aL(z)}z=new D.G("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.H(z)}},
sbi:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.aL(z)}z=new D.G("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.H(z)}},
sT:function(a,b){var z,y
b=this.aL(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.G("location",y,b,this,[P.t])
z.b=!0
this.H(z)}},
sbh:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.G("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.H(z)}},
sJ:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.G("velocity",x,a,this,[P.t])
z.b=!0
this.H(z)}},
sba:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.G("dampening",y,a,this,[P.t])
z.b=!0
this.H(z)}},
an:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sT(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sJ(y)}},
m:{
cc:function(){var z=new U.fc()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},d5:{"^":"a1;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
ao:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d5))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")}},di:{"^":"aD;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
H:[function(a){var z
H.j(a,"$isn")
z=this.e
if(!(z==null))z.t(a)},function(){return this.H(null)},"Y","$1","$0","gag",0,2,1],
eE:[function(a,b){var z,y,x,w,v,u,t
z=U.a1
H.y(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gag(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.dk(a,b,this,[z])
z.b=!0
this.H(z)},"$2","gcY",8,0,18],
eT:[function(a,b){var z,y,x,w,v,u,t
z=U.a1
H.y(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gag(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.b(x,w)
C.a.R(t.a,x)}}z=new D.dl(a,b,this,[z])
z.b=!0
this.H(z)},"$2","gdf",8,0,18],
ao:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.X()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ak(z,z.length,0,[H.u(z,0)]),x=null;z.A();){y=z.d
if(y!=null){w=y.ao(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.bz():x
z=this.e
if(!(z==null))z.aa(0)}return this.f},
n:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.di))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.L(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.a1]},
$asaD:function(){return[U.a1]},
$isa1:1},a1:{"^":"d2;"},ia:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
H:[function(a){var z
H.j(a,"$isn")
z=this.cy
if(!(z==null))z.t(a)},function(){return this.H(null)},"Y","$1","$0","gag",0,2,1],
ar:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gbX()
z.toString
y={func:1,ret:-1,args:[D.n]}
x=H.b(this.gaU(),y)
C.a.h(z.a,x)
x=this.a.c.gc_()
x.toString
z=H.b(this.gaV(),y)
C.a.h(x.a,z)
z=this.a.c.gcb()
z.toString
y=H.b(this.gaW(),y)
C.a.h(z.a,y)
return!0},
cU:[function(a){H.j(a,"$isn")
if(!J.L(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gaU",4,0,0],
cV:[function(a){var z,y,x,w,v,u,t
a=H.W(H.j(a,"$isn"),"$isb5")
if(!this.y)return
if(this.x){z=a.d.D(0,a.y)
z=new V.I(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.D(0,a.y)
z=new V.I(y.a,y.b).l(0,2).u(0,z.gU())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sJ(z*10*x)}else{z=a.c
y=a.d
x=y.D(0,a.y)
w=new V.I(x.a,x.b).l(0,2).u(0,z.gU())
x=this.b
v=w.a
if(typeof v!=="number")return v.G()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sT(0,-v*u+t)
this.b.sJ(0)
y=y.D(0,a.z)
this.Q=new V.I(y.a,y.b).l(0,2).u(0,z.gU())}this.Y()},"$1","gaV",4,0,0],
cW:[function(a){var z,y,x
H.j(a,"$isn")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sJ(y*10*x)
this.Y()}},"$1","gaW",4,0,0],
ao:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.X()
if(z<y){this.ch=y
x=b.y
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.al(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa1:1},ib:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
H:[function(a){var z
H.j(a,"$isn")
z=this.fx
if(!(z==null))z.t(a)},function(){return this.H(null)},"Y","$1","$0","gag",0,2,1],
ar:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gbX()
z.toString
y={func:1,ret:-1,args:[D.n]}
x=H.b(this.gaU(),y)
C.a.h(z.a,x)
x=this.a.c.gc_()
x.toString
z=H.b(this.gaV(),y)
C.a.h(x.a,z)
z=this.a.c.gcb()
z.toString
x=H.b(this.gaW(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.D()
x.f=z}x=H.b(this.gcR(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gcS(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.D()
x.b=z}x=H.b(this.gdw(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gdv(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.D()
x.c=z}y=H.b(this.gdu(),y)
C.a.h(z.a,y)
return!0},
a1:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.G()
z=-z}if(this.r){if(typeof y!=="number")return y.G()
y=-y}return new V.I(z,y)},
cU:[function(a){a=H.W(H.j(a,"$isn"),"$isb5")
if(!J.L(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gaU",4,0,0],
cV:[function(a){var z,y,x,w,v,u,t
a=H.W(H.j(a,"$isn"),"$isb5")
if(!this.cx)return
if(this.ch){z=a.d.D(0,a.y)
z=new V.I(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.D(0,a.y)
z=this.a1(new V.I(y.a,y.b).l(0,2).u(0,z.gU()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.G()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sJ(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.G()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sJ(-z*10*y)}else{z=a.c
y=a.d
x=y.D(0,a.y)
w=this.a1(new V.I(x.a,x.b).l(0,2).u(0,z.gU()))
x=this.c
v=w.a
if(typeof v!=="number")return v.G()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.G()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sT(0,-u*v+x)
this.b.sJ(0)
this.c.sJ(0)
y=y.D(0,a.z)
this.dx=this.a1(new V.I(y.a,y.b).l(0,2).u(0,z.gU()))}this.Y()},"$1","gaV",4,0,0],
cW:[function(a){var z,y,x
H.j(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.G()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sJ(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.G()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sJ(-y*10*z)
this.Y()}},"$1","gaW",4,0,0],
eB:[function(a){if(H.W(H.j(a,"$isn"),"$isdv").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gcR",4,0,0],
eC:[function(a){var z,y,x,w,v,u,t
a=H.W(H.j(a,"$isn"),"$isb5")
if(!J.L(this.d,a.x.b))return
z=a.c
y=a.d
x=y.D(0,a.y)
w=this.a1(new V.I(x.a,x.b).l(0,2).u(0,z.gU()))
x=this.c
v=w.a
if(typeof v!=="number")return v.G()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.G()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sT(0,-u*v+x)
this.b.sJ(0)
this.c.sJ(0)
y=y.D(0,a.z)
this.dx=this.a1(new V.I(y.a,y.b).l(0,2).u(0,z.gU()))
this.Y()},"$1","gcS",4,0,0],
eZ:[function(a){H.j(a,"$isn")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gdw",4,0,0],
eY:[function(a){var z,y,x,w,v,u,t
a=H.W(H.j(a,"$isn"),"$ise_")
if(!this.cx)return
if(this.ch){z=a.d.D(0,a.y)
z=new V.I(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.D(0,a.y)
z=this.a1(new V.I(y.a,y.b).l(0,2).u(0,z.gU()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.G()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sJ(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.G()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sJ(-z*10*y)}else{z=a.c
y=a.d
x=y.D(0,a.y)
w=this.a1(new V.I(x.a,x.b).l(0,2).u(0,z.gU()))
x=this.c
v=w.a
if(typeof v!=="number")return v.G()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.G()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sT(0,-u*v+x)
this.b.sJ(0)
this.c.sJ(0)
y=y.D(0,a.z)
this.dx=this.a1(new V.I(y.a,y.b).l(0,2).u(0,z.gU()))}this.Y()},"$1","gdv",4,0,0],
eX:[function(a){var z,y,x
H.j(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.G()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sJ(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.G()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sJ(-y*10*z)
this.Y()}},"$1","gdu",4,0,0],
ao:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.X()
if(z<y){this.dy=y
x=b.y
this.c.an(0,x)
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.al(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.al(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa1:1},ic:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
H:function(a){var z=this.r
if(!(z==null))z.t(a)},
ar:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.D()
z.e=y
z=y}else z=y
y=H.b(this.gcX(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.D()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
eD:[function(a){var z,y,x,w
H.j(a,"$isn")
if(!J.L(this.b,this.a.b.c))return
H.W(a,"$iscm")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.G("zoom",z,w,this,[P.t])
z.b=!0
this.H(z)}},"$1","gcX",4,0,0],
ao:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.al(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa1:1}}],["","",,M,{"^":"",fq:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ac:[function(a){var z
H.j(a,"$isn")
z=this.x
if(!(z==null))z.t(a)},function(){return this.ac(null)},"ey","$1","$0","ga0",0,2,1],
eG:[function(a,b){var z,y,x,w,v,u,t,s
z=E.au
H.y(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga0(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gP()==null){s=new D.bu()
s.a=H.e([],v)
s.c=0
t.sP(s)}s=t.gP()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.dk(a,b,this,[z])
z.b=!0
this.ac(z)},"$2","gd_",8,0,5],
eH:[function(a,b){var z,y,x,w,v,u,t,s
z=E.au
H.y(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga0(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gP()==null){s=new D.bu()
s.a=H.e([],v)
s.c=0
t.sP(s)}s=t.gP()
s.toString
H.b(x,w)
C.a.R(s.a,x)}}z=new D.dl(a,b,this,[z])
z.b=!0
this.ac(z)},"$2","gd0",8,0,5],
sc7:function(a,b){var z,y,x
if(b==null)b=X.dh(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.b(this.ga0(),{func:1,ret:-1,args:[D.n]})
C.a.R(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.b(this.ga0(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)
z=new D.G("target",x,this.b,this,[X.dS])
z.b=!0
this.ac(z)}},
sc8:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.b(this.ga0(),{func:1,ret:-1,args:[D.n]})
C.a.R(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.b(this.ga0(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G("technique",x,this.c,this,[O.ct])
z.b=!0
this.ac(z)}},
gp:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
am:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.c5(this.c)
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
u=C.c.a_(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.c.a_(v.b*w)
s=C.c.a_(v.c*x)
a.c=s
v=C.c.a_(v.d*w)
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
n=V.al(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.c4(n)
y=$.dE
if(y==null){y=new V.J(0,0,-1)
m=y.u(0,Math.sqrt(y.C(y)))
y=new V.J(0,1,0).as(m)
l=y.u(0,Math.sqrt(y.C(y)))
k=m.as(l)
j=new V.J(0,0,0)
y=V.al(l.a,k.a,m.a,l.G(0).C(j),l.b,k.b,m.b,k.G(0).C(j),l.c,k.c,m.c,m.G(0).C(j),0,0,0,1)
$.dE=y
i=y}else i=y
z=z.b
if(z!=null){h=z.a
if(h!=null)i=h.l(0,i)}a.db.c4(i)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.u(z,0)]);z.A();)z.d.an(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.u(z,0)]);z.A();)z.d.am(a)
this.a.toString
a.cy.bk()
a.db.bk()
this.b.toString
a.c3()},
$islb:1}}],["","",,A,{"^":"",cV:{"^":"a;a,b,c"},f2:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
dP:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dN:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},h2:{"^":"dL;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r"},h3:{"^":"a;a,b,c,d,e,f",
i:function(a){return this.e},
m:{
dA:function(a){var z,y,x,w,v,u,t
z=a!==C.f
y=a===C.j
x=a===C.h
w="Normal_"+C.e.i(a.a)
v=$.$get$ao()
u=$.$get$an()
u=v.a|u.a
t=new Z.bg(u)
if(z)t=new Z.bg(u|$.$get$am().a)
if(y)t=new Z.bg(t.a|$.$get$ap().a)
return new A.h3(a,z,y,x,w,x?new Z.bg(t.a|$.$get$aq().a):t)}}},dL:{"^":"c6;",
cs:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
bF:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eK(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.c(P.N("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
dn:function(){var z,y,x,w,v,u
z=H.e([],[A.cV])
y=this.a
x=H.S(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.cV(y,v.name,u))}this.f=new A.f2(z)},
dr:function(){var z,y,x,w,v,u
z=H.e([],[A.Y])
y=this.a
x=H.S(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.dK(v.type,v.size,v.name,u))}this.r=new A.i2(z)},
ae:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.cx(z,y,b,c)
else return A.cy(z,y,b,a,c)},
cL:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ed(z,y,b,c)
else return A.cy(z,y,b,a,c)},
cM:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ee(z,y,b,c)
else return A.cy(z,y,b,a,c)},
aF:function(a,b){return new P.em(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
dK:function(a,b,c,d){switch(a){case 5120:return this.ae(b,c,d)
case 5121:return this.ae(b,c,d)
case 5122:return this.ae(b,c,d)
case 5123:return this.ae(b,c,d)
case 5124:return this.ae(b,c,d)
case 5125:return this.ae(b,c,d)
case 5126:return new A.hV(this.a,this.e,c,d)
case 35664:return new A.hX(this.a,this.e,c,d)
case 35665:return new A.hZ(this.a,this.e,c,d)
case 35666:return new A.i0(this.a,this.e,c,d)
case 35667:return new A.hY(this.a,this.e,c,d)
case 35668:return new A.i_(this.a,this.e,c,d)
case 35669:return new A.i1(this.a,this.e,c,d)
case 35674:return new A.i4(this.a,this.e,c,d)
case 35675:return new A.ec(this.a,this.e,c,d)
case 35676:return new A.bU(this.a,this.e,c,d)
case 35678:return this.cL(b,c,d)
case 35680:return this.cM(b,c,d)
case 35670:throw H.c(this.aF("BOOL",c))
case 35671:throw H.c(this.aF("BOOL_VEC2",c))
case 35672:throw H.c(this.aF("BOOL_VEC3",c))
case 35673:throw H.c(this.aF("BOOL_VEC4",c))
default:throw H.c(P.N("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},bH:{"^":"a;a,b",
i:function(a){return this.b}},Y:{"^":"a;"},i2:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
a3:function(a,b){var z=this.k(0,b)
if(z==null)throw H.c(P.N("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.E()},
dR:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
E:function(){return this.dR("\n")}},cx:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},hY:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},i_:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},i1:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},hW:{"^":"Y;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.f(this.c)},
m:{
cy:function(a,b,c,d,e){var z=new A.hW(a,b,c,e)
z.f=d
z.e=P.fN(d,0,!1,P.z)
return z}}},hV:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},hX:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},hZ:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},i0:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},i4:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},ec:{"^":"Y;a,b,c,d",
i:function(a){return"UniformMat3: "+H.f(this.c)}},bU:{"^":"Y;a,b,c,d",
aI:function(a){var z=new Float32Array(H.bY(H.y(a,"$isd",[P.t],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},ed:{"^":"Y;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},ee:{"^":"Y;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
bX:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bl:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.d=y}l=F.bX(y)
k=F.bX(z.b)
j=F.kq(d,e,new F.jN(z,F.bX(z.c),F.bX(z.d),k,l,c),b)
if(j!=null)a.e0(j)},
kq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aJ,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.dN()
y=H.e([],[F.aJ])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cA(null,null,new V.aV(u,0,0,1),null,null,new V.M(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.b9(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cA(null,null,new V.aV(o,n,m,1),null,null,new V.M(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.b9(d))}}z.d.dA(a+1,b+1,y)
return z},
jN:{"^":"q:31;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bf(z.b,b).bf(z.d.bf(z.c,b),c)
z=new V.bP(y.a,y.b,y.c)
if(!J.L(a.f,z)){a.f=z
z=a.a
if(z!=null)z.S()}a.seq(y.u(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
x=new V.dF(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.L(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.S()}}},
ab:{"^":"a;0a,0b,0c,0d,0e",
gbb:function(){return this.a==null||this.b==null||this.c==null},
cG:function(){var z,y,x,w,v
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
if(v.bZ())return
return v.u(0,Math.sqrt(v.C(v)))},
cJ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.D(0,y)
z=new V.J(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.C(z)))
z=w.D(0,y)
z=new V.J(z.a,z.b,z.c)
z=v.as(z.u(0,Math.sqrt(z.C(z))))
return z.u(0,Math.sqrt(z.C(z)))},
b7:function(){if(this.d!=null)return!0
var z=this.cG()
if(z==null){z=this.cJ()
if(z==null)return!1}this.d=z
this.a.a.S()
return!0},
cF:function(){var z,y,x,w,v
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
if(v.bZ())return
return v.u(0,Math.sqrt(v.C(v)))},
cI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.D(0,u)
z=new V.J(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.G(0)}else{l=(z-q.b)/n
z=r.D(0,u)
z=new V.bP(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).D(0,x)
z=new V.J(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.G(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.C(z)))
z=k.as(m)
z=z.u(0,Math.sqrt(z.C(z))).as(k)
m=z.u(0,Math.sqrt(z.C(z)))}return m},
b5:function(){if(this.e!=null)return!0
var z=this.cF()
if(z==null){z=this.cI()
if(z==null)return!1}this.e=z
this.a.a.S()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
q:function(a){var z,y
if(this.gbb())return a+"disposed"
z=a+C.b.W(J.Z(this.a.e),0)+", "+C.b.W(J.Z(this.b.e),0)+", "+C.b.W(J.Z(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
E:function(){return this.q("")},
m:{
bv:function(a,b,c){var z,y,x
z=new F.ab()
y=a.a
if(y==null)H.Q(P.N("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.Q(P.N("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.S()
return z}}},
ck:{"^":"a;0a,0b",
gbb:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
q:function(a){if(this.gbb())return a+"disposed"
return a+C.b.W(J.Z(this.a.e),0)+", "+C.b.W(J.Z(this.b.e),0)},
E:function(){return this.q("")}},
co:{"^":"a;0a",
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
q:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.W(J.Z(z.e),0)},
E:function(){return this.q("")}},
dM:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
e0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.M()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.dJ())}this.a.M()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.M()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.co()
if(r.a==null)H.Q(P.N("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.t(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.M()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.M()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.ck()
s=p.a
if(s==null)H.Q(P.N("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.Q(P.N("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.t(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.M()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.M()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.M()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bv(p,o,l)}z=this.e
if(!(z==null))z.aa(0)},
aj:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aj()||!1
if(!this.a.aj())y=!1
z=this.e
if(!(z==null))z.aa(0)
return y},
dD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$ao().a)!==0?1:0
if((y&$.$get$an().a)!==0)++x
if((y&$.$get$am().a)!==0)++x
if((y&$.$get$ap().a)!==0)++x
if((y&$.$get$aq().a)!==0)++x
if((y&$.$get$bh().a)!==0)++x
if((y&$.$get$bi().a)!==0)++x
if((y&$.$get$aL().a)!==0)++x
if((y&$.$get$aK().a)!==0)++x
w=b.gbp(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.t
t=H.e(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.e(y,[Z.cY])
for(r=0,q=0;q<x;++q){p=b.dB(q)
o=p.gbp(p)
C.a.O(s,q,new Z.cY(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].dY(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.O(t,l,m[k]);++l}}r+=o}H.y(t,"$isd",[u],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bY(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cZ(new Z.ek(34962,j),s,b)
i.b=H.e([],[Z.bL])
if(this.b.b.length!==0){u=P.z
h=H.e([],[u])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.M()
C.a.h(h,g.e)}f=Z.cB(y,34963,H.y(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.bL(0,h.length,f))}if(this.c.b.length!==0){u=P.z
h=H.e([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.M()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.M()
C.a.h(h,g.e)}f=Z.cB(y,34963,H.y(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.bL(1,h.length,f))}if(this.d.b.length!==0){u=P.z
h=H.e([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.M()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.M()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.M()
C.a.h(h,g.e)}f=Z.cB(y,34963,H.y(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.bL(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.k])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.q("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.q("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.q("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.q("   "))}return C.a.v(z,"\n")},
Z:function(a){var z=this.e
if(!(z==null))z.t(a)},
S:function(){return this.Z(null)},
m:{
dN:function(){var z,y
z=new F.dM()
y=new F.ig(z)
y.b=!1
y.c=H.e([],[F.aJ])
z.a=y
y=new F.hy(z)
y.b=H.e([],[F.co])
z.b=y
y=new F.hx(z)
y.b=H.e([],[F.ck])
z.c=y
y=new F.hw(z)
y.b=H.e([],[F.ab])
z.d=y
z.e=null
return z}}},
hw:{"^":"a;a,0b",
dA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.y(c,"$isd",[F.aJ],"$asd")
z=H.e([],[F.ab])
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
C.a.h(z,F.bv(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bv(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bv(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bv(q,n,r))}u=!u}w=!w}return z},
gj:function(a){return this.b.length},
aj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].b7())x=!1
return x},
b6:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].b5())x=!1
return x},
i:function(a){return this.E()},
q:function(a){var z,y,x,w
z=H.e([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].q(a))
return C.a.v(z,"\n")},
E:function(){return this.q("")}},
hx:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.E()},
q:function(a){var z,y,x,w
z=H.e([],[P.k])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].q(a+(""+x+". ")))}return C.a.v(z,"\n")},
E:function(){return this.q("")}},
hy:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.E()},
q:function(a){var z,y,x,w
z=H.e([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].q(a))
return C.a.v(z,"\n")},
E:function(){return this.q("")}},
aJ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
b9:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cA(this.cx,x,u,z,y,w,v,a,t)},
dJ:function(){return this.b9(null)},
seq:function(a){var z
if(!J.L(this.z,a)){this.z=a
z=this.a
if(z!=null)z.S()}},
dY:function(a){var z,y
z=J.B(a)
if(z.n(a,$.$get$ao())){z=this.f
y=[P.t]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.n(a,$.$get$an())){z=this.r
y=[P.t]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.n(a,$.$get$am())){z=this.x
y=[P.t]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.n(a,$.$get$ap())){z=this.y
y=[P.t]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.n(a,$.$get$aq())){z=this.z
y=[P.t]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.n(a,$.$get$bh())){z=this.Q
y=[P.t]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.n(a,$.$get$bi())){z=this.Q
y=[P.t]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.n(a,$.$get$aL()))return H.e([this.ch],[P.t])
else if(z.n(a,$.$get$aK())){z=this.cx
y=[P.t]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.t])},
b7:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.J(0,0,0)
this.d.I(0,new F.io(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.aa(0)}return!0},
b5:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.J(0,0,0)
this.d.I(0,new F.im(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.aa(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
q:function(a){var z,y,x
z=H.e([],[P.k])
C.a.h(z,C.b.W(J.Z(this.e),0))
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
C.a.h(z,V.H(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.v(z,", ")
return a+"{"+x+"}"},
E:function(){return this.q("")},
m:{
cA:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aJ()
y=new F.il(z)
y.b=H.e([],[F.co])
z.b=y
y=new F.ik(z)
x=[F.ck]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.ih(z)
x=[F.ab]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$eh()
z.e=0
y=$.$get$ao()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$an().a)!==0?e:null
z.x=(x&$.$get$am().a)!==0?b:null
z.y=(x&$.$get$ap().a)!==0?f:null
z.z=(x&$.$get$aq().a)!==0?g:null
z.Q=(x&$.$get$ei().a)!==0?c:null
z.ch=(x&$.$get$aL().a)!==0?i:0
z.cx=(x&$.$get$aK().a)!==0?a:null
return z}}},
io:{"^":"q:6;a",
$1:function(a){var z,y
H.j(a,"$isab")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
im:{"^":"q:6;a",
$1:function(a){var z,y
H.j(a,"$isab")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
ig:{"^":"a;a,0b,0c",
M:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.c(P.N("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.S()
return!0},
gj:function(a){return this.c.length},
aj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].b7()
return!0},
b6:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].b5()
return!0},
dE:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.L(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.t(null)}}}}return!0},
i:function(a){return this.E()},
q:function(a){var z,y,x,w
this.M()
z=H.e([],[P.k])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].q(a))
return C.a.v(z,"\n")},
E:function(){return this.q("")}},
ih:{"^":"a;a,0b,0c,0d",
gj:function(a){return this.b.length+this.c.length+this.d.length},
I:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ab]})
C.a.I(this.b,b)
C.a.I(this.c,new F.ii(this,b))
C.a.I(this.d,new F.ij(this,b))},
i:function(a){return this.E()},
q:function(a){var z,y,x,w
z=H.e([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].q(a))
return C.a.v(z,"\n")},
E:function(){return this.q("")}},
ii:{"^":"q:6;a,b",
$1:function(a){H.j(a,"$isab")
if(!J.L(a.a,this.a))this.b.$1(a)}},
ij:{"^":"q:6;a,b",
$1:function(a){var z
H.j(a,"$isab")
z=this.a
if(!J.L(a.a,z)&&!J.L(a.b,z))this.b.$1(a)}},
ik:{"^":"a;a,0b,0c",
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.E()},
q:function(a){var z,y,x,w
z=H.e([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].q(a))
return C.a.v(z,"\n")},
E:function(){return this.q("")}},
il:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.E()},
q:function(a){var z,y,x,w
z=H.e([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].q(a))
return C.a.v(z,"\n")},
E:function(){return this.q("")}}}],["","",,O,{"^":"",h1:{"^":"ct;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
bu:[function(a){var z
H.j(a,"$isn")
z=this.r
if(!(z==null))z.t(a)},function(){return this.bu(null)},"cA","$1","$0","gbt",0,2,1],
bK:function(a){},
bL:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gbt(),{func:1,ret:-1,args:[D.n]})
C.a.R(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gp()
z.toString
y=H.b(this.gbt(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G("bumpyTextureCube",x,this.f,this,[T.dU])
z.b=!0
this.bu(z)}},
by:function(a,b){H.y(a,"$isd",[T.cu],"$asd")
if(b!=null)if(!C.a.dF(a,b)){b.a=a.length
C.a.h(a,b)}},
eh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
if(z==null){y=A.dA(this.d)
z=y.e
x=a.fr.k(0,z)
if(x==null){w=a.a
x=new A.h2(w,z)
x.cs(w,z)
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
switch(r){case C.f:break
case C.k:break
case C.j:s+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.h:s+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}s+="\nvec3 normal()\n{\n"
if(r===C.f||r===C.k)s+="   return normalize(normalVec);\n"
else{s+="   if(nullBumpTxt > 0) return normalVec;\n"
s=(r===C.j?s+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":s+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}s+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
x.c=x.bF(u.charCodeAt(0)==0?u:u,35633)
x.d=x.bF(s.charCodeAt(0)==0?s:s,35632)
s=w.createProgram()
x.e=s
w.attachShader(s,x.c)
w.attachShader(x.e,x.d)
w.linkProgram(x.e)
if(!H.eK(w.getProgramParameter(x.e,35714))){q=w.getProgramInfoLog(x.e)
w.deleteProgram(x.e)
H.Q(P.N("Failed to link shader: "+H.f(q)))}x.dn()
x.dr()
x.y=x.f.k(0,"posAttr")
x.Q=x.f.k(0,"normAttr")
x.z=x.f.k(0,"binmAttr")
x.ch=x.f.k(0,"txt2DAttr")
x.cx=x.f.k(0,"txtCubeAttr")
x.cy=H.W(x.r.a3(0,"viewObjMat"),"$isbU")
x.db=H.W(x.r.a3(0,"projViewObjMat"),"$isbU")
if(v)x.dx=H.W(x.r.a3(0,"txt2DMat"),"$isec")
if(t)x.dy=H.W(x.r.a3(0,"txtCubeMat"),"$isbU")
switch(r){case C.f:break
case C.k:break
case C.j:x.fr=H.W(x.r.a3(0,"bumpTxt"),"$ised")
x.fy=H.W(x.r.a3(0,"nullBumpTxt"),"$iscx")
break
case C.h:x.fx=H.W(x.r.a3(0,"bumpTxt"),"$isee")
x.fy=H.W(x.r.a3(0,"nullBumpTxt"),"$iscx")
break}if(z.length===0)H.Q(P.N("May not cache a shader with no name."))
if(a.fr.bV(0,z))H.Q(P.N('Shader cache already contains a shader by the name "'+z+'".'))
a.fr.O(0,z,x)}this.a=x
b.e=null
z=x}y=z.x
p=y.f
z=b.e
if(!(z instanceof Z.cZ)){b.e=null
z=null}if(z==null||!z.d.n(0,p)){b.d.aj()
z=y.b
if(z){v=b.d
u=v.e
if(!(u==null))++u.c
v.d.b6()
v.a.b6()
v=v.e
if(!(v==null))v.aa(0)}v=y.d
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.a.dE()
u=u.e
if(!(u==null))u.aa(0)}o=b.d.dD(new Z.ip(a.a),p)
o.at($.$get$ao()).e=this.a.y.c
o.at($.$get$an()).e=this.a.Q.c
if(z)o.at($.$get$am()).e=this.a.z.c
if(y.c)o.at($.$get$ap()).e=this.a.ch.c
if(v)o.at($.$get$aq()).e=this.a.cx.c
b.e=o}n=H.e([],[T.cu])
z=this.a
a.a.useProgram(z.e)
z.f.dP()
z=this.a
v=a.cx
if(v==null){v=a.db
v=v.ga9(v)
u=a.dx
u=v.l(0,u.ga9(u))
a.cx=u
v=u}z=z.cy
z.toString
z.aI(v.ay(0,!0))
v=this.a
z=a.ch
if(z==null){z=a.z
if(z==null){z=a.cy
z=z.ga9(z)
u=a.db
u=z.l(0,u.ga9(u))
a.z=u
z=u}u=a.dx
u=z.l(0,u.ga9(u))
a.ch=u
z=u}v=v.db
v.toString
v.aI(z.ay(0,!0))
if(y.c){z=this.a
v=this.b
z=z.dx
z.toString
m=new Float32Array(H.bY(H.y(v.ay(0,!0),"$isd",[P.t],"$asd")))
z.a.uniformMatrix3fv(z.d,!1,m)}if(y.d){z=this.a
v=this.c
z=z.dy
z.toString
z.aI(v.ay(0,!0))}switch(y.a){case C.f:break
case C.k:break
case C.j:this.by(n,this.e)
z=this.a.fy
z.a.uniform1i(z.d,1)
break
case C.h:this.by(n,this.f)
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
z.b2(a)
z.am(a)
z.ex(a)
for(l=0;l<n.length;++l){z=n[l]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.dN()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return A.dA(this.d).e}},ct:{"^":"a;"}}],["","",,T,{"^":"",cu:{"^":"c6;"},dU:{"^":"cu;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z}},hL:{"^":"a;a,0b,0c,0d,0e",
af:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a_
W.O(z,"load",H.b(new T.hM(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dl:function(a,b,c){var z,y,x,w
b=V.cR(b,2)
z=V.cR(a.width,2)
y=V.cR(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.ca(null,null)
x.width=z
x.height=y
w=H.j(C.i.ce(x,"2d"),"$isd1")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.k2(w.getImageData(0,0,x.width,x.height))}}},hM:{"^":"q:19;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dl(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.J.eo(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.dO()}++z.e}}}],["","",,V,{"^":"",f0:{"^":"a;",
au:function(a,b){return!0},
i:function(a){return"all"},
$isby:1},by:{"^":"a;"},dx:{"^":"a;",
au:["co",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].au(0,b))return!0
return!1}],
i:["bq",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isby:1},b6:{"^":"dx;0a",
au:function(a,b){return!this.co(0,b)},
i:function(a){return"!["+this.bq(0)+"]"}},hu:{"^":"a;0a",
cr:function(a){var z,y
if(a.a.length<=0)throw H.c(P.N("May not create a SetMatcher with zero characters."))
z=new H.aF(0,0,[P.z,P.ae])
for(y=new H.du(a,a.gj(a),0,[H.at(a,"o",0)]);y.A();)z.O(0,y.d,!0)
this.a=z},
au:function(a,b){return this.a.bV(0,b)},
i:function(a){var z=this.a
return P.cs(new H.dt(z,[H.u(z,0)]),0,null)},
$isby:1,
m:{
V:function(a){var z=new V.hu()
z.cr(a)
return z}}},dP:{"^":"a;a,b,0c,0d",
ge1:function(a){return this.b},
v:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.e0(this.a.F(0,b))
w.a=H.e([],[V.by])
w.c=!1
C.a.h(this.c,w)
return w},
dQ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.au(0,a))return w}return},
i:function(a){return this.b}},dY:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.eV(this.b,"\n","\\n")
y=H.eV(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dZ:{"^":"a;a,b,0c",
i:function(a){return this.b}},hR:{"^":"a;0a,0b,0c",
F:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.dP(this,b)
z.c=H.e([],[V.e0])
this.a.O(0,b,z)}return z},
az:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.dZ(this,a)
y=P.k
z.c=new H.aF(0,0,[y,y])
this.b.O(0,a,z)}return z},
ew:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.dY])
y=this.c
x=[P.z]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.aB(a,t)
r=y.dQ(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cs(w,0,null)
throw H.c(P.N("Untokenizable string [state: "+y.ge1(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cs(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.dY(o==null?p.b:o,q,t)}++t}}}},e0:{"^":"dx;b,0c,0a",
i:function(a){return this.b.b+": "+this.bq(0)}}}],["","",,X,{"^":"",d0:{"^":"a;",$isdz:1},fx:{"^":"dS;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
m:{
dh:function(a,b,c,d,e,f,g){var z,y
z=new X.fx()
y=new V.aV(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.dK(0,0,1,1)
z.r=y
return z}}},h6:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
ap:[function(a){var z
H.j(a,"$isn")
z=this.f
if(!(z==null))z.t(a)},function(){return this.ap(null)},"ez","$1","$0","gbv",0,2,1],
sav:function(a){var z,y,x
if(!J.L(this.b,a)){z=this.b
if(z!=null){z=z.gp()
z.toString
y=H.b(this.gbv(),{func:1,ret:-1,args:[D.n]})
C.a.R(z.a,y)}x=this.b
this.b=a
if(a!=null){z=a.gp()
z.toString
y=H.b(this.gbv(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G("mover",x,this.b,this,[U.a1])
z.b=!0
this.ap(z)}},
$isdz:1,
$isd0:1},dS:{"^":"a;"}}],["","",,V,{"^":"",
ko:function(a){P.hQ(C.w,new V.kp(a))},
kp:{"^":"q:33;a",
$1:function(a){H.j(a,"$isaH")
P.cS(C.c.ca(this.a.gdS(),2)+" fps")}},
hz:{"^":"a;0a,0b",
ct:function(a,b){var z,y,x,w,v,u,t
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
t=W.a_
W.O(z,"scroll",H.b(new V.hC(x),{func:1,ret:-1,args:[t]}),!1,t)},
bR:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.y(a,"$isd",[P.k],"$asd")
this.dq()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ew(C.a.dW(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.eU(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.jA(C.G,s,C.q,!1)
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
dq:function(){var z,y,x,w
if(this.b!=null)return
z=new V.hR()
y=P.k
z.a=new H.aF(0,0,[y,V.dP])
z.b=new H.aF(0,0,[y,V.dZ])
z.c=z.F(0,"Start")
y=z.F(0,"Start").v(0,"Bold")
x=V.V(new H.T("*"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Bold").v(0,"Bold")
x=new V.b6()
w=[V.by]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.V(new H.T("*"))
C.a.h(x.a,y)
y=z.F(0,"Bold").v(0,"BoldEnd")
x=V.V(new H.T("*"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Start").v(0,"Italic")
x=V.V(new H.T("_"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Italic").v(0,"Italic")
x=new V.b6()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.V(new H.T("_"))
C.a.h(x.a,y)
y=z.F(0,"Italic").v(0,"ItalicEnd")
x=V.V(new H.T("_"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Start").v(0,"Code")
x=V.V(new H.T("`"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Code").v(0,"Code")
x=new V.b6()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.V(new H.T("`"))
C.a.h(x.a,y)
y=z.F(0,"Code").v(0,"CodeEnd")
x=V.V(new H.T("`"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Start").v(0,"LinkHead")
x=V.V(new H.T("["))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"LinkHead").v(0,"LinkTail")
x=V.V(new H.T("|"))
C.a.h(y.a,x)
x=z.F(0,"LinkHead").v(0,"LinkEnd")
y=V.V(new H.T("]"))
C.a.h(x.a,y)
x.c=!0
x=z.F(0,"LinkHead").v(0,"LinkHead")
y=new V.b6()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.V(new H.T("|]"))
C.a.h(y.a,x)
x=z.F(0,"LinkTail").v(0,"LinkEnd")
y=V.V(new H.T("]"))
C.a.h(x.a,y)
x.c=!0
x=z.F(0,"LinkTail").v(0,"LinkTail")
y=new V.b6()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.V(new H.T("|]"))
C.a.h(y.a,x)
C.a.h(z.F(0,"Start").v(0,"Other").a,new V.f0())
x=z.F(0,"Other").v(0,"Other")
y=new V.b6()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.V(new H.T("*_`["))
C.a.h(y.a,x)
x=z.F(0,"BoldEnd")
x.d=x.a.az("Bold")
x=z.F(0,"ItalicEnd")
x.d=x.a.az("Italic")
x=z.F(0,"CodeEnd")
x.d=x.a.az("Code")
x=z.F(0,"LinkEnd")
x.d=x.a.az("Link")
x=z.F(0,"Other")
x.d=x.a.az("Other")
this.b=z},
m:{
hA:function(a,b){var z=new V.hz()
z.ct(a,!0)
return z}}},
hC:{"^":"q:19;a",
$1:function(a){P.dW(C.l,new V.hB(this.a))}},
hB:{"^":"q:2;a",
$0:function(){var z,y,x
z=C.c.a_(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}}}],["","",,D,{"^":"",
eQ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=V.hA("Test 030",!0)
y=W.ca(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.k]
z.bR(H.e(["A test of the Normal shader for dynamically rendering normal maps."],x))
z.bR(H.e(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.Q(P.N("Failed to find an element with the identifier, testCanvas."))
v=E.hO(w,!0,!0,!0,!1)
u=new E.au()
u.a=""
u.b=!0
z=E.au
x=O.d4(z)
u.y=x
x.aH(u.ge2(),u.ge4())
u.z=null
u.Q=null
u.ch=null
u.cx=null
u.cy=null
u.db=null
u.dx=null
u.dy=null
u.fr=null
u.fx=null
u.sbo(0,null)
u.sav(null)
t=F.dN()
F.bl(t,null,null,1,1,1,0,0,1)
F.bl(t,null,null,1,1,0,1,0,3)
F.bl(t,null,null,1,1,0,0,1,2)
F.bl(t,null,null,1,1,-1,0,0,0)
F.bl(t,null,null,1,1,0,-1,0,0)
F.bl(t,null,null,1,1,0,0,-1,3)
t.aj()
u.sbo(0,t)
x=new U.di()
x.br(U.a1)
x.aH(x.gcY(),x.gdf())
x.e=null
x.f=V.bz()
x.r=0
s=v.r
r=new U.ib()
q=U.cc()
q.sbn(0,!0)
q.sbg(6.283185307179586)
q.sbi(0)
q.sT(0,0)
q.sbh(100)
q.sJ(0)
q.sba(0.5)
r.b=q
q=q.gp()
q.toString
p={func:1,ret:-1,args:[D.n]}
o=H.b(r.gag(),p)
C.a.h(q.a,o)
q=U.cc()
q.sbn(0,!0)
q.sbg(6.283185307179586)
q.sbi(0)
q.sT(0,0)
q.sbh(100)
q.sJ(0)
q.sba(0.5)
r.c=q
C.a.h(q.gp().a,o)
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
n=new X.ag(!1,!1,!1)
m=r.d
r.d=n
q=[X.ag]
o=new D.G("modifiers",m,n,r,q)
o.b=!0
r.H(o)
o=r.f
if(o!==!1){r.f=!1
o=new D.G("invertX",o,!1,r,[P.ae])
o.b=!0
r.H(o)}o=r.r
if(o!==!1){r.r=!1
o=new D.G("invertY",o,!1,r,[P.ae])
o.b=!0
r.H(o)}r.ar(s)
x.h(0,r)
s=v.r
r=new U.ia()
o=U.cc()
o.sbn(0,!0)
o.sbg(6.283185307179586)
o.sbi(0)
o.sT(0,0)
o.sbh(100)
o.sJ(0)
o.sba(0.2)
r.b=o
o=o.gp()
o.toString
l=H.b(r.gag(),p)
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
n=new X.ag(!0,!1,!1)
m=r.c
r.c=n
o=new D.G("modifiers",m,n,r,q)
o.b=!0
r.H(o)
r.ar(s)
x.h(0,r)
s=v.r
r=new U.ic()
r.c=0.01
r.d=0
r.e=0
n=new X.ag(!1,!1,!1)
r.b=n
q=new D.G("modifiers",null,n,r,q)
q.b=!0
r.H(q)
r.ar(s)
x.h(0,r)
u.sav(x)
k=new O.h1()
k.b=new V.dy(1,0,0,0,1,0,0,0,1)
k.c=V.bz()
k.d=C.f
k.bK(null)
k.bL(null)
k.cA()
k.r=null
x=v.f
s=x.a
j=s.createTexture()
s.bindTexture(34067,j)
s.texParameteri(34067,10242,10497)
s.texParameteri(34067,10243,10497)
s.texParameteri(34067,10241,9729)
s.texParameteri(34067,10240,9729)
s.bindTexture(34067,null)
i=new T.dU()
i.a=0
i.b=j
i.c=!1
i.d=0
x.af(i,j,"../resources/diceBumpMap/posx.png",34069,!1,!1)
x.af(i,j,"../resources/diceBumpMap/negx.png",34070,!1,!1)
x.af(i,j,"../resources/diceBumpMap/posy.png",34071,!1,!1)
x.af(i,j,"../resources/diceBumpMap/negy.png",34072,!1,!1)
x.af(i,j,"../resources/diceBumpMap/posz.png",34073,!1,!1)
x.af(i,j,"../resources/diceBumpMap/negz.png",34074,!1,!1)
if(k.d!==C.h){k.d=C.h
k.bK(null)
k.a=null}k.bL(i)
h=X.dh(!0,!0,!1,null,2000,null,0)
g=new V.aV(0.5,0.5,1,1)
if(!h.a.n(0,g)){m=h.a
h.a=g
x=new D.G("color",m,g,h,[V.aV])
x.b=!0
s=h.x
if(!(s==null))s.t(x)}f=new M.fq()
z=O.d4(z)
f.d=z
z.aH(f.gd_(),f.gd0())
f.e=null
f.f=null
f.r=null
f.x=null
e=new X.h6()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.sav(null)
z=e.c
if(!$.m.$2(z,1.0471975511965976)){m=e.c
e.c=1.0471975511965976
z=new D.G("fov",m,1.0471975511965976,e,[P.t])
z.b=!0
e.ap(z)}z=e.d
if(!$.m.$2(z,0.1)){m=e.d
e.d=0.1
z=new D.G("near",m,0.1,e,[P.t])
z.b=!0
e.ap(z)}z=e.e
if(!$.m.$2(z,2000)){m=e.e
e.e=2000
z=new D.G("far",m,2000,e,[P.t])
z.b=!0
e.ap(z)}z=f.a
if(z!==e){if(z!=null){z=z.gp()
z.toString
x=H.b(f.ga0(),p)
C.a.R(z.a,x)}m=f.a
f.a=e
z=e.gp()
z.toString
x=H.b(f.ga0(),p)
C.a.h(z.a,x)
z=new D.G("camera",m,f.a,f,[X.d0])
z.b=!0
f.ac(z)}f.sc7(0,null)
f.sc8(null)
f.sc8(k)
f.sc7(0,h)
f.d.h(0,u)
z=f.a
d=V.al(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
x=new U.d5()
x.a=d
z.sav(x)
z=v.d
if(z!==f){if(z!=null){z=z.gp()
z.toString
x=H.b(v.gbs(),p)
C.a.R(z.a,x)}v.d=f
z=f.gp()
z.toString
p=H.b(v.gbs(),p)
C.a.h(z.a,p)
v.cw()}V.ko(v)}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dp.prototype
return J.dn.prototype}if(typeof a=="string")return J.cg.prototype
if(a==null)return J.fD.prototype
if(typeof a=="boolean")return J.fC.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.a)return a
return J.c2(a)}
J.bD=function(a){if(typeof a=="string")return J.cg.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.a)return a
return J.c2(a)}
J.cM=function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.a)return a
return J.c2(a)}
J.k6=function(a){if(typeof a=="number")return J.bM.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cz.prototype
return a}
J.c1=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.a)return a
return J.c2(a)}
J.L=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).n(a,b)}
J.eX=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k6(a).X(a,b)}
J.eY=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kf(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bD(a).k(a,b)}
J.eZ=function(a,b,c,d){return J.c1(a).bQ(a,b,c,d)}
J.c5=function(a,b,c){return J.bD(a).dG(a,b,c)}
J.cT=function(a,b){return J.cM(a).w(a,b)}
J.f_=function(a,b){return J.cM(a).I(a,b)}
J.aC=function(a){return J.B(a).gL(a)}
J.bs=function(a){return J.cM(a).gN(a)}
J.aT=function(a){return J.bD(a).gj(a)}
J.Z=function(a){return J.B(a).i(a)}
I.cP=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.i=W.c9.prototype
C.x=J.l.prototype
C.a=J.aE.prototype
C.y=J.dn.prototype
C.e=J.dp.prototype
C.c=J.bM.prototype
C.b=J.cg.prototype
C.F=J.bw.prototype
C.H=H.h_.prototype
C.I=W.h0.prototype
C.p=J.h7.prototype
C.J=P.cp.prototype
C.m=J.cz.prototype
C.r=W.bj.prototype
C.t=W.is.prototype
C.u=new P.h5()
C.v=new P.ie()
C.d=new P.je()
C.f=new A.bH(0,"ColorSourceType.None")
C.k=new A.bH(1,"ColorSourceType.Solid")
C.j=new A.bH(2,"ColorSourceType.Texture2D")
C.h=new A.bH(3,"ColorSourceType.TextureCube")
C.l=new P.aY(0)
C.w=new P.aY(5e6)
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
C.G=H.e(I.cP([0,0,65498,45055,65535,34815,65534,18431]),[P.z])
C.q=new P.id(!1)
$.af=0
$.aU=null
$.cW=null
$.cF=!1
$.eN=null
$.eH=null
$.eT=null
$.c0=null
$.c3=null
$.cN=null
$.aN=null
$.bm=null
$.bn=null
$.cG=!1
$.F=C.d
$.dd=null
$.dc=null
$.db=null
$.da=null
$.m=V.fU()
$.dE=null
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
I.$lazy(y,x,w)}})(["d9","$get$d9",function(){return H.eM("_$dart_dartClosure")},"ch","$get$ch",function(){return H.eM("_$dart_js")},"e1","$get$e1",function(){return H.ah(H.bT({
toString:function(){return"$receiver$"}}))},"e2","$get$e2",function(){return H.ah(H.bT({$method$:null,
toString:function(){return"$receiver$"}}))},"e3","$get$e3",function(){return H.ah(H.bT(null))},"e4","$get$e4",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e8","$get$e8",function(){return H.ah(H.bT(void 0))},"e9","$get$e9",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e6","$get$e6",function(){return H.ah(H.e7(null))},"e5","$get$e5",function(){return H.ah(function(){try{null.$method$}catch(z){return z.message}}())},"eb","$get$eb",function(){return H.ah(H.e7(void 0))},"ea","$get$ea",function(){return H.ah(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cC","$get$cC",function(){return P.it()},"bo","$get$bo",function(){return[]},"eB","$get$eB",function(){return P.hk("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"d7","$get$d7",function(){return{}},"ej","$get$ej",function(){return Z.a8(0)},"eh","$get$eh",function(){return Z.a8(511)},"ao","$get$ao",function(){return Z.a8(1)},"an","$get$an",function(){return Z.a8(2)},"am","$get$am",function(){return Z.a8(4)},"ap","$get$ap",function(){return Z.a8(8)},"aq","$get$aq",function(){return Z.a8(16)},"bh","$get$bh",function(){return Z.a8(32)},"bi","$get$bi",function(){return Z.a8(64)},"ei","$get$ei",function(){return Z.a8(96)},"aL","$get$aL",function(){return Z.a8(128)},"aK","$get$aK",function(){return Z.a8(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.n]},{func:1,ret:-1,opt:[D.n]},{func:1,ret:P.A},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[P.z,[P.i,E.au]]},{func:1,ret:P.A,args:[F.ab]},{func:1,ret:-1,args:[W.a_]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:P.A,args:[D.n]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.k,args:[P.z]},{func:1,args:[,]},{func:1,ret:P.A,args:[,]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.z,[P.i,U.a1]]},{func:1,ret:P.A,args:[W.a_]},{func:1,ret:[P.ar,,],args:[,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:-1,args:[P.a],opt:[P.ad]},{func:1,ret:P.ae,args:[W.C]},{func:1,ret:W.U,args:[W.C]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:P.A,args:[P.P]},{func:1,ret:P.A,args:[{func:1,ret:-1,args:[D.n]}]},{func:1,ret:P.ae,args:[P.t,P.t]},{func:1,ret:-1,args:[W.bj]},{func:1,args:[P.k]},{func:1,ret:P.A,args:[F.aJ,P.t,P.t]},{func:1,args:[,P.k]},{func:1,ret:P.A,args:[P.aH]},{func:1,ret:P.A,args:[,],opt:[,]}]
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
if(x==y)H.kr(d||a)
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
Isolate.cP=a.cP
Isolate.cK=a.cK
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
if(typeof dartMainRunner==="function")dartMainRunner(D.eQ,[])
else D.eQ([])})})()
//# sourceMappingURL=test.dart.js.map
