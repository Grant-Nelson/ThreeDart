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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cL(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cM=function(){}
var dart=[["","",,H,{"^":"",kZ:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
cR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c7:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cP==null){H.jM()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.j(P.e0("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cm()]
if(v!=null)return v
v=H.jR(a)
if(v!=null)return v
if(typeof a=="function")return C.D
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cm(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
q:function(a,b){return a===b},
gK:function(a){return H.be(a)},
i:["d5",function(a){return"Instance of '"+H.aL(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fi:{"^":"m;",
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$isag:1},
di:{"^":"m;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0},
$isE:1},
cn:{"^":"m;",
gK:function(a){return 0},
i:["d6",function(a){return String(a)}]},
fX:{"^":"cn;"},
c1:{"^":"cn;"},
bE:{"^":"cn;",
i:function(a){var z=a[$.$get$d8()]
if(z==null)return this.d6(a)
return"JavaScript function for "+H.f(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isch:1},
bC:{"^":"m;$ti",
h:function(a,b){H.A(b,H.x(a,0))
if(!!a.fixed$length)H.o(P.af("add"))
a.push(b)},
M:function(a,b){var z
if(!!a.fixed$length)H.o(P.af("remove"))
for(z=0;z<a.length;++z)if(J.Q(a[z],b)){a.splice(z,1)
return!0}return!1},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.j(P.b0(a))}},
O:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.T(z,y,H.f(a[y]))
return z.join(b)},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
gbB:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.j(H.fg())},
aT:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Q(a[z],b))return!0
return!1},
i:function(a){return P.ck(a,"[","]")},
gN:function(a){return new J.am(a,a.length,0,[H.x(a,0)])},
gK:function(a){return H.be(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.o(P.af("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.bQ(b,"newLength",null))
if(b<0)throw H.j(P.bf(b,0,null,"newLength",null))
a.length=b},
T:function(a,b,c){H.X(b)
H.A(c,H.x(a,0))
if(!!a.immutable$list)H.o(P.af("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.bK(a,b))
if(b>=a.length||b<0)throw H.j(H.bK(a,b))
a[b]=c},
$ish:1,
$isb:1,
t:{
fh:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.bQ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.bf(a,0,4294967295,"length",null))
return J.dg(new Array(a),b)},
dg:function(a,b){return J.b8(H.c(a,[b]))},
b8:function(a){H.bz(a)
a.fixed$length=Array
return a}}},
kY:{"^":"bC;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gI:function(a){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.j(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bD:{"^":"m;",
gf0:function(a){return a===0?1/a<0:a<0},
cG:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.j(P.af(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.af(""+a+".round()"))},
cW:function(a,b){var z
if(b>20)throw H.j(P.bf(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gf0(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.j(H.c5(b))
return a*b},
d2:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
d8:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ca(a,b)},
R:function(a,b){return(a|0)===a?a/b|0:this.ca(a,b)},
ca:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.j(P.af("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
c8:function(a,b){var z
if(a>0)z=this.ek(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ek:function(a,b){return b>31?0:a>>>b},
au:function(a,b){if(typeof b!=="number")throw H.j(H.c5(b))
return a<b},
$ist:1,
$isN:1},
dh:{"^":"bD;",$isL:1},
fj:{"^":"bD;"},
bZ:{"^":"m;",
ds:function(a,b){if(b>=a.length)throw H.j(H.bK(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.O(b)
if(typeof b!=="string")throw H.j(P.bQ(b,null,null))
return a+b},
bO:function(a,b,c){H.X(c)
if(c==null)c=a.length
if(b>c)throw H.j(P.cv(b,null,null))
if(c>a.length)throw H.j(P.cv(c,null,null))
return a.substring(b,c)},
bN:function(a,b){return this.bO(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.t)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fc:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
ac:function(a,b){return this.fc(a,b," ")},
eQ:function(a,b,c){if(c>a.length)throw H.j(P.bf(c,0,a.length,null,null))
return H.k2(a,b,c)},
i:function(a){return a},
gK:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isfV:1,
$isn:1}}],["","",,H,{"^":"",
fg:function(){return new P.hm("No element")},
f3:{"^":"h;"},
fv:{"^":"a;a,b,c,0d,$ti",
gI:function(a){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.bM(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.j(P.b0(z))
w=this.c
if(typeof x!=="number")return H.y(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
fB:{"^":"h;a,b,$ti",
gN:function(a){return new H.fC(J.bP(this.a),this.b,this.$ti)},
gl:function(a){return J.aZ(this.a)},
w:function(a,b){return this.b.$1(J.cV(this.a,b))},
$ash:function(a,b){return[b]}},
fC:{"^":"cl;0a,b,c,$ti",
C:function(){var z=this.b
if(z.C()){this.a=this.c.$1(z.gI(z))
return!0}this.a=null
return!1},
gI:function(a){return this.a},
$ascl:function(a,b){return[b]}},
i3:{"^":"h;a,b,$ti",
gN:function(a){return new H.i4(J.bP(this.a),this.b,this.$ti)}},
i4:{"^":"cl;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gI(z)))return!0
return!1},
gI:function(a){var z=this.a
return z.gI(z)}},
bX:{"^":"a;$ti"}}],["","",,H,{"^":"",
jH:function(a){return init.types[H.X(a)]},
jP:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isz},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.j(H.c5(a))
return z},
be:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aL:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.v||!!J.I(a).$isc1){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.j.ds(w,0)===36)w=C.j.bN(w,1)
r=H.cQ(H.bz(H.aE(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
a2:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
h4:function(a){return a.b?H.a2(a).getUTCFullYear()+0:H.a2(a).getFullYear()+0},
h2:function(a){return a.b?H.a2(a).getUTCMonth()+1:H.a2(a).getMonth()+1},
fZ:function(a){return a.b?H.a2(a).getUTCDate()+0:H.a2(a).getDate()+0},
h_:function(a){return a.b?H.a2(a).getUTCHours()+0:H.a2(a).getHours()+0},
h1:function(a){return a.b?H.a2(a).getUTCMinutes()+0:H.a2(a).getMinutes()+0},
h3:function(a){return a.b?H.a2(a).getUTCSeconds()+0:H.a2(a).getSeconds()+0},
h0:function(a){return a.b?H.a2(a).getUTCMilliseconds()+0:H.a2(a).getMilliseconds()+0},
y:function(a){throw H.j(H.c5(a))},
i:function(a,b){if(a==null)J.aZ(a)
throw H.j(H.bK(a,b))},
bK:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.X(J.aZ(a))
if(!(b<0)){if(typeof z!=="number")return H.y(z)
y=b>=z}else y=!0
if(y)return P.J(b,a,"index",null,z)
return P.cv(b,"index",null)},
c5:function(a){return new P.aH(!0,a,null,null)},
j:function(a){var z
if(a==null)a=new P.dr()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eD})
z.name=""}else z.toString=H.eD
return z},
eD:function(){return J.ab(this.dartException)},
o:function(a){throw H.j(a)},
B:function(a){throw H.j(P.b0(a))},
aG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.k7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.c8(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cp(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dq(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dK()
u=$.$get$dL()
t=$.$get$dM()
s=$.$get$dN()
r=$.$get$dR()
q=$.$get$dS()
p=$.$get$dP()
$.$get$dO()
o=$.$get$dU()
n=$.$get$dT()
m=v.V(y)
if(m!=null)return z.$1(H.cp(H.O(y),m))
else{m=u.V(y)
if(m!=null){m.method="call"
return z.$1(H.cp(H.O(y),m))}else{m=t.V(y)
if(m==null){m=s.V(y)
if(m==null){m=r.V(y)
if(m==null){m=q.V(y)
if(m==null){m=p.V(y)
if(m==null){m=s.V(y)
if(m==null){m=o.V(y)
if(m==null){m=n.V(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dq(H.O(y),m))}}return z.$1(new H.hP(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dC()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dC()
return a},
aX:function(a){var z
if(a==null)return new H.eh(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eh(a)},
jE:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.T(0,a[y],a[x])}return b},
jO:function(a,b,c,d,e,f){H.k(a,"$isch")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.p("Unsupported number of arguments for wrapped closure"))},
aU:function(a,b){var z
H.X(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jO)
a.$identity=z
return z},
eS:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isb){z.$reflectionInfo=d
x=H.h6(z).r}else x=d
w=e?Object.create(new H.hn().constructor.prototype):Object.create(new H.cc(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ah
if(typeof u!=="number")return u.D()
$.ah=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.d4(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.jH,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cZ:H.cd
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.j("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.d4(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
eP:function(a,b,c,d){var z=H.cd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d4:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eR(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eP(y,!w,z,b)
if(y===0){w=$.ah
if(typeof w!=="number")return w.D()
$.ah=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b_
if(v==null){v=H.bR("self")
$.b_=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ah
if(typeof w!=="number")return w.D()
$.ah=w+1
t+=w
w="return function("+t+"){return this."
v=$.b_
if(v==null){v=H.bR("self")
$.b_=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
eQ:function(a,b,c,d){var z,y
z=H.cd
y=H.cZ
switch(b?-1:a){case 0:throw H.j(H.he("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eR:function(a,b){var z,y,x,w,v,u,t,s
z=$.b_
if(z==null){z=H.bR("self")
$.b_=z}y=$.cY
if(y==null){y=H.bR("receiver")
$.cY=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eQ(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.ah
if(typeof y!=="number")return y.D()
$.ah=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.ah
if(typeof y!=="number")return y.D()
$.ah=y+1
return new Function(z+y+"}")()},
cL:function(a,b,c,d,e,f,g){var z,y
z=J.b8(H.bz(b))
H.X(c)
y=!!J.I(d).$isb?J.b8(d):d
return H.eS(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.al(a,"String"))},
jU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.al(a,"num"))},
et:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.al(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.al(a,"int"))},
eB:function(a,b){throw H.j(H.al(a,H.O(b).substring(3)))},
jW:function(a,b){var z=J.bM(b)
throw H.j(H.eN(a,z.bO(b,3,z.gl(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.eB(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.jW(a,b)},
bz:function(a){if(a==null)return a
if(!!J.I(a).$isb)return a
throw H.j(H.al(a,"List"))},
jQ:function(a,b){if(a==null)return a
if(!!J.I(a).$isb)return a
if(J.I(a)[b])return a
H.eB(a,b)},
eu:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.X(z)]
else return a.$S()}return},
bL:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eu(J.I(a))
if(z==null)return!1
y=H.ex(z,null,b,null)
return y},
e:function(a,b){var z,y
if(a==null)return a
if($.cH)return a
$.cH=!0
try{if(H.bL(a,b))return a
z=H.bO(b)
y=H.al(a,z)
throw H.j(y)}finally{$.cH=!1}},
cN:function(a,b){if(a!=null&&!H.cK(a,b))H.o(H.al(a,H.bO(b)))
return a},
eo:function(a){var z
if(a instanceof H.r){z=H.eu(J.I(a))
if(z!=null)return H.bO(z)
return"Closure"}return H.aL(a)},
k4:function(a){throw H.j(new P.eW(H.O(a)))},
ev:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aE:function(a){if(a==null)return
return a.$ti},
lW:function(a,b,c){return H.aY(a["$as"+H.f(c)],H.aE(b))},
by:function(a,b,c,d){var z
H.O(c)
H.X(d)
z=H.aY(a["$as"+H.f(c)],H.aE(b))
return z==null?null:z[d]},
aW:function(a,b,c){var z
H.O(b)
H.X(c)
z=H.aY(a["$as"+H.f(b)],H.aE(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.X(b)
z=H.aE(a)
return z==null?null:z[b]},
bO:function(a){var z=H.aF(a,null)
return z},
aF:function(a,b){var z,y
H.w(b,"$isb",[P.n],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cQ(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.f(b[y])}if('func' in a)return H.jp(a,b)
if('futureOr' in a)return"FutureOr<"+H.aF("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jp:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.w(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.j.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aF(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aF(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aF(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aF(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jD(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.aF(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cQ:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isb",[P.n],"$asb")
if(a==null)return""
z=new P.bI("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aF(u,c)}v="<"+z.i(0)+">"
return v},
aY:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aT:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aE(a)
y=J.I(a)
if(y[b]==null)return!1
return H.er(H.aY(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.O(b)
H.bz(c)
H.O(d)
if(a==null)return a
z=H.aT(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cQ(c,0,null)
throw H.j(H.al(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
er:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aa(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aa(a[y],b,c[y],d))return!1
return!0},
lU:function(a,b,c){return a.apply(b,H.aY(J.I(b)["$as"+H.f(c)],H.aE(b)))},
ey:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="E"||a===-1||a===-2||H.ey(z)}return!1},
cK:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="E"||b===-1||b===-2||H.ey(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cK(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bL(a,b)}y=J.I(a).constructor
x=H.aE(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aa(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.cK(a,b))throw H.j(H.al(a,H.bO(b)))
return a},
aa:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aa(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.ex(a,b,c,d)
if('func' in a)return c.builtin$cls==="ch"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aa("type" in a?a.type:null,b,x,d)
else if(H.aa(a,b,x,d))return!0
else{if(!('$is'+"b4" in y.prototype))return!1
w=y.prototype["$as"+"b4"]
v=H.aY(w,z?a.slice(1):null)
return H.aa(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bO(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.er(H.aY(r,z),b,u,d)},
ex:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.jT(m,b,l,d)},
jT:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aa(c[w],d,a[w],b))return!1}return!0},
lV:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
jR:function(a){var z,y,x,w,v,u
z=H.O($.ew.$1(a))
y=$.c6[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.eq.$2(a,z))
if(z!=null){y=$.c6[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c9(x)
$.c6[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c8[z]=x
return x}if(v==="-"){u=H.c9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eA(a,x)
if(v==="*")throw H.j(P.e0(z))
if(init.leafTags[z]===true){u=H.c9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eA(a,x)},
eA:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cR(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c9:function(a){return J.cR(a,!1,null,!!a.$isz)},
jS:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c9(z)
else return J.cR(z,c,null,null)},
jM:function(){if(!0===$.cP)return
$.cP=!0
H.jN()},
jN:function(){var z,y,x,w,v,u,t,s
$.c6=Object.create(null)
$.c8=Object.create(null)
H.jI()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eC.$1(v)
if(u!=null){t=H.jS(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jI:function(){var z,y,x,w,v,u,t
z=C.A()
z=H.aS(C.x,H.aS(C.C,H.aS(C.n,H.aS(C.n,H.aS(C.B,H.aS(C.y,H.aS(C.z(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ew=new H.jJ(v)
$.eq=new H.jK(u)
$.eC=new H.jL(t)},
aS:function(a,b){return a(b)||b},
k2:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h5:{"^":"a;a,b,c,d,e,f,r,0x",t:{
h6:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.b8(z)
y=z[0]
x=z[1]
return new H.h5(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hC:{"^":"a;a,b,c,d,e,f",
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
t:{
ak:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hC(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c0:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dQ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fT:{"^":"V;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
dq:function(a,b){return new H.fT(a,b==null?null:b.method)}}},
fk:{"^":"V;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
t:{
cp:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fk(a,y,z?null:b.receiver)}}},
hP:{"^":"V;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
k7:{"^":"r:13;a",
$1:function(a){if(!!J.I(a).$isV)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eh:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isae:1},
r:{"^":"a;",
i:function(a){return"Closure '"+H.aL(this).trim()+"'"},
gd_:function(){return this},
$isch:1,
gd_:function(){return this}},
dG:{"^":"r;"},
hn:{"^":"dG;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cc:{"^":"dG;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gK:function(a){var z,y
z=this.c
if(z==null)y=H.be(this.a)
else y=typeof z!=="object"?J.az(z):H.be(z)
return(y^H.be(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.aL(z)+"'")},
t:{
cd:function(a){return a.a},
cZ:function(a){return a.c},
bR:function(a){var z,y,x,w,v
z=new H.cc("self","target","receiver","name")
y=J.b8(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hD:{"^":"V;a",
i:function(a){return this.a},
t:{
al:function(a,b){return new H.hD("TypeError: "+H.f(P.bV(a))+": type '"+H.eo(a)+"' is not a subtype of type '"+b+"'")}}},
eM:{"^":"V;a",
i:function(a){return this.a},
t:{
eN:function(a,b){return new H.eM("CastError: "+H.f(P.bV(a))+": type '"+H.eo(a)+"' is not a subtype of type '"+b+"'")}}},
hd:{"^":"V;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
t:{
he:function(a){return new H.hd(a)}}},
co:{"^":"fz;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gab:function(a){return new H.fq(this,[H.x(this,0)])},
eR:function(a,b){var z=this.b
if(z==null)return!1
return this.dv(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aM(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aM(w,b)
x=y==null?null:y.b
return x}else return this.f_(b)},
f_:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c2(z,J.az(a)&0x3ffffff)
x=this.cI(y,a)
if(x<0)return
return y[x].b},
T:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bf()
this.b=z}this.bS(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bf()
this.c=y}this.bS(y,b,c)}else{x=this.d
if(x==null){x=this.bf()
this.d=x}w=J.az(b)&0x3ffffff
v=this.c2(x,w)
if(v==null)this.bk(x,w,[this.bg(b,c)])
else{u=this.cI(v,b)
if(u>=0)v[u].b=c
else v.push(this.bg(b,c))}}},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.j(P.b0(this))
z=z.c}},
bS:function(a,b,c){var z
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
z=this.aM(a,b)
if(z==null)this.bk(a,b,this.bg(b,c))
else z.b=c},
dF:function(){this.r=this.r+1&67108863},
bg:function(a,b){var z,y
z=new H.fp(H.A(a,H.x(this,0)),H.A(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dF()
return z},
cI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
i:function(a){return P.dm(this)},
aM:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
bk:function(a,b,c){a[b]=c},
dA:function(a,b){delete a[b]},
dv:function(a,b){return this.aM(a,b)!=null},
bf:function(){var z=Object.create(null)
this.bk(z,"<non-identifier-key>",z)
this.dA(z,"<non-identifier-key>")
return z},
$isdl:1},
fp:{"^":"a;a,b,0c,0d"},
fq:{"^":"f3;a,$ti",
gl:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.fr(z,z.r,this.$ti)
y.c=z.e
return y}},
fr:{"^":"a;a,b,0c,0d,$ti",
gI:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.b0(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jJ:{"^":"r:13;a",
$1:function(a){return this.a(a)}},
jK:{"^":"r:29;a",
$2:function(a,b){return this.a(a,b)}},
jL:{"^":"r:19;a",
$1:function(a){return this.a(H.O(a))}}}],["","",,H,{"^":"",
jD:function(a){return J.dg(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
jV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bu:function(a){return a},
aD:function(a,b,c){H.bz(b)
if(a>>>0!==a||a>=c)throw H.j(H.bK(b,a))},
fQ:{"^":"m;","%":"DataView;ArrayBufferView;cu|eb|ec|fP|ed|ee|aC"},
cu:{"^":"fQ;",
gl:function(a){return a.length},
$isz:1,
$asz:I.cM},
fP:{"^":"ec;",
k:function(a,b){H.aD(b,a,a.length)
return a[b]},
$asbX:function(){return[P.t]},
$asq:function(){return[P.t]},
$ish:1,
$ash:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aC:{"^":"ee;",
$asbX:function(){return[P.L]},
$asq:function(){return[P.L]},
$ish:1,
$ash:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]}},
l8:{"^":"aC;",
k:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int16Array"},
l9:{"^":"aC;",
k:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int32Array"},
la:{"^":"aC;",
k:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lb:{"^":"aC;",
k:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lc:{"^":"aC;",
k:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ld:{"^":"aC;",
gl:function(a){return a.length},
k:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
le:{"^":"aC;",
gl:function(a){return a.length},
k:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eb:{"^":"cu+q;"},
ec:{"^":"eb+bX;"},
ed:{"^":"cu+q;"},
ee:{"^":"ed+bX;"}}],["","",,P,{"^":"",
i6:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jw()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aU(new P.i8(z),1)).observe(y,{childList:true})
return new P.i7(z,y,x)}else if(self.setImmediate!=null)return P.jx()
return P.jy()},
lJ:[function(a){self.scheduleImmediate(H.aU(new P.i9(H.e(a,{func:1,ret:-1})),0))},"$1","jw",4,0,10],
lK:[function(a){self.setImmediate(H.aU(new P.ia(H.e(a,{func:1,ret:-1})),0))},"$1","jx",4,0,10],
lL:[function(a){H.e(a,{func:1,ret:-1})
P.j6(0,a)},"$1","jy",4,0,10],
dJ:function(a,b){var z
H.e(b,{func:1,ret:-1,args:[P.aM]})
z=C.h.R(a.a,1000)
return P.j7(z<0?0:z,b)},
js:function(a,b){if(H.bL(a,{func:1,args:[P.a,P.ae]}))return b.fl(a,null,P.a,P.ae)
if(H.bL(a,{func:1,args:[P.a]}))return H.e(a,{func:1,ret:null,args:[P.a]})
throw H.j(P.bQ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jr:function(){var z,y
for(;z=$.aR,z!=null;){$.bw=null
y=z.b
$.aR=y
if(y==null)$.bv=null
z.a.$0()}},
lT:[function(){$.cI=!0
try{P.jr()}finally{$.bw=null
$.cI=!1
if($.aR!=null)$.$get$cE().$1(P.es())}},"$0","es",0,0,2],
en:function(a){var z=new P.e5(H.e(a,{func:1,ret:-1}))
if($.aR==null){$.bv=z
$.aR=z
if(!$.cI)$.$get$cE().$1(P.es())}else{$.bv.b=z
$.bv=z}},
jv:function(a){var z,y,x
H.e(a,{func:1,ret:-1})
z=$.aR
if(z==null){P.en(a)
$.bw=$.bv
return}y=new P.e5(a)
x=$.bw
if(x==null){y.b=z
$.bw=y
$.aR=y}else{y.b=x.b
x.b=y
$.bw=y
if(y.b==null)$.bv=y}},
jX:function(a){var z,y
z={func:1,ret:-1}
H.e(a,z)
y=$.K
if(C.i===y){P.c4(null,null,C.i,a)
return}y.toString
P.c4(null,null,y,H.e(y.cd(a),z))},
hz:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aM]}
H.e(b,z)
y=$.K
if(y===C.i){y.toString
return P.dJ(a,b)}x=y.ce(b,P.aM)
$.K.toString
return P.dJ(a,H.e(x,z))},
c3:function(a,b,c,d,e){var z={}
z.a=d
P.jv(new P.jt(z,e))},
el:function(a,b,c,d,e){var z,y
H.e(d,{func:1,ret:e})
y=$.K
if(y===c)return d.$0()
$.K=c
z=y
try{y=d.$0()
return y}finally{$.K=z}},
em:function(a,b,c,d,e,f,g){var z,y
H.e(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.K
if(y===c)return d.$1(e)
$.K=c
z=y
try{y=d.$1(e)
return y}finally{$.K=z}},
ju:function(a,b,c,d,e,f,g,h,i){var z,y
H.e(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.K
if(y===c)return d.$2(e,f)
$.K=c
z=y
try{y=d.$2(e,f)
return y}finally{$.K=z}},
c4:function(a,b,c,d){var z
H.e(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.cd(d):c.eM(d,-1)
P.en(d)},
i8:{"^":"r:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
i7:{"^":"r:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.e(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
i9:{"^":"r:1;a",
$0:function(){this.a.$0()}},
ia:{"^":"r:1;a",
$0:function(){this.a.$0()}},
ek:{"^":"a;a,0b,c",
di:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aU(new P.j9(this,b),0),a)
else throw H.j(P.af("`setTimeout()` not found."))},
dj:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aU(new P.j8(this,a,Date.now(),b),0),a)
else throw H.j(P.af("Periodic timer."))},
$isaM:1,
t:{
j6:function(a,b){var z=new P.ek(!0,0)
z.di(a,b)
return z},
j7:function(a,b){var z=new P.ek(!1,0)
z.dj(a,b)
return z}}},
j9:{"^":"r:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
j8:{"^":"r:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.d8(w,x)}z.c=y
this.d.$1(z)}},
aQ:{"^":"a;0a,b,c,d,e,$ti",
f4:function(a){if(this.c!==6)return!0
return this.b.b.bG(H.e(this.d,{func:1,ret:P.ag,args:[P.a]}),a.a,P.ag,P.a)},
eZ:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.bL(z,{func:1,args:[P.a,P.ae]}))return H.cN(w.fs(z,a.a,a.b,null,y,P.ae),x)
else return H.cN(w.bG(H.e(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
ax:{"^":"a;c9:a<,b,0ec:c<,$ti",
cV:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.K
if(y!==C.i){y.toString
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.js(b,y)}H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ax(0,$.K,[c])
w=b==null?1:3
this.bT(new P.aQ(x,w,a,b,[z,c]))
return x},
fv:function(a,b){return this.cV(a,null,b)},
bT:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isaQ")
this.c=a}else{if(z===2){y=H.k(this.c,"$isax")
z=y.a
if(z<4){y.bT(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c4(null,null,z,H.e(new P.iq(this,a),{func:1,ret:-1}))}},
c4:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isaQ")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isax")
y=u.a
if(y<4){u.c4(a)
return}this.a=y
this.c=u.c}z.a=this.aO(a)
y=this.b
y.toString
P.c4(null,null,y,H.e(new P.iv(z,this),{func:1,ret:-1}))}},
bi:function(){var z=H.k(this.c,"$isaQ")
this.c=null
return this.aO(z)},
aO:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bX:function(a){var z,y,x,w
z=H.x(this,0)
H.cN(a,{futureOr:1,type:z})
y=this.$ti
x=H.aT(a,"$isb4",y,"$asb4")
if(x){z=H.aT(a,"$isax",y,null)
if(z)P.e7(a,this)
else P.ir(a,this)}else{w=this.bi()
H.A(a,z)
this.a=4
this.c=a
P.bs(this,w)}},
bb:[function(a,b){var z
H.k(b,"$isae")
z=this.bi()
this.a=8
this.c=new P.a6(a,b)
P.bs(this,z)},function(a){return this.bb(a,null)},"fF","$2","$1","gdt",4,2,20],
$isb4:1,
t:{
ir:function(a,b){var z,y,x
b.a=1
try{a.cV(new P.is(b),new P.it(b),null)}catch(x){z=H.aG(x)
y=H.aX(x)
P.jX(new P.iu(b,z,y))}},
e7:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isax")
if(z>=4){y=b.bi()
b.a=a.a
b.c=a.c
P.bs(b,y)}else{y=H.k(b.c,"$isaQ")
b.a=2
b.c=a
a.c4(y)}},
bs:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
P.bs(z.a,b)}y=z.a
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
return}o=$.K
if(o==null?q!=null:o!==q)$.K=q
else o=null
y=b.c
if(y===8)new P.iy(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.ix(x,b,r).$0()}else if((y&2)!==0)new P.iw(z,x,b).$0()
if(o!=null)$.K=o
y=x.b
if(!!J.I(y).$isb4){if(y.a>=4){n=H.k(t.c,"$isaQ")
t.c=null
b=t.aO(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.e7(y,t)
return}}m=b.b
n=H.k(m.c,"$isaQ")
m.c=null
b=m.aO(n)
y=x.a
u=x.b
if(!y){H.A(u,H.x(m,0))
m.a=4
m.c=u}else{H.k(u,"$isa6")
m.a=8
m.c=u}z.a=m
y=m}}}},
iq:{"^":"r:1;a,b",
$0:function(){P.bs(this.a,this.b)}},
iv:{"^":"r:1;a,b",
$0:function(){P.bs(this.b,this.a.a)}},
is:{"^":"r:14;a",
$1:function(a){var z=this.a
z.a=0
z.bX(a)}},
it:{"^":"r:21;a",
$2:function(a,b){this.a.bb(a,H.k(b,"$isae"))},
$1:function(a){return this.$2(a,null)}},
iu:{"^":"r:1;a,b,c",
$0:function(){this.a.bb(this.b,this.c)}},
iy:{"^":"r:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.cT(H.e(w.d,{func:1}),null)}catch(v){y=H.aG(v)
x=H.aX(v)
if(this.d){w=H.k(this.a.a.c,"$isa6").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isa6")
else u.b=new P.a6(y,x)
u.a=!0
return}if(!!J.I(z).$isb4){if(z instanceof P.ax&&z.gc9()>=4){if(z.gc9()===8){w=this.b
w.b=H.k(z.gec(),"$isa6")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.fv(new P.iz(t),null)
w.a=!1}}},
iz:{"^":"r:22;a",
$1:function(a){return this.a}},
ix:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.A(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.bG(H.e(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aG(t)
y=H.aX(t)
x=this.a
x.b=new P.a6(z,y)
x.a=!0}}},
iw:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isa6")
w=this.c
if(w.f4(z)&&w.e!=null){v=this.b
v.b=w.eZ(z)
v.a=!1}}catch(u){y=H.aG(u)
x=H.aX(u)
w=H.k(this.a.a.c,"$isa6")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a6(y,x)
s.a=!0}}},
e5:{"^":"a;a,0b"},
cx:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.ax(0,$.K,[P.L])
z.a=0
this.f3(new P.hp(z,this),!0,new P.hq(z,y),y.gdt())
return y}},
hp:{"^":"r;a,b",
$1:function(a){H.A(a,H.aW(this.b,"cx",0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.aW(this.b,"cx",0)]}}},
hq:{"^":"r:1;a,b",
$0:function(){this.b.bX(this.a.a)}},
dD:{"^":"a;$ti"},
aM:{"^":"a;"},
a6:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isV:1},
je:{"^":"a;",$islI:1},
jt:{"^":"r:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dr()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.j(z)
x=H.j(z)
x.stack=y.i(0)
throw x}},
iT:{"^":"je;",
ft:function(a){var z,y,x
H.e(a,{func:1,ret:-1})
try{if(C.i===$.K){a.$0()
return}P.el(null,null,this,a,-1)}catch(x){z=H.aG(x)
y=H.aX(x)
P.c3(null,null,this,z,H.k(y,"$isae"))}},
fu:function(a,b,c){var z,y,x
H.e(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.i===$.K){a.$1(b)
return}P.em(null,null,this,a,b,-1,c)}catch(x){z=H.aG(x)
y=H.aX(x)
P.c3(null,null,this,z,H.k(y,"$isae"))}},
eM:function(a,b){return new P.iV(this,H.e(a,{func:1,ret:b}),b)},
cd:function(a){return new P.iU(this,H.e(a,{func:1,ret:-1}))},
ce:function(a,b){return new P.iW(this,H.e(a,{func:1,ret:-1,args:[b]}),b)},
cT:function(a,b){H.e(a,{func:1,ret:b})
if($.K===C.i)return a.$0()
return P.el(null,null,this,a,b)},
bG:function(a,b,c,d){H.e(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.K===C.i)return a.$1(b)
return P.em(null,null,this,a,b,c,d)},
fs:function(a,b,c,d,e,f){H.e(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.K===C.i)return a.$2(b,c)
return P.ju(null,null,this,a,b,c,d,e,f)},
fl:function(a,b,c,d){return H.e(a,{func:1,ret:b,args:[c,d]})}},
iV:{"^":"r;a,b,c",
$0:function(){return this.a.cT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
iU:{"^":"r:2;a,b",
$0:function(){return this.a.ft(this.b)}},
iW:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.fu(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ft:function(a,b,c){H.bz(a)
return H.w(H.jE(a,new H.co(0,0,[b,c])),"$isdl",[b,c],"$asdl")},
fs:function(a,b){return new H.co(0,0,[a,b])},
fu:function(a,b,c,d){return new P.iF(0,0,[d])},
ff:function(a,b,c){var z,y
if(P.cJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bx()
C.a.h(y,a)
try{P.jq(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dE(b,H.jQ(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
ck:function(a,b,c){var z,y,x
if(P.cJ(a))return b+"..."+c
z=new P.bI(b)
y=$.$get$bx()
C.a.h(y,a)
try{x=z
x.a=P.dE(x.gah(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gah()+c
y=z.gah()
return y.charCodeAt(0)==0?y:y},
cJ:function(a){var z,y
for(z=0;y=$.$get$bx(),z<y.length;++z)if(a===y[z])return!0
return!1},
jq:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.f(z.gI(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gI(z);++x
if(!z.C()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gI(z);++x
for(;z.C();t=s,s=r){r=z.gI(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.f(t)
v=H.f(s)
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
if(P.cJ(a))return"{...}"
y=new P.bI("")
try{C.a.h($.$get$bx(),a)
x=y
x.a=x.gah()+"{"
z.a=!0
J.eH(a,new P.fA(z,y))
z=y
z.a=z.gah()+"}"}finally{z=$.$get$bx()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gah()
return z.charCodeAt(0)==0?z:z},
iF:{"^":"iA;a,0b,0c,0d,0e,0f,r,$ti",
gN:function(a){return P.ea(this,this.r,H.x(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cG()
this.b=z}return this.bV(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cG()
this.c=y}return this.bV(y,b)}else return this.dk(0,b)},
dk:function(a,b){var z,y,x
H.A(b,H.x(this,0))
z=this.d
if(z==null){z=P.cG()
this.d=z}y=this.bY(b)
x=z[y]
if(x==null)z[y]=[this.ba(b)]
else{if(this.c1(x,b)>=0)return!1
x.push(this.ba(b))}return!0},
M:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.c5(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c5(this.c,b)
else return this.e5(0,b)},
e5:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dD(z,b)
x=this.c1(y,b)
if(x<0)return!1
this.cb(y.splice(x,1)[0])
return!0},
bV:function(a,b){H.A(b,H.x(this,0))
if(H.k(a[b],"$iscF")!=null)return!1
a[b]=this.ba(b)
return!0},
c5:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$iscF")
if(z==null)return!1
this.cb(z)
delete a[b]
return!0},
bW:function(){this.r=this.r+1&67108863},
ba:function(a){var z,y
z=new P.cF(H.A(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bW()
return z},
cb:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bW()},
bY:function(a){return J.az(a)&0x3ffffff},
dD:function(a,b){return a[this.bY(b)]},
c1:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
t:{
cG:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cF:{"^":"a;a,0b,0c"},
iG:{"^":"a;a,b,0c,0d,$ti",
gI:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.b0(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.x(this,0))
this.c=z.b
return!0}}},
t:{
ea:function(a,b,c){var z=new P.iG(a,b,[c])
z.c=a.e
return z}}},
iA:{"^":"hf;"},
cq:{"^":"iH;",$ish:1,$isb:1},
q:{"^":"a;$ti",
gN:function(a){return new H.fv(a,this.gl(a),0,[H.by(this,a,"q",0)])},
w:function(a,b){return this.k(a,b)},
fz:function(a,b){var z,y,x
z=H.c([],[H.by(this,a,"q",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.y(x)
if(!(y<x))break
C.a.T(z,y,this.k(a,y));++y}return z},
fw:function(a){return this.fz(a,!0)},
i:function(a){return P.ck(a,"[","]")}},
fz:{"^":"a5;"},
fA:{"^":"r:11;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
a5:{"^":"a;$ti",
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.by(this,a,"a5",0),H.by(this,a,"a5",1)]})
for(z=J.bP(this.gab(a));z.C();){y=z.gI(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.aZ(this.gab(a))},
i:function(a){return P.dm(a)},
$isa_:1},
hg:{"^":"a;$ti",
i:function(a){return P.ck(this,"{","}")},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.cW("index"))
if(b<0)H.o(P.bf(b,0,null,"index",null))
for(z=P.ea(this,this.r,H.x(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.j(P.J(b,this,"index",null,y))},
$ish:1},
hf:{"^":"hg;"},
iH:{"^":"a+q;"}}],["","",,P,{"^":"",
f6:function(a){var z=J.I(a)
if(!!z.$isr)return z.i(a)
return"Instance of '"+H.aL(a)+"'"},
fw:function(a,b,c,d){var z,y
H.A(b,d)
z=J.fh(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.T(z,y,b)
return H.w(z,"$isb",[d],"$asb")},
fx:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gN(a);x.C();)C.a.h(y,H.A(x.gI(x),c))
if(b)return y
return H.w(J.b8(y),"$isb",z,"$asb")},
bV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.f6(a)},
p:function(a){return new P.e6(a)},
cS:function(a){H.jV(a)},
ag:{"^":"a;"},
"+bool":0,
aA:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a&&this.b===b.b},
gK:function(a){var z=this.a
return(z^C.h.c8(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.eX(H.h4(this))
y=P.bB(H.h2(this))
x=P.bB(H.fZ(this))
w=P.bB(H.h_(this))
v=P.bB(H.h1(this))
u=P.bB(H.h3(this))
t=P.eY(H.h0(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
eX:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bB:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"N;"},
"+double":0,
b2:{"^":"a;a",
j:function(a,b){return new P.b2(C.h.W(this.a*b))},
au:function(a,b){return C.h.au(this.a,H.k(b,"$isb2").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.b2))return!1
return this.a===b.a},
gK:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.f2()
y=this.a
if(y<0)return"-"+new P.b2(0-y).i(0)
x=z.$1(C.h.R(y,6e7)%60)
w=z.$1(C.h.R(y,1e6)%60)
v=new P.f1().$1(y%1e6)
return""+C.h.R(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
t:{
de:function(a,b,c,d,e,f){return new P.b2(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
f1:{"^":"r:12;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
f2:{"^":"r:12;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
V:{"^":"a;"},
dr:{"^":"V;",
i:function(a){return"Throw of null."}},
aH:{"^":"V;a,b,c,d",
gbd:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbc:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gbd()+y+x
if(!this.a)return w
v=this.gbc()
u=P.bV(this.b)
return w+v+": "+H.f(u)},
t:{
bQ:function(a,b,c){return new P.aH(!0,a,b,c)},
cW:function(a){return new P.aH(!1,null,a,"Must not be null")}}},
dv:{"^":"aH;e,f,a,b,c,d",
gbd:function(){return"RangeError"},
gbc:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
t:{
cv:function(a,b,c){return new P.dv(null,null,!0,a,b,"Value not in range")},
bf:function(a,b,c,d,e){return new P.dv(b,c,!0,a,d,"Invalid value")}}},
fe:{"^":"aH;e,l:f>,a,b,c,d",
gbd:function(){return"RangeError"},
gbc:function(){if(J.eE(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
t:{
J:function(a,b,c,d,e){var z=H.X(e!=null?e:J.aZ(b))
return new P.fe(b,z,!0,a,c,"Index out of range")}}},
hQ:{"^":"V;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
af:function(a){return new P.hQ(a)}}},
hO:{"^":"V;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
e0:function(a){return new P.hO(a)}}},
hm:{"^":"V;a",
i:function(a){return"Bad state: "+this.a}},
eT:{"^":"V;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bV(z))+"."},
t:{
b0:function(a){return new P.eT(a)}}},
fU:{"^":"a;",
i:function(a){return"Out of Memory"},
$isV:1},
dC:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isV:1},
eW:{"^":"V;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
e6:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
L:{"^":"N;"},
"+int":0,
h:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gN(this)
for(y=0;z.C();)++y
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.cW("index"))
if(b<0)H.o(P.bf(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.C();){x=z.gI(z)
if(b===y)return x;++y}throw H.j(P.J(b,this,"index",null,y))},
i:function(a){return P.ff(this,"(",")")}},
cl:{"^":"a;$ti"},
b:{"^":"a;$ti",$ish:1},
"+List":0,
a_:{"^":"a;$ti"},
E:{"^":"a;",
gK:function(a){return P.a.prototype.gK.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
N:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gK:function(a){return H.be(this)},
i:function(a){return"Instance of '"+H.aL(this)+"'"},
toString:function(){return this.i(this)}},
ae:{"^":"a;"},
n:{"^":"a;",$isfV:1},
"+String":0,
bI:{"^":"a;ah:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
dE:function(a,b,c){var z=J.bP(b)
if(!z.C())return a
if(c.length===0){do a+=H.f(z.gI(z))
while(z.C())}else{a+=H.f(z.gI(z))
for(;z.C();)a=a+c+H.f(z.gI(z))}return a}}}}],["","",,W,{"^":"",
d3:function(a,b){var z=document.createElement("canvas")
return z},
f4:function(a){H.k(a,"$isZ")
return"wheel"},
c2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e9:function(a,b,c,d){var z,y
z=W.c2(W.c2(W.c2(W.c2(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ep:function(a,b){var z
H.e(a,{func:1,ret:-1,args:[b]})
z=$.K
if(z===C.i)return a
return z.ce(a,b)},
b7:{"^":"Y;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
k8:{"^":"cw;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
k9:{"^":"m;0l:length=","%":"AccessibleNodeList"},
ka:{"^":"b7;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kb:{"^":"b7;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
eL:{"^":"m;","%":";Blob"},
ce:{"^":"b7;",
bJ:function(a,b,c){var z=a.getContext(b,P.jz(c,null))
return z},
$isce:1,
"%":"HTMLCanvasElement"},
kh:{"^":"H;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kj:{"^":"bT;0l:length=","%":"CSSPerspective"},
kk:{"^":"cg;0n:x=,0p:y=","%":"CSSPositionValue"},
kl:{"^":"bT;0n:x=,0p:y=","%":"CSSRotation"},
b1:{"^":"m;",$isb1:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
km:{"^":"bT;0n:x=,0p:y=","%":"CSSScale"},
eU:{"^":"ie;0l:length=",
d1:function(a,b){var z=a.getPropertyValue(this.bU(a,b))
return z==null?"":z},
bU:function(a,b){var z,y
z=$.$get$d7()
y=z[b]
if(typeof y==="string")return y
y=this.el(a,b)
z[b]=y
return y},
el:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eZ()+b
if(z in a)return z
return b},
ed:function(a,b,c,d){a.setProperty(b,c,d)},
gbp:function(a){return a.bottom},
ga4:function(a){return a.height},
gas:function(a){return a.left},
gaG:function(a){return a.right},
gaI:function(a){return a.top},
ga5:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eV:{"^":"a;",
gas:function(a){return this.d1(a,"left")}},
cg:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bT:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kn:{"^":"cg;0l:length=","%":"CSSTransformValue"},
ko:{"^":"bT;0n:x=,0p:y=","%":"CSSTranslation"},
kp:{"^":"cg;0l:length=","%":"CSSUnparsedValue"},
kq:{"^":"m;0l:length=","%":"DataTransferItemList"},
kr:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
ks:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
kt:{"^":"f_;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
f_:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
ku:{"^":"ih;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[[P.a3,P.N]]},
$asq:function(){return[[P.a3,P.N]]},
$ish:1,
$ash:function(){return[[P.a3,P.N]]},
$isb:1,
$asb:function(){return[[P.a3,P.N]]},
$asu:function(){return[[P.a3,P.N]]},
"%":"ClientRectList|DOMRectList"},
f0:{"^":"m;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga5(a))+" x "+H.f(this.ga4(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.aT(b,"$isa3",[P.N],"$asa3")
if(!z)return!1
z=J.bN(b)
return a.left===z.gas(b)&&a.top===z.gaI(b)&&this.ga5(a)===z.ga5(b)&&this.ga4(a)===z.ga4(b)},
gK:function(a){return W.e9(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga5(a)&0x1FFFFFFF,this.ga4(a)&0x1FFFFFFF)},
gbp:function(a){return a.bottom},
ga4:function(a){return a.height},
gas:function(a){return a.left},
gaG:function(a){return a.right},
gaI:function(a){return a.top},
ga5:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa3:1,
$asa3:function(){return[P.N]},
"%":";DOMRectReadOnly"},
kv:{"^":"ij;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[P.n]},
$asq:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$asu:function(){return[P.n]},
"%":"DOMStringList"},
kw:{"^":"m;0l:length=","%":"DOMTokenList"},
id:{"^":"cq;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isY")},
h:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var z=this.fw(this)
return new J.am(z,z.length,0,[H.x(z,0)])},
$asq:function(){return[W.Y]},
$ash:function(){return[W.Y]},
$asb:function(){return[W.Y]}},
Y:{"^":"H;",
gcf:function(a){return new W.id(a,a.children)},
gaS:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.au()
if(x<0)x=-x*0
if(typeof w!=="number")return w.au()
if(w<0)w=-w*0
return new P.a3(z,y,x,w,[P.N])},
i:function(a){return a.localName},
$isY:1,
"%":";Element"},
a4:{"^":"m;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
Z:{"^":"m;",
cc:["d4",function(a,b,c,d){H.e(c,{func:1,args:[W.a4]})
if(c!=null)this.dl(a,b,c,!1)}],
dl:function(a,b,c,d){return a.addEventListener(b,H.aU(H.e(c,{func:1,args:[W.a4]}),1),!1)},
$isZ:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ef|eg|ei|ej"},
b3:{"^":"eL;",$isb3:1,"%":"File"},
kP:{"^":"ip;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.b3]},
$asq:function(){return[W.b3]},
$ish:1,
$ash:function(){return[W.b3]},
$isb:1,
$asb:function(){return[W.b3]},
$asu:function(){return[W.b3]},
"%":"FileList"},
kQ:{"^":"Z;0l:length=","%":"FileWriter"},
kT:{"^":"b7;0l:length=","%":"HTMLFormElement"},
b5:{"^":"m;",$isb5:1,"%":"Gamepad"},
kU:{"^":"cw;0n:x=,0p:y=","%":"Gyroscope"},
kV:{"^":"m;0l:length=","%":"History"},
kW:{"^":"iC;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.H]},
$asq:function(){return[W.H]},
$ish:1,
$ash:function(){return[W.H]},
$isb:1,
$asb:function(){return[W.H]},
$asu:function(){return[W.H]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
b9:{"^":"cz;",$isb9:1,"%":"KeyboardEvent"},
l0:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
l1:{"^":"cw;0n:x=,0p:y=","%":"Magnetometer"},
l3:{"^":"m;0l:length=","%":"MediaList"},
l4:{"^":"Z;",
cc:function(a,b,c,d){H.e(c,{func:1,args:[W.a4]})
if(b==="message")a.start()
this.d4(a,b,c,!1)},
"%":"MessagePort"},
l5:{"^":"iI;",
k:function(a,b){return P.ay(a.get(H.O(b)))},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ay(y.value[1]))}},
gab:function(a){var z=H.c([],[P.n])
this.F(a,new W.fM(z))
return z},
gl:function(a){return a.size},
$asa5:function(){return[P.n,null]},
$isa_:1,
$asa_:function(){return[P.n,null]},
"%":"MIDIInputMap"},
fM:{"^":"r:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
l6:{"^":"iJ;",
k:function(a,b){return P.ay(a.get(H.O(b)))},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ay(y.value[1]))}},
gab:function(a){var z=H.c([],[P.n])
this.F(a,new W.fN(z))
return z},
gl:function(a){return a.size},
$asa5:function(){return[P.n,null]},
$isa_:1,
$asa_:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
fN:{"^":"r:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ba:{"^":"m;",$isba:1,"%":"MimeType"},
l7:{"^":"iL;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.ba]},
$asq:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$isb:1,
$asb:function(){return[W.ba]},
$asu:function(){return[W.ba]},
"%":"MimeTypeArray"},
aj:{"^":"cz;",$isaj:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ic:{"^":"cq;a",
gN:function(a){var z=this.a.childNodes
return new W.df(z,z.length,-1,[H.by(C.E,z,"u",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asq:function(){return[W.H]},
$ash:function(){return[W.H]},
$asb:function(){return[W.H]}},
H:{"^":"Z;",
i:function(a){var z=a.nodeValue
return z==null?this.d5(a):z},
$isH:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
fR:{"^":"iN;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.H]},
$asq:function(){return[W.H]},
$ish:1,
$ash:function(){return[W.H]},
$isb:1,
$asb:function(){return[W.H]},
$asu:function(){return[W.H]},
"%":"NodeList|RadioNodeList"},
bc:{"^":"m;0l:length=",$isbc:1,"%":"Plugin"},
li:{"^":"iR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bc]},
$asq:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$isb:1,
$asb:function(){return[W.bc]},
$asu:function(){return[W.bc]},
"%":"PluginArray"},
ln:{"^":"iX;",
k:function(a,b){return P.ay(a.get(H.O(b)))},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ay(y.value[1]))}},
gab:function(a){var z=H.c([],[P.n])
this.F(a,new W.hc(z))
return z},
gl:function(a){return a.size},
$asa5:function(){return[P.n,null]},
$isa_:1,
$asa_:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hc:{"^":"r:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lp:{"^":"b7;0l:length=","%":"HTMLSelectElement"},
cw:{"^":"Z;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bg:{"^":"Z;",$isbg:1,"%":"SourceBuffer"},
lq:{"^":"eg;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bg]},
$asq:function(){return[W.bg]},
$ish:1,
$ash:function(){return[W.bg]},
$isb:1,
$asb:function(){return[W.bg]},
$asu:function(){return[W.bg]},
"%":"SourceBufferList"},
bh:{"^":"m;",$isbh:1,"%":"SpeechGrammar"},
lr:{"^":"iZ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bh]},
$asq:function(){return[W.bh]},
$ish:1,
$ash:function(){return[W.bh]},
$isb:1,
$asb:function(){return[W.bh]},
$asu:function(){return[W.bh]},
"%":"SpeechGrammarList"},
bi:{"^":"m;0l:length=",$isbi:1,"%":"SpeechRecognitionResult"},
lt:{"^":"j1;",
k:function(a,b){return a.getItem(H.O(b))},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gab:function(a){var z=H.c([],[P.n])
this.F(a,new W.ho(z))
return z},
gl:function(a){return a.length},
$asa5:function(){return[P.n,P.n]},
$isa_:1,
$asa_:function(){return[P.n,P.n]},
"%":"Storage"},
ho:{"^":"r:23;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bj:{"^":"m;",$isbj:1,"%":"CSSStyleSheet|StyleSheet"},
bk:{"^":"b7;",$isbk:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bl:{"^":"Z;",$isbl:1,"%":"TextTrack"},
bm:{"^":"Z;",$isbm:1,"%":"TextTrackCue|VTTCue"},
ly:{"^":"j5;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bm]},
$asq:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$isb:1,
$asb:function(){return[W.bm]},
$asu:function(){return[W.bm]},
"%":"TextTrackCueList"},
lz:{"^":"ej;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bl]},
$asq:function(){return[W.bl]},
$ish:1,
$ash:function(){return[W.bl]},
$isb:1,
$asb:function(){return[W.bl]},
$asu:function(){return[W.bl]},
"%":"TextTrackList"},
lA:{"^":"m;0l:length=","%":"TimeRanges"},
bn:{"^":"m;",$isbn:1,"%":"Touch"},
aN:{"^":"cz;",$isaN:1,"%":"TouchEvent"},
lB:{"^":"jb;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bn]},
$asq:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$isb:1,
$asb:function(){return[W.bn]},
$asu:function(){return[W.bn]},
"%":"TouchList"},
lC:{"^":"m;0l:length=","%":"TrackDefaultList"},
cz:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lE:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
lG:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
lH:{"^":"Z;0l:length=","%":"VideoTrackList"},
br:{"^":"aj;",
geU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.af("deltaY is not supported"))},
geT:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.af("deltaX is not supported"))},
$isbr:1,
"%":"WheelEvent"},
i5:{"^":"Z;",
e9:function(a,b){return a.requestAnimationFrame(H.aU(H.e(b,{func:1,ret:-1,args:[P.N]}),1))},
dB:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lM:{"^":"jg;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.b1]},
$asq:function(){return[W.b1]},
$ish:1,
$ash:function(){return[W.b1]},
$isb:1,
$asb:function(){return[W.b1]},
$asu:function(){return[W.b1]},
"%":"CSSRuleList"},
lN:{"^":"f0;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.aT(b,"$isa3",[P.N],"$asa3")
if(!z)return!1
z=J.bN(b)
return a.left===z.gas(b)&&a.top===z.gaI(b)&&a.width===z.ga5(b)&&a.height===z.ga4(b)},
gK:function(a){return W.e9(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga4:function(a){return a.height},
ga5:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
lP:{"^":"ji;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.b5]},
$asq:function(){return[W.b5]},
$ish:1,
$ash:function(){return[W.b5]},
$isb:1,
$asb:function(){return[W.b5]},
$asu:function(){return[W.b5]},
"%":"GamepadList"},
lQ:{"^":"jk;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.H]},
$asq:function(){return[W.H]},
$ish:1,
$ash:function(){return[W.H]},
$isb:1,
$asb:function(){return[W.H]},
$asu:function(){return[W.H]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lR:{"^":"jm;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bi]},
$asq:function(){return[W.bi]},
$ish:1,
$ash:function(){return[W.bi]},
$isb:1,
$asb:function(){return[W.bi]},
$asu:function(){return[W.bi]},
"%":"SpeechRecognitionResultList"},
lS:{"^":"jo;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bj]},
$asq:function(){return[W.bj]},
$ish:1,
$ash:function(){return[W.bj]},
$isb:1,
$asb:function(){return[W.bj]},
$asu:function(){return[W.bj]},
"%":"StyleSheetList"},
ik:{"^":"cx;a,b,c,$ti",
f3:function(a,b,c,d){var z=H.x(this,0)
H.e(a,{func:1,ret:-1,args:[z]})
H.e(c,{func:1,ret:-1})
return W.W(this.a,this.b,a,!1,z)}},
lO:{"^":"ik;a,b,c,$ti"},
il:{"^":"dD;a,b,c,d,e,$ti",
em:function(){var z=this.d
if(z!=null&&this.a<=0)J.eG(this.b,this.c,z,!1)},
t:{
W:function(a,b,c,d,e){var z=c==null?null:W.ep(new W.im(c),W.a4)
z=new W.il(0,a,b,z,!1,[e])
z.em()
return z}}},
im:{"^":"r:4;a",
$1:function(a){return this.a.$1(H.k(a,"$isa4"))}},
u:{"^":"a;$ti",
gN:function(a){return new W.df(a,this.gl(a),-1,[H.by(this,a,"u",0)])}},
df:{"^":"a;a,b,c,0d,$ti",
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.eF(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gI:function(a){return this.d}},
ie:{"^":"m+eV;"},
ig:{"^":"m+q;"},
ih:{"^":"ig+u;"},
ii:{"^":"m+q;"},
ij:{"^":"ii+u;"},
io:{"^":"m+q;"},
ip:{"^":"io+u;"},
iB:{"^":"m+q;"},
iC:{"^":"iB+u;"},
iI:{"^":"m+a5;"},
iJ:{"^":"m+a5;"},
iK:{"^":"m+q;"},
iL:{"^":"iK+u;"},
iM:{"^":"m+q;"},
iN:{"^":"iM+u;"},
iQ:{"^":"m+q;"},
iR:{"^":"iQ+u;"},
iX:{"^":"m+a5;"},
ef:{"^":"Z+q;"},
eg:{"^":"ef+u;"},
iY:{"^":"m+q;"},
iZ:{"^":"iY+u;"},
j1:{"^":"m+a5;"},
j4:{"^":"m+q;"},
j5:{"^":"j4+u;"},
ei:{"^":"Z+q;"},
ej:{"^":"ei+u;"},
ja:{"^":"m+q;"},
jb:{"^":"ja+u;"},
jf:{"^":"m+q;"},
jg:{"^":"jf+u;"},
jh:{"^":"m+q;"},
ji:{"^":"jh+u;"},
jj:{"^":"m+q;"},
jk:{"^":"jj+u;"},
jl:{"^":"m+q;"},
jm:{"^":"jl+u;"},
jn:{"^":"m+q;"},
jo:{"^":"jn+u;"}}],["","",,P,{"^":"",
ay:function(a){var z,y,x,w,v
if(a==null)return
z=P.fs(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.O(y[w])
z.T(0,v,a[v])}return z},
jz:function(a,b){var z={}
a.F(0,new P.jA(z))
return z},
dd:function(){var z=$.dc
if(z==null){z=J.ca(window.navigator.userAgent,"Opera",0)
$.dc=z}return z},
eZ:function(){var z,y
z=$.d9
if(z!=null)return z
y=$.da
if(y==null){y=J.ca(window.navigator.userAgent,"Firefox",0)
$.da=y}if(y)z="-moz-"
else{y=$.db
if(y==null){y=!P.dd()&&J.ca(window.navigator.userAgent,"Trident/",0)
$.db=y}if(y)z="-ms-"
else z=P.dd()?"-o-":"-webkit-"}$.d9=z
return z},
jA:{"^":"r:11;a",
$2:function(a,b){this.a[a]=b}},
f9:{"^":"cq;a,b",
gbe:function(){var z,y,x
z=this.b
y=H.aW(z,"q",0)
x=W.Y
return new H.fB(new H.i3(z,H.e(new P.fa(),{func:1,ret:P.ag,args:[y]}),[y]),H.e(new P.fb(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aZ(this.gbe().a)},
k:function(a,b){var z=this.gbe()
return z.b.$1(J.cV(z.a,b))},
gN:function(a){var z=P.fx(this.gbe(),!1,W.Y)
return new J.am(z,z.length,0,[H.x(z,0)])},
$asq:function(){return[W.Y]},
$ash:function(){return[W.Y]},
$asb:function(){return[W.Y]}},
fa:{"^":"r:24;",
$1:function(a){return!!J.I(H.k(a,"$isH")).$isY}},
fb:{"^":"r:25;",
$1:function(a){return H.d(H.k(a,"$isH"),"$isY")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bt:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e8:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bd:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.f(this.a)+", "+H.f(this.b)+")"},
q:function(a,b){var z,y,x
if(b==null)return!1
z=H.aT(b,"$isbd",[P.N],null)
if(!z)return!1
z=this.a
y=J.bN(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gK:function(a){var z,y
z=J.az(this.a)
y=J.az(this.b)
return P.e8(P.bt(P.bt(0,z),y))},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=H.x(this,0)
z=H.A(z*b,y)
x=this.b
if(typeof x!=="number")return x.j()
return new P.bd(z,H.A(x*b,y),this.$ti)}},
iS:{"^":"a;$ti",
gaG:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.A(z+this.c,H.x(this,0))},
gbp:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.A(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.aT(b,"$isa3",[P.N],"$asa3")
if(!z)return!1
z=this.a
y=J.bN(b)
x=y.gas(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaI(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.x(this,0)
if(H.A(z+this.c,w)===y.gaG(b)){if(typeof x!=="number")return x.D()
z=H.A(x+this.d,w)===y.gbp(b)}else z=!1}else z=!1}else z=!1
return z},
gK:function(a){var z,y,x,w,v
z=this.a
y=J.az(z)
x=this.b
w=J.az(x)
if(typeof z!=="number")return z.D()
v=H.x(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.A(x+this.d,v)
return P.e8(P.bt(P.bt(P.bt(P.bt(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cg:function(a,b){var z,y
H.w(b,"$isbd",[P.N],"$asbd")
z=b.a
y=this.a
if(typeof z!=="number")return z.d0()
if(typeof y!=="number")return H.y(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.d0()
if(typeof y!=="number")return H.y(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a3:{"^":"iS;as:a>,aI:b>,a5:c>,a4:d>,$ti"}}],["","",,P,{"^":"",kx:{"^":"M;0n:x=,0p:y=","%":"SVGFEBlendElement"},ky:{"^":"M;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},kz:{"^":"M;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},kA:{"^":"M;0n:x=,0p:y=","%":"SVGFECompositeElement"},kB:{"^":"M;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},kC:{"^":"M;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},kD:{"^":"M;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},kE:{"^":"M;0n:x=,0p:y=","%":"SVGFEFloodElement"},kF:{"^":"M;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},kG:{"^":"M;0n:x=,0p:y=","%":"SVGFEImageElement"},kH:{"^":"M;0n:x=,0p:y=","%":"SVGFEMergeElement"},kI:{"^":"M;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},kJ:{"^":"M;0n:x=,0p:y=","%":"SVGFEOffsetElement"},kK:{"^":"M;0n:x=,0p:y=","%":"SVGFEPointLightElement"},kL:{"^":"M;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},kM:{"^":"M;0n:x=,0p:y=","%":"SVGFESpotLightElement"},kN:{"^":"M;0n:x=,0p:y=","%":"SVGFETileElement"},kO:{"^":"M;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},kR:{"^":"M;0n:x=,0p:y=","%":"SVGFilterElement"},kS:{"^":"b6;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fd:{"^":"b6;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b6:{"^":"M;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},kX:{"^":"b6;0n:x=,0p:y=","%":"SVGImageElement"},bF:{"^":"m;",$isbF:1,"%":"SVGLength"},l_:{"^":"iE;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.k(a,b)},
$asq:function(){return[P.bF]},
$ish:1,
$ash:function(){return[P.bF]},
$isb:1,
$asb:function(){return[P.bF]},
$asu:function(){return[P.bF]},
"%":"SVGLengthList"},l2:{"^":"M;0n:x=,0p:y=","%":"SVGMaskElement"},bH:{"^":"m;",$isbH:1,"%":"SVGNumber"},lf:{"^":"iP;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.k(a,b)},
$asq:function(){return[P.bH]},
$ish:1,
$ash:function(){return[P.bH]},
$isb:1,
$asb:function(){return[P.bH]},
$asu:function(){return[P.bH]},
"%":"SVGNumberList"},lh:{"^":"M;0n:x=,0p:y=","%":"SVGPatternElement"},lj:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},lk:{"^":"m;0l:length=","%":"SVGPointList"},ll:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},lm:{"^":"fd;0n:x=,0p:y=","%":"SVGRectElement"},lu:{"^":"j3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.k(a,b)},
$asq:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$asu:function(){return[P.n]},
"%":"SVGStringList"},M:{"^":"Y;",
gcf:function(a){return new P.f9(a,new W.ic(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lv:{"^":"b6;0n:x=,0p:y=","%":"SVGSVGElement"},hr:{"^":"b6;","%":"SVGTextPathElement;SVGTextContentElement"},lx:{"^":"hr;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bJ:{"^":"m;",$isbJ:1,"%":"SVGTransform"},lD:{"^":"jd;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.k(a,b)},
$asq:function(){return[P.bJ]},
$ish:1,
$ash:function(){return[P.bJ]},
$isb:1,
$asb:function(){return[P.bJ]},
$asu:function(){return[P.bJ]},
"%":"SVGTransformList"},lF:{"^":"b6;0n:x=,0p:y=","%":"SVGUseElement"},iD:{"^":"m+q;"},iE:{"^":"iD+u;"},iO:{"^":"m+q;"},iP:{"^":"iO+u;"},j2:{"^":"m+q;"},j3:{"^":"j2+u;"},jc:{"^":"m+q;"},jd:{"^":"jc+u;"}}],["","",,P,{"^":"",kc:{"^":"m;0l:length=","%":"AudioBuffer"},kd:{"^":"ib;",
k:function(a,b){return P.ay(a.get(H.O(b)))},
F:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ay(y.value[1]))}},
gab:function(a){var z=H.c([],[P.n])
this.F(a,new P.eJ(z))
return z},
gl:function(a){return a.size},
$asa5:function(){return[P.n,null]},
$isa_:1,
$asa_:function(){return[P.n,null]},
"%":"AudioParamMap"},eJ:{"^":"r:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},ke:{"^":"Z;0l:length=","%":"AudioTrackList"},eK:{"^":"Z;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lg:{"^":"eK;0l:length=","%":"OfflineAudioContext"},ib:{"^":"m+a5;"}}],["","",,P,{"^":"",dy:{"^":"m;",$isdy:1,"%":"WebGLRenderingContext"},hM:{"^":"m;",$ishM:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ls:{"^":"j0;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.J(b,a,null,null,null))
return P.ay(a.item(b))},
w:function(a,b){return this.k(a,b)},
$asq:function(){return[[P.a_,,,]]},
$ish:1,
$ash:function(){return[[P.a_,,,]]},
$isb:1,
$asb:function(){return[[P.a_,,,]]},
$asu:function(){return[[P.a_,,,]]},
"%":"SQLResultSetRowList"},j_:{"^":"m+q;"},j0:{"^":"j_+u;"}}],["","",,O,{"^":"",aI:{"^":"a;0a,0b,0c,0d,$ti",
bP:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
bK:function(a,b,c){var z=H.aW(this,"aI",0)
H.e(b,{func:1,ret:P.ag,args:[[P.h,z]]})
z={func:1,ret:-1,args:[P.L,[P.h,z]]}
H.e(a,z)
H.e(c,z)
this.b=b
this.c=a
this.d=c},
b8:function(a,b){return this.bK(a,null,b)},
e_:function(a){var z
H.w(a,"$ish",[H.aW(this,"aI",0)],"$ash")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dG:function(a,b){var z
H.w(b,"$ish",[H.aW(this,"aI",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gN:function(a){var z=this.a
return new J.am(z,z.length,0,[H.x(z,0)])},
w:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aW(this,"aI",0)
H.A(b,z)
z=[z]
if(this.e_(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dG(x,H.c([b],z))}},
$ish:1,
t:{
cf:function(a){var z=new O.aI([a])
z.bP(a)
return z}}},cs:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.ai()
this.b=z}return z},
dd:function(a){var z=this.b
if(!(z==null))z.J(a)},
ae:function(){return this.dd(null)},
gL:function(a){var z=this.a
if(z.length>0)return C.a.gbB(z)
else return V.ct()},
cQ:function(a){var z=this.a
if(a==null)C.a.h(z,V.ct())
else C.a.h(z,a)
this.ae()},
bD:function(){var z=this.a
if(z.length>0){z.pop()
this.ae()}}}}],["","",,E,{"^":"",cb:{"^":"a;"},aB:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0P:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbL:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gB()
y.toString
x=H.e(this.gcN(),{func:1,ret:-1,args:[D.v]})
C.a.M(y.a,x)}y=this.c
if(y!=null){y=y.gB()
y.toString
x=H.e(this.gcN(),{func:1,ret:-1,args:[D.v]})
C.a.h(y.a,x)}w=new D.P("shape",z,this.c,this,[F.dB])
w.b=!0
this.a0(w)}},
saC:function(a){var z,y,x,w
if(!J.Q(this.r,a)){z=this.r
if(z!=null){y=z.gB()
y.toString
x=H.e(this.gcM(),{func:1,ret:-1,args:[D.v]})
C.a.M(y.a,x)}if(a!=null){y=a.gB()
y.toString
x=H.e(this.gcM(),{func:1,ret:-1,args:[D.v]})
C.a.h(y.a,x)}this.r=a
w=new D.P("mover",z,a,this,[U.bG])
w.b=!0
this.a0(w)}},
b7:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.c
z.scY(z.a+z.d*b.y)
z.scO(0,z.b+z.e*b.y)
z.scS(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.an(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.j(0,V.an(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.j(0,V.an(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.ad(0)}u=z.x}else u=null
if(!J.Q(u,this.x)){t=this.x
this.x=u
s=new D.P("matrix",t,u,this,[V.ad])
s.b=!0
this.a0(s)}for(z=this.y.a,z=new J.am(z,z.length,0,[H.x(z,0)]);z.C();)z.d.b7(0,b)},
at:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gL(z))
else C.a.h(z.a,y.j(0,z.gL(z)))
z.ae()
a.cR(this.f)
z=a.dy
x=(z&&C.a).gbB(z)
if(x!=null&&this.d!=null)x.fo(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.x(z,0)]);z.C();)z.d.at(a)
a.cP()
a.dx.bD()},
a0:function(a){var z=this.z
if(!(z==null))z.J(a)},
S:function(){return this.a0(null)},
fb:[function(a){H.k(a,"$isv")
this.e=null
this.a0(a)},function(){return this.fb(null)},"ha","$1","$0","gcN",0,2,0],
fa:[function(a){this.a0(H.k(a,"$isv"))},function(){return this.fa(null)},"h9","$1","$0","gcM",0,2,0],
f8:[function(a){this.a0(H.k(a,"$isv"))},function(){return this.f8(null)},"h7","$1","$0","gcL",0,2,0],
h6:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ish",[E.aB],"$ash")
for(z=b.length,y=this.gcL(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.gP()==null){t=new D.aJ()
t.a=H.c([],w)
t.c=0
u.sP(t)}t=u.gP()
t.toString
H.e(y,x)
C.a.h(t.a,y)}}this.S()},"$2","gf7",8,0,6],
h8:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ish",[E.aB],"$ash")
for(z=b.length,y=this.gcL(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.gP()==null){t=new D.aJ()
t.a=H.c([],w)
t.c=0
u.sP(t)}t=u.gP()
t.toString
H.e(y,x)
C.a.M(t.a,y)}}this.S()},"$2","gf9",8,0,6],
$isao:1},h7:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
da:function(a,b){var z,y,x,w,v
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
z=new O.cs()
y=[V.ad]
z.a=H.c([],y)
x=z.gB()
x.toString
w={func:1,ret:-1,args:[D.v]}
v=H.e(new E.h9(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cs()
z.a=H.c([],y)
v=z.gB()
v.toString
x=H.e(new E.ha(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cs()
z.a=H.c([],y)
y=z.gB()
y.toString
w=H.e(new E.hb(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.cy])
this.dy=z
C.a.h(z,null)
this.fr=new H.co(0,0,[P.n,A.dA])},
gfk:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gL(z)
y=this.db
y=z.j(0,y.gL(y))
this.z=y
z=y}return z},
cR:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbB(z):a;(z&&C.a).h(z,y)},
cP:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
h8:function(a,b){var z=new E.h7(a,b)
z.da(a,b)
return z}}},h9:{"^":"r:8;a",
$1:function(a){var z
H.k(a,"$isv")
z=this.a
z.z=null
z.ch=null}},ha:{"^":"r:8;a",
$1:function(a){var z
H.k(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hb:{"^":"r:8;a",
$1:function(a){var z
H.k(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},hw:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0P:x@,0y,0z,0Q,0ch",
df:[function(a){var z
H.k(a,"$isv")
z=this.x
if(!(z==null))z.J(a)
this.fp()},function(){return this.df(null)},"de","$1","$0","gbQ",0,2,0],
geY:function(){var z,y,x
z=Date.now()
y=C.h.R(P.de(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aA(z,!1)
return x/y},
c6:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.y(z)
x=C.e.cG(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.e.cG(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
fp:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.e(new E.hy(this),{func:1,ret:-1,args:[P.N]})
C.r.dB(z)
C.r.e9(z,W.ep(y,P.N))}},
fn:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.c6()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aA(w,!1)
x.y=P.de(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.at(this.e)}}catch(v){z=H.aG(v)
y=H.aX(v)
P.cS("Error: "+H.f(z))
P.cS("Stack: "+H.f(y))
throw H.j(z)}},
t:{
hx:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$isce)return E.dI(a,!0,!0,!0,!1)
y=W.d3(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcf(a).h(0,y)
w=E.dI(y,!0,!0,!0,!1)
w.a=a
return w},
dI:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hw()
y=P.ft(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.bJ(a,"webgl",y)
x=H.k(x==null?C.k.bJ(a,"experimental-webgl",y):x,"$isdy")
if(x==null)H.o(P.p("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.h8(x,a)
w=new T.hs(x)
w.b=H.X(x.getParameter(3379))
w.c=H.X(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.hR(a)
v=new X.fm()
v.c=new X.bb(!1,!1,!1)
v.d=P.fu(null,null,null,P.L)
w.b=v
v=new X.fO(w)
v.f=0
v.r=new V.S(0,0)
v.x=new V.S(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fy(w)
v.r=0
v.x=new V.S(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.hB(w)
v.e=0
v.f=new V.S(0,0)
v.r=new V.S(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.dD,P.a]])
w.z=v
u=document
t=W.aj
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.W(u,"contextmenu",H.e(w.gdN(),s),!1,t))
v=w.z
r=W.a4
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.W(a,"focus",H.e(w.gdQ(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.W(a,"blur",H.e(w.gdK(),q),!1,r))
v=w.z
p=W.b9
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.W(u,"keyup",H.e(w.gdS(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.W(u,"keydown",H.e(w.gdR(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.W(a,"mousedown",H.e(w.gdV(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mouseup",H.e(w.gdX(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mousemove",H.e(w.gdW(),s),!1,t))
p=w.z
o=W.br;(p&&C.a).h(p,W.W(a,H.O(W.f4(a)),H.e(w.gdY(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.W(u,"mousemove",H.e(w.gdO(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.W(u,"mouseup",H.e(w.gdP(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.W(u,"pointerlockchange",H.e(w.gdZ(),q),!1,r))
r=w.z
q=W.aN
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.W(a,"touchstart",H.e(w.ge4(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchend",H.e(w.ge2(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchmove",H.e(w.ge3(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aA(Date.now(),!1)
z.ch=0
z.c6()
return z}}},hy:{"^":"r:27;a",
$1:function(a){var z
H.jU(a)
z=this.a
if(z.z){z.z=!1
z.fn()}}}}],["","",,Z,{"^":"",e4:{"^":"a;a,b",t:{
cD:function(a,b,c){var z
H.w(c,"$isb",[P.L],"$asb")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bu(c)),35044)
a.bindBuffer(b,null)
return new Z.e4(b,z)}}},d_:{"^":"cb;a,b,c,d,e",
aQ:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aG(y)
x=P.p('Failed to bind buffer attribute "'+J.ab(this.a)+'": '+H.f(z))
throw H.j(x)}},
i:function(a){return"["+J.ab(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},i2:{"^":"a;a",$iskf:1},d0:{"^":"a;a,0b,c,d",
ar:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aQ:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aQ(a)},
cX:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
at:function(a){var z,y,x,w,v
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
z=[P.n]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.O(y,", ")+"\nAttrs:   "+C.a.O(u,", ")},
$islw:1},bY:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aL(this.c)+"'")+"]"}},aO:{"^":"a;a",
gbM:function(a){var z,y
z=this.a
y=(z&$.$get$au().a)!==0?3:0
if((z&$.$get$at().a)!==0)y+=3
if((z&$.$get$as().a)!==0)y+=3
if((z&$.$get$av().a)!==0)y+=2
if((z&$.$get$aw().a)!==0)y+=3
if((z&$.$get$bp().a)!==0)y+=3
if((z&$.$get$bq().a)!==0)y+=4
if((z&$.$get$aP().a)!==0)++y
return(z&$.$get$ar().a)!==0?y+4:y},
eL:function(a){var z,y,x
z=$.$get$au()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$at()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$as()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$av()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bp()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bq()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ar()
if((y&z.a)!==0)if(x===a)return z
return $.$get$e3()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aO))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$au().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$at().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$as().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$av().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aw().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bp().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bq().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$ar().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.O(z,"|")},
t:{
a9:function(a){return new Z.aO(a)}}}}],["","",,D,{"^":"",eO:{"^":"a;"},aJ:{"^":"a;0a,0b,0c",
J:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.v(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.F(y,new D.f7(z))
return x!==0},
fq:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.J(y)}}},
ad:function(a){return this.fq(a,!0,!1)},
t:{
ai:function(){var z=new D.aJ()
z.a=H.c([],[{func:1,ret:-1,args:[D.v]}])
z.c=0
return z}}},f7:{"^":"r:28;a",
$1:function(a){var z
H.e(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"a;a,0b"},ci:{"^":"v;c,d,a,0b,$ti"},cj:{"^":"v;c,d,a,0b,$ti"},P:{"^":"v;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",d1:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d1))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)},
t:{"^":"kg<"}},dj:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dj))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},fl:{"^":"v;c,a,0b"},fm:{"^":"a;0a,0b,0c,0d",
fh:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.fl(a,this)
y.b=!0
return z.J(y)},
fd:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}},fy:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aL:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aA(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.S(y.a+x*w,y.b+v*u)
u=this.a.gbt()
s=new X.dp(a,new V.S(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bC:function(a,b){this.r=a.a
return!1},
aE:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.d3()
if(typeof z!=="number")return z.cZ()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.aL(a,b))
return!0},
aD:function(a,b){return!1},
fi:function(a){return!1},
dU:function(a,b,c){return}},bb:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bb))return!1
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
return z+(this.c?"Shift+":"")}},dp:{"^":"du;x,y,z,Q,ch,c,d,e,a,0b"},fO:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
dE:function(a,b,c){var z,y,x
z=new P.aA(Date.now(),!1)
y=this.a.gbt()
x=new X.dp(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bC:function(a,b){this.f=a.a
return!1},
aE:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.d3()
if(typeof z!=="number")return z.cZ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.dE(a,b,!0))
return!0},
aD:function(a,b){return!1},
fj:function(a,b){return!1}},du:{"^":"v;"},hA:{"^":"du;x,y,z,Q,ch,c,d,e,a,0b"},hB:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aL:function(a,b){var z,y,x,w
H.w(a,"$isb",[V.S],"$asb")
z=new P.aA(Date.now(),!1)
y=a.length>0?a[0]:new V.S(0,0)
x=this.a.gbt()
w=new X.hA(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fg:function(a){var z
H.w(a,"$isb",[V.S],"$asb")
z=this.b
if(z==null)return!1
z.J(this.aL(a,!0))
return!0},
fe:function(a){var z
H.w(a,"$isb",[V.S],"$asb")
z=this.c
if(z==null)return!1
z.J(this.aL(a,!0))
return!0},
ff:function(a){H.w(a,"$isb",[V.S],"$asb")
return!1}},hR:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbt:function(){var z=this.a
return V.dx(0,0,(z&&C.k).gaS(z).c,C.k.gaS(z).d)},
c_:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dj(z,new X.bb(y,a.altKey,a.shiftKey))},
ak:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bb(y,a.altKey,a.shiftKey)},
bl:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bb(y,a.altKey,a.shiftKey)},
a8:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.Y()
v=z.top
if(typeof x!=="number")return x.Y()
return new V.S(y-w,x-v)},
ax:function(a){return new V.bo(a.movementX,a.movementY)},
bh:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.S])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.e.W(u.pageX)
C.e.W(u.pageY)
s=z.left
C.e.W(u.pageX)
C.a.h(y,new V.S(t-s,C.e.W(u.pageY)-z.top))}return y},
a6:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.d1(z,new X.bb(y,a.altKey,a.shiftKey))},
fP:[function(a){this.f=!0},"$1","gdQ",4,0,4],
fJ:[function(a){this.f=!1},"$1","gdK",4,0,4],
fM:[function(a){if(this.f)a.preventDefault()},"$1","gdN",4,0,4],
fR:[function(a){var z
H.k(a,"$isb9")
if(!this.f)return
z=this.c_(a)
if(this.b.fh(z))a.preventDefault()},"$1","gdS",4,0,15],
fQ:[function(a){var z
H.k(a,"$isb9")
if(!this.f)return
z=this.c_(a)
this.b.fd(z)},"$1","gdR",4,0,15],
fT:[function(a){var z,y,x,w
H.k(a,"$isaj")
z=this.a
z.focus()
this.f=!0
this.ak(a)
if(this.x){y=this.a6(a)
x=this.ax(a)
if(this.d.bC(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a6(a)
w=this.a8(a)
if(this.c.bC(y,w))a.preventDefault()},"$1","gdV",4,0,3],
fV:[function(a){var z,y,x
H.k(a,"$isaj")
this.ak(a)
z=this.a6(a)
if(this.x){y=this.ax(a)
if(this.d.aE(z,y))a.preventDefault()
return}if(this.r)return
x=this.a8(a)
if(this.c.aE(z,x))a.preventDefault()},"$1","gdX",4,0,3],
fO:[function(a){var z,y,x,w
H.k(a,"$isaj")
z=this.a
if(!(z&&C.k).gaS(z).cg(0,new P.bd(a.clientX,a.clientY,[P.N]))){this.ak(a)
y=this.a6(a)
if(this.x){x=this.ax(a)
if(this.d.aE(y,x))a.preventDefault()
return}if(this.r)return
w=this.a8(a)
if(this.c.aE(y,w))a.preventDefault()}},"$1","gdP",4,0,3],
fU:[function(a){var z,y,x
H.k(a,"$isaj")
this.ak(a)
z=this.a6(a)
if(this.x){y=this.ax(a)
if(this.d.aD(z,y))a.preventDefault()
return}if(this.r)return
x=this.a8(a)
if(this.c.aD(z,x))a.preventDefault()},"$1","gdW",4,0,3],
fN:[function(a){var z,y,x,w
H.k(a,"$isaj")
z=this.a
if(!(z&&C.k).gaS(z).cg(0,new P.bd(a.clientX,a.clientY,[P.N]))){this.ak(a)
y=this.a6(a)
if(this.x){x=this.ax(a)
if(this.d.aD(y,x))a.preventDefault()
return}if(this.r)return
w=this.a8(a)
if(this.c.aD(y,w))a.preventDefault()}},"$1","gdO",4,0,3],
fW:[function(a){var z,y
H.k(a,"$isbr")
this.ak(a)
z=new V.bo((a&&C.q).geT(a),C.q.geU(a)).A(0,180)
if(this.x){if(this.d.fi(z))a.preventDefault()
return}if(this.r)return
y=this.a8(a)
if(this.c.fj(z,y))a.preventDefault()},"$1","gdY",4,0,36],
fX:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a6(this.y)
v=this.a8(this.y)
this.d.dU(w,v,x)}},"$1","gdZ",4,0,4],
h1:[function(a){var z
H.k(a,"$isaN")
this.a.focus()
this.f=!0
this.bl(a)
z=this.bh(a)
if(this.e.fg(z))a.preventDefault()},"$1","ge4",4,0,9],
h_:[function(a){var z
H.k(a,"$isaN")
this.bl(a)
z=this.bh(a)
if(this.e.fe(z))a.preventDefault()},"$1","ge2",4,0,9],
h0:[function(a){var z
H.k(a,"$isaN")
this.bl(a)
z=this.bh(a)
if(this.e.ff(z))a.preventDefault()},"$1","ge3",4,0,9]}}],["","",,D,{"^":"",bU:{"^":"a;0a,0b,0c,0d",
af:[function(a){var z
H.k(a,"$isv")
z=this.d
if(!(z==null))z.J(a)},function(){return this.af(null)},"fB","$1","$0","gdg",0,2,0],
$isT:1,
$isao:1},T:{"^":"a;",$isao:1},fn:{"^":"aI;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
af:function(a){var z=this.Q
if(!(z==null))z.J(a)},
dT:[function(a){var z
H.k(a,"$isv")
z=this.ch
if(!(z==null))z.J(a)},function(){return this.dT(null)},"fS","$1","$0","gc3",0,2,0],
fY:[function(a){var z,y,x
H.w(a,"$ish",[D.T],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.du(x))return!1}return!0},"$1","ge0",4,0,31],
fG:[function(a,b){var z,y,x,w,v,u,t,s
z=D.T
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gc3(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.k(b[u],"$isT")
if(t instanceof D.bU)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aJ()
s.a=H.c([],v)
s.c=0
t.d=s}H.e(x,w)
C.a.h(s.a,x)}z=new D.ci(a,b,this,[z])
z.b=!0
this.af(z)},"$2","gdH",8,0,16],
fZ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.T
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gc3(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.k(b[u],"$isT")
if(t instanceof D.bU)C.a.M(this.e,t)
s=t.d
if(s==null){s=new D.aJ()
s.a=H.c([],v)
s.c=0
t.d=s}H.e(x,w)
C.a.M(s.a,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.af(z)},"$2","ge1",8,0,16],
du:function(a){var z=C.a.aT(this.e,a)
return z},
$ash:function(){return[D.T]},
$asaI:function(){return[D.T]}},fY:{"^":"a;",$isT:1,$isao:1},hl:{"^":"a;",$isT:1,$isao:1},ht:{"^":"a;",$isT:1,$isao:1},hu:{"^":"a;",$isT:1,$isao:1},hv:{"^":"a;",$isT:1,$isao:1}}],["","",,V,{"^":"",
ki:[function(a,b){if(typeof b!=="number")return b.Y()
if(typeof a!=="number")return H.y(a)
return Math.abs(b-a)<=1e-9},"$2","fL",8,0,30],
cT:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.d2(a-b,z)
return(a<0?a+z:a)+b},
F:function(a,b,c){if(a==null)return C.j.ac("null",c)
return C.j.ac(C.e.cW($.l.$2(a,0)?0:a,b),c+b+1)},
aV:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isb",[P.t],"$asb")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.F(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.T(z,u,C.j.ac(z[u],x))}return z},
U:{"^":"a;a,b,c",
j:function(a,b){var z,y,x
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
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}},
bA:{"^":"a;a,b,c,d",
j:function(a,b){var z,y,x,w
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
return new V.bA(z,y,x,w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bA))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}},
c_:{"^":"a;a,b,c,d,e,f,r,x,y",
X:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a5,"$isc_")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.e.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.e.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.e.j(t,s)
q=a5.b
p=C.e.j(z,q)
o=a5.e
n=C.e.j(w,o)
m=a5.x
l=C.e.j(t,m)
k=a5.c
z=C.e.j(z,k)
j=a5.f
w=C.e.j(w,j)
i=a5.y
t=C.e.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.e.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.e.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.e.j(d,s)
b=C.e.j(h,q)
a=C.e.j(f,o)
a0=C.e.j(d,m)
h=C.e.j(h,k)
f=C.e.j(f,j)
d=C.e.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.e.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.e.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.c_(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.j(a3,s),C.e.j(a1,q)+C.e.j(a2,o)+C.e.j(a3,m),C.e.j(a1,k)+C.e.j(a2,j)+C.e.j(a3,i))},
q:function(a,b){var z
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
i:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.aV(H.c([this.a,this.d,this.r],z),3,0)
x=V.aV(H.c([this.b,this.e,this.x],z),3,0)
w=V.aV(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.i(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.i(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.i(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.i(y,1)
s=" "+y[1]+", "
if(1>=u)return H.i(x,1)
s=s+x[1]+", "
if(1>=t)return H.i(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.i(y,2)
z=" "+y[2]+", "
if(2>=u)return H.i(x,2)
z=z+x[2]+", "
if(2>=t)return H.i(w,2)
return s+(z+w[2]+"]")}},
ad:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
X:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
cJ:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.y(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.y(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.y(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.y(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.y(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.y(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.y(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.y(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.l.$2(a2,0))return V.ct()
a3=1/a2
a4=-w
a5=-i
return V.an((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.k(a7,"$isad")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.y(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.y(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.y(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
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
if(typeof f!=="number")return f.j()
e=this.f
if(typeof e!=="number")return e.j()
d=this.r
if(typeof d!=="number")return d.j()
c=this.x
if(typeof c!=="number")return c.j()
b=this.y
if(typeof b!=="number")return b.j()
a=this.z
if(typeof a!=="number")return a.j()
a0=this.Q
if(typeof a0!=="number")return a0.j()
a1=this.ch
if(typeof a1!=="number")return a1.j()
a2=this.cx
if(typeof a2!=="number")return a2.j()
a3=this.cy
if(typeof a3!=="number")return a3.j()
a4=this.db
if(typeof a4!=="number")return a4.j()
a5=this.dx
if(typeof a5!=="number")return a5.j()
return V.an(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
bH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
t=this.e
if(typeof t!=="number")return t.j()
s=this.f
if(typeof s!=="number")return s.j()
r=this.r
if(typeof r!=="number")return r.j()
q=this.y
if(typeof q!=="number")return q.j()
p=this.z
if(typeof p!=="number")return p.j()
o=this.Q
if(typeof o!=="number")return o.j()
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aJ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
t=this.d
if(typeof t!=="number")return H.y(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.y(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.y(l)
return new V.a1(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
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
i:function(a){return this.G()},
cH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.aV(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.aV(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.aV(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.aV(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
G:function(){return this.cH("",3,0)},
v:function(a){return this.cH(a,3,0)},
t:{
an:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ct:function(){return V.an(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dn:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.E(c)))
y=b.a9(z)
x=y.A(0,Math.sqrt(y.E(y)))
w=z.a9(x)
v=new V.G(a.a,a.b,a.c)
return V.an(x.a,w.a,z.a,x.av(0).E(v),x.b,w.b,z.b,w.av(0).E(v),x.c,w.c,z.c,z.av(0).E(v),0,0,0,1)}}},
S:{"^":"a;n:a>,p:b>",
j:function(a,b){return new V.S(this.a*b,this.b*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}},
a1:{"^":"a;n:a>,p:b>,c",
D:function(a,b){return new V.a1(this.a+b.a,this.b+b.b,this.c+b.c)},
Y:function(a,b){return new V.a1(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.a1(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}},
dw:{"^":"a;n:a>,p:b>,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dw))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"},
t:{
dx:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dw(a,b,c,d)}}},
bo:{"^":"a;a,b",
f1:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return Math.sqrt(z*z+y*y)},"$0","gl",1,0,17],
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.bo(z*b,y*b)},
A:function(a,b){var z,y
if($.l.$2(b,0))return new V.bo(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.bo(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bo))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
f1:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,17],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
a9:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
av:function(a){return new V.G(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.l.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
cK:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}}],["","",,U,{"^":"",d5:{"^":"bG;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.ai()
this.b=z}return z},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d5))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
t:{
d6:function(a){var z=new U.d5()
z.a=a
return z}}},bG:{"^":"eO;"},dz:{"^":"bG;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.ai()
this.y=z}return z},
aj:function(a){var z=this.y
if(!(z==null))z.J(a)},
scY:function(a){var z,y
a=V.cT(a,0,6.283185307179586)
z=this.a
if(!$.l.$2(z,a)){y=this.a
this.a=a
z=new D.P("yaw",y,a,this,[P.t])
z.b=!0
this.aj(z)}},
scO:function(a,b){var z,y
b=V.cT(b,0,6.283185307179586)
z=this.b
if(!$.l.$2(z,b)){y=this.b
this.b=b
z=new D.P("pitch",y,b,this,[P.t])
z.b=!0
this.aj(z)}},
scS:function(a){var z,y
a=V.cT(a,0,6.283185307179586)
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
z=new D.P("roll",y,a,this,[P.t])
z.b=!0
this.aj(z)}},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dz))return!1
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
i:function(a){return"Rotater: ["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"], ["+V.F(this.d,3,0)+", "+V.F(this.e,3,0)+", "+V.F(this.f,3,0)+"]"}}}],["","",,M,{"^":"",f5:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ag:[function(a){var z
H.k(a,"$isv")
z=this.x
if(!(z==null))z.J(a)},function(){return this.ag(null)},"fC","$1","$0","ga2",0,2,0],
fK:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aB
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga2(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.gP()==null){s=new D.aJ()
s.a=H.c([],v)
s.c=0
t.sP(s)}s=t.gP()
s.toString
H.e(x,w)
C.a.h(s.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.ag(z)},"$2","gdL",8,0,6],
fL:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aB
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga2(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.gP()==null){s=new D.aJ()
s.a=H.c([],v)
s.c=0
t.sP(s)}s=t.gP()
s.toString
H.e(x,w)
C.a.M(s.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.ag(z)},"$2","gdM",8,0,6],
scU:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.e(this.ga2(),{func:1,ret:-1,args:[D.v]})
C.a.M(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gB()
z.toString
y=H.e(this.ga2(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)}z=new D.P("technique",x,this.c,this,[O.cy])
z.b=!0
this.ag(z)}},
gB:function(){var z=this.x
if(z==null){z=D.ai()
this.x=z}return z},
at:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.cR(this.c)
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
u=C.h.W(v.a*x)
if(typeof w!=="number")return H.y(w)
t=C.h.W(v.b*w)
s=C.h.W(v.c*x)
a.c=s
v=C.h.W(v.d*w)
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
s.cQ(V.an(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.ds
if(y==null){y=V.dn(new V.a1(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.ds=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.j(0,m)}a.db.cQ(m)
z=this.c
if(z!=null)z.b7(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.x(z,0)]);z.C();)z.d.b7(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.x(z,0)]);z.C();)z.d.at(a)
this.a.toString
a.cy.bD()
a.db.bD()
this.b.toString
a.cP()},
$islo:1}}],["","",,A,{"^":"",cX:{"^":"a;a,b,c"},eI:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
eW:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
eV:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},fF:{"^":"dA;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ap,0aa,0aq,0aU,0ck,0cl,0aV,0aW,0cm,0cn,0aX,0aY,0co,0cp,0aZ,0cq,0cr,0b_,0cs,0ct,0b0,0b1,0b2,0cu,0cv,0b3,0b4,0cw,0cz,0b5,0cA,0bv,0cB,0bw,0cC,0bx,0cD,0by,0cE,0bz,0cF,0bA,a,b,0c,0d,0e,0f,0r",
d9:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.bI("")
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
a2.eo(z)
a2.ew(z)
a2.ep(z)
a2.eE(z)
a2.eF(z)
a2.ey(z)
a2.eJ(z)
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
z=new P.bI("")
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
v.es(z)
v.en(z)
v.eq(z)
v.eu(z)
v.eC(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.eA(z)
v.eB(z)}v.ex(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
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
case C.f:r+="   return alpha;\n"
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
p=H.c([],[P.n])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.O(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.er(z)
v.ez(z)
v.eD(z)
v.eG(z)
v.eH(z)
v.eI(z)
v.ev(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.n])
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
n="vec4("+C.a.O(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.c0(x.charCodeAt(0)==0?x:x,35633)
this.d=this.c0(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.et(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.o(P.p("Failed to link shader: "+H.f(m)))}this.ei()
this.ej()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.d(this.r.m(0,"invViewMat"),"$isap")
if(y)this.db=H.d(this.r.m(0,"objMat"),"$isap")
if(w)this.dx=H.d(this.r.m(0,"viewObjMat"),"$isap")
this.fr=H.d(this.r.m(0,"projViewObjMat"),"$isap")
if(a2.x2)this.go=H.d(this.r.m(0,"txt2DMat"),"$iscB")
if(a2.y1)this.id=H.d(this.r.m(0,"txtCubeMat"),"$isap")
if(a2.y2)this.k1=H.d(this.r.m(0,"colorMat"),"$isap")
this.k3=H.c([],[A.ap])
y=a2.ap
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isD")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.o(P.p("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(k,"$isap"))}}y=a2.a
if(y!==C.b){this.k4=H.d(this.r.m(0,"emissionClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.r1=H.d(this.r.m(0,"emissionTxt"),"$isa7")
this.rx=H.d(this.r.m(0,"nullEmissionTxt"),"$isD")
break
case C.d:this.r2=H.d(this.r.m(0,"emissionTxt"),"$isa8")
this.rx=H.d(this.r.m(0,"nullEmissionTxt"),"$isD")
break}}y=a2.b
if(y!==C.b){this.ry=H.d(this.r.m(0,"ambientClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.x1=H.d(this.r.m(0,"ambientTxt"),"$isa7")
this.y1=H.d(this.r.m(0,"nullAmbientTxt"),"$isD")
break
case C.d:this.x2=H.d(this.r.m(0,"ambientTxt"),"$isa8")
this.y1=H.d(this.r.m(0,"nullAmbientTxt"),"$isD")
break}}y=a2.c
if(y!==C.b){this.y2=H.d(this.r.m(0,"diffuseClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.ap=H.d(this.r.m(0,"diffuseTxt"),"$isa7")
this.aq=H.d(this.r.m(0,"nullDiffuseTxt"),"$isD")
break
case C.d:this.aa=H.d(this.r.m(0,"diffuseTxt"),"$isa8")
this.aq=H.d(this.r.m(0,"nullDiffuseTxt"),"$isD")
break}}y=a2.d
if(y!==C.b){this.aU=H.d(this.r.m(0,"invDiffuseClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.ck=H.d(this.r.m(0,"invDiffuseTxt"),"$isa7")
this.aV=H.d(this.r.m(0,"nullInvDiffuseTxt"),"$isD")
break
case C.d:this.cl=H.d(this.r.m(0,"invDiffuseTxt"),"$isa8")
this.aV=H.d(this.r.m(0,"nullInvDiffuseTxt"),"$isD")
break}}y=a2.e
if(y!==C.b){this.aY=H.d(this.r.m(0,"shininess"),"$isR")
this.aW=H.d(this.r.m(0,"specularClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.cm=H.d(this.r.m(0,"specularTxt"),"$isa7")
this.aX=H.d(this.r.m(0,"nullSpecularTxt"),"$isD")
break
case C.d:this.cn=H.d(this.r.m(0,"specularTxt"),"$isa8")
this.aX=H.d(this.r.m(0,"nullSpecularTxt"),"$isD")
break}}switch(a2.f){case C.b:break
case C.f:break
case C.c:this.co=H.d(this.r.m(0,"bumpTxt"),"$isa7")
this.aZ=H.d(this.r.m(0,"nullBumpTxt"),"$isD")
break
case C.d:this.cp=H.d(this.r.m(0,"bumpTxt"),"$isa8")
this.aZ=H.d(this.r.m(0,"nullBumpTxt"),"$isD")
break}if(a2.dy){this.cq=H.d(this.r.m(0,"envSampler"),"$isa8")
this.cr=H.d(this.r.m(0,"nullEnvTxt"),"$isD")
y=a2.r
if(y!==C.b){this.b_=H.d(this.r.m(0,"reflectClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.cs=H.d(this.r.m(0,"reflectTxt"),"$isa7")
this.b0=H.d(this.r.m(0,"nullReflectTxt"),"$isD")
break
case C.d:this.ct=H.d(this.r.m(0,"reflectTxt"),"$isa8")
this.b0=H.d(this.r.m(0,"nullReflectTxt"),"$isD")
break}}y=a2.x
if(y!==C.b){this.b1=H.d(this.r.m(0,"refraction"),"$isR")
this.b2=H.d(this.r.m(0,"refractClr"),"$isC")
switch(y){case C.b:break
case C.f:break
case C.c:this.cu=H.d(this.r.m(0,"refractTxt"),"$isa7")
this.b3=H.d(this.r.m(0,"nullRefractTxt"),"$isD")
break
case C.d:this.cv=H.d(this.r.m(0,"refractTxt"),"$isa8")
this.b3=H.d(this.r.m(0,"nullRefractTxt"),"$isD")
break}}}y=a2.y
if(y!==C.b){this.b4=H.d(this.r.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.f:break
case C.c:this.cw=H.d(this.r.m(0,"alphaTxt"),"$isa7")
this.b5=H.d(this.r.m(0,"nullAlphaTxt"),"$isD")
break
case C.d:this.cz=H.d(this.r.m(0,"alphaTxt"),"$isa8")
this.b5=H.d(this.r.m(0,"nullAlphaTxt"),"$isD")
break}}this.bv=H.c([],[A.dV])
this.bw=H.c([],[A.dW])
this.bx=H.c([],[A.dX])
this.by=H.c([],[A.dY])
this.bz=H.c([],[A.dZ])
this.bA=H.c([],[A.e_])
if(a2.k2){y=a2.z
if(y>0){this.cA=H.k(this.r.m(0,"dirLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.bv;(x&&C.a).h(x,new A.dV(l,k,j))}}y=a2.Q
if(y>0){this.cB=H.k(this.r.m(0,"pntLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isR")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isR")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isR")
x=this.bw;(x&&C.a).h(x,new A.dW(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.cC=H.k(this.r.m(0,"spotLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isR")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isR")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isR")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isR")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isR")
x=this.bx;(x&&C.a).h(x,new A.dX(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.cD=H.k(this.r.m(0,"txtDirLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isC")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isD")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isa7")
x=this.by;(x&&C.a).h(x,new A.dY(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.cE=H.k(this.r.m(0,"txtPntLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$iscB")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isD")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isR")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isR")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isR")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isa8")
x=this.bz;(x&&C.a).h(x,new A.dZ(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.cF=H.k(this.r.m(0,"txtSpotLightCount"),"$isD")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isC")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isD")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isC")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isR")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isR")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isR")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isR")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isR")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a1,"$isa7")
x=this.bA;(x&&C.a).h(x,new A.e_(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a_:function(a,b,c){b.a.uniform1i(b.d,1)},
U:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
fE:function(a,b){var z,y
z=a.aa
y=new A.fF(b,z)
y.dc(b,z)
y.d9(a,b)
return y}}},fI:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ap,aa,aq",
eo:function(a){var z,y,x
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
ew:function(a){var z
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
ep:function(a){var z
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
eE:function(a){var z,y
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
eF:function(a){var z,y
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
ey:function(a){var z
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
eJ:function(a){var z
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
a7:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.j.bN(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
es:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.a7(a,z,"emission")
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
en:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.a7(a,z,"ambient")
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
eq:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.a7(a,z,"diffuse")
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
eu:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.a7(a,z,"invDiffuse")
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
eC:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.a7(a,z,"specular")
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
ex:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
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
case C.f:z+="   return normalize(normalVec);\n"
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
eA:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.a7(a,z,"reflect")
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
eB:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.a7(a,z,"refract")
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
er:function(a){var z,y
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
ez:function(a){var z,y
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
eD:function(a){var z,y
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
eG:function(a){var z,y,x
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
eH:function(a){var z,y,x
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
eI:function(a){var z,y,x
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
ev:function(a){var z
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
i:function(a){return this.aa}},dV:{"^":"a;a,b,c"},dY:{"^":"a;a,b,c,d,e,f,r,x"},dW:{"^":"a;a,b,c,d,e,f,r"},dZ:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dX:{"^":"a;a,b,c,d,e,f,r,x,y,z"},e_:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dA:{"^":"cb;",
dc:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
c0:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.et(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.j(P.p("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
ei:function(){var z,y,x,w,v,u
z=H.c([],[A.cX])
y=this.a
x=H.X(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.cX(y,v.name,u))}this.f=new A.eI(z)},
ej:function(){var z,y,x,w,v,u
z=H.c([],[A.a0])
y=this.a
x=H.X(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.eS(v.type,v.size,v.name,u))}this.r=new A.hL(z)},
ai:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.D(z,y,b,c)
else return A.cA(z,y,b,a,c)},
dw:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a7(z,y,b,c)
else return A.cA(z,y,b,a,c)},
dz:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a8(z,y,b,c)
else return A.cA(z,y,b,a,c)},
aP:function(a,b){return new P.e6(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
eS:function(a,b,c,d){switch(a){case 5120:return this.ai(b,c,d)
case 5121:return this.ai(b,c,d)
case 5122:return this.ai(b,c,d)
case 5123:return this.ai(b,c,d)
case 5124:return this.ai(b,c,d)
case 5125:return this.ai(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.hG(this.a,this.e,c,d)
case 35665:return new A.C(this.a,this.e,c,d)
case 35666:return new A.hJ(this.a,this.e,c,d)
case 35667:return new A.hH(this.a,this.e,c,d)
case 35668:return new A.hI(this.a,this.e,c,d)
case 35669:return new A.hK(this.a,this.e,c,d)
case 35674:return new A.hN(this.a,this.e,c,d)
case 35675:return new A.cB(this.a,this.e,c,d)
case 35676:return new A.ap(this.a,this.e,c,d)
case 35678:return this.dw(b,c,d)
case 35680:return this.dz(b,c,d)
case 35670:throw H.j(this.aP("BOOL",c))
case 35671:throw H.j(this.aP("BOOL_VEC2",c))
case 35672:throw H.j(this.aP("BOOL_VEC3",c))
case 35673:throw H.j(this.aP("BOOL_VEC4",c))
default:throw H.j(P.p("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},bS:{"^":"a;a,b",
i:function(a){return this.b}},a0:{"^":"a;"},hL:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.j(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.G()},
eX:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
G:function(){return this.eX("\n")}},D:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},hH:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},hI:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},hK:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},hF:{"^":"a0;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.f(this.c)},
t:{
cA:function(a,b,c,d,e){var z=new A.hF(a,b,c,e)
z.f=d
z.e=P.fw(d,0,!1,P.L)
return z}}},R:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},hG:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},C:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},hJ:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},hN:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},cB:{"^":"a0;a,b,c,d",
a1:function(a){var z=new Float32Array(H.bu(H.w(a,"$isb",[P.t],"$asb")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.f(this.c)}},ap:{"^":"a0;a,b,c,d",
a1:function(a){var z=new Float32Array(H.bu(H.w(a,"$isb",[P.t],"$asb")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},a7:{"^":"a0;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},a8:{"^":"a0;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
k5:function(a,b,c,d){return F.jB(c,a,d,b,new F.k6())},
jB:function(a,b,c,d,e){var z=F.k3(a,b,new F.jC(H.e(e,{func:1,ret:V.a1,args:[P.t]}),d,b,c),null)
if(z==null)return
z.al()
z.f6(new F.hX(),new F.fS())
return z},
k3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.e(c,{func:1,ret:-1,args:[F.aq,P.t,P.t]})
if(a<1)return
if(b<1)return
z=new F.dB()
y=new F.hS(z)
y.b=!1
x=[F.aq]
y.c=H.c([],x)
z.a=y
y=new F.hj(z)
y.b=H.c([],[F.dt])
z.b=y
y=new F.hi(z)
y.b=H.c([],[F.dk])
z.c=y
y=new F.hh(z)
y.b=H.c([],[F.ac])
z.d=y
z.e=null
w=H.c([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cC(null,null,new V.bA(x,0,0,1),null,null,new V.S(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.ci(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cC(null,null,new V.bA(o,n,m,1),null,null,new V.S(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.ci(d))}}z.d.eK(a+1,b+1,w)
return z},
k6:{"^":"r:32;",
$1:function(a){return new V.a1(Math.cos(a),Math.sin(a),0)}},
jC:{"^":"r:33;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.cU(y.$1(z),x)
x=J.cU(y.$1(z+3.141592653589793/this.c),x).Y(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.E(x)))
u=new V.G(1,0,0)
y=v.a9(!v.q(0,u)?new V.G(0,0,1):u)
t=y.A(0,Math.sqrt(y.E(y)))
y=t.a9(v)
u=y.A(0,Math.sqrt(y.E(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
x=w.D(0,new V.a1(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.Q(a.f,x)){a.f=x
y=a.a
if(y!=null)y.S()}}},
ac:{"^":"a;0a,0b,0c,0d,0e",
ay:function(){if(!this.gcj()){C.a.M(this.a.a.d.b,this)
this.a.a.S()}this.e6()
this.e7()
this.e8()},
ef:function(a){this.a=a
C.a.h(a.d.b,this)},
eg:function(a){this.b=a
C.a.h(a.d.c,this)},
eh:function(a){this.c=a
C.a.h(a.d.d,this)},
e6:function(){var z=this.a
if(z!=null){C.a.M(z.d.b,this)
this.a=null}},
e7:function(){var z=this.b
if(z!=null){C.a.M(z.d.c,this)
this.b=null}},
e8:function(){var z=this.c
if(z!=null){C.a.M(z.d.d,this)
this.c=null}},
gcj:function(){return this.a==null||this.b==null||this.c==null},
dn:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.cK())return
return v.A(0,Math.sqrt(v.E(v)))},
dr:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.Y(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.E(z)))
z=w.Y(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.a9(z.A(0,Math.sqrt(z.E(z))))
return z.A(0,Math.sqrt(z.E(z)))},
bs:function(){if(this.d!=null)return!0
var z=this.dn()
if(z==null){z=this.dr()
if(z==null)return!1}this.d=z
this.a.a.S()
return!0},
dm:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.cK())return
return v.A(0,Math.sqrt(v.E(v)))},
dq:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.Y(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.av(0)}else{l=(z-q.b)/n
z=r.Y(0,u).j(0,l).D(0,u).Y(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.av(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.E(z)))
z=k.a9(m)
z=z.A(0,Math.sqrt(z.E(z))).a9(k)
m=z.A(0,Math.sqrt(z.E(z)))}return m},
bq:function(){if(this.e!=null)return!0
var z=this.dm()
if(z==null){z=this.dq()
if(z==null)return!1}this.e=z
this.a.a.S()
return!0},
geP:function(a){if(J.Q(this.a,this.b))return!0
if(J.Q(this.b,this.c))return!0
if(J.Q(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){var z,y
if(this.gcj())return a+"disposed"
z=a+C.j.ac(J.ab(this.a.e),0)+", "+C.j.ac(J.ab(this.b.e),0)+", "+C.j.ac(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
G:function(){return this.v("")},
t:{
bW:function(a,b,c){var z,y,x
z=new F.ac()
y=a.a
if(y==null)H.o(P.p("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.o(P.p("May not create a face with vertices attached to different shapes."))
z.ef(a)
z.eg(b)
z.eh(c)
C.a.h(z.a.a.d.b,z)
z.a.a.S()
return z}}},
f8:{"^":"a;"},
hk:{"^":"f8;",
aB:function(a,b,c){var z,y
z=b.a
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
dk:{"^":"a;"},
fo:{"^":"a;"},
hE:{"^":"fo;",
aB:function(a,b,c){var z,y
z=b.a
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dt:{"^":"a;"},
dB:{"^":"a;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.ai()
this.e=z}return z},
al:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.al()||!1
if(!this.a.al())y=!1
z=this.e
if(!(z==null))z.ad(0)
return y},
dC:function(a,b,c,d,e){var z,y,x
H.w(d,"$isb",[F.aq],"$asb")
H.w(e,"$isb",[P.L],"$asb")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.aB(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
f6:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.aq],x=[P.L];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.dC(a,v,y,u,t))b.f5(u)}this.a.u()
this.c.bE()
this.d.bE()
this.b.fm()
this.c.bF(new F.hE())
this.d.bF(new F.hk())
z=this.e
if(!(z==null))z.ad(0)},
eN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$au()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$at().a)!==0)++w
if((x&$.$get$as().a)!==0)++w
if((x&$.$get$av().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
if((x&$.$get$bp().a)!==0)++w
if((x&$.$get$bq().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$ar().a)!==0)++w
v=b.gbM(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.d_])
for(r=0,q=0;q<w;++q){p=b.eL(q)
o=p.gbM(p)
C.a.T(s,q,new Z.d_(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].f2(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.T(t,l,m[k]);++l}}r+=o}H.w(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bu(t)),35044)
y.bindBuffer(34962,null)
i=new Z.d0(new Z.e4(34962,j),s,b)
i.b=H.c([],[Z.bY])
if(this.b.b.length!==0){x=P.L
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)}f=Z.cD(y,34963,H.w(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bY(0,h.length,f))}if(this.c.b.length!==0){x=P.L
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)}f=Z.cD(y,34963,H.w(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bY(1,h.length,f))}if(this.d.b.length!==0){x=P.L
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.u()
C.a.h(h,g.e)}f=Z.cD(y,34963,H.w(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bY(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.O(z,"\n")},
a0:function(a){var z=this.e
if(!(z==null))z.J(a)},
S:function(){return this.a0(null)}},
hh:{"^":"a;a,0b",
eK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isb",[F.aq],"$asb")
z=H.c([],[F.ac])
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
C.a.h(z,F.bW(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bW(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bW(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bW(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
bF:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aB(0,v,t)){v.ay()
break}}}}},
bE:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.geP(x)
if(y)x.ay()}},
al:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].bs())x=!1
return x},
br:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].bq())x=!1
return x},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].v(a))
return C.a.O(z,"\n")},
G:function(){return this.v("")}},
hi:{"^":"a;a,0b",
gl:function(a){return this.b.length},
bF:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aB(0,v,t)){v.ay()
break}}}}},
bE:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.Q(x.a,x.b)
if(y)x.ay()}},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.O(z,"\n")},
G:function(){return this.v("")}},
hj:{"^":"a;a,0b",
gl:function(a){return this.b.length},
fm:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ay()}},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].v(a))
return C.a.O(z,"\n")},
G:function(){return this.v("")}},
aq:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ci:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cC(this.cx,x,u,z,y,w,v,a,t)},
f2:function(a){var z,y
z=J.I(a)
if(z.q(a,$.$get$au())){z=this.f
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$at())){z=this.r
y=[P.t]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$as())){z=this.x
y=[P.t]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$av())){z=this.y
y=[P.t]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.q(a,$.$get$aw())){z=this.z
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bp())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bq())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$aP()))return H.c([this.ch],[P.t])
else if(z.q(a,$.$get$ar())){z=H.c([-1,-1,-1,-1],[P.t])
return z}else return H.c([],[P.t])},
bs:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.F(0,new F.i1(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.ad(0)}return!0},
bq:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.F(0,new F.i0(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.ad(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.j.ac(J.ab(this.e),0))
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
C.a.h(z,V.F(this.ch,3,0))
C.a.h(z,"-")
x=C.a.O(z,", ")
return a+"{"+x+"}"},
G:function(){return this.v("")},
t:{
cC:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aq()
y=new F.i_(z)
y.b=H.c([],[F.dt])
z.b=y
y=new F.hW(z)
x=[F.dk]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.hT(z)
x=[F.ac]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$e1()
z.e=0
y=$.$get$au()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$at().a)!==0?e:null
z.x=(x&$.$get$as().a)!==0?b:null
z.y=(x&$.$get$av().a)!==0?f:null
z.z=(x&$.$get$aw().a)!==0?g:null
z.Q=(x&$.$get$e2().a)!==0?c:null
z.ch=(x&$.$get$aP().a)!==0?i:0
z.cx=(x&$.$get$ar().a)!==0?a:null
return z}}},
i1:{"^":"r:7;a",
$1:function(a){var z,y
H.k(a,"$isac")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
i0:{"^":"r:7;a",
$1:function(a){var z,y
H.k(a,"$isac")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
hS:{"^":"a;a,0b,0c",
u:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.j(P.p("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.S()
return!0},
gl:function(a){return this.c.length},
al:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].bs()
return!0},
br:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].bq()
return!0},
eO:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Q(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.J(null)}}}}return!0},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
this.u()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].v(a))
return C.a.O(z,"\n")},
G:function(){return this.v("")}},
hT:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
F:function(a,b){H.e(b,{func:1,ret:-1,args:[F.ac]})
C.a.F(this.b,b)
C.a.F(this.c,new F.hU(this,b))
C.a.F(this.d,new F.hV(this,b))},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].v(a))
return C.a.O(z,"\n")},
G:function(){return this.v("")}},
hU:{"^":"r:7;a,b",
$1:function(a){H.k(a,"$isac")
if(!J.Q(a.a,this.a))this.b.$1(a)}},
hV:{"^":"r:7;a,b",
$1:function(a){var z
H.k(a,"$isac")
z=this.a
if(!J.Q(a.a,z)&&!J.Q(a.b,z))this.b.$1(a)}},
hW:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].v(a))
return C.a.O(z,"\n")},
G:function(){return this.v("")}},
hY:{"^":"a;"},
hX:{"^":"hY;",
aB:function(a,b,c){return J.Q(b.f,c.f)}},
hZ:{"^":"a;"},
fS:{"^":"hZ;",
f5:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isb",[F.aq],"$asb")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.E(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){t=a[x]
s=z.A(0,Math.sqrt(u))
if(!J.Q(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.J(null)}}}return}},
i_:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].v(a))
return C.a.O(z,"\n")},
G:function(){return this.v("")}}}],["","",,O,{"^":"",fD:{"^":"cy;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.ai()
this.dy=z}return z},
Z:[function(a){var z
H.k(a,"$isv")
z=this.dy
if(!(z==null))z.J(a)},function(){return this.Z(null)},"fD","$1","$0","gdh",0,2,0],
eb:[function(a){H.k(a,"$isv")
this.a=null
this.Z(a)},function(){return this.eb(null)},"h2","$1","$0","gea",0,2,0],
fH:[function(a,b){var z=V.ad
z=new D.ci(a,H.w(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.Z(z)},"$2","gdI",8,0,18],
fI:[function(a,b){var z=V.ad
z=new D.cj(a,H.w(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.Z(z)},"$2","gdJ",8,0,18],
bZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.R(z.e.length+3,4)*4
x=C.h.R(z.f.length+3,4)*4
w=C.h.R(z.r.length+3,4)*4
v=C.h.R(z.x.length+3,4)*4
u=C.h.R(z.y.length+3,4)*4
t=C.h.R(z.z.length+3,4)*4
s=C.h.R(this.e.a.length+3,4)*4
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
a=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a0=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$au()
if(c){z=$.$get$at()
a6=new Z.aO(a6.a|z.a)}if(b){z=$.$get$as()
a6=new Z.aO(a6.a|z.a)}if(a){z=$.$get$av()
a6=new Z.aO(a6.a|z.a)}if(a0){z=$.$get$aw()
a6=new Z.aO(a6.a|z.a)}if(a2){z=$.$get$ar()
a6=new Z.aO(a6.a|z.a)}return new A.fI(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
H:function(a,b){H.w(a,"$isb",[T.dH],"$asb")},
b7:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.x(z,0)]);z.C();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.bH(x)}}},
fo:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.bZ()
y=a.fr.k(0,z.aa)
if(y==null){y=A.fE(z,a.a)
x=y.b
if(x.length===0)H.o(P.p("May not cache a shader with no name."))
if(a.fr.eR(0,x))H.o(P.p('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.T(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aq
z=b.e
if(!(z instanceof Z.d0)){b.e=null
z=null}if(z==null||!z.d.q(0,v)){z=w.r1
if(z)b.d.al()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.br()
t.a.br()
t=t.e
if(!(t==null))t.ad(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.eO()
s=s.e
if(!(s==null))s.ad(0)}q=b.d.eN(new Z.i2(a.a),v)
q.ar($.$get$au()).e=this.a.y.c
if(z)q.ar($.$get$at()).e=this.a.Q.c
if(u)q.ar($.$get$as()).e=this.a.z.c
if(w.rx)q.ar($.$get$av()).e=this.a.ch.c
if(t)q.ar($.$get$aw()).e=this.a.cx.c
if(w.x1)q.ar($.$get$ar()).e=this.a.cy.c
b.e=q}z=T.dH
p=H.c([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.eW()
if(w.fx){u=this.a
t=a.dx
t=t.gL(t)
u=u.db
u.toString
u.a1(t.X(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gL(t)
s=a.dx
s=t.j(0,s.gL(s))
a.cx=s
t=s}u=u.dx
u.toString
u.a1(t.X(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gfk()
s=a.dx
s=t.j(0,s.gL(s))
a.ch=s
t=s}u=u.fr
u.toString
u.a1(t.X(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.a1(t.X(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.a1(t.X(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.a1(C.w.X(t,!0))}if(w.ap>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.i(s,n)
s=s[n]
t.toString
H.k(s,"$isad")
t=t.k3
if(n>=t.length)return H.i(t,n)
t=t[n]
m=new Float32Array(H.bu(H.w(s.X(0,!0),"$isb",u,"$asb")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.f:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.H(p,this.f.d)
u=this.a
t=this.f.d
u.a_(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.H(p,this.f.e)
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
case C.f:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.H(p,this.r.d)
u=this.a
t=this.r.d
u.a_(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.H(p,this.r.e)
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
case C.f:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.H(p,this.x.d)
u=this.a
t=this.x.d
u.a_(u.ap,u.aq,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.H(p,this.x.e)
u=this.a
t=this.x.e
u.U(u.aa,u.aq,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.f:u=this.a
t=this.y.f
u=u.aU
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.H(p,this.y.d)
u=this.a
t=this.y.d
u.a_(u.ck,u.aV,t)
t=this.a
u=this.y.f
t=t.aU
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.H(p,this.y.e)
u=this.a
t=this.y.e
u.U(u.cl,u.aV,t)
t=this.a
u=this.y.f
t=t.aU
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.f:u=this.a
t=this.z.f
u=u.aW
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.aY
t.a.uniform1f(t.d,r)
break
case C.c:this.H(p,this.z.d)
u=this.a
t=this.z.d
u.a_(u.cm,u.aX,t)
t=this.a
u=this.z.f
t=t.aW
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.aY
u.a.uniform1f(u.d,r)
break
case C.d:this.H(p,this.z.e)
u=this.a
t=this.z.e
u.U(u.cn,u.aX,t)
t=this.a
u=this.z.f
t=t.aW
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.aY
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.cA
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.bv
if(k>=s.length)return H.i(s,k)
h=s[k]
s=l.bH(i.a)
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.cB
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.bw
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaF(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gbI(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aJ(i.gaF(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga3(i)
f=h.d
g=s.gb6()
r=s.gaK()
s=s.gaR()
f.a.uniform3f(f.d,g,r,s)
s=i.gbm()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbn()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbo()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.cC
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.bx
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaF(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gbI(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbu(i).h5()
f=h.c
g=s.gam(s)
r=s.gan(s)
s=s.gao()
f.a.uniform3f(f.d,g,r,s)
s=l.aJ(i.gaF(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga3(i)
r=h.e
g=s.gb6()
f=s.gaK()
s=s.gaR()
r.a.uniform3f(r.d,g,f,s)
s=i.gh4()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gh3()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbm()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbn()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbo()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.cD
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
r=this.a.by
if(k>=r.length)return H.i(r,k)
h=r[k]
r=i.gaH()
H.w(p,"$isb",s,"$asb")
if(!C.a.aT(p,r)){r.saz(0,p.length)
C.a.h(p,r)}r=i.gbu(i)
g=h.d
f=r.gam(r)
e=r.gan(r)
r=r.gao()
g.a.uniform3f(g.d,f,e,r)
r=i.gfA()
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
r=l.bH(i.gbu(i))
e=r.a
f=r.b
g=r.c
g=r.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga3(i)
f=h.f
e=g.gb6()
r=g.gaK()
g=g.gaR()
f.a.uniform3f(f.d,e,r,g)
g=i.gaH()
r=g.gaA(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gaA(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaz(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.cE
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.bz
if(k>=g.length)return H.i(g,k)
h=g[k]
g=i.gaH()
H.w(p,"$isb",r,"$asb")
if(!C.a.aT(p,g)){g.saz(0,p.length)
C.a.h(p,g)}d=l.j(0,i.gL(i))
g=i.gL(i).aJ(new V.a1(0,0,0))
f=h.b
e=g.gn(g)
c=g.gp(g)
g=g.gbI(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aJ(new V.a1(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.cJ(0)
c=h.d
m=new Float32Array(H.bu(H.w(new V.c_(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).X(0,!0),"$isb",s,"$asb")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga3(i)
g=h.e
e=c.gb6()
f=c.gaK()
c=c.gaR()
g.a.uniform3f(g.d,e,f,c)
c=i.gaH()
g=c.gaA(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gaA(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gaz(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbm()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbn()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbo()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.cF
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.bA
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaH()
H.w(p,"$isb",z,"$asb")
if(!C.a.aT(p,s)){s.saz(0,p.length)
C.a.h(p,s)}s=i.gaF(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gbI(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbu(i)
f=h.c
g=s.gam(s)
r=s.gan(s)
s=s.gao()
f.a.uniform3f(f.d,g,r,s)
s=i.gfA()
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
s=l.aJ(i.gaF(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaH()
r=s.gaA(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gaA(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaz(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga3(i)
r=h.y
g=s.gb6()
f=s.gaK()
s=s.gaR()
r.a.uniform3f(r.d,g,f,s)
s=i.ghb()
f=h.z
f.a.uniform1f(f.d,s)
s=i.ghc()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbm()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbn()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbo()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.f:break
case C.c:this.H(p,this.Q.d)
z=this.a
u=this.Q.d
z.a_(z.co,z.aZ,u)
break
case C.d:this.H(p,this.Q.e)
z=this.a
u=this.Q.e
z.U(z.cp,z.aZ,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gL(u).cJ(0)
a.Q=u}z=z.fy
z.toString
z.a1(u.X(0,!0))}if(w.dy){this.H(p,this.ch)
z=this.a
u=this.ch
z.U(z.cq,z.cr,u)
switch(w.r){case C.b:break
case C.f:z=this.a
u=this.cx.f
z=z.b_
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.H(p,this.cx.d)
z=this.a
u=this.cx.d
z.a_(z.cs,z.b0,u)
u=this.a
z=this.cx.f
u=u.b_
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.H(p,this.cx.e)
z=this.a
u=this.cx.e
z.U(z.ct,z.b0,u)
u=this.a
z=this.cx.f
u=u.b_
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.f:z=this.a
u=this.cy.f
z=z.b2
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.b1
u.a.uniform1f(u.d,s)
break
case C.c:this.H(p,this.cy.d)
z=this.a
u=this.cy.d
z.a_(z.cu,z.b3,u)
u=this.a
z=this.cy.f
u=u.b2
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b1
z.a.uniform1f(z.d,s)
break
case C.d:this.H(p,this.cy.e)
z=this.a
u=this.cy.e
z.U(z.cv,z.b3,u)
u=this.a
z=this.cy.f
u=u.b2
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b1
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.f:z=this.a
t=this.db.f
z=z.b4
z.a.uniform1f(z.d,t)
break
case C.c:this.H(p,this.db.d)
z=this.a
t=this.db.d
z.a_(z.cw,z.b5,t)
t=this.a
z=this.db.f
t=t.b4
t.a.uniform1f(t.d,z)
break
case C.d:this.H(p,this.db.e)
z=this.a
t=this.db.e
z.U(z.cz,z.b5,t)
t=this.a
z=this.db.f
t=t.b4
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].aQ(a)
z=b.e
z.aQ(a)
z.at(a)
z.cX(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].cX(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.eV()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.bZ().aa}},fG:{"^":"cr;0f,a,b,0c,0d,0e"},cr:{"^":"a;",
aN:["d7",function(){}]},fH:{"^":"cr;a,b,0c,0d,0e"},aK:{"^":"cr;0f,a,b,0c,0d,0e",
c7:function(a){var z,y
if(!J.Q(this.f,a)){z=this.f
this.f=a
y=new D.P(this.b+".color",z,a,this,[V.U])
y.b=!0
this.a.Z(y)}},
aN:["b9",function(){this.d7()
this.c7(new V.U(1,1,1))}],
sa3:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.aN()
z=this.a
z.a=null
z.Z(null)}this.c7(b)}},fJ:{"^":"aK;0ch,0f,a,b,0c,0d,0e",
ee:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.P(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.Z(z)}},
aN:function(){this.b9()
this.ee(1)}},fK:{"^":"aK;0ch,0f,a,b,0c,0d,0e",
bj:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.P(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.Z(z)}},
aN:function(){this.b9()
this.bj(100)}},cy:{"^":"a;"}}],["","",,T,{"^":"",dH:{"^":"cb;"},hs:{"^":"a;a,0b,0c,0d,0e"}}],["","",,X,{"^":"",d2:{"^":"a;",$isao:1},fc:{"^":"dF;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.ai()
this.x=z}return z}},fW:{"^":"a;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.ai()
this.e=z}return z},
aw:[function(a){var z
H.k(a,"$isv")
z=this.e
if(!(z==null))z.J(a)},function(){return this.aw(null)},"fE","$1","$0","gbR",0,2,0],
saC:function(a){var z,y,x
if(!J.Q(this.a,a)){z=this.a
if(z!=null){z=z.gB()
z.toString
y=H.e(this.gbR(),{func:1,ret:-1,args:[D.v]})
C.a.M(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gB()
z.toString
y=H.e(this.gbR(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)}z=new D.P("mover",x,this.a,this,[U.bG])
z.b=!0
this.aw(z)}},
$isao:1,
$isd2:1},dF:{"^":"a;"}}],["","",,B,{"^":"",
jY:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.ed(x,(x&&C.m).bU(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.a4
W.W(z,"scroll",H.e(new B.jZ(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
k_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isb",[P.n],"$asb")
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
u=W.d3(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.k(v.insertCell(-1),"$isbk")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.k(q.insertCell(-1),"$isbk").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;!1;++p){o=z.createElement("div")
if(p>=0)return H.i(b,p)
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.k(q.insertCell(-1),"$isbk")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.k(q.insertCell(-1),"$isbk")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.k(q.insertCell(-1),"$isbk").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.jY(a,y,!1,"../resources/SnowTop.png")},
k0:function(a){P.hz(C.u,new B.k1(a))},
jZ:{"^":"r:34;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.f(-0.05*C.e.W(this.b.scrollTop))+"px"
z.top=y}},
k1:{"^":"r:35;a",
$1:function(a){H.k(a,"$isaM")
P.cS(C.e.cW(this.a.geY(),2)+" fps")}}}],["","",,X,{"^":"",
ez:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
B.k_("Test 003",H.c([],[P.n]),"A test of the Material Light Shader with a solid color directional lighting.")
z=new E.aB()
z.a=""
z.b=!0
y=E.aB
x=O.cf(y)
z.y=x
x.b8(z.gf7(),z.gf9())
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
z.sbL(0,null)
z.saC(null)
z.sbL(0,F.k5(30,1,15,0.5))
x=new U.dz()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.scY(0)
x.scO(0,0)
x.scS(0)
w=x.d
if(!$.l.$2(w,0.1)){v=x.d
x.d=0.1
w=new D.P("deltaYaw",v,0.1,x,[P.t])
w.b=!0
x.aj(w)}w=x.e
if(!$.l.$2(w,0.21)){v=x.e
x.e=0.21
w=new D.P("deltaPitch",v,0.21,x,[P.t])
w.b=!0
x.aj(w)}w=x.f
if(!$.l.$2(w,0.32)){v=x.f
x.f=0.32
w=new D.P("deltaRoll",v,0.32,x,[P.t])
w.b=!0
x.aj(w)}z.saC(x)
u=new O.fD()
x=O.cf(V.ad)
u.e=x
x.b8(u.gdI(),u.gdJ())
x=new O.aK(u,"emission")
x.c=C.b
x.f=new V.U(0,0,0)
u.f=x
x=new O.aK(u,"ambient")
x.c=C.b
x.f=new V.U(0,0,0)
u.r=x
x=new O.aK(u,"diffuse")
x.c=C.b
x.f=new V.U(0,0,0)
u.x=x
x=new O.aK(u,"invDiffuse")
x.c=C.b
x.f=new V.U(0,0,0)
u.y=x
x=new O.fK(u,"specular")
x.c=C.b
x.f=new V.U(0,0,0)
x.ch=100
u.z=x
x=new O.fH(u,"bump")
x.c=C.b
u.Q=x
u.ch=null
x=new O.aK(u,"reflect")
x.c=C.b
x.f=new V.U(0,0,0)
u.cx=x
x=new O.fJ(u,"refract")
x.c=C.b
x.f=new V.U(0,0,0)
x.ch=1
u.cy=x
x=new O.fG(u,"alpha")
x.c=C.b
x.f=1
u.db=x
x=new D.fn()
x.bP(D.T)
x.e=H.c([],[D.bU])
x.f=H.c([],[D.fY])
x.r=H.c([],[D.hl])
x.x=H.c([],[D.ht])
x.y=H.c([],[D.hu])
x.z=H.c([],[D.hv])
x.Q=null
x.ch=null
x.bK(x.gdH(),x.ge0(),x.ge1())
u.dx=x
w=x.Q
if(w==null){w=D.ai()
x.Q=w
x=w}else x=w
w={func:1,ret:-1,args:[D.v]}
t=H.e(u.gea(),w)
C.a.h(x.a,t)
t=u.dx
x=t.ch
if(x==null){x=D.ai()
t.ch=x}t=H.e(u.gdh(),w)
C.a.h(x.a,t)
u.dy=null
t=u.dx
x=U.d6(V.dn(new V.a1(0,0,0),new V.G(0,1,0),new V.G(1,1,-3)))
s=new V.U(1,1,1)
r=new D.bU()
r.c=new V.U(1,1,1)
r.a=new V.G(0,0,1)
v=r.b
r.b=x
x=x.gB()
x.toString
q=H.e(r.gdg(),w)
C.a.h(x.a,q)
x=new D.P("mover",v,r.b,r,[U.bG])
x.b=!0
r.af(x)
if(!r.c.q(0,s)){v=r.c
r.c=s
x=new D.P("color",v,s,r,[V.U])
x.b=!0
r.af(x)}t.h(0,r)
x=u.r
x.sa3(0,new V.U(0,0,1))
x=u.x
x.sa3(0,new V.U(0,1,0))
x=u.z
x.sa3(0,new V.U(1,0,0))
x=u.z
if(x.c===C.b){x.c=C.f
x.b9()
x.bj(100)
t=x.a
t.a=null
t.Z(null)}x.bj(10)
p=new M.f5()
y=O.cf(y)
p.d=y
y.b8(p.gdL(),p.gdM())
p.e=null
p.f=null
p.r=null
p.x=null
o=new X.fW()
o.b=1.0471975511965976
o.c=0.1
o.d=2000
o.saC(null)
y=o.b
if(!$.l.$2(y,1.0471975511965976)){v=o.b
o.b=1.0471975511965976
y=new D.P("fov",v,1.0471975511965976,o,[P.t])
y.b=!0
o.aw(y)}y=o.c
if(!$.l.$2(y,0.1)){v=o.c
o.c=0.1
y=new D.P("near",v,0.1,o,[P.t])
y.b=!0
o.aw(y)}y=o.d
if(!$.l.$2(y,2000)){v=o.d
o.d=2000
y=new D.P("far",v,2000,o,[P.t])
y.b=!0
o.aw(y)}y=p.a
if(y!==o){if(y!=null){y=y.gB()
y.toString
x=H.e(p.ga2(),w)
C.a.M(y.a,x)}v=p.a
p.a=o
y=o.gB()
y.toString
x=H.e(p.ga2(),w)
C.a.h(y.a,x)
y=new D.P("camera",v,p.a,p,[X.d2])
y.b=!0
p.ag(y)}n=new X.fc()
y=new V.bA(0,0,0,1)
n.a=y
n.b=!0
n.c=2000
n.d=!0
n.e=0
n.f=!1
y=V.dx(0,0,1,1)
n.r=y
y=p.b
if(y!==n){if(y!=null){y=y.gB()
y.toString
x=H.e(p.ga2(),w)
C.a.M(y.a,x)}v=p.b
p.b=n
y=n.gB()
y.toString
x=H.e(p.ga2(),w)
C.a.h(y.a,x)
y=new D.P("target",v,p.b,p,[X.dF])
y.b=!0
p.ag(y)}p.scU(null)
p.scU(u)
p.d.h(0,z)
p.a.saC(U.d6(V.an(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=document.getElementById("threeDart")
if(m==null)H.o(P.p("Failed to find an element with the identifier, threeDart."))
l=E.hx(m,!0,!0,!0,!1)
y=l.d
if(y!==p){if(y!=null){y=y.gB()
y.toString
x=H.e(l.gbQ(),w)
C.a.M(y.a,x)}l.d=p
y=p.gB()
y.toString
w=H.e(l.gbQ(),w)
C.a.h(y.a,w)
l.de()}B.k0(l)}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dh.prototype
return J.fj.prototype}if(typeof a=="string")return J.bZ.prototype
if(a==null)return J.di.prototype
if(typeof a=="boolean")return J.fi.prototype
if(a.constructor==Array)return J.bC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.bM=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.bC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.cO=function(a){if(a==null)return a
if(a.constructor==Array)return J.bC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.jF=function(a){if(typeof a=="number")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c1.prototype
return a}
J.jG=function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c1.prototype
return a}
J.bN=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.a)return a
return J.c7(a)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).q(a,b)}
J.eE=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jF(a).au(a,b)}
J.cU=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jG(a).j(a,b)}
J.eF=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jP(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bM(a).k(a,b)}
J.eG=function(a,b,c,d){return J.bN(a).cc(a,b,c,d)}
J.ca=function(a,b,c){return J.bM(a).eQ(a,b,c)}
J.cV=function(a,b){return J.cO(a).w(a,b)}
J.eH=function(a,b){return J.cO(a).F(a,b)}
J.az=function(a){return J.I(a).gK(a)}
J.bP=function(a){return J.cO(a).gN(a)}
J.aZ=function(a){return J.bM(a).gl(a)}
J.ab=function(a){return J.I(a).i(a)}
var $=I.p
C.k=W.ce.prototype
C.m=W.eU.prototype
C.v=J.m.prototype
C.a=J.bC.prototype
C.h=J.dh.prototype
C.w=J.di.prototype
C.e=J.bD.prototype
C.j=J.bZ.prototype
C.D=J.bE.prototype
C.E=W.fR.prototype
C.p=J.fX.prototype
C.l=J.c1.prototype
C.q=W.br.prototype
C.r=W.i5.prototype
C.t=new P.fU()
C.i=new P.iT()
C.b=new A.bS(0,"ColorSourceType.None")
C.f=new A.bS(1,"ColorSourceType.Solid")
C.c=new A.bS(2,"ColorSourceType.Texture2D")
C.d=new A.bS(3,"ColorSourceType.TextureCube")
C.u=new P.b2(5e6)
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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

C.z=function(getTagFallback) {
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
C.A=function() {
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
C.B=function(hooks) {
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
C.C=function(hooks) {
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
$.ah=0
$.b_=null
$.cY=null
$.cH=!1
$.ew=null
$.eq=null
$.eC=null
$.c6=null
$.c8=null
$.cP=null
$.aR=null
$.bv=null
$.bw=null
$.cI=!1
$.K=C.i
$.dc=null
$.db=null
$.da=null
$.d9=null
$.l=V.fL()
$.ds=null
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
I.$lazy(y,x,w)}})(["d8","$get$d8",function(){return H.ev("_$dart_dartClosure")},"cm","$get$cm",function(){return H.ev("_$dart_js")},"dK","$get$dK",function(){return H.ak(H.c0({
toString:function(){return"$receiver$"}}))},"dL","$get$dL",function(){return H.ak(H.c0({$method$:null,
toString:function(){return"$receiver$"}}))},"dM","$get$dM",function(){return H.ak(H.c0(null))},"dN","$get$dN",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dR","$get$dR",function(){return H.ak(H.c0(void 0))},"dS","$get$dS",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dP","$get$dP",function(){return H.ak(H.dQ(null))},"dO","$get$dO",function(){return H.ak(function(){try{null.$method$}catch(z){return z.message}}())},"dU","$get$dU",function(){return H.ak(H.dQ(void 0))},"dT","$get$dT",function(){return H.ak(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cE","$get$cE",function(){return P.i6()},"bx","$get$bx",function(){return[]},"d7","$get$d7",function(){return{}},"e3","$get$e3",function(){return Z.a9(0)},"e1","$get$e1",function(){return Z.a9(511)},"au","$get$au",function(){return Z.a9(1)},"at","$get$at",function(){return Z.a9(2)},"as","$get$as",function(){return Z.a9(4)},"av","$get$av",function(){return Z.a9(8)},"aw","$get$aw",function(){return Z.a9(16)},"bp","$get$bp",function(){return Z.a9(32)},"bq","$get$bq",function(){return Z.a9(64)},"e2","$get$e2",function(){return Z.a9(96)},"aP","$get$aP",function(){return Z.a9(128)},"ar","$get$ar",function(){return Z.a9(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.v]},{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:-1,args:[W.aj]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.L,[P.h,E.aB]]},{func:1,ret:P.E,args:[F.ac]},{func:1,ret:P.E,args:[D.v]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.n,args:[P.L]},{func:1,args:[,]},{func:1,ret:P.E,args:[,]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:-1,args:[P.L,[P.h,D.T]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.L,[P.h,V.ad]]},{func:1,args:[P.n]},{func:1,ret:-1,args:[P.a],opt:[P.ae]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:[P.ax,,],args:[,]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.ag,args:[W.H]},{func:1,ret:W.Y,args:[W.H]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[P.N]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,args:[,P.n]},{func:1,ret:P.ag,args:[P.t,P.t]},{func:1,ret:P.ag,args:[[P.h,D.T]]},{func:1,ret:V.a1,args:[P.t]},{func:1,ret:P.E,args:[F.aq,P.t,P.t]},{func:1,ret:P.E,args:[W.a4]},{func:1,ret:P.E,args:[P.aM]},{func:1,ret:-1,args:[W.br]}]
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
if(x==y)H.k4(d||a)
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
Isolate.cM=a.cM
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
if(typeof dartMainRunner==="function")dartMainRunner(X.ez,[])
else X.ez([])})})()
//# sourceMappingURL=test.dart.js.map
