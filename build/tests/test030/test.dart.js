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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cP(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cQ=function(){}
var dart=[["","",,H,{"^":"",ls:{"^":"a;a"}}],["","",,J,{"^":"",
B:function(a){return void 0},
cW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c6:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cT==null){H.kj()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.ej("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cm()]
if(v!=null)return v
v=H.ko(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cm(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
j:{"^":"a;",
q:function(a,b){return a===b},
gN:function(a){return H.bb(a)},
i:["co",function(a){return"Instance of '"+H.aH(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fI:{"^":"j;",
i:function(a){return String(a)},
gN:function(a){return a?519018:218159},
$isae:1},
fJ:{"^":"j;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gN:function(a){return 0},
$isA:1},
cn:{"^":"j;",
gN:function(a){return 0},
i:["cp",function(a){return String(a)}]},
hd:{"^":"cn;"},
cF:{"^":"cn;"},
bz:{"^":"cn;",
i:function(a){var z=a[$.$get$de()]
if(z==null)return this.cp(a)
return"JavaScript function for "+H.f(J.a0(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isci:1},
aF:{"^":"j;$ti",
h:function(a,b){H.w(b,H.u(a,0))
if(!!a.fixed$length)H.R(P.a8("add"))
a.push(b)},
T:function(a,b){var z
if(!!a.fixed$length)H.R(P.a8("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.c(P.aY(a))}},
A:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.R(z,y,H.f(a[y]))
return z.join(b)},
dZ:function(a){return this.A(a,"")},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
aM:function(a,b,c){var z=a.length
if(b>z)throw H.c(P.a7(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a7(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.u(a,0)])
return H.e(a.slice(b,c),[H.u(a,0)])},
gbg:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.fG())},
dI:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.cj(a,"[","]")},
gP:function(a){return new J.am(a,a.length,0,[H.u(a,0)])},
gN:function(a){return H.bb(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.R(P.a8("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.bK(b,"newLength",null))
if(b<0)throw H.c(P.a7(b,0,null,"newLength",null))
a.length=b},
R:function(a,b,c){H.T(b)
H.w(c,H.u(a,0))
if(!!a.immutable$list)H.R(P.a8("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aA(a,b))
if(b>=a.length||b<0)throw H.c(H.aA(a,b))
a[b]=c},
$isi:1,
$isd:1,
p:{
fH:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.bK(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a7(a,0,4294967295,"length",null))
return J.ds(new Array(a),b)},
ds:function(a,b){return J.b5(H.e(a,[b]))},
b5:function(a){H.bu(a)
a.fixed$length=Array
return a}}},
lr:{"^":"aF;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bS:{"^":"j;",
ev:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.a8(""+a+".toInt()"))},
be:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.c(P.a8(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.a8(""+a+".round()"))},
cb:function(a,b){var z,y
if(b>20)throw H.c(P.a7(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gN:function(a){return a&0x1FFFFFFF},
cj:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
cr:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bP(a,b)},
ak:function(a,b){return(a|0)===a?a/b|0:this.bP(a,b)},
bP:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.a8("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
aG:function(a,b){var z
if(a>0)z=this.du(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
du:function(a,b){return b>31?0:a>>>b},
Z:function(a,b){if(typeof b!=="number")throw H.c(H.az(b))
return a<b},
$ist:1,
$isL:1},
du:{"^":"bS;",$isz:1},
dt:{"^":"bS;"},
cl:{"^":"j;",
ba:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aA(a,b))
if(b<0)throw H.c(H.aA(a,b))
if(b>=a.length)H.R(H.aA(a,b))
return a.charCodeAt(b)},
aD:function(a,b){if(b>=a.length)throw H.c(H.aA(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.M(b)
if(typeof b!=="string")throw H.c(P.bK(b,null,null))
return a+b},
aN:function(a,b,c){H.T(c)
if(c==null)c=a.length
if(b<0)throw H.c(P.bY(b,null,null))
if(b>c)throw H.c(P.bY(b,null,null))
if(c>a.length)throw H.c(P.bY(c,null,null))
return a.substring(b,c)},
cm:function(a,b){return this.aN(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ea:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
Y:function(a,b){return this.ea(a,b," ")},
dJ:function(a,b,c){if(c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
return H.eZ(a,b,c)},
i:function(a){return a},
gN:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$isdI:1,
$isl:1}}],["","",,H,{"^":"",
fG:function(){return new P.hJ("No element")},
U:{"^":"ig;a",
gj:function(a){return this.a.length},
k:function(a,b){return C.b.ba(this.a,b)},
$asek:function(){return[P.z]},
$asp:function(){return[P.z]},
$asi:function(){return[P.z]},
$asd:function(){return[P.z]}},
fs:{"^":"i;"},
dz:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.bH(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.c(P.aY(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.B(z,w);++this.c
return!0}},
fY:{"^":"i;a,b,$ti",
gP:function(a){return new H.fZ(J.bv(this.a),this.b,this.$ti)},
gj:function(a){return J.aV(this.a)},
B:function(a,b){return this.b.$1(J.cZ(this.a,b))},
$asi:function(a,b){return[b]}},
fZ:{"^":"ck;0a,b,c,$ti",
C:function(){var z=this.b
if(z.C()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$asck:function(a,b){return[b]}},
iy:{"^":"i;a,b,$ti",
gP:function(a){return new H.iz(J.bv(this.a),this.b,this.$ti)}},
iz:{"^":"ck;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
bP:{"^":"a;$ti"},
ek:{"^":"a;$ti"},
ig:{"^":"bT+ek;"}}],["","",,H,{"^":"",
ke:function(a){return init.types[H.T(a)]},
km:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isv},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a0(a)
if(typeof z!=="string")throw H.c(H.az(a))
return z},
bb:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aH:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.B(a).$iscF){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.aD(w,0)===36)w=C.b.cm(w,1)
r=H.cU(H.bu(H.aB(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dL:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hm:function(a){var z,y,x,w
z=H.e([],[P.z])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.c(H.az(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.c.aG(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.c(H.az(w))}return H.dL(z)},
dM:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.c(H.az(x))
if(x<0)throw H.c(H.az(x))
if(x>65535)return H.hm(a)}return H.dL(a)},
hl:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.aG(z,10))>>>0,56320|z&1023)}throw H.c(P.a7(a,0,1114111,null,null))},
a3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hk:function(a){return a.b?H.a3(a).getUTCFullYear()+0:H.a3(a).getFullYear()+0},
hi:function(a){return a.b?H.a3(a).getUTCMonth()+1:H.a3(a).getMonth()+1},
he:function(a){return a.b?H.a3(a).getUTCDate()+0:H.a3(a).getDate()+0},
hf:function(a){return a.b?H.a3(a).getUTCHours()+0:H.a3(a).getHours()+0},
hh:function(a){return a.b?H.a3(a).getUTCMinutes()+0:H.a3(a).getMinutes()+0},
hj:function(a){return a.b?H.a3(a).getUTCSeconds()+0:H.a3(a).getSeconds()+0},
hg:function(a){return a.b?H.a3(a).getUTCMilliseconds()+0:H.a3(a).getMilliseconds()+0},
o:function(a){throw H.c(H.az(a))},
h:function(a,b){if(a==null)J.aV(a)
throw H.c(H.aA(a,b))},
aA:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,"index",null)
z=H.T(J.aV(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bY(b,"index",null)},
ka:function(a,b,c){if(a>c)return new P.bX(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bX(a,c,!0,b,"end","Invalid value")
return new P.al(!0,b,"end",null)},
az:function(a){return new P.al(!0,a,null,null)},
k5:function(a){if(typeof a!=="number")throw H.c(H.az(a))
return a},
c:function(a){var z
if(a==null)a=new P.dH()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f0})
z.name=""}else z.toString=H.f0
return z},
f0:function(){return J.a0(this.dartException)},
R:function(a){throw H.c(a)},
x:function(a){throw H.c(P.aY(a))},
aD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.aG(x,16)&8191)===10)switch(w){case 438:return z.$1(H.co(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dG(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e5()
u=$.$get$e6()
t=$.$get$e7()
s=$.$get$e8()
r=$.$get$ec()
q=$.$get$ed()
p=$.$get$ea()
$.$get$e9()
o=$.$get$ef()
n=$.$get$ee()
m=v.X(y)
if(m!=null)return z.$1(H.co(H.M(y),m))
else{m=u.X(y)
if(m!=null){m.method="call"
return z.$1(H.co(H.M(y),m))}else{m=t.X(y)
if(m==null){m=s.X(y)
if(m==null){m=r.X(y)
if(m==null){m=q.X(y)
if(m==null){m=p.X(y)
if(m==null){m=s.X(y)
if(m==null){m=o.X(y)
if(m==null){m=n.X(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dG(H.M(y),m))}}return z.$1(new H.ie(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dT()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.al(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dT()
return a},
aT:function(a){var z
if(a==null)return new H.eB(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eB(a)},
kc:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.R(0,a[y],a[x])}return b},
kl:function(a,b,c,d,e,f){H.k(a,"$isci")
switch(H.T(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.P("Unsupported number of arguments for wrapped closure"))},
aR:function(a,b){var z
H.T(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kl)
a.$identity=z
return z},
fg:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.B(d).$isd){z.$reflectionInfo=d
x=H.hp(z).r}else x=d
w=e?Object.create(new H.hK().constructor.prototype):Object.create(new H.cb(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.af
if(typeof u!=="number")return u.D()
$.af=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.d9(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.ke,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.d2:H.cc
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.d9(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fd:function(a,b,c,d){var z=H.cc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d9:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ff(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fd(y,!w,z,b)
if(y===0){w=$.af
if(typeof w!=="number")return w.D()
$.af=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aW
if(v==null){v=H.bL("self")
$.aW=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.af
if(typeof w!=="number")return w.D()
$.af=w+1
t+=w
w="return function("+t+"){return this."
v=$.aW
if(v==null){v=H.bL("self")
$.aW=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
fe:function(a,b,c,d){var z,y
z=H.cc
y=H.d2
switch(b?-1:a){case 0:throw H.c(H.hy("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ff:function(a,b){var z,y,x,w,v,u,t,s
z=$.aW
if(z==null){z=H.bL("self")
$.aW=z}y=$.d1
if(y==null){y=H.bL("receiver")
$.d1=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fe(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.af
if(typeof y!=="number")return y.D()
$.af=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.af
if(typeof y!=="number")return y.D()
$.af=y+1
return new Function(z+y+"}")()},
cP:function(a,b,c,d,e,f,g){var z,y
z=J.b5(H.bu(b))
H.T(c)
y=!!J.B(d).$isd?J.b5(d):d
return H.fg(a,z,c,y,!!e,f,g)},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aj(a,"String"))},
kr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aj(a,"num"))},
eP:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aj(a,"bool"))},
T:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aj(a,"int"))},
eX:function(a,b){throw H.c(H.aj(a,H.M(b).substring(3)))},
kt:function(a,b){var z=J.bH(b)
throw H.c(H.fc(a,z.aN(b,3,z.gj(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.eX(a,b)},
X:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kt(a,b)},
bu:function(a){if(a==null)return a
if(!!J.B(a).$isd)return a
throw H.c(H.aj(a,"List"))},
kn:function(a,b){if(a==null)return a
if(!!J.B(a).$isd)return a
if(J.B(a)[b])return a
H.eX(a,b)},
eQ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.T(z)]
else return a.$S()}return},
bG:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eQ(J.B(a))
if(z==null)return!1
y=H.eT(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.cL)return a
$.cL=!0
try{if(H.bG(a,b))return a
z=H.bJ(b)
y=H.aj(a,z)
throw H.c(y)}finally{$.cL=!1}},
cR:function(a,b){if(a!=null&&!H.cO(a,b))H.R(H.aj(a,H.bJ(b)))
return a},
eK:function(a){var z
if(a instanceof H.q){z=H.eQ(J.B(a))
if(z!=null)return H.bJ(z)
return"Closure"}return H.aH(a)},
ky:function(a){throw H.c(new P.fk(H.M(a)))},
eR:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
aB:function(a){if(a==null)return
return a.$ti},
mp:function(a,b,c){return H.aU(a["$as"+H.f(c)],H.aB(b))},
bt:function(a,b,c,d){var z
H.M(c)
H.T(d)
z=H.aU(a["$as"+H.f(c)],H.aB(b))
return z==null?null:z[d]},
av:function(a,b,c){var z
H.M(b)
H.T(c)
z=H.aU(a["$as"+H.f(b)],H.aB(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.T(b)
z=H.aB(a)
return z==null?null:z[b]},
bJ:function(a){var z=H.aC(a,null)
return z},
aC:function(a,b){var z,y
H.y(b,"$isd",[P.l],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cU(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.T(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.f(b[y])}if('func' in a)return H.jW(a,b)
if('futureOr' in a)return"FutureOr<"+H.aC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.l]
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
t=C.b.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aC(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aC(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aC(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kb(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.M(z[l])
n=n+m+H.aC(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cU:function(a,b,c){var z,y,x,w,v,u
H.y(c,"$isd",[P.l],"$asd")
if(a==null)return""
z=new P.cx("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aC(u,c)}v="<"+z.i(0)+">"
return v},
aU:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aQ:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aB(a)
y=J.B(a)
if(y[b]==null)return!1
return H.eN(H.aU(y[d],z),null,c,null)},
y:function(a,b,c,d){var z,y
H.M(b)
H.bu(c)
H.M(d)
if(a==null)return a
z=H.aQ(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cU(c,0,null)
throw H.c(H.aj(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eN:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aa(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aa(a[y],b,c[y],d))return!1
return!0},
mn:function(a,b,c){return a.apply(b,H.aU(J.B(b)["$as"+H.f(c)],H.aB(b)))},
eU:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="A"||a===-1||a===-2||H.eU(z)}return!1},
cO:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="A"||b===-1||b===-2||H.eU(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cO(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bG(a,b)}y=J.B(a).constructor
x=H.aB(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aa(y,null,b,null)
return z},
w:function(a,b){if(a!=null&&!H.cO(a,b))throw H.c(H.aj(a,H.bJ(b)))
return a},
aa:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aa(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="A")return!0
if('func' in c)return H.eT(a,b,c,d)
if('func' in a)return c.builtin$cls==="ci"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aa("type" in a?a.type:null,b,x,d)
else if(H.aa(a,b,x,d))return!0
else{if(!('$is'+"b1" in y.prototype))return!1
w=y.prototype["$as"+"b1"]
v=H.aU(w,z?a.slice(1):null)
return H.aa(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bJ(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eN(H.aU(r,z),b,u,d)},
eT:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aa(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aa(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aa(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aa(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kq(m,b,l,d)},
kq:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aa(c[w],d,a[w],b))return!1}return!0},
mo:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
ko:function(a){var z,y,x,w,v,u
z=H.M($.eS.$1(a))
y=$.c5[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c7[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.M($.eM.$2(a,z))
if(z!=null){y=$.c5[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c7[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c8(x)
$.c5[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c7[z]=x
return x}if(v==="-"){u=H.c8(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eW(a,x)
if(v==="*")throw H.c(P.ej(z))
if(init.leafTags[z]===true){u=H.c8(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eW(a,x)},
eW:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cW(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c8:function(a){return J.cW(a,!1,null,!!a.$isv)},
kp:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c8(z)
else return J.cW(z,c,null,null)},
kj:function(){if(!0===$.cT)return
$.cT=!0
H.kk()},
kk:function(){var z,y,x,w,v,u,t,s
$.c5=Object.create(null)
$.c7=Object.create(null)
H.kf()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eY.$1(v)
if(u!=null){t=H.kp(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kf:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.aP(C.z,H.aP(C.E,H.aP(C.n,H.aP(C.n,H.aP(C.D,H.aP(C.A,H.aP(C.B(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eS=new H.kg(v)
$.eM=new H.kh(u)
$.eY=new H.ki(t)},
aP:function(a,b){return a(b)||b},
eZ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
f_:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ho:{"^":"a;a,b,c,d,e,f,r,0x",p:{
hp:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.b5(z)
y=z[0]
x=z[1]
return new H.ho(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i0:{"^":"a;a,b,c,d,e,f",
X:function(a){var z,y,x
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
ai:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.l])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eb:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ha:{"^":"S;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
dG:function(a,b){return new H.ha(a,b==null?null:b.method)}}},
fM:{"^":"S;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
p:{
co:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fM(a,y,z?null:b.receiver)}}},
ie:{"^":"S;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kz:{"^":"q:18;a",
$1:function(a){if(!!J.B(a).$isS)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eB:{"^":"a;a,0b",
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
i:function(a){return"Closure '"+H.aH(this).trim()+"'"},
gce:function(){return this},
$isci:1,
gce:function(){return this}},
dY:{"^":"q;"},
hK:{"^":"dY;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cb:{"^":"dY;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cb))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gN:function(a){var z,y
z=this.c
if(z==null)y=H.bb(this.a)
else y=typeof z!=="object"?J.ak(z):H.bb(z)
return(y^H.bb(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.aH(z)+"'")},
p:{
cc:function(a){return a.a},
d2:function(a){return a.c},
bL:function(a){var z,y,x,w,v
z=new H.cb("self","target","receiver","name")
y=J.b5(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i1:{"^":"S;a",
i:function(a){return this.a},
p:{
aj:function(a,b){return new H.i1("TypeError: "+H.f(P.bO(a))+": type '"+H.eK(a)+"' is not a subtype of type '"+b+"'")}}},
fb:{"^":"S;a",
i:function(a){return this.a},
p:{
fc:function(a,b){return new H.fb("CastError: "+H.f(P.bO(a))+": type '"+H.eK(a)+"' is not a subtype of type '"+b+"'")}}},
hx:{"^":"S;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
p:{
hy:function(a){return new H.hx(a)}}},
aG:{"^":"fW;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gaa:function(a){return new H.dy(this,[H.u(this,0)])},
bV:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bF(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bF(y,b)}else return this.dX(b)},
dX:function(a){var z=this.d
if(z==null)return!1
return this.bf(this.aU(z,J.ak(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aE(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aE(w,b)
x=y==null?null:y.b
return x}else return this.dY(b)},
dY:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aU(z,J.ak(a)&0x3ffffff)
x=this.bf(y,a)
if(x<0)return
return y[x].b},
R:function(a,b,c){var z,y,x,w,v,u
H.w(b,H.u(this,0))
H.w(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aZ()
this.b=z}this.by(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aZ()
this.c=y}this.by(y,b,c)}else{x=this.d
if(x==null){x=this.aZ()
this.d=x}w=J.ak(b)&0x3ffffff
v=this.aU(x,w)
if(v==null)this.b2(x,w,[this.b_(b,c)])
else{u=this.bf(v,b)
if(u>=0)v[u].b=c
else v.push(this.b_(b,c))}}},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aY(this))
z=z.c}},
by:function(a,b,c){var z
H.w(b,H.u(this,0))
H.w(c,H.u(this,1))
z=this.aE(a,b)
if(z==null)this.b2(a,b,this.b_(b,c))
else z.b=c},
cV:function(){this.r=this.r+1&67108863},
b_:function(a,b){var z,y
z=new H.fO(H.w(a,H.u(this,0)),H.w(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.cV()
return z},
bf:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.dB(this)},
aE:function(a,b){return a[b]},
aU:function(a,b){return a[b]},
b2:function(a,b,c){a[b]=c},
cP:function(a,b){delete a[b]},
bF:function(a,b){return this.aE(a,b)!=null},
aZ:function(){var z=Object.create(null)
this.b2(z,"<non-identifier-key>",z)
this.cP(z,"<non-identifier-key>")
return z},
$isdx:1},
fO:{"^":"a;a,b,0c,0d"},
dy:{"^":"fs;a,$ti",
gj:function(a){return this.a.a},
gP:function(a){var z,y
z=this.a
y=new H.fP(z,z.r,this.$ti)
y.c=z.e
return y}},
fP:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kg:{"^":"q:18;a",
$1:function(a){return this.a(a)}},
kh:{"^":"q:33;a",
$2:function(a,b){return this.a(a,b)}},
ki:{"^":"q:31;a",
$1:function(a){return this.a(H.M(a))}},
fK:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdI:1,
p:{
fL:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(new P.fB("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kb:function(a){return J.ds(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ks:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c2:function(a){return a},
ay:function(a,b,c){H.bu(b)
if(a>>>0!==a||a>=c)throw H.c(H.aA(b,a))},
jV:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.c(H.ka(a,b,c))
return b},
h4:{"^":"j;",$ism6:1,"%":"DataView;ArrayBufferView;cs|ev|ew|h3|ex|ey|ax"},
cs:{"^":"h4;",
gj:function(a){return a.length},
$isv:1,
$asv:I.cQ},
h3:{"^":"ew;",
k:function(a,b){H.ay(b,a,a.length)
return a[b]},
$asbP:function(){return[P.t]},
$asp:function(){return[P.t]},
$isi:1,
$asi:function(){return[P.t]},
$isd:1,
$asd:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
ax:{"^":"ey;",
$asbP:function(){return[P.z]},
$asp:function(){return[P.z]},
$isi:1,
$asi:function(){return[P.z]},
$isd:1,
$asd:function(){return[P.z]}},
lC:{"^":"ax;",
k:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lD:{"^":"ax;",
k:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lE:{"^":"ax;",
k:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lF:{"^":"ax;",
k:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lG:{"^":"ax;",
k:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lH:{"^":"ax;",
gj:function(a){return a.length},
k:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
h5:{"^":"ax;",
gj:function(a){return a.length},
k:function(a,b){H.ay(b,a,a.length)
return a[b]},
aM:function(a,b,c){return new Uint8Array(a.subarray(b,H.jV(b,c,a.length)))},
"%":";Uint8Array"},
ev:{"^":"cs+p;"},
ew:{"^":"ev+bP;"},
ex:{"^":"cs+p;"},
ey:{"^":"ex+bP;"}}],["","",,P,{"^":"",
iB:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k2()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aR(new P.iD(z),1)).observe(y,{childList:true})
return new P.iC(z,y,x)}else if(self.setImmediate!=null)return P.k3()
return P.k4()},
mc:[function(a){self.scheduleImmediate(H.aR(new P.iE(H.b(a,{func:1,ret:-1})),0))},"$1","k2",4,0,9],
md:[function(a){self.setImmediate(H.aR(new P.iF(H.b(a,{func:1,ret:-1})),0))},"$1","k3",4,0,9],
me:[function(a){P.cB(C.m,H.b(a,{func:1,ret:-1}))},"$1","k4",4,0,9],
cB:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.c.ak(a.a,1000)
return P.jz(z<0?0:z,b)},
e0:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aI]})
z=C.c.ak(a.a,1000)
return P.jA(z<0?0:z,b)},
jZ:function(a,b){if(H.bG(a,{func:1,args:[P.a,P.ad]}))return b.ei(a,null,P.a,P.ad)
if(H.bG(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.c(P.bK(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jY:function(){var z,y
for(;z=$.aO,z!=null;){$.br=null
y=z.b
$.aO=y
if(y==null)$.bq=null
z.a.$0()}},
mm:[function(){$.cM=!0
try{P.jY()}finally{$.br=null
$.cM=!1
if($.aO!=null)$.$get$cI().$1(P.eO())}},"$0","eO",0,0,3],
eJ:function(a){var z=new P.ep(H.b(a,{func:1,ret:-1}))
if($.aO==null){$.bq=z
$.aO=z
if(!$.cM)$.$get$cI().$1(P.eO())}else{$.bq.b=z
$.bq=z}},
k1:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.aO
if(z==null){P.eJ(a)
$.br=$.bq
return}y=new P.ep(a)
x=$.br
if(x==null){y.b=z
$.br=y
$.aO=y}else{y.b=x.b
x.b=y
$.br=y
if(y.b==null)$.bq=y}},
ku:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.F
if(C.d===y){P.c4(null,null,C.d,a)
return}y.toString
P.c4(null,null,y,H.b(y.b5(a),z))},
hX:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.F
if(y===C.d){y.toString
return P.cB(a,b)}return P.cB(a,H.b(y.b5(b),z))},
hY:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aI]}
H.b(b,z)
y=$.F
if(y===C.d){y.toString
return P.e0(a,b)}x=y.bT(b,P.aI)
$.F.toString
return P.e0(a,H.b(x,z))},
c3:function(a,b,c,d,e){var z={}
z.a=d
P.k1(new P.k_(z,e))},
eH:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.F
if(y===c)return d.$0()
$.F=c
z=y
try{y=d.$0()
return y}finally{$.F=z}},
eI:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.F
if(y===c)return d.$1(e)
$.F=c
z=y
try{y=d.$1(e)
return y}finally{$.F=z}},
k0:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
c4:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.b5(d):c.dF(d,-1)
P.eJ(d)},
iD:{"^":"q:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iC:{"^":"q:30;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iE:{"^":"q:2;a",
$0:function(){this.a.$0()}},
iF:{"^":"q:2;a",
$0:function(){this.a.$0()}},
eE:{"^":"a;a,0b,c",
cD:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aR(new P.jC(this,b),0),a)
else throw H.c(P.a8("`setTimeout()` not found."))},
cE:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aR(new P.jB(this,a,Date.now(),b),0),a)
else throw H.c(P.a8("Periodic timer."))},
$isaI:1,
p:{
jz:function(a,b){var z=new P.eE(!0,0)
z.cD(a,b)
return z},
jA:function(a,b){var z=new P.eE(!1,0)
z.cE(a,b)
return z}}},
jC:{"^":"q:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jB:{"^":"q:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.cr(w,x)}z.c=y
this.d.$1(z)}},
aN:{"^":"a;0a,b,c,d,e,$ti",
e2:function(a){if(this.c!==6)return!0
return this.b.b.bo(H.b(this.d,{func:1,ret:P.ae,args:[P.a]}),a.a,P.ae,P.a)},
dW:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.bG(z,{func:1,args:[P.a,P.ad]}))return H.cR(w.en(z,a.a,a.b,null,y,P.ad),x)
else return H.cR(w.bo(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
at:{"^":"a;bO:a<,b,0dq:c<,$ti",
ca:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.d){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jZ(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.at(0,$.F,[c])
w=b==null?1:3
this.bz(new P.aN(x,w,a,b,[z,c]))
return x},
eu:function(a,b){return this.ca(a,null,b)},
bz:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isaN")
this.c=a}else{if(z===2){y=H.k(this.c,"$isat")
z=y.a
if(z<4){y.bz(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c4(null,null,z,H.b(new P.iT(this,a),{func:1,ret:-1}))}},
bJ:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isaN")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isat")
y=u.a
if(y<4){u.bJ(a)
return}this.a=y
this.c=u.c}z.a=this.aF(a)
y=this.b
y.toString
P.c4(null,null,y,H.b(new P.iY(z,this),{func:1,ret:-1}))}},
b1:function(){var z=H.k(this.c,"$isaN")
this.c=null
return this.aF(z)},
aF:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bD:function(a){var z,y,x,w
z=H.u(this,0)
H.cR(a,{futureOr:1,type:z})
y=this.$ti
x=H.aQ(a,"$isb1",y,"$asb1")
if(x){z=H.aQ(a,"$isat",y,null)
if(z)P.er(a,this)
else P.iU(a,this)}else{w=this.b1()
H.w(a,z)
this.a=4
this.c=a
P.bn(this,w)}},
aQ:[function(a,b){var z
H.k(b,"$isad")
z=this.b1()
this.a=8
this.c=new P.a6(a,b)
P.bn(this,z)},function(a){return this.aQ(a,null)},"eC","$2","$1","gcM",4,2,28],
$isb1:1,
p:{
iU:function(a,b){var z,y,x
b.a=1
try{a.ca(new P.iV(b),new P.iW(b),null)}catch(x){z=H.aD(x)
y=H.aT(x)
P.ku(new P.iX(b,z,y))}},
er:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isat")
if(z>=4){y=b.b1()
b.a=a.a
b.c=a.c
P.bn(b,y)}else{y=H.k(b.c,"$isaN")
b.a=2
b.c=a
a.bJ(y)}},
bn:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isa6")
y=y.b
u=v.a
t=v.b
y.toString
P.c3(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bn(z.a,b)}y=z.a
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
if(p){H.k(r,"$isa6")
y=y.b
u=r.a
t=r.b
y.toString
P.c3(null,null,y,u,t)
return}o=$.F
if(o==null?q!=null:o!==q)$.F=q
else o=null
y=b.c
if(y===8)new P.j0(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j_(x,b,r).$0()}else if((y&2)!==0)new P.iZ(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.B(y).$isb1){if(y.a>=4){n=H.k(t.c,"$isaN")
t.c=null
b=t.aF(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.er(y,t)
return}}m=b.b
n=H.k(m.c,"$isaN")
m.c=null
b=m.aF(n)
y=x.a
u=x.b
if(!y){H.w(u,H.u(m,0))
m.a=4
m.c=u}else{H.k(u,"$isa6")
m.a=8
m.c=u}z.a=m
y=m}}}},
iT:{"^":"q:2;a,b",
$0:function(){P.bn(this.a,this.b)}},
iY:{"^":"q:2;a,b",
$0:function(){P.bn(this.b,this.a.a)}},
iV:{"^":"q:12;a",
$1:function(a){var z=this.a
z.a=0
z.bD(a)}},
iW:{"^":"q:27;a",
$2:function(a,b){this.a.aQ(a,H.k(b,"$isad"))},
$1:function(a){return this.$2(a,null)}},
iX:{"^":"q:2;a,b,c",
$0:function(){this.a.aQ(this.b,this.c)}},
j0:{"^":"q:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c7(H.b(w.d,{func:1}),null)}catch(v){y=H.aD(v)
x=H.aT(v)
if(this.d){w=H.k(this.a.a.c,"$isa6").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isa6")
else u.b=new P.a6(y,x)
u.a=!0
return}if(!!J.B(z).$isb1){if(z instanceof P.at&&z.gbO()>=4){if(z.gbO()===8){w=this.b
w.b=H.k(z.gdq(),"$isa6")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.eu(new P.j1(t),null)
w.a=!1}}},
j1:{"^":"q:26;a",
$1:function(a){return this.a}},
j_:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.w(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.bo(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aD(t)
y=H.aT(t)
x=this.a
x.b=new P.a6(z,y)
x.a=!0}}},
iZ:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isa6")
w=this.c
if(w.e2(z)&&w.e!=null){v=this.b
v.b=w.dW(z)
v.a=!1}}catch(u){y=H.aD(u)
x=H.aT(u)
w=H.k(this.a.a.c,"$isa6")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a6(y,x)
s.a=!0}}},
ep:{"^":"a;a,0b"},
cw:{"^":"a;$ti",
gj:function(a){var z,y
z={}
y=new P.at(0,$.F,[P.z])
z.a=0
this.e1(new P.hN(z,this),!0,new P.hO(z,y),y.gcM())
return y}},
hN:{"^":"q;a,b",
$1:function(a){H.w(a,H.av(this.b,"cw",0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.av(this.b,"cw",0)]}}},
hO:{"^":"q:2;a,b",
$0:function(){this.b.bD(this.a.a)}},
dV:{"^":"a;$ti"},
hM:{"^":"a;"},
aI:{"^":"a;"},
a6:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isS:1},
jJ:{"^":"a;",$ismb:1},
k_:{"^":"q:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dH()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.i(0)
throw x}},
jl:{"^":"jJ;",
eo:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.d===$.F){a.$0()
return}P.eH(null,null,this,a,-1)}catch(x){z=H.aD(x)
y=H.aT(x)
P.c3(null,null,this,z,H.k(y,"$isad"))}},
ep:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.d===$.F){a.$1(b)
return}P.eI(null,null,this,a,b,-1,c)}catch(x){z=H.aD(x)
y=H.aT(x)
P.c3(null,null,this,z,H.k(y,"$isad"))}},
dF:function(a,b){return new P.jn(this,H.b(a,{func:1,ret:b}),b)},
b5:function(a){return new P.jm(this,H.b(a,{func:1,ret:-1}))},
bT:function(a,b){return new P.jo(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
c7:function(a,b){H.b(a,{func:1,ret:b})
if($.F===C.d)return a.$0()
return P.eH(null,null,this,a,b)},
bo:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.F===C.d)return a.$1(b)
return P.eI(null,null,this,a,b,c,d)},
en:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.F===C.d)return a.$2(b,c)
return P.k0(null,null,this,a,b,c,d,e,f)},
ei:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jn:{"^":"q;a,b,c",
$0:function(){return this.a.c7(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jm:{"^":"q:3;a,b",
$0:function(){return this.a.eo(this.b)}},
jo:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.ep(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fR:function(a,b,c){H.bu(a)
return H.y(H.kc(a,new H.aG(0,0,[b,c])),"$isdx",[b,c],"$asdx")},
fQ:function(a,b){return new H.aG(0,0,[a,b])},
fS:function(a,b,c,d){return new P.j7(0,0,[d])},
fF:function(a,b,c){var z,y
if(P.cN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bs()
C.a.h(y,a)
try{P.jX(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.dW(b,H.kn(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cj:function(a,b,c){var z,y,x
if(P.cN(a))return b+"..."+c
z=new P.cx(b)
y=$.$get$bs()
C.a.h(y,a)
try{x=z
x.a=P.dW(x.gaf(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaf()+c
y=z.gaf()
return y.charCodeAt(0)==0?y:y},
cN:function(a){var z,y
for(z=0;y=$.$get$bs(),z<y.length;++z)if(a===y[z])return!0
return!1},
jX:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gP(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.f(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.C()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.C();t=s,s=r){r=z.gM(z);++x
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
dB:function(a){var z,y,x
z={}
if(P.cN(a))return"{...}"
y=new P.cx("")
try{C.a.h($.$get$bs(),a)
x=y
x.a=x.gaf()+"{"
z.a=!0
J.f4(a,new P.fX(z,y))
z=y
z.a=z.gaf()+"}"}finally{z=$.$get$bs()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaf()
return z.charCodeAt(0)==0?z:z},
j7:{"^":"j2;a,0b,0c,0d,0e,0f,r,$ti",
gP:function(a){return P.eu(this,this.r,H.u(this,0))},
gj:function(a){return this.a},
h:function(a,b){var z,y
H.w(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cK()
this.b=z}return this.bB(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cK()
this.c=y}return this.bB(y,b)}else return this.cF(0,b)},
cF:function(a,b){var z,y,x
H.w(b,H.u(this,0))
z=this.d
if(z==null){z=P.cK()
this.d=z}y=this.bE(b)
x=z[y]
if(x==null)z[y]=[this.aP(b)]
else{if(this.bI(x,b)>=0)return!1
x.push(this.aP(b))}return!0},
T:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bK(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bK(this.c,b)
else return this.dl(0,b)},
dl:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.cS(z,b)
x=this.bI(y,b)
if(x<0)return!1
this.bQ(y.splice(x,1)[0])
return!0},
bB:function(a,b){H.w(b,H.u(this,0))
if(H.k(a[b],"$iscJ")!=null)return!1
a[b]=this.aP(b)
return!0},
bK:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$iscJ")
if(z==null)return!1
this.bQ(z)
delete a[b]
return!0},
bC:function(){this.r=this.r+1&67108863},
aP:function(a){var z,y
z=new P.cJ(H.w(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bC()
return z},
bQ:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bC()},
bE:function(a){return J.ak(a)&0x3ffffff},
cS:function(a,b){return a[this.bE(b)]},
bI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
p:{
cK:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cJ:{"^":"a;a,0b,0c"},
j8:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.w(z.a,H.u(this,0))
this.c=z.b
return!0}}},
p:{
eu:function(a,b,c){var z=new P.j8(a,b,[c])
z.c=a.e
return z}}},
j2:{"^":"hz;"},
bT:{"^":"j9;",$isi:1,$isd:1},
p:{"^":"a;$ti",
gP:function(a){return new H.dz(a,this.gj(a),0,[H.bt(this,a,"p",0)])},
B:function(a,b){return this.k(a,b)},
ex:function(a,b){var z,y,x
z=H.e([],[H.bt(this,a,"p",0)])
C.a.sj(z,this.gj(a))
y=0
while(!0){x=this.gj(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.R(z,y,this.k(a,y));++y}return z},
ew:function(a){return this.ex(a,!0)},
i:function(a){return P.cj(a,"[","]")}},
fW:{"^":"a5;"},
fX:{"^":"q:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
a5:{"^":"a;$ti",
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bt(this,a,"a5",0),H.bt(this,a,"a5",1)]})
for(z=J.bv(this.gaa(a));z.C();){y=z.gM(z)
b.$2(y,this.k(a,y))}},
gj:function(a){return J.aV(this.gaa(a))},
i:function(a){return P.dB(a)},
$isZ:1},
hB:{"^":"a;$ti",
i:function(a){return P.cj(this,"{","}")},
B:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.d_("index"))
if(b<0)H.R(P.a7(b,0,null,"index",null))
for(z=P.eu(this,this.r,H.u(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.c(P.E(b,this,"index",null,y))},
$isi:1},
hz:{"^":"hB;"},
j9:{"^":"a+p;"}}],["","",,P,{"^":"",cf:{"^":"a;$ti"},dc:{"^":"hM;$ti"},fu:{"^":"cf;",
$ascf:function(){return[P.l,[P.d,P.z]]}},im:{"^":"fu;a"},io:{"^":"dc;",
dL:function(a,b,c){var z,y,x,w
z=a.length
P.dN(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jI(0,0,x)
if(w.cR(a,b,z)!==z)w.bR(C.b.ba(a,z-1),0)
return C.H.aM(x,0,w.b)},
dK:function(a){return this.dL(a,0,null)},
$asdc:function(){return[P.l,[P.d,P.z]]}},jI:{"^":"a;a,b,c",
bR:function(a,b){var z,y,x,w,v
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
cR:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.ba(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.aD(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bR(w,C.b.aD(a,u)))x=u}else if(w<=2047){v=this.b
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
fw:function(a){var z=J.B(a)
if(!!z.$isq)return z.i(a)
return"Instance of '"+H.aH(a)+"'"},
fT:function(a,b,c,d){var z,y
H.w(b,d)
z=J.fH(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.R(z,y,b)
return H.y(z,"$isd",[d],"$asd")},
fU:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.gP(a);x.C();)C.a.h(y,H.w(x.gM(x),c))
if(b)return y
return H.y(J.b5(y),"$isd",z,"$asd")},
cy:function(a,b,c){var z,y
z=P.z
H.y(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.y(a,"$isaF",[z],"$asaF")
y=a.length
c=P.dN(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.Z()
z=c<y}else z=!0
return H.dM(z?C.a.aM(a,b,c):a)}return P.hP(a,b,c)},
hP:function(a,b,c){var z,y,x
H.y(a,"$isi",[P.z],"$asi")
z=J.bv(a)
for(y=0;y<b;++y)if(!z.C())throw H.c(P.a7(b,0,y,null,null))
x=[]
for(;z.C();)x.push(z.gM(z))
return H.dM(x)},
hq:function(a,b,c){return new H.fK(a,H.fL(a,!1,!0,!1))},
jH:function(a,b,c,d){var z,y,x,w,v,u
H.y(a,"$isd",[P.z],"$asd")
if(c===C.q){z=$.$get$eG().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.dK(H.w(b,H.av(c,"cf",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hl(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bO:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a0(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fw(a)},
P:function(a){return new P.eq(a)},
cY:function(a){H.ks(a)},
ae:{"^":"a;"},
"+bool":0,
ab:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.ab))return!1
return this.a===b.a&&this.b===b.b},
gN:function(a){var z=this.a
return(z^C.c.aG(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fl(H.hk(this))
y=P.bw(H.hi(this))
x=P.bw(H.he(this))
w=P.bw(H.hf(this))
v=P.bw(H.hh(this))
u=P.bw(H.hj(this))
t=P.fm(H.hg(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fl:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bw:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"L;"},
"+double":0,
b_:{"^":"a;a",
Z:function(a,b){return C.c.Z(this.a,H.k(b,"$isb_").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.b_))return!1
return this.a===b.a},
gN:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fr()
y=this.a
if(y<0)return"-"+new P.b_(0-y).i(0)
x=z.$1(C.c.ak(y,6e7)%60)
w=z.$1(C.c.ak(y,1e6)%60)
v=new P.fq().$1(y%1e6)
return""+C.c.ak(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
p:{
dk:function(a,b,c,d,e,f){return new P.b_(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fq:{"^":"q:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fr:{"^":"q:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
S:{"^":"a;"},
dH:{"^":"S;",
i:function(a){return"Throw of null."}},
al:{"^":"S;a,b,c,d",
gaS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaR:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gaS()+y+x
if(!this.a)return w
v=this.gaR()
u=P.bO(this.b)
return w+v+": "+H.f(u)},
p:{
f6:function(a){return new P.al(!1,null,null,a)},
bK:function(a,b,c){return new P.al(!0,a,b,c)},
d_:function(a){return new P.al(!1,null,a,"Must not be null")}}},
bX:{"^":"al;e,f,a,b,c,d",
gaS:function(){return"RangeError"},
gaR:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
p:{
bY:function(a,b,c){return new P.bX(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.bX(b,c,!0,a,d,"Invalid value")},
dN:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.c(P.a7(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.c(P.a7(b,a,c,"end",f))
return b}return c}}},
fE:{"^":"al;e,j:f>,a,b,c,d",
gaS:function(){return"RangeError"},
gaR:function(){if(J.f1(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
p:{
E:function(a,b,c,d,e){var z=H.T(e!=null?e:J.aV(b))
return new P.fE(b,z,!0,a,c,"Index out of range")}}},
ih:{"^":"S;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
a8:function(a){return new P.ih(a)}}},
id:{"^":"S;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
ej:function(a){return new P.id(a)}}},
hJ:{"^":"S;a",
i:function(a){return"Bad state: "+this.a}},
fi:{"^":"S;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bO(z))+"."},
p:{
aY:function(a){return new P.fi(a)}}},
hb:{"^":"a;",
i:function(a){return"Out of Memory"},
$isS:1},
dT:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isS:1},
fk:{"^":"S;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eq:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fB:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.b.aN(x,0,75)+"..."
return y+"\n"+x}},
z:{"^":"L;"},
"+int":0,
i:{"^":"a;$ti",
gj:function(a){var z,y
z=this.gP(this)
for(y=0;z.C();)++y
return y},
B:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.d_("index"))
if(b<0)H.R(P.a7(b,0,null,"index",null))
for(z=this.gP(this),y=0;z.C();){x=z.gM(z)
if(b===y)return x;++y}throw H.c(P.E(b,this,"index",null,y))},
i:function(a){return P.fF(this,"(",")")}},
ck:{"^":"a;$ti"},
d:{"^":"a;$ti",$isi:1},
"+List":0,
Z:{"^":"a;$ti"},
A:{"^":"a;",
gN:function(a){return P.a.prototype.gN.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
L:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gN:function(a){return H.bb(this)},
i:function(a){return"Instance of '"+H.aH(this)+"'"},
toString:function(){return this.i(this)}},
ad:{"^":"a;"},
l:{"^":"a;",$isdI:1},
"+String":0,
cx:{"^":"a;af:a<",
gj:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dW:function(a,b,c){var z=J.bv(b)
if(!z.C())return a
if(c.length===0){do a+=H.f(z.gM(z))
while(z.C())}else{a+=H.f(z.gM(z))
for(;z.C();)a=a+c+H.f(z.gM(z))}return a}}}}],["","",,W,{"^":"",
ce:function(a,b){var z=document.createElement("canvas")
return z},
ft:function(a){H.k(a,"$isY")
return"wheel"},
c0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
et:function(a,b,c,d){var z,y
z=W.c0(W.c0(W.c0(W.c0(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eL:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.d)return a
return z.bT(a,b)},
b4:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kB:{"^":"cv;0m:x=,0n:y=","%":"Accelerometer|LinearAccelerationSensor"},
kC:{"^":"j;0j:length=","%":"AccessibleNodeList"},
kD:{"^":"b4;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kE:{"^":"b4;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fa:{"^":"j;","%":";Blob"},
cd:{"^":"b4;",
aJ:function(a,b,c){if(c!=null)return a.getContext(b,P.k6(c,null))
return a.getContext(b)},
cg:function(a,b){return this.aJ(a,b,null)},
$iscd:1,
"%":"HTMLCanvasElement"},
d7:{"^":"j;",$isd7:1,"%":"CanvasRenderingContext2D"},
kK:{"^":"C;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kM:{"^":"bN;0j:length=","%":"CSSPerspective"},
kN:{"^":"ch;0m:x=,0n:y=","%":"CSSPositionValue"},
kO:{"^":"bN;0m:x=,0n:y=","%":"CSSRotation"},
aZ:{"^":"j;",$isaZ:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kP:{"^":"bN;0m:x=,0n:y=","%":"CSSScale"},
kQ:{"^":"iJ;0j:length=",
ci:function(a,b){var z=a.getPropertyValue(this.cJ(a,b))
return z==null?"":z},
cJ:function(a,b){var z,y
z=$.$get$dd()
y=z[b]
if(typeof y==="string")return y
y=this.dv(a,b)
z[b]=y
return y},
dv:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fn()+b
if(z in a)return z
return b},
gb6:function(a){return a.bottom},
ga4:function(a){return a.height},
gan:function(a){return a.left},
gbn:function(a){return a.right},
gaC:function(a){return a.top},
ga6:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fj:{"^":"a;",
gan:function(a){return this.ci(a,"left")}},
ch:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bN:{"^":"j;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kR:{"^":"ch;0j:length=","%":"CSSTransformValue"},
kS:{"^":"bN;0m:x=,0n:y=","%":"CSSTranslation"},
kT:{"^":"ch;0j:length=","%":"CSSUnparsedValue"},
kU:{"^":"j;0j:length=","%":"DataTransferItemList"},
kV:{"^":"j;0m:x=,0n:y=","%":"DeviceAcceleration"},
kW:{"^":"j;",
i:function(a){return String(a)},
"%":"DOMException"},
kX:{"^":"fo;",
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"DOMPoint"},
fo:{"^":"j;",
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":";DOMPointReadOnly"},
kY:{"^":"iL;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.a4,P.L]]},
$asp:function(){return[[P.a4,P.L]]},
$isi:1,
$asi:function(){return[[P.a4,P.L]]},
$isd:1,
$asd:function(){return[[P.a4,P.L]]},
$asr:function(){return[[P.a4,P.L]]},
"%":"ClientRectList|DOMRectList"},
fp:{"^":"j;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga6(a))+" x "+H.f(this.ga4(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.aQ(b,"$isa4",[P.L],"$asa4")
if(!z)return!1
z=J.bI(b)
return a.left===z.gan(b)&&a.top===z.gaC(b)&&this.ga6(a)===z.ga6(b)&&this.ga4(a)===z.ga4(b)},
gN:function(a){return W.et(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga6(a)&0x1FFFFFFF,this.ga4(a)&0x1FFFFFFF)},
gb6:function(a){return a.bottom},
ga4:function(a){return a.height},
gan:function(a){return a.left},
gbn:function(a){return a.right},
gaC:function(a){return a.top},
ga6:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa4:1,
$asa4:function(){return[P.L]},
"%":";DOMRectReadOnly"},
kZ:{"^":"iN;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.l]},
$asp:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$isd:1,
$asd:function(){return[P.l]},
$asr:function(){return[P.l]},
"%":"DOMStringList"},
l_:{"^":"j;0j:length=","%":"DOMTokenList"},
iI:{"^":"bT;a,b",
gj:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.k(z[b],"$isV")},
h:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var z=this.ew(this)
return new J.am(z,z.length,0,[H.u(z,0)])},
$asp:function(){return[W.V]},
$asi:function(){return[W.V]},
$asd:function(){return[W.V]}},
V:{"^":"C;",
gbU:function(a){return new W.iI(a,a.children)},
gaI:function(a){return P.hn(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.L)},
i:function(a){return a.localName},
$isV:1,
"%":";Element"},
a1:{"^":"j;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
Y:{"^":"j;",
bS:["cn",function(a,b,c,d){H.b(c,{func:1,args:[W.a1]})
if(c!=null)this.cG(a,b,c,!1)}],
cG:function(a,b,c,d){return a.addEventListener(b,H.aR(H.b(c,{func:1,args:[W.a1]}),1),!1)},
$isY:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ez|eA|eC|eD"},
b0:{"^":"fa;",$isb0:1,"%":"File"},
li:{"^":"iS;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b0]},
$asp:function(){return[W.b0]},
$isi:1,
$asi:function(){return[W.b0]},
$isd:1,
$asd:function(){return[W.b0]},
$asr:function(){return[W.b0]},
"%":"FileList"},
lj:{"^":"Y;0j:length=","%":"FileWriter"},
lm:{"^":"b4;0j:length=","%":"HTMLFormElement"},
b2:{"^":"j;",$isb2:1,"%":"Gamepad"},
ln:{"^":"cv;0m:x=,0n:y=","%":"Gyroscope"},
lo:{"^":"j;0j:length=","%":"History"},
lp:{"^":"j4;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.C]},
$asp:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isd:1,
$asd:function(){return[W.C]},
$asr:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bQ:{"^":"j;0bX:data=",$isbQ:1,"%":"ImageData"},
dp:{"^":"b4;",$isdp:1,"%":"HTMLImageElement"},
b6:{"^":"cC;",$isb6:1,"%":"KeyboardEvent"},
lu:{"^":"j;",
i:function(a){return String(a)},
"%":"Location"},
lv:{"^":"cv;0m:x=,0n:y=","%":"Magnetometer"},
lx:{"^":"j;0j:length=","%":"MediaList"},
ly:{"^":"Y;",
bS:function(a,b,c,d){H.b(c,{func:1,args:[W.a1]})
if(b==="message")a.start()
this.cn(a,b,c,!1)},
"%":"MessagePort"},
lz:{"^":"ja;",
k:function(a,b){return P.au(a.get(H.M(b)))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.au(y.value[1]))}},
gaa:function(a){var z=H.e([],[P.l])
this.K(a,new W.h0(z))
return z},
gj:function(a){return a.size},
$asa5:function(){return[P.l,null]},
$isZ:1,
$asZ:function(){return[P.l,null]},
"%":"MIDIInputMap"},
h0:{"^":"q:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lA:{"^":"jb;",
k:function(a,b){return P.au(a.get(H.M(b)))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.au(y.value[1]))}},
gaa:function(a){var z=H.e([],[P.l])
this.K(a,new W.h1(z))
return z},
gj:function(a){return a.size},
$asa5:function(){return[P.l,null]},
$isZ:1,
$asZ:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
h1:{"^":"q:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b7:{"^":"j;",$isb7:1,"%":"MimeType"},
lB:{"^":"jd;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b7]},
$asp:function(){return[W.b7]},
$isi:1,
$asi:function(){return[W.b7]},
$isd:1,
$asd:function(){return[W.b7]},
$asr:function(){return[W.b7]},
"%":"MimeTypeArray"},
ah:{"^":"cC;",$isah:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iH:{"^":"bT;a",
gP:function(a){var z=this.a.childNodes
return new W.dl(z,z.length,-1,[H.bt(C.I,z,"r",0)])},
gj:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asp:function(){return[W.C]},
$asi:function(){return[W.C]},
$asd:function(){return[W.C]}},
C:{"^":"Y;",
i:function(a){var z=a.nodeValue
return z==null?this.co(a):z},
$isC:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
h6:{"^":"jf;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.C]},
$asp:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isd:1,
$asd:function(){return[W.C]},
$asr:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
ba:{"^":"j;0j:length=",$isba:1,"%":"Plugin"},
lL:{"^":"jj;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ba]},
$asp:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$isd:1,
$asd:function(){return[W.ba]},
$asr:function(){return[W.ba]},
"%":"PluginArray"},
lQ:{"^":"jp;",
k:function(a,b){return P.au(a.get(H.M(b)))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.au(y.value[1]))}},
gaa:function(a){var z=H.e([],[P.l])
this.K(a,new W.hw(z))
return z},
gj:function(a){return a.size},
$asa5:function(){return[P.l,null]},
$isZ:1,
$asZ:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hw:{"^":"q:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lS:{"^":"b4;0j:length=","%":"HTMLSelectElement"},
cv:{"^":"Y;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bc:{"^":"Y;",$isbc:1,"%":"SourceBuffer"},
lT:{"^":"eA;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bc]},
$asp:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asr:function(){return[W.bc]},
"%":"SourceBufferList"},
bd:{"^":"j;",$isbd:1,"%":"SpeechGrammar"},
lU:{"^":"jr;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bd]},
$asp:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asr:function(){return[W.bd]},
"%":"SpeechGrammarList"},
be:{"^":"j;0j:length=",$isbe:1,"%":"SpeechRecognitionResult"},
lW:{"^":"ju;",
k:function(a,b){return a.getItem(H.M(b))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.l,P.l]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaa:function(a){var z=H.e([],[P.l])
this.K(a,new W.hL(z))
return z},
gj:function(a){return a.length},
$asa5:function(){return[P.l,P.l]},
$isZ:1,
$asZ:function(){return[P.l,P.l]},
"%":"Storage"},
hL:{"^":"q:25;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bf:{"^":"j;",$isbf:1,"%":"CSSStyleSheet|StyleSheet"},
bg:{"^":"Y;",$isbg:1,"%":"TextTrack"},
bh:{"^":"Y;",$isbh:1,"%":"TextTrackCue|VTTCue"},
m0:{"^":"jy;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bh]},
$asp:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asr:function(){return[W.bh]},
"%":"TextTrackCueList"},
m1:{"^":"eD;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bg]},
$asp:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asr:function(){return[W.bg]},
"%":"TextTrackList"},
m2:{"^":"j;0j:length=","%":"TimeRanges"},
bi:{"^":"j;",$isbi:1,"%":"Touch"},
aJ:{"^":"cC;",$isaJ:1,"%":"TouchEvent"},
m3:{"^":"jE;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bi]},
$asp:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asr:function(){return[W.bi]},
"%":"TouchList"},
m4:{"^":"j;0j:length=","%":"TrackDefaultList"},
cC:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m7:{"^":"j;",
i:function(a){return String(a)},
"%":"URL"},
m9:{"^":"j;0m:x=","%":"VRStageBoundsPoint"},
ma:{"^":"Y;0j:length=","%":"VideoTrackList"},
bm:{"^":"ah;",
gdP:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.a8("deltaY is not supported"))},
gdO:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.a8("deltaX is not supported"))},
$isbm:1,
"%":"WheelEvent"},
iA:{"^":"Y;",
dm:function(a,b){return a.requestAnimationFrame(H.aR(H.b(b,{func:1,ret:-1,args:[P.L]}),1))},
cQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mf:{"^":"jL;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aZ]},
$asp:function(){return[W.aZ]},
$isi:1,
$asi:function(){return[W.aZ]},
$isd:1,
$asd:function(){return[W.aZ]},
$asr:function(){return[W.aZ]},
"%":"CSSRuleList"},
mg:{"^":"fp;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.aQ(b,"$isa4",[P.L],"$asa4")
if(!z)return!1
z=J.bI(b)
return a.left===z.gan(b)&&a.top===z.gaC(b)&&a.width===z.ga6(b)&&a.height===z.ga4(b)},
gN:function(a){return W.et(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga4:function(a){return a.height},
ga6:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mi:{"^":"jN;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.b2]},
$asp:function(){return[W.b2]},
$isi:1,
$asi:function(){return[W.b2]},
$isd:1,
$asd:function(){return[W.b2]},
$asr:function(){return[W.b2]},
"%":"GamepadList"},
mj:{"^":"jP;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.C]},
$asp:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isd:1,
$asd:function(){return[W.C]},
$asr:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mk:{"^":"jR;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.be]},
$asp:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asr:function(){return[W.be]},
"%":"SpeechRecognitionResultList"},
ml:{"^":"jT;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.bf]},
$asp:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asr:function(){return[W.bf]},
"%":"StyleSheetList"},
iO:{"^":"cw;a,b,c,$ti",
e1:function(a,b,c,d){var z=H.u(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.Q(this.a,this.b,a,!1,z)}},
mh:{"^":"iO;a,b,c,$ti"},
iP:{"^":"dV;a,b,c,d,e,$ti",
dB:function(){var z=this.d
if(z!=null&&this.a<=0)J.f3(this.b,this.c,z,!1)},
p:{
Q:function(a,b,c,d,e){var z=c==null?null:W.eL(new W.iQ(c),W.a1)
z=new W.iP(0,a,b,z,!1,[e])
z.dB()
return z}}},
iQ:{"^":"q:4;a",
$1:function(a){return this.a.$1(H.k(a,"$isa1"))}},
r:{"^":"a;$ti",
gP:function(a){return new W.dl(a,this.gj(a),-1,[H.bt(this,a,"r",0)])}},
dl:{"^":"a;a,b,c,0d,$ti",
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f2(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
iJ:{"^":"j+fj;"},
iK:{"^":"j+p;"},
iL:{"^":"iK+r;"},
iM:{"^":"j+p;"},
iN:{"^":"iM+r;"},
iR:{"^":"j+p;"},
iS:{"^":"iR+r;"},
j3:{"^":"j+p;"},
j4:{"^":"j3+r;"},
ja:{"^":"j+a5;"},
jb:{"^":"j+a5;"},
jc:{"^":"j+p;"},
jd:{"^":"jc+r;"},
je:{"^":"j+p;"},
jf:{"^":"je+r;"},
ji:{"^":"j+p;"},
jj:{"^":"ji+r;"},
jp:{"^":"j+a5;"},
ez:{"^":"Y+p;"},
eA:{"^":"ez+r;"},
jq:{"^":"j+p;"},
jr:{"^":"jq+r;"},
ju:{"^":"j+a5;"},
jx:{"^":"j+p;"},
jy:{"^":"jx+r;"},
eC:{"^":"Y+p;"},
eD:{"^":"eC+r;"},
jD:{"^":"j+p;"},
jE:{"^":"jD+r;"},
jK:{"^":"j+p;"},
jL:{"^":"jK+r;"},
jM:{"^":"j+p;"},
jN:{"^":"jM+r;"},
jO:{"^":"j+p;"},
jP:{"^":"jO+r;"},
jQ:{"^":"j+p;"},
jR:{"^":"jQ+r;"},
jS:{"^":"j+p;"},
jT:{"^":"jS+r;"}}],["","",,P,{"^":"",
k9:function(a){var z,y
z=J.B(a)
if(!!z.$isbQ){y=z.gbX(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eF(a.data,a.height,a.width)},
k8:function(a){if(a instanceof P.eF)return{data:a.a,height:a.b,width:a.c}
return a},
au:function(a){var z,y,x,w,v
if(a==null)return
z=P.fQ(P.l,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.M(y[w])
z.R(0,v,a[v])}return z},
k6:function(a,b){var z={}
a.K(0,new P.k7(z))
return z},
dj:function(){var z=$.di
if(z==null){z=J.c9(window.navigator.userAgent,"Opera",0)
$.di=z}return z},
fn:function(){var z,y
z=$.df
if(z!=null)return z
y=$.dg
if(y==null){y=J.c9(window.navigator.userAgent,"Firefox",0)
$.dg=y}if(y)z="-moz-"
else{y=$.dh
if(y==null){y=!P.dj()&&J.c9(window.navigator.userAgent,"Trident/",0)
$.dh=y}if(y)z="-ms-"
else z=P.dj()?"-o-":"-webkit-"}$.df=z
return z},
eF:{"^":"a;bX:a>,b,c",$isbQ:1},
k7:{"^":"q:16;a",
$2:function(a,b){this.a[a]=b}},
fy:{"^":"bT;a,b",
gaV:function(){var z,y,x
z=this.b
y=H.av(z,"p",0)
x=W.V
return new H.fY(new H.iy(z,H.b(new P.fz(),{func:1,ret:P.ae,args:[y]}),[y]),H.b(new P.fA(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.aV(this.gaV().a)},
k:function(a,b){var z=this.gaV()
return z.b.$1(J.cZ(z.a,b))},
gP:function(a){var z=P.fU(this.gaV(),!1,W.V)
return new J.am(z,z.length,0,[H.u(z,0)])},
$asp:function(){return[W.V]},
$asi:function(){return[W.V]},
$asd:function(){return[W.V]}},
fz:{"^":"q:23;",
$1:function(a){return!!J.B(H.k(a,"$isC")).$isV}},
fA:{"^":"q:34;",
$1:function(a){return H.X(H.k(a,"$isC"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
es:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bE:{"^":"a;m:a>,n:b>,$ti",
i:function(a){return"Point("+H.f(this.a)+", "+H.f(this.b)+")"},
q:function(a,b){var z,y,x
if(b==null)return!1
z=H.aQ(b,"$isbE",[P.L],null)
if(!z)return!1
z=this.a
y=J.bI(b)
x=y.gm(b)
if(z==null?x==null:z===x){z=this.b
y=y.gn(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gN:function(a){var z,y
z=J.ak(this.a)
y=J.ak(this.b)
return P.es(P.bo(P.bo(0,z),y))}},
jk:{"^":"a;$ti",
gbn:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.w(z+this.c,H.u(this,0))},
gb6:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.w(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.aQ(b,"$isa4",[P.L],"$asa4")
if(!z)return!1
z=this.a
y=J.bI(b)
x=y.gan(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaC(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.u(this,0)
if(H.w(z+this.c,w)===y.gbn(b)){if(typeof x!=="number")return x.D()
z=H.w(x+this.d,w)===y.gb6(b)}else z=!1}else z=!1}else z=!1
return z},
gN:function(a){var z,y,x,w,v
z=this.a
y=J.ak(z)
x=this.b
w=J.ak(x)
if(typeof z!=="number")return z.D()
v=H.u(this,0)
z=H.w(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.w(x+this.d,v)
return P.es(P.bo(P.bo(P.bo(P.bo(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
bW:function(a,b){var z,y
H.y(b,"$isbE",[P.L],"$asbE")
z=b.a
y=this.a
if(typeof z!=="number")return z.cf()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cf()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a4:{"^":"jk;an:a>,aC:b>,a6:c>,a4:d>,$ti",p:{
hn:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.Z()
if(c<0)z=-c*0
else z=c
H.w(z,e)
if(typeof d!=="number")return d.Z()
if(d<0)y=-d*0
else y=d
return new P.a4(a,b,z,H.w(y,e),[e])}}}}],["","",,P,{"^":"",l0:{"^":"J;0m:x=,0n:y=","%":"SVGFEBlendElement"},l1:{"^":"J;0m:x=,0n:y=","%":"SVGFEColorMatrixElement"},l2:{"^":"J;0m:x=,0n:y=","%":"SVGFEComponentTransferElement"},l3:{"^":"J;0m:x=,0n:y=","%":"SVGFECompositeElement"},l4:{"^":"J;0m:x=,0n:y=","%":"SVGFEConvolveMatrixElement"},l5:{"^":"J;0m:x=,0n:y=","%":"SVGFEDiffuseLightingElement"},l6:{"^":"J;0m:x=,0n:y=","%":"SVGFEDisplacementMapElement"},l7:{"^":"J;0m:x=,0n:y=","%":"SVGFEFloodElement"},l8:{"^":"J;0m:x=,0n:y=","%":"SVGFEGaussianBlurElement"},l9:{"^":"J;0m:x=,0n:y=","%":"SVGFEImageElement"},la:{"^":"J;0m:x=,0n:y=","%":"SVGFEMergeElement"},lb:{"^":"J;0m:x=,0n:y=","%":"SVGFEMorphologyElement"},lc:{"^":"J;0m:x=,0n:y=","%":"SVGFEOffsetElement"},ld:{"^":"J;0m:x=,0n:y=","%":"SVGFEPointLightElement"},le:{"^":"J;0m:x=,0n:y=","%":"SVGFESpecularLightingElement"},lf:{"^":"J;0m:x=,0n:y=","%":"SVGFESpotLightElement"},lg:{"^":"J;0m:x=,0n:y=","%":"SVGFETileElement"},lh:{"^":"J;0m:x=,0n:y=","%":"SVGFETurbulenceElement"},lk:{"^":"J;0m:x=,0n:y=","%":"SVGFilterElement"},ll:{"^":"b3;0m:x=,0n:y=","%":"SVGForeignObjectElement"},fD:{"^":"b3;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b3:{"^":"J;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lq:{"^":"b3;0m:x=,0n:y=","%":"SVGImageElement"},bA:{"^":"j;",$isbA:1,"%":"SVGLength"},lt:{"^":"j6;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.k(a,b)},
$asp:function(){return[P.bA]},
$isi:1,
$asi:function(){return[P.bA]},
$isd:1,
$asd:function(){return[P.bA]},
$asr:function(){return[P.bA]},
"%":"SVGLengthList"},lw:{"^":"J;0m:x=,0n:y=","%":"SVGMaskElement"},bD:{"^":"j;",$isbD:1,"%":"SVGNumber"},lI:{"^":"jh;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.k(a,b)},
$asp:function(){return[P.bD]},
$isi:1,
$asi:function(){return[P.bD]},
$isd:1,
$asd:function(){return[P.bD]},
$asr:function(){return[P.bD]},
"%":"SVGNumberList"},lK:{"^":"J;0m:x=,0n:y=","%":"SVGPatternElement"},lM:{"^":"j;0m:x=,0n:y=","%":"SVGPoint"},lN:{"^":"j;0j:length=","%":"SVGPointList"},lO:{"^":"j;0m:x=,0n:y=","%":"SVGRect"},lP:{"^":"fD;0m:x=,0n:y=","%":"SVGRectElement"},lX:{"^":"jw;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.k(a,b)},
$asp:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$isd:1,
$asd:function(){return[P.l]},
$asr:function(){return[P.l]},
"%":"SVGStringList"},J:{"^":"V;",
gbU:function(a){return new P.fy(a,new W.iH(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lY:{"^":"b3;0m:x=,0n:y=","%":"SVGSVGElement"},hQ:{"^":"b3;","%":"SVGTextPathElement;SVGTextContentElement"},m_:{"^":"hQ;0m:x=,0n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bF:{"^":"j;",$isbF:1,"%":"SVGTransform"},m5:{"^":"jG;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.k(a,b)},
$asp:function(){return[P.bF]},
$isi:1,
$asi:function(){return[P.bF]},
$isd:1,
$asd:function(){return[P.bF]},
$asr:function(){return[P.bF]},
"%":"SVGTransformList"},m8:{"^":"b3;0m:x=,0n:y=","%":"SVGUseElement"},j5:{"^":"j+p;"},j6:{"^":"j5+r;"},jg:{"^":"j+p;"},jh:{"^":"jg+r;"},jv:{"^":"j+p;"},jw:{"^":"jv+r;"},jF:{"^":"j+p;"},jG:{"^":"jF+r;"}}],["","",,P,{"^":"",kF:{"^":"j;0j:length=","%":"AudioBuffer"},kG:{"^":"iG;",
k:function(a,b){return P.au(a.get(H.M(b)))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.au(y.value[1]))}},
gaa:function(a){var z=H.e([],[P.l])
this.K(a,new P.f8(z))
return z},
gj:function(a){return a.size},
$asa5:function(){return[P.l,null]},
$isZ:1,
$asZ:function(){return[P.l,null]},
"%":"AudioParamMap"},f8:{"^":"q:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},kH:{"^":"Y;0j:length=","%":"AudioTrackList"},f9:{"^":"Y;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lJ:{"^":"f9;0j:length=","%":"OfflineAudioContext"},iG:{"^":"j+a5;"}}],["","",,P,{"^":"",cu:{"^":"j;",
er:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.B(g)
if(!!z.$isbQ)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.k8(g))
return}if(!!z.$isdp)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.f6("Incorrect number or type of arguments"))},
eq:function(a,b,c,d,e,f,g){return this.er(a,b,c,d,e,f,g,null,null,null)},
$iscu:1,
"%":"WebGLRenderingContext"},hR:{"^":"j;",$ishR:1,"%":"WebGLTexture"},ib:{"^":"j;",$isib:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lV:{"^":"jt;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return P.au(a.item(b))},
B:function(a,b){return this.k(a,b)},
$asp:function(){return[[P.Z,,,]]},
$isi:1,
$asi:function(){return[[P.Z,,,]]},
$isd:1,
$asd:function(){return[[P.Z,,,]]},
$asr:function(){return[[P.Z,,,]]},
"%":"SQLResultSetRowList"},js:{"^":"j+p;"},jt:{"^":"js+r;"}}],["","",,O,{"^":"",aE:{"^":"a;0a,0b,0c,0d,$ti",
bt:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cl:function(a,b,c){var z={func:1,ret:-1,args:[P.z,[P.i,H.av(this,"aE",0)]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aK:function(a,b){return this.cl(a,null,b)},
dg:function(a){H.y(a,"$isi",[H.av(this,"aE",0)],"$asi")
return!0},
cw:function(a,b){var z
H.y(b,"$isi",[H.av(this,"aE",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gj:function(a){return this.a.length},
gP:function(a){var z=this.a
return new J.am(z,z.length,0,[H.u(z,0)])},
B:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.av(this,"aE",0)
H.w(b,z)
z=[z]
if(this.dg(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cw(x,H.e([b],z))}},
$isi:1,
p:{
da:function(a){var z=new O.aE([a])
z.bt(a)
return z}}},cq:{"^":"a;0a,0b",
gj:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
cz:function(a){var z=this.b
if(!(z==null))z.v(a)},
ad:function(){return this.cz(null)},
gab:function(a){var z=this.a
if(z.length>0)return C.a.gbg(z)
else return V.bC()},
c5:function(a){var z=this.a
if(a==null)C.a.h(z,V.bC())
else C.a.h(z,a)
this.ad()},
bm:function(){var z=this.a
if(z.length>0){z.pop()
this.ad()}}}}],["","",,E,{"^":"",ca:{"^":"a;"},aw:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0S:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbq:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gu()
y.toString
x=H.b(this.gc3(),{func:1,ret:-1,args:[D.n]})
C.a.T(y.a,x)}y=this.c
if(y!=null){y=y.gu()
y.toString
x=H.b(this.gc3(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}w=new D.G("shape",z,this.c,this,[F.dR])
w.b=!0
this.a0(w)}},
sax:function(a){var z,y,x,w
if(!J.N(this.r,a)){z=this.r
if(z!=null){y=z.gu()
y.toString
x=H.b(this.gc2(),{func:1,ret:-1,args:[D.n]})
C.a.T(y.a,x)}if(a!=null){y=a.gu()
y.toString
x=H.b(this.gc2(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}this.r=a
w=new D.G("mover",z,a,this,[U.a2])
w.b=!0
this.a0(w)}},
ap:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aq(0,b,this):null
if(!J.N(y,this.x)){x=this.x
this.x=y
w=new D.G("matrix",x,y,this,[V.bU])
w.b=!0
this.a0(w)}for(z=this.y.a,z=new J.am(z,z.length,0,[H.u(z,0)]);z.C();)z.d.ap(0,b)},
ao:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gab(z))
else C.a.h(z.a,y.l(0,z.gab(z)))
z.ad()
a.c6(this.f)
z=a.dy
x=(z&&C.a).gbg(z)
if(x!=null&&this.d!=null)x.ek(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.u(z,0)]);z.C();)z.d.ao(a)
a.c4()
a.dx.bm()},
gu:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
a0:function(a){var z=this.z
if(!(z==null))z.v(a)},
U:function(){return this.a0(null)},
e9:[function(a){H.k(a,"$isn")
this.e=null
this.a0(a)},function(){return this.e9(null)},"f5","$1","$0","gc3",0,2,1],
e8:[function(a){this.a0(H.k(a,"$isn"))},function(){return this.e8(null)},"f4","$1","$0","gc2",0,2,1],
e6:[function(a){this.a0(H.k(a,"$isn"))},function(){return this.e6(null)},"f2","$1","$0","gc1",0,2,1],
f1:[function(a,b){var z,y,x,w,v,u,t
H.y(b,"$isi",[E.aw],"$asi")
for(z=b.length,y=this.gc1(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gS()==null){t=new D.bx()
t.a=H.e([],w)
t.c=0
u.sS(t)}t=u.gS()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.U()},"$2","ge5",8,0,8],
f3:[function(a,b){var z,y,x,w,v,u,t
H.y(b,"$isi",[E.aw],"$asi")
for(z=b.length,y=this.gc1(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gS()==null){t=new D.bx()
t.a=H.e([],w)
t.c=0
u.sS(t)}t=u.gS()
t.toString
H.b(y,x)
C.a.T(t.a,y)}}this.U()},"$2","ge7",8,0,8],
$isdE:1},hr:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
cs:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ab(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cq()
y=[V.bU]
z.a=H.e([],y)
x=z.gu()
x.toString
w={func:1,ret:-1,args:[D.n]}
v=H.b(new E.ht(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cq()
z.a=H.e([],y)
v=z.gu()
v.toString
x=H.b(new E.hu(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cq()
z.a=H.e([],y)
y=z.gu()
y.toString
w=H.b(new E.hv(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.cz])
this.dy=z
C.a.h(z,null)
this.fr=new H.aG(0,0,[P.l,A.dQ])},
c6:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbg(z):a;(z&&C.a).h(z,y)},
c4:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
hs:function(a,b){var z=new E.hr(a,b)
z.cs(a,b)
return z}}},ht:{"^":"q:11;a",
$1:function(a){var z
H.k(a,"$isn")
z=this.a
z.z=null
z.ch=null}},hu:{"^":"q:11;a",
$1:function(a){var z
H.k(a,"$isn")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hv:{"^":"q:11;a",
$1:function(a){var z
H.k(a,"$isn")
z=this.a
z.ch=null
z.cx=null}},hU:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0S:x@,0y,0z,0Q,0ch",
gu:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
cB:[function(a){var z
H.k(a,"$isn")
z=this.x
if(!(z==null))z.v(a)
this.el()},function(){return this.cB(null)},"cA","$1","$0","gbu",0,2,1],
gdV:function(){var z,y,x
z=Date.now()
y=C.c.ak(P.dk(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ab(z,!1)
return x/y},
bL:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.o(z)
x=C.e.be(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.e.be(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
el:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.hW(this),{func:1,ret:-1,args:[P.L]})
C.t.cQ(z)
C.t.dm(z,W.eL(y,P.L))}},
ej:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.bL()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ab(w,!1)
x.y=P.dk(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sj(w.a,0)
w.ad()
w=x.db
C.a.sj(w.a,0)
w.ad()
w=x.dx
C.a.sj(w.a,0)
w.ad()
w=x.dy;(w&&C.a).sj(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ao(this.e)}}catch(v){z=H.aD(v)
y=H.aT(v)
P.cY("Error: "+H.f(z))
P.cY("Stack: "+H.f(y))
throw H.c(z)}},
p:{
hV:function(a,b,c,d,e){var z,y,x,w
z=J.B(a)
if(!!z.$iscd)return E.e_(a,!0,!0,!0,!1)
y=W.ce(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbU(a).h(0,y)
w=E.e_(y,!0,!0,!0,!1)
w.a=a
return w},
e_:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hU()
y=P.fR(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.l,null)
x=C.f.aJ(a,"webgl",y)
x=H.k(x==null?C.f.aJ(a,"experimental-webgl",y):x,"$iscu")
if(x==null)H.R(P.P("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hs(x,a)
w=new T.hS(x)
w.b=H.T(x.getParameter(3379))
w.c=H.T(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ii(a)
v=new X.fN()
v.c=new X.ag(!1,!1,!1)
v.d=P.fS(null,null,null,P.z)
w.b=v
v=new X.h2(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fV(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.i_(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.dV,P.a]])
w.z=v
u=document
t=W.ah
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Q(u,"contextmenu",H.b(w.gd3(),s),!1,t))
v=w.z
r=W.a1
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Q(a,"focus",H.b(w.gd6(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Q(a,"blur",H.b(w.gd0(),q),!1,r))
v=w.z
p=W.b6
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Q(u,"keyup",H.b(w.gd8(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Q(u,"keydown",H.b(w.gd7(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Q(a,"mousedown",H.b(w.gda(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Q(a,"mouseup",H.b(w.gdd(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Q(a,"mousemove",H.b(w.gdc(),s),!1,t))
p=w.z
o=W.bm;(p&&C.a).h(p,W.Q(a,H.M(W.ft(a)),H.b(w.gde(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Q(u,"mousemove",H.b(w.gd4(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Q(u,"mouseup",H.b(w.gd5(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Q(u,"pointerlockchange",H.b(w.gdf(),q),!1,r))
r=w.z
q=W.aJ
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Q(a,"touchstart",H.b(w.gdk(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Q(a,"touchend",H.b(w.gdi(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Q(a,"touchmove",H.b(w.gdj(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ab(Date.now(),!1)
z.ch=0
z.bL()
return z}}},hW:{"^":"q:20;a",
$1:function(a){var z
H.kr(a)
z=this.a
if(z.z){z.z=!1
z.ej()}}}}],["","",,Z,{"^":"",eo:{"^":"a;a,b",p:{
cH:function(a,b,c){var z
H.y(c,"$isd",[P.z],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.c2(c)),35044)
a.bindBuffer(b,null)
return new Z.eo(b,z)}}},d3:{"^":"ca;a,b,c,d,e",
b4:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aD(y)
x=P.P('Failed to bind buffer attribute "'+J.a0(this.a)+'": '+H.f(z))
throw H.c(x)}},
i:function(a){return"["+J.a0(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},ix:{"^":"a;a",$iskI:1},d4:{"^":"a;a,0b,c,d",
av:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b4:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b4(a)},
ez:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
ao:function(a){var z,y,x,w,v
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
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a0(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.A(y,", ")+"\nAttrs:   "+C.a.A(u,", ")},
$islZ:1},bR:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aH(this.c)+"'")+"]"}},bj:{"^":"a;a",
gbr:function(a){var z,y
z=this.a
y=(z&$.$get$aq().a)!==0?3:0
if((z&$.$get$ap().a)!==0)y+=3
if((z&$.$get$ao().a)!==0)y+=3
if((z&$.$get$ar().a)!==0)y+=2
if((z&$.$get$as().a)!==0)y+=3
if((z&$.$get$bk().a)!==0)y+=3
if((z&$.$get$bl().a)!==0)y+=4
if((z&$.$get$aM().a)!==0)++y
return(z&$.$get$aL().a)!==0?y+4:y},
dE:function(a){var z,y,x
z=$.$get$aq()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ap()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ao()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ar()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$as()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bk()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bl()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0)if(x===a)return z
return $.$get$en()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bj))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.l])
y=this.a
if((y&$.$get$aq().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ap().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$ao().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$ar().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$as().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bk().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bl().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.A(z,"|")},
p:{
a9:function(a){return new Z.bj(a)}}}}],["","",,D,{"^":"",d8:{"^":"a;"},bx:{"^":"a;0a,0b,0c",
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.n(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.fx(z))
return x!==0},
dR:function(){return this.v(null)},
em:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.v(y)}}},
ac:function(a){return this.em(a,!0,!1)},
p:{
D:function(){var z=new D.bx()
z.a=H.e([],[{func:1,ret:-1,args:[D.n]}])
z.c=0
return z}}},fx:{"^":"q:21;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.n]})
z=this.a.a
z.b
a.$1(z)}},n:{"^":"a;a,0b"},dq:{"^":"n;c,d,a,0b,$ti"},dr:{"^":"n;c,d,a,0b,$ti"},G:{"^":"n;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",d5:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)},
p:{"^":"kJ<"}},dv:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dv))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},dw:{"^":"n;c,a,0b"},fN:{"^":"a;0a,0b,0c,0d",
ef:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dw(a,this)
y.b=!0
return z.v(y)},
eb:function(a){var z,y
this.c=a.b
this.d.T(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dw(a,this)
y.b=!0
return z.v(y)}},dA:{"^":"bW;x,y,c,d,e,a,0b"},fV:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
a8:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ab(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gam()
s=new X.b8(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bl:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.a8(a,b))
return!0},
az:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ck()
if(typeof z!=="number")return z.cd()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.a8(a,b))
return!0},
ay:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.a8(a,b))
return!0},
eg:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gam()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cr(new V.I(v*u,t*s),y,x,new P.ab(w,!1),this)
w.b=!0
z.v(w)
return!0},
d9:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ab(Date.now(),!1)
y=this.f
x=new X.dA(c,a,this.a.gam(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.O(0,0)}},ag:{"^":"a;a,b,c",
q:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},b8:{"^":"bW;x,y,z,Q,ch,c,d,e,a,0b"},h2:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
aT:function(a,b,c){var z,y,x
z=new P.ab(Date.now(),!1)
y=this.a.gam()
x=new X.b8(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bl:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.aT(a,b,!0))
return!0},
az:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ck()
if(typeof z!=="number")return z.cd()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.aT(a,b,!0))
return!0},
ay:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.aT(a,b,!1))
return!0},
eh:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gam()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cr(new V.I(w*v,u*t),y,b,new P.ab(x,!1),this)
x.b=!0
z.v(x)
return!0},
gbY:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
gcc:function(){var z=this.c
if(z==null){z=D.D()
this.c=z}return z},
gc0:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z}},cr:{"^":"bW;x,c,d,e,a,0b"},bW:{"^":"n;"},e3:{"^":"bW;x,y,z,Q,ch,c,d,e,a,0b"},i_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
a8:function(a,b){var z,y,x,w
H.y(a,"$isd",[V.O],"$asd")
z=new P.ab(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gam()
w=new X.e3(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ee:function(a){var z
H.y(a,"$isd",[V.O],"$asd")
z=this.b
if(z==null)return!1
z.v(this.a8(a,!0))
return!0},
ec:function(a){var z
H.y(a,"$isd",[V.O],"$asd")
z=this.c
if(z==null)return!1
z.v(this.a8(a,!0))
return!0},
ed:function(a){var z
H.y(a,"$isd",[V.O],"$asd")
z=this.d
if(z==null)return!1
z.v(this.a8(a,!1))
return!0}},ii:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gam:function(){var z=this.a
return V.dP(0,0,(z&&C.f).gaI(z).c,C.f.gaI(z).d)},
bG:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dv(z,new X.ag(y,a.altKey,a.shiftKey))},
aj:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ag(y,a.altKey,a.shiftKey)},
b3:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ag(y,a.altKey,a.shiftKey)},
a9:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.H()
v=z.top
if(typeof x!=="number")return x.H()
return new V.O(y-w,x-v)},
as:function(a){return new V.I(a.movementX,a.movementY)},
b0:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.e.a1(u.pageX)
C.e.a1(u.pageY)
s=z.left
C.e.a1(u.pageX)
C.a.h(y,new V.O(t-s,C.e.a1(u.pageY)-z.top))}return y},
a7:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.d5(z,new X.ag(y,a.altKey,a.shiftKey))},
eN:[function(a){this.f=!0},"$1","gd6",4,0,4],
eH:[function(a){this.f=!1},"$1","gd0",4,0,4],
eK:[function(a){if(this.f)a.preventDefault()},"$1","gd3",4,0,4],
eP:[function(a){var z
H.k(a,"$isb6")
if(!this.f)return
z=this.bG(a)
if(this.b.ef(z))a.preventDefault()},"$1","gd8",4,0,19],
eO:[function(a){var z
H.k(a,"$isb6")
if(!this.f)return
z=this.bG(a)
if(this.b.eb(z))a.preventDefault()},"$1","gd7",4,0,19],
eQ:[function(a){var z,y,x,w
H.k(a,"$isah")
z=this.a
z.focus()
this.f=!0
this.aj(a)
if(this.x){y=this.a7(a)
x=this.as(a)
if(this.d.bl(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a7(a)
w=this.a9(a)
if(this.c.bl(y,w))a.preventDefault()},"$1","gda",4,0,5],
eS:[function(a){var z,y,x
H.k(a,"$isah")
this.aj(a)
z=this.a7(a)
if(this.x){y=this.as(a)
if(this.d.az(z,y))a.preventDefault()
return}if(this.r)return
x=this.a9(a)
if(this.c.az(z,x))a.preventDefault()},"$1","gdd",4,0,5],
eM:[function(a){var z,y,x,w
H.k(a,"$isah")
z=this.a
if(!(z&&C.f).gaI(z).bW(0,new P.bE(a.clientX,a.clientY,[P.L]))){this.aj(a)
y=this.a7(a)
if(this.x){x=this.as(a)
if(this.d.az(y,x))a.preventDefault()
return}if(this.r)return
w=this.a9(a)
if(this.c.az(y,w))a.preventDefault()}},"$1","gd5",4,0,5],
eR:[function(a){var z,y,x
H.k(a,"$isah")
this.aj(a)
z=this.a7(a)
if(this.x){y=this.as(a)
if(this.d.ay(z,y))a.preventDefault()
return}if(this.r)return
x=this.a9(a)
if(this.c.ay(z,x))a.preventDefault()},"$1","gdc",4,0,5],
eL:[function(a){var z,y,x,w
H.k(a,"$isah")
z=this.a
if(!(z&&C.f).gaI(z).bW(0,new P.bE(a.clientX,a.clientY,[P.L]))){this.aj(a)
y=this.a7(a)
if(this.x){x=this.as(a)
if(this.d.ay(y,x))a.preventDefault()
return}if(this.r)return
w=this.a9(a)
if(this.c.ay(y,w))a.preventDefault()}},"$1","gd4",4,0,5],
eT:[function(a){var z,y
H.k(a,"$isbm")
this.aj(a)
z=new V.I((a&&C.r).gdO(a),C.r.gdP(a)).w(0,180)
if(this.x){if(this.d.eg(z))a.preventDefault()
return}if(this.r)return
y=this.a9(a)
if(this.c.eh(z,y))a.preventDefault()},"$1","gde",4,0,24],
eU:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a7(this.y)
v=this.a9(this.y)
this.d.d9(w,v,x)}},"$1","gdf",4,0,4],
eY:[function(a){var z
H.k(a,"$isaJ")
this.a.focus()
this.f=!0
this.b3(a)
z=this.b0(a)
if(this.e.ee(z))a.preventDefault()},"$1","gdk",4,0,10],
eW:[function(a){var z
H.k(a,"$isaJ")
this.b3(a)
z=this.b0(a)
if(this.e.ec(z))a.preventDefault()},"$1","gdi",4,0,10],
eX:[function(a){var z
H.k(a,"$isaJ")
this.b3(a)
z=this.b0(a)
if(this.e.ed(z))a.preventDefault()},"$1","gdj",4,0,10]}}],["","",,V,{"^":"",
kL:[function(a,b){if(typeof b!=="number")return b.H()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","h_",8,0,22],
kA:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.cj(a-b,z)
return(a<0?a+z:a)+b},
H:function(a,b,c){if(a==null)return C.b.Y("null",c)
return C.b.Y(C.e.cb($.m.$2(a,0)?0:a,b),c+b+1)},
aS:function(a,b,c){var z,y,x,w,v,u
H.y(a,"$isd",[P.t],"$asd")
z=H.e([],[P.l])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.H(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.R(z,u,C.b.Y(z[u],x))}return z},
cX:function(a,b){return C.e.ev(Math.pow(b,C.y.be(Math.log(H.k5(a))/Math.log(b))))},
aX:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aX))return!1
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
dD:{"^":"a;a,b,c,d,e,f,r,x,y",
aA:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dD))return!1
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
y=V.aS(H.e([this.a,this.d,this.r],z),3,0)
x=V.aS(H.e([this.b,this.e,this.x],z),3,0)
w=V.aS(H.e([this.c,this.f,this.y],z),3,0)
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
bU:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aA:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
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
return V.an(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bU))return!1
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
i:function(a){return this.F()},
bZ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.aS(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.aS(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.aS(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.aS(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
t:function(a){return this.bZ(a,3,0)},
F:function(){return this.bZ("",3,0)},
p:{
an:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bC:function(){return V.an(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
O:{"^":"a;m:a>,n:b>",
H:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
bV:{"^":"a;m:a>,n:b>,c",
H:function(a,b){return new V.bV(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bV))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}},
dK:{"^":"a;m:a>,n:b>,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dK))return!1
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
dO:{"^":"a;m:a>,n:b>,c,d",
gW:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dO))return!1
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
p:{
dP:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dO(a,b,c,d)}}},
I:{"^":"a;a,b",
e_:[function(a){return Math.sqrt(this.E(this))},"$0","gj",1,0,15],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.I(z*b,y*b)},
w:function(a,b){var z,y
if($.m.$2(b,0))return new V.I(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.I(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
K:{"^":"a;a,b,c",
e_:[function(a){return Math.sqrt(this.E(this))},"$0","gj",1,0,15],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bh:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.K(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
au:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.K(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
I:function(a){return new V.K(-this.a,-this.b,-this.c)},
w:function(a,b){if($.m.$2(b,0))return new V.K(0,0,0)
return new V.K(this.a/b,this.b/b,this.c/b)},
c_:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fh:{"^":"d8;0a,0b,0c,0d,0e,0f,0r,0x,0y",
aO:function(a){var z=V.kA(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.v(a)},
sbp:function(a,b){},
sbi:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.aO(z)}z=new D.G("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.J(z)}},
sbk:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.aO(z)}z=new D.G("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.J(z)}},
sV:function(a,b){var z,y
b=this.aO(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.G("location",y,b,this,[P.t])
z.b=!0
this.J(z)}},
sbj:function(a){var z,y,x
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
this.J(z)}},
sL:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.G("velocity",x,a,this,[P.t])
z.b=!0
this.J(z)}},
sbc:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.G("dampening",y,a,this,[P.t])
z.b=!0
this.J(z)}},
ap:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sV(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sL(y)}},
p:{
cg:function(){var z=new U.fh()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},db:{"^":"a2;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
aq:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.db))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")}},dn:{"^":"aE;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
J:[function(a){var z
H.k(a,"$isn")
z=this.e
if(!(z==null))z.v(a)},function(){return this.J(null)},"a_","$1","$0","gai",0,2,1],
eG:[function(a,b){var z,y,x,w,v,u,t
z=U.a2
H.y(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.dq(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gd_",8,0,14],
eV:[function(a,b){var z,y,x,w,v,u,t
z=U.a2
H.y(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.b(x,w)
C.a.T(t.a,x)}}z=new D.dr(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gdh",8,0,14],
aq:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.Z()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.am(z,z.length,0,[H.u(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.aq(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.bC():x
z=this.e
if(!(z==null))z.ac(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dn))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.N(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.a2]},
$asaE:function(){return[U.a2]},
$isa2:1},a2:{"^":"d8;"},ij:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
J:[function(a){var z
H.k(a,"$isn")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.J(null)},"a_","$1","$0","gai",0,2,1],
at:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gbY()
z.toString
y={func:1,ret:-1,args:[D.n]}
x=H.b(this.gaW(),y)
C.a.h(z.a,x)
x=this.a.c.gc0()
x.toString
z=H.b(this.gaX(),y)
C.a.h(x.a,z)
z=this.a.c.gcc()
z.toString
y=H.b(this.gaY(),y)
C.a.h(z.a,y)
return!0},
cW:[function(a){H.k(a,"$isn")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gaW",4,0,0],
cX:[function(a){var z,y,x,w,v,u,t
a=H.X(H.k(a,"$isn"),"$isb8")
if(!this.y)return
if(this.x){z=a.d.H(0,a.y)
z=new V.I(z.a,z.b)
z=z.E(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.H(0,a.y)
z=new V.I(y.a,y.b).l(0,2).w(0,z.gW())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sL(z*10*x)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=new V.I(x.a,x.b).l(0,2).w(0,z.gW())
x=this.b
v=w.a
if(typeof v!=="number")return v.I()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sV(0,-v*u+t)
this.b.sL(0)
y=y.H(0,a.z)
this.Q=new V.I(y.a,y.b).l(0,2).w(0,z.gW())}this.a_()},"$1","gaX",4,0,0],
cY:[function(a){var z,y,x
H.k(a,"$isn")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.E(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sL(y*10*x)
this.a_()}},"$1","gaY",4,0,0],
aq:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.Z()
if(z<y){this.ch=y
x=b.y
this.b.ap(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.an(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa2:1},ik:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
J:[function(a){var z
H.k(a,"$isn")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.J(null)},"a_","$1","$0","gai",0,2,1],
at:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gbY()
z.toString
y={func:1,ret:-1,args:[D.n]}
x=H.b(this.gaW(),y)
C.a.h(z.a,x)
x=this.a.c.gc0()
x.toString
z=H.b(this.gaX(),y)
C.a.h(x.a,z)
z=this.a.c.gcc()
z.toString
x=H.b(this.gaY(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.D()
x.f=z}x=H.b(this.gcT(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gcU(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.D()
x.b=z}x=H.b(this.gdA(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gdz(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.D()
x.c=z}y=H.b(this.gdw(),y)
C.a.h(z.a,y)
return!0},
a3:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.I()
z=-z}if(this.r){if(typeof y!=="number")return y.I()
y=-y}return new V.I(z,y)},
cW:[function(a){a=H.X(H.k(a,"$isn"),"$isb8")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gaW",4,0,0],
cX:[function(a){var z,y,x,w,v,u,t
a=H.X(H.k(a,"$isn"),"$isb8")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.I(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.a3(new V.I(y.a,y.b).l(0,2).w(0,z.gW()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.I()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.I()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.a3(new V.I(x.a,x.b).l(0,2).w(0,z.gW()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sV(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sV(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.H(0,a.z)
this.dx=this.a3(new V.I(y.a,y.b).l(0,2).w(0,z.gW()))}this.a_()},"$1","gaX",4,0,0],
cY:[function(a){var z,y,x
H.k(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.I()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.I()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sL(-y*10*z)
this.a_()}},"$1","gaY",4,0,0],
eD:[function(a){if(H.X(H.k(a,"$isn"),"$isdA").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gcT",4,0,0],
eE:[function(a){var z,y,x,w,v,u,t
a=H.X(H.k(a,"$isn"),"$isb8")
if(!J.N(this.d,a.x.b))return
z=a.c
y=a.d
x=y.H(0,a.y)
w=this.a3(new V.I(x.a,x.b).l(0,2).w(0,z.gW()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sV(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sV(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.H(0,a.z)
this.dx=this.a3(new V.I(y.a,y.b).l(0,2).w(0,z.gW()))
this.a_()},"$1","gcU",4,0,0],
f0:[function(a){H.k(a,"$isn")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gdA",4,0,0],
f_:[function(a){var z,y,x,w,v,u,t
a=H.X(H.k(a,"$isn"),"$ise3")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.I(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.a3(new V.I(y.a,y.b).l(0,2).w(0,z.gW()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.I()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.I()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.a3(new V.I(x.a,x.b).l(0,2).w(0,z.gW()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sV(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sV(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.H(0,a.z)
this.dx=this.a3(new V.I(y.a,y.b).l(0,2).w(0,z.gW()))}this.a_()},"$1","gdz",4,0,0],
eZ:[function(a){var z,y,x
H.k(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.I()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.I()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sL(-y*10*z)
this.a_()}},"$1","gdw",4,0,0],
aq:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.Z()
if(z<y){this.dy=y
x=b.y
this.c.ap(0,x)
this.b.ap(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.an(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.an(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa2:1},il:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
J:function(a){var z=this.r
if(!(z==null))z.v(a)},
at:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.D()
z.e=y
z=y}else z=y
y=H.b(this.gcZ(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.D()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
eF:[function(a){var z,y,x,w
H.k(a,"$isn")
if(!J.N(this.b,this.a.b.c))return
H.X(a,"$iscr")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.G("zoom",z,w,this,[P.t])
z.b=!0
this.J(z)}},"$1","gcZ",4,0,0],
aq:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.an(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa2:1}}],["","",,M,{"^":"",fv:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ae:[function(a){var z
H.k(a,"$isn")
z=this.x
if(!(z==null))z.v(a)},function(){return this.ae(null)},"eA","$1","$0","ga2",0,2,1],
eI:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aw
H.y(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga2(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gS()==null){s=new D.bx()
s.a=H.e([],v)
s.c=0
t.sS(s)}s=t.gS()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.dq(a,b,this,[z])
z.b=!0
this.ae(z)},"$2","gd1",8,0,8],
eJ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aw
H.y(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga2(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gS()==null){s=new D.bx()
s.a=H.e([],v)
s.c=0
t.sS(s)}s=t.gS()
s.toString
H.b(x,w)
C.a.T(s.a,x)}}z=new D.dr(a,b,this,[z])
z.b=!0
this.ae(z)},"$2","gd2",8,0,8],
sc8:function(a,b){var z,y,x
if(b==null)b=X.dm(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gu()
z.toString
y=H.b(this.ga2(),{func:1,ret:-1,args:[D.n]})
C.a.T(z.a,y)}x=this.b
this.b=b
z=b.gu()
z.toString
y=H.b(this.ga2(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)
z=new D.G("target",x,this.b,this,[X.dX])
z.b=!0
this.ae(z)}},
sc9:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.b(this.ga2(),{func:1,ret:-1,args:[D.n]})
C.a.T(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gu()
z.toString
y=H.b(this.ga2(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G("technique",x,this.c,this,[O.cz])
z.b=!0
this.ae(z)}},
gu:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
ao:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.c6(this.c)
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
u=C.c.a1(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.c.a1(v.b*w)
s=C.c.a1(v.c*x)
a.c=s
v=C.c.a1(v.d*w)
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
s.c5(V.an(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dJ
if(y==null){y=new V.K(0,0,-1)
m=y.w(0,Math.sqrt(y.E(y)))
y=new V.K(0,1,0).au(m)
l=y.w(0,Math.sqrt(y.E(y)))
k=m.au(l)
j=new V.K(0,0,0)
y=V.an(l.a,k.a,m.a,l.I(0).E(j),l.b,k.b,m.b,k.I(0).E(j),l.c,k.c,m.c,m.I(0).E(j),0,0,0,1)
$.dJ=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.l(0,i)}a.db.c5(i)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.u(z,0)]);z.C();)z.d.ap(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.u(z,0)]);z.C();)z.d.ao(a)
this.a.toString
a.cy.bm()
a.db.bm()
this.b.toString
a.c4()},
$islR:1}}],["","",,A,{"^":"",d0:{"^":"a;a,b,c"},f7:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
dS:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dQ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},h8:{"^":"dQ;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r"},h9:{"^":"a;a,b,c,d,e,f",
i:function(a){return this.e},
p:{
dF:function(a){var z,y,x,w,v,u,t
z=a!==C.h
y=a===C.j
x=a===C.i
w="Normal_"+C.c.i(a.a)
v=$.$get$aq()
u=$.$get$ap()
u=v.a|u.a
t=new Z.bj(u)
if(z)t=new Z.bj(u|$.$get$ao().a)
if(y)t=new Z.bj(t.a|$.$get$ar().a)
return new A.h9(a,z,y,x,w,x?new Z.bj(t.a|$.$get$as().a):t)}}},dQ:{"^":"ca;",
cu:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
bH:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eP(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.c(P.P("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
dr:function(){var z,y,x,w,v,u
z=H.e([],[A.d0])
y=this.a
x=H.T(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.d0(y,v.name,u))}this.f=new A.f7(z)},
dt:function(){var z,y,x,w,v,u
z=H.e([],[A.a_])
y=this.a
x=H.T(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.dN(v.type,v.size,v.name,u))}this.r=new A.ia(z)},
ag:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.cD(z,y,b,c)
else return A.cE(z,y,b,a,c)},
cN:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.eh(z,y,b,c)
else return A.cE(z,y,b,a,c)},
cO:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ei(z,y,b,c)
else return A.cE(z,y,b,a,c)},
aH:function(a,b){return new P.eq(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
dN:function(a,b,c,d){switch(a){case 5120:return this.ag(b,c,d)
case 5121:return this.ag(b,c,d)
case 5122:return this.ag(b,c,d)
case 5123:return this.ag(b,c,d)
case 5124:return this.ag(b,c,d)
case 5125:return this.ag(b,c,d)
case 5126:return new A.i2(this.a,this.e,c,d)
case 35664:return new A.i4(this.a,this.e,c,d)
case 35665:return new A.i6(this.a,this.e,c,d)
case 35666:return new A.i8(this.a,this.e,c,d)
case 35667:return new A.i5(this.a,this.e,c,d)
case 35668:return new A.i7(this.a,this.e,c,d)
case 35669:return new A.i9(this.a,this.e,c,d)
case 35674:return new A.ic(this.a,this.e,c,d)
case 35675:return new A.eg(this.a,this.e,c,d)
case 35676:return new A.c_(this.a,this.e,c,d)
case 35678:return this.cN(b,c,d)
case 35680:return this.cO(b,c,d)
case 35670:throw H.c(this.aH("BOOL",c))
case 35671:throw H.c(this.aH("BOOL_VEC2",c))
case 35672:throw H.c(this.aH("BOOL_VEC3",c))
case 35673:throw H.c(this.aH("BOOL_VEC4",c))
default:throw H.c(P.P("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},bM:{"^":"a;a,b",
i:function(a){return this.b}},a_:{"^":"a;"},ia:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
a5:function(a,b){var z=this.k(0,b)
if(z==null)throw H.c(P.P("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.F()},
dU:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.dU("\n")}},cD:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},i5:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},i7:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},i9:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},i3:{"^":"a_;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.f(this.c)},
p:{
cE:function(a,b,c,d,e){var z=new A.i3(a,b,c,e)
z.f=d
z.e=P.fT(d,0,!1,P.z)
return z}}},i2:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},i4:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},i6:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},i8:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},ic:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},eg:{"^":"a_;a,b,c,d",
i:function(a){return"UniformMat3: "+H.f(this.c)}},c_:{"^":"a_;a,b,c,d",
aL:function(a){var z=new Float32Array(H.c2(H.y(a,"$isd",[P.t],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},eh:{"^":"a_;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},ei:{"^":"a_;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
c1:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bp:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.K(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.K(t+h,s+f,r+g)
z.b=q
p=new V.K(t-h,s-f,r-g)
z.c=p
o=new V.K(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.c1(y)
k=F.c1(z.b)
j=F.kx(d,e,new F.jU(z,F.c1(z.c),F.c1(z.d),k,l,c),b)
if(j!=null)a.e3(j)},
kx:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aK,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.dS()
y=H.e([],[F.aK])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cG(null,null,new V.aX(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bb(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cG(null,null,new V.aX(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bb(d))}}z.d.dC(a+1,b+1,y)
return z},
jU:{"^":"q:29;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bh(z.b,b).bh(z.d.bh(z.c,b),c)
z=new V.bV(y.a,y.b,y.c)
if(!J.N(a.f,z)){a.f=z
z=a.a
if(z!=null)z.U()}a.ses(y.w(0,Math.sqrt(y.E(y))))
z=1-b
x=1-c
x=new V.dK(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.N(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.U()}}},
ac:{"^":"a;0a,0b,0c,0d,0e",
gbd:function(){return this.a==null||this.b==null||this.c==null},
cI:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.K(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.c_())return
return v.w(0,Math.sqrt(v.E(v)))},
cL:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.H(0,y)
z=new V.K(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.E(z)))
z=w.H(0,y)
z=new V.K(z.a,z.b,z.c)
z=v.au(z.w(0,Math.sqrt(z.E(z))))
return z.w(0,Math.sqrt(z.E(z)))},
b9:function(){if(this.d!=null)return!0
var z=this.cI()
if(z==null){z=this.cL()
if(z==null)return!1}this.d=z
this.a.a.U()
return!0},
cH:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.K(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.c_())return
return v.w(0,Math.sqrt(v.E(v)))},
cK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.H(0,u)
z=new V.K(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.I(0)}else{l=(z-q.b)/n
z=r.H(0,u)
z=new V.bV(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).H(0,x)
z=new V.K(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.I(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.E(z)))
z=k.au(m)
z=z.w(0,Math.sqrt(z.E(z))).au(k)
m=z.w(0,Math.sqrt(z.E(z)))}return m},
b7:function(){if(this.e!=null)return!0
var z=this.cH()
if(z==null){z=this.cK()
if(z==null)return!1}this.e=z
this.a.a.U()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
t:function(a){var z,y
if(this.gbd())return a+"disposed"
z=a+C.b.Y(J.a0(this.a.e),0)+", "+C.b.Y(J.a0(this.b.e),0)+", "+C.b.Y(J.a0(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
F:function(){return this.t("")},
p:{
by:function(a,b,c){var z,y,x
z=new F.ac()
y=a.a
if(y==null)H.R(P.P("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.R(P.P("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.U()
return z}}},
cp:{"^":"a;0a,0b",
gbd:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
t:function(a){if(this.gbd())return a+"disposed"
return a+C.b.Y(J.a0(this.a.e),0)+", "+C.b.Y(J.a0(this.b.e),0)},
F:function(){return this.t("")}},
ct:{"^":"a;0a",
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
t:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.Y(J.a0(z.e),0)},
F:function(){return this.t("")}},
dR:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
e3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.O()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.dM())}this.a.O()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.O()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.ct()
if(r.a==null)H.R(P.P("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.O()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.O()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cp()
s=p.a
if(s==null)H.R(P.P("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.R(P.P("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.O()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.O()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.O()
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
F.by(p,o,l)}z=this.e
if(!(z==null))z.ac(0)},
al:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.al()||!1
if(!this.a.al())y=!1
z=this.e
if(!(z==null))z.ac(0)
return y},
dG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$aq().a)!==0?1:0
if((y&$.$get$ap().a)!==0)++x
if((y&$.$get$ao().a)!==0)++x
if((y&$.$get$ar().a)!==0)++x
if((y&$.$get$as().a)!==0)++x
if((y&$.$get$bk().a)!==0)++x
if((y&$.$get$bl().a)!==0)++x
if((y&$.$get$aM().a)!==0)++x
if((y&$.$get$aL().a)!==0)++x
w=b.gbr(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.t
t=H.e(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.e(y,[Z.d3])
for(r=0,q=0;q<x;++q){p=b.dE(q)
o=p.gbr(p)
C.a.R(s,q,new Z.d3(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].e0(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.R(t,l,m[k]);++l}}r+=o}H.y(t,"$isd",[u],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.c2(t)),35044)
y.bindBuffer(34962,null)
i=new Z.d4(new Z.eo(34962,j),s,b)
i.b=H.e([],[Z.bR])
if(this.b.b.length!==0){u=P.z
h=H.e([],[u])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.O()
C.a.h(h,g.e)}f=Z.cH(y,34963,H.y(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.bR(0,h.length,f))}if(this.c.b.length!==0){u=P.z
h=H.e([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.O()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.O()
C.a.h(h,g.e)}f=Z.cH(y,34963,H.y(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.bR(1,h.length,f))}if(this.d.b.length!==0){u=P.z
h=H.e([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.O()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.O()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.O()
C.a.h(h,g.e)}f=Z.cH(y,34963,H.y(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.bR(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.l])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.t("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.t("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.t("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.t("   "))}return C.a.A(z,"\n")},
a0:function(a){var z=this.e
if(!(z==null))z.v(a)},
U:function(){return this.a0(null)},
p:{
dS:function(){var z,y
z=new F.dR()
y=new F.ip(z)
y.b=!1
y.c=H.e([],[F.aK])
z.a=y
y=new F.hE(z)
y.b=H.e([],[F.ct])
z.b=y
y=new F.hD(z)
y.b=H.e([],[F.cp])
z.c=y
y=new F.hC(z)
y.b=H.e([],[F.ac])
z.d=y
z.e=null
return z}}},
hC:{"^":"a;a,0b",
dC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.y(c,"$isd",[F.aK],"$asd")
z=H.e([],[F.ac])
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
gj:function(a){return this.b.length},
al:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].b9())x=!1
return x},
b8:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].b7())x=!1
return x},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
z=H.e([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.A(z,"\n")},
F:function(){return this.t("")}},
hD:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
z=H.e([],[P.l])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].t(a+(""+x+". ")))}return C.a.A(z,"\n")},
F:function(){return this.t("")}},
hE:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
z=H.e([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.A(z,"\n")},
F:function(){return this.t("")}},
aK:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bb:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cG(this.cx,x,u,z,y,w,v,a,t)},
dM:function(){return this.bb(null)},
ses:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.U()}},
e0:function(a){var z,y
z=J.B(a)
if(z.q(a,$.$get$aq())){z=this.f
y=[P.t]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$ap())){z=this.r
y=[P.t]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$ao())){z=this.x
y=[P.t]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$ar())){z=this.y
y=[P.t]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.q(a,$.$get$as())){z=this.z
y=[P.t]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bk())){z=this.Q
y=[P.t]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bl())){z=this.Q
y=[P.t]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$aM()))return H.e([this.ch],[P.t])
else if(z.q(a,$.$get$aL())){z=this.cx
y=[P.t]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.t])},
b9:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.K(0,0,0)
this.d.K(0,new F.iw(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ac(0)}return!0},
b7:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.K(0,0,0)
this.d.K(0,new F.iv(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ac(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
t:function(a){var z,y,x
z=H.e([],[P.l])
C.a.h(z,C.b.Y(J.a0(this.e),0))
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
x=C.a.A(z,", ")
return a+"{"+x+"}"},
F:function(){return this.t("")},
p:{
cG:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aK()
y=new F.iu(z)
y.b=H.e([],[F.ct])
z.b=y
y=new F.it(z)
x=[F.cp]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.iq(z)
x=[F.ac]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$el()
z.e=0
y=$.$get$aq()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ap().a)!==0?e:null
z.x=(x&$.$get$ao().a)!==0?b:null
z.y=(x&$.$get$ar().a)!==0?f:null
z.z=(x&$.$get$as().a)!==0?g:null
z.Q=(x&$.$get$em().a)!==0?c:null
z.ch=(x&$.$get$aM().a)!==0?i:0
z.cx=(x&$.$get$aL().a)!==0?a:null
return z}}},
iw:{"^":"q:6;a",
$1:function(a){var z,y
H.k(a,"$isac")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iv:{"^":"q:6;a",
$1:function(a){var z,y
H.k(a,"$isac")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
ip:{"^":"a;a,0b,0c",
O:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.c(P.P("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.U()
return!0},
gj:function(a){return this.c.length},
al:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].b9()
return!0},
b8:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].b7()
return!0},
dH:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
this.O()
z=H.e([],[P.l])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.A(z,"\n")},
F:function(){return this.t("")}},
iq:{"^":"a;a,0b,0c,0d",
gj:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ac]})
C.a.K(this.b,b)
C.a.K(this.c,new F.ir(this,b))
C.a.K(this.d,new F.is(this,b))},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
z=H.e([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.A(z,"\n")},
F:function(){return this.t("")}},
ir:{"^":"q:6;a,b",
$1:function(a){H.k(a,"$isac")
if(!J.N(a.a,this.a))this.b.$1(a)}},
is:{"^":"q:6;a,b",
$1:function(a){var z
H.k(a,"$isac")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
it:{"^":"a;a,0b,0c",
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
z=H.e([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.A(z,"\n")},
F:function(){return this.t("")}},
iu:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.F()},
t:function(a){var z,y,x,w
z=H.e([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.A(z,"\n")},
F:function(){return this.t("")}}}],["","",,O,{"^":"",h7:{"^":"cz;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
bw:[function(a){var z
H.k(a,"$isn")
z=this.r
if(!(z==null))z.v(a)},function(){return this.bw(null)},"cC","$1","$0","gbv",0,2,1],
bM:function(a){},
bN:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.b(this.gbv(),{func:1,ret:-1,args:[D.n]})
C.a.T(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.e
y=H.b(this.gbv(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G("bumpyTextureCube",x,this.f,this,[T.dZ])
z.b=!0
this.bw(z)}},
bA:function(a,b){H.y(a,"$isd",[T.cA],"$asd")
if(b!=null)if(!C.a.dI(a,b)){b.a=a.length
C.a.h(a,b)}},
ek:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
if(z==null){y=A.dF(this.d)
z=y.e
x=a.fr.k(0,z)
if(x==null){w=a.a
x=new A.h8(w,z)
x.cu(w,z)
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
switch(r){case C.h:break
case C.k:break
case C.j:s+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.i:s+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}s+="\nvec3 normal()\n{\n"
if(r===C.h||r===C.k)s+="   return normalize(normalVec);\n"
else{s+="   if(nullBumpTxt > 0) return normalVec;\n"
s=(r===C.j?s+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":s+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}s+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
x.c=x.bH(u.charCodeAt(0)==0?u:u,35633)
x.d=x.bH(s.charCodeAt(0)==0?s:s,35632)
s=w.createProgram()
x.e=s
w.attachShader(s,x.c)
w.attachShader(x.e,x.d)
w.linkProgram(x.e)
if(!H.eP(w.getProgramParameter(x.e,35714))){q=w.getProgramInfoLog(x.e)
w.deleteProgram(x.e)
H.R(P.P("Failed to link shader: "+H.f(q)))}x.dr()
x.dt()
x.y=x.f.k(0,"posAttr")
x.Q=x.f.k(0,"normAttr")
x.z=x.f.k(0,"binmAttr")
x.ch=x.f.k(0,"txt2DAttr")
x.cx=x.f.k(0,"txtCubeAttr")
x.cy=H.X(x.r.a5(0,"viewObjMat"),"$isc_")
x.db=H.X(x.r.a5(0,"projViewObjMat"),"$isc_")
if(v)x.dx=H.X(x.r.a5(0,"txt2DMat"),"$iseg")
if(t)x.dy=H.X(x.r.a5(0,"txtCubeMat"),"$isc_")
switch(r){case C.h:break
case C.k:break
case C.j:x.fr=H.X(x.r.a5(0,"bumpTxt"),"$iseh")
x.fy=H.X(x.r.a5(0,"nullBumpTxt"),"$iscD")
break
case C.i:x.fx=H.X(x.r.a5(0,"bumpTxt"),"$isei")
x.fy=H.X(x.r.a5(0,"nullBumpTxt"),"$iscD")
break}if(z.length===0)H.R(P.P("May not cache a shader with no name."))
if(a.fr.bV(0,z))H.R(P.P('Shader cache already contains a shader by the name "'+z+'".'))
a.fr.R(0,z,x)}this.a=x
b.e=null
z=x}y=z.x
p=y.f
z=b.e
if(!(z instanceof Z.d4)){b.e=null
z=null}if(z==null||!z.d.q(0,p)){b.d.al()
z=y.b
if(z){v=b.d
u=v.e
if(!(u==null))++u.c
v.d.b8()
v.a.b8()
v=v.e
if(!(v==null))v.ac(0)}v=y.d
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.a.dH()
u=u.e
if(!(u==null))u.ac(0)}o=b.d.dG(new Z.ix(a.a),p)
o.av($.$get$aq()).e=this.a.y.c
o.av($.$get$ap()).e=this.a.Q.c
if(z)o.av($.$get$ao()).e=this.a.z.c
if(y.c)o.av($.$get$ar()).e=this.a.ch.c
if(v)o.av($.$get$as()).e=this.a.cx.c
b.e=o}n=H.e([],[T.cA])
z=this.a
a.a.useProgram(z.e)
z.f.dS()
z=this.a
v=a.cx
if(v==null){v=a.db
v=v.gab(v)
u=a.dx
u=v.l(0,u.gab(u))
a.cx=u
v=u}z=z.cy
z.toString
z.aL(v.aA(0,!0))
v=this.a
z=a.ch
if(z==null){z=a.z
if(z==null){z=a.cy
z=z.gab(z)
u=a.db
u=z.l(0,u.gab(u))
a.z=u
z=u}u=a.dx
u=z.l(0,u.gab(u))
a.ch=u
z=u}v=v.db
v.toString
v.aL(z.aA(0,!0))
if(y.c){z=this.a
v=this.b
z=z.dx
z.toString
m=new Float32Array(H.c2(H.y(v.aA(0,!0),"$isd",[P.t],"$asd")))
z.a.uniformMatrix3fv(z.d,!1,m)}if(y.d){z=this.a
v=this.c
z=z.dy
z.toString
z.aL(v.aA(0,!0))}switch(y.a){case C.h:break
case C.k:break
case C.j:this.bA(n,this.e)
z=this.a.fy
z.a.uniform1i(z.d,1)
break
case C.i:this.bA(n,this.f)
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
z.b4(a)
z.ao(a)
z.ez(a)
for(l=0;l<n.length;++l){z=n[l]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.dQ()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return A.dF(this.d).e}},cz:{"^":"a;"}}],["","",,T,{"^":"",cA:{"^":"ca;"},dZ:{"^":"cA;0b,0c,0d,0e,a"},hS:{"^":"a;a,0b,0c,0d,0e",
ah:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a1
W.Q(z,"load",H.b(new T.hT(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dn:function(a,b,c){var z,y,x,w
b=V.cX(b,2)
z=V.cX(a.width,2)
y=V.cX(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.ce(null,null)
x.width=z
x.height=y
w=H.k(C.f.cg(x,"2d"),"$isd7")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.k9(w.getImageData(0,0,x.width,x.height))}}},hT:{"^":"q:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dn(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.J.eq(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.dR();++z.e}}}],["","",,V,{"^":"",f5:{"^":"a;",
aw:function(a,b){return!0},
i:function(a){return"all"},
$isbB:1},bB:{"^":"a;"},dC:{"^":"a;",
aw:["cq",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aw(0,b))return!0
return!1}],
i:["bs",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbB:1},b9:{"^":"dC;0a",
aw:function(a,b){return!this.cq(0,b)},
i:function(a){return"!["+this.bs(0)+"]"}},hA:{"^":"a;0a",
ct:function(a){var z,y
if(a.a.length<=0)throw H.c(P.P("May not create a SetMatcher with zero characters."))
z=new H.aG(0,0,[P.z,P.ae])
for(y=new H.dz(a,a.gj(a),0,[H.av(a,"p",0)]);y.C();)z.R(0,y.d,!0)
this.a=z},
aw:function(a,b){return this.a.bV(0,b)},
i:function(a){var z=this.a
return P.cy(new H.dy(z,[H.u(z,0)]),0,null)},
$isbB:1,
p:{
W:function(a){var z=new V.hA()
z.ct(a)
return z}}},dU:{"^":"a;a,b,0c,0d",
ge4:function(a){return this.b},
A:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.e4(this.a.G(0,b))
w.a=H.e([],[V.bB])
w.c=!1
C.a.h(this.c,w)
return w},
dT:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aw(0,a))return w}return},
i:function(a){return this.b}},e1:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.f_(this.b,"\n","\\n")
y=H.f_(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},e2:{"^":"a;a,b,0c",
i:function(a){return this.b}},hZ:{"^":"a;0a,0b,0c",
G:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.dU(this,b)
z.c=H.e([],[V.e4])
this.a.R(0,b,z)}return z},
aB:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.e2(this,a)
y=P.l
z.c=new H.aG(0,0,[y,y])
this.b.R(0,a,z)}return z},
ey:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.e1])
y=this.c
x=[P.z]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.aD(a,t)
r=y.dT(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cy(w,0,null)
throw H.c(P.P("Untokenizable string [state: "+y.ge4(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cy(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.e1(o==null?p.b:o,q,t)}++t}}}},e4:{"^":"dC;b,0c,0a",
i:function(a){return this.b.b+": "+this.bs(0)}}}],["","",,X,{"^":"",d6:{"^":"a;",$isdE:1},fC:{"^":"dX;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
p:{
dm:function(a,b,c,d,e,f,g){var z,y
z=new X.fC()
y=new V.aX(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.dP(0,0,1,1)
z.r=y
return z}}},hc:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
ar:[function(a){var z
H.k(a,"$isn")
z=this.e
if(!(z==null))z.v(a)},function(){return this.ar(null)},"eB","$1","$0","gbx",0,2,1],
sax:function(a){var z,y,x
if(!J.N(this.a,a)){z=this.a
if(z!=null){z=z.gu()
z.toString
y=H.b(this.gbx(),{func:1,ret:-1,args:[D.n]})
C.a.T(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gu()
z.toString
y=H.b(this.gbx(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G("mover",x,this.a,this,[U.a2])
z.b=!0
this.ar(z)}},
$isdE:1,
$isd6:1},dX:{"^":"a;"}}],["","",,V,{"^":"",
kv:function(a){P.hY(C.w,new V.kw(a))},
kw:{"^":"q:32;a",
$1:function(a){H.k(a,"$isaI")
P.cY(C.e.cb(this.a.gdV(),2)+" fps")}},
hF:{"^":"a;0a,0b",
cv:function(a,b){var z,y,x,w,v,u,t
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
t=W.a1
W.Q(z,"scroll",H.b(new V.hI(x),{func:1,ret:-1,args:[t]}),!1,t)},
dD:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.y(a,"$isd",[P.l],"$asd")
this.ds()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ey(C.a.dZ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.eZ(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.jH(C.G,s,C.q,!1)
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
ds:function(){var z,y,x,w
if(this.b!=null)return
z=new V.hZ()
y=P.l
z.a=new H.aG(0,0,[y,V.dU])
z.b=new H.aG(0,0,[y,V.e2])
z.c=z.G(0,"Start")
y=z.G(0,"Start").A(0,"Bold")
x=V.W(new H.U("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Bold").A(0,"Bold")
x=new V.b9()
w=[V.bB]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.W(new H.U("*"))
C.a.h(x.a,y)
y=z.G(0,"Bold").A(0,"BoldEnd")
x=V.W(new H.U("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").A(0,"Italic")
x=V.W(new H.U("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Italic").A(0,"Italic")
x=new V.b9()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.W(new H.U("_"))
C.a.h(x.a,y)
y=z.G(0,"Italic").A(0,"ItalicEnd")
x=V.W(new H.U("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").A(0,"Code")
x=V.W(new H.U("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Code").A(0,"Code")
x=new V.b9()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.W(new H.U("`"))
C.a.h(x.a,y)
y=z.G(0,"Code").A(0,"CodeEnd")
x=V.W(new H.U("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").A(0,"LinkHead")
x=V.W(new H.U("["))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"LinkHead").A(0,"LinkTail")
x=V.W(new H.U("|"))
C.a.h(y.a,x)
x=z.G(0,"LinkHead").A(0,"LinkEnd")
y=V.W(new H.U("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkHead").A(0,"LinkHead")
y=new V.b9()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.W(new H.U("|]"))
C.a.h(y.a,x)
x=z.G(0,"LinkTail").A(0,"LinkEnd")
y=V.W(new H.U("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkTail").A(0,"LinkTail")
y=new V.b9()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.W(new H.U("|]"))
C.a.h(y.a,x)
C.a.h(z.G(0,"Start").A(0,"Other").a,new V.f5())
x=z.G(0,"Other").A(0,"Other")
y=new V.b9()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.W(new H.U("*_`["))
C.a.h(y.a,x)
x=z.G(0,"BoldEnd")
x.d=x.a.aB("Bold")
x=z.G(0,"ItalicEnd")
x.d=x.a.aB("Italic")
x=z.G(0,"CodeEnd")
x.d=x.a.aB("Code")
x=z.G(0,"LinkEnd")
x.d=x.a.aB("Link")
x=z.G(0,"Other")
x.d=x.a.aB("Other")
this.b=z},
p:{
hG:function(a,b){var z=new V.hF()
z.cv(a,!0)
return z}}},
hI:{"^":"q:13;a",
$1:function(a){P.hX(C.m,new V.hH(this.a))}},
hH:{"^":"q:2;a",
$0:function(){var z,y,x
z=C.e.a1(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}}}],["","",,D,{"^":"",
eV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=V.hG("Test 030",!0)
y=W.ce(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.dD(H.e(["A test of the Normal shader for dynamically rendering normal maps."],[P.l]))
x=document.getElementById("testCanvas")
if(x==null)H.R(P.P("Failed to find an element with the identifier, testCanvas."))
w=E.hV(x,!0,!0,!0,!1)
v=new E.aw()
v.a=""
v.b=!0
z=E.aw
u=O.da(z)
v.y=u
u.aK(v.ge5(),v.ge7())
v.z=null
v.Q=null
v.ch=null
v.cx=null
v.cy=null
v.db=null
v.dx=null
v.dy=null
v.fr=null
v.fx=null
v.sbq(0,null)
v.sax(null)
t=F.dS()
F.bp(t,null,null,1,1,1,0,0,1)
F.bp(t,null,null,1,1,0,1,0,3)
F.bp(t,null,null,1,1,0,0,1,2)
F.bp(t,null,null,1,1,-1,0,0,0)
F.bp(t,null,null,1,1,0,-1,0,0)
F.bp(t,null,null,1,1,0,0,-1,3)
t.al()
v.sbq(0,t)
u=new U.dn()
u.bt(U.a2)
u.aK(u.gd_(),u.gdh())
u.e=null
u.f=V.bC()
u.r=0
s=w.r
r=new U.ik()
q=U.cg()
q.sbp(0,!0)
q.sbi(6.283185307179586)
q.sbk(0)
q.sV(0,0)
q.sbj(100)
q.sL(0)
q.sbc(0.5)
r.b=q
q=q.gu()
q.toString
p={func:1,ret:-1,args:[D.n]}
o=H.b(r.gai(),p)
C.a.h(q.a,o)
q=U.cg()
q.sbp(0,!0)
q.sbi(6.283185307179586)
q.sbk(0)
q.sV(0,0)
q.sbj(100)
q.sL(0)
q.sbc(0.5)
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
n=new X.ag(!1,!1,!1)
m=r.d
r.d=n
q=[X.ag]
o=new D.G("modifiers",m,n,r,q)
o.b=!0
r.J(o)
o=r.f
if(o!==!1){r.f=!1
o=new D.G("invertX",o,!1,r,[P.ae])
o.b=!0
r.J(o)}o=r.r
if(o!==!1){r.r=!1
o=new D.G("invertY",o,!1,r,[P.ae])
o.b=!0
r.J(o)}r.at(s)
u.h(0,r)
s=w.r
r=new U.ij()
o=U.cg()
o.sbp(0,!0)
o.sbi(6.283185307179586)
o.sbk(0)
o.sV(0,0)
o.sbj(100)
o.sL(0)
o.sbc(0.2)
r.b=o
o=o.gu()
o.toString
l=H.b(r.gai(),p)
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
r.J(o)
r.at(s)
u.h(0,r)
s=w.r
r=new U.il()
r.c=0.01
r.d=0
r.e=0
n=new X.ag(!1,!1,!1)
r.b=n
q=new D.G("modifiers",null,n,r,q)
q.b=!0
r.J(q)
r.at(s)
u.h(0,r)
v.sax(u)
k=new O.h7()
k.b=new V.dD(1,0,0,0,1,0,0,0,1)
k.c=V.bC()
k.d=C.h
k.bM(null)
k.bN(null)
k.cC()
k.r=null
u=w.f
s=u.a
j=s.createTexture()
s.bindTexture(34067,j)
s.texParameteri(34067,10242,10497)
s.texParameteri(34067,10243,10497)
s.texParameteri(34067,10241,9729)
s.texParameteri(34067,10240,9729)
s.bindTexture(34067,null)
i=new T.dZ(0)
i.b=j
i.c=!1
i.d=0
i.e=D.D()
u.ah(i,j,"../resources/diceBumpMap/posx.png",34069,!1,!1)
u.ah(i,j,"../resources/diceBumpMap/negx.png",34070,!1,!1)
u.ah(i,j,"../resources/diceBumpMap/posy.png",34071,!1,!1)
u.ah(i,j,"../resources/diceBumpMap/negy.png",34072,!1,!1)
u.ah(i,j,"../resources/diceBumpMap/posz.png",34073,!1,!1)
u.ah(i,j,"../resources/diceBumpMap/negz.png",34074,!1,!1)
if(k.d!==C.i){k.d=C.i
k.bM(null)
k.a=null}k.bN(i)
h=X.dm(!0,!0,!1,null,2000,null,0)
g=new V.aX(0.5,0.5,1,1)
if(!h.a.q(0,g)){m=h.a
h.a=g
u=new D.G("color",m,g,h,[V.aX])
u.b=!0
s=h.x
if(!(s==null))s.v(u)}f=new M.fv()
z=O.da(z)
f.d=z
z.aK(f.gd1(),f.gd2())
f.e=null
f.f=null
f.r=null
f.x=null
e=new X.hc()
e.b=1.0471975511965976
e.c=0.1
e.d=2000
e.sax(null)
z=e.b
if(!$.m.$2(z,1.0471975511965976)){m=e.b
e.b=1.0471975511965976
z=new D.G("fov",m,1.0471975511965976,e,[P.t])
z.b=!0
e.ar(z)}z=e.c
if(!$.m.$2(z,0.1)){m=e.c
e.c=0.1
z=new D.G("near",m,0.1,e,[P.t])
z.b=!0
e.ar(z)}z=e.d
if(!$.m.$2(z,2000)){m=e.d
e.d=2000
z=new D.G("far",m,2000,e,[P.t])
z.b=!0
e.ar(z)}z=f.a
if(z!==e){if(z!=null){z=z.gu()
z.toString
u=H.b(f.ga2(),p)
C.a.T(z.a,u)}m=f.a
f.a=e
z=e.gu()
z.toString
u=H.b(f.ga2(),p)
C.a.h(z.a,u)
z=new D.G("camera",m,f.a,f,[X.d6])
z.b=!0
f.ae(z)}f.sc8(0,null)
f.sc9(null)
f.sc9(k)
f.sc8(0,h)
f.d.h(0,v)
z=f.a
d=V.an(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
u=new U.db()
u.a=d
z.sax(u)
z=w.d
if(z!==f){if(z!=null){z=z.gu()
z.toString
u=H.b(w.gbu(),p)
C.a.T(z.a,u)}w.d=f
z=f.gu()
z.toString
p=H.b(w.gbu(),p)
C.a.h(z.a,p)
w.cA()}V.kv(w)}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.du.prototype
return J.dt.prototype}if(typeof a=="string")return J.cl.prototype
if(a==null)return J.fJ.prototype
if(typeof a=="boolean")return J.fI.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.a)return a
return J.c6(a)}
J.bH=function(a){if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.a)return a
return J.c6(a)}
J.cS=function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.a)return a
return J.c6(a)}
J.kd=function(a){if(typeof a=="number")return J.bS.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cF.prototype
return a}
J.bI=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.a)return a
return J.c6(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).q(a,b)}
J.f1=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kd(a).Z(a,b)}
J.f2=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.km(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bH(a).k(a,b)}
J.f3=function(a,b,c,d){return J.bI(a).bS(a,b,c,d)}
J.c9=function(a,b,c){return J.bH(a).dJ(a,b,c)}
J.cZ=function(a,b){return J.cS(a).B(a,b)}
J.f4=function(a,b){return J.cS(a).K(a,b)}
J.ak=function(a){return J.B(a).gN(a)}
J.bv=function(a){return J.cS(a).gP(a)}
J.aV=function(a){return J.bH(a).gj(a)}
J.a0=function(a){return J.B(a).i(a)}
I.cV=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.f=W.cd.prototype
C.x=J.j.prototype
C.a=J.aF.prototype
C.y=J.dt.prototype
C.c=J.du.prototype
C.e=J.bS.prototype
C.b=J.cl.prototype
C.F=J.bz.prototype
C.H=H.h5.prototype
C.I=W.h6.prototype
C.p=J.hd.prototype
C.J=P.cu.prototype
C.l=J.cF.prototype
C.r=W.bm.prototype
C.t=W.iA.prototype
C.u=new P.hb()
C.v=new P.io()
C.d=new P.jl()
C.h=new A.bM(0,"ColorSourceType.None")
C.k=new A.bM(1,"ColorSourceType.Solid")
C.j=new A.bM(2,"ColorSourceType.Texture2D")
C.i=new A.bM(3,"ColorSourceType.TextureCube")
C.m=new P.b_(0)
C.w=new P.b_(5e6)
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
C.G=H.e(I.cV([0,0,65498,45055,65535,34815,65534,18431]),[P.z])
C.q=new P.im(!1)
$.af=0
$.aW=null
$.d1=null
$.cL=!1
$.eS=null
$.eM=null
$.eY=null
$.c5=null
$.c7=null
$.cT=null
$.aO=null
$.bq=null
$.br=null
$.cM=!1
$.F=C.d
$.di=null
$.dh=null
$.dg=null
$.df=null
$.m=V.h_()
$.dJ=null
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
I.$lazy(y,x,w)}})(["de","$get$de",function(){return H.eR("_$dart_dartClosure")},"cm","$get$cm",function(){return H.eR("_$dart_js")},"e5","$get$e5",function(){return H.ai(H.bZ({
toString:function(){return"$receiver$"}}))},"e6","$get$e6",function(){return H.ai(H.bZ({$method$:null,
toString:function(){return"$receiver$"}}))},"e7","$get$e7",function(){return H.ai(H.bZ(null))},"e8","$get$e8",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ec","$get$ec",function(){return H.ai(H.bZ(void 0))},"ed","$get$ed",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ea","$get$ea",function(){return H.ai(H.eb(null))},"e9","$get$e9",function(){return H.ai(function(){try{null.$method$}catch(z){return z.message}}())},"ef","$get$ef",function(){return H.ai(H.eb(void 0))},"ee","$get$ee",function(){return H.ai(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cI","$get$cI",function(){return P.iB()},"bs","$get$bs",function(){return[]},"eG","$get$eG",function(){return P.hq("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dd","$get$dd",function(){return{}},"en","$get$en",function(){return Z.a9(0)},"el","$get$el",function(){return Z.a9(511)},"aq","$get$aq",function(){return Z.a9(1)},"ap","$get$ap",function(){return Z.a9(2)},"ao","$get$ao",function(){return Z.a9(4)},"ar","$get$ar",function(){return Z.a9(8)},"as","$get$as",function(){return Z.a9(16)},"bk","$get$bk",function(){return Z.a9(32)},"bl","$get$bl",function(){return Z.a9(64)},"em","$get$em",function(){return Z.a9(96)},"aM","$get$aM",function(){return Z.a9(128)},"aL","$get$aL",function(){return Z.a9(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.n]},{func:1,ret:-1,opt:[D.n]},{func:1,ret:P.A},{func:1,ret:-1},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.A,args:[F.ac]},{func:1,ret:-1,args:[P.l,,]},{func:1,ret:-1,args:[P.z,[P.i,E.aw]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:P.A,args:[D.n]},{func:1,ret:P.A,args:[,]},{func:1,ret:P.A,args:[W.a1]},{func:1,ret:-1,args:[P.z,[P.i,U.a2]]},{func:1,ret:P.t},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.l,args:[P.z]},{func:1,args:[,]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.A,args:[P.L]},{func:1,ret:P.A,args:[{func:1,ret:-1,args:[D.n]}]},{func:1,ret:P.ae,args:[P.t,P.t]},{func:1,ret:P.ae,args:[W.C]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:[P.at,,],args:[,]},{func:1,ret:P.A,args:[,],opt:[,]},{func:1,ret:-1,args:[P.a],opt:[P.ad]},{func:1,ret:P.A,args:[F.aK,P.t,P.t]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,args:[P.l]},{func:1,ret:P.A,args:[P.aI]},{func:1,args:[,P.l]},{func:1,ret:W.V,args:[W.C]}]
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
if(x==y)H.ky(d||a)
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
Isolate.cV=a.cV
Isolate.cQ=a.cQ
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
if(typeof dartMainRunner==="function")dartMainRunner(D.eV,[])
else D.eV([])})})()
//# sourceMappingURL=test.dart.js.map
