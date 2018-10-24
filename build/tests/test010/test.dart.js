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
if(a1==="q"){processStatics(init.statics[b2]=b3.q,b4)
delete b3.q}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dm(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dn=function(){}
var dart=[["","",,H,{"^":"",md:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
dt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cz:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dr==null){H.lw()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.f2("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cQ()]
if(v!=null)return v
v=H.lB(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.$get$cQ(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
n:{"^":"a;",
t:function(a,b){return a===b},
gV:function(a){return H.bx(a)},
i:["e3",function(a){return"Instance of '"+H.b6(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hE:{"^":"n;",
i:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isO:1},
e4:{"^":"n;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gV:function(a){return 0},
$isL:1},
cR:{"^":"n;",
gV:function(a){return 0},
i:["e5",function(a){return String(a)}]},
ie:{"^":"cR;"},
cq:{"^":"cR;"},
bU:{"^":"cR;",
i:function(a){var z=a[$.$get$dP()]
if(z==null)return this.e5(a)
return"JavaScript function for "+H.j(J.a4(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbT:1},
b3:{"^":"n;$ti",
h:function(a,b){H.D(b,H.B(a,0))
if(!!a.fixed$length)H.q(P.ai("add"))
a.push(b)},
T:function(a,b){var z
if(!!a.fixed$length)H.q(P.ai("remove"))
for(z=0;z<a.length;++z)if(J.V(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.B(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aQ(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.R(z,y,H.j(a[y]))
return z.join(b)},
hm:function(a){return this.l(a,"")},
hf:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.O,args:[H.B(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.d(P.aQ(a))}throw H.d(H.cO())},
he:function(a,b){return this.hf(a,b,null)},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
bA:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.ad(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.ad(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.B(a,0)])
return H.b(a.slice(b,c),[H.B(a,0)])},
gbt:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cO())},
d5:function(a,b){var z,y
H.l(b,{func:1,ret:P.O,args:[H.B(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aQ(a))}return!1},
O:function(a,b){var z
for(z=0;z<a.length;++z)if(J.V(a[z],b))return!0
return!1},
i:function(a){return P.cN(a,"[","]")},
gS:function(a){return new J.at(a,a.length,0,[H.B(a,0)])},
gV:function(a){return H.bx(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.ai("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.c4(b,"newLength",null))
if(b<0)throw H.d(P.ad(b,0,null,"newLength",null))
a.length=b},
R:function(a,b,c){H.a2(b)
H.D(c,H.B(a,0))
if(!!a.immutable$list)H.q(P.ai("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aV(a,b))
if(b>=a.length||b<0)throw H.d(H.aV(a,b))
a[b]=c},
$ise:1,
$isc:1,
q:{
hD:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.c4(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ad(a,0,4294967295,"length",null))
return J.e1(new Array(a),b)},
e1:function(a,b){return J.bs(H.b(a,[b]))},
bs:function(a){H.c2(a)
a.fixed$length=Array
return a}}},
mc:{"^":"b3;$ti"},
at:{"^":"a;a,b,c,0d,$ti",
gJ:function(a){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ch:{"^":"n;",
hX:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.ai(""+a+".toInt()"))},
cj:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.ai(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.ai(""+a+".round()"))},
dQ:function(a,b){var z,y
if(b>20)throw H.d(P.ad(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
dX:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
e9:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d_(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.d_(a,b)},
d_:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.ai("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
ba:function(a,b){var z
if(a>0)z=this.fs(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fs:function(a,b){return b>31?0:a>>>b},
a7:function(a,b){if(typeof b!=="number")throw H.d(H.aU(b))
return a<b},
$isz:1,
$isa_:1},
e3:{"^":"ch;",$isF:1},
e2:{"^":"ch;"},
ci:{"^":"n;",
c7:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aV(a,b))
if(b<0)throw H.d(H.aV(a,b))
if(b>=a.length)H.q(H.aV(a,b))
return a.charCodeAt(b)},
ay:function(a,b){if(b>=a.length)throw H.d(H.aV(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.G(b)
if(typeof b!=="string")throw H.d(P.c4(b,null,null))
return a+b},
e1:function(a,b,c){var z
if(c>a.length)throw H.d(P.ad(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bz:function(a,b){return this.e1(a,b,0)},
aP:function(a,b,c){H.a2(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.cn(b,null,null))
if(b>c)throw H.d(P.cn(b,null,null))
if(c>a.length)throw H.d(P.cn(c,null,null))
return a.substring(b,c)},
b5:function(a,b){return this.aP(a,b,null)},
i_:function(a){return a.toLowerCase()},
n:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hy:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.n(c,z)+a},
a5:function(a,b){return this.hy(a,b," ")},
h2:function(a,b,c){if(c>a.length)throw H.d(P.ad(c,0,a.length,null,null))
return H.fM(a,b,c)},
i:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isek:1,
$ish:1}}],["","",,H,{"^":"",
cO:function(){return new P.d1("No element")},
hC:function(){return new P.d1("Too many elements")},
t:{"^":"jl;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.h.c7(this.a,b)},
$asf3:function(){return[P.F]},
$asv:function(){return[P.F]},
$ase:function(){return[P.F]},
$asc:function(){return[P.F]}},
dW:{"^":"e;"},
ck:{"^":"dW;$ti",
gS:function(a){return new H.cU(this,this.gm(this),0,[H.al(this,"ck",0)])},
cu:function(a,b){return this.e4(0,H.l(b,{func:1,ret:P.O,args:[H.al(this,"ck",0)]}))}},
cU:{"^":"a;a,b,c,0d,$ti",
gJ:function(a){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.c1(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.aQ(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.C(z,w);++this.c
return!0}},
hR:{"^":"e;a,b,$ti",
gS:function(a){return new H.hS(J.b_(this.a),this.b,this.$ti)},
gm:function(a){return J.b0(this.a)},
C:function(a,b){return this.b.$1(J.cD(this.a,b))},
$ase:function(a,b){return[b]}},
hS:{"^":"cP;0a,b,c,$ti",
A:function(){var z=this.b
if(z.A()){this.a=this.c.$1(z.gJ(z))
return!0}this.a=null
return!1},
gJ:function(a){return this.a},
$ascP:function(a,b){return[b]}},
hT:{"^":"ck;a,b,$ti",
gm:function(a){return J.b0(this.a)},
C:function(a,b){return this.b.$1(J.cD(this.a,b))},
$asck:function(a,b){return[b]},
$ase:function(a,b){return[b]}},
dd:{"^":"e;a,b,$ti",
gS:function(a){return new H.jC(J.b_(this.a),this.b,this.$ti)}},
jC:{"^":"cP;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gJ(z)))return!0
return!1},
gJ:function(a){var z=this.a
return z.gJ(z)}},
cc:{"^":"a;$ti"},
f3:{"^":"a;$ti"},
jl:{"^":"cj+f3;"}}],["","",,H,{"^":"",
lp:function(a){return init.types[H.a2(a)]},
lz:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isE},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a4(a)
if(typeof z!=="string")throw H.d(H.aU(a))
return z},
bx:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b6:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.I(a).$iscq){v=C.t(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.ay(w,0)===36)w=C.h.b5(w,1)
r=H.ds(H.c2(H.aW(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
en:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iq:function(a){var z,y,x,w
z=H.b([],[P.F])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aU(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.ba(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aU(w))}return H.en(z)},
eo:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aU(x))
if(x<0)throw H.d(H.aU(x))
if(x>65535)return H.iq(a)}return H.en(a)},
d_:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.ba(z,10))>>>0,56320|z&1023)}throw H.d(P.ad(a,0,1114111,null,null))},
aa:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ip:function(a){return a.b?H.aa(a).getUTCFullYear()+0:H.aa(a).getFullYear()+0},
im:function(a){return a.b?H.aa(a).getUTCMonth()+1:H.aa(a).getMonth()+1},
ii:function(a){return a.b?H.aa(a).getUTCDate()+0:H.aa(a).getDate()+0},
ij:function(a){return a.b?H.aa(a).getUTCHours()+0:H.aa(a).getHours()+0},
il:function(a){return a.b?H.aa(a).getUTCMinutes()+0:H.aa(a).getMinutes()+0},
io:function(a){return a.b?H.aa(a).getUTCSeconds()+0:H.aa(a).getSeconds()+0},
ik:function(a){return a.b?H.aa(a).getUTCMilliseconds()+0:H.aa(a).getMilliseconds()+0},
o:function(a){throw H.d(H.aU(a))},
k:function(a,b){if(a==null)J.b0(a)
throw H.d(H.aV(a,b))},
aV:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.as(!0,b,"index",null)
z=H.a2(J.b0(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.Q(b,a,"index",null,z)
return P.cn(b,"index",null)},
ll:function(a,b,c){if(a>c)return new P.cm(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cm(a,c,!0,b,"end","Invalid value")
return new P.as(!0,b,"end",null)},
aU:function(a){return new P.as(!0,a,null,null)},
lg:function(a){if(typeof a!=="number")throw H.d(H.aU(a))
return a},
d:function(a){var z
if(a==null)a=new P.ej()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fN})
z.name=""}else z.toString=H.fN
return z},
fN:function(){return J.a4(this.dartException)},
q:function(a){throw H.d(a)},
x:function(a){throw H.d(P.aQ(a))},
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lN(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.ba(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cS(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ei(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eM()
u=$.$get$eN()
t=$.$get$eO()
s=$.$get$eP()
r=$.$get$eT()
q=$.$get$eU()
p=$.$get$eR()
$.$get$eQ()
o=$.$get$eW()
n=$.$get$eV()
m=v.a4(y)
if(m!=null)return z.$1(H.cS(H.G(y),m))
else{m=u.a4(y)
if(m!=null){m.method="call"
return z.$1(H.cS(H.G(y),m))}else{m=t.a4(y)
if(m==null){m=s.a4(y)
if(m==null){m=r.a4(y)
if(m==null){m=q.a4(y)
if(m==null){m=p.a4(y)
if(m==null){m=s.a4(y)
if(m==null){m=o.a4(y)
if(m==null){m=n.a4(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ei(H.G(y),m))}}return z.$1(new H.jk(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ew()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.as(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ew()
return a},
bi:function(a){var z
if(a==null)return new H.fm(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fm(a)},
ln:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.R(0,a[y],a[x])}return b},
ly:function(a,b,c,d,e,f){H.i(a,"$isbT")
switch(H.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.p("Unsupported number of arguments for wrapped closure"))},
bf:function(a,b){var z
H.a2(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ly)
a.$identity=z
return z},
h6:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.iu(z).r}else x=d
w=e?Object.create(new H.iQ().constructor.prototype):Object.create(new H.cF(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.au
if(typeof u!=="number")return u.D()
$.au=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dK(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.lp,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dD:H.cG
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dK(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
h3:function(a,b,c,d){var z=H.cG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dK:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h5(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h3(y,!w,z,b)
if(y===0){w=$.au
if(typeof w!=="number")return w.D()
$.au=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bl
if(v==null){v=H.c6("self")
$.bl=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.au
if(typeof w!=="number")return w.D()
$.au=w+1
t+=w
w="return function("+t+"){return this."
v=$.bl
if(v==null){v=H.c6("self")
$.bl=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
h4:function(a,b,c,d){var z,y
z=H.cG
y=H.dD
switch(b?-1:a){case 0:throw H.d(H.iD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h5:function(a,b){var z,y,x,w,v,u,t,s
z=$.bl
if(z==null){z=H.c6("self")
$.bl=z}y=$.dC
if(y==null){y=H.c6("receiver")
$.dC=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h4(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.au
if(typeof y!=="number")return y.D()
$.au=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.au
if(typeof y!=="number")return y.D()
$.au=y+1
return new Function(z+y+"}")()},
dm:function(a,b,c,d,e,f,g){var z,y
z=J.bs(H.c2(b))
H.a2(c)
y=!!J.I(d).$isc?J.bs(d):d
return H.h6(a,z,c,y,!!e,f,g)},
G:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aA(a,"String"))},
lF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aA(a,"num"))},
dk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aA(a,"bool"))},
a2:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aA(a,"int"))},
fK:function(a,b){throw H.d(H.aA(a,H.G(b).substring(3)))},
lH:function(a,b){var z=J.c1(b)
throw H.d(H.h2(a,z.aP(b,3,z.gm(b))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.fK(a,b)},
f:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.lH(a,b)},
c2:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.d(H.aA(a,"List"))},
lA:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.fK(a,b)},
fD:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a2(z)]
else return a.$S()}return},
c0:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fD(J.I(a))
if(z==null)return!1
y=H.fG(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dh)return a
$.dh=!0
try{if(H.c0(a,b))return a
z=H.c3(b)
y=H.aA(a,z)
throw H.d(y)}finally{$.dh=!1}},
dp:function(a,b){if(a!=null&&!H.dl(a,b))H.q(H.aA(a,H.c3(b)))
return a},
fy:function(a){var z
if(a instanceof H.r){z=H.fD(J.I(a))
if(z!=null)return H.c3(z)
return"Closure"}return H.b6(a)},
lM:function(a){throw H.d(new P.hb(H.G(a)))},
fE:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aW:function(a){if(a==null)return
return a.$ti},
n8:function(a,b,c){return H.bj(a["$as"+H.j(c)],H.aW(b))},
bQ:function(a,b,c,d){var z
H.G(c)
H.a2(d)
z=H.bj(a["$as"+H.j(c)],H.aW(b))
return z==null?null:z[d]},
al:function(a,b,c){var z
H.G(b)
H.a2(c)
z=H.bj(a["$as"+H.j(b)],H.aW(a))
return z==null?null:z[c]},
B:function(a,b){var z
H.a2(b)
z=H.aW(a)
return z==null?null:z[b]},
c3:function(a){var z=H.aY(a,null)
return z},
aY:function(a,b){var z,y
H.y(b,"$isc",[P.h],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.ds(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a2(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.j(b[y])}if('func' in a)return H.l6(a,b)
if('futureOr' in a)return"FutureOr<"+H.aY("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
l6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.y(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.h.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aY(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aY(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aY(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aY(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lm(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.G(z[l])
n=n+m+H.aY(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
ds:function(a,b,c){var z,y,x,w,v,u
H.y(c,"$isc",[P.h],"$asc")
if(a==null)return""
z=new P.bB("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aY(u,c)}v="<"+z.i(0)+">"
return v},
bj:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bP:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aW(a)
y=J.I(a)
if(y[b]==null)return!1
return H.fB(H.bj(y[d],z),null,c,null)},
y:function(a,b,c,d){var z,y
H.G(b)
H.c2(c)
H.G(d)
if(a==null)return a
z=H.bP(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.ds(c,0,null)
throw H.d(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fB:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.am(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.am(a[y],b,c[y],d))return!1
return!0},
n6:function(a,b,c){return a.apply(b,H.bj(J.I(b)["$as"+H.j(c)],H.aW(b)))},
fH:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="L"||a===-1||a===-2||H.fH(z)}return!1},
dl:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="L"||b===-1||b===-2||H.fH(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dl(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c0(a,b)}y=J.I(a).constructor
x=H.aW(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.am(y,null,b,null)
return z},
D:function(a,b){if(a!=null&&!H.dl(a,b))throw H.d(H.aA(a,H.c3(b)))
return a},
am:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.am(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="L")return!0
if('func' in c)return H.fG(a,b,c,d)
if('func' in a)return c.builtin$cls==="bT"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.am("type" in a?a.type:null,b,x,d)
else if(H.am(a,b,x,d))return!0
else{if(!('$is'+"bq" in y.prototype))return!1
w=y.prototype["$as"+"bq"]
v=H.bj(w,z?a.slice(1):null)
return H.am(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c3(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fB(H.bj(r,z),b,u,d)},
fG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.am(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.am(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.am(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.am(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lE(m,b,l,d)},
lE:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.am(c[w],d,a[w],b))return!1}return!0},
n7:function(a,b,c){Object.defineProperty(a,H.G(b),{value:c,enumerable:false,writable:true,configurable:true})},
lB:function(a){var z,y,x,w,v,u
z=H.G($.fF.$1(a))
y=$.cx[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.G($.fA.$2(a,z))
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
return u.i}if(v==="+")return H.fJ(a,x)
if(v==="*")throw H.d(P.f2(z))
if(init.leafTags[z]===true){u=H.cB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fJ(a,x)},
fJ:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dt(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cB:function(a){return J.dt(a,!1,null,!!a.$isE)},
lD:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cB(z)
else return J.dt(z,c,null,null)},
lw:function(){if(!0===$.dr)return
$.dr=!0
H.lx()},
lx:function(){var z,y,x,w,v,u,t,s
$.cx=Object.create(null)
$.cA=Object.create(null)
H.ls()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fL.$1(v)
if(u!=null){t=H.lD(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ls:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.be(C.H,H.be(C.M,H.be(C.r,H.be(C.r,H.be(C.L,H.be(C.I,H.be(C.J(C.t),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fF=new H.lt(v)
$.fA=new H.lu(u)
$.fL=new H.lv(t)},
be:function(a,b){return a(b)||b},
fM:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dw:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
it:{"^":"a;a,b,c,d,e,f,r,0x",q:{
iu:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bs(z)
y=z[0]
x=z[1]
return new H.it(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j8:{"^":"a;a,b,c,d,e,f",
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
q:{
az:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cp:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eS:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ib:{"^":"a0;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
ei:function(a,b){return new H.ib(a,b==null?null:b.method)}}},
hH:{"^":"a0;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
q:{
cS:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hH(a,y,z?null:b.receiver)}}},
jk:{"^":"a0;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lN:{"^":"r:17;a",
$1:function(a){if(!!J.I(a).$isa0)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fm:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isar:1},
r:{"^":"a;",
i:function(a){return"Closure '"+H.b6(this).trim()+"'"},
gdT:function(){return this},
$isbT:1,
gdT:function(){return this}},
eC:{"^":"r;"},
iQ:{"^":"eC;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cF:{"^":"eC;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cF))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.bx(this.a)
else y=typeof z!=="object"?J.aZ(z):H.bx(z)
return(y^H.bx(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.b6(z)+"'")},
q:{
cG:function(a){return a.a},
dD:function(a){return a.c},
c6:function(a){var z,y,x,w,v
z=new H.cF("self","target","receiver","name")
y=J.bs(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
j9:{"^":"a0;a",
i:function(a){return this.a},
q:{
aA:function(a,b){return new H.j9("TypeError: "+H.j(P.cb(a))+": type '"+H.fy(a)+"' is not a subtype of type '"+b+"'")}}},
h1:{"^":"a0;a",
i:function(a){return this.a},
q:{
h2:function(a,b){return new H.h1("CastError: "+H.j(P.cb(a))+": type '"+H.fy(a)+"' is not a subtype of type '"+b+"'")}}},
iC:{"^":"a0;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
q:{
iD:function(a){return new H.iC(a)}}},
b4:{"^":"ec;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
ga_:function(a){return new H.e8(this,[H.B(this,0)])},
d9:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cP(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cP(y,b)}else return this.hk(b)},
hk:function(a){var z=this.d
if(z==null)return!1
return this.ck(this.bL(z,J.aZ(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b8(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b8(w,b)
x=y==null?null:y.b
return x}else return this.hl(b)},
hl:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bL(z,J.aZ(a)&0x3ffffff)
x=this.ck(y,a)
if(x<0)return
return y[x].b},
R:function(a,b,c){var z,y,x,w,v,u
H.D(b,H.B(this,0))
H.D(c,H.B(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bS()
this.b=z}this.cI(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bS()
this.c=y}this.cI(y,b,c)}else{x=this.d
if(x==null){x=this.bS()
this.d=x}w=J.aZ(b)&0x3ffffff
v=this.bL(x,w)
if(v==null)this.bX(x,w,[this.bT(b,c)])
else{u=this.ck(v,b)
if(u>=0)v[u].b=c
else v.push(this.bT(b,c))}}},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.B(this,0),H.B(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aQ(this))
z=z.c}},
cI:function(a,b,c){var z
H.D(b,H.B(this,0))
H.D(c,H.B(this,1))
z=this.b8(a,b)
if(z==null)this.bX(a,b,this.bT(b,c))
else z.b=c},
eI:function(){this.r=this.r+1&67108863},
bT:function(a,b){var z,y
z=new H.hK(H.D(a,H.B(this,0)),H.D(b,H.B(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eI()
return z},
ck:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
i:function(a){return P.ed(this)},
b8:function(a,b){return a[b]},
bL:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
eD:function(a,b){delete a[b]},
cP:function(a,b){return this.b8(a,b)!=null},
bS:function(){var z=Object.create(null)
this.bX(z,"<non-identifier-key>",z)
this.eD(z,"<non-identifier-key>")
return z},
$ise7:1},
hK:{"^":"a;a,b,0c,0d"},
e8:{"^":"dW;a,$ti",
gm:function(a){return this.a.a},
gS:function(a){var z,y
z=this.a
y=new H.hL(z,z.r,this.$ti)
y.c=z.e
return y}},
hL:{"^":"a;a,b,0c,0d,$ti",
gJ:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aQ(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lt:{"^":"r:17;a",
$1:function(a){return this.a(a)}},
lu:{"^":"r:35;a",
$2:function(a,b){return this.a(a,b)}},
lv:{"^":"r:43;a",
$1:function(a){return this.a(H.G(a))}},
hF:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isek:1,
q:{
hG:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(new P.hu("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lm:function(a){return J.e1(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lG:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bL:function(a){return a},
aT:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aV(b,a))},
l5:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.ll(a,b,c))
return b},
i6:{"^":"n;",$ismP:1,"%":"DataView;ArrayBufferView;cY|fg|fh|i5|fi|fj|aS"},
cY:{"^":"i6;",
gm:function(a){return a.length},
$isE:1,
$asE:I.dn},
i5:{"^":"fh;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
$ascc:function(){return[P.z]},
$asv:function(){return[P.z]},
$ise:1,
$ase:function(){return[P.z]},
$isc:1,
$asc:function(){return[P.z]},
"%":"Float32Array|Float64Array"},
aS:{"^":"fj;",
$ascc:function(){return[P.F]},
$asv:function(){return[P.F]},
$ise:1,
$ase:function(){return[P.F]},
$isc:1,
$asc:function(){return[P.F]}},
ml:{"^":"aS;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mm:{"^":"aS;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mn:{"^":"aS;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mo:{"^":"aS;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mp:{"^":"aS;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mq:{"^":"aS;",
gm:function(a){return a.length},
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
i7:{"^":"aS;",
gm:function(a){return a.length},
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
bA:function(a,b,c){return new Uint8Array(a.subarray(b,H.l5(b,c,a.length)))},
"%":";Uint8Array"},
fg:{"^":"cY+v;"},
fh:{"^":"fg+cc;"},
fi:{"^":"cY+v;"},
fj:{"^":"fi+cc;"}}],["","",,P,{"^":"",
jE:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ld()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bf(new P.jG(z),1)).observe(y,{childList:true})
return new P.jF(z,y,x)}else if(self.setImmediate!=null)return P.le()
return P.lf()},
mU:[function(a){self.scheduleImmediate(H.bf(new P.jH(H.l(a,{func:1,ret:-1})),0))},"$1","ld",4,0,10],
mV:[function(a){self.setImmediate(H.bf(new P.jI(H.l(a,{func:1,ret:-1})),0))},"$1","le",4,0,10],
mW:[function(a){P.d7(C.l,H.l(a,{func:1,ret:-1}))},"$1","lf",4,0,10],
d7:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.Z(a.a,1000)
return P.kK(z<0?0:z,b)},
eH:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.b7]})
z=C.f.Z(a.a,1000)
return P.kL(z<0?0:z,b)},
l9:function(a,b){if(H.c0(a,{func:1,args:[P.a,P.ar]}))return b.hI(a,null,P.a,P.ar)
if(H.c0(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.c4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
l8:function(){var z,y
for(;z=$.bd,z!=null;){$.bN=null
y=z.b
$.bd=y
if(y==null)$.bM=null
z.a.$0()}},
n5:[function(){$.di=!0
try{P.l8()}finally{$.bN=null
$.di=!1
if($.bd!=null)$.$get$de().$1(P.fC())}},"$0","fC",0,0,3],
fx:function(a){var z=new P.f8(H.l(a,{func:1,ret:-1}))
if($.bd==null){$.bM=z
$.bd=z
if(!$.di)$.$get$de().$1(P.fC())}else{$.bM.b=z
$.bM=z}},
lc:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bd
if(z==null){P.fx(a)
$.bN=$.bM
return}y=new P.f8(a)
x=$.bN
if(x==null){y.b=z
$.bN=y
$.bd=y}else{y.b=x.b
x.b=y
$.bN=y
if(y.b==null)$.bM=y}},
lI:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.S
if(C.j===y){P.cw(null,null,C.j,a)
return}y.toString
P.cw(null,null,y,H.l(y.c2(a),z))},
eG:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.S
if(y===C.j){y.toString
return P.d7(a,b)}return P.d7(a,H.l(y.c2(b),z))},
j5:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b7]}
H.l(b,z)
y=$.S
if(y===C.j){y.toString
return P.eH(a,b)}x=y.d6(b,P.b7)
$.S.toString
return P.eH(a,H.l(x,z))},
cv:function(a,b,c,d,e){var z={}
z.a=d
P.lc(new P.la(z,e))},
fv:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
fw:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.D(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
lb:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
y=$.S
if(y===c)return d.$2(e,f)
$.S=c
z=y
try{y=d.$2(e,f)
return y}finally{$.S=z}},
cw:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c2(d):c.h_(d,-1)
P.fx(d)},
jG:{"^":"r:18;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jF:{"^":"r:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jH:{"^":"r:2;a",
$0:function(){this.a.$0()}},
jI:{"^":"r:2;a",
$0:function(){this.a.$0()}},
fq:{"^":"a;a,0b,c",
eo:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bf(new P.kN(this,b),0),a)
else throw H.d(P.ai("`setTimeout()` not found."))},
ep:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bf(new P.kM(this,a,Date.now(),b),0),a)
else throw H.d(P.ai("Periodic timer."))},
$isb7:1,
q:{
kK:function(a,b){var z=new P.fq(!0,0)
z.eo(a,b)
return z},
kL:function(a,b){var z=new P.fq(!1,0)
z.ep(a,b)
return z}}},
kN:{"^":"r:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kM:{"^":"r:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.e9(w,x)}z.c=y
this.d.$1(z)}},
bc:{"^":"a;0a,b,c,d,e,$ti",
hq:function(a){if(this.c!==6)return!0
return this.b.b.cs(H.l(this.d,{func:1,ret:P.O,args:[P.a]}),a.a,P.O,P.a)},
hi:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.B(this,1)}
w=this.b.b
if(H.c0(z,{func:1,args:[P.a,P.ar]}))return H.dp(w.hP(z,a.a,a.b,null,y,P.ar),x)
else return H.dp(w.cs(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aN:{"^":"a;cZ:a<,b,0fi:c<,$ti",
dP:function(a,b,c){var z,y,x,w
z=H.B(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.l9(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aN(0,$.S,[c])
w=b==null?1:3
this.cJ(new P.bc(x,w,a,b,[z,c]))
return x},
hW:function(a,b){return this.dP(a,null,b)},
cJ:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isbc")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaN")
z=y.a
if(z<4){y.cJ(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cw(null,null,z,H.l(new P.jX(this,a),{func:1,ret:-1}))}},
cV:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isbc")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaN")
y=u.a
if(y<4){u.cV(a)
return}this.a=y
this.c=u.c}z.a=this.b9(a)
y=this.b
y.toString
P.cw(null,null,y,H.l(new P.k1(z,this),{func:1,ret:-1}))}},
bV:function(){var z=H.i(this.c,"$isbc")
this.c=null
return this.b9(z)},
b9:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cM:function(a){var z,y,x,w
z=H.B(this,0)
H.dp(a,{futureOr:1,type:z})
y=this.$ti
x=H.bP(a,"$isbq",y,"$asbq")
if(x){z=H.bP(a,"$isaN",y,null)
if(z)P.fb(a,this)
else P.jY(a,this)}else{w=this.bV()
H.D(a,z)
this.a=4
this.c=a
P.bJ(this,w)}},
bG:[function(a,b){var z
H.i(b,"$isar")
z=this.bV()
this.a=8
this.c=new P.af(a,b)
P.bJ(this,z)},function(a){return this.bG(a,null)},"i4","$2","$1","gey",4,2,44],
$isbq:1,
q:{
jY:function(a,b){var z,y,x
b.a=1
try{a.dP(new P.jZ(b),new P.k_(b),null)}catch(x){z=H.ae(x)
y=H.bi(x)
P.lI(new P.k0(b,z,y))}},
fb:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaN")
if(z>=4){y=b.bV()
b.a=a.a
b.c=a.c
P.bJ(b,y)}else{y=H.i(b.c,"$isbc")
b.a=2
b.c=a
a.cV(y)}},
bJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isaf")
y=y.b
u=v.a
t=v.b
y.toString
P.cv(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bJ(z.a,b)}y=z.a
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
if(p){H.i(r,"$isaf")
y=y.b
u=r.a
t=r.b
y.toString
P.cv(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.k4(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.k3(x,b,r).$0()}else if((y&2)!==0)new P.k2(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.I(y).$isbq){if(y.a>=4){n=H.i(t.c,"$isbc")
t.c=null
b=t.b9(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fb(y,t)
return}}m=b.b
n=H.i(m.c,"$isbc")
m.c=null
b=m.b9(n)
y=x.a
u=x.b
if(!y){H.D(u,H.B(m,0))
m.a=4
m.c=u}else{H.i(u,"$isaf")
m.a=8
m.c=u}z.a=m
y=m}}}},
jX:{"^":"r:2;a,b",
$0:function(){P.bJ(this.a,this.b)}},
k1:{"^":"r:2;a,b",
$0:function(){P.bJ(this.b,this.a.a)}},
jZ:{"^":"r:18;a",
$1:function(a){var z=this.a
z.a=0
z.cM(a)}},
k_:{"^":"r:42;a",
$2:function(a,b){this.a.bG(a,H.i(b,"$isar"))},
$1:function(a){return this.$2(a,null)}},
k0:{"^":"r:2;a,b,c",
$0:function(){this.a.bG(this.b,this.c)}},
k4:{"^":"r:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dN(H.l(w.d,{func:1}),null)}catch(v){y=H.ae(v)
x=H.bi(v)
if(this.d){w=H.i(this.a.a.c,"$isaf").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isaf")
else u.b=new P.af(y,x)
u.a=!0
return}if(!!J.I(z).$isbq){if(z instanceof P.aN&&z.gcZ()>=4){if(z.gcZ()===8){w=this.b
w.b=H.i(z.gfi(),"$isaf")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hW(new P.k5(t),null)
w.a=!1}}},
k5:{"^":"r:39;a",
$1:function(a){return this.a}},
k3:{"^":"r:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.B(x,0)
v=H.D(this.c,w)
u=H.B(x,1)
this.a.b=x.b.b.cs(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ae(t)
y=H.bi(t)
x=this.a
x.b=new P.af(z,y)
x.a=!0}}},
k2:{"^":"r:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isaf")
w=this.c
if(w.hq(z)&&w.e!=null){v=this.b
v.b=w.hi(z)
v.a=!1}}catch(u){y=H.ae(u)
x=H.bi(u)
w=H.i(this.a.a.c,"$isaf")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.af(y,x)
s.a=!0}}},
f8:{"^":"a;a,0b"},
d2:{"^":"a;$ti",
gm:function(a){var z,y
z={}
y=new P.aN(0,$.S,[P.F])
z.a=0
this.hp(new P.iT(z,this),!0,new P.iU(z,y),y.gey())
return y}},
iT:{"^":"r;a,b",
$1:function(a){H.D(a,H.al(this.b,"d2",0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.al(this.b,"d2",0)]}}},
iU:{"^":"r:2;a,b",
$0:function(){this.b.cM(this.a.a)}},
ez:{"^":"a;$ti"},
iS:{"^":"a;"},
b7:{"^":"a;"},
af:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isa0:1},
kU:{"^":"a;",$ismT:1},
la:{"^":"r:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ej()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
kp:{"^":"kU;",
hQ:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.S){a.$0()
return}P.fv(null,null,this,a,-1)}catch(x){z=H.ae(x)
y=H.bi(x)
P.cv(null,null,this,z,H.i(y,"$isar"))}},
hR:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.j===$.S){a.$1(b)
return}P.fw(null,null,this,a,b,-1,c)}catch(x){z=H.ae(x)
y=H.bi(x)
P.cv(null,null,this,z,H.i(y,"$isar"))}},
h_:function(a,b){return new P.kr(this,H.l(a,{func:1,ret:b}),b)},
c2:function(a){return new P.kq(this,H.l(a,{func:1,ret:-1}))},
d6:function(a,b){return new P.ks(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dN:function(a,b){H.l(a,{func:1,ret:b})
if($.S===C.j)return a.$0()
return P.fv(null,null,this,a,b)},
cs:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.S===C.j)return a.$1(b)
return P.fw(null,null,this,a,b,c,d)},
hP:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.S===C.j)return a.$2(b,c)
return P.lb(null,null,this,a,b,c,d,e,f)},
hI:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
kr:{"^":"r;a,b,c",
$0:function(){return this.a.dN(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kq:{"^":"r:3;a,b",
$0:function(){return this.a.hQ(this.b)}},
ks:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.hR(this.b,H.D(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hM:function(a,b,c){H.c2(a)
return H.y(H.ln(a,new H.b4(0,0,[b,c])),"$ise7",[b,c],"$ase7")},
e9:function(a,b){return new H.b4(0,0,[a,b])},
bW:function(a,b,c,d){return new P.kc(0,0,[d])},
hB:function(a,b,c){var z,y
if(P.dj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bO()
C.a.h(y,a)
try{P.l7(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.eA(b,H.lA(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
cN:function(a,b,c){var z,y,x
if(P.dj(a))return b+"..."+c
z=new P.bB(b)
y=$.$get$bO()
C.a.h(y,a)
try{x=z
x.a=P.eA(x.gaz(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gaz()+c
y=z.gaz()
return y.charCodeAt(0)==0?y:y},
dj:function(a){var z,y
for(z=0;y=$.$get$bO(),z<y.length;++z)if(a===y[z])return!0
return!1},
l7:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gS(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.j(z.gJ(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gJ(z);++x
if(!z.A()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gJ(z);++x
for(;z.A();t=s,s=r){r=z.gJ(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ea:function(a,b){var z,y
z=P.bW(null,null,null,b)
for(y=J.b_(a);y.A();)z.h(0,H.D(y.gJ(y),b))
return z},
ed:function(a){var z,y,x
z={}
if(P.dj(a))return"{...}"
y=new P.bB("")
try{C.a.h($.$get$bO(),a)
x=y
x.a=x.gaz()+"{"
z.a=!0
J.fR(a,new P.hQ(z,y))
z=y
z.a=z.gaz()+"}"}finally{z=$.$get$bO()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gaz()
return z.charCodeAt(0)==0?z:z},
kc:{"^":"k6;a,0b,0c,0d,0e,0f,r,$ti",
gS:function(a){var z=new P.ff(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
O:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isct")!=null}else{y=this.ez(b)
return y}},
ez:function(a){var z=this.d
if(z==null)return!1
return this.bJ(this.cT(z,a),a)>=0},
h:function(a,b){var z,y
H.D(b,H.B(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dg()
this.b=z}return this.cK(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dg()
this.c=y}return this.cK(y,b)}else return this.eq(0,b)},
eq:function(a,b){var z,y,x
H.D(b,H.B(this,0))
z=this.d
if(z==null){z=P.dg()
this.d=z}y=this.cN(b)
x=z[y]
if(x==null)z[y]=[this.bF(b)]
else{if(this.bJ(x,b)>=0)return!1
x.push(this.bF(b))}return!0},
T:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cW(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cW(this.c,b)
else return this.fd(0,b)},
fd:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.cT(z,b)
x=this.bJ(y,b)
if(x<0)return!1
this.d0(y.splice(x,1)[0])
return!0},
cK:function(a,b){H.D(b,H.B(this,0))
if(H.i(a[b],"$isct")!=null)return!1
a[b]=this.bF(b)
return!0},
cW:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isct")
if(z==null)return!1
this.d0(z)
delete a[b]
return!0},
cL:function(){this.r=this.r+1&67108863},
bF:function(a){var z,y
z=new P.ct(H.D(a,H.B(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cL()
return z},
d0:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cL()},
cN:function(a){return J.aZ(a)&0x3ffffff},
cT:function(a,b){return a[this.cN(b)]},
bJ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
q:{
dg:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
ct:{"^":"a;a,0b,0c"},
ff:{"^":"a;a,b,0c,0d,$ti",
gJ:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aQ(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.D(z.a,H.B(this,0))
this.c=z.b
return!0}}}},
k6:{"^":"iE;"},
cj:{"^":"kd;",$ise:1,$isc:1},
v:{"^":"a;$ti",
gS:function(a){return new H.cU(a,this.gm(a),0,[H.bQ(this,a,"v",0)])},
C:function(a,b){return this.j(a,b)},
hZ:function(a,b){var z,y,x
z=H.b([],[H.bQ(this,a,"v",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.R(z,y,this.j(a,y));++y}return z},
hY:function(a){return this.hZ(a,!0)},
i:function(a){return P.cN(a,"[","]")}},
ec:{"^":"a8;"},
hQ:{"^":"r:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
a8:{"^":"a;$ti",
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bQ(this,a,"a8",0),H.bQ(this,a,"a8",1)]})
for(z=J.b_(this.ga_(a));z.A();){y=z.gJ(z)
b.$2(y,this.j(a,y))}},
gm:function(a){return J.b0(this.ga_(a))},
i:function(a){return P.ed(a)},
$isa1:1},
iG:{"^":"a;$ti",
ah:function(a,b){var z
for(z=J.b_(H.y(b,"$ise",this.$ti,"$ase"));z.A();)this.h(0,z.gJ(z))},
i:function(a){return P.cN(this,"{","}")},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.dz("index"))
if(b<0)H.q(P.ad(b,0,null,"index",null))
for(z=new P.ff(this,this.r,this.$ti),z.c=this.e,y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.d(P.Q(b,this,"index",null,y))},
$ise:1},
iE:{"^":"iG;"},
kd:{"^":"a+v;"}}],["","",,P,{"^":"",cJ:{"^":"a;$ti"},c9:{"^":"iS;$ti"},hm:{"^":"cJ;",
$ascJ:function(){return[P.h,[P.c,P.F]]}},hz:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hy:{"^":"c9;a",
eA:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.k(a,w)
switch(a[w]){case"&":u="&amp;"
break
case'"':u=z?"&quot;":null
break
case"'":u=x?"&#39;":null
break
case"<":u="&lt;"
break
case">":u="&gt;"
break
case"/":u=y?"&#47;":null
break
default:u=null}if(u!=null){if(v==null)v=new P.bB("")
if(w>b)v.a+=C.h.aP(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fV(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asc9:function(){return[P.h,P.h]}},jr:{"^":"hm;a"},js:{"^":"c9;",
h4:function(a,b,c){var z,y,x,w
z=a.length
P.ep(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kS(0,0,x)
if(w.eF(a,b,z)!==z)w.d1(C.h.c7(a,z-1),0)
return C.R.bA(x,0,w.b)},
h3:function(a){return this.h4(a,0,null)},
$asc9:function(){return[P.h,[P.c,P.F]]}},kS:{"^":"a;a,b,c",
d1:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.k(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.k(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.k(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.k(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.k(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.k(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.k(z,y)
z[y]=128|a&63
return!1}},
eF:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.c7(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.ay(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d1(w,C.h.ay(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.k(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.k(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.k(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.k(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
ho:function(a){var z=J.I(a)
if(!!z.$isr)return z.i(a)
return"Instance of '"+H.b6(a)+"'"},
hN:function(a,b,c,d){var z,y
H.D(b,d)
z=J.hD(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.R(z,y,b)
return H.y(z,"$isc",[d],"$asc")},
hO:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gS(a);x.A();)C.a.h(y,H.D(x.gJ(x),c))
if(b)return y
return H.y(J.bs(y),"$isc",z,"$asc")},
d3:function(a,b,c){var z,y
z=P.F
H.y(a,"$ise",[z],"$ase")
if(a.constructor===Array){H.y(a,"$isb3",[z],"$asb3")
y=a.length
c=P.ep(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a7()
z=c<y}else z=!0
return H.eo(z?C.a.bA(a,b,c):a)}return P.iV(a,b,c)},
iV:function(a,b,c){var z,y,x
H.y(a,"$ise",[P.F],"$ase")
z=J.b_(a)
for(y=0;y<b;++y)if(!z.A())throw H.d(P.ad(b,0,y,null,null))
x=[]
for(;z.A();)x.push(z.gJ(z))
return H.eo(x)},
iv:function(a,b,c){return new H.hF(a,H.hG(a,!1,!0,!1))},
ft:function(a,b,c,d){var z,y,x,w,v,u
H.y(a,"$isc",[P.F],"$asc")
if(c===C.p){z=$.$get$fs().b
z=z.test(b)}else z=!1
if(z)return b
y=C.A.h3(H.D(b,H.al(c,"cJ",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.k(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.d_(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cb:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ho(a)},
p:function(a){return new P.fa(a)},
dv:function(a){H.lG(a)},
O:{"^":"a;"},
"+bool":0,
an:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&this.b===b.b},
gV:function(a){var z=this.a
return(z^C.f.ba(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hd(H.ip(this))
y=P.bR(H.im(this))
x=P.bR(H.ii(this))
w=P.bR(H.ij(this))
v=P.bR(H.il(this))
u=P.bR(H.io(this))
t=P.he(H.ik(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
hd:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
he:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bR:function(a){if(a>=10)return""+a
return"0"+a}}},
z:{"^":"a_;"},
"+double":0,
bn:{"^":"a;a",
a7:function(a,b){return C.f.a7(this.a,H.i(b,"$isbn").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bn))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hi()
y=this.a
if(y<0)return"-"+new P.bn(0-y).i(0)
x=z.$1(C.f.Z(y,6e7)%60)
w=z.$1(C.f.Z(y,1e6)%60)
v=new P.hh().$1(y%1e6)
return""+C.f.Z(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
q:{
dV:function(a,b,c,d,e,f){return new P.bn(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hh:{"^":"r:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hi:{"^":"r:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a0:{"^":"a;"},
ej:{"^":"a0;",
i:function(a){return"Throw of null."}},
as:{"^":"a0;a,b,c,d",
gbI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbH:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbI()+y+x
if(!this.a)return w
v=this.gbH()
u=P.cb(this.b)
return w+v+": "+H.j(u)},
q:{
fX:function(a){return new P.as(!1,null,null,a)},
c4:function(a,b,c){return new P.as(!0,a,b,c)},
dz:function(a){return new P.as(!1,null,a,"Must not be null")}}},
cm:{"^":"as;e,f,a,b,c,d",
gbI:function(){return"RangeError"},
gbH:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
q:{
cn:function(a,b,c){return new P.cm(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.cm(b,c,!0,a,d,"Invalid value")},
ep:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.d(P.ad(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.d(P.ad(b,a,c,"end",f))
return b}return c}}},
hA:{"^":"as;e,m:f>,a,b,c,d",
gbI:function(){return"RangeError"},
gbH:function(){if(J.fO(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
q:{
Q:function(a,b,c,d,e){var z=H.a2(e!=null?e:J.b0(b))
return new P.hA(b,z,!0,a,c,"Index out of range")}}},
jm:{"^":"a0;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
ai:function(a){return new P.jm(a)}}},
jj:{"^":"a0;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
f2:function(a){return new P.jj(a)}}},
d1:{"^":"a0;a",
i:function(a){return"Bad state: "+this.a},
q:{
ey:function(a){return new P.d1(a)}}},
h8:{"^":"a0;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cb(z))+"."},
q:{
aQ:function(a){return new P.h8(a)}}},
ic:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa0:1},
ew:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa0:1},
hb:{"^":"a0;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fa:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hu:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.aP(x,0,75)+"..."
return y+"\n"+x}},
bT:{"^":"a;"},
F:{"^":"a_;"},
"+int":0,
e:{"^":"a;$ti",
cu:["e4",function(a,b){var z=H.al(this,"e",0)
return new H.dd(this,H.l(b,{func:1,ret:P.O,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gS(this)
for(y=0;z.A();)++y
return y},
gau:function(a){var z,y
z=this.gS(this)
if(!z.A())throw H.d(H.cO())
y=z.gJ(z)
if(z.A())throw H.d(H.hC())
return y},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.dz("index"))
if(b<0)H.q(P.ad(b,0,null,"index",null))
for(z=this.gS(this),y=0;z.A();){x=z.gJ(z)
if(b===y)return x;++y}throw H.d(P.Q(b,this,"index",null,y))},
i:function(a){return P.hB(this,"(",")")}},
cP:{"^":"a;$ti"},
c:{"^":"a;$ti",$ise:1},
"+List":0,
a1:{"^":"a;$ti"},
L:{"^":"a;",
gV:function(a){return P.a.prototype.gV.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a_:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gV:function(a){return H.bx(this)},
i:function(a){return"Instance of '"+H.b6(this)+"'"},
toString:function(){return this.i(this)}},
ar:{"^":"a;"},
h:{"^":"a;",$isek:1},
"+String":0,
bB:{"^":"a;az:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
eA:function(a,b,c){var z=J.b_(b)
if(!z.A())return a
if(c.length===0){do a+=H.j(z.gJ(z))
while(z.A())}else{a+=H.j(z.gJ(z))
for(;z.A();)a=a+c+H.j(z.gJ(z))}return a}}}}],["","",,W,{"^":"",
dy:function(a){var z=document.createElement("a")
return z},
cI:function(a,b){var z=document.createElement("canvas")
return z},
hj:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).aa(z,a,b,c)
y.toString
z=W.C
z=new H.dd(new W.ak(y),H.l(new W.hk(),{func:1,ret:P.O,args:[z]}),[z])
return H.i(z.gau(z),"$isT")},
hl:function(a){H.i(a,"$isa7")
return"wheel"},
bo:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fU(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ae(x)}return z},
cr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fe:function(a,b,c,d){var z,y
z=W.cr(W.cr(W.cr(W.cr(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fz:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.j)return a
return z.d6(a,b)},
ac:{"^":"T;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lP:{"^":"n;0m:length=","%":"AccessibleNodeList"},
lQ:{"^":"ac;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lR:{"^":"ac;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dB:{"^":"ac;",$isdB:1,"%":"HTMLBaseElement"},
h0:{"^":"n;","%":";Blob"},
c5:{"^":"ac;",$isc5:1,"%":"HTMLBodyElement"},
cH:{"^":"ac;",
by:function(a,b,c){if(c!=null)return a.getContext(b,P.lh(c,null))
return a.getContext(b)},
dV:function(a,b){return this.by(a,b,null)},
$iscH:1,
"%":"HTMLCanvasElement"},
dI:{"^":"n;",$isdI:1,"%":"CanvasRenderingContext2D"},
lX:{"^":"C;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lZ:{"^":"ha;0m:length=","%":"CSSPerspective"},
bm:{"^":"n;",$isbm:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
m_:{"^":"jM;0m:length=",
dW:function(a,b){var z=a.getPropertyValue(this.ev(a,b))
return z==null?"":z},
ev:function(a,b){var z,y
z=$.$get$dN()
y=z[b]
if(typeof y==="string")return y
y=this.ft(a,b)
z[b]=y
return y},
ft:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hf()+b
if(z in a)return z
return b},
gc3:function(a){return a.bottom},
gak:function(a){return a.height},
gaL:function(a){return a.left},
gb_:function(a){return a.right},
gb1:function(a){return a.top},
gam:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h9:{"^":"a;",
gaL:function(a){return this.dW(a,"left")}},
dO:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ha:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
m0:{"^":"dO;0m:length=","%":"CSSTransformValue"},
m1:{"^":"dO;0m:length=","%":"CSSUnparsedValue"},
m2:{"^":"n;0m:length=","%":"DataTransferItemList"},
b1:{"^":"ac;",$isb1:1,"%":"HTMLDivElement"},
m3:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
m4:{"^":"jO;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[[P.ab,P.a_]]},
$asv:function(){return[[P.ab,P.a_]]},
$ise:1,
$ase:function(){return[[P.ab,P.a_]]},
$isc:1,
$asc:function(){return[[P.ab,P.a_]]},
$asA:function(){return[[P.ab,P.a_]]},
"%":"ClientRectList|DOMRectList"},
hg:{"^":"n;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gam(a))+" x "+H.j(this.gak(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bP(b,"$isab",[P.a_],"$asab")
if(!z)return!1
z=J.bh(b)
return a.left===z.gaL(b)&&a.top===z.gb1(b)&&this.gam(a)===z.gam(b)&&this.gak(a)===z.gak(b)},
gV:function(a){return W.fe(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF)},
gc3:function(a){return a.bottom},
gak:function(a){return a.height},
gaL:function(a){return a.left},
gb_:function(a){return a.right},
gb1:function(a){return a.top},
gam:function(a){return a.width},
$isab:1,
$asab:function(){return[P.a_]},
"%":";DOMRectReadOnly"},
m5:{"^":"jQ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[P.h]},
$asv:function(){return[P.h]},
$ise:1,
$ase:function(){return[P.h]},
$isc:1,
$asc:function(){return[P.h]},
$asA:function(){return[P.h]},
"%":"DOMStringList"},
m6:{"^":"n;0m:length=","%":"DOMTokenList"},
jL:{"^":"cj;cS:a<,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return H.i(z[b],"$isT")},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var z=this.hY(this)
return new J.at(z,z.length,0,[H.B(z,0)])},
$asv:function(){return[W.T]},
$ase:function(){return[W.T]},
$asc:function(){return[W.T]}},
T:{"^":"C;0hS:tagName=",
gfZ:function(a){return new W.jR(a)},
gd7:function(a){return new W.jL(a,a.children)},
gd8:function(a){return P.is(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a_)},
i:function(a){return a.localName},
aa:["bB",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dY
if(z==null){z=H.b([],[W.ay])
y=new W.eh(z)
C.a.h(z,W.fc(null))
C.a.h(z,W.fn())
$.dY=y
d=y}else d=z
z=$.dX
if(z==null){z=new W.fu(d)
$.dX=z
c=z}else{z.a=d
c=z}}if($.aC==null){z=document
y=z.implementation.createHTMLDocument("")
$.aC=y
$.cM=y.createRange()
y=$.aC
y.toString
y=y.createElement("base")
H.i(y,"$isdB")
y.href=z.baseURI
$.aC.head.appendChild(y)}z=$.aC
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isc5")}z=$.aC
if(!!this.$isc5)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aC.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.O(C.P,a.tagName)){$.cM.selectNodeContents(x)
w=$.cM.createContextualFragment(b)}else{x.innerHTML=b
w=$.aC.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aC.body
if(x==null?z!=null:x!==z)J.dx(x)
c.cB(w)
document.adoptNode(w)
return w},function(a,b,c){return this.aa(a,b,c,null)},"h6",null,null,"giG",5,5,null],
e_:function(a,b,c,d){a.textContent=null
a.appendChild(this.aa(a,b,c,d))},
dZ:function(a,b){return this.e_(a,b,null,null)},
$isT:1,
"%":";Element"},
hk:{"^":"r:14;",
$1:function(a){return!!J.I(H.i(a,"$isC")).$isT}},
a6:{"^":"n;",$isa6:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"n;",
d3:["e2",function(a,b,c,d){H.l(c,{func:1,args:[W.a6]})
if(c!=null)this.er(a,b,c,!1)}],
er:function(a,b,c,d){return a.addEventListener(b,H.bf(H.l(c,{func:1,args:[W.a6]}),1),!1)},
$isa7:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fk|fl|fo|fp"},
bp:{"^":"h0;",$isbp:1,"%":"File"},
m7:{"^":"jW;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bp]},
$asv:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asA:function(){return[W.bp]},
"%":"FileList"},
m8:{"^":"a7;0m:length=","%":"FileWriter"},
m9:{"^":"ac;0m:length=","%":"HTMLFormElement"},
br:{"^":"n;",$isbr:1,"%":"Gamepad"},
ma:{"^":"n;0m:length=","%":"History"},
mb:{"^":"k8;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.C]},
$asv:function(){return[W.C]},
$ise:1,
$ase:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asA:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cd:{"^":"n;0da:data=",$iscd:1,"%":"ImageData"},
e0:{"^":"ac;",$ise0:1,"%":"HTMLImageElement"},
bt:{"^":"d8;",$isbt:1,"%":"KeyboardEvent"},
mf:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
mg:{"^":"n;0m:length=","%":"MediaList"},
mh:{"^":"a7;",
d3:function(a,b,c,d){H.l(c,{func:1,args:[W.a6]})
if(b==="message")a.start()
this.e2(a,b,c,!1)},
"%":"MessagePort"},
mi:{"^":"ke;",
j:function(a,b){return P.aO(a.get(H.G(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aO(y.value[1]))}},
ga_:function(a){var z=H.b([],[P.h])
this.K(a,new W.i2(z))
return z},
gm:function(a){return a.size},
$asa8:function(){return[P.h,null]},
$isa1:1,
$asa1:function(){return[P.h,null]},
"%":"MIDIInputMap"},
i2:{"^":"r:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mj:{"^":"kf;",
j:function(a,b){return P.aO(a.get(H.G(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aO(y.value[1]))}},
ga_:function(a){var z=H.b([],[P.h])
this.K(a,new W.i3(z))
return z},
gm:function(a){return a.size},
$asa8:function(){return[P.h,null]},
$isa1:1,
$asa1:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
i3:{"^":"r:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bu:{"^":"n;",$isbu:1,"%":"MimeType"},
mk:{"^":"kh;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bu]},
$asv:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$isc:1,
$asc:function(){return[W.bu]},
$asA:function(){return[W.bu]},
"%":"MimeTypeArray"},
ap:{"^":"d8;",$isap:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ak:{"^":"cj;a",
gau:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.ey("No elements"))
if(y>1)throw H.d(P.ey("More than one element"))
return z.firstChild},
ah:function(a,b){var z,y,x,w
H.y(b,"$ise",[W.C],"$ase")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gS:function(a){var z=this.a.childNodes
return new W.dZ(z,z.length,-1,[H.bQ(C.S,z,"A",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
$asv:function(){return[W.C]},
$ase:function(){return[W.C]},
$asc:function(){return[W.C]}},
C:{"^":"a7;0cr:previousSibling=",
hJ:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
i:function(a){var z=a.nodeValue
return z==null?this.e3(a):z},
$isC:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
mr:{"^":"n;",
hG:[function(a){return a.previousNode()},"$0","gcr",1,0,16],
"%":"NodeIterator"},
i8:{"^":"kj;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.C]},
$asv:function(){return[W.C]},
$ise:1,
$ase:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asA:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
bw:{"^":"n;0m:length=",$isbw:1,"%":"Plugin"},
mv:{"^":"kn;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bw]},
$asv:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$isc:1,
$asc:function(){return[W.bw]},
$asA:function(){return[W.bw]},
"%":"PluginArray"},
mx:{"^":"kt;",
j:function(a,b){return P.aO(a.get(H.G(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aO(y.value[1]))}},
ga_:function(a){var z=H.b([],[P.h])
this.K(a,new W.iB(z))
return z},
gm:function(a){return a.size},
$asa8:function(){return[P.h,null]},
$isa1:1,
$asa1:function(){return[P.h,null]},
"%":"RTCStatsReport"},
iB:{"^":"r:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mz:{"^":"ac;0m:length=","%":"HTMLSelectElement"},
by:{"^":"a7;",$isby:1,"%":"SourceBuffer"},
mA:{"^":"fl;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.by]},
$asv:function(){return[W.by]},
$ise:1,
$ase:function(){return[W.by]},
$isc:1,
$asc:function(){return[W.by]},
$asA:function(){return[W.by]},
"%":"SourceBufferList"},
bz:{"^":"n;",$isbz:1,"%":"SpeechGrammar"},
mB:{"^":"kz;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bz]},
$asv:function(){return[W.bz]},
$ise:1,
$ase:function(){return[W.bz]},
$isc:1,
$asc:function(){return[W.bz]},
$asA:function(){return[W.bz]},
"%":"SpeechGrammarList"},
bA:{"^":"n;0m:length=",$isbA:1,"%":"SpeechRecognitionResult"},
mD:{"^":"kC;",
j:function(a,b){return a.getItem(H.G(b))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga_:function(a){var z=H.b([],[P.h])
this.K(a,new W.iR(z))
return z},
gm:function(a){return a.length},
$asa8:function(){return[P.h,P.h]},
$isa1:1,
$asa1:function(){return[P.h,P.h]},
"%":"Storage"},
iR:{"^":"r:32;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bC:{"^":"n;",$isbC:1,"%":"CSSStyleSheet|StyleSheet"},
iW:{"^":"ac;",
aa:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
z=W.hj("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ak(y).ah(0,new W.ak(z))
return y},
"%":"HTMLTableElement"},
mF:{"^":"ac;",
aa:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.aa(z.createElement("table"),b,c,d)
z.toString
z=new W.ak(z)
x=z.gau(z)
x.toString
z=new W.ak(x)
w=z.gau(z)
y.toString
w.toString
new W.ak(y).ah(0,new W.ak(w))
return y},
"%":"HTMLTableRowElement"},
mG:{"^":"ac;",
aa:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.aa(z.createElement("table"),b,c,d)
z.toString
z=new W.ak(z)
x=z.gau(z)
y.toString
x.toString
new W.ak(y).ah(0,new W.ak(x))
return y},
"%":"HTMLTableSectionElement"},
eD:{"^":"ac;",$iseD:1,"%":"HTMLTemplateElement"},
bD:{"^":"a7;",$isbD:1,"%":"TextTrack"},
bE:{"^":"a7;",$isbE:1,"%":"TextTrackCue|VTTCue"},
mI:{"^":"kJ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bE]},
$asv:function(){return[W.bE]},
$ise:1,
$ase:function(){return[W.bE]},
$isc:1,
$asc:function(){return[W.bE]},
$asA:function(){return[W.bE]},
"%":"TextTrackCueList"},
mJ:{"^":"fp;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bD]},
$asv:function(){return[W.bD]},
$ise:1,
$ase:function(){return[W.bD]},
$isc:1,
$asc:function(){return[W.bD]},
$asA:function(){return[W.bD]},
"%":"TextTrackList"},
mK:{"^":"n;0m:length=","%":"TimeRanges"},
bF:{"^":"n;",$isbF:1,"%":"Touch"},
b8:{"^":"d8;",$isb8:1,"%":"TouchEvent"},
mL:{"^":"kP;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bF]},
$asv:function(){return[W.bF]},
$ise:1,
$ase:function(){return[W.bF]},
$isc:1,
$asc:function(){return[W.bF]},
$asA:function(){return[W.bF]},
"%":"TouchList"},
mM:{"^":"n;0m:length=","%":"TrackDefaultList"},
mO:{"^":"n;",
hG:[function(a){return a.previousNode()},"$0","gcr",1,0,16],
"%":"TreeWalker"},
d8:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mR:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
mS:{"^":"a7;0m:length=","%":"VideoTrackList"},
bI:{"^":"ap;",
gh9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.ai("deltaY is not supported"))},
gh8:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.ai("deltaX is not supported"))},
$isbI:1,
"%":"WheelEvent"},
jD:{"^":"a7;",
fe:function(a,b){return a.requestAnimationFrame(H.bf(H.l(b,{func:1,ret:-1,args:[P.a_]}),1))},
eE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
f9:{"^":"C;",$isf9:1,"%":"Attr"},
mX:{"^":"kW;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bm]},
$asv:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asA:function(){return[W.bm]},
"%":"CSSRuleList"},
mY:{"^":"hg;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bP(b,"$isab",[P.a_],"$asab")
if(!z)return!1
z=J.bh(b)
return a.left===z.gaL(b)&&a.top===z.gb1(b)&&a.width===z.gam(b)&&a.height===z.gak(b)},
gV:function(a){return W.fe(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gak:function(a){return a.height},
gam:function(a){return a.width},
"%":"ClientRect|DOMRect"},
n_:{"^":"kY;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.br]},
$asv:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$asA:function(){return[W.br]},
"%":"GamepadList"},
n2:{"^":"l_;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.C]},
$asv:function(){return[W.C]},
$ise:1,
$ase:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asA:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n3:{"^":"l1;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bA]},
$asv:function(){return[W.bA]},
$ise:1,
$ase:function(){return[W.bA]},
$isc:1,
$asc:function(){return[W.bA]},
$asA:function(){return[W.bA]},
"%":"SpeechRecognitionResultList"},
n4:{"^":"l3;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bC]},
$asv:function(){return[W.bC]},
$ise:1,
$ase:function(){return[W.bC]},
$isc:1,
$asc:function(){return[W.bC]},
$asA:function(){return[W.bC]},
"%":"StyleSheetList"},
jJ:{"^":"ec;cS:a<",
K:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.ga_(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga_:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.i(z[w],"$isf9")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asa8:function(){return[P.h,P.h]},
$asa1:function(){return[P.h,P.h]}},
jR:{"^":"jJ;a",
j:function(a,b){return this.a.getAttribute(H.G(b))},
gm:function(a){return this.ga_(this).length}},
jS:{"^":"d2;a,b,c,$ti",
hp:function(a,b,c,d){var z=H.B(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.Z(this.a,this.b,a,!1,z)}},
mZ:{"^":"jS;a,b,c,$ti"},
jT:{"^":"ez;a,b,c,d,e,$ti",
fz:function(){var z=this.d
if(z!=null&&this.a<=0)J.fQ(this.b,this.c,z,!1)},
q:{
Z:function(a,b,c,d,e){var z=c==null?null:W.fz(new W.jU(c),W.a6)
z=new W.jT(0,a,b,z,!1,[e])
z.fz()
return z}}},
jU:{"^":"r:7;a",
$1:function(a){return this.a.$1(H.i(a,"$isa6"))}},
c_:{"^":"a;a",
ej:function(a){var z,y
z=$.$get$df()
if(z.a===0){for(y=0;y<262;++y)z.R(0,C.O[y],W.lq())
for(y=0;y<12;++y)z.R(0,C.n[y],W.lr())}},
aE:function(a){return $.$get$fd().O(0,W.bo(a))},
ar:function(a,b,c){var z,y,x
z=W.bo(a)
y=$.$get$df()
x=y.j(0,H.j(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dk(x.$4(a,b,c,this))},
$isay:1,
q:{
fc:function(a){var z,y
z=W.dy(null)
y=window.location
z=new W.c_(new W.ku(z,y))
z.ej(a)
return z},
n0:[function(a,b,c,d){H.i(a,"$isT")
H.G(b)
H.G(c)
H.i(d,"$isc_")
return!0},"$4","lq",16,0,15],
n1:[function(a,b,c,d){var z,y,x,w,v
H.i(a,"$isT")
H.G(b)
H.G(c)
z=H.i(d,"$isc_").a
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
return z},"$4","lr",16,0,15]}},
A:{"^":"a;$ti",
gS:function(a){return new W.dZ(a,this.gm(a),-1,[H.bQ(this,a,"A",0)])}},
eh:{"^":"a;a",
aE:function(a){return C.a.d5(this.a,new W.ia(a))},
ar:function(a,b,c){return C.a.d5(this.a,new W.i9(a,b,c))},
$isay:1},
ia:{"^":"r:19;a",
$1:function(a){return H.i(a,"$isay").aE(this.a)}},
i9:{"^":"r:19;a,b,c",
$1:function(a){return H.i(a,"$isay").ar(this.a,this.b,this.c)}},
kv:{"^":"a;",
em:function(a,b,c,d){var z,y,x
this.a.ah(0,c)
z=b.cu(0,new W.kw())
y=b.cu(0,new W.kx())
this.b.ah(0,z)
x=this.c
x.ah(0,C.Q)
x.ah(0,y)},
aE:function(a){return this.a.O(0,W.bo(a))},
ar:["e8",function(a,b,c){var z,y
z=W.bo(a)
y=this.c
if(y.O(0,H.j(z)+"::"+b))return this.d.fX(c)
else if(y.O(0,"*::"+b))return this.d.fX(c)
else{y=this.b
if(y.O(0,H.j(z)+"::"+b))return!0
else if(y.O(0,"*::"+b))return!0
else if(y.O(0,H.j(z)+"::*"))return!0
else if(y.O(0,"*::*"))return!0}return!1}],
$isay:1},
kw:{"^":"r:20;",
$1:function(a){return!C.a.O(C.n,H.G(a))}},
kx:{"^":"r:20;",
$1:function(a){return C.a.O(C.n,H.G(a))}},
kG:{"^":"kv;e,a,b,c,d",
ar:function(a,b,c){if(this.e8(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.O(0,b)
return!1},
q:{
fn:function(){var z,y,x,w,v
z=P.h
y=P.ea(C.m,z)
x=H.B(C.m,0)
w=H.l(new W.kH(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.kG(y,P.bW(null,null,null,z),P.bW(null,null,null,z),P.bW(null,null,null,z),null)
y.em(null,new H.hT(C.m,w,[x,z]),v,null)
return y}}},
kH:{"^":"r:38;",
$1:function(a){return"TEMPLATE::"+H.j(H.G(a))}},
kF:{"^":"a;",
aE:function(a){var z=J.I(a)
if(!!z.$ises)return!1
z=!!z.$isd4
if(z&&W.bo(a)==="foreignObject")return!1
if(z)return!0
return!1},
ar:function(a,b,c){if(b==="is"||C.h.bz(b,"on"))return!1
return this.aE(a)},
$isay:1},
dZ:{"^":"a;a,b,c,0d,$ti",
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fP(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gJ:function(a){return this.d}},
ay:{"^":"a;"},
ku:{"^":"a;a,b",$ismQ:1},
fu:{"^":"a;a",
cB:function(a){new W.kT(this).$2(a,null)},
aT:function(a,b){if(b==null)J.dx(a)
else b.removeChild(a)},
fk:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fS(a)
x=y.gcS().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ae(t)}v="element unprintable"
try{v=J.a4(a)}catch(t){H.ae(t)}try{u=W.bo(a)
this.fj(H.i(a,"$isT"),b,z,v,u,H.i(y,"$isa1"),H.G(x))}catch(t){if(H.ae(t) instanceof P.as)throw t
else{this.aT(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
fj:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aT(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aE(a)){this.aT(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.ar(a,"is",g)){this.aT(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga_(f)
y=H.b(z.slice(0),[H.B(z,0)])
for(x=f.ga_(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.k(y,x)
w=y[x]
if(!this.a.ar(a,J.fW(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.j(e)+" "+w+'="'+H.j(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.I(a).$iseD)this.cB(a.content)},
$isms:1},
kT:{"^":"r:34;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.fk(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aT(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fT(z)}catch(w){H.ae(w)
v=H.i(z,"$isC")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isC")}}},
jM:{"^":"n+h9;"},
jN:{"^":"n+v;"},
jO:{"^":"jN+A;"},
jP:{"^":"n+v;"},
jQ:{"^":"jP+A;"},
jV:{"^":"n+v;"},
jW:{"^":"jV+A;"},
k7:{"^":"n+v;"},
k8:{"^":"k7+A;"},
ke:{"^":"n+a8;"},
kf:{"^":"n+a8;"},
kg:{"^":"n+v;"},
kh:{"^":"kg+A;"},
ki:{"^":"n+v;"},
kj:{"^":"ki+A;"},
km:{"^":"n+v;"},
kn:{"^":"km+A;"},
kt:{"^":"n+a8;"},
fk:{"^":"a7+v;"},
fl:{"^":"fk+A;"},
ky:{"^":"n+v;"},
kz:{"^":"ky+A;"},
kC:{"^":"n+a8;"},
kI:{"^":"n+v;"},
kJ:{"^":"kI+A;"},
fo:{"^":"a7+v;"},
fp:{"^":"fo+A;"},
kO:{"^":"n+v;"},
kP:{"^":"kO+A;"},
kV:{"^":"n+v;"},
kW:{"^":"kV+A;"},
kX:{"^":"n+v;"},
kY:{"^":"kX+A;"},
kZ:{"^":"n+v;"},
l_:{"^":"kZ+A;"},
l0:{"^":"n+v;"},
l1:{"^":"l0+A;"},
l2:{"^":"n+v;"},
l3:{"^":"l2+A;"}}],["","",,P,{"^":"",
lk:function(a){var z,y
z=J.I(a)
if(!!z.$iscd){y=z.gda(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fr(a.data,a.height,a.width)},
lj:function(a){if(a instanceof P.fr)return{data:a.a,height:a.b,width:a.c}
return a},
aO:function(a){var z,y,x,w,v
if(a==null)return
z=P.e9(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.G(y[w])
z.R(0,v,a[v])}return z},
lh:function(a,b){var z={}
a.K(0,new P.li(z))
return z},
dU:function(){var z=$.dT
if(z==null){z=J.cC(window.navigator.userAgent,"Opera",0)
$.dT=z}return z},
hf:function(){var z,y
z=$.dQ
if(z!=null)return z
y=$.dR
if(y==null){y=J.cC(window.navigator.userAgent,"Firefox",0)
$.dR=y}if(y)z="-moz-"
else{y=$.dS
if(y==null){y=!P.dU()&&J.cC(window.navigator.userAgent,"Trident/",0)
$.dS=y}if(y)z="-ms-"
else z=P.dU()?"-o-":"-webkit-"}$.dQ=z
return z},
fr:{"^":"a;da:a>,b,c",$iscd:1},
li:{"^":"r:12;a",
$2:function(a,b){this.a[a]=b}},
hr:{"^":"cj;a,b",
gbN:function(){var z,y,x
z=this.b
y=H.al(z,"v",0)
x=W.T
return new H.hR(new H.dd(z,H.l(new P.hs(),{func:1,ret:P.O,args:[y]}),[y]),H.l(new P.ht(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.b0(this.gbN().a)},
j:function(a,b){var z=this.gbN()
return z.b.$1(J.cD(z.a,b))},
gS:function(a){var z=P.hO(this.gbN(),!1,W.T)
return new J.at(z,z.length,0,[H.B(z,0)])},
$asv:function(){return[W.T]},
$ase:function(){return[W.T]},
$asc:function(){return[W.T]}},
hs:{"^":"r:14;",
$1:function(a){return!!J.I(H.i(a,"$isC")).$isT}},
ht:{"^":"r:33;",
$1:function(a){return H.f(H.i(a,"$isC"),"$isT")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cs:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ko:{"^":"a;$ti",
gb_:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.D(z+this.c,H.B(this,0))},
gc3:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.D(z+this.d,H.B(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bP(b,"$isab",[P.a_],"$asab")
if(!z)return!1
z=this.a
y=J.bh(b)
x=y.gaL(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb1(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.B(this,0)
if(H.D(z+this.c,w)===y.gb_(b)){if(typeof x!=="number")return x.D()
z=H.D(x+this.d,w)===y.gc3(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.aZ(z)
x=this.b
w=J.aZ(x)
if(typeof z!=="number")return z.D()
v=H.B(this,0)
z=H.D(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.D(x+this.d,v)
return P.k9(P.cs(P.cs(P.cs(P.cs(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ab:{"^":"ko;aL:a>,b1:b>,am:c>,ak:d>,$ti",q:{
is:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a7()
if(c<0)z=-c*0
else z=c
H.D(z,e)
if(typeof d!=="number")return d.a7()
if(d<0)y=-d*0
else y=d
return new P.ab(a,b,z,H.D(y,e),[e])}}}}],["","",,P,{"^":"",bV:{"^":"n;",$isbV:1,"%":"SVGLength"},me:{"^":"kb;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asv:function(){return[P.bV]},
$ise:1,
$ase:function(){return[P.bV]},
$isc:1,
$asc:function(){return[P.bV]},
$asA:function(){return[P.bV]},
"%":"SVGLengthList"},bY:{"^":"n;",$isbY:1,"%":"SVGNumber"},mt:{"^":"kl;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asv:function(){return[P.bY]},
$ise:1,
$ase:function(){return[P.bY]},
$isc:1,
$asc:function(){return[P.bY]},
$asA:function(){return[P.bY]},
"%":"SVGNumberList"},mw:{"^":"n;0m:length=","%":"SVGPointList"},es:{"^":"d4;",$ises:1,"%":"SVGScriptElement"},mE:{"^":"kE;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asv:function(){return[P.h]},
$ise:1,
$ase:function(){return[P.h]},
$isc:1,
$asc:function(){return[P.h]},
$asA:function(){return[P.h]},
"%":"SVGStringList"},d4:{"^":"T;",
gd7:function(a){return new P.hr(a,new W.ak(a))},
aa:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.ay])
C.a.h(z,W.fc(null))
C.a.h(z,W.fn())
C.a.h(z,new W.kF())
c=new W.fu(new W.eh(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).h6(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ak(w)
u=z.gau(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$isd4:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bZ:{"^":"n;",$isbZ:1,"%":"SVGTransform"},mN:{"^":"kR;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asv:function(){return[P.bZ]},
$ise:1,
$ase:function(){return[P.bZ]},
$isc:1,
$asc:function(){return[P.bZ]},
$asA:function(){return[P.bZ]},
"%":"SVGTransformList"},ka:{"^":"n+v;"},kb:{"^":"ka+A;"},kk:{"^":"n+v;"},kl:{"^":"kk+A;"},kD:{"^":"n+v;"},kE:{"^":"kD+A;"},kQ:{"^":"n+v;"},kR:{"^":"kQ+A;"}}],["","",,P,{"^":"",lS:{"^":"n;0m:length=","%":"AudioBuffer"},lT:{"^":"jK;",
j:function(a,b){return P.aO(a.get(H.G(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aO(y.value[1]))}},
ga_:function(a){var z=H.b([],[P.h])
this.K(a,new P.fZ(z))
return z},
gm:function(a){return a.size},
$asa8:function(){return[P.h,null]},
$isa1:1,
$asa1:function(){return[P.h,null]},
"%":"AudioParamMap"},fZ:{"^":"r:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},lU:{"^":"a7;0m:length=","%":"AudioTrackList"},h_:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mu:{"^":"h_;0m:length=","%":"OfflineAudioContext"},jK:{"^":"n+a8;"}}],["","",,P,{"^":"",d0:{"^":"n;",
hU:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$iscd)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.lj(g))
return}if(!!z.$ise0)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.fX("Incorrect number or type of arguments"))},
hT:function(a,b,c,d,e,f,g){return this.hU(a,b,c,d,e,f,g,null,null,null)},
$isd0:1,
"%":"WebGLRenderingContext"},iX:{"^":"n;",$isiX:1,"%":"WebGLTexture"},jh:{"^":"n;",$isjh:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mC:{"^":"kB;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Q(b,a,null,null,null))
return P.aO(a.item(b))},
C:function(a,b){return this.j(a,b)},
$asv:function(){return[[P.a1,,,]]},
$ise:1,
$ase:function(){return[[P.a1,,,]]},
$isc:1,
$asc:function(){return[[P.a1,,,]]},
$asA:function(){return[[P.a1,,,]]},
"%":"SQLResultSetRowList"},kA:{"^":"n+v;"},kB:{"^":"kA+A;"}}],["","",,O,{"^":"",aB:{"^":"a;0a,0b,0c,0d,$ti",
bD:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cC:function(a,b,c){var z=H.al(this,"aB",0)
H.l(b,{func:1,ret:P.O,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.F,[P.e,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
b4:function(a,b){return this.cC(a,null,b)},
f6:function(a){var z
H.y(a,"$ise",[H.al(this,"aB",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ef:function(a,b){var z
H.y(b,"$ise",[H.al(this,"aB",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gS:function(a){var z=this.a
return new J.at(z,z.length,0,[H.B(z,0)])},
C:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.al(this,"aB",0)
H.D(b,z)
z=[z]
if(this.f6(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ef(x,H.b([b],z))}},
$ise:1,
q:{
cK:function(a){var z=new O.aB([a])
z.bD(a)
return z}}},cW:{"^":"a;0a,0b",
gm:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.J()
this.b=z}return z},
eg:function(a){var z=this.b
if(!(z==null))z.w(a)},
av:function(){return this.eg(null)},
gU:function(a){var z=this.a
if(z.length>0)return C.a.gbt(z)
else return V.bX()},
dL:function(a){var z=this.a
if(a==null)C.a.h(z,V.bX())
else C.a.h(z,a)
this.av()},
cq:function(){var z=this.a
if(z.length>0){z.pop()
this.av()}}}}],["","",,E,{"^":"",cE:{"^":"a;"},aR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Y:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scD:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gu().T(0,this.gdI())
y=this.c
if(y!=null)y.gu().h(0,this.gdI())
x=new D.M("shape",z,this.c,this,[F.eu])
x.b=!0
this.ac(x)}},
saW:function(a){var z,y
if(!J.V(this.r,a)){z=this.r
if(z!=null)z.gu().T(0,this.gdH())
if(a!=null)a.gu().h(0,this.gdH())
this.r=a
y=new D.M("mover",z,a,this,[U.a9])
y.b=!0
this.ac(y)}},
al:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aO(0,b,this):null
if(!J.V(y,this.x)){x=this.x
this.x=y
w=new D.M("matrix",x,y,this,[V.av])
w.b=!0
this.ac(w)}for(z=this.y.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.A();)z.d.al(0,b)},
aN:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gU(z))
else C.a.h(z.a,y.n(0,z.gU(z)))
z.av()
a.dM(this.f)
z=a.dy
x=(z&&C.a).gbt(z)
if(x!=null&&this.d!=null)x.hL(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.A();)z.d.aN(a)
a.dK()
a.dx.cq()},
gu:function(){var z=this.z
if(z==null){z=D.J()
this.z=z}return z},
ac:function(a){var z=this.z
if(!(z==null))z.w(a)},
a0:function(){return this.ac(null)},
hx:[function(a){H.i(a,"$isw")
this.e=null
this.ac(a)},function(){return this.hx(null)},"iN","$1","$0","gdI",0,2,0],
hw:[function(a){this.ac(H.i(a,"$isw"))},function(){return this.hw(null)},"iM","$1","$0","gdH",0,2,0],
hu:[function(a){this.ac(H.i(a,"$isw"))},function(){return this.hu(null)},"iK","$1","$0","gdG",0,2,0],
iJ:[function(a,b){var z,y,x,w,v,u,t,s
H.y(b,"$ise",[E.aR],"$ase")
for(z=b.length,y=this.gdG(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.b2()
t.d=0
u.sY(t)}t=u.gY()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a0()},"$2","ght",8,0,8],
iL:[function(a,b){var z,y,x,w,v
H.y(b,"$ise",[E.aR],"$ase")
for(z=b.length,y=this.gdG(),x=0;x<b.length;b.length===z||(0,H.x)(b),++x){w=b[x]
if(w!=null){if(w.gY()==null){v=new D.b2()
v.d=0
w.sY(v)}w.gY().T(0,y)}}this.a0()},"$2","ghv",8,0,8],
$isaE:1},iw:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eb:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.an(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cW()
y=[V.av]
z.a=H.b([],y)
z.gu().h(0,new E.iy(this))
this.cy=z
z=new O.cW()
z.a=H.b([],y)
z.gu().h(0,new E.iz(this))
this.db=z
z=new O.cW()
z.a=H.b([],y)
z.gu().h(0,new E.iA(this))
this.dx=z
z=H.b([],[O.d5])
this.dy=z
C.a.h(z,null)
this.fr=new H.b4(0,0,[P.h,A.et])},
ghH:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gU(z)
y=this.db
y=z.n(0,y.gU(y))
this.z=y
z=y}return z},
dM:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbt(z):a;(z&&C.a).h(z,y)},
dK:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
ix:function(a,b){var z=new E.iw(a,b)
z.eb(a,b)
return z}}},iy:{"^":"r:9;a",
$1:function(a){var z
H.i(a,"$isw")
z=this.a
z.z=null
z.ch=null}},iz:{"^":"r:9;a",
$1:function(a){var z
H.i(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iA:{"^":"r:9;a",
$1:function(a){var z
H.i(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},j2:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0Y:x@,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.x
if(z==null){z=D.J()
this.x=z}return z},
ei:[function(a){var z
H.i(a,"$isw")
z=this.x
if(!(z==null))z.w(a)
this.hN()},function(){return this.ei(null)},"eh","$1","$0","gcG",0,2,0],
ghh:function(){var z,y,x
z=Date.now()
y=C.f.Z(P.dV(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.an(z,!1)
return x/y},
cX:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.o(z)
x=C.i.cj(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.n()
w=C.i.cj(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eG(C.l,this.ghM())},
hN:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.j4(this),{func:1,ret:-1,args:[P.a_]})
C.y.eE(z)
C.y.fe(z,W.fz(y,P.a_))}},"$0","ghM",0,0,3],
hK:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cX()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.dV(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.av()
w=x.db
C.a.sm(w.a,0)
w.av()
w=x.dx
C.a.sm(w.a,0)
w.av()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aN(this.e)}x=this.z
if(!(x==null))x.w(null)}catch(v){z=H.ae(v)
y=H.bi(v)
P.dv("Error: "+H.j(z))
P.dv("Stack: "+H.j(y))
throw H.d(z)}},
q:{
j3:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscH)return E.eF(a,!0,!0,!0,!1)
y=W.cI(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd7(a).h(0,y)
w=E.eF(y,!0,!0,!0,!1)
w.a=a
return w},
eF:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.j2()
y=P.hM(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.k.by(a,"webgl",y)
x=H.i(x==null?C.k.by(a,"experimental-webgl",y):x,"$isd0")
if(x==null)H.q(P.p("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ix(x,a)
w=new T.iY(x)
w.b=H.a2(x.getParameter(3379))
w.c=H.a2(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jn(a)
v=new X.hI()
v.c=new X.ax(!1,!1,!1)
v.d=P.bW(null,null,null,P.F)
w.b=v
v=new X.i4(w)
v.f=0
v.r=new V.W(0,0)
v.x=new V.W(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hP(w)
v.r=0
v.x=new V.W(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.j7(w)
v.e=0
v.f=new V.W(0,0)
v.r=new V.W(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.ez,P.a]])
w.z=v
u=document
t=W.ap
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Z(u,"contextmenu",H.l(w.geU(),s),!1,t))
v=w.z
r=W.a6
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Z(a,"focus",H.l(w.geX(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Z(a,"blur",H.l(w.geR(),q),!1,r))
v=w.z
p=W.bt
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Z(u,"keyup",H.l(w.geZ(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Z(u,"keydown",H.l(w.geY(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousedown",H.l(w.gf1(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mouseup",H.l(w.gf3(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousemove",H.l(w.gf2(),s),!1,t))
p=w.z
o=W.bI;(p&&C.a).h(p,W.Z(a,H.G(W.hl(a)),H.l(w.gf4(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Z(u,"mousemove",H.l(w.geV(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Z(u,"mouseup",H.l(w.geW(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Z(u,"pointerlockchange",H.l(w.gf5(),q),!1,r))
r=w.z
q=W.b8
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Z(a,"touchstart",H.l(w.gfc(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchend",H.l(w.gfa(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchmove",H.l(w.gfb(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.an(Date.now(),!1)
z.cy=0
z.cX()
return z}}},j4:{"^":"r:30;a",
$1:function(a){var z
H.lF(a)
z=this.a
if(z.ch){z.ch=!1
z.hK()}}}}],["","",,Z,{"^":"",f7:{"^":"a;a,b",q:{
dc:function(a,b,c){var z
H.y(c,"$isc",[P.F],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bL(c)),35044)
a.bindBuffer(b,null)
return new Z.f7(b,z)}}},dE:{"^":"cE;a,b,c,d,e",
c1:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ae(y)
x=P.p('Failed to bind buffer attribute "'+J.a4(this.a)+'": '+H.j(z))
throw H.d(x)}},
i:function(a){return"["+J.a4(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},jB:{"^":"a;a",$islV:1},dF:{"^":"a;a,0b,c,d",
aK:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
c1:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].c1(a)},
i0:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aN:function(a){var z,y,x,w,v
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
z=[P.h]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a4(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$ismH:1},ce:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b6(this.c)+"'")+"]"}},ba:{"^":"a;a",
gcE:function(a){var z,y
z=this.a
y=(z&$.$get$aK().a)!==0?3:0
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$aL().a)!==0)y+=2
if((z&$.$get$aM().a)!==0)y+=3
if((z&$.$get$bG().a)!==0)y+=3
if((z&$.$get$bH().a)!==0)y+=4
if((z&$.$get$bb().a)!==0)++y
return(z&$.$get$aH().a)!==0?y+4:y},
fY:function(a){var z,y,x
z=$.$get$aK()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bb()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f6()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ba))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.h])
y=this.a
if((y&$.$get$aK().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aM().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bG().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bH().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bb().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
q:{
aj:function(a){return new Z.ba(a)}}}}],["","",,D,{"^":"",dJ:{"^":"a;"},b2:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.w]}
H.l(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
T:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.w]})
z=this.a
z=z==null?null:C.a.O(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).T(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.O(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).T(z,b)||y}return y},
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.K(y,new D.hp(z))
y=this.b
if(!(y==null))C.a.K(y,new D.hq(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
hb:function(){return this.w(null)},
hO:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.w(y)}}},
at:function(a){return this.hO(a,!0,!1)},
q:{
J:function(){var z=new D.b2()
z.d=0
return z}}},hp:{"^":"r:26;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},hq:{"^":"r:26;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"a;a,0b"},cf:{"^":"w;c,d,a,0b,$ti"},cg:{"^":"w;c,d,a,0b,$ti"},M:{"^":"w;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dG:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dG))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
q:{"^":"lW<"}},e5:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e5))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},e6:{"^":"w;c,a,0b"},hI:{"^":"a;0a,0b,0c,0d",
hD:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.e6(a,this)
y.b=!0
return z.w(y)},
hz:function(a){var z,y
this.c=a.b
this.d.T(0,a.a)
z=this.b
if(z==null)return!1
y=new X.e6(a,this)
y.b=!0
return z.w(y)}},eb:{"^":"cl;x,y,c,d,e,a,0b"},hP:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ap:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.n()
v=b.b
u=this.ch
if(typeof v!=="number")return v.n()
t=new V.W(y.a+x*w,y.b+v*u)
u=this.a.gaG()
s=new X.bv(a,new V.W(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cp:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.ap(a,b))
return!0},
aY:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dY()
if(typeof z!=="number")return z.dS()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.ap(a,b))
return!0},
aX:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.ap(a,b))
return!0},
hE:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaG()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.n()
t=a.b
s=this.cy
if(typeof t!=="number")return t.n()
w=new X.cX(new V.U(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.w(w)
return!0},
f0:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.eb(c,a,this.a.gaG(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.W(0,0)}},ax:{"^":"a;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ax))return!1
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
return z+(this.c?"Shift+":"")}},bv:{"^":"cl;x,y,z,Q,ch,c,d,e,a,0b"},i4:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bK:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaG()
x=new X.bv(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cp:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bK(a,b,!0))
return!0},
aY:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dY()
if(typeof z!=="number")return z.dS()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bK(a,b,!0))
return!0},
aX:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bK(a,b,!1))
return!0},
hF:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaG()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.n()
u=a.b
t=this.ch
if(typeof u!=="number")return u.n()
x=new X.cX(new V.U(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.w(x)
return!0},
gdc:function(){var z=this.b
if(z==null){z=D.J()
this.b=z}return z},
gbx:function(){var z=this.c
if(z==null){z=D.J()
this.c=z}return z},
gdF:function(){var z=this.d
if(z==null){z=D.J()
this.d=z}return z}},cX:{"^":"cl;x,c,d,e,a,0b"},cl:{"^":"w;"},eK:{"^":"cl;x,y,z,Q,ch,c,d,e,a,0b"},j7:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ap:function(a,b){var z,y,x,w
H.y(a,"$isc",[V.W],"$asc")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:new V.W(0,0)
x=this.a.gaG()
w=new X.eK(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hC:function(a){var z
H.y(a,"$isc",[V.W],"$asc")
z=this.b
if(z==null)return!1
z.w(this.ap(a,!0))
return!0},
hA:function(a){var z
H.y(a,"$isc",[V.W],"$asc")
z=this.c
if(z==null)return!1
z.w(this.ap(a,!0))
return!0},
hB:function(a){var z
H.y(a,"$isc",[V.W],"$asc")
z=this.d
if(z==null)return!1
z.w(this.ap(a,!1))
return!0}},jn:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaG:function(){var z=this.a
return V.er(0,0,(z&&C.k).gd8(z).c,C.k.gd8(z).d)},
cQ:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.e5(z,new X.ax(y,a.altKey,a.shiftKey))},
aD:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ax(y,a.altKey,a.shiftKey)},
bY:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ax(y,a.altKey,a.shiftKey)},
aq:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.W(y-w,x-v)},
aS:function(a){return new V.U(a.movementX,a.movementY)},
bU:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.W])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.i.ad(u.pageX)
C.i.ad(u.pageY)
s=z.left
C.i.ad(u.pageX)
C.a.h(y,new V.W(t-s,C.i.ad(u.pageY)-z.top))}return y},
an:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dG(z,new X.ax(y,a.altKey,a.shiftKey))},
bO:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.G()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
il:[function(a){this.f=!0},"$1","geX",4,0,7],
ie:[function(a){this.f=!1},"$1","geR",4,0,7],
ii:[function(a){H.i(a,"$isap")
if(this.f&&this.bO(a))a.preventDefault()},"$1","geU",4,0,4],
io:[function(a){var z
H.i(a,"$isbt")
if(!this.f)return
z=this.cQ(a)
if(this.b.hD(z))a.preventDefault()},"$1","geZ",4,0,27],
im:[function(a){var z
H.i(a,"$isbt")
if(!this.f)return
z=this.cQ(a)
if(this.b.hz(z))a.preventDefault()},"$1","geY",4,0,27],
iq:[function(a){var z,y,x,w
H.i(a,"$isap")
z=this.a
z.focus()
this.f=!0
this.aD(a)
if(this.x){y=this.an(a)
x=this.aS(a)
if(this.d.cp(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.an(a)
w=this.aq(a)
if(this.c.cp(y,w))a.preventDefault()},"$1","gf1",4,0,4],
is:[function(a){var z,y,x
H.i(a,"$isap")
this.aD(a)
z=this.an(a)
if(this.x){y=this.aS(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aY(z,x))a.preventDefault()},"$1","gf3",4,0,4],
ik:[function(a){var z,y,x
H.i(a,"$isap")
if(!this.bO(a)){this.aD(a)
z=this.an(a)
if(this.x){y=this.aS(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aY(z,x))a.preventDefault()}},"$1","geW",4,0,4],
ir:[function(a){var z,y,x
H.i(a,"$isap")
this.aD(a)
z=this.an(a)
if(this.x){y=this.aS(a)
if(this.d.aX(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aX(z,x))a.preventDefault()},"$1","gf2",4,0,4],
ij:[function(a){var z,y,x
H.i(a,"$isap")
if(!this.bO(a)){this.aD(a)
z=this.an(a)
if(this.x){y=this.aS(a)
if(this.d.aX(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aX(z,x))a.preventDefault()}},"$1","geV",4,0,4],
it:[function(a){var z,y
H.i(a,"$isbI")
this.aD(a)
z=new V.U((a&&C.x).gh8(a),C.x.gh9(a)).B(0,180)
if(this.x){if(this.d.hE(z))a.preventDefault()
return}if(this.r)return
y=this.aq(a)
if(this.c.hF(z,y))a.preventDefault()},"$1","gf4",4,0,37],
iu:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.an(this.y)
v=this.aq(this.y)
this.d.f0(w,v,x)}},"$1","gf5",4,0,7],
iA:[function(a){var z
H.i(a,"$isb8")
this.a.focus()
this.f=!0
this.bY(a)
z=this.bU(a)
if(this.e.hC(z))a.preventDefault()},"$1","gfc",4,0,11],
iy:[function(a){var z
H.i(a,"$isb8")
this.bY(a)
z=this.bU(a)
if(this.e.hA(z))a.preventDefault()},"$1","gfa",4,0,11],
iz:[function(a){var z
H.i(a,"$isb8")
this.bY(a)
z=this.bU(a)
if(this.e.hB(z))a.preventDefault()},"$1","gfb",4,0,11]}}],["","",,D,{"^":"",ca:{"^":"a;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.J()
this.d=z}return z},
aw:[function(a){var z
H.i(a,"$isw")
z=this.d
if(!(z==null))z.w(a)},function(){return this.aw(null)},"i1","$1","$0","gel",0,2,0],
$isY:1,
$isaE:1},Y:{"^":"a;",$isaE:1},hJ:{"^":"aB;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.J()
this.Q=z}return z},
aw:function(a){var z=this.Q
if(!(z==null))z.w(a)},
f_:[function(a){var z
H.i(a,"$isw")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.f_(null)},"ip","$1","$0","gcU",0,2,0],
iv:[function(a){var z,y,x
H.y(a,"$ise",[D.Y],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.ek(x))return!1}return!0},"$1","gf7",4,0,31],
ia:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.Y
H.y(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcU(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.i(b[u],"$isY")
if(t instanceof D.ca)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b2()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cf(a,b,this,[z])
z.b=!0
this.aw(z)},"$2","geO",8,0,24],
ix:[function(a,b){var z,y,x,w,v,u
z=D.Y
H.y(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcU(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=H.i(b[w],"$isY")
if(v instanceof D.ca)C.a.T(this.e,v)
u=v.d
if(u==null){u=new D.b2()
u.d=0
v.d=u}u.T(0,x)}z=new D.cg(a,b,this,[z])
z.b=!0
this.aw(z)},"$2","gf9",8,0,24],
ek:function(a){var z=C.a.O(this.e,a)
return z},
$ase:function(){return[D.Y]},
$asaB:function(){return[D.Y]}},ih:{"^":"a;",$isY:1,$isaE:1},iP:{"^":"a;",$isY:1,$isaE:1},j_:{"^":"a;",$isY:1,$isaE:1},j0:{"^":"a;",$isY:1,$isaE:1},j1:{"^":"a;",$isY:1,$isaE:1}}],["","",,V,{"^":"",
lY:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","i1",8,0,29],
lO:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.dX(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.h.a5("null",c)
return C.h.a5(C.i.dQ($.m.$2(a,0)?0:a,b),c+b+1)},
bg:function(a,b,c){var z,y,x,w,v,u
H.y(a,"$isc",[P.z],"$asc")
z=H.b([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.k(z,u)
C.a.R(z,u,C.h.a5(z[u],x))}return z},
du:function(a,b){return C.i.hX(Math.pow(b,C.F.cj(Math.log(H.lg(a))/Math.log(b))))},
a3:{"^":"a;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
c7:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c7))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
ef:{"^":"a;a,b,c,d,e,f,r,x,y",
a6:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ef))return!1
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
z=[P.z]
y=V.bg(H.b([this.a,this.d,this.r],z),3,0)
x=V.bg(H.b([this.b,this.e,this.x],z),3,0)
w=V.bg(H.b([this.c,this.f,this.y],z),3,0)
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
av:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a6:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return z},
dD:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.n()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.n()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.n()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.n()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.n()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.n()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.bX()
a3=1/a2
a4=-w
a5=-i
return V.aw((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
n:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.n()
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
return V.aw(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ct:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.n()
x=this.b
w=a.b
if(typeof x!=="number")return x.n()
v=this.c
u=a.c
if(typeof v!=="number")return v.n()
t=this.e
if(typeof t!=="number")return t.n()
s=this.f
if(typeof s!=="number")return s.n()
r=this.r
if(typeof r!=="number")return r.n()
q=this.y
if(typeof q!=="number")return q.n()
p=this.z
if(typeof p!=="number")return p.n()
o=this.Q
if(typeof o!=="number")return o.n()
return new V.N(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.n()
x=this.b
w=a.b
if(typeof x!=="number")return x.n()
v=this.c
u=a.c
if(typeof v!=="number")return v.n()
t=this.d
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.n()
r=this.f
if(typeof r!=="number")return r.n()
q=this.r
if(typeof q!=="number")return q.n()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.n()
n=this.z
if(typeof n!=="number")return n.n()
m=this.Q
if(typeof m!=="number")return m.n()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.aF(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
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
i:function(a){return this.H()},
dC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.z]
y=V.bg(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bg(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bg(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bg(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
v:function(a){return this.dC(a,3,0)},
H:function(){return this.dC("",3,0)},
q:{
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bX:function(){return V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eg:function(a,b,c){var z,y,x,w,v
z=c.B(0,Math.sqrt(c.E(c)))
y=b.aV(z)
x=y.B(0,Math.sqrt(y.E(y)))
w=z.aV(x)
v=new V.N(a.a,a.b,a.c)
return V.aw(x.a,w.a,z.a,x.L(0).E(v),x.b,w.b,z.b,w.L(0).E(v),x.c,w.c,z.c,z.L(0).E(v),0,0,0,1)}}},
W:{"^":"a;a,b",
G:function(a,b){return new V.W(this.a-b.a,this.b-b.b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
aF:{"^":"a;a,b,c",
G:function(a,b){return new V.aF(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aF))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
em:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.em))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
eq:{"^":"a;a,b,c,d",
ga2:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eq))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
q:{
er:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eq(a,b,c,d)}}},
U:{"^":"a;a,b",
hn:[function(a){return Math.sqrt(this.E(this))},"$0","gm",1,0,23],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
n:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.n()
y=this.b
if(typeof y!=="number")return y.n()
return new V.U(z*b,y*b)},
B:function(a,b){var z,y
if($.m.$2(b,0))return new V.U(0,0)
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.U(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
N:{"^":"a;a,b,c",
hn:[function(a){return Math.sqrt(this.E(this))},"$0","gm",1,0,23],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cl:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.N(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aV:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.N(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.N(-this.a,-this.b,-this.c)},
B:function(a,b){if($.m.$2(b,0))return new V.N(0,0,0)
return new V.N(this.a/b,this.b/b,this.c/b)},
dE:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}}],["","",,U,{"^":"",h7:{"^":"dJ;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bE:function(a){var z=V.lO(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.J()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.w(a)},
scv:function(a,b){},
scm:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bE(z)}z=new D.M("maximumLocation",y,this.b,this,[P.z])
z.b=!0
this.M(z)}},
sco:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bE(z)}z=new D.M("minimumLocation",y,this.c,this,[P.z])
z.b=!0
this.M(z)}},
sa1:function(a,b){var z,y
b=this.bE(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.M("location",y,b,this,[P.z])
z.b=!0
this.M(z)}},
scn:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.M("maximumVelocity",y,a,this,[P.z])
z.b=!0
this.M(z)}},
sN:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.M("velocity",x,a,this,[P.z])
z.b=!0
this.M(z)}},
sc9:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.M("dampening",y,a,this,[P.z])
z.b=!0
this.M(z)}},
al:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sN(y)}},
q:{
cL:function(){var z=new U.h7()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dL:{"^":"a9;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.J()
this.b=z}return z},
aO:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dL))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
q:{
dM:function(a){var z=new U.dL()
z.a=a
return z}}},e_:{"^":"aB;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.J()
this.e=z}return z},
M:[function(a){var z
H.i(a,"$isw")
z=this.e
if(!(z==null))z.w(a)},function(){return this.M(null)},"a8","$1","$0","gaC",0,2,0],
i9:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.a9
H.y(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cf(a,b,this,[z])
z.b=!0
this.M(z)},"$2","geN",8,0,22],
iw:[function(a,b){var z,y,x,w,v
z=U.a9
H.y(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaC(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null)v.gu().T(0,x)}z=new D.cg(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gf8",8,0,22],
aO:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.at(z,z.length,0,[H.B(z,0)]),x=null;z.A();){y=z.d
if(y!=null){w=y.aO(0,b,c)
if(w!=null)x=x==null?w:w.n(0,x)}}this.f=x==null?V.bX():x
z=this.e
if(!(z==null))z.at(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e_))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.k(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.k(w,y)
if(!J.V(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ase:function(){return[U.a9]},
$asaB:function(){return[U.a9]},
$isa9:1},a9:{"^":"dJ;"},jo:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.J()
this.cy=z}return z},
M:[function(a){var z
H.i(a,"$isw")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.M(null)},"a8","$1","$0","gaC",0,2,0],
aU:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdc().h(0,this.gbP())
this.a.c.gdF().h(0,this.gbQ())
this.a.c.gbx().h(0,this.gbR())
return!0},
eJ:[function(a){H.i(a,"$isw")
if(!J.V(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbP",4,0,1],
eK:[function(a){var z,y,x,w,v,u,t
a=H.f(H.i(a,"$isw"),"$isbv")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.U(z.a,z.b)
z=z.E(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.U(y.a,y.b).n(0,2).B(0,z.ga2())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.n()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sN(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.U(x.a,x.b).n(0,2).B(0,z.ga2())
x=this.b
v=w.a
if(typeof v!=="number")return v.L()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
this.b.sN(0)
y=y.G(0,a.z)
this.Q=new V.U(y.a,y.b).n(0,2).B(0,z.ga2())}this.a8()},"$1","gbQ",4,0,1],
eL:[function(a){var z,y,x
H.i(a,"$isw")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.E(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.n()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sN(y*10*x)
this.a8()}},"$1","gbR",4,0,1],
aO:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.ch=y
x=b.y
this.b.al(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aw(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa9:1},jp:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.J()
this.fx=z}return z},
M:[function(a){var z
H.i(a,"$isw")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.M(null)},"a8","$1","$0","gaC",0,2,0],
aU:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdc().h(0,this.gbP())
this.a.c.gdF().h(0,this.gbQ())
this.a.c.gbx().h(0,this.gbR())
z=this.a.d
y=z.f
if(y==null){y=D.J()
z.f=y
z=y}else z=y
z.h(0,this.geG())
z=this.a.d
y=z.d
if(y==null){y=D.J()
z.d=y
z=y}else z=y
z.h(0,this.geH())
z=this.a.e
y=z.b
if(y==null){y=D.J()
z.b=y
z=y}else z=y
z.h(0,this.gfw())
z=this.a.e
y=z.d
if(y==null){y=D.J()
z.d=y
z=y}else z=y
z.h(0,this.gfv())
z=this.a.e
y=z.c
if(y==null){y=D.J()
z.c=y
z=y}else z=y
z.h(0,this.gfu())
return!0},
ag:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.L()
z=-z}if(this.r){if(typeof y!=="number")return y.L()
y=-y}return new V.U(z,y)},
eJ:[function(a){a=H.f(H.i(a,"$isw"),"$isbv")
if(!J.V(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbP",4,0,1],
eK:[function(a){var z,y,x,w,v,u,t
a=H.f(H.i(a,"$isw"),"$isbv")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.U(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ag(new V.U(y.a,y.b).n(0,2).B(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sN(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sN(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ag(new V.U(x.a,x.b).n(0,2).B(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.G(0,a.z)
this.dx=this.ag(new V.U(y.a,y.b).n(0,2).B(0,z.ga2()))}this.a8()},"$1","gbQ",4,0,1],
eL:[function(a){var z,y,x
H.i(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sN(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sN(-y*10*z)
this.a8()}},"$1","gbR",4,0,1],
i6:[function(a){if(H.f(H.i(a,"$isw"),"$iseb").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geG",4,0,1],
i7:[function(a){var z,y,x,w,v,u,t
a=H.f(H.i(a,"$isw"),"$isbv")
if(!J.V(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ag(new V.U(x.a,x.b).n(0,2).B(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.G(0,a.z)
this.dx=this.ag(new V.U(y.a,y.b).n(0,2).B(0,z.ga2()))
this.a8()},"$1","geH",4,0,1],
iE:[function(a){H.i(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfw",4,0,1],
iD:[function(a){var z,y,x,w,v,u,t
a=H.f(H.i(a,"$isw"),"$iseK")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.U(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ag(new V.U(y.a,y.b).n(0,2).B(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sN(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sN(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ag(new V.U(x.a,x.b).n(0,2).B(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.G(0,a.z)
this.dx=this.ag(new V.U(y.a,y.b).n(0,2).B(0,z.ga2()))}this.a8()},"$1","gfv",4,0,1],
iC:[function(a){var z,y,x
H.i(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sN(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sN(-y*10*z)
this.a8()}},"$1","gfu",4,0,1],
aO:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.dy=y
x=b.y
this.c.al(0,x)
this.b.al(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aw(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.n(0,V.aw(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa9:1},jq:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.J()
this.r=z}return z},
M:function(a){var z=this.r
if(!(z==null))z.w(a)},
aU:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.J()
z.e=y
z=y}else z=y
y=this.geM()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.J()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
i8:[function(a){var z,y,x,w
H.i(a,"$isw")
if(!J.V(this.b,this.a.b.c))return
H.f(a,"$iscX")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.n()
w=z+y*x
if(z!==w){this.d=w
z=new D.M("zoom",z,w,this,[P.z])
z.b=!0
this.M(z)}},"$1","geM",4,0,1],
aO:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aw(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa9:1}}],["","",,M,{"^":"",hn:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ax:[function(a){var z
H.i(a,"$isw")
z=this.x
if(!(z==null))z.w(a)},function(){return this.ax(null)},"i2","$1","$0","gaf",0,2,0],
ig:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aR
H.y(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaf(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.b2()
s.d=0
t.sY(s)}s=t.gY()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cf(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","geS",8,0,8],
ih:[function(a,b){var z,y,x,w,v,u
z=E.aR
H.y(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaf(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null){if(v.gY()==null){u=new D.b2()
u.d=0
v.sY(u)}v.gY().T(0,x)}}z=new D.cg(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","geT",8,0,8],
sdO:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().T(0,this.gaf())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.gaf())
z=new D.M("technique",y,this.c,this,[O.d5])
z.b=!0
this.ax(z)}},
gu:function(){var z=this.x
if(z==null){z=D.J()
this.x=z}return z},
aN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dM(this.c)
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
u=C.i.ad(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.i.ad(v.b*w)
s=C.i.ad(v.c*x)
a.c=s
v=C.i.ad(v.d*w)
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
n=V.aw(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.dL(n)
y=$.el
if(y==null){y=V.eg(new V.aF(0,0,0),new V.N(0,1,0),new V.N(0,0,-1))
$.el=y
m=y}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.n(0,m)}a.db.dL(m)
z=this.c
if(z!=null)z.al(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.A();)z.d.al(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.A();)z.d.aN(a)
this.a.toString
a.cy.cq()
a.db.cq()
this.b.toString
a.dK()},
$ismy:1}}],["","",,A,{"^":"",dA:{"^":"a;a,b,c"},fY:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hc:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ha:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},hW:{"^":"et;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aj,0ab,0be,0dd,0bf,0bg,0de,0df,0bh,0bi,0dg,0dh,0bj,0bk,0di,0dj,0bl,0dk,0dl,0bm,0dm,0dn,0bn,0bo,0bp,0dq,0dr,0bq,0br,0ds,0dt,0bs,0du,0cc,0dv,0cd,0dw,0ce,0dz,0cf,0dA,0cg,0dB,0ci,a,b,0c,0d,0e,0f,0r,0x,0y",
ea:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.bB("")
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
a2.fB(z)
a2.fI(z)
a2.fC(z)
a2.fQ(z)
a2.fR(z)
a2.fK(z)
a2.fV(z)
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
s=x.charCodeAt(0)==0?x:x
x=this.z
z=new P.bB("")
z.a="precision mediump float;\n"
z.a="precision mediump float;\n\n"
v=x.r1
if(v){z.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
u="precision mediump float;\n\nvarying vec3 normalVec;\n"}else u="precision mediump float;\n\n"
if(x.r2){u+="varying vec3 binormalVec;\n"
z.a=u}if(x.rx){u+="varying vec2 txt2D;\n"
z.a=u}if(x.ry){u+="varying vec3 txtCube;\n"
z.a=u}if(x.k3){u+="varying vec3 objPos;\n"
z.a=u}if(x.k4){u+="varying vec3 viewPos;\n"
z.a=u}u+="\n"
z.a=u
t=x.y2
if(t){u+="uniform mat4 colorMat;\n"
z.a=u}if(x.fr){u+="uniform mat4 invViewMat;\n"
z.a=u}z.a=u+"\n"
x.fF(z)
x.fA(z)
x.fD(z)
x.fG(z)
x.fO(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.fM(z)
x.fN(z)}x.fJ(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.e){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.c){r+="uniform samplerCube alphaTxt;\n"
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
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.c:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
q=x.k2
if(q){r+="// === Lighting ===\n"
z.a=r
r+="\n"
z.a=r
r+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
z.a=r
r+="{\n"
z.a=r
z.a=r+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
p=H.b([],[P.h])
if(x.b!==C.b)C.a.h(p,"ambient()")
if(x.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.l(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.fE(z)
x.fL(z)
x.fP(z)
x.fS(z)
x.fT(z)
x.fU(z)
x.fH(z)}r=z.a+="// === Main ===\n"
r+="\n"
z.a=r
r+="void main()\n"
z.a=r
r+="{\n"
z.a=r
r+="   float alpha = alphaValue();\n"
z.a=r
if(v){v=r+"   vec3 norm = normal();\n"
z.a=v}else v=r
if(u)z.a=v+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
o=H.b([],[P.h])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.b)z.a+="   setDiffuseColor();\n"
if(x.d!==C.b)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.b)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.b)C.a.h(o,"emission()")
if(x.r!==C.b)C.a.h(o,"reflect(refl)")
if(x.x!==C.b)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.l(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.cR(s,35633)
this.f=this.cR(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.dk(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.q(P.p("Failed to link shader: "+H.j(m)))}this.fo()
this.fq()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a2.fr)this.id=H.f(this.y.p(0,"invViewMat"),"$isaG")
if(y)this.dy=H.f(this.y.p(0,"objMat"),"$isaG")
if(w)this.fr=H.f(this.y.p(0,"viewObjMat"),"$isaG")
this.fy=H.f(this.y.p(0,"projViewObjMat"),"$isaG")
if(a2.x2)this.k1=H.f(this.y.p(0,"txt2DMat"),"$isda")
if(a2.y1)this.k2=H.f(this.y.p(0,"txtCubeMat"),"$isaG")
if(a2.y2)this.k3=H.f(this.y.p(0,"colorMat"),"$isaG")
this.r1=H.b([],[A.aG])
y=a2.aj
if(y>0){this.k4=H.i(this.y.p(0,"bendMatCount"),"$isK")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.q(P.p("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(k,"$isaG"))}}y=a2.a
if(y!==C.b){this.r2=H.f(this.y.p(0,"emissionClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.d:this.rx=H.f(this.y.p(0,"emissionTxt"),"$isag")
this.x1=H.f(this.y.p(0,"nullEmissionTxt"),"$isK")
break
case C.c:this.ry=H.f(this.y.p(0,"emissionTxt"),"$isah")
this.x1=H.f(this.y.p(0,"nullEmissionTxt"),"$isK")
break}}y=a2.b
if(y!==C.b){this.x2=H.f(this.y.p(0,"ambientClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.d:this.y1=H.f(this.y.p(0,"ambientTxt"),"$isag")
this.aj=H.f(this.y.p(0,"nullAmbientTxt"),"$isK")
break
case C.c:this.y2=H.f(this.y.p(0,"ambientTxt"),"$isah")
this.aj=H.f(this.y.p(0,"nullAmbientTxt"),"$isK")
break}}y=a2.c
if(y!==C.b){this.ab=H.f(this.y.p(0,"diffuseClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.d:this.be=H.f(this.y.p(0,"diffuseTxt"),"$isag")
this.bf=H.f(this.y.p(0,"nullDiffuseTxt"),"$isK")
break
case C.c:this.dd=H.f(this.y.p(0,"diffuseTxt"),"$isah")
this.bf=H.f(this.y.p(0,"nullDiffuseTxt"),"$isK")
break}}y=a2.d
if(y!==C.b){this.bg=H.f(this.y.p(0,"invDiffuseClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.d:this.de=H.f(this.y.p(0,"invDiffuseTxt"),"$isag")
this.bh=H.f(this.y.p(0,"nullInvDiffuseTxt"),"$isK")
break
case C.c:this.df=H.f(this.y.p(0,"invDiffuseTxt"),"$isah")
this.bh=H.f(this.y.p(0,"nullInvDiffuseTxt"),"$isK")
break}}y=a2.e
if(y!==C.b){this.bk=H.f(this.y.p(0,"shininess"),"$isX")
this.bi=H.f(this.y.p(0,"specularClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.d:this.dg=H.f(this.y.p(0,"specularTxt"),"$isag")
this.bj=H.f(this.y.p(0,"nullSpecularTxt"),"$isK")
break
case C.c:this.dh=H.f(this.y.p(0,"specularTxt"),"$isah")
this.bj=H.f(this.y.p(0,"nullSpecularTxt"),"$isK")
break}}switch(a2.f){case C.b:break
case C.e:break
case C.d:this.di=H.f(this.y.p(0,"bumpTxt"),"$isag")
this.bl=H.f(this.y.p(0,"nullBumpTxt"),"$isK")
break
case C.c:this.dj=H.f(this.y.p(0,"bumpTxt"),"$isah")
this.bl=H.f(this.y.p(0,"nullBumpTxt"),"$isK")
break}if(a2.dy){this.dk=H.f(this.y.p(0,"envSampler"),"$isah")
this.dl=H.f(this.y.p(0,"nullEnvTxt"),"$isK")
y=a2.r
if(y!==C.b){this.bm=H.f(this.y.p(0,"reflectClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.d:this.dm=H.f(this.y.p(0,"reflectTxt"),"$isag")
this.bn=H.f(this.y.p(0,"nullReflectTxt"),"$isK")
break
case C.c:this.dn=H.f(this.y.p(0,"reflectTxt"),"$isah")
this.bn=H.f(this.y.p(0,"nullReflectTxt"),"$isK")
break}}y=a2.x
if(y!==C.b){this.bo=H.f(this.y.p(0,"refraction"),"$isX")
this.bp=H.f(this.y.p(0,"refractClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.d:this.dq=H.f(this.y.p(0,"refractTxt"),"$isag")
this.bq=H.f(this.y.p(0,"nullRefractTxt"),"$isK")
break
case C.c:this.dr=H.f(this.y.p(0,"refractTxt"),"$isah")
this.bq=H.f(this.y.p(0,"nullRefractTxt"),"$isK")
break}}}y=a2.y
if(y!==C.b){this.br=H.f(this.y.p(0,"alpha"),"$isX")
switch(y){case C.b:break
case C.e:break
case C.d:this.ds=H.f(this.y.p(0,"alphaTxt"),"$isag")
this.bs=H.f(this.y.p(0,"nullAlphaTxt"),"$isK")
break
case C.c:this.dt=H.f(this.y.p(0,"alphaTxt"),"$isah")
this.bs=H.f(this.y.p(0,"nullAlphaTxt"),"$isK")
break}}this.cc=H.b([],[A.eX])
this.cd=H.b([],[A.eY])
this.ce=H.b([],[A.eZ])
this.cf=H.b([],[A.f_])
this.cg=H.b([],[A.f0])
this.ci=H.b([],[A.f1])
if(a2.k2){y=a2.z
if(y>0){this.du=H.i(this.y.p(0,"dirLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.cc;(x&&C.a).h(x,new A.eX(l,k,j))}}y=a2.Q
if(y>0){this.dv=H.i(this.y.p(0,"pntLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isX")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isX")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isX")
x=this.cd;(x&&C.a).h(x,new A.eY(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dw=H.i(this.y.p(0,"spotLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isX")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isX")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isX")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isX")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isX")
x=this.ce;(x&&C.a).h(x,new A.eZ(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dz=H.i(this.y.p(0,"txtDirLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isH")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isK")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isag")
x=this.cf;(x&&C.a).h(x,new A.f_(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dA=H.i(this.y.p(0,"txtPntLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isda")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isK")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isX")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isX")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isX")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isah")
x=this.cg;(x&&C.a).h(x,new A.f0(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dB=H.i(this.y.p(0,"txtSpotLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isH")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isK")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isH")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isX")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isX")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isX")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isX")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isX")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a1,"$isag")
x=this.ci;(x&&C.a).h(x,new A.f1(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a9:function(a,b,c){b.a.uniform1i(b.d,1)},
a3:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.e0(c)
b.a.uniform1i(b.d,0)}},
q:{
hV:function(a,b){var z,y
z=a.ab
y=new A.hW(b,z)
y.ed(b,z)
y.ea(a,b)
return y}}},hZ:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aj,ab,be",
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
z=a.a+="uniform BendingValue bendValues["+this.aj+"];\n"
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
ao:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.k(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.b5(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fF:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ao(a,z,"emission")
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
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
this.ao(a,z,"ambient")
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
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
this.ao(a,z,"diffuse")
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
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
this.ao(a,z,"invDiffuse")
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
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
switch(z){case C.b:z=y
break
case C.e:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
case C.e:break
case C.d:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.c:z+="uniform samplerCube bumpTxt;\n"
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
case C.d:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.c:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
this.ao(a,z,"reflect")
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
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
switch(z){case C.b:z=y
break
case C.e:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
i:function(a){return this.ab}},eX:{"^":"a;a,b,c"},f_:{"^":"a;a,b,c,d,e,f,r,x"},eY:{"^":"a;a,b,c,d,e,f,r"},f0:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eZ:{"^":"a;a,b,c,d,e,f,r,x,y,z"},f1:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},et:{"^":"cE;",
ed:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cR:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dk(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.p("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
fo:function(){var z,y,x,w,v,u
z=H.b([],[A.dA])
y=this.a
x=H.a2(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dA(y,v.name,u))}this.x=new A.fY(z)},
fq:function(){var z,y,x,w,v,u
z=H.b([],[A.a5])
y=this.a
x=H.a2(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.h7(v.type,v.size,v.name,u))}this.y=new A.jg(z)},
aA:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.K(z,y,b,c)
else return A.d9(z,y,b,a,c)},
eB:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ag(z,y,b,c)
else return A.d9(z,y,b,a,c)},
eC:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ah(z,y,b,c)
else return A.d9(z,y,b,a,c)},
bb:function(a,b){return new P.fa(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
h7:function(a,b,c,d){switch(a){case 5120:return this.aA(b,c,d)
case 5121:return this.aA(b,c,d)
case 5122:return this.aA(b,c,d)
case 5123:return this.aA(b,c,d)
case 5124:return this.aA(b,c,d)
case 5125:return this.aA(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.jb(this.a,this.r,c,d)
case 35665:return new A.H(this.a,this.r,c,d)
case 35666:return new A.je(this.a,this.r,c,d)
case 35667:return new A.jc(this.a,this.r,c,d)
case 35668:return new A.jd(this.a,this.r,c,d)
case 35669:return new A.jf(this.a,this.r,c,d)
case 35674:return new A.ji(this.a,this.r,c,d)
case 35675:return new A.da(this.a,this.r,c,d)
case 35676:return new A.aG(this.a,this.r,c,d)
case 35678:return this.eB(b,c,d)
case 35680:return this.eC(b,c,d)
case 35670:throw H.d(this.bb("BOOL",c))
case 35671:throw H.d(this.bb("BOOL_VEC2",c))
case 35672:throw H.d(this.bb("BOOL_VEC3",c))
case 35673:throw H.d(this.bb("BOOL_VEC4",c))
default:throw H.d(P.p("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c8:{"^":"a;a,b",
i:function(a){return this.b}},a5:{"^":"a;"},jg:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.j(0,b)
if(z==null)throw H.d(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.H()},
hg:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
H:function(){return this.hg("\n")}},K:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},jc:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},jd:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},jf:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},ja:{"^":"a5;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
q:{
d9:function(a,b,c,d,e){var z=new A.ja(a,b,c,e)
z.f=d
z.e=P.hN(d,0,!1,P.F)
return z}}},X:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},jb:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},H:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},je:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},ji:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},da:{"^":"a5;a,b,c,d",
ae:function(a){var z=new Float32Array(H.bL(H.y(a,"$isc",[P.z],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aG:{"^":"a5;a,b,c,d",
ae:function(a){var z=new Float32Array(H.bL(H.y(a,"$isc",[P.z],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ag:{"^":"a5;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ah:{"^":"a5;a,b,c,d",
e0:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cu:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bK:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.N(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.N(t+h,s+f,r+g)
z.b=q
p=new V.N(t-h,s-f,r-g)
z.c=p
o=new V.N(y-h,w-f,v-g)
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
j=F.lL(d,e,new F.l4(z,F.cu(z.c),F.cu(z.d),k,l,c),b)
if(j!=null)a.hr(j)},
lL:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.b9,P.z,P.z]})
if(a<1)return
if(b<1)return
z=F.ev()
y=H.b([],[F.b9])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.db(null,null,new V.c7(u,0,0,1),null,null,new V.W(w,1),null,null,0)
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
t=F.db(null,null,new V.c7(o,n,m,1),null,null,new V.W(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c8(d))}}z.d.fW(a+1,b+1,y)
return z},
l4:{"^":"r:36;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cl(z.b,b).cl(z.d.cl(z.c,b),c)
z=new V.aF(y.a,y.b,y.c)
if(!J.V(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a0()}a.shV(y.B(0,Math.sqrt(y.E(y))))
z=1-b
x=1-c
x=new V.em(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.V(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a0()}}},
ao:{"^":"a;0a,0b,0c,0d,0e",
gcb:function(){return this.a==null||this.b==null||this.c==null},
eu:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.N(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dE())return
return v.B(0,Math.sqrt(v.E(v)))},
ex:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.N(z.a,z.b,z.c)
v=z.B(0,Math.sqrt(z.E(z)))
z=w.G(0,y)
z=new V.N(z.a,z.b,z.c)
z=v.aV(z.B(0,Math.sqrt(z.E(z))))
return z.B(0,Math.sqrt(z.E(z)))},
c6:function(){if(this.d!=null)return!0
var z=this.eu()
if(z==null){z=this.ex()
if(z==null)return!1}this.d=z
this.a.a.a0()
return!0},
es:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.N(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dE())return
return v.B(0,Math.sqrt(v.E(v)))},
ew:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.N(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.L(0)}else{l=(z-q.b)/n
z=r.G(0,u)
z=new V.aF(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).G(0,x)
z=new V.N(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.L(0)}z=this.d
if(z!=null){k=z.B(0,Math.sqrt(z.E(z)))
z=k.aV(m)
z=z.B(0,Math.sqrt(z.E(z))).aV(k)
m=z.B(0,Math.sqrt(z.E(z)))}return m},
c4:function(){if(this.e!=null)return!0
var z=this.es()
if(z==null){z=this.ew()
if(z==null)return!1}this.e=z
this.a.a.a0()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var z,y
if(this.gcb())return a+"disposed"
z=a+C.h.a5(J.a4(this.a.e),0)+", "+C.h.a5(J.a4(this.b.e),0)+", "+C.h.a5(J.a4(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
H:function(){return this.v("")},
q:{
bS:function(a,b,c){var z,y,x
z=new F.ao()
y=a.a
if(y==null)H.q(P.p("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.p("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a0()
return z}}},
cT:{"^":"a;0a,0b",
gcb:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){if(this.gcb())return a+"disposed"
return a+C.h.a5(J.a4(this.a.e),0)+", "+C.h.a5(J.a4(this.b.e),0)},
H:function(){return this.v("")}},
cZ:{"^":"a;0a",
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a5(J.a4(z.e),0)},
H:function(){return this.v("")}},
eu:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.J()
this.e=z}return z},
hr:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.W()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.h5())}this.a.W()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cZ()
if(r.a==null)H.q(P.p("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.w(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.W()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cT()
s=p.a
if(s==null)H.q(P.p("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.q(P.p("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.w(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.W()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bS(p,o,l)}z=this.e
if(!(z==null))z.at(0)},
aF:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aF()||!1
if(!this.a.aF())y=!1
z=this.e
if(!(z==null))z.at(0)
return y},
h0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aK()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aL().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$bG().a)!==0)++w
if((x&$.$get$bH().a)!==0)++w
if((x&$.$get$bb().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
v=b.gcE(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.z
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.dE])
for(r=0,q=0;q<w;++q){p=b.fY(q)
o=p.gcE(p)
C.a.R(s,q,new Z.dE(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.k(y,n)
m=y[n].ho(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.R(t,l,m[k]);++l}}r+=o}H.y(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bL(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dF(new Z.f7(34962,j),s,b)
i.b=H.b([],[Z.ce])
if(this.b.b.length!==0){x=P.F
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)}f=Z.dc(y,34963,H.y(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ce(0,h.length,f))}if(this.c.b.length!==0){x=P.F
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.W()
C.a.h(h,g.e)}f=Z.dc(y,34963,H.y(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ce(1,h.length,f))}if(this.d.b.length!==0){x=P.F
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.W()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].c
g.a.a.W()
C.a.h(h,g.e)}f=Z.dc(y,34963,H.y(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ce(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.l(z,"\n")},
ac:function(a){var z=this.e
if(!(z==null))z.w(a)},
a0:function(){return this.ac(null)},
q:{
ev:function(){var z,y
z=new F.eu()
y=new F.jt(z)
y.b=!1
y.c=H.b([],[F.b9])
z.a=y
y=new F.iJ(z)
y.b=H.b([],[F.cZ])
z.b=y
y=new F.iI(z)
y.b=H.b([],[F.cT])
z.c=y
y=new F.iH(z)
y.b=H.b([],[F.ao])
z.d=y
z.e=null
return z}}},
iH:{"^":"a;a,0b",
fW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.y(c,"$isc",[F.b9],"$asc")
z=H.b([],[F.ao])
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
C.a.h(z,F.bS(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bS(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bS(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bS(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
aF:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c6())x=!1
return x},
c5:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c4())x=!1
return x},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
z=H.b([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.l(z,"\n")},
H:function(){return this.v("")}},
iI:{"^":"a;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
z=H.b([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.k(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.l(z,"\n")},
H:function(){return this.v("")}},
iJ:{"^":"a;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
z=H.b([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.l(z,"\n")},
H:function(){return this.v("")}},
b9:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c8:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.db(this.cx,x,u,z,y,w,v,a,t)},
h5:function(){return this.c8(null)},
shV:function(a){var z
if(!J.V(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a0()}},
ho:function(a){var z,y
z=J.I(a)
if(z.t(a,$.$get$aK())){z=this.f
y=[P.z]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aJ())){z=this.r
y=[P.z]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aI())){z=this.x
y=[P.z]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aL())){z=this.y
y=[P.z]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.t(a,$.$get$aM())){z=this.z
y=[P.z]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bG())){z=this.Q
y=[P.z]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bH())){z=this.Q
y=[P.z]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$bb()))return H.b([this.ch],[P.z])
else if(z.t(a,$.$get$aH())){z=this.cx
y=[P.z]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.z])},
c6:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.N(0,0,0)
this.d.K(0,new F.jA(z))
z=z.a
this.r=z.B(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
c4:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.N(0,0,0)
this.d.K(0,new F.jz(z))
z=z.a
this.x=z.B(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var z,y,x
z=H.b([],[P.h])
C.a.h(z,C.h.a5(J.a4(this.e),0))
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
x=C.a.l(z,", ")
return a+"{"+x+"}"},
H:function(){return this.v("")},
q:{
db:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.b9()
y=new F.jy(z)
y.b=H.b([],[F.cZ])
z.b=y
y=new F.jx(z)
x=[F.cT]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.ju(z)
x=[F.ao]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$f4()
z.e=0
y=$.$get$aK()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aJ().a)!==0?e:null
z.x=(x&$.$get$aI().a)!==0?b:null
z.y=(x&$.$get$aL().a)!==0?f:null
z.z=(x&$.$get$aM().a)!==0?g:null
z.Q=(x&$.$get$f5().a)!==0?c:null
z.ch=(x&$.$get$bb().a)!==0?i:0
z.cx=(x&$.$get$aH().a)!==0?a:null
return z}}},
jA:{"^":"r:5;a",
$1:function(a){var z,y
H.i(a,"$isao")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
jz:{"^":"r:5;a",
$1:function(a){var z,y
H.i(a,"$isao")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
jt:{"^":"a;a,0b,0c",
W:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.k(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.p("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a0()
return!0},
gm:function(a){return this.c.length},
aF:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c6()
return!0},
c5:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c4()
return!0},
h1:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.B(0,Math.sqrt(u*u+t*t+s*s))
if(!J.V(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
this.W()
z=H.b([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.l(z,"\n")},
H:function(){return this.v("")}},
ju:{"^":"a;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ao]})
C.a.K(this.b,b)
C.a.K(this.c,new F.jv(this,b))
C.a.K(this.d,new F.jw(this,b))},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
z=H.b([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.l(z,"\n")},
H:function(){return this.v("")}},
jv:{"^":"r:5;a,b",
$1:function(a){H.i(a,"$isao")
if(!J.V(a.a,this.a))this.b.$1(a)}},
jw:{"^":"r:5;a,b",
$1:function(a){var z
H.i(a,"$isao")
z=this.a
if(!J.V(a.a,z)&&!J.V(a.b,z))this.b.$1(a)}},
jx:{"^":"a;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
z=H.b([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.l(z,"\n")},
H:function(){return this.v("")}},
jy:{"^":"a;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
z=H.b([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.l(z,"\n")},
H:function(){return this.v("")}}}],["","",,O,{"^":"",hU:{"^":"d5;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.J()
this.dy=z}return z},
X:[function(a){var z
H.i(a,"$isw")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.X(null)},"en","$1","$0","gb7",0,2,0],
fg:[function(a){H.i(a,"$isw")
this.a=null
this.X(a)},function(){return this.fg(null)},"iB","$1","$0","gff",0,2,0],
ib:[function(a,b){var z=V.av
z=new D.cf(a,H.y(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.X(z)},"$2","geP",8,0,21],
ic:[function(a,b){var z=V.av
z=new D.cg(a,H.y(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.X(z)},"$2","geQ",8,0,21],
cO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.Z(z.e.length+3,4)*4
x=C.f.Z(z.f.length+3,4)*4
w=C.f.Z(z.r.length+3,4)*4
v=C.f.Z(z.x.length+3,4)*4
u=C.f.Z(z.y.length+3,4)*4
t=C.f.Z(z.z.length+3,4)*4
s=C.f.Z(this.e.a.length+3,4)*4
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
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aK()
if(c){z=$.$get$aJ()
a6=new Z.ba(a6.a|z.a)}if(b){z=$.$get$aI()
a6=new Z.ba(a6.a|z.a)}if(a){z=$.$get$aL()
a6=new Z.ba(a6.a|z.a)}if(a0){z=$.$get$aM()
a6=new Z.ba(a6.a|z.a)}if(a2){z=$.$get$aH()
a6=new Z.ba(a6.a|z.a)}return new A.hZ(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
P:function(a,b){H.y(a,"$isc",[T.d6],"$asc")
if(b!=null)if(!C.a.O(a,b)){b.a=a.length
C.a.h(a,b)}},
al:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.B(z,0)]);z.A();){y=z.d
x=new V.N(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.ct(x)}}},
hL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cO()
y=a.fr.j(0,z.ab)
if(y==null){y=A.hV(z,a.a)
x=y.b
if(x.length===0)H.q(P.p("May not cache a shader with no name."))
if(a.fr.d9(0,x))H.q(P.p('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.R(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.be
z=b.e
if(!(z instanceof Z.dF)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.aF()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.c5()
t.a.c5()
t=t.e
if(!(t==null))t.at(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.h1()
s=s.e
if(!(s==null))s.at(0)}q=b.d.h0(new Z.jB(a.a),v)
q.aK($.$get$aK()).e=this.a.Q.c
if(z)q.aK($.$get$aJ()).e=this.a.cx.c
if(u)q.aK($.$get$aI()).e=this.a.ch.c
if(w.rx)q.aK($.$get$aL()).e=this.a.cy.c
if(t)q.aK($.$get$aM()).e=this.a.db.c
if(w.x1)q.aK($.$get$aH()).e=this.a.dx.c
b.e=q}z=T.d6
p=H.b([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.hc()
if(w.fx){u=this.a
t=a.dx
t=t.gU(t)
u=u.dy
u.toString
u.ae(t.a6(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gU(t)
s=a.dx
s=t.n(0,s.gU(s))
a.cx=s
t=s}u=u.fr
u.toString
u.ae(t.a6(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghH()
s=a.dx
s=t.n(0,s.gU(s))
a.ch=s
t=s}u=u.fy
u.toString
u.ae(t.a6(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.ae(t.a6(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.ae(t.a6(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.ae(C.G.a6(t,!0))}if(w.aj>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.z],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.k(s,n)
s=s[n]
t.toString
H.i(s,"$isav")
t=t.r1
if(n>=t.length)return H.k(t,n)
t=t[n]
m=new Float32Array(H.bL(H.y(s.a6(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.e:u=this.a
t=this.f.f
u=u.r2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.P(p,this.f.d)
u=this.a
t=this.f.d
u.a9(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.c:this.P(p,this.f.e)
u=this.a
t=this.f.e
u.a3(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.e:u=this.a
t=this.r.f
u=u.x2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.P(p,this.r.d)
u=this.a
t=this.r.d
u.a9(u.y1,u.aj,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.c:this.P(p,this.r.e)
u=this.a
t=this.r.e
u.a3(u.y2,u.aj,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.e:u=this.a
t=this.x.f
u=u.ab
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.P(p,this.x.d)
u=this.a
t=this.x.d
u.a9(u.be,u.bf,t)
t=this.a
u=this.x.f
t=t.ab
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.c:this.P(p,this.x.e)
u=this.a
t=this.x.e
u.a3(u.dd,u.bf,t)
t=this.a
u=this.x.f
t=t.ab
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.e:u=this.a
t=this.y.f
u=u.bg
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.P(p,this.y.d)
u=this.a
t=this.y.d
u.a9(u.de,u.bh,t)
t=this.a
u=this.y.f
t=t.bg
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.c:this.P(p,this.y.e)
u=this.a
t=this.y.e
u.a3(u.df,u.bh,t)
t=this.a
u=this.y.f
t=t.bg
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.e:u=this.a
t=this.z.f
u=u.bi
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bk
t.a.uniform1f(t.d,r)
break
case C.d:this.P(p,this.z.d)
u=this.a
t=this.z.d
u.a9(u.dg,u.bj,t)
t=this.a
u=this.z.f
t=t.bi
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bk
u.a.uniform1f(u.d,r)
break
case C.c:this.P(p,this.z.e)
u=this.a
t=this.z.e
u.a3(u.dh,u.bj,t)
t=this.a
u=this.z.f
t=t.bi
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bk
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.du
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.cc
if(k>=s.length)return H.k(s,k)
h=s[k]
s=l.ct(i.a)
r=s.a
g=s.b
f=s.c
f=s.B(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dv
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.cd
if(k>=s.length)return H.k(s,k)
h=s[k]
s=i.gaZ(i)
r=h.b
g=s.gcw(s)
f=s.gcz(s)
s=s.gcA(s)
r.a.uniform3f(r.d,g,f,s)
s=l.b2(i.gaZ(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gai(i)
f=h.d
g=s.gbw()
r=s.gb3()
s=s.gbc()
f.a.uniform3f(f.d,g,r,s)
s=i.gbZ()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gc_()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gc0()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dw
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.ce
if(k>=s.length)return H.k(s,k)
h=s[k]
s=i.gaZ(i)
r=h.b
g=s.gcw(s)
f=s.gcz(s)
s=s.gcA(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gca(i).iI()
f=h.c
g=s.gaH(s)
r=s.gaI(s)
s=s.gaJ()
f.a.uniform3f(f.d,g,r,s)
s=l.b2(i.gaZ(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gai(i)
r=h.e
g=s.gbw()
f=s.gb3()
s=s.gbc()
r.a.uniform3f(r.d,g,f,s)
s=i.giH()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giF()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbZ()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gc_()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gc0()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dz
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
r=this.a.cf
if(k>=r.length)return H.k(r,k)
h=r[k]
r=i.gb0()
H.y(p,"$isc",s,"$asc")
if(!C.a.O(p,r)){r.sbM(p.length)
C.a.h(p,r)}r=i.gca(i)
g=h.d
f=r.gaH(r)
e=r.gaI(r)
r=r.gaJ()
g.a.uniform3f(g.d,f,e,r)
r=i.gbx()
e=h.b
f=r.gaH(r)
g=r.gaI(r)
r=r.gaJ()
e.a.uniform3f(e.d,f,g,r)
r=i.gb_(i)
g=h.c
f=r.gaH(r)
e=r.gaI(r)
r=r.gaJ()
g.a.uniform3f(g.d,f,e,r)
r=l.ct(i.gca(i))
e=r.a
f=r.b
g=r.c
g=r.B(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gai(i)
f=h.f
e=g.gbw()
r=g.gb3()
g=g.gbc()
f.a.uniform3f(f.d,e,r,g)
g=i.gb0()
r=g.gbu(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gbu(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.ghj(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dA
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.y,t=u.length,s=[P.z],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
g=this.a.cg
if(k>=g.length)return H.k(g,k)
h=g[k]
g=i.gb0()
H.y(p,"$isc",r,"$asc")
if(!C.a.O(p,g)){g.sbM(p.length)
C.a.h(p,g)}d=l.n(0,i.gU(i))
g=i.gU(i).b2(new V.aF(0,0,0))
f=h.b
e=g.gcw(g)
c=g.gcz(g)
g=g.gcA(g)
f.a.uniform3f(f.d,e,c,g)
g=d.b2(new V.aF(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dD(0)
c=h.d
m=new Float32Array(H.bL(H.y(new V.ef(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a6(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gai(i)
g=h.e
e=c.gbw()
f=c.gb3()
c=c.gbc()
g.a.uniform3f(g.d,e,f,c)
c=i.gb0()
g=c.gbu(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gi5()
e=g.a
g=g.d
if(!(f>=6))e.uniform1i(g,0)
else e.uniform1i(g,c.gbM())
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbZ()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gc_()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gc0()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dB
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.ci
if(k>=s.length)return H.k(s,k)
h=s[k]
s=i.gb0()
H.y(p,"$isc",z,"$asc")
if(!C.a.O(p,s)){s.sbM(p.length)
C.a.h(p,s)}s=i.gaZ(i)
r=h.b
g=s.gcw(s)
f=s.gcz(s)
s=s.gcA(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gca(i)
f=h.c
g=s.gaH(s)
r=s.gaI(s)
s=s.gaJ()
f.a.uniform3f(f.d,g,r,s)
s=i.gbx()
r=h.d
g=s.gaH(s)
f=s.gaI(s)
s=s.gaJ()
r.a.uniform3f(r.d,g,f,s)
s=i.gb_(i)
f=h.e
g=s.gaH(s)
r=s.gaI(s)
s=s.gaJ()
f.a.uniform3f(f.d,g,r,s)
s=l.b2(i.gaZ(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb0()
r=s.gbu(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gbu(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.ghj(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gai(i)
r=h.y
g=s.gbw()
f=s.gb3()
s=s.gbc()
r.a.uniform3f(r.d,g,f,s)
s=i.giO()
f=h.z
f.a.uniform1f(f.d,s)
s=i.giP()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbZ()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gc_()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gc0()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.e:break
case C.d:this.P(p,this.Q.d)
z=this.a
u=this.Q.d
z.a9(z.di,z.bl,u)
break
case C.c:this.P(p,this.Q.e)
z=this.a
u=this.Q.e
z.a3(z.dj,z.bl,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gU(u).dD(0)
a.Q=u}z=z.id
z.toString
z.ae(u.a6(0,!0))}if(w.dy){this.P(p,this.ch)
z=this.a
u=this.ch
z.a3(z.dk,z.dl,u)
switch(w.r){case C.b:break
case C.e:z=this.a
u=this.cx.f
z=z.bm
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.d:this.P(p,this.cx.d)
z=this.a
u=this.cx.d
z.a9(z.dm,z.bn,u)
u=this.a
z=this.cx.f
u=u.bm
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.c:this.P(p,this.cx.e)
z=this.a
u=this.cx.e
z.a3(z.dn,z.bn,u)
u=this.a
z=this.cx.f
u=u.bm
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.e:z=this.a
u=this.cy.f
z=z.bp
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bo
u.a.uniform1f(u.d,s)
break
case C.d:this.P(p,this.cy.d)
z=this.a
u=this.cy.d
z.a9(z.dq,z.bq,u)
u=this.a
z=this.cy.f
u=u.bp
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bo
z.a.uniform1f(z.d,s)
break
case C.c:this.P(p,this.cy.e)
z=this.a
u=this.cy.e
z.a3(z.dr,z.bq,u)
u=this.a
z=this.cy.f
u=u.bp
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bo
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.e:z=this.a
t=this.db.f
z=z.br
z.a.uniform1f(z.d,t)
break
case C.d:this.P(p,this.db.d)
z=this.a
t=this.db.d
z.a9(z.ds,z.bs,t)
t=this.a
z=this.db.f
t=t.br
t.a.uniform1f(t.d,z)
break
case C.c:this.P(p,this.db.e)
z=this.a
t=this.db.e
z.a3(z.dt,z.bs,t)
t=this.a
z=this.db.f
t=t.br
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d>=6){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,z.b)}}z=b.e
z.c1(a)
z.aN(a)
z.i0(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.ha()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cO().ab}},hX:{"^":"cV;0f,a,b,0c,0d,0e"},cV:{"^":"a;",
X:[function(a){this.a.X(H.i(a,"$isw"))},function(){return this.X(null)},"en","$1","$0","gb7",0,2,0],
aR:["e7",function(){}],
fm:function(a){},
fn:function(a){var z,y
z=this.e
if(z==null?a!=null:z!==a){if(z!=null)z.gu().T(0,this.gb7())
y=this.e
this.e=a
if(a!=null)a.gu().h(0,this.gb7())
z=new D.M(this.b+".textureCube",y,this.e,this,[T.eE])
z.b=!0
this.a.X(z)}}},hY:{"^":"cV;a,b,0c,0d,0e"},b5:{"^":"cV;0f,a,b,0c,0d,0e",
cY:function(a){var z,y
if(!J.V(this.f,a)){z=this.f
this.f=a
y=new D.M(this.b+".color",z,a,this,[V.a3])
y.b=!0
this.a.X(y)}},
aR:["bC",function(){this.e7()
this.cY(new V.a3(1,1,1))}],
sai:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aR()
z=this.a
z.a=null
z.X(null)}this.cY(b)}},i_:{"^":"b5;0ch,0f,a,b,0c,0d,0e",
fl:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".refraction",y,a,this,[P.z])
z.b=!0
this.a.X(z)}},
aR:function(){this.bC()
this.fl(1)}},i0:{"^":"b5;0ch,0f,a,b,0c,0d,0e",
bW:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".shininess",y,a,this,[P.z])
z.b=!0
this.a.X(z)}},
aR:function(){this.bC()
this.bW(100)}},d5:{"^":"a;"}}],["","",,T,{"^":"",d6:{"^":"cE;"},eE:{"^":"d6;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.J()
this.e=z}return z}},iY:{"^":"a;a,0b,0c,0d,0e",
aB:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a6
W.Z(z,"load",H.l(new T.iZ(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fh:function(a,b,c){var z,y,x,w
b=V.du(b,2)
z=V.du(a.width,2)
y=V.du(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cI(null,null)
x.width=z
x.height=y
w=H.i(C.k.dV(x,"2d"),"$isdI")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.lk(w.getImageData(0,0,x.width,x.height))}}},iZ:{"^":"r:25;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fh(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.T.hT(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.hb()}++z.e}}}],["","",,V,{"^":"",bk:{"^":"a;",
aM:function(a,b){return!0},
i:function(a){return"all"},
$isaD:1},aD:{"^":"a;"},ee:{"^":"a;",
aM:["e6",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aM(0,b))return!0
return!1}],
i:["cF",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaD:1},aq:{"^":"ee;0a",
aM:function(a,b){return!this.e6(0,b)},
i:function(a){return"!["+this.cF(0)+"]"}},ir:{"^":"a;0a,0b",
aM:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.d_(this.a)
y=H.d_(this.b)
return z+".."+y},
$isaD:1,
q:{
R:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.d(P.p("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.h.ay(a,0)
y=C.h.ay(b,0)
x=new V.ir()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},iF:{"^":"a;0a",
ec:function(a){var z,y
if(a.a.length<=0)throw H.d(P.p("May not create a SetMatcher with zero characters."))
z=new H.b4(0,0,[P.F,P.O])
for(y=new H.cU(a,a.gm(a),0,[H.al(a,"v",0)]);y.A();)z.R(0,y.d,!0)
this.a=z},
aM:function(a,b){return this.a.d9(0,b)},
i:function(a){var z=this.a
return P.d3(new H.e8(z,[H.B(z,0)]),0,null)},
$isaD:1,
q:{
u:function(a){var z=new V.iF()
z.ec(a)
return z}}},ex:{"^":"a;a,b,0c,0d",
ghs:function(a){return this.b},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eL(this.a.k(0,b))
w.a=H.b([],[V.aD])
w.c=!1
C.a.h(this.c,w)
return w},
hd:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aM(0,a))return w}return},
i:function(a){return this.b}},eI:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dw(this.b,"\n","\\n")
y=H.dw(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eJ:{"^":"a;a,b,0c",
as:function(a,b,c){var z,y,x
H.y(c,"$isc",[P.h],"$asc")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.x)(c),++y){x=c[y]
this.c.R(0,x,b)}},
i:function(a){return this.b}},j6:{"^":"a;0a,0b,0c",
k:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.ex(this,b)
z.c=H.b([],[V.eL])
this.a.R(0,b,z)}return z},
I:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eJ(this,a)
y=P.h
z.c=new H.b4(0,0,[y,y])
this.b.R(0,a,z)}return z},
dR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.eI])
y=this.c
x=[P.F]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.ay(a,t)
r=y.hd(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d3(w,0,null)
throw H.d(P.p("Untokenizable string [state: "+y.ghs(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d3(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eI(o==null?p.b:o,q,t)}++t}}},
q:{
co:function(){var z,y
z=new V.j6()
y=P.h
z.a=new H.b4(0,0,[y,V.ex])
z.b=new H.b4(0,0,[y,V.eJ])
return z}}},eL:{"^":"ee;b,0c,0a",
i:function(a){return this.b.b+": "+this.cF(0)}}}],["","",,X,{"^":"",dH:{"^":"a;",$isaE:1},hv:{"^":"eB;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.J()
this.x=z}return z}},id:{"^":"a;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.J()
this.f=z}return z},
aQ:[function(a){var z
H.i(a,"$isw")
z=this.f
if(!(z==null))z.w(a)},function(){return this.aQ(null)},"i3","$1","$0","gcH",0,2,0],
saW:function(a){var z,y
if(!J.V(this.b,a)){z=this.b
if(z!=null)z.gu().T(0,this.gcH())
y=this.b
this.b=a
if(a!=null)a.gu().h(0,this.gcH())
z=new D.M("mover",y,this.b,this,[U.a9])
z.b=!0
this.aQ(z)}},
$isaE:1,
$isdH:1},eB:{"^":"a;"}}],["","",,V,{"^":"",
lJ:function(a){P.j5(C.C,new V.lK(a))},
aP:{"^":"a;",
b6:function(a){this.b=new P.hy(C.D)
this.c=null
this.d=H.b([],[[P.c,W.b1]])},
F:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.b1]))
y=a.split("\n")
for(z=y.length,x=[W.b1],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.G(u)
s=this.b.eA(u,0,u.length)
r=s==null?u:s
C.B.dZ(t,H.dw(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbt(this.d),t)}},
dJ:function(a,b){var z,y,x,w
H.y(b,"$isc",[P.h],"$asc")
this.d=H.b([],[[P.c,W.b1]])
z=C.a.l(b,"\n")
y=this.c
if(y==null){y=this.bd()
this.c=y}for(y=y.dR(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)this.bv(y[w])}},
lK:{"^":"r:40;a",
$1:function(a){H.i(a,"$isb7")
P.dv(C.i.dQ(this.a.ghh(),2)+" fps")}},
hc:{"^":"aP;a,0b,0c,0d",
bv:function(a){switch(a.a){case"Class":this.F(a.b,"#551")
break
case"Comment":this.F(a.b,"#777")
break
case"Id":this.F(a.b,"#111")
break
case"Num":this.F(a.b,"#191")
break
case"Reserved":this.F(a.b,"#119")
break
case"String":this.F(a.b,"#171")
break
case"Symbol":this.F(a.b,"#616")
break
case"Type":this.F(a.b,"#B11")
break
case"Whitespace":this.F(a.b,"#111")
break}},
bd:function(){var z,y,x,w
z=V.co()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.u(new H.t("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.u(new H.t("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.u(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.u(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"OpenDoubleStr")
y=V.u(new H.t('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.u(new H.t('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.u(new H.t("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.u(new H.t('"'))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bk())
x=z.k(0,"Start").l(0,"OpenSingleStr")
y=V.u(new H.t("'"))
C.a.h(x.a,y)
y=z.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.u(new H.t("'"))
C.a.h(y.a,x)
x=z.k(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.u(new H.t("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.u(new H.t("'"))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bk())
x=z.k(0,"Start").l(0,"Slash")
y=V.u(new H.t("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.u(new H.t("/"))
C.a.h(y.a,x)
x=z.k(0,"Comment").l(0,"EndComment")
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.aq()
w=[V.aD]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"MLComment")
x=V.u(new H.t("*"))
C.a.h(y.a,x)
x=z.k(0,"MLComment").l(0,"MLCStar")
y=V.u(new H.t("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"MLComment")
x=new V.aq()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"EndComment")
x=V.u(new H.t("/"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Whitespace")
y=V.u(new H.t(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Whitespace").l(0,"Whitespace")
x=V.u(new H.t(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Int")
x.d=x.a.I("Num")
x=z.k(0,"Float")
x.d=x.a.I("Num")
x=z.k(0,"Sym")
x.d=x.a.I("Symbol")
x=z.k(0,"CloseDoubleStr")
x.d=x.a.I("String")
x=z.k(0,"CloseSingleStr")
x.d=x.a.I("String")
x=z.k(0,"EndComment")
x.d=x.a.I("Comment")
x=z.k(0,"Whitespace")
x.d=x.a.I("Whitespace")
x=z.k(0,"Id")
y=x.a.I("Id")
x.d=y
x=[P.h]
y.as(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.as(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.as(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hw:{"^":"aP;a,0b,0c,0d",
bv:function(a){switch(a.a){case"Builtin":this.F(a.b,"#411")
break
case"Comment":this.F(a.b,"#777")
break
case"Id":this.F(a.b,"#111")
break
case"Num":this.F(a.b,"#191")
break
case"Preprocess":this.F(a.b,"#737")
break
case"Reserved":this.F(a.b,"#119")
break
case"Symbol":this.F(a.b,"#611")
break
case"Type":this.F(a.b,"#171")
break
case"Whitespace":this.F(a.b,"#111")
break}},
bd:function(){var z,y,x,w
z=V.co()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.u(new H.t("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.u(new H.t("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.u(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.u(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Slash")
y=V.u(new H.t("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.u(new H.t("/"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Slash").l(0,"Sym").a,new V.bk())
x=z.k(0,"Comment").l(0,"EndComment")
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.aq()
w=[V.aD]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Preprocess")
x=V.u(new H.t("#"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"Preprocess")
y=new V.aq()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.u(new H.t("\n"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"EndPreprocess")
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Whitespace")
x=V.u(new H.t(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Whitespace").l(0,"Whitespace")
y=V.u(new H.t(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Int")
y.d=y.a.I("Num")
y=z.k(0,"Float")
y.d=y.a.I("Num")
y=z.k(0,"Sym")
y.d=y.a.I("Symbol")
y=z.k(0,"EndComment")
y.d=y.a.I("Comment")
y=z.k(0,"EndPreprocess")
y.d=y.a.I("Preprocess")
y=z.k(0,"Whitespace")
y.d=y.a.I("Whitespace")
y=z.k(0,"Id")
x=y.a.I("Id")
y.d=x
y=[P.h]
x.as(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.as(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.as(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
hx:{"^":"aP;a,0b,0c,0d",
bv:function(a){switch(a.a){case"Attr":this.F(a.b,"#911")
this.F("=","#111")
break
case"Id":this.F(a.b,"#111")
break
case"Other":this.F(a.b,"#111")
break
case"Reserved":this.F(a.b,"#119")
break
case"String":this.F(a.b,"#171")
break
case"Symbol":this.F(a.b,"#616")
break}},
bd:function(){var z,y,x
z=V.co()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.u(new H.t("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Id").l(0,"Attr")
x=V.u(new H.t("="))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Sym")
x=V.u(new H.t("</\\-!>="))
C.a.h(y.a,x)
x=z.k(0,"Sym").l(0,"Sym")
y=V.u(new H.t("</\\-!>="))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"OpenStr")
x=V.u(new H.t('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenStr").l(0,"CloseStr")
y=V.u(new H.t('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenStr").l(0,"EscStr")
x=V.u(new H.t("\\"))
C.a.h(y.a,x)
x=z.k(0,"EscStr").l(0,"OpenStr")
y=V.u(new H.t('"'))
C.a.h(x.a,y)
C.a.h(z.k(0,"OpenStr").l(0,"OpenStr").a,new V.bk())
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.bk())
y=z.k(0,"Other").l(0,"Other")
x=new V.aq()
x.a=H.b([],[V.aD])
C.a.h(y.a,x)
y=V.u(new H.t('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Sym")
y.d=y.a.I("Symbol")
y=z.k(0,"CloseStr")
y.d=y.a.I("String")
y=z.k(0,"Id")
x=y.a.I("Id")
y.d=x
x.as(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.k(0,"Attr")
x.d=x.a.I("Attr")
x=z.k(0,"Other")
x.d=x.a.I("Other")
return z}},
ig:{"^":"aP;a,0b,0c,0d",
dJ:function(a,b){H.y(b,"$isc",[P.h],"$asc")
this.d=H.b([],[[P.c,W.b1]])
this.F(C.a.l(b,"\n"),"#111")},
bv:function(a){},
bd:function(){return}},
iK:{"^":"a;0a,0b",
ee:function(a,b){var z,y,x,w,v,u,t
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
t=W.a6
W.Z(z,"scroll",H.l(new V.iN(x),{func:1,ret:-1,args:[t]}),!1,t)},
d4:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.y(a,"$isc",[P.h],"$asc")
this.fp()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.dR(C.a.hm(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fM(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.k(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.ft(C.u,s,C.p,!1)
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
dU:function(a){var z,y,x,w
z=new V.hc("dart")
z.b6("dart")
y=new V.hw("glsl")
y.b6("glsl")
x=new V.hx("html")
x.b6("html")
w=C.a.he(H.b([z,y,x],[V.aP]),new V.iO(a))
if(w!=null)return w
z=new V.ig("plain")
z.b6("plain")
return z},
d2:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.y(a2,"$isc",[P.h],"$asc")
z=H.b([],[P.F])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.dq(w).bz(w,"+")){C.a.R(a2,x,C.h.b5(w,1))
C.a.h(z,1)
y=!0}else if(C.h.bz(w,"-")){C.a.R(a2,x,C.h.b5(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.dU(a0)
v.dJ(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.ft(C.u,a,C.p,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dy(null)
n.href="#"+r
n.textContent=a
o.appendChild(n)
p.appendChild(o)
q.appendChild(p)
s.appendChild(q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.k(z,x)
g=z[x]
if(g===0){++l;++m
i.textContent=""+l
h.textContent=""+m}else if(g>0){j.className="codeTableRow codeLineLightGreen"
i.className="codeLineNums codeLineGreen codeLineCenter"
h.className="codeLineNums codeLineGreen";++m
i.textContent="+"
h.textContent=""+m}else if(g<0){j.className="codeTableRow codeLineLightRed"
i.className="codeLineNums codeLineRed"
h.className="codeLineNums codeLineRed codeLineCenter";++l
i.textContent=""+l
h.textContent="-"}f=u.createElement("td")
f.className="codeLineText"
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.x)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.x)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gS(w);b.A();)h.appendChild(b.gJ(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
fp:function(){var z,y,x,w
if(this.b!=null)return
z=V.co()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Bold")
x=V.u(new H.t("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Bold").l(0,"Bold")
x=new V.aq()
w=[V.aD]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("*"))
C.a.h(x.a,y)
y=z.k(0,"Bold").l(0,"BoldEnd")
x=V.u(new H.t("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Italic")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Italic").l(0,"Italic")
x=new V.aq()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("_"))
C.a.h(x.a,y)
y=z.k(0,"Italic").l(0,"ItalicEnd")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Code")
x=V.u(new H.t("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Code").l(0,"Code")
x=new V.aq()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("`"))
C.a.h(x.a,y)
y=z.k(0,"Code").l(0,"CodeEnd")
x=V.u(new H.t("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"LinkHead")
x=V.u(new H.t("["))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"LinkHead").l(0,"LinkTail")
x=V.u(new H.t("|"))
C.a.h(y.a,x)
x=z.k(0,"LinkHead").l(0,"LinkEnd")
y=V.u(new H.t("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkHead").l(0,"LinkHead")
y=new V.aq()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.u(new H.t("|]"))
C.a.h(y.a,x)
x=z.k(0,"LinkTail").l(0,"LinkEnd")
y=V.u(new H.t("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkTail").l(0,"LinkTail")
y=new V.aq()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.u(new H.t("|]"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.bk())
x=z.k(0,"Other").l(0,"Other")
y=new V.aq()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.u(new H.t("*_`["))
C.a.h(y.a,x)
x=z.k(0,"BoldEnd")
x.d=x.a.I("Bold")
x=z.k(0,"ItalicEnd")
x.d=x.a.I("Italic")
x=z.k(0,"CodeEnd")
x.d=x.a.I("Code")
x=z.k(0,"LinkEnd")
x.d=x.a.I("Link")
x=z.k(0,"Other")
x.d=x.a.I("Other")
this.b=z},
q:{
iL:function(a,b){var z=new V.iK()
z.ee(a,!0)
return z}}},
iN:{"^":"r:25;a",
$1:function(a){P.eG(C.l,new V.iM(this.a))}},
iM:{"^":"r:2;a",
$0:function(){var z,y,x
z=C.i.ad(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
iO:{"^":"r:41;a",
$1:function(a){return H.i(a,"$isaP").a===this.a}}}],["","",,B,{"^":"",
fI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=V.iL("Test 010",!0)
y=W.cI(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.d4(H.b(["A test of the Material Lighting shader with solid color and ","a directional light= with a cube texture bump map."],x))
z.d4(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.q(P.p("Failed to find an element with the identifier, testCanvas."))
v=E.j3(w,!0,!0,!0,!1)
u=new E.aR()
u.a=""
u.b=!0
x=E.aR
t=O.cK(x)
u.y=t
t.b4(u.ght(),u.ghv())
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
u.scD(0,null)
u.saW(null)
s=F.ev()
F.bK(s,null,null,1,1,1,0,0,1)
F.bK(s,null,null,1,1,0,1,0,3)
F.bK(s,null,null,1,1,0,0,1,2)
F.bK(s,null,null,1,1,-1,0,0,0)
F.bK(s,null,null,1,1,0,-1,0,0)
F.bK(s,null,null,1,1,0,0,-1,3)
s.aF()
u.scD(0,s)
t=new U.e_()
r=U.a9
t.bD(r)
t.b4(t.geN(),t.gf8())
t.e=null
t.f=V.bX()
t.r=0
q=v.r
p=new U.jp()
o=U.cL()
o.scv(0,!0)
o.scm(6.283185307179586)
o.sco(0)
o.sa1(0,0)
o.scn(100)
o.sN(0)
o.sc9(0.5)
p.b=o
n=p.gaC()
o.gu().h(0,n)
o=U.cL()
o.scv(0,!0)
o.scm(6.283185307179586)
o.sco(0)
o.sa1(0,0)
o.scn(100)
o.sN(0)
o.sc9(0.5)
p.c=o
o.gu().h(0,n)
p.d=null
p.e=!1
p.f=!1
p.r=!1
p.x=2.5
p.y=2.5
p.z=2
p.Q=4
p.cx=!1
p.ch=!1
p.cy=0
p.db=0
p.dx=null
p.dy=0
p.fr=null
p.fx=null
m=new X.ax(!1,!1,!1)
l=p.d
p.d=m
o=[X.ax]
n=new D.M("modifiers",l,m,p,o)
n.b=!0
p.M(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.M("invertX",n,!1,p,[P.O])
n.b=!0
p.M(n)}n=p.r
if(n!==!0){p.r=!0
n=new D.M("invertY",n,!0,p,[P.O])
n.b=!0
p.M(n)}p.aU(q)
t.h(0,p)
q=v.r
p=new U.jo()
n=U.cL()
n.scv(0,!0)
n.scm(6.283185307179586)
n.sco(0)
n.sa1(0,0)
n.scn(100)
n.sN(0)
n.sc9(0.2)
p.b=n
n.gu().h(0,p.gaC())
p.c=null
p.d=!1
p.e=2.5
p.f=2
p.r=4
p.y=!1
p.x=!1
p.z=0
p.Q=null
p.ch=0
p.cx=null
p.cy=null
m=new X.ax(!0,!1,!1)
l=p.c
p.c=m
n=new D.M("modifiers",l,m,p,o)
n.b=!0
p.M(n)
p.aU(q)
t.h(0,p)
q=v.r
p=new U.jq()
p.c=0.01
p.d=0
p.e=0
m=new X.ax(!1,!1,!1)
p.b=m
o=new D.M("modifiers",null,m,p,o)
o.b=!0
p.M(o)
p.aU(q)
t.h(0,p)
u.saW(t)
k=new O.hU()
t=O.cK(V.av)
k.e=t
t.b4(k.geP(),k.geQ())
t=new O.b5(k,"emission")
t.c=C.b
t.f=new V.a3(0,0,0)
k.f=t
t=new O.b5(k,"ambient")
t.c=C.b
t.f=new V.a3(0,0,0)
k.r=t
t=new O.b5(k,"diffuse")
t.c=C.b
t.f=new V.a3(0,0,0)
k.x=t
t=new O.b5(k,"invDiffuse")
t.c=C.b
t.f=new V.a3(0,0,0)
k.y=t
t=new O.i0(k,"specular")
t.c=C.b
t.f=new V.a3(0,0,0)
t.ch=100
k.z=t
t=new O.hY(k,"bump")
t.c=C.b
k.Q=t
k.ch=null
t=new O.b5(k,"reflect")
t.c=C.b
t.f=new V.a3(0,0,0)
k.cx=t
t=new O.i_(k,"refract")
t.c=C.b
t.f=new V.a3(0,0,0)
t.ch=1
k.cy=t
t=new O.hX(k,"alpha")
t.c=C.b
t.f=1
k.db=t
t=new D.hJ()
t.bD(D.Y)
t.e=H.b([],[D.ca])
t.f=H.b([],[D.ih])
t.r=H.b([],[D.iP])
t.x=H.b([],[D.j_])
t.y=H.b([],[D.j0])
t.z=H.b([],[D.j1])
t.Q=null
t.ch=null
t.cC(t.geO(),t.gf7(),t.gf9())
k.dx=t
q=t.Q
if(q==null){q=D.J()
t.Q=q
t=q}else t=q
t.h(0,k.gff())
t=k.dx
q=t.ch
if(q==null){q=D.J()
t.ch=q
t=q}else t=q
t.h(0,k.gb7())
k.dy=null
t=k.dx
q=U.dM(V.eg(new V.aF(0,0,0),new V.N(0,1,0),new V.N(1,1,-3)))
j=new V.a3(1,1,1)
p=new D.ca()
p.c=new V.a3(1,1,1)
p.a=new V.N(0,0,1)
l=p.b
p.b=q
q.gu().h(0,p.gel())
r=new D.M("mover",l,p.b,p,[r])
r.b=!0
p.aw(r)
if(!p.c.t(0,j)){l=p.c
p.c=j
r=new D.M("color",l,j,p,[V.a3])
r.b=!0
p.aw(r)}t.h(0,p)
t=k.r
t.sai(0,new V.a3(0,0,1))
t=k.x
t.sai(0,new V.a3(0,1,0))
t=k.z
t.sai(0,new V.a3(1,0,0))
t=k.z
if(t.c===C.b){t.c=C.e
t.bC()
t.bW(100)
r=t.a
r.a=null
r.X(null)}t.bW(10)
t=k.Q
r=v.f
q=r.a
i=q.createTexture()
q.bindTexture(34067,i)
q.texParameteri(34067,10242,10497)
q.texParameteri(34067,10243,10497)
q.texParameteri(34067,10241,9729)
q.texParameteri(34067,10240,9729)
q.bindTexture(34067,null)
h=new T.eE()
h.a=0
h.b=i
h.c=!1
h.d=0
r.aB(h,i,"../resources/diceBumpMap/posx.png",34069,!1,!1)
r.aB(h,i,"../resources/diceBumpMap/negx.png",34070,!1,!1)
r.aB(h,i,"../resources/diceBumpMap/posy.png",34071,!1,!1)
r.aB(h,i,"../resources/diceBumpMap/negy.png",34072,!1,!1)
r.aB(h,i,"../resources/diceBumpMap/posz.png",34073,!1,!1)
r.aB(h,i,"../resources/diceBumpMap/negz.png",34074,!1,!1)
r=t.c
if(r!==C.c){if(r===C.b)t.aR()
t.c=C.c
t.fm(null)
r=t.a
r.a=null
r.X(null)}t.fn(h)
t=new M.hn()
x=O.cK(x)
t.d=x
x.b4(t.geS(),t.geT())
t.e=null
t.f=null
t.r=null
t.x=null
g=new X.id()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saW(null)
x=g.c
if(!$.m.$2(x,1.0471975511965976)){l=g.c
g.c=1.0471975511965976
x=new D.M("fov",l,1.0471975511965976,g,[P.z])
x.b=!0
g.aQ(x)}x=g.d
if(!$.m.$2(x,0.1)){l=g.d
g.d=0.1
x=new D.M("near",l,0.1,g,[P.z])
x.b=!0
g.aQ(x)}x=g.e
if(!$.m.$2(x,2000)){l=g.e
g.e=2000
x=new D.M("far",l,2000,g,[P.z])
x.b=!0
g.aQ(x)}x=t.a
if(x!==g){if(x!=null)x.gu().T(0,t.gaf())
l=t.a
t.a=g
g.gu().h(0,t.gaf())
x=new D.M("camera",l,t.a,t,[X.dH])
x.b=!0
t.ax(x)}f=new X.hv()
x=new V.c7(0,0,0,1)
f.a=x
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
x=V.er(0,0,1,1)
f.r=x
x=t.b
if(x!==f){if(x!=null)x.gu().T(0,t.gaf())
l=t.b
t.b=f
f.gu().h(0,t.gaf())
x=new D.M("target",l,t.b,t,[X.eB])
x.b=!0
t.ax(x)}t.sdO(null)
t.sdO(k)
t.d.h(0,u)
t.a.saW(U.dM(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
x=v.d
if(x!==t){if(x!=null)x.gu().T(0,v.gcG())
v.d=t
t.gu().h(0,v.gcG())
v.eh()}x=v.z
if(x==null){x=D.J()
v.z=x}t={func:1,ret:-1,args:[D.w]}
r=H.l(new B.lC(z,k),t)
q=x.b
if(q==null){t=H.b([],[t])
x.b=t
x=t}else x=q
C.a.h(x,r)
V.lJ(v)},
lC:{"^":"r:9;a,b",
$1:function(a){var z,y,x,w
H.i(a,"$isw")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.d2("Vertex Shader","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.d2("Fragment Shader","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e3.prototype
return J.e2.prototype}if(typeof a=="string")return J.ci.prototype
if(a==null)return J.e4.prototype
if(typeof a=="boolean")return J.hE.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.a)return a
return J.cz(a)}
J.c1=function(a){if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.a)return a
return J.cz(a)}
J.cy=function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.a)return a
return J.cz(a)}
J.lo=function(a){if(typeof a=="number")return J.ch.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cq.prototype
return a}
J.dq=function(a){if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cq.prototype
return a}
J.bh=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.a)return a
return J.cz(a)}
J.V=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).t(a,b)}
J.fO=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lo(a).a7(a,b)}
J.fP=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lz(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c1(a).j(a,b)}
J.fQ=function(a,b,c,d){return J.bh(a).d3(a,b,c,d)}
J.cC=function(a,b,c){return J.c1(a).h2(a,b,c)}
J.cD=function(a,b){return J.cy(a).C(a,b)}
J.fR=function(a,b){return J.cy(a).K(a,b)}
J.fS=function(a){return J.bh(a).gfZ(a)}
J.aZ=function(a){return J.I(a).gV(a)}
J.b_=function(a){return J.cy(a).gS(a)}
J.b0=function(a){return J.c1(a).gm(a)}
J.fT=function(a){return J.bh(a).gcr(a)}
J.fU=function(a){return J.bh(a).ghS(a)}
J.dx=function(a){return J.cy(a).hJ(a)}
J.fV=function(a,b,c){return J.dq(a).aP(a,b,c)}
J.fW=function(a){return J.dq(a).i_(a)}
J.a4=function(a){return J.I(a).i(a)}
I.aX=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.c5.prototype
C.k=W.cH.prototype
C.B=W.b1.prototype
C.E=J.n.prototype
C.a=J.b3.prototype
C.F=J.e2.prototype
C.f=J.e3.prototype
C.G=J.e4.prototype
C.i=J.ch.prototype
C.h=J.ci.prototype
C.N=J.bU.prototype
C.R=H.i7.prototype
C.S=W.i8.prototype
C.v=J.ie.prototype
C.T=P.d0.prototype
C.w=W.iW.prototype
C.o=J.cq.prototype
C.x=W.bI.prototype
C.y=W.jD.prototype
C.z=new P.ic()
C.A=new P.js()
C.j=new P.kp()
C.b=new A.c8(0,"ColorSourceType.None")
C.e=new A.c8(1,"ColorSourceType.Solid")
C.d=new A.c8(2,"ColorSourceType.Texture2D")
C.c=new A.c8(3,"ColorSourceType.TextureCube")
C.l=new P.bn(0)
C.C=new P.bn(5e6)
C.D=new P.hz("element",!0,!1,!1,!1)
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.J=function(getTagFallback) {
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
C.K=function() {
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
C.L=function(hooks) {
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
C.M=function(hooks) {
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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.O=H.b(I.aX(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.P=H.b(I.aX(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.Q=H.b(I.aX([]),[P.h])
C.u=H.b(I.aX([0,0,65498,45055,65535,34815,65534,18431]),[P.F])
C.m=H.b(I.aX(["bind","if","ref","repeat","syntax"]),[P.h])
C.n=H.b(I.aX(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.p=new P.jr(!1)
$.au=0
$.bl=null
$.dC=null
$.dh=!1
$.fF=null
$.fA=null
$.fL=null
$.cx=null
$.cA=null
$.dr=null
$.bd=null
$.bM=null
$.bN=null
$.di=!1
$.S=C.j
$.aC=null
$.cM=null
$.dY=null
$.dX=null
$.dT=null
$.dS=null
$.dR=null
$.dQ=null
$.m=V.i1()
$.el=null
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
I.$lazy(y,x,w)}})(["dP","$get$dP",function(){return H.fE("_$dart_dartClosure")},"cQ","$get$cQ",function(){return H.fE("_$dart_js")},"eM","$get$eM",function(){return H.az(H.cp({
toString:function(){return"$receiver$"}}))},"eN","$get$eN",function(){return H.az(H.cp({$method$:null,
toString:function(){return"$receiver$"}}))},"eO","$get$eO",function(){return H.az(H.cp(null))},"eP","$get$eP",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eT","$get$eT",function(){return H.az(H.cp(void 0))},"eU","$get$eU",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eR","$get$eR",function(){return H.az(H.eS(null))},"eQ","$get$eQ",function(){return H.az(function(){try{null.$method$}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.az(H.eS(void 0))},"eV","$get$eV",function(){return H.az(function(){try{(void 0).$method$}catch(z){return z.message}}())},"de","$get$de",function(){return P.jE()},"bO","$get$bO",function(){return[]},"fs","$get$fs",function(){return P.iv("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dN","$get$dN",function(){return{}},"fd","$get$fd",function(){return P.ea(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"df","$get$df",function(){return P.e9(P.h,P.bT)},"f6","$get$f6",function(){return Z.aj(0)},"f4","$get$f4",function(){return Z.aj(511)},"aK","$get$aK",function(){return Z.aj(1)},"aJ","$get$aJ",function(){return Z.aj(2)},"aI","$get$aI",function(){return Z.aj(4)},"aL","$get$aL",function(){return Z.aj(8)},"aM","$get$aM",function(){return Z.aj(16)},"bG","$get$bG",function(){return Z.aj(32)},"bH","$get$bH",function(){return Z.aj(64)},"f5","$get$f5",function(){return Z.aj(96)},"bb","$get$bb",function(){return Z.aj(128)},"aH","$get$aH",function(){return Z.aj(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.L,args:[F.ao]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[P.F,[P.e,E.aR]]},{func:1,ret:P.L,args:[D.w]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.h,args:[P.F]},{func:1,ret:P.O,args:[W.C]},{func:1,ret:P.O,args:[W.T,P.h,P.h,W.c_]},{func:1,ret:W.C},{func:1,args:[,]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.O,args:[W.ay]},{func:1,ret:P.O,args:[P.h]},{func:1,ret:-1,args:[P.F,[P.e,V.av]]},{func:1,ret:-1,args:[P.F,[P.e,U.a9]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.F,[P.e,D.Y]]},{func:1,ret:P.L,args:[W.a6]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:P.O,args:[P.z,P.z]},{func:1,ret:P.L,args:[P.a_]},{func:1,ret:P.O,args:[[P.e,D.Y]]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:W.T,args:[W.C]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,args:[,P.h]},{func:1,ret:P.L,args:[F.b9,P.z,P.z]},{func:1,ret:-1,args:[W.bI]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.L,args:[P.b7]},{func:1,ret:P.O,args:[V.aP]},{func:1,ret:P.L,args:[,],opt:[,]},{func:1,args:[P.h]},{func:1,ret:-1,args:[P.a],opt:[P.ar]}]
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
if(x==y)H.lM(d||a)
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
Isolate.aX=a.aX
Isolate.dn=a.dn
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
if(typeof dartMainRunner==="function")dartMainRunner(B.fI,[])
else B.fI([])})})()
//# sourceMappingURL=test.dart.js.map
