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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dV(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dW=function(){}
var dart=[["","",,H,{"^":"",o7:{"^":"b;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
e_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cW:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dY==null){H.ns()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cj("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dg()]
if(v!=null)return v
v=H.nv(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$dg(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
r:{"^":"b;",
v:function(a,b){return a===b},
gW:function(a){return H.bR(a)},
i:["eW",function(a){return"Instance of '"+H.bo(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
iI:{"^":"r;",
i:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isQ:1},
eF:{"^":"r;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gW:function(a){return 0},
$isI:1},
dh:{"^":"r;",
gW:function(a){return 0},
i:["eY",function(a){return String(a)}]},
jl:{"^":"dh;"},
cL:{"^":"dh;"},
cf:{"^":"dh;",
i:function(a){var z=a[$.$get$en()]
if(z==null)return this.eY(a)
return"JavaScript function for "+H.k(J.aa(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscd:1},
bk:{"^":"r;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.p(P.D("add"))
a.push(b)},
a0:function(a,b){var z
if(!!a.fixed$length)H.p(P.D("remove"))
for(z=0;z<a.length;++z)if(J.V(a[z],b)){a.splice(z,1)
return!0}return!1},
A:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aK(a))}},
m:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.n(z,y,H.k(a[y]))
return z.join(b)},
io:function(a){return this.m(a,"")},
ie:function(a,b,c,d){var z,y,x
H.z(b,d)
H.l(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aK(a))}return y},
ib:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.Q,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aK(a))}throw H.a(H.de())},
ia:function(a,b){return this.ib(a,b,null)},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bU:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a2(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gas:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.de())},
aD:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.p(P.D("fill range"))
P.b_(b,c,a.length,null,null,null)
for(z=b;z.O(0,c);z=z.D(0,1))a[z]=d},
dK:function(a,b){var z,y
H.l(b,{func:1,ret:P.Q,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aK(a))}return!1},
V:function(a,b){var z
for(z=0;z<a.length;++z)if(J.V(a[z],b))return!0
return!1},
i:function(a){return P.dd(a,"[","]")},
gZ:function(a){return new J.aA(a,a.length,0,[H.y(a,0)])},
gW:function(a){return H.bR(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.D("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cq(b,"newLength",null))
if(b<0)throw H.a(P.a2(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aR(a,b))
if(b>=a.length||b<0)throw H.a(H.aR(a,b))
return a[b]},
n:function(a,b,c){H.F(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.p(P.D("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aR(a,b))
if(b>=a.length||b<0)throw H.a(H.aR(a,b))
a[b]=c},
$isj:1,
$ise:1,
t:{
iH:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cq(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a2(a,0,4294967295,"length",null))
return J.eC(new Array(a),b)},
eC:function(a,b){return J.bM(H.c(a,[b]))},
bM:function(a){H.c7(a)
a.fixed$length=Array
return a}}},
o6:{"^":"bk;$ti"},
aA:{"^":"b;a,b,c,0d,$ti",
gL:function(a){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cB:{"^":"r;",
j2:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.D(""+a+".toInt()"))},
cC:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.D(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.D(""+a+".round()"))},
eG:function(a,b){var z,y
if(b>20)throw H.a(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bf:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Y(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.D("Unexpected toString result: "+z))
x=J.aS(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.p("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
bj:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f1:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dB(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dB(a,b)},
dB:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.D("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
aP:function(a,b){var z
if(a>0)z=this.dz(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hq:function(a,b){if(b<0)throw H.a(H.an(b))
return this.dz(a,b)},
dz:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.a(H.an(b))
return a<b},
$isC:1,
$isa5:1},
eE:{"^":"cB;",$isn:1},
eD:{"^":"cB;"},
cC:{"^":"r;",
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aR(a,b))
if(b<0)throw H.a(H.aR(a,b))
if(b>=a.length)H.p(H.aR(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.a(H.aR(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.H(b)
if(typeof b!=="string")throw H.a(P.cq(b,null,null))
return a+b},
aZ:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.an(b))
c=P.b_(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.an(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ac:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.an(c))
if(typeof c!=="number")return c.O()
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a3:function(a,b){return this.ac(a,b,0)},
u:function(a,b,c){H.F(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.an(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.a(P.cH(b,null,null))
if(b>c)throw H.a(P.cH(b,null,null))
if(c>a.length)throw H.a(P.cH(c,null,null))
return a.substring(b,c)},
an:function(a,b){return this.u(a,b,null)},
j5:function(a){return a.toLowerCase()},
p:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iE:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.p(c,z)+a},
ag:function(a,b){return this.iE(a,b," ")},
ek:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ej:function(a,b){return this.ek(a,b,0)},
i_:function(a,b,c){if(c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
return H.hy(a,b,c)},
i:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseV:1,
$isf:1}}],["","",,H,{"^":"",
cX:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
de:function(){return new P.dx("No element")},
iG:function(){return new P.dx("Too many elements")},
u:{"^":"kz;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.Y(this.a,b)},
$ascM:function(){return[P.n]},
$asx:function(){return[P.n]},
$asj:function(){return[P.n]},
$ase:function(){return[P.n]}},
eu:{"^":"j;"},
cE:{"^":"eu;$ti",
gZ:function(a){return new H.dk(this,this.gl(this),0,[H.ao(this,"cE",0)])},
cV:function(a,b){return this.eX(0,H.l(b,{func:1,ret:P.Q,args:[H.ao(this,"cE",0)]}))}},
dk:{"^":"b;a,b,c,0d,$ti",
gL:function(a){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.aS(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aK(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.H(z,w);++this.c
return!0}},
j_:{"^":"j;a,b,$ti",
gZ:function(a){return new H.j0(J.b6(this.a),this.b,this.$ti)},
gl:function(a){return J.ar(this.a)},
H:function(a,b){return this.b.$1(J.co(this.a,b))},
$asj:function(a,b){return[b]}},
j0:{"^":"df;0a,b,c,$ti",
C:function(){var z=this.b
if(z.C()){this.a=this.c.$1(z.gL(z))
return!0}this.a=null
return!1},
gL:function(a){return this.a},
$asdf:function(a,b){return[b]}},
j1:{"^":"cE;a,b,$ti",
gl:function(a){return J.ar(this.a)},
H:function(a,b){return this.b.$1(J.co(this.a,b))},
$ascE:function(a,b){return[b]},
$asj:function(a,b){return[b]}},
dK:{"^":"j;a,b,$ti",
gZ:function(a){return new H.l1(J.b6(this.a),this.b,this.$ti)}},
l1:{"^":"df;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gL(z)))return!0
return!1},
gL:function(a){var z=this.a
return z.gL(z)}},
cx:{"^":"b;$ti"},
cM:{"^":"b;$ti",
n:function(a,b,c){H.F(b)
H.z(c,H.ao(this,"cM",0))
throw H.a(P.D("Cannot modify an unmodifiable list"))},
aD:function(a,b,c,d){H.z(d,H.ao(this,"cM",0))
throw H.a(P.D("Cannot modify an unmodifiable list"))}},
kz:{"^":"cD+cM;"}}],["","",,H,{"^":"",
i_:function(){throw H.a(P.D("Cannot modify unmodifiable Map"))},
nl:function(a){return init.types[H.F(a)]},
hr:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isJ},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aa(a)
if(typeof z!=="string")throw H.a(H.an(a))
return z},
bR:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jx:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.H(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.G(w,u)|32)>x)return}return parseInt(a,b)},
bo:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.P||!!J.K(a).$iscL){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.G(w,0)===36)w=C.b.an(w,1)
r=H.dZ(H.c7(H.be(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jp:function(){if(!!self.location)return self.location.href
return},
eY:function(a){var z,y,x,w,v
H.c7(a)
z=J.ar(a)
if(typeof z!=="number")return z.eQ()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jy:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.an(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aP(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.an(w))}return H.eY(z)},
eZ:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.an(x))
if(x<0)throw H.a(H.an(x))
if(x>65535)return H.jy(a)}return H.eY(a)},
jz:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eQ()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bS:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aP(z,10))>>>0,56320|z&1023)}}throw H.a(P.a2(a,0,1114111,null,null))},
am:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jw:function(a){return a.b?H.am(a).getUTCFullYear()+0:H.am(a).getFullYear()+0},
ju:function(a){return a.b?H.am(a).getUTCMonth()+1:H.am(a).getMonth()+1},
jq:function(a){return a.b?H.am(a).getUTCDate()+0:H.am(a).getDate()+0},
jr:function(a){return a.b?H.am(a).getUTCHours()+0:H.am(a).getHours()+0},
jt:function(a){return a.b?H.am(a).getUTCMinutes()+0:H.am(a).getMinutes()+0},
jv:function(a){return a.b?H.am(a).getUTCSeconds()+0:H.am(a).getSeconds()+0},
js:function(a){return a.b?H.am(a).getUTCMilliseconds()+0:H.am(a).getMilliseconds()+0},
o:function(a){throw H.a(H.an(a))},
h:function(a,b){if(a==null)J.ar(a)
throw H.a(H.aR(a,b))},
aR:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.F(J.ar(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.W(b,a,"index",null,z)
return P.cH(b,"index",null)},
ng:function(a,b,c){if(a>c)return new P.cG(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cG(a,c,!0,b,"end","Invalid value")
return new P.aI(!0,b,"end",null)},
an:function(a){return new P.aI(!0,a,null,null)},
nb:function(a){if(typeof a!=="number")throw H.a(H.an(a))
return a},
a:function(a){var z
if(a==null)a=new P.eU()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hz})
z.name=""}else z.toString=H.hz
return z},
hz:function(){return J.aa(this.dartException)},
p:function(a){throw H.a(a)},
B:function(a){throw H.a(P.aK(a))},
ad:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nI(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aP(x,16)&8191)===10)switch(w){case 438:return z.$1(H.di(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eT(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fi()
u=$.$get$fj()
t=$.$get$fk()
s=$.$get$fl()
r=$.$get$fp()
q=$.$get$fq()
p=$.$get$fn()
$.$get$fm()
o=$.$get$fs()
n=$.$get$fr()
m=v.af(y)
if(m!=null)return z.$1(H.di(H.H(y),m))
else{m=u.af(y)
if(m!=null){m.method="call"
return z.$1(H.di(H.H(y),m))}else{m=t.af(y)
if(m==null){m=s.af(y)
if(m==null){m=r.af(y)
if(m==null){m=q.af(y)
if(m==null){m=p.af(y)
if(m==null){m=s.af(y)
if(m==null){m=o.af(y)
if(m==null){m=n.af(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eT(H.H(y),m))}}return z.$1(new H.ky(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f2()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f2()
return a},
bF:function(a){var z
if(a==null)return new H.fZ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fZ(a)},
nj:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.n(0,a[y],a[x])}return b},
nu:function(a,b,c,d,e,f){H.d(a,"$iscd")
switch(H.F(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.t("Unsupported number of arguments for wrapped closure"))},
bD:function(a,b){var z
H.F(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nu)
a.$identity=z
return z},
hW:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$ise){z.$reflectionInfo=d
x=H.jD(z).r}else x=d
w=e?Object.create(new H.k_().constructor.prototype):Object.create(new H.d3(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aJ
if(typeof u!=="number")return u.D()
$.aJ=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ei(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nl,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ec:H.d4
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ei(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hT:function(a,b,c,d){var z=H.d4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ei:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hV(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hT(y,!w,z,b)
if(y===0){w=$.aJ
if(typeof w!=="number")return w.D()
$.aJ=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bI
if(v==null){v=H.cs("self")
$.bI=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aJ
if(typeof w!=="number")return w.D()
$.aJ=w+1
t+=w
w="return function("+t+"){return this."
v=$.bI
if(v==null){v=H.cs("self")
$.bI=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
hU:function(a,b,c,d){var z,y
z=H.d4
y=H.ec
switch(b?-1:a){case 0:throw H.a(H.jN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hV:function(a,b){var z,y,x,w,v,u,t,s
z=$.bI
if(z==null){z=H.cs("self")
$.bI=z}y=$.eb
if(y==null){y=H.cs("receiver")
$.eb=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hU(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aJ
if(typeof y!=="number")return y.D()
$.aJ=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aJ
if(typeof y!=="number")return y.D()
$.aJ=y+1
return new Function(z+y+"}")()},
dV:function(a,b,c,d,e,f,g){var z,y
z=J.bM(H.c7(b))
H.F(c)
y=!!J.K(d).$ise?J.bM(d):d
return H.hW(a,z,c,y,!!e,f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aE(a,"String"))},
nh:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aE(a,"double"))},
nA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aE(a,"num"))},
dT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aE(a,"bool"))},
F:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aE(a,"int"))},
hw:function(a,b){throw H.a(H.aE(a,H.H(b).substring(3)))},
nC:function(a,b){var z=J.aS(b)
throw H.a(H.hS(a,z.u(b,3,z.gl(b))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.hw(a,b)},
i:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.nC(a,b)},
c7:function(a){if(a==null)return a
if(!!J.K(a).$ise)return a
throw H.a(H.aE(a,"List"))},
ht:function(a,b){if(a==null)return a
if(!!J.K(a).$ise)return a
if(J.K(a)[b])return a
H.hw(a,b)},
hn:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.F(z)]
else return a.$S()}return},
cm:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hn(J.K(a))
if(z==null)return!1
y=H.hq(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dQ)return a
$.dQ=!0
try{if(H.cm(a,b))return a
z=H.cn(b)
y=H.aE(a,z)
throw H.a(y)}finally{$.dQ=!1}},
dX:function(a,b){if(a!=null&&!H.dU(a,b))H.p(H.aE(a,H.cn(b)))
return a},
hi:function(a){var z
if(a instanceof H.m){z=H.hn(J.K(a))
if(z!=null)return H.cn(z)
return"Closure"}return H.bo(a)},
nH:function(a){throw H.a(new P.i3(H.H(a)))},
ho:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
be:function(a){if(a==null)return
return a.$ti},
p1:function(a,b,c){return H.bG(a["$as"+H.k(c)],H.be(b))},
b5:function(a,b,c,d){var z
H.H(c)
H.F(d)
z=H.bG(a["$as"+H.k(c)],H.be(b))
return z==null?null:z[d]},
ao:function(a,b,c){var z
H.H(b)
H.F(c)
z=H.bG(a["$as"+H.k(b)],H.be(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.F(b)
z=H.be(a)
return z==null?null:z[b]},
cn:function(a){var z=H.bf(a,null)
return z},
bf:function(a,b){var z,y
H.v(b,"$ise",[P.f],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dZ(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.F(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.k(b[y])}if('func' in a)return H.n1(a,b)
if('futureOr' in a)return"FutureOr<"+H.bf("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.v(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.b.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.bf(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bf(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bf(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bf(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.ni(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.bf(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dZ:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$ise",[P.f],"$ase")
if(a==null)return""
z=new P.aq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bf(u,c)}v="<"+z.i(0)+">"
return v},
bG:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c3:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.be(a)
y=J.K(a)
if(y[b]==null)return!1
return H.hl(H.bG(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.H(b)
H.c7(c)
H.H(d)
if(a==null)return a
z=H.c3(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dZ(c,0,null)
throw H.a(H.aE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hl:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.az(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.az(a[y],b,c[y],d))return!1
return!0},
p_:function(a,b,c){return a.apply(b,H.bG(J.K(b)["$as"+H.k(c)],H.be(b)))},
hs:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="I"||a===-1||a===-2||H.hs(z)}return!1},
dU:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="I"||b===-1||b===-2||H.hs(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dU(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cm(a,b)}y=J.K(a).constructor
x=H.be(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.az(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dU(a,b))throw H.a(H.aE(a,H.cn(b)))
return a},
az:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.az(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.hq(a,b,c,d)
if('func' in a)return c.builtin$cls==="cd"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.az("type" in a?a.type:null,b,x,d)
else if(H.az(a,b,x,d))return!0
else{if(!('$is'+"bL" in y.prototype))return!1
w=y.prototype["$as"+"bL"]
v=H.bG(w,z?a.slice(1):null)
return H.az(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cn(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hl(H.bG(r,z),b,u,d)},
hq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.az(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.az(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.az(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.az(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nz(m,b,l,d)},
nz:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.az(c[w],d,a[w],b))return!1}return!0},
p0:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
nv:function(a){var z,y,x,w,v,u
z=H.H($.hp.$1(a))
y=$.cV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cY[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.hk.$2(a,z))
if(z!=null){y=$.cV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cY[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cZ(x)
$.cV[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cY[z]=x
return x}if(v==="-"){u=H.cZ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hv(a,x)
if(v==="*")throw H.a(P.cj(z))
if(init.leafTags[z]===true){u=H.cZ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hv(a,x)},
hv:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e_(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cZ:function(a){return J.e_(a,!1,null,!!a.$isJ)},
ny:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cZ(z)
else return J.e_(z,c,null,null)},
ns:function(){if(!0===$.dY)return
$.dY=!0
H.nt()},
nt:function(){var z,y,x,w,v,u,t,s
$.cV=Object.create(null)
$.cY=Object.create(null)
H.no()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hx.$1(v)
if(u!=null){t=H.ny(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
no:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.bC(C.R,H.bC(C.W,H.bC(C.x,H.bC(C.x,H.bC(C.V,H.bC(C.S,H.bC(C.T(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hp=new H.np(v)
$.hk=new H.nq(u)
$.hx=new H.nr(t)},
bC:function(a,b){return a(b)||b},
hy:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e2:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hZ:{"^":"b;$ti",
i:function(a){return P.dl(this)},
n:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.i_()},
$isM:1},
i0:{"^":"hZ;a,b,c,$ti",
gl:function(a){return this.a},
bv:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bv(0,b))return
return this.dm(b)},
dm:function(a){return this.b[H.H(a)]},
A:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.l(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.dm(v),z))}}},
jC:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jD:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bM(z)
y=z[0]
x=z[1]
return new H.jC(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
km:{"^":"b;a,b,c,d,e,f",
af:function(a){var z,y,x
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
aP:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.km(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cK:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fo:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ji:{"^":"a8;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eT:function(a,b){return new H.ji(a,b==null?null:b.method)}}},
iL:{"^":"a8;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
t:{
di:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iL(a,y,z?null:b.receiver)}}},
ky:{"^":"a8;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nI:{"^":"m:20;a",
$1:function(a){if(!!J.K(a).$isa8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fZ:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaD:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.bo(this).trim()+"'"},
geM:function(){return this},
$iscd:1,
geM:function(){return this}},
f8:{"^":"m;"},
k_:{"^":"f8;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d3:{"^":"f8;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d3))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.bR(this.a)
else y=typeof z!=="object"?J.c8(z):H.bR(z)
return(y^H.bR(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bo(z)+"'")},
t:{
d4:function(a){return a.a},
ec:function(a){return a.c},
cs:function(a){var z,y,x,w,v
z=new H.d3("self","target","receiver","name")
y=J.bM(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kn:{"^":"a8;a",
i:function(a){return this.a},
t:{
aE:function(a,b){return new H.kn("TypeError: "+H.k(P.cw(a))+": type '"+H.hi(a)+"' is not a subtype of type '"+b+"'")}}},
hR:{"^":"a8;a",
i:function(a){return this.a},
t:{
hS:function(a,b){return new H.hR("CastError: "+H.k(P.cw(a))+": type '"+H.hi(a)+"' is not a subtype of type '"+b+"'")}}},
jM:{"^":"a8;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
t:{
jN:function(a){return new H.jM(a)}}},
aX:{"^":"eM;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gim:function(a){return this.a===0},
ga6:function(a){return new H.iP(this,[H.y(this,0)])},
bv:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.di(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.di(y,b)}else return this.ij(b)},
ij:function(a){var z=this.d
if(z==null)return!1
return this.cF(this.c4(z,this.cE(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bn(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bn(w,b)
x=y==null?null:y.b
return x}else return this.ik(b)},
ik:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c4(z,this.cE(a))
x=this.cF(y,a)
if(x<0)return
return y[x].b},
n:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c9()
this.b=z}this.d7(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c9()
this.c=y}this.d7(y,b,c)}else this.il(b,c)},
il:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.c9()
this.d=z}y=this.cE(a)
x=this.c4(z,y)
if(x==null)this.ce(z,y,[this.ca(a,b)])
else{w=this.cF(x,a)
if(w>=0)x[w].b=b
else x.push(this.ca(a,b))}},
A:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aK(this))
z=z.c}},
d7:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.bn(a,b)
if(z==null)this.ce(a,b,this.ca(b,c))
else z.b=c},
fD:function(){this.r=this.r+1&67108863},
ca:function(a,b){var z,y
z=new H.iO(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fD()
return z},
cE:function(a){return J.c8(a)&0x3ffffff},
cF:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
i:function(a){return P.dl(this)},
bn:function(a,b){return a[b]},
c4:function(a,b){return a[b]},
ce:function(a,b,c){a[b]=c},
fv:function(a,b){delete a[b]},
di:function(a,b){return this.bn(a,b)!=null},
c9:function(){var z=Object.create(null)
this.ce(z,"<non-identifier-key>",z)
this.fv(z,"<non-identifier-key>")
return z},
$iseI:1},
iO:{"^":"b;a,b,0c,0d"},
iP:{"^":"eu;a,$ti",
gl:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.iQ(z,z.r,this.$ti)
y.c=z.e
return y}},
iQ:{"^":"b;a,b,0c,0d,$ti",
gL:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aK(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
np:{"^":"m:20;a",
$1:function(a){return this.a(a)}},
nq:{"^":"m:42;a",
$2:function(a,b){return this.a(a,b)}},
nr:{"^":"m:60;a",
$1:function(a){return this.a(H.H(a))}},
iJ:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseV:1,
$isjE:1,
t:{
iK:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a_("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
ni:function(a){return J.eC(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bA:function(a){return a},
jd:function(a){return new Int8Array(a)},
aQ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aR(b,a))},
mW:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.ng(a,b,c))
return b},
eR:{"^":"r;",$iseR:1,"%":"ArrayBuffer"},
dr:{"^":"r;",$isdr:1,$isko:1,"%":"DataView;ArrayBufferView;dq|fT|fU|je|fV|fW|bb"},
dq:{"^":"dr;",
gl:function(a){return a.length},
$isJ:1,
$asJ:I.dW},
je:{"^":"fU;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
n:function(a,b,c){H.F(b)
H.nh(c)
H.aQ(b,a,a.length)
a[b]=c},
$ascx:function(){return[P.C]},
$asx:function(){return[P.C]},
$isj:1,
$asj:function(){return[P.C]},
$ise:1,
$ase:function(){return[P.C]},
"%":"Float32Array|Float64Array"},
bb:{"^":"fW;",
n:function(a,b,c){H.F(b)
H.F(c)
H.aQ(b,a,a.length)
a[b]=c},
$ascx:function(){return[P.n]},
$asx:function(){return[P.n]},
$isj:1,
$asj:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]}},
of:{"^":"bb;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int16Array"},
og:{"^":"bb;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oh:{"^":"bb;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oi:{"^":"bb;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oj:{"^":"bb;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ok:{"^":"bb;",
gl:function(a){return a.length},
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ds:{"^":"bb;",
gl:function(a){return a.length},
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
bU:function(a,b,c){return new Uint8Array(a.subarray(b,H.mW(b,c,a.length)))},
$isds:1,
$isT:1,
"%":";Uint8Array"},
fT:{"^":"dq+x;"},
fU:{"^":"fT+cx;"},
fV:{"^":"dq+x;"},
fW:{"^":"fV+cx;"}}],["","",,P,{"^":"",
l3:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.n8()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bD(new P.l5(z),1)).observe(y,{childList:true})
return new P.l4(z,y,x)}else if(self.setImmediate!=null)return P.n9()
return P.na()},
oN:[function(a){self.scheduleImmediate(H.bD(new P.l6(H.l(a,{func:1,ret:-1})),0))},"$1","n8",4,0,13],
oO:[function(a){self.setImmediate(H.bD(new P.l7(H.l(a,{func:1,ret:-1})),0))},"$1","n9",4,0,13],
oP:[function(a){P.dC(C.q,H.l(a,{func:1,ret:-1}))},"$1","na",4,0,13],
dC:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.a5(a.a,1000)
return P.me(z<0?0:z,b)},
fd:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bv]})
z=C.f.a5(a.a,1000)
return P.mf(z<0?0:z,b)},
n4:function(a,b){if(H.cm(a,{func:1,args:[P.b,P.aD]}))return b.iO(a,null,P.b,P.aD)
if(H.cm(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cq(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n3:function(){var z,y
for(;z=$.bB,z!=null;){$.c1=null
y=z.b
$.bB=y
if(y==null)$.c0=null
z.a.$0()}},
oZ:[function(){$.dR=!0
try{P.n3()}finally{$.c1=null
$.dR=!1
if($.bB!=null)$.$get$dL().$1(P.hm())}},"$0","hm",0,0,3],
hh:function(a){var z=new P.fK(H.l(a,{func:1,ret:-1}))
if($.bB==null){$.c0=z
$.bB=z
if(!$.dR)$.$get$dL().$1(P.hm())}else{$.c0.b=z
$.c0=z}},
n7:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bB
if(z==null){P.hh(a)
$.c1=$.c0
return}y=new P.fK(a)
x=$.c1
if(x==null){y.b=z
$.c1=y
$.bB=y}else{y.b=x.b
x.b=y
$.c1=y
if(y.b==null)$.c0=y}},
nD:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.Y
if(C.j===y){P.cU(null,null,C.j,a)
return}y.toString
P.cU(null,null,y,H.l(y.ck(a),z))},
fc:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.dC(a,b)}return P.dC(a,H.l(y.ck(b),z))},
kj:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bv]}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.fd(a,b)}x=y.dL(b,P.bv)
$.Y.toString
return P.fd(a,H.l(x,z))},
cT:function(a,b,c,d,e){var z={}
z.a=d
P.n7(new P.n5(z,e))},
hd:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.Y
if(y===c)return d.$0()
$.Y=c
z=y
try{y=d.$0()
return y}finally{$.Y=z}},
he:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.Y
if(y===c)return d.$1(e)
$.Y=c
z=y
try{y=d.$1(e)
return y}finally{$.Y=z}},
n6:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.Y
if(y===c)return d.$2(e,f)
$.Y=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Y=z}},
cU:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.ck(d):c.hZ(d,-1)
P.hh(d)},
l5:{"^":"m:22;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
l4:{"^":"m:43;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
l6:{"^":"m:2;a",
$0:function(){this.a.$0()}},
l7:{"^":"m:2;a",
$0:function(){this.a.$0()}},
h2:{"^":"b;a,0b,c",
fe:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bD(new P.mh(this,b),0),a)
else throw H.a(P.D("`setTimeout()` not found."))},
ff:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bD(new P.mg(this,a,Date.now(),b),0),a)
else throw H.a(P.D("Periodic timer."))},
$isbv:1,
t:{
me:function(a,b){var z=new P.h2(!0,0)
z.fe(a,b)
return z},
mf:function(a,b){var z=new P.h2(!1,0)
z.ff(a,b)
return z}}},
mh:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mg:{"^":"m:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.f1(w,x)}z.c=y
this.d.$1(z)}},
bz:{"^":"b;0a,b,c,d,e,$ti",
iu:function(a){if(this.c!==6)return!0
return this.b.b.cR(H.l(this.d,{func:1,ret:P.Q,args:[P.b]}),a.a,P.Q,P.b)},
ii:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cm(z,{func:1,args:[P.b,P.aD]}))return H.dX(w.iV(z,a.a,a.b,null,y,P.aD),x)
else return H.dX(w.cR(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b3:{"^":"b;dA:a<,b,0hh:c<,$ti",
eF:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Y
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.n4(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b3(0,$.Y,[c])
w=b==null?1:3
this.d8(new P.bz(x,w,a,b,[z,c]))
return x},
j1:function(a,b){return this.eF(a,null,b)},
d8:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbz")
this.c=a}else{if(z===2){y=H.d(this.c,"$isb3")
z=y.a
if(z<4){y.d8(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cU(null,null,z,H.l(new P.ln(this,a),{func:1,ret:-1}))}},
dt:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbz")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isb3")
y=u.a
if(y<4){u.dt(a)
return}this.a=y
this.c=u.c}z.a=this.br(a)
y=this.b
y.toString
P.cU(null,null,y,H.l(new P.ls(z,this),{func:1,ret:-1}))}},
cc:function(){var z=H.d(this.c,"$isbz")
this.c=null
return this.br(z)},
br:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
df:function(a){var z,y,x,w
z=H.y(this,0)
H.dX(a,{futureOr:1,type:z})
y=this.$ti
x=H.c3(a,"$isbL",y,"$asbL")
if(x){z=H.c3(a,"$isb3",y,null)
if(z)P.fO(a,this)
else P.lo(a,this)}else{w=this.cc()
H.z(a,z)
this.a=4
this.c=a
P.bX(this,w)}},
c_:[function(a,b){var z
H.d(b,"$isaD")
z=this.cc()
this.a=8
this.c=new P.as(a,b)
P.bX(this,z)},function(a){return this.c_(a,null)},"jc","$2","$1","gfp",4,2,33],
$isbL:1,
t:{
lo:function(a,b){var z,y,x
b.a=1
try{a.eF(new P.lp(b),new P.lq(b),null)}catch(x){z=H.ad(x)
y=H.bF(x)
P.nD(new P.lr(b,z,y))}},
fO:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isb3")
if(z>=4){y=b.cc()
b.a=a.a
b.c=a.c
P.bX(b,y)}else{y=H.d(b.c,"$isbz")
b.a=2
b.c=a
a.dt(y)}},
bX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isas")
y=y.b
u=v.a
t=v.b
y.toString
P.cT(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bX(z.a,b)}y=z.a
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
if(p){H.d(r,"$isas")
y=y.b
u=r.a
t=r.b
y.toString
P.cT(null,null,y,u,t)
return}o=$.Y
if(o==null?q!=null:o!==q)$.Y=q
else o=null
y=b.c
if(y===8)new P.lv(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lu(x,b,r).$0()}else if((y&2)!==0)new P.lt(z,x,b).$0()
if(o!=null)$.Y=o
y=x.b
if(!!J.K(y).$isbL){if(y.a>=4){n=H.d(t.c,"$isbz")
t.c=null
b=t.br(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fO(y,t)
return}}m=b.b
n=H.d(m.c,"$isbz")
m.c=null
b=m.br(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.d(u,"$isas")
m.a=8
m.c=u}z.a=m
y=m}}}},
ln:{"^":"m:2;a,b",
$0:function(){P.bX(this.a,this.b)}},
ls:{"^":"m:2;a,b",
$0:function(){P.bX(this.b,this.a.a)}},
lp:{"^":"m:22;a",
$1:function(a){var z=this.a
z.a=0
z.df(a)}},
lq:{"^":"m:34;a",
$2:function(a,b){this.a.c_(a,H.d(b,"$isaD"))},
$1:function(a){return this.$2(a,null)}},
lr:{"^":"m:2;a,b,c",
$0:function(){this.a.c_(this.b,this.c)}},
lv:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eE(H.l(w.d,{func:1}),null)}catch(v){y=H.ad(v)
x=H.bF(v)
if(this.d){w=H.d(this.a.a.c,"$isas").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isas")
else u.b=new P.as(y,x)
u.a=!0
return}if(!!J.K(z).$isbL){if(z instanceof P.b3&&z.gdA()>=4){if(z.gdA()===8){w=this.b
w.b=H.d(z.ghh(),"$isas")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.j1(new P.lw(t),null)
w.a=!1}}},
lw:{"^":"m:37;a",
$1:function(a){return this.a}},
lu:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cR(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ad(t)
y=H.bF(t)
x=this.a
x.b=new P.as(z,y)
x.a=!0}}},
lt:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isas")
w=this.c
if(w.iu(z)&&w.e!=null){v=this.b
v.b=w.ii(z)
v.a=!1}}catch(u){y=H.ad(u)
x=H.bF(u)
w=H.d(this.a.a.c,"$isas")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.as(y,x)
s.a=!0}}},
fK:{"^":"b;a,0b"},
dy:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.b3(0,$.Y,[P.n])
z.a=0
this.ir(new P.k2(z,this),!0,new P.k3(z,y),y.gfp())
return y}},
k2:{"^":"m;a,b",
$1:function(a){H.z(a,H.ao(this.b,"dy",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.ao(this.b,"dy",0)]}}},
k3:{"^":"m:2;a,b",
$0:function(){this.b.df(this.a.a)}},
f5:{"^":"b;$ti"},
k1:{"^":"b;"},
bv:{"^":"b;"},
as:{"^":"b;a,b",
i:function(a){return H.k(this.a)},
$isa8:1},
mK:{"^":"b;",$isoM:1},
n5:{"^":"m:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eU()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lQ:{"^":"mK;",
iW:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.Y){a.$0()
return}P.hd(null,null,this,a,-1)}catch(x){z=H.ad(x)
y=H.bF(x)
P.cT(null,null,this,z,H.d(y,"$isaD"))}},
iX:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.Y){a.$1(b)
return}P.he(null,null,this,a,b,-1,c)}catch(x){z=H.ad(x)
y=H.bF(x)
P.cT(null,null,this,z,H.d(y,"$isaD"))}},
hZ:function(a,b){return new P.lS(this,H.l(a,{func:1,ret:b}),b)},
ck:function(a){return new P.lR(this,H.l(a,{func:1,ret:-1}))},
dL:function(a,b){return new P.lT(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eE:function(a,b){H.l(a,{func:1,ret:b})
if($.Y===C.j)return a.$0()
return P.hd(null,null,this,a,b)},
cR:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.Y===C.j)return a.$1(b)
return P.he(null,null,this,a,b,c,d)},
iV:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.Y===C.j)return a.$2(b,c)
return P.n6(null,null,this,a,b,c,d,e,f)},
iO:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
lS:{"^":"m;a,b,c",
$0:function(){return this.a.eE(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lR:{"^":"m:3;a,b",
$0:function(){return this.a.iW(this.b)}},
lT:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.iX(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iR:function(a,b,c,d,e){return new H.aX(0,0,[d,e])},
iS:function(a,b,c){H.c7(a)
return H.v(H.nj(a,new H.aX(0,0,[b,c])),"$iseI",[b,c],"$aseI")},
dj:function(a,b){return new H.aX(0,0,[a,b])},
cg:function(a,b,c,d){return new P.lD(0,0,[d])},
iF:function(a,b,c){var z,y
if(P.dS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c2()
C.a.h(y,a)
try{P.n2(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.f6(b,H.ht(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
dd:function(a,b,c){var z,y,x
if(P.dS(a))return b+"..."+c
z=new P.aq(b)
y=$.$get$c2()
C.a.h(y,a)
try{x=z
x.a=P.f6(x.gaM(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaM()+c
y=z.gaM()
return y.charCodeAt(0)==0?y:y},
dS:function(a){var z,y
for(z=0;y=$.$get$c2(),z<y.length;++z)if(a===y[z])return!0
return!1},
n2:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.k(z.gL(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gL(z);++x
if(!z.C()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gL(z);++x
for(;z.C();t=s,s=r){r=z.gL(z);++x
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
iT:function(a,b,c){var z=P.iR(null,null,null,b,c)
a.A(0,new P.iU(z,b,c))
return z},
eJ:function(a,b){var z,y
z=P.cg(null,null,null,b)
for(y=J.b6(a);y.C();)z.h(0,H.z(y.gL(y),b))
return z},
dl:function(a){var z,y,x
z={}
if(P.dS(a))return"{...}"
y=new P.aq("")
try{C.a.h($.$get$c2(),a)
x=y
x.a=x.gaM()+"{"
z.a=!0
J.e4(a,new P.iY(z,y))
z=y
z.a=z.gaM()+"}"}finally{z=$.$get$c2()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaM()
return z.charCodeAt(0)==0?z:z},
lD:{"^":"lx;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){var z=new P.fS(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
V:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscQ")!=null}else{y=this.fq(b)
return y}},
fq:function(a){var z=this.d
if(z==null)return!1
return this.c2(this.dn(z,a),a)>=0},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dN()
this.b=z}return this.dd(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dN()
this.c=y}return this.dd(y,b)}else return this.fg(0,b)},
fg:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dN()
this.d=z}y=this.dg(b)
x=z[y]
if(x==null)z[y]=[this.bZ(b)]
else{if(this.c2(x,b)>=0)return!1
x.push(this.bZ(b))}return!0},
a0:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.du(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.du(this.c,b)
else return this.ha(0,b)},
ha:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dn(z,b)
x=this.c2(y,b)
if(x<0)return!1
this.dC(y.splice(x,1)[0])
return!0},
dd:function(a,b){H.z(b,H.y(this,0))
if(H.d(a[b],"$iscQ")!=null)return!1
a[b]=this.bZ(b)
return!0},
du:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscQ")
if(z==null)return!1
this.dC(z)
delete a[b]
return!0},
de:function(){this.r=this.r+1&67108863},
bZ:function(a){var z,y
z=new P.cQ(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.de()
return z},
dC:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.de()},
dg:function(a){return J.c8(a)&0x3ffffff},
dn:function(a,b){return a[this.dg(b)]},
c2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
t:{
dN:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cQ:{"^":"b;a,0b,0c"},
fS:{"^":"b;a,b,0c,0d,$ti",
gL:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aK(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}}},
lx:{"^":"jO;"},
iU:{"^":"m:6;a,b,c",
$2:function(a,b){this.a.n(0,H.z(a,this.b),H.z(b,this.c))}},
cD:{"^":"lE;",$isj:1,$ise:1},
x:{"^":"b;$ti",
gZ:function(a){return new H.dk(a,this.gl(a),0,[H.b5(this,a,"x",0)])},
H:function(a,b){return this.j(a,b)},
A:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b5(this,a,"x",0)]})
z=this.gl(a)
if(typeof z!=="number")return H.o(z)
y=0
for(;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gl(a))throw H.a(P.aK(a))}},
j4:function(a,b){var z,y,x
z=H.c([],[H.b5(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.n(z,y,this.j(a,y));++y}return z},
j3:function(a){return this.j4(a,!0)},
aD:function(a,b,c,d){var z
H.z(d,H.b5(this,a,"x",0))
P.b_(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.n(a,z,d)},
i:function(a){return P.dd(a,"[","]")}},
eM:{"^":"al;"},
iY:{"^":"m:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
al:{"^":"b;$ti",
A:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b5(this,a,"al",0),H.b5(this,a,"al",1)]})
for(z=J.b6(this.ga6(a));z.C();){y=z.gL(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.ar(this.ga6(a))},
i:function(a){return P.dl(a)},
$isM:1},
mm:{"^":"b;$ti",
n:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.D("Cannot modify unmodifiable map"))}},
iZ:{"^":"b;$ti",
j:function(a,b){return J.e3(this.a,b)},
n:function(a,b,c){J.d_(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
A:function(a,b){J.e4(this.a,H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.ar(this.a)},
i:function(a){return J.aa(this.a)},
$isM:1},
fz:{"^":"mn;a,$ti"},
jQ:{"^":"b;$ti",
ap:function(a,b){var z
for(z=J.b6(H.v(b,"$isj",this.$ti,"$asj"));z.C();)this.h(0,z.gL(z))},
i:function(a){return P.dd(this,"{","}")},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e7("index"))
if(b<0)H.p(P.a2(b,0,null,"index",null))
for(z=new P.fS(this,this.r,this.$ti),z.c=this.e,y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
$isj:1},
jO:{"^":"jQ;"},
lE:{"^":"b+x;"},
mn:{"^":"iZ+mm;$ti"}}],["","",,P,{"^":"",hO:{"^":"ca;a",
ix:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.b_(c,d,b.length,null,null,null)
z=$.$get$fM()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.G(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cX(C.b.G(b,s))
o=H.cX(C.b.G(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.h(z,n)
m=z[n]
if(m>=0){n=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aq("")
w.a+=C.b.u(b,x,y)
w.a+=H.bS(r)
x=s
continue}}throw H.a(P.a_("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.u(b,x,d)
k=l.length
if(v>=0)P.e9(b,u,d,v,t,k)
else{j=C.f.bj(k-1,4)+1
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aZ(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.e9(b,u,d,v,t,i)
else{j=C.f.bj(i,4)
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aZ(b,d,d,j===2?"==":"=")}return b},
$asca:function(){return[[P.e,P.n],P.f]},
t:{
e9:function(a,b,c,d,e,f){if(C.f.bj(f,4)!==0)throw H.a(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a_("Invalid base64 padding, more than two '=' characters",a,b))}}},hP:{"^":"b8;a",
$asb8:function(){return[[P.e,P.n],P.f]}},ca:{"^":"b;$ti"},b8:{"^":"k1;$ti"},ie:{"^":"ca;",
$asca:function(){return[P.f,[P.e,P.n]]}},it:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},is:{"^":"b8;a",
fs:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.h(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.aq("")
if(w>b)v.a+=C.b.u(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hK(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb8:function(){return[P.f,P.f]}},kM:{"^":"ie;a",
gi7:function(){return C.L}},kT:{"^":"b8;",
b7:function(a,b,c){var z,y,x,w
z=a.length
P.b_(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mI(0,0,x)
if(w.fz(a,b,z)!==z)w.dE(J.hE(a,z-1),0)
return C.a2.bU(x,0,w.b)},
cp:function(a){return this.b7(a,0,null)},
$asb8:function(){return[P.f,[P.e,P.n]]}},mI:{"^":"b;a,b,c",
dE:function(a,b){var z,y,x,w,v
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
fz:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.G(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dE(w,C.b.G(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kN:{"^":"b8;a",
b7:function(a,b,c){var z,y,x,w,v
H.v(a,"$ise",[P.n],"$ase")
z=P.kO(!1,a,b,c)
if(z!=null)return z
y=J.ar(a)
P.b_(b,c,y,null,null,null)
x=new P.aq("")
w=new P.mF(!1,x,!0,0,0,0)
w.b7(a,b,y)
w.ic(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cp:function(a){return this.b7(a,0,null)},
$asb8:function(){return[[P.e,P.n],P.f]},
t:{
kO:function(a,b,c,d){H.v(b,"$ise",[P.n],"$ase")
if(b instanceof Uint8Array)return P.kP(!1,b,c,d)
return},
kP:function(a,b,c,d){var z,y,x
z=$.$get$fE()
if(z==null)return
y=0===c
if(y&&!0)return P.dI(z,b)
x=b.length
d=P.b_(c,d,x,null,null,null)
if(y&&d===x)return P.dI(z,b)
return P.dI(z,b.subarray(c,d))},
dI:function(a,b){if(P.kR(b))return
return P.kS(a,b)},
kS:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ad(y)}return},
kR:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kQ:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ad(y)}return}}},mF:{"^":"b;a,b,c,d,e,f",
ic:function(a,b,c){var z
H.v(b,"$ise",[P.n],"$ase")
if(this.e>0){z=P.a_("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$ise",[P.n],"$ase")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mH(c)
v=new P.mG(this,b,c,a)
$label0$0:for(u=J.aS(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bQ()
if((r&192)!==128){q=P.a_("Bad UTF-8 encoding 0x"+C.f.bf(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.z,q)
if(z<=C.z[q]){q=P.a_("Overlong encoding of 0x"+C.f.bf(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a_("Character outside valid Unicode range: 0x"+C.f.bf(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bS(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.d_()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.a_("Negative UTF-8 code unit: -0x"+C.f.bf(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a_("Bad UTF-8 encoding 0x"+C.f.bf(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mH:{"^":"m:47;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$ise",[P.n],"$ase")
z=this.a
for(y=J.aS(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bQ()
if((w&127)!==w)return x-b}return z-b}},mG:{"^":"m:38;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ci(this.d,a,b)}}}],["","",,P,{"^":"",
c6:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.f]})
z=H.jx(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a_(a,null,null))},
ih:function(a){var z=J.K(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bo(a)+"'"},
iV:function(a,b,c,d){var z,y
H.z(b,d)
z=J.iH(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.n(z,y,b)
return H.v(z,"$ise",[d],"$ase")},
eK:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gZ(a);x.C();)C.a.h(y,H.z(x.gL(x),c))
if(b)return y
return H.v(J.bM(y),"$ise",z,"$ase")},
ci:function(a,b,c){var z,y
z=P.n
H.v(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isbk",[z],"$asbk")
y=a.length
c=P.b_(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.O()
z=c<y}else z=!0
return H.eZ(z?C.a.bU(a,b,c):a)}if(!!J.K(a).$isds)return H.jz(a,b,P.b_(b,c,a.length,null,null,null))
return P.k4(a,b,c)},
k4:function(a,b,c){var z,y,x,w
H.v(a,"$isj",[P.n],"$asj")
if(b<0)throw H.a(P.a2(b,0,J.ar(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a2(c,b,J.ar(a),null,null))
y=J.b6(a)
for(x=0;x<b;++x)if(!y.C())throw H.a(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.C();)w.push(y.gL(y))
else for(x=b;x<c;++x){if(!y.C())throw H.a(P.a2(c,b,x,null,null))
w.push(y.gL(y))}return H.eZ(w)},
jF:function(a,b,c){return new H.iJ(a,H.iK(a,!1,!0,!1))},
fB:function(){var z=H.jp()
if(z!=null)return P.kE(z,0,null)
throw H.a(P.D("'Uri.base' is not supported"))},
cw:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ih(a)},
t:function(a){return new P.fN(a)},
iW:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.n(z,y,b.$1(y))
return z},
e1:function(a){H.nB(a)},
kE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.G(a,b+4)^58)*3|C.b.G(a,b)^100|C.b.G(a,b+1)^97|C.b.G(a,b+2)^116|C.b.G(a,b+3)^97)>>>0
if(y===0)return P.fA(b>0||c<c?C.b.u(a,b,c):a,5,null).geJ()
else if(y===32)return P.fA(C.b.u(a,z,c),0,null).geJ()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.n(w,0,0)
x=b-1
C.a.n(w,1,x)
C.a.n(w,2,x)
C.a.n(w,7,x)
C.a.n(w,3,b)
C.a.n(w,4,b)
C.a.n(w,5,c)
C.a.n(w,6,c)
if(P.hf(a,b,c,0,w)>=14)C.a.n(w,7,c)
v=w[1]
if(typeof v!=="number")return v.j6()
if(v>=b)if(P.hf(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.O()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.O()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.O()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.O()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ac(a,"..",s)))n=r>s+2&&C.b.ac(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ac(a,"file",b)){if(u<=b){if(!C.b.ac(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.u(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aZ(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ac(a,"http",b)){if(x&&t+3===s&&C.b.ac(a,"80",t+1))if(b===0&&!0){a=C.b.aZ(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.u(a,b,t)+C.b.u(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.ac(a,"https",b)){if(x&&t+4===s&&C.b.ac(a,"443",t+1))if(b===0&&!0){a=C.b.aZ(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.u(a,b,t)+C.b.u(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.u(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lZ(a,v,u,t,s,r,q,o)}return P.mo(a,b,c,v,u,t,s,r,q,o)},
fD:function(a,b){var z=P.f
return C.a.ie(H.c(a.split("&"),[z]),P.dj(z,z),new P.kH(b),[P.M,P.f,P.f])},
kC:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kD(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Y(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c6(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.d_()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c6(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.d_()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
fC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kF(a)
y=new P.kG(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Y(a,w)
if(s===58){if(w===b){++w
if(C.b.Y(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gas(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kC(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.f.aP(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
mX:function(){var z,y,x,w,v
z=P.iW(22,new P.mZ(),!0,P.T)
y=new P.mY(z)
x=new P.n_()
w=new P.n0()
v=H.d(y.$2(0,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isT")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isT")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isT"),"]",5)
v=H.d(y.$2(9,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isT"),"az",21)
v=H.d(y.$2(21,245),"$isT")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hf:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$ise",[P.n],"$ase")
z=$.$get$hg()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.G(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.n(e,v>>>5,y)}return d},
Q:{"^":"b;"},
"+bool":0,
at:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.at))return!1
return this.a===b.a&&this.b===b.b},
gW:function(a){var z=this.a
return(z^C.f.aP(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.i5(H.jw(this))
y=P.cb(H.ju(this))
x=P.cb(H.jq(this))
w=P.cb(H.jr(this))
v=P.cb(H.jt(this))
u=P.cb(H.jv(this))
t=P.i6(H.js(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
i5:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
i6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cb:function(a){if(a>=10)return""+a
return"0"+a}}},
C:{"^":"a5;"},
"+double":0,
bJ:{"^":"b;a",
O:function(a,b){return C.f.O(this.a,H.d(b,"$isbJ").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bJ))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ia()
y=this.a
if(y<0)return"-"+new P.bJ(0-y).i(0)
x=z.$1(C.f.a5(y,6e7)%60)
w=z.$1(C.f.a5(y,1e6)%60)
v=new P.i9().$1(y%1e6)
return""+C.f.a5(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
t:{
et:function(a,b,c,d,e,f){return new P.bJ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
i9:{"^":"m:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ia:{"^":"m:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a8:{"^":"b;"},
eU:{"^":"a8;",
i:function(a){return"Throw of null."}},
aI:{"^":"a8;a,b,c,d",
gc1:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc0:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gc1()+y+x
if(!this.a)return w
v=this.gc0()
u=P.cw(this.b)
return w+v+": "+H.k(u)},
t:{
c9:function(a){return new P.aI(!1,null,null,a)},
cq:function(a,b,c){return new P.aI(!0,a,b,c)},
e7:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
cG:{"^":"aI;e,f,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
t:{
cH:function(a,b,c){return new P.cG(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cG(b,c,!0,a,d,"Invalid value")},
b_:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a2(b,a,c,"end",f))
return b}return c}}},
iu:{"^":"aI;e,l:f>,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){if(J.hA(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
t:{
W:function(a,b,c,d,e){var z=H.F(e!=null?e:J.ar(b))
return new P.iu(b,z,!0,a,c,"Index out of range")}}},
kA:{"^":"a8;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
D:function(a){return new P.kA(a)}}},
kx:{"^":"a8;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
cj:function(a){return new P.kx(a)}}},
dx:{"^":"a8;a",
i:function(a){return"Bad state: "+this.a},
t:{
f4:function(a){return new P.dx(a)}}},
hY:{"^":"a8;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cw(z))+"."},
t:{
aK:function(a){return new P.hY(a)}}},
jj:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa8:1},
f2:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa8:1},
i3:{"^":"a8;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fN:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
io:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.k(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.u(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.G(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.Y(w,s)
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
m=""}l=C.b.u(w,o,p)
return y+n+l+m+"\n"+C.b.p(" ",x-o+n.length)+"^\n"},
t:{
a_:function(a,b,c){return new P.io(a,b,c)}}},
cd:{"^":"b;"},
n:{"^":"a5;"},
"+int":0,
j:{"^":"b;$ti",
cV:["eX",function(a,b){var z=H.ao(this,"j",0)
return new H.dK(this,H.l(b,{func:1,ret:P.Q,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gZ(this)
for(y=0;z.C();)++y
return y},
gaH:function(a){var z,y
z=this.gZ(this)
if(!z.C())throw H.a(H.de())
y=z.gL(z)
if(z.C())throw H.a(H.iG())
return y},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e7("index"))
if(b<0)H.p(P.a2(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.C();){x=z.gL(z)
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
i:function(a){return P.iF(this,"(",")")}},
df:{"^":"b;$ti"},
e:{"^":"b;$ti",$isj:1},
"+List":0,
M:{"^":"b;$ti"},
I:{"^":"b;",
gW:function(a){return P.b.prototype.gW.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a5:{"^":"b;"},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gW:function(a){return H.bR(this)},
i:function(a){return"Instance of '"+H.bo(this)+"'"},
toString:function(){return this.i(this)}},
aD:{"^":"b;"},
f:{"^":"b;",$iseV:1},
"+String":0,
aq:{"^":"b;aM:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoz:1,
t:{
f6:function(a,b,c){var z=J.b6(b)
if(!z.C())return a
if(c.length===0){do a+=H.k(z.gL(z))
while(z.C())}else{a+=H.k(z.gL(z))
for(;z.C();)a=a+c+H.k(z.gL(z))}return a}}},
kH:{"^":"m:59;a",
$2:function(a,b){var z,y,x,w
z=P.f
H.v(a,"$isM",[z,z],"$asM")
H.H(b)
y=J.aS(b).ej(b,"=")
if(y===-1){if(b!=="")J.d_(a,P.dP(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.an(b,y+1)
z=this.a
J.d_(a,P.dP(x,0,x.length,z,!0),P.dP(w,0,w.length,z,!0))}return a}},
kD:{"^":"m:54;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv4 address, "+a,this.a,b))}},
kF:{"^":"m:53;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kG:{"^":"m:50;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c6(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.O()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cR:{"^":"b;bS:a<,b,c,d,ex:e>,f,r,0x,0y,0z,0Q,0ch",
geK:function(){return this.b},
gcD:function(a){var z=this.c
if(z==null)return""
if(C.b.a3(z,"["))return C.b.u(z,1,z.length-1)
return z},
gbM:function(a){var z=this.d
if(z==null)return P.h4(this.a)
return z},
gcO:function(a){var z=this.f
return z==null?"":z},
gee:function(){var z=this.r
return z==null?"":z},
cQ:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isM",[P.f,null],"$asM")
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
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dO(g,0,0,h)
return new P.cR(i,j,c,f,d,g,this.r)},
eD:function(a,b){return this.cQ(a,null,null,null,null,null,null,b,null,null)},
gcP:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.f
y=new P.fz(P.fD(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gef:function(){return this.c!=null},
gei:function(){return this.f!=null},
geg:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.k(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.k(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.k(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
v:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdH){y=this.a
x=b.gbS()
if(y==null?x==null:y===x)if(this.c!=null===b.gef()){y=this.b
x=b.geK()
if(y==null?x==null:y===x){y=this.gcD(this)
x=z.gcD(b)
if(y==null?x==null:y===x){y=this.gbM(this)
x=z.gbM(b)
if(y==null?x==null:y===x)if(this.e===z.gex(b)){y=this.f
x=y==null
if(!x===b.gei()){if(x)y=""
if(y===z.gcO(b)){z=this.r
y=z==null
if(!y===b.geg()){if(y)z=""
z=z===b.gee()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gW:function(a){var z=this.z
if(z==null){z=C.b.gW(this.i(0))
this.z=z}return z},
$isdH:1,
t:{
cl:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$ise",[P.n],"$ase")
if(c===C.k){z=$.$get$h9().b
if(typeof b!=="string")H.p(H.an(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.ao(c,"ca",0))
y=c.gi7().cp(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bS(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mo:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mz(a,b,d)
else{if(d===b)P.bY(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mA(a,z,e-1):""
x=P.mt(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.mw(P.c6(C.b.u(a,w,g),new P.mp(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mu(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.O()
t=h<i?P.dO(a,h+1,i,null):null
return new P.cR(j,y,x,v,u,t,i<c?P.ms(a,i+1,c):null)},
h4:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bY:function(a,b,c){throw H.a(P.a_(c,a,b))},
mw:function(a,b){if(a!=null&&a===P.h4(b))return
return a},
mt:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.J()
z=c-1
if(C.b.Y(a,z)!==93)P.bY(a,b,"Missing end `]` to match `[` in host")
P.fC(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.Y(a,y)===58){P.fC(a,b,c)
return"["+a+"]"}return P.mC(a,b,c)},
mC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Y(a,z)
if(v===37){u=P.hb(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aq("")
s=C.b.u(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.u(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.h(C.C,t)
t=(C.C[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aq("")
if(y<z){x.a+=C.b.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bY(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Y(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aq("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h5(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mz:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h7(C.b.G(a,b)))P.bY(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.G(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bY(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.mq(y?a.toLowerCase():a)},
mq:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mA:function(a,b,c){return P.bZ(a,b,c,C.a_)},
mu:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bZ(a,b,c,C.D):C.w.jP(d,new P.mv(),P.f).m(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a3(w,"/"))w="/"+w
return P.mB(w,e,f)},
mB:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a3(a,"/"))return P.mD(a,!z||c)
return P.mE(a)},
dO:function(a,b,c,d){var z,y
z={}
H.v(d,"$isM",[P.f,null],"$asM")
if(a!=null){if(d!=null)throw H.a(P.c9("Both query and queryParameters specified"))
return P.bZ(a,b,c,C.n)}if(d==null)return
y=new P.aq("")
z.a=""
d.A(0,new P.mx(new P.my(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
ms:function(a,b,c){return P.bZ(a,b,c,C.n)},
hb:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Y(a,b+1)
x=C.b.Y(a,z)
w=H.cX(y)
v=H.cX(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.f.aP(u,4)
if(z>=8)return H.h(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bS(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
h5:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.n(y,0,37)
C.a.n(y,1,C.b.G("0123456789ABCDEF",a>>>4))
C.a.n(y,2,C.b.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.f.hq(a,6*w)&63|x
C.a.n(y,v,37)
C.a.n(y,v+1,C.b.G("0123456789ABCDEF",u>>>4))
C.a.n(y,v+2,C.b.G("0123456789ABCDEF",u&15))
v+=3}}return P.ci(y,0,null)},
bZ:function(a,b,c,d){var z=P.ha(a,b,c,H.v(d,"$ise",[P.n],"$ase"),!1)
return z==null?C.b.u(a,b,c):z},
ha:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$ise",[P.n],"$ase")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.O()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.Y(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hb(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bY(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Y(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h5(v)}}if(w==null)w=new P.aq("")
w.a+=C.b.u(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.O()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h8:function(a){if(C.b.a3(a,"."))return!0
return C.b.ej(a,"/.")!==-1},
mE:function(a){var z,y,x,w,v,u,t
if(!P.h8(a))return a
z=H.c([],[P.f])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.V(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.m(z,"/")},
mD:function(a,b){var z,y,x,w,v,u
if(!P.h8(a))return!b?P.h6(a):a
z=H.c([],[P.f])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gas(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gas(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.n(z,0,P.h6(z[0]))}return C.a.m(z,"/")},
h6:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h7(J.hB(a,0)))for(y=1;y<z;++y){x=C.b.G(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.an(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mr:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.G(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c9("Invalid URL encoding"))}}return z},
dP:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c5(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.G(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.u(a,b,c)
else u=new H.u(y.u(a,b,c))}else{u=H.c([],[P.n])
for(x=b;x<c;++x){w=y.G(a,x)
if(w>127)throw H.a(P.c9("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c9("Truncated URI"))
C.a.h(u,P.mr(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$ise",[P.n],"$ase")
return new P.kN(!1).cp(u)},
h7:function(a){var z=a|32
return 97<=z&&z<=122}}},
mp:{"^":"m:18;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.a_("Invalid port",this.a,z+1))}},
mv:{"^":"m:19;",
$1:function(a){return P.cl(C.a0,a,C.k,!1)}},
my:{"^":"m:30;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.cl(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.cl(C.p,b,C.k,!0))}}},
mx:{"^":"m:49;a",
$2:function(a,b){var z,y
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(z=J.b6(H.ht(b,"$isj")),y=this.a;z.C();)y.$2(a,H.H(z.gL(z)))}},
kB:{"^":"b;a,b,c",
geJ:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.ek(y,"?",z)
w=y.length
if(x>=0){v=P.bZ(y,x+1,w,C.n)
w=x}else v=null
z=new P.lc(this,"data",null,null,null,P.bZ(y,z,w,C.D),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fA:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.G(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a_("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a_("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.G(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gas(z)
if(v!==44||x!==t+7||!C.b.ac(a,"base64",t+1))throw H.a(P.a_("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.ix(0,a,s,y)
else{r=P.ha(a,s,y,C.n,!0)
if(r!=null)a=C.b.aZ(a,s,y,r)}return new P.kB(a,z,c)}}},
mZ:{"^":"m:45;",
$1:function(a){return new Uint8Array(96)}},
mY:{"^":"m:44;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.hF(z,0,96,b)
return z}},
n_:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.G(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
n0:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.G(b,0),y=C.b.G(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
lZ:{"^":"b;a,b,c,d,e,f,r,x,0y",
gef:function(){return this.c>0},
geh:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gei:function(){var z=this.f
if(typeof z!=="number")return z.O()
return z<this.r},
geg:function(){return this.r<this.a.length},
gdq:function(){return this.b===4&&C.b.a3(this.a,"http")},
gdr:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbS:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdq()){this.x="http"
z="http"}else if(this.gdr()){this.x="https"
z="https"}else if(z===4&&C.b.a3(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a3(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
geK:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gcD:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gbM:function(a){var z
if(this.geh()){z=this.d
if(typeof z!=="number")return z.D()
return P.c6(C.b.u(this.a,z+1,this.e),null,null)}if(this.gdq())return 80
if(this.gdr())return 443
return 0},
gex:function(a){return C.b.u(this.a,this.e,this.f)},
gcO:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.O()
return z<y?C.b.u(this.a,z+1,y):""},
gee:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.an(y,z+1):""},
gcP:function(){var z=this.f
if(typeof z!=="number")return z.O()
if(z>=this.r)return C.a1
z=P.f
return new P.fz(P.fD(this.gcO(this),C.k),[z,z])},
cQ:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isM",[P.f,null],"$asM")
i=this.gbS()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.geh()?this.gbM(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dO(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.an(y,x+1)
return new P.cR(i,j,c,f,d,g,b)},
eD:function(a,b){return this.cQ(a,null,null,null,null,null,null,b,null,null)},
gW:function(a){var z=this.y
if(z==null){z=C.b.gW(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdH)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdH:1},
lc:{"^":"cR;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e6:function(a){var z=document.createElement("a")
return z},
d6:function(a,b){var z=document.createElement("canvas")
return z},
ib:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).aj(z,a,b,c)
y.toString
z=W.G
z=new H.dK(new W.ay(y),H.l(new W.ic(),{func:1,ret:P.Q,args:[z]}),[z])
return H.d(z.gaH(z),"$isR")},
id:function(a){H.d(a,"$isaj")
return"wheel"},
bK:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hI(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ad(x)}return z},
eA:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
cO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fR:function(a,b,c,d){var z,y
z=W.cO(W.cO(W.cO(W.cO(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hj:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.Y
if(z===C.j)return a
return z.dL(a,b)},
ak:{"^":"R;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nK:{"^":"r;0l:length=","%":"AccessibleNodeList"},
nL:{"^":"ak;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nM:{"^":"ak;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ea:{"^":"ak;",$isea:1,"%":"HTMLBaseElement"},
d2:{"^":"r;",$isd2:1,"%":";Blob"},
cr:{"^":"ak;",$iscr:1,"%":"HTMLBodyElement"},
d5:{"^":"ak;",
bR:function(a,b,c){if(c!=null)return a.getContext(b,P.nc(c,null))
return a.getContext(b)},
eO:function(a,b){return this.bR(a,b,null)},
$isd5:1,
"%":"HTMLCanvasElement"},
eh:{"^":"r;",$iseh:1,"%":"CanvasRenderingContext2D"},
nS:{"^":"G;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nU:{"^":"i2;0l:length=","%":"CSSPerspective"},
bg:{"^":"r;",$isbg:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nV:{"^":"lb;0l:length=",
eP:function(a,b){var z=a.getPropertyValue(this.fm(a,b))
return z==null?"":z},
fm:function(a,b){var z,y
z=$.$get$el()
y=z[b]
if(typeof y==="string")return y
y=this.hr(a,b)
z[b]=y
return y},
hr:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.i7()+b
if(z in a)return z
return b},
gcl:function(a){return a.bottom},
gar:function(a){return a.height},
gaX:function(a){return a.left},
gbd:function(a){return a.right},
gbg:function(a){return a.top},
gat:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i1:{"^":"b;",
gaX:function(a){return this.eP(a,"left")}},
em:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
i2:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nW:{"^":"em;0l:length=","%":"CSSTransformValue"},
nX:{"^":"em;0l:length=","%":"CSSUnparsedValue"},
nY:{"^":"r;0l:length=","%":"DataTransferItemList"},
bh:{"^":"ak;",$isbh:1,"%":"HTMLDivElement"},
nZ:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
o_:{"^":"le;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.v(c,"$isac",[P.a5],"$asac")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[[P.ac,P.a5]]},
$asx:function(){return[[P.ac,P.a5]]},
$isj:1,
$asj:function(){return[[P.ac,P.a5]]},
$ise:1,
$ase:function(){return[[P.ac,P.a5]]},
$asE:function(){return[[P.ac,P.a5]]},
"%":"ClientRectList|DOMRectList"},
i8:{"^":"r;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gat(a))+" x "+H.k(this.gar(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.c3(b,"$isac",[P.a5],"$asac")
if(!z)return!1
z=J.aT(b)
return a.left===z.gaX(b)&&a.top===z.gbg(b)&&this.gat(a)===z.gat(b)&&this.gar(a)===z.gar(b)},
gW:function(a){return W.fR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gat(a)&0x1FFFFFFF,this.gar(a)&0x1FFFFFFF)},
gcl:function(a){return a.bottom},
gar:function(a){return a.height},
gaX:function(a){return a.left},
gbd:function(a){return a.right},
gbg:function(a){return a.top},
gat:function(a){return a.width},
$isac:1,
$asac:function(){return[P.a5]},
"%":";DOMRectReadOnly"},
o0:{"^":"lg;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[P.f]},
$asx:function(){return[P.f]},
$isj:1,
$asj:function(){return[P.f]},
$ise:1,
$ase:function(){return[P.f]},
$asE:function(){return[P.f]},
"%":"DOMStringList"},
o1:{"^":"r;0l:length=","%":"DOMTokenList"},
la:{"^":"cD;dl:a<,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.d(z[b],"$isR")},
n:function(a,b,c){var z
H.F(b)
H.d(c,"$isR")
z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.j3(this)
return new J.aA(z,z.length,0,[H.y(z,0)])},
aD:function(a,b,c,d){throw H.a(P.cj(null))},
$asx:function(){return[W.R]},
$asj:function(){return[W.R]},
$ase:function(){return[W.R]}},
R:{"^":"G;0iY:tagName=",
ghY:function(a){return new W.lh(a)},
gco:function(a){return new W.la(a,a.children)},
gdN:function(a){return P.jB(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a5)},
i:function(a){return a.localName},
aj:["bV",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ew
if(z==null){z=H.c([],[W.aO])
y=new W.eS(z)
C.a.h(z,W.fP(null))
C.a.h(z,W.h_())
$.ew=y
d=y}else d=z
z=$.ev
if(z==null){z=new W.hc(d)
$.ev=z
c=z}else{z.a=d
c=z}}if($.aV==null){z=document
y=z.implementation.createHTMLDocument("")
$.aV=y
$.da=y.createRange()
y=$.aV
y.toString
y=y.createElement("base")
H.d(y,"$isea")
y.href=z.baseURI
$.aV.head.appendChild(y)}z=$.aV
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$iscr")}z=$.aV
if(!!this.$iscr)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aV.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.Z,a.tagName)){$.da.selectNodeContents(x)
w=$.da.createContextualFragment(b)}else{x.innerHTML=b
w=$.aV.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aV.body
if(x==null?z!=null:x!==z)J.e5(x)
c.d0(w)
document.adoptNode(w)
return w},function(a,b,c){return this.aj(a,b,c,null)},"i1",null,null,"gjM",5,5,null],
eT:function(a,b,c,d){a.textContent=null
a.appendChild(this.aj(a,b,c,d))},
eS:function(a,b){return this.eT(a,b,null,null)},
$isR:1,
"%":";Element"},
ic:{"^":"m:24;",
$1:function(a){return!!J.K(H.d(a,"$isG")).$isR}},
ai:{"^":"r;",$isai:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
aj:{"^":"r;",
dG:["eV",function(a,b,c,d){H.l(c,{func:1,args:[W.ai]})
if(c!=null)this.fh(a,b,c,!1)}],
fh:function(a,b,c,d){return a.addEventListener(b,H.bD(H.l(c,{func:1,args:[W.ai]}),1),!1)},
$isaj:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fX|fY|h0|h1"},
b9:{"^":"d2;",$isb9:1,"%":"File"},
ex:{"^":"lm;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isb9")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.b9]},
$asx:function(){return[W.b9]},
$isj:1,
$asj:function(){return[W.b9]},
$ise:1,
$ase:function(){return[W.b9]},
$isex:1,
$asE:function(){return[W.b9]},
"%":"FileList"},
o2:{"^":"aj;0l:length=","%":"FileWriter"},
o3:{"^":"ak;0l:length=","%":"HTMLFormElement"},
bj:{"^":"r;",$isbj:1,"%":"Gamepad"},
o4:{"^":"r;0l:length=","%":"History"},
o5:{"^":"lz;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asx:function(){return[W.G]},
$isj:1,
$asj:function(){return[W.G]},
$ise:1,
$ase:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ce:{"^":"r;0dO:data=",$isce:1,"%":"ImageData"},
dc:{"^":"ak;",$isdc:1,"%":"HTMLImageElement"},
bN:{"^":"dD;",$isbN:1,"%":"KeyboardEvent"},
o9:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
oa:{"^":"r;0l:length=","%":"MediaList"},
ob:{"^":"aj;",
dG:function(a,b,c,d){H.l(c,{func:1,args:[W.ai]})
if(b==="message")a.start()
this.eV(a,b,c,!1)},
"%":"MessagePort"},
oc:{"^":"lF;",
j:function(a,b){return P.b4(a.get(H.H(b)))},
A:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b4(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.f])
this.A(a,new W.ja(z))
return z},
gl:function(a){return a.size},
n:function(a,b,c){throw H.a(P.D("Not supported"))},
$asal:function(){return[P.f,null]},
$isM:1,
$asM:function(){return[P.f,null]},
"%":"MIDIInputMap"},
ja:{"^":"m:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
od:{"^":"lG;",
j:function(a,b){return P.b4(a.get(H.H(b)))},
A:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b4(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.f])
this.A(a,new W.jb(z))
return z},
gl:function(a){return a.size},
n:function(a,b,c){throw H.a(P.D("Not supported"))},
$asal:function(){return[P.f,null]},
$isM:1,
$asM:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
jb:{"^":"m:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bm:{"^":"r;",$isbm:1,"%":"MimeType"},
oe:{"^":"lI;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isbm")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bm]},
$asx:function(){return[W.bm]},
$isj:1,
$asj:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$asE:function(){return[W.bm]},
"%":"MimeTypeArray"},
ae:{"^":"dD;",$isae:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ay:{"^":"cD;a",
gaH:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.f4("No elements"))
if(y>1)throw H.a(P.f4("More than one element"))
return z.firstChild},
ap:function(a,b){var z,y,x,w
H.v(b,"$isj",[W.G],"$asj")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
n:function(a,b,c){var z,y
H.F(b)
H.d(c,"$isG")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
gZ:function(a){var z=this.a.childNodes
return new W.ey(z,z.length,-1,[H.b5(C.a3,z,"E",0)])},
aD:function(a,b,c,d){throw H.a(P.D("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asx:function(){return[W.G]},
$asj:function(){return[W.G]},
$ase:function(){return[W.G]}},
G:{"^":"aj;0cN:previousSibling=",
iP:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
iR:function(a,b){var z,y
try{z=a.parentNode
J.hC(z,b,a)}catch(y){H.ad(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eW(a):z},
hc:function(a,b,c){return a.replaceChild(b,c)},
$isG:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
ol:{"^":"r;",
iM:[function(a){return a.previousNode()},"$0","gcN",1,0,26],
"%":"NodeIterator"},
jf:{"^":"lK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asx:function(){return[W.G]},
$isj:1,
$asj:function(){return[W.G]},
$ise:1,
$ase:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"NodeList|RadioNodeList"},
bn:{"^":"r;0l:length=",$isbn:1,"%":"Plugin"},
op:{"^":"lO;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isbn")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bn]},
$asx:function(){return[W.bn]},
$isj:1,
$asj:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$asE:function(){return[W.bn]},
"%":"PluginArray"},
or:{"^":"lU;",
j:function(a,b){return P.b4(a.get(H.H(b)))},
A:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b4(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.f])
this.A(a,new W.jL(z))
return z},
gl:function(a){return a.size},
n:function(a,b,c){throw H.a(P.D("Not supported"))},
$asal:function(){return[P.f,null]},
$isM:1,
$asM:function(){return[P.f,null]},
"%":"RTCStatsReport"},
jL:{"^":"m:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ot:{"^":"ak;0l:length=","%":"HTMLSelectElement"},
bp:{"^":"aj;",$isbp:1,"%":"SourceBuffer"},
ou:{"^":"fY;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isbp")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bp]},
$asx:function(){return[W.bp]},
$isj:1,
$asj:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$asE:function(){return[W.bp]},
"%":"SourceBufferList"},
bq:{"^":"r;",$isbq:1,"%":"SpeechGrammar"},
ov:{"^":"m0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isbq")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bq]},
$asx:function(){return[W.bq]},
$isj:1,
$asj:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$asE:function(){return[W.bq]},
"%":"SpeechGrammarList"},
br:{"^":"r;0l:length=",$isbr:1,"%":"SpeechRecognitionResult"},
ox:{"^":"m3;",
j:function(a,b){return a.getItem(H.H(b))},
n:function(a,b,c){a.setItem(b,H.H(c))},
A:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga6:function(a){var z=H.c([],[P.f])
this.A(a,new W.k0(z))
return z},
gl:function(a){return a.length},
$asal:function(){return[P.f,P.f]},
$isM:1,
$asM:function(){return[P.f,P.f]},
"%":"Storage"},
k0:{"^":"m:30;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bs:{"^":"r;",$isbs:1,"%":"CSSStyleSheet|StyleSheet"},
dA:{"^":"ak;",$isdA:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
k5:{"^":"ak;",
aj:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
z=W.ib("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ay(y).ap(0,new W.ay(z))
return y},
"%":"HTMLTableElement"},
oA:{"^":"ak;",
aj:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.aj(z.createElement("table"),b,c,d)
z.toString
z=new W.ay(z)
x=z.gaH(z)
x.toString
z=new W.ay(x)
w=z.gaH(z)
y.toString
w.toString
new W.ay(y).ap(0,new W.ay(w))
return y},
"%":"HTMLTableRowElement"},
oB:{"^":"ak;",
aj:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.aj(z.createElement("table"),b,c,d)
z.toString
z=new W.ay(z)
x=z.gaH(z)
y.toString
x.toString
new W.ay(y).ap(0,new W.ay(x))
return y},
"%":"HTMLTableSectionElement"},
f9:{"^":"ak;",$isf9:1,"%":"HTMLTemplateElement"},
bt:{"^":"aj;",$isbt:1,"%":"TextTrack"},
bu:{"^":"aj;",$isbu:1,"%":"TextTrackCue|VTTCue"},
oC:{"^":"md;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isbu")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bu]},
$asx:function(){return[W.bu]},
$isj:1,
$asj:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$asE:function(){return[W.bu]},
"%":"TextTrackCueList"},
oD:{"^":"h1;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isbt")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bt]},
$asx:function(){return[W.bt]},
$isj:1,
$asj:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$asE:function(){return[W.bt]},
"%":"TextTrackList"},
oE:{"^":"r;0l:length=","%":"TimeRanges"},
bw:{"^":"r;",$isbw:1,"%":"Touch"},
bx:{"^":"dD;",$isbx:1,"%":"TouchEvent"},
oF:{"^":"mj;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isbw")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bw]},
$asx:function(){return[W.bw]},
$isj:1,
$asj:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$asE:function(){return[W.bw]},
"%":"TouchList"},
oG:{"^":"r;0l:length=","%":"TrackDefaultList"},
oI:{"^":"r;",
iM:[function(a){return a.previousNode()},"$0","gcN",1,0,26],
"%":"TreeWalker"},
dD:{"^":"ai;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oK:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
oL:{"^":"aj;0l:length=","%":"VideoTrackList"},
bW:{"^":"ae;",
gi4:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.D("deltaY is not supported"))},
gi3:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.D("deltaX is not supported"))},
$isbW:1,
"%":"WheelEvent"},
l2:{"^":"aj;",
hd:function(a,b){return a.requestAnimationFrame(H.bD(H.l(b,{func:1,ret:-1,args:[P.a5]}),1))},
fw:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fL:{"^":"G;",$isfL:1,"%":"Attr"},
oQ:{"^":"mM;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isbg")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isj:1,
$asj:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$asE:function(){return[W.bg]},
"%":"CSSRuleList"},
oR:{"^":"i8;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.c3(b,"$isac",[P.a5],"$asac")
if(!z)return!1
z=J.aT(b)
return a.left===z.gaX(b)&&a.top===z.gbg(b)&&a.width===z.gat(b)&&a.height===z.gar(b)},
gW:function(a){return W.fR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gar:function(a){return a.height},
gat:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oT:{"^":"mO;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isbj")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isj:1,
$asj:function(){return[W.bj]},
$ise:1,
$ase:function(){return[W.bj]},
$asE:function(){return[W.bj]},
"%":"GamepadList"},
oW:{"^":"mQ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asx:function(){return[W.G]},
$isj:1,
$asj:function(){return[W.G]},
$ise:1,
$ase:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oX:{"^":"mS;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isbr")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.br]},
$asx:function(){return[W.br]},
$isj:1,
$asj:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$asE:function(){return[W.br]},
"%":"SpeechRecognitionResultList"},
oY:{"^":"mU;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.F(b)
H.d(c,"$isbs")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bs]},
$asx:function(){return[W.bs]},
$isj:1,
$asj:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$asE:function(){return[W.bs]},
"%":"StyleSheetList"},
l8:{"^":"eM;dl:a<",
A:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=this.ga6(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga6:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.f])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=H.d(z[w],"$isfL")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asal:function(){return[P.f,P.f]},
$asM:function(){return[P.f,P.f]}},
lh:{"^":"l8;a",
j:function(a,b){return this.a.getAttribute(H.H(b))},
n:function(a,b,c){this.a.setAttribute(b,H.H(c))},
gl:function(a){return this.ga6(this).length}},
li:{"^":"dy;a,b,c,$ti",
ir:function(a,b,c,d){var z=H.y(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a4(this.a,this.b,a,!1,z)}},
oS:{"^":"li;a,b,c,$ti"},
lj:{"^":"f5;a,b,c,d,e,$ti",
hv:function(){var z=this.d
if(z!=null&&this.a<=0)J.hD(this.b,this.c,z,!1)},
t:{
a4:function(a,b,c,d,e){var z=c==null?null:W.hj(new W.lk(c),W.ai)
z=new W.lj(0,a,b,z,!1,[e])
z.hv()
return z}}},
lk:{"^":"m:8;a",
$1:function(a){return this.a.$1(H.d(a,"$isai"))}},
ck:{"^":"b;a",
fa:function(a){var z,y
z=$.$get$dM()
if(z.gim(z)){for(y=0;y<262;++y)z.n(0,C.Y[y],W.nm())
for(y=0;y<12;++y)z.n(0,C.t[y],W.nn())}},
aQ:function(a){return $.$get$fQ().V(0,W.bK(a))},
az:function(a,b,c){var z,y,x
z=W.bK(a)
y=$.$get$dM()
x=y.j(0,H.k(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dT(x.$4(a,b,c,this))},
$isaO:1,
t:{
fP:function(a){var z,y
z=W.e6(null)
y=window.location
z=new W.ck(new W.lV(z,y))
z.fa(a)
return z},
oU:[function(a,b,c,d){H.d(a,"$isR")
H.H(b)
H.H(c)
H.d(d,"$isck")
return!0},"$4","nm",16,0,23],
oV:[function(a,b,c,d){var z,y,x,w,v
H.d(a,"$isR")
H.H(b)
H.H(c)
z=H.d(d,"$isck").a
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
return z},"$4","nn",16,0,23]}},
E:{"^":"b;$ti",
gZ:function(a){return new W.ey(a,this.gl(a),-1,[H.b5(this,a,"E",0)])},
aD:function(a,b,c,d){H.z(d,H.b5(this,a,"E",0))
throw H.a(P.D("Cannot modify an immutable List."))}},
eS:{"^":"b;a",
aQ:function(a){return C.a.dK(this.a,new W.jh(a))},
az:function(a,b,c){return C.a.dK(this.a,new W.jg(a,b,c))},
$isaO:1},
jh:{"^":"m:15;a",
$1:function(a){return H.d(a,"$isaO").aQ(this.a)}},
jg:{"^":"m:15;a,b,c",
$1:function(a){return H.d(a,"$isaO").az(this.a,this.b,this.c)}},
lW:{"^":"b;",
fd:function(a,b,c,d){var z,y,x
this.a.ap(0,c)
z=b.cV(0,new W.lX())
y=b.cV(0,new W.lY())
this.b.ap(0,z)
x=this.c
x.ap(0,C.A)
x.ap(0,y)},
aQ:function(a){return this.a.V(0,W.bK(a))},
az:["f0",function(a,b,c){var z,y
z=W.bK(a)
y=this.c
if(y.V(0,H.k(z)+"::"+b))return this.d.hW(c)
else if(y.V(0,"*::"+b))return this.d.hW(c)
else{y=this.b
if(y.V(0,H.k(z)+"::"+b))return!0
else if(y.V(0,"*::"+b))return!0
else if(y.V(0,H.k(z)+"::*"))return!0
else if(y.V(0,"*::*"))return!0}return!1}],
$isaO:1},
lX:{"^":"m:29;",
$1:function(a){return!C.a.V(C.t,H.H(a))}},
lY:{"^":"m:29;",
$1:function(a){return C.a.V(C.t,H.H(a))}},
ma:{"^":"lW;e,a,b,c,d",
az:function(a,b,c){if(this.f0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1},
t:{
h_:function(){var z,y,x,w,v
z=P.f
y=P.eJ(C.r,z)
x=H.y(C.r,0)
w=H.l(new W.mb(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.ma(y,P.cg(null,null,null,z),P.cg(null,null,null,z),P.cg(null,null,null,z),null)
y.fd(null,new H.j1(C.r,w,[x,z]),v,null)
return y}}},
mb:{"^":"m:19;",
$1:function(a){return"TEMPLATE::"+H.k(H.H(a))}},
m9:{"^":"b;",
aQ:function(a){var z=J.K(a)
if(!!z.$isf1)return!1
z=!!z.$isdz
if(z&&W.bK(a)==="foreignObject")return!1
if(z)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.b.a3(b,"on"))return!1
return this.aQ(a)},
$isaO:1},
ey:{"^":"b;a,b,c,0d,$ti",
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e3(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gL:function(a){return this.d}},
aO:{"^":"b;"},
lV:{"^":"b;a,b",$isoJ:1},
hc:{"^":"b;a",
d0:function(a){new W.mJ(this).$2(a,null)},
b5:function(a,b){if(b==null)J.e5(a)
else b.removeChild(a)},
hj:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hG(a)
x=y.gdl().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ad(t)}v="element unprintable"
try{v=J.aa(a)}catch(t){H.ad(t)}try{u=W.bK(a)
this.hi(H.d(a,"$isR"),b,z,v,u,H.d(y,"$isM"),H.H(x))}catch(t){if(H.ad(t) instanceof P.aI)throw t
else{this.b5(a,b)
window
s="Removing corrupted element "+H.k(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hi:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.b5(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aQ(a)){this.b5(a,b)
window
z="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.az(a,"is",g)){this.b5(a,b)
window
z="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga6(f)
y=H.c(z.slice(0),[H.y(z,0)])
for(x=f.ga6(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.h(y,x)
w=y[x]
if(!this.a.az(a,J.hL(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.k(e)+" "+w+'="'+H.k(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.K(a).$isf9)this.d0(a.content)},
$isom:1},
mJ:{"^":"m:61;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hj(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b5(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hH(z)}catch(w){H.ad(w)
v=H.d(z,"$isG")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isG")}}},
lb:{"^":"r+i1;"},
ld:{"^":"r+x;"},
le:{"^":"ld+E;"},
lf:{"^":"r+x;"},
lg:{"^":"lf+E;"},
ll:{"^":"r+x;"},
lm:{"^":"ll+E;"},
ly:{"^":"r+x;"},
lz:{"^":"ly+E;"},
lF:{"^":"r+al;"},
lG:{"^":"r+al;"},
lH:{"^":"r+x;"},
lI:{"^":"lH+E;"},
lJ:{"^":"r+x;"},
lK:{"^":"lJ+E;"},
lN:{"^":"r+x;"},
lO:{"^":"lN+E;"},
lU:{"^":"r+al;"},
fX:{"^":"aj+x;"},
fY:{"^":"fX+E;"},
m_:{"^":"r+x;"},
m0:{"^":"m_+E;"},
m3:{"^":"r+al;"},
mc:{"^":"r+x;"},
md:{"^":"mc+E;"},
h0:{"^":"aj+x;"},
h1:{"^":"h0+E;"},
mi:{"^":"r+x;"},
mj:{"^":"mi+E;"},
mL:{"^":"r+x;"},
mM:{"^":"mL+E;"},
mN:{"^":"r+x;"},
mO:{"^":"mN+E;"},
mP:{"^":"r+x;"},
mQ:{"^":"mP+E;"},
mR:{"^":"r+x;"},
mS:{"^":"mR+E;"},
mT:{"^":"r+x;"},
mU:{"^":"mT+E;"}}],["","",,P,{"^":"",
nf:function(a){var z,y
z=J.K(a)
if(!!z.$isce){y=z.gdO(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h3(a.data,a.height,a.width)},
ne:function(a){if(a instanceof P.h3)return{data:a.a,height:a.b,width:a.c}
return a},
b4:function(a){var z,y,x,w,v
if(a==null)return
z=P.dj(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.H(y[w])
z.n(0,v,a[v])}return z},
nc:function(a,b){var z={}
a.A(0,new P.nd(z))
return z},
es:function(){var z=$.er
if(z==null){z=J.d0(window.navigator.userAgent,"Opera",0)
$.er=z}return z},
i7:function(){var z,y
z=$.eo
if(z!=null)return z
y=$.ep
if(y==null){y=J.d0(window.navigator.userAgent,"Firefox",0)
$.ep=y}if(y)z="-moz-"
else{y=$.eq
if(y==null){y=!P.es()&&J.d0(window.navigator.userAgent,"Trident/",0)
$.eq=y}if(y)z="-ms-"
else z=P.es()?"-o-":"-webkit-"}$.eo=z
return z},
m6:{"^":"b;",
eb:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cU:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.K(a)
if(!!y.$isat)return new Date(a.a)
if(!!y.$isjE)throw H.a(P.cj("structured clone of RegExp"))
if(!!y.$isb9)return a
if(!!y.$isd2)return a
if(!!y.$isex)return a
if(!!y.$isce)return a
if(!!y.$iseR||!!y.$isdr)return a
if(!!y.$isM){x=this.eb(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.n(w,x,v)
y.A(a,new P.m8(z,this))
return z.a}if(!!y.$ise){x=this.eb(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.i0(a,x)}throw H.a(P.cj("structured clone of other type"))},
i0:function(a,b){var z,y,x,w
z=J.aS(a)
y=z.gl(a)
x=new Array(y)
C.a.n(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.n(x,w,this.cU(z.j(a,w)))
return x}},
m8:{"^":"m:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cU(b)}},
h3:{"^":"b;dO:a>,b,c",$isce:1},
nd:{"^":"m:6;a",
$2:function(a,b){this.a[a]=b}},
m7:{"^":"m6;a,b"},
ik:{"^":"cD;a,b",
gb2:function(){var z,y,x
z=this.b
y=H.ao(z,"x",0)
x=W.R
return new H.j_(new H.dK(z,H.l(new P.il(),{func:1,ret:P.Q,args:[y]}),[y]),H.l(new P.im(),{func:1,ret:x,args:[y]}),[y,x])},
A:function(a,b){H.l(b,{func:1,ret:-1,args:[W.R]})
C.a.A(P.eK(this.gb2(),!1,W.R),b)},
n:function(a,b,c){var z
H.F(b)
H.d(c,"$isR")
z=this.gb2()
J.hJ(z.b.$1(J.co(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aD:function(a,b,c,d){throw H.a(P.D("Cannot fillRange on filtered list"))},
gl:function(a){return J.ar(this.gb2().a)},
j:function(a,b){var z=this.gb2()
return z.b.$1(J.co(z.a,b))},
gZ:function(a){var z=P.eK(this.gb2(),!1,W.R)
return new J.aA(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.R]},
$asj:function(){return[W.R]},
$ase:function(){return[W.R]}},
il:{"^":"m:24;",
$1:function(a){return!!J.K(H.d(a,"$isG")).$isR}},
im:{"^":"m:36;",
$1:function(a){return H.i(H.d(a,"$isG"),"$isR")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lP:{"^":"b;$ti",
gbd:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.z(z+this.c,H.y(this,0))},
gcl:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c3(b,"$isac",[P.a5],"$asac")
if(!z)return!1
z=this.a
y=J.aT(b)
x=y.gaX(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbg(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gbd(b)){if(typeof x!=="number")return x.D()
z=H.z(x+this.d,w)===y.gcl(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.c8(z)
x=this.b
w=J.c8(x)
if(typeof z!=="number")return z.D()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.z(x+this.d,v)
return P.lA(P.cP(P.cP(P.cP(P.cP(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ac:{"^":"lP;aX:a>,bg:b>,at:c>,ar:d>,$ti",t:{
jB:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.O()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.O()
if(d<0)y=-d*0
else y=d
return new P.ac(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",bO:{"^":"r;",$isbO:1,"%":"SVGLength"},o8:{"^":"lC;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.F(b)
H.d(c,"$isbO")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bO]},
$isj:1,
$asj:function(){return[P.bO]},
$ise:1,
$ase:function(){return[P.bO]},
$asE:function(){return[P.bO]},
"%":"SVGLengthList"},bQ:{"^":"r;",$isbQ:1,"%":"SVGNumber"},on:{"^":"lM;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.F(b)
H.d(c,"$isbQ")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bQ]},
$isj:1,
$asj:function(){return[P.bQ]},
$ise:1,
$ase:function(){return[P.bQ]},
$asE:function(){return[P.bQ]},
"%":"SVGNumberList"},oq:{"^":"r;0l:length=","%":"SVGPointList"},f1:{"^":"dz;",$isf1:1,"%":"SVGScriptElement"},oy:{"^":"m5;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.f]},
$isj:1,
$asj:function(){return[P.f]},
$ise:1,
$ase:function(){return[P.f]},
$asE:function(){return[P.f]},
"%":"SVGStringList"},dz:{"^":"R;",
gco:function(a){return new P.ik(a,new W.ay(a))},
aj:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aO])
C.a.h(z,W.fP(null))
C.a.h(z,W.h_())
C.a.h(z,new W.m9())
c=new W.hc(new W.eS(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).i1(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ay(w)
u=z.gaH(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$isdz:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bU:{"^":"r;",$isbU:1,"%":"SVGTransform"},oH:{"^":"ml;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.F(b)
H.d(c,"$isbU")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bU]},
$isj:1,
$asj:function(){return[P.bU]},
$ise:1,
$ase:function(){return[P.bU]},
$asE:function(){return[P.bU]},
"%":"SVGTransformList"},lB:{"^":"r+x;"},lC:{"^":"lB+E;"},lL:{"^":"r+x;"},lM:{"^":"lL+E;"},m4:{"^":"r+x;"},m5:{"^":"m4+E;"},mk:{"^":"r+x;"},ml:{"^":"mk+E;"}}],["","",,P,{"^":"",T:{"^":"b;",$isj:1,
$asj:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$isko:1}}],["","",,P,{"^":"",nN:{"^":"r;0l:length=","%":"AudioBuffer"},nO:{"^":"l9;",
j:function(a,b){return P.b4(a.get(H.H(b)))},
A:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b4(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.f])
this.A(a,new P.hN(z))
return z},
gl:function(a){return a.size},
n:function(a,b,c){throw H.a(P.D("Not supported"))},
$asal:function(){return[P.f,null]},
$isM:1,
$asM:function(){return[P.f,null]},
"%":"AudioParamMap"},hN:{"^":"m:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},nP:{"^":"aj;0l:length=","%":"AudioTrackList"},hQ:{"^":"aj;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oo:{"^":"hQ;0l:length=","%":"OfflineAudioContext"},l9:{"^":"r+al;"}}],["","",,P,{"^":"",du:{"^":"r;",
j_:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$isce)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ne(g))
return}if(!!z.$isdc)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c9("Incorrect number or type of arguments"))},
iZ:function(a,b,c,d,e,f,g){return this.j_(a,b,c,d,e,f,g,null,null,null)},
$isdu:1,
"%":"WebGLRenderingContext"},kv:{"^":"r;",$iskv:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ow:{"^":"m2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return P.b4(a.item(b))},
n:function(a,b,c){H.F(b)
H.d(c,"$isM")
throw H.a(P.D("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[[P.M,,,]]},
$isj:1,
$asj:function(){return[[P.M,,,]]},
$ise:1,
$ase:function(){return[[P.M,,,]]},
$asE:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},m1:{"^":"r+x;"},m2:{"^":"m1+E;"}}],["","",,O,{"^":"",aU:{"^":"b;0a,0b,0c,0d,$ti",
bX:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
d1:function(a,b,c){var z=H.ao(this,"aU",0)
H.l(b,{func:1,ret:P.Q,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.n,[P.j,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
bl:function(a,b){return this.d1(a,null,b)},
h3:function(a){var z
H.v(a,"$isj",[H.ao(this,"aU",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
f6:function(a,b){var z
H.v(b,"$isj",[H.ao(this,"aU",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.aA(z,z.length,0,[H.y(z,0)])},
H:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ao(this,"aU",0)
H.z(b,z)
z=[z]
if(this.h3(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.f6(x,H.c([b],z))}},
$isj:1,
t:{
d8:function(a){var z=new O.aU([a])
z.bX(a)
return z}}},dn:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
f7:function(a){var z=this.b
if(!(z==null))z.F(a)},
aI:function(){return this.f7(null)},
ga_:function(a){var z=this.a
if(z.length>0)return C.a.gas(z)
else return V.ch()},
eA:function(a){var z=this.a
if(a==null)C.a.h(z,V.ch())
else C.a.h(z,a)
this.aI()},
cM:function(){var z=this.a
if(z.length>0){z.pop()
this.aI()}}}}],["","",,E,{"^":"",d1:{"^":"b;"},aW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
dc:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.aA(z,z.length,0,[H.y(z,0)]);z.C();){y=z.d
if(y.f==null)y.dc()}},
sbT:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gw().a0(0,this.ges())
y=this.c
if(y!=null)y.gw().h(0,this.ges())
x=new D.N("shape",z,this.c,this,[F.ag])
x.b=!0
this.ab(x)}},
scS:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gw().a0(0,this.geu())
y=this.f
this.f=a
if(a!=null)a.gw().h(0,this.geu())
this.dc()
x=new D.N("technique",y,this.f,this,[O.cI])
x.b=!0
this.ab(x)}},
sb9:function(a){var z,y
if(!J.V(this.r,a)){z=this.r
if(z!=null)z.gw().a0(0,this.ger())
if(a!=null)a.gw().h(0,this.ger())
this.r=a
y=new D.N("mover",z,a,this,[U.af])
y.b=!0
this.ab(y)}},
am:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.b_(0,b,this):null
if(!J.V(y,this.x)){x=this.x
this.x=y
w=new D.N("matrix",x,y,this,[V.aL])
w.b=!0
this.ab(w)}z=this.f
if(z!=null)z.am(0,b)
for(z=this.y.a,z=new J.aA(z,z.length,0,[H.y(z,0)]);z.C();)z.d.am(0,b)},
aE:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga_(z))
else C.a.h(z.a,y.p(0,z.ga_(z)))
z.aI()
a.eB(this.f)
z=a.dy
x=(z&&C.a).gas(z)
if(x!=null&&this.d!=null)x.eC(a,this)
for(z=this.y.a,z=new J.aA(z,z.length,0,[H.y(z,0)]);z.C();)z.d.aE(a)
a.ey()
a.dx.cM()},
gw:function(){var z=this.z
if(z==null){z=D.P()
this.z=z}return z},
ab:function(a){var z=this.z
if(!(z==null))z.F(a)},
a1:function(){return this.ab(null)},
iC:[function(a){H.d(a,"$isA")
this.e=null
this.ab(a)},function(){return this.iC(null)},"jV","$1","$0","ges",0,2,0],
iD:[function(a){this.ab(H.d(a,"$isA"))},function(){return this.iD(null)},"jW","$1","$0","geu",0,2,0],
iB:[function(a){this.ab(H.d(a,"$isA"))},function(){return this.iB(null)},"jU","$1","$0","ger",0,2,0],
iz:[function(a){this.ab(H.d(a,"$isA"))},function(){return this.iz(null)},"jS","$1","$0","geq",0,2,0],
jR:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isj",[E.aW],"$asj")
for(z=b.length,y=this.geq(),x={func:1,ret:-1,args:[D.A]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bi()
t.d=0
u.sa4(t)}t=u.ga4()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a1()},"$2","giy",8,0,9],
jT:[function(a,b){var z,y,x,w,v
H.v(b,"$isj",[E.aW],"$asj")
for(z=b.length,y=this.geq(),x=0;x<b.length;b.length===z||(0,H.B)(b),++x){w=b[x]
if(w!=null){if(w.ga4()==null){v=new D.bi()
v.d=0
w.sa4(v)}w.ga4().a0(0,y)}}this.a1()},"$2","giA",8,0,9],
$isaZ:1,
t:{
db:function(a,b,c,d,e,f){var z,y
z=new E.aW()
z.a=d
z.b=!0
y=O.d8(E.aW)
z.y=y
y.bl(z.giy(),z.giA())
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
z.sbT(0,e)
z.scS(f)
z.sb9(c)
return z}}},jG:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
f3:function(a,b){var z,y
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
z=new O.dn()
y=[V.aL]
z.a=H.c([],y)
z.gw().h(0,new E.jI(this))
this.cy=z
z=new O.dn()
z.a=H.c([],y)
z.gw().h(0,new E.jJ(this))
this.db=z
z=new O.dn()
z.a=H.c([],y)
z.gw().h(0,new E.jK(this))
this.dx=z
z=H.c([],[O.cI])
this.dy=z
C.a.h(z,null)
this.fr=new H.aX(0,0,[P.f,A.dv])},
giN:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga_(z)
y=this.db
y=z.p(0,y.ga_(y))
this.z=y
z=y}return z},
gez:function(){var z,y
z=this.ch
if(z==null){z=this.giN()
y=this.dx
y=z.p(0,y.ga_(y))
this.ch=y
z=y}return z},
geL:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.ga_(z)
y=this.dx
y=z.p(0,y.ga_(y))
this.cx=y
z=y}return z},
eB:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gas(z):a;(z&&C.a).h(z,y)},
ey:function(){var z=this.dy
if(z.length>1)z.pop()},
dJ:function(a){var z=a.b
if(z.length===0)throw H.a(P.t("May not cache a shader with no name."))
if(this.fr.bv(0,z))throw H.a(P.t('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.n(0,z,a)},
t:{
jH:function(a,b){var z=new E.jG(a,b)
z.f3(a,b)
return z}}},jI:{"^":"m:10;a",
$1:function(a){var z
H.d(a,"$isA")
z=this.a
z.z=null
z.ch=null}},jJ:{"^":"m:10;a",
$1:function(a){var z
H.d(a,"$isA")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jK:{"^":"m:10;a",
$1:function(a){var z
H.d(a,"$isA")
z=this.a
z.ch=null
z.cx=null}},kg:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z},
f9:[function(a){var z
H.d(a,"$isA")
z=this.x
if(!(z==null))z.F(a)
this.iT()},function(){return this.f9(null)},"f8","$1","$0","gd5",0,2,0],
gih:function(){var z,y,x
z=Date.now()
y=C.f.a5(P.et(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.at(z,!1)
return x/y},
dv:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.p()
if(typeof z!=="number")return H.o(z)
x=C.i.cC(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.p()
w=C.i.cC(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.fc(C.q,this.giS())},
iT:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.ki(this),{func:1,ret:-1,args:[P.a5]})
C.H.fw(z)
C.H.hd(z,W.hj(y,P.a5))}},"$0","giS",0,0,3],
iQ:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dv()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.at(w,!1)
x.y=P.et(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aI()
w=x.db
C.a.sl(w.a,0)
w.aI()
w=x.dx
C.a.sl(w.a,0)
w.aI()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aE(this.e)}x=this.z
if(!(x==null))x.F(null)}catch(v){z=H.ad(v)
y=H.bF(v)
P.e1("Error: "+H.k(z))
P.e1("Stack: "+H.k(y))
throw H.a(z)}},
t:{
kh:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$isd5)return E.fb(a,!0,!0,!0,!1)
y=W.d6(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gco(a).h(0,y)
w=E.fb(y,!0,!0,!0,!1)
w.a=a
return w},
fb:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kg()
y=P.iS(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
x=C.l.bR(a,"webgl",y)
x=H.d(x==null?C.l.bR(a,"experimental-webgl",y):x,"$isdu")
if(x==null)H.p(P.t("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jH(x,a)
w=new T.kb(x)
w.b=H.F(x.getParameter(3379))
w.c=H.F(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kI(a)
v=new X.iM()
v.c=new X.aN(!1,!1,!1)
v.d=P.cg(null,null,null,P.n)
w.b=v
v=new X.jc(w)
v.f=0
v.r=new V.a1(0,0)
v.x=new V.a1(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iX(w)
v.r=0
v.x=new V.a1(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kl(w)
v.e=0
v.f=new V.a1(0,0)
v.r=new V.a1(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.f5,P.b]])
w.z=v
u=document
t=W.ae
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a4(u,"contextmenu",H.l(w.gfR(),s),!1,t))
v=w.z
r=W.ai
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a4(a,"focus",H.l(w.gfU(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a4(a,"blur",H.l(w.gfN(),q),!1,r))
v=w.z
p=W.bN
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a4(u,"keyup",H.l(w.gfW(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a4(u,"keydown",H.l(w.gfV(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousedown",H.l(w.gfZ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mouseup",H.l(w.gh0(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousemove",H.l(w.gh_(),s),!1,t))
p=w.z
o=W.bW;(p&&C.a).h(p,W.a4(a,H.H(W.id(a)),H.l(w.gh1(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a4(u,"mousemove",H.l(w.gfS(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a4(u,"mouseup",H.l(w.gfT(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a4(u,"pointerlockchange",H.l(w.gh2(),q),!1,r))
r=w.z
q=W.bx
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a4(a,"touchstart",H.l(w.gh9(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchend",H.l(w.gh7(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchmove",H.l(w.gh8(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.at(Date.now(),!1)
z.cy=0
z.dv()
return z}}},ki:{"^":"m:35;a",
$1:function(a){var z
H.nA(a)
z=this.a
if(z.ch){z.ch=!1
z.iQ()}}}}],["","",,Z,{"^":"",fI:{"^":"b;a,b",t:{
dJ:function(a,b,c){var z
H.v(c,"$ise",[P.n],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bA(c)),35044)
a.bindBuffer(b,null)
return new Z.fI(b,z)}}},ed:{"^":"d1;a,b,c,d,e",
aA:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ad(y)
x=P.t('Failed to bind buffer attribute "'+J.aa(this.a)+'": '+H.k(z))
throw H.a(x)}},
i:function(a){return"["+J.aa(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},fJ:{"^":"b;a",$isnQ:1},ct:{"^":"b;a,0b,c,d",
ae:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aA:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aA(a)},
eI:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aE:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
ev:function(a){this.aA(a)
this.aE(a)
this.eI(a)},
i:function(a){var z,y,x,w,v,u
z=[P.f]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.aa(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(y,", ")+"\nAttrs:   "+C.a.m(u,", ")},
$isk6:1},ee:{"^":"b;0a",$isk6:1},cy:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bo(this.c)+"'")+"]"}},bc:{"^":"b;a",
gd2:function(a){var z,y
z=this.a
y=(z&$.$get$aH().a)!==0?3:0
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$b1().a)!==0)y+=2
if((z&$.$get$b2().a)!==0)y+=3
if((z&$.$get$bd().a)!==0)y+=3
if((z&$.$get$bV().a)!==0)y+=4
if((z&$.$get$by().a)!==0)++y
return(z&$.$get$b0().a)!==0?y+4:y},
hX:function(a){var z,y,x
z=$.$get$aH()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bd()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$by()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fH()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bc))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.f])
y=this.a
if((y&$.$get$aH().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$b1().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b2().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bd().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bV().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$by().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.m(z,"|")},
t:{
ax:function(a){return new Z.bc(a)}}}}],["","",,D,{"^":"",d7:{"^":"b;"},bi:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.A]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
a0:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.A]})
z=this.a
z=z==null?null:C.a.V(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).a0(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.V(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).a0(z,b)||y}return y},
F:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.A(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.A(y,new D.ii(z))
y=this.b
if(!(y==null))C.a.A(y,new D.ij(z))
z=this.b
if(!(z==null))C.a.sl(z,0)
return!0},
i5:function(){return this.F(null)},
iU:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.F(y)}}},
aG:function(a){return this.iU(a,!0,!1)},
t:{
P:function(){var z=new D.bi()
z.d=0
return z}}},ii:{"^":"m:32;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.A]})
z=this.a.a
z.b
a.$1(z)}},ij:{"^":"m:32;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.A]})
z=this.a.a
z.b
a.$1(z)}},A:{"^":"b;a,0b"},cz:{"^":"A;c,d,a,0b,$ti"},cA:{"^":"A;c,d,a,0b,$ti"},N:{"^":"A;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",ef:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ef))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
t:{"^":"nR<"}},eG:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eG))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},eH:{"^":"A;c,a,0b"},iM:{"^":"b;0a,0b,0c,0d",
iJ:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eH(a,this)
y.b=!0
return z.F(y)},
iF:function(a){var z,y
this.c=a.b
this.d.a0(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eH(a,this)
y.b=!0
return z.F(y)}},eL:{"^":"cF;x,y,c,d,e,a,0b"},iX:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aw:function(a,b){var z,y,x,w,v,u,t,s
z=new P.at(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.p()
v=b.b
u=this.ch
if(typeof v!=="number")return v.p()
t=new V.a1(y.a+x*w,y.b+v*u)
u=this.a.gaS()
s=new X.bP(a,new V.a1(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cL:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.F(this.aw(a,b))
return!0},
bb:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eR()
if(typeof z!=="number")return z.bQ()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.aw(a,b))
return!0},
ba:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.aw(a,b))
return!0},
iK:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaS()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.p()
t=a.b
s=this.cy
if(typeof t!=="number")return t.p()
w=new X.dp(new V.Z(v*u,t*s),y,x,new P.at(w,!1),this)
w.b=!0
z.F(w)
return!0},
fY:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.at(Date.now(),!1)
y=this.f
x=new X.eL(c,a,this.a.gaS(),b,z,this)
x.b=!0
y.F(x)
this.y=z
this.x=new V.a1(0,0)}},aN:{"^":"b;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aN))return!1
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
return z+(this.c?"Shift+":"")}},bP:{"^":"cF;x,y,z,Q,ch,c,d,e,a,0b"},jc:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c3:function(a,b,c){var z,y,x
z=new P.at(Date.now(),!1)
y=this.a.gaS()
x=new X.bP(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cL:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.F(this.c3(a,b,!0))
return!0},
bb:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eR()
if(typeof z!=="number")return z.bQ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.c3(a,b,!0))
return!0},
ba:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.c3(a,b,!1))
return!0},
iL:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaS()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.p()
u=a.b
t=this.ch
if(typeof u!=="number")return u.p()
x=new X.dp(new V.Z(w*v,u*t),y,b,new P.at(x,!1),this)
x.b=!0
z.F(x)
return!0},
gdQ:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
gbP:function(){var z=this.c
if(z==null){z=D.P()
this.c=z}return z},
geo:function(){var z=this.d
if(z==null){z=D.P()
this.d=z}return z}},dp:{"^":"cF;x,c,d,e,a,0b"},cF:{"^":"A;"},fg:{"^":"cF;x,y,z,Q,ch,c,d,e,a,0b"},kl:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aw:function(a,b){var z,y,x,w
H.v(a,"$ise",[V.a1],"$ase")
z=new P.at(Date.now(),!1)
y=a.length>0?a[0]:new V.a1(0,0)
x=this.a.gaS()
w=new X.fg(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iI:function(a){var z
H.v(a,"$ise",[V.a1],"$ase")
z=this.b
if(z==null)return!1
z.F(this.aw(a,!0))
return!0},
iG:function(a){var z
H.v(a,"$ise",[V.a1],"$ase")
z=this.c
if(z==null)return!1
z.F(this.aw(a,!0))
return!0},
iH:function(a){var z
H.v(a,"$ise",[V.a1],"$ase")
z=this.d
if(z==null)return!1
z.F(this.aw(a,!1))
return!0}},kI:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaS:function(){var z=this.a
return V.f0(0,0,(z&&C.l).gdN(z).c,C.l.gdN(z).d)},
dj:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eG(z,new X.aN(y,a.altKey,a.shiftKey))},
aO:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aN(y,a.altKey,a.shiftKey)},
cf:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aN(y,a.altKey,a.shiftKey)},
ax:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=z.top
if(typeof x!=="number")return x.J()
return new V.a1(y-w,x-v)},
b4:function(a){return new V.Z(a.movementX,a.movementY)},
cb:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a1])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.i.al(u.pageX)
C.i.al(u.pageY)
s=z.left
C.i.al(u.pageX)
C.a.h(y,new V.a1(t-s,C.i.al(u.pageY)-z.top))}return y},
au:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ef(z,new X.aN(y,a.altKey,a.shiftKey))},
c5:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.J()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jr:[function(a){this.f=!0},"$1","gfU",4,0,8],
jl:[function(a){this.f=!1},"$1","gfN",4,0,8],
jo:[function(a){H.d(a,"$isae")
if(this.f&&this.c5(a))a.preventDefault()},"$1","gfR",4,0,4],
jt:[function(a){var z
H.d(a,"$isbN")
if(!this.f)return
z=this.dj(a)
if(this.b.iJ(z))a.preventDefault()},"$1","gfW",4,0,28],
js:[function(a){var z
H.d(a,"$isbN")
if(!this.f)return
z=this.dj(a)
if(this.b.iF(z))a.preventDefault()},"$1","gfV",4,0,28],
jv:[function(a){var z,y,x,w
H.d(a,"$isae")
z=this.a
z.focus()
this.f=!0
this.aO(a)
if(this.x){y=this.au(a)
x=this.b4(a)
if(this.d.cL(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.au(a)
w=this.ax(a)
if(this.c.cL(y,w))a.preventDefault()},"$1","gfZ",4,0,4],
jx:[function(a){var z,y,x
H.d(a,"$isae")
this.aO(a)
z=this.au(a)
if(this.x){y=this.b4(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.bb(z,x))a.preventDefault()},"$1","gh0",4,0,4],
jq:[function(a){var z,y,x
H.d(a,"$isae")
if(!this.c5(a)){this.aO(a)
z=this.au(a)
if(this.x){y=this.b4(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.bb(z,x))a.preventDefault()}},"$1","gfT",4,0,4],
jw:[function(a){var z,y,x
H.d(a,"$isae")
this.aO(a)
z=this.au(a)
if(this.x){y=this.b4(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.ba(z,x))a.preventDefault()},"$1","gh_",4,0,4],
jp:[function(a){var z,y,x
H.d(a,"$isae")
if(!this.c5(a)){this.aO(a)
z=this.au(a)
if(this.x){y=this.b4(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.ba(z,x))a.preventDefault()}},"$1","gfS",4,0,4],
jy:[function(a){var z,y
H.d(a,"$isbW")
this.aO(a)
z=new V.Z((a&&C.G).gi3(a),C.G.gi4(a)).E(0,180)
if(this.x){if(this.d.iK(z))a.preventDefault()
return}if(this.r)return
y=this.ax(a)
if(this.c.iL(z,y))a.preventDefault()},"$1","gh1",4,0,39],
jz:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.au(this.y)
v=this.ax(this.y)
this.d.fY(w,v,x)}},"$1","gh2",4,0,8],
jF:[function(a){var z
H.d(a,"$isbx")
this.a.focus()
this.f=!0
this.cf(a)
z=this.cb(a)
if(this.e.iI(z))a.preventDefault()},"$1","gh9",4,0,11],
jD:[function(a){var z
H.d(a,"$isbx")
this.cf(a)
z=this.cb(a)
if(this.e.iG(z))a.preventDefault()},"$1","gh7",4,0,11],
jE:[function(a){var z
H.d(a,"$isbx")
this.cf(a)
z=this.cb(a)
if(this.e.iH(z))a.preventDefault()},"$1","gh8",4,0,11]}}],["","",,D,{"^":"",cv:{"^":"b;0a,0b,0c,0d",
gw:function(){var z=this.d
if(z==null){z=D.P()
this.d=z}return z},
aJ:[function(a){var z
H.d(a,"$isA")
z=this.d
if(!(z==null))z.F(a)},function(){return this.aJ(null)},"j7","$1","$0","gfc",0,2,0],
$isa7:1,
$isaZ:1},a7:{"^":"b;",$isaZ:1},iN:{"^":"aU;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gw:function(){var z=this.Q
if(z==null){z=D.P()
this.Q=z}return z},
aJ:function(a){var z=this.Q
if(!(z==null))z.F(a)},
fX:[function(a){var z
H.d(a,"$isA")
z=this.ch
if(!(z==null))z.F(a)},function(){return this.fX(null)},"ju","$1","$0","gds",0,2,0],
jA:[function(a){var z,y,x
H.v(a,"$isj",[D.a7],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.fb(x))return!1}return!0},"$1","gh4",4,0,41],
ji:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a7
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gds(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.d(b[u],"$isa7")
if(t instanceof D.cv)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bi()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cz(a,b,this,[z])
z.b=!0
this.aJ(z)},"$2","gfK",8,0,27],
jC:[function(a,b){var z,y,x,w,v,u
z=D.a7
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gds(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=H.d(b[w],"$isa7")
if(v instanceof D.cv)C.a.a0(this.e,v)
u=v.d
if(u==null){u=new D.bi()
u.d=0
v.d=u}u.a0(0,x)}z=new D.cA(a,b,this,[z])
z.b=!0
this.aJ(z)},"$2","gh6",8,0,27],
fb:function(a){var z=C.a.V(this.e,a)
return z},
$asj:function(){return[D.a7]},
$asaU:function(){return[D.a7]}},jn:{"^":"b;",$isa7:1,$isaZ:1},jZ:{"^":"b;",$isa7:1,$isaZ:1},kd:{"^":"b;",$isa7:1,$isaZ:1},ke:{"^":"b;",$isa7:1,$isaZ:1},kf:{"^":"b;",$isa7:1,$isaZ:1}}],["","",,V,{"^":"",
nT:[function(a,b){if(typeof b!=="number")return b.J()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","j9",8,0,40],
nJ:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.bj(a-b,z)
return(a<0?a+z:a)+b},
U:function(a,b,c){if(a==null)return C.b.ag("null",c)
return C.b.ag(C.i.eG($.q.$2(a,0)?0:a,b),c+b+1)},
bE:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$ise",[P.C],"$ase")
z=H.c([],[P.f])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.U(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.n(z,u,C.b.ag(z[u],x))}return z},
e0:function(a,b){return C.i.j2(Math.pow(b,C.Q.cC(Math.log(H.nb(a))/Math.log(b))))},
ab:{"^":"b;a,b,c",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}},
a6:{"^":"b;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}},
eP:{"^":"b;a,b,c,d,e,f,r,x,y",
a7:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.C])
return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eP))return!1
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
z=[P.C]
y=V.bE(H.c([this.a,this.d,this.r],z),3,0)
x=V.bE(H.c([this.b,this.e,this.x],z),3,0)
w=V.bE(H.c([this.c,this.f,this.y],z),3,0)
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
aL:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a7:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.C])
return z},
em:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.p()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.p()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.p()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.p()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.p()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.p()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.q.$2(a2,0))return V.ch()
a3=1/a2
a4=-w
a5=-i
return V.aM((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
p:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.p()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.p()
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
if(typeof f!=="number")return f.p()
e=this.f
if(typeof e!=="number")return e.p()
d=this.r
if(typeof d!=="number")return d.p()
c=this.x
if(typeof c!=="number")return c.p()
b=this.y
if(typeof b!=="number")return b.p()
a=this.z
if(typeof a!=="number")return a.p()
a0=this.Q
if(typeof a0!=="number")return a0.p()
a1=this.ch
if(typeof a1!=="number")return a1.p()
a2=this.cx
if(typeof a2!=="number")return a2.p()
a3=this.cy
if(typeof a3!=="number")return a3.p()
a4=this.db
if(typeof a4!=="number")return a4.p()
a5=this.dx
if(typeof a5!=="number")return a5.p()
return V.aM(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.p()
x=this.b
w=a.b
if(typeof x!=="number")return x.p()
v=this.c
u=a.c
if(typeof v!=="number")return v.p()
t=this.e
if(typeof t!=="number")return t.p()
s=this.f
if(typeof s!=="number")return s.p()
r=this.r
if(typeof r!=="number")return r.p()
q=this.y
if(typeof q!=="number")return q.p()
p=this.z
if(typeof p!=="number")return p.p()
o=this.Q
if(typeof o!=="number")return o.p()
return new V.L(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.p()
x=this.b
w=a.b
if(typeof x!=="number")return x.p()
v=this.c
u=a.c
if(typeof v!=="number")return v.p()
t=this.d
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.p()
r=this.f
if(typeof r!=="number")return r.p()
q=this.r
if(typeof q!=="number")return q.p()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.p()
n=this.z
if(typeof n!=="number")return n.p()
m=this.Q
if(typeof m!=="number")return m.p()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.aC(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aL))return!1
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
i:function(a){return this.M()},
ed:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.C]
y=V.bE(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bE(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bE(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bE(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
M:function(){return this.ed("",3,0)},
B:function(a){return this.ed(a,3,0)},
t:{
aM:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ch:function(){return V.aM(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eQ:function(a,b,c){var z,y,x,w,v
z=c.E(0,Math.sqrt(c.I(c)))
y=b.b8(z)
x=y.E(0,Math.sqrt(y.I(y)))
w=z.b8(x)
v=new V.L(a.a,a.b,a.c)
return V.aM(x.a,w.a,z.a,x.P(0).I(v),x.b,w.b,z.b,w.P(0).I(v),x.c,w.c,z.c,z.P(0).I(v),0,0,0,1)}}},
a1:{"^":"b;a,b",
J:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}},
aC:{"^":"b;a,b,c",
D:function(a,b){return new V.aC(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a,b){return new V.aC(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aC))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}},
eX:{"^":"b;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eX))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}},
f_:{"^":"b;a,b,c,d",
gaa:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f_))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"},
t:{
f0:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f_(a,b,c,d)}}},
Z:{"^":"b;a,b",
ip:[function(a){return Math.sqrt(this.I(this))},"$0","gl",1,0,25],
I:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
p:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.Z(z*b,y*b)},
E:function(a,b){var z,y
if($.q.$2(b,0))return new V.Z(0,0)
z=this.a
if(typeof z!=="number")return z.E()
y=this.b
if(typeof y!=="number")return y.E()
return new V.Z(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}},
L:{"^":"b;a,b,c",
ip:[function(a){return Math.sqrt(this.I(this))},"$0","gl",1,0,25],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cG:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.L(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b8:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.L(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.L(-this.a,-this.b,-this.c)},
E:function(a,b){if($.q.$2(b,0))return new V.L(0,0,0)
return new V.L(this.a/b,this.b/b,this.c/b)},
en:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hX:{"^":"d7;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bY:function(a){var z=V.nJ(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.P()
this.y=z}return z},
S:function(a){var z=this.y
if(!(z==null))z.F(a)},
scW:function(a,b){},
scI:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bY(z)}z=new D.N("maximumLocation",y,this.b,this,[P.C])
z.b=!0
this.S(z)}},
scK:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bY(z)}z=new D.N("minimumLocation",y,this.c,this,[P.C])
z.b=!0
this.S(z)}},
sa9:function(a,b){var z,y
b=this.bY(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.N("location",y,b,this,[P.C])
z.b=!0
this.S(z)}},
scJ:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.N("maximumVelocity",y,a,this,[P.C])
z.b=!0
this.S(z)}},
sT:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.N("velocity",x,a,this,[P.C])
z.b=!0
this.S(z)}},
scr:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.N("dampening",y,a,this,[P.C])
z.b=!0
this.S(z)}},
am:function(a,b){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa9(0,this.d+y*b)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sT(y)}},
t:{
d9:function(){var z=new U.hX()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ej:{"^":"af;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
b_:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ej))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")},
t:{
ek:function(a){var z=new U.ej()
z.a=a
return z}}},ez:{"^":"aU;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
S:[function(a){var z
H.d(a,"$isA")
z=this.e
if(!(z==null))z.F(a)},function(){return this.S(null)},"ah","$1","$0","gaK",0,2,0],
jh:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.af
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gw()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cz(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gfJ",8,0,31],
jB:[function(a,b){var z,y,x,w,v
z=U.af
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaK(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gw().a0(0,x)}z=new D.cA(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gh5",8,0,31],
b_:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aA(z,z.length,0,[H.y(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.b_(0,b,c)
if(w!=null)x=x==null?w:w.p(0,x)}}this.f=x==null?V.ch():x
z=this.e
if(!(z==null))z.aG(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ez))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.V(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.af]},
$asaU:function(){return[U.af]},
$isaf:1},af:{"^":"d7;"},kJ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.cy
if(z==null){z=D.P()
this.cy=z}return z},
S:[function(a){var z
H.d(a,"$isA")
z=this.cy
if(!(z==null))z.F(a)},function(){return this.S(null)},"ah","$1","$0","gaK",0,2,0],
b6:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdQ().h(0,this.gc6())
this.a.c.geo().h(0,this.gc7())
this.a.c.gbP().h(0,this.gc8())
return!0},
fE:[function(a){H.d(a,"$isA")
if(!J.V(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc6",4,0,1],
fF:[function(a){var z,y,x,w,v,u,t
a=H.i(H.d(a,"$isA"),"$isbP")
if(!this.y)return
if(this.x){z=a.d.J(0,a.y)
z=new V.Z(z.a,z.b)
z=z.I(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.J(0,a.y)
z=new V.Z(y.a,y.b).p(0,2).E(0,z.gaa())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.p()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sT(z*10*x)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=new V.Z(x.a,x.b).p(0,2).E(0,z.gaa())
x=this.b
v=w.a
if(typeof v!=="number")return v.P()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa9(0,-v*u+t)
this.b.sT(0)
y=y.J(0,a.z)
this.Q=new V.Z(y.a,y.b).p(0,2).E(0,z.gaa())}this.ah()},"$1","gc7",4,0,1],
fG:[function(a){var z,y,x
H.d(a,"$isA")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.I(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.p()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sT(y*10*x)
this.ah()}},"$1","gc8",4,0,1],
b_:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.ch=y
x=b.y
this.b.am(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aM(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isaf:1},kK:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.P()
this.fx=z}return z},
S:[function(a){var z
H.d(a,"$isA")
z=this.fx
if(!(z==null))z.F(a)},function(){return this.S(null)},"ah","$1","$0","gaK",0,2,0],
b6:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdQ().h(0,this.gc6())
this.a.c.geo().h(0,this.gc7())
this.a.c.gbP().h(0,this.gc8())
z=this.a.d
y=z.f
if(y==null){y=D.P()
z.f=y
z=y}else z=y
z.h(0,this.gfB())
z=this.a.d
y=z.d
if(y==null){y=D.P()
z.d=y
z=y}else z=y
z.h(0,this.gfC())
z=this.a.e
y=z.b
if(y==null){y=D.P()
z.b=y
z=y}else z=y
z.h(0,this.ghu())
z=this.a.e
y=z.d
if(y==null){y=D.P()
z.d=y
z=y}else z=y
z.h(0,this.ght())
z=this.a.e
y=z.c
if(y==null){y=D.P()
z.c=y
z=y}else z=y
z.h(0,this.ghs())
return!0},
ao:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.Z(z,y)},
fE:[function(a){a=H.i(H.d(a,"$isA"),"$isbP")
if(!J.V(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc6",4,0,1],
fF:[function(a){var z,y,x,w,v,u,t
a=H.i(H.d(a,"$isA"),"$isbP")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.Z(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.ao(new V.Z(y.a,y.b).p(0,2).E(0,z.gaa()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ao(new V.Z(x.a,x.b).p(0,2).E(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa9(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.J(0,a.z)
this.dx=this.ao(new V.Z(y.a,y.b).p(0,2).E(0,z.gaa()))}this.ah()},"$1","gc7",4,0,1],
fG:[function(a){var z,y,x
H.d(a,"$isA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sT(-y*10*z)
this.ah()}},"$1","gc8",4,0,1],
jd:[function(a){if(H.i(H.d(a,"$isA"),"$iseL").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfB",4,0,1],
je:[function(a){var z,y,x,w,v,u,t
a=H.i(H.d(a,"$isA"),"$isbP")
if(!J.V(this.d,a.x.b))return
z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ao(new V.Z(x.a,x.b).p(0,2).E(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa9(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.J(0,a.z)
this.dx=this.ao(new V.Z(y.a,y.b).p(0,2).E(0,z.gaa()))
this.ah()},"$1","gfC",4,0,1],
jJ:[function(a){H.d(a,"$isA")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghu",4,0,1],
jI:[function(a){var z,y,x,w,v,u,t
a=H.i(H.d(a,"$isA"),"$isfg")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.Z(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.ao(new V.Z(y.a,y.b).p(0,2).E(0,z.gaa()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ao(new V.Z(x.a,x.b).p(0,2).E(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa9(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.J(0,a.z)
this.dx=this.ao(new V.Z(y.a,y.b).p(0,2).E(0,z.gaa()))}this.ah()},"$1","ght",4,0,1],
jH:[function(a){var z,y,x
H.d(a,"$isA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sT(-y*10*z)
this.ah()}},"$1","ghs",4,0,1],
b_:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.dy=y
x=b.y
this.c.am(0,x)
this.b.am(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aM(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.p(0,V.aM(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaf:1},kL:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gw:function(){var z=this.r
if(z==null){z=D.P()
this.r=z}return z},
S:function(a){var z=this.r
if(!(z==null))z.F(a)},
b6:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.P()
z.e=y
z=y}else z=y
y=this.gfH()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.P()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jf:[function(a){var z,y,x,w
H.d(a,"$isA")
if(!J.V(this.b,this.a.b.c))return
H.i(a,"$isdp")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.p()
w=z+y*x
if(z!==w){this.d=w
z=new D.N("zoom",z,w,this,[P.C])
z.b=!0
this.S(z)}},"$1","gfH",4,0,1],
b_:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aM(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isaf:1}}],["","",,M,{"^":"",ig:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
b0:[function(a){var z
H.d(a,"$isA")
z=this.x
if(!(z==null))z.F(a)},function(){return this.b0(null)},"j8","$1","$0","gaL",0,2,0],
jm:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aW
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaL(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bi()
s.d=0
t.sa4(s)}s=t.ga4()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cz(a,b,this,[z])
z.b=!0
this.b0(z)},"$2","gfP",8,0,9],
jn:[function(a,b){var z,y,x,w,v,u
z=E.aW
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaL(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null){if(v.ga4()==null){u=new D.bi()
u.d=0
v.sa4(u)}v.ga4().a0(0,x)}}z=new D.cA(a,b,this,[z])
z.b=!0
this.b0(z)},"$2","gfQ",8,0,9],
gw:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z},
aE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.eB(this.c)
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
u=C.i.al(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.i.al(v.b*w)
s=C.i.al(v.c*x)
a.c=s
v=C.i.al(v.d*w)
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
n=V.aM(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.eA(n)
y=$.eW
if(y==null){y=V.eQ(new V.aC(0,0,0),new V.L(0,1,0),new V.L(0,0,-1))
$.eW=y
m=y}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.p(0,m)}a.db.eA(m)
for(z=this.d.a,z=new J.aA(z,z.length,0,[H.y(z,0)]);z.C();)z.d.am(0,a)
for(z=this.d.a,z=new J.aA(z,z.length,0,[H.y(z,0)]);z.C();)z.d.aE(a)
this.a.toString
a.cy.cM()
a.db.cM()
this.b.toString
a.ey()},
$isos:1}}],["","",,A,{"^":"",e8:{"^":"b;a,b,c"},hM:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
i6:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dP:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eB:{"^":"dv;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r,0x,0y"},eO:{"^":"dv;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aq,0ak,0bx,0dR,0by,0bz,0dS,0dT,0bA,0bB,0dU,0dV,0bC,0bD,0dW,0dX,0bE,0dY,0dZ,0bF,0e_,0e0,0bG,0bH,0bI,0e1,0e2,0bJ,0bK,0e3,0e4,0bL,0e5,0cu,0e6,0cv,0e7,0cw,0e8,0cz,0e9,0cA,0ea,0cB,a,b,0c,0d,0e,0f,0r,0x,0y",
f2:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.aq("")
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
a1.hz(z)
a1.hG(z)
a1.hA(z)
a1.hO(z)
a1.hP(z)
a1.hI(z)
a1.hT(z)
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
v=this.z
z=new P.aq("")
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
v.hD(z)
v.hy(z)
v.hB(z)
v.hE(z)
v.hM(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hK(z)
v.hL(z)}v.hH(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.c:r+="   return 1.0;\n"
z.a=r
break
case C.h:r+="   return alpha;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.f])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.m(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hC(z)
v.hJ(z)
v.hN(z)
v.hQ(z)
v.hR(z)
v.hS(z)
v.hF(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.f])
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
n="vec4("+C.a.m(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.el(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.i(this.y.q(0,"invViewMat"),"$isau")
if(y)this.dy=H.i(this.y.q(0,"objMat"),"$isau")
if(w)this.fr=H.i(this.y.q(0,"viewObjMat"),"$isau")
this.fy=H.i(this.y.q(0,"projViewObjMat"),"$isau")
if(a1.x2)this.k1=H.i(this.y.q(0,"txt2DMat"),"$isdG")
if(a1.y1)this.k2=H.i(this.y.q(0,"txtCubeMat"),"$isau")
if(a1.y2)this.k3=H.i(this.y.q(0,"colorMat"),"$isau")
this.r1=H.c([],[A.au])
y=a1.aq
if(y>0){this.k4=H.d(this.y.q(0,"bendMatCount"),"$isS")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.p(P.t("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.i(l,"$isau"))}}y=a1.a
if(y!==C.c){this.r2=H.i(this.y.q(0,"emissionClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.d:this.rx=H.i(this.y.q(0,"emissionTxt"),"$isav")
this.x1=H.i(this.y.q(0,"nullEmissionTxt"),"$isS")
break
case C.e:this.ry=H.i(this.y.q(0,"emissionTxt"),"$isaw")
this.x1=H.i(this.y.q(0,"nullEmissionTxt"),"$isS")
break}}y=a1.b
if(y!==C.c){this.x2=H.i(this.y.q(0,"ambientClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.d:this.y1=H.i(this.y.q(0,"ambientTxt"),"$isav")
this.aq=H.i(this.y.q(0,"nullAmbientTxt"),"$isS")
break
case C.e:this.y2=H.i(this.y.q(0,"ambientTxt"),"$isaw")
this.aq=H.i(this.y.q(0,"nullAmbientTxt"),"$isS")
break}}y=a1.c
if(y!==C.c){this.ak=H.i(this.y.q(0,"diffuseClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.d:this.bx=H.i(this.y.q(0,"diffuseTxt"),"$isav")
this.by=H.i(this.y.q(0,"nullDiffuseTxt"),"$isS")
break
case C.e:this.dR=H.i(this.y.q(0,"diffuseTxt"),"$isaw")
this.by=H.i(this.y.q(0,"nullDiffuseTxt"),"$isS")
break}}y=a1.d
if(y!==C.c){this.bz=H.i(this.y.q(0,"invDiffuseClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.d:this.dS=H.i(this.y.q(0,"invDiffuseTxt"),"$isav")
this.bA=H.i(this.y.q(0,"nullInvDiffuseTxt"),"$isS")
break
case C.e:this.dT=H.i(this.y.q(0,"invDiffuseTxt"),"$isaw")
this.bA=H.i(this.y.q(0,"nullInvDiffuseTxt"),"$isS")
break}}y=a1.e
if(y!==C.c){this.bD=H.i(this.y.q(0,"shininess"),"$isa0")
this.bB=H.i(this.y.q(0,"specularClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.d:this.dU=H.i(this.y.q(0,"specularTxt"),"$isav")
this.bC=H.i(this.y.q(0,"nullSpecularTxt"),"$isS")
break
case C.e:this.dV=H.i(this.y.q(0,"specularTxt"),"$isaw")
this.bC=H.i(this.y.q(0,"nullSpecularTxt"),"$isS")
break}}switch(a1.f){case C.c:break
case C.h:break
case C.d:this.dW=H.i(this.y.q(0,"bumpTxt"),"$isav")
this.bE=H.i(this.y.q(0,"nullBumpTxt"),"$isS")
break
case C.e:this.dX=H.i(this.y.q(0,"bumpTxt"),"$isaw")
this.bE=H.i(this.y.q(0,"nullBumpTxt"),"$isS")
break}if(a1.dy){this.dY=H.i(this.y.q(0,"envSampler"),"$isaw")
this.dZ=H.i(this.y.q(0,"nullEnvTxt"),"$isS")
y=a1.r
if(y!==C.c){this.bF=H.i(this.y.q(0,"reflectClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.d:this.e_=H.i(this.y.q(0,"reflectTxt"),"$isav")
this.bG=H.i(this.y.q(0,"nullReflectTxt"),"$isS")
break
case C.e:this.e0=H.i(this.y.q(0,"reflectTxt"),"$isaw")
this.bG=H.i(this.y.q(0,"nullReflectTxt"),"$isS")
break}}y=a1.x
if(y!==C.c){this.bH=H.i(this.y.q(0,"refraction"),"$isa0")
this.bI=H.i(this.y.q(0,"refractClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.d:this.e1=H.i(this.y.q(0,"refractTxt"),"$isav")
this.bJ=H.i(this.y.q(0,"nullRefractTxt"),"$isS")
break
case C.e:this.e2=H.i(this.y.q(0,"refractTxt"),"$isaw")
this.bJ=H.i(this.y.q(0,"nullRefractTxt"),"$isS")
break}}}y=a1.y
if(y!==C.c){this.bK=H.i(this.y.q(0,"alpha"),"$isa0")
switch(y){case C.c:break
case C.h:break
case C.d:this.e3=H.i(this.y.q(0,"alphaTxt"),"$isav")
this.bL=H.i(this.y.q(0,"nullAlphaTxt"),"$isS")
break
case C.e:this.e4=H.i(this.y.q(0,"alphaTxt"),"$isaw")
this.bL=H.i(this.y.q(0,"nullAlphaTxt"),"$isS")
break}}this.cu=H.c([],[A.ft])
this.cv=H.c([],[A.fu])
this.cw=H.c([],[A.fv])
this.cz=H.c([],[A.fw])
this.cA=H.c([],[A.fx])
this.cB=H.c([],[A.fy])
if(a1.k2){y=a1.z
if(y>0){this.e5=H.d(this.y.q(0,"dirLightCount"),"$isS")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isO")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isO")
x=this.cu;(x&&C.a).h(x,new A.ft(m,l,k))}}y=a1.Q
if(y>0){this.e6=H.d(this.y.q(0,"pntLightCount"),"$isS")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isO")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isO")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isO")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isa0")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isa0")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isa0")
x=this.cv;(x&&C.a).h(x,new A.fu(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.e7=H.d(this.y.q(0,"spotLightCount"),"$isS")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isO")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isO")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isO")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isO")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isa0")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isa0")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isa0")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isa0")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isa0")
x=this.cw;(x&&C.a).h(x,new A.fv(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.e8=H.d(this.y.q(0,"txtDirLightCount"),"$isS")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isO")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isO")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isO")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isO")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isO")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isS")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isav")
x=this.cz;(x&&C.a).h(x,new A.fw(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.e9=H.d(this.y.q(0,"txtPntLightCount"),"$isS")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isO")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isO")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isdG")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isO")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isS")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isa0")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isa0")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isa0")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isaw")
x=this.cA;(x&&C.a).h(x,new A.fx(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.ea=H.d(this.y.q(0,"txtSpotLightCount"),"$isS")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isO")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isO")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isO")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isO")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isO")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isS")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isO")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isa0")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isa0")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(c,"$isa0")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(b,"$isa0")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a,"$isa0")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a0,"$isav")
x=this.cB;(x&&C.a).h(x,new A.fy(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ai:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.eU(c)
b.a.uniform1i(b.d,0)}},
ad:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
j3:function(a,b){var z,y
z=a.ak
y=new A.eO(b,z)
y.d4(b,z)
y.f2(a,b)
return y}}},j6:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aq,ak,bx",
hz:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aq+"];\n"
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
hG:function(a){var z
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
hA:function(a){var z
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
hO:function(a){var z,y
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
hP:function(a){var z,y
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
hI:function(a){var z
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
hT:function(a){var z
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
av:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.an(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hD:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.av(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   return emissionClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hy:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.av(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   return ambientClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hB:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.av(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hE:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.av(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hM:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.av(a,z,"specular")
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
case C.h:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hH:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.h:break
case C.d:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.e:z+="uniform samplerCube bumpTxt;\n"
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
case C.h:z+="   return normalize(normalVec);\n"
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
case C.e:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hK:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.av(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hL:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.av(a,z,"refract")
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
case C.h:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hC:function(a){var z,y
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
hJ:function(a){var z,y
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
hN:function(a){var z,y
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
hQ:function(a){var z,y,x
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
hR:function(a){var z,y,x
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
hS:function(a){var z,y,x
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
hF:function(a){var z
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
i:function(a){return this.ak}},ft:{"^":"b;a,b,c"},fw:{"^":"b;a,b,c,d,e,f,r,x"},fu:{"^":"b;a,b,c,d,e,f,r"},fx:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fv:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fy:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dv:{"^":"d1;",
d4:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
el:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.dk(b,35633)
this.f=this.dk(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.dT(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.p(P.t("Failed to link shader: "+H.k(x)))}this.hn()
this.hp()},
aA:function(a){a.a.useProgram(this.r)
this.x.i6()},
dk:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dT(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.t("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
hn:function(){var z,y,x,w,v,u
z=H.c([],[A.e8])
y=this.a
x=H.F(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.e8(y,v.name,u))}this.x=new A.hM(z)},
hp:function(){var z,y,x,w,v,u
z=H.c([],[A.ah])
y=this.a
x=H.F(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.i2(v.type,v.size,v.name,u))}this.y=new A.ku(z)},
aN:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.S(z,y,b,c)
else return A.dE(z,y,b,a,c)},
ft:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.av(z,y,b,c)
else return A.dE(z,y,b,a,c)},
fu:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aw(z,y,b,c)
else return A.dE(z,y,b,a,c)},
bs:function(a,b){return new P.fN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
i2:function(a,b,c,d){switch(a){case 5120:return this.aN(b,c,d)
case 5121:return this.aN(b,c,d)
case 5122:return this.aN(b,c,d)
case 5123:return this.aN(b,c,d)
case 5124:return this.aN(b,c,d)
case 5125:return this.aN(b,c,d)
case 5126:return new A.a0(this.a,this.r,c,d)
case 35664:return new A.kq(this.a,this.r,c,d)
case 35665:return new A.O(this.a,this.r,c,d)
case 35666:return new A.dF(this.a,this.r,c,d)
case 35667:return new A.kr(this.a,this.r,c,d)
case 35668:return new A.ks(this.a,this.r,c,d)
case 35669:return new A.kt(this.a,this.r,c,d)
case 35674:return new A.kw(this.a,this.r,c,d)
case 35675:return new A.dG(this.a,this.r,c,d)
case 35676:return new A.au(this.a,this.r,c,d)
case 35678:return this.ft(b,c,d)
case 35680:return this.fu(b,c,d)
case 35670:throw H.a(this.bs("BOOL",c))
case 35671:throw H.a(this.bs("BOOL_VEC2",c))
case 35672:throw H.a(this.bs("BOOL_VEC3",c))
case 35673:throw H.a(this.bs("BOOL_VEC4",c))
default:throw H.a(P.t("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cu:{"^":"b;a,b",
i:function(a){return this.b}},ah:{"^":"b;"},ku:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.M()},
ig:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
M:function(){return this.ig("\n")}},S:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},kr:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},ks:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},kt:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},kp:{"^":"ah;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
t:{
dE:function(a,b,c,d,e){var z=new A.kp(a,b,c,e)
z.f=d
z.e=P.iV(d,0,!1,P.n)
return z}}},a0:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},kq:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},O:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},dF:{"^":"ah;a,b,c,d",
bk:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.k(this.c)}},kw:{"^":"ah;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},dG:{"^":"ah;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bA(H.v(a,"$ise",[P.C],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},au:{"^":"ah;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bA(H.v(a,"$ise",[P.C],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},av:{"^":"ah;a,b,c,d",
eU:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},aw:{"^":"ah;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
cS:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
c_:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.L(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.L(t+h,s+f,r+g)
z.b=q
p=new V.L(t-h,s-f,r-g)
z.c=p
o=new V.L(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cS(y)
k=F.cS(z.b)
j=F.nG(d,e,new F.mV(z,F.cS(z.c),F.cS(z.d),k,l,c),b)
if(j!=null)a.iv(j)},
nG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.a3,P.C,P.C]})
if(a<1)return
if(b<1)return
z=F.bT()
y=H.c([],[F.a3])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cN(null,null,new V.a6(u,0,0,1),null,null,new V.a1(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cq(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cN(null,null,new V.a6(o,n,m,1),null,null,new V.a1(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cq(d))}}z.d.hV(a+1,b+1,y)
return z},
mV:{"^":"m:46;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cG(z.b,b).cG(z.d.cG(z.c,b),c)
z=new V.aC(y.a,y.b,y.c)
if(!J.V(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a1()}a.sj0(y.E(0,Math.sqrt(y.I(y))))
z=1-b
x=1-c
x=new V.eX(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.V(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a1()}}},
ap:{"^":"b;0a,0b,0c,0d,0e",
gct:function(){return this.a==null||this.b==null||this.c==null},
fj:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.L(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.en())return
return v.E(0,Math.sqrt(v.I(v)))},
fo:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.J(0,y)
z=new V.L(z.a,z.b,z.c)
v=z.E(0,Math.sqrt(z.I(z)))
z=w.J(0,y)
z=new V.L(z.a,z.b,z.c)
z=v.b8(z.E(0,Math.sqrt(z.I(z))))
return z.E(0,Math.sqrt(z.I(z)))},
cn:function(){if(this.d!=null)return!0
var z=this.fj()
if(z==null){z=this.fo()
if(z==null)return!1}this.d=z
this.a.a.a1()
return!0},
fi:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.L(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.en())return
return v.E(0,Math.sqrt(v.I(v)))},
fn:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.J(0,u)
z=new V.L(z.a,z.b,z.c)
m=z.E(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.J(0,u)
z=new V.aC(z.a*l,z.b*l,z.c*l).D(0,u).J(0,x)
z=new V.L(z.a,z.b,z.c)
m=z.E(0,Math.sqrt(z.I(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.E(0,Math.sqrt(z.I(z)))
z=k.b8(m)
z=z.E(0,Math.sqrt(z.I(z))).b8(k)
m=z.E(0,Math.sqrt(z.I(z)))}return m},
cm:function(){if(this.e!=null)return!0
var z=this.fi()
if(z==null){z=this.fn()
if(z==null)return!1}this.e=z
this.a.a.a1()
return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
B:function(a){var z,y
if(this.gct())return a+"disposed"
z=a+C.b.ag(J.aa(this.a.e),0)+", "+C.b.ag(J.aa(this.b.e),0)+", "+C.b.ag(J.aa(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
M:function(){return this.B("")},
t:{
cc:function(a,b,c){var z,y,x
z=new F.ap()
y=a.a
if(y==null)H.p(P.t("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.t("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a1()
return z}}},
ba:{"^":"b;0a,0b",
gct:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
B:function(a){if(this.gct())return a+"disposed"
return a+C.b.ag(J.aa(this.a.e),0)+", "+C.b.ag(J.aa(this.b.e),0)},
M:function(){return this.B("")}},
dt:{"^":"b;0a",
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ag(J.aa(z.e),0)},
M:function(){return this.B("")},
t:{
jo:function(a){var z=new F.dt()
if(a.a==null)H.p(P.t("May not create a point with a vertex which is not attached to a shape."))
z.a=a
C.a.h(a.b.b,z)
C.a.h(z.a.a.b.b,z)
z.a.a.a1()
return z}}},
ag:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
iv:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.R()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.aT())}this.a.R()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.jo(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.R()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.ba()
s=p.a
if(s==null)H.p(P.t("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.t("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.F(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.R()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.cc(p,o,l)}z=this.e
if(!(z==null))z.aG(0)},
aC:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aC()||!1
if(!this.a.aC())y=!1
z=this.e
if(!(z==null))z.aG(0)
return y},
aR:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aR()||!1
if(!this.a.aR())y=!1
z=this.e
if(!(z==null))z.aG(0)
return y},
bu:function(){var z=this.e
if(!(z==null))++z.d
this.a.bu()
z=this.e
if(!(z==null))z.aG(0)
return!0},
dM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aH()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$b2().a)!==0)++w
if((x&$.$get$bd().a)!==0)++w
if((x&$.$get$bV().a)!==0)++w
if((x&$.$get$by().a)!==0)++w
if((x&$.$get$b0().a)!==0)++w
v=b.gd2(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.C
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ed])
for(r=0,q=0;q<w;++q){p=b.hX(q)
o=p.gd2(p)
C.a.n(s,q,new Z.ed(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].iq(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.n(t,l,m[k]);++l}}r+=o}H.v(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bA(t)),35044)
y.bindBuffer(34962,null)
i=new Z.ct(new Z.fI(34962,j),s,b)
i.b=H.c([],[Z.cy])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.R()
C.a.h(h,g.e)}f=Z.dJ(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cy(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.R()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.R()
C.a.h(h,g.e)}f=Z.dJ(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cy(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.R()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.R()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.R()
C.a.h(h,g.e)}f=Z.dJ(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cy(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.f])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.m(z,"\n")},
ab:function(a){var z=this.e
if(!(z==null))z.F(a)},
a1:function(){return this.ab(null)},
$isdw:1,
t:{
bT:function(){var z,y
z=new F.ag()
y=new F.kU(z)
y.b=!1
y.c=H.c([],[F.a3])
z.a=y
y=new F.jT(z)
y.b=H.c([],[F.dt])
z.b=y
y=new F.jS(z)
y.b=H.c([],[F.ba])
z.c=y
y=new F.jR(z)
y.b=H.c([],[F.ap])
z.d=y
z.e=null
return z}}},
dw:{"^":"d7;"},
jR:{"^":"b;a,0b",
hV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$ise",[F.a3],"$ase")
z=H.c([],[F.ap])
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
C.a.h(z,F.cc(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.cc(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.cc(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.cc(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
aC:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cn())x=!1
return x},
aR:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cm())x=!1
return x},
i:function(a){return this.M()},
B:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
return C.a.m(z,"\n")},
M:function(){return this.B("")}},
jS:{"^":"b;a,0b",
ay:function(a,b,c){var z,y,x
this.a.a.h(0,b)
this.a.a.h(0,c)
z=new F.ba()
if(b==null)H.p(P.t("May not create a line with a null start vertex."))
if(c==null)H.p(P.t("May not create a line with a null end vertex."))
y=b.a
if(y==null)H.p(P.t("May not create a line with a start vertex which is not attached to a shape."))
x=c.a
if(y==null?x!=null:y!==x)H.p(P.t("May not create a line with vertices attached to different shapes."))
z.a=b
C.a.h(b.c.b,z)
z.b=c
C.a.h(c.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a1()
return z},
gl:function(a){return this.b.length},
i:function(a){return this.M()},
B:function(a){var z,y,x,w
z=H.c([],[P.f])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.m(z,"\n")},
M:function(){return this.B("")}},
jT:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.M()},
B:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
return C.a.m(z,"\n")},
M:function(){return this.B("")}},
a3:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cq:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cN(this.cx,x,u,z,y,w,v,a,t)},
aT:function(){return this.cq(null)},
sep:function(a){var z
a=a.E(0,Math.sqrt(a.I(a)))
if(!J.V(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a1()}},
saB:function(a){var z
a=a==null?null:a.E(0,Math.sqrt(a.I(a)))
if(!J.V(this.x,a)){this.x=a
z=this.a
if(z!=null)z.a1()}},
sj0:function(a){var z
if(!J.V(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a1()}},
sa2:function(a,b){var z
if(!J.V(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.a1()}},
iq:function(a){var z,y
z=J.K(a)
if(z.v(a,$.$get$aH())){z=this.f
y=[P.C]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aG())){z=this.r
y=[P.C]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aF())){z=this.x
y=[P.C]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$b1())){z=this.y
y=[P.C]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.v(a,$.$get$b2())){z=this.z
y=[P.C]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bd())){z=this.Q
y=[P.C]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bV())){z=this.Q
y=[P.C]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.v(a,$.$get$by()))return H.c([this.ch],[P.C])
else if(z.v(a,$.$get$b0())){z=this.cx
y=[P.C]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.C])},
cn:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.L(0,0,0)
this.d.A(0,new F.l0(z))
z=z.a
this.r=z.E(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.aG(0)}return!0},
cm:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.L(0,0,0)
this.d.A(0,new F.l_(z))
z=z.a
this.x=z.E(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.aG(0)}return!0},
ec:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.b
x.a.a.R()
x=x.e
a.a.a.R()
v=a.e
if(x==null?v==null:x===v)return w}return},
i9:function(a){var z=this.ec(a)
if(z!=null)return z
return a.ec(this)},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
B:function(a){var z,y,x
z=H.c([],[P.f])
C.a.h(z,C.b.ag(J.aa(this.e),0))
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
C.a.h(z,V.U(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.m(z,", ")
return a+"{"+x+"}"},
M:function(){return this.B("")},
t:{
cN:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.a3()
y=new F.kZ(z)
y.b=H.c([],[F.dt])
z.b=y
y=new F.kY(z)
x=[F.ba]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.kV(z)
x=[F.ap]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fF()
z.e=0
y=$.$get$aH()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aG().a)!==0?e:null
z.x=(x&$.$get$aF().a)!==0?b:null
z.y=(x&$.$get$b1().a)!==0?f:null
z.z=(x&$.$get$b2().a)!==0?g:null
z.Q=(x&$.$get$fG().a)!==0?c:null
z.ch=(x&$.$get$by().a)!==0?i:0
z.cx=(x&$.$get$b0().a)!==0?a:null
return z}}},
l0:{"^":"m:5;a",
$1:function(a){var z,y
H.d(a,"$isap")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
l_:{"^":"m:5;a",
$1:function(a){var z,y
H.d(a,"$isap")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kU:{"^":"b;a,0b,0c",
R:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.t("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a1()
return!0},
dH:function(a,b,c){var z=F.cN(null,null,null,new V.aC(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gl:function(a){return this.c.length},
aC:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cn()
return!0},
aR:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cm()
return!0},
bu:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.E(0,Math.sqrt(u*u+t*t+s*s))
if(!J.V(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.F(null)}}}}return!0},
i:function(a){return this.M()},
B:function(a){var z,y,x,w
this.R()
z=H.c([],[P.f])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
return C.a.m(z,"\n")},
M:function(){return this.B("")}},
kV:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
A:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ap]})
C.a.A(this.b,b)
C.a.A(this.c,new F.kW(this,b))
C.a.A(this.d,new F.kX(this,b))},
i:function(a){return this.M()},
B:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
return C.a.m(z,"\n")},
M:function(){return this.B("")}},
kW:{"^":"m:5;a,b",
$1:function(a){H.d(a,"$isap")
if(!J.V(a.a,this.a))this.b.$1(a)}},
kX:{"^":"m:5;a,b",
$1:function(a){var z
H.d(a,"$isap")
z=this.a
if(!J.V(a.a,z)&&!J.V(a.b,z))this.b.$1(a)}},
kY:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.M()},
B:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
return C.a.m(z,"\n")},
M:function(){return this.B("")}},
kZ:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.M()},
B:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
return C.a.m(z,"\n")},
M:function(){return this.B("")}}}],["","",,O,{"^":"",iv:{"^":"cI;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gw:function(){var z=this.rx
if(z==null){z=D.P()
this.rx=z}return z},
U:function(a){var z=this.rx
if(!(z==null))z.F(a)},
am:function(a,b){},
eC:function(a,b){var z,y,x,w
if(this.a==null){z=H.d(a.fr.j(0,"Inspection"),"$iseB")
if(z==null){y=a.a
z=new A.eB(y,"Inspection")
z.d4(y,"Inspection")
z.el(0,$.iA,$.iy)
z.z=z.x.j(0,"posAttr")
z.Q=z.x.j(0,"normAttr")
z.ch=z.x.j(0,"clrAttr")
z.cx=z.x.j(0,"binmAttr")
z.cy=H.i(z.y.j(0,"lightVec"),"$isO")
z.db=H.i(z.y.j(0,"ambientClr"),"$isdF")
z.dx=H.i(z.y.j(0,"diffuseClr"),"$isdF")
z.dy=H.i(z.y.j(0,"weightScalar"),"$isa0")
z.fr=H.i(z.y.j(0,"viewMat"),"$isau")
z.fx=H.i(z.y.j(0,"viewObjMatrix"),"$isau")
z.fy=H.i(z.y.j(0,"projViewObjMatrix"),"$isau")
a.dJ(z)}this.a=z}if(b.e==null){b.d.aC()
b.d.aR()
b.d.bu()
y=new Z.ee()
y.a=new H.aX(0,0,[P.f,Z.ct])
b.e=y}y=this.a
y.aA(a)
x=this.r2
w=y.dy
w.a.uniform1f(w.d,x)
x=this.b
w=y.cy
w.a.uniform3f(w.d,x.a,x.b,x.c)
x=a.db
x=x.ga_(x)
w=y.fr
w.toString
w.a8(x.a7(0,!0))
x=a.geL()
w=y.fx
w.toString
w.a8(x.a7(0,!0))
x=a.gez()
y=y.fy
y.toString
y.a8(x.a7(0,!0))
y=b.e
if(y instanceof Z.ee){a.a.blendFunc(1,1)
x=b.c
w=a.a
if(x==null){w.disable(2929)
a.a.enable(3042)
a.a.blendFunc(1,1)
if(this.k3)this.hb(a,y,b.d,"Axis",H.l(this.gd9(),{func:1,ret:F.ag,args:[F.dw]}),this.z,this.y)
a.a.enable(2929)
a.a.blendFunc(770,771)}else{w.enable(2929)
a.a.enable(3042)
a.a.blendFunc(770,771)
a.a.disable(2929)
a.a.blendFunc(1,1)
if(this.ch)this.bq(a,y,b.c,"wireFrame",this.ghw(),this.f,this.e)
if(this.cy)this.bq(a,y,b.c,"normals",this.gfI(),this.f,this.e)
if(this.db)this.bq(a,y,b.c,"binormals",this.gfl(),this.f,this.e)
if(this.k3)this.bq(a,y,b.c,"Axis",this.gd9(),this.z,this.y)
a.a.enable(2929)
a.a.blendFunc(770,771)}}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.dP()},
bq:function(a,b,c,d,e,f,g){var z,y
H.l(e,{func:1,ret:F.ag,args:[F.ag]})
z=b.a.j(0,d)
if(z==null){z=this.da(a,e.$1(c))
b.a.n(0,d,z)}y=this.a
y.db.bk(f)
y.dx.bk(g)
z.ev(a)},
hb:function(a,b,c,d,e,f,g){var z,y
H.l(e,{func:1,ret:F.ag,args:[F.dw]})
z=b.a.j(0,d)
if(z==null){z=this.da(a,e.$1(c))
b.a.n(0,d,z)}y=this.a
y.db.bk(f)
y.dx.bk(g)
z.ev(a)},
da:function(a,b){var z,y,x,w
H.d(b,"$isag")
z=a.a
y=$.$get$aH()
x=$.$get$aG()
w=b.dM(new Z.fJ(z),new Z.bc(y.a|x.a|$.$get$aF().a|$.$get$bd().a))
w.ae($.$get$aH()).e=this.a.z.c
w.ae($.$get$aG()).e=this.a.Q.c
w.ae($.$get$bd()).e=this.a.ch.c
w.ae($.$get$aF()).e=this.a.cx.c
return w},
hx:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.bT()
z.a=new V.a6(0,0.7,1,1)
x=a.a
x.toString
z=H.l(new O.iC(z,y),{func:1,ret:-1,args:[F.a3]})
C.a.A(x.c,z)
z=new O.iB(y)
x=a.c
x.toString
w=H.l(new O.iD(y,z),{func:1,ret:-1,args:[F.ba]})
C.a.A(x.b,w)
w=a.d
w.toString
z=H.l(new O.iE(y,z),{func:1,ret:-1,args:[F.ap]})
C.a.A(w.b,z)
return y},function(a){return this.hx(a,null)},"jK","$2$color","$1","ghw",4,3,48],
jg:[function(a){var z,y,x
z=F.bT()
y=a.a
y.toString
x=H.l(new O.iz(new V.a6(1,1,0.3,1),z),{func:1,ret:-1,args:[F.a3]})
C.a.A(y.c,x)
return z},"$1","gfI",4,0,12],
jb:[function(a){var z,y,x
z=F.bT()
y=a.a
y.toString
x=H.l(new O.ix(new V.a6(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.a3]})
C.a.A(y.c,x)
return z},"$1","gfl",4,0,12],
ja:[function(a){return this.fk(a)},"$1","gd9",4,0,12],
fk:function(a){var z,y
z=F.bT()
y=new O.iw(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z}},iC:{"^":"m:14;a,b",
$1:function(a){var z,y
H.d(a,"$isa3")
z=this.b.a
y=a.aT()
y.sa2(0,this.a.a)
y.saB(new V.L(0,0,0))
z.h(0,y)}},iB:{"^":"m:51;a",
$2:function(a,b){if(a.i9(b)==null)this.a.c.ay(0,a,b)}},iD:{"^":"m:52;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isba")
z=this.a
y=z.a
x=a.a
x.a.a.R()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.h(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.R()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.h(z,x)
this.b.$2(w,z[x])}},iE:{"^":"m:5;a,b",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isap")
z=this.a
y=z.a
x=a.a
x.a.a.R()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.h(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.R()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.h(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.R()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.h(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},iz:{"^":"m:14;a,b",
$1:function(a){var z,y,x
z=H.d(a,"$isa3").aT()
z.sa2(0,this.a)
z.saB(new V.L(0,0,0))
y=z.aT()
y.saB(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.ay(0,z,y)}},ix:{"^":"m:14;a,b",
$1:function(a){var z,y,x
H.d(a,"$isa3")
z=a.aT()
z.sa2(0,this.a)
z.saB(new V.L(0,0,0))
y=z.aT()
y.saB(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.ay(0,z,y)}},iw:{"^":"m;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.a6(z,y,x,1)
z=this.a
v=z.a.dH(0,0,0)
v.saB(new V.L(0,0,0))
v.sep(new V.L(1,0,0))
v.sa2(0,w)
u=z.a.dH(a,b,c)
u.saB(new V.L(0,0,0))
u.sep(new V.L(1,0,0))
u.sa2(0,w)
z.c.ay(0,v,u)}},j2:{"^":"cI;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.P()
this.dy=z}return z},
U:[function(a){var z
H.d(a,"$isA")
z=this.dy
if(!(z==null))z.F(a)},function(){return this.U(null)},"fO","$1","$0","gbp",0,2,0],
hf:[function(a){H.d(a,"$isA")
this.a=null
this.U(a)},function(){return this.hf(null)},"jG","$1","$0","ghe",0,2,0],
jj:[function(a,b){var z=V.aL
z=new D.cz(a,H.v(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.U(z)},"$2","gfL",8,0,16],
jk:[function(a,b){var z=V.aL
z=new D.cA(a,H.v(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.U(z)},"$2","gfM",8,0,16],
dh:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a5(z.e.length+3,4)*4
x=C.f.a5(z.f.length+3,4)*4
w=C.f.a5(z.r.length+3,4)*4
v=C.f.a5(z.x.length+3,4)*4
u=C.f.a5(z.y.length+3,4)*4
t=C.f.a5(z.z.length+3,4)*4
s=C.f.a5(this.e.a.length+3,4)*4
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
g=k!==C.c||j!==C.c
f=p!==C.c||o!==C.c||n!==C.c||m!==C.c
e=m===C.c
d=!e||g
c=o!==C.c||n!==C.c||!e||l!==C.c||g
e=l===C.c
b=!e
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aH()
if(c){z=$.$get$aG()
a6=new Z.bc(a6.a|z.a)}if(b){z=$.$get$aF()
a6=new Z.bc(a6.a|z.a)}if(a){z=$.$get$b1()
a6=new Z.bc(a6.a|z.a)}if(a0){z=$.$get$b2()
a6=new Z.bc(a6.a|z.a)}if(a2){z=$.$get$b0()
a6=new Z.bc(a6.a|z.a)}return new A.j6(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
X:function(a,b){H.v(a,"$ise",[T.dB],"$ase")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
am:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aA(z,z.length,0,[H.y(z,0)]);z.C();){y=z.d
x=new V.L(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cT(x)}}},
eC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dh()
y=H.d(a.fr.j(0,z.ak),"$iseO")
if(y==null){y=A.j3(z,a.a)
a.dJ(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bx
z=b.e
if(!(z instanceof Z.ct)){b.e=null
z=null}if(z==null||!z.d.v(0,w)){z=x.r1
if(z)b.d.aC()
v=x.r2
if(v)b.d.aR()
u=x.ry
if(u)b.d.bu()
t=b.d.dM(new Z.fJ(a.a),w)
t.ae($.$get$aH()).e=this.a.Q.c
if(z)t.ae($.$get$aG()).e=this.a.cx.c
if(v)t.ae($.$get$aF()).e=this.a.ch.c
if(x.rx)t.ae($.$get$b1()).e=this.a.cy.c
if(u)t.ae($.$get$b2()).e=this.a.db.c
if(x.x1)t.ae($.$get$b0()).e=this.a.dx.c
b.e=t}z=T.dB
s=H.c([],[z])
this.a.aA(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga_(u)
v=v.dy
v.toString
v.a8(u.a7(0,!0))}if(x.fy){v=this.a
u=a.geL()
v=v.fr
v.toString
v.a8(u.a7(0,!0))}v=this.a
u=a.gez()
v=v.fy
v.toString
v.a8(u.a7(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.a8(u.a7(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.a8(u.a7(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.a8(C.w.a7(u,!0))}if(x.aq>0){r=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,r)
for(v=[P.C],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.h(p,q)
p=p[q]
u.toString
H.d(p,"$isaL")
u=u.r1
if(q>=u.length)return H.h(u,q)
u=u[q]
o=new Float32Array(H.bA(H.v(p.a7(0,!0),"$ise",v,"$ase")))
u.a.uniformMatrix4fv(u.d,!1,o)}}switch(x.a){case C.c:break
case C.h:v=this.a
u=this.f.f
v=v.r2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.d:this.X(s,this.f.d)
v=this.a
u=this.f.d
v.ai(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.e:this.X(s,this.f.e)
v=this.a
u=this.f.e
v.ad(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.h:v=this.a
u=this.r.f
v=v.x2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.d:this.X(s,this.r.d)
v=this.a
u=this.r.d
v.ai(v.y1,v.aq,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.e:this.X(s,this.r.e)
v=this.a
u=this.r.e
v.ad(v.y2,v.aq,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.c){case C.c:break
case C.h:v=this.a
u=this.x.f
v=v.ak
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.d:this.X(s,this.x.d)
v=this.a
u=this.x.d
v.ai(v.bx,v.by,u)
u=this.a
v=this.x.f
u=u.ak
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.e:this.X(s,this.x.e)
v=this.a
u=this.x.e
v.ad(v.dR,v.by,u)
u=this.a
v=this.x.f
u=u.ak
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.d){case C.c:break
case C.h:v=this.a
u=this.y.f
v=v.bz
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.d:this.X(s,this.y.d)
v=this.a
u=this.y.d
v.ai(v.dS,v.bA,u)
u=this.a
v=this.y.f
u=u.bz
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.e:this.X(s,this.y.e)
v=this.a
u=this.y.e
v.ad(v.dT,v.bA,u)
u=this.a
v=this.y.f
u=u.bz
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.c:break
case C.h:v=this.a
u=this.z.f
v=v.bB
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bD
u.a.uniform1f(u.d,n)
break
case C.d:this.X(s,this.z.d)
v=this.a
u=this.z.d
v.ai(v.dU,v.bC,u)
u=this.a
v=this.z.f
u=u.bB
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bD
v.a.uniform1f(v.d,n)
break
case C.e:this.X(s,this.z.e)
v=this.a
u=this.z.e
v.ad(v.dV,v.bC,u)
u=this.a
v=this.z.f
u=u.bB
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bD
v.a.uniform1f(v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.e5
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
p=this.a.cu
if(l>=p.length)return H.h(p,l)
i=p[l]
p=m.cT(j.a)
n=p.a
h=p.b
g=p.c
g=p.E(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.e6
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
p=this.a.cv
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gbc(j)
n=i.b
h=p.gcX(p)
g=p.gcY(p)
p=p.gcZ(p)
n.a.uniform3f(n.d,h,g,p)
p=m.bh(j.gbc(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.ga2(j)
g=i.d
h=p.gbO()
n=p.gbi()
p=p.gbt()
g.a.uniform3f(g.d,h,n,p)
p=j.gcg()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gci()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gcj()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.e7
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
p=this.a.cw
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gbc(j)
n=i.b
h=p.gcX(p)
g=p.gcY(p)
p=p.gcZ(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gcs(j).jQ()
g=i.c
h=p.gaU(p)
n=p.gaV(p)
p=p.gaW()
g.a.uniform3f(g.d,h,n,p)
p=m.bh(j.gbc(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.ga2(j)
n=i.e
h=p.gbO()
g=p.gbi()
p=p.gbt()
n.a.uniform3f(n.d,h,g,p)
p=j.gjN()
g=i.f
g.a.uniform1f(g.d,p)
p=j.gjL()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gcg()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gci()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gcj()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.e8
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
n=this.a.cz
if(l>=n.length)return H.h(n,l)
i=n[l]
n=j.gbe()
H.v(s,"$ise",p,"$ase")
if(!C.a.V(s,n)){n.sbo(s.length)
C.a.h(s,n)}n=j.gcs(j)
h=i.d
g=n.gaU(n)
f=n.gaV(n)
n=n.gaW()
h.a.uniform3f(h.d,g,f,n)
n=j.gbP()
f=i.b
g=n.gaU(n)
h=n.gaV(n)
n=n.gaW()
f.a.uniform3f(f.d,g,h,n)
n=j.gbd(j)
h=i.c
g=n.gaU(n)
f=n.gaV(n)
n=n.gaW()
h.a.uniform3f(h.d,g,f,n)
n=m.cT(j.gcs(j))
f=n.a
g=n.b
h=n.c
h=n.E(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.ga2(j)
g=i.f
f=h.gbO()
n=h.gbi()
h=h.gbt()
g.a.uniform3f(g.d,f,n,h)
h=j.gbe()
n=h.gcH(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.gfA()
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gbo())
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.e9
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.y,u=v.length,p=[P.C],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
h=this.a.cA
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gbe()
H.v(s,"$ise",n,"$ase")
if(!C.a.V(s,h)){h.sbo(s.length)
C.a.h(s,h)}e=m.p(0,j.ga_(j))
h=j.ga_(j).bh(new V.aC(0,0,0))
g=i.b
f=h.gcX(h)
d=h.gcY(h)
h=h.gcZ(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bh(new V.aC(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.em(0)
d=i.d
o=new Float32Array(H.bA(H.v(new V.eP(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a7(0,!0),"$ise",p,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.ga2(j)
h=i.e
f=d.gbO()
g=d.gbi()
d=d.gbt()
h.a.uniform3f(h.d,f,g,d)
d=j.gbe()
h=d.gcH(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcH(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gjO(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcg()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gci()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcj()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.ea
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
p=this.a.cB
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gbe()
H.v(s,"$ise",z,"$ase")
if(!C.a.V(s,p)){p.sbo(s.length)
C.a.h(s,p)}p=j.gbc(j)
n=i.b
h=p.gcX(p)
g=p.gcY(p)
p=p.gcZ(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gcs(j)
g=i.c
h=p.gaU(p)
n=p.gaV(p)
p=p.gaW()
g.a.uniform3f(g.d,h,n,p)
p=j.gbP()
n=i.d
h=p.gaU(p)
g=p.gaV(p)
p=p.gaW()
n.a.uniform3f(n.d,h,g,p)
p=j.gbd(j)
g=i.e
h=p.gaU(p)
n=p.gaV(p)
p=p.gaW()
g.a.uniform3f(g.d,h,n,p)
p=m.bh(j.gbc(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gbe()
n=p.gcH(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.gfA()
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gbo())
p=i.x
p.a.uniform1i(p.d,0)}p=j.ga2(j)
n=i.y
h=p.gbO()
g=p.gbi()
p=p.gbt()
n.a.uniform3f(n.d,h,g,p)
p=j.gjX()
g=i.z
g.a.uniform1f(g.d,p)
p=j.gjY()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gcg()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gci()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gcj()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.c:break
case C.h:break
case C.d:this.X(s,this.Q.d)
z=this.a
v=this.Q.d
z.ai(z.dW,z.bE,v)
break
case C.e:this.X(s,this.Q.e)
z=this.a
v=this.Q.e
z.ad(z.dX,z.bE,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga_(v).em(0)
a.Q=v}z=z.id
z.toString
z.a8(v.a7(0,!0))}if(x.dy){this.X(s,this.ch)
z=this.a
v=this.ch
z.ad(z.dY,z.dZ,v)
switch(x.r){case C.c:break
case C.h:z=this.a
v=this.cx.f
z=z.bF
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.d:this.X(s,this.cx.d)
z=this.a
v=this.cx.d
z.ai(z.e_,z.bG,v)
v=this.a
z=this.cx.f
v=v.bF
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.e:this.X(s,this.cx.e)
z=this.a
v=this.cx.e
z.ad(z.e0,z.bG,v)
v=this.a
z=this.cx.f
v=v.bF
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.c:break
case C.h:z=this.a
v=this.cy.f
z=z.bI
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bH
v.a.uniform1f(v.d,p)
break
case C.d:this.X(s,this.cy.d)
z=this.a
v=this.cy.d
z.ai(z.e1,z.bJ,v)
v=this.a
z=this.cy.f
v=v.bI
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bH
z.a.uniform1f(z.d,p)
break
case C.e:this.X(s,this.cy.e)
z=this.a
v=this.cy.e
z.ad(z.e2,z.bJ,v)
v=this.a
z=this.cy.f
v=v.bI
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bH
z.a.uniform1f(z.d,p)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.h:z=this.a
u=this.db.f
z=z.bK
z.a.uniform1f(z.d,u)
break
case C.d:this.X(s,this.db.d)
z=this.a
u=this.db.d
z.ai(z.e3,z.bL,u)
u=this.a
z=this.db.f
u=u.bK
u.a.uniform1f(u.d,z)
break
case C.e:this.X(s,this.db.e)
z=this.a
u=this.db.e
z.ad(z.e4,z.bL,u)
u=this.a
z=this.db.f
u=u.bK
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(q=0;q<s.length;++q){z=s[q]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=H.i(b.e,"$isct")
z.aA(a)
z.aE(a)
z.eI(a)
if(v)a.a.disable(3042)
for(q=0;q<s.length;++q){z=s[q]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.dP()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dh().ak}},j4:{"^":"dm;0f,a,b,0c,0d,0e"},dm:{"^":"b;",
U:[function(a){this.a.U(H.d(a,"$isA"))},function(){return this.U(null)},"fO","$1","$0","gbp",0,2,0],
b3:["f_",function(){}],
hl:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gw().a0(0,this.gbp())
y=this.d
this.d=a
if(a!=null)a.gw().h(0,this.gbp())
z=new D.N(this.b+".texture2D",y,this.d,this,[T.fa])
z.b=!0
this.a.U(z)}},
hm:function(a){}},j5:{"^":"dm;a,b,0c,0d,0e"},bl:{"^":"dm;0f,a,b,0c,0d,0e",
dw:function(a){var z,y
if(!J.V(this.f,a)){z=this.f
this.f=a
y=new D.N(this.b+".color",z,a,this,[V.ab])
y.b=!0
this.a.U(y)}},
b3:["bW",function(){this.f_()
this.dw(new V.ab(1,1,1))}],
sa2:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.b3()
z=this.a
z.a=null
z.U(null)}this.dw(b)}},j7:{"^":"bl;0ch,0f,a,b,0c,0d,0e",
hk:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".refraction",y,a,this,[P.C])
z.b=!0
this.a.U(z)}},
b3:function(){this.bW()
this.hk(1)}},j8:{"^":"bl;0ch,0f,a,b,0c,0d,0e",
cd:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".shininess",y,a,this,[P.C])
z.b=!0
this.a.U(z)}},
b3:function(){this.bW()
this.cd(100)}},cI:{"^":"b;"}}],["","",,T,{"^":"",dB:{"^":"d1;"},fa:{"^":"dB;"},ka:{"^":"fa;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.P()
this.y=z}return z}},kb:{"^":"b;a,0b,0c,0d,0e",
it:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.eA(null,a,null)
w=new T.ka()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ai
W.a4(x,"load",H.l(new T.kc(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
is:function(a){return this.it(a,!1,!1,!1,!1)},
hg:function(a,b,c){var z,y,x,w
b=V.e0(b,2)
z=V.e0(a.width,2)
y=V.e0(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d6(null,null)
x.width=z
x.height=y
w=H.d(C.l.eO(x,"2d"),"$iseh")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nf(w.getImageData(0,0,x.width,x.height))}}},kc:{"^":"m:21;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.hg(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.a4.iZ(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.i5()}++x.e}}}],["","",,V,{"^":"",bH:{"^":"b;",
aY:function(a,b){return!0},
i:function(a){return"all"},
$isaY:1},aY:{"^":"b;"},eN:{"^":"b;",
aY:["eZ",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].aY(0,b))return!0
return!1}],
i:["d3",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaY:1},aB:{"^":"eN;0a",
aY:function(a,b){return!this.eZ(0,b)},
i:function(a){return"!["+this.d3(0)+"]"}},jA:{"^":"b;0a,0b",
aY:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bS(this.a)
y=H.bS(this.b)
return z+".."+y},
$isaY:1,
t:{
X:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.t("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.G(a,0)
y=C.b.G(b,0)
x=new V.jA()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jP:{"^":"b;0a",
f4:function(a){var z,y
if(a.a.length<=0)throw H.a(P.t("May not create a SetMatcher with zero characters."))
z=new H.aX(0,0,[P.n,P.Q])
for(y=new H.dk(a,a.gl(a),0,[H.ao(a,"x",0)]);y.C();)z.n(0,y.d,!0)
this.a=z},
aY:function(a,b){return this.a.bv(0,b)},
i:function(a){var z=this.a
return P.ci(z.ga6(z),0,null)},
$isaY:1,
t:{
w:function(a){var z=new V.jP()
z.f4(a)
return z}}},f3:{"^":"b;a,b,0c,0d",
giw:function(a){return this.b},
m:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fh(this.a.k(0,b))
w.a=H.c([],[V.aY])
w.c=!1
C.a.h(this.c,w)
return w},
i8:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.aY(0,a))return w}return},
i:function(a){return this.b}},fe:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.e2(this.b,"\n","\\n")
y=H.e2(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ff:{"^":"b;a,b,0c",
aF:function(a,b,c){var z,y,x
H.v(c,"$ise",[P.f],"$ase")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.B)(c),++y){x=c[y]
this.c.n(0,x,b)}},
i:function(a){return this.b}},kk:{"^":"b;0a,0b,0c",
k:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.f3(this,b)
z.c=H.c([],[V.fh])
this.a.n(0,b,z)}return z},
N:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ff(this,a)
y=P.f
z.c=new H.aX(0,0,[y,y])
this.b.n(0,a,z)}return z},
eH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fe])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.G(a,t)
r=y.i8(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.ci(w,0,null)
throw H.a(P.t("Untokenizable string [state: "+y.giw(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.ci(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fe(o==null?p.b:o,q,t)}++t}}},
t:{
cJ:function(){var z,y
z=new V.kk()
y=P.f
z.a=new H.aX(0,0,[y,V.f3])
z.b=new H.aX(0,0,[y,V.ff])
return z}}},fh:{"^":"eN;b,0c,0a",
i:function(a){return this.b.b+": "+this.d3(0)}}}],["","",,X,{"^":"",eg:{"^":"b;",$isaZ:1},ip:{"^":"f7;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z}},jk:{"^":"b;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.P()
this.f=z}return z},
b1:[function(a){var z
H.d(a,"$isA")
z=this.f
if(!(z==null))z.F(a)},function(){return this.b1(null)},"j9","$1","$0","gd6",0,2,0],
sb9:function(a){var z,y
if(!J.V(this.b,a)){z=this.b
if(z!=null)z.gw().a0(0,this.gd6())
y=this.b
this.b=a
if(a!=null)a.gw().h(0,this.gd6())
z=new D.N("mover",y,this.b,this,[U.af])
z.b=!0
this.b1(z)}},
$isaZ:1,
$iseg:1},f7:{"^":"b;"}}],["","",,V,{"^":"",
nE:function(a){P.kj(C.N,new V.nF(a))},
b7:{"^":"b;",
bm:function(a){this.b=new P.is(C.O)
this.c=null
this.d=H.c([],[[P.e,W.bh]])},
K:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.bh]))
y=a.split("\n")
for(z=y.length,x=[W.bh],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.H(u)
s=this.b.fs(u,0,u.length)
r=s==null?u:s
C.M.eS(t,H.e2(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gas(this.d),t)}},
ew:function(a,b){var z,y,x,w
H.v(b,"$ise",[P.f],"$ase")
this.d=H.c([],[[P.e,W.bh]])
z=C.a.m(b,"\n")
y=this.c
if(y==null){y=this.bw()
this.c=y}for(y=y.eH(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)this.bN(y[w])}},
nF:{"^":"m:55;a",
$1:function(a){H.d(a,"$isbv")
P.e1(C.i.eG(this.a.gih(),2)+" fps")}},
i4:{"^":"b7;a,0b,0c,0d",
bN:function(a){switch(a.a){case"Class":this.K(a.b,"#551")
break
case"Comment":this.K(a.b,"#777")
break
case"Id":this.K(a.b,"#111")
break
case"Num":this.K(a.b,"#191")
break
case"Reserved":this.K(a.b,"#119")
break
case"String":this.K(a.b,"#171")
break
case"Symbol":this.K(a.b,"#616")
break
case"Type":this.K(a.b,"#B11")
break
case"Whitespace":this.K(a.b,"#111")
break}},
bw:function(){var z,y,x,w
z=V.cJ()
z.c=z.k(0,"Start")
y=z.k(0,"Start").m(0,"Id")
x=V.w(new H.u("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").m(0,"Id")
y=V.w(new H.u("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").m(0,"Int")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").m(0,"Int")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").m(0,"FloatDot")
x=V.w(new H.u("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").m(0,"Float")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").m(0,"Float")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").m(0,"Sym")
y=V.w(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").m(0,"Sym")
x=V.w(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").m(0,"OpenDoubleStr")
y=V.w(new H.u('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
x=V.w(new H.u('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenDoubleStr").m(0,"EscDoubleStr")
y=V.w(new H.u("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscDoubleStr").m(0,"OpenDoubleStr")
x=V.w(new H.u('"'))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bH())
x=z.k(0,"Start").m(0,"OpenSingleStr")
y=V.w(new H.u("'"))
C.a.h(x.a,y)
y=z.k(0,"OpenSingleStr").m(0,"CloseSingleStr")
x=V.w(new H.u("'"))
C.a.h(y.a,x)
x=z.k(0,"OpenSingleStr").m(0,"EscSingleStr")
y=V.w(new H.u("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscSingleStr").m(0,"OpenSingleStr")
x=V.w(new H.u("'"))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bH())
x=z.k(0,"Start").m(0,"Slash")
y=V.w(new H.u("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").m(0,"Comment")
x=V.w(new H.u("/"))
C.a.h(y.a,x)
x=z.k(0,"Comment").m(0,"EndComment")
y=V.w(new H.u("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").m(0,"Comment")
x=new V.aB()
w=[V.aY]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.u("\n"))
C.a.h(x.a,y)
y=z.k(0,"Slash").m(0,"MLComment")
x=V.w(new H.u("*"))
C.a.h(y.a,x)
x=z.k(0,"MLComment").m(0,"MLCStar")
y=V.w(new H.u("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").m(0,"MLComment")
x=new V.aB()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.u("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").m(0,"EndComment")
x=V.w(new H.u("/"))
C.a.h(y.a,x)
x=z.k(0,"Start").m(0,"Whitespace")
y=V.w(new H.u(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Whitespace").m(0,"Whitespace")
x=V.w(new H.u(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Int")
x.d=x.a.N("Num")
x=z.k(0,"Float")
x.d=x.a.N("Num")
x=z.k(0,"Sym")
x.d=x.a.N("Symbol")
x=z.k(0,"CloseDoubleStr")
x.d=x.a.N("String")
x=z.k(0,"CloseSingleStr")
x.d=x.a.N("String")
x=z.k(0,"EndComment")
x.d=x.a.N("Comment")
x=z.k(0,"Whitespace")
x.d=x.a.N("Whitespace")
x=z.k(0,"Id")
y=x.a.N("Id")
x.d=y
x=[P.f]
y.aF(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aF(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aF(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iq:{"^":"b7;a,0b,0c,0d",
bN:function(a){switch(a.a){case"Builtin":this.K(a.b,"#411")
break
case"Comment":this.K(a.b,"#777")
break
case"Id":this.K(a.b,"#111")
break
case"Num":this.K(a.b,"#191")
break
case"Preprocess":this.K(a.b,"#737")
break
case"Reserved":this.K(a.b,"#119")
break
case"Symbol":this.K(a.b,"#611")
break
case"Type":this.K(a.b,"#171")
break
case"Whitespace":this.K(a.b,"#111")
break}},
bw:function(){var z,y,x,w
z=V.cJ()
z.c=z.k(0,"Start")
y=z.k(0,"Start").m(0,"Id")
x=V.w(new H.u("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").m(0,"Id")
y=V.w(new H.u("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").m(0,"Int")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").m(0,"Int")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").m(0,"FloatDot")
x=V.w(new H.u("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").m(0,"Float")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").m(0,"Float")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").m(0,"Sym")
y=V.w(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").m(0,"Sym")
x=V.w(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").m(0,"Slash")
y=V.w(new H.u("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").m(0,"Comment")
x=V.w(new H.u("/"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Slash").m(0,"Sym").a,new V.bH())
x=z.k(0,"Comment").m(0,"EndComment")
y=V.w(new H.u("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").m(0,"Comment")
x=new V.aB()
w=[V.aY]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.u("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").m(0,"Preprocess")
x=V.w(new H.u("#"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").m(0,"Preprocess")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.w(new H.u("\n"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").m(0,"EndPreprocess")
y=V.w(new H.u("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").m(0,"Whitespace")
x=V.w(new H.u(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Whitespace").m(0,"Whitespace")
y=V.w(new H.u(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Int")
y.d=y.a.N("Num")
y=z.k(0,"Float")
y.d=y.a.N("Num")
y=z.k(0,"Sym")
y.d=y.a.N("Symbol")
y=z.k(0,"EndComment")
y.d=y.a.N("Comment")
y=z.k(0,"EndPreprocess")
y.d=y.a.N("Preprocess")
y=z.k(0,"Whitespace")
y.d=y.a.N("Whitespace")
y=z.k(0,"Id")
x=y.a.N("Id")
y.d=x
y=[P.f]
x.aF(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aF(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aF(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
ir:{"^":"b7;a,0b,0c,0d",
bN:function(a){switch(a.a){case"Attr":this.K(a.b,"#911")
this.K("=","#111")
break
case"Id":this.K(a.b,"#111")
break
case"Other":this.K(a.b,"#111")
break
case"Reserved":this.K(a.b,"#119")
break
case"String":this.K(a.b,"#171")
break
case"Symbol":this.K(a.b,"#616")
break}},
bw:function(){var z,y,x
z=V.cJ()
z.c=z.k(0,"Start")
y=z.k(0,"Start").m(0,"Id")
x=V.w(new H.u("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").m(0,"Id")
y=V.w(new H.u("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Id").m(0,"Attr")
x=V.w(new H.u("="))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").m(0,"Sym")
x=V.w(new H.u("</\\-!>="))
C.a.h(y.a,x)
x=z.k(0,"Sym").m(0,"Sym")
y=V.w(new H.u("</\\-!>="))
C.a.h(x.a,y)
y=z.k(0,"Start").m(0,"OpenStr")
x=V.w(new H.u('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenStr").m(0,"CloseStr")
y=V.w(new H.u('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenStr").m(0,"EscStr")
x=V.w(new H.u("\\"))
C.a.h(y.a,x)
x=z.k(0,"EscStr").m(0,"OpenStr")
y=V.w(new H.u('"'))
C.a.h(x.a,y)
C.a.h(z.k(0,"OpenStr").m(0,"OpenStr").a,new V.bH())
C.a.h(z.k(0,"Start").m(0,"Other").a,new V.bH())
y=z.k(0,"Other").m(0,"Other")
x=new V.aB()
x.a=H.c([],[V.aY])
C.a.h(y.a,x)
y=V.w(new H.u('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Sym")
y.d=y.a.N("Symbol")
y=z.k(0,"CloseStr")
y.d=y.a.N("String")
y=z.k(0,"Id")
x=y.a.N("Id")
y.d=x
x.aF(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
x=z.k(0,"Attr")
x.d=x.a.N("Attr")
x=z.k(0,"Other")
x.d=x.a.N("Other")
return z}},
jm:{"^":"b7;a,0b,0c,0d",
ew:function(a,b){H.v(b,"$ise",[P.f],"$ase")
this.d=H.c([],[[P.e,W.bh]])
this.K(C.a.m(b,"\n"),"#111")},
bN:function(a){},
bw:function(){return}},
jU:{"^":"b;0a,0b",
f5:function(a,b){var z,y,x,w,v,u,t
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
t=W.ai
W.a4(z,"scroll",H.l(new V.jX(x),{func:1,ret:-1,args:[t]}),!1,t)},
dI:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$ise",[P.f],"$ase")
this.ho()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eH(C.a.io(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.hy(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cl(C.B,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.k(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
eN:function(a){var z,y,x,w
z=new V.i4("dart")
z.bm("dart")
y=new V.iq("glsl")
y.bm("glsl")
x=new V.ir("html")
x.bm("html")
w=C.a.ia(H.c([z,y,x],[V.b7]),new V.jY(a))
if(w!=null)return w
z=new V.jm("plain")
z.bm("plain")
return z},
dF:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.v(a2,"$ise",[P.f],"$ase")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c5(w).a3(w,"+")){C.a.n(a2,x,C.b.an(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a3(w,"-")){C.a.n(a2,x,C.b.an(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eN(a0)
v.ew(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.cl(C.B,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e6(null)
n.href="#"+H.k(r)
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
if(x>=z.length)return H.h(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.B)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.B)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gZ(w);b.C();)h.appendChild(b.gL(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
hU:function(a){var z,y,x,w,v,u,t
H.v(a,"$ise",[P.f],"$ase")
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
x=H.d(w.insertCell(-1),"$isdA").style
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
t=H.d(w.insertCell(-1),"$isdA")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
ho:function(){var z,y,x,w
if(this.b!=null)return
z=V.cJ()
z.c=z.k(0,"Start")
y=z.k(0,"Start").m(0,"Bold")
x=V.w(new H.u("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Bold").m(0,"Bold")
x=new V.aB()
w=[V.aY]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.u("*"))
C.a.h(x.a,y)
y=z.k(0,"Bold").m(0,"BoldEnd")
x=V.w(new H.u("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").m(0,"Italic")
x=V.w(new H.u("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Italic").m(0,"Italic")
x=new V.aB()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.u("_"))
C.a.h(x.a,y)
y=z.k(0,"Italic").m(0,"ItalicEnd")
x=V.w(new H.u("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").m(0,"Code")
x=V.w(new H.u("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Code").m(0,"Code")
x=new V.aB()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.u("`"))
C.a.h(x.a,y)
y=z.k(0,"Code").m(0,"CodeEnd")
x=V.w(new H.u("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").m(0,"LinkHead")
x=V.w(new H.u("["))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"LinkHead").m(0,"LinkTail")
x=V.w(new H.u("|"))
C.a.h(y.a,x)
x=z.k(0,"LinkHead").m(0,"LinkEnd")
y=V.w(new H.u("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkHead").m(0,"LinkHead")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.w(new H.u("|]"))
C.a.h(y.a,x)
x=z.k(0,"LinkTail").m(0,"LinkEnd")
y=V.w(new H.u("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkTail").m(0,"LinkTail")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.w(new H.u("|]"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Start").m(0,"Other").a,new V.bH())
x=z.k(0,"Other").m(0,"Other")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.w(new H.u("*_`["))
C.a.h(y.a,x)
x=z.k(0,"BoldEnd")
x.d=x.a.N("Bold")
x=z.k(0,"ItalicEnd")
x.d=x.a.N("Italic")
x=z.k(0,"CodeEnd")
x.d=x.a.N("Code")
x=z.k(0,"LinkEnd")
x.d=x.a.N("Link")
x=z.k(0,"Other")
x.d=x.a.N("Other")
this.b=z},
t:{
jV:function(a,b){var z=new V.jU()
z.f5(a,!0)
return z}}},
jX:{"^":"m:21;a",
$1:function(a){P.fc(C.q,new V.jW(this.a))}},
jW:{"^":"m:2;a",
$0:function(){var z,y,x
z=C.i.al(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}},
jY:{"^":"m:56;a",
$1:function(a){return H.d(a,"$isb7").a===this.a}},
k7:{"^":"b;a,b,0c,d",
ay:function(a,b,c){var z,y,x,w,v,u
z=W.eA(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.cp(this.c)
x=y.gl(y)
y=W.ae
W.a4(z,"click",H.l(new V.k9(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.cp(this.c).h(0,z)
J.cp(this.c).h(0,document.createElement("br"))
w=P.fB().gcP().j(0,H.k(this.a))
if(w==null){this.dD(x)
v=c}else{u=P.c6(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.ay(a,b,!1)},
dD:function(a){var z,y,x,w,v
z=P.fB()
y=P.f
x=P.iT(z.gcP(),y,y)
x.n(0,this.a,H.k(a))
w=z.eD(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.m7([],[]).cU(""),"",v)}},
k9:{"^":"m:57;a,b,c,d",
$1:function(a){var z,y
H.d(a,"$isae")
z=this.a
y=J.cp(z.c)
y.A(y,new V.k8())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.dD(this.d)}},
k8:{"^":"m:58;",
$1:function(a){var z
H.d(a,"$isR")
if(!!J.K(a).$isdc){z=a.style
z.border="solid 2px white"}}}}],["","",,N,{"^":"",
hu:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=V.jV("Test 006",!0)
y=W.d6(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.f]
z.dI(H.c(["A test of the Material Lighting shader with a bumpy 2D texture and ","a directional light. Select different bump maps for the test. ","The additional lines are part of shape inspection."],x))
z.hU(H.c(["bumpMaps"],x))
z.dI(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.p(P.t("Failed to find an element with the identifier, testCanvas."))
v=E.kh(w,!0,!0,!0,!1)
u=F.bT()
F.c_(u,null,null,1,1,1,0,0,1)
F.c_(u,null,null,1,1,0,1,0,3)
F.c_(u,null,null,1,1,0,0,1,2)
F.c_(u,null,null,1,1,-1,0,0,0)
F.c_(u,null,null,1,1,0,-1,0,0)
F.c_(u,null,null,1,1,0,0,-1,3)
u.aC()
t=new O.j2()
s=O.d8(V.aL)
t.e=s
s.bl(t.gfL(),t.gfM())
s=new O.bl(t,"emission")
s.c=C.c
s.f=new V.ab(0,0,0)
t.f=s
s=new O.bl(t,"ambient")
s.c=C.c
s.f=new V.ab(0,0,0)
t.r=s
s=new O.bl(t,"diffuse")
s.c=C.c
s.f=new V.ab(0,0,0)
t.x=s
s=new O.bl(t,"invDiffuse")
s.c=C.c
s.f=new V.ab(0,0,0)
t.y=s
s=new O.j8(t,"specular")
s.c=C.c
s.f=new V.ab(0,0,0)
s.ch=100
t.z=s
s=new O.j5(t,"bump")
s.c=C.c
t.Q=s
t.ch=null
s=new O.bl(t,"reflect")
s.c=C.c
s.f=new V.ab(0,0,0)
t.cx=s
s=new O.j7(t,"refract")
s.c=C.c
s.f=new V.ab(0,0,0)
s.ch=1
t.cy=s
s=new O.j4(t,"alpha")
s.c=C.c
s.f=1
t.db=s
s=new D.iN()
s.bX(D.a7)
s.e=H.c([],[D.cv])
s.f=H.c([],[D.jn])
s.r=H.c([],[D.jZ])
s.x=H.c([],[D.kd])
s.y=H.c([],[D.ke])
s.z=H.c([],[D.kf])
s.Q=null
s.ch=null
s.d1(s.gfK(),s.gh4(),s.gh6())
t.dx=s
r=s.Q
if(r==null){r=D.P()
s.Q=r
s=r}else s=r
s.h(0,t.ghe())
s=t.dx
r=s.ch
if(r==null){r=D.P()
s.ch=r
s=r}else s=r
s.h(0,t.gbp())
t.dy=null
s=t.dx
r=U.ek(V.eQ(new V.aC(0,0,0),new V.L(0,1,0),new V.L(0,0,-1)))
q=new V.ab(1,1,1)
p=new D.cv()
p.c=new V.ab(1,1,1)
p.a=new V.L(0,0,1)
o=p.b
p.b=r
r.gw().h(0,p.gfc())
r=new D.N("mover",o,p.b,p,[U.af])
r.b=!0
p.aJ(r)
if(!p.c.v(0,q)){o=p.c
p.c=q
r=new D.N("color",o,q,p,[V.ab])
r.b=!0
p.aJ(r)}s.h(0,p)
s=t.r
s.sa2(0,new V.ab(0,0,1))
s=t.x
s.sa2(0,new V.ab(0,1,0))
s=t.z
s.sa2(0,new V.ab(1,0,0))
s=t.z
if(s.c===C.c){s.c=C.h
s.bW()
s.cd(100)
r=s.a
r.a=null
r.U(null)}s.cd(10)
n=E.db(null,!0,null,"",null,null)
n.sbT(0,u)
n.scS(t)
m=E.db(null,!0,null,"",null,null)
m.sbT(0,u)
s=new O.iv()
s.b=new V.L(0,0,-1)
s.c=new V.a6(0.2,0.3,0.4,1)
s.d=new V.a6(0.1,0.2,0.3,1)
s.e=new V.a6(0.7,0.7,0.7,1)
s.f=new V.a6(0.3,0.3,0.3,1)
s.r=new V.a6(0.5,0.5,0.5,1)
s.x=new V.a6(0.5,0.5,0.5,1)
s.y=new V.a6(1,1,1,1)
s.z=new V.a6(0.8,0.8,0.8,1)
s.Q=!1
s.ch=!1
s.cx=!1
s.cy=!1
s.db=!1
s.dx=!1
s.dy=!1
s.fr=!1
s.fx=!1
s.fy=!1
s.go=!1
s.id=!1
s.k1=!1
s.k2=!1
s.k3=!1
s.k4=!1
s.r1=!1
s.r2=1
if(!$.q.$2(1,0.4)){s.r2=0.4
r=new D.N("vectorScale",1,0.4,s,[P.C])
r.b=!0
s.U(r)}if(!s.ch){s.ch=!0
r=new D.N("showWireFrame",!1,!0,s,[P.Q])
r.b=!0
s.U(r)}if(!s.k3){s.k3=!0
r=new D.N("showAxis",!1,!0,s,[P.Q])
r.b=!0
s.U(r)}if(!s.cy){s.cy=!0
r=new D.N("showNormals",!1,!0,s,[P.Q])
r.b=!0
s.U(r)}if(!s.db){s.db=!0
r=new D.N("showBinormals",!1,!0,s,[P.Q])
r.b=!0
s.U(r)}m.scS(s)
l=E.db(null,!0,null,"",null,null)
l.y.h(0,m)
l.y.h(0,n)
s=new U.ez()
s.bX(U.af)
s.bl(s.gfJ(),s.gh5())
s.e=null
s.f=V.ch()
s.r=0
r=v.r
p=new U.kK()
k=U.d9()
k.scW(0,!0)
k.scI(6.283185307179586)
k.scK(0)
k.sa9(0,0)
k.scJ(100)
k.sT(0)
k.scr(0.5)
p.b=k
j=p.gaK()
k.gw().h(0,j)
k=U.d9()
k.scW(0,!0)
k.scI(6.283185307179586)
k.scK(0)
k.sa9(0,0)
k.scJ(100)
k.sT(0)
k.scr(0.5)
p.c=k
k.gw().h(0,j)
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
i=new X.aN(!1,!1,!1)
o=p.d
p.d=i
k=[X.aN]
j=new D.N("modifiers",o,i,p,k)
j.b=!0
p.S(j)
j=p.f
if(j!==!1){p.f=!1
j=new D.N("invertX",j,!1,p,[P.Q])
j.b=!0
p.S(j)}j=p.r
if(j!==!0){p.r=!0
j=new D.N("invertY",j,!0,p,[P.Q])
j.b=!0
p.S(j)}p.b6(r)
s.h(0,p)
r=v.r
p=new U.kJ()
j=U.d9()
j.scW(0,!0)
j.scI(6.283185307179586)
j.scK(0)
j.sa9(0,0)
j.scJ(100)
j.sT(0)
j.scr(0.2)
p.b=j
j.gw().h(0,p.gaK())
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
i=new X.aN(!0,!1,!1)
o=p.c
p.c=i
j=new D.N("modifiers",o,i,p,k)
j.b=!0
p.S(j)
p.b6(r)
s.h(0,p)
r=v.r
p=new U.kL()
p.c=0.01
p.d=0
p.e=0
i=new X.aN(!1,!1,!1)
p.b=i
k=new D.N("modifiers",null,i,p,k)
k.b=!0
p.S(k)
p.b6(r)
s.h(0,p)
l.sb9(s)
s=new M.ig()
r=O.d8(E.aW)
s.d=r
r.bl(s.gfP(),s.gfQ())
s.e=null
s.f=null
s.r=null
s.x=null
h=new X.jk()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.sb9(null)
r=h.c
if(!$.q.$2(r,1.0471975511965976)){o=h.c
h.c=1.0471975511965976
r=new D.N("fov",o,1.0471975511965976,h,[P.C])
r.b=!0
h.b1(r)}r=h.d
if(!$.q.$2(r,0.1)){o=h.d
h.d=0.1
r=new D.N("near",o,0.1,h,[P.C])
r.b=!0
h.b1(r)}r=h.e
if(!$.q.$2(r,2000)){o=h.e
h.e=2000
r=new D.N("far",o,2000,h,[P.C])
r.b=!0
h.b1(r)}r=s.a
if(r!==h){if(r!=null)r.gw().a0(0,s.gaL())
o=s.a
s.a=h
h.gw().h(0,s.gaL())
r=new D.N("camera",o,s.a,s,[X.eg])
r.b=!0
s.b0(r)}g=new X.ip()
r=new V.a6(0,0,0,1)
g.a=r
g.b=!0
g.c=2000
g.d=!0
g.e=0
g.f=!1
r=V.f0(0,0,1,1)
g.r=r
r=s.b
if(r!==g){if(r!=null)r.gw().a0(0,s.gaL())
o=s.b
s.b=g
g.gw().h(0,s.gaL())
r=new D.N("target",o,s.b,s,[X.f7])
r.b=!0
s.b0(r)}s.d.h(0,l)
s.a.sb9(U.ek(V.aM(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
r=v.d
if(r!==s){if(r!=null)r.gw().a0(0,v.gd5())
v.d=s
s.gw().h(0,v.gd5())
v.f8()}s=new V.k7("bumpMaps",!0,new N.nw(t,v))
x=x.getElementById("bumpMaps")
s.c=x
if(x==null)H.p("Failed to find bumpMaps for Texture2DGroup")
s.ay(0,"../resources/BumpMap1.png",!0)
s.h(0,"../resources/BumpMap2.png")
s.h(0,"../resources/BumpMap3.png")
s.h(0,"../resources/BumpMap4.png")
s.h(0,"../resources/BumpMap5.png")
s.h(0,"../resources/ScrewBumpMap.png")
s.h(0,"../resources/CtrlPnlBumpMap.png")
x=v.z
if(x==null){x=D.P()
v.z=x}s={func:1,ret:-1,args:[D.A]}
r=H.l(new N.nx(z,t),s)
p=x.b
if(p==null){s=H.c([],[s])
x.b=s
x=s}else x=p
C.a.h(x,r)
V.nE(v)},
nw:{"^":"m:18;a,b",
$1:function(a){var z,y,x
z=this.a.Q
y=this.b.f.is(a)
x=z.c
if(x!==C.d){if(x===C.c)z.b3()
z.c=C.d
z.hm(null)
x=z.a
x.a=null
x.U(null)}z.hl(y)}},
nx:{"^":"m:10;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isA")
z=this.a
y=this.b
x=y.a
w=[P.f]
z.dF("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dF("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eE.prototype
return J.eD.prototype}if(typeof a=="string")return J.cC.prototype
if(a==null)return J.eF.prototype
if(typeof a=="boolean")return J.iI.prototype
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cW(a)}
J.aS=function(a){if(typeof a=="string")return J.cC.prototype
if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cW(a)}
J.c4=function(a){if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cW(a)}
J.nk=function(a){if(typeof a=="number")return J.cB.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cL.prototype
return a}
J.c5=function(a){if(typeof a=="string")return J.cC.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cL.prototype
return a}
J.aT=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cW(a)}
J.V=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).v(a,b)}
J.hA=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nk(a).O(a,b)}
J.e3=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hr(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aS(a).j(a,b)}
J.d_=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hr(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c4(a).n(a,b,c)}
J.hB=function(a,b){return J.c5(a).G(a,b)}
J.hC=function(a,b,c){return J.aT(a).hc(a,b,c)}
J.hD=function(a,b,c,d){return J.aT(a).dG(a,b,c,d)}
J.hE=function(a,b){return J.c5(a).Y(a,b)}
J.d0=function(a,b,c){return J.aS(a).i_(a,b,c)}
J.co=function(a,b){return J.c4(a).H(a,b)}
J.hF=function(a,b,c,d){return J.c4(a).aD(a,b,c,d)}
J.e4=function(a,b){return J.c4(a).A(a,b)}
J.hG=function(a){return J.aT(a).ghY(a)}
J.cp=function(a){return J.aT(a).gco(a)}
J.c8=function(a){return J.K(a).gW(a)}
J.b6=function(a){return J.c4(a).gZ(a)}
J.ar=function(a){return J.aS(a).gl(a)}
J.hH=function(a){return J.aT(a).gcN(a)}
J.hI=function(a){return J.aT(a).giY(a)}
J.e5=function(a){return J.c4(a).iP(a)}
J.hJ=function(a,b){return J.aT(a).iR(a,b)}
J.hK=function(a,b,c){return J.c5(a).u(a,b,c)}
J.hL=function(a){return J.c5(a).j5(a)}
J.aa=function(a){return J.K(a).i(a)}
I.a9=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cr.prototype
C.l=W.d5.prototype
C.M=W.bh.prototype
C.P=J.r.prototype
C.a=J.bk.prototype
C.Q=J.eD.prototype
C.f=J.eE.prototype
C.w=J.eF.prototype
C.i=J.cB.prototype
C.b=J.cC.prototype
C.X=J.cf.prototype
C.a2=H.ds.prototype
C.a3=W.jf.prototype
C.E=J.jl.prototype
C.a4=P.du.prototype
C.F=W.k5.prototype
C.u=J.cL.prototype
C.G=W.bW.prototype
C.H=W.l2.prototype
C.J=new P.hP(!1)
C.I=new P.hO(C.J)
C.K=new P.jj()
C.L=new P.kT()
C.j=new P.lQ()
C.c=new A.cu(0,"ColorSourceType.None")
C.h=new A.cu(1,"ColorSourceType.Solid")
C.d=new A.cu(2,"ColorSourceType.Texture2D")
C.e=new A.cu(3,"ColorSourceType.TextureCube")
C.q=new P.bJ(0)
C.N=new P.bJ(5e6)
C.O=new P.it("element",!0,!1,!1,!1)
C.R=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.S=function(hooks) {
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
C.x=function(hooks) { return hooks; }

C.T=function(getTagFallback) {
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
C.U=function() {
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
C.V=function(hooks) {
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
C.W=function(hooks) {
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
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=H.c(I.a9([127,2047,65535,1114111]),[P.n])
C.m=H.c(I.a9([0,0,32776,33792,1,10240,0,0]),[P.n])
C.Y=H.c(I.a9(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.n=H.c(I.a9([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.c(I.a9([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.Z=H.c(I.a9(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.A=H.c(I.a9([]),[P.f])
C.a_=H.c(I.a9([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.B=H.c(I.a9([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.c(I.a9([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.C=H.c(I.a9([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a0=H.c(I.a9([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.D=H.c(I.a9([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.r=H.c(I.a9(["bind","if","ref","repeat","syntax"]),[P.f])
C.t=H.c(I.a9(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.a1=new H.i0(0,{},C.A,[P.f,P.f])
C.k=new P.kM(!1)
$.aJ=0
$.bI=null
$.eb=null
$.dQ=!1
$.hp=null
$.hk=null
$.hx=null
$.cV=null
$.cY=null
$.dY=null
$.bB=null
$.c0=null
$.c1=null
$.dR=!1
$.Y=C.j
$.aV=null
$.da=null
$.ew=null
$.ev=null
$.er=null
$.eq=null
$.ep=null
$.eo=null
$.q=V.j9()
$.iA="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.iy="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.eW=null
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
I.$lazy(y,x,w)}})(["en","$get$en",function(){return H.ho("_$dart_dartClosure")},"dg","$get$dg",function(){return H.ho("_$dart_js")},"fi","$get$fi",function(){return H.aP(H.cK({
toString:function(){return"$receiver$"}}))},"fj","$get$fj",function(){return H.aP(H.cK({$method$:null,
toString:function(){return"$receiver$"}}))},"fk","$get$fk",function(){return H.aP(H.cK(null))},"fl","$get$fl",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fp","$get$fp",function(){return H.aP(H.cK(void 0))},"fq","$get$fq",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fn","$get$fn",function(){return H.aP(H.fo(null))},"fm","$get$fm",function(){return H.aP(function(){try{null.$method$}catch(z){return z.message}}())},"fs","$get$fs",function(){return H.aP(H.fo(void 0))},"fr","$get$fr",function(){return H.aP(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dL","$get$dL",function(){return P.l3()},"c2","$get$c2",function(){return[]},"fE","$get$fE",function(){return P.kQ()},"fM","$get$fM",function(){return H.jd(H.bA(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"h9","$get$h9",function(){return P.jF("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hg","$get$hg",function(){return P.mX()},"el","$get$el",function(){return{}},"fQ","$get$fQ",function(){return P.eJ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)},"dM","$get$dM",function(){return P.dj(P.f,P.cd)},"fH","$get$fH",function(){return Z.ax(0)},"fF","$get$fF",function(){return Z.ax(511)},"aH","$get$aH",function(){return Z.ax(1)},"aG","$get$aG",function(){return Z.ax(2)},"aF","$get$aF",function(){return Z.ax(4)},"b1","$get$b1",function(){return Z.ax(8)},"b2","$get$b2",function(){return Z.ax(16)},"bd","$get$bd",function(){return Z.ax(32)},"bV","$get$bV",function(){return Z.ax(64)},"fG","$get$fG",function(){return Z.ax(96)},"by","$get$by",function(){return Z.ax(128)},"b0","$get$b0",function(){return Z.ax(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.I,args:[F.ap]},{func:1,ret:P.I,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[W.ai]},{func:1,ret:-1,args:[P.n,[P.j,E.aW]]},{func:1,ret:P.I,args:[D.A]},{func:1,ret:-1,args:[W.bx]},{func:1,ret:F.ag,args:[F.ag]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[F.a3]},{func:1,ret:P.Q,args:[W.aO]},{func:1,ret:-1,args:[P.n,[P.j,V.aL]]},{func:1,ret:P.f,args:[P.n]},{func:1,ret:P.I,args:[P.f]},{func:1,ret:P.f,args:[P.f]},{func:1,args:[,]},{func:1,ret:P.I,args:[W.ai]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.Q,args:[W.R,P.f,P.f,W.ck]},{func:1,ret:P.Q,args:[W.G]},{func:1,ret:P.C},{func:1,ret:W.G},{func:1,ret:-1,args:[P.n,[P.j,D.a7]]},{func:1,ret:-1,args:[W.bN]},{func:1,ret:P.Q,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:-1,args:[P.n,[P.j,U.af]]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:-1,args:[P.b],opt:[P.aD]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:P.I,args:[P.a5]},{func:1,ret:W.R,args:[W.G]},{func:1,ret:[P.b3,,],args:[,]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:-1,args:[W.bW]},{func:1,ret:P.Q,args:[P.C,P.C]},{func:1,ret:P.Q,args:[[P.j,D.a7]]},{func:1,args:[,P.f]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.T,args:[,,]},{func:1,ret:P.T,args:[P.n]},{func:1,ret:P.I,args:[F.a3,P.C,P.C]},{func:1,ret:P.n,args:[[P.e,P.n],P.n]},{func:1,ret:F.ag,args:[F.ag],named:{color:V.a6}},{func:1,ret:P.I,args:[P.f,,]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[F.a3,F.a3]},{func:1,ret:P.I,args:[F.ba]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.n]},{func:1,ret:P.I,args:[P.bv]},{func:1,ret:P.Q,args:[V.b7]},{func:1,ret:P.I,args:[W.ae]},{func:1,ret:P.I,args:[W.R]},{func:1,ret:[P.M,P.f,P.f],args:[[P.M,P.f,P.f],P.f]},{func:1,args:[P.f]},{func:1,ret:-1,args:[W.G,W.G]}]
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
if(x==y)H.nH(d||a)
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
Isolate.a9=a.a9
Isolate.dW=a.dW
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
if(typeof dartMainRunner==="function")dartMainRunner(N.hu,[])
else N.hu([])})})()
//# sourceMappingURL=test.dart.js.map
