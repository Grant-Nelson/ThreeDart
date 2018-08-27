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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isp)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dE(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dF=function(){}
var dart=[["","",,H,{"^":"",on:{"^":"b;a"}}],["","",,J,{"^":"",
H:function(a){return void 0},
dL:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cI:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dJ==null){H.mQ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cb("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d1()]
if(v!=null)return v
v=H.mV(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d1(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
p:{"^":"b;",
u:function(a,b){return a===b},
gU:function(a){return H.bK(a)},
i:["em",function(a){return"Instance of '"+H.be(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hY:{"^":"p;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isai:1},
em:{"^":"p;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isE:1},
d2:{"^":"p;",
gU:function(a){return 0},
i:["en",function(a){return String(a)}]},
iE:{"^":"d2;"},
cc:{"^":"d2;"},
c6:{"^":"d2;",
i:function(a){var z=a[$.$get$e6()]
if(z==null)return this.en(a)
return"JavaScript function for "+H.l(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscY:1},
ba:{"^":"p;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.q(P.A("add"))
a.push(b)},
R:function(a,b){var z
if(!!a.fixed$length)H.q(P.A("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aY(a))}},
F:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hG:function(a){return this.F(a,"")},
hy:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aY(a))}return y},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
bQ:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a2(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.y(a,0)])
return H.e(a.slice(b,c),[H.y(a,0)])},
gaz:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hW())},
ay:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.q(P.A("fill range"))
P.aS(b,c,a.length,null,null,null)
for(z=b;z.N(0,c);z=z.B(0,1))a[z]=d},
br:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.d_(a,"[","]")},
ga0:function(a){return new J.av(a,a.length,0,[H.y(a,0)])},
gU:function(a){return H.bK(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ch(b,"newLength",null))
if(b<0)throw H.a(P.a2(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aM(a,b))
if(b>=a.length||b<0)throw H.a(H.aM(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.q(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aM(a,b))
if(b>=a.length||b<0)throw H.a(H.aM(a,b))
a[b]=c},
$isk:1,
$isd:1,
p:{
hX:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.ch(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a2(a,0,4294967295,"length",null))
return J.ej(new Array(a),b)},
ej:function(a,b){return J.bD(H.e(a,[b]))},
bD:function(a){H.bY(a)
a.fixed$length=Array
return a}}},
om:{"^":"ba;$ti"},
av:{"^":"b;a,b,c,0d,$ti",
gS:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c4:{"^":"p;",
ghF:function(a){return a===0?1/a<0:a<0},
ij:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
b1:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
ec:function(a,b){var z
if(b>20)throw H.a(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghF(a))return"-"+z
return z},
bd:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.A("Unexpected toString result: "+z))
x=J.aN(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.ab(b))
return a*b},
aj:function(a,b){var z
if(typeof b!=="number")throw H.a(H.ab(b))
z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eq:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dk(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.dk(a,b)},
dk:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aI:function(a,b){var z
if(a>0)z=this.di(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fL:function(a,b){if(b<0)throw H.a(H.ab(b))
return this.di(a,b)},
di:function(a,b){return b>31?0:a>>>b},
N:function(a,b){if(typeof b!=="number")throw H.a(H.ab(b))
return a<b},
$isu:1,
$isX:1},
el:{"^":"c4;",$iso:1},
ek:{"^":"c4;"},
c5:{"^":"p;",
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aM(a,b))
if(b<0)throw H.a(H.aM(a,b))
if(b>=a.length)H.q(H.aM(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.a(H.aM(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.L(b)
if(typeof b!=="string")throw H.a(P.ch(b,null,null))
return a+b},
aS:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ab(b))
c=P.aS(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ab(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
aa:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ab(c))
if(typeof c!=="number")return c.N()
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a9:function(a,b){return this.aa(a,b,0)},
v:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ab(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.N()
if(b<0)throw H.a(P.cw(b,null,null))
if(b>c)throw H.a(P.cw(b,null,null))
if(c>a.length)throw H.a(P.cw(c,null,null))
return a.substring(b,c)},
aA:function(a,b){return this.v(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hW:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
ad:function(a,b){return this.hW(a,b," ")},
dY:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dX:function(a,b){return this.dY(a,b,0)},
hm:function(a,b,c){if(c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
return H.h4(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseA:1,
$isi:1}}],["","",,H,{"^":"",
cJ:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hW:function(){return new P.jh("No element")},
a4:{"^":"jV;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.b.X(this.a,b)},
$ascz:function(){return[P.o]},
$asx:function(){return[P.o]},
$ask:function(){return[P.o]},
$asd:function(){return[P.o]}},
hG:{"^":"k;"},
es:{"^":"b;a,b,c,0d,$ti",
gS:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.aN(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aY(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.L(z,w);++this.c
return!0}},
ii:{"^":"k;a,b,$ti",
ga0:function(a){return new H.ij(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.au(this.a)},
L:function(a,b){return this.b.$1(J.cO(this.a,b))},
$ask:function(a,b){return[b]}},
ij:{"^":"d0;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gS(z))
return!0}this.a=null
return!1},
gS:function(a){return this.a},
$asd0:function(a,b){return[b]}},
kr:{"^":"k;a,b,$ti",
ga0:function(a){return new H.ks(J.by(this.a),this.b,this.$ti)}},
ks:{"^":"d0;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gS(z)))return!0
return!1},
gS:function(a){var z=this.a
return z.gS(z)}},
cn:{"^":"b;$ti"},
cz:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.aB(this,"cz",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
ay:function(a,b,c,d){H.z(d,H.aB(this,"cz",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jV:{"^":"cr+cz;"}}],["","",,H,{"^":"",
hv:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mJ:function(a){return init.types[H.D(a)]},
fY:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.H(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.ab(a))
return z},
bK:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iO:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.c(z,3)
y=H.L(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
be:function(a){var z,y,x,w,v,u,t,s,r
z=J.H(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.H(a).$iscc){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.I(w,0)===36)w=C.b.aA(w,1)
r=H.dK(H.bY(H.b3(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iG:function(){if(!!self.location)return self.location.href
return},
eC:function(a){var z,y,x,w,v
H.bY(a)
z=J.au(a)
if(typeof z!=="number")return z.ej()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iP:function(a){var z,y,x,w
z=H.e([],[P.o])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ab(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aI(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ab(w))}return H.eC(z)},
eD:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ab(x))
if(x<0)throw H.a(H.ab(x))
if(x>65535)return H.iP(a)}return H.eC(a)},
iQ:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ej()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cu:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aI(z,10))>>>0,56320|z&1023)}}throw H.a(P.a2(a,0,1114111,null,null))},
ah:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iN:function(a){return a.b?H.ah(a).getUTCFullYear()+0:H.ah(a).getFullYear()+0},
iL:function(a){return a.b?H.ah(a).getUTCMonth()+1:H.ah(a).getMonth()+1},
iH:function(a){return a.b?H.ah(a).getUTCDate()+0:H.ah(a).getDate()+0},
iI:function(a){return a.b?H.ah(a).getUTCHours()+0:H.ah(a).getHours()+0},
iK:function(a){return a.b?H.ah(a).getUTCMinutes()+0:H.ah(a).getMinutes()+0},
iM:function(a){return a.b?H.ah(a).getUTCSeconds()+0:H.ah(a).getSeconds()+0},
iJ:function(a){return a.b?H.ah(a).getUTCMilliseconds()+0:H.ah(a).getMilliseconds()+0},
n:function(a){throw H.a(H.ab(a))},
c:function(a,b){if(a==null)J.au(a)
throw H.a(H.aM(a,b))},
aM:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aO(!0,b,"index",null)
z=H.D(J.au(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cw(b,"index",null)},
mD:function(a,b,c){if(a>c)return new P.cv(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cv(a,c,!0,b,"end","Invalid value")
return new P.aO(!0,b,"end",null)},
ab:function(a){return new P.aO(!0,a,null,null)},
ms:function(a){if(typeof a!=="number")throw H.a(H.ab(a))
return a},
a:function(a){var z
if(a==null)a=new P.ez()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h6})
z.name=""}else z.toString=H.h6
return z},
h6:function(){return J.ac(this.dartException)},
q:function(a){throw H.a(a)},
C:function(a){throw H.a(P.aY(a))},
at:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ns(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aI(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d3(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ey(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eU()
u=$.$get$eV()
t=$.$get$eW()
s=$.$get$eX()
r=$.$get$f0()
q=$.$get$f1()
p=$.$get$eZ()
$.$get$eY()
o=$.$get$f3()
n=$.$get$f2()
m=v.ac(y)
if(m!=null)return z.$1(H.d3(H.L(y),m))
else{m=u.ac(y)
if(m!=null){m.method="call"
return z.$1(H.d3(H.L(y),m))}else{m=t.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=r.ac(y)
if(m==null){m=q.ac(y)
if(m==null){m=p.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=o.ac(y)
if(m==null){m=n.ac(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ey(H.L(y),m))}}return z.$1(new H.jU(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eI()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aO(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eI()
return a},
bv:function(a){var z
if(a==null)return new H.fu(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fu(a)},
mG:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mS:function(a,b,c,d,e,f){H.f(a,"$iscY")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bt:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mS)
a.$identity=z
return z},
hr:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.H(d).$isd){z.$reflectionInfo=d
x=H.iV(z).r}else x=d
w=e?Object.create(new H.ji().constructor.prototype):Object.create(new H.cR(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aC
if(typeof u!=="number")return u.B()
$.aC=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e2(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mJ,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dW:H.cS
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e2(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
ho:function(a,b,c,d){var z=H.cS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e2:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hq(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ho(y,!w,z,b)
if(y===0){w=$.aC
if(typeof w!=="number")return w.B()
$.aC=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bz
if(v==null){v=H.ci("self")
$.bz=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aC
if(typeof w!=="number")return w.B()
$.aC=w+1
t+=w
w="return function("+t+"){return this."
v=$.bz
if(v==null){v=H.ci("self")
$.bz=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hp:function(a,b,c,d){var z,y
z=H.cS
y=H.dW
switch(b?-1:a){case 0:throw H.a(H.j4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hq:function(a,b){var z,y,x,w,v,u,t,s
z=$.bz
if(z==null){z=H.ci("self")
$.bz=z}y=$.dV
if(y==null){y=H.ci("receiver")
$.dV=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hp(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aC
if(typeof y!=="number")return y.B()
$.aC=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aC
if(typeof y!=="number")return y.B()
$.aC=y+1
return new Function(z+y+"}")()},
dE:function(a,b,c,d,e,f,g){var z,y
z=J.bD(H.bY(b))
H.D(c)
y=!!J.H(d).$isd?J.bD(d):d
return H.hr(a,z,c,y,!!e,f,g)},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.az(a,"String"))},
mE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.az(a,"double"))},
ng:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.az(a,"num"))},
fS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.az(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.az(a,"int"))},
h2:function(a,b){throw H.a(H.az(a,H.L(b).substring(3)))},
ni:function(a,b){var z=J.aN(b)
throw H.a(H.hn(a,z.v(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.H(a)[b])return a
H.h2(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.H(a)[b]
else z=!0
if(z)return a
H.ni(a,b)},
bY:function(a){if(a==null)return a
if(!!J.H(a).$isd)return a
throw H.a(H.az(a,"List"))},
h_:function(a,b){if(a==null)return a
if(!!J.H(a).$isd)return a
if(J.H(a)[b])return a
H.h2(a,b)},
fU:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
cd:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fU(J.H(a))
if(z==null)return!1
y=H.fX(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dA)return a
$.dA=!0
try{if(H.cd(a,b))return a
z=H.cf(b)
y=H.az(a,z)
throw H.a(y)}finally{$.dA=!1}},
dG:function(a,b){if(a!=null&&!H.dD(a,b))H.q(H.az(a,H.cf(b)))
return a},
fN:function(a){var z
if(a instanceof H.m){z=H.fU(J.H(a))
if(z!=null)return H.cf(z)
return"Closure"}return H.be(a)},
np:function(a){throw H.a(new P.hy(H.L(a)))},
fV:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b3:function(a){if(a==null)return
return a.$ti},
pu:function(a,b,c){return H.bw(a["$as"+H.l(c)],H.b3(b))},
aX:function(a,b,c,d){var z
H.L(c)
H.D(d)
z=H.bw(a["$as"+H.l(c)],H.b3(b))
return z==null?null:z[d]},
aB:function(a,b,c){var z
H.L(b)
H.D(c)
z=H.bw(a["$as"+H.l(b)],H.b3(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.D(b)
z=H.b3(a)
return z==null?null:z[b]},
cf:function(a){var z=H.b4(a,null)
return z},
b4:function(a,b){var z,y
H.w(b,"$isd",[P.i],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dK(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.c(b,y)
return H.l(b[y])}if('func' in a)return H.mi(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mi:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.c(b,r)
t=C.b.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b4(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b4(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b4(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b4(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mF(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.L(z[l])
n=n+m+H.b4(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dK:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isd",[P.i],"$asd")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b4(u,c)}v="<"+z.i(0)+">"
return v},
bw:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bs:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b3(a)
y=J.H(a)
if(y[b]==null)return!1
return H.fQ(H.bw(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.L(b)
H.bY(c)
H.L(d)
if(a==null)return a
z=H.bs(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dK(c,0,null)
throw H.a(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fQ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.as(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.as(a[y],b,c[y],d))return!1
return!0},
ps:function(a,b,c){return a.apply(b,H.bw(J.H(b)["$as"+H.l(c)],H.b3(b)))},
fZ:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="E"||a===-1||a===-2||H.fZ(z)}return!1},
dD:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="E"||b===-1||b===-2||H.fZ(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dD(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cd(a,b)}y=J.H(a).constructor
x=H.b3(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.as(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dD(a,b))throw H.a(H.az(a,H.cf(b)))
return a},
as:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.as(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.fX(a,b,c,d)
if('func' in a)return c.builtin$cls==="cY"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.as("type" in a?a.type:null,b,x,d)
else if(H.as(a,b,x,d))return!0
else{if(!('$is'+"bB" in y.prototype))return!1
w=y.prototype["$as"+"bB"]
v=H.bw(w,z?a.slice(1):null)
return H.as(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cf(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fQ(H.bw(r,z),b,u,d)},
fX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.as(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.as(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.as(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.as(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nf(m,b,l,d)},
nf:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.as(c[w],d,a[w],b))return!1}return!0},
pt:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
mV:function(a){var z,y,x,w,v,u
z=H.L($.fW.$1(a))
y=$.cH[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cK[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.L($.fP.$2(a,z))
if(z!=null){y=$.cH[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cK[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cL(x)
$.cH[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cK[z]=x
return x}if(v==="-"){u=H.cL(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h1(a,x)
if(v==="*")throw H.a(P.cb(z))
if(init.leafTags[z]===true){u=H.cL(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h1(a,x)},
h1:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dL(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cL:function(a){return J.dL(a,!1,null,!!a.$isF)},
ne:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cL(z)
else return J.dL(z,c,null,null)},
mQ:function(){if(!0===$.dJ)return
$.dJ=!0
H.mR()},
mR:function(){var z,y,x,w,v,u,t,s
$.cH=Object.create(null)
$.cK=Object.create(null)
H.mM()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h3.$1(v)
if(u!=null){t=H.ne(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mM:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.br(C.J,H.br(C.O,H.br(C.u,H.br(C.u,H.br(C.N,H.br(C.K,H.br(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fW=new H.mN(v)
$.fP=new H.mO(u)
$.h3=new H.mP(t)},
br:function(a,b){return a(b)||b},
h4:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h5:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hu:{"^":"b;$ti",
i:function(a){return P.d5(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hv()},
$isI:1},
hw:{"^":"hu;a,b,c,$ti",
gl:function(a){return this.a},
bs:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bs(0,b))return
return this.d8(b)},
d8:function(a){return this.b[H.L(a)]},
J:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.d8(v),z))}}},
iU:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iV:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bD(z)
y=z[0]
x=z[1]
return new H.iU(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jG:{"^":"b;a,b,c,d,e,f",
ac:function(a){var z,y,x
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
aF:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f_:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iB:{"^":"a6;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
ey:function(a,b){return new H.iB(a,b==null?null:b.method)}}},
i0:{"^":"a6;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d3:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i0(a,y,z?null:b.receiver)}}},
jU:{"^":"a6;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ns:{"^":"m:18;a",
$1:function(a){if(!!J.H(a).$isa6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fu:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isay:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.be(this).trim()+"'"},
geg:function(){return this},
$iscY:1,
geg:function(){return this}},
eN:{"^":"m;"},
ji:{"^":"eN;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cR:{"^":"eN;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cR))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bK(this.a)
else y=typeof z!=="object"?J.b5(z):H.bK(z)
return(y^H.bK(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.be(z)+"'")},
p:{
cS:function(a){return a.a},
dW:function(a){return a.c},
ci:function(a){var z,y,x,w,v
z=new H.cR("self","target","receiver","name")
y=J.bD(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jH:{"^":"a6;a",
i:function(a){return this.a},
p:{
az:function(a,b){return new H.jH("TypeError: "+H.l(P.cm(a))+": type '"+H.fN(a)+"' is not a subtype of type '"+b+"'")}}},
hm:{"^":"a6;a",
i:function(a){return this.a},
p:{
hn:function(a,b){return new H.hm("CastError: "+H.l(P.cm(a))+": type '"+H.fN(a)+"' is not a subtype of type '"+b+"'")}}},
j3:{"^":"a6;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j4:function(a){return new H.j3(a)}}},
b_:{"^":"ie;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gao:function(a){return new H.i5(this,[H.y(this,0)])},
bs:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d5(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d5(y,b)}else return this.hC(b)},
hC:function(a){var z=this.d
if(z==null)return!1
return this.cB(this.bZ(z,this.cA(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bj(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bj(w,b)
x=y==null?null:y.b
return x}else return this.hD(b)},
hD:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bZ(z,this.cA(a))
x=this.cB(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c2()
this.b=z}this.cY(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c2()
this.c=y}this.cY(y,b,c)}else this.hE(b,c)},
hE:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.c2()
this.d=z}y=this.cA(a)
x=this.bZ(z,y)
if(x==null)this.c9(z,y,[this.c3(a,b)])
else{w=this.cB(x,a)
if(w>=0)x[w].b=b
else x.push(this.c3(a,b))}},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aY(this))
z=z.c}},
cY:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.bj(a,b)
if(z==null)this.c9(a,b,this.c3(b,c))
else z.b=c},
eW:function(){this.r=this.r+1&67108863},
c3:function(a,b){var z,y
z=new H.i4(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eW()
return z},
cA:function(a){return J.b5(a)&0x3ffffff},
cB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.d5(this)},
bj:function(a,b){return a[b]},
bZ:function(a,b){return a[b]},
c9:function(a,b,c){a[b]=c},
eP:function(a,b){delete a[b]},
d5:function(a,b){return this.bj(a,b)!=null},
c2:function(){var z=Object.create(null)
this.c9(z,"<non-identifier-key>",z)
this.eP(z,"<non-identifier-key>")
return z},
$isep:1},
i4:{"^":"b;a,b,0c,0d"},
i5:{"^":"hG;a,$ti",
gl:function(a){return this.a.a},
ga0:function(a){var z,y
z=this.a
y=new H.i6(z,z.r,this.$ti)
y.c=z.e
return y}},
i6:{"^":"b;a,b,0c,0d,$ti",
gS:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mN:{"^":"m:18;a",
$1:function(a){return this.a(a)}},
mO:{"^":"m:27;a",
$2:function(a,b){return this.a(a,b)}},
mP:{"^":"m:53;a",
$1:function(a){return this.a(H.L(a))}},
hZ:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseA:1,
$isiW:1,
p:{
i_:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.Y("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mF:function(a){return J.ej(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nh:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bp:function(a){return a},
ix:function(a){return new Int8Array(a)},
aL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aM(b,a))},
mc:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mD(a,b,c))
return b},
ex:{"^":"p;",$isex:1,"%":"ArrayBuffer"},
da:{"^":"p;",$isda:1,$isjI:1,"%":"DataView;ArrayBufferView;d9|fo|fp|iy|fq|fr|b0"},
d9:{"^":"da;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dF},
iy:{"^":"fp;",
k:function(a,b){H.aL(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mE(c)
H.aL(b,a,a.length)
a[b]=c},
$ascn:function(){return[P.u]},
$asx:function(){return[P.u]},
$isk:1,
$ask:function(){return[P.u]},
$isd:1,
$asd:function(){return[P.u]},
"%":"Float32Array|Float64Array"},
b0:{"^":"fr;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aL(b,a,a.length)
a[b]=c},
$ascn:function(){return[P.o]},
$asx:function(){return[P.o]},
$isk:1,
$ask:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]}},
oy:{"^":"b0;",
k:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oz:{"^":"b0;",
k:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oA:{"^":"b0;",
k:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oB:{"^":"b0;",
k:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oC:{"^":"b0;",
k:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oD:{"^":"b0;",
gl:function(a){return a.length},
k:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
db:{"^":"b0;",
gl:function(a){return a.length},
k:function(a,b){H.aL(b,a,a.length)
return a[b]},
bQ:function(a,b,c){return new Uint8Array(a.subarray(b,H.mc(b,c,a.length)))},
$isdb:1,
$isP:1,
"%":";Uint8Array"},
fo:{"^":"d9+x;"},
fp:{"^":"fo+cn;"},
fq:{"^":"d9+x;"},
fr:{"^":"fq+cn;"}}],["","",,P,{"^":"",
ku:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mp()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bt(new P.kw(z),1)).observe(y,{childList:true})
return new P.kv(z,y,x)}else if(self.setImmediate!=null)return P.mq()
return P.mr()},
ph:[function(a){self.scheduleImmediate(H.bt(new P.kx(H.h(a,{func:1,ret:-1})),0))},"$1","mp",4,0,15],
pi:[function(a){self.setImmediate(H.bt(new P.ky(H.h(a,{func:1,ret:-1})),0))},"$1","mq",4,0,15],
pj:[function(a){P.dk(C.r,H.h(a,{func:1,ret:-1}))},"$1","mr",4,0,15],
dk:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.d.a4(a.a,1000)
return P.lw(z<0?0:z,b)},
eP:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bl]})
z=C.d.a4(a.a,1000)
return P.lx(z<0?0:z,b)},
ml:function(a,b){if(H.cd(a,{func:1,args:[P.b,P.ay]}))return b.i4(a,null,P.b,P.ay)
if(H.cd(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.ch(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mk:function(){var z,y
for(;z=$.bq,z!=null;){$.bV=null
y=z.b
$.bq=y
if(y==null)$.bU=null
z.a.$0()}},
pr:[function(){$.dB=!0
try{P.mk()}finally{$.bV=null
$.dB=!1
if($.bq!=null)$.$get$dv().$1(P.fR())}},"$0","fR",0,0,4],
fM:function(a){var z=new P.fh(H.h(a,{func:1,ret:-1}))
if($.bq==null){$.bU=z
$.bq=z
if(!$.dB)$.$get$dv().$1(P.fR())}else{$.bU.b=z
$.bU=z}},
mo:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bq
if(z==null){P.fM(a)
$.bV=$.bU
return}y=new P.fh(a)
x=$.bV
if(x==null){y.b=z
$.bV=y
$.bq=y}else{y.b=x.b
x.b=y
$.bV=y
if(y.b==null)$.bU=y}},
nj:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.T
if(C.j===y){P.cG(null,null,C.j,a)
return}y.toString
P.cG(null,null,y,H.h(y.cg(a),z))},
jC:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.dk(a,b)}return P.dk(a,H.h(y.cg(b),z))},
jD:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bl]}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.eP(a,b)}x=y.dq(b,P.bl)
$.T.toString
return P.eP(a,H.h(x,z))},
cF:function(a,b,c,d,e){var z={}
z.a=d
P.mo(new P.mm(z,e))},
fI:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fJ:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mn:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cG:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cg(d):c.hi(d,-1)
P.fM(d)},
kw:{"^":"m:23;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kv:{"^":"m:34;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kx:{"^":"m:0;a",
$0:function(){this.a.$0()}},
ky:{"^":"m:0;a",
$0:function(){this.a.$0()}},
fy:{"^":"b;a,0b,c",
eC:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bt(new P.lz(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
eD:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bt(new P.ly(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbl:1,
p:{
lw:function(a,b){var z=new P.fy(!0,0)
z.eC(a,b)
return z},
lx:function(a,b){var z=new P.fy(!1,0)
z.eD(a,b)
return z}}},
lz:{"^":"m:4;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ly:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eq(w,x)}z.c=y
this.d.$1(z)}},
bo:{"^":"b;0a,b,c,d,e,$ti",
hM:function(a){if(this.c!==6)return!0
return this.b.b.cM(H.h(this.d,{func:1,ret:P.ai,args:[P.b]}),a.a,P.ai,P.b)},
hB:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cd(z,{func:1,args:[P.b,P.ay]}))return H.dG(w.ib(z,a.a,a.b,null,y,P.ay),x)
else return H.dG(w.cM(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aU:{"^":"b;dj:a<,b,0fD:c<,$ti",
eb:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ml(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aU(0,$.T,[c])
w=b==null?1:3
this.cZ(new P.bo(x,w,a,b,[z,c]))
return x},
ii:function(a,b){return this.eb(a,null,b)},
cZ:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbo")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaU")
z=y.a
if(z<4){y.cZ(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cG(null,null,z,H.h(new P.kN(this,a),{func:1,ret:-1}))}},
de:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbo")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaU")
y=u.a
if(y<4){u.de(a)
return}this.a=y
this.c=u.c}z.a=this.bl(a)
y=this.b
y.toString
P.cG(null,null,y,H.h(new P.kS(z,this),{func:1,ret:-1}))}},
c5:function(){var z=H.f(this.c,"$isbo")
this.c=null
return this.bl(z)},
bl:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d2:function(a){var z,y,x,w
z=H.y(this,0)
H.dG(a,{futureOr:1,type:z})
y=this.$ti
x=H.bs(a,"$isbB",y,"$asbB")
if(x){z=H.bs(a,"$isaU",y,null)
if(z)P.fk(a,this)
else P.kO(a,this)}else{w=this.c5()
H.z(a,z)
this.a=4
this.c=a
P.bP(this,w)}},
bV:[function(a,b){var z
H.f(b,"$isay")
z=this.c5()
this.a=8
this.c=new P.al(a,b)
P.bP(this,z)},function(a){return this.bV(a,null)},"iu","$2","$1","geL",4,2,28],
$isbB:1,
p:{
kO:function(a,b){var z,y,x
b.a=1
try{a.eb(new P.kP(b),new P.kQ(b),null)}catch(x){z=H.at(x)
y=H.bv(x)
P.nj(new P.kR(b,z,y))}},
fk:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaU")
if(z>=4){y=b.c5()
b.a=a.a
b.c=a.c
P.bP(b,y)}else{y=H.f(b.c,"$isbo")
b.a=2
b.c=a
a.de(y)}},
bP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cF(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bP(z.a,b)}y=z.a
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
if(p){H.f(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cF(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kV(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kU(x,b,r).$0()}else if((y&2)!==0)new P.kT(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.H(y).$isbB){if(y.a>=4){n=H.f(t.c,"$isbo")
t.c=null
b=t.bl(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fk(y,t)
return}}m=b.b
n=H.f(m.c,"$isbo")
m.c=null
b=m.bl(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
kN:{"^":"m:0;a,b",
$0:function(){P.bP(this.a,this.b)}},
kS:{"^":"m:0;a,b",
$0:function(){P.bP(this.b,this.a.a)}},
kP:{"^":"m:23;a",
$1:function(a){var z=this.a
z.a=0
z.d2(a)}},
kQ:{"^":"m:29;a",
$2:function(a,b){this.a.bV(a,H.f(b,"$isay"))},
$1:function(a){return this.$2(a,null)}},
kR:{"^":"m:0;a,b,c",
$0:function(){this.a.bV(this.b,this.c)}},
kV:{"^":"m:4;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e9(H.h(w.d,{func:1}),null)}catch(v){y=H.at(v)
x=H.bv(v)
if(this.d){w=H.f(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.H(z).$isbB){if(z instanceof P.aU&&z.gdj()>=4){if(z.gdj()===8){w=this.b
w.b=H.f(z.gfD(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ii(new P.kW(t),null)
w.a=!1}}},
kW:{"^":"m:45;a",
$1:function(a){return this.a}},
kU:{"^":"m:4;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cM(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.at(t)
y=H.bv(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kT:{"^":"m:4;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isal")
w=this.c
if(w.hM(z)&&w.e!=null){v=this.b
v.b=w.hB(z)
v.a=!1}}catch(u){y=H.at(u)
x=H.bv(u)
w=H.f(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fh:{"^":"b;a,0b"},
dg:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aU(0,$.T,[P.o])
z.a=0
this.hJ(new P.jl(z,this),!0,new P.jm(z,y),y.geL())
return y}},
jl:{"^":"m;a,b",
$1:function(a){H.z(a,H.aB(this.b,"dg",0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.aB(this.b,"dg",0)]}}},
jm:{"^":"m:0;a,b",
$0:function(){this.b.d2(this.a.a)}},
eK:{"^":"b;$ti"},
jk:{"^":"b;"},
bl:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa6:1},
m0:{"^":"b;",$ispg:1},
mm:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ez()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lf:{"^":"m0;",
ic:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fI(null,null,this,a,-1)}catch(x){z=H.at(x)
y=H.bv(x)
P.cF(null,null,this,z,H.f(y,"$isay"))}},
ie:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fJ(null,null,this,a,b,-1,c)}catch(x){z=H.at(x)
y=H.bv(x)
P.cF(null,null,this,z,H.f(y,"$isay"))}},
hi:function(a,b){return new P.lh(this,H.h(a,{func:1,ret:b}),b)},
cg:function(a){return new P.lg(this,H.h(a,{func:1,ret:-1}))},
dq:function(a,b){return new P.li(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
e9:function(a,b){H.h(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fI(null,null,this,a,b)},
cM:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.j)return a.$1(b)
return P.fJ(null,null,this,a,b,c,d)},
ib:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.j)return a.$2(b,c)
return P.mn(null,null,this,a,b,c,d,e,f)},
i4:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
lh:{"^":"m;a,b,c",
$0:function(){return this.a.e9(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lg:{"^":"m:4;a,b",
$0:function(){return this.a.ic(this.b)}},
li:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.ie(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i7:function(a,b,c,d,e){return new H.b_(0,0,[d,e])},
i8:function(a,b,c){H.bY(a)
return H.w(H.mG(a,new H.b_(0,0,[b,c])),"$isep",[b,c],"$asep")},
eq:function(a,b){return new H.b_(0,0,[a,b])},
ia:function(a,b,c,d){return new P.l1(0,0,[d])},
hV:function(a,b,c){var z,y
if(P.dC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bW()
C.a.h(y,a)
try{P.mj(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.eL(b,H.h_(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
d_:function(a,b,c){var z,y,x
if(P.dC(a))return b+"..."+c
z=new P.an(b)
y=$.$get$bW()
C.a.h(y,a)
try{x=z
x.a=P.eL(x.gaF(),a,", ")}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.a=y.gaF()+c
y=z.gaF()
return y.charCodeAt(0)==0?y:y},
dC:function(a){var z,y
for(z=0;y=$.$get$bW(),z<y.length;++z)if(a===y[z])return!0
return!1},
mj:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga0(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.l(z.gS(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gS(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gS(z);++x
for(;z.H();t=s,s=r){r=z.gS(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
er:function(a,b,c){var z=P.i7(null,null,null,b,c)
a.J(0,new P.i9(z,b,c))
return z},
d5:function(a){var z,y,x
z={}
if(P.dC(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$bW(),a)
x=y
x.a=x.gaF()+"{"
z.a=!0
J.dQ(a,new P.ig(z,y))
z=y
z.a=z.gaF()+"}"}finally{z=$.$get$bW()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.gaF()
return z.charCodeAt(0)==0?z:z},
l1:{"^":"kX;a,0b,0c,0d,0e,0f,r,$ti",
ga0:function(a){return P.fn(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dx()
this.b=z}return this.d0(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dx()
this.c=y}return this.d0(y,b)}else return this.eE(0,b)},
eE:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dx()
this.d=z}y=this.d3(b)
x=z[y]
if(x==null)z[y]=[this.bU(b)]
else{if(this.d9(x,b)>=0)return!1
x.push(this.bU(b))}return!0},
R:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.df(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.df(this.c,b)
else return this.ft(0,b)},
ft:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eT(z,b)
x=this.d9(y,b)
if(x<0)return!1
this.dl(y.splice(x,1)[0])
return!0},
d0:function(a,b){H.z(b,H.y(this,0))
if(H.f(a[b],"$isdw")!=null)return!1
a[b]=this.bU(b)
return!0},
df:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdw")
if(z==null)return!1
this.dl(z)
delete a[b]
return!0},
d1:function(){this.r=this.r+1&67108863},
bU:function(a){var z,y
z=new P.dw(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d1()
return z},
dl:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d1()},
d3:function(a){return J.b5(a)&0x3ffffff},
eT:function(a,b){return a[this.d3(b)]},
d9:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
p:{
dx:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dw:{"^":"b;a,0b,0c"},
l2:{"^":"b;a,b,0c,0d,$ti",
gS:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fn:function(a,b,c){var z=new P.l2(a,b,[c])
z.c=a.e
return z}}},
kX:{"^":"j5;"},
i9:{"^":"m:8;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cr:{"^":"l3;",$isk:1,$isd:1},
x:{"^":"b;$ti",
ga0:function(a){return new H.es(a,this.gl(a),0,[H.aX(this,a,"x",0)])},
L:function(a,b){return this.k(a,b)},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aX(this,a,"x",0)]})
z=this.gl(a)
if(typeof z!=="number")return H.n(z)
y=0
for(;y<z;++y){b.$1(this.k(a,y))
if(z!==this.gl(a))throw H.a(P.aY(a))}},
il:function(a,b){var z,y,x
z=H.e([],[H.aX(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
ik:function(a){return this.il(a,!0)},
ay:function(a,b,c,d){var z
H.z(d,H.aX(this,a,"x",0))
P.aS(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.d_(a,"[","]")}},
ie:{"^":"aj;"},
ig:{"^":"m:8;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
aj:{"^":"b;$ti",
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aX(this,a,"aj",0),H.aX(this,a,"aj",1)]})
for(z=J.by(this.gao(a));z.H();){y=z.gS(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.au(this.gao(a))},
i:function(a){return P.d5(a)},
$isI:1},
lE:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
ih:{"^":"b;$ti",
k:function(a,b){return J.dP(this.a,b)},
m:function(a,b,c){J.cM(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
J:function(a,b){J.dQ(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.au(this.a)},
i:function(a){return J.ac(this.a)},
$isI:1},
fa:{"^":"lF;a,$ti"},
j7:{"^":"b;$ti",
i:function(a){return P.d_(this,"{","}")},
L:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dR("index"))
if(b<0)H.q(P.a2(b,0,null,"index",null))
for(z=P.fn(this,this.r,H.y(this,0)),y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isk:1},
j5:{"^":"j7;"},
l3:{"^":"b+x;"},
lF:{"^":"ih+lE;$ti"}}],["","",,P,{"^":"",hj:{"^":"c_;a",
hP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aS(c,d,b.length,null,null,null)
z=$.$get$fi()
if(typeof d!=="number")return H.n(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.I(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cJ(C.b.I(b,s))
o=H.cJ(C.b.I(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.c(z,n)
m=z[n]
if(m>=0){n=C.b.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.v(b,x,y)
w.a+=H.cu(r)
x=s
continue}}throw H.a(P.Y("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dU(b,u,d,v,t,k)
else{j=C.d.aj(k-1,4)+1
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aS(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dU(b,u,d,v,t,i)
else{j=C.d.aj(i,4)
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aS(b,d,d,j===2?"==":"=")}return b},
$asc_:function(){return[[P.d,P.o],P.i]},
p:{
dU:function(a,b,c,d,e,f){if(C.d.aj(f,4)!==0)throw H.a(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.Y("Invalid base64 padding, more than two '=' characters",a,b))}}},hk:{"^":"bA;a",
$asbA:function(){return[[P.d,P.o],P.i]}},c_:{"^":"b;$ti"},bA:{"^":"jk;$ti"},hI:{"^":"c_;",
$asc_:function(){return[P.i,[P.d,P.o]]}},k7:{"^":"hI;a",
ghv:function(){return C.F}},ke:{"^":"bA;",
b_:function(a,b,c){var z,y,x,w
z=a.length
P.aS(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.m_(0,0,x)
if(w.eR(a,b,z)!==z)w.dm(J.hb(a,z-1),0)
return C.V.bQ(x,0,w.b)},
cn:function(a){return this.b_(a,0,null)},
$asbA:function(){return[P.i,[P.d,P.o]]}},m_:{"^":"b;a,b,c",
dm:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.c(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.c(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.c(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.c(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.c(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.c(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.c(z,y)
z[y]=128|a&63
return!1}},
eR:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dm(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.c(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.c(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.c(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.c(z,v)
z[v]=128|w&63}}return x}},k8:{"^":"bA;a",
b_:function(a,b,c){var z,y,x,w,v
H.w(a,"$isd",[P.o],"$asd")
z=P.k9(!1,a,b,c)
if(z!=null)return z
y=J.au(a)
P.aS(b,c,y,null,null,null)
x=new P.an("")
w=new P.lX(!1,x,!0,0,0,0)
w.b_(a,b,y)
w.hx(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cn:function(a){return this.b_(a,0,null)},
$asbA:function(){return[[P.d,P.o],P.i]},
p:{
k9:function(a,b,c,d){H.w(b,"$isd",[P.o],"$asd")
if(b instanceof Uint8Array)return P.ka(!1,b,c,d)
return},
ka:function(a,b,c,d){var z,y,x
z=$.$get$fe()
if(z==null)return
y=0===c
if(y&&!0)return P.dq(z,b)
x=b.length
d=P.aS(c,d,x,null,null,null)
if(y&&d===x)return P.dq(z,b)
return P.dq(z,b.subarray(c,d))},
dq:function(a,b){if(P.kc(b))return
return P.kd(a,b)},
kd:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.at(y)}return},
kc:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kb:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.at(y)}return}}},lX:{"^":"b;a,b,c,d,e,f",
hx:function(a,b,c){var z
H.w(b,"$isd",[P.o],"$asd")
if(this.e>0){z=P.Y("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isd",[P.o],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lZ(c)
v=new P.lY(this,b,c,a)
$label0$0:for(u=J.aN(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bM()
if((r&192)!==128){q=P.Y("Bad UTF-8 encoding 0x"+C.d.bd(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.c(C.w,q)
if(z<=C.w[q]){q=P.Y("Overlong encoding of 0x"+C.d.bd(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.Y("Character outside valid Unicode range: 0x"+C.d.bd(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cu(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.bO()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.N()
if(r<0){m=P.Y("Negative UTF-8 code unit: -0x"+C.d.bd(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Y("Bad UTF-8 encoding 0x"+C.d.bd(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lZ:{"^":"m:41;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isd",[P.o],"$asd")
z=this.a
for(y=J.aN(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bM()
if((w&127)!==w)return x-b}return z-b}},lY:{"^":"m:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ca(this.d,a,b)}}}],["","",,P,{"^":"",
bX:function(a,b,c){var z
H.h(b,{func:1,ret:P.o,args:[P.i]})
z=H.iO(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.Y(a,null,null))},
hK:function(a){var z=J.H(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.be(a)+"'"},
ib:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hX(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isd",[d],"$asd")},
et:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.ga0(a);x.H();)C.a.h(y,H.z(x.gS(x),c))
if(b)return y
return H.w(J.bD(y),"$isd",z,"$asd")},
ca:function(a,b,c){var z,y
z=P.o
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isba",[z],"$asba")
y=a.length
c=P.aS(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.N()
z=c<y}else z=!0
return H.eD(z?C.a.bQ(a,b,c):a)}if(!!J.H(a).$isdb)return H.iQ(a,b,P.aS(b,c,a.length,null,null,null))
return P.jn(a,b,c)},
jn:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.o],"$ask")
if(b<0)throw H.a(P.a2(b,0,J.au(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a2(c,b,J.au(a),null,null))
y=J.by(a)
for(x=0;x<b;++x)if(!y.H())throw H.a(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gS(y))
else for(x=b;x<c;++x){if(!y.H())throw H.a(P.a2(c,b,x,null,null))
w.push(y.gS(y))}return H.eD(w)},
iX:function(a,b,c){return new H.hZ(a,H.i_(a,!1,!0,!1))},
cA:function(){var z=H.iG()
if(z!=null)return P.k_(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hK(a)},
v:function(a){return new P.fj(a)},
ic:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.o]})
z=H.e([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dN:function(a){H.nh(a)},
k_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.fb(b>0||c<c?C.b.v(a,b,c):a,5,null).gee()
else if(y===32)return P.fb(C.b.v(a,z,c),0,null).gee()}x=new Array(8)
x.fixed$length=Array
w=H.e(x,[P.o])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fK(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cR()
if(v>=b)if(P.fK(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.N()
if(typeof r!=="number")return H.n(r)
if(q<r)r=q
if(typeof s!=="number")return s.N()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.N()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.N()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.aa(a,"..",s)))n=r>s+2&&C.b.aa(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.aa(a,"file",b)){if(u<=b){if(!C.b.aa(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.v(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aS(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.aa(a,"http",b)){if(x&&t+3===s&&C.b.aa(a,"80",t+1))if(b===0&&!0){a=C.b.aS(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.v(a,b,t)+C.b.v(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.aa(a,"https",b)){if(x&&t+4===s&&C.b.aa(a,"443",t+1))if(b===0&&!0){a=C.b.aS(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.v(a,b,t)+C.b.v(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.v(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lk(a,v,u,t,s,r,q,o)}return P.lG(a,b,c,v,u,t,s,r,q,o)},
fd:function(a,b){var z=P.i
return C.a.hy(H.e(a.split("&"),[z]),P.eq(z,z),new P.k2(b),[P.I,P.i,P.i])},
jY:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jZ(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bX(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.bO()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.c(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bX(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.bO()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.c(y,u)
y[u]=s
return y},
fc:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k0(a)
y=new P.k1(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.o])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.X(a,w)
if(s===58){if(w===b){++w
if(C.b.X(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaz(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jY(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.c(o,l)
o[l]=0
i=l+1
if(i>=n)return H.c(o,i)
o[i]=0
l+=2}else{i=C.d.aI(k,8)
if(l<0||l>=n)return H.c(o,l)
o[l]=i
i=l+1
if(i>=n)return H.c(o,i)
o[i]=k&255
l+=2}}return o},
md:function(){var z,y,x,w,v
z=P.ic(22,new P.mf(),!0,P.P)
y=new P.me(z)
x=new P.mg()
w=new P.mh()
v=H.f(y.$2(0,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isP")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isP")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isP"),"]",5)
v=H.f(y.$2(9,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isP"),"az",21)
v=H.f(y.$2(21,245),"$isP")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fK:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isd",[P.o],"$asd")
z=$.$get$fL()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.c(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.c(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ai:{"^":"b;"},
"+bool":0,
am:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&this.b===b.b},
gU:function(a){var z=this.a
return(z^C.d.aI(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hz(H.iN(this))
y=P.c1(H.iL(this))
x=P.c1(H.iH(this))
w=P.c1(H.iI(this))
v=P.c1(H.iK(this))
u=P.c1(H.iM(this))
t=P.hA(H.iJ(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hz:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c1:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"X;"},
"+double":0,
b7:{"^":"b;a",
j:function(a,b){return new P.b7(C.d.ae(this.a*b))},
N:function(a,b){return C.d.N(this.a,H.f(b,"$isb7").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.b7))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hF()
y=this.a
if(y<0)return"-"+new P.b7(0-y).i(0)
x=z.$1(C.d.a4(y,6e7)%60)
w=z.$1(C.d.a4(y,1e6)%60)
v=new P.hE().$1(y%1e6)
return""+C.d.a4(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
ec:function(a,b,c,d,e,f){return new P.b7(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hE:{"^":"m:25;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hF:{"^":"m:25;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a6:{"^":"b;"},
ez:{"^":"a6;",
i:function(a){return"Throw of null."}},
aO:{"^":"a6;a,b,c,d",
gbX:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbW:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbX()+y+x
if(!this.a)return w
v=this.gbW()
u=P.cm(this.b)
return w+v+": "+H.l(u)},
p:{
bZ:function(a){return new P.aO(!1,null,null,a)},
ch:function(a,b,c){return new P.aO(!0,a,b,c)},
dR:function(a){return new P.aO(!1,null,a,"Must not be null")}}},
cv:{"^":"aO;e,f,a,b,c,d",
gbX:function(){return"RangeError"},
gbW:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cw:function(a,b,c){return new P.cv(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cv(b,c,!0,a,d,"Invalid value")},
aS:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.a(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.a(P.a2(b,a,c,"end",f))
return b}return c}}},
hT:{"^":"aO;e,l:f>,a,b,c,d",
gbX:function(){return"RangeError"},
gbW:function(){if(J.h7(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.D(e!=null?e:J.au(b))
return new P.hT(b,z,!0,a,c,"Index out of range")}}},
jW:{"^":"a6;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jW(a)}}},
jT:{"^":"a6;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cb:function(a){return new P.jT(a)}}},
jh:{"^":"a6;a",
i:function(a){return"Bad state: "+this.a}},
ht:{"^":"a6;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cm(z))+"."},
p:{
aY:function(a){return new P.ht(a)}}},
iC:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa6:1},
eI:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa6:1},
hy:{"^":"a6;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fj:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hQ:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.v(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.I(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.X(w,s)
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
m=""}l=C.b.v(w,o,p)
return y+n+l+m+"\n"+C.b.j(" ",x-o+n.length)+"^\n"},
p:{
Y:function(a,b,c){return new P.hQ(a,b,c)}}},
o:{"^":"X;"},
"+int":0,
k:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga0(this)
for(y=0;z.H();)++y
return y},
L:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dR("index"))
if(b<0)H.q(P.a2(b,0,null,"index",null))
for(z=this.ga0(this),y=0;z.H();){x=z.gS(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hV(this,"(",")")}},
d0:{"^":"b;$ti"},
d:{"^":"b;$ti",$isk:1},
"+List":0,
I:{"^":"b;$ti"},
E:{"^":"b;",
gU:function(a){return P.b.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
X:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gU:function(a){return H.bK(this)},
i:function(a){return"Instance of '"+H.be(this)+"'"},
toString:function(){return this.i(this)}},
ay:{"^":"b;"},
i:{"^":"b;",$iseA:1},
"+String":0,
an:{"^":"b;aF:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isp0:1,
p:{
eL:function(a,b,c){var z=J.by(b)
if(!z.H())return a
if(c.length===0){do a+=H.l(z.gS(z))
while(z.H())}else{a+=H.l(z.gS(z))
for(;z.H();)a=a+c+H.l(z.gS(z))}return a}}},
k2:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isI",[z,z],"$asI")
H.L(b)
y=J.aN(b).dX(b,"=")
if(y===-1){if(b!=="")J.cM(a,P.dz(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aA(b,y+1)
z=this.a
J.cM(a,P.dz(x,0,x.length,z,!0),P.dz(w,0,w.length,z,!0))}return a}},
jZ:{"^":"m:43;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv4 address, "+a,this.a,b))}},
k0:{"^":"m:40;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k1:{"^":"m:39;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bX(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.N()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cC:{"^":"b;bP:a<,b,c,d,e5:e>,f,r,0x,0y,0z,0Q,0ch",
gef:function(){return this.b},
gcz:function(a){var z=this.c
if(z==null)return""
if(C.b.a9(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbH:function(a){var z=this.d
if(z==null)return P.fA(this.a)
return z},
gcI:function(a){var z=this.f
return z==null?"":z},
gdS:function(){var z=this.r
return z==null?"":z},
cL:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isI",[P.i,null],"$asI")
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
if(x&&!C.b.a9(d,"/"))d="/"+d
g=P.dy(g,0,0,h)
return new P.cC(i,j,c,f,d,g,this.r)},
cK:function(a,b){return this.cL(a,null,null,null,null,null,null,b,null,null)},
gba:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.fa(P.fd(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdT:function(){return this.c!=null},
gdW:function(){return this.f!=null},
gdU:function(){return this.r!=null},
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
u:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.H(b)
if(!!z.$isdp){y=this.a
x=b.gbP()
if(y==null?x==null:y===x)if(this.c!=null===b.gdT()){y=this.b
x=b.gef()
if(y==null?x==null:y===x){y=this.gcz(this)
x=z.gcz(b)
if(y==null?x==null:y===x){y=this.gbH(this)
x=z.gbH(b)
if(y==null?x==null:y===x)if(this.e===z.ge5(b)){y=this.f
x=y==null
if(!x===b.gdW()){if(x)y=""
if(y===z.gcI(b)){z=this.r
y=z==null
if(!y===b.gdU()){if(y)z=""
z=z===b.gdS()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.i(0))
this.z=z}return z},
$isdp:1,
p:{
cD:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isd",[P.o],"$asd")
if(c===C.k){z=$.$get$fF().b
if(typeof b!=="string")H.q(H.ab(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.aB(c,"c_",0))
y=c.ghv().cn(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.c(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cu(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lG:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lR(a,b,d)
else{if(d===b)P.bR(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lS(a,z,e-1):""
x=P.lL(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.n(g)
v=w<g?P.lO(P.bX(C.b.v(a,w,g),new P.lH(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lM(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.N()
t=h<i?P.dy(a,h+1,i,null):null
return new P.cC(j,y,x,v,u,t,i<c?P.lK(a,i+1,c):null)},
fA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bR:function(a,b,c){throw H.a(P.Y(c,a,b))},
lO:function(a,b){if(a!=null&&a===P.fA(b))return
return a},
lL:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.K()
z=c-1
if(C.b.X(a,z)!==93)P.bR(a,b,"Missing end `]` to match `[` in host")
P.fc(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.n(c)
y=b
for(;y<c;++y)if(C.b.X(a,y)===58){P.fc(a,b,c)
return"["+a+"]"}return P.lU(a,b,c)},
lU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.n(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.X(a,z)
if(v===37){u=P.fH(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.c(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.c(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bR(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fB(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lR:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fD(C.b.I(a,b)))P.bR(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.c(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bR(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lI(y?a.toLowerCase():a)},
lI:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lS:function(a,b,c){return P.bS(a,b,c,C.R)},
lM:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bS(a,b,c,C.y):C.t.j3(d,new P.lN(),P.i).F(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a9(w,"/"))w="/"+w
return P.lT(w,e,f)},
lT:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a9(a,"/"))return P.lV(a,!z||c)
return P.lW(a)},
dy:function(a,b,c,d){var z,y
z={}
H.w(d,"$isI",[P.i,null],"$asI")
if(a!=null){if(d!=null)throw H.a(P.bZ("Both query and queryParameters specified"))
return P.bS(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.J(0,new P.lP(new P.lQ(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lK:function(a,b,c){return P.bS(a,b,c,C.n)},
fH:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.X(a,b+1)
x=C.b.X(a,z)
w=H.cJ(y)
v=H.cJ(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aI(u,4)
if(z>=8)return H.c(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cu(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fB:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.o])
C.a.m(y,0,37)
C.a.m(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.o])
for(v=0;--w,w>=0;x=128){u=C.d.fL(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.ca(y,0,null)},
bS:function(a,b,c,d){var z=P.fG(a,b,c,H.w(d,"$isd",[P.o],"$asd"),!1)
return z==null?C.b.v(a,b,c):z},
fG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isd",[P.o],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.N()
if(typeof c!=="number")return H.n(c)
if(!(y<c))break
c$0:{v=C.b.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.c(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fH(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.c(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bR(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fB(v)}}if(w==null)w=new P.an("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.n(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.N()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fE:function(a){if(C.b.a9(a,"."))return!0
return C.b.dX(a,"/.")!==-1},
lW:function(a){var z,y,x,w,v,u,t
if(!P.fE(a))return a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.N(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.c(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.F(z,"/")},
lV:function(a,b){var z,y,x,w,v,u
if(!P.fE(a))return!b?P.fC(a):a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaz(z)!==".."){if(0>=z.length)return H.c(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.c(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaz(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.c(z,0)
C.a.m(z,0,P.fC(z[0]))}return C.a.F(z,"/")},
fC:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fD(J.h8(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aA(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.c(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lJ:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bZ("Invalid URL encoding"))}}return z},
dz:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dH(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.I(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.a4(y.v(a,b,c))}else{u=H.e([],[P.o])
for(x=b;x<c;++x){w=y.I(a,x)
if(w>127)throw H.a(P.bZ("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bZ("Truncated URI"))
C.a.h(u,P.lJ(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isd",[P.o],"$asd")
return new P.k8(!1).cn(u)},
fD:function(a){var z=a|32
return 97<=z&&z<=122}}},
lH:{"^":"m:22;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.Y("Invalid port",this.a,z+1))}},
lN:{"^":"m:47;",
$1:function(a){return P.cD(C.T,a,C.k,!1)}},
lQ:{"^":"m:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cD(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cD(C.p,b,C.k,!0))}}},
lP:{"^":"m:38;a",
$2:function(a,b){var z,y
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(z=J.by(H.h_(b,"$isk")),y=this.a;z.H();)y.$2(a,H.L(z.gS(z)))}},
jX:{"^":"b;a,b,c",
gee:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.c(z,0)
y=this.a
z=z[0]+1
x=C.b.dY(y,"?",z)
w=y.length
if(x>=0){v=P.bS(y,x+1,w,C.n)
w=x}else v=null
z=new P.kD(this,"data",null,null,null,P.bS(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.c(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
fb:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.o])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.Y("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.Y("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaz(z)
if(v!==44||x!==t+7||!C.b.aa(a,"base64",t+1))throw H.a(P.Y("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hP(0,a,s,y)
else{r=P.fG(a,s,y,C.n,!0)
if(r!=null)a=C.b.aS(a,s,y,r)}return new P.jX(a,z,c)}}},
mf:{"^":"m:33;",
$1:function(a){return new Uint8Array(96)}},
me:{"^":"m:30;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.c(z,a)
z=z[a]
J.hc(z,0,96,b)
return z}},
mg:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.c(a,x)
a[x]=c}}},
mh:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.c(a,x)
a[x]=c}}},
lk:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdT:function(){return this.c>0},
gdV:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.n(y)
y=z+1<y
z=y}else z=!1
return z},
gdW:function(){var z=this.f
if(typeof z!=="number")return z.N()
return z<this.r},
gdU:function(){return this.r<this.a.length},
gda:function(){return this.b===4&&C.b.a9(this.a,"http")},
gdc:function(){return this.b===5&&C.b.a9(this.a,"https")},
gbP:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gda()){this.x="http"
z="http"}else if(this.gdc()){this.x="https"
z="https"}else if(z===4&&C.b.a9(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a9(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
gef:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcz:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbH:function(a){var z
if(this.gdV()){z=this.d
if(typeof z!=="number")return z.B()
return P.bX(C.b.v(this.a,z+1,this.e),null,null)}if(this.gda())return 80
if(this.gdc())return 443
return 0},
ge5:function(a){return C.b.v(this.a,this.e,this.f)},
gcI:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.N()
return z<y?C.b.v(this.a,z+1,y):""},
gdS:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aA(y,z+1):""},
gba:function(){var z=this.f
if(typeof z!=="number")return z.N()
if(z>=this.r)return C.U
z=P.i
return new P.fa(P.fd(this.gcI(this),C.k),[z,z])},
cL:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isI",[P.i,null],"$asI")
i=this.gbP()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gdV()?this.gbH(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a9(d,"/"))d="/"+d
g=P.dy(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aA(y,x+1)
return new P.cC(i,j,c,f,d,g,b)},
cK:function(a,b){return this.cL(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.H(b)
if(!!z.$isdp)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdp:1},
kD:{"^":"cC;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cU:function(a,b){var z=document.createElement("canvas")
return z},
hH:function(a){H.f(a,"$isa7")
return"wheel"},
eh:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
hU:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$isei")
try{J.he(z,a)}catch(x){H.at(x)}return z},
cB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fm:function(a,b,c,d){var z,y
z=W.cB(W.cB(W.cB(W.cB(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fO:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dq(a,b)},
a8:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nu:{"^":"de;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
nv:{"^":"p;0l:length=","%":"AccessibleNodeList"},
nw:{"^":"a8;0a2:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nx:{"^":"a8;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cQ:{"^":"p;",$iscQ:1,"%":";Blob"},
nD:{"^":"a8;0a2:type}","%":"HTMLButtonElement"},
cT:{"^":"a8;",
bN:function(a,b,c){if(c!=null)return a.getContext(b,P.mt(c,null))
return a.getContext(b)},
eh:function(a,b){return this.bN(a,b,null)},
$iscT:1,
"%":"HTMLCanvasElement"},
e0:{"^":"p;",$ise0:1,"%":"CanvasRenderingContext2D"},
nF:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nH:{"^":"ck;0l:length=","%":"CSSPerspective"},
nI:{"^":"cX;0q:x=,0t:y=","%":"CSSPositionValue"},
nJ:{"^":"ck;0q:x=,0t:y=","%":"CSSRotation"},
b6:{"^":"p;",$isb6:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nK:{"^":"ck;0q:x=,0t:y=","%":"CSSScale"},
nL:{"^":"kC;0l:length=",
ei:function(a,b){var z=a.getPropertyValue(this.eI(a,b))
return z==null?"":z},
eI:function(a,b){var z,y
z=$.$get$e5()
y=z[b]
if(typeof y==="string")return y
y=this.fM(a,b)
z[b]=y
return y},
fM:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hB()+b
if(z in a)return z
return b},
gci:function(a){return a.bottom},
gan:function(a){return a.height},
gaQ:function(a){return a.left},
gbb:function(a){return a.right},
gbf:function(a){return a.top},
gaq:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hx:{"^":"b;",
gaQ:function(a){return this.ei(a,"left")}},
cX:{"^":"p;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ck:{"^":"p;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nM:{"^":"cX;0l:length=","%":"CSSTransformValue"},
nN:{"^":"ck;0q:x=,0t:y=","%":"CSSTranslation"},
nO:{"^":"cX;0l:length=","%":"CSSUnparsedValue"},
nP:{"^":"p;0l:length=","%":"DataTransferItemList"},
nQ:{"^":"p;0q:x=,0t:y=","%":"DeviceAcceleration"},
nR:{"^":"p;",
i:function(a){return String(a)},
"%":"DOMException"},
nS:{"^":"hC;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hC:{"^":"p;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
nT:{"^":"kF;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.w(c,"$isa9",[P.X],"$asa9")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a9,P.X]]},
$asx:function(){return[[P.a9,P.X]]},
$isk:1,
$ask:function(){return[[P.a9,P.X]]},
$isd:1,
$asd:function(){return[[P.a9,P.X]]},
$asB:function(){return[[P.a9,P.X]]},
"%":"ClientRectList|DOMRectList"},
hD:{"^":"p;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaq(a))+" x "+H.l(this.gan(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bs(b,"$isa9",[P.X],"$asa9")
if(!z)return!1
z=J.aW(b)
return a.left===z.gaQ(b)&&a.top===z.gbf(b)&&this.gaq(a)===z.gaq(b)&&this.gan(a)===z.gan(b)},
gU:function(a){return W.fm(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaq(a)&0x1FFFFFFF,this.gan(a)&0x1FFFFFFF)},
gci:function(a){return a.bottom},
gan:function(a){return a.height},
gaQ:function(a){return a.left},
gbb:function(a){return a.right},
gbf:function(a){return a.top},
gaq:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa9:1,
$asa9:function(){return[P.X]},
"%":";DOMRectReadOnly"},
nU:{"^":"kH;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isd:1,
$asd:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"DOMStringList"},
nV:{"^":"p;0l:length=","%":"DOMTokenList"},
kB:{"^":"cr;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return H.f(z[b],"$isV")},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isV")
z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga0:function(a){var z=this.ik(this)
return new J.av(z,z.length,0,[H.y(z,0)])},
ay:function(a,b,c,d){throw H.a(P.cb(null))},
$asx:function(){return[W.V]},
$ask:function(){return[W.V]},
$asd:function(){return[W.V]}},
V:{"^":"J;",
gcm:function(a){return new W.kB(a,a.children)},
gbq:function(a){return P.iT(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
i:function(a){return a.localName},
$isV:1,
"%":";Element"},
nW:{"^":"a8;0a2:type}","%":"HTMLEmbedElement"},
ad:{"^":"p;",$isad:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"p;",
dn:["el",function(a,b,c,d){H.h(c,{func:1,args:[W.ad]})
if(c!=null)this.eF(a,b,c,!1)}],
eF:function(a,b,c,d){return a.addEventListener(b,H.bt(H.h(c,{func:1,args:[W.ad]}),1),!1)},
$isa7:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fs|ft|fw|fx"},
aZ:{"^":"cQ;",$isaZ:1,"%":"File"},
ee:{"^":"kM;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isaZ")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aZ]},
$asx:function(){return[W.aZ]},
$isk:1,
$ask:function(){return[W.aZ]},
$isd:1,
$asd:function(){return[W.aZ]},
$isee:1,
$asB:function(){return[W.aZ]},
"%":"FileList"},
oe:{"^":"a7;0l:length=","%":"FileWriter"},
oh:{"^":"a8;0l:length=","%":"HTMLFormElement"},
b9:{"^":"p;",$isb9:1,"%":"Gamepad"},
oi:{"^":"de;0q:x=,0t:y=","%":"Gyroscope"},
oj:{"^":"p;0l:length=","%":"History"},
ok:{"^":"kZ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isk:1,
$ask:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asB:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c3:{"^":"p;0ds:data=",$isc3:1,"%":"ImageData"},
cZ:{"^":"a8;",$iscZ:1,"%":"HTMLImageElement"},
ei:{"^":"a8;0a2:type}",$isei:1,"%":"HTMLInputElement"},
bE:{"^":"dl;",$isbE:1,"%":"KeyboardEvent"},
op:{"^":"a8;0a2:type}","%":"HTMLLinkElement"},
oq:{"^":"p;",
i:function(a){return String(a)},
"%":"Location"},
or:{"^":"de;0q:x=,0t:y=","%":"Magnetometer"},
ot:{"^":"p;0l:length=","%":"MediaList"},
ou:{"^":"a7;",
dn:function(a,b,c,d){H.h(c,{func:1,args:[W.ad]})
if(b==="message")a.start()
this.el(a,b,c,!1)},
"%":"MessagePort"},
ov:{"^":"l4;",
k:function(a,b){return P.aV(a.get(H.L(b)))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gao:function(a){var z=H.e([],[P.i])
this.J(a,new W.iu(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iu:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ow:{"^":"l5;",
k:function(a,b){return P.aV(a.get(H.L(b)))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gao:function(a){var z=H.e([],[P.i])
this.J(a,new W.iv(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iv:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bc:{"^":"p;",$isbc:1,"%":"MimeType"},
ox:{"^":"l7;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isk:1,
$ask:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asB:function(){return[W.bc]},
"%":"MimeTypeArray"},
ag:{"^":"dl;",$isag:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kA:{"^":"cr;a",
m:function(a,b,c){var z,y
H.D(b)
H.f(c,"$isJ")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.c(y,b)
z.replaceChild(c,y[b])},
ga0:function(a){var z=this.a.childNodes
return new W.ef(z,z.length,-1,[H.aX(C.W,z,"B",0)])},
ay:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
$asx:function(){return[W.J]},
$ask:function(){return[W.J]},
$asd:function(){return[W.J]}},
J:{"^":"a7;",
i8:function(a,b){var z,y
try{z=a.parentNode
J.h9(z,b,a)}catch(y){H.at(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.em(a):z},
fw:function(a,b,c){return a.replaceChild(b,c)},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iz:{"^":"l9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isk:1,
$ask:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asB:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
oF:{"^":"a8;0a2:type}","%":"HTMLOListElement"},
oG:{"^":"a8;0a2:type}","%":"HTMLObjectElement"},
bd:{"^":"p;0l:length=",$isbd:1,"%":"Plugin"},
oK:{"^":"ld;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbd")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asx:function(){return[W.bd]},
$isk:1,
$ask:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asB:function(){return[W.bd]},
"%":"PluginArray"},
oP:{"^":"p;0a2:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oQ:{"^":"lj;",
k:function(a,b){return P.aV(a.get(H.L(b)))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gao:function(a){var z=H.e([],[P.i])
this.J(a,new W.j2(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j2:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oS:{"^":"a8;0a2:type}","%":"HTMLScriptElement"},
oU:{"^":"a8;0l:length=","%":"HTMLSelectElement"},
de:{"^":"a7;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bf:{"^":"a7;",$isbf:1,"%":"SourceBuffer"},
oV:{"^":"ft;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isk:1,
$ask:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"SourceBufferList"},
oW:{"^":"a8;0a2:type}","%":"HTMLSourceElement"},
bg:{"^":"p;",$isbg:1,"%":"SpeechGrammar"},
oX:{"^":"lm;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbg")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isk:1,
$ask:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asB:function(){return[W.bg]},
"%":"SpeechGrammarList"},
bh:{"^":"p;0l:length=",$isbh:1,"%":"SpeechRecognitionResult"},
oZ:{"^":"lp;",
k:function(a,b){return a.getItem(H.L(b))},
m:function(a,b,c){a.setItem(b,H.L(c))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gao:function(a){var z=H.e([],[P.i])
this.J(a,new W.jj(z))
return z},
gl:function(a){return a.length},
$asaj:function(){return[P.i,P.i]},
$isI:1,
$asI:function(){return[P.i,P.i]},
"%":"Storage"},
jj:{"^":"m:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p1:{"^":"a8;0a2:type}","%":"HTMLStyleElement"},
bi:{"^":"p;",$isbi:1,"%":"CSSStyleSheet|StyleSheet"},
dh:{"^":"a8;",$isdh:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bj:{"^":"a7;",$isbj:1,"%":"TextTrack"},
bk:{"^":"a7;",$isbk:1,"%":"TextTrackCue|VTTCue"},
p6:{"^":"lv;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbk")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bk]},
$asx:function(){return[W.bk]},
$isk:1,
$ask:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asB:function(){return[W.bk]},
"%":"TextTrackCueList"},
p7:{"^":"fx;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbj")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isk:1,
$ask:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asB:function(){return[W.bj]},
"%":"TextTrackList"},
p8:{"^":"p;0l:length=","%":"TimeRanges"},
bm:{"^":"p;",$isbm:1,"%":"Touch"},
bn:{"^":"dl;",$isbn:1,"%":"TouchEvent"},
p9:{"^":"lB;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbm")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bm]},
$asx:function(){return[W.bm]},
$isk:1,
$ask:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asB:function(){return[W.bm]},
"%":"TouchList"},
pa:{"^":"p;0l:length=","%":"TrackDefaultList"},
dl:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pc:{"^":"p;",
i:function(a){return String(a)},
"%":"URL"},
pe:{"^":"p;0q:x=","%":"VRStageBoundsPoint"},
pf:{"^":"a7;0l:length=","%":"VideoTrackList"},
bO:{"^":"ag;",
ghr:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghq:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbO:1,
"%":"WheelEvent"},
kt:{"^":"a7;",
fz:function(a,b){return a.requestAnimationFrame(H.bt(H.h(b,{func:1,ret:-1,args:[P.X]}),1))},
eQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
pk:{"^":"m2;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb6")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b6]},
$asx:function(){return[W.b6]},
$isk:1,
$ask:function(){return[W.b6]},
$isd:1,
$asd:function(){return[W.b6]},
$asB:function(){return[W.b6]},
"%":"CSSRuleList"},
pl:{"^":"hD;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bs(b,"$isa9",[P.X],"$asa9")
if(!z)return!1
z=J.aW(b)
return a.left===z.gaQ(b)&&a.top===z.gbf(b)&&a.width===z.gaq(b)&&a.height===z.gan(b)},
gU:function(a){return W.fm(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gan:function(a){return a.height},
gaq:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
pn:{"^":"m4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb9")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b9]},
$asx:function(){return[W.b9]},
$isk:1,
$ask:function(){return[W.b9]},
$isd:1,
$asd:function(){return[W.b9]},
$asB:function(){return[W.b9]},
"%":"GamepadList"},
po:{"^":"m6;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isk:1,
$ask:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asB:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pp:{"^":"m8;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asB:function(){return[W.bh]},
"%":"SpeechRecognitionResultList"},
pq:{"^":"ma;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbi")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asx:function(){return[W.bi]},
$isk:1,
$ask:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asB:function(){return[W.bi]},
"%":"StyleSheetList"},
kI:{"^":"dg;a,b,c,$ti",
hJ:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a1(this.a,this.b,a,!1,z)}},
pm:{"^":"kI;a,b,c,$ti"},
kJ:{"^":"eK;a,b,c,d,e,$ti",
fQ:function(){var z=this.d
if(z!=null&&this.a<=0)J.ha(this.b,this.c,z,!1)},
p:{
a1:function(a,b,c,d,e){var z=c==null?null:W.fO(new W.kK(c),W.ad)
z=new W.kJ(0,a,b,z,!1,[e])
z.fQ()
return z}}},
kK:{"^":"m:5;a",
$1:function(a){return this.a.$1(H.f(a,"$isad"))}},
B:{"^":"b;$ti",
ga0:function(a){return new W.ef(a,this.gl(a),-1,[H.aX(this,a,"B",0)])},
ay:function(a,b,c,d){H.z(d,H.aX(this,a,"B",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
ef:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dP(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gS:function(a){return this.d}},
kC:{"^":"p+hx;"},
kE:{"^":"p+x;"},
kF:{"^":"kE+B;"},
kG:{"^":"p+x;"},
kH:{"^":"kG+B;"},
kL:{"^":"p+x;"},
kM:{"^":"kL+B;"},
kY:{"^":"p+x;"},
kZ:{"^":"kY+B;"},
l4:{"^":"p+aj;"},
l5:{"^":"p+aj;"},
l6:{"^":"p+x;"},
l7:{"^":"l6+B;"},
l8:{"^":"p+x;"},
l9:{"^":"l8+B;"},
lc:{"^":"p+x;"},
ld:{"^":"lc+B;"},
lj:{"^":"p+aj;"},
fs:{"^":"a7+x;"},
ft:{"^":"fs+B;"},
ll:{"^":"p+x;"},
lm:{"^":"ll+B;"},
lp:{"^":"p+aj;"},
lu:{"^":"p+x;"},
lv:{"^":"lu+B;"},
fw:{"^":"a7+x;"},
fx:{"^":"fw+B;"},
lA:{"^":"p+x;"},
lB:{"^":"lA+B;"},
m1:{"^":"p+x;"},
m2:{"^":"m1+B;"},
m3:{"^":"p+x;"},
m4:{"^":"m3+B;"},
m5:{"^":"p+x;"},
m6:{"^":"m5+B;"},
m7:{"^":"p+x;"},
m8:{"^":"m7+B;"},
m9:{"^":"p+x;"},
ma:{"^":"m9+B;"}}],["","",,P,{"^":"",
mw:function(a){var z,y
z=J.H(a)
if(!!z.$isc3){y=z.gds(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fz(a.data,a.height,a.width)},
mv:function(a){if(a instanceof P.fz)return{data:a.a,height:a.b,width:a.c}
return a},
aV:function(a){var z,y,x,w,v
if(a==null)return
z=P.eq(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.L(y[w])
z.m(0,v,a[v])}return z},
mt:function(a,b){var z={}
a.J(0,new P.mu(z))
return z},
eb:function(){var z=$.ea
if(z==null){z=J.cN(window.navigator.userAgent,"Opera",0)
$.ea=z}return z},
hB:function(){var z,y
z=$.e7
if(z!=null)return z
y=$.e8
if(y==null){y=J.cN(window.navigator.userAgent,"Firefox",0)
$.e8=y}if(y)z="-moz-"
else{y=$.e9
if(y==null){y=!P.eb()&&J.cN(window.navigator.userAgent,"Trident/",0)
$.e9=y}if(y)z="-ms-"
else z=P.eb()?"-o-":"-webkit-"}$.e7=z
return z},
ls:{"^":"b;",
dQ:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
bL:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.H(a)
if(!!y.$isam)return new Date(a.a)
if(!!y.$isiW)throw H.a(P.cb("structured clone of RegExp"))
if(!!y.$isaZ)return a
if(!!y.$iscQ)return a
if(!!y.$isee)return a
if(!!y.$isc3)return a
if(!!y.$isex||!!y.$isda)return a
if(!!y.$isI){x=this.dQ(a)
w=this.b
if(x>=w.length)return H.c(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.J(a,new P.lt(z,this))
return z.a}if(!!y.$isd){x=this.dQ(a)
z=this.b
if(x>=z.length)return H.c(z,x)
v=z[x]
if(v!=null)return v
return this.ho(a,x)}throw H.a(P.cb("structured clone of other type"))},
ho:function(a,b){var z,y,x,w
z=J.aN(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.n(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.bL(z.k(a,w)))
return x}},
lt:{"^":"m:8;a,b",
$2:function(a,b){this.a.a[a]=this.b.bL(b)}},
fz:{"^":"b;ds:a>,b,c",$isc3:1},
mu:{"^":"m:8;a",
$2:function(a,b){this.a[a]=b}},
fv:{"^":"ls;a,b"},
hN:{"^":"cr;a,b",
gaW:function(){var z,y,x
z=this.b
y=H.aB(z,"x",0)
x=W.V
return new H.ii(new H.kr(z,H.h(new P.hO(),{func:1,ret:P.ai,args:[y]}),[y]),H.h(new P.hP(),{func:1,ret:x,args:[y]}),[y,x])},
J:function(a,b){H.h(b,{func:1,ret:-1,args:[W.V]})
C.a.J(P.et(this.gaW(),!1,W.V),b)},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isV")
z=this.gaW()
J.hd(z.b.$1(J.cO(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ay:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.au(this.gaW().a)},
k:function(a,b){var z=this.gaW()
return z.b.$1(J.cO(z.a,b))},
ga0:function(a){var z=P.et(this.gaW(),!1,W.V)
return new J.av(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.V]},
$ask:function(){return[W.V]},
$asd:function(){return[W.V]}},
hO:{"^":"m:26;",
$1:function(a){return!!J.H(H.f(a,"$isJ")).$isV}},
hP:{"^":"m:54;",
$1:function(a){return H.j(H.f(a,"$isJ"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fl:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bJ:{"^":"b;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.bs(b,"$isbJ",[P.X],null)
if(!z)return!1
z=this.a
y=J.aW(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gU:function(a){var z,y
z=J.b5(this.a)
y=J.b5(this.b)
return P.fl(P.bQ(P.bQ(0,z),y))},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=H.y(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.j()
return new P.bJ(z,H.z(x*b,y),this.$ti)}},
le:{"^":"b;$ti",
gbb:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.z(z+this.c,H.y(this,0))},
gci:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bs(b,"$isa9",[P.X],"$asa9")
if(!z)return!1
z=this.a
y=J.aW(b)
x=y.gaQ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbf(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gbb(b)){if(typeof x!=="number")return x.B()
z=H.z(x+this.d,w)===y.gci(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.b5(z)
x=this.b
w=J.b5(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.z(x+this.d,v)
return P.fl(P.bQ(P.bQ(P.bQ(P.bQ(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dr:function(a,b){var z,y
H.w(b,"$isbJ",[P.X],"$asbJ")
z=b.a
y=this.a
if(typeof z!=="number")return z.cR()
if(typeof y!=="number")return H.n(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cR()
if(typeof y!=="number")return H.n(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a9:{"^":"le;aQ:a>,bf:b>,aq:c>,an:d>,$ti",p:{
iT:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.N()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.N()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nX:{"^":"U;0q:x=,0t:y=","%":"SVGFEBlendElement"},nY:{"^":"U;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},nZ:{"^":"U;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},o_:{"^":"U;0q:x=,0t:y=","%":"SVGFECompositeElement"},o0:{"^":"U;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},o1:{"^":"U;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},o2:{"^":"U;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},o3:{"^":"U;0q:x=,0t:y=","%":"SVGFEFloodElement"},o4:{"^":"U;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},o5:{"^":"U;0q:x=,0t:y=","%":"SVGFEImageElement"},o6:{"^":"U;0q:x=,0t:y=","%":"SVGFEMergeElement"},o7:{"^":"U;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},o8:{"^":"U;0q:x=,0t:y=","%":"SVGFEOffsetElement"},o9:{"^":"U;0q:x=,0t:y=","%":"SVGFEPointLightElement"},oa:{"^":"U;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},ob:{"^":"U;0q:x=,0t:y=","%":"SVGFESpotLightElement"},oc:{"^":"U;0q:x=,0t:y=","%":"SVGFETileElement"},od:{"^":"U;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},of:{"^":"U;0q:x=,0t:y=","%":"SVGFilterElement"},og:{"^":"bC;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hS:{"^":"bC;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bC:{"^":"U;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ol:{"^":"bC;0q:x=,0t:y=","%":"SVGImageElement"},bF:{"^":"p;",$isbF:1,"%":"SVGLength"},oo:{"^":"l0;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbF")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bF]},
$isk:1,
$ask:function(){return[P.bF]},
$isd:1,
$asd:function(){return[P.bF]},
$asB:function(){return[P.bF]},
"%":"SVGLengthList"},os:{"^":"U;0q:x=,0t:y=","%":"SVGMaskElement"},bI:{"^":"p;",$isbI:1,"%":"SVGNumber"},oE:{"^":"lb;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbI")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bI]},
$isk:1,
$ask:function(){return[P.bI]},
$isd:1,
$asd:function(){return[P.bI]},
$asB:function(){return[P.bI]},
"%":"SVGNumberList"},oJ:{"^":"U;0q:x=,0t:y=","%":"SVGPatternElement"},oL:{"^":"p;0q:x=,0t:y=","%":"SVGPoint"},oM:{"^":"p;0l:length=","%":"SVGPointList"},oN:{"^":"p;0q:x=,0t:y=","%":"SVGRect"},oO:{"^":"hS;0q:x=,0t:y=","%":"SVGRectElement"},oT:{"^":"U;0a2:type}","%":"SVGScriptElement"},p_:{"^":"lr;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){return this.k(a,b)},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isd:1,
$asd:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"SVGStringList"},p2:{"^":"U;0a2:type}","%":"SVGStyleElement"},U:{"^":"V;",
gcm:function(a){return new P.hN(a,new W.kA(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},p3:{"^":"bC;0q:x=,0t:y=","%":"SVGSVGElement"},jo:{"^":"bC;","%":"SVGTextPathElement;SVGTextContentElement"},p5:{"^":"jo;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bL:{"^":"p;",$isbL:1,"%":"SVGTransform"},pb:{"^":"lD;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbL")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bL]},
$isk:1,
$ask:function(){return[P.bL]},
$isd:1,
$asd:function(){return[P.bL]},
$asB:function(){return[P.bL]},
"%":"SVGTransformList"},pd:{"^":"bC;0q:x=,0t:y=","%":"SVGUseElement"},l_:{"^":"p+x;"},l0:{"^":"l_+B;"},la:{"^":"p+x;"},lb:{"^":"la+B;"},lq:{"^":"p+x;"},lr:{"^":"lq+B;"},lC:{"^":"p+x;"},lD:{"^":"lC+B;"}}],["","",,P,{"^":"",P:{"^":"b;",$isk:1,
$ask:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$isjI:1}}],["","",,P,{"^":"",ny:{"^":"p;0l:length=","%":"AudioBuffer"},dT:{"^":"a7;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nz:{"^":"kz;",
k:function(a,b){return P.aV(a.get(H.L(b)))},
J:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gao:function(a){var z=H.e([],[P.i])
this.J(a,new P.hh(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"AudioParamMap"},hh:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},hi:{"^":"dT;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nA:{"^":"a7;0l:length=","%":"AudioTrackList"},hl:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nB:{"^":"dT;0a2:type}","%":"BiquadFilterNode"},oH:{"^":"hl;0l:length=","%":"OfflineAudioContext"},oI:{"^":"hi;0a2:type}","%":"Oscillator|OscillatorNode"},kz:{"^":"p+aj;"}}],["","",,P,{"^":"",dd:{"^":"p;",
ih:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.H(g)
if(!!z.$isc3)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mv(g))
return}if(!!z.$iscZ)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bZ("Incorrect number or type of arguments"))},
ig:function(a,b,c,d,e,f,g){return this.ih(a,b,c,d,e,f,g,null,null,null)},
$isdd:1,
"%":"WebGLRenderingContext"},jR:{"^":"p;",$isjR:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oY:{"^":"lo;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aV(a.item(b))},
m:function(a,b,c){H.D(b)
H.f(c,"$isI")
throw H.a(P.A("Cannot assign element of immutable List."))},
L:function(a,b){return this.k(a,b)},
$asx:function(){return[[P.I,,,]]},
$isk:1,
$ask:function(){return[[P.I,,,]]},
$isd:1,
$asd:function(){return[[P.I,,,]]},
$asB:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},ln:{"^":"p+x;"},lo:{"^":"ln+B;"}}],["","",,O,{"^":"",aP:{"^":"b;0a,0b,0c,0d,$ti",
bS:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cS:function(a,b,c){var z=H.aB(this,"aP",0)
H.h(b,{func:1,ret:P.ai,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.o,[P.k,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bi:function(a,b){return this.cS(a,null,b)},
fl:function(a){var z
H.w(a,"$isk",[H.aB(this,"aP",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ex:function(a,b){var z
H.w(b,"$isk",[H.aB(this,"aP",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga0:function(a){var z=this.a
return new J.av(z,z.length,0,[H.y(z,0)])},
L:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aB(this,"aP",0)
H.z(b,z)
z=[z]
if(this.fl(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ex(x,H.e([b],z))}},
$isk:1,
p:{
cV:function(a){var z=new O.aP([a])
z.bS(a)
return z}}},d7:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gC:function(){var z=this.b
if(z==null){z=D.O()
this.b=z}return z},
ey:function(a){var z=this.b
if(!(z==null))z.E(a)},
aB:function(){return this.ey(null)},
gZ:function(a){var z=this.a
if(z.length>0)return C.a.gaz(z)
else return V.c8()},
e7:function(a){var z=this.a
if(a==null)C.a.h(z,V.c8())
else C.a.h(z,a)
this.aB()},
cH:function(){var z=this.a
if(z.length>0){z.pop()
this.aB()}}}}],["","",,E,{"^":"",cP:{"^":"b;"},aQ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a3:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
d_:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.av(z,z.length,0,[H.y(z,0)]);z.H();){y=z.d
if(y.f==null)y.d_()}},
scT:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gC()
y.toString
x=H.h(this.ge3(),{func:1,ret:-1,args:[D.t]})
C.a.R(y.a,x)}y=this.c
if(y!=null){y=y.gC()
y.toString
x=H.h(this.ge3(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.Q("shape",z,this.c,this,[F.cx])
w.b=!0
this.a7(w)}},
sea:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gC()
z.toString
y=H.h(this.ge4(),{func:1,ret:-1,args:[D.t]})
C.a.R(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gC()
z.toString
y=H.h(this.ge4(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}this.d_()
w=new D.Q("technique",x,this.f,this,[O.di])
w.b=!0
this.a7(w)}},
sb6:function(a){var z,y,x,w
if(!J.N(this.r,a)){z=this.r
if(z!=null){y=z.gC()
y.toString
x=H.h(this.ge2(),{func:1,ret:-1,args:[D.t]})
C.a.R(y.a,x)}if(a!=null){y=a.gC()
y.toString
x=H.h(this.ge2(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.Q("mover",z,a,this,[U.ae])
w.b=!0
this.a7(w)}},
ap:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aT(0,b,this):null
if(!J.N(y,this.x)){x=this.x
this.x=y
w=new D.Q("matrix",x,y,this,[V.ax])
w.b=!0
this.a7(w)}z=this.f
if(z!=null)z.ap(0,b)
for(z=this.y.a,z=new J.av(z,z.length,0,[H.y(z,0)]);z.H();)z.d.ap(0,b)},
aR:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gZ(z))
else C.a.h(z.a,y.j(0,z.gZ(z)))
z.aB()
a.e8(this.f)
z=a.dy
x=(z&&C.a).gaz(z)
if(x!=null&&this.d!=null)x.i7(a,this)
for(z=this.y.a,z=new J.av(z,z.length,0,[H.y(z,0)]);z.H();)z.d.aR(a)
a.e6()
a.dx.cH()},
gC:function(){var z=this.z
if(z==null){z=D.O()
this.z=z}return z},
a7:function(a){var z=this.z
if(!(z==null))z.E(a)},
a1:function(){return this.a7(null)},
hU:[function(a){H.f(a,"$ist")
this.e=null
this.a7(a)},function(){return this.hU(null)},"j9","$1","$0","ge3",0,2,1],
hV:[function(a){this.a7(H.f(a,"$ist"))},function(){return this.hV(null)},"ja","$1","$0","ge4",0,2,1],
hT:[function(a){this.a7(H.f(a,"$ist"))},function(){return this.hT(null)},"j8","$1","$0","ge2",0,2,1],
hR:[function(a){this.a7(H.f(a,"$ist"))},function(){return this.hR(null)},"j6","$1","$0","ge1",0,2,1],
j5:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aQ],"$ask")
for(z=b.length,y=this.ge1(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.b8()
t.a=H.e([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.a1()},"$2","ghQ",8,0,10],
j7:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aQ],"$ask")
for(z=b.length,y=this.ge1(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.b8()
t.a=H.e([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.h(y,x)
C.a.R(t.a,y)}}this.a1()},"$2","ghS",8,0,10],
$isaR:1,
p:{
ed:function(a,b,c,d,e,f){var z,y
z=new E.aQ()
z.a=d
z.b=!0
y=O.cV(E.aQ)
z.y=y
y.bi(z.ghQ(),z.ghS())
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
z.scT(0,e)
z.sea(f)
z.sb6(c)
return z}}},iY:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
es:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.am(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d7()
y=[V.ax]
z.a=H.e([],y)
x=z.gC()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.h(new E.j_(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d7()
z.a=H.e([],y)
v=z.gC()
v.toString
x=H.h(new E.j0(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d7()
z.a=H.e([],y)
y=z.gC()
y.toString
w=H.h(new E.j1(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.di])
this.dy=z
C.a.h(z,null)
this.fr=new H.b_(0,0,[P.i,A.eH])},
gi3:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gZ(z)
y=this.db
y=z.j(0,y.gZ(y))
this.z=y
z=y}return z},
e8:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaz(z):a;(z&&C.a).h(z,y)},
e6:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iZ:function(a,b){var z=new E.iY(a,b)
z.es(a,b)
return z}}},j_:{"^":"m:11;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.ch=null}},j0:{"^":"m:11;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j1:{"^":"m:11;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},jz:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a3:x@,0y,0z,0Q,0ch",
gC:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z},
eA:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.E(a)
this.i9()},function(){return this.eA(null)},"ez","$1","$0","gcW",0,2,1],
ghA:function(){var z,y,x
z=Date.now()
y=C.d.a4(P.ec(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.am(z,!1)
return x/y},
dg:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.n(z)
x=C.e.b1(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.e.b1(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
i9:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jB(this),{func:1,ret:-1,args:[P.X]})
C.B.eQ(z)
C.B.fz(z,W.fO(y,P.X))}},
i6:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dg()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.ec(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aB()
w=x.db
C.a.sl(w.a,0)
w.aB()
w=x.dx
C.a.sl(w.a,0)
w.aB()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aR(this.e)}}catch(v){z=H.at(v)
y=H.bv(v)
P.dN("Error: "+H.l(z))
P.dN("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jA:function(a,b,c,d,e){var z,y,x,w
z=J.H(a)
if(!!z.$iscT)return E.eO(a,!0,!0,!0,!1)
y=W.cU(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcm(a).h(0,y)
w=E.eO(y,!0,!0,!0,!1)
w.a=a
return w},
eO:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jz()
y=P.i8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.bN(a,"webgl",y)
x=H.f(x==null?C.l.bN(a,"experimental-webgl",y):x,"$isdd")
if(x==null)H.q(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iZ(x,a)
w=new T.jt(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k3(a)
v=new X.i1()
v.c=new X.aE(!1,!1,!1)
v.d=P.ia(null,null,null,P.o)
w.b=v
v=new X.iw(w)
v.f=0
v.r=new V.Z(0,0)
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.id(w)
v.r=0
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jF(w)
v.e=0
v.f=new V.Z(0,0)
v.r=new V.Z(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eK,P.b]])
w.z=v
u=document
t=W.ag
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a1(u,"contextmenu",H.h(w.gf8(),s),!1,t))
v=w.z
r=W.ad
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a1(a,"focus",H.h(w.gfb(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a1(a,"blur",H.h(w.gf4(),q),!1,r))
v=w.z
p=W.bE
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a1(u,"keyup",H.h(w.gfd(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a1(u,"keydown",H.h(w.gfc(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousedown",H.h(w.gfg(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mouseup",H.h(w.gfi(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousemove",H.h(w.gfh(),s),!1,t))
p=w.z
o=W.bO;(p&&C.a).h(p,W.a1(a,H.L(W.hH(a)),H.h(w.gfj(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a1(u,"mousemove",H.h(w.gf9(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a1(u,"mouseup",H.h(w.gfa(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a1(u,"pointerlockchange",H.h(w.gfk(),q),!1,r))
r=w.z
q=W.bn
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a1(a,"touchstart",H.h(w.gfs(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchend",H.h(w.gfp(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchmove",H.h(w.gfq(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.am(Date.now(),!1)
z.ch=0
z.dg()
return z}}},jB:{"^":"m:31;a",
$1:function(a){var z
H.ng(a)
z=this.a
if(z.z){z.z=!1
z.i6()}}}}],["","",,Z,{"^":"",fg:{"^":"b;a,b",p:{
du:function(a,b,c){var z
H.w(c,"$isd",[P.o],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bp(c)),35044)
a.bindBuffer(b,null)
return new Z.fg(b,z)}}},dX:{"^":"cP;a,b,c,d,e",
bo:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.at(y)
x=P.v('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},kq:{"^":"b;a",$isnC:1},dY:{"^":"b;a,0b,c,d",
aP:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bo:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bo(a)},
ed:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aR:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.c(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ac(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.F(y,", ")+"\nAttrs:   "+C.a.F(u,", ")},
$isp4:1},co:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.be(this.c)+"'")+"]"}},b1:{"^":"b;a",
gcU:function(a){var z,y
z=this.a
y=(z&$.$get$aI().a)!==0?3:0
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aJ().a)!==0)y+=2
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$bM().a)!==0)y+=3
if((z&$.$get$bN().a)!==0)y+=4
if((z&$.$get$b2().a)!==0)++y
return(z&$.$get$aG().a)!==0?y+4:y},
hh:function(a){var z,y,x
z=$.$get$aI()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ff()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.i])
y=this.a
if((y&$.$get$aI().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aK().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bM().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bN().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b2().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.F(z,"|")},
p:{
ar:function(a){return new Z.b1(a)}}}}],["","",,D,{"^":"",e1:{"^":"b;"},b8:{"^":"b;0a,0b,0c",
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.hL(z))
return x!==0},
ht:function(){return this.E(null)},
ia:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.E(y)}}},
a8:function(a){return this.ia(a,!0,!1)},
p:{
O:function(){var z=new D.b8()
z.a=H.e([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},hL:{"^":"m:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"b;a,0b"},cp:{"^":"t;c,d,a,0b,$ti"},cq:{"^":"t;c,d,a,0b,$ti"},Q:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dZ:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dZ))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"nE<"}},en:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.en))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},eo:{"^":"t;c,a,0b"},i1:{"^":"b;0a,0b,0c,0d",
i0:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eo(a,this)
y.b=!0
return z.E(y)},
hX:function(a){var z,y
this.c=a.b
this.d.R(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eo(a,this)
y.b=!0
return z.E(y)}},eu:{"^":"ct;x,y,c,d,e,a,0b"},id:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
at:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.Z(y.a+x*w,y.b+v*u)
u=this.a.gaJ()
s=new X.bG(a,new V.Z(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cG:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.at(a,b))
return!0},
b8:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ek()
if(typeof z!=="number")return z.bM()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.at(a,b))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.at(a,b))
return!0},
i1:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaJ()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.d8(new V.W(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.E(w)
return!0},
ff:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.eu(c,a,this.a.gaJ(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.Z(0,0)}},aE:{"^":"b;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aE))return!1
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
return z+(this.c?"Shift+":"")}},bG:{"^":"ct;x,y,z,Q,ch,c,d,e,a,0b"},iw:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bY:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gaJ()
x=new X.bG(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cG:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.bY(a,b,!0))
return!0},
b8:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ek()
if(typeof z!=="number")return z.bM()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.bY(a,b,!0))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.bY(a,b,!1))
return!0},
i2:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaJ()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.d8(new V.W(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdt:function(){var z=this.b
if(z==null){z=D.O()
this.b=z}return z},
gbK:function(){var z=this.c
if(z==null){z=D.O()
this.c=z}return z},
ge0:function(){var z=this.d
if(z==null){z=D.O()
this.d=z}return z}},d8:{"^":"ct;x,c,d,e,a,0b"},ct:{"^":"t;"},eS:{"^":"ct;x,y,z,Q,ch,c,d,e,a,0b"},jF:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
at:function(a,b){var z,y,x,w
H.w(a,"$isd",[V.Z],"$asd")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:new V.Z(0,0)
x=this.a.gaJ()
w=new X.eS(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i_:function(a){var z
H.w(a,"$isd",[V.Z],"$asd")
z=this.b
if(z==null)return!1
z.E(this.at(a,!0))
return!0},
hY:function(a){var z
H.w(a,"$isd",[V.Z],"$asd")
z=this.c
if(z==null)return!1
z.E(this.at(a,!0))
return!0},
hZ:function(a){var z
H.w(a,"$isd",[V.Z],"$asd")
z=this.d
if(z==null)return!1
z.E(this.at(a,!1))
return!0}},k3:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaJ:function(){var z=this.a
return V.eG(0,0,(z&&C.l).gbq(z).c,C.l.gbq(z).d)},
d6:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.en(z,new X.aE(y,a.altKey,a.shiftKey))},
aH:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aE(y,a.altKey,a.shiftKey)},
ca:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aE(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.K()
v=z.top
if(typeof x!=="number")return x.K()
return new V.Z(y-w,x-v)},
aX:function(a){return new V.W(a.movementX,a.movementY)},
c4:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.Z])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.e.ae(u.pageX)
C.e.ae(u.pageY)
s=z.left
C.e.ae(u.pageX)
C.a.h(y,new V.Z(t-s,C.e.ae(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dZ(z,new X.aE(y,a.altKey,a.shiftKey))},
iJ:[function(a){this.f=!0},"$1","gfb",4,0,5],
iC:[function(a){this.f=!1},"$1","gf4",4,0,5],
iG:[function(a){if(this.f)a.preventDefault()},"$1","gf8",4,0,5],
iL:[function(a){var z
H.f(a,"$isbE")
if(!this.f)return
z=this.d6(a)
if(this.b.i0(z))a.preventDefault()},"$1","gfd",4,0,16],
iK:[function(a){var z
H.f(a,"$isbE")
if(!this.f)return
z=this.d6(a)
if(this.b.hX(z))a.preventDefault()},"$1","gfc",4,0,16],
iN:[function(a){var z,y,x,w
H.f(a,"$isag")
z=this.a
z.focus()
this.f=!0
this.aH(a)
if(this.x){y=this.ar(a)
x=this.aX(a)
if(this.d.cG(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.au(a)
if(this.c.cG(y,w))a.preventDefault()},"$1","gfg",4,0,6],
iP:[function(a){var z,y,x
H.f(a,"$isag")
this.aH(a)
z=this.ar(a)
if(this.x){y=this.aX(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b8(z,x))a.preventDefault()},"$1","gfi",4,0,6],
iI:[function(a){var z,y,x,w
H.f(a,"$isag")
z=this.a
if(!(z&&C.l).gbq(z).dr(0,new P.bJ(a.clientX,a.clientY,[P.X]))){this.aH(a)
y=this.ar(a)
if(this.x){x=this.aX(a)
if(this.d.b8(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b8(y,w))a.preventDefault()}},"$1","gfa",4,0,6],
iO:[function(a){var z,y,x
H.f(a,"$isag")
this.aH(a)
z=this.ar(a)
if(this.x){y=this.aX(a)
if(this.d.b7(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b7(z,x))a.preventDefault()},"$1","gfh",4,0,6],
iH:[function(a){var z,y,x,w
H.f(a,"$isag")
z=this.a
if(!(z&&C.l).gbq(z).dr(0,new P.bJ(a.clientX,a.clientY,[P.X]))){this.aH(a)
y=this.ar(a)
if(this.x){x=this.aX(a)
if(this.d.b7(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b7(y,w))a.preventDefault()}},"$1","gf9",4,0,6],
iQ:[function(a){var z,y
H.f(a,"$isbO")
this.aH(a)
z=new V.W((a&&C.A).ghq(a),C.A.ghr(a)).w(0,180)
if(this.x){if(this.d.i1(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.i2(z,y))a.preventDefault()},"$1","gfj",4,0,35],
iR:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.au(this.y)
this.d.ff(w,v,x)}},"$1","gfk",4,0,5],
iX:[function(a){var z
H.f(a,"$isbn")
this.a.focus()
this.f=!0
this.ca(a)
z=this.c4(a)
if(this.e.i_(z))a.preventDefault()},"$1","gfs",4,0,12],
iV:[function(a){var z
H.f(a,"$isbn")
this.ca(a)
z=this.c4(a)
if(this.e.hY(z))a.preventDefault()},"$1","gfp",4,0,12],
iW:[function(a){var z
H.f(a,"$isbn")
this.ca(a)
z=this.c4(a)
if(this.e.hZ(z))a.preventDefault()},"$1","gfq",4,0,12]}}],["","",,D,{"^":"",cl:{"^":"b;0a,0b,0c,0d",
gC:function(){var z=this.d
if(z==null){z=D.O()
this.d=z}return z},
aC:[function(a){var z
H.f(a,"$ist")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aC(null)},"ir","$1","$0","geB",0,2,1],
$isa3:1,
$isaR:1},a3:{"^":"b;",$isaR:1},i2:{"^":"aP;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gC:function(){var z=this.Q
if(z==null){z=D.O()
this.Q=z}return z},
aC:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fe:[function(a){var z
H.f(a,"$ist")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fe(null)},"iM","$1","$0","gdd",0,2,1],
iS:[function(a){var z,y,x
H.w(a,"$isk",[D.a3],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.eM(x))return!1}return!0},"$1","gfm",4,0,37],
iz:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gdd(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.f(b[u],"$isa3")
if(t instanceof D.cl)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b8()
s.a=H.e([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.cp(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","gf1",8,0,21],
iU:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gdd(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.f(b[u],"$isa3")
if(t instanceof D.cl)C.a.R(this.e,t)
s=t.d
if(s==null){s=new D.b8()
s.a=H.e([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.R(s.a,x)}z=new D.cq(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","gfo",8,0,21],
eM:function(a){var z=C.a.br(this.e,a)
return z},
$ask:function(){return[D.a3]},
$asaP:function(){return[D.a3]}},iF:{"^":"b;",$isa3:1,$isaR:1},jg:{"^":"b;",$isa3:1,$isaR:1},jw:{"^":"b;",$isa3:1,$isaR:1},jx:{"^":"b;",$isa3:1,$isaR:1},jy:{"^":"b;",$isa3:1,$isaR:1}}],["","",,V,{"^":"",
nG:[function(a,b){if(typeof b!=="number")return b.K()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","it",8,0,36],
nt:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.aj(a-b,z)
return(a<0?a+z:a)+b},
R:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.e.ec($.r.$2(a,0)?0:a,b),c+b+1)},
bu:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isd",[P.u],"$asd")
z=H.e([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.R(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.c(z,u)
C.a.m(z,u,C.b.ad(z[u],x))}return z},
dM:function(a,b){return C.e.ij(Math.pow(b,C.I.b1(Math.log(H.ms(a))/Math.log(b))))},
a5:{"^":"b;a,b,c",
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
return new V.a5(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}},
c0:{"^":"b;a,b,c,d",
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
return new V.c0(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c0))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}},
cs:{"^":"b;a,b,c,d,e,f,r,x,y",
af:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$iscs")
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
return new V.cs(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.j(a3,s),C.e.j(a1,q)+C.e.j(a2,o)+C.e.j(a3,m),C.e.j(a1,k)+C.e.j(a2,j)+C.e.j(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cs))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
z=b.e
if(!$.r.$2(z,this.e))return!1
z=b.f
if(!$.r.$2(z,this.f))return!1
z=b.r
if(!$.r.$2(z,this.r))return!1
z=b.x
if(!$.r.$2(z,this.x))return!1
z=b.y
if(!$.r.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.u]
y=V.bu(H.e([this.a,this.d,this.r],z),3,0)
x=V.bu(H.e([this.b,this.e,this.x],z),3,0)
w=V.bu(H.e([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.c(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.c(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.c(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.c(y,1)
s=" "+y[1]+", "
if(1>=u)return H.c(x,1)
s=s+x[1]+", "
if(1>=t)return H.c(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.c(y,2)
z=" "+y[2]+", "
if(2>=u)return H.c(x,2)
z=z+x[2]+", "
if(2>=t)return H.c(w,2)
return s+(z+w[2]+"]")}},
ax:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
af:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
dZ:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.n(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.n(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.n(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.n(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.n(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.n(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.r.$2(a2,0))return V.c8()
a3=1/a2
a4=-w
a5=-i
return V.aD((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isax")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.n(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.n(s)
r=a7.b
if(typeof r!=="number")return H.n(r)
q=a7.f
if(typeof q!=="number")return H.n(q)
p=a7.z
if(typeof p!=="number")return H.n(p)
o=a7.cy
if(typeof o!=="number")return H.n(o)
n=a7.c
if(typeof n!=="number")return H.n(n)
m=a7.r
if(typeof m!=="number")return H.n(m)
l=a7.Q
if(typeof l!=="number")return H.n(l)
k=a7.db
if(typeof k!=="number")return H.n(k)
j=a7.d
if(typeof j!=="number")return H.n(j)
i=a7.x
if(typeof i!=="number")return H.n(i)
h=a7.ch
if(typeof h!=="number")return H.n(h)
g=a7.dx
if(typeof g!=="number")return H.n(g)
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
return V.aD(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.n(u)
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
bg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.n(u)
t=this.d
if(typeof t!=="number")return H.n(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.n(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.n(l)
return new V.a_(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ax))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
z=b.e
if(!$.r.$2(z,this.e))return!1
z=b.f
if(!$.r.$2(z,this.f))return!1
z=b.r
if(!$.r.$2(z,this.r))return!1
z=b.x
if(!$.r.$2(z,this.x))return!1
z=b.y
if(!$.r.$2(z,this.y))return!1
z=b.z
if(!$.r.$2(z,this.z))return!1
z=b.Q
if(!$.r.$2(z,this.Q))return!1
z=b.ch
if(!$.r.$2(z,this.ch))return!1
z=b.cx
if(!$.r.$2(z,this.cx))return!1
z=b.cy
if(!$.r.$2(z,this.cy))return!1
z=b.db
if(!$.r.$2(z,this.db))return!1
z=b.dx
if(!$.r.$2(z,this.dx))return!1
return!0},
i:function(a){return this.M()},
dR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.bu(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bu(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bu(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bu(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.c(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.c(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.c(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.c(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.c(y,1)
q=q+y[1]+", "
if(1>=t)return H.c(x,1)
q=q+x[1]+", "
if(1>=s)return H.c(w,1)
q=q+w[1]+", "
if(1>=r)return H.c(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.c(y,2)
u=u+y[2]+", "
if(2>=t)return H.c(x,2)
u=u+x[2]+", "
if(2>=s)return H.c(w,2)
u=u+w[2]+", "
if(2>=r)return H.c(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.c(y,3)
q=q+y[3]+", "
if(3>=t)return H.c(x,3)
q=q+x[3]+", "
if(3>=s)return H.c(w,3)
q=q+w[3]+", "
if(3>=r)return H.c(v,3)
return u+(q+v[3]+"]")},
M:function(){return this.dR("",3,0)},
D:function(a){return this.dR(a,3,0)},
p:{
aD:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c8:function(){return V.aD(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ew:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.G(c)))
y=b.av(z)
x=y.w(0,Math.sqrt(y.G(y)))
w=z.av(x)
v=new V.G(a.a,a.b,a.c)
return V.aD(x.a,w.a,z.a,x.P(0).G(v),x.b,w.b,z.b,w.P(0).G(v),x.c,w.c,z.c,z.P(0).G(v),0,0,0,1)}}},
Z:{"^":"b;q:a>,t:b>",
K:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.Z(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}},
a_:{"^":"b;q:a>,t:b>,c",
B:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.n(w)
return new V.a_(this.a+z,this.b+y,x+w)},
K:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.K()
if(typeof w!=="number")return H.n(w)
return new V.a_(this.a-z,this.b-y,x-w)},
j:function(a,b){var z=this.c
if(typeof z!=="number")return z.j()
return new V.a_(this.a*b,this.b*b,z*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}},
c9:{"^":"b;q:a>,t:b>,c,d",
j:function(a,b){return new V.c9(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c9))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}},
eF:{"^":"b;q:a>,t:b>,c,d",
ga6:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eF))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"},
p:{
eG:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eF(a,b,c,d)}}},
W:{"^":"b;a,b",
hH:[function(a){return Math.sqrt(this.G(this))},"$0","gl",1,0,24],
G:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.W(z*b,y*b)},
w:function(a,b){var z,y
if($.r.$2(b,0))return new V.W(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.W(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}},
G:{"^":"b;a,b,c",
hH:[function(a){return Math.sqrt(this.G(this))},"$0","gl",1,0,24],
G:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
return this.a*a.a+this.b*a.b+z*y},
cC:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.K()
if(typeof x!=="number")return H.n(x)
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
av:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.n(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.j()
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.n(w)
return new V.G(this.a+z,this.b+y,x+w)},
P:function(a){var z=this.c
if(typeof z!=="number")return z.P()
return new V.G(-this.a,-this.b,-z)},
j:function(a,b){var z=this.c
if(typeof z!=="number")return z.j()
return new V.G(this.a*b,this.b*b,z*b)},
w:function(a,b){var z
if($.r.$2(b,0))return new V.G(0,0,0)
z=this.c
if(typeof z!=="number")return z.w()
return new V.G(this.a/b,this.b/b,z/b)},
e_:function(){if(!$.r.$2(0,this.a))return!1
if(!$.r.$2(0,this.b))return!1
if(!$.r.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hs:{"^":"e1;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bT:function(a){var z=V.nt(a,this.c,this.b)
return z},
gC:function(){var z=this.y
if(z==null){z=D.O()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.E(a)},
scP:function(a,b){},
scD:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bT(z)}z=new D.Q("maximumLocation",y,this.b,this,[P.u])
z.b=!0
this.T(z)}},
scF:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bT(z)}z=new D.Q("minimumLocation",y,this.c,this,[P.u])
z.b=!0
this.T(z)}},
sY:function(a,b){var z,y
b=this.bT(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.Q("location",y,b,this,[P.u])
z.b=!0
this.T(z)}},
scE:function(a){var z,y,x
z=this.e
if(!$.r.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.Q("maximumVelocity",y,a,this,[P.u])
z.b=!0
this.T(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.Q("velocity",x,a,this,[P.u])
z.b=!0
this.T(z)}},
scp:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.Q("dampening",y,a,this,[P.u])
z.b=!0
this.T(z)}},
ap:function(a,b){var z,y,x,w
z=this.f
if($.r.$2(z,0)){z=this.r
z=!$.r.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sY(0,this.d+y*b)
z=this.x
if(!$.r.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
p:{
cW:function(){var z=new U.hs()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e3:{"^":"ae;0a,0b",
gC:function(){var z=this.b
if(z==null){z=D.O()
this.b=z}return z},
aT:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e3))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")},
p:{
e4:function(a){var z=new U.e3()
z.a=a
return z}}},eg:{"^":"aP;0e,0f,0r,0a,0b,0c,0d",
gC:function(){var z=this.e
if(z==null){z=D.O()
this.e=z}return z},
T:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.E(a)},function(){return this.T(null)},"ag","$1","$0","gaD",0,2,1],
iy:[function(a,b){var z,y,x,w,v,u,t
z=U.ae
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gC()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.cp(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gf0",8,0,19],
iT:[function(a,b){var z,y,x,w,v,u,t
z=U.ae
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gC()
t.toString
H.h(x,w)
C.a.R(t.a,x)}}z=new D.cq(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfn",8,0,19],
aT:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.N()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.av(z,z.length,0,[H.y(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.aT(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.c8():x
z=this.e
if(!(z==null))z.a8(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eg))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.c(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.c(w,y)
if(!J.N(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.ae]},
$asaP:function(){return[U.ae]},
$isae:1},ae:{"^":"e1;"},k4:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gC:function(){var z=this.cy
if(z==null){z=D.O()
this.cy=z}return z},
T:[function(a){var z
H.f(a,"$ist")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.T(null)},"ag","$1","$0","gaD",0,2,1],
aZ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdt()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.h(this.gc_(),y)
C.a.h(z.a,x)
x=this.a.c.ge0()
x.toString
z=H.h(this.gc0(),y)
C.a.h(x.a,z)
z=this.a.c.gbK()
z.toString
y=H.h(this.gc1(),y)
C.a.h(z.a,y)
return!0},
eX:[function(a){H.f(a,"$ist")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc_",4,0,2],
eY:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$ist"),"$isbG")
if(!this.y)return
if(this.x){z=a.d.K(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.K(0,a.y)
z=new V.W(y.a,y.b).j(0,2).w(0,z.ga6())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=new V.W(x.a,x.b).j(0,2).w(0,z.ga6())
x=this.b
v=w.a
if(typeof v!=="number")return v.P()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.sY(0,-v*u+t)
this.b.sV(0)
y=y.K(0,a.z)
this.Q=new V.W(y.a,y.b).j(0,2).w(0,z.ga6())}this.ag()},"$1","gc0",4,0,2],
eZ:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.G(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sV(y*10*x)
this.ag()}},"$1","gc1",4,0,2],
aT:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.N()
if(z<y){this.ch=y
x=b.y
this.b.ap(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aD(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isae:1},k5:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gC:function(){var z=this.fx
if(z==null){z=D.O()
this.fx=z}return z},
T:[function(a){var z
H.f(a,"$ist")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.T(null)},"ag","$1","$0","gaD",0,2,1],
aZ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdt()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.h(this.gc_(),y)
C.a.h(z.a,x)
x=this.a.c.ge0()
x.toString
z=H.h(this.gc0(),y)
C.a.h(x.a,z)
z=this.a.c.gbK()
z.toString
x=H.h(this.gc1(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.O()
x.f=z}x=H.h(this.geU(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.O()
x.d=z}x=H.h(this.geV(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.O()
x.b=z}x=H.h(this.gfP(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.O()
x.d=z}x=H.h(this.gfO(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.O()
x.c=z}y=H.h(this.gfN(),y)
C.a.h(z.a,y)
return!0},
al:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.W(z,y)},
eX:[function(a){a=H.j(H.f(a,"$ist"),"$isbG")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc_",4,0,2],
eY:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$ist"),"$isbG")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.al(new V.W(y.a,y.b).j(0,2).w(0,z.ga6()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=this.al(new V.W(x.a,x.b).j(0,2).w(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sY(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.K(0,a.z)
this.dx=this.al(new V.W(y.a,y.b).j(0,2).w(0,z.ga6()))}this.ag()},"$1","gc0",4,0,2],
eZ:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sV(-y*10*z)
this.ag()}},"$1","gc1",4,0,2],
iv:[function(a){if(H.j(H.f(a,"$ist"),"$iseu").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geU",4,0,2],
iw:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$ist"),"$isbG")
if(!J.N(this.d,a.x.b))return
z=a.c
y=a.d
x=y.K(0,a.y)
w=this.al(new V.W(x.a,x.b).j(0,2).w(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sY(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.K(0,a.z)
this.dx=this.al(new V.W(y.a,y.b).j(0,2).w(0,z.ga6()))
this.ag()},"$1","geV",4,0,2],
j0:[function(a){H.f(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfP",4,0,2],
j_:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$ist"),"$iseS")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.al(new V.W(y.a,y.b).j(0,2).w(0,z.ga6()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=this.al(new V.W(x.a,x.b).j(0,2).w(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sY(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.K(0,a.z)
this.dx=this.al(new V.W(y.a,y.b).j(0,2).w(0,z.ga6()))}this.ag()},"$1","gfO",4,0,2],
iZ:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sV(-y*10*z)
this.ag()}},"$1","gfN",4,0,2],
aT:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.N()
if(z<y){this.dy=y
x=b.y
this.c.ap(0,x)
this.b.ap(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aD(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.j(0,V.aD(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isae:1},k6:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gC:function(){var z=this.r
if(z==null){z=D.O()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.E(a)},
aZ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.O()
z.e=y
z=y}else z=y
y=H.h(this.gf_(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.O()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
ix:[function(a){var z,y,x,w
H.f(a,"$ist")
if(!J.N(this.b,this.a.b.c))return
H.j(a,"$isd8")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.Q("zoom",z,w,this,[P.u])
z.b=!0
this.T(z)}},"$1","gf_",4,0,2],
aT:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aD(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isae:1}}],["","",,M,{"^":"",hJ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aU:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aU(null)},"is","$1","$0","gaE",0,2,1],
iE:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aQ
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaE(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.b8()
s.a=H.e([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.cp(a,b,this,[z])
z.b=!0
this.aU(z)},"$2","gf6",8,0,10],
iF:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aQ
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaE(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.b8()
s.a=H.e([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.h(x,w)
C.a.R(s.a,x)}}z=new D.cq(a,b,this,[z])
z.b=!0
this.aU(z)},"$2","gf7",8,0,10],
gC:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.e8(this.c)
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
if(typeof x!=="number")return H.n(x)
u=C.d.ae(v.a*x)
if(typeof w!=="number")return H.n(w)
t=C.d.ae(v.b*w)
s=C.d.ae(v.c*x)
a.c=s
v=C.d.ae(v.d*w)
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
s.e7(V.aD(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.eB
if(y==null){y=V.ew(new V.a_(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.eB=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.j(0,m)}a.db.e7(m)
for(z=this.d.a,z=new J.av(z,z.length,0,[H.y(z,0)]);z.H();)z.d.ap(0,a)
for(z=this.d.a,z=new J.av(z,z.length,0,[H.y(z,0)]);z.H();)z.d.aR(a)
this.a.toString
a.cy.cH()
a.db.cH()
this.b.toString
a.e6()},
$isoR:1}}],["","",,A,{"^":"",dS:{"^":"b;a,b,c"},hg:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hu:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hs:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},im:{"^":"eH;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aN,0ax,0aO,0bt,0du,0dv,0bu,0bv,0dw,0dz,0bw,0bx,0dA,0dB,0by,0dC,0dD,0bz,0dE,0dF,0bA,0bB,0bC,0dG,0dH,0bD,0bE,0dI,0dJ,0bF,0dK,0cr,0dL,0cs,0dM,0ct,0dN,0cu,0dO,0cv,0dP,0cw,a,b,0c,0d,0e,0f,0r",
er:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.an("")
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
a2.fS(z)
a2.fZ(z)
a2.fT(z)
a2.h6(z)
a2.h7(z)
a2.h0(z)
a2.hb(z)
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
v.fW(z)
v.fR(z)
v.fU(z)
v.fX(z)
v.h4(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.h2(z)
v.h3(z)}v.h_(z)
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
r=z.a+="   return litClr*("+C.a.F(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fV(z)
v.h1(z)
v.h5(z)
v.h8(z)
v.h9(z)
v.ha(z)
v.fY(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.F(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.d7(x.charCodeAt(0)==0?x:x,35633)
this.d=this.d7(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fS(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.q(P.v("Failed to link shader: "+H.l(m)))}this.fI()
this.fK()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaT")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaT")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaT")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaT")
if(a2.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdn")
if(a2.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaT")
if(a2.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaT")
this.k3=H.e([],[A.aT])
y=a2.aN
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isM")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.q(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaT"))}}y=a2.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isM")
break
case C.h:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isap")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isM")
break}}y=a2.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isM")
break
case C.h:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isap")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isM")
break}}y=a2.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.aN=H.j(this.r.n(0,"diffuseTxt"),"$isao")
this.aO=H.j(this.r.n(0,"nullDiffuseTxt"),"$isM")
break
case C.h:this.ax=H.j(this.r.n(0,"diffuseTxt"),"$isap")
this.aO=H.j(this.r.n(0,"nullDiffuseTxt"),"$isM")
break}}y=a2.d
if(y!==C.c){this.bt=H.j(this.r.n(0,"invDiffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.du=H.j(this.r.n(0,"invDiffuseTxt"),"$isao")
this.bu=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isM")
break
case C.h:this.dv=H.j(this.r.n(0,"invDiffuseTxt"),"$isap")
this.bu=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isM")
break}}y=a2.e
if(y!==C.c){this.bx=H.j(this.r.n(0,"shininess"),"$isa0")
this.bv=H.j(this.r.n(0,"specularClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dw=H.j(this.r.n(0,"specularTxt"),"$isao")
this.bw=H.j(this.r.n(0,"nullSpecularTxt"),"$isM")
break
case C.h:this.dz=H.j(this.r.n(0,"specularTxt"),"$isap")
this.bw=H.j(this.r.n(0,"nullSpecularTxt"),"$isM")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dA=H.j(this.r.n(0,"bumpTxt"),"$isao")
this.by=H.j(this.r.n(0,"nullBumpTxt"),"$isM")
break
case C.h:this.dB=H.j(this.r.n(0,"bumpTxt"),"$isap")
this.by=H.j(this.r.n(0,"nullBumpTxt"),"$isM")
break}if(a2.dy){this.dC=H.j(this.r.n(0,"envSampler"),"$isap")
this.dD=H.j(this.r.n(0,"nullEnvTxt"),"$isM")
y=a2.r
if(y!==C.c){this.bz=H.j(this.r.n(0,"reflectClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dE=H.j(this.r.n(0,"reflectTxt"),"$isao")
this.bA=H.j(this.r.n(0,"nullReflectTxt"),"$isM")
break
case C.h:this.dF=H.j(this.r.n(0,"reflectTxt"),"$isap")
this.bA=H.j(this.r.n(0,"nullReflectTxt"),"$isM")
break}}y=a2.x
if(y!==C.c){this.bB=H.j(this.r.n(0,"refraction"),"$isa0")
this.bC=H.j(this.r.n(0,"refractClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dG=H.j(this.r.n(0,"refractTxt"),"$isao")
this.bD=H.j(this.r.n(0,"nullRefractTxt"),"$isM")
break
case C.h:this.dH=H.j(this.r.n(0,"refractTxt"),"$isap")
this.bD=H.j(this.r.n(0,"nullRefractTxt"),"$isM")
break}}}y=a2.y
if(y!==C.c){this.bE=H.j(this.r.n(0,"alpha"),"$isa0")
switch(y){case C.c:break
case C.i:break
case C.f:this.dI=H.j(this.r.n(0,"alphaTxt"),"$isao")
this.bF=H.j(this.r.n(0,"nullAlphaTxt"),"$isM")
break
case C.h:this.dJ=H.j(this.r.n(0,"alphaTxt"),"$isap")
this.bF=H.j(this.r.n(0,"nullAlphaTxt"),"$isM")
break}}this.cr=H.e([],[A.f4])
this.cs=H.e([],[A.f5])
this.ct=H.e([],[A.f6])
this.cu=H.e([],[A.f7])
this.cv=H.e([],[A.f8])
this.cw=H.e([],[A.f9])
if(a2.k2){y=a2.z
if(y>0){this.dK=H.f(this.r.n(0,"dirLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.cr;(x&&C.a).h(x,new A.f4(l,k,j))}}y=a2.Q
if(y>0){this.dL=H.f(this.r.n(0,"pntLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isK")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa0")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa0")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa0")
x=this.cs;(x&&C.a).h(x,new A.f5(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dM=H.f(this.r.n(0,"spotLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isK")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isK")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa0")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa0")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa0")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa0")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa0")
x=this.ct;(x&&C.a).h(x,new A.f6(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dN=H.f(this.r.n(0,"txtDirLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isK")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isK")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isK")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isM")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isao")
x=this.cu;(x&&C.a).h(x,new A.f7(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dO=H.f(this.r.n(0,"txtPntLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdn")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isK")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa0")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa0")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa0")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isap")
x=this.cv;(x&&C.a).h(x,new A.f8(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dP=H.f(this.r.n(0,"txtSpotLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isK")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isK")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isK")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isM")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isK")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa0")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa0")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isa0")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isa0")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isa0")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.q(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isao")
x=this.cw;(x&&C.a).h(x,new A.f9(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ai:function(a,b,c){b.a.uniform1i(b.d,1)},
ab:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
il:function(a,b){var z,y
z=a.ax
y=new A.im(b,z)
y.ev(b,z)
y.er(a,b)
return y}}},iq:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aN,ax,aO",
fS:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aN+"];\n"
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
fZ:function(a){var z
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
fT:function(a){var z
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
h6:function(a){var z,y
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
h7:function(a){var z,y
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
h0:function(a){var z
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
hb:function(a){var z
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
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.c(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aA(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fW:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.as(a,z,"emission")
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
fR:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.as(a,z,"ambient")
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
fU:function(a){var z,y
z=this.c
if(z===C.c)return
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
fX:function(a){var z,y
z=this.d
if(z===C.c)return
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
h4:function(a){var z,y
z=this.e
if(z===C.c)return
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
h_:function(a){var z,y
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
h2:function(a){var z,y
z=this.r
if(z===C.c)return
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
h3:function(a){var z,y
z=this.x
if(z===C.c)return
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
fV:function(a){var z,y
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
h1:function(a){var z,y
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
h5:function(a){var z,y
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
h8:function(a){var z,y,x
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
h9:function(a){var z,y,x
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
ha:function(a){var z,y,x
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
fY:function(a){var z
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
i:function(a){return this.ax}},f4:{"^":"b;a,b,c"},f7:{"^":"b;a,b,c,d,e,f,r,x"},f5:{"^":"b;a,b,c,d,e,f,r"},f8:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f6:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f9:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eH:{"^":"cP;",
ev:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
d7:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fS(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fI:function(){var z,y,x,w,v,u
z=H.e([],[A.dS])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dS(y,v.name,u))}this.f=new A.hg(z)},
fK:function(){var z,y,x,w,v,u
z=H.e([],[A.af])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hp(v.type,v.size,v.name,u))}this.r=new A.jQ(z)},
aG:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.M(z,y,b,c)
else return A.dm(z,y,b,a,c)},
eN:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.dm(z,y,b,a,c)},
eO:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ap(z,y,b,c)
else return A.dm(z,y,b,a,c)},
bm:function(a,b){return new P.fj(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hp:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.a0(this.a,this.e,c,d)
case 35664:return new A.jL(this.a,this.e,c,d)
case 35665:return new A.K(this.a,this.e,c,d)
case 35666:return new A.jO(this.a,this.e,c,d)
case 35667:return new A.jM(this.a,this.e,c,d)
case 35668:return new A.jN(this.a,this.e,c,d)
case 35669:return new A.jP(this.a,this.e,c,d)
case 35674:return new A.jS(this.a,this.e,c,d)
case 35675:return new A.dn(this.a,this.e,c,d)
case 35676:return new A.aT(this.a,this.e,c,d)
case 35678:return this.eN(b,c,d)
case 35680:return this.eO(b,c,d)
case 35670:throw H.a(this.bm("BOOL",c))
case 35671:throw H.a(this.bm("BOOL_VEC2",c))
case 35672:throw H.a(this.bm("BOOL_VEC3",c))
case 35673:throw H.a(this.bm("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cj:{"^":"b;a,b",
i:function(a){return this.b}},af:{"^":"b;"},jQ:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.M()},
hz:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
M:function(){return this.hz("\n")}},M:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jM:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jN:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jP:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jK:{"^":"af;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dm:function(a,b,c,d,e){var z=new A.jK(a,b,c,e)
z.f=d
z.e=P.ib(d,0,!1,P.o)
return z}}},a0:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jL:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},K:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jO:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jS:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dn:{"^":"af;a,b,c,d",
ak:function(a){var z=new Float32Array(H.bp(H.w(a,"$isd",[P.u],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aT:{"^":"af;a,b,c,d",
ak:function(a){var z=new Float32Array(H.bp(H.w(a,"$isd",[P.u],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ao:{"^":"af;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ap:{"^":"af;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
fT:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.aq,P.u,P.u]})
z=F.df()
F.bT(z,b,c,d,a,1,0,0,1)
F.bT(z,b,c,d,a,0,1,0,3)
F.bT(z,b,c,d,a,0,0,1,2)
F.bT(z,b,c,d,a,-1,0,0,0)
F.bT(z,b,c,d,a,0,-1,0,0)
F.bT(z,b,c,d,a,0,0,-1,3)
z.a5()
return z},
cE:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.bO()
return(y>0?z+4:z)*2},
bT:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.aq,P.u,P.u]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.G(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.G(t+h,s+f,r+g)
z.b=q
p=new V.G(t-h,s-f,r-g)
z.c=p
o=new V.G(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cE(y)
k=F.cE(z.b)
j=F.cg(d,e,new F.mb(z,F.cE(z.c),F.cE(z.d),k,l,c),b)
if(j!=null)a.bG(j)},
mx:function(a,b,c,d,e,f){return F.mz(!1,!1,d,new F.my(a,f),e)},
mz:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.u,args:[P.u,P.u]})
if(e<3)return
if(c<1)return
z=F.cg(c,e,new F.mC(d),null)
if(z==null)return
z.a5()
z.bn()
return z},
mT:function(a,b){var z=F.cg(a,b,new F.mU(),null)
z.d.bJ()
z.a5()
z.bn()
return z},
nm:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.nn()
y=F.fT(a,null,new F.no(z),c)
y.bn()
return y},
nq:function(a,b,c,d){return F.mA(c,a,d,b,new F.nr())},
mA:function(a,b,c,d,e){var z=F.cg(a,b,new F.mB(H.h(e,{func:1,ret:V.a_,args:[P.u]}),d,b,c),null)
if(z==null)return
z.a5()
z.bn()
return z},
dI:function(a,b,c){var z={}
z.a=b
z.a=new F.mK()
return F.cg(c,a,new F.mL(z),null)},
cg:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.aq,P.u,P.u]})
if(a<1)return
if(b<1)return
z=F.df()
y=H.e([],[F.aq])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.dr(null,null,new V.c0(u,0,0,1),null,null,new V.Z(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.co(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.dr(null,null,new V.c0(o,n,m,1),null,null,new V.Z(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.co(d))}}z.d.hd(a+1,b+1,y)
return z},
mb:{"^":"m:3;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cC(z.b,b).cC(z.d.cC(z.c,b),c)
a.sY(0,new V.a_(y.a,y.b,y.c))
a.scN(y.w(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
a.scf(new V.c9(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
my:{"^":"m:14;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mC:{"^":"m:3;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.n(v)
y=-y*v
u=x*v
a.sY(0,new V.a_(y,u,w))
u=new V.G(y,u,w)
a.scN(u.w(0,Math.sqrt(u.G(u))))
a.scf(new V.c9(1-c,2+c,-1,-1))}},
mU:{"^":"m:3;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.G(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.w(0,Math.sqrt(w.G(w)))
a.sY(0,new V.a_(x.a,x.b,x.c))}},
nn:{"^":"m:14;",
$2:function(a,b){return 0}},
no:{"^":"m:3;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.n(z)
y=a.f
x=new V.G(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.G(x))).j(0,1+z)
a.sY(0,new V.a_(z.a,z.b,z.c))}},
nr:{"^":"m:44;",
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)}},
mB:{"^":"m:3;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dO(y.$1(z),x)
x=J.dO(y.$1(z+3.141592653589793/this.c),x).K(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.G(x)))
u=new V.G(1,0,0)
y=v.av(!v.u(0,u)?new V.G(0,0,1):u)
t=y.w(0,Math.sqrt(y.G(y)))
y=t.av(v)
u=y.w(0,Math.sqrt(y.G(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
r=y.c
q=x.c
if(typeof r!=="number")return r.K()
if(typeof q!=="number")return H.n(q)
a.sY(0,w.B(0,new V.a_(y.a-x.a,y.b-x.b,r-q)))}},
mK:{"^":"m:14;",
$2:function(a,b){return 0}},
mL:{"^":"m:3;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sY(0,new V.a_(z,y,this.a.a.$2(b,c)))
x=new V.G(z,y,1)
a.scN(x.w(0,Math.sqrt(x.G(x))))
x=1-b
w=1-c
a.scf(new V.c9(b*c,2+x*c,4+b*w,6+x*w))}},
aw:{"^":"b;0a,0b,0c,0d,0e",
aw:function(){if(!this.gb0()){C.a.R(this.a.a.d.b,this)
this.a.a.a1()}this.c6()
this.c7()
this.fv()},
fF:function(a){this.a=a
C.a.h(a.d.b,this)},
fG:function(a){this.b=a
C.a.h(a.d.c,this)},
fH:function(a){this.c=a
C.a.h(a.d.d,this)},
c6:function(){var z=this.a
if(z!=null){C.a.R(z.d.b,this)
this.a=null}},
c7:function(){var z=this.b
if(z!=null){C.a.R(z.d.c,this)
this.b=null}},
fv:function(){var z=this.c
if(z!=null){C.a.R(z.d.d,this)
this.c=null}},
gb0:function(){return this.a==null||this.b==null||this.c==null},
eH:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.e_())return
return v.w(0,Math.sqrt(v.G(v)))},
eK:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.K(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.G(z)))
z=w.K(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.av(z.w(0,Math.sqrt(z.G(z))))
return z.w(0,Math.sqrt(z.G(z)))},
cl:function(){if(this.d!=null)return!0
var z=this.eH()
if(z==null){z=this.eK()
if(z==null)return!1}this.d=z
this.a.a.a1()
return!0},
eG:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.e_())return
return v.w(0,Math.sqrt(v.G(v)))},
eJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.r.$2(n,0)){z=r.K(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.K(0,u).j(0,l).B(0,u).K(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.G(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.G(z)))
z=k.av(m)
z=z.w(0,Math.sqrt(z.G(z))).av(k)
m=z.w(0,Math.sqrt(z.G(z)))}return m},
cj:function(){if(this.e!=null)return!0
var z=this.eG()
if(z==null){z=this.eJ()
if(z==null)return!1}this.e=z
this.a.a.a1()
return!0},
ghl:function(a){if(J.N(this.a,this.b))return!0
if(J.N(this.b,this.c))return!0
if(J.N(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var z,y
if(this.gb0())return a+"disposed"
z=a+C.b.ad(J.ac(this.a.e),0)+", "+C.b.ad(J.ac(this.b.e),0)+", "+C.b.ad(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
M:function(){return this.D("")},
p:{
c2:function(a,b,c){var z,y,x
z=new F.aw()
y=a.a
if(y==null)H.q(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.v("May not create a face with vertices attached to different shapes."))
z.fF(a)
z.fG(b)
z.fH(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a1()
return z}}},
hM:{"^":"b;"},
jf:{"^":"hM;",
b5:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
d4:{"^":"b;0a,0b",
aw:function(){if(!this.gb0()){C.a.R(this.a.a.c.b,this)
this.a.a.a1()}this.c6()
this.c7()},
c6:function(){var z=this.a
if(z!=null){C.a.R(z.c.b,this)
this.a=null}},
c7:function(){var z=this.b
if(z!=null){C.a.R(z.c.c,this)
this.b=null}},
gb0:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){if(this.gb0())return a+"disposed"
return a+C.b.ad(J.ac(this.a.e),0)+", "+C.b.ad(J.ac(this.b.e),0)},
M:function(){return this.D("")}},
i3:{"^":"b;"},
jJ:{"^":"i3;",
b5:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dc:{"^":"b;0a",
aw:function(){var z=this.a
if(z!=null){C.a.R(z.a.b.b,this)
this.a.a.a1()}this.fu()},
fu:function(){var z=this.a
if(z!=null){C.a.R(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ad(J.ac(z.e),0)},
M:function(){return this.D("")}},
cx:{"^":"b;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.O()
this.e=z}return z},
bG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.hn())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.c(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dc()
if(r.a==null)H.q(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.c(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.c(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d4()
s=p.a
if(s==null)H.q(P.v("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.q(P.v("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.E(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.c(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.c(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.c(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.c2(p,o,l)}z=this.e
if(!(z==null))z.a8(0)},
a5:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.a5()||!1
if(!this.a.a5())y=!1
z=this.e
if(!(z==null))z.a8(0)
return y},
hg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=a.a,x=z.length;y>=0;--y){w=this.a.c
if(y>=w.length)return H.c(w,y)
v=w[y]
w=v.y
u=C.e.b1(w.a*(a.b-1))
w=w.b
t=a.c
if(typeof t!=="number")return t.K()
s=C.e.b1(w*(t-1))
w=a.b
u=u>=0?C.d.aj(u,w):w+C.d.aj(u,w)
t=a.c
if(s>=0){if(typeof t!=="number")return H.n(t)
s=C.d.aj(s,t)}else{if(typeof t!=="number")return H.n(t)
s=t+C.d.aj(s,t)}r=(u+s*w)*4
if(r<0||r>=x)return H.c(z,r)
w=z[r]/255
t=r+1
if(t>=x)return H.c(z,t)
t=z[t]/255
q=r+2
if(q>=x)return H.c(z,q)
q=z[q]/255
p=r+3
if(p>=x)return H.c(z,p)
p=z[p]/255
if(w<0)w=0
else if(w>1)w=1
if(t<0)t=0
else if(t>1)t=1
if(q<0)q=0
else if(q>1)q=1
if(!(p<0))if(p>1)p=1
o=(w+t+q)*b/3
w=v.f
t=v.r
q=t.a
p=t.b
t=t.c
if(typeof t!=="number")return t.j()
n=w.a
m=w.b
l=w.c
if(typeof l!=="number")return l.B()
t=new V.a_(n+q*o,m+p*o,l+t*o)
if(!J.N(w,t)){v.f=t
w=v.a
if(w!=null){w=w.e
if(!(w==null))w.E(null)}}}z=this.e
if(!(z==null))z.a8(0)},
iq:function(a){var z,y,x,w,v
z=this.e
if(!(z==null))++z.c
for(z=this.a,y=z.c.length-1,x=a.a;y>=0;--y){w=z.c
if(y>=w.length)return H.c(w,y)
v=w[y]
if((x&$.$get$aI().a)===0)v.f=null
if((x&$.$get$aA().a)===0)v.r=null
if((x&$.$get$aH().a)===0)v.x=null
if((x&$.$get$aJ().a)===0)v.y=null
if((x&$.$get$aK().a)===0)v.z=null
if((x&$.$get$dt().a)===0)v.Q=null
if((x&$.$get$b2().a)===0)v.ch=0
if((x&$.$get$aG().a)===0)v.cx=null}z=this.e
if(!(z==null))z.a8(0)},
ip:function(a,b){var z,y,x,w
z=this.e
if(!(z==null))++z.c
for(z=this.d,y=z.b.length-1;y>=0;--y){x=z.b
if(y>=x.length)return H.c(x,y)
w=x[y]
w.d=null}z=this.e
if(!(z==null))z.a8(0)},
io:function(a){return this.ip(!0,a)},
eS:function(a,b,c,d,e){var z,y,x
H.w(d,"$isd",[F.aq],"$asd")
H.w(e,"$isd",[P.o],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
if(a.b5(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hN:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.aq],x=[P.o];y>=0;--y){w=this.a.c
if(y>=w.length)return H.c(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.eS(a,v,y,u,t))b.bG(u)}this.a.A()
this.c.bJ()
this.d.bJ()
this.b.i5()
this.c.cJ(new F.jJ())
this.d.cJ(new F.jf())
z=this.e
if(!(z==null))z.a8(0)},
hf:function(a){this.hN(new F.kk(),new F.iA())},
bn:function(){return this.hf(null)},
hj:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aI()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$bM().a)!==0)++w
if((x&$.$get$bN().a)!==0)++w
if((x&$.$get$b2().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
v=b.gcU(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dX])
for(r=0,q=0;q<w;++q){p=b.hh(q)
o=p.gcU(p)
C.a.m(s,q,new Z.dX(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.c(y,n)
m=y[n].hI(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bp(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dY(new Z.fg(34962,j),s,b)
i.b=H.e([],[Z.co])
if(this.b.b.length!==0){x=P.o
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.du(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.co(0,h.length,f))}if(this.c.b.length!==0){x=P.o
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.du(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.co(1,h.length,f))}if(this.d.b.length!==0){x=P.o
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.c(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.du(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.co(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.F(z,"\n")},
a7:function(a){var z=this.e
if(!(z==null))z.E(a)},
a1:function(){return this.a7(null)},
p:{
df:function(){var z,y
z=new F.cx()
y=new F.kf(z)
y.b=!1
y.c=H.e([],[F.aq])
z.a=y
y=new F.ja(z)
y.b=H.e([],[F.dc])
z.b=y
y=new F.j9(z)
y.b=H.e([],[F.d4])
z.c=y
y=new F.j8(z)
y.b=H.e([],[F.aw])
z.d=y
z.e=null
return z}}},
j8:{"^":"b;a,0b",
hd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isd",[F.aq],"$asd")
z=H.e([],[F.aw])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.c(c,x)
r=c[x];++x
if(x>=s)return H.c(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.c(c,p)
o=c[p]
if(y<0||y>=s)return H.c(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.c2(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c2(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c2(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.c2(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cJ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b5(0,v,t)){v.aw()
break}}}}},
bJ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.c(y,z)
x=y[z]
y=x.ghl(x)
if(y)x.aw()}},
a5:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cl())x=!1
return x},
ck:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cj())x=!1
return x},
i:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.F(z,"\n")},
M:function(){return this.D("")}},
j9:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cJ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b5(0,v,t)){v.aw()
break}}}}},
bJ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.c(y,z)
x=y[z]
y=J.N(x.a,x.b)
if(y)x.aw()}},
i:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.c(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.F(z,"\n")},
M:function(){return this.D("")}},
ja:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i5:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.c(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aw()}},
i:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.F(z,"\n")},
M:function(){return this.D("")}},
aq:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
co:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.dr(this.cx,x,u,z,y,w,v,a,t)},
hn:function(){return this.co(null)},
sY:function(a,b){var z
if(!J.N(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a1()}},
scN:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a1()}},
scf:function(a){var z
if(!J.N(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a1()}},
hI:function(a){var z,y
z=J.H(a)
if(z.u(a,$.$get$aI())){z=this.f
y=[P.u]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aA())){z=this.r
y=[P.u]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aH())){z=this.x
y=[P.u]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aJ())){z=this.y
y=[P.u]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.u(a,$.$get$aK())){z=this.z
y=[P.u]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bM())){z=this.Q
y=[P.u]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bN())){z=this.Q
y=[P.u]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b2()))return H.e([this.ch],[P.u])
else if(z.u(a,$.$get$aG())){z=this.cx
y=[P.u]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.u])},
cl:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.J(0,new F.kp(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.a8(0)}return!0},
cj:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.J(0,new F.ko(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.a8(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var z,y,x
z=H.e([],[P.i])
C.a.h(z,C.b.ad(J.ac(this.e),0))
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
C.a.h(z,V.R(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.F(z,", ")
return a+"{"+x+"}"},
M:function(){return this.D("")},
p:{
dr:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aq()
y=new F.kn(z)
y.b=H.e([],[F.dc])
z.b=y
y=new F.kj(z)
x=[F.d4]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.kg(z)
x=[F.aw]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$ds()
z.e=0
y=$.$get$aI()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aA().a)!==0?e:null
z.x=(x&$.$get$aH().a)!==0?b:null
z.y=(x&$.$get$aJ().a)!==0?f:null
z.z=(x&$.$get$aK().a)!==0?g:null
z.Q=(x&$.$get$dt().a)!==0?c:null
z.ch=(x&$.$get$b2().a)!==0?i:0
z.cx=(x&$.$get$aG().a)!==0?a:null
return z}}},
kp:{"^":"m:7;a",
$1:function(a){var z,y
H.f(a,"$isaw")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
ko:{"^":"m:7;a",
$1:function(a){var z,y
H.f(a,"$isaw")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
kf:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.c(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a1()
return!0},
gl:function(a){return this.c.length},
a5:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cl()
return!0},
ck:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cj()
return!0},
hk:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.j()
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.M()},
D:function(a){var z,y,x,w
this.A()
z=H.e([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.F(z,"\n")},
M:function(){return this.D("")}},
kg:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.c(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.c(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.c(z,b)
return z[b]},
J:function(a,b){H.h(b,{func:1,ret:-1,args:[F.aw]})
C.a.J(this.b,b)
C.a.J(this.c,new F.kh(this,b))
C.a.J(this.d,new F.ki(this,b))},
i:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.F(z,"\n")},
M:function(){return this.D("")}},
kh:{"^":"m:7;a,b",
$1:function(a){H.f(a,"$isaw")
if(!J.N(a.a,this.a))this.b.$1(a)}},
ki:{"^":"m:7;a,b",
$1:function(a){var z
H.f(a,"$isaw")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
kj:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.c(z,x)
return z[x]}else{if(b<0)return H.c(z,b)
return z[b]}},
i:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.F(z,"\n")},
M:function(){return this.D("")}},
kl:{"^":"b;"},
kk:{"^":"kl;",
b5:function(a,b,c){return J.N(b.f,c.f)}},
km:{"^":"b;"},
iA:{"^":"km;",
bG:function(a){var z,y,x,w,v,u,t,s,r
H.w(a,"$isd",[F.aq],"$asd")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=w.a
u=w.b
t=z.c
w=w.c
if(typeof t!=="number")return t.B()
if(typeof w!=="number")return H.n(w)
z=new V.G(z.a+v,z.b+u,t+w)}}z=z.w(0,Math.sqrt(z.G(z)))
for(y=a.length,w=z.a,v=z.b,v=w*w+v*v,w=z.c,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){s=a[x]
if(typeof w!=="number")return w.j()
r=z.w(0,Math.sqrt(v+w*w))
if(!J.N(s.r,r)){s.r=r
u=s.a
if(u!=null){u=u.e
if(!(u==null))u.E(null)}}}return}},
kn:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.M()},
D:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.F(z,"\n")},
M:function(){return this.D("")}}}],["","",,O,{"^":"",ik:{"^":"di;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gC:function(){var z=this.dy
if(z==null){z=D.O()
this.dy=z}return z},
ah:[function(a){var z
H.f(a,"$ist")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.ah(null)},"iD","$1","$0","gf5",0,2,1],
fB:[function(a){H.f(a,"$ist")
this.a=null
this.ah(a)},function(){return this.fB(null)},"iY","$1","$0","gfA",0,2,1],
iA:[function(a,b){var z=V.ax
z=new D.cp(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.ah(z)},"$2","gf2",8,0,17],
iB:[function(a,b){var z=V.ax
z=new D.cq(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.ah(z)},"$2","gf3",8,0,17],
d4:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a4(z.e.length+3,4)*4
x=C.d.a4(z.f.length+3,4)*4
w=C.d.a4(z.r.length+3,4)*4
v=C.d.a4(z.x.length+3,4)*4
u=C.d.a4(z.y.length+3,4)*4
t=C.d.a4(z.z.length+3,4)*4
s=C.d.a4(this.e.a.length+3,4)*4
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
a=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a0=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aI()
if(c){z=$.$get$aA()
a6=new Z.b1(a6.a|z.a)}if(b){z=$.$get$aH()
a6=new Z.b1(a6.a|z.a)}if(a){z=$.$get$aJ()
a6=new Z.b1(a6.a|z.a)}if(a0){z=$.$get$aK()
a6=new Z.b1(a6.a|z.a)}if(a2){z=$.$get$aG()
a6=new Z.b1(a6.a|z.a)}return new A.iq(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
W:function(a,b){H.w(a,"$isd",[T.dj],"$asd")},
ap:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.av(z,z.length,0,[H.y(z,0)]);z.H();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cO(x)}}},
i7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.d4()
y=a.fr.k(0,z.ax)
if(y==null){y=A.il(z,a.a)
x=y.b
if(x.length===0)H.q(P.v("May not cache a shader with no name."))
if(a.fr.bs(0,x))H.q(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aO
z=b.e
if(!(z instanceof Z.dY)){b.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)b.d.a5()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.ck()
t.a.ck()
t=t.e
if(!(t==null))t.a8(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hk()
s=s.e
if(!(s==null))s.a8(0)}q=b.d.hj(new Z.kq(a.a),v)
q.aP($.$get$aI()).e=this.a.y.c
if(z)q.aP($.$get$aA()).e=this.a.Q.c
if(u)q.aP($.$get$aH()).e=this.a.z.c
if(w.rx)q.aP($.$get$aJ()).e=this.a.ch.c
if(t)q.aP($.$get$aK()).e=this.a.cx.c
if(w.x1)q.aP($.$get$aG()).e=this.a.cy.c
b.e=q}z=T.dj
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hu()
if(w.fx){u=this.a
t=a.dx
t=t.gZ(t)
u=u.db
u.toString
u.ak(t.af(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gZ(t)
s=a.dx
s=t.j(0,s.gZ(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ak(t.af(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gi3()
s=a.dx
s=t.j(0,s.gZ(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ak(t.af(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ak(t.af(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ak(t.af(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ak(C.t.af(t,!0))}if(w.aN>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.u],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.c(s,n)
s=s[n]
t.toString
H.f(s,"$isax")
t=t.k3
if(n>=t.length)return H.c(t,n)
t=t[n]
m=new Float32Array(H.bp(H.w(s.af(0,!0),"$isd",u,"$asd")))
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
case C.f:this.W(p,this.f.d)
u=this.a
t=this.f.d
u.ai(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.f.e)
u=this.a
t=this.f.e
u.ab(u.r2,u.rx,t)
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
case C.f:this.W(p,this.r.d)
u=this.a
t=this.r.d
u.ai(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.r.e)
u=this.a
t=this.r.e
u.ab(u.x2,u.y1,t)
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
case C.f:this.W(p,this.x.d)
u=this.a
t=this.x.d
u.ai(u.aN,u.aO,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.x.e)
u=this.a
t=this.x.e
u.ab(u.ax,u.aO,t)
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
u=u.bt
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.W(p,this.y.d)
u=this.a
t=this.y.d
u.ai(u.du,u.bu,t)
t=this.a
u=this.y.f
t=t.bt
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.y.e)
u=this.a
t=this.y.e
u.ab(u.dv,u.bu,t)
t=this.a
u=this.y.f
t=t.bt
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bv
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bx
t.a.uniform1f(t.d,r)
break
case C.f:this.W(p,this.z.d)
u=this.a
t=this.z.d
u.ai(u.dw,u.bw,t)
t=this.a
u=this.z.f
t=t.bv
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bx
u.a.uniform1f(u.d,r)
break
case C.h:this.W(p,this.z.e)
u=this.a
t=this.z.e
u.ab(u.dz,u.bw,t)
t=this.a
u=this.z.f
t=t.bv
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bx
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dK
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cr
if(k>=s.length)return H.c(s,k)
h=s[k]
s=l.cO(i.a)
r=s.a
g=s.b
f=s.c
if(typeof f!=="number")return f.j()
f=s.w(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dL
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cs
if(k>=s.length)return H.c(s,k)
h=s[k]
s=i.gb9(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcQ(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bg(i.gb9(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gam(i)
f=h.d
g=s.gbI()
r=s.gbh()
s=s.gbp()
f.a.uniform3f(f.d,g,r,s)
s=i.gcc()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gcd()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gce()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dM
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.ct
if(k>=s.length)return H.c(s,k)
h=s[k]
s=i.gb9(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcQ(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcq(i).j4()
f=h.c
g=s.gaK(s)
r=s.gaL(s)
s=s.gaM()
f.a.uniform3f(f.d,g,r,s)
s=l.bg(i.gb9(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gam(i)
r=h.e
g=s.gbI()
f=s.gbh()
s=s.gbp()
r.a.uniform3f(r.d,g,f,s)
s=i.gj2()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gj1()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gcc()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gcd()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gce()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dN
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
r=this.a.cu
if(k>=r.length)return H.c(r,k)
h=r[k]
r=i.gbc()
H.w(p,"$isd",s,"$asd")
if(!C.a.br(p,r)){r.sb2(0,p.length)
C.a.h(p,r)}r=i.gcq(i)
g=h.d
f=r.gaK(r)
e=r.gaL(r)
r=r.gaM()
g.a.uniform3f(g.d,f,e,r)
r=i.gbK()
e=h.b
f=r.gaK(r)
g=r.gaL(r)
r=r.gaM()
e.a.uniform3f(e.d,f,g,r)
r=i.gbb(i)
g=h.c
f=r.gaK(r)
e=r.gaL(r)
r=r.gaM()
g.a.uniform3f(g.d,f,e,r)
r=l.cO(i.gcq(i))
e=r.a
f=r.b
g=r.c
if(typeof g!=="number")return g.j()
g=r.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gam(i)
f=h.f
e=g.gbI()
r=g.gbh()
g=g.gbp()
f.a.uniform3f(f.d,e,r,g)
g=i.gbc()
r=g.gb3(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gb3(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gb2(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dO
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.y,t=u.length,s=[P.u],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
g=this.a.cv
if(k>=g.length)return H.c(g,k)
h=g[k]
g=i.gbc()
H.w(p,"$isd",r,"$asd")
if(!C.a.br(p,g)){g.sb2(0,p.length)
C.a.h(p,g)}d=l.j(0,i.gZ(i))
g=i.gZ(i).bg(new V.a_(0,0,0))
f=h.b
e=g.gq(g)
c=g.gt(g)
g=g.gcQ(g)
f.a.uniform3f(f.d,e,c,g)
g=d.bg(new V.a_(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dZ(0)
c=h.d
m=new Float32Array(H.bp(H.w(new V.cs(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).af(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gam(i)
g=h.e
e=c.gbI()
f=c.gbh()
c=c.gbp()
g.a.uniform3f(g.d,e,f,c)
c=i.gbc()
g=c.gb3(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gb3(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gb2(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gcc()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gcd()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gce()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dP
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cw
if(k>=s.length)return H.c(s,k)
h=s[k]
s=i.gbc()
H.w(p,"$isd",z,"$asd")
if(!C.a.br(p,s)){s.sb2(0,p.length)
C.a.h(p,s)}s=i.gb9(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcQ(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcq(i)
f=h.c
g=s.gaK(s)
r=s.gaL(s)
s=s.gaM()
f.a.uniform3f(f.d,g,r,s)
s=i.gbK()
r=h.d
g=s.gaK(s)
f=s.gaL(s)
s=s.gaM()
r.a.uniform3f(r.d,g,f,s)
s=i.gbb(i)
f=h.e
g=s.gaK(s)
r=s.gaL(s)
s=s.gaM()
f.a.uniform3f(f.d,g,r,s)
s=l.bg(i.gb9(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gbc()
r=s.gb3(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gb3(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gb2(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gam(i)
r=h.y
g=s.gbI()
f=s.gbh()
s=s.gbp()
r.a.uniform3f(r.d,g,f,s)
s=i.gjb()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gjc()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gcc()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gcd()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gce()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.W(p,this.Q.d)
z=this.a
u=this.Q.d
z.ai(z.dA,z.by,u)
break
case C.h:this.W(p,this.Q.e)
z=this.a
u=this.Q.e
z.ab(z.dB,z.by,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gZ(u).dZ(0)
a.Q=u}z=z.fy
z.toString
z.ak(u.af(0,!0))}if(w.dy){this.W(p,this.ch)
z=this.a
u=this.ch
z.ab(z.dC,z.dD,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bz
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.W(p,this.cx.d)
z=this.a
u=this.cx.d
z.ai(z.dE,z.bA,u)
u=this.a
z=this.cx.f
u=u.bz
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.W(p,this.cx.e)
z=this.a
u=this.cx.e
z.ab(z.dF,z.bA,u)
u=this.a
z=this.cx.f
u=u.bz
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bC
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bB
u.a.uniform1f(u.d,s)
break
case C.f:this.W(p,this.cy.d)
z=this.a
u=this.cy.d
z.ai(z.dG,z.bD,u)
u=this.a
z=this.cy.f
u=u.bC
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bB
z.a.uniform1f(z.d,s)
break
case C.h:this.W(p,this.cy.e)
z=this.a
u=this.cy.e
z.ab(z.dH,z.bD,u)
u=this.a
z=this.cy.f
u=u.bC
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bB
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bE
z.a.uniform1f(z.d,t)
break
case C.f:this.W(p,this.db.d)
z=this.a
t=this.db.d
z.ai(z.dI,z.bF,t)
t=this.a
z=this.db.f
t=t.bE
t.a.uniform1f(t.d,z)
break
case C.h:this.W(p,this.db.e)
z=this.a
t=this.db.e
z.ab(z.dJ,z.bF,t)
t=this.a
z=this.db.f
t=t.bE
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bo(a)
z=b.e
z.bo(a)
z.aR(a)
z.ed(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].ed(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.hs()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d4().ax}},io:{"^":"d6;0f,a,b,0c,0d,0e"},d6:{"^":"b;",
bk:["ep",function(){}]},ip:{"^":"d6;a,b,0c,0d,0e"},bb:{"^":"d6;0f,a,b,0c,0d,0e",
dh:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.Q(this.b+".color",z,a,this,[V.a5])
y.b=!0
this.a.ah(y)}},
bk:["bR",function(){this.ep()
this.dh(new V.a5(1,1,1))}],
sam:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bk()
z=this.a
z.a=null
z.ah(null)}this.dh(b)}},ir:{"^":"bb;0ch,0f,a,b,0c,0d,0e",
fE:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".refraction",y,a,this,[P.u])
z.b=!0
this.a.ah(z)}},
bk:function(){this.bR()
this.fE(1)}},is:{"^":"bb;0ch,0f,a,b,0c,0d,0e",
c8:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".shininess",y,a,this,[P.u])
z.b=!0
this.a.ah(z)}},
bk:function(){this.bR()
this.c8(100)}},di:{"^":"b;"}}],["","",,T,{"^":"",dj:{"^":"cP;"},jp:{"^":"dj;0b,0c,0d,0e,0f,0r,0x,0y,a"},jt:{"^":"b;a,0b,0c,0d,0e",
hL:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.eh(null,a,null)
w=new T.jp(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.O()
z=W.ad
W.a1(x,"load",H.h(new T.ju(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hK:function(a){return this.hL(a,!1,!1,!1,!1)},
fC:function(a,b,c){var z,y,x,w
b=V.dM(b,2)
z=V.dM(a.width,2)
y=V.dM(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cU(null,null)
x.width=z
x.height=y
w=H.f(C.l.eh(x,"2d"),"$ise0")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mw(w.getImageData(0,0,x.width,x.height))}}},ju:{"^":"m:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fC(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.ig(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.ht()}++x.e}},jv:{"^":"b;a,b,c"}}],["","",,V,{"^":"",hf:{"^":"b;",
b4:function(a,b){return!0},
i:function(a){return"all"},
$isc7:1},c7:{"^":"b;"},ev:{"^":"b;",
b4:["eo",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].b4(0,b))return!0
return!1}],
i:["cV",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc7:1},bH:{"^":"ev;0a",
b4:function(a,b){return!this.eo(0,b)},
i:function(a){return"!["+this.cV(0)+"]"}},j6:{"^":"b;0a",
eu:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.b_(0,0,[P.o,P.ai])
for(y=new H.es(a,a.gl(a),0,[H.aB(a,"x",0)]);y.H();)z.m(0,y.d,!0)
this.a=z},
b4:function(a,b){return this.a.bs(0,b)},
i:function(a){var z=this.a
return P.ca(z.gao(z),0,null)},
$isc7:1,
p:{
aa:function(a){var z=new V.j6()
z.eu(a)
return z}}},eJ:{"^":"b;a,b,0c,0d",
ghO:function(a){return this.b},
F:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eT(this.a.O(0,b))
w.a=H.e([],[V.c7])
w.c=!1
C.a.h(this.c,w)
return w},
hw:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.b4(0,a))return w}return},
i:function(a){return this.b}},eQ:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h5(this.b,"\n","\\n")
y=H.h5(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eR:{"^":"b;a,b,0c",
i:function(a){return this.b}},jE:{"^":"b;0a,0b,0c",
O:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.eJ(this,b)
z.c=H.e([],[V.eT])
this.a.m(0,b,z)}return z},
be:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.eR(this,a)
y=P.i
z.c=new H.b_(0,0,[y,y])
this.b.m(0,a,z)}return z},
im:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eQ])
y=this.c
x=[P.o]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.I(a,t)
r=y.hw(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.ca(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghO(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.ca(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eQ(o==null?p.b:o,q,t)}++t}}}},eT:{"^":"ev;b,0c,0a",
i:function(a){return this.b.b+": "+this.cV(0)}}}],["","",,X,{"^":"",e_:{"^":"b;",$isaR:1},hR:{"^":"eM;0a,0b,0c,0d,0e,0f,0r,0x",
gC:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z}},iD:{"^":"b;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.O()
this.e=z}return z},
aV:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.E(a)},function(){return this.aV(null)},"it","$1","$0","gcX",0,2,1],
sb6:function(a){var z,y,x
if(!J.N(this.a,a)){z=this.a
if(z!=null){z=z.gC()
z.toString
y=H.h(this.gcX(),{func:1,ret:-1,args:[D.t]})
C.a.R(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gC()
z.toString
y=H.h(this.gcX(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.Q("mover",x,this.a,this,[U.ae])
z.b=!0
this.aV(z)}},
$isaR:1,
$ise_:1},eM:{"^":"b;"}}],["","",,V,{"^":"",
nk:function(a){P.jD(C.G,new V.nl(a))},
nl:{"^":"m:48;a",
$1:function(a){H.f(a,"$isbl")
P.dN(C.e.ec(this.a.ghA(),2)+" fps")}},
iR:{"^":"b;a,b,0c",
cb:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.cA().gba().k(0,H.l(z))
if(y==null)if(d){c.$0()
this.aY(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.bx(this.c).h(0,v)
t=W.hU("radio")
t.checked=x
t.name=z
z=W.ad
W.a1(t,"change",H.h(new V.iS(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.bx(this.c).h(0,w.createElement("br"))},
a_:function(a,b,c){return this.cb(a,b,c,!1)},
aY:function(a){var z,y,x,w,v
z=P.cA()
y=P.i
x=P.er(z.gba(),y,y)
x.m(0,this.a,a)
w=z.cK(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fv([],[]).bL(""),"",v)},
p:{
eE:function(a,b){var z,y
z=new V.iR(a,!0)
y=document.getElementById(a)
z.c=y
if(y==null)H.q("Failed to find "+a+" for RadioGroup")
return z}}},
iS:{"^":"m:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.aY(this.d)}}},
jb:{"^":"b;0a,0b",
ew:function(a,b){var z,y,x,w,v,u,t
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
t=W.ad
W.a1(z,"scroll",H.h(new V.je(x),{func:1,ret:-1,args:[t]}),!1,t)},
he:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isd",[P.i],"$asd")
this.fJ()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.im(C.a.hG(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(H.h4(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.c(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cD(C.S,s,C.k,!1)
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
hc:function(a){var z,y,x,w,v,u,t
H.w(a,"$isd",[P.i],"$asd")
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
x=H.f(w.insertCell(-1),"$isdh").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<3;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.f(w.insertCell(-1),"$isdh")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fJ:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jE()
y=P.i
z.a=new H.b_(0,0,[y,V.eJ])
z.b=new H.b_(0,0,[y,V.eR])
z.c=z.O(0,"Start")
y=z.O(0,"Start").F(0,"Bold")
x=V.aa(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Bold").F(0,"Bold")
x=new V.bH()
w=[V.c7]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.aa(new H.a4("*"))
C.a.h(x.a,y)
y=z.O(0,"Bold").F(0,"BoldEnd")
x=V.aa(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").F(0,"Italic")
x=V.aa(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Italic").F(0,"Italic")
x=new V.bH()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.aa(new H.a4("_"))
C.a.h(x.a,y)
y=z.O(0,"Italic").F(0,"ItalicEnd")
x=V.aa(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").F(0,"Code")
x=V.aa(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Code").F(0,"Code")
x=new V.bH()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.aa(new H.a4("`"))
C.a.h(x.a,y)
y=z.O(0,"Code").F(0,"CodeEnd")
x=V.aa(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").F(0,"LinkHead")
x=V.aa(new H.a4("["))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"LinkHead").F(0,"LinkTail")
x=V.aa(new H.a4("|"))
C.a.h(y.a,x)
x=z.O(0,"LinkHead").F(0,"LinkEnd")
y=V.aa(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkHead").F(0,"LinkHead")
y=new V.bH()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("|]"))
C.a.h(y.a,x)
x=z.O(0,"LinkTail").F(0,"LinkEnd")
y=V.aa(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkTail").F(0,"LinkTail")
y=new V.bH()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("|]"))
C.a.h(y.a,x)
C.a.h(z.O(0,"Start").F(0,"Other").a,new V.hf())
x=z.O(0,"Other").F(0,"Other")
y=new V.bH()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("*_`["))
C.a.h(y.a,x)
x=z.O(0,"BoldEnd")
x.d=x.a.be("Bold")
x=z.O(0,"ItalicEnd")
x.d=x.a.be("Italic")
x=z.O(0,"CodeEnd")
x.d=x.a.be("Code")
x=z.O(0,"LinkEnd")
x.d=x.a.be("Link")
x=z.O(0,"Other")
x.d=x.a.be("Other")
this.b=z},
p:{
jc:function(a,b){var z=new V.jb()
z.ew(a,!0)
return z}}},
je:{"^":"m:13;a",
$1:function(a){P.jC(C.r,new V.jd(this.a))}},
jd:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.e.ae(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}},
jq:{"^":"b;a,b,0c,d",
a_:function(a,b,c){var z,y,x,w,v,u
z=W.eh(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.bx(this.c)
x=y.gl(y)
y=W.ag
W.a1(z,"click",H.h(new V.js(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.bx(this.c).h(0,z)
J.bx(this.c).h(0,document.createElement("br"))
w=P.cA().gba().k(0,H.l(this.a))
if(w==null){this.aY(x)
v=c}else{u=P.bX(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.a_(a,b,!1)},
aY:function(a){var z,y,x,w,v
z=P.cA()
y=P.i
x=P.er(z.gba(),y,y)
x.m(0,this.a,H.l(a))
w=z.cK(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fv([],[]).bL(""),"",v)}},
js:{"^":"m:49;a,b,c,d",
$1:function(a){var z,y
H.f(a,"$isag")
z=this.a
y=J.bx(z.c)
y.J(y,new V.jr())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.aY(this.d)}},
jr:{"^":"m:50;",
$1:function(a){var z
H.f(a,"$isV")
if(!!J.H(a).$iscZ){z=a.style
z.border="solid 2px white"}}}}],["","",,K,{"^":"",
h0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z={}
y=V.jc("Test 037",!0)
x=W.cU(null,null)
x.className="pageLargeCanvas"
x.id="testCanvas"
y.a.appendChild(x)
w=[P.i]
y.he(H.e(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],w))
y.hc(H.e(["heightMaps","shapes","scalars"],w))
w=document
v=w.getElementById("testCanvas")
if(v==null)H.q(P.v("Failed to find an element with the identifier, testCanvas."))
u=E.jA(v,!0,!0,!0,!1)
t=new O.ik()
y=O.cV(V.ax)
t.e=y
y.bi(t.gf2(),t.gf3())
y=new O.bb(t,"emission")
y.c=C.c
y.f=new V.a5(0,0,0)
t.f=y
y=new O.bb(t,"ambient")
y.c=C.c
y.f=new V.a5(0,0,0)
t.r=y
y=new O.bb(t,"diffuse")
y.c=C.c
y.f=new V.a5(0,0,0)
t.x=y
y=new O.bb(t,"invDiffuse")
y.c=C.c
y.f=new V.a5(0,0,0)
t.y=y
y=new O.is(t,"specular")
y.c=C.c
y.f=new V.a5(0,0,0)
y.ch=100
t.z=y
y=new O.ip(t,"bump")
y.c=C.c
t.Q=y
t.ch=null
y=new O.bb(t,"reflect")
y.c=C.c
y.f=new V.a5(0,0,0)
t.cx=y
y=new O.ir(t,"refract")
y.c=C.c
y.f=new V.a5(0,0,0)
y.ch=1
t.cy=y
y=new O.io(t,"alpha")
y.c=C.c
y.f=1
t.db=y
y=new D.i2()
y.bS(D.a3)
y.e=H.e([],[D.cl])
y.f=H.e([],[D.iF])
y.r=H.e([],[D.jg])
y.x=H.e([],[D.jw])
y.y=H.e([],[D.jx])
y.z=H.e([],[D.jy])
y.Q=null
y.ch=null
y.cS(y.gf1(),y.gfm(),y.gfo())
t.dx=y
s=y.Q
if(s==null){s=D.O()
y.Q=s
y=s}else y=s
s={func:1,ret:-1,args:[D.t]}
r=H.h(t.gfA(),s)
C.a.h(y.a,r)
r=t.dx
y=r.ch
if(y==null){y=D.O()
r.ch=y}r=H.h(t.gf5(),s)
C.a.h(y.a,r)
t.dy=null
r=t.dx
y=U.e4(V.ew(new V.a_(0,0,0),new V.G(0,1,0),new V.G(1,1,-3)))
q=new V.a5(1,1,1)
p=new D.cl()
p.c=new V.a5(1,1,1)
p.a=new V.G(0,0,1)
o=p.b
p.b=y
y=y.gC()
y.toString
n=H.h(p.geB(),s)
C.a.h(y.a,n)
y=new D.Q("mover",o,p.b,p,[U.ae])
y.b=!0
p.aC(y)
if(!p.c.u(0,q)){o=p.c
p.c=q
y=new D.Q("color",o,q,p,[V.a5])
y.b=!0
p.aC(y)}r.h(0,p)
y=t.r
y.sam(0,new V.a5(0,0,1))
y=t.x
y.sam(0,new V.a5(0,1,0))
y=t.z
y.sam(0,new V.a5(1,0,0))
y=t.z
if(y.c===C.c){y.c=C.i
y.bR()
y.c8(100)
r=y.a
r.a=null
r.ah(null)}y.c8(10)
m=E.ed(null,!0,null,"",null,null)
m.sea(t)
l=E.ed(null,!0,null,"",null,null)
l.y.h(0,m)
y=new U.eg()
y.bS(U.ae)
y.bi(y.gf0(),y.gfn())
y.e=null
y.f=V.c8()
y.r=0
r=u.r
p=new U.k5()
n=U.cW()
n.scP(0,!0)
n.scD(6.283185307179586)
n.scF(0)
n.sY(0,0)
n.scE(100)
n.sV(0)
n.scp(0.5)
p.b=n
n=n.gC()
n.toString
k=H.h(p.gaD(),s)
C.a.h(n.a,k)
n=U.cW()
n.scP(0,!0)
n.scD(6.283185307179586)
n.scF(0)
n.sY(0,0)
n.scE(100)
n.sV(0)
n.scp(0.5)
p.c=n
C.a.h(n.gC().a,k)
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
j=new X.aE(!1,!1,!1)
o=p.d
p.d=j
n=[X.aE]
k=new D.Q("modifiers",o,j,p,n)
k.b=!0
p.T(k)
k=p.f
if(k!==!1){p.f=!1
k=new D.Q("invertX",k,!1,p,[P.ai])
k.b=!0
p.T(k)}k=p.r
if(k!==!1){p.r=!1
k=new D.Q("invertY",k,!1,p,[P.ai])
k.b=!0
p.T(k)}p.aZ(r)
y.h(0,p)
r=u.r
p=new U.k4()
k=U.cW()
k.scP(0,!0)
k.scD(6.283185307179586)
k.scF(0)
k.sY(0,0)
k.scE(100)
k.sV(0)
k.scp(0.2)
p.b=k
k=k.gC()
k.toString
i=H.h(p.gaD(),s)
C.a.h(k.a,i)
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
j=new X.aE(!0,!1,!1)
o=p.c
p.c=j
k=new D.Q("modifiers",o,j,p,n)
k.b=!0
p.T(k)
p.aZ(r)
y.h(0,p)
r=u.r
p=new U.k6()
p.c=0.01
p.d=0
p.e=0
j=new X.aE(!1,!1,!1)
p.b=j
n=new D.Q("modifiers",null,j,p,n)
n.b=!0
p.T(n)
p.aZ(r)
y.h(0,p)
l.sb6(y)
y=new M.hJ()
r=O.cV(E.aQ)
y.d=r
r.bi(y.gf6(),y.gf7())
y.e=null
y.f=null
y.r=null
y.x=null
h=new X.iD()
h.b=1.0471975511965976
h.c=0.1
h.d=2000
h.sb6(null)
r=h.b
if(!$.r.$2(r,1.0471975511965976)){o=h.b
h.b=1.0471975511965976
r=new D.Q("fov",o,1.0471975511965976,h,[P.u])
r.b=!0
h.aV(r)}r=h.c
if(!$.r.$2(r,0.1)){o=h.c
h.c=0.1
r=new D.Q("near",o,0.1,h,[P.u])
r.b=!0
h.aV(r)}r=h.d
if(!$.r.$2(r,2000)){o=h.d
h.d=2000
r=new D.Q("far",o,2000,h,[P.u])
r.b=!0
h.aV(r)}r=y.a
if(r!==h){if(r!=null){r=r.gC()
r.toString
p=H.h(y.gaE(),s)
C.a.R(r.a,p)}o=y.a
y.a=h
r=h.gC()
r.toString
p=H.h(y.gaE(),s)
C.a.h(r.a,p)
r=new D.Q("camera",o,y.a,y,[X.e_])
r.b=!0
y.aU(r)}g=new X.hR()
r=new V.c0(0,0,0,1)
g.a=r
g.b=!0
g.c=2000
g.d=!0
g.e=0
g.f=!1
r=V.eG(0,0,1,1)
g.r=r
r=y.b
if(r!==g){if(r!=null){r=r.gC()
r.toString
p=H.h(y.gaE(),s)
C.a.R(r.a,p)}o=y.b
y.b=g
r=g.gC()
r.toString
p=H.h(y.gaE(),s)
C.a.h(r.a,p)
r=new D.Q("target",o,y.b,y,[X.eM])
r.b=!0
y.aU(r)}y.d.h(0,l)
y.a.sb6(U.e4(V.aD(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
r=u.d
if(r!==y){if(r!=null){r=r.gC()
r.toString
p=H.h(u.gcW(),s)
C.a.R(r.a,p)}u.d=y
y=y.gC()
y.toString
s=H.h(u.gcW(),s)
C.a.h(y.a,s)
u.ez()}z.a=null
z.b=""
z.c=1
f=new K.mX(z,u,m)
y=new V.jq("heightMaps",!0,new K.mY(z,f))
w=w.getElementById("heightMaps")
y.c=w
if(w==null)H.q("Failed to find heightMaps for Texture2DGroup")
y.a_(0,"../resources/HeightMap1.png",!0)
y.h(0,"../resources/HeightMap2.png")
y.h(0,"../resources/HeightMap3.png")
y.h(0,"../resources/ScrewHeightMap.png")
e=new K.mZ(z,f)
y=V.eE("shapes",!0)
y.a_(0,"Cuboid",new K.n6(e))
y.a_(0,"Cylinder",new K.n7(e))
y.a_(0,"LatLonSphere",new K.n8(e))
y.a_(0,"Sphere",new K.n9(e))
y.a_(0,"Toroid",new K.na(e))
y.a_(0,"Grid Small",new K.nb(e))
y.cb(0,"Grid Medium",new K.nc(e),!0)
y.a_(0,"Grid Large",new K.nd(e))
d=new K.n_(z,f)
z=V.eE("scalars",!0)
z.a_(0,"0.1",new K.n0(d))
z.a_(0,"0.2",new K.n1(d))
z.a_(0,"0.4",new K.n2(d))
z.cb(0,"0.6",new K.n3(d),!0)
z.a_(0,"0.8",new K.n4(d))
z.a_(0,"1.0",new K.n5(d))
V.nk(u)},
mX:{"^":"m:0;a,b,c",
$0:function(){var z,y,x,w
z=this.a
if(z.a!=null&&z.b.length!==0){y=this.b
x=y.f.hK(z.b)
w=x.y
y=H.h(new K.mW(z,y,x,this.c),{func:1,ret:-1,args:[D.t]})
C.a.h(w.a,y)}}},
mW:{"^":"m:11;a,b,c,d",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$ist")
z=this.b.f
y=this.c
x=y.r
w=y.x
z=z.a
z.bindFramebuffer(36160,z.createFramebuffer())
z.framebufferTexture2D(36160,36064,3553,y.b,0)
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
v=new Uint8Array(x*w*4)
z.readPixels(0,0,x,w,6408,5121,v)
z.bindFramebuffer(36160,null)
z=this.a
y=z.a
u=F.df()
u.bG(y)
u.a5()
u.hg(new T.jv(v,x,w),z.c)
z=$.$get$aA()
z.toString
u.iq(new Z.b1($.$get$ds().a&~z.a))
u.io(!1)
u.a5()
this.d.scT(0,u)}},
mY:{"^":"m:22;a,b",
$1:function(a){this.a.b=a
this.b.$0()}},
mZ:{"^":"m:51;a,b",
$1:function(a){this.a.a=a
this.b.$0()}},
n6:{"^":"m:0;a",
$0:function(){this.a.$1(F.fT(50,null,null,50))}},
n7:{"^":"m:0;a",
$0:function(){this.a.$1(F.mx(1,!1,!1,80,80,1))}},
n8:{"^":"m:0;a",
$0:function(){this.a.$1(F.mT(80,80))}},
n9:{"^":"m:0;a",
$0:function(){this.a.$1(F.nm(50,null,50))}},
na:{"^":"m:0;a",
$0:function(){this.a.$1(F.nq(50,1,50,0.5))}},
nb:{"^":"m:0;a",
$0:function(){this.a.$1(F.dI(50,null,50))}},
nc:{"^":"m:0;a",
$0:function(){this.a.$1(F.dI(100,null,100))}},
nd:{"^":"m:0;a",
$0:function(){this.a.$1(F.dI(150,null,150))}},
n_:{"^":"m:52;a,b",
$1:function(a){this.a.c=a
this.b.$0()}},
n0:{"^":"m:0;a",
$0:function(){this.a.$1(0.1)}},
n1:{"^":"m:0;a",
$0:function(){this.a.$1(0.2)}},
n2:{"^":"m:0;a",
$0:function(){this.a.$1(0.4)}},
n3:{"^":"m:0;a",
$0:function(){this.a.$1(0.6)}},
n4:{"^":"m:0;a",
$0:function(){this.a.$1(0.8)}},
n5:{"^":"m:0;a",
$0:function(){this.a.$1(1)}}},1]]
setupProgram(dart,0,0)
J.H=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.el.prototype
return J.ek.prototype}if(typeof a=="string")return J.c5.prototype
if(a==null)return J.em.prototype
if(typeof a=="boolean")return J.hY.prototype
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cI(a)}
J.aN=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cI(a)}
J.ce=function(a){if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cI(a)}
J.mH=function(a){if(typeof a=="number")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cc.prototype
return a}
J.mI=function(a){if(typeof a=="number")return J.c4.prototype
if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cc.prototype
return a}
J.dH=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cc.prototype
return a}
J.aW=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cI(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).u(a,b)}
J.h7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mH(a).N(a,b)}
J.dO=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mI(a).j(a,b)}
J.dP=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fY(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aN(a).k(a,b)}
J.cM=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fY(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ce(a).m(a,b,c)}
J.h8=function(a,b){return J.dH(a).I(a,b)}
J.h9=function(a,b,c){return J.aW(a).fw(a,b,c)}
J.ha=function(a,b,c,d){return J.aW(a).dn(a,b,c,d)}
J.hb=function(a,b){return J.dH(a).X(a,b)}
J.cN=function(a,b,c){return J.aN(a).hm(a,b,c)}
J.cO=function(a,b){return J.ce(a).L(a,b)}
J.hc=function(a,b,c,d){return J.ce(a).ay(a,b,c,d)}
J.dQ=function(a,b){return J.ce(a).J(a,b)}
J.bx=function(a){return J.aW(a).gcm(a)}
J.b5=function(a){return J.H(a).gU(a)}
J.by=function(a){return J.ce(a).ga0(a)}
J.au=function(a){return J.aN(a).gl(a)}
J.hd=function(a,b){return J.aW(a).i8(a,b)}
J.he=function(a,b){return J.aW(a).sa2(a,b)}
J.ac=function(a){return J.H(a).i(a)}
I.ak=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cT.prototype
C.H=J.p.prototype
C.a=J.ba.prototype
C.I=J.ek.prototype
C.d=J.el.prototype
C.t=J.em.prototype
C.e=J.c4.prototype
C.b=J.c5.prototype
C.P=J.c6.prototype
C.V=H.db.prototype
C.W=W.iz.prototype
C.z=J.iE.prototype
C.X=P.dd.prototype
C.q=J.cc.prototype
C.A=W.bO.prototype
C.B=W.kt.prototype
C.D=new P.hk(!1)
C.C=new P.hj(C.D)
C.E=new P.iC()
C.F=new P.ke()
C.j=new P.lf()
C.c=new A.cj(0,"ColorSourceType.None")
C.i=new A.cj(1,"ColorSourceType.Solid")
C.f=new A.cj(2,"ColorSourceType.Texture2D")
C.h=new A.cj(3,"ColorSourceType.TextureCube")
C.r=new P.b7(0)
C.G=new P.b7(5e6)
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
C.w=H.e(I.ak([127,2047,65535,1114111]),[P.o])
C.m=H.e(I.ak([0,0,32776,33792,1,10240,0,0]),[P.o])
C.n=H.e(I.ak([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.o=H.e(I.ak([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.R=H.e(I.ak([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.S=H.e(I.ak([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.p=H.e(I.ak([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.x=H.e(I.ak([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.T=H.e(I.ak([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.y=H.e(I.ak([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.Q=H.e(I.ak([]),[P.i])
C.U=new H.hw(0,{},C.Q,[P.i,P.i])
C.k=new P.k7(!1)
$.aC=0
$.bz=null
$.dV=null
$.dA=!1
$.fW=null
$.fP=null
$.h3=null
$.cH=null
$.cK=null
$.dJ=null
$.bq=null
$.bU=null
$.bV=null
$.dB=!1
$.T=C.j
$.ea=null
$.e9=null
$.e8=null
$.e7=null
$.r=V.it()
$.eB=null
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
I.$lazy(y,x,w)}})(["e6","$get$e6",function(){return H.fV("_$dart_dartClosure")},"d1","$get$d1",function(){return H.fV("_$dart_js")},"eU","$get$eU",function(){return H.aF(H.cy({
toString:function(){return"$receiver$"}}))},"eV","$get$eV",function(){return H.aF(H.cy({$method$:null,
toString:function(){return"$receiver$"}}))},"eW","$get$eW",function(){return H.aF(H.cy(null))},"eX","$get$eX",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f0","$get$f0",function(){return H.aF(H.cy(void 0))},"f1","$get$f1",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eZ","$get$eZ",function(){return H.aF(H.f_(null))},"eY","$get$eY",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"f3","$get$f3",function(){return H.aF(H.f_(void 0))},"f2","$get$f2",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dv","$get$dv",function(){return P.ku()},"bW","$get$bW",function(){return[]},"fe","$get$fe",function(){return P.kb()},"fi","$get$fi",function(){return H.ix(H.bp(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))},"fF","$get$fF",function(){return P.iX("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fL","$get$fL",function(){return P.md()},"e5","$get$e5",function(){return{}},"ff","$get$ff",function(){return Z.ar(0)},"ds","$get$ds",function(){return Z.ar(511)},"aI","$get$aI",function(){return Z.ar(1)},"aA","$get$aA",function(){return Z.ar(2)},"aH","$get$aH",function(){return Z.ar(4)},"aJ","$get$aJ",function(){return Z.ar(8)},"aK","$get$aK",function(){return Z.ar(16)},"bM","$get$bM",function(){return Z.ar(32)},"bN","$get$bN",function(){return Z.ar(64)},"dt","$get$dt",function(){return Z.ar(96)},"b2","$get$b2",function(){return Z.ar(128)},"aG","$get$aG",function(){return Z.ar(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.E},{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1,args:[D.t]},{func:1,ret:P.E,args:[F.aq,P.u,P.u]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.E,args:[F.aw]},{func:1,ret:P.E,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.o,[P.k,E.aQ]]},{func:1,ret:P.E,args:[D.t]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:P.E,args:[W.ad]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:-1,args:[P.o,[P.k,V.ax]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.o,[P.k,U.ae]]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.o,[P.k,D.a3]]},{func:1,ret:P.E,args:[P.i]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.u},{func:1,ret:P.i,args:[P.o]},{func:1,ret:P.ai,args:[W.J]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[P.b],opt:[P.ay]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.E,args:[P.X]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.P,args:[P.o]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bO]},{func:1,ret:P.ai,args:[P.u,P.u]},{func:1,ret:P.ai,args:[[P.k,D.a3]]},{func:1,ret:P.E,args:[P.i,,]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.o,args:[[P.d,P.o],P.o]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:-1,args:[P.i,P.o]},{func:1,ret:V.a_,args:[P.u]},{func:1,ret:[P.aU,,],args:[,]},{func:1,ret:[P.I,P.i,P.i],args:[[P.I,P.i,P.i],P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.E,args:[P.bl]},{func:1,ret:P.E,args:[W.ag]},{func:1,ret:P.E,args:[W.V]},{func:1,ret:P.E,args:[F.cx]},{func:1,ret:P.E,args:[P.u]},{func:1,args:[P.i]},{func:1,ret:W.V,args:[W.J]}]
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
if(x==y)H.np(d||a)
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
Isolate.ak=a.ak
Isolate.dF=a.dF
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
if(typeof dartMainRunner==="function")dartMainRunner(K.h0,[])
else K.h0([])})})()
//# sourceMappingURL=test.dart.js.map
