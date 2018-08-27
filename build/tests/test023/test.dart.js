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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dw(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dy=function(){}
var dart=[["","",,H,{"^":"",o2:{"^":"b;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
dD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cE:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dB==null){H.mJ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c9("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cX()]
if(v!=null)return v
v=H.mO(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cX(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
p:{"^":"b;",
u:function(a,b){return a===b},
gT:function(a){return H.bL(a)},
i:["ef",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hY:{"^":"p;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isah:1},
eg:{"^":"p;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isG:1},
cY:{"^":"p;",
gT:function(a){return 0},
i:["eg",function(a){return String(a)}]},
iG:{"^":"cY;"},
ca:{"^":"cY;"},
c4:{"^":"cY;",
i:function(a){var z=a[$.$get$e0()]
if(z==null)return this.eg(a)
return"JavaScript function for "+H.l(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscU:1},
b9:{"^":"p;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.q(P.A("add"))
a.push(b)},
N:function(a,b){var z
if(!!a.fixed$length)H.q(P.A("remove"))
for(z=0;z<a.length;++z)if(J.O(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b4(a))}},
D:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hA:function(a){return this.D(a,"")},
hs:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b4(a))}return y},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bE:function(a,b,c){if(b<0||b>a.length)throw H.a(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.Z(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.y(a,0)])
return H.e(a.slice(b,c),[H.y(a,0)])},
gay:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hW())},
ax:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.q(P.A("fill range"))
P.aL(b,c,a.length,null,null,null)
for(z=b;z.O(0,c);z=z.C(0,1))a[z]=d},
aS:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
i:function(a){return P.cV(a,"[","]")},
ga_:function(a){return new J.ay(a,a.length,0,[H.y(a,0)])},
gT:function(a){return H.bL(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cg(b,"newLength",null))
if(b<0)throw H.a(P.Z(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b>=a.length||b<0)throw H.a(H.aE(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.q(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b>=a.length||b<0)throw H.a(H.aE(a,b))
a[b]=c},
$isj:1,
$isc:1,
p:{
hX:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cg(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.Z(a,0,4294967295,"length",null))
return J.ed(new Array(a),b)},
ed:function(a,b){return J.bE(H.e(a,[b]))},
bE:function(a){H.bY(a)
a.fixed$length=Array
return a}}},
o1:{"^":"b9;$ti"},
ay:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
I:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c2:{"^":"p;",
ghz:function(a){return a===0?1/a<0:a<0},
ia:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
cj:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
e5:function(a,b){var z
if(b>20)throw H.a(P.Z(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghz(a))return"-"+z
return z},
b2:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.V(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.A("Unexpected toString result: "+z))
x=J.aF(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a*b},
b9:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ej:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d3(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.d3(a,b)},
d3:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aH:function(a,b){var z
if(a>0)z=this.d1(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fC:function(a,b){if(b<0)throw H.a(H.ae(b))
return this.d1(a,b)},
d1:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a<b},
$ist:1,
$isW:1},
ef:{"^":"c2;",$ism:1},
ee:{"^":"c2;"},
c3:{"^":"p;",
V:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b<0)throw H.a(H.aE(a,b))
if(b>=a.length)H.q(H.aE(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.a(H.aE(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.L(b)
if(typeof b!=="string")throw H.a(P.cg(b,null,null))
return a+b},
aN:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ae(b))
c=P.aL(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ae(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a5:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ae(c))
if(typeof c!=="number")return c.O()
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a4:function(a,b){return this.a5(a,b,0)},
v:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.a(P.ct(b,null,null))
if(b>c)throw H.a(P.ct(b,null,null))
if(c>a.length)throw H.a(P.ct(c,null,null))
return a.substring(b,c)},
aA:function(a,b){return this.v(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hP:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
a8:function(a,b){return this.hP(a,b," ")},
dM:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dL:function(a,b){return this.dM(a,b,0)},
hg:function(a,b,c){if(c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
return H.h2(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ises:1,
$isi:1}}],["","",,H,{"^":"",
cF:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hW:function(){return new P.jj("No element")},
a4:{"^":"jR;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.V(this.a,b)},
$ascw:function(){return[P.m]},
$asx:function(){return[P.m]},
$asj:function(){return[P.m]},
$asc:function(){return[P.m]}},
hG:{"^":"j;"},
el:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
I:function(){var z,y,x,w
z=this.a
y=J.aF(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b4(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
ik:{"^":"j;a,b,$ti",
ga_:function(a){return new H.il(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.at(this.a)},
J:function(a,b){return this.b.$1(J.cK(this.a,b))},
$asj:function(a,b){return[b]}},
il:{"^":"cW;0a,b,c,$ti",
I:function(){var z=this.b
if(z.I()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascW:function(a,b){return[b]}},
kl:{"^":"j;a,b,$ti",
ga_:function(a){return new H.km(J.by(this.a),this.b,this.$ti)}},
km:{"^":"cW;a,b,$ti",
I:function(){var z,y
for(z=this.a,y=this.b;z.I();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cl:{"^":"b;$ti"},
cw:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.ax(this,"cw",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
ax:function(a,b,c,d){H.z(d,H.ax(this,"cw",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jR:{"^":"cp+cw;"}}],["","",,H,{"^":"",
hu:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mE:function(a){return init.types[H.D(a)]},
fW:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.a(H.ae(a))
return z},
bL:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iQ:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.L(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.G(w,u)|32)>x)return}return parseInt(a,b)},
bd:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.I(a).$isca){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.G(w,0)===36)w=C.b.aA(w,1)
r=H.dC(H.bY(H.b0(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iI:function(){if(!!self.location)return self.location.href
return},
eu:function(a){var z,y,x,w,v
H.bY(a)
z=J.at(a)
if(typeof z!=="number")return z.ec()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iR:function(a){var z,y,x,w
z=H.e([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ae(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aH(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ae(w))}return H.eu(z)},
ev:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ae(x))
if(x<0)throw H.a(H.ae(x))
if(x>65535)return H.iR(a)}return H.eu(a)},
iS:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ec()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cr:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aH(z,10))>>>0,56320|z&1023)}}throw H.a(P.Z(a,0,1114111,null,null))},
af:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iP:function(a){return a.b?H.af(a).getUTCFullYear()+0:H.af(a).getFullYear()+0},
iN:function(a){return a.b?H.af(a).getUTCMonth()+1:H.af(a).getMonth()+1},
iJ:function(a){return a.b?H.af(a).getUTCDate()+0:H.af(a).getDate()+0},
iK:function(a){return a.b?H.af(a).getUTCHours()+0:H.af(a).getHours()+0},
iM:function(a){return a.b?H.af(a).getUTCMinutes()+0:H.af(a).getMinutes()+0},
iO:function(a){return a.b?H.af(a).getUTCSeconds()+0:H.af(a).getSeconds()+0},
iL:function(a){return a.b?H.af(a).getUTCMilliseconds()+0:H.af(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ae(a))},
d:function(a,b){if(a==null)J.at(a)
throw H.a(H.aE(a,b))},
aE:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.D(J.at(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.R(b,a,"index",null,z)
return P.ct(b,"index",null)},
my:function(a,b,c){if(a>c)return new P.cs(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cs(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
ae:function(a){return new P.aG(!0,a,null,null)},
mn:function(a){if(typeof a!=="number")throw H.a(H.ae(a))
return a},
a:function(a){var z
if(a==null)a=new P.er()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h4})
z.name=""}else z.toString=H.h4
return z},
h4:function(){return J.ab(this.dartException)},
q:function(a){throw H.a(a)},
B:function(a){throw H.a(P.b4(a))},
as:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aH(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cZ(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eq(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eN()
u=$.$get$eO()
t=$.$get$eP()
s=$.$get$eQ()
r=$.$get$eU()
q=$.$get$eV()
p=$.$get$eS()
$.$get$eR()
o=$.$get$eX()
n=$.$get$eW()
m=v.a7(y)
if(m!=null)return z.$1(H.cZ(H.L(y),m))
else{m=u.a7(y)
if(m!=null){m.method="call"
return z.$1(H.cZ(H.L(y),m))}else{m=t.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=r.a7(y)
if(m==null){m=q.a7(y)
if(m==null){m=p.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=o.a7(y)
if(m==null){m=n.a7(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eq(H.L(y),m))}}return z.$1(new H.jQ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eA()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eA()
return a},
bw:function(a){var z
if(a==null)return new H.fr(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fr(a)},
mB:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mL:function(a,b,c,d,e,f){H.f(a,"$iscU")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
bu:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mL)
a.$identity=z
return z},
hq:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.iX(z).r}else x=d
w=e?Object.create(new H.jk().constructor.prototype):Object.create(new H.cN(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.C()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dX(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mE,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dQ:H.cO
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dX(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hn:function(a,b,c,d){var z=H.cO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dX:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hp(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hn(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.C()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bz
if(v==null){v=H.ch("self")
$.bz=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.C()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bz
if(v==null){v=H.ch("self")
$.bz=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
ho:function(a,b,c,d){var z,y
z=H.cO
y=H.dQ
switch(b?-1:a){case 0:throw H.a(H.j6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hp:function(a,b){var z,y,x,w,v,u,t,s
z=$.bz
if(z==null){z=H.ch("self")
$.bz=z}y=$.dP
if(y==null){y=H.ch("receiver")
$.dP=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ho(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.az
if(typeof y!=="number")return y.C()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.C()
$.az=y+1
return new Function(z+y+"}")()},
dw:function(a,b,c,d,e,f,g){var z,y
z=J.bE(H.bY(b))
H.D(c)
y=!!J.I(d).$isc?J.bE(d):d
return H.hq(a,z,c,y,!!e,f,g)},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aw(a,"String"))},
mz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"double"))},
mX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"num"))},
fO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aw(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aw(a,"int"))},
h0:function(a,b){throw H.a(H.aw(a,H.L(b).substring(3)))},
mZ:function(a,b){var z=J.aF(b)
throw H.a(H.hm(a,z.v(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.h0(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.mZ(a,b)},
bY:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.a(H.aw(a,"List"))},
fY:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.h0(a,b)},
fS:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
cc:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fS(J.I(a))
if(z==null)return!1
y=H.fV(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.ds)return a
$.ds=!0
try{if(H.cc(a,b))return a
z=H.cf(b)
y=H.aw(a,z)
throw H.a(y)}finally{$.ds=!1}},
dz:function(a,b){if(a!=null&&!H.dv(a,b))H.q(H.aw(a,H.cf(b)))
return a},
fJ:function(a){var z
if(a instanceof H.n){z=H.fS(J.I(a))
if(z!=null)return H.cf(z)
return"Closure"}return H.bd(a)},
n5:function(a){throw H.a(new P.hx(H.L(a)))},
fT:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b0:function(a){if(a==null)return
return a.$ti},
p9:function(a,b,c){return H.bx(a["$as"+H.l(c)],H.b0(b))},
b_:function(a,b,c,d){var z
H.L(c)
H.D(d)
z=H.bx(a["$as"+H.l(c)],H.b0(b))
return z==null?null:z[d]},
ax:function(a,b,c){var z
H.L(b)
H.D(c)
z=H.bx(a["$as"+H.l(b)],H.b0(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.D(b)
z=H.b0(a)
return z==null?null:z[b]},
cf:function(a){var z=H.b1(a,null)
return z},
b1:function(a,b){var z,y
H.v(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dC(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.md(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
md:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.v(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.C(t,b[r])
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
for(z=H.mA(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.L(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dC:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b1(u,c)}v="<"+z.i(0)+">"
return v},
bx:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bt:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b0(a)
y=J.I(a)
if(y[b]==null)return!1
return H.fM(H.bx(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.L(b)
H.bY(c)
H.L(d)
if(a==null)return a
z=H.bt(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dC(c,0,null)
throw H.a(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fM:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
p7:function(a,b,c){return a.apply(b,H.bx(J.I(b)["$as"+H.l(c)],H.b0(b)))},
fX:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.fX(z)}return!1},
dv:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.fX(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dv(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cc(a,b)}y=J.I(a).constructor
x=H.b0(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ar(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dv(a,b))throw H.a(H.aw(a,H.cf(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fV(a,b,c,d)
if('func' in a)return c.builtin$cls==="cU"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"bC" in y.prototype))return!1
w=y.prototype["$as"+"bC"]
v=H.bx(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cf(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fM(H.bx(r,z),b,u,d)},
fV:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ar(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ar(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ar(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ar(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mW(m,b,l,d)},
mW:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
p8:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
mO:function(a){var z,y,x,w,v,u
z=H.L($.fU.$1(a))
y=$.cD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.L($.fL.$2(a,z))
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
return u.i}if(v==="+")return H.h_(a,x)
if(v==="*")throw H.a(P.c9(z))
if(init.leafTags[z]===true){u=H.cH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h_(a,x)},
h_:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dD(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cH:function(a){return J.dD(a,!1,null,!!a.$isF)},
mV:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cH(z)
else return J.dD(z,c,null,null)},
mJ:function(){if(!0===$.dB)return
$.dB=!0
H.mK()},
mK:function(){var z,y,x,w,v,u,t,s
$.cD=Object.create(null)
$.cG=Object.create(null)
H.mF()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h1.$1(v)
if(u!=null){t=H.mV(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mF:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bs(C.J,H.bs(C.O,H.bs(C.u,H.bs(C.u,H.bs(C.N,H.bs(C.K,H.bs(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fU=new H.mG(v)
$.fL=new H.mH(u)
$.h1=new H.mI(t)},
bs:function(a,b){return a(b)||b},
h2:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h3:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ht:{"^":"b;$ti",
i:function(a){return P.d0(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hu()},
$isH:1},
hv:{"^":"ht;a,b,c,$ti",
gl:function(a){return this.a},
bk:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bk(0,b))return
return this.cS(b)},
cS:function(a){return this.b[H.L(a)]},
K:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cS(v),z))}}},
iW:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iX:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bE(z)
y=z[0]
x=z[1]
return new H.iW(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jC:{"^":"b;a,b,c,d,e,f",
a7:function(a){var z,y,x
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
aC:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jC(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cv:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eT:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iD:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
eq:function(a,b){return new H.iD(a,b==null?null:b.method)}}},
i0:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
cZ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i0(a,y,z?null:b.receiver)}}},
jQ:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n7:{"^":"n:17;a",
$1:function(a){if(!!J.I(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fr:{"^":"b;a,0b",
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
i:function(a){return"Closure '"+H.bd(this).trim()+"'"},
ge9:function(){return this},
$iscU:1,
ge9:function(){return this}},
eF:{"^":"n;"},
jk:{"^":"eF;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cN:{"^":"eF;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cN))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bL(this.a)
else y=typeof z!=="object"?J.b2(z):H.bL(z)
return(y^H.bL(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
p:{
cO:function(a){return a.a},
dQ:function(a){return a.c},
ch:function(a){var z,y,x,w,v
z=new H.cN("self","target","receiver","name")
y=J.bE(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jD:{"^":"a5;a",
i:function(a){return this.a},
p:{
aw:function(a,b){return new H.jD("TypeError: "+H.l(P.ck(a))+": type '"+H.fJ(a)+"' is not a subtype of type '"+b+"'")}}},
hl:{"^":"a5;a",
i:function(a){return this.a},
p:{
hm:function(a,b){return new H.hl("CastError: "+H.l(P.ck(a))+": type '"+H.fJ(a)+"' is not a subtype of type '"+b+"'")}}},
j5:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j6:function(a){return new H.j5(a)}}},
aX:{"^":"ih;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gam:function(a){return new H.i5(this,[H.y(this,0)])},
bk:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cP(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cP(y,b)}else return this.hw(b)},
hw:function(a){var z=this.d
if(z==null)return!1
return this.cm(this.bN(z,this.cl(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bc(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bc(w,b)
x=y==null?null:y.b
return x}else return this.hx(b)},
hx:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bN(z,this.cl(a))
x=this.cm(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bO()
this.b=z}this.cI(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bO()
this.c=y}this.cI(y,b,c)}else this.hy(b,c)},
hy:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.bO()
this.d=z}y=this.cl(a)
x=this.bN(z,y)
if(x==null)this.bW(z,y,[this.bP(a,b)])
else{w=this.cm(x,a)
if(w>=0)x[w].b=b
else x.push(this.bP(a,b))}},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b4(this))
z=z.c}},
cI:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.bc(a,b)
if(z==null)this.bW(a,b,this.bP(b,c))
else z.b=c},
eP:function(){this.r=this.r+1&67108863},
bP:function(a,b){var z,y
z=new H.i4(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eP()
return z},
cl:function(a){return J.b2(a)&0x3ffffff},
cm:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
i:function(a){return P.d0(this)},
bc:function(a,b){return a[b]},
bN:function(a,b){return a[b]},
bW:function(a,b,c){a[b]=c},
eI:function(a,b){delete a[b]},
cP:function(a,b){return this.bc(a,b)!=null},
bO:function(){var z=Object.create(null)
this.bW(z,"<non-identifier-key>",z)
this.eI(z,"<non-identifier-key>")
return z},
$isej:1},
i4:{"^":"b;a,b,0c,0d"},
i5:{"^":"hG;a,$ti",
gl:function(a){return this.a.a},
ga_:function(a){var z,y
z=this.a
y=new H.i6(z,z.r,this.$ti)
y.c=z.e
return y}},
i6:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mG:{"^":"n:17;a",
$1:function(a){return this.a(a)}},
mH:{"^":"n:39;a",
$2:function(a,b){return this.a(a,b)}},
mI:{"^":"n:45;a",
$1:function(a){return this.a(H.L(a))}},
hZ:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ises:1,
$isiY:1,
p:{
i_:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.X("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mA:function(a){return J.ed(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bq:function(a){return a},
iz:function(a){return new Int8Array(a)},
aD:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aE(b,a))},
m7:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.my(a,b,c))
return b},
ep:{"^":"p;",$isep:1,"%":"ArrayBuffer"},
d4:{"^":"p;",$isd4:1,$isjE:1,"%":"DataView;ArrayBufferView;d3|fl|fm|iA|fn|fo|aZ"},
d3:{"^":"d4;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dy},
iA:{"^":"fm;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mz(c)
H.aD(b,a,a.length)
a[b]=c},
$ascl:function(){return[P.t]},
$asx:function(){return[P.t]},
$isj:1,
$asj:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aZ:{"^":"fo;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aD(b,a,a.length)
a[b]=c},
$ascl:function(){return[P.m]},
$asx:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
od:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oe:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int32Array"},
of:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int8Array"},
og:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oh:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oi:{"^":"aZ;",
gl:function(a){return a.length},
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d5:{"^":"aZ;",
gl:function(a){return a.length},
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
bE:function(a,b,c){return new Uint8Array(a.subarray(b,H.m7(b,c,a.length)))},
$isd5:1,
$isN:1,
"%":";Uint8Array"},
fl:{"^":"d3+x;"},
fm:{"^":"fl+cl;"},
fn:{"^":"d3+x;"},
fo:{"^":"fn+cl;"}}],["","",,P,{"^":"",
ko:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mk()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bu(new P.kq(z),1)).observe(y,{childList:true})
return new P.kp(z,y,x)}else if(self.setImmediate!=null)return P.ml()
return P.mm()},
oX:[function(a){self.scheduleImmediate(H.bu(new P.kr(H.h(a,{func:1,ret:-1})),0))},"$1","mk",4,0,11],
oY:[function(a){self.setImmediate(H.bu(new P.ks(H.h(a,{func:1,ret:-1})),0))},"$1","ml",4,0,11],
oZ:[function(a){P.df(C.r,H.h(a,{func:1,ret:-1}))},"$1","mm",4,0,11],
df:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.d.a3(a.a,1000)
return P.lr(z<0?0:z,b)},
eI:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bk]})
z=C.d.a3(a.a,1000)
return P.ls(z<0?0:z,b)},
mg:function(a,b){if(H.cc(a,{func:1,args:[P.b,P.av]}))return b.hY(a,null,P.b,P.av)
if(H.cc(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cg(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mf:function(){var z,y
for(;z=$.br,z!=null;){$.bW=null
y=z.b
$.br=y
if(y==null)$.bV=null
z.a.$0()}},
p6:[function(){$.dt=!0
try{P.mf()}finally{$.bW=null
$.dt=!1
if($.br!=null)$.$get$dm().$1(P.fN())}},"$0","fN",0,0,3],
fI:function(a){var z=new P.fe(H.h(a,{func:1,ret:-1}))
if($.br==null){$.bV=z
$.br=z
if(!$.dt)$.$get$dm().$1(P.fN())}else{$.bV.b=z
$.bV=z}},
mj:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.br
if(z==null){P.fI(a)
$.bW=$.bV
return}y=new P.fe(a)
x=$.bW
if(x==null){y.b=z
$.bW=y
$.br=y}else{y.b=x.b
x.b=y
$.bW=y
if(y.b==null)$.bV=y}},
n_:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.T
if(C.j===y){P.cC(null,null,C.j,a)
return}y.toString
P.cC(null,null,y,H.h(y.c1(a),z))},
jy:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.df(a,b)}return P.df(a,H.h(y.c1(b),z))},
jz:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bk]}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.eI(a,b)}x=y.da(b,P.bk)
$.T.toString
return P.eI(a,H.h(x,z))},
cB:function(a,b,c,d,e){var z={}
z.a=d
P.mj(new P.mh(z,e))},
fE:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fF:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mi:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cC:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c1(d):c.hc(d,-1)
P.fI(d)},
kq:{"^":"n:26;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kp:{"^":"n:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kr:{"^":"n:0;a",
$0:function(){this.a.$0()}},
ks:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fu:{"^":"b;a,0b,c",
ev:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bu(new P.lu(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
ew:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bu(new P.lt(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbk:1,
p:{
lr:function(a,b){var z=new P.fu(!0,0)
z.ev(a,b)
return z},
ls:function(a,b){var z=new P.fu(!1,0)
z.ew(a,b)
return z}}},
lu:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lt:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.ej(w,x)}z.c=y
this.d.$1(z)}},
bp:{"^":"b;0a,b,c,d,e,$ti",
hG:function(a){if(this.c!==6)return!0
return this.b.b.cv(H.h(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
hv:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cc(z,{func:1,args:[P.b,P.av]}))return H.dz(w.i4(z,a.a,a.b,null,y,P.av),x)
else return H.dz(w.cv(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aT:{"^":"b;d2:a<,b,0fs:c<,$ti",
e4:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mg(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.T,[c])
w=b==null?1:3
this.cJ(new P.bp(x,w,a,b,[z,c]))
return x},
i9:function(a,b){return this.e4(a,null,b)},
cJ:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbp")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaT")
z=y.a
if(z<4){y.cJ(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cC(null,null,z,H.h(new P.kH(this,a),{func:1,ret:-1}))}},
cY:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbp")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaT")
y=u.a
if(y<4){u.cY(a)
return}this.a=y
this.c=u.c}z.a=this.bf(a)
y=this.b
y.toString
P.cC(null,null,y,H.h(new P.kM(z,this),{func:1,ret:-1}))}},
bS:function(){var z=H.f(this.c,"$isbp")
this.c=null
return this.bf(z)},
bf:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cM:function(a){var z,y,x,w
z=H.y(this,0)
H.dz(a,{futureOr:1,type:z})
y=this.$ti
x=H.bt(a,"$isbC",y,"$asbC")
if(x){z=H.bt(a,"$isaT",y,null)
if(z)P.fh(a,this)
else P.kI(a,this)}else{w=this.bS()
H.z(a,z)
this.a=4
this.c=a
P.bQ(this,w)}},
bJ:[function(a,b){var z
H.f(b,"$isav")
z=this.bS()
this.a=8
this.c=new P.al(a,b)
P.bQ(this,z)},function(a){return this.bJ(a,null)},"ik","$2","$1","geE",4,2,29],
$isbC:1,
p:{
kI:function(a,b){var z,y,x
b.a=1
try{a.e4(new P.kJ(b),new P.kK(b),null)}catch(x){z=H.as(x)
y=H.bw(x)
P.n_(new P.kL(b,z,y))}},
fh:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaT")
if(z>=4){y=b.bS()
b.a=a.a
b.c=a.c
P.bQ(b,y)}else{y=H.f(b.c,"$isbp")
b.a=2
b.c=a
a.cY(y)}},
bQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isal")
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
if(p){H.f(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cB(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kP(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kO(x,b,r).$0()}else if((y&2)!==0)new P.kN(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.I(y).$isbC){if(y.a>=4){n=H.f(t.c,"$isbp")
t.c=null
b=t.bf(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fh(y,t)
return}}m=b.b
n=H.f(m.c,"$isbp")
m.c=null
b=m.bf(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
kH:{"^":"n:0;a,b",
$0:function(){P.bQ(this.a,this.b)}},
kM:{"^":"n:0;a,b",
$0:function(){P.bQ(this.b,this.a.a)}},
kJ:{"^":"n:26;a",
$1:function(a){var z=this.a
z.a=0
z.cM(a)}},
kK:{"^":"n:51;a",
$2:function(a,b){this.a.bJ(a,H.f(b,"$isav"))},
$1:function(a){return this.$2(a,null)}},
kL:{"^":"n:0;a,b,c",
$0:function(){this.a.bJ(this.b,this.c)}},
kP:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e1(H.h(w.d,{func:1}),null)}catch(v){y=H.as(v)
x=H.bw(v)
if(this.d){w=H.f(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.I(z).$isbC){if(z instanceof P.aT&&z.gd2()>=4){if(z.gd2()===8){w=this.b
w.b=H.f(z.gfs(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.i9(new P.kQ(t),null)
w.a=!1}}},
kQ:{"^":"n:34;a",
$1:function(a){return this.a}},
kO:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cv(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.as(t)
y=H.bw(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kN:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isal")
w=this.c
if(w.hG(z)&&w.e!=null){v=this.b
v.b=w.hv(z)
v.a=!1}}catch(u){y=H.as(u)
x=H.bw(u)
w=H.f(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fe:{"^":"b;a,0b"},
db:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aT(0,$.T,[P.m])
z.a=0
this.hD(new P.jn(z,this),!0,new P.jo(z,y),y.geE())
return y}},
jn:{"^":"n;a,b",
$1:function(a){H.z(a,H.ax(this.b,"db",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.ax(this.b,"db",0)]}}},
jo:{"^":"n:0;a,b",
$0:function(){this.b.cM(this.a.a)}},
eC:{"^":"b;$ti"},
jm:{"^":"b;"},
bk:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
lW:{"^":"b;",$isoW:1},
mh:{"^":"n:0;a,b",
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
l9:{"^":"lW;",
i5:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fE(null,null,this,a,-1)}catch(x){z=H.as(x)
y=H.bw(x)
P.cB(null,null,this,z,H.f(y,"$isav"))}},
i6:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fF(null,null,this,a,b,-1,c)}catch(x){z=H.as(x)
y=H.bw(x)
P.cB(null,null,this,z,H.f(y,"$isav"))}},
hc:function(a,b){return new P.lb(this,H.h(a,{func:1,ret:b}),b)},
c1:function(a){return new P.la(this,H.h(a,{func:1,ret:-1}))},
da:function(a,b){return new P.lc(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
e1:function(a,b){H.h(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fE(null,null,this,a,b)},
cv:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.j)return a.$1(b)
return P.fF(null,null,this,a,b,c,d)},
i4:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.j)return a.$2(b,c)
return P.mi(null,null,this,a,b,c,d,e,f)},
hY:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
lb:{"^":"n;a,b,c",
$0:function(){return this.a.e1(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
la:{"^":"n:3;a,b",
$0:function(){return this.a.i5(this.b)}},
lc:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.i6(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i7:function(a,b,c,d,e){return new H.aX(0,0,[d,e])},
i8:function(a,b,c){H.bY(a)
return H.v(H.mB(a,new H.aX(0,0,[b,c])),"$isej",[b,c],"$asej")},
ek:function(a,b){return new H.aX(0,0,[a,b])},
ib:function(a,b,c,d){return new P.kW(0,0,[d])},
hV:function(a,b,c){var z,y
if(P.du(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bX()
C.a.h(y,a)
try{P.me(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eD(b,H.fY(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cV:function(a,b,c){var z,y,x
if(P.du(a))return b+"..."+c
z=new P.an(b)
y=$.$get$bX()
C.a.h(y,a)
try{x=z
x.a=P.eD(x.gaE(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaE()+c
y=z.gaE()
return y.charCodeAt(0)==0?y:y},
du:function(a){var z,y
for(z=0;y=$.$get$bX(),z<y.length;++z)if(a===y[z])return!0
return!1},
me:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga_(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.I())return
w=H.l(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.I()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.I()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.I();t=s,s=r){r=z.gR(z);++x
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
i9:function(a,b,c){var z=P.i7(null,null,null,b,c)
a.K(0,new P.ia(z,b,c))
return z},
d0:function(a){var z,y,x
z={}
if(P.du(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$bX(),a)
x=y
x.a=x.gaE()+"{"
z.a=!0
J.dJ(a,new P.ii(z,y))
z=y
z.a=z.gaE()+"}"}finally{z=$.$get$bX()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaE()
return z.charCodeAt(0)==0?z:z},
kW:{"^":"kR;a,0b,0c,0d,0e,0f,r,$ti",
ga_:function(a){return P.fk(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dp()
this.b=z}return this.cK(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dp()
this.c=y}return this.cK(y,b)}else return this.ex(0,b)},
ex:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dp()
this.d=z}y=this.cN(b)
x=z[y]
if(x==null)z[y]=[this.bI(b)]
else{if(this.cT(x,b)>=0)return!1
x.push(this.bI(b))}return!0},
N:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cZ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cZ(this.c,b)
else return this.fj(0,b)},
fj:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eM(z,b)
x=this.cT(y,b)
if(x<0)return!1
this.d4(y.splice(x,1)[0])
return!0},
cK:function(a,b){H.z(b,H.y(this,0))
if(H.f(a[b],"$isdn")!=null)return!1
a[b]=this.bI(b)
return!0},
cZ:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdn")
if(z==null)return!1
this.d4(z)
delete a[b]
return!0},
cL:function(){this.r=this.r+1&67108863},
bI:function(a){var z,y
z=new P.dn(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cL()
return z},
d4:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cL()},
cN:function(a){return J.b2(a)&0x3ffffff},
eM:function(a,b){return a[this.cN(b)]},
cT:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
p:{
dp:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dn:{"^":"b;a,0b,0c"},
kX:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fk:function(a,b,c){var z=new P.kX(a,b,[c])
z.c=a.e
return z}}},
kR:{"^":"j7;"},
ia:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cp:{"^":"kY;",$isj:1,$isc:1},
x:{"^":"b;$ti",
ga_:function(a){return new H.el(a,this.gl(a),0,[H.b_(this,a,"x",0)])},
J:function(a,b){return this.j(a,b)},
ic:function(a,b){var z,y,x
z=H.e([],[H.b_(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
ib:function(a){return this.ic(a,!0)},
ax:function(a,b,c,d){var z
H.z(d,H.b_(this,a,"x",0))
P.aL(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cV(a,"[","]")}},
ih:{"^":"ai;"},
ii:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ai:{"^":"b;$ti",
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.b_(this,a,"ai",0),H.b_(this,a,"ai",1)]})
for(z=J.by(this.gam(a));z.I();){y=z.gR(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.at(this.gam(a))},
i:function(a){return P.d0(a)},
$isH:1},
lz:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
ij:{"^":"b;$ti",
j:function(a,b){return J.dI(this.a,b)},
m:function(a,b,c){J.cI(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
K:function(a,b){J.dJ(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.at(this.a)},
i:function(a){return J.ab(this.a)},
$isH:1},
f3:{"^":"lA;a,$ti"},
j9:{"^":"b;$ti",
i:function(a){return P.cV(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dL("index"))
if(b<0)H.q(P.Z(b,0,null,"index",null))
for(z=P.fk(this,this.r,H.y(this,0)),y=0;z.I();){x=z.d
if(b===y)return x;++y}throw H.a(P.R(b,this,"index",null,y))},
$isj:1},
j7:{"^":"j9;"},
kY:{"^":"b+x;"},
lA:{"^":"ij+lz;$ti"}}],["","",,P,{"^":"",hi:{"^":"c_;a",
hJ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aL(c,d,b.length,null,null,null)
z=$.$get$ff()
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
if(q<=d){p=H.cF(C.b.G(b,s))
o=H.cF(C.b.G(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.v(b,x,y)
w.a+=H.cr(r)
x=s
continue}}throw H.a(P.X("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dO(b,u,d,v,t,k)
else{j=C.d.b9(k-1,4)+1
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aN(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dO(b,u,d,v,t,i)
else{j=C.d.b9(i,4)
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aN(b,d,d,j===2?"==":"=")}return b},
$asc_:function(){return[[P.c,P.m],P.i]},
p:{
dO:function(a,b,c,d,e,f){if(C.d.b9(f,4)!==0)throw H.a(P.X("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.X("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.X("Invalid base64 padding, more than two '=' characters",a,b))}}},hj:{"^":"bA;a",
$asbA:function(){return[[P.c,P.m],P.i]}},c_:{"^":"b;$ti"},bA:{"^":"jm;$ti"},hI:{"^":"c_;",
$asc_:function(){return[P.i,[P.c,P.m]]}},k1:{"^":"hI;a",
ghp:function(){return C.F}},k8:{"^":"bA;",
aT:function(a,b,c){var z,y,x,w
z=a.length
P.aL(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lV(0,0,x)
if(w.eK(a,b,z)!==z)w.d6(J.ha(a,z-1),0)
return C.V.bE(x,0,w.b)},
c7:function(a){return this.aT(a,0,null)},
$asbA:function(){return[P.i,[P.c,P.m]]}},lV:{"^":"b;a,b,c",
d6:function(a,b){var z,y,x,w,v
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
eK:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.G(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d6(w,C.b.G(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},k2:{"^":"bA;a",
aT:function(a,b,c){var z,y,x,w,v
H.v(a,"$isc",[P.m],"$asc")
z=P.k3(!1,a,b,c)
if(z!=null)return z
y=J.at(a)
P.aL(b,c,y,null,null,null)
x=new P.an("")
w=new P.lS(!1,x,!0,0,0,0)
w.aT(a,b,y)
w.hr(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
c7:function(a){return this.aT(a,0,null)},
$asbA:function(){return[[P.c,P.m],P.i]},
p:{
k3:function(a,b,c,d){H.v(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.k4(!1,b,c,d)
return},
k4:function(a,b,c,d){var z,y,x
z=$.$get$f9()
if(z==null)return
y=0===c
if(y&&!0)return P.dk(z,b)
x=b.length
d=P.aL(c,d,x,null,null,null)
if(y&&d===x)return P.dk(z,b)
return P.dk(z,b.subarray(c,d))},
dk:function(a,b){if(P.k6(b))return
return P.k7(a,b)},
k7:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.as(y)}return},
k6:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k5:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.as(y)}return}}},lS:{"^":"b;a,b,c,d,e,f",
hr:function(a,b,c){var z
H.v(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.X("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lU(c)
v=new P.lT(this,b,c,a)
$label0$0:for(u=J.aF(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bB()
if((r&192)!==128){q=P.X("Bad UTF-8 encoding 0x"+C.d.b2(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.X("Overlong encoding of 0x"+C.d.b2(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.X("Character outside valid Unicode range: 0x"+C.d.b2(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cr(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cC()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.X("Negative UTF-8 code unit: -0x"+C.d.b2(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.X("Bad UTF-8 encoding 0x"+C.d.b2(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lU:{"^":"n:41;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aF(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bB()
if((w&127)!==w)return x-b}return z-b}},lT:{"^":"n:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c8(this.d,a,b)}}}],["","",,P,{"^":"",
ce:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.iQ(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.X(a,null,null))},
hK:function(a){var z=J.I(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bd(a)+"'"},
ic:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hX(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.v(z,"$isc",[d],"$asc")},
id:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.ga_(a);x.I();)C.a.h(y,H.z(x.gR(x),c))
if(b)return y
return H.v(J.bE(y),"$isc",z,"$asc")},
c8:function(a,b,c){var z,y
z=P.m
H.v(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isb9",[z],"$asb9")
y=a.length
c=P.aL(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.O()
z=c<y}else z=!0
return H.ev(z?C.a.bE(a,b,c):a)}if(!!J.I(a).$isd5)return H.iS(a,b,P.aL(b,c,a.length,null,null,null))
return P.jp(a,b,c)},
jp:function(a,b,c){var z,y,x,w
H.v(a,"$isj",[P.m],"$asj")
if(b<0)throw H.a(P.Z(b,0,J.at(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.Z(c,b,J.at(a),null,null))
y=J.by(a)
for(x=0;x<b;++x)if(!y.I())throw H.a(P.Z(b,0,x,null,null))
w=[]
if(z)for(;y.I();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.I())throw H.a(P.Z(c,b,x,null,null))
w.push(y.gR(y))}return H.ev(w)},
iZ:function(a,b,c){return new H.hZ(a,H.i_(a,!1,!0,!1))},
f5:function(){var z=H.iI()
if(z!=null)return P.jW(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
ck:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hK(a)},
u:function(a){return new P.fg(a)},
ie:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.e([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dF:function(a){H.mY(a)},
jW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.G(a,b+4)^58)*3|C.b.G(a,b)^100|C.b.G(a,b+1)^97|C.b.G(a,b+2)^116|C.b.G(a,b+3)^97)>>>0
if(y===0)return P.f4(b>0||c<c?C.b.v(a,b,c):a,5,null).ge6()
else if(y===32)return P.f4(C.b.v(a,z,c),0,null).ge6()}x=new Array(8)
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
if(P.fG(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cB()
if(v>=b)if(P.fG(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.C()
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.a5(a,"..",s)))n=r>s+2&&C.b.a5(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a5(a,"file",b)){if(u<=b){if(!C.b.a5(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aN(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a5(a,"http",b)){if(x&&t+3===s&&C.b.a5(a,"80",t+1))if(b===0&&!0){a=C.b.aN(a,t,s,"")
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
else if(v===z&&C.b.a5(a,"https",b)){if(x&&t+4===s&&C.b.a5(a,"443",t+1))if(b===0&&!0){a=C.b.aN(a,t,s,"")
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
q-=b}return new P.le(a,v,u,t,s,r,q,o)}return P.lB(a,b,c,v,u,t,s,r,q,o)},
f7:function(a,b){var z=P.i
return C.a.hs(H.e(a.split("&"),[z]),P.ek(z,z),new P.jZ(b),[P.H,P.i,P.i])},
jU:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jV(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.V(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ce(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.cC()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ce(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.cC()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
f6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jX(a)
y=new P.jY(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.V(a,w)
if(s===58){if(w===b){++w
if(C.b.V(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gay(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jU(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aH(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
m8:function(){var z,y,x,w,v
z=P.ie(22,new P.ma(),!0,P.N)
y=new P.m9(z)
x=new P.mb()
w=new P.mc()
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
fG:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isc",[P.m],"$asc")
z=$.$get$fH()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.G(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ah:{"^":"b;"},
"+bool":0,
aA:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.d.aH(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hy(H.iP(this))
y=P.c0(H.iN(this))
x=P.c0(H.iJ(this))
w=P.c0(H.iK(this))
v=P.c0(H.iM(this))
u=P.c0(H.iO(this))
t=P.hz(H.iL(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hy:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c0:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"W;"},
"+double":0,
b6:{"^":"b;a",
k:function(a,b){return new P.b6(C.d.a9(this.a*b))},
O:function(a,b){return C.d.O(this.a,H.f(b,"$isb6").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.b6))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hF()
y=this.a
if(y<0)return"-"+new P.b6(0-y).i(0)
x=z.$1(C.d.a3(y,6e7)%60)
w=z.$1(C.d.a3(y,1e6)%60)
v=new P.hE().$1(y%1e6)
return""+C.d.a3(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e6:function(a,b,c,d,e,f){return new P.b6(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hE:{"^":"n:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hF:{"^":"n:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
er:{"^":"a5;",
i:function(a){return"Throw of null."}},
aG:{"^":"a5;a,b,c,d",
gbL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbK:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbL()+y+x
if(!this.a)return w
v=this.gbK()
u=P.ck(this.b)
return w+v+": "+H.l(u)},
p:{
bZ:function(a){return new P.aG(!1,null,null,a)},
cg:function(a,b,c){return new P.aG(!0,a,b,c)},
dL:function(a){return new P.aG(!1,null,a,"Must not be null")}}},
cs:{"^":"aG;e,f,a,b,c,d",
gbL:function(){return"RangeError"},
gbK:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
ct:function(a,b,c){return new P.cs(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.cs(b,c,!0,a,d,"Invalid value")},
aL:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.Z(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.Z(b,a,c,"end",f))
return b}return c}}},
hT:{"^":"aG;e,l:f>,a,b,c,d",
gbL:function(){return"RangeError"},
gbK:function(){if(J.h6(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
R:function(a,b,c,d,e){var z=H.D(e!=null?e:J.at(b))
return new P.hT(b,z,!0,a,c,"Index out of range")}}},
jS:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jS(a)}}},
jP:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c9:function(a){return new P.jP(a)}}},
jj:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hs:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.ck(z))+"."},
p:{
b4:function(a){return new P.hs(a)}}},
iE:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
eA:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hx:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fg:{"^":"b;a",
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
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.G(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.V(w,s)
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
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
p:{
X:function(a,b,c){return new P.hQ(a,b,c)}}},
m:{"^":"W;"},
"+int":0,
j:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga_(this)
for(y=0;z.I();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dL("index"))
if(b<0)H.q(P.Z(b,0,null,"index",null))
for(z=this.ga_(this),y=0;z.I();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.R(b,this,"index",null,y))},
i:function(a){return P.hV(this,"(",")")}},
cW:{"^":"b;$ti"},
c:{"^":"b;$ti",$isj:1},
"+List":0,
H:{"^":"b;$ti"},
G:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
W:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gT:function(a){return H.bL(this)},
i:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.i(this)}},
av:{"^":"b;"},
i:{"^":"b;",$ises:1},
"+String":0,
an:{"^":"b;aE:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoG:1,
p:{
eD:function(a,b,c){var z=J.by(b)
if(!z.I())return a
if(c.length===0){do a+=H.l(z.gR(z))
while(z.I())}else{a+=H.l(z.gR(z))
for(;z.I();)a=a+c+H.l(z.gR(z))}return a}}},
jZ:{"^":"n:48;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.v(a,"$isH",[z,z],"$asH")
H.L(b)
y=J.aF(b).dL(b,"=")
if(y===-1){if(b!=="")J.cI(a,P.dr(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aA(b,y+1)
z=this.a
J.cI(a,P.dr(x,0,x.length,z,!0),P.dr(w,0,w.length,z,!0))}return a}},
jV:{"^":"n:38;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv4 address, "+a,this.a,b))}},
jX:{"^":"n:28;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jY:{"^":"n:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ce(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.O()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cy:{"^":"b;bD:a<,b,c,d,dX:e>,f,r,0x,0y,0z,0Q,0ch",
ge7:function(){return this.b},
gck:function(a){var z=this.c
if(z==null)return""
if(C.b.a4(z,"["))return C.b.v(z,1,z.length-1)
return z},
gby:function(a){var z=this.d
if(z==null)return P.fw(this.a)
return z},
gcq:function(a){var z=this.f
return z==null?"":z},
gdG:function(){var z=this.r
return z==null?"":z},
cu:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isH",[P.i,null],"$asH")
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
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.dq(g,0,0,h)
return new P.cy(i,j,c,f,d,g,this.r)},
e0:function(a,b){return this.cu(a,null,null,null,null,null,null,b,null,null)},
gcr:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f3(P.f7(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdH:function(){return this.c!=null},
gdK:function(){return this.f!=null},
gdI:function(){return this.r!=null},
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
z=J.I(b)
if(!!z.$isdj){y=this.a
x=b.gbD()
if(y==null?x==null:y===x)if(this.c!=null===b.gdH()){y=this.b
x=b.ge7()
if(y==null?x==null:y===x){y=this.gck(this)
x=z.gck(b)
if(y==null?x==null:y===x){y=this.gby(this)
x=z.gby(b)
if(y==null?x==null:y===x)if(this.e===z.gdX(b)){y=this.f
x=y==null
if(!x===b.gdK()){if(x)y=""
if(y===z.gcq(b)){z=this.r
y=z==null
if(!y===b.gdI()){if(y)z=""
z=z===b.gdG()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdj:1,
p:{
cz:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fB().b
if(typeof b!=="string")H.q(H.ae(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.ax(c,"c_",0))
y=c.ghp().c7(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cr(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lB:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lM(a,b,d)
else{if(d===b)P.bS(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lN(a,z,e-1):""
x=P.lG(a,e,f,!1)
if(typeof f!=="number")return f.C()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lJ(P.ce(C.b.v(a,w,g),new P.lC(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lH(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.O()
t=h<i?P.dq(a,h+1,i,null):null
return new P.cy(j,y,x,v,u,t,i<c?P.lF(a,i+1,c):null)},
fw:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bS:function(a,b,c){throw H.a(P.X(c,a,b))},
lJ:function(a,b){if(a!=null&&a===P.fw(b))return
return a},
lG:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.S()
z=c-1
if(C.b.V(a,z)!==93)P.bS(a,b,"Missing end `]` to match `[` in host")
P.f6(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.V(a,y)===58){P.f6(a,b,c)
return"["+a+"]"}return P.lP(a,b,c)},
lP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.V(a,z)
if(v===37){u=P.fD(a,z,!0)
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
if(t>=8)return H.d(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bS(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.V(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fx(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lM:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fz(C.b.G(a,b)))P.bS(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.G(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bS(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lD(y?a.toLowerCase():a)},
lD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lN:function(a,b,c){return P.bT(a,b,c,C.R)},
lH:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bT(a,b,c,C.y):C.t.iZ(d,new P.lI(),P.i).D(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a4(w,"/"))w="/"+w
return P.lO(w,e,f)},
lO:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a4(a,"/"))return P.lQ(a,!z||c)
return P.lR(a)},
dq:function(a,b,c,d){var z,y
z={}
H.v(d,"$isH",[P.i,null],"$asH")
if(a!=null){if(d!=null)throw H.a(P.bZ("Both query and queryParameters specified"))
return P.bT(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.K(0,new P.lK(new P.lL(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lF:function(a,b,c){return P.bT(a,b,c,C.n)},
fD:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.V(a,b+1)
x=C.b.V(a,z)
w=H.cF(y)
v=H.cF(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aH(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cr(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fx:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.G("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.fC(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.G("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.G("0123456789ABCDEF",u&15))
v+=3}}return P.c8(y,0,null)},
bT:function(a,b,c,d){var z=P.fC(a,b,c,H.v(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.v(a,b,c):z},
fC:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.O()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.V(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fD(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bS(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.V(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fx(v)}}if(w==null)w=new P.an("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.O()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fA:function(a){if(C.b.a4(a,"."))return!0
return C.b.dL(a,"/.")!==-1},
lR:function(a){var z,y,x,w,v,u,t
if(!P.fA(a))return a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.O(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.D(z,"/")},
lQ:function(a,b){var z,y,x,w,v,u
if(!P.fA(a))return!b?P.fy(a):a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gay(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gay(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.m(z,0,P.fy(z[0]))}return C.a.D(z,"/")},
fy:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fz(J.h7(a,0)))for(y=1;y<z;++y){x=C.b.G(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aA(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lE:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.G(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bZ("Invalid URL encoding"))}}return z},
dr:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dA(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.G(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.a4(y.v(a,b,c))}else{u=H.e([],[P.m])
for(x=b;x<c;++x){w=y.G(a,x)
if(w>127)throw H.a(P.bZ("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bZ("Truncated URI"))
C.a.h(u,P.lE(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isc",[P.m],"$asc")
return new P.k2(!1).c7(u)},
fz:function(a){var z=a|32
return 97<=z&&z<=122}}},
lC:{"^":"n:47;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.C()
throw H.a(P.X("Invalid port",this.a,z+1))}},
lI:{"^":"n:46;",
$1:function(a){return P.cz(C.T,a,C.k,!1)}},
lL:{"^":"n:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cz(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cz(C.p,b,C.k,!0))}}},
lK:{"^":"n:50;a",
$2:function(a,b){var z,y
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(z=J.by(H.fY(b,"$isj")),y=this.a;z.I();)y.$2(a,H.L(z.gR(z)))}},
jT:{"^":"b;a,b,c",
ge6:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.dM(y,"?",z)
w=y.length
if(x>=0){v=P.bT(y,x+1,w,C.n)
w=x}else v=null
z=new P.kx(this,"data",null,null,null,P.bT(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f4:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.G(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.X("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.X("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.G(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gay(z)
if(v!==44||x!==t+7||!C.b.a5(a,"base64",t+1))throw H.a(P.X("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hJ(0,a,s,y)
else{r=P.fC(a,s,y,C.n,!0)
if(r!=null)a=C.b.aN(a,s,y,r)}return new P.jT(a,z,c)}}},
ma:{"^":"n:44;",
$1:function(a){return new Uint8Array(96)}},
m9:{"^":"n:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.hb(z,0,96,b)
return z}},
mb:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.G(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
mc:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.G(b,0),y=C.b.G(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
le:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdH:function(){return this.c>0},
gdJ:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.C()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gdK:function(){var z=this.f
if(typeof z!=="number")return z.O()
return z<this.r},
gdI:function(){return this.r<this.a.length},
gcV:function(){return this.b===4&&C.b.a4(this.a,"http")},
gcW:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbD:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcV()){this.x="http"
z="http"}else if(this.gcW()){this.x="https"
z="https"}else if(z===4&&C.b.a4(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a4(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
ge7:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gck:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gby:function(a){var z
if(this.gdJ()){z=this.d
if(typeof z!=="number")return z.C()
return P.ce(C.b.v(this.a,z+1,this.e),null,null)}if(this.gcV())return 80
if(this.gcW())return 443
return 0},
gdX:function(a){return C.b.v(this.a,this.e,this.f)},
gcq:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.O()
return z<y?C.b.v(this.a,z+1,y):""},
gdG:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aA(y,z+1):""},
gcr:function(){var z=this.f
if(typeof z!=="number")return z.O()
if(z>=this.r)return C.U
z=P.i
return new P.f3(P.f7(this.gcq(this),C.k),[z,z])},
cu:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isH",[P.i,null],"$asH")
i=this.gbD()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gdJ()?this.gby(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.dq(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aA(y,x+1)
return new P.cy(i,j,c,f,d,g,b)},
e0:function(a,b){return this.cu(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isdj)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdj:1},
kx:{"^":"cy;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cQ:function(a,b){var z=document.createElement("canvas")
return z},
hH:function(a){H.f(a,"$isa7")
return"wheel"},
hU:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$isec")
try{J.hd(z,a)}catch(x){H.as(x)}return z},
cx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fj:function(a,b,c,d){var z,y
z=W.cx(W.cx(W.cx(W.cx(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fK:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.da(a,b)},
a8:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n9:{"^":"d9;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
na:{"^":"p;0l:length=","%":"AccessibleNodeList"},
nb:{"^":"a8;0a0:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nc:{"^":"a8;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cM:{"^":"p;",$iscM:1,"%":";Blob"},
ni:{"^":"a8;0a0:type}","%":"HTMLButtonElement"},
cP:{"^":"a8;",
bC:function(a,b,c){if(c!=null)return a.getContext(b,P.mo(c,null))
return a.getContext(b)},
ea:function(a,b){return this.bC(a,b,null)},
$iscP:1,
"%":"HTMLCanvasElement"},
dV:{"^":"p;",$isdV:1,"%":"CanvasRenderingContext2D"},
nk:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nm:{"^":"cj;0l:length=","%":"CSSPerspective"},
nn:{"^":"cT;0q:x=,0t:y=","%":"CSSPositionValue"},
no:{"^":"cj;0q:x=,0t:y=","%":"CSSRotation"},
b5:{"^":"p;",$isb5:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
np:{"^":"cj;0q:x=,0t:y=","%":"CSSScale"},
nq:{"^":"kw;0l:length=",
eb:function(a,b){var z=a.getPropertyValue(this.eB(a,b))
return z==null?"":z},
eB:function(a,b){var z,y
z=$.$get$e_()
y=z[b]
if(typeof y==="string")return y
y=this.fD(a,b)
z[b]=y
return y},
fD:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hA()+b
if(z in a)return z
return b},
gc2:function(a){return a.bottom},
gal:function(a){return a.height},
gaL:function(a){return a.left},
gbA:function(a){return a.right},
gb4:function(a){return a.top},
gao:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hw:{"^":"b;",
gaL:function(a){return this.eb(a,"left")}},
cT:{"^":"p;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cj:{"^":"p;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nr:{"^":"cT;0l:length=","%":"CSSTransformValue"},
ns:{"^":"cj;0q:x=,0t:y=","%":"CSSTranslation"},
nt:{"^":"cT;0l:length=","%":"CSSUnparsedValue"},
nu:{"^":"p;0l:length=","%":"DataTransferItemList"},
nv:{"^":"p;0q:x=,0t:y=","%":"DeviceAcceleration"},
nw:{"^":"p;",
i:function(a){return String(a)},
"%":"DOMException"},
nx:{"^":"hC;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hC:{"^":"p;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
ny:{"^":"kz;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.v(c,"$isa9",[P.W],"$asa9")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a9,P.W]]},
$asx:function(){return[[P.a9,P.W]]},
$isj:1,
$asj:function(){return[[P.a9,P.W]]},
$isc:1,
$asc:function(){return[[P.a9,P.W]]},
$asC:function(){return[[P.a9,P.W]]},
"%":"ClientRectList|DOMRectList"},
hD:{"^":"p;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gao(a))+" x "+H.l(this.gal(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bt(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.aV(b)
return a.left===z.gaL(b)&&a.top===z.gb4(b)&&this.gao(a)===z.gao(b)&&this.gal(a)===z.gal(b)},
gT:function(a){return W.fj(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF,this.gal(a)&0x1FFFFFFF)},
gc2:function(a){return a.bottom},
gal:function(a){return a.height},
gaL:function(a){return a.left},
gbA:function(a){return a.right},
gb4:function(a){return a.top},
gao:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa9:1,
$asa9:function(){return[P.W]},
"%":";DOMRectReadOnly"},
nz:{"^":"kB;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
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
nA:{"^":"p;0l:length=","%":"DOMTokenList"},
kv:{"^":"cp;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.f(z[b],"$isa1")},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa1")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var z=this.ib(this)
return new J.ay(z,z.length,0,[H.y(z,0)])},
ax:function(a,b,c,d){throw H.a(P.c9(null))},
$asx:function(){return[W.a1]},
$asj:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
a1:{"^":"J;",
gc6:function(a){return new W.kv(a,a.children)},
gbi:function(a){return P.iV(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
nB:{"^":"a8;0a0:type}","%":"HTMLEmbedElement"},
ac:{"^":"p;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"p;",
d8:["ee",function(a,b,c,d){H.h(c,{func:1,args:[W.ac]})
if(c!=null)this.ey(a,b,c,!1)}],
ey:function(a,b,c,d){return a.addEventListener(b,H.bu(H.h(c,{func:1,args:[W.ac]}),1),!1)},
$isa7:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fp|fq|fs|ft"},
aW:{"^":"cM;",$isaW:1,"%":"File"},
e8:{"^":"kG;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isaW")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aW]},
$asx:function(){return[W.aW]},
$isj:1,
$asj:function(){return[W.aW]},
$isc:1,
$asc:function(){return[W.aW]},
$ise8:1,
$asC:function(){return[W.aW]},
"%":"FileList"},
nU:{"^":"a7;0l:length=","%":"FileWriter"},
nX:{"^":"a8;0l:length=","%":"HTMLFormElement"},
b8:{"^":"p;",$isb8:1,"%":"Gamepad"},
nY:{"^":"d9;0q:x=,0t:y=","%":"Gyroscope"},
nZ:{"^":"p;0l:length=","%":"History"},
o_:{"^":"kT;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
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
c1:{"^":"p;0de:data=",$isc1:1,"%":"ImageData"},
eb:{"^":"a8;",$iseb:1,"%":"HTMLImageElement"},
ec:{"^":"a8;0a0:type}",$isec:1,"%":"HTMLInputElement"},
bF:{"^":"dg;",$isbF:1,"%":"KeyboardEvent"},
o4:{"^":"a8;0a0:type}","%":"HTMLLinkElement"},
o5:{"^":"p;",
i:function(a){return String(a)},
"%":"Location"},
o6:{"^":"d9;0q:x=,0t:y=","%":"Magnetometer"},
o8:{"^":"p;0l:length=","%":"MediaList"},
o9:{"^":"a7;",
d8:function(a,b,c,d){H.h(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.ee(a,b,c,!1)},
"%":"MessagePort"},
oa:{"^":"kZ;",
j:function(a,b){return P.aU(a.get(H.L(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gam:function(a){var z=H.e([],[P.i])
this.K(a,new W.iw(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iw:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ob:{"^":"l_;",
j:function(a,b){return P.aU(a.get(H.L(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gam:function(a){var z=H.e([],[P.i])
this.K(a,new W.ix(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
ix:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bb:{"^":"p;",$isbb:1,"%":"MimeType"},
oc:{"^":"l1;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbb")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asx:function(){return[W.bb]},
$isj:1,
$asj:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asC:function(){return[W.bb]},
"%":"MimeTypeArray"},
aB:{"^":"dg;",$isaB:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ku:{"^":"cp;a",
m:function(a,b,c){var z,y
H.D(b)
H.f(c,"$isJ")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga_:function(a){var z=this.a.childNodes
return new W.e9(z,z.length,-1,[H.b_(C.W,z,"C",0)])},
ax:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asx:function(){return[W.J]},
$asj:function(){return[W.J]},
$asc:function(){return[W.J]}},
J:{"^":"a7;",
i1:function(a,b){var z,y
try{z=a.parentNode
J.h8(z,b,a)}catch(y){H.as(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ef(a):z},
fm:function(a,b,c){return a.replaceChild(b,c)},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iB:{"^":"l3;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
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
ok:{"^":"a8;0a0:type}","%":"HTMLOListElement"},
ol:{"^":"a8;0a0:type}","%":"HTMLObjectElement"},
bc:{"^":"p;0l:length=",$isbc:1,"%":"Plugin"},
op:{"^":"l7;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isj:1,
$asj:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asC:function(){return[W.bc]},
"%":"PluginArray"},
ou:{"^":"p;0a0:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
ov:{"^":"ld;",
j:function(a,b){return P.aU(a.get(H.L(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gam:function(a){var z=H.e([],[P.i])
this.K(a,new W.j4(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j4:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ox:{"^":"a8;0a0:type}","%":"HTMLScriptElement"},
oz:{"^":"a8;0l:length=","%":"HTMLSelectElement"},
d9:{"^":"a7;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
be:{"^":"a7;",$isbe:1,"%":"SourceBuffer"},
oA:{"^":"fq;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asx:function(){return[W.be]},
$isj:1,
$asj:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asC:function(){return[W.be]},
"%":"SourceBufferList"},
oB:{"^":"a8;0a0:type}","%":"HTMLSourceElement"},
bf:{"^":"p;",$isbf:1,"%":"SpeechGrammar"},
oC:{"^":"lg;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asC:function(){return[W.bf]},
"%":"SpeechGrammarList"},
bg:{"^":"p;0l:length=",$isbg:1,"%":"SpeechRecognitionResult"},
oE:{"^":"lj;",
j:function(a,b){return a.getItem(H.L(b))},
m:function(a,b,c){a.setItem(b,H.L(c))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gam:function(a){var z=H.e([],[P.i])
this.K(a,new W.jl(z))
return z},
gl:function(a){return a.length},
$asai:function(){return[P.i,P.i]},
$isH:1,
$asH:function(){return[P.i,P.i]},
"%":"Storage"},
jl:{"^":"n:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oH:{"^":"a8;0a0:type}","%":"HTMLStyleElement"},
bh:{"^":"p;",$isbh:1,"%":"CSSStyleSheet|StyleSheet"},
dc:{"^":"a8;",$isdc:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bi:{"^":"a7;",$isbi:1,"%":"TextTrack"},
bj:{"^":"a7;",$isbj:1,"%":"TextTrackCue|VTTCue"},
oM:{"^":"lq;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbj")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isj:1,
$asj:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asC:function(){return[W.bj]},
"%":"TextTrackCueList"},
oN:{"^":"ft;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbi")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asx:function(){return[W.bi]},
$isj:1,
$asj:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asC:function(){return[W.bi]},
"%":"TextTrackList"},
oO:{"^":"p;0l:length=","%":"TimeRanges"},
bl:{"^":"p;",$isbl:1,"%":"Touch"},
bm:{"^":"dg;",$isbm:1,"%":"TouchEvent"},
oP:{"^":"lw;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbl")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bl]},
$asx:function(){return[W.bl]},
$isj:1,
$asj:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asC:function(){return[W.bl]},
"%":"TouchList"},
oQ:{"^":"p;0l:length=","%":"TrackDefaultList"},
dg:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oS:{"^":"p;",
i:function(a){return String(a)},
"%":"URL"},
oU:{"^":"p;0q:x=","%":"VRStageBoundsPoint"},
oV:{"^":"a7;0l:length=","%":"VideoTrackList"},
bP:{"^":"aB;",
ghl:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghk:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbP:1,
"%":"WheelEvent"},
kn:{"^":"a7;",
fn:function(a,b){return a.requestAnimationFrame(H.bu(H.h(b,{func:1,ret:-1,args:[P.W]}),1))},
eJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
p_:{"^":"lY;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb5")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b5]},
$asx:function(){return[W.b5]},
$isj:1,
$asj:function(){return[W.b5]},
$isc:1,
$asc:function(){return[W.b5]},
$asC:function(){return[W.b5]},
"%":"CSSRuleList"},
p0:{"^":"hD;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bt(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.aV(b)
return a.left===z.gaL(b)&&a.top===z.gb4(b)&&a.width===z.gao(b)&&a.height===z.gal(b)},
gT:function(a){return W.fj(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gal:function(a){return a.height},
gao:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
p2:{"^":"m_;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb8")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asx:function(){return[W.b8]},
$isj:1,
$asj:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asC:function(){return[W.b8]},
"%":"GamepadList"},
p3:{"^":"m1;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
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
p4:{"^":"m3;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbg")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isj:1,
$asj:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asC:function(){return[W.bg]},
"%":"SpeechRecognitionResultList"},
p5:{"^":"m5;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isj:1,
$asj:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asC:function(){return[W.bh]},
"%":"StyleSheetList"},
kC:{"^":"db;a,b,c,$ti",
hD:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a_(this.a,this.b,a,!1,z)}},
p1:{"^":"kC;a,b,c,$ti"},
kD:{"^":"eC;a,b,c,d,e,$ti",
fH:function(){var z=this.d
if(z!=null&&this.a<=0)J.h9(this.b,this.c,z,!1)},
p:{
a_:function(a,b,c,d,e){var z=c==null?null:W.fK(new W.kE(c),W.ac)
z=new W.kD(0,a,b,z,!1,[e])
z.fH()
return z}}},
kE:{"^":"n:4;a",
$1:function(a){return this.a.$1(H.f(a,"$isac"))}},
C:{"^":"b;$ti",
ga_:function(a){return new W.e9(a,this.gl(a),-1,[H.b_(this,a,"C",0)])},
ax:function(a,b,c,d){H.z(d,H.b_(this,a,"C",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
e9:{"^":"b;a,b,c,0d,$ti",
I:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dI(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
kw:{"^":"p+hw;"},
ky:{"^":"p+x;"},
kz:{"^":"ky+C;"},
kA:{"^":"p+x;"},
kB:{"^":"kA+C;"},
kF:{"^":"p+x;"},
kG:{"^":"kF+C;"},
kS:{"^":"p+x;"},
kT:{"^":"kS+C;"},
kZ:{"^":"p+ai;"},
l_:{"^":"p+ai;"},
l0:{"^":"p+x;"},
l1:{"^":"l0+C;"},
l2:{"^":"p+x;"},
l3:{"^":"l2+C;"},
l6:{"^":"p+x;"},
l7:{"^":"l6+C;"},
ld:{"^":"p+ai;"},
fp:{"^":"a7+x;"},
fq:{"^":"fp+C;"},
lf:{"^":"p+x;"},
lg:{"^":"lf+C;"},
lj:{"^":"p+ai;"},
lp:{"^":"p+x;"},
lq:{"^":"lp+C;"},
fs:{"^":"a7+x;"},
ft:{"^":"fs+C;"},
lv:{"^":"p+x;"},
lw:{"^":"lv+C;"},
lX:{"^":"p+x;"},
lY:{"^":"lX+C;"},
lZ:{"^":"p+x;"},
m_:{"^":"lZ+C;"},
m0:{"^":"p+x;"},
m1:{"^":"m0+C;"},
m2:{"^":"p+x;"},
m3:{"^":"m2+C;"},
m4:{"^":"p+x;"},
m5:{"^":"m4+C;"}}],["","",,P,{"^":"",
mr:function(a){var z,y
z=J.I(a)
if(!!z.$isc1){y=z.gde(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fv(a.data,a.height,a.width)},
mq:function(a){if(a instanceof P.fv)return{data:a.a,height:a.b,width:a.c}
return a},
aU:function(a){var z,y,x,w,v
if(a==null)return
z=P.ek(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.L(y[w])
z.m(0,v,a[v])}return z},
mo:function(a,b){var z={}
a.K(0,new P.mp(z))
return z},
e5:function(){var z=$.e4
if(z==null){z=J.cJ(window.navigator.userAgent,"Opera",0)
$.e4=z}return z},
hA:function(){var z,y
z=$.e1
if(z!=null)return z
y=$.e2
if(y==null){y=J.cJ(window.navigator.userAgent,"Firefox",0)
$.e2=y}if(y)z="-moz-"
else{y=$.e3
if(y==null){y=!P.e5()&&J.cJ(window.navigator.userAgent,"Trident/",0)
$.e3=y}if(y)z="-ms-"
else z=P.e5()?"-o-":"-webkit-"}$.e1=z
return z},
lm:{"^":"b;",
dE:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cz:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.I(a)
if(!!y.$isaA)return new Date(a.a)
if(!!y.$isiY)throw H.a(P.c9("structured clone of RegExp"))
if(!!y.$isaW)return a
if(!!y.$iscM)return a
if(!!y.$ise8)return a
if(!!y.$isc1)return a
if(!!y.$isep||!!y.$isd4)return a
if(!!y.$isH){x=this.dE(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.K(a,new P.lo(z,this))
return z.a}if(!!y.$isc){x=this.dE(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hi(a,x)}throw H.a(P.c9("structured clone of other type"))},
hi:function(a,b){var z,y,x,w
z=J.aF(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cz(z.j(a,w)))
return x}},
lo:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cz(b)}},
fv:{"^":"b;de:a>,b,c",$isc1:1},
mp:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
ln:{"^":"lm;a,b"},
hN:{"^":"cp;a,b",
gbd:function(){var z,y,x
z=this.b
y=H.ax(z,"x",0)
x=W.a1
return new H.ik(new H.kl(z,H.h(new P.hO(),{func:1,ret:P.ah,args:[y]}),[y]),H.h(new P.hP(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa1")
z=this.gbd()
J.hc(z.b.$1(J.cK(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ax:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.at(this.gbd().a)},
j:function(a,b){var z=this.gbd()
return z.b.$1(J.cK(z.a,b))},
ga_:function(a){var z=P.id(this.gbd(),!1,W.a1)
return new J.ay(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a1]},
$asj:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
hO:{"^":"n:30;",
$1:function(a){return!!J.I(H.f(a,"$isJ")).$isa1}},
hP:{"^":"n:27;",
$1:function(a){return H.k(H.f(a,"$isJ"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fi:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bJ:{"^":"b;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.bt(b,"$isbJ",[P.W],null)
if(!z)return!1
z=this.a
y=J.aV(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gT:function(a){var z,y
z=J.b2(this.a)
y=J.b2(this.b)
return P.fi(P.bR(P.bR(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.y(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bJ(z,H.z(x*b,y),this.$ti)}},
l8:{"^":"b;$ti",
gbA:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.z(z+this.c,H.y(this,0))},
gc2:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bt(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=this.a
y=J.aV(b)
x=y.gaL(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb4(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gbA(b)){if(typeof x!=="number")return x.C()
z=H.z(x+this.d,w)===y.gc2(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.b2(z)
x=this.b
w=J.b2(x)
if(typeof z!=="number")return z.C()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.z(x+this.d,v)
return P.fi(P.bR(P.bR(P.bR(P.bR(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dc:function(a,b){var z,y
H.v(b,"$isbJ",[P.W],"$asbJ")
z=b.a
y=this.a
if(typeof z!=="number")return z.cB()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cB()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a9:{"^":"l8;aL:a>,b4:b>,ao:c>,al:d>,$ti",p:{
iV:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.O()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.O()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nC:{"^":"U;0q:x=,0t:y=","%":"SVGFEBlendElement"},nD:{"^":"U;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},nE:{"^":"U;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nF:{"^":"U;0q:x=,0t:y=","%":"SVGFECompositeElement"},nG:{"^":"U;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nH:{"^":"U;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nI:{"^":"U;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nJ:{"^":"U;0q:x=,0t:y=","%":"SVGFEFloodElement"},nK:{"^":"U;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nL:{"^":"U;0q:x=,0t:y=","%":"SVGFEImageElement"},nM:{"^":"U;0q:x=,0t:y=","%":"SVGFEMergeElement"},nN:{"^":"U;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nO:{"^":"U;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nP:{"^":"U;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nQ:{"^":"U;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},nR:{"^":"U;0q:x=,0t:y=","%":"SVGFESpotLightElement"},nS:{"^":"U;0q:x=,0t:y=","%":"SVGFETileElement"},nT:{"^":"U;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},nV:{"^":"U;0q:x=,0t:y=","%":"SVGFilterElement"},nW:{"^":"bD;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hS:{"^":"bD;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bD:{"^":"U;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},o0:{"^":"bD;0q:x=,0t:y=","%":"SVGImageElement"},bG:{"^":"p;",$isbG:1,"%":"SVGLength"},o3:{"^":"kV;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbG")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bG]},
$isj:1,
$asj:function(){return[P.bG]},
$isc:1,
$asc:function(){return[P.bG]},
$asC:function(){return[P.bG]},
"%":"SVGLengthList"},o7:{"^":"U;0q:x=,0t:y=","%":"SVGMaskElement"},bI:{"^":"p;",$isbI:1,"%":"SVGNumber"},oj:{"^":"l5;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbI")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bI]},
$isj:1,
$asj:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asC:function(){return[P.bI]},
"%":"SVGNumberList"},oo:{"^":"U;0q:x=,0t:y=","%":"SVGPatternElement"},oq:{"^":"p;0q:x=,0t:y=","%":"SVGPoint"},or:{"^":"p;0l:length=","%":"SVGPointList"},os:{"^":"p;0q:x=,0t:y=","%":"SVGRect"},ot:{"^":"hS;0q:x=,0t:y=","%":"SVGRectElement"},oy:{"^":"U;0a0:type}","%":"SVGScriptElement"},oF:{"^":"ll;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"SVGStringList"},oI:{"^":"U;0a0:type}","%":"SVGStyleElement"},U:{"^":"a1;",
gc6:function(a){return new P.hN(a,new W.ku(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oJ:{"^":"bD;0q:x=,0t:y=","%":"SVGSVGElement"},jq:{"^":"bD;","%":"SVGTextPathElement;SVGTextContentElement"},oL:{"^":"jq;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bM:{"^":"p;",$isbM:1,"%":"SVGTransform"},oR:{"^":"ly;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbM")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bM]},
$isj:1,
$asj:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asC:function(){return[P.bM]},
"%":"SVGTransformList"},oT:{"^":"bD;0q:x=,0t:y=","%":"SVGUseElement"},kU:{"^":"p+x;"},kV:{"^":"kU+C;"},l4:{"^":"p+x;"},l5:{"^":"l4+C;"},lk:{"^":"p+x;"},ll:{"^":"lk+C;"},lx:{"^":"p+x;"},ly:{"^":"lx+C;"}}],["","",,P,{"^":"",N:{"^":"b;",$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjE:1}}],["","",,P,{"^":"",nd:{"^":"p;0l:length=","%":"AudioBuffer"},dN:{"^":"a7;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},ne:{"^":"kt;",
j:function(a,b){return P.aU(a.get(H.L(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gam:function(a){var z=H.e([],[P.i])
this.K(a,new P.hg(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"AudioParamMap"},hg:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hh:{"^":"dN;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nf:{"^":"a7;0l:length=","%":"AudioTrackList"},hk:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ng:{"^":"dN;0a0:type}","%":"BiquadFilterNode"},om:{"^":"hk;0l:length=","%":"OfflineAudioContext"},on:{"^":"hh;0a0:type}","%":"Oscillator|OscillatorNode"},kt:{"^":"p+ai;"}}],["","",,P,{"^":"",d8:{"^":"p;",
i8:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isc1)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mq(g))
return}if(!!z.$iseb)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bZ("Incorrect number or type of arguments"))},
i7:function(a,b,c,d,e,f,g){return this.i8(a,b,c,d,e,f,g,null,null,null)},
$isd8:1,
"%":"WebGLRenderingContext"},jN:{"^":"p;",$isjN:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oD:{"^":"li;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){H.D(b)
H.f(c,"$isH")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[[P.H,,,]]},
$isj:1,
$asj:function(){return[[P.H,,,]]},
$isc:1,
$asc:function(){return[[P.H,,,]]},
$asC:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},lh:{"^":"p+x;"},li:{"^":"lh+C;"}}],["","",,O,{"^":"",aH:{"^":"b;0a,0b,0c,0d,$ti",
bG:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cD:function(a,b,c){var z=H.ax(this,"aH",0)
H.h(b,{func:1,ret:P.ah,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.m,[P.j,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
ba:function(a,b){return this.cD(a,null,b)},
fc:function(a){var z
H.v(a,"$isj",[H.ax(this,"aH",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ep:function(a,b){var z
H.v(b,"$isj",[H.ax(this,"aH",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga_:function(a){var z=this.a
return new J.ay(z,z.length,0,[H.y(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ax(this,"aH",0)
H.z(b,z)
z=[z]
if(this.fc(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ep(x,H.e([b],z))}},
$isj:1,
p:{
cR:function(a){var z=new O.aH([a])
z.bG(a)
return z}}},d2:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gE:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
eq:function(a){var z=this.b
if(!(z==null))z.H(a)},
aB:function(){return this.eq(null)},
gW:function(a){var z=this.a
if(z.length>0)return C.a.gay(z)
else return V.c6()},
dZ:function(a){var z=this.a
if(a==null)C.a.h(z,V.c6())
else C.a.h(z,a)
this.aB()},
cp:function(){var z=this.a
if(z.length>0){z.pop()
this.aB()}}}}],["","",,E,{"^":"",cL:{"^":"b;"},aI:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sab:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gE()
y.toString
x=H.h(this.gdW(),{func:1,ret:-1,args:[D.w]})
C.a.N(y.a,x)}y=this.c
if(y!=null){y=y.gE()
y.toString
x=H.h(this.gdW(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)}w=new D.S("shape",z,this.c,this,[F.ez])
w.b=!0
this.af(w)}},
saZ:function(a){var z,y,x,w
if(!J.O(this.r,a)){z=this.r
if(z!=null){y=z.gE()
y.toString
x=H.h(this.gdV(),{func:1,ret:-1,args:[D.w]})
C.a.N(y.a,x)}if(a!=null){y=a.gE()
y.toString
x=H.h(this.gdV(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)}this.r=a
w=new D.S("mover",z,a,this,[U.aj])
w.b=!0
this.af(w)}},
az:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.O(y,this.x)){x=this.x
this.x=y
w=new D.S("matrix",x,y,this,[V.au])
w.b=!0
this.af(w)}for(z=this.y.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.I();)z.d.az(0,b)},
aM:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gW(z))
else C.a.h(z.a,y.k(0,z.gW(z)))
z.aB()
a.e_(this.f)
z=a.dy
x=(z&&C.a).gay(z)
if(x!=null&&this.d!=null)x.i0(a,this)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.I();)z.d.aM(a)
a.dY()
a.dx.cp()},
gE:function(){var z=this.z
if(z==null){z=D.Q()
this.z=z}return z},
af:function(a){var z=this.z
if(!(z==null))z.H(a)},
X:function(){return this.af(null)},
hO:[function(a){H.f(a,"$isw")
this.e=null
this.af(a)},function(){return this.hO(null)},"j4","$1","$0","gdW",0,2,1],
hN:[function(a){this.af(H.f(a,"$isw"))},function(){return this.hN(null)},"j3","$1","$0","gdV",0,2,1],
hL:[function(a){this.af(H.f(a,"$isw"))},function(){return this.hL(null)},"j1","$1","$0","gdU",0,2,1],
j0:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isj",[E.aI],"$asj")
for(z=b.length,y=this.gdU(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b7()
t.a=H.e([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.X()},"$2","ghK",8,0,8],
j2:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isj",[E.aI],"$asj")
for(z=b.length,y=this.gdU(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b7()
t.a=H.e([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.h(y,x)
C.a.N(t.a,y)}}this.X()},"$2","ghM",8,0,8],
$isaK:1,
p:{
e7:function(a,b,c,d,e,f){var z,y
z=new E.aI()
z.a=d
z.b=!0
y=O.cR(E.aI)
z.y=y
y.ba(z.ghK(),z.ghM())
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
z.sab(0,e)
z.saZ(c)
return z}}},j_:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
el:function(a,b){var z,y,x,w,v
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
z=new O.d2()
y=[V.au]
z.a=H.e([],y)
x=z.gE()
x.toString
w={func:1,ret:-1,args:[D.w]}
v=H.h(new E.j1(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d2()
z.a=H.e([],y)
v=z.gE()
v.toString
x=H.h(new E.j2(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d2()
z.a=H.e([],y)
y=z.gE()
y.toString
w=H.h(new E.j3(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.dd])
this.dy=z
C.a.h(z,null)
this.fr=new H.aX(0,0,[P.i,A.ey])},
ghX:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gW(z)
y=this.db
y=z.k(0,y.gW(y))
this.z=y
z=y}return z},
e_:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gay(z):a;(z&&C.a).h(z,y)},
dY:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
j0:function(a,b){var z=new E.j_(a,b)
z.el(a,b)
return z}}},j1:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isw")
z=this.a
z.z=null
z.ch=null}},j2:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j3:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},jv:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a2:x@,0y,0z,0Q,0ch",
gE:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
es:[function(a){var z
H.f(a,"$isw")
z=this.x
if(!(z==null))z.H(a)
this.i2()},function(){return this.es(null)},"er","$1","$0","gcG",0,2,1],
ghu:function(){var z,y,x
z=Date.now()
y=C.d.a3(P.e6(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aA(z,!1)
return x/y},
d_:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.h.cj(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.cj(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
i2:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jx(this),{func:1,ret:-1,args:[P.W]})
C.B.eJ(z)
C.B.fn(z,W.fK(y,P.W))}},
i_:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d_()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aA(w,!1)
x.y=P.e6(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.aM(this.e)}}catch(v){z=H.as(v)
y=H.bw(v)
P.dF("Error: "+H.l(z))
P.dF("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jw:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscP)return E.eH(a,!0,!0,!0,!1)
y=W.cQ(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gc6(a).h(0,y)
w=E.eH(y,!0,!0,!0,!1)
w.a=a
return w},
eH:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jv()
y=P.i8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.bC(a,"webgl",y)
x=H.f(x==null?C.l.bC(a,"experimental-webgl",y):x,"$isd8")
if(x==null)H.q(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j0(x,a)
w=new T.jr(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k_(a)
v=new X.i1()
v.c=new X.aY(!1,!1,!1)
v.d=P.ib(null,null,null,P.m)
w.b=v
v=new X.iy(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ig(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jB(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eC,P.b]])
w.z=v
u=document
t=W.aB
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a_(u,"contextmenu",H.h(w.gf_(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a_(a,"focus",H.h(w.gf2(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a_(a,"blur",H.h(w.geX(),q),!1,r))
v=w.z
p=W.bF
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a_(u,"keyup",H.h(w.gf4(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a_(u,"keydown",H.h(w.gf3(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousedown",H.h(w.gf7(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mouseup",H.h(w.gf9(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousemove",H.h(w.gf8(),s),!1,t))
p=w.z
o=W.bP;(p&&C.a).h(p,W.a_(a,H.L(W.hH(a)),H.h(w.gfa(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a_(u,"mousemove",H.h(w.gf0(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a_(u,"mouseup",H.h(w.gf1(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a_(u,"pointerlockchange",H.h(w.gfb(),q),!1,r))
r=w.z
q=W.bm
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a_(a,"touchstart",H.h(w.gfi(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchend",H.h(w.gfg(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchmove",H.h(w.gfh(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aA(Date.now(),!1)
z.ch=0
z.d_()
return z}}},jx:{"^":"n:31;a",
$1:function(a){var z
H.mX(a)
z=this.a
if(z.z){z.z=!1
z.i_()}}}}],["","",,Z,{"^":"",fd:{"^":"b;a,b",p:{
dl:function(a,b,c){var z
H.v(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bq(c)),35044)
a.bindBuffer(b,null)
return new Z.fd(b,z)}}},dR:{"^":"cL;a,b,c,d,e",
aR:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.as(y)
x=P.u('Failed to bind buffer attribute "'+J.ab(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.ab(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},kk:{"^":"b;a",$isnh:1},dS:{"^":"b;a,0b,c,d",
aK:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aR:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aR(a)},
ig:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aM:function(a){var z,y,x,w,v
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
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(y,", ")+"\nAttrs:   "+C.a.D(u,", ")},
$isoK:1},cm:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bd(this.c)+"'")+"]"}},bn:{"^":"b;a",
gcE:function(a){var z,y
z=this.a
y=(z&$.$get$aQ().a)!==0?3:0
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bN().a)!==0)y+=3
if((z&$.$get$bO().a)!==0)y+=4
if((z&$.$get$bo().a)!==0)++y
return(z&$.$get$aN().a)!==0?y+4:y},
ha:function(a){var z,y,x
z=$.$get$aQ()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bo()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fc()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bn))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.i])
y=this.a
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bN().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bO().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bo().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
p:{
aq:function(a){return new Z.bn(a)}}}}],["","",,D,{"^":"",dW:{"^":"b;"},b7:{"^":"b;0a,0b,0c",
H:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.hL(z))
return x!==0},
hn:function(){return this.H(null)},
i3:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.H(y)}}},
ag:function(a){return this.i3(a,!0,!1)},
p:{
Q:function(){var z=new D.b7()
z.a=H.e([],[{func:1,ret:-1,args:[D.w]}])
z.c=0
return z}}},hL:{"^":"n:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"b;a,0b"},cn:{"^":"w;c,d,a,0b,$ti"},co:{"^":"w;c,d,a,0b,$ti"},S:{"^":"w;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dT:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"nj<"}},eh:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eh))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ei:{"^":"w;c,a,0b"},i1:{"^":"b;0a,0b,0c,0d",
hU:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ei(a,this)
y.b=!0
return z.H(y)},
hQ:function(a){var z,y
this.c=a.b
this.d.N(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ei(a,this)
y.b=!0
return z.H(y)}},em:{"^":"d7;x,y,c,d,e,a,0b"},ig:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ar:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aA(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.V(y.a+x*w,y.b+v*u)
u=this.a.gbj()
s=new X.c7(a,new V.V(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
co:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.H(this.ar(a,b))
return!0},
b0:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ed()
if(typeof z!=="number")return z.bB()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.ar(a,b))
return!0},
b_:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.ar(a,b))
return!0},
hV:function(a){return!1},
f6:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aA(Date.now(),!1)
y=this.f
x=new X.em(c,a,this.a.gbj(),b,z,this)
x.b=!0
y.H(x)
this.y=z
this.x=new V.V(0,0)}},aY:{"^":"b;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aY))return!1
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
return z+(this.c?"Shift+":"")}},c7:{"^":"d7;x,y,z,Q,ch,c,d,e,a,0b"},iy:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bM:function(a,b,c){var z,y,x
z=new P.aA(Date.now(),!1)
y=this.a.gbj()
x=new X.c7(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
co:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.H(this.bM(a,b,!0))
return!0},
b0:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ed()
if(typeof z!=="number")return z.bB()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.bM(a,b,!0))
return!0},
b_:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.bM(a,b,!1))
return!0},
hW:function(a,b){return!1}},d7:{"^":"w;"},eL:{"^":"d7;x,y,z,Q,ch,c,d,e,a,0b"},jB:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ar:function(a,b){var z,y,x,w
H.v(a,"$isc",[V.V],"$asc")
z=new P.aA(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gbj()
w=new X.eL(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hT:function(a){var z
H.v(a,"$isc",[V.V],"$asc")
z=this.b
if(z==null)return!1
z.H(this.ar(a,!0))
return!0},
hR:function(a){var z
H.v(a,"$isc",[V.V],"$asc")
z=this.c
if(z==null)return!1
z.H(this.ar(a,!0))
return!0},
hS:function(a){var z
H.v(a,"$isc",[V.V],"$asc")
z=this.d
if(z==null)return!1
z.H(this.ar(a,!1))
return!0}},k_:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbj:function(){var z=this.a
return V.ex(0,0,(z&&C.l).gbi(z).c,C.l.gbi(z).d)},
cQ:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eh(z,new X.aY(y,a.altKey,a.shiftKey))},
aG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aY(y,a.altKey,a.shiftKey)},
bX:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aY(y,a.altKey,a.shiftKey)},
at:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=z.top
if(typeof x!=="number")return x.S()
return new V.V(y-w,x-v)},
aP:function(a){return new V.a6(a.movementX,a.movementY)},
bR:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.V])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.h.a9(u.pageX)
C.h.a9(u.pageY)
s=z.left
C.h.a9(u.pageX)
C.a.h(y,new V.V(t-s,C.h.a9(u.pageY)-z.top))}return y},
ap:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dT(z,new X.aY(y,a.altKey,a.shiftKey))},
iD:[function(a){this.f=!0},"$1","gf2",4,0,4],
iw:[function(a){this.f=!1},"$1","geX",4,0,4],
iA:[function(a){if(this.f)a.preventDefault()},"$1","gf_",4,0,4],
iF:[function(a){var z
H.f(a,"$isbF")
if(!this.f)return
z=this.cQ(a)
if(this.b.hU(z))a.preventDefault()},"$1","gf4",4,0,20],
iE:[function(a){var z
H.f(a,"$isbF")
if(!this.f)return
z=this.cQ(a)
if(this.b.hQ(z))a.preventDefault()},"$1","gf3",4,0,20],
iH:[function(a){var z,y,x,w
H.f(a,"$isaB")
z=this.a
z.focus()
this.f=!0
this.aG(a)
if(this.x){y=this.ap(a)
x=this.aP(a)
if(this.d.co(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.at(a)
if(this.c.co(y,w))a.preventDefault()},"$1","gf7",4,0,5],
iJ:[function(a){var z,y,x
H.f(a,"$isaB")
this.aG(a)
z=this.ap(a)
if(this.x){y=this.aP(a)
if(this.d.b0(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b0(z,x))a.preventDefault()},"$1","gf9",4,0,5],
iC:[function(a){var z,y,x,w
H.f(a,"$isaB")
z=this.a
if(!(z&&C.l).gbi(z).dc(0,new P.bJ(a.clientX,a.clientY,[P.W]))){this.aG(a)
y=this.ap(a)
if(this.x){x=this.aP(a)
if(this.d.b0(y,x))a.preventDefault()
return}if(this.r)return
w=this.at(a)
if(this.c.b0(y,w))a.preventDefault()}},"$1","gf1",4,0,5],
iI:[function(a){var z,y,x
H.f(a,"$isaB")
this.aG(a)
z=this.ap(a)
if(this.x){y=this.aP(a)
if(this.d.b_(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b_(z,x))a.preventDefault()},"$1","gf8",4,0,5],
iB:[function(a){var z,y,x,w
H.f(a,"$isaB")
z=this.a
if(!(z&&C.l).gbi(z).dc(0,new P.bJ(a.clientX,a.clientY,[P.W]))){this.aG(a)
y=this.ap(a)
if(this.x){x=this.aP(a)
if(this.d.b_(y,x))a.preventDefault()
return}if(this.r)return
w=this.at(a)
if(this.c.b_(y,w))a.preventDefault()}},"$1","gf0",4,0,5],
iK:[function(a){var z,y
H.f(a,"$isbP")
this.aG(a)
z=new V.a6((a&&C.A).ghk(a),C.A.ghl(a)).w(0,180)
if(this.x){if(this.d.hV(z))a.preventDefault()
return}if(this.r)return
y=this.at(a)
if(this.c.hW(z,y))a.preventDefault()},"$1","gfa",4,0,35],
iL:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ap(this.y)
v=this.at(this.y)
this.d.f6(w,v,x)}},"$1","gfb",4,0,4],
iR:[function(a){var z
H.f(a,"$isbm")
this.a.focus()
this.f=!0
this.bX(a)
z=this.bR(a)
if(this.e.hT(z))a.preventDefault()},"$1","gfi",4,0,13],
iP:[function(a){var z
H.f(a,"$isbm")
this.bX(a)
z=this.bR(a)
if(this.e.hR(z))a.preventDefault()},"$1","gfg",4,0,13],
iQ:[function(a){var z
H.f(a,"$isbm")
this.bX(a)
z=this.bR(a)
if(this.e.hS(z))a.preventDefault()},"$1","gfh",4,0,13]}}],["","",,D,{"^":"",hB:{"^":"b;",$isa2:1,$isaK:1},a2:{"^":"b;",$isaK:1},i2:{"^":"aH;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gE:function(){var z=this.Q
if(z==null){z=D.Q()
this.Q=z}return z},
as:function(a){var z=this.Q
if(!(z==null))z.H(a)},
f5:[function(a){var z
H.f(a,"$isw")
z=this.ch
if(!(z==null))z.H(a)},function(){return this.f5(null)},"iG","$1","$0","gcX",0,2,1],
iM:[function(a){var z,y,x
H.v(a,"$isj",[D.a2],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.eF(x))return!1}return!0},"$1","gfd",4,0,37],
it:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcX(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.f(b[u],"$isa2")
if(t instanceof D.cu)C.a.h(this.x,t)
s=t.r
if(s==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.r=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.cn(a,b,this,[z])
z.b=!0
this.as(z)},"$2","geU",8,0,19],
iO:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcX(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.f(b[u],"$isa2")
if(t instanceof D.cu)C.a.N(this.x,t)
s=t.r
if(s==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.r=s}H.h(x,w)
C.a.N(s.a,x)}z=new D.co(a,b,this,[z])
z.b=!0
this.as(z)},"$2","gff",8,0,19],
eF:function(a){var z=C.a.aS(this.x,a)
return z},
$asj:function(){return[D.a2]},
$asaH:function(){return[D.a2]}},iH:{"^":"b;",$isa2:1,$isaK:1},ji:{"^":"b;",$isa2:1,$isaK:1},cu:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gE:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
as:[function(a){var z
H.f(a,"$isw")
z=this.r
if(!(z==null))z.H(a)},function(){return this.as(null)},"ix","$1","$0","gbQ",0,2,1],
$isa2:1,
$isaK:1},jt:{"^":"b;",$isa2:1,$isaK:1},ju:{"^":"b;",$isa2:1,$isaK:1}}],["","",,V,{"^":"",
nl:[function(a,b){if(typeof b!=="number")return b.S()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iv",8,0,33],
n8:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.b9(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.b.a8("null",c)
return C.b.a8(C.h.e5($.r.$2(a,0)?0:a,b),c+b+1)},
bv:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isc",[P.t],"$asc")
z=H.e([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.b.a8(z[u],x))}return z},
dE:function(a,b){return C.h.ia(Math.pow(b,C.I.cj(Math.log(H.mn(a))/Math.log(b))))},
a0:{"^":"b;a,b,c",
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
return new V.a0(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
b3:{"^":"b;a,b,c,d",
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
return new V.b3(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b3))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
cq:{"^":"b;a,b,c,d,e,f,r,x,y",
aa:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$iscq")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.h.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.h.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.h.k(t,s)
q=a5.b
p=C.h.k(z,q)
o=a5.e
n=C.h.k(w,o)
m=a5.x
l=C.h.k(t,m)
k=a5.c
z=C.h.k(z,k)
j=a5.f
w=C.h.k(w,j)
i=a5.y
t=C.h.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.h.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.h.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.h.k(d,s)
b=C.h.k(h,q)
a=C.h.k(f,o)
a0=C.h.k(d,m)
h=C.h.k(h,k)
f=C.h.k(f,j)
d=C.h.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.h.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.h.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cq(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.k(a3,s),C.h.k(a1,q)+C.h.k(a2,o)+C.h.k(a3,m),C.h.k(a1,k)+C.h.k(a2,j)+C.h.k(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cq))return!1
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
z=[P.t]
y=V.bv(H.e([this.a,this.d,this.r],z),3,0)
x=V.bv(H.e([this.b,this.e,this.x],z),3,0)
w=V.bv(H.e([this.c,this.f,this.y],z),3,0)
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
au:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aa:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
dN:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.r.$2(a2,0))return V.c6()
a3=1/a2
a4=-w
a5=-i
return V.aJ((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isau")
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
return V.aJ(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
b6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
b5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.a3(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
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
i:function(a){return this.L()},
dF:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.bv(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bv(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bv(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bv(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
L:function(){return this.dF("",3,0)},
B:function(a){return this.dF(a,3,0)},
p:{
aJ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c6:function(){return V.aJ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eo:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aJ(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)}}},
V:{"^":"b;q:a>,t:b>",
S:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.V(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
a3:{"^":"b;q:a>,t:b>,c",
C:function(a,b){return new V.a3(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.a3(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
bK:{"^":"b;q:a>,t:b>,c,d",
k:function(a,b){return new V.bK(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bK))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
ew:{"^":"b;q:a>,t:b>,c,d",
gan:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ew))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
p:{
ex:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ew(a,b,c,d)}}},
a6:{"^":"b;a,b",
hB:[function(a){return Math.sqrt(this.F(this))},"$0","gl",1,0,24],
F:function(a){var z,y,x,w
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
return new V.a6(z*b,y*b)},
w:function(a,b){var z,y
if($.r.$2(b,0))return new V.a6(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.a6(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
hB:[function(a){return Math.sqrt(this.F(this))},"$0","gl",1,0,24],
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cn:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
au:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.E(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if($.r.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dO:function(){if(!$.r.$2(0,this.a))return!1
if(!$.r.$2(0,this.b))return!1
if(!$.r.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hr:{"^":"dW;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bH:function(a){var z=V.n8(a,this.c,this.b)
return z},
gE:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
Z:function(a){var z=this.y
if(!(z==null))z.H(a)},
se8:function(a,b){},
sdQ:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bH(z)}z=new D.S("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.Z(z)}},
sdS:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bH(z)}z=new D.S("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.Z(z)}},
sa1:function(a,b){var z,y
b=this.bH(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.S("location",y,b,this,[P.t])
z.b=!0
this.Z(z)}},
sdR:function(a){var z,y,x
z=this.e
if(!$.r.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.S("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.Z(z)}},
sY:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.S("velocity",x,a,this,[P.t])
z.b=!0
this.Z(z)}},
sdd:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.S("dampening",y,a,this,[P.t])
z.b=!0
this.Z(z)}},
az:function(a,b){var z,y,x,w
z=this.f
if($.r.$2(z,0)){z=this.r
z=!$.r.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.r.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sY(y)}},
p:{
dY:function(){var z=new U.hr()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dZ:{"^":"aj;0a,0b",
gE:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
b7:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dZ))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")},
p:{
cS:function(a){var z=new U.dZ()
z.a=a
return z}}},ea:{"^":"aH;0e,0f,0r,0a,0b,0c,0d",
gE:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
Z:[function(a){var z
H.f(a,"$isw")
z=this.e
if(!(z==null))z.H(a)},function(){return this.Z(null)},"aC","$1","$0","gbb",0,2,1],
is:[function(a,b){var z,y,x,w,v,u,t
z=U.aj
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbb(),w={func:1,ret:-1,args:[D.w]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gE()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.cn(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","geT",8,0,23],
iN:[function(a,b){var z,y,x,w,v,u,t
z=U.aj
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbb(),w={func:1,ret:-1,args:[D.w]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gE()
t.toString
H.h(x,w)
C.a.N(t.a,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gfe",8,0,23],
b7:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ay(z,z.length,0,[H.y(z,0)]),x=null;z.I();){y=z.d
if(y!=null){w=y.b7(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.c6():x
z=this.e
if(!(z==null))z.ag(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ea))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.O(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.aj]},
$asaH:function(){return[U.aj]},
$isaj:1},aj:{"^":"dW;"},k0:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gE:function(){var z=this.fx
if(z==null){z=D.Q()
this.fx=z}return z},
Z:[function(a){var z
H.f(a,"$isw")
z=this.fx
if(!(z==null))z.H(a)},function(){return this.Z(null)},"aC","$1","$0","gbb",0,2,1],
hb:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.Q()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.w]}
x=H.h(this.geQ(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.Q()
x.d=z}x=H.h(this.geR(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.Q()
x.c=z}x=H.h(this.geS(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.Q()
x.f=z}x=H.h(this.geN(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.Q()
x.d=z}x=H.h(this.geO(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.Q()
x.b=z}x=H.h(this.gfG(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.Q()
x.d=z}x=H.h(this.gfF(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.Q()
x.c=z}y=H.h(this.gfE(),y)
C.a.h(z.a,y)
return!0},
aj:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.a6(z,y)},
ip:[function(a){a=H.k(H.f(a,"$isw"),"$isc7")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geQ",4,0,2],
iq:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isw"),"$isc7")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a6(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.aj(new V.a6(y.a,y.b).k(0,2).w(0,z.gan()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.aj(new V.a6(x.a,x.b).k(0,2).w(0,z.gan()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.S(0,a.z)
this.dx=this.aj(new V.a6(y.a,y.b).k(0,2).w(0,z.gan()))}this.aC()},"$1","geR",4,0,2],
ir:[function(a){var z,y,x
H.f(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sY(-y*10*z)
this.aC()}},"$1","geS",4,0,2],
im:[function(a){if(H.k(H.f(a,"$isw"),"$isem").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geN",4,0,2],
io:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isw"),"$isc7")
if(!J.O(this.d,a.x.b))return
z=a.c
y=a.d
x=y.S(0,a.y)
w=this.aj(new V.a6(x.a,x.b).k(0,2).w(0,z.gan()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.S(0,a.z)
this.dx=this.aj(new V.a6(y.a,y.b).k(0,2).w(0,z.gan()))
this.aC()},"$1","geO",4,0,2],
iV:[function(a){H.f(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfG",4,0,2],
iU:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isw"),"$iseL")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a6(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.aj(new V.a6(y.a,y.b).k(0,2).w(0,z.gan()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.aj(new V.a6(x.a,x.b).k(0,2).w(0,z.gan()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.S(0,a.z)
this.dx=this.aj(new V.a6(y.a,y.b).k(0,2).w(0,z.gan()))}this.aC()},"$1","gfF",4,0,2],
iT:[function(a){var z,y,x
H.f(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sY(-y*10*z)
this.aC()}},"$1","gfE",4,0,2],
b7:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.dy=y
x=b.y
this.c.az(0,x)
this.b.az(0,x)
z=V.eo(this.b.d)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aJ(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaj:1,
p:{
f8:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.k0()
y=U.dY()
y.se8(0,!0)
y.sdQ(6.283185307179586)
y.sdS(0)
y.sa1(0,0)
y.sdR(100)
y.sY(0)
y.sdd(0.5)
z.b=y
y=y.gE()
y.toString
x=H.h(z.gbb(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)
y=U.dY()
y.se8(0,!0)
y.sdQ(6.283185307179586)
y.sdS(0)
y.sa1(0,0)
y.sdR(100)
y.sY(0)
y.sdd(0.5)
z.c=y
C.a.h(y.gE().a,x)
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
w=new X.aY(b,!1,!1)
v=z.d
z.d=w
y=new D.S("modifiers",v,w,z,[X.aY])
y.b=!0
z.Z(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.S("invertX",y,!1,z,[P.ah])
y.b=!0
z.Z(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.S("invertY",y,!1,z,[P.ah])
y.b=!0
z.Z(y)}z.hb(c)
return z}}}}],["","",,M,{"^":"",hJ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aD:[function(a){var z
H.f(a,"$isw")
z=this.x
if(!(z==null))z.H(a)},function(){return this.aD(null)},"ih","$1","$0","gai",0,2,1],
iy:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.cn(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","geY",8,0,8],
iz:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.v(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.h(x,w)
C.a.N(s.a,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","geZ",8,0,8],
se2:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gE()
z.toString
y=H.h(this.gai(),{func:1,ret:-1,args:[D.w]})
C.a.N(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gE()
z.toString
y=H.h(this.gai(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.S("technique",x,this.c,this,[O.dd])
z.b=!0
this.aD(z)}},
gE:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
aM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.e_(this.c)
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
u=C.d.a9(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.d.a9(v.b*w)
s=C.d.a9(v.c*x)
a.c=s
v=C.d.a9(v.d*w)
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
s.dZ(V.aJ(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.et
if(y==null){y=new V.E(0,0,-1)
m=y.w(0,Math.sqrt(y.F(y)))
y=new V.E(0,1,0).au(m)
l=y.w(0,Math.sqrt(y.F(y)))
k=m.au(l)
j=new V.E(0,0,0)
y=V.aJ(l.a,k.a,m.a,l.P(0).F(j),l.b,k.b,m.b,k.P(0).F(j),l.c,k.c,m.c,m.P(0).F(j),0,0,0,1)
$.et=y
i=y}else i=y
y=z.a
if(y!=null){h=y.b7(0,a,z)
if(h!=null)i=h.k(0,i)}a.db.dZ(i)
z=this.c
if(z!=null)z.az(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.I();)z.d.az(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.I();)z.d.aM(a)
this.a.toString
a.cy.cp()
a.db.cp()
this.b.toString
a.dY()},
$isow:1}}],["","",,A,{"^":"",dM:{"^":"b;a,b,c"},hf:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
ho:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hm:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ip:{"^":"ey;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aI,0aw,0aJ,0bl,0dg,0dh,0bm,0bn,0di,0dj,0bo,0bp,0dk,0dl,0bq,0dm,0dn,0br,0dq,0dr,0bs,0bt,0bu,0ds,0dt,0bv,0bw,0du,0dv,0bx,0dw,0cc,0dz,0cd,0dA,0ce,0dB,0cf,0dC,0cg,0dD,0ci,a,b,0c,0d,0e,0f,0r",
ek:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.fJ(z)
a2.fQ(z)
a2.fK(z)
a2.fY(z)
a2.fZ(z)
a2.fS(z)
a2.h2(z)
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
v.fN(z)
v.fI(z)
v.fL(z)
v.fO(z)
v.fW(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fU(z)
v.fV(z)}v.fR(z)
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
p=H.e([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.D(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fM(z)
v.fT(z)
v.fX(z)
v.h_(z)
v.h0(z)
v.h1(z)
v.fP(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.D(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cR(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cR(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fO(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.q(P.u("Failed to link shader: "+H.l(m)))}this.fz()
this.fB()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaM")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaM")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaM")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaM")
if(a2.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isdi")
if(a2.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaM")
if(a2.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaM")
this.k3=H.e([],[A.aM])
y=a2.aI
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isM")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.q(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaM"))}}y=a2.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isM")
break
case C.f:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isap")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isM")
break}}y=a2.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isM")
break
case C.f:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isap")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isM")
break}}y=a2.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.aI=H.k(this.r.n(0,"diffuseTxt"),"$isao")
this.aJ=H.k(this.r.n(0,"nullDiffuseTxt"),"$isM")
break
case C.f:this.aw=H.k(this.r.n(0,"diffuseTxt"),"$isap")
this.aJ=H.k(this.r.n(0,"nullDiffuseTxt"),"$isM")
break}}y=a2.d
if(y!==C.c){this.bl=H.k(this.r.n(0,"invDiffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.dg=H.k(this.r.n(0,"invDiffuseTxt"),"$isao")
this.bm=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isM")
break
case C.f:this.dh=H.k(this.r.n(0,"invDiffuseTxt"),"$isap")
this.bm=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isM")
break}}y=a2.e
if(y!==C.c){this.bp=H.k(this.r.n(0,"shininess"),"$isY")
this.bn=H.k(this.r.n(0,"specularClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.di=H.k(this.r.n(0,"specularTxt"),"$isao")
this.bo=H.k(this.r.n(0,"nullSpecularTxt"),"$isM")
break
case C.f:this.dj=H.k(this.r.n(0,"specularTxt"),"$isap")
this.bo=H.k(this.r.n(0,"nullSpecularTxt"),"$isM")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.e:this.dk=H.k(this.r.n(0,"bumpTxt"),"$isao")
this.bq=H.k(this.r.n(0,"nullBumpTxt"),"$isM")
break
case C.f:this.dl=H.k(this.r.n(0,"bumpTxt"),"$isap")
this.bq=H.k(this.r.n(0,"nullBumpTxt"),"$isM")
break}if(a2.dy){this.dm=H.k(this.r.n(0,"envSampler"),"$isap")
this.dn=H.k(this.r.n(0,"nullEnvTxt"),"$isM")
y=a2.r
if(y!==C.c){this.br=H.k(this.r.n(0,"reflectClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.dq=H.k(this.r.n(0,"reflectTxt"),"$isao")
this.bs=H.k(this.r.n(0,"nullReflectTxt"),"$isM")
break
case C.f:this.dr=H.k(this.r.n(0,"reflectTxt"),"$isap")
this.bs=H.k(this.r.n(0,"nullReflectTxt"),"$isM")
break}}y=a2.x
if(y!==C.c){this.bt=H.k(this.r.n(0,"refraction"),"$isY")
this.bu=H.k(this.r.n(0,"refractClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.ds=H.k(this.r.n(0,"refractTxt"),"$isao")
this.bv=H.k(this.r.n(0,"nullRefractTxt"),"$isM")
break
case C.f:this.dt=H.k(this.r.n(0,"refractTxt"),"$isap")
this.bv=H.k(this.r.n(0,"nullRefractTxt"),"$isM")
break}}}y=a2.y
if(y!==C.c){this.bw=H.k(this.r.n(0,"alpha"),"$isY")
switch(y){case C.c:break
case C.i:break
case C.e:this.du=H.k(this.r.n(0,"alphaTxt"),"$isao")
this.bx=H.k(this.r.n(0,"nullAlphaTxt"),"$isM")
break
case C.f:this.dv=H.k(this.r.n(0,"alphaTxt"),"$isap")
this.bx=H.k(this.r.n(0,"nullAlphaTxt"),"$isM")
break}}this.cc=H.e([],[A.eY])
this.cd=H.e([],[A.eZ])
this.ce=H.e([],[A.f_])
this.cf=H.e([],[A.f0])
this.cg=H.e([],[A.f1])
this.ci=H.e([],[A.f2])
if(a2.k2){y=a2.z
if(y>0){this.dw=H.f(this.r.n(0,"dirLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.cc;(x&&C.a).h(x,new A.eY(l,k,j))}}y=a2.Q
if(y>0){this.dz=H.f(this.r.n(0,"pntLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isY")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.cd;(x&&C.a).h(x,new A.eZ(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dA=H.f(this.r.n(0,"spotLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isY")
x=this.ce;(x&&C.a).h(x,new A.f_(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dB=H.f(this.r.n(0,"txtDirLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isK")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isM")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isao")
x=this.cf;(x&&C.a).h(x,new A.f0(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dC=H.f(this.r.n(0,"txtPntLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdi")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isM")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isap")
x=this.cg;(x&&C.a).h(x,new A.f1(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dD=H.f(this.r.n(0,"txtSpotLightCount"),"$isM")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isK")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isM")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isK")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isY")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isY")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isY")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isY")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.q(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isao")
x=this.ci;(x&&C.a).h(x,new A.f2(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ad:function(a,b,c){b.a.uniform1i(b.d,1)},
a6:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
io:function(a,b){var z,y
z=a.aw
y=new A.ip(b,z)
y.en(b,z)
y.ek(a,b)
return y}}},is:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aI,aw,aJ",
fJ:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aI+"];\n"
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
fQ:function(a){var z
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
fK:function(a){var z
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
fY:function(a){var z,y
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
fZ:function(a){var z,y
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
fS:function(a){var z
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
h2:function(a){var z
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
aq:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aA(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fN:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aq(a,z,"emission")
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
fI:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aq(a,z,"ambient")
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
fL:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"diffuse")
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
fO:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"invDiffuse")
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
fW:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aq(a,z,"specular")
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
fR:function(a){var z,y
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
fU:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aq(a,z,"reflect")
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
fV:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aq(a,z,"refract")
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
fM:function(a){var z,y
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
fT:function(a){var z,y
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
fX:function(a){var z,y
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
h_:function(a){var z,y,x
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
h0:function(a){var z,y,x
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
h1:function(a){var z,y,x
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
fP:function(a){var z
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
i:function(a){return this.aw}},eY:{"^":"b;a,b,c"},f0:{"^":"b;a,b,c,d,e,f,r,x"},eZ:{"^":"b;a,b,c,d,e,f,r"},f1:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f_:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f2:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ey:{"^":"cL;",
en:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cR:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fO(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fz:function(){var z,y,x,w,v,u
z=H.e([],[A.dM])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dM(y,v.name,u))}this.f=new A.hf(z)},
fB:function(){var z,y,x,w,v,u
z=H.e([],[A.ad])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hj(v.type,v.size,v.name,u))}this.r=new A.jM(z)},
aF:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.M(z,y,b,c)
else return A.dh(z,y,b,a,c)},
eG:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.dh(z,y,b,a,c)},
eH:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ap(z,y,b,c)
else return A.dh(z,y,b,a,c)},
bg:function(a,b){return new P.fg(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hj:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.Y(this.a,this.e,c,d)
case 35664:return new A.jH(this.a,this.e,c,d)
case 35665:return new A.K(this.a,this.e,c,d)
case 35666:return new A.jK(this.a,this.e,c,d)
case 35667:return new A.jI(this.a,this.e,c,d)
case 35668:return new A.jJ(this.a,this.e,c,d)
case 35669:return new A.jL(this.a,this.e,c,d)
case 35674:return new A.jO(this.a,this.e,c,d)
case 35675:return new A.di(this.a,this.e,c,d)
case 35676:return new A.aM(this.a,this.e,c,d)
case 35678:return this.eG(b,c,d)
case 35680:return this.eH(b,c,d)
case 35670:throw H.a(this.bg("BOOL",c))
case 35671:throw H.a(this.bg("BOOL_VEC2",c))
case 35672:throw H.a(this.bg("BOOL_VEC3",c))
case 35673:throw H.a(this.bg("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ci:{"^":"b;a,b",
i:function(a){return this.b}},ad:{"^":"b;"},jM:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
ht:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.ht("\n")}},M:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jI:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jJ:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jL:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jG:{"^":"ad;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dh:function(a,b,c,d,e){var z=new A.jG(a,b,c,e)
z.f=d
z.e=P.ic(d,0,!1,P.m)
return z}}},Y:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jH:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},K:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jK:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jO:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},di:{"^":"ad;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bq(H.v(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aM:{"^":"ad;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bq(H.v(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ao:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ap:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dx:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.ag,P.t,P.t]})
z=F.da()
F.bU(z,b,c,d,a,1,0,0,1)
F.bU(z,b,c,d,a,0,1,0,3)
F.bU(z,b,c,d,a,0,0,1,2)
F.bU(z,b,c,d,a,-1,0,0,0)
F.bU(z,b,c,d,a,0,-1,0,0)
F.bU(z,b,c,d,a,0,0,-1,3)
z.ak()
return z},
cA:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bU:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.ag,P.t,P.t]})
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
z.d=y}l=F.cA(y)
k=F.cA(z.b)
j=F.dG(d,e,new F.m6(z,F.cA(z.c),F.cA(z.d),k,l,c),b)
if(j!=null)a.aY(j)},
fR:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.t,args:[P.t]})
if(e<3)return
z=F.da()
y=b?-1:1
x=-6.283185307179586/e
w=H.e([],[F.ag])
v=z.a
u=new V.E(0,0,y)
u=u.w(0,Math.sqrt(u.F(u)))
C.a.h(w,v.h6(new V.bK(a,-1,-1,-1),new V.b3(1,1,1,1),new V.a3(0,0,c),new V.E(0,0,y),new V.V(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.E(r,q,y).w(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cb(new V.bK(a,-1,-1,-1),null,new V.b3(n,l,m,1),new V.a3(r*p,q*p,c),new V.E(0,0,y),new V.V(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.h4(w)
return z},
fP:function(a,b,c,d,e,f){return F.mt(!0,c,d,new F.ms(a,f),e)},
mt:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.t,args:[P.t,P.t]})
if(e<3)return
if(c<1)return
z=F.dG(c,e,new F.mv(d),null)
if(z==null)return
z.ak()
z.bY()
if(b)z.aY(F.fR(3,!1,1,new F.mw(d),e))
z.aY(F.fR(1,!0,-1,new F.mx(d),e))
return z},
n2:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.n3()
y=F.dx(a,null,new F.n4(z),c)
y.bY()
return y},
h5:function(a,b,c,d){return F.fQ(c,a,d,b,new F.n6())},
mM:function(a,b,c,d,e,f){return F.fQ(d,a,e,b,new F.mN(f,c))},
fQ:function(a,b,c,d,e){var z=F.dG(a,b,new F.mu(H.h(e,{func:1,ret:V.a3,args:[P.t]}),d,b,c),null)
if(z==null)return
z.ak()
z.bY()
return z},
dG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.ag,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.da()
y=H.e([],[F.ag])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cb(null,null,new V.b3(u,0,0,1),null,null,new V.V(w,1),null,null,0)
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
t=F.cb(null,null,new V.b3(o,n,m,1),null,null,new V.V(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c8(d))}}z.d.h5(a+1,b+1,y)
return z},
m6:{"^":"n:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cn(z.b,b).cn(z.d.cn(z.c,b),c)
a.sa1(0,new V.a3(y.a,y.b,y.c))
a.se3(y.w(0,Math.sqrt(y.F(y))))
z=1-b
x=1-c
a.sd9(new V.bK(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
ms:{"^":"n:15;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mv:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sa1(0,new V.a3(y,u,w))
u=new V.E(y,u,w)
a.se3(u.w(0,Math.sqrt(u.F(u))))
a.sd9(new V.bK(1-c,2+c,-1,-1))}},
mw:{"^":"n:22;a",
$1:function(a){return this.a.$2(a,1)}},
mx:{"^":"n:22;a",
$1:function(a){return this.a.$2(1-a,0)}},
n3:{"^":"n:15;",
$2:function(a,b){return 0}},
n4:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.F(x))).k(0,1+z)
a.sa1(0,new V.a3(z.a,z.b,z.c))}},
n6:{"^":"n:16;",
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)}},
mN:{"^":"n:16;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a3(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mu:{"^":"n:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dH(y.$1(z),x)
x=J.dH(y.$1(z+3.141592653589793/this.c),x).S(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.F(x)))
u=new V.E(1,0,0)
y=v.au(!v.u(0,u)?new V.E(0,0,1):u)
t=y.w(0,Math.sqrt(y.F(y)))
y=t.au(v)
u=y.w(0,Math.sqrt(y.F(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa1(0,w.C(0,new V.a3(y.a-x.a,y.b-x.b,y.c-x.c)))}},
am:{"^":"b;0a,0b,0c,0d,0e",
av:function(){if(!this.gaU()){C.a.N(this.a.a.d.b,this)
this.a.a.X()}this.bT()
this.bU()
this.fl()},
fu:function(a){this.a=a
C.a.h(a.d.b,this)},
fv:function(a){this.b=a
C.a.h(a.d.c,this)},
fw:function(a){this.c=a
C.a.h(a.d.d,this)},
bT:function(){var z=this.a
if(z!=null){C.a.N(z.d.b,this)
this.a=null}},
bU:function(){var z=this.b
if(z!=null){C.a.N(z.d.c,this)
this.b=null}},
fl:function(){var z=this.c
if(z!=null){C.a.N(z.d.d,this)
this.c=null}},
gaU:function(){return this.a==null||this.b==null||this.c==null},
eA:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.E(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.dO())return
return v.w(0,Math.sqrt(v.F(v)))},
eD:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.S(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.F(z)))
z=w.S(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.au(z.w(0,Math.sqrt(z.F(z))))
return z.w(0,Math.sqrt(z.F(z)))},
c5:function(){if(this.d!=null)return!0
var z=this.eA()
if(z==null){z=this.eD()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
ez:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.E(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.dO())return
return v.w(0,Math.sqrt(v.F(v)))},
eC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.r.$2(n,0)){z=r.S(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.F(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.S(0,u).k(0,l).C(0,u).S(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.F(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.F(z)))
z=k.au(m)
z=z.w(0,Math.sqrt(z.F(z))).au(k)
m=z.w(0,Math.sqrt(z.F(z)))}return m},
c3:function(){if(this.e!=null)return!0
var z=this.ez()
if(z==null){z=this.eC()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
aV:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.P(0)
y=this.e
if(y!=null)this.e=y.P(0)
this.a.a.X()},
ghf:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var z,y
if(this.gaU())return a+"disposed"
z=a+C.b.a8(J.ab(this.a.e),0)+", "+C.b.a8(J.ab(this.b.e),0)+", "+C.b.a8(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.B("")},
p:{
bB:function(a,b,c){var z,y,x
z=new F.am()
y=a.a
if(y==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.u("May not create a face with vertices attached to different shapes."))
z.fu(a)
z.fv(b)
z.fw(c)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
hM:{"^":"b;"},
jh:{"^":"hM;",
aX:function(a,b,c){var z,y
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
d_:{"^":"b;0a,0b",
av:function(){if(!this.gaU()){C.a.N(this.a.a.c.b,this)
this.a.a.X()}this.bT()
this.bU()},
bT:function(){var z=this.a
if(z!=null){C.a.N(z.c.b,this)
this.a=null}},
bU:function(){var z=this.b
if(z!=null){C.a.N(z.c.c,this)
this.b=null}},
gaU:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){if(this.gaU())return a+"disposed"
return a+C.b.a8(J.ab(this.a.e),0)+", "+C.b.a8(J.ab(this.b.e),0)},
L:function(){return this.B("")}},
i3:{"^":"b;"},
jF:{"^":"i3;",
aX:function(a,b,c){var z,y
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
d6:{"^":"b;0a",
av:function(){var z=this.a
if(z!=null){C.a.N(z.a.b.b,this)
this.a.a.X()}this.fk()},
fk:function(){var z=this.a
if(z!=null){C.a.N(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.a8(J.ab(z.e),0)},
L:function(){return this.B("")}},
ez:{"^":"b;0a,0b,0c,0d,0e",
gE:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
aY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hh())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d6()
if(r.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.H(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d_()
s=p.a
if(s==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.q(P.u("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.H(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bB(p,o,l)}z=this.e
if(!(z==null))z.ag(0)},
ak:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ak()||!1
if(!this.a.ak())y=!1
z=this.e
if(!(z==null))z.ag(0)
return y},
eL:function(a,b,c,d,e){var z,y,x
H.v(d,"$isc",[F.ag],"$asc")
H.v(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.aX(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hH:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ag],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.eL(a,v,y,u,t))b.aY(u)}this.a.A()
this.c.cs()
this.d.cs()
this.b.hZ()
this.c.ct(new F.jF())
this.d.ct(new F.jh())
z=this.e
if(!(z==null))z.ag(0)},
h9:function(a){this.hH(new F.ke(),new F.iC())},
bY:function(){return this.h9(null)},
aV:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.aV()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.d(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdT(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).w(0,Math.sqrt(w*w+v*v+z*z))
if(!J.O(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.H(null)}}}}z=this.e
if(!(z==null))z.ag(0)},
hd:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aQ()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$bN().a)!==0)++w
if((x&$.$get$bO().a)!==0)++w
if((x&$.$get$bo().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
v=b.gcE(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dR])
for(r=0,q=0;q<w;++q){p=b.ha(q)
o=p.gcE(p)
C.a.m(s,q,new Z.dR(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hC(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.v(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bq(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dS(new Z.fd(34962,j),s,b)
i.b=H.e([],[Z.cm])
if(this.b.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dl(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cm(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dl(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cm(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.dl(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cm(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.D(z,"\n")},
af:function(a){var z=this.e
if(!(z==null))z.H(a)},
X:function(){return this.af(null)},
p:{
da:function(){var z,y
z=new F.ez()
y=new F.k9(z)
y.b=!1
y.c=H.e([],[F.ag])
z.a=y
y=new F.jc(z)
y.b=H.e([],[F.d6])
z.b=y
y=new F.jb(z)
y.b=H.e([],[F.d_])
z.c=y
y=new F.ja(z)
y.b=H.e([],[F.am])
z.d=y
z.e=null
return z}}},
ja:{"^":"b;a,0b",
h4:function(a){var z,y,x,w,v,u
H.v(a,"$isc",[F.ag],"$asc")
z=H.e([],[F.am])
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
C.a.h(z,F.bB(x,v,u))}}return z},
h5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isc",[F.ag],"$asc")
z=H.e([],[F.am])
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
ct:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aX(0,v,t)){v.av()
break}}}}},
cs:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghf(x)
if(y)x.av()}},
ak:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].c5())x=!1
return x},
c4:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].c3())x=!1
return x},
aV:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].aV()},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
L:function(){return this.B("")}},
jb:{"^":"b;a,0b",
gl:function(a){return this.b.length},
ct:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aX(0,v,t)){v.av()
break}}}}},
cs:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.O(x.a,x.b)
if(y)x.av()}},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.e([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.D(z,"\n")},
L:function(){return this.B("")}},
jc:{"^":"b;a,0b",
gl:function(a){return this.b.length},
hZ:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.av()}},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
L:function(){return this.B("")}},
ag:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c8:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cb(this.cx,x,u,z,y,w,v,a,t)},
hh:function(){return this.c8(null)},
sa1:function(a,b){var z
if(!J.O(this.f,b)){this.f=b
z=this.a
if(z!=null)z.X()}},
sdT:function(a){var z
a=a.w(0,Math.sqrt(a.F(a)))
if(!J.O(this.r,a)){this.r=a
z=this.a
if(z!=null)z.X()}},
se3:function(a){var z
if(!J.O(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
sd9:function(a){var z
if(!J.O(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.X()}},
hC:function(a){var z,y
z=J.I(a)
if(z.u(a,$.$get$aQ())){z=this.f
y=[P.t]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aP())){z=this.r
y=[P.t]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aO())){z=this.x
y=[P.t]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aR())){z=this.y
y=[P.t]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.u(a,$.$get$aS())){z=this.z
y=[P.t]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bN())){z=this.Q
y=[P.t]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bO())){z=this.Q
y=[P.t]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$bo()))return H.e([this.ch],[P.t])
else if(z.u(a,$.$get$aN())){z=this.cx
y=[P.t]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.t])},
c5:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.K(0,new F.kj(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ag(0)}return!0},
c3:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.K(0,new F.ki(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ag(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var z,y,x
z=H.e([],[P.i])
C.a.h(z,C.b.a8(J.ab(this.e),0))
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
x=C.a.D(z,", ")
return a+"{"+x+"}"},
L:function(){return this.B("")},
p:{
cb:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ag()
y=new F.kh(z)
y.b=H.e([],[F.d6])
z.b=y
y=new F.kd(z)
x=[F.d_]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.ka(z)
x=[F.am]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$fa()
z.e=0
y=$.$get$aQ()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aP().a)!==0?e:null
z.x=(x&$.$get$aO().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$fb().a)!==0?c:null
z.ch=(x&$.$get$bo().a)!==0?i:0
z.cx=(x&$.$get$aN().a)!==0?a:null
return z}}},
kj:{"^":"n:10;a",
$1:function(a){var z,y
H.f(a,"$isam")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
ki:{"^":"n:10;a",
$1:function(a){var z,y
H.f(a,"$isam")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
k9:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
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
this.a.X()
return!0},
h7:function(a,b,c,d,e,f,g,h,i){var z=F.cb(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
h6:function(a,b,c,d,e,f){return this.h7(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ak:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].c5()
return!0},
c4:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].c3()
return!0},
he:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.O(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.H(null)}}}}return!0},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
this.A()
z=H.e([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
L:function(){return this.B("")}},
ka:{"^":"b;a,0b,0c,0d",
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
K:function(a,b){H.h(b,{func:1,ret:-1,args:[F.am]})
C.a.K(this.b,b)
C.a.K(this.c,new F.kb(this,b))
C.a.K(this.d,new F.kc(this,b))},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
L:function(){return this.B("")}},
kb:{"^":"n:10;a,b",
$1:function(a){H.f(a,"$isam")
if(!J.O(a.a,this.a))this.b.$1(a)}},
kc:{"^":"n:10;a,b",
$1:function(a){var z
H.f(a,"$isam")
z=this.a
if(!J.O(a.a,z)&&!J.O(a.b,z))this.b.$1(a)}},
kd:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
L:function(){return this.B("")}},
kf:{"^":"b;"},
ke:{"^":"kf;",
aX:function(a,b,c){return J.O(b.f,c.f)}},
kg:{"^":"b;"},
iC:{"^":"kg;",
aY:function(a){var z,y,x,w
H.v(a,"$isc",[F.ag],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.w(0,Math.sqrt(z.F(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)a[x].sdT(z)
return}},
kh:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
L:function(){return this.B("")}}}],["","",,O,{"^":"",im:{"^":"dd;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gE:function(){var z=this.dy
if(z==null){z=D.Q()
this.dy=z}return z},
ac:[function(a){var z
H.f(a,"$isw")
z=this.dy
if(!(z==null))z.H(a)},function(){return this.ac(null)},"ii","$1","$0","geu",0,2,1],
fp:[function(a){H.f(a,"$isw")
this.a=null
this.ac(a)},function(){return this.fp(null)},"iS","$1","$0","gfo",0,2,1],
iu:[function(a,b){var z=V.au
z=new D.cn(a,H.v(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.ac(z)},"$2","geV",8,0,25],
iv:[function(a,b){var z=V.au
z=new D.co(a,H.v(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.ac(z)},"$2","geW",8,0,25],
cO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a3(z.e.length+3,4)*4
x=C.d.a3(z.f.length+3,4)*4
w=C.d.a3(z.r.length+3,4)*4
v=C.d.a3(z.x.length+3,4)*4
u=C.d.a3(z.y.length+3,4)*4
t=C.d.a3(z.z.length+3,4)*4
s=C.d.a3(this.e.a.length+3,4)*4
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
a6=$.$get$aQ()
if(c){z=$.$get$aP()
a6=new Z.bn(a6.a|z.a)}if(b){z=$.$get$aO()
a6=new Z.bn(a6.a|z.a)}if(a){z=$.$get$aR()
a6=new Z.bn(a6.a|z.a)}if(a0){z=$.$get$aS()
a6=new Z.bn(a6.a|z.a)}if(a2){z=$.$get$aN()
a6=new Z.bn(a6.a|z.a)}return new A.is(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.v(a,"$isc",[T.de],"$asc")
if(b!=null)if(!C.a.aS(a,b)){b.a=a.length
C.a.h(a,b)}},
az:function(a,b){var z,y,x,w,v,u,t
for(z=this.dx.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.I();){y=z.d
y.a=new V.E(0,0,1)
y.b=new V.E(0,1,0)
y.c=new V.E(-1,0,0)
x=y.d
if(x!=null){w=x.b7(0,b,y)
if(w!=null){x=w.b6(y.a)
v=x.a
u=x.b
t=x.c
y.a=x.w(0,Math.sqrt(v*v+u*u+t*t))
t=w.b6(y.b)
u=t.a
v=t.b
x=t.c
y.b=t.w(0,Math.sqrt(u*u+v*v+x*x))
x=w.b6(y.c)
v=x.a
u=x.b
t=x.c
y.c=x.w(0,Math.sqrt(v*v+u*u+t*t))}}}},
i0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cO()
y=a.fr.j(0,z.aw)
if(y==null){y=A.io(z,a.a)
x=y.b
if(x.length===0)H.q(P.u("May not cache a shader with no name."))
if(a.fr.bk(0,x))H.q(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aJ
z=b.e
if(!(z instanceof Z.dS)){b.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)b.d.ak()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.c4()
t.a.c4()
t=t.e
if(!(t==null))t.ag(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.he()
s=s.e
if(!(s==null))s.ag(0)}q=b.d.hd(new Z.kk(a.a),v)
q.aK($.$get$aQ()).e=this.a.y.c
if(z)q.aK($.$get$aP()).e=this.a.Q.c
if(u)q.aK($.$get$aO()).e=this.a.z.c
if(w.rx)q.aK($.$get$aR()).e=this.a.ch.c
if(t)q.aK($.$get$aS()).e=this.a.cx.c
if(w.x1)q.aK($.$get$aN()).e=this.a.cy.c
b.e=q}z=T.de
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.ho()
if(w.fx){u=this.a
t=a.dx
t=t.gW(t)
u=u.db
u.toString
u.ah(t.aa(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gW(t)
s=a.dx
s=t.k(0,s.gW(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ah(t.aa(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghX()
s=a.dx
s=t.k(0,s.gW(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ah(t.aa(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ah(t.aa(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ah(t.aa(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ah(C.t.aa(t,!0))}if(w.aI>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.f(s,"$isau")
t=t.k3
if(n>=t.length)return H.d(t,n)
t=t[n]
m=new Float32Array(H.bq(H.v(s.aa(0,!0),"$isc",u,"$asc")))
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
case C.e:this.U(p,this.f.d)
u=this.a
t=this.f.d
u.ad(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.f.e)
u=this.a
t=this.f.e
u.a6(u.r2,u.rx,t)
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
case C.e:this.U(p,this.r.d)
u=this.a
t=this.r.d
u.ad(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.r.e)
u=this.a
t=this.r.e
u.a6(u.x2,u.y1,t)
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
case C.e:this.U(p,this.x.d)
u=this.a
t=this.x.d
u.ad(u.aI,u.aJ,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.x.e)
u=this.a
t=this.x.e
u.a6(u.aw,u.aJ,t)
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
u=u.bl
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.U(p,this.y.d)
u=this.a
t=this.y.d
u.ad(u.dg,u.bm,t)
t=this.a
u=this.y.f
t=t.bl
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.y.e)
u=this.a
t=this.y.e
u.a6(u.dh,u.bm,t)
t=this.a
u=this.y.f
t=t.bl
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bn
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bp
t.a.uniform1f(t.d,r)
break
case C.e:this.U(p,this.z.d)
u=this.a
t=this.z.d
u.ad(u.di,u.bo,t)
t=this.a
u=this.z.f
t=t.bn
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bp
u.a.uniform1f(u.d,r)
break
case C.f:this.U(p,this.z.e)
u=this.a
t=this.z.e
u.a6(u.dj,u.bo,t)
t=this.a
u=this.z.f
t=t.bn
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bp
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dw
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cc
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.b6(i.gdf(i))
r=s.a
g=s.b
f=s.c
f=s.w(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gae(i)
g=h.c
r=f.gbz()
s=f.gb8()
f=f.gbh()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dz
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cd
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb1(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcA(s)
r.a.uniform3f(r.d,g,f,s)
s=l.b5(i.gb1(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gae(i)
f=h.d
g=s.gbz()
r=s.gb8()
s=s.gbh()
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
u=this.a.dA
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.ce
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb1(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcA(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gdf(i).j_()
f=h.c
g=s.gc9(s)
r=s.gca(s)
s=s.gcb()
f.a.uniform3f(f.d,g,r,s)
s=l.b5(i.gb1(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gae(i)
r=h.e
g=s.gbz()
f=s.gb8()
s=s.gbh()
r.a.uniform3f(r.d,g,f,s)
s=i.giX()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giW()
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
u=this.a.dB
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
r=this.a.cf
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.f
H.v(p,"$isc",s,"$asc")
if(r!=null)if(!C.a.aS(p,r)){r.a=p.length
C.a.h(p,r)}r=i.a
g=h.d
g.a.uniform3f(g.d,r.a,r.b,r.c)
r=i.b
g=h.b
g.a.uniform3f(g.d,r.a,r.b,r.c)
r=i.c
g=h.c
g.a.uniform3f(g.d,r.a,r.b,r.c)
r=l.b6(i.a)
g=r.a
f=r.b
e=r.c
e=r.w(0,Math.sqrt(g*g+f*f+e*e))
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
u=this.a.dC
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.cg
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gcw()
H.v(p,"$isc",r,"$asc")
if(!C.a.aS(p,g)){g.scU(p.length)
C.a.h(p,g)}d=l.k(0,i.gW(i))
g=i.gW(i).b5(new V.a3(0,0,0))
f=h.b
e=g.gq(g)
c=g.gt(g)
g=g.gcA(g)
f.a.uniform3f(f.d,e,c,g)
g=d.b5(new V.a3(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dN(0)
c=h.d
m=new Float32Array(H.bq(H.v(new V.cq(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).aa(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gae(i)
g=h.e
e=c.gbz()
f=c.gb8()
c=c.gbh()
g.a.uniform3f(g.d,e,f,c)
c=i.gcw()
g=c.gdP(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gdP(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.giY(c))
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
u=this.a.dD
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.ci
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gcw()
H.v(p,"$isc",z,"$asc")
if(!C.a.aS(p,s)){s.scU(p.length)
C.a.h(p,s)}s=i.gb1(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcA(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gdf(i)
f=h.c
g=s.gc9(s)
r=s.gca(s)
s=s.gcb()
f.a.uniform3f(f.d,g,r,s)
s=i.gj7()
r=h.d
g=s.gc9(s)
f=s.gca(s)
s=s.gcb()
r.a.uniform3f(r.d,g,f,s)
s=i.gbA(i)
f=h.e
g=s.gc9(s)
r=s.gca(s)
s=s.gcb()
f.a.uniform3f(f.d,g,r,s)
s=l.b5(i.gb1(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gcw()
r=s.gdP(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gil()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gcU())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gae(i)
r=h.y
g=s.gbz()
f=s.gb8()
s=s.gbh()
r.a.uniform3f(r.d,g,f,s)
s=i.gj5()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gj6()
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
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.e:this.U(p,this.Q.d)
z=this.a
u=this.Q.d
z.ad(z.dk,z.bq,u)
break
case C.f:this.U(p,this.Q.e)
z=this.a
u=this.Q.e
z.a6(z.dl,z.bq,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gW(u).dN(0)
a.Q=u}z=z.fy
z.toString
z.ah(u.aa(0,!0))}if(w.dy){this.U(p,this.ch)
z=this.a
u=this.ch
z.a6(z.dm,z.dn,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.br
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.e:this.U(p,this.cx.d)
z=this.a
u=this.cx.d
z.ad(z.dq,z.bs,u)
u=this.a
z=this.cx.f
u=u.br
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.f:this.U(p,this.cx.e)
z=this.a
u=this.cx.e
z.a6(z.dr,z.bs,u)
u=this.a
z=this.cx.f
u=u.br
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bu
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bt
u.a.uniform1f(u.d,s)
break
case C.e:this.U(p,this.cy.d)
z=this.a
u=this.cy.d
z.ad(z.ds,z.bv,u)
u=this.a
z=this.cy.f
u=u.bu
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bt
z.a.uniform1f(z.d,s)
break
case C.f:this.U(p,this.cy.e)
z=this.a
u=this.cy.e
z.a6(z.dt,z.bv,u)
u=this.a
z=this.cy.f
u=u.bu
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bt
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bw
z.a.uniform1f(z.d,t)
break
case C.e:this.U(p,this.db.d)
z=this.a
t=this.db.d
z.ad(z.du,z.bx,t)
t=this.a
z=this.db.f
t=t.bw
t.a.uniform1f(t.d,z)
break
case C.f:this.U(p,this.db.e)
z=this.a
t=this.db.e
z.a6(z.dv,z.bx,t)
t=this.a
z=this.db.f
t=t.bw
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].aR(a)
z=b.e
z.aR(a)
z.aM(a)
z.ig(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.hm()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cO().aw}},iq:{"^":"d1;0f,a,b,0c,0d,0e"},d1:{"^":"b;",
be:["ei",function(){}]},ir:{"^":"d1;a,b,0c,0d,0e"},ba:{"^":"d1;0f,a,b,0c,0d,0e",
d0:function(a){var z,y
if(!J.O(this.f,a)){z=this.f
this.f=a
y=new D.S(this.b+".color",z,a,this,[V.a0])
y.b=!0
this.a.ac(y)}},
be:["bF",function(){this.ei()
this.d0(new V.a0(1,1,1))}],
sae:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.be()
z=this.a
z.a=null
z.ac(null)}this.d0(b)}},it:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
ft:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.S(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.ac(z)}},
be:function(){this.bF()
this.ft(1)}},iu:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
bV:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.S(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.ac(z)}},
be:function(){this.bF()
this.bV(100)}},dd:{"^":"b;"}}],["","",,T,{"^":"",de:{"^":"cL;"},eG:{"^":"de;0b,0c,0d,0e,0f,0r,0x,0y,a",
aR:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}}},jr:{"^":"b;a,0b,0c,0d,0e",
hF:function(a,b,c,d,e){var z,y,x,w
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
w=new T.eG(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.Q()
z=W.ac
W.a_(x,"load",H.h(new T.js(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hE:function(a,b){return this.hF(a,!1,!1,!1,b)},
fq:function(a,b,c){var z,y,x,w
b=V.dE(b,2)
z=V.dE(a.width,2)
y=V.dE(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cQ(null,null)
x.width=z
x.height=y
w=H.f(C.l.ea(x,"2d"),"$isdV")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mr(w.getImageData(0,0,x.width,x.height))}}},js:{"^":"n:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fq(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.i7(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.hn()}++x.e}}}],["","",,V,{"^":"",he:{"^":"b;",
aW:function(a,b){return!0},
i:function(a){return"all"},
$isc5:1},c5:{"^":"b;"},en:{"^":"b;",
aW:["eh",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].aW(0,b))return!0
return!1}],
i:["cF",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc5:1},bH:{"^":"en;0a",
aW:function(a,b){return!this.eh(0,b)},
i:function(a){return"!["+this.cF(0)+"]"}},j8:{"^":"b;0a",
em:function(a){var z,y
if(a.a.length<=0)throw H.a(P.u("May not create a SetMatcher with zero characters."))
z=new H.aX(0,0,[P.m,P.ah])
for(y=new H.el(a,a.gl(a),0,[H.ax(a,"x",0)]);y.I();)z.m(0,y.d,!0)
this.a=z},
aW:function(a,b){return this.a.bk(0,b)},
i:function(a){var z=this.a
return P.c8(z.gam(z),0,null)},
$isc5:1,
p:{
aa:function(a){var z=new V.j8()
z.em(a)
return z}}},eB:{"^":"b;a,b,0c,0d",
ghI:function(a){return this.b},
D:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eM(this.a.M(0,b))
w.a=H.e([],[V.c5])
w.c=!1
C.a.h(this.c,w)
return w},
hq:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.aW(0,a))return w}return},
i:function(a){return this.b}},eJ:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h3(this.b,"\n","\\n")
y=H.h3(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eK:{"^":"b;a,b,0c",
i:function(a){return this.b}},jA:{"^":"b;0a,0b,0c",
M:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eB(this,b)
z.c=H.e([],[V.eM])
this.a.m(0,b,z)}return z},
b3:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eK(this,a)
y=P.i
z.c=new H.aX(0,0,[y,y])
this.b.m(0,a,z)}return z},
ie:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eJ])
y=this.c
x=[P.m]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.G(a,t)
r=y.hq(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c8(w,0,null)
throw H.a(P.u("Untokenizable string [state: "+y.ghI(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c8(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eJ(o==null?p.b:o,q,t)}++t}}}},eM:{"^":"en;b,0c,0a",
i:function(a){return this.b.b+": "+this.cF(0)}}}],["","",,X,{"^":"",dU:{"^":"b;",$isaK:1},hR:{"^":"eE;0a,0b,0c,0d,0e,0f,0r,0x",
gE:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z}},iF:{"^":"b;0a,0b,0c,0d,0e",
gE:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
aO:[function(a){var z
H.f(a,"$isw")
z=this.e
if(!(z==null))z.H(a)},function(){return this.aO(null)},"ij","$1","$0","gcH",0,2,1],
saZ:function(a){var z,y,x
if(!J.O(this.a,a)){z=this.a
if(z!=null){z=z.gE()
z.toString
y=H.h(this.gcH(),{func:1,ret:-1,args:[D.w]})
C.a.N(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gE()
z.toString
y=H.h(this.gcH(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.S("mover",x,this.a,this,[U.aj])
z.b=!0
this.aO(z)}},
$isaK:1,
$isdU:1},eE:{"^":"b;"}}],["","",,V,{"^":"",
n0:function(a){P.jz(C.G,new V.n1(a))},
n1:{"^":"n:49;a",
$1:function(a){H.f(a,"$isbk")
P.dF(C.h.e5(this.a.ghu(),2)+" fps")}},
iT:{"^":"b;a,b,0c",
d7:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.f5().gcr().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.d5(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dK(this.c).h(0,v)
t=W.hU("radio")
t.checked=x
t.name=z
z=W.ac
W.a_(t,"change",H.h(new V.iU(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dK(this.c).h(0,w.createElement("br"))},
aQ:function(a,b,c){return this.d7(a,b,c,!1)},
d5:function(a){var z,y,x,w,v
z=P.f5()
y=P.i
x=P.i9(z.gcr(),y,y)
x.m(0,this.a,a)
w=z.e0(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.ln([],[]).cz(""),"",v)}},
iU:{"^":"n:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.d5(this.d)}}},
jd:{"^":"b;0a,0b",
eo:function(a,b){var z,y,x,w,v,u,t
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
t=W.ac
W.a_(z,"scroll",H.h(new V.jg(x),{func:1,ret:-1,args:[t]}),!1,t)},
h8:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isc",[P.i],"$asc")
this.fA()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ie(C.a.hA(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.h2(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cz(C.S,s,C.k,!1)
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
h3:function(a){var z,y,x,w,v,u,t
H.v(a,"$isc",[P.i],"$asc")
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
x=H.f(w.insertCell(-1),"$isdc").style
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
t=H.f(w.insertCell(-1),"$isdc")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fA:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jA()
y=P.i
z.a=new H.aX(0,0,[y,V.eB])
z.b=new H.aX(0,0,[y,V.eK])
z.c=z.M(0,"Start")
y=z.M(0,"Start").D(0,"Bold")
x=V.aa(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Bold").D(0,"Bold")
x=new V.bH()
w=[V.c5]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.aa(new H.a4("*"))
C.a.h(x.a,y)
y=z.M(0,"Bold").D(0,"BoldEnd")
x=V.aa(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").D(0,"Italic")
x=V.aa(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Italic").D(0,"Italic")
x=new V.bH()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.aa(new H.a4("_"))
C.a.h(x.a,y)
y=z.M(0,"Italic").D(0,"ItalicEnd")
x=V.aa(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").D(0,"Code")
x=V.aa(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Code").D(0,"Code")
x=new V.bH()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.aa(new H.a4("`"))
C.a.h(x.a,y)
y=z.M(0,"Code").D(0,"CodeEnd")
x=V.aa(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").D(0,"LinkHead")
x=V.aa(new H.a4("["))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"LinkHead").D(0,"LinkTail")
x=V.aa(new H.a4("|"))
C.a.h(y.a,x)
x=z.M(0,"LinkHead").D(0,"LinkEnd")
y=V.aa(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.M(0,"LinkHead").D(0,"LinkHead")
y=new V.bH()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("|]"))
C.a.h(y.a,x)
x=z.M(0,"LinkTail").D(0,"LinkEnd")
y=V.aa(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.M(0,"LinkTail").D(0,"LinkTail")
y=new V.bH()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("|]"))
C.a.h(y.a,x)
C.a.h(z.M(0,"Start").D(0,"Other").a,new V.he())
x=z.M(0,"Other").D(0,"Other")
y=new V.bH()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("*_`["))
C.a.h(y.a,x)
x=z.M(0,"BoldEnd")
x.d=x.a.b3("Bold")
x=z.M(0,"ItalicEnd")
x.d=x.a.b3("Italic")
x=z.M(0,"CodeEnd")
x.d=x.a.b3("Code")
x=z.M(0,"LinkEnd")
x.d=x.a.b3("Link")
x=z.M(0,"Other")
x.d=x.a.b3("Other")
this.b=z},
p:{
je:function(a,b){var z=new V.jd()
z.eo(a,!0)
return z}}},
jg:{"^":"n:14;a",
$1:function(a){P.jy(C.r,new V.jf(this.a))}},
jf:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.h.a9(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,M,{"^":"",
fZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=V.je("Test 023",!0)
y=W.cQ(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.h8(H.e(["Test of the Material Lighting shader with a textured directional ","light. Use Ctrl plus the mouse to move the light."],x))
z.h3(H.e(["shapes"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.jw(w,!0,!0,!0,!1)
u=U.f8(!1,!1,v.r,!1,!1,!1,null,!1)
t=U.f8(!1,!0,v.r,!1,!1,!1,null,!1)
s=new V.a0(0.6,0.9,1)
z=v.f.hE("../resources/Test.png",!0)
r=new D.cu()
r.e=new V.a0(1,1,1)
r.a=new V.E(0,0,1)
r.b=new V.E(0,1,0)
r.c=new V.E(-1,0,0)
q=r.d
r.d=t
p=t.gE()
p.toString
o=H.h(r.gbQ(),{func:1,ret:-1,args:[D.w]})
C.a.h(p.a,o)
p=new D.S("mover",q,r.d,r,[U.aj])
p.b=!0
r.as(p)
if(!r.e.u(0,s)){q=r.e
r.e=s
p=new D.S("color",q,s,r,[V.a0])
p.b=!0
r.as(p)}p=r.f
if(p!==z){if(p!=null){p=p.y
o=H.h(r.gbQ(),{func:1,ret:-1,args:[D.w]})
C.a.N(p.a,o)}q=r.f
r.f=z
z=z.y
p=H.h(r.gbQ(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,p)
z=new D.S("texture",q,r.f,r,[T.eG])
z.b=!0
r.as(z)}n=new O.im()
z=O.cR(V.au)
n.e=z
z.ba(n.geV(),n.geW())
z=new O.ba(n,"emission")
z.c=C.c
z.f=new V.a0(0,0,0)
n.f=z
z=new O.ba(n,"ambient")
z.c=C.c
z.f=new V.a0(0,0,0)
n.r=z
z=new O.ba(n,"diffuse")
z.c=C.c
z.f=new V.a0(0,0,0)
n.x=z
z=new O.ba(n,"invDiffuse")
z.c=C.c
z.f=new V.a0(0,0,0)
n.y=z
z=new O.iu(n,"specular")
z.c=C.c
z.f=new V.a0(0,0,0)
z.ch=100
n.z=z
z=new O.ir(n,"bump")
z.c=C.c
n.Q=z
n.ch=null
z=new O.ba(n,"reflect")
z.c=C.c
z.f=new V.a0(0,0,0)
n.cx=z
z=new O.it(n,"refract")
z.c=C.c
z.f=new V.a0(0,0,0)
z.ch=1
n.cy=z
z=new O.iq(n,"alpha")
z.c=C.c
z.f=1
n.db=z
z=new D.i2()
z.bG(D.a2)
z.e=H.e([],[D.hB])
z.f=H.e([],[D.iH])
z.r=H.e([],[D.ji])
z.x=H.e([],[D.cu])
z.y=H.e([],[D.jt])
z.z=H.e([],[D.ju])
z.Q=null
z.ch=null
z.cD(z.geU(),z.gfd(),z.gff())
n.dx=z
p=z.Q
if(p==null){p=D.Q()
z.Q=p
z=p}else z=p
p={func:1,ret:-1,args:[D.w]}
o=H.h(n.gfo(),p)
C.a.h(z.a,o)
o=n.dx
z=o.ch
if(z==null){z=D.Q()
o.ch=z}o=H.h(n.geu(),p)
C.a.h(z.a,o)
n.dy=null
n.dx.h(0,r)
n.f.sae(0,new V.a0(0,0,0))
o=n.r
o.sae(0,new V.a0(0,0,0))
z=n.x
z.sae(0,new V.a0(0.7,0.7,0.7))
z=n.z
z.sae(0,new V.a0(0.3,0.3,0.3))
z=n.z
if(z.c===C.c){z.c=C.i
z.bF()
z.bV(100)
o=z.a
o.a=null
o.ac(null)}z.bV(100)
m=E.e7(null,!0,null,"",null,null)
m.sab(0,F.h5(30,1,15,0.5))
l=E.e7(null,!0,null,"",null,null)
l.saZ(U.cS(V.aJ(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
z=F.dx(1,null,null,1)
z.aV()
l.sab(0,z)
k=new U.ea()
k.bG(U.aj)
k.ba(k.geT(),k.gfe())
k.e=null
k.f=V.c6()
k.r=0
k.h(0,u)
k.h(0,U.cS(V.eo(3.141592653589793)))
k.h(0,U.cS(V.aJ(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
z=new M.hJ()
o=O.cR(E.aI)
z.d=o
o.ba(z.geY(),z.geZ())
z.e=null
z.f=null
z.r=null
z.x=null
j=new X.iF()
j.b=1.0471975511965976
j.c=0.1
j.d=2000
j.saZ(null)
o=j.b
if(!$.r.$2(o,1.0471975511965976)){q=j.b
j.b=1.0471975511965976
o=new D.S("fov",q,1.0471975511965976,j,[P.t])
o.b=!0
j.aO(o)}o=j.c
if(!$.r.$2(o,0.1)){q=j.c
j.c=0.1
o=new D.S("near",q,0.1,j,[P.t])
o.b=!0
j.aO(o)}o=j.d
if(!$.r.$2(o,2000)){q=j.d
j.d=2000
o=new D.S("far",q,2000,j,[P.t])
o.b=!0
j.aO(o)}o=z.a
if(o!==j){if(o!=null){o=o.gE()
o.toString
i=H.h(z.gai(),p)
C.a.N(o.a,i)}q=z.a
z.a=j
o=j.gE()
o.toString
i=H.h(z.gai(),p)
C.a.h(o.a,i)
o=new D.S("camera",q,z.a,z,[X.dU])
o.b=!0
z.aD(o)}h=new X.hR()
o=new V.b3(0,0,0,1)
h.a=o
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
o=V.ex(0,0,1,1)
h.r=o
o=z.b
if(o!==h){if(o!=null){o=o.gE()
o.toString
i=H.h(z.gai(),p)
C.a.N(o.a,i)}q=z.b
z.b=h
o=h.gE()
o.toString
i=H.h(z.gai(),p)
C.a.h(o.a,i)
o=new D.S("target",q,z.b,z,[X.eE])
o.b=!0
z.aD(o)}z.se2(null)
z.se2(n)
z.d.h(0,m)
z.d.h(0,l)
z.a.saZ(k)
o=v.d
if(o!==z){if(o!=null){o=o.gE()
o.toString
i=H.h(v.gcG(),p)
C.a.N(o.a,i)}v.d=z
z=z.gE()
z.toString
p=H.h(v.gcG(),p)
C.a.h(z.a,p)
v.er()}z=new V.iT("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.q("Failed to find shapes for RadioGroup")
z.aQ(0,"Cube",new M.mP(m))
z.aQ(0,"Cylinder",new M.mQ(m))
z.aQ(0,"Cone",new M.mR(m))
z.aQ(0,"Sphere",new M.mS(m))
z.d7(0,"Toroid",new M.mT(m),!0)
z.aQ(0,"Knot",new M.mU(m))
V.n0(v)},
mP:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.dx(1,null,null,1))}},
mQ:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.fP(1,!0,!0,1,40,1))}},
mR:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.fP(1,!0,!1,1,40,0))}},
mS:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.n2(6,null,6))}},
mT:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.h5(30,1,15,0.5))}},
mU:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.mM(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ef.prototype
return J.ee.prototype}if(typeof a=="string")return J.c3.prototype
if(a==null)return J.eg.prototype
if(typeof a=="boolean")return J.hY.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c4.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.aF=function(a){if(typeof a=="string")return J.c3.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c4.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.cd=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c4.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.mC=function(a){if(typeof a=="number")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ca.prototype
return a}
J.mD=function(a){if(typeof a=="number")return J.c2.prototype
if(typeof a=="string")return J.c3.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ca.prototype
return a}
J.dA=function(a){if(typeof a=="string")return J.c3.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ca.prototype
return a}
J.aV=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c4.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.O=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).u(a,b)}
J.h6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mC(a).O(a,b)}
J.dH=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mD(a).k(a,b)}
J.dI=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fW(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aF(a).j(a,b)}
J.cI=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fW(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cd(a).m(a,b,c)}
J.h7=function(a,b){return J.dA(a).G(a,b)}
J.h8=function(a,b,c){return J.aV(a).fm(a,b,c)}
J.h9=function(a,b,c,d){return J.aV(a).d8(a,b,c,d)}
J.ha=function(a,b){return J.dA(a).V(a,b)}
J.cJ=function(a,b,c){return J.aF(a).hg(a,b,c)}
J.cK=function(a,b){return J.cd(a).J(a,b)}
J.hb=function(a,b,c,d){return J.cd(a).ax(a,b,c,d)}
J.dJ=function(a,b){return J.cd(a).K(a,b)}
J.dK=function(a){return J.aV(a).gc6(a)}
J.b2=function(a){return J.I(a).gT(a)}
J.by=function(a){return J.cd(a).ga_(a)}
J.at=function(a){return J.aF(a).gl(a)}
J.hc=function(a,b){return J.aV(a).i1(a,b)}
J.hd=function(a,b){return J.aV(a).sa0(a,b)}
J.ab=function(a){return J.I(a).i(a)}
I.ak=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cP.prototype
C.H=J.p.prototype
C.a=J.b9.prototype
C.I=J.ee.prototype
C.d=J.ef.prototype
C.t=J.eg.prototype
C.h=J.c2.prototype
C.b=J.c3.prototype
C.P=J.c4.prototype
C.V=H.d5.prototype
C.W=W.iB.prototype
C.z=J.iG.prototype
C.X=P.d8.prototype
C.q=J.ca.prototype
C.A=W.bP.prototype
C.B=W.kn.prototype
C.D=new P.hj(!1)
C.C=new P.hi(C.D)
C.E=new P.iE()
C.F=new P.k8()
C.j=new P.l9()
C.c=new A.ci(0,"ColorSourceType.None")
C.i=new A.ci(1,"ColorSourceType.Solid")
C.e=new A.ci(2,"ColorSourceType.Texture2D")
C.f=new A.ci(3,"ColorSourceType.TextureCube")
C.r=new P.b6(0)
C.G=new P.b6(5e6)
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
C.w=H.e(I.ak([127,2047,65535,1114111]),[P.m])
C.m=H.e(I.ak([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.e(I.ak([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.e(I.ak([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.e(I.ak([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.e(I.ak([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.e(I.ak([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.e(I.ak([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.e(I.ak([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.e(I.ak([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.e(I.ak([]),[P.i])
C.U=new H.hv(0,{},C.Q,[P.i,P.i])
C.k=new P.k1(!1)
$.az=0
$.bz=null
$.dP=null
$.ds=!1
$.fU=null
$.fL=null
$.h1=null
$.cD=null
$.cG=null
$.dB=null
$.br=null
$.bV=null
$.bW=null
$.dt=!1
$.T=C.j
$.e4=null
$.e3=null
$.e2=null
$.e1=null
$.r=V.iv()
$.et=null
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
I.$lazy(y,x,w)}})(["e0","$get$e0",function(){return H.fT("_$dart_dartClosure")},"cX","$get$cX",function(){return H.fT("_$dart_js")},"eN","$get$eN",function(){return H.aC(H.cv({
toString:function(){return"$receiver$"}}))},"eO","$get$eO",function(){return H.aC(H.cv({$method$:null,
toString:function(){return"$receiver$"}}))},"eP","$get$eP",function(){return H.aC(H.cv(null))},"eQ","$get$eQ",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eU","$get$eU",function(){return H.aC(H.cv(void 0))},"eV","$get$eV",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eS","$get$eS",function(){return H.aC(H.eT(null))},"eR","$get$eR",function(){return H.aC(function(){try{null.$method$}catch(z){return z.message}}())},"eX","$get$eX",function(){return H.aC(H.eT(void 0))},"eW","$get$eW",function(){return H.aC(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dm","$get$dm",function(){return P.ko()},"bX","$get$bX",function(){return[]},"f9","$get$f9",function(){return P.k5()},"ff","$get$ff",function(){return H.iz(H.bq(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fB","$get$fB",function(){return P.iZ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fH","$get$fH",function(){return P.m8()},"e_","$get$e_",function(){return{}},"fc","$get$fc",function(){return Z.aq(0)},"fa","$get$fa",function(){return Z.aq(511)},"aQ","$get$aQ",function(){return Z.aq(1)},"aP","$get$aP",function(){return Z.aq(2)},"aO","$get$aO",function(){return Z.aq(4)},"aR","$get$aR",function(){return Z.aq(8)},"aS","$get$aS",function(){return Z.aq(16)},"bN","$get$bN",function(){return Z.aq(32)},"bO","$get$bO",function(){return Z.aq(64)},"fb","$get$fb",function(){return Z.aq(96)},"bo","$get$bo",function(){return Z.aq(128)},"aN","$get$aN",function(){return Z.aq(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.m,[P.j,E.aI]]},{func:1,ret:P.G,args:[F.ag,P.t,P.t]},{func:1,ret:P.G,args:[F.am]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[D.w]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.G,args:[W.ac]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:V.a3,args:[P.t]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.m,[P.j,D.a2]]},{func:1,ret:-1,args:[W.bF]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:-1,args:[P.m,[P.j,U.aj]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.m,[P.j,V.au]]},{func:1,ret:P.G,args:[,]},{func:1,ret:W.a1,args:[W.J]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.av]},{func:1,ret:P.ah,args:[W.J]},{func:1,ret:P.G,args:[P.W]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.ah,args:[P.t,P.t]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:-1,args:[W.bP]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ah,args:[[P.j,D.a2]]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,args:[,P.i]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.N,args:[P.m]},{func:1,args:[P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:[P.H,P.i,P.i],args:[[P.H,P.i,P.i],P.i]},{func:1,ret:P.G,args:[P.bk]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.n5(d||a)
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
Isolate.dy=a.dy
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
if(typeof dartMainRunner==="function")dartMainRunner(M.fZ,[])
else M.fZ([])})})()
//# sourceMappingURL=test.dart.js.map
