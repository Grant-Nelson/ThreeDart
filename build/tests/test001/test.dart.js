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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isk)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="l"){processStatics(init.statics[b2]=b3.l,b4)
delete b3.l}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cu(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cv=function(){}
var dart=[["","",,H,{"^":"",kD:{"^":"a;a"}}],["","",,J,{"^":"",
D:function(a){return void 0},
cB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bV:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cy==null){H.jW()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.dQ("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c5()]
if(v!=null)return v
v=H.k0(a)
if(v!=null)return v
if(typeof a=="function")return C.A
y=Object.getPrototypeOf(a)
if(y==null)return C.l
if(y===Object.prototype)return C.l
if(typeof w=="function"){Object.defineProperty(w,$.$get$c5(),{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
k:{"^":"a;",
n:function(a,b){return a===b},
gG:function(a){return H.b1(a)},
i:["bR",function(a){return"Instance of '"+H.ay(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fj:{"^":"k;",
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$isaf:1},
fl:{"^":"k;",
n:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$isy:1},
c6:{"^":"k;",
gG:function(a){return 0},
i:["bS",function(a){return String(a)}]},
fP:{"^":"c6;"},
bN:{"^":"c6;"},
br:{"^":"c6;",
i:function(a){var z=a[$.$get$cW()]
if(z==null)return this.bS(a)
return"JavaScript function for "+H.f(J.a4(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc2:1},
aw:{"^":"k;$ti",
h:function(a,b){H.v(b,H.r(a,0))
if(!!a.fixed$length)H.X(P.a7("add"))
a.push(b)},
J:function(a,b){var z
if(!!a.fixed$length)H.X(P.a7("remove"))
for(z=0;z<a.length;++z)if(J.K(a[z],b)){a.splice(z,1)
return!0}return!1},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.b(P.aQ(a))}},
t:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.K(z,y,H.f(a[y]))
return z.join(b)},
dh:function(a){return this.t(a,"")},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
at:function(a,b,c){var z=a.length
if(b>z)throw H.b(P.a1(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.b(P.a1(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.r(a,0)])
return H.e(a.slice(b,c),[H.r(a,0)])},
gaP:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.fh())},
i:function(a){return P.c3(a,"[","]")},
gI:function(a){return new J.ai(a,a.length,0,[H.r(a,0)])},
gG:function(a){return H.b1(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.X(P.a7("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.bB(b,"newLength",null))
if(b<0)throw H.b(P.a1(b,0,null,"newLength",null))
a.length=b},
K:function(a,b,c){H.J(b)
H.v(c,H.r(a,0))
if(!!a.immutable$list)H.X(P.a7("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.aq(a,b))
if(b>=a.length||b<0)throw H.b(H.aq(a,b))
a[b]=c},
$isi:1,
$isc:1,
l:{
fi:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.b(P.bB(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a1(a,0,4294967295,"length",null))
return J.d3(new Array(a),b)},
d3:function(a,b){return J.aW(H.e(a,[b]))},
aW:function(a){H.bj(a)
a.fixed$length=Array
return a}}},
kC:{"^":"aw;$ti"},
ai:{"^":"a;a,b,c,0d,$ti",
gC:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bq:{"^":"k;",
gdf:function(a){return a===0?1/a<0:a<0},
bs:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.b(P.a7(""+a+".floor()"))},
O:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.a7(""+a+".round()"))},
bG:function(a,b){var z
if(b>20)throw H.b(P.a1(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gdf(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){return a&0x1FFFFFFF},
m:function(a,b){if(typeof b!=="number")throw H.b(H.ap(b))
return a*b},
bM:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
bU:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bi(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.bi(a,b)},
bi:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.a7("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
ap:function(a,b){var z
if(a>0)z=this.cQ(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cQ:function(a,b){return b>31?0:a>>>b},
a_:function(a,b){if(typeof b!=="number")throw H.b(H.ap(b))
return a<b},
$isq:1,
$isL:1},
d4:{"^":"bq;",$isx:1},
fk:{"^":"bq;"},
bH:{"^":"k;",
aN:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.aq(a,b))
if(b<0)throw H.b(H.aq(a,b))
if(b>=a.length)H.X(H.aq(a,b))
return a.charCodeAt(b)},
am:function(a,b){if(b>=a.length)throw H.b(H.aq(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.G(b)
if(typeof b!=="string")throw H.b(P.bB(b,null,null))
return a+b},
au:function(a,b,c){H.J(c)
if(c==null)c=a.length
if(b<0)throw H.b(P.bL(b,null,null))
if(b>c)throw H.b(P.bL(b,null,null))
if(c>a.length)throw H.b(P.bL(c,null,null))
return a.substring(b,c)},
bP:function(a,b){return this.au(a,b,null)},
m:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.p)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
dw:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.m(c,z)+a},
Z:function(a,b){return this.dw(a,b," ")},
d_:function(a,b,c){if(c>a.length)throw H.b(P.a1(c,0,a.length,null,null))
return H.eu(a,b,c)},
i:function(a){return a},
gG:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$isdg:1,
$isj:1}}],["","",,H,{"^":"",
fh:function(){return new P.hm("No element")},
P:{"^":"hT;a",
gj:function(a){return this.a.length},
k:function(a,b){return C.c.aN(this.a,b)},
$asdR:function(){return[P.x]},
$asm:function(){return[P.x]},
$asi:function(){return[P.x]},
$asc:function(){return[P.x]}},
f1:{"^":"i;"},
d9:{"^":"a;a,b,c,0d,$ti",
gC:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.by(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.b(P.aQ(z))
w=this.c
if(typeof x!=="number")return H.A(x)
if(w>=x){this.d=null
return!1}this.d=y.u(z,w);++this.c
return!0}},
fB:{"^":"i;a,b,$ti",
gI:function(a){return new H.fC(J.bk(this.a),this.b,this.$ti)},
gj:function(a){return J.aO(this.a)},
u:function(a,b){return this.b.$1(J.cF(this.a,b))},
$asi:function(a,b){return[b]}},
fC:{"^":"c4;0a,b,c,$ti",
v:function(){var z=this.b
if(z.v()){this.a=this.c.$1(z.gC(z))
return!0}this.a=null
return!1},
gC:function(a){return this.a},
$asc4:function(a,b){return[b]}},
i8:{"^":"i;a,b,$ti",
gI:function(a){return new H.i9(J.bk(this.a),this.b,this.$ti)}},
i9:{"^":"c4;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gC(z)))return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bF:{"^":"a;$ti"},
dR:{"^":"a;$ti"},
hT:{"^":"bI+dR;"}}],["","",,H,{"^":"",
jR:function(a){return init.types[H.J(a)]},
jZ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.D(a).$isu},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a4(a)
if(typeof z!=="string")throw H.b(H.ap(a))
return z},
b1:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
ay:function(a){var z,y,x,w,v,u,t,s,r
z=J.D(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.t||!!J.D(a).$isbN){v=C.k(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.c.am(w,0)===36)w=C.c.bP(w,1)
r=H.cz(H.bj(H.ar(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dj:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
fZ:function(a){var z,y,x,w
z=H.e([],[P.x])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.b(H.ap(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.b.ap(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.b(H.ap(w))}return H.dj(z)},
dk:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.b(H.ap(x))
if(x<0)throw H.b(H.ap(x))
if(x>65535)return H.fZ(a)}return H.dj(a)},
fY:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.b.ap(z,10))>>>0,56320|z&1023)}throw H.b(P.a1(a,0,1114111,null,null))},
V:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fX:function(a){return a.b?H.V(a).getUTCFullYear()+0:H.V(a).getFullYear()+0},
fV:function(a){return a.b?H.V(a).getUTCMonth()+1:H.V(a).getMonth()+1},
fR:function(a){return a.b?H.V(a).getUTCDate()+0:H.V(a).getDate()+0},
fS:function(a){return a.b?H.V(a).getUTCHours()+0:H.V(a).getHours()+0},
fU:function(a){return a.b?H.V(a).getUTCMinutes()+0:H.V(a).getMinutes()+0},
fW:function(a){return a.b?H.V(a).getUTCSeconds()+0:H.V(a).getSeconds()+0},
fT:function(a){return a.b?H.V(a).getUTCMilliseconds()+0:H.V(a).getMilliseconds()+0},
A:function(a){throw H.b(H.ap(a))},
h:function(a,b){if(a==null)J.aO(a)
throw H.b(H.aq(a,b))},
aq:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,"index",null)
z=H.J(J.aO(a))
if(!(b<0)){if(typeof z!=="number")return H.A(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bL(b,"index",null)},
jM:function(a,b,c){if(a>c)return new P.bK(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bK(a,c,!0,b,"end","Invalid value")
return new P.ah(!0,b,"end",null)},
ap:function(a){return new P.ah(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.df()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ew})
z.name=""}else z.toString=H.ew
return z},
ew:function(){return J.a4(this.dartException)},
X:function(a){throw H.b(a)},
B:function(a){throw H.b(P.aQ(a))},
at:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kd(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.ap(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c7(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.de(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dF()
u=$.$get$dG()
t=$.$get$dH()
s=$.$get$dI()
r=$.$get$dM()
q=$.$get$dN()
p=$.$get$dK()
$.$get$dJ()
o=$.$get$dP()
n=$.$get$dO()
m=v.N(y)
if(m!=null)return z.$1(H.c7(H.G(y),m))
else{m=u.N(y)
if(m!=null){m.method="call"
return z.$1(H.c7(H.G(y),m))}else{m=t.N(y)
if(m==null){m=s.N(y)
if(m==null){m=r.N(y)
if(m==null){m=q.N(y)
if(m==null){m=p.N(y)
if(m==null){m=s.N(y)
if(m==null){m=o.N(y)
if(m==null){m=n.N(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.de(H.G(y),m))}}return z.$1(new H.hS(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dt()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ah(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dt()
return a},
aL:function(a){var z
if(a==null)return new H.e7(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e7(a)},
jO:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.K(0,a[y],a[x])}return b},
jY:function(a,b,c,d,e,f){H.n(a,"$isc2")
switch(H.J(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.Z("Unsupported number of arguments for wrapped closure"))},
aK:function(a,b){var z
H.J(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jY)
a.$identity=z
return z},
eM:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.D(d).$isc){z.$reflectionInfo=d
x=H.h1(z).r}else x=d
w=e?Object.create(new H.hn().constructor.prototype):Object.create(new H.bZ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.a8
if(typeof u!=="number")return u.E()
$.a8=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.cQ(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.jR,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cK:H.c_
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cQ(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
eJ:function(a,b,c,d){var z=H.c_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cQ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eL(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eJ(y,!w,z,b)
if(y===0){w=$.a8
if(typeof w!=="number")return w.E()
$.a8=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aP
if(v==null){v=H.bC("self")
$.aP=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a8
if(typeof w!=="number")return w.E()
$.a8=w+1
t+=w
w="return function("+t+"){return this."
v=$.aP
if(v==null){v=H.bC("self")
$.aP=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
eK:function(a,b,c,d){var z,y
z=H.c_
y=H.cK
switch(b?-1:a){case 0:throw H.b(H.ha("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eL:function(a,b){var z,y,x,w,v,u,t,s
z=$.aP
if(z==null){z=H.bC("self")
$.aP=z}y=$.cJ
if(y==null){y=H.bC("receiver")
$.cJ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eK(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.a8
if(typeof y!=="number")return y.E()
$.a8=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.a8
if(typeof y!=="number")return y.E()
$.a8=y+1
return new Function(z+y+"}")()},
cu:function(a,b,c,d,e,f,g){var z,y
z=J.aW(H.bj(b))
H.J(c)
y=!!J.D(d).$isc?J.aW(d):d
return H.eM(a,z,c,y,!!e,f,g)},
G:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.ab(a,"String"))},
k3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.ab(a,"num"))},
ek:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.ab(a,"bool"))},
J:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.ab(a,"int"))},
es:function(a,b){throw H.b(H.ab(a,H.G(b).substring(3)))},
k5:function(a,b){var z=J.by(b)
throw H.b(H.eH(a,z.au(b,3,z.gj(b))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.D(a)[b])return a
H.es(a,b)},
aM:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.D(a)[b]
else z=!0
if(z)return a
H.k5(a,b)},
bj:function(a){if(a==null)return a
if(!!J.D(a).$isc)return a
throw H.b(H.ab(a,"List"))},
k_:function(a,b){if(a==null)return a
if(!!J.D(a).$isc)return a
if(J.D(a)[b])return a
H.es(a,b)},
el:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.J(z)]
else return a.$S()}return},
bx:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.el(J.D(a))
if(z==null)return!1
y=H.eo(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.cq)return a
$.cq=!0
try{if(H.bx(a,b))return a
z=H.bA(b)
y=H.ab(a,z)
throw H.b(y)}finally{$.cq=!1}},
cw:function(a,b){if(a!=null&&!H.ct(a,b))H.X(H.ab(a,H.bA(b)))
return a},
ef:function(a){var z
if(a instanceof H.o){z=H.el(J.D(a))
if(z!=null)return H.bA(z)
return"Closure"}return H.ay(a)},
ka:function(a){throw H.b(new P.eR(H.G(a)))},
em:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
ar:function(a){if(a==null)return
return a.$ti},
lq:function(a,b,c){return H.aN(a["$as"+H.f(c)],H.ar(b))},
bi:function(a,b,c,d){var z
H.G(c)
H.J(d)
z=H.aN(a["$as"+H.f(c)],H.ar(b))
return z==null?null:z[d]},
bz:function(a,b,c){var z
H.G(b)
H.J(c)
z=H.aN(a["$as"+H.f(b)],H.ar(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.J(b)
z=H.ar(a)
return z==null?null:z[b]},
bA:function(a){var z=H.as(a,null)
return z},
as:function(a,b){var z,y
H.w(b,"$isc",[P.j],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cz(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.J(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.f(b[y])}if('func' in a)return H.jy(a,b)
if('futureOr' in a)return"FutureOr<"+H.as("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jy:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.c.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.as(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.as(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.as(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.as(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jN(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.G(z[l])
n=n+m+H.as(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cz:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.j],"$asc")
if(a==null)return""
z=new P.cb("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.as(u,c)}v="<"+z.i(0)+">"
return v},
aN:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bh:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ar(a)
y=J.D(a)
if(y[b]==null)return!1
return H.ei(H.aN(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.G(b)
H.bj(c)
H.G(d)
if(a==null)return a
z=H.bh(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cz(c,0,null)
throw H.b(H.ab(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ei:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a3(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a3(a[y],b,c[y],d))return!1
return!0},
lo:function(a,b,c){return a.apply(b,H.aN(J.D(b)["$as"+H.f(c)],H.ar(b)))},
ep:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="y"||a===-1||a===-2||H.ep(z)}return!1},
ct:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="y"||b===-1||b===-2||H.ep(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.ct(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bx(a,b)}y=J.D(a).constructor
x=H.ar(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.a3(y,null,b,null)
return z},
v:function(a,b){if(a!=null&&!H.ct(a,b))throw H.b(H.ab(a,H.bA(b)))
return a},
a3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a3(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="y")return!0
if('func' in c)return H.eo(a,b,c,d)
if('func' in a)return c.builtin$cls==="c2"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a3("type" in a?a.type:null,b,x,d)
else if(H.a3(a,b,x,d))return!0
else{if(!('$is'+"aU" in y.prototype))return!1
w=y.prototype["$as"+"aU"]
v=H.aN(w,z?a.slice(1):null)
return H.a3(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bA(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ei(H.aN(r,z),b,u,d)},
eo:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a3(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a3(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a3(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a3(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.k2(m,b,l,d)},
k2:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a3(c[w],d,a[w],b))return!1}return!0},
lp:function(a,b,c){Object.defineProperty(a,H.G(b),{value:c,enumerable:false,writable:true,configurable:true})},
k0:function(a){var z,y,x,w,v,u
z=H.G($.en.$1(a))
y=$.bS[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bW[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.G($.eh.$2(a,z))
if(z!=null){y=$.bS[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bW[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bX(x)
$.bS[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bW[z]=x
return x}if(v==="-"){u=H.bX(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.er(a,x)
if(v==="*")throw H.b(P.dQ(z))
if(init.leafTags[z]===true){u=H.bX(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.er(a,x)},
er:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cB(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bX:function(a){return J.cB(a,!1,null,!!a.$isu)},
k1:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bX(z)
else return J.cB(z,c,null,null)},
jW:function(){if(!0===$.cy)return
$.cy=!0
H.jX()},
jX:function(){var z,y,x,w,v,u,t,s
$.bS=Object.create(null)
$.bW=Object.create(null)
H.jS()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.et.$1(v)
if(u!=null){t=H.k1(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jS:function(){var z,y,x,w,v,u,t
z=C.x()
z=H.aJ(C.u,H.aJ(C.z,H.aJ(C.j,H.aJ(C.j,H.aJ(C.y,H.aJ(C.v,H.aJ(C.w(C.k),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.en=new H.jT(v)
$.eh=new H.jU(u)
$.et=new H.jV(t)},
aJ:function(a,b){return a(b)||b},
eu:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ev:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
h0:{"^":"a;a,b,c,d,e,f,r,0x",l:{
h1:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aW(z)
y=z[0]
x=z[1]
return new H.h0(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hB:{"^":"a;a,b,c,d,e,f",
N:function(a){var z,y,x
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
l:{
aa:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hB(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dL:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fM:{"^":"M;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+z+"' on null"},
l:{
de:function(a,b){return new H.fM(a,b==null?null:b.method)}}},
fo:{"^":"M;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
l:{
c7:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fo(a,y,z?null:b.receiver)}}},
hS:{"^":"M;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kd:{"^":"o:16;a",
$1:function(a){if(!!J.D(a).$isM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e7:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa6:1},
o:{"^":"a;",
i:function(a){return"Closure '"+H.ay(this).trim()+"'"},
gbK:function(){return this},
$isc2:1,
gbK:function(){return this}},
dy:{"^":"o;"},
hn:{"^":"dy;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bZ:{"^":"dy;a,b,c,d",
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bZ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gG:function(a){var z,y
z=this.c
if(z==null)y=H.b1(this.a)
else y=typeof z!=="object"?J.au(z):H.b1(z)
return(y^H.b1(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.ay(z)+"'")},
l:{
c_:function(a){return a.a},
cK:function(a){return a.c},
bC:function(a){var z,y,x,w,v
z=new H.bZ("self","target","receiver","name")
y=J.aW(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hC:{"^":"M;a",
i:function(a){return this.a},
l:{
ab:function(a,b){return new H.hC("TypeError: "+H.f(P.bD(a))+": type '"+H.ef(a)+"' is not a subtype of type '"+b+"'")}}},
eG:{"^":"M;a",
i:function(a){return this.a},
l:{
eH:function(a,b){return new H.eG("CastError: "+H.f(P.bD(a))+": type '"+H.ef(a)+"' is not a subtype of type '"+b+"'")}}},
h9:{"^":"M;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
l:{
ha:function(a){return new H.h9(a)}}},
ax:{"^":"fz;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gY:function(a){return new H.d8(this,[H.r(this,0)])},
bp:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.b9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.b9(y,b)}else return this.dd(b)},
dd:function(a){var z=this.d
if(z==null)return!1
return this.aO(this.az(z,J.au(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.an(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.an(w,b)
x=y==null?null:y.b
return x}else return this.de(b)},
de:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.az(z,J.au(a)&0x3ffffff)
x=this.aO(y,a)
if(x<0)return
return y[x].b},
K:function(a,b,c){var z,y,x,w,v,u
H.v(b,H.r(this,0))
H.v(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aC()
this.b=z}this.b3(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aC()
this.c=y}this.b3(y,b,c)}else{x=this.d
if(x==null){x=this.aC()
this.d=x}w=J.au(b)&0x3ffffff
v=this.az(x,w)
if(v==null)this.aG(x,w,[this.aD(b,c)])
else{u=this.aO(v,b)
if(u>=0)v[u].b=c
else v.push(this.aD(b,c))}}},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.aQ(this))
z=z.c}},
b3:function(a,b,c){var z
H.v(b,H.r(this,0))
H.v(c,H.r(this,1))
z=this.an(a,b)
if(z==null)this.aG(a,b,this.aD(b,c))
else z.b=c},
cg:function(){this.r=this.r+1&67108863},
aD:function(a,b){var z,y
z=new H.fr(H.v(a,H.r(this,0)),H.v(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.cg()
return z},
aO:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].a,b))return y
return-1},
i:function(a){return P.da(this)},
an:function(a,b){return a[b]},
az:function(a,b){return a[b]},
aG:function(a,b,c){a[b]=c},
cb:function(a,b){delete a[b]},
b9:function(a,b){return this.an(a,b)!=null},
aC:function(){var z=Object.create(null)
this.aG(z,"<non-identifier-key>",z)
this.cb(z,"<non-identifier-key>")
return z},
$isd7:1},
fr:{"^":"a;a,b,0c,0d"},
d8:{"^":"f1;a,$ti",
gj:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.fs(z,z.r,this.$ti)
y.c=z.e
return y}},
fs:{"^":"a;a,b,0c,0d,$ti",
gC:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aQ(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jT:{"^":"o:16;a",
$1:function(a){return this.a(a)}},
jU:{"^":"o:21;a",
$2:function(a,b){return this.a(a,b)}},
jV:{"^":"o:22;a",
$1:function(a){return this.a(H.G(a))}},
fm:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdg:1,
l:{
fn:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.b(new P.fb("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
jN:function(a){return J.d3(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
k4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cp:function(a){return a},
ao:function(a,b,c){H.bj(b)
if(a>>>0!==a||a>=c)throw H.b(H.aq(b,a))},
jx:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.b(H.jM(a,b,c))
return b},
fI:{"^":"k;","%":"DataView;ArrayBufferView;c9|e1|e2|fH|e3|e4|am"},
c9:{"^":"fI;",
gj:function(a){return a.length},
$isu:1,
$asu:I.cv},
fH:{"^":"e2;",
k:function(a,b){H.ao(b,a,a.length)
return a[b]},
$asbF:function(){return[P.q]},
$asm:function(){return[P.q]},
$isi:1,
$asi:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
am:{"^":"e4;",
$asbF:function(){return[P.x]},
$asm:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]},
$isc:1,
$asc:function(){return[P.x]}},
kL:{"^":"am;",
k:function(a,b){H.ao(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kM:{"^":"am;",
k:function(a,b){H.ao(b,a,a.length)
return a[b]},
"%":"Int32Array"},
kN:{"^":"am;",
k:function(a,b){H.ao(b,a,a.length)
return a[b]},
"%":"Int8Array"},
kO:{"^":"am;",
k:function(a,b){H.ao(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
kP:{"^":"am;",
k:function(a,b){H.ao(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kQ:{"^":"am;",
gj:function(a){return a.length},
k:function(a,b){H.ao(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
fJ:{"^":"am;",
gj:function(a){return a.length},
k:function(a,b){H.ao(b,a,a.length)
return a[b]},
at:function(a,b,c){return new Uint8Array(a.subarray(b,H.jx(b,c,a.length)))},
"%":";Uint8Array"},
e1:{"^":"c9+m;"},
e2:{"^":"e1+bF;"},
e3:{"^":"c9+m;"},
e4:{"^":"e3+bF;"}}],["","",,P,{"^":"",
ib:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jF()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aK(new P.id(z),1)).observe(y,{childList:true})
return new P.ic(z,y,x)}else if(self.setImmediate!=null)return P.jG()
return P.jH()},
ld:[function(a){self.scheduleImmediate(H.aK(new P.ie(H.d(a,{func:1,ret:-1})),0))},"$1","jF",4,0,7],
le:[function(a){self.setImmediate(H.aK(new P.ig(H.d(a,{func:1,ret:-1})),0))},"$1","jG",4,0,7],
lf:[function(a){P.ce(C.h,H.d(a,{func:1,ret:-1}))},"$1","jH",4,0,7],
ce:function(a,b){var z
H.d(b,{func:1,ret:-1})
z=C.b.a6(a.a,1000)
return P.jc(z<0?0:z,b)},
dB:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.az]})
z=C.b.a6(a.a,1000)
return P.jd(z<0?0:z,b)},
jB:function(a,b){if(H.bx(a,{func:1,args:[P.a,P.a6]}))return b.dG(a,null,P.a,P.a6)
if(H.bx(a,{func:1,args:[P.a]}))return H.d(a,{func:1,ret:null,args:[P.a]})
throw H.b(P.bB(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jA:function(){var z,y
for(;z=$.aI,z!=null;){$.bf=null
y=z.b
$.aI=y
if(y==null)$.be=null
z.a.$0()}},
ln:[function(){$.cr=!0
try{P.jA()}finally{$.bf=null
$.cr=!1
if($.aI!=null)$.$get$cm().$1(P.ej())}},"$0","ej",0,0,1],
ee:function(a){var z=new P.dX(H.d(a,{func:1,ret:-1}))
if($.aI==null){$.be=z
$.aI=z
if(!$.cr)$.$get$cm().$1(P.ej())}else{$.be.b=z
$.be=z}},
jE:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.aI
if(z==null){P.ee(a)
$.bf=$.be
return}y=new P.dX(a)
x=$.bf
if(x==null){y.b=z
$.bf=y
$.aI=y}else{y.b=x.b
x.b=y
$.bf=y
if(y.b==null)$.be=y}},
k6:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.F
if(C.d===y){P.bR(null,null,C.d,a)
return}y.toString
P.bR(null,null,y,H.d(y.aJ(a),z))},
dA:function(a,b){var z,y
z={func:1,ret:-1}
H.d(b,z)
y=$.F
if(y===C.d){y.toString
return P.ce(a,b)}return P.ce(a,H.d(y.aJ(b),z))},
hx:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.az]}
H.d(b,z)
y=$.F
if(y===C.d){y.toString
return P.dB(a,b)}x=y.bm(b,P.az)
$.F.toString
return P.dB(a,H.d(x,z))},
bQ:function(a,b,c,d,e){var z={}
z.a=d
P.jE(new P.jC(z,e))},
ec:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.F
if(y===c)return d.$0()
$.F=c
z=y
try{y=d.$0()
return y}finally{$.F=z}},
ed:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.F
if(y===c)return d.$1(e)
$.F=c
z=y
try{y=d.$1(e)
return y}finally{$.F=z}},
jD:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
bR:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.aJ(d):c.cW(d,-1)
P.ee(d)},
id:{"^":"o:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ic:{"^":"o:18;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ie:{"^":"o:0;a",
$0:function(){this.a.$0()}},
ig:{"^":"o:0;a",
$0:function(){this.a.$0()}},
ea:{"^":"a;a,0b,c",
c1:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aK(new P.jf(this,b),0),a)
else throw H.b(P.a7("`setTimeout()` not found."))},
c2:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aK(new P.je(this,a,Date.now(),b),0),a)
else throw H.b(P.a7("Periodic timer."))},
$isaz:1,
l:{
jc:function(a,b){var z=new P.ea(!0,0)
z.c1(a,b)
return z},
jd:function(a,b){var z=new P.ea(!1,0)
z.c2(a,b)
return z}}},
jf:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
je:{"^":"o:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.b.bU(w,x)}z.c=y
this.d.$1(z)}},
aH:{"^":"a;0a,b,c,d,e,$ti",
dl:function(a){if(this.c!==6)return!0
return this.b.b.aV(H.d(this.d,{func:1,ret:P.af,args:[P.a]}),a.a,P.af,P.a)},
dc:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bx(z,{func:1,args:[P.a,P.a6]}))return H.cw(w.dM(z,a.a,a.b,null,y,P.a6),x)
else return H.cw(w.aV(H.d(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
ae:{"^":"a;bh:a<,b,0cJ:c<,$ti",
bE:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.d){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jB(b,y)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ae(0,$.F,[c])
w=b==null?1:3
this.b4(new P.aH(x,w,a,b,[z,c]))
return x},
dP:function(a,b){return this.bE(a,null,b)},
b4:function(a){var z,y
z=this.a
if(z<=1){a.a=H.n(this.c,"$isaH")
this.c=a}else{if(z===2){y=H.n(this.c,"$isae")
z=y.a
if(z<4){y.b4(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bR(null,null,z,H.d(new P.iv(this,a),{func:1,ret:-1}))}},
be:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.n(this.c,"$isaH")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.n(this.c,"$isae")
y=u.a
if(y<4){u.be(a)
return}this.a=y
this.c=u.c}z.a=this.ao(a)
y=this.b
y.toString
P.bR(null,null,y,H.d(new P.iA(z,this),{func:1,ret:-1}))}},
aF:function(){var z=H.n(this.c,"$isaH")
this.c=null
return this.ao(z)},
ao:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
b7:function(a){var z,y,x,w
z=H.r(this,0)
H.cw(a,{futureOr:1,type:z})
y=this.$ti
x=H.bh(a,"$isaU",y,"$asaU")
if(x){z=H.bh(a,"$isae",y,null)
if(z)P.dZ(a,this)
else P.iw(a,this)}else{w=this.aF()
H.v(a,z)
this.a=4
this.c=a
P.bd(this,w)}},
aw:[function(a,b){var z
H.n(b,"$isa6")
z=this.aF()
this.a=8
this.c=new P.a0(a,b)
P.bd(this,z)},function(a){return this.aw(a,null)},"dW","$2","$1","gc8",4,2,23],
$isaU:1,
l:{
iw:function(a,b){var z,y,x
b.a=1
try{a.bE(new P.ix(b),new P.iy(b),null)}catch(x){z=H.at(x)
y=H.aL(x)
P.k6(new P.iz(b,z,y))}},
dZ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.n(a.c,"$isae")
if(z>=4){y=b.aF()
b.a=a.a
b.c=a.c
P.bd(b,y)}else{y=H.n(b.c,"$isaH")
b.a=2
b.c=a
a.be(y)}},
bd:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.n(y.c,"$isa0")
y=y.b
u=v.a
t=v.b
y.toString
P.bQ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bd(z.a,b)}y=z.a
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
if(p){H.n(r,"$isa0")
y=y.b
u=r.a
t=r.b
y.toString
P.bQ(null,null,y,u,t)
return}o=$.F
if(o==null?q!=null:o!==q)$.F=q
else o=null
y=b.c
if(y===8)new P.iD(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iC(x,b,r).$0()}else if((y&2)!==0)new P.iB(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.D(y).$isaU){if(y.a>=4){n=H.n(t.c,"$isaH")
t.c=null
b=t.ao(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dZ(y,t)
return}}m=b.b
n=H.n(m.c,"$isaH")
m.c=null
b=m.ao(n)
y=x.a
u=x.b
if(!y){H.v(u,H.r(m,0))
m.a=4
m.c=u}else{H.n(u,"$isa0")
m.a=8
m.c=u}z.a=m
y=m}}}},
iv:{"^":"o:0;a,b",
$0:function(){P.bd(this.a,this.b)}},
iA:{"^":"o:0;a,b",
$0:function(){P.bd(this.b,this.a.a)}},
ix:{"^":"o:12;a",
$1:function(a){var z=this.a
z.a=0
z.b7(a)}},
iy:{"^":"o:26;a",
$2:function(a,b){this.a.aw(a,H.n(b,"$isa6"))},
$1:function(a){return this.$2(a,null)}},
iz:{"^":"o:0;a,b,c",
$0:function(){this.a.aw(this.b,this.c)}},
iD:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bC(H.d(w.d,{func:1}),null)}catch(v){y=H.at(v)
x=H.aL(v)
if(this.d){w=H.n(this.a.a.c,"$isa0").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.n(this.a.a.c,"$isa0")
else u.b=new P.a0(y,x)
u.a=!0
return}if(!!J.D(z).$isaU){if(z instanceof P.ae&&z.gbh()>=4){if(z.gbh()===8){w=this.b
w.b=H.n(z.gcJ(),"$isa0")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.dP(new P.iE(t),null)
w.a=!1}}},
iE:{"^":"o:28;a",
$1:function(a){return this.a}},
iC:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.v(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.aV(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.at(t)
y=H.aL(t)
x=this.a
x.b=new P.a0(z,y)
x.a=!0}}},
iB:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.n(this.a.a.c,"$isa0")
w=this.c
if(w.dl(z)&&w.e!=null){v=this.b
v.b=w.dc(z)
v.a=!1}}catch(u){y=H.at(u)
x=H.aL(u)
w=H.n(this.a.a.c,"$isa0")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a0(y,x)
s.a=!0}}},
dX:{"^":"a;a,0b"},
ca:{"^":"a;$ti",
gj:function(a){var z,y
z={}
y=new P.ae(0,$.F,[P.x])
z.a=0
this.dk(new P.hq(z,this),!0,new P.hr(z,y),y.gc8())
return y}},
hq:{"^":"o;a,b",
$1:function(a){H.v(a,H.bz(this.b,"ca",0));++this.a.a},
$S:function(){return{func:1,ret:P.y,args:[H.bz(this.b,"ca",0)]}}},
hr:{"^":"o:0;a,b",
$0:function(){this.b.b7(this.a.a)}},
dv:{"^":"a;$ti"},
hp:{"^":"a;"},
az:{"^":"a;"},
a0:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isM:1},
jm:{"^":"a;",$islc:1},
jC:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.df()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.i(0)
throw x}},
iZ:{"^":"jm;",
dN:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.d===$.F){a.$0()
return}P.ec(null,null,this,a,-1)}catch(x){z=H.at(x)
y=H.aL(x)
P.bQ(null,null,this,z,H.n(y,"$isa6"))}},
dO:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.d===$.F){a.$1(b)
return}P.ed(null,null,this,a,b,-1,c)}catch(x){z=H.at(x)
y=H.aL(x)
P.bQ(null,null,this,z,H.n(y,"$isa6"))}},
cW:function(a,b){return new P.j0(this,H.d(a,{func:1,ret:b}),b)},
aJ:function(a){return new P.j_(this,H.d(a,{func:1,ret:-1}))},
bm:function(a,b){return new P.j1(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
bC:function(a,b){H.d(a,{func:1,ret:b})
if($.F===C.d)return a.$0()
return P.ec(null,null,this,a,b)},
aV:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.F===C.d)return a.$1(b)
return P.ed(null,null,this,a,b,c,d)},
dM:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.F===C.d)return a.$2(b,c)
return P.jD(null,null,this,a,b,c,d,e,f)},
dG:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
j0:{"^":"o;a,b,c",
$0:function(){return this.a.bC(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
j_:{"^":"o:1;a,b",
$0:function(){return this.a.dN(this.b)}},
j1:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dO(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fu:function(a,b,c){H.bj(a)
return H.w(H.jO(a,new H.ax(0,0,[b,c])),"$isd7",[b,c],"$asd7")},
ft:function(a,b){return new H.ax(0,0,[a,b])},
fv:function(a,b,c,d){return new P.iL(0,0,[d])},
fg:function(a,b,c){var z,y
if(P.cs(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bg()
C.a.h(y,a)
try{P.jz(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.dw(b,H.k_(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
c3:function(a,b,c){var z,y,x
if(P.cs(a))return b+"..."+c
z=new P.cb(b)
y=$.$get$bg()
C.a.h(y,a)
try{x=z
x.a=P.dw(x.ga2(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.ga2()+c
y=z.ga2()
return y.charCodeAt(0)==0?y:y},
cs:function(a){var z,y
for(z=0;y=$.$get$bg(),z<y.length;++z)if(a===y[z])return!0
return!1},
jz:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.f(z.gC(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.v()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.v();t=s,s=r){r=z.gC(z);++x
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
da:function(a){var z,y,x
z={}
if(P.cs(a))return"{...}"
y=new P.cb("")
try{C.a.h($.$get$bg(),a)
x=y
x.a=x.ga2()+"{"
z.a=!0
J.eA(a,new P.fA(z,y))
z=y
z.a=z.ga2()+"}"}finally{z=$.$get$bg()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.ga2()
return z.charCodeAt(0)==0?z:z},
iL:{"^":"iF;a,0b,0c,0d,0e,0f,r,$ti",
gI:function(a){return P.e0(this,this.r,H.r(this,0))},
gj:function(a){return this.a},
h:function(a,b){var z,y
H.v(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.co()
this.b=z}return this.b5(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.co()
this.c=y}return this.b5(y,b)}else return this.c3(0,b)},
c3:function(a,b){var z,y,x
H.v(b,H.r(this,0))
z=this.d
if(z==null){z=P.co()
this.d=z}y=this.b8(b)
x=z[y]
if(x==null)z[y]=[this.av(b)]
else{if(this.bc(x,b)>=0)return!1
x.push(this.av(b))}return!0},
J:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bf(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bf(this.c,b)
else return this.cE(0,b)},
cE:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.cf(z,b)
x=this.bc(y,b)
if(x<0)return!1
this.bj(y.splice(x,1)[0])
return!0},
b5:function(a,b){H.v(b,H.r(this,0))
if(H.n(a[b],"$iscn")!=null)return!1
a[b]=this.av(b)
return!0},
bf:function(a,b){var z
if(a==null)return!1
z=H.n(a[b],"$iscn")
if(z==null)return!1
this.bj(z)
delete a[b]
return!0},
b6:function(){this.r=this.r+1&67108863},
av:function(a){var z,y
z=new P.cn(H.v(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.b6()
return z},
bj:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.b6()},
b8:function(a){return J.au(a)&0x3ffffff},
cf:function(a,b){return a[this.b8(b)]},
bc:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].a,b))return y
return-1},
l:{
co:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cn:{"^":"a;a,0b,0c"},
iM:{"^":"a;a,b,0c,0d,$ti",
gC:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aQ(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.v(z.a,H.r(this,0))
this.c=z.b
return!0}}},
l:{
e0:function(a,b,c){var z=new P.iM(a,b,[c])
z.c=a.e
return z}}},
iF:{"^":"hb;"},
bI:{"^":"iN;",$isi:1,$isc:1},
m:{"^":"a;$ti",
gI:function(a){return new H.d9(a,this.gj(a),0,[H.bi(this,a,"m",0)])},
u:function(a,b){return this.k(a,b)},
dR:function(a,b){var z,y,x
z=H.e([],[H.bi(this,a,"m",0)])
C.a.sj(z,this.gj(a))
y=0
while(!0){x=this.gj(a)
if(typeof x!=="number")return H.A(x)
if(!(y<x))break
C.a.K(z,y,this.k(a,y));++y}return z},
dQ:function(a){return this.dR(a,!0)},
i:function(a){return P.c3(a,"[","]")}},
fz:{"^":"a_;"},
fA:{"^":"o:15;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
a_:{"^":"a;$ti",
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.bi(this,a,"a_",0),H.bi(this,a,"a_",1)]})
for(z=J.bk(this.gY(a));z.v();){y=z.gC(z)
b.$2(y,this.k(a,y))}},
gj:function(a){return J.aO(this.gY(a))},
i:function(a){return P.da(a)},
$isS:1},
hd:{"^":"a;$ti",
i:function(a){return P.c3(this,"{","}")},
u:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.cG("index"))
if(b<0)H.X(P.a1(b,0,null,"index",null))
for(z=P.e0(this,this.r,H.r(this,0)),y=0;z.v();){x=z.d
if(b===y)return x;++y}throw H.b(P.E(b,this,"index",null,y))},
$isi:1},
hb:{"^":"hd;"},
iN:{"^":"a+m;"}}],["","",,P,{"^":"",c1:{"^":"a;$ti"},cT:{"^":"hp;$ti"},f3:{"^":"c1;",
$asc1:function(){return[P.j,[P.c,P.x]]}},hW:{"^":"f3;a"},hX:{"^":"cT;",
d1:function(a,b,c){var z,y,x,w
z=a.length
P.dl(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jl(0,0,x)
if(w.cd(a,b,z)!==z)w.bk(C.c.aN(a,z-1),0)
return C.C.at(x,0,w.b)},
d0:function(a){return this.d1(a,0,null)},
$ascT:function(){return[P.j,[P.c,P.x]]}},jl:{"^":"a;a,b,c",
bk:function(a,b){var z,y,x,w,v
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
cd:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.aN(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.am(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bk(w,C.c.am(a,u)))x=u}else if(w<=2047){v=this.b
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
f5:function(a){var z=J.D(a)
if(!!z.$iso)return z.i(a)
return"Instance of '"+H.ay(a)+"'"},
fw:function(a,b,c,d){var z,y
H.v(b,d)
z=J.fi(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.K(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
fx:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.gI(a);x.v();)C.a.h(y,H.v(x.gC(x),c))
if(b)return y
return H.w(J.aW(y),"$isc",z,"$asc")},
cc:function(a,b,c){var z,y
z=P.x
H.w(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.w(a,"$isaw",[z],"$asaw")
y=a.length
c=P.dl(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a_()
z=c<y}else z=!0
return H.dk(z?C.a.at(a,b,c):a)}return P.hs(a,b,c)},
hs:function(a,b,c){var z,y,x
H.w(a,"$isi",[P.x],"$asi")
z=J.bk(a)
for(y=0;y<b;++y)if(!z.v())throw H.b(P.a1(b,0,y,null,null))
x=[]
for(;z.v();)x.push(z.gC(z))
return H.dk(x)},
h2:function(a,b,c){return new H.fm(a,H.fn(a,!1,!0,!1))},
jk:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.x],"$asc")
if(c===C.m){z=$.$get$eb().b
z=z.test(b)}else z=!1
if(z)return b
y=C.q.d0(H.v(b,H.bz(c,"c1",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.fY(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.f5(a)},
Z:function(a){return new P.dY(a)},
cC:function(a){H.k4(a)},
af:{"^":"a;"},
"+bool":0,
aS:{"^":"a;a,b",
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.aS))return!1
return this.a===b.a&&this.b===b.b},
gG:function(a){var z=this.a
return(z^C.b.ap(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.eS(H.fX(this))
y=P.bn(H.fV(this))
x=P.bn(H.fR(this))
w=P.bn(H.fS(this))
v=P.bn(H.fU(this))
u=P.bn(H.fW(this))
t=P.eT(H.fT(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
l:{
eS:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bn:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"L;"},
"+double":0,
av:{"^":"a;a",
m:function(a,b){return new P.av(C.b.O(this.a*b))},
a_:function(a,b){return C.b.a_(this.a,H.n(b,"$isav").a)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.av))return!1
return this.a===b.a},
gG:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.f0()
y=this.a
if(y<0)return"-"+new P.av(0-y).i(0)
x=z.$1(C.b.a6(y,6e7)%60)
w=z.$1(C.b.a6(y,1e6)%60)
v=new P.f_().$1(y%1e6)
return""+C.b.a6(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
l:{
d1:function(a,b,c,d,e,f){return new P.av(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
f_:{"^":"o:11;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
f0:{"^":"o:11;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
M:{"^":"a;"},
df:{"^":"M;",
i:function(a){return"Throw of null."}},
ah:{"^":"M;a,b,c,d",
gay:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gax:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gay()+y+x
if(!this.a)return w
v=this.gax()
u=P.bD(this.b)
return w+v+": "+H.f(u)},
l:{
bB:function(a,b,c){return new P.ah(!0,a,b,c)},
cG:function(a){return new P.ah(!1,null,a,"Must not be null")}}},
bK:{"^":"ah;e,f,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
l:{
bL:function(a,b,c){return new P.bK(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.bK(b,c,!0,a,d,"Invalid value")},
dl:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.A(a)
if(0<=a){if(typeof c!=="number")return H.A(c)
z=a>c}else z=!0
if(z)throw H.b(P.a1(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.A(c)
z=b>c}else z=!0
if(z)throw H.b(P.a1(b,a,c,"end",f))
return b}return c}}},
fd:{"^":"ah;e,j:f>,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){if(J.ex(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
l:{
E:function(a,b,c,d,e){var z=H.J(e!=null?e:J.aO(b))
return new P.fd(b,z,!0,a,c,"Index out of range")}}},
hU:{"^":"M;a",
i:function(a){return"Unsupported operation: "+this.a},
l:{
a7:function(a){return new P.hU(a)}}},
hR:{"^":"M;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
l:{
dQ:function(a){return new P.hR(a)}}},
hm:{"^":"M;a",
i:function(a){return"Bad state: "+this.a}},
eO:{"^":"M;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bD(z))+"."},
l:{
aQ:function(a){return new P.eO(a)}}},
fN:{"^":"a;",
i:function(a){return"Out of Memory"},
$isM:1},
dt:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isM:1},
eR:{"^":"M;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
dY:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fb:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.c.au(x,0,75)+"..."
return y+"\n"+x}},
x:{"^":"L;"},
"+int":0,
i:{"^":"a;$ti",
gj:function(a){var z,y
z=this.gI(this)
for(y=0;z.v();)++y
return y},
u:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.cG("index"))
if(b<0)H.X(P.a1(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.v();){x=z.gC(z)
if(b===y)return x;++y}throw H.b(P.E(b,this,"index",null,y))},
i:function(a){return P.fg(this,"(",")")}},
c4:{"^":"a;$ti"},
c:{"^":"a;$ti",$isi:1},
"+List":0,
S:{"^":"a;$ti"},
y:{"^":"a;",
gG:function(a){return P.a.prototype.gG.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
L:{"^":"a;"},
"+num":0,
a:{"^":";",
n:function(a,b){return this===b},
gG:function(a){return H.b1(this)},
i:function(a){return"Instance of '"+H.ay(this)+"'"},
toString:function(){return this.i(this)}},
a6:{"^":"a;"},
j:{"^":"a;",$isdg:1},
"+String":0,
cb:{"^":"a;a2:a<",
gj:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
l:{
dw:function(a,b,c){var z=J.bk(b)
if(!z.v())return a
if(c.length===0){do a+=H.f(z.gC(z))
while(z.v())}else{a+=H.f(z.gC(z))
for(;z.v();)a=a+c+H.f(z.gC(z))}return a}}}}],["","",,W,{"^":"",
cP:function(a,b){var z=document.createElement("canvas")
return z},
f2:function(a){H.n(a,"$isU")
return"wheel"},
bO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e_:function(a,b,c,d){var z,y
z=W.bO(W.bO(W.bO(W.bO(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eg:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.d)return a
return z.bm(a,b)},
bp:{"^":"Q;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ke:{"^":"k;0j:length=","%":"AccessibleNodeList"},
kf:{"^":"bp;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kg:{"^":"bp;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
eF:{"^":"k;","%":";Blob"},
c0:{"^":"bp;",
aW:function(a,b,c){var z=a.getContext(b,P.jI(c,null))
return z},
$isc0:1,
"%":"HTMLCanvasElement"},
km:{"^":"C;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ko:{"^":"eQ;0j:length=","%":"CSSPerspective"},
aR:{"^":"k;",$isaR:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kp:{"^":"ik;0j:length=",
bL:function(a,b){var z=a.getPropertyValue(this.c6(a,b))
return z==null?"":z},
c6:function(a,b){var z,y
z=$.$get$cU()
y=z[b]
if(typeof y==="string")return y
y=this.cR(a,b)
z[b]=y
return y},
cR:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eY()+b
if(z in a)return z
return b},
gaK:function(a){return a.bottom},
gU:function(a){return a.height},
ga7:function(a){return a.left},
gaU:function(a){return a.right},
gak:function(a){return a.top},
gV:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eP:{"^":"a;",
ga7:function(a){return this.bL(a,"left")}},
cV:{"^":"k;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
eQ:{"^":"k;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kq:{"^":"cV;0j:length=","%":"CSSTransformValue"},
kr:{"^":"cV;0j:length=","%":"CSSUnparsedValue"},
ks:{"^":"k;0j:length=","%":"DataTransferItemList"},
kt:{"^":"k;",
i:function(a){return String(a)},
"%":"DOMException"},
ku:{"^":"im;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.W,P.L]]},
$asm:function(){return[[P.W,P.L]]},
$isi:1,
$asi:function(){return[[P.W,P.L]]},
$isc:1,
$asc:function(){return[[P.W,P.L]]},
$asp:function(){return[[P.W,P.L]]},
"%":"ClientRectList|DOMRectList"},
eZ:{"^":"k;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gV(a))+" x "+H.f(this.gU(a))},
n:function(a,b){var z
if(b==null)return!1
z=H.bh(b,"$isW",[P.L],"$asW")
if(!z)return!1
z=J.bU(b)
return a.left===z.ga7(b)&&a.top===z.gak(b)&&this.gV(a)===z.gV(b)&&this.gU(a)===z.gU(b)},
gG:function(a){return W.e_(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gV(a)&0x1FFFFFFF,this.gU(a)&0x1FFFFFFF)},
gaK:function(a){return a.bottom},
gU:function(a){return a.height},
ga7:function(a){return a.left},
gaU:function(a){return a.right},
gak:function(a){return a.top},
gV:function(a){return a.width},
$isW:1,
$asW:function(){return[P.L]},
"%":";DOMRectReadOnly"},
kv:{"^":"ip;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.j]},
$asm:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asp:function(){return[P.j]},
"%":"DOMStringList"},
kw:{"^":"k;0j:length=","%":"DOMTokenList"},
ij:{"^":"bI;a,b",
gj:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.n(z[b],"$isQ")},
h:function(a,b){this.a.appendChild(b)
return b},
gI:function(a){var z=this.dQ(this)
return new J.ai(z,z.length,0,[H.r(z,0)])},
$asm:function(){return[W.Q]},
$asi:function(){return[W.Q]},
$asc:function(){return[W.Q]}},
Q:{"^":"C;",
gbn:function(a){return new W.ij(a,a.children)},
gbo:function(a){return P.h_(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.L)},
i:function(a){return a.localName},
$isQ:1,
"%":";Element"},
Y:{"^":"k;",$isY:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
U:{"^":"k;",
bl:["bQ",function(a,b,c,d){H.d(c,{func:1,args:[W.Y]})
if(c!=null)this.c4(a,b,c,!1)}],
c4:function(a,b,c,d){return a.addEventListener(b,H.aK(H.d(c,{func:1,args:[W.Y]}),1),!1)},
$isU:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e5|e6|e8|e9"},
aT:{"^":"eF;",$isaT:1,"%":"File"},
kx:{"^":"iu;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aT]},
$asm:function(){return[W.aT]},
$isi:1,
$asi:function(){return[W.aT]},
$isc:1,
$asc:function(){return[W.aT]},
$asp:function(){return[W.aT]},
"%":"FileList"},
ky:{"^":"U;0j:length=","%":"FileWriter"},
kz:{"^":"bp;0j:length=","%":"HTMLFormElement"},
aV:{"^":"k;",$isaV:1,"%":"Gamepad"},
kA:{"^":"k;0j:length=","%":"History"},
kB:{"^":"iH;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.C]},
$asm:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asp:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
aX:{"^":"cf;",$isaX:1,"%":"KeyboardEvent"},
kF:{"^":"k;",
i:function(a){return String(a)},
"%":"Location"},
kG:{"^":"k;0j:length=","%":"MediaList"},
kH:{"^":"U;",
bl:function(a,b,c,d){H.d(c,{func:1,args:[W.Y]})
if(b==="message")a.start()
this.bQ(a,b,c,!1)},
"%":"MessagePort"},
kI:{"^":"iO;",
k:function(a,b){return P.ag(a.get(H.G(b)))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ag(y.value[1]))}},
gY:function(a){var z=H.e([],[P.j])
this.D(a,new W.fE(z))
return z},
gj:function(a){return a.size},
$asa_:function(){return[P.j,null]},
$isS:1,
$asS:function(){return[P.j,null]},
"%":"MIDIInputMap"},
fE:{"^":"o:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
kJ:{"^":"iP;",
k:function(a,b){return P.ag(a.get(H.G(b)))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ag(y.value[1]))}},
gY:function(a){var z=H.e([],[P.j])
this.D(a,new W.fF(z))
return z},
gj:function(a){return a.size},
$asa_:function(){return[P.j,null]},
$isS:1,
$asS:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
fF:{"^":"o:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
aY:{"^":"k;",$isaY:1,"%":"MimeType"},
kK:{"^":"iR;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aY]},
$asm:function(){return[W.aY]},
$isi:1,
$asi:function(){return[W.aY]},
$isc:1,
$asc:function(){return[W.aY]},
$asp:function(){return[W.aY]},
"%":"MimeTypeArray"},
a5:{"^":"cf;",$isa5:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ii:{"^":"bI;a",
gI:function(a){var z=this.a.childNodes
return new W.d2(z,z.length,-1,[H.bi(C.D,z,"p",0)])},
gj:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asm:function(){return[W.C]},
$asi:function(){return[W.C]},
$asc:function(){return[W.C]}},
C:{"^":"U;",
i:function(a){var z=a.nodeValue
return z==null?this.bR(a):z},
$isC:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
fK:{"^":"iT;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.C]},
$asm:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asp:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
b0:{"^":"k;0j:length=",$isb0:1,"%":"Plugin"},
kT:{"^":"iX;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b0]},
$asm:function(){return[W.b0]},
$isi:1,
$asi:function(){return[W.b0]},
$isc:1,
$asc:function(){return[W.b0]},
$asp:function(){return[W.b0]},
"%":"PluginArray"},
kV:{"^":"j2;",
k:function(a,b){return P.ag(a.get(H.G(b)))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ag(y.value[1]))}},
gY:function(a){var z=H.e([],[P.j])
this.D(a,new W.h8(z))
return z},
gj:function(a){return a.size},
$asa_:function(){return[P.j,null]},
$isS:1,
$asS:function(){return[P.j,null]},
"%":"RTCStatsReport"},
h8:{"^":"o:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
kX:{"^":"bp;0j:length=","%":"HTMLSelectElement"},
b2:{"^":"U;",$isb2:1,"%":"SourceBuffer"},
kY:{"^":"e6;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b2]},
$asm:function(){return[W.b2]},
$isi:1,
$asi:function(){return[W.b2]},
$isc:1,
$asc:function(){return[W.b2]},
$asp:function(){return[W.b2]},
"%":"SourceBufferList"},
b3:{"^":"k;",$isb3:1,"%":"SpeechGrammar"},
kZ:{"^":"j4;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b3]},
$asm:function(){return[W.b3]},
$isi:1,
$asi:function(){return[W.b3]},
$isc:1,
$asc:function(){return[W.b3]},
$asp:function(){return[W.b3]},
"%":"SpeechGrammarList"},
b4:{"^":"k;0j:length=",$isb4:1,"%":"SpeechRecognitionResult"},
l0:{"^":"j7;",
k:function(a,b){return a.getItem(H.G(b))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gY:function(a){var z=H.e([],[P.j])
this.D(a,new W.ho(z))
return z},
gj:function(a){return a.length},
$asa_:function(){return[P.j,P.j]},
$isS:1,
$asS:function(){return[P.j,P.j]},
"%":"Storage"},
ho:{"^":"o:17;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b5:{"^":"k;",$isb5:1,"%":"CSSStyleSheet|StyleSheet"},
b6:{"^":"U;",$isb6:1,"%":"TextTrack"},
b7:{"^":"U;",$isb7:1,"%":"TextTrackCue|VTTCue"},
l4:{"^":"jb;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b7]},
$asm:function(){return[W.b7]},
$isi:1,
$asi:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asp:function(){return[W.b7]},
"%":"TextTrackCueList"},
l5:{"^":"e9;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b6]},
$asm:function(){return[W.b6]},
$isi:1,
$asi:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asp:function(){return[W.b6]},
"%":"TextTrackList"},
l6:{"^":"k;0j:length=","%":"TimeRanges"},
b8:{"^":"k;",$isb8:1,"%":"Touch"},
aA:{"^":"cf;",$isaA:1,"%":"TouchEvent"},
l7:{"^":"jh;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b8]},
$asm:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asp:function(){return[W.b8]},
"%":"TouchList"},
l8:{"^":"k;0j:length=","%":"TrackDefaultList"},
cf:{"^":"Y;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
la:{"^":"k;",
i:function(a){return String(a)},
"%":"URL"},
lb:{"^":"U;0j:length=","%":"VideoTrackList"},
bc:{"^":"a5;",
gd4:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.a7("deltaY is not supported"))},
gd3:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.a7("deltaX is not supported"))},
$isbc:1,
"%":"WheelEvent"},
ia:{"^":"U;",
cI:function(a,b){return a.requestAnimationFrame(H.aK(H.d(b,{func:1,ret:-1,args:[P.L]}),1))},
cc:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lg:{"^":"jo;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aR]},
$asm:function(){return[W.aR]},
$isi:1,
$asi:function(){return[W.aR]},
$isc:1,
$asc:function(){return[W.aR]},
$asp:function(){return[W.aR]},
"%":"CSSRuleList"},
lh:{"^":"eZ;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
n:function(a,b){var z
if(b==null)return!1
z=H.bh(b,"$isW",[P.L],"$asW")
if(!z)return!1
z=J.bU(b)
return a.left===z.ga7(b)&&a.top===z.gak(b)&&a.width===z.gV(b)&&a.height===z.gU(b)},
gG:function(a){return W.e_(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gU:function(a){return a.height},
gV:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lj:{"^":"jq;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aV]},
$asm:function(){return[W.aV]},
$isi:1,
$asi:function(){return[W.aV]},
$isc:1,
$asc:function(){return[W.aV]},
$asp:function(){return[W.aV]},
"%":"GamepadList"},
lk:{"^":"js;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.C]},
$asm:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asp:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ll:{"^":"ju;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b4]},
$asm:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asp:function(){return[W.b4]},
"%":"SpeechRecognitionResultList"},
lm:{"^":"jw;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b5]},
$asm:function(){return[W.b5]},
$isi:1,
$asi:function(){return[W.b5]},
$isc:1,
$asc:function(){return[W.b5]},
$asp:function(){return[W.b5]},
"%":"StyleSheetList"},
iq:{"^":"ca;a,b,c,$ti",
dk:function(a,b,c,d){var z=H.r(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.O(this.a,this.b,a,!1,z)}},
li:{"^":"iq;a,b,c,$ti"},
ir:{"^":"dv;a,b,c,d,e,$ti",
cS:function(){var z=this.d
if(z!=null&&this.a<=0)J.ez(this.b,this.c,z,!1)},
l:{
O:function(a,b,c,d,e){var z=c==null?null:W.eg(new W.is(c),W.Y)
z=new W.ir(0,a,b,z,!1,[e])
z.cS()
return z}}},
is:{"^":"o:5;a",
$1:function(a){return this.a.$1(H.n(a,"$isY"))}},
p:{"^":"a;$ti",
gI:function(a){return new W.d2(a,this.gj(a),-1,[H.bi(this,a,"p",0)])}},
d2:{"^":"a;a,b,c,0d,$ti",
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ey(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gC:function(a){return this.d}},
ik:{"^":"k+eP;"},
il:{"^":"k+m;"},
im:{"^":"il+p;"},
io:{"^":"k+m;"},
ip:{"^":"io+p;"},
it:{"^":"k+m;"},
iu:{"^":"it+p;"},
iG:{"^":"k+m;"},
iH:{"^":"iG+p;"},
iO:{"^":"k+a_;"},
iP:{"^":"k+a_;"},
iQ:{"^":"k+m;"},
iR:{"^":"iQ+p;"},
iS:{"^":"k+m;"},
iT:{"^":"iS+p;"},
iW:{"^":"k+m;"},
iX:{"^":"iW+p;"},
j2:{"^":"k+a_;"},
e5:{"^":"U+m;"},
e6:{"^":"e5+p;"},
j3:{"^":"k+m;"},
j4:{"^":"j3+p;"},
j7:{"^":"k+a_;"},
ja:{"^":"k+m;"},
jb:{"^":"ja+p;"},
e8:{"^":"U+m;"},
e9:{"^":"e8+p;"},
jg:{"^":"k+m;"},
jh:{"^":"jg+p;"},
jn:{"^":"k+m;"},
jo:{"^":"jn+p;"},
jp:{"^":"k+m;"},
jq:{"^":"jp+p;"},
jr:{"^":"k+m;"},
js:{"^":"jr+p;"},
jt:{"^":"k+m;"},
ju:{"^":"jt+p;"},
jv:{"^":"k+m;"},
jw:{"^":"jv+p;"}}],["","",,P,{"^":"",
ag:function(a){var z,y,x,w,v
if(a==null)return
z=P.ft(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.G(y[w])
z.K(0,v,a[v])}return z},
jI:function(a,b){var z={}
a.D(0,new P.jJ(z))
return z},
d0:function(){var z=$.d_
if(z==null){z=J.bY(window.navigator.userAgent,"Opera",0)
$.d_=z}return z},
eY:function(){var z,y
z=$.cX
if(z!=null)return z
y=$.cY
if(y==null){y=J.bY(window.navigator.userAgent,"Firefox",0)
$.cY=y}if(y)z="-moz-"
else{y=$.cZ
if(y==null){y=!P.d0()&&J.bY(window.navigator.userAgent,"Trident/",0)
$.cZ=y}if(y)z="-ms-"
else z=P.d0()?"-o-":"-webkit-"}$.cX=z
return z},
jJ:{"^":"o:15;a",
$2:function(a,b){this.a[a]=b}},
f8:{"^":"bI;a,b",
gaA:function(){var z,y,x
z=this.b
y=H.bz(z,"m",0)
x=W.Q
return new H.fB(new H.i8(z,H.d(new P.f9(),{func:1,ret:P.af,args:[y]}),[y]),H.d(new P.fa(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.aO(this.gaA().a)},
k:function(a,b){var z=this.gaA()
return z.b.$1(J.cF(z.a,b))},
gI:function(a){var z=P.fx(this.gaA(),!1,W.Q)
return new J.ai(z,z.length,0,[H.r(z,0)])},
$asm:function(){return[W.Q]},
$asi:function(){return[W.Q]},
$asc:function(){return[W.Q]}},
f9:{"^":"o:19;",
$1:function(a){return!!J.D(H.n(a,"$isC")).$isQ}},
fa:{"^":"o:20;",
$1:function(a){return H.aM(H.n(a,"$isC"),"$isQ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iY:{"^":"a;$ti",
gaU:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.v(z+this.c,H.r(this,0))},
gaK:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.v(z+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
n:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bh(b,"$isW",[P.L],"$asW")
if(!z)return!1
z=this.a
y=J.bU(b)
x=y.ga7(b)
if(z==null?x==null:z===x){x=this.b
w=y.gak(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.r(this,0)
if(H.v(z+this.c,w)===y.gaU(b)){if(typeof x!=="number")return x.E()
z=H.v(x+this.d,w)===y.gaK(b)}else z=!1}else z=!1}else z=!1
return z},
gG:function(a){var z,y,x,w,v
z=this.a
y=J.au(z)
x=this.b
w=J.au(x)
if(typeof z!=="number")return z.E()
v=H.r(this,0)
z=H.v(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.v(x+this.d,v)
return P.iI(P.bP(P.bP(P.bP(P.bP(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
W:{"^":"iY;a7:a>,ak:b>,V:c>,U:d>,$ti",l:{
h_:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a_()
if(c<0)z=-c*0
else z=c
H.v(z,e)
if(typeof d!=="number")return d.a_()
if(d<0)y=-d*0
else y=d
return new P.W(a,b,z,H.v(y,e),[e])}}}}],["","",,P,{"^":"",bs:{"^":"k;",$isbs:1,"%":"SVGLength"},kE:{"^":"iK;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b){return this.k(a,b)},
$asm:function(){return[P.bs]},
$isi:1,
$asi:function(){return[P.bs]},
$isc:1,
$asc:function(){return[P.bs]},
$asp:function(){return[P.bs]},
"%":"SVGLengthList"},bv:{"^":"k;",$isbv:1,"%":"SVGNumber"},kR:{"^":"iV;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b){return this.k(a,b)},
$asm:function(){return[P.bv]},
$isi:1,
$asi:function(){return[P.bv]},
$isc:1,
$asc:function(){return[P.bv]},
$asp:function(){return[P.bv]},
"%":"SVGNumberList"},kU:{"^":"k;0j:length=","%":"SVGPointList"},l1:{"^":"j9;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b){return this.k(a,b)},
$asm:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asp:function(){return[P.j]},
"%":"SVGStringList"},l2:{"^":"Q;",
gbn:function(a){return new P.f8(a,new W.ii(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bw:{"^":"k;",$isbw:1,"%":"SVGTransform"},l9:{"^":"jj;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b){return this.k(a,b)},
$asm:function(){return[P.bw]},
$isi:1,
$asi:function(){return[P.bw]},
$isc:1,
$asc:function(){return[P.bw]},
$asp:function(){return[P.bw]},
"%":"SVGTransformList"},iJ:{"^":"k+m;"},iK:{"^":"iJ+p;"},iU:{"^":"k+m;"},iV:{"^":"iU+p;"},j8:{"^":"k+m;"},j9:{"^":"j8+p;"},ji:{"^":"k+m;"},jj:{"^":"ji+p;"}}],["","",,P,{"^":"",kh:{"^":"k;0j:length=","%":"AudioBuffer"},ki:{"^":"ih;",
k:function(a,b){return P.ag(a.get(H.G(b)))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ag(y.value[1]))}},
gY:function(a){var z=H.e([],[P.j])
this.D(a,new P.eD(z))
return z},
gj:function(a){return a.size},
$asa_:function(){return[P.j,null]},
$isS:1,
$asS:function(){return[P.j,null]},
"%":"AudioParamMap"},eD:{"^":"o:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},kj:{"^":"U;0j:length=","%":"AudioTrackList"},eE:{"^":"U;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kS:{"^":"eE;0j:length=","%":"OfflineAudioContext"},ih:{"^":"k+a_;"}}],["","",,P,{"^":"",dp:{"^":"k;",$isdp:1,"%":"WebGLRenderingContext"},hM:{"^":"k;",$ishM:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",l_:{"^":"j6;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return P.ag(a.item(b))},
u:function(a,b){return this.k(a,b)},
$asm:function(){return[[P.S,,,]]},
$isi:1,
$asi:function(){return[[P.S,,,]]},
$isc:1,
$asc:function(){return[[P.S,,,]]},
$asp:function(){return[[P.S,,,]]},
"%":"SQLResultSetRowList"},j5:{"^":"k+m;"},j6:{"^":"j5+p;"}}],["","",,O,{"^":"",eN:{"^":"a;0a,0b,0c,0d,$ti",
bO:function(a,b,c){var z={func:1,ret:-1,args:[P.x,[P.i,H.r(this,0)]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
aX:function(a,b){return this.bO(a,null,b)},
cA:function(a){H.w(a,"$isi",this.$ti,"$asi")
return!0},
ci:function(a,b){var z
H.w(b,"$isi",this.$ti,"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gj:function(a){return this.a.length},
gI:function(a){var z=this.a
return new J.ai(z,z.length,0,[H.r(z,0)])},
u:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$isi:1,
l:{
cR:function(a){var z=new O.eN([a])
z.a=H.e([],[a])
return z}}},c8:{"^":"a;0a,0b",
gj:function(a){return this.a.length},
gA:function(){var z=this.b
if(z==null){z=D.ak()
this.b=z}return z},
bZ:function(a){var z=this.b
if(!(z==null))z.M(a)},
a0:function(){return this.bZ(null)},
gaf:function(a){var z=this.a
if(z.length>0)return C.a.gaP(z)
else return V.dc()},
bz:function(a){var z=this.a
if(a==null)C.a.h(z,V.dc())
else C.a.h(z,a)
this.a0()},
aR:function(){var z=this.a
if(z.length>0){z.pop()
this.a0()}}}}],["","",,E,{"^":"",cI:{"^":"a;"},aj:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0L:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
saZ:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gA()
y.toString
x=H.d(this.gbw(),{func:1,ret:-1,args:[D.t]})
C.a.J(y.a,x)}y=this.c
if(y!=null){y=y.gA()
y.toString
x=H.d(this.gbw(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.H("shape",z,this.c,this,[F.ds])
w.b=!0
this.R(w)}},
sag:function(a){var z,y,x,w
if(!J.K(this.r,a)){z=this.r
if(z!=null){y=z.gA()
y.toString
x=H.d(this.gbv(),{func:1,ret:-1,args:[D.t]})
C.a.J(y.a,x)}if(a!=null){y=a.gA()
y.toString
x=H.d(this.gbv(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.H("mover",z,a,this,[U.bJ])
w.b=!0
this.R(w)}},
bH:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.c
z.sbI(z.a+z.d*b.y)
z.sbx(0,z.b+z.e*b.y)
z.sbB(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.al(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.m(0,V.al(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.m(0,V.al(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.ar(0)}u=z.x}else u=null
if(!J.K(u,this.x)){t=this.x
this.x=u
s=new D.H("matrix",t,u,this,[V.bu])
s.b=!0
this.R(s)}for(z=this.y.a,z=new J.ai(z,z.length,0,[H.r(z,0)]);z.v();)z.d.bH(0,b)},
a8:function(a){var z,y,x,w,v,u,t,s
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaf(z))
else C.a.h(z.a,y.m(0,z.gaf(z)))
z.a0()
a.bA(this.f)
z=a.dy
x=(z&&C.a).gaP(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.k(0,"Depth")
if(w==null){z=a.a
w=new A.eV(z,"Depth")
w.bX(z,"Depth")
y=$.eX
v=$.eW
w.c=w.bb(y,35633)
w.d=w.bb(v,35632)
v=z.createProgram()
w.e=v
z.attachShader(v,w.c)
z.attachShader(w.e,w.d)
z.linkProgram(w.e)
if(!H.ek(z.getProgramParameter(w.e,35714))){u=z.getProgramInfoLog(w.e)
z.deleteProgram(w.e)
H.X(P.Z("Failed to link shader: "+H.f(u)))}w.cN()
w.cP()
w.x=w.f.k(0,"posAttr")
w.y=H.aM(w.r.k(0,"objClr"),"$isci")
w.z=H.aM(w.r.k(0,"fogClr"),"$isci")
w.Q=H.aM(w.r.k(0,"fogStart"),"$iscg")
w.ch=H.aM(w.r.k(0,"fogStop"),"$iscg")
w.cx=H.aM(w.r.k(0,"viewObjMat"),"$iscj")
w.cy=H.aM(w.r.k(0,"projMat"),"$iscj")
if(a.fr.bp(0,"Depth"))H.X(P.Z('Shader cache already contains a shader by the name "Depth".'))
a.fr.K(0,"Depth",w)}x.a=w
z=w}y=this.e
if(!(y instanceof Z.cM)){this.e=null
y=null}if(y==null){z=this.d.cX(new Z.i7(a.a),$.$get$ad())
y=z.d7($.$get$ad())
v=x.a
y.e=v.x.c
this.e=z
z=v}a.a.useProgram(z.e)
z.f.d6()
y=x.b
v=z.y
v.toString
t=y.a
s=y.b
y=y.c
v.a.uniform3f(v.d,t,s,y)
y=x.c
s=z.z
s.toString
t=y.a
v=y.b
y=y.c
s.a.uniform3f(s.d,t,v,y)
y=x.d
v=z.Q
v.a.uniform1f(v.d,y)
y=x.e
v=z.ch
v.a.uniform1f(v.d,y)
y=a.cy
y=y.gaf(y)
v=z.cy
v.toString
v.aY(y.bF(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gaf(y)
v=a.dx
v=y.m(0,v.gaf(v))
a.cx=v
y=v}z=z.cx
z.toString
z.aY(y.bF(0,!0))
y=this.e
y.aI(a)
y.a8(a)
y.dT(a)
y=x.a
y.toString
a.a.useProgram(null)
y.f.d5()}for(z=this.y.a,z=new J.ai(z,z.length,0,[H.r(z,0)]);z.v();)z.d.a8(a)
a.by()
a.dx.aR()},
R:function(a){var z=this.z
if(!(z==null))z.M(a)},
P:function(){return this.R(null)},
dv:[function(a){H.n(a,"$ist")
this.e=null
this.R(a)},function(){return this.dv(null)},"eh","$1","$0","gbw",0,2,2],
du:[function(a){this.R(H.n(a,"$ist"))},function(){return this.du(null)},"eg","$1","$0","gbv",0,2,2],
ds:[function(a){this.R(H.n(a,"$ist"))},function(){return this.ds(null)},"ee","$1","$0","gbu",0,2,2],
ed:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aj],"$asi")
for(z=b.length,y=this.gbu(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.gL()==null){t=new D.bo()
t.a=H.e([],w)
t.c=0
u.sL(t)}t=u.gL()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.P()},"$2","gdr",8,0,6],
ef:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aj],"$asi")
for(z=b.length,y=this.gbu(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.gL()==null){t=new D.bo()
t.a=H.e([],w)
t.c=0
u.sL(t)}t=u.gL()
t.toString
H.d(y,x)
C.a.J(t.a,y)}}this.P()},"$2","gdt",8,0,6],
$isdd:1},h3:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
bV:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aS(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.c8()
y=[V.bu]
z.a=H.e([],y)
x=z.gA()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.d(new E.h5(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.c8()
z.a=H.e([],y)
v=z.gA()
v.toString
x=H.d(new E.h6(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.c8()
z.a=H.e([],y)
y=z.gA()
y.toString
w=H.d(new E.h7(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.cd])
this.dy=z
C.a.h(z,null)
this.fr=new H.ax(0,0,[P.j,A.dr])},
bA:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaP(z):a;(z&&C.a).h(z,y)},
by:function(){var z=this.dy
if(z.length>1)z.pop()},
l:{
h4:function(a,b){var z=new E.h3(a,b)
z.bV(a,b)
return z}}},h5:{"^":"o:8;a",
$1:function(a){var z
H.n(a,"$ist")
z=this.a
z.z=null
z.ch=null}},h6:{"^":"o:8;a",
$1:function(a){var z
H.n(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},h7:{"^":"o:8;a",
$1:function(a){var z
H.n(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},hu:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0L:x@,0y,0z,0Q,0ch",
c0:[function(a){var z
H.n(a,"$ist")
z=this.x
if(!(z==null))z.M(a)
this.dK()},function(){return this.c0(null)},"c_","$1","$0","gb1",0,2,2],
gda:function(){var z,y,x
z=Date.now()
y=C.b.a6(P.d1(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aS(z,!1)
return x/y},
bg:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.m()
if(typeof z!=="number")return H.A(z)
x=C.e.bs(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.m()
w=C.e.bs(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.dA(C.h,this.gdJ())},
dK:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.hw(this),{func:1,ret:-1,args:[P.L]})
C.o.cc(z)
C.o.cI(z,W.eg(y,P.L))}},"$0","gdJ",0,0,1],
dI:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.bg()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aS(w,!1)
x.y=P.d1(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sj(w.a,0)
w.a0()
w=x.db
C.a.sj(w.a,0)
w.a0()
w=x.dx
C.a.sj(w.a,0)
w.a0()
w=x.dy;(w&&C.a).sj(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a8(this.e)}}catch(v){z=H.at(v)
y=H.aL(v)
P.cC("Error: "+H.f(z))
P.cC("Stack: "+H.f(y))
throw H.b(z)}},
l:{
hv:function(a,b,c,d,e){var z,y,x,w
z=J.D(a)
if(!!z.$isc0)return E.dz(a,!0,!0,!0,!1)
y=W.cP(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbn(a).h(0,y)
w=E.dz(y,!0,!0,!0,!1)
w.a=a
return w},
dz:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hu()
y=P.fu(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.f.aW(a,"webgl",y)
x=H.n(x==null?C.f.aW(a,"experimental-webgl",y):x,"$isdp")
if(x==null)H.X(P.Z("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.h4(x,a)
w=new T.ht(x)
w.b=H.J(x.getParameter(3379))
w.c=H.J(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.hV(a)
v=new X.fp()
v.c=new X.aZ(!1,!1,!1)
v.d=P.fv(null,null,null,P.x)
w.b=v
v=new X.fG(w)
v.f=0
v.r=new V.N(0,0)
v.x=new V.N(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fy(w)
v.r=0
v.x=new V.N(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.hA(w)
v.e=0
v.f=new V.N(0,0)
v.r=new V.N(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.dv,P.a]])
w.z=v
u=document
t=W.a5
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.O(u,"contextmenu",H.d(w.gcm(),s),!1,t))
v=w.z
r=W.Y
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.O(a,"focus",H.d(w.gcp(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.O(a,"blur",H.d(w.gcj(),q),!1,r))
v=w.z
p=W.aX
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.O(u,"keyup",H.d(w.gcr(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.O(u,"keydown",H.d(w.gcq(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.O(a,"mousedown",H.d(w.gct(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.O(a,"mouseup",H.d(w.gcv(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.O(a,"mousemove",H.d(w.gcu(),s),!1,t))
p=w.z
o=W.bc;(p&&C.a).h(p,W.O(a,H.G(W.f2(a)),H.d(w.gcw(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.O(u,"mousemove",H.d(w.gcn(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.O(u,"mouseup",H.d(w.gco(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.O(u,"pointerlockchange",H.d(w.gcz(),q),!1,r))
r=w.z
q=W.aA
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.O(a,"touchstart",H.d(w.gcD(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.O(a,"touchend",H.d(w.gcB(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.O(a,"touchmove",H.d(w.gcC(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aS(Date.now(),!1)
z.ch=0
z.bg()
return z}}},hw:{"^":"o:24;a",
$1:function(a){var z
H.k3(a)
z=this.a
if(z.z){z.z=!1
z.dI()}}}}],["","",,Z,{"^":"",dW:{"^":"a;a,b",l:{
cl:function(a,b,c){var z
H.w(c,"$isc",[P.x],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cp(c)),35044)
a.bindBuffer(b,null)
return new Z.dW(b,z)}}},cL:{"^":"cI;a,b,c,d,e",
aI:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.at(y)
x=P.Z('Failed to bind buffer attribute "'+J.a4(this.a)+'": '+H.f(z))
throw H.b(x)}},
i:function(a){return"["+J.a4(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},i7:{"^":"a;a",$iskk:1},cM:{"^":"a;a,0b,c,d",
d7:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aI:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aI(a)},
dT:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a8:function(a){var z,y,x,w,v
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
z=[P.j]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a4(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.t(y,", ")+"\nAttrs:   "+C.a.t(u,", ")},
$isl3:1},bG:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ay(this.c)+"'")+"]"}},dS:{"^":"a;a",
gb_:function(a){var z,y
z=this.a
y=(z&$.$get$ad().a)!==0?3:0
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=3
if((z&$.$get$aE().a)!==0)y+=2
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$ba().a)!==0)y+=3
if((z&$.$get$bb().a)!==0)y+=4
if((z&$.$get$aG().a)!==0)++y
return(z&$.$get$aB().a)!==0?y+4:y},
cV:function(a){var z,y,x
z=$.$get$ad()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ba()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bb()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0)if(x===a)return z
return $.$get$dV()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.dS))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.j])
y=this.a
if((y&$.$get$ad().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aF().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$ba().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bb().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.t(z,"|")},
l:{
a2:function(a){return new Z.dS(a)}}}}],["","",,D,{"^":"",eI:{"^":"a;"},bo:{"^":"a;0a,0b,0c",
M:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.D(y,new D.f6(z))
return x!==0},
dL:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.M(y)}}},
ar:function(a){return this.dL(a,!0,!1)},
l:{
ak:function(){var z=new D.bo()
z.a=H.e([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},f6:{"^":"o:33;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"a;a,0b"},fe:{"^":"t;c,d,a,0b,$ti"},ff:{"^":"t;c,d,a,0b,$ti"},H:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",cN:{"^":"a;a,b",
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cN))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)},
l:{"^":"kl<"}},d5:{"^":"a;a,b",
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},fp:{"^":"a;0a,0b,0c,0d",
dD:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
dz:function(a){this.c=a.b
this.d.J(0,a.a)
return!1}},fy:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aQ:function(a,b){this.r=a.a
return!1},
ai:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.bN()
if(typeof z!=="number")return z.bJ()
this.r=(z&~y)>>>0
return!1},
ah:function(a,b){return!1},
dE:function(a){return!1},
cs:function(a,b,c){return}},aZ:{"^":"a;a,b,c",
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aZ))return!1
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
return z+(this.c?"Shift+":"")}},fG:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
aQ:function(a,b){this.f=a.a
return!1},
ai:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.bN()
if(typeof z!=="number")return z.bJ()
this.f=(z&~y)>>>0
return!1},
ah:function(a,b){return!1},
dF:function(a,b){return!1}},fQ:{"^":"t;"},hz:{"^":"fQ;x,y,z,Q,ch,c,d,e,a,0b"},hA:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
bd:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.N],"$asc")
z=new P.aS(Date.now(),!1)
y=a.length>0?a[0]:new V.N(0,0)
x=this.a.gcY()
w=new X.hz(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
dC:function(a){var z
H.w(a,"$isc",[V.N],"$asc")
z=this.b
if(z==null)return!1
z.M(this.bd(a,!0))
return!0},
dA:function(a){var z
H.w(a,"$isc",[V.N],"$asc")
z=this.c
if(z==null)return!1
z.M(this.bd(a,!0))
return!0},
dB:function(a){H.w(a,"$isc",[V.N],"$asc")
return!1}},hV:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gcY:function(){var z=this.a
return V.dn(0,0,(z&&C.f).gbo(z).c,C.f.gbo(z).d)},
ba:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.d5(z,new X.aZ(y,a.altKey,a.shiftKey))},
a5:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aZ(y,a.altKey,a.shiftKey)},
aH:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aZ(y,a.altKey,a.shiftKey)},
X:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=z.top
if(typeof x!=="number")return x.S()
return new V.N(y-w,x-v)},
aa:function(a){return new V.b9(a.movementX,a.movementY)},
aE:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.N])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.e.O(u.pageX)
C.e.O(u.pageY)
s=z.left
C.e.O(u.pageX)
C.a.h(y,new V.N(t-s,C.e.O(u.pageY)-z.top))}return y},
W:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.cN(z,new X.aZ(y,a.altKey,a.shiftKey))},
aB:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=H.J(y-w)
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.S()
u=H.J(x-y)
if(u<0)return!1
return v<z.width&&u<z.height},
e2:[function(a){this.f=!0},"$1","gcp",4,0,5],
dX:[function(a){this.f=!1},"$1","gcj",4,0,5],
e_:[function(a){H.n(a,"$isa5")
if(this.f&&this.aB(a))a.preventDefault()},"$1","gcm",4,0,3],
e4:[function(a){var z
H.n(a,"$isaX")
if(!this.f)return
z=this.ba(a)
this.b.dD(z)},"$1","gcr",4,0,13],
e3:[function(a){var z
H.n(a,"$isaX")
if(!this.f)return
z=this.ba(a)
this.b.dz(z)},"$1","gcq",4,0,13],
e5:[function(a){var z,y,x,w
H.n(a,"$isa5")
z=this.a
z.focus()
this.f=!0
this.a5(a)
if(this.x){y=this.W(a)
x=this.aa(a)
if(this.d.aQ(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.W(a)
w=this.X(a)
if(this.c.aQ(y,w))a.preventDefault()},"$1","gct",4,0,3],
e7:[function(a){var z,y,x
H.n(a,"$isa5")
this.a5(a)
z=this.W(a)
if(this.x){y=this.aa(a)
if(this.d.ai(z,y))a.preventDefault()
return}if(this.r)return
x=this.X(a)
if(this.c.ai(z,x))a.preventDefault()},"$1","gcv",4,0,3],
e1:[function(a){var z,y,x
H.n(a,"$isa5")
if(!this.aB(a)){this.a5(a)
z=this.W(a)
if(this.x){y=this.aa(a)
if(this.d.ai(z,y))a.preventDefault()
return}if(this.r)return
x=this.X(a)
if(this.c.ai(z,x))a.preventDefault()}},"$1","gco",4,0,3],
e6:[function(a){var z,y,x
H.n(a,"$isa5")
this.a5(a)
z=this.W(a)
if(this.x){y=this.aa(a)
if(this.d.ah(z,y))a.preventDefault()
return}if(this.r)return
x=this.X(a)
if(this.c.ah(z,x))a.preventDefault()},"$1","gcu",4,0,3],
e0:[function(a){var z,y,x
H.n(a,"$isa5")
if(!this.aB(a)){this.a5(a)
z=this.W(a)
if(this.x){y=this.aa(a)
if(this.d.ah(z,y))a.preventDefault()
return}if(this.r)return
x=this.X(a)
if(this.c.ah(z,x))a.preventDefault()}},"$1","gcn",4,0,3],
e8:[function(a){var z,y
H.n(a,"$isbc")
this.a5(a)
z=new V.b9((a&&C.n).gd3(a),C.n.gd4(a)).F(0,180)
if(this.x){if(this.d.dE(z))a.preventDefault()
return}if(this.r)return
y=this.X(a)
if(this.c.dF(z,y))a.preventDefault()},"$1","gcw",4,0,27],
e9:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.W(this.y)
v=this.X(this.y)
this.d.cs(w,v,x)}},"$1","gcz",4,0,5],
ec:[function(a){var z
H.n(a,"$isaA")
this.a.focus()
this.f=!0
this.aH(a)
z=this.aE(a)
if(this.e.dC(z))a.preventDefault()},"$1","gcD",4,0,9],
ea:[function(a){var z
H.n(a,"$isaA")
this.aH(a)
z=this.aE(a)
if(this.e.dA(z))a.preventDefault()},"$1","gcB",4,0,9],
eb:[function(a){var z
H.n(a,"$isaA")
this.aH(a)
z=this.aE(a)
if(this.e.dB(z))a.preventDefault()},"$1","gcC",4,0,9]}}],["","",,V,{"^":"",
kn:[function(a,b){if(typeof b!=="number")return b.S()
if(typeof a!=="number")return H.A(a)
return Math.abs(b-a)<=1e-9},"$2","fD",8,0,25],
cD:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.bM(a-b,z)
return(a<0?a+z:a)+b},
z:function(a,b,c){if(a==null)return C.c.Z("null",c)
return C.c.Z(C.e.bG($.l.$2(a,0)?0:a,b),c+b+1)},
bT:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.q],"$asc")
z=H.e([],[P.j])
for(y=0,x=0;x<4;++x){w=V.z(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.h(z,v)
C.a.K(z,v,C.c.Z(z[v],y))}return z},
bl:{"^":"a;a,b,c",
m:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.bl(z,y,x)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bl))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}},
bm:{"^":"a;a,b,c,d",
m:function(a,b){var z,y,x,w
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
return new V.bm(z,y,x,w)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bm))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+", "+V.z(this.d,3,0)+"]"}},
bu:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
bF:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
m:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.n(a7,"$isbu")
z=this.a
y=a7.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.A(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.A(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.A(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.m()
if(typeof s!=="number")return H.A(s)
r=a7.b
if(typeof r!=="number")return H.A(r)
q=a7.f
if(typeof q!=="number")return H.A(q)
p=a7.z
if(typeof p!=="number")return H.A(p)
o=a7.cy
if(typeof o!=="number")return H.A(o)
n=a7.c
if(typeof n!=="number")return H.A(n)
m=a7.r
if(typeof m!=="number")return H.A(m)
l=a7.Q
if(typeof l!=="number")return H.A(l)
k=a7.db
if(typeof k!=="number")return H.A(k)
j=a7.d
if(typeof j!=="number")return H.A(j)
i=a7.x
if(typeof i!=="number")return H.A(i)
h=a7.ch
if(typeof h!=="number")return H.A(h)
g=a7.dx
if(typeof g!=="number")return H.A(g)
f=this.e
if(typeof f!=="number")return f.m()
e=this.f
if(typeof e!=="number")return e.m()
d=this.r
if(typeof d!=="number")return d.m()
c=this.x
if(typeof c!=="number")return c.m()
b=this.y
if(typeof b!=="number")return b.m()
a=this.z
if(typeof a!=="number")return a.m()
a0=this.Q
if(typeof a0!=="number")return a0.m()
a1=this.ch
if(typeof a1!=="number")return a1.m()
a2=this.cx
if(typeof a2!=="number")return a2.m()
a3=this.cy
if(typeof a3!=="number")return a3.m()
a4=this.db
if(typeof a4!=="number")return a4.m()
a5=this.dx
if(typeof a5!=="number")return a5.m()
return V.al(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bu))return!1
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
i:function(a){return this.B()},
bt:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.bT(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bT(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bT(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bT(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
B:function(){return this.bt("",3,0)},
q:function(a){return this.bt(a,3,0)},
l:{
al:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dc:function(){return V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
N:{"^":"a;a,b",
m:function(a,b){return new V.N(this.a*b,this.b*b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}},
an:{"^":"a;a,b,c",
S:function(a,b){return new V.an(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){return new V.an(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}},
dm:{"^":"a;a,b,c,d",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dm))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+", "+V.z(this.d,3,0)+"]"},
l:{
dn:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dm(a,b,c,d)}}},
b9:{"^":"a;a,b",
di:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
return Math.sqrt(z*z+y*y)},"$0","gj",1,0,14],
m:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
return new V.b9(z*b,y*b)},
F:function(a,b){var z,y
if($.l.$2(b,0))return new V.b9(0,0)
z=this.a
if(typeof z!=="number")return z.F()
y=this.b
if(typeof y!=="number")return y.F()
return new V.b9(z/b,y/b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b9))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}},
I:{"^":"a;a,b,c",
di:[function(a){return Math.sqrt(this.H(this))},"$0","gj",1,0,14],
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ab:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.I(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
as:function(a){return new V.I(-this.a,-this.b,-this.c)},
m:function(a,b){return new V.I(this.a*b,this.b*b,this.c*b)},
F:function(a,b){if($.l.$2(b,0))return new V.I(0,0,0)
return new V.I(this.a/b,this.b/b,this.c/b)},
dg:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}}],["","",,U,{"^":"",cS:{"^":"bJ;0a,0b",
gA:function(){var z=this.b
if(z==null){z=D.ak()
this.b=z}return z},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cS))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")}},bJ:{"^":"eI;"},dq:{"^":"bJ;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gA:function(){var z=this.y
if(z==null){z=D.ak()
this.y=z}return z},
a4:function(a){var z=this.y
if(!(z==null))z.M(a)},
sbI:function(a){var z,y
a=V.cD(a,0,6.283185307179586)
z=this.a
if(!$.l.$2(z,a)){y=this.a
this.a=a
z=new D.H("yaw",y,a,this,[P.q])
z.b=!0
this.a4(z)}},
sbx:function(a,b){var z,y
b=V.cD(b,0,6.283185307179586)
z=this.b
if(!$.l.$2(z,b)){y=this.b
this.b=b
z=new D.H("pitch",y,b,this,[P.q])
z.b=!0
this.a4(z)}},
sbB:function(a){var z,y
a=V.cD(a,0,6.283185307179586)
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
z=new D.H("roll",y,a,this,[P.q])
z.b=!0
this.a4(z)}},
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dq))return!1
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
i:function(a){return"Rotater: ["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"], ["+V.z(this.d,3,0)+", "+V.z(this.e,3,0)+", "+V.z(this.f,3,0)+"]"}}}],["","",,M,{"^":"",f4:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
a1:[function(a){var z
H.n(a,"$ist")
z=this.x
if(!(z==null))z.M(a)},function(){return this.a1(null)},"dU","$1","$0","gT",0,2,2],
dY:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aj
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gT(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.gL()==null){s=new D.bo()
s.a=H.e([],v)
s.c=0
t.sL(s)}s=t.gL()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.fe(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gck",8,0,6],
dZ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aj
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gT(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.gL()==null){s=new D.bo()
s.a=H.e([],v)
s.c=0
t.sL(s)}s=t.gL()
s.toString
H.d(x,w)
C.a.J(s.a,x)}}z=new D.ff(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gcl",8,0,6],
sbD:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gA()
z.toString
y=H.d(this.gT(),{func:1,ret:-1,args:[D.t]})
C.a.J(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gA()
z.toString
y=H.d(this.gT(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.cd])
z.b=!0
this.a1(z)}},
gA:function(){var z=this.x
if(z==null){z=D.ak()
this.x=z}return z},
a8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.bA(this.c)
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
if(typeof x!=="number")return H.A(x)
u=C.b.O(v.a*x)
if(typeof w!=="number")return H.A(w)
t=C.b.O(v.b*w)
s=C.b.O(v.c*x)
a.c=s
v=C.b.O(v.d*w)
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
s.bz(V.al(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dh
if(y==null){y=new V.I(0,0,-1)
m=y.F(0,Math.sqrt(y.H(y)))
y=new V.I(0,1,0).ab(m)
l=y.F(0,Math.sqrt(y.H(y)))
k=m.ab(l)
j=new V.I(0,0,0)
y=V.al(l.a,k.a,m.a,l.as(0).H(j),l.b,k.b,m.b,k.as(0).H(j),l.c,k.c,m.c,m.as(0).H(j),0,0,0,1)
$.dh=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.m(0,i)}a.db.bz(i)
for(z=this.d.a,z=new J.ai(z,z.length,0,[H.r(z,0)]);z.v();)z.d.bH(0,a)
for(z=this.d.a,z=new J.ai(z,z.length,0,[H.r(z,0)]);z.v();)z.d.a8(a)
this.a.toString
a.cy.aR()
a.db.aR()
this.b.toString
a.by()},
$iskW:1}}],["","",,A,{"^":"",cH:{"^":"a;a,b,c"},eC:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
d6:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d5:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eV:{"^":"dr;0x,0y,0z,0Q,0ch,0cx,0cy,a,b,0c,0d,0e,0f,0r"},dr:{"^":"cI;",
bX:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
bb:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.ek(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.b(P.Z("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
cN:function(){var z,y,x,w,v,u
z=H.e([],[A.cH])
y=this.a
x=H.J(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.cH(y,v.name,u))}this.f=new A.eC(z)},
cP:function(){var z,y,x,w,v,u
z=H.e([],[A.T])
y=this.a
x=H.J(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.d2(v.type,v.size,v.name,u))}this.r=new A.hL(z)},
a3:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.hE(z,y,b,c)
else return A.ch(z,y,b,a,c)},
c9:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.hP(z,y,b,c)
else return A.ch(z,y,b,a,c)},
ca:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.hQ(z,y,b,c)
else return A.ch(z,y,b,a,c)},
aq:function(a,b){return new P.dY(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
d2:function(a,b,c,d){switch(a){case 5120:return this.a3(b,c,d)
case 5121:return this.a3(b,c,d)
case 5122:return this.a3(b,c,d)
case 5123:return this.a3(b,c,d)
case 5124:return this.a3(b,c,d)
case 5125:return this.a3(b,c,d)
case 5126:return new A.cg(this.a,this.e,c,d)
case 35664:return new A.hG(this.a,this.e,c,d)
case 35665:return new A.ci(this.a,this.e,c,d)
case 35666:return new A.hJ(this.a,this.e,c,d)
case 35667:return new A.hH(this.a,this.e,c,d)
case 35668:return new A.hI(this.a,this.e,c,d)
case 35669:return new A.hK(this.a,this.e,c,d)
case 35674:return new A.hN(this.a,this.e,c,d)
case 35675:return new A.hO(this.a,this.e,c,d)
case 35676:return new A.cj(this.a,this.e,c,d)
case 35678:return this.c9(b,c,d)
case 35680:return this.ca(b,c,d)
case 35670:throw H.b(this.aq("BOOL",c))
case 35671:throw H.b(this.aq("BOOL_VEC2",c))
case 35672:throw H.b(this.aq("BOOL_VEC3",c))
case 35673:throw H.b(this.aq("BOOL_VEC4",c))
default:throw H.b(P.Z("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},T:{"^":"a;"},hL:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.B()},
d9:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
B:function(){return this.d9("\n")}},hE:{"^":"T;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},hH:{"^":"T;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},hI:{"^":"T;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},hK:{"^":"T;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},hF:{"^":"T;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.f(this.c)},
l:{
ch:function(a,b,c,d,e){var z=new A.hF(a,b,c,e)
z.f=d
z.e=P.fw(d,0,!1,P.x)
return z}}},cg:{"^":"T;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},hG:{"^":"T;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},ci:{"^":"T;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},hJ:{"^":"T;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},hN:{"^":"T;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},hO:{"^":"T;a,b,c,d",
i:function(a){return"UniformMat3: "+H.f(this.c)}},cj:{"^":"T;a,b,c,d",
aY:function(a){var z=new Float32Array(H.cp(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},hP:{"^":"T;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},hQ:{"^":"T;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
kb:function(a,b,c,d){return F.jK(c,a,d,b,new F.kc())},
jK:function(a,b,c,d,e){var z,y
z=F.k9(a,b,new F.jL(H.d(e,{func:1,ret:V.an,args:[P.q]}),d,b,c),null)
if(z==null)return
y=z.e
if(!(y==null))++y.c
z.d.aM()
z.a.aM()
y=z.e
if(!(y==null))y.ar(0)
z.dn(new F.i2(),new F.fL())
return z},
k9:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[F.ac,P.q,P.q]})
if(a<1)return
if(b<1)return
z=new F.ds()
y=new F.hY(z)
y.b=!1
x=[F.ac]
y.c=H.e([],x)
z.a=y
y=new F.hg(z)
y.b=H.e([],[F.di])
z.b=y
y=new F.hf(z)
y.b=H.e([],[F.d6])
z.c=y
y=new F.he(z)
y.b=H.e([],[F.a9])
z.d=y
z.e=null
w=H.e([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.ck(null,null,new V.bm(x,0,0,1),null,null,new V.N(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.bq(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.ck(null,null,new V.bm(o,n,m,1),null,null,new V.N(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.bq(d))}}z.d.cT(a+1,b+1,w)
return z},
kc:{"^":"o:29;",
$1:function(a){return new V.an(Math.cos(a),Math.sin(a),0)}},
jL:{"^":"o:30;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.cE(y.$1(z),x)
x=J.cE(y.$1(z+3.141592653589793/this.c),x).S(0,w)
x=new V.I(x.a,x.b,x.c)
v=x.F(0,Math.sqrt(x.H(x)))
u=new V.I(1,0,0)
y=v.ab(!v.n(0,u)?new V.I(0,0,1):u)
t=y.F(0,Math.sqrt(y.H(y)))
y=t.ab(v)
u=y.F(0,Math.sqrt(y.H(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.m(0,y*x)
x=t.m(0,r*x)
x=new V.an(w.a+(y.a-x.a),w.b+(y.b-x.b),w.c+(y.c-x.c))
if(!J.K(a.f,x)){a.f=x
y=a.a
if(y!=null)y.P()}}},
a9:{"^":"a;0a,0b,0c,0d,0e",
ac:function(){if(!this.gbr()){C.a.J(this.a.a.d.b,this)
this.a.a.P()}this.cF()
this.cG()
this.cH()},
cK:function(a){this.a=a
C.a.h(a.d.b,this)},
cL:function(a){this.b=a
C.a.h(a.d.c,this)},
cM:function(a){this.c=a
C.a.h(a.d.d,this)},
cF:function(){var z=this.a
if(z!=null){C.a.J(z.d.b,this)
this.a=null}},
cG:function(){var z=this.b
if(z!=null){C.a.J(z.d.c,this)
this.b=null}},
cH:function(){var z=this.c
if(z!=null){C.a.J(z.d.d,this)
this.c=null}},
gbr:function(){return this.a==null||this.b==null||this.c==null},
c5:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.I(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.dg())return
return v.F(0,Math.sqrt(v.H(v)))},
c7:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.S(0,y)
z=new V.I(z.a,z.b,z.c)
v=z.F(0,Math.sqrt(z.H(z)))
z=w.S(0,y)
z=new V.I(z.a,z.b,z.c)
z=v.ab(z.F(0,Math.sqrt(z.H(z))))
return z.F(0,Math.sqrt(z.H(z)))},
aL:function(){if(this.d!=null)return!0
var z=this.c5()
if(z==null){z=this.c7()
if(z==null)return!1}this.d=z
this.a.a.P()
return!0},
gcZ:function(a){if(J.K(this.a,this.b))return!0
if(J.K(this.b,this.c))return!0
if(J.K(this.c,this.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var z,y
if(this.gbr())return a+"disposed"
z=a+C.c.Z(J.a4(this.a.e),0)+", "+C.c.Z(J.a4(this.b.e),0)+", "+C.c.Z(J.a4(this.c.e),0)+" {"
y=this.d
z=(y!=null?z+(y.i(0)+", "):z+"-, ")+"-}"
return z},
B:function(){return this.q("")},
l:{
bE:function(a,b,c){var z,y,x
z=new F.a9()
y=a.a
if(y==null)H.X(P.Z("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.X(P.Z("May not create a face with vertices attached to different shapes."))
z.cK(a)
z.cL(b)
z.cM(c)
C.a.h(z.a.a.d.b,z)
z.a.a.P()
return z}}},
f7:{"^":"a;"},
hl:{"^":"f7;",
ae:function(a,b,c){var z,y
z=b.a
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.p()
z=z.e
y=c.c
y.a.a.p()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.p()
z=z.e
y=c.c
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.p()
z=z.e
y=c.c
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
d6:{"^":"a;"},
fq:{"^":"a;"},
hD:{"^":"fq;",
ae:function(a,b,c){var z,y
z=b.a
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
y=y.e
return z==null?y==null:z===y}else return!1}}},
di:{"^":"a;"},
ds:{"^":"a;0a,0b,0c,0d,0e",
gA:function(){var z=this.e
if(z==null){z=D.ak()
this.e=z}return z},
ce:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ac],"$asc")
H.w(e,"$isc",[P.x],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
if(a.ae(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
dn:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ac],x=[P.x];y>=0;--y){w=this.a.c
if(y>=w.length)return H.h(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.ce(a,v,y,u,t))b.dm(u)}this.a.p()
this.c.aS()
this.d.aS()
this.b.dH()
this.c.aT(new F.hD())
this.d.aT(new F.hl())
z=this.e
if(!(z==null))z.ar(0)},
cX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ad()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$ba().a)!==0)++w
if((x&$.$get$bb().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
v=b.gb_(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.cL])
for(r=0,q=0;q<w;++q){p=b.cV(q)
o=p.gb_(p)
C.a.K(s,q,new Z.cL(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].dj(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.K(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cp(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cM(new Z.dW(34962,j),s,b)
i.b=H.e([],[Z.bG])
if(this.b.b.length!==0){x=P.x
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.p()
C.a.h(h,g.e)}f=Z.cl(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bG(0,h.length,f))}if(this.c.b.length!==0){x=P.x
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.p()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.p()
C.a.h(h,g.e)}f=Z.cl(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bG(1,h.length,f))}if(this.d.b.length!==0){x=P.x
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.p()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.p()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.p()
C.a.h(h,g.e)}f=Z.cl(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bG(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.q("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.q("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.q("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.q("   "))}return C.a.t(z,"\n")},
R:function(a){var z=this.e
if(!(z==null))z.M(a)},
P:function(){return this.R(null)}},
he:{"^":"a;a,0b",
cT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ac],"$asc")
z=H.e([],[F.a9])
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
C.a.h(z,F.bE(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bE(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bE(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bE(q,n,r))}u=!u}w=!w}return z},
gj:function(a){return this.b.length},
aT:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.ae(0,v,t)){v.ac()
break}}}}},
aS:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gcZ(x)
if(y)x.ac()}},
aM:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].aL())x=!1
return x},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].q(a))
return C.a.t(z,"\n")},
B:function(){return this.q("")}},
hf:{"^":"a;a,0b",
gj:function(a){return this.b.length},
aT:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.ae(0,v,t)){v.ac()
break}}}}},
aS:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.K(x.a,x.b)
if(y)x.ac()}},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.e([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].q(a+(""+x+". ")))}return C.a.t(z,"\n")},
B:function(){return this.q("")}},
hg:{"^":"a;a,0b",
gj:function(a){return this.b.length},
dH:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ac()}},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].q(a))
return C.a.t(z,"\n")},
B:function(){return this.q("")}},
ac:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bq:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ck(this.cx,x,u,z,y,w,v,a,t)},
dj:function(a){var z,y
z=J.D(a)
if(z.n(a,$.$get$ad())){z=this.f
y=[P.q]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.n(a,$.$get$aD())){z=this.r
y=[P.q]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.n(a,$.$get$aC())){z=H.e([0,0,1],[P.q])
return z}else if(z.n(a,$.$get$aE())){z=this.y
y=[P.q]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.n(a,$.$get$aF())){z=H.e([0,0,0],[P.q])
return z}else if(z.n(a,$.$get$ba())){z=this.Q
y=[P.q]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.n(a,$.$get$bb())){z=this.Q
y=[P.q]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.n(a,$.$get$aG()))return H.e([this.ch],[P.q])
else if(z.n(a,$.$get$aB())){z=H.e([-1,-1,-1,-1],[P.q])
return z}else return H.e([],[P.q])},
aL:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.I(0,0,0)
this.d.D(0,new F.i6(z))
z=z.a
this.r=z.F(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.P()
z=this.a.e
if(!(z==null))z.ar(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var z,y,x
z=H.e([],[P.j])
C.a.h(z,C.c.Z(J.a4(this.e),0))
y=this.f
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
y=this.r
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,"-")
y=this.y
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,V.z(this.ch,3,0))
C.a.h(z,"-")
x=C.a.t(z,", ")
return a+"{"+x+"}"},
B:function(){return this.q("")},
l:{
ck:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ac()
y=new F.i5(z)
y.b=H.e([],[F.di])
z.b=y
y=new F.i1(z)
x=[F.d6]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.hZ(z)
x=[F.a9]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$dT()
z.e=0
y=$.$get$ad()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aD().a)!==0?e:null
z.x=(x&$.$get$aC().a)!==0?b:null
z.y=(x&$.$get$aE().a)!==0?f:null
z.z=(x&$.$get$aF().a)!==0?g:null
z.Q=(x&$.$get$dU().a)!==0?c:null
z.ch=(x&$.$get$aG().a)!==0?i:0
z.cx=(x&$.$get$aB().a)!==0?a:null
return z}}},
i6:{"^":"o:10;a",
$1:function(a){var z,y
H.n(a,"$isa9")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
hY:{"^":"a;a,0b,0c",
p:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.b(P.Z("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.P()
return!0},
gj:function(a){return this.c.length},
aM:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].aL()
return!0},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
this.p()
z=H.e([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].q(a))
return C.a.t(z,"\n")},
B:function(){return this.q("")}},
hZ:{"^":"a;a,0b,0c,0d",
gj:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
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
D:function(a,b){H.d(b,{func:1,ret:-1,args:[F.a9]})
C.a.D(this.b,b)
C.a.D(this.c,new F.i_(this,b))
C.a.D(this.d,new F.i0(this,b))},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].q(a))
return C.a.t(z,"\n")},
B:function(){return this.q("")}},
i_:{"^":"o:10;a,b",
$1:function(a){H.n(a,"$isa9")
if(!J.K(a.a,this.a))this.b.$1(a)}},
i0:{"^":"o:10;a,b",
$1:function(a){var z
H.n(a,"$isa9")
z=this.a
if(!J.K(a.a,z)&&!J.K(a.b,z))this.b.$1(a)}},
i1:{"^":"a;a,0b,0c",
gj:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].q(a))
return C.a.t(z,"\n")},
B:function(){return this.q("")}},
i3:{"^":"a;"},
i2:{"^":"i3;",
ae:function(a,b,c){return J.K(b.f,c.f)}},
i4:{"^":"a;"},
fL:{"^":"i4;",
dm:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.ac],"$asc")
z=new V.I(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.I(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.F(0,Math.sqrt(z.H(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){t=a[x]
s=z.F(0,Math.sqrt(u))
if(!J.K(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.M(null)}}}return}},
i5:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].q(a))
return C.a.t(z,"\n")},
B:function(){return this.q("")}}}],["","",,O,{"^":"",eU:{"^":"cd;0a,0b,0c,0d,0e,0f",
gA:function(){var z=this.f
if(z==null){z=D.ak()
this.f=z}return z},
al:function(a){var z=this.f
if(!(z==null))z.M(a)}},cd:{"^":"a;"}}],["","",,T,{"^":"",ht:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",eB:{"^":"a;",
ad:function(a,b){return!0},
i:function(a){return"all"},
$isbt:1},bt:{"^":"a;"},db:{"^":"a;",
ad:["bT",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].ad(0,b))return!0
return!1}],
i:["b0",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbt:1},b_:{"^":"db;0a",
ad:function(a,b){return!this.bT(0,b)},
i:function(a){return"!["+this.b0(0)+"]"}},hc:{"^":"a;0a",
bW:function(a){var z,y
if(a.a.length<=0)throw H.b(P.Z("May not create a SetMatcher with zero characters."))
z=new H.ax(0,0,[P.x,P.af])
for(y=new H.d9(a,a.gj(a),0,[H.bz(a,"m",0)]);y.v();)z.K(0,y.d,!0)
this.a=z},
ad:function(a,b){return this.a.bp(0,b)},
i:function(a){var z=this.a
return P.cc(new H.d8(z,[H.r(z,0)]),0,null)},
$isbt:1,
l:{
R:function(a){var z=new V.hc()
z.bW(a)
return z}}},du:{"^":"a;a,b,0c,0d",
gdq:function(a){return this.b},
t:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dE(this.a.w(0,b))
w.a=H.e([],[V.bt])
w.c=!1
C.a.h(this.c,w)
return w},
d8:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.ad(0,a))return w}return},
i:function(a){return this.b}},dC:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.ev(this.b,"\n","\\n")
y=H.ev(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dD:{"^":"a;a,b,0c",
i:function(a){return this.b}},hy:{"^":"a;0a,0b,0c",
w:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.du(this,b)
z.c=H.e([],[V.dE])
this.a.K(0,b,z)}return z},
aj:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.dD(this,a)
y=P.j
z.c=new H.ax(0,0,[y,y])
this.b.K(0,a,z)}return z},
dS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.dC])
y=this.c
x=[P.x]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.am(a,t)
r=y.d8(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cc(w,0,null)
throw H.b(P.Z("Untokenizable string [state: "+y.gdq(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cc(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.dC(o==null?p.b:o,q,t)}++t}}}},dE:{"^":"db;b,0c,0a",
i:function(a){return this.b.b+": "+this.b0(0)}}}],["","",,X,{"^":"",cO:{"^":"a;",$isdd:1},fc:{"^":"dx;0a,0b,0c,0d,0e,0f,0r,0x",
gA:function(){var z=this.x
if(z==null){z=D.ak()
this.x=z}return z}},fO:{"^":"a;0a,0b,0c,0d,0e",
gA:function(){var z=this.e
if(z==null){z=D.ak()
this.e=z}return z},
a9:[function(a){var z
H.n(a,"$ist")
z=this.e
if(!(z==null))z.M(a)},function(){return this.a9(null)},"dV","$1","$0","gb2",0,2,2],
sag:function(a){var z,y,x
if(!J.K(this.a,a)){z=this.a
if(z!=null){z=z.gA()
z.toString
y=H.d(this.gb2(),{func:1,ret:-1,args:[D.t]})
C.a.J(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gA()
z.toString
y=H.d(this.gb2(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.H("mover",x,this.a,this,[U.bJ])
z.b=!0
this.a9(z)}},
$isdd:1,
$iscO:1},dx:{"^":"a;"}}],["","",,V,{"^":"",
k7:function(a){P.hx(C.r,new V.k8(a))},
k8:{"^":"o:31;a",
$1:function(a){H.n(a,"$isaz")
P.cC(C.e.bG(this.a.gda(),2)+" fps")}},
hh:{"^":"a;0a,0b",
bY:function(a,b){var z,y,x,w,v,u,t
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
t=W.Y
W.O(z,"scroll",H.d(new V.hk(x),{func:1,ret:-1,args:[t]}),!1,t)},
cU:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.j],"$asc")
this.cO()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.dS(C.a.dh(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.eu(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.jk(C.B,s,C.m,!1)
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
cO:function(){var z,y,x,w
if(this.b!=null)return
z=new V.hy()
y=P.j
z.a=new H.ax(0,0,[y,V.du])
z.b=new H.ax(0,0,[y,V.dD])
z.c=z.w(0,"Start")
y=z.w(0,"Start").t(0,"Bold")
x=V.R(new H.P("*"))
C.a.h(y.a,x)
y.c=!0
y=z.w(0,"Bold").t(0,"Bold")
x=new V.b_()
w=[V.bt]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.R(new H.P("*"))
C.a.h(x.a,y)
y=z.w(0,"Bold").t(0,"BoldEnd")
x=V.R(new H.P("*"))
C.a.h(y.a,x)
y.c=!0
y=z.w(0,"Start").t(0,"Italic")
x=V.R(new H.P("_"))
C.a.h(y.a,x)
y.c=!0
y=z.w(0,"Italic").t(0,"Italic")
x=new V.b_()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.R(new H.P("_"))
C.a.h(x.a,y)
y=z.w(0,"Italic").t(0,"ItalicEnd")
x=V.R(new H.P("_"))
C.a.h(y.a,x)
y.c=!0
y=z.w(0,"Start").t(0,"Code")
x=V.R(new H.P("`"))
C.a.h(y.a,x)
y.c=!0
y=z.w(0,"Code").t(0,"Code")
x=new V.b_()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.R(new H.P("`"))
C.a.h(x.a,y)
y=z.w(0,"Code").t(0,"CodeEnd")
x=V.R(new H.P("`"))
C.a.h(y.a,x)
y.c=!0
y=z.w(0,"Start").t(0,"LinkHead")
x=V.R(new H.P("["))
C.a.h(y.a,x)
y.c=!0
y=z.w(0,"LinkHead").t(0,"LinkTail")
x=V.R(new H.P("|"))
C.a.h(y.a,x)
x=z.w(0,"LinkHead").t(0,"LinkEnd")
y=V.R(new H.P("]"))
C.a.h(x.a,y)
x.c=!0
x=z.w(0,"LinkHead").t(0,"LinkHead")
y=new V.b_()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.R(new H.P("|]"))
C.a.h(y.a,x)
x=z.w(0,"LinkTail").t(0,"LinkEnd")
y=V.R(new H.P("]"))
C.a.h(x.a,y)
x.c=!0
x=z.w(0,"LinkTail").t(0,"LinkTail")
y=new V.b_()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.R(new H.P("|]"))
C.a.h(y.a,x)
C.a.h(z.w(0,"Start").t(0,"Other").a,new V.eB())
x=z.w(0,"Other").t(0,"Other")
y=new V.b_()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.R(new H.P("*_`["))
C.a.h(y.a,x)
x=z.w(0,"BoldEnd")
x.d=x.a.aj("Bold")
x=z.w(0,"ItalicEnd")
x.d=x.a.aj("Italic")
x=z.w(0,"CodeEnd")
x.d=x.a.aj("Code")
x=z.w(0,"LinkEnd")
x.d=x.a.aj("Link")
x=z.w(0,"Other")
x.d=x.a.aj("Other")
this.b=z},
l:{
hi:function(a,b){var z=new V.hh()
z.bY(a,!0)
return z}}},
hk:{"^":"o:32;a",
$1:function(a){P.dA(C.h,new V.hj(this.a))}},
hj:{"^":"o:0;a",
$0:function(){var z,y,x
z=C.e.O(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}}}],["","",,Y,{"^":"",
eq:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=V.hi("Test 001",!0)
y=W.cP(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.cU(H.e(["Test of the Depth shader, a basic fog shader with a single auto-rotating shape."],[P.j]))
x=new E.aj()
x.a=""
x.b=!0
z=E.aj
w=O.cR(z)
x.y=w
w.aX(x.gdr(),x.gdt())
x.z=null
x.Q=null
x.ch=null
x.cx=null
x.cy=null
x.db=null
x.dx=null
x.dy=null
x.fr=null
x.fx=null
x.saZ(0,null)
x.sag(null)
x.saZ(0,F.kb(30,1,15,0.5))
w=new U.dq()
w.a=0
w.b=0
w.c=0
w.d=0
w.e=0
w.f=0
w.r=0
w.sbI(0)
w.sbx(0,0)
w.sbB(0)
v=w.d
if(!$.l.$2(v,0.1)){u=w.d
w.d=0.1
v=new D.H("deltaYaw",u,0.1,w,[P.q])
v.b=!0
w.a4(v)}v=w.e
if(!$.l.$2(v,0.21)){u=w.e
w.e=0.21
v=new D.H("deltaPitch",u,0.21,w,[P.q])
v.b=!0
w.a4(v)}v=w.f
if(!$.l.$2(v,0.32)){u=w.f
w.f=0.32
v=new D.H("deltaRoll",u,0.32,w,[P.q])
v.b=!0
w.a4(v)}x.sag(w)
t=new M.f4()
z=O.cR(z)
t.d=z
z.aX(t.gck(),t.gcl())
t.e=null
t.f=null
t.r=null
t.x=null
s=new X.fO()
s.b=1.0471975511965976
s.c=0.1
s.d=2000
s.sag(null)
z=s.b
if(!$.l.$2(z,1.0471975511965976)){u=s.b
s.b=1.0471975511965976
z=new D.H("fov",u,1.0471975511965976,s,[P.q])
z.b=!0
s.a9(z)}z=s.c
if(!$.l.$2(z,0.1)){u=s.c
s.c=0.1
z=new D.H("near",u,0.1,s,[P.q])
z.b=!0
s.a9(z)}z=s.d
if(!$.l.$2(z,2000)){u=s.d
s.d=2000
z=new D.H("far",u,2000,s,[P.q])
z.b=!0
s.a9(z)}z=t.a
if(z!==s){if(z!=null){z=z.gA()
z.toString
w=H.d(t.gT(),{func:1,ret:-1,args:[D.t]})
C.a.J(z.a,w)}u=t.a
t.a=s
z=s.gA()
z.toString
w=H.d(t.gT(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,w)
z=new D.H("camera",u,t.a,t,[X.cO])
z.b=!0
t.a1(z)}r=new X.fc()
z=new V.bm(0,0,0,1)
r.a=z
r.b=!0
r.c=2000
r.d=!0
r.e=0
r.f=!1
z=V.dn(0,0,1,1)
r.r=z
z=t.b
if(z!==r){if(z!=null){z=z.gA()
z.toString
w=H.d(t.gT(),{func:1,ret:-1,args:[D.t]})
C.a.J(z.a,w)}u=t.b
t.b=r
z=r.gA()
z.toString
w=H.d(t.gT(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,w)
z=new D.H("target",u,t.b,t,[X.dx])
z.b=!0
t.a1(z)}t.sbD(null)
z=t.d
w=H.r(z,0)
H.v(x,w)
w=[w]
if(z.cA(H.e([x],w))){v=z.a
q=v.length
C.a.h(v,x)
z.ci(q,H.e([x],w))}z=new O.eU()
z.d=1
z.e=10
p=new V.bl(1,1,1)
z.b=p
w=[V.bl]
v=new D.H("objectColor",null,p,z,w)
v.b=!0
z.al(v)
p=new V.bl(0,0,0)
if(!J.K(z.c,p)){u=z.c
z.c=p
w=new D.H("fogColor",u,p,z,w)
w.b=!0
z.al(w)}w=z.d
if(!$.l.$2(w,3)){u=z.d
z.d=3
w=new D.H("fogStart",u,3,z,[P.q])
w.b=!0
z.al(w)}w=z.e
if(!$.l.$2(w,6)){u=z.e
z.e=6
w=new D.H("fogStop",u,6,z,[P.q])
w.b=!0
z.al(w)}t.sbD(z)
z=t.a
o=V.al(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
w=new U.cS()
w.a=o
z.sag(w)
n=document.getElementById("testCanvas")
if(n==null)H.X(P.Z("Failed to find an element with the identifier, testCanvas."))
m=E.hv(n,!0,!0,!0,!1)
z=m.d
if(z!==t){if(z!=null){z=z.gA()
z.toString
w=H.d(m.gb1(),{func:1,ret:-1,args:[D.t]})
C.a.J(z.a,w)}m.d=t
z=t.gA()
z.toString
w=H.d(m.gb1(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,w)
m.c_()}V.k7(m)}},1]]
setupProgram(dart,0,0)
J.D=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d4.prototype
return J.fk.prototype}if(typeof a=="string")return J.bH.prototype
if(a==null)return J.fl.prototype
if(typeof a=="boolean")return J.fj.prototype
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.a)return a
return J.bV(a)}
J.by=function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.a)return a
return J.bV(a)}
J.cx=function(a){if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.a)return a
return J.bV(a)}
J.jP=function(a){if(typeof a=="number")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bN.prototype
return a}
J.jQ=function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bN.prototype
return a}
J.bU=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.a)return a
return J.bV(a)}
J.K=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.D(a).n(a,b)}
J.ex=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jP(a).a_(a,b)}
J.cE=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jQ(a).m(a,b)}
J.ey=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jZ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.by(a).k(a,b)}
J.ez=function(a,b,c,d){return J.bU(a).bl(a,b,c,d)}
J.bY=function(a,b,c){return J.by(a).d_(a,b,c)}
J.cF=function(a,b){return J.cx(a).u(a,b)}
J.eA=function(a,b){return J.cx(a).D(a,b)}
J.au=function(a){return J.D(a).gG(a)}
J.bk=function(a){return J.cx(a).gI(a)}
J.aO=function(a){return J.by(a).gj(a)}
J.a4=function(a){return J.D(a).i(a)}
I.cA=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.f=W.c0.prototype
C.t=J.k.prototype
C.a=J.aw.prototype
C.b=J.d4.prototype
C.e=J.bq.prototype
C.c=J.bH.prototype
C.A=J.br.prototype
C.C=H.fJ.prototype
C.D=W.fK.prototype
C.l=J.fP.prototype
C.i=J.bN.prototype
C.n=W.bc.prototype
C.o=W.ia.prototype
C.p=new P.fN()
C.q=new P.hX()
C.d=new P.iZ()
C.h=new P.av(0)
C.r=new P.av(5e6)
C.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.v=function(hooks) {
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
C.j=function(hooks) { return hooks; }

C.w=function(getTagFallback) {
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
C.x=function() {
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
C.y=function(hooks) {
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
C.z=function(hooks) {
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
C.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=H.e(I.cA([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.m=new P.hW(!1)
$.a8=0
$.aP=null
$.cJ=null
$.cq=!1
$.en=null
$.eh=null
$.et=null
$.bS=null
$.bW=null
$.cy=null
$.aI=null
$.be=null
$.bf=null
$.cr=!1
$.F=C.d
$.d_=null
$.cZ=null
$.cY=null
$.cX=null
$.l=V.fD()
$.eX="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.eW="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.dh=null
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
I.$lazy(y,x,w)}})(["cW","$get$cW",function(){return H.em("_$dart_dartClosure")},"c5","$get$c5",function(){return H.em("_$dart_js")},"dF","$get$dF",function(){return H.aa(H.bM({
toString:function(){return"$receiver$"}}))},"dG","$get$dG",function(){return H.aa(H.bM({$method$:null,
toString:function(){return"$receiver$"}}))},"dH","$get$dH",function(){return H.aa(H.bM(null))},"dI","$get$dI",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dM","$get$dM",function(){return H.aa(H.bM(void 0))},"dN","$get$dN",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dK","$get$dK",function(){return H.aa(H.dL(null))},"dJ","$get$dJ",function(){return H.aa(function(){try{null.$method$}catch(z){return z.message}}())},"dP","$get$dP",function(){return H.aa(H.dL(void 0))},"dO","$get$dO",function(){return H.aa(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cm","$get$cm",function(){return P.ib()},"bg","$get$bg",function(){return[]},"eb","$get$eb",function(){return P.h2("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"cU","$get$cU",function(){return{}},"dV","$get$dV",function(){return Z.a2(0)},"dT","$get$dT",function(){return Z.a2(511)},"ad","$get$ad",function(){return Z.a2(1)},"aD","$get$aD",function(){return Z.a2(2)},"aC","$get$aC",function(){return Z.a2(4)},"aE","$get$aE",function(){return Z.a2(8)},"aF","$get$aF",function(){return Z.a2(16)},"ba","$get$ba",function(){return Z.a2(32)},"bb","$get$bb",function(){return Z.a2(64)},"dU","$get$dU",function(){return Z.a2(96)},"aG","$get$aG",function(){return Z.a2(128)},"aB","$get$aB",function(){return Z.a2(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.y},{func:1,ret:-1},{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[W.Y]},{func:1,ret:-1,args:[P.x,[P.i,E.aj]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.y,args:[D.t]},{func:1,ret:-1,args:[W.aA]},{func:1,ret:P.y,args:[F.a9]},{func:1,ret:P.j,args:[P.x]},{func:1,ret:P.y,args:[,]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:P.q},{func:1,ret:P.y,args:[,,]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:P.y,args:[{func:1,ret:-1}]},{func:1,ret:P.af,args:[W.C]},{func:1,ret:W.Q,args:[W.C]},{func:1,args:[,P.j]},{func:1,args:[P.j]},{func:1,ret:-1,args:[P.a],opt:[P.a6]},{func:1,ret:P.y,args:[P.L]},{func:1,ret:P.af,args:[P.q,P.q]},{func:1,ret:P.y,args:[,],opt:[,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:[P.ae,,],args:[,]},{func:1,ret:V.an,args:[P.q]},{func:1,ret:P.y,args:[F.ac,P.q,P.q]},{func:1,ret:P.y,args:[P.az]},{func:1,ret:P.y,args:[W.Y]},{func:1,ret:P.y,args:[{func:1,ret:-1,args:[D.t]}]}]
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
if(x==y)H.ka(d||a)
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
Isolate.cA=a.cA
Isolate.cv=a.cv
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
if(typeof dartMainRunner==="function")dartMainRunner(Y.eq,[])
else Y.eq([])})})()
//# sourceMappingURL=test.dart.js.map
