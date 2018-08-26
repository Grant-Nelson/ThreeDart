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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dd(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.de=function(){}
var dart=[["","",,H,{"^":"",lV:{"^":"a;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cw:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dh==null){H.kI()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.k(P.eC("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cN()]
if(v!=null)return v
v=H.kN(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cN(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
u:function(a,b){return a===b},
gV:function(a){return H.br(a)},
j:["dY",function(a){return"Instance of '"+H.aZ(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h5:{"^":"m;",
j:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isa7:1},
dR:{"^":"m;",
u:function(a,b){return null==b},
j:function(a){return"null"},
gV:function(a){return 0},
$isI:1},
cO:{"^":"m;",
gV:function(a){return 0},
j:["dZ",function(a){return String(a)}]},
hJ:{"^":"cO;"},
cp:{"^":"cO;"},
bV:{"^":"cO;",
j:function(a){var z=a[$.$get$dB()]
if(z==null)return this.dZ(a)
return"JavaScript function for "+H.j(J.a8(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscK:1},
bT:{"^":"m;$ti",
h:function(a,b){H.F(b,H.z(a,0))
if(!!a.fixed$length)H.p(P.ah("add"))
a.push(b)},
F:function(a,b){var z
if(!!a.fixed$length)H.p(P.ah("remove"))
for(z=0;z<a.length;++z)if(J.G(a[z],b)){a.splice(z,1)
return!0}return!1},
bT:function(a,b){var z,y
H.v(b,"$isf",[H.z(a,0)],"$asf")
if(!!a.fixed$length)H.p(P.ah("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
M:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.k(P.be(a))}},
a2:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.ac(z,y,H.j(a[y]))
return z.join(b)},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
gca:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.k(H.h3())},
av:function(a,b){var z
for(z=0;z<a.length;++z)if(J.G(a[z],b))return!0
return!1},
j:function(a){return P.cL(a,"[","]")},
ga0:function(a){return new J.aq(a,a.length,0,[H.z(a,0)])},
gV:function(a){return H.br(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.ah("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.c9(b,"newLength",null))
if(b<0)throw H.k(P.bs(b,0,null,"newLength",null))
a.length=b},
ac:function(a,b,c){H.Z(b)
H.F(c,H.z(a,0))
if(!!a.immutable$list)H.p(P.ah("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c2(a,b))
if(b>=a.length||b<0)throw H.k(H.c2(a,b))
a[b]=c},
$isf:1,
$isd:1,
n:{
h4:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.c9(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.k(P.bs(a,0,4294967295,"length",null))
return J.dO(new Array(a),b)},
dO:function(a,b){return J.bm(H.e(a,[b]))},
bm:function(a){H.c6(a)
a.fixed$length=Array
return a}}},
lU:{"^":"bT;$ti"},
aq:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
I:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.k(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bU:{"^":"m;",
gh1:function(a){return a===0?1/a<0:a<0},
hz:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.k(P.ah(""+a+".toInt()"))},
c8:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.k(P.ah(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(P.ah(""+a+".round()"))},
dM:function(a,b){var z
if(b>20)throw H.k(P.bs(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gh1(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.k(H.c1(b))
return a*b},
dU:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
e0:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cW(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.cW(a,b)},
cW:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.k(P.ah("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
cU:function(a,b){var z
if(a>0)z=this.fg(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fg:function(a,b){return b>31?0:a>>>b},
aq:function(a,b){if(typeof b!=="number")throw H.k(H.c1(b))
return a<b},
$isw:1,
$isS:1},
dQ:{"^":"bU;",$isJ:1},
dP:{"^":"bU;"},
ck:{"^":"m;",
eh:function(a,b){if(b>=a.length)throw H.k(H.c2(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.T(b)
if(typeof b!=="string")throw H.k(P.c9(b,null,null))
return a+b},
cr:function(a,b,c){H.Z(c)
if(c==null)c=a.length
if(b>c)throw H.k(P.cY(b,null,null))
if(c>a.length)throw H.k(P.cY(c,null,null))
return a.substring(b,c)},
cq:function(a,b){return this.cr(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hf:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
af:function(a,b){return this.hf(a,b," ")},
fR:function(a,b,c){if(c>a.length)throw H.k(P.bs(c,0,a.length,null,null))
return H.kZ(a,b,c)},
j:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ishH:1,
$isq:1}}],["","",,H,{"^":"",
h3:function(){return new P.ib("No element")},
fQ:{"^":"f;"},
hg:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
I:function(){var z,y,x,w
z=this.a
y=J.c4(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.k(P.be(z))
w=this.c
if(typeof x!=="number")return H.r(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
hm:{"^":"f;a,b,$ti",
ga0:function(a){return new H.hn(J.c8(this.a),this.b,this.$ti)},
gl:function(a){return J.bb(this.a)},
E:function(a,b){return this.b.$1(J.dm(this.a,b))},
$asf:function(a,b){return[b]}},
hn:{"^":"cM;0a,b,c,$ti",
I:function(){var z=this.b
if(z.I()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascM:function(a,b){return[b]}},
iY:{"^":"f;a,b,$ti",
ga0:function(a){return new H.iZ(J.c8(this.a),this.b,this.$ti)}},
iZ:{"^":"cM;a,b,$ti",
I:function(){var z,y
for(z=this.a,y=this.b;z.I();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
ch:{"^":"a;$ti"}}],["","",,H,{"^":"",
kD:function(a){return init.types[H.Z(a)]},
kL:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isC},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a8(a)
if(typeof z!=="string")throw H.k(H.c1(a))
return z},
br:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aZ:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.w||!!J.K(a).$iscp){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.eh(w,0)===36)w=C.i.cq(w,1)
r=H.di(H.c6(H.aS(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
ac:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hR:function(a){return a.b?H.ac(a).getUTCFullYear()+0:H.ac(a).getFullYear()+0},
hP:function(a){return a.b?H.ac(a).getUTCMonth()+1:H.ac(a).getMonth()+1},
hL:function(a){return a.b?H.ac(a).getUTCDate()+0:H.ac(a).getDate()+0},
hM:function(a){return a.b?H.ac(a).getUTCHours()+0:H.ac(a).getHours()+0},
hO:function(a){return a.b?H.ac(a).getUTCMinutes()+0:H.ac(a).getMinutes()+0},
hQ:function(a){return a.b?H.ac(a).getUTCSeconds()+0:H.ac(a).getSeconds()+0},
hN:function(a){return a.b?H.ac(a).getUTCMilliseconds()+0:H.ac(a).getMilliseconds()+0},
r:function(a){throw H.k(H.c1(a))},
h:function(a,b){if(a==null)J.bb(a)
throw H.k(H.c2(a,b))},
c2:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,"index",null)
z=H.Z(J.bb(a))
if(!(b<0)){if(typeof z!=="number")return H.r(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.cY(b,"index",null)},
c1:function(a){return new P.aM(!0,a,null,null)},
ks:function(a){if(typeof a!=="number")throw H.k(H.c1(a))
return a},
k:function(a){var z
if(a==null)a=new P.e3()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fi})
z.name=""}else z.toString=H.fi
return z},
fi:function(){return J.a8(this.dartException)},
p:function(a){throw H.k(a)},
x:function(a){throw H.k(P.be(a))},
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.cU(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cQ(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e2(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ek()
u=$.$get$el()
t=$.$get$em()
s=$.$get$en()
r=$.$get$er()
q=$.$get$es()
p=$.$get$ep()
$.$get$eo()
o=$.$get$eu()
n=$.$get$et()
m=v.ae(y)
if(m!=null)return z.$1(H.cQ(H.T(y),m))
else{m=u.ae(y)
if(m!=null){m.method="call"
return z.$1(H.cQ(H.T(y),m))}else{m=t.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=r.ae(y)
if(m==null){m=q.ae(y)
if(m==null){m=p.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=o.ae(y)
if(m==null){m=n.ae(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e2(H.T(y),m))}}return z.$1(new H.iI(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e9()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aM(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e9()
return a},
b9:function(a){var z
if(a==null)return new H.eV(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eV(a)},
kA:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.ac(0,a[y],a[x])}return b},
kK:function(a,b,c,d,e,f){H.i(a,"$iscK")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.k(P.o("Unsupported number of arguments for wrapped closure"))},
b7:function(a,b){var z
H.Z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kK)
a.$identity=z
return z},
fy:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isd){z.$reflectionInfo=d
x=H.hT(z).r}else x=d
w=e?Object.create(new H.ic().constructor.prototype):Object.create(new H.cB(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aw
if(typeof u!=="number")return u.D()
$.aw=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dx(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kD,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ds:H.cC
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.k("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dx(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fv:function(a,b,c,d){var z=H.cC
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dx:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fx(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fv(y,!w,z,b)
if(y===0){w=$.aw
if(typeof w!=="number")return w.D()
$.aw=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bc
if(v==null){v=H.ca("self")
$.bc=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aw
if(typeof w!=="number")return w.D()
$.aw=w+1
t+=w
w="return function("+t+"){return this."
v=$.bc
if(v==null){v=H.ca("self")
$.bc=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fw:function(a,b,c,d){var z,y
z=H.cC
y=H.ds
switch(b?-1:a){case 0:throw H.k(H.i0("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fx:function(a,b){var z,y,x,w,v,u,t,s
z=$.bc
if(z==null){z=H.ca("self")
$.bc=z}y=$.dr
if(y==null){y=H.ca("receiver")
$.dr=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fw(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aw
if(typeof y!=="number")return y.D()
$.aw=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aw
if(typeof y!=="number")return y.D()
$.aw=y+1
return new Function(z+y+"}")()},
dd:function(a,b,c,d,e,f,g){var z,y
z=J.bm(H.c6(b))
H.Z(c)
y=!!J.K(d).$isd?J.bm(d):d
return H.fy(a,z,c,y,!!e,f,g)},
T:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.k(H.aD(a,"String"))},
kQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.aD(a,"num"))},
f7:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.k(H.aD(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.k(H.aD(a,"int"))},
ff:function(a,b){throw H.k(H.aD(a,H.T(b).substring(3)))},
kS:function(a,b){var z=J.c4(b)
throw H.k(H.fu(a,z.cr(b,3,z.gl(b))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.ff(a,b)},
b:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.kS(a,b)},
c6:function(a){if(a==null)return a
if(!!J.K(a).$isd)return a
throw H.k(H.aD(a,"List"))},
kM:function(a,b){if(a==null)return a
if(!!J.K(a).$isd)return a
if(J.K(a)[b])return a
H.ff(a,b)},
f8:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
c3:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f8(J.K(a))
if(z==null)return!1
y=H.fb(z,null,b,null)
return y},
c:function(a,b){var z,y
if(a==null)return a
if($.d9)return a
$.d9=!0
try{if(H.c3(a,b))return a
z=H.c7(b)
y=H.aD(a,z)
throw H.k(y)}finally{$.d9=!1}},
df:function(a,b){if(a!=null&&!H.dc(a,b))H.p(H.aD(a,H.c7(b)))
return a},
f2:function(a){var z
if(a instanceof H.t){z=H.f8(J.K(a))
if(z!=null)return H.c7(z)
return"Closure"}return H.aZ(a)},
l_:function(a){throw H.k(new P.fF(H.T(a)))},
f9:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
aS:function(a){if(a==null)return
return a.$ti},
mS:function(a,b,c){return H.ba(a["$as"+H.j(c)],H.aS(b))},
bO:function(a,b,c,d){var z
H.T(c)
H.Z(d)
z=H.ba(a["$as"+H.j(c)],H.aS(b))
return z==null?null:z[d]},
aR:function(a,b,c){var z
H.T(b)
H.Z(c)
z=H.ba(a["$as"+H.j(b)],H.aS(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Z(b)
z=H.aS(a)
return z==null?null:z[b]},
c7:function(a){var z=H.aT(a,null)
return z},
aT:function(a,b){var z,y
H.v(b,"$isd",[P.q],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.di(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.j(b[y])}if('func' in a)return H.ki(a,b)
if('futureOr' in a)return"FutureOr<"+H.aT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ki:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.q]
H.v(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aT(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aT(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aT(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aT(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kz(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.T(z[l])
n=n+m+H.aT(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
di:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isd",[P.q],"$asd")
if(a==null)return""
z=new P.bZ("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aT(u,c)}v="<"+z.j(0)+">"
return v},
ba:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b6:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aS(a)
y=J.K(a)
if(y[b]==null)return!1
return H.f5(H.ba(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.T(b)
H.c6(c)
H.T(d)
if(a==null)return a
z=H.b6(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.di(c,0,null)
throw H.k(H.aD(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f5:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ap(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ap(a[y],b,c[y],d))return!1
return!0},
mQ:function(a,b,c){return a.apply(b,H.ba(J.K(b)["$as"+H.j(c)],H.aS(b)))},
fc:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.fc(z)}return!1},
dc:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.fc(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dc(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c3(a,b)}y=J.K(a).constructor
x=H.aS(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ap(y,null,b,null)
return z},
F:function(a,b){if(a!=null&&!H.dc(a,b))throw H.k(H.aD(a,H.c7(b)))
return a},
ap:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ap(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.fb(a,b,c,d)
if('func' in a)return c.builtin$cls==="cK"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ap("type" in a?a.type:null,b,x,d)
else if(H.ap(a,b,x,d))return!0
else{if(!('$is'+"bj" in y.prototype))return!1
w=y.prototype["$as"+"bj"]
v=H.ba(w,z?a.slice(1):null)
return H.ap(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c7(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f5(H.ba(r,z),b,u,d)},
fb:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ap(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ap(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ap(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ap(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kP(m,b,l,d)},
kP:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ap(c[w],d,a[w],b))return!1}return!0},
mR:function(a,b,c){Object.defineProperty(a,H.T(b),{value:c,enumerable:false,writable:true,configurable:true})},
kN:function(a){var z,y,x,w,v,u
z=H.T($.fa.$1(a))
y=$.cv[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.T($.f4.$2(a,z))
if(z!=null){y=$.cv[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cy(x)
$.cv[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cx[z]=x
return x}if(v==="-"){u=H.cy(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fe(a,x)
if(v==="*")throw H.k(P.eC(z))
if(init.leafTags[z]===true){u=H.cy(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fe(a,x)},
fe:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dj(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cy:function(a){return J.dj(a,!1,null,!!a.$isC)},
kO:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cy(z)
else return J.dj(z,c,null,null)},
kI:function(){if(!0===$.dh)return
$.dh=!0
H.kJ()},
kJ:function(){var z,y,x,w,v,u,t,s
$.cv=Object.create(null)
$.cx=Object.create(null)
H.kE()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fg.$1(v)
if(u!=null){t=H.kO(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kE:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.b5(C.z,H.b5(C.E,H.b5(C.n,H.b5(C.n,H.b5(C.D,H.b5(C.A,H.b5(C.B(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fa=new H.kF(v)
$.f4=new H.kG(u)
$.fg=new H.kH(t)},
b5:function(a,b){return a(b)||b},
kZ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hS:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hT:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bm(z)
y=z[0]
x=z[1]
return new H.hS(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ix:{"^":"a;a,b,c,d,e,f",
ae:function(a){var z,y,x
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
aC:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.q])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ix(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
co:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eq:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hF:{"^":"a_;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
e2:function(a,b){return new H.hF(a,b==null?null:b.method)}}},
h6:{"^":"a_;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
cQ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h6(a,y,z?null:b.receiver)}}},
iI:{"^":"a_;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l2:{"^":"t:19;a",
$1:function(a){if(!!J.K(a).$isa_)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eV:{"^":"a;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isas:1},
t:{"^":"a;",
j:function(a){return"Closure '"+H.aZ(this).trim()+"'"},
gdQ:function(){return this},
$iscK:1,
gdQ:function(){return this}},
ec:{"^":"t;"},
ic:{"^":"ec;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cB:{"^":"ec;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cB))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.br(this.a)
else y=typeof z!=="object"?J.aL(z):H.br(z)
return(y^H.br(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aZ(z)+"'")},
n:{
cC:function(a){return a.a},
ds:function(a){return a.c},
ca:function(a){var z,y,x,w,v
z=new H.cB("self","target","receiver","name")
y=J.bm(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iy:{"^":"a_;a",
j:function(a){return this.a},
n:{
aD:function(a,b){return new H.iy("TypeError: "+H.j(P.cg(a))+": type '"+H.f2(a)+"' is not a subtype of type '"+b+"'")}}},
ft:{"^":"a_;a",
j:function(a){return this.a},
n:{
fu:function(a,b){return new H.ft("CastError: "+H.j(P.cg(a))+": type '"+H.f2(a)+"' is not a subtype of type '"+b+"'")}}},
i_:{"^":"a_;a",
j:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
i0:function(a){return new H.i_(a)}}},
cP:{"^":"hk;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaz:function(a){return new H.hb(this,[H.z(this,0)])},
fS:function(a,b){var z=this.b
if(z==null)return!1
return this.ek(z,b)},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.be(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.be(w,b)
x=y==null?null:y.b
return x}else return this.h0(b)},
h0:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cI(z,J.aL(a)&0x3ffffff)
x=this.dz(y,a)
if(x<0)return
return y[x].b},
ac:function(a,b,c){var z,y,x,w,v,u
H.F(b,H.z(this,0))
H.F(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bK()
this.b=z}this.cv(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bK()
this.c=y}this.cv(y,b,c)}else{x=this.d
if(x==null){x=this.bK()
this.d=x}w=J.aL(b)&0x3ffffff
v=this.cI(x,w)
if(v==null)this.bR(x,w,[this.bL(b,c)])
else{u=this.dz(v,b)
if(u>=0)v[u].b=c
else v.push(this.bL(b,c))}}},
M:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.k(P.be(this))
z=z.c}},
cv:function(a,b,c){var z
H.F(b,H.z(this,0))
H.F(c,H.z(this,1))
z=this.be(a,b)
if(z==null)this.bR(a,b,this.bL(b,c))
else z.b=c},
eu:function(){this.r=this.r+1&67108863},
bL:function(a,b){var z,y
z=new H.ha(H.F(a,H.z(this,0)),H.F(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eu()
return z},
dz:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.G(a[y].a,b))return y
return-1},
j:function(a){return P.dW(this)},
be:function(a,b){return a[b]},
cI:function(a,b){return a[b]},
bR:function(a,b,c){a[b]=c},
en:function(a,b){delete a[b]},
ek:function(a,b){return this.be(a,b)!=null},
bK:function(){var z=Object.create(null)
this.bR(z,"<non-identifier-key>",z)
this.en(z,"<non-identifier-key>")
return z},
$isdU:1},
ha:{"^":"a;a,b,0c,0d"},
hb:{"^":"fQ;a,$ti",
gl:function(a){return this.a.a},
ga0:function(a){var z,y
z=this.a
y=new H.hc(z,z.r,this.$ti)
y.c=z.e
return y}},
hc:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.be(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kF:{"^":"t:19;a",
$1:function(a){return this.a(a)}},
kG:{"^":"t:39;a",
$2:function(a,b){return this.a(a,b)}},
kH:{"^":"t:37;a",
$1:function(a){return this.a(H.T(a))}}}],["","",,H,{"^":"",
kz:function(a){return J.dO(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b3:function(a){return a},
aQ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.k(H.c2(b,a))},
hA:{"^":"m;",$ismz:1,"%":"DataView;ArrayBufferView;cW|eP|eQ|hz|eR|eS|aN"},
cW:{"^":"hA;",
gl:function(a){return a.length},
$isC:1,
$asC:I.de},
hz:{"^":"eQ;",
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
$asch:function(){return[P.w]},
$asu:function(){return[P.w]},
$isf:1,
$asf:function(){return[P.w]},
$isd:1,
$asd:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
aN:{"^":"eS;",
$asch:function(){return[P.J]},
$asu:function(){return[P.J]},
$isf:1,
$asf:function(){return[P.J]},
$isd:1,
$asd:function(){return[P.J]}},
m4:{"^":"aN;",
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m5:{"^":"aN;",
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int32Array"},
m6:{"^":"aN;",
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m7:{"^":"aN;",
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m8:{"^":"aN;",
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m9:{"^":"aN;",
gl:function(a){return a.length},
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ma:{"^":"aN;",
gl:function(a){return a.length},
i:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eP:{"^":"cW+u;"},
eQ:{"^":"eP+ch;"},
eR:{"^":"cW+u;"},
eS:{"^":"eR+ch;"}}],["","",,P,{"^":"",
j0:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kp()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b7(new P.j2(z),1)).observe(y,{childList:true})
return new P.j1(z,y,x)}else if(self.setImmediate!=null)return P.kq()
return P.kr()},
mF:[function(a){self.scheduleImmediate(H.b7(new P.j3(H.c(a,{func:1,ret:-1})),0))},"$1","kp",4,0,10],
mG:[function(a){self.setImmediate(H.b7(new P.j4(H.c(a,{func:1,ret:-1})),0))},"$1","kq",4,0,10],
mH:[function(a){H.c(a,{func:1,ret:-1})
P.jZ(0,a)},"$1","kr",4,0,10],
ei:function(a,b){var z
H.c(b,{func:1,ret:-1,args:[P.b_]})
z=C.h.a6(a.a,1000)
return P.k_(z<0?0:z,b)},
kl:function(a,b){if(H.c3(a,{func:1,args:[P.a,P.as]}))return b.ho(a,null,P.a,P.as)
if(H.c3(a,{func:1,args:[P.a]}))return H.c(a,{func:1,ret:null,args:[P.a]})
throw H.k(P.c9(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kk:function(){var z,y
for(;z=$.b4,z!=null;){$.bM=null
y=z.b
$.b4=y
if(y==null)$.bL=null
z.a.$0()}},
mP:[function(){$.da=!0
try{P.kk()}finally{$.bM=null
$.da=!1
if($.b4!=null)$.$get$d6().$1(P.f6())}},"$0","f6",0,0,3],
f1:function(a){var z=new P.eJ(H.c(a,{func:1,ret:-1}))
if($.b4==null){$.bL=z
$.b4=z
if(!$.da)$.$get$d6().$1(P.f6())}else{$.bL.b=z
$.bL=z}},
ko:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
z=$.b4
if(z==null){P.f1(a)
$.bM=$.bL
return}y=new P.eJ(a)
x=$.bM
if(x==null){y.b=z
$.bM=y
$.b4=y}else{y.b=x.b
x.b=y
$.bM=y
if(y.b==null)$.bL=y}},
kT:function(a){var z,y
z={func:1,ret:-1}
H.c(a,z)
y=$.P
if(C.j===y){P.cu(null,null,C.j,a)
return}y.toString
P.cu(null,null,y,H.c(y.cZ(a),z))},
iv:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b_]}
H.c(b,z)
y=$.P
if(y===C.j){y.toString
return P.ei(a,b)}x=y.d_(b,P.b_)
$.P.toString
return P.ei(a,H.c(x,z))},
ct:function(a,b,c,d,e){var z={}
z.a=d
P.ko(new P.km(z,e))},
f_:function(a,b,c,d,e){var z,y
H.c(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
f0:function(a,b,c,d,e,f,g){var z,y
H.c(d,{func:1,ret:f,args:[g]})
H.F(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
kn:function(a,b,c,d,e,f,g,h,i){var z,y
H.c(d,{func:1,ret:g,args:[h,i]})
H.F(e,h)
H.F(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cu:function(a,b,c,d){var z
H.c(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cZ(d):c.fP(d,-1)
P.f1(d)},
j2:{"^":"t:22;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j1:{"^":"t:30;a,b,c",
$1:function(a){var z,y
this.a.a=H.c(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j3:{"^":"t:2;a",
$0:function(){this.a.$0()}},
j4:{"^":"t:2;a",
$0:function(){this.a.$0()}},
eY:{"^":"a;a,0b,c",
e9:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b7(new P.k1(this,b),0),a)
else throw H.k(P.ah("`setTimeout()` not found."))},
ea:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b7(new P.k0(this,a,Date.now(),b),0),a)
else throw H.k(P.ah("Periodic timer."))},
$isb_:1,
n:{
jZ:function(a,b){var z=new P.eY(!0,0)
z.e9(a,b)
return z},
k_:function(a,b){var z=new P.eY(!1,0)
z.ea(a,b)
return z}}},
k1:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k0:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.e0(w,x)}z.c=y
this.d.$1(z)}},
b2:{"^":"a;0a,b,c,d,e,$ti",
h7:function(a){if(this.c!==6)return!0
return this.b.b.ck(H.c(this.d,{func:1,ret:P.a7,args:[P.a]}),a.a,P.a7,P.a)},
h_:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.c3(z,{func:1,args:[P.a,P.as]}))return H.df(w.ht(z,a.a,a.b,null,y,P.as),x)
else return H.df(w.ck(H.c(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aJ:{"^":"a;cV:a<,b,0f8:c<,$ti",
dL:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kl(b,y)}H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aJ(0,$.P,[c])
w=b==null?1:3
this.cw(new P.b2(x,w,a,b,[z,c]))
return x},
hy:function(a,b){return this.dL(a,null,b)},
cw:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isb2")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaJ")
z=y.a
if(z<4){y.cw(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cu(null,null,z,H.c(new P.ji(this,a),{func:1,ret:-1}))}},
cO:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isb2")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaJ")
y=u.a
if(y<4){u.cO(a)
return}this.a=y
this.c=u.c}z.a=this.bg(a)
y=this.b
y.toString
P.cu(null,null,y,H.c(new P.jn(z,this),{func:1,ret:-1}))}},
bN:function(){var z=H.i(this.c,"$isb2")
this.c=null
return this.bg(z)},
bg:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cC:function(a){var z,y,x,w
z=H.z(this,0)
H.df(a,{futureOr:1,type:z})
y=this.$ti
x=H.b6(a,"$isbj",y,"$asbj")
if(x){z=H.b6(a,"$isaJ",y,null)
if(z)P.eL(a,this)
else P.jj(a,this)}else{w=this.bN()
H.F(a,z)
this.a=4
this.c=a
P.bI(this,w)}},
bF:[function(a,b){var z
H.i(b,"$isas")
z=this.bN()
this.a=8
this.c=new P.aj(a,b)
P.bI(this,z)},function(a){return this.bF(a,null)},"hG","$2","$1","gei",4,2,36],
$isbj:1,
n:{
jj:function(a,b){var z,y,x
b.a=1
try{a.dL(new P.jk(b),new P.jl(b),null)}catch(x){z=H.aU(x)
y=H.b9(x)
P.kT(new P.jm(b,z,y))}},
eL:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaJ")
if(z>=4){y=b.bN()
b.a=a.a
b.c=a.c
P.bI(b,y)}else{y=H.i(b.c,"$isb2")
b.a=2
b.c=a
a.cO(y)}},
bI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isaj")
y=y.b
u=v.a
t=v.b
y.toString
P.ct(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bI(z.a,b)}y=z.a
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
if(p){H.i(r,"$isaj")
y=y.b
u=r.a
t=r.b
y.toString
P.ct(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.jq(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jp(x,b,r).$0()}else if((y&2)!==0)new P.jo(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.K(y).$isbj){if(y.a>=4){n=H.i(t.c,"$isb2")
t.c=null
b=t.bg(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eL(y,t)
return}}m=b.b
n=H.i(m.c,"$isb2")
m.c=null
b=m.bg(n)
y=x.a
u=x.b
if(!y){H.F(u,H.z(m,0))
m.a=4
m.c=u}else{H.i(u,"$isaj")
m.a=8
m.c=u}z.a=m
y=m}}}},
ji:{"^":"t:2;a,b",
$0:function(){P.bI(this.a,this.b)}},
jn:{"^":"t:2;a,b",
$0:function(){P.bI(this.b,this.a.a)}},
jk:{"^":"t:22;a",
$1:function(a){var z=this.a
z.a=0
z.cC(a)}},
jl:{"^":"t:35;a",
$2:function(a,b){this.a.bF(a,H.i(b,"$isas"))},
$1:function(a){return this.$2(a,null)}},
jm:{"^":"t:2;a,b,c",
$0:function(){this.a.bF(this.b,this.c)}},
jq:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dJ(H.c(w.d,{func:1}),null)}catch(v){y=H.aU(v)
x=H.b9(v)
if(this.d){w=H.i(this.a.a.c,"$isaj").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isaj")
else u.b=new P.aj(y,x)
u.a=!0
return}if(!!J.K(z).$isbj){if(z instanceof P.aJ&&z.gcV()>=4){if(z.gcV()===8){w=this.b
w.b=H.i(z.gf8(),"$isaj")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hy(new P.jr(t),null)
w.a=!1}}},
jr:{"^":"t:32;a",
$1:function(a){return this.a}},
jp:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.F(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.ck(H.c(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aU(t)
y=H.b9(t)
x=this.a
x.b=new P.aj(z,y)
x.a=!0}}},
jo:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isaj")
w=this.c
if(w.h7(z)&&w.e!=null){v=this.b
v.b=w.h_(z)
v.a=!1}}catch(u){y=H.aU(u)
x=H.b9(u)
w=H.i(this.a.a.c,"$isaj")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aj(y,x)
s.a=!0}}},
eJ:{"^":"a;a,0b"},
d1:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aJ(0,$.P,[P.J])
z.a=0
this.h4(new P.ie(z,this),!0,new P.ig(z,y),y.gei())
return y}},
ie:{"^":"t;a,b",
$1:function(a){H.F(a,H.aR(this.b,"d1",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.aR(this.b,"d1",0)]}}},
ig:{"^":"t:2;a,b",
$0:function(){this.b.cC(this.a.a)}},
ea:{"^":"a;$ti"},
b_:{"^":"a;"},
aj:{"^":"a;a,b",
j:function(a){return H.j(this.a)},
$isa_:1},
k6:{"^":"a;",$ismE:1},
km:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e3()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.k(z)
x=H.k(z)
x.stack=y.j(0)
throw x}},
jL:{"^":"k6;",
hu:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.f_(null,null,this,a,-1)}catch(x){z=H.aU(x)
y=H.b9(x)
P.ct(null,null,this,z,H.i(y,"$isas"))}},
hv:function(a,b,c){var z,y,x
H.c(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.f0(null,null,this,a,b,-1,c)}catch(x){z=H.aU(x)
y=H.b9(x)
P.ct(null,null,this,z,H.i(y,"$isas"))}},
fP:function(a,b){return new P.jN(this,H.c(a,{func:1,ret:b}),b)},
cZ:function(a){return new P.jM(this,H.c(a,{func:1,ret:-1}))},
d_:function(a,b){return new P.jO(this,H.c(a,{func:1,ret:-1,args:[b]}),b)},
dJ:function(a,b){H.c(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.f_(null,null,this,a,b)},
ck:function(a,b,c,d){H.c(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.P===C.j)return a.$1(b)
return P.f0(null,null,this,a,b,c,d)},
ht:function(a,b,c,d,e,f){H.c(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.P===C.j)return a.$2(b,c)
return P.kn(null,null,this,a,b,c,d,e,f)},
ho:function(a,b,c,d){return H.c(a,{func:1,ret:b,args:[c,d]})}},
jN:{"^":"t;a,b,c",
$0:function(){return this.a.dJ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jM:{"^":"t:3;a,b",
$0:function(){return this.a.hu(this.b)}},
jO:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.hv(this.b,H.F(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
he:function(a,b,c){H.c6(a)
return H.v(H.kA(a,new H.cP(0,0,[b,c])),"$isdU",[b,c],"$asdU")},
hd:function(a,b){return new H.cP(0,0,[a,b])},
hf:function(a,b,c,d){return new P.jx(0,0,[d])},
h2:function(a,b,c){var z,y
if(P.db(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bN()
C.a.h(y,a)
try{P.kj(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.eb(b,H.kM(z,"$isf"),", ")+c
return y.charCodeAt(0)==0?y:y},
cL:function(a,b,c){var z,y,x
if(P.db(a))return b+"..."+c
z=new P.bZ(b)
y=$.$get$bN()
C.a.h(y,a)
try{x=z
x.a=P.eb(x.gaG(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaG()+c
y=z.gaG()
return y.charCodeAt(0)==0?y:y},
db:function(a){var z,y
for(z=0;y=$.$get$bN(),z<y.length;++z)if(a===y[z])return!0
return!1},
kj:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga0(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.I())return
w=H.j(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.I()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.I()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.I();t=s,s=r){r=z.gP(z);++x
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
dW:function(a){var z,y,x
z={}
if(P.db(a))return"{...}"
y=new P.bZ("")
try{C.a.h($.$get$bN(),a)
x=y
x.a=x.gaG()+"{"
z.a=!0
J.fm(a,new P.hl(z,y))
z=y
z.a=z.gaG()+"}"}finally{z=$.$get$bN()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaG()
return z.charCodeAt(0)==0?z:z},
jx:{"^":"js;a,0b,0c,0d,0e,0f,r,$ti",
ga0:function(a){return P.eO(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.F(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d8()
this.b=z}return this.cA(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d8()
this.c=y}return this.cA(y,b)}else return this.eb(0,b)},
eb:function(a,b){var z,y,x
H.F(b,H.z(this,0))
z=this.d
if(z==null){z=P.d8()
this.d=z}y=this.cD(b)
x=z[y]
if(x==null)z[y]=[this.bE(b)]
else{if(this.cH(x,b)>=0)return!1
x.push(this.bE(b))}return!0},
F:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cP(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cP(this.c,b)
else return this.f1(0,b)},
f1:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eq(z,b)
x=this.cH(y,b)
if(x<0)return!1
this.cX(y.splice(x,1)[0])
return!0},
cA:function(a,b){H.F(b,H.z(this,0))
if(H.i(a[b],"$isd7")!=null)return!1
a[b]=this.bE(b)
return!0},
cP:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isd7")
if(z==null)return!1
this.cX(z)
delete a[b]
return!0},
cB:function(){this.r=this.r+1&67108863},
bE:function(a){var z,y
z=new P.d7(H.F(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cB()
return z},
cX:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cB()},
cD:function(a){return J.aL(a)&0x3ffffff},
eq:function(a,b){return a[this.cD(b)]},
cH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.G(a[y].a,b))return y
return-1},
n:{
d8:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d7:{"^":"a;a,0b,0c"},
jy:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.be(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.F(z.a,H.z(this,0))
this.c=z.b
return!0}}},
n:{
eO:function(a,b,c){var z=new P.jy(a,b,[c])
z.c=a.e
return z}}},
js:{"^":"i1;"},
cS:{"^":"jz;",$isf:1,$isd:1},
u:{"^":"a;$ti",
ga0:function(a){return new H.hg(a,this.gl(a),0,[H.bO(this,a,"u",0)])},
E:function(a,b){return this.i(a,b)},
hB:function(a,b){var z,y,x
z=H.e([],[H.bO(this,a,"u",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.r(x)
if(!(y<x))break
C.a.ac(z,y,this.i(a,y));++y}return z},
hA:function(a){return this.hB(a,!0)},
j:function(a){return P.cL(a,"[","]")}},
hk:{"^":"af;"},
hl:{"^":"t:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
af:{"^":"a;$ti",
M:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.bO(this,a,"af",0),H.bO(this,a,"af",1)]})
for(z=J.c8(this.gaz(a));z.I();){y=z.gP(z)
b.$2(y,this.i(a,y))}},
gl:function(a){return J.bb(this.gaz(a))},
j:function(a){return P.dW(a)},
$isa5:1},
i2:{"^":"a;$ti",
j:function(a){return P.cL(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dn("index"))
if(b<0)H.p(P.bs(b,0,null,"index",null))
for(z=P.eO(this,this.r,H.z(this,0)),y=0;z.I();){x=z.d
if(b===y)return x;++y}throw H.k(P.N(b,this,"index",null,y))},
$isf:1},
i1:{"^":"i2;"},
jz:{"^":"a+u;"}}],["","",,P,{"^":"",
fT:function(a){var z=J.K(a)
if(!!z.$ist)return z.j(a)
return"Instance of '"+H.aZ(a)+"'"},
hh:function(a,b,c,d){var z,y
H.F(b,d)
z=J.h4(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.ac(z,y,b)
return H.v(z,"$isd",[d],"$asd")},
hi:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.ga0(a);x.I();)C.a.h(y,H.F(x.gP(x),c))
if(b)return y
return H.v(J.bm(y),"$isd",z,"$asd")},
cg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fT(a)},
o:function(a){return new P.eK(a)},
dk:function(a){H.kR(a)},
a7:{"^":"a;"},
"+bool":0,
ar:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ar))return!1
return this.a===b.a&&this.b===b.b},
gV:function(a){var z=this.a
return(z^C.h.cU(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.fG(H.hR(this))
y=P.bQ(H.hP(this))
x=P.bQ(H.hL(this))
w=P.bQ(H.hM(this))
v=P.bQ(H.hO(this))
u=P.bQ(H.hQ(this))
t=P.fH(H.hN(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fG:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bQ:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"S;"},
"+double":0,
bg:{"^":"a;a",
k:function(a,b){return new P.bg(C.h.Y(this.a*b))},
aq:function(a,b){return C.h.aq(this.a,H.i(b,"$isbg").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bg))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.fP()
y=this.a
if(y<0)return"-"+new P.bg(0-y).j(0)
x=z.$1(C.h.a6(y,6e7)%60)
w=z.$1(C.h.a6(y,1e6)%60)
v=new P.fO().$1(y%1e6)
return""+C.h.a6(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
dI:function(a,b,c,d,e,f){return new P.bg(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fO:{"^":"t:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fP:{"^":"t:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a_:{"^":"a;"},
e3:{"^":"a_;",
j:function(a){return"Throw of null."}},
aM:{"^":"a_;a,b,c,d",
gbH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbG:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbH()+y+x
if(!this.a)return w
v=this.gbG()
u=P.cg(this.b)
return w+v+": "+H.j(u)},
n:{
fn:function(a){return new P.aM(!1,null,null,a)},
c9:function(a,b,c){return new P.aM(!0,a,b,c)},
dn:function(a){return new P.aM(!1,null,a,"Must not be null")}}},
e6:{"^":"aM;e,f,a,b,c,d",
gbH:function(){return"RangeError"},
gbG:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
cY:function(a,b,c){return new P.e6(null,null,!0,a,b,"Value not in range")},
bs:function(a,b,c,d,e){return new P.e6(b,c,!0,a,d,"Invalid value")}}},
h1:{"^":"aM;e,l:f>,a,b,c,d",
gbH:function(){return"RangeError"},
gbG:function(){if(J.fj(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
N:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.bb(b))
return new P.h1(b,z,!0,a,c,"Index out of range")}}},
iJ:{"^":"a_;a",
j:function(a){return"Unsupported operation: "+this.a},
n:{
ah:function(a){return new P.iJ(a)}}},
iH:{"^":"a_;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eC:function(a){return new P.iH(a)}}},
ib:{"^":"a_;a",
j:function(a){return"Bad state: "+this.a}},
fB:{"^":"a_;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cg(z))+"."},
n:{
be:function(a){return new P.fB(a)}}},
hG:{"^":"a;",
j:function(a){return"Out of Memory"},
$isa_:1},
e9:{"^":"a;",
j:function(a){return"Stack Overflow"},
$isa_:1},
fF:{"^":"a_;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eK:{"^":"a;a",
j:function(a){return"Exception: "+this.a}},
J:{"^":"S;"},
"+int":0,
f:{"^":"a;$ti",
gl:function(a){var z,y
z=this.ga0(this)
for(y=0;z.I();)++y
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dn("index"))
if(b<0)H.p(P.bs(b,0,null,"index",null))
for(z=this.ga0(this),y=0;z.I();){x=z.gP(z)
if(b===y)return x;++y}throw H.k(P.N(b,this,"index",null,y))},
j:function(a){return P.h2(this,"(",")")}},
cM:{"^":"a;$ti"},
d:{"^":"a;$ti",$isf:1},
"+List":0,
a5:{"^":"a;$ti"},
I:{"^":"a;",
gV:function(a){return P.a.prototype.gV.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
S:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gV:function(a){return H.br(this)},
j:function(a){return"Instance of '"+H.aZ(this)+"'"},
toString:function(){return this.j(this)}},
as:{"^":"a;"},
q:{"^":"a;",$ishH:1},
"+String":0,
bZ:{"^":"a;aG:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
eb:function(a,b,c){var z=J.c8(b)
if(!z.I())return a
if(c.length===0){do a+=H.j(z.gP(z))
while(z.I())}else{a+=H.j(z.gP(z))
for(;z.I();)a=a+c+H.j(z.gP(z))}return a}}}}],["","",,W,{"^":"",
cE:function(a,b){var z=document.createElement("canvas")
return z},
fR:function(a){H.i(a,"$isa4")
return"wheel"},
cr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eN:function(a,b,c,d){var z,y
z=W.cr(W.cr(W.cr(W.cr(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f3:function(a,b){var z
H.c(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.d_(a,b)},
aV:{"^":"a3;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
l4:{"^":"d_;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
l5:{"^":"m;0l:length=","%":"AccessibleNodeList"},
l6:{"^":"aV;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
l7:{"^":"aV;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
fs:{"^":"m;","%":";Blob"},
cD:{"^":"aV;",
bB:function(a,b,c){if(c!=null)return a.getContext(b,P.kt(c,null))
return a.getContext(b)},
dS:function(a,b){return this.bB(a,b,null)},
$iscD:1,
"%":"HTMLCanvasElement"},
dv:{"^":"m;",$isdv:1,"%":"CanvasRenderingContext2D"},
ld:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lf:{"^":"ce;0l:length=","%":"CSSPerspective"},
lg:{"^":"cH;0q:x=,0t:y=","%":"CSSPositionValue"},
lh:{"^":"ce;0q:x=,0t:y=","%":"CSSRotation"},
bf:{"^":"m;",$isbf:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
li:{"^":"ce;0q:x=,0t:y=","%":"CSSScale"},
fD:{"^":"j8;0l:length=",
dT:function(a,b){var z=a.getPropertyValue(this.cz(a,b))
return z==null?"":z},
cz:function(a,b){var z,y
z=$.$get$dA()
y=z[b]
if(typeof y==="string")return y
y=this.fh(a,b)
z[b]=y
return y},
fh:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fI()+b
if(z in a)return z
return b},
f9:function(a,b,c,d){a.setProperty(b,c,d)},
gbY:function(a){return a.bottom},
gal:function(a){return a.height},
gaR:function(a){return a.left},
gb6:function(a){return a.right},
gb8:function(a){return a.top},
gap:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fE:{"^":"a;",
gaR:function(a){return this.dT(a,"left")}},
cH:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ce:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lj:{"^":"cH;0l:length=","%":"CSSTransformValue"},
lk:{"^":"ce;0q:x=,0t:y=","%":"CSSTranslation"},
ll:{"^":"cH;0l:length=","%":"CSSUnparsedValue"},
lm:{"^":"m;0l:length=","%":"DataTransferItemList"},
ln:{"^":"m;0q:x=,0t:y=","%":"DeviceAcceleration"},
lo:{"^":"m;",
j:function(a){return String(a)},
"%":"DOMException"},
lp:{"^":"fM;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
fM:{"^":"m;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
lq:{"^":"ja;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[[P.ad,P.S]]},
$asu:function(){return[[P.ad,P.S]]},
$isf:1,
$asf:function(){return[[P.ad,P.S]]},
$isd:1,
$asd:function(){return[[P.ad,P.S]]},
$asy:function(){return[[P.ad,P.S]]},
"%":"ClientRectList|DOMRectList"},
fN:{"^":"m;",
j:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gap(a))+" x "+H.j(this.gal(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b6(b,"$isad",[P.S],"$asad")
if(!z)return!1
z=J.c5(b)
return a.left===z.gaR(b)&&a.top===z.gb8(b)&&this.gap(a)===z.gap(b)&&this.gal(a)===z.gal(b)},
gV:function(a){return W.eN(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gap(a)&0x1FFFFFFF,this.gal(a)&0x1FFFFFFF)},
gbY:function(a){return a.bottom},
gal:function(a){return a.height},
gaR:function(a){return a.left},
gb6:function(a){return a.right},
gb8:function(a){return a.top},
gap:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isad:1,
$asad:function(){return[P.S]},
"%":";DOMRectReadOnly"},
lr:{"^":"jc;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[P.q]},
$asu:function(){return[P.q]},
$isf:1,
$asf:function(){return[P.q]},
$isd:1,
$asd:function(){return[P.q]},
$asy:function(){return[P.q]},
"%":"DOMStringList"},
ls:{"^":"m;0l:length=","%":"DOMTokenList"},
j7:{"^":"cS;a,b",
gl:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.i(z[b],"$isa3")},
h:function(a,b){this.a.appendChild(b)
return b},
ga0:function(a){var z=this.hA(this)
return new J.aq(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.a3]},
$asf:function(){return[W.a3]},
$asd:function(){return[W.a3]}},
a3:{"^":"L;",
gd2:function(a){return new W.j7(a,a.children)},
gbl:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.aq()
if(x<0)x=-x*0
if(typeof w!=="number")return w.aq()
if(w<0)w=-w*0
return new P.ad(z,y,x,w,[P.S])},
j:function(a){return a.localName},
$isa3:1,
"%":";Element"},
aa:{"^":"m;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a4:{"^":"m;",
cY:["dX",function(a,b,c,d){H.c(c,{func:1,args:[W.aa]})
if(c!=null)this.ec(a,b,c,!1)}],
ec:function(a,b,c,d){return a.addEventListener(b,H.b7(H.c(c,{func:1,args:[W.aa]}),1),!1)},
$isa4:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eT|eU|eW|eX"},
bi:{"^":"fs;",$isbi:1,"%":"File"},
lL:{"^":"jh;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bi]},
$asu:function(){return[W.bi]},
$isf:1,
$asf:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asy:function(){return[W.bi]},
"%":"FileList"},
lM:{"^":"a4;0l:length=","%":"FileWriter"},
lP:{"^":"aV;0l:length=","%":"HTMLFormElement"},
bk:{"^":"m;",$isbk:1,"%":"Gamepad"},
lQ:{"^":"d_;0q:x=,0t:y=","%":"Gyroscope"},
lR:{"^":"m;0l:length=","%":"History"},
lS:{"^":"ju;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.L]},
$asu:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ci:{"^":"m;0d6:data=",$isci:1,"%":"ImageData"},
dN:{"^":"aV;",$isdN:1,"%":"HTMLImageElement"},
bn:{"^":"d3;",$isbn:1,"%":"KeyboardEvent"},
lX:{"^":"m;",
j:function(a){return String(a)},
"%":"Location"},
lY:{"^":"d_;0q:x=,0t:y=","%":"Magnetometer"},
m_:{"^":"m;0l:length=","%":"MediaList"},
m0:{"^":"a4;",
cY:function(a,b,c,d){H.c(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.dX(a,b,c,!1)},
"%":"MessagePort"},
m1:{"^":"jA;",
i:function(a,b){return P.aK(a.get(H.T(b)))},
M:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.q,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gaz:function(a){var z=H.e([],[P.q])
this.M(a,new W.hw(z))
return z},
gl:function(a){return a.size},
$asaf:function(){return[P.q,null]},
$isa5:1,
$asa5:function(){return[P.q,null]},
"%":"MIDIInputMap"},
hw:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m2:{"^":"jB;",
i:function(a,b){return P.aK(a.get(H.T(b)))},
M:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.q,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gaz:function(a){var z=H.e([],[P.q])
this.M(a,new W.hx(z))
return z},
gl:function(a){return a.size},
$asaf:function(){return[P.q,null]},
$isa5:1,
$asa5:function(){return[P.q,null]},
"%":"MIDIOutputMap"},
hx:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bo:{"^":"m;",$isbo:1,"%":"MimeType"},
m3:{"^":"jD;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bo]},
$asu:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asy:function(){return[W.bo]},
"%":"MimeTypeArray"},
az:{"^":"d3;",$isaz:1,"%":"PointerEvent;DragEvent|MouseEvent"},
j6:{"^":"cS;a",
ga0:function(a){var z=this.a.childNodes
return new W.dK(z,z.length,-1,[H.bO(C.G,z,"y",0)])},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asu:function(){return[W.L]},
$asf:function(){return[W.L]},
$asd:function(){return[W.L]}},
L:{"^":"a4;",
j:function(a){var z=a.nodeValue
return z==null?this.dY(a):z},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hB:{"^":"jF;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.L]},
$asu:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
bp:{"^":"m;0l:length=",$isbp:1,"%":"Plugin"},
me:{"^":"jJ;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bp]},
$asu:function(){return[W.bp]},
$isf:1,
$asf:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asy:function(){return[W.bp]},
"%":"PluginArray"},
mj:{"^":"jP;",
i:function(a,b){return P.aK(a.get(H.T(b)))},
M:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.q,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gaz:function(a){var z=H.e([],[P.q])
this.M(a,new W.hZ(z))
return z},
gl:function(a){return a.size},
$asaf:function(){return[P.q,null]},
$isa5:1,
$asa5:function(){return[P.q,null]},
"%":"RTCStatsReport"},
hZ:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mk:{"^":"aV;0l:length=","%":"HTMLSelectElement"},
d_:{"^":"a4;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bu:{"^":"a4;",$isbu:1,"%":"SourceBuffer"},
ml:{"^":"eU;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bu]},
$asu:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asy:function(){return[W.bu]},
"%":"SourceBufferList"},
bv:{"^":"m;",$isbv:1,"%":"SpeechGrammar"},
mm:{"^":"jR;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bv]},
$asu:function(){return[W.bv]},
$isf:1,
$asf:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$asy:function(){return[W.bv]},
"%":"SpeechGrammarList"},
bw:{"^":"m;0l:length=",$isbw:1,"%":"SpeechRecognitionResult"},
mo:{"^":"jU;",
i:function(a,b){return a.getItem(H.T(b))},
M:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.q,P.q]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaz:function(a){var z=H.e([],[P.q])
this.M(a,new W.id(z))
return z},
gl:function(a){return a.length},
$asaf:function(){return[P.q,P.q]},
$isa5:1,
$asa5:function(){return[P.q,P.q]},
"%":"Storage"},
id:{"^":"t:31;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bx:{"^":"m;",$isbx:1,"%":"CSSStyleSheet|StyleSheet"},
by:{"^":"aV;",$isby:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bz:{"^":"a4;",$isbz:1,"%":"TextTrack"},
bA:{"^":"a4;",$isbA:1,"%":"TextTrackCue|VTTCue"},
mt:{"^":"jY;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bA]},
$asu:function(){return[W.bA]},
$isf:1,
$asf:function(){return[W.bA]},
$isd:1,
$asd:function(){return[W.bA]},
$asy:function(){return[W.bA]},
"%":"TextTrackCueList"},
mu:{"^":"eX;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bz]},
$asu:function(){return[W.bz]},
$isf:1,
$asf:function(){return[W.bz]},
$isd:1,
$asd:function(){return[W.bz]},
$asy:function(){return[W.bz]},
"%":"TextTrackList"},
mv:{"^":"m;0l:length=","%":"TimeRanges"},
bC:{"^":"m;",$isbC:1,"%":"Touch"},
b0:{"^":"d3;",$isb0:1,"%":"TouchEvent"},
mw:{"^":"k3;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bC]},
$asu:function(){return[W.bC]},
$isf:1,
$asf:function(){return[W.bC]},
$isd:1,
$asd:function(){return[W.bC]},
$asy:function(){return[W.bC]},
"%":"TouchList"},
mx:{"^":"m;0l:length=","%":"TrackDefaultList"},
d3:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mA:{"^":"m;",
j:function(a){return String(a)},
"%":"URL"},
mC:{"^":"m;0q:x=","%":"VRStageBoundsPoint"},
mD:{"^":"a4;0l:length=","%":"VideoTrackList"},
bH:{"^":"az;",
gfW:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.k(P.ah("deltaY is not supported"))},
gfV:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.k(P.ah("deltaX is not supported"))},
$isbH:1,
"%":"WheelEvent"},
j_:{"^":"a4;",
f4:function(a,b){return a.requestAnimationFrame(H.b7(H.c(b,{func:1,ret:-1,args:[P.S]}),1))},
eo:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mI:{"^":"k8;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bf]},
$asu:function(){return[W.bf]},
$isf:1,
$asf:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asy:function(){return[W.bf]},
"%":"CSSRuleList"},
mJ:{"^":"fN;",
j:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b6(b,"$isad",[P.S],"$asad")
if(!z)return!1
z=J.c5(b)
return a.left===z.gaR(b)&&a.top===z.gb8(b)&&a.width===z.gap(b)&&a.height===z.gal(b)},
gV:function(a){return W.eN(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gal:function(a){return a.height},
gap:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mL:{"^":"ka;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bk]},
$asu:function(){return[W.bk]},
$isf:1,
$asf:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asy:function(){return[W.bk]},
"%":"GamepadList"},
mM:{"^":"kc;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.L]},
$asu:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mN:{"^":"ke;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bw]},
$asu:function(){return[W.bw]},
$isf:1,
$asf:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asy:function(){return[W.bw]},
"%":"SpeechRecognitionResultList"},
mO:{"^":"kg;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bx]},
$asu:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"StyleSheetList"},
jd:{"^":"d1;a,b,c,$ti",
h4:function(a,b,c,d){var z=H.z(this,0)
H.c(a,{func:1,ret:-1,args:[z]})
H.c(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
mK:{"^":"jd;a,b,c,$ti"},
je:{"^":"ea;a,b,c,d,e,$ti",
fl:function(){var z=this.d
if(z!=null&&this.a<=0)J.fl(this.b,this.c,z,!1)},
n:{
Y:function(a,b,c,d,e){var z=c==null?null:W.f3(new W.jf(c),W.aa)
z=new W.je(0,a,b,z,!1,[e])
z.fl()
return z}}},
jf:{"^":"t:4;a",
$1:function(a){return this.a.$1(H.i(a,"$isaa"))}},
y:{"^":"a;$ti",
ga0:function(a){return new W.dK(a,this.gl(a),-1,[H.bO(this,a,"y",0)])}},
dK:{"^":"a;a,b,c,0d,$ti",
I:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fk(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
j8:{"^":"m+fE;"},
j9:{"^":"m+u;"},
ja:{"^":"j9+y;"},
jb:{"^":"m+u;"},
jc:{"^":"jb+y;"},
jg:{"^":"m+u;"},
jh:{"^":"jg+y;"},
jt:{"^":"m+u;"},
ju:{"^":"jt+y;"},
jA:{"^":"m+af;"},
jB:{"^":"m+af;"},
jC:{"^":"m+u;"},
jD:{"^":"jC+y;"},
jE:{"^":"m+u;"},
jF:{"^":"jE+y;"},
jI:{"^":"m+u;"},
jJ:{"^":"jI+y;"},
jP:{"^":"m+af;"},
eT:{"^":"a4+u;"},
eU:{"^":"eT+y;"},
jQ:{"^":"m+u;"},
jR:{"^":"jQ+y;"},
jU:{"^":"m+af;"},
jX:{"^":"m+u;"},
jY:{"^":"jX+y;"},
eW:{"^":"a4+u;"},
eX:{"^":"eW+y;"},
k2:{"^":"m+u;"},
k3:{"^":"k2+y;"},
k7:{"^":"m+u;"},
k8:{"^":"k7+y;"},
k9:{"^":"m+u;"},
ka:{"^":"k9+y;"},
kb:{"^":"m+u;"},
kc:{"^":"kb+y;"},
kd:{"^":"m+u;"},
ke:{"^":"kd+y;"},
kf:{"^":"m+u;"},
kg:{"^":"kf+y;"}}],["","",,P,{"^":"",
kw:function(a){var z,y
z=J.K(a)
if(!!z.$isci){y=z.gd6(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eZ(a.data,a.height,a.width)},
kv:function(a){if(a instanceof P.eZ)return{data:a.a,height:a.b,width:a.c}
return a},
aK:function(a){var z,y,x,w,v
if(a==null)return
z=P.hd(P.q,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.T(y[w])
z.ac(0,v,a[v])}return z},
kt:function(a,b){var z={}
a.M(0,new P.ku(z))
return z},
dG:function(){var z=$.dF
if(z==null){z=J.cz(window.navigator.userAgent,"Opera",0)
$.dF=z}return z},
fI:function(){var z,y
z=$.dC
if(z!=null)return z
y=$.dD
if(y==null){y=J.cz(window.navigator.userAgent,"Firefox",0)
$.dD=y}if(y)z="-moz-"
else{y=$.dE
if(y==null){y=!P.dG()&&J.cz(window.navigator.userAgent,"Trident/",0)
$.dE=y}if(y)z="-ms-"
else z=P.dG()?"-o-":"-webkit-"}$.dC=z
return z},
eZ:{"^":"a;d6:a>,b,c",$isci:1},
ku:{"^":"t:16;a",
$2:function(a,b){this.a[a]=b}},
fW:{"^":"cS;a,b",
gbJ:function(){var z,y,x
z=this.b
y=H.aR(z,"u",0)
x=W.a3
return new H.hm(new H.iY(z,H.c(new P.fX(),{func:1,ret:P.a7,args:[y]}),[y]),H.c(new P.fY(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bb(this.gbJ().a)},
i:function(a,b){var z=this.gbJ()
return z.b.$1(J.dm(z.a,b))},
ga0:function(a){var z=P.hi(this.gbJ(),!1,W.a3)
return new J.aq(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.a3]},
$asf:function(){return[W.a3]},
$asd:function(){return[W.a3]}},
fX:{"^":"t:29;",
$1:function(a){return!!J.K(H.i(a,"$isL")).$isa3}},
fY:{"^":"t:28;",
$1:function(a){return H.b(H.i(a,"$isL"),"$isa3")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eM:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bq:{"^":"a;q:a>,t:b>,$ti",
j:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b6(b,"$isbq",[P.S],null)
if(!z)return!1
z=this.a
y=J.c5(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gV:function(a){var z,y
z=J.aL(this.a)
y=J.aL(this.b)
return P.eM(P.bJ(P.bJ(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.z(this,0)
z=H.F(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bq(z,H.F(x*b,y),this.$ti)}},
jK:{"^":"a;$ti",
gb6:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.F(z+this.c,H.z(this,0))},
gbY:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.F(z+this.d,H.z(this,0))},
j:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b6(b,"$isad",[P.S],"$asad")
if(!z)return!1
z=this.a
y=J.c5(b)
x=y.gaR(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb8(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.z(this,0)
if(H.F(z+this.c,w)===y.gb6(b)){if(typeof x!=="number")return x.D()
z=H.F(x+this.d,w)===y.gbY(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.aL(z)
x=this.b
w=J.aL(x)
if(typeof z!=="number")return z.D()
v=H.z(this,0)
z=H.F(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.F(x+this.d,v)
return P.eM(P.bJ(P.bJ(P.bJ(P.bJ(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d4:function(a,b){var z,y
H.v(b,"$isbq",[P.S],"$asbq")
z=b.a
y=this.a
if(typeof z!=="number")return z.dR()
if(typeof y!=="number")return H.r(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dR()
if(typeof y!=="number")return H.r(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
ad:{"^":"jK;aR:a>,b8:b>,ap:c>,al:d>,$ti"}}],["","",,P,{"^":"",lt:{"^":"Q;0q:x=,0t:y=","%":"SVGFEBlendElement"},lu:{"^":"Q;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},lv:{"^":"Q;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},lw:{"^":"Q;0q:x=,0t:y=","%":"SVGFECompositeElement"},lx:{"^":"Q;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},ly:{"^":"Q;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},lz:{"^":"Q;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},lA:{"^":"Q;0q:x=,0t:y=","%":"SVGFEFloodElement"},lB:{"^":"Q;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},lC:{"^":"Q;0q:x=,0t:y=","%":"SVGFEImageElement"},lD:{"^":"Q;0q:x=,0t:y=","%":"SVGFEMergeElement"},lE:{"^":"Q;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},lF:{"^":"Q;0q:x=,0t:y=","%":"SVGFEOffsetElement"},lG:{"^":"Q;0q:x=,0t:y=","%":"SVGFEPointLightElement"},lH:{"^":"Q;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},lI:{"^":"Q;0q:x=,0t:y=","%":"SVGFESpotLightElement"},lJ:{"^":"Q;0q:x=,0t:y=","%":"SVGFETileElement"},lK:{"^":"Q;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},lN:{"^":"Q;0q:x=,0t:y=","%":"SVGFilterElement"},lO:{"^":"bl;0q:x=,0t:y=","%":"SVGForeignObjectElement"},h_:{"^":"bl;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bl:{"^":"Q;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lT:{"^":"bl;0q:x=,0t:y=","%":"SVGImageElement"},bW:{"^":"m;",$isbW:1,"%":"SVGLength"},lW:{"^":"jw;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.i(a,b)},
$asu:function(){return[P.bW]},
$isf:1,
$asf:function(){return[P.bW]},
$isd:1,
$asd:function(){return[P.bW]},
$asy:function(){return[P.bW]},
"%":"SVGLengthList"},lZ:{"^":"Q;0q:x=,0t:y=","%":"SVGMaskElement"},bY:{"^":"m;",$isbY:1,"%":"SVGNumber"},mb:{"^":"jH;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.i(a,b)},
$asu:function(){return[P.bY]},
$isf:1,
$asf:function(){return[P.bY]},
$isd:1,
$asd:function(){return[P.bY]},
$asy:function(){return[P.bY]},
"%":"SVGNumberList"},md:{"^":"Q;0q:x=,0t:y=","%":"SVGPatternElement"},mf:{"^":"m;0q:x=,0t:y=","%":"SVGPoint"},mg:{"^":"m;0l:length=","%":"SVGPointList"},mh:{"^":"m;0q:x=,0t:y=","%":"SVGRect"},mi:{"^":"h_;0q:x=,0t:y=","%":"SVGRectElement"},mp:{"^":"jW;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.i(a,b)},
$asu:function(){return[P.q]},
$isf:1,
$asf:function(){return[P.q]},
$isd:1,
$asd:function(){return[P.q]},
$asy:function(){return[P.q]},
"%":"SVGStringList"},Q:{"^":"a3;",
gd2:function(a){return new P.fW(a,new W.j6(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mq:{"^":"bl;0q:x=,0t:y=","%":"SVGSVGElement"},ih:{"^":"bl;","%":"SVGTextPathElement;SVGTextContentElement"},ms:{"^":"ih;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},c_:{"^":"m;",$isc_:1,"%":"SVGTransform"},my:{"^":"k5;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.i(a,b)},
$asu:function(){return[P.c_]},
$isf:1,
$asf:function(){return[P.c_]},
$isd:1,
$asd:function(){return[P.c_]},
$asy:function(){return[P.c_]},
"%":"SVGTransformList"},mB:{"^":"bl;0q:x=,0t:y=","%":"SVGUseElement"},jv:{"^":"m+u;"},jw:{"^":"jv+y;"},jG:{"^":"m+u;"},jH:{"^":"jG+y;"},jV:{"^":"m+u;"},jW:{"^":"jV+y;"},k4:{"^":"m+u;"},k5:{"^":"k4+y;"}}],["","",,P,{"^":"",l8:{"^":"m;0l:length=","%":"AudioBuffer"},l9:{"^":"j5;",
i:function(a,b){return P.aK(a.get(H.T(b)))},
M:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.q,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gaz:function(a){var z=H.e([],[P.q])
this.M(a,new P.fp(z))
return z},
gl:function(a){return a.size},
$asaf:function(){return[P.q,null]},
$isa5:1,
$asa5:function(){return[P.q,null]},
"%":"AudioParamMap"},fp:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},la:{"^":"a4;0l:length=","%":"AudioTrackList"},fr:{"^":"a4;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mc:{"^":"fr;0l:length=","%":"OfflineAudioContext"},j5:{"^":"m+af;"}}],["","",,P,{"^":"",cZ:{"^":"m;",
dK:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.K(g)
if(!!y.$isci&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.kv(g))
return}if(!!y.$isdN&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.k(P.fn("Incorrect number or type of arguments"))},
hw:function(a,b,c,d,e,f,g){return this.dK(a,b,c,d,e,f,g,null,null,null)},
$iscZ:1,
"%":"WebGLRenderingContext"},ii:{"^":"m;",$isii:1,"%":"WebGLTexture"},iF:{"^":"m;",$isiF:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mn:{"^":"jT;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return P.aK(a.item(b))},
E:function(a,b){return this.i(a,b)},
$asu:function(){return[[P.a5,,,]]},
$isf:1,
$asf:function(){return[[P.a5,,,]]},
$isd:1,
$asd:function(){return[[P.a5,,,]]},
$asy:function(){return[[P.a5,,,]]},
"%":"SQLResultSetRowList"},jS:{"^":"m+u;"},jT:{"^":"jS+y;"}}],["","",,O,{"^":"",ak:{"^":"a;0a,0b,0c,0d,$ti",
bc:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cn:function(a,b,c){var z=H.aR(this,"ak",0)
H.c(b,{func:1,ret:P.a7,args:[[P.f,z]]})
z={func:1,ret:-1,args:[P.J,[P.f,z]]}
H.c(a,z)
H.c(c,z)
this.b=b
this.c=a
this.d=c},
aC:function(a,b){return this.cn(a,null,b)},
cN:function(a){var z
H.v(a,"$isf",[H.aR(this,"ak",0)],"$asf")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cL:function(a,b){var z
H.v(b,"$isf",[H.aR(this,"ak",0)],"$asf")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga0:function(a){var z=this.a
return new J.aq(z,z.length,0,[H.z(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aR(this,"ak",0)
H.F(b,z)
z=[z]
if(this.cN(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cL(x,H.e([b],z))}},
bT:function(a,b){var z,y
H.v(b,"$isf",[H.aR(this,"ak",0)],"$asf")
if(this.cN(b)){z=this.a
y=z.length
C.a.bT(z,b)
this.cL(y,b)}},
$isf:1,
n:{
cc:function(a){var z=new O.ak([a])
z.bc(a)
return z}}},cU:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
e4:function(a){var z=this.b
if(!(z==null))z.w(a)},
aD:function(){return this.e4(null)},
gT:function(a){var z=this.a
if(z.length>0)return C.a.gca(z)
else return V.ax()},
bz:function(a){var z=this.a
if(a==null)C.a.h(z,V.ax())
else C.a.h(z,a)
this.aD()},
aA:function(){var z=this.a
if(z.length>0){z.pop()
this.aD()}}}}],["","",,E,{"^":"",cA:{"^":"a;"},aE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbb:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gp()
y.toString
x=H.c(this.gdI(),{func:1,ret:-1,args:[D.l]})
C.a.F(y.a,x)}y=this.c
if(y!=null){y=y.gp()
y.toString
x=H.c(this.gdI(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.A("shape",z,this.c,this,[F.e7])
w.b=!0
this.ah(w)}},
sb1:function(a){var z,y,x,w
if(!J.G(this.r,a)){z=this.r
if(z!=null){y=z.gp()
y.toString
x=H.c(this.gdH(),{func:1,ret:-1,args:[D.l]})
C.a.F(y.a,x)}if(a!=null){y=a.gp()
y.toString
x=H.c(this.gdH(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}this.r=a
w=new D.A("mover",z,a,this,[U.ab])
w.b=!0
this.ah(w)}},
a7:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aS(0,b,this):null
if(!J.G(y,this.x)){x=this.x
this.x=y
w=new D.A("matrix",x,y,this,[V.ag])
w.b=!0
this.ah(w)}for(z=this.y.a,z=new J.aq(z,z.length,0,[H.z(z,0)]);z.I();)z.d.a7(0,b)},
a3:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gT(z))
else C.a.h(z.a,y.k(0,z.gT(z)))
z.aD()
a.cg(this.f)
z=a.dy
x=(z&&C.a).gca(z)
if(x!=null&&this.d!=null)x.b5(a,this)
for(z=this.y.a,z=new J.aq(z,z.length,0,[H.z(z,0)]);z.I();)z.d.a3(a)
a.ce()
a.dx.aA()},
gp:function(){var z=this.z
if(z==null){z=D.B()
this.z=z}return z},
ah:function(a){var z=this.z
if(!(z==null))z.w(a)},
X:function(){return this.ah(null)},
he:[function(a){H.i(a,"$isl")
this.e=null
this.ah(a)},function(){return this.he(null)},"is","$1","$0","gdI",0,2,0],
hd:[function(a){this.ah(H.i(a,"$isl"))},function(){return this.hd(null)},"ir","$1","$0","gdH",0,2,0],
hb:[function(a){this.ah(H.i(a,"$isl"))},function(){return this.hb(null)},"ip","$1","$0","gdG",0,2,0],
io:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isf",[E.aE],"$asf")
for(z=b.length,y=this.gdG(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.aF()
t.a=H.e([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.X()},"$2","gha",8,0,7],
iq:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isf",[E.aE],"$asf")
for(z=b.length,y=this.gdG(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.aF()
t.a=H.e([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.c(y,x)
C.a.F(t.a,y)}}this.X()},"$2","ghc",8,0,7],
$isaA:1,
n:{
cI:function(a,b,c,d,e,f){var z,y
z=new E.aE()
z.a=d
z.b=!0
y=O.cc(E.aE)
z.y=y
y.aC(z.gha(),z.ghc())
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
z.sbb(0,e)
z.sb1(c)
return z}}},hU:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e2:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ar(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cU()
y=[V.ag]
z.a=H.e([],y)
x=z.gp()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.c(new E.hW(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cU()
z.a=H.e([],y)
v=z.gp()
v.toString
x=H.c(new E.hX(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cU()
z.a=H.e([],y)
y=z.gp()
y.toString
w=H.c(new E.hY(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.aP])
this.dy=z
C.a.h(z,null)
this.fr=new H.cP(0,0,[P.q,A.bt])},
ghn:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gT(z)
y=this.db
y=z.k(0,y.gT(y))
this.z=y
z=y}return z},
gcf:function(){var z,y
z=this.ch
if(z==null){z=this.ghn()
y=this.dx
y=z.k(0,y.gT(y))
this.ch=y
z=y}return z},
gdN:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gT(z)
y=this.dx
y=z.k(0,y.gT(y))
this.cx=y
z=y}return z},
cg:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gca(z):a;(z&&C.a).h(z,y)},
ce:function(){var z=this.dy
if(z.length>1)z.pop()},
aV:function(a){var z=a.b
if(z.length===0)throw H.k(P.o("May not cache a shader with no name."))
if(this.fr.fS(0,z))throw H.k(P.o('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.ac(0,z,a)},
n:{
hV:function(a,b){var z=new E.hU(a,b)
z.e2(a,b)
return z}}},hW:{"^":"t:9;a",
$1:function(a){var z
H.i(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hX:{"^":"t:9;a",
$1:function(a){var z
H.i(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hY:{"^":"t:9;a",
$1:function(a){var z
H.i(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},is:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch",
gp:function(){var z=this.x
if(z==null){z=D.B()
this.x=z}return z},
e6:[function(a){var z
H.i(a,"$isl")
z=this.x
if(!(z==null))z.w(a)
this.hr()},function(){return this.e6(null)},"e5","$1","$0","gcs",0,2,0],
gfZ:function(){var z,y,x
z=Date.now()
y=C.h.a6(P.dI(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ar(z,!1)
return x/y},
cQ:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.r(z)
x=C.c.c8(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.c.c8(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hr:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.c(new E.iu(this),{func:1,ret:-1,args:[P.S]})
C.t.eo(z)
C.t.f4(z,W.f3(y,P.S))}},
hq:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cQ()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ar(w,!1)
x.y=P.dI(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aD()
w=x.db
C.a.sl(w.a,0)
w.aD()
w=x.dx
C.a.sl(w.a,0)
w.aD()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a3(this.e)}}catch(v){z=H.aU(v)
y=H.b9(v)
P.dk("Error: "+H.j(z))
P.dk("Stack: "+H.j(y))
throw H.k(z)}},
n:{
it:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscD)return E.eh(a,!0,!0,!0,!1)
y=W.cE(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd2(a).h(0,y)
w=E.eh(y,!0,!0,!0,!1)
w.a=a
return w},
eh:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.is()
y=P.he(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.q,null)
x=C.k.bB(a,"webgl",y)
x=H.i(x==null?C.k.bB(a,"experimental-webgl",y):x,"$iscZ")
if(x==null)H.p(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hV(x,a)
w=new T.im(x)
w.b=H.Z(x.getParameter(3379))
w.c=H.Z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iK(a)
v=new X.h7()
v.c=new X.ay(!1,!1,!1)
v.d=P.hf(null,null,null,P.J)
w.b=v
v=new X.hy(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hj(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iw(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.ea,P.a]])
w.z=v
u=document
t=W.az
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.c(w.geF(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.c(w.geK(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.c(w.geC(),q),!1,r))
v=w.z
p=W.bn
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.c(w.geM(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.c(w.geL(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.c(w.geP(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.c(w.geR(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.c(w.geQ(),s),!1,t))
p=w.z
o=W.bH;(p&&C.a).h(p,W.Y(a,H.T(W.fR(a)),H.c(w.geS(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.c(w.geG(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.c(w.geH(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.c(w.geT(),q),!1,r))
r=w.z
q=W.b0
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.c(w.gf0(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.c(w.geZ(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.c(w.gf_(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ar(Date.now(),!1)
z.ch=0
z.cQ()
return z}}},iu:{"^":"t:40;a",
$1:function(a){var z
H.kQ(a)
z=this.a
if(z.z){z.z=!1
z.hq()}}}}],["","",,Z,{"^":"",eI:{"^":"a;a,b",n:{
d5:function(a,b,c){var z
H.v(c,"$isd",[P.J],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.b3(c)),35044)
a.bindBuffer(b,null)
return new Z.eI(b,z)}}},dt:{"^":"cA;a,b,c,d,e",
H:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aU(y)
x=P.o('Failed to bind buffer attribute "'+J.a8(this.a)+'": '+H.j(z))
throw H.k(x)}},
j:function(a){return"["+J.a8(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},c0:{"^":"a;a",$islb:1},bd:{"^":"a;a,0b,c,d",
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
j:function(a){var z,y,x,w,v,u
z=[P.q]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].j(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a8(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.a2(y,", ")+"\nAttrs:   "+C.a.a2(u,", ")},
$ismr:1},cj:{"^":"a;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aZ(this.c)+"'")+"]"}},an:{"^":"a;a",
gcp:function(a){var z,y
z=this.a
y=(z&$.$get$a2().a)!==0?3:0
if((z&$.$get$au().a)!==0)y+=3
if((z&$.$get$at().a)!==0)y+=3
if((z&$.$get$ai().a)!==0)y+=2
if((z&$.$get$av().a)!==0)y+=3
if((z&$.$get$bF().a)!==0)y+=3
if((z&$.$get$bG().a)!==0)y+=4
if((z&$.$get$b1().a)!==0)++y
return(z&$.$get$aI().a)!==0?y+4:y},
fO:function(a){var z,y,x
z=$.$get$a2()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$au()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$at()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ai()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$av()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eH()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.an))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.e([],[P.q])
y=this.a
if((y&$.$get$a2().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$au().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$at().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$ai().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$av().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bF().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bG().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b1().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.a2(z,"|")},
n:{
ao:function(a){return new Z.an(a)}}}}],["","",,D,{"^":"",dw:{"^":"a;"},aF:{"^":"a;0a,0b,0c",
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.M(y,new D.fU(z))
return x!==0},
d7:function(){return this.w(null)},
hs:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.w(y)}}},
an:function(a){return this.hs(a,!0,!1)},
n:{
B:function(){var z=new D.aF()
z.a=H.e([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fU:{"^":"t:27;a",
$1:function(a){var z
H.c(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bR:{"^":"l;c,d,a,0b,$ti"},bS:{"^":"l;c,d,a,0b,$ti"},A:{"^":"l;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",du:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.j(this.a)},
n:{"^":"lc<"}},dS:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dS))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.j(this.a)}},dT:{"^":"l;c,a,0b"},h7:{"^":"a;0a,0b,0c,0d",
hk:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dT(a,this)
y.b=!0
return z.w(y)},
hg:function(a){var z,y
this.c=a.b
this.d.F(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dT(a,this)
y.b=!0
return z.w(y)}},dV:{"^":"cl;x,y,c,d,e,a,0b"},hj:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
at:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ar(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaL()
s=new X.bX(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cd:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.at(a,b))
return!0},
b3:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dV()
if(typeof z!=="number")return z.dP()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.at(a,b))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.at(a,b))
return!0},
hl:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.cV(new V.W(v*u,t*s),y,x,new P.ar(w,!1),this)
w.b=!0
z.w(w)
return!0},
eO:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ar(Date.now(),!1)
y=this.f
x=new X.dV(c,a,this.a.gaL(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.O(0,0)}},ay:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ay))return!1
if(this.a!==b.a)return!1
z=this.b
y=b.b
if(z==null?y!=null:z!==y)return!1
z=this.c
y=b.c
if(z==null?y!=null:z!==y)return!1
return!0},
j:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bX:{"^":"cl;x,y,z,Q,ch,c,d,e,a,0b"},hy:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bI:function(a,b,c){var z,y,x
z=new P.ar(Date.now(),!1)
y=this.a.gaL()
x=new X.bX(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cd:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bI(a,b,!0))
return!0},
b3:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dV()
if(typeof z!=="number")return z.dP()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bI(a,b,!0))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bI(a,b,!1))
return!0},
hm:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.cV(new V.W(w*v,u*t),y,b,new P.ar(x,!1),this)
x.b=!0
z.w(x)
return!0}},cV:{"^":"cl;x,c,d,e,a,0b"},cl:{"^":"l;"},ej:{"^":"cl;x,y,z,Q,ch,c,d,e,a,0b"},iw:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
at:function(a,b){var z,y,x,w
H.v(a,"$isd",[V.O],"$asd")
z=new P.ar(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaL()
w=new X.ej(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hj:function(a){var z
H.v(a,"$isd",[V.O],"$asd")
z=this.b
if(z==null)return!1
z.w(this.at(a,!0))
return!0},
hh:function(a){var z
H.v(a,"$isd",[V.O],"$asd")
z=this.c
if(z==null)return!1
z.w(this.at(a,!0))
return!0},
hi:function(a){var z
H.v(a,"$isd",[V.O],"$asd")
z=this.d
if(z==null)return!1
z.w(this.at(a,!1))
return!0}},iK:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaL:function(){var z=this.a
return V.aO(0,0,(z&&C.k).gbl(z).c,C.k.gbl(z).d)},
cF:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dS(z,new X.ay(y,a.altKey,a.shiftKey))},
aJ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ay(y,a.altKey,a.shiftKey)},
bS:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ay(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.N()
v=z.top
if(typeof x!=="number")return x.N()
return new V.O(y-w,x-v)},
aU:function(a){return new V.W(a.movementX,a.movementY)},
bM:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.c.Y(u.pageX)
C.c.Y(u.pageY)
s=z.left
C.c.Y(u.pageX)
C.a.h(y,new V.O(t-s,C.c.Y(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.du(z,new X.ay(y,a.altKey,a.shiftKey))},
hY:[function(a){this.f=!0},"$1","geK",4,0,4],
hQ:[function(a){this.f=!1},"$1","geC",4,0,4],
hT:[function(a){if(this.f)a.preventDefault()},"$1","geF",4,0,4],
i_:[function(a){var z
H.i(a,"$isbn")
if(!this.f)return
z=this.cF(a)
if(this.b.hk(z))a.preventDefault()},"$1","geM",4,0,24],
hZ:[function(a){var z
H.i(a,"$isbn")
if(!this.f)return
z=this.cF(a)
if(this.b.hg(z))a.preventDefault()},"$1","geL",4,0,24],
i1:[function(a){var z,y,x,w
H.i(a,"$isaz")
z=this.a
z.focus()
this.f=!0
this.aJ(a)
if(this.x){y=this.ar(a)
x=this.aU(a)
if(this.d.cd(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.au(a)
if(this.c.cd(y,w))a.preventDefault()},"$1","geP",4,0,5],
i3:[function(a){var z,y,x
H.i(a,"$isaz")
this.aJ(a)
z=this.ar(a)
if(this.x){y=this.aU(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b3(z,x))a.preventDefault()},"$1","geR",4,0,5],
hV:[function(a){var z,y,x,w
H.i(a,"$isaz")
z=this.a
if(!(z&&C.k).gbl(z).d4(0,new P.bq(a.clientX,a.clientY,[P.S]))){this.aJ(a)
y=this.ar(a)
if(this.x){x=this.aU(a)
if(this.d.b3(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b3(y,w))a.preventDefault()}},"$1","geH",4,0,5],
i2:[function(a){var z,y,x
H.i(a,"$isaz")
this.aJ(a)
z=this.ar(a)
if(this.x){y=this.aU(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","geQ",4,0,5],
hU:[function(a){var z,y,x,w
H.i(a,"$isaz")
z=this.a
if(!(z&&C.k).gbl(z).d4(0,new P.bq(a.clientX,a.clientY,[P.S]))){this.aJ(a)
y=this.ar(a)
if(this.x){x=this.aU(a)
if(this.d.b2(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b2(y,w))a.preventDefault()}},"$1","geG",4,0,5],
i4:[function(a){var z,y
H.i(a,"$isbH")
this.aJ(a)
z=new V.W((a&&C.r).gfV(a),C.r.gfW(a)).A(0,180)
if(this.x){if(this.d.hl(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.hm(z,y))a.preventDefault()},"$1","geS",4,0,25],
i5:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.au(this.y)
this.d.eO(w,v,x)}},"$1","geT",4,0,4],
ie:[function(a){var z
H.i(a,"$isb0")
this.a.focus()
this.f=!0
this.bS(a)
z=this.bM(a)
if(this.e.hj(z))a.preventDefault()},"$1","gf0",4,0,11],
ib:[function(a){var z
H.i(a,"$isb0")
this.bS(a)
z=this.bM(a)
if(this.e.hh(z))a.preventDefault()},"$1","geZ",4,0,11],
ic:[function(a){var z
H.i(a,"$isb0")
this.bS(a)
z=this.bM(a)
if(this.e.hi(z))a.preventDefault()},"$1","gf_",4,0,11]}}],["","",,D,{"^":"",cf:{"^":"a;0a,0b,0c,0d",
gp:function(){var z=this.d
if(z==null){z=D.B()
this.d=z}return z},
aE:[function(a){var z
H.i(a,"$isl")
z=this.d
if(!(z==null))z.w(a)},function(){return this.aE(null)},"hD","$1","$0","ge7",0,2,0],
$isX:1,
$isaA:1},X:{"^":"a;",$isaA:1},h8:{"^":"ak;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gp:function(){var z=this.Q
if(z==null){z=D.B()
this.Q=z}return z},
aE:function(a){var z=this.Q
if(!(z==null))z.w(a)},
eN:[function(a){var z
H.i(a,"$isl")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.eN(null)},"i0","$1","$0","gcM",0,2,0],
i6:[function(a){var z,y,x
H.v(a,"$isf",[D.X],"$asf")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.ej(x))return!1}return!0},"$1","geU",4,0,34],
hN:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.v(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcM(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.i(b[u],"$isX")
if(t instanceof D.cf)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aF()
s.a=H.e([],v)
s.c=0
t.d=s}H.c(x,w)
C.a.h(s.a,x)}z=new D.bR(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","gez",8,0,23],
i8:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.v(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcM(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.i(b[u],"$isX")
if(t instanceof D.cf)C.a.F(this.e,t)
s=t.d
if(s==null){s=new D.aF()
s.a=H.e([],v)
s.c=0
t.d=s}H.c(x,w)
C.a.F(s.a,x)}z=new D.bS(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","geW",8,0,23],
ej:function(a){var z=C.a.av(this.e,a)
return z},
$asf:function(){return[D.X]},
$asak:function(){return[D.X]}},hK:{"^":"a;",$isX:1,$isaA:1},ia:{"^":"a;",$isX:1,$isaA:1},ip:{"^":"a;",$isX:1,$isaA:1},iq:{"^":"a;",$isX:1,$isaA:1},ir:{"^":"a;",$isX:1,$isaA:1}}],["","",,V,{"^":"",
le:[function(a,b){if(typeof b!=="number")return b.N()
if(typeof a!=="number")return H.r(a)
return Math.abs(b-a)<=1e-9},"$2","hv",8,0,26],
l3:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.dU(a-b,z)
return(a<0?a+z:a)+b},
M:function(a,b,c){if(a==null)return C.i.af("null",c)
return C.i.af(C.c.dM($.n.$2(a,0)?0:a,b),c+b+1)},
b8:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isd",[P.w],"$asd")
z=H.e([],[P.q])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.M(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.ac(z,u,C.i.af(z[u],x))}return z},
bP:function(a,b){return C.c.hz(Math.pow(b,C.x.c8(Math.log(H.ks(a))/Math.log(b))))},
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
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}},
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
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}},
aX:{"^":"a;a,b,c,d,e,f,r,x,y",
O:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.i(a5,"$isaX")
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
return new V.aX(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.c.k(a3,s),C.c.k(a1,q)+C.c.k(a2,o)+C.c.k(a3,m),C.c.k(a1,k)+C.c.k(a2,j)+C.c.k(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aX))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
return!0},
j:function(a){var z,y,x,w,v,u,t,s
z=[P.w]
y=V.b8(H.e([this.a,this.d,this.r],z),3,0)
x=V.b8(H.e([this.b,this.e,this.x],z),3,0)
w=V.b8(H.e([this.c,this.f,this.y],z),3,0)
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
O:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
c9:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.n.$2(a2,0))return V.ax()
a3=1/a2
a4=-w
a5=-i
return V.aG((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.i(a7,"$isag")
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
return V.aG(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
b9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.V(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
z=b.z
if(!$.n.$2(z,this.z))return!1
z=b.Q
if(!$.n.$2(z,this.Q))return!1
z=b.ch
if(!$.n.$2(z,this.ch))return!1
z=b.cx
if(!$.n.$2(z,this.cx))return!1
z=b.cy
if(!$.n.$2(z,this.cy))return!1
z=b.db
if(!$.n.$2(z,this.db))return!1
z=b.dx
if(!$.n.$2(z,this.dx))return!1
return!0},
j:function(a){return this.K()},
dv:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.b8(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b8(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b8(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b8(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
B:function(a){return this.dv(a,3,0)},
K:function(){return this.dv("",3,0)},
n:{
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ax:function(){return V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
e_:function(a,b,c){return V.aG(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dZ:function(a,b,c,d){return V.aG(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
dY:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.C(c)))
y=b.aw(z)
x=y.A(0,Math.sqrt(y.C(y)))
w=z.aw(x)
v=new V.E(a.a,a.b,a.c)
return V.aG(x.a,w.a,z.a,x.L(0).C(v),x.b,w.b,z.b,w.L(0).C(v),x.c,w.c,z.c,z.L(0).C(v),0,0,0,1)}}},
O:{"^":"a;q:a>,t:b>",
N:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.O(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
V:{"^":"a;q:a>,t:b>,c",
D:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.V(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}},
aY:{"^":"a;q:a>,t:b>,c,d",
k:function(a,b){return new V.aY(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aY))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}},
cm:{"^":"a;q:a>,t:b>,c,d",
gam:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cm))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"},
n:{
aO:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cm(a,b,c,d)}}},
W:{"^":"a;a,b",
h2:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,21],
C:function(a){var z,y,x,w
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
return new V.W(z*b,y*b)},
A:function(a,b){var z,y
if($.n.$2(b,0))return new V.W(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.W(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
E:{"^":"a;a,b,c",
h2:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,21],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cb:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aw:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.E(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.n.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dA:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fz:{"^":"dw;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bD:function(a){var z=V.l3(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.B()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.w(a)},
sdO:function(a,b){},
sdD:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bD(z)}z=new D.A("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.R(z)}},
sdF:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bD(z)}z=new D.A("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.R(z)}},
sa9:function(a,b){var z,y
b=this.bD(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.A("location",y,b,this,[P.w])
z.b=!0
this.R(z)}},
sdE:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.A("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.R(z)}},
sW:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.A("velocity",x,a,this,[P.w])
z.b=!0
this.R(z)}},
sd5:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.A("dampening",y,a,this,[P.w])
z.b=!0
this.R(z)}},
a7:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa9(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sW(y)}},
n:{
dy:function(){var z=new U.fz()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dz:{"^":"ab;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
aS:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dz))return!1
return J.G(this.a,b.a)},
j:function(a){return"Constant: "+this.a.B("          ")},
n:{
cF:function(a){var z=new U.dz()
z.a=a
return z}}},dL:{"^":"ak;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
R:[function(a){var z
H.i(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.R(null)},"aF","$1","$0","gbd",0,2,0],
hE:[function(a,b){var z,y,x,w,v,u,t
z=U.ab
H.v(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gbd(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.bR(a,b,this,[z])
z.b=!0
this.R(z)},"$2","ge8",8,0,20],
i7:[function(a,b){var z,y,x,w,v,u,t
z=U.ab
H.v(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gbd(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.c(x,w)
C.a.F(t.a,x)}}z=new D.bS(a,b,this,[z])
z.b=!0
this.R(z)},"$2","geV",8,0,20],
aS:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.aq()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aq(z,z.length,0,[H.z(z,0)]),x=null;z.I();){y=z.d
if(y!=null){w=y.aS(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.ax():x
z=this.e
if(!(z==null))z.an(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dL))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.G(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asf:function(){return[U.ab]},
$asak:function(){return[U.ab]},
$isab:1,
n:{
dM:function(a){var z=new U.dL()
z.bc(U.ab)
z.aC(z.ge8(),z.geV())
z.e=null
z.f=V.ax()
z.r=0
return z}}},ab:{"^":"dw;"},iL:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.B()
this.fx=z}return z},
R:[function(a){var z
H.i(a,"$isl")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.R(null)},"aF","$1","$0","gbd",0,2,0],
bU:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.B()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.l]}
x=H.c(this.gev(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.B()
x.d=z}x=H.c(this.gew(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.B()
x.c=z}x=H.c(this.gex(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.B()
x.f=z}x=H.c(this.ger(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.B()
x.d=z}x=H.c(this.ges(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.B()
x.b=z}x=H.c(this.gfk(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.B()
x.d=z}x=H.c(this.gfj(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.B()
x.c=z}y=H.c(this.gfi(),y)
C.a.h(z.a,y)
return!0},
aj:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.L()
z=-z}if(this.r){if(typeof y!=="number")return y.L()
y=-y}return new V.W(z,y)},
hJ:[function(a){a=H.b(H.i(a,"$isl"),"$isbX")
if(!J.G(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gev",4,0,1],
hK:[function(a){var z,y,x,w,v,u,t
a=H.b(H.i(a,"$isl"),"$isbX")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.aj(new V.W(y.a,y.b).k(0,2).A(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aj(new V.W(x.a,x.b).k(0,2).A(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sa9(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.N(0,a.z)
this.dx=this.aj(new V.W(y.a,y.b).k(0,2).A(0,z.gam()))}this.aF()},"$1","gew",4,0,1],
hL:[function(a){var z,y,x
H.i(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sW(-y*10*z)
this.aF()}},"$1","gex",4,0,1],
hH:[function(a){if(H.b(H.i(a,"$isl"),"$isdV").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ger",4,0,1],
hI:[function(a){var z,y,x,w,v,u,t
a=H.b(H.i(a,"$isl"),"$isbX")
if(!J.G(this.d,a.x.b))return
z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aj(new V.W(x.a,x.b).k(0,2).A(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sa9(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.N(0,a.z)
this.dx=this.aj(new V.W(y.a,y.b).k(0,2).A(0,z.gam()))
this.aF()},"$1","ges",4,0,1],
ij:[function(a){H.i(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfk",4,0,1],
ii:[function(a){var z,y,x,w,v,u,t
a=H.b(H.i(a,"$isl"),"$isej")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.aj(new V.W(y.a,y.b).k(0,2).A(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aj(new V.W(x.a,x.b).k(0,2).A(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sa9(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.N(0,a.z)
this.dx=this.aj(new V.W(y.a,y.b).k(0,2).A(0,z.gam()))}this.aF()},"$1","gfj",4,0,1],
ih:[function(a){var z,y,x
H.i(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sW(-y*10*z)
this.aF()}},"$1","gfi",4,0,1],
aS:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.aq()
if(z<y){this.dy=y
x=b.y
this.c.a7(0,x)
this.b.a7(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aG(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aG(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isab:1,
n:{
eD:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.iL()
y=U.dy()
y.sdO(0,!0)
y.sdD(6.283185307179586)
y.sdF(0)
y.sa9(0,0)
y.sdE(100)
y.sW(0)
y.sd5(0.5)
z.b=y
y=y.gp()
y.toString
x=H.c(z.gbd(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)
y=U.dy()
y.sdO(0,!0)
y.sdD(6.283185307179586)
y.sdF(0)
y.sa9(0,0)
y.sdE(100)
y.sW(0)
y.sd5(0.5)
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
w=new X.ay(b,!1,!1)
v=z.d
z.d=w
y=new D.A("modifiers",v,w,z,[X.ay])
y.b=!0
z.R(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.A("invertX",y,!1,z,[P.a7])
y.b=!0
z.R(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.A("invertY",y,!1,z,[P.a7])
y.b=!0
z.R(y)}z.bU(c)
return z}}},iM:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.B()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.w(a)},
bU:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.B()
z.e=y
z=y}else z=y
y=H.c(this.gey(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.B()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hM:[function(a){var z,y,x,w
H.i(a,"$isl")
if(!J.G(this.b,this.a.b.c))return
H.b(a,"$iscV")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.A("zoom",z,w,this,[P.w])
z.b=!0
this.R(z)}},"$1","gey",4,0,1],
aS:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.dZ(x,x,x,1)}return this.f},
$isab:1,
n:{
eE:function(a,b,c,d,e){var z,y,x
z=new U.iM()
z.c=0.01
z.d=0
z.e=0
y=new X.ay(b,!1,!1)
z.b=y
x=new D.A("modifiers",null,y,z,[X.ay])
x.b=!0
z.R(x)
z.bU(c)
return z}}}}],["","",,M,{"^":"",fA:{"^":"ak;0e,0f,0a,0b,0c,0d",
gp:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
Z:[function(a){var z
H.i(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.Z(null)},"ct","$1","$0","gS",0,2,0],
i9:[function(a,b){var z,y,x,w,v,u,t
z=M.aB
H.v(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.bR(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","geX",8,0,18],
ia:[function(a,b){var z,y,x,w,v,u,t
z=M.aB
H.v(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.c(x,w)
C.a.F(t.a,x)}}z=new D.bS(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","geY",8,0,18],
a3:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.aq(z,z.length,0,[H.z(z,0)]);z.I();){y=z.d
if(!(y==null))y.a3(a)}this.e=!1},
$asf:function(){return[M.aB]},
$asak:function(){return[M.aB]},
$isaB:1},fC:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
Z:[function(a){var z
H.i(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.Z(null)},"ct","$1","$0","gS",0,2,0],
saX:function(a){var z,y,x
if(a==null)a=new X.h0()
z=this.a
if(z!==a){if(z!=null){z=z.gp()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.a
this.a=a
z=a.gp()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.A("camera",x,this.a,this,[X.cb])
z.b=!0
this.Z(z)}},
saB:function(a,b){var z,y,x
if(b==null)b=X.cJ(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.A("target",x,this.b,this,[X.cn])
z.b=!0
this.Z(z)}},
sao:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.A("technique",x,this.c,this,[O.aP])
z.b=!0
this.Z(z)}},
a3:function(a){var z
a.cg(this.c)
this.b.H(a)
this.a.H(a)
z=this.c
if(z!=null)z.a7(0,a)
this.d.a7(0,a)
this.d.a3(a)
this.a.a1(a)
this.b.a1(a)
a.ce()},
$isaB:1,
n:{
cG:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new M.fC()
z.saX(a)
z.saB(0,b)
z.sao(c)
y=E.cI(null,!0,null,"",null,null)
x=F.d0()
w=x.a
v=new V.E(-1,-1,1)
v=v.A(0,Math.sqrt(v.C(v)))
u=w.bi(new V.aY(1,2,4,6),new V.a9(1,0,0,1),new V.V(-1,-1,0),new V.O(0,1),v,null)
w=x.a
v=new V.E(1,-1,1)
v=v.A(0,Math.sqrt(v.C(v)))
t=w.bi(new V.aY(0,3,4,6),new V.a9(0,0,1,1),new V.V(1,-1,0),new V.O(1,1),v,null)
w=x.a
v=new V.E(1,1,1)
v=v.A(0,Math.sqrt(v.C(v)))
s=w.bi(new V.aY(0,2,5,6),new V.a9(0,1,0,1),new V.V(1,1,0),new V.O(1,0),v,null)
w=x.a
v=new V.E(-1,1,1)
v=v.A(0,Math.sqrt(v.C(v)))
r=w.bi(new V.aY(0,2,4,7),new V.a9(1,1,0,1),new V.V(-1,1,0),new V.O(0,0),v,null)
x.d.fL(H.e([u,t,s,r],[F.am]))
x.ag()
y.sbb(0,x)
z.d=y
z.e=null
return z}}},fS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
Z:[function(a){var z
H.i(a,"$isl")
z=this.x
if(!(z==null))z.w(a)},function(){return this.Z(null)},"ct","$1","$0","gS",0,2,0],
hR:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aE
H.v(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.aF()
s.a=H.e([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.c(x,w)
C.a.h(s.a,x)}}z=new D.bR(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","geD",8,0,7],
hS:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aE
H.v(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.aF()
s.a=H.e([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.c(x,w)
C.a.F(s.a,x)}}z=new D.bS(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","geE",8,0,7],
saX:function(a){var z,y,x
if(a==null)a=X.e4(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gp()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.a
this.a=a
z=a.gp()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.A("camera",x,this.a,this,[X.cb])
z.b=!0
this.Z(z)}},
saB:function(a,b){var z,y,x
if(b==null)b=X.cJ(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.A("target",x,this.b,this,[X.cn])
z.b=!0
this.Z(z)}},
sao:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.A("technique",x,this.c,this,[O.aP])
z.b=!0
this.Z(z)}},
gp:function(){var z=this.x
if(z==null){z=D.B()
this.x=z}return z},
a3:function(a){var z
a.cg(this.c)
this.b.H(a)
this.a.H(a)
z=this.c
if(z!=null)z.a7(0,a)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.z(z,0)]);z.I();)z.d.a7(0,a)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.z(z,0)]);z.I();)z.d.a3(a)
this.a.toString
a.cy.aA()
a.db.aA()
this.b.a1(a)
a.ce()},
$isaB:1,
n:{
dJ:function(a,b,c,d){var z,y
z=new M.fS()
y=O.cc(E.aE)
z.d=y
y.aC(z.geD(),z.geE())
z.e=null
z.f=null
z.r=null
z.x=null
z.saX(a)
z.saB(0,c)
z.sao(d)
return z}}},aB:{"^":"a;"}}],["","",,A,{"^":"",dp:{"^":"a;a,b,c"},fo:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fX:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
aY:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dH:{"^":"bt;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
a8:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dW(c)
b.a.uniform1i(b.d,0)}}},dX:{"^":"bt;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aP,0ay,0aQ,0bm,0d8,0d9,0bn,0bo,0da,0dc,0bp,0bq,0dd,0de,0br,0df,0dg,0bs,0dh,0di,0bt,0bu,0bv,0dj,0dk,0bw,0bx,0dl,0dm,0by,0dn,0c2,0dq,0c3,0dr,0c4,0ds,0c5,0dt,0c6,0du,0c7,a,b,0c,0d,0e,0f,0r",
e1:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bZ("")
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
a1.fn(z)
a1.fv(z)
a1.fo(z)
a1.fF(z)
a1.fG(z)
a1.fz(z)
a1.fK(z)
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
z=new P.bZ("")
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
v.fs(z)
v.fm(z)
v.fp(z)
v.ft(z)
v.fD(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fB(z)
v.fC(z)}v.fw(z)
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
p=H.e([],[P.q])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.a2(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fq(z)
v.fA(z)
v.fE(z)
v.fH(z)
v.fI(z)
v.fJ(z)
v.fu(z)}r=z.a+="// === Main ===\n"
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
o=H.e([],[P.q])
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
n="vec4("+C.a.a2(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.b_(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.i(0,"posAttr")
this.Q=this.f.i(0,"normAttr")
this.z=this.f.i(0,"binmAttr")
this.ch=this.f.i(0,"txt2DAttr")
this.cx=this.f.i(0,"txtCubeAttr")
this.cy=this.f.i(0,"bendAttr")
if(a1.fr)this.fy=H.b(this.r.m(0,"invViewMat"),"$isa0")
if(y)this.db=H.b(this.r.m(0,"objMat"),"$isa0")
if(w)this.dx=H.b(this.r.m(0,"viewObjMat"),"$isa0")
this.fr=H.b(this.r.m(0,"projViewObjMat"),"$isa0")
if(a1.x2)this.go=H.b(this.r.m(0,"txt2DMat"),"$isbE")
if(a1.y1)this.id=H.b(this.r.m(0,"txtCubeMat"),"$isa0")
if(a1.y2)this.k1=H.b(this.r.m(0,"colorMat"),"$isa0")
this.k3=H.e([],[A.a0])
y=a1.aP
if(y>0){this.k2=H.i(this.r.m(0,"bendMatCount"),"$isD")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.p(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.b(l,"$isa0"))}}y=a1.a
if(y!==C.b){this.k4=H.b(this.r.m(0,"emissionClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.e:this.r1=H.b(this.r.m(0,"emissionTxt"),"$isa1")
this.rx=H.b(this.r.m(0,"nullEmissionTxt"),"$isD")
break
case C.d:this.r2=H.b(this.r.m(0,"emissionTxt"),"$isae")
this.rx=H.b(this.r.m(0,"nullEmissionTxt"),"$isD")
break}}y=a1.b
if(y!==C.b){this.ry=H.b(this.r.m(0,"ambientClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.e:this.x1=H.b(this.r.m(0,"ambientTxt"),"$isa1")
this.y1=H.b(this.r.m(0,"nullAmbientTxt"),"$isD")
break
case C.d:this.x2=H.b(this.r.m(0,"ambientTxt"),"$isae")
this.y1=H.b(this.r.m(0,"nullAmbientTxt"),"$isD")
break}}y=a1.c
if(y!==C.b){this.y2=H.b(this.r.m(0,"diffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.e:this.aP=H.b(this.r.m(0,"diffuseTxt"),"$isa1")
this.aQ=H.b(this.r.m(0,"nullDiffuseTxt"),"$isD")
break
case C.d:this.ay=H.b(this.r.m(0,"diffuseTxt"),"$isae")
this.aQ=H.b(this.r.m(0,"nullDiffuseTxt"),"$isD")
break}}y=a1.d
if(y!==C.b){this.bm=H.b(this.r.m(0,"invDiffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.e:this.d8=H.b(this.r.m(0,"invDiffuseTxt"),"$isa1")
this.bn=H.b(this.r.m(0,"nullInvDiffuseTxt"),"$isD")
break
case C.d:this.d9=H.b(this.r.m(0,"invDiffuseTxt"),"$isae")
this.bn=H.b(this.r.m(0,"nullInvDiffuseTxt"),"$isD")
break}}y=a1.e
if(y!==C.b){this.bq=H.b(this.r.m(0,"shininess"),"$isR")
this.bo=H.b(this.r.m(0,"specularClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.e:this.da=H.b(this.r.m(0,"specularTxt"),"$isa1")
this.bp=H.b(this.r.m(0,"nullSpecularTxt"),"$isD")
break
case C.d:this.dc=H.b(this.r.m(0,"specularTxt"),"$isae")
this.bp=H.b(this.r.m(0,"nullSpecularTxt"),"$isD")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.e:this.dd=H.b(this.r.m(0,"bumpTxt"),"$isa1")
this.br=H.b(this.r.m(0,"nullBumpTxt"),"$isD")
break
case C.d:this.de=H.b(this.r.m(0,"bumpTxt"),"$isae")
this.br=H.b(this.r.m(0,"nullBumpTxt"),"$isD")
break}if(a1.dy){this.df=H.b(this.r.m(0,"envSampler"),"$isae")
this.dg=H.b(this.r.m(0,"nullEnvTxt"),"$isD")
y=a1.r
if(y!==C.b){this.bs=H.b(this.r.m(0,"reflectClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.e:this.dh=H.b(this.r.m(0,"reflectTxt"),"$isa1")
this.bt=H.b(this.r.m(0,"nullReflectTxt"),"$isD")
break
case C.d:this.di=H.b(this.r.m(0,"reflectTxt"),"$isae")
this.bt=H.b(this.r.m(0,"nullReflectTxt"),"$isD")
break}}y=a1.x
if(y!==C.b){this.bu=H.b(this.r.m(0,"refraction"),"$isR")
this.bv=H.b(this.r.m(0,"refractClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.e:this.dj=H.b(this.r.m(0,"refractTxt"),"$isa1")
this.bw=H.b(this.r.m(0,"nullRefractTxt"),"$isD")
break
case C.d:this.dk=H.b(this.r.m(0,"refractTxt"),"$isae")
this.bw=H.b(this.r.m(0,"nullRefractTxt"),"$isD")
break}}}y=a1.y
if(y!==C.b){this.bx=H.b(this.r.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.f:break
case C.e:this.dl=H.b(this.r.m(0,"alphaTxt"),"$isa1")
this.by=H.b(this.r.m(0,"nullAlphaTxt"),"$isD")
break
case C.d:this.dm=H.b(this.r.m(0,"alphaTxt"),"$isae")
this.by=H.b(this.r.m(0,"nullAlphaTxt"),"$isD")
break}}this.c2=H.e([],[A.ew])
this.c3=H.e([],[A.ex])
this.c4=H.e([],[A.ey])
this.c5=H.e([],[A.ez])
this.c6=H.e([],[A.eA])
this.c7=H.e([],[A.eB])
if(a1.k2){y=a1.z
if(y>0){this.dn=H.i(this.r.m(0,"dirLightCount"),"$isD")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isH")
x=this.r
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isH")
x=this.c2;(x&&C.a).h(x,new A.ew(m,l,k))}}y=a1.Q
if(y>0){this.dq=H.i(this.r.m(0,"pntLightCount"),"$isD")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isH")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isH")
x=this.r
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isH")
x=this.r
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isR")
x=this.r
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isR")
x=this.r
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isR")
x=this.c3;(x&&C.a).h(x,new A.ex(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dr=H.i(this.r.m(0,"spotLightCount"),"$isD")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isH")
x=this.r
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isH")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isH")
x=this.r
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isH")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isR")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isR")
x=this.r
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isR")
x=this.r
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isR")
x=this.r
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isR")
x=this.c4;(x&&C.a).h(x,new A.ey(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ds=H.i(this.r.m(0,"txtDirLightCount"),"$isD")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isH")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isH")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isH")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isH")
x=this.r
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isH")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isD")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isa1")
x=this.c5;(x&&C.a).h(x,new A.ez(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dt=H.i(this.r.m(0,"txtPntLightCount"),"$isD")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isH")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isH")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isbE")
x=this.r
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isH")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isD")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isR")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isR")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isR")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isae")
x=this.c6;(x&&C.a).h(x,new A.eA(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.du=H.i(this.r.m(0,"txtSpotLightCount"),"$isD")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isH")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isH")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isH")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isH")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isH")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isD")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isH")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isR")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isR")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(c,"$isR")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(b,"$isR")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a,"$isR")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a0,"$isa1")
x=this.c7;(x&&C.a).h(x,new A.eB(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
a8:function(a,b,c){b.a.uniform1i(b.d,1)},
ad:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
hp:function(a,b){var z,y
z=a.ay
y=new A.dX(b,z)
y.aT(b,z)
y.e1(a,b)
return y}}},hs:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aP,ay,aQ",
fn:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aP+"];\n"
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
fv:function(a){var z
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
fo:function(a){var z
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
fF:function(a){var z,y
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
fG:function(a){var z,y
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
fz:function(a){var z
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
fK:function(a){var z
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
as:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cq(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fs:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.as(a,z,"emission")
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
fm:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.as(a,z,"ambient")
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
fp:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"diffuse")
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
ft:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"invDiffuse")
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
fD:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.as(a,z,"specular")
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
fw:function(a){var z,y
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
fB:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.as(a,z,"reflect")
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
fC:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.as(a,z,"refract")
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
fq:function(a){var z,y
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
fA:function(a){var z,y
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
fE:function(a){var z,y
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
fH:function(a){var z,y,x
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
fI:function(a){var z,y,x
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
fJ:function(a){var z,y,x
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
fu:function(a){var z
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
j:function(a){return this.ay}},ew:{"^":"a;a,b,c"},ez:{"^":"a;a,b,c,d,e,f,r,x"},ex:{"^":"a;a,b,c,d,e,f,r"},eA:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ey:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eB:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},e0:{"^":"bt;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r"},hE:{"^":"a;a,b,c,d,e,f",
j:function(a){return this.e},
n:{
e1:function(a){var z,y,x,w,v,u,t
z=a!==C.b
y=a===C.e
x=a===C.d
w="Normal_"+C.h.j(a.a)
v=$.$get$a2()
u=$.$get$au()
u=v.a|u.a
t=new Z.an(u)
if(z)t=new Z.an(u|$.$get$at().a)
if(y)t=new Z.an(t.a|$.$get$ai().a)
return new A.hE(a,z,y,x,w,x?new Z.an(t.a|$.$get$av().a):t)}}},bt:{"^":"cA;",
aT:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
b_:function(a,b,c){var z,y,x
this.c=this.cG(b,35633)
this.d=this.cG(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.f7(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.p(P.o("Failed to link shader: "+H.j(x)))}this.fe()
this.ff()},
H:function(a){a.a.useProgram(this.e)
this.f.fX()},
cG:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f7(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.k(P.o("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
fe:function(){var z,y,x,w,v,u
z=H.e([],[A.dp])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dp(y,v.name,u))}this.f=new A.fo(z)},
ff:function(){var z,y,x,w,v,u
z=H.e([],[A.a6])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fU(v.type,v.size,v.name,u))}this.r=new A.iE(z)},
aH:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.D(z,y,b,c)
else return A.d4(z,y,b,a,c)},
el:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a1(z,y,b,c)
else return A.d4(z,y,b,a,c)},
em:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ae(z,y,b,c)
else return A.d4(z,y,b,a,c)},
bh:function(a,b){return new P.eK(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fU:function(a,b,c,d){switch(a){case 5120:return this.aH(b,c,d)
case 5121:return this.aH(b,c,d)
case 5122:return this.aH(b,c,d)
case 5123:return this.aH(b,c,d)
case 5124:return this.aH(b,c,d)
case 5125:return this.aH(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.bD(this.a,this.e,c,d)
case 35665:return new A.H(this.a,this.e,c,d)
case 35666:return new A.ev(this.a,this.e,c,d)
case 35667:return new A.iB(this.a,this.e,c,d)
case 35668:return new A.iC(this.a,this.e,c,d)
case 35669:return new A.iD(this.a,this.e,c,d)
case 35674:return new A.iG(this.a,this.e,c,d)
case 35675:return new A.bE(this.a,this.e,c,d)
case 35676:return new A.a0(this.a,this.e,c,d)
case 35678:return this.el(b,c,d)
case 35680:return this.em(b,c,d)
case 35670:throw H.k(this.bh("BOOL",c))
case 35671:throw H.k(this.bh("BOOL_VEC2",c))
case 35672:throw H.k(this.bh("BOOL_VEC3",c))
case 35673:throw H.k(this.bh("BOOL_VEC4",c))
default:throw H.k(P.o("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cd:{"^":"a;a,b",
j:function(a){return this.b}},e8:{"^":"bt;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},ef:{"^":"bt;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
e3:function(a,b){var z,y,x,w,v
this.b_(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.il(a))
this.x=this.f.i(0,"posAttr")
this.y=H.b(this.r.m(0,"txtCount"),"$isD")
this.z=H.b(this.r.m(0,"backClr"),"$isev")
this.Q=H.e([],[A.a1])
this.ch=H.e([],[A.a0])
z=[A.bD]
this.cx=H.e([],z)
this.cy=H.e([],z)
this.db=H.e([],z)
this.dx=H.e([],z)
this.dy=H.e([],[A.D])
for(y=0;y<a;++y){z=this.Q
x=this.r
w="txt"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa1"))
z=this.ch
x=this.r
w="clrMat"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa0"))
z=this.cx
x=this.r
w="srcLoc"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbD"))
z=this.cy
x=this.r
w="srcSize"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbD"))
z=this.db
x=this.r
w="destLoc"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbD"))
z=this.dx
x=this.r
w="destSize"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbD"))
z=this.dy
x=this.r
w="flip"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isD"))}},
n:{
il:function(a){var z,y
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
ik:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.ef(b,z)
y.aT(b,z)
y.e3(a,b)
return y}}},a6:{"^":"a;"},iE:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.i(0,b)
if(z==null)throw H.k(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.K()},
fY:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].j(0)+a
return x},
K:function(){return this.fY("\n")}},D:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform1i: "+H.j(this.c)}},iB:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform2i: "+H.j(this.c)}},iC:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform3i: "+H.j(this.c)}},iD:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform4i: "+H.j(this.c)}},iA:{"^":"a6;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
d4:function(a,b,c,d,e){var z=new A.iA(a,b,c,e)
z.f=d
z.e=P.hh(d,0,!1,P.J)
return z}}},R:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform1f: "+H.j(this.c)}},bD:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform2f: "+H.j(this.c)}},H:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform3f: "+H.j(this.c)}},ev:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform4f: "+H.j(this.c)}},iG:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.j(this.c)}},bE:{"^":"a6;a,b,c,d",
U:function(a){var z=new Float32Array(H.b3(H.v(a,"$isd",[P.w],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.j(this.c)}},a0:{"^":"a6;a,b,c,d",
U:function(a){var z=new Float32Array(H.b3(H.v(a,"$isd",[P.w],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.j(this.c)}},a1:{"^":"a6;a,b,c,d",
dW:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.j(this.c)}},ae:{"^":"a6;a,b,c,d",
co:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cs:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bK:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
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
z.d=y}l=F.cs(y)
k=F.cs(z.b)
j=F.fh(d,e,new F.kh(z,F.cs(z.c),F.cs(z.d),k,l,c),b)
if(j!=null)a.cc(j)},
l0:function(a,b,c,d){return F.kx(c,a,d,b,new F.l1())},
kx:function(a,b,c,d,e){var z=F.fh(a,b,new F.ky(H.c(e,{func:1,ret:V.V,args:[P.w]}),d,b,c),null)
if(z==null)return
z.ag()
z.h8(new F.iS(),new F.hD())
return z},
fh:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.c(c,{func:1,ret:-1,args:[F.am,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.d0()
y=H.e([],[F.am])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cq(null,null,new V.a9(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c0(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cq(null,null,new V.a9(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c0(d))}}z.d.fM(a+1,b+1,y)
return z},
kh:{"^":"t:15;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cb(z.b,b).cb(z.d.cb(z.c,b),c)
a.sa9(0,new V.V(y.a,y.b,y.c))
a.shx(y.A(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
x=new V.aY(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.G(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.X()}}},
l1:{"^":"t:33;",
$1:function(a){return new V.V(Math.cos(a),Math.sin(a),0)}},
ky:{"^":"t:15;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dl(y.$1(z),x)
x=J.dl(y.$1(z+3.141592653589793/this.c),x).N(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.C(x)))
u=new V.E(1,0,0)
y=v.aw(!v.u(0,u)?new V.E(0,0,1):u)
t=y.A(0,Math.sqrt(y.C(y)))
y=t.aw(v)
u=y.A(0,Math.sqrt(y.C(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa9(0,w.D(0,new V.V(y.a-x.a,y.b-x.b,y.c-x.c)))}},
al:{"^":"a;0a,0b,0c,0d,0e",
ax:function(){if(!this.gaZ()){C.a.F(this.a.a.d.b,this)
this.a.a.X()}this.bO()
this.bP()
this.f3()},
fb:function(a){this.a=a
C.a.h(a.d.b,this)},
fc:function(a){this.b=a
C.a.h(a.d.c,this)},
fd:function(a){this.c=a
C.a.h(a.d.d,this)},
bO:function(){var z=this.a
if(z!=null){C.a.F(z.d.b,this)
this.a=null}},
bP:function(){var z=this.b
if(z!=null){C.a.F(z.d.c,this)
this.b=null}},
f3:function(){var z=this.c
if(z!=null){C.a.F(z.d.d,this)
this.c=null}},
gaZ:function(){return this.a==null||this.b==null||this.c==null},
ee:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.E(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dA())return
return v.A(0,Math.sqrt(v.C(v)))},
eg:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.N(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.C(z)))
z=w.N(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.aw(z.A(0,Math.sqrt(z.C(z))))
return z.A(0,Math.sqrt(z.C(z)))},
c_:function(){if(this.d!=null)return!0
var z=this.ee()
if(z==null){z=this.eg()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
ed:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.E(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dA())return
return v.A(0,Math.sqrt(v.C(v)))},
ef:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.N(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.L(0)}else{l=(z-q.b)/n
z=r.N(0,u).k(0,l).D(0,u).N(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.L(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.C(z)))
z=k.aw(m)
z=z.A(0,Math.sqrt(z.C(z))).aw(k)
m=z.A(0,Math.sqrt(z.C(z)))}return m},
bZ:function(){if(this.e!=null)return!0
var z=this.ed()
if(z==null){z=this.ef()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
gfQ:function(a){if(J.G(this.a,this.b))return!0
if(J.G(this.b,this.c))return!0
if(J.G(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
B:function(a){var z,y
if(this.gaZ())return a+"disposed"
z=a+C.i.af(J.a8(this.a.e),0)+", "+C.i.af(J.a8(this.b.e),0)+", "+C.i.af(J.a8(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
K:function(){return this.B("")},
n:{
bh:function(a,b,c){var z,y,x
z=new F.al()
y=a.a
if(y==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.o("May not create a face with vertices attached to different shapes."))
z.fb(a)
z.fc(b)
z.fd(c)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
fV:{"^":"a;"},
i6:{"^":"fV;",
b0:function(a,b,c){var z,y
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
cR:{"^":"a;0a,0b",
ax:function(){if(!this.gaZ()){C.a.F(this.a.a.c.b,this)
this.a.a.X()}this.bO()
this.bP()},
bO:function(){var z=this.a
if(z!=null){C.a.F(z.c.b,this)
this.a=null}},
bP:function(){var z=this.b
if(z!=null){C.a.F(z.c.c,this)
this.b=null}},
gaZ:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
B:function(a){if(this.gaZ())return a+"disposed"
return a+C.i.af(J.a8(this.a.e),0)+", "+C.i.af(J.a8(this.b.e),0)},
K:function(){return this.B("")}},
h9:{"^":"a;"},
iz:{"^":"h9;",
b0:function(a,b,c){var z,y
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
cX:{"^":"a;0a",
ax:function(){var z=this.a
if(z!=null){C.a.F(z.a.b.b,this)
this.a.a.X()}this.f2()},
f2:function(){var z=this.a
if(z!=null){C.a.F(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.af(J.a8(z.e),0)},
K:function(){return this.B("")}},
e7:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
cc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.v()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fT())}this.a.v()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cX()
if(r.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.w(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cR()
s=p.a
if(s==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.o("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.w(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.v()
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
F.bh(p,o,l)}z=this.e
if(!(z==null))z.an(0)},
ag:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ag()||!1
if(!this.a.ag())y=!1
z=this.e
if(!(z==null))z.an(0)
return y},
aK:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aK()||!1
if(!this.a.aK())y=!1
z=this.e
if(!(z==null))z.an(0)
return y},
bk:function(){var z=this.e
if(!(z==null))++z.c
this.a.bk()
z=this.e
if(!(z==null))z.an(0)
return!0},
ep:function(a,b,c,d,e){var z,y,x
H.v(d,"$isd",[F.am],"$asd")
H.v(e,"$isd",[P.J],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
if(a.b0(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
h8:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.am],x=[P.J];y>=0;--y){w=this.a.c
if(y>=w.length)return H.h(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.ep(a,v,y,u,t))b.cc(u)}this.a.v()
this.c.ci()
this.d.ci()
this.b.hp()
this.c.cj(new F.iz())
this.d.cj(new F.i6())
z=this.e
if(!(z==null))z.an(0)},
aW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$a2()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$au().a)!==0)++w
if((x&$.$get$at().a)!==0)++w
if((x&$.$get$ai().a)!==0)++w
if((x&$.$get$av().a)!==0)++w
if((x&$.$get$bF().a)!==0)++w
if((x&$.$get$bG().a)!==0)++w
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
v=b.gcp(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dt])
for(r=0,q=0;q<w;++q){p=b.fO(q)
o=p.gcp(p)
C.a.ac(s,q,new Z.dt(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].h3(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.ac(t,l,m[k]);++l}}r+=o}H.v(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.b3(t)),35044)
y.bindBuffer(34962,null)
i=new Z.bd(new Z.eI(34962,j),s,b)
i.b=H.e([],[Z.cj])
if(this.b.b.length!==0){x=P.J
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)}f=Z.d5(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cj(0,h.length,f))}if(this.c.b.length!==0){x=P.J
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)}f=Z.d5(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cj(1,h.length,f))}if(this.d.b.length!==0){x=P.J
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.v()
C.a.h(h,g.e)}f=Z.d5(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cj(4,h.length,f))}return i},
j:function(a){var z=H.e([],[P.q])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.a2(z,"\n")},
ah:function(a){var z=this.e
if(!(z==null))z.w(a)},
X:function(){return this.ah(null)},
n:{
d0:function(){var z,y
z=new F.e7()
y=new F.iN(z)
y.b=!1
y.c=H.e([],[F.am])
z.a=y
y=new F.i5(z)
y.b=H.e([],[F.cX])
z.b=y
y=new F.i4(z)
y.b=H.e([],[F.cR])
z.c=y
y=new F.i3(z)
y.b=H.e([],[F.al])
z.d=y
z.e=null
return z}}},
i3:{"^":"a;a,0b",
fL:function(a){var z,y,x,w,v
H.v(a,"$isd",[F.am],"$asd")
z=H.e([],[F.al])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bh(y,w,v))}return z},
fM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isd",[F.am],"$asd")
z=H.e([],[F.al])
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
C.a.h(z,F.bh(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bh(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bh(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bh(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cj:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.i(0,w)
for(u=w-1;u>=0;--u){t=x.d.i(0,u)
if(a.b0(0,v,t)){v.ax()
break}}}}},
ci:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gfQ(x)
if(y)x.ax()}},
ag:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c_())x=!1
return x},
aK:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bZ())x=!1
return x},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.e([],[P.q])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.a2(z,"\n")},
K:function(){return this.B("")}},
i4:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cj:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.i(0,w)
for(u=w-1;u>=0;--u){t=x.c.i(0,u)
if(a.b0(0,v,t)){v.ax()
break}}}}},
ci:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.G(x.a,x.b)
if(y)x.ax()}},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.e([],[P.q])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.a2(z,"\n")},
K:function(){return this.B("")}},
i5:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hp:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ax()}},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.e([],[P.q])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.a2(z,"\n")},
K:function(){return this.B("")}},
am:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c0:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cq(this.cx,x,u,z,y,w,v,a,t)},
fT:function(){return this.c0(null)},
sa9:function(a,b){var z
if(!J.G(this.f,b)){this.f=b
z=this.a
if(z!=null)z.X()}},
sh9:function(a){var z
a=a.A(0,Math.sqrt(a.C(a)))
if(!J.G(this.r,a)){this.r=a
z=this.a
if(z!=null)z.X()}},
shx:function(a){var z
if(!J.G(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
h3:function(a){var z,y
z=J.K(a)
if(z.u(a,$.$get$a2())){z=this.f
y=[P.w]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$au())){z=this.r
y=[P.w]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$at())){z=this.x
y=[P.w]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$ai())){z=this.y
y=[P.w]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.u(a,$.$get$av())){z=this.z
y=[P.w]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bF())){z=this.Q
y=[P.w]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bG())){z=this.Q
y=[P.w]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b1()))return H.e([this.ch],[P.w])
else if(z.u(a,$.$get$aI())){z=this.cx
y=[P.w]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.w])},
c_:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.M(0,new F.iX(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.an(0)}return!0},
bZ:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.M(0,new F.iW(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.an(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
B:function(a){var z,y,x
z=H.e([],[P.q])
C.a.h(z,C.i.af(J.a8(this.e),0))
y=this.f
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.r
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.x
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.y
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.z
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
C.a.h(z,V.M(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.a2(z,", ")
return a+"{"+x+"}"},
K:function(){return this.B("")},
n:{
cq:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.am()
y=new F.iV(z)
y.b=H.e([],[F.cX])
z.b=y
y=new F.iR(z)
x=[F.cR]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.iO(z)
x=[F.al]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$eF()
z.e=0
y=$.$get$a2()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$au().a)!==0?e:null
z.x=(x&$.$get$at().a)!==0?b:null
z.y=(x&$.$get$ai().a)!==0?f:null
z.z=(x&$.$get$av().a)!==0?g:null
z.Q=(x&$.$get$eG().a)!==0?c:null
z.ch=(x&$.$get$b1().a)!==0?i:0
z.cx=(x&$.$get$aI().a)!==0?a:null
return z}}},
iX:{"^":"t:8;a",
$1:function(a){var z,y
H.i(a,"$isal")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iW:{"^":"t:8;a",
$1:function(a){var z,y
H.i(a,"$isal")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iN:{"^":"a;a,0b,0c",
v:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.k(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.X()
return!0},
fN:function(a,b,c,d,e,f,g,h,i){var z=F.cq(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bi:function(a,b,c,d,e,f){return this.fN(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
ag:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c_()
return!0},
aK:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bZ()
return!0},
bk:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.G(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
this.v()
z=H.e([],[P.q])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.a2(z,"\n")},
K:function(){return this.B("")}},
iO:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var z,y,x
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
M:function(a,b){H.c(b,{func:1,ret:-1,args:[F.al]})
C.a.M(this.b,b)
C.a.M(this.c,new F.iP(this,b))
C.a.M(this.d,new F.iQ(this,b))},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.e([],[P.q])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.a2(z,"\n")},
K:function(){return this.B("")}},
iP:{"^":"t:8;a,b",
$1:function(a){H.i(a,"$isal")
if(!J.G(a.a,this.a))this.b.$1(a)}},
iQ:{"^":"t:8;a,b",
$1:function(a){var z
H.i(a,"$isal")
z=this.a
if(!J.G(a.a,z)&&!J.G(a.b,z))this.b.$1(a)}},
iR:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.e([],[P.q])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.a2(z,"\n")},
K:function(){return this.B("")}},
iT:{"^":"a;"},
iS:{"^":"iT;",
b0:function(a,b,c){return J.G(b.f,c.f)}},
iU:{"^":"a;"},
hD:{"^":"iU;",
cc:function(a){var z,y,x,w
H.v(a,"$isd",[F.am],"$asd")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.C(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x)a[x].sh9(z)
return}},
iV:{"^":"a;a,0b",
gl:function(a){return this.b.length},
j:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.e([],[P.q])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.a2(z,"\n")},
K:function(){return this.B("")}}}],["","",,O,{"^":"",fJ:{"^":"aP;0a,0b,0c,0d,0e,0f,0aa:r@",
gp:function(){var z=this.r
if(z==null){z=D.B()
this.r=z}return z},
G:function(a){var z=this.r
if(!(z==null))z.w(a)},
a5:function(){return this.G(null)},
sd3:function(a){var z=this.b
if(z==null?a!=null:z!==a){this.b=a
this.a5()}},
sd1:function(a){var z=this.c
if(z==null?a!=null:z!==a){this.c=a
this.a5()}},
sd0:function(a){var z=a==null?V.ax():a
this.f=z
if(!z.u(0,a)){this.f=a
this.a5()}},
a7:function(a,b){},
J:function(a,b){H.v(a,"$isd",[T.aH],"$asd")
if(b!=null)if(!C.a.av(a,b)){b.a=a.length
C.a.h(a,b)}},
b5:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.i(a.fr.i(0,"Distort"),"$isdH")
if(z==null){y=a.a
z=new A.dH(y,"Distort")
z.aT(y,"Distort")
z.b_(0,$.fL,$.fK)
z.x=z.f.i(0,"posAttr")
z.y=z.f.i(0,"txt2DAttr")
z.z=H.b(z.r.m(0,"projViewObjMat"),"$isa0")
z.Q=H.b(z.r.m(0,"colorTxt2DMat"),"$isbE")
z.ch=H.b(z.r.m(0,"bumpTxt2DMat"),"$isbE")
z.cx=H.b(z.r.m(0,"colorTxt"),"$isa1")
z.cy=H.b(z.r.m(0,"bumpTxt"),"$isa1")
z.db=H.b(z.r.m(0,"nullColorTxt"),"$isD")
z.dx=H.b(z.r.m(0,"nullBumpTxt"),"$isD")
z.dy=H.b(z.r.m(0,"bumpMat"),"$isa0")
a.aV(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$a2()
v=$.$get$ai()
v=y.aW(new Z.c0(x),new Z.an(w.a|v.a))
v.a_($.$get$a2()).e=this.a.x.c
v.a_($.$get$ai()).e=this.a.y.c
b.e=v}u=H.e([],[T.aH])
this.J(u,this.b)
this.J(u,this.c)
for(t=0;t<u.length;++t)u[t].H(a)
y=this.a
y.H(a)
x=this.b
y.a8(y.cx,y.db,x)
x=this.c
y.a8(y.cy,y.dx,x)
x=a.gcf()
w=y.z
w.toString
w.U(x.O(0,!0))
x=this.d
w=y.Q
w.toString
w.U(x.O(0,!0))
x=this.e
w=y.ch
w.toString
w.U(x.O(0,!0))
x=this.f
y=y.dy
y.toString
y.U(x.O(0,!0))
y=b.e
if(y instanceof Z.bd){y.H(a)
y.a3(a)
y.a1(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.aY()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},ho:{"^":"aP;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0aa:dy@",
gp:function(){var z=this.dy
if(z==null){z=D.B()
this.dy=z}return z},
G:[function(a){var z
H.i(a,"$isl")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.G(null)},"a5","$1","$0","gab",0,2,0],
f6:[function(a){H.i(a,"$isl")
this.a=null
this.G(a)},function(){return this.f6(null)},"ig","$1","$0","gf5",0,2,0],
hO:[function(a,b){var z=V.ag
z=new D.bR(a,H.v(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.G(z)},"$2","geA",8,0,14],
hP:[function(a,b){var z=V.ag
z=new D.bS(a,H.v(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.G(z)},"$2","geB",8,0,14],
cE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.a6(z.e.length+3,4)*4
x=C.h.a6(z.f.length+3,4)*4
w=C.h.a6(z.r.length+3,4)*4
v=C.h.a6(z.x.length+3,4)*4
u=C.h.a6(z.y.length+3,4)*4
t=C.h.a6(z.z.length+3,4)*4
s=C.h.a6(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.h.j(q.a)+C.h.j(p.a)+C.h.j(o.a)+C.h.j(n.a)+C.h.j(m.a)+C.h.j(l.a)+C.h.j(k.a)+C.h.j(j.a)+C.h.j(i.a)+"_"
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
a6=$.$get$a2()
if(c){z=$.$get$au()
a6=new Z.an(a6.a|z.a)}if(b){z=$.$get$at()
a6=new Z.an(a6.a|z.a)}if(a){z=$.$get$ai()
a6=new Z.an(a6.a|z.a)}if(a0){z=$.$get$av()
a6=new Z.an(a6.a|z.a)}if(a2){z=$.$get$aI()
a6=new Z.an(a6.a|z.a)}return new A.hs(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
J:function(a,b){H.v(a,"$isd",[T.aH],"$asd")},
a7:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aq(z,z.length,0,[H.z(z,0)]);z.I();){y=z.d
x=new V.E(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cl(x)}}},
b5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cE()
y=H.i(a.fr.i(0,z.ay),"$isdX")
if(y==null){y=A.hp(z,a.a)
a.aV(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aQ
z=b.e
if(!(z instanceof Z.bd)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ag()
v=x.r2
if(v)b.d.aK()
u=x.ry
if(u)b.d.bk()
t=b.d.aW(new Z.c0(a.a),w)
t.a_($.$get$a2()).e=this.a.y.c
if(z)t.a_($.$get$au()).e=this.a.Q.c
if(v)t.a_($.$get$at()).e=this.a.z.c
if(x.rx)t.a_($.$get$ai()).e=this.a.ch.c
if(u)t.a_($.$get$av()).e=this.a.cx.c
if(x.x1)t.a_($.$get$aI()).e=this.a.cy.c
b.e=t}z=T.aH
s=H.e([],[z])
this.a.H(a)
if(x.fx){v=this.a
u=a.dx
u=u.gT(u)
v=v.db
v.toString
v.U(u.O(0,!0))}if(x.fy){v=this.a
u=a.gdN()
v=v.dx
v.toString
v.U(u.O(0,!0))}v=this.a
u=a.gcf()
v=v.fr
v.toString
v.U(u.O(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.U(u.O(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.U(u.O(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.U(C.y.O(u,!0))}if(x.aP>0){r=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,r)
for(v=[P.w],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.h(p,q)
p=p[q]
u.toString
H.i(p,"$isag")
u=u.k3
if(q>=u.length)return H.h(u,q)
u=u[q]
o=new Float32Array(H.b3(H.v(p.O(0,!0),"$isd",v,"$asd")))
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
case C.e:this.J(s,this.f.d)
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
case C.d:this.J(s,this.f.e)
v=this.a
u=this.f.e
v.ad(v.r2,v.rx,u)
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
case C.e:this.J(s,this.r.d)
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
case C.d:this.J(s,this.r.e)
v=this.a
u=this.r.e
v.ad(v.x2,v.y1,u)
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
case C.e:this.J(s,this.x.d)
v=this.a
u=this.x.d
v.a8(v.aP,v.aQ,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.J(s,this.x.e)
v=this.a
u=this.x.e
v.ad(v.ay,v.aQ,u)
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
v=v.bm
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.J(s,this.y.d)
v=this.a
u=this.y.d
v.a8(v.d8,v.bn,u)
u=this.a
v=this.y.f
u=u.bm
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.J(s,this.y.e)
v=this.a
u=this.y.e
v.ad(v.d9,v.bn,u)
u=this.a
v=this.y.f
u=u.bm
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
u=this.z.f
v=v.bo
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bq
u.a.uniform1f(u.d,n)
break
case C.e:this.J(s,this.z.d)
v=this.a
u=this.z.d
v.a8(v.da,v.bp,u)
u=this.a
v=this.z.f
u=u.bo
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bq
v.a.uniform1f(v.d,n)
break
case C.d:this.J(s,this.z.e)
v=this.a
u=this.z.e
v.ad(v.dc,v.bp,u)
u=this.a
v=this.z.f
u=u.bo
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bq
v.a.uniform1f(v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.dn
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.c2
if(l>=p.length)return H.h(p,l)
i=p[l]
p=m.cl(j.a)
n=p.a
h=p.b
g=p.c
g=p.A(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.dq
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.c3
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb4(j)
n=i.b
h=p.gq(p)
g=p.gt(p)
p=p.gcm(p)
n.a.uniform3f(n.d,h,g,p)
p=m.b9(j.gb4(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.gak(j)
g=i.d
h=p.gbA()
n=p.gba()
p=p.gbj()
g.a.uniform3f(g.d,h,n,p)
p=j.gbV()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gbW()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gbX()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.dr
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.c4
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb4(j)
n=i.b
h=p.gq(p)
g=p.gt(p)
p=p.gcm(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gc1(j).im()
g=i.c
h=p.gaM(p)
n=p.gaN(p)
p=p.gaO()
g.a.uniform3f(g.d,h,n,p)
p=m.b9(j.gb4(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gak(j)
n=i.e
h=p.gbA()
g=p.gba()
p=p.gbj()
n.a.uniform3f(n.d,h,g,p)
p=j.gil()
g=i.f
g.a.uniform1f(g.d,p)
p=j.gik()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gbV()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gbW()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gbX()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.ds
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
n=this.a.c5
if(l>=n.length)return H.h(n,l)
i=n[l]
n=j.gb7()
H.v(s,"$isd",p,"$asd")
if(!C.a.av(s,n)){n.sdw(0,s.length)
C.a.h(s,n)}n=j.gc1(j)
h=i.d
g=n.gaM(n)
f=n.gaN(n)
n=n.gaO()
h.a.uniform3f(h.d,g,f,n)
n=j.ghC()
f=i.b
g=n.gaM(n)
h=n.gaN(n)
n=n.gaO()
f.a.uniform3f(f.d,g,h,n)
n=j.gb6(j)
h=i.c
g=n.gaM(n)
f=n.gaN(n)
n=n.gaO()
h.a.uniform3f(h.d,g,f,n)
n=m.cl(j.gc1(j))
f=n.a
g=n.b
h=n.c
h=n.A(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gak(j)
g=i.f
f=h.gbA()
n=h.gba()
h=h.gbj()
g.a.uniform3f(g.d,f,n,h)
h=j.gb7()
n=h.gdC(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.gcK()
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gcJ())
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.dt
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.y,u=v.length,p=[P.w],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.c6
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gb7()
H.v(s,"$isd",n,"$asd")
if(!C.a.av(s,h)){h.sdw(0,s.length)
C.a.h(s,h)}e=m.k(0,j.gT(j))
h=j.gT(j).b9(new V.V(0,0,0))
g=i.b
f=h.gq(h)
d=h.gt(h)
h=h.gcm(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b9(new V.V(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.c9(0)
d=i.d
o=new Float32Array(H.b3(H.v(new V.aX(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).O(0,!0),"$isd",p,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.gak(j)
h=i.e
f=d.gbA()
g=d.gba()
d=d.gbj()
h.a.uniform3f(h.d,f,g,d)
d=j.gb7()
h=d.gdC(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcK()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gcJ())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbV()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbW()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbX()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.du
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.c7
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb7()
H.v(s,"$isd",z,"$asd")
if(!C.a.av(s,p)){p.sdw(0,s.length)
C.a.h(s,p)}p=j.gb4(j)
n=i.b
h=p.gq(p)
g=p.gt(p)
p=p.gcm(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gc1(j)
g=i.c
h=p.gaM(p)
n=p.gaN(p)
p=p.gaO()
g.a.uniform3f(g.d,h,n,p)
p=j.ghC()
n=i.d
h=p.gaM(p)
g=p.gaN(p)
p=p.gaO()
n.a.uniform3f(n.d,h,g,p)
p=j.gb6(j)
g=i.e
h=p.gaM(p)
n=p.gaN(p)
p=p.gaO()
g.a.uniform3f(g.d,h,n,p)
p=m.b9(j.gb4(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gb7()
n=p.gdC(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.gcK()
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gcJ())
p=i.x
p.a.uniform1i(p.d,0)}p=j.gak(j)
n=i.y
h=p.gbA()
g=p.gba()
p=p.gbj()
n.a.uniform3f(n.d,h,g,p)
p=j.git()
g=i.z
g.a.uniform1f(g.d,p)
p=j.giu()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gbV()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gbW()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gbX()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.e:this.J(s,this.Q.d)
z=this.a
v=this.Q.d
z.a8(z.dd,z.br,v)
break
case C.d:this.J(s,this.Q.e)
z=this.a
v=this.Q.e
z.ad(z.de,z.br,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gT(v).c9(0)
a.Q=v}z=z.fy
z.toString
z.U(v.O(0,!0))}if(x.dy){this.J(s,this.ch)
z=this.a
v=this.ch
z.ad(z.df,z.dg,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bs
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.e:this.J(s,this.cx.d)
z=this.a
v=this.cx.d
z.a8(z.dh,z.bt,v)
v=this.a
z=this.cx.f
v=v.bs
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.d:this.J(s,this.cx.e)
z=this.a
v=this.cx.e
z.ad(z.di,z.bt,v)
v=this.a
z=this.cx.f
v=v.bs
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
v=this.cy.f
z=z.bv
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bu
v.a.uniform1f(v.d,p)
break
case C.e:this.J(s,this.cy.d)
z=this.a
v=this.cy.d
z.a8(z.dj,z.bw,v)
v=this.a
z=this.cy.f
v=v.bv
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bu
z.a.uniform1f(z.d,p)
break
case C.d:this.J(s,this.cy.e)
z=this.a
v=this.cy.e
z.ad(z.dk,z.bw,v)
v=this.a
z=this.cy.f
v=v.bv
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bu
z.a.uniform1f(z.d,p)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.f:z=this.a
u=this.db.f
z=z.bx
z.a.uniform1f(z.d,u)
break
case C.e:this.J(s,this.db.d)
z=this.a
u=this.db.d
z.a8(z.dl,z.by,u)
u=this.a
z=this.db.f
u=u.bx
u.a.uniform1f(u.d,z)
break
case C.d:this.J(s,this.db.e)
z=this.a
u=this.db.e
z.ad(z.dm,z.by,u)
u=this.a
z=this.db.f
u=u.bx
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
z.f.aY()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cE().ay}},hq:{"^":"cT;0f,a,b,0c,0d,0e"},cT:{"^":"a;",
bf:["e_",function(){}]},hr:{"^":"cT;a,b,0c,0d,0e"},aW:{"^":"cT;0f,a,b,0c,0d,0e",
cT:function(a){var z,y
if(!J.G(this.f,a)){z=this.f
this.f=a
y=new D.A(this.b+".color",z,a,this,[V.U])
y.b=!0
this.a.G(y)}},
bf:["bC",function(){this.e_()
this.cT(new V.U(1,1,1))}],
sak:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.bf()
z=this.a
z.a=null
z.G(null)}this.cT(b)}},ht:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
fa:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.A(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.G(z)}},
bf:function(){this.bC()
this.fa(1)}},hu:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
bQ:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.A(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.G(z)}},
bf:function(){this.bC()
this.bQ(100)}},hC:{"^":"aP;0a,0b,0c,0d,0e,0f,0aa:r@",
gp:function(){var z=this.r
if(z==null){z=D.B()
this.r=z}return z},
G:[function(a){var z
H.i(a,"$isl")
z=this.r
if(!(z==null))z.w(a)},function(){return this.G(null)},"a5","$1","$0","gab",0,2,0],
cR:function(a){},
cS:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.c(this.gab(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.e
y=H.c(this.gab(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.A("bumpyTextureCube",x,this.f,this,[T.d2])
z.b=!0
this.G(z)}},
J:function(a,b){H.v(a,"$isd",[T.aH],"$asd")
if(b!=null)if(!C.a.av(a,b)){b.a=a.length
C.a.h(a,b)}},
a7:function(a,b){},
b5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
if(z==null){y=A.e1(this.d)
z=y.e
x=H.i(a.fr.i(0,z),"$ise0")
if(x==null){w=a.a
x=new A.e0(w,z)
x.aT(w,z)
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
x.b_(0,v.charCodeAt(0)==0?v:v,t.charCodeAt(0)==0?t:t)
x.y=x.f.i(0,"posAttr")
x.Q=x.f.i(0,"normAttr")
x.z=x.f.i(0,"binmAttr")
x.ch=x.f.i(0,"txt2DAttr")
x.cx=x.f.i(0,"txtCubeAttr")
x.cy=H.b(x.r.m(0,"viewObjMat"),"$isa0")
x.db=H.b(x.r.m(0,"projViewObjMat"),"$isa0")
if(z)x.dx=H.b(x.r.m(0,"txt2DMat"),"$isbE")
if(u)x.dy=H.b(x.r.m(0,"txtCubeMat"),"$isa0")
switch(s){case C.b:break
case C.f:break
case C.e:x.fr=H.b(x.r.m(0,"bumpTxt"),"$isa1")
x.fy=H.b(x.r.m(0,"nullBumpTxt"),"$isD")
break
case C.d:x.fx=H.b(x.r.m(0,"bumpTxt"),"$isae")
x.fy=H.b(x.r.m(0,"nullBumpTxt"),"$isD")
break}a.aV(x)}this.a=x
b.e=null
z=x}y=z.x
r=y.f
z=b.e
if(!(z instanceof Z.bd)){b.e=null
z=null}if(z==null||!z.d.u(0,r)){b.d.ag()
z=y.b
if(z)b.d.aK()
v=y.d
if(v)b.d.bk()
q=b.d.aW(new Z.c0(a.a),r)
q.a_($.$get$a2()).e=this.a.y.c
q.a_($.$get$au()).e=this.a.Q.c
if(z)q.a_($.$get$at()).e=this.a.z.c
if(y.c)q.a_($.$get$ai()).e=this.a.ch.c
if(v)q.a_($.$get$av()).e=this.a.cx.c
b.e=q}p=H.e([],[T.aH])
this.a.H(a)
z=this.a
v=a.gdN()
z=z.cy
z.toString
z.U(v.O(0,!0))
v=this.a
z=a.gcf()
v=v.db
v.toString
v.U(z.O(0,!0))
if(y.c){z=this.a
v=this.b
z=z.dx
z.toString
z.U(v.O(0,!0))}if(y.d){z=this.a
v=this.c
z=z.dy
z.toString
z.U(v.O(0,!0))}switch(y.a){case C.b:break
case C.f:break
case C.e:this.J(p,this.e)
z=this.a.fy
z.a.uniform1i(z.d,1)
break
case C.d:this.J(p,this.f)
z=this.a
v=this.f
u=z.fx
z=z.fy
if(v==null||v.d<6)z.a.uniform1i(z.d,1)
else{u.co(v)
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
z.f.aY()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return A.e1(this.d).e}},i7:{"^":"aP;0a,0b,0c,0d,0aa:e@",
gp:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
G:[function(a){var z
H.i(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.G(null)},"a5","$1","$0","gab",0,2,0],
a7:function(a,b){},
b5:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.i(a.fr.i(0,"Skybox"),"$ise8")
if(z==null){y=a.a
z=new A.e8(y,"Skybox")
z.aT(y,"Skybox")
z.b_(0,$.i9,$.i8)
z.x=z.f.i(0,"posAttr")
z.y=H.b(z.r.i(0,"fov"),"$isR")
z.z=H.b(z.r.i(0,"ratio"),"$isR")
z.Q=H.b(z.r.i(0,"boxClr"),"$isH")
z.ch=H.b(z.r.i(0,"boxTxt"),"$isae")
z.cx=H.b(z.r.i(0,"viewMat"),"$isa0")
a.aV(z)}this.a=z}if(b.e==null){y=b.d.aW(new Z.c0(a.a),$.$get$a2())
y.a_($.$get$a2()).e=this.a.x.c
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
w.ch.co(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gT(x).c9(0)
w=w.cx
w.toString
w.U(x.O(0,!0))
y=b.e
if(y instanceof Z.bd){y.H(a)
y.a3(a)
y.a1(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.aY()
y=this.c
if(y!=null)y.a1(a)}},aP:{"^":"a;"},ij:{"^":"aP;0a,0b,0c,0d,0aa:e@",
gp:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
G:[function(a){var z
H.i(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.G(null)},"a5","$1","$0","gab",0,2,0],
hW:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isf",[O.bB],"$asf")
for(z=b.length,y=this.gab(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gaa()==null){t=new D.aF()
t.a=H.e([],w)
t.c=0
u.saa(t)}t=u.gaa()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.a5()},"$2","geI",8,0,13],
hX:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isf",[O.bB],"$asf")
for(z=b.length,y=this.gab(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gaa()==null){t=new D.aF()
t.a=H.e([],w)
t.c=0
u.saa(t)}t=u.gaa()
t.toString
H.c(y,x)
C.a.F(t.a,y)}}this.a5()},"$2","geJ",8,0,13],
a7:function(a,b){},
b5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.h.a6(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.i(a.fr.i(0,y),"$isef")
if(x==null){x=A.ik(z,a.a)
a.aV(x)}this.b=x
y=x}if(b.e==null){y=b.d.aW(new Z.c0(a.a),$.$get$a2())
w=y.a_($.$get$a2())
v=this.b
w.e=v.x.c
b.e=y
y=v}y.H(a)
y=T.aH
u=H.e([],[y])
for(w=[P.w],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.v(u,"$isd",y,"$asd")
if(v!=null)if(!C.a.av(u,v)){v.a=u.length
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
n=new Float32Array(H.b3(H.v((q==null?new V.ag(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).O(0,!0),"$isd",w,"$asd")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.aO(0,0,1,1)
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
if(m==null)m=V.aO(0,0,1,1)
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
if(y instanceof Z.bd){y.H(a)
y.a3(a)
y.a1(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.f.aY()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},bB:{"^":"a;0a,0b,0c,0d,0e,0aa:f@",
gp:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
G:[function(a){var z
H.i(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.G(null)},"a5","$1","$0","gab",0,2,0],
n:{
eg:function(a,b,c,d,e){var z,y,x,w,v,u
z=new O.bB()
y=z.a
z.a=e
x=e.y
w=H.c(z.gab(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)
x=new D.A("texture",y,z.a,z,[T.ed])
x.b=!0
z.G(x)
v=V.ax()
if(!J.G(z.b,v)){y=z.b
z.b=v
x=new D.A("colorMatrix",y,v,z,[V.ag])
x.b=!0
z.G(x)}u=V.aO(0,0,1,1)
if(!J.G(z.c,u)){y=z.c
z.c=u
x=new D.A("source",y,u,z,[V.cm])
x.b=!0
z.G(x)}if(!J.G(z.d,b)){y=z.d
z.d=b
x=new D.A("destination",y,b,z,[V.cm])
x.b=!0
z.G(x)}if(z.e!==c){z.e=c
x=new D.A("flip",!c,c,z,[P.a7])
x.b=!0
z.G(x)}z.f=null
return z}}}}],["","",,T,{"^":"",aH:{"^":"cA;"},ed:{"^":"aH;0b,0c,0d,0e,0f,0r,0x,0y,a",
H:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
n:{
ee:function(a,b){var z=new T.ed(a)
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
z.y=D.B()
return z}}},d2:{"^":"aH;0b,0c,0d,0e,a",
H:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
a1:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},im:{"^":"a;a,0b,0c,0d,0e",
dB:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r.e=D.B()
this.aI(r,s,z,34069,!1,!1)
this.aI(r,s,w,34070,!1,!1)
this.aI(r,s,y,34071,!1,!1)
this.aI(r,s,v,34072,!1,!1)
this.aI(r,s,x,34073,!1,!1)
this.aI(r,s,u,34074,!1,!1)
return r},
h5:function(a){return this.dB(a,".png",!1,"")},
h6:function(a,b){return this.dB(a,b,!1,"")},
aI:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.aa
W.Y(z,"load",H.c(new T.io(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
f7:function(a,b,c){var z,y,x,w
b=V.bP(b,2)
z=V.bP(a.width,2)
y=V.bP(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cE(null,null)
x.width=z
x.height=y
w=H.i(C.k.dS(x,"2d"),"$isdv")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kw(w.getImageData(0,0,x.width,x.height))}}},io:{"^":"t:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.f7(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.hw(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.d7();++z.e}}}],["","",,X,{"^":"",fq:{"^":"cn;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gp:function(){var z=this.db
if(z==null){z=D.B()
this.db=z}return z},
ai:function(a){var z=this.db
if(!(z==null))z.w(a)},
H:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f==null){z=a.a
y=this.y
x=this.a
w=this.b
v=H.Z(z.getParameter(3379))
u=V.bP(x,2)
t=V.bP(w,2)
v=V.bP(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.q.dK(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.ee(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
r.y.d7()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=this.y
x=y.b
this.r=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.x=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.f=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.r,0)
z.framebufferRenderbuffer(36160,36096,36161,this.x)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.f)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.cy
y=z.c
a.c=C.c.Y(y*this.a)
x=z.d
a.d=C.c.Y(x*this.b)
w=this.c
q=C.c.Y(z.a*w)
p=this.d
o=C.c.Y(z.b*p)
n=C.c.Y(y*w)
m=C.c.Y(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.ch)
if(this.Q){z=a.a
y=this.z
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
a1:function(a){a.a.bindFramebuffer(36160,null)},
n:{
dq:function(a,b,c){var z=new X.fq()
z.a=a
z.b=b
z.c=a
z.d=b
z.e=!0
z.y=T.ee(0,null)
z.z=new V.a9(0,0,0,1)
z.Q=!0
z.ch=2000
z.cx=!0
z.cy=V.aO(0,0,1,1)
return z}}},cb:{"^":"a;",$isaA:1},fZ:{"^":"cn;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.B()
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
v=C.c.Y(w.a*y)
if(typeof x!=="number")return H.r(x)
u=C.c.Y(w.b*x)
t=C.c.Y(w.c*y)
a.c=t
w=C.c.Y(w.d*x)
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
cJ:function(a,b,c,d,e,f,g){var z,y
z=new X.fZ()
y=new V.a9(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.aO(0,0,1,1)
z.r=y
return z}}},h0:{"^":"a;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
H:function(a){var z
a.cy.bz(V.ax())
z=V.ax()
a.db.bz(z)},
a1:function(a){a.cy.aA()
a.db.aA()},
$isaA:1,
$iscb:1},hI:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
ai:[function(a){var z
H.i(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.ai(null)},"hF","$1","$0","gcu",0,2,0],
sb1:function(a){var z,y,x
if(!J.G(this.a,a)){z=this.a
if(z!=null){z=z.gp()
z.toString
y=H.c(this.gcu(),{func:1,ret:-1,args:[D.l]})
C.a.F(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gp()
z.toString
y=H.c(this.gcu(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.A("mover",x,this.a,this,[U.ab])
z.b=!0
this.ai(z)}},
H:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bz(V.aG(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.e5
if(z==null){z=V.dY(new V.V(0,0,0),new V.E(0,1,0),new V.E(0,0,-1))
$.e5=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aS(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bz(r)},
a1:function(a){a.cy.aA()
a.db.aA()},
$isaA:1,
$iscb:1,
n:{
e4:function(a,b,c,d){var z,y,x
z=new X.hI()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
z.sb1(c)
y=z.b
if(!$.n.$2(y,b)){x=z.b
z.b=b
y=new D.A("fov",x,b,z,[P.w])
y.b=!0
z.ai(y)}y=z.c
if(!$.n.$2(y,d)){x=z.c
z.c=d
y=new D.A("near",x,d,z,[P.w])
y.b=!0
z.ai(y)}y=z.d
if(!$.n.$2(y,a)){x=z.d
z.d=a
y=new D.A("far",x,a,z,[P.w])
y.b=!0
z.ai(y)}return z}}},cn:{"^":"a;"}}],["","",,B,{"^":"",
kU:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.f9(x,(x&&C.m).cz(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.aa
W.Y(z,"scroll",H.c(new B.kV(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
kW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(b,"$isd",[P.q],"$asd")
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
u=W.cE(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.i(v.insertCell(-1),"$isby")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.i(q.insertCell(-1),"$isby").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;!1;++p){o=z.createElement("div")
if(p>=0)return H.h(b,p)
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.i(q.insertCell(-1),"$isby")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.i(q.insertCell(-1),"$isby")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.i(q.insertCell(-1),"$isby").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.kU(a,y,!1,"../resources/SnowTop.png")},
kX:function(a){P.iv(C.v,new B.kY(a))},
kV:{"^":"t:12;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.j(-0.05*C.c.Y(this.b.scrollTop))+"px"
z.top=y}},
kY:{"^":"t:38;a",
$1:function(a){H.i(a,"$isb_")
P.dk(C.c.dM(this.a.gfZ(),2)+" fps")}}}],["","",,S,{"^":"",
fd:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
B.kW("Test 031",H.e([],[P.q]),"A test of the Distortion cover with a dynamic normal map. The distortion map is generated into one back buffer. The scene is generated into another back buffer. The two parts are combined with a Distortion cover. Use mouse to rotate cube in normal map and Ctrl plus mouse to rotate scene.")
z=document.getElementById("threeDart")
if(z==null)H.p(P.o("Failed to find an element with the identifier, threeDart."))
y=E.it(z,!0,!0,!0,!1)
x=E.cI(null,!0,null,"",null,null)
w=F.d0()
F.bK(w,null,null,1,1,1,0,0,1)
F.bK(w,null,null,1,1,0,1,0,3)
F.bK(w,null,null,1,1,0,0,1,2)
F.bK(w,null,null,1,1,-1,0,0,0)
F.bK(w,null,null,1,1,0,-1,0,0)
F.bK(w,null,null,1,1,0,0,-1,3)
w.ag()
x.sbb(0,w)
v=U.dM(null)
v.h(0,U.eD(!1,!1,y.r,!1,!1,!1,null,!1))
v.h(0,U.eE(!1,!1,y.r,null,!1))
x.sb1(v)
u=new O.hC()
u.b=new V.aX(1,0,0,0,1,0,0,0,1)
u.c=V.ax()
u.d=C.b
u.cR(null)
u.cS(null)
u.a5()
u.r=null
v=y.f.h5("../resources/diceBumpMap")
if(u.d!==C.d){u.d=C.d
u.cR(null)
u.a=null}u.cS(v)
t=X.dq(800,600,!0)
v=new V.a9(0.5,0.5,1,1)
if(!t.z.u(0,v)){s=t.z
t.z=v
v=new D.A("color",s,v,t,[V.a9])
v.b=!0
t.ai(v)}r=M.dJ(null,null,null,null)
r.sao(u)
r.saB(0,t)
r.d.h(0,x)
r.a.sb1(U.cF(V.e_(0,0,5)))
q=U.dM(null)
q.h(0,U.eD(!1,!0,y.r,!1,!1,!1,null,!1))
q.h(0,U.eE(!1,!0,y.r,null,!1))
q.h(0,U.cF(V.e_(0,0,5)))
p=X.e4(2000,1.0471975511965976,q,0.1)
o=X.dq(800,600,!0)
if(o.Q){o.Q=!1
v=new D.A("clearColor",!0,!1,o,[P.a7])
v.b=!0
o.ai(v)}n=E.cI(null,!0,null,"",null,null)
n.sbb(0,F.l0(30,1,15,0.5))
m=new O.ho()
v=O.cc(V.ag)
m.e=v
v.aC(m.geA(),m.geB())
v=new O.aW(m,"emission")
v.c=C.b
v.f=new V.U(0,0,0)
m.f=v
v=new O.aW(m,"ambient")
v.c=C.b
v.f=new V.U(0,0,0)
m.r=v
v=new O.aW(m,"diffuse")
v.c=C.b
v.f=new V.U(0,0,0)
m.x=v
v=new O.aW(m,"invDiffuse")
v.c=C.b
v.f=new V.U(0,0,0)
m.y=v
v=new O.hu(m,"specular")
v.c=C.b
v.f=new V.U(0,0,0)
v.ch=100
m.z=v
v=new O.hr(m,"bump")
v.c=C.b
m.Q=v
m.ch=null
v=new O.aW(m,"reflect")
v.c=C.b
v.f=new V.U(0,0,0)
m.cx=v
v=new O.ht(m,"refract")
v.c=C.b
v.f=new V.U(0,0,0)
v.ch=1
m.cy=v
v=new O.hq(m,"alpha")
v.c=C.b
v.f=1
m.db=v
v=new D.h8()
v.bc(D.X)
v.e=H.e([],[D.cf])
v.f=H.e([],[D.hK])
v.r=H.e([],[D.ia])
v.x=H.e([],[D.ip])
v.y=H.e([],[D.iq])
v.z=H.e([],[D.ir])
v.Q=null
v.ch=null
v.cn(v.gez(),v.geU(),v.geW())
m.dx=v
l=v.Q
if(l==null){l=D.B()
v.Q=l
v=l}else v=l
l={func:1,ret:-1,args:[D.l]}
k=H.c(m.gf5(),l)
C.a.h(v.a,k)
k=m.dx
v=k.ch
if(v==null){v=D.B()
k.ch=v}k=H.c(m.gab(),l)
C.a.h(v.a,k)
m.dy=null
k=m.dx
v=U.cF(V.dY(new V.V(0,0,0),new V.E(0,1,0),new V.E(0,-1,-1)))
j=new V.U(1,1,1)
i=new D.cf()
i.c=new V.U(1,1,1)
i.a=new V.E(0,0,1)
s=i.b
i.b=v
v=v.gp()
v.toString
h=H.c(i.ge7(),l)
C.a.h(v.a,h)
v=new D.A("mover",s,i.b,i,[U.ab])
v.b=!0
i.aE(v)
if(!i.c.u(0,j)){s=i.c
i.c=j
v=new D.A("color",s,j,i,[V.U])
v.b=!0
i.aE(v)}k.h(0,i)
v=m.r
v.sak(0,new V.U(0,0,1))
v=m.x
v.sak(0,new V.U(0,1,0))
v=m.z
v.sak(0,new V.U(1,0,0))
v=m.z
if(v.c===C.b){v.c=C.f
v.bC()
v.bQ(100)
k=v.a
k.a=null
k.G(null)}v.bQ(10)
v=y.f.h6("../resources/maskonaive",".jpg")
g=M.cG(null,null,null)
k=new O.i7()
k.b=1.0471975511965976
s=k.c
k.c=v
v=v.e
i=H.c(k.gab(),l)
C.a.h(v.a,i)
v=new D.A("boxTexture",s,k.c,k,[T.d2])
v.b=!0
k.G(v)
j=new V.U(1,1,1)
if(!J.G(k.d,j)){s=k.d
k.d=j
v=new D.A("boxColor",s,j,k,[V.U])
v.b=!0
k.G(v)}k.e=null
g.sao(k)
g.saB(0,o)
g.saX(p)
f=M.dJ(null,null,null,null)
f.saX(p)
f.sao(m)
f.saB(0,o)
f.d.h(0,n)
e=new O.fJ()
e.sd3(null)
e.sd1(null)
d=new V.aX(1,0,0,0,1,0,0,0,1)
if(!J.G(e.d,d)){e.d=d
e.a5()}d=new V.aX(1,0,0,0,1,0,0,0,1)
if(!J.G(e.e,d)){e.e=d
e.a5()}e.sd0(null)
e.sd3(o.y)
e.sd1(t.y)
e.sd0(V.dZ(0.05,0.05,0.05,1))
c=M.cG(null,null,null)
c.sao(e)
b=new O.ij()
a=new V.a9(0,0,0,0)
b.a=a
v=new D.A("backColor",null,a,b,[V.a9])
v.b=!0
b.G(v)
b.b=null
v=O.cc(O.bB)
b.c=v
v.aC(b.geI(),b.geJ())
b.d=0
b.e=null
v=b.c
k=t.y
v.h(0,O.eg(null,V.aO(0,0.8,0.2,0.2),!0,null,k))
k=b.c
v=o.y
k.h(0,O.eg(null,V.aO(0,0.6,0.2,0.2),!1,null,v))
a0=M.cG(null,null,null)
a0.saB(0,X.cJ(!1,!0,!1,null,2000,null,0))
a0.sao(b)
v=M.aB
k=H.e([g,f,r,c,a0],[v])
i=new M.fA()
i.bc(v)
i.e=!1
i.f=null
i.aC(i.geX(),i.geY())
i.bT(0,k)
v=y.d
if(v!==i){if(v!=null){v=v.gp()
v.toString
k=H.c(y.gcs(),l)
C.a.F(v.a,k)}y.d=i
v=i.gp()
v.toString
l=H.c(y.gcs(),l)
C.a.h(v.a,l)
y.e5()}B.kX(y)}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dQ.prototype
return J.dP.prototype}if(typeof a=="string")return J.ck.prototype
if(a==null)return J.dR.prototype
if(typeof a=="boolean")return J.h5.prototype
if(a.constructor==Array)return J.bT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bV.prototype
return a}if(a instanceof P.a)return a
return J.cw(a)}
J.c4=function(a){if(typeof a=="string")return J.ck.prototype
if(a==null)return a
if(a.constructor==Array)return J.bT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bV.prototype
return a}if(a instanceof P.a)return a
return J.cw(a)}
J.dg=function(a){if(a==null)return a
if(a.constructor==Array)return J.bT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bV.prototype
return a}if(a instanceof P.a)return a
return J.cw(a)}
J.kB=function(a){if(typeof a=="number")return J.bU.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cp.prototype
return a}
J.kC=function(a){if(typeof a=="number")return J.bU.prototype
if(typeof a=="string")return J.ck.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cp.prototype
return a}
J.c5=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bV.prototype
return a}if(a instanceof P.a)return a
return J.cw(a)}
J.G=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).u(a,b)}
J.fj=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kB(a).aq(a,b)}
J.dl=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kC(a).k(a,b)}
J.fk=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kL(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c4(a).i(a,b)}
J.fl=function(a,b,c,d){return J.c5(a).cY(a,b,c,d)}
J.cz=function(a,b,c){return J.c4(a).fR(a,b,c)}
J.dm=function(a,b){return J.dg(a).E(a,b)}
J.fm=function(a,b){return J.dg(a).M(a,b)}
J.aL=function(a){return J.K(a).gV(a)}
J.c8=function(a){return J.dg(a).ga0(a)}
J.bb=function(a){return J.c4(a).gl(a)}
J.a8=function(a){return J.K(a).j(a)}
var $=I.p
C.k=W.cD.prototype
C.m=W.fD.prototype
C.w=J.m.prototype
C.a=J.bT.prototype
C.x=J.dP.prototype
C.h=J.dQ.prototype
C.y=J.dR.prototype
C.c=J.bU.prototype
C.i=J.ck.prototype
C.F=J.bV.prototype
C.G=W.hB.prototype
C.p=J.hJ.prototype
C.q=P.cZ.prototype
C.l=J.cp.prototype
C.r=W.bH.prototype
C.t=W.j_.prototype
C.u=new P.hG()
C.j=new P.jL()
C.b=new A.cd(0,"ColorSourceType.None")
C.f=new A.cd(1,"ColorSourceType.Solid")
C.e=new A.cd(2,"ColorSourceType.Texture2D")
C.d=new A.cd(3,"ColorSourceType.TextureCube")
C.v=new P.bg(5e6)
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
$.aw=0
$.bc=null
$.dr=null
$.d9=!1
$.fa=null
$.f4=null
$.fg=null
$.cv=null
$.cx=null
$.dh=null
$.b4=null
$.bL=null
$.bM=null
$.da=!1
$.P=C.j
$.dF=null
$.dE=null
$.dD=null
$.dC=null
$.n=V.hv()
$.fL="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.fK="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.i9="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.i8="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.e5=null
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
I.$lazy(y,x,w)}})(["dB","$get$dB",function(){return H.f9("_$dart_dartClosure")},"cN","$get$cN",function(){return H.f9("_$dart_js")},"ek","$get$ek",function(){return H.aC(H.co({
toString:function(){return"$receiver$"}}))},"el","$get$el",function(){return H.aC(H.co({$method$:null,
toString:function(){return"$receiver$"}}))},"em","$get$em",function(){return H.aC(H.co(null))},"en","$get$en",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"er","$get$er",function(){return H.aC(H.co(void 0))},"es","$get$es",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ep","$get$ep",function(){return H.aC(H.eq(null))},"eo","$get$eo",function(){return H.aC(function(){try{null.$method$}catch(z){return z.message}}())},"eu","$get$eu",function(){return H.aC(H.eq(void 0))},"et","$get$et",function(){return H.aC(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d6","$get$d6",function(){return P.j0()},"bN","$get$bN",function(){return[]},"dA","$get$dA",function(){return{}},"eH","$get$eH",function(){return Z.ao(0)},"eF","$get$eF",function(){return Z.ao(511)},"a2","$get$a2",function(){return Z.ao(1)},"au","$get$au",function(){return Z.ao(2)},"at","$get$at",function(){return Z.ao(4)},"ai","$get$ai",function(){return Z.ao(8)},"av","$get$av",function(){return Z.ao(16)},"bF","$get$bF",function(){return Z.ao(32)},"bG","$get$bG",function(){return Z.ao(64)},"eG","$get$eG",function(){return Z.ao(96)},"b1","$get$b1",function(){return Z.ao(128)},"aI","$get$aI",function(){return Z.ao(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[W.az]},{func:1,ret:-1,args:[P.q,,]},{func:1,ret:-1,args:[P.J,[P.f,E.aE]]},{func:1,ret:P.I,args:[F.al]},{func:1,ret:P.I,args:[D.l]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:P.I,args:[W.aa]},{func:1,ret:-1,args:[P.J,[P.f,O.bB]]},{func:1,ret:-1,args:[P.J,[P.f,V.ag]]},{func:1,ret:P.I,args:[F.am,P.w,P.w]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.q,args:[P.J]},{func:1,ret:-1,args:[P.J,[P.f,M.aB]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.J,[P.f,U.ab]]},{func:1,ret:P.w},{func:1,ret:P.I,args:[,]},{func:1,ret:-1,args:[P.J,[P.f,D.X]]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[W.bH]},{func:1,ret:P.a7,args:[P.w,P.w]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:W.a3,args:[W.L]},{func:1,ret:P.a7,args:[W.L]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.q,P.q]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:V.V,args:[P.w]},{func:1,ret:P.a7,args:[[P.f,D.X]]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:-1,args:[P.a],opt:[P.as]},{func:1,args:[P.q]},{func:1,ret:P.I,args:[P.b_]},{func:1,args:[,P.q]},{func:1,ret:P.I,args:[P.S]}]
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
if(x==y)H.l_(d||a)
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
Isolate.de=a.de
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
if(typeof dartMainRunner==="function")dartMainRunner(S.fd,[])
else S.fd([])})})()
//# sourceMappingURL=test.dart.js.map
