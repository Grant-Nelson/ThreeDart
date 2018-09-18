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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isr)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dq(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ds=function(){}
var dart=[["","",,H,{"^":"",nu:{"^":"b;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
dx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cA:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dv==null){H.mD()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c5("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cS()]
if(v!=null)return v
v=H.mI(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cS(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
r:{"^":"b;",
t:function(a,b){return a===b},
gR:function(a){return H.bG(a)},
i:["ee",function(a){return"Instance of '"+H.bb(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hT:{"^":"r;",
i:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$isag:1},
eb:{"^":"r;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0},
$isG:1},
cT:{"^":"r;",
gR:function(a){return 0},
i:["ef",function(a){return String(a)}]},
iB:{"^":"cT;"},
c6:{"^":"cT;"},
c0:{"^":"cT;",
i:function(a){var z=a[$.$get$dW()]
if(z==null)return this.ef(a)
return"JavaScript function for "+H.l(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscP:1},
b7:{"^":"r;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.p(P.A("add"))
a.push(b)},
L:function(a,b){var z
if(!!a.fixed$length)H.p(P.A("remove"))
for(z=0;z<a.length;++z)if(J.O(a[z],b)){a.splice(z,1)
return!0}return!1},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b2(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hz:function(a){return this.B(a,"")},
hr:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b2(a))}return y},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bB:function(a,b,c){if(b<0||b>a.length)throw H.a(P.X(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.X(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.y(a,0)])
return H.e(a.slice(b,c),[H.y(a,0)])},
gaw:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hR())},
av:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.p(P.A("fill range"))
P.aK(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.A(0,1))a[z]=d},
aQ:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
i:function(a){return P.cQ(a,"[","]")},
gY:function(a){return new J.ay(a,a.length,0,[H.y(a,0)])},
gR:function(a){return H.bG(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cc(b,"newLength",null))
if(b<0)throw H.a(P.X(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b>=a.length||b<0)throw H.a(H.aD(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.p(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b>=a.length||b<0)throw H.a(H.aD(a,b))
a[b]=c},
$isj:1,
$isc:1,
p:{
hS:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cc(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.X(a,0,4294967295,"length",null))
return J.e8(new Array(a),b)},
e8:function(a,b){return J.bA(H.e(a,[b]))},
bA:function(a){H.bT(a)
a.fixed$length=Array
return a}}},
nt:{"^":"b7;$ti"},
ay:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bZ:{"^":"r;",
ghy:function(a){return a===0?1/a<0:a<0},
ia:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
cg:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
a7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
e4:function(a,b){var z
if(b>20)throw H.a(P.X(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghy(a))return"-"+z
return z},
b0:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.X(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.T(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.A("Unexpected toString result: "+z))
x=J.aE(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ad(b))
return a*b},
b7:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ei:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d2(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.d2(a,b)},
d2:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aF:function(a,b){var z
if(a>0)z=this.d0(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fB:function(a,b){if(b<0)throw H.a(H.ad(b))
return this.d0(a,b)},
d0:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.ad(b))
return a<b},
$ist:1,
$isZ:1},
ea:{"^":"bZ;",$ism:1},
e9:{"^":"bZ;"},
c_:{"^":"r;",
T:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b<0)throw H.a(H.aD(a,b))
if(b>=a.length)H.p(H.aD(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.a(H.aD(a,b))
return a.charCodeAt(b)},
A:function(a,b){H.L(b)
if(typeof b!=="string")throw H.a(P.cc(b,null,null))
return a+b},
aL:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ad(b))
c=P.aK(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ad(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a3:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ad(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.a(P.X(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a2:function(a,b){return this.a3(a,b,0)},
q:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ad(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.a(P.co(b,null,null))
if(b>c)throw H.a(P.co(b,null,null))
if(c>a.length)throw H.a(P.co(c,null,null))
return a.substring(b,c)},
ay:function(a,b){return this.q(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hO:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
a6:function(a,b){return this.hO(a,b," ")},
dL:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.X(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dK:function(a,b){return this.dL(a,b,0)},
hf:function(a,b,c){if(c>a.length)throw H.a(P.X(c,0,a.length,null,null))
return H.fZ(a,b,c)},
i:function(a){return a},
gR:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isen:1,
$isi:1}}],["","",,H,{"^":"",
cB:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hR:function(){return new P.je("No element")},
a3:{"^":"jK;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.T(this.a,b)},
$ascr:function(){return[P.m]},
$asx:function(){return[P.m]},
$asj:function(){return[P.m]},
$asc:function(){return[P.m]}},
hC:{"^":"j;"},
eg:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aE(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b2(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.H(z,w);++this.c
return!0}},
ie:{"^":"j;a,b,$ti",
gY:function(a){return new H.ig(J.bv(this.a),this.b,this.$ti)},
gl:function(a){return J.as(this.a)},
H:function(a,b){return this.b.$1(J.cG(this.a,b))},
$asj:function(a,b){return[b]}},
ig:{"^":"cR;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascR:function(a,b){return[b]}},
ke:{"^":"j;a,b,$ti",
gY:function(a){return new H.kf(J.bv(this.a),this.b,this.$ti)}},
kf:{"^":"cR;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cg:{"^":"b;$ti"},
cr:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.ax(this,"cr",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
av:function(a,b,c,d){H.z(d,H.ax(this,"cr",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jK:{"^":"ck+cr;"}}],["","",,H,{"^":"",
hq:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
my:function(a){return init.types[H.D(a)]},
fS:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.ad(a))
return z},
bG:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iL:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.L(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.X(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.E(w,u)|32)>x)return}return parseInt(a,b)},
bb:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.I(a).$isc6){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.E(w,0)===36)w=C.b.ay(w,1)
r=H.dw(H.bT(H.b_(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iD:function(){if(!!self.location)return self.location.href
return},
ep:function(a){var z,y,x,w,v
H.bT(a)
z=J.as(a)
if(typeof z!=="number")return z.eb()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iM:function(a){var z,y,x,w
z=H.e([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ad(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aF(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ad(w))}return H.ep(z)},
eq:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ad(x))
if(x<0)throw H.a(H.ad(x))
if(x>65535)return H.iM(a)}return H.ep(a)},
iN:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eb()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cm:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aF(z,10))>>>0,56320|z&1023)}}throw H.a(P.X(a,0,1114111,null,null))},
ae:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iK:function(a){return a.b?H.ae(a).getUTCFullYear()+0:H.ae(a).getFullYear()+0},
iI:function(a){return a.b?H.ae(a).getUTCMonth()+1:H.ae(a).getMonth()+1},
iE:function(a){return a.b?H.ae(a).getUTCDate()+0:H.ae(a).getDate()+0},
iF:function(a){return a.b?H.ae(a).getUTCHours()+0:H.ae(a).getHours()+0},
iH:function(a){return a.b?H.ae(a).getUTCMinutes()+0:H.ae(a).getMinutes()+0},
iJ:function(a){return a.b?H.ae(a).getUTCSeconds()+0:H.ae(a).getSeconds()+0},
iG:function(a){return a.b?H.ae(a).getUTCMilliseconds()+0:H.ae(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ad(a))},
d:function(a,b){if(a==null)J.as(a)
throw H.a(H.aD(a,b))},
aD:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.D(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.R(b,a,"index",null,z)
return P.co(b,"index",null)},
ms:function(a,b,c){if(a>c)return new P.cn(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cn(a,c,!0,b,"end","Invalid value")
return new P.aF(!0,b,"end",null)},
ad:function(a){return new P.aF(!0,a,null,null)},
mh:function(a){if(typeof a!=="number")throw H.a(H.ad(a))
return a},
a:function(a){var z
if(a==null)a=new P.em()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h0})
z.name=""}else z.toString=H.h0
return z},
h0:function(){return J.a9(this.dartException)},
p:function(a){throw H.a(a)},
B:function(a){throw H.a(P.b2(a))},
ar:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aF(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cU(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.el(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eK()
u=$.$get$eL()
t=$.$get$eM()
s=$.$get$eN()
r=$.$get$eR()
q=$.$get$eS()
p=$.$get$eP()
$.$get$eO()
o=$.$get$eU()
n=$.$get$eT()
m=v.a5(y)
if(m!=null)return z.$1(H.cU(H.L(y),m))
else{m=u.a5(y)
if(m!=null){m.method="call"
return z.$1(H.cU(H.L(y),m))}else{m=t.a5(y)
if(m==null){m=s.a5(y)
if(m==null){m=r.a5(y)
if(m==null){m=q.a5(y)
if(m==null){m=p.a5(y)
if(m==null){m=s.a5(y)
if(m==null){m=o.a5(y)
if(m==null){m=n.a5(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.el(H.L(y),m))}}return z.$1(new H.jJ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ev()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ev()
return a},
bt:function(a){var z
if(a==null)return new H.fn(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fn(a)},
mv:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mF:function(a,b,c,d,e,f){H.f(a,"$iscP")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
br:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mF)
a.$identity=z
return z},
hm:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.iS(z).r}else x=d
w=e?Object.create(new H.jf().constructor.prototype):Object.create(new H.cJ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.A()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dR(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.my,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dK:H.cK
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dR(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hj:function(a,b,c,d){var z=H.cK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dR:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hl(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hj(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.A()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.cd("self")
$.bw=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.A()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.cd("self")
$.bw=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hk:function(a,b,c,d){var z,y
z=H.cK
y=H.dK
switch(b?-1:a){case 0:throw H.a(H.j1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hl:function(a,b){var z,y,x,w,v,u,t,s
z=$.bw
if(z==null){z=H.cd("self")
$.bw=z}y=$.dJ
if(y==null){y=H.cd("receiver")
$.dJ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hk(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.az
if(typeof y!=="number")return y.A()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.A()
$.az=y+1
return new Function(z+y+"}")()},
dq:function(a,b,c,d,e,f,g){var z,y
z=J.bA(H.bT(b))
H.D(c)
y=!!J.I(d).$isc?J.bA(d):d
return H.hm(a,z,c,y,!!e,f,g)},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aw(a,"String"))},
mt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"double"))},
mR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"num"))},
fK:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aw(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aw(a,"int"))},
fX:function(a,b){throw H.a(H.aw(a,H.L(b).substring(3)))},
mT:function(a,b){var z=J.aE(b)
throw H.a(H.hi(a,z.q(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.fX(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.mT(a,b)},
bT:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.a(H.aw(a,"List"))},
fU:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.fX(a,b)},
fO:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
c8:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fO(J.I(a))
if(z==null)return!1
y=H.fR(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dl)return a
$.dl=!0
try{if(H.c8(a,b))return a
z=H.cb(b)
y=H.aw(a,z)
throw H.a(y)}finally{$.dl=!1}},
dt:function(a,b){if(a!=null&&!H.dp(a,b))H.p(H.aw(a,H.cb(b)))
return a},
fF:function(a){var z
if(a instanceof H.n){z=H.fO(J.I(a))
if(z!=null)return H.cb(z)
return"Closure"}return H.bb(a)},
n_:function(a){throw H.a(new P.hu(H.L(a)))},
fP:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b_:function(a){if(a==null)return
return a.$ti},
or:function(a,b,c){return H.bu(a["$as"+H.l(c)],H.b_(b))},
aZ:function(a,b,c,d){var z
H.L(c)
H.D(d)
z=H.bu(a["$as"+H.l(c)],H.b_(b))
return z==null?null:z[d]},
ax:function(a,b,c){var z
H.L(b)
H.D(c)
z=H.bu(a["$as"+H.l(b)],H.b_(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.D(b)
z=H.b_(a)
return z==null?null:z[b]},
cb:function(a){var z=H.b0(a,null)
return z},
b0:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dw(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.m7(a,b)
if('futureOr' in a)return"FutureOr<"+H.b0("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.A(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b0(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b0(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b0(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b0(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mu(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.L(z[l])
n=n+m+H.b0(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dw:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.am("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b0(u,c)}v="<"+z.i(0)+">"
return v},
bu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bS:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b_(a)
y=J.I(a)
if(y[b]==null)return!1
return H.fI(H.bu(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.L(b)
H.bT(c)
H.L(d)
if(a==null)return a
z=H.bS(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dw(c,0,null)
throw H.a(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fI:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
op:function(a,b,c){return a.apply(b,H.bu(J.I(b)["$as"+H.l(c)],H.b_(b)))},
fT:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.fT(z)}return!1},
dp:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.fT(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dp(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c8(a,b)}y=J.I(a).constructor
x=H.b_(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aq(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dp(a,b))throw H.a(H.aw(a,H.cb(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fR(a,b,c,d)
if('func' in a)return c.builtin$cls==="cP"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bz" in y.prototype))return!1
w=y.prototype["$as"+"bz"]
v=H.bu(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cb(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fI(H.bu(r,z),b,u,d)},
fR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aq(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aq(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aq(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aq(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mQ(m,b,l,d)},
mQ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
oq:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
mI:function(a){var z,y,x,w,v,u
z=H.L($.fQ.$1(a))
y=$.cz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.L($.fH.$2(a,z))
if(z!=null){y=$.cz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cD(x)
$.cz[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cC[z]=x
return x}if(v==="-"){u=H.cD(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fW(a,x)
if(v==="*")throw H.a(P.c5(z))
if(init.leafTags[z]===true){u=H.cD(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fW(a,x)},
fW:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dx(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cD:function(a){return J.dx(a,!1,null,!!a.$isF)},
mP:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cD(z)
else return J.dx(z,c,null,null)},
mD:function(){if(!0===$.dv)return
$.dv=!0
H.mE()},
mE:function(){var z,y,x,w,v,u,t,s
$.cz=Object.create(null)
$.cC=Object.create(null)
H.mz()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fY.$1(v)
if(u!=null){t=H.mP(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mz:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bq(C.J,H.bq(C.O,H.bq(C.u,H.bq(C.u,H.bq(C.N,H.bq(C.K,H.bq(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fQ=new H.mA(v)
$.fH=new H.mB(u)
$.fY=new H.mC(t)},
bq:function(a,b){return a(b)||b},
fZ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h_:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hp:{"^":"b;$ti",
i:function(a){return P.cW(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hq()},
$isH:1},
hr:{"^":"hp;a,b,c,$ti",
gl:function(a){return this.a},
bh:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bh(0,b))return
return this.cR(b)},
cR:function(a){return this.b[H.L(a)]},
I:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cR(v),z))}}},
iR:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iS:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bA(z)
y=z[0]
x=z[1]
return new H.iR(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jv:{"^":"b;a,b,c,d,e,f",
a5:function(a){var z,y,x
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
aB:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eQ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iy:{"^":"a4;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
el:function(a,b){return new H.iy(a,b==null?null:b.method)}}},
hW:{"^":"a4;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
cU:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hW(a,y,z?null:b.receiver)}}},
jJ:{"^":"a4;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n1:{"^":"n:21;a",
$1:function(a){if(!!J.I(a).$isa4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fn:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isav:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.bb(this).trim()+"'"},
ge8:function(){return this},
$iscP:1,
ge8:function(){return this}},
eB:{"^":"n;"},
jf:{"^":"eB;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cJ:{"^":"eB;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cJ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gR:function(a){var z,y
z=this.c
if(z==null)y=H.bG(this.a)
else y=typeof z!=="object"?J.bU(z):H.bG(z)
return(y^H.bG(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bb(z)+"'")},
p:{
cK:function(a){return a.a},
dK:function(a){return a.c},
cd:function(a){var z,y,x,w,v
z=new H.cJ("self","target","receiver","name")
y=J.bA(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jw:{"^":"a4;a",
i:function(a){return this.a},
p:{
aw:function(a,b){return new H.jw("TypeError: "+H.l(P.cf(a))+": type '"+H.fF(a)+"' is not a subtype of type '"+b+"'")}}},
hh:{"^":"a4;a",
i:function(a){return this.a},
p:{
hi:function(a,b){return new H.hh("CastError: "+H.l(P.cf(a))+": type '"+H.fF(a)+"' is not a subtype of type '"+b+"'")}}},
j0:{"^":"a4;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j1:function(a){return new H.j0(a)}}},
aV:{"^":"ib;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gak:function(a){return new H.i0(this,[H.y(this,0)])},
bh:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cO(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cO(y,b)}else return this.hv(b)},
hv:function(a){var z=this.d
if(z==null)return!1
return this.ck(this.bK(z,this.cj(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ba(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ba(w,b)
x=y==null?null:y.b
return x}else return this.hw(b)},
hw:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bK(z,this.cj(a))
x=this.ck(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bM()
this.b=z}this.cH(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bM()
this.c=y}this.cH(y,b,c)}else this.hx(b,c)},
hx:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.bM()
this.d=z}y=this.cj(a)
x=this.bK(z,y)
if(x==null)this.bU(z,y,[this.bN(a,b)])
else{w=this.ck(x,a)
if(w>=0)x[w].b=b
else x.push(this.bN(a,b))}},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b2(this))
z=z.c}},
cH:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.ba(a,b)
if(z==null)this.bU(a,b,this.bN(b,c))
else z.b=c},
eO:function(){this.r=this.r+1&67108863},
bN:function(a,b){var z,y
z=new H.i_(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eO()
return z},
cj:function(a){return J.bU(a)&0x3ffffff},
ck:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
i:function(a){return P.cW(this)},
ba:function(a,b){return a[b]},
bK:function(a,b){return a[b]},
bU:function(a,b,c){a[b]=c},
eH:function(a,b){delete a[b]},
cO:function(a,b){return this.ba(a,b)!=null},
bM:function(){var z=Object.create(null)
this.bU(z,"<non-identifier-key>",z)
this.eH(z,"<non-identifier-key>")
return z},
$isee:1},
i_:{"^":"b;a,b,0c,0d"},
i0:{"^":"hC;a,$ti",
gl:function(a){return this.a.a},
gY:function(a){var z,y
z=this.a
y=new H.i1(z,z.r,this.$ti)
y.c=z.e
return y}},
i1:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mA:{"^":"n:21;a",
$1:function(a){return this.a(a)}},
mB:{"^":"n:41;a",
$2:function(a,b){return this.a(a,b)}},
mC:{"^":"n:50;a",
$1:function(a){return this.a(H.L(a))}},
hU:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isen:1,
$isiT:1,
p:{
hV:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.V("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mu:function(a){return J.e8(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bo:function(a){return a},
iu:function(a){return new Int8Array(a)},
aC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aD(b,a))},
m1:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.ms(a,b,c))
return b},
ek:{"^":"r;",$isek:1,"%":"ArrayBuffer"},
d_:{"^":"r;",$isd_:1,$isjx:1,"%":"DataView;ArrayBufferView;cZ|fh|fi|iv|fj|fk|aX"},
cZ:{"^":"d_;",
gl:function(a){return a.length},
$isF:1,
$asF:I.ds},
iv:{"^":"fi;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mt(c)
H.aC(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.t]},
$asx:function(){return[P.t]},
$isj:1,
$asj:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aX:{"^":"fk;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aC(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.m]},
$asx:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
nD:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nE:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nF:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nG:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nH:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nI:{"^":"aX;",
gl:function(a){return a.length},
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d0:{"^":"aX;",
gl:function(a){return a.length},
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
bB:function(a,b,c){return new Uint8Array(a.subarray(b,H.m1(b,c,a.length)))},
$isd0:1,
$isN:1,
"%":";Uint8Array"},
fh:{"^":"cZ+x;"},
fi:{"^":"fh+cg;"},
fj:{"^":"cZ+x;"},
fk:{"^":"fj+cg;"}}],["","",,P,{"^":"",
kh:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.me()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.br(new P.kj(z),1)).observe(y,{childList:true})
return new P.ki(z,y,x)}else if(self.setImmediate!=null)return P.mf()
return P.mg()},
oe:[function(a){self.scheduleImmediate(H.br(new P.kk(H.h(a,{func:1,ret:-1})),0))},"$1","me",4,0,11],
of:[function(a){self.setImmediate(H.br(new P.kl(H.h(a,{func:1,ret:-1})),0))},"$1","mf",4,0,11],
og:[function(a){P.d9(C.q,H.h(a,{func:1,ret:-1}))},"$1","mg",4,0,11],
d9:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.e.a1(a.a,1000)
return P.ll(z<0?0:z,b)},
eF:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bi]})
z=C.e.a1(a.a,1000)
return P.lm(z<0?0:z,b)},
ma:function(a,b){if(H.c8(a,{func:1,args:[P.b,P.av]}))return b.hX(a,null,P.b,P.av)
if(H.c8(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m9:function(){var z,y
for(;z=$.bp,z!=null;){$.bQ=null
y=z.b
$.bp=y
if(y==null)$.bP=null
z.a.$0()}},
oo:[function(){$.dm=!0
try{P.m9()}finally{$.bQ=null
$.dm=!1
if($.bp!=null)$.$get$dg().$1(P.fJ())}},"$0","fJ",0,0,3],
fE:function(a){var z=new P.fb(H.h(a,{func:1,ret:-1}))
if($.bp==null){$.bP=z
$.bp=z
if(!$.dm)$.$get$dg().$1(P.fJ())}else{$.bP.b=z
$.bP=z}},
md:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bp
if(z==null){P.fE(a)
$.bQ=$.bP
return}y=new P.fb(a)
x=$.bQ
if(x==null){y.b=z
$.bQ=y
$.bp=y}else{y.b=x.b
x.b=y
$.bQ=y
if(y.b==null)$.bP=y}},
mU:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.T
if(C.j===y){P.cy(null,null,C.j,a)
return}y.toString
P.cy(null,null,y,H.h(y.c_(a),z))},
eE:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.d9(a,b)}return P.d9(a,H.h(y.c_(b),z))},
js:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bi]}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.eF(a,b)}x=y.d9(b,P.bi)
$.T.toString
return P.eF(a,H.h(x,z))},
cx:function(a,b,c,d,e){var z={}
z.a=d
P.md(new P.mb(z,e))},
fA:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fB:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mc:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cy:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c_(d):c.hb(d,-1)
P.fE(d)},
kj:{"^":"n:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ki:{"^":"n:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kk:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kl:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fq:{"^":"b;a,0b,c",
eu:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.br(new P.lo(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
ev:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.br(new P.ln(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbi:1,
p:{
ll:function(a,b){var z=new P.fq(!0,0)
z.eu(a,b)
return z},
lm:function(a,b){var z=new P.fq(!1,0)
z.ev(a,b)
return z}}},
lo:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ln:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.ei(w,x)}z.c=y
this.d.$1(z)}},
bn:{"^":"b;0a,b,c,d,e,$ti",
hF:function(a){if(this.c!==6)return!0
return this.b.b.ct(H.h(this.d,{func:1,ret:P.ag,args:[P.b]}),a.a,P.ag,P.b)},
hu:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.c8(z,{func:1,args:[P.b,P.av]}))return H.dt(w.i4(z,a.a,a.b,null,y,P.av),x)
else return H.dt(w.ct(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aS:{"^":"b;d1:a<,b,0fq:c<,$ti",
e3:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ma(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aS(0,$.T,[c])
w=b==null?1:3
this.cI(new P.bn(x,w,a,b,[z,c]))
return x},
i9:function(a,b){return this.e3(a,null,b)},
cI:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbn")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaS")
z=y.a
if(z<4){y.cI(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cy(null,null,z,H.h(new P.kA(this,a),{func:1,ret:-1}))}},
cX:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbn")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaS")
y=u.a
if(y<4){u.cX(a)
return}this.a=y
this.c=u.c}z.a=this.bd(a)
y=this.b
y.toString
P.cy(null,null,y,H.h(new P.kF(z,this),{func:1,ret:-1}))}},
bQ:function(){var z=H.f(this.c,"$isbn")
this.c=null
return this.bd(z)},
bd:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cL:function(a){var z,y,x,w
z=H.y(this,0)
H.dt(a,{futureOr:1,type:z})
y=this.$ti
x=H.bS(a,"$isbz",y,"$asbz")
if(x){z=H.bS(a,"$isaS",y,null)
if(z)P.fe(a,this)
else P.kB(a,this)}else{w=this.bQ()
H.z(a,z)
this.a=4
this.c=a
P.bL(this,w)}},
bG:[function(a,b){var z
H.f(b,"$isav")
z=this.bQ()
this.a=8
this.c=new P.ak(a,b)
P.bL(this,z)},function(a){return this.bG(a,null)},"il","$2","$1","geD",4,2,48],
$isbz:1,
p:{
kB:function(a,b){var z,y,x
b.a=1
try{a.e3(new P.kC(b),new P.kD(b),null)}catch(x){z=H.ar(x)
y=H.bt(x)
P.mU(new P.kE(b,z,y))}},
fe:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaS")
if(z>=4){y=b.bQ()
b.a=a.a
b.c=a.c
P.bL(b,y)}else{y=H.f(b.c,"$isbn")
b.a=2
b.c=a
a.cX(y)}},
bL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isak")
y=y.b
u=v.a
t=v.b
y.toString
P.cx(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bL(z.a,b)}y=z.a
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
if(p){H.f(r,"$isak")
y=y.b
u=r.a
t=r.b
y.toString
P.cx(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kI(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kH(x,b,r).$0()}else if((y&2)!==0)new P.kG(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.I(y).$isbz){if(y.a>=4){n=H.f(t.c,"$isbn")
t.c=null
b=t.bd(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fe(y,t)
return}}m=b.b
n=H.f(m.c,"$isbn")
m.c=null
b=m.bd(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isak")
m.a=8
m.c=u}z.a=m
y=m}}}},
kA:{"^":"n:0;a,b",
$0:function(){P.bL(this.a,this.b)}},
kF:{"^":"n:0;a,b",
$0:function(){P.bL(this.b,this.a.a)}},
kC:{"^":"n:15;a",
$1:function(a){var z=this.a
z.a=0
z.cL(a)}},
kD:{"^":"n:51;a",
$2:function(a,b){this.a.bG(a,H.f(b,"$isav"))},
$1:function(a){return this.$2(a,null)}},
kE:{"^":"n:0;a,b,c",
$0:function(){this.a.bG(this.b,this.c)}},
kI:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e0(H.h(w.d,{func:1}),null)}catch(v){y=H.ar(v)
x=H.bt(v)
if(this.d){w=H.f(this.a.a.c,"$isak").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isak")
else u.b=new P.ak(y,x)
u.a=!0
return}if(!!J.I(z).$isbz){if(z instanceof P.aS&&z.gd1()>=4){if(z.gd1()===8){w=this.b
w.b=H.f(z.gfq(),"$isak")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.i9(new P.kJ(t),null)
w.a=!1}}},
kJ:{"^":"n:47;a",
$1:function(a){return this.a}},
kH:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.ct(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ar(t)
y=H.bt(t)
x=this.a
x.b=new P.ak(z,y)
x.a=!0}}},
kG:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isak")
w=this.c
if(w.hF(z)&&w.e!=null){v=this.b
v.b=w.hu(z)
v.a=!1}}catch(u){y=H.ar(u)
x=H.bt(u)
w=H.f(this.a.a.c,"$isak")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ak(y,x)
s.a=!0}}},
fb:{"^":"b;a,0b"},
d5:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aS(0,$.T,[P.m])
z.a=0
this.hC(new P.ji(z,this),!0,new P.jj(z,y),y.geD())
return y}},
ji:{"^":"n;a,b",
$1:function(a){H.z(a,H.ax(this.b,"d5",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.ax(this.b,"d5",0)]}}},
jj:{"^":"n:0;a,b",
$0:function(){this.b.cL(this.a.a)}},
ex:{"^":"b;$ti"},
jh:{"^":"b;"},
bi:{"^":"b;"},
ak:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa4:1},
lQ:{"^":"b;",$isod:1},
mb:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.em()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
l3:{"^":"lQ;",
i5:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fA(null,null,this,a,-1)}catch(x){z=H.ar(x)
y=H.bt(x)
P.cx(null,null,this,z,H.f(y,"$isav"))}},
i6:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fB(null,null,this,a,b,-1,c)}catch(x){z=H.ar(x)
y=H.bt(x)
P.cx(null,null,this,z,H.f(y,"$isav"))}},
hb:function(a,b){return new P.l5(this,H.h(a,{func:1,ret:b}),b)},
c_:function(a){return new P.l4(this,H.h(a,{func:1,ret:-1}))},
d9:function(a,b){return new P.l6(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
e0:function(a,b){H.h(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fA(null,null,this,a,b)},
ct:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.j)return a.$1(b)
return P.fB(null,null,this,a,b,c,d)},
i4:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.j)return a.$2(b,c)
return P.mc(null,null,this,a,b,c,d,e,f)},
hX:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
l5:{"^":"n;a,b,c",
$0:function(){return this.a.e0(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l4:{"^":"n:3;a,b",
$0:function(){return this.a.i5(this.b)}},
l6:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.i6(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i2:function(a,b,c,d,e){return new H.aV(0,0,[d,e])},
i3:function(a,b,c){H.bT(a)
return H.w(H.mv(a,new H.aV(0,0,[b,c])),"$isee",[b,c],"$asee")},
ef:function(a,b){return new H.aV(0,0,[a,b])},
i6:function(a,b,c,d){return new P.kQ(0,0,[d])},
hQ:function(a,b,c){var z,y
if(P.dn(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bR()
C.a.h(y,a)
try{P.m8(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.ey(b,H.fU(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cQ:function(a,b,c){var z,y,x
if(P.dn(a))return b+"..."+c
z=new P.am(b)
y=$.$get$bR()
C.a.h(y,a)
try{x=z
x.a=P.ey(x.gaC(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaC()+c
y=z.gaC()
return y.charCodeAt(0)==0?y:y},
dn:function(a){var z,y
for(z=0;y=$.$get$bR(),z<y.length;++z)if(a===y[z])return!0
return!1},
m8:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gY(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.G();t=s,s=r){r=z.gP(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
i4:function(a,b,c){var z=P.i2(null,null,null,b,c)
a.I(0,new P.i5(z,b,c))
return z},
cW:function(a){var z,y,x
z={}
if(P.dn(a))return"{...}"
y=new P.am("")
try{C.a.h($.$get$bR(),a)
x=y
x.a=x.gaC()+"{"
z.a=!0
J.dD(a,new P.ic(z,y))
z=y
z.a=z.gaC()+"}"}finally{z=$.$get$bR()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaC()
return z.charCodeAt(0)==0?z:z},
kQ:{"^":"kK;a,0b,0c,0d,0e,0f,r,$ti",
gY:function(a){return P.fg(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.di()
this.b=z}return this.cJ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.di()
this.c=y}return this.cJ(y,b)}else return this.ew(0,b)},
ew:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.di()
this.d=z}y=this.cM(b)
x=z[y]
if(x==null)z[y]=[this.bF(b)]
else{if(this.cS(x,b)>=0)return!1
x.push(this.bF(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cY(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cY(this.c,b)
else return this.fi(0,b)},
fi:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eL(z,b)
x=this.cS(y,b)
if(x<0)return!1
this.d3(y.splice(x,1)[0])
return!0},
cJ:function(a,b){H.z(b,H.y(this,0))
if(H.f(a[b],"$isdh")!=null)return!1
a[b]=this.bF(b)
return!0},
cY:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdh")
if(z==null)return!1
this.d3(z)
delete a[b]
return!0},
cK:function(){this.r=this.r+1&67108863},
bF:function(a){var z,y
z=new P.dh(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cK()
return z},
d3:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cK()},
cM:function(a){return J.bU(a)&0x3ffffff},
eL:function(a,b){return a[this.cM(b)]},
cS:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
p:{
di:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dh:{"^":"b;a,0b,0c"},
kR:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fg:function(a,b,c){var z=new P.kR(a,b,[c])
z.c=a.e
return z}}},
kK:{"^":"j2;"},
i5:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
ck:{"^":"kS;",$isj:1,$isc:1},
x:{"^":"b;$ti",
gY:function(a){return new H.eg(a,this.gl(a),0,[H.aZ(this,a,"x",0)])},
H:function(a,b){return this.j(a,b)},
ic:function(a,b){var z,y,x
z=H.e([],[H.aZ(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
ib:function(a){return this.ic(a,!0)},
av:function(a,b,c,d){var z
H.z(d,H.aZ(this,a,"x",0))
P.aK(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cQ(a,"[","]")}},
ib:{"^":"ah;"},
ic:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ah:{"^":"b;$ti",
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aZ(this,a,"ah",0),H.aZ(this,a,"ah",1)]})
for(z=J.bv(this.gak(a));z.G();){y=z.gP(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.as(this.gak(a))},
i:function(a){return P.cW(a)},
$isH:1},
lt:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
id:{"^":"b;$ti",
j:function(a,b){return J.dC(this.a,b)},
m:function(a,b,c){J.cE(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
I:function(a,b){J.dD(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.as(this.a)},
i:function(a){return J.a9(this.a)},
$isH:1},
f0:{"^":"lu;a,$ti"},
j4:{"^":"b;$ti",
i:function(a){return P.cQ(this,"{","}")},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dF("index"))
if(b<0)H.p(P.X(b,0,null,"index",null))
for(z=P.fg(this,this.r,H.y(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.R(b,this,"index",null,y))},
$isj:1},
j2:{"^":"j4;"},
kS:{"^":"b+x;"},
lu:{"^":"id+lt;$ti"}}],["","",,P,{"^":"",he:{"^":"bW;a",
hI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aK(c,d,b.length,null,null,null)
z=$.$get$fc()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.E(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cB(C.b.E(b,s))
o=H.cB(C.b.E(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.am("")
w.a+=C.b.q(b,x,y)
w.a+=H.cm(r)
x=s
continue}}throw H.a(P.V("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.q(b,x,d)
k=l.length
if(v>=0)P.dI(b,u,d,v,t,k)
else{j=C.e.b7(k-1,4)+1
if(j===1)throw H.a(P.V("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aL(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dI(b,u,d,v,t,i)
else{j=C.e.b7(i,4)
if(j===1)throw H.a(P.V("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aL(b,d,d,j===2?"==":"=")}return b},
$asbW:function(){return[[P.c,P.m],P.i]},
p:{
dI:function(a,b,c,d,e,f){if(C.e.b7(f,4)!==0)throw H.a(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.V("Invalid base64 padding, more than two '=' characters",a,b))}}},hf:{"^":"bx;a",
$asbx:function(){return[[P.c,P.m],P.i]}},bW:{"^":"b;$ti"},bx:{"^":"jh;$ti"},hE:{"^":"bW;",
$asbW:function(){return[P.i,[P.c,P.m]]}},jV:{"^":"hE;a",
gho:function(){return C.F}},k1:{"^":"bx;",
aR:function(a,b,c){var z,y,x,w
z=a.length
P.aK(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lP(0,0,x)
if(w.eJ(a,b,z)!==z)w.d5(J.h6(a,z-1),0)
return C.V.bB(x,0,w.b)},
c5:function(a){return this.aR(a,0,null)},
$asbx:function(){return[P.i,[P.c,P.m]]}},lP:{"^":"b;a,b,c",
d5:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.d(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.d(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.d(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.d(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.d(z,y)
z[y]=128|a&63
return!1}},
eJ:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.T(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.E(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d5(w,C.b.E(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.d(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.d(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.d(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.d(z,v)
z[v]=128|w&63}}return x}},jW:{"^":"bx;a",
aR:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.jX(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.aK(b,c,y,null,null,null)
x=new P.am("")
w=new P.lM(!1,x,!0,0,0,0)
w.aR(a,b,y)
w.hq(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
c5:function(a){return this.aR(a,0,null)},
$asbx:function(){return[[P.c,P.m],P.i]},
p:{
jX:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.jY(!1,b,c,d)
return},
jY:function(a,b,c,d){var z,y,x
z=$.$get$f6()
if(z==null)return
y=0===c
if(y&&!0)return P.de(z,b)
x=b.length
d=P.aK(c,d,x,null,null,null)
if(y&&d===x)return P.de(z,b)
return P.de(z,b.subarray(c,d))},
de:function(a,b){if(P.k_(b))return
return P.k0(a,b)},
k0:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ar(y)}return},
k_:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
jZ:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ar(y)}return}}},lM:{"^":"b;a,b,c,d,e,f",
hq:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.V("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lO(c)
v=new P.lN(this,b,c,a)
$label0$0:for(u=J.aE(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.by()
if((r&192)!==128){q=P.V("Bad UTF-8 encoding 0x"+C.e.b0(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.V("Overlong encoding of 0x"+C.e.b0(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.e.b0(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cm(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cB()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.e.b0(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.V("Bad UTF-8 encoding 0x"+C.e.b0(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lO:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aE(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.by()
if((w&127)!==w)return x-b}return z-b}},lN:{"^":"n:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c4(this.d,a,b)}}}],["","",,P,{"^":"",
ca:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.iL(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.V(a,null,null))},
hG:function(a){var z=J.I(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bb(a)+"'"},
i7:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hS(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
i8:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.gY(a);x.G();)C.a.h(y,H.z(x.gP(x),c))
if(b)return y
return H.w(J.bA(y),"$isc",z,"$asc")},
c4:function(a,b,c){var z,y
z=P.m
H.w(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb7",[z],"$asb7")
y=a.length
c=P.aK(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.M()
z=c<y}else z=!0
return H.eq(z?C.a.bB(a,b,c):a)}if(!!J.I(a).$isd0)return H.iN(a,b,P.aK(b,c,a.length,null,null,null))
return P.jk(a,b,c)},
jk:function(a,b,c){var z,y,x,w
H.w(a,"$isj",[P.m],"$asj")
if(b<0)throw H.a(P.X(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.X(c,b,J.as(a),null,null))
y=J.bv(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.X(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gP(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.X(c,b,x,null,null))
w.push(y.gP(y))}return H.eq(w)},
iU:function(a,b,c){return new H.hU(a,H.hV(a,!1,!0,!1))},
f2:function(){var z=H.iD()
if(z!=null)return P.jP(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cf:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hG(a)},
u:function(a){return new P.fd(a)},
i9:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.e([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dz:function(a){H.mS(a)},
jP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.E(a,b+4)^58)*3|C.b.E(a,b)^100|C.b.E(a,b+1)^97|C.b.E(a,b+2)^116|C.b.E(a,b+3)^97)>>>0
if(y===0)return P.f1(b>0||c<c?C.b.q(a,b,c):a,5,null).ge5()
else if(y===32)return P.f1(C.b.q(a,z,c),0,null).ge5()}x=new Array(8)
x.fixed$length=Array
w=H.e(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fC(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.ih()
if(v>=b)if(P.fC(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.A()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.M()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.M()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.M()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a3(a,"..",s)))n=r>s+2&&C.b.a3(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a3(a,"file",b)){if(u<=b){if(!C.b.a3(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.q(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aL(a,s,r,"/");++r;++q;++c}else{a=C.b.q(a,b,s)+"/"+C.b.q(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a3(a,"http",b)){if(x&&t+3===s&&C.b.a3(a,"80",t+1))if(b===0&&!0){a=C.b.aL(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.q(a,b,t)+C.b.q(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a3(a,"https",b)){if(x&&t+4===s&&C.b.a3(a,"443",t+1))if(b===0&&!0){a=C.b.aL(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.q(a,b,t)+C.b.q(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.q(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.l8(a,v,u,t,s,r,q,o)}return P.lv(a,b,c,v,u,t,s,r,q,o)},
f4:function(a,b){var z=P.i
return C.a.hr(H.e(a.split("&"),[z]),P.ef(z,z),new P.jS(b),[P.H,P.i,P.i])},
jN:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jO(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.T(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ca(C.b.q(a,v,w),null,null)
if(typeof s!=="number")return s.cB()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ca(C.b.q(a,v,c),null,null)
if(typeof s!=="number")return s.cB()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
f3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jQ(a)
y=new P.jR(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.T(a,w)
if(s===58){if(w===b){++w
if(C.b.T(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaw(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jN(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.e.aF(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
m2:function(){var z,y,x,w,v
z=P.i9(22,new P.m4(),!0,P.N)
y=new P.m3(z)
x=new P.m5()
w=new P.m6()
v=H.f(y.$2(0,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isN")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isN")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isN"),"]",5)
v=H.f(y.$2(9,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isN"),"az",21)
v=H.f(y.$2(21,245),"$isN")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fC:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fD()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.E(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ag:{"^":"b;"},
"+bool":0,
aA:{"^":"b;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a&&this.b===b.b},
gR:function(a){var z=this.a
return(z^C.e.aF(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hv(H.iK(this))
y=P.bX(H.iI(this))
x=P.bX(H.iE(this))
w=P.bX(H.iF(this))
v=P.bX(H.iH(this))
u=P.bX(H.iJ(this))
t=P.hw(H.iG(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hv:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hw:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bX:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"Z;"},
"+double":0,
b4:{"^":"b;a",
k:function(a,b){return new P.b4(C.e.a7(this.a*b))},
M:function(a,b){return C.e.M(this.a,H.f(b,"$isb4").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.b4))return!1
return this.a===b.a},
gR:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hB()
y=this.a
if(y<0)return"-"+new P.b4(0-y).i(0)
x=z.$1(C.e.a1(y,6e7)%60)
w=z.$1(C.e.a1(y,1e6)%60)
v=new P.hA().$1(y%1e6)
return""+C.e.a1(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e1:function(a,b,c,d,e,f){return new P.b4(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hA:{"^":"n:18;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hB:{"^":"n:18;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a4:{"^":"b;"},
em:{"^":"a4;",
i:function(a){return"Throw of null."}},
aF:{"^":"a4;a,b,c,d",
gbI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbH:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbI()+y+x
if(!this.a)return w
v=this.gbH()
u=P.cf(this.b)
return w+v+": "+H.l(u)},
p:{
bV:function(a){return new P.aF(!1,null,null,a)},
cc:function(a,b,c){return new P.aF(!0,a,b,c)},
dF:function(a){return new P.aF(!1,null,a,"Must not be null")}}},
cn:{"^":"aF;e,f,a,b,c,d",
gbI:function(){return"RangeError"},
gbH:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
co:function(a,b,c){return new P.cn(null,null,!0,a,b,"Value not in range")},
X:function(a,b,c,d,e){return new P.cn(b,c,!0,a,d,"Invalid value")},
aK:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.X(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.X(b,a,c,"end",f))
return b}return c}}},
hO:{"^":"aF;e,l:f>,a,b,c,d",
gbI:function(){return"RangeError"},
gbH:function(){if(J.h2(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
R:function(a,b,c,d,e){var z=H.D(e!=null?e:J.as(b))
return new P.hO(b,z,!0,a,c,"Index out of range")}}},
jL:{"^":"a4;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jL(a)}}},
jI:{"^":"a4;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c5:function(a){return new P.jI(a)}}},
je:{"^":"a4;a",
i:function(a){return"Bad state: "+this.a}},
ho:{"^":"a4;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cf(z))+"."},
p:{
b2:function(a){return new P.ho(a)}}},
iz:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa4:1},
ev:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa4:1},
hu:{"^":"a4;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fd:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hM:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.q(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.E(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.T(w,s)
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
m=""}l=C.b.q(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
p:{
V:function(a,b,c){return new P.hM(a,b,c)}}},
m:{"^":"Z;"},
"+int":0,
j:{"^":"b;$ti",
gl:function(a){var z,y
z=this.gY(this)
for(y=0;z.G();)++y
return y},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dF("index"))
if(b<0)H.p(P.X(b,0,null,"index",null))
for(z=this.gY(this),y=0;z.G();){x=z.gP(z)
if(b===y)return x;++y}throw H.a(P.R(b,this,"index",null,y))},
i:function(a){return P.hQ(this,"(",")")}},
cR:{"^":"b;$ti"},
c:{"^":"b;$ti",$isj:1},
"+List":0,
H:{"^":"b;$ti"},
G:{"^":"b;",
gR:function(a){return P.b.prototype.gR.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Z:{"^":"b;"},
"+num":0,
b:{"^":";",
t:function(a,b){return this===b},
gR:function(a){return H.bG(this)},
i:function(a){return"Instance of '"+H.bb(this)+"'"},
toString:function(){return this.i(this)}},
av:{"^":"b;"},
i:{"^":"b;",$isen:1},
"+String":0,
am:{"^":"b;aC:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$iso1:1,
p:{
ey:function(a,b,c){var z=J.bv(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.G())}else{a+=H.l(z.gP(z))
for(;z.G();)a=a+c+H.l(z.gP(z))}return a}}},
jS:{"^":"n:44;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isH",[z,z],"$asH")
H.L(b)
y=J.aE(b).dK(b,"=")
if(y===-1){if(b!=="")J.cE(a,P.dk(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.q(b,0,y)
w=C.b.ay(b,y+1)
z=this.a
J.cE(a,P.dk(x,0,x.length,z,!0),P.dk(w,0,w.length,z,!0))}return a}},
jO:{"^":"n:42;a",
$2:function(a,b){throw H.a(P.V("Illegal IPv4 address, "+a,this.a,b))}},
jQ:{"^":"n:40;a",
$2:function(a,b){throw H.a(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jR:{"^":"n:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ca(C.b.q(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cu:{"^":"b;bA:a<,b,c,d,dW:e>,f,r,0x,0y,0z,0Q,0ch",
ge6:function(){return this.b},
gci:function(a){var z=this.c
if(z==null)return""
if(C.b.a2(z,"["))return C.b.q(z,1,z.length-1)
return z},
gbv:function(a){var z=this.d
if(z==null)return P.fs(this.a)
return z},
gco:function(a){var z=this.f
return z==null?"":z},
gdF:function(){var z=this.r
return z==null?"":z},
cs:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.i,null],"$asH")
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
g=P.dj(g,0,0,h)
return new P.cu(i,j,c,f,d,g,this.r)},
e_:function(a,b){return this.cs(a,null,null,null,null,null,null,b,null,null)},
gcp:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f0(P.f4(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdG:function(){return this.c!=null},
gdJ:function(){return this.f!=null},
gdH:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.l(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.l(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.l(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
t:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isdd){y=this.a
x=b.gbA()
if(y==null?x==null:y===x)if(this.c!=null===b.gdG()){y=this.b
x=b.ge6()
if(y==null?x==null:y===x){y=this.gci(this)
x=z.gci(b)
if(y==null?x==null:y===x){y=this.gbv(this)
x=z.gbv(b)
if(y==null?x==null:y===x)if(this.e===z.gdW(b)){y=this.f
x=y==null
if(!x===b.gdJ()){if(x)y=""
if(y===z.gco(b)){z=this.r
y=z==null
if(!y===b.gdH()){if(y)z=""
z=z===b.gdF()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gR:function(a){var z=this.z
if(z==null){z=C.b.gR(this.i(0))
this.z=z}return z},
$isdd:1,
p:{
cv:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fx().b
if(typeof b!=="string")H.p(H.ad(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.ax(c,"bW",0))
y=c.gho().c5(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cm(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lv:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lG(a,b,d)
else{if(d===b)P.bM(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lH(a,z,e-1):""
x=P.lA(a,e,f,!1)
if(typeof f!=="number")return f.A()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lD(P.ca(C.b.q(a,w,g),new P.lw(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lB(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.dj(a,h+1,i,null):null
return new P.cu(j,y,x,v,u,t,i<c?P.lz(a,i+1,c):null)},
fs:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bM:function(a,b,c){throw H.a(P.V(c,a,b))},
lD:function(a,b){if(a!=null&&a===P.fs(b))return
return a},
lA:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.T(a,b)===91){if(typeof c!=="number")return c.O()
z=c-1
if(C.b.T(a,z)!==93)P.bM(a,b,"Missing end `]` to match `[` in host")
P.f3(a,b+1,z)
return C.b.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.T(a,y)===58){P.f3(a,b,c)
return"["+a+"]"}return P.lJ(a,b,c)},
lJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.T(a,z)
if(v===37){u=P.fz(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.am("")
s=C.b.q(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.q(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.am("")
if(y<z){x.a+=C.b.q(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bM(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.T(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.am("")
s=C.b.q(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.ft(v)
z+=q
y=z}}}}if(x==null)return C.b.q(a,b,c)
if(y<c){s=C.b.q(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lG:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fv(C.b.E(a,b)))P.bM(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.E(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bM(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.q(a,b,c)
return P.lx(y?a.toLowerCase():a)},
lx:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lH:function(a,b,c){return P.bN(a,b,c,C.R)},
lB:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bN(a,b,c,C.y):C.t.j_(d,new P.lC(),P.i).B(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a2(w,"/"))w="/"+w
return P.lI(w,e,f)},
lI:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a2(a,"/"))return P.lK(a,!z||c)
return P.lL(a)},
dj:function(a,b,c,d){var z,y
z={}
H.w(d,"$isH",[P.i,null],"$asH")
if(a!=null){if(d!=null)throw H.a(P.bV("Both query and queryParameters specified"))
return P.bN(a,b,c,C.n)}if(d==null)return
y=new P.am("")
z.a=""
d.I(0,new P.lE(new P.lF(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lz:function(a,b,c){return P.bN(a,b,c,C.n)},
fz:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.T(a,b+1)
x=C.b.T(a,z)
w=H.cB(y)
v=H.cB(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aF(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cm(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
ft:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.E("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.E("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.e.fB(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.E("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.E("0123456789ABCDEF",u&15))
v+=3}}return P.c4(y,0,null)},
bN:function(a,b,c,d){var z=P.fy(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.q(a,b,c):z},
fy:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.T(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fz(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bM(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.T(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.ft(v)}}if(w==null)w=new P.am("")
w.a+=C.b.q(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.q(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fw:function(a){if(C.b.a2(a,"."))return!0
return C.b.dK(a,"/.")!==-1},
lL:function(a){var z,y,x,w,v,u,t
if(!P.fw(a))return a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.O(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.B(z,"/")},
lK:function(a,b){var z,y,x,w,v,u
if(!P.fw(a))return!b?P.fu(a):a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaw(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaw(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.m(z,0,P.fu(z[0]))}return C.a.B(z,"/")},
fu:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fv(J.h3(a,0)))for(y=1;y<z;++y){x=C.b.E(a,y)
if(x===58)return C.b.q(a,0,y)+"%3A"+C.b.ay(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
ly:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.E(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bV("Invalid URL encoding"))}}return z},
dk:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.du(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.E(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.q(a,b,c)
else u=new H.a3(y.q(a,b,c))}else{u=H.e([],[P.m])
for(x=b;x<c;++x){w=y.E(a,x)
if(w>127)throw H.a(P.bV("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bV("Truncated URI"))
C.a.h(u,P.ly(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.jW(!1).c5(u)},
fv:function(a){var z=a|32
return 97<=z&&z<=122}}},
lw:{"^":"n:39;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.A()
throw H.a(P.V("Invalid port",this.a,z+1))}},
lC:{"^":"n:38;",
$1:function(a){return P.cv(C.T,a,C.k,!1)}},
lF:{"^":"n:24;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cv(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cv(C.p,b,C.k,!0))}}},
lE:{"^":"n:36;a",
$2:function(a,b){var z,y
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(z=J.bv(H.fU(b,"$isj")),y=this.a;z.G();)y.$2(a,H.L(z.gP(z)))}},
jM:{"^":"b;a,b,c",
ge5:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.dL(y,"?",z)
w=y.length
if(x>=0){v=P.bN(y,x+1,w,C.n)
w=x}else v=null
z=new P.kq(this,"data",null,null,null,P.bN(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f1:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.E(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.V("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.V("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.E(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaw(z)
if(v!==44||x!==t+7||!C.b.a3(a,"base64",t+1))throw H.a(P.V("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hI(0,a,s,y)
else{r=P.fy(a,s,y,C.n,!0)
if(r!=null)a=C.b.aL(a,s,y,r)}return new P.jM(a,z,c)}}},
m4:{"^":"n:34;",
$1:function(a){return new Uint8Array(96)}},
m3:{"^":"n:30;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.h7(z,0,96,b)
return z}},
m5:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.E(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
m6:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.E(b,0),y=C.b.E(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
l8:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdG:function(){return this.c>0},
gdI:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.A()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gdJ:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
gdH:function(){return this.r<this.a.length},
gcU:function(){return this.b===4&&C.b.a2(this.a,"http")},
gcV:function(){return this.b===5&&C.b.a2(this.a,"https")},
gbA:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcU()){this.x="http"
z="http"}else if(this.gcV()){this.x="https"
z="https"}else if(z===4&&C.b.a2(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a2(this.a,"package")){this.x="package"
z="package"}else{z=C.b.q(this.a,0,z)
this.x=z}return z},
ge6:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.q(this.a,y,z-1):""},
gci:function(a){var z=this.c
return z>0?C.b.q(this.a,z,this.d):""},
gbv:function(a){var z
if(this.gdI()){z=this.d
if(typeof z!=="number")return z.A()
return P.ca(C.b.q(this.a,z+1,this.e),null,null)}if(this.gcU())return 80
if(this.gcV())return 443
return 0},
gdW:function(a){return C.b.q(this.a,this.e,this.f)},
gco:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.q(this.a,z+1,y):""},
gdF:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ay(y,z+1):""},
gcp:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.U
z=P.i
return new P.f0(P.f4(this.gco(this),C.k),[z,z])},
cs:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.i,null],"$asH")
i=this.gbA()
z=i==="file"
y=this.c
j=y>0?C.b.q(this.a,this.b+3,y):""
f=this.gdI()?this.gbv(this):null
y=this.c
if(y>0)c=C.b.q(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.q(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a2(d,"/"))d="/"+d
g=P.dj(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ay(y,x+1)
return new P.cu(i,j,c,f,d,g,b)},
e_:function(a,b){return this.cs(a,null,null,null,null,null,null,b,null,null)},
gR:function(a){var z=this.y
if(z==null){z=C.b.gR(this.a)
this.y=z}return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isdd)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdd:1},
kq:{"^":"cu;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cM:function(a,b){var z=document.createElement("canvas")
return z},
hD:function(a){H.f(a,"$isab")
return"wheel"},
hP:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$ise7")
try{J.h9(z,a)}catch(x){H.ar(x)}return z},
cs:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ff:function(a,b,c,d){var z,y
z=W.cs(W.cs(W.cs(W.cs(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fG:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.d9(a,b)},
a6:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n3:{"^":"r;0l:length=","%":"AccessibleNodeList"},
n4:{"^":"a6;0Z:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
n5:{"^":"a6;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cI:{"^":"r;",$iscI:1,"%":";Blob"},
nb:{"^":"a6;0Z:type}","%":"HTMLButtonElement"},
cL:{"^":"a6;",
bz:function(a,b,c){if(c!=null)return a.getContext(b,P.mi(c,null))
return a.getContext(b)},
e9:function(a,b){return this.bz(a,b,null)},
$iscL:1,
"%":"HTMLCanvasElement"},
dP:{"^":"r;",$isdP:1,"%":"CanvasRenderingContext2D"},
nd:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nf:{"^":"ht;0l:length=","%":"CSSPerspective"},
b3:{"^":"r;",$isb3:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ng:{"^":"kp;0l:length=",
ea:function(a,b){var z=a.getPropertyValue(this.eA(a,b))
return z==null?"":z},
eA:function(a,b){var z,y
z=$.$get$dU()
y=z[b]
if(typeof y==="string")return y
y=this.fC(a,b)
z[b]=y
return y},
fC:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hx()+b
if(z in a)return z
return b},
gc0:function(a){return a.bottom},
gaj:function(a){return a.height},
gaJ:function(a){return a.left},
gbx:function(a){return a.right},
gb2:function(a){return a.top},
gam:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hs:{"^":"b;",
gaJ:function(a){return this.ea(a,"left")}},
dV:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ht:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nh:{"^":"dV;0l:length=","%":"CSSTransformValue"},
ni:{"^":"dV;0l:length=","%":"CSSUnparsedValue"},
nj:{"^":"r;0l:length=","%":"DataTransferItemList"},
nk:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
nl:{"^":"ks;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.w(c,"$isa7",[P.Z],"$asa7")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a7,P.Z]]},
$asx:function(){return[[P.a7,P.Z]]},
$isj:1,
$asj:function(){return[[P.a7,P.Z]]},
$isc:1,
$asc:function(){return[[P.a7,P.Z]]},
$asC:function(){return[[P.a7,P.Z]]},
"%":"ClientRectList|DOMRectList"},
hz:{"^":"r;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gam(a))+" x "+H.l(this.gaj(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bS(b,"$isa7",[P.Z],"$asa7")
if(!z)return!1
z=J.aY(b)
return a.left===z.gaJ(b)&&a.top===z.gb2(b)&&this.gam(a)===z.gam(b)&&this.gaj(a)===z.gaj(b)},
gR:function(a){return W.ff(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF,this.gaj(a)&0x1FFFFFFF)},
gc0:function(a){return a.bottom},
gaj:function(a){return a.height},
gaJ:function(a){return a.left},
gbx:function(a){return a.right},
gb2:function(a){return a.top},
gam:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.Z]},
"%":";DOMRectReadOnly"},
nm:{"^":"ku;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"DOMStringList"},
nn:{"^":"r;0l:length=","%":"DOMTokenList"},
ko:{"^":"ck;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.f(z[b],"$isa0")},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa0")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gY:function(a){var z=this.ib(this)
return new J.ay(z,z.length,0,[H.y(z,0)])},
av:function(a,b,c,d){throw H.a(P.c5(null))},
$asx:function(){return[W.a0]},
$asj:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
a0:{"^":"J;",
gc4:function(a){return new W.ko(a,a.children)},
gda:function(a){return P.iQ(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Z)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
no:{"^":"a6;0Z:type}","%":"HTMLEmbedElement"},
aa:{"^":"r;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ab:{"^":"r;",
d7:["ed",function(a,b,c,d){H.h(c,{func:1,args:[W.aa]})
if(c!=null)this.ex(a,b,c,!1)}],
ex:function(a,b,c,d){return a.addEventListener(b,H.br(H.h(c,{func:1,args:[W.aa]}),1),!1)},
$isab:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fl|fm|fo|fp"},
aU:{"^":"cI;",$isaU:1,"%":"File"},
e3:{"^":"kz;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isaU")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aU]},
$asx:function(){return[W.aU]},
$isj:1,
$asj:function(){return[W.aU]},
$isc:1,
$asc:function(){return[W.aU]},
$ise3:1,
$asC:function(){return[W.aU]},
"%":"FileList"},
np:{"^":"ab;0l:length=","%":"FileWriter"},
nq:{"^":"a6;0l:length=","%":"HTMLFormElement"},
b6:{"^":"r;",$isb6:1,"%":"Gamepad"},
nr:{"^":"r;0l:length=","%":"History"},
ns:{"^":"kM;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isj:1,
$asj:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asC:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bY:{"^":"r;0dd:data=",$isbY:1,"%":"ImageData"},
e6:{"^":"a6;",$ise6:1,"%":"HTMLImageElement"},
e7:{"^":"a6;0Z:type}",$ise7:1,"%":"HTMLInputElement"},
bB:{"^":"da;",$isbB:1,"%":"KeyboardEvent"},
nw:{"^":"a6;0Z:type}","%":"HTMLLinkElement"},
nx:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
ny:{"^":"r;0l:length=","%":"MediaList"},
nz:{"^":"ab;",
d7:function(a,b,c,d){H.h(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.ed(a,b,c,!1)},
"%":"MessagePort"},
nA:{"^":"kT;",
j:function(a,b){return P.aT(a.get(H.L(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gak:function(a){var z=H.e([],[P.i])
this.I(a,new W.ir(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asah:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIInputMap"},
ir:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nB:{"^":"kU;",
j:function(a,b){return P.aT(a.get(H.L(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gak:function(a){var z=H.e([],[P.i])
this.I(a,new W.is(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asah:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
is:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b9:{"^":"r;",$isb9:1,"%":"MimeType"},
nC:{"^":"kW;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb9")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b9]},
$asx:function(){return[W.b9]},
$isj:1,
$asj:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asC:function(){return[W.b9]},
"%":"MimeTypeArray"},
au:{"^":"da;",$isau:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kn:{"^":"ck;a",
m:function(a,b,c){var z,y
H.D(b)
H.f(c,"$isJ")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gY:function(a){var z=this.a.childNodes
return new W.e4(z,z.length,-1,[H.aZ(C.W,z,"C",0)])},
av:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asx:function(){return[W.J]},
$asj:function(){return[W.J]},
$asc:function(){return[W.J]}},
J:{"^":"ab;",
i0:function(a,b){var z,y
try{z=a.parentNode
J.h4(z,b,a)}catch(y){H.ar(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ee(a):z},
fl:function(a,b,c){return a.replaceChild(b,c)},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iw:{"^":"kY;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isj:1,
$asj:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asC:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
nK:{"^":"a6;0Z:type}","%":"HTMLOListElement"},
nL:{"^":"a6;0Z:type}","%":"HTMLObjectElement"},
ba:{"^":"r;0l:length=",$isba:1,"%":"Plugin"},
nO:{"^":"l1;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isba")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asx:function(){return[W.ba]},
$isj:1,
$asj:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asC:function(){return[W.ba]},
"%":"PluginArray"},
nQ:{"^":"r;0Z:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
nR:{"^":"l7;",
j:function(a,b){return P.aT(a.get(H.L(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gak:function(a){var z=H.e([],[P.i])
this.I(a,new W.j_(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asah:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j_:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nT:{"^":"a6;0Z:type}","%":"HTMLScriptElement"},
nV:{"^":"a6;0l:length=","%":"HTMLSelectElement"},
bc:{"^":"ab;",$isbc:1,"%":"SourceBuffer"},
nW:{"^":"fm;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isj:1,
$asj:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asC:function(){return[W.bc]},
"%":"SourceBufferList"},
nX:{"^":"a6;0Z:type}","%":"HTMLSourceElement"},
bd:{"^":"r;",$isbd:1,"%":"SpeechGrammar"},
nY:{"^":"la;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbd")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asx:function(){return[W.bd]},
$isj:1,
$asj:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asC:function(){return[W.bd]},
"%":"SpeechGrammarList"},
be:{"^":"r;0l:length=",$isbe:1,"%":"SpeechRecognitionResult"},
o_:{"^":"ld;",
j:function(a,b){return a.getItem(H.L(b))},
m:function(a,b,c){a.setItem(b,H.L(c))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gak:function(a){var z=H.e([],[P.i])
this.I(a,new W.jg(z))
return z},
gl:function(a){return a.length},
$asah:function(){return[P.i,P.i]},
$isH:1,
$asH:function(){return[P.i,P.i]},
"%":"Storage"},
jg:{"^":"n:24;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o2:{"^":"a6;0Z:type}","%":"HTMLStyleElement"},
bf:{"^":"r;",$isbf:1,"%":"CSSStyleSheet|StyleSheet"},
d6:{"^":"a6;",$isd6:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bg:{"^":"ab;",$isbg:1,"%":"TextTrack"},
bh:{"^":"ab;",$isbh:1,"%":"TextTrackCue|VTTCue"},
o5:{"^":"lk;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isj:1,
$asj:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asC:function(){return[W.bh]},
"%":"TextTrackCueList"},
o6:{"^":"fp;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbg")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isj:1,
$asj:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asC:function(){return[W.bg]},
"%":"TextTrackList"},
o7:{"^":"r;0l:length=","%":"TimeRanges"},
bj:{"^":"r;",$isbj:1,"%":"Touch"},
bk:{"^":"da;",$isbk:1,"%":"TouchEvent"},
o8:{"^":"lq;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbj")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isj:1,
$asj:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asC:function(){return[W.bj]},
"%":"TouchList"},
o9:{"^":"r;0l:length=","%":"TrackDefaultList"},
da:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
ob:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
oc:{"^":"ab;0l:length=","%":"VideoTrackList"},
bK:{"^":"au;",
ghk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbK:1,
"%":"WheelEvent"},
kg:{"^":"ab;",
fm:function(a,b){return a.requestAnimationFrame(H.br(H.h(b,{func:1,ret:-1,args:[P.Z]}),1))},
eI:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oh:{"^":"lS;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb3")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b3]},
$asx:function(){return[W.b3]},
$isj:1,
$asj:function(){return[W.b3]},
$isc:1,
$asc:function(){return[W.b3]},
$asC:function(){return[W.b3]},
"%":"CSSRuleList"},
oi:{"^":"hz;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bS(b,"$isa7",[P.Z],"$asa7")
if(!z)return!1
z=J.aY(b)
return a.left===z.gaJ(b)&&a.top===z.gb2(b)&&a.width===z.gam(b)&&a.height===z.gaj(b)},
gR:function(a){return W.ff(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaj:function(a){return a.height},
gam:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ok:{"^":"lU;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb6")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b6]},
$asx:function(){return[W.b6]},
$isj:1,
$asj:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asC:function(){return[W.b6]},
"%":"GamepadList"},
ol:{"^":"lW;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isj:1,
$asj:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asC:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
om:{"^":"lY;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asx:function(){return[W.be]},
$isj:1,
$asj:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asC:function(){return[W.be]},
"%":"SpeechRecognitionResultList"},
on:{"^":"m_;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asC:function(){return[W.bf]},
"%":"StyleSheetList"},
kv:{"^":"d5;a,b,c,$ti",
hC:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
oj:{"^":"kv;a,b,c,$ti"},
kw:{"^":"ex;a,b,c,d,e,$ti",
fG:function(){var z=this.d
if(z!=null&&this.a<=0)J.h5(this.b,this.c,z,!1)},
p:{
Y:function(a,b,c,d,e){var z=c==null?null:W.fG(new W.kx(c),W.aa)
z=new W.kw(0,a,b,z,!1,[e])
z.fG()
return z}}},
kx:{"^":"n:5;a",
$1:function(a){return this.a.$1(H.f(a,"$isaa"))}},
C:{"^":"b;$ti",
gY:function(a){return new W.e4(a,this.gl(a),-1,[H.aZ(this,a,"C",0)])},
av:function(a,b,c,d){H.z(d,H.aZ(this,a,"C",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
e4:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dC(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
kp:{"^":"r+hs;"},
kr:{"^":"r+x;"},
ks:{"^":"kr+C;"},
kt:{"^":"r+x;"},
ku:{"^":"kt+C;"},
ky:{"^":"r+x;"},
kz:{"^":"ky+C;"},
kL:{"^":"r+x;"},
kM:{"^":"kL+C;"},
kT:{"^":"r+ah;"},
kU:{"^":"r+ah;"},
kV:{"^":"r+x;"},
kW:{"^":"kV+C;"},
kX:{"^":"r+x;"},
kY:{"^":"kX+C;"},
l0:{"^":"r+x;"},
l1:{"^":"l0+C;"},
l7:{"^":"r+ah;"},
fl:{"^":"ab+x;"},
fm:{"^":"fl+C;"},
l9:{"^":"r+x;"},
la:{"^":"l9+C;"},
ld:{"^":"r+ah;"},
lj:{"^":"r+x;"},
lk:{"^":"lj+C;"},
fo:{"^":"ab+x;"},
fp:{"^":"fo+C;"},
lp:{"^":"r+x;"},
lq:{"^":"lp+C;"},
lR:{"^":"r+x;"},
lS:{"^":"lR+C;"},
lT:{"^":"r+x;"},
lU:{"^":"lT+C;"},
lV:{"^":"r+x;"},
lW:{"^":"lV+C;"},
lX:{"^":"r+x;"},
lY:{"^":"lX+C;"},
lZ:{"^":"r+x;"},
m_:{"^":"lZ+C;"}}],["","",,P,{"^":"",
ml:function(a){var z,y
z=J.I(a)
if(!!z.$isbY){y=z.gdd(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fr(a.data,a.height,a.width)},
mk:function(a){if(a instanceof P.fr)return{data:a.a,height:a.b,width:a.c}
return a},
aT:function(a){var z,y,x,w,v
if(a==null)return
z=P.ef(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.L(y[w])
z.m(0,v,a[v])}return z},
mi:function(a,b){var z={}
a.I(0,new P.mj(z))
return z},
e0:function(){var z=$.e_
if(z==null){z=J.cF(window.navigator.userAgent,"Opera",0)
$.e_=z}return z},
hx:function(){var z,y
z=$.dX
if(z!=null)return z
y=$.dY
if(y==null){y=J.cF(window.navigator.userAgent,"Firefox",0)
$.dY=y}if(y)z="-moz-"
else{y=$.dZ
if(y==null){y=!P.e0()&&J.cF(window.navigator.userAgent,"Trident/",0)
$.dZ=y}if(y)z="-ms-"
else z=P.e0()?"-o-":"-webkit-"}$.dX=z
return z},
lg:{"^":"b;",
dD:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cv:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.I(a)
if(!!y.$isaA)return new Date(a.a)
if(!!y.$isiT)throw H.a(P.c5("structured clone of RegExp"))
if(!!y.$isaU)return a
if(!!y.$iscI)return a
if(!!y.$ise3)return a
if(!!y.$isbY)return a
if(!!y.$isek||!!y.$isd_)return a
if(!!y.$isH){x=this.dD(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.I(a,new P.li(z,this))
return z.a}if(!!y.$isc){x=this.dD(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hh(a,x)}throw H.a(P.c5("structured clone of other type"))},
hh:function(a,b){var z,y,x,w
z=J.aE(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cv(z.j(a,w)))
return x}},
li:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cv(b)}},
fr:{"^":"b;dd:a>,b,c",$isbY:1},
mj:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lh:{"^":"lg;a,b"},
hJ:{"^":"ck;a,b",
gbb:function(){var z,y,x
z=this.b
y=H.ax(z,"x",0)
x=W.a0
return new H.ie(new H.ke(z,H.h(new P.hK(),{func:1,ret:P.ag,args:[y]}),[y]),H.h(new P.hL(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa0")
z=this.gbb()
J.h8(z.b.$1(J.cG(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
av:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.as(this.gbb().a)},
j:function(a,b){var z=this.gbb()
return z.b.$1(J.cG(z.a,b))},
gY:function(a){var z=P.i8(this.gbb(),!1,W.a0)
return new J.ay(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a0]},
$asj:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
hK:{"^":"n:29;",
$1:function(a){return!!J.I(H.f(a,"$isJ")).$isa0}},
hL:{"^":"n:27;",
$1:function(a){return H.k(H.f(a,"$isJ"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ct:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l2:{"^":"b;$ti",
gbx:function(a){var z=this.a
if(typeof z!=="number")return z.A()
return H.z(z+this.c,H.y(this,0))},
gc0:function(a){var z=this.b
if(typeof z!=="number")return z.A()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bS(b,"$isa7",[P.Z],"$asa7")
if(!z)return!1
z=this.a
y=J.aY(b)
x=y.gaJ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb2(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.A()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gbx(b)){if(typeof x!=="number")return x.A()
z=H.z(x+this.d,w)===y.gc0(b)}else z=!1}else z=!1}else z=!1
return z},
gR:function(a){var z,y,x,w,v
z=this.a
y=J.bU(z)
x=this.b
w=J.bU(x)
if(typeof z!=="number")return z.A()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.A()
v=H.z(x+this.d,v)
return P.kN(P.ct(P.ct(P.ct(P.ct(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"l2;aJ:a>,b2:b>,am:c>,aj:d>,$ti",p:{
iQ:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.M()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.M()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",bC:{"^":"r;",$isbC:1,"%":"SVGLength"},nv:{"^":"kP;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbC")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bC]},
$isj:1,
$asj:function(){return[P.bC]},
$isc:1,
$asc:function(){return[P.bC]},
$asC:function(){return[P.bC]},
"%":"SVGLengthList"},bE:{"^":"r;",$isbE:1,"%":"SVGNumber"},nJ:{"^":"l_;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbE")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bE]},
$isj:1,
$asj:function(){return[P.bE]},
$isc:1,
$asc:function(){return[P.bE]},
$asC:function(){return[P.bE]},
"%":"SVGNumberList"},nP:{"^":"r;0l:length=","%":"SVGPointList"},nU:{"^":"ez;0Z:type}","%":"SVGScriptElement"},o0:{"^":"lf;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"SVGStringList"},o3:{"^":"ez;0Z:type}","%":"SVGStyleElement"},ez:{"^":"a0;",
gc4:function(a){return new P.hJ(a,new W.kn(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bH:{"^":"r;",$isbH:1,"%":"SVGTransform"},oa:{"^":"ls;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbH")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bH]},
$isj:1,
$asj:function(){return[P.bH]},
$isc:1,
$asc:function(){return[P.bH]},
$asC:function(){return[P.bH]},
"%":"SVGTransformList"},kO:{"^":"r+x;"},kP:{"^":"kO+C;"},kZ:{"^":"r+x;"},l_:{"^":"kZ+C;"},le:{"^":"r+x;"},lf:{"^":"le+C;"},lr:{"^":"r+x;"},ls:{"^":"lr+C;"}}],["","",,P,{"^":"",N:{"^":"b;",$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjx:1}}],["","",,P,{"^":"",n6:{"^":"r;0l:length=","%":"AudioBuffer"},dH:{"^":"ab;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},n7:{"^":"km;",
j:function(a,b){return P.aT(a.get(H.L(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gak:function(a){var z=H.e([],[P.i])
this.I(a,new P.hc(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asah:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"AudioParamMap"},hc:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hd:{"^":"dH;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},n8:{"^":"ab;0l:length=","%":"AudioTrackList"},hg:{"^":"ab;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n9:{"^":"dH;0Z:type}","%":"BiquadFilterNode"},nM:{"^":"hg;0l:length=","%":"OfflineAudioContext"},nN:{"^":"hd;0Z:type}","%":"Oscillator|OscillatorNode"},km:{"^":"r+ah;"}}],["","",,P,{"^":"",d3:{"^":"r;",
i8:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isbY)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mk(g))
return}if(!!z.$ise6)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bV("Incorrect number or type of arguments"))},
i7:function(a,b,c,d,e,f,g){return this.i8(a,b,c,d,e,f,g,null,null,null)},
$isd3:1,
"%":"WebGLRenderingContext"},jG:{"^":"r;",$isjG:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",nZ:{"^":"lc;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return P.aT(a.item(b))},
m:function(a,b,c){H.D(b)
H.f(c,"$isH")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[[P.H,,,]]},
$isj:1,
$asj:function(){return[[P.H,,,]]},
$isc:1,
$asc:function(){return[[P.H,,,]]},
$asC:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},lb:{"^":"r+x;"},lc:{"^":"lb+C;"}}],["","",,O,{"^":"",aG:{"^":"b;0a,0b,0c,0d,$ti",
bD:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cC:function(a,b,c){var z=H.ax(this,"aG",0)
H.h(b,{func:1,ret:P.ag,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.m,[P.j,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
b8:function(a,b){return this.cC(a,null,b)},
fb:function(a){var z
H.w(a,"$isj",[H.ax(this,"aG",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eo:function(a,b){var z
H.w(b,"$isj",[H.ax(this,"aG",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gY:function(a){var z=this.a
return new J.ay(z,z.length,0,[H.y(z,0)])},
H:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ax(this,"aG",0)
H.z(b,z)
z=[z]
if(this.fb(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eo(x,H.e([b],z))}},
$isj:1,
p:{
cN:function(a){var z=new O.aG([a])
z.bD(a)
return z}}},cY:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gC:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
ep:function(a){var z=this.b
if(!(z==null))z.F(a)},
az:function(){return this.ep(null)},
gU:function(a){var z=this.a
if(z.length>0)return C.a.gaw(z)
else return V.c2()},
dY:function(a){var z=this.a
if(a==null)C.a.h(z,V.c2())
else C.a.h(z,a)
this.az()},
cn:function(){var z=this.a
if(z.length>0){z.pop()
this.az()}}}}],["","",,E,{"^":"",cH:{"^":"b;"},aH:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sa9:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gC()
y.toString
x=H.h(this.gdV(),{func:1,ret:-1,args:[D.v]})
C.a.L(y.a,x)}y=this.c
if(y!=null){y=y.gC()
y.toString
x=H.h(this.gdV(),{func:1,ret:-1,args:[D.v]})
C.a.h(y.a,x)}w=new D.S("shape",z,this.c,this,[F.eu])
w.b=!0
this.ad(w)}},
saX:function(a){var z,y,x,w
if(!J.O(this.r,a)){z=this.r
if(z!=null){y=z.gC()
y.toString
x=H.h(this.gdU(),{func:1,ret:-1,args:[D.v]})
C.a.L(y.a,x)}if(a!=null){y=a.gC()
y.toString
x=H.h(this.gdU(),{func:1,ret:-1,args:[D.v]})
C.a.h(y.a,x)}this.r=a
w=new D.S("mover",z,a,this,[U.ai])
w.b=!0
this.ad(w)}},
ax:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.O(y,this.x)){x=this.x
this.x=y
w=new D.S("matrix",x,y,this,[V.at])
w.b=!0
this.ad(w)}for(z=this.y.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.G();)z.d.ax(0,b)},
aK:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gU(z))
else C.a.h(z.a,y.k(0,z.gU(z)))
z.az()
a.dZ(this.f)
z=a.dy
x=(z&&C.a).gaw(z)
if(x!=null&&this.d!=null)x.i_(a,this)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aK(a)
a.dX()
a.dx.cn()},
gC:function(){var z=this.z
if(z==null){z=D.Q()
this.z=z}return z},
ad:function(a){var z=this.z
if(!(z==null))z.F(a)},
V:function(){return this.ad(null)},
hN:[function(a){H.f(a,"$isv")
this.e=null
this.ad(a)},function(){return this.hN(null)},"j5","$1","$0","gdV",0,2,1],
hM:[function(a){this.ad(H.f(a,"$isv"))},function(){return this.hM(null)},"j4","$1","$0","gdU",0,2,1],
hK:[function(a){this.ad(H.f(a,"$isv"))},function(){return this.hK(null)},"j2","$1","$0","gdT",0,2,1],
j1:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aH],"$asj")
for(z=b.length,y=this.gdT(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b5()
t.a=H.e([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.V()},"$2","ghJ",8,0,10],
j3:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aH],"$asj")
for(z=b.length,y=this.gdT(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b5()
t.a=H.e([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.h(y,x)
C.a.L(t.a,y)}}this.V()},"$2","ghL",8,0,10],
$isaJ:1,
p:{
e2:function(a,b,c,d,e,f){var z,y
z=new E.aH()
z.a=d
z.b=!0
y=O.cN(E.aH)
z.y=y
y.b8(z.ghJ(),z.ghL())
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
z.sa9(0,e)
z.saX(c)
return z}}},iV:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ek:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aA(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cY()
y=[V.at]
z.a=H.e([],y)
x=z.gC()
x.toString
w={func:1,ret:-1,args:[D.v]}
v=H.h(new E.iX(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cY()
z.a=H.e([],y)
v=z.gC()
v.toString
x=H.h(new E.iY(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cY()
z.a=H.e([],y)
y=z.gC()
y.toString
w=H.h(new E.iZ(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.d7])
this.dy=z
C.a.h(z,null)
this.fr=new H.aV(0,0,[P.i,A.et])},
ghW:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gU(z)
y=this.db
y=z.k(0,y.gU(y))
this.z=y
z=y}return z},
dZ:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaw(z):a;(z&&C.a).h(z,y)},
dX:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iW:function(a,b){var z=new E.iV(a,b)
z.ek(a,b)
return z}}},iX:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$isv")
z=this.a
z.z=null
z.ch=null}},iY:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iZ:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},jp:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch",
gC:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
er:[function(a){var z
H.f(a,"$isv")
z=this.x
if(!(z==null))z.F(a)
this.i2()},function(){return this.er(null)},"eq","$1","$0","gcF",0,2,1],
ght:function(){var z,y,x
z=Date.now()
y=C.e.a1(P.e1(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aA(z,!1)
return x/y},
cZ:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.d.cg(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.d.cg(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eE(C.q,this.gi1())},
i2:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jr(this),{func:1,ret:-1,args:[P.Z]})
C.B.eI(z)
C.B.fm(z,W.fG(y,P.Z))}},"$0","gi1",0,0,3],
hZ:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cZ()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aA(w,!1)
x.y=P.e1(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.az()
w=x.db
C.a.sl(w.a,0)
w.az()
w=x.dx
C.a.sl(w.a,0)
w.az()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aK(this.e)}}catch(v){z=H.ar(v)
y=H.bt(v)
P.dz("Error: "+H.l(z))
P.dz("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jq:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscL)return E.eD(a,!0,!0,!0,!1)
y=W.cM(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gc4(a).h(0,y)
w=E.eD(y,!0,!0,!0,!1)
w.a=a
return w},
eD:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jp()
y=P.i3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.bz(a,"webgl",y)
x=H.f(x==null?C.l.bz(a,"experimental-webgl",y):x,"$isd3")
if(x==null)H.p(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iW(x,a)
w=new T.jl(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jT(a)
v=new X.hX()
v.c=new X.aW(!1,!1,!1)
v.d=P.i6(null,null,null,P.m)
w.b=v
v=new X.it(w)
v.f=0
v.r=new V.U(0,0)
v.x=new V.U(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ia(w)
v.r=0
v.x=new V.U(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ju(w)
v.e=0
v.f=new V.U(0,0)
v.r=new V.U(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.ex,P.b]])
w.z=v
u=document
t=W.au
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.h(w.geZ(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.h(w.gf1(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.h(w.geW(),q),!1,r))
v=w.z
p=W.bB
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.h(w.gf3(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.h(w.gf2(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.h(w.gf6(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.h(w.gf8(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.h(w.gf7(),s),!1,t))
p=w.z
o=W.bK;(p&&C.a).h(p,W.Y(a,H.L(W.hD(a)),H.h(w.gf9(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.h(w.gf_(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.h(w.gf0(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.h(w.gfa(),q),!1,r))
r=w.z
q=W.bk
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.h(w.gfh(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.h(w.gff(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.h(w.gfg(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aA(Date.now(),!1)
z.ch=0
z.cZ()
return z}}},jr:{"^":"n:31;a",
$1:function(a){var z
H.mR(a)
z=this.a
if(z.z){z.z=!1
z.hZ()}}}}],["","",,Z,{"^":"",fa:{"^":"b;a,b",p:{
df:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bo(c)),35044)
a.bindBuffer(b,null)
return new Z.fa(b,z)}}},dL:{"^":"cH;a,b,c,d,e",
aP:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ar(y)
x=P.u('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},kd:{"^":"b;a",$isna:1},dM:{"^":"b;a,0b,c,d",
aI:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aP:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aP(a)},
ig:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aK:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.d(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$iso4:1},ch:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bb(this.c)+"'")+"]"}},bl:{"^":"b;a",
gcD:function(a){var z,y
z=this.a
y=(z&$.$get$aP().a)!==0?3:0
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aQ().a)!==0)y+=2
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=4
if((z&$.$get$bm().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
h9:function(a){var z,y,x
z=$.$get$aP()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f9()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.i])
y=this.a
if((y&$.$get$aP().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aR().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bm().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
p:{
ap:function(a){return new Z.bl(a)}}}}],["","",,D,{"^":"",dQ:{"^":"b;"},b5:{"^":"b;0a,0b,0c",
F:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.v(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.I(y,new D.hH(z))
return x!==0},
hm:function(){return this.F(null)},
i3:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.F(y)}}},
ae:function(a){return this.i3(a,!0,!1)},
p:{
Q:function(){var z=new D.b5()
z.a=H.e([],[{func:1,ret:-1,args:[D.v]}])
z.c=0
return z}}},hH:{"^":"n:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"b;a,0b"},ci:{"^":"v;c,d,a,0b,$ti"},cj:{"^":"v;c,d,a,0b,$ti"},S:{"^":"v;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dN:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dN))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"nc<"}},ec:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ec))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ed:{"^":"v;c,a,0b"},hX:{"^":"b;0a,0b,0c,0d",
hT:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ed(a,this)
y.b=!0
return z.F(y)},
hP:function(a){var z,y
this.c=a.b
this.d.L(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ed(a,this)
y.b=!0
return z.F(y)}},eh:{"^":"d2;x,y,c,d,e,a,0b"},ia:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ap:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aA(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.U(y.a+x*w,y.b+v*u)
u=this.a.gbg()
s=new X.c3(a,new V.U(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cm:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.F(this.ap(a,b))
return!0},
aZ:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ec()
if(typeof z!=="number")return z.by()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.ap(a,b))
return!0},
aY:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.ap(a,b))
return!0},
hU:function(a){return!1},
f5:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aA(Date.now(),!1)
y=this.f
x=new X.eh(c,a,this.a.gbg(),b,z,this)
x.b=!0
y.F(x)
this.y=z
this.x=new V.U(0,0)}},aW:{"^":"b;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aW))return!1
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
return z+(this.c?"Shift+":"")}},c3:{"^":"d2;x,y,z,Q,ch,c,d,e,a,0b"},it:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bJ:function(a,b,c){var z,y,x
z=new P.aA(Date.now(),!1)
y=this.a.gbg()
x=new X.c3(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cm:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.F(this.bJ(a,b,!0))
return!0},
aZ:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ec()
if(typeof z!=="number")return z.by()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.bJ(a,b,!0))
return!0},
aY:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.bJ(a,b,!1))
return!0},
hV:function(a,b){return!1}},d2:{"^":"v;"},eI:{"^":"d2;x,y,z,Q,ch,c,d,e,a,0b"},ju:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ap:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.U],"$asc")
z=new P.aA(Date.now(),!1)
y=a.length>0?a[0]:new V.U(0,0)
x=this.a.gbg()
w=new X.eI(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hS:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.b
if(z==null)return!1
z.F(this.ap(a,!0))
return!0},
hQ:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.c
if(z==null)return!1
z.F(this.ap(a,!0))
return!0},
hR:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.d
if(z==null)return!1
z.F(this.ap(a,!1))
return!0}},jT:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbg:function(){var z=this.a
return V.es(0,0,(z&&C.l).gda(z).c,C.l.gda(z).d)},
cP:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ec(z,new X.aW(y,a.altKey,a.shiftKey))},
aE:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aW(y,a.altKey,a.shiftKey)},
bV:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aW(y,a.altKey,a.shiftKey)},
ar:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.O()
v=z.top
if(typeof x!=="number")return x.O()
return new V.U(y-w,x-v)},
aN:function(a){return new V.a5(a.movementX,a.movementY)},
bP:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.U])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.d.a7(u.pageX)
C.d.a7(u.pageY)
s=z.left
C.d.a7(u.pageX)
C.a.h(y,new V.U(t-s,C.d.a7(u.pageY)-z.top))}return y},
an:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dN(z,new X.aW(y,a.altKey,a.shiftKey))},
bL:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.O()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.O()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iE:[function(a){this.f=!0},"$1","gf1",4,0,5],
ix:[function(a){this.f=!1},"$1","geW",4,0,5],
iB:[function(a){H.f(a,"$isau")
if(this.f&&this.bL(a))a.preventDefault()},"$1","geZ",4,0,4],
iG:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.cP(a)
if(this.b.hT(z))a.preventDefault()},"$1","gf3",4,0,25],
iF:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.cP(a)
if(this.b.hP(z))a.preventDefault()},"$1","gf2",4,0,25],
iI:[function(a){var z,y,x,w
H.f(a,"$isau")
z=this.a
z.focus()
this.f=!0
this.aE(a)
if(this.x){y=this.an(a)
x=this.aN(a)
if(this.d.cm(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.an(a)
w=this.ar(a)
if(this.c.cm(y,w))a.preventDefault()},"$1","gf6",4,0,4],
iK:[function(a){var z,y,x
H.f(a,"$isau")
this.aE(a)
z=this.an(a)
if(this.x){y=this.aN(a)
if(this.d.aZ(z,y))a.preventDefault()
return}if(this.r)return
x=this.ar(a)
if(this.c.aZ(z,x))a.preventDefault()},"$1","gf8",4,0,4],
iD:[function(a){var z,y,x
H.f(a,"$isau")
if(!this.bL(a)){this.aE(a)
z=this.an(a)
if(this.x){y=this.aN(a)
if(this.d.aZ(z,y))a.preventDefault()
return}if(this.r)return
x=this.ar(a)
if(this.c.aZ(z,x))a.preventDefault()}},"$1","gf0",4,0,4],
iJ:[function(a){var z,y,x
H.f(a,"$isau")
this.aE(a)
z=this.an(a)
if(this.x){y=this.aN(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ar(a)
if(this.c.aY(z,x))a.preventDefault()},"$1","gf7",4,0,4],
iC:[function(a){var z,y,x
H.f(a,"$isau")
if(!this.bL(a)){this.aE(a)
z=this.an(a)
if(this.x){y=this.aN(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ar(a)
if(this.c.aY(z,x))a.preventDefault()}},"$1","gf_",4,0,4],
iL:[function(a){var z,y
H.f(a,"$isbK")
this.aE(a)
z=new V.a5((a&&C.A).ghj(a),C.A.ghk(a)).u(0,180)
if(this.x){if(this.d.hU(z))a.preventDefault()
return}if(this.r)return
y=this.ar(a)
if(this.c.hV(z,y))a.preventDefault()},"$1","gf9",4,0,35],
iM:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.an(this.y)
v=this.ar(this.y)
this.d.f5(w,v,x)}},"$1","gfa",4,0,5],
iS:[function(a){var z
H.f(a,"$isbk")
this.a.focus()
this.f=!0
this.bV(a)
z=this.bP(a)
if(this.e.hS(z))a.preventDefault()},"$1","gfh",4,0,12],
iQ:[function(a){var z
H.f(a,"$isbk")
this.bV(a)
z=this.bP(a)
if(this.e.hQ(z))a.preventDefault()},"$1","gff",4,0,12],
iR:[function(a){var z
H.f(a,"$isbk")
this.bV(a)
z=this.bP(a)
if(this.e.hR(z))a.preventDefault()},"$1","gfg",4,0,12]}}],["","",,D,{"^":"",hy:{"^":"b;",$isa1:1,$isaJ:1},a1:{"^":"b;",$isaJ:1},hY:{"^":"aG;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gC:function(){var z=this.Q
if(z==null){z=D.Q()
this.Q=z}return z},
aq:function(a){var z=this.Q
if(!(z==null))z.F(a)},
f4:[function(a){var z
H.f(a,"$isv")
z=this.ch
if(!(z==null))z.F(a)},function(){return this.f4(null)},"iH","$1","$0","gcW",0,2,1],
iN:[function(a){var z,y,x
H.w(a,"$isj",[D.a1],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.eE(x))return!1}return!0},"$1","gfc",4,0,37],
iu:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcW(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.f(b[u],"$isa1")
if(t instanceof D.cp)C.a.h(this.x,t)
s=t.r
if(s==null){s=new D.b5()
s.a=H.e([],v)
s.c=0
t.r=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.ci(a,b,this,[z])
z.b=!0
this.aq(z)},"$2","geT",8,0,23],
iP:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcW(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.f(b[u],"$isa1")
if(t instanceof D.cp)C.a.L(this.x,t)
s=t.r
if(s==null){s=new D.b5()
s.a=H.e([],v)
s.c=0
t.r=s}H.h(x,w)
C.a.L(s.a,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.aq(z)},"$2","gfe",8,0,23],
eE:function(a){var z=C.a.aQ(this.x,a)
return z},
$asj:function(){return[D.a1]},
$asaG:function(){return[D.a1]}},iC:{"^":"b;",$isa1:1,$isaJ:1},jd:{"^":"b;",$isa1:1,$isaJ:1},cp:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gC:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
aq:[function(a){var z
H.f(a,"$isv")
z=this.r
if(!(z==null))z.F(a)},function(){return this.aq(null)},"iy","$1","$0","gbO",0,2,1],
$isa1:1,
$isaJ:1},jn:{"^":"b;",$isa1:1,$isaJ:1},jo:{"^":"b;",$isa1:1,$isaJ:1}}],["","",,V,{"^":"",
ne:[function(a,b){if(typeof b!=="number")return b.O()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iq",8,0,33],
n2:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.b7(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.b.a6("null",c)
return C.b.a6(C.d.e4($.q.$2(a,0)?0:a,b),c+b+1)},
bs:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.t],"$asc")
z=H.e([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.b.a6(z[u],x))}return z},
dy:function(a,b){return C.d.ia(Math.pow(b,C.I.cg(Math.log(H.mh(a))/Math.log(b))))},
a_:{"^":"b;a,b,c",
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
return new V.a_(z,y,x)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
b1:{"^":"b;a,b,c,d",
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
return new V.b1(z,y,x,w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b1))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
cl:{"^":"b;a,b,c,d,e,f,r,x,y",
a8:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$iscl")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.d.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.d.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.d.k(t,s)
q=a5.b
p=C.d.k(z,q)
o=a5.e
n=C.d.k(w,o)
m=a5.x
l=C.d.k(t,m)
k=a5.c
z=C.d.k(z,k)
j=a5.f
w=C.d.k(w,j)
i=a5.y
t=C.d.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.d.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.d.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.d.k(d,s)
b=C.d.k(h,q)
a=C.d.k(f,o)
a0=C.d.k(d,m)
h=C.d.k(h,k)
f=C.d.k(f,j)
d=C.d.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.d.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.d.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cl(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.k(a3,s),C.d.k(a1,q)+C.d.k(a2,o)+C.d.k(a3,m),C.d.k(a1,k)+C.d.k(a2,j)+C.d.k(a3,i))},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cl))return!1
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
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.bs(H.e([this.a,this.d,this.r],z),3,0)
x=V.bs(H.e([this.b,this.e,this.x],z),3,0)
w=V.bs(H.e([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.d(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.d(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.d(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.d(y,1)
s=" "+y[1]+", "
if(1>=u)return H.d(x,1)
s=s+x[1]+", "
if(1>=t)return H.d(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.d(y,2)
z=" "+y[2]+", "
if(2>=u)return H.d(x,2)
z=z+x[2]+", "
if(2>=t)return H.d(w,2)
return s+(z+w[2]+"]")}},
at:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a8:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
dM:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.q.$2(a2,0))return V.c2()
a3=1/a2
a4=-w
a5=-i
return V.aI((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isat")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
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
return V.aI(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
b4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.E(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.a2(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.at))return!1
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
i:function(a){return this.J()},
dE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.bs(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bs(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bs(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bs(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.d(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.d(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.d(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.d(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.d(y,1)
q=q+y[1]+", "
if(1>=t)return H.d(x,1)
q=q+x[1]+", "
if(1>=s)return H.d(w,1)
q=q+w[1]+", "
if(1>=r)return H.d(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.d(y,2)
u=u+y[2]+", "
if(2>=t)return H.d(x,2)
u=u+x[2]+", "
if(2>=s)return H.d(w,2)
u=u+w[2]+", "
if(2>=r)return H.d(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.d(y,3)
q=q+y[3]+", "
if(3>=t)return H.d(x,3)
q=q+x[3]+", "
if(3>=s)return H.d(w,3)
q=q+w[3]+", "
if(3>=r)return H.d(v,3)
return u+(q+v[3]+"]")},
J:function(){return this.dE("",3,0)},
w:function(a){return this.dE(a,3,0)},
p:{
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c2:function(){return V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ej:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aI(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)}}},
U:{"^":"b;a,b",
O:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.U(this.a*b,this.b*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
a2:{"^":"b;a,b,c",
A:function(a,b){return new V.a2(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a,b){return new V.a2(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.a2(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
bF:{"^":"b;a,b,c,d",
k:function(a,b){return new V.bF(this.a*b,this.b*b,this.c*b,this.d*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bF))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
er:{"^":"b;a,b,c,d",
gal:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.er))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
p:{
es:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.er(a,b,c,d)}}},
a5:{"^":"b;a,b",
hA:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,22],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.a5(z*b,y*b)},
u:function(a,b){var z,y
if($.q.$2(b,0))return new V.a5(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.a5(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
hA:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,22],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cl:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
as:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
A:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.E(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.q.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dN:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hn:{"^":"dQ;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bE:function(a){var z=V.n2(a,this.c,this.b)
return z},
gC:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
X:function(a){var z=this.y
if(!(z==null))z.F(a)},
se7:function(a,b){},
sdP:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bE(z)}z=new D.S("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.X(z)}},
sdR:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bE(z)}z=new D.S("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.X(z)}},
sa_:function(a,b){var z,y
b=this.bE(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.S("location",y,b,this,[P.t])
z.b=!0
this.X(z)}},
sdQ:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.S("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.X(z)}},
sW:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.S("velocity",x,a,this,[P.t])
z.b=!0
this.X(z)}},
sdc:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.S("dampening",y,a,this,[P.t])
z.b=!0
this.X(z)}},
ax:function(a,b){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa_(0,this.d+y*b)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sW(y)}},
p:{
dS:function(){var z=new U.hn()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dT:{"^":"ai;0a,0b",
gC:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
b5:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dT))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")},
p:{
cO:function(a){var z=new U.dT()
z.a=a
return z}}},e5:{"^":"aG;0e,0f,0r,0a,0b,0c,0d",
gC:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
X:[function(a){var z
H.f(a,"$isv")
z=this.e
if(!(z==null))z.F(a)},function(){return this.X(null)},"aA","$1","$0","gb9",0,2,1],
it:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gb9(),w={func:1,ret:-1,args:[D.v]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gC()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.X(z)},"$2","geS",8,0,20],
iO:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gb9(),w={func:1,ret:-1,args:[D.v]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gC()
t.toString
H.h(x,w)
C.a.L(t.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gfd",8,0,20],
b5:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ay(z,z.length,0,[H.y(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.b5(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.c2():x
z=this.e
if(!(z==null))z.ae(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e5))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.O(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.ai]},
$asaG:function(){return[U.ai]},
$isai:1},ai:{"^":"dQ;"},jU:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gC:function(){var z=this.fx
if(z==null){z=D.Q()
this.fx=z}return z},
X:[function(a){var z
H.f(a,"$isv")
z=this.fx
if(!(z==null))z.F(a)},function(){return this.X(null)},"aA","$1","$0","gb9",0,2,1],
ha:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.Q()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.v]}
x=H.h(this.geP(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.Q()
x.d=z}x=H.h(this.geQ(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.Q()
x.c=z}x=H.h(this.geR(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.Q()
x.f=z}x=H.h(this.geM(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.Q()
x.d=z}x=H.h(this.geN(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.Q()
x.b=z}x=H.h(this.gfF(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.Q()
x.d=z}x=H.h(this.gfE(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.Q()
x.c=z}y=H.h(this.gfD(),y)
C.a.h(z.a,y)
return!0},
ah:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.a5(z,y)},
iq:[function(a){a=H.k(H.f(a,"$isv"),"$isc3")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geP",4,0,2],
ir:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isv"),"$isc3")
if(!this.cx)return
if(this.ch){z=a.d.O(0,a.y)
z=new V.a5(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.O(0,a.y)
z=this.ah(new V.a5(y.a,y.b).k(0,2).u(0,z.gal()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ah(new V.a5(x.a,x.b).k(0,2).u(0,z.gal()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.O(0,a.z)
this.dx=this.ah(new V.a5(y.a,y.b).k(0,2).u(0,z.gal()))}this.aA()},"$1","geQ",4,0,2],
is:[function(a){var z,y,x
H.f(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sW(-y*10*z)
this.aA()}},"$1","geR",4,0,2],
io:[function(a){if(H.k(H.f(a,"$isv"),"$iseh").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geM",4,0,2],
ip:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isv"),"$isc3")
if(!J.O(this.d,a.x.b))return
z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ah(new V.a5(x.a,x.b).k(0,2).u(0,z.gal()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.O(0,a.z)
this.dx=this.ah(new V.a5(y.a,y.b).k(0,2).u(0,z.gal()))
this.aA()},"$1","geN",4,0,2],
iW:[function(a){H.f(a,"$isv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfF",4,0,2],
iV:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isv"),"$iseI")
if(!this.cx)return
if(this.ch){z=a.d.O(0,a.y)
z=new V.a5(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.O(0,a.y)
z=this.ah(new V.a5(y.a,y.b).k(0,2).u(0,z.gal()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ah(new V.a5(x.a,x.b).k(0,2).u(0,z.gal()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.O(0,a.z)
this.dx=this.ah(new V.a5(y.a,y.b).k(0,2).u(0,z.gal()))}this.aA()},"$1","gfE",4,0,2],
iU:[function(a){var z,y,x
H.f(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sW(-y*10*z)
this.aA()}},"$1","gfD",4,0,2],
b5:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.dy=y
x=b.y
this.c.ax(0,x)
this.b.ax(0,x)
z=V.ej(this.b.d)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aI(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isai:1,
p:{
f5:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.jU()
y=U.dS()
y.se7(0,!0)
y.sdP(6.283185307179586)
y.sdR(0)
y.sa_(0,0)
y.sdQ(100)
y.sW(0)
y.sdc(0.5)
z.b=y
y=y.gC()
y.toString
x=H.h(z.gb9(),{func:1,ret:-1,args:[D.v]})
C.a.h(y.a,x)
y=U.dS()
y.se7(0,!0)
y.sdP(6.283185307179586)
y.sdR(0)
y.sa_(0,0)
y.sdQ(100)
y.sW(0)
y.sdc(0.5)
z.c=y
C.a.h(y.gC().a,x)
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
w=new X.aW(b,!1,!1)
v=z.d
z.d=w
y=new D.S("modifiers",v,w,z,[X.aW])
y.b=!0
z.X(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.S("invertX",y,!1,z,[P.ag])
y.b=!0
z.X(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.S("invertY",y,!1,z,[P.ag])
y.b=!0
z.X(y)}z.ha(c)
return z}}}}],["","",,M,{"^":"",hF:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aB:[function(a){var z
H.f(a,"$isv")
z=this.x
if(!(z==null))z.F(a)},function(){return this.aB(null)},"ii","$1","$0","gag",0,2,1],
iz:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aH
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gag(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b5()
s.a=H.e([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","geX",8,0,10],
iA:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aH
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gag(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b5()
s.a=H.e([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.h(x,w)
C.a.L(s.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","geY",8,0,10],
se1:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gC()
z.toString
y=H.h(this.gag(),{func:1,ret:-1,args:[D.v]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gC()
z.toString
y=H.h(this.gag(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)}z=new D.S("technique",x,this.c,this,[O.d7])
z.b=!0
this.aB(z)}},
gC:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
aK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.dZ(this.c)
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
u=C.d.a7(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.d.a7(v.b*w)
s=C.d.a7(v.c*x)
a.c=s
v=C.d.a7(v.d*w)
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
s.dY(V.aI(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.eo
if(y==null){y=new V.E(0,0,-1)
m=y.u(0,Math.sqrt(y.D(y)))
y=new V.E(0,1,0).as(m)
l=y.u(0,Math.sqrt(y.D(y)))
k=m.as(l)
j=new V.E(0,0,0)
y=V.aI(l.a,k.a,m.a,l.N(0).D(j),l.b,k.b,m.b,k.N(0).D(j),l.c,k.c,m.c,m.N(0).D(j),0,0,0,1)
$.eo=y
i=y}else i=y
y=z.a
if(y!=null){h=y.b5(0,a,z)
if(h!=null)i=h.k(0,i)}a.db.dY(i)
z=this.c
if(z!=null)z.ax(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.G();)z.d.ax(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aK(a)
this.a.toString
a.cy.cn()
a.db.cn()
this.b.toString
a.dX()},
$isnS:1}}],["","",,A,{"^":"",dG:{"^":"b;a,b,c"},hb:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hl:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ij:{"^":"et;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aG,0au,0aH,0bi,0df,0dg,0bj,0bk,0dh,0di,0bl,0bm,0dj,0dk,0bn,0dl,0dm,0bo,0dn,0dq,0bp,0bq,0br,0dr,0ds,0bs,0bt,0dt,0du,0bu,0dv,0ca,0dw,0cb,0dz,0cc,0dA,0cd,0dB,0ce,0dC,0cf,a,b,0c,0d,0e,0f,0r",
ej:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.am("")
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
a2.fI(z)
a2.fP(z)
a2.fJ(z)
a2.fX(z)
a2.fY(z)
a2.fR(z)
a2.h1(z)
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
z=new P.am("")
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
v.fM(z)
v.fH(z)
v.fK(z)
v.fN(z)
v.fV(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fT(z)
v.fU(z)}v.fQ(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.f){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.h){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.c:r+="   return 1.0;\n"
z.a=r
break
case C.i:r+="   return alpha;\n"
z.a=r
break
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.h:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.e([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fL(z)
v.fS(z)
v.fW(z)
v.fZ(z)
v.h_(z)
v.h0(z)
v.fO(z)}r=z.a+="// === Main ===\n"
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
o=H.e([],[P.i])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(v.c!==C.c)z.a+="   setDiffuseColor();\n"
if(v.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(v.e!==C.c)z.a+="   setSpecularColor();\n"
if(v.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(v.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(v.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(v.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(v.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(v.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(v.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(v.a!==C.c)C.a.h(o,"emission()")
if(v.r!==C.c)C.a.h(o,"reflect(refl)")
if(v.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.B(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cQ(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cQ(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fK(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.p(P.u("Failed to link shader: "+H.l(m)))}this.fw()
this.fA()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaL")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaL")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaL")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaL")
if(a2.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isdc")
if(a2.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaL")
if(a2.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaL")
this.k3=H.e([],[A.aL])
y=a2.aG
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isM")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.p(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaL"))}}y=a2.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isan")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isM")
break
case C.h:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isM")
break}}y=a2.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isan")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isM")
break
case C.h:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isM")
break}}y=a2.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.aG=H.k(this.r.n(0,"diffuseTxt"),"$isan")
this.aH=H.k(this.r.n(0,"nullDiffuseTxt"),"$isM")
break
case C.h:this.au=H.k(this.r.n(0,"diffuseTxt"),"$isao")
this.aH=H.k(this.r.n(0,"nullDiffuseTxt"),"$isM")
break}}y=a2.d
if(y!==C.c){this.bi=H.k(this.r.n(0,"invDiffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.df=H.k(this.r.n(0,"invDiffuseTxt"),"$isan")
this.bj=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isM")
break
case C.h:this.dg=H.k(this.r.n(0,"invDiffuseTxt"),"$isao")
this.bj=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isM")
break}}y=a2.e
if(y!==C.c){this.bm=H.k(this.r.n(0,"shininess"),"$isW")
this.bk=H.k(this.r.n(0,"specularClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dh=H.k(this.r.n(0,"specularTxt"),"$isan")
this.bl=H.k(this.r.n(0,"nullSpecularTxt"),"$isM")
break
case C.h:this.di=H.k(this.r.n(0,"specularTxt"),"$isao")
this.bl=H.k(this.r.n(0,"nullSpecularTxt"),"$isM")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dj=H.k(this.r.n(0,"bumpTxt"),"$isan")
this.bn=H.k(this.r.n(0,"nullBumpTxt"),"$isM")
break
case C.h:this.dk=H.k(this.r.n(0,"bumpTxt"),"$isao")
this.bn=H.k(this.r.n(0,"nullBumpTxt"),"$isM")
break}if(a2.dy){this.dl=H.k(this.r.n(0,"envSampler"),"$isao")
this.dm=H.k(this.r.n(0,"nullEnvTxt"),"$isM")
y=a2.r
if(y!==C.c){this.bo=H.k(this.r.n(0,"reflectClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dn=H.k(this.r.n(0,"reflectTxt"),"$isan")
this.bp=H.k(this.r.n(0,"nullReflectTxt"),"$isM")
break
case C.h:this.dq=H.k(this.r.n(0,"reflectTxt"),"$isao")
this.bp=H.k(this.r.n(0,"nullReflectTxt"),"$isM")
break}}y=a2.x
if(y!==C.c){this.bq=H.k(this.r.n(0,"refraction"),"$isW")
this.br=H.k(this.r.n(0,"refractClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dr=H.k(this.r.n(0,"refractTxt"),"$isan")
this.bs=H.k(this.r.n(0,"nullRefractTxt"),"$isM")
break
case C.h:this.ds=H.k(this.r.n(0,"refractTxt"),"$isao")
this.bs=H.k(this.r.n(0,"nullRefractTxt"),"$isM")
break}}}y=a2.y
if(y!==C.c){this.bt=H.k(this.r.n(0,"alpha"),"$isW")
switch(y){case C.c:break
case C.i:break
case C.f:this.dt=H.k(this.r.n(0,"alphaTxt"),"$isan")
this.bu=H.k(this.r.n(0,"nullAlphaTxt"),"$isM")
break
case C.h:this.du=H.k(this.r.n(0,"alphaTxt"),"$isao")
this.bu=H.k(this.r.n(0,"nullAlphaTxt"),"$isM")
break}}this.ca=H.e([],[A.eV])
this.cb=H.e([],[A.eW])
this.cc=H.e([],[A.eX])
this.cd=H.e([],[A.eY])
this.ce=H.e([],[A.eZ])
this.cf=H.e([],[A.f_])
if(a2.k2){y=a2.z
if(y>0){this.dv=H.f(this.r.n(0,"dirLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.ca;(x&&C.a).h(x,new A.eV(l,k,j))}}y=a2.Q
if(y>0){this.dw=H.f(this.r.n(0,"pntLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isW")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isW")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isW")
x=this.cb;(x&&C.a).h(x,new A.eW(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dz=H.f(this.r.n(0,"spotLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isW")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isW")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isW")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isW")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isW")
x=this.cc;(x&&C.a).h(x,new A.eX(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dA=H.f(this.r.n(0,"txtDirLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isK")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isM")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isan")
x=this.cd;(x&&C.a).h(x,new A.eY(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dB=H.f(this.r.n(0,"txtPntLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdc")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isM")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isW")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isW")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isW")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isao")
x=this.ce;(x&&C.a).h(x,new A.eZ(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dC=H.f(this.r.n(0,"txtSpotLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isK")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isM")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isK")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isW")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isW")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isW")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isW")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isW")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.p(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isan")
x=this.cf;(x&&C.a).h(x,new A.f_(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ab:function(a,b,c){b.a.uniform1i(b.d,1)},
a4:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
ii:function(a,b){var z,y
z=a.au
y=new A.ij(b,z)
y.em(b,z)
y.ej(a,b)
return y}}},im:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aG,au,aH",
fI:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aG+"];\n"
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
fP:function(a){var z
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
fJ:function(a){var z
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
fX:function(a){var z,y
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
fY:function(a){var z,y
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
fR:function(a){var z
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
h1:function(a){var z
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
ao:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.ay(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fM:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ao(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   return emissionClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fH:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ao(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   return ambientClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fK:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ao(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fN:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ao(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
fV:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ao(a,z,"specular")
y=a.a+="uniform float shininess;\n"
y+="vec3 specularColor;\n"
a.a=y
y+="\n"
a.a=y
y+="void setSpecularColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
fQ:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.i:break
case C.f:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.h:z+="uniform samplerCube bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break}z+="vec3 normal()\n"
a.a=z
z+="{\n"
a.a=z
switch(y){case C.c:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.i:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.f:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.h:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
fT:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ao(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fU:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ao(a,z,"refract")
y=a.a+="uniform float refraction;\n"
y+="\n"
a.a=y
y+="vec3 refract(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fL:function(a){var z,y
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
fS:function(a){var z,y
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
fW:function(a){var z,y
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
fZ:function(a){var z,y,x
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
h_:function(a){var z,y,x
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
h0:function(a){var z,y,x
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
fO:function(a){var z
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
i:function(a){return this.au}},eV:{"^":"b;a,b,c"},eY:{"^":"b;a,b,c,d,e,f,r,x"},eW:{"^":"b;a,b,c,d,e,f,r"},eZ:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eX:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f_:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},et:{"^":"cH;",
em:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cQ:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fK(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fw:function(){var z,y,x,w,v,u
z=H.e([],[A.dG])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dG(y,v.name,u))}this.f=new A.hb(z)},
fA:function(){var z,y,x,w,v,u
z=H.e([],[A.ac])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hi(v.type,v.size,v.name,u))}this.r=new A.jF(z)},
aD:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.M(z,y,b,c)
else return A.db(z,y,b,a,c)},
eF:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.an(z,y,b,c)
else return A.db(z,y,b,a,c)},
eG:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.db(z,y,b,a,c)},
be:function(a,b){return new P.fd(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hi:function(a,b,c,d){switch(a){case 5120:return this.aD(b,c,d)
case 5121:return this.aD(b,c,d)
case 5122:return this.aD(b,c,d)
case 5123:return this.aD(b,c,d)
case 5124:return this.aD(b,c,d)
case 5125:return this.aD(b,c,d)
case 5126:return new A.W(this.a,this.e,c,d)
case 35664:return new A.jA(this.a,this.e,c,d)
case 35665:return new A.K(this.a,this.e,c,d)
case 35666:return new A.jD(this.a,this.e,c,d)
case 35667:return new A.jB(this.a,this.e,c,d)
case 35668:return new A.jC(this.a,this.e,c,d)
case 35669:return new A.jE(this.a,this.e,c,d)
case 35674:return new A.jH(this.a,this.e,c,d)
case 35675:return new A.dc(this.a,this.e,c,d)
case 35676:return new A.aL(this.a,this.e,c,d)
case 35678:return this.eF(b,c,d)
case 35680:return this.eG(b,c,d)
case 35670:throw H.a(this.be("BOOL",c))
case 35671:throw H.a(this.be("BOOL_VEC2",c))
case 35672:throw H.a(this.be("BOOL_VEC3",c))
case 35673:throw H.a(this.be("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ce:{"^":"b;a,b",
i:function(a){return this.b}},ac:{"^":"b;"},jF:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
hs:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.hs("\n")}},M:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jB:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jC:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jE:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jz:{"^":"ac;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
db:function(a,b,c,d,e){var z=new A.jz(a,b,c,e)
z.f=d
z.e=P.i7(d,0,!1,P.m)
return z}}},W:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jA:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},K:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jD:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jH:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dc:{"^":"ac;a,b,c,d",
af:function(a){var z=new Float32Array(H.bo(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aL:{"^":"ac;a,b,c,d",
af:function(a){var z=new Float32Array(H.bo(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},an:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ao:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dr:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.af,P.t,P.t]})
z=F.d4()
F.bO(z,b,c,d,a,1,0,0,1)
F.bO(z,b,c,d,a,0,1,0,3)
F.bO(z,b,c,d,a,0,0,1,2)
F.bO(z,b,c,d,a,-1,0,0,0)
F.bO(z,b,c,d,a,0,-1,0,0)
F.bO(z,b,c,d,a,0,0,-1,3)
z.ai()
return z},
cw:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bO:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.af,P.t,P.t]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.E(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.E(t+h,s+f,r+g)
z.b=q
p=new V.E(t-h,s-f,r-g)
z.c=p
o=new V.E(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cw(y)
k=F.cw(z.b)
j=F.dA(d,e,new F.m0(z,F.cw(z.c),F.cw(z.d),k,l,c),b)
if(j!=null)a.aW(j)},
fN:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.t,args:[P.t]})
if(e<3)return
z=F.d4()
y=b?-1:1
x=-6.283185307179586/e
w=H.e([],[F.af])
v=z.a
u=new V.E(0,0,y)
u=u.u(0,Math.sqrt(u.D(u)))
C.a.h(w,v.h5(new V.bF(a,-1,-1,-1),new V.b1(1,1,1,1),new V.a2(0,0,c),new V.E(0,0,y),new V.U(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.E(r,q,y).u(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c7(new V.bF(a,-1,-1,-1),null,new V.b1(n,l,m,1),new V.a2(r*p,q*p,c),new V.E(0,0,y),new V.U(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.h3(w)
return z},
fL:function(a,b,c,d,e,f){return F.mn(!0,c,d,new F.mm(a,f),e)},
mn:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.t,args:[P.t,P.t]})
if(e<3)return
if(c<1)return
z=F.dA(c,e,new F.mp(d),null)
if(z==null)return
z.ai()
z.bW()
if(b)z.aW(F.fN(3,!1,1,new F.mq(d),e))
z.aW(F.fN(1,!0,-1,new F.mr(d),e))
return z},
mX:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.mY()
y=F.dr(a,null,new F.mZ(z),c)
y.bW()
return y},
h1:function(a,b,c,d){return F.fM(c,a,d,b,new F.n0())},
mG:function(a,b,c,d,e,f){return F.fM(d,a,e,b,new F.mH(f,c))},
fM:function(a,b,c,d,e){var z=F.dA(a,b,new F.mo(H.h(e,{func:1,ret:V.a2,args:[P.t]}),d,b,c),null)
if(z==null)return
z.ai()
z.bW()
return z},
dA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.af,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.d4()
y=H.e([],[F.af])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c7(null,null,new V.b1(u,0,0,1),null,null,new V.U(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c6(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c7(null,null,new V.b1(o,n,m,1),null,null,new V.U(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c6(d))}}z.d.h4(a+1,b+1,y)
return z},
m0:{"^":"n:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cl(z.b,b).cl(z.d.cl(z.c,b),c)
a.sa_(0,new V.a2(y.a,y.b,y.c))
a.se2(y.u(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.sd8(new V.bF(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mm:{"^":"n:26;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mp:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sa_(0,new V.a2(y,u,w))
u=new V.E(y,u,w)
a.se2(u.u(0,Math.sqrt(u.D(u))))
a.sd8(new V.bF(1-c,2+c,-1,-1))}},
mq:{"^":"n:19;a",
$1:function(a){return this.a.$2(a,1)}},
mr:{"^":"n:19;a",
$1:function(a){return this.a.$2(1-a,0)}},
mY:{"^":"n:26;",
$2:function(a,b){return 0}},
mZ:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.u(0,Math.sqrt(x.D(x))).k(0,1+z)
a.sa_(0,new V.a2(z.a,z.b,z.c))}},
n0:{"^":"n:17;",
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)}},
mH:{"^":"n:17;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a2(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mo:{"^":"n:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dB(y.$1(z),x)
x=J.dB(y.$1(z+3.141592653589793/this.c),x).O(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.D(x)))
u=new V.E(1,0,0)
y=v.as(!v.t(0,u)?new V.E(0,0,1):u)
t=y.u(0,Math.sqrt(y.D(y)))
y=t.as(v)
u=y.u(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa_(0,w.A(0,new V.a2(y.a-x.a,y.b-x.b,y.c-x.c)))}},
al:{"^":"b;0a,0b,0c,0d,0e",
at:function(){if(!this.gaS()){C.a.L(this.a.a.d.b,this)
this.a.a.V()}this.bR()
this.bS()
this.fk()},
ft:function(a){this.a=a
C.a.h(a.d.b,this)},
fu:function(a){this.b=a
C.a.h(a.d.c,this)},
fv:function(a){this.c=a
C.a.h(a.d.d,this)},
bR:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
bS:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
fk:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gaS:function(){return this.a==null||this.b==null||this.c==null},
ez:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.E(0,0,0)
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.dN())return
return v.u(0,Math.sqrt(v.D(v)))},
eC:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.O(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.D(z)))
z=w.O(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.as(z.u(0,Math.sqrt(z.D(z))))
return z.u(0,Math.sqrt(z.D(z)))},
c3:function(){if(this.d!=null)return!0
var z=this.ez()
if(z==null){z=this.eC()
if(z==null)return!1}this.d=z
this.a.a.V()
return!0},
ey:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.E(0,0,0)
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.dN())return
return v.u(0,Math.sqrt(v.D(v)))},
eB:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.O(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.O(0,u).k(0,l).A(0,u).O(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.D(z)))
z=k.as(m)
z=z.u(0,Math.sqrt(z.D(z))).as(k)
m=z.u(0,Math.sqrt(z.D(z)))}return m},
c1:function(){if(this.e!=null)return!0
var z=this.ey()
if(z==null){z=this.eB()
if(z==null)return!1}this.e=z
this.a.a.V()
return!0},
aT:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.N(0)
y=this.e
if(y!=null)this.e=y.N(0)
this.a.a.V()},
ghe:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y
if(this.gaS())return a+"disposed"
z=a+C.b.a6(J.a9(this.a.e),0)+", "+C.b.a6(J.a9(this.b.e),0)+", "+C.b.a6(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
J:function(){return this.w("")},
p:{
by:function(a,b,c){var z,y,x
z=new F.al()
y=a.a
if(y==null)H.p(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.u("May not create a face with vertices attached to different shapes."))
z.ft(a)
z.fu(b)
z.fv(c)
C.a.h(z.a.a.d.b,z)
z.a.a.V()
return z}}},
hI:{"^":"b;"},
jc:{"^":"hI;",
aV:function(a,b,c){var z,y
z=b.a
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
cV:{"^":"b;0a,0b",
at:function(){if(!this.gaS()){C.a.L(this.a.a.c.b,this)
this.a.a.V()}this.bR()
this.bS()},
bR:function(){var z=this.a
if(z!=null){C.a.L(z.c.b,this)
this.a=null}},
bS:function(){var z=this.b
if(z!=null){C.a.L(z.c.c,this)
this.b=null}},
gaS:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){if(this.gaS())return a+"disposed"
return a+C.b.a6(J.a9(this.a.e),0)+", "+C.b.a6(J.a9(this.b.e),0)},
J:function(){return this.w("")}},
hZ:{"^":"b;"},
jy:{"^":"hZ;",
aV:function(a,b,c){var z,y
z=b.a
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
return z==null?y==null:z===y}else return!1}}},
d1:{"^":"b;0a",
at:function(){var z=this.a
if(z!=null){C.a.L(z.a.b.b,this)
this.a.a.V()}this.fj()},
fj:function(){var z=this.a
if(z!=null){C.a.L(z.b.b,this)
this.a=null}},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.a6(J.a9(z.e),0)},
J:function(){return this.w("")}},
eu:{"^":"b;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.v()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hg())}this.a.v()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d1()
if(r.a==null)H.p(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.F(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cV()
s=p.a
if(s==null)H.p(P.u("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.u("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.F(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.by(p,o,l)}z=this.e
if(!(z==null))z.ae(0)},
ai:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ai()||!1
if(!this.a.ai())y=!1
z=this.e
if(!(z==null))z.ae(0)
return y},
eK:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.af],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.aV(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hG:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.af],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.eK(a,v,y,u,t))b.aW(u)}this.a.v()
this.c.cq()
this.d.cq()
this.b.hY()
this.c.cr(new F.jy())
this.d.cr(new F.jc())
z=this.e
if(!(z==null))z.ae(0)},
h8:function(a){this.hG(new F.k7(),new F.ix())},
bW:function(){return this.h8(null)},
aT:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.aT()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.d(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdS(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).u(0,Math.sqrt(w*w+v*v+z*z))
if(!J.O(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.F(null)}}}}z=this.e
if(!(z==null))z.ae(0)},
hc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aP()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bm().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gcD(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dL])
for(r=0,q=0;q<w;++q){p=b.h9(q)
o=p.gcD(p)
C.a.m(s,q,new Z.dL(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hB(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bo(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dM(new Z.fa(34962,j),s,b)
i.b=H.e([],[Z.ch])
if(this.b.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)}f=Z.df(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)}f=Z.df(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.v()
C.a.h(h,g.e)}f=Z.df(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.B(z,"\n")},
ad:function(a){var z=this.e
if(!(z==null))z.F(a)},
V:function(){return this.ad(null)},
p:{
d4:function(){var z,y
z=new F.eu()
y=new F.k2(z)
y.b=!1
y.c=H.e([],[F.af])
z.a=y
y=new F.j7(z)
y.b=H.e([],[F.d1])
z.b=y
y=new F.j6(z)
y.b=H.e([],[F.cV])
z.c=y
y=new F.j5(z)
y.b=H.e([],[F.al])
z.d=y
z.e=null
return z}}},
j5:{"^":"b;a,0b",
h3:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.af],"$asc")
z=H.e([],[F.al])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.d(a,v)
v=a[v]
if(w>=u)return H.d(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.by(x,v,u))}}return z},
h4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.af],"$asc")
z=H.e([],[F.al])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.d(c,x)
r=c[x];++x
if(x>=s)return H.d(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.d(c,p)
o=c[p]
if(y<0||y>=s)return H.d(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.by(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.by(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.by(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.by(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cr:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aV(0,v,t)){v.at()
break}}}}},
cq:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghe(x)
if(y)x.at()}},
ai:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].c3())x=!1
return x},
c2:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].c1())x=!1
return x},
aT:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].aT()},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
j6:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cr:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aV(0,v,t)){v.at()
break}}}}},
cq:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.O(x.a,x.b)
if(y)x.at()}},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.e([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].w(a+(""+x+". ")))}return C.a.B(z,"\n")},
J:function(){return this.w("")}},
j7:{"^":"b;a,0b",
gl:function(a){return this.b.length},
hY:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.at()}},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
af:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c6:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c7(this.cx,x,u,z,y,w,v,a,t)},
hg:function(){return this.c6(null)},
sa_:function(a,b){var z
if(!J.O(this.f,b)){this.f=b
z=this.a
if(z!=null)z.V()}},
sdS:function(a){var z
a=a.u(0,Math.sqrt(a.D(a)))
if(!J.O(this.r,a)){this.r=a
z=this.a
if(z!=null)z.V()}},
se2:function(a){var z
if(!J.O(this.z,a)){this.z=a
z=this.a
if(z!=null)z.V()}},
sd8:function(a){var z
if(!J.O(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.V()}},
hB:function(a){var z,y
z=J.I(a)
if(z.t(a,$.$get$aP())){z=this.f
y=[P.t]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aO())){z=this.r
y=[P.t]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aN())){z=this.x
y=[P.t]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aQ())){z=this.y
y=[P.t]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.t(a,$.$get$aR())){z=this.z
y=[P.t]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bI())){z=this.Q
y=[P.t]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bJ())){z=this.Q
y=[P.t]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$bm()))return H.e([this.ch],[P.t])
else if(z.t(a,$.$get$aM())){z=this.cx
y=[P.t]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.t])},
c3:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.I(0,new F.kc(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.ae(0)}return!0},
c1:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.I(0,new F.kb(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.ae(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y,x
z=H.e([],[P.i])
C.a.h(z,C.b.a6(J.a9(this.e),0))
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
C.a.h(z,V.P(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.B(z,", ")
return a+"{"+x+"}"},
J:function(){return this.w("")},
p:{
c7:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.af()
y=new F.ka(z)
y.b=H.e([],[F.d1])
z.b=y
y=new F.k6(z)
x=[F.cV]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.k3(z)
x=[F.al]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$f7()
z.e=0
y=$.$get$aP()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aO().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aQ().a)!==0?f:null
z.z=(x&$.$get$aR().a)!==0?g:null
z.Q=(x&$.$get$f8().a)!==0?c:null
z.ch=(x&$.$get$bm().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
kc:{"^":"n:8;a",
$1:function(a){var z,y
H.f(a,"$isal")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
kb:{"^":"n:8;a",
$1:function(a){var z,y
H.f(a,"$isal")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
k2:{"^":"b;a,0b,0c",
v:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.V()
return!0},
h6:function(a,b,c,d,e,f,g,h,i){var z=F.c7(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
h5:function(a,b,c,d,e,f){return this.h6(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ai:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].c3()
return!0},
c2:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].c1()
return!0},
hd:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.O(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.F(null)}}}}return!0},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
this.v()
z=H.e([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
k3:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.d(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.d(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
I:function(a,b){H.h(b,{func:1,ret:-1,args:[F.al]})
C.a.I(this.b,b)
C.a.I(this.c,new F.k4(this,b))
C.a.I(this.d,new F.k5(this,b))},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
k4:{"^":"n:8;a,b",
$1:function(a){H.f(a,"$isal")
if(!J.O(a.a,this.a))this.b.$1(a)}},
k5:{"^":"n:8;a,b",
$1:function(a){var z
H.f(a,"$isal")
z=this.a
if(!J.O(a.a,z)&&!J.O(a.b,z))this.b.$1(a)}},
k6:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
k8:{"^":"b;"},
k7:{"^":"k8;",
aV:function(a,b,c){return J.O(b.f,c.f)}},
k9:{"^":"b;"},
ix:{"^":"k9;",
aW:function(a){var z,y,x,w
H.w(a,"$isc",[F.af],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.u(0,Math.sqrt(z.D(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)a[x].sdS(z)
return}},
ka:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}}}],["","",,O,{"^":"",ih:{"^":"d7;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gC:function(){var z=this.dy
if(z==null){z=D.Q()
this.dy=z}return z},
aa:[function(a){var z
H.f(a,"$isv")
z=this.dy
if(!(z==null))z.F(a)},function(){return this.aa(null)},"ij","$1","$0","ges",0,2,1],
fo:[function(a){H.f(a,"$isv")
this.a=null
this.aa(a)},function(){return this.fo(null)},"iT","$1","$0","gfn",0,2,1],
iv:[function(a,b){var z=V.at
z=new D.ci(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.aa(z)},"$2","geU",8,0,16],
iw:[function(a,b){var z=V.at
z=new D.cj(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.aa(z)},"$2","geV",8,0,16],
cN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a1(z.e.length+3,4)*4
x=C.e.a1(z.f.length+3,4)*4
w=C.e.a1(z.r.length+3,4)*4
v=C.e.a1(z.x.length+3,4)*4
u=C.e.a1(z.y.length+3,4)*4
t=C.e.a1(z.z.length+3,4)*4
s=C.e.a1(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.e.i(q.a)+C.e.i(p.a)+C.e.i(o.a)+C.e.i(n.a)+C.e.i(m.a)+C.e.i(l.a)+C.e.i(k.a)+C.e.i(j.a)+C.e.i(i.a)+"_"
h+=z?"1":"0"
h+=r?"1":"0"
h+"0"
h=h+"0_"+s+"_"+y+"_"+x+"_"+w+"_"+v+"_"+u+"_"+t
g=k!==C.c||j!==C.c
f=p!==C.c||o!==C.c||n!==C.c||m!==C.c
e=m===C.c
d=!e||g
c=o!==C.c||n!==C.c||!e||l!==C.c||g
e=l===C.c
b=!e
a=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a0=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aP()
if(c){z=$.$get$aO()
a6=new Z.bl(a6.a|z.a)}if(b){z=$.$get$aN()
a6=new Z.bl(a6.a|z.a)}if(a){z=$.$get$aQ()
a6=new Z.bl(a6.a|z.a)}if(a0){z=$.$get$aR()
a6=new Z.bl(a6.a|z.a)}if(a2){z=$.$get$aM()
a6=new Z.bl(a6.a|z.a)}return new A.im(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
S:function(a,b){H.w(a,"$isc",[T.d8],"$asc")
if(b!=null)if(!C.a.aQ(a,b)){b.a=a.length
C.a.h(a,b)}},
ax:function(a,b){var z,y,x,w,v,u,t
for(z=this.dx.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
y.a=new V.E(0,0,1)
y.b=new V.E(0,1,0)
y.c=new V.E(-1,0,0)
x=y.d
if(x!=null){w=x.b5(0,b,y)
if(w!=null){x=w.b4(y.a)
v=x.a
u=x.b
t=x.c
y.a=x.u(0,Math.sqrt(v*v+u*u+t*t))
t=w.b4(y.b)
u=t.a
v=t.b
x=t.c
y.b=t.u(0,Math.sqrt(u*u+v*v+x*x))
x=w.b4(y.c)
v=x.a
u=x.b
t=x.c
y.c=x.u(0,Math.sqrt(v*v+u*u+t*t))}}}},
i_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cN()
y=a.fr.j(0,z.au)
if(y==null){y=A.ii(z,a.a)
x=y.b
if(x.length===0)H.p(P.u("May not cache a shader with no name."))
if(a.fr.bh(0,x))H.p(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aH
z=b.e
if(!(z instanceof Z.dM)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.ai()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.c2()
t.a.c2()
t=t.e
if(!(t==null))t.ae(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hd()
s=s.e
if(!(s==null))s.ae(0)}q=b.d.hc(new Z.kd(a.a),v)
q.aI($.$get$aP()).e=this.a.y.c
if(z)q.aI($.$get$aO()).e=this.a.Q.c
if(u)q.aI($.$get$aN()).e=this.a.z.c
if(w.rx)q.aI($.$get$aQ()).e=this.a.ch.c
if(t)q.aI($.$get$aR()).e=this.a.cx.c
if(w.x1)q.aI($.$get$aM()).e=this.a.cy.c
b.e=q}z=T.d8
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hn()
if(w.fx){u=this.a
t=a.dx
t=t.gU(t)
u=u.db
u.toString
u.af(t.a8(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gU(t)
s=a.dx
s=t.k(0,s.gU(s))
a.cx=s
t=s}u=u.dx
u.toString
u.af(t.a8(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghW()
s=a.dx
s=t.k(0,s.gU(s))
a.ch=s
t=s}u=u.fr
u.toString
u.af(t.a8(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.af(t.a8(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.af(t.a8(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.af(C.t.a8(t,!0))}if(w.aG>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.f(s,"$isat")
t=t.k3
if(n>=t.length)return H.d(t,n)
t=t[n]
m=new Float32Array(H.bo(H.w(s.a8(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.c:break
case C.i:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.S(p,this.f.d)
u=this.a
t=this.f.d
u.ab(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.S(p,this.f.e)
u=this.a
t=this.f.e
u.a4(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.i:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.S(p,this.r.d)
u=this.a
t=this.r.d
u.ab(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.S(p,this.r.e)
u=this.a
t=this.r.e
u.a4(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.c:break
case C.i:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.S(p,this.x.d)
u=this.a
t=this.x.d
u.ab(u.aG,u.aH,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.S(p,this.x.e)
u=this.a
t=this.x.e
u.a4(u.au,u.aH,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bi
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.S(p,this.y.d)
u=this.a
t=this.y.d
u.ab(u.df,u.bj,t)
t=this.a
u=this.y.f
t=t.bi
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.S(p,this.y.e)
u=this.a
t=this.y.e
u.a4(u.dg,u.bj,t)
t=this.a
u=this.y.f
t=t.bi
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bk
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bm
t.a.uniform1f(t.d,r)
break
case C.f:this.S(p,this.z.d)
u=this.a
t=this.z.d
u.ab(u.dh,u.bl,t)
t=this.a
u=this.z.f
t=t.bk
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bm
u.a.uniform1f(u.d,r)
break
case C.h:this.S(p,this.z.e)
u=this.a
t=this.z.e
u.a4(u.di,u.bl,t)
t=this.a
u=this.z.f
t=t.bk
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bm
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dv
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.ca
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.b4(i.gde(i))
r=s.a
g=s.b
f=s.c
f=s.u(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gac(i)
g=h.c
r=f.gbw()
s=f.gb6()
f=f.gbf()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dw
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cb
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb_(i)
r=h.b
g=s.gcw(s)
f=s.gcz(s)
s=s.gcA(s)
r.a.uniform3f(r.d,g,f,s)
s=l.b3(i.gb_(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gac(i)
f=h.d
g=s.gbw()
r=s.gb6()
s=s.gbf()
f.a.uniform3f(f.d,g,r,s)
s=i.gbX()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbY()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbZ()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dz
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cc
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb_(i)
r=h.b
g=s.gcw(s)
f=s.gcz(s)
s=s.gcA(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gde(i).j0()
f=h.c
g=s.gc7(s)
r=s.gc8(s)
s=s.gc9()
f.a.uniform3f(f.d,g,r,s)
s=l.b3(i.gb_(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gac(i)
r=h.e
g=s.gbw()
f=s.gb6()
s=s.gbf()
r.a.uniform3f(r.d,g,f,s)
s=i.giY()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giX()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbX()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbY()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbZ()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dA
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
r=this.a.cd
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.f
H.w(p,"$isc",s,"$asc")
if(r!=null)if(!C.a.aQ(p,r)){r.a=p.length
C.a.h(p,r)}r=i.a
g=h.d
g.a.uniform3f(g.d,r.a,r.b,r.c)
r=i.b
g=h.b
g.a.uniform3f(g.d,r.a,r.b,r.c)
r=i.c
g=h.c
g.a.uniform3f(g.d,r.a,r.b,r.c)
r=l.b4(i.a)
g=r.a
f=r.b
e=r.c
e=r.u(0,Math.sqrt(g*g+f*f+e*e))
f=h.e
f.a.uniform3f(f.d,e.a,e.b,e.c)
e=i.e
f=h.f
f.a.uniform3f(f.d,e.a,e.b,e.c)
e=i.f
r=e!=null
if(!r||!e.d){r=h.x
r.a.uniform1i(r.d,1)}else{g=h.r
r=!r||!e.d
f=g.a
g=g.d
if(r)f.uniform1i(g,0)
else f.uniform1i(g,e.a)
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dB
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.ce
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gcu()
H.w(p,"$isc",r,"$asc")
if(!C.a.aQ(p,g)){g.scT(p.length)
C.a.h(p,g)}d=l.k(0,i.gU(i))
g=i.gU(i).b3(new V.a2(0,0,0))
f=h.b
e=g.gcw(g)
c=g.gcz(g)
g=g.gcA(g)
f.a.uniform3f(f.d,e,c,g)
g=d.b3(new V.a2(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dM(0)
c=h.d
m=new Float32Array(H.bo(H.w(new V.cl(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a8(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gac(i)
g=h.e
e=c.gbw()
f=c.gb6()
c=c.gbf()
g.a.uniform3f(g.d,e,f,c)
c=i.gcu()
g=c.gdO(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gdO(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.giZ(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbX()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbY()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbZ()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dC
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cf
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gcu()
H.w(p,"$isc",z,"$asc")
if(!C.a.aQ(p,s)){s.scT(p.length)
C.a.h(p,s)}s=i.gb_(i)
r=h.b
g=s.gcw(s)
f=s.gcz(s)
s=s.gcA(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gde(i)
f=h.c
g=s.gc7(s)
r=s.gc8(s)
s=s.gc9()
f.a.uniform3f(f.d,g,r,s)
s=i.gj8()
r=h.d
g=s.gc7(s)
f=s.gc8(s)
s=s.gc9()
r.a.uniform3f(r.d,g,f,s)
s=i.gbx(i)
f=h.e
g=s.gc7(s)
r=s.gc8(s)
s=s.gc9()
f.a.uniform3f(f.d,g,r,s)
s=l.b3(i.gb_(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gcu()
r=s.gdO(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gim()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gcT())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gac(i)
r=h.y
g=s.gbw()
f=s.gb6()
s=s.gbf()
r.a.uniform3f(r.d,g,f,s)
s=i.gj6()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gj7()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbX()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbY()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbZ()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.S(p,this.Q.d)
z=this.a
u=this.Q.d
z.ab(z.dj,z.bn,u)
break
case C.h:this.S(p,this.Q.e)
z=this.a
u=this.Q.e
z.a4(z.dk,z.bn,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gU(u).dM(0)
a.Q=u}z=z.fy
z.toString
z.af(u.a8(0,!0))}if(w.dy){this.S(p,this.ch)
z=this.a
u=this.ch
z.a4(z.dl,z.dm,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bo
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.S(p,this.cx.d)
z=this.a
u=this.cx.d
z.ab(z.dn,z.bp,u)
u=this.a
z=this.cx.f
u=u.bo
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.S(p,this.cx.e)
z=this.a
u=this.cx.e
z.a4(z.dq,z.bp,u)
u=this.a
z=this.cx.f
u=u.bo
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.br
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bq
u.a.uniform1f(u.d,s)
break
case C.f:this.S(p,this.cy.d)
z=this.a
u=this.cy.d
z.ab(z.dr,z.bs,u)
u=this.a
z=this.cy.f
u=u.br
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bq
z.a.uniform1f(z.d,s)
break
case C.h:this.S(p,this.cy.e)
z=this.a
u=this.cy.e
z.a4(z.ds,z.bs,u)
u=this.a
z=this.cy.f
u=u.br
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bq
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bt
z.a.uniform1f(z.d,t)
break
case C.f:this.S(p,this.db.d)
z=this.a
t=this.db.d
z.ab(z.dt,z.bu,t)
t=this.a
z=this.db.f
t=t.bt
t.a.uniform1f(t.d,z)
break
case C.h:this.S(p,this.db.e)
z=this.a
t=this.db.e
z.a4(z.du,z.bu,t)
t=this.a
z=this.db.f
t=t.bt
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].aP(a)
z=b.e
z.aP(a)
z.aK(a)
z.ig(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.hl()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cN().au}},ik:{"^":"cX;0f,a,b,0c,0d,0e"},cX:{"^":"b;",
bc:["eh",function(){}]},il:{"^":"cX;a,b,0c,0d,0e"},b8:{"^":"cX;0f,a,b,0c,0d,0e",
d_:function(a){var z,y
if(!J.O(this.f,a)){z=this.f
this.f=a
y=new D.S(this.b+".color",z,a,this,[V.a_])
y.b=!0
this.a.aa(y)}},
bc:["bC",function(){this.eh()
this.d_(new V.a_(1,1,1))}],
sac:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bc()
z=this.a
z.a=null
z.aa(null)}this.d_(b)}},io:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
fs:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.S(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.aa(z)}},
bc:function(){this.bC()
this.fs(1)}},ip:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
bT:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.S(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.aa(z)}},
bc:function(){this.bC()
this.bT(100)}},d7:{"^":"b;"}}],["","",,T,{"^":"",d8:{"^":"cH;"},eC:{"^":"d8;0b,0c,0d,0e,0f,0r,0x,0y,a",
aP:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}}},jl:{"^":"b;a,0b,0c,0d,0e",
hE:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,10497)
z.texParameteri(3553,10243,10497)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.eC(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.Q()
z=W.aa
W.Y(x,"load",H.h(new T.jm(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hD:function(a,b){return this.hE(a,!1,!1,!1,b)},
fp:function(a,b,c){var z,y,x,w
b=V.dy(b,2)
z=V.dy(a.width,2)
y=V.dy(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cM(null,null)
x.width=z
x.height=y
w=H.f(C.l.e9(x,"2d"),"$isdP")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.ml(w.getImageData(0,0,x.width,x.height))}}},jm:{"^":"n:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fp(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.i7(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.hm()}++x.e}}}],["","",,V,{"^":"",ha:{"^":"b;",
aU:function(a,b){return!0},
i:function(a){return"all"},
$isc1:1},c1:{"^":"b;"},ei:{"^":"b;",
aU:["eg",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].aU(0,b))return!0
return!1}],
i:["cE",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc1:1},bD:{"^":"ei;0a",
aU:function(a,b){return!this.eg(0,b)},
i:function(a){return"!["+this.cE(0)+"]"}},j3:{"^":"b;0a",
el:function(a){var z,y
if(a.a.length<=0)throw H.a(P.u("May not create a SetMatcher with zero characters."))
z=new H.aV(0,0,[P.m,P.ag])
for(y=new H.eg(a,a.gl(a),0,[H.ax(a,"x",0)]);y.G();)z.m(0,y.d,!0)
this.a=z},
aU:function(a,b){return this.a.bh(0,b)},
i:function(a){var z=this.a
return P.c4(z.gak(z),0,null)},
$isc1:1,
p:{
a8:function(a){var z=new V.j3()
z.el(a)
return z}}},ew:{"^":"b;a,b,0c,0d",
ghH:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eJ(this.a.K(0,b))
w.a=H.e([],[V.c1])
w.c=!1
C.a.h(this.c,w)
return w},
hp:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.aU(0,a))return w}return},
i:function(a){return this.b}},eG:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h_(this.b,"\n","\\n")
y=H.h_(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eH:{"^":"b;a,b,0c",
i:function(a){return this.b}},jt:{"^":"b;0a,0b,0c",
K:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.ew(this,b)
z.c=H.e([],[V.eJ])
this.a.m(0,b,z)}return z},
b1:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eH(this,a)
y=P.i
z.c=new H.aV(0,0,[y,y])
this.b.m(0,a,z)}return z},
ie:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eG])
y=this.c
x=[P.m]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.E(a,t)
r=y.hp(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c4(w,0,null)
throw H.a(P.u("Untokenizable string [state: "+y.ghH(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c4(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eG(o==null?p.b:o,q,t)}++t}}}},eJ:{"^":"ei;b,0c,0a",
i:function(a){return this.b.b+": "+this.cE(0)}}}],["","",,X,{"^":"",dO:{"^":"b;",$isaJ:1},hN:{"^":"eA;0a,0b,0c,0d,0e,0f,0r,0x",
gC:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z}},iA:{"^":"b;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
aM:[function(a){var z
H.f(a,"$isv")
z=this.e
if(!(z==null))z.F(a)},function(){return this.aM(null)},"ik","$1","$0","gcG",0,2,1],
saX:function(a){var z,y,x
if(!J.O(this.a,a)){z=this.a
if(z!=null){z=z.gC()
z.toString
y=H.h(this.gcG(),{func:1,ret:-1,args:[D.v]})
C.a.L(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gC()
z.toString
y=H.h(this.gcG(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)}z=new D.S("mover",x,this.a,this,[U.ai])
z.b=!0
this.aM(z)}},
$isaJ:1,
$isdO:1},eA:{"^":"b;"}}],["","",,V,{"^":"",
mV:function(a){P.js(C.G,new V.mW(a))},
mW:{"^":"n:49;a",
$1:function(a){H.f(a,"$isbi")
P.dz(C.d.e4(this.a.ght(),2)+" fps")}},
iO:{"^":"b;a,b,0c",
d6:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.f2().gcp().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.d4(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dE(this.c).h(0,v)
t=W.hP("radio")
t.checked=x
t.name=z
z=W.aa
W.Y(t,"change",H.h(new V.iP(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dE(this.c).h(0,w.createElement("br"))},
aO:function(a,b,c){return this.d6(a,b,c,!1)},
d4:function(a){var z,y,x,w,v
z=P.f2()
y=P.i
x=P.i4(z.gcp(),y,y)
x.m(0,this.a,a)
w=z.e_(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lh([],[]).cv(""),"",v)}},
iP:{"^":"n:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.d4(this.d)}}},
j8:{"^":"b;0a,0b",
en:function(a,b){var z,y,x,w,v,u,t
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
W.Y(z,"scroll",H.h(new V.jb(x),{func:1,ret:-1,args:[t]}),!1,t)},
h7:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.i],"$asc")
this.fz()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ie(C.a.hz(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.fZ(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cv(C.S,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.l(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
h2:function(a){var z,y,x,w,v,u,t
H.w(a,"$isc",[P.i],"$asc")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
this.a.appendChild(y)
w=y.insertRow(-1)
x=H.f(w.insertCell(-1),"$isd6").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<1;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.f(w.insertCell(-1),"$isd6")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fz:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jt()
y=P.i
z.a=new H.aV(0,0,[y,V.ew])
z.b=new H.aV(0,0,[y,V.eH])
z.c=z.K(0,"Start")
y=z.K(0,"Start").B(0,"Bold")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Bold").B(0,"Bold")
x=new V.bD()
w=[V.c1]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("*"))
C.a.h(x.a,y)
y=z.K(0,"Bold").B(0,"BoldEnd")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").B(0,"Italic")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Italic").B(0,"Italic")
x=new V.bD()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("_"))
C.a.h(x.a,y)
y=z.K(0,"Italic").B(0,"ItalicEnd")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").B(0,"Code")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Code").B(0,"Code")
x=new V.bD()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("`"))
C.a.h(x.a,y)
y=z.K(0,"Code").B(0,"CodeEnd")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").B(0,"LinkHead")
x=V.a8(new H.a3("["))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"LinkHead").B(0,"LinkTail")
x=V.a8(new H.a3("|"))
C.a.h(y.a,x)
x=z.K(0,"LinkHead").B(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkHead").B(0,"LinkHead")
y=new V.bD()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
x=z.K(0,"LinkTail").B(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkTail").B(0,"LinkTail")
y=new V.bD()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
C.a.h(z.K(0,"Start").B(0,"Other").a,new V.ha())
x=z.K(0,"Other").B(0,"Other")
y=new V.bD()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("*_`["))
C.a.h(y.a,x)
x=z.K(0,"BoldEnd")
x.d=x.a.b1("Bold")
x=z.K(0,"ItalicEnd")
x.d=x.a.b1("Italic")
x=z.K(0,"CodeEnd")
x.d=x.a.b1("Code")
x=z.K(0,"LinkEnd")
x.d=x.a.b1("Link")
x=z.K(0,"Other")
x.d=x.a.b1("Other")
this.b=z},
p:{
j9:function(a,b){var z=new V.j8()
z.en(a,!0)
return z}}},
jb:{"^":"n:14;a",
$1:function(a){P.eE(C.q,new V.ja(this.a))}},
ja:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.d.a7(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,M,{"^":"",
fV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=V.j9("Test 023",!0)
y=W.cM(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.h7(H.e(["Test of the Material Lighting shader with a textured directional ","light. Use Ctrl plus the mouse to move the light."],x))
z.h2(H.e(["shapes"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.p(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.jq(w,!0,!0,!0,!1)
u=U.f5(!1,!1,v.r,!1,!1,!1,null,!1)
t=U.f5(!1,!0,v.r,!1,!1,!1,null,!1)
s=new V.a_(0.6,0.9,1)
z=v.f.hD("../resources/Test.png",!0)
r=new D.cp()
r.e=new V.a_(1,1,1)
r.a=new V.E(0,0,1)
r.b=new V.E(0,1,0)
r.c=new V.E(-1,0,0)
q=r.d
r.d=t
p=t.gC()
p.toString
o=H.h(r.gbO(),{func:1,ret:-1,args:[D.v]})
C.a.h(p.a,o)
p=new D.S("mover",q,r.d,r,[U.ai])
p.b=!0
r.aq(p)
if(!r.e.t(0,s)){q=r.e
r.e=s
p=new D.S("color",q,s,r,[V.a_])
p.b=!0
r.aq(p)}p=r.f
if(p!==z){if(p!=null){p=p.y
o=H.h(r.gbO(),{func:1,ret:-1,args:[D.v]})
C.a.L(p.a,o)}q=r.f
r.f=z
z=z.y
p=H.h(r.gbO(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,p)
z=new D.S("texture",q,r.f,r,[T.eC])
z.b=!0
r.aq(z)}n=new O.ih()
z=O.cN(V.at)
n.e=z
z.b8(n.geU(),n.geV())
z=new O.b8(n,"emission")
z.c=C.c
z.f=new V.a_(0,0,0)
n.f=z
z=new O.b8(n,"ambient")
z.c=C.c
z.f=new V.a_(0,0,0)
n.r=z
z=new O.b8(n,"diffuse")
z.c=C.c
z.f=new V.a_(0,0,0)
n.x=z
z=new O.b8(n,"invDiffuse")
z.c=C.c
z.f=new V.a_(0,0,0)
n.y=z
z=new O.ip(n,"specular")
z.c=C.c
z.f=new V.a_(0,0,0)
z.ch=100
n.z=z
z=new O.il(n,"bump")
z.c=C.c
n.Q=z
n.ch=null
z=new O.b8(n,"reflect")
z.c=C.c
z.f=new V.a_(0,0,0)
n.cx=z
z=new O.io(n,"refract")
z.c=C.c
z.f=new V.a_(0,0,0)
z.ch=1
n.cy=z
z=new O.ik(n,"alpha")
z.c=C.c
z.f=1
n.db=z
z=new D.hY()
z.bD(D.a1)
z.e=H.e([],[D.hy])
z.f=H.e([],[D.iC])
z.r=H.e([],[D.jd])
z.x=H.e([],[D.cp])
z.y=H.e([],[D.jn])
z.z=H.e([],[D.jo])
z.Q=null
z.ch=null
z.cC(z.geT(),z.gfc(),z.gfe())
n.dx=z
p=z.Q
if(p==null){p=D.Q()
z.Q=p
z=p}else z=p
p={func:1,ret:-1,args:[D.v]}
o=H.h(n.gfn(),p)
C.a.h(z.a,o)
o=n.dx
z=o.ch
if(z==null){z=D.Q()
o.ch=z}o=H.h(n.ges(),p)
C.a.h(z.a,o)
n.dy=null
n.dx.h(0,r)
n.f.sac(0,new V.a_(0,0,0))
o=n.r
o.sac(0,new V.a_(0,0,0))
z=n.x
z.sac(0,new V.a_(0.7,0.7,0.7))
z=n.z
z.sac(0,new V.a_(0.3,0.3,0.3))
z=n.z
if(z.c===C.c){z.c=C.i
z.bC()
z.bT(100)
o=z.a
o.a=null
o.aa(null)}z.bT(100)
m=E.e2(null,!0,null,"",null,null)
m.sa9(0,F.h1(30,1,15,0.5))
l=E.e2(null,!0,null,"",null,null)
l.saX(U.cO(V.aI(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
z=F.dr(1,null,null,1)
z.aT()
l.sa9(0,z)
k=new U.e5()
k.bD(U.ai)
k.b8(k.geS(),k.gfd())
k.e=null
k.f=V.c2()
k.r=0
k.h(0,u)
k.h(0,U.cO(V.ej(3.141592653589793)))
k.h(0,U.cO(V.aI(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
z=new M.hF()
o=O.cN(E.aH)
z.d=o
o.b8(z.geX(),z.geY())
z.e=null
z.f=null
z.r=null
z.x=null
j=new X.iA()
j.b=1.0471975511965976
j.c=0.1
j.d=2000
j.saX(null)
o=j.b
if(!$.q.$2(o,1.0471975511965976)){q=j.b
j.b=1.0471975511965976
o=new D.S("fov",q,1.0471975511965976,j,[P.t])
o.b=!0
j.aM(o)}o=j.c
if(!$.q.$2(o,0.1)){q=j.c
j.c=0.1
o=new D.S("near",q,0.1,j,[P.t])
o.b=!0
j.aM(o)}o=j.d
if(!$.q.$2(o,2000)){q=j.d
j.d=2000
o=new D.S("far",q,2000,j,[P.t])
o.b=!0
j.aM(o)}o=z.a
if(o!==j){if(o!=null){o=o.gC()
o.toString
i=H.h(z.gag(),p)
C.a.L(o.a,i)}q=z.a
z.a=j
o=j.gC()
o.toString
i=H.h(z.gag(),p)
C.a.h(o.a,i)
o=new D.S("camera",q,z.a,z,[X.dO])
o.b=!0
z.aB(o)}h=new X.hN()
o=new V.b1(0,0,0,1)
h.a=o
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
o=V.es(0,0,1,1)
h.r=o
o=z.b
if(o!==h){if(o!=null){o=o.gC()
o.toString
i=H.h(z.gag(),p)
C.a.L(o.a,i)}q=z.b
z.b=h
o=h.gC()
o.toString
i=H.h(z.gag(),p)
C.a.h(o.a,i)
o=new D.S("target",q,z.b,z,[X.eA])
o.b=!0
z.aB(o)}z.se1(null)
z.se1(n)
z.d.h(0,m)
z.d.h(0,l)
z.a.saX(k)
o=v.d
if(o!==z){if(o!=null){o=o.gC()
o.toString
i=H.h(v.gcF(),p)
C.a.L(o.a,i)}v.d=z
z=z.gC()
z.toString
p=H.h(v.gcF(),p)
C.a.h(z.a,p)
v.eq()}z=new V.iO("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.p("Failed to find shapes for RadioGroup")
z.aO(0,"Cube",new M.mJ(m))
z.aO(0,"Cylinder",new M.mK(m))
z.aO(0,"Cone",new M.mL(m))
z.aO(0,"Sphere",new M.mM(m))
z.d6(0,"Toroid",new M.mN(m),!0)
z.aO(0,"Knot",new M.mO(m))
V.mV(v)},
mJ:{"^":"n:0;a",
$0:function(){this.a.sa9(0,F.dr(1,null,null,1))}},
mK:{"^":"n:0;a",
$0:function(){this.a.sa9(0,F.fL(1,!0,!0,1,40,1))}},
mL:{"^":"n:0;a",
$0:function(){this.a.sa9(0,F.fL(1,!0,!1,1,40,0))}},
mM:{"^":"n:0;a",
$0:function(){this.a.sa9(0,F.mX(6,null,6))}},
mN:{"^":"n:0;a",
$0:function(){this.a.sa9(0,F.h1(30,1,15,0.5))}},
mO:{"^":"n:0;a",
$0:function(){this.a.sa9(0,F.mG(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ea.prototype
return J.e9.prototype}if(typeof a=="string")return J.c_.prototype
if(a==null)return J.eb.prototype
if(typeof a=="boolean")return J.hT.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.aE=function(a){if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.c9=function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.mw=function(a){if(typeof a=="number")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.mx=function(a){if(typeof a=="number")return J.bZ.prototype
if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.du=function(a){if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.aY=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.O=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).t(a,b)}
J.h2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mw(a).M(a,b)}
J.dB=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mx(a).k(a,b)}
J.dC=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fS(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aE(a).j(a,b)}
J.cE=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fS(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c9(a).m(a,b,c)}
J.h3=function(a,b){return J.du(a).E(a,b)}
J.h4=function(a,b,c){return J.aY(a).fl(a,b,c)}
J.h5=function(a,b,c,d){return J.aY(a).d7(a,b,c,d)}
J.h6=function(a,b){return J.du(a).T(a,b)}
J.cF=function(a,b,c){return J.aE(a).hf(a,b,c)}
J.cG=function(a,b){return J.c9(a).H(a,b)}
J.h7=function(a,b,c,d){return J.c9(a).av(a,b,c,d)}
J.dD=function(a,b){return J.c9(a).I(a,b)}
J.dE=function(a){return J.aY(a).gc4(a)}
J.bU=function(a){return J.I(a).gR(a)}
J.bv=function(a){return J.c9(a).gY(a)}
J.as=function(a){return J.aE(a).gl(a)}
J.h8=function(a,b){return J.aY(a).i0(a,b)}
J.h9=function(a,b){return J.aY(a).sZ(a,b)}
J.a9=function(a){return J.I(a).i(a)}
I.aj=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cL.prototype
C.H=J.r.prototype
C.a=J.b7.prototype
C.I=J.e9.prototype
C.e=J.ea.prototype
C.t=J.eb.prototype
C.d=J.bZ.prototype
C.b=J.c_.prototype
C.P=J.c0.prototype
C.V=H.d0.prototype
C.W=W.iw.prototype
C.z=J.iB.prototype
C.X=P.d3.prototype
C.r=J.c6.prototype
C.A=W.bK.prototype
C.B=W.kg.prototype
C.D=new P.hf(!1)
C.C=new P.he(C.D)
C.E=new P.iz()
C.F=new P.k1()
C.j=new P.l3()
C.c=new A.ce(0,"ColorSourceType.None")
C.i=new A.ce(1,"ColorSourceType.Solid")
C.f=new A.ce(2,"ColorSourceType.Texture2D")
C.h=new A.ce(3,"ColorSourceType.TextureCube")
C.q=new P.b4(0)
C.G=new P.b4(5e6)
C.J=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.K=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.L=function(getTagFallback) {
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
C.M=function() {
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
C.N=function(hooks) {
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
C.O=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=H.e(I.aj([127,2047,65535,1114111]),[P.m])
C.m=H.e(I.aj([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.e(I.aj([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.e(I.aj([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.e(I.aj([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.e(I.aj([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.e(I.aj([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.e(I.aj([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.e(I.aj([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.e(I.aj([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.e(I.aj([]),[P.i])
C.U=new H.hr(0,{},C.Q,[P.i,P.i])
C.k=new P.jV(!1)
$.az=0
$.bw=null
$.dJ=null
$.dl=!1
$.fQ=null
$.fH=null
$.fY=null
$.cz=null
$.cC=null
$.dv=null
$.bp=null
$.bP=null
$.bQ=null
$.dm=!1
$.T=C.j
$.e_=null
$.dZ=null
$.dY=null
$.dX=null
$.q=V.iq()
$.eo=null
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
I.$lazy(y,x,w)}})(["dW","$get$dW",function(){return H.fP("_$dart_dartClosure")},"cS","$get$cS",function(){return H.fP("_$dart_js")},"eK","$get$eK",function(){return H.aB(H.cq({
toString:function(){return"$receiver$"}}))},"eL","$get$eL",function(){return H.aB(H.cq({$method$:null,
toString:function(){return"$receiver$"}}))},"eM","$get$eM",function(){return H.aB(H.cq(null))},"eN","$get$eN",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eR","$get$eR",function(){return H.aB(H.cq(void 0))},"eS","$get$eS",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eP","$get$eP",function(){return H.aB(H.eQ(null))},"eO","$get$eO",function(){return H.aB(function(){try{null.$method$}catch(z){return z.message}}())},"eU","$get$eU",function(){return H.aB(H.eQ(void 0))},"eT","$get$eT",function(){return H.aB(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dg","$get$dg",function(){return P.kh()},"bR","$get$bR",function(){return[]},"f6","$get$f6",function(){return P.jZ()},"fc","$get$fc",function(){return H.iu(H.bo(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fx","$get$fx",function(){return P.iU("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fD","$get$fD",function(){return P.m2()},"dU","$get$dU",function(){return{}},"f9","$get$f9",function(){return Z.ap(0)},"f7","$get$f7",function(){return Z.ap(511)},"aP","$get$aP",function(){return Z.ap(1)},"aO","$get$aO",function(){return Z.ap(2)},"aN","$get$aN",function(){return Z.ap(4)},"aQ","$get$aQ",function(){return Z.ap(8)},"aR","$get$aR",function(){return Z.ap(16)},"bI","$get$bI",function(){return Z.ap(32)},"bJ","$get$bJ",function(){return Z.ap(64)},"f8","$get$f8",function(){return Z.ap(96)},"bm","$get$bm",function(){return Z.ap(128)},"aM","$get$aM",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:-1},{func:1,ret:-1,args:[W.au]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.G,args:[F.al]},{func:1,ret:P.G,args:[F.af,P.t,P.t]},{func:1,ret:-1,args:[P.m,[P.j,E.aH]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.G,args:[D.v]},{func:1,ret:P.G,args:[W.aa]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[P.m,[P.j,V.at]]},{func:1,ret:V.a2,args:[P.t]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:-1,args:[P.m,[P.j,U.ai]]},{func:1,args:[,]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.m,[P.j,D.a1]]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:W.a0,args:[W.J]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ag,args:[W.J]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.G,args:[P.Z]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:P.ag,args:[P.t,P.t]},{func:1,ret:P.N,args:[P.m]},{func:1,ret:-1,args:[W.bK]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.ag,args:[[P.j,D.a1]]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:[P.H,P.i,P.i],args:[[P.H,P.i,P.i],P.i]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:[P.aS,,],args:[,]},{func:1,ret:-1,args:[P.b],opt:[P.av]},{func:1,ret:P.G,args:[P.bi]},{func:1,args:[P.i]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.n_(d||a)
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
Isolate.aj=a.aj
Isolate.ds=a.ds
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
if(typeof dartMainRunner==="function")dartMainRunner(M.fV,[])
else M.fV([])})})()
//# sourceMappingURL=test.dart.js.map
