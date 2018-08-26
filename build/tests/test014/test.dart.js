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
var d=supportsDirectProtoAccess&&b2!="b"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dz(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dB=function(){}
var dart=[["","",,H,{"^":"",og:{"^":"b;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
dG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cE:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dE==null){H.mG()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c8("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cZ()]
if(v!=null)return v
v=H.mL(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cZ(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
q:{"^":"b;",
A:function(a,b){return a===b},
gT:function(a){return H.bK(a)},
i:["eC",function(a){return"Instance of '"+H.bc(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hX:{"^":"q;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isag:1},
eh:{"^":"q;",
A:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isI:1},
d_:{"^":"q;",
gT:function(a){return 0},
i:["eD",function(a){return String(a)}]},
iF:{"^":"d_;"},
c9:{"^":"d_;"},
c6:{"^":"d_;",
i:function(a){var z=a[$.$get$e1()]
if(z==null)return this.eD(a)
return"JavaScript function for "+H.l(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscW:1},
b7:{"^":"q;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.u(P.B("add"))
a.push(b)},
L:function(a,b){var z
if(!!a.fixed$length)H.u(P.B("remove"))
for(z=0;z<a.length;++z)if(J.T(a[z],b)){a.splice(z,1)
return!0}return!1},
ce:function(a,b){var z,y
H.w(b,"$isi",[H.y(a,0)],"$asi")
if(!!a.fixed$length)H.u(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.E)(b),++y)a.push(b[y])},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b3(a))}},
a_:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hI:function(a,b,c,d){var z,y,x
H.A(b,d)
H.f(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b3(a))}return y},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bT:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a1(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a1(c,b,a.length,"end",null))
if(b===c)return H.h([],[H.y(a,0)])
return H.h(a.slice(b,c),[H.y(a,0)])},
gaE:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hV())},
aB:function(a,b,c,d){var z
H.A(d,H.y(a,0))
if(!!a.immutable$list)H.u(P.B("fill range"))
P.aP(b,c,a.length,null,null,null)
for(z=b;z.O(0,c);z=z.F(0,1))a[z]=d},
b4:function(a,b){var z
for(z=0;z<a.length;++z)if(J.T(a[z],b))return!0
return!1},
i:function(a){return P.cX(a,"[","]")},
ga4:function(a){return new J.au(a,a.length,0,[H.y(a,0)])},
gT:function(a){return H.bK(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cf(b,"newLength",null))
if(b<0)throw H.a(P.a1(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.u(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
a[b]=c},
$isi:1,
$isc:1,
q:{
hW:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cf(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a1(a,0,4294967295,"length",null))
return J.ee(new Array(a),b)},
ee:function(a,b){return J.bE(H.h(a,[b]))},
bE:function(a){H.bY(a)
a.fixed$length=Array
return a}}},
of:{"^":"b7;$ti"},
au:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c4:{"^":"q;",
ghP:function(a){return a===0?1/a<0:a<0},
im:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.B(""+a+".toInt()"))},
cC:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
er:function(a,b){var z
if(b>20)throw H.a(P.a1(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghP(a))return"-"+z
return z},
bg:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Y(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.u(P.B("Unexpected toString result: "+z))
x=J.aM(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.ad(b))
return a*b},
bk:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eF:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.du(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.du(a,b)},
du:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aP:function(a,b){var z
if(a>0)z=this.ds(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fZ:function(a,b){if(b<0)throw H.a(H.ad(b))
return this.ds(a,b)},
ds:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.a(H.ad(b))
return a<b},
$isr:1,
$isZ:1},
eg:{"^":"c4;",$isn:1},
ef:{"^":"c4;"},
c5:{"^":"q;",
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b<0)throw H.a(H.aL(a,b))
if(b>=a.length)H.u(H.aL(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.a(H.aL(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.cf(b,null,null))
return a+b},
aY:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.ad(b))
c=P.aP(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.u(H.ad(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ae:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.u(H.ad(c))
if(typeof c!=="number")return c.O()
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ad:function(a,b){return this.ae(a,b,0)},
B:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.ad(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.a(P.cu(b,null,null))
if(b>c)throw H.a(P.cu(b,null,null))
if(c>a.length)throw H.a(P.cu(c,null,null))
return a.substring(b,c)},
aH:function(a,b){return this.B(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
i_:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
ah:function(a,b){return this.i_(a,b," ")},
ed:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ec:function(a,b){return this.ed(a,b,0)},
hy:function(a,b,c){if(c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
return H.nj(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ises:1,
$isk:1}}],["","",,H,{"^":"",
cF:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hV:function(){return new P.jg("No element")},
hm:{"^":"jO;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.b.Y(this.a,b)},
$ascx:function(){return[P.n]},
$asz:function(){return[P.n]},
$asi:function(){return[P.n]},
$asc:function(){return[P.n]}},
hE:{"^":"i;"},
ib:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.aM(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b3(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
ik:{"^":"i;a,b,$ti",
ga4:function(a){return new H.il(J.bx(this.a),this.b,this.$ti)},
gl:function(a){return J.at(this.a)},
J:function(a,b){return this.b.$1(J.cK(this.a,b))},
$asi:function(a,b){return[b]}},
il:{"^":"cY;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascY:function(a,b){return[b]}},
kj:{"^":"i;a,b,$ti",
ga4:function(a){return new H.kk(J.bx(this.a),this.b,this.$ti)}},
kk:{"^":"cY;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cm:{"^":"b;$ti"},
cx:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.A(c,H.az(this,"cx",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
aB:function(a,b,c,d){H.A(d,H.az(this,"cx",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
jO:{"^":"cp+cx;"}}],["","",,H,{"^":"",
hr:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
mB:function(a){return init.types[H.D(a)]},
fT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isG},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.ad(a))
return z},
bK:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iP:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
bc:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.M(a).$isc9){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.I(w,0)===36)w=C.b.aH(w,1)
r=H.dF(H.bY(H.b0(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iH:function(){if(!!self.location)return self.location.href
return},
ev:function(a){var z,y,x,w,v
H.bY(a)
z=J.at(a)
if(typeof z!=="number")return z.ez()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iQ:function(a){var z,y,x,w
z=H.h([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.E)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ad(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aP(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ad(w))}return H.ev(z)},
ew:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ad(x))
if(x<0)throw H.a(H.ad(x))
if(x>65535)return H.iQ(a)}return H.ev(a)},
iR:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ez()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cs:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aP(z,10))>>>0,56320|z&1023)}}throw H.a(P.a1(a,0,1114111,null,null))},
af:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iO:function(a){return a.b?H.af(a).getUTCFullYear()+0:H.af(a).getFullYear()+0},
iM:function(a){return a.b?H.af(a).getUTCMonth()+1:H.af(a).getMonth()+1},
iI:function(a){return a.b?H.af(a).getUTCDate()+0:H.af(a).getDate()+0},
iJ:function(a){return a.b?H.af(a).getUTCHours()+0:H.af(a).getHours()+0},
iL:function(a){return a.b?H.af(a).getUTCMinutes()+0:H.af(a).getMinutes()+0},
iN:function(a){return a.b?H.af(a).getUTCSeconds()+0:H.af(a).getSeconds()+0},
iK:function(a){return a.b?H.af(a).getUTCMilliseconds()+0:H.af(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ad(a))},
e:function(a,b){if(a==null)J.at(a)
throw H.a(H.aL(a,b))},
aL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,"index",null)
z=H.D(J.at(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.U(b,a,"index",null,z)
return P.cu(b,"index",null)},
mv:function(a,b,c){if(a>c)return new P.ct(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ct(a,c,!0,b,"end","Invalid value")
return new P.aN(!0,b,"end",null)},
ad:function(a){return new P.aN(!0,a,null,null)},
ml:function(a){if(typeof a!=="number")throw H.a(H.ad(a))
return a},
a:function(a){var z
if(a==null)a=new P.er()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h0})
z.name=""}else z.toString=H.h0
return z},
h0:function(){return J.a9(this.dartException)},
u:function(a){throw H.a(a)},
E:function(a){throw H.a(P.b3(a))},
as:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nm(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aP(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d0(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eq(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eK()
u=$.$get$eL()
t=$.$get$eM()
s=$.$get$eN()
r=$.$get$eR()
q=$.$get$eS()
p=$.$get$eP()
$.$get$eO()
o=$.$get$eU()
n=$.$get$eT()
m=v.ag(y)
if(m!=null)return z.$1(H.d0(H.O(y),m))
else{m=u.ag(y)
if(m!=null){m.method="call"
return z.$1(H.d0(H.O(y),m))}else{m=t.ag(y)
if(m==null){m=s.ag(y)
if(m==null){m=r.ag(y)
if(m==null){m=q.ag(y)
if(m==null){m=p.ag(y)
if(m==null){m=s.ag(y)
if(m==null){m=o.ag(y)
if(m==null){m=n.ag(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eq(H.O(y),m))}}return z.$1(new H.jN(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eC()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aN(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eC()
return a},
bv:function(a){var z
if(a==null)return new H.fn(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fn(a)},
my:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mI:function(a,b,c,d,e,f){H.d(a,"$iscW")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.x("Unsupported number of arguments for wrapped closure"))},
bt:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mI)
a.$identity=z
return z},
hl:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$isc){z.$reflectionInfo=d
x=H.iW(z).r}else x=d
w=e?Object.create(new H.jh().constructor.prototype):Object.create(new H.cN(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aA
if(typeof u!=="number")return u.F()
$.aA=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dY(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mB,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dT:H.cO
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dY(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hi:function(a,b,c,d){var z=H.cO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dY:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hk(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hi(y,!w,z,b)
if(y===0){w=$.aA
if(typeof w!=="number")return w.F()
$.aA=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.by
if(v==null){v=H.cg("self")
$.by=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aA
if(typeof w!=="number")return w.F()
$.aA=w+1
t+=w
w="return function("+t+"){return this."
v=$.by
if(v==null){v=H.cg("self")
$.by=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hj:function(a,b,c,d){var z,y
z=H.cO
y=H.dT
switch(b?-1:a){case 0:throw H.a(H.j5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hk:function(a,b){var z,y,x,w,v,u,t,s
z=$.by
if(z==null){z=H.cg("self")
$.by=z}y=$.dS
if(y==null){y=H.cg("receiver")
$.dS=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hj(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aA
if(typeof y!=="number")return y.F()
$.aA=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aA
if(typeof y!=="number")return y.F()
$.aA=y+1
return new Function(z+y+"}")()},
dz:function(a,b,c,d,e,f,g){var z,y
z=J.bE(H.bY(b))
H.D(c)
y=!!J.M(d).$isc?J.bE(d):d
return H.hl(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ax(a,"String"))},
mw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"double"))},
n8:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"num"))},
fK:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ax(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ax(a,"int"))},
fY:function(a,b){throw H.a(H.ax(a,H.O(b).substring(3)))},
na:function(a,b){var z=J.aM(b)
throw H.a(H.hh(a,z.B(b,3,z.gl(b))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.fY(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.na(a,b)},
bY:function(a){if(a==null)return a
if(!!J.M(a).$isc)return a
throw H.a(H.ax(a,"List"))},
fV:function(a,b){if(a==null)return a
if(!!J.M(a).$isc)return a
if(J.M(a)[b])return a
H.fY(a,b)},
fP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
cb:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fP(J.M(a))
if(z==null)return!1
y=H.fS(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dv)return a
$.dv=!0
try{if(H.cb(a,b))return a
z=H.ce(b)
y=H.ax(a,z)
throw H.a(y)}finally{$.dv=!1}},
dC:function(a,b){if(a!=null&&!H.dy(a,b))H.u(H.ax(a,H.ce(b)))
return a},
fF:function(a){var z
if(a instanceof H.m){z=H.fP(J.M(a))
if(z!=null)return H.ce(z)
return"Closure"}return H.bc(a)},
nk:function(a){throw H.a(new P.hw(H.O(a)))},
fQ:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
b0:function(a){if(a==null)return
return a.$ti},
pm:function(a,b,c){return H.bw(a["$as"+H.l(c)],H.b0(b))},
b_:function(a,b,c,d){var z
H.O(c)
H.D(d)
z=H.bw(a["$as"+H.l(c)],H.b0(b))
return z==null?null:z[d]},
az:function(a,b,c){var z
H.O(b)
H.D(c)
z=H.bw(a["$as"+H.l(b)],H.b0(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.D(b)
z=H.b0(a)
return z==null?null:z[b]},
ce:function(a){var z=H.b1(a,null)
return z},
b1:function(a,b){var z,y
H.w(b,"$isc",[P.k],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dF(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.l(b[y])}if('func' in a)return H.mb(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.k]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.b.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b1(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b1(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b1(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b1(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mx(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dF:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.k],"$asc")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b1(u,c)}v="<"+z.i(0)+">"
return v},
bw:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bs:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b0(a)
y=J.M(a)
if(y[b]==null)return!1
return H.fI(H.bw(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.O(b)
H.bY(c)
H.O(d)
if(a==null)return a
z=H.bs(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dF(c,0,null)
throw H.a(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fI:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
pk:function(a,b,c){return a.apply(b,H.bw(J.M(b)["$as"+H.l(c)],H.b0(b)))},
fU:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="I"||a===-1||a===-2||H.fU(z)}return!1},
dy:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="I"||b===-1||b===-2||H.fU(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dy(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cb(a,b)}y=J.M(a).constructor
x=H.b0(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aq(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dy(a,b))throw H.a(H.ax(a,H.ce(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.fS(a,b,c,d)
if('func' in a)return c.builtin$cls==="cW"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bC" in y.prototype))return!1
w=y.prototype["$as"+"bC"]
v=H.bw(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ce(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fI(H.bw(r,z),b,u,d)},
fS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.n7(m,b,l,d)},
n7:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
pl:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
mL:function(a){var z,y,x,w,v,u
z=H.O($.fR.$1(a))
y=$.cD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.fH.$2(a,z))
if(z!=null){y=$.cD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cH(x)
$.cD[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cG[z]=x
return x}if(v==="-"){u=H.cH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fX(a,x)
if(v==="*")throw H.a(P.c8(z))
if(init.leafTags[z]===true){u=H.cH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fX(a,x)},
fX:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dG(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cH:function(a){return J.dG(a,!1,null,!!a.$isG)},
n6:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cH(z)
else return J.dG(z,c,null,null)},
mG:function(){if(!0===$.dE)return
$.dE=!0
H.mH()},
mH:function(){var z,y,x,w,v,u,t,s
$.cD=Object.create(null)
$.cG=Object.create(null)
H.mC()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fZ.$1(v)
if(u!=null){t=H.n6(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mC:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.br(C.J,H.br(C.O,H.br(C.u,H.br(C.u,H.br(C.N,H.br(C.K,H.br(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fR=new H.mD(v)
$.fH=new H.mE(u)
$.fZ=new H.mF(t)},
br:function(a,b){return a(b)||b},
nj:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hq:{"^":"b;$ti",
i:function(a){return P.d2(this)},
m:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
return H.hr()},
$isK:1},
hs:{"^":"hq;a,b,c,$ti",
gl:function(a){return this.a},
cp:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.cp(0,b))return
return this.dg(b)},
dg:function(a){return this.b[H.O(a)]},
K:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.f(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.dg(v),z))}}},
iV:{"^":"b;a,b,c,d,e,f,r,0x",q:{
iW:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bE(z)
y=z[0]
x=z[1]
return new H.iV(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jz:{"^":"b;a,b,c,d,e,f",
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
q:{
aI:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jz(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eQ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iC:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
eq:function(a,b){return new H.iC(a,b==null?null:b.method)}}},
i_:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
q:{
d0:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i_(a,y,z?null:b.receiver)}}},
jN:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nm:{"^":"m:20;a",
$1:function(a){if(!!J.M(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
$isaw:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.bc(this).trim()+"'"},
gew:function(){return this},
$iscW:1,
gew:function(){return this}},
eG:{"^":"m;"},
jh:{"^":"eG;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cN:{"^":"eG;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cN))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bK(this.a)
else y=typeof z!=="object"?J.b2(z):H.bK(z)
return(y^H.bK(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bc(z)+"'")},
q:{
cO:function(a){return a.a},
dT:function(a){return a.c},
cg:function(a){var z,y,x,w,v
z=new H.cN("self","target","receiver","name")
y=J.bE(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jA:{"^":"a5;a",
i:function(a){return this.a},
q:{
ax:function(a,b){return new H.jA("TypeError: "+H.l(P.cl(a))+": type '"+H.fF(a)+"' is not a subtype of type '"+b+"'")}}},
hg:{"^":"a5;a",
i:function(a){return this.a},
q:{
hh:function(a,b){return new H.hg("CastError: "+H.l(P.cl(a))+": type '"+H.fF(a)+"' is not a subtype of type '"+b+"'")}}},
j4:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
q:{
j5:function(a){return new H.j4(a)}}},
co:{"^":"ih;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaD:function(a){return new H.i4(this,[H.y(this,0)])},
cp:function(a,b){var z=this.b
if(z==null)return!1
return this.eX(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bn(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bn(w,b)
x=y==null?null:y.b
return x}else return this.hN(b)},
hN:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.di(z,this.ef(a))
x=this.eg(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c3()
this.b=z}this.d5(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c3()
this.c=y}this.d5(y,b,c)}else this.hO(b,c)},
hO:function(a,b){var z,y,x,w
H.A(a,H.y(this,0))
H.A(b,H.y(this,1))
z=this.d
if(z==null){z=this.c3()
this.d=z}y=this.ef(a)
x=this.di(z,y)
if(x==null)this.cb(z,y,[this.c4(a,b)])
else{w=this.eg(x,a)
if(w>=0)x[w].b=b
else x.push(this.c4(a,b))}},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b3(this))
z=z.c}},
d5:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.bn(a,b)
if(z==null)this.cb(a,b,this.c4(b,c))
else z.b=c},
f6:function(){this.r=this.r+1&67108863},
c4:function(a,b){var z,y
z=new H.i3(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f6()
return z},
ef:function(a){return J.b2(a)&0x3ffffff},
eg:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
i:function(a){return P.d2(this)},
bn:function(a,b){return a[b]},
di:function(a,b){return a[b]},
cb:function(a,b,c){a[b]=c},
f_:function(a,b){delete a[b]},
eX:function(a,b){return this.bn(a,b)!=null},
c3:function(){var z=Object.create(null)
this.cb(z,"<non-identifier-key>",z)
this.f_(z,"<non-identifier-key>")
return z},
$isek:1},
i3:{"^":"b;a,b,0c,0d"},
i4:{"^":"hE;a,$ti",
gl:function(a){return this.a.a},
ga4:function(a){var z,y
z=this.a
y=new H.i5(z,z.r,this.$ti)
y.c=z.e
return y}},
i5:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b3(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mD:{"^":"m:20;a",
$1:function(a){return this.a(a)}},
mE:{"^":"m:28;a",
$2:function(a,b){return this.a(a,b)}},
mF:{"^":"m:41;a",
$1:function(a){return this.a(H.O(a))}},
hY:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ises:1,
$isiX:1,
q:{
hZ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a0("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mx:function(a){return J.ee(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
n9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bp:function(a){return a},
iy:function(a){return new Int8Array(a)},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aL(b,a))},
m5:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mv(a,b,c))
return b},
ep:{"^":"q;",$isep:1,"%":"ArrayBuffer"},
d7:{"^":"q;",$isd7:1,$isjB:1,"%":"DataView;ArrayBufferView;d6|fh|fi|iz|fj|fk|aZ"},
d6:{"^":"d7;",
gl:function(a){return a.length},
$isG:1,
$asG:I.dB},
iz:{"^":"fi;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mw(c)
H.aK(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.r]},
$asz:function(){return[P.r]},
$isi:1,
$asi:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
"%":"Float32Array|Float64Array"},
aZ:{"^":"fk;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aK(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.n]},
$asz:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]}},
or:{"^":"aZ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int16Array"},
os:{"^":"aZ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ot:{"^":"aZ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ou:{"^":"aZ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ov:{"^":"aZ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ow:{"^":"aZ;",
gl:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d8:{"^":"aZ;",
gl:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
bT:function(a,b,c){return new Uint8Array(a.subarray(b,H.m5(b,c,a.length)))},
$isd8:1,
$isQ:1,
"%":";Uint8Array"},
fh:{"^":"d6+z;"},
fi:{"^":"fh+cm;"},
fj:{"^":"d6+z;"},
fk:{"^":"fj+cm;"}}],["","",,P,{"^":"",
km:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mi()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bt(new P.ko(z),1)).observe(y,{childList:true})
return new P.kn(z,y,x)}else if(self.setImmediate!=null)return P.mj()
return P.mk()},
p9:[function(a){self.scheduleImmediate(H.bt(new P.kp(H.f(a,{func:1,ret:-1})),0))},"$1","mi",4,0,14],
pa:[function(a){self.setImmediate(H.bt(new P.kq(H.f(a,{func:1,ret:-1})),0))},"$1","mj",4,0,14],
pb:[function(a){H.f(a,{func:1,ret:-1})
P.lp(0,a)},"$1","mk",4,0,14],
eI:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bj]})
z=C.d.a9(a.a,1000)
return P.lq(z<0?0:z,b)},
me:function(a,b){if(H.cb(a,{func:1,args:[P.b,P.aw]}))return b.i8(a,null,P.b,P.aw)
if(H.cb(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cf(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
md:function(){var z,y
for(;z=$.bq,z!=null;){$.bW=null
y=z.b
$.bq=y
if(y==null)$.bV=null
z.a.$0()}},
pj:[function(){$.dw=!0
try{P.md()}finally{$.bW=null
$.dw=!1
if($.bq!=null)$.$get$dp().$1(P.fJ())}},"$0","fJ",0,0,3],
fE:function(a){var z=new P.fa(H.f(a,{func:1,ret:-1}))
if($.bq==null){$.bV=z
$.bq=z
if(!$.dw)$.$get$dp().$1(P.fJ())}else{$.bV.b=z
$.bV=z}},
mh:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bq
if(z==null){P.fE(a)
$.bW=$.bV
return}y=new P.fa(a)
x=$.bW
if(x==null){y.b=z
$.bW=y
$.bq=y}else{y.b=x.b
x.b=y
$.bW=y
if(y.b==null)$.bV=y}},
nb:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.X
if(C.j===y){P.cC(null,null,C.j,a)
return}y.toString
P.cC(null,null,y,H.f(y.dE(a),z))},
jx:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bj]}
H.f(b,z)
y=$.X
if(y===C.j){y.toString
return P.eI(a,b)}x=y.dF(b,P.bj)
$.X.toString
return P.eI(a,H.f(x,z))},
cB:function(a,b,c,d,e){var z={}
z.a=d
P.mh(new P.mf(z,e))},
fA:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.X
if(y===c)return d.$0()
$.X=c
z=y
try{y=d.$0()
return y}finally{$.X=z}},
fB:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.X
if(y===c)return d.$1(e)
$.X=c
z=y
try{y=d.$1(e)
return y}finally{$.X=z}},
mg:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.X
if(y===c)return d.$2(e,f)
$.X=c
z=y
try{y=d.$2(e,f)
return y}finally{$.X=z}},
cC:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.dE(d):c.hu(d,-1)
P.fE(d)},
ko:{"^":"m:24;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kn:{"^":"m:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kp:{"^":"m:0;a",
$0:function(){this.a.$0()}},
kq:{"^":"m:0;a",
$0:function(){this.a.$0()}},
fq:{"^":"b;a,0b,c",
eM:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bt(new P.ls(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
eN:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bt(new P.lr(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbj:1,
q:{
lp:function(a,b){var z=new P.fq(!0,0)
z.eM(a,b)
return z},
lq:function(a,b){var z=new P.fq(!1,0)
z.eN(a,b)
return z}}},
ls:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lr:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eF(w,x)}z.c=y
this.d.$1(z)}},
bo:{"^":"b;0a,b,c,d,e,$ti",
hT:function(a){if(this.c!==6)return!0
return this.b.b.cQ(H.f(this.d,{func:1,ret:P.ag,args:[P.b]}),a.a,P.ag,P.b)},
hL:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cb(z,{func:1,args:[P.b,P.aw]}))return H.dC(w.ig(z,a.a,a.b,null,y,P.aw),x)
else return H.dC(w.cQ(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aV:{"^":"b;dt:a<,b,0fP:c<,$ti",
eq:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.X
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.me(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aV(0,$.X,[c])
w=b==null?1:3
this.d6(new P.bo(x,w,a,b,[z,c]))
return x},
il:function(a,b){return this.eq(a,null,b)},
d6:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbo")
this.c=a}else{if(z===2){y=H.d(this.c,"$isaV")
z=y.a
if(z<4){y.d6(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cC(null,null,z,H.f(new P.kF(this,a),{func:1,ret:-1}))}},
dn:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbo")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isaV")
y=u.a
if(y<4){u.dn(a)
return}this.a=y
this.c=u.c}z.a=this.bq(a)
y=this.b
y.toString
P.cC(null,null,y,H.f(new P.kK(z,this),{func:1,ret:-1}))}},
c7:function(){var z=H.d(this.c,"$isbo")
this.c=null
return this.bq(z)},
bq:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
da:function(a){var z,y,x,w
z=H.y(this,0)
H.dC(a,{futureOr:1,type:z})
y=this.$ti
x=H.bs(a,"$isbC",y,"$asbC")
if(x){z=H.bs(a,"$isaV",y,null)
if(z)P.fd(a,this)
else P.kG(a,this)}else{w=this.c7()
H.A(a,z)
this.a=4
this.c=a
P.bQ(this,w)}},
bW:[function(a,b){var z
H.d(b,"$isaw")
z=this.c7()
this.a=8
this.c=new P.aj(a,b)
P.bQ(this,z)},function(a){return this.bW(a,null)},"is","$2","$1","geV",4,2,43],
$isbC:1,
q:{
kG:function(a,b){var z,y,x
b.a=1
try{a.eq(new P.kH(b),new P.kI(b),null)}catch(x){z=H.as(x)
y=H.bv(x)
P.nb(new P.kJ(b,z,y))}},
fd:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isaV")
if(z>=4){y=b.c7()
b.a=a.a
b.c=a.c
P.bQ(b,y)}else{y=H.d(b.c,"$isbo")
b.a=2
b.c=a
a.dn(y)}},
bQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isaj")
y=y.b
u=v.a
t=v.b
y.toString
P.cB(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bQ(z.a,b)}y=z.a
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
if(p){H.d(r,"$isaj")
y=y.b
u=r.a
t=r.b
y.toString
P.cB(null,null,y,u,t)
return}o=$.X
if(o==null?q!=null:o!==q)$.X=q
else o=null
y=b.c
if(y===8)new P.kN(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kM(x,b,r).$0()}else if((y&2)!==0)new P.kL(z,x,b).$0()
if(o!=null)$.X=o
y=x.b
if(!!J.M(y).$isbC){if(y.a>=4){n=H.d(t.c,"$isbo")
t.c=null
b=t.bq(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fd(y,t)
return}}m=b.b
n=H.d(m.c,"$isbo")
m.c=null
b=m.bq(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.d(u,"$isaj")
m.a=8
m.c=u}z.a=m
y=m}}}},
kF:{"^":"m:0;a,b",
$0:function(){P.bQ(this.a,this.b)}},
kK:{"^":"m:0;a,b",
$0:function(){P.bQ(this.b,this.a.a)}},
kH:{"^":"m:24;a",
$1:function(a){var z=this.a
z.a=0
z.da(a)}},
kI:{"^":"m:52;a",
$2:function(a,b){this.a.bW(a,H.d(b,"$isaw"))},
$1:function(a){return this.$2(a,null)}},
kJ:{"^":"m:0;a,b,c",
$0:function(){this.a.bW(this.b,this.c)}},
kN:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eo(H.f(w.d,{func:1}),null)}catch(v){y=H.as(v)
x=H.bv(v)
if(this.d){w=H.d(this.a.a.c,"$isaj").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isaj")
else u.b=new P.aj(y,x)
u.a=!0
return}if(!!J.M(z).$isbC){if(z instanceof P.aV&&z.gdt()>=4){if(z.gdt()===8){w=this.b
w.b=H.d(z.gfP(),"$isaj")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.il(new P.kO(t),null)
w.a=!1}}},
kO:{"^":"m:48;a",
$1:function(a){return this.a}},
kM:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cQ(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.as(t)
y=H.bv(t)
x=this.a
x.b=new P.aj(z,y)
x.a=!0}}},
kL:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isaj")
w=this.c
if(w.hT(z)&&w.e!=null){v=this.b
v.b=w.hL(z)
v.a=!1}}catch(u){y=H.as(u)
x=H.bv(u)
w=H.d(this.a.a.c,"$isaj")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aj(y,x)
s.a=!0}}},
fa:{"^":"b;a,0b"},
dd:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aV(0,$.X,[P.n])
z.a=0
this.hS(new P.jk(z,this),!0,new P.jl(z,y),y.geV())
return y}},
jk:{"^":"m;a,b",
$1:function(a){H.A(a,H.az(this.b,"dd",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.az(this.b,"dd",0)]}}},
jl:{"^":"m:0;a,b",
$0:function(){this.b.da(this.a.a)}},
eD:{"^":"b;$ti"},
jj:{"^":"b;"},
bj:{"^":"b;"},
aj:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
lU:{"^":"b;",$isp8:1},
mf:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.er()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
l7:{"^":"lU;",
ih:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.X){a.$0()
return}P.fA(null,null,this,a,-1)}catch(x){z=H.as(x)
y=H.bv(x)
P.cB(null,null,this,z,H.d(y,"$isaw"))}},
ii:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.X){a.$1(b)
return}P.fB(null,null,this,a,b,-1,c)}catch(x){z=H.as(x)
y=H.bv(x)
P.cB(null,null,this,z,H.d(y,"$isaw"))}},
hu:function(a,b){return new P.l9(this,H.f(a,{func:1,ret:b}),b)},
dE:function(a){return new P.l8(this,H.f(a,{func:1,ret:-1}))},
dF:function(a,b){return new P.la(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
eo:function(a,b){H.f(a,{func:1,ret:b})
if($.X===C.j)return a.$0()
return P.fA(null,null,this,a,b)},
cQ:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.X===C.j)return a.$1(b)
return P.fB(null,null,this,a,b,c,d)},
ig:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.X===C.j)return a.$2(b,c)
return P.mg(null,null,this,a,b,c,d,e,f)},
i8:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
l9:{"^":"m;a,b,c",
$0:function(){return this.a.eo(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l8:{"^":"m:3;a,b",
$0:function(){return this.a.ih(this.b)}},
la:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.ii(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i6:function(a,b,c,d,e){return new H.co(0,0,[d,e])},
i7:function(a,b,c){H.bY(a)
return H.w(H.my(a,new H.co(0,0,[b,c])),"$isek",[b,c],"$asek")},
el:function(a,b){return new H.co(0,0,[a,b])},
ia:function(a,b,c,d){return new P.kU(0,0,[d])},
hU:function(a,b,c){var z,y
if(P.dx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bX()
C.a.h(y,a)
try{P.mc(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.eE(b,H.fV(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cX:function(a,b,c){var z,y,x
if(P.dx(a))return b+"..."+c
z=new P.an(b)
y=$.$get$bX()
C.a.h(y,a)
try{x=z
x.a=P.eE(x.gaL(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaL()+c
y=z.gaL()
return y.charCodeAt(0)==0?y:y},
dx:function(a){var z,y
for(z=0;y=$.$get$bX(),z<y.length;++z)if(a===y[z])return!0
return!1},
mc:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga4(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.l(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.H();t=s,s=r){r=z.gR(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
i8:function(a,b,c){var z=P.i6(null,null,null,b,c)
a.K(0,new P.i9(z,b,c))
return z},
d2:function(a){var z,y,x
z={}
if(P.dx(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$bX(),a)
x=y
x.a=x.gaL()+"{"
z.a=!0
J.dM(a,new P.ii(z,y))
z=y
z.a=z.gaL()+"}"}finally{z=$.$get$bX()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaL()
return z.charCodeAt(0)==0?z:z},
kU:{"^":"kP;a,0b,0c,0d,0e,0f,r,$ti",
ga4:function(a){return P.fg(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dr()
this.b=z}return this.d8(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dr()
this.c=y}return this.d8(y,b)}else return this.eP(0,b)},
eP:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.dr()
this.d=z}y=this.dc(b)
x=z[y]
if(x==null)z[y]=[this.bV(b)]
else{if(this.dh(x,b)>=0)return!1
x.push(this.bV(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dq(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dq(this.c,b)
else return this.fH(0,b)},
fH:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.f3(z,b)
x=this.dh(y,b)
if(x<0)return!1
this.dv(y.splice(x,1)[0])
return!0},
d8:function(a,b){H.A(b,H.y(this,0))
if(H.d(a[b],"$isdq")!=null)return!1
a[b]=this.bV(b)
return!0},
dq:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$isdq")
if(z==null)return!1
this.dv(z)
delete a[b]
return!0},
d9:function(){this.r=this.r+1&67108863},
bV:function(a){var z,y
z=new P.dq(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d9()
return z},
dv:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d9()},
dc:function(a){return J.b2(a)&0x3ffffff},
f3:function(a,b){return a[this.dc(b)]},
dh:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
q:{
dr:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dq:{"^":"b;a,0b,0c"},
kV:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b3(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}},
q:{
fg:function(a,b,c){var z=new P.kV(a,b,[c])
z.c=a.e
return z}}},
kP:{"^":"j6;"},
i9:{"^":"m:9;a,b,c",
$2:function(a,b){this.a.m(0,H.A(a,this.b),H.A(b,this.c))}},
cp:{"^":"kW;",$isi:1,$isc:1},
z:{"^":"b;$ti",
ga4:function(a){return new H.ib(a,this.gl(a),0,[H.b_(this,a,"z",0)])},
J:function(a,b){return this.k(a,b)},
ip:function(a,b){var z,y,x
z=H.h([],[H.b_(this,a,"z",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
io:function(a){return this.ip(a,!0)},
aB:function(a,b,c,d){var z
H.A(d,H.b_(this,a,"z",0))
P.aP(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cX(a,"[","]")}},
ih:{"^":"ah;"},
ii:{"^":"m:9;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ah:{"^":"b;$ti",
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.b_(this,a,"ah",0),H.b_(this,a,"ah",1)]})
for(z=J.bx(this.gaD(a));z.H();){y=z.gR(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.at(this.gaD(a))},
i:function(a){return P.d2(a)},
$isK:1},
lx:{"^":"b;$ti",
m:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
ij:{"^":"b;$ti",
k:function(a,b){return J.dL(this.a,b)},
m:function(a,b,c){J.cI(this.a,H.A(b,H.y(this,0)),H.A(c,H.y(this,1)))},
K:function(a,b){J.dM(this.a,H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.at(this.a)},
i:function(a){return J.a9(this.a)},
$isK:1},
f0:{"^":"ly;a,$ti"},
j7:{"^":"b;$ti",
i:function(a){return P.cX(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dO("index"))
if(b<0)H.u(P.a1(b,0,null,"index",null))
for(z=P.fg(this,this.r,H.y(this,0)),y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
$isi:1},
j6:{"^":"j7;"},
kW:{"^":"b+z;"},
ly:{"^":"ij+lx;$ti"}}],["","",,P,{"^":"",hd:{"^":"c_;a",
hV:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aP(c,d,b.length,null,null,null)
z=$.$get$fb()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.I(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cF(C.b.I(b,s))
o=H.cF(C.b.I(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.e(z,n)
m=z[n]
if(m>=0){n=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.B(b,x,y)
w.a+=H.cs(r)
x=s
continue}}throw H.a(P.a0("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.B(b,x,d)
k=l.length
if(v>=0)P.dR(b,u,d,v,t,k)
else{j=C.d.bk(k-1,4)+1
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aY(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dR(b,u,d,v,t,i)
else{j=C.d.bk(i,4)
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aY(b,d,d,j===2?"==":"=")}return b},
$asc_:function(){return[[P.c,P.n],P.k]},
q:{
dR:function(a,b,c,d,e,f){if(C.d.bk(f,4)!==0)throw H.a(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a0("Invalid base64 padding, more than two '=' characters",a,b))}}},he:{"^":"bz;a",
$asbz:function(){return[[P.c,P.n],P.k]}},c_:{"^":"b;$ti"},bz:{"^":"jj;$ti"},hG:{"^":"c_;",
$asc_:function(){return[P.k,[P.c,P.n]]}},k0:{"^":"hG;a",
ghG:function(){return C.F}},k7:{"^":"bz;",
b5:function(a,b,c){var z,y,x,w
z=a.length
P.aP(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lT(0,0,x)
if(w.f1(a,b,z)!==z)w.dw(J.h6(a,z-1),0)
return C.U.bT(x,0,w.b)},
cq:function(a){return this.b5(a,0,null)},
$asbz:function(){return[P.k,[P.c,P.n]]}},lT:{"^":"b;a,b,c",
dw:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.e(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.e(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.e(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.e(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.e(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.e(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.e(z,y)
z[y]=128|a&63
return!1}},
f1:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dw(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.e(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.e(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.e(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.e(z,v)
z[v]=128|w&63}}return x}},k1:{"^":"bz;a",
b5:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.n],"$asc")
z=P.k2(!1,a,b,c)
if(z!=null)return z
y=J.at(a)
P.aP(b,c,y,null,null,null)
x=new P.an("")
w=new P.lQ(!1,x,!0,0,0,0)
w.b5(a,b,y)
w.hH(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cq:function(a){return this.b5(a,0,null)},
$asbz:function(){return[[P.c,P.n],P.k]},
q:{
k2:function(a,b,c,d){H.w(b,"$isc",[P.n],"$asc")
if(b instanceof Uint8Array)return P.k3(!1,b,c,d)
return},
k3:function(a,b,c,d){var z,y,x
z=$.$get$f4()
if(z==null)return
y=0===c
if(y&&!0)return P.dm(z,b)
x=b.length
d=P.aP(c,d,x,null,null,null)
if(y&&d===x)return P.dm(z,b)
return P.dm(z,b.subarray(c,d))},
dm:function(a,b){if(P.k5(b))return
return P.k6(a,b)},
k6:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.as(y)}return},
k5:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k4:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.as(y)}return}}},lQ:{"^":"b;a,b,c,d,e,f",
hH:function(a,b,c){var z
H.w(b,"$isc",[P.n],"$asc")
if(this.e>0){z=P.a0("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.n],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lS(c)
v=new P.lR(this,b,c,a)
$label0$0:for(u=J.aM(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bQ()
if((r&192)!==128){q=P.a0("Bad UTF-8 encoding 0x"+C.d.bg(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.w,q)
if(z<=C.w[q]){q=P.a0("Overlong encoding of 0x"+C.d.bg(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a0("Character outside valid Unicode range: 0x"+C.d.bg(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cs(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cW()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.a0("Negative UTF-8 code unit: -0x"+C.d.bg(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a0("Bad UTF-8 encoding 0x"+C.d.bg(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lS:{"^":"m:38;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.n],"$asc")
z=this.a
for(y=J.aM(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bQ()
if((w&127)!==w)return x-b}return z-b}},lR:{"^":"m:47;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.eF(this.d,a,b)}}}],["","",,P,{"^":"",
cd:function(a,b,c){var z
H.f(b,{func:1,ret:P.n,args:[P.k]})
z=H.iP(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a0(a,null,null))},
hI:function(a){var z=J.M(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bc(a)+"'"},
ic:function(a,b,c,d){var z,y
H.A(b,d)
z=J.hW(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
id:function(a,b,c){var z,y,x
z=[c]
y=H.h([],z)
for(x=a.ga4(a);x.H();)C.a.h(y,H.A(x.gR(x),c))
if(b)return y
return H.w(J.bE(y),"$isc",z,"$asc")},
eF:function(a,b,c){var z,y
z=P.n
H.w(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb7",[z],"$asb7")
y=a.length
c=P.aP(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.O()
z=c<y}else z=!0
return H.ew(z?C.a.bT(a,b,c):a)}if(!!J.M(a).$isd8)return H.iR(a,b,P.aP(b,c,a.length,null,null,null))
return P.jm(a,b,c)},
jm:function(a,b,c){var z,y,x,w
H.w(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a1(b,0,J.at(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a1(c,b,J.at(a),null,null))
y=J.bx(a)
for(x=0;x<b;++x)if(!y.H())throw H.a(P.a1(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.H())throw H.a(P.a1(c,b,x,null,null))
w.push(y.gR(y))}return H.ew(w)},
iY:function(a,b,c){return new H.hY(a,H.hZ(a,!1,!0,!1))},
dl:function(){var z=H.iH()
if(z!=null)return P.jT(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
cl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hI(a)},
x:function(a){return new P.fc(a)},
ie:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.n]})
z=H.h([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dI:function(a){H.n9(a)},
jT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.f1(b>0||c<c?C.b.B(a,b,c):a,5,null).geu()
else if(y===32)return P.f1(C.b.B(a,z,c),0,null).geu()}x=new Array(8)
x.fixed$length=Array
w=H.h(x,[P.n])
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
if(typeof v!=="number")return v.cV()
if(v>=b)if(P.fC(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.F()
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.ae(a,"..",s)))n=r>s+2&&C.b.ae(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ae(a,"file",b)){if(u<=b){if(!C.b.ae(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.B(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aY(a,s,r,"/");++r;++q;++c}else{a=C.b.B(a,b,s)+"/"+C.b.B(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ae(a,"http",b)){if(x&&t+3===s&&C.b.ae(a,"80",t+1))if(b===0&&!0){a=C.b.aY(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.B(a,b,t)+C.b.B(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.ae(a,"https",b)){if(x&&t+4===s&&C.b.ae(a,"443",t+1))if(b===0&&!0){a=C.b.aY(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.B(a,b,t)+C.b.B(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.B(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lc(a,v,u,t,s,r,q,o)}return P.lz(a,b,c,v,u,t,s,r,q,o)},
f3:function(a,b){var z=P.k
return C.a.hI(H.h(a.split("&"),[z]),P.el(z,z),new P.jW(b),[P.K,P.k,P.k])},
jR:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jS(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Y(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cd(C.b.B(a,v,w),null,null)
if(typeof s!=="number")return s.cW()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cd(C.b.B(a,v,c),null,null)
if(typeof s!=="number")return s.cW()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
f2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jU(a)
y=new P.jV(z,a)
if(a.length<2)z.$1("address is too short")
x=H.h([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Y(a,w)
if(s===58){if(w===b){++w
if(C.b.Y(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaE(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jR(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.d.aP(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
m6:function(){var z,y,x,w,v
z=P.ie(22,new P.m8(),!0,P.Q)
y=new P.m7(z)
x=new P.m9()
w=new P.ma()
v=H.d(y.$2(0,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isQ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isQ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isQ"),"]",5)
v=H.d(y.$2(9,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isQ"),"az",21)
v=H.d(y.$2(21,245),"$isQ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fC:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.n],"$asc")
z=$.$get$fD()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ag:{"^":"b;"},
"+bool":0,
al:{"^":"b;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.d.aP(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hx(H.iO(this))
y=P.c0(H.iM(this))
x=P.c0(H.iI(this))
w=P.c0(H.iJ(this))
v=P.c0(H.iL(this))
u=P.c0(H.iN(this))
t=P.hy(H.iK(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
hx:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hy:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c0:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"Z;"},
"+double":0,
bA:{"^":"b;a",
j:function(a,b){return new P.bA(C.d.ai(this.a*b))},
O:function(a,b){return C.d.O(this.a,H.d(b,"$isbA").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bA))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hD()
y=this.a
if(y<0)return"-"+new P.bA(0-y).i(0)
x=z.$1(C.d.a9(y,6e7)%60)
w=z.$1(C.d.a9(y,1e6)%60)
v=new P.hC().$1(y%1e6)
return""+C.d.a9(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
q:{
e7:function(a,b,c,d,e,f){return new P.bA(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hC:{"^":"m:16;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hD:{"^":"m:16;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
er:{"^":"a5;",
i:function(a){return"Throw of null."}},
aN:{"^":"a5;a,b,c,d",
gbY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbX:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbY()+y+x
if(!this.a)return w
v=this.gbX()
u=P.cl(this.b)
return w+v+": "+H.l(u)},
q:{
bZ:function(a){return new P.aN(!1,null,null,a)},
cf:function(a,b,c){return new P.aN(!0,a,b,c)},
dO:function(a){return new P.aN(!1,null,a,"Must not be null")}}},
ct:{"^":"aN;e,f,a,b,c,d",
gbY:function(){return"RangeError"},
gbX:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
q:{
cu:function(a,b,c){return new P.ct(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.ct(b,c,!0,a,d,"Invalid value")},
aP:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a1(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a1(b,a,c,"end",f))
return b}return c}}},
hS:{"^":"aN;e,l:f>,a,b,c,d",
gbY:function(){return"RangeError"},
gbX:function(){if(J.h2(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
q:{
U:function(a,b,c,d,e){var z=H.D(e!=null?e:J.at(b))
return new P.hS(b,z,!0,a,c,"Index out of range")}}},
jP:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
B:function(a){return new P.jP(a)}}},
jM:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
c8:function(a){return new P.jM(a)}}},
jg:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hp:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cl(z))+"."},
q:{
b3:function(a){return new P.hp(a)}}},
iD:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
eC:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hw:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fc:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hO:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.B(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.I(w,s)
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
m=""}l=C.b.B(w,o,p)
return y+n+l+m+"\n"+C.b.j(" ",x-o+n.length)+"^\n"},
q:{
a0:function(a,b,c){return new P.hO(a,b,c)}}},
n:{"^":"Z;"},
"+int":0,
i:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga4(this)
for(y=0;z.H();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dO("index"))
if(b<0)H.u(P.a1(b,0,null,"index",null))
for(z=this.ga4(this),y=0;z.H();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
i:function(a){return P.hU(this,"(",")")}},
cY:{"^":"b;$ti"},
c:{"^":"b;$ti",$isi:1},
"+List":0,
K:{"^":"b;$ti"},
I:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Z:{"^":"b;"},
"+num":0,
b:{"^":";",
A:function(a,b){return this===b},
gT:function(a){return H.bK(this)},
i:function(a){return"Instance of '"+H.bc(this)+"'"},
toString:function(){return this.i(this)}},
aw:{"^":"b;"},
k:{"^":"b;",$ises:1},
"+String":0,
an:{"^":"b;aL:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoT:1,
q:{
eE:function(a,b,c){var z=J.bx(b)
if(!z.H())return a
if(c.length===0){do a+=H.l(z.gR(z))
while(z.H())}else{a+=H.l(z.gR(z))
for(;z.H();)a=a+c+H.l(z.gR(z))}return a}}},
jW:{"^":"m:49;a",
$2:function(a,b){var z,y,x,w
z=P.k
H.w(a,"$isK",[z,z],"$asK")
H.O(b)
y=J.aM(b).ec(b,"=")
if(y===-1){if(b!=="")J.cI(a,P.dt(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.B(b,0,y)
w=C.b.aH(b,y+1)
z=this.a
J.cI(a,P.dt(x,0,x.length,z,!0),P.dt(w,0,w.length,z,!0))}return a}},
jS:{"^":"m:51;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv4 address, "+a,this.a,b))}},
jU:{"^":"m:46;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jV:{"^":"m:45;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cd(C.b.B(this.b,a,b),null,16)
if(typeof z!=="number")return z.O()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cz:{"^":"b;bS:a<,b,c,d,el:e>,f,r,0x,0y,0z,0Q,0ch",
gev:function(){return this.b},
gcD:function(a){var z=this.c
if(z==null)return""
if(C.b.ad(z,"["))return C.b.B(z,1,z.length-1)
return z},
gbL:function(a){var z=this.d
if(z==null)return P.fs(this.a)
return z},
gcM:function(a){var z=this.f
return z==null?"":z},
ge7:function(){var z=this.r
return z==null?"":z},
cP:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isK",[P.k,null],"$asK")
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
if(x&&!C.b.ad(d,"/"))d="/"+d
g=P.ds(g,0,0,h)
return new P.cz(i,j,c,f,d,g,this.r)},
en:function(a,b){return this.cP(a,null,null,null,null,null,null,b,null,null)},
gbN:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.k
y=new P.f0(P.f3(z==null?"":z,C.l),[y,y])
this.Q=y
z=y}return z},
ge8:function(){return this.c!=null},
geb:function(){return this.f!=null},
ge9:function(){return this.r!=null},
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
A:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdk){y=this.a
x=b.gbS()
if(y==null?x==null:y===x)if(this.c!=null===b.ge8()){y=this.b
x=b.gev()
if(y==null?x==null:y===x){y=this.gcD(this)
x=z.gcD(b)
if(y==null?x==null:y===x){y=this.gbL(this)
x=z.gbL(b)
if(y==null?x==null:y===x)if(this.e===z.gel(b)){y=this.f
x=y==null
if(!x===b.geb()){if(x)y=""
if(y===z.gcM(b)){z=this.r
y=z==null
if(!y===b.ge9()){if(y)z=""
z=z===b.ge7()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdk:1,
q:{
du:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.n],"$asc")
if(c===C.l){z=$.$get$fx().b
if(typeof b!=="string")H.u(H.ad(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.az(c,"c_",0))
y=c.ghG().cq(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cs(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lz:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lK(a,b,d)
else{if(d===b)P.bS(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lL(a,z,e-1):""
x=P.lE(a,e,f,!1)
if(typeof f!=="number")return f.F()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lH(P.cd(C.b.B(a,w,g),new P.lA(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lF(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.O()
t=h<i?P.ds(a,h+1,i,null):null
return new P.cz(j,y,x,v,u,t,i<c?P.lD(a,i+1,c):null)},
fs:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bS:function(a,b,c){throw H.a(P.a0(c,a,b))},
lH:function(a,b){if(a!=null&&a===P.fs(b))return
return a},
lE:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.M()
z=c-1
if(C.b.Y(a,z)!==93)P.bS(a,b,"Missing end `]` to match `[` in host")
P.f2(a,b+1,z)
return C.b.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.Y(a,y)===58){P.f2(a,b,c)
return"["+a+"]"}return P.lN(a,b,c)},
lN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Y(a,z)
if(v===37){u=P.fz(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
s=C.b.B(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.B(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.e(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.B(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bS(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Y(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.B(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.ft(v)
z+=q
y=z}}}}if(x==null)return C.b.B(a,b,c)
if(y<c){s=C.b.B(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lK:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fv(C.b.I(a,b)))P.bS(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bS(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.B(a,b,c)
return P.lB(y?a.toLowerCase():a)},
lB:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lL:function(a,b,c){return P.bT(a,b,c,C.R)},
lF:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bT(a,b,c,C.y):C.t.j3(d,new P.lG(),P.k).a_(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ad(w,"/"))w="/"+w
return P.lM(w,e,f)},
lM:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ad(a,"/"))return P.lO(a,!z||c)
return P.lP(a)},
ds:function(a,b,c,d){var z,y
z={}
H.w(d,"$isK",[P.k,null],"$asK")
if(a!=null){if(d!=null)throw H.a(P.bZ("Both query and queryParameters specified"))
return P.bT(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.K(0,new P.lI(new P.lJ(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lD:function(a,b,c){return P.bT(a,b,c,C.n)},
fz:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Y(a,b+1)
x=C.b.Y(a,z)
w=H.cF(y)
v=H.cF(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aP(u,4)
if(z>=8)return H.e(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cs(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.B(a,b,b+3).toUpperCase()
return},
ft:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.h(z,[P.n])
C.a.m(y,0,37)
C.a.m(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.h(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.d.fZ(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.eF(y,0,null)},
bT:function(a,b,c,d){var z=P.fy(a,b,c,H.w(d,"$isc",[P.n],"$asc"),!1)
return z==null?C.b.B(a,b,c):z},
fy:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.n],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.O()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.Y(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.e(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fz(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.e(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bS(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Y(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.ft(v)}}if(w==null)w=new P.an("")
w.a+=C.b.B(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.O()
if(x<c)w.a+=C.b.B(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fw:function(a){if(C.b.ad(a,"."))return!0
return C.b.ec(a,"/.")!==-1},
lP:function(a){var z,y,x,w,v,u,t
if(!P.fw(a))return a
z=H.h([],[P.k])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.T(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.a_(z,"/")},
lO:function(a,b){var z,y,x,w,v,u
if(!P.fw(a))return!b?P.fu(a):a
z=H.h([],[P.k])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaE(z)!==".."){if(0>=z.length)return H.e(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.e(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaE(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.e(z,0)
C.a.m(z,0,P.fu(z[0]))}return C.a.a_(z,"/")},
fu:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fv(J.h3(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.B(a,0,y)+"%3A"+C.b.aH(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lC:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bZ("Invalid URL encoding"))}}return z},
dt:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dD(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.I(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.l!==d)v=!1
else v=!0
if(v)return y.B(a,b,c)
else u=new H.hm(y.B(a,b,c))}else{u=H.h([],[P.n])
for(x=b;x<c;++x){w=y.I(a,x)
if(w>127)throw H.a(P.bZ("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bZ("Truncated URI"))
C.a.h(u,P.lC(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.n],"$asc")
return new P.k1(!1).cq(u)},
fv:function(a){var z=a|32
return 97<=z&&z<=122}}},
lA:{"^":"m:44;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.F()
throw H.a(P.a0("Invalid port",this.a,z+1))}},
lG:{"^":"m:42;",
$1:function(a){return P.du(C.S,a,C.l,!1)}},
lJ:{"^":"m:22;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.du(C.p,a,C.l,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.du(C.p,b,C.l,!0))}}},
lI:{"^":"m:40;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.bx(H.fV(b,"$isi")),y=this.a;z.H();)y.$2(a,H.O(z.gR(z)))}},
jQ:{"^":"b;a,b,c",
geu:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.ed(y,"?",z)
w=y.length
if(x>=0){v=P.bT(y,x+1,w,C.n)
w=x}else v=null
z=new P.kv(this,"data",null,null,null,P.bT(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
f1:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.h([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a0("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a0("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaE(z)
if(v!==44||x!==t+7||!C.b.ae(a,"base64",t+1))throw H.a(P.a0("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hV(0,a,s,y)
else{r=P.fy(a,s,y,C.n,!0)
if(r!=null)a=C.b.aY(a,s,y,r)}return new P.jQ(a,z,c)}}},
m8:{"^":"m:29;",
$1:function(a){return new Uint8Array(96)}},
m7:{"^":"m:39;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.h7(z,0,96,b)
return z}},
m9:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
ma:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
lc:{"^":"b;a,b,c,d,e,f,r,x,0y",
ge8:function(){return this.c>0},
gea:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.F()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
geb:function(){var z=this.f
if(typeof z!=="number")return z.O()
return z<this.r},
ge9:function(){return this.r<this.a.length},
gdj:function(){return this.b===4&&C.b.ad(this.a,"http")},
gdk:function(){return this.b===5&&C.b.ad(this.a,"https")},
gbS:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdj()){this.x="http"
z="http"}else if(this.gdk()){this.x="https"
z="https"}else if(z===4&&C.b.ad(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ad(this.a,"package")){this.x="package"
z="package"}else{z=C.b.B(this.a,0,z)
this.x=z}return z},
gev:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.B(this.a,y,z-1):""},
gcD:function(a){var z=this.c
return z>0?C.b.B(this.a,z,this.d):""},
gbL:function(a){var z
if(this.gea()){z=this.d
if(typeof z!=="number")return z.F()
return P.cd(C.b.B(this.a,z+1,this.e),null,null)}if(this.gdj())return 80
if(this.gdk())return 443
return 0},
gel:function(a){return C.b.B(this.a,this.e,this.f)},
gcM:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.O()
return z<y?C.b.B(this.a,z+1,y):""},
ge7:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aH(y,z+1):""},
gbN:function(){var z=this.f
if(typeof z!=="number")return z.O()
if(z>=this.r)return C.T
z=P.k
return new P.f0(P.f3(this.gcM(this),C.l),[z,z])},
cP:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isK",[P.k,null],"$asK")
i=this.gbS()
z=i==="file"
y=this.c
j=y>0?C.b.B(this.a,this.b+3,y):""
f=this.gea()?this.gbL(this):null
y=this.c
if(y>0)c=C.b.B(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.B(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ad(d,"/"))d="/"+d
g=P.ds(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aH(y,x+1)
return new P.cz(i,j,c,f,d,g,b)},
en:function(a,b){return this.cP(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdk)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdk:1},
kv:{"^":"cz;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cR:function(a,b){var z=document.createElement("canvas")
return z},
hF:function(a){H.d(a,"$isa6")
return"wheel"},
hT:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$ised")
try{J.h9(z,a)}catch(x){H.as(x)}return z},
cy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ff:function(a,b,c,d){var z,y
z=W.cy(W.cy(W.cy(W.cy(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fG:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.X
if(z===C.j)return a
return z.dF(a,b)},
a7:{"^":"a3;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
no:{"^":"db;0t:x=,0u:y=","%":"Accelerometer|LinearAccelerationSensor"},
np:{"^":"q;0l:length=","%":"AccessibleNodeList"},
nq:{"^":"a7;0a6:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nr:{"^":"a7;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cM:{"^":"q;",$iscM:1,"%":";Blob"},
nx:{"^":"a7;0a6:type}","%":"HTMLButtonElement"},
cQ:{"^":"a7;",
bR:function(a,b,c){if(c!=null)return a.getContext(b,P.mm(c,null))
return a.getContext(b)},
ex:function(a,b){return this.bR(a,b,null)},
$iscQ:1,
"%":"HTMLCanvasElement"},
dW:{"^":"q;",$isdW:1,"%":"CanvasRenderingContext2D"},
nz:{"^":"N;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nB:{"^":"cj;0l:length=","%":"CSSPerspective"},
nC:{"^":"cU;0t:x=,0u:y=","%":"CSSPositionValue"},
nD:{"^":"cj;0t:x=,0u:y=","%":"CSSRotation"},
b4:{"^":"q;",$isb4:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nE:{"^":"cj;0t:x=,0u:y=","%":"CSSScale"},
hu:{"^":"ku;0l:length=",
ey:function(a,b){var z=a.getPropertyValue(this.d7(a,b))
return z==null?"":z},
d7:function(a,b){var z,y
z=$.$get$e0()
y=z[b]
if(typeof y==="string")return y
y=this.h_(a,b)
z[b]=y
return y},
h_:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hz()+b
if(z in a)return z
return b},
fR:function(a,b,c,d){a.setProperty(b,c,d)},
gck:function(a){return a.bottom},
gap:function(a){return a.height},
gaW:function(a){return a.left},
gbc:function(a){return a.right},
gbh:function(a){return a.top},
gar:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hv:{"^":"b;",
gaW:function(a){return this.ey(a,"left")}},
cU:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cj:{"^":"q;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nF:{"^":"cU;0l:length=","%":"CSSTransformValue"},
nG:{"^":"cj;0t:x=,0u:y=","%":"CSSTranslation"},
nH:{"^":"cU;0l:length=","%":"CSSUnparsedValue"},
nI:{"^":"q;0l:length=","%":"DataTransferItemList"},
nJ:{"^":"q;0t:x=,0u:y=","%":"DeviceAcceleration"},
nK:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
nL:{"^":"hA;",
gt:function(a){return a.x},
gu:function(a){return a.y},
"%":"DOMPoint"},
hA:{"^":"q;",
gt:function(a){return a.x},
gu:function(a){return a.y},
"%":";DOMPointReadOnly"},
nM:{"^":"kx;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.w(c,"$isa8",[P.Z],"$asa8")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.a8,P.Z]]},
$asz:function(){return[[P.a8,P.Z]]},
$isi:1,
$asi:function(){return[[P.a8,P.Z]]},
$isc:1,
$asc:function(){return[[P.a8,P.Z]]},
$asC:function(){return[[P.a8,P.Z]]},
"%":"ClientRectList|DOMRectList"},
hB:{"^":"q;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gar(a))+" x "+H.l(this.gap(a))},
A:function(a,b){var z
if(b==null)return!1
z=H.bs(b,"$isa8",[P.Z],"$asa8")
if(!z)return!1
z=J.aX(b)
return a.left===z.gaW(b)&&a.top===z.gbh(b)&&this.gar(a)===z.gar(b)&&this.gap(a)===z.gap(b)},
gT:function(a){return W.ff(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gar(a)&0x1FFFFFFF,this.gap(a)&0x1FFFFFFF)},
gck:function(a){return a.bottom},
gap:function(a){return a.height},
gaW:function(a){return a.left},
gbc:function(a){return a.right},
gbh:function(a){return a.top},
gar:function(a){return a.width},
gt:function(a){return a.x},
gu:function(a){return a.y},
$isa8:1,
$asa8:function(){return[P.Z]},
"%":";DOMRectReadOnly"},
nN:{"^":"kz;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.k]},
$asz:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]},
$asC:function(){return[P.k]},
"%":"DOMStringList"},
nO:{"^":"q;0l:length=","%":"DOMTokenList"},
kt:{"^":"cp;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.d(z[b],"$isa3")},
m:function(a,b,c){var z
H.D(b)
H.d(c,"$isa3")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga4:function(a){var z=this.io(this)
return new J.au(z,z.length,0,[H.y(z,0)])},
aB:function(a,b,c,d){throw H.a(P.c8(null))},
$asz:function(){return[W.a3]},
$asi:function(){return[W.a3]},
$asc:function(){return[W.a3]}},
a3:{"^":"N;",
gco:function(a){return new W.kt(a,a.children)},
gbw:function(a){return P.iU(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Z)},
i:function(a){return a.localName},
$isa3:1,
"%":";Element"},
nP:{"^":"a7;0a6:type}","%":"HTMLEmbedElement"},
aa:{"^":"q;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"q;",
dz:["eB",function(a,b,c,d){H.f(c,{func:1,args:[W.aa]})
if(c!=null)this.eQ(a,b,c,!1)}],
eQ:function(a,b,c,d){return a.addEventListener(b,H.bt(H.f(c,{func:1,args:[W.aa]}),1),!1)},
$isa6:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fl|fm|fo|fp"},
aY:{"^":"cM;",$isaY:1,"%":"File"},
e9:{"^":"kE;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isaY")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.aY]},
$asz:function(){return[W.aY]},
$isi:1,
$asi:function(){return[W.aY]},
$isc:1,
$asc:function(){return[W.aY]},
$ise9:1,
$asC:function(){return[W.aY]},
"%":"FileList"},
o7:{"^":"a6;0l:length=","%":"FileWriter"},
oa:{"^":"a7;0l:length=","%":"HTMLFormElement"},
b6:{"^":"q;",$isb6:1,"%":"Gamepad"},
ob:{"^":"db;0t:x=,0u:y=","%":"Gyroscope"},
oc:{"^":"q;0l:length=","%":"History"},
od:{"^":"kR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isN")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.N]},
$asz:function(){return[W.N]},
$isi:1,
$asi:function(){return[W.N]},
$isc:1,
$asc:function(){return[W.N]},
$asC:function(){return[W.N]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c1:{"^":"q;0dJ:data=",$isc1:1,"%":"ImageData"},
ec:{"^":"a7;",$isec:1,"%":"HTMLImageElement"},
ed:{"^":"a7;0a6:type}",$ised:1,"%":"HTMLInputElement"},
bF:{"^":"dh;",$isbF:1,"%":"KeyboardEvent"},
oi:{"^":"a7;0a6:type}","%":"HTMLLinkElement"},
oj:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
ok:{"^":"db;0t:x=,0u:y=","%":"Magnetometer"},
om:{"^":"q;0l:length=","%":"MediaList"},
on:{"^":"a6;",
dz:function(a,b,c,d){H.f(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.eB(a,b,c,!1)},
"%":"MessagePort"},
oo:{"^":"kX;",
k:function(a,b){return P.aW(a.get(H.O(b)))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gaD:function(a){var z=H.h([],[P.k])
this.K(a,new W.iv(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asah:function(){return[P.k,null]},
$isK:1,
$asK:function(){return[P.k,null]},
"%":"MIDIInputMap"},
iv:{"^":"m:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
op:{"^":"kY;",
k:function(a,b){return P.aW(a.get(H.O(b)))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gaD:function(a){var z=H.h([],[P.k])
this.K(a,new W.iw(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asah:function(){return[P.k,null]},
$isK:1,
$asK:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
iw:{"^":"m:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ba:{"^":"q;",$isba:1,"%":"MimeType"},
oq:{"^":"l_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isba")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.ba]},
$asz:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asC:function(){return[W.ba]},
"%":"MimeTypeArray"},
aE:{"^":"dh;",$isaE:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ks:{"^":"cp;a",
m:function(a,b,c){var z,y
H.D(b)
H.d(c,"$isN")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
ga4:function(a){var z=this.a.childNodes
return new W.ea(z,z.length,-1,[H.b_(C.V,z,"C",0)])},
aB:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asz:function(){return[W.N]},
$asi:function(){return[W.N]},
$asc:function(){return[W.N]}},
N:{"^":"a6;",
ib:function(a,b){var z,y
try{z=a.parentNode
J.h4(z,b,a)}catch(y){H.as(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eC(a):z},
fK:function(a,b,c){return a.replaceChild(b,c)},
$isN:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iA:{"^":"l1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isN")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.N]},
$asz:function(){return[W.N]},
$isi:1,
$asi:function(){return[W.N]},
$isc:1,
$asc:function(){return[W.N]},
$asC:function(){return[W.N]},
"%":"NodeList|RadioNodeList"},
oy:{"^":"a7;0a6:type}","%":"HTMLOListElement"},
oz:{"^":"a7;0a6:type}","%":"HTMLObjectElement"},
bb:{"^":"q;0l:length=",$isbb:1,"%":"Plugin"},
oD:{"^":"l5;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isbb")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bb]},
$asz:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asC:function(){return[W.bb]},
"%":"PluginArray"},
oI:{"^":"q;0a6:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oJ:{"^":"lb;",
k:function(a,b){return P.aW(a.get(H.O(b)))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gaD:function(a){var z=H.h([],[P.k])
this.K(a,new W.j3(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asah:function(){return[P.k,null]},
$isK:1,
$asK:function(){return[P.k,null]},
"%":"RTCStatsReport"},
j3:{"^":"m:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oK:{"^":"a7;0a6:type}","%":"HTMLScriptElement"},
oM:{"^":"a7;0l:length=","%":"HTMLSelectElement"},
db:{"^":"a6;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bd:{"^":"a6;",$isbd:1,"%":"SourceBuffer"},
oN:{"^":"fm;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isbd")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bd]},
$asz:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asC:function(){return[W.bd]},
"%":"SourceBufferList"},
oO:{"^":"a7;0a6:type}","%":"HTMLSourceElement"},
be:{"^":"q;",$isbe:1,"%":"SpeechGrammar"},
oP:{"^":"le;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isbe")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.be]},
$asz:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asC:function(){return[W.be]},
"%":"SpeechGrammarList"},
bf:{"^":"q;0l:length=",$isbf:1,"%":"SpeechRecognitionResult"},
oR:{"^":"lh;",
k:function(a,b){return a.getItem(H.O(b))},
m:function(a,b,c){a.setItem(b,H.O(c))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaD:function(a){var z=H.h([],[P.k])
this.K(a,new W.ji(z))
return z},
gl:function(a){return a.length},
$asah:function(){return[P.k,P.k]},
$isK:1,
$asK:function(){return[P.k,P.k]},
"%":"Storage"},
ji:{"^":"m:22;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oU:{"^":"a7;0a6:type}","%":"HTMLStyleElement"},
bg:{"^":"q;",$isbg:1,"%":"CSSStyleSheet|StyleSheet"},
bL:{"^":"a7;",$isbL:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bh:{"^":"a6;",$isbh:1,"%":"TextTrack"},
bi:{"^":"a6;",$isbi:1,"%":"TextTrackCue|VTTCue"},
oZ:{"^":"lo;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isbi")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bi]},
$asz:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asC:function(){return[W.bi]},
"%":"TextTrackCueList"},
p_:{"^":"fp;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isbh")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bh]},
$asz:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asC:function(){return[W.bh]},
"%":"TextTrackList"},
p0:{"^":"q;0l:length=","%":"TimeRanges"},
bk:{"^":"q;",$isbk:1,"%":"Touch"},
bl:{"^":"dh;",$isbl:1,"%":"TouchEvent"},
p1:{"^":"lu;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isbk")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bk]},
$asz:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asC:function(){return[W.bk]},
"%":"TouchList"},
p2:{"^":"q;0l:length=","%":"TrackDefaultList"},
dh:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
p4:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
p6:{"^":"q;0t:x=","%":"VRStageBoundsPoint"},
p7:{"^":"a6;0l:length=","%":"VideoTrackList"},
bP:{"^":"aE;",
ghD:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghC:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbP:1,
"%":"WheelEvent"},
kl:{"^":"a6;",
fL:function(a,b){return a.requestAnimationFrame(H.bt(H.f(b,{func:1,ret:-1,args:[P.Z]}),1))},
f0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
pc:{"^":"lW;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isb4")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b4]},
$asz:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asC:function(){return[W.b4]},
"%":"CSSRuleList"},
pd:{"^":"hB;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
A:function(a,b){var z
if(b==null)return!1
z=H.bs(b,"$isa8",[P.Z],"$asa8")
if(!z)return!1
z=J.aX(b)
return a.left===z.gaW(b)&&a.top===z.gbh(b)&&a.width===z.gar(b)&&a.height===z.gap(b)},
gT:function(a){return W.ff(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gap:function(a){return a.height},
gar:function(a){return a.width},
gt:function(a){return a.x},
gu:function(a){return a.y},
"%":"ClientRect|DOMRect"},
pf:{"^":"lY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isb6")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b6]},
$asz:function(){return[W.b6]},
$isi:1,
$asi:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asC:function(){return[W.b6]},
"%":"GamepadList"},
pg:{"^":"m_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isN")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.N]},
$asz:function(){return[W.N]},
$isi:1,
$asi:function(){return[W.N]},
$isc:1,
$asc:function(){return[W.N]},
$asC:function(){return[W.N]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ph:{"^":"m1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isbf")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bf]},
$asz:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asC:function(){return[W.bf]},
"%":"SpeechRecognitionResultList"},
pi:{"^":"m3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.d(c,"$isbg")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bg]},
$asz:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asC:function(){return[W.bg]},
"%":"StyleSheetList"},
kA:{"^":"dd;a,b,c,$ti",
hS:function(a,b,c,d){var z=H.y(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
pe:{"^":"kA;a,b,c,$ti"},
kB:{"^":"eD;a,b,c,d,e,$ti",
h3:function(){var z=this.d
if(z!=null&&this.a<=0)J.h5(this.b,this.c,z,!1)},
q:{
a2:function(a,b,c,d,e){var z=c==null?null:W.fG(new W.kC(c),W.aa)
z=new W.kB(0,a,b,z,!1,[e])
z.h3()
return z}}},
kC:{"^":"m:6;a",
$1:function(a){return this.a.$1(H.d(a,"$isaa"))}},
C:{"^":"b;$ti",
ga4:function(a){return new W.ea(a,this.gl(a),-1,[H.b_(this,a,"C",0)])},
aB:function(a,b,c,d){H.A(d,H.b_(this,a,"C",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
ea:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dL(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
ku:{"^":"q+hv;"},
kw:{"^":"q+z;"},
kx:{"^":"kw+C;"},
ky:{"^":"q+z;"},
kz:{"^":"ky+C;"},
kD:{"^":"q+z;"},
kE:{"^":"kD+C;"},
kQ:{"^":"q+z;"},
kR:{"^":"kQ+C;"},
kX:{"^":"q+ah;"},
kY:{"^":"q+ah;"},
kZ:{"^":"q+z;"},
l_:{"^":"kZ+C;"},
l0:{"^":"q+z;"},
l1:{"^":"l0+C;"},
l4:{"^":"q+z;"},
l5:{"^":"l4+C;"},
lb:{"^":"q+ah;"},
fl:{"^":"a6+z;"},
fm:{"^":"fl+C;"},
ld:{"^":"q+z;"},
le:{"^":"ld+C;"},
lh:{"^":"q+ah;"},
ln:{"^":"q+z;"},
lo:{"^":"ln+C;"},
fo:{"^":"a6+z;"},
fp:{"^":"fo+C;"},
lt:{"^":"q+z;"},
lu:{"^":"lt+C;"},
lV:{"^":"q+z;"},
lW:{"^":"lV+C;"},
lX:{"^":"q+z;"},
lY:{"^":"lX+C;"},
lZ:{"^":"q+z;"},
m_:{"^":"lZ+C;"},
m0:{"^":"q+z;"},
m1:{"^":"m0+C;"},
m2:{"^":"q+z;"},
m3:{"^":"m2+C;"}}],["","",,P,{"^":"",
mp:function(a){var z,y
z=J.M(a)
if(!!z.$isc1){y=z.gdJ(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fr(a.data,a.height,a.width)},
mo:function(a){if(a instanceof P.fr)return{data:a.a,height:a.b,width:a.c}
return a},
aW:function(a){var z,y,x,w,v
if(a==null)return
z=P.el(P.k,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=H.O(y[w])
z.m(0,v,a[v])}return z},
mm:function(a,b){var z={}
a.K(0,new P.mn(z))
return z},
e6:function(){var z=$.e5
if(z==null){z=J.cJ(window.navigator.userAgent,"Opera",0)
$.e5=z}return z},
hz:function(){var z,y
z=$.e2
if(z!=null)return z
y=$.e3
if(y==null){y=J.cJ(window.navigator.userAgent,"Firefox",0)
$.e3=y}if(y)z="-moz-"
else{y=$.e4
if(y==null){y=!P.e6()&&J.cJ(window.navigator.userAgent,"Trident/",0)
$.e4=y}if(y)z="-ms-"
else z=P.e6()?"-o-":"-webkit-"}$.e2=z
return z},
lk:{"^":"b;",
e5:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cS:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.M(a)
if(!!y.$isal)return new Date(a.a)
if(!!y.$isiX)throw H.a(P.c8("structured clone of RegExp"))
if(!!y.$isaY)return a
if(!!y.$iscM)return a
if(!!y.$ise9)return a
if(!!y.$isc1)return a
if(!!y.$isep||!!y.$isd7)return a
if(!!y.$isK){x=this.e5(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.K(a,new P.lm(z,this))
return z.a}if(!!y.$isc){x=this.e5(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.hA(a,x)}throw H.a(P.c8("structured clone of other type"))},
hA:function(a,b){var z,y,x,w
z=J.aM(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cS(z.k(a,w)))
return x}},
lm:{"^":"m:9;a,b",
$2:function(a,b){this.a.a[a]=this.b.cS(b)}},
fr:{"^":"b;dJ:a>,b,c",$isc1:1},
mn:{"^":"m:9;a",
$2:function(a,b){this.a[a]=b}},
ll:{"^":"lk;a,b"},
hL:{"^":"cp;a,b",
gbo:function(){var z,y,x
z=this.b
y=H.az(z,"z",0)
x=W.a3
return new H.ik(new H.kj(z,H.f(new P.hM(),{func:1,ret:P.ag,args:[y]}),[y]),H.f(new P.hN(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.D(b)
H.d(c,"$isa3")
z=this.gbo()
J.h8(z.b.$1(J.cK(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aB:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gl:function(a){return J.at(this.gbo().a)},
k:function(a,b){var z=this.gbo()
return z.b.$1(J.cK(z.a,b))},
ga4:function(a){var z=P.id(this.gbo(),!1,W.a3)
return new J.au(z,z.length,0,[H.y(z,0)])},
$asz:function(){return[W.a3]},
$asi:function(){return[W.a3]},
$asc:function(){return[W.a3]}},
hM:{"^":"m:33;",
$1:function(a){return!!J.M(H.d(a,"$isN")).$isa3}},
hN:{"^":"m:30;",
$1:function(a){return H.j(H.d(a,"$isN"),"$isa3")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fe:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bJ:{"^":"b;t:a>,u:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
A:function(a,b){var z,y,x
if(b==null)return!1
z=H.bs(b,"$isbJ",[P.Z],null)
if(!z)return!1
z=this.a
y=J.aX(b)
x=y.gt(b)
if(z==null?x==null:z===x){z=this.b
y=y.gu(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gT:function(a){var z,y
z=J.b2(this.a)
y=J.b2(this.b)
return P.fe(P.bR(P.bR(0,z),y))},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=H.y(this,0)
z=H.A(z*b,y)
x=this.b
if(typeof x!=="number")return x.j()
return new P.bJ(z,H.A(x*b,y),this.$ti)}},
l6:{"^":"b;$ti",
gbc:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.A(z+this.c,H.y(this,0))},
gck:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.A(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bs(b,"$isa8",[P.Z],"$asa8")
if(!z)return!1
z=this.a
y=J.aX(b)
x=y.gaW(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbh(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gbc(b)){if(typeof x!=="number")return x.F()
z=H.A(x+this.d,w)===y.gck(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.b2(z)
x=this.b
w=J.b2(x)
if(typeof z!=="number")return z.F()
v=H.y(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.A(x+this.d,v)
return P.fe(P.bR(P.bR(P.bR(P.bR(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dI:function(a,b){var z,y
H.w(b,"$isbJ",[P.Z],"$asbJ")
z=b.a
y=this.a
if(typeof z!=="number")return z.cV()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cV()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a8:{"^":"l6;aW:a>,bh:b>,ar:c>,ap:d>,$ti",q:{
iU:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.O()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.O()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",nQ:{"^":"W;0t:x=,0u:y=","%":"SVGFEBlendElement"},nR:{"^":"W;0t:x=,0u:y=","%":"SVGFEColorMatrixElement"},nS:{"^":"W;0t:x=,0u:y=","%":"SVGFEComponentTransferElement"},nT:{"^":"W;0t:x=,0u:y=","%":"SVGFECompositeElement"},nU:{"^":"W;0t:x=,0u:y=","%":"SVGFEConvolveMatrixElement"},nV:{"^":"W;0t:x=,0u:y=","%":"SVGFEDiffuseLightingElement"},nW:{"^":"W;0t:x=,0u:y=","%":"SVGFEDisplacementMapElement"},nX:{"^":"W;0t:x=,0u:y=","%":"SVGFEFloodElement"},nY:{"^":"W;0t:x=,0u:y=","%":"SVGFEGaussianBlurElement"},nZ:{"^":"W;0t:x=,0u:y=","%":"SVGFEImageElement"},o_:{"^":"W;0t:x=,0u:y=","%":"SVGFEMergeElement"},o0:{"^":"W;0t:x=,0u:y=","%":"SVGFEMorphologyElement"},o1:{"^":"W;0t:x=,0u:y=","%":"SVGFEOffsetElement"},o2:{"^":"W;0t:x=,0u:y=","%":"SVGFEPointLightElement"},o3:{"^":"W;0t:x=,0u:y=","%":"SVGFESpecularLightingElement"},o4:{"^":"W;0t:x=,0u:y=","%":"SVGFESpotLightElement"},o5:{"^":"W;0t:x=,0u:y=","%":"SVGFETileElement"},o6:{"^":"W;0t:x=,0u:y=","%":"SVGFETurbulenceElement"},o8:{"^":"W;0t:x=,0u:y=","%":"SVGFilterElement"},o9:{"^":"bD;0t:x=,0u:y=","%":"SVGForeignObjectElement"},hQ:{"^":"bD;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bD:{"^":"W;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},oe:{"^":"bD;0t:x=,0u:y=","%":"SVGImageElement"},bG:{"^":"q;",$isbG:1,"%":"SVGLength"},oh:{"^":"kT;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.d(c,"$isbG")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bG]},
$isi:1,
$asi:function(){return[P.bG]},
$isc:1,
$asc:function(){return[P.bG]},
$asC:function(){return[P.bG]},
"%":"SVGLengthList"},ol:{"^":"W;0t:x=,0u:y=","%":"SVGMaskElement"},bI:{"^":"q;",$isbI:1,"%":"SVGNumber"},ox:{"^":"l3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.d(c,"$isbI")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bI]},
$isi:1,
$asi:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asC:function(){return[P.bI]},
"%":"SVGNumberList"},oC:{"^":"W;0t:x=,0u:y=","%":"SVGPatternElement"},oE:{"^":"q;0t:x=,0u:y=","%":"SVGPoint"},oF:{"^":"q;0l:length=","%":"SVGPointList"},oG:{"^":"q;0t:x=,0u:y=","%":"SVGRect"},oH:{"^":"hQ;0t:x=,0u:y=","%":"SVGRectElement"},oL:{"^":"W;0a6:type}","%":"SVGScriptElement"},oS:{"^":"lj;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asz:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]},
$asC:function(){return[P.k]},
"%":"SVGStringList"},oV:{"^":"W;0a6:type}","%":"SVGStyleElement"},W:{"^":"a3;",
gco:function(a){return new P.hL(a,new W.ks(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oW:{"^":"bD;0t:x=,0u:y=","%":"SVGSVGElement"},jn:{"^":"bD;","%":"SVGTextPathElement;SVGTextContentElement"},oY:{"^":"jn;0t:x=,0u:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bM:{"^":"q;",$isbM:1,"%":"SVGTransform"},p3:{"^":"lw;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.d(c,"$isbM")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bM]},
$isi:1,
$asi:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asC:function(){return[P.bM]},
"%":"SVGTransformList"},p5:{"^":"bD;0t:x=,0u:y=","%":"SVGUseElement"},kS:{"^":"q+z;"},kT:{"^":"kS+C;"},l2:{"^":"q+z;"},l3:{"^":"l2+C;"},li:{"^":"q+z;"},lj:{"^":"li+C;"},lv:{"^":"q+z;"},lw:{"^":"lv+C;"}}],["","",,P,{"^":"",Q:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
$isjB:1}}],["","",,P,{"^":"",ns:{"^":"q;0l:length=","%":"AudioBuffer"},dQ:{"^":"a6;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nt:{"^":"kr;",
k:function(a,b){return P.aW(a.get(H.O(b)))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gaD:function(a){var z=H.h([],[P.k])
this.K(a,new P.hb(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asah:function(){return[P.k,null]},
$isK:1,
$asK:function(){return[P.k,null]},
"%":"AudioParamMap"},hb:{"^":"m:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},hc:{"^":"dQ;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nu:{"^":"a6;0l:length=","%":"AudioTrackList"},hf:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nv:{"^":"dQ;0a6:type}","%":"BiquadFilterNode"},oA:{"^":"hf;0l:length=","%":"OfflineAudioContext"},oB:{"^":"hc;0a6:type}","%":"Oscillator|OscillatorNode"},kr:{"^":"q+ah;"}}],["","",,P,{"^":"",da:{"^":"q;",
ik:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.M(g)
if(!!z.$isc1)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mo(g))
return}if(!!z.$isec)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bZ("Incorrect number or type of arguments"))},
ij:function(a,b,c,d,e,f,g){return this.ik(a,b,c,d,e,f,g,null,null,null)},
$isda:1,
"%":"WebGLRenderingContext"},jo:{"^":"q;",$isjo:1,"%":"WebGLTexture"},jK:{"^":"q;",$isjK:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oQ:{"^":"lg;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return P.aW(a.item(b))},
m:function(a,b,c){H.D(b)
H.d(c,"$isK")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asz:function(){return[[P.K,,,]]},
$isi:1,
$asi:function(){return[[P.K,,,]]},
$isc:1,
$asc:function(){return[[P.K,,,]]},
$asC:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},lf:{"^":"q+z;"},lg:{"^":"lf+C;"}}],["","",,O,{"^":"",ak:{"^":"b;0a,0b,0c,0d,$ti",
bm:function(a){this.a=H.h([],[a])
this.b=null
this.c=null
this.d=null},
cX:function(a,b,c){var z=H.az(this,"ak",0)
H.f(b,{func:1,ret:P.ag,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
b_:function(a,b){return this.cX(a,null,b)},
dm:function(a){var z
H.w(a,"$isi",[H.az(this,"ak",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
d2:function(a,b){var z
H.w(b,"$isi",[H.az(this,"ak",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga4:function(a){var z=this.a
return new J.au(z,z.length,0,[H.y(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.az(this,"ak",0)
H.A(b,z)
z=[z]
if(this.dm(H.h([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d2(x,H.h([b],z))}},
ce:function(a,b){var z,y
H.w(b,"$isi",[H.az(this,"ak",0)],"$asi")
if(this.dm(b)){z=this.a
y=z.length
C.a.ce(z,b)
this.d2(y,b)}},
$isi:1,
q:{
cS:function(a){var z=new O.ak([a])
z.bm(a)
return z}}},d4:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
eI:function(a){var z=this.b
if(!(z==null))z.E(a)},
aI:function(){return this.eI(null)},
ga1:function(a){var z=this.a
if(z.length>0)return C.a.gaE(z)
else return V.b9()},
bM:function(a){var z=this.a
if(a==null)C.a.h(z,V.b9())
else C.a.h(z,a)
this.aI()},
aF:function(){var z=this.a
if(z.length>0){z.pop()
this.aI()}}}}],["","",,E,{"^":"",cL:{"^":"b;"},aO:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a7:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sa8:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gw()
y.toString
x=H.f(this.gek(),{func:1,ret:-1,args:[D.p]})
C.a.L(y.a,x)}y=this.c
if(y!=null){y=y.gw()
y.toString
x=H.f(this.gek(),{func:1,ret:-1,args:[D.p]})
C.a.h(y.a,x)}w=new D.J("shape",z,this.c,this,[F.eA])
w.b=!0
this.aX(w)}},
an:function(a,b){var z
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.H();)z.d.an(0,b)},
ab:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga1(z))
z.aI()
a.cL(this.f)
z=a.dy
y=(z&&C.a).gaE(z)
if(y!=null&&this.d!=null)y.em(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.H();)z.d.ab(a)
a.cK()
a.dx.aF()},
gw:function(){var z=this.z
if(z==null){z=D.H()
this.z=z}return z},
aX:function(a){var z=this.z
if(!(z==null))z.E(a)},
a5:function(){return this.aX(null)},
hZ:[function(a){H.d(a,"$isp")
this.e=null
this.aX(a)},function(){return this.hZ(null)},"j8","$1","$0","gek",0,2,1],
hX:[function(a){this.aX(H.d(a,"$isp"))},function(){return this.hX(null)},"j6","$1","$0","gej",0,2,1],
j5:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aO],"$asi")
for(z=b.length,y=this.gej(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.E)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.b5()
t.a=H.h([],w)
t.c=0
u.sa7(t)}t=u.ga7()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.a5()},"$2","ghW",8,0,10],
j7:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aO],"$asi")
for(z=b.length,y=this.gej(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.E)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.b5()
t.a=H.h([],w)
t.c=0
u.sa7(t)}t=u.ga7()
t.toString
H.f(y,x)
C.a.L(t.a,y)}}this.a5()},"$2","ghY",8,0,10],
$isaF:1,
q:{
e8:function(a,b,c,d,e,f){var z,y
z=new E.aO()
z.a=d
z.b=!0
y=O.cS(E.aO)
z.y=y
y.b_(z.ghW(),z.ghY())
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
z.sa8(0,e)
return z}}},iZ:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eH:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.al(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d4()
y=[V.aB]
z.a=H.h([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.p]}
v=H.f(new E.j0(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d4()
z.a=H.h([],y)
v=z.gw()
v.toString
x=H.f(new E.j1(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d4()
z.a=H.h([],y)
y=z.gw()
y.toString
w=H.f(new E.j2(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.h([],[O.c7])
this.dy=z
C.a.h(z,null)
this.fr=new H.co(0,0,[P.k,A.dc])},
gi7:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga1(z)
y=this.db
y=z.j(0,y.ga1(y))
this.z=y
z=y}return z},
cL:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaE(z):a;(z&&C.a).h(z,y)},
cK:function(){var z=this.dy
if(z.length>1)z.pop()},
dC:function(a){var z=a.b
if(z.length===0)throw H.a(P.x("May not cache a shader with no name."))
if(this.fr.cp(0,z))throw H.a(P.x('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.m(0,z,a)},
q:{
j_:function(a,b){var z=new E.iZ(a,b)
z.eH(a,b)
return z}}},j0:{"^":"m:15;a",
$1:function(a){var z
H.d(a,"$isp")
z=this.a
z.z=null
z.ch=null}},j1:{"^":"m:15;a",
$1:function(a){var z
H.d(a,"$isp")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j2:{"^":"m:15;a",
$1:function(a){var z
H.d(a,"$isp")
z=this.a
z.ch=null
z.cx=null}},ju:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a7:x@,0y,0z,0Q,0ch",
gw:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
eK:[function(a){var z
H.d(a,"$isp")
z=this.x
if(!(z==null))z.E(a)
this.ic()},function(){return this.eK(null)},"eJ","$1","$0","gd3",0,2,1],
ghK:function(){var z,y,x
z=Date.now()
y=C.d.a9(P.e7(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.al(z,!1)
return x/y},
dr:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.o(z)
x=C.h.cC(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.h.cC(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
ic:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jw(this),{func:1,ret:-1,args:[P.Z]})
C.B.f0(z)
C.B.fL(z,W.fG(y,P.Z))}},
ia:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dr()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.e7(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.ab(this.e)}}catch(v){z=H.as(v)
y=H.bv(v)
P.dI("Error: "+H.l(z))
P.dI("Stack: "+H.l(y))
throw H.a(z)}},
q:{
jv:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$iscQ)return E.eH(a,!0,!0,!0,!1)
y=W.cR(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gco(a).h(0,y)
w=E.eH(y,!0,!0,!0,!1)
w.a=a
return w},
eH:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ju()
y=P.i7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
x=C.k.bR(a,"webgl",y)
x=H.d(x==null?C.k.bR(a,"experimental-webgl",y):x,"$isda")
if(x==null)H.u(P.x("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j_(x,a)
w=new T.jp(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jX(a)
v=new X.i0()
v.c=new X.aD(!1,!1,!1)
v.d=P.ia(null,null,null,P.n)
w.b=v
v=new X.ix(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ig(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jy(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.h([],[[P.eD,P.b]])
w.z=v
u=document
t=W.aE
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.f(w.gfj(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.f(w.gfm(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.f(w.gff(),q),!1,r))
v=w.z
p=W.bF
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.f(w.gfo(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.f(w.gfn(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.f(w.gfs(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.f(w.gfu(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.f(w.gft(),s),!1,t))
p=w.z
o=W.bP;(p&&C.a).h(p,W.a2(a,H.O(W.hF(a)),H.f(w.gfv(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.f(w.gfk(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.f(w.gfl(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.f(w.gfw(),q),!1,r))
r=w.z
q=W.bl
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.f(w.gfG(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.f(w.gfE(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.f(w.gfF(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.al(Date.now(),!1)
z.ch=0
z.dr()
return z}}},jw:{"^":"m:31;a",
$1:function(a){var z
H.n8(a)
z=this.a
if(z.z){z.z=!1
z.ia()}}}}],["","",,Z,{"^":"",f8:{"^":"b;a,b",q:{
dn:function(a,b,c){var z
H.w(c,"$isc",[P.n],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bp(c)),35044)
a.bindBuffer(b,null)
return new Z.f8(b,z)}}},dU:{"^":"cL;a,b,c,d,e",
Z:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.as(y)
x=P.x('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},f9:{"^":"b;a",$isnw:1},cP:{"^":"b;a,0b,c,d",
aC:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
Z:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].Z(a)},
aG:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
ab:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.k]
y=H.h([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v)C.a.h(y,x[v].i(0))
u=H.h([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.a_(y,", ")+"\nAttrs:   "+C.a.a_(u,", ")},
$isoX:1},cn:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bc(this.c)+"'")+"]"}},bm:{"^":"b;a",
gcZ:function(a){var z,y
z=this.a
y=(z&$.$get$ay().a)!==0?3:0
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$aT().a)!==0)y+=2
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$bN().a)!==0)y+=3
if((z&$.$get$bO().a)!==0)y+=4
if((z&$.$get$bn().a)!==0)++y
return(z&$.$get$aQ().a)!==0?y+4:y},
ht:function(a){var z,y,x
z=$.$get$ay()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bn()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f7()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bm))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.h([],[P.k])
y=this.a
if((y&$.$get$ay().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aU().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bN().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bO().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bn().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.a_(z,"|")},
q:{
ap:function(a){return new Z.bm(a)}}}}],["","",,D,{"^":"",dX:{"^":"b;"},b5:{"^":"b;0a,0b,0c",
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.p(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.hJ(z))
return x!==0},
hE:function(){return this.E(null)},
ie:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.E(y)}}},
aq:function(a){return this.ie(a,!0,!1)},
q:{
H:function(){var z=new D.b5()
z.a=H.h([],[{func:1,ret:-1,args:[D.p]}])
z.c=0
return z}}},hJ:{"^":"m:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.p]})
z=this.a.a
z.b
a.$1(z)}},p:{"^":"b;a,0b"},c2:{"^":"p;c,d,a,0b,$ti"},c3:{"^":"p;c,d,a,0b,$ti"},J:{"^":"p;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dV:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
q:{"^":"ny<"}},ei:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ei))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ej:{"^":"p;c,a,0b"},i0:{"^":"b;0a,0b,0c,0d",
i4:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ej(a,this)
y.b=!0
return z.E(y)},
i0:function(a){var z,y
this.c=a.b
this.d.L(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ej(a,this)
y.b=!0
return z.E(y)}},em:{"^":"cr;x,y,c,d,e,a,0b"},ig:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
av:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.R(y.a+x*w,y.b+v*u)
u=this.a.gaQ()
s=new X.bH(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cJ:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.av(a,b))
return!0},
ba:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eA()
if(typeof z!=="number")return z.bQ()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.av(a,b))
return!0},
b9:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.av(a,b))
return!0},
i5:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaQ()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.d5(new V.Y(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.E(w)
return!0},
fq:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.em(c,a,this.a.gaQ(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.R(0,0)}},aD:{"^":"b;a,b,c",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aD))return!1
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
return z+(this.c?"Shift+":"")}},bH:{"^":"cr;x,y,z,Q,ch,c,d,e,a,0b"},ix:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bZ:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gaQ()
x=new X.bH(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cJ:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.bZ(a,b,!0))
return!0},
ba:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eA()
if(typeof z!=="number")return z.bQ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.bZ(a,b,!0))
return!0},
b9:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.bZ(a,b,!1))
return!0},
i6:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaQ()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.d5(new V.Y(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdL:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
gbP:function(){var z=this.c
if(z==null){z=D.H()
this.c=z}return z},
gei:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z}},d5:{"^":"cr;x,c,d,e,a,0b"},cr:{"^":"p;"},eJ:{"^":"cr;x,y,z,Q,ch,c,d,e,a,0b"},jy:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
av:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.R],"$asc")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gaQ()
w=new X.eJ(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i3:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.b
if(z==null)return!1
z.E(this.av(a,!0))
return!0},
i1:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.c
if(z==null)return!1
z.E(this.av(a,!0))
return!0},
i2:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.d
if(z==null)return!1
z.E(this.av(a,!1))
return!0}},jX:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaQ:function(){var z=this.a
return V.ez(0,0,(z&&C.k).gbw(z).c,C.k.gbw(z).d)},
de:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ei(z,new X.aD(y,a.altKey,a.shiftKey))},
aO:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
cc:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
aw:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=z.top
if(typeof x!=="number")return x.M()
return new V.R(y-w,x-v)},
b1:function(a){return new V.Y(a.movementX,a.movementY)},
c6:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.h([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v){u=x[v]
t=C.h.ai(u.pageX)
C.h.ai(u.pageY)
s=z.left
C.h.ai(u.pageX)
C.a.h(y,new V.R(t-s,C.h.ai(u.pageY)-z.top))}return y},
at:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dV(z,new X.aD(y,a.altKey,a.shiftKey))},
iH:[function(a){this.f=!0},"$1","gfm",4,0,6],
iB:[function(a){this.f=!1},"$1","gff",4,0,6],
iE:[function(a){if(this.f)a.preventDefault()},"$1","gfj",4,0,6],
iJ:[function(a){var z
H.d(a,"$isbF")
if(!this.f)return
z=this.de(a)
if(this.b.i4(z))a.preventDefault()},"$1","gfo",4,0,27],
iI:[function(a){var z
H.d(a,"$isbF")
if(!this.f)return
z=this.de(a)
if(this.b.i0(z))a.preventDefault()},"$1","gfn",4,0,27],
iL:[function(a){var z,y,x,w
H.d(a,"$isaE")
z=this.a
z.focus()
this.f=!0
this.aO(a)
if(this.x){y=this.at(a)
x=this.b1(a)
if(this.d.cJ(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.at(a)
w=this.aw(a)
if(this.c.cJ(y,w))a.preventDefault()},"$1","gfs",4,0,5],
iN:[function(a){var z,y,x
H.d(a,"$isaE")
this.aO(a)
z=this.at(a)
if(this.x){y=this.b1(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.ba(z,x))a.preventDefault()},"$1","gfu",4,0,5],
iG:[function(a){var z,y,x,w
H.d(a,"$isaE")
z=this.a
if(!(z&&C.k).gbw(z).dI(0,new P.bJ(a.clientX,a.clientY,[P.Z]))){this.aO(a)
y=this.at(a)
if(this.x){x=this.b1(a)
if(this.d.ba(y,x))a.preventDefault()
return}if(this.r)return
w=this.aw(a)
if(this.c.ba(y,w))a.preventDefault()}},"$1","gfl",4,0,5],
iM:[function(a){var z,y,x
H.d(a,"$isaE")
this.aO(a)
z=this.at(a)
if(this.x){y=this.b1(a)
if(this.d.b9(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b9(z,x))a.preventDefault()},"$1","gft",4,0,5],
iF:[function(a){var z,y,x,w
H.d(a,"$isaE")
z=this.a
if(!(z&&C.k).gbw(z).dI(0,new P.bJ(a.clientX,a.clientY,[P.Z]))){this.aO(a)
y=this.at(a)
if(this.x){x=this.b1(a)
if(this.d.b9(y,x))a.preventDefault()
return}if(this.r)return
w=this.aw(a)
if(this.c.b9(y,w))a.preventDefault()}},"$1","gfk",4,0,5],
iO:[function(a){var z,y
H.d(a,"$isbP")
this.aO(a)
z=new V.Y((a&&C.A).ghC(a),C.A.ghD(a)).v(0,180)
if(this.x){if(this.d.i5(z))a.preventDefault()
return}if(this.r)return
y=this.aw(a)
if(this.c.i6(z,y))a.preventDefault()},"$1","gfv",4,0,35],
iP:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.at(this.y)
v=this.aw(this.y)
this.d.fq(w,v,x)}},"$1","gfw",4,0,6],
iX:[function(a){var z
H.d(a,"$isbl")
this.a.focus()
this.f=!0
this.cc(a)
z=this.c6(a)
if(this.e.i3(z))a.preventDefault()},"$1","gfG",4,0,12],
iV:[function(a){var z
H.d(a,"$isbl")
this.cc(a)
z=this.c6(a)
if(this.e.i1(z))a.preventDefault()},"$1","gfE",4,0,12],
iW:[function(a){var z
H.d(a,"$isbl")
this.cc(a)
z=this.c6(a)
if(this.e.i2(z))a.preventDefault()},"$1","gfF",4,0,12]}}],["","",,D,{"^":"",ck:{"^":"b;0a,0b,0c,0d",
gw:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z},
aJ:[function(a){var z
H.d(a,"$isp")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aJ(null)},"iq","$1","$0","geL",0,2,1],
$isa4:1,
$isaF:1},a4:{"^":"b;",$isaF:1},i1:{"^":"ak;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gw:function(){var z=this.Q
if(z==null){z=D.H()
this.Q=z}return z},
aJ:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fp:[function(a){var z
H.d(a,"$isp")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fp(null)},"iK","$1","$0","gdl",0,2,1],
iQ:[function(a){var z,y,x
H.w(a,"$isi",[D.a4],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.E)(a),++y){x=a[y]
if(x==null||this.eW(x))return!1}return!0},"$1","gfz",4,0,37],
iy:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdl(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=H.d(b[u],"$isa4")
if(t instanceof D.ck)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b5()
s.a=H.h([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.c2(a,b,this,[z])
z.b=!0
this.aJ(z)},"$2","gfc",8,0,26],
iS:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdl(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=H.d(b[u],"$isa4")
if(t instanceof D.ck)C.a.L(this.e,t)
s=t.d
if(s==null){s=new D.b5()
s.a=H.h([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.L(s.a,x)}z=new D.c3(a,b,this,[z])
z.b=!0
this.aJ(z)},"$2","gfB",8,0,26],
eW:function(a){var z=C.a.b4(this.e,a)
return z},
$asi:function(){return[D.a4]},
$asak:function(){return[D.a4]}},iG:{"^":"b;",$isa4:1,$isaF:1},jf:{"^":"b;",$isa4:1,$isaF:1},jr:{"^":"b;",$isa4:1,$isaF:1},js:{"^":"b;",$isa4:1,$isaF:1},jt:{"^":"b;",$isa4:1,$isaF:1}}],["","",,V,{"^":"",
nA:[function(a,b){if(typeof b!=="number")return b.M()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iu",8,0,34],
nn:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.bk(a-b,z)
return(a<0?a+z:a)+b},
S:function(a,b,c){if(a==null)return C.b.ah("null",c)
return C.b.ah(C.h.er($.t.$2(a,0)?0:a,b),c+b+1)},
bu:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.r],"$asc")
z=H.h([],[P.k])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.E)(a),++w){v=V.S(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.m(z,u,C.b.ah(z[u],x))}return z},
dH:function(a,b){return C.h.im(Math.pow(b,C.I.cC(Math.log(H.ml(a))/Math.log(b))))},
v:{"^":"b;a,b,c",
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
return new V.v(z,y,x)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.v))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
av:{"^":"b;a,b,c,d",
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
return new V.av(z,y,x,w)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}},
cq:{"^":"b;a,b,c,d,e,f,r,x,y",
ac:function(a,b){var z=H.h([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.d(a5,"$iscq")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.h.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.h.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.h.j(t,s)
q=a5.b
p=C.h.j(z,q)
o=a5.e
n=C.h.j(w,o)
m=a5.x
l=C.h.j(t,m)
k=a5.c
z=C.h.j(z,k)
j=a5.f
w=C.h.j(w,j)
i=a5.y
t=C.h.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.h.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.h.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.h.j(d,s)
b=C.h.j(h,q)
a=C.h.j(f,o)
a0=C.h.j(d,m)
h=C.h.j(h,k)
f=C.h.j(f,j)
d=C.h.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.h.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.h.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.cq(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.j(a3,s),C.h.j(a1,q)+C.h.j(a2,o)+C.h.j(a3,m),C.h.j(a1,k)+C.h.j(a2,j)+C.h.j(a3,i))},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cq))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
z=b.e
if(!$.t.$2(z,this.e))return!1
z=b.f
if(!$.t.$2(z,this.f))return!1
z=b.r
if(!$.t.$2(z,this.r))return!1
z=b.x
if(!$.t.$2(z,this.x))return!1
z=b.y
if(!$.t.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.r]
y=V.bu(H.h([this.a,this.d,this.r],z),3,0)
x=V.bu(H.h([this.b,this.e,this.x],z),3,0)
w=V.bu(H.h([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.e(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.e(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.e(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.e(y,1)
s=" "+y[1]+", "
if(1>=u)return H.e(x,1)
s=s+x[1]+", "
if(1>=t)return H.e(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.e(y,2)
z=" "+y[2]+", "
if(2>=u)return H.e(x,2)
z=z+x[2]+", "
if(2>=t)return H.e(w,2)
return s+(z+w[2]+"]")}},
aB:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ac:function(a,b){var z=H.h([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
cE:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.t.$2(a2,0))return V.b9()
a3=1/a2
a4=-w
a5=-i
return V.aC((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.d(a7,"$isaB")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
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
return V.aC(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.F(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bi:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.V(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aB))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
z=b.e
if(!$.t.$2(z,this.e))return!1
z=b.f
if(!$.t.$2(z,this.f))return!1
z=b.r
if(!$.t.$2(z,this.r))return!1
z=b.x
if(!$.t.$2(z,this.x))return!1
z=b.y
if(!$.t.$2(z,this.y))return!1
z=b.z
if(!$.t.$2(z,this.z))return!1
z=b.Q
if(!$.t.$2(z,this.Q))return!1
z=b.ch
if(!$.t.$2(z,this.ch))return!1
z=b.cx
if(!$.t.$2(z,this.cx))return!1
z=b.cy
if(!$.t.$2(z,this.cy))return!1
z=b.db
if(!$.t.$2(z,this.db))return!1
z=b.dx
if(!$.t.$2(z,this.dx))return!1
return!0},
i:function(a){return this.N()},
e6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.bu(H.h([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bu(H.h([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bu(H.h([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bu(H.h([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.e(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.e(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.e(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.e(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.e(y,1)
q=q+y[1]+", "
if(1>=t)return H.e(x,1)
q=q+x[1]+", "
if(1>=s)return H.e(w,1)
q=q+w[1]+", "
if(1>=r)return H.e(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.e(y,2)
u=u+y[2]+", "
if(2>=t)return H.e(x,2)
u=u+x[2]+", "
if(2>=s)return H.e(w,2)
u=u+w[2]+", "
if(2>=r)return H.e(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.e(y,3)
q=q+y[3]+", "
if(3>=t)return H.e(x,3)
q=q+x[3]+", "
if(3>=s)return H.e(w,3)
q=q+w[3]+", "
if(3>=r)return H.e(v,3)
return u+(q+v[3]+"]")},
N:function(){return this.e6("",3,0)},
G:function(a){return this.e6(a,3,0)},
q:{
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b9:function(){return V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eo:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.D(c)))
y=b.ax(z)
x=y.v(0,Math.sqrt(y.D(y)))
w=z.ax(x)
v=new V.F(a.a,a.b,a.c)
return V.aC(x.a,w.a,z.a,x.P(0).D(v),x.b,w.b,z.b,w.P(0).D(v),x.c,w.c,z.c,z.P(0).D(v),0,0,0,1)}}},
R:{"^":"b;t:a>,u:b>",
M:function(a,b){return new V.R(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.R(this.a*b,this.b*b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}},
V:{"^":"b;t:a>,u:b>,c",
F:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.V(this.a*b,this.b*b,this.c*b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
aG:{"^":"b;t:a>,u:b>,c,d",
j:function(a,b){return new V.aG(this.a*b,this.b*b,this.c*b,this.d*b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aG))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}},
ey:{"^":"b;t:a>,u:b>,c,d",
gaa:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ey))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"},
q:{
ez:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ey(a,b,c,d)}}},
Y:{"^":"b;a,b",
hQ:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,25],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.Y(z*b,y*b)},
v:function(a,b){var z,y
if($.t.$2(b,0))return new V.Y(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.Y(z/b,y/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}},
F:{"^":"b;a,b,c",
hQ:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,25],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cF:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.F(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
ax:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.F(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.F(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.t.$2(b,0))return new V.F(0,0,0)
return new V.F(this.a/b,this.b/b,this.c/b)},
eh:function(){if(!$.t.$2(0,this.a))return!1
if(!$.t.$2(0,this.b))return!1
if(!$.t.$2(0,this.c))return!1
return!0},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hn:{"^":"dX;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bU:function(a){var z=V.nn(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z},
S:function(a){var z=this.y
if(!(z==null))z.E(a)},
scT:function(a,b){},
scG:function(a){var z,y
z=this.b
if(!$.t.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bU(z)}z=new D.J("maximumLocation",y,this.b,this,[P.r])
z.b=!0
this.S(z)}},
scI:function(a){var z,y
z=this.c
if(!$.t.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bU(z)}z=new D.J("minimumLocation",y,this.c,this,[P.r])
z.b=!0
this.S(z)}},
sa0:function(a,b){var z,y
b=this.bU(b)
z=this.d
if(!$.t.$2(z,b)){y=this.d
this.d=b
z=new D.J("location",y,b,this,[P.r])
z.b=!0
this.S(z)}},
scH:function(a){var z,y,x
z=this.e
if(!$.t.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.J("maximumVelocity",y,a,this,[P.r])
z.b=!0
this.S(z)}},
sU:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.t.$2(z,a)){x=this.f
this.f=a
z=new D.J("velocity",x,a,this,[P.r])
z.b=!0
this.S(z)}},
scs:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.t.$2(z,a)){y=this.x
this.x=a
z=new D.J("dampening",y,a,this,[P.r])
z.b=!0
this.S(z)}},
an:function(a,b){var z,y,x,w
z=this.f
if($.t.$2(z,0)){z=this.r
z=!$.t.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa0(0,this.d+y*b)
z=this.x
if(!$.t.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sU(y)}},
q:{
cT:function(){var z=new U.hn()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dZ:{"^":"ae;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
aZ:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dZ))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")},
q:{
e_:function(a){var z=new U.dZ()
z.a=a
return z}}},eb:{"^":"ak;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
S:[function(a){var z
H.d(a,"$isp")
z=this.e
if(!(z==null))z.E(a)},function(){return this.S(null)},"ak","$1","$0","gaK",0,2,1],
ix:[function(a,b){var z,y,x,w,v,u,t
z=U.ae
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gfb",8,0,23],
iR:[function(a,b){var z,y,x,w,v,u,t
z=U.ae
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.L(t.a,x)}}z=new D.c3(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gfA",8,0,23],
aZ:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.au(z,z.length,0,[H.y(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.aZ(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.b9():x
z=this.e
if(!(z==null))z.aq(0)}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eb))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.T(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.ae]},
$asak:function(){return[U.ae]},
$isae:1},ae:{"^":"dX;"},jY:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.cy
if(z==null){z=D.H()
this.cy=z}return z},
S:[function(a){var z
H.d(a,"$isp")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.S(null)},"ak","$1","$0","gaK",0,2,1],
b2:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdL()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.f(this.gc0(),y)
C.a.h(z.a,x)
x=this.a.c.gei()
x.toString
z=H.f(this.gc1(),y)
C.a.h(x.a,z)
z=this.a.c.gbP()
z.toString
y=H.f(this.gc2(),y)
C.a.h(z.a,y)
return!0},
f7:[function(a){H.d(a,"$isp")
if(!J.T(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc0",4,0,2],
f8:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isp"),"$isbH")
if(!this.y)return
if(this.x){z=a.d.M(0,a.y)
z=new V.Y(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.M(0,a.y)
z=new V.Y(y.a,y.b).j(0,2).v(0,z.gaa())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sU(z*10*x)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=new V.Y(x.a,x.b).j(0,2).v(0,z.gaa())
x=this.b
v=w.a
if(typeof v!=="number")return v.P()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa0(0,-v*u+t)
this.b.sU(0)
y=y.M(0,a.z)
this.Q=new V.Y(y.a,y.b).j(0,2).v(0,z.gaa())}this.ak()},"$1","gc1",4,0,2],
f9:[function(a){var z,y,x
H.d(a,"$isp")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sU(y*10*x)
this.ak()}},"$1","gc2",4,0,2],
aZ:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.ch=y
x=b.y
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aC(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isae:1},jZ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.H()
this.fx=z}return z},
S:[function(a){var z
H.d(a,"$isp")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.S(null)},"ak","$1","$0","gaK",0,2,1],
b2:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdL()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.f(this.gc0(),y)
C.a.h(z.a,x)
x=this.a.c.gei()
x.toString
z=H.f(this.gc1(),y)
C.a.h(x.a,z)
z=this.a.c.gbP()
z.toString
x=H.f(this.gc2(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.H()
x.f=z}x=H.f(this.gf4(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.f(this.gf5(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.H()
x.b=z}x=H.f(this.gh2(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.f(this.gh1(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.H()
x.c=z}y=H.f(this.gh0(),y)
C.a.h(z.a,y)
return!0},
ao:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.Y(z,y)},
f7:[function(a){a=H.j(H.d(a,"$isp"),"$isbH")
if(!J.T(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc0",4,0,2],
f8:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isp"),"$isbH")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.Y(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.ao(new V.Y(y.a,y.b).j(0,2).v(0,z.gaa()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.ao(new V.Y(x.a,x.b).j(0,2).v(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa0(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.M(0,a.z)
this.dx=this.ao(new V.Y(y.a,y.b).j(0,2).v(0,z.gaa()))}this.ak()},"$1","gc1",4,0,2],
f9:[function(a){var z,y,x
H.d(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sU(-y*10*z)
this.ak()}},"$1","gc2",4,0,2],
iu:[function(a){if(H.j(H.d(a,"$isp"),"$isem").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf4",4,0,2],
iv:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isp"),"$isbH")
if(!J.T(this.d,a.x.b))return
z=a.c
y=a.d
x=y.M(0,a.y)
w=this.ao(new V.Y(x.a,x.b).j(0,2).v(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa0(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.M(0,a.z)
this.dx=this.ao(new V.Y(y.a,y.b).j(0,2).v(0,z.gaa()))
this.ak()},"$1","gf5",4,0,2],
j0:[function(a){H.d(a,"$isp")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gh2",4,0,2],
j_:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isp"),"$iseJ")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.Y(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.ao(new V.Y(y.a,y.b).j(0,2).v(0,z.gaa()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.ao(new V.Y(x.a,x.b).j(0,2).v(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa0(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.M(0,a.z)
this.dx=this.ao(new V.Y(y.a,y.b).j(0,2).v(0,z.gaa()))}this.ak()},"$1","gh1",4,0,2],
iZ:[function(a){var z,y,x
H.d(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sU(-y*10*z)
this.ak()}},"$1","gh0",4,0,2],
aZ:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.dy=y
x=b.y
this.c.an(0,x)
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aC(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.j(0,V.aC(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isae:1},k_:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gw:function(){var z=this.r
if(z==null){z=D.H()
this.r=z}return z},
S:function(a){var z=this.r
if(!(z==null))z.E(a)},
b2:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.H()
z.e=y
z=y}else z=y
y=H.f(this.gfa(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.H()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iw:[function(a){var z,y,x,w
H.d(a,"$isp")
if(!J.T(this.b,this.a.b.c))return
H.j(a,"$isd5")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.J("zoom",z,w,this,[P.r])
z.b=!0
this.S(z)}},"$1","gfa",4,0,2],
aZ:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aC(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isae:1}}],["","",,M,{"^":"",ho:{"^":"ak;0e,0f,0a,0b,0c,0d",
gw:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
a3:[function(a){var z
H.d(a,"$isp")
z=this.f
if(!(z==null))z.E(a)},function(){return this.a3(null)},"d4","$1","$0","gW",0,2,1],
iT:[function(a,b){var z,y,x,w,v,u,t
z=M.aH
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfC",8,0,21],
iU:[function(a,b){var z,y,x,w,v,u,t
z=M.aH
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.L(t.a,x)}}z=new D.c3(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfD",8,0,21],
ab:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.H();){y=z.d
if(!(y==null))y.ab(a)}this.e=!1},
$asi:function(){return[M.aH]},
$asak:function(){return[M.aH]},
$isaH:1},ht:{"^":"b;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
a3:[function(a){var z
H.d(a,"$isp")
z=this.f
if(!(z==null))z.E(a)},function(){return this.a3(null)},"d4","$1","$0","gW",0,2,1],
sb3:function(a){var z,y,x
if(a==null)a=new X.hR()
z=this.a
if(z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.L(z.a,y)}x=this.a
this.a=a
z=a.gw()
z.toString
y=H.f(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.J("camera",x,this.a,this,[X.ch])
z.b=!0
this.a3(z)}},
sbd:function(a,b){var z,y,x
if(b==null)b=X.cV(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.L(z.a,y)}x=this.b
this.b=b
z=b.gw()
z.toString
y=H.f(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.J("target",x,this.b,this,[X.de])
z.b=!0
this.a3(z)}},
sbe:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.J("technique",x,this.c,this,[O.c7])
z.b=!0
this.a3(z)}},
ab:function(a){a.cL(this.c)
this.b.Z(a)
this.a.Z(a)
this.d.an(0,a)
this.d.ab(a)
this.a.aG(a)
this.b.toString
a.cK()},
$isaH:1},hH:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a3:[function(a){var z
H.d(a,"$isp")
z=this.x
if(!(z==null))z.E(a)},function(){return this.a3(null)},"d4","$1","$0","gW",0,2,1],
iC:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aO
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.b5()
s.a=H.h([],v)
s.c=0
t.sa7(s)}s=t.ga7()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfh",8,0,10],
iD:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aO
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.b5()
s.a=H.h([],v)
s.c=0
t.sa7(s)}s=t.ga7()
s.toString
H.f(x,w)
C.a.L(s.a,x)}}z=new D.c3(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfi",8,0,10],
sb3:function(a){var z,y,x
if(a==null)a=X.et(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.L(z.a,y)}x=this.a
this.a=a
z=a.gw()
z.toString
y=H.f(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.J("camera",x,this.a,this,[X.ch])
z.b=!0
this.a3(z)}},
sbd:function(a,b){var z,y,x
if(b==null)b=X.cV(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.L(z.a,y)}x=this.b
this.b=b
z=b.gw()
z.toString
y=H.f(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.J("target",x,this.b,this,[X.de])
z.b=!0
this.a3(z)}},
sbe:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.J("technique",x,this.c,this,[O.c7])
z.b=!0
this.a3(z)}},
gw:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
ab:function(a){var z
a.cL(this.c)
this.b.Z(a)
this.a.Z(a)
z=this.c
if(z!=null)z.an(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.H();)z.d.an(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.H();)z.d.ab(a)
this.a.toString
a.cy.aF()
a.db.aF()
this.b.toString
a.cK()},
$isaH:1},aH:{"^":"b;"}}],["","",,A,{"^":"",dP:{"^":"b;a,b,c"},ha:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hF:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dK:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},en:{"^":"dc;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aU,0aA,0aV,0bx,0dM,0dN,0by,0bz,0dO,0dP,0bA,0bB,0dQ,0dR,0bC,0dS,0dT,0bD,0dU,0dV,0bE,0bF,0bG,0dW,0dX,0bH,0bI,0dY,0dZ,0bJ,0e_,0cu,0e0,0cv,0e1,0cw,0e2,0cz,0e3,0cA,0e4,0cB,a,b,0c,0d,0e,0f,0r",
eG:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.an("")
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
a1.h5(z)
a1.hc(z)
a1.h6(z)
a1.hk(z)
a1.hl(z)
a1.he(z)
a1.hp(z)
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
z=new P.an("")
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
v.h9(z)
v.h4(z)
v.h7(z)
v.ha(z)
v.hi(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hg(z)
v.hh(z)}v.hd(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.f){r+="uniform samplerCube alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.h([],[P.k])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.a_(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h8(z)
v.hf(z)
v.hj(z)
v.hm(z)
v.hn(z)
v.ho(z)
v.hb(z)}r=z.a+="// === Main ===\n"
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
o=H.h([],[P.k])
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
n="vec4("+C.a.a_(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.ee(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a1.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaJ")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaJ")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaJ")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaJ")
if(a1.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdj")
if(a1.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaJ")
if(a1.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaJ")
this.k3=H.h([],[A.aJ])
y=a1.aU
if(y>0){this.k2=H.d(this.r.n(0,"bendMatCount"),"$isP")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.u(P.x("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(l,"$isaJ"))}}y=a1.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isP")
break
case C.f:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isai")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isP")
break}}y=a1.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isP")
break
case C.f:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isai")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isP")
break}}y=a1.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.aU=H.j(this.r.n(0,"diffuseTxt"),"$isao")
this.aV=H.j(this.r.n(0,"nullDiffuseTxt"),"$isP")
break
case C.f:this.aA=H.j(this.r.n(0,"diffuseTxt"),"$isai")
this.aV=H.j(this.r.n(0,"nullDiffuseTxt"),"$isP")
break}}y=a1.d
if(y!==C.c){this.bx=H.j(this.r.n(0,"invDiffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.dM=H.j(this.r.n(0,"invDiffuseTxt"),"$isao")
this.by=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break
case C.f:this.dN=H.j(this.r.n(0,"invDiffuseTxt"),"$isai")
this.by=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a1.e
if(y!==C.c){this.bB=H.j(this.r.n(0,"shininess"),"$isa_")
this.bz=H.j(this.r.n(0,"specularClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.dO=H.j(this.r.n(0,"specularTxt"),"$isao")
this.bA=H.j(this.r.n(0,"nullSpecularTxt"),"$isP")
break
case C.f:this.dP=H.j(this.r.n(0,"specularTxt"),"$isai")
this.bA=H.j(this.r.n(0,"nullSpecularTxt"),"$isP")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.e:this.dQ=H.j(this.r.n(0,"bumpTxt"),"$isao")
this.bC=H.j(this.r.n(0,"nullBumpTxt"),"$isP")
break
case C.f:this.dR=H.j(this.r.n(0,"bumpTxt"),"$isai")
this.bC=H.j(this.r.n(0,"nullBumpTxt"),"$isP")
break}if(a1.dy){this.dS=H.j(this.r.n(0,"envSampler"),"$isai")
this.dT=H.j(this.r.n(0,"nullEnvTxt"),"$isP")
y=a1.r
if(y!==C.c){this.bD=H.j(this.r.n(0,"reflectClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.dU=H.j(this.r.n(0,"reflectTxt"),"$isao")
this.bE=H.j(this.r.n(0,"nullReflectTxt"),"$isP")
break
case C.f:this.dV=H.j(this.r.n(0,"reflectTxt"),"$isai")
this.bE=H.j(this.r.n(0,"nullReflectTxt"),"$isP")
break}}y=a1.x
if(y!==C.c){this.bF=H.j(this.r.n(0,"refraction"),"$isa_")
this.bG=H.j(this.r.n(0,"refractClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.dW=H.j(this.r.n(0,"refractTxt"),"$isao")
this.bH=H.j(this.r.n(0,"nullRefractTxt"),"$isP")
break
case C.f:this.dX=H.j(this.r.n(0,"refractTxt"),"$isai")
this.bH=H.j(this.r.n(0,"nullRefractTxt"),"$isP")
break}}}y=a1.y
if(y!==C.c){this.bI=H.j(this.r.n(0,"alpha"),"$isa_")
switch(y){case C.c:break
case C.i:break
case C.e:this.dY=H.j(this.r.n(0,"alphaTxt"),"$isao")
this.bJ=H.j(this.r.n(0,"nullAlphaTxt"),"$isP")
break
case C.f:this.dZ=H.j(this.r.n(0,"alphaTxt"),"$isai")
this.bJ=H.j(this.r.n(0,"nullAlphaTxt"),"$isP")
break}}this.cu=H.h([],[A.eV])
this.cv=H.h([],[A.eW])
this.cw=H.h([],[A.eX])
this.cz=H.h([],[A.eY])
this.cA=H.h([],[A.eZ])
this.cB=H.h([],[A.f_])
if(a1.k2){y=a1.z
if(y>0){this.e_=H.d(this.r.n(0,"dirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isL")
x=this.r
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.cu;(x&&C.a).h(x,new A.eV(m,l,k))}}y=a1.Q
if(y>0){this.e0=H.d(this.r.n(0,"pntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isL")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isa_")
x=this.r
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa_")
x=this.r
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa_")
x=this.cv;(x&&C.a).h(x,new A.eW(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.e1=H.d(this.r.n(0,"spotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isL")
x=this.r
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa_")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa_")
x=this.r
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa_")
x=this.r
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa_")
x=this.r
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa_")
x=this.cw;(x&&C.a).h(x,new A.eX(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.e2=H.d(this.r.n(0,"txtDirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isL")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isP")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isao")
x=this.cz;(x&&C.a).h(x,new A.eY(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.e3=H.d(this.r.n(0,"txtPntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isL")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isdj")
x=this.r
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isP")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa_")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa_")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa_")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isai")
x=this.cA;(x&&C.a).h(x,new A.eZ(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.e4=H.d(this.r.n(0,"txtSpotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isL")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isP")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isL")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa_")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isa_")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isao")
x=this.cB;(x&&C.a).h(x,new A.f_(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
al:function(a,b,c){b.a.uniform1i(b.d,1)},
af:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cY(c)
b.a.uniform1i(b.d,0)}},
q:{
io:function(a,b){var z,y
z=a.aA
y=new A.en(b,z)
y.d1(b,z)
y.eG(a,b)
return y}}},ir:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aU,aA,aV",
h5:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aU+"];\n"
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
hc:function(a){var z
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
h6:function(a){var z
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
hk:function(a){var z,y
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
hl:function(a){var z,y
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
he:function(a){var z
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
hp:function(a){var z
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
au:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aH(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h9:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.au(a,z,"emission")
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
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
h4:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.au(a,z,"ambient")
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
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
h7:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.au(a,z,"diffuse")
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
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
ha:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.au(a,z,"invDiffuse")
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
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hi:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.au(a,z,"specular")
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
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hd:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.i:break
case C.e:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.f:z+="uniform samplerCube bumpTxt;\n"
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
case C.f:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hg:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.au(a,z,"reflect")
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
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hh:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.au(a,z,"refract")
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
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
h8:function(a){var z,y
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
hf:function(a){var z,y
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
hj:function(a){var z,y
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
hm:function(a){var z,y,x
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
hn:function(a){var z,y,x
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
ho:function(a){var z,y,x
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
hb:function(a){var z
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
i:function(a){return this.aA}},eV:{"^":"b;a,b,c"},eY:{"^":"b;a,b,c,d,e,f,r,x"},eW:{"^":"b;a,b,c,d,e,f,r"},eZ:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eX:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f_:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dc:{"^":"cL;",
d1:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
ee:function(a,b,c){var z,y,x
this.c=this.df(b,35633)
this.d=this.df(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fK(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.u(P.x("Failed to link shader: "+H.l(x)))}this.fX()
this.fY()},
Z:function(a){a.a.useProgram(this.e)
this.f.hF()},
df:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fK(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.x("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fX:function(){var z,y,x,w,v,u
z=H.h([],[A.dP])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dP(y,v.name,u))}this.f=new A.ha(z)},
fY:function(){var z,y,x,w,v,u
z=H.h([],[A.ab])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hB(v.type,v.size,v.name,u))}this.r=new A.jJ(z)},
aM:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.di(z,y,b,a,c)},
eY:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.di(z,y,b,a,c)},
eZ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ai(z,y,b,c)
else return A.di(z,y,b,a,c)},
bt:function(a,b){return new P.fc(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hB:function(a,b,c,d){switch(a){case 5120:return this.aM(b,c,d)
case 5121:return this.aM(b,c,d)
case 5122:return this.aM(b,c,d)
case 5123:return this.aM(b,c,d)
case 5124:return this.aM(b,c,d)
case 5125:return this.aM(b,c,d)
case 5126:return new A.a_(this.a,this.e,c,d)
case 35664:return new A.jE(this.a,this.e,c,d)
case 35665:return new A.L(this.a,this.e,c,d)
case 35666:return new A.jH(this.a,this.e,c,d)
case 35667:return new A.jF(this.a,this.e,c,d)
case 35668:return new A.jG(this.a,this.e,c,d)
case 35669:return new A.jI(this.a,this.e,c,d)
case 35674:return new A.jL(this.a,this.e,c,d)
case 35675:return new A.dj(this.a,this.e,c,d)
case 35676:return new A.aJ(this.a,this.e,c,d)
case 35678:return this.eY(b,c,d)
case 35680:return this.eZ(b,c,d)
case 35670:throw H.a(this.bt("BOOL",c))
case 35671:throw H.a(this.bt("BOOL_VEC2",c))
case 35672:throw H.a(this.bt("BOOL_VEC3",c))
case 35673:throw H.a(this.bt("BOOL_VEC4",c))
default:throw H.a(P.x("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ci:{"^":"b;a,b",
i:function(a){return this.b}},eB:{"^":"dc;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},ab:{"^":"b;"},jJ:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.N()},
hJ:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.E)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.hJ("\n")}},P:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jF:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jG:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jI:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jD:{"^":"ab;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
q:{
di:function(a,b,c,d,e){var z=new A.jD(a,b,c,e)
z.f=d
z.e=P.ic(d,0,!1,P.n)
return z}}},a_:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jE:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},L:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jH:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jL:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dj:{"^":"ab;a,b,c,d",
aj:function(a){var z=new Float32Array(H.bp(H.w(a,"$isc",[P.r],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aJ:{"^":"ab;a,b,c,d",
aj:function(a){var z=new Float32Array(H.bp(H.w(a,"$isc",[P.r],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ao:{"^":"ab;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ai:{"^":"ab;a,b,c,d",
cY:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dA:function(a,b,c,d){var z
H.f(c,{func:1,ret:-1,args:[F.ac,P.r,P.r]})
z=F.cv()
F.bU(z,b,c,d,a,1,0,0,1)
F.bU(z,b,c,d,a,0,1,0,3)
F.bU(z,b,c,d,a,0,0,1,2)
F.bU(z,b,c,d,a,-1,0,0,0)
F.bU(z,b,c,d,a,0,-1,0,0)
F.bU(z,b,c,d,a,0,0,-1,3)
z.am()
return z},
cA:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bU:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.f(c,{func:1,ret:-1,args:[F.ac,P.r,P.r]})
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
z.d=y}l=F.cA(y)
k=F.cA(z.b)
j=F.dJ(d,e,new F.m4(z,F.cA(z.c),F.cA(z.d),k,l,c),b)
if(j!=null)a.b8(j)},
fO:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.f(d,{func:1,ret:P.r,args:[P.r]})
if(e<3)return
z=F.cv()
y=b?-1:1
x=-6.283185307179586/e
w=H.h([],[F.ac])
v=z.a
u=new V.F(0,0,y)
u=u.v(0,Math.sqrt(u.D(u)))
C.a.h(w,v.hr(new V.aG(a,-1,-1,-1),new V.av(1,1,1,1),new V.V(0,0,c),new V.F(0,0,y),new V.R(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.F(r,q,y).v(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.ca(new V.aG(a,-1,-1,-1),null,new V.av(n,l,m,1),new V.V(r*p,q*p,c),new V.F(0,0,y),new V.R(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.dA(w)
return z},
fL:function(a,b,c,d,e,f){return F.fM(!0,c,d,new F.mq(a,f),e)},
fM:function(a,b,c,d,e){var z
H.f(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
z=F.dJ(c,e,new F.ms(d),null)
if(z==null)return
z.am()
z.cf()
if(b)z.b8(F.fO(3,!1,1,new F.mt(d),e))
z.b8(F.fO(1,!0,-1,new F.mu(d),e))
return z},
h_:function(a,b,c){var z,y
z={}
z.a=b
if(H.f(b,{func:1,ret:P.r,args:[P.r,P.r]})==null)z.a=new F.nh()
y=F.dA(a,null,new F.ni(z),c)
y.cf()
return y},
h1:function(a,b,c,d){return F.fN(c,a,d,b,new F.nl())},
mJ:function(a,b,c,d,e,f){return F.fN(d,a,e,b,new F.mK(f,c))},
fN:function(a,b,c,d,e){var z=F.dJ(a,b,new F.mr(H.f(e,{func:1,ret:V.V,args:[P.r]}),d,b,c),null)
if(z==null)return
z.am()
z.cf()
return z},
dJ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.ac,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.cv()
y=H.h([],[F.ac])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ca(null,null,new V.av(u,0,0,1),null,null,new V.R(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cr(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.ca(null,null,new V.av(o,n,m,1),null,null,new V.R(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cr(d))}}z.d.hq(a+1,b+1,y)
return z},
m4:{"^":"m:4;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cF(z.b,b).cF(z.d.cF(z.c,b),c)
a.sa0(0,new V.V(y.a,y.b,y.c))
a.sep(y.v(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.sdD(new V.aG(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mq:{"^":"m:7;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
ms:{"^":"m:4;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sa0(0,new V.V(y,u,w))
u=new V.F(y,u,w)
a.sep(u.v(0,Math.sqrt(u.D(u))))
a.sdD(new V.aG(1-c,2+c,-1,-1))}},
mt:{"^":"m:19;a",
$1:function(a){return this.a.$2(a,1)}},
mu:{"^":"m:19;a",
$1:function(a){return this.a.$2(1-a,0)}},
nh:{"^":"m:7;",
$2:function(a,b){return 0}},
ni:{"^":"m:4;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.F(y.a,y.b,y.c)
z=x.v(0,Math.sqrt(x.D(x))).j(0,1+z)
a.sa0(0,new V.V(z.a,z.b,z.c))}},
nl:{"^":"m:18;",
$1:function(a){return new V.V(Math.cos(a),Math.sin(a),0)}},
mK:{"^":"m:18;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.V(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mr:{"^":"m:4;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dK(y.$1(z),x)
x=J.dK(y.$1(z+3.141592653589793/this.c),x).M(0,w)
x=new V.F(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.D(x)))
u=new V.F(1,0,0)
y=v.ax(!v.A(0,u)?new V.F(0,0,1):u)
t=y.v(0,Math.sqrt(y.D(y)))
y=t.ax(v)
u=y.v(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
a.sa0(0,w.F(0,new V.V(y.a-x.a,y.b-x.b,y.c-x.c)))}},
am:{"^":"b;0a,0b,0c,0d,0e",
az:function(){if(!this.gb6()){C.a.L(this.a.a.d.b,this)
this.a.a.a5()}this.c8()
this.c9()
this.fJ()},
fU:function(a){this.a=a
C.a.h(a.d.b,this)},
fV:function(a){this.b=a
C.a.h(a.d.c,this)},
fW:function(a){this.c=a
C.a.h(a.d.d,this)},
c8:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
c9:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
fJ:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gb6:function(){return this.a==null||this.b==null||this.c==null},
eS:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.F(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.eh())return
return v.v(0,Math.sqrt(v.D(v)))},
eU:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.M(0,y)
z=new V.F(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.D(z)))
z=w.M(0,y)
z=new V.F(z.a,z.b,z.c)
z=v.ax(z.v(0,Math.sqrt(z.D(z))))
return z.v(0,Math.sqrt(z.D(z)))},
cn:function(){if(this.d!=null)return!0
var z=this.eS()
if(z==null){z=this.eU()
if(z==null)return!1}this.d=z
this.a.a.a5()
return!0},
eR:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.F(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.eh())return
return v.v(0,Math.sqrt(v.D(v)))},
eT:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.t.$2(n,0)){z=r.M(0,u)
z=new V.F(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.M(0,u).j(0,l).F(0,u).M(0,x)
z=new V.F(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.D(z)))
z=k.ax(m)
z=z.v(0,Math.sqrt(z.D(z))).ax(k)
m=z.v(0,Math.sqrt(z.D(z)))}return m},
cl:function(){if(this.e!=null)return!0
var z=this.eR()
if(z==null){z=this.eT()
if(z==null)return!1}this.e=z
this.a.a.a5()
return!0},
ghx:function(a){if(J.T(this.a,this.b))return!0
if(J.T(this.b,this.c))return!0
if(J.T(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var z,y
if(this.gb6())return a+"disposed"
z=a+C.b.ah(J.a9(this.a.e),0)+", "+C.b.ah(J.a9(this.b.e),0)+", "+C.b.ah(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.G("")},
q:{
bB:function(a,b,c){var z,y,x
z=new F.am()
y=a.a
if(y==null)H.u(P.x("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.u(P.x("May not create a face with vertices attached to different shapes."))
z.fU(a)
z.fV(b)
z.fW(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a5()
return z}}},
hK:{"^":"b;"},
jb:{"^":"hK;",
b7:function(a,b,c){var z,y
z=b.a
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
d1:{"^":"b;0a,0b",
az:function(){if(!this.gb6()){C.a.L(this.a.a.c.b,this)
this.a.a.a5()}this.c8()
this.c9()},
c8:function(){var z=this.a
if(z!=null){C.a.L(z.c.b,this)
this.a=null}},
c9:function(){var z=this.b
if(z!=null){C.a.L(z.c.c,this)
this.b=null}},
gb6:function(){return this.a==null||this.b==null},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){if(this.gb6())return a+"disposed"
return a+C.b.ah(J.a9(this.a.e),0)+", "+C.b.ah(J.a9(this.b.e),0)},
N:function(){return this.G("")}},
i2:{"^":"b;"},
jC:{"^":"i2;",
b7:function(a,b,c){var z,y
z=b.a
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
return z==null?y==null:z===y}else return!1}}},
d9:{"^":"b;0a",
az:function(){var z=this.a
if(z!=null){C.a.L(z.a.b.b,this)
this.a.a.a5()}this.fI()},
fI:function(){var z=this.a
if(z!=null){C.a.L(z.b.b,this)
this.a=null}},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ah(J.a9(z.e),0)},
N:function(){return this.G("")}},
eA:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
b8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.C()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){v=z[w]
this.a.h(0,v.hz())}this.a.C()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d9()
if(r.a==null)H.u(P.x("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d1()
s=p.a
if(s==null)H.u(P.x("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.u(P.x("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.E(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bB(p,o,l)}z=this.e
if(!(z==null))z.aq(0)},
am:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.am()||!1
if(!this.a.am())y=!1
z=this.e
if(!(z==null))z.aq(0)
return y},
f2:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ac],"$asc")
H.w(e,"$isc",[P.n],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.b7(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hU:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ac],x=[P.n];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.h([],z)
t=H.h([],x)
if(this.f2(a,v,y,u,t))b.b8(u)}this.a.C()
this.c.cN()
this.d.cN()
this.b.i9()
this.c.cO(new F.jC())
this.d.cO(new F.jb())
z=this.e
if(!(z==null))z.aq(0)},
hs:function(a){this.hU(new F.kd(),new F.iB())},
cf:function(){return this.hs(null)},
dG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ay()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$bN().a)!==0)++w
if((x&$.$get$bO().a)!==0)++w
if((x&$.$get$bn().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
v=b.gcZ(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.h(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.h(y,[Z.dU])
for(r=0,q=0;q<w;++q){p=b.ht(q)
o=p.gcZ(p)
C.a.m(s,q,new Z.dU(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].hR(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bp(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cP(new Z.f8(34962,j),s,b)
i.b=H.h([],[Z.cn])
if(this.b.b.length!==0){x=P.n
h=H.h([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cn(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.h([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cn(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.h([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.C()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cn(4,h.length,f))}return i},
i:function(a){var z=H.h([],[P.k])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.G("   "))}return C.a.a_(z,"\n")},
aX:function(a){var z=this.e
if(!(z==null))z.E(a)},
a5:function(){return this.aX(null)},
q:{
cv:function(){var z,y
z=new F.eA()
y=new F.k8(z)
y.b=!1
y.c=H.h([],[F.ac])
z.a=y
y=new F.ja(z)
y.b=H.h([],[F.d9])
z.b=y
y=new F.j9(z)
y.b=H.h([],[F.d1])
z.c=y
y=new F.j8(z)
y.b=H.h([],[F.am])
z.d=y
z.e=null
return z}}},
j8:{"^":"b;a,0b",
dA:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ac],"$asc")
z=H.h([],[F.am])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.e(a,v)
v=a[v]
if(w>=u)return H.e(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.bB(x,v,u))}}return z},
hq:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ac],"$asc")
z=H.h([],[F.am])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.e(c,x)
r=c[x];++x
if(x>=s)return H.e(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.e(c,p)
o=c[p]
if(y<0||y>=s)return H.e(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bB(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bB(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bB(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bB(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cO:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b7(0,v,t)){v.az()
break}}}}},
cN:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.ghx(x)
if(y)x.az()}},
am:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].cn())x=!1
return x},
cm:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].cl())x=!1
return x},
i:function(a){return this.N()},
G:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
return C.a.a_(z,"\n")},
N:function(){return this.G("")}},
j9:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cO:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b7(0,v,t)){v.az()
break}}}}},
cN:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.T(x.a,x.b)
if(y)x.az()}},
i:function(a){return this.N()},
G:function(a){var z,y,x,w
z=H.h([],[P.k])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].G(a+(""+x+". ")))}return C.a.a_(z,"\n")},
N:function(){return this.G("")}},
ja:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i9:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.az()}},
i:function(a){return this.N()},
G:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
return C.a.a_(z,"\n")},
N:function(){return this.G("")}},
ac:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cr:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ca(this.cx,x,u,z,y,w,v,a,t)},
hz:function(){return this.cr(null)},
sa0:function(a,b){var z
if(!J.T(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a5()}},
sep:function(a){var z
if(!J.T(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a5()}},
sdD:function(a){var z
if(!J.T(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a5()}},
hR:function(a){var z,y
z=J.M(a)
if(z.A(a,$.$get$ay())){z=this.f
y=[P.r]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aS())){z=this.r
y=[P.r]
if(z==null)return H.h([0,1,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aR())){z=this.x
y=[P.r]
if(z==null)return H.h([0,0,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aT())){z=this.y
y=[P.r]
if(z==null)return H.h([0,0],y)
else return H.h([z.a,z.b],y)}else if(z.A(a,$.$get$aU())){z=this.z
y=[P.r]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bN())){z=this.Q
y=[P.r]
if(z==null)return H.h([1,1,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bO())){z=this.Q
y=[P.r]
if(z==null)return H.h([1,1,1,1],y)
else return H.h([z.a,z.b,z.c,z.d],y)}else if(z.A(a,$.$get$bn()))return H.h([this.ch],[P.r])
else if(z.A(a,$.$get$aQ())){z=this.cx
y=[P.r]
if(z==null)return H.h([-1,-1,-1,-1],y)
else return H.h([z.a,z.b,z.c,z.d],y)}else return H.h([],[P.r])},
cn:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.K(0,new F.ki(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.aq(0)}return!0},
cl:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.K(0,new F.kh(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.aq(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var z,y,x
z=H.h([],[P.k])
C.a.h(z,C.b.ah(J.a9(this.e),0))
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
C.a.h(z,V.S(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.a_(z,", ")
return a+"{"+x+"}"},
N:function(){return this.G("")},
q:{
ca:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ac()
y=new F.kg(z)
y.b=H.h([],[F.d9])
z.b=y
y=new F.kc(z)
x=[F.d1]
y.b=H.h([],x)
y.c=H.h([],x)
z.c=y
y=new F.k9(z)
x=[F.am]
y.b=H.h([],x)
y.c=H.h([],x)
y.d=H.h([],x)
z.d=y
h=$.$get$f5()
z.e=0
y=$.$get$ay()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aS().a)!==0?e:null
z.x=(x&$.$get$aR().a)!==0?b:null
z.y=(x&$.$get$aT().a)!==0?f:null
z.z=(x&$.$get$aU().a)!==0?g:null
z.Q=(x&$.$get$f6().a)!==0?c:null
z.ch=(x&$.$get$bn().a)!==0?i:0
z.cx=(x&$.$get$aQ().a)!==0?a:null
return z}}},
ki:{"^":"m:8;a",
$1:function(a){var z,y
H.d(a,"$isam")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
kh:{"^":"m:8;a",
$1:function(a){var z,y
H.d(a,"$isam")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
k8:{"^":"b;a,0b,0c",
C:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.x("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a5()
return!0},
dB:function(a,b,c,d,e,f,g,h,i){var z=F.ca(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bu:function(a,b,c,d,e,f){return this.dB(a,null,b,c,null,d,e,f,0)},
hr:function(a,b,c,d,e,f){return this.dB(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
am:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].cn()
return!0},
cm:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].cl()
return!0},
hv:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.T(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.N()},
G:function(a){var z,y,x,w
this.C()
z=H.h([],[P.k])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
return C.a.a_(z,"\n")},
N:function(){return this.G("")}},
k9:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.e(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.e(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.e(z,b)
return z[b]},
K:function(a,b){H.f(b,{func:1,ret:-1,args:[F.am]})
C.a.K(this.b,b)
C.a.K(this.c,new F.ka(this,b))
C.a.K(this.d,new F.kb(this,b))},
i:function(a){return this.N()},
G:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
return C.a.a_(z,"\n")},
N:function(){return this.G("")}},
ka:{"^":"m:8;a,b",
$1:function(a){H.d(a,"$isam")
if(!J.T(a.a,this.a))this.b.$1(a)}},
kb:{"^":"m:8;a,b",
$1:function(a){var z
H.d(a,"$isam")
z=this.a
if(!J.T(a.a,z)&&!J.T(a.b,z))this.b.$1(a)}},
kc:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.N()},
G:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
return C.a.a_(z,"\n")},
N:function(){return this.G("")}},
ke:{"^":"b;"},
kd:{"^":"ke;",
b7:function(a,b,c){return J.T(b.f,c.f)}},
kf:{"^":"b;"},
iB:{"^":"kf;",
b8:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.ac],"$asc")
z=new V.F(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.F(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.D(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.E)(a),++x){t=a[x]
s=z.v(0,Math.sqrt(u))
if(!J.T(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.E(null)}}}return}},
kg:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.N()},
G:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].G(a))
return C.a.a_(z,"\n")},
N:function(){return this.G("")}}}],["","",,O,{"^":"",im:{"^":"c7;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.H()
this.dy=z}return z},
X:[function(a){var z
H.d(a,"$isp")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.X(null)},"fg","$1","$0","gc5",0,2,1],
fN:[function(a){H.d(a,"$isp")
this.a=null
this.X(a)},function(){return this.fN(null)},"iY","$1","$0","gfM",0,2,1],
iz:[function(a,b){var z=V.aB
z=new D.c2(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.X(z)},"$2","gfd",8,0,17],
iA:[function(a,b){var z=V.aB
z=new D.c3(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.X(z)},"$2","gfe",8,0,17],
dd:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a9(z.e.length+3,4)*4
x=C.d.a9(z.f.length+3,4)*4
w=C.d.a9(z.r.length+3,4)*4
v=C.d.a9(z.x.length+3,4)*4
u=C.d.a9(z.y.length+3,4)*4
t=C.d.a9(z.z.length+3,4)*4
s=C.d.a9(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.d.i(q.a)+C.d.i(p.a)+C.d.i(o.a)+C.d.i(n.a)+C.d.i(m.a)+C.d.i(l.a)+C.d.i(k.a)+C.d.i(j.a)+C.d.i(i.a)+"_"
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
a=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a0=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$ay()
if(c){z=$.$get$aS()
a6=new Z.bm(a6.a|z.a)}if(b){z=$.$get$aR()
a6=new Z.bm(a6.a|z.a)}if(a){z=$.$get$aT()
a6=new Z.bm(a6.a|z.a)}if(a0){z=$.$get$aU()
a6=new Z.bm(a6.a|z.a)}if(a2){z=$.$get$aQ()
a6=new Z.bm(a6.a|z.a)}return new A.ir(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
V:function(a,b){H.w(a,"$isc",[T.df],"$asc")
if(b!=null)if(!C.a.b4(a,b)){b.a=a.length
C.a.h(a,b)}},
an:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.H();){y=z.d
x=new V.F(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cR(x)}}},
em:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dd()
y=H.d(a.fr.k(0,z.aA),"$isen")
if(y==null){y=A.io(z,a.a)
a.dC(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aV
z=b.e
if(!(z instanceof Z.cP)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.am()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.cm()
u.a.cm()
u=u.e
if(!(u==null))u.aq(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.hv()
t=t.e
if(!(t==null))t.aq(0)}r=b.d.dG(new Z.f9(a.a),w)
r.aC($.$get$ay()).e=this.a.y.c
if(z)r.aC($.$get$aS()).e=this.a.Q.c
if(v)r.aC($.$get$aR()).e=this.a.z.c
if(x.rx)r.aC($.$get$aT()).e=this.a.ch.c
if(u)r.aC($.$get$aU()).e=this.a.cx.c
if(x.x1)r.aC($.$get$aQ()).e=this.a.cy.c
b.e=r}z=T.df
q=H.h([],[z])
this.a.Z(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga1(u)
v=v.db
v.toString
v.aj(u.ac(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga1(u)
t=a.dx
t=u.j(0,t.ga1(t))
a.cx=t
u=t}v=v.dx
v.toString
v.aj(u.ac(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gi7()
t=a.dx
t=u.j(0,t.ga1(t))
a.ch=t
u=t}v=v.fr
v.toString
v.aj(u.ac(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.aj(u.ac(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.aj(u.ac(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.aj(C.t.ac(u,!0))}if(x.aU>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.r],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.e(t,o)
t=t[o]
u.toString
H.d(t,"$isaB")
u=u.k3
if(o>=u.length)return H.e(u,o)
u=u[o]
n=new Float32Array(H.bp(H.w(t.ac(0,!0),"$isc",v,"$asc")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.c:break
case C.i:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.V(q,this.f.d)
v=this.a
u=this.f.d
v.al(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.V(q,this.f.e)
v=this.a
u=this.f.e
v.af(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.i:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.V(q,this.r.d)
v=this.a
u=this.r.d
v.al(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.V(q,this.r.e)
v=this.a
u=this.r.e
v.af(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.i:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.V(q,this.x.d)
v=this.a
u=this.x.d
v.al(v.aU,v.aV,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.V(q,this.x.e)
v=this.a
u=this.x.e
v.af(v.aA,v.aV,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.i:v=this.a
u=this.y.f
v=v.bx
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.V(q,this.y.d)
v=this.a
u=this.y.d
v.al(v.dM,v.by,u)
u=this.a
v=this.y.f
u=u.bx
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.V(q,this.y.e)
v=this.a
u=this.y.e
v.af(v.dN,v.by,u)
u=this.a
v=this.y.f
u=u.bx
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bz
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bB
u.a.uniform1f(u.d,s)
break
case C.e:this.V(q,this.z.d)
v=this.a
u=this.z.d
v.al(v.dO,v.bA,u)
u=this.a
v=this.z.f
u=u.bz
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bB
v.a.uniform1f(v.d,s)
break
case C.f:this.V(q,this.z.e)
v=this.a
u=this.z.e
v.af(v.dP,v.bA,u)
u=this.a
v=this.z.f
u=u.bz
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bB
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.e_
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga1(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
t=this.a.cu
if(l>=t.length)return H.e(t,l)
i=t[l]
t=m.cR(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.e0
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga1(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
t=this.a.cv
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gbb(j)
s=i.b
h=t.gt(t)
g=t.gu(t)
t=t.gcU(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bi(j.gbb(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gp(j)
g=i.d
h=t.gbO()
s=t.gbj()
t=t.gbv()
g.a.uniform3f(g.d,h,s,t)
t=j.gcg()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gci()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcj()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.e1
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga1(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
t=this.a.cw
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gbb(j)
s=i.b
h=t.gt(t)
g=t.gu(t)
t=t.gcU(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gct(j).j4()
g=i.c
h=t.gaR(t)
s=t.gaS(t)
t=t.gaT()
g.a.uniform3f(g.d,h,s,t)
t=m.bi(j.gbb(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gp(j)
s=i.e
h=t.gbO()
g=t.gbj()
t=t.gbv()
s.a.uniform3f(s.d,h,g,t)
t=j.gj2()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gj1()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcg()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gci()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcj()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.e2
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga1(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
s=this.a.cz
if(l>=s.length)return H.e(s,l)
i=s[l]
s=j.gbf()
H.w(q,"$isc",t,"$asc")
if(!C.a.b4(q,s)){s.sc_(q.length)
C.a.h(q,s)}s=j.gct(j)
h=i.d
g=s.gaR(s)
f=s.gaS(s)
s=s.gaT()
h.a.uniform3f(h.d,g,f,s)
s=j.gbP()
f=i.b
g=s.gaR(s)
h=s.gaS(s)
s=s.gaT()
f.a.uniform3f(f.d,g,h,s)
s=j.gbc(j)
h=i.c
g=s.gaR(s)
f=s.gaS(s)
s=s.gaT()
h.a.uniform3f(h.d,g,f,s)
s=m.cR(j.gct(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gp(j)
g=i.f
f=h.gbO()
s=h.gbj()
h=h.gbv()
g.a.uniform3f(g.d,f,s,h)
h=j.gbf()
s=h.gbK(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbK(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.ghM(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.e3
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga1(v)
for(v=this.dx.y,u=v.length,t=[P.r],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
h=this.a.cA
if(l>=h.length)return H.e(h,l)
i=h[l]
h=j.gbf()
H.w(q,"$isc",s,"$asc")
if(!C.a.b4(q,h)){h.sc_(q.length)
C.a.h(q,h)}e=m.j(0,j.ga1(j))
h=j.ga1(j).bi(new V.V(0,0,0))
g=i.b
f=h.gt(h)
d=h.gu(h)
h=h.gcU(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bi(new V.V(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cE(0)
d=i.d
n=new Float32Array(H.bp(H.w(new V.cq(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ac(0,!0),"$isc",t,"$asc")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gp(j)
h=i.e
f=d.gbO()
g=d.gbj()
d=d.gbv()
h.a.uniform3f(h.d,f,g,d)
d=j.gbf()
h=d.gbK(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.git()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gc_())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcg()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gci()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcj()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.e4
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga1(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
t=this.a.cB
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gbf()
H.w(q,"$isc",z,"$asc")
if(!C.a.b4(q,t)){t.sc_(q.length)
C.a.h(q,t)}t=j.gbb(j)
s=i.b
h=t.gt(t)
g=t.gu(t)
t=t.gcU(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gct(j)
g=i.c
h=t.gaR(t)
s=t.gaS(t)
t=t.gaT()
g.a.uniform3f(g.d,h,s,t)
t=j.gbP()
s=i.d
h=t.gaR(t)
g=t.gaS(t)
t=t.gaT()
s.a.uniform3f(s.d,h,g,t)
t=j.gbc(j)
g=i.e
h=t.gaR(t)
s=t.gaS(t)
t=t.gaT()
g.a.uniform3f(g.d,h,s,t)
t=m.bi(j.gbb(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbf()
s=t.gbK(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbK(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.ghM(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gp(j)
s=i.y
h=t.gbO()
g=t.gbj()
t=t.gbv()
s.a.uniform3f(s.d,h,g,t)
t=j.gj9()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gja()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcg()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gci()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcj()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.i:break
case C.e:this.V(q,this.Q.d)
z=this.a
v=this.Q.d
z.al(z.dQ,z.bC,v)
break
case C.f:this.V(q,this.Q.e)
z=this.a
v=this.Q.e
z.af(z.dR,z.bC,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga1(v).cE(0)
a.Q=v}z=z.fy
z.toString
z.aj(v.ac(0,!0))}if(x.dy){this.V(q,this.ch)
z=this.a
v=this.ch
z.af(z.dS,z.dT,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bD
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.e:this.V(q,this.cx.d)
z=this.a
v=this.cx.d
z.al(z.dU,z.bE,v)
v=this.a
z=this.cx.f
v=v.bD
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.f:this.V(q,this.cx.e)
z=this.a
v=this.cx.e
z.af(z.dV,z.bE,v)
v=this.a
z=this.cx.f
v=v.bD
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bG
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bF
v.a.uniform1f(v.d,t)
break
case C.e:this.V(q,this.cy.d)
z=this.a
v=this.cy.d
z.al(z.dW,z.bH,v)
v=this.a
z=this.cy.f
v=v.bG
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bF
z.a.uniform1f(z.d,t)
break
case C.f:this.V(q,this.cy.e)
z=this.a
v=this.cy.e
z.af(z.dX,z.bH,v)
v=this.a
z=this.cy.f
v=v.bG
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bF
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bI
z.a.uniform1f(z.d,u)
break
case C.e:this.V(q,this.db.d)
z=this.a
u=this.db.d
z.al(z.dY,z.bJ,u)
u=this.a
z=this.db.f
u=u.bI
u.a.uniform1f(u.d,z)
break
case C.f:this.V(q,this.db.e)
z=this.a
u=this.db.e
z.af(z.dZ,z.bJ,u)
u=this.a
z=this.db.f
u=u.bI
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].Z(a)
z=b.e
z.Z(a)
z.ab(a)
z.aG(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.dK()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dd().aA}},ip:{"^":"d3;0f,a,b,0c,0d,0e",
fQ:function(a){var z,y
z=this.f
if(!$.t.$2(z,a)){y=this.f
this.f=a
z=new D.J(this.b,y,a,this,[P.r])
z.b=!0
this.a.X(z)}},
b0:function(){this.d_()
this.fQ(1)}},d3:{"^":"b;",
b0:["d_",function(){}],
bp:["eE",function(){}],
fS:function(a){},
fT:function(a){},
hw:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.X(null)}this.b0()
this.fS(null)
this.fT(null)
this.a.X(null)}},iq:{"^":"d3;a,b,0c,0d,0e"},b8:{"^":"d3;0f,a,b,0c,0d,0e",
ca:function(a){var z,y
if(!J.T(this.f,a)){z=this.f
this.f=a
y=new D.J(this.b+".color",z,a,this,[V.v])
y.b=!0
this.a.X(y)}},
b0:["d0",function(){this.d_()
this.ca(new V.v(0,0,0))}],
bp:["bl",function(){this.eE()
this.ca(new V.v(1,1,1))}],
sp:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bp()
z=this.a
z.a=null
z.X(null)}this.ca(b)}},is:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
br:function(a){var z,y
z=this.ch
if(!$.t.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".refraction",y,a,this,[P.r])
z.b=!0
this.a.X(z)}},
b0:function(){this.d0()
this.br(1)},
bp:function(){this.bl()
this.br(1)},
say:function(a){var z
if(a<=0)this.hw(0)
else if(this.c===C.c){this.c=C.i
this.bl()
this.br(1)
z=this.a
z.a=null
z.X(null)}this.br(a)}},it:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
bs:function(a){var z,y
z=this.ch
if(!$.t.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".shininess",y,a,this,[P.r])
z.b=!0
this.a.X(z)}},
b0:function(){this.d0()
this.bs(100)},
bp:function(){this.bl()
this.bs(100)}},jc:{"^":"c7;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
X:[function(a){var z
H.d(a,"$isp")
z=this.e
if(!(z==null))z.E(a)},function(){return this.X(null)},"fg","$1","$0","gc5",0,2,1],
em:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.d(a.fr.k(0,"Skybox"),"$iseB")
if(z==null){y=a.a
z=new A.eB(y,"Skybox")
z.d1(y,"Skybox")
z.ee(0,$.je,$.jd)
z.x=z.f.k(0,"posAttr")
z.y=H.j(z.r.k(0,"fov"),"$isa_")
z.z=H.j(z.r.k(0,"ratio"),"$isa_")
z.Q=H.j(z.r.k(0,"boxClr"),"$isL")
z.ch=H.j(z.r.k(0,"boxTxt"),"$isai")
z.cx=H.j(z.r.k(0,"viewMat"),"$isaJ")
a.dC(z)}this.a=z}if(b.e==null){y=b.d.dG(new Z.f9(a.a),$.$get$ay())
y.aC($.$get$ay()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.Z(a)}y=a.d
x=a.c
w=this.a
w.Z(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.cY(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga1(x).cE(0)
w=w.cx
w.toString
w.aj(x.ac(0,!0))
y=b.e
if(y instanceof Z.cP){y.Z(a)
y.ab(a)
y.aG(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.dK()
y=this.c
if(y!=null)y.aG(a)}},c7:{"^":"b;"}}],["","",,T,{"^":"",df:{"^":"cL;"},dg:{"^":"df;0b,0c,0d,0e,a",
Z:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
aG:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},jp:{"^":"b;a,0b,0c,0d,0e",
aN:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.aa
W.a2(z,"load",H.f(new T.jq(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fO:function(a,b,c){var z,y,x,w
b=V.dH(b,2)
z=V.dH(a.width,2)
y=V.dH(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cR(null,null)
x.width=z
x.height=y
w=H.d(C.k.ex(x,"2d"),"$isdW")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mp(w.getImageData(0,0,x.width,x.height))}}},jq:{"^":"m:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fO(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.W.ij(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.hE();++z.e}}}],["","",,X,{"^":"",ch:{"^":"b;",$isaF:1},hP:{"^":"de;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
as:function(a){var z=this.x
if(!(z==null))z.E(a)},
sdH:function(a,b){var z
if(this.b){this.b=!1
z=new D.J("clearColor",!0,!1,this,[P.ag])
z.b=!0
this.as(z)}},
Z:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.d.ai(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.d.ai(w.b*x)
t=C.d.ai(w.c*y)
a.c=t
w=C.d.ai(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
q:{
cV:function(a,b,c,d,e,f,g){var z,y
z=new X.hP()
y=new V.av(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.ez(0,0,1,1)
z.r=y
return z}}},hR:{"^":"b;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
Z:function(a){var z
a.cy.bM(V.b9())
z=V.b9()
a.db.bM(z)},
aG:function(a){a.cy.aF()
a.db.aF()},
$isaF:1,
$isch:1},iE:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
as:[function(a){var z
H.d(a,"$isp")
z=this.e
if(!(z==null))z.E(a)},function(){return this.as(null)},"ir","$1","$0","geO",0,2,1],
Z:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bM(V.aC(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.eu
if(z==null){z=V.eo(new V.V(0,0,0),new V.F(0,1,0),new V.F(0,0,-1))
$.eu=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aZ(0,a,this)
if(q!=null)r=q.j(0,r)}a.db.bM(r)},
aG:function(a){a.cy.aF()
a.db.aF()},
$isaF:1,
$isch:1,
q:{
et:function(a,b,c,d){var z,y,x,w
z=new X.iE()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gw()
x.toString
w=H.f(z.geO(),{func:1,ret:-1,args:[D.p]})
C.a.h(x.a,w)}x=new D.J("mover",y,z.a,z,[U.ae])
x.b=!0
z.as(x)}x=z.b
if(!$.t.$2(x,b)){y=z.b
z.b=b
x=new D.J("fov",y,b,z,[P.r])
x.b=!0
z.as(x)}x=z.c
if(!$.t.$2(x,d)){y=z.c
z.c=d
x=new D.J("near",y,d,z,[P.r])
x.b=!0
z.as(x)}x=z.d
if(!$.t.$2(x,a)){y=z.d
z.d=a
x=new D.J("far",y,a,z,[P.r])
x.b=!0
z.as(x)}return z}}},de:{"^":"b;"}}],["","",,B,{"^":"",
nc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.r.fR(x,(x&&C.r).d7(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
W.a2(z,"scroll",H.f(new B.nd(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
ne:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isc",[P.k],"$asc")
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
u=W.cR(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.d(v.insertCell(-1),"$isbL")
x=c.length>0
s=x?5:4
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.d(q.insertCell(-1),"$isbL").style
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
t=H.d(q.insertCell(-1),"$isbL")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.d(q.insertCell(-1),"$isbL")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.d(q.insertCell(-1),"$isbL").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.nc(a,y,!1,"../resources/SnowTop.png")},
nf:function(a){P.jx(C.G,new B.ng(a))},
iS:{"^":"b;a,0b",
cd:function(a,b,c,d){var z,y,x,w,v,u,t
H.f(c,{func:1,ret:-1})
if(this.b==null)return
z=this.a
if(P.dl().gbN().k(0,z)==null)if(d){c.$0()
this.es(b)
y=!0}else y=!1
else if(P.dl().gbN().k(0,z)===b){c.$0()
y=!0}else y=!1
x=document
w=x.createElement("label")
v=w.style
v.whiteSpace="nowrap"
J.dN(this.b).h(0,w)
u=W.hT("radio")
u.checked=y
u.name=z
z=W.aa
W.a2(u,"change",H.f(new B.iT(this,u,b,c),{func:1,ret:-1,args:[z]}),!1,z)
w.appendChild(u)
t=x.createElement("span")
t.textContent=b
w.appendChild(t)
J.dN(this.b).h(0,x.createElement("br"))},
a2:function(a,b,c){return this.cd(a,b,c,!1)},
es:function(a){var z,y,x,w,v
z=P.dl()
y=P.k
x=P.i8(z.gbN(),y,y)
x.m(0,this.a,a)
w=z.en(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.ll([],[]).cS(""),"",v)},
q:{
ex:function(a){var z,y
z=new B.iS(a)
y=document.getElementById(a)
z.b=y
if(y==null)H.u("Failed to find "+z.i(0)+"._elemId for RadioGroup")
return z}}},
iT:{"^":"m:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.a.es(this.c)
this.d.$0()}}},
nd:{"^":"m:13;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.l(-0.05*C.h.ai(this.b.scrollTop))+"px"
z.top=y}},
ng:{"^":"m:50;a",
$1:function(a){H.d(a,"$isbj")
P.dI(C.h.er(this.a.ghK(),2)+" fps")}}}],["","",,D,{"^":"",
fW:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
B.ne("Test 014",H.h(["controls","shapes"],[P.k]),"Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object.")
z=document.getElementById("threeDart")
if(z==null)H.u(P.x("Failed to find an element with the identifier, threeDart."))
y=E.jv(z,!0,!0,!0,!1)
x=X.cV(!0,!0,!1,null,2000,null,0)
x.sdH(0,!1)
w=E.e8(null,!0,null,"",null,null)
w.sa8(0,F.h1(30,1,15,0.5))
v=y.f
u=v.a
t=u.createTexture()
u.bindTexture(34067,t)
u.texParameteri(34067,10242,10497)
u.texParameteri(34067,10243,10497)
u.texParameteri(34067,10241,9729)
u.texParameteri(34067,10240,9729)
u.bindTexture(34067,null)
s=new T.dg(0)
s.b=t
s.c=!1
s.d=0
s.e=D.H()
v.aN(s,t,"../resources/maskonaive/posx.jpg",34069,!1,!1)
v.aN(s,t,"../resources/maskonaive/negx.jpg",34070,!1,!1)
v.aN(s,t,"../resources/maskonaive/posy.jpg",34071,!1,!1)
v.aN(s,t,"../resources/maskonaive/negy.jpg",34072,!1,!1)
v.aN(s,t,"../resources/maskonaive/posz.jpg",34073,!1,!1)
v.aN(s,t,"../resources/maskonaive/negz.jpg",34074,!1,!1)
r=new O.im()
v=O.cS(V.aB)
r.e=v
v.b_(r.gfd(),r.gfe())
v=new O.b8(r,"emission")
v.c=C.c
v.f=new V.v(0,0,0)
r.f=v
v=new O.b8(r,"ambient")
v.c=C.c
v.f=new V.v(0,0,0)
r.r=v
v=new O.b8(r,"diffuse")
v.c=C.c
v.f=new V.v(0,0,0)
r.x=v
v=new O.b8(r,"invDiffuse")
v.c=C.c
v.f=new V.v(0,0,0)
r.y=v
v=new O.it(r,"specular")
v.c=C.c
v.f=new V.v(0,0,0)
v.ch=100
r.z=v
v=new O.iq(r,"bump")
v.c=C.c
r.Q=v
r.ch=null
v=new O.b8(r,"reflect")
v.c=C.c
v.f=new V.v(0,0,0)
r.cx=v
v=new O.is(r,"refract")
v.c=C.c
v.f=new V.v(0,0,0)
v.ch=1
r.cy=v
v=new O.ip(r,"alpha")
v.c=C.c
v.f=1
r.db=v
v=new D.i1()
v.bm(D.a4)
v.e=H.h([],[D.ck])
v.f=H.h([],[D.iG])
v.r=H.h([],[D.jf])
v.x=H.h([],[D.jr])
v.y=H.h([],[D.js])
v.z=H.h([],[D.jt])
v.Q=null
v.ch=null
v.cX(v.gfc(),v.gfz(),v.gfB())
r.dx=v
u=v.Q
if(u==null){u=D.H()
v.Q=u
v=u}else v=u
u={func:1,ret:-1,args:[D.p]}
q=H.f(r.gfM(),u)
C.a.h(v.a,q)
q=r.dx
v=q.ch
if(v==null){v=D.H()
q.ch=v}q=H.f(r.gc5(),u)
C.a.h(v.a,q)
r.dy=null
v=r.dx
p=U.e_(V.eo(new V.V(0,0,0),new V.F(0,1,0),new V.F(-1,-1,-1)))
o=new V.v(1,1,1)
n=new D.ck()
n.c=new V.v(1,1,1)
n.a=new V.F(0,0,1)
m=n.b
n.b=p
p=p.gw()
p.toString
l=H.f(n.geL(),u)
C.a.h(p.a,l)
p=new D.J("mover",m,n.b,n,[U.ae])
p.b=!0
n.aJ(p)
if(!n.c.A(0,o)){m=n.c
n.c=o
p=new D.J("color",m,o,n,[V.v])
p.b=!0
n.aJ(p)}v.h(0,n)
v=r.r
v.sp(0,new V.v(0.1,0.1,0.1))
v=r.x
v.sp(0,new V.v(0.1,0.1,0.1))
v=r.z
v.sp(0,new V.v(1,1,1))
v=r.z
if(v.c===C.c){v.c=C.i
v.bl()
v.bs(100)
p=v.a
p.a=null
p.X(null)}v.bs(10)
v=r.ch
if(v!==s){if(v!=null)C.a.L(v.e.a,q)
m=r.ch
r.ch=s
C.a.h(s.e.a,q)
v=new D.J("environment",m,r.ch,r,[T.dg])
v.b=!0
r.X(v)}r.cy.say(0.6)
v=r.cy
v.sp(0,new V.v(0.2,0.3,1))
v=r.cx
v.sp(0,new V.v(0.6,0.6,0.6))
k=new U.eb()
k.bm(U.ae)
k.b_(k.gfb(),k.gfA())
k.e=null
k.f=V.b9()
k.r=0
v=y.r
q=new U.jZ()
p=U.cT()
p.scT(0,!0)
p.scG(6.283185307179586)
p.scI(0)
p.sa0(0,0)
p.scH(100)
p.sU(0)
p.scs(0.5)
q.b=p
p=p.gw()
p.toString
n=H.f(q.gaK(),u)
C.a.h(p.a,n)
p=U.cT()
p.scT(0,!0)
p.scG(6.283185307179586)
p.scI(0)
p.sa0(0,0)
p.scH(100)
p.sU(0)
p.scs(0.5)
q.c=p
C.a.h(p.gw().a,n)
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
j=new X.aD(!1,!1,!1)
m=q.d
q.d=j
p=[X.aD]
n=new D.J("modifiers",m,j,q,p)
n.b=!0
q.S(n)
n=q.f
if(n!==!1){q.f=!1
n=new D.J("invertX",n,!1,q,[P.ag])
n.b=!0
q.S(n)}n=q.r
if(n!==!1){q.r=!1
n=new D.J("invertY",n,!1,q,[P.ag])
n.b=!0
q.S(n)}q.b2(v)
k.h(0,q)
v=y.r
q=new U.jY()
n=U.cT()
n.scT(0,!0)
n.scG(6.283185307179586)
n.scI(0)
n.sa0(0,0)
n.scH(100)
n.sU(0)
n.scs(0.2)
q.b=n
n=n.gw()
n.toString
l=H.f(q.gaK(),u)
C.a.h(n.a,l)
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
j=new X.aD(!0,!1,!1)
m=q.c
q.c=j
n=new D.J("modifiers",m,j,q,p)
n.b=!0
q.S(n)
q.b2(v)
k.h(0,q)
v=y.r
q=new U.k_()
q.c=0.01
q.d=0
q.e=0
j=new X.aD(!1,!1,!1)
q.b=j
p=new D.J("modifiers",null,j,q,p)
p.b=!0
q.S(p)
q.b2(v)
k.h(0,q)
k.h(0,U.e_(V.aC(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=X.et(2000,1.0471975511965976,k,0.1)
h=new M.ht()
h.sb3(null)
h.sbd(0,null)
h.sbe(null)
v=E.e8(null,!0,null,"",null,null)
g=F.cv()
q=g.a
p=new V.F(-1,-1,1)
p=p.v(0,Math.sqrt(p.D(p)))
f=q.bu(new V.aG(1,2,4,6),new V.av(1,0,0,1),new V.V(-1,-1,0),new V.R(0,1),p,null)
q=g.a
p=new V.F(1,-1,1)
p=p.v(0,Math.sqrt(p.D(p)))
e=q.bu(new V.aG(0,3,4,6),new V.av(0,0,1,1),new V.V(1,-1,0),new V.R(1,1),p,null)
q=g.a
p=new V.F(1,1,1)
p=p.v(0,Math.sqrt(p.D(p)))
d=q.bu(new V.aG(0,2,5,6),new V.av(0,1,0,1),new V.V(1,1,0),new V.R(1,0),p,null)
q=g.a
p=new V.F(-1,1,1)
p=p.v(0,Math.sqrt(p.D(p)))
c=q.bu(new V.aG(0,2,4,7),new V.av(1,1,0,1),new V.V(-1,1,0),new V.R(0,0),p,null)
g.d.dA(H.h([f,e,d,c],[F.ac]))
g.am()
v.sa8(0,g)
h.d=v
h.e=null
v=new O.jc()
v.b=1.0471975511965976
m=v.c
v.c=s
q=s.e
p=H.f(v.gc5(),u)
C.a.h(q.a,p)
q=new D.J("boxTexture",m,v.c,v,[T.dg])
q.b=!0
v.X(q)
o=new V.v(1,1,1)
if(!J.T(v.d,o)){m=v.d
v.d=o
q=new D.J("boxColor",m,o,v,[V.v])
q.b=!0
v.X(q)}v.e=null
h.sbe(v)
h.sbd(0,x)
h.sb3(i)
b=new M.hH()
v=O.cS(E.aO)
b.d=v
v.b_(b.gfh(),b.gfi())
b.e=null
b.f=null
b.r=null
b.x=null
b.sb3(null)
b.sbd(0,null)
b.sbe(null)
b.sb3(i)
b.sbe(r)
b.sbd(0,x)
b.d.h(0,w)
b.b.sdH(0,!1)
v=M.aH
q=H.h([h,b],[v])
p=new M.ho()
p.bm(v)
p.e=!1
p.f=null
p.b_(p.gfC(),p.gfD())
p.ce(0,q)
v=y.d
if(v!==p){if(v!=null){v=v.gw()
v.toString
q=H.f(y.gd3(),u)
C.a.L(v.a,q)}y.d=p
v=p.gw()
v.toString
u=H.f(y.gd3(),u)
C.a.h(v.a,u)
y.eJ()}v=B.ex("controls")
v.cd(0,"Silver",new D.mP(r),!0)
v.a2(0,"Gold",new D.mQ(r))
v.a2(0,"Glass",new D.mR(r))
v.a2(0,"Blue Glass",new D.mZ(r))
v.a2(0,"Water Bubble",new D.n_(r))
v.a2(0,"No Reflection",new D.n0(r))
v.a2(0,"Pink Distort",new D.n1(r))
v.a2(0,"Cloak",new D.n2(r))
v.a2(0,"White and Shiny",new D.n3(r))
v=B.ex("shapes")
v.a2(0,"Cube",new D.n4(w))
v.a2(0,"Cuboid",new D.n5(w))
v.a2(0,"Cylinder",new D.mS(w))
v.a2(0,"Cone",new D.mT(w))
v.a2(0,"Cylindrical",new D.mU(w))
v.a2(0,"Sphere",new D.mV(w))
v.a2(0,"Spherical",new D.mW(w))
v.cd(0,"Toroid",new D.mX(w),!0)
v.a2(0,"Knot",new D.mY(w))
B.nf(y)},
mP:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sp(0,new V.v(0.2,0.2,0.2))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.sp(0,new V.v(0,0,0))
z=z.cx
z.sp(0,new V.v(1,1,1))}},
mQ:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.11,0.11,0.1))
y=z.x
y.sp(0,new V.v(0.21,0.21,0.2))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.sp(0,new V.v(0,0,0))
z=z.cx
z.sp(0,new V.v(1,0.9,0.5))}},
mR:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.say(0.4)
y=z.cy
y.sp(0,new V.v(0.6,0.6,0.6))
z=z.cx
z.sp(0,new V.v(0.4,0.4,0.4))}},
mZ:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.say(0.4)
y=z.cy
y.sp(0,new V.v(0.2,0.3,1))
z=z.cx
z.sp(0,new V.v(0.3,0.3,0.3))}},
n_:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.say(0.6)
y=z.cy
y.sp(0,new V.v(0.8,0.8,0.8))
z=z.cx
z.sp(0,new V.v(0.2,0.2,0.2))}},
n0:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.say(0.6)
y=z.cy
y.sp(0,new V.v(1,1,1))
z.cx.sp(0,new V.v(0,0,0))}},
n1:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.say(0.9)
y=z.cy
y.sp(0,new V.v(1,0.8,0.8))
z.cx.sp(0,new V.v(0,0,0))}},
n2:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0,0,0))
y=z.x
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sp(0,new V.v(0.1,0.1,0.1))
z.cy.say(0.99)
y=z.cy
y.sp(0,new V.v(0.95,0.95,0.95))
z.cx.sp(0,new V.v(0,0,0))}},
n3:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.3,0.3,0.3))
y=z.x
y.sp(0,new V.v(0.5,0.5,0.5))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.sp(0,new V.v(0,0,0))
z=z.cx
z.sp(0,new V.v(0.3,0.3,0.3))}},
n4:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.dA(1,null,null,1))}},
n5:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.dA(15,null,new D.mO(),15))}},
mO:{"^":"m:4;",
$3:function(a,b,c){var z,y,x,w
z=Math.cos(c*4*3.141592653589793+3.141592653589793)
y=Math.cos(b*4*3.141592653589793+3.141592653589793)
x=a.f
x=new V.F(x.a,x.b,x.c)
w=x.v(0,Math.sqrt(x.D(x)))
x=a.f
y=w.j(0,z*0.1+y*0.1)
a.sa0(0,x.F(0,new V.V(y.a,y.b,y.c)))}},
mS:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.fL(1,!0,!0,1,30,1))}},
mT:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.fL(1,!0,!1,1,30,0))}},
mU:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.fM(!0,!0,25,new D.mN(),50))}},
mN:{"^":"m:7;",
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}},
mV:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.h_(6,null,6))}},
mW:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.h_(10,new D.mM(),10))}},
mM:{"^":"m:7;",
$2:function(a,b){var z,y
z=a-0.5
y=b-0.5
return Math.cos(Math.sqrt(z*z+y*y)*3.141592653589793)*0.3}},
mX:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.h1(30,1,15,0.5))}},
mY:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.mJ(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eg.prototype
return J.ef.prototype}if(typeof a=="string")return J.c5.prototype
if(a==null)return J.eh.prototype
if(typeof a=="boolean")return J.hX.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.aM=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.cc=function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.mz=function(a){if(typeof a=="number")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c9.prototype
return a}
J.mA=function(a){if(typeof a=="number")return J.c4.prototype
if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c9.prototype
return a}
J.dD=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c9.prototype
return a}
J.aX=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.T=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).A(a,b)}
J.h2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mz(a).O(a,b)}
J.dK=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mA(a).j(a,b)}
J.dL=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aM(a).k(a,b)}
J.cI=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fT(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cc(a).m(a,b,c)}
J.h3=function(a,b){return J.dD(a).I(a,b)}
J.h4=function(a,b,c){return J.aX(a).fK(a,b,c)}
J.h5=function(a,b,c,d){return J.aX(a).dz(a,b,c,d)}
J.h6=function(a,b){return J.dD(a).Y(a,b)}
J.cJ=function(a,b,c){return J.aM(a).hy(a,b,c)}
J.cK=function(a,b){return J.cc(a).J(a,b)}
J.h7=function(a,b,c,d){return J.cc(a).aB(a,b,c,d)}
J.dM=function(a,b){return J.cc(a).K(a,b)}
J.dN=function(a){return J.aX(a).gco(a)}
J.b2=function(a){return J.M(a).gT(a)}
J.bx=function(a){return J.cc(a).ga4(a)}
J.at=function(a){return J.aM(a).gl(a)}
J.h8=function(a,b){return J.aX(a).ib(a,b)}
J.h9=function(a,b){return J.aX(a).sa6(a,b)}
J.a9=function(a){return J.M(a).i(a)}
I.ar=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cQ.prototype
C.r=W.hu.prototype
C.H=J.q.prototype
C.a=J.b7.prototype
C.I=J.ef.prototype
C.d=J.eg.prototype
C.t=J.eh.prototype
C.h=J.c4.prototype
C.b=J.c5.prototype
C.P=J.c6.prototype
C.U=H.d8.prototype
C.V=W.iA.prototype
C.z=J.iF.prototype
C.W=P.da.prototype
C.q=J.c9.prototype
C.A=W.bP.prototype
C.B=W.kl.prototype
C.D=new P.he(!1)
C.C=new P.hd(C.D)
C.E=new P.iD()
C.F=new P.k7()
C.j=new P.l7()
C.c=new A.ci(0,"ColorSourceType.None")
C.i=new A.ci(1,"ColorSourceType.Solid")
C.e=new A.ci(2,"ColorSourceType.Texture2D")
C.f=new A.ci(3,"ColorSourceType.TextureCube")
C.G=new P.bA(5e6)
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
C.w=H.h(I.ar([127,2047,65535,1114111]),[P.n])
C.m=H.h(I.ar([0,0,32776,33792,1,10240,0,0]),[P.n])
C.n=H.h(I.ar([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.h(I.ar([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.R=H.h(I.ar([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.p=H.h(I.ar([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.x=H.h(I.ar([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.S=H.h(I.ar([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.y=H.h(I.ar([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.Q=H.h(I.ar([]),[P.k])
C.T=new H.hs(0,{},C.Q,[P.k,P.k])
C.l=new P.k0(!1)
$.aA=0
$.by=null
$.dS=null
$.dv=!1
$.fR=null
$.fH=null
$.fZ=null
$.cD=null
$.cG=null
$.dE=null
$.bq=null
$.bV=null
$.bW=null
$.dw=!1
$.X=C.j
$.e5=null
$.e4=null
$.e3=null
$.e2=null
$.t=V.iu()
$.je="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jd="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eu=null
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
I.$lazy(y,x,w)}})(["e1","$get$e1",function(){return H.fQ("_$dart_dartClosure")},"cZ","$get$cZ",function(){return H.fQ("_$dart_js")},"eK","$get$eK",function(){return H.aI(H.cw({
toString:function(){return"$receiver$"}}))},"eL","$get$eL",function(){return H.aI(H.cw({$method$:null,
toString:function(){return"$receiver$"}}))},"eM","$get$eM",function(){return H.aI(H.cw(null))},"eN","$get$eN",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eR","$get$eR",function(){return H.aI(H.cw(void 0))},"eS","$get$eS",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eP","$get$eP",function(){return H.aI(H.eQ(null))},"eO","$get$eO",function(){return H.aI(function(){try{null.$method$}catch(z){return z.message}}())},"eU","$get$eU",function(){return H.aI(H.eQ(void 0))},"eT","$get$eT",function(){return H.aI(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dp","$get$dp",function(){return P.km()},"bX","$get$bX",function(){return[]},"f4","$get$f4",function(){return P.k4()},"fb","$get$fb",function(){return H.iy(H.bp(H.h([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"fx","$get$fx",function(){return P.iY("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fD","$get$fD",function(){return P.m6()},"e0","$get$e0",function(){return{}},"f7","$get$f7",function(){return Z.ap(0)},"f5","$get$f5",function(){return Z.ap(511)},"ay","$get$ay",function(){return Z.ap(1)},"aS","$get$aS",function(){return Z.ap(2)},"aR","$get$aR",function(){return Z.ap(4)},"aT","$get$aT",function(){return Z.ap(8)},"aU","$get$aU",function(){return Z.ap(16)},"bN","$get$bN",function(){return Z.ap(32)},"bO","$get$bO",function(){return Z.ap(64)},"f6","$get$f6",function(){return Z.ap(96)},"bn","$get$bn",function(){return Z.ap(128)},"aQ","$get$aQ",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.I},{func:1,ret:-1,opt:[D.p]},{func:1,ret:-1,args:[D.p]},{func:1,ret:-1},{func:1,ret:P.I,args:[F.ac,P.r,P.r]},{func:1,ret:-1,args:[W.aE]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:P.I,args:[F.am]},{func:1,ret:P.I,args:[,,]},{func:1,ret:-1,args:[P.n,[P.i,E.aO]]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:-1,args:[W.bl]},{func:1,ret:P.I,args:[W.aa]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[D.p]},{func:1,ret:P.k,args:[P.n]},{func:1,ret:-1,args:[P.n,[P.i,V.aB]]},{func:1,ret:V.V,args:[P.r]},{func:1,ret:P.r,args:[P.r]},{func:1,args:[,]},{func:1,ret:-1,args:[P.n,[P.i,M.aH]]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:-1,args:[P.n,[P.i,U.ae]]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.r},{func:1,ret:-1,args:[P.n,[P.i,D.a4]]},{func:1,ret:-1,args:[W.bF]},{func:1,args:[,P.k]},{func:1,ret:P.Q,args:[P.n]},{func:1,ret:W.a3,args:[W.N]},{func:1,ret:P.I,args:[P.Z]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.p]}]},{func:1,ret:P.ag,args:[W.N]},{func:1,ret:P.ag,args:[P.r,P.r]},{func:1,ret:-1,args:[W.bP]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.ag,args:[[P.i,D.a4]]},{func:1,ret:P.n,args:[[P.c,P.n],P.n]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.I,args:[P.k,,]},{func:1,args:[P.k]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:-1,args:[P.b],opt:[P.aw]},{func:1,ret:P.I,args:[P.k]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.k],opt:[,]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.aV,,],args:[,]},{func:1,ret:[P.K,P.k,P.k],args:[[P.K,P.k,P.k],P.k]},{func:1,ret:P.I,args:[P.bj]},{func:1,ret:-1,args:[P.k,P.n]},{func:1,ret:P.I,args:[,],opt:[,]}]
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
if(x==y)H.nk(d||a)
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
Isolate.ar=a.ar
Isolate.dB=a.dB
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
if(typeof dartMainRunner==="function")dartMainRunner(D.fW,[])
else D.fW([])})})()
//# sourceMappingURL=test.dart.js.map
